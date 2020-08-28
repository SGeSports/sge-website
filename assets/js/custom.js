(function($) {

// prettyPhoto
	jQuery(document).ready(function(){
		jQuery('a[data-gal]').each(function() {
			jQuery(this).attr('rel', jQuery(this).data('gal'));
		});  	
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});
	}); 

	// var foo = $('#gallery');
	// foo.poptrox({
	// 	usePopupCaption: true
	// });

	$(function() {
		var $window = $(window),
			$body = $('body');

		// Poptrox.
		$window.on('load', function() {

			//var $thumbs = $('#gallery');
			var $thumbs = $('.portfolio');

			//$thumbs.poptrox();
			//if ($thumbs.length > 0)
			$thumbs.poptrox({
				onPopupClose: function() { $body.removeClass('is-covered'); },
				onPopupOpen: function() { $body.addClass('is-covered'); },
				baseZIndex: 10001,
				useBodyOverflow: false,
				overlayColor: '#222226',
				overlayOpacity: 0.75,
				popupLoaderText: '',
				fadeSpeed: 500,
				usePopupDefaultStyling: true,
				windowMargin: 5
			});

		});
	});

		
})(jQuery);