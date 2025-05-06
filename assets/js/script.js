'use strict';

// Belgenin tamamen yüklenmesini bekleyip kodları çalıştırır
$(document).ready(function() {
  console.log('Sayfa yüklendi, jQuery hazır!');

  /**
   * Element toggle fonksiyonu
   */
  const elemToggleFunc = function(elem) { 
    elem.classList.toggle("active"); 
  }

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

  $(navToggleBtn).on("click", function() {
    elemToggleFunc(navToggleBtn);
    elemToggleFunc(navbar);
    elemToggleFunc(document.body);
  });

  /**
   * Skills toggle
   */
  const toggleBtnBox = document.querySelector("[data-toggle-box]");
  const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
  const skillsBox = document.querySelector("[data-skills-box]");

  $("[data-toggle-btn]").on("click", function() {
    elemToggleFunc(toggleBtnBox);
    toggleBtns.forEach(btn => elemToggleFunc(btn));
    elemToggleFunc(skillsBox);
  });

  /**
   * Dark & light theme toggle
   */
  const themeToggleBtn = document.querySelector("[data-theme-btn]");

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

  /**
   * Check & apply last time selected theme from localStorage
   */
  if (localStorage.getItem("theme") === "light_theme") {
    themeToggleBtn.classList.remove("active");
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");
  } else {
    themeToggleBtn.classList.add("active");
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

  // Sayfayı yüklerken düzen bozulmasını önlemek için
  if (localStorage.getItem("language")) {
    const savedLang = localStorage.getItem("language");
    setLanguage(savedLang);
    
    if (savedLang === "en") {
      langToggleBtn.classList.add("active");
    } else {
      langToggleBtn.classList.remove("active");
    }
  } else {
    // Varsayılan olarak Türkçe
    setLanguage("tr");
    langToggleBtn.classList.remove("active");
  }

  // Dil butonuna tıklama işlemi
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

  /**
   * Sayfa navigasyonu
   */
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  // Tüm gezinme bağlantılarına olay dinleyicisi ekleme
  navigationLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      const targetPage = document.querySelector(`[data-page="${this.dataset.navLink}"]`);

      // Tüm sayfaları ve navigasyon linklerini deaktive et
      pages.forEach(function(page) {
        page.classList.remove("active");
      });

      navigationLinks.forEach(function(navLink) {
        navLink.classList.remove("active");
      });

      // Hedef sayfayı ve tıklanan navigasyon linkini aktifleştir
      if (targetPage) {
        targetPage.classList.add("active");
        this.classList.add("active");
      }
    });
  });

  /**
   * Portfolio Projeleri için Modal İşlemleri
   */
  $(".project-open").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const projectId = $(this).data("project-id");
    const modalSelector = `#project-modal-${projectId}`;
    
    console.log(`Proje modalı açılıyor: ID=${projectId}, Seçici=${modalSelector}`);
    
    if ($(modalSelector).length) {
      $(modalSelector).fadeIn(300);
    } else {
      console.error(`Modal bulunamadı: ${modalSelector}`);
      
      // Modal içeriğini dinamik olarak oluştur
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
      
      // Modal kapatma işlevini ekle
      $(`#project-modal-${projectId} .modal-close`).on("click", function() {
        $(this).closest(".modal-container").fadeOut(300);
      });
      
      // Modalı göster
      $(`#project-modal-${projectId}`).fadeIn(300);
    }
    
    return false;
  });

  /**
   * Blog için Modal İşlemleri
   */
  $(".blog-open").on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const blogId = $(this).data("blog-id");
    const modalSelector = `#blog-modal-${blogId}`;
    
    console.log(`Blog modalı açılıyor: ID=${blogId}, Seçici=${modalSelector}`);
    
    if ($(modalSelector).length) {
      $(modalSelector).fadeIn(300);
    } else {
      console.error(`Blog modal bulunamadı: ${modalSelector}`);
      
      // Blog içeriğini dinamik olarak oluştur
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
      
      // Modal kapatma işlevini ekle
      $(`#blog-modal-${blogId} .modal-close`).on("click", function() {
        $(this).closest(".modal-container").fadeOut(300);
      });
      
      // Modalı göster
      $(`#blog-modal-${blogId}`).fadeIn(300);
    }
    
    return false;
  });

  /**
   * Modal kapatma işlevleri
   */
  // Tüm modal kapatma butonlarına olay dinleyicisi ekle
  $(document).on("click", ".modal-close", function() {
    $(this).closest(".modal-container").fadeOut(300);
  });

  // Modal dışına tıklandığında modalı kapat
  $(document).on("click", ".modal-container", function(e) {
    if ($(e.target).hasClass("modal-container")) {
      $(this).fadeOut(300);
    }
  });

  /**
   * Form İşlemleri - Netlify Form
   */
  $("#contact-form").on("submit", function() {
    console.log("Form gönderildi - Netlify tarafından işlenecek");
  });

  /**
   * Debug bilgileri
   */
  console.log("Modal kontrolleri:");
  console.log("Project-open eleman sayısı: " + $(".project-open").length);
  console.log("Blog-open eleman sayısı: " + $(".blog-open").length);
});

/**
 * Blog içeriği için yardımcı fonksiyon
 */
function getBlogContent(blogId) {
  switch(blogId) {
    case '1':
      return {
        title: 'Web Geliştirme Yolculuğum',
        meta: '1 Mayıs 2023 | Web Geliştirme',
        content: '<p>Web geliştirme yolculuğumda kullandığım teknolojiler ve öğrenme sürecim hakkında detaylı bir yazı. Front-end tarafında HTML, CSS ve JavaScript ile başlayan yolculuğum, zamanla React ve Vue.js gibi modern framework\'lere doğru ilerledi.</p><p>Ardından back-end tarafında PHP öğrenerek tam yığın (full-stack) geliştirici olma yolunda ilerledim. Bu süreçte karşılaştığım zorluklar ve bunları nasıl aştığım hakkında ipuçları bulabilirsiniz.</p>'
      };
    case '2':
      return {
        title: 'WordPress\'te Özel Eklenti Geliştirme',
        meta: '15 Nisan 2023 | WordPress',
        content: '<p>WordPress için özel eklenti geliştirme sürecimi anlattığım bu yazıda, ACF ve WPForms\'un gücünden nasıl yararlandığımı okuyabilirsiniz. Kurumsal müşterilerim için geliştirdiğim özel rezervasyon ve form sistemleri, işlerini daha verimli hale getirdi.</p><p>Yazıda ayrıca WordPress eklenti geliştirme için gerekli temel bilgiler ve en iyi uygulamalar da yer alıyor. Kendi eklentinizi geliştirmek istiyorsanız, bu rehber size yardımcı olabilir.</p>'
      };
    case '3':
      return {
        title: 'Açık Kaynak Projelere Katkıda Bulunmak',
        meta: '20 Mart 2023 | Açık Kaynak',
        content: '<p>Açık kaynak projelere katkıda bulunmanın hem kişisel gelişim hem de topluluk için ne kadar önemli olduğunu anlatan bu yazıda, GitHub üzerinden pull request göndererek başladığım yolculuğun kariyer gelişimimdeki etkilerini paylaşıyorum.</p><p>Açık kaynak projeler, kodlama becerilerinizi geliştirmek, yeni insanlarla tanışmak ve sektördeki en iyi uygulamaları öğrenmek için mükemmel bir platformdur. Bu yazıda, başlangıç yapacaklar için ipuçları ve tavsiyeler de bulabilirsiniz.</p>'
      };
    default:
      return {
        title: 'Blog Yazısı',
        meta: 'Tarih | Kategori',
        content: '<p>Bu blog yazısının içeriği henüz eklenmemiş.</p>'
      };
  }
}

/**
 * Proje içeriği için yardımcı fonksiyon
 */
function getProjectContent(projectId) {
  switch(projectId) {
    case '1':
      return {
        title: 'DOF Manager',
        category: 'Açık Kaynak',
        content: '<p>DOF (Düzeltici Önleyici Faaliyet) takip sistemi için geliştirdiğim açık kaynak bir yönetim aracı. Bu projede React ve PHP kullanarak modern bir arayüz ve güçlü bir backend sağladım.</p><p>SQLite veritabanı entegrasyonu ile yerel olarak çalışabilen, aynı zamanda bulut sistemlere de entegre edilebilen esnek bir yapıya sahip. Kullanıcı dostu arayüzü ve kapsamlı raporlama özellikleri ile öne çıkıyor.</p>',
        links: '<a href="https://github.com/alikokrtv/dof-manager" target="_blank" class="btn">GitHub Repo</a>'
      };
    case '2':
      return {
        title: 'Plus Kitchen Intranet Portal',
        category: 'Kurumsal',
        content: '<p>Plus Kitchen için geliştirdiğim kurumsal intranet portalı, şirket içi iletişimi ve iş süreçlerini optimize etmek için tasarlandı. WordPress altyapısı üzerine kurulu bu sistem, özel form modülleri ve video eğitimler içeriyor.</p><p>Kullanıcı giriş sistemi ve rol tabanlı yetkilendirme ile hassas bilgilere erişim kontrol altında tutuluyor. Mobil uygulama entegrasyonu sayesinde çalışanlar her yerden portala erişebiliyor.</p>',
        links: '<a href="javascript:void(0);" class="btn">Demo İste</a>'
      };
    case '3':
      return {
        title: 'TaskFlow - BT İş Akışı Sistemi',
        category: 'Web Projeler',
        content: '<p>BT departmanı için geliştirdiğim görev yönetim sistemi, SQLite veritabanı kullanarak hafif ve hızlı bir çözüm sunuyor. Kategori bazlı iş takibi ve süreç yönetimi özellikleri ile iş akışını optimize ediyor.</p><p>Bu projede kullanıcı arayüzü tasarımına özel önem verdim, böylece ekip üyeleri minimum eğitimle sistemi verimli şekilde kullanabiliyorlar. Raporlama ve analiz araçları yöneticilere değerli içgörüler sağlıyor.</p>',
        links: '<a href="javascript:void(0);" class="btn">Detaylar</a>'
      };
    case '4':
      return {
        title: 'WordPress Özel Eklentileri',
        category: 'WordPress',
        content: '<p>ACF ve WPForms tabanlı geliştirdiğim özel WordPress eklentileri arasında şunlar bulunuyor:</p><ul><li>Giriş yapan kullanıcıya özel hoşgeldin mesajı</li><li>Doğum günü kutlama sistemi</li><li>Toplantı rezervasyon modülü</li><li>REST API destekli booking eklentisi</li></ul><p>Bu eklentiler kurumsal müşterilerim için özel olarak geliştirildi ve iş süreçlerini otomatikleştirerek verimliliklerini artırdı.</p>',
        links: '<a href="javascript:void(0);" class="btn">İnceleme</a>'
      };
    default:
      return {
        title: 'Proje',
        category: 'Kategori',
        content: '<p>Bu projenin içeriği henüz eklenmemiş.</p>',
        links: ''
      };
  }
}
