
/*
 * Copyright 2010, Google Inc.
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

 Cookie plugin

 Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 Dual licensed under the MIT and GPL licenses:
 http://www.opensource.org/licenses/mit-license.php
 http://www.gnu.org/licenses/gpl.html

*/
if(!("JSON"in window&&window.JSON)){if(!this.JSON)this.JSON={};(function(){function a(i){return i<10?"0"+i:i}function e(i){b.lastIndex=0;return b.test(i)?'"'+i.replace(b,function(k){var l=h[k];return typeof l==="string"?l:"\\u"+("0000"+k.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+i+'"'}function g(i,k){var l,m,n,r,q=c,p,o=k[i];if(o&&typeof o==="object"&&typeof o.toJSON==="function")o=o.toJSON(i);if(typeof j==="function")o=j.call(k,i,o);switch(typeof o){case "string":return e(o);case "number":return isFinite(o)?
String(o):"null";case "boolean":case "null":return String(o);case "object":if(!o)return"null";c+=f;p=[];if(Object.prototype.toString.apply(o)==="[object Array]"){r=o.length;for(l=0;l<r;l+=1)p[l]=g(l,o)||"null";n=p.length===0?"[]":c?"[\n"+c+p.join(",\n"+c)+"\n"+q+"]":"["+p.join(",")+"]";c=q;return n}if(j&&typeof j==="object"){r=j.length;for(l=0;l<r;l+=1){m=j[l];if(typeof m==="string")if(n=g(m,o))p.push(e(m)+(c?": ":":")+n)}}else for(m in o)if(Object.hasOwnProperty.call(o,m))if(n=g(m,o))p.push(e(m)+
(c?": ":":")+n);n=p.length===0?"{}":c?"{\n"+c+p.join(",\n"+c)+"\n"+q+"}":"{"+p.join(",")+"}";c=q;return n}}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}}var d=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
b=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,c,f,h={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},j;if(typeof JSON.stringify!=="function")JSON.stringify=function(i,k,l){var m;f=c="";if(typeof l==="number")for(m=0;m<l;m+=1)f+=" ";else if(typeof l==="string")f=l;if((j=k)&&typeof k!=="function"&&(typeof k!=="object"||typeof k.length!=="number"))throw new Error("JSON.stringify");return g("",
{"":i})};if(typeof JSON.parse!=="function")JSON.parse=function(i,k){function l(n,r){var q,p,o=n[r];if(o&&typeof o==="object")for(q in o)if(Object.hasOwnProperty.call(o,q)){p=l(o,q);if(p!==undefined)o[q]=p;else delete o[q]}return k.call(n,r,o)}var m;i=String(i);d.lastIndex=0;if(d.test(i))i=i.replace(d,function(n){return"\\u"+("0000"+n.charCodeAt(0).toString(16)).slice(-4)});if(/^[\],:{}\s]*$/.test(i.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){m=eval("("+i+")");return typeof k==="function"?l({"":m},""):m}throw new SyntaxError("JSON.parse");}})()}
(function(a){a.factory=function(e,g){if(a.fn[e])throw"$.fn."+e+" plugin already exists";else if(a[e])throw"$."+e+" class already exists";a.fn[e]=function(d){return this.each(function(){var b=a(this),c=b.data("$."+e);c&&c._destroy();c=new a[e](b,d);b.data("$."+e,c)})};a[e]=function(d,b){this.options=a.extend(true,{},a[e].defaults,b);this.element=d;this.init()};a.extend(a[e].prototype,{init:function(){},_destroy:function(){}},g);return a[e]}})(jQuery);
jQuery.cookie=function(a,e,g){if(typeof e!="undefined"){g=g||{};if(e===null){e="";g=$.extend({},g);g.expires=-1}var d="";if(g.expires&&(typeof g.expires=="number"||g.expires.toUTCString)){if(typeof g.expires=="number"){d=new Date;d.setTime(d.getTime()+g.expires*24*60*60*1E3)}else d=g.expires;d="; expires="+d.toUTCString()}var b=g.path?"; path="+g.path:"",c=g.domain?"; domain="+g.domain:"";g=g.secure?"; secure":"";document.cookie=[a,"=",encodeURIComponent(e),d,b,c,g].join("")}else{e=null;if(document.cookie&&
document.cookie!=""){g=document.cookie.split(";");for(d=0;d<g.length;d++){b=jQuery.trim(g[d]);if(b.substring(0,a.length+1)==a+"="){e=decodeURIComponent(b.substring(a.length+1));break}}}return e}};
(function(){var a={};$.extend({localstore:function(e,g,d,b){var c=document.location.hostname,f=document.location.protocol;if(typeof g!=="undefined"){var h=JSON.stringify(g);if(!d&&window.globalStorage)if(g===null)delete window.globalStorage[c][f+e];else window.globalStorage[c][f+e]=h;else if(!d&&window.localStorage&&window.localStorage.setItem)g===null?window.localStorage.removeItem(f+e):window.localStorage.setItem(f+e,h);else if(d!==false){d={};d.domain=fb.get_cookie_domain();g===null?$.cookie(e,
null,d):$.cookie(e,h,$.extend(d,b||{expires:14,path:"/"}))}else if(g===null)delete a[e];else a[e]=h;return g}else{if(!d&&window.globalStorage){if(window.globalStorage[c][f+e])g=window.globalStorage[c][f+e].value}else g=!d&&window.localStorage?window.localStorage.getItem(f+e):d!==false?$.cookie(e):a[e];if(g!=""&&g!==null&&g!==undefined)return JSON.parse(g,null)}return null}})})();
(function(a){function e(d,b){this.options=a.extend(true,{},b);this.input=a(d);this.placeholder=this.input.attr("placeholder")||"";this.init()}if("placeholder"in document.createElement("input"))a.fn.placeholder=function(){return this};else{var g=a.fn.val;a.fn.val=function(d){if(d===undefined)if(this.hasClass("placeholder"))return"";return g.apply(this,[d])};e.prototype={init:function(){var d=this,b=this.input.val();if(b===""||b===this.placeholder)this.input.val(this.placeholder).addClass("placeholder");
this.input.bind("focus.placeholder",function(c){return d.focus(c)}).bind("blur.placeholder",function(c){return d.blur(c)});this.input[0].form&&a(this.input[0].form).bind("submit",function(c){return d.submit(c)})},destroy:function(){this.input.unbind(".placeholder");this.input[0].form&&a(this.input[0].form).unbind(".placeholder")},focus:function(){this.input.hasClass("placeholder")&&this.input.val("").removeClass("placeholder")},blur:function(){this.input.val()===""&&this.input.val(this.input.attr("placeholder")).addClass("placeholder")},
submit:function(){this.input.hasClass("placeholder")&&this.input.val("")}};a.fn.placeholder=function(d){return this.each(function(){var b=a(this);b.unbind(".placeholder");if(b.is(":text")||b.is("textarea"))if(b.attr("placeholder")){(b=a.data(this,"placeholder"))&&b.destroy();a.data(this,"placeholder",new e(this,d))}})}}})(jQuery);
(function(a){a.extend({metadata:{defaults:{type:"class",name:"metadata",cre:/({.*})/,single:"metadata"},setType:function(e,g){this.defaults.type=e;this.defaults.name=g},get:function(e,g){var d=a.extend({},this.defaults,g);if(!d.single.length)d.single="metadata";var b=a.data(e,d.single);if(b)return b;b="{}";var c=function(j){if(typeof j!="string")return j;return j=eval("("+j+")")};if(d.type=="html5"){var f={};a(e.attributes).each(function(){var j=this.nodeName;if(j.match(/^data-/))j=j.replace(/^data-/,
"");else return true;f[j]=c(this.nodeValue)})}else{if(d.type=="class"){var h=d.cre.exec(e.className);if(h)b=h[1]}else if(d.type=="elem"){if(!e.getElementsByTagName)return;h=e.getElementsByTagName(d.name);if(h.length)b=a.trim(h[0].innerHTML)}else if(e.getAttribute!=undefined)if(h=e.getAttribute(d.name))b=h;f=c(b.indexOf("{")<0?"{"+b+"}":b)}a.data(e,d.single,f);return f}}});a.fn.metadata=function(e){return a.metadata.get(this[0],e)}})(jQuery);
(function(a){a(function(){if(a.tablesorter){console.log("$.tablesorter");var e=a("<div>");a.tablesorter.defaults.cssAsc="column-header-asc";a.tablesorter.defaults.cssDesc="column-header-desc";a.tablesorter.defaults.cssHeader="column-header";a.tablesorter.addParser({id:"datetime",is:function(){return false},format:function(g){e.html(g);return e.find("time:first").attr("datetime")},type:"text"});a.tablesorter.addParser({id:"ignoreCase",is:function(){return false},format:function(g){e.html(g);return e.text().toLowerCase()},
type:"text"});a.tablesorter.addParser({id:"string",is:function(){return false},format:function(g){e.html(g);return e.text()},type:"text"});a.tablesorter.addParser({id:"number",is:function(){return false},format:function(g){e.html(g);g=e.find(".number:first").attr("data-value");if(g==null)return Number.MAX_VALUE;return g},type:"numeric"});a(".table-sortable").each(function(){a(this).tablesorter()})}})})(jQuery);
(function(a,e){function g(d){return!a(d).parents().andSelf().filter(function(){return a.curCSS(this,"visibility")==="hidden"||a.expr.filters.hidden(this)}).length}a.ui=a.ui||{};if(!a.ui.version){a.extend(a.ui,{version:"1.8.10",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,
PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});a.fn.extend({_focus:a.fn.focus,focus:function(d,b){return typeof d==="number"?this.each(function(){var c=this;setTimeout(function(){a(c).focus();b&&b.call(c)},d)}):this._focus.apply(this,arguments)},scrollParent:function(){var d;d=a.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(a.curCSS(this,
"position",1))&&/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(a.curCSS(this,"overflow",1)+a.curCSS(this,"overflow-y",1)+a.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!d.length?a(document):d},zIndex:function(d){if(d!==e)return this.css("zIndex",d);if(this.length){d=a(this[0]);for(var b;d.length&&d[0]!==document;){b=d.css("position");
if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(d.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}d=d.parent()}}return 0},disableSelection:function(){return this.bind((a.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(d){d.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});a.each(["Width","Height"],function(d,b){function c(i,k,l,m){a.each(f,function(){k-=parseFloat(a.curCSS(i,"padding"+this,true))||0;if(l)k-=parseFloat(a.curCSS(i,
"border"+this+"Width",true))||0;if(m)k-=parseFloat(a.curCSS(i,"margin"+this,true))||0});return k}var f=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),j={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+b]=function(i){if(i===e)return j["inner"+b].call(this);return this.each(function(){a(this).css(h,c(this,i)+"px")})};a.fn["outer"+b]=function(i,k){if(typeof i!=="number")return j["outer"+b].call(this,i);return this.each(function(){a(this).css(h,
c(this,i,true,k)+"px")})}});a.extend(a.expr[":"],{data:function(d,b,c){return!!a.data(d,c[3])},focusable:function(d){var b=d.nodeName.toLowerCase(),c=a.attr(d,"tabindex");if("area"===b){b=d.parentNode;c=b.name;if(!d.href||!c||b.nodeName.toLowerCase()!=="map")return false;d=a("img[usemap=#"+c+"]")[0];return!!d&&g(d)}return(/input|select|textarea|button|object/.test(b)?!d.disabled:"a"==b?d.href||!isNaN(c):!isNaN(c))&&g(d)},tabbable:function(d){var b=a.attr(d,"tabindex");return(isNaN(b)||b>=0)&&a(d).is(":focusable")}});
a(function(){var d=document.body,b=d.appendChild(b=document.createElement("div"));a.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});a.support.minHeight=b.offsetHeight===100;a.support.selectstart="onselectstart"in b;d.removeChild(b).style.display="none"});a.extend(a.ui,{plugin:{add:function(d,b,c){d=a.ui[d].prototype;for(var f in c){d.plugins[f]=d.plugins[f]||[];d.plugins[f].push([b,c[f]])}},call:function(d,b,c){if((b=d.plugins[b])&&d.element[0].parentNode)for(var f=0;f<b.length;f++)d.options[b[f][0]]&&
b[f][1].apply(d.element,c)}},contains:function(d,b){return document.compareDocumentPosition?d.compareDocumentPosition(b)&16:d!==b&&d.contains(b)},hasScroll:function(d,b){if(a(d).css("overflow")==="hidden")return false;var c=b&&b==="left"?"scrollLeft":"scrollTop",f=false;if(d[c]>0)return true;d[c]=1;f=d[c]>0;d[c]=0;return f},isOverAxis:function(d,b,c){return d>b&&d<b+c},isOver:function(d,b,c,f,h,j){return a.ui.isOverAxis(d,c,h)&&a.ui.isOverAxis(b,f,j)}})}})(jQuery);
(function(a,e){if(a.cleanData){var g=a.cleanData;a.cleanData=function(b){for(var c=0,f;(f=b[c])!=null;c++)a(f).triggerHandler("remove");g(b)}}else{var d=a.fn.remove;a.fn.remove=function(b,c){return this.each(function(){if(!c)if(!b||a.filter(b,[this]).length)a("*",this).add([this]).each(function(){a(this).triggerHandler("remove")});return d.call(a(this),b,c)})}}a.widget=function(b,c,f){var h=b.split(".")[0],j;b=b.split(".")[1];j=h+"-"+b;if(!f){f=c;c=a.Widget}a.expr[":"][j]=function(i){return!!a.data(i,
b)};a[h]=a[h]||{};a[h][b]=function(i,k){arguments.length&&this._createWidget(i,k)};c=new c;c.options=a.extend(true,{},c.options);a[h][b].prototype=a.extend(true,c,{namespace:h,widgetName:b,widgetEventPrefix:a[h][b].prototype.widgetEventPrefix||b,widgetBaseClass:j},f);a.widget.bridge(b,a[h][b])};a.widget.bridge=function(b,c){a.fn[b]=function(f){var h=typeof f==="string",j=Array.prototype.slice.call(arguments,1),i=this;f=!h&&j.length?a.extend.apply(null,[true,f].concat(j)):f;if(h&&f.charAt(0)==="_")return i;
h?this.each(function(){var k=a.data(this,b),l=k&&a.isFunction(k[f])?k[f].apply(k,j):k;if(l!==k&&l!==e){i=l;return false}}):this.each(function(){var k=a.data(this,b);k?k.option(f||{})._init():a.data(this,b,new c(f,this))});return i}};a.Widget=function(b,c){arguments.length&&this._createWidget(b,c)};a.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(b,c){a.data(c,this.widgetName,this);this.element=a(c);this.options=a.extend(true,{},this.options,
this._getCreateOptions(),b);var f=this;this.element.bind("remove."+this.widgetName,function(){f.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return a.metadata&&a.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(b,c){var f=b;if(arguments.length===0)return a.extend({},this.options);if(typeof b==="string"){if(c===e)return this.options[b];f={};f[b]=c}this._setOptions(f);return this},_setOptions:function(b){var c=this;a.each(b,function(f,h){c._setOption(f,h)});return this},_setOption:function(b,c){this.options[b]=c;if(b==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(b,c,f){var h=this.options[b];c=a.Event(c);c.type=(b===this.widgetEventPrefix?b:this.widgetEventPrefix+b).toLowerCase();f=f||{};if(c.originalEvent){b=a.event.props.length;for(var j;b;){j=a.event.props[--b];c[j]=c.originalEvent[j]}}this.element.trigger(c,f);return!(a.isFunction(h)&&h.call(this.element[0],c,f)===false||c.isDefaultPrevented())}}})(jQuery);
(function(a){a.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(g){return e._mouseDown(g)}).bind("click."+this.widgetName,function(g){if(true===a.data(g.target,e.widgetName+".preventClickEvent")){a.removeData(g.target,e.widgetName+".preventClickEvent");g.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(e){e.originalEvent=
e.originalEvent||{};if(!e.originalEvent.mouseHandled){this._mouseStarted&&this._mouseUp(e);this._mouseDownEvent=e;var g=this,d=e.which==1,b=typeof this.options.cancel=="string"?a(e.target).parents().add(e.target).filter(this.options.cancel).length:false;if(!d||b||!this._mouseCapture(e))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){g.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)){this._mouseStarted=
this._mouseStart(e)!==false;if(!this._mouseStarted){e.preventDefault();return true}}this._mouseMoveDelegate=function(c){return g._mouseMove(c)};this._mouseUpDelegate=function(c){return g._mouseUp(c)};a(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);e.preventDefault();return e.originalEvent.mouseHandled=true}},_mouseMove:function(e){if(a.browser.msie&&!(document.documentMode>=9)&&!e.button)return this._mouseUp(e);if(this._mouseStarted){this._mouseDrag(e);
return e.preventDefault()}if(this._mouseDistanceMet(e)&&this._mouseDelayMet(e))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==false)?this._mouseDrag(e):this._mouseUp(e);return!this._mouseStarted},_mouseUp:function(e){a(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;e.target==this._mouseDownEvent.target&&a.data(e.target,this.widgetName+".preventClickEvent",
true);this._mouseStop(e)}return false},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
(function(a){a.ui=a.ui||{};var e=/left|center|right/,g=/top|center|bottom/,d=a.fn.position,b=a.fn.offset;a.fn.position=function(c){if(!c||!c.of)return d.apply(this,arguments);c=a.extend({},c);var f=a(c.of),h=f[0],j=(c.collision||"flip").split(" "),i=c.offset?c.offset.split(" "):[0,0],k,l,m;if(h.nodeType===9){k=f.width();l=f.height();m={top:0,left:0}}else if(h.setTimeout){k=f.width();l=f.height();m={top:f.scrollTop(),left:f.scrollLeft()}}else if(h.preventDefault){c.at="left top";k=l=0;m={top:c.of.pageY,
left:c.of.pageX}}else{k=f.outerWidth();l=f.outerHeight();m=f.offset()}a.each(["my","at"],function(){var n=(c[this]||"").split(" ");if(n.length===1)n=e.test(n[0])?n.concat(["center"]):g.test(n[0])?["center"].concat(n):["center","center"];n[0]=e.test(n[0])?n[0]:"center";n[1]=g.test(n[1])?n[1]:"center";c[this]=n});if(j.length===1)j[1]=j[0];i[0]=parseInt(i[0],10)||0;if(i.length===1)i[1]=i[0];i[1]=parseInt(i[1],10)||0;if(c.at[0]==="right")m.left+=k;else if(c.at[0]==="center")m.left+=k/2;if(c.at[1]==="bottom")m.top+=
l;else if(c.at[1]==="center")m.top+=l/2;m.left+=i[0];m.top+=i[1];return this.each(function(){var n=a(this),r=n.outerWidth(),q=n.outerHeight(),p=parseInt(a.curCSS(this,"marginLeft",true))||0,o=parseInt(a.curCSS(this,"marginTop",true))||0,v=r+p+(parseInt(a.curCSS(this,"marginRight",true))||0),w=q+o+(parseInt(a.curCSS(this,"marginBottom",true))||0),s=a.extend({},m),t;if(c.my[0]==="right")s.left-=r;else if(c.my[0]==="center")s.left-=r/2;if(c.my[1]==="bottom")s.top-=q;else if(c.my[1]==="center")s.top-=
q/2;s.left=Math.round(s.left);s.top=Math.round(s.top);t={left:s.left-p,top:s.top-o};a.each(["left","top"],function(u,x){a.ui.position[j[u]]&&a.ui.position[j[u]][x](s,{targetWidth:k,targetHeight:l,elemWidth:r,elemHeight:q,collisionPosition:t,collisionWidth:v,collisionHeight:w,offset:i,my:c.my,at:c.at})});a.fn.bgiframe&&n.bgiframe();n.offset(a.extend(s,{using:c.using}))})};a.ui.position={fit:{left:function(c,f){var h=a(window);h=f.collisionPosition.left+f.collisionWidth-h.width()-h.scrollLeft();c.left=
h>0?c.left-h:Math.max(c.left-f.collisionPosition.left,c.left)},top:function(c,f){var h=a(window);h=f.collisionPosition.top+f.collisionHeight-h.height()-h.scrollTop();c.top=h>0?c.top-h:Math.max(c.top-f.collisionPosition.top,c.top)}},flip:{left:function(c,f){if(f.at[0]!=="center"){var h=a(window);h=f.collisionPosition.left+f.collisionWidth-h.width()-h.scrollLeft();var j=f.my[0]==="left"?-f.elemWidth:f.my[0]==="right"?f.elemWidth:0,i=f.at[0]==="left"?f.targetWidth:-f.targetWidth,k=-2*f.offset[0];c.left+=
f.collisionPosition.left<0?j+i+k:h>0?j+i+k:0}},top:function(c,f){if(f.at[1]!=="center"){var h=a(window);h=f.collisionPosition.top+f.collisionHeight-h.height()-h.scrollTop();var j=f.my[1]==="top"?-f.elemHeight:f.my[1]==="bottom"?f.elemHeight:0,i=f.at[1]==="top"?f.targetHeight:-f.targetHeight,k=-2*f.offset[1];c.top+=f.collisionPosition.top<0?j+i+k:h>0?j+i+k:0}}}};if(!a.offset.setOffset){a.offset.setOffset=function(c,f){if(/static/.test(a.curCSS(c,"position")))c.style.position="relative";var h=a(c),
j=h.offset(),i=parseInt(a.curCSS(c,"top",true),10)||0,k=parseInt(a.curCSS(c,"left",true),10)||0;j={top:f.top-j.top+i,left:f.left-j.left+k};"using"in f?f.using.call(c,j):h.css(j)};a.fn.offset=function(c){var f=this[0];if(!f||!f.ownerDocument)return null;if(c)return this.each(function(){a.offset.setOffset(this,c)});return b.call(this)}}})(jQuery);(function(a){window.freebase=window.fb={mwLWTReloading:false};window.SERVER&&typeof window.SERVER==="object"&&a.extend(window.freebase,window.SERVER)})(jQuery);
(function(a,e){if(a.cookie("mwLWTReloaded"))a.cookie("mwLWTReloaded",null,{path:"/"});else{var g=0,d=0;if(e.mwLastWriteTime)d=e.mwLastWriteTime||0;if(document.cookie&&document.cookie!="")for(var b=document.cookie.split(";"),c=0,f=b.length;c<f;c++){var h=a.trim(b[c]);if(h.indexOf("mwLastWriteTime=")===0){h=decodeURIComponent(h.substring(16)).split("|");if(h.length)g=h[0]}}b=g?parseInt(g,10):-1;c=d?parseInt(d,10):-1;if(g&&d&&c<b){a.cookie("mwLWTReloaded","true",{path:"/"});e.mwLWTReloading=true;window.location.reload(true)}}})(jQuery,
window.freebase);
(function(a,e){if(!e.mwLWTReloading){if(!window.console)window.console={log:a.noop,info:a.noop,debug:a.noop,warn:a.noop,error:a.noop};e.dispatch=function(b,c,f,h){if(typeof c!=="function")return false;b=a.event.fix(b||window.event);f||(f=[]);h||(h=this);return c.apply(h,[b].concat(f))};e.get_script=function(b,c){var f=e.get_script.cache,h=f[b];if(h)if(h.state===1)h.callbacks.push(c);else h.state===4&&c();else{h=f[b]={state:0,callbacks:[c]};a.ajax({url:b,dataType:"script",beforeSend:function(){h.state=1},
success:function(){h.state=4;a.each(h.callbacks,function(j,i){i()})},error:function(){h.state=-1}})}};e.get_script.cache={};a(window).bind("fb.user.signedin",function(b,c){console.log("fb.user.signedin",c.id);e.user=c;var f=a("#nav-username");if(f.length){console.log(e.user,e.user.id,e.user.name);f[0].href+=e.user.id.substring(1);var h=e.h.image_url(c.id,{maxwidth:25,maxheight:25,mode:"fillcropmid"});h=a('<a class="user-thumb" href="'+c.id+'"><img src="'+h+'" /></a>');f.prepend(h)}a("#signedin").show()}).bind("fb.user.signedout",
function(){console.log("fb.user.signedout");a("#signedout").show()});var g=a.cookie("fb-account-name");if(g){var d={id:"/user/"+g,name:g};setTimeout(function(){a(window).trigger("fb.user.signedin",d)},0)}else setTimeout(function(){a(window).trigger("fb.user.signedout")},0);e.window_position=function(){var b={};if(typeof window.innerWidth=="number"){b.width=window.outerWidth;b.height=window.outerHeight;b.top=window.screenY;b.left=window.screenX}else if(document.documentElement&&(document.documentElement.clientWidth||
document.documentElement.clientHeight)){b.width=document.body.clientWidth;b.height=document.body.clientHeight;b.top=window.screenTop;b.left=window.screenLeft}return b};e.popup=function(b,c,f,h){c=c||300;f=f||300;var j=e.window_position(),i=Math.floor((j.width-c)/2)+j.left;j=Math.floor((j.height-f)/2)+j.top;if(/chrome/.test(navigator.userAgent.toLowerCase()))f+=50;c={width:c,height:f,top:j,left:i,directories:"no",location:"no",menubar:"no",resizable:"no",scrollbars:"yes",status:"no",toolbar:"no"};
f=[];for(var k in c)f.push(k+"="+c[k]);return window.open(b,h||"",f.join())};e.login_popup=function(b){b||(b=function(){window.location.reload()});var c=e.popup("/account/signin",900,600,"Freebase");if(c.opener==null)c.opener=self;window.onsignin=b;window.focus&&c.focus();return false};e.logout_popup=function(b){b||(b=function(){window.location.href="/"});var c=e.popup("/account/signout",900,600,"Freebase");if(c.opener==null)c.opener=self;window.onsignout=b;window.focus&&c.focus();return false};a(function(){var b=
a("#header > #nav-utilities > .language-picker"),c=a(".current-lang",b);a("select",b).bind("change",function(){var f=a(this).find(":selected").text();c.text(f)})});a(function(){e.suggest_options={service_defaults:{service_url:e.h.suggest_url(),service_path:"",flyout_service_url:e.h.flyout_url(),flyout_service_path:"",key:e.acre.freebase.api_key},search:function(){return a.extend({},e.suggest_options.service_defaults,{status:null,parent:"#site-search-box",align:"right",category:"object",filter:"(all without:fus)"})},
_operator:function(){var b=Array.prototype.slice.call(arguments),c=b.shift(),f=a.extend({},e.suggest_options.service_defaults,{type:b.length===1?b[0]:b,type_strict:c}),h=[c];a.each(b,function(j,i){h.push("type:"+i)});f.filter="("+h.join(" ")+")";return f},any:function(){var b=Array.prototype.slice.call(arguments);b.unshift("any");return e.suggest_options._operator.apply(null,b)},all:function(){var b=Array.prototype.slice.call(arguments);b.unshift("all");return e.suggest_options._operator.apply(null,
b)},should:function(){var b=Array.prototype.slice.call(arguments);b.unshift("should");return e.suggest_options._operator.apply(null,b)},instance:function(b){var c=a.extend({},e.suggest_options.service_defaults,{category:"instance",type:b,type_strict:e.h.is_metaweb_system_type(b)?"any":"should"}),f=["any","type:"+b,"without:fus","without:inst"];a.each(["user","domain","type"],function(h,j){if(b==="/freebase/"+j+"_profile"){f.push("type:/type/"+j);return false}});b==="/book/book_subject"&&f.push("type:/base/skosbase/skos_concept");
c.filter="("+f.join(" ")+")";return c},cotype:function(){var b=a.extend({},e.suggest_options.service_defaults,{category:"cotype"}),c=["all","type:/type/type","(not domain:/type)","(not domain:/freebase)","(any (not domain:/common) (any type:/common/topic type:/common/uri_template type:/common/uri_property))"];e.user?c.push("(any without:hidden source:"+e.user.id+")"):c.push("without:hidden");b.filter="("+c.join(" ")+")";if(e.acre.freebase.googleapis_url)b.mql_filter=[{"/freebase/type_hints/enumeration":{value:true,
optional:"forbidden"},"/freebase/type_hints/mediator":{value:true,optional:"forbidden"}}];return b},included_type:function(){return e.suggest_options.cotype()},expected_type:function(){var b=a.extend({},e.suggest_options.service_defaults,{category:"expected_type"}),c=["all","type:/type/type"];e.user?c.push("(any without:hidden source:"+e.user.id+")"):c.push("without:hidden");b.filter="("+c.join(" ")+")";return b},delegate_property:function(){var b=a.extend({},e.suggest_options.service_defaults,{type:"/type/property",
type_strict:"any"}),c=["all","type:/type/property","(not domain:/type)"];e.user?c.push("(any without:hidden source:"+e.user.id+")"):c.push("without:hidden");b.filter="("+c.join(" ")+")";return b}}});a(function(){var b=a("#SearchBox .SearchBox-input,#fb-search-input"),c=a("#fb-search");b.suggest(e.suggest_options.search());var f=a("#site-search-label"),h=a("#site-search-box .fbs-pane");b.bind("fb-select",function(j,i){window.location=e.h.fb_url(i.id);return false}).bind("fb-pane-show",function(){f.html("<span>Select an item from the list</span>").removeClass("loading")}).bind("fb-textchange",
function(){a.trim(b.val())===""?f.html("<span>Start typing to get some suggestions</span>").removeClass("loading"):f.html("<span>Searching...</span>").addClass("loading")}).bind("fb-error",function(){f.html("<span>Sorry, something went wrong. Please try again later</span>").removeClass("loading")}).focus(function(){if(!f.is(":visible")){a("#site-search-label").slideDown("fast");c.addClass("active")}}).blur(function(){if(!h.is(":visible")&&f.is(":visible")){a("#site-search-label").slideUp("fast");
c.removeClass("active")}});a(".SearchBox-form").submit(function(){return a.trim(a("#fb-search-input").val()).length==0?false:true})});e.disable=function(b){a(b).attr("disabled","disabled").addClass("disabled")};e.enable=function(b){a(b).removeAttr("disabled").removeClass("disabled")};e.lang_select=function(b,c){if(c==="/lang/en"){a(this).removeAttr("name");if(!a(":input[name]",this.form).length){window.location=a(this.form).attr("action");return}}this.form.submit()};e.edit_lang_select=function(b,
c){setTimeout(function(){a(window).trigger("fb.edit.lang.select",c)},0)};e.devbar={div:a("#devbar"),touch:function(){/\.(freebase|sandbox\-freebase)\.com$/.test(e.acre.request.server_name)?a.ajax({url:e.acre.freebase.googleapis_url?e.h.fb_googleapis_url("/touch"):e.h.fb_api_url("/api/service/touch"),dataType:"jsonp"}):a.ajax({url:"/acre/touch"});return false},txn_ids:[],txn:function(){return e.devbar.view_txn(this.href,e.devbar.txn_ids)},view_txn:function(b,c){if(c&&c.length)window.location=b+"?"+
a.param({tid:c},true);return false},ajaxComplete:function(b){if(b&&b.readyState===4)(b=b.getResponseHeader("x-metaweb-tid"))&&e.devbar.txn_ids.push(b)},init:function(){$nav_user_controls=a(".nav-user-controls");$user_controls=a("#user-controls");a("#signedin .trigger").click(function(){if($user_controls.is(":hidden")){$user_controls.fadeIn();$nav_user_controls.addClass("active")}else{$user_controls.fadeOut();$nav_user_controls.removeClass("active")}return false});a("html").click(function(){if($user_controls.is(":visible")){$user_controls.fadeOut();
$nav_user_controls.removeClass("active")}});$user_controls.click(function(b){b.stopPropagation()});a("#devbar-touch > a").click(e.devbar.touch);e.tid&&e.devbar.txn_ids.push(e.tid);a("#devbar-txn > a").click(e.devbar.txn);a.ajaxSetup({complete:e.devbar.ajaxComplete})}};e.devbar.init()}})(jQuery,window.freebase);
(function(a,e){var g=e.h={type:a.type||function(){var d={};"Boolean Number String Function Array Date RegExp Object".split(" ").forEach(function(b){d["[object "+b+"]"]=b.toLowerCase()});return function(b){return b==null?String(b):d[Object.prototype.toString.call(b)]||"object"}}(),parse_params:function(d){if(a.isArray(d)){var b={};a.each(d,function(c,f){b[f[0]]=f[1]});return b}return d},build_url:function(d){if(d&&d.indexOf("://")===-1)throw"Host must contain scheme: "+d;var b=d||"",c,f;if(arguments.length>
1){c=Array.prototype.slice.call(arguments);c.shift();for(var h=[],j=0,i=c.length;j<i;j++){var k=c[j];if(g.type(k)==="string")h.push(k);else{f={};for(j=j;j<i;j++)f=a.extend(f,g.parse_params(c[j]));break}}c=h.join("")}if(c&&c.indexOf("/")!==0)throw"Path must begin with a '/': "+c;if(c)b+=c;if(b==="")b="/";a.isEmptyObject(f)||(b+="?"+a.param(f,true));return b},fb_url:function(){var d=Array.prototype.slice.call(arguments);d.unshift(null);e.lang!=="/lang/en"&&d.push({lang:e.lang});return g.build_url.apply(null,
d)},ajax_url:function(){var d=Array.prototype.slice.call(arguments);d.unshift("/ajax");return g.reentrant_url.apply(null,d)},static_url:function(){var d=Array.prototype.slice.call(arguments);d.unshift("/static");return g.reentrant_url.apply(null,d)},reentrant_url:function(d,b){b=g.resolve_reentrant_path(b);b=b.replace(/^\/\//,d+"/");var c=Array.prototype.slice.call(arguments,2);c.unshift(b);c.unshift(null);return g.build_url.apply(null,c)},resolve_reentrant_path:function(d){d=d||"";if(d.indexOf("//")==
0)return d;if(d.indexOf("lib/")===0)return e.acre.current_script.app.path+d.substring(3);else{if(d&&d[0]!="/")d="/"+d;return e.acre.request.script.app.path+d}},suggest_url:function(){return e.acre.freebase.googleapis_url?g.build_url(e.acre.freebase.googleapis_url,"/search"):g.legacy_fb_url("/private/suggest")},flyout_url:function(){return g.legacy_fb_url("/private/flyout")},legacy_fb_url:function(){var d=Array.prototype.slice.call(arguments),b=e.acre.freebase.site_host.replace(/^(https?\:\/\/)([^\.]+)\./,
"$1www.").replace(":"+e.acre.request.server_port,"");d.unshift(b);return g.build_url.apply(null,d)},fb_api_url:function(){var d=Array.prototype.slice.call(arguments);d.unshift(e.acre.freebase.service_url);return g.build_url.apply(null,d)},fb_googleapis_url:function(){if(e.acre.freebase.googleapis_url){var d=Array.prototype.slice.call(arguments);d.unshift(e.acre.freebase.googleapis_url);return g.build_url.apply(null,d)}throw"fb.acre.freebase.googleapis_url is not defined";},wiki_url:function(){var d=
Array.prototype.slice.call(arguments);d.unshift("http://wiki.freebase.com","/wiki/");return g.build_url.apply(null,d)},lib_base_url:function(d){d=e.acre.metadata.libs[d];return d.base_url+d.version},image_url:function(d,b){return e.acre.freebase.imgurl(d,b.maxwidth,b.maxheight,b.mode,b.pad,b.errorid)},is_metaweb_system_type:function(d){return d.indexOf("/type/")===0||d.indexOf("/common/")===0&&d!=="/common/topic"||d.indexOf("/freebase/")===0&&d.indexOf("_profile")===d.length-8}}})(jQuery,window.freebase);
(function(a,e){var g=e.permission={init:function(){if(e.user){var d=e.c;d&&d.id&&a.ajax({url:e.h.ajax_url("lib/permission/has_permission.ajax"),data:{id:d.id,user_id:e.user.id},dataType:"json",success:function(b){g.has_permission=b.result&&b.result[d.id]===true;console.log("has_permission",g.has_permission);a(window).trigger("fb.permission.has_permission",g.has_permission)}});check_permissioned_objects(a(".edit-perm"),e.user.id)}}};a(window).bind("fb.user.signedin",g.init);a(window).bind("fb.permission.has_permission",
function(d,b){b&&a(".edit").show()})})(jQuery,window.freebase);
function check_permissioned_objects(a,e){if(a.length&&e){var g={},d=[];$.each(a,function(){var b=$(this).metadata().id;if(b&&!g[b]){d.push(b);g[b]=1}});d.length&&$.ajax({url:fb.h.ajax_url("lib/permission/has_permission.ajax"),data:{id:d,user_id:e},traditional:true,dataType:"json",success:function(b){var c=b.result||{};$.each(a,function(){var f=$(this).metadata().id;f&&c[f]===true?$(this).show():$(this).addClass("edit-perm-lock")})}})}}
(function(a,e){var g=e.incompatible_types={dialog:null,check:function(d,b,c,f){a.ajax({url:e.h.ajax_url("lib/incompatible_types/incompatible_types.ajax"),data:{id:d,type:b},dataType:"json",success:function(h){h=h.result||[];if(h.length){h=h[0];f(d,h,b)}else c(d,b)}})},suggest_incompatible_callback:function(d,b){return function(c,f,h){if(!g.dialog)g.dialog=a(".incompatible-dialog");if(g.dialog.length){a(".incompatible-topic",g.dialog).text(c);a(".incompatible-existing",g.dialog).text(f);a(".incompatible-type",
g.dialog).text(h);d.data("suggest");g.dialog.overlay({close:"button",closeOnClick:false,load:true,mask:{color:"#000",loadSpeed:200,opacity:0.5},onClose:function(){d.focus().select();a("button",g.dialog).unbind()},onLoad:function(){a(".button-cancel",g.dialog).focus();a(".button-submit").click(function(){b(c,h)})}})}else{confirm("Because "+c+" is already Typed as "+f+", it's unlikely it should also be Typed as "+h+". Are you shure you want to continue")&&b(c,h);d.focus().select()}}}}})(jQuery,window.freebase);
(function(a,e){e.require("dojo.date.stamp");e.require("dojo.date.locale");e.require("dojo.number");var g,d=false,b={"long":1,"short":1,full:1,medium:1},c=/^\d{4}$/,f=/^\d{4}\-\d{2}$/,h=/L/g,j=window.i18n={normalize_pattern:function(i){return i.replace(h,"M")},ize:function(i){j.ize_datetime(i);j.ize_number(i)},ize_datetime:function(i){i=a("time",i).each(function(){var k=a(this),l=k.attr("datetime");if(l){var m=k.attr("data-format");l=j.datetime(l,m);k.text(l)}});d&&i.attr("dir","rtl");i.css("visibility",
"visible")},ize_datetime_input:function(i){i=a(i);var k=i.val();if(k!==""){k=j.datetime(k);i.val(k)}d&&i.attr("dir","rtl")},datetime:function(i,k){var l=e.date.stamp.fromISOString(i),m={selector:"date"};if(k)if(b[k])m.formatLength=k;else m.datePattern=g["dateFormatItem-"+k];else m.datePattern=c.test(i)?g["dateFormatItem-y"]:f.test(i)?g["dateFormatItem-yMMM"]:g["dateFormat-long"];if(m.datePattern)m.datePattern=j.normalize_pattern(m.datePattern);return e.date.locale.format(l,m)},ize_number:function(i){i=
a(".number",i).each(function(){var k=a(this),l=k.attr("data-value");if(l!=null){l=j.number(l);k.text(l)}});d&&i.attr("dir","rtl");i.css("visibility","visible")},ize_number_input:function(i){i=a(i);var k=i.val();if(k!==""){k=j.number(k);i.val(k)}d&&i.attr("dir","rtl")},number:function(i){return e.number.format(i)},_get_edit_script:function(i,k){j._get_edit_script.loaded?k():a.getScript(i+"/i18n-edit.mf.js",function(){j._get_edit_script.loaded=1;k()})},text_edit:function(i,k,l,m,n){j._get_edit_script(k,
function(){j.edit.text_edit_begin(k,l,m,n)});return false}};e.ready(function(){if(e.locale==="ar"||e.locale==="he")d=true;g=e.date.locale._getGregorianBundle();j.ize()})})(jQuery,dojo);
(function(a,e){var g=e.flag={merge:function(d){return g.flag(d,"merge_begin")},split:function(d){return g.flag(d,"split_begin")},"delete":function(d){return g.flag(d,"delete_begin")},offensive:function(d){return g.flag(d,"offensive_begin")},flag:function(d,b){d=a(d);if(d.is(".editing"))return false;d.addClass("editing");e.get_script(e.h.static_url("lib/flag/flag-edit.mf.js"),function(){g.edit[b](d)});return false},undo:function(d,b){d=a(d);if(d.is(".editing"))return false;d.addClass("editing");e.get_script(e.h.static_url("lib/flag/flag-edit.mf.js"),
function(){g.edit.undo_begin(d,b)});return false}}})(jQuery,window.freebase);