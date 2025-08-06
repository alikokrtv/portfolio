/**
 * Image Optimization and Lazy Loading System
 * Modern resim optimizasyonu ve lazy loading
 */

class ImageOptimizer {
  constructor() {
    this.lazyImages = document.querySelectorAll('img[loading="lazy"]');
    this.imageObserver = null;
    this.init();
  }

  init() {
    // Intersection Observer desteği kontrolü
    if ('IntersectionObserver' in window) {
      this.setupLazyLoading();
    } else {
      // Fallback: tüm resimleri hemen yükle
      this.loadAllImages();
    }

    // WebP format desteği kontrolü
    this.checkWebPSupport();
    
    // Resim yükleme error handling
    this.setupErrorHandling();
    
    console.log('🖼️ Image optimization initialized');
  }

  setupLazyLoading() {
    const options = {
      root: null,
      rootMargin: '50px', // Resim görünmeden 50px önce yükle
      threshold: 0.1
    };

    this.imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImage(entry.target);
          this.imageObserver.unobserve(entry.target);
        }
      });
    }, options);

    // Lazy loading resimlerini observe et
    this.lazyImages.forEach(img => {
      this.imageObserver.observe(img);
    });
  }

  loadImage(img) {
    // Resim source'unu ayarla
    if (img.dataset.src) {
      img.src = img.dataset.src;
    }
    
    if (img.dataset.srcset) {
      img.srcset = img.dataset.srcset;
    }

    // Yükleme tamamlandığında fade-in efekti
    img.onload = () => {
      img.classList.add('loaded');
      // Performance monitoring için
      if (window.performanceMonitor) {
        window.performanceMonitor.sendToAnalytics('image_loaded', {
          src: img.src,
          loadTime: performance.now()
        });
      }
    };

    // Hata durumunda fallback
    img.onerror = () => {
      console.warn(`Failed to load image: ${img.src}`);
      img.classList.add('error');
    };
  }

  loadAllImages() {
    // Eski tarayıcılar için fallback
    this.lazyImages.forEach(img => {
      this.loadImage(img);
    });
  }

  checkWebPSupport() {
    // WebP desteği kontrolü
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      const isSupported = (webP.height === 2);
      document.documentElement.classList.toggle('webp', isSupported);
      document.documentElement.classList.toggle('no-webp', !isSupported);
      
      if (isSupported) {
        console.log('✅ WebP formatı destekleniyor');
      } else {
        console.log('❌ WebP formatı desteklenmiyor, fallback kullanılıyor');
      }
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }

  setupErrorHandling() {
    // Tüm resimlere error handling ekle
    document.addEventListener('error', (e) => {
      if (e.target.tagName === 'IMG') {
        console.warn(`Image load error: ${e.target.src}`);
        
        // Fallback image göster
        const fallbackSrc = './assets/images/placeholder.png';
        if (e.target.src !== fallbackSrc) {
          e.target.src = fallbackSrc;
        }
      }
    }, true);
  }

  // Manuel resim preload
  preloadImages(urls) {
    urls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  }

  // Critical images için immediate loading
  loadCriticalImages() {
    const criticalImages = document.querySelectorAll('img[loading="eager"]');
    criticalImages.forEach(img => {
      img.classList.add('loaded');
    });
  }

  // Responsive image source seçimi
  selectOptimalImageSource(img) {
    const devicePixelRatio = window.devicePixelRatio || 1;
    const containerWidth = img.parentElement.offsetWidth;
    const optimalWidth = Math.round(containerWidth * devicePixelRatio);
    
    // Closest size matching
    const sources = img.getAttribute('data-sources');
    if (sources) {
      const sourceList = JSON.parse(sources);
      const optimal = sourceList.reduce((prev, curr) => 
        Math.abs(curr.width - optimalWidth) < Math.abs(prev.width - optimalWidth) ? curr : prev
      );
      return optimal.src;
    }
    
    return img.src;
  }
}

// Image optimizer'ı başlat
document.addEventListener('DOMContentLoaded', () => {
  window.imageOptimizer = new ImageOptimizer();
});

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ImageOptimizer;
}