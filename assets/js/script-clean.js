'use strict';

// Belgenin tamamen yüklenmesini bekleyip kodları çalıştırır
$(document).ready(function() {
  
  console.log('Sayfa yüklendi, jQuery hazır!');
  
  // Element toggle fonksiyonu
  function elementToggleFunc(elem) {
    elem.classList.toggle("active");
  }

  // Sidebar değişkenleri ve işlevselliği
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");

  if (sidebarBtn) {
    sidebarBtn.addEventListener("click", function() {
      elementToggleFunc(sidebar);
    });
  }

  // Testimonials değişkenleri
  const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
  const modalContainer = document.querySelector("[data-modal-container]");
  const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
  const overlay = document.querySelector("[data-overlay]");

  // Modal değişkenleri
  const modalImg = document.querySelector("[data-modal-img]");
  const modalTitle = document.querySelector("[data-modal-title]");
  const modalText = document.querySelector("[data-modal-text]");

  // Modal açma/kapama fonksiyonu
  const testimonialsModalFunc = function() {
    if (modalContainer) modalContainer.classList.toggle("active");
    if (overlay) overlay.classList.toggle("active");
  }

  // Testimonial öğelerine tıklama olayı ekleme
  testimonialsItem.forEach(function(item) {
    item.addEventListener("click", function() {
      if (modalImg && this.querySelector("[data-testimonials-avatar]")) {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
      }
      if (modalTitle && this.querySelector("[data-testimonials-title]")) {
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
      }
      if (modalText && this.querySelector("[data-testimonials-text]")) {
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
      }
      testimonialsModalFunc();
    });
  });

  // Modal kapatma butonuna tıklama olayı ekleme
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  }
  
  if (overlay) {
    overlay.addEventListener("click", testimonialsModalFunc);
  }

  // Filtreleme işlevselliği
  const select = document.querySelector("[data-select]");
  const selectItems = document.querySelectorAll("[data-select-item]");
  const selectValue = document.querySelector("[data-selecct-value]");
  const filterBtn = document.querySelectorAll("[data-filter-btn]");

  if (select) {
    select.addEventListener("click", function() {
      elementToggleFunc(this);
    });
  }

  // Filtreleme öğelerine tıklama olayı ekleme
  selectItems.forEach(function(item) {
    item.addEventListener("click", function() {
      let selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      if (select) elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  });

  // Filtreleme değişkenleri
  const filterItems = document.querySelectorAll("[data-filter-item]");

  // Filtreleme fonksiyonu
  const filterFunc = function(selectedValue) {
    filterItems.forEach(function(item) {
      if (selectedValue === "all" || selectedValue === item.dataset.category) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  // Filtreleme butonlarına tıklama olayı ekleme
  let lastClickedBtn = filterBtn[0];

  filterBtn.forEach(function(btn) {
    btn.addEventListener("click", function() {
      let selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      filterFunc(selectedValue);
      if (lastClickedBtn) lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  });

  // İletişim formu değişkenleri
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  // Form girişlerine olay dinleyicisi ekleme
  formInputs.forEach(function(input) {
    input.addEventListener("input", function() {
      // Form doğruluğunu kontrol et
      if (form && form.checkValidity()) {
        if (formBtn) formBtn.removeAttribute("disabled");
      } else {
        if (formBtn) formBtn.setAttribute("disabled", "");
      }
    });
  });

  // Sayfa gezinme değişkenleri
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  // Tüm gezinme bağlantılarına olay dinleyicisi ekleme
  navigationLinks.forEach(function(link, i) {
    link.addEventListener("click", function() {
      // Orijinal veri kümesi değerini al
      let pageType = "";
      
      // Gezinme bağlantısının dizinini ilgili sayfaya eşleştir
      if (i === 0) pageType = "about";
      else if (i === 1) pageType = "resume";
      else if (i === 2) pageType = "portfolio";
      else if (i === 3) pageType = "blog";
      else if (i === 4) pageType = "contact";
      
      pages.forEach(function(page) {
        if (page.dataset.page === pageType) {
          page.classList.add("active");
          window.scrollTo(0, 0);
        } else {
          page.classList.remove("active");
        }
      });
      
      // Gezinme bağlantıları için aktif durumu güncelle
      navigationLinks.forEach(function(navLink, k) {
        if (k === i) {
          navLink.classList.add("active");
        } else {
          navLink.classList.remove("active");
        }
      });
    });
  });

  // *** BLOG VE PORTFOLYO MODALLARI ***
  console.log('Blog ve portfolyo modal işlevsellikleri yükleniyor...');
  
  // Proje modalları için jQuery işlevselliği
  $('.project-open').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    var projectId = $(this).data('project-id');
    console.log('Proje modalı açılıyor: ID=' + projectId);
    
    // Proje içeriği için bilgileri al
    var projectInfo = getProjectContent(projectId);
    
    // Modal içeriğini güncelle
    $('#project-modal-title').html(projectInfo.title);
    $('#project-modal-category').html(projectInfo.category);
    $('#project-modal-content').html(projectInfo.content);
    $('#project-modal-links').html(projectInfo.links);
    
    // Modalı göster
    $('#project-modal-container').fadeIn();
    return false;
  });
  
  // Blog modalları için jQuery işlevselliği
  $('.blog-open').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    var blogId = $(this).data('blog-id');
    console.log('Blog modalı açılıyor: ID=' + blogId);
    
    // Blog içeriği için bilgileri al
    var blogInfo = getBlogContent(blogId);
    
    // Modal içeriğini güncelle
    $('#blog-modal-title').html(blogInfo.title);
    $('#blog-modal-meta').html(blogInfo.meta);
    $('#blog-modal-content').html(blogInfo.content);
    
    // Modalı göster
    $('#blog-modal-container').fadeIn();
    return false;
  });
  
  // Modal kapatma butonları için jQuery işlevselliği
  $('.blog-modal-close, .project-modal-close').on('click', function() {
    $(this).closest('.modal-container').fadeOut();
  });
  
  // Modal dışına tıklama ile kapatma için jQuery işlevselliği
  $('.modal-container').on('click', function(e) {
    if (e.target === this) {
      $(this).fadeOut();
    }
  });
  
  // Netlify formunu yönet
  $('#contact-form').on('submit', function(e) {
    // Form gönderimini durdurma - Netlify otomatik olarak halledecek
    // Bu kod sadece feedback için
    var formResult = $('#form-result');
    formResult.html('<p style="color: var(--orange-yellow-crayola);">Formunuz gönderiliyor...</p>').show();
    
    // 2 saniye sonra kullanıcıya bir geri bildirim göster
    // Netlify forms zaten formu işleyecek
    setTimeout(function() {
      formResult.html('<p style="color: var(--orange-yellow-crayola);">Teşekkürler! Formunuz başarıyla gönderildi.</p>');
    }, 2000);
  });
  
  // Dil değiştirme işlevselliği
  $('#language-toggle').on('click', function() {
    var html = $('html');
    if (html.attr('lang') === 'tr') {
      html.attr('lang', 'en');
      $(this).text('Türkçe');
    } else {
      html.attr('lang', 'tr');
      $(this).text('English');
    }
  });
});

// Blog modalı için içerik yardımcı fonksiyonu
function getBlogContent(blogId) {
  switch(blogId) {
    case '1':
      return {
        title: 'Web Geliştirme Yolculuğum',
        meta: '12 Nisan 2023 | Web Geliştirme',
        content: '<p>Web geliştirme yolculuğuma nasıl başladığımı ve bugünlere nasıl geldiğimi anlatan bir yazı. Front-end ve back-end teknolojileri öğrenerek başladığım bu yolculukta, öğrendiğim en önemli şey sürekli kendini geliştirmenin önemi oldu.</p><p>Her zaman yeni teknolojileri takip ediyor ve projelerimde en uygun çözümleri sunmaya çalışıyorum. Bu blogu da deneyimlerimi paylaşmak ve diğer geliştiricilere yardımcı olmak için oluşturdum.</p>'
      };
    case '2':
      return {
        title: 'WordPress Eklenti Geliştirme',
        meta: '28 Haziran 2023 | WordPress',
        content: '<p>WordPress için özel eklentiler geliştirmeye nasıl başladığımı ve bu süreçte karşılaştığım zorlukları anlatıyorum. WordPress ekosistemi içinde çalışmak, özellikle PHP bilgimi geliştirmeme yardımcı oldu.</p><p>Özellikle e-ticaret siteleri için geliştirdiğim eklentiler, işlemleri otomatikleştirerek iş süreçlerini hızlandırdı ve müşteri memnuniyetini artırdı. Bu süreçte edindiğim deneyimleri sizlerle paylaşıyorum.</p>'
      };
    case '3':
      return {
        title: 'Açık Kaynak Projelere Katkıda Bulunmak',
        meta: '15 Eylül 2023 | Açık Kaynak',
        content: '<p>Açık kaynak projelere katkıda bulunmanın hem kişisel gelişim hem de topluluk için ne kadar önemli olduğunu anlatan bir yazı. GitHub üzerinden pull request göndererek başladığım bu yolculuğun kariyer gelişimimdeki etkilerini paylaşıyorum.</p><p>Açık kaynak projeler, kodlama becerilerinizi geliştirmek, yeni insanlarla tanışmak ve sektördeki en iyi uygulamaları öğrenmek için mükemmel bir platformdur. Bu yazıda, başlangıç yapacaklar için ipuçları ve tavsiyeler de bulabilirsiniz.</p>'
      };
    default:
      return {
        title: 'Blog Yazısı',
        meta: 'Tarih | Kategori',
        content: '<p>Bu blog yazısının içeriği henüz eklenmemiş.</p>'
      };
  }
}

// Proje modalı için içerik yardımcı fonksiyonu
function getProjectContent(projectId) {
  switch(projectId) {
    case '1':
      return {
        title: 'DOF Operasyon Yönetim Portalı',
        category: 'Web Geliştirme',
        content: '<p>DOF Manager, DOF ekibinin günlük operasyonlarını yönetmek için geliştirdiğim özel bir web portalı. Bu projede kullanıcı yönetimi, görev takibi ve raporlama özellikleri bulunmaktadır.</p><p>Projede kullanılan teknolojiler: HTML, CSS, JavaScript, PHP ve MySQL. Responsive tasarım ile her cihazda sorunsuz çalışması sağlanmıştır.</p>',
        links: '<a href="javascript:void(0);" class="btn">Demo</a> <a href="javascript:void(0);" class="btn">GitHub</a>'
      };
    case '2':
      return {
        title: 'E-Ticaret Web Sitesi',
        category: 'Web Geliştirme',
        content: '<p>Modern bir e-ticaret platformu için geliştirdiğim özel bir web sitesi. Ödeme sistemi entegrasyonu, ürün yönetimi ve kullanıcı deneyimine özel önem verilmiştir.</p><p>Projede WordPress ve WooCommerce kullanılmış, özel temalar ve eklentilerle benzersiz bir deneyim sunulmuştur. SEO optimizasyonu ve hız iyileştirmeleri ile yüksek performans elde edilmiştir.</p>',
        links: '<a href="javascript:void(0);" class="btn">Demo</a> <a href="javascript:void(0);" class="btn">Case Study</a>'
      };
    case '3':
      return {
        title: 'İntranet Portalı',
        category: 'Web Geliştirme',
        content: '<p>Büyük bir şirket için geliştirdiğim özel bir intranet portalı. Çalışanların iç iletişimini kolaylaştıran, doküman paylaşımı ve proje yönetimini sağlayan bir sistemdir.</p><p>Laravel framework kullanılarak geliştirilen bu proje, şirket içi verimliliği artırmış ve iletişim süreçlerini hızlandırmıştır. Güvenlik önlemleri ve rol tabanlı erişim sistemi ile hassas verilerin korunması sağlanmıştır.</p>',
        links: '<a href="javascript:void(0);" class="btn">Demo</a> <a href="javascript:void(0);" class="btn">Detaylar</a>'
      };
    case '4':
      return {
        title: 'Mobil Uygulama',
        category: 'Mobile App',
        content: '<p>Bir etkinlik organizasyon şirketi için geliştirdiğim mobil uygulama. Etkinlik takibi, bilet satın alma ve katılımcı yönetimi özellikleri bulunmaktadır.</p><p>React Native kullanılarak geliştirilen bu uygulama, hem Android hem de iOS platformlarında sorunsuz çalışmaktadır. Push bildirimler ve harita entegrasyonu ile kullanıcı deneyimi zenginleştirilmiştir.</p>',
        links: '<a href="javascript:void(0);" class="btn">App Store</a> <a href="javascript:void(0);" class="btn">Google Play</a>'
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
