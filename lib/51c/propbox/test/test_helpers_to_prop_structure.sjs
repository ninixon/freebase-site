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

acre.require('/test/lib').enable(this);

acre.require("test/mock")
    .playback(this, "propbox/test/playback_test_helpers_to_prop_structure.json");

var h = acre.require("helper/helpers.sjs");
var ph = acre.require("propbox/helpers.sjs");
var queries = acre.require("propbox/queries.sjs");
var th = acre.require("propbox/test/helpers.sjs");

var scope = this;

test("to_prop_structure", function() {
  function test_structure(structure, schema) {
    th.test_minimal_prop_structure(scope, structure, schema);
    var ect = schema.expected_type;
    var properties = h.get_disambiguators(schema);
    if (properties && properties.length) {
      ok(structure.properties);
      equal(structure.properties.length, properties.length);
      for (var i=0,l=properties.length; i<l; i++) {
        test_structure(structure.properties[i], properties[i]);
      }
    }
  };
  [
    "/base/slamdunk/player/number",
    "/base/slamdunk/player/height",
    "/base/slamdunk/player/position",
    "/base/slamdunk/player/school",
    "/basketball/basketball_player/position_s",

    // cvt
    "/basketball/basketball_player/player_statistics",
    "/sports/pro_athlete/sports_played_professionally"
  ].forEach(function(pid) {
    (function() {
      var schema, expected;
      queries.prop_schema(pid, "/lang/en")
        .then(function(s) {
          schema = s;
        });
      acre.async.wait_on_results();
      ok(schema, "Got " + pid + " schema");
      var structure = ph.to_prop_structure(schema, "/lang/en");
      test_structure(structure, schema);
    })();
  });
});

acre.test.report();