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

var h = acre.require("helper/helpers_util.sjs");

function route(apps, rules, scope) {

  var dump = acre.request.base_path === "/_fs_routing";

  var rules_dump = {};

  var routers = ["host", "home", "prefix", "object"];
  for (var i=0,l=routers.length; i<l; i++) {
    var name = routers[i];
    var router_file = acre.require("routing/" + name);
    var router_class;
    if (router_file.router) {
      router_class = router_file.router;
    }
    else if (router_file.exports && typeof router_file.exports === "object" && router_file.exports.router) {
      router_class = router_file.exports.router;
    }
    else {
      throw "A router needs to be defined in " + name;
    }
    var router = new router_class(apps);
    var rule = rules[name];
    if (rule) {
      // to over-ride or add to existing rules defined in the specific router
      router.add(rule);
    }

    if (dump && "dump" in router) {
      rules_dump[name] = router.dump();
    }
    else {
      router.route(scope.acre.request);
    }
  }

  if (dump) {
    rules_dump['apps'] = apps;
    scope.acre.write(JSON.stringify(rules_dump, null, 2));
    scope.acre.exit();
  }
  else {
    // TODO: not found
    acre.route("error/error.mjt");
  }
};