/**
 * Navigation Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
!function($,t,e,s){"use strict";var i=function(t){this._core=t,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":$.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+$(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":$.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,0,this._templates.pop())},this),"remove.owl.carousel":$.proxy(function(t){t.namespace&&this._core.settings.dotsData&&this._templates.splice(t.position,1)},this),"changed.owl.carousel":$.proxy(function(t){t.namespace&&"position"==t.property.name&&this.draw()},this),"initialized.owl.carousel":$.proxy(function(t){t.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":$.proxy(function(t){t.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=$.extend({},i.Defaults,this._core.options),this.$element.on(this._handlers)};i.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},i.prototype.initialize=function(){var t,e=this._core.settings;this._controls.$relative=(e.navContainer?$(e.navContainer):$("<div>").addClass(e.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=$("<"+e.navElement+">").addClass(e.navClass[0]).html(e.navText[0]).prependTo(this._controls.$relative).on("click",$.proxy(function(t){this.prev(e.navSpeed)},this)),this._controls.$next=$("<"+e.navElement+">").addClass(e.navClass[1]).html(e.navText[1]).appendTo(this._controls.$relative).on("click",$.proxy(function(t){this.next(e.navSpeed)},this)),e.dotsData||(this._templates=[$("<div>").addClass(e.dotClass).append($("<span>")).prop("outerHTML")]),this._controls.$absolute=(e.dotsContainer?$(e.dotsContainer):$("<div>").addClass(e.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",$.proxy(function(t){var s=$(t.target).parent().is(this._controls.$absolute)?$(t.target).index():$(t.target).parent().index();t.preventDefault(),this.to(s,e.dotsSpeed)},this));for(t in this._overrides)this._core[t]=$.proxy(this[t],this)},i.prototype.destroy=function(){var t,e,s,i;for(t in this._handlers)this.$element.off(t,this._handlers[t]);for(e in this._controls)this._controls[e].remove();for(i in this.overides)this._core[i]=this._overrides[i];for(s in Object.getOwnPropertyNames(this))"function"!=typeof this[s]&&(this[s]=null)},i.prototype.update=function(){var t,e,s,i=this._core.clones().length/2,o=i+this._core.items().length,n=this._core.maximum(!0),r=this._core.settings,a=r.center||r.autoWidth||r.dotsData?1:r.dotsEach||r.items;if("page"!==r.slideBy&&(r.slideBy=Math.min(r.slideBy,r.items)),r.dots||"page"==r.slideBy)for(this._pages=[],t=i,e=0,s=0;t<o;t++){if(e>=a||0===e){if(this._pages.push({start:Math.min(n,t-i),end:t-i+a-1}),Math.min(n,t-i)===n)break;e=0,++s}e+=this._core.mergers(this._core.relative(t))}},i.prototype.draw=function(){var t,e=this._core.settings,s=this._core.items().length<=e.items,i=this._core.relative(this._core.current()),o=e.loop||e.rewind;this._controls.$relative.toggleClass("disabled",!e.nav||s),e.nav&&(this._controls.$previous.toggleClass("disabled",!o&&i<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!o&&i>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!e.dots||s),e.dots&&(t=this._pages.length-this._controls.$absolute.children().length,e.dotsData&&0!==t?this._controls.$absolute.html(this._templates.join("")):t>0?this._controls.$absolute.append(new Array(t+1).join(this._templates[0])):t<0&&this._controls.$absolute.children().slice(t).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq($.inArray(this.current(),this._pages)).addClass("active"))},i.prototype.onTrigger=function(t){var e=this._core.settings;t.page={index:$.inArray(this.current(),this._pages),count:this._pages.length,size:e&&(e.center||e.autoWidth||e.dotsData?1:e.dotsEach||e.items)}},i.prototype.current=function(){var t=this._core.relative(this._core.current());return $.grep(this._pages,$.proxy(function(e,s){return e.start<=t&&e.end>=t},this)).pop()},i.prototype.getPosition=function(t){var e,s,i=this._core.settings;return"page"==i.slideBy?(e=$.inArray(this.current(),this._pages),s=this._pages.length,t?++e:--e,e=this._pages[(e%s+s)%s].start):(e=this._core.relative(this._core.current()),s=this._core.items().length,t?e+=i.slideBy:e-=i.slideBy),e},i.prototype.next=function(t){$.proxy(this._overrides.to,this._core)(this.getPosition(!0),t)},i.prototype.prev=function(t){$.proxy(this._overrides.to,this._core)(this.getPosition(!1),t)},i.prototype.to=function(t,e,s){var i;!s&&this._pages.length?(i=this._pages.length,$.proxy(this._overrides.to,this._core)(this._pages[(t%i+i)%i].start,e)):$.proxy(this._overrides.to,this._core)(t,e)},$.fn.owlCarousel.Constructor.Plugins.Navigation=i}(window.Zepto||window.jQuery,window,document);