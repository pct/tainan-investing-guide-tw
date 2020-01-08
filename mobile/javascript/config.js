	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	
bookConfig.loadingCaptionColor="#DDDDDD";
bookConfig.loadingBackground="#323232";
bookConfig.appLogoOpenWindow="Blank";
bookConfig.logoHeight="40";
bookConfig.logoPadding="0";
bookConfig.logoTop="0";
bookConfig.toolbarColor="#444444";
bookConfig.iconColor="#CCCCCC";
bookConfig.pageNumColor="#333333";
bookConfig.iconFontColor="#FFFFFF";
bookConfig.toolbarAlwaysShow="No";
bookConfig.formFontColor="#27181A";
bookConfig.formBackgroundColor="#27181A";
bookConfig.InstructionsButtonVisible="Show";
bookConfig.showInstructionOnStart="No";
bookConfig.showGotoButtonsAtFirst="No";
bookConfig.QRCode="Hide";
bookConfig.HomeButtonVisible="Hide";
bookConfig.HomeURL="%first page%";
bookConfig.aboutButtonVisible="Hide";
bookConfig.enablePageBack="Hide";
bookConfig.ShareButtonVisible="Show";
bookConfig.isInsertFrameLinkEnable="Show";
bookConfig.addCurrentPage="No";
bookConfig.EmailButtonVisible="Show";
bookConfig.btnShareWithEmailBody="\{link\}";
bookConfig.ThumbnailsButtonVisible="Show";
bookConfig.thumbnailColor="#333333";
bookConfig.thumbnailAlpha="70";
bookConfig.BookMarkButtonVisible="Hide";
bookConfig.TableOfContentButtonVisible="Show";
bookConfig.isHideTabelOfContentNodes="yes";
bookConfig.SearchButtonVisible="Show";
bookConfig.leastSearchChar="3";
bookConfig.searchFontColor="#FFFFFF";
bookConfig.searchKeywordFontColor="#FFB000";
bookConfig.searchHightlightColor="#FDC606";
bookConfig.SelectTextButtonVisible="Hide";
bookConfig.PrintButtonVisible="Hide";
bookConfig.BackgroundSoundButtonVisible="Show";
bookConfig.FlipSound="No";
bookConfig.BackgroundSoundLoop="-1";
bookConfig.AutoPlayButtonVisible="Show";
bookConfig.autoPlayAutoStart="No";
bookConfig.autoPlayDuration="3";
bookConfig.autoPlayLoopCount="1";
bookConfig.ZoomButtonVisible="Show";
bookConfig.maxZoomWidth="0";
bookConfig.defaultZoomWidth="0";
bookConfig.mouseWheelFlip="yes";
bookConfig.DownloadButtonVisible="Hide";
bookConfig.PhoneButtonVisible="Hide";
bookConfig.AnnotationButtonVisible="Hide";
bookConfig.FullscreenButtonVisible="Show";
bookConfig.WeChatShareButtonVisible="Hide";
bookConfig.bgBeginColor="#FFFFFF";
bookConfig.bgEndColor="#FFFFFF";
bookConfig.bgMRotation="90";
bookConfig.backgroundPosition="stretch";
bookConfig.backgroundOpacity="100";
bookConfig.backgroundScene="None";
bookConfig.LeftShadowWidth="100";
bookConfig.LeftShadowAlpha="1";
bookConfig.RightShadowWidth="40";
bookConfig.RightShadowAlpha="1";
bookConfig.ShowTopLeftShadow="Yes";
bookConfig.HardPageEnable="No";
bookConfig.hardCoverBorderWidth="8";
bookConfig.borderColor="#572F0D";
bookConfig.outerCoverBorder="Yes";
bookConfig.cornerRound="8";
bookConfig.leftMarginOnMobile="0";
bookConfig.topMarginOnMobile="0";
bookConfig.rightMarginOnMobile="0";
bookConfig.bottomMarginOnMobile="0";
bookConfig.pageBackgroundColor="#FFFFFF";
bookConfig.flipshortcutbutton="Show";
bookConfig.BindingType="side";
bookConfig.RightToLeft="No";
bookConfig.FlipDirection="0";
bookConfig.flippingTime="0.3";
bookConfig.retainBookCenter="Yes";
bookConfig.FlipStyle="Flip";
bookConfig.autoDoublePage="Yes";
bookConfig.isTheBookOpen="No";
bookConfig.thicknessWidthType="Thick";
bookConfig.thicknessColor="#FFFFFF";
bookConfig.SingleModeBanFlipToLastPage="No";
bookConfig.showThicknessOnMobile="No";
bookConfig.isSingleBookFullWindowOnMobile="no";
bookConfig.isStopMouseMenu="yes";
bookConfig.restorePageVisible="no";
bookConfig.topMargin="10";
bookConfig.bottomMargin="10";
bookConfig.leftMargin="10";
bookConfig.rightMargin="10";
bookConfig.hideMiniFullscreen="no";
bookConfig.maxWidthToSmallMode="400";
bookConfig.maxHeightToSmallMode="350";
bookConfig.leftRightPnlShowOption="None";
bookConfig.highDefinitionConversion="yes";
bookConfig.LargeLogoPosition="top-left";
bookConfig.LargeLogoTarget="Blank";
bookConfig.isFixLogoSize="No";
bookConfig.logoFixWidth="0";
bookConfig.logoFixHeight="0";
bookConfig.updateURLForPage="No";
bookConfig.LinkDownColor="#0000FF";
bookConfig.LinkAlpha="0.4";
bookConfig.OpenWindow="Blank";
bookConfig.showLinkHint="No";

bookConfig.macBookVersion = "HGVRjnGBSarsPNRYiiNPUVqoLBeVsuKHXYhrIAaYijGFfanlJNccksOPWWnqIPcXmpIMQbumMHUXhqBLXTsnHNRatuCBTenqGOdRmrNKfatpNAXcfd67353a_";
bookConfig.Html5Template = "Metro";
bookConfig.UIBaseURL="mobile/";
bookConfig.isFlipPdf=false;
bookConfig.searchTextJS="mobile/javascript/search_config.js";
bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";
bookConfig.totalPageCount=44;
bookConfig.largePageWidth=595;
bookConfig.largePageHeight=841;
bookConfig.bookTitle="Demo";
bookConfig.normalPath="./files/mobile/";
bookConfig.largePath="./files/mobile/";
bookConfig.productName="Flip PDF Professional";
bookConfig.MidBgColor="#e43937";
bookConfig.bookmarkCR = "756ca4d3b91219eb5d99d4003f84ec88d3c4d626";
;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};
bookConfig.thumbPath="./files/thumb/";
var language=[{"language" : "Chinese(Traditional)","btnFirstPage" : "\u7b2c\u4e00\u9801","btnNextPage" : "\u4e0b\u4e00\u9801","btnLastPage" : "\u6700\u5f8c\u4e00\u9801","btnPrePage" : "\u4e0a\u4e00\u9801","btnGoToHome" : "\u4e3b\u9801","btnDownload" : "\u4e0b\u8f09","btnSoundOn" : "\u6253\u958b\u8072\u97f3","btnSoundOff" : "\u95dc\u9589\u8072\u97f3","btnPrint" : "\u6253\u5370","btnThumb" : "\u7e2e\u7565\u5716","btnBookMark" : "\u66f8\u7c64","frmBookMark" : "\u66f8\u7c64","btnZoomIn" : "\u653e\u5927","btnZoomOut" : "\u7e2e\u5c0f","btnAutoFlip" : "\u81ea\u52d5\u7ffb\u9801","btnStopAutoFlip" : "\u505c\u6b62\u81ea\u52d5\u7ffb\u9801","btnSocialShare" : "\u5206\u4eab","btnHelp" : "\u5e6b\u52a9","btnAbout" : "\u95dc\u65bc","btnSearch" : "\u6aa2\u7d22","btnFullscreen" : "\u5168\u5c4f","btnExitFullscreen" : "\u9000\u51fa\u5168\u5c4f","btnMore" : "\u66f4\u591a","frmPrintCaption" : "\u6253\u5370","frmPrintall" : "\u6253\u5370\u6240\u6709\u9801\u9762","frmPrintcurrent" : "\u6253\u5370\u7576\u524d\u9801\u9762","frmPrintRange" : "\u6253\u5370\u9801\u9762\u7bc4\u570d","frmPrintexample" : "\u793a\u4f8b: 2,3,5-10","frmPrintbtn" : "\u6253\u5370","frmShareCaption" : "\u5206\u4eab","frmShareLabel" : "\u5206\u4eab","frmShareInfo" : "\u70b9\u51fb\u4e0b\u9762\u7684\u6309\u94ae\u60a8\u5c31\u53ef\u4ee5\u5c06\u8fd9\u4efd\u51fa\u7248\u7269\u5206\u4eab\u5230\u4e92\u8054\u7f51\u3002","frminsertLabel" : "\u63d2\u5165\u5230\u7db2\u7ad9","frminsertInfo" : "\u4f7f\u7528\u4e0b\u9762\u7684\u4ee3\u78bc\u5c07\u51fa\u7248\u7269\u5d4c\u5165\u60a8\u7684\u7db2\u7ad9\u3002","frmaboutcaption" : "\u806f\u7e6b","frmaboutcontactinformation" : "\u806f\u7e6b\u4fe1\u606f","frmaboutADDRESS" : "\u5730\u5740","frmaboutEMAIL" : "\u96fb\u5b50\u90f5\u4ef6","frmaboutWEBSITE" : "\u7db2\u7ad9","frmaboutMOBILE" : "\u624b\u6a5f","frmaboutAUTHOR" : "\u4f5c\u8005","frmaboutDESCRIPTION" : "\u63cf\u8ff0","frmSearch" : "\u8490\u7d22","frmToc" : "\u76ee\u9304","btnTableOfContent" : "\u76ee\u9304","btnNote" : "\u7b46\u8a18","lblLast" : "\u9019\u662f\u6700\u5f8c\u4e00\u9801\u3002","lblFirst" : "\u9019\u662f\u7b2c\u4e00\u9801\u3002","lblFullscreen" : "\u9ede\u64ca\u67e5\u770b\u5168\u5c4f","lblName" : "\u540d\u7a31","lblPassword" : "\u5bc6\u78bc","lblLogin" : "\u767b\u5165","lblCancel" : "\u53d6\u6d88","lblNoName" : "\u7528\u6236\u540d\u7a31\u4e0d\u80fd\u70ba\u7a7a\u3002","lblNoPassword" : "\u5bc6\u78bc\u4e0d\u80fd\u70ba\u7a7a\u3002","lblNoCorrectLogin" : "\u8acb\u8f38\u5165\u6b63\u78ba\u7684\u7528\u6236\u540d\u548c\u5bc6\u78bc\u3002","btnVideo" : "\u8996\u983b\u756b\u5eca","btnSlideShow" : "\u5e7b\u71c8\u7247\u653e\u6620","pnlSearchInputInvalid" : "\u8490\u7d22\u6587\u5b57\u592a\u77ed\u3002","btnDragToMove" : "\u6ed1\u9f20\u62d6\u52d5","btnPositionToMove" : "\u6ed1\u9f20\u79fb\u52d5","lblHelp1" : "\u62d6\u52d5\u66f8\u9801\u9801\u8173\u7ffb\u9801\u3002","lblHelp2" : "\u6309\u5169\u4e0b\u66f8\u9801\u653e\u5927\u3001\u7e2e\u5c0f\u3002","lblCopy" : "\u8907\u88fd","lblAddToPage" : "\u6dfb\u52a0\u5230\u9801\u9762","lblPage" : "\u9801","lblTitle" : "\u6a19\u984c","lblEdit" : "\u7de8\u8f2f","lblDelete" : "\u5220\u9664","lblRemoveAll" : "\u5220\u9664\u6240\u6709","tltCursor" : "\u5149\u6a19","tltAddHighlight" : "\u6dfb\u52a0\u9ad8\u4eae","tltAddTexts" : "\u6dfb\u52a0\u6587\u5b57","tltAddShapes" : "\u6dfb\u52a0\u5f62\u72c0","tltAddNotes" : "\u6dfb\u52a0\u6ce8\u91cb","tltAddImageFile" : "\u6dfb\u52a0\u5f71\u50cf\u6a94\u6848","tltAddSignature" : "\u6dfb\u52a0\u7c3d\u540d","tltAddLine" : "\u6dfb\u52a0\u76f4\u7dda","tltAddArrow" : "\u6dfb\u52a0\u7bad\u982d","tltAddRect" : "\u6dfb\u52a0\u77e9\u5f62","tltAddEllipse" : "\u6dfb\u52a0\u6a62\u5713","lblDoubleClickToZoomIn" : "\u96d9\u64ca\u9032\u884c\u653e\u5927\u3002","lblPages" : "\u9801\u9762","infCopyToClipboard" : "\u60a8\u7684\u700f\u89bd\u5668\u4e0d\u652f\u6301\u526a\u8cbc\u677f\uff0c\u8acb\u81ea\u5df1\u8907\u88fd\u3002","lblDescription" : "\u6a19\u984c","frmLinkLabel" : "\u93c8\u63a5","infNotSupportHtml5" : "\u60a8\u7684\u700f\u89bd\u5668\u4e0d\u652f\u6301HTML5\u3002","frmHowToUse" : "\u5982\u4f55\u4f7f\u7528","lblHelpPage1" : "\u79fb\u52d5\u624b\u6307\u7ffb\u52d5\u66f8\u9801\u3002","lblHelpPage2" : "\u4f7f\u7528\u624b\u52e2\u6216\u96d9\u64ca\u9801\u9762\u653e\u5927\u66f8\u9801\u3002","lblHelpPage3" : "\u9ede\u64ca\u67e5\u770b\u5167\u5bb9\u548c\u66f8\u7c64\u8868\uff0c\u4e26\u901a\u904e\u793e\u4ea4\u7db2\u7d61\u5206\u4eab\u60a8\u7684\u5716\u66f8\u3002","lblHelpPage4" : "\u6dfb\u52a0\u66f8\u7c64\uff0c\u4f7f\u7528\u641c\u7d22\u529f\u80fd\u548c\u81ea\u52d5\u7ffb\u8f49\u66f8\u3002","lblHelpPage5" : "\u6253\u958b\u7e2e\u7565\u5716\u53ef\u6982\u89bd\u6240\u6709\u66f8\u9801\u3002","frmQrcodeCaption" : "\u7528\u624b\u6a5f\u6383\u63cf\u5e95\u90e8\u7684\u4e8c\u7dad\u78bc\u3002"}];var pageEditor =[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.193254",y:"0.269201",width:"0.163736",height:"0.014396"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://economic.tainan.gov.tw"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.226852",y:"0.290189",width:"0.229201",height:"0.014396"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:investtainan@mail.tainan.gov.tw"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.438583",y:"0.225235",width:"0.135586",height:"0.012957"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:recruit@moea.gov.tw"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.424719",y:"0.244798",width:"0.149343",height:"0.012957"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://investtaiwan.nat.gov.tw"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.434803",y:"0.366773",width:"0.119288",height:"0.012957"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:dois@moea.gov.tw"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.424719",y:"0.405900",width:"0.145081",height:"0.012957"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.dois.moea.gov.tw"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.434803",y:"0.482656",width:"0.138958",height:"0.012957"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:serve@moeaic.gov.tw"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.424719",y:"0.521782",width:"0.125895",height:"0.012957"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.moeaic.gov.tw"}}],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.324543",y:"0.539706",width:"0.185904",height:"0.016687"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://economic.tainan.gov.tw"}}]]
var pages_information =[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];;
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}