'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

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

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    // Get the original dataset value
    let pageType = "";
    
    // Match the index of the navigation link to the corresponding page
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
    
    // Update active state for navigation links
    for (let k = 0; k < navigationLinks.length; k++) {
      if (k === i) {
        navigationLinks[k].classList.add("active");
      } else {
        navigationLinks[k].classList.remove("active");
      }
    }
  });
}

// Sayfa yüklendiğinde çalışacak kodlar
document.addEventListener('DOMContentLoaded', function() {
  // Tüm portfolyo modal butonlarını bul
  var projectButtons = document.querySelectorAll('.project-open');
  
  // Her buton için olay dinleyicisi ekle
  for (var i = 0; i < projectButtons.length; i++) {
    projectButtons[i].onclick = function(e) {
      e.preventDefault();
      
      var projectId = this.getAttribute('data-project-id');
      console.log('Proje butonuna tıklandı:', projectId);
      
      // Modal bilgilerini oluştur
      var title, content, category;
      
      switch(projectId) {
        case '1':
          title = 'DOF Manager';
          category = 'Web Geliştirme';
          content = 'DOF Manager projesi detayları';
          break;
        case '2':
          title = 'E-Ticaret Sitesi';
          category = 'Web Geliştirme';
          content = 'E-Ticaret Sitesi projesi detayları';
          break;
        case '3':
          title = 'İntranet Portalı';
          category = 'Web Geliştirme';
          content = 'İntranet Portalı projesi detayları';
          break;
        default:
          title = 'Proje';
          category = 'Web Geliştirme';
          content = 'Proje detayları';
      }
      
      // Modal içeriğini ayarla
      document.getElementById('project-modal-title').innerText = title;
      document.getElementById('project-modal-category').innerText = category;
      document.getElementById('project-modal-content').innerHTML = '<p>' + content + '</p>';
      
      // Modalı göster
      document.getElementById('project-modal-container').style.display = 'block';
    };
  }
  
  // Tüm blog modal butonlarını bul
  var blogButtons = document.querySelectorAll('.blog-open');
  
  // Her buton için olay dinleyicisi ekle
  for (var i = 0; i < blogButtons.length; i++) {
    blogButtons[i].onclick = function(e) {
      e.preventDefault();
      
      var blogId = this.getAttribute('data-blog-id');
      console.log('Blog butonuna tıklandı:', blogId);
      
      // Modal bilgilerini oluştur
      var title, meta, content;
      
      switch(blogId) {
        case '1':
          title = 'Web Geliştirme Yolculuğum';
          meta = '12 Nisan 2023 | Web Geliştirme';
          content = 'Web geliştirme yolculuğum hakkında detaylar';
          break;
        case '2':
          title = 'WordPress Eklenti Geliştirme';
          meta = '28 Haziran 2023 | WordPress';
          content = 'WordPress eklenti geliştirme deneyimlerim';
          break;
        case '3':
          title = 'Açık Kaynak Projelere Katkıda Bulunmanın Önemi';
          meta = '15 Eylül 2023 | Açık Kaynak';
          content = 'Açık kaynak projeler hakkında düşüncelerim';
          break;
        default:
          title = 'Blog Yazısı';
          meta = 'Tarih | Kategori';
          content = 'Blog yazısı içeriği';
      }
      
      // Modal içeriğini ayarla
      document.getElementById('blog-modal-title').innerText = title;
      document.getElementById('blog-modal-meta').innerText = meta;
      document.getElementById('blog-modal-content').innerHTML = '<p>' + content + '</p>';
      
      // Modalı göster
      document.getElementById('blog-modal-container').style.display = 'block';
    };
  }
  
  // Modal kapatma butonlarını bul
  var closeButtons = document.querySelectorAll('.blog-modal-close, .project-modal-close');
  
  // Kapatma butonlarına olay dinleyicisi ekle
  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
      this.parentNode.parentNode.style.display = 'none';
    };
  }
  
  // Modal dışına tıklandığında kapat
  window.onclick = function(e) {
    if (e.target.className === 'modal-container') {
      e.target.style.display = 'none';
    }
  };

  // Blog ve Proje modalları için daha detaylı içerikler
  function getBlogContent(blogId) {
    switch(blogId) {
      case '1':
        return {
          title: 'Web Geliştirme Yolculuğum',
          meta: '12 Nisan 2023 | Web Geliştirme',
          content: '<p>Web geliştirme yolculuğuma nasıl başladığımı ve bugünlere nasıl geldiğimi anlatan bir yazı. Front-end ve back-end teknolojileri öğrenerek başladığım bu yolculukta, öğrendiğim en önemli şey sürekli kendini geliştirmenin önemi oldu.</p>'
        };
      case '2':
        return {
          title: 'WordPress Eklenti Geliştirme',
          meta: '28 Haziran 2023 | WordPress',
          content: '<p>WordPress için özel eklentiler geliştirmeye nasıl başladığımı ve bu süreçte karşılaştığım zorlukları anlatıyorum. WordPress ekosistemi içinde çalışmak, özellikle PHP bilgimi geliştirmeme yardımcı oldu.</p>'
        };
      case '3':
        return {
          title: 'Açık Kaynak Projelere Katkıda Bulunmak',
          meta: '15 Eylül 2023 | Açık Kaynak',
          content: '<p>Açık kaynak projelere katkıda bulunmanın hem kişisel gelişim hem de topluluk için ne kadar önemli olduğunu anlatan bir yazı. GitHub üzerinden pull request göndererek başladığım bu yolculuğun kariyer gelişimimdeki etkilerini paylaşıyorum.</p>'
        };
      default:
        return {
          title: 'Blog Yazısı',
          meta: 'Tarih | Kategori',
          content: '<p>Bu blog yazısının içeriği henüz eklenmemiş.</p>'
        };
    }
  }
  
  function getProjectContent(projectId) {
    switch(projectId) {
      case '1':
        return {
          title: 'DOF Operasyon Yönetim Portalı',
          category: 'Web Geliştirme',
          content: '<p>DOF Manager, DOF ekibinin günlük operasyonlarını yönetmek için geliştirdiğim özel bir web portalı. Bu projede kullanıcı yönetimi, görev takibi ve raporlama özellikleri bulunmaktadır.</p>',
          links: '<a href="#" class="btn">Demo</a>'
        };
      case '2':
        return {
          title: 'E-Ticaret Web Sitesi',
          category: 'Web Geliştirme',
          content: '<p>Modern bir e-ticaret platformu için geliştirdiğim özel bir web sitesi. Ödeme sistemi entegrasyonu, ürün yönetimi ve kullanıcı deneyimine özel önem verilmiştir.</p>',
          links: '<a href="#" class="btn">Demo</a>'
        };
      case '3':
        return {
          title: 'İntranet Portalı',
          category: 'Web Geliştirme',
          content: '<p>Büyük bir şirket için geliştirdiğim özel bir intranet portalı. Çalışanların iç iletişimini kolaylaştıran, doküman paylaşımı ve proje yönetimini sağlayan bir sistemdir.</p>',
          links: '<a href="#" class="btn">Demo</a>'
        };
      case '4':
        return {
          title: 'Mobil Uygulama',
          category: 'Mobile App',
          content: '<p>Bir etkinlik organizasyon şirketi için geliştirdiğim mobil uygulama. Etkinlik takibi, bilet satın alma ve katılımcı yönetimi özellikleri bulunmaktadır.</p>',
          links: '<a href="#" class="btn">Demo</a>'
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
});