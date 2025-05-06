/**
 * Sadece navigasyon sistemi için basit ve güvenilir kod
 * Bu dosya tamamen sayfa geçişlerini kontrol etmek için oluşturuldu
 */

$(document).ready(function() {
  console.log('Navigation system loaded');
  
  // Sayfa geçişi için temel jQuery kodu
  $('.navbar-link').on('click', function() {
    // Hangi butonun tıklandığını belirle
    const index = $(this).parent().index();
    console.log('Clicked nav item: ' + index);
    
    // Tüm sayfaları gizle
    $('article[data-page]').removeClass('active');
    
    // Tüm navigasyon butonlarını pasif hale getir
    $('.navbar-link').removeClass('active');
    
    // Tıklanan butonu aktif et
    $(this).addClass('active');
    
    // İndekse göre sayfaları göster
    // İndeks 0: About (Hakkımda)
    // İndeks 1: Resume (Özgeçmiş)
    // İndeks 2: Portfolio
    // İndeks 3: Blog
    // İndeks 4: Contact (İletişim)
    const pageElements = $('article[data-page]');
    
    if (index < pageElements.length) {
      // İlgili sayfayı göster
      $(pageElements[index]).addClass('active');
      console.log('Showing page: ' + index);
    } else {
      console.error('Page element not found for index: ' + index);
    }
  });
  
  console.log('Number of navigation items: ' + $('.navbar-link').length);
  console.log('Number of page sections: ' + $('article[data-page]').length);
});
