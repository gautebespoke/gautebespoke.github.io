/**
 * AutoRefresh Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
!function($,e,t,i){var s=function(e){this._core=e,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":$.proxy(function(e){e.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=$.extend({},s.Defaults,this._core.options),this._core.$element.on(this._handlers)};s.Defaults={autoRefresh:!0,autoRefreshInterval:500},s.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=e.setInterval($.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},s.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},s.prototype.destroy=function(){var t,i;e.clearInterval(this._interval);for(t in this._handlers)this._core.$element.off(t,this._handlers[t]);for(i in Object.getOwnPropertyNames(this))"function"!=typeof this[i]&&(this[i]=null)},$.fn.owlCarousel.Constructor.Plugins.AutoRefresh=s}(window.Zepto||window.jQuery,window,document);