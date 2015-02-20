/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        //event.preventDefault();
        //$(location).attr('href', '#toto');
        event.stopPropagation();
    });
    // Ajout Mistral : Permets de quitter la modal au click exterieur
    $('.portfolio-modal').on('click', '.modal-content', function(event){
    	console.log($(this));
    	if($(this).hasClass('modal-content')) {
	    	$(this).closest('.portfolio-modal').modal('hide');
    	}
    });
    // Ajout Mistral : Evite le comportement ci-dessus lors d'un click interne
    $('.portfolio-modal').on('click', '.modal-body', function(event){
	    event.stopPropagation();
	});
	// Ajout Mistral : Patch les modals pour qu'elles affichent bien le href # dans l'url
    $('#Reforme').on('click', '.portfolio-link', function(event){
    	$($(this).attr('href')).modal('show');
	    event.stopPropagation();
	});
	// Ajout Mistral : Test si l'url contient un href qui correspond à une modal : auquel cas, l'affiche
	var hreftag = $(location).attr('href').replace(/^(.*)#(.*)/i, '$2');
    $('.portfolio-modal[id="'+hreftag+'"]').modal('show');
	$('#Reforme .portfolio-link[href="#Reforme-DRM"]');
    // Ajout Mistral : Patch la navbar qui n'applique pas le bon style au chargement
	var patchScrollNavbar = function() {
		var y = window.pageYOffset || docElem.scrollTop;
		if ( y >= 300 ) {
			classie.add( document.querySelector( '.navbar-default' ), 'navbar-shrink' );
		}
	};
	patchScrollNavbar();
	//setTimeout( cbpAnimatedHeader.scrollPage, 2250 );
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
