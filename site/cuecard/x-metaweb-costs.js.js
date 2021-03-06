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

CueCard.XMetawebCosts = {
    'tu': { meaning: 'time/user', subsystem: 'graphd' },
    'ts': { meaning: 'time/system', subsystem: 'graphd' },
    'tr': { meaning: 'time/real', subsystem: 'graphd' },
    'te': { meaning: 'time/overall', subsystem: 'graphd' },
    'pr': { meaning: 'page reclaims', subsystem: 'graphd' },
    'pf': { meaning: 'page faults', subsystem: 'graphd' },
    'dw': { meaning: 'primitive data writes', subsystem: 'graphd' },
    'dr': { meaning: 'primitive data reads', subsystem: 'graphd' },
    'in': { meaning: 'index size reads', subsystem: 'graphd' },
    'ir': { meaning: 'index element reads', subsystem: 'graphd' },
    'iw': { meaning: 'index element write', subsystem: 'graphd' },
    'va': { meaning: 'value allocation', subsystem: 'graphd' },
    
    'dt': { meaning: 'total time spent in the session', subsystem: 'client/me' },
    'mr': { meaning: 'number of mql requests (independent of caches)', subsystem: 'client/me' },
    'ch': { meaning: 'cache/hit (memcache, not Squid)', subsystem: 'client/me', important: true },
    'cm': { meaning: 'cache/miss (memcache, not Squid)', subsystem: 'client/me' },
    'cr': { meaning: 'cache/read (memcache, not Squid)', subsystem: 'client/me' },
    'cs': { meaning: 'cache skip (browser shift+reload skips memcache)', subsystem: 'client/me' },
    'lh': { meaning: 'lojson-cache/hit', subsystem: 'client/me' },
    'lm': { meaning: 'lojson-cache/miss', subsystem: 'client/me' },
    'lr': { meaning: 'lojson-cache/read', subsystem: 'client/me' },
    'nreqs': { meaning: 'graph requests', subsystem: 'client/me', important: true },
    'tf': { meaning: 'time/formatted', subsystem: 'client/me' },
    'tg': { meaning: 'time/graph', subsystem: 'client/me', important: true },
    'rt': { meaning: 'relevance/time', subsystem: 'client/me' },
    'cc': { meaning: 'cpu time (utime + stime)', subsystem: 'client/me' },
    'mcu': { meaning: 'mql user time', subsystem: 'client/me' },
    'mcs': { meaning: 'mql system time', subsystem: 'client/me' },
    'tm': { meaning: 'mql real time', subsystem: 'client/me', important: true },
    'utime': { meaning: 'time in user mode (float)', subsystem: 'client/me' },
    'stime': { meaning: 'time in system mode (float)', subsystem: 'client/me' },
    'maxrss': { meaning: 'maximum resident set size', subsystem: 'client/me' },
    'ixrss': { meaning: 'shared memory size', subsystem: 'client/me' },
    'idrss': { meaning: 'unshared memory size', subsystem: 'client/me' },
    'isrss': { meaning: 'unshared stack size', subsystem: 'client/me' },
    'minflt': { meaning: 'page faults not requiring I/O', subsystem: 'client/me' },
    'majflt': { meaning: 'page faults requiring I/O', subsystem: 'client/me' },
    'nswap': { meaning: 'number of swap outs', subsystem: 'client/me' },
    'inblock': { meaning: 'block input operations', subsystem: 'client/me' },
    'oublock': { meaning: 'block output operations', subsystem: 'client/me' },
    'msgsnd': { meaning: 'messages sent', subsystem: 'client/me' },
    'msgrcv': { meaning: 'messages received', subsystem: 'client/me' },
    'nsignals': { meaning: 'signals received', subsystem: 'client/me' },
    'nvcsw': { meaning: 'voluntary context switches', subsystem: 'client/me' },
    'nivcsw': { meaning: 'involuntary context switches', subsystem: 'client/me' },
    'br': { meaning: 'number of blob requests', subsystem: 'client/me' },
    'bctn': { meaning: 'cdb thumbnail time - from blobclient POV', subsystem: 'client/me' },
    
    'rt': { meaning: 'relevance/time (FIX: same name, different semantics?)', subsystem: 'gix' },
    'pt': { meaning: 'postgres time', subsystem: 'gix' },
    'qt': { meaning: 'actual postgres query time', subsystem: 'gix' },
    'ct': { meaning: 'postgres connect time', subsystem: 'gix' },
    'mt': { meaning: 'MQL time', subsystem: 'gix' },
    
    'tt': { meaning: 'total time', subsystem: 'other' },
    'mt': { meaning: 'total MQL time: mql_output + mql_filter', subsystem: 'other' },
    'mft': { meaning: 'MQL filter time (total time, ie. not per invocation)', subsystem: 'other' },
    'mfc': { meaning: 'number of mql_filter invocations', subsystem: 'other' },
    
    'sh': { meaning: 'squid/hit', subsystem: 'cache' },
    'st': { meaning: 'squid/total time', subsystem: 'cache' },
    'so': { meaning: 'squid/origin server time', subsystem: 'cache' }
};