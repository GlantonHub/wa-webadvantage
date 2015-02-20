/*
 * JS Settings For DotNetNuke Skin by bestdnnskins.com
 * Copyright 2014 By BESTDNNSKINS.COM
 */

//Window Phone Compatible:
(function() {
if ("-ms-user-select" in document.documentElement.style &&
(navigator.userAgent.match(/IEMobile/) ||
navigator.userAgent.match(/ZuneWP7/) ||
navigator.userAgent.match(/WPDesktop/))) {
var msViewportStyle = document.createElement("style");
msViewportStyle.appendChild(
document.createTextNode("@-ms-viewport{width:auto!important}")
);
document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
}
})();

//Retina:
jQuery(document).ready(function() {
	$('.retina').retinise();
});

//For Mobile Menu:
jQuery(document).ready(function(){
	  $(".menuclick").click(function(event) {
	    event.preventDefault();
	    $(".menu_box").slideToggle("fast");
			return false;
	  });
});

//For Fancy Lightbox:
jQuery(document).ready(function() {
	$(".fancybox").fancybox({
	    openEffect:'elastic',closeEffect:'fade',nextEffect:'fade', prevEffect:'fade'
	});
});

//For Layer Slider Banner:
jQuery(function(){
	$(document).ready(function(){
		$('#layerslider').layerSlider({
			skinsPath : '/Portals/_default/Skins/Unique-Gray/css/layerslider/skins/',
			skin : 'fullwidth',
			thumbnailNavigation : 'hover',
			navButtons: false,
			navStartStop: false
		});
	});
});	

//For Trans-banner Slider:
jQuery(document).ready(function($) {		
		$('.TB_Wrapper').TransBanner({
			slide_delaytime: 6,
			slide_transition: 2,
			navigation_type: 3,
			button_size: 26,
			caption_bg_color: '#000',
			caption_bg_opacity: .2,
			caption_bg_blur: 10,
			responsive : true,
			responsive_limit_autoplay : '', 
			responsive_limit_caption : 480,
			responsive_limit_navigation : 480,
			responsive_limit_navigation_type : 2, 
			responsive_screen_based_limits : true 
		});
});

//For Accordion Style:
jQuery(document).ready(function() { 
        $( ".accordion2" ).accordion({  
            collapsible: true,
			autoHeight: false
        });  
}); 

//For Flexslider Banner:
jQuery(window).load(function() {
	  $('.flexslider').flexslider({animation:"slide",slideshowSpeed: 6000, animationSpeed: 500, pauseOnHover: true, start: function(slider){} });
	  $('.flexslider2').flexslider({animation:"fade",slideshowSpeed: 6000, animationSpeed: 500, pauseOnHover: true, start: function(slider){} });
});

//For Menu Lavalamp:
jQuery(document).ready(function() {
	if ($(window).width() >= 768){								
	  $("#standardMenu ul.rootMenu").lavaLamp({fx: 'easeOutExpo', speed: 600});
	  $("#megaMenu ul.root").lavaLamp({fx: 'easeOutExpo', speed: 600});
	};
});

//For CarouFredSel 2 Items Style:
jQuery(document).ready(function() {
	$("#carouFredSel_2item").carouFredSel({
		responsive: true,
		width: "100%",
		prev: "#caroul_prev2",
		next: "#caroul_next2",
		mousewheel: true,
		swipe: {
			onMouse: true,
			onTouch: true
		},
		scroll: {
			'items': 1,
			'duration': 1000
		},
		items: {
			width:260,
			//	height: '30%',	//	optionally resize item-height
			visible: {
				min: 1,
				max: 2
			}
		}
	});
});

//For CarouFredSel 3 Items Style:
jQuery(document).ready(function() {
	$("#carouFredSel_3item").carouFredSel({
		responsive: true,
		width: "100%",
		prev: "#caroul_prev3",
		next: "#caroul_next3",
		mousewheel: true,
		swipe: {
			onMouse: true,
			onTouch: true
		},
		scroll: {
			'items': 1,
			'duration': 1000
		},
		items: {
			width:330,
            height:380,
			visible: {
				min: 1,
				max: 3
			}
		}
	});
});

//For CarouFredSel 4 Items Style:
jQuery(document).ready(function() {
	$("#carouFredSel_4item").carouFredSel({
		responsive: true,
		width: "100%",
		prev: "#caroul_prev4",
		next: "#caroul_next4",
		mousewheel: true,
		swipe: {
			onMouse: true,
			onTouch: true
		},
		scroll: {
			'items': 1,
			'duration': 1000
		},
		items: {
			width:250,
			//	height: '30%',	//	optionally resize item-height
			visible: {
				min: 1,
				max: 4
			}
		}
	});
});

//For CarouFredSel 5 Items Style:
jQuery(document).ready(function() {
	$("#carouFredSel_5item").carouFredSel({
		responsive: true,
		width: "100%",
		prev: "#caroul_prev5",
		next: "#caroul_next5",
		mousewheel: true,
		scroll: {
			'items': 1,
			'duration': 1000
		},
		items: {
			width:200,
			//	height: '30%',	//	optionally resize item-height
			visible: {
				min: 1,
				max: 5
			}
		}
	});
});

//For Search Style:	
jQuery(document).ready(function() {
    $(".search_button").click(function() {
        $("#Search").animate({width:'show'},200);
        $(this).next().show();
        $(this).hide()
    });
    $(".search_button_close").hide().click(function() {
        $("#Search").animate({width:'hide'},200);
        $(this).prev().show();
        $(this).hide()
    });
});

//For Shake Style:
jQuery(function(){
    $(".imgshake img").each(function(k,img){
	  new JumpObj(img,10);
     $(img).hover(function(){this.parentNode.parentNode.className="hover"});
    })
});

 //For Isotope Style:
jQuery(document).ready(function() {
			  
			  var $container = $('#container');
		
			  $container.isotope({
				itemSelector : '.element'
			  });
			  
			  var $optionSets = $('#options .option-set'),
				  $optionLinks = $optionSets.find('a');
		
			  $optionLinks.click(function(){
				var $this = $(this);
				// don't proceed if already selected
				if ( $this.hasClass('selected') ) {
				  return false;
				}
				var $optionSet = $this.parents('.option-set');
				$optionSet.find('.selected').removeClass('selected');
				$this.addClass('selected');
		  
				// make option object dynamically, i.e. { filter: '.my-filter-class' }
				var options = {},
					key = $optionSet.attr('data-option-key'),
					value = $this.attr('data-option-value');
				// parse 'false' as false boolean
				value = value === 'false' ? false : value;
				options[ key ] = value;
				if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
				  // changes in layout modes need extra logic
				  changeLayoutMode( $this, options )
				} else {
				  // otherwise, apply new options
				  $container.isotope( options );
				}
				
				return false;
			  });   
});

//For Unoslider Banner1:
jQuery(window).load(function(){
		$('#slider').unoslider({
		width:1600,
		height:440,
        tooltip: true,
        indicator: { autohide: false },
        navigation: { autohide: true },
        slideshow: { hoverPause: true, continuous: true, timer: true, speed: 9, infinite: true, autostart: true },
        responsive: true,
        responsiveLayers: false,
        preset: ['sq_flyoff', 'sq_drop', 'sq_squeeze', 'sq_random', 'sq_diagonal_rev', 'sq_diagonal', 'sq_fade_random', 'sq_fade_diagonal_rev', 'sq_fade_diagonal', 'explode', 'implode', 'fountain', 'shot_right', 'shot_left', 'zipper_right', 'zipper_left', 'bar_slide_random', 'bar_slide_bottomright', 'bar_slide_bottomright', 'bar_slide_topright', 'bar_slide_topleft'],
        order: 'random',
        block: {
            vertical: 10,
            horizontal: 4
        },
        animation: {
            speed: 500,
            delay: 50,
            transition: 'grow',
            variation: 'topleft',
            pattern: 'diagonal',
            direction: 'topleft'
        }
		});
}); 

//For Unoslider Banner2:
jQuery(window).load(function(){
		$('#slider2').unoslider({
		width: 840,
		height: 340,
        tooltip: true,
        indicator: { autohide: false },
        navigation: { autohide: true },
        slideshow: { hoverPause: true, continuous: true, timer: true, speed: 9, infinite: true, autostart: true },
        responsive: true,
        responsiveLayers: false,
        preset: ['sq_flyoff', 'sq_drop', 'sq_squeeze', 'sq_random', 'sq_diagonal_rev', 'sq_diagonal', 'sq_fade_random', 'sq_fade_diagonal_rev', 'sq_fade_diagonal', 'explode', 'implode', 'fountain', 'shot_right', 'shot_left', 'zipper_right', 'zipper_left', 'bar_slide_random', 'bar_slide_bottomright', 'bar_slide_bottomright', 'bar_slide_topright', 'bar_slide_topleft'],
        order: 'random',
        block: {
            vertical: 10,
            horizontal: 4
        },
        animation: {
            speed: 500,
            delay: 50,
            transition: 'grow',
            variation: 'topleft',
            pattern: 'diagonal',
            direction: 'topleft'
        }
		});
}); 

//For Unoslider Banner3:
jQuery(window).load(function(){
		$('#slider3').unoslider({
		width:600,
		height:400,
        tooltip: true,
        indicator: { autohide: false },
        navigation: { autohide: true },
        slideshow: { hoverPause: true, continuous: true, timer: true, speed: 9, infinite: true, autostart: true },
        responsive: true,
        responsiveLayers: false,
        preset: ['sq_flyoff', 'sq_drop', 'sq_squeeze', 'sq_random', 'sq_diagonal_rev', 'sq_diagonal', 'sq_fade_random', 'sq_fade_diagonal_rev', 'sq_fade_diagonal', 'explode', 'implode', 'fountain', 'shot_right', 'shot_left', 'zipper_right', 'zipper_left', 'bar_slide_random', 'bar_slide_bottomright', 'bar_slide_bottomright', 'bar_slide_topright', 'bar_slide_topleft'],
        order: 'random',
        block: {
            vertical: 10,
            horizontal: 4
        },
        animation: {
            speed: 500,
            delay: 50,
            transition: 'grow',
            variation: 'topleft',
            pattern: 'diagonal',
            direction: 'topleft'
        }
		});
}); 

/* Carousels Testimonials */							
jQuery(window).load(function(){
	 $('#cust_tab').carouFredSel({
		responsive: true,
		auto: false,
		pagination: {
			container: '#cust_list',
			event: 'click',
			anchorBuilder : false
		}
	 });
});

/*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/
;(function( $, window, document, undefined )
{
	$.fn.doubleTapToGo = function( params )
	{
		if( !( 'ontouchstart' in window ) &&
			!navigator.msMaxTouchPoints &&
			!navigator.userAgent.toLowerCase().match( /windows phone os 7/i ) ) return false;

		this.each( function()
		{
			var curItem = false;

			$( this ).on( 'click', function( e )
			{
				var item = $( this );
				if( item[ 0 ] != curItem[ 0 ] )
				{
					e.preventDefault();
					curItem = item;
				}
			});

			$( document ).on( 'click touchstart MSPointerDown', function( e )
			{
				var resetItem = true,
					parents	  = $( e.target ).parents();

				for( var i = 0; i < parents.length; i++ )
					if( parents[ i ] == curItem[ 0 ] )
						resetItem = false;

				if( resetItem )
					curItem = false;
			});
		});
		return this;
	};
})( jQuery, window, document );

/* For tablet double tap */	
jQuery(document).ready(function() {
	if ($(window).width() >= 768){
	   $( '#standardMenu .rootMenu li.haschild' ).doubleTapToGo();
	   $( '#megaMenu > .root > li.haschild' ).doubleTapToGo();
	 }
});