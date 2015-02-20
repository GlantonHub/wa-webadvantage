jQuery(document).ready(function ($) {

    function HoverOver() {
        $(this).addClass('rmhover') .find(".subMenu").stop().fadeIn('fast');
			// submenu right align
			var position	= $(this).offset();
			var x	= position.left;
			var width	= $(this).find(".subMenu").width();
			// position
			if( x + width > $(window).width() )
			{
				$(this).find(".subMenu").css({"right": 0, "left": "auto"});
			}
	}

    function HoverOut() {
         $(this).removeClass('rmhover').find(".subMenu").fadeOut('fast', function() {
		  $(this).hide(); 
	  });
    }
	
	function HoverOversub() {
        $(this).find(".level1").stop().fadeIn('fast');
     	// SubMenu right align
			var sublevel = $(".level1", $(this));
			if(sublevel.length > 0){
				var offset = sublevel.offset();
				var rightEage = offset.left + sublevel.outerWidth();
				if(rightEage > $(window).width()){
					sublevel.css("left", -180 + "px");
					sublevel.find(".level2").css("left", -180 + "px");
					sublevel.find(".level3").css("left", -180 + "px");
					sublevel.find(".subarrow").css("background", "none");
				}
			}
	}

    function HoverOutsub() {
         $(this).find(".level1").stop().fadeOut('fast', function() {
		  $(this).hide(); 
	  });
    }

	function HoverOversubsub() {
        $(this).find(".level2").stop().fadeIn('fast');
    }

    function HoverOutsubsub() {
         $(this).find(".level2").stop().fadeOut('fast', function() {
		  $(this).hide(); 
	  });
    }

	var config = {
        sensitivity: 2,
        interval:110,
        over: HoverOver,
        timeout:110,
        out: HoverOut
    };
    var configsub = {
        sensitivity: 2,
        interval:110,
        over: HoverOversub,
        timeout:110,
        out: HoverOutsub
    };
    var configsubsub = {
        sensitivity: 2,
        interval:110,
        over: HoverOversubsub,
        timeout:110,
        out: HoverOutsubsub
    };
	
    if ($(window).width() >= 768){
        $("#standardMenu .rootMenu > li.haschild").hoverIntent(config);
		$("#standardMenu .subMenu li.haschild").hoverIntent(configsub);
		$("#standardMenu .subMenu li li.haschild").hoverIntent(configsubsub);		
    }else if ($(window).width() <= 767){
		$("#standardMenu li.child-1 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#standardMenu li.child-1 .subMenu").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
		$("#standardMenu li.child-2 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#standardMenu li.child-2 .subMenu").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;
		});	
		$("#standardMenu li.child-3 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#standardMenu li.child-3 .subMenu").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;
		});	
		$("#standardMenu li.child-4 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#standardMenu li.child-4 .subMenu").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
		$("#standardMenu li.child-5 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#standardMenu li.child-5 .subMenu").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
		$("#standardMenu li.child-6 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#standardMenu li.child-6 .subMenu").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
		$("#standardMenu li.child-7 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#standardMenu li.child-7 .subMenu").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
		$("#standardMenu li.child-8 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#standardMenu li.child-8 .subMenu").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
		$("#standardMenu li.child-9 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#standardMenu li.child-9 .subMenu").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
		$("#standardMenu li.child-10 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#standardMenu li.child-10 .subMenu").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
		$("#standardMenu li.child-11 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#standardMenu li.child-11 .subMenu").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
		$("#standardMenu li.child-12 .navarrow").click(function(event) {
		  event.preventDefault();
		  $("#standardMenu li.child-12 .subMenu").slideToggle("fast");
		  $(this).toggleClass("navarrow2"); return false;	
		});	
	}
	
   // For Win8 Tablet
   $('#standardMenu .haschild li').attr("aria-haspopup","false");
   $('#standardMenu .haschild li').attr("role","menu");
   $('#standardMenu .haschild').attr("aria-haspopup","true");
   $('#standardMenu .haschild').attr("role","menuitem");

	//From Mobile Menu to Tablet/Computer
	$(window).resize(function() {
		if( $(window).width() >= 768 ) {
			$("#standardMenu .rootMenu > li.haschild").hoverIntent(config);
			$("#standardMenu .subMenu li.haschild").hoverIntent(configsub);
			$("#standardMenu .subMenu li li.haschild").hoverIntent(configsubsub);	
		}
	});
});