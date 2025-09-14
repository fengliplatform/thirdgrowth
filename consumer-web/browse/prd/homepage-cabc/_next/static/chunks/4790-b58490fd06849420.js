"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4790], {
        25383: function(t, e, n) {
            n.d(e, {
                Wq: function() {
                    return o
                },
                lP: function() {
                    return l
                },
                yr: function() {
                    return i
                }
            });
            let l = "AdBuilder",
                o = "skeleton",
                i = {
                    CA: "https://www.costco.ca/",
                    US: "https://www.costco.com/"
                }
        },
        14790: function(t, e, n) {
            n.d(e, {
                AdBuilderUI: function() {
                    return ns
                }
            });
            var l = n(57437),
                o = n(89999),
                i = n(29621),
                r = n(2265),
                a = n(68139),
                s = n(18707),
                d = n(79715),
                c = n(85361),
                u = n(3795),
                x = n(92144),
                g = n(42911),
                p = n(7302);
            let h = {
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                    color: p.JSR,
                    display: "flex",
                    fontSize: {
                        lg: p.jJ_,
                        md: p.aQT,
                        xs: p.hE8
                    },
                    fontWeight: p.cQB,
                    gap: "10px",
                    lineHeight: {
                        lg: 1.429,
                        xs: p.gkn
                    },
                    padding: "0px ".concat(p.oFH),
                    wordBreak: "break-word"
                },
                f = t => {
                    let {
                        caption: e
                    } = t;
                    return (0, l.jsx)(x.Text, {
                        sx: h,
                        uniqueId: "caption",
                        children: (0, l.jsx)(g.$, {
                            markdown: e
                        })
                    })
                };
            var m = n(95201);
            let v = "sponsored_tag",
                _ = p.s4A,
                y = {
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                    display: "flex",
                    gap: "16px",
                    justifyContent: "flex-start",
                    padding: "0px 16px"
                },
                b = {
                    alignItems: "center",
                    display: "flex",
                    gap: p.M7t
                },
                w = {
                    height: "14px",
                    width: "14px"
                },
                j = {
                    color: _
                },
                k = t => {
                    let {
                        enable_disclaimer: e,
                        disclaimer: n,
                        disclaimer_markdown: o,
                        enable_sponsored: i
                    } = t, r = { ...y,
                        justifyContent: e && i ? "space-between" : i ? "flex-end" : "flex-start"
                    };
                    return (0, l.jsxs)(u.CostcoBox, {
                        sx: r,
                        "data-testid": "footer_text",
                        children: [e && (0, l.jsx)(g.$, {
                            markdown: o || n
                        }), i && (0, l.jsxs)(u.CostcoBox, {
                            sx: b,
                            children: [(0, l.jsx)(m.k, {
                                sx: w
                            }), (0, l.jsx)(x.Text, {
                                id: v,
                                sx: j,
                                variant: "t7",
                                children: "Sponsored"
                            })]
                        })]
                    })
                },
                I = t => {
                    let {
                        children: e,
                        disableThirdPartyTracking: n,
                        sx: o = {},
                        external_site: i,
                        title: r,
                        adUrl: a,
                        hasExternalLinkWarning: c,
                        externalLinkProps: u = {},
                        ariaDescribedBy: x = {}
                    } = t;
                    return (0, l.jsx)(d.Analytics, {
                        analyticData: {
                            adItem: {
                                isExternal: i,
                                title: r,
                                type: "ad",
                                url: a
                            }
                        },
                        children: (0, l.jsx)(s.Link, {
                            dataPrivate: n,
                            hasExternalLinkWarning: c,
                            href: a,
                            underline: "none",
                            ...u,
                            ...x,
                            sx: o,
                            children: e
                        })
                    })
                };
            var S = n(40538);
            let C = "top_strip",
                A = "bottom_strip",
                B = p.W3Q,
                H = p.Os0,
                z = p.JSR,
                P = {
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "1% 5%"
                },
                F = {
                    alignSelf: "stretch",
                    fontWeight: p.cQB,
                    lineHeight: p.Qoq,
                    textAlign: "center",
                    wordBreak: "break-word"
                },
                T = { ...F,
                    fontSize: {
                        lg: "1.625rem",
                        md: "1.375rem",
                        xs: "1.375rem"
                    }
                },
                Q = { ...F,
                    fontSize: {
                        lg: "0.875rem",
                        md: "0.875rem",
                        xs: "0.625rem"
                    }
                };
            var W = n(92091);
            let R = p.Os0,
                D = p.JSR,
                Z = p.W3Q,
                V = p.JSR,
                q = {
                    borderRadius: W.pM,
                    display: "flex",
                    flexDirection: "column"
                },
                E = { ...q,
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                    padding: "".concat(p.vdF, " ").concat(p.oFH)
                },
                M = { ...q,
                    alignItems: "center",
                    gap: "8px",
                    justifyContent: "center",
                    minWidth: "100%",
                    padding: "10px ".concat(p.oFH)
                },
                N = {
                    alignSelf: "stretch"
                },
                L = {
                    textAlign: "center",
                    wordBreak: "break-word"
                },
                J = { ...L,
                    alignSelf: "stretch",
                    fontSize: p.jJ_,
                    fontWeight: p.cQB,
                    lineHeight: 1.167
                },
                Y = { ...L,
                    fontSize: p.hE8,
                    fontWeight: p.cQB,
                    lineHeight: 1.25
                },
                O = { ...L,
                    alignSelf: "stretch",
                    fontSize: p.YzP,
                    fontWeight: p.cQB,
                    lineHeight: p.Qoq
                },
                U = "below_the_ad",
                $ = "overlay",
                G = "above_the_ad",
                X = "title",
                K = "subtitle",
                tt = "button",
                te = "url_v2",
                tn = "button_v2",
                tl = "default",
                to = "mobile",
                ti = {
                    center: "center",
                    left: "start",
                    right: "end"
                },
                tr = {
                    bottom: "flex-end",
                    top: "flex-start"
                },
                ta = {
                    bottom: "flex-end",
                    middle: "center",
                    top: "flex-start"
                },
                ts = {
                    center: "center",
                    left: "start"
                },
                td = ["title_with_xl", X, "heading", K, "body", "caption"],
                tc = ["title_with_xl_v2", "title_v2", "heading_v2", "subheading_v2", "body_copy_v2", "caption_v2", te, tn];
            var tu = n(16210);
            let tx = p.JSR,
                tg = p.s4A,
                tp = p.s4A,
                th = p.Os0,
                tf = p.W3Q,
                tm = p.Os0,
                tv = p.JSR,
                t_ = p.AhM,
                ty = p.gpS,
                tb = t => "select_style" !== t && "text_content_placement" !== t,
                tw = t => "text_content_placement" !== t && "text_color" !== t,
                tj = t => "text_content_placement" !== t,
                tk = {
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                    display: "flex",
                    flex: "1 0 0",
                    flexDirection: "column",
                    padding: {
                        lg: "".concat(p.aiS, " ").concat(p.SRJ),
                        md: "".concat(p.oFH, " ").concat(p.ODt),
                        xs: p.oFH
                    },
                    position: "absolute"
                },
                tI = {
                    alignItems: "inherit",
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column"
                },
                tS = {
                    fontSize: {
                        lg: p.gah,
                        md: p.aQT,
                        xs: p.jJ_
                    },
                    lineHeight: {
                        lg: 1.143,
                        md: p.Qoq,
                        xs: 1.167
                    }
                },
                tC = {
                    fontSize: {
                        lg: p.gah,
                        md: p.gah,
                        xs: "1.25rem"
                    },
                    lineHeight: {
                        lg: 1,
                        md: 1,
                        xs: 1.4
                    }
                },
                tA = {
                    fontSize: {
                        lg: p.hE8,
                        md: p.YzP,
                        xs: p.YzP
                    },
                    lineHeight: {
                        lg: p.gkn,
                        md: 1.429,
                        xs: 1.429
                    }
                },
                tB = {
                    fontSize: {
                        lg: p.aQT,
                        md: p.aQT,
                        xs: p.F5N
                    },
                    lineHeight: {
                        lg: 1.111,
                        md: 1.111,
                        xs: 1.667
                    }
                },
                tH = {
                    color: tx,
                    width: "100%",
                    wordBreak: "break-word"
                },
                tz = { ...tH,
                    fontSize: {
                        lg: "2.5rem",
                        md: p.gah,
                        xs: p.jJ_
                    },
                    fontWeight: p.cQB,
                    lineHeight: {
                        lg: 1.25,
                        md: 1.143,
                        xs: 1.167
                    }
                },
                tP = { ...tH,
                    fontSize: {
                        md: p.gah,
                        xs: p.jJ_
                    },
                    fontWeight: p.cQB,
                    lineHeight: {
                        md: 1.143,
                        xs: 1.167
                    }
                },
                tF = { ...tH,
                    fontSize: {
                        lg: p.xwE,
                        md: p.aQT,
                        xs: p.YzP
                    },
                    fontWeight: p.rWq,
                    lineHeight: {
                        lg: p.Qoq,
                        md: 1.333,
                        xs: 1.429
                    }
                },
                tT = { ...tH,
                    fontSize: {
                        md: p.aQT,
                        xs: p.YzP
                    },
                    fontWeight: p.rWq,
                    lineHeight: {
                        md: 1.333,
                        xs: 1.429
                    }
                },
                tQ = {
                    fontSize: {
                        lg: p.F5N,
                        md: p.F5N,
                        xs: p.F5N
                    },
                    lineHeight: {
                        lg: 1.333,
                        md: 1.333,
                        xs: 1.333
                    }
                },
                tW = {
                    fontSize: {
                        lg: p.F5N,
                        md: p.F5N,
                        xs: p.F5N
                    },
                    lineHeight: {
                        lg: 1.333,
                        md: 1.333,
                        xs: 1.333
                    }
                },
                tR = {
                    alignItems: "center",
                    borderRadius: p.xbU,
                    display: "flex",
                    fontSize: {
                        lg: p.hE8,
                        md: p.hE8,
                        xs: p.F5N
                    },
                    fontWeight: p.rWq,
                    gap: p.vdF,
                    justifyContent: "center",
                    letterSpacing: {
                        md: "inherit",
                        xs: "0.2px"
                    },
                    lineHeight: {
                        lg: 1.25,
                        md: 1.25,
                        xs: 1.333
                    },
                    wordBreak: "break-word"
                },
                tD = { ...tR,
                    color: th,
                    padding: {
                        md: "10px 0px",
                        xs: "3px 0px 5px 0px"
                    },
                    textDecorationLine: "underline"
                },
                tZ = { ...tR,
                    backgroundColor: tm,
                    color: tf,
                    padding: {
                        md: "10px ".concat(p.oFH),
                        xs: "3px ".concat(p.oFH, " 5px ").concat(p.oFH)
                    }
                },
                tV = {
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    background: t_,
                    height: "100%",
                    padding: p.vdF,
                    borderBottomLeftRadius: "inherit",
                    borderBottomRightRadius: "inherit"
                },
                tq = {
                    color: tg,
                    width: "100%",
                    wordBreak: "break-word"
                },
                tE = { ...tq,
                    fontSize: {
                        lg: p.jJ_,
                        md: p.aQT,
                        xs: p.YzP
                    },
                    fontWeight: p.cQB,
                    lineHeight: {
                        lg: 1.143,
                        md: p.gkn,
                        xs: p.Qoq
                    }
                },
                tM = { ...tq,
                    fontSize: {
                        xs: p.YzP
                    },
                    fontWeight: p.cQB,
                    lineHeight: {
                        xs: 1.429
                    }
                },
                tN = { ...tq,
                    fontSize: {
                        lg: p.YzP,
                        xs: p.F5N
                    },
                    fontWeight: p.rWq,
                    lineHeight: {
                        lg: p.Qoq,
                        xs: "18px"
                    }
                },
                tL = { ...tq,
                    fontSize: {
                        xs: p.F5N
                    },
                    fontWeight: p.rWq,
                    lineHeight: {
                        xs: p.gkn
                    }
                },
                tJ = {
                    alignItems: "center",
                    borderRadius: p.xbU,
                    display: "flex",
                    fontSize: p.hE8,
                    fontWeight: p.rWq,
                    gap: p.vdF,
                    justifyContent: "center",
                    lineHeight: p.Qoq,
                    wordBreak: "break-word"
                },
                tY = { ...tJ,
                    color: th,
                    padding: "10px 0px",
                    textDecorationLine: "underline"
                },
                tO = { ...tJ,
                    backgroundColor: tm,
                    color: tf,
                    padding: "10px ".concat(p.oFH)
                },
                tU = {
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                    background: t_,
                    borderRadius: W.IQ,
                    display: "flex",
                    flexDirection: "column",
                    padding: p.iPk
                },
                t$ = {
                    color: tg,
                    width: "100%",
                    wordBreak: "break-word"
                },
                tG = { ...t$,
                    fontSize: {
                        md: p.gah,
                        xs: p.hE8
                    },
                    fontWeight: p.cQB,
                    lineHeight: {
                        md: 1.143,
                        xs: p.gkn
                    }
                },
                tX = { ...t$,
                    fontSize: {
                        md: p.aQT,
                        xs: p.YzP
                    },
                    fontWeight: p.rWq,
                    lineHeight: {
                        md: 1.333,
                        xs: 1.429
                    }
                },
                tK = {
                    alignItems: "center",
                    borderRadius: p.xbU,
                    display: "flex",
                    fontSize: p.hE8,
                    fontWeight: p.rWq,
                    gap: p.vdF,
                    justifyContent: "center",
                    lineHeight: p.Qoq,
                    wordBreak: "break-word"
                },
                t0 = { ...tK,
                    color: th,
                    padding: "10px 0px",
                    textDecorationLine: "underline"
                },
                t1 = { ...tK,
                    backgroundColor: tm,
                    color: tf,
                    padding: "10px ".concat(p.oFH)
                },
                t3 = (0, tu.ZP)(u.CostcoBox, {
                    shouldForwardProp: tb
                })(t => {
                    let {
                        select_style: e = "Horizontal"
                    } = t;
                    return {
                        alignItems: "flex-start",
                        display: "inline-flex",
                        flexDirection: "Vertical" === e ? "column" : "row",
                        gap: p.M7t,
                        padding: "".concat(p.vdF, " 0px")
                    }
                }),
                t2 = (0, tu.ZP)(x.Text, {
                    shouldForwardProp: t => "select_style" !== t && "text_content_placement" !== t && "text_color" !== t
                })(t => {
                    var e;
                    let {
                        select_style: n = "Horizontal",
                        text_color: l,
                        theme: o
                    } = t;
                    return {
                        color: null !== (e = null == l ? void 0 : l.hex) && void 0 !== e ? e : tv,
                        fontWeight: p.cQB,
                        fontSize: p.aQT,
                        lineHeight: "Vertical" === n ? .889 : .944,
                        [o.breakpoints.down("md")]: {
                            fontSize: "Vertical" === n ? p.F5N : "0.6875rem",
                            lineHeight: "Vertical" === n ? 1 : 1.091
                        }
                    }
                }),
                t5 = (0, tu.ZP)(u.CostcoBox)({
                    alignItems: "flex-start",
                    display: "flex",
                    gap: p.M7t,
                    justifyContent: "center"
                }),
                t6 = (0, tu.ZP)(u.CostcoBox)({
                    alignItems: "flex-start",
                    display: "flex",
                    gap: "1px"
                }),
                t9 = (0, tu.ZP)(x.Text, {
                    shouldForwardProp: tw
                })(t => {
                    var e;
                    let {
                        text_color: n
                    } = t;
                    return {
                        color: null !== (e = null == n ? void 0 : n.hex) && void 0 !== e ? e : tv,
                        fontWeight: p.cQB,
                        fontSize: p.aQT,
                        lineHeight: .889
                    }
                }),
                t4 = (0, tu.ZP)(u.CostcoBox)({
                    alignItems: "flex-start",
                    display: "flex"
                }),
                t8 = (0, tu.ZP)(x.Text, {
                    shouldForwardProp: tw
                })(t => {
                    var e;
                    let {
                        text_color: n,
                        theme: l
                    } = t;
                    return {
                        color: null !== (e = null == n ? void 0 : n.hex) && void 0 !== e ? e : tv,
                        fontWeight: p.cQB,
                        fontSize: "2.5rem",
                        lineHeight: .8,
                        [l.breakpoints.down("md")]: {
                            fontSize: p.gah,
                            lineHeight: .786
                        }
                    }
                }),
                t7 = (0, tu.ZP)(x.Text, {
                    shouldForwardProp: tw
                })(t => {
                    var e;
                    let {
                        text_color: n
                    } = t;
                    return {
                        color: null !== (e = null == n ? void 0 : n.hex) && void 0 !== e ? e : tv,
                        fontWeight: p.cQB,
                        fontSize: p.aQT,
                        lineHeight: .889
                    }
                }),
                et = (0, tu.ZP)(u.CostcoBox)({
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column"
                }),
                ee = (0, tu.ZP)(x.Text, {
                    shouldForwardProp: tw
                })(t => {
                    var e;
                    let {
                        text_color: n
                    } = t;
                    return {
                        color: null !== (e = null == n ? void 0 : n.hex) && void 0 !== e ? e : tv,
                        fontWeight: p.cQB,
                        textTransform: "uppercase",
                        fontSize: p.aQT,
                        lineHeight: .889
                    }
                }),
                en = (0, tu.ZP)(u.CostcoBox, {
                    shouldForwardProp: tb
                })(t => {
                    let {
                        select_style: e = "Horizontal"
                    } = t;
                    return {
                        alignItems: "flex-start",
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "column",
                        ..."Vertical" === e ? {
                            paddingLeft: "11px"
                        } : {}
                    }
                }),
                el = (0, tu.ZP)(x.Text, {
                    shouldForwardProp: tw
                })(t => {
                    var e;
                    let {
                        text_color: n,
                        theme: l
                    } = t;
                    return {
                        color: null !== (e = null == n ? void 0 : n.hex) && void 0 !== e ? e : tv,
                        fontWeight: p.cQB,
                        fontSize: p.aQT,
                        lineHeight: .944,
                        [l.breakpoints.down("md")]: {
                            fontSize: "0.6875rem",
                            lineHeight: 1.091
                        }
                    }
                }),
                eo = (0, tu.ZP)(u.CostcoBox, {
                    shouldForwardProp: t => "select_style" !== t
                })(t => {
                    let {
                        select_style: e = "Horizontal"
                    } = t;
                    return {
                        alignItems: "flex-start",
                        display: "inline-flex",
                        flexDirection: "Vertical" === e ? "column" : "row",
                        gap: p.M7t
                    }
                }),
                ei = (0, tu.ZP)(u.CostcoBox, {
                    shouldForwardProp: tj
                })({
                    alignItems: "flex-start",
                    display: "flex",
                    padding: "".concat(p.vdF, " 0px")
                }),
                er = (0, tu.ZP)(u.CostcoBox, {
                    shouldForwardProp: tj
                })(t => {
                    let {
                        theme: e
                    } = t;
                    return {
                        alignItems: "flex-start",
                        display: "flex",
                        justifyContent: "center",
                        gap: "2px",
                        [e.breakpoints.down("md")]: {
                            gap: "1px"
                        }
                    }
                }),
                ea = (0, tu.ZP)(u.CostcoBox, {
                    shouldForwardProp: tj
                })({
                    alignItems: "flex-start",
                    display: "flex",
                    gap: p.M7t,
                    padding: "".concat(p.vdF, " 0px")
                }),
                es = (0, tu.ZP)(u.CostcoBox)({
                    alignItems: "center",
                    display: "inline-flex",
                    gap: p.M7t
                }),
                ed = (0, tu.ZP)(x.Text, {
                    shouldForwardProp: tw
                })(t => {
                    var e;
                    let {
                        text_color: n,
                        theme: l
                    } = t;
                    return {
                        color: null !== (e = null == n ? void 0 : n.hex) && void 0 !== e ? e : tv,
                        fontWeight: p.cQB,
                        textAlign: "start",
                        fontSize: "2.5rem",
                        lineHeight: 1.1,
                        [l.breakpoints.down("md")]: {
                            fontSize: p.gah,
                            lineHeight: 1.214
                        }
                    }
                }),
                ec = (0, tu.ZP)(u.CostcoBox, {
                    shouldForwardProp: t => "text_content_placement" !== t && "select_style" !== t
                })(t => {
                    let {
                        select_style: e = "Horizontal"
                    } = t;
                    return {
                        alignItems: "flex-start",
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "column",
                        padding: "6px 0px",
                        ..."Vertical" === e ? {
                            paddingLeft: "11px"
                        } : {},
                        ..."Horizontal" === e ? {
                            padding: "".concat(p.vdF, " 0px")
                        } : {}
                    }
                });
            var eu = n(25383);
            let ex = t => t.split("&#10;").map((t, e, n) => (0, l.jsxs)(r.Fragment, {
                    children: [t, e < n.length - 1 && (0, l.jsx)("br", {})]
                }, e)),
                eg = t => {
                    var e;
                    if (!(null == (e = t.composable_window) ? void 0 : e.length)) return {};
                    let n = Object.fromEntries(t.composable_window.map(t => [t.text_only.development_field_key, t.text_only.body])),
                        l = n["popupVisitExternalLink.titleContent"],
                        o = n["popupVisitExternalLink.bodyContent"];
                    return {
                        warningPrimaryButtonText: n["popupVisitExternalLink.primaryButtonContent"],
                        warningSecondaryButtonText: n["popupVisitExternalLink.secondaryButtonContent"],
                        warningText: o,
                        warningTitle: l
                    }
                },
                ep = t => {
                    var e;
                    return Array.isArray(t) && null !== (e = t.find(t => {
                        let {
                            url: e
                        } = t;
                        return !!e
                    })) && void 0 !== e ? e : null
                },
                eh = (t, e, n) => "".concat(n.toLowerCase(), "-gradient(").concat(t, ", ").concat(e, ")"),
                ef = t => {
                    if (!t || !("background_gradient_style" in t) || !("background_gradient_color" in t) || !("background_color" in t)) return null; {
                        let {
                            background_gradient_style: e,
                            background_gradient_color: n,
                            background_color: l
                        } = t;
                        return (l.hex || "solid" !== e) && "no-background" !== e ? n && ("linear" === e || "radial" === e) ? eh(null == n ? void 0 : n.color1.hex, null == n ? void 0 : n.color2.hex, e) : l.hex : null
                    }
                },
                em = t => {
                    var e, n;
                    if (!t || !("border_color_type" in t) || !("border_color" in t)) return {
                        border: "none",
                        boxShadow: "none"
                    }; {
                        let {
                            border_color: l,
                            border_color_type: o
                        } = t;
                        if ("no-border" === o || !l) return {
                            border: "none",
                            boxShadow: "none"
                        };
                        if ("solid" === o) {
                            let t = (null == (e = null == l ? void 0 : l.solid) ? void 0 : e.hex) || ty;
                            return {
                                border: "1px solid ".concat(t)
                            }
                        }
                        if ("shadow" === o) {
                            let t = (null == (n = null == l ? void 0 : l.shadow) ? void 0 : n.hex) || ty;
                            return {
                                boxShadow: "0px 2px 6px 0px ".concat(t)
                            }
                        }
                    }
                },
                ev = (t, e, n) => {
                    if (!n || !e) return null;
                    let {
                        imageProfileId: l
                    } = t.custom.envConfig;
                    return l["".concat(e).concat(n)]
                },
                e_ = (t, e) => {
                    if (!e) return null;
                    let {
                        imageBasePath: n
                    } = t.custom.envConfig;
                    return n[e]
                },
                ey = t => t ? eu.yr[t] : null,
                eb = (t, e, n) => {
                    if (!Array.isArray(n) || !n.length) return null; {
                        let {
                            imageName: l
                        } = n[0];
                        if ((0, S.jv)(l)) return l;
                        let o = l.replace(/\.jpg$/, ""),
                            {
                                siteType: i
                            } = e.properties[0],
                            r = i.slice(0, 2),
                            a = i.slice(-2),
                            s = e_(t, a),
                            d = ev(t, a, r),
                            {
                                imgServerPath: c
                            } = t.custom.envConfig;
                        return "".concat(s).concat(c, "?profileId=").concat(d, "&imageId=").concat(o, "__1&recipeName=350")
                    }
                },
                ew = (t, e) => {
                    if (!Array.isArray(e) || !e.length) return null; {
                        let {
                            itemNumber: n
                        } = e[0], {
                            siteType: l
                        } = t.properties[0], o = ey(l.slice(0, 2));
                        return "".concat(o, ".product.").concat(n, ".html")
                    }
                },
                ej = (t, e) => {
                    var n;
                    return Array.isArray(t) && null !== (n = t.find(t => {
                        let {
                            add_text_banner: n
                        } = t;
                        return n.text_banner_type === e
                    })) && void 0 !== n ? n : null
                },
                ek = (t, e) => {
                    var n;
                    return Array.isArray(t) && null !== (n = t.find(t => {
                        let {
                            strip: n
                        } = t;
                        return n.strip_type === e
                    })) && void 0 !== n ? n : null
                },
                eI = (t, e) => {
                    var n, l;
                    return Array.isArray(t) && null !== (l = null == (n = t.find(t => {
                        let {
                            overlay_style: n
                        } = t;
                        return n.applicability === e
                    })) ? void 0 : n.overlay_style) && void 0 !== l ? l : null
                },
                eS = t => {
                    let e, n, l, o;
                    for (let i of t) {
                        if ("content" in i && (null == i ? void 0 : i.content.text.length) > 0) switch (i.content.content_type) {
                            case X:
                                e || (e = i);
                                break;
                            case K:
                                n || (n = i);
                                break;
                            case "url":
                            case tt:
                                l || (l = i)
                        } else "prices_and_percentages" in i && (null == i ? void 0 : i.prices_and_percentages.value.length) > 0 && (o = i);
                        if (e && n && l && o) break
                    }
                    return {
                        pricesAndPercentagesContent: o,
                        subtitleContent: n,
                        titleContent: e,
                        urlOrButtonContentDeprecated: l
                    }
                },
                eC = t => {
                    var e;
                    let {
                        enable_custom_background: n,
                        background_group: l
                    } = t, o = null !== (e = ef(l)) && void 0 !== e ? e : "transparent";
                    return { ...n ? {
                            background: o
                        } : {}
                    }
                },
                eA = t => {
                    let {
                        top_and_bottom_strip: e,
                        text_content_placement: n
                    } = t, l = ek(e, C), o = ek(e, A);
                    return n === U ? {
                        borderRadius: l ? "inherit" : W.IQ
                    } : (l || n === G) && !o ? {
                        borderRadius: W.h
                    } : !l && n !== G && o ? {
                        borderRadius: W.IQ
                    } : l || o ? {
                        borderRadius: "inherit"
                    } : {
                        borderRadius: W.pM
                    }
                },
                eB = t => {
                    let {
                        ad_type: e,
                        strip_type: n,
                        background_color: l,
                        text_content_placement: o,
                        font_size: i
                    } = t, r = ef(l), a = "30px !important";
                    "large" === i && (a = {
                        lg: "50px !important",
                        xs: "30px !important"
                    });
                    let s = {},
                        d = {};
                    return "top_strip" === n && (s = { ...P,
                        background: null != r ? r : H,
                        borderRadius: o === G ? "inherit" : W.IQ,
                        flexBasis: a
                    }), "bottom_strip" === n && (d = { ...P,
                        background: null != r ? r : z,
                        borderRadius: o === U ? "inherit" : W.h,
                        ..."full" === e ? {
                            flexBasis: {
                                lg: "40px !important",
                                xs: "25px !important"
                            }
                        } : {
                            flexBasis: "25px !important"
                        }
                    }), { ...s,
                        ...d
                    }
                },
                eH = t => {
                    var e;
                    let {
                        strip_type: n,
                        text_color: l,
                        ad_type: o
                    } = t, i = null !== (e = null == l ? void 0 : l.hex) && void 0 !== e ? e : B;
                    return "top_strip" === n ? { ...T,
                        ..."one_third" === o || "large_ad" === o ? {
                            fontSize: "1.125rem",
                            lineHeight: 1.25
                        } : {},
                        ..."one_fourth" === o || "item_driver" === o ? {
                            fontSize: "1.125rem",
                            lineHeight: 1.25
                        } : {},
                        color: i
                    } : { ...Q,
                        color: i
                    }
                },
                ez = t => {
                    let {
                        text_banner_type: e,
                        banner_background_color: n,
                        font_size: l
                    } = t, o = ef(n);
                    return { ..."top_banner" === e && "small" !== l ? { ...E,
                            background: null != o ? o : "#01F9C6"
                        } : {},
                        ..."bottom_banner" === e && "small" !== l ? { ...M,
                            background: null != o ? o : R
                        } : {},
                        ..."small" === l ? { ...N,
                            background: null != o ? o : "transparent"
                        } : {}
                    }
                },
                eP = t => {
                    var e, n, l;
                    let {
                        text_banner_type: o,
                        text_color: i,
                        font_size: r
                    } = t, a = null !== (e = null == i ? void 0 : i.hex) && void 0 !== e ? e : D, s = null !== (n = null == i ? void 0 : i.hex) && void 0 !== n ? n : Z, d = null !== (l = "small" === r && (null == i ? void 0 : i.hex)) && void 0 !== l ? l : V;
                    return { ..."top_banner" === o && "small" !== r ? { ...J,
                            color: a
                        } : {},
                        ..."bottom_banner" === o && "small" !== r ? { ...Y,
                            color: s
                        } : {},
                        ..."small" === r ? { ...O,
                            color: d
                        } : {}
                    }
                },
                eF = t => {
                    let {
                        text_content_overlay_styles: e,
                        content_type: n,
                        ad_type: l
                    } = t, o = eI(e, tl), i = eI(e, to), r = {
                        alignItems: (null == o ? void 0 : o.overlay_position) === "center" ? "center" : (null == o ? void 0 : o.overlay_position) === "right" ? "flex-end" : "flex-start",
                        height: "100%",
                        justifyContent: (null == o ? void 0 : o.text_alignment) === "top" || (null == o ? void 0 : o.text_alignment) === "middle" || (null == o ? void 0 : o.text_alignment) === "bottom" ? ta[o.text_alignment] : ta.top,
                        left: (null == o ? void 0 : o.overlay_position) === "left" ? "0" : "auto",
                        right: (null == o ? void 0 : o.overlay_position) === "right" ? "0" : "auto",
                        width: "".concat(null == o ? void 0 : o.overlay_fill_, "%")
                    }, a = {
                        alignItems: (null == i ? void 0 : i.overlay_position) === "center" ? "center" : (null == i ? void 0 : i.overlay_position) === "right" ? "flex-end" : "flex-start",
                        bottom: (null == i ? void 0 : i.overlay_position) === "bottom" ? "0" : "auto",
                        height: "".concat(null == i ? void 0 : i.overlay_fill_, "%"),
                        justifyContent: (null == i ? void 0 : i.overlay_position) === "top" || (null == i ? void 0 : i.overlay_position) === "bottom" ? tr[i.overlay_position] : tr.top,
                        top: (null == i ? void 0 : i.overlay_position) === "top" ? "0" : "auto",
                        width: "100%"
                    };
                    return { ...tk,
                        alignItems: i ? {
                            md: r.alignItems,
                            xs: a.alignItems
                        } : r.alignItems,
                        bottom: i ? {
                            md: "auto",
                            xs: a.bottom
                        } : "auto",
                        height: i ? {
                            md: r.height,
                            xs: a.height
                        } : r.height,
                        justifyContent: i ? {
                            md: r.justifyContent,
                            xs: a.justifyContent
                        } : r.justifyContent,
                        left: r.left,
                        right: r.right,
                        top: i ? {
                            md: "auto",
                            xs: a.top
                        } : "auto",
                        width: i ? {
                            md: r.width,
                            xs: a.width
                        } : r.width,
                        ..."one_third" === l || "large_ad" === l ? {
                            padding: {
                                md: "".concat(p.oFH, " ").concat(p.ODt),
                                xs: p.oFH
                            }
                        } : {},
                        ..."url" === n ? {
                            gap: "2px"
                        } : {},
                        ..."button" === n ? {
                            gap: "8px"
                        } : {}
                    }
                },
                eT = t => {
                    let {
                        content_type: e
                    } = t;
                    return { ...tI,
                        ..."url" === e ? {
                            gap: "4px"
                        } : {},
                        ..."button" === e ? {
                            gap: {
                                md: "4px",
                                xs: "0px"
                            }
                        } : {}
                    }
                },
                eQ = t => {
                    let e, n, {
                        ad_type: l,
                        content_type: o,
                        text_color: i,
                        text_content_overlay_styles: r,
                        hasPricesAndPercentagesContent: a
                    } = t;
                    r && (e = eI(r, tl), n = eI(r, to));
                    let s = {
                            textAlign: (null == e ? void 0 : e.overlay_position) === "left" || (null == e ? void 0 : e.overlay_position) === "center" || (null == e ? void 0 : e.overlay_position) === "right" ? ti[e.overlay_position] : ti.left
                        },
                        d = {
                            textAlign: (null == n ? void 0 : n.text_alignment) === "left" || (null == n ? void 0 : n.text_alignment) === "center" ? ts[n.text_alignment] : ts.left
                        },
                        c = {
                            [tt]: tZ,
                            [tn]: tZ,
                            [K]: a ? tT : tF,
                            [X]: a ? tP : tz,
                            url: tD,
                            [te]: tD
                        },
                        u = null == i ? void 0 : i.hex;
                    return c[X].color = null != u ? u : tx, c[K].color = null != u ? u : tx, c.url.color = null != u ? u : th, c[tt].color = null != u ? u : tf, "one_third" === l || "large_ad" === l ? (c[X] = { ...c[X],
                        ...tS
                    }, c[K] = { ...c[K],
                        ...tA
                    }, c.url = { ...c.url,
                        ...tQ
                    }, c[tt] = { ...c[tt],
                        ...tQ
                    }) : ("one_fourth" === l || "one_fourth_mix" === l || "item_driver" === l) && (c[X] = { ...c[X],
                        ...tC
                    }, c[K] = { ...c[K],
                        ...tB
                    }, c.url = { ...c.url,
                        ...tW
                    }, c[tt] = { ...c[tt],
                        ...tW
                    }), {
                        textAlign: n ? {
                            md: s.textAlign,
                            xs: d.textAlign
                        } : s.textAlign,
                        ...c[o]
                    }
                },
                eW = t => {
                    if (Array.isArray(t)) {
                        var e;
                        let n = t.find(t => {
                            let {
                                above_below_the_ad_styles: e
                            } = t;
                            return !!(null == e ? void 0 : e.text_alignment)
                        });
                        return null !== (e = null == n ? void 0 : n.above_below_the_ad_styles) && void 0 !== e ? e : null
                    }
                    return null
                },
                eR = t => {
                    let {
                        content_type: e,
                        text_content_above_below_the_ad_styles: n,
                        background_group: l,
                        enable_custom_background: o
                    } = t, i = eW(n), r = ef(l);
                    return { ...tV,
                        ...(null == i ? void 0 : i.text_alignment) === "center" ? {
                            alignItems: "center",
                            textAlign: "center"
                        } : {
                            alignItems: "flex-start",
                            textAlign: "left"
                        },
                        ...o && {
                            background: r
                        },
                        ...o && em(l),
                        ..."url" === e ? {
                            gap: "2px"
                        } : {},
                        ..."button" === e ? {
                            gap: "8px"
                        } : {}
                    }
                },
                eD = t => {
                    let {
                        content_type: e,
                        text_color: n,
                        hasPricesAndPercentagesContent: l
                    } = t, o = {
                        [tt]: tO,
                        [tn]: tO,
                        [K]: l ? tL : tN,
                        [X]: l ? tM : tE,
                        url: tY,
                        [te]: tY
                    }, i = null == n ? void 0 : n.hex;
                    return o[X].color = null != i ? i : tg, o[K].color = null != i ? i : tg, o.url.color = null != i ? i : th, o[tt].color = null != i ? i : tf, { ...o[e]
                    }
                },
                eZ = t => {
                    let {
                        content_type: e,
                        text_content_above_below_the_ad_styles: n,
                        background_group: l,
                        enable_custom_background: o
                    } = t, i = eW(n), r = ef(l);
                    return { ...tU,
                        ...(null == i ? void 0 : i.text_alignment) === "center" ? {
                            alignItems: "center",
                            textAlign: "center"
                        } : {
                            alignItems: "flex-start",
                            textAlign: "left"
                        },
                        ...o && {
                            background: r
                        },
                        ...o && em(l),
                        ..."url" === e ? {
                            gap: "2px"
                        } : {},
                        ..."button" === e ? {
                            gap: "8px"
                        } : {}
                    }
                },
                eV = t => {
                    let {
                        content_type: e,
                        text_color: n
                    } = t, l = {
                        [tt]: t1,
                        [tn]: t1,
                        [K]: tX,
                        [X]: tG,
                        url: t0,
                        [te]: t0
                    }, o = null == n ? void 0 : n.hex;
                    return l[X].color = null != o ? o : tp, l[K].color = null != o ? o : tp, l.url.color = null != o ? o : th, l[tt].color = null != o ? o : tf, { ...l[e]
                    }
                },
                eq = t => {
                    let e, {
                        ad_type: n,
                        content_type: l,
                        text_content_overlay_styles: o,
                        text_content_above_below_the_ad_styles: i,
                        background_group: r,
                        enable_custom_background: a,
                        text_content_placement: s
                    } = t;
                    switch (s) {
                        case U:
                            e = eR({
                                content_type: l,
                                text_content_above_below_the_ad_styles: i,
                                background_group: r,
                                enable_custom_background: a
                            });
                            break;
                        case G:
                            e = eZ({
                                content_type: l,
                                text_content_above_below_the_ad_styles: i,
                                background_group: r,
                                enable_custom_background: a
                            });
                            break;
                        default:
                            e = eF({
                                ad_type: n,
                                content_type: l,
                                text_content_overlay_styles: o
                            })
                    }
                    return e
                },
                eE = t => {
                    let e, {
                        ad_type: n,
                        content_type: l,
                        text_color: o,
                        text_content_overlay_styles: i,
                        text_content_placement: r,
                        hasPricesAndPercentagesContent: a
                    } = t;
                    switch (r) {
                        case U:
                            e = eD({
                                content_type: l,
                                hasPricesAndPercentagesContent: a,
                                text_color: o
                            });
                            break;
                        case G:
                            e = eV({
                                content_type: l,
                                text_color: o
                            });
                            break;
                        default:
                            e = eQ({
                                ad_type: n,
                                content_type: l,
                                hasPricesAndPercentagesContent: a,
                                text_color: o,
                                text_content_overlay_styles: i
                            })
                    }
                    return e
                },
                eM = t => {
                    let e, n;
                    t && (e = eI(t, tl), n = eI(t, to));
                    let l = {
                            textAlign: (null == e ? void 0 : e.overlay_position) === "right" ? "right" : (null == e ? void 0 : e.overlay_position) === "center" ? "center" : "left",
                            alignSelf: (null == e ? void 0 : e.overlay_position) === "right" ? "flex-end" : (null == e ? void 0 : e.overlay_position) === "center" ? "center" : "flex-start"
                        },
                        o = {
                            textAlign: (null == n ? void 0 : n.overlay_position) === "right" ? "right" : (null == n ? void 0 : n.overlay_position) === "center" ? "center" : "left",
                            alignSelf: (null == n ? void 0 : n.overlay_position) === "right" ? "flex-end" : (null == n ? void 0 : n.overlay_position) === "center" ? "center" : "flex-start"
                        };
                    return {
                        textAlign: n ? {
                            md: l.textAlign,
                            xs: o.textAlign
                        } : l.textAlign,
                        alignSelf: n ? {
                            md: l.alignSelf,
                            xs: o.alignSelf
                        } : l.alignSelf
                    }
                },
                eN = t => t ? "half" === t ? "aduilder_one_half" : "aduilder_".concat(t) : null;
            var eL = n(89198);
            let eJ = {
                    height: "auto",
                    verticalAlign: "bottom",
                    width: "100%"
                },
                eY = { ...eJ,
                    overflow: "hidden"
                },
                eO = { ...eJ,
                    display: "block"
                },
                eU = { ...eJ,
                    display: "none"
                };
            (0, tu.ZP)("img")({});
            let e$ = t => {
                    let {
                        backgroundBannerImageAlignment: e,
                        configurationSetting: n,
                        enable_mobile_image_variation: o,
                        enable_product_linked: i,
                        image: r,
                        image_alt_text: a,
                        locale: s,
                        mobile_image: d,
                        mobile_image_alt_text: c,
                        product_link: u,
                        siteSetting: x,
                        sx: g,
                        use_mobile_image_alt_text: p
                    } = t, h = ep(r), f = n && eb(n, x, u), m = !h && i && f ? f : null == h ? void 0 : h.url, v = { ...g,
                        ...eO
                    }, _ = { ...g,
                        ...eU
                    }, y = [...Array.isArray(g) ? g : [g], ...Array.isArray(eY) ? eY : [eY], e ? {
                        alignItems: e ? ({
                            Bottom: "flex-end",
                            top: "flex-start",
                            middle: "center"
                        })[e] : void 0,
                        display: "flex"
                    } : {}];
                    return (0, l.jsx)(eL.a, {
                        enableMobileImageVariation: o,
                        image: r,
                        imageAltText: a,
                        imageSx: v,
                        imageUrl: m,
                        locale: s,
                        mobileImage: d,
                        mobileImageAltText: c,
                        mobileImageSx: _,
                        sx: y,
                        useMobileImageAltText: p
                    })
                },
                eG = t => {
                    let {
                        strip: e,
                        text_content_placement: n,
                        ad_type: o
                    } = t, {
                        strip_type: i,
                        text: r,
                        text_color: a,
                        background_color: s,
                        font_size: d
                    } = e, c = eB({
                        ad_type: o,
                        background_color: s,
                        font_size: d,
                        strip_type: i,
                        text_content_placement: n
                    }), g = eH({
                        ad_type: o,
                        strip_type: i,
                        text_color: a
                    }), p = r ? ex(r) : null;
                    return (0, l.jsx)(u.CostcoBox, {
                        "data-testid": "strip",
                        sx: c,
                        children: p && (0, l.jsx)(x.Text, {
                            sx: g,
                            children: p
                        })
                    })
                },
                eX = t => {
                    let {
                        add_text_banner: e
                    } = t, {
                        text_banner_type: n,
                        text: o,
                        font_size: i,
                        text_color: r,
                        banner_background_color: a
                    } = e, s = ez({
                        banner_background_color: a,
                        font_size: i,
                        text_banner_type: n
                    }), d = o ? ex(o) : null, c = o ? eP({
                        font_size: i,
                        text_banner_type: n,
                        text_color: r
                    }) : {};
                    return (0, l.jsx)(u.CostcoBox, {
                        "data-testid": "text_banner",
                        sx: s,
                        children: d && (0, l.jsx)(x.Text, {
                            sx: c,
                            children: d
                        })
                    })
                };

            function eK(t) {
                return void 0 !== t.prices_and_percentages
            }
            let e0 = t => {
                    var e;
                    return (null == (e = t.markdown_text) ? void 0 : e.markdown_text) !== void 0
                },
                e1 = t => {
                    var e;
                    return (null == (e = t.content) ? void 0 : e.text) !== void 0
                },
                e3 = t => {
                    let {
                        ad_type: e,
                        hasPricesAndPercentagesContent: n,
                        text_content: o,
                        text_content_placement: i,
                        text_content_overlay_styles: r,
                        titleComponent: a
                    } = t;
                    if (!o) return null;
                    let s = eE({
                        ad_type: e,
                        content_type: o.content.content_type,
                        hasPricesAndPercentagesContent: n,
                        text_color: o.content.text_color,
                        text_content_overlay_styles: null != r ? r : [],
                        text_content_placement: i
                    });
                    return (0, l.jsx)(x.Text, {
                        component: a && "title" === o.content.content_type ? a : "div",
                        sx: s,
                        children: ex(o.content.text)
                    })
                };
            var e2 = n(7439);
            let e5 = t => {
                    switch (t) {
                        case "title_with_xl_v2":
                        case "title_with_xl":
                            return "title_with_xl";
                        case "title_v2":
                        case "title":
                            return "title";
                        case "subheading_v2":
                        case "subheading":
                            return "subheading";
                        case "heading_v2":
                        case "heading":
                            return "heading";
                        case "caption_v2":
                        case "caption":
                            return "caption";
                        default:
                            return "bodycopy"
                    }
                },
                e6 = t => {
                    var e, n;
                    let {
                        ad_type: o,
                        index: i,
                        text_content: r,
                        text_content_placement: a,
                        text_content_overlay_styles: s,
                        titleComponent: d
                    } = t;
                    if (!r) return null;
                    let c = r.markdown_text.select_text_type,
                        u = "title_v2" === c || "title_with_xl_v2" === c;
                    if ("button_v2" === c || "url_v2" === c) {
                        let t = eE({
                                ad_type: o,
                                content_type: c,
                                text_color: r.markdown_text.color.text_color,
                                text_content_overlay_styles: null != s ? s : [],
                                text_content_placement: a
                            }),
                            e = 0 !== i && "button_v2" === c;
                        return (0, l.jsx)(x.Text, {
                            sx: { ...t,
                                marginTop: e ? p.iPk : 0,
                                ..."overlay" === a && eM(s || [])
                            },
                            children: (0, l.jsx)(g.$, {
                                markdown: r.markdown_text.markdown_text
                            })
                        })
                    }
                    return (0, l.jsx)(e2.MarketingTypography, {
                        sx: {
                            color: (null == (n = null == (e = r.markdown_text.color) ? void 0 : e.text_color) ? void 0 : n.hex) || p.s4A,
                            overflowWrap: "anywhere",
                            ..."overlay" === a && eM(s || [])
                        },
                        component: d && u ? d : "div",
                        isMarkdown: !0,
                        variant: e5(c),
                        children: r.markdown_text.markdown_text
                    })
                };
            var e9 = n(63853);
            let e4 = t => t.map(t => {
                    let [e, n] = t.split(".");
                    return {
                        wholeNumber: e,
                        decimalNumber: n
                    }
                }),
                e8 = (t, e, n, o) => (0, l.jsxs)(t6, {
                    "data-testid": "prices_and_percentages_prices",
                    children: [e && (0, l.jsx)(t9, {
                        text_color: n,
                        text_content_placement: o,
                        children: "$"
                    }), (0, l.jsxs)(t4, {
                        children: [t.wholeNumber && (0, l.jsx)(t8, {
                            text_color: n,
                            text_content_placement: o,
                            children: t.wholeNumber
                        }), (t.decimalNumber || !e) && (0, l.jsx)(t7, {
                            text_color: n,
                            text_content_placement: o,
                            children: e ? t.decimalNumber : "%"
                        })]
                    })]
                }),
                e7 = (t, e) => (0, l.jsx)(et, {
                    children: (0, l.jsx)(ee, {
                        text_color: t,
                        text_content_placement: e,
                        uniqueId: "prices_and_percentages_off_text",
                        children: "OFF"
                    })
                }),
                nt = (t, e, n, o) => (0, l.jsx)(t2, {
                    select_style: o,
                    text_color: e,
                    text_content_placement: n,
                    uniqueId: "prices_and_percentages_prepend_text",
                    children: ex(t)
                }),
                ne = (t, e, n) => (0, l.jsx)(el, {
                    text_color: e,
                    text_content_placement: n,
                    uniqueId: "prices_and_percentages_append_text",
                    children: ex(t)
                }),
                nn = (t, e) => (0, l.jsx)(ed, {
                    text_color: t,
                    text_content_placement: e,
                    uniqueId: "prices_and_percentages_hyphen",
                    children: "-"
                }),
                nl = (t, e) => {
                    let {
                        select_style: n,
                        prepend_text: o,
                        add_currency: i,
                        value: r,
                        has_off: a,
                        append_text: s,
                        text_color: d
                    } = t.prices_and_percentages, c = e4(r), u = 1 === r.length ? (0, l.jsxs)(t3, {
                        select_style: n,
                        text_content_placement: e,
                        children: [o && nt(o, d, e, n), (0, l.jsxs)(t5, {
                            children: [e8(c[0], i, d, e), a && e7(d, e), "Vertical" !== n && s && (0, l.jsx)(en, {
                                select_style: n,
                                text_content_placement: e,
                                children: ne(s, d, e)
                            })]
                        }), "Vertical" === n && s && (0, l.jsx)(en, {
                            select_style: n,
                            text_content_placement: e,
                            children: ne(s, d, e)
                        })]
                    }) : null, x = 2 === r.length ? (0, l.jsxs)(eo, {
                        select_style: n,
                        children: [o && (0, l.jsx)(ei, {
                            text_content_placement: e,
                            children: nt(o, d, e, n)
                        }), (0, l.jsxs)(er, {
                            text_content_placement: e,
                            children: [(0, l.jsx)(ea, {
                                text_content_placement: e,
                                children: (0, l.jsx)(es, {
                                    children: e8(c[0], i, d, e)
                                })
                            }), nn(d, e), (0, l.jsx)(ea, {
                                text_content_placement: e,
                                children: (0, l.jsxs)(es, {
                                    children: [e8(c[1], i, d, e), a && e7(d, e)]
                                })
                            })]
                        }), s && (0, l.jsx)(ec, {
                            select_style: n,
                            text_content_placement: e,
                            children: ne(s, d, e)
                        })]
                    }) : null;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [u, x]
                    })
                },
                no = {
                    sx: {
                        padding: "1px"
                    }
                },
                ni = t => {
                    var e, n;
                    let {
                        ad_type: o,
                        text_content: i,
                        text_content_placement: a,
                        text_content_overlay_styles: s,
                        text_content_above_below_the_ad_styles: d,
                        background_group: c,
                        enable_custom_background: x,
                        sx: g = {},
                        linkWrapperProps: h,
                        backgroundBannerButtonAlignment: f,
                        titleComponent: m
                    } = t, {
                        isDesktop: v
                    } = (0, e9.T)(), _ = (0, r.useRef)(), [y, b] = (0, r.useState)(0);
                    if ((0, r.useEffect)(() => {
                            let t = (0, S.wz)(e => {
                                e.forEach(e => {
                                    e.isIntersecting && (b(1), t.unobserve(e.target))
                                })
                            }, {
                                threshold: .25
                            });
                            return a === $ && _.current && t.observe(_.current), () => t.disconnect()
                        }, [a]), !(null == i ? void 0 : i.length)) return null;
                    let {
                        pricesAndPercentagesContent: w,
                        urlOrButtonContentDeprecated: j
                    } = eS(i), k = null == (e = null == j ? void 0 : j.content) ? void 0 : e.content_type, C = eq({
                        ad_type: o,
                        content_type: k,
                        text_content_overlay_styles: null != s ? s : [],
                        text_content_above_below_the_ad_styles: null != d ? d : [],
                        background_group: c,
                        enable_custom_background: x,
                        text_content_placement: a
                    }), A = eT({
                        content_type: k
                    }), B = null !== (n = ef(c)) && void 0 !== n ? n : "transparent", H = { ...C,
                        ...x ? {
                            background: B
                        } : {},
                        ...a === $ ? {
                            opacity: y
                        } : {},
                        ...g,
                        ...v && "horizontal" === f ? {
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between"
                        } : {}
                    }, z = i.filter(t => {
                        var e, n, l;
                        return !!eK(t) || (e1(t) ? (null == (e = t.content) ? void 0 : e.content_type) && td.includes(null == (n = t.content) ? void 0 : n.content_type) : !!e0(t) && (null == (l = t.markdown_text) ? void 0 : l.select_text_type) && tc.includes(t.markdown_text.select_text_type))
                    }), P = z.length > 0 && (0, l.jsx)(u.CostcoBox, {
                        sx: A,
                        children: z.map((t, e) => {
                            var n;
                            return e1(t) ? (0, l.jsx)(e3, {
                                hasPricesAndPercentagesContent: !!w,
                                text_content_overlay_styles: s,
                                text_content_placement: a,
                                ad_type: o,
                                text_content: t,
                                titleComponent: m
                            }, t.content._metadata.uid) : e0(t) ? (0, l.jsx)(e6, {
                                index: e,
                                text_content_overlay_styles: s,
                                text_content_placement: a,
                                ad_type: o,
                                text_content: t,
                                titleComponent: m
                            }, null == (n = t.markdown_text._metadata) ? void 0 : n.uid) : eK(t) ? nl(t, a) : null
                        })
                    }), F = j && (0, l.jsx)(u.CostcoBox, {
                        sx: {
                            alignItems: "flex-start",
                            display: "flex",
                            marginTop: v ? p.iPk : 0
                        },
                        children: (0, l.jsx)(h ? I : t => {
                            let {
                                children: e
                            } = t;
                            return (0, l.jsx)(l.Fragment, {
                                children: e
                            })
                        }, { ...h || no,
                            children: (0, l.jsx)(e3, {
                                hasPricesAndPercentagesContent: !!w,
                                text_content_overlay_styles: s,
                                ad_type: o,
                                text_content: j,
                                text_content_placement: a
                            })
                        })
                    });
                    return (0, l.jsx)(u.CostcoBox, {
                        "data-testid": "".concat(a, "_").concat("text_content"),
                        ref: a === $ ? _ : null,
                        sx: H,
                        children: a === $ ? (0, l.jsxs)(u.CostcoBox, {
                            sx: { ... function(t) {
                                    var e, n, l;
                                    let o, i;
                                    t && (o = eI(t, tl), i = eI(t, to));
                                    let r = {
                                            height: (null == o ? void 0 : o.overlay_fill_type) === "vertical" ? "".concat(null == o ? void 0 : o.overlay_fill_, "%") : "auto",
                                            width: (null == o ? void 0 : o.overlay_fill_type) === "horizontal" ? "".concat(null == o ? void 0 : o.overlay_fill_, "%") : "auto",
                                            justifyItems: (null == o ? void 0 : o.overlay_position) === "center" ? "center" : (null == o ? void 0 : o.overlay_position) === "right" ? "flex-end" : "flex-start",
                                            alignItems: (null == o ? void 0 : o.overlay_position) === "center" ? "center" : (null == o ? void 0 : o.overlay_position) === "right" ? "flex-end" : "flex-start",
                                            backgroundColor: ef(null == o ? void 0 : o.overlay_background_color)
                                        },
                                        a = {
                                            height: (null == i ? void 0 : i.overlay_fill_type) === "vertical" ? "".concat(null == i ? void 0 : i.overlay_fill_, "%") : "auto",
                                            width: (null == i ? void 0 : i.overlay_fill_type) === "horizontal" ? "".concat(null == i ? void 0 : i.overlay_fill_, "%") : "auto",
                                            justifyItems: (null == i ? void 0 : i.overlay_position) === "center" ? "center" : (null == i ? void 0 : i.overlay_position) === "right" ? "flex-end" : "flex-start",
                                            alignItems: (null == i ? void 0 : i.overlay_position) === "center" ? "center" : (null == i ? void 0 : i.overlay_position) === "right" ? "flex-end" : "flex-start",
                                            backgroundColor: ef(null == i ? void 0 : i.overlay_background_color)
                                        },
                                        s = r.backgroundColor && "transparent" !== r.backgroundColor || a.backgroundColor && "transparent" !== a.backgroundColor;
                                    return {
                                        width: i ? {
                                            md: r.width,
                                            xs: a.width
                                        } : r.width,
                                        height: i ? {
                                            md: r.height,
                                            xs: a.height
                                        } : r.height,
                                        justifyItems: i ? {
                                            md: r.justifyItems,
                                            xs: a.justifyItems
                                        } : r.justifyItems,
                                        alignItems: i ? {
                                            md: r.alignItems,
                                            xs: a.alignItems
                                        } : r.alignItems,
                                        background: i ? {
                                            md: null !== (e = r.backgroundColor) && void 0 !== e ? e : "transparent",
                                            xs: null !== (n = a.backgroundColor) && void 0 !== n ? n : "transparent"
                                        } : null !== (l = r.backgroundColor) && void 0 !== l ? l : "transparent",
                                        ...s && {
                                            padding: {
                                                lg: "".concat(p.mk$),
                                                md: "".concat(p.dXl),
                                                xs: "".concat(p.x0I)
                                            },
                                            borderRadius: "4px"
                                        }
                                    }
                                }(null != s ? s : [])
                            },
                            children: [P, F]
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [P, F]
                        })
                    })
                },
                nr = t => {
                    let e, n, o, {
                            backgroundBannerButtonAlignment: i,
                            backgroundBannerImageAlignment: r,
                            children: a,
                            configurationSetting: s,
                            data: d,
                            linkWrapperProps: c,
                            locale: x,
                            siteSetting: g,
                            titleComponent: h
                        } = t,
                        {
                            ad_type: f,
                            background_group: m,
                            costco_url: v,
                            enable_custom_background: _,
                            enable_mobile_image_variation: y,
                            enable_product_linked: b,
                            enable_text_content: w,
                            image_alt_text: j,
                            image: k,
                            mobile_image_alt_text: I,
                            mobile_image: S,
                            product_link: B,
                            text_content_overlay_styles: H,
                            text_content_above_below_the_ad_styles: z,
                            text_content_placement: P,
                            text_content: F,
                            top_and_bottom_strip: T,
                            top_and_bottom_text_banner: Q,
                            use_mobile_image_alt_text: R
                        } = d,
                        D = Array.isArray(k) && k.length,
                        Z = b && Array.isArray(B) && B.length,
                        V = D || Z,
                        q = w && (null == F ? void 0 : F.length),
                        E = q && P === $ && (null == H ? void 0 : H.length),
                        M = q && P === U,
                        N = q && P === G;
                    T && (n = ek(T, C), o = ek(T, A)), Q && (e = ej(Q, "bottom_banner"));
                    let L = eC({
                            background_group: m,
                            enable_custom_background: _
                        }),
                        J = eA({
                            text_content_placement: P,
                            top_and_bottom_strip: T
                        }),
                        Y = P === U ? W.g : W.jA,
                        O = N ? (0, l.jsx)(ni, {
                            backgroundBannerButtonAlignment: i,
                            background_group: m,
                            enable_custom_background: _,
                            text_content: F,
                            text_content_placement: P,
                            text_content_above_below_the_ad_styles: z,
                            linkWrapperProps: c,
                            titleComponent: h
                        }) : null,
                        X = n ? (0, l.jsx)(eG, {
                            ad_type: f,
                            strip: n.strip,
                            text_content_placement: P
                        }) : null,
                        K = { ...J,
                            ...L,
                            display: "grid",
                            gridTemplateColumns: "1fr",
                            minHeight: "max-content",
                            width: "100%"
                        },
                        tt = V ? (0, l.jsx)(e$, {
                            backgroundBannerImageAlignment: r,
                            enable_mobile_image_variation: y,
                            sx: { ...J,
                                gridArea: "1/1"
                            },
                            use_mobile_image_alt_text: R,
                            configurationSetting: s,
                            enable_product_linked: b,
                            image: k,
                            image_alt_text: j,
                            locale: x,
                            mobile_image: S,
                            mobile_image_alt_text: I,
                            product_link: B,
                            siteSetting: g
                        }) : null,
                        te = E || a ? (0, l.jsxs)(u.CostcoBox, {
                            sx: {
                                gridArea: "1/1",
                                minWidth: "0px",
                                position: "relative",
                                minHeight: !V && E ? {
                                    lg: "249px",
                                    md: "736px",
                                    xs: "343px"
                                } : void 0
                            },
                            children: [E ? (0, l.jsx)(ni, {
                                backgroundBannerButtonAlignment: i,
                                sx: {
                                    flex: 0,
                                    height: a ? null : "100%",
                                    position: null,
                                    width: "auto"
                                },
                                text_content_overlay_styles: H,
                                text_content_placement: P,
                                ad_type: f,
                                linkWrapperProps: c,
                                text_content: F,
                                titleComponent: h
                            }) : null, a ? (0, l.jsx)(u.CostcoBox, {
                                sx: {
                                    alignItems: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    padding: {
                                        lg: "".concat(p.oFH, " ").concat(p.SRJ),
                                        md: "".concat(p.oFH, " ").concat(p.ODt),
                                        xs: p.oFH
                                    },
                                    position: "relative",
                                    width: "100%"
                                },
                                children: a
                            }) : null]
                        }) : null,
                        tn = o ? (0, l.jsx)(eG, {
                            ad_type: f,
                            strip: o.strip,
                            text_content_placement: P
                        }) : null,
                        tl = M ? (0, l.jsx)(ni, {
                            backgroundBannerButtonAlignment: i,
                            text_content: F,
                            text_content_placement: P,
                            text_content_above_below_the_ad_styles: z,
                            linkWrapperProps: c,
                            titleComponent: h,
                            background_group: m,
                            enable_custom_background: _
                        }) : null,
                        to = e ? (0, l.jsx)(eX, {
                            add_text_banner: e.add_text_banner
                        }) : null;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsxs)(u.CostcoBox, {
                            sx: Y,
                            children: [O, (0, l.jsxs)(u.CostcoBox, {
                                sx: W.r1,
                                children: [X, (0, l.jsxs)(u.CostcoBox, {
                                    id: "image-container",
                                    sx: K,
                                    children: [tt, te]
                                }), tn]
                            }), tl]
                        }), to]
                    })
                };
            var na = n(77001);
            let ns = t => {
                let e, {
                        data: n,
                        externalLinkModule: x,
                        configurationSetting: g,
                        isLoading: p = !1,
                        disableThirdPartyTracking: h,
                        siteSetting: m,
                        sx: _ = {},
                        children: y,
                        shouldLinkWrapButtonOnly: b,
                        backgroundBannerImageAlignment: w,
                        backgroundBannerButtonAlignment: j,
                        isInsideCampaignSlider: S,
                        titleComponent: C,
                        locale: A,
                        analyticsTitlePrefix: B,
                        enableOnViewTracking: H
                    } = t,
                    z = (0, o.useAdBuilderConfig)(),
                    P = (null == z ? void 0 : z.siteSettings) || m,
                    F = (null == z ? void 0 : z.externalLinkModule) || x,
                    T = (null == z ? void 0 : z.configurationSetting) || g,
                    Q = null == n ? void 0 : n.title,
                    R = null == n ? void 0 : n.image_alt_text,
                    D = Q || R;
                B && (D = "".concat(B, " | ").concat(D));
                let {
                    trackEvent: Z
                } = (0, a.rS)(), V = (0, r.useCallback)(() => {
                    Z({
                        contentImp: D,
                        trackType: c.YU
                    })
                }, [Z, D]), q = (0, i.y)({
                    onView: V,
                    enabled: !!H
                });
                if (p) return (0, l.jsx)(na.y, {});
                let {
                    ad_type: E,
                    caption: M,
                    costco_url: N,
                    disclaimer: L,
                    disclaimer_markdown: J,
                    enable_caption: Y,
                    enable_disclaimer: O,
                    enable_product_linked: U,
                    enable_sponsored: $,
                    image_alt_text: G,
                    product_link: X,
                    top_and_bottom_text_banner: K
                } = n, {
                    url: tt,
                    external_site: te
                } = N || {}, tn = N && "url" in N && tt.length, tl = U && Array.isArray(X) && X.length, to = O && (L || J) || $, ti = Y && M, tr = tl ? ew(P, X) : null, ta = tn ? tt : null != tr ? tr : "", ts = !!tn && !!(N && "external_site" in N) && te, td = ts && F ? eg(F) : {}, tc = {
                    adItem: {
                        isExternal: te,
                        title: D,
                        url: ta
                    }
                };
                K && (e = ej(K, "top_banner"));
                let tu = {};
                S && (tu = "string" == typeof E && E && ({
                    one_fourth: {
                        flex: {
                            md: "1 1 calc(25% - 16px)",
                            sm: "1 1 calc(50% - 16px)",
                            xs: "1 1 calc(50% - 16px)"
                        }
                    },
                    one_fourth_mix: {
                        flex: {
                            md: "1 1 calc(25% - 16px)",
                            sm: "1 1 calc(50% - 16px)",
                            xs: "1 1 calc(50% - 16px)"
                        }
                    },
                    half: {
                        flex: {
                            md: "1 1 calc(50% - 16px)",
                            sm: "1 1 calc(100% - 16px)"
                        }
                    },
                    one_third: {
                        flex: {
                            md: "1 1 calc(33% - 16px)",
                            sm: "1 1 calc(100% - 16px)"
                        }
                    },
                    full: {
                        flex: "1 1 calc(100% - 16px)"
                    }
                })[E] || {});
                let tx = $ ? {
                        "aria-describedby": v
                    } : {},
                    tg = { ...W.c3,
                        ...tu,
                        ..._
                    };
                if ("text_banner" === E && e) return (0, l.jsx)(u.CostcoBox, {
                    ref: q,
                    sx: { ...tg,
                        gap: "0px"
                    },
                    "data-layout": eN(E),
                    "data-private": h,
                    "data-testid": eu.lP,
                    children: (0, l.jsx)(d.Analytics, {
                        analyticData: tc,
                        children: (0, l.jsx)(s.Link, {
                            dataPrivate: h,
                            hasExternalLinkWarning: ts,
                            href: ta,
                            underline: "none",
                            ...td,
                            ...tx,
                            sx: W.t5,
                            children: (0, l.jsx)(eX, {
                                add_text_banner: e.add_text_banner
                            })
                        })
                    })
                });
                let tp = {
                    adUrl: ta,
                    ariaDescribedBy: tx,
                    disableThirdPartyTracking: h,
                    external_site: te,
                    externalLinkProps: td,
                    hasExternalLinkWarning: ts,
                    image_alt_text: G,
                    title: D
                };
                return (0, l.jsx)(u.CostcoBox, {
                    ref: q,
                    sx: tg,
                    "data-layout": eN(E),
                    "data-private": h,
                    "data-testid": eu.lP,
                    children: (0, l.jsxs)(u.CostcoBox, {
                        sx: W.N0,
                        children: [!b && ta ? (0, l.jsxs)(I, {
                            sx: W.t5,
                            ...tp,
                            children: [e && (0, l.jsx)(eX, {
                                add_text_banner: e.add_text_banner
                            }), (0, l.jsx)(nr, {
                                backgroundBannerButtonAlignment: j,
                                backgroundBannerImageAlignment: w,
                                configurationSetting: T,
                                data: n,
                                locale: A,
                                siteSetting: P,
                                children: y
                            })]
                        }) : (0, l.jsxs)(d.Analytics, {
                            analyticData: tc,
                            children: [e && (0, l.jsx)(eX, {
                                add_text_banner: e.add_text_banner
                            }), (0, l.jsx)(nr, {
                                backgroundBannerButtonAlignment: j,
                                backgroundBannerImageAlignment: w,
                                linkWrapperProps: ta ? tp : void 0,
                                configurationSetting: T,
                                data: n,
                                locale: A,
                                siteSetting: P,
                                titleComponent: C,
                                children: y
                            })]
                        }), to && (0, l.jsx)(k, {
                            disclaimer: L,
                            disclaimer_markdown: J,
                            enable_disclaimer: O,
                            enable_sponsored: $
                        }), ti && (0, l.jsx)(f, {
                            caption: M
                        })]
                    })
                })
            };
            ns.displayName = eu.lP
        },
        92091: function(t, e, n) {
            n.d(e, {
                IQ: function() {
                    return o
                },
                JM: function() {
                    return p
                },
                N0: function() {
                    return d
                },
                c3: function() {
                    return s
                },
                g: function() {
                    return x
                },
                h: function() {
                    return i
                },
                jA: function() {
                    return u
                },
                pM: function() {
                    return r
                },
                r1: function() {
                    return g
                },
                t5: function() {
                    return c
                }
            });
            let l = n(7302).W3Q,
                o = "10px 10px 0 0",
                i = "0 0 10px 10px",
                r = "10px",
                a = {
                    alignItems: "center",
                    alignSelf: "stretch",
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    gap: "16px"
                },
                s = a,
                d = {
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                    display: "flex",
                    flex: "1 0 0",
                    flexDirection: "column",
                    gap: "4px"
                },
                c = a,
                u = {
                    "& > div": {
                        flex: 1,
                        height: "100%",
                        justifyContent: "center"
                    },
                    alignItems: "center",
                    alignSelf: "stretch",
                    borderRadius: r,
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    textAlign: "left"
                },
                x = {
                    alignItems: "center",
                    alignSelf: "stretch",
                    background: l,
                    borderRadius: r,
                    boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.3)",
                    display: "flex",
                    flex: "1 0 0",
                    flexDirection: "column",
                    textAlign: "left"
                },
                g = {
                    "& > div": {
                        flex: 1,
                        justifyContent: "center"
                    },
                    alignItems: "flex-start",
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "column"
                },
                p = {
                    borderRadius: r,
                    height: {
                        lg: "249px",
                        md: "736px",
                        xs: "343px"
                    },
                    width: {
                        lg: "976px",
                        md: "736px",
                        xs: "343px"
                    }
                }
        },
        77001: function(t, e, n) {
            n.d(e, {
                y: function() {
                    return a
                }
            });
            var l = n(57437),
                o = n(21851),
                i = n(25383),
                r = n(92091);
            let a = t => {
                let {
                    sx: e = {}
                } = t;
                return (0, l.jsx)(o.Skeleton, {
                    "data-testid": i.Wq,
                    sx: { ...r.JM,
                        ...e
                    }
                })
            }
        },
        68630: function(t, e, n) {
            n.d(e, {
                OT: function() {
                    return o
                },
                TY: function() {
                    return r
                },
                Tp: function() {
                    return a
                },
                pp: function() {
                    return i
                },
                r1: function() {
                    return s
                },
                w9: function() {
                    return d
                },
                zw: function() {
                    return l
                }
            });
            let l = ["application/vnd.adobe.photoshop"],
                o = "ImageVideo_Image_Mobile",
                i = "ImageVideo_Image",
                r = "1920 / 1080",
                a = "ImageVideo_Video_Mobile",
                s = "ImageVideo_Video",
                d = "image"
        },
        89198: function(t, e, n) {
            n.d(e, {
                a: function() {
                    return g
                }
            });
            var l = n(57437),
                o = n(72547),
                i = n(39900),
                r = n(40538),
                a = n(29591),
                s = n(95666),
                d = n(55432),
                c = n(3795),
                u = n(63853),
                x = n(68630);
            let g = t => {
                var e, n, g, p;
                let {
                    enableMobileImageVariation: h,
                    image: f,
                    imageAltText: m,
                    imageSx: v,
                    imageUrl: _,
                    locale: y = "en-us",
                    mobileImage: b,
                    mobileImageAltText: w,
                    mobileImageSx: j,
                    sx: k,
                    useMobileImageAltText: I
                } = t, {
                    isMobile: S
                } = (0, u.T)(), {
                    imageDomainSwapConfig: C
                } = (0, o.p)(), {
                    firstVideo: A,
                    firstImage: B,
                    firstVTT: H
                } = (0, d.R6)(f), {
                    firstVideo: z,
                    firstImage: P,
                    firstVTT: F
                } = h ? (0, d.R6)(b) : {
                    firstVideo: null,
                    firstImage: null,
                    firstVTT: null
                }, T = !!A, Q = !!z, W = !!B && !!P, R = null != m ? m : "", D = I ? null != w ? w : "" : R;
                return (0, l.jsxs)(c.CostcoBox, {
                    sx: k,
                    "data-testid": x.w9,
                    children: [T && (!S || S && !Q) && (0, l.jsx)(c.CostcoBox, {
                        sx: {
                            aspectRatio: (0, d._o)(A),
                            width: "100%"
                        },
                        "data-testid": x.r1,
                        onClick: t => {
                            t.preventDefault()
                        },
                        children: (0, l.jsx)(a.Y, {
                            options: (0, d.Hb)({
                                locale: y,
                                video: A,
                                vtt: H,
                                thumbnailImage: B
                            }),
                            language: (0, r.G3)(y),
                            playButtonAriaLabel: R,
                            showDurationOverlay: !0,
                            width: "100%"
                        })
                    }), T && S && Q && (0, l.jsx)(c.CostcoBox, {
                        sx: {
                            aspectRatio: (0, d._o)(z),
                            width: "100%"
                        },
                        "data-testid": x.Tp,
                        children: (0, l.jsx)(a.Y, {
                            options: (0, d.Hb)({
                                locale: y,
                                video: z,
                                vtt: F,
                                thumbnailImage: P
                            }),
                            language: (0, r.G3)(y),
                            playButtonAriaLabel: D,
                            showDurationOverlay: !0,
                            width: "100%"
                        })
                    }), !T && (0, l.jsx)(s.Image, {
                        sx: [{
                            display: W ? {
                                md: "block",
                                xs: "none"
                            } : "block",
                            objectFit: "contain"
                        }, ...Array.isArray(v) ? v : [v]],
                        alt: R,
                        "data-testid": x.pp,
                        height: null == (e = null == B ? void 0 : B.dimensions) ? void 0 : e.height,
                        loading: "eager",
                        src: (0, i.w)(_, C),
                        width: null == (n = null == B ? void 0 : B.dimensions) ? void 0 : n.width
                    }), !T && W ? (0, l.jsx)(s.Image, {
                        src: (0, i.w)(null == P ? void 0 : P.url, C),
                        sx: [{
                            display: {
                                md: "none",
                                xs: "block"
                            },
                            objectFit: "contain"
                        }, ...Array.isArray(j) ? j : [j]],
                        alt: D,
                        "data-testid": x.OT,
                        height: null == (g = null == P ? void 0 : P.dimensions) ? void 0 : g.height,
                        loading: "eager",
                        width: null == (p = null == P ? void 0 : P.dimensions) ? void 0 : p.width
                    }) : null]
                })
            }
        },
        55432: function(t, e, n) {
            n.d(e, {
                Hb: function() {
                    return u
                },
                JH: function() {
                    return s
                },
                R6: function() {
                    return x
                },
                _o: function() {
                    return i
                }
            });
            var l = n(40538),
                o = n(68630);
            let i = t => {
                    var e, n, l, i;
                    return (null == (e = null == t ? void 0 : t.dimensions) ? void 0 : e.width) && (null == (n = null == t ? void 0 : t.dimensions) ? void 0 : n.height) ? "".concat(null == (l = null == t ? void 0 : t.dimensions) ? void 0 : l.width, " / ").concat(null == (i = null == t ? void 0 : t.dimensions) ? void 0 : i.height) : o.TY
                },
                r = t => {
                    var e, n;
                    return (null == (e = null == t ? void 0 : t.dimensions) ? void 0 : e.width) && (null == (n = null == t ? void 0 : t.dimensions) ? void 0 : n.height) ? "".concat(t.dimensions.width, ":").concat(t.dimensions.height) : null
                },
                a = t => !!((null == t ? void 0 : t.mimetype) && (t.mimetype.startsWith("image/") || o.zw.includes(t.mimetype))),
                s = t => !!((null == t ? void 0 : t.mimetype) && t.mimetype.startsWith("video/")),
                d = t => !!((null == t ? void 0 : t.mimetype) && "text/vtt" === t.mimetype),
                c = (t, e) => {
                    if (!t || !t.url) return [];
                    let n = (0, l.G3)(e),
                        o = (0, l.vY)(e);
                    return [{
                        kind: "captions",
                        src: null == t ? void 0 : t.url,
                        srcLang: n,
                        label: o,
                        default: !1
                    }]
                },
                u = t => {
                    var e;
                    let {
                        locale: n,
                        video: l,
                        vtt: o,
                        thumbnailImage: i
                    } = t;
                    if (!l) return null;
                    let a = c(o, n);
                    return {
                        aspectRatio: r(l),
                        autoplay: !1,
                        controls: !0,
                        fluid: !0,
                        muted: !0,
                        playsinline: !0,
                        responsive: !0,
                        poster: null !== (e = null == i ? void 0 : i.url) && void 0 !== e ? e : "",
                        sources: {
                            src: l.url,
                            type: "video/mp4"
                        },
                        tracks: a
                    }
                },
                x = t => {
                    let e = null,
                        n = null,
                        l = null;
                    if (Array.isArray(t)) {
                        for (let o of t)
                            if (!e && s(o) && (e = o), !n && a(o) && (n = o), !l && d(o) && (l = o), e && n && l) break
                    }
                    return {
                        firstVideo: e,
                        firstImage: n,
                        firstVTT: l
                    }
                }
        },
        3795: function(t, e, n) {
            n.r(e), n.d(e, {
                CostcoBox: function() {
                    return l
                }
            });
            let l = n(95656).default
        },
        63853: function(t, e, n) {
            n.d(e, {
                T: function() {
                    return i
                }
            });
            var l = n(60062),
                o = n(31691);
            let i = () => {
                let t = (0, o.Z)();
                return {
                    isBiggerDesktop: (0, l.Z)(t.breakpoints.up("xl")),
                    isDesktop: (0, l.Z)(t.breakpoints.up("lg")),
                    isMobile: (0, l.Z)(t.breakpoints.between("xs", "md")),
                    isSmMobile: (0, l.Z)(t.breakpoints.down("sm")),
                    isTablet: (0, l.Z)(t.breakpoints.between("md", "lg"))
                }
            }
        },
        89999: function(t, e, n) {
            n.r(e), n.d(e, {
                AdBuilderConfigProviderClient: function() {
                    return r
                },
                useAdBuilderConfig: function() {
                    return a
                }
            });
            var l = n(57437),
                o = n(2265);
            let i = (0, o.createContext)(null),
                r = t => {
                    let {
                        children: e,
                        externalLinkModule: n,
                        configurationSetting: o,
                        siteSettings: r,
                        brandFolderDomainSwapConfig: a
                    } = t;
                    return (0, l.jsx)(i.Provider, {
                        value: {
                            externalLinkModule: n,
                            configurationSetting: o,
                            siteSettings: r,
                            brandFolderDomainSwapConfig: a
                        },
                        children: e
                    })
                },
                a = () => (0, o.useContext)(i) || {}
        },
        29621: function(t, e, n) {
            n.d(e, {
                y: function() {
                    return i
                }
            });
            var l = n(40538),
                o = n(2265);
            let i = t => {
                let {
                    onClick: e,
                    onLoad: n,
                    onView: i,
                    minimumViewTime: r = 1e3,
                    viewThreshold: a = .5,
                    enabled: s = !0
                } = t, d = (0, o.useRef)(), c = (0, o.useRef)(!1);
                return (0, o.useEffect)(() => {
                    let t;
                    if (s) {
                        let o = (0, l.wz)(e => {
                                let n = e[0];
                                n.isIntersecting && !c.current ? t = setTimeout(() => {
                                    i && i(), c.current = !0, o.unobserve(n.target)
                                }, r) : clearTimeout(t)
                            }, {
                                threshold: a
                            }),
                            s = null == d ? void 0 : d.current;
                        return s && (null == n || n(), o.observe(s)), e && (null == s || s.addEventListener("click", e)), () => {
                            o.disconnect(), clearTimeout(t), e && (null == s || s.removeEventListener("click", e))
                        }
                    }
                }, [d, n, i]), d
            }
        }
    }
]);