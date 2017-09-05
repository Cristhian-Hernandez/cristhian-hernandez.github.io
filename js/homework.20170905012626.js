(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js-11').hasAttr('src')) { a='src'; } $('.js-11').attr(a, (dpi>1) ? 'images/logo-400.png' : 'images/logo-200.png');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js-11').unveil(50);
$('.js-32 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-11')[0], "1.00s", "0.50s", 1, 100);
wl.addAnimation($('.js-12')[0], "1.00s", "0.50s", 1, 100);
wl.addAnimation($('.js-13')[0], "1.00s", "0.50s", 1, 100);
wl.addAnimation($('.js-14')[0], "1.00s", "0.10s", 1, 100);
wl.addAnimation($('.js-15')[0], "1.00s", "0.30s", 1, 100);
wl.addAnimation($('.js-16')[0], "1.00s", "0.50s", 1, 100);
wl.addAnimation($('.js-17')[0], "1.00s", "0.70s", 1, 100);
wl.addAnimation($('.js-18')[0], "1.00s", "0.50s", 1, 100);
wl.addAnimation($('.js-19')[0], "1.00s", "0.70s", 1, 100);
wl.addAnimation($('.js-20')[0], "1.00s", "0.50s", 1, 100);
wl.addAnimation($('.js-21')[0], "1.00s", "0.70s", 1, 100);
wl.addAnimation($('.js-22')[0], "1.00s", "0.50s", 1, 100);
wl.addAnimation($('.js-23')[0], "1.00s", "0.70s", 1, 100);
wl.addAnimation($('.js-24')[0], "1.00s", "0.50s", 1, 100);
wl.addAnimation($('.js-25')[0], "1.00s", "0.70s", 1, 100);
wl.addAnimation($('.js-26')[0], "1.00s", "0.50s", 1, 100);
wl.addAnimation($('.js-27')[0], "1.00s", "0.70s", 1, 100);
wl.addAnimation($('.js-28')[0], "1.00s", "0.50s", 1, 100);
wl.addAnimation($('.js-29')[0], "1.00s", "0.70s", 1, 100);
wl.addAnimation($('.js-30')[0], "1.00s", "0.50s", 1, 100);
wl.addAnimation($('.js-31')[0], "1.00s", "0.70s", 1, 100);
wl.start();

});