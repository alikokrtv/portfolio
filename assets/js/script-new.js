'use strict';

// Sayfa yüklendikten sonra çalışacak temel fonksiyonlar
$(document).ready(function() {
  
  // Element toggle fonksiyonu
  function elementToggleFunc(elem) {
    elem.classList.toggle("active");
  }

  // Sidebar değişkenleri ve işlevselliği
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");

  sidebarBtn.addEventListener("click", function() {
    elementToggleFunc(sidebar);
  });

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
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  }

  // Testimonial öğelerine tıklama olayı ekleme
  for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener("click", function() {
      modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
      modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
      modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
      modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
      testimonialsModalFunc();
    });
  }

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
  for (let i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function() {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  }

  // Filtreleme değişkenleri
  const filterItems = document.querySelectorAll("[data-filter-item]");

  // Filtreleme fonksiyonu
  const filterFunc = function(selectedValue) {
    for (let i = 0; i < filterItems.length; i++) {
      if (selectedValue === "all") {
        filterItems[i].classList.add("active");
      } else if (selectedValue === filterItems[i].dataset.category) {
        filterItems[i].classList.add("active");
      } else {
        filterItems[i].classList.remove("active");
      }
    }
  }

  // Filtreleme butonlarına tıklama olayı ekleme
  let lastClickedBtn = filterBtn[0];

  for (let i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function() {
      let selectedValue = this.innerText.toLowerCase();
      selectValue.innerText = this.innerText;
      filterFunc(selectedValue);
      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  }

  // İletişim formu değişkenleri
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  // Form girişlerine olay dinleyicisi ekleme
  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function() {
      // Form doğruluğunu kontrol et
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  }

  // Sayfa gezinme değişkenleri
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  // Tüm gezinme bağlantılarına olay dinleyicisi ekleme
  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function() {
      // Orijinal veri kümesi değerini al
      let pageType = "";
      
      // Gezinme bağlantısının dizinini ilgili sayfaya eşleştir
      if (i === 0) pageType = "about";
      else if (i === 1) pageType = "resume";
      else if (i === 2) pageType = "portfolio";
      else if (i === 3) pageType = "blog";
      else if (i === 4) pageType = "contact";
      
      for (let j = 0; j < pages.length; j++) {
        if (pages[j].dataset.page === pageType) {
          pages[j].classList.add("active");
          window.scrollTo(0, 0);
        } else {
          pages[j].classList.remove("active");
        }
      }
      
      // Gezinme bağlantıları için aktif durumu güncelle
      for (let k = 0; k < navigationLinks.length; k++) {
        if (k === i) {
          navigationLinks[k].classList.add("active");
        } else {
          navigationLinks[k].classList.remove("active");
        }
      }
    });
  }

  // *** BLOG VE PORTFOLYO MODALLARI ***
  
  // Proje modali açma fonksiyonu
  $(document).on('click', '.project-open', function(e) {
    e.preventDefault();
    
    var projectId = $(this).data('project-id');
    console.log('Proje modalı açılıyor: ID=' + projectId);
    
    // Projelerle ilgili bilgileri al
    var projectInfo = getProjectContent(projectId);
    
    // Modal içeriğini güncelle
    $('#project-modal-title').html(projectInfo.title);
    $('#project-modal-category').html(projectInfo.category);
    $('#project-modal-content').html(projectInfo.content);
    $('#project-modal-links').html(projectInfo.links);
    
    // Modalı göster
    $('#project-modal-container').fadeIn();
  });
  
  // Blog modali açma fonksiyonu
  $(document).on('click', '.blog-open', function(e) {
    e.preventDefault();
    
    var blogId = $(this).data('blog-id');
    console.log('Blog modalı açılıyor: ID=' + blogId);
    
    // Blog ile ilgili bilgileri al
    var blogInfo = getBlogContent(blogId);
    
    // Modal içeriğini güncelle
    $('#blog-modal-title').html(blogInfo.title);
    $('#blog-modal-meta').html(blogInfo.meta);
    $('#blog-modal-content').html(blogInfo.content);
    
    // Modalı göster
    $('#blog-modal-container').fadeIn();
  });
  
  // Modal kapatma butonları
  $(document).on('click', '.blog-modal-close, .project-modal-close', function() {
    $(this).closest('.modal-container').fadeOut();
  });
  
  // Modal dışına tıklama ile kapatma
  $(document).on('click', '.modal-container', function(e) {
    if (e.target === this) {
      $(this).fadeOut();
    }
  });
  
  // İletişim formu gönderimi
  $('#contact-form').on('submit', function(e) {
    e.preventDefault();
    
    var formResult = $('#form-result');
    formResult.html('<p>Mesaj gönderiliyor...</p>').show();
    
    // Form verilerini al
    var formData = {
      from_name: $('[name="from_name"]').val(),
      reply_to: $('[name="reply_to"]').val(),
      message: $('[name="message"]').val()
    };
    
    // Basit bir form başarı mesajı göster (EmailJS yerine)
    setTimeout(function() {
      formResult.html('<p style="color: var(--orange-yellow-crayola);">Mesajınız başarıyla gönderildi!</p>');
      $('#contact-form')[0].reset();
    }, 1000);
    
    console.log('Form verileri:', formData);
  });
});

// Blog içerik fonksiyonu
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

// Proje içerik fonksiyonu
function getProjectContent(projectId) {
  switch(projectId) {
    case '1':
      return {
        title: 'DOF Operasyon Yönetim Portalı',
        category: 'Web Geliştirme',
        content: '<p>DOF Manager, DOF ekibinin günlük operasyonlarını yönetmek için geliştirdiğim özel bir web portalı. Bu projede kullanıcı yönetimi, görev takibi ve raporlama özellikleri bulunmaktadır.</p><p>Projede kullanılan teknolojiler: HTML, CSS, JavaScript, PHP ve MySQL. Responsive tasarım ile her cihazda sorunsuz çalışması sağlanmıştır.</p>',
        links: '<a href="#" class="btn">Demo</a> <a href="#" class="btn">GitHub</a>'
      };
    case '2':
      return {
        title: 'E-Ticaret Web Sitesi',
        category: 'Web Geliştirme',
        content: '<p>Modern bir e-ticaret platformu için geliştirdiğim özel bir web sitesi. Ödeme sistemi entegrasyonu, ürün yönetimi ve kullanıcı deneyimine özel önem verilmiştir.</p><p>Projede WordPress ve WooCommerce kullanılmış, özel temalar ve eklentilerle benzersiz bir deneyim sunulmuştur. SEO optimizasyonu ve hız iyileştirmeleri ile yüksek performans elde edilmiştir.</p>',
        links: '<a href="#" class="btn">Demo</a> <a href="#" class="btn">Case Study</a>'
      };
    case '3':
      return {
        title: 'İntranet Portalı',
        category: 'Web Geliştirme',
        content: '<p>Büyük bir şirket için geliştirdiğim özel bir intranet portalı. Çalışanların iç iletişimini kolaylaştıran, doküman paylaşımı ve proje yönetimini sağlayan bir sistemdir.</p><p>Laravel framework kullanılarak geliştirilen bu proje, şirket içi verimliliği artırmış ve iletişim süreçlerini hızlandırmıştır. Güvenlik önlemleri ve rol tabanlı erişim sistemi ile hassas verilerin korunması sağlanmıştır.</p>',
        links: '<a href="#" class="btn">Demo</a> <a href="#" class="btn">Detaylar</a>'
      };
    case '4':
      return {
        title: 'Mobil Uygulama',
        category: 'Mobile App',
        content: '<p>Bir etkinlik organizasyon şirketi için geliştirdiğim mobil uygulama. Etkinlik takibi, bilet satın alma ve katılımcı yönetimi özellikleri bulunmaktadır.</p><p>React Native kullanılarak geliştirilen bu uygulama, hem Android hem de iOS platformlarında sorunsuz çalışmaktadır. Push bildirimler ve harita entegrasyonu ile kullanıcı deneyimi zenginleştirilmiştir.</p>',
        links: '<a href="#" class="btn">App Store</a> <a href="#" class="btn">Google Play</a>'
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
