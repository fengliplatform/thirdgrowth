"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1368], {
        57031: function(e, r, t) {
            t.d(r, {
                u: function() {
                    return x
                }
            });
            var n = t(57437),
                l = t(2265),
                a = t(24021),
                i = t(95656),
                o = t(95201),
                c = t(45008),
                s = t(48467),
                d = t(16210),
                u = t(7302);

            function p() {
                let e = (0, c._)(["\n    width: fit-content;\n    height: fit-content;\n    background-color: transparent;\n    border: 0;\n    margin: 0;\n    padding: 0;\n    &:hover {\n        cursor: pointer;\n        background: transparent;\n    }\n    &:focus {\n        background: transparent;\n    }\n"]);
                return p = function() {
                    return e
                }, e
            }
            let f = (0, d.ZP)("button")(p()),
                m = (0, d.ZP)(s.Z, {
                    shouldForwardProp: e => "sx" !== e
                })(() => ({
                    maxWidth: "300px",
                    backgroundColor: u.W3Q,
                    color: u.JSR,
                    boxShadow: u.kqj,
                    border: "".concat(u.YFe, " solid ").concat(u.VlP),
                    borderRadius: "0px",
                    padding: u.iPk,
                    display: "flex",
                    gap: u.M7t,
                    fontSize: u.jVl,
                    lineHeight: u.gkn,
                    margin: "".concat(u.M7t, " !important"),
                    zIndex: 100,
                    img: {
                        maxWidth: "100%"
                    },
                    ":focus-visible": {
                        outline: "none"
                    },
                    '&[data-popper-placement*="bottom"] .arrow': {
                        top: 0,
                        left: 0,
                        marginTop: "-1.55em",
                        marginLeft: 4,
                        marginRight: 4,
                        "&::before": {
                            borderColor: "".concat(u.VlP, " transparent transparent ").concat(u.VlP),
                            transformOrigin: "0 100%"
                        }
                    },
                    '&[data-popper-placement*="top"] .arrow': {
                        bottom: 0,
                        left: 0,
                        marginBottom: "-1.55em",
                        marginLeft: 4,
                        marginRight: 4,
                        "&::before": {
                            borderColor: "transparent ".concat(u.VlP, " ").concat(u.VlP, " transparent"),
                            transformOrigin: "100% 0"
                        }
                    },
                    '&[data-popper-placement*="right"] .arrow': {
                        left: 0,
                        marginLeft: "-1.55em",
                        marginTop: 4,
                        marginBottom: 4,
                        "&::before": {
                            borderColor: "transparent transparent ".concat(u.VlP, " ").concat(u.VlP),
                            transformOrigin: "100% 100%"
                        }
                    },
                    '&[data-popper-placement*="left"] .arrow': {
                        right: 0,
                        marginRight: "-1.55em",
                        marginTop: 4,
                        marginBottom: 4,
                        "&::before": {
                            borderColor: "".concat(u.VlP, " ").concat(u.VlP, " transparent transparent"),
                            transformOrigin: "0 0"
                        }
                    }
                }));
            var h = t(7685),
                g = t(1111),
                y = t(8060);
            let k = "Tooltip",
                x = e => {
                    let {
                        content: r,
                        position: t = "bottom",
                        hasArrow: c = !1,
                        buttonContent: s = (0, n.jsx)(o.Z, {}),
                        buttonStyles: d,
                        buttonAriaLabel: u,
                        buttonType: p = "button",
                        isOpenByDefault: x = !1,
                        tooltipId: b,
                        uniqueId: v,
                        sx: w,
                        offset: C
                    } = e, E = (0, l.useRef)(null), S = (0, l.useRef)(), [$, T] = (0, l.useState)(null), [P, L] = (0, l.useState)(!1), O = (0, l.useCallback)(() => {
                        L(!1)
                    }, []), j = (0, l.useCallback)(e => {
                        var r;
                        "Enter" !== e.key && " " !== e.key && "Shift" !== e.key && ("Tab" === e.key && z(), "Escape" === e.key && (O(), null == (r = E.current) || r.focus()))
                    }, [O]);
                    if ((0, l.useEffect)(() => {
                            L(x)
                        }, [x]), (0, l.useEffect)(() => (P && S && S.current && document.addEventListener("keydown", j), () => {
                            document.removeEventListener("keydown", j)
                        }), [P, j]), void 0 === u) return console.error("".concat(k, "-error: buttonAriaLabel prop is required")), null;
                    if (void 0 === b) return console.error("".concat(k, "-error: tooltipId prop is required")), null;
                    let M = e => {
                            var r;
                            S.current = e, null == (r = S.current) || r.focus()
                        },
                        z = () => {
                            L(!0)
                        },
                        A = () => {
                            L(!P)
                        };
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(f, {
                            "aria-expanded": P,
                            "aria-label": "string" == typeof s ? "" : u,
                            id: b,
                            onClick: A,
                            onKeyDown: e => {
                                let {
                                    key: r
                                } = e;
                                " " === r || "Enter" === r ? (e.preventDefault(), A()) : "Escape" === r && (e.preventDefault(), O())
                            },
                            "data-testid": (0, y.B)(k, v),
                            style: d,
                            ref: E,
                            type: p,
                            children: s
                        }), (0, n.jsx)(a.d, {
                            onClickAway: e => {
                                var r;
                                E.current && (null == (r = null == E ? void 0 : E.current) ? void 0 : r.contains(e.target)) || O()
                            },
                            children: (0, n.jsxs)(m, {
                                "aria-describedby": b,
                                sx: w,
                                anchorEl: E.current,
                                disablePortal: !0,
                                onKeyDown: e => {
                                    (0, g.KT)(e, S, E, () => {
                                        var e;
                                        O(), null == (e = E.current) || e.focus()
                                    })
                                },
                                open: P,
                                placement: t,
                                role: "tooltip",
                                tabIndex: -1,
                                ref: e => M(e),
                                modifiers: [{
                                    name: "arrow",
                                    enabled: c,
                                    options: {
                                        element: $
                                    }
                                }, {
                                    name: "offset",
                                    enabled: void 0 !== C,
                                    options: {
                                        offset: C
                                    }
                                }],
                                children: [c ? (0, n.jsx)(h.Eh, {
                                    component: "span",
                                    className: "arrow",
                                    ref: T
                                }) : null, (0, n.jsx)(i.default, {
                                    component: "p",
                                    sx: {
                                        border: "none",
                                        padding: 0,
                                        margin: 0,
                                        ":focus-visible": {
                                            outline: "none"
                                        }
                                    },
                                    children: r
                                })]
                            })
                        })]
                    })
                };
            x.displayName = k
        },
        42911: function(e, r, t) {
            t.d(r, {
                $: function() {
                    return e2
                }
            });
            var n, l, a, i, o = t(57437),
                c = t(2265);

            function s() {
                return (s = Object.assign ? Object.assign.bind() : function(e) {
                    for (var r = 1; r < arguments.length; r++) {
                        var t = arguments[r];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            let d = ["children", "options"];
            (n = a || (a = {})).blockQuote = "0", n.breakLine = "1", n.breakThematic = "2", n.codeBlock = "3", n.codeFenced = "4", n.codeInline = "5", n.footnote = "6", n.footnoteReference = "7", n.gfmTask = "8", n.heading = "9", n.headingSetext = "10", n.htmlBlock = "11", n.htmlComment = "12", n.htmlSelfClosing = "13", n.image = "14", n.link = "15", n.linkAngleBraceStyleDetector = "16", n.linkBareUrlDetector = "17", n.linkMailtoDetector = "18", n.newlineCoalescer = "19", n.orderedList = "20", n.paragraph = "21", n.ref = "22", n.refImage = "23", n.refLink = "24", n.table = "25", n.tableSeparator = "26", n.text = "27", n.textBolded = "28", n.textEmphasized = "29", n.textEscaped = "30", n.textMarked = "31", n.textStrikethroughed = "32", n.unorderedList = "33", (l = i || (i = {}))[l.MAX = 0] = "MAX", l[l.HIGH = 1] = "HIGH", l[l.MED = 2] = "MED", l[l.LOW = 3] = "LOW", l[l.MIN = 4] = "MIN";
            let u = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e, r) => (e[r.toLowerCase()] = r, e), {
                    for: "htmlFor"
                }),
                p = {
                    amp: "&",
                    apos: "'",
                    gt: ">",
                    lt: "<",
                    nbsp: "\xa0",
                    quot: "“"
                },
                f = ["style", "script"],
                m = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
                h = /mailto:/i,
                g = /\n{2,}$/,
                y = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
                k = /^ *> ?/gm,
                x = /^ {2,}\n/,
                b = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
                v = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
                w = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
                C = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
                E = /^(?:\n *)*\n/,
                S = /\r\n?/g,
                $ = /^\[\^([^\]]+)](:.*)\n/,
                T = /^\[\^([^\]]+)]/,
                P = /\f/g,
                L = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,
                O = /^\s*?\[(x|\s)\]/,
                j = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
                M = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
                z = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
                A = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
                R = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
                I = /^<!--[\s\S]*?(?:-->)/,
                B = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
                N = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
                V = /^\{.*\}$/,
                _ = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
                D = /^<([^ >]+@[^ >]+)>/,
                W = /^<([^ >]+:\/[^ >]+)>/,
                F = /-([a-z])?/gi,
                H = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
                U = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
                Z = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
                q = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
                G = /(\[|\])/g,
                Q = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
                J = /\t/g,
                K = /^ *\| */,
                X = /(^ *\||\| *$)/g,
                Y = / *$/,
                ee = /^ *:-+: *$/,
                er = /^ *:-+ *$/,
                et = /^ *-+: *$/,
                en = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
                el = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
                ea = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
                ei = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
                eo = /^\\([^0-9A-Za-z\s])/,
                ec = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
                es = /^\n+/,
                ed = /^([ \t]*)/,
                eu = /\\([^\\])/g,
                ep = / *\n+$/,
                ef = /(?:^|\n)( *)$/,
                em = "(?:\\d+\\.)",
                eh = "(?:[*+-])";

            function eg(e) {
                return "( *)(" + (1 === e ? em : eh) + ") +"
            }
            let ey = eg(1),
                ek = eg(2);

            function ex(e) {
                return RegExp("^" + (1 === e ? ey : ek))
            }
            let eb = ex(1),
                ev = ex(2);

            function ew(e) {
                return RegExp("^" + (1 === e ? ey : ek) + "[^\\n]*(?:\\n(?!\\1" + (1 === e ? em : eh) + " )[^\\n]*)*(\\n|$)", "gm")
            }
            let eC = ew(1),
                eE = ew(2);

            function eS(e) {
                let r = 1 === e ? em : eh;
                return RegExp("^( *)(" + r + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + r + " (?!" + r + " ))\\n*|\\s*\\n*$)")
            }
            let e$ = eS(1),
                eT = eS(2);

            function eP(e, r) {
                let t = 1 === r,
                    n = t ? e$ : eT,
                    l = t ? eC : eE,
                    a = t ? eb : ev;
                return {
                    match(e, r, t) {
                        let l = ef.exec(t);
                        return l && (r.list || !r.inline && !r.simple) ? n.exec(e = l[1] + e) : null
                    },
                    order: 1,
                    parse(e, r, n) {
                        let i = t ? +e[2] : void 0,
                            o = e[0].replace(g, "\n").match(l),
                            c = !1;
                        return {
                            items: o.map(function(e, t) {
                                let l;
                                let i = RegExp("^ {1," + a.exec(e)[0].length + "}", "gm"),
                                    s = e.replace(i, "").replace(a, ""),
                                    d = t === o.length - 1,
                                    u = -1 !== s.indexOf("\n\n") || d && c;
                                c = u;
                                let p = n.inline,
                                    f = n.list;
                                n.list = !0, u ? (n.inline = !1, l = s.replace(ep, "\n\n")) : (n.inline = !0, l = s.replace(ep, ""));
                                let m = r(l, n);
                                return n.inline = p, n.list = f, m
                            }),
                            ordered: t,
                            start: i
                        }
                    },
                    render: (r, t, n) => e(r.ordered ? "ol" : "ul", {
                        key: n.key,
                        start: "20" === r.type ? r.start : void 0
                    }, r.items.map(function(r, l) {
                        return e("li", {
                            key: l
                        }, t(r, n))
                    }))
                }
            }
            let eL = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
                eO = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
                ej = [y, v, w, j, z, M, I, H, eC, e$, eE, eT],
                eM = [...ej, /^[^\n]+(?:  \n|\n{2,})/, A, N];

            function ez(e) {
                return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase()
            }

            function eA(e) {
                return et.test(e) ? "right" : ee.test(e) ? "center" : er.test(e) ? "left" : null
            }

            function eR(e, r, t) {
                let n = t.inTable;
                t.inTable = !0;
                let l = r(e.trim(), t);
                t.inTable = n;
                let a = [
                    []
                ];
                return l.forEach(function(e, r) {
                    "26" === e.type ? 0 !== r && r !== l.length - 1 && a.push([]) : ("27" !== e.type || null != l[r + 1] && "26" !== l[r + 1].type || (e.text = e.text.replace(Y, "")), a[a.length - 1].push(e))
                }), a
            }

            function eI(e, r, t) {
                t.inline = !0;
                let n = eR(e[1], r, t),
                    l = e[2].replace(X, "").split("|").map(eA),
                    a = e[3].trim().split("\n").map(function(e) {
                        return eR(e, r, t)
                    });
                return t.inline = !1, {
                    align: l,
                    cells: a,
                    header: n,
                    type: "25"
                }
            }

            function eB(e, r) {
                return null == e.align[r] ? {} : {
                    textAlign: e.align[r]
                }
            }

            function eN(e) {
                return function(r, t) {
                    return t.inline ? e.exec(r) : null
                }
            }

            function eV(e) {
                return function(r, t) {
                    return t.inline || t.simple ? e.exec(r) : null
                }
            }

            function e_(e) {
                return function(r, t) {
                    return t.inline || t.simple ? null : e.exec(r)
                }
            }

            function eD(e) {
                return function(r) {
                    return e.exec(r)
                }
            }

            function eW(e, r, t) {
                if (r.inline || r.simple || t && !t.endsWith("\n")) return null;
                let n = "";
                e.split("\n").every(e => !ej.some(r => r.test(e)) && (n += e + "\n", e.trim()));
                let l = n.trimEnd();
                return "" == l ? null : [n, l]
            }

            function eF(e) {
                try {
                    if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i)) return
                } catch (e) {
                    return null
                }
                return e
            }

            function eH(e) {
                return e.replace(eu, "$1")
            }

            function eU(e, r, t) {
                let n = t.inline || !1,
                    l = t.simple || !1;
                t.inline = !0, t.simple = !0;
                let a = e(r, t);
                return t.inline = n, t.simple = l, a
            }

            function eZ(e, r, t) {
                return t.inline = !1, e(r, t)
            }
            let eq = (e, r, t) => ({
                children: eU(r, e[1], t)
            });

            function eG() {
                return {}
            }

            function eQ() {
                return null
            }

            function eJ(e, r, t) {
                let n = e,
                    l = r.split(".");
                for (; l.length && void 0 !== (n = n[l[0]]);) l.shift();
                return n || t
            }
            var eK = e => {
                let {
                    children: r,
                    options: t
                } = e, n = function(e, r) {
                    if (null == e) return {};
                    var t, n, l = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) r.indexOf(t = a[n]) >= 0 || (l[t] = e[t]);
                    return l
                }(e, d);
                return c.cloneElement(function(e, r = {}) {
                    var t, n;
                    let l;
                    r.overrides = r.overrides || {}, r.slugify = r.slugify || ez, r.namedCodesToUnicode = r.namedCodesToUnicode ? s({}, p, r.namedCodesToUnicode) : p;
                    let a = r.createElement || c.createElement;

                    function i(e, t, ...n) {
                        let l = eJ(r.overrides, `${e}.props`, {});
                        return a(function(e, r) {
                            let t = eJ(r, e);
                            return t ? "function" == typeof t || "object" == typeof t && "render" in t ? t : eJ(r, `${e}.component`, e) : e
                        }(e, r.overrides), s({}, t, l, {
                            className: function(...e) {
                                return e.filter(Boolean).join(" ")
                            }(null == t ? void 0 : t.className, l.className) || void 0
                        }), ...n)
                    }

                    function o(e) {
                        let t;
                        e = e.replace(L, "");
                        let n = !1;
                        r.forceInline ? n = !0 : r.forceBlock || (n = !1 === Q.test(e));
                        let l = er(ee(n ? e : `${e.trimEnd().replace(es,"")}

`, {
                            inline: n
                        }));
                        for (;
                            "string" == typeof l[l.length - 1] && !l[l.length - 1].trim();) l.pop();
                        if (null === r.wrapper) return l;
                        let a = r.wrapper || (n ? "span" : "div");
                        if (l.length > 1 || r.forceWrapper) t = l;
                        else {
                            if (1 === l.length) return "string" == typeof(t = l[0]) ? i("span", {
                                key: "outer"
                            }, t) : t;
                            t = null
                        }
                        return c.createElement(a, {
                            key: "outer"
                        }, t)
                    }

                    function d(e) {
                        let r = e.match(m);
                        return r ? r.reduce(function(e, r, t) {
                            let n = r.indexOf("=");
                            if (-1 !== n) {
                                var l, a;
                                let i = (-1 !== (l = r.slice(0, n)).indexOf("-") && null === l.match(B) && (l = l.replace(F, function(e, r) {
                                        return r.toUpperCase()
                                    })), l).trim(),
                                    s = function(e) {
                                        let r = e[0];
                                        return ('"' === r || "'" === r) && e.length >= 2 && e[e.length - 1] === r ? e.slice(1, -1) : e
                                    }(r.slice(n + 1).trim()),
                                    d = u[i] || i,
                                    p = e[d] = (a = s, "style" === i ? a.split(/;\s?/).reduce(function(e, r) {
                                        let t = r.slice(0, r.indexOf(":"));
                                        return e[t.replace(/(-[a-z])/g, e => e[1].toUpperCase())] = r.slice(t.length + 1).trim(), e
                                    }, {}) : "href" === i || "src" === i ? eF(a) : (a.match(V) && (a = a.slice(1, a.length - 1)), "true" === a || "false" !== a && a));
                                "string" == typeof p && (A.test(p) || N.test(p)) && (e[d] = c.cloneElement(o(p.trim()), {
                                    key: t
                                }))
                            } else "style" !== r && (e[u[r] || r] = !0);
                            return e
                        }, {}) : null
                    }
                    let g = [],
                        X = {},
                        Y = {
                            0: {
                                match: e_(y),
                                order: 1,
                                parse: (e, r, t) => ({
                                    children: r(e[0].replace(k, ""), t)
                                }),
                                render: (e, r, t) => i("blockquote", {
                                    key: t.key
                                }, r(e.children, t))
                            },
                            1: {
                                match: eD(x),
                                order: 1,
                                parse: eG,
                                render: (e, r, t) => i("br", {
                                    key: t.key
                                })
                            },
                            2: {
                                match: e_(b),
                                order: 1,
                                parse: eG,
                                render: (e, r, t) => i("hr", {
                                    key: t.key
                                })
                            },
                            3: {
                                match: e_(w),
                                order: 0,
                                parse: e => ({
                                    lang: void 0,
                                    text: e[0].replace(/^ {4}/gm, "").replace(/\n+$/, "")
                                }),
                                render: (e, r, t) => i("pre", {
                                    key: t.key
                                }, i("code", s({}, e.attrs, {
                                    className: e.lang ? `lang-${e.lang}` : ""
                                }), e.text))
                            },
                            4: {
                                match: e_(v),
                                order: 0,
                                parse: e => ({
                                    attrs: d(e[3] || ""),
                                    lang: e[2] || void 0,
                                    text: e[4],
                                    type: "3"
                                })
                            },
                            5: {
                                match: eV(C),
                                order: 3,
                                parse: e => ({
                                    text: e[2]
                                }),
                                render: (e, r, t) => i("code", {
                                    key: t.key
                                }, e.text)
                            },
                            6: {
                                match: e_($),
                                order: 0,
                                parse: e => (g.push({
                                    footnote: e[2],
                                    identifier: e[1]
                                }), {}),
                                render: eQ
                            },
                            7: {
                                match: eN(T),
                                order: 1,
                                parse: e => ({
                                    target: `#${r.slugify(e[1])}`,
                                    text: e[1]
                                }),
                                render: (e, r, t) => i("a", {
                                    key: t.key,
                                    href: eF(e.target)
                                }, i("sup", {
                                    key: t.key
                                }, e.text))
                            },
                            8: {
                                match: eN(O),
                                order: 1,
                                parse: e => ({
                                    completed: "x" === e[1].toLowerCase()
                                }),
                                render: (e, r, t) => i("input", {
                                    checked: e.completed,
                                    key: t.key,
                                    readOnly: !0,
                                    type: "checkbox"
                                })
                            },
                            9: {
                                match: e_(r.enforceAtxHeadings ? M : j),
                                order: 1,
                                parse: (e, t, n) => ({
                                    children: eU(t, e[2], n),
                                    id: r.slugify(e[2]),
                                    level: e[1].length
                                }),
                                render: (e, r, t) => i(`h${e.level}`, {
                                    id: e.id,
                                    key: t.key
                                }, r(e.children, t))
                            },
                            10: {
                                match: e_(z),
                                order: 0,
                                parse: (e, r, t) => ({
                                    children: eU(r, e[1], t),
                                    level: "=" === e[2] ? 1 : 2,
                                    type: "9"
                                })
                            },
                            11: {
                                match: eD(A),
                                order: 1,
                                parse(e, r, t) {
                                    let [, n] = e[3].match(ed), l = RegExp(`^${n}`, "gm"), a = e[3].replace(l, ""), i = eM.some(e => e.test(a)) ? eZ : eU, o = e[1].toLowerCase(), c = -1 !== f.indexOf(o), s = {
                                        attrs: d(e[2]),
                                        noInnerParse: c,
                                        tag: c ? o : e[1]
                                    };
                                    return t.inAnchor = t.inAnchor || "a" === o, c ? s.text = e[3] : s.children = i(r, a, t), t.inAnchor = !1, s
                                },
                                render: (e, r, t) => i(e.tag, s({
                                    key: t.key
                                }, e.attrs), e.text || r(e.children, t))
                            },
                            13: {
                                match: eD(N),
                                order: 1,
                                parse: e => ({
                                    attrs: d(e[2] || ""),
                                    tag: e[1]
                                }),
                                render: (e, r, t) => i(e.tag, s({}, e.attrs, {
                                    key: t.key
                                }))
                            },
                            12: {
                                match: eD(I),
                                order: 1,
                                parse: () => ({}),
                                render: eQ
                            },
                            14: {
                                match: eV(eO),
                                order: 1,
                                parse: e => ({
                                    alt: e[1],
                                    target: eH(e[2]),
                                    title: e[3]
                                }),
                                render: (e, r, t) => i("img", {
                                    key: t.key,
                                    alt: e.alt || void 0,
                                    title: e.title || void 0,
                                    src: eF(e.target)
                                })
                            },
                            15: {
                                match: eN(eL),
                                order: 3,
                                parse: (e, r, t) => ({
                                    children: function(e, r, t) {
                                        let n = t.inline || !1,
                                            l = t.simple || !1;
                                        t.inline = !1, t.simple = !0;
                                        let a = e(r, t);
                                        return t.inline = n, t.simple = l, a
                                    }(r, e[1], t),
                                    target: eH(e[2]),
                                    title: e[3]
                                }),
                                render: (e, r, t) => i("a", {
                                    key: t.key,
                                    href: eF(e.target),
                                    title: e.title
                                }, r(e.children, t))
                            },
                            16: {
                                match: eN(W),
                                order: 0,
                                parse: e => ({
                                    children: [{
                                        text: e[1],
                                        type: "27"
                                    }],
                                    target: e[1],
                                    type: "15"
                                })
                            },
                            17: {
                                match: (e, r) => r.inAnchor ? null : eN(_)(e, r),
                                order: 0,
                                parse: e => ({
                                    children: [{
                                        text: e[1],
                                        type: "27"
                                    }],
                                    target: e[1],
                                    title: void 0,
                                    type: "15"
                                })
                            },
                            18: {
                                match: eN(D),
                                order: 0,
                                parse(e) {
                                    let r = e[1],
                                        t = e[1];
                                    return h.test(t) || (t = "mailto:" + t), {
                                        children: [{
                                            text: r.replace("mailto:", ""),
                                            type: "27"
                                        }],
                                        target: t,
                                        type: "15"
                                    }
                                }
                            },
                            20: eP(i, 1),
                            33: eP(i, 2),
                            19: {
                                match: e_(E),
                                order: 3,
                                parse: eG,
                                render: () => "\n"
                            },
                            21: {
                                match: eW,
                                order: 3,
                                parse: eq,
                                render: (e, r, t) => i("p", {
                                    key: t.key
                                }, r(e.children, t))
                            },
                            22: {
                                match: eN(U),
                                order: 0,
                                parse: e => (X[e[1]] = {
                                    target: e[2],
                                    title: e[4]
                                }, {}),
                                render: eQ
                            },
                            23: {
                                match: eV(Z),
                                order: 0,
                                parse: e => ({
                                    alt: e[1] || void 0,
                                    ref: e[2]
                                }),
                                render: (e, r, t) => i("img", {
                                    key: t.key,
                                    alt: e.alt,
                                    src: eF(X[e.ref].target),
                                    title: X[e.ref].title
                                })
                            },
                            24: {
                                match: eN(q),
                                order: 0,
                                parse: (e, r, t) => ({
                                    children: r(e[1], t),
                                    fallbackChildren: r(e[0].replace(G, "\\$1"), t),
                                    ref: e[2]
                                }),
                                render: (e, r, t) => X[e.ref] ? i("a", {
                                    key: t.key,
                                    href: eF(X[e.ref].target),
                                    title: X[e.ref].title
                                }, r(e.children, t)) : i("span", {
                                    key: t.key
                                }, r(e.fallbackChildren, t))
                            },
                            25: {
                                match: e_(H),
                                order: 1,
                                parse: eI,
                                render: (e, r, t) => i("table", {
                                    key: t.key
                                }, i("thead", null, i("tr", null, e.header.map(function(n, l) {
                                    return i("th", {
                                        key: l,
                                        style: eB(e, l)
                                    }, r(n, t))
                                }))), i("tbody", null, e.cells.map(function(n, l) {
                                    return i("tr", {
                                        key: l
                                    }, n.map(function(n, l) {
                                        return i("td", {
                                            key: l,
                                            style: eB(e, l)
                                        }, r(n, t))
                                    }))
                                })))
                            },
                            26: {
                                match: function(e, r) {
                                    return r.inTable ? (r.inline = !0, K.exec(e)) : null
                                },
                                order: 1,
                                parse: function() {
                                    return {
                                        type: "26"
                                    }
                                },
                                render: () => " | "
                            },
                            27: {
                                match: eD(ec),
                                order: 4,
                                parse: e => ({
                                    text: e[0].replace(R, (e, t) => r.namedCodesToUnicode[t] ? r.namedCodesToUnicode[t] : e)
                                }),
                                render: e => e.text
                            },
                            28: {
                                match: eV(en),
                                order: 2,
                                parse: (e, r, t) => ({
                                    children: r(e[2], t)
                                }),
                                render: (e, r, t) => i("strong", {
                                    key: t.key
                                }, r(e.children, t))
                            },
                            29: {
                                match: eV(el),
                                order: 3,
                                parse: (e, r, t) => ({
                                    children: r(e[2], t)
                                }),
                                render: (e, r, t) => i("em", {
                                    key: t.key
                                }, r(e.children, t))
                            },
                            30: {
                                match: eV(eo),
                                order: 1,
                                parse: e => ({
                                    text: e[1],
                                    type: "27"
                                })
                            },
                            31: {
                                match: eV(ea),
                                order: 3,
                                parse: eq,
                                render: (e, r, t) => i("mark", {
                                    key: t.key
                                }, r(e.children, t))
                            },
                            32: {
                                match: eV(ei),
                                order: 3,
                                parse: eq,
                                render: (e, r, t) => i("del", {
                                    key: t.key
                                }, r(e.children, t))
                            }
                        };
                    !0 === r.disableParsingRawHTML && (delete Y[11], delete Y[13]);
                    let ee = ((l = Object.keys(Y)).sort(function(e, r) {
                            let t = Y[e].order,
                                n = Y[r].order;
                            return t !== n ? t - n : e < r ? -1 : 1
                        }), function(e, r) {
                            return function e(r, t) {
                                let n = [],
                                    a = "";
                                for (; r;) {
                                    let i = 0;
                                    for (; i < l.length;) {
                                        let o = l[i],
                                            c = Y[o],
                                            s = c.match(r, t, a);
                                        if (s) {
                                            let l = s[0];
                                            r = r.substring(l.length);
                                            let i = c.parse(s, e, t);
                                            null == i.type && (i.type = o), n.push(i), a = l;
                                            break
                                        }
                                        i++
                                    }
                                }
                                return n
                            }(e.replace(S, "\n").replace(P, "").replace(J, "    "), r)
                        }),
                        er = (n = r.renderRule, t = function(e, r, t) {
                            let l = Y[e.type].render;
                            return n ? n(() => l(e, r, t), e, r, t) : l(e, r, t)
                        }, function e(r, n = {}) {
                            if (Array.isArray(r)) {
                                let t = n.key,
                                    l = [],
                                    a = !1;
                                for (let t = 0; t < r.length; t++) {
                                    n.key = t;
                                    let i = e(r[t], n),
                                        o = "string" == typeof i;
                                    o && a ? l[l.length - 1] += i : null !== i && l.push(i), a = o
                                }
                                return n.key = t, l
                            }
                            return t(r, e, n)
                        }),
                        et = o(e);
                    return g.length ? i("div", null, et, i("footer", {
                        key: "footer"
                    }, g.map(function(e) {
                        return i("div", {
                            id: r.slugify(e.identifier),
                            key: e.identifier
                        }, e.identifier, er(ee(e.footnote, {
                            inline: !0
                        })))
                    }))) : et
                }(r, t), n)
            };
            let eX = "MarkdownRenderer",
                eY = "".concat(eX, "-error: Missing required parameter markdown");
            var e1 = t(6508),
                e0 = t(8060);
            let e2 = e => {
                let {
                    markdown: r,
                    overrides: t = {},
                    uniqueId: n,
                    linkColor: l,
                    styles: a = {}
                } = e;
                return r ? (0, o.jsx)(e1.MarkdownContainer, {
                    "data-testid": (0, e0.B)(eX, n),
                    linkColor: l,
                    styles: a,
                    children: (0, o.jsx)(eK, {
                        options: {
                            overrides: t
                        },
                        children: r
                    })
                }) : (console.error(eY), null)
            };
            e2.displayName = eX
        },
        6508: function(e, r, t) {
            t.d(r, {
                MarkdownContainer: function() {
                    return a
                }
            });
            var n = t(16210),
                l = t(7302);
            let a = (0, n.ZP)("div", {
                shouldForwardProp: e => "linkColor" !== e && "styles" !== e
            })(e => {
                let {
                    linkColor: r,
                    styles: t
                } = e;
                return {
                    "h1, h2, h3": {
                        margin: 0,
                        fontWeight: l.rWq,
                        fontSize: l.jJ_,
                        lineHeight: l.Qoq,
                        color: l.JSR
                    },
                    a: {
                        color: r || l.M5G
                    },
                    "@media (min-width: 768px)": {
                        h1: {
                            fontSize: l.gah
                        },
                        h2: {
                            fontSize: l.xwE
                        },
                        h3: {
                            fontSize: l.aQT
                        }
                    },
                    ...t
                }
            })
        }
    }
]);