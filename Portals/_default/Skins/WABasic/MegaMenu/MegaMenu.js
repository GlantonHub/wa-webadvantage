jQuery(document).ready(function ($) {

    function megaHoverOver() {
        $(this).addClass('rmhover') .find(".category").stop().fadeIn('fast');
			
			// megamenu right align
			var position	= $(this).offset();
			var x	= position.left;
			var width	= $(this).find(".category").width();
			// position
			if( x + width > $(window).width())
			{
				$(this).find(".category").css( {"left":"auto","right": 0} );
			}
    }

    function megaHoverOut() {
         $(this).removeClass('rmhover').find(".category").fadeOut('fast', function() {
		  $(this).hide(); 
	  });
    }

	var config = {
        sensitivity: 2,
        interval:110,
        over: megaHoverOver,
        timeout:110,
        out: megaHoverOut
    };
	
    if ($(window).width() >= 768)
    {
        $("#megaMenu .root > li.haschild").hoverIntent(config);
    }
	else if ($(window).width() <= 767)
	{
		$("#megaMenu li.child-1 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#megaMenu li.child-1 .category").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
		$("#megaMenu li.child-2 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#megaMenu li.child-2 .category").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;
		});	
		$("#megaMenu li.child-3 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#megaMenu li.child-3 .category").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;
		});	
		$("#megaMenu li.child-4 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#megaMenu li.child-4 .category").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
		$("#megaMenu li.child-5 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#megaMenu li.child-5 .category").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
		$("#megaMenu li.child-6 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#megaMenu li.child-6 .category").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
		$("#megaMenu li.child-7 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#megaMenu li.child-7 .category").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
		$("#megaMenu li.child-8 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#megaMenu li.child-8 .category").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
		$("#megaMenu li.child-9 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#megaMenu li.child-9 .category").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
		$("#megaMenu li.child-10 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#megaMenu li.child-10 .category").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
		$("#megaMenu li.child-11 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#megaMenu li.child-11 .category").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
		$("#megaMenu li.child-12 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#megaMenu li.child-12 .category").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
	}
	
   // For Win8 Tablet
   $('#megaMenu .root > .haschild li').attr("aria-haspopup","false");
   $('#megaMenu .root > .haschild li').attr("role","menu");
   $('#megaMenu .root > .haschild').attr("aria-haspopup","true");
   $('#megaMenu .root > .haschild').attr("role","menuitem");

	//From Mobile Menu to Tablet/Computer
	$(window).resize(function() {
		if( $(window).width() >= 768 ) {
			$("#megaMenu .root > li.haschild").hoverIntent(config);
		}
	});
});