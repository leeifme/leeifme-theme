// $(document).ready(function () {
//   var sidebarTop = $('.header-inner').height() + 10;

//   $('#sidebar').css({ 'margin-top': 0 }).fadeIn();
// });

$(document).ready(function () {
  var $headerInner = $('.header-inner');
  var $sidebar = $('#sidebar');
  var getSidebarTop = function(){
    return $headerInner.height() + CONFIG.sidebar.offset;
  };
  var setSidebarMarginTop = function(sidebarTop){
    return $sidebar.css({ 'margin-top': 0 });
  };
  var mql = window.matchMedia('(min-width: 0px)');
  setSidebarMarginTop(getSidebarTop()).show();
  mql.addListener(function(e){
    if(e.matches){
      setSidebarMarginTop(getSidebarTop());
    }
  });
});

// ==UserScript==
// @name          美化字体和滚动条
// @version       963540817
// @description	  我是江小白，生活很简单
// @author        江小白
// @include       /[\s\S]*/
// @run-at        document-start
// @namespace https://greasyfork.org/users/19349
// ==/UserScript==
(function() {
	var css = ["br~br+br{display:block!important}:not([class*=ico]):not([class*=ui]):not([class*=font]):not([class*=logo]):not([class*=pre]):not([class*=next]):not([class*=close]):not(i):not(s){font-family:VideoJS,Georgia,Roboto,arial,'Microsoft YaHei','YouTube Noto';text-shadow:#222 0 0 0;font-weight:500;text-rendering:auto}::-webkit-scrollbar{width:10px;height:10px}::-webkit-scrollbar-track-piece{background-color:transparent;-webkit-border-radius:10px}::-webkit-scrollbar-thumb:vertical{height:10px;background-color:#3E3E3E;-webkit-border-radius:10px}::-webkit-scrollbar-thumb:horizontal{width:10px;background-color:#3E3E3E;-webkit-border-radius:10px}::-webkit-scrollbar{width:10px;height:10px}::-webkit-scrollbar-track-piece{background-color:transparent}::-webkit-scrollbar-track-piece:no-button::-webkit-scrollbar-thumb{background-color:transparent;border-radius:10px}::-webkit-scrollbar-thumb:hover{background-color:#4caf50}::-webkit-scrollbar-thumb:active{background-color:#4caf50}::-webkit-scrollbar-button:horizontal,::-webkit-scrollbar-button:vertical{width:10px}::-webkit-scrollbar-button:horizontal:end:increment,::-webkit-scrollbar-button:horizontal:start:decrement,::-webkit-scrollbar-button:vertical:end:increment,::-webkit-scrollbar-button:vertical:start:decrement{background-color:transparent}body::-webkit-scrollbar-track-piece{background-color:transparent}a:visited{color:!important;font-weight:700!important}a:hover{color:transparent;-webkit-transition-property:color;-webkit-transition-duration:0;font-weight:900}a:hover,a:hover *,a>font:hover,b>font:hover,button[type=submit]:hover *,label:hover{transition:color 623ms ease,text-shadow 623ms ease;color:#3E3E3E!important;text-shadow:-5px 3px 18px #3E3E3E!important}"].join("\n");
	if (typeof GM_addStyle != "undefined") {
		GM_addStyle(css);
	} else if (typeof PRO_addStyle != "undefined") {
		PRO_addStyle(css);
	} else if (typeof addStyle != "undefined") {
		addStyle(css);
	} else {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		var heads = document.getElementsByTagName("head");
		if (heads.length > 0) {
			heads[0].appendChild(node);
		} else {
			document.documentElement.appendChild(node);
		}
	}
})();
