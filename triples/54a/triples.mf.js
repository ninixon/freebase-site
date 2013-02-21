
/*
 * Copyright 2012, Google Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *     * Redistributions of source code must retain the above copyright
 * notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above
 * copyright notice, this list of conditions and the following disclaimer
 * in the documentation and/or other materials provided with the
 * distribution.
 *     * Neither the name of Google Inc. nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Additional Licenses for Third Party components can be found here:
 * http://wiki.freebase.com/wiki/Freebase_Site_License
 *
 */
/*
 
 jQuery Tools @VERSION Tooltip - UI essentials

 NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.

 http://flowplayer.org/tools/tooltip/

 Since: November 2008
 Date: @DATE 
*/
(function(d){d.factory("collapse_module",{init:function(){var g=this;this.$column=d(this.options.column);this.modules=d(this.options.modules,this.element);this.first_module=this.modules.get(0);this.trigger=d(".trigger:first",this.first_module);this.first_section=d(".module-section",this.first_module);this.other_modules=this.modules.slice(1);this.column_offset=this.$column.css("margin-left");this.set_collapsed(this.options.collapsed);this.trigger.click(function(i){return g.toggle(i)})},set_collapsed:function(g){if(this.toggle_state=
g){this.trigger.addClass("collapsed");this.$column.css("margin-left",0);this.first_section.hide();this.other_modules.hide()}else{this.trigger.removeClass("collapsed");this.$column.css("margin-left",this.column_offset);this.first_section.show();this.other_modules.show()}},toggle:function(){var g=this;if(this.toggle_state){d.localstore("filters_collapsed",0,false);this.trigger.removeClass("collapsed");this.$column.animate({marginLeft:this.column_offset},function(){g.first_section.slideDown(function(){g.modules.removeClass("collapsed")});
g.other_modules.fadeIn()})}else{d.localstore("filters_collapsed",1,false);this.trigger.addClass("collapsed");this.other_modules.fadeOut();this.first_section.slideUp(function(){g.$column.animate({marginLeft:0});g.modules.addClass("collapsed")})}this.toggle_state=!this.toggle_state;this.options.toggle_callback&&this.options.toggle_callback.call(this.trigger,this.toggle_state);return false}});var f=d("body").is(".embed")||d.localstore("filters_collapsed");d.extend(true,d.collapse_module,{defaults:{collapsed:f===
null?false:!!f,modules:".module",column:"#main-column"}})})(jQuery);
(function(d){function f(e,a,b){var c=b.relative?e.position().top:e.offset().top,h=b.relative?e.position().left:e.offset().left,j=b.position[0];c-=a.outerHeight()-b.offset[0];h+=e.outerWidth()+b.offset[1];var m=a.outerHeight()+e.outerHeight();if(j=="center")c+=m/2;if(j=="bottom")c+=m;j=b.position[1];e=a.outerWidth()+e.outerWidth();if(j=="center")h-=e/2;if(j=="left")h-=e;return{top:c,left:h}}function g(e,a){var b=this,c=e.add(b),h,j=0,m=0,o=e.attr("title"),r=i[a.effect],l,p=e.is(":input"),s=p&&e.is(":checkbox, :radio, select, :button, :submit"),
u=e.attr("type"),q=a.events[u]||a.events[p?s?"widget":"input":"def"];if(!r)throw'Nonexistent effect "'+a.effect+'"';q=q.split(/,\s*/);if(q.length!=2)throw"Tooltip: bad events configuration for "+u;e.bind(q[0],function(k){clearTimeout(j);if(a.predelay)m=setTimeout(function(){b.show(k)},a.predelay);else b.show(k)}).bind(q[1],function(k){clearTimeout(m);if(a.delay)j=setTimeout(function(){b.hide(k)},a.delay);else b.hide(k)});if(o&&a.cancelDefault){e.removeAttr("title");e.data("title",o)}d.extend(b,{show:function(k){if(!h){if(o)h=
d(a.layout).addClass(a.tipClass).appendTo(document.body).hide().append(o);else if(a.tip)h=d(a.tip).eq(0);else{h=e.next();h.length||(h=e.parent().next())}if(!h.length)throw"Cannot find tooltip for "+e;}if(b.isShown())return b;h.stop(true,true);var n=f(e,h,a);k=k||d.Event();k.type="onBeforeShow";c.trigger(k,[n]);if(k.isDefaultPrevented())return b;n=f(e,h,a);h.css({position:"absolute",top:n.top,left:n.left});l=true;r[0].call(b,function(){k.type="onShow";l="full";c.trigger(k)});n=a.events.tooltip.split(/,\s*/);
h.bind(n[0],function(){clearTimeout(j);clearTimeout(m)});n[1]&&!e.is("input:not(:checkbox, :radio), textarea")&&h.bind(n[1],function(t){t.relatedTarget!=e[0]&&e.trigger(q[1].split(" ")[0])});return b},hide:function(k){if(!h||!b.isShown())return b;k=k||d.Event();k.type="onBeforeHide";c.trigger(k);if(!k.isDefaultPrevented()){l=false;i[a.effect][1].call(b,function(){k.type="onHide";l=false;c.trigger(k)});return b}},isShown:function(k){return k?l=="full":l},getConf:function(){return a},getTip:function(){return h},
getTrigger:function(){return e}});d.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(k,n){d.isFunction(a[n])&&d(b).bind(n,a[n]);b[n]=function(t){d(b).bind(n,t);return b}})}d.tools=d.tools||{version:"@VERSION"};d.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,position:["top","center"],offset:[0,0],relative:false,cancelDefault:true,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",tooltip:"mouseenter,mouseleave"},
layout:"<div/>",tipClass:"tooltip"},addEffect:function(e,a,b){i[e]=[a,b]}};var i={toggle:[function(e){var a=this.getConf(),b=this.getTip();a=a.opacity;a<1&&b.css({opacity:a});b.show();e.call()},function(e){this.getTip().hide();e.call()}],fade:[function(e){var a=this.getConf();this.getTip().fadeTo(a.fadeInSpeed,a.opacity,e)},function(e){this.getTip().fadeOut(this.getConf().fadeOutSpeed,e)}]};d.fn.tooltip=function(e){var a=this.data("tooltip");if(a)return a;e=d.extend(true,{},d.tools.tooltip.conf,e);
if(typeof e.position=="string")e.position=e.position.split(/,?\s/);this.each(function(){a=new g(d(this),e);d(this).data("tooltip",a)});return e.api?a:this}})(jQuery);
(function(d,f){f.filters={init_domain_type_property_filter:function(g){d(":text[name=domain], :text[name=type], :text[name=property]",g).suggest(d.extend({scoring:"schema",format:null,mql_output:JSON.stringify([{id:null,name:null,type:{id:null,"id|=":["/type/domain","/type/type","/type/property"],limit:1}}])},f.suggest_options.any("type:/type/domain","type:/type/type","type:/type/property"))).bind("fb-select",function(i,e){var a=d(this);a.val(e.id);var b=e.type.id;if(b==="/type/domain")a.attr("name",
"domain");else if(b==="/type/type")a.attr("name","type");else b==="/type/property"&&a.attr("name","property");this.form.submit()}).parents(".filter-form").submit(function(){return false})}};d(function(){d(".filter-form :input").keypress(function(g){g.keyCode===13&&this.form.submit();return true});d(".filter-help-trigger").tooltip({events:{def:"click,mouseout"},position:"top center",effect:"fade",delay:300,offset:[-8,0]});d(".filter-form-trigger").click(function(){var g=d(this).siblings(".filter-form");
g.is(":hidden")?g.slideDown(function(){d(":text:first",g).focus()}):g.slideUp()})})})(jQuery,window.freebase);
(function(d,f,g){f.infinitescroll=function(a,b,c){this.element=f(c);this._create(a,b)};f.infinitescroll.defaults={loading:{finished:g,finishedMsg:"<em>Congratulations, you've reached the end of the internet.</em>",img:"http://www.infinite-scroll.com/loading.gif",msg:null,msgText:"<em>Loading the next set of posts...</em>",selector:null,speed:"fast",start:g},state:{isDuringAjax:false,isInvalidPage:false,isDestroyed:false,isDone:false,isPaused:false,currPage:1},callback:g,debug:false,behavior:g,binder:f(d),
nextSelector:"div.navigation a:first",navSelector:"div.navigation",contentSelector:null,extraScrollPx:150,itemSelector:"div.post",animate:false,pathParse:g,dataType:"html",appendCallback:true,bufferPx:40,errorCallback:function(){},infid:0,pixelsFromNavToBottom:g,path:g};f.infinitescroll.prototype={_binding:function(a){var b=this,c=b.options;if(c.behavior&&this["_binding_"+c.behavior]!==g)this["_binding_"+c.behavior].call(this);else{if(a!=="bind"&&a!=="unbind"){this._debug("Binding value  "+a+" not valid");
return false}a=="unbind"?this.options.binder.unbind("smartscroll.infscr."+b.options.infid):this.options.binder[a]("smartscroll.infscr."+b.options.infid,function(){b.scroll()});this._debug("Binding",a)}},_create:function(a,b){if(!this._validate(a))return false;var c=this.options=f.extend(true,{},f.infinitescroll.defaults,a),h=f(c.nextSelector).attr("href");c.contentSelector=c.contentSelector||this.element;c.loading.selector=c.loading.selector||c.contentSelector;if(h){c.path=this._determinepath(h);
c.loading.msg=f('<div id="infscr-loading"><img alt="Loading..." src="'+c.loading.img+'" /><div>'+c.loading.msgText+"</div></div>");(new Image).src=c.loading.img;c.pixelsFromNavToBottom=f(document).height()-f(c.navSelector).offset().top;c.loading.start=c.loading.start||function(){f(c.navSelector).hide();c.loading.msg.appendTo(c.loading.selector).show(c.loading.speed,function(){beginAjax(c)})};c.loading.finished=c.loading.finished||function(){c.loading.msg.fadeOut("normal")};c.callback=function(j,m){c.behavior&&
j["_callback_"+c.behavior]!==g&&j["_callback_"+c.behavior].call(f(c.contentSelector)[0],m);b&&b.call(f(c.contentSelector)[0],m)};this._setup()}else this._debug("Navigation selector not found")},_debug:function(){if(this.options.debug)return d.console&&console.log.call(console,arguments)},_determinepath:function(a){var b=this.options;if(b.behavior&&this["_determinepath_"+b.behavior]!==g)this["_determinepath_"+b.behavior].call(this,a);else{if(b.pathParse){this._debug("pathParse manual");if(typeof b.pathParse===
"function")return b.pathParse();return b.pathParse}else if(a.match(/^(.*?)\b2\b(.*?$)/))a=a.match(/^(.*?)\b2\b(.*?$)/).slice(1);else if(a.match(/^(.*?)2(.*?$)/)){if(a.match(/^(.*?page=)2(\/.*|$)/))return a=a.match(/^(.*?page=)2(\/.*|$)/).slice(1);a=a.match(/^(.*?)2(.*?$)/).slice(1)}else if(a.match(/^(.*?page=)1(\/.*|$)/))return a=a.match(/^(.*?page=)1(\/.*|$)/).slice(1);else{this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.");
b.state.isInvalidPage=true}this._debug("determinePath",a);return a}},_error:function(a){var b=this.options;if(b.behavior&&this["_error_"+b.behavior]!==g)this["_error_"+b.behavior].call(this,a);else{if(a!=="destroy"&&a!=="end")a="unknown";this._debug("Error",a);a=="end"&&this._showdonemsg();b.state.isDone=true;b.state.currPage=1;b.state.isPaused=false;this._binding("unbind")}},_loadcallback:function(a,b){var c=this.options,h=this.options.callback,j=c.state.isDone?"done":!c.appendCallback?"no-append":
"append";if(c.behavior&&this["_loadcallback_"+c.behavior]!==g)this["_loadcallback_"+c.behavior].call(this,a,b);else{switch(j){case "done":this._showdonemsg();return false;case "no-append":if(c.dataType=="html"){b="<div>"+b+"</div>";b=f(b).find(c.itemSelector)}break;case "append":var m=a.children();if(m.length==0)return this._error("end");for(j=document.createDocumentFragment();a[0].firstChild;)j.appendChild(a[0].firstChild);this._debug("contentSelector",f(c.contentSelector)[0]);f(c.contentSelector)[0].appendChild(j);
b=m.get();break}c.loading.finished.call(f(c.contentSelector)[0],c);if(c.animate){j=f(d).scrollTop()+f("#infscr-loading").height()+c.extraScrollPx+"px";f("html,body").animate({scrollTop:j},800,function(){c.state.isDuringAjax=false})}if(!c.animate)c.state.isDuringAjax=false;h(this,b)}},_nearbottom:function(){var a=this.options,b=0+f(document).height()-a.binder.scrollTop()-f(d).height();if(a.behavior&&this["_nearbottom_"+a.behavior]!==g)this["_nearbottom_"+a.behavior].call(this);else{this._debug("math:",
b,a.pixelsFromNavToBottom);return b-a.bufferPx<a.pixelsFromNavToBottom}},_pausing:function(a){var b=this.options;if(b.behavior&&this["_pausing_"+b.behavior]!==g)this["_pausing_"+b.behavior].call(this,a);else{a!=="pause"&&a!=="resume"&&a!==null&&this._debug("Invalid argument. Toggling pause value instead");switch(a&&(a=="pause"||a=="resume")?a:"toggle"){case "pause":b.state.isPaused=true;break;case "resume":b.state.isPaused=false;break;case "toggle":b.state.isPaused=!b.state.isPaused;break}this._debug("Paused",
b.state.isPaused);return false}},_setup:function(){var a=this.options;if(a.behavior&&this["_setup_"+a.behavior]!==g)this["_setup_"+a.behavior].call(this);else{this._binding("bind");return false}},_showdonemsg:function(){var a=this.options;if(a.behavior&&this["_showdonemsg_"+a.behavior]!==g)this["_showdonemsg_"+a.behavior].call(this);else{a.loading.msg.find("img").hide().parent().find("div").html(a.loading.finishedMsg).animate({opacity:1},2E3,function(){f(this).parent().fadeOut("normal")});a.errorCallback.call(f(a.contentSelector)[0],
"done")}},_validate:function(a){for(var b in a){if(b.indexOf&&b.indexOf("Selector")>-1&&f(a[b]).length===0){this._debug("Your "+b+" found no elements.");return false}return true}},bind:function(){this._binding("bind")},destroy:function(){this.options.state.isDestroyed=true;return this._error("destroy")},pause:function(){this._pausing("pause")},resume:function(){this._pausing("resume")},retrieve:function(a){var b=this,c=b.options,h=this._determinepath(h),j,m,o,r;a=a||null;beginAjax=function(l){l.state.currPage++;
b._debug("heading into ajax",h);j=f(l.contentSelector).is("table")?f("<tbody/>"):f("<div/>");m=h.join(l.state.currPage);o=l.dataType=="html"||l.dataType=="json"?l.dataType:"html+callback";if(l.appendCallback&&l.dataType=="html")o+="+callback";switch(o){case "html+callback":b._debug("Using HTML via .load() method");j.load(m+" "+l.itemSelector,null,function(p){b._loadcallback(j,p)});break;case "html":case "json":b._debug("Using "+o.toUpperCase()+" via $.ajax() method");f.ajax({url:m,dataType:l.dataType,
complete:function(p,s){(r=typeof p.isResolved!=="undefined"?p.isResolved():s==="success"||s==="notmodified")?b._loadcallback(j,p.responseText):b._error("end")}});break}};if(c.behavior&&this["retrieve_"+c.behavior]!==g)this["retrieve_"+c.behavior].call(this,a);else{if(c.state.isDestroyed){this._debug("Instance is destroyed");return false}c.state.isDuringAjax=true;c.loading.start.call(f(c.contentSelector)[0],c)}},scroll:function(){var a=this.options,b=a.state;if(a.behavior&&this["scroll_"+a.behavior]!==
g)this["scroll_"+a.behavior].call(this);else b.isDuringAjax||b.isInvalidPage||b.isDone||b.isDestroyed||b.isPaused||this._nearbottom()&&this.retrieve()},toggle:function(){this._pausing()},unbind:function(){this._binding("unbind")},update:function(a){if(f.isPlainObject(a))this.options=f.extend(true,this.options,a)}};f.fn.infinitescroll=function(a,b){switch(typeof a){case "string":var c=Array.prototype.slice.call(arguments,1);this.each(function(){var h=f.data(this,"infinitescroll");if(!h)return false;
if(!f.isFunction(h[a])||a.charAt(0)==="_")return false;h[a].apply(h,c)});break;case "object":this.each(function(){var h=f.data(this,"infinitescroll");h?h.update(a):f.data(this,"infinitescroll",new f.infinitescroll(a,b,this))});break}return this};var i=f.event,e;i.special.smartscroll={setup:function(){f(this).bind("scroll",i.special.smartscroll.handler)},teardown:function(){f(this).unbind("scroll",i.special.smartscroll.handler)},handler:function(a,b){var c=this,h=arguments;a.type="smartscroll";e&&
clearTimeout(e);e=setTimeout(function(){f.event.handle.apply(c,h)},b==="execAsap"?0:100)}};f.fn.smartscroll=function(a){return a?this.bind("smartscroll",a):this.trigger("smartscroll",["execAsap"])}})(window,jQuery);
(function(d,f){var g=f.triples={row_hoverover:function(){var i=d(this);g.row_hoverover.timeout=setTimeout(function(){i.addClass("row-hover")},300)},row_hoverout:function(){clearTimeout(g.row_hoverover.timeout);d(this).removeClass("row-hover")},init_menus:function(i,e){e&&d(".nicemenu",i).nicemenu();d(">tr",i).hover(g.row_hoverover,g.row_hoverout)},init_linkcount:function(i,e){var a=d(">tr",i).length,b=d("[name=infinitescroll-count]");d(".number",b).attr("data-value",a).text(a);d(".more",b).toggle(!!e)},
init_infinitescroll:function(){var i=d("#infinitescroll > tbody"),e=i.attr("data-next");g.init_menus(i);g.init_linkcount(i,e);if(e){var a=d("#infinitescroll-next");i.infinitescroll({loading:{msgText:"Fetching more links",img:f.h.static_url("lib/template/img/horizontal-loader.gif")},nextSelector:"#infinitescroll-next",navSelector:"#infinitescroll-next",dataType:"json",pathParse:function(){return[a[0].href+"&"+d.param({next:i.attr("data-next")})+"&page=",""]},appendCallback:false},function(b){b=JSON.parse(b);
b=d(b.result.html);g.init_menus(b,true);var c=b.attr("data-next");i.append(d(">tr",b));i.attr("data-next",c);g.init_linkcount(i,c);i.parent("table").trigger("update");c||d(window).unbind(".infscr")});d(window).trigger("scroll")}},init:function(){g.init_menus();d(".column.nav").collapse_module({modules:".module",column:".section"});f.filters.init_domain_type_property_filter(".column.nav");d(":text[name=creator]").suggest(f.suggest_options.any("type:/type/user")).bind("fb-select",function(i,e){d(this).val(e.id).parents("form:first").submit()});
g.init_infinitescroll()}};d(g.init)})(jQuery,window.freebase);