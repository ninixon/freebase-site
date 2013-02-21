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

var h = acre.require("helper/helpers.sjs");
var deferred = acre.require("promise/deferred");
var freebase = acre.require("promise/apis").freebase;
var i18n = acre.require("i18n/i18n.sjs");
var pq = acre.require("propbox/queries.sjs");
var ph = acre.require("propbox/helpers.sjs");

/**
 * Collection query.
 * Given a list of topics (ids) and properties (pids),
 * query for each property values for each topic.
 * The query respects mediators and deep properties
 * (i.e., disambiguating properties of the expected types).
 *
 * A pid MUST be a qualified property id (i.e., /type/object/name)
 * or a fully qualified property path separated by "." (i.e., /film/film/starring./film/performance/actor).
 * Currently only 2 levels (<pid1>.<pid2>) are supported.
 * Also, pid2 must be a valid disambiguating property on the expected type of pid1.
 *
 * To display/render the query result,
 * @see propbox/collection.mjt
 */
function collection(topic_ids, pids, lang, limit) {
  limit = limit || 5;
  if (!h.isArray(topic_ids)) {
    topic_ids = [topic_ids];
  }
  if (!h.isArray(pids)) {
    pids = [pids];
  }

  var pid_map = {};
  var pid_order = [];
  pids.forEach(function(pid_path) {
    var paths = pid_path.split(".", 2);
    if (paths.length) {
      var pid = paths[0];
      var subpids = pid_map[pid];
      if (!subpids) {
        subpids = pid_map[pid] = [];
        pid_order.push(pid);
      }
      if (paths.length === 2 && paths[1]) {
        subpids.push(paths[1]);
      }
    }
  });

  return pq.prop_structures.apply(null, pid_order.concat([lang]))
    .then(function(props) {
      var q = {
        "id|=": topic_ids
      };
      props.forEach(function(prop) {
        // filter out sub-properties not specified in pid_path
        var subprops = prop.properties || [];
        if (subprops.length) {
          var subpids = pid_map[prop.id];
          if (subpids && subpids.length) {
            var filtered_subprops = subprops.filter(function(subprop) {
              return subpids.indexOf(subprop.id) !== -1;
            });
            prop.properties = filtered_subprops;
          }
        }
        var prop_query = ph.mqlread_query(null, prop, null, lang, {limit:limit});
        h.extend(q, prop_query);
      });
      return freebase.mqlread([q])
        .then(function(env) {
          var values = [];
          env.result.forEach(function(row, i) {
            var value = {id:row.id};
            props.forEach(function(prop) {
              var pid = prop.id;
              var subvalues = ph.to_prop_values(prop, row[pid], lang);
              value[pid] = h.extend(true, {values:subvalues}, prop);
            });
            values.push(value);
          });
          return {
            structures: props,
            values: values
          };
        });
    });
};