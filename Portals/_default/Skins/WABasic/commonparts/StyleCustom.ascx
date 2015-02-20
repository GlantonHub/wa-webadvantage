<%If IsUserAdmin() Then%>
<div id="custom_wrapper">
  <div class="custom_inner"> Color Scheme:<br />
    <div id="bg_color" style="background: #898989; margin: 5px 0 10px;"></div>
	<div> Skin Width:</div>
    <div class="optional_width clearafter">
      <div class="boxed_style"><a id="boxed_button" href="#">Boxed</a></div>
      <div class="stretched_style"><a id="stretched_button" href="#">Stretched</a></div>
    </div>
    <div id="bg_pattern" class="clearafter"> Background Pattern:<br />
		  <a data-pattern="bg_grid_01" class="pattern-box" href=""></a> 
		  <a data-pattern="bg_grid_02" class="pattern-box" href=""></a> 
		  <a data-pattern="bg_grid_03" class="pattern-box" href=""></a> 
		  <a data-pattern="bg_grid_04" class="pattern-box" href=""></a> 
		  <a data-pattern="bg_grid_05" class="pattern-box" href=""></a> 
		  <a data-pattern="bg_grid_06" class="pattern-box" href=""></a> 
		  <a data-pattern="bg_grid_07" class="pattern-box" href=""></a> 
		  <a data-pattern="bg_grid_08" class="pattern-box" href=""></a> 
		  <a data-pattern="bg_grid_09" class="pattern-box" href=""></a> 
		  <a data-pattern="bg_grid_10" class="pattern-box" href=""></a> 
		  <a data-pattern="bg_grid_11" class="pattern-box" href=""></a> 
		  <a data-pattern="bg_grid_12" class="pattern-box" href=""></a>
		  <a data-pattern="bg_grid_13" class="pattern-box" href=""></a>
		  <a data-pattern="bg_grid_14" class="pattern-box" href=""></a>
		  <a data-pattern="bg_grid_15" class="pattern-box" href=""></a>
		  <a data-pattern="bg_grid_16" class="pattern-box" href=""></a>
		  <a data-pattern="bg_grid_17" class="pattern-box" href=""></a> 
		  <a data-pattern="bg_grid_18" class="pattern-box" href=""></a> 
		  <a data-pattern="bg_grid_19" class="pattern-box" href=""></a>
		  <a data-pattern="bg_grid_20" class="pattern-box" href=""></a>
		  <a data-pattern="bg_grid_21" class="pattern-box2" href=""></a>
		  <a data-pattern="bg_grid_22" class="pattern-box2" href=""></a>
		  <a data-pattern="bg_grid_23" class="pattern-box2" href=""></a>
		  <a data-pattern="bg_grid_24" class="pattern-box2" href=""></a>
	</div>
	<div>Megamenu Columns:</div>
	<ul class="mega_option clearafter">
      <li><a id="one_columns" href="#">One</a></li>	
      <li><a id="two_columns" href="#">Two</a></li>
      <li><a id="three_columns" href="#">Three</a></li>
    </ul>
	<div class="search_option">
	  Search Option: <span><a id="search_close" href="#">Close</a></span>
	</div>
    <div class="clearafter">
      <div><a id="custom-reset" href="#">Reset</a></div>
      <div id="customcss"></div>
    </div>
  </div>
</div>
<div id="custom-button"> <img src="<%=TemplateSourceDirectory %>/images/custom-button.png" alt="" /> </div>
<% End If%>
