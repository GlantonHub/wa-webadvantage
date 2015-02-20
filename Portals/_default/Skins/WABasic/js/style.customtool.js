/*
Name: 			Style Custom Tool
Written by: 	Bestdnnskins.com - (http://www.bestdnnskins.com)
Version: 		1.0
*/

var customTool = {
	initialized: false,
	initialize: function() {
		var $this = this;
		if (this.initialized) return;
		this.initialized = true;		
		$this.build();
	},

	build: function() {
		var $this = this;
		var switcher = $("<a />")
			.addClass("getcss_btn")
			.attr("href", "#getCSSModal")
			.html("Get CSS")			
		$("#customcss").append(switcher);

		var modalHTML = '<div id="getCSSModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="cssModalLabel" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button><h4 id="cssModalLabel">Custom CSS</h4></div><div class="modal-body"><div class="alert alert-info fade in" id="noCustomInfo">There are no custom styles that can be found. Please customize styles at first.</div><div class="alert alert-info fade in" id="saveCustomInfo">If you would like to save the custom styles. Please copy the below codes, then go to Admin >> Site-Settings >> Stylesheet Editor tab, paste the codes in the box and save.</div><textarea id="getCSSText" class="get-css" readonly="readonly"></textarea></div><div class="modal-footer"><button class="btn" data-dismiss="modal" aria-hidden="true">Close</button></div></div></div></div>';
		$("body").append(modalHTML);
		
		$('head').append('<style id="customcolors" type="text/css"></style>');
		$('#custom-button').click(
			function () {
				if ($('#custom_wrapper').css('left') != '0px') {
					$('#custom_wrapper').animate({ "left": "0px" }, { duration: 300 });
					$(this).animate({ "left": "150px" }, { duration: 300 });
				}
				else {
					$('#custom_wrapper').animate({ "left": "-155px" }, { duration: 300 });
					$('#custom-button').animate({ "left": "0px" }, { duration: 300 });
				}
			}
		);
		
		// set custom color
		$('#bg_color').ColorPicker({
			onShow: function(colpkr) {
				$(colpkr).fadeIn("fast");
				return false
			},
			onHide: function(colpkr) {
				$(colpkr).fadeOut("fast");
				return false
			},
			onChange: function(hsb, hex, rgb) {
				var color = hex;
			    $('#bg_color').css({backgroundColor: '#' + color});
				$('style#customcolors').html('h1,h2,h3,h4,h5,h6{color:#' + color + ';}\nA:link,A:visited,A:active{color:#' + color + ';}\n.unique_skin .bg_color{background-color:#' + color + ';}\n.unique_skin .text_color{color:#' + color + ';}\n.unique_skin A.Breadcrumb:hover{color:#' + color + ';}\n.unique_skin A.User:hover{color:#' + color + ';}\n.unique_skin A.Login:hover{color:#' + color + ';}\n.unique_skin A.Footer:hover{color:#' + color + ';}\n\n.unique_skin .banner_style{background-color:#' + color + ';}\n.unique_skin .pagename_style h1:hover{color:#' + color + ';}\n.unique_skin #standardMenu li.lampback{border-top-color:#' + color + ';}\n.unique_skin #standardMenu li.lampback .lampleft .lampcenter{border-top-color:#' + color + ';}\n.unique_skin #standardMenu .rootMenu > li.selected > a span,.unique_skin #standardMenu .rootMenu > li.breadcrumb > a span,.unique_skin #standardMenu .rootMenu > li:hover > a span,.unique_skin #standardMenu .rootMenu > li > a:hover span{color:#' + color + ';}\n.unique_skin #standardMenu .subMenu{border-top-color:#' + color + ';}\n.unique_skin #standardMenu .subMenu li.selected > a span,.unique_skin #standardMenu .subMenu li.breadcrumb > a span,.unique_skin #standardMenu .subMenu li.item a:hover span{color:#' + color + ';}\n.unique_skin #megaMenu li.lampback{border-top-color:#' + color + ';}\n.unique_skin #megaMenu li.lampback .lampleft .lampcenter{border-top-color:#' + color + ';}\n.unique_skin #megaMenu .root > li.selected > a span,.unique_skin #megaMenu .root > li.breadcrumb > a span,.unique_skin #megaMenu .root > li:hover > a span,.unique_skin #megaMenu .root > li > a:hover span{color:#' + color + ';}\n.unique_skin #megaMenu .category{border-top-color:#' + color + ';}\n.unique_skin #megaMenu .category li.selected > a span,.unique_skin #megaMenu .category li.item a:hover span{color:#' + color + ';}\n.unique_skin #leftMenu .leftSub li.selected > a span,.unique_skin #leftMenu .leftSub li > a:hover span{color:#' + color + ';}\n\n.unique_skin #Login .registerGroup a:hover,.unique_skin #Login .loginGroup a:hover{color:#' + color + ';}\n.unique_skin a.caroul_prev2{background-color:#' + color + ';}\n.unique_skin a.caroul_next2{background-color:#' + color + ';}\n.unique_skin a.caroul_prev3{background-color:#' + color + ';}\n.unique_skin a.caroul_next3{background-color:#' + color + ';}\n.unique_skin a.caroul_prev4:hover{background-color:#' + color + ';}\n.unique_skin a.caroul_next4:hover{background-color:#' + color + ';}\n.unique_skin .footer_contact a:hover{color:#' + color + ';}\n.unique_skin .footer_contact .contact_submit a{background-color:#' + color + ';}\n.unique_skin .footer_tag a:hover{border-color:#' + color + ';color:#' + color + ';}\n.unique_skin .img_overlay{background-color:#' + color + ';}\n.unique_skin .rotate-info{background-color:#' + color + ';}\n.unique_skin .box_inner{border-left-color:#' + color + ';}\n.unique_skin .box_inner:before{border-left-color:#' + color + ';}\n.unique_skin .box_text a:hover{color:#' + color + ';}\n.unique_skin .box_button a{background-color:#' + color + ';}\n.unique_skin .main_top a:hover{color:#' + color + ';}\n.unique_skin .skin_design:hover h3{color:#' + color + ';}\n.unique_skin .ui-state-active,.unique_skin .ui-widget-content .ui-state-active,.unique_skin .ui-widget-header .ui-state-active{background-color:#' + color + ';}\n.unique_skin .skin_skills .progress .progress-bar{background-color:#' + color + ';}\n.unique_skin .our_skills .progress .progress-bar{background-color:#' + color + ';}\n.unique_skin .flip_back{background-color:#' + color + ';}\n.unique_skin .side_category a:hover{color:#' + color + ';}\n.unique_skin .side_numb{background-color:#' + color + ';}\n.unique_skin .side_tag a:hover{border-color:#' + color + ';color:#' + color + ';}\n.unique_skin .side_list a:hover{color:#' + color + ';}\n.unique_skin .page_404 a,.unique_skin .page_404 a:link,.unique_skin .page_404 a:active,.unique_skin .page_404 a:visited{background-color:#' + color + ';}\n.unique_skin .input_button a,.unique_skin .input_button a:link,.unique_skin .input_button a:active,.unique_skin .input_button a:visited{background-color:#' + color + ';}\n.unique_skin .testimonial_list{border-bottom-color:#' + color + ';}\n.unique_skin .testimonial_list:before{border-bottom-color:#' + color + ';}\n.unique_skin .sidebar_text{border-left-color:#' + color + ';}\n.unique_skin .price-table .head{background-color:#' + color + ';}\n.unique_skin .price_bottom:hover{background-color:#' + color + ';}\n.unique_skin .price_bottom_success{background-color:#' + color + ';}\n.unique_skin .pg-info{background-color:#' + color + ';}\n.unique_skin .pg-info4{background-color:#' + color + ';}\n.unique_skin .project_list a.read-more:hover{background-color:#' + color + ';}\n.unique_skin .page_number_style .pagination > .active > a,.unique_skin  .pagination > .active > span,.unique_skin  .pagination > .active > a:hover,.unique_skin  .pagination > .active > span:hover,.unique_skin  .pagination > .active > a:focus,.unique_skin  .pagination > .active > span:focus{border-color:#' + color + ';}\n.page_number_style .pagination > .active > a,.unique_skin  .pagination > .active > span,.unique_skin  .pagination > .active > a:hover,.unique_skin  .pagination > .active > span:hover,.unique_skin  .pagination > .active > a:focus,.unique_skin  .pagination > .active > span:focus{background-color:#' + color + ';}\n\n.unique_skin .threeColSocial .console-mouseon{background-color:#' + color + ';}\n.unique_skin .threeColSocial a.dnnPrimaryAction{background-color:#' + color + ';}\n.unique_skin .threeColSocial .selectDrop.active > a{background-color:#' + color + '}\n.unique_skin .threeColSocial .dnnButtonGroup > li > a.active{border-right-color:#' + color + ';background-color:#' + color + ';}\n.unique_skin .threeColSocial .dnnButtonGroup > li > a.disabled:hover{border-left-color:#' + color + ';background-color:#' + color + ';}\n.unique_skin .threeColSocial .alpha > a:hover{background-color:#' + color + ';border-right-color:#' + color + ';}\n.unique_skin .threeColSocial .alpha > a,.unique_skin .threeColSocial .alpha > a:hover,.unique_skin .threeColSocial .alpha > a.active{border-left-color:#' + color + ';}\n.unique_skin .threeColSocial a.dnnSecondaryAction.ArchiveItems:hover{background-color:#' + color + ';}\n.unique_skin .threeColSocial .dnnTertiaryAction:hover,.unique_skin a.dnnTertiaryAction:hover{background-color:#' + color + ';}\n\n.unique_skin #options ul li{background-color:#' + color + ';}\n.unique_skin .unoslider_timer{background-color:#' + color + ';}\n.unique_skin .unoslider_indicator a.unoslider_indicator_active{background-color:#' + color + ';}\n\n.unique_skin .c_title_DeepSkyBlue{color:#' + color + ';}\n.unique_skin .container_color_bg{background-color:#' + color + ';}\n.unique_skin .BlackTitle_style:hover .c_title_black{color:#' + color + ';}\n.unique_skin .BlackTitle02_style:hover .c_title_black{color:#' + color + ';}\n.unique_skin .BlackTitle03_style:hover .c_title_black{color:#' + color + ';}\n.unique_skin .BlackTitle03_style .c_title{border-bottom-color:#' + color + ';}\n.unique_skin .BlackTitle04_style:hover .c_title_black{color:#' + color + ';}\n.unique_skin .DeepSkyBlue02_top_bg{border-bottom-color:#' + color + ';}\n.unique_skin .DeepSkyBlue03_top_bg{background-color:#' + color + ';}\n.unique_skin .DeepSkyBlue04_top_bg{background-color:#' + color + ';}\n.unique_skin .DeepSkyBlue05_top_bg{background-color:#' + color + ';}\n.unique_skin .DeepSkyBlue06_top_bg{background-color:#' + color + ';}\n.unique_skin .DeepSkyBlue07_top_bg{background-color:#' + color + ';}\n.unique_skin .DeepSkyBlue07_top_bg{border-color:#' + color + ';}\n.unique_skin .DeepSkyBlue07_content{border-color:#' + color + ';}\n.unique_skin .DeepSkyBlue08_style:hover .c_title_black{color:#' + color + ';}\n.unique_skin .Footer01_style:hover .c_title_footer{color:#' + color + ';}\n\n@media handheld,only screen and (max-width:767px){\n.unique_skin .menuclick{background-color:#' + color + ';}\n.unique_skin #standardMenu .rootMenu > li.selected > a,.unique_skin #standardMenu .rootMenu > li.breadcrumb > a,.unique_skin #standardMenu .rootMenu > li:hover > a,.unique_skin #standardMenu .rootMenu > li > a:hover{background-color:#' + color + ';}\n.unique_skin #megaMenu .root > li.selected > a,.unique_skin #megaMenu .root > li.breadcrumb > a,.unique_skin #megaMenu .root > li:hover > a,.unique_skin #megaMenu .root > li > a:hover{background-color:#' + color + ';}\n}');									
				$.cookie("custom_color", color);
			},
			color: '#64A6A5'
		});
				
		var color = $.cookie("custom_color");
		if (color) {
		   $('#bg_color').css({backgroundColor: '#' + color});
		   $('style#customcolors').html('h1,h2,h3,h4,h5,h6{color:#' + color + ';}\nA:link,A:visited,A:active{color:#' + color + ';}\n.unique_skin .bg_color{background-color:#' + color + ';}\n.unique_skin .text_color{color:#' + color + ';}\n.unique_skin A.Breadcrumb:hover{color:#' + color + ';}\n.unique_skin A.User:hover{color:#' + color + ';}\n.unique_skin A.Login:hover{color:#' + color + ';}\n.unique_skin A.Footer:hover{color:#' + color + ';}\n\n.unique_skin .banner_style{background-color:#' + color + ';}\n.unique_skin .pagename_style h1:hover{color:#' + color + ';}\n.unique_skin #standardMenu li.lampback{border-top-color:#' + color + ';}\n.unique_skin #standardMenu li.lampback .lampleft .lampcenter{border-top-color:#' + color + ';}\n.unique_skin #standardMenu .rootMenu > li.selected > a span,.unique_skin #standardMenu .rootMenu > li.breadcrumb > a span,.unique_skin #standardMenu .rootMenu > li:hover > a span,.unique_skin #standardMenu .rootMenu > li > a:hover span{color:#' + color + ';}\n.unique_skin #standardMenu .subMenu{border-top-color:#' + color + ';}\n.unique_skin #standardMenu .subMenu li.selected > a span,.unique_skin #standardMenu .subMenu li.breadcrumb > a span,.unique_skin #standardMenu .subMenu li.item a:hover span{color:#' + color + ';}\n.unique_skin #megaMenu li.lampback{border-top-color:#' + color + ';}\n.unique_skin #megaMenu li.lampback .lampleft .lampcenter{border-top-color:#' + color + ';}\n.unique_skin #megaMenu .root > li.selected > a span,.unique_skin #megaMenu .root > li.breadcrumb > a span,.unique_skin #megaMenu .root > li:hover > a span,.unique_skin #megaMenu .root > li > a:hover span{color:#' + color + ';}\n.unique_skin #megaMenu .category{border-top-color:#' + color + ';}\n.unique_skin #megaMenu .category li.selected > a span,.unique_skin #megaMenu .category li.item a:hover span{color:#' + color + ';}\n.unique_skin #leftMenu .leftSub li.selected > a span,.unique_skin #leftMenu .leftSub li > a:hover span{color:#' + color + ';}\n\n.unique_skin #Login .registerGroup a:hover,.unique_skin #Login .loginGroup a:hover{color:#' + color + ';}\n.unique_skin a.caroul_prev2{background-color:#' + color + ';}\n.unique_skin a.caroul_next2{background-color:#' + color + ';}\n.unique_skin a.caroul_prev3{background-color:#' + color + ';}\n.unique_skin a.caroul_next3{background-color:#' + color + ';}\n.unique_skin a.caroul_prev4:hover{background-color:#' + color + ';}\n.unique_skin a.caroul_next4:hover{background-color:#' + color + ';}\n.unique_skin .footer_contact a:hover{color:#' + color + ';}\n.unique_skin .footer_contact .contact_submit a{background-color:#' + color + ';}\n.unique_skin .footer_tag a:hover{border-color:#' + color + ';color:#' + color + ';}\n.unique_skin .img_overlay{background-color:#' + color + ';}\n.unique_skin .rotate-info{background-color:#' + color + ';}\n.unique_skin .box_inner{border-left-color:#' + color + ';}\n.unique_skin .box_inner:before{border-left-color:#' + color + ';}\n.unique_skin .box_text a:hover{color:#' + color + ';}\n.unique_skin .box_button a{background-color:#' + color + ';}\n.unique_skin .main_top a:hover{color:#' + color + ';}\n.unique_skin .skin_design:hover h3{color:#' + color + ';}\n.unique_skin .ui-state-active,.unique_skin .ui-widget-content .ui-state-active,.unique_skin .ui-widget-header .ui-state-active{background-color:#' + color + ';}\n.unique_skin .skin_skills .progress .progress-bar{background-color:#' + color + ';}\n.unique_skin .our_skills .progress .progress-bar{background-color:#' + color + ';}\n.unique_skin .flip_back{background-color:#' + color + ';}\n.unique_skin .side_category a:hover{color:#' + color + ';}\n.unique_skin .side_numb{background-color:#' + color + ';}\n.unique_skin .side_tag a:hover{border-color:#' + color + ';color:#' + color + ';}\n.unique_skin .side_list a:hover{color:#' + color + ';}\n.unique_skin .page_404 a,.unique_skin .page_404 a:link,.unique_skin .page_404 a:active,.unique_skin .page_404 a:visited{background-color:#' + color + ';}\n.unique_skin .input_button a,.unique_skin .input_button a:link,.unique_skin .input_button a:active,.unique_skin .input_button a:visited{background-color:#' + color + ';}\n.unique_skin .testimonial_list{border-bottom-color:#' + color + ';}\n.unique_skin .testimonial_list:before{border-bottom-color:#' + color + ';}\n.unique_skin .sidebar_text{border-left-color:#' + color + ';}\n.unique_skin .price-table .head{background-color:#' + color + ';}\n.unique_skin .price_bottom:hover{background-color:#' + color + ';}\n.unique_skin .price_bottom_success{background-color:#' + color + ';}\n.unique_skin .pg-info{background-color:#' + color + ';}\n.unique_skin .pg-info4{background-color:#' + color + ';}\n.unique_skin .project_list a.read-more:hover{background-color:#' + color + ';}\n.unique_skin .page_number_style .pagination > .active > a,.unique_skin  .pagination > .active > span,.unique_skin  .pagination > .active > a:hover,.unique_skin  .pagination > .active > span:hover,.unique_skin  .pagination > .active > a:focus,.unique_skin  .pagination > .active > span:focus{border-color:#' + color + ';}\n.page_number_style .pagination > .active > a,.unique_skin  .pagination > .active > span,.unique_skin  .pagination > .active > a:hover,.unique_skin  .pagination > .active > span:hover,.unique_skin  .pagination > .active > a:focus,.unique_skin  .pagination > .active > span:focus{background-color:#' + color + ';}\n\n.unique_skin .threeColSocial .console-mouseon{background-color:#' + color + ';}\n.unique_skin .threeColSocial a.dnnPrimaryAction{background-color:#' + color + ';}\n.unique_skin .threeColSocial .selectDrop.active > a{background-color:#' + color + '}\n.unique_skin .threeColSocial .dnnButtonGroup > li > a.active{border-right-color:#' + color + ';background-color:#' + color + ';}\n.unique_skin .threeColSocial .dnnButtonGroup > li > a.disabled:hover{border-left-color:#' + color + ';background-color:#' + color + ';}\n.unique_skin .threeColSocial .alpha > a:hover{background-color:#' + color + ';border-right-color:#' + color + ';}\n.unique_skin .threeColSocial .alpha > a,.unique_skin .threeColSocial .alpha > a:hover,.unique_skin .threeColSocial .alpha > a.active{border-left-color:#' + color + ';}\n.unique_skin .threeColSocial a.dnnSecondaryAction.ArchiveItems:hover{background-color:#' + color + ';}\n.unique_skin .threeColSocial .dnnTertiaryAction:hover,.unique_skin a.dnnTertiaryAction:hover{background-color:#' + color + ';}\n\n.unique_skin #options ul li{background-color:#' + color + ';}\n.unique_skin .unoslider_timer{background-color:#' + color + ';}\n.unique_skin .unoslider_indicator a.unoslider_indicator_active{background-color:#' + color + ';}\n\n.unique_skin .c_title_DeepSkyBlue{color:#' + color + ';}\n.unique_skin .container_color_bg{background-color:#' + color + ';}\n.unique_skin .BlackTitle_style:hover .c_title_black{color:#' + color + ';}\n.unique_skin .BlackTitle02_style:hover .c_title_black{color:#' + color + ';}\n.unique_skin .BlackTitle03_style:hover .c_title_black{color:#' + color + ';}\n.unique_skin .BlackTitle03_style .c_title{border-bottom-color:#' + color + ';}\n.unique_skin .BlackTitle04_style:hover .c_title_black{color:#' + color + ';}\n.unique_skin .DeepSkyBlue02_top_bg{border-bottom-color:#' + color + ';}\n.unique_skin .DeepSkyBlue03_top_bg{background-color:#' + color + ';}\n.unique_skin .DeepSkyBlue04_top_bg{background-color:#' + color + ';}\n.unique_skin .DeepSkyBlue05_top_bg{background-color:#' + color + ';}\n.unique_skin .DeepSkyBlue06_top_bg{background-color:#' + color + ';}\n.unique_skin .DeepSkyBlue07_top_bg{background-color:#' + color + ';}\n.unique_skin .DeepSkyBlue07_top_bg{border-color:#' + color + ';}\n.unique_skin .DeepSkyBlue07_content{border-color:#' + color + ';}\n.unique_skin .DeepSkyBlue08_style:hover .c_title_black{color:#' + color + ';}\n.unique_skin .Footer01_style:hover .c_title_footer{color:#' + color + ';}\n\n@media handheld,only screen and (max-width:767px){\n.unique_skin .menuclick{background-color:#' + color + ';}\n.unique_skin #standardMenu .rootMenu > li.selected > a,.unique_skin #standardMenu .rootMenu > li.breadcrumb > a,.unique_skin #standardMenu .rootMenu > li:hover > a,.unique_skin #standardMenu .rootMenu > li > a:hover{background-color:#' + color + ';}\n.unique_skin #megaMenu .root > li.selected > a,.unique_skin #megaMenu .root > li.breadcrumb > a,.unique_skin #megaMenu .root > li:hover > a,.unique_skin #megaMenu .root > li > a:hover{background-color:#' + color + ';}\n}');	
		}
		
		// set pattern
		$('#bg_pattern a.pattern-box').each(function(i) {
			var a = $(this);
			var patternUrl = 'url(/Portals/_default/Skins/Unique-Gray/images/bg_pattern/' + a.attr('data-pattern') + '.png)';
			a.css({
				backgroundImage: patternUrl
			})
		});
		$('#bg_pattern a.pattern-box').click(function(e) {
			e.preventDefault();
			var patternUrl = 'url(/Portals/_default/Skins/Unique-Gray/images/bg_pattern/' + $(this).attr('data-pattern') + '.png)';
			$('#Body').css({
				backgroundImage: patternUrl,
				backgroundRepeat: "repeat"
			});
			$.cookie("custom_pattern", patternUrl)
		});
		$('#bg_pattern a.pattern-box2').each(function(i) {
			var a = $(this);
			var patternUrl = 'url(/Portals/_default/Skins/Unique-Gray/images/bg_pattern/' + a.attr('data-pattern') + '.jpg)';
			a.css({
				backgroundImage: patternUrl,
				backgroundSize: "auto 100%"
			})
		});
		$('#bg_pattern a.pattern-box2').click(function(e) {
			e.preventDefault();
			var patternUrl = 'url(/Portals/_default/Skins/Unique-Gray/images/bg_pattern/' + $(this).attr('data-pattern') + '.jpg)';
			$('#Body').css({
				backgroundImage: patternUrl,
				backgroundRepeat: "repeat"
			});
			$.cookie("custom_pattern", patternUrl)
		});
		var pattern = $.cookie("custom_pattern");
		if (pattern) {
			$('#Body').css({
				backgroundImage: pattern,
				backgroundRepeat: "repeat"
			})
		}
			
		// set layout styles
		$('#boxed_button').click(function (e) { 
			e.preventDefault();
			location.reload();
			var boxedWidth = "1140";
			setTimeout(function(){
		       $(".skin_wrapper").css("width","1140px");
		    },1000);
		  	$.cookie("boxed", boxedWidth);
			$.cookie("stretched", null);
		});
		var boxed = $.cookie("boxed");
		if (boxed) {
			$(".skin_wrapper").css({"width":"1140px"});	
		}
		$('#stretched_button').click(function (e) {
			e.preventDefault();
			location.reload();
			var stretchedWidth = "100%";
			setTimeout(function(){
		       $(".skin_wrapper").css("width","100%");
		    },1000);
			$.cookie("boxed", null);
			$.cookie("stretched", stretchedWidth);
		});
		var stretched =  $.cookie("stretched");
		if (stretched) {
			$(".skin_wrapper").css({"width":"100%"});
		}

		// mega columns
		$('#one_columns').click(function (e) {
			e.preventDefault();
			var megaOnecol = "197";
			$("#megaMenu .category").css("width","200px");
			$.cookie("twocolumn", null);
			$.cookie("threecolumn", null);
			$.cookie("onecolumn", megaOnecol);
		});
		var onecolumn =  $.cookie("onecolumn");
		if (onecolumn) {
			$("#megaMenu .category").css({"width":"200px"});
		}
		$('#two_columns').click(function (e) { 
			e.preventDefault();
			var megaTwocol = "380";
		    $("#megaMenu .category").css("width","380px");
		  	$.cookie("threecolumn", null);
			$.cookie("onecolumn", null);
			$.cookie("twocolumn", megaTwocol);
		});
		var twocolumn = $.cookie("twocolumn");
		if (twocolumn) {
			$("#megaMenu .category").css({"width":"380px"});	
		}
		$('#three_columns').click(function (e) {
			e.preventDefault();		
			var megaThreecol = "559";
			$("#megaMenu .category").css("width","560px");
			$.cookie("twocolumn", null);
			$.cookie("onecolumn", null);
			$.cookie("threecolumn", megaThreecol);
		});
		var threecolumn =  $.cookie("threecolumn");
		if (threecolumn) {
			$("#megaMenu .category").css({"width":"560px"});
		}
		
		// search close
		$('#search_close').click(function (e) {
			e.preventDefault();
			var searchOclose = "close";
			$(".search_style").css("display","none");
			$.cookie("searchclose", searchOclose);
		});
		var searchclose =  $.cookie("searchclose");
		if (searchclose) {
			$(".search_style").css({"display":"none"});
		}
		
		// reset
		$('#custom-reset').click(function(event) {
			event.preventDefault();
			$.cookie("custom_pattern", null);
			$.cookie("custom_color", null);
			$.cookie("boxed", null);
			$.cookie("stretched", null);
			$.cookie("onecolumn", null);
			$.cookie("twocolumn", null);
			$.cookie("threecolumn", null);
			$.cookie("searchclose", null);
			location.reload();
		});


		// Get CSS
		$("a.getcss_btn").click(function(e) {
			e.preventDefault();
			$this.getCss();
		});

	},

	getCss: function() {
		var customStyle = "";
		var customLayout = "";
		var customBg = "";
		var megacolumn = "";
		var searchoption = "";
		
		var boxed = $.cookie("boxed");
		if(boxed) {
			customLayout = '.unique_skin.skin_wrapper { width: 1140px; }\n\n';
		}

		var pattern = $.cookie("custom_pattern");
		if(pattern) {
			customBg = '#Body { background-image: ' + $.cookie("custom_pattern") + ';}\n\n';
		}
				
		var onecolumn =  $.cookie("onecolumn");
		if(onecolumn) {
			megacolumn = '.unique_skin #megaMenu .category { width: 200px;}\n\n';
		}
		
		var threecolumn =  $.cookie("threecolumn");
		if(threecolumn) {
			megacolumn = '.unique_skin #megaMenu .category { width: 560px;}\n\n';
		}		
		
		var searchclose =  $.cookie("searchclose");
		if(searchclose) {
			searchoption = '.unique_skin .search_style { display: none;}\n\n';
		}

		$("#getCSSText").text("");
		$("#getCSSText").text($("#customcolors").text());
		$("#getCSSModal").modal("show");

		customStyle = customBg + customLayout + megacolumn + searchoption + $("#getCSSText").text();
		$("#getCSSText").text(customStyle);
		
		if($("#getCSSText").text() == "" ) {
			$("#noCustomInfo").show();
			$("#saveCustomInfo").hide();
		} else {
			$("#noCustomInfo").hide();
			$("#saveCustomInfo").show();
		}
	}
};

customTool.initialize();
