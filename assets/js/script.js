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

// Portfolio ve Blog Modal İşlevselliği
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM yüklendi, modal işlevselliği başlatılıyor...');
  
  // Blog modalı için gerekli elemanlar
  const blogLinks = document.querySelectorAll('.blog-open');
  const blogModalContainer = document.getElementById('blog-modal-container');
  const blogModalClose = document.querySelector('#blog-modal-container .blog-modal-close');
  
  // Proje modalı için gerekli elemanlar
  const projectLinks = document.querySelectorAll('.project-open');
  const projectModalContainer = document.getElementById('project-modal-container');
  const projectModalClose = document.querySelector('#project-modal-container .project-modal-close');
  
  console.log('Blog linkleri:', blogLinks.length);
  console.log('Proje linkleri:', projectLinks.length);
  
  // Blog link tıklama olayları
  blogLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Blog link tıklandı:', this.getAttribute('data-blog-id'));
      const blogId = this.getAttribute('data-blog-id');
      openBlogModal(blogId);
    });
  });
  
  // Proje link tıklama olayları
  projectLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      console.log('Proje link tıklandı:', this.getAttribute('data-project-id'));
      const projectId = this.getAttribute('data-project-id');
      openProjectModal(projectId);
    });
  });
  
  // Modal kapatma olayları
  if (blogModalClose) {
    blogModalClose.addEventListener('click', function() {
      blogModalContainer.style.display = 'none';
    });
  }
  
  if (projectModalClose) {
    projectModalClose.addEventListener('click', function() {
      projectModalContainer.style.display = 'none';
    });
  }
  
  // Dışarıya tıklayınca modalı kapatma
  window.addEventListener('click', function(e) {
    if (e.target === blogModalContainer) {
      blogModalContainer.style.display = 'none';
    }
    if (e.target === projectModalContainer) {
      projectModalContainer.style.display = 'none';
    }
  });

  // Modal açma fonksiyonları
  window.openBlogModal = function(blogId) {
    console.log('openBlogModal çağrıldı, ID:', blogId);
    const blogModalTitle = document.getElementById('blog-modal-title');
    const blogModalMeta = document.getElementById('blog-modal-meta');
    const blogModalContent = document.getElementById('blog-modal-content');
    
    // Blog içeriğini ID'ye göre ayarla
    let title = '', meta = '', content = '';
    
    switch(blogId) {
      case '1':
        title = 'Web Geliştirme Yolculuğum';
        meta = '12 Nisan 2023 | Web Geliştirme';
        content = '<p>Web geliştirme yolculuğuma nasıl başladığımı ve bugünlere nasıl geldiğimi anlatan bir yazı.</p>';
        break;
      case '2':
        title = 'WordPress Eklenti Geliştirme';
        meta = '28 Haziran 2023 | WordPress';
        content = '<p>WordPress için özel eklentiler geliştirmeye nasıl başladığımı ve bu süreçte karşılaştığım zorlukları anlatıyorum.</p>';
        break;
      case '3':
        title = 'Açık Kaynak Projelere Katkıda Bulunmanın Önemi';
        meta = '15 Eylül 2023 | Açık Kaynak';
        content = '<p>Açık kaynak projelere katkıda bulunmanın hem kişisel gelişim hem de topluluk için ne kadar önemli olduğunu anlatan bir yazı.</p>';
        break;
      default:
        title = 'Blog Yazısı';
        meta = 'Tarih | Kategori';
        content = '<p>Bu blog yazısının içeriği henüz eklenmemiş.</p>';
    }
    
    // Modal içeriğini ayarla
    blogModalTitle.innerHTML = title;
    blogModalMeta.innerHTML = meta;
    blogModalContent.innerHTML = content;
    
    // Modalı göster
    blogModalContainer.style.display = 'block';
  };

  window.openProjectModal = function(projectId) {
    console.log('openProjectModal çağrıldı, ID:', projectId);
    const projectModalTitle = document.getElementById('project-modal-title');
    const projectModalCategory = document.getElementById('project-modal-category');
    const projectModalContent = document.getElementById('project-modal-content');
    const projectModalLinks = document.getElementById('project-modal-links');
    
    // Proje içeriğini ID'ye göre ayarla
    let title = '', category = '', content = '', links = '';
    
    switch(projectId) {
      case '1':
        title = 'DOF Operasyon Yönetim Portalı';
        category = 'Web Geliştirme';
        content = '<p>DOF Manager, DOF ekibinin günlük operasyonlarını yönetmek için geliştirdiğim özel bir web portalı.</p>';
        links = '<a href="#" class="btn">Demo</a>';
        break;
      case '2':
        title = 'E-Ticaret Web Sitesi';
        category = 'Web Geliştirme';
        content = '<p>Modern bir e-ticaret platformu için geliştirdiğim özel bir web sitesi.</p>';
        links = '<a href="#" class="btn">Demo</a>';
        break;
      case '3':
        title = 'İntranet Portalı';
        category = 'Web Geliştirme';
        content = '<p>Büyük bir şirket için geliştirdiğim özel bir intranet portalı.</p>';
        links = '<a href="#" class="btn">Demo</a>';
        break;
      case '4':
        title = 'Mobil Uygulama';
        category = 'Mobile App';
        content = '<p>Bir etkinlik organizasyon şirketi için geliştirdiğim mobil uygulama.</p>';
        links = '<a href="#" class="btn">Demo</a>';
        break;
      default:
        title = 'Proje';
        category = 'Kategori';
        content = '<p>Bu projenin içeriği henüz eklenmemiş.</p>';
        links = '';
    }
    
    // Modal içeriğini ayarla
    projectModalTitle.innerHTML = title;
    projectModalCategory.innerHTML = category;
    projectModalContent.innerHTML = content;
    projectModalLinks.innerHTML = links;
    
    // Modalı göster
    projectModalContainer.style.display = 'block';
  };
});