const name = 'world';
console.log(`Hello ${name}`);

/*
	Importem la llibreria pel menú hamburguesa
*/
import 'hamburger-menu';

/*
	Importem la llibreria per l'slider
*/
//import {tns} from 'tiny-slider';

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var win$1=window,raf=win$1.requestAnimationFrame||win$1.webkitRequestAnimationFrame||win$1.mozRequestAnimationFrame||win$1.msRequestAnimationFrame||function(a){return setTimeout(a,16)},win=window,caf=win.cancelAnimationFrame||win.mozCancelAnimationFrame||function(a){clearTimeout(a)};function extend(){for(var a,b,c,d=arguments[0]||{},e=1,f=arguments.length;e<f;e++)if(null!==(a=arguments[e]))for(b in a)d!==(c=a[b])&& void 0!==c&&(d[b]=c);return d}function checkStorageValue(a){return["true","false"].indexOf(a)>=0?JSON.parse(a):a}function setLocalStorage(b,c,a,d){if(d)try{b.setItem(c,a)}catch(e){}return a}function getSlideId(){var a=window.tnsId;return window.tnsId=a?a+1:1,"tns"+window.tnsId}function getBody(){var b=document,a=b.body;return a||((a=b.createElement("body")).fake=!0),a}var docElement=document.documentElement;function setFakeBody(a){var b="";return a.fake&&(b=docElement.style.overflow,a.style.background="",a.style.overflow=docElement.style.overflow="hidden",docElement.appendChild(a)),b}function resetFakeBody(a,b){a.fake&&(a.remove(),docElement.style.overflow=b,docElement.offsetHeight)}function calc(){var a=getBody(),g=setFakeBody(a),b=document.createElement("div"),f=!1;a.appendChild(b);try{for(var d,c="(10px * 10)",h=["calc"+c,"-moz-calc"+c,"-webkit-calc"+c],e=0;e<3;e++)if(d=h[e],b.style.width=d,100===b.offsetWidth){f=d.replace(c,"");break}}catch(i){}return a.fake?resetFakeBody(a,g):b.remove(),f}function percentageLayout(){var d=document,b=getBody(),h=setFakeBody(b),a=d.createElement("div"),c=d.createElement("div"),e="",f=!1;a.className="tns-t-subp2",c.className="tns-t-ct";for(var g=0;g<70;g++)e+="<div></div>";return c.innerHTML=e,a.appendChild(c),b.appendChild(a),f=2>Math.abs(a.getBoundingClientRect().left-c.children[67].getBoundingClientRect().left),b.fake?resetFakeBody(b,h):a.remove(),f}function mediaquerySupport(){if(window.matchMedia||window.msMatchMedia)return!0;var e,d=document,a=getBody(),g=setFakeBody(a),b=d.createElement("div"),c=d.createElement("style"),f="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return c.type="text/css",b.className="tns-mq-test",a.appendChild(c),a.appendChild(b),c.styleSheet?c.styleSheet.cssText=f:c.appendChild(d.createTextNode(f)),e=window.getComputedStyle?window.getComputedStyle(b).position:b.currentStyle.position,a.fake?resetFakeBody(a,g):b.remove(),"absolute"===e}function createStyleSheet(b,c){var a=document.createElement("style");return b&&a.setAttribute("media",b),c&&a.setAttribute("nonce",c),document.querySelector("head").appendChild(a),a.sheet?a.sheet:a.styleSheet}function addCSSRule(a,b,c,d){"insertRule"in a?a.insertRule(b+"{"+c+"}",d):a.addRule(b,c,d)}function removeCSSRule(a,b){"deleteRule"in a?a.deleteRule(b):a.removeRule(b)}function getCssRulesLength(a){return("insertRule"in a?a.cssRules:a.rules).length}function toDegree(a,b){return Math.atan2(a,b)*(180/Math.PI)}function getTouchDirection(d,b){var a=!1,c=Math.abs(90-Math.abs(d));return c>=90-b?a="horizontal":c<=b&&(a="vertical"),a}function forEach(b,c,d){for(var a=0,e=b.length;a<e;a++)c.call(d,b[a],a)}var classListSupport="classList"in document.createElement("_"),hasClass=classListSupport?function(a,b){return a.classList.contains(b)}:function(a,b){return a.className.indexOf(b)>=0},addClass=classListSupport?function(a,b){hasClass(a,b)||a.classList.add(b)}:function(a,b){hasClass(a,b)||(a.className+=" "+b)},removeClass=classListSupport?function(a,b){hasClass(a,b)&&a.classList.remove(b)}:function(a,b){hasClass(a,b)&&(a.className=a.className.replace(b,""))};function hasAttr(a,b){return a.hasAttribute(b)}function getAttr(a,b){return a.getAttribute(b)}function isNodeList(a){return void 0!==a.item}function setAttrs(a,b){if(a=isNodeList(a)||a instanceof Array?a:[a],"[object Object]"===Object.prototype.toString.call(b))for(var c=a.length;c--;)for(var d in b)a[c].setAttribute(d,b[d])}function removeAttrs(a,b){a=isNodeList(a)||a instanceof Array?a:[a],b=b instanceof Array?b:[b];for(var e=b.length,c=a.length;c--;)for(var d=e;d--;)a[c].removeAttribute(b[d])}function arrayFromNodeList(b){for(var c=[],a=0,d=b.length;a<d;a++)c.push(b[a]);return c}function hideElement(a,b){"none"!==a.style.display&&(a.style.display="none")}function showElement(a,b){"none"===a.style.display&&(a.style.display="")}function isVisible(a){return"none"!==window.getComputedStyle(a).display}function whichProperty(a){if("string"==typeof a){var d=[a],f=a.charAt(0).toUpperCase()+a.substr(1);["Webkit","Moz","ms","O"].forEach(function(b){("ms"!==b||"transform"===a)&&d.push(b+f)}),a=d}var e=document.createElement("fakeelement");a.length;for(var b=0;b<a.length;b++){var c=a[b];if(void 0!==e.style[c])return c}return!1}function has3DTransforms(a){if(!a||!window.getComputedStyle)return!1;var b,c=getBody(),f=setFakeBody(c),d=document.createElement("p"),e=a.length>9?"-"+a.slice(0,-9).toLowerCase()+"-":"";return e+="transform",c.insertBefore(d,null),d.style[a]="translate3d(1px,1px,1px)",b=window.getComputedStyle(d).getPropertyValue(e),c.fake?resetFakeBody(c,f):d.remove(),void 0!==b&&b.length>0&&"none"!==b}function getEndProperty(b,c){var a=!1;return/^Webkit/.test(b)?a="webkit"+c+"End":/^O/.test(b)?a="o"+c+"End":b&&(a=c.toLowerCase()+"end"),a}var supportsPassive=!1;try{var a=Object.defineProperty({},"passive",{get:function(){supportsPassive=!0}});window.addEventListener("test",null,a)}catch(b){}var passiveOption=!!supportsPassive&&{passive:!0};function addEvents(c,b,d){for(var a in b){var e=["touchstart","touchmove"].indexOf(a)>=0&&!d&&passiveOption;c.addEventListener(a,b[a],e)}}function removeEvents(c,b){for(var a in b){var d=["touchstart","touchmove"].indexOf(a)>=0&&passiveOption;c.removeEventListener(a,b[a],d)}}function Events(){return{topics:{},on:function(a,b){this.topics[a]=this.topics[a]||[],this.topics[a].push(b)},off:function(a,c){if(this.topics[a]){for(var b=0;b<this.topics[a].length;b++)if(this.topics[a][b]===c){this.topics[a].splice(b,1);break}}},emit:function(a,b){b.type=a,this.topics[a]&&this.topics[a].forEach(function(c){c(b,a)})}}}function jsTransform(e,f,g,h,a,b,k){var c=Math.min(b,10),d=a.indexOf("%")>=0?"%":"px",a=a.replace(d,""),i=Number(e.style[f].replace(g,"").replace(h,"").replace(d,"")),l=(a-i)/b*c;function j(){b-=c,i+=l,e.style[f]=g+i+d+h,b>0?setTimeout(j,c):k()}setTimeout(j,c)}"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var tns=function(a){a=extend({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},a||{});var t=document,o=window,_={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},b={},c=a.useLocalStorage;if(c){var u=navigator.userAgent,h=new Date;try{(b=o.localStorage)?(b.setItem(h,h),c=b.getItem(h)==h,b.removeItem(h)):c=!1,c||(b={})}catch(aa){c=!1}c&&(b.tnsApp&&b.tnsApp!==u&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(a){b.removeItem(a)}),localStorage.tnsApp=u)}var ab=b.tC?checkStorageValue(b.tC):setLocalStorage(b,"tC",calc(),c),ac=b.tPL?checkStorageValue(b.tPL):setLocalStorage(b,"tPL",percentageLayout(),c),ad=b.tMQ?checkStorageValue(b.tMQ):setLocalStorage(b,"tMQ",mediaquerySupport(),c),p=b.tTf?checkStorageValue(b.tTf):setLocalStorage(b,"tTf",whichProperty("transform"),c),z=b.t3D?checkStorageValue(b.t3D):setLocalStorage(b,"t3D",has3DTransforms(p),c),A=b.tTDu?checkStorageValue(b.tTDu):setLocalStorage(b,"tTDu",whichProperty("transitionDuration"),c),ae=b.tTDe?checkStorageValue(b.tTDe):setLocalStorage(b,"tTDe",whichProperty("transitionDelay"),c),B=b.tADu?checkStorageValue(b.tADu):setLocalStorage(b,"tADu",whichProperty("animationDuration"),c),af=b.tADe?checkStorageValue(b.tADe):setLocalStorage(b,"tADe",whichProperty("animationDelay"),c),ag=b.tTE?checkStorageValue(b.tTE):setLocalStorage(b,"tTE",getEndProperty(A,"Transition"),c),ah=b.tAE?checkStorageValue(b.tAE):setLocalStorage(b,"tAE",getEndProperty(B,"Animation"),c),C=o.console&&"function"==typeof o.console.warn,D=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],ai={};if(D.forEach(function(b){if("string"==typeof a[b]){var d=a[b],c=t.querySelector(d);if(ai[b]=d,c&&c.nodeName)a[b]=c;else{C&&console.warn("Can't find",a[b]);return}}}),a.container.children.length<1){C&&console.warn("No slides found in",a.container);return}var e=a.responsive,aj=a.nested,d="carousel"===a.mode;if(e){0 in e&&(a=extend(a,e[0]),delete e[0]);var q={};for(var v in e){var i=e[v];i="number"==typeof i?{items:i}:i,q[v]=i}e=q,q=null}function E(b){for(var a in b)d||("slideBy"===a&&(b[a]="page"),"edgePadding"===a&&(b[a]=!1),"autoHeight"!==a||(b[a]=!1)),"responsive"===a&&E(b[a])}if(d||E(a),!d){a.axis="horizontal",a.slideBy="page",a.edgePadding=!1;var ak=a.animateIn,al=a.animateOut,am=a.animateDelay,an=a.animateNormal}var ao,ap,m,j,k="horizontal"===a.axis,aq=t.createElement("div"),ar=t.createElement("div"),g=a.container,as=g.parentNode,at=g.outerHTML,F=g.children,l=F.length,au=bX(),G=!1;e&&cf(),d&&(g.className+=" tns-vpfix");var av,f=a.autoWidth,r=b0("fixedWidth"),aw=b0("edgePadding"),ax=b0("gutter"),ay=b$(),az=b0("center"),aA=f?1:Math.floor(b0("items")),aB=b0("slideBy"),aC=a.viewportMax||a.fixedWidthViewportWidth,aD=b0("arrowKeys"),aE=b0("speed"),H=a.rewind,n=!H&&a.loop,aF=b0("autoHeight"),aG=b0("controls"),aH=b0("controlsText"),aI=b0("nav"),aJ=b0("touch"),aK=b0("mouseDrag"),aL=b0("autoplay"),aM=b0("autoplayTimeout"),aN=b0("autoplayText"),aO=b0("autoplayHoverPause"),aP=b0("autoplayResetOnVisibility"),aQ=createStyleSheet(null,b0("nonce")),aR=a.lazyload,aS=a.lazyloadSelector,aT=[],w=n?(m=function(){if(f||r&&!aC)return l-1;var c=r?"fixedWidth":"items",b=[];if((r||a[c]<l)&&b.push(a[c]),e)for(var g in e){var d=e[g][c];d&&(r||d<l)&&b.push(d)}return b.length||b.push(0),Math.ceil(r?aC/Math.min.apply(null,b):Math.max.apply(null,b))}(),j=d?Math.ceil((5*m-l)/2):4*m-l,j=Math.max(m,j),b_("edgePadding")?j+1:j):0,aU=d?l+2*w:l+w,aV=(!!r||!!f)&&!n,aW=r?cL():null,aX=!d||!n,I=k?"left":"top",s="",x="",J=r?function(){return az&&!n?l-1:Math.ceil(-aW/(r+ax))}:f?function(){for(var a=0;a<aU;a++)if(av[a]>= -aW)return a}:function(){return az&&d&&!n?l-1:n||d?Math.max(0,aU-Math.ceil(aA)):aU-1},K=bU(b0("startIndex")),aY=K;bT();var aZ,a$,a_=0,a0=f?null:J(),a1=a.preventActionWhenRunning,L=a.swipeAngle,a2=!L||"?",a3=!1,a4=a.onInit,M=new Events,a5=" tns-slider tns-"+a.mode,a6=g.id||getSlideId(),N=b0("disable"),a7=!1,O=a.freezable,P=!!O&&!f&&ce(),a8=!1,a9={click:cU,keydown:function(a){a=c0(a);var b=[_.LEFT,_.RIGHT].indexOf(a.keyCode);!(b>=0)||(0===b?bq.disabled||cU(a,-1):br.disabled||cU(a,1))}},ba={click:function(c){if(a3){if(a1)return;cT()}c=c0(c);for(var b,a=c1(c);a!==bv&&!hasAttr(a,"data-nav");)a=a.parentNode;if(hasAttr(a,"data-nav")){var b=bz=Number(getAttr(a,"data-nav")),d=r||f?b*l/bx:b*aA,e=bg?b:Math.min(Math.ceil(d),l-1);Y(e,c),V===b&&(bF&&cZ(),bz=-1)}},keydown:function(b){b=c0(b);var d=t.activeElement;if(hasAttr(d,"data-nav")){var c=[_.LEFT,_.RIGHT,_.ENTER,_.SPACE].indexOf(b.keyCode),a=Number(getAttr(d,"data-nav"));c>=0&&(0===c?a>0&&c_(bu[a-1]):1===c?a<bx-1&&c_(bu[a+1]):(bz=a,Y(a,b)))}}},bb={mouseover:function(){bF&&(cW(),bG=!0)},mouseout:function(){bG&&(cV(),bG=!1)}},bc={visibilitychange:function(){t.hidden?bF&&(cW(),bI=!0):bI&&(cV(),bI=!1)}},bd={keydown:function(a){a=c0(a);var b=[_.LEFT,_.RIGHT].indexOf(a.keyCode);b>=0&&cU(a,0===b?-1:1)}},be={touchstart:c5,touchmove:c6,touchend:c8,touchcancel:c8},bf={mousedown:c5,mousemove:c6,mouseup:c8,mouseleave:c8},Q=b_("controls"),R=b_("nav"),bg=!!f||a.navAsThumbnails,S=b_("autoplay"),T=b_("touch"),U=b_("mouseDrag"),bh="tns-slide-active",bi="tns-slide-cloned",bj="tns-complete",bk={load:function(a){cr(c1(a))},error:function(a){cs(c1(a))}},bl="force"===a.preventScrollOnTouch;if(Q)var bm,bn,bo=a.controlsContainer,bp=a.controlsContainer?a.controlsContainer.outerHTML:"",bq=a.prevButton,br=a.nextButton,bs=a.prevButton?a.prevButton.outerHTML:"",bt=a.nextButton?a.nextButton.outerHTML:"";if(R)var bu,bv=a.navContainer,bw=a.navContainer?a.navContainer.outerHTML:"",bx=f?l:da(),by=0,bz=-1,V=bW(),bA=V,bB="tns-nav-active",bC="Carousel Page ",bD=" (Current Slide)";if(S)var bE,bF,bG,bH,bI,bJ="forward"===a.autoplayDirection?1:-1,bK=a.autoplayButton,bL=a.autoplayButton?a.autoplayButton.outerHTML:"",bM=["<span class='tns-visually-hidden'>"," animation</span>"];if(T||U)var bN,bO,bP={},bQ={},bR=!1,bS=k?function(a,b){return a.x-b.x}:function(a,b){return a.y-b.y};function W(a){a&&(aG=aI=aJ=aK=aD=aL=aO=aP=!1)}function bT(){for(var a=d?K-w:K;a<0;)a+=l;return a%l+1}function bU(a){return a=a?Math.max(0,Math.min(n?l-1:l-aA,a)):0,d?a+w:a}function bV(a){for(null==a&&(a=K),d&&(a-=w);a<0;)a+=l;return Math.floor(a%l)}function bW(){var a,b=bV();return a=bg?b:r||f?Math.ceil((b+1)*bx/l-1):Math.floor(b/aA),!n&&d&&K===a0&&(a=bx-1),a}function bX(){return o.innerWidth||t.documentElement.clientWidth||t.body.clientWidth}function bY(a){return"top"===a?"afterbegin":"beforeend"}function bZ(a){if(null!=a){var c,d,b=t.createElement("div");return a.appendChild(b),d=(c=b.getBoundingClientRect()).right-c.left,b.remove(),d||bZ(a.parentNode)}}function b$(){return bZ(as)-(aw?2*aw-ax:0)}function b_(b){if(a[b])return!0;if(e){for(var c in e)if(e[c][b])return!0}return!1}function b0(b,f){if(null==f&&(f=au),"items"===b&&r)return Math.floor((ay+ax)/(r+ax))||1;var c=a[b];if(e)for(var g in e)f>=parseInt(g)&&b in e[g]&&(c=e[g][b]);return"slideBy"===b&&"page"===c&&(c=b0("items")),d||"slideBy"!==b&&"items"!==b||(c=Math.floor(c)),c}function b1(a,b,h,f,i){var c="";if(void 0!==a){var e=a;b&&(e-=b),c=k?"margin: 0 "+e+"px 0 "+a+"px;":"margin: "+a+"px 0 "+e+"px 0;"}else if(b&&!h){var g="-"+b+"px";c="margin: 0 "+(k?g+" 0 0":"0 "+g+" 0")+";"}return!d&&i&&A&&f&&(c+=b6(f)),c}function b2(a,c,b){return a?(a+c)*aU+"px":ab?ab+"("+100*aU+"% / "+b+")":100*aU/b+"%"}function b3(c,f,b){var a;if(c)a=c+f+"px";else{d||(b=Math.floor(b));var e=d?aU:b;a=ab?ab+"(100% / "+e+")":100/e+"%"}return a="width:"+a,"inner"!==aj?a+";":a+" !important;"}function b4(a){var b="";if(!1!==a){var c=k?"padding-":"margin-",d=k?"right":"bottom";b=c+d+": "+a+"px;"}return b}function b5(b,c){var a=b.substring(0,b.length-c).toLowerCase();return a&&(a="-"+a+"-"),a}function b6(a){return b5(A,18)+"transition-duration:"+a/1e3+"s;"}function b7(a){return b5(B,17)+"animation-duration:"+a/1e3+"s;"}function y(){if(b_("autoHeight")||f||!k){var a=g.querySelectorAll("img");forEach(a,function(a){var b=a.src;aR||(b&&0>b.indexOf("data:image")?(a.src="",addEvents(a,bk),addClass(a,"loading"),a.src=b):cr(a))}),raf(function(){cw(arrayFromNodeList(a),function(){aZ=!0})}),b_("autoHeight")&&(a=cu(K,Math.min(K+aA-1,aU-1))),aR?b8():raf(function(){cw(arrayFromNodeList(a),b8)})}else d&&cN(),ca(),cb()}function b8(){if(f&&l>1){var a=n?K:l-1;!function d(){var b=F[a].getBoundingClientRect().left,c=F[a-1].getBoundingClientRect().right;1>=Math.abs(b-c)?b9():setTimeout(function(){d()},16)}()}else b9()}function b9(){(!k||f)&&(cA(),f?(aW=cL(),O&&(P=ce()),a0=J(),W(N||P)):c9()),d&&cN(),ca(),cb()}function ca(){if(cB(),aq.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+co()+"</span>  of "+l+"</div>"),a$=aq.querySelector(".tns-liveregion .current"),S){var d=aL?"stop":"start";bK?setAttrs(bK,{"data-action":d}):a.autoplayButtonOutput&&(aq.insertAdjacentHTML(bY(a.autoplayPosition),'<button type="button" data-action="'+d+'">'+bM[0]+d+bM[1]+aN[0]+"</button>"),bK=aq.querySelector("[data-action]")),bK&&addEvents(bK,{click:c$}),aL&&(cY(),aO&&addEvents(g,bb),aP&&addEvents(g,bc))}if(R){if(bv)setAttrs(bv,{"aria-label":"Carousel Pagination"}),forEach(bu=bv.children,function(b,a){setAttrs(b,{"data-nav":a,tabindex:"-1","aria-label":bC+(a+1),"aria-controls":a6})});else{for(var b="",h=bg?"":'style="display:none"',c=0;c<l;c++)b+='<button type="button" data-nav="'+c+'" tabindex="-1" aria-controls="'+a6+'" '+h+' aria-label="'+bC+(c+1)+'"></button>';b='<div class="tns-nav" aria-label="Carousel Pagination">'+b+"</div>",aq.insertAdjacentHTML(bY(a.navPosition),b),bu=(bv=aq.querySelector(".tns-nav")).children}if(db(),A){var f=A.substring(0,A.length-18).toLowerCase(),e="transition: all "+aE/1e3+"s";f&&(e="-"+f+"-"+e),addCSSRule(aQ,"[aria-controls^="+a6+"-item]",e,getCssRulesLength(aQ))}setAttrs(bu[V],{"aria-label":bC+(V+1)+bD}),removeAttrs(bu[V],"tabindex"),addClass(bu[V],bB),addEvents(bv,ba)}Q&&(bo||bq&&br||(aq.insertAdjacentHTML(bY(a.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+a6+'">'+aH[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+a6+'">'+aH[1]+"</button></div>"),bo=aq.querySelector(".tns-controls")),bq&&br||(bq=bo.children[0],br=bo.children[1]),a.controlsContainer&&setAttrs(bo,{"aria-label":"Carousel Navigation",tabindex:"0"}),(a.controlsContainer||a.prevButton&&a.nextButton)&&setAttrs([bq,br],{"aria-controls":a6,tabindex:"-1"}),(a.controlsContainer||a.prevButton&&a.nextButton)&&(setAttrs(bq,{"data-controls":"prev"}),setAttrs(br,{"data-controls":"next"})),bm=cF(bq),bn=cF(br),cI(),bo?addEvents(bo,a9):(addEvents(bq,a9),addEvents(br,a9))),ch()}function cb(){if(d&&ag){var b={};b[ag]=cT,addEvents(g,b)}aJ&&addEvents(g,be,a.preventScrollOnTouch),aK&&addEvents(g,bf),aD&&addEvents(t,bd),"inner"===aj?M.on("outerResized",function(){cd(),M.emit("innerLoaded",Z())}):(e||r||f||aF||!k)&&addEvents(o,{resize:cc}),aF&&("outer"===aj?M.on("innerLoaded",cv):N||cv()),cq(),N?cl():P&&cj(),M.on("indexChanged",cx),"inner"===aj&&M.emit("innerLoaded",Z()),"function"==typeof a4&&a4(Z()),G=!0}function cc(a){raf(function(){cd(c0(a))})}function cd(i){if(G){"outer"===aj&&M.emit("outerResized",Z(i)),au=bX();var b,p=ap,c=!1;e&&(cf(),(b=p!==ap)&&M.emit("newBreakpointStart",Z(i)));var n,h,q=aA,s=N,u=P,v=aD,w=aG,x=aI,y=aJ,z=aK,A=aL,B=aO,C=aP,D=K;if(b){var E=r,F=aF,H=aH,I=az,j=aN;if(!ad)var L=ax,Q=aw}if(aD=b0("arrowKeys"),aG=b0("controls"),aI=b0("nav"),aJ=b0("touch"),az=b0("center"),aK=b0("mouseDrag"),aL=b0("autoplay"),aO=b0("autoplayHoverPause"),aP=b0("autoplayResetOnVisibility"),b&&(N=b0("disable"),r=b0("fixedWidth"),aE=b0("speed"),aF=b0("autoHeight"),aH=b0("controlsText"),aN=b0("autoplayText"),aM=b0("autoplayTimeout"),ad||(aw=b0("edgePadding"),ax=b0("gutter"))),W(N),ay=b$(),k&&!f||N||(cA(),k||(c9(),c=!0)),(r||f)&&(aW=cL(),a0=J()),(b||r)&&(aA=b0("items"),aB=b0("slideBy"),h=aA!==q,h&&(r||f||(a0=J()),cg())),b&&N!==s&&(N?cl():cm()),O&&(b||r||f)&&(P=ce())!==u&&(P?(cO(cM(bU(0))),cj()):(ck(),c=!0)),W(N||P),aL||(aO=aP=!1),aD!==v&&(aD?addEvents(t,bd):removeEvents(t,bd)),aG!==w&&(aG?bo?showElement(bo):(bq&&showElement(bq),br&&showElement(br)):bo?hideElement(bo):(bq&&hideElement(bq),br&&hideElement(br))),aI!==x&&(aI?(showElement(bv),db()):hideElement(bv)),aJ!==y&&(aJ?addEvents(g,be,a.preventScrollOnTouch):removeEvents(g,be)),aK!==z&&(aK?addEvents(g,bf):removeEvents(g,bf)),aL===A||(aL?(bK&&showElement(bK),bF||bH||cY()):(bK&&hideElement(bK),bF&&cZ())),aO!==B&&(aO?addEvents(g,bb):removeEvents(g,bb)),aP!==C&&(aP?addEvents(t,bc):removeEvents(t,bc)),b){if((r!==E||az!==I)&&(c=!0),aF===F||aF||(ar.style.height=""),aG&&aH!==H&&(bq.innerHTML=aH[0],br.innerHTML=aH[1]),bK&&aN!==j){var l=aL?1:0,m=bK.innerHTML,o=m.length-j[l].length;m.substring(o)===j[l]&&(bK.innerHTML=m.substring(0,o)+aN[l])}}else az&&(r||f)&&(c=!0);if((h||r&&!f)&&(bx=da(),db()),(n=K!==D)?(M.emit("indexChanged",Z()),c=!0):h?n||cx():(r||f)&&(cq(),cB(),cn()),h&&!d&&cC(),!N&&!P){if(b&&!ad&&((aw!==Q||ax!==L)&&(ar.style.cssText=b1(aw,ax,r,aE,aF)),k)){d&&(g.style.width=b2(r,ax,aA));var R=b3(r,ax,aA)+b4(ax);removeCSSRule(aQ,getCssRulesLength(aQ)-1),addCSSRule(aQ,"#"+a6+" > .tns-item",R,getCssRulesLength(aQ))}aF&&cv(),c&&(cN(),aY=K)}b&&M.emit("newBreakpointEnd",Z(i))}}function ce(){if(!r&&!f){var b=az?aA-(aA-1)/2:aA;return l<=b}var c=r?(r+ax)*l:av[l],a=aw?ay+2*aw:ay+ax;return az&&(a-=r?(ay-r)/2:(ay-(av[K+1]-av[K]-ax))/2),c<=a}function cf(){for(var a in ap=0,e)a=parseInt(a),au>=a&&(ap=a)}f||W(N||P),p&&(I=p,s="translate",z?(s+=k?"3d(":"3d(0px, ",x=k?", 0px, 0px)":", 0px)"):(s+=k?"X(":"Y(",x=")")),d&&(g.className=g.className.replace("tns-vpfix","")),function(){if(b_("gutter"),aq.className="tns-outer",ar.className="tns-inner",aq.id=a6+"-ow",ar.id=a6+"-iw",""===g.id&&(g.id=a6),a5+=ac||f?" tns-subpixel":" tns-no-subpixel",a5+=ab?" tns-calc":" tns-no-calc",f&&(a5+=" tns-autowidth"),a5+=" tns-"+a.axis,g.className+=a5,d?((ao=t.createElement("div")).id=a6+"-mw",ao.className="tns-ovh",aq.appendChild(ao),ao.appendChild(ar)):aq.appendChild(ar),aF){var k=ao||ar;k.className+=" tns-ah"}if(as.insertBefore(aq,g),ar.appendChild(g),forEach(F,function(a,b){addClass(a,"tns-item"),a.id||(a.id=a6+"-item"+b),!d&&an&&addClass(a,an),setAttrs(a,{"aria-hidden":"true",tabindex:"-1"})}),w){for(var h=t.createDocumentFragment(),b=t.createDocumentFragment(),i=w;i--;){var j=i%l,c=F[j].cloneNode(!0);if(addClass(c,bi),removeAttrs(c,"id"),b.insertBefore(c,b.firstChild),d){var e=F[l-1-j].cloneNode(!0);addClass(e,bi),removeAttrs(e,"id"),h.appendChild(e)}}g.insertBefore(h,g.firstChild),g.appendChild(b),F=g.children}}(),function(){if(!d)for(var n=K,w=K+Math.min(l,aA);n<w;n++){var q=F[n];q.style.left=(n-K)*100/aA+"%",addClass(q,ak),removeClass(q,an)}if(k&&(ac||f?(addCSSRule(aQ,"#"+a6+" > .tns-item","font-size:"+o.getComputedStyle(F[0]).fontSize+";",getCssRulesLength(aQ)),addCSSRule(aQ,"#"+a6,"font-size:0;",getCssRulesLength(aQ))):d&&forEach(F,function(b,c){var a;b.style.marginLeft=(a=c,ab?ab+"("+100*a+"% / "+aU+")":100*a/aU+"%")})),ad){if(A){var b=ao&&a.autoHeight?b6(a.speed):"";addCSSRule(aQ,"#"+a6+"-mw",b,getCssRulesLength(aQ))}b=b1(a.edgePadding,a.gutter,a.fixedWidth,a.speed,a.autoHeight),addCSSRule(aQ,"#"+a6+"-iw",b,getCssRulesLength(aQ)),d&&(b=k&&!f?"width:"+b2(a.fixedWidth,a.gutter,a.items)+";":"",A&&(b+=b6(aE)),addCSSRule(aQ,"#"+a6,b,getCssRulesLength(aQ))),b=k&&!f?b3(a.fixedWidth,a.gutter,a.items):"",a.gutter&&(b+=b4(a.gutter)),!d&&(A&&(b+=b6(aE)),B&&(b+=b7(aE))),b&&addCSSRule(aQ,"#"+a6+" > .tns-item",b,getCssRulesLength(aQ))}else{cy(),ar.style.cssText=b1(aw,ax,r,aF),d&&k&&!f&&(g.style.width=b2(r,ax,aA));var b=k&&!f?b3(r,ax,aA):"";ax&&(b+=b4(ax)),b&&addCSSRule(aQ,"#"+a6+" > .tns-item",b,getCssRulesLength(aQ))}if(e&&ad)for(var h in e){var c=e[h=parseInt(h)],b="",t="",u="",j="",i="",v=f?null:b0("items",h),s=b0("fixedWidth",h),m=b0("speed",h),x=b0("edgePadding",h),y=b0("autoHeight",h),p=b0("gutter",h);A&&ao&&b0("autoHeight",h)&&"speed"in c&&(t="#"+a6+"-mw{"+b6(m)+"}"),("edgePadding"in c||"gutter"in c)&&(u="#"+a6+"-iw{"+b1(x,p,s,m,y)+"}"),d&&k&&!f&&("fixedWidth"in c||"items"in c||r&&"gutter"in c)&&(j="width:"+b2(s,p,v)+";"),A&&"speed"in c&&(j+=b6(m)),j&&(j="#"+a6+"{"+j+"}"),("fixedWidth"in c||r&&"gutter"in c|| !d&&"items"in c)&&(i+=b3(s,p,v)),"gutter"in c&&(i+=b4(p)),!d&&"speed"in c&&(A&&(i+=b6(m)),B&&(i+=b7(m))),i&&(i="#"+a6+" > .tns-item{"+i+"}"),(b=t+u+j+i)&&aQ.insertRule("@media (min-width: "+h/16+"em) {"+b+"}",aQ.cssRules.length)}}(),y();var cg=n?d?function(){var b=a_,a=a0;b+=aB,a-=aB,aw?(b+=1,a-=1):r&&(ay+ax)%(r+ax)&&(a-=1),w&&(K>a?K-=l:K<b&&(K+=l))}:function(){if(K>a0)for(;K>=a_+l;)K-=l;else if(K<a_)for(;K<=a0-l;)K+=l}:function(){K=Math.max(a_,Math.min(a0,K))};function ch(){!aL&&bK&&hideElement(bK),!aI&&bv&&hideElement(bv),!aG&&(bo?hideElement(bo):(bq&&hideElement(bq),br&&hideElement(br)))}function ci(){aL&&bK&&showElement(bK),aI&&bv&&showElement(bv),aG&&(bo?showElement(bo):(bq&&showElement(bq),br&&showElement(br)))}function cj(){if(!a8){if(aw&&(ar.style.margin="0px"),w)for(var b="tns-transparent",a=w;a--;)d&&addClass(F[a],b),addClass(F[aU-a-1],b);ch(),a8=!0}}function ck(){if(a8){if(aw&&ad&&(ar.style.margin=""),w)for(var b="tns-transparent",a=w;a--;)d&&removeClass(F[a],b),removeClass(F[aU-a-1],b);ci(),a8=!1}}function cl(){if(!a7){if(aQ.disabled=!0,g.className=g.className.replace(a5.substring(1),""),removeAttrs(g,["style"]),n)for(var a=w;a--;)d&&hideElement(F[a]),hideElement(F[aU-a-1]);if(k&&d||removeAttrs(ar,["style"]),!d)for(var b=K,e=K+l;b<e;b++){var c=F[b];removeAttrs(c,["style"]),removeClass(c,ak),removeClass(c,an)}ch(),a7=!0}}function cm(){if(a7){if(aQ.disabled=!1,g.className+=a5,cN(),n)for(var b=w;b--;)d&&showElement(F[b]),showElement(F[aU-b-1]);if(!d)for(var a=K,e=K+l;a<e;a++){var c=F[a],f=a<K+aA?ak:an;c.style.left=(a-K)*100/aA+"%",addClass(c,f)}ci(),a7=!1}}function cn(){var a=co();a$.innerHTML!==a&&(a$.innerHTML=a)}function co(){var b=cp(),a=b[0]+1,c=b[1]+1;return a===c?a+"":a+" to "+c}function cp(c){null==c&&(c=cM());var a,d,e,b=K;if(az||aw?(f||r)&&(e=(d=-(parseFloat(c)+aw))+ay+2*aw):f&&(e=(d=av[K])+ay),f)av.forEach(function(f,c){c<aU&&((az||aw)&&f<=d+.5&&(b=c),e-f>=.5&&(a=c))});else{if(r){var g=r+ax;az||aw?(b=Math.floor(d/g),a=Math.ceil(e/g-1)):a=b+Math.ceil(ay/g)-1}else if(az||aw){var h=aA-1;if(az?(b-=h/2,a=K+h/2):a=K+h,aw){var i=aw*aA/ay;b-=i,a+=i}b=Math.floor(b),a=Math.ceil(a)}else a=b+aA-1;b=Math.max(b,0),a=Math.min(a,aU-1)}return[b,a]}function cq(){if(aR&&!N){var a=cp();a.push(aS),cu.apply(null,a).forEach(function(a){if(!hasClass(a,bj)){var b={};b[ag]=function(a){a.stopPropagation()},addEvents(a,b),addEvents(a,bk),a.src=getAttr(a,"data-src");var c=getAttr(a,"data-srcset");c&&(a.srcset=c),addClass(a,"loading")}})}}function cr(a){addClass(a,"loaded"),ct(a)}function cs(a){addClass(a,"failed"),ct(a)}function ct(a){addClass(a,bj),removeClass(a,"loading"),removeEvents(a,bk)}function cu(a,c,b){var d=[];for(b||(b="img");a<=c;)forEach(F[a].querySelectorAll(b),function(a){d.push(a)}),a++;return d}function cv(){var a=cu.apply(null,cp());raf(function(){cw(a,X)})}function cw(a,b){return aZ?b():(a.forEach(function(b,c){!aR&&b.complete&&ct(b),hasClass(b,bj)&&a.splice(c,1)}),a.length)?void raf(function(){cw(a,b)}):b()}function cx(){cq(),cB(),cn(),cI(),cD()}function cy(){d&&aF&&(ao.style[A]=aE/1e3+"s")}function cz(b,d){for(var c=[],a=b,e=Math.min(b+d,aU);a<e;a++)c.push(F[a].offsetHeight);return Math.max.apply(null,c)}function X(){var a=aF?cz(K,aA):cz(w,l),b=ao||ar;b.style.height!==a&&(b.style.height=a+"px")}function cA(){av=[0];var a=k?"left":"top",b=k?"right":"bottom",c=F[0].getBoundingClientRect()[a];forEach(F,function(d,e){e&&av.push(d.getBoundingClientRect()[a]-c),e===aU-1&&av.push(d.getBoundingClientRect()[b]-c)})}function cB(){var a=cp(),b=a[0],c=a[1];forEach(F,function(a,d){d>=b&&d<=c?hasAttr(a,"aria-hidden")&&(removeAttrs(a,["aria-hidden","tabindex"]),addClass(a,bh)):hasAttr(a,"aria-hidden")||(setAttrs(a,{"aria-hidden":"true",tabindex:"-1"}),removeClass(a,bh))})}function cC(){for(var c=K+Math.min(l,aA),b=aU;b--;){var a=F[b];b>=K&&b<c?(addClass(a,"tns-moving"),a.style.left=(b-K)*100/aA+"%",addClass(a,ak),removeClass(a,an)):a.style.left&&(a.style.left="",addClass(a,an),removeClass(a,ak)),removeClass(a,al)}setTimeout(function(){forEach(F,function(a){removeClass(a,"tns-moving")})},300)}function cD(){if(aI&&(V=bz>=0?bz:bW(),bz=-1,V!==bA)){var b=bu[bA],a=bu[V];setAttrs(b,{tabindex:"-1","aria-label":bC+(bA+1)}),removeClass(b,bB),setAttrs(a,{"aria-label":bC+(V+1)+bD}),removeAttrs(a,"tabindex"),addClass(a,bB),bA=V}}function cE(a){return a.nodeName.toLowerCase()}function cF(a){return"button"===cE(a)}function cG(a){return"true"===a.getAttribute("aria-disabled")}function cH(c,a,b){c?a.disabled=b:a.setAttribute("aria-disabled",b.toString())}function cI(){if(aG&&!H&&!n){var a=bm?bq.disabled:cG(bq),b=bn?br.disabled:cG(br),c=K<=a_,d=!H&&K>=a0;c&&!a&&cH(bm,bq,!0),!c&&a&&cH(bm,bq,!1),d&&!b&&cH(bn,br,!0),!d&&b&&cH(bn,br,!1)}}function cJ(a,b){A&&(a.style[A]=b)}function cK(a){return null==a&&(a=K),f?(ay-(aw?ax:0)-(av[a+1]-av[a]-ax))/2:r?(ay-r)/2:(aA-1)/2}function cL(){var a=ay+(aw?ax:0)-(r?(r+ax)*aU:av[aU]);return az&&!n&&(a=r?-(r+ax)*(aU-1)-cK():cK(aU-1)-av[aU-1]),a>0&&(a=0),a}function cM(a){if(null==a&&(a=K),k&&!f){if(r)b=-(r+ax)*a,az&&(b+=cK());else{var b,c=p?aU:aA;az&&(a-=cK()),b=-(100*a)/c}}else b=-av[a],az&&f&&(b+=cK());return aV&&(b=Math.max(b,aW)),b+=!k||f||r?"px":"%"}function cN(a){cJ(g,"0s"),cO(a)}function cO(a){null==a&&(a=cM()),g.style[I]=s+a+x}function cP(c,f,g,e){var d=c+aA;n||(d=Math.min(d,aU));for(var b=c;b<d;b++){var a=F[b];e||(a.style.left=(b-K)*100/aA+"%"),am&&ae&&(a.style[ae]=a.style[af]=am*(b-c)/1e3+"s"),removeClass(a,f),addClass(a,g),e&&aT.push(a)}}var cQ=d?function(){cJ(g,""),A||!aE?(cO(),aE&&isVisible(g)||cT()):jsTransform(g,I,s,x,cM(),aE,cT),k||c9()}:function(){aT=[];var a={};a[ag]=a[ah]=cT,removeEvents(F[aY],a),addEvents(F[K],a),cP(aY,ak,al,!0),cP(K,an,ak),ag&&ah&&aE&&isVisible(g)||cT()};function cR(a,b){aX&&cg(),(K!==aY||b)&&(M.emit("indexChanged",Z()),M.emit("transitionStart",Z()),aF&&cv(),bF&&a&&["click","keydown"].indexOf(a.type)>=0&&cZ(),a3=!0,cQ())}function cS(a){return a.toLowerCase().replace(/-/g,"")}function cT(a){if(d||a3){if(M.emit("transitionEnd",Z(a)),!d&&aT.length>0)for(var c=0;c<aT.length;c++){var b=aT[c];b.style.left="",af&&ae&&(b.style[af]="",b.style[ae]=""),removeClass(b,al),addClass(b,an)}if(!a|| !d&&a.target.parentNode===g||a.target===g&&cS(a.propertyName)===cS(I)){if(!aX){var e=K;cg(),K!==e&&(M.emit("indexChanged",Z()),cN())}"inner"===aj&&M.emit("innerLoaded",Z()),a3=!1,aY=K}}}function Y(a,c){if(!P){if("prev"===a)cU(c,-1);else if("next"===a)cU(c,1);else{if(a3){if(a1)return;cT()}var e=bV(),b=0;if("first"===a?b=-e:"last"===a?b=d?l-aA-e:l-1-e:("number"!=typeof a&&(a=parseInt(a)),isNaN(a)||(c||(a=Math.max(0,Math.min(l-1,a))),b=a-e)),!d&&b&&Math.abs(b)<aA){var f=b>0?1:-1;b+=K+b-l>=a_?l*f:-(2*l*f*1)}K+=b,d&&n&&(K<a_&&(K+=l),K>a0&&(K-=l)),bV(K)!==bV(aY)&&cR(c)}}}function cU(a,b){if(a3){if(a1)return;cT()}if(!b){a=c0(a);for(var d,c=c1(a);c!==bo&&0>[bq,br].indexOf(c);)c=c.parentNode;var e=[bq,br].indexOf(c);e>=0&&(d=!0,b=0===e?-1:1)}if(H){if(K===a_&& -1===b){Y("last",a);return}if(K===a0&&1===b){Y("first",a);return}}b&&(K+=aB*b,f&&(K=Math.floor(K)),cR(d||a&&"keydown"===a.type?a:null))}function cV(){bE=setInterval(function(){cU(null,bJ)},aM),bF=!0}function cW(){clearInterval(bE),bF=!1}function cX(a,b){setAttrs(bK,{"data-action":a}),bK.innerHTML=bM[0]+a+bM[1]+b}function cY(){cV(),bK&&cX("stop",aN[1])}function cZ(){cW(),bK&&cX("start",aN[0])}function c$(){bF?(cZ(),bH=!0):(cY(),bH=!1)}function c_(a){a.focus()}function c0(a){return c2(a=a||o.event)?a.changedTouches[0]:a}function c1(a){return a.target||o.event.srcElement}function c2(a){return a.type.indexOf("touch")>=0}function c3(a){a.preventDefault?a.preventDefault():a.returnValue=!1}function c4(){return getTouchDirection(toDegree(bQ.y-bP.y,bQ.x-bP.x),L)===a.axis}function c5(a){if(a3){if(a1)return;cT()}aL&&bF&&cW(),bR=!0,bO&&(caf(bO),bO=null);var $=c0(a);M.emit(c2(a)?"touchStart":"dragStart",Z(a)),!c2(a)&&["img","a"].indexOf(cE(c1(a)))>=0&&c3(a),bQ.x=bP.x=$.clientX,bQ.y=bP.y=$.clientY,d&&(bN=parseFloat(g.style[I].replace(s,"")),cJ(g,"0s"))}function c6(a){if(bR){var $=c0(a);bQ.x=$.clientX,bQ.y=$.clientY,d?bO||(bO=raf(function(){c7(a)})):("?"===a2&&(a2=c4()),a2&&(bl=!0)),("boolean"!=typeof a.cancelable||a.cancelable)&&bl&&a.preventDefault()}}function c7(b){if(!a2){bR=!1;return}if(caf(bO),bR&&(bO=raf(function(){c7(b)})),"?"===a2&&(a2=c4()),a2){!bl&&c2(b)&&(bl=!0);try{b.type&&M.emit(c2(b)?"touchMove":"dragMove",Z(b))}catch(d){}var a=bN,c=bS(bQ,bP);!k||r||f?(a+=c,a+="px"):(a+=p?c*aA*100/((ay+ax)*aU):100*c/(ay+ax),a+="%"),g.style[I]=s+a+x}}function c8(b){if(bR){bO&&(caf(bO),bO=null),d&&cJ(g,""),bR=!1;var $=c0(b);bQ.x=$.clientX,bQ.y=$.clientY;var c=bS(bQ,bP);if(Math.abs(c)){if(!c2(b)){var e=c1(b);addEvents(e,{click:function a(b){c3(b),removeEvents(e,{click:a})}})}d?bO=raf(function(){if(k&&!f){var d=-c*aA/(ay+ax);d=c>0?Math.floor(d):Math.ceil(d),K+=d}else{var e=-(bN+c);if(e<=0)K=a_;else if(e>=av[aU-1])K=a0;else for(var a=0;a<aU&&e>=av[a];)K=a,e>av[a]&&c<0&&(K+=1),a++}cR(b,c),M.emit(c2(b)?"touchEnd":"dragEnd",Z(b))}):a2&&cU(b,c>0?-1:1)}}"auto"===a.preventScrollOnTouch&&(bl=!1),L&&(a2="?"),aL&&!bF&&cV()}function c9(){(ao||ar).style.height=av[K+aA]-av[K]+"px"}function da(){return Math.min(Math.ceil(r?(r+ax)*l/ay:l/aA),l)}function db(){if(aI&&!bg&&bx!==by){var a=by,b=bx,c=showElement;for(by>bx&&(a=bx,b=by,c=hideElement);a<b;)c(bu[a]),a++;by=bx}}function Z(a){return{container:g,slideItems:F,navContainer:bv,navItems:bu,controlsContainer:bo,hasControls:Q,prevButton:bq,nextButton:br,items:aA,slideBy:aB,cloneCount:w,slideCount:l,slideCountNew:aU,index:K,indexCached:aY,displayIndex:bT(),navCurrentIndex:V,navCurrentIndexCached:bA,pages:bx,pagesCached:by,sheet:aQ,isOn:G,event:a||{}}}return{version:"2.9.4",getInfo:Z,events:M,goTo:Y,play:function(){aL&&!bF&&(cY(),bH=!1)},pause:function(){bF&&(cZ(),bH=!0)},isOn:G,updateSliderHeight:X,refresh:y,destroy:function(){if(aQ.disabled=!0,aQ.ownerNode&&aQ.ownerNode.remove(),removeEvents(o,{resize:cc}),aD&&removeEvents(t,bd),bo&&removeEvents(bo,a9),bv&&removeEvents(bv,ba),removeEvents(g,bb),removeEvents(g,bc),bK&&removeEvents(bK,{click:c$}),aL&&clearInterval(bE),d&&ag){var b={};b[ag]=cT,removeEvents(g,b)}aJ&&removeEvents(g,be),aK&&removeEvents(g,bf);var e=[at,bp,bs,bt,bw,bL];for(var c in D.forEach(function(c,f){var b="container"===c?aq:a[c];if("object"==typeof b&&b){var d=!!b.previousElementSibling&&b.previousElementSibling,g=b.parentNode;b.outerHTML=e[f],a[c]=d?d.nextElementSibling:g.firstElementChild}}),D=ak=al=am=an=k=aq=ar=g=as=at=F=l=ap=au=f=r=aw=ax=ay=aA=aB=aC=aD=aE=H=n=aF=aQ=aR=av=aT=w=aU=aV=aW=aX=I=s=x=J=K=aY=a_=a0=L=a2=a3=a4=M=a5=a6=N=a7=O=P=a8=a9=ba=bb=bc=bd=be=bf=Q=R=bg=S=T=U=bh=bj=bk=aZ=aG=aH=bo=bp=bq=br=bm=bn=aI=bv=bw=bu=bx=by=bz=V=bA=bB=bC=bD=aL=aM=bJ=aN=aO=bK=bL=aP=bM=bE=bF=bG=bH=bI=bP=bQ=bN=bR=bO=bS=aJ=aK=null,this)"rebuild"!==c&&(this[c]=null);G=!1},rebuild:function(){return tns(extend(a,ai))}}};exports.tns=tns


/*
	Importem la llibreria per manipular dates
*/
import date from 'date-and-time';

/*
	Importem un arxiu json amb el llistat de vídeos amb títol, id de Youtube i data d'enregistrament
*/
import * as data from './videos.json';

/*
	A la home mirem si està definit el selector my-slider i si és així fem la crida a l'slider
	amb els seus paràmetres de configuració
*/
if(document.querySelector('.my-slider')){
	var slider = tns({
		container: '.my-slider',
		items: 1,
		slideBy: 'page',
		autoplay: true,
		speed: 2500,
		autoplayTimeout: 7000,
		nav: true,
		navPosition: "bottom",
		controls: false,
		autoplayButtonOutput: false,
		lazyload: false,
		mode: "gallery"//"carousel" or "gallery"
	});
}

/*
	Funció orderVideos que utilitzarem a la pàgina de vídeos per ordenar les dades que tenim al json videos.json

	Params:
	- field:string -> title|date
	- order:string -> asc|desc

	Return: array

	Utilitzem una funció Arrow de ES6 per fer un array sort ja sigui segons la data, en cas que el camp sigui 'date'
	o bé segons el títol, si el camp és 'title'.

	Les funcions Arrow tenen el format següent:

	const x = (x, y) => x * y;

	i Babel el transformarà a format ES5 a producció:

	"use strict";

	var x = function x(_x, y) {
	  return _x * y;
	};

*/
function orderVideos(field = 'date', order = 'asc'){
	let result;

	if (field == 'date') {
		switch (order) {
			case 'asc':
				result = data.sort((a,b)=> new Date(a.date).getTime() - new Date(b.date).getTime());
				break;
			default:
				result = data.sort((a,b)=> new Date(b.date).getTime() - new Date(a.date).getTime());
		}
	}

	if (field == 'title') {
		switch (order) {
			case 'asc':
				result = data.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
				break;
			default:
				result = data.sort((a,b) => (b.title > a.title) ? 1 : ((a.title > b.title) ? -1 : 0))
		}
	}

	return result;
}

/*
	Funció renderVideosBy que utilitzarem a la pàgina de vídeos per fer un render del contingut 
	de la llista desordenada (<ul>)

	Params:
	- field:string -> title|date
	- order:string -> asc|desc

	Return: html

	La funció obté primer un array ambels vídeos en l'ordre que s'ha triat i construeix els elements <li>
	amb el seu contingut (iframe i paràgraf amb titol i data) i els afegeix al node <ul class='new-videos'> amb
	un append.
*/
function renderVideosBy(field = 'date', order = 'asc'){
	let pageVideos = document.querySelector('.new-videos');

	while (pageVideos.hasChildNodes()) {
		pageVideos.removeChild(pageVideos.firstChild);
	}

	let videos = orderVideos(field,order);

	let nodes = videos.map(video => {
		const videoDate = new Date(video.date);
		const formattedDate = date.format(videoDate, 'DD/MM/YYYY'); 

		let li = document.createElement('li');
		/*
		li.innerHTML= `
		<iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/` + video.yt_id + `" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		<p>` + video.title + ` <time datetime="` + video.date + `">` + formattedDate + `</time></p>`;
		*/

		li.innerHTML= `
		<youtube-lite video="` + video.yt_id + `"></youtube-lite>
		<p>` + video.title + ` <time datetime="` + video.date + `">` + formattedDate + `</time></p>`;		
		return li;
	});

	return pageVideos.append(...nodes);
}

/*
	Si tenim el selector 'new-videos' (perquè estem a la pàgina de vídeos) fem el render inicial del llistat.

	Escoltem també l'event 'change' d'un select per triar una nova ordenació
*/
if(document.querySelector('.new-videos')){
	renderVideosBy('title', 'asc');

	const selectOrderElement = document.querySelector('#order-select');

	selectOrderElement.addEventListener('change', (event) => {
		let optionValue = event.target.value;
		let fieldValue, orderValue = "";
		
		switch (optionValue) {
			case 'titleasc':
				fieldValue = 'title';
				orderValue = 'asc';
				break;
			case 'titledesc':
				fieldValue = 'title';
				orderValue = 'desc';
				break;
			case 'dateasc':
				fieldValue = 'date';
				orderValue = 'asc';
				break;
			case 'datedesc':
				fieldValue = 'date';
				orderValue = 'desc';
				break;
		}
		
		renderVideosBy(fieldValue, orderValue);
	});
}


let header = document.querySelector('header');

window.addEventListener('scroll', function() {
	if(document.documentElement.scrollTop + window.innerHeight > document.body.clientHeight - 100) {
		header.classList.add("hidden");
	}else{
		header.classList.remove("hidden");
	}
});

if(document.querySelector('.soundcloud-wrapper')){
	let soundcloudWrappper = document.querySelector('.soundcloud-wrapper');

	const soundcloudElement = document.querySelector('.soundcloud-player');

	soundcloudElement.addEventListener('click', (event) => {
		soundcloudWrappper.innerHTML= `
		<iframe width="907" height="166" allow="autoplay" src="` + soundcloudWrappper.getAttribute('data-sndcld-url') + `" loading="lazy"></iframe>`;		
	});
}