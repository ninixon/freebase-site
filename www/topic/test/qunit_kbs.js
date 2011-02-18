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
 */

;(function($) {

  window.freebase = window.fb = {};

  $(function() {
    run_tests($, fb);
  });

})(jQuery);


function run_tests($, fb) {

  test("current", function() {
    var kbs = fb.kbs.init("#test");
    ok(!$("#test .kbs.current").length, "current should not be set");
    ok(!kbs.get_current().length, "current should not be set");
    $("#ds1-ts2-kbs").addClass("current");
    var current = kbs.get_current();
    ok(current.is("#ds1-ts2-kbs"), 'current.is("#ds1-ts2-kbs")');
  });

  test("_next_domain", function() {
    var kbs = fb.kbs.init("#test");
    var current = $("#ds1-kbs");
    var next = kbs._next_domain(current);
    ok(next.is("#ds2"), 'next.is("#ds2")');
    next = kbs._next_domain(next);
    ok(next.is("#ds3"), 'next.is("#ds3")');
    next = kbs._next_domain(next);
    ok(next.is("#ds1"), 'next.is("#ds1")');

    current = $("#ds1-ts2-kbs");
    next = kbs._next_domain(current);
    ok(next.is("#ds2"), 'next.is("#ds2")');

    current = $("#ds3-ts1-kbs");
    next = kbs._next_domain(current);
    ok(next.is("#ds1"), 'next.is("#ds1")');

    current = $("#ds3-ts1-ps2-kbs");
    next = kbs._next_domain(current);
    ok(next.is("#ds1"), 'next.is("#ds1")');
  });

  test("next_domain", function() {
    var kbs = fb.kbs.init("#test");
    kbs.next_domain();
    ok(kbs.get_current().is("#ds1-kbs"), 'kbs.get_current().is("#ds1-kbs")');

    kbs.next_domain();
    ok(kbs.get_current().is("#ds2-kbs"), 'kbs.get_current().is("#ds2-kbs")');

    kbs.next_domain();
    ok(kbs.get_current().is("#ds3-kbs"), 'kbs.get_current().is("#ds3-kbs")');

    kbs.next_domain();
    ok(kbs.get_current().is("#ds1-kbs"), 'kbs.get_current().is("#ds1-kbs")');

    $("#test .current").removeClass("current");
    $("#ds1-ts3-ps2-kbs").addClass("current");
    kbs.next_domain();
    ok(kbs.get_current().is("#ds2-kbs"), 'kbs.get_current().is("#ds2-kbs")');

    $("#test .current").removeClass("current");
    $("#ds3-ts1-ps2-kbs").addClass("current");
    kbs.next_domain();
    ok(kbs.get_current().is("#ds1-kbs"), 'kbs.get_current().is("#ds1-kbs")');
  });


  test("_prev_domain", function() {
    var kbs = fb.kbs.init("#test");
    var current = $("#ds1-kbs");
    var prev = kbs._prev_domain(current);
    ok(prev.is("#ds3"), 'prev.is("#ds3")');

    prev = kbs._prev_domain(prev);
    ok(prev.is("#ds2"), 'prev.is("#ds2")');

    prev = kbs._prev_domain(prev);
    ok(prev.is("#ds1"), 'prev.is("#ds1")');

    current = $("#ds1-ts3-ps2-kbs");
    prev = kbs._prev_domain(current);
    ok(prev.is("#ds1"), 'prev.is("#ds1")');

    current = $("#ds1-ts2-kbs");
    prev = kbs._prev_domain(current);
    ok(prev.is("#ds1"), 'prev.is("#ds1")');
  });

  test("prev_domain", function() {
    var kbs = fb.kbs.init("#test");
    kbs.prev_domain();
    ok(kbs.get_current().is("#ds3-kbs"), 'kbs.get_current().is("#ds3-kbs")');

    kbs.prev_domain();
    ok(kbs.get_current().is("#ds2-kbs"), 'kbs.get_current().is("#ds2-kbs")');

    kbs.prev_domain();
    ok(kbs.get_current().is("#ds1-kbs"), 'kbs.get_current().is("#ds1-kbs")');

    kbs.prev_domain();
    ok(kbs.get_current().is("#ds3-kbs"), 'kbs.get_current().is("#ds3-kbs")');

    $("#test .current").removeClass("current");
    $("#ds1-ts3-ps2-kbs").addClass("current");
    kbs.prev_domain();
    ok(kbs.get_current().is("#ds1-kbs"), 'kbs.get_current().is("#ds1-kbs")');

    $("#test .current").removeClass("current");
    $("#ds3-ts1-ps2-kbs").addClass("current");
    kbs.prev_domain();
    ok(kbs.get_current().is("#ds3-kbs"), 'kbs.get_current().is("#ds3-kbs")');
  });


  test("_next_type", function() {
    var kbs = fb.kbs.init("#test");
    var current = $("#ds1-kbs");
    var next = kbs._next_type(current);
    ok(next.is("#ds1-ts1"), 'next.is("#ds1-ts1")');

    next = kbs._next_type(next);
    ok(next.is("#ds1-ts2"), 'next.is("#ds1-ts2")');

    next = kbs._next_type(next);
    ok(next.is("#ds1-ts3"), 'next.is("#ds1-ts3")');

    next = kbs._next_type(next);
    ok(next.is("#ds3-ts1"), 'next.is("#ds3-ts1")');

    next = kbs._next_type(next);
    ok(next.is("#ds1-ts1"), 'next.is("#ds1-ts1")');

    current = $("#ds3-ts1-ps2-kbs");
    next = kbs._next_type(current);
    ok(next.is("#ds1-ts1"), 'next.is("#ds1-ts1")');

    current = $("#ds1-ts1-ps2-kbs");
    next = kbs._next_type(current);
    ok(next.is("#ds1-ts2"), 'next.is("#ds1-ts2")');

    current = $("#ds2");
    next = kbs._next_type(current);
    ok(next.is("#ds3-ts1"), 'next.is("#ds3-ts1")');

    current = $("#ds1-ts3-ps2-kbs");
    next = kbs._next_type(current);
    ok(next.is("#ds3-ts1"), 'next.is("#ds3-ts1")');
  });

  test("next_type", function() {
    var kbs = fb.kbs.init("#test");
    kbs.next_type();
    ok(kbs.get_current().is("#ds1-ts1-kbs"), 'kbs.get_current().is("#ds1-ts1-kbs")');

    kbs.next_type();
    ok(kbs.get_current().is("#ds1-ts2-kbs"), 'kbs.get_current().is("#ds1-ts2-kbs")');

    kbs.next_type();
    ok(kbs.get_current().is("#ds1-ts3-kbs"), 'kbs.get_current().is("#ds1-ts3-kbs")');

    kbs.next_type();
    ok(kbs.get_current().is("#ds3-ts1-kbs"), 'kbs.get_current().is("#ds3-ts1-kbs")');

    kbs.next_type();
    ok(kbs.get_current().is("#ds1-ts1-kbs"), 'kbs.get_current().is("#ds1-ts1-kbs")');

    $("#test .current").removeClass("current");
    $("#ds1-ts3-ps2-kbs").addClass("current");
    kbs.next_type();
    ok(kbs.get_current().is("#ds3-ts1-kbs"), 'kbs.get_current().is("#ds3-ts1-kbs")');

    $("#test .current").removeClass("current");
    $("#ds2-kbs").addClass("current");
    kbs.next_type();
    ok(kbs.get_current().is("#ds3-ts1-kbs"), 'kbs.get_current().is("#ds3-ts1-kbs")');
  });

  test("_prev_type", function() {
    var kbs = fb.kbs.init("#test");
    var current = $("#ds1-kbs");
    var prev = kbs._prev_type(current);
    ok(prev.is("#ds3-ts1"), 'prev.is("#ds3-ts1")');

    prev = kbs._prev_type(prev);
    ok(prev.is("#ds1-ts3"), 'prev.is("#ds1-ts3")');

    prev = kbs._prev_type(prev);
    ok(prev.is("#ds1-ts2"), 'prev.is("#ds1-ts2")');

    prev = kbs._prev_type(prev);
    ok(prev.is("#ds1-ts1"), 'prev.is("#ds1-ts1")');

    prev = kbs._prev_type(prev);
    ok(prev.is("#ds3-ts1"), 'prev.is("#ds3-ts1")');

    current = $("#ds3-ts1-ps2-kbs");
    prev = kbs._prev_type(current);
    ok(prev.is("#ds3-ts1"), 'prev.is("#ds3-ts1")');

    current = $("#ds3-ts1-ps1");
    prev = kbs._prev_type(current);
    ok(prev.is("#ds3-ts1"), 'prev.is("#ds3-ts1")');

    current = $("#ds1-ts1-kbs");
    prev = kbs._prev_type(current);
    ok(prev.is("#ds3-ts1"), 'prev.is("#ds3-ts1")');
  });

  test("prev_type", function() {
    var kbs = fb.kbs.init("#test");
    kbs.prev_type();
    ok(kbs.get_current().is("#ds3-ts1-kbs"), 'kbs.get_current().is("#ds3-ts1-kbs")');

    kbs.prev_type();
    ok(kbs.get_current().is("#ds1-ts3-kbs"), 'kbs.get_current().is("#ds1-ts3-kbs")');

    kbs.prev_type();
    ok(kbs.get_current().is("#ds1-ts2-kbs"), 'kbs.get_current().is("#ds1-ts2-kbs")');

    kbs.prev_type();
    ok(kbs.get_current().is("#ds1-ts1-kbs"), 'kbs.get_current().is("#ds1-ts1-kbs")');

    kbs.prev_type();
    ok(kbs.get_current().is("#ds3-ts1-kbs"), 'kbs.get_current().is("#ds3-ts1-kbs")');

    $("#test .current").removeClass("current");
    $("#ds1-kbs").addClass("current");
    kbs.prev_type();
    ok(kbs.get_current().is("#ds3-ts1-kbs"), 'kbs.get_current().is("#ds3-ts1-kbs")');

    $("#test .current").removeClass("current");
    $("#ds3-ts1-ps2-kbs").addClass("current");
    kbs.prev_type();
    ok(kbs.get_current().is("#ds3-ts1-kbs"), 'kbs.get_current().is("#ds3-ts1-kbs")');
  });


  test("_next_prop", function() {
    var kbs = fb.kbs.init("#test");
    var current = $("#ds1-kbs");
    var next = kbs._next_prop(current);
    ok(next.is("#ds1-ts1-ps1"), 'next.is("#ds1-ts1-ps1")');

    next = kbs._next_prop(next);
    ok(next.is("#ds1-ts1-ps2"), 'next.is("#ds1-ts1-ps2")');

    next = kbs._next_prop(next);
    ok(next.is("#ds1-ts3-ps1"), 'next.is("#ds1-ts3-ps1")');

    next = kbs._next_prop(next);
    ok(next.is("#ds1-ts3-ps2"), 'next.is("#ds1-ts3-ps2")');

    next = kbs._next_prop(next);
    ok(next.is("#ds3-ts1-ps1"), 'next.is("#ds3-ts1-ps1")');

    next = kbs._next_prop(next);
    ok(next.is("#ds3-ts1-ps2"), 'next.is("#ds3-ts1-ps2")');

    next = kbs._next_prop(next);
    ok(next.is("#ds1-ts1-ps1"), 'next.is("#ds1-ts1-ps1")');

    current = $("#ds1-ts1-ps2-kbs");
    next = kbs._next_prop(current);
    ok(next.is("#ds1-ts3-ps1"), 'next.is("#ds1-ts3-ps1")');

    current = $("#ds2");
    next = kbs._next_prop(current);
   ok(next.is("#ds3-ts1-ps1"), 'next.is("#ds3-ts1-ps1")');

    current = $("#ds1-ts1-ps2-kbs");
    next = kbs._next_prop(current);
    ok(next.is("#ds1-ts3-ps1"), 'next.is("#ds1-ts3-ps1")');
  });

  test("next_prop", function() {
    var kbs = fb.kbs.init("#test");
    kbs.next_prop();
    ok(kbs.get_current().is("#ds1-ts1-ps1-kbs"), 'kbs.get_current().is("#ds1-ts1-ps1-kbs")');

    kbs.next_prop();
    ok(kbs.get_current().is("#ds1-ts1-ps2-kbs"), 'kbs.get_current().is("#ds1-ts1-ps2-kbs")');

    kbs.next_prop();
    ok(kbs.get_current().is("#ds1-ts3-ps1-kbs"), 'kbs.get_current().is("#ds1-ts3-ps1-kbs")');

    kbs.next_prop();
    ok(kbs.get_current().is("#ds1-ts3-ps2-kbs"), 'kbs.get_current().is("#ds1-ts3-ps2-kbs")');

    kbs.next_prop();
    ok(kbs.get_current().is("#ds3-ts1-ps1-kbs"), 'kbs.get_current().is("#ds3-ts1-ps1-kbs")');

    kbs.next_prop();
    ok(kbs.get_current().is("#ds3-ts1-ps2-kbs"), 'kbs.get_current().is("#ds3-ts1-ps2-kbs")');

    kbs.next_prop();
    ok(kbs.get_current().is("#ds1-ts1-ps1-kbs"), 'kbs.get_current().is("#ds1-ts1-ps1-kbs")');

    $("#test .current").removeClass("current");
    $("#ds1-ts3-ps2-kbs").addClass("current");
    kbs.next_prop();
    ok(kbs.get_current().is("#ds3-ts1-ps1-kbs"), 'kbs.get_current().is("#ds3-ts1-ps1-kbs")');

    $("#test .current").removeClass("current");
    $("#ds2-kbs").addClass("current");
    kbs.next_prop();
    ok(kbs.get_current().is("#ds3-ts1-ps1-kbs"), 'kbs.get_current().is("#ds3-ts1-ps1-kbs")');
  });

  test("_prev_prop", function() {
    var kbs = fb.kbs.init("#test");
    var current = $("#ds1-kbs");
    var prev = kbs._prev_prop(current);
    ok(prev.is("#ds3-ts1-ps2"), 'prev.is("#ds3-ts1-ps2")');

    prev = kbs._prev_prop(prev);
    ok(prev.is("#ds3-ts1-ps1"), 'prev.is("#ds3-ts1-ps1")');

    prev = kbs._prev_prop(prev);
    ok(prev.is("#ds1-ts3-ps2"), 'prev.is("#ds1-ts3-ps2")');

    prev = kbs._prev_prop(prev);
    ok(prev.is("#ds1-ts3-ps1"), 'prev.is("#ds1-ts3-ps1")');

    prev = kbs._prev_prop(prev);
    ok(prev.is("#ds1-ts1-ps2"), 'prev.is("#ds1-ts1-ps2")');

    prev = kbs._prev_prop(prev);
    ok(prev.is("#ds1-ts1-ps1"), 'prev.is("#ds1-ts1-ps1")');

    prev = kbs._prev_prop(prev);
    ok(prev.is("#ds3-ts1-ps2"), 'prev.is("#ds3-ts1-ps2")');

    current = $("#ds3-ts1-ps1-kbs");
    prev = kbs._prev_prop(current);
    ok(prev.is("#ds1-ts3-ps2"), 'prev.is("#ds3-ts3-ps2")');

    current = $("#ds1-ts3-ps1");
    prev = kbs._prev_prop(current);
    ok(prev.is("#ds1-ts1-ps2"), 'prev.is("#ds1-ts1-ps2")');

    current = $("#ds1-ts2");
    prev = kbs._prev_prop(current);
    ok(prev.is("#ds1-ts1-ps2"), 'prev.is("#ds1-ts1-ps2")');
  });
};
