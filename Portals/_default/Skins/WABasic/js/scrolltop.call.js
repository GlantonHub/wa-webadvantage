//scroll top
jQuery.fn.topLink = function(settings) {
		settings = jQuery.extend({
			min: 1,
			fadeSpeed: 200,
			ieOffset: 50
		}, settings);
		return this.each(function() {
			var el = $(this);
			el.css('display','none'); 
			$(window).scroll(function() {
				if(!jQuery.support.hrefNormalized) {
					el.css({
						'position': 'absolute',
						'top': $(window).scrollTop() + $(window).height() - settings.ieOffset
					});
				}
				if($(window).scrollTop() >= settings.min)
				{
					el.fadeIn(settings.fadeSpeed);
				}
				else
				{
					el.fadeOut(settings.fadeSpeed);
				}
			});
		});
};
jQuery(document).ready(function() {
		$('#top-link').topLink({
			min: 300,
			fadeSpeed: 500
		});
		$('#top-link').click(function(e) {
			e.preventDefault();
			$.scrollTo(0,300);
		});
});