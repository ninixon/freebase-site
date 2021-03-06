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
 */

CueCard.Popup = function(left, top, height, windows, handlers) {
    this._left = left;
    this._top = top;
    this._height = height;
    this._windows = windows;
    this._handlers = handlers || {};
    
    this._pendingContinuations = [];
    
    this.elmt = $('<div class="cuecard-popup-container"></div>')
        .css("top", (this._top + this._height) + "px")
        .css("left", this._left + "px")
        .appendTo('body');
        
    this._addEventHandlers();
};

CueCard.Popup.prototype.addPendingContinuation = function(cont) {
    this._pendingContinuations.push(cont);
};

CueCard.Popup.prototype.reposition = function() {
    var ourHeight = this.elmt.height();
    var ourWidth = this.elmt.width();
    
    if (this._top + this._height + ourHeight >= $(window).height()) {
        this.elmt.css("top", (this._top - ourHeight - 5) + "px");
    } else {
        this.elmt.css("top", (this._top + this._height) + "px");
    }
    if (this._left + ourWidth >= $(window).width()) {
        this.elmt.css("left", ($(window).width() - ourWidth - 25) + "px");
    } else {
        this.elmt.css("left", (this._left) + "px");
    }
};

CueCard.Popup.prototype.close = function() {
    this._remove();
    this._pendingContinuations = null;
};

CueCard.Popup.prototype.cancel = function() {
    if (this.elmt != null) {
        this._remove();
        this._cancelPendingContinuations();
        this._pendingContinuations = null;
    }
};

CueCard.Popup.prototype._remove = function() {
    this._removeEventHandlers();
    
    this.elmt.remove();
    this.elmt = null;
};

CueCard.Popup.prototype._cancelPendingContinuations = function() {
    for (var i = 0; i < this._pendingContinuations.length; i++) {
        try {
            this._pendingContinuations[i].cancel();
        } catch (e) {
            //console.log(e);
        }
    }
    this._pendingContinuations = [];
};

CueCard.Popup.prototype._addEventHandlers = function() {
    var self = this;
    this._handleKeyDown = function(evt) {
        return self._onKeyDown(evt);
    };
    this._handleMouseDown = function(evt) {
        return self._onMouseDown(evt);
    };
    
    for (var i = 0; i < this._windows.length; i++) {
        var win = this._windows[i];
        try {
            $(win.document).keydown(this._handleKeyDown).mousedown(this._handleMouseDown);
        } catch (e) {
            alert("Unable to install keyup handler on codemirror window");
        }
    }
};

CueCard.Popup.prototype._removeEventHandlers = function() {
    var self = this;
    for (var i = 0; i < this._windows.length; i++) {
        var win = this._windows[i];
        try {
            $(win.document).unbind("keydown", this._handleKeyDown).unbind("mousedown", this._handleMouseDown);
        } catch (e) {
            alert("Unable to install keyup handler on codemirror window");
        }
    }
};

CueCard.Popup.prototype._onKeyDown = function(evt) {
    if (evt.keyCode == 27) { // esc
        this.cancel();
        if ("onCancel" in this._handlers) {
            this._handlers["onCancel"]("key");
        }
    }
};

CueCard.Popup.prototype._onMouseDown = function(evt) {
    if (this.mouseEventOutsidePopup(evt)) {
        this.cancel();
        if ("onCancel" in this._handlers) {
            this._handlers["onCancel"]("mouse");
        }
    }
};

CueCard.Popup.prototype.mouseEventOutsidePopup = function(evt) {
    if (evt.currentTarget != this.elmt[0].ownerDocument) {
        return true;
    } else {
        var offset = this.elmt.offset();
        if (evt.pageX < offset.left || evt.pageX > offset.left + this.elmt.width() ||
            evt.pageY < offset.top || evt.pageY > offset.top + this.elmt.height()) {
            return true;
        }
    }
    return false;
};
