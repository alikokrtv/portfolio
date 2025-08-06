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
        title: 'Kira Takip Sistemi',
        category: 'Flask Web Uygulaması',
        content: `
          <div class="project-images">
            <img src="./assets/images/project-1.jpg" alt="Kira Takip Sistemi" class="project-img">
          </div>
          <h4>Proje Özeti</h4>
          <p>Modern ve kullanıcı dostu bir kira sözleşmesi takip sistemi. Flask ile geliştirilmiş, Türkçe arayüzlü ve otomatik bildirim özelliklerine sahip kapsamlı emlak yönetim uygulaması.</p>
          
          <h4>Teknik Özellikler</h4>
          <ul>
            <li><strong>Backend:</strong> Python Flask Framework</li>
            <li><strong>Database:</strong> SQLAlchemy ORM</li>
            <li><strong>Frontend:</strong> Bootstrap 5, Chart.js</li>
            <li><strong>Authentication:</strong> Flask-Login</li>
            <li><strong>Email:</strong> Flask-Mail</li>
            <li><strong>Scheduler:</strong> APScheduler</li>
          </ul>
          
          <h4>Ana Özellikler</h4>
          <ul>
            <li>Kira sözleşmesi yönetimi (CRUD işlemleri)</li>
            <li>Otomatik e-posta bildirimleri (7, 30, 60, 90 gün)</li>
            <li>Dashboard ile grafikler ve istatistikler</li>
            <li>CSV içe/dışa aktarma</li>
            <li>Gelişmiş arama ve filtreleme</li>
            <li>Mobil uyumlu responsive tasarım</li>
            <li>Türkçe arayüz ve mesajlar</li>
          </ul>
        `,
        links: '<a href="https://github.com/alikokrtv/kira-takip" target="_blank" class="btn">GitHub Repo</a>'
      },
      en: {
        title: 'Rental Management System',
        category: 'Flask Web Application',
        content: `
          <div class="project-images">
            <img src="./assets/images/project-1.jpg" alt="Rental Management System" class="project-img">
          </div>
          <h4>Project Overview</h4>
          <p>A modern and user-friendly rental contract tracking system. Developed with Flask, featuring Turkish interface and automatic notification capabilities for comprehensive real estate management.</p>
          
          <h4>Technical Features</h4>
          <ul>
            <li><strong>Backend:</strong> Python Flask Framework</li>
            <li><strong>Database:</strong> SQLAlchemy ORM</li>
            <li><strong>Frontend:</strong> Bootstrap 5, Chart.js</li>
            <li><strong>Authentication:</strong> Flask-Login</li>
            <li><strong>Email:</strong> Flask-Mail</li>
            <li><strong>Scheduler:</strong> APScheduler</li>
          </ul>
          
          <h4>Key Features</h4>
          <ul>
            <li>Rental contract management (CRUD operations)</li>
            <li>Automatic email notifications (7, 30, 60, 90 days)</li>
            <li>Dashboard with charts and statistics</li>
            <li>CSV import/export functionality</li>
            <li>Advanced search and filtering</li>
            <li>Mobile-responsive design</li>
            <li>Turkish interface and messages</li>
          </ul>
        `,
        links: '<a href="https://github.com/alikokrtv/kira-takip" target="_blank" class="btn">GitHub Repo</a>'
      }
    },
    '2': {
      tr: {
        title: 'WordPress Doğum Günü Eklentisi',
        category: 'WordPress Plugin',
        content: `
          <div class="project-images">
            <img src="./assets/images/project-2.jpg" alt="WordPress Doğum Günü Eklentisi" class="project-img">
          </div>
          <h4>Proje Detayları</h4>
          <p>WordPress siteleri için geliştirdiğim eğlenceli ve interaktif doğum günü kutlama eklentisi. Kullanıcıların doğum günlerini takip eder, ses ve konfeti efektleri ile kutlama yapar.</p>
          
          <h4>Teknik Özellikler</h4>
          <ul>
            <li><strong>Platform:</strong> WordPress</li>
            <li><strong>Dil:</strong> PHP, JavaScript</li>
            <li><strong>Veritabanı:</strong> WordPress Database</li>
            <li><strong>Efektler:</strong> CSS3 Animations, Web Audio API</li>
          </ul>
          
          <h4>Ana Özellikler</h4>
          <ul>
            <li>Konfeti animasyonu</li>
            <li>Kutlama sesi</li>
            <li>Kullanıcı doğum günü listesi</li>
            <li>Kutla butonu</li>
            <li>WordPress yönetici paneli entegrasyonu</li>
            <li>Kolay kurulum ve kullanım</li>
          </ul>
        `,
        links: '<a href="https://github.com/alikokrtv/birthday-celebrate" target="_blank" class="btn">GitHub Repo</a>'
      },
      en: {
        title: 'WordPress Birthday Plugin',
        category: 'WordPress Plugin',
        content: `
          <div class="project-images">
            <img src="./assets/images/project-2.jpg" alt="WordPress Birthday Plugin" class="project-img">
          </div>
          <h4>Project Details</h4>
          <p>A fun and interactive WordPress plugin developed for celebrating user birthdays. It tracks user birthdays and celebrates with sound and confetti effects, making special moments memorable.</p>
          
          <h4>Technical Features</h4>
          <ul>
            <li><strong>Platform:</strong> WordPress</li>
            <li><strong>Language:</strong> PHP, JavaScript</li>
            <li><strong>Database:</strong> WordPress Database</li>
            <li><strong>Effects:</strong> CSS3 Animations, Web Audio API</li>
          </ul>
          
          <h4>Key Features</h4>
          <ul>
            <li>Confetti animation</li>
            <li>Celebration sound</li>
            <li>User birthday list</li>
            <li>Celebrate button</li>
            <li>WordPress admin panel integration</li>
            <li>Easy installation and usage</li>
          </ul>
        `,
        links: '<a href="https://github.com/alikokrtv/birthday-celebrate" target="_blank" class="btn">GitHub Repo</a>'
      }
    },
    '3': {
      tr: {
        title: 'WordPress Hoşgeldin Widgetı',
        category: 'WordPress Plugin',
        content: `
          <div class="project-images">
            <img src="./assets/images/project-3.jpg" alt="WordPress Hoşgeldin Widgetı" class="project-img">
          </div>
          <h4>Proje Tanımı</h4>
          <p>Giriş yapmış kullanıcılar için özel hoşgeldin mesajı gösteren WordPress eklentisi. Kullanıcıların doğum günlerinde özel kutlama mesajları ile onları mutlu eder.</p>
          
          <h4>Özellikler</h4>
          <ul>
            <li>Giriş yapmış kullanıcılar için özel hoşgeldin mesajları</li>
            <li>Doğum günü kutlama sistemi</li>
            <li>Kişiselleştirilebilir mesaj şablonları</li>
            <li>Kullanıcı dostu yönetim paneli</li>
            <li>Responsive tasarım</li>
            <li>Kolay entegrasyon</li>
          </ul>
          
          <h4>Teknik Detaylar</h4>
          <ul>
            <li><strong>Platform:</strong> WordPress</li>
            <li><strong>Dil:</strong> PHP, JavaScript</li>
            <li><strong>Veritabanı:</strong> WordPress Database</li>
            <li><strong>Hook System:</strong> WordPress Actions & Filters</li>
          </ul>
        `,
        links: '<a href="https://github.com/alikokrtv/logged_in_user_welcome_widget" target="_blank" class="btn">GitHub Repo</a>'
      },
      en: {
        title: 'WordPress Welcome Widget',
        category: 'WordPress Plugin',
        content: `
          <div class="project-images">
            <img src="./assets/images/project-3.jpg" alt="WordPress Welcome Widget" class="project-img">
          </div>
          <h4>Project Description</h4>
          <p>A custom WordPress plugin that displays personalized welcome messages for logged-in users and wishes them happy birthday on their special day.</p>
          
          <h4>Features</h4>
          <ul>
            <li>Custom welcome messages for logged-in users</li>
            <li>Birthday celebration system</li>
            <li>Customizable message templates</li>
            <li>User-friendly admin panel</li>
            <li>Responsive design</li>
            <li>Easy integration</li>
          </ul>
          
          <h4>Technical Details</h4>
          <ul>
            <li><strong>Platform:</strong> WordPress</li>
            <li><strong>Language:</strong> PHP, JavaScript</li>
            <li><strong>Database:</strong> WordPress Database</li>
            <li><strong>Hook System:</strong> WordPress Actions & Filters</li>
          </ul>
        `,
        links: '<a href="https://github.com/alikokrtv/logged_in_user_welcome_widget" target="_blank" class="btn">GitHub Repo</a>'
      }
    },
    '4': {
      tr: {
        title: 'Portal Projesi',
        category: 'Web Portal',
        content: `
          <div class="project-images">
            <img src="./assets/images/project-4.jpg" alt="Portal Projesi" class="project-img">
          </div>
          <h4>Proje Hakkında</h4>
          <p>Kurumsal kullanım için geliştirdiğim modern web portalı. Kullanıcı yönetimi, içerik yönetimi ve çeşitli modülleri içeren kapsamlı bir platform.</p>
          
          <h4>Özellikler</h4>
          <ul>
            <li>Kullanıcı kimlik doğrulama sistemi</li>
            <li>Rol tabanlı erişim kontrolü</li>
            <li>Dinamik içerik yönetimi</li>
            <li>Responsive tasarım</li>
            <li>Modüler yapı</li>
            <li>Güvenlik önlemleri</li>
          </ul>
          
          <h4>Teknolojiler</h4>
          <ul>
            <li><strong>Backend:</strong> PHP, MySQL</li>
            <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript</li>
            <li><strong>Framework:</strong> Bootstrap</li>
            <li><strong>Güvenlik:</strong> Session Management, CSRF Protection</li>
          </ul>
        `,
        links: '<a href="https://github.com/alikokrtv/portal" target="_blank" class="btn">GitHub Repo</a>'
      },
      en: {
        title: 'Portal Project',
        category: 'Web Portal',
        content: `
          <div class="project-images">
            <img src="./assets/images/project-4.jpg" alt="Portal Project" class="project-img">
          </div>
          <h4>About Project</h4>
          <p>A modern web portal developed for corporate use. A comprehensive platform featuring user management, content management, and various modules.</p>
          
          <h4>Features</h4>
          <ul>
            <li>User authentication system</li>
            <li>Role-based access control</li>
            <li>Dynamic content management</li>
            <li>Responsive design</li>
            <li>Modular structure</li>
            <li>Security measures</li>
          </ul>
          
          <h4>Technologies</h4>
          <ul>
            <li><strong>Backend:</strong> PHP, MySQL</li>
            <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript</li>
            <li><strong>Framework:</strong> Bootstrap</li>
            <li><strong>Security:</strong> Session Management, CSRF Protection</li>
          </ul>
        `,
        links: '<a href="https://github.com/alikokrtv/portal" target="_blank" class="btn">GitHub Repo</a>'
      }
    },
    '5': {
      tr: {
        title: 'Kişisel Portfolyo Sitesi',
        category: 'Web Geliştirme',
        content: `
          <div class="project-images">
            <img src="./assets/images/project-5.jpg" alt="Kişisel Portfolyo" class="project-img">
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
            <li>Gelişmiş dil değiştirme sistemi</li>
          </ul>
          
          <h4>Teknolojiler</h4>
          <ul>
            <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript</li>
            <li><strong>Framework:</strong> Vanilla JS</li>
            <li><strong>Tasarım:</strong> Custom CSS, Flexbox, Grid</li>
            <li><strong>İkonlar:</strong> Ionicons</li>
          </ul>
        `,
        // Link corrected to point to the actual portfolio repository rather than the vCard template
        links: '<a href="https://github.com/alikokrtv/portfolio" target="_blank" class="btn">GitHub Repo</a>'
      },
      en: {
        title: 'Personal Portfolio Website',
        category: 'Web Development',
        content: `
          <div class="project-images">
            <img src="./assets/images/project-5.jpg" alt="Personal Portfolio" class="project-img">
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
            <li>Advanced language switching system</li>
          </ul>
          
          <h4>Technologies</h4>
          <ul>
            <li><strong>Frontend:</strong> HTML5, CSS3, JavaScript</li>
            <li><strong>Framework:</strong> Vanilla JS</li>
            <li><strong>Design:</strong> Custom CSS, Flexbox, Grid</li>
            <li><strong>Icons:</strong> Ionicons</li>
          </ul>
        `,
        // Link corrected to point to the actual portfolio repository rather than the vCard template
        links: '<a href="https://github.com/alikokrtv/portfolio" target="_blank" class="btn">GitHub Repo</a>'
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
