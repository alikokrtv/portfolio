/**
 * Gelişmiş navigasyon sistemi - Çift dilli destek ile
 * Bu dosya sayfa geçişlerini ve dil entegrasyonunu kontrol eder
 */

class NavigationManager {
  constructor() {
    this.currentPage = 0;
    this.init();
  }

  init() {
    // jQuery yüklendiğinde başlat
    $(document).ready(() => {
      this.setupNavigation();
      this.setupLanguageIntegration();
      console.log('Enhanced navigation system loaded');
    });
  }

  setupNavigation() {
    // Navigasyon butonlarına event listener ekle
    $('.navbar-link').on('click', (e) => {
      e.preventDefault();
      const index = $(e.currentTarget).parent().index();
      this.navigateToPage(index);
    });

    // İlk sayfa olarak "Hakkımda" sayfasını aktif et
    this.navigateToPage(0);
  }

  navigateToPage(index) {
    console.log('Navigating to page: ' + index);
    
    // Tüm sayfaları gizle
    $('article[data-page]').removeClass('active');
    
    // Tüm navigasyon butonlarını pasif hale getir
    $('.navbar-link').removeClass('active');
    
    // Tıklanan butonu aktif et
    $('.navbar-link').eq(index).addClass('active');
    
    // İlgili sayfayı göster
    const pageElements = $('article[data-page]');
    if (index < pageElements.length) {
      $(pageElements[index]).addClass('active');
      this.currentPage = index;
      
      // Sayfa değişikliği event'ini tetikle
      this.dispatchPageChange(index);
    } else {
      console.error('Page element not found for index: ' + index);
    }
  }

  setupLanguageIntegration() {
    // Dil değişikliği event listener'ı
    document.addEventListener('languageChanged', (e) => {
      this.updateNavigationLabels(e.detail.language);
    });
  }

  updateNavigationLabels(language) {
    const navLabels = {
      'tr': ['Hakkımda', 'Özgeçmiş', 'Portfolyo', 'Blog', 'İletişim'],
      'en': ['About', 'Resume', 'Portfolio', 'Blog', 'Contact']
    };
    
    $('.navbar-link').each(function(index) {
      if (navLabels[language] && navLabels[language][index]) {
        $(this).text(navLabels[language][index]);
      }
    });
    
    console.log('Navigation labels updated to: ' + language);
  }

  dispatchPageChange(pageIndex) {
    const event = new CustomEvent('pageChanged', {
      detail: { pageIndex: pageIndex }
    });
    document.dispatchEvent(event);
  }

  getCurrentPage() {
    return this.currentPage;
  }
}

// Navigasyon yöneticisini başlat
const navigationManager = new NavigationManager();

// Global erişim için window objesine ekle
window.navigationManager = navigationManager;
