//author:王子饼干

//svg常量

const playsvg='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>';
const pausesvg='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>';
const volumedownsvg='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>';
const volumeoffsvg='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>';
const volumeupsvg='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>';
const fullsvg='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>';
const fullwebsvg='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>';
const commentsvg='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>';
const settingsvg='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></svg>';

//storejs   用于存储用户的个性参数

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.store=e()}(this,function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=window.localStorage,i=function(){};function f(t){return"object"===(void 0===t?"undefined":e(t))&&"[object object]"===Object.prototype.toString.call(t).toLowerCase()&&!t.length}function u(t){return"[object Function]"==={}.toString.call(t)}function c(){if(!(this instanceof c))return new c}o=function(e){var t="_Is_Incognit";try{e.setItem(t,"yes")}catch(t){if("QuotaExceededError"===t.name){var n=function(){};e.__proto__={setItem:n,getItem:n,removeItem:n,clear:n}}}finally{"yes"===e.getItem(t)&&e.removeItem(t)}return e}(o),c.prototype={set:function(t,e){if(i("set",t,e),t&&!f(t))o.setItem(t,void 0===(r=e)||"function"==typeof r?r+"":JSON.stringify(r));else if(t&&f(t)&&!e)for(var n in t)this.set(n,t[n]);var r;return this},get:function(t){if(!t){var n={};return this.forEach(function(t,e){return n[t]=e}),n}return"?"===t.charAt(0)?this.has(t.substr(1)):function(e){if("string"==typeof e)try{return JSON.parse(e)}catch(t){return e||void 0}}(o.getItem(t))},clear:function(){return this.forEach(function(t,e){i("clear",t,e)}),o.clear(),this},remove:function(t){var e=this.get(t);return o.removeItem(t),i("remove",t,e),e},has:function(t){return{}.hasOwnProperty.call(this.get(),t)},keys:function(){var e=[];return this.forEach(function(t){e.push(t)}),e},size:function(){return this.keys().length},forEach:function(t){for(var e=0;e<o.length;e++){var n=o.key(e);if(!1===t(n,this.get(n)))break}return this},search:function(t){for(var e=this.keys(),n={},r=0;r<e.length;r++)-1<e[r].indexOf(t)&&(n[e[r]]=this.get(e[r]));return n},onStorage:function(t){return t&&u(t)&&(i=t),this}};var s=null;function a(t,e){var n=arguments,r=null;if(s||(s=c()),0===n.length)return s.get();if(1===n.length){if("string"==typeof t)return s.get(t);if(f(t))return s.set(t)}if(2===n.length&&"string"==typeof t){if(!e)return s.remove(t);if(e&&"string"==typeof e)return s.set(t,e);if(e&&u(e))return r=null,(r=e(t,s.get(t)))?a.set(t,r):a}if(2===n.length&&t instanceof Array&&u(e)){for(var o=0;o<t.length;o++)r=e(t[o],s.get(t[o])),a.set(t[o],r);return a}}for(var t in c.prototype)a[t]=c.prototype[t];return a});

//网上的Jquery拓展用于解决屏幕大小改变问题的判断问题
(function($,h,c){var a=$([]),e=$.resize=$.extend($.resize,{}),i,k="setTimeout",j="resize",d=j+"-special-event",b="delay",f="throttleWindow";e[b]=250;e[f]=true;$.event.special[j]={setup:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.add(l);$.data(this,d,{w:l.width(),h:l.height()});if(a.length===1){g()}},teardown:function(){if(!e[f]&&this[k]){return false}var l=$(this);a=a.not(l);l.removeData(d);if(!a.length){clearTimeout(i)}},add:function(l){if(!e[f]&&this[k]){return false}var n;function m(s,o,p){var q=$(this),r=$.data(this,d);r.w=o!==c?o:q.width();r.h=p!==c?p:q.height();n.apply(this,arguments)}if($.isFunction(l)){n=l;return m}else{n=l.handler;l.handler=m}}};function g(){i=h[k](function(){a.each(function(){var n=$(this),m=n.width(),l=n.height(),o=$.data(this,d);if(m!==o.w||l!==o.h){n.trigger(j,[o.w=m,o.h=l])}});g()},e[b])}})(jQuery,this);


var ua = navigator.userAgent;
var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);

var Ios =ipad || ua.match(/(iPhone\sOS)\s([\d_]+)/);
var Android = ua.match(/(Android)\s+([\d.]+)/);
const isMobile = Ios || Android;


//function

//播放器生成
var inf=0,container,html,list,args,dansrc,solo=0;

function mzPlayer(){
	args=arguments[0];
	container=arguments[0].container;
	var xhr;
	if(arguments[0].pic)
		pic=arguments[0].pic;
	else
		pic='';
	if(arguments[0].danmaku)
		dansrc=arguments[0].danmaku;
	else
		dansrc='';
	if(arguments[0].video.srctype=='simple'||!arguments[0].video.srctype){
		solo=1;
		html='<video class="player" src="'+arguments[0].video.src+'" webkit-playsinline playsinline preload="auto" poster="'+pic+'"></video>';
	}
	if(arguments[0].video.srctype=='json'){
		var url=arguments[0].video.src;
		xhr=$.ajax({url:arguments[0].video.src,async:false});
  		list=jQuery.parseJSON(xhr.responseText)['video'][0]['video'];
		for(i=0;i<list.length;i++)
			{
				if(i==0)
					html='<video class="player" src="'+list[i]['file']+'" webkit-playsinline playsinline preload="auto" poster="'+pic+'"></video>';
				else
					html=html+'<video class="player" src="'+list[i]['file']+'" webkit-playsinline playsinline preload="metadata" style="display=none;"></video>';
			}
		
	}
$(container).append("<div class='mzplayer'></div>");
$(".mzplayer").append("<div class='loading'>视频预加载ing...<br/><br/>(⊙o⊙)…<br/><br/>不推荐使用IE浏览器<br/>建议更换后观看</div>");
if(isMobile)
$('.loading').css('display','none');	
$(".mzplayer").append("<div class='mzplayer-mask'></div>");	
$(".mzplayer").append("<div class='video-wrap'></div>");
$(".video-wrap").html(html);
$(".mzplayer").append("<div class='mid'></div>");
$(".mzplayer").append("<div class='control-mask'></div>");
$(".mzplayer").append("<div class='control'></div>");
$(".mzplayer").append("<div class='r-menu'></div>");
$(".r-menu").append('<div class="r-menu-item" ><a href="javascript:void(0);" style="text-decoration:none;">(*/ω\\*) 哼！</a></div><div class="r-menu-item"><a target="_new" href="http://wztap.top" style="text-decoration:none;">By&nbsp;&nbsp;王子饼干</a></div><div class="r-menu-item"><a href="javascript:void(0);">mzPlayer v1.1.2</a></div>');
$(".control").append("<div class='player-icons-left'></div>");
$(".player-icons-left").append("<div class='player-icon'></div>");
$(".player-icons-left").append("<div class='player-volume'></div>");
$(".player-volume").append("<div class='player-volume-icon'></div>");	
$(".player-volume-icon").append(volumeupsvg);
$(".player-volume").append('<div id="vol"></div>');
$("#vol").append("<div class='controller voice'></div>");
$(".voice").append("<div class='controller2 voice2'></div>");
$(".voice2").append("<div class='point p1'></div>");
$(".player-icons-left").append("<div class='player-time'></div>");
$(".player-icons-left").append("<div class='player-notice'></div>");
$(".control").append("<div id='t'></div>");
$("#t").append("<div class='controller time'></div>");
$(".time").append("<div class='controller3'></div><div class='controller2 time2'><div class='point p2'></div></div>");
$("#t").append("<div class='bar-time'>00:00</div>");
$(".control").append("<div class='comment'></div>");
$(".comment").append(commentsvg);
$(".control").append("<div class='setting'></div>");
$(".setting").append("<div class='setting-icon'></div>");	
$(".setting-icon").append(settingsvg);	
$(".setting").append("<div class='setting-box'></div>");
$(".setting-box").append("<div class='setting-item'></div>");
$(".setting-item").append("<span class='danmu-label'>开启洗脑循环</span>");	
$(".setting-item").append("<div class='toggle'></div>");		
$(".toggle").append('<input class="setting-input" type="checkbox" name="toggle-dan">');
$(".toggle").append('<label for="toggle-dan"></label>');	
//设置列表位置 ————日后添加其他	
$(".control").append("<div class='full'></div>");
$(".full").append("<div class='text2'></div>");
$(".text2").html("全屏");
$(".full").append(fullsvg);
$(".full").append("<div class='fullweb'></div>");
$(".fullweb").append(fullwebsvg);
$(".control").append("<div class='text1'></div>");
$(".text1").html("网页全屏");
//$(".control").append("<div class='text3'></div>");
//$(".text3").html("播放");
$(".control").append("<div class='text4'></div>");
$(".text4").html("音量");
$(".control").append("<div class='text5'></div>");
$(".text5").html("设置");
$(".control").append("<div class='text6'></div>");
$(".text6").html("发送弹幕");

//程序的开始
try {
    makeReady();    //保证函数的正常运行
} catch(e) {
	
}
eventF();  			//挂载事件函数 ——————在此挂载保证先生成元素后挂载
}

//几个标记变量
var ffplayer=0;
var rfvt;
var ifTime;  //如果预先知道总长度  日后考虑增加参数  

//非暂停状态，鼠标静止控制条两秒后隐藏
function mm(){
	clearInterval(rfvt);
	$('.control-mask').css('opacity',1);
	$('.control').css('opacity',1);
	rfvt=setTimeout("if($('.player')[0].paused==false){$('.control-mask').css('opacity',0);$('.control').css('opacity',0);}",2000);
}

//PC全屏函数
function FullScreen() {
	$(".mzplayer").addClass('ff');
	$(".text2").html("退出");
	if($(".mzplayer").hasClass('wf')){
		$(".mzplayer").addClass('wff');
		$(".mzplayer").removeClass('wf');
		$(".text1").html("网页全屏");
	}
    var ele = $(".mzplayer")[0];
     if (ele.requestFullscreen) {
		 ele.requestFullscreen();
     }
     else if (ele.msRequestFullscreen) {
     	ele.msRequestFullscreen();
     }
     else if (ele.mozRequestFullScreen) {
     	ele.mozRequestFullScreen();
     }
     else if (ele.webkitRequestFullScreen) {
     	ele.webkitRequestFullScreen();
     }
	 else{
		 $("video")[0].webkitEnterFullscreen();
		 $(".text2").html("全屏");
		 $(".mzplayer").removeClass('ff');
     }

}

//PC退出全屏函数
function exitFullscreen() {
	$(".mzplayer").removeClass('ff');
	$(".text2").html("全屏");
	if($(".mzplayer").hasClass('wff')){
		$(".mzplayer").addClass('wf');
		$(".mzplayer").removeClass('wff');
		$(".text1").html("还原网页");
	}
    var ele = document;
    if (ele.webkitCancelFullScreen) {
        ele.webkitCancelFullScreen();
    } else if (ele.mozCancelFullScreen) {
        ele.mozCancelFullScreen();
    } else if (ele.cancelFullScreen) {
        ele.cancelFullScreen();
    } else if (ele.exitFullscreen) {
        ele.exitFullscreen();
    } else {
        notice.notice_show("浏览器不支持全屏API或已被禁用", null, null, null, true, true);
    }
}

//分段视频专用时间段数组

var vTime=new Array();

//不播放的CurrentTime为0来实现
function makeReady(){
	//for(i=0;i<=$(".player").length-1;i++)
	//$(".player")[i].volume=0;	
	for(i=0;i<=$(".player").length-1;i++){
		if(!($(".player")[i].duration)){
			setTimeout("makeReady();",100);
			return;
		}		
	}
	$('.player-icon').html(playsvg);
	$('.mid').html(playsvg);
	//$('.p1').css('opacity',1); 
	console.log('\n' + ' %c mzPlayer v1.1.2'+' %c http://wztap.top ' + '\n' + '\n', 'color: #fadfa3; background: #198ce4; padding:5px 0;', 'background: #fadfa3; padding:5px 0;');
	//for(i=0;i<=$(".player").length-1;i++)
	//$(".player")[i].volume=1;	
	if(dansrc=='')
		$(".comment").css('display','none');
	if(isMobile){
		$('.player-volume').css('display','none');
		$('#vol').css('display','none');
		$('.player-time').css('left','50px');		
		$('.control').addClass('mcontrol');
	}
	$(".player-time").html('00:00&nbsp;/&nbsp;00:00');
	getArr();
	allStop();
	$(".player")[0].style.display='block';
	$('.loading').css('display','none');
	if(store.get('vol')){
		$(".player")[0].volume=store.get('vol');
		if($(".player")[0].volume>0.66)
			$(".player-volume-icon").html(volumeupsvg);
		if($(".player")[0].volume<0.65&&$(".player")[0].volume!=0)
			$(".player-volume-icon").html(volumedownsvg);	
		if($(".player")[0].volume==0)
			$(".player-volume-icon").html(volumeoffsvg);
	}

	whenPlay();
	
} 	//准备

function getArr(){
	var t=0;
	for(i=0;i<$(".player").length;i++)
	{	
		t+=$(".player")[i].duration;
		vTime[i]=t;
	}
		
}  // 生成时间数组，分段视频专用，用于后面快进时计算   例： [100， 210， 295]
function getWhich(){
	if(solo==1)
		return 0;
	for(i=0;i<list.length;i++)
	{
		if(!args.video.srctype)
			return 0;
		if($(".player")[0].src==list[i]['file'])
			return i;
	}
}	// 通过currentTime确定哪段 分段视频专用
function getWhichByTime(t){
	if(solo==1)
		return 0;
	for(i=0;i<list.length;i++)
	{
		if(i==0)
		{if(t<vTime[0])
				return 0;
		}
		else
			if(t<vTime[i]&&t>vTime[i-1])
				return i;
	}
} 	//通过进度条时间得到哪段 分段视频专用
function allStop(){
	if(solo==1)
		return;
	if(list.length>1){
		$(".video-wrap").html('<video class="player" src="'+list[0]['file']+'" webkit-playsinline playsinline preload="auto" poster="'+pic+'"></video><video class="player" src="'+list[1]['file']+'" webkit-playsinline playsinline preload="auto" style="display: block;z-index:-5;"></video>');
}
}
//播放时刷新函数 分段视频专用
function whenPlay(){
	if(solo==1){
		var timeText2=$(".player")[0].duration;
	}
	else
		var timeText2=vTime[list.length-1];
	var id=getWhich();
	mutevvv=$(".player")[0].muted;
	vvv=$(".player")[0].volume;
	if(mutevvv==false)
		$(".voice2").css('width',$(".player")[0].volume*50);
	else
		$(".voice2").css('width',0);
	
	if(!id)
		var timeText1=$(".player")[0].currentTime;
	else
		var timeText1=$(".player")[0].currentTime+vTime[getWhich(id)-1];
	if(solo==1&&$('.player')[0].buffered.length){
		$('.controller3').css('width',($('.player')[0].buffered.end($('.player')[0].buffered.length-1))/($(".player")[0].duration)*parseFloat($('#t').css('width')));
	}

	//获取currentTime
	var t11=parseInt(timeText1/60);
	if(t11<10)
	t11='0'+t11;	
	var t12=parseInt(timeText1%60);
	if(t12<10)
	t12='0'+t12;
	var t21=parseInt(timeText2/60);
	if(t21<10)
	t21='0'+t21;
	var t22=parseInt(timeText2%60);
	if(t22<10)
	t22='0'+t22;
	
	$('.time2').css('width',(timeText1/timeText2)*parseFloat($('#t').css('width')));
	$(".player-time").html('&nbsp;'+t11+':'+t12+'&nbsp;/&nbsp;'+t21+':'+t22);
	if(solo==1){
		if($(".player")[0].ended==true)
			{
				$(".player")[0].currentTime=0;
				if(inf==1){
					$(".player")[0].play();
					$('.player-icon').html(pausesvg);
				}
				else{
					$(".player")[0].pause();
					$('.player-icon').html(playsvg);
				}
			}
	}
	else{
	if($(".player")[0].ended==true){
    if($(".player")[0].src==list[list.length-1]['file']){           //最后一个
		$(".player")[0].src=list[0]['file'];	
		$(".player")[0].currentTime=0;
		$(".player")[0].muted=mutevvv;
		$(".player")[0].volume=vvv;
		if(inf==1){
		$(".player")[0].play();
		$('.player-icon').html(pausesvg);
		}
		else{
		$(".player")[0].pause();
		$('.player-icon').html(playsvg);
		}
		if(list.length>1)
			$(".player")[1].src=list[1]['file'];
	}
	else{
		$(".player")[0].style.display='none';
		$(".player")[1].play();
		$(".video-wrap")[0].removeChild($(".player")[0]);		
		$(".player")[0].style.zIndex='0';
		$(".player")[0].currentTime=0;
		$(".player")[0].muted=mutevvv;
		$(".player")[0].volume=vvv;
		if(getWhich()!=list.length-1)
			$(".video-wrap").append('<video class="player" src="'+list[getWhich()+1]['file']+'" webkit-playsinline playsinline preload="auto" style="display: block;z-index:-5;"></video>');
	}
}
}
	if($(".player")[0].paused==false)
	var t=setTimeout("whenPlay()",50);
}//播放时的获取实时信息函数


//events

//简单的初始化
function eventF(){

//标记变量鼠标状态
var mouseplayer=0;
var mouseplayer1=0;
var fullBJ=0;


	
$('.setting-icon').click(function(){
	$(".setting-box").addClass('box-open');
	$(".mzplayer-mask").css("display",'block');
});	
$('.toggle').click(function(){
	if($("input[name='toggle-dan']")[0].checked==true){
		$("input[name='toggle-dan']")[0].checked=false;
		inf=0;
	}
	else{
		$("input[name='toggle-dan']")[0].checked=true;
		inf=1;
	}
	
});
	
$('.mzplayer-mask').click(function(){
	if ($('.setting-box').hasClass('box-open')) {
		$(".setting-box").removeClass('box-open');
		$(".mzplayer-mask").css("display",'none');
	}
	if($(".player-icons-left").css("display")=='none'){
		$(".player-icons-left").css("display",'block');
		$(".comment").css("display",'block');
		$(".setting").css("display",'block');
		$(".full").css("display",'block');
		$(".mzplayer-mask").css("display",'none');
		$(".mzplayer").removeClass('ff');
	}
});

$('.comment').click(function(){
	$(".mzplayer-mask").css("display",'block');
	$(".player-icons-left").css("display",'none');
	$(".comment").css("display",'none');
	$(".setting").css("display",'none');
	$(".full").css("display",'none');
	
});

	
	
//鼠标移出控制栏隐藏控制栏
$(".mzplayer").mouseout(function (e){
	var positionX=e.pageX-$(this).offset().left;
	var positionY=e.pageY-$(this).offset().top;
	var w=parseFloat($('.mzplayer').css('width'));
	var h=parseFloat($('.mzplayer').css('height'));
    if($(".player")[0].paused==false){
		if(positionX>w||positionX<0||positionY>h||positionY<0){
		$('.control-mask').css('opacity',0);
		$('.control').css('opacity',0);
		}
	}
});

//阻止浏览器默认右键点击事件
$(".mzplayer").bind("contextmenu", function(){
    return false;
})

//右键菜单判断
$(".mzplayer").mousedown(function(e) {
    //右键为3
    if (3 == e.which) {
		var positionX=e.pageX-$(this).offset().left;
		var positionY=e.pageY-$(this).offset().top;
		$(".r-menu").css("display",'block');
		$(".r-menu").css("top",positionY);
		$(".r-menu").css("left",positionX);
		}	
})

//左键点击隐藏菜单
$('.mzplayer').click(function(){
	$(".r-menu").css("display",'none');	
});
	
//空格暂停
$(document).keydown(function(e){
	mm();
	if(e.keyCode==32){
		ptp();
	}
	if(e.keyCode==39){
	clearInterval(s);
	clearInterval(s2);
	if(solo==1){
		if ($('.player-icon').hasClass('pause')) {
			$('.player-icon').removeClass('pause');
		}
		$(".player")[0].currentTime=$(".player")[0].currentTime+5;
		$(".player")[0].play();
		$('.player-icon').html(pausesvg);
		whenPlay();
	}
	else{
	positionX=parseFloat($('.time2').css('width'));
	id=getWhichByTime((positionX/parseFloat($('#t').css('width')))*vTime[list.length-1]+5);
	if ($('.player-icon').hasClass('pause')) {
		$('.player-icon').removeClass('pause');
	}
	if(id!=0){
		$(".player")[0].src=list[id]['file'];
		$(".player")[0].currentTime=(positionX/parseFloat($('#t').css('width')))*vTime[list.length-1]+5-vTime[id-1];
		$(".player")[0].play();
		$('.player-icon').html(pausesvg);
		$('.mid').html(pausesvg);
		if(id!=list.length)
			$(".player")[1].src=list[id+1]['file'];
	}
	else{
		$(".player")[0].src=list[id]['file'];
		$(".player")[0].currentTime=(positionX/parseFloat($('#t').css('width')))*vTime[list.length-1]+5;
		$(".player")[0].play();
		$('.player-icon').html(pausesvg);
		$('.mid').html(pausesvg);
		if(id!=list.length)
			$(".player")[1].src=list[id+1]['file'];
	}
	whenPlay();
	}
	$(".player-notice").css('opacity',0.85);
	$(".player-notice").html('&nbsp;快进&nbsp;5&nbsp;秒');
	$('.control-mask').css('opacity',1);
	$('.control').css('opacity',1);
	var s=setTimeout("$('.player-notice').css('opacity',0)",1500);
	}
	if(e.keyCode==37){
	clearInterval(s);	
	clearInterval(s2);
	if(solo==1){
		if ($('.player-icon').hasClass('pause')) {
			$('.player-icon').removeClass('pause');
		}
		$(".player")[0].currentTime=$(".player")[0].currentTime-5;
		$(".player")[0].play();
		$('.player-icon').html(pausesvg);
		whenPlay();
	}
	else{
	positionX=parseFloat($('.time2').css('width'));
		

	id=getWhichByTime((positionX/parseFloat($('#t').css('width')))*vTime[list.length-1]+5);
	if ($('.player-icon').hasClass('pause')) {
		$('.player-icon').removeClass('pause');
	}
	if(id!=0){
		$(".player")[0].src=list[id]['file'];
		$(".player")[0].currentTime=(positionX/parseFloat($('#t').css('width')))*vTime[list.length-1]-5-vTime[id-1];
		$(".player")[0].play();
		$('.player-icon').html(pausesvg);
		$('.mid').html(pausesvg);
		if(id!=list.length)
			$(".player")[1].src=list[id+1]['file'];
	}
	else{
		$(".player")[0].src=list[id]['file'];
		$(".player")[0].currentTime=(positionX/parseFloat($('#t').css('width')))*vTime[list.length-1]-5;
		$(".player")[0].play();
		$('.player-icon').html(pausesvg);
		$('.mid').html(pausesvg);
		if(id!=list.length)
			$(".player")[1].src=list[id+1]['file'];
	}
	whenPlay();

	}
	$('.control-mask').css('opacity',1);
	$('.control').css('opacity',1);
	$(".player-notice").css('opacity',0.85);
	$(".player-notice").html('&nbsp;快退&nbsp;5&nbsp;秒');
	var s2=setTimeout("$('.player-notice').css('opacity',0)",1500);
	}


})

//esc退出全屏事件
document.addEventListener("fullscreenchange", function(e) {
	fullBJ++;
  if(fullBJ%2==0){
	$(".mzplayer").removeClass('ff');
	$(".text2").html("全屏");
	if($(".mzplayer").hasClass('wff')){
		$(".mzplayer").addClass('wf');
		$(".mzplayer").removeClass('wff');
		$(".text1").html("还原网页");
	}
  }
});
document.addEventListener("mozfullscreenchange", function(e) {
  fullBJ++;
  if(fullBJ%2==0){
  	$(".mzplayer").removeClass('ff');
	$(".text2").html("全屏");
	if($(".mzplayer").hasClass('wff')){
		$(".mzplayer").addClass('wf');
		$(".mzplayer").removeClass('wff');
		$(".text1").html("还原网页");
	}
  }
});
document.addEventListener("webkitfullscreenchange", function(e) {
  fullBJ++;
  if(fullBJ%2==0){
  	$(".mzplayer").removeClass('ff');
	$(".text2").html("全屏");
	if($(".mzplayer").hasClass('wff')){
		$(".mzplayer").addClass('wf');
		$(".mzplayer").removeClass('wff');
		$(".text1").html("还原网页");
	}
  }
});
document.addEventListener("msfullscreenchange", function(e) {
  fullBJ++;
  if(fullBJ%2==0){
  	$(".mzplayer").removeClass('ff');
	$(".text2").html("全屏");
	if($(".mzplayer").hasClass('wff')){
		$(".mzplayer").addClass('wf');
		$(".mzplayer").removeClass('wff');
		$(".text1").html("还原网页");
	}
  }
});

//大小改变事件
$(".mzplayer").resize(function(){ 
	if(solo==1&&$('.player')[0].buffered.length){
		$('.controller3').css('width',($('.player')[0].buffered.end($('.player')[0].buffered.length-1))/($(".player")[0].duration)*parseFloat($('#t').css('width')));
	}
});
var dcTime=(new Date()).getTime();
//暂停or播放点击事件绑定
$('.player-icon').click(function(){
	ptp();
});
if(!isMobile){
$('.video-wrap').click(function(){
	ptp();
});
$('.control-mask').click(function(){
	ptp();
});
}
if(isMobile){
$('.video-wrap').click(function(){
	var t=(new Date()).getTime();
	if(t-dcTime<=500)
	ptp();
	dcTime=t;
});//设计算法实现移动端的双击暂停效果
$('.control-mask').click(function(){
	var t=(new Date()).getTime();
	if(t-dcTime<=500)
	ptp();
	dcTime=t;
});
}

//播放暂停事件函数
function ptp(){
	if ($(".player")[0].paused==true) {
		$(".player")[0].play();
		//$(".text3").html("暂停");
		$('.player-icon').removeClass('pause');
		$('.player-icon').html(pausesvg);
		$('.mid').html(playsvg);
		whenPlay();
	}else{
		$('.player-icon').addClass('pause');
		//$(".text3").html("播放");
		$(".player")[0].pause();
		$('.player-icon').html(playsvg);
		$('.mid').html(pausesvg);
	}
	$(".mid").addClass('mid-transition');
	setTimeout('$(".mid").removeClass("mid-transition");',500);
	
}

//页面全屏
$('.fullweb').click(function(e){
	if ($(".mzplayer").hasClass('wf')) {
		exitFullscreen();
		$(".mzplayer").removeClass('wf');
		$(".text1").html("网页全屏");
		e.stopPropagation(); 
	}else{
		exitFullscreen();
		$(".mzplayer").addClass('wf');
		$(".text1").html("还原网页");
		e.stopPropagation(); 
	}
});

//$(".player-icon").mouseover(function (){  
//	$('.text3').css('display','block');
//   $('.text3').css('opacity',1);
//	$('.text3').css('z-index',11);
//	$('.text3').css('transform','translateY(-2px)');
//}).mouseout(function (){  
//	$('.text3').css('opacity',0); 
//	$('.text3').css('z-index',0);
//	$('.text3').css('transform','translateY(5px)');
//});
$(".fullweb").mouseover(function (e){ 
	$('.text1').css('display','block'); 
    $('.text1').css('opacity',1); 
	$('#t').css('z-index',0);
	$('.text6').css('transform','translateY(-2px)');
	$(".fullweb").css('opacity',1); 
	e.stopPropagation();  	//阻止事件冒泡
}).mouseout(function (){  
	$('.text1').css('opacity',0); 
	$('.text1').css('transform','translateY(5px)');
	$(".fullweb").css('opacity',0.3); 
	$('#t').css('z-index',10);
});
$(".full").mouseover(function (){  
	$('.text2').css('display','block');
    $('.text2').css('opacity',1);
	$('#t').css('z-index',0);
	$('.text2').css('transform','translateY(-2px)');
}).mouseout(function (){  
	$('.text2').css('opacity',0); 
	$('#t').css('z-index',10);
	$('.text2').css('transform','translateY(5px)');
});
$(".setting-icon").mouseover(function (){  
	$('.text5').css('display','block');
    $('.text5').css('opacity',1);
	$('.text5').css('transform','translateY(-2px)');
}).mouseout(function (){  
	$('.text5').css('opacity',0); 
	$('.text5').css('transform','translateY(5px)');
});
$(".comment").mouseover(function (){  
	$('.text6').css('display','block');
    $('.text6').css('opacity',1);
	$('.text6').css('transform','translateY(-2px)');
}).mouseout(function (){  
	$('.text6').css('opacity',0); 
	$('.text6').css('transform','translateY(5px)');
});

//全屏按钮事件绑定
$('.full').click(function(){
	if ($(".mzplayer").hasClass('ff')) {
		exitFullscreen();
	}else{
		FullScreen();
	}
});

//控制栏自动隐藏函与数事件绑定
$(".mzplayer").bind('mousemove',mm);
$(".mzplayer").bind('click',mm);

//预览时间信息的更新与定位
$("#t").mousemove(function(e){
	var k=e.pageX-$(this).offset().left;
	$('.bar-time').css('left',k-21);
	if(solo==1)
		var t1=k/parseFloat($('#t').css('width'))*$('.player')[0].duration;
	else
		var t1=k/parseFloat($('#t').css('width'))*vTime[list.length-1];
	var t11=parseInt(t1/60);
	if(t11<10)
	t11='0'+t11;	
	var t12=parseInt(t1%60);
	if(t12<10)
	t12='0'+t12;
	$(".bar-time").html(t11+':'+t12);
});
$("#t").mouseover(function (e){  
	var k=e.pageX-$(this).offset().left-20;
    $('.p2').css('opacity',1); 
	$('.bar-time').css('opacity',1); 
	
}).mouseout(function (){  
    $('.p2').css('opacity',0);
	$('.bar-time').css('opacity',0);   
});
var imin=0;
$(".player-volume").mouseover(function (e){
	imin=1;
	$('.p1').css('opacity',1);
	$('#vol').css('max-width','50px');
	$('.player-time').css('left','140px');
	$('#vol').css('overflow','visible');
	$(".player-volume").css('width','100px');
}).mouseout(function (){
	imin=0;
	if(mouseplayer==0){
	$('.p1').css('opacity',0);
	$('#vol').css('max-width','0px');
	$('.player-time').css('left','87px');
	$('#vol').css('overflow','hidden'); 
	$(".player-volume").css('width','0px');
	}
});
//声音控制条及其他信息提示
$('#vol').mousedown(function(e){
	mouseplayer=1;
});
$(document).mouseup(function(){
	mouseplayer=0;
	mouseplayer1=0;
	if(!isMobile){
	if(imin==0){
	$('.p1').css('opacity',0);
	$('#vol').css('max-width','0px');
	$('.player-time').css('left','87px');
	$('#vol').css('overflow','hidden');
	$(".player-volume").css('width','0px');
	}
	}
	setTimeout("$('.player-notice').css('opacity',0)",3000);
});
$('#vol').click(function(e){
	var positionX=e.pageX-$(this).offset().left; 
	if ($('.player-volume').hasClass('mute')) {
		$(".player")[0].muted=false;
		$('.player-volume').removeClass('mute');
	}
	if(positionX<=50){
	$('.voice2').css('width',positionX);
	for(i=0;i<$(".player").length;i++)
	$(".player")[i].volume=positionX/50;
	store.set('vol',$(".player")[0].volume);
	mouseplayer=0;
	}
	voi();
});
$('.player-volume-icon').click(function(){
	if ($(this).hasClass('mute')) {
		$(".player")[0].muted=false;
		$(this).removeClass('mute');
		$('.voice2').css('width',$(".player")[0].volume*50);
		voi();
	}else{
		$(this).addClass('mute');
		$(".player")[0].muted=true;
		$('.voice2').css('width',0);
		voi();
		$(".player-notice").html('&nbsp;音量 0%');
		$(".player-volume-icon").html(volumeoffsvg);	
	}
});
function voi(){
	$(".player-notice").css('opacity',0.85);
	$(".player-notice").html('&nbsp;音量 '+parseInt($(".player")[0].volume*100)+'%');
	if($(".player")[0].volume>0.66)
	$(".player-volume-icon").html(volumeupsvg);
	if($(".player")[0].volume<0.65&&$(".player")[0].volume!=0)
	$(".player-volume-icon").html(volumedownsvg);	
	if($(".player")[0].volume==0)
	$(".player-volume-icon").html(volumeoffsvg);	
}
//两个滚动条的控制 
$(document).mousemove(function(e){
	if(mouseplayer==1){
	if ($('.player-volume').hasClass('mute')) {
		$(".player")[0].muted=false;
		$('.player-volume').removeClass('mute');
	}
	var positionX=e.pageX-$('#vol').offset().left; 
	if(positionX<=50&&positionX>=0){
	$('.voice2').css('width',positionX);
	$(".player")[0].volume=positionX/50;	
	store.set('vol',$(".player")[0].volume);
	}
	if(positionX<0){
	$('.voice2').css('width',0);
	$(".player")[0].volume=0;
	store.set('vol',0);
	}
	if(positionX>=50){
	$('.voice2').css('width',50);
	$(".player")[0].volume=1;
	store.set('vol',1);
	}
	voi();
	}
	if(mouseplayer1==1){
		
	var positionX=e.pageX-$('#t').offset().left; 
	if(solo==1){
		if ($('.player-icon').hasClass('pause')) {
			$('.player-icon').removeClass('pause');
		}
		$(".player")[0].currentTime=(positionX/parseFloat($('#t').css('width')))*$('.player')[0].duration;
		$(".player")[0].play();
		$('.time2').css('width',positionX);
		$('.player-icon').html(pausesvg);
	}
	else{
	if(positionX<parseFloat($('#t').css('width'))&&positionX>=0){
	id=getWhichByTime((positionX/parseFloat($('#t').css('width')))*vTime[list.length-1]);
	if ($('.player-icon').hasClass('pause')) {
		$('.player-icon').removeClass('pause');
	}
	if(id!=0){
		$(".player")[0].src=list[id]['file'];
		 $('.time2').css('width',positionX);
		$(".player")[0].currentTime=(positionX/parseFloat($('#t').css('width')))*vTime[list.length-1]-vTime[id-1];
		$(".player")[0].play();
		$('.player-icon').html(pausesvg);
		$('.mid').html(pausesvg);
		if(id!=list.length)
			$(".player")[1].src=list[id+1]['file'];
	}
	else{
		$('.time2').css('width',positionX);
		$(".player")[0].src=list[id]['file'];
		$(".player")[0].currentTime=(positionX/parseFloat($('#t').css('width')))*vTime[list.length-1];
		$(".player")[0].play();
		$('.player-icon').html(pausesvg);
		$('.mid').html(pausesvg);
		if(id!=list.length)
			$(".player")[1].src=list[id+1]['file'];
	}
	$('.control-mask').css('opacity',1);
	$('.control').css('opacity',1);
	}
	}
	if(positionX<0){
		
		$('.time2').css('width','0px');
		if(solo!=1)
		$(".player")[0].src=list[0]['file'];
		$(".player")[0].currentTime=0;
		$(".player")[0].play();
		$('.player-icon').html(pausesvg);
		$('.mid').html(pausesvg);
		if(solo!=1)
		if(id!=list.length)
			$(".player")[1].src=list[id+1]['file'];
	}
	if(positionX>=parseFloat($('#t').css('width'))){
		$('.time2').css('width',parseFloat($('#t').css('width')));
		$(".player")[0].currentTime=$(".player")[0].duration;
		$(".player")[0].pause();
		//$(".text3").html("播放");
		$('.player-icon').html(playsvg);
		$('.mid').html(playsvg);
	}
	}
});

//点击时间条改变时间
$('#t').click(function(e){
	var positionX=e.pageX-$(this).offset().left; 
	$('.time2').css('width',positionX);
	if(solo==1){
		if ($('.player-icon').hasClass('pause')) {
			$('.player-icon').removeClass('pause');
		}
		$(".player")[0].currentTime=(positionX/parseFloat($('#t').css('width')))*$('.player')[0].duration;
		$(".player")[0].play();
		$('.player-icon').html(pausesvg);
	}
	else{
	if(positionX<parseFloat($('#t').css('width'))){
	id=getWhichByTime((positionX/parseFloat($('#t').css('width')))*vTime[list.length-1]);
	if ($('.player-icon').hasClass('pause')) {
		$('.player-icon').removeClass('pause');
	}
	if(id!=0){
		$(".player")[0].src=list[id]['file'];
		$(".player")[0].currentTime=(positionX/parseFloat($('#t').css('width')))*vTime[list.length-1]-vTime[id-1];
		$(".player")[0].play();
		$('.player-icon').html(pausesvg);
		$('.mid').html(pausesvg);
		if(id!=list.length)
			$(".player")[1].src=list[id+1]['file'];
	}
	else{
		$(".player")[0].src=list[id]['file'];
		$(".player")[0].currentTime=(positionX/parseFloat($('#t').css('width')))*vTime[list.length-1];
		$(".player")[0].play();
		$('.player-icon').html(pausesvg);
		$('.mid').html(pausesvg);
		if(id!=list.length)
			$(".player")[1].src=list[id+1]['file'];
	}
	$('.control-mask').css('opacity',1);
	$('.control').css('opacity',1);
	}
	}
	
});
$('#t').mousedown(function(e){
	mouseplayer1=1;
});
$('#t').bind('touchstart',function(e){
	startX = e.originalEvent.changedTouches[0].pageX,
    startY = e.originalEvent.changedTouches[0].pageY;
});
$('#t').bind('touchmove',function(e){
//获取滑动屏幕时的X,Y
	mm();
	endX = e.originalEvent.changedTouches[0].pageX,
	endY = e.originalEvent.changedTouches[0].pageY;
	var positionX=endX-$('#t').offset().left; 
	if(solo==1){
		if ($('.player-icon').hasClass('pause')) {
			$('.player-icon').removeClass('pause');
		}
		$(".player")[0].currentTime=(positionX/parseFloat($('#t').css('width')))*$('.player')[0].duration;
		$(".player")[0].play();
		$('.time2').css('width',positionX);
		$('.player-icon').html(pausesvg);
	}
	else{
	if(positionX<parseFloat($('#t').css('width'))&&positionX>=0){
	id=getWhichByTime((positionX/parseFloat($('#t').css('width')))*vTime[list.length-1]);
	if ($('.player-icon').hasClass('pause')) {
		$('.player-icon').removeClass('pause');
	}
	if(id!=0){
		$(".player")[0].src=list[id]['file'];
		 $('.time2').css('width',positionX);
		$(".player")[0].currentTime=(positionX/parseFloat($('#t').css('width')))*vTime[list.length-1]-vTime[id-1];
		$(".player")[0].play();
		$('.player-icon').html(pausesvg);
		$('.mid').html(pausesvg);
		if(id!=list.length)
			$(".player")[1].src=list[id+1]['file'];
	}
	else{
		$('.time2').css('width',positionX);
		$(".player")[0].src=list[id]['file'];
		$(".player")[0].currentTime=(positionX/parseFloat($('#t').css('width')))*vTime[list.length-1];
		$(".player")[0].play();
		$('.player-icon').html(pausesvg);
		$('.mid').html(pausesvg);
		if(id!=list.length)
			$(".player")[1].src=list[id+1]['file'];
	}
	$('.control-mask').css('opacity',1);
	$('.control').css('opacity',1);
	}
	}
	if(positionX<0){
		
		$('.time2').css('width','0px');
		if(solo!=1)
		$(".player")[0].src=list[0]['file'];
		$(".player")[0].currentTime=0;
		$(".player")[0].play();
		$('.player-icon').html(pausesvg);
		$('.mid').html(pausesvg);
		if(solo!=1)
		if(id!=list.length)
			$(".player")[1].src=list[id+1]['file'];
	}
	if(positionX>=parseFloat($('#t').css('width'))){
		$('.time2').css('width',parseFloat($('#t').css('width')));
		$(".player")[0].currentTime=$(".player")[0].duration;
		$(".player")[0].pause();
		//$(".text3").html("播放");
		$('.player-icon').html(playsvg);
		$('.mid').html(playsvg);
	}
});
if(isMobile){
$('.video-wrap').bind('touchstart',function(e){
	startX = e.originalEvent.changedTouches[0].pageX;
	startY = e.originalEvent.changedTouches[0].pageY;
});
$('.video-wrap').bind('touchmove',function(e){
	mm();
		
});
$('.control-mask').bind('touchmove',function(e){
	mm();
	
});
}
}
