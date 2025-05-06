/**
 * Proje içerikleri için veri dosyası
 * Bu dosyada portfolyo projeleri ve blog yazıları için içerikler bulunmaktadır
 */

// Proje içeriği için yardımcı fonksiyon
function getProjectContent(projectId) {
  const projectData = {
    '1': {
      title: 'DOF Manager',
      category: 'Açık Kaynak',
      content: `
        <div class="project-images">
          <img src="./assets/images/project-1.jpg" alt="DOF Manager" class="project-img">
          <img src="./assets/images/project-1-detail.jpg" alt="DOF Manager Detail" class="project-img">
        </div>
        <h4>Özet</h4>
        <p>DOF (Düzeltici Önleyici Faaliyet) takip sistemi için geliştirdiğim açık kaynak bir yönetim aracı. Bu projede React ve PHP kullanarak modern bir arayüz ve güçlü bir backend sağladım.</p>
        
        <h4>Teknik Özellikler</h4>
        <ul>
          <li><strong>Frontend:</strong> React, Material UI</li>
          <li><strong>Backend:</strong> PHP 8.1, Laravel</li>
          <li><strong>Database:</strong> SQLite / MySQL</li>
          <li><strong>API:</strong> REST</li>
        </ul>
        
        <h4>Avantajlar</h4>
        <p>SQLite veritabanı entegrasyonu ile yerel olarak çalışabilen, aynı zamanda bulut sistemlere de entegre edilebilen esnek bir yapıya sahip. Kullanıcı dostu arayüzü ve kapsamlı raporlama özellikleri ile öne çıkıyor.</p>
      `,
      links: '<a href="https://github.com/alikokrtv/dof-manager" target="_blank" class="btn">GitHub Repo</a><a href="javascript:void(0);" class="btn">Canlı Demo</a>'
    },
    '2': {
      title: 'Plus Kitchen Intranet Portal',
      category: 'Kurumsal',
      content: `
        <div class="project-images">
          <img src="./assets/images/project-2.jpg" alt="Plus Kitchen" class="project-img">
          <img src="./assets/images/project-2-detail.jpg" alt="Plus Kitchen Detail" class="project-img">
        </div>
        <h4>Proje Detayları</h4>
        <p>Plus Kitchen için geliştirdiğim kurumsal intranet portalı, şirket içi iletişimi ve iş süreçlerini optimize etmek için tasarlandı. WordPress altyapısı üzerine kurulu bu sistem, özel form modülleri ve video eğitimler içeriyor.</p>
        
        <h4>Temel Özellikler</h4>
        <ul>
          <li>Özel rol tabanlı kullanıcı yönetimi</li>
          <li>Departman bazında düküman yönetimi</li>
          <li>Eğitim videosu yükleme ve izleme sistemi</li>
          <li>Çalışan haber bülteni</li>
          <li>Doğum günü kutlama sistemi</li>
        </ul>
        
        <h4>Güvenlik</h4>
        <p>Kullanıcı giriş sistemi ve rol tabanlı yetkilendirme ile hassas bilgilere erişim kontrol altında tutuluyor. Mobil uygulama entegrasyonu sayesinde çalışanlar her yerden portala erişebiliyor.</p>
      `,
      links: '<a href="javascript:void(0);" class="btn">Demo İste</a><a href="javascript:void(0);" class="btn">Vaka Çalışması</a>'
    },
    '3': {
      title: 'TaskFlow - BT İş Akışı Sistemi',
      category: 'Web Projeler',
      content: `
        <div class="project-images">
          <img src="./assets/images/project-3.jpg" alt="TaskFlow" class="project-img">
          <img src="./assets/images/project-3-detail.jpg" alt="TaskFlow Detail" class="project-img">
        </div>
        <h4>Proje Tanımı</h4>
        <p>BT departmanı için geliştirdiğim görev yönetim sistemi, SQLite veritabanı kullanarak hafif ve hızlı bir çözüm sunuyor. Kategori bazlı iş takibi ve süreç yönetimi özellikleri ile iş akışını optimize ediyor.</p>
        
        <h4>Kullanıcı Deneyimi</h4>
        <p>Bu projede kullanıcı arayüzü tasarımına özel önem verdim, böylece ekip üyeleri minimum eğitimle sistemi verimli şekilde kullanabiliyorlar. Raporlama ve analiz araçları yöneticilere değerli içgörüler sağlıyor.</p>
        
        <h4>Teknik Altyapı</h4>
        <ul>
          <li><strong>Framework:</strong> Vue.js ve Express.js</li>
          <li><strong>Veritabanı:</strong> SQLite (yerel kullanım) / PostgreSQL (bulut)</li>
          <li><strong>Bildirim Sistemi:</strong> Email ve Push Notifications</li>
          <li><strong>Mobil Uyumluluk:</strong> Responsive tasarım ve PWA özellikleri</li>
        </ul>
      `,
      links: '<a href="javascript:void(0);" class="btn">Detaylar</a><a href="javascript:void(0);" class="btn">Teknik Doküman</a>'
    },
    '4': {
      title: 'WordPress Özel Eklentileri',
      category: 'WordPress',
      content: `
        <div class="project-images">
          <img src="./assets/images/project-4.jpg" alt="WordPress Eklentileri" class="project-img">
          <img src="./assets/images/project-4-detail.jpg" alt="WordPress Eklentileri Detay" class="project-img">
        </div>
        <h4>Geliştirilen Eklentiler</h4>
        <p>ACF ve WPForms tabanlı geliştirdiğim özel WordPress eklentileri arasında şunlar bulunuyor:</p>
        <ul>
          <li><strong>PersonalWelcome:</strong> Giriş yapan kullanıcıya özel hoşgeldin mesajı ve dashboard widgeti</li>
          <li><strong>BirthdayNotifier:</strong> Doğum günü kutlama sistemi ve otomatik email gönderimi</li>
          <li><strong>MeetingRoom:</strong> Toplantı odaları için rezervasyon modülü</li>
          <li><strong>RestBooking:</strong> REST API destekli, mobil uygulamalarla entegre çalışan booking eklentisi</li>
        </ul>
        
        <h4>Kullanılan Teknolojiler</h4>
        <ul>
          <li>WordPress Plugin API</li>
          <li>Advanced Custom Fields</li>
          <li>WPForms</li>
          <li>JavaScript / jQuery</li>
          <li>AJAX</li>
          <li>REST API</li>
        </ul>
        
        <p>Bu eklentiler kurumsal müşterilerim için özel olarak geliştirildi ve iş süreçlerini otomatikleştirerek verimliliklerini artırdı.</p>
      `,
      links: '<a href="javascript:void(0);" class="btn">İnceleme</a><a href="javascript:void(0);" class="btn">Dokümantasyon</a>'
    },
    '5': {
      title: 'E-Ticaret Çözümleri',
      category: 'E-Ticaret',
      content: `
        <div class="project-images">
          <img src="./assets/images/project-5.jpg" alt="E-Ticaret Çözümleri" class="project-img">
          <img src="./assets/images/project-5-detail.jpg" alt="E-Ticaret Detay" class="project-img">
        </div>
        <h4>Proje Açıklaması</h4>
        <p>Farklı sektörlerdeki müşterilerim için özelleştirilmiş e-ticaret çözümleri geliştiriyorum. WooCommerce ve PrestaShop altyapılarını kullanarak, müşterilerimin ihtiyaçlarına en uygun sistemleri kuruyorum.</p>
        
        <h4>Geliştirilen Özellikler</h4>
        <ul>
          <li>Özel ürün konfigüratörleri</li>
          <li>Toplu sipariş yönetimi</li>
          <li>Otomatik fiyat güncelleme sistemleri</li>
          <li>XML/API entegrasyonları</li>
          <li>Ödeme sistemleri entegrasyonu</li>
          <li>Kargo takip sistemleri</li>
        </ul>
        
        <h4>Müşteri Başarıları</h4>
        <p>Geliştirdiğim e-ticaret çözümleri sayesinde müşterilerim ortalama %40 satış artışı yaşadı. Özellikle mobil optimizasyonlar ve SEO çalışmaları sayesinde organik trafik %65 oranında arttı.</p>
      `,
      links: '<a href="javascript:void(0);" class="btn">Projeler</a><a href="javascript:void(0);" class="btn">Referanslar</a>'
    },
    '6': {
      title: 'Mobil Uygulamalar',
      category: 'Mobil',
      content: `
        <div class="project-images">
          <img src="./assets/images/project-6.jpg" alt="Mobil Uygulamalar" class="project-img">
          <img src="./assets/images/project-6-detail.jpg" alt="Mobil Uygulama Detay" class="project-img">
        </div>
        <h4>Mobil Geliştirme</h4>
        <p>Flutter ve React Native kullanarak cross-platform mobil uygulamalar geliştiriyorum. Bu teknolojiler sayesinde hem iOS hem de Android platformları için tek bir kod tabanından uygulama üretebiliyorum.</p>
        
        <h4>Geliştirilen Uygulamalar</h4>
        <ul>
          <li><strong>FitTracker:</strong> Kişisel fitness takip uygulaması</li>
          <li><strong>ShopGo:</strong> E-ticaret siteleri için mobil uygulama</li>
          <li><strong>LocalEvents:</strong> Yerel etkinlik keşif uygulaması</li>
          <li><strong>TaskMaster:</strong> Görev yönetim uygulaması</li>
        </ul>
        
        <h4>Teknik Özellikler</h4>
        <ul>
          <li>Offline çalışma yetenekleri</li>
          <li>Push bildirimler</li>
          <li>Konum tabanlı özellikler</li>
          <li>Sosyal medya entegrasyonları</li>
          <li>Analitik ölçümlemeler</li>
        </ul>
      `,
      links: '<a href="javascript:void(0);" class="btn">App Store</a><a href="javascript:void(0);" class="btn">Google Play</a>'
    }
  };

  return projectData[projectId] || {
    title: 'Proje',
    category: 'Kategori',
    content: '<p>Bu projenin içeriği henüz eklenmemiş.</p>',
    links: ''
  };
}

// Blog içeriği için yardımcı fonksiyon
function getBlogContent(blogId) {
  const blogData = {
    '1': {
      title: 'Web Geliştirme Yolculuğum',
      meta: '1 Mayıs 2023 | Web Geliştirme',
      content: `
        <div class="blog-image">
          <img src="./assets/images/blog-1.jpg" alt="Web Geliştirme" class="featured-img">
        </div>
        
        <h3>Başlangıç Yolculuğu</h3>
        <p>Web geliştirme yolculuğumda kullandığım teknolojiler ve öğrenme sürecim hakkında detaylı bir yazı. Front-end tarafında HTML, CSS ve JavaScript ile başlayan yolculuğum, zamanla React ve Vue.js gibi modern framework'lere doğru ilerledi.</p>
        
        <h3>Teknik Süreç</h3>
        <p>Öğrenme sürecimde izlediğim yol:</p>
        <ol>
          <li><strong>Temel Bilgiler:</strong> HTML5, CSS3, Vanilla JavaScript</li>
          <li><strong>CSS Framework'leri:</strong> Bootstrap, Tailwind CSS</li>
          <li><strong>JavaScript Framework'leri:</strong> React, Vue.js</li>
          <li><strong>Back-end Teknolojileri:</strong> PHP, Laravel, MySQL</li>
          <li><strong>API Entegrasyonları:</strong> REST, GraphQL</li>
        </ol>
        
        <h3>Zorluklar ve Çözümler</h3>
        <p>Ardından back-end tarafında PHP öğrenerek tam yığın (full-stack) geliştirici olma yolunda ilerledim. Bu süreçte karşılaştığım zorluklar ve bunları nasıl aştığım hakkında ipuçları bulabilirsiniz.</p>
        
        <blockquote>
          "Sürekli öğrenme ve kendinizi güncel tutma, web geliştiriciler için en önemli beceridir."
        </blockquote>
        
        <h3>Önerilen Kaynaklar</h3>
        <ul>
          <li>MDN Web Docs</li>
          <li>freeCodeCamp</li>
          <li>Frontend Masters</li>
          <li>CSS-Tricks</li>
        </ul>
      `
    },
    '2': {
      title: 'WordPress\'te Özel Eklenti Geliştirme',
      meta: '15 Nisan 2023 | WordPress',
      content: `
        <div class="blog-image">
          <img src="./assets/images/blog-2.jpg" alt="WordPress Eklenti Geliştirme" class="featured-img">
        </div>
        
        <h3>WordPress Eklenti Ekosistemi</h3>
        <p>WordPress için özel eklenti geliştirme sürecimi anlattığım bu yazıda, ACF ve WPForms'un gücünden nasıl yararlandığımı okuyabilirsiniz. Kurumsal müşterilerim için geliştirdiğim özel rezervasyon ve form sistemleri, işlerini daha verimli hale getirdi.</p>
        
        <h3>Geliştirdiğim Özel Eklentiler</h3>
        <ol>
          <li><strong>Rezervasyon Sistemi:</strong> Toplantı odaları ve kaynaklar için rezervasyon sistemi</li>
          <li><strong>Doküman Yöneticisi:</strong> Kullanıcı rollerine göre doküman erişimi sağlayan sistem</li>
          <li><strong>Etkinlik Takip Aracı:</strong> Şirket içi etkinliklerin yönetildiği bir eklenti</li>
        </ol>
        
        <div class="code-block">
          <pre><code>
// WordPress Eklenti Örnek Kod
function my_custom_plugin_init() {
    // Eklenti işlevleri burada başlar
    register_post_type('reservation', array(
        'labels' => array(
            'name' => 'Rezervasyonlar',
            'singular_name' => 'Rezervasyon'
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'custom-fields')
    ));
}
add_action('init', 'my_custom_plugin_init');
          </code></pre>
        </div>
        
        <p>Yazıda ayrıca WordPress eklenti geliştirme için gerekli temel bilgiler ve en iyi uygulamalar da yer alıyor. Kendi eklentinizi geliştirmek istiyorsanız, bu rehber size yardımcı olabilir.</p>
      `
    },
    '3': {
      title: 'Açık Kaynak Projelere Katkıda Bulunmak',
      meta: '20 Mart 2023 | Açık Kaynak',
      content: `
        <div class="blog-image">
          <img src="./assets/images/blog-3.jpg" alt="Açık Kaynak Projeler" class="featured-img">
        </div>
        
        <h3>Açık Kaynak Dünyasına Adım Atmak</h3>
        <p>Açık kaynak dünyasına adım atarken dikkat edilmesi gereken noktalar ve yeni başlayanlar için öneriler. GitHub üzerinden ilk katkınızı nasıl yapacağınız hakkında adım adım rehber içeriyor.</p>
        
        <h3>Katkıda Bulunma Süreci</h3>
        <ol>
          <li>Projeyi forklama ve klonlama</li>
          <li>Yerel bir branch oluşturma</li>
          <li>Değişiklikleri yapma ve commit etme</li>
          <li>Pull request oluşturma</li>
          <li>Geri bildirimler ve revizyonlar</li>
        </ol>
        
        <h3>Faydalar</h3>
        <p>Açık kaynak topluluklarına katılmak yalnızca kodlama becerilerinizi geliştirmekle kalmaz, aynı zamanda değerli bağlantılar kurmanıza ve kariyer fırsatlarını yakalamızna yardımcı olur.</p>
        
        <div class="info-box">
          <h4>Başlangıç İçin Önerilen Projeler</h4>
          <ul>
            <li>First Timers Only</li>
            <li>Good First Issues</li>
            <li>Up For Grabs</li>
            <li>24 Pull Requests</li>
          </ul>
        </div>
      `
    },
    '4': {
      title: 'Modern JavaScript Framework\'lerinin Karşılaştırması',
      meta: '10 Şubat 2023 | JavaScript',
      content: `
        <div class="blog-image">
          <img src="./assets/images/blog-4.jpg" alt="JavaScript Framework" class="featured-img">
        </div>
        
        <h3>Popler Framework'lerin Değerlendirilmesi</h3>
        <p>Günümüzde popüler olan React, Vue.js, Angular ve Svelte gibi JavaScript framework'lerinin detaylı bir karşılaştırması. Her birinin avantaj ve dezavantajlarını, kullanım senaryolarını ve performans değerlendirmelerini içeriyor.</p>
        
        <h3>Karşılaştırma Tablosu</h3>
        <table class="comparison-table">
          <tr>
            <th>Framework</th>
            <th>Öğrenme Eğrisi</th>
            <th>Topluluk Desteği</th>
            <th>Performans</th>
            <th>Ekosistem</th>
          </tr>
          <tr>
            <td>React</td>
            <td>Orta</td>
            <td>Mükemmel</td>
            <td>İyi</td>
            <td>Geniş</td>
          </tr>
          <tr>
            <td>Vue.js</td>
            <td>Düşük</td>
            <td>Çok İyi</td>
            <td>Çok İyi</td>
            <td>Büyüyen</td>
          </tr>
          <tr>
            <td>Angular</td>
            <td>Yüksek</td>
            <td>İyi</td>
            <td>İyi</td>
            <td>Kapsamlı</td>
          </tr>
          <tr>
            <td>Svelte</td>
            <td>Düşük</td>
            <td>Gelişmekte</td>
            <td>Mükemmel</td>
            <td>Büyüyen</td>
          </tr>
        </table>
        
        <h3>Proje Seçimi İçin Öneriler</h3>
        <p>Hangi projelerde hangi framework'leri kullanmanın daha avantajlı olacağına dair öneriler. Büyük kurumsal projeler, küçük iş projeleri, hızlı prototipler gibi farklı senaryolarda en iyi seçimler.</p>
      `
    },
    '5': {
      title: 'Mobil Uygulama Geliştirme: Native vs Cross-Platform',
      meta: '5 Ocak 2023 | Mobil Geliştirme',
      content: `
        <div class="blog-image">
          <img src="./assets/images/blog-5.jpg" alt="Mobil Geliştirme" class="featured-img">
        </div>
        
        <h3>Mobil Geliştirme Yaklaşımları</h3>
        <p>Native (Swift/Kotlin) ve cross-platform (Flutter/React Native) mobil uygulama geliştirme yaklaşımlarının detaylı karşılaştırması. Her iki yaklaşımın da güçlü yönleri ve sınırlamaları hakkında bilgi veriyorum.</p>
        
        <h3>Cross-Platform Güçleri</h3>
        <ul>
          <li>Tek kod tabanı ile birden fazla platforma ulaşım</li>
          <li>Daha hızlı geliştirme döngüleri</li>
          <li>Daha az bakım maliyeti</li>
          <li>Web geliştiriciler için daha düşük öğrenme eğrisi</li>
        </ul>
        
        <h3>Native Güçleri</h3>
        <ul>
          <li>Platform özelliklerine tam erişim</li>
          <li>Daha yüksek performans</li>
          <li>Daha iyi kullanıcı deneyimi</li>
          <li>Yeni özelliklere anında erişim</li>
        </ul>
        
        <div class="experience-block">
          <h4>Kişisel Deneyimim</h4>
          <p>5+ yıllık deneyimime göre, orta ve küçük ölçekli projeler için Flutter muhteşem bir seçim. Yüksek performans gerektiren veya platform-spesifik özellikler yoğun olan projeler için ise native geliştirme daha avantajlı oluyor.</p>
        </div>
      `
    }
  };

  return blogData[blogId] || {
    title: 'Blog Yazısı',
    meta: 'Tarih | Kategori',
    content: '<p>Bu blog yazısının içeriği henüz eklenmemiş.</p>'
  };
}
