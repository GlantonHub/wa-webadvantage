<%@ Control language="vb" CodeBehind="~/admin/Skins/skin.vb" AutoEventWireup="false" Explicit="True" Inherits="DotNetNuke.UI.Skins.Skin" %>
<%@ Register TagPrefix="dnn" TagName="CURRENTDATE" Src="~/Admin/Skins/CurrentDate.ascx" %>
<%@ Register TagPrefix="dnn" TagName="STYLES" Src="~/Admin/Skins/Styles.ascx" %>
<%@ Register TagPrefix="dnn" TagName="Meta" Src="~/Admin/Skins/Meta.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LANGUAGE" Src="~/Admin/Skins/Language.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LOGO" Src="~/Admin/Skins/Logo.ascx" %>
<%@ Register TagPrefix="dnn" TagName="MENU" src="~/DesktopModules/DDRMenu/Menu.ascx" %>
<%@ Register TagPrefix="dnn" TagName="SEARCH" Src="~/Admin/Skins/Search.ascx" %>
<%@ Register TagPrefix="dnn" TagName="USER" Src="~/Admin/Skins/User.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LOGIN" Src="~/Admin/Skins/Login.ascx" %>
<%@ Register TagPrefix="dnn" TagName="COPYRIGHT" Src="~/Admin/Skins/Copyright.ascx" %>
<%@ Register TagPrefix="dnn" TagName="PRIVACY" Src="~/Admin/Skins/Privacy.ascx" %>
<%@ Register TagPrefix="dnn" TagName="TERMS" Src="~/Admin/Skins/Terms.ascx" %>
<%@ Register TagPrefix="dnn" TagName="BREADCRUMB" Src="~/Admin/Skins/BreadCrumb.ascx" %>
<%@ Register TagPrefix="dnn" TagName="LINKS" Src="~/Admin/Skins/Links.ascx" %>
<%@ Register TagPrefix="dnn" TagName="CONTROLPANEL" Src="~/Admin/Skins/controlpanel.ascx" %>
<%@ Register TagPrefix="dnn" Namespace="DotNetNuke.Web.Client.ClientResourceManagement" Assembly="DotNetNuke.Web.Client" %>
<%@ Register TagPrefix="dnn" TagName="jQuery" src="~/Admin/Skins/jQuery.ascx" %>
<!--[if lt IE 9]>
<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

<dnn:jQuery runat="server" jQueryUI="true" DnnjQueryPlugins="true" jQueryHoverIntent="true"></dnn:jQuery>
<dnn:STYLES runat="server" ID="StylesIE8" Name="IE8Minus" StyleSheet="css/ie8style.css" Condition="IE 8" UseSkinPath="true" />
<dnn:Meta runat="server" Name="viewport" Content="width=device-width, minimum-scale=1.0, maximum-scale=2.0" />
<div id="ControlPanelWrapper">
  <dnn:CONTROLPANEL runat="server" id="cp" IsDockable="True" />
</div>
<div class="skin_wrapper unique_skin">
  <!--start skin top-->
  <section class="skin_top">
    <div class="skin_width clearafter">
      <!--start user bar-->
      <div class="user_bar clearafter">
        <div class="search_style"> <a class="search_button" title="Open Search"><span></span></a> <a class="search_button_close" title="Close Search"><span></span></a> </div>
        <div id="Search">
          <div class="search_position">
            <dnn:SEARCH runat="server" id="dnnSEARCH" cssClass="searchcss" showWeb="false" showSite="false" UseDropdownlist="false" />
          </div>
        </div>
        <div class="language_position">
          <dnn:LANGUAGE runat="server" id="dnnLANGUAGE"  showMenu="False" showLinks="True" />
        </div>
        <%If not Request.IsAuthenticated Then%>
        <div class="user_style">
          <dnn:USER runat="server" id="dnnUSER" cssclass="User" />
          <dnn:LOGIN runat="server" id="dnnLOGIN" cssclass="Login" />
        </div>
        <% End If%>
        <%If Request.IsAuthenticated Then%>
        <div id="Login">
          <dnn:USER runat="server" id="dnnUSER2" LegacyMode="false" />
          <dnn:LOGIN runat="server" id="dnnLOGIN2" LegacyMode="false" />
        </div>
        <% End If%>
      </div>
      <!--end user bar-->
      <div class="headerpane_style">
        <div runat="server" id="HeaderPane" class="headerpane"></div>
      </div>
    </div>
  </section>
  <!--end skin top-->
  <!--start skin header-->
  <section class="header_bg">
    <header id="skin_header">
      <div class="skin_width">
        <div class="skin_header_style clearafter">
          <div class="logo_style">
            <!--site logo-->
            <div class="site_logo">
              <dnn:LOGO runat="server" id="dnnLOGO" />
            </div>
            <!--mobile menu button-->
            <div class="mobile_nav"><a href="#" class="menuclick"><img alt="Menu" class="click_img" src="<%=SkinPath %>images/blank.gif" /></a></div>
          </div>
          <!--start skin menu-->
          <nav class="menu_box">
            <dnn:MENU MenuStyle="MegaMenu" runat="server"> </dnn:MENU>
          </nav>
          <!--end skin menu-->
        </div>
      </div>
    </header>
  </section>
  <!--end skin header-->
  <!--start skin banner-->
  <section class="banner_style">
    <div class="bannerpane" id="BannerPane" runat="server"></div>
  </section>
  <!--end skin banner-->
  <!--start main area-->
  <div class="skin_main">
    <section class="content_whitebg">
      <div class="skin_width">
        <div class="skin_content">
          <div class="row dnnpane">
            <div runat="server" id="ContentPane" class="content_grid12 col-sm-12"></div>
          </div>
          <div class="row dnnpane">
            <div runat="server" id="OneGrid4A" class="one_grid4a col-sm-4"></div>
            <div runat="server" id="OneGrid4B" class="one_grid4b col-sm-4"></div>
            <div runat="server" id="OneGrid4C" class="one_grid4c col-sm-4"></div>
          </div>
          <div class="row dnnpane">
            <div runat="server" id="TwoGrid3A" class="two_grid3a col-sm-3"></div>
            <div runat="server" id="TwoGrid3B" class="two_grid3b col-sm-3"></div>
            <div runat="server" id="TwoGrid3C" class="two_grid3c col-sm-3"></div>
            <div runat="server" id="TwoGrid3D" class="two_grid3d col-sm-3"></div>
          </div>
          <div class="row dnnpane">
            <div runat="server" id="ThreeGrid12" class="three_grid12 col-sm-12"></div>
          </div>
          <div class="row dnnpane">
            <div runat="server" id="FourGrid8" class="four_grid8 col-sm-8"></div>
            <div runat="server" id="FourGrid4" class="four_grid4 col-sm-4"></div>
          </div>
          <div class="row dnnpane">
            <div runat="server" id="FiveGrid4" class="five_grid4 col-sm-4"></div>
            <div runat="server" id="FiveGrid8" class="five_grid8 col-sm-8"></div>
          </div>
          <div class="row dnnpane">
            <div runat="server" id="SixGrid6A" class="six_grid6a col-sm-6"></div>
            <div runat="server" id="SixGrid6B" class="six_grid6b col-sm-6"></div>
          </div>
          <div class="row dnnpane">
            <div runat="server" id="SevenGrid9" class="seven_grid9 col-sm-9"></div>
            <div runat="server" id="SevenGrid3" class="seven_grid3 col-sm-3"></div>
          </div>
          <div class="row dnnpane">
            <div runat="server" id="EightGrid3" class="eight_grid3 col-sm-3"></div>
            <div runat="server" id="EightGrid9" class="eight_grid9 col-sm-9"></div>
          </div>
          <div class="row dnnpane">
            <div runat="server" id="NineGrid3A" class="nine_grid3a col-sm-3"></div>
            <div runat="server" id="NineGrid3B" class="nine_grid3b col-sm-3"></div>
            <div runat="server" id="NineGrid3C" class="nine_grid3c col-sm-3"></div>
            <div runat="server" id="NineGrid3D" class="nine_grid3d col-sm-3"></div>
          </div>
          <div class="row dnnpane">
            <div runat="server" id="TenGrid12" class="ten_grid12 col-sm-12"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="fixed_bg">
      <div class="skin_width">
        <div class="skin_main_padding">
          <div class="row dnnpane">
            <div runat="server" id="FixedBG4A" class="fixedbg4a col-sm-4"></div>
            <div runat="server" id="FixedBG4B" class="fixedbg4b col-sm-4"></div>
            <div runat="server" id="FixedBG4C" class="fixedbg4c col-sm-4"></div>
          </div>
          <div class="row dnnpane">
            <div runat="server" id="FixedBG12" class="fixedbg12 col-sm-12"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="content_graybg">
      <div class="skin_width">
        <div class="skin_main_padding">
          <div class="row dnnpane">
            <div runat="server" id="GrayGrid4A" class="graygrid4a col-sm-4"></div>
            <div runat="server" id="GrayGrid4B" class="graygrid4b col-sm-4"></div>
            <div runat="server" id="GrayGrid4C" class="graygrid4c col-sm-4"></div>
          </div>
          <div class="row dnnpane">
            <div runat="server" id="GrayGrid12" class="graygrid12 col-sm-12"></div>
          </div>
        </div>
      </div>
    </section>
    <section class="content_whitebg">
      <div class="skin_width">
        <div class="skin_main_padding">
          <div class="row dnnpane">
            <div runat="server" id="BottomGrid6A" class="BottomGrid6a col-sm-6"></div>
            <div runat="server" id="BottomGrid3B" class="BottomGrid3b col-sm-3"></div>
            <div runat="server" id="BottomGrid3C" class="BottomGrid3c col-sm-3"></div>
          </div>
          <div class="row dnnpane">
            <div runat="server" id="BottomGrid12B" class="BottomGrid12b col-sm-12"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!--end main area-->
  <!--start footer top-->
  <section class="footer_top">
    <div class="skin_width">
      <div class="footerpane_style">
        <div class="row dnnpane">
          <div runat="server" id="FooterGrid3A" class="footer_grid3a col-sm-3"></div>
          <div runat="server" id="FooterGrid3B" class="footer_grid3b col-sm-3"></div>
          <div runat="server" id="FooterGrid3C" class="footer_grid3c col-sm-3"></div>
          <div runat="server" id="FooterGrid3D" class="footer_grid3d col-sm-3"></div>
        </div>
        <div class="row dnnpane">
          <div runat="server" id="FooterPane" class="footerpane col-sm-12"></div>
        </div>
      </div>
    </div>
  </section>
  <!--end footer top-->
  <!--start footer-->
  <footer class="copyright_bg">
    <div class="skin_width">
      <div class="copyright_bar clearafter">
        <div class="footer_left">
          <dnn:COPYRIGHT runat="server" id="dnnCOPYRIGHT" cssclass="Footer" />
        </div>
        <div class="footer_right">
          <dnn:PRIVACY runat="server" id="dnnPRIVACY" cssclass="Footer" />
          |
          <dnn:TERMS runat="server" id="dnnTERMS" cssclass="Footer" />
        </div>
      </div>
    </div>
  </footer>
  <!--end footer-->
  <a href="#top" id="top-link" title="Top"> </a> </div>
<!--#include file="commonparts/StyleCustom.ascx"-->
<!--#include file="commonparts/AddScripts.ascx"-->
