!(function (e, t) {
  if ("object" == typeof exports && "object" == typeof module) module.exports = t()
  else if ("function" == typeof define && define.amd) define([], t)
  else {
    var n = t()
    for (var r in n) ("object" == typeof exports ? exports : e)[r] = n[r]
  }
})(globalThis, () =>
  (() => {
    "use strict"
    var e = {
        d: (t, n) => {
          for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: n[r] })
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t)
      },
      t = {}
    e.d(t, { default: () => oi })
    const n = 15,
      r = 573,
      i = -1,
      s = 0,
      a = 4,
      o = 0,
      c = 1,
      l = -2
    function d(e) {
      return f(e.map(([e, t]) => new Array(e).fill(t, 0, e)))
    }
    function f(e) {
      return e.reduce((e, t) => e.concat(Array.isArray(t) ? f(t) : t), [])
    }
    const u = [0, 1, 2, 3].concat(
      ...d([
        [2, 4],
        [2, 5],
        [4, 6],
        [4, 7],
        [8, 8],
        [8, 9],
        [16, 10],
        [16, 11],
        [32, 12],
        [32, 13],
        [64, 14],
        [64, 15],
        [2, 0],
        [1, 16],
        [1, 17],
        [2, 18],
        [2, 19],
        [4, 20],
        [4, 21],
        [8, 22],
        [8, 23],
        [16, 24],
        [16, 25],
        [32, 26],
        [32, 27],
        [64, 28],
        [64, 29]
      ])
    )
    function p() {
      const e = this
      function t(e, t) {
        let n = 0
        do {
          ;(n |= 1 & e), (e >>>= 1), (n <<= 1)
        } while (--t > 0)
        return n >>> 1
      }
      e.build_tree = function (i) {
        const s = e.dyn_tree,
          a = e.stat_desc.static_tree,
          o = e.stat_desc.elems
        let c,
          l,
          d,
          f = -1
        for (i.heap_len = 0, i.heap_max = r, c = 0; c < o; c++)
          0 !== s[2 * c] ? ((i.heap[++i.heap_len] = f = c), (i.depth[c] = 0)) : (s[2 * c + 1] = 0)
        for (; i.heap_len < 2; )
          (d = i.heap[++i.heap_len] = f < 2 ? ++f : 0), (s[2 * d] = 1), (i.depth[d] = 0), i.opt_len--, a && (i.static_len -= a[2 * d + 1])
        for (e.max_code = f, c = Math.floor(i.heap_len / 2); c >= 1; c--) i.pqdownheap(s, c)
        d = o
        do {
          ;(c = i.heap[1]),
            (i.heap[1] = i.heap[i.heap_len--]),
            i.pqdownheap(s, 1),
            (l = i.heap[1]),
            (i.heap[--i.heap_max] = c),
            (i.heap[--i.heap_max] = l),
            (s[2 * d] = s[2 * c] + s[2 * l]),
            (i.depth[d] = Math.max(i.depth[c], i.depth[l]) + 1),
            (s[2 * c + 1] = s[2 * l + 1] = d),
            (i.heap[1] = d++),
            i.pqdownheap(s, 1)
        } while (i.heap_len >= 2)
        ;(i.heap[--i.heap_max] = i.heap[1]),
          (function (t) {
            const i = e.dyn_tree,
              s = e.stat_desc.static_tree,
              a = e.stat_desc.extra_bits,
              o = e.stat_desc.extra_base,
              c = e.stat_desc.max_length
            let l,
              d,
              f,
              u,
              p,
              m,
              w = 0
            for (u = 0; u <= n; u++) t.bl_count[u] = 0
            for (i[2 * t.heap[t.heap_max] + 1] = 0, l = t.heap_max + 1; l < r; l++)
              (d = t.heap[l]),
                (u = i[2 * i[2 * d + 1] + 1] + 1),
                u > c && ((u = c), w++),
                (i[2 * d + 1] = u),
                d > e.max_code ||
                  (t.bl_count[u]++,
                  (p = 0),
                  d >= o && (p = a[d - o]),
                  (m = i[2 * d]),
                  (t.opt_len += m * (u + p)),
                  s && (t.static_len += m * (s[2 * d + 1] + p)))
            if (0 !== w) {
              do {
                for (u = c - 1; 0 === t.bl_count[u]; ) u--
                t.bl_count[u]--, (t.bl_count[u + 1] += 2), t.bl_count[c]--, (w -= 2)
              } while (w > 0)
              for (u = c; 0 !== u; u--)
                for (d = t.bl_count[u]; 0 !== d; )
                  (f = t.heap[--l]), f > e.max_code || (i[2 * f + 1] != u && ((t.opt_len += (u - i[2 * f + 1]) * i[2 * f]), (i[2 * f + 1] = u)), d--)
            }
          })(i),
          (function (e, r, i) {
            const s = []
            let a,
              o,
              c,
              l = 0
            for (a = 1; a <= n; a++) s[a] = l = (l + i[a - 1]) << 1
            for (o = 0; o <= r; o++) (c = e[2 * o + 1]), 0 !== c && (e[2 * o] = t(s[c]++, c))
          })(s, e.max_code, i.bl_count)
      }
    }
    function m(e, t, n, r, i) {
      const s = this
      ;(s.static_tree = e), (s.extra_bits = t), (s.extra_base = n), (s.elems = r), (s.max_length = i)
    }
    ;(p._length_code = [0, 1, 2, 3, 4, 5, 6, 7].concat(
      ...d([
        [2, 8],
        [2, 9],
        [2, 10],
        [2, 11],
        [4, 12],
        [4, 13],
        [4, 14],
        [4, 15],
        [8, 16],
        [8, 17],
        [8, 18],
        [8, 19],
        [16, 20],
        [16, 21],
        [16, 22],
        [16, 23],
        [32, 24],
        [32, 25],
        [32, 26],
        [31, 27],
        [1, 28]
      ])
    )),
      (p.base_length = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 0]),
      (p.base_dist = [
        0, 1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024, 1536, 2048, 3072, 4096, 6144, 8192, 12288, 16384, 24576
      ]),
      (p.d_code = function (e) {
        return e < 256 ? u[e] : u[256 + (e >>> 7)]
      }),
      (p.extra_lbits = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]),
      (p.extra_dbits = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]),
      (p.extra_blbits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]),
      (p.bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
    const w = d([
      [144, 8],
      [112, 9],
      [24, 7],
      [8, 8]
    ])
    m.static_ltree = f(
      [
        12, 140, 76, 204, 44, 172, 108, 236, 28, 156, 92, 220, 60, 188, 124, 252, 2, 130, 66, 194, 34, 162, 98, 226, 18, 146, 82, 210, 50, 178, 114,
        242, 10, 138, 74, 202, 42, 170, 106, 234, 26, 154, 90, 218, 58, 186, 122, 250, 6, 134, 70, 198, 38, 166, 102, 230, 22, 150, 86, 214, 54, 182,
        118, 246, 14, 142, 78, 206, 46, 174, 110, 238, 30, 158, 94, 222, 62, 190, 126, 254, 1, 129, 65, 193, 33, 161, 97, 225, 17, 145, 81, 209, 49,
        177, 113, 241, 9, 137, 73, 201, 41, 169, 105, 233, 25, 153, 89, 217, 57, 185, 121, 249, 5, 133, 69, 197, 37, 165, 101, 229, 21, 149, 85, 213,
        53, 181, 117, 245, 13, 141, 77, 205, 45, 173, 109, 237, 29, 157, 93, 221, 61, 189, 125, 253, 19, 275, 147, 403, 83, 339, 211, 467, 51, 307,
        179, 435, 115, 371, 243, 499, 11, 267, 139, 395, 75, 331, 203, 459, 43, 299, 171, 427, 107, 363, 235, 491, 27, 283, 155, 411, 91, 347, 219,
        475, 59, 315, 187, 443, 123, 379, 251, 507, 7, 263, 135, 391, 71, 327, 199, 455, 39, 295, 167, 423, 103, 359, 231, 487, 23, 279, 151, 407, 87,
        343, 215, 471, 55, 311, 183, 439, 119, 375, 247, 503, 15, 271, 143, 399, 79, 335, 207, 463, 47, 303, 175, 431, 111, 367, 239, 495, 31, 287,
        159, 415, 95, 351, 223, 479, 63, 319, 191, 447, 127, 383, 255, 511, 0, 64, 32, 96, 16, 80, 48, 112, 8, 72, 40, 104, 24, 88, 56, 120, 4, 68,
        36, 100, 20, 84, 52, 116, 3, 131, 67, 195, 35, 163, 99, 227
      ].map((e, t) => [e, w[t]])
    )
    const h = d([[30, 5]])
    function x(e, t, n, r, i) {
      const s = this
      ;(s.good_length = e), (s.max_lazy = t), (s.nice_length = n), (s.max_chain = r), (s.func = i)
    }
    ;(m.static_dtree = f(
      [0, 16, 8, 24, 4, 20, 12, 28, 2, 18, 10, 26, 6, 22, 14, 30, 1, 17, 9, 25, 5, 21, 13, 29, 3, 19, 11, 27, 7, 23].map((e, t) => [e, h[t]])
    )),
      (m.static_l_desc = new m(m.static_ltree, p.extra_lbits, 257, 286, n)),
      (m.static_d_desc = new m(m.static_dtree, p.extra_dbits, 0, 30, n)),
      (m.static_bl_desc = new m(null, p.extra_blbits, 0, 19, 7))
    const g = [
        new x(0, 0, 0, 0, 0),
        new x(4, 4, 8, 4, 1),
        new x(4, 5, 16, 8, 1),
        new x(4, 6, 32, 32, 1),
        new x(4, 4, 16, 16, 2),
        new x(8, 16, 32, 32, 2),
        new x(8, 16, 128, 128, 2),
        new x(8, 32, 128, 256, 2),
        new x(32, 128, 258, 1024, 2),
        new x(32, 258, 258, 4096, 2)
      ],
      b = ["need dictionary", "stream end", "", "", "stream error", "data error", "", "buffer error", "", ""],
      v = 113,
      y = 666,
      _ = 262
    function k(e, t, n, r) {
      const i = e[2 * t],
        s = e[2 * n]
      return i < s || (i == s && r[t] <= r[n])
    }
    function z() {
      const e = this
      let t, n, r, d, f, u, w, h, x, z, S, A, C, W, F, E, U, D, j, q, T, O, R, I, L, B, M, K, N, V, P, H, Y
      const X = new p(),
        Z = new p(),
        J = new p()
      let G, $, Q, ee, te, ne
      function re() {
        let t
        for (t = 0; t < 286; t++) P[2 * t] = 0
        for (t = 0; t < 30; t++) H[2 * t] = 0
        for (t = 0; t < 19; t++) Y[2 * t] = 0
        ;(P[512] = 1), (e.opt_len = e.static_len = 0), ($ = Q = 0)
      }
      function ie(e, t) {
        let n,
          r = -1,
          i = e[1],
          s = 0,
          a = 7,
          o = 4
        0 === i && ((a = 138), (o = 3)), (e[2 * (t + 1) + 1] = 65535)
        for (let c = 0; c <= t; c++)
          (n = i),
            (i = e[2 * (c + 1) + 1]),
            (++s < a && n == i) ||
              (s < o ? (Y[2 * n] += s) : 0 !== n ? (n != r && Y[2 * n]++, Y[32]++) : s <= 10 ? Y[34]++ : Y[36]++,
              (s = 0),
              (r = n),
              0 === i ? ((a = 138), (o = 3)) : n == i ? ((a = 6), (o = 3)) : ((a = 7), (o = 4)))
      }
      function se(t) {
        e.pending_buf[e.pending++] = t
      }
      function ae(e) {
        se(255 & e), se((e >>> 8) & 255)
      }
      function oe(e, t) {
        let n
        const r = t
        ne > 16 - r ? ((n = e), (te |= (n << ne) & 65535), ae(te), (te = n >>> (16 - ne)), (ne += r - 16)) : ((te |= (e << ne) & 65535), (ne += r))
      }
      function ce(e, t) {
        const n = 2 * e
        oe(65535 & t[n], 65535 & t[n + 1])
      }
      function le(e, t) {
        let n,
          r,
          i = -1,
          s = e[1],
          a = 0,
          o = 7,
          c = 4
        for (0 === s && ((o = 138), (c = 3)), n = 0; n <= t; n++)
          if (((r = s), (s = e[2 * (n + 1) + 1]), !(++a < o && r == s))) {
            if (a < c)
              do {
                ce(r, Y)
              } while (0 != --a)
            else 0 !== r ? (r != i && (ce(r, Y), a--), ce(16, Y), oe(a - 3, 2)) : a <= 10 ? (ce(17, Y), oe(a - 3, 3)) : (ce(18, Y), oe(a - 11, 7))
            ;(a = 0), (i = r), 0 === s ? ((o = 138), (c = 3)) : r == s ? ((o = 6), (c = 3)) : ((o = 7), (c = 4))
          }
      }
      function de() {
        16 == ne ? (ae(te), (te = 0), (ne = 0)) : ne >= 8 && (se(255 & te), (te >>>= 8), (ne -= 8))
      }
      function fe(t, n) {
        let r, i, s
        if (
          ((e.dist_buf[$] = t),
          (e.lc_buf[$] = 255 & n),
          $++,
          0 === t ? P[2 * n]++ : (Q++, t--, P[2 * (p._length_code[n] + 256 + 1)]++, H[2 * p.d_code(t)]++),
          0 == (8191 & $) && M > 2)
        ) {
          for (r = 8 * $, i = T - U, s = 0; s < 30; s++) r += H[2 * s] * (5 + p.extra_dbits[s])
          if (((r >>>= 3), Q < Math.floor($ / 2) && r < Math.floor(i / 2))) return !0
        }
        return $ == G - 1
      }
      function ue(t, n) {
        let r,
          i,
          s,
          a,
          o = 0
        if (0 !== $)
          do {
            ;(r = e.dist_buf[o]),
              (i = e.lc_buf[o]),
              o++,
              0 === r
                ? ce(i, t)
                : ((s = p._length_code[i]),
                  ce(s + 256 + 1, t),
                  (a = p.extra_lbits[s]),
                  0 !== a && ((i -= p.base_length[s]), oe(i, a)),
                  r--,
                  (s = p.d_code(r)),
                  ce(s, n),
                  (a = p.extra_dbits[s]),
                  0 !== a && ((r -= p.base_dist[s]), oe(r, a)))
          } while (o < $)
        ce(256, t), (ee = t[513])
      }
      function pe() {
        ne > 8 ? ae(te) : ne > 0 && se(255 & te), (te = 0), (ne = 0)
      }
      function me(t, n, r) {
        oe(0 + (r ? 1 : 0), 3),
          (function (t, n, r) {
            pe(), (ee = 8), ae(n), ae(~n), e.pending_buf.set(h.subarray(t, t + n), e.pending), (e.pending += n)
          })(t, n)
      }
      function we(n) {
        ;(function (t, n, r) {
          let i,
            s,
            a = 0
          M > 0
            ? (X.build_tree(e),
              Z.build_tree(e),
              (a = (function () {
                let t
                for (ie(P, X.max_code), ie(H, Z.max_code), J.build_tree(e), t = 18; t >= 3 && 0 === Y[2 * p.bl_order[t] + 1]; t--);
                return (e.opt_len += 3 * (t + 1) + 5 + 5 + 4), t
              })()),
              (i = (e.opt_len + 3 + 7) >>> 3),
              (s = (e.static_len + 3 + 7) >>> 3),
              s <= i && (i = s))
            : (i = s = n + 5),
            n + 4 <= i && -1 != t
              ? me(t, n, r)
              : s == i
              ? (oe(2 + (r ? 1 : 0), 3), ue(m.static_ltree, m.static_dtree))
              : (oe(4 + (r ? 1 : 0), 3),
                (function (e, t, n) {
                  let r
                  for (oe(e - 257, 5), oe(t - 1, 5), oe(n - 4, 4), r = 0; r < n; r++) oe(Y[2 * p.bl_order[r] + 1], 3)
                  le(P, e - 1), le(H, t - 1)
                })(X.max_code + 1, Z.max_code + 1, a + 1),
                ue(P, H)),
            re(),
            r && pe()
        })(U >= 0 ? U : -1, T - U, n),
          (U = T),
          t.flush_pending()
      }
      function he() {
        let e, n, r, i
        do {
          if (((i = x - R - T), 0 === i && 0 === T && 0 === R)) i = f
          else if (-1 == i) i--
          else if (T >= f + f - _) {
            h.set(h.subarray(f, f + f), 0), (O -= f), (T -= f), (U -= f), (e = C), (r = e)
            do {
              ;(n = 65535 & S[--r]), (S[r] = n >= f ? n - f : 0)
            } while (0 != --e)
            ;(e = f), (r = e)
            do {
              ;(n = 65535 & z[--r]), (z[r] = n >= f ? n - f : 0)
            } while (0 != --e)
            i += f
          }
          if (0 === t.avail_in) return
          ;(e = t.read_buf(h, T + R, i)), (R += e), R >= 3 && ((A = 255 & h[T]), (A = ((A << E) ^ (255 & h[T + 1])) & F))
        } while (R < _ && 0 !== t.avail_in)
      }
      function xe(e) {
        let t,
          n,
          r = L,
          i = T,
          s = I
        const a = T > f - _ ? T - (f - _) : 0
        let o = V
        const c = w,
          l = T + 258
        let d = h[i + s - 1],
          u = h[i + s]
        I >= N && (r >>= 2), o > R && (o = R)
        do {
          if (((t = e), h[t + s] == u && h[t + s - 1] == d && h[t] == h[i] && h[++t] == h[i + 1])) {
            ;(i += 2), t++
            do {} while (
              h[++i] == h[++t] &&
              h[++i] == h[++t] &&
              h[++i] == h[++t] &&
              h[++i] == h[++t] &&
              h[++i] == h[++t] &&
              h[++i] == h[++t] &&
              h[++i] == h[++t] &&
              h[++i] == h[++t] &&
              i < l
            )
            if (((n = 258 - (l - i)), (i = l - 258), n > s)) {
              if (((O = e), (s = n), n >= o)) break
              ;(d = h[i + s - 1]), (u = h[i + s])
            }
          }
        } while ((e = 65535 & z[e & c]) > a && 0 != --r)
        return s <= R ? s : R
      }
      ;(e.depth = []),
        (e.bl_count = []),
        (e.heap = []),
        (P = []),
        (H = []),
        (Y = []),
        (e.pqdownheap = function (t, n) {
          const r = e.heap,
            i = r[n]
          let s = n << 1
          for (; s <= e.heap_len && (s < e.heap_len && k(t, r[s + 1], r[s], e.depth) && s++, !k(t, i, r[s], e.depth)); )
            (r[n] = r[s]), (n = s), (s <<= 1)
          r[n] = i
        }),
        (e.deflateInit = function (t, a, c, p, b, y) {
          return (
            p || (p = 8),
            b || (b = 8),
            y || (y = 0),
            (t.msg = null),
            a == i && (a = 6),
            b < 1 || b > 9 || 8 != p || c < 9 || c > 15 || a < 0 || a > 9 || y < 0 || y > 2
              ? l
              : ((t.dstate = e),
                (u = c),
                (f = 1 << u),
                (w = f - 1),
                (W = b + 7),
                (C = 1 << W),
                (F = C - 1),
                (E = Math.floor((W + 3 - 1) / 3)),
                (h = new Uint8Array(2 * f)),
                (z = []),
                (S = []),
                (G = 1 << (b + 6)),
                (e.pending_buf = new Uint8Array(4 * G)),
                (r = 4 * G),
                (e.dist_buf = new Uint16Array(G)),
                (e.lc_buf = new Uint8Array(G)),
                (M = a),
                (K = y),
                (function (t) {
                  return (
                    (t.total_in = t.total_out = 0),
                    (t.msg = null),
                    (e.pending = 0),
                    (e.pending_out = 0),
                    (n = v),
                    (d = s),
                    (X.dyn_tree = P),
                    (X.stat_desc = m.static_l_desc),
                    (Z.dyn_tree = H),
                    (Z.stat_desc = m.static_d_desc),
                    (J.dyn_tree = Y),
                    (J.stat_desc = m.static_bl_desc),
                    (te = 0),
                    (ne = 0),
                    (ee = 8),
                    re(),
                    (function () {
                      ;(x = 2 * f), (S[C - 1] = 0)
                      for (let e = 0; e < C - 1; e++) S[e] = 0
                      ;(B = g[M].max_lazy),
                        (N = g[M].good_length),
                        (V = g[M].nice_length),
                        (L = g[M].max_chain),
                        (T = 0),
                        (U = 0),
                        (R = 0),
                        (D = I = 2),
                        (q = 0),
                        (A = 0)
                    })(),
                    o
                  )
                })(t))
          )
        }),
        (e.deflateEnd = function () {
          return 42 != n && n != v && n != y
            ? l
            : ((e.lc_buf = null), (e.dist_buf = null), (e.pending_buf = null), (S = null), (z = null), (h = null), (e.dstate = null), n == v ? -3 : o)
        }),
        (e.deflateParams = function (e, t, n) {
          let r = o
          return (
            t == i && (t = 6),
            t < 0 || t > 9 || n < 0 || n > 2
              ? l
              : (g[M].func != g[t].func && 0 !== e.total_in && (r = e.deflate(1)),
                M != t && ((M = t), (B = g[M].max_lazy), (N = g[M].good_length), (V = g[M].nice_length), (L = g[M].max_chain)),
                (K = n),
                r)
          )
        }),
        (e.deflateSetDictionary = function (e, t, r) {
          let i,
            s = r,
            a = 0
          if (!t || 42 != n) return l
          if (s < 3) return o
          for (
            s > f - _ && ((s = f - _), (a = r - s)),
              h.set(t.subarray(a, a + s), 0),
              T = s,
              U = s,
              A = 255 & h[0],
              A = ((A << E) ^ (255 & h[1])) & F,
              i = 0;
            i <= s - 3;
            i++
          )
            (A = ((A << E) ^ (255 & h[i + 2])) & F), (z[i & w] = S[A]), (S[A] = i)
          return o
        }),
        (e.deflate = function (i, p) {
          let x, k, W, L, N
          if (p > a || p < 0) return l
          if (!i.next_out || (!i.next_in && 0 !== i.avail_in) || (n == y && p != a)) return (i.msg = b[2 - l]), l
          if (0 === i.avail_out) return (i.msg = b[7]), -5
          var V
          if (
            ((t = i),
            (L = d),
            (d = p),
            42 == n &&
              ((k = (8 + ((u - 8) << 4)) << 8),
              (W = ((M - 1) & 255) >> 1),
              W > 3 && (W = 3),
              (k |= W << 6),
              0 !== T && (k |= 32),
              (k += 31 - (k % 31)),
              (n = v),
              se(((V = k) >> 8) & 255),
              se(255 & V)),
            0 !== e.pending)
          ) {
            if ((t.flush_pending(), 0 === t.avail_out)) return (d = -1), o
          } else if (0 === t.avail_in && p <= L && p != a) return (t.msg = b[7]), -5
          if (n == y && 0 !== t.avail_in) return (i.msg = b[7]), -5
          if (0 !== t.avail_in || 0 !== R || (p != s && n != y)) {
            switch (((N = -1), g[M].func)) {
              case 0:
                N = (function (e) {
                  let n,
                    i = 65535
                  for (i > r - 5 && (i = r - 5); ; ) {
                    if (R <= 1) {
                      if ((he(), 0 === R && e == s)) return 0
                      if (0 === R) break
                    }
                    if (((T += R), (R = 0), (n = U + i), (0 === T || T >= n) && ((R = T - n), (T = n), we(!1), 0 === t.avail_out))) return 0
                    if (T - U >= f - _ && (we(!1), 0 === t.avail_out)) return 0
                  }
                  return we(e == a), 0 === t.avail_out ? (e == a ? 2 : 0) : e == a ? 3 : 1
                })(p)
                break
              case 1:
                N = (function (e) {
                  let n,
                    r = 0
                  for (;;) {
                    if (R < _) {
                      if ((he(), R < _ && e == s)) return 0
                      if (0 === R) break
                    }
                    if (
                      (R >= 3 && ((A = ((A << E) ^ (255 & h[T + 2])) & F), (r = 65535 & S[A]), (z[T & w] = S[A]), (S[A] = T)),
                      0 !== r && ((T - r) & 65535) <= f - _ && 2 != K && (D = xe(r)),
                      D >= 3)
                    )
                      if (((n = fe(T - O, D - 3)), (R -= D), D <= B && R >= 3)) {
                        D--
                        do {
                          T++, (A = ((A << E) ^ (255 & h[T + 2])) & F), (r = 65535 & S[A]), (z[T & w] = S[A]), (S[A] = T)
                        } while (0 != --D)
                        T++
                      } else (T += D), (D = 0), (A = 255 & h[T]), (A = ((A << E) ^ (255 & h[T + 1])) & F)
                    else (n = fe(0, 255 & h[T])), R--, T++
                    if (n && (we(!1), 0 === t.avail_out)) return 0
                  }
                  return we(e == a), 0 === t.avail_out ? (e == a ? 2 : 0) : e == a ? 3 : 1
                })(p)
                break
              case 2:
                N = (function (e) {
                  let n,
                    r,
                    i = 0
                  for (;;) {
                    if (R < _) {
                      if ((he(), R < _ && e == s)) return 0
                      if (0 === R) break
                    }
                    if (
                      (R >= 3 && ((A = ((A << E) ^ (255 & h[T + 2])) & F), (i = 65535 & S[A]), (z[T & w] = S[A]), (S[A] = T)),
                      (I = D),
                      (j = O),
                      (D = 2),
                      0 !== i &&
                        I < B &&
                        ((T - i) & 65535) <= f - _ &&
                        (2 != K && (D = xe(i)), D <= 5 && (1 == K || (3 == D && T - O > 4096)) && (D = 2)),
                      I >= 3 && D <= I)
                    ) {
                      ;(r = T + R - 3), (n = fe(T - 1 - j, I - 3)), (R -= I - 1), (I -= 2)
                      do {
                        ++T <= r && ((A = ((A << E) ^ (255 & h[T + 2])) & F), (i = 65535 & S[A]), (z[T & w] = S[A]), (S[A] = T))
                      } while (0 != --I)
                      if (((q = 0), (D = 2), T++, n && (we(!1), 0 === t.avail_out))) return 0
                    } else if (0 !== q) {
                      if (((n = fe(0, 255 & h[T - 1])), n && we(!1), T++, R--, 0 === t.avail_out)) return 0
                    } else (q = 1), T++, R--
                  }
                  return 0 !== q && ((n = fe(0, 255 & h[T - 1])), (q = 0)), we(e == a), 0 === t.avail_out ? (e == a ? 2 : 0) : e == a ? 3 : 1
                })(p)
            }
            if (((2 != N && 3 != N) || (n = y), 0 == N || 2 == N)) return 0 === t.avail_out && (d = -1), o
            if (1 == N) {
              if (1 == p) oe(2, 3), ce(256, m.static_ltree), de(), 1 + ee + 10 - ne < 9 && (oe(2, 3), ce(256, m.static_ltree), de()), (ee = 7)
              else if ((me(0, 0, !1), 3 == p)) for (x = 0; x < C; x++) S[x] = 0
              if ((t.flush_pending(), 0 === t.avail_out)) return (d = -1), o
            }
          }
          return p != a ? o : c
        })
    }
    function S() {
      const e = this
      ;(e.next_in_index = 0), (e.next_out_index = 0), (e.avail_in = 0), (e.total_in = 0), (e.avail_out = 0), (e.total_out = 0)
    }
    S.prototype = {
      deflateInit(e, t) {
        const r = this
        return (r.dstate = new z()), t || (t = n), r.dstate.deflateInit(r, e, t)
      },
      deflate(e) {
        const t = this
        return t.dstate ? t.dstate.deflate(t, e) : l
      },
      deflateEnd() {
        const e = this
        if (!e.dstate) return l
        const t = e.dstate.deflateEnd()
        return (e.dstate = null), t
      },
      deflateParams(e, t) {
        const n = this
        return n.dstate ? n.dstate.deflateParams(n, e, t) : l
      },
      deflateSetDictionary(e, t) {
        const n = this
        return n.dstate ? n.dstate.deflateSetDictionary(n, e, t) : l
      },
      read_buf(e, t, n) {
        const r = this
        let i = r.avail_in
        return (
          i > n && (i = n),
          0 === i
            ? 0
            : ((r.avail_in -= i), e.set(r.next_in.subarray(r.next_in_index, r.next_in_index + i), t), (r.next_in_index += i), (r.total_in += i), i)
        )
      },
      flush_pending() {
        const e = this
        let t = e.dstate.pending
        t > e.avail_out && (t = e.avail_out),
          0 !== t &&
            (e.next_out.set(e.dstate.pending_buf.subarray(e.dstate.pending_out, e.dstate.pending_out + t), e.next_out_index),
            (e.next_out_index += t),
            (e.dstate.pending_out += t),
            (e.total_out += t),
            (e.avail_out -= t),
            (e.dstate.pending -= t),
            0 === e.dstate.pending && (e.dstate.pending_out = 0))
      }
    }
    const A = 0,
      C = 1,
      W = -2,
      F = -3,
      E = -4,
      U = -5,
      D = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535],
      j = 1440,
      q = [
        96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 192, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 160, 0, 8, 0, 0,
        8, 128, 0, 8, 64, 0, 9, 224, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 144, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 208, 81, 7, 17, 0, 8, 104, 0, 8,
        40, 0, 9, 176, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 240, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52, 0, 9, 200,
        81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 168, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 232, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 152, 84, 7, 83, 0, 8,
        124, 0, 8, 60, 0, 9, 216, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 184, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 248, 80, 7, 3, 0, 8, 82, 0, 8, 18,
        85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 196, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 164, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9, 228, 80,
        7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 148, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 212, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 180, 0, 8, 10, 0, 8,
        138, 0, 8, 74, 0, 9, 244, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 204, 81, 7, 15, 0, 8, 102, 0, 8, 38,
        0, 9, 172, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 236, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 156, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 220, 82, 7,
        27, 0, 8, 110, 0, 8, 46, 0, 9, 188, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 252, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0, 8,
        113, 0, 8, 49, 0, 9, 194, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 162, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 226, 80, 7, 6, 0, 8, 89, 0, 8, 25, 0,
        9, 146, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 210, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 178, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 242, 80, 7,
        4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 202, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 170, 0, 8, 5, 0, 8, 133,
        0, 8, 69, 0, 9, 234, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 154, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 218, 82, 7, 23, 0, 8, 109, 0, 8, 45, 0, 9,
        186, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 250, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 198, 81, 7, 11,
        0, 8, 99, 0, 8, 35, 0, 9, 166, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 230, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 150, 84, 7, 67, 0, 8, 123, 0, 8,
        59, 0, 9, 214, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 182, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 246, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192, 8, 0,
        83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 206, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 174, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 238, 80, 7, 9, 0, 8,
        95, 0, 8, 31, 0, 9, 158, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 222, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 190, 0, 8, 15, 0, 8, 143, 0, 8, 79,
        0, 9, 254, 96, 7, 256, 0, 8, 80, 0, 8, 16, 84, 8, 115, 82, 7, 31, 0, 8, 112, 0, 8, 48, 0, 9, 193, 80, 7, 10, 0, 8, 96, 0, 8, 32, 0, 9, 161, 0,
        8, 0, 0, 8, 128, 0, 8, 64, 0, 9, 225, 80, 7, 6, 0, 8, 88, 0, 8, 24, 0, 9, 145, 83, 7, 59, 0, 8, 120, 0, 8, 56, 0, 9, 209, 81, 7, 17, 0, 8,
        104, 0, 8, 40, 0, 9, 177, 0, 8, 8, 0, 8, 136, 0, 8, 72, 0, 9, 241, 80, 7, 4, 0, 8, 84, 0, 8, 20, 85, 8, 227, 83, 7, 43, 0, 8, 116, 0, 8, 52,
        0, 9, 201, 81, 7, 13, 0, 8, 100, 0, 8, 36, 0, 9, 169, 0, 8, 4, 0, 8, 132, 0, 8, 68, 0, 9, 233, 80, 7, 8, 0, 8, 92, 0, 8, 28, 0, 9, 153, 84, 7,
        83, 0, 8, 124, 0, 8, 60, 0, 9, 217, 82, 7, 23, 0, 8, 108, 0, 8, 44, 0, 9, 185, 0, 8, 12, 0, 8, 140, 0, 8, 76, 0, 9, 249, 80, 7, 3, 0, 8, 82,
        0, 8, 18, 85, 8, 163, 83, 7, 35, 0, 8, 114, 0, 8, 50, 0, 9, 197, 81, 7, 11, 0, 8, 98, 0, 8, 34, 0, 9, 165, 0, 8, 2, 0, 8, 130, 0, 8, 66, 0, 9,
        229, 80, 7, 7, 0, 8, 90, 0, 8, 26, 0, 9, 149, 84, 7, 67, 0, 8, 122, 0, 8, 58, 0, 9, 213, 82, 7, 19, 0, 8, 106, 0, 8, 42, 0, 9, 181, 0, 8, 10,
        0, 8, 138, 0, 8, 74, 0, 9, 245, 80, 7, 5, 0, 8, 86, 0, 8, 22, 192, 8, 0, 83, 7, 51, 0, 8, 118, 0, 8, 54, 0, 9, 205, 81, 7, 15, 0, 8, 102, 0,
        8, 38, 0, 9, 173, 0, 8, 6, 0, 8, 134, 0, 8, 70, 0, 9, 237, 80, 7, 9, 0, 8, 94, 0, 8, 30, 0, 9, 157, 84, 7, 99, 0, 8, 126, 0, 8, 62, 0, 9, 221,
        82, 7, 27, 0, 8, 110, 0, 8, 46, 0, 9, 189, 0, 8, 14, 0, 8, 142, 0, 8, 78, 0, 9, 253, 96, 7, 256, 0, 8, 81, 0, 8, 17, 85, 8, 131, 82, 7, 31, 0,
        8, 113, 0, 8, 49, 0, 9, 195, 80, 7, 10, 0, 8, 97, 0, 8, 33, 0, 9, 163, 0, 8, 1, 0, 8, 129, 0, 8, 65, 0, 9, 227, 80, 7, 6, 0, 8, 89, 0, 8, 25,
        0, 9, 147, 83, 7, 59, 0, 8, 121, 0, 8, 57, 0, 9, 211, 81, 7, 17, 0, 8, 105, 0, 8, 41, 0, 9, 179, 0, 8, 9, 0, 8, 137, 0, 8, 73, 0, 9, 243, 80,
        7, 4, 0, 8, 85, 0, 8, 21, 80, 8, 258, 83, 7, 43, 0, 8, 117, 0, 8, 53, 0, 9, 203, 81, 7, 13, 0, 8, 101, 0, 8, 37, 0, 9, 171, 0, 8, 5, 0, 8,
        133, 0, 8, 69, 0, 9, 235, 80, 7, 8, 0, 8, 93, 0, 8, 29, 0, 9, 155, 84, 7, 83, 0, 8, 125, 0, 8, 61, 0, 9, 219, 82, 7, 23, 0, 8, 109, 0, 8, 45,
        0, 9, 187, 0, 8, 13, 0, 8, 141, 0, 8, 77, 0, 9, 251, 80, 7, 3, 0, 8, 83, 0, 8, 19, 85, 8, 195, 83, 7, 35, 0, 8, 115, 0, 8, 51, 0, 9, 199, 81,
        7, 11, 0, 8, 99, 0, 8, 35, 0, 9, 167, 0, 8, 3, 0, 8, 131, 0, 8, 67, 0, 9, 231, 80, 7, 7, 0, 8, 91, 0, 8, 27, 0, 9, 151, 84, 7, 67, 0, 8, 123,
        0, 8, 59, 0, 9, 215, 82, 7, 19, 0, 8, 107, 0, 8, 43, 0, 9, 183, 0, 8, 11, 0, 8, 139, 0, 8, 75, 0, 9, 247, 80, 7, 5, 0, 8, 87, 0, 8, 23, 192,
        8, 0, 83, 7, 51, 0, 8, 119, 0, 8, 55, 0, 9, 207, 81, 7, 15, 0, 8, 103, 0, 8, 39, 0, 9, 175, 0, 8, 7, 0, 8, 135, 0, 8, 71, 0, 9, 239, 80, 7, 9,
        0, 8, 95, 0, 8, 31, 0, 9, 159, 84, 7, 99, 0, 8, 127, 0, 8, 63, 0, 9, 223, 82, 7, 27, 0, 8, 111, 0, 8, 47, 0, 9, 191, 0, 8, 15, 0, 8, 143, 0,
        8, 79, 0, 9, 255
      ],
      T = [
        80, 5, 1, 87, 5, 257, 83, 5, 17, 91, 5, 4097, 81, 5, 5, 89, 5, 1025, 85, 5, 65, 93, 5, 16385, 80, 5, 3, 88, 5, 513, 84, 5, 33, 92, 5, 8193,
        82, 5, 9, 90, 5, 2049, 86, 5, 129, 192, 5, 24577, 80, 5, 2, 87, 5, 385, 83, 5, 25, 91, 5, 6145, 81, 5, 7, 89, 5, 1537, 85, 5, 97, 93, 5,
        24577, 80, 5, 4, 88, 5, 769, 84, 5, 49, 92, 5, 12289, 82, 5, 13, 90, 5, 3073, 86, 5, 193, 192, 5, 24577
      ],
      O = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
      R = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 112, 112],
      I = [
        1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577
      ],
      L = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
      B = 15
    function M() {
      let e, t, n, r, i, s
      function a(e, t, a, o, c, l, d, f, u, p, m) {
        let w, h, x, g, b, v, y, _, k, z, S, C, W, E, D
        ;(z = 0), (b = a)
        do {
          n[e[t + z]]++, z++, b--
        } while (0 !== b)
        if (n[0] == a) return (d[0] = -1), (f[0] = 0), A
        for (_ = f[0], v = 1; v <= B && 0 === n[v]; v++);
        for (y = v, _ < v && (_ = v), b = B; 0 !== b && 0 === n[b]; b--);
        for (x = b, _ > b && (_ = b), f[0] = _, E = 1 << v; v < b; v++, E <<= 1) if ((E -= n[v]) < 0) return F
        if ((E -= n[b]) < 0) return F
        for (n[b] += E, s[1] = v = 0, z = 1, W = 2; 0 != --b; ) (s[W] = v += n[z]), W++, z++
        ;(b = 0), (z = 0)
        do {
          0 !== (v = e[t + z]) && (m[s[v]++] = b), z++
        } while (++b < a)
        for (a = s[x], s[0] = b = 0, z = 0, g = -1, C = -_, i[0] = 0, S = 0, D = 0; y <= x; y++)
          for (w = n[y]; 0 != w--; ) {
            for (; y > C + _; ) {
              if ((g++, (C += _), (D = x - C), (D = D > _ ? _ : D), (h = 1 << (v = y - C)) > w + 1 && ((h -= w + 1), (W = y), v < D)))
                for (; ++v < D && !((h <<= 1) <= n[++W]); ) h -= n[W]
              if (((D = 1 << v), p[0] + D > j)) return F
              ;(i[g] = S = p[0]),
                (p[0] += D),
                0 !== g
                  ? ((s[g] = b), (r[0] = v), (r[1] = _), (v = b >>> (C - _)), (r[2] = S - i[g - 1] - v), u.set(r, 3 * (i[g - 1] + v)))
                  : (d[0] = S)
            }
            for (
              r[1] = y - C,
                z >= a
                  ? (r[0] = 192)
                  : m[z] < o
                  ? ((r[0] = m[z] < 256 ? 0 : 96), (r[2] = m[z++]))
                  : ((r[0] = l[m[z] - o] + 16 + 64), (r[2] = c[m[z++] - o])),
                h = 1 << (y - C),
                v = b >>> C;
              v < D;
              v += h
            )
              u.set(r, 3 * (S + v))
            for (v = 1 << (y - 1); 0 != (b & v); v >>>= 1) b ^= v
            for (b ^= v, k = (1 << C) - 1; (b & k) != s[g]; ) g--, (C -= _), (k = (1 << C) - 1)
          }
        return 0 !== E && 1 != x ? U : A
      }
      function o(a) {
        let o
        for (
          e || ((e = []), (t = []), (n = new Int32Array(B + 1)), (r = []), (i = new Int32Array(B)), (s = new Int32Array(B + 1))),
            t.length < a && (t = []),
            o = 0;
          o < a;
          o++
        )
          t[o] = 0
        for (o = 0; o < B + 1; o++) n[o] = 0
        for (o = 0; o < 3; o++) r[o] = 0
        i.set(n.subarray(0, B), 0), s.set(n.subarray(0, B + 1), 0)
      }
      ;(this.inflate_trees_bits = function (n, r, i, s, c) {
        let l
        return (
          o(19),
          (e[0] = 0),
          (l = a(n, 0, 19, 19, null, null, i, r, s, e, t)),
          l == F
            ? (c.msg = "oversubscribed dynamic bit lengths tree")
            : (l != U && 0 !== r[0]) || ((c.msg = "incomplete dynamic bit lengths tree"), (l = F)),
          l
        )
      }),
        (this.inflate_trees_dynamic = function (n, r, i, s, c, l, d, f, u) {
          let p
          return (
            o(288),
            (e[0] = 0),
            (p = a(i, 0, n, 257, O, R, l, s, f, e, t)),
            p != A || 0 === s[0]
              ? (p == F ? (u.msg = "oversubscribed literal/length tree") : p != E && ((u.msg = "incomplete literal/length tree"), (p = F)), p)
              : (o(288),
                (p = a(i, n, r, 0, I, L, d, c, f, e, t)),
                p != A || (0 === c[0] && n > 257)
                  ? (p == F
                      ? (u.msg = "oversubscribed distance tree")
                      : p == U
                      ? ((u.msg = "incomplete distance tree"), (p = F))
                      : p != E && ((u.msg = "empty distance tree with lengths"), (p = F)),
                    p)
                  : A)
          )
        })
    }
    M.inflate_trees_fixed = function (e, t, n, r) {
      return (e[0] = 9), (t[0] = 5), (n[0] = q), (r[0] = T), A
    }
    const K = 0,
      N = 1,
      V = 2,
      P = 3,
      H = 4,
      Y = 5,
      X = 6,
      Z = 7,
      J = 8,
      G = 9
    function $() {
      const e = this
      let t,
        n,
        r,
        i,
        s = 0,
        a = 0,
        o = 0,
        c = 0,
        l = 0,
        d = 0,
        f = 0,
        u = 0,
        p = 0,
        m = 0
      function w(e, t, n, r, i, s, a, o) {
        let c, l, d, f, u, p, m, w, h, x, g, b, v, y, _, k
        ;(m = o.next_in_index),
          (w = o.avail_in),
          (u = a.bitb),
          (p = a.bitk),
          (h = a.write),
          (x = h < a.read ? a.read - h - 1 : a.end - h),
          (g = D[e]),
          (b = D[t])
        do {
          for (; p < 20; ) w--, (u |= (255 & o.read_byte(m++)) << p), (p += 8)
          if (((c = u & g), (l = n), (d = r), (k = 3 * (d + c)), 0 !== (f = l[k])))
            for (;;) {
              if (((u >>= l[k + 1]), (p -= l[k + 1]), 0 != (16 & f))) {
                for (f &= 15, v = l[k + 2] + (u & D[f]), u >>= f, p -= f; p < 15; ) w--, (u |= (255 & o.read_byte(m++)) << p), (p += 8)
                for (c = u & b, l = i, d = s, k = 3 * (d + c), f = l[k]; ; ) {
                  if (((u >>= l[k + 1]), (p -= l[k + 1]), 0 != (16 & f))) {
                    for (f &= 15; p < f; ) w--, (u |= (255 & o.read_byte(m++)) << p), (p += 8)
                    if (((y = l[k + 2] + (u & D[f])), (u >>= f), (p -= f), (x -= v), h >= y))
                      (_ = h - y),
                        h - _ > 0 && 2 > h - _
                          ? ((a.win[h++] = a.win[_++]), (a.win[h++] = a.win[_++]), (v -= 2))
                          : (a.win.set(a.win.subarray(_, _ + 2), h), (h += 2), (_ += 2), (v -= 2))
                    else {
                      _ = h - y
                      do {
                        _ += a.end
                      } while (_ < 0)
                      if (((f = a.end - _), v > f)) {
                        if (((v -= f), h - _ > 0 && f > h - _))
                          do {
                            a.win[h++] = a.win[_++]
                          } while (0 != --f)
                        else a.win.set(a.win.subarray(_, _ + f), h), (h += f), (_ += f), (f = 0)
                        _ = 0
                      }
                    }
                    if (h - _ > 0 && v > h - _)
                      do {
                        a.win[h++] = a.win[_++]
                      } while (0 != --v)
                    else a.win.set(a.win.subarray(_, _ + v), h), (h += v), (_ += v), (v = 0)
                    break
                  }
                  if (0 != (64 & f))
                    return (
                      (o.msg = "invalid distance code"),
                      (v = o.avail_in - w),
                      (v = p >> 3 < v ? p >> 3 : v),
                      (w += v),
                      (m -= v),
                      (p -= v << 3),
                      (a.bitb = u),
                      (a.bitk = p),
                      (o.avail_in = w),
                      (o.total_in += m - o.next_in_index),
                      (o.next_in_index = m),
                      (a.write = h),
                      F
                    )
                  ;(c += l[k + 2]), (c += u & D[f]), (k = 3 * (d + c)), (f = l[k])
                }
                break
              }
              if (0 != (64 & f))
                return 0 != (32 & f)
                  ? ((v = o.avail_in - w),
                    (v = p >> 3 < v ? p >> 3 : v),
                    (w += v),
                    (m -= v),
                    (p -= v << 3),
                    (a.bitb = u),
                    (a.bitk = p),
                    (o.avail_in = w),
                    (o.total_in += m - o.next_in_index),
                    (o.next_in_index = m),
                    (a.write = h),
                    C)
                  : ((o.msg = "invalid literal/length code"),
                    (v = o.avail_in - w),
                    (v = p >> 3 < v ? p >> 3 : v),
                    (w += v),
                    (m -= v),
                    (p -= v << 3),
                    (a.bitb = u),
                    (a.bitk = p),
                    (o.avail_in = w),
                    (o.total_in += m - o.next_in_index),
                    (o.next_in_index = m),
                    (a.write = h),
                    F)
              if (((c += l[k + 2]), (c += u & D[f]), (k = 3 * (d + c)), 0 === (f = l[k]))) {
                ;(u >>= l[k + 1]), (p -= l[k + 1]), (a.win[h++] = l[k + 2]), x--
                break
              }
            }
          else (u >>= l[k + 1]), (p -= l[k + 1]), (a.win[h++] = l[k + 2]), x--
        } while (x >= 258 && w >= 10)
        return (
          (v = o.avail_in - w),
          (v = p >> 3 < v ? p >> 3 : v),
          (w += v),
          (m -= v),
          (p -= v << 3),
          (a.bitb = u),
          (a.bitk = p),
          (o.avail_in = w),
          (o.total_in += m - o.next_in_index),
          (o.next_in_index = m),
          (a.write = h),
          A
        )
      }
      ;(e.init = function (e, s, a, o, c, l) {
        ;(t = K), (f = e), (u = s), (r = a), (p = o), (i = c), (m = l), (n = null)
      }),
        (e.proc = function (e, h, x) {
          let g,
            b,
            v,
            y,
            _,
            k,
            z,
            S = 0,
            E = 0,
            U = 0
          for (U = h.next_in_index, y = h.avail_in, S = e.bitb, E = e.bitk, _ = e.write, k = _ < e.read ? e.read - _ - 1 : e.end - _; ; )
            switch (t) {
              case K:
                if (
                  k >= 258 &&
                  y >= 10 &&
                  ((e.bitb = S),
                  (e.bitk = E),
                  (h.avail_in = y),
                  (h.total_in += U - h.next_in_index),
                  (h.next_in_index = U),
                  (e.write = _),
                  (x = w(f, u, r, p, i, m, e, h)),
                  (U = h.next_in_index),
                  (y = h.avail_in),
                  (S = e.bitb),
                  (E = e.bitk),
                  (_ = e.write),
                  (k = _ < e.read ? e.read - _ - 1 : e.end - _),
                  x != A)
                ) {
                  t = x == C ? Z : G
                  break
                }
                ;(o = f), (n = r), (a = p), (t = N)
              case N:
                for (g = o; E < g; ) {
                  if (0 === y)
                    return (
                      (e.bitb = S),
                      (e.bitk = E),
                      (h.avail_in = y),
                      (h.total_in += U - h.next_in_index),
                      (h.next_in_index = U),
                      (e.write = _),
                      e.inflate_flush(h, x)
                    )
                  ;(x = A), y--, (S |= (255 & h.read_byte(U++)) << E), (E += 8)
                }
                if (((b = 3 * (a + (S & D[g]))), (S >>>= n[b + 1]), (E -= n[b + 1]), (v = n[b]), 0 === v)) {
                  ;(c = n[b + 2]), (t = X)
                  break
                }
                if (0 != (16 & v)) {
                  ;(l = 15 & v), (s = n[b + 2]), (t = V)
                  break
                }
                if (0 == (64 & v)) {
                  ;(o = v), (a = b / 3 + n[b + 2])
                  break
                }
                if (0 != (32 & v)) {
                  t = Z
                  break
                }
                return (
                  (t = G),
                  (h.msg = "invalid literal/length code"),
                  (x = F),
                  (e.bitb = S),
                  (e.bitk = E),
                  (h.avail_in = y),
                  (h.total_in += U - h.next_in_index),
                  (h.next_in_index = U),
                  (e.write = _),
                  e.inflate_flush(h, x)
                )
              case V:
                for (g = l; E < g; ) {
                  if (0 === y)
                    return (
                      (e.bitb = S),
                      (e.bitk = E),
                      (h.avail_in = y),
                      (h.total_in += U - h.next_in_index),
                      (h.next_in_index = U),
                      (e.write = _),
                      e.inflate_flush(h, x)
                    )
                  ;(x = A), y--, (S |= (255 & h.read_byte(U++)) << E), (E += 8)
                }
                ;(s += S & D[g]), (S >>= g), (E -= g), (o = u), (n = i), (a = m), (t = P)
              case P:
                for (g = o; E < g; ) {
                  if (0 === y)
                    return (
                      (e.bitb = S),
                      (e.bitk = E),
                      (h.avail_in = y),
                      (h.total_in += U - h.next_in_index),
                      (h.next_in_index = U),
                      (e.write = _),
                      e.inflate_flush(h, x)
                    )
                  ;(x = A), y--, (S |= (255 & h.read_byte(U++)) << E), (E += 8)
                }
                if (((b = 3 * (a + (S & D[g]))), (S >>= n[b + 1]), (E -= n[b + 1]), (v = n[b]), 0 != (16 & v))) {
                  ;(l = 15 & v), (d = n[b + 2]), (t = H)
                  break
                }
                if (0 == (64 & v)) {
                  ;(o = v), (a = b / 3 + n[b + 2])
                  break
                }
                return (
                  (t = G),
                  (h.msg = "invalid distance code"),
                  (x = F),
                  (e.bitb = S),
                  (e.bitk = E),
                  (h.avail_in = y),
                  (h.total_in += U - h.next_in_index),
                  (h.next_in_index = U),
                  (e.write = _),
                  e.inflate_flush(h, x)
                )
              case H:
                for (g = l; E < g; ) {
                  if (0 === y)
                    return (
                      (e.bitb = S),
                      (e.bitk = E),
                      (h.avail_in = y),
                      (h.total_in += U - h.next_in_index),
                      (h.next_in_index = U),
                      (e.write = _),
                      e.inflate_flush(h, x)
                    )
                  ;(x = A), y--, (S |= (255 & h.read_byte(U++)) << E), (E += 8)
                }
                ;(d += S & D[g]), (S >>= g), (E -= g), (t = Y)
              case Y:
                for (z = _ - d; z < 0; ) z += e.end
                for (; 0 !== s; ) {
                  if (
                    0 === k &&
                    (_ == e.end && 0 !== e.read && ((_ = 0), (k = _ < e.read ? e.read - _ - 1 : e.end - _)),
                    0 === k &&
                      ((e.write = _),
                      (x = e.inflate_flush(h, x)),
                      (_ = e.write),
                      (k = _ < e.read ? e.read - _ - 1 : e.end - _),
                      _ == e.end && 0 !== e.read && ((_ = 0), (k = _ < e.read ? e.read - _ - 1 : e.end - _)),
                      0 === k))
                  )
                    return (
                      (e.bitb = S),
                      (e.bitk = E),
                      (h.avail_in = y),
                      (h.total_in += U - h.next_in_index),
                      (h.next_in_index = U),
                      (e.write = _),
                      e.inflate_flush(h, x)
                    )
                  ;(e.win[_++] = e.win[z++]), k--, z == e.end && (z = 0), s--
                }
                t = K
                break
              case X:
                if (
                  0 === k &&
                  (_ == e.end && 0 !== e.read && ((_ = 0), (k = _ < e.read ? e.read - _ - 1 : e.end - _)),
                  0 === k &&
                    ((e.write = _),
                    (x = e.inflate_flush(h, x)),
                    (_ = e.write),
                    (k = _ < e.read ? e.read - _ - 1 : e.end - _),
                    _ == e.end && 0 !== e.read && ((_ = 0), (k = _ < e.read ? e.read - _ - 1 : e.end - _)),
                    0 === k))
                )
                  return (
                    (e.bitb = S),
                    (e.bitk = E),
                    (h.avail_in = y),
                    (h.total_in += U - h.next_in_index),
                    (h.next_in_index = U),
                    (e.write = _),
                    e.inflate_flush(h, x)
                  )
                ;(x = A), (e.win[_++] = c), k--, (t = K)
                break
              case Z:
                if (
                  (E > 7 && ((E -= 8), y++, U--),
                  (e.write = _),
                  (x = e.inflate_flush(h, x)),
                  (_ = e.write),
                  (k = _ < e.read ? e.read - _ - 1 : e.end - _),
                  e.read != e.write)
                )
                  return (
                    (e.bitb = S),
                    (e.bitk = E),
                    (h.avail_in = y),
                    (h.total_in += U - h.next_in_index),
                    (h.next_in_index = U),
                    (e.write = _),
                    e.inflate_flush(h, x)
                  )
                t = J
              case J:
                return (
                  (x = C),
                  (e.bitb = S),
                  (e.bitk = E),
                  (h.avail_in = y),
                  (h.total_in += U - h.next_in_index),
                  (h.next_in_index = U),
                  (e.write = _),
                  e.inflate_flush(h, x)
                )
              case G:
                return (
                  (x = F),
                  (e.bitb = S),
                  (e.bitk = E),
                  (h.avail_in = y),
                  (h.total_in += U - h.next_in_index),
                  (h.next_in_index = U),
                  (e.write = _),
                  e.inflate_flush(h, x)
                )
              default:
                return (
                  (x = W),
                  (e.bitb = S),
                  (e.bitk = E),
                  (h.avail_in = y),
                  (h.total_in += U - h.next_in_index),
                  (h.next_in_index = U),
                  (e.write = _),
                  e.inflate_flush(h, x)
                )
            }
        }),
        (e.free = function () {})
    }
    const Q = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      ee = 0,
      te = 1,
      ne = 2,
      re = 3,
      ie = 4,
      se = 5,
      ae = 6,
      oe = 7,
      ce = 8,
      le = 9
    function de(e, t) {
      const n = this
      let r,
        i = ee,
        s = 0,
        a = 0,
        o = 0
      const c = [0],
        l = [0],
        d = new $()
      let f = 0,
        u = new Int32Array(3 * j)
      const p = new M()
      ;(n.bitk = 0),
        (n.bitb = 0),
        (n.win = new Uint8Array(t)),
        (n.end = t),
        (n.read = 0),
        (n.write = 0),
        (n.reset = function (e, t) {
          t && (t[0] = 0), i == ae && d.free(e), (i = ee), (n.bitk = 0), (n.bitb = 0), (n.read = n.write = 0)
        }),
        n.reset(e, null),
        (n.inflate_flush = function (e, t) {
          let r, i, s
          return (
            (i = e.next_out_index),
            (s = n.read),
            (r = (s <= n.write ? n.write : n.end) - s),
            r > e.avail_out && (r = e.avail_out),
            0 !== r && t == U && (t = A),
            (e.avail_out -= r),
            (e.total_out += r),
            e.next_out.set(n.win.subarray(s, s + r), i),
            (i += r),
            (s += r),
            s == n.end &&
              ((s = 0),
              n.write == n.end && (n.write = 0),
              (r = n.write - s),
              r > e.avail_out && (r = e.avail_out),
              0 !== r && t == U && (t = A),
              (e.avail_out -= r),
              (e.total_out += r),
              e.next_out.set(n.win.subarray(s, s + r), i),
              (i += r),
              (s += r)),
            (e.next_out_index = i),
            (n.read = s),
            t
          )
        }),
        (n.proc = function (e, t) {
          let m, w, h, x, g, b, v, y
          for (x = e.next_in_index, g = e.avail_in, w = n.bitb, h = n.bitk, b = n.write, v = b < n.read ? n.read - b - 1 : n.end - b; ; ) {
            let _, k, z, S, E, U, j, q
            switch (i) {
              case ee:
                for (; h < 3; ) {
                  if (0 === g)
                    return (
                      (n.bitb = w),
                      (n.bitk = h),
                      (e.avail_in = g),
                      (e.total_in += x - e.next_in_index),
                      (e.next_in_index = x),
                      (n.write = b),
                      n.inflate_flush(e, t)
                    )
                  ;(t = A), g--, (w |= (255 & e.read_byte(x++)) << h), (h += 8)
                }
                switch (((m = 7 & w), (f = 1 & m), m >>> 1)) {
                  case 0:
                    ;(w >>>= 3), (h -= 3), (m = 7 & h), (w >>>= m), (h -= m), (i = te)
                    break
                  case 1:
                    ;(_ = []),
                      (k = []),
                      (z = [[]]),
                      (S = [[]]),
                      M.inflate_trees_fixed(_, k, z, S),
                      d.init(_[0], k[0], z[0], 0, S[0], 0),
                      (w >>>= 3),
                      (h -= 3),
                      (i = ae)
                    break
                  case 2:
                    ;(w >>>= 3), (h -= 3), (i = re)
                    break
                  case 3:
                    return (
                      (w >>>= 3),
                      (h -= 3),
                      (i = le),
                      (e.msg = "invalid block type"),
                      (t = F),
                      (n.bitb = w),
                      (n.bitk = h),
                      (e.avail_in = g),
                      (e.total_in += x - e.next_in_index),
                      (e.next_in_index = x),
                      (n.write = b),
                      n.inflate_flush(e, t)
                    )
                }
                break
              case te:
                for (; h < 32; ) {
                  if (0 === g)
                    return (
                      (n.bitb = w),
                      (n.bitk = h),
                      (e.avail_in = g),
                      (e.total_in += x - e.next_in_index),
                      (e.next_in_index = x),
                      (n.write = b),
                      n.inflate_flush(e, t)
                    )
                  ;(t = A), g--, (w |= (255 & e.read_byte(x++)) << h), (h += 8)
                }
                if (((~w >>> 16) & 65535) != (65535 & w))
                  return (
                    (i = le),
                    (e.msg = "invalid stored block lengths"),
                    (t = F),
                    (n.bitb = w),
                    (n.bitk = h),
                    (e.avail_in = g),
                    (e.total_in += x - e.next_in_index),
                    (e.next_in_index = x),
                    (n.write = b),
                    n.inflate_flush(e, t)
                  )
                ;(s = 65535 & w), (w = h = 0), (i = 0 !== s ? ne : 0 !== f ? oe : ee)
                break
              case ne:
                if (0 === g)
                  return (
                    (n.bitb = w),
                    (n.bitk = h),
                    (e.avail_in = g),
                    (e.total_in += x - e.next_in_index),
                    (e.next_in_index = x),
                    (n.write = b),
                    n.inflate_flush(e, t)
                  )
                if (
                  0 === v &&
                  (b == n.end && 0 !== n.read && ((b = 0), (v = b < n.read ? n.read - b - 1 : n.end - b)),
                  0 === v &&
                    ((n.write = b),
                    (t = n.inflate_flush(e, t)),
                    (b = n.write),
                    (v = b < n.read ? n.read - b - 1 : n.end - b),
                    b == n.end && 0 !== n.read && ((b = 0), (v = b < n.read ? n.read - b - 1 : n.end - b)),
                    0 === v))
                )
                  return (
                    (n.bitb = w),
                    (n.bitk = h),
                    (e.avail_in = g),
                    (e.total_in += x - e.next_in_index),
                    (e.next_in_index = x),
                    (n.write = b),
                    n.inflate_flush(e, t)
                  )
                if (
                  ((t = A),
                  (m = s),
                  m > g && (m = g),
                  m > v && (m = v),
                  n.win.set(e.read_buf(x, m), b),
                  (x += m),
                  (g -= m),
                  (b += m),
                  (v -= m),
                  0 != (s -= m))
                )
                  break
                i = 0 !== f ? oe : ee
                break
              case re:
                for (; h < 14; ) {
                  if (0 === g)
                    return (
                      (n.bitb = w),
                      (n.bitk = h),
                      (e.avail_in = g),
                      (e.total_in += x - e.next_in_index),
                      (e.next_in_index = x),
                      (n.write = b),
                      n.inflate_flush(e, t)
                    )
                  ;(t = A), g--, (w |= (255 & e.read_byte(x++)) << h), (h += 8)
                }
                if (((a = m = 16383 & w), (31 & m) > 29 || ((m >> 5) & 31) > 29))
                  return (
                    (i = le),
                    (e.msg = "too many length or distance symbols"),
                    (t = F),
                    (n.bitb = w),
                    (n.bitk = h),
                    (e.avail_in = g),
                    (e.total_in += x - e.next_in_index),
                    (e.next_in_index = x),
                    (n.write = b),
                    n.inflate_flush(e, t)
                  )
                if (((m = 258 + (31 & m) + ((m >> 5) & 31)), !r || r.length < m)) r = []
                else for (y = 0; y < m; y++) r[y] = 0
                ;(w >>>= 14), (h -= 14), (o = 0), (i = ie)
              case ie:
                for (; o < 4 + (a >>> 10); ) {
                  for (; h < 3; ) {
                    if (0 === g)
                      return (
                        (n.bitb = w),
                        (n.bitk = h),
                        (e.avail_in = g),
                        (e.total_in += x - e.next_in_index),
                        (e.next_in_index = x),
                        (n.write = b),
                        n.inflate_flush(e, t)
                      )
                    ;(t = A), g--, (w |= (255 & e.read_byte(x++)) << h), (h += 8)
                  }
                  ;(r[Q[o++]] = 7 & w), (w >>>= 3), (h -= 3)
                }
                for (; o < 19; ) r[Q[o++]] = 0
                if (((c[0] = 7), (m = p.inflate_trees_bits(r, c, l, u, e)), m != A))
                  return (
                    (t = m) == F && ((r = null), (i = le)),
                    (n.bitb = w),
                    (n.bitk = h),
                    (e.avail_in = g),
                    (e.total_in += x - e.next_in_index),
                    (e.next_in_index = x),
                    (n.write = b),
                    n.inflate_flush(e, t)
                  )
                ;(o = 0), (i = se)
              case se:
                for (; (m = a), !(o >= 258 + (31 & m) + ((m >> 5) & 31)); ) {
                  let s, d
                  for (m = c[0]; h < m; ) {
                    if (0 === g)
                      return (
                        (n.bitb = w),
                        (n.bitk = h),
                        (e.avail_in = g),
                        (e.total_in += x - e.next_in_index),
                        (e.next_in_index = x),
                        (n.write = b),
                        n.inflate_flush(e, t)
                      )
                    ;(t = A), g--, (w |= (255 & e.read_byte(x++)) << h), (h += 8)
                  }
                  if (((m = u[3 * (l[0] + (w & D[m])) + 1]), (d = u[3 * (l[0] + (w & D[m])) + 2]), d < 16)) (w >>>= m), (h -= m), (r[o++] = d)
                  else {
                    for (y = 18 == d ? 7 : d - 14, s = 18 == d ? 11 : 3; h < m + y; ) {
                      if (0 === g)
                        return (
                          (n.bitb = w),
                          (n.bitk = h),
                          (e.avail_in = g),
                          (e.total_in += x - e.next_in_index),
                          (e.next_in_index = x),
                          (n.write = b),
                          n.inflate_flush(e, t)
                        )
                      ;(t = A), g--, (w |= (255 & e.read_byte(x++)) << h), (h += 8)
                    }
                    if (
                      ((w >>>= m),
                      (h -= m),
                      (s += w & D[y]),
                      (w >>>= y),
                      (h -= y),
                      (y = o),
                      (m = a),
                      y + s > 258 + (31 & m) + ((m >> 5) & 31) || (16 == d && y < 1))
                    )
                      return (
                        (r = null),
                        (i = le),
                        (e.msg = "invalid bit length repeat"),
                        (t = F),
                        (n.bitb = w),
                        (n.bitk = h),
                        (e.avail_in = g),
                        (e.total_in += x - e.next_in_index),
                        (e.next_in_index = x),
                        (n.write = b),
                        n.inflate_flush(e, t)
                      )
                    d = 16 == d ? r[y - 1] : 0
                    do {
                      r[y++] = d
                    } while (0 != --s)
                    o = y
                  }
                }
                if (
                  ((l[0] = -1),
                  (E = []),
                  (U = []),
                  (j = []),
                  (q = []),
                  (E[0] = 9),
                  (U[0] = 6),
                  (m = a),
                  (m = p.inflate_trees_dynamic(257 + (31 & m), 1 + ((m >> 5) & 31), r, E, U, j, q, u, e)),
                  m != A)
                )
                  return (
                    m == F && ((r = null), (i = le)),
                    (t = m),
                    (n.bitb = w),
                    (n.bitk = h),
                    (e.avail_in = g),
                    (e.total_in += x - e.next_in_index),
                    (e.next_in_index = x),
                    (n.write = b),
                    n.inflate_flush(e, t)
                  )
                d.init(E[0], U[0], u, j[0], u, q[0]), (i = ae)
              case ae:
                if (
                  ((n.bitb = w),
                  (n.bitk = h),
                  (e.avail_in = g),
                  (e.total_in += x - e.next_in_index),
                  (e.next_in_index = x),
                  (n.write = b),
                  (t = d.proc(n, e, t)) != C)
                )
                  return n.inflate_flush(e, t)
                if (
                  ((t = A),
                  d.free(e),
                  (x = e.next_in_index),
                  (g = e.avail_in),
                  (w = n.bitb),
                  (h = n.bitk),
                  (b = n.write),
                  (v = b < n.read ? n.read - b - 1 : n.end - b),
                  0 === f)
                ) {
                  i = ee
                  break
                }
                i = oe
              case oe:
                if (((n.write = b), (t = n.inflate_flush(e, t)), (b = n.write), (v = b < n.read ? n.read - b - 1 : n.end - b), n.read != n.write))
                  return (
                    (n.bitb = w),
                    (n.bitk = h),
                    (e.avail_in = g),
                    (e.total_in += x - e.next_in_index),
                    (e.next_in_index = x),
                    (n.write = b),
                    n.inflate_flush(e, t)
                  )
                i = ce
              case ce:
                return (
                  (t = C),
                  (n.bitb = w),
                  (n.bitk = h),
                  (e.avail_in = g),
                  (e.total_in += x - e.next_in_index),
                  (e.next_in_index = x),
                  (n.write = b),
                  n.inflate_flush(e, t)
                )
              case le:
                return (
                  (t = F),
                  (n.bitb = w),
                  (n.bitk = h),
                  (e.avail_in = g),
                  (e.total_in += x - e.next_in_index),
                  (e.next_in_index = x),
                  (n.write = b),
                  n.inflate_flush(e, t)
                )
              default:
                return (
                  (t = W),
                  (n.bitb = w),
                  (n.bitk = h),
                  (e.avail_in = g),
                  (e.total_in += x - e.next_in_index),
                  (e.next_in_index = x),
                  (n.write = b),
                  n.inflate_flush(e, t)
                )
            }
          }
        }),
        (n.free = function (e) {
          n.reset(e, null), (n.win = null), (u = null)
        }),
        (n.set_dictionary = function (e, t, r) {
          n.win.set(e.subarray(t, t + r), 0), (n.read = n.write = r)
        }),
        (n.sync_point = function () {
          return i == te ? 1 : 0
        })
    }
    const fe = 13,
      ue = [0, 0, 255, 255]
    function pe() {
      const e = this
      function t(e) {
        return e && e.istate ? ((e.total_in = e.total_out = 0), (e.msg = null), (e.istate.mode = 7), e.istate.blocks.reset(e, null), A) : W
      }
      ;(e.mode = 0),
        (e.method = 0),
        (e.was = [0]),
        (e.need = 0),
        (e.marker = 0),
        (e.wbits = 0),
        (e.inflateEnd = function (t) {
          return e.blocks && e.blocks.free(t), (e.blocks = null), A
        }),
        (e.inflateInit = function (n, r) {
          return (
            (n.msg = null),
            (e.blocks = null),
            r < 8 || r > 15 ? (e.inflateEnd(n), W) : ((e.wbits = r), (n.istate.blocks = new de(n, 1 << r)), t(n), A)
          )
        }),
        (e.inflate = function (e, t) {
          let n, r
          if (!e || !e.istate || !e.next_in) return W
          const i = e.istate
          for (t = 4 == t ? U : A, n = U; ; )
            switch (i.mode) {
              case 0:
                if (0 === e.avail_in) return n
                if (((n = t), e.avail_in--, e.total_in++, 8 != (15 & (i.method = e.read_byte(e.next_in_index++))))) {
                  ;(i.mode = fe), (e.msg = "unknown compression method"), (i.marker = 5)
                  break
                }
                if (8 + (i.method >> 4) > i.wbits) {
                  ;(i.mode = fe), (e.msg = "invalid win size"), (i.marker = 5)
                  break
                }
                i.mode = 1
              case 1:
                if (0 === e.avail_in) return n
                if (((n = t), e.avail_in--, e.total_in++, (r = 255 & e.read_byte(e.next_in_index++)), ((i.method << 8) + r) % 31 != 0)) {
                  ;(i.mode = fe), (e.msg = "incorrect header check"), (i.marker = 5)
                  break
                }
                if (0 == (32 & r)) {
                  i.mode = 7
                  break
                }
                i.mode = 2
              case 2:
                if (0 === e.avail_in) return n
                ;(n = t), e.avail_in--, e.total_in++, (i.need = ((255 & e.read_byte(e.next_in_index++)) << 24) & 4278190080), (i.mode = 3)
              case 3:
                if (0 === e.avail_in) return n
                ;(n = t), e.avail_in--, e.total_in++, (i.need += ((255 & e.read_byte(e.next_in_index++)) << 16) & 16711680), (i.mode = 4)
              case 4:
                if (0 === e.avail_in) return n
                ;(n = t), e.avail_in--, e.total_in++, (i.need += ((255 & e.read_byte(e.next_in_index++)) << 8) & 65280), (i.mode = 5)
              case 5:
                return 0 === e.avail_in ? n : ((n = t), e.avail_in--, e.total_in++, (i.need += 255 & e.read_byte(e.next_in_index++)), (i.mode = 6), 2)
              case 6:
                return (i.mode = fe), (e.msg = "need dictionary"), (i.marker = 0), W
              case 7:
                if (((n = i.blocks.proc(e, n)), n == F)) {
                  ;(i.mode = fe), (i.marker = 0)
                  break
                }
                if ((n == A && (n = t), n != C)) return n
                ;(n = t), i.blocks.reset(e, i.was), (i.mode = 12)
              case 12:
                return (e.avail_in = 0), C
              case fe:
                return F
              default:
                return W
            }
        }),
        (e.inflateSetDictionary = function (e, t, n) {
          let r = 0,
            i = n
          if (!e || !e.istate || 6 != e.istate.mode) return W
          const s = e.istate
          return i >= 1 << s.wbits && ((i = (1 << s.wbits) - 1), (r = n - i)), s.blocks.set_dictionary(t, r, i), (s.mode = 7), A
        }),
        (e.inflateSync = function (e) {
          let n, r, i, s, a
          if (!e || !e.istate) return W
          const o = e.istate
          if ((o.mode != fe && ((o.mode = fe), (o.marker = 0)), 0 === (n = e.avail_in))) return U
          for (r = e.next_in_index, i = o.marker; 0 !== n && i < 4; ) e.read_byte(r) == ue[i] ? i++ : (i = 0 !== e.read_byte(r) ? 0 : 4 - i), r++, n--
          return (
            (e.total_in += r - e.next_in_index),
            (e.next_in_index = r),
            (e.avail_in = n),
            (o.marker = i),
            4 != i ? F : ((s = e.total_in), (a = e.total_out), t(e), (e.total_in = s), (e.total_out = a), (o.mode = 7), A)
          )
        }),
        (e.inflateSyncPoint = function (e) {
          return e && e.istate && e.istate.blocks ? e.istate.blocks.sync_point() : W
        })
    }
    function me() {}
    me.prototype = {
      inflateInit(e) {
        const t = this
        return (t.istate = new pe()), e || (e = 15), t.istate.inflateInit(t, e)
      },
      inflate(e) {
        const t = this
        return t.istate ? t.istate.inflate(t, e) : W
      },
      inflateEnd() {
        const e = this
        if (!e.istate) return W
        const t = e.istate.inflateEnd(e)
        return (e.istate = null), t
      },
      inflateSync() {
        const e = this
        return e.istate ? e.istate.inflateSync(e) : W
      },
      inflateSetDictionary(e, t) {
        const n = this
        return n.istate ? n.istate.inflateSetDictionary(n, e, t) : W
      },
      read_byte(e) {
        return this.next_in[e]
      },
      read_buf(e, t) {
        return this.next_in.subarray(e, e + t)
      }
    }
    const we = 4294967295,
      he = 65535,
      xe = 67324752,
      ge = 134695760,
      be = 33639248,
      ve = 101010256,
      ye = 101075792,
      _e = 117853008,
      ke = 22,
      ze = 1,
      Se = 39169,
      Ae = 10,
      Ce = 1,
      We = 21589,
      Fe = 1,
      Ee = 8,
      Ue = 2048,
      De = "/",
      je = new Date(2107, 11, 31),
      qe = new Date(1980, 0, 1),
      Te = void 0,
      Oe = "undefined",
      Re = "function"
    class Ie {
      constructor(e) {
        return class extends TransformStream {
          constructor(t, n) {
            const r = new e(n)
            super({
              transform(e, t) {
                t.enqueue(r.append(e))
              },
              flush(e) {
                const t = r.flush()
                t && e.enqueue(t)
              }
            })
          }
        }
      }
    }
    let Le = 2
    try {
      typeof navigator != Oe && navigator.hardwareConcurrency && (Le = navigator.hardwareConcurrency)
    } catch (e) {}
    const Be = {
        chunkSize: 524288,
        maxWorkers: Le,
        terminateWorkerTimeout: 5e3,
        useWebWorkers: !0,
        useCompressionStream: !0,
        workerScripts: Te,
        CompressionStreamNative: typeof CompressionStream != Oe && CompressionStream,
        DecompressionStreamNative: typeof DecompressionStream != Oe && DecompressionStream
      },
      Me = Object.assign({}, Be)
    function Ke() {
      return Me
    }
    function Ne(e) {
      return Math.max(e.chunkSize, 64)
    }
    function Ve(e) {
      const {
        baseURL: t,
        chunkSize: n,
        maxWorkers: r,
        terminateWorkerTimeout: i,
        useCompressionStream: s,
        useWebWorkers: a,
        Deflate: o,
        Inflate: c,
        CompressionStream: l,
        DecompressionStream: d,
        workerScripts: f
      } = e
      if (
        (Pe("baseURL", t),
        Pe("chunkSize", n),
        Pe("maxWorkers", r),
        Pe("terminateWorkerTimeout", i),
        Pe("useCompressionStream", s),
        Pe("useWebWorkers", a),
        o && (Me.CompressionStream = new Ie(o)),
        c && (Me.DecompressionStream = new Ie(c)),
        Pe("CompressionStream", l),
        Pe("DecompressionStream", d),
        f !== Te)
      ) {
        const { deflate: e, inflate: t } = f
        if (((e || t) && (Me.workerScripts || (Me.workerScripts = {})), e)) {
          if (!Array.isArray(e)) throw new Error("workerScripts.deflate must be an array")
          Me.workerScripts.deflate = e
        }
        if (t) {
          if (!Array.isArray(t)) throw new Error("workerScripts.inflate must be an array")
          Me.workerScripts.inflate = t
        }
      }
    }
    function Pe(e, t) {
      t !== Te && (Me[e] = t)
    }
    const He = {
      application: {
        "andrew-inset": "ez",
        annodex: "anx",
        "atom+xml": "atom",
        "atomcat+xml": "atomcat",
        "atomserv+xml": "atomsrv",
        bbolin: "lin",
        cap: ["cap", "pcap"],
        "cu-seeme": "cu",
        "davmount+xml": "davmount",
        dsptype: "tsp",
        ecmascript: ["es", "ecma"],
        futuresplash: "spl",
        hta: "hta",
        "java-archive": "jar",
        "java-serialized-object": "ser",
        "java-vm": "class",
        javascript: "js",
        m3g: "m3g",
        "mac-binhex40": "hqx",
        mathematica: ["nb", "ma", "mb"],
        msaccess: "mdb",
        msword: ["doc", "dot"],
        mxf: "mxf",
        oda: "oda",
        ogg: "ogx",
        pdf: "pdf",
        "pgp-keys": "key",
        "pgp-signature": ["asc", "sig"],
        "pics-rules": "prf",
        postscript: ["ps", "ai", "eps", "epsi", "epsf", "eps2", "eps3"],
        rar: "rar",
        "rdf+xml": "rdf",
        "rss+xml": "rss",
        rtf: "rtf",
        smil: ["smi", "smil"],
        "xhtml+xml": ["xhtml", "xht"],
        xml: ["xml", "xsl", "xsd"],
        "xspf+xml": "xspf",
        zip: "zip",
        "vnd.android.package-archive": "apk",
        "vnd.cinderella": "cdy",
        "vnd.google-earth.kml+xml": "kml",
        "vnd.google-earth.kmz": "kmz",
        "vnd.mozilla.xul+xml": "xul",
        "vnd.ms-excel": ["xls", "xlb", "xlt", "xlm", "xla", "xlc", "xlw"],
        "vnd.ms-pki.seccat": "cat",
        "vnd.ms-pki.stl": "stl",
        "vnd.ms-powerpoint": ["ppt", "pps", "pot"],
        "vnd.oasis.opendocument.chart": "odc",
        "vnd.oasis.opendocument.database": "odb",
        "vnd.oasis.opendocument.formula": "odf",
        "vnd.oasis.opendocument.graphics": "odg",
        "vnd.oasis.opendocument.graphics-template": "otg",
        "vnd.oasis.opendocument.image": "odi",
        "vnd.oasis.opendocument.presentation": "odp",
        "vnd.oasis.opendocument.presentation-template": "otp",
        "vnd.oasis.opendocument.spreadsheet": "ods",
        "vnd.oasis.opendocument.spreadsheet-template": "ots",
        "vnd.oasis.opendocument.text": "odt",
        "vnd.oasis.opendocument.text-master": "odm",
        "vnd.oasis.opendocument.text-template": "ott",
        "vnd.oasis.opendocument.text-web": "oth",
        "vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
        "vnd.openxmlformats-officedocument.spreadsheetml.template": "xltx",
        "vnd.openxmlformats-officedocument.presentationml.presentation": "pptx",
        "vnd.openxmlformats-officedocument.presentationml.slideshow": "ppsx",
        "vnd.openxmlformats-officedocument.presentationml.template": "potx",
        "vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
        "vnd.openxmlformats-officedocument.wordprocessingml.template": "dotx",
        "vnd.smaf": "mmf",
        "vnd.stardivision.calc": "sdc",
        "vnd.stardivision.chart": "sds",
        "vnd.stardivision.draw": "sda",
        "vnd.stardivision.impress": "sdd",
        "vnd.stardivision.math": ["sdf", "smf"],
        "vnd.stardivision.writer": ["sdw", "vor"],
        "vnd.stardivision.writer-global": "sgl",
        "vnd.sun.xml.calc": "sxc",
        "vnd.sun.xml.calc.template": "stc",
        "vnd.sun.xml.draw": "sxd",
        "vnd.sun.xml.draw.template": "std",
        "vnd.sun.xml.impress": "sxi",
        "vnd.sun.xml.impress.template": "sti",
        "vnd.sun.xml.math": "sxm",
        "vnd.sun.xml.writer": "sxw",
        "vnd.sun.xml.writer.global": "sxg",
        "vnd.sun.xml.writer.template": "stw",
        "vnd.symbian.install": ["sis", "sisx"],
        "vnd.visio": ["vsd", "vst", "vss", "vsw"],
        "vnd.wap.wbxml": "wbxml",
        "vnd.wap.wmlc": "wmlc",
        "vnd.wap.wmlscriptc": "wmlsc",
        "vnd.wordperfect": "wpd",
        "vnd.wordperfect5.1": "wp5",
        "x-123": "wk",
        "x-7z-compressed": "7z",
        "x-abiword": "abw",
        "x-apple-diskimage": "dmg",
        "x-bcpio": "bcpio",
        "x-bittorrent": "torrent",
        "x-cbr": ["cbr", "cba", "cbt", "cb7"],
        "x-cbz": "cbz",
        "x-cdf": ["cdf", "cda"],
        "x-cdlink": "vcd",
        "x-chess-pgn": "pgn",
        "x-cpio": "cpio",
        "x-csh": "csh",
        "x-debian-package": ["deb", "udeb"],
        "x-director": ["dcr", "dir", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"],
        "x-dms": "dms",
        "x-doom": "wad",
        "x-dvi": "dvi",
        "x-httpd-eruby": "rhtml",
        "x-font": "pcf.Z",
        "x-freemind": "mm",
        "x-gnumeric": "gnumeric",
        "x-go-sgf": "sgf",
        "x-graphing-calculator": "gcf",
        "x-gtar": ["gtar", "taz"],
        "x-hdf": "hdf",
        "x-httpd-php": ["phtml", "pht", "php"],
        "x-httpd-php-source": "phps",
        "x-httpd-php3": "php3",
        "x-httpd-php3-preprocessed": "php3p",
        "x-httpd-php4": "php4",
        "x-httpd-php5": "php5",
        "x-ica": "ica",
        "x-info": "info",
        "x-internet-signup": ["ins", "isp"],
        "x-iphone": "iii",
        "x-iso9660-image": "iso",
        "x-java-jnlp-file": "jnlp",
        "x-jmol": "jmz",
        "x-killustrator": "kil",
        "x-koan": ["skp", "skd", "skt", "skm"],
        "x-kpresenter": ["kpr", "kpt"],
        "x-kword": ["kwd", "kwt"],
        "x-latex": "latex",
        "x-lha": "lha",
        "x-lyx": "lyx",
        "x-lzh": "lzh",
        "x-lzx": "lzx",
        "x-maker": ["frm", "maker", "frame", "fm", "fb", "book", "fbdoc"],
        "x-ms-wmd": "wmd",
        "x-ms-wmz": "wmz",
        "x-msdos-program": ["com", "exe", "bat", "dll"],
        "x-msi": "msi",
        "x-netcdf": ["nc", "cdf"],
        "x-ns-proxy-autoconfig": ["pac", "dat"],
        "x-nwc": "nwc",
        "x-object": "o",
        "x-oz-application": "oza",
        "x-pkcs7-certreqresp": "p7r",
        "x-python-code": ["pyc", "pyo"],
        "x-qgis": ["qgs", "shp", "shx"],
        "x-quicktimeplayer": "qtl",
        "x-redhat-package-manager": "rpm",
        "x-ruby": "rb",
        "x-sh": "sh",
        "x-shar": "shar",
        "x-shockwave-flash": ["swf", "swfl"],
        "x-silverlight": "scr",
        "x-stuffit": "sit",
        "x-sv4cpio": "sv4cpio",
        "x-sv4crc": "sv4crc",
        "x-tar": "tar",
        "x-tcl": "tcl",
        "x-tex-gf": "gf",
        "x-tex-pk": "pk",
        "x-texinfo": ["texinfo", "texi"],
        "x-trash": ["~", "%", "bak", "old", "sik"],
        "x-troff": ["t", "tr", "roff"],
        "x-troff-man": "man",
        "x-troff-me": "me",
        "x-troff-ms": "ms",
        "x-ustar": "ustar",
        "x-wais-source": "src",
        "x-wingz": "wz",
        "x-x509-ca-cert": ["crt", "der", "cer"],
        "x-xcf": "xcf",
        "x-xfig": "fig",
        "x-xpinstall": "xpi",
        applixware: "aw",
        "atomsvc+xml": "atomsvc",
        "ccxml+xml": "ccxml",
        "cdmi-capability": "cdmia",
        "cdmi-container": "cdmic",
        "cdmi-domain": "cdmid",
        "cdmi-object": "cdmio",
        "cdmi-queue": "cdmiq",
        "docbook+xml": "dbk",
        "dssc+der": "dssc",
        "dssc+xml": "xdssc",
        "emma+xml": "emma",
        "epub+zip": "epub",
        exi: "exi",
        "font-tdpfr": "pfr",
        "gml+xml": "gml",
        "gpx+xml": "gpx",
        gxf: "gxf",
        hyperstudio: "stk",
        "inkml+xml": ["ink", "inkml"],
        ipfix: "ipfix",
        json: "json",
        "jsonml+json": "jsonml",
        "lost+xml": "lostxml",
        "mads+xml": "mads",
        marc: "mrc",
        "marcxml+xml": "mrcx",
        "mathml+xml": "mathml",
        mbox: "mbox",
        "mediaservercontrol+xml": "mscml",
        "metalink+xml": "metalink",
        "metalink4+xml": "meta4",
        "mets+xml": "mets",
        "mods+xml": "mods",
        mp21: ["m21", "mp21"],
        mp4: "mp4s",
        "oebps-package+xml": "opf",
        "omdoc+xml": "omdoc",
        onenote: ["onetoc", "onetoc2", "onetmp", "onepkg"],
        oxps: "oxps",
        "patch-ops-error+xml": "xer",
        "pgp-encrypted": "pgp",
        pkcs10: "p10",
        "pkcs7-mime": ["p7m", "p7c"],
        "pkcs7-signature": "p7s",
        pkcs8: "p8",
        "pkix-attr-cert": "ac",
        "pkix-crl": "crl",
        "pkix-pkipath": "pkipath",
        pkixcmp: "pki",
        "pls+xml": "pls",
        "prs.cww": "cww",
        "pskc+xml": "pskcxml",
        "reginfo+xml": "rif",
        "relax-ng-compact-syntax": "rnc",
        "resource-lists+xml": "rl",
        "resource-lists-diff+xml": "rld",
        "rls-services+xml": "rs",
        "rpki-ghostbusters": "gbr",
        "rpki-manifest": "mft",
        "rpki-roa": "roa",
        "rsd+xml": "rsd",
        "sbml+xml": "sbml",
        "scvp-cv-request": "scq",
        "scvp-cv-response": "scs",
        "scvp-vp-request": "spq",
        "scvp-vp-response": "spp",
        sdp: "sdp",
        "set-payment-initiation": "setpay",
        "set-registration-initiation": "setreg",
        "shf+xml": "shf",
        "sparql-query": "rq",
        "sparql-results+xml": "srx",
        srgs: "gram",
        "srgs+xml": "grxml",
        "sru+xml": "sru",
        "ssdl+xml": "ssdl",
        "ssml+xml": "ssml",
        "tei+xml": ["tei", "teicorpus"],
        "thraud+xml": "tfi",
        "timestamped-data": "tsd",
        "vnd.3gpp.pic-bw-large": "plb",
        "vnd.3gpp.pic-bw-small": "psb",
        "vnd.3gpp.pic-bw-var": "pvb",
        "vnd.3gpp2.tcap": "tcap",
        "vnd.3m.post-it-notes": "pwn",
        "vnd.accpac.simply.aso": "aso",
        "vnd.accpac.simply.imp": "imp",
        "vnd.acucobol": "acu",
        "vnd.acucorp": ["atc", "acutc"],
        "vnd.adobe.air-application-installer-package+zip": "air",
        "vnd.adobe.formscentral.fcdt": "fcdt",
        "vnd.adobe.fxp": ["fxp", "fxpl"],
        "vnd.adobe.xdp+xml": "xdp",
        "vnd.adobe.xfdf": "xfdf",
        "vnd.ahead.space": "ahead",
        "vnd.airzip.filesecure.azf": "azf",
        "vnd.airzip.filesecure.azs": "azs",
        "vnd.amazon.ebook": "azw",
        "vnd.americandynamics.acc": "acc",
        "vnd.amiga.ami": "ami",
        "vnd.anser-web-certificate-issue-initiation": "cii",
        "vnd.anser-web-funds-transfer-initiation": "fti",
        "vnd.antix.game-component": "atx",
        "vnd.apple.installer+xml": "mpkg",
        "vnd.apple.mpegurl": "m3u8",
        "vnd.aristanetworks.swi": "swi",
        "vnd.astraea-software.iota": "iota",
        "vnd.audiograph": "aep",
        "vnd.blueice.multipass": "mpm",
        "vnd.bmi": "bmi",
        "vnd.businessobjects": "rep",
        "vnd.chemdraw+xml": "cdxml",
        "vnd.chipnuts.karaoke-mmd": "mmd",
        "vnd.claymore": "cla",
        "vnd.cloanto.rp9": "rp9",
        "vnd.clonk.c4group": ["c4g", "c4d", "c4f", "c4p", "c4u"],
        "vnd.cluetrust.cartomobile-config": "c11amc",
        "vnd.cluetrust.cartomobile-config-pkg": "c11amz",
        "vnd.commonspace": "csp",
        "vnd.contact.cmsg": "cdbcmsg",
        "vnd.cosmocaller": "cmc",
        "vnd.crick.clicker": "clkx",
        "vnd.crick.clicker.keyboard": "clkk",
        "vnd.crick.clicker.palette": "clkp",
        "vnd.crick.clicker.template": "clkt",
        "vnd.crick.clicker.wordbank": "clkw",
        "vnd.criticaltools.wbs+xml": "wbs",
        "vnd.ctc-posml": "pml",
        "vnd.cups-ppd": "ppd",
        "vnd.curl.car": "car",
        "vnd.curl.pcurl": "pcurl",
        "vnd.dart": "dart",
        "vnd.data-vision.rdz": "rdz",
        "vnd.dece.data": ["uvf", "uvvf", "uvd", "uvvd"],
        "vnd.dece.ttml+xml": ["uvt", "uvvt"],
        "vnd.dece.unspecified": ["uvx", "uvvx"],
        "vnd.dece.zip": ["uvz", "uvvz"],
        "vnd.denovo.fcselayout-link": "fe_launch",
        "vnd.dna": "dna",
        "vnd.dolby.mlp": "mlp",
        "vnd.dpgraph": "dpg",
        "vnd.dreamfactory": "dfac",
        "vnd.ds-keypoint": "kpxx",
        "vnd.dvb.ait": "ait",
        "vnd.dvb.service": "svc",
        "vnd.dynageo": "geo",
        "vnd.ecowin.chart": "mag",
        "vnd.enliven": "nml",
        "vnd.epson.esf": "esf",
        "vnd.epson.msf": "msf",
        "vnd.epson.quickanime": "qam",
        "vnd.epson.salt": "slt",
        "vnd.epson.ssf": "ssf",
        "vnd.eszigno3+xml": ["es3", "et3"],
        "vnd.ezpix-album": "ez2",
        "vnd.ezpix-package": "ez3",
        "vnd.fdf": "fdf",
        "vnd.fdsn.mseed": "mseed",
        "vnd.fdsn.seed": ["seed", "dataless"],
        "vnd.flographit": "gph",
        "vnd.fluxtime.clip": "ftc",
        "vnd.framemaker": ["fm", "frame", "maker", "book"],
        "vnd.frogans.fnc": "fnc",
        "vnd.frogans.ltf": "ltf",
        "vnd.fsc.weblaunch": "fsc",
        "vnd.fujitsu.oasys": "oas",
        "vnd.fujitsu.oasys2": "oa2",
        "vnd.fujitsu.oasys3": "oa3",
        "vnd.fujitsu.oasysgp": "fg5",
        "vnd.fujitsu.oasysprs": "bh2",
        "vnd.fujixerox.ddd": "ddd",
        "vnd.fujixerox.docuworks": "xdw",
        "vnd.fujixerox.docuworks.binder": "xbd",
        "vnd.fuzzysheet": "fzs",
        "vnd.genomatix.tuxedo": "txd",
        "vnd.geogebra.file": "ggb",
        "vnd.geogebra.tool": "ggt",
        "vnd.geometry-explorer": ["gex", "gre"],
        "vnd.geonext": "gxt",
        "vnd.geoplan": "g2w",
        "vnd.geospace": "g3w",
        "vnd.gmx": "gmx",
        "vnd.grafeq": ["gqf", "gqs"],
        "vnd.groove-account": "gac",
        "vnd.groove-help": "ghf",
        "vnd.groove-identity-message": "gim",
        "vnd.groove-injector": "grv",
        "vnd.groove-tool-message": "gtm",
        "vnd.groove-tool-template": "tpl",
        "vnd.groove-vcard": "vcg",
        "vnd.hal+xml": "hal",
        "vnd.handheld-entertainment+xml": "zmm",
        "vnd.hbci": "hbci",
        "vnd.hhe.lesson-player": "les",
        "vnd.hp-hpgl": "hpgl",
        "vnd.hp-hpid": "hpid",
        "vnd.hp-hps": "hps",
        "vnd.hp-jlyt": "jlt",
        "vnd.hp-pcl": "pcl",
        "vnd.hp-pclxl": "pclxl",
        "vnd.hydrostatix.sof-data": "sfd-hdstx",
        "vnd.ibm.minipay": "mpy",
        "vnd.ibm.modcap": ["afp", "listafp", "list3820"],
        "vnd.ibm.rights-management": "irm",
        "vnd.ibm.secure-container": "sc",
        "vnd.iccprofile": ["icc", "icm"],
        "vnd.igloader": "igl",
        "vnd.immervision-ivp": "ivp",
        "vnd.immervision-ivu": "ivu",
        "vnd.insors.igm": "igm",
        "vnd.intercon.formnet": ["xpw", "xpx"],
        "vnd.intergeo": "i2g",
        "vnd.intu.qbo": "qbo",
        "vnd.intu.qfx": "qfx",
        "vnd.ipunplugged.rcprofile": "rcprofile",
        "vnd.irepository.package+xml": "irp",
        "vnd.is-xpr": "xpr",
        "vnd.isac.fcs": "fcs",
        "vnd.jam": "jam",
        "vnd.jcp.javame.midlet-rms": "rms",
        "vnd.jisp": "jisp",
        "vnd.joost.joda-archive": "joda",
        "vnd.kahootz": ["ktz", "ktr"],
        "vnd.kde.karbon": "karbon",
        "vnd.kde.kchart": "chrt",
        "vnd.kde.kformula": "kfo",
        "vnd.kde.kivio": "flw",
        "vnd.kde.kontour": "kon",
        "vnd.kde.kpresenter": ["kpr", "kpt"],
        "vnd.kde.kspread": "ksp",
        "vnd.kde.kword": ["kwd", "kwt"],
        "vnd.kenameaapp": "htke",
        "vnd.kidspiration": "kia",
        "vnd.kinar": ["kne", "knp"],
        "vnd.koan": ["skp", "skd", "skt", "skm"],
        "vnd.kodak-descriptor": "sse",
        "vnd.las.las+xml": "lasxml",
        "vnd.llamagraphics.life-balance.desktop": "lbd",
        "vnd.llamagraphics.life-balance.exchange+xml": "lbe",
        "vnd.lotus-1-2-3": "123",
        "vnd.lotus-approach": "apr",
        "vnd.lotus-freelance": "pre",
        "vnd.lotus-notes": "nsf",
        "vnd.lotus-organizer": "org",
        "vnd.lotus-screencam": "scm",
        "vnd.lotus-wordpro": "lwp",
        "vnd.macports.portpkg": "portpkg",
        "vnd.mcd": "mcd",
        "vnd.medcalcdata": "mc1",
        "vnd.mediastation.cdkey": "cdkey",
        "vnd.mfer": "mwf",
        "vnd.mfmp": "mfm",
        "vnd.micrografx.flo": "flo",
        "vnd.micrografx.igx": "igx",
        "vnd.mif": "mif",
        "vnd.mobius.daf": "daf",
        "vnd.mobius.dis": "dis",
        "vnd.mobius.mbk": "mbk",
        "vnd.mobius.mqy": "mqy",
        "vnd.mobius.msl": "msl",
        "vnd.mobius.plc": "plc",
        "vnd.mobius.txf": "txf",
        "vnd.mophun.application": "mpn",
        "vnd.mophun.certificate": "mpc",
        "vnd.ms-artgalry": "cil",
        "vnd.ms-cab-compressed": "cab",
        "vnd.ms-excel.addin.macroenabled.12": "xlam",
        "vnd.ms-excel.sheet.binary.macroenabled.12": "xlsb",
        "vnd.ms-excel.sheet.macroenabled.12": "xlsm",
        "vnd.ms-excel.template.macroenabled.12": "xltm",
        "vnd.ms-fontobject": "eot",
        "vnd.ms-htmlhelp": "chm",
        "vnd.ms-ims": "ims",
        "vnd.ms-lrm": "lrm",
        "vnd.ms-officetheme": "thmx",
        "vnd.ms-powerpoint.addin.macroenabled.12": "ppam",
        "vnd.ms-powerpoint.presentation.macroenabled.12": "pptm",
        "vnd.ms-powerpoint.slide.macroenabled.12": "sldm",
        "vnd.ms-powerpoint.slideshow.macroenabled.12": "ppsm",
        "vnd.ms-powerpoint.template.macroenabled.12": "potm",
        "vnd.ms-project": ["mpp", "mpt"],
        "vnd.ms-word.document.macroenabled.12": "docm",
        "vnd.ms-word.template.macroenabled.12": "dotm",
        "vnd.ms-works": ["wps", "wks", "wcm", "wdb"],
        "vnd.ms-wpl": "wpl",
        "vnd.ms-xpsdocument": "xps",
        "vnd.mseq": "mseq",
        "vnd.musician": "mus",
        "vnd.muvee.style": "msty",
        "vnd.mynfc": "taglet",
        "vnd.neurolanguage.nlu": "nlu",
        "vnd.nitf": ["ntf", "nitf"],
        "vnd.noblenet-directory": "nnd",
        "vnd.noblenet-sealer": "nns",
        "vnd.noblenet-web": "nnw",
        "vnd.nokia.n-gage.data": "ngdat",
        "vnd.nokia.n-gage.symbian.install": "n-gage",
        "vnd.nokia.radio-preset": "rpst",
        "vnd.nokia.radio-presets": "rpss",
        "vnd.novadigm.edm": "edm",
        "vnd.novadigm.edx": "edx",
        "vnd.novadigm.ext": "ext",
        "vnd.oasis.opendocument.chart-template": "otc",
        "vnd.oasis.opendocument.formula-template": "odft",
        "vnd.oasis.opendocument.image-template": "oti",
        "vnd.olpc-sugar": "xo",
        "vnd.oma.dd2+xml": "dd2",
        "vnd.openofficeorg.extension": "oxt",
        "vnd.openxmlformats-officedocument.presentationml.slide": "sldx",
        "vnd.osgeo.mapguide.package": "mgp",
        "vnd.osgi.dp": "dp",
        "vnd.osgi.subsystem": "esa",
        "vnd.palm": ["pdb", "pqa", "oprc"],
        "vnd.pawaafile": "paw",
        "vnd.pg.format": "str",
        "vnd.pg.osasli": "ei6",
        "vnd.picsel": "efif",
        "vnd.pmi.widget": "wg",
        "vnd.pocketlearn": "plf",
        "vnd.powerbuilder6": "pbd",
        "vnd.previewsystems.box": "box",
        "vnd.proteus.magazine": "mgz",
        "vnd.publishare-delta-tree": "qps",
        "vnd.pvi.ptid1": "ptid",
        "vnd.quark.quarkxpress": ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"],
        "vnd.realvnc.bed": "bed",
        "vnd.recordare.musicxml": "mxl",
        "vnd.recordare.musicxml+xml": "musicxml",
        "vnd.rig.cryptonote": "cryptonote",
        "vnd.rn-realmedia": "rm",
        "vnd.rn-realmedia-vbr": "rmvb",
        "vnd.route66.link66+xml": "link66",
        "vnd.sailingtracker.track": "st",
        "vnd.seemail": "see",
        "vnd.sema": "sema",
        "vnd.semd": "semd",
        "vnd.semf": "semf",
        "vnd.shana.informed.formdata": "ifm",
        "vnd.shana.informed.formtemplate": "itp",
        "vnd.shana.informed.interchange": "iif",
        "vnd.shana.informed.package": "ipk",
        "vnd.simtech-mindmapper": ["twd", "twds"],
        "vnd.smart.teacher": "teacher",
        "vnd.solent.sdkm+xml": ["sdkm", "sdkd"],
        "vnd.spotfire.dxp": "dxp",
        "vnd.spotfire.sfs": "sfs",
        "vnd.stepmania.package": "smzip",
        "vnd.stepmania.stepchart": "sm",
        "vnd.sus-calendar": ["sus", "susp"],
        "vnd.svd": "svd",
        "vnd.syncml+xml": "xsm",
        "vnd.syncml.dm+wbxml": "bdm",
        "vnd.syncml.dm+xml": "xdm",
        "vnd.tao.intent-module-archive": "tao",
        "vnd.tcpdump.pcap": ["pcap", "cap", "dmp"],
        "vnd.tmobile-livetv": "tmo",
        "vnd.trid.tpt": "tpt",
        "vnd.triscape.mxs": "mxs",
        "vnd.trueapp": "tra",
        "vnd.ufdl": ["ufd", "ufdl"],
        "vnd.uiq.theme": "utz",
        "vnd.umajin": "umj",
        "vnd.unity": "unityweb",
        "vnd.uoml+xml": "uoml",
        "vnd.vcx": "vcx",
        "vnd.visionary": "vis",
        "vnd.vsf": "vsf",
        "vnd.webturbo": "wtb",
        "vnd.wolfram.player": "nbp",
        "vnd.wqd": "wqd",
        "vnd.wt.stf": "stf",
        "vnd.xara": "xar",
        "vnd.xfdl": "xfdl",
        "vnd.yamaha.hv-dic": "hvd",
        "vnd.yamaha.hv-script": "hvs",
        "vnd.yamaha.hv-voice": "hvp",
        "vnd.yamaha.openscoreformat": "osf",
        "vnd.yamaha.openscoreformat.osfpvg+xml": "osfpvg",
        "vnd.yamaha.smaf-audio": "saf",
        "vnd.yamaha.smaf-phrase": "spf",
        "vnd.yellowriver-custom-menu": "cmp",
        "vnd.zul": ["zir", "zirz"],
        "vnd.zzazz.deck+xml": "zaz",
        "voicexml+xml": "vxml",
        widget: "wgt",
        winhlp: "hlp",
        "wsdl+xml": "wsdl",
        "wspolicy+xml": "wspolicy",
        "x-ace-compressed": "ace",
        "x-authorware-bin": ["aab", "x32", "u32", "vox"],
        "x-authorware-map": "aam",
        "x-authorware-seg": "aas",
        "x-blorb": ["blb", "blorb"],
        "x-bzip": "bz",
        "x-bzip2": ["bz2", "boz"],
        "x-cfs-compressed": "cfs",
        "x-chat": "chat",
        "x-conference": "nsc",
        "x-dgc-compressed": "dgc",
        "x-dtbncx+xml": "ncx",
        "x-dtbook+xml": "dtb",
        "x-dtbresource+xml": "res",
        "x-eva": "eva",
        "x-font-bdf": "bdf",
        "x-font-ghostscript": "gsf",
        "x-font-linux-psf": "psf",
        "x-font-otf": "otf",
        "x-font-pcf": "pcf",
        "x-font-snf": "snf",
        "x-font-ttf": ["ttf", "ttc"],
        "x-font-type1": ["pfa", "pfb", "pfm", "afm"],
        "x-font-woff": "woff",
        "x-freearc": "arc",
        "x-gca-compressed": "gca",
        "x-glulx": "ulx",
        "x-gramps-xml": "gramps",
        "x-install-instructions": "install",
        "x-lzh-compressed": ["lzh", "lha"],
        "x-mie": "mie",
        "x-mobipocket-ebook": ["prc", "mobi"],
        "x-ms-application": "application",
        "x-ms-shortcut": "lnk",
        "x-ms-xbap": "xbap",
        "x-msbinder": "obd",
        "x-mscardfile": "crd",
        "x-msclip": "clp",
        "x-msdownload": ["exe", "dll", "com", "bat", "msi"],
        "x-msmediaview": ["mvb", "m13", "m14"],
        "x-msmetafile": ["wmf", "wmz", "emf", "emz"],
        "x-msmoney": "mny",
        "x-mspublisher": "pub",
        "x-msschedule": "scd",
        "x-msterminal": "trm",
        "x-mswrite": "wri",
        "x-nzb": "nzb",
        "x-pkcs12": ["p12", "pfx"],
        "x-pkcs7-certificates": ["p7b", "spc"],
        "x-research-info-systems": "ris",
        "x-silverlight-app": "xap",
        "x-sql": "sql",
        "x-stuffitx": "sitx",
        "x-subrip": "srt",
        "x-t3vm-image": "t3",
        "x-tads": "gam",
        "x-tex": "tex",
        "x-tex-tfm": "tfm",
        "x-tgif": "obj",
        "x-xliff+xml": "xlf",
        "x-xz": "xz",
        "x-zmachine": ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"],
        "xaml+xml": "xaml",
        "xcap-diff+xml": "xdf",
        "xenc+xml": "xenc",
        "xml-dtd": "dtd",
        "xop+xml": "xop",
        "xproc+xml": "xpl",
        "xslt+xml": "xslt",
        "xv+xml": ["mxml", "xhvml", "xvml", "xvm"],
        yang: "yang",
        "yin+xml": "yin",
        envoy: "evy",
        fractals: "fif",
        "internet-property-stream": "acx",
        olescript: "axs",
        "vnd.ms-outlook": "msg",
        "vnd.ms-pkicertstore": "sst",
        "x-compress": "z",
        "x-compressed": "tgz",
        "x-gzip": "gz",
        "x-perfmon": ["pma", "pmc", "pml", "pmr", "pmw"],
        "x-pkcs7-mime": ["p7c", "p7m"],
        "ynd.ms-pkipko": "pko"
      },
      audio: {
        amr: "amr",
        "amr-wb": "awb",
        annodex: "axa",
        basic: ["au", "snd"],
        flac: "flac",
        midi: ["mid", "midi", "kar", "rmi"],
        mpeg: ["mpga", "mpega", "mp2", "mp3", "m4a", "mp2a", "m2a", "m3a"],
        mpegurl: "m3u",
        ogg: ["oga", "ogg", "spx"],
        "prs.sid": "sid",
        "x-aiff": ["aif", "aiff", "aifc"],
        "x-gsm": "gsm",
        "x-ms-wma": "wma",
        "x-ms-wax": "wax",
        "x-pn-realaudio": "ram",
        "x-realaudio": "ra",
        "x-sd2": "sd2",
        "x-wav": "wav",
        adpcm: "adp",
        mp4: "mp4a",
        s3m: "s3m",
        silk: "sil",
        "vnd.dece.audio": ["uva", "uvva"],
        "vnd.digital-winds": "eol",
        "vnd.dra": "dra",
        "vnd.dts": "dts",
        "vnd.dts.hd": "dtshd",
        "vnd.lucent.voice": "lvp",
        "vnd.ms-playready.media.pya": "pya",
        "vnd.nuera.ecelp4800": "ecelp4800",
        "vnd.nuera.ecelp7470": "ecelp7470",
        "vnd.nuera.ecelp9600": "ecelp9600",
        "vnd.rip": "rip",
        webm: "weba",
        "x-aac": "aac",
        "x-caf": "caf",
        "x-matroska": "mka",
        "x-pn-realaudio-plugin": "rmp",
        xm: "xm",
        mid: ["mid", "rmi"]
      },
      chemical: {
        "x-alchemy": "alc",
        "x-cache": ["cac", "cache"],
        "x-cache-csf": "csf",
        "x-cactvs-binary": ["cbin", "cascii", "ctab"],
        "x-cdx": "cdx",
        "x-chem3d": "c3d",
        "x-cif": "cif",
        "x-cmdf": "cmdf",
        "x-cml": "cml",
        "x-compass": "cpa",
        "x-crossfire": "bsd",
        "x-csml": ["csml", "csm"],
        "x-ctx": "ctx",
        "x-cxf": ["cxf", "cef"],
        "x-embl-dl-nucleotide": ["emb", "embl"],
        "x-gamess-input": ["inp", "gam", "gamin"],
        "x-gaussian-checkpoint": ["fch", "fchk"],
        "x-gaussian-cube": "cub",
        "x-gaussian-input": ["gau", "gjc", "gjf"],
        "x-gaussian-log": "gal",
        "x-gcg8-sequence": "gcg",
        "x-genbank": "gen",
        "x-hin": "hin",
        "x-isostar": ["istr", "ist"],
        "x-jcamp-dx": ["jdx", "dx"],
        "x-kinemage": "kin",
        "x-macmolecule": "mcm",
        "x-macromodel-input": ["mmd", "mmod"],
        "x-mdl-molfile": "mol",
        "x-mdl-rdfile": "rd",
        "x-mdl-rxnfile": "rxn",
        "x-mdl-sdfile": ["sd", "sdf"],
        "x-mdl-tgf": "tgf",
        "x-mmcif": "mcif",
        "x-mol2": "mol2",
        "x-molconn-Z": "b",
        "x-mopac-graph": "gpt",
        "x-mopac-input": ["mop", "mopcrt", "mpc", "zmt"],
        "x-mopac-out": "moo",
        "x-ncbi-asn1": "asn",
        "x-ncbi-asn1-ascii": ["prt", "ent"],
        "x-ncbi-asn1-binary": ["val", "aso"],
        "x-pdb": ["pdb", "ent"],
        "x-rosdal": "ros",
        "x-swissprot": "sw",
        "x-vamas-iso14976": "vms",
        "x-vmd": "vmd",
        "x-xtel": "xtel",
        "x-xyz": "xyz"
      },
      image: {
        gif: "gif",
        ief: "ief",
        jpeg: ["jpeg", "jpg", "jpe"],
        pcx: "pcx",
        png: "png",
        "svg+xml": ["svg", "svgz"],
        tiff: ["tiff", "tif"],
        "vnd.djvu": ["djvu", "djv"],
        "vnd.wap.wbmp": "wbmp",
        "x-canon-cr2": "cr2",
        "x-canon-crw": "crw",
        "x-cmu-raster": "ras",
        "x-coreldraw": "cdr",
        "x-coreldrawpattern": "pat",
        "x-coreldrawtemplate": "cdt",
        "x-corelphotopaint": "cpt",
        "x-epson-erf": "erf",
        "x-icon": "ico",
        "x-jg": "art",
        "x-jng": "jng",
        "x-nikon-nef": "nef",
        "x-olympus-orf": "orf",
        "x-photoshop": "psd",
        "x-portable-anymap": "pnm",
        "x-portable-bitmap": "pbm",
        "x-portable-graymap": "pgm",
        "x-portable-pixmap": "ppm",
        "x-rgb": "rgb",
        "x-xbitmap": "xbm",
        "x-xpixmap": "xpm",
        "x-xwindowdump": "xwd",
        bmp: "bmp",
        cgm: "cgm",
        g3fax: "g3",
        ktx: "ktx",
        "prs.btif": "btif",
        sgi: "sgi",
        "vnd.dece.graphic": ["uvi", "uvvi", "uvg", "uvvg"],
        "vnd.dwg": "dwg",
        "vnd.dxf": "dxf",
        "vnd.fastbidsheet": "fbs",
        "vnd.fpx": "fpx",
        "vnd.fst": "fst",
        "vnd.fujixerox.edmics-mmr": "mmr",
        "vnd.fujixerox.edmics-rlc": "rlc",
        "vnd.ms-modi": "mdi",
        "vnd.ms-photo": "wdp",
        "vnd.net-fpx": "npx",
        "vnd.xiff": "xif",
        webp: "webp",
        "x-3ds": "3ds",
        "x-cmx": "cmx",
        "x-freehand": ["fh", "fhc", "fh4", "fh5", "fh7"],
        "x-pict": ["pic", "pct"],
        "x-tga": "tga",
        "cis-cod": "cod",
        pipeg: "jfif"
      },
      message: { rfc822: ["eml", "mime", "mht", "mhtml", "nws"] },
      model: {
        iges: ["igs", "iges"],
        mesh: ["msh", "mesh", "silo"],
        vrml: ["wrl", "vrml"],
        "x3d+vrml": ["x3dv", "x3dvz"],
        "x3d+xml": ["x3d", "x3dz"],
        "x3d+binary": ["x3db", "x3dbz"],
        "vnd.collada+xml": "dae",
        "vnd.dwf": "dwf",
        "vnd.gdl": "gdl",
        "vnd.gtw": "gtw",
        "vnd.mts": "mts",
        "vnd.vtu": "vtu"
      },
      text: {
        "cache-manifest": ["manifest", "appcache"],
        calendar: ["ics", "icz", "ifb"],
        css: "css",
        csv: "csv",
        h323: "323",
        html: ["html", "htm", "shtml", "stm"],
        iuls: "uls",
        mathml: "mml",
        plain: ["txt", "text", "brf", "conf", "def", "list", "log", "in", "bas"],
        richtext: "rtx",
        scriptlet: ["sct", "wsc"],
        texmacs: ["tm", "ts"],
        "tab-separated-values": "tsv",
        "vnd.sun.j2me.app-descriptor": "jad",
        "vnd.wap.wml": "wml",
        "vnd.wap.wmlscript": "wmls",
        "x-bibtex": "bib",
        "x-boo": "boo",
        "x-c++hdr": ["h++", "hpp", "hxx", "hh"],
        "x-c++src": ["c++", "cpp", "cxx", "cc"],
        "x-component": "htc",
        "x-dsrc": "d",
        "x-diff": ["diff", "patch"],
        "x-haskell": "hs",
        "x-java": "java",
        "x-literate-haskell": "lhs",
        "x-moc": "moc",
        "x-pascal": ["p", "pas"],
        "x-pcs-gcd": "gcd",
        "x-perl": ["pl", "pm"],
        "x-python": "py",
        "x-scala": "scala",
        "x-setext": "etx",
        "x-tcl": ["tcl", "tk"],
        "x-tex": ["tex", "ltx", "sty", "cls"],
        "x-vcalendar": "vcs",
        "x-vcard": "vcf",
        n3: "n3",
        "prs.lines.tag": "dsc",
        sgml: ["sgml", "sgm"],
        troff: ["t", "tr", "roff", "man", "me", "ms"],
        turtle: "ttl",
        "uri-list": ["uri", "uris", "urls"],
        vcard: "vcard",
        "vnd.curl": "curl",
        "vnd.curl.dcurl": "dcurl",
        "vnd.curl.scurl": "scurl",
        "vnd.curl.mcurl": "mcurl",
        "vnd.dvb.subtitle": "sub",
        "vnd.fly": "fly",
        "vnd.fmi.flexstor": "flx",
        "vnd.graphviz": "gv",
        "vnd.in3d.3dml": "3dml",
        "vnd.in3d.spot": "spot",
        "x-asm": ["s", "asm"],
        "x-c": ["c", "cc", "cxx", "cpp", "h", "hh", "dic"],
        "x-fortran": ["f", "for", "f77", "f90"],
        "x-opml": "opml",
        "x-nfo": "nfo",
        "x-sfv": "sfv",
        "x-uuencode": "uu",
        webviewhtml: "htt"
      },
      video: {
        avif: ".avif",
        "3gpp": "3gp",
        annodex: "axv",
        dl: "dl",
        dv: ["dif", "dv"],
        fli: "fli",
        gl: "gl",
        mpeg: ["mpeg", "mpg", "mpe", "m1v", "m2v", "mp2", "mpa", "mpv2"],
        mp4: ["mp4", "mp4v", "mpg4"],
        quicktime: ["qt", "mov"],
        ogg: "ogv",
        "vnd.mpegurl": ["mxu", "m4u"],
        "x-flv": "flv",
        "x-la-asf": ["lsf", "lsx"],
        "x-mng": "mng",
        "x-ms-asf": ["asf", "asx", "asr"],
        "x-ms-wm": "wm",
        "x-ms-wmv": "wmv",
        "x-ms-wmx": "wmx",
        "x-ms-wvx": "wvx",
        "x-msvideo": "avi",
        "x-sgi-movie": "movie",
        "x-matroska": ["mpv", "mkv", "mk3d", "mks"],
        "3gpp2": "3g2",
        h261: "h261",
        h263: "h263",
        h264: "h264",
        jpeg: "jpgv",
        jpm: ["jpm", "jpgm"],
        mj2: ["mj2", "mjp2"],
        "vnd.dece.hd": ["uvh", "uvvh"],
        "vnd.dece.mobile": ["uvm", "uvvm"],
        "vnd.dece.pd": ["uvp", "uvvp"],
        "vnd.dece.sd": ["uvs", "uvvs"],
        "vnd.dece.video": ["uvv", "uvvv"],
        "vnd.dvb.file": "dvb",
        "vnd.fvt": "fvt",
        "vnd.ms-playready.media.pyv": "pyv",
        "vnd.uvvu.mp4": ["uvu", "uvvu"],
        "vnd.vivo": "viv",
        webm: "webm",
        "x-f4v": "f4v",
        "x-m4v": "m4v",
        "x-ms-vob": "vob",
        "x-smv": "smv"
      },
      "x-conference": { "x-cooltalk": "ice" },
      "x-world": { "x-vrml": ["vrm", "vrml", "wrl", "flr", "wrz", "xaf", "xof"] }
    }
    ;(() => {
      const e = {}
      for (const t in He)
        if (He.hasOwnProperty(t))
          for (const n in He[t])
            if (He[t].hasOwnProperty(n)) {
              const r = He[t][n]
              if ("string" == typeof r) e[r] = t + "/" + n
              else for (let i = 0; i < r.length; i++) e[r[i]] = t + "/" + n
            }
    })()
    const Ye = []
    for (let e = 0; e < 256; e++) {
      let t = e
      for (let e = 0; e < 8; e++) 1 & t ? (t = (t >>> 1) ^ 3988292384) : (t >>>= 1)
      Ye[e] = t
    }
    class Xe {
      constructor(e) {
        this.crc = e || -1
      }
      append(e) {
        let t = 0 | this.crc
        for (let n = 0, r = 0 | e.length; n < r; n++) t = (t >>> 8) ^ Ye[255 & (t ^ e[n])]
        this.crc = t
      }
      get() {
        return ~this.crc
      }
    }
    class Ze extends TransformStream {
      constructor() {
        const e = new Xe()
        super({
          transform(t) {
            e.append(t)
          },
          flush(t) {
            const n = new Uint8Array(4)
            new DataView(n.buffer).setUint32(0, e.get()), t.enqueue(n)
          }
        })
      }
    }
    function Je(e) {
      if ("undefined" == typeof TextEncoder) {
        e = unescape(encodeURIComponent(e))
        const t = new Uint8Array(e.length)
        for (let n = 0; n < t.length; n++) t[n] = e.charCodeAt(n)
        return t
      }
      return new TextEncoder().encode(e)
    }
    const Ge = {
        concat(e, t) {
          if (0 === e.length || 0 === t.length) return e.concat(t)
          const n = e[e.length - 1],
            r = Ge.getPartial(n)
          return 32 === r ? e.concat(t) : Ge._shiftRight(t, r, 0 | n, e.slice(0, e.length - 1))
        },
        bitLength(e) {
          const t = e.length
          if (0 === t) return 0
          const n = e[t - 1]
          return 32 * (t - 1) + Ge.getPartial(n)
        },
        clamp(e, t) {
          if (32 * e.length < t) return e
          const n = (e = e.slice(0, Math.ceil(t / 32))).length
          return (t &= 31), n > 0 && t && (e[n - 1] = Ge.partial(t, e[n - 1] & (2147483648 >> (t - 1)), 1)), e
        },
        partial: (e, t, n) => (32 === e ? t : (n ? 0 | t : t << (32 - e)) + 1099511627776 * e),
        getPartial: (e) => Math.round(e / 1099511627776) || 32,
        _shiftRight(e, t, n, r) {
          for (void 0 === r && (r = []); t >= 32; t -= 32) r.push(n), (n = 0)
          if (0 === t) return r.concat(e)
          for (let i = 0; i < e.length; i++) r.push(n | (e[i] >>> t)), (n = e[i] << (32 - t))
          const i = e.length ? e[e.length - 1] : 0,
            s = Ge.getPartial(i)
          return r.push(Ge.partial((t + s) & 31, t + s > 32 ? n : r.pop(), 1)), r
        }
      },
      $e = {
        bytes: {
          fromBits(e) {
            const t = Ge.bitLength(e) / 8,
              n = new Uint8Array(t)
            let r
            for (let i = 0; i < t; i++) 0 == (3 & i) && (r = e[i / 4]), (n[i] = r >>> 24), (r <<= 8)
            return n
          },
          toBits(e) {
            const t = []
            let n,
              r = 0
            for (n = 0; n < e.length; n++) (r = (r << 8) | e[n]), 3 == (3 & n) && (t.push(r), (r = 0))
            return 3 & n && t.push(Ge.partial(8 * (3 & n), r)), t
          }
        }
      },
      Qe = class {
        constructor(e) {
          const t = this
          ;(t.blockSize = 512),
            (t._init = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
            (t._key = [1518500249, 1859775393, 2400959708, 3395469782]),
            e ? ((t._h = e._h.slice(0)), (t._buffer = e._buffer.slice(0)), (t._length = e._length)) : t.reset()
        }
        reset() {
          const e = this
          return (e._h = e._init.slice(0)), (e._buffer = []), (e._length = 0), e
        }
        update(e) {
          const t = this
          "string" == typeof e && (e = $e.utf8String.toBits(e))
          const n = (t._buffer = Ge.concat(t._buffer, e)),
            r = t._length,
            i = (t._length = r + Ge.bitLength(e))
          if (i > 9007199254740991) throw new Error("Cannot hash more than 2^53 - 1 bits")
          const s = new Uint32Array(n)
          let a = 0
          for (let e = t.blockSize + r - ((t.blockSize + r) & (t.blockSize - 1)); e <= i; e += t.blockSize)
            t._block(s.subarray(16 * a, 16 * (a + 1))), (a += 1)
          return n.splice(0, 16 * a), t
        }
        finalize() {
          const e = this
          let t = e._buffer
          const n = e._h
          t = Ge.concat(t, [Ge.partial(1, 1)])
          for (let e = t.length + 2; 15 & e; e++) t.push(0)
          for (t.push(Math.floor(e._length / 4294967296)), t.push(0 | e._length); t.length; ) e._block(t.splice(0, 16))
          return e.reset(), n
        }
        _f(e, t, n, r) {
          return e <= 19 ? (t & n) | (~t & r) : e <= 39 ? t ^ n ^ r : e <= 59 ? (t & n) | (t & r) | (n & r) : e <= 79 ? t ^ n ^ r : void 0
        }
        _S(e, t) {
          return (t << e) | (t >>> (32 - e))
        }
        _block(e) {
          const t = this,
            n = t._h,
            r = Array(80)
          for (let t = 0; t < 16; t++) r[t] = e[t]
          let i = n[0],
            s = n[1],
            a = n[2],
            o = n[3],
            c = n[4]
          for (let e = 0; e <= 79; e++) {
            e >= 16 && (r[e] = t._S(1, r[e - 3] ^ r[e - 8] ^ r[e - 14] ^ r[e - 16]))
            const n = (t._S(5, i) + t._f(e, s, a, o) + c + r[e] + t._key[Math.floor(e / 20)]) | 0
            ;(c = o), (o = a), (a = t._S(30, s)), (s = i), (i = n)
          }
          ;(n[0] = (n[0] + i) | 0), (n[1] = (n[1] + s) | 0), (n[2] = (n[2] + a) | 0), (n[3] = (n[3] + o) | 0), (n[4] = (n[4] + c) | 0)
        }
      },
      et = class {
        constructor(e) {
          const t = this
          ;(t._tables = [
            [[], [], [], [], []],
            [[], [], [], [], []]
          ]),
            t._tables[0][0][0] || t._precompute()
          const n = t._tables[0][4],
            r = t._tables[1],
            i = e.length
          let s,
            a,
            o,
            c = 1
          if (4 !== i && 6 !== i && 8 !== i) throw new Error("invalid aes key size")
          for (t._key = [(a = e.slice(0)), (o = [])], s = i; s < 4 * i + 28; s++) {
            let e = a[s - 1]
            ;(s % i == 0 || (8 === i && s % i == 4)) &&
              ((e = (n[e >>> 24] << 24) ^ (n[(e >> 16) & 255] << 16) ^ (n[(e >> 8) & 255] << 8) ^ n[255 & e]),
              s % i == 0 && ((e = (e << 8) ^ (e >>> 24) ^ (c << 24)), (c = (c << 1) ^ (283 * (c >> 7))))),
              (a[s] = a[s - i] ^ e)
          }
          for (let e = 0; s; e++, s--) {
            const t = a[3 & e ? s : s - 4]
            o[e] = s <= 4 || e < 4 ? t : r[0][n[t >>> 24]] ^ r[1][n[(t >> 16) & 255]] ^ r[2][n[(t >> 8) & 255]] ^ r[3][n[255 & t]]
          }
        }
        encrypt(e) {
          return this._crypt(e, 0)
        }
        decrypt(e) {
          return this._crypt(e, 1)
        }
        _precompute() {
          const e = this._tables[0],
            t = this._tables[1],
            n = e[4],
            r = t[4],
            i = [],
            s = []
          let a, o, c, l
          for (let e = 0; e < 256; e++) s[(i[e] = (e << 1) ^ (283 * (e >> 7))) ^ e] = e
          for (let d = (a = 0); !n[d]; d ^= o || 1, a = s[a] || 1) {
            let s = a ^ (a << 1) ^ (a << 2) ^ (a << 3) ^ (a << 4)
            ;(s = (s >> 8) ^ (255 & s) ^ 99), (n[d] = s), (r[s] = d), (l = i[(c = i[(o = i[d])])])
            let f = (16843009 * l) ^ (65537 * c) ^ (257 * o) ^ (16843008 * d),
              u = (257 * i[s]) ^ (16843008 * s)
            for (let n = 0; n < 4; n++) (e[n][d] = u = (u << 24) ^ (u >>> 8)), (t[n][s] = f = (f << 24) ^ (f >>> 8))
          }
          for (let n = 0; n < 5; n++) (e[n] = e[n].slice(0)), (t[n] = t[n].slice(0))
        }
        _crypt(e, t) {
          if (4 !== e.length) throw new Error("invalid aes block size")
          const n = this._key[t],
            r = n.length / 4 - 2,
            i = [0, 0, 0, 0],
            s = this._tables[t],
            a = s[0],
            o = s[1],
            c = s[2],
            l = s[3],
            d = s[4]
          let f,
            u,
            p,
            m = e[0] ^ n[0],
            w = e[t ? 3 : 1] ^ n[1],
            h = e[2] ^ n[2],
            x = e[t ? 1 : 3] ^ n[3],
            g = 4
          for (let e = 0; e < r; e++)
            (f = a[m >>> 24] ^ o[(w >> 16) & 255] ^ c[(h >> 8) & 255] ^ l[255 & x] ^ n[g]),
              (u = a[w >>> 24] ^ o[(h >> 16) & 255] ^ c[(x >> 8) & 255] ^ l[255 & m] ^ n[g + 1]),
              (p = a[h >>> 24] ^ o[(x >> 16) & 255] ^ c[(m >> 8) & 255] ^ l[255 & w] ^ n[g + 2]),
              (x = a[x >>> 24] ^ o[(m >> 16) & 255] ^ c[(w >> 8) & 255] ^ l[255 & h] ^ n[g + 3]),
              (g += 4),
              (m = f),
              (w = u),
              (h = p)
          for (let e = 0; e < 4; e++)
            (i[t ? 3 & -e : e] = (d[m >>> 24] << 24) ^ (d[(w >> 16) & 255] << 16) ^ (d[(h >> 8) & 255] << 8) ^ d[255 & x] ^ n[g++]),
              (f = m),
              (m = w),
              (w = h),
              (h = x),
              (x = f)
          return i
        }
      },
      tt = {
        getRandomValues(e) {
          const t = new Uint32Array(e.buffer),
            n = (e) => {
              let t = 987654321
              const n = 4294967295
              return function () {
                return (
                  (t = (36969 * (65535 & t) + (t >> 16)) & n),
                  ((((t << 16) + (e = (18e3 * (65535 & e) + (e >> 16)) & n)) & n) / 4294967296 + 0.5) * (Math.random() > 0.5 ? 1 : -1)
                )
              }
            }
          for (let r, i = 0; i < e.length; i += 4) {
            const e = n(4294967296 * (r || Math.random()))
            ;(r = 987654071 * e()), (t[i / 4] = (4294967296 * e()) | 0)
          }
          return e
        }
      },
      nt = class {
        constructor(e, t) {
          ;(this._prf = e), (this._initIv = t), (this._iv = t)
        }
        reset() {
          this._iv = this._initIv
        }
        update(e) {
          return this.calculate(this._prf, e, this._iv)
        }
        incWord(e) {
          if (255 == ((e >> 24) & 255)) {
            let t = (e >> 16) & 255,
              n = (e >> 8) & 255,
              r = 255 & e
            255 === t ? ((t = 0), 255 === n ? ((n = 0), 255 === r ? (r = 0) : ++r) : ++n) : ++t, (e = 0), (e += t << 16), (e += n << 8), (e += r)
          } else e += 1 << 24
          return e
        }
        incCounter(e) {
          0 === (e[0] = this.incWord(e[0])) && (e[1] = this.incWord(e[1]))
        }
        calculate(e, t, n) {
          let r
          if (!(r = t.length)) return []
          const i = Ge.bitLength(t)
          for (let i = 0; i < r; i += 4) {
            this.incCounter(n)
            const r = e.encrypt(n)
            ;(t[i] ^= r[0]), (t[i + 1] ^= r[1]), (t[i + 2] ^= r[2]), (t[i + 3] ^= r[3])
          }
          return Ge.clamp(t, i)
        }
      },
      rt = {
        importKey: (e) => new rt.hmacSha1($e.bytes.toBits(e)),
        pbkdf2(e, t, n, r) {
          if (((n = n || 1e4), r < 0 || n < 0)) throw new Error("invalid params to pbkdf2")
          const i = (1 + (r >> 5)) << 2
          let s, a, o, c, l
          const d = new ArrayBuffer(i),
            f = new DataView(d)
          let u = 0
          const p = Ge
          for (t = $e.bytes.toBits(t), l = 1; u < (i || 1); l++) {
            for (s = a = e.encrypt(p.concat(t, [l])), o = 1; o < n; o++) for (a = e.encrypt(a), c = 0; c < a.length; c++) s[c] ^= a[c]
            for (o = 0; u < (i || 1) && o < s.length; o++) f.setInt32(u, s[o]), (u += 4)
          }
          return d.slice(0, r / 8)
        },
        hmacSha1: class {
          constructor(e) {
            const t = this,
              n = (t._hash = Qe),
              r = [[], []]
            t._baseHash = [new n(), new n()]
            const i = t._baseHash[0].blockSize / 32
            e.length > i && (e = new n().update(e).finalize())
            for (let t = 0; t < i; t++) (r[0][t] = 909522486 ^ e[t]), (r[1][t] = 1549556828 ^ e[t])
            t._baseHash[0].update(r[0]), t._baseHash[1].update(r[1]), (t._resultHash = new n(t._baseHash[0]))
          }
          reset() {
            const e = this
            ;(e._resultHash = new e._hash(e._baseHash[0])), (e._updated = !1)
          }
          update(e) {
            ;(this._updated = !0), this._resultHash.update(e)
          }
          digest() {
            const e = this,
              t = e._resultHash.finalize(),
              n = new e._hash(e._baseHash[1]).update(t).finalize()
            return e.reset(), n
          }
          encrypt(e) {
            if (this._updated) throw new Error("encrypt on already updated hmac called!")
            return this.update(e), this.digest(e)
          }
        }
      },
      it = "undefined" != typeof crypto && "function" == typeof crypto.getRandomValues,
      st = "Invalid password",
      at = "Invalid signature",
      ot = "zipjs-abort-check-password"
    function ct(e) {
      return it ? crypto.getRandomValues(e) : tt.getRandomValues(e)
    }
    const lt = 16,
      dt = { name: "PBKDF2" },
      ft = Object.assign({ hash: { name: "HMAC" } }, dt),
      ut = Object.assign({ iterations: 1e3, hash: { name: "SHA-1" } }, dt),
      pt = ["deriveBits"],
      mt = [8, 12, 16],
      wt = [16, 24, 32],
      ht = 10,
      xt = [0, 0, 0, 0],
      gt = "undefined",
      bt = "function",
      vt = typeof crypto != gt,
      yt = vt && crypto.subtle,
      _t = vt && typeof yt != gt,
      kt = $e.bytes,
      zt = et,
      St = nt,
      At = rt.hmacSha1
    let Ct = vt && _t && typeof yt.importKey == bt,
      Wt = vt && _t && typeof yt.deriveBits == bt
    class Ft extends TransformStream {
      constructor({ password: e, signed: t, encryptionStrength: n, checkPasswordOnly: r }) {
        super({
          start() {
            Object.assign(this, {
              ready: new Promise((e) => (this.resolveReady = e)),
              password: e,
              signed: t,
              strength: n - 1,
              pending: new Uint8Array()
            })
          },
          async transform(e, t) {
            const n = this,
              { password: i, strength: s, resolveReady: a, ready: o } = n
            i
              ? (await (async function (e, t, n, r) {
                  const i = await Dt(e, t, n, qt(r, 0, mt[t])),
                    s = qt(r, mt[t])
                  if (i[0] != s[0] || i[1] != s[1]) throw new Error(st)
                })(n, s, i, qt(e, 0, mt[s] + 2)),
                (e = qt(e, mt[s] + 2)),
                r ? t.error(new Error(ot)) : a())
              : await o
            const c = new Uint8Array(e.length - ht - ((e.length - ht) % lt))
            t.enqueue(Ut(n, e, c, 0, ht, !0))
          },
          async flush(e) {
            const { signed: t, ctr: n, hmac: r, pending: i, ready: s } = this
            await s
            const a = qt(i, 0, i.length - ht),
              o = qt(i, i.length - ht)
            let c = new Uint8Array()
            if (a.length) {
              const e = Ot(kt, a)
              r.update(e)
              const t = n.update(e)
              c = Tt(kt, t)
            }
            if (t) {
              const e = qt(Tt(kt, r.digest()), 0, ht)
              for (let t = 0; t < ht; t++) if (e[t] != o[t]) throw new Error(at)
            }
            e.enqueue(c)
          }
        })
      }
    }
    class Et extends TransformStream {
      constructor({ password: e, encryptionStrength: t }) {
        let n
        super({
          start() {
            Object.assign(this, { ready: new Promise((e) => (this.resolveReady = e)), password: e, strength: t - 1, pending: new Uint8Array() })
          },
          async transform(e, t) {
            const n = this,
              { password: r, strength: i, resolveReady: s, ready: a } = n
            let o = new Uint8Array()
            r
              ? ((o = await (async function (e, t, n) {
                  const r = ct(new Uint8Array(mt[t]))
                  return jt(r, await Dt(e, t, n, r))
                })(n, i, r)),
                s())
              : await a
            const c = new Uint8Array(o.length + e.length - (e.length % lt))
            c.set(o, 0), t.enqueue(Ut(n, e, c, o.length, 0))
          },
          async flush(e) {
            const { ctr: t, hmac: r, pending: i, ready: s } = this
            await s
            let a = new Uint8Array()
            if (i.length) {
              const e = t.update(Ot(kt, i))
              r.update(e), (a = Tt(kt, e))
            }
            ;(n.signature = Tt(kt, r.digest()).slice(0, ht)), e.enqueue(jt(a, n.signature))
          }
        }),
          (n = this)
      }
    }
    function Ut(e, t, n, r, i, s) {
      const { ctr: a, hmac: o, pending: c } = e,
        l = t.length - i
      let d
      for (
        c.length &&
          ((t = jt(c, t)),
          (n = (function (e, t) {
            if (t && t > e.length) {
              const n = e
              ;(e = new Uint8Array(t)).set(n, 0)
            }
            return e
          })(n, l - (l % lt)))),
          d = 0;
        d <= l - lt;
        d += lt
      ) {
        const e = Ot(kt, qt(t, d, d + lt))
        s && o.update(e)
        const i = a.update(e)
        s || o.update(i), n.set(Tt(kt, i), d + r)
      }
      return (e.pending = qt(t, d)), n
    }
    async function Dt(e, t, n, r) {
      e.password = null
      const i = Je(n),
        s = await (async function (e, t, n, r, i) {
          if (!Ct) return rt.importKey(t)
          try {
            return await yt.importKey(e, t, n, !1, i)
          } catch (e) {
            return (Ct = !1), rt.importKey(t)
          }
        })("raw", i, ft, 0, pt),
        a = await (async function (e, t, n) {
          if (!Wt) return rt.pbkdf2(t, e.salt, ut.iterations, n)
          try {
            return await yt.deriveBits(e, t, n)
          } catch (r) {
            return (Wt = !1), rt.pbkdf2(t, e.salt, ut.iterations, n)
          }
        })(Object.assign({ salt: r }, ut), s, 8 * (2 * wt[t] + 2)),
        o = new Uint8Array(a),
        c = Ot(kt, qt(o, 0, wt[t])),
        l = Ot(kt, qt(o, wt[t], 2 * wt[t])),
        d = qt(o, 2 * wt[t])
      return (
        Object.assign(e, { keys: { key: c, authentication: l, passwordVerification: d }, ctr: new St(new zt(c), Array.from(xt)), hmac: new At(l) }), d
      )
    }
    function jt(e, t) {
      let n = e
      return e.length + t.length && ((n = new Uint8Array(e.length + t.length)), n.set(e, 0), n.set(t, e.length)), n
    }
    function qt(e, t, n) {
      return e.subarray(t, n)
    }
    function Tt(e, t) {
      return e.fromBits(t)
    }
    function Ot(e, t) {
      return e.toBits(t)
    }
    class Rt extends TransformStream {
      constructor({ password: e, passwordVerification: t, checkPasswordOnly: n }) {
        super({
          start() {
            Object.assign(this, { password: e, passwordVerification: t }), Mt(this, e)
          },
          transform(e, t) {
            const r = this
            if (r.password) {
              const t = Lt(r, e.subarray(0, 12))
              if (((r.password = null), t[11] != r.passwordVerification)) throw new Error(st)
              e = e.subarray(12)
            }
            n ? t.error(new Error(ot)) : t.enqueue(Lt(r, e))
          }
        })
      }
    }
    class It extends TransformStream {
      constructor({ password: e, passwordVerification: t }) {
        super({
          start() {
            Object.assign(this, { password: e, passwordVerification: t }), Mt(this, e)
          },
          transform(e, t) {
            const n = this
            let r, i
            if (n.password) {
              n.password = null
              const t = ct(new Uint8Array(12))
              ;(t[11] = n.passwordVerification), (r = new Uint8Array(e.length + t.length)), r.set(Bt(n, t), 0), (i = 12)
            } else (r = new Uint8Array(e.length)), (i = 0)
            r.set(Bt(n, e), i), t.enqueue(r)
          }
        })
      }
    }
    function Lt(e, t) {
      const n = new Uint8Array(t.length)
      for (let r = 0; r < t.length; r++) (n[r] = Nt(e) ^ t[r]), Kt(e, n[r])
      return n
    }
    function Bt(e, t) {
      const n = new Uint8Array(t.length)
      for (let r = 0; r < t.length; r++) (n[r] = Nt(e) ^ t[r]), Kt(e, t[r])
      return n
    }
    function Mt(e, t) {
      const n = [305419896, 591751049, 878082192]
      Object.assign(e, { keys: n, crcKey0: new Xe(n[0]), crcKey2: new Xe(n[2]) })
      for (let n = 0; n < t.length; n++) Kt(e, t.charCodeAt(n))
    }
    function Kt(e, t) {
      let [n, r, i] = e.keys
      e.crcKey0.append([t]),
        (n = ~e.crcKey0.get()),
        (r = Pt(Math.imul(Pt(r + Vt(n)), 134775813) + 1)),
        e.crcKey2.append([r >>> 24]),
        (i = ~e.crcKey2.get()),
        (e.keys = [n, r, i])
    }
    function Nt(e) {
      const t = 2 | e.keys[2]
      return Vt(Math.imul(t, 1 ^ t) >>> 8)
    }
    function Vt(e) {
      return 255 & e
    }
    function Pt(e) {
      return 4294967295 & e
    }
    const Ht = "deflate-raw"
    class Yt extends TransformStream {
      constructor(e, { chunkSize: t, CompressionStream: n, CompressionStreamNative: r }) {
        super({})
        const { compressed: i, encrypted: s, useCompressionStream: a, zipCrypto: o, signed: c, level: l } = e,
          d = this
        let f,
          u,
          p = Zt(super.readable)
        ;(s && !o) || !c || (([p, f] = p.tee()), (f = $t(f, new Ze()))),
          i && (p = Gt(p, a, { level: l, chunkSize: t }, r, n)),
          s && (o ? (p = $t(p, new It(e))) : ((u = new Et(e)), (p = $t(p, u)))),
          Jt(d, p, async () => {
            let e
            s && !o && (e = u.signature),
              (s && !o) || !c || ((e = await f.getReader().read()), (e = new DataView(e.value.buffer).getUint32(0))),
              (d.signature = e)
          })
      }
    }
    class Xt extends TransformStream {
      constructor(e, { chunkSize: t, DecompressionStream: n, DecompressionStreamNative: r }) {
        super({})
        const { zipCrypto: i, encrypted: s, signed: a, signature: o, compressed: c, useCompressionStream: l } = e
        let d,
          f,
          u = Zt(super.readable)
        s && (i ? (u = $t(u, new Rt(e))) : ((f = new Ft(e)), (u = $t(u, f)))),
          c && (u = Gt(u, l, { chunkSize: t }, r, n)),
          (s && !i) || !a || (([u, d] = u.tee()), (d = $t(d, new Ze()))),
          Jt(this, u, async () => {
            if ((!s || i) && a) {
              const e = await d.getReader().read(),
                t = new DataView(e.value.buffer)
              if (o != t.getUint32(0, !1)) throw new Error(at)
            }
          })
      }
    }
    function Zt(e) {
      return $t(
        e,
        new TransformStream({
          transform(e, t) {
            e && e.length && t.enqueue(e)
          }
        })
      )
    }
    function Jt(e, t, n) {
      ;(t = $t(t, new TransformStream({ flush: n }))), Object.defineProperty(e, "readable", { get: () => t })
    }
    function Gt(e, t, n, r, i) {
      try {
        e = $t(e, new (t && r ? r : i)(Ht, n))
      } catch (r) {
        if (!t) throw r
        e = $t(e, new i(Ht, n))
      }
      return e
    }
    function $t(e, t) {
      return e.pipeThrough(t)
    }
    const Qt = "message",
      en = "pull",
      tn = "data",
      nn = "ack",
      rn = "close",
      sn = "deflate",
      an = "inflate"
    class on extends TransformStream {
      constructor(e, t) {
        super({})
        const n = this,
          { codecType: r } = e
        let i
        r.startsWith(sn) ? (i = Yt) : r.startsWith(an) && (i = Xt)
        let s = 0
        const a = new i(e, t),
          o = super.readable,
          c = new TransformStream({
            transform(e, t) {
              e && e.length && ((s += e.length), t.enqueue(e))
            },
            flush() {
              const { signature: e } = a
              Object.assign(n, { signature: e, size: s })
            }
          })
        Object.defineProperty(n, "readable", { get: () => o.pipeThrough(a).pipeThrough(c) })
      }
    }
    const cn = typeof Worker != Oe
    class ln {
      constructor(e, { readable: t, writable: n }, { options: r, config: i, streamOptions: s, useWebWorkers: a, transferStreams: o, scripts: c }, l) {
        const { signal: d } = s
        return (
          Object.assign(e, {
            busy: !0,
            readable: t.pipeThrough(new dn(t, s, i), { signal: d }),
            writable: n,
            options: Object.assign({}, r),
            scripts: c,
            transferStreams: o,
            terminate() {
              const { worker: t, busy: n } = e
              t && !n && (t.terminate(), (e.interface = null))
            },
            onTaskFinished() {
              ;(e.busy = !1), l(e)
            }
          }),
          (a && cn ? pn : un)(e, i)
        )
      }
    }
    class dn extends TransformStream {
      constructor(e, { onstart: t, onprogress: n, size: r, onend: i }, { chunkSize: s }) {
        let a = 0
        super(
          {
            start() {
              t && fn(t, r)
            },
            async transform(e, t) {
              ;(a += e.length), n && (await fn(n, a, r)), t.enqueue(e)
            },
            flush() {
              ;(e.size = a), i && fn(i, a)
            }
          },
          { highWaterMark: 1, size: () => s }
        )
      }
    }
    async function fn(e, ...t) {
      try {
        await e(...t)
      } catch (e) {}
    }
    function un(e, t) {
      return {
        run: () =>
          (async function ({ options: e, readable: t, writable: n, onTaskFinished: r }, i) {
            const s = new on(e, i)
            try {
              await t.pipeThrough(s).pipeTo(n, { preventClose: !0, preventAbort: !0 })
              const { signature: e, size: r } = s
              return { signature: e, size: r }
            } finally {
              r()
            }
          })(e, t)
      }
    }
    function pn(e, { baseURL: t, chunkSize: n }) {
      return (
        e.interface ||
          Object.assign(e, {
            worker: hn(e.scripts[0], t, e),
            interface: {
              run: () =>
                (async function (e, t) {
                  let n, r
                  const i = new Promise((e, t) => {
                    ;(n = e), (r = t)
                  })
                  Object.assign(e, { reader: null, writer: null, resolveResult: n, rejectResult: r, result: i })
                  const { readable: s, options: a, scripts: o } = e,
                    { writable: c, closed: l } = (function (e) {
                      const t = e.getWriter()
                      let n
                      const r = new Promise((e) => (n = e))
                      return {
                        writable: new WritableStream({
                          async write(e) {
                            await t.ready, await t.write(e)
                          },
                          close() {
                            t.releaseLock(), n()
                          },
                          abort: (e) => t.abort(e)
                        }),
                        closed: r
                      }
                    })(e.writable)
                  xn({ type: "start", scripts: o.slice(1), options: a, config: t, readable: s, writable: c }, e) ||
                    Object.assign(e, { reader: s.getReader(), writer: c.getWriter() })
                  const d = await i
                  try {
                    await c.close()
                  } catch (e) {}
                  return await l, d
                })(e, { chunkSize: n })
            }
          }),
        e.interface
      )
    }
    let mn = !0,
      wn = !0
    function hn(e, t, n) {
      const r = { type: "module" }
      let i, s
      typeof e == Re && (e = e())
      try {
        i = new URL(e, t)
      } catch (t) {
        i = e
      }
      if (mn)
        try {
          s = new Worker(i)
        } catch (e) {
          ;(mn = !1), (s = new Worker(i, r))
        }
      else s = new Worker(i, r)
      return (
        s.addEventListener(Qt, (e) =>
          (async function ({ data: e }, t) {
            const { type: n, value: r, messageId: i, result: s, error: a } = e,
              { reader: o, writer: c, resolveResult: l, rejectResult: d, onTaskFinished: f } = t
            try {
              if (a) {
                const { message: e, stack: t, code: n, name: r } = a,
                  i = new Error(e)
                Object.assign(i, { stack: t, code: n, name: r }), u(i)
              } else {
                if (n == en) {
                  const { value: e, done: n } = await o.read()
                  xn({ type: tn, value: e, done: n, messageId: i }, t)
                }
                n == tn && (await c.ready, await c.write(new Uint8Array(r)), xn({ type: nn, messageId: i }, t)), n == rn && u(null, s)
              }
            } catch (a) {
              u(a)
            }
            function u(e, t) {
              e ? d(e) : l(t), c && c.releaseLock(), f()
            }
          })(e, n)
        ),
        s
      )
    }
    function xn(e, { worker: t, writer: n, onTaskFinished: r, transferStreams: i }) {
      try {
        let { value: n, readable: r, writable: s } = e
        const a = []
        if (n) {
          const { buffer: t, length: r } = n
          r != t.byteLength && (n = new Uint8Array(n)), (e.value = n.buffer), a.push(e.value)
        }
        if ((i && wn ? (r && a.push(r), s && a.push(s)) : (e.readable = e.writable = null), a.length))
          try {
            return t.postMessage(e, a), !0
          } catch (n) {
            ;(wn = !1), (e.readable = e.writable = null), t.postMessage(e)
          }
        else t.postMessage(e)
      } catch (e) {
        throw (n && n.releaseLock(), r(), e)
      }
    }
    let gn = []
    const bn = []
    let vn = 0
    async function yn(e, t) {
      const { options: n, config: r } = t,
        { transferStreams: i, useWebWorkers: s, useCompressionStream: a, codecType: o, compressed: c, signed: l, encrypted: d } = n,
        { workerScripts: f, maxWorkers: u, terminateWorkerTimeout: p } = r
      t.transferStreams = i || i === Te
      const m = !(c || l || d || t.transferStreams)
      let w
      ;(t.useWebWorkers = !m && (s || (s === Te && r.useWebWorkers))),
        (t.scripts = t.useWebWorkers && f ? f[o] : []),
        (n.useCompressionStream = a || (a === Te && r.useCompressionStream))
      const h = gn.find((e) => !e.busy)
      if (h) _n(h), (w = new ln(h, e, t, x))
      else if (gn.length < u) {
        const n = { indexWorker: vn }
        vn++, gn.push(n), (w = new ln(n, e, t, x))
      } else w = await new Promise((n) => bn.push({ resolve: n, stream: e, workerOptions: t }))
      return w.run()
      function x(e) {
        if (bn.length) {
          const [{ resolve: t, stream: n, workerOptions: r }] = bn.splice(0, 1)
          t(new ln(e, n, r, x))
        } else
          e.worker
            ? (_n(e),
              Number.isFinite(p) &&
                p >= 0 &&
                (e.terminateTimeout = setTimeout(() => {
                  ;(gn = gn.filter((t) => t != e)), e.terminate()
                }, p)))
            : (gn = gn.filter((t) => t != e))
      }
    }
    function _n(e) {
      const { terminateTimeout: t } = e
      t && (clearTimeout(t), (e.terminateTimeout = null))
    }
    const kn = "HTTP error ",
      zn = "HTTP Range not supported",
      Sn = "Content-Length",
      An = "Range",
      Cn = "HEAD",
      Wn = "GET",
      Fn = "bytes",
      En = 65536,
      Un = "writable"
    class Dn {
      constructor() {
        this.size = 0
      }
      init() {
        this.initialized = !0
      }
    }
    class jn extends Dn {
      get readable() {
        const e = this,
          { chunkSize: t = En } = e,
          n = new ReadableStream({
            start() {
              this.chunkOffset = 0
            },
            async pull(r) {
              const { offset: i = 0, size: s, diskNumberStart: a } = n,
                { chunkOffset: o } = this
              r.enqueue(await tr(e, i + o, Math.min(t, s - o), a)), o + t > s ? r.close() : (this.chunkOffset += t)
            }
          })
        return n
      }
    }
    class qn extends jn {
      constructor(e) {
        super(), Object.assign(this, { blob: e, size: e.size })
      }
      async readUint8Array(e, t) {
        const n = this,
          r = e + t,
          i = e || r < n.size ? n.blob.slice(e, r) : n.blob
        return new Uint8Array(await i.arrayBuffer())
      }
    }
    class Tn extends Dn {
      constructor(e) {
        super()
        const t = new TransformStream(),
          n = []
        e && n.push(["Content-Type", e]),
          Object.defineProperty(this, Un, { get: () => t.writable }),
          (this.blob = new Response(t.readable, { headers: n }).blob())
      }
      getData() {
        return this.blob
      }
    }
    class On extends jn {
      constructor(e, t) {
        super(), In(this, e, t)
      }
      async init() {
        await Ln(this, Yn, Nn), super.init()
      }
      readUint8Array(e, t) {
        return Bn(this, e, t, Yn, Nn)
      }
    }
    class Rn extends jn {
      constructor(e, t) {
        super(), In(this, e, t)
      }
      async init() {
        await Ln(this, Xn, Vn), super.init()
      }
      readUint8Array(e, t) {
        return Bn(this, e, t, Xn, Vn)
      }
    }
    function In(e, t, n) {
      const { preventHeadRequest: r, useRangeHeader: i, forceRangeRequests: s } = n
      delete (n = Object.assign({}, n)).preventHeadRequest,
        delete n.useRangeHeader,
        delete n.forceRangeRequests,
        delete n.useXHR,
        Object.assign(e, { url: t, options: n, preventHeadRequest: r, useRangeHeader: i, forceRangeRequests: s })
    }
    async function Ln(e, t, n) {
      const { url: r, useRangeHeader: i, forceRangeRequests: s } = e
      if (
        (function (e) {
          const { baseURL: t } = Ke(),
            { protocol: n } = new URL(e, t)
          return "http:" == n || "https:" == n
        })(r) &&
        (i || s)
      ) {
        const { headers: r } = await t(Wn, e, Mn(e))
        if (!s && r.get("Accept-Ranges") != Fn) throw new Error(zn)
        {
          let i
          const s = r.get("Content-Range")
          if (s) {
            const e = s.trim().split(/\s*\/\s*/)
            if (e.length) {
              const t = e[1]
              t && "*" != t && (i = Number(t))
            }
          }
          i === Te ? await Hn(e, t, n) : (e.size = i)
        }
      } else await Hn(e, t, n)
    }
    async function Bn(e, t, n, r, i) {
      const { useRangeHeader: s, forceRangeRequests: a, options: o } = e
      if (s || a) {
        const i = await r(Wn, e, Mn(e, t, n))
        if (206 != i.status) throw new Error(zn)
        return new Uint8Array(await i.arrayBuffer())
      }
      {
        const { data: r } = e
        return r || (await i(e, o)), new Uint8Array(e.data.subarray(t, t + n))
      }
    }
    function Mn(e, t = 0, n = 1) {
      return Object.assign({}, Kn(e), { [An]: Fn + "=" + t + "-" + (t + n - 1) })
    }
    function Kn({ options: e }) {
      const { headers: t } = e
      if (t) return Symbol.iterator in t ? Object.fromEntries(t) : t
    }
    async function Nn(e) {
      await Pn(e, Yn)
    }
    async function Vn(e) {
      await Pn(e, Xn)
    }
    async function Pn(e, t) {
      const n = await t(Wn, e, Kn(e))
      ;(e.data = new Uint8Array(await n.arrayBuffer())), e.size || (e.size = e.data.length)
    }
    async function Hn(e, t, n) {
      if (e.preventHeadRequest) await n(e, e.options)
      else {
        const r = (await t(Cn, e, Kn(e))).headers.get(Sn)
        r ? (e.size = Number(r)) : await n(e, e.options)
      }
    }
    async function Yn(e, { options: t, url: n }, r) {
      const i = await fetch(n, Object.assign({}, t, { method: e, headers: r }))
      if (i.status < 400) return i
      throw 416 == i.status ? new Error(zn) : new Error(kn + (i.statusText || i.status))
    }
    function Xn(e, { url: t }, n) {
      return new Promise((r, i) => {
        const s = new XMLHttpRequest()
        if (
          (s.addEventListener(
            "load",
            () => {
              if (s.status < 400) {
                const e = []
                s
                  .getAllResponseHeaders()
                  .trim()
                  .split(/[\r\n]+/)
                  .forEach((t) => {
                    const n = t.trim().split(/\s*:\s*/)
                    ;(n[0] = n[0].trim().replace(/^[a-z]|-[a-z]/g, (e) => e.toUpperCase())), e.push(n)
                  }),
                  r({ status: s.status, arrayBuffer: () => s.response, headers: new Map(e) })
              } else i(416 == s.status ? new Error(zn) : new Error(kn + (s.statusText || s.status)))
            },
            !1
          ),
          s.addEventListener("error", (e) => i(e.detail.error), !1),
          s.open(e, t),
          n)
        )
          for (const e of Object.entries(n)) s.setRequestHeader(e[0], e[1])
        ;(s.responseType = "arraybuffer"), s.send()
      })
    }
    class Zn extends jn {
      constructor(e, t = {}) {
        super(), Object.assign(this, { url: e, reader: t.useXHR ? new Rn(e, t) : new On(e, t) })
      }
      set size(e) {}
      get size() {
        return this.reader.size
      }
      async init() {
        await this.reader.init(), super.init()
      }
      readUint8Array(e, t) {
        return this.reader.readUint8Array(e, t)
      }
    }
    class Jn extends jn {
      constructor(e) {
        super(), (this.readers = e)
      }
      async init() {
        const e = this,
          { readers: t } = e
        ;(e.lastDiskNumber = 0),
          await Promise.all(
            t.map(async (t) => {
              await t.init(), (e.size += t.size)
            })
          ),
          super.init()
      }
      async readUint8Array(e, t, n = 0) {
        const r = this,
          { readers: i } = this
        let s,
          a = n
        ;-1 == a && (a = i.length - 1)
        let o = e
        for (; o >= i[a].size; ) (o -= i[a].size), a++
        const c = i[a],
          l = c.size
        if (o + t <= l) s = await tr(c, o, t)
        else {
          const i = l - o
          ;(s = new Uint8Array(t)), s.set(await tr(c, o, i)), s.set(await r.readUint8Array(e + i, t - i, n), i)
        }
        return (r.lastDiskNumber = Math.max(a, r.lastDiskNumber)), s
      }
    }
    class Gn extends Dn {
      constructor(e, t = 4294967295) {
        super()
        const n = this
        let r, i, s
        Object.assign(n, { diskNumber: 0, diskOffset: 0, size: 0, maxSize: t, availableSize: t })
        const a = new WritableStream({
          async write(t) {
            const { availableSize: a } = n
            if (s)
              t.length >= a
                ? (await o(t.slice(0, a)), await c(), (n.diskOffset += r.size), n.diskNumber++, (s = null), await this.write(t.slice(a)))
                : await o(t)
            else {
              const { value: a, done: o } = await e.next()
              if (o && !a) throw new Error("Writer iterator completed too soon")
              ;(r = a),
                (r.size = 0),
                r.maxSize && (n.maxSize = r.maxSize),
                (n.availableSize = n.maxSize),
                await $n(r),
                (i = a.writable),
                (s = i.getWriter()),
                await this.write(t)
            }
          },
          async close() {
            await s.ready, await c()
          }
        })
        async function o(e) {
          const t = e.length
          t && (await s.ready, await s.write(e), (r.size += t), (n.size += t), (n.availableSize -= t))
        }
        async function c() {
          ;(i.size = r.size), await s.close()
        }
        Object.defineProperty(n, Un, { get: () => a })
      }
    }
    async function $n(e, t) {
      e.init && !e.initialized && (await e.init(t))
    }
    function Qn(e) {
      return Array.isArray(e) && (e = new Jn(e)), e instanceof ReadableStream && (e = { readable: e }), e
    }
    function er(e) {
      e.writable === Te && typeof e.next == Re && (e = new Gn(e)), e instanceof WritableStream && (e = { writable: e })
      const { writable: t } = e
      return (
        t.size === Te && (t.size = 0), e instanceof Gn || Object.assign(e, { diskNumber: 0, diskOffset: 0, availableSize: 1 / 0, maxSize: 1 / 0 }), e
      )
    }
    function tr(e, t, n, r) {
      return e.readUint8Array(t, n, r)
    }
    const nr =
        "\0☺☻♥♦♣♠•◘○◙♂♀♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼ !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~⌂ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ ".split(
          ""
        ),
      rr = 256 == nr.length
    function ir(e, t) {
      return t && "cp437" == t.trim().toLowerCase()
        ? (function (e) {
            if (rr) {
              let t = ""
              for (let n = 0; n < e.length; n++) t += nr[e[n]]
              return t
            }
            return new TextDecoder().decode(e)
          })(e)
        : new TextDecoder(t).decode(e)
    }
    const sr = "filename",
      ar = "rawFilename",
      or = "comment",
      cr = "rawComment",
      lr = "uncompressedSize",
      dr = "compressedSize",
      fr = "offset",
      ur = "diskNumberStart",
      pr = "lastModDate",
      mr = "rawLastModDate",
      wr = "lastAccessDate",
      hr = "creationDate",
      xr = "internalFileAttribute",
      gr = "externalFileAttribute",
      br = "msDosCompatible",
      vr = "zip64",
      yr = [
        sr,
        ar,
        dr,
        lr,
        pr,
        mr,
        or,
        cr,
        wr,
        hr,
        fr,
        ur,
        ur,
        xr,
        gr,
        br,
        vr,
        "directory",
        "bitFlag",
        "encrypted",
        "signature",
        "filenameUTF8",
        "commentUTF8",
        "compressionMethod",
        "version",
        "versionMadeBy",
        "extraField",
        "rawExtraField",
        "extraFieldZip64",
        "extraFieldUnicodePath",
        "extraFieldUnicodeComment",
        "extraFieldAES",
        "extraFieldNTFS",
        "extraFieldExtendedTimestamp"
      ]
    class _r {
      constructor(e) {
        yr.forEach((t) => (this[t] = e[t]))
      }
    }
    const kr = "File format is not recognized",
      zr = "Compression method not supported",
      Sr = "Split zip file",
      Ar = "utf-8",
      Cr = "cp437",
      Wr = [
        [lr, we],
        [dr, we],
        [fr, we],
        [ur, he]
      ],
      Fr = { [he]: { getValue: Br, bytes: 4 }, [we]: { getValue: Mr, bytes: 8 } }
    class Er {
      constructor(e, t = {}) {
        Object.assign(this, { reader: Qn(e), options: t, config: Ke() })
      }
      async *getEntriesGenerator(e = {}) {
        const t = this
        let { reader: n } = t
        const { config: r } = t
        if ((await $n(n), (n.size !== Te && n.readUint8Array) || ((n = new qn(await new Response(n.readable).blob())), await $n(n)), n.size < ke))
          throw new Error(kr)
        n.chunkSize = Ne(r)
        const i = await (async function (e, t, n, r, i) {
          const s = new Uint8Array(4)
          Kr(s).setUint32(0, 101010256, !0)
          const a = r + 1048560
          return (await o(r)) || (await o(Math.min(a, n)))
          async function o(t) {
            const i = n - t,
              a = await tr(e, i, t)
            for (let e = a.length - r; e >= 0; e--)
              if (a[e] == s[0] && a[e + 1] == s[1] && a[e + 2] == s[2] && a[e + 3] == s[3]) return { offset: i + e, buffer: a.slice(e, e + r).buffer }
          }
        })(n, 0, n.size, ke)
        if (!i) throw Br(Kr(await tr(n, 0, 4))) == ge ? new Error(Sr) : new Error("End of central directory not found")
        const s = Kr(i)
        let a = Br(s, 12),
          o = Br(s, 16)
        const c = i.offset,
          l = Lr(s, 20),
          d = c + ke + l
        let f = Lr(s, 4)
        const u = n.lastDiskNumber || 0
        let p = Lr(s, 6),
          m = Lr(s, 8),
          w = 0,
          h = 0
        if (o == we || a == we || m == he || p == he) {
          const e = Kr(await tr(n, i.offset - 20, 20))
          if (Br(e, 0) != _e) throw new Error("End of Zip64 central directory not found")
          o = Mr(e, 8)
          let t = await tr(n, o, 56, -1),
            r = Kr(t)
          const s = i.offset - 20 - 56
          if (Br(r, 0) != ye && o != s) {
            const e = o
            ;(o = s), (w = o - e), (t = await tr(n, o, 56, -1)), (r = Kr(t))
          }
          if (Br(r, 0) != ye) throw new Error("End of Zip64 central directory locator not found")
          f == he && (f = Br(r, 16)), p == he && (p = Br(r, 20)), m == he && (m = Mr(r, 32)), a == we && (a = Mr(r, 40)), (o -= a)
        }
        if (u != f) throw new Error(Sr)
        if (o < 0 || o >= n.size) throw new Error(kr)
        let x = 0,
          g = await tr(n, o, a, p),
          b = Kr(g)
        if (a) {
          const e = i.offset - a
          if (Br(b, x) != be && o != e) {
            const t = o
            ;(o = e), (w = o - t), (g = await tr(n, o, a, p)), (b = Kr(g))
          }
        }
        if (o < 0 || o >= n.size) throw new Error(kr)
        const v = Tr(t, e, "filenameEncoding"),
          y = Tr(t, e, "commentEncoding")
        for (let i = 0; i < m; i++) {
          const s = new Ur(n, r, t.options)
          if (Br(b, x) != be) throw new Error("Central directory header not found")
          Dr(s, b, x + 6)
          const a = Boolean(s.bitFlag.languageEncodingFlag),
            o = x + 46,
            c = o + s.filenameLength,
            l = c + s.extraFieldLength,
            d = Lr(b, x + 4),
            f = 0 == (0 & d),
            u = g.subarray(o, c),
            p = Lr(b, x + 32),
            _ = l + p,
            k = g.subarray(l, _),
            z = a,
            S = a,
            A = f && 16 == (16 & Ir(b, x + 38)),
            C = Br(b, x + 42) + w
          Object.assign(s, {
            versionMadeBy: d,
            msDosCompatible: f,
            compressedSize: 0,
            uncompressedSize: 0,
            commentLength: p,
            directory: A,
            offset: C,
            diskNumberStart: Lr(b, x + 34),
            internalFileAttribute: Lr(b, x + 36),
            externalFileAttribute: Br(b, x + 38),
            rawFilename: u,
            filenameUTF8: z,
            commentUTF8: S,
            rawExtraField: g.subarray(c, l)
          })
          const [W, F] = await Promise.all([ir(u, z ? Ar : v || Cr), ir(k, S ? Ar : y || Cr)])
          Object.assign(s, { rawComment: k, filename: W, comment: F, directory: A || W.endsWith(De) }), (h = Math.max(C, h)), await jr(s, s, b, x + 6)
          const E = new _r(s)
          ;(E.getData = (e, t) => s.getData(e, E, t)), (x = _)
          const { onprogress: U } = e
          if (U)
            try {
              await U(i + 1, m, new _r(s))
            } catch (e) {}
          yield E
        }
        const _ = Tr(t, e, "extractPrependedData"),
          k = Tr(t, e, "extractAppendedData")
        return (
          _ && (t.prependedData = h > 0 ? await tr(n, 0, h) : new Uint8Array()),
          (t.comment = l ? await tr(n, c + ke, l) : new Uint8Array()),
          k && (t.appendedData = d < n.size ? await tr(n, d, n.size - d) : new Uint8Array()),
          !0
        )
      }
      async getEntries(e = {}) {
        const t = []
        for await (const n of this.getEntriesGenerator(e)) t.push(n)
        return t
      }
      async close() {}
    }
    class Ur {
      constructor(e, t, n) {
        Object.assign(this, { reader: e, config: t, options: n })
      }
      async getData(e, t, n = {}) {
        const r = this,
          {
            reader: i,
            offset: s,
            diskNumberStart: a,
            extraFieldAES: o,
            compressionMethod: c,
            config: l,
            bitFlag: d,
            signature: f,
            rawLastModDate: u,
            uncompressedSize: p,
            compressedSize: m
          } = r,
          w = (r.localDirectory = {}),
          h = Kr(await tr(i, s, 30, a))
        let x = Tr(r, n, "password")
        if (((x = x && x.length && x), o && 99 != o.originalCompressionMethod)) throw new Error(zr)
        if (0 != c && 8 != c) throw new Error(zr)
        if (Br(h, 0) != xe) throw new Error("Local file header not found")
        Dr(w, h, 4),
          (w.rawExtraField = w.extraFieldLength ? await tr(i, s + 30 + w.filenameLength, w.extraFieldLength, a) : new Uint8Array()),
          await jr(r, w, h, 4),
          Object.assign(t, { lastAccessDate: w.lastAccessDate, creationDate: w.creationDate })
        const g = r.encrypted && w.encrypted,
          b = g && !o
        if (g) {
          if (!b && o.strength === Te) throw new Error("Encryption method not supported")
          if (!x) throw new Error("File contains encrypted entry")
        }
        const v = s + 30 + w.filenameLength + w.extraFieldLength,
          y = i.readable
        ;(y.diskNumberStart = a), (y.offset = v)
        let _ = (y.size = m)
        const k = Tr(r, n, "signal"),
          z = Tr(r, n, "checkPasswordOnly")
        z && (e = new WritableStream()), (e = er(e)), await $n(e, p)
        const { writable: S } = e,
          { onstart: A, onprogress: C, onend: W } = n,
          F = {
            options: {
              codecType: an,
              password: x,
              zipCrypto: b,
              encryptionStrength: o && o.strength,
              signed: Tr(r, n, "checkSignature"),
              passwordVerification: b && (d.dataDescriptor ? (u >>> 8) & 255 : (f >>> 24) & 255),
              signature: f,
              compressed: 0 != c,
              encrypted: g,
              useWebWorkers: Tr(r, n, "useWebWorkers"),
              useCompressionStream: Tr(r, n, "useCompressionStream"),
              transferStreams: Tr(r, n, "transferStreams"),
              checkPasswordOnly: z
            },
            config: l,
            streamOptions: { signal: k, size: _, onstart: A, onprogress: C, onend: W }
          }
        let E = 0
        try {
          ;({ outputSize: E } = await yn({ readable: y, writable: S }, F))
        } catch (e) {
          if (!z || e.message != ot) throw e
        } finally {
          const e = Tr(r, n, "preventClose")
          ;(S.size += E), e || S.locked || (await S.close())
        }
        return z ? void 0 : e.getData ? e.getData() : S
      }
    }
    function Dr(e, t, n) {
      const r = (e.rawBitFlag = Lr(t, n + 2)),
        i = (r & Fe) == Fe,
        s = Br(t, n + 6)
      Object.assign(e, {
        encrypted: i,
        version: Lr(t, n),
        bitFlag: { level: (6 & r) >> 1, dataDescriptor: (r & Ee) == Ee, languageEncodingFlag: (r & Ue) == Ue },
        rawLastModDate: s,
        lastModDate: Or(s),
        filenameLength: Lr(t, n + 22),
        extraFieldLength: Lr(t, n + 24)
      })
    }
    async function jr(e, t, n, r) {
      const { rawExtraField: i } = t,
        s = (t.extraField = new Map()),
        a = Kr(new Uint8Array(i))
      let o = 0
      try {
        for (; o < i.length; ) {
          const e = Lr(a, o),
            t = Lr(a, o + 2)
          s.set(e, { type: e, data: i.slice(o + 4, o + 4 + t) }), (o += 4 + t)
        }
      } catch (e) {}
      const c = Lr(n, r + 4)
      Object.assign(t, { signature: Br(n, r + 10), uncompressedSize: Br(n, r + 18), compressedSize: Br(n, r + 14) })
      const l = s.get(ze)
      l &&
        ((function (e, t) {
          t.zip64 = !0
          const n = Kr(e.data),
            r = Wr.filter(([e, n]) => t[e] == n)
          for (let i = 0, s = 0; i < r.length; i++) {
            const [a, o] = r[i]
            if (t[a] == o) {
              const r = Fr[o]
              ;(t[a] = e[a] = r.getValue(n, s)), (s += r.bytes)
            } else if (e[a]) throw new Error("Zip64 extra field not found")
          }
        })(l, t),
        (t.extraFieldZip64 = l))
      const d = s.get(28789)
      d && (await qr(d, sr, ar, t, e), (t.extraFieldUnicodePath = d))
      const f = s.get(25461)
      f && (await qr(f, or, cr, t, e), (t.extraFieldUnicodeComment = f))
      const u = s.get(Se)
      u
        ? ((function (e, t, n) {
            const r = Kr(e.data),
              i = Ir(r, 4)
            Object.assign(e, { vendorVersion: Ir(r, 0), vendorId: Ir(r, 2), strength: i, originalCompressionMethod: n, compressionMethod: Lr(r, 5) }),
              (t.compressionMethod = e.compressionMethod)
          })(u, t, c),
          (t.extraFieldAES = u))
        : (t.compressionMethod = c)
      const p = s.get(Ae)
      p &&
        ((function (e, t) {
          const n = Kr(e.data)
          let r,
            i = 4
          try {
            for (; i < e.data.length && !r; ) {
              const t = Lr(n, i),
                s = Lr(n, i + 2)
              t == Ce && (r = e.data.slice(i + 4, i + 4 + s)), (i += 4 + s)
            }
          } catch (e) {}
          try {
            if (r && 24 == r.length) {
              const n = Kr(r),
                i = n.getBigUint64(0, !0),
                s = n.getBigUint64(8, !0),
                a = n.getBigUint64(16, !0)
              Object.assign(e, { rawLastModDate: i, rawLastAccessDate: s, rawCreationDate: a })
              const o = Rr(i),
                c = { lastModDate: o, lastAccessDate: Rr(s), creationDate: Rr(a) }
              Object.assign(e, c), Object.assign(t, c)
            }
          } catch (e) {}
        })(p, t),
        (t.extraFieldNTFS = p))
      const m = s.get(We)
      m &&
        ((function (e, t) {
          const n = Kr(e.data),
            r = Ir(n, 0),
            i = [],
            s = []
          1 == (1 & r) && (i.push(pr), s.push(mr)),
            2 == (2 & r) && (i.push(wr), s.push("rawLastAccessDate")),
            4 == (4 & r) && (i.push(hr), s.push("rawCreationDate"))
          let a = 1
          i.forEach((r, i) => {
            if (e.data.length >= a + 4) {
              const o = Br(n, a)
              t[r] = e[r] = new Date(1e3 * o)
              const c = s[i]
              e[c] = o
            }
            a += 4
          })
        })(m, t),
        (t.extraFieldExtendedTimestamp = m))
    }
    async function qr(e, t, n, r, i) {
      const s = Kr(e.data),
        a = new Xe()
      a.append(i[n])
      const o = Kr(new Uint8Array(4))
      o.setUint32(0, a.get(), !0),
        Object.assign(e, {
          version: Ir(s, 0),
          signature: Br(s, 1),
          [t]: await ir(e.data.subarray(5)),
          valid: !i.bitFlag.languageEncodingFlag && e.signature == Br(o, 0)
        }),
        e.valid && ((r[t] = e[t]), (r[t + "UTF8"] = !0))
    }
    function Tr(e, t, n) {
      return t[n] === Te ? e.options[n] : t[n]
    }
    function Or(e) {
      const t = (4294901760 & e) >> 16,
        n = 65535 & e
      try {
        return new Date(1980 + ((65024 & t) >> 9), ((480 & t) >> 5) - 1, 31 & t, (63488 & n) >> 11, (2016 & n) >> 5, 2 * (31 & n), 0)
      } catch (e) {}
    }
    function Rr(e) {
      return new Date(Number(e / BigInt(1e4) - BigInt(116444736e5)))
    }
    function Ir(e, t) {
      return e.getUint8(t)
    }
    function Lr(e, t) {
      return e.getUint16(t, !0)
    }
    function Br(e, t) {
      return e.getUint32(t, !0)
    }
    function Mr(e, t) {
      return Number(e.getBigUint64(t, !0))
    }
    function Kr(e) {
      return new DataView(e.buffer)
    }
    const Nr = "Version exceeds 65535",
      Vr = "Zip64 is not supported (make sure 'keepOrder' is set to 'true')",
      Pr = new Uint8Array([7, 0, 2, 0, 65, 69, 3, 0, 0])
    let Hr = 0
    const Yr = []
    class Xr {
      constructor(e, t = {}) {
        ;(e = er(e)),
          Object.assign(this, {
            writer: e,
            addSplitZipSignature: e instanceof Gn,
            options: t,
            config: Ke(),
            files: new Map(),
            filenames: new Set(),
            offset: e.writable.size,
            pendingEntriesSize: 0,
            pendingAddFileCalls: new Set(),
            bufferedWrites: 0
          })
      }
      async add(e = "", t, n = {}) {
        const r = this,
          { pendingAddFileCalls: i, config: s } = r
        let a
        Hr < s.maxWorkers ? Hr++ : await new Promise((e) => Yr.push(e))
        try {
          if (((e = e.trim()), r.filenames.has(e))) throw new Error("File already exists")
          return (
            r.filenames.add(e),
            (a = (async function (e, t, n, r) {
              ;(t = t.trim()), r.directory && !t.endsWith(De) ? (t += De) : (r.directory = t.endsWith(De))
              const i = Je(t)
              if (ii(i) > he) throw new Error("File entry name exceeds 64KB")
              const s = r.comment || "",
                a = Je(s)
              if (ii(a) > he) throw new Error("File entry comment exceeds 64KB")
              const o = Gr(e, r, "version", 20)
              if (o > he) throw new Error(Nr)
              const c = Gr(e, r, "versionMadeBy", 20)
              if (c > he) throw new Error(Nr)
              const l = Gr(e, r, pr, new Date()),
                d = Gr(e, r, wr),
                f = Gr(e, r, hr),
                u = Gr(e, r, br, !0),
                p = Gr(e, r, xr, 0),
                m = Gr(e, r, gr, 0),
                w = Gr(e, r, "password"),
                h = Gr(e, r, "encryptionStrength", 3),
                x = Gr(e, r, "zipCrypto"),
                g = Gr(e, r, "extendedTimestamp", !0),
                b = Gr(e, r, "keepOrder", !0),
                v = Gr(e, r, "level"),
                y = Gr(e, r, "useWebWorkers"),
                _ = Gr(e, r, "bufferedWrite"),
                k = Gr(e, r, "dataDescriptorSignature", !1),
                z = Gr(e, r, "signal"),
                S = Gr(e, r, "useCompressionStream")
              let A = Gr(e, r, "dataDescriptor", !0),
                C = Gr(e, r, vr)
              if (w !== Te && h !== Te && (h < 1 || h > 3)) throw new Error("The strength must equal 1, 2, or 3")
              let W = new Uint8Array()
              const { extraField: F } = r
              if (F) {
                let e = 0,
                  t = 0
                F.forEach((t) => (e += 4 + ii(t))),
                  (W = new Uint8Array(e)),
                  F.forEach((e, n) => {
                    if (n > he) throw new Error("Extra field type exceeds 65535")
                    if (ii(e) > he) throw new Error("Extra field data exceeds 64KB")
                    ni(W, new Uint16Array([n]), t), ni(W, new Uint16Array([ii(e)]), t + 2), ni(W, e, t + 4), (t += 4 + ii(e))
                  })
              }
              let E = 0,
                U = 0,
                D = 0
              const j = !0 === C
              n &&
                ((n = Qn(n)),
                await $n(n),
                n.size === Te
                  ? ((A = !0), (C || C === Te) && ((C = !0), (E = we)))
                  : ((D = n.size),
                    (E = (function (e) {
                      return e + 5 * (Math.floor(e / 16383) + 1)
                    })(D))))
              const { diskOffset: q, diskNumber: T, maxSize: O } = e.writer,
                R = j || D >= we,
                I = j || E >= we,
                L = j || e.offset + e.pendingEntriesSize - q >= we,
                B = (Gr(e, r, "supportZip64SplitFile", !0) && j) || T + Math.ceil(e.pendingEntriesSize / O) >= he
              if (L || R || I || B) {
                if (!1 === C || !b) throw new Error(Vr)
                C = !0
              }
              C = C || !1
              const M = (function (e) {
                  const {
                      rawFilename: t,
                      lastModDate: n,
                      lastAccessDate: r,
                      creationDate: i,
                      password: s,
                      level: a,
                      zip64: o,
                      zipCrypto: c,
                      dataDescriptor: l,
                      directory: d,
                      rawExtraField: f,
                      encryptionStrength: u,
                      extendedTimestamp: p
                    } = e,
                    m = 0 !== a && !d,
                    w = Boolean(s && ii(s))
                  let h,
                    x,
                    g,
                    b = e.version
                  if (w && !c) {
                    h = new Uint8Array(ii(Pr) + 2)
                    const e = ri(h)
                    Qr(e, 0, Se), ni(h, Pr, 2), $r(e, 8, u)
                  } else h = new Uint8Array()
                  if (p) {
                    g = new Uint8Array(9 + (r ? 4 : 0) + (i ? 4 : 0))
                    const e = ri(g)
                    Qr(e, 0, We),
                      Qr(e, 2, ii(g) - 4),
                      $r(e, 4, 1 + (r ? 2 : 0) + (i ? 4 : 0)),
                      ei(e, 5, Math.floor(n.getTime() / 1e3)),
                      r && ei(e, 9, Math.floor(r.getTime() / 1e3)),
                      i && ei(e, 13, Math.floor(i.getTime() / 1e3))
                    try {
                      x = new Uint8Array(36)
                      const e = ri(x),
                        t = Jr(n)
                      Qr(e, 0, Ae), Qr(e, 2, 32), Qr(e, 8, Ce), Qr(e, 10, 24), ti(e, 12, t), ti(e, 20, Jr(r) || t), ti(e, 28, Jr(i) || t)
                    } catch (e) {
                      x = new Uint8Array()
                    }
                  } else x = g = new Uint8Array()
                  let v = Ue
                  l && (v |= Ee)
                  let y = 0
                  m && (y = 8), o && (b = b > 45 ? b : 45), w && ((v |= Fe), c || ((b = b > 51 ? b : 51), (y = 99), m && (h[9] = 8)))
                  const _ = new Uint8Array(26),
                    k = ri(_)
                  Qr(k, 0, b), Qr(k, 2, v), Qr(k, 4, y)
                  const z = new Uint32Array(1),
                    S = ri(z)
                  let A
                  ;(A = n < qe ? qe : n > je ? je : n),
                    Qr(S, 0, (((A.getHours() << 6) | A.getMinutes()) << 5) | (A.getSeconds() / 2)),
                    Qr(S, 2, ((((A.getFullYear() - 1980) << 4) | (A.getMonth() + 1)) << 5) | A.getDate())
                  const C = z[0]
                  ei(k, 6, C), Qr(k, 22, ii(t))
                  const W = ii(h, g, x, f)
                  Qr(k, 24, W)
                  const F = new Uint8Array(30 + ii(t) + W)
                  return (
                    ei(ri(F), 0, xe),
                    ni(F, _, 4),
                    ni(F, t, 30),
                    ni(F, h, 30 + ii(t)),
                    ni(F, g, 30 + ii(t, h)),
                    ni(F, x, 30 + ii(t, h, g)),
                    ni(F, f, 30 + ii(t, h, g, x)),
                    {
                      localHeaderArray: F,
                      headerArray: _,
                      headerView: k,
                      lastModDate: n,
                      rawLastModDate: C,
                      encrypted: w,
                      compressed: m,
                      version: b,
                      compressionMethod: y,
                      rawExtraFieldExtendedTimestamp: g,
                      rawExtraFieldNTFS: x,
                      rawExtraFieldAES: h
                    }
                  )
                })(
                  (r = Object.assign({}, r, {
                    rawFilename: i,
                    rawComment: a,
                    version: o,
                    versionMadeBy: c,
                    lastModDate: l,
                    lastAccessDate: d,
                    creationDate: f,
                    rawExtraField: W,
                    zip64: C,
                    zip64UncompressedSize: R,
                    zip64CompressedSize: I,
                    zip64Offset: L,
                    zip64DiskNumberStart: B,
                    password: w,
                    level: v,
                    useWebWorkers: y,
                    encryptionStrength: h,
                    extendedTimestamp: g,
                    zipCrypto: x,
                    bufferedWrite: _,
                    keepOrder: b,
                    dataDescriptor: A,
                    dataDescriptorSignature: k,
                    signal: z,
                    msDosCompatible: u,
                    internalFileAttribute: p,
                    externalFileAttribute: m,
                    useCompressionStream: S
                  }))
                ),
                K = (function (e) {
                  const { zip64: t, dataDescriptor: n, dataDescriptorSignature: r } = e
                  let i,
                    s = new Uint8Array(),
                    a = 0
                  return (
                    n && ((s = new Uint8Array(t ? (r ? 24 : 20) : r ? 16 : 12)), (i = ri(s)), r && ((a = 4), ei(i, 0, 134695760))),
                    { dataDescriptorArray: s, dataDescriptorView: i, dataDescriptorOffset: a }
                  )
                })(r)
              let N
              ;(U = ii(M.localHeaderArray, K.dataDescriptorArray) + E), (e.pendingEntriesSize += U)
              try {
                N = await (async function (e, t, n, r, i) {
                  const { files: s, writer: a } = e,
                    { keepOrder: o, dataDescriptor: c, signal: l } = i,
                    { headerInfo: d } = r,
                    f = Array.from(s.values()).pop()
                  let u,
                    p,
                    m,
                    w,
                    h,
                    x,
                    g = {}
                  s.set(t, g)
                  try {
                    let d
                    o && ((d = f && f.lock), (g.lock = new Promise((e) => (m = e)))),
                      i.bufferedWrite || e.writerLocked || (e.bufferedWrites && o) || !c
                        ? ((x = new Tn()), (x.writable.size = 0), (u = !0), e.bufferedWrites++, await $n(a))
                        : ((x = a), await b()),
                      await $n(x)
                    const { writable: p } = a
                    let { diskOffset: y } = a
                    if (e.addSplitZipSignature) {
                      delete e.addSplitZipSignature
                      const t = new Uint8Array(4)
                      ei(ri(t), 0, ge), await Zr(p, t), (e.offset += 4)
                    }
                    u || (await d, await v(p))
                    const { diskNumber: _ } = a
                    if (
                      ((h = !0),
                      (g.diskNumberStart = _),
                      (g = await (async function (e, t, { diskNumberStart: n, lock: r }, i, s, a) {
                        const { headerInfo: o, dataDescriptorInfo: c } = i,
                          {
                            localHeaderArray: l,
                            headerArray: d,
                            lastModDate: f,
                            rawLastModDate: u,
                            encrypted: p,
                            compressed: m,
                            version: w,
                            compressionMethod: h,
                            rawExtraFieldExtendedTimestamp: x,
                            rawExtraFieldNTFS: g,
                            rawExtraFieldAES: b
                          } = o,
                          { dataDescriptorArray: v } = c,
                          {
                            rawFilename: y,
                            lastAccessDate: _,
                            creationDate: k,
                            password: z,
                            level: S,
                            zip64: A,
                            zip64UncompressedSize: C,
                            zip64CompressedSize: W,
                            zip64Offset: F,
                            zip64DiskNumberStart: E,
                            zipCrypto: U,
                            dataDescriptor: D,
                            directory: j,
                            versionMadeBy: q,
                            rawComment: T,
                            rawExtraField: O,
                            useWebWorkers: R,
                            onstart: I,
                            onprogress: L,
                            onend: B,
                            signal: M,
                            encryptionStrength: K,
                            extendedTimestamp: N,
                            msDosCompatible: V,
                            internalFileAttribute: P,
                            externalFileAttribute: H,
                            useCompressionStream: Y
                          } = a,
                          X = {
                            lock: r,
                            versionMadeBy: q,
                            zip64: A,
                            directory: Boolean(j),
                            filenameUTF8: !0,
                            rawFilename: y,
                            commentUTF8: !0,
                            rawComment: T,
                            rawExtraFieldExtendedTimestamp: x,
                            rawExtraFieldNTFS: g,
                            rawExtraFieldAES: b,
                            rawExtraField: O,
                            extendedTimestamp: N,
                            msDosCompatible: V,
                            internalFileAttribute: P,
                            externalFileAttribute: H,
                            diskNumberStart: n
                          }
                        let Z,
                          J = 0,
                          G = 0
                        const { writable: $ } = t
                        if (e) {
                          ;(e.chunkSize = Ne(s)), await Zr($, l)
                          const t = e.readable,
                            n = (t.size = e.size),
                            r = {
                              options: {
                                codecType: sn,
                                level: S,
                                password: z,
                                encryptionStrength: K,
                                zipCrypto: p && U,
                                passwordVerification: p && U && (u >> 8) & 255,
                                signed: !0,
                                compressed: m,
                                encrypted: p,
                                useWebWorkers: R,
                                useCompressionStream: Y,
                                transferStreams: !1
                              },
                              config: s,
                              streamOptions: { signal: M, size: n, onstart: I, onprogress: L, onend: B }
                            },
                            i = await yn({ readable: t, writable: $ }, r)
                          ;($.size += i.size), (Z = i.signature), (G = e.size = t.size), (J = i.size)
                        } else await Zr($, l)
                        let Q
                        if (A) {
                          let e = 4
                          C && (e += 8), W && (e += 8), F && (e += 8), E && (e += 4), (Q = new Uint8Array(e))
                        } else Q = new Uint8Array()
                        return (
                          (function (e, t) {
                            const {
                                signature: n,
                                rawExtraFieldZip64: r,
                                compressedSize: i,
                                uncompressedSize: s,
                                headerInfo: a,
                                dataDescriptorInfo: o
                              } = e,
                              { headerView: c, encrypted: l } = a,
                              { dataDescriptorView: d, dataDescriptorOffset: f } = o,
                              { zip64: u, zip64UncompressedSize: p, zip64CompressedSize: m, zipCrypto: w, dataDescriptor: h } = t
                            if (((l && !w) || n === Te || (ei(c, 10, n), h && ei(d, f, n)), u)) {
                              const e = ri(r)
                              Qr(e, 0, ze), Qr(e, 2, r.length - 4)
                              let t = 4
                              p && (ei(c, 18, we), ti(e, t, BigInt(s)), (t += 8)),
                                m && (ei(c, 14, we), ti(e, t, BigInt(i))),
                                h && (ti(d, f + 4, BigInt(i)), ti(d, f + 12, BigInt(s)))
                            } else ei(c, 14, i), ei(c, 18, s), h && (ei(d, f + 4, i), ei(d, f + 8, s))
                          })(
                            { signature: Z, rawExtraFieldZip64: Q, compressedSize: J, uncompressedSize: G, headerInfo: o, dataDescriptorInfo: c },
                            a
                          ),
                          D && (await Zr($, v)),
                          Object.assign(X, {
                            uncompressedSize: G,
                            compressedSize: J,
                            lastModDate: f,
                            rawLastModDate: u,
                            creationDate: k,
                            lastAccessDate: _,
                            encrypted: p,
                            length: ii(l, v) + J,
                            compressionMethod: h,
                            version: w,
                            headerArray: d,
                            signature: Z,
                            rawExtraFieldZip64: Q,
                            zip64UncompressedSize: C,
                            zip64CompressedSize: W,
                            zip64Offset: F,
                            zip64DiskNumberStart: E
                          }),
                          X
                        )
                      })(n, x, g, r, e.config, i)),
                      (h = !1),
                      s.set(t, g),
                      (g.filename = t),
                      u)
                    ) {
                      await x.writable.close()
                      let e = await x.getData()
                      await d,
                        await b(),
                        (w = !0),
                        c ||
                          (e = await (async function (e, t, n, { zipCrypto: r }) {
                            const i = await (function (e, t, n) {
                                return e.slice(0, 26).arrayBuffer()
                              })(t),
                              s = new DataView(i)
                            return (
                              (e.encrypted && !r) || ei(s, 14, e.signature),
                              e.zip64 ? (ei(s, 18, we), ei(s, 22, we)) : (ei(s, 18, e.compressedSize), ei(s, 22, e.uncompressedSize)),
                              await Zr(n, new Uint8Array(i)),
                              t.slice(i.byteLength)
                            )
                          })(g, e, p, i)),
                        await v(p),
                        (g.diskNumberStart = a.diskNumber),
                        (y = a.diskOffset),
                        await e.stream().pipeTo(p, { preventClose: !0, preventAbort: !0, signal: l }),
                        (p.size += e.size),
                        (w = !1)
                    }
                    if (((g.offset = e.offset - y), g.zip64))
                      !(function (e, t) {
                        const { rawExtraFieldZip64: n, offset: r, diskNumberStart: i } = e,
                          { zip64UncompressedSize: s, zip64CompressedSize: a, zip64Offset: o, zip64DiskNumberStart: c } = t,
                          l = ri(n)
                        let d = 4
                        s && (d += 8), a && (d += 8), o && (ti(l, d, BigInt(r)), (d += 8)), c && ei(l, d, i)
                      })(g, i)
                    else if (g.offset >= we) throw new Error(Vr)
                    return (e.offset += g.length), g
                  } catch (n) {
                    if ((u && w) || (!u && h)) {
                      if (((e.hasCorruptedEntries = !0), n))
                        try {
                          n.corruptedEntry = !0
                        } catch (e) {}
                      u ? (e.offset += x.writable.size) : (e.offset = x.writable.size)
                    }
                    throw (s.delete(t), n)
                  } finally {
                    u && e.bufferedWrites--, m && m(), p && p()
                  }
                  async function b() {
                    e.writerLocked = !0
                    const { lockWriter: t } = e
                    ;(e.lockWriter = new Promise(
                      (t) =>
                        (p = () => {
                          ;(e.writerLocked = !1), t()
                        })
                    )),
                      await t
                  }
                  async function v(e) {
                    d.localHeaderArray.length > a.availableSize && ((a.availableSize = 0), await Zr(e, new Uint8Array()))
                  }
                })(e, t, n, { headerInfo: M, dataDescriptorInfo: K }, r)
              } finally {
                e.pendingEntriesSize -= U
              }
              return Object.assign(N, { name: t, comment: s, extraField: F }), new _r(N)
            })(r, e, t, n)),
            i.add(a),
            await a
          )
        } catch (t) {
          throw (r.filenames.delete(e), t)
        } finally {
          i.delete(a)
          const e = Yr.shift()
          e ? e() : Hr--
        }
      }
      async close(e = new Uint8Array(), t = {}) {
        const { pendingAddFileCalls: n, writer: r } = this,
          { writable: i } = r
        for (; n.size; ) await Promise.all(Array.from(n))
        return (
          await (async function (e, t, n) {
            const { files: r, writer: i } = e,
              { diskOffset: s, writable: a } = i
            let { diskNumber: o } = i,
              c = 0,
              l = 0,
              d = e.offset - s,
              f = r.size
            for (const [
              ,
              {
                rawFilename: e,
                rawExtraFieldZip64: t,
                rawExtraFieldAES: n,
                rawExtraField: i,
                rawComment: s,
                rawExtraFieldExtendedTimestamp: a,
                rawExtraFieldNTFS: o
              }
            ] of r)
              l += 46 + ii(e, s, t, n, a, o, i)
            const u = new Uint8Array(l),
              p = ri(u)
            await $n(i)
            let m = 0
            for (const [e, t] of Array.from(r.values()).entries()) {
              const {
                offset: s,
                rawFilename: o,
                rawExtraFieldZip64: l,
                rawExtraFieldAES: d,
                rawExtraFieldNTFS: f,
                rawExtraField: w,
                rawComment: h,
                versionMadeBy: x,
                headerArray: g,
                directory: b,
                zip64: v,
                zip64UncompressedSize: y,
                zip64CompressedSize: _,
                zip64DiskNumberStart: k,
                zip64Offset: z,
                msDosCompatible: S,
                internalFileAttribute: A,
                externalFileAttribute: C,
                extendedTimestamp: W,
                lastModDate: F,
                diskNumberStart: E,
                uncompressedSize: U,
                compressedSize: D
              } = t
              let j
              if (W) {
                j = new Uint8Array(9)
                const e = ri(j)
                Qr(e, 0, We), Qr(e, 2, ii(j) - 4), $r(e, 4, 1), ei(e, 5, Math.floor(F.getTime() / 1e3))
              } else j = new Uint8Array()
              const q = ii(l, d, j, f, w)
              ei(p, c, be), Qr(p, c + 4, x)
              const T = ri(g)
              y || ei(T, 18, U),
                _ || ei(T, 14, D),
                ni(u, g, c + 6),
                Qr(p, c + 30, q),
                Qr(p, c + 32, ii(h)),
                Qr(p, c + 34, v && k ? he : E),
                Qr(p, c + 36, A),
                C ? ei(p, c + 38, C) : b && S && $r(p, c + 38, 16),
                ei(p, c + 42, v && z ? we : s),
                ni(u, o, c + 46),
                ni(u, l, c + 46 + ii(o)),
                ni(u, d, c + 46 + ii(o, l)),
                ni(u, j, c + 46 + ii(o, l, d)),
                ni(u, f, c + 46 + ii(o, l, d, j)),
                ni(u, w, c + 46 + ii(o, l, d, j, f)),
                ni(u, h, c + 46 + ii(o) + q)
              const O = 46 + ii(o, h) + q
              if ((c - m > i.availableSize && ((i.availableSize = 0), await Zr(a, u.slice(m, c)), (m = c)), (c += O), n.onprogress))
                try {
                  await n.onprogress(e + 1, r.size, new _r(t))
                } catch (e) {}
            }
            await Zr(a, m ? u.slice(m) : u)
            let w = i.diskNumber
            const { availableSize: h } = i
            h < ke && w++
            let x = Gr(e, n, "zip64")
            if (d >= we || l >= we || f >= he || w >= he) {
              if (!1 === x) throw new Error(Vr)
              x = !0
            }
            const g = new Uint8Array(x ? 98 : ke),
              b = ri(g)
            ;(c = 0),
              x &&
                (ei(b, 0, ye),
                ti(b, 4, BigInt(44)),
                Qr(b, 12, 45),
                Qr(b, 14, 45),
                ei(b, 16, w),
                ei(b, 20, o),
                ti(b, 24, BigInt(f)),
                ti(b, 32, BigInt(f)),
                ti(b, 40, BigInt(l)),
                ti(b, 48, BigInt(d)),
                ei(b, 56, _e),
                ti(b, 64, BigInt(d) + BigInt(l)),
                ei(b, 72, w + 1),
                Gr(e, n, "supportZip64SplitFile", !0) && ((w = he), (o = he)),
                (f = he),
                (d = we),
                (l = we),
                (c += 76)),
              ei(b, c, ve),
              Qr(b, c + 4, w),
              Qr(b, c + 6, o),
              Qr(b, c + 8, f),
              Qr(b, c + 10, f),
              ei(b, c + 12, l),
              ei(b, c + 16, d)
            const v = ii(t)
            if (v) {
              if (!(v <= he)) throw new Error("Zip file comment exceeds 64KB")
              Qr(b, c + 20, v)
            }
            await Zr(a, g), v && (await Zr(a, t))
          })(this, e, t),
          Gr(this, t, "preventClose") || (await i.close()),
          r.getData ? r.getData() : i
        )
      }
    }
    async function Zr(e, t) {
      const n = e.getWriter()
      await n.ready, (e.size += ii(t)), await n.write(t), n.releaseLock()
    }
    function Jr(e) {
      if (e) return (BigInt(e.getTime()) + BigInt(116444736e5)) * BigInt(1e4)
    }
    function Gr(e, t, n, r) {
      const i = t[n] === Te ? e.options[n] : t[n]
      return i === Te ? r : i
    }
    function $r(e, t, n) {
      e.setUint8(t, n)
    }
    function Qr(e, t, n) {
      e.setUint16(t, n, !0)
    }
    function ei(e, t, n) {
      e.setUint32(t, n, !0)
    }
    function ti(e, t, n) {
      e.setBigUint64(t, n, !0)
    }
    function ni(e, t, n) {
      e.set(t, n)
    }
    function ri(e) {
      return new DataView(e.buffer)
    }
    function ii(...e) {
      let t = 0
      return e.forEach((e) => e && (t += e.length)), t
    }
    let si
    try {
      si = "file:///D:/Gitee-Lib/CesiumNetworkPlug/%E6%BA%90%E7%A0%81/CesiumNetworkPlug/src/@zip.js/lib/zip-fs.js"
    } catch (e) {}
    Ve({ baseURL: si }),
      (function (e) {
        const t = () =>
          URL.createObjectURL(
            new Blob(
              [
                'const{Array:e,Object:t,Number:n,Math:r,Error:s,Uint8Array:i,Uint16Array:o,Uint32Array:c,Int32Array:f,Map:a,DataView:l,Promise:u,TextEncoder:w,crypto:h,postMessage:d,TransformStream:p,ReadableStream:y,WritableStream:m,CompressionStream:b,DecompressionStream:g}=self;class k{constructor(e){return class extends p{constructor(t,n){const r=new e(n);super({transform(e,t){t.enqueue(r.append(e))},flush(e){const t=r.flush();t&&e.enqueue(t)}})}}}}const v=[];for(let e=0;256>e;e++){let t=e;for(let e=0;8>e;e++)1&t?t=t>>>1^3988292384:t>>>=1;v[e]=t}class S{constructor(e){this.t=e||-1}append(e){let t=0|this.t;for(let n=0,r=0|e.length;r>n;n++)t=t>>>8^v[255&(t^e[n])];this.t=t}get(){return~this.t}}class z extends p{constructor(){const e=new S;super({transform(t){e.append(t)},flush(t){const n=new i(4);new l(n.buffer).setUint32(0,e.get()),t.enqueue(n)}})}}const C={concat(e,t){if(0===e.length||0===t.length)return e.concat(t);const n=e[e.length-1],r=C.i(n);return 32===r?e.concat(t):C.o(t,r,0|n,e.slice(0,e.length-1))},l(e){const t=e.length;if(0===t)return 0;const n=e[t-1];return 32*(t-1)+C.i(n)},u(e,t){if(32*e.length<t)return e;const n=(e=e.slice(0,r.ceil(t/32))).length;return t&=31,n>0&&t&&(e[n-1]=C.h(t,e[n-1]&2147483648>>t-1,1)),e},h:(e,t,n)=>32===e?t:(n?0|t:t<<32-e)+1099511627776*e,i:e=>r.round(e/1099511627776)||32,o(e,t,n,r){for(void 0===r&&(r=[]);t>=32;t-=32)r.push(n),n=0;if(0===t)return r.concat(e);for(let s=0;s<e.length;s++)r.push(n|e[s]>>>t),n=e[s]<<32-t;const s=e.length?e[e.length-1]:0,i=C.i(s);return r.push(C.h(t+i&31,t+i>32?n:r.pop(),1)),r}},x={p:{m(e){const t=C.l(e)/8,n=new i(t);let r;for(let s=0;t>s;s++)0==(3&s)&&(r=e[s/4]),n[s]=r>>>24,r<<=8;return n},g(e){const t=[];let n,r=0;for(n=0;n<e.length;n++)r=r<<8|e[n],3==(3&n)&&(t.push(r),r=0);return 3&n&&t.push(C.h(8*(3&n),r)),t}}},_=class{constructor(e){const t=this;t.blockSize=512,t.k=[1732584193,4023233417,2562383102,271733878,3285377520],t.v=[1518500249,1859775393,2400959708,3395469782],e?(t.S=e.S.slice(0),t.C=e.C.slice(0),t._=e._):t.reset()}reset(){const e=this;return e.S=e.k.slice(0),e.C=[],e._=0,e}update(e){const t=this;"string"==typeof e&&(e=x.A.g(e));const n=t.C=C.concat(t.C,e),r=t._,i=t._=r+C.l(e);if(i>9007199254740991)throw new s("Cannot hash more than 2^53 - 1 bits");const o=new c(n);let f=0;for(let e=t.blockSize+r-(t.blockSize+r&t.blockSize-1);i>=e;e+=t.blockSize)t.I(o.subarray(16*f,16*(f+1))),f+=1;return n.splice(0,16*f),t}D(){const e=this;let t=e.C;const n=e.S;t=C.concat(t,[C.h(1,1)]);for(let e=t.length+2;15&e;e++)t.push(0);for(t.push(r.floor(e._/4294967296)),t.push(0|e._);t.length;)e.I(t.splice(0,16));return e.reset(),n}V(e,t,n,r){return e>19?e>39?e>59?e>79?void 0:t^n^r:t&n|t&r|n&r:t^n^r:t&n|~t&r}P(e,t){return t<<e|t>>>32-e}I(t){const n=this,s=n.S,i=e(80);for(let e=0;16>e;e++)i[e]=t[e];let o=s[0],c=s[1],f=s[2],a=s[3],l=s[4];for(let e=0;79>=e;e++){16>e||(i[e]=n.P(1,i[e-3]^i[e-8]^i[e-14]^i[e-16]));const t=n.P(5,o)+n.V(e,c,f,a)+l+i[e]+n.v[r.floor(e/20)]|0;l=a,a=f,f=n.P(30,c),c=o,o=t}s[0]=s[0]+o|0,s[1]=s[1]+c|0,s[2]=s[2]+f|0,s[3]=s[3]+a|0,s[4]=s[4]+l|0}},A={getRandomValues(e){const t=new c(e.buffer),n=e=>{let t=987654321;const n=4294967295;return()=>(t=36969*(65535&t)+(t>>16)&n,(((t<<16)+(e=18e3*(65535&e)+(e>>16)&n)&n)/4294967296+.5)*(r.random()>.5?1:-1))};for(let s,i=0;i<e.length;i+=4){const e=n(4294967296*(s||r.random()));s=987654071*e(),t[i/4]=4294967296*e()|0}return e}},I={importKey:e=>new I.R(x.p.g(e)),B(e,t,n,r){if(n=n||1e4,0>r||0>n)throw new s("invalid params to pbkdf2");const i=1+(r>>5)<<2;let o,c,f,a,u;const w=new ArrayBuffer(i),h=new l(w);let d=0;const p=C;for(t=x.p.g(t),u=1;(i||1)>d;u++){for(o=c=e.encrypt(p.concat(t,[u])),f=1;n>f;f++)for(c=e.encrypt(c),a=0;a<c.length;a++)o[a]^=c[a];for(f=0;(i||1)>d&&f<o.length;f++)h.setInt32(d,o[f]),d+=4}return w.slice(0,r/8)},R:class{constructor(e){const t=this,n=t.M=_,r=[[],[]];t.K=[new n,new n];const s=t.K[0].blockSize/32;e.length>s&&(e=(new n).update(e).D());for(let t=0;s>t;t++)r[0][t]=909522486^e[t],r[1][t]=1549556828^e[t];t.K[0].update(r[0]),t.K[1].update(r[1]),t.U=new n(t.K[0])}reset(){const e=this;e.U=new e.M(e.K[0]),e.N=!1}update(e){this.N=!0,this.U.update(e)}digest(){const e=this,t=e.U.D(),n=new e.M(e.K[1]).update(t).D();return e.reset(),n}encrypt(e){if(this.N)throw new s("encrypt on already updated hmac called!");return this.update(e),this.digest(e)}}},D=void 0!==h&&"function"==typeof h.getRandomValues,V="Invalid password",P="Invalid signature",R="zipjs-abort-check-password";function B(e){return D?h.getRandomValues(e):A.getRandomValues(e)}const E=16,M={name:"PBKDF2"},K=t.assign({hash:{name:"HMAC"}},M),U=t.assign({iterations:1e3,hash:{name:"SHA-1"}},M),N=["deriveBits"],O=[8,12,16],T=[16,24,32],W=10,j=[0,0,0,0],H="undefined",L="function",F=typeof h!=H,q=F&&h.subtle,G=F&&typeof q!=H,J=x.p,Q=class{constructor(e){const t=this;t.O=[[[],[],[],[],[]],[[],[],[],[],[]]],t.O[0][0][0]||t.T();const n=t.O[0][4],r=t.O[1],i=e.length;let o,c,f,a=1;if(4!==i&&6!==i&&8!==i)throw new s("invalid aes key size");for(t.v=[c=e.slice(0),f=[]],o=i;4*i+28>o;o++){let e=c[o-1];(o%i==0||8===i&&o%i==4)&&(e=n[e>>>24]<<24^n[e>>16&255]<<16^n[e>>8&255]<<8^n[255&e],o%i==0&&(e=e<<8^e>>>24^a<<24,a=a<<1^283*(a>>7))),c[o]=c[o-i]^e}for(let e=0;o;e++,o--){const t=c[3&e?o:o-4];f[e]=4>=o||4>e?t:r[0][n[t>>>24]]^r[1][n[t>>16&255]]^r[2][n[t>>8&255]]^r[3][n[255&t]]}}encrypt(e){return this.W(e,0)}decrypt(e){return this.W(e,1)}T(){const e=this.O[0],t=this.O[1],n=e[4],r=t[4],s=[],i=[];let o,c,f,a;for(let e=0;256>e;e++)i[(s[e]=e<<1^283*(e>>7))^e]=e;for(let l=o=0;!n[l];l^=c||1,o=i[o]||1){let i=o^o<<1^o<<2^o<<3^o<<4;i=i>>8^255&i^99,n[l]=i,r[i]=l,a=s[f=s[c=s[l]]];let u=16843009*a^65537*f^257*c^16843008*l,w=257*s[i]^16843008*i;for(let n=0;4>n;n++)e[n][l]=w=w<<24^w>>>8,t[n][i]=u=u<<24^u>>>8}for(let n=0;5>n;n++)e[n]=e[n].slice(0),t[n]=t[n].slice(0)}W(e,t){if(4!==e.length)throw new s("invalid aes block size");const n=this.v[t],r=n.length/4-2,i=[0,0,0,0],o=this.O[t],c=o[0],f=o[1],a=o[2],l=o[3],u=o[4];let w,h,d,p=e[0]^n[0],y=e[t?3:1]^n[1],m=e[2]^n[2],b=e[t?1:3]^n[3],g=4;for(let e=0;r>e;e++)w=c[p>>>24]^f[y>>16&255]^a[m>>8&255]^l[255&b]^n[g],h=c[y>>>24]^f[m>>16&255]^a[b>>8&255]^l[255&p]^n[g+1],d=c[m>>>24]^f[b>>16&255]^a[p>>8&255]^l[255&y]^n[g+2],b=c[b>>>24]^f[p>>16&255]^a[y>>8&255]^l[255&m]^n[g+3],g+=4,p=w,y=h,m=d;for(let e=0;4>e;e++)i[t?3&-e:e]=u[p>>>24]<<24^u[y>>16&255]<<16^u[m>>8&255]<<8^u[255&b]^n[g++],w=p,p=y,y=m,m=b,b=w;return i}},X=class{constructor(e,t){this.j=e,this.H=t,this.L=t}reset(){this.L=this.H}update(e){return this.F(this.j,e,this.L)}q(e){if(255==(e>>24&255)){let t=e>>16&255,n=e>>8&255,r=255&e;255===t?(t=0,255===n?(n=0,255===r?r=0:++r):++n):++t,e=0,e+=t<<16,e+=n<<8,e+=r}else e+=1<<24;return e}G(e){0===(e[0]=this.q(e[0]))&&(e[1]=this.q(e[1]))}F(e,t,n){let r;if(!(r=t.length))return[];const s=C.l(t);for(let s=0;r>s;s+=4){this.G(n);const r=e.encrypt(n);t[s]^=r[0],t[s+1]^=r[1],t[s+2]^=r[2],t[s+3]^=r[3]}return C.u(t,s)}},Y=I.R;let Z=F&&G&&typeof q.importKey==L,$=F&&G&&typeof q.deriveBits==L;class ee extends p{constructor({password:e,signed:n,encryptionStrength:r,checkPasswordOnly:o}){super({start(){t.assign(this,{ready:new u((e=>this.J=e)),password:e,signed:n,X:r-1,pending:new i})},async transform(e,t){const n=this,{password:r,X:c,J:f,ready:a}=n;r?(await(async(e,t,n,r)=>{const i=await re(e,t,n,ie(r,0,O[t])),o=ie(r,O[t]);if(i[0]!=o[0]||i[1]!=o[1])throw new s(V)})(n,c,r,ie(e,0,O[c]+2)),e=ie(e,O[c]+2),o?t.error(new s(R)):f()):await a;const l=new i(e.length-W-(e.length-W)%E);t.enqueue(ne(n,e,l,0,W,!0))},async flush(e){const{signed:t,Y:n,Z:r,pending:o,ready:c}=this;await c;const f=ie(o,0,o.length-W),a=ie(o,o.length-W);let l=new i;if(f.length){const e=ce(J,f);r.update(e);const t=n.update(e);l=oe(J,t)}if(t){const e=ie(oe(J,r.digest()),0,W);for(let t=0;W>t;t++)if(e[t]!=a[t])throw new s(P)}e.enqueue(l)}})}}class te extends p{constructor({password:e,encryptionStrength:n}){let r;super({start(){t.assign(this,{ready:new u((e=>this.J=e)),password:e,X:n-1,pending:new i})},async transform(e,t){const n=this,{password:r,X:s,J:o,ready:c}=n;let f=new i;r?(f=await(async(e,t,n)=>{const r=B(new i(O[t]));return se(r,await re(e,t,n,r))})(n,s,r),o()):await c;const a=new i(f.length+e.length-e.length%E);a.set(f,0),t.enqueue(ne(n,e,a,f.length,0))},async flush(e){const{Y:t,Z:n,pending:s,ready:o}=this;await o;let c=new i;if(s.length){const e=t.update(ce(J,s));n.update(e),c=oe(J,e)}r.signature=oe(J,n.digest()).slice(0,W),e.enqueue(se(c,r.signature))}}),r=this}}function ne(e,t,n,r,s,o){const{Y:c,Z:f,pending:a}=e,l=t.length-s;let u;for(a.length&&(t=se(a,t),n=((e,t)=>{if(t&&t>e.length){const n=e;(e=new i(t)).set(n,0)}return e})(n,l-l%E)),u=0;l-E>=u;u+=E){const e=ce(J,ie(t,u,u+E));o&&f.update(e);const s=c.update(e);o||f.update(s),n.set(oe(J,s),u+r)}return e.pending=ie(t,u),n}async function re(n,r,s,o){n.password=null;const c=(e=>{if(void 0===w){const t=new i((e=unescape(encodeURIComponent(e))).length);for(let n=0;n<t.length;n++)t[n]=e.charCodeAt(n);return t}return(new w).encode(e)})(s),f=await(async(e,t,n,r,s)=>{if(!Z)return I.importKey(t);try{return await q.importKey("raw",t,n,!1,s)}catch(e){return Z=!1,I.importKey(t)}})(0,c,K,0,N),a=await(async(e,t,n)=>{if(!$)return I.B(t,e.salt,U.iterations,n);try{return await q.deriveBits(e,t,n)}catch(r){return $=!1,I.B(t,e.salt,U.iterations,n)}})(t.assign({salt:o},U),f,8*(2*T[r]+2)),l=new i(a),u=ce(J,ie(l,0,T[r])),h=ce(J,ie(l,T[r],2*T[r])),d=ie(l,2*T[r]);return t.assign(n,{keys:{key:u,$:h,passwordVerification:d},Y:new X(new Q(u),e.from(j)),Z:new Y(h)}),d}function se(e,t){let n=e;return e.length+t.length&&(n=new i(e.length+t.length),n.set(e,0),n.set(t,e.length)),n}function ie(e,t,n){return e.subarray(t,n)}function oe(e,t){return e.m(t)}function ce(e,t){return e.g(t)}class fe extends p{constructor({password:e,passwordVerification:n,checkPasswordOnly:r}){super({start(){t.assign(this,{password:e,passwordVerification:n}),we(this,e)},transform(e,t){const n=this;if(n.password){const t=le(n,e.subarray(0,12));if(n.password=null,t[11]!=n.passwordVerification)throw new s(V);e=e.subarray(12)}r?t.error(new s(R)):t.enqueue(le(n,e))}})}}class ae extends p{constructor({password:e,passwordVerification:n}){super({start(){t.assign(this,{password:e,passwordVerification:n}),we(this,e)},transform(e,t){const n=this;let r,s;if(n.password){n.password=null;const t=B(new i(12));t[11]=n.passwordVerification,r=new i(e.length+t.length),r.set(ue(n,t),0),s=12}else r=new i(e.length),s=0;r.set(ue(n,e),s),t.enqueue(r)}})}}function le(e,t){const n=new i(t.length);for(let r=0;r<t.length;r++)n[r]=de(e)^t[r],he(e,n[r]);return n}function ue(e,t){const n=new i(t.length);for(let r=0;r<t.length;r++)n[r]=de(e)^t[r],he(e,t[r]);return n}function we(e,n){const r=[305419896,591751049,878082192];t.assign(e,{keys:r,ee:new S(r[0]),te:new S(r[2])});for(let t=0;t<n.length;t++)he(e,n.charCodeAt(t))}function he(e,t){let[n,s,i]=e.keys;e.ee.append([t]),n=~e.ee.get(),s=ye(r.imul(ye(s+pe(n)),134775813)+1),e.te.append([s>>>24]),i=~e.te.get(),e.keys=[n,s,i]}function de(e){const t=2|e.keys[2];return pe(r.imul(t,1^t)>>>8)}function pe(e){return 255&e}function ye(e){return 4294967295&e}const me="deflate-raw";class be extends p{constructor(e,{chunkSize:t,CompressionStream:n,CompressionStreamNative:r}){super({});const{compressed:s,encrypted:i,useCompressionStream:o,zipCrypto:c,signed:f,level:a}=e,u=this;let w,h,d=ke(super.readable);i&&!c||!f||([d,w]=d.tee(),w=ze(w,new z)),s&&(d=Se(d,o,{level:a,chunkSize:t},r,n)),i&&(c?d=ze(d,new ae(e)):(h=new te(e),d=ze(d,h))),ve(u,d,(async()=>{let e;i&&!c&&(e=h.signature),i&&!c||!f||(e=await w.getReader().read(),e=new l(e.value.buffer).getUint32(0)),u.signature=e}))}}class ge extends p{constructor(e,{chunkSize:t,DecompressionStream:n,DecompressionStreamNative:r}){super({});const{zipCrypto:i,encrypted:o,signed:c,signature:f,compressed:a,useCompressionStream:u}=e;let w,h,d=ke(super.readable);o&&(i?d=ze(d,new fe(e)):(h=new ee(e),d=ze(d,h))),a&&(d=Se(d,u,{chunkSize:t},r,n)),o&&!i||!c||([d,w]=d.tee(),w=ze(w,new z)),ve(this,d,(async()=>{if((!o||i)&&c){const e=await w.getReader().read(),t=new l(e.value.buffer);if(f!=t.getUint32(0,!1))throw new s(P)}}))}}function ke(e){return ze(e,new p({transform(e,t){e&&e.length&&t.enqueue(e)}}))}function ve(e,n,r){n=ze(n,new p({flush:r})),t.defineProperty(e,"readable",{get:()=>n})}function Se(e,t,n,r,s){try{e=ze(e,new(t&&r?r:s)(me,n))}catch(r){if(!t)throw r;e=ze(e,new s(me,n))}return e}function ze(e,t){return e.pipeThrough(t)}const Ce="data";class xe extends p{constructor(e,n){super({});const r=this,{codecType:s}=e;let i;s.startsWith("deflate")?i=be:s.startsWith("inflate")&&(i=ge);let o=0;const c=new i(e,n),f=super.readable,a=new p({transform(e,t){e&&e.length&&(o+=e.length,t.enqueue(e))},flush(){const{signature:e}=c;t.assign(r,{signature:e,size:o})}});t.defineProperty(r,"readable",{get:()=>f.pipeThrough(c).pipeThrough(a)})}}const _e=new a,Ae=new a;let Ie=0;async function De(e){try{const{options:t,scripts:r,config:s}=e;r&&r.length&&importScripts.apply(void 0,r),self.initCodec&&self.initCodec(),s.CompressionStreamNative=self.CompressionStream,s.DecompressionStreamNative=self.DecompressionStream,self.Deflate&&(s.CompressionStream=new k(self.Deflate)),self.Inflate&&(s.DecompressionStream=new k(self.Inflate));const i={highWaterMark:1,size:()=>s.chunkSize},o=e.readable||new y({async pull(e){const t=new u((e=>_e.set(Ie,e)));Ve({type:"pull",messageId:Ie}),Ie=(Ie+1)%n.MAX_SAFE_INTEGER;const{value:r,done:s}=await t;e.enqueue(r),s&&e.close()}},i),c=e.writable||new m({async write(e){let t;const r=new u((e=>t=e));Ae.set(Ie,t),Ve({type:Ce,value:e,messageId:Ie}),Ie=(Ie+1)%n.MAX_SAFE_INTEGER,await r}},i),f=new xe(t,s);await o.pipeThrough(f).pipeTo(c,{preventClose:!0,preventAbort:!0});try{await c.close()}catch(e){}const{signature:a,size:l}=f;Ve({type:"close",result:{signature:a,size:l}})}catch(e){Pe(e)}}function Ve(e){let{value:t}=e;if(t)if(t.length)try{t=new i(t),e.value=t.buffer,d(e,[e.value])}catch(t){d(e)}else d(e);else d(e)}function Pe(e){const{message:t,stack:n,code:r,name:s}=e;d({error:{message:t,stack:n,code:r,name:s}})}addEventListener("message",(({data:e})=>{const{type:t,messageId:n,value:r,done:s}=e;try{if("start"==t&&De(e),t==Ce){const e=_e.get(n);_e.delete(n),e({value:new i(r),done:s})}if("ack"==t){const e=Ae.get(n);Ae.delete(n),e()}}catch(e){Pe(e)}}));const Re=-2;function Be(t){return Ee(t.map((([t,n])=>new e(t).fill(n,0,t))))}function Ee(t){return t.reduce(((t,n)=>t.concat(e.isArray(n)?Ee(n):n)),[])}const Me=[0,1,2,3].concat(...Be([[2,4],[2,5],[4,6],[4,7],[8,8],[8,9],[16,10],[16,11],[32,12],[32,13],[64,14],[64,15],[2,0],[1,16],[1,17],[2,18],[2,19],[4,20],[4,21],[8,22],[8,23],[16,24],[16,25],[32,26],[32,27],[64,28],[64,29]]));function Ke(){const e=this;function t(e,t){let n=0;do{n|=1&e,e>>>=1,n<<=1}while(--t>0);return n>>>1}e.ne=n=>{const s=e.re,i=e.ie.se,o=e.ie.oe;let c,f,a,l=-1;for(n.ce=0,n.fe=573,c=0;o>c;c++)0!==s[2*c]?(n.ae[++n.ce]=l=c,n.le[c]=0):s[2*c+1]=0;for(;2>n.ce;)a=n.ae[++n.ce]=2>l?++l:0,s[2*a]=1,n.le[a]=0,n.ue--,i&&(n.we-=i[2*a+1]);for(e.he=l,c=r.floor(n.ce/2);c>=1;c--)n.de(s,c);a=o;do{c=n.ae[1],n.ae[1]=n.ae[n.ce--],n.de(s,1),f=n.ae[1],n.ae[--n.fe]=c,n.ae[--n.fe]=f,s[2*a]=s[2*c]+s[2*f],n.le[a]=r.max(n.le[c],n.le[f])+1,s[2*c+1]=s[2*f+1]=a,n.ae[1]=a++,n.de(s,1)}while(n.ce>=2);n.ae[--n.fe]=n.ae[1],(t=>{const n=e.re,r=e.ie.se,s=e.ie.pe,i=e.ie.ye,o=e.ie.me;let c,f,a,l,u,w,h=0;for(l=0;15>=l;l++)t.be[l]=0;for(n[2*t.ae[t.fe]+1]=0,c=t.fe+1;573>c;c++)f=t.ae[c],l=n[2*n[2*f+1]+1]+1,l>o&&(l=o,h++),n[2*f+1]=l,f>e.he||(t.be[l]++,u=0,i>f||(u=s[f-i]),w=n[2*f],t.ue+=w*(l+u),r&&(t.we+=w*(r[2*f+1]+u)));if(0!==h){do{for(l=o-1;0===t.be[l];)l--;t.be[l]--,t.be[l+1]+=2,t.be[o]--,h-=2}while(h>0);for(l=o;0!==l;l--)for(f=t.be[l];0!==f;)a=t.ae[--c],a>e.he||(n[2*a+1]!=l&&(t.ue+=(l-n[2*a+1])*n[2*a],n[2*a+1]=l),f--)}})(n),((e,n,r)=>{const s=[];let i,o,c,f=0;for(i=1;15>=i;i++)s[i]=f=f+r[i-1]<<1;for(o=0;n>=o;o++)c=e[2*o+1],0!==c&&(e[2*o]=t(s[c]++,c))})(s,e.he,n.be)}}function Ue(e,t,n,r,s){const i=this;i.se=e,i.pe=t,i.ye=n,i.oe=r,i.me=s}Ke.ge=[0,1,2,3,4,5,6,7].concat(...Be([[2,8],[2,9],[2,10],[2,11],[4,12],[4,13],[4,14],[4,15],[8,16],[8,17],[8,18],[8,19],[16,20],[16,21],[16,22],[16,23],[32,24],[32,25],[32,26],[31,27],[1,28]])),Ke.ke=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],Ke.ve=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],Ke.Se=e=>256>e?Me[e]:Me[256+(e>>>7)],Ke.ze=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Ke.Ce=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Ke.xe=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Ke._e=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];const Ne=Be([[144,8],[112,9],[24,7],[8,8]]);Ue.Ae=Ee([12,140,76,204,44,172,108,236,28,156,92,220,60,188,124,252,2,130,66,194,34,162,98,226,18,146,82,210,50,178,114,242,10,138,74,202,42,170,106,234,26,154,90,218,58,186,122,250,6,134,70,198,38,166,102,230,22,150,86,214,54,182,118,246,14,142,78,206,46,174,110,238,30,158,94,222,62,190,126,254,1,129,65,193,33,161,97,225,17,145,81,209,49,177,113,241,9,137,73,201,41,169,105,233,25,153,89,217,57,185,121,249,5,133,69,197,37,165,101,229,21,149,85,213,53,181,117,245,13,141,77,205,45,173,109,237,29,157,93,221,61,189,125,253,19,275,147,403,83,339,211,467,51,307,179,435,115,371,243,499,11,267,139,395,75,331,203,459,43,299,171,427,107,363,235,491,27,283,155,411,91,347,219,475,59,315,187,443,123,379,251,507,7,263,135,391,71,327,199,455,39,295,167,423,103,359,231,487,23,279,151,407,87,343,215,471,55,311,183,439,119,375,247,503,15,271,143,399,79,335,207,463,47,303,175,431,111,367,239,495,31,287,159,415,95,351,223,479,63,319,191,447,127,383,255,511,0,64,32,96,16,80,48,112,8,72,40,104,24,88,56,120,4,68,36,100,20,84,52,116,3,131,67,195,35,163,99,227].map(((e,t)=>[e,Ne[t]])));const Oe=Be([[30,5]]);function Te(e,t,n,r,s){const i=this;i.Ie=e,i.De=t,i.Ve=n,i.Pe=r,i.Re=s}Ue.Be=Ee([0,16,8,24,4,20,12,28,2,18,10,26,6,22,14,30,1,17,9,25,5,21,13,29,3,19,11,27,7,23].map(((e,t)=>[e,Oe[t]]))),Ue.Ee=new Ue(Ue.Ae,Ke.ze,257,286,15),Ue.Me=new Ue(Ue.Be,Ke.Ce,0,30,15),Ue.Ke=new Ue(null,Ke.xe,0,19,7);const We=[new Te(0,0,0,0,0),new Te(4,4,8,4,1),new Te(4,5,16,8,1),new Te(4,6,32,32,1),new Te(4,4,16,16,2),new Te(8,16,32,32,2),new Te(8,16,128,128,2),new Te(8,32,128,256,2),new Te(32,128,258,1024,2),new Te(32,258,258,4096,2)],je=["need dictionary","stream end","","","stream error","data error","","buffer error","",""],He=113,Le=666,Fe=262;function qe(e,t,n,r){const s=e[2*t],i=e[2*n];return i>s||s==i&&r[t]<=r[n]}function Ge(){const e=this;let t,n,s,c,f,a,l,u,w,h,d,p,y,m,b,g,k,v,S,z,C,x,_,A,I,D,V,P,R,B,E,M,K;const U=new Ke,N=new Ke,O=new Ke;let T,W,j,H,L,F;function q(){let t;for(t=0;286>t;t++)E[2*t]=0;for(t=0;30>t;t++)M[2*t]=0;for(t=0;19>t;t++)K[2*t]=0;E[512]=1,e.ue=e.we=0,W=j=0}function G(e,t){let n,r=-1,s=e[1],i=0,o=7,c=4;0===s&&(o=138,c=3),e[2*(t+1)+1]=65535;for(let f=0;t>=f;f++)n=s,s=e[2*(f+1)+1],++i<o&&n==s||(c>i?K[2*n]+=i:0!==n?(n!=r&&K[2*n]++,K[32]++):i>10?K[36]++:K[34]++,i=0,r=n,0===s?(o=138,c=3):n==s?(o=6,c=3):(o=7,c=4))}function J(t){e.Ue[e.pending++]=t}function Q(e){J(255&e),J(e>>>8&255)}function X(e,t){let n;const r=t;F>16-r?(n=e,L|=n<<F&65535,Q(L),L=n>>>16-F,F+=r-16):(L|=e<<F&65535,F+=r)}function Y(e,t){const n=2*e;X(65535&t[n],65535&t[n+1])}function Z(e,t){let n,r,s=-1,i=e[1],o=0,c=7,f=4;for(0===i&&(c=138,f=3),n=0;t>=n;n++)if(r=i,i=e[2*(n+1)+1],++o>=c||r!=i){if(f>o)do{Y(r,K)}while(0!=--o);else 0!==r?(r!=s&&(Y(r,K),o--),Y(16,K),X(o-3,2)):o>10?(Y(18,K),X(o-11,7)):(Y(17,K),X(o-3,3));o=0,s=r,0===i?(c=138,f=3):r==i?(c=6,f=3):(c=7,f=4)}}function $(){16==F?(Q(L),L=0,F=0):8>F||(J(255&L),L>>>=8,F-=8)}function ee(t,n){let s,i,o;if(e.Ne[W]=t,e.Oe[W]=255&n,W++,0===t?E[2*n]++:(j++,t--,E[2*(Ke.ge[n]+256+1)]++,M[2*Ke.Se(t)]++),0==(8191&W)&&V>2){for(s=8*W,i=C-k,o=0;30>o;o++)s+=M[2*o]*(5+Ke.Ce[o]);if(s>>>=3,j<r.floor(W/2)&&s<r.floor(i/2))return!0}return W==T-1}function te(t,n){let r,s,i,o,c=0;if(0!==W)do{r=e.Ne[c],s=e.Oe[c],c++,0===r?Y(s,t):(i=Ke.ge[s],Y(i+256+1,t),o=Ke.ze[i],0!==o&&(s-=Ke.ke[i],X(s,o)),r--,i=Ke.Se(r),Y(i,n),o=Ke.Ce[i],0!==o&&(r-=Ke.ve[i],X(r,o)))}while(W>c);Y(256,t),H=t[513]}function ne(){F>8?Q(L):F>0&&J(255&L),L=0,F=0}function re(t,n,r){X(0+(r?1:0),3),((t,n)=>{ne(),H=8,Q(n),Q(~n),e.Ue.set(u.subarray(t,t+n),e.pending),e.pending+=n})(t,n)}function se(n){((t,n,r)=>{let s,i,o=0;V>0?(U.ne(e),N.ne(e),o=(()=>{let t;for(G(E,U.he),G(M,N.he),O.ne(e),t=18;t>=3&&0===K[2*Ke._e[t]+1];t--);return e.ue+=14+3*(t+1),t})(),s=e.ue+3+7>>>3,i=e.we+3+7>>>3,i>s||(s=i)):s=i=n+5,n+4>s||-1==t?i==s?(X(2+(r?1:0),3),te(Ue.Ae,Ue.Be)):(X(4+(r?1:0),3),((e,t,n)=>{let r;for(X(e-257,5),X(t-1,5),X(n-4,4),r=0;n>r;r++)X(K[2*Ke._e[r]+1],3);Z(E,e-1),Z(M,t-1)})(U.he+1,N.he+1,o+1),te(E,M)):re(t,n,r),q(),r&&ne()})(0>k?-1:k,C-k,n),k=C,t.Te()}function ie(){let e,n,r,s;do{if(s=w-_-C,0===s&&0===C&&0===_)s=f;else if(-1==s)s--;else if(C>=f+f-Fe){u.set(u.subarray(f,f+f),0),x-=f,C-=f,k-=f,e=y,r=e;do{n=65535&d[--r],d[r]=f>n?0:n-f}while(0!=--e);e=f,r=e;do{n=65535&h[--r],h[r]=f>n?0:n-f}while(0!=--e);s+=f}if(0===t.We)return;e=t.je(u,C+_,s),_+=e,3>_||(p=255&u[C],p=(p<<g^255&u[C+1])&b)}while(Fe>_&&0!==t.We)}function oe(e){let t,n,r=I,s=C,i=A;const o=C>f-Fe?C-(f-Fe):0;let c=B;const a=l,w=C+258;let d=u[s+i-1],p=u[s+i];R>A||(r>>=2),c>_&&(c=_);do{if(t=e,u[t+i]==p&&u[t+i-1]==d&&u[t]==u[s]&&u[++t]==u[s+1]){s+=2,t++;do{}while(u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&w>s);if(n=258-(w-s),s=w-258,n>i){if(x=e,i=n,n>=c)break;d=u[s+i-1],p=u[s+i]}}}while((e=65535&h[e&a])>o&&0!=--r);return i>_?_:i}e.le=[],e.be=[],e.ae=[],E=[],M=[],K=[],e.de=(t,n)=>{const r=e.ae,s=r[n];let i=n<<1;for(;i<=e.ce&&(i<e.ce&&qe(t,r[i+1],r[i],e.le)&&i++,!qe(t,s,r[i],e.le));)r[n]=r[i],n=i,i<<=1;r[n]=s},e.He=(t,S,x,W,j,G)=>(W||(W=8),j||(j=8),G||(G=0),t.Le=null,-1==S&&(S=6),1>j||j>9||8!=W||9>x||x>15||0>S||S>9||0>G||G>2?Re:(t.Fe=e,a=x,f=1<<a,l=f-1,m=j+7,y=1<<m,b=y-1,g=r.floor((m+3-1)/3),u=new i(2*f),h=[],d=[],T=1<<j+6,e.Ue=new i(4*T),s=4*T,e.Ne=new o(T),e.Oe=new i(T),V=S,P=G,(t=>(t.qe=t.Ge=0,t.Le=null,e.pending=0,e.Je=0,n=He,c=0,U.re=E,U.ie=Ue.Ee,N.re=M,N.ie=Ue.Me,O.re=K,O.ie=Ue.Ke,L=0,F=0,H=8,q(),(()=>{w=2*f,d[y-1]=0;for(let e=0;y-1>e;e++)d[e]=0;D=We[V].De,R=We[V].Ie,B=We[V].Ve,I=We[V].Pe,C=0,k=0,_=0,v=A=2,z=0,p=0})(),0))(t))),e.Qe=()=>42!=n&&n!=He&&n!=Le?Re:(e.Oe=null,e.Ne=null,e.Ue=null,d=null,h=null,u=null,e.Fe=null,n==He?-3:0),e.Xe=(e,t,n)=>{let r=0;return-1==t&&(t=6),0>t||t>9||0>n||n>2?Re:(We[V].Re!=We[t].Re&&0!==e.qe&&(r=e.Ye(1)),V!=t&&(V=t,D=We[V].De,R=We[V].Ie,B=We[V].Ve,I=We[V].Pe),P=n,r)},e.Ze=(e,t,r)=>{let s,i=r,o=0;if(!t||42!=n)return Re;if(3>i)return 0;for(i>f-Fe&&(i=f-Fe,o=r-i),u.set(t.subarray(o,o+i),0),C=i,k=i,p=255&u[0],p=(p<<g^255&u[1])&b,s=0;i-3>=s;s++)p=(p<<g^255&u[s+2])&b,h[s&l]=d[p],d[p]=s;return 0},e.Ye=(r,i)=>{let o,w,m,I,R;if(i>4||0>i)return Re;if(!r.$e||!r.et&&0!==r.We||n==Le&&4!=i)return r.Le=je[4],Re;if(0===r.tt)return r.Le=je[7],-5;var B;if(t=r,I=c,c=i,42==n&&(w=8+(a-8<<4)<<8,m=(V-1&255)>>1,m>3&&(m=3),w|=m<<6,0!==C&&(w|=32),w+=31-w%31,n=He,J((B=w)>>8&255),J(255&B)),0!==e.pending){if(t.Te(),0===t.tt)return c=-1,0}else if(0===t.We&&I>=i&&4!=i)return t.Le=je[7],-5;if(n==Le&&0!==t.We)return r.Le=je[7],-5;if(0!==t.We||0!==_||0!=i&&n!=Le){switch(R=-1,We[V].Re){case 0:R=(e=>{let n,r=65535;for(r>s-5&&(r=s-5);;){if(1>=_){if(ie(),0===_&&0==e)return 0;if(0===_)break}if(C+=_,_=0,n=k+r,(0===C||C>=n)&&(_=C-n,C=n,se(!1),0===t.tt))return 0;if(C-k>=f-Fe&&(se(!1),0===t.tt))return 0}return se(4==e),0===t.tt?4==e?2:0:4==e?3:1})(i);break;case 1:R=(e=>{let n,r=0;for(;;){if(Fe>_){if(ie(),Fe>_&&0==e)return 0;if(0===_)break}if(3>_||(p=(p<<g^255&u[C+2])&b,r=65535&d[p],h[C&l]=d[p],d[p]=C),0===r||(C-r&65535)>f-Fe||2!=P&&(v=oe(r)),3>v)n=ee(0,255&u[C]),_--,C++;else if(n=ee(C-x,v-3),_-=v,v>D||3>_)C+=v,v=0,p=255&u[C],p=(p<<g^255&u[C+1])&b;else{v--;do{C++,p=(p<<g^255&u[C+2])&b,r=65535&d[p],h[C&l]=d[p],d[p]=C}while(0!=--v);C++}if(n&&(se(!1),0===t.tt))return 0}return se(4==e),0===t.tt?4==e?2:0:4==e?3:1})(i);break;case 2:R=(e=>{let n,r,s=0;for(;;){if(Fe>_){if(ie(),Fe>_&&0==e)return 0;if(0===_)break}if(3>_||(p=(p<<g^255&u[C+2])&b,s=65535&d[p],h[C&l]=d[p],d[p]=C),A=v,S=x,v=2,0!==s&&D>A&&f-Fe>=(C-s&65535)&&(2!=P&&(v=oe(s)),5>=v&&(1==P||3==v&&C-x>4096)&&(v=2)),3>A||v>A)if(0!==z){if(n=ee(0,255&u[C-1]),n&&se(!1),C++,_--,0===t.tt)return 0}else z=1,C++,_--;else{r=C+_-3,n=ee(C-1-S,A-3),_-=A-1,A-=2;do{++C>r||(p=(p<<g^255&u[C+2])&b,s=65535&d[p],h[C&l]=d[p],d[p]=C)}while(0!=--A);if(z=0,v=2,C++,n&&(se(!1),0===t.tt))return 0}}return 0!==z&&(n=ee(0,255&u[C-1]),z=0),se(4==e),0===t.tt?4==e?2:0:4==e?3:1})(i)}if(2!=R&&3!=R||(n=Le),0==R||2==R)return 0===t.tt&&(c=-1),0;if(1==R){if(1==i)X(2,3),Y(256,Ue.Ae),$(),9>1+H+10-F&&(X(2,3),Y(256,Ue.Ae),$()),H=7;else if(re(0,0,!1),3==i)for(o=0;y>o;o++)d[o]=0;if(t.Te(),0===t.tt)return c=-1,0}}return 4!=i?0:1}}function Je(){const e=this;e.nt=0,e.rt=0,e.We=0,e.qe=0,e.tt=0,e.Ge=0}function Qe(e){const t=new Je,n=(o=e&&e.chunkSize?e.chunkSize:65536)+5*(r.floor(o/16383)+1);var o;const c=new i(n);let f=e?e.level:-1;void 0===f&&(f=-1),t.He(f),t.$e=c,this.append=(e,r)=>{let o,f,a=0,l=0,u=0;const w=[];if(e.length){t.nt=0,t.et=e,t.We=e.length;do{if(t.rt=0,t.tt=n,o=t.Ye(0),0!=o)throw new s("deflating: "+t.Le);t.rt&&(t.rt==n?w.push(new i(c)):w.push(c.slice(0,t.rt))),u+=t.rt,r&&t.nt>0&&t.nt!=a&&(r(t.nt),a=t.nt)}while(t.We>0||0===t.tt);return w.length>1?(f=new i(u),w.forEach((e=>{f.set(e,l),l+=e.length}))):f=w[0]||new i,f}},this.flush=()=>{let e,r,o=0,f=0;const a=[];do{if(t.rt=0,t.tt=n,e=t.Ye(4),1!=e&&0!=e)throw new s("deflating: "+t.Le);n-t.tt>0&&a.push(c.slice(0,t.rt)),f+=t.rt}while(t.We>0||0===t.tt);return t.Qe(),r=new i(f),a.forEach((e=>{r.set(e,o),o+=e.length})),r}}Je.prototype={He(e,t){const n=this;return n.Fe=new Ge,t||(t=15),n.Fe.He(n,e,t)},Ye(e){const t=this;return t.Fe?t.Fe.Ye(t,e):Re},Qe(){const e=this;if(!e.Fe)return Re;const t=e.Fe.Qe();return e.Fe=null,t},Xe(e,t){const n=this;return n.Fe?n.Fe.Xe(n,e,t):Re},Ze(e,t){const n=this;return n.Fe?n.Fe.Ze(n,e,t):Re},je(e,t,n){const r=this;let s=r.We;return s>n&&(s=n),0===s?0:(r.We-=s,e.set(r.et.subarray(r.nt,r.nt+s),t),r.nt+=s,r.qe+=s,s)},Te(){const e=this;let t=e.Fe.pending;t>e.tt&&(t=e.tt),0!==t&&(e.$e.set(e.Fe.Ue.subarray(e.Fe.Je,e.Fe.Je+t),e.rt),e.rt+=t,e.Fe.Je+=t,e.Ge+=t,e.tt-=t,e.Fe.pending-=t,0===e.Fe.pending&&(e.Fe.Je=0))}};const Xe=-2,Ye=-3,Ze=-5,$e=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],et=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],tt=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],nt=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],rt=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],st=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],it=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];function ot(){let e,t,n,r,s,i;function o(e,t,o,c,f,a,l,u,w,h,d){let p,y,m,b,g,k,v,S,z,C,x,_,A,I,D;C=0,g=o;do{n[e[t+C]]++,C++,g--}while(0!==g);if(n[0]==o)return l[0]=-1,u[0]=0,0;for(S=u[0],k=1;15>=k&&0===n[k];k++);for(v=k,k>S&&(S=k),g=15;0!==g&&0===n[g];g--);for(m=g,S>g&&(S=g),u[0]=S,I=1<<k;g>k;k++,I<<=1)if(0>(I-=n[k]))return Ye;if(0>(I-=n[g]))return Ye;for(n[g]+=I,i[1]=k=0,C=1,A=2;0!=--g;)i[A]=k+=n[C],A++,C++;g=0,C=0;do{0!==(k=e[t+C])&&(d[i[k]++]=g),C++}while(++g<o);for(o=i[m],i[0]=g=0,C=0,b=-1,_=-S,s[0]=0,x=0,D=0;m>=v;v++)for(p=n[v];0!=p--;){for(;v>_+S;){if(b++,_+=S,D=m-_,D=D>S?S:D,(y=1<<(k=v-_))>p+1&&(y-=p+1,A=v,D>k))for(;++k<D&&(y<<=1)>n[++A];)y-=n[A];if(D=1<<k,h[0]+D>1440)return Ye;s[b]=x=h[0],h[0]+=D,0!==b?(i[b]=g,r[0]=k,r[1]=S,k=g>>>_-S,r[2]=x-s[b-1]-k,w.set(r,3*(s[b-1]+k))):l[0]=x}for(r[1]=v-_,o>C?d[C]<c?(r[0]=256>d[C]?0:96,r[2]=d[C++]):(r[0]=a[d[C]-c]+16+64,r[2]=f[d[C++]-c]):r[0]=192,y=1<<v-_,k=g>>>_;D>k;k+=y)w.set(r,3*(x+k));for(k=1<<v-1;0!=(g&k);k>>>=1)g^=k;for(g^=k,z=(1<<_)-1;(g&z)!=i[b];)b--,_-=S,z=(1<<_)-1}return 0!==I&&1!=m?Ze:0}function c(o){let c;for(e||(e=[],t=[],n=new f(16),r=[],s=new f(15),i=new f(16)),t.length<o&&(t=[]),c=0;o>c;c++)t[c]=0;for(c=0;16>c;c++)n[c]=0;for(c=0;3>c;c++)r[c]=0;s.set(n.subarray(0,15),0),i.set(n.subarray(0,16),0)}this.st=(n,r,s,i,f)=>{let a;return c(19),e[0]=0,a=o(n,0,19,19,null,null,s,r,i,e,t),a==Ye?f.Le="oversubscribed dynamic bit lengths tree":a!=Ze&&0!==r[0]||(f.Le="incomplete dynamic bit lengths tree",a=Ye),a},this.it=(n,r,s,i,f,a,l,u,w)=>{let h;return c(288),e[0]=0,h=o(s,0,n,257,nt,rt,a,i,u,e,t),0!=h||0===i[0]?(h==Ye?w.Le="oversubscribed literal/length tree":-4!=h&&(w.Le="incomplete literal/length tree",h=Ye),h):(c(288),h=o(s,n,r,0,st,it,l,f,u,e,t),0!=h||0===f[0]&&n>257?(h==Ye?w.Le="oversubscribed distance tree":h==Ze?(w.Le="incomplete distance tree",h=Ye):-4!=h&&(w.Le="empty distance tree with lengths",h=Ye),h):0)}}function ct(){const e=this;let t,n,r,s,i=0,o=0,c=0,f=0,a=0,l=0,u=0,w=0,h=0,d=0;function p(e,t,n,r,s,i,o,c){let f,a,l,u,w,h,d,p,y,m,b,g,k,v,S,z;d=c.nt,p=c.We,w=o.ot,h=o.ct,y=o.write,m=y<o.read?o.read-y-1:o.end-y,b=$e[e],g=$e[t];do{for(;20>h;)p--,w|=(255&c.ft(d++))<<h,h+=8;if(f=w&b,a=n,l=r,z=3*(l+f),0!==(u=a[z]))for(;;){if(w>>=a[z+1],h-=a[z+1],0!=(16&u)){for(u&=15,k=a[z+2]+(w&$e[u]),w>>=u,h-=u;15>h;)p--,w|=(255&c.ft(d++))<<h,h+=8;for(f=w&g,a=s,l=i,z=3*(l+f),u=a[z];;){if(w>>=a[z+1],h-=a[z+1],0!=(16&u)){for(u&=15;u>h;)p--,w|=(255&c.ft(d++))<<h,h+=8;if(v=a[z+2]+(w&$e[u]),w>>=u,h-=u,m-=k,v>y){S=y-v;do{S+=o.end}while(0>S);if(u=o.end-S,k>u){if(k-=u,y-S>0&&u>y-S)do{o.lt[y++]=o.lt[S++]}while(0!=--u);else o.lt.set(o.lt.subarray(S,S+u),y),y+=u,S+=u,u=0;S=0}}else S=y-v,y-S>0&&2>y-S?(o.lt[y++]=o.lt[S++],o.lt[y++]=o.lt[S++],k-=2):(o.lt.set(o.lt.subarray(S,S+2),y),y+=2,S+=2,k-=2);if(y-S>0&&k>y-S)do{o.lt[y++]=o.lt[S++]}while(0!=--k);else o.lt.set(o.lt.subarray(S,S+k),y),y+=k,S+=k,k=0;break}if(0!=(64&u))return c.Le="invalid distance code",k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,Ye;f+=a[z+2],f+=w&$e[u],z=3*(l+f),u=a[z]}break}if(0!=(64&u))return 0!=(32&u)?(k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,1):(c.Le="invalid literal/length code",k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,Ye);if(f+=a[z+2],f+=w&$e[u],z=3*(l+f),0===(u=a[z])){w>>=a[z+1],h-=a[z+1],o.lt[y++]=a[z+2],m--;break}}else w>>=a[z+1],h-=a[z+1],o.lt[y++]=a[z+2],m--}while(m>=258&&p>=10);return k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,0}e.init=(e,i,o,c,f,a)=>{t=0,u=e,w=i,r=o,h=c,s=f,d=a,n=null},e.ut=(e,y,m)=>{let b,g,k,v,S,z,C,x=0,_=0,A=0;for(A=y.nt,v=y.We,x=e.ot,_=e.ct,S=e.write,z=S<e.read?e.read-S-1:e.end-S;;)switch(t){case 0:if(z>=258&&v>=10&&(e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,m=p(u,w,r,h,s,d,e,y),A=y.nt,v=y.We,x=e.ot,_=e.ct,S=e.write,z=S<e.read?e.read-S-1:e.end-S,0!=m)){t=1==m?7:9;break}c=u,n=r,o=h,t=1;case 1:for(b=c;b>_;){if(0===v)return e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(A++))<<_,_+=8}if(g=3*(o+(x&$e[b])),x>>>=n[g+1],_-=n[g+1],k=n[g],0===k){f=n[g+2],t=6;break}if(0!=(16&k)){a=15&k,i=n[g+2],t=2;break}if(0==(64&k)){c=k,o=g/3+n[g+2];break}if(0!=(32&k)){t=7;break}return t=9,y.Le="invalid literal/length code",m=Ye,e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);case 2:for(b=a;b>_;){if(0===v)return e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(A++))<<_,_+=8}i+=x&$e[b],x>>=b,_-=b,c=w,n=s,o=d,t=3;case 3:for(b=c;b>_;){if(0===v)return e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(A++))<<_,_+=8}if(g=3*(o+(x&$e[b])),x>>=n[g+1],_-=n[g+1],k=n[g],0!=(16&k)){a=15&k,l=n[g+2],t=4;break}if(0==(64&k)){c=k,o=g/3+n[g+2];break}return t=9,y.Le="invalid distance code",m=Ye,e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);case 4:for(b=a;b>_;){if(0===v)return e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(A++))<<_,_+=8}l+=x&$e[b],x>>=b,_-=b,t=5;case 5:for(C=S-l;0>C;)C+=e.end;for(;0!==i;){if(0===z&&(S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z&&(e.write=S,m=e.wt(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z)))return e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);e.lt[S++]=e.lt[C++],z--,C==e.end&&(C=0),i--}t=0;break;case 6:if(0===z&&(S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z&&(e.write=S,m=e.wt(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z)))return e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);m=0,e.lt[S++]=f,z--,t=0;break;case 7:if(_>7&&(_-=8,v++,A--),e.write=S,m=e.wt(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,e.read!=e.write)return e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);t=8;case 8:return m=1,e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);case 9:return m=Ye,e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m);default:return m=Xe,e.ot=x,e.ct=_,y.We=v,y.qe+=A-y.nt,y.nt=A,e.write=S,e.wt(y,m)}},e.ht=()=>{}}ot.dt=(e,t,n,r)=>(e[0]=9,t[0]=5,n[0]=et,r[0]=tt,0);const ft=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function at(e,t){const n=this;let r,s=0,o=0,c=0,a=0;const l=[0],u=[0],w=new ct;let h=0,d=new f(4320);const p=new ot;n.ct=0,n.ot=0,n.lt=new i(t),n.end=t,n.read=0,n.write=0,n.reset=(e,t)=>{t&&(t[0]=0),6==s&&w.ht(e),s=0,n.ct=0,n.ot=0,n.read=n.write=0},n.reset(e,null),n.wt=(e,t)=>{let r,s,i;return s=e.rt,i=n.read,r=(i>n.write?n.end:n.write)-i,r>e.tt&&(r=e.tt),0!==r&&t==Ze&&(t=0),e.tt-=r,e.Ge+=r,e.$e.set(n.lt.subarray(i,i+r),s),s+=r,i+=r,i==n.end&&(i=0,n.write==n.end&&(n.write=0),r=n.write-i,r>e.tt&&(r=e.tt),0!==r&&t==Ze&&(t=0),e.tt-=r,e.Ge+=r,e.$e.set(n.lt.subarray(i,i+r),s),s+=r,i+=r),e.rt=s,n.read=i,t},n.ut=(e,t)=>{let i,f,y,m,b,g,k,v;for(m=e.nt,b=e.We,f=n.ot,y=n.ct,g=n.write,k=g<n.read?n.read-g-1:n.end-g;;){let S,z,C,x,_,A,I,D;switch(s){case 0:for(;3>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}switch(i=7&f,h=1&i,i>>>1){case 0:f>>>=3,y-=3,i=7&y,f>>>=i,y-=i,s=1;break;case 1:S=[],z=[],C=[[]],x=[[]],ot.dt(S,z,C,x),w.init(S[0],z[0],C[0],0,x[0],0),f>>>=3,y-=3,s=6;break;case 2:f>>>=3,y-=3,s=3;break;case 3:return f>>>=3,y-=3,s=9,e.Le="invalid block type",t=Ye,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t)}break;case 1:for(;32>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if((~f>>>16&65535)!=(65535&f))return s=9,e.Le="invalid stored block lengths",t=Ye,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);o=65535&f,f=y=0,s=0!==o?2:0!==h?7:0;break;case 2:if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);if(0===k&&(g==n.end&&0!==n.read&&(g=0,k=g<n.read?n.read-g-1:n.end-g),0===k&&(n.write=g,t=n.wt(e,t),g=n.write,k=g<n.read?n.read-g-1:n.end-g,g==n.end&&0!==n.read&&(g=0,k=g<n.read?n.read-g-1:n.end-g),0===k)))return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);if(t=0,i=o,i>b&&(i=b),i>k&&(i=k),n.lt.set(e.je(m,i),g),m+=i,b-=i,g+=i,k-=i,0!=(o-=i))break;s=0!==h?7:0;break;case 3:for(;14>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if(c=i=16383&f,(31&i)>29||(i>>5&31)>29)return s=9,e.Le="too many length or distance symbols",t=Ye,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);if(i=258+(31&i)+(i>>5&31),!r||r.length<i)r=[];else for(v=0;i>v;v++)r[v]=0;f>>>=14,y-=14,a=0,s=4;case 4:for(;4+(c>>>10)>a;){for(;3>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}r[ft[a++]]=7&f,f>>>=3,y-=3}for(;19>a;)r[ft[a++]]=0;if(l[0]=7,i=p.st(r,l,u,d,e),0!=i)return(t=i)==Ye&&(r=null,s=9),n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);a=0,s=5;case 5:for(;i=c,258+(31&i)+(i>>5&31)>a;){let o,w;for(i=l[0];i>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if(i=d[3*(u[0]+(f&$e[i]))+1],w=d[3*(u[0]+(f&$e[i]))+2],16>w)f>>>=i,y-=i,r[a++]=w;else{for(v=18==w?7:w-14,o=18==w?11:3;i+v>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if(f>>>=i,y-=i,o+=f&$e[v],f>>>=v,y-=v,v=a,i=c,v+o>258+(31&i)+(i>>5&31)||16==w&&1>v)return r=null,s=9,e.Le="invalid bit length repeat",t=Ye,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);w=16==w?r[v-1]:0;do{r[v++]=w}while(0!=--o);a=v}}if(u[0]=-1,_=[],A=[],I=[],D=[],_[0]=9,A[0]=6,i=c,i=p.it(257+(31&i),1+(i>>5&31),r,_,A,I,D,d,e),0!=i)return i==Ye&&(r=null,s=9),t=i,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);w.init(_[0],A[0],d,I[0],d,D[0]),s=6;case 6:if(n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,1!=(t=w.ut(n,e,t)))return n.wt(e,t);if(t=0,w.ht(e),m=e.nt,b=e.We,f=n.ot,y=n.ct,g=n.write,k=g<n.read?n.read-g-1:n.end-g,0===h){s=0;break}s=7;case 7:if(n.write=g,t=n.wt(e,t),g=n.write,k=g<n.read?n.read-g-1:n.end-g,n.read!=n.write)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);s=8;case 8:return t=1,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);case 9:return t=Ye,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);default:return t=Xe,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t)}}},n.ht=e=>{n.reset(e,null),n.lt=null,d=null},n.yt=(e,t,r)=>{n.lt.set(e.subarray(t,t+r),0),n.read=n.write=r},n.bt=()=>1==s?1:0}const lt=13,ut=[0,0,255,255];function wt(){const e=this;function t(e){return e&&e.gt?(e.qe=e.Ge=0,e.Le=null,e.gt.mode=7,e.gt.kt.reset(e,null),0):Xe}e.mode=0,e.method=0,e.vt=[0],e.St=0,e.marker=0,e.zt=0,e.Ct=t=>(e.kt&&e.kt.ht(t),e.kt=null,0),e.xt=(n,r)=>(n.Le=null,e.kt=null,8>r||r>15?(e.Ct(n),Xe):(e.zt=r,n.gt.kt=new at(n,1<<r),t(n),0)),e._t=(e,t)=>{let n,r;if(!e||!e.gt||!e.et)return Xe;const s=e.gt;for(t=4==t?Ze:0,n=Ze;;)switch(s.mode){case 0:if(0===e.We)return n;if(n=t,e.We--,e.qe++,8!=(15&(s.method=e.ft(e.nt++)))){s.mode=lt,e.Le="unknown compression method",s.marker=5;break}if(8+(s.method>>4)>s.zt){s.mode=lt,e.Le="invalid win size",s.marker=5;break}s.mode=1;case 1:if(0===e.We)return n;if(n=t,e.We--,e.qe++,r=255&e.ft(e.nt++),((s.method<<8)+r)%31!=0){s.mode=lt,e.Le="incorrect header check",s.marker=5;break}if(0==(32&r)){s.mode=7;break}s.mode=2;case 2:if(0===e.We)return n;n=t,e.We--,e.qe++,s.St=(255&e.ft(e.nt++))<<24&4278190080,s.mode=3;case 3:if(0===e.We)return n;n=t,e.We--,e.qe++,s.St+=(255&e.ft(e.nt++))<<16&16711680,s.mode=4;case 4:if(0===e.We)return n;n=t,e.We--,e.qe++,s.St+=(255&e.ft(e.nt++))<<8&65280,s.mode=5;case 5:return 0===e.We?n:(n=t,e.We--,e.qe++,s.St+=255&e.ft(e.nt++),s.mode=6,2);case 6:return s.mode=lt,e.Le="need dictionary",s.marker=0,Xe;case 7:if(n=s.kt.ut(e,n),n==Ye){s.mode=lt,s.marker=0;break}if(0==n&&(n=t),1!=n)return n;n=t,s.kt.reset(e,s.vt),s.mode=12;case 12:return e.We=0,1;case lt:return Ye;default:return Xe}},e.At=(e,t,n)=>{let r=0,s=n;if(!e||!e.gt||6!=e.gt.mode)return Xe;const i=e.gt;return s<1<<i.zt||(s=(1<<i.zt)-1,r=n-s),i.kt.yt(t,r,s),i.mode=7,0},e.It=e=>{let n,r,s,i,o;if(!e||!e.gt)return Xe;const c=e.gt;if(c.mode!=lt&&(c.mode=lt,c.marker=0),0===(n=e.We))return Ze;for(r=e.nt,s=c.marker;0!==n&&4>s;)e.ft(r)==ut[s]?s++:s=0!==e.ft(r)?0:4-s,r++,n--;return e.qe+=r-e.nt,e.nt=r,e.We=n,c.marker=s,4!=s?Ye:(i=e.qe,o=e.Ge,t(e),e.qe=i,e.Ge=o,c.mode=7,0)},e.Dt=e=>e&&e.gt&&e.gt.kt?e.gt.kt.bt():Xe}function ht(){}function dt(e){const t=new ht,n=e&&e.chunkSize?r.floor(2*e.chunkSize):131072,o=new i(n);let c=!1;t.xt(),t.$e=o,this.append=(e,r)=>{const f=[];let a,l,u=0,w=0,h=0;if(0!==e.length){t.nt=0,t.et=e,t.We=e.length;do{if(t.rt=0,t.tt=n,0!==t.We||c||(t.nt=0,c=!0),a=t._t(0),c&&a===Ze){if(0!==t.We)throw new s("inflating: bad input")}else if(0!==a&&1!==a)throw new s("inflating: "+t.Le);if((c||1===a)&&t.We===e.length)throw new s("inflating: bad input");t.rt&&(t.rt===n?f.push(new i(o)):f.push(o.slice(0,t.rt))),h+=t.rt,r&&t.nt>0&&t.nt!=u&&(r(t.nt),u=t.nt)}while(t.We>0||0===t.tt);return f.length>1?(l=new i(h),f.forEach((e=>{l.set(e,w),w+=e.length}))):l=f[0]||new i,l}},this.flush=()=>{t.Ct()}}ht.prototype={xt(e){const t=this;return t.gt=new wt,e||(e=15),t.gt.xt(t,e)},_t(e){const t=this;return t.gt?t.gt._t(t,e):Xe},Ct(){const e=this;if(!e.gt)return Xe;const t=e.gt.Ct(e);return e.gt=null,t},It(){const e=this;return e.gt?e.gt.It(e):Xe},At(e,t){const n=this;return n.gt?n.gt.At(n,e,t):Xe},ft(e){return this.et[e]},je(e,t){return this.et.subarray(e,e+t)}},self.initCodec=()=>{self.Deflate=Qe,self.Inflate=dt};\n'
              ],
              { type: "text/javascript" }
            )
          )
        e({ workerScripts: { inflate: [t], deflate: [t] } })
      })(Ve),
      Ve({
        Deflate: function (e) {
          const t = new S(),
            n = (r = e && e.chunkSize ? e.chunkSize : 65536) + 5 * (Math.floor(r / 16383) + 1)
          var r
          const l = s,
            d = new Uint8Array(n)
          let f = e ? e.level : i
          void 0 === f && (f = i),
            t.deflateInit(f),
            (t.next_out = d),
            (this.append = function (e, r) {
              let i,
                s,
                a = 0,
                c = 0,
                f = 0
              const u = []
              if (e.length) {
                ;(t.next_in_index = 0), (t.next_in = e), (t.avail_in = e.length)
                do {
                  if (((t.next_out_index = 0), (t.avail_out = n), (i = t.deflate(l)), i != o)) throw new Error("deflating: " + t.msg)
                  t.next_out_index && (t.next_out_index == n ? u.push(new Uint8Array(d)) : u.push(d.slice(0, t.next_out_index))),
                    (f += t.next_out_index),
                    r && t.next_in_index > 0 && t.next_in_index != a && (r(t.next_in_index), (a = t.next_in_index))
                } while (t.avail_in > 0 || 0 === t.avail_out)
                return (
                  u.length > 1
                    ? ((s = new Uint8Array(f)),
                      u.forEach(function (e) {
                        s.set(e, c), (c += e.length)
                      }))
                    : (s = u[0] || new Uint8Array()),
                  s
                )
              }
            }),
            (this.flush = function () {
              let e,
                r,
                i = 0,
                s = 0
              const l = []
              do {
                if (((t.next_out_index = 0), (t.avail_out = n), (e = t.deflate(a)), e != c && e != o)) throw new Error("deflating: " + t.msg)
                n - t.avail_out > 0 && l.push(d.slice(0, t.next_out_index)), (s += t.next_out_index)
              } while (t.avail_in > 0 || 0 === t.avail_out)
              return (
                t.deflateEnd(),
                (r = new Uint8Array(s)),
                l.forEach(function (e) {
                  r.set(e, i), (i += e.length)
                }),
                r
              )
            })
        },
        Inflate: function (e) {
          const t = new me(),
            n = e && e.chunkSize ? Math.floor(2 * e.chunkSize) : 131072,
            r = new Uint8Array(n)
          let i = !1
          t.inflateInit(),
            (t.next_out = r),
            (this.append = function (e, s) {
              const a = []
              let o,
                c,
                l = 0,
                d = 0,
                f = 0
              if (0 !== e.length) {
                ;(t.next_in_index = 0), (t.next_in = e), (t.avail_in = e.length)
                do {
                  if (
                    ((t.next_out_index = 0),
                    (t.avail_out = n),
                    0 !== t.avail_in || i || ((t.next_in_index = 0), (i = !0)),
                    (o = t.inflate(0)),
                    i && o === U)
                  ) {
                    if (0 !== t.avail_in) throw new Error("inflating: bad input")
                  } else if (o !== A && o !== C) throw new Error("inflating: " + t.msg)
                  if ((i || o === C) && t.avail_in === e.length) throw new Error("inflating: bad input")
                  t.next_out_index && (t.next_out_index === n ? a.push(new Uint8Array(r)) : a.push(r.slice(0, t.next_out_index))),
                    (f += t.next_out_index),
                    s && t.next_in_index > 0 && t.next_in_index != l && (s(t.next_in_index), (l = t.next_in_index))
                } while (t.avail_in > 0 || 0 === t.avail_out)
                return (
                  a.length > 1
                    ? ((c = new Uint8Array(f)),
                      a.forEach(function (e) {
                        c.set(e, d), (d += e.length)
                      }))
                    : (c = a[0] || new Uint8Array()),
                  c
                )
              }
            }),
            (this.flush = function () {
              t.inflateEnd()
            })
        }
      })
    const ai = {
        async encryptByReader(e, t, n, r = !1) {
          try {
            const i = new Tn(),
              s = new Xr(i)
            await s.add(n, e, { bufferedWrite: !0, password: t }), await s.close(), r && console.time("encryption time")
            let a = await i.getData()
            return r && console.timeEnd("encryption time"), [null, a]
          } catch (e) {
            return [e, null]
          }
        },
        async decryptByReader(e, t, n = !1) {
          try {
            const r = new Er(e, { password: t })
            n && console.time("loading time")
            const i = await r.getEntries()
            n && console.timeEnd("loading time")
            const s = []
            for (let e = 0; e < i.length; e++) {
              n && console.time("decrypt time")
              const t = await i[e].getData(new Tn())
              n && console.timeEnd("decrypt time"), s.push({ name: i[e].filename, blob: await t })
            }
            return await r.close(), [null, { password: t, files: s }]
          } catch (e) {
            return [e, null]
          }
        },
        async encryptByBlob(e, t = "123465", n = "A.data", r = !1) {
          return this.encryptByReader(new qn(e), t, n, r)
        },
        async decryptByBlob(e, t, n = !1) {
          return this.decryptByReader(new qn(e), t, n)
        },
        async decryptByUrl(e, t, n = !1) {
          return this.decryptByReader(new Zn(e, {}), t, n)
        },
        async decryptFirstFileBlob(e, t, n = !1) {
          let [r, i] = await this.decryptByBlob(e, t, n),
            [s, a] = [null, null]
          return i && ([s, a] = await this.getFirstFileByFiles(i.files)), [r || s, a]
        },
        async decryptFirstFileByUrl(e, t, n = !1) {
          let [r, i] = await this.decryptByUrl(e, t, n),
            [s, a] = [null, null]
          return i && ([s, a] = await this.getFirstFileByFiles(i.files)), [r || s, a]
        },
        getFirstFileByFiles: (e) => (e?.length > 0 ? [null, e[0].blob] : [{ msg: "file.length === 0" }, null]),
        async blobToText(e) {
          const t = new FileReader()
          return (
            t.readAsText(e, "utf-8"),
            new Promise((e, n) => {
              ;(t.onload = function (t) {
                e([null, t.target.result])
              }),
                (t.onerror = function (t) {
                  e([t, null])
                })
            })
          )
        },
        async blobToJson(e) {
          let [t, n] = await this.blobToText(e)
          if (!n) return [t, null]
          try {
            return [null, JSON.parse(n)]
          } catch (e) {
            return [e, null]
          }
        },
        blobToArrayBuffer: async (e) => e.arrayBuffer()
      },
      oi = ai
    return t.default
  })()
)
