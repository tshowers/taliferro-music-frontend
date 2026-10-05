/* GA4 key events for music.taliferro.com: contact (mail, phone, /contact),
   app_store_click, and get_started (any link out to a product on *.taliferro.tech). */
( function () {
  document.addEventListener( 'click', function ( e ) {
    var a = e.target.closest && e.target.closest( 'a[href]' );
    if ( !a || typeof gtag !== 'function' ) return;
    var params = { link_url: a.href, link_text: ( a.textContent || '' ).trim().slice( 0, 80 ) };
    var name = null;
    if ( /(^|\.)apps\.apple\.com$/.test( a.hostname ) ) {
      name = 'app_store_click';
    } else if ( a.protocol === 'mailto:' || a.protocol === 'tel:' ) {
      name = 'contact'; params.method = a.protocol.slice( 0, -1 );
    } else if ( a.host === location.host && a.pathname.replace( /\.html$/, '' ) === '/contact' ) {
      name = 'contact'; params.method = 'page';
    } else if ( a.host !== location.host && /\.taliferro\.tech$/.test( a.hostname ) ) {
      name = 'get_started'; params.product = a.hostname.split( '.' )[0];
    }
    if ( name ) gtag( 'event', name, params );
  } );
} )();
