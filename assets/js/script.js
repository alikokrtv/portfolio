'use strict';

/**
 * Portfolio Web Sitesi JavaScript Kodları
 * Ali Kök
 */

// Belgenin tamamen yüklenmesini bekleyip kodları çalıştırır
$(document).ready(function() {
  console.log('Sayfa yüklendi, jQuery hazır!');

  /**
   * Element toggle function - Bir elementin aktif sınıfını açıp kapatan yardımcı fonksiyon
   */
  const elemToggleFunc = function(elem) { 
    elem.classList.toggle("active"); 
  };

  /**
   * Header sticky & go to top
   */
  const header = document.querySelector("[data-header]");
  const goTopBtn = document.querySelector("[data-go-top]");

  $(window).on("scroll", function() {
    if (window.scrollY >= 10) {
      $(header).addClass("active");
      $(goTopBtn).addClass("active");
    } else {
      $(header).removeClass("active");
      $(goTopBtn).removeClass("active");
    }
  });

  /**
   * Navbar toggle
   */
  const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
  const navbar = document.querySelector("[data-navbar]");

  if (navToggleBtn) {
    $(navToggleBtn).on("click", function() {
      elemToggleFunc(navToggleBtn);
      elemToggleFunc(navbar);
      elemToggleFunc(document.body);
    });
  }

  /**
   * Skills toggle
   */
  const toggleBtnBox = document.querySelector("[data-toggle-box]");
  const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
  const skillsBox = document.querySelector("[data-skills-box]");

  $("[data-toggle-btn]").on("click", function() {
    if (toggleBtnBox) elemToggleFunc(toggleBtnBox);
    if (toggleBtns.length) {
      toggleBtns.forEach(btn => elemToggleFunc(btn));
    }
    if (skillsBox) elemToggleFunc(skillsBox);
  });

  /**
   * Dark & light theme toggle
   */
  const themeToggleBtn = document.querySelector("[data-theme-btn]");

  if (themeToggleBtn) {
    $(themeToggleBtn).on("click", function() {
      elemToggleFunc(themeToggleBtn);

      if (themeToggleBtn.classList.contains("active")) {
        document.body.classList.remove("light_theme");
        document.body.classList.add("dark_theme");
        localStorage.setItem("theme", "dark_theme");
      } else {
        document.body.classList.add("light_theme");
        document.body.classList.remove("dark_theme");
        localStorage.setItem("theme", "light_theme");
      }
    });
  }

  /**
   * Check & apply last selected theme from localStorage
   */
  if (localStorage.getItem("theme") === "light_theme") {
    if (themeToggleBtn) themeToggleBtn.classList.remove("active");
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");
  } else {
    if (themeToggleBtn) themeToggleBtn.classList.add("active");
    document.body.classList.remove("light_theme");
    document.body.classList.add("dark_theme");
  }

  /**
   * Dil değiştirme fonksiyonu
   */
  const langToggleBtn = document.querySelector("[data-language-btn]");
  const trElements = $(".tr");
  const enElements = $(".en");

  // Dil ayarlama fonksiyonu
  function setLanguage(lang) {
    if (lang === "tr") {
      trElements.show();
      enElements.hide();
    } else if (lang === "en") {
      trElements.hide();
      enElements.show();
    }
  }

  // Dil tercihi yükleme
  if (localStorage.getItem("language")) {
    const savedLang = localStorage.getItem("language");
    setLanguage(savedLang);
    
    if (savedLang === "en" && langToggleBtn) {
      langToggleBtn.classList.add("active");
    } else if (langToggleBtn) {
      langToggleBtn.classList.remove("active");
    }
  } else {
    // Varsayılan olarak Türkçe
    setLanguage("tr");
    if (langToggleBtn) langToggleBtn.classList.remove("active");
  }

  // Dil butonuna tıklama işlemi
  if (langToggleBtn) {
    $(langToggleBtn).on("click", function() {
      elemToggleFunc(langToggleBtn);
      
      if (langToggleBtn.classList.contains("active")) {
        setLanguage("en");
        localStorage.setItem("language", "en");
      } else {
        setLanguage("tr");
        localStorage.setItem("language", "tr");
      }
    });
  }

  /**
   * *** SAYFA NAVİGASYONU ***
   * Bu bölüm sayfa geçişlerini kontrol eder
   */
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  if (navigationLinks.length && pages.length) {
    // Sayfa geçişleri için event listener ekle
    navigationLinks.forEach(link => {
      link.addEventListener("click", function() {
        // Tıklanan butonun data-nav-link değerini al
        const targetPageId = this.getAttribute("data-nav-link");
        console.log("Tıklanan sayfa: " + targetPageId);
        
        // Hedef sayfayı bul
        const targetPage = document.querySelector(`[data-page="${targetPageId}"]`);
        
        if (!targetPage) {
          console.error(`Hedef sayfa bulunamadı: [data-page="${targetPageId}"]`);
          return;
        }
        
        // Tüm sayfaları gizle
        pages.forEach(page => page.classList.remove("active"));
        
        // Tüm navigasyon linklerini deaktif yap
        navigationLinks.forEach(navLink => navLink.classList.remove("active"));
        
        // Hedef sayfayı göster ve navigasyon linkini aktifleştir
        targetPage.classList.add("active");
        this.classList.add("active");
        
        // Sayfanın başına kaydır (opsiyonel, ihtiyaca göre)
        window.scrollTo(0, 0);
        
        console.log(`${targetPageId} sayfasına geçiş yapıldı`);
      });
    });
  } else {
    console.error("Navigasyon menüsü veya sayfalar bulunamadı!");
    console.log("Bulunan navigasyon link sayısı: " + navigationLinks.length);
    console.log("Bulunan sayfa sayısı: " + pages.length);
  }

  /**
   * *** MODAL SİSTEMİ ***
   * Portfolyo ve blog modalları için işlevsellik
   */
  
  // 1. Portfolyo Modalları
  $(".project-open").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const projectId = $(this).data("project-id");
    const modalSelector = `#project-modal-${projectId}`;
    
    console.log(`Proje modalı açılıyor: ID=${projectId}, Seçici=${modalSelector}`);
    
    // Modal zaten varsa göster
    if ($(modalSelector).length) {
      $(modalSelector).fadeIn(300);
    } else {
      // Modal yok, project-data.js'den içerik al ve oluştur
      if (typeof getProjectContent === 'function') {
        const projectInfo = getProjectContent(projectId.toString());
        
        // Modal HTML'ini oluştur
        const modalHtml = `
          <div id="project-modal-${projectId}" class="modal-container" style="display: none;">
            <div class="project-modal">
              <div class="modal-close">&times;</div>
              <h3 class="project-modal-title">${projectInfo.title}</h3>
              <div class="project-modal-category">${projectInfo.category}</div>
              <div class="project-modal-content">${projectInfo.content}</div>
              <div class="project-modal-links">${projectInfo.links || ''}</div>
            </div>
          </div>
        `;
        
        // Modalı body'ye ekle
        $("body").append(modalHtml);
        
        // Modal kapatma işlevi ekle
        $(`#project-modal-${projectId} .modal-close`).on("click", function() {
          $(this).closest(".modal-container").fadeOut(300);
        });
        
        // Modalı göster
        $(`#project-modal-${projectId}`).fadeIn(300);
      } else {
        console.error("getProjectContent fonksiyonu bulunamadı. project-data.js yüklendi mi?");
      }
    }
  });

  // 2. Blog Modalları
  $(".blog-open").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const blogId = $(this).data("blog-id");
    const modalSelector = `#blog-modal-${blogId}`;
    
    console.log(`Blog modalı açılıyor: ID=${blogId}, Seçici=${modalSelector}`);
    
    // Modal zaten varsa göster
    if ($(modalSelector).length) {
      $(modalSelector).fadeIn(300);
    } else {
      // Modal yok, project-data.js'den içerik al ve oluştur
      if (typeof getBlogContent === 'function') {
        const blogInfo = getBlogContent(blogId.toString());
        
        // Modal HTML'ini oluştur
        const modalHtml = `
          <div id="blog-modal-${blogId}" class="modal-container" style="display: none;">
            <div class="blog-modal">
              <div class="modal-close">&times;</div>
              <h3 class="blog-modal-title">${blogInfo.title}</h3>
              <div class="blog-modal-meta">${blogInfo.meta}</div>
              <div class="blog-modal-content">${blogInfo.content}</div>
            </div>
          </div>
        `;
        
        // Modalı body'ye ekle
        $("body").append(modalHtml);
        
        // Modal kapatma işlevi ekle
        $(`#blog-modal-${blogId} .modal-close`).on("click", function() {
          $(this).closest(".modal-container").fadeOut(300);
        });
        
        // Modalı göster
        $(`#blog-modal-${blogId}`).fadeIn(300);
      } else {
        console.error("getBlogContent fonksiyonu bulunamadı. project-data.js yüklendi mi?");
      }
    }
  });

  // 3. Genel Modal Kapatma İşlevleri
  // Dokümana event listener ekle
  $(document).on("click", ".modal-close", function() {
    $(this).closest(".modal-container").fadeOut(300);
  });

  // Modalın dışına tıklayınca kapatma
  $(document).on("click", ".modal-container", function(e) {
    if ($(e.target).hasClass("modal-container")) {
      $(this).fadeOut(300);
    }
  });

  // ESC tuşuna basınca açık modalı kapatma
  $(document).on('keydown', function(e) {
    if (e.key === "Escape") {
      $(".modal-container:visible").fadeOut(300);
    }
  });

  /**
   * *** FORM İŞLEMLERİ ***
   * İletişim formu için Netlify entegrasyonu
   */
  $("#contact-form").on("submit", function() {
    console.log("Form gönderildi - Netlify tarafından işlenecek");
    // Netlify formları otomatik olarak işler, burada ek bir işlem yapmaya gerek yok
  });

  /**
   * *** DEBUG BİLGİLERİ ***
   * Geliştirme sürecinde yardımcı olacak bilgiler
   */
  console.log("*** DEBUG BİLGİLERİ ***");
  console.log("Navigasyon link sayısı: " + navigationLinks.length);
  console.log("Sayfa sayısı: " + pages.length);
  console.log("Proje modal butonları: " + $(".project-open").length);
  console.log("Blog modal butonları: " + $(".blog-open").length);
  
  // Hata ayıklama için navigasyon linklerini ve sayfaları kontrol et
  if (navigationLinks.length) {
    console.log("Navigasyon linkleri data değerleri:");
    navigationLinks.forEach(link => {
      console.log(`- ${link.getAttribute("data-nav-link")}`);
    });
  }
  
  if (pages.length) {
    console.log("Sayfa data değerleri:");
    pages.forEach(page => {
      console.log(`- ${page.getAttribute("data-page")}`);
    });
  }
});
