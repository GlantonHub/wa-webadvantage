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
        <div class="language_position">
          <dnn:LANGUAGE runat="server" id="dnnLANGUAGE"  showMenu="False" showLinks="True" />
        </div>
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
  <!--start page name-->
  <section class="page_name">
    <div class="skin_width pagename_style">
      <h1><%=PortalSettings.ActiveTab.TabName %></h1>
      <div class="breadcrumb_style">
        <dnn:BREADCRUMB runat="server" id="dnnBREADCRUMB" Separator="&nbsp;&nbsp;/&nbsp;&nbsp;" cssclass="Breadcrumb" RootLevel="0" />
      </div>
    </div>
  </section>
  <!--end page name-->
  <!--start main area-->
  <div class="skin_main">
    <section class="content_whitebg">
      <div class="skin_width">
        <div class="skin_content">
          <div class="row dnnpane">
            <div runat="server" id="ContentPane" class="i_content_grid12 col-sm-12"></div>
          </div>
          <div class="row dnnpane">
            <div runat="server" id="OneGrid4A" class="i_one_grid4a col-sm-4"></div>
            <div runat="server" id="OneGrid4B" class="i_one_grid4b col-sm-4"></div>
            <div runat="server" id="OneGrid4C" class="i_one_grid4c col-sm-4"></div>
          </div>
          <div class="row dnnpane">
            <div runat="server" id="TwoGrid3A" class="i_two_grid3a col-sm-3"></div>
            <div runat="server" id="TwoGrid3B" class="i_two_grid3b col-sm-3"></div>
            <div runat="server" id="TwoGrid3C" class="i_two_grid3c col-sm-3"></div>
            <div runat="server" id="TwoGrid3D" class="i_two_grid3d col-sm-3"></div>
          </div>
          <div class="row dnnpane">
            <div runat="server" id="ThreeGrid12" class="i_three_grid12 col-sm-12"></div>
          </div>
          <div class="row dnnpane">
            <div runat="server" id="FourGrid8" class="i_four_grid8 col-sm-8"></div>
            <div runat="server" id="FourGrid4" class="i_four_grid4 col-sm-4"></div>
          </div>
          <div class="row dnnpane">
            <div runat="server" id="FiveGrid4" class="i_five_grid4 col-sm-4"></div>
            <div runat="server" id="FiveGrid8" class="i_five_grid8 col-sm-8"></div>
          </div>
          <div class="row dnnpane">
            <div runat="server" id="SixGrid3A" class="i_six_grid6a col-sm-3"></div>
            <div runat="server" id="SixGrid3B" class="i_six_grid6b col-sm-3"></div>
            <div runat="server" id="SixGrid6C" class="i_six_grid6c col-sm-6"></div>
          </div>
          <div class="row dnnpane">
            <div runat="server" id="SevenGrid6A" class="i_seven_grid6a col-sm-6"></div>
            <div runat="server" id="SevenGrid6B" class="i_seven_grid6b col-sm-6"></div>
          </div>
          <div class="row dnnpane">
            <div runat="server" id="EightGrid9" class="i_eight_grid9 col-sm-9"></div>
            <div runat="server" id="EightGrid3" class="i_eight_grid3 col-sm-3"></div>
          </div>
          <div class="row dnnpane">
            <div runat="server" id="NineGrid3" class="i_nine_grid3 col-sm-3"></div>
            <div runat="server" id="NineGrid9" class="i_nine_grid9 col-sm-9"></div>
          </div>
          <div class="row dnnpane">
            <div runat="server" id="TenGrid3A" class="i_ten_grid3a col-sm-3"></div>
            <div runat="server" id="TenGrid3B" class="i_ten_grid3b col-sm-3"></div>
            <div runat="server" id="TenGrid3C" class="i_ten_grid3c col-sm-3"></div>
            <div runat="server" id="TenGrid3D" class="i_ten_grid3d col-sm-3"></div>
          </div>
          <div class="row dnnpane">
            <div runat="server" id="ElevenGrid12" class="i_eleven_grid12 col-sm-12"></div>
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
            <div runat="server" id="BottomGrid12A" class="BottomGrid12a col-sm-12"></div>
          </div>
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
