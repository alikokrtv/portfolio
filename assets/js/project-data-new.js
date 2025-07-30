/**
 * Proje içerikleri için veri dosyası - Bilingual Project Data
 * Bu dosyada portfolyo projeleri ve blog yazıları için Türkçe ve İngilizce içerikler bulunmaktadır
 */

// Proje içeriği için yardımcı fonksiyon
function getProjectContent(projectId) {
  const currentLang = window.languageManager ? window.languageManager.getCurrentLanguage() : 'tr';
  
  const projectData = {
    '1': {
      tr: {
        title: 'Pastahane Yönetim Sistemi',
        category: 'Web Uygulaması',
        content: `
          <div class="project-images">
            <img src="./assets/images/project-1.jpg" alt="Pastahane Yönetim Sistemi" class="project-img">
          </div>
          <h4>Proje Özeti</h4>
          <p>Pastahane işletmeleri için geliştirdiğim kapsamlı yönetim sistemi. Sipariş takibi, stok yönetimi, müşteri ilişkileri ve finansal raporlama özelliklerini içeren modern bir web uygulaması.</p>
          
          <h4>Teknik Özellikler</h4>
          <ul>
            <li><strong>Backend:</strong> PHP 8.1, Laravel Framework</li>
            <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript, Bootstrap</li>
            <li><strong>Veritabanı:</strong> MySQL</li>
            <li><strong>API:</strong> RESTful API</li>
            <li><strong>Güvenlik:</strong> JWT Authentication, CSRF Protection</li>
          </ul>
          
          <h4>Ana Özellikler</h4>
          <ul>
            <li>Sipariş yönetimi ve takip sistemi</li>
            <li>Stok kontrolü ve uyarı sistemi</li>
            <li>Müşteri veritabanı yönetimi</li>
            <li>Finansal raporlama ve analiz</li>
            <li>Mobil uyumlu responsive tasarım</li>
            <li>Çoklu kullanıcı desteği ve yetkilendirme</li>
          </ul>
        `,
        links: '<a href="https://github.com/alikokrtv/pastahane-updated" target="_blank" class="btn">GitHub Repo</a>'
      },
      en: {
        title: 'Bakery Management System',
        category: 'Web Application',
        content: `
          <div class="project-images">
            <img src="./assets/images/project-1.jpg" alt="Bakery Management System" class="project-img">
          </div>
          <h4>Project Overview</h4>
          <p>A comprehensive management system developed for bakery businesses. A modern web application featuring order tracking, inventory management, customer relations, and financial reporting capabilities.</p>
          
          <h4>Technical Features</h4>
          <ul>
            <li><strong>Backend:</strong> PHP 8.1, Laravel Framework</li>
            <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript, Bootstrap</li>
            <li><strong>Database:</strong> MySQL</li>
            <li><strong>API:</strong> RESTful API</li>
            <li><strong>Security:</strong> JWT Authentication, CSRF Protection</li>
          </ul>
          
          <h4>Key Features</h4>
          <ul>
            <li>Order management and tracking system</li>
            <li>Inventory control and alert system</li>
            <li>Customer database management</li>
            <li>Financial reporting and analytics</li>
            <li>Mobile-responsive design</li>
            <li>Multi-user support with authorization</li>
          </ul>
        `,
        links: '<a href="https://github.com/alikokrtv/pastahane-updated" target="_blank" class="btn">GitHub Repo</a>'
      }
    },
    '2': {
      tr: {
        title: 'Kira Takip Sistemi',
        category: 'Emlak Yönetimi',
        content: `
          <div class="project-images">
            <img src="./assets/images/project-2.jpg" alt="Kira Takip Sistemi" class="project-img">
          </div>
          <h4>Proje Detayları</h4>
          <p>Emlak yöneticileri ve ev sahipleri için geliştirdiğim kapsamlı kira takip sistemi. Kiracı bilgileri, ödeme takibi, sözleşme yönetimi ve finansal raporlama özelliklerini içeren modern bir web uygulaması.</p>
          
          <h4>Teknik Özellikler</h4>
          <ul>
            <li><strong>Backend:</strong> PHP, Laravel Framework</li>
            <li><strong>Frontend:</strong> Vue.js, Bootstrap</li>
            <li><strong>Veritabanı:</strong> MySQL</li>
            <li><strong>Bildirimler:</strong> Email & SMS entegrasyonu</li>
          </ul>
          
          <h4>Ana Özellikler</h4>
          <ul>
            <li>Kiracı ve mülk bilgileri yönetimi</li>
            <li>Otomatik kira hatırlatmaları</li>
            <li>Ödeme takibi ve gecikme uyarıları</li>
            <li>Sözleşme yönetimi ve yenileme</li>
            <li>Finansal raporlama ve analiz</li>
            <li>Mobil uyumlu responsive tasarım</li>
          </ul>
        `,
        links: '<a href="https://github.com/alikokrtv/kira-takip" target="_blank" class="btn">GitHub Repo</a>'
      },
      en: {
        title: 'Rental Management System',
        category: 'Real Estate Management',
        content: `
          <div class="project-images">
            <img src="./assets/images/project-2.jpg" alt="Rental Management System" class="project-img">
          </div>
          <h4>Project Details</h4>
          <p>A comprehensive rental tracking system developed for property managers and landlords. A modern web application featuring tenant information, payment tracking, contract management, and financial reporting capabilities.</p>
          
          <h4>Technical Features</h4>
          <ul>
            <li><strong>Backend:</strong> PHP, Laravel Framework</li>
            <li><strong>Frontend:</strong> Vue.js, Bootstrap</li>
            <li><strong>Database:</strong> MySQL</li>
            <li><strong>Notifications:</strong> Email & SMS integration</li>
          </ul>
          
          <h4>Key Features</h4>
          <ul>
            <li>Tenant and property information management</li>
            <li>Automatic rent reminders</li>
            <li>Payment tracking and overdue alerts</li>
            <li>Contract management and renewal</li>
            <li>Financial reporting and analytics</li>
            <li>Mobile-responsive design</li>
          </ul>
        `,
        links: '<a href="https://github.com/alikokrtv/kira-takip" target="_blank" class="btn">GitHub Repo</a>'
      }
    },
    '3': {
      tr: {
        title: 'WordPress Doğum Günü Eklentisi',
        category: 'WordPress Plugin',
        content: `
          <div class="project-images">
            <img src="./assets/images/project-3.jpg" alt="WordPress Doğum Günü Eklentisi" class="project-img">
          </div>
          <h4>Proje Tanımı</h4>
          <p>WordPress siteleri için geliştirdiğim özel doğum günü kutlama eklentisi. Kullanıcıların doğum günlerini takip eder, otomatik kutlama mesajları gönderir ve görsel efektlerle özel anları unutulmaz kılar.</p>
          
          <h4>Özellikler</h4>
          <ul>
            <li>Otomatik doğum günü tespit ve kutlama</li>
            <li>Konfeti ve ses efektleri</li>
            <li>Kişiselleştirilebilir kutlama mesajları</li>
            <li>Kullanıcı listesi ve yönetim paneli</li>
            <li>Email bildirimleri</li>
            <li>Çoklu dil desteği</li>
          </ul>
          
          <h4>Teknik Detaylar</h4>
          <ul>
            <li><strong>Platform:</strong> WordPress</li>
            <li><strong>Dil:</strong> PHP, JavaScript</li>
            <li><strong>Veritabanı:</strong> WordPress Database</li>
            <li><strong>API:</strong> WordPress REST API</li>
          </ul>
        `,
        links: '<a href="https://github.com/alikokrtv/birthday-celebrate" target="_blank" class="btn">GitHub Repo</a>'
      },
      en: {
        title: 'WordPress Birthday Plugin',
        category: 'WordPress Plugin',
        content: `
          <div class="project-images">
            <img src="./assets/images/project-3.jpg" alt="WordPress Birthday Plugin" class="project-img">
          </div>
          <h4>Project Description</h4>
          <p>A custom birthday celebration plugin developed for WordPress sites. It tracks user birthdays, sends automatic celebration messages, and creates memorable moments with visual effects.</p>
          
          <h4>Features</h4>
          <ul>
            <li>Automatic birthday detection and celebration</li>
            <li>Confetti and sound effects</li>
            <li>Customizable celebration messages</li>
            <li>User list and admin panel</li>
            <li>Email notifications</li>
            <li>Multi-language support</li>
          </ul>
          
          <h4>Technical Details</h4>
          <ul>
            <li><strong>Platform:</strong> WordPress</li>
            <li><strong>Language:</strong> PHP, JavaScript</li>
            <li><strong>Database:</strong> WordPress Database</li>
            <li><strong>API:</strong> WordPress REST API</li>
          </ul>
        `,
        links: '<a href="https://github.com/alikokrtv/birthday-celebrate" target="_blank" class="btn">GitHub Repo</a>'
      }
    },
    '4': {
      tr: {
        title: 'Kişisel Portfolyo Sitesi',
        category: 'Web Geliştirme',
        content: `
          <div class="project-images">
            <img src="./assets/images/project-4.jpg" alt="Kişisel Portfolyo" class="project-img">
          </div>
          <h4>Proje Hakkında</h4>
          <p>Modern ve responsive tasarıma sahip kişisel portfolyo web sitesi. Türkçe ve İngilizce dil desteği, dinamik içerik yönetimi ve kullanıcı dostu arayüz özellikleri içerir.</p>
          
          <h4>Özellikler</h4>
          <ul>
            <li>Çift dilli (Türkçe/İngilizce) destek</li>
            <li>Responsive ve modern tasarım</li>
            <li>Dinamik proje galerisi</li>
            <li>Blog sistemi entegrasyonu</li>
            <li>İletişim formu</li>
            <li>SEO optimizasyonu</li>
          </ul>
          
          <h4>Teknolojiler</h4>
          <ul>
            <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript</li>
            <li><strong>Framework:</strong> Vanilla JS</li>
            <li><strong>Tasarım:</strong> Custom CSS, Flexbox, Grid</li>
            <li><strong>İkonlar:</strong> Ionicons</li>
          </ul>
        `,
        links: '<a href="https://github.com/alikokrtv/vcard-personal-portfolio" target="_blank" class="btn">GitHub Repo</a>'
      },
      en: {
        title: 'Personal Portfolio Website',
        category: 'Web Development',
        content: `
          <div class="project-images">
            <img src="./assets/images/project-4.jpg" alt="Personal Portfolio" class="project-img">
          </div>
          <h4>About Project</h4>
          <p>A modern and responsive personal portfolio website. Features Turkish and English language support, dynamic content management, and user-friendly interface.</p>
          
          <h4>Features</h4>
          <ul>
            <li>Bilingual (Turkish/English) support</li>
            <li>Responsive and modern design</li>
            <li>Dynamic project gallery</li>
            <li>Blog system integration</li>
            <li>Contact form</li>
            <li>SEO optimization</li>
          </ul>
          
          <h4>Technologies</h4>
          <ul>
            <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript</li>
            <li><strong>Framework:</strong> Vanilla JS</li>
            <li><strong>Design:</strong> Custom CSS, Flexbox, Grid</li>
            <li><strong>Icons:</strong> Ionicons</li>
          </ul>
        `,
        links: '<a href="https://github.com/alikokrtv/vcard-personal-portfolio" target="_blank" class="btn">GitHub Repo</a>'
      }
    }
  };
  
  return projectData[projectId] ? projectData[projectId][currentLang] : {
    title: currentLang === 'tr' ? 'Proje Bulunamadı' : 'Project Not Found',
    category: currentLang === 'tr' ? 'Genel' : 'General',
    content: currentLang === 'tr' ? '<p>Bu proje henüz eklenmemiş.</p>' : '<p>This project has not been added yet.</p>',
    links: ''
  };
}

// Blog içeriği için yardımcı fonksiyon
function getBlogContent(blogId) {
  const currentLang = window.languageManager ? window.languageManager.getCurrentLanguage() : 'tr';
  
  const blogData = {
    '1': {
      tr: {
        title: 'Modern Web Geliştirme Trendleri 2024',
        meta: '15 Mart 2024 | Web Geliştirme',
        content: `
          <div class="blog-image">
            <img src="./assets/images/blog-1.jpg" alt="Web Geliştirme Trendleri" class="featured-img">
          </div>
          
          <h3>2024 Yılının Öne Çıkan Web Teknolojileri</h3>
          <p>Web geliştirme dünyası sürekli evrim geçiriyor. 2024 yılında öne çıkan teknolojiler ve trendler hakkında detaylı bir inceleme.</p>
          
          <h4>Öne Çıkan Teknolojiler</h4>
          <ul>
            <li><strong>Next.js 14:</strong> App Router ve Server Components</li>
            <li><strong>Astro:</strong> Static site generation için yeni yaklaşım</li>
            <li><strong>Tailwind CSS:</strong> Utility-first CSS framework</li>
            <li><strong>TypeScript:</strong> Tip güvenliği ve geliştirici deneyimi</li>
          </ul>
          
          <h4>Performans Optimizasyonu</h4>
          <p>Modern web uygulamalarında performans kritik önem taşıyor. Core Web Vitals metrikleri ve optimizasyon teknikleri.</p>
        `
      },
      en: {
        title: 'Modern Web Development Trends 2024',
        meta: 'March 15, 2024 | Web Development',
        content: `
          <div class="blog-image">
            <img src="./assets/images/blog-1.jpg" alt="Web Development Trends" class="featured-img">
          </div>
          
          <h3>Leading Web Technologies of 2024</h3>
          <p>The web development world is constantly evolving. A detailed review of the technologies and trends that stand out in 2024.</p>
          
          <h4>Featured Technologies</h4>
          <ul>
            <li><strong>Next.js 14:</strong> App Router and Server Components</li>
            <li><strong>Astro:</strong> New approach for static site generation</li>
            <li><strong>Tailwind CSS:</strong> Utility-first CSS framework</li>
            <li><strong>TypeScript:</strong> Type safety and developer experience</li>
          </ul>
          
          <h4>Performance Optimization</h4>
          <p>Performance is critical in modern web applications. Core Web Vitals metrics and optimization techniques.</p>
        `
      }
    }
  };

  return blogData[blogId] ? blogData[blogId][currentLang] : {
    title: currentLang === 'tr' ? 'Blog Yazısı Bulunamadı' : 'Blog Post Not Found',
    meta: currentLang === 'tr' ? 'Tarih | Kategori' : 'Date | Category',
    content: currentLang === 'tr' ? '<p>Bu blog yazısı henüz eklenmemiş.</p>' : '<p>This blog post has not been added yet.</p>'
  };
}
