(() => {
  "use strict";
  var r,
    t = {},
    e = {};
  function i(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var n = (e[r] = { exports: {} });
    return t[r](n, n.exports, i), n.exports;
  }
  (i.m = t),
    (r = []),
    (i.O = (t, e, o, n) => {
      if (!e) {
        var a = 1 / 0;
        for (l = 0; l < r.length; l++) {
          for (var [e, o, n] = r[l], c = !0, s = 0; s < e.length; s++)
            (!1 & n || a >= n) && Object.keys(i.O).every((r) => i.O[r](e[s]))
              ? e.splice(s--, 1)
              : ((c = !1), n < a && (a = n));
          if (c) {
            r.splice(l--, 1);
            var p = o();
            void 0 !== p && (t = p);
          }
        }
        return t;
      }
      n = n || 0;
      for (var l = r.length; l > 0 && r[l - 1][2] > n; l--) r[l] = r[l - 1];
      r[l] = [e, o, n];
    }),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (r) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (r, t) => Object.prototype.hasOwnProperty.call(r, t)),
    (() => {
      var r;
      i.g.importScripts && (r = i.g.location + "");
      var t = i.g.document;
      if (!r && t && (t.currentScript && (r = t.currentScript.src), !r)) {
        var e = t.getElementsByTagName("script");
        if (e.length) for (var o = e.length - 1; o > -1 && !r; ) r = e[o--].src;
      }
      if (!r)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (r = r
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (i.p = r);
    })(),
    (() => {
      var r = { 666: 0 };
      i.O.j = (t) => 0 === r[t];
      var t = (t, e) => {
          var o,
            n,
            [a, c, s] = e,
            p = 0;
          if (a.some((t) => 0 !== r[t])) {
            for (o in c) i.o(c, o) && (i.m[o] = c[o]);
            if (s) var l = s(i);
          }
          for (t && t(e); p < a.length; p++)
            (n = a[p]), i.o(r, n) && r[n] && r[n][0](), (r[n] = 0);
          return i.O(l);
        },
        e = (self.webpackChunkbattleship = self.webpackChunkbattleship || []);
      e.forEach(t.bind(null, 0)), (e.push = t.bind(null, e.push.bind(e)));
    })();
})();
