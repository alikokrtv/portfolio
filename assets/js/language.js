/**
 * Gelişmiş dil değiştirme sistemi
 * Enhanced language switching system
 */

class LanguageManager {
  constructor() {
    this.currentLanguage = 'tr';
    this.init();
  }

  init() {
    // Sayfa yüklendiğinde dil durumunu kontrol et
    const savedLanguage = localStorage.getItem('portfolio-language') || 'tr';
    this.setLanguage(savedLanguage);
    
    // Dil değiştirme butonuna event listener ekle
    const toggleButton = document.getElementById('language-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', () => {
        this.toggleLanguage();
      });
    }
  }

  setLanguage(language) {
    this.currentLanguage = language;
    
    // HTML lang attribute'unu güncelle
    document.documentElement.setAttribute('lang', language);
    
    // Dil butonunun metnini güncelle
    const toggleButton = document.getElementById('language-toggle');
    if (toggleButton) {
      toggleButton.textContent = language === 'tr' ? 'English' : 'Türkçe';
    }
    
    // Dil tercihini kaydet
    localStorage.setItem('portfolio-language', language);
    
    // Dinamik içerikleri güncelle
    this.updateDynamicContent();
    
    console.log(`Language switched to: ${language}`);
  }

  toggleLanguage() {
    const newLanguage = this.currentLanguage === 'tr' ? 'en' : 'tr';
    this.setLanguage(newLanguage);
  }

  updateDynamicContent() {
    // Navigasyon menüsü güncellemesi
    this.updateNavigation();
    
    // Modal içeriklerini güncelle
    this.updateModalContent();
    
    // Form etiketlerini güncelle
    this.updateFormLabels();
  }

  updateNavigation() {
    const navItems = {
      'tr': ['Hakkımda', 'Özgeçmiş', 'Portfolyo', 'Blog', 'İletişim'],
      'en': ['About', 'Resume', 'Portfolio', 'Blog', 'Contact']
    };
    
    const navLinks = document.querySelectorAll('.navbar-link');
    navLinks.forEach((link, index) => {
      if (navItems[this.currentLanguage] && navItems[this.currentLanguage][index]) {
        link.textContent = navItems[this.currentLanguage][index];
      }
    });
  }

  updateModalContent() {
    // Modal başlıkları ve buton metinleri için
    const modalTexts = {
      'tr': {
        close: 'Kapat',
        viewProject: 'Projeyi Görüntüle',
        viewDemo: 'Demo Görüntüle',
        readMore: 'Devamını Oku'
      },
      'en': {
        close: 'Close',
        viewProject: 'View Project',
        viewDemo: 'View Demo',
        readMore: 'Read More'
      }
    };
    
    // Modal kapatma butonları
    const closeButtons = document.querySelectorAll('.modal-close, .blog-modal-close, .project-modal-close');
    closeButtons.forEach(button => {
      button.setAttribute('title', modalTexts[this.currentLanguage].close);
    });
  }

  updateFormLabels() {
    const formTexts = {
      'tr': {
        name: 'Ad Soyad',
        email: 'E-posta',
        message: 'Mesaj',
        send: 'Gönder'
      },
      'en': {
        name: 'Full Name',
        email: 'Email',
        message: 'Message',
        send: 'Send'
      }
    };
    
    // Form etiketlerini güncelle
    Object.keys(formTexts[this.currentLanguage]).forEach(key => {
      const elements = document.querySelectorAll(`[data-form-${key}]`);
      elements.forEach(element => {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = formTexts[this.currentLanguage][key];
        } else {
          element.textContent = formTexts[this.currentLanguage][key];
        }
      });
    });
  }

  getCurrentLanguage() {
    return this.currentLanguage;
  }

  // Dil değişikliği için event dispatcher
  dispatchLanguageChange() {
    const event = new CustomEvent('languageChanged', {
      detail: { language: this.currentLanguage }
    });
    document.dispatchEvent(event);
  }
}

// Sayfa yüklendiğinde dil yöneticisini başlat
document.addEventListener('DOMContentLoaded', function() {
  window.languageManager = new LanguageManager();
  
  // Dil değişikliği event listener'ı
  document.addEventListener('languageChanged', function(e) {
    console.log('Language changed to:', e.detail.language);
  });
});
