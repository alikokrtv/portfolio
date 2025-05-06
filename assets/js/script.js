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
   * *** CANVAS/AÇILIR PENCERE SİSTEMİ ***
   * Portfolyo ve blog canvas/açılır pencereleri için işlevsellik
   */
  
  // 1. Portfolyo Canvas/Açılır Pencere Sistemi
  $(".project-open").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("Proje içeriğine tıklandı!");
    
    const projectId = $(this).data("project-id");
    const canvasSelector = `#project-canvas-${projectId}`;
    console.log(`Proje ID: ${projectId}`);
    
    // Eğer canvas zaten oluşturulduysa göster, yoksa oluştur
    if ($(canvasSelector).length) {
      $(canvasSelector).addClass('active');
      $('body').addClass('no-scroll');
      console.log(`Mevcut canvas gösteriliyor: ${canvasSelector}`);
    } else {
      console.log("Canvas oluşturuluyor...");
      
      // Projeler için veri fonksiyonu
      if (typeof getProjectContent === 'function') {
        const projectInfo = getProjectContent(projectId.toString());
        
        // Canvas HTML'ini oluştur - tam ekran animasyonlu versiyon
        const canvasHtml = `
          <div id="project-canvas-${projectId}" class="canvas-container">
            <div class="canvas-overlay"></div>
            <div class="canvas-content">
              <div class="canvas-close">&times;</div>
              <h3 class="canvas-title">${projectInfo.title}</h3>
              <div class="canvas-category">${projectInfo.category}</div>
              <div class="canvas-body">${projectInfo.content}</div>
              <div class="canvas-links">${projectInfo.links || ''}</div>
              <div class="canvas-back-button">
                <button class="back-btn"><ion-icon name="arrow-back-outline"></ion-icon> Geri</button>
              </div>
            </div>
          </div>
        `;
        
        // Canvas HTML'ini body'ye ekle
        $("body").append(canvasHtml);
        
        // Yeni oluşturulan canvası göster (animasyon için timeout ekle)
        setTimeout(() => {
          $(canvasSelector).addClass('active');
          $('body').addClass('no-scroll');
        }, 10);
        
        console.log(`Yeni canvas oluşturuldu ve gösteriliyor: ${canvasSelector}`);
      } else {
        console.error("getProjectContent fonksiyonu bulunamadı!");
      }
    }
  });

  // 2. Blog Canvas/Açılır Pencere Sistemi
  $(".blog-open").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const blogId = $(this).data("blog-id");
    const canvasSelector = `#blog-canvas-${blogId}`;
    
    console.log(`Blog canvas açılıyor: ID=${blogId}, Seçici=${canvasSelector}`);
    
    // Blog canvası zaten varsa göster
    if ($(canvasSelector).length) {
      $(canvasSelector).addClass('active');
      $('body').addClass('no-scroll');
      console.log(`Mevcut blog canvası gösteriliyor: ${canvasSelector}`);
    } else {
      // Canvas yok, project-data.js'den blog içeriğini al ve oluştur
      if (typeof getBlogContent === 'function') {
        const blogInfo = getBlogContent(blogId.toString());
        
        // Canvas HTML'ini oluştur - tam ekran animasyonlu versiyon
        const canvasHtml = `
          <div id="blog-canvas-${blogId}" class="canvas-container blog-canvas">
            <div class="canvas-overlay"></div>
            <div class="canvas-content">
              <div class="canvas-close">&times;</div>
              <h3 class="canvas-title">${blogInfo.title}</h3>
              <div class="canvas-meta">${blogInfo.meta}</div>
              <div class="canvas-body">${blogInfo.content}</div>
              <div class="canvas-back-button">
                <button class="back-btn"><ion-icon name="arrow-back-outline"></ion-icon> Geri</button>
              </div>
            </div>
          </div>
        `;
        
        // Canvası body'ye ekle
        $("body").append(canvasHtml);
        
        // Yeni oluşturulan canvası göster (animasyon için timeout ekle)
        setTimeout(() => {
          $(canvasSelector).addClass('active');
          $('body').addClass('no-scroll');
        }, 10);
        
        console.log(`Yeni blog canvası oluşturuldu ve gösteriliyor: ${canvasSelector}`);
      } else {
        console.error("getBlogContent fonksiyonu bulunamadı. project-data.js yüklendi mi?");
      }
    }
  });

  // 3. Genel Canvas/Açılır Pencere Kapatma İşlevleri
  
  // Kapatma butonuna tıklayınca canvası kapatma
  $(document).on("click", ".canvas-close", function() {
    const canvas = $(this).closest(".canvas-container");
    canvas.removeClass('active');
    setTimeout(() => {
      canvas.remove(); // Tamamen kaldır
      if ($('.canvas-container.active').length === 0) {
        $('body').removeClass('no-scroll');
      }
    }, 400);
  });

  // Dış overlay'e tıklayınca kapatma
  $(document).on("click", ".canvas-overlay", function() {
    const canvas = $(this).closest(".canvas-container");
    canvas.removeClass('active');
    setTimeout(() => {
      canvas.remove();
      if ($('.canvas-container.active').length === 0) {
        $('body').removeClass('no-scroll');
      }
    }, 400);
  });
  
  // Geri tuşuna tıklandığında canvası kapatma
  $(document).on("click", ".back-btn", function() {
    console.log("Geri tuşuna tıklandı");
    const canvas = $(this).closest(".canvas-container");
    canvas.removeClass('active');
    setTimeout(() => {
      canvas.remove();
      if ($('.canvas-container.active').length === 0) {
        $('body').removeClass('no-scroll');
      }
    }, 400);
  });

  // ESC tuşuna basınca açık canvası kapatma
  $(document).on('keydown', function(e) {
    if (e.key === "Escape") {
      const activeCanvas = $(".canvas-container.active");
      if (activeCanvas.length) {
        activeCanvas.removeClass('active');
        setTimeout(() => {
          activeCanvas.remove();
          if ($('.canvas-container.active').length === 0) {
            $('body').removeClass('no-scroll');
          }
        }, 400);
      }
    }
  });

  /**
   * *** FORM İŞLEMLERİ ***
   * İletişim formu için FormSubmit.co entegrasyonu
   * Not: Form işleme kodu index.html içinde yer alıyor
   */
  // Form yalnızca index.html içinde FormSubmit.co tarafından işleniyor

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
