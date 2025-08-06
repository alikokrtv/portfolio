/**
 * Performance Monitoring System
 * Web Vitals ve site performansını izleme sistemi
 */

class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.isProduction = window.location.hostname !== 'localhost';
    this.init();
  }

  init() {
    // Core Web Vitals monitoring
    this.setupWebVitals();
    
    // Custom performance metrics
    this.trackPageLoadTime();
    this.trackNavigationTiming();
    
    // Resource loading monitoring
    this.trackResourceLoading();
    
    console.log('🚀 Performance monitoring initialized');
  }

  setupWebVitals() {
    // Largest Contentful Paint (LCP)
    this.observeLCP();
    
    // First Input Delay (FID) / Interaction to Next Paint (INP)
    this.observeINP();
    
    // Cumulative Layout Shift (CLS)
    this.observeCLS();
  }

  observeLCP() {
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      this.metrics.lcp = lastEntry.startTime;
      this.logMetric('LCP', lastEntry.startTime, 'ms');
      
      // LCP hedefi: < 2500ms
      if (lastEntry.startTime > 2500) {
        console.warn(`⚠️ LCP yavaş: ${lastEntry.startTime}ms (hedef: <2500ms)`);
      }
      
      this.sendToAnalytics('lcp', lastEntry.startTime);
    }).observe({ type: 'largest-contentful-paint', buffered: true });
  }

  observeINP() {
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.interactionId) {
          const duration = entry.processingEnd - entry.startTime;
          this.metrics.inp = duration;
          this.logMetric('INP', duration, 'ms');
          
          // INP hedefi: < 200ms
          if (duration > 200) {
            console.warn(`⚠️ INP yavaş: ${duration}ms (hedef: <200ms)`);
          }
          
          this.sendToAnalytics('inp', duration);
        }
      }
    }).observe({ type: 'event', buffered: true });
  }

  observeCLS() {
    let cls = 0;
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          cls += entry.value;
        }
      }
      
      this.metrics.cls = cls;
      this.logMetric('CLS', cls.toFixed(4));
      
      // CLS hedefi: < 0.1
      if (cls > 0.1) {
        console.warn(`⚠️ CLS yüksek: ${cls.toFixed(4)} (hedef: <0.1)`);
      }
      
      this.sendToAnalytics('cls', cls);
    }).observe({ type: 'layout-shift', buffered: true });
  }

  trackPageLoadTime() {
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      this.metrics.pageLoad = loadTime;
      this.logMetric('Page Load Time', loadTime, 'ms');
      this.sendToAnalytics('page_load', loadTime);
    });
  }

  trackNavigationTiming() {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0];
      
      if (navigation) {
        const metrics = {
          dns: navigation.domainLookupEnd - navigation.domainLookupStart,
          tcp: navigation.connectEnd - navigation.connectStart,
          request: navigation.responseStart - navigation.requestStart,
          response: navigation.responseEnd - navigation.responseStart,
          dom: navigation.domContentLoadedEventEnd - navigation.responseEnd
        };
        
        Object.assign(this.metrics, metrics);
        
        console.log('📊 Navigation Timing:', metrics);
        this.sendToAnalytics('navigation_timing', metrics);
      }
    });
  }

  trackResourceLoading() {
    // Track slow loading resources
    const observer = new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (entry.duration > 1000) { // Resources taking more than 1s
          console.warn(`🐌 Slow resource: ${entry.name} took ${entry.duration}ms`);
          this.sendToAnalytics('slow_resource', {
            name: entry.name,
            duration: entry.duration
          });
        }
      }
    });
    
    observer.observe({ entryTypes: ['resource'] });
  }

  logMetric(name, value, unit = '') {
    const color = this.getMetricColor(name, value);
    console.log(
      `%c📈 ${name}: ${value}${unit}`,
      `color: ${color}; font-weight: bold;`
    );
  }

  getMetricColor(name, value) {
    switch (name) {
      case 'LCP':
        return value < 2500 ? '#00ff00' : value < 4000 ? '#ffaa00' : '#ff0000';
      case 'INP':
        return value < 200 ? '#00ff00' : value < 500 ? '#ffaa00' : '#ff0000';
      case 'CLS':
        return value < 0.1 ? '#00ff00' : value < 0.25 ? '#ffaa00' : '#ff0000';
      default:
        return '#0088ff';
    }
  }

  sendToAnalytics(metric, value) {
    if (!this.isProduction) return;
    
    // Google Analytics 4 veya custom analytics endpoint
    if (typeof gtag !== 'undefined') {
      gtag('event', 'web_vitals', {
        event_category: 'performance',
        event_label: metric,
        value: Math.round(typeof value === 'number' ? value : 0)
      });
    }
    
    // Custom analytics endpoint (example)
    /*
    fetch('/api/analytics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        metric,
        value,
        url: window.location.href,
        timestamp: Date.now()
      })
    }).catch(err => console.log('Analytics error:', err));
    */
  }

  getMetricsReport() {
    return {
      timestamp: new Date().toISOString(),
      url: window.location.href,
      metrics: this.metrics,
      userAgent: navigator.userAgent,
      connection: navigator.connection ? {
        effectiveType: navigator.connection.effectiveType,
        downlink: navigator.connection.downlink
      } : null
    };
  }

  // Dışarıdan erişim için metric getter
  getMetric(name) {
    return this.metrics[name];
  }

  // Performance debugging için detaylı report
  generateReport() {
    const report = this.getMetricsReport();
    console.table(report.metrics);
    return report;
  }
}

// Global instance oluştur
window.performanceMonitor = new PerformanceMonitor();

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PerformanceMonitor;
}