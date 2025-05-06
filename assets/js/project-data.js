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
        <p>DOF (Düzeltici Önleyici Faaliyet) takip sistemi için geliştirdiğim açık kaynak bir yönetim aracı. Bu projede React ve PHP kullanarak modern bir arayüz ve güçlü bir backend sağladım.</p>
        <p>SQLite veritabanı entegrasyonu ile yerel olarak çalışabilen, aynı zamanda bulut sistemlere de entegre edilebilen esnek bir yapıya sahip. Kullanıcı dostu arayüzü ve kapsamlı raporlama özellikleri ile öne çıkıyor.</p>
      `,
      links: '<a href="https://github.com/alikokrtv/dof-manager" target="_blank" class="btn">GitHub Repo</a>'
    },
    '2': {
      title: 'Plus Kitchen Intranet Portal',
      category: 'Kurumsal',
      content: `
        <p>Plus Kitchen için geliştirdiğim kurumsal intranet portalı, şirket içi iletişimi ve iş süreçlerini optimize etmek için tasarlandı. WordPress altyapısı üzerine kurulu bu sistem, özel form modülleri ve video eğitimler içeriyor.</p>
        <p>Kullanıcı giriş sistemi ve rol tabanlı yetkilendirme ile hassas bilgilere erişim kontrol altında tutuluyor. Mobil uygulama entegrasyonu sayesinde çalışanlar her yerden portala erişebiliyor.</p>
      `,
      links: '<a href="javascript:void(0);" class="btn">Demo İste</a>'
    },
    '3': {
      title: 'TaskFlow - BT İş Akışı Sistemi',
      category: 'Web Projeler',
      content: `
        <p>BT departmanı için geliştirdiğim görev yönetim sistemi, SQLite veritabanı kullanarak hafif ve hızlı bir çözüm sunuyor. Kategori bazlı iş takibi ve süreç yönetimi özellikleri ile iş akışını optimize ediyor.</p>
        <p>Bu projede kullanıcı arayüzü tasarımına özel önem verdim, böylece ekip üyeleri minimum eğitimle sistemi verimli şekilde kullanabiliyorlar. Raporlama ve analiz araçları yöneticilere değerli içgörüler sağlıyor.</p>
      `,
      links: '<a href="javascript:void(0);" class="btn">Detaylar</a>'
    },
    '4': {
      title: 'WordPress Özel Eklentileri',
      category: 'WordPress',
      content: `
        <p>ACF ve WPForms tabanlı geliştirdiğim özel WordPress eklentileri arasında şunlar bulunuyor:</p>
        <ul>
          <li>Giriş yapan kullanıcıya özel hoşgeldin mesajı</li>
          <li>Doğum günü kutlama sistemi</li>
          <li>Toplantı rezervasyon modülü</li>
          <li>REST API destekli booking eklentisi</li>
        </ul>
        <p>Bu eklentiler kurumsal müşterilerim için özel olarak geliştirildi ve iş süreçlerini otomatikleştirerek verimliliklerini artırdı.</p>
      `,
      links: '<a href="javascript:void(0);" class="btn">İnceleme</a>'
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
        <p>Web geliştirme yolculuğumda kullandığım teknolojiler ve öğrenme sürecim hakkında detaylı bir yazı. Front-end tarafında HTML, CSS ve JavaScript ile başlayan yolculuğum, zamanla React ve Vue.js gibi modern framework'lere doğru ilerledi.</p>
        <p>Ardından back-end tarafında PHP öğrenerek tam yığın (full-stack) geliştirici olma yolunda ilerledim. Bu süreçte karşılaştığım zorluklar ve bunları nasıl aştığım hakkında ipuçları bulabilirsiniz.</p>
      `
    },
    '2': {
      title: 'WordPress\'te Özel Eklenti Geliştirme',
      meta: '15 Nisan 2023 | WordPress',
      content: `
        <p>WordPress için özel eklenti geliştirme sürecimi anlattığım bu yazıda, ACF ve WPForms'un gücünden nasıl yararlandığımı okuyabilirsiniz. Kurumsal müşterilerim için geliştirdiğim özel rezervasyon ve form sistemleri, işlerini daha verimli hale getirdi.</p>
        <p>Yazıda ayrıca WordPress eklenti geliştirme için gerekli temel bilgiler ve en iyi uygulamalar da yer alıyor. Kendi eklentinizi geliştirmek istiyorsanız, bu rehber size yardımcı olabilir.</p>
      `
    },
    '3': {
      title: 'Açık Kaynak Projelere Katkıda Bulunmak',
      meta: '20 Mart 2023 | Açık Kaynak',
      content: `
        <p>Açık kaynak projelere katkıda bulunmanın hem kişisel gelişim hem de topluluk için ne kadar önemli olduğunu anlatan bu yazıda, GitHub üzerinden pull request göndererek başladığım yolculuğun kariyer gelişimimdeki etkilerini paylaşıyorum.</p>
        <p>Açık kaynak projeler, kodlama becerilerinizi geliştirmek, yeni insanlarla tanışmak ve sektördeki en iyi uygulamaları öğrenmek için mükemmel bir platformdur. Bu yazıda, başlangıç yapacaklar için ipuçları ve tavsiyeler de bulabilirsiniz.</p>
      `
    }
  };

  return blogData[blogId] || {
    title: 'Blog Yazısı',
    meta: 'Tarih | Kategori',
    content: '<p>Bu blog yazısının içeriği henüz eklenmemiş.</p>'
  };
}
