!function($,t,n){$.fn.responsiveSlides=function(a){var e=$.extend({auto:!0,speed:500,timeout:4e3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!0,prevText:"Previous",nextText:"Next",maxwidth:"",navContainer:"",manualControls:"",namespace:"rslides",before:$.noop,after:$.noop},a);return this.each(function(){n++;var s=$(this),o,i,r,l,u,c,f=0,d=s.children(),p=d.length,h=parseFloat(e.speed),v=parseFloat(e.timeout),m=parseFloat(e.maxwidth),C=e.namespace,x=C+n,y=C+"_nav "+x+"_nav",b=C+"_here",g=x+"_on",w=x+"_s",_=$("<ul class='"+C+"_tabs "+x+"_tabs' />"),I={float:"left",position:"relative",opacity:1,zIndex:2},q={float:"none",position:"absolute",opacity:0,zIndex:1},z=function(){var t=document.body||document.documentElement,n=t.style,a="transition";if("string"==typeof n[a])return!0;o=["Moz","Webkit","Khtml","O","ms"],a=a.charAt(0).toUpperCase()+a.substr(1);var e;for(e=0;e<o.length;e++)if("string"==typeof n[o[e]+a])return!0;return!1}(),T=function(t){e.before(t),z?(d.removeClass(g).css(q).eq(t).addClass(g).css(I),f=t,setTimeout(function(){e.after(t)},h)):d.stop().fadeOut(h,function(){$(this).removeClass(g).css(q).css("opacity",1)}).eq(t).fadeIn(h,function(){$(this).addClass(g).css(I),e.after(t),f=t})};if(e.random&&(d.sort(function(){return Math.round(Math.random())-.5}),s.empty().append(d)),d.each(function(t){this.id=w+t}),s.addClass(C+" "+x),a&&a.maxwidth&&s.css("max-width",m),d.hide().css(q).eq(0).addClass(g).css(I).show(),z&&d.show().css({"-webkit-transition":"opacity "+h+"ms ease-in-out","-moz-transition":"opacity "+h+"ms ease-in-out","-o-transition":"opacity "+h+"ms ease-in-out",transition:"opacity "+h+"ms ease-in-out"}),d.length>1){if(v<h+100)return;if(e.pager&&!e.manualControls){var k=[];d.each(function(t){var n=t+1;k+="<li><a href='#' class='"+w+n+"'>"+n+"</a></li>"}),_.append(k),a.navContainer?$(e.navContainer).append(_):s.after(_)}if(e.manualControls&&(_=$(e.manualControls),_.addClass(C+"_tabs "+x+"_tabs")),(e.pager||e.manualControls)&&_.find("li").each(function(t){$(this).addClass(w+(t+1))}),(e.pager||e.manualControls)&&(c=_.find("a"),i=function(t){c.closest("li").removeClass(b).eq(t).addClass(b)}),e.auto&&(r=function(){u=setInterval(function(){d.stop(!0,!0);var t=f+1<p?f+1:0;(e.pager||e.manualControls)&&i(t),T(t)},v)})(),l=function(){e.auto&&(clearInterval(u),r())},e.pause&&s.hover(function(){clearInterval(u)},function(){l()}),(e.pager||e.manualControls)&&(c.bind("click",function(t){t.preventDefault(),e.pauseControls||l();var n=c.index(this);f===n||$("."+g).queue("fx").length||(i(n),T(n))}).eq(0).closest("li").addClass(b),e.pauseControls&&c.hover(function(){clearInterval(u)},function(){l()})),e.nav){var F="<a href='#' class='"+y+" prev'>"+e.prevText+"</a><a href='#' class='"+y+" next'>"+e.nextText+"</a>";a.navContainer?$(e.navContainer).append(F):s.after(F);var M=$("."+x+"_nav"),D=M.filter(".prev");M.bind("click",function(t){t.preventDefault();var n=$("."+g);if(!n.queue("fx").length){var a=d.index(n),s=a-1,o=a+1<p?f+1:0;T($(this)[0]===D[0]?s:o),(e.pager||e.manualControls)&&i($(this)[0]===D[0]?s:o),e.pauseControls||l()}}),e.pauseControls&&M.hover(function(){clearInterval(u)},function(){l()})}}if("undefined"==typeof document.body.style.maxWidth&&a.maxwidth){var O=function(){s.css("width","100%"),s.width()>m&&s.css("width",m)};O(),$(t).bind("resize",function(){O()})}})}}(jQuery,this,0);