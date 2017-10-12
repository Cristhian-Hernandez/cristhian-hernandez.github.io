(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;var a='data-src'; if($('.js').hasAttr('src')) { a='src'; } $('.js').attr(a, (dpi>1) ? 'images/logo-400.png' : 'images/logo-200.png');
var a='data-src'; if($('.js-7').hasAttr('src')) { a='src'; } $('.js-7').attr(a, (dpi>1) ? 'images/bb4239c89c284350-1200.jpg' : 'images/bb4239c89c284350-600.jpg');};
if(!window.HTMLPictureElement){r();}
(function(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
$('.js').unveil(50);
$('.js-9 source').unveil(50);
$('.js-7').unveil(50);
$('.js-10 source').unveil(50);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js')[0], "1.00s", "0.50s", 1, 100);
wl.addAnimation($('.js-2')[0], "1.00s", "0.50s", 1, 100);
wl.addAnimation($('.js-3')[0], "1.00s", "0.50s", 1, 100);
wl.addAnimation($('.js-4')[0], "1.00s", "0.10s", 1, 100);
wl.addAnimation($('.js-5')[0], "1.00s", "0.30s", 1, 100);
wl.addAnimation($('.js-6')[0], "1.00s", "0.50s", 1, 100);
wl.addAnimation($('.js-7')[0], "1.00s", "0.20s", 1, 100);
wl.addAnimation($('.js-8')[0], "1.00s", "0.20s", 1, 100);
wl.start();

});