/**
 * Service Worker for Ali Kök Portfolio
 * PWA support, offline functionality, and caching
 */

const CACHE_NAME = 'portfolio-v1.0.0';
const STATIC_CACHE = 'static-v1.0.0';
const DYNAMIC_CACHE = 'dynamic-v1.0.0';

// Files to cache for offline functionality
const STATIC_FILES = [
  '/',
  '/index.html',
  '/assets/css/style.css',
  '/assets/css/modal.css',
  '/assets/js/script.js',
  '/assets/js/language.js',
  '/assets/js/navigation.js',
  '/assets/js/project-data.js',
  '/assets/js/performance.js',
  '/assets/js/image-optimization.js',
  '/assets/images/my-avatar.png',
  '/assets/images/avatars.jpg',
  '/assets/images/logo.ico',
  '/assets/images/logo.svg',
  // Core project images
  '/assets/images/project-1.jpg',
  '/assets/images/project-2.png',
  '/assets/images/project-3.jpg',
  // Essential icons
  'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js',
  'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'
];

// Dynamic files to cache
const DYNAMIC_FILES = [
  '/assets/images/',
  'https://fonts.googleapis.com/',
  'https://fonts.gstatic.com/'
];

/**
 * Service Worker Install Event
 */
self.addEventListener('install', (event) => {
  console.log('[SW] Installing Service Worker...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      console.log('[SW] Caching static files');
      return cache.addAll(STATIC_FILES);
    }).catch((error) => {
      console.error('[SW] Error caching static files:', error);
    })
  );
  
  // Force activation
  self.skipWaiting();
});

/**
 * Service Worker Activate Event
 */
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating Service Worker...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  // Take control of all clients
  return self.clients.claim();
});

/**
 * Service Worker Fetch Event
 */
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        console.log('[SW] Serving from cache:', event.request.url);
        return cachedResponse;
      }
      
      // Network first for critical resources
      return fetch(event.request).then((response) => {
        // Check if it's a valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        
        // Clone the response
        const responseToCache = response.clone();
        
        // Determine cache strategy
        if (shouldCacheDynamically(event.request.url)) {
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        
        return response;
      }).catch((error) => {
        console.log('[SW] Fetch failed, serving offline page:', error);
        
        // Return offline page for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
        
        // Return cached version if available
        return caches.match(event.request);
      });
    })
  );
});

/**
 * Background Sync for offline actions
 */
self.addEventListener('sync', (event) => {
  console.log('[SW] Background sync:', event.tag);
  
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

/**
 * Push notifications
 */
self.addEventListener('push', (event) => {
  console.log('[SW] Push message received');
  
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: '/assets/images/logo.svg',
    badge: '/assets/images/logo.ico',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View',
        icon: '/assets/images/logo.svg'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/assets/images/logo.svg'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification('Portfolio Update', options)
  );
});

/**
 * Notification click handler
 */
self.addEventListener('notificationclick', (event) => {
  console.log('[SW] Notification clicked:', event.action);
  
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

/**
 * Helper Functions
 */
function shouldCacheDynamically(url) {
  return DYNAMIC_FILES.some(pattern => url.includes(pattern));
}

function doBackgroundSync() {
  // Implement background sync logic
  console.log('[SW] Performing background sync');
  return Promise.resolve();
}

/**
 * Cache cleanup
 */
function cleanupCaches() {
  return caches.keys().then((cacheNames) => {
    return Promise.all(
      cacheNames.map((cacheName) => {
        if (cacheName.startsWith('dynamic-') && cacheName !== DYNAMIC_CACHE) {
          return caches.delete(cacheName);
        }
      })
    );
  });
}

// Periodic cache cleanup
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CLEANUP_CACHES') {
    event.waitUntil(cleanupCaches());
  }
});

console.log('[SW] Service Worker loaded successfully');