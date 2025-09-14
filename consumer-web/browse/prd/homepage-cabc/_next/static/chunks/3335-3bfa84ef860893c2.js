"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3335], {
        60673: function(e, t, o) {
            o.d(t, {
                E: function() {
                    return a
                },
                k: function() {
                    return i
                }
            });
            var r = o(57437),
                l = o(19359),
                n = o(77643);
            let a = e => {
                    let {
                        icon: t,
                        originalSvg: o,
                        activeIconColor: n,
                        defaultIconColor: a
                    } = e;
                    return t && o ? {
                        activeColor: (0, r.jsx)(l.AccordionItemIcon, {
                            color: n,
                            icon: t,
                            originalSvg: o
                        }),
                        defaultColor: (0, r.jsx)(l.AccordionItemIcon, {
                            color: a,
                            icon: t,
                            originalSvg: o
                        })
                    } : {
                        activeColor: null,
                        defaultColor: null
                    }
                },
                i = async e => {
                    let {
                        config: t,
                        content: o
                    } = e, r = t.active_colors.text_and_background_color.text_color.hex, l = t.default_colors.text_and_background_color.text_color.hex;
                    return o.accordion.reduce(async (e, t) => {
                        let o = await e,
                            a = t.accordion_icon[0];
                        if (!a) return o[t._metadata.uid] = {
                            activeIconColor: r,
                            defaultIconColor: l,
                            icon: void 0,
                            originalSvg: void 0
                        }, o;
                        let i = (0, n.Gw)(a.url, ["auto", "format"]),
                            u = await (0, n.Di)(i);
                        return o[t._metadata.uid] = {
                            activeIconColor: r,
                            defaultIconColor: l,
                            icon: a,
                            originalSvg: u
                        }, o
                    }, Promise.resolve({}))
                }
        },
        19359: function(e, t, o) {
            o.d(t, {
                AccordionItemIcon: function() {
                    return c
                }
            });
            var r = o(57437),
                l = o(47835),
                n = o(2265),
                a = o(95656),
                i = o(77643),
                u = o(24870);
            let d = "".concat(u.l, "-AccordionItemIcon"),
                c = e => {
                    let {
                        color: t,
                        icon: o,
                        originalSvg: u
                    } = e, [c, s] = (0, n.useState)();
                    if ((0, n.useEffect)(() => {
                            let e = (0, i.p0)(u, t);
                            s(l.sanitize(e))
                        }, [t, u]), !o || !u) return null;
                    let g = (0, i.h8)(o, 32, 32);
                    return (0, r.jsx)(a.default, {
                        sx: {
                            alignItems: "center",
                            display: "flex",
                            height: g.height,
                            justifyContent: "center",
                            width: g.width
                        },
                        dangerouslySetInnerHTML: {
                            __html: null != c ? c : ""
                        },
                        "data-testid": d
                    })
                }
        },
        73335: function(e, t, o) {
            o.d(t, {
                BulletDetailAccordionUI: function() {
                    return eT
                }
            });
            var r = o(57437),
                l = o(2265),
                n = o(24870),
                a = o(74748);
            let i = e => {
                let {
                    bulletDetailCardEntries: t,
                    composableWindow: o
                } = e;
                return t.reduce((e, t) => (e[t.uid] = (0, r.jsx)(a.E, {
                    composableWindow: o,
                    entry: t
                }, t.uid), e), {})
            };
            var u = o(90437),
                d = o(89766),
                c = o(95656),
                s = o(63853),
                g = o(19693),
                f = o(68139),
                h = o(16210),
                p = o(92144),
                x = o(7302);
            let v = (0, h.ZP)(c.default, {
                    shouldForwardProp: e => "useActiveStyles" !== e
                })(e => {
                    let {
                        theme: t,
                        useActiveStyles: o
                    } = e;
                    return {
                        "&:hover": {
                            cursor: "pointer"
                        },
                        display: "flex",
                        overflow: "hidden",
                        transformOrigin: "right center",
                        transition: "transform 0.3s ease",
                        width: "100%",
                        [t.breakpoints.up("xl")]: {
                            "@media (prefers-reduced-motion: no-preference)": {
                                ":hover": {
                                    borderBottomLeftRadius: "100px",
                                    borderTopLeftRadius: "100px",
                                    transform: "scale(1.075)"
                                },
                                borderBottomLeftRadius: o ? "100px" : 0,
                                borderTopLeftRadius: o ? "100px" : 0,
                                transform: o ? "scale(1.075)" : "none"
                            }
                        }
                    }
                }),
                m = (0, h.ZP)(c.default, {
                    shouldForwardProp: e => "backgroundColor" !== e && "useActiveStyles" !== e
                })(e => {
                    let {
                        backgroundColor: t,
                        useActiveStyles: o
                    } = e;
                    return {
                        alignItems: "center",
                        background: t,
                        borderRight: "1px solid ".concat(o ? t : x.gpS),
                        display: "flex",
                        justifyContent: "center",
                        minHeight: "48px",
                        minWidth: "56px",
                        width: "56px"
                    }
                }),
                b = (0, h.ZP)(p.Text, {
                    shouldForwardProp: e => "backgroundColor" !== e && "color" !== e
                })(e => {
                    let {
                        backgroundColor: t,
                        color: o,
                        theme: r
                    } = e;
                    return {
                        color: o,
                        fontSize: x.aQT,
                        lineHeight: x.Qoq,
                        padding: x.iPk,
                        textAlign: "left",
                        width: "100%",
                        [r.breakpoints.up("lg")]: {
                            background: t
                        }
                    }
                }),
                _ = (0, l.forwardRef)((e, t) => {
                    let {
                        activeIconBackgroundColor: o,
                        activeTextBackgroundColor: l,
                        activeTextColor: n,
                        defaultIconBackgroundColor: a,
                        defaultTextBackgroundColor: i,
                        defaultTextColor: u,
                        icons: d,
                        title: c,
                        useActiveStyles: s
                    } = e, {
                        trackEvent: g
                    } = (0, f.rS)();
                    return (0, r.jsxs)(v, {
                        onClick: () => {
                            g({
                                component: {
                                    identifier: "Bullet Accordion",
                                    trackedData: [c],
                                    type: "ui"
                                },
                                trackType: "navigation"
                            })
                        },
                        ref: t,
                        useActiveStyles: s,
                        children: [d && (0, r.jsx)(m, {
                            backgroundColor: s ? o : a,
                            useActiveStyles: s,
                            children: s ? d.activeColor : d.defaultColor
                        }), (0, r.jsx)(b, {
                            backgroundColor: s ? l : i,
                            bold: !0,
                            color: s ? n : u,
                            variant: "t3",
                            children: c
                        })]
                    })
                });
            _.displayName = "ItemIconTitle";
            let k = e => ({
                    "&.MuiAccordion-root": {
                        "&::before": {
                            backgroundColor: x.gpS
                        },
                        "&:first-of-type": {
                            ".MuiAccordionSummary-root": {
                                borderTopLeftRadius: "10px !important",
                                borderTopRightRadius: "10px !important",
                                overflow: "hidden"
                            },
                            borderTopLeftRadius: "10px !important",
                            borderTopRightRadius: "10px !important",
                            overflow: "hidden"
                        },
                        ...!e && {
                            "&:last-of-type": {
                                ".MuiAccordionSummary-root": {
                                    borderBottomLeftRadius: "10px !important",
                                    borderBottomRightRadius: "10px !important",
                                    overflow: "hidden"
                                },
                                borderBottomLeftRadius: "10px !important",
                                borderBottomRightRadius: "10px !important"
                            }
                        },
                        ".MuiCollapse-root": {
                            transitionDuration: "01ms !important"
                        },
                        overflow: "hidden"
                    },
                    "&.MuiAccordion-root.Mui-expanded": {
                        "&::before": {
                            opacity: 100
                        }
                    },
                    backgroundColor: x.AhM,
                    boxShadow: "none",
                    margin: 0
                }),
                y = e => ({
                    "&.MuiAccordionSummary-root": {
                        borderLeft: "1px solid ".concat(x.gpS),
                        borderRight: "1px solid ".concat(x.gpS)
                    },
                    "&.MuiButtonBase-root": {
                        "&.MuiAccordionSummary-root": {
                            padding: "0 ".concat(x.oFH, " 0 0")
                        },
                        "&:hover": {
                            background: "".concat(e, " !important")
                        },
                        background: "".concat(e, " !important"),
                        transitionDuration: "0ms"
                    }
                }),
                w = {
                    padding: 0
                },
                C = (0, l.forwardRef)((e, t) => {
                    let {
                        activeIconBackgroundColor: o,
                        activeTextBackgroundColor: n,
                        activeTextColor: a,
                        defaultIconBackgroundColor: i,
                        defaultTextBackgroundColor: u,
                        defaultTextColor: d,
                        details: c,
                        icons: s,
                        isActive: f,
                        isExpanded: h,
                        onChange: p,
                        title: x
                    } = e, [v, m] = (0, l.useState)(!1), [b, C] = (0, l.useState)(!1), P = f || v || b, j = k(h), R = y(P ? n : u);
                    return (0, r.jsx)(g.Accordion, {
                        expandIconSx: {
                            color: P ? a : d
                        },
                        secondaryComponent: (0, r.jsx)(_, {
                            activeIconBackgroundColor: o,
                            activeTextBackgroundColor: n,
                            activeTextColor: a,
                            defaultIconBackgroundColor: i,
                            defaultTextBackgroundColor: u,
                            defaultTextColor: d,
                            icons: s,
                            ref: t,
                            title: x,
                            useActiveStyles: P
                        }),
                        accordionDetailsSx: w,
                        accordionSummarySx: R,
                        accordionSx: j,
                        disableGutters: !0,
                        displayTitle: !1,
                        isExpanded: h,
                        onBlur: () => m(!1),
                        onChange: () => {
                            p()
                        },
                        onFocus: () => m(!0),
                        onMouseEnter: () => C(!0),
                        onMouseLeave: () => C(!1),
                        children: c
                    })
                });
            C.displayName = "AccordionItem";
            let P = (e, t) => e.filter(e => t[e.bullet_detail_ref[0].uid]),
                j = e => {
                    var t, o, n;
                    let {
                        activeAccordion: a,
                        bulletDetailCards: i,
                        config: u,
                        content: g,
                        icons: f,
                        onUpdateActiveAccordion: h
                    } = e, {
                        isDesktop: p
                    } = (0, s.T)(), x = P(null !== (n = null == g ? void 0 : g.accordion) && void 0 !== n ? n : [], i), v = x.map(e => e.bullet_detail_ref[0].uid), m = (0, l.useRef)(v.reduce((e, t) => (e[t] = l.createRef(), e), {}));
                    if (!u || !g) return null;
                    let b = (0, d.d)(null == u ? void 0 : u.active_colors.icon_background_color),
                        _ = (0, d.d)(null == u ? void 0 : u.active_colors.text_and_background_color),
                        k = null == (t = null == u ? void 0 : u.active_colors.text_and_background_color.text_color) ? void 0 : t.hex,
                        y = (0, d.d)(null == u ? void 0 : u.default_colors.icon_background_color),
                        w = (0, d.d)(null == u ? void 0 : u.default_colors.text_and_background_color),
                        j = null == (o = null == u ? void 0 : u.default_colors.text_and_background_color.text_color) ? void 0 : o.hex,
                        R = (e, t) => {
                            let o = v.indexOf(e),
                                r = v.indexOf(t || "");
                            return -1 !== o && -1 !== r && o < r
                        },
                        T = e => {
                            var t;
                            a.desktop === e && void 0 !== a.mobile ? h(e, void 0) : h(e, e), R(e, a.mobile) ? null == (t = m.current[e].current) || t.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            }) : setTimeout(() => {
                                var t;
                                null == (t = m.current[e].current) || t.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                })
                            }, 100)
                        };
                    return (0, r.jsx)(c.default, {
                        children: x.map(e => {
                            let t = e._metadata.uid,
                                o = e.bullet_detail_ref[0].uid;
                            return (0, r.jsx)(C, {
                                activeIconBackgroundColor: b,
                                activeTextBackgroundColor: _,
                                defaultIconBackgroundColor: y,
                                defaultTextBackgroundColor: w,
                                isActive: p && a.desktop === o || !p && a.mobile === o,
                                isExpanded: !p && a.mobile === o,
                                activeTextColor: k,
                                defaultTextColor: j,
                                details: i[o],
                                icons: f[t],
                                onChange: () => T(o),
                                ref: m.current[o],
                                title: e.accordion_title
                            }, t)
                        })
                    })
                };
            var R = o(60673),
                T = o(15988),
                S = o(20801),
                D = o(73873),
                M = o(31098);
            let V = "Tabs";

            function I(e) {
                return (0, D.d)(V, e)
            }(0, M.s)(V, ["root", "horizontal", "vertical"]);
            var A = o(38462);
            let Z = l.createContext(null);

            function E() {
                let [e, t] = l.useState(new Map), o = l.useRef(new Set), r = l.useCallback(function(e) {
                    o.current.delete(e), t(t => {
                        let o = new Map(t);
                        return o.delete(e), o
                    })
                }, []), n = l.useCallback(function(e, l) {
                    let n;
                    return n = "function" == typeof e ? e(o.current) : e, o.current.add(n), t(e => {
                        let t = new Map(e);
                        return t.set(n, l), t
                    }), {
                        id: n,
                        deregister: () => r(n)
                    }
                }, [r]), a = l.useMemo(() => (function(e) {
                    let t = Array.from(e.keys()).map(t => {
                        let o = e.get(t);
                        return {
                            key: t,
                            subitem: o
                        }
                    });
                    return t.sort((e, t) => {
                        let o = e.subitem.ref.current,
                            r = t.subitem.ref.current;
                        return null === o || null === r || o === r ? 0 : o.compareDocumentPosition(r) & Node.DOCUMENT_POSITION_PRECEDING ? 1 : -1
                    }), new Map(t.map(e => [e.key, e.subitem]))
                })(e), [e]), i = l.useCallback(function(e) {
                    return Array.from(a.keys()).indexOf(e)
                }, [a]);
                return {
                    contextValue: l.useMemo(() => ({
                        getItemIndex: i,
                        registerItem: n,
                        totalSubitemCount: e.size
                    }), [i, n, e.size]),
                    subitems: a
                }
            }
            let F = l.createContext(null);

            function B() {
                let e = l.useContext(F);
                if (null == e) throw Error("No TabsContext provided");
                return e
            }

            function L(e) {
                let {
                    value: t,
                    children: o
                } = e, {
                    direction: n,
                    getItemIndex: a,
                    onSelected: i,
                    orientation: u,
                    registerItem: d,
                    registerTabIdLookup: c,
                    selectionFollowsFocus: s,
                    totalSubitemCount: g,
                    value: f,
                    getTabId: h,
                    getTabPanelId: p
                } = t, x = l.useMemo(() => ({
                    getItemIndex: a,
                    registerItem: d,
                    totalSubitemCount: g
                }), [d, a, g]), v = l.useMemo(() => ({
                    direction: n,
                    getTabId: h,
                    getTabPanelId: p,
                    onSelected: i,
                    orientation: u,
                    registerTabIdLookup: c,
                    selectionFollowsFocus: s,
                    value: f
                }), [n, h, p, i, u, c, s, f]);
                return (0, r.jsx)(Z.Provider, {
                    value: x,
                    children: (0, r.jsx)(F.Provider, {
                        value: v,
                        children: o
                    })
                })
            }
            var O = o(30631);
            let N = e => {
                    let {
                        orientation: t
                    } = e;
                    return (0, S.Z)({
                        root: ["root", t]
                    }, (0, O.T)(I))
                },
                z = l.forwardRef(function(e, t) {
                    var o;
                    let {
                        children: n,
                        value: a,
                        defaultValue: i,
                        orientation: u = "horizontal",
                        direction: d = "ltr",
                        onChange: c,
                        selectionFollowsFocus: s,
                        slotProps: g = {},
                        slots: f = {},
                        ...h
                    } = e, p = { ...e,
                        orientation: u,
                        direction: d
                    }, {
                        contextValue: x
                    } = function(e) {
                        let {
                            value: t,
                            defaultValue: o,
                            onChange: r,
                            orientation: n = "horizontal",
                            direction: a = "ltr",
                            selectionFollowsFocus: i = !1
                        } = e, [u, d] = (0, A.default)({
                            controlled: t,
                            default: o,
                            name: "Tabs",
                            state: "value"
                        }), c = l.useCallback((e, t) => {
                            d(t), null == r || r(e, t)
                        }, [r, d]), {
                            subitems: s,
                            contextValue: g
                        } = E(), f = l.useRef(() => void 0), h = l.useCallback(e => {
                            var t;
                            return null === (t = s.get(e)) || void 0 === t ? void 0 : t.id
                        }, [s]);
                        return {
                            contextValue: {
                                direction: a,
                                getTabId: l.useCallback(e => f.current(e), []),
                                getTabPanelId: h,
                                onSelected: c,
                                orientation: n,
                                registerTabIdLookup: l.useCallback(e => {
                                    f.current = e
                                }, []),
                                selectionFollowsFocus: i,
                                value: u,
                                ...g
                            }
                        }
                    }(p), v = N(p), m = null !== (o = f.root) && void 0 !== o ? o : "div", b = (0, T.default)({
                        elementType: m,
                        externalSlotProps: g.root,
                        externalForwardedProps: h,
                        additionalProps: {
                            ref: t
                        },
                        ownerState: p,
                        className: v.root
                    });
                    return (0, r.jsx)(m, { ...b,
                        children: (0, r.jsx)(L, {
                            value: x,
                            children: n
                        })
                    })
                }),
                H = "TabsList";

            function U(e) {
                return (0, D.d)(H, e)
            }(0, M.s)(H, ["root", "horizontal", "vertical"]);
            let Q = {
                valueChange: "valueChange"
            };
            var G = o(23947);
            let W = {
                blur: "list:blur",
                itemClick: "list:itemClick",
                itemHover: "list:itemHover",
                itemsChange: "list:itemsChange",
                keyDown: "list:keyDown",
                resetHighlight: "list:resetHighlight",
                highlightLast: "list:highlightLast",
                textNavigation: "list:textNavigation",
                clearSelection: "list:clearSelection"
            };

            function q(e, t, o) {
                let r, l;
                let {
                    items: n,
                    isItemDisabled: a,
                    disableListWrap: i,
                    disabledItemsFocusable: u,
                    itemComparer: d,
                    focusManagement: c
                } = o, s = n.length - 1, g = null == e ? -1 : n.findIndex(t => d(t, e)), f = !i;
                switch (t) {
                    case "reset":
                        if (-1 == ("DOM" === c ? 0 : -1)) return null;
                        r = 0, l = "next", f = !1;
                        break;
                    case "start":
                        r = 0, l = "next", f = !1;
                        break;
                    case "end":
                        r = s, l = "previous", f = !1;
                        break;
                    default:
                        {
                            let e = g + t;e < 0 ? !f && -1 !== g || Math.abs(t) > 1 ? (r = 0, l = "next") : (r = s, l = "previous") : e > s ? !f || Math.abs(t) > 1 ? (r = s, l = "previous") : (r = 0, l = "next") : (r = e, l = t >= 0 ? "next" : "previous")
                        }
                }
                let h = function(e, t, o, r, l, n) {
                    if (0 === o.length || !r && o.every((e, t) => l(e, t))) return -1;
                    let a = e;
                    for (;;) {
                        if (!n && "next" === t && a === o.length || !n && "previous" === t && -1 === a) return -1;
                        if (!(!r && l(o[a], a))) return a;
                        a += "next" === t ? 1 : -1, n && (a = (a + o.length) % o.length)
                    }
                }(r, l, n, u, a, f);
                return -1 !== h || null === e || a(e, g) ? n[h] ? ? null : e
            }

            function K(e, t, o) {
                let {
                    itemComparer: r,
                    isItemDisabled: l,
                    selectionMode: n,
                    items: a
                } = o, {
                    selectedValues: i
                } = t, u = a.findIndex(t => r(e, t));
                if (l(e, u)) return t;
                let d = "none" === n ? [] : "single" === n ? r(i[0], e) ? i : [e] : i.some(t => r(t, e)) ? i.filter(t => !r(t, e)) : [...i, e];
                return { ...t,
                    selectedValues: d,
                    highlightedValue: e
                }
            }

            function J(e, t) {
                let {
                    type: o,
                    context: r
                } = t;
                switch (o) {
                    case W.keyDown:
                        return function(e, t, o) {
                            let r = t.highlightedValue,
                                {
                                    orientation: l,
                                    pageSize: n
                                } = o;
                            switch (e) {
                                case "Home":
                                    return { ...t,
                                        highlightedValue: q(r, "start", o)
                                    };
                                case "End":
                                    return { ...t,
                                        highlightedValue: q(r, "end", o)
                                    };
                                case "PageUp":
                                    return { ...t,
                                        highlightedValue: q(r, -n, o)
                                    };
                                case "PageDown":
                                    return { ...t,
                                        highlightedValue: q(r, n, o)
                                    };
                                case "ArrowUp":
                                    if ("vertical" !== l) break;
                                    return { ...t,
                                        highlightedValue: q(r, -1, o)
                                    };
                                case "ArrowDown":
                                    if ("vertical" !== l) break;
                                    return { ...t,
                                        highlightedValue: q(r, 1, o)
                                    };
                                case "ArrowLeft":
                                    if ("vertical" === l) break;
                                    return { ...t,
                                        highlightedValue: q(r, "horizontal-ltr" === l ? -1 : 1, o)
                                    };
                                case "ArrowRight":
                                    if ("vertical" === l) break;
                                    return { ...t,
                                        highlightedValue: q(r, "horizontal-ltr" === l ? 1 : -1, o)
                                    };
                                case "Enter":
                                case " ":
                                    if (null === t.highlightedValue) break;
                                    return K(t.highlightedValue, t, o)
                            }
                            return t
                        }(t.key, e, r);
                    case W.itemClick:
                        return K(t.item, e, r);
                    case W.blur:
                        return "DOM" === r.focusManagement ? e : { ...e,
                            highlightedValue: null
                        };
                    case W.textNavigation:
                        return function(e, t, o) {
                            let {
                                items: r,
                                isItemDisabled: l,
                                disabledItemsFocusable: n,
                                getItemAsString: a
                            } = o, i = t.length > 1, u = i ? e.highlightedValue : q(e.highlightedValue, 1, o);
                            for (let d = 0; d < r.length && u && (i || e.highlightedValue !== u); d += 1) {
                                if (function(e, t, o) {
                                        let r = o(e) ? .trim().toLowerCase();
                                        return !!r && 0 !== r.length && r.startsWith(t)
                                    }(u, t, a) && (!l(u, r.indexOf(u)) || n)) return { ...e,
                                    highlightedValue: u
                                };
                                u = q(u, 1, o)
                            }
                            return e
                        }(e, t.searchString, r);
                    case W.itemsChange:
                        return function(e, t, o, r) {
                            let {
                                itemComparer: l,
                                focusManagement: n
                            } = r, a = null;
                            null != o.highlightedValue ? a = e.find(e => l(e, o.highlightedValue)) ? ? null : "DOM" === n && 0 === t.length && (a = q(null, "reset", r));
                            let i = (o.selectedValues ? ? []).filter(t => e.some(e => l(e, t)));
                            return { ...o,
                                highlightedValue: a,
                                selectedValues: i
                            }
                        }(t.items, t.previousItems, e, r);
                    case W.resetHighlight:
                        return { ...e,
                            highlightedValue: q(null, "reset", r)
                        };
                    case W.highlightLast:
                        return { ...e,
                            highlightedValue: q(null, "end", r)
                        };
                    case W.clearSelection:
                        return { ...e,
                            selectedValues: [],
                            highlightedValue: q(null, "reset", r)
                        };
                    default:
                        return e
                }
            }

            function X(e, t) {
                return e === t
            }
            let $ = {},
                Y = () => {};

            function ee(e, t) {
                let o = { ...e
                };
                return Object.keys(t).forEach(e => {
                    void 0 !== t[e] && (o[e] = t[e])
                }), o
            }

            function et(e, t, o = (e, t) => e === t) {
                return e.length === t.length && e.every((e, r) => o(e, t[r]))
            }
            var eo = o(44393);
            let er = {},
                el = () => {},
                en = (e, t) => e === t,
                ea = () => !1,
                ei = e => "string" == typeof e ? e : String(e),
                eu = () => ({
                    highlightedValue: null,
                    selectedValues: []
                });

            function ed(e, t) {
                if (t.type === Q.valueChange) return { ...e,
                    highlightedValue: t.value
                };
                let o = J(e, t),
                    {
                        context: {
                            selectionFollowsFocus: r
                        }
                    } = t;
                if (t.type === W.itemsChange) {
                    if (o.selectedValues.length > 0) return { ...o,
                        highlightedValue: o.selectedValues[0]
                    };
                    q(null, "reset", t.context)
                }
                return r && null != o.highlightedValue ? { ...o,
                    selectedValues: [o.highlightedValue]
                } : o
            }
            let ec = l.createContext(null);

            function es(e) {
                let {
                    value: t,
                    children: o
                } = e, {
                    dispatch: n,
                    getItemIndex: a,
                    getItemState: i,
                    registerItem: u,
                    totalSubitemCount: d
                } = t, c = l.useMemo(() => ({
                    dispatch: n,
                    getItemState: i,
                    getItemIndex: a
                }), [n, a, i]), s = l.useMemo(() => ({
                    getItemIndex: a,
                    registerItem: u,
                    totalSubitemCount: d
                }), [u, a, d]);
                return (0, r.jsx)(Z.Provider, {
                    value: s,
                    children: (0, r.jsx)(ec.Provider, {
                        value: c,
                        children: o
                    })
                })
            }
            let eg = e => {
                    let {
                        orientation: t
                    } = e;
                    return (0, S.Z)({
                        root: ["root", t]
                    }, (0, O.T)(U))
                },
                ef = l.forwardRef(function(e, t) {
                    var o;
                    let {
                        children: n,
                        slotProps: a = {},
                        slots: i = {},
                        ...u
                    } = e, {
                        isRtl: d,
                        orientation: c,
                        getRootProps: s,
                        contextValue: g
                    } = function(e) {
                        var t;
                        let o;
                        let {
                            rootRef: r
                        } = e, {
                            direction: n = "ltr",
                            onSelected: a,
                            orientation: i = "horizontal",
                            value: u,
                            registerTabIdLookup: d,
                            selectionFollowsFocus: c
                        } = B(), {
                            subitems: s,
                            contextValue: g
                        } = E();
                        d(l.useCallback(e => {
                            var t;
                            return null === (t = s.get(e)) || void 0 === t ? void 0 : t.id
                        }, [s]));
                        let f = l.useMemo(() => Array.from(s.keys()), [s]),
                            h = l.useCallback(e => {
                                var t, o;
                                return null == e ? null : null !== (o = null === (t = s.get(e)) || void 0 === t ? void 0 : t.ref.current) && void 0 !== o ? o : null
                            }, [s]),
                            p = "rtl" === n;
                        o = "vertical" === i ? "vertical" : p ? "horizontal-rtl" : "horizontal-ltr";
                        let x = l.useCallback((e, t) => {
                                var o;
                                a(e, null !== (o = t[0]) && void 0 !== o ? o : null)
                            }, [a]),
                            {
                                contextValue: v,
                                dispatch: m,
                                getRootProps: b,
                                state: {
                                    highlightedValue: _,
                                    selectedValues: k
                                },
                                rootRef: y
                            } = function(e) {
                                let {
                                    controlledProps: t = er,
                                    disabledItemsFocusable: o = !1,
                                    disableListWrap: r = !1,
                                    focusManagement: n = "activeDescendant",
                                    getInitialState: a = eu,
                                    getItemDomElement: i,
                                    getItemId: u,
                                    isItemDisabled: d = ea,
                                    rootRef: c,
                                    onStateChange: s = el,
                                    items: g,
                                    itemComparer: f = en,
                                    getItemAsString: h = ei,
                                    onChange: p,
                                    onHighlightChange: x,
                                    onItemsChange: v,
                                    orientation: m = "vertical",
                                    pageSize: b = 5,
                                    reducerActionContext: _ = er,
                                    selectionMode: k = "single",
                                    stateReducer: y,
                                    componentName: w = "useList"
                                } = e, C = l.useRef(null), P = (0, G.default)(c, C), j = l.useCallback((e, t, o) => {
                                    if (null == x || x(e, t, o), "DOM" === n && null != t && (o === W.itemClick || o === W.keyDown || o === W.textNavigation)) {
                                        var r;
                                        null == i || null === (r = i(t)) || void 0 === r || r.focus()
                                    }
                                }, [i, x, n]), R = l.useMemo(() => ({
                                    highlightedValue: f,
                                    selectedValues: (e, t) => et(e, t, f)
                                }), [f]), T = l.useCallback((e, t, o, r, l) => {
                                    switch (null == s || s(e, t, o, r, l), t) {
                                        case "highlightedValue":
                                            j(e, o, r);
                                            break;
                                        case "selectedValues":
                                            null == p || p(e, o, r)
                                    }
                                }, [j, p, s]), S = l.useMemo(() => ({
                                    disabledItemsFocusable: o,
                                    disableListWrap: r,
                                    focusManagement: n,
                                    isItemDisabled: d,
                                    itemComparer: f,
                                    items: g,
                                    getItemAsString: h,
                                    onHighlightChange: j,
                                    orientation: m,
                                    pageSize: b,
                                    selectionMode: k,
                                    stateComparers: R
                                }), [o, r, n, d, f, g, h, j, m, b, k, R]), D = a(), [M, V] = function(e) {
                                    let t = l.useRef(null),
                                        {
                                            reducer: o,
                                            initialState: r,
                                            controlledProps: n = $,
                                            stateComparers: a = $,
                                            onStateChange: i = Y,
                                            actionContext: u,
                                            componentName: d = ""
                                        } = e;
                                    l.useRef(n);
                                    let c = l.useCallback((e, r) => (t.current = r, o(ee(e, n), r)), [n, o]),
                                        [s, g] = l.useReducer(c, r),
                                        f = l.useCallback(e => {
                                            g({ ...e,
                                                context: u
                                            })
                                        }, [u]);
                                    return ! function(e) {
                                        let {
                                            nextState: t,
                                            initialState: o,
                                            stateComparers: r,
                                            onStateChange: n,
                                            controlledProps: a,
                                            lastActionRef: i
                                        } = e, u = l.useRef(o);
                                        l.useEffect(() => {
                                            if (null === i.current) return;
                                            let e = ee(u.current, a);
                                            Object.keys(t).forEach(o => {
                                                var l, a, u;
                                                let d = null !== (l = r[o]) && void 0 !== l ? l : X,
                                                    c = t[o],
                                                    s = e[o];
                                                (null != s || null == c) && (null == s || null != c) && (null == s || null == c || d(c, s)) || null == n || n(null !== (a = i.current.event) && void 0 !== a ? a : null, o, c, null !== (u = i.current.type) && void 0 !== u ? u : "", t)
                                            }), u.current = t, i.current = null
                                        }, [u, t, i, n, r, a])
                                    }({
                                        nextState: s,
                                        initialState: r,
                                        stateComparers: null != a ? a : $,
                                        onStateChange: null != i ? i : Y,
                                        controlledProps: n,
                                        lastActionRef: t
                                    }), [ee(s, n), f]
                                }({
                                    reducer: null != y ? y : J,
                                    actionContext: l.useMemo(() => ({ ..._,
                                        ...S
                                    }), [_, S]),
                                    initialState: D,
                                    controlledProps: t,
                                    stateComparers: R,
                                    onStateChange: T,
                                    componentName: w
                                }), {
                                    highlightedValue: I,
                                    selectedValues: A
                                } = M, Z = function(e) {
                                    let t = l.useRef({
                                        searchString: "",
                                        lastTime: null
                                    });
                                    return l.useCallback(o => {
                                        if (1 === o.key.length && " " !== o.key) {
                                            let r = t.current,
                                                l = o.key.toLowerCase(),
                                                n = performance.now();
                                            r.searchString.length > 0 && r.lastTime && n - r.lastTime > 500 ? r.searchString = l : (1 !== r.searchString.length || l !== r.searchString) && (r.searchString += l), r.lastTime = n, e(r.searchString, o)
                                        }
                                    }, [e])
                                }((e, t) => V({
                                    type: W.textNavigation,
                                    event: t,
                                    searchString: e
                                })), E = l.useRef([]);
                                l.useEffect(() => {
                                    et(E.current, g, f) || (V({
                                        type: W.itemsChange,
                                        event: null,
                                        items: g,
                                        previousItems: E.current
                                    }), E.current = g, null == v || v(g))
                                }, [g, f, V, v]);
                                let F = e => t => {
                                        var o;
                                        if (null === (o = e.onKeyDown) || void 0 === o || o.call(e, t), t.defaultMuiPrevented) return;
                                        let r = ["Home", "End", "PageUp", "PageDown"];
                                        "vertical" === m ? r.push("ArrowUp", "ArrowDown") : r.push("ArrowLeft", "ArrowRight"), "activeDescendant" === n && r.push(" ", "Enter"), r.includes(t.key) && t.preventDefault(), V({
                                            type: W.keyDown,
                                            key: t.key,
                                            event: t
                                        }), Z(t)
                                    },
                                    B = e => t => {
                                        var o, r;
                                        null === (o = e.onBlur) || void 0 === o || o.call(e, t), t.defaultMuiPrevented || (null === (r = C.current) || void 0 === r ? void 0 : r.contains(t.relatedTarget)) || V({
                                            type: W.blur,
                                            event: t
                                        })
                                    },
                                    L = l.useCallback(e => {
                                        let t = (null != A ? A : []).some(t => null != t && f(e, t));
                                        return {
                                            focusable: "DOM" === n,
                                            highlighted: null != I && f(e, I),
                                            selected: t
                                        }
                                    }, [f, A, I, n]),
                                    O = l.useMemo(() => ({
                                        dispatch: V,
                                        getItemState: L
                                    }), [V, L]);
                                return l.useDebugValue({
                                    state: M
                                }), {
                                    contextValue: O,
                                    dispatch: V,
                                    getRootProps: function() {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            t = (0, eo.Z)(e);
                                        return { ...e,
                                            "aria-activedescendant": "activeDescendant" === n && null != I ? u(I) : void 0,
                                            tabIndex: "DOM" === n ? -1 : 0,
                                            ref: P,
                                            ...t,
                                            onBlur: B(t),
                                            onKeyDown: F(t)
                                        }
                                    },
                                    rootRef: P,
                                    state: M
                                }
                            }({
                                controlledProps: l.useMemo(() => void 0 === u ? {} : null != u ? {
                                    selectedValues: [u]
                                } : {
                                    selectedValues: []
                                }, [u]),
                                disabledItemsFocusable: !c,
                                focusManagement: "DOM",
                                getItemDomElement: h,
                                isItemDisabled: l.useCallback(e => {
                                    var t, o;
                                    return null !== (o = null === (t = s.get(e)) || void 0 === t ? void 0 : t.disabled) && void 0 !== o && o
                                }, [s]),
                                items: f,
                                rootRef: r,
                                onChange: x,
                                orientation: o,
                                reducerActionContext: l.useMemo(() => ({
                                    selectionFollowsFocus: c || !1
                                }), [c]),
                                selectionMode: "single",
                                stateReducer: ed
                            });
                        return l.useEffect(() => {
                            void 0 !== u && null != u && m({
                                type: Q.valueChange,
                                value: u
                            })
                        }, [m, u]), {
                            contextValue: l.useMemo(() => ({ ...g,
                                ...v
                            }), [g, v]),
                            dispatch: m,
                            getRootProps: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                return { ...e,
                                    ...b(e),
                                    "aria-orientation": "vertical" === i ? "vertical" : void 0,
                                    role: "tablist"
                                }
                            },
                            highlightedValue: _,
                            isRtl: p,
                            orientation: i,
                            rootRef: y,
                            selectedValue: null !== (t = k[0]) && void 0 !== t ? t : null
                        }
                    }({
                        rootRef: t
                    }), f = { ...e,
                        isRtl: d,
                        orientation: c
                    }, h = eg(f), p = null !== (o = i.root) && void 0 !== o ? o : "div", x = (0, T.default)({
                        elementType: p,
                        getSlotProps: s,
                        externalSlotProps: a.root,
                        externalForwardedProps: u,
                        ownerState: f,
                        className: h.root
                    });
                    return (0, r.jsx)(es, {
                        value: g,
                        children: (0, r.jsx)(p, { ...x,
                            children: n
                        })
                    })
                });

            function eh(e) {
                return (0, D.d)("Tab", e)
            }(0, M.s)("Tab", ["root", "selected", "disabled"]);
            var ep = o(53025),
                ex = o(3450),
                ev = o(62919);

            function em(e) {
                return e.size
            }
            let eb = e => {
                    let {
                        selected: t,
                        disabled: o
                    } = e;
                    return (0, S.Z)({
                        root: ["root", t && "selected", o && "disabled"]
                    }, (0, O.T)(eh))
                },
                e_ = l.forwardRef(function(e, t) {
                    var o;
                    let {
                        action: n,
                        children: a,
                        disabled: i = !1,
                        onChange: u,
                        onClick: d,
                        onFocus: c,
                        slotProps: s = {},
                        slots: g = {},
                        value: f,
                        ...h
                    } = e, p = l.useRef(null), x = (0, G.default)(p, t), {
                        active: v,
                        highlighted: m,
                        selected: b,
                        getRootProps: _
                    } = function(e) {
                        let {
                            value: t,
                            rootRef: o,
                            disabled: r = !1,
                            id: n
                        } = e, a = l.useRef(null), i = (0, ep.default)(n), {
                            value: u,
                            selectionFollowsFocus: d,
                            getTabPanelId: c
                        } = B(), {
                            id: s,
                            index: g,
                            totalItemCount: f
                        } = function(e, t) {
                            let o = l.useContext(Z);
                            if (null === o) throw Error("useCompoundItem must be used within a useCompoundParent");
                            let {
                                registerItem: r
                            } = o, [n, a] = l.useState("function" == typeof e ? void 0 : e);
                            return (0, ex.default)(() => {
                                let {
                                    id: o,
                                    deregister: l
                                } = r(e, t);
                                return a(o), l
                            }, [r, t, e]), {
                                id: n,
                                index: void 0 !== n ? o.getItemIndex(n) : -1,
                                totalItemCount: o.totalSubitemCount
                            }
                        }(null != t ? t : em, l.useMemo(() => ({
                            disabled: r,
                            ref: a,
                            id: i
                        }), [r, a, i])), {
                            getRootProps: h,
                            highlighted: p,
                            selected: x
                        } = function(e) {
                            let t;
                            let {
                                handlePointerOverEvents: o = !1,
                                item: r
                            } = e, n = l.useContext(ec);
                            if (!n) throw Error("useListItem must be used within a ListProvider");
                            let {
                                dispatch: a,
                                getItemState: i
                            } = n, {
                                highlighted: u,
                                selected: d,
                                focusable: c
                            } = i(r), s = l.useCallback(e => t => {
                                var o;
                                null === (o = e.onClick) || void 0 === o || o.call(e, t), t.defaultPrevented || a({
                                    type: W.itemClick,
                                    item: r,
                                    event: t
                                })
                            }, [a, r]), g = l.useCallback(e => t => {
                                var o;
                                null === (o = e.onMouseOver) || void 0 === o || o.call(e, t), t.defaultPrevented || a({
                                    type: W.itemHover,
                                    item: r,
                                    event: t
                                })
                            }, [a, r]);
                            return c && (t = u ? 0 : -1), {
                                getRootProps: function() {
                                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        r = (0, eo.Z)(e);
                                    return { ...e,
                                        onClick: s(r),
                                        onPointerOver: o ? g(r) : void 0,
                                        tabIndex: t
                                    }
                                },
                                highlighted: u,
                                selected: d
                            }
                        }({
                            item: s
                        }), {
                            getRootProps: v,
                            rootRef: m,
                            active: b,
                            focusVisible: _,
                            setFocusVisible: k
                        } = function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                {
                                    disabled: t = !1,
                                    focusableWhenDisabled: o,
                                    href: r,
                                    rootRef: n,
                                    tabIndex: a,
                                    to: i,
                                    type: u,
                                    rootElementName: d
                                } = e,
                                c = l.useRef(null),
                                [s, g] = l.useState(!1),
                                [f, h] = l.useState(!1);
                            t && !o && f && h(!1);
                            let [p, x] = function(e) {
                                let {
                                    rootElementName: t = "",
                                    componentName: o
                                } = e, [r, n] = l.useState(t.toUpperCase());
                                return [r, l.useCallback(e => {
                                    var t;
                                    n(null !== (t = null == e ? void 0 : e.tagName) && void 0 !== t ? t : "")
                                }, [])]
                            }({
                                rootElementName: null != d ? d : r || i ? "a" : void 0,
                                componentName: "Button"
                            }), v = e => t => {
                                var o;
                                f && t.preventDefault(), null === (o = e.onMouseLeave) || void 0 === o || o.call(e, t)
                            }, m = e => t => {
                                var o;
                                (0, ev.Z)(t.target) || h(!1), null === (o = e.onBlur) || void 0 === o || o.call(e, t)
                            }, b = e => t => {
                                var o, r;
                                c.current || (c.current = t.currentTarget), (0, ev.Z)(t.target) && (h(!0), null === (r = e.onFocusVisible) || void 0 === r || r.call(e, t)), null === (o = e.onFocus) || void 0 === o || o.call(e, t)
                            }, _ = () => {
                                let e = c.current;
                                return "BUTTON" === p || "INPUT" === p && ["button", "submit", "reset"].includes(null == e ? void 0 : e.type) || "A" === p && (null == e ? void 0 : e.href)
                            }, k = e => o => {
                                if (!t) {
                                    var r;
                                    null === (r = e.onClick) || void 0 === r || r.call(e, o)
                                }
                            }, y = e => o => {
                                var r;
                                t || (g(!0), document.addEventListener("mouseup", () => {
                                    g(!1)
                                }, {
                                    once: !0
                                })), null === (r = e.onMouseDown) || void 0 === r || r.call(e, o)
                            }, w = e => o => {
                                var r, l;
                                null === (r = e.onKeyDown) || void 0 === r || r.call(e, o), !o.defaultMuiPrevented && (o.target !== o.currentTarget || _() || " " !== o.key || o.preventDefault(), o.target !== o.currentTarget || " " !== o.key || t || g(!0), o.target !== o.currentTarget || _() || "Enter" !== o.key || t || (null === (l = e.onClick) || void 0 === l || l.call(e, o), o.preventDefault()))
                            }, C = e => o => {
                                var r, l;
                                o.target === o.currentTarget && g(!1), null === (r = e.onKeyUp) || void 0 === r || r.call(e, o), o.target !== o.currentTarget || _() || t || " " !== o.key || o.defaultMuiPrevented || null === (l = e.onClick) || void 0 === l || l.call(e, o)
                            }, P = (0, G.default)(x, n, c), j = {};
                            return void 0 !== a && (j.tabIndex = a), "BUTTON" === p ? (j.type = null != u ? u : "button", o ? j["aria-disabled"] = t : j.disabled = t) : "INPUT" === p ? u && ["button", "submit", "reset"].includes(u) && (o ? j["aria-disabled"] = t : j.disabled = t) : "" !== p && (r || i || (j.role = "button", j.tabIndex = null != a ? a : 0), t && (j["aria-disabled"] = t, j.tabIndex = o ? null != a ? a : 0 : -1)), {
                                getRootProps: function() {
                                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        o = { ...(0, eo.Z)(e),
                                            ...(0, eo.Z)(t)
                                        },
                                        r = {
                                            type: u,
                                            ...o,
                                            ...j,
                                            ...t,
                                            onBlur: m(o),
                                            onClick: k(o),
                                            onFocus: b(o),
                                            onKeyDown: w(o),
                                            onKeyUp: C(o),
                                            onMouseDown: y(o),
                                            onMouseLeave: v(o),
                                            ref: P
                                        };
                                    return delete r.onFocusVisible, r
                                },
                                focusVisible: f,
                                setFocusVisible: h,
                                active: s,
                                rootRef: P
                            }
                        }({
                            disabled: r,
                            focusableWhenDisabled: !d,
                            type: "button"
                        }), y = (0, G.default)(a, o, m), w = void 0 !== s ? c(s) : void 0;
                        return {
                            getRootProps: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = (0, eo.Z)(e);
                                return { ...e,
                                    ... function(e = {}) {
                                        let t = { ...e,
                                            ...h(e)
                                        };
                                        return { ...t,
                                            ...v(t)
                                        }
                                    }(t),
                                    role: "tab",
                                    "aria-controls": w,
                                    "aria-selected": x,
                                    id: i,
                                    ref: y
                                }
                            },
                            active: b,
                            focusVisible: _,
                            highlighted: p,
                            index: g,
                            rootRef: y,
                            selected: x || s === u,
                            setFocusVisible: k,
                            totalTabsCount: f
                        }
                    }({ ...e,
                        rootRef: x,
                        value: f
                    }), k = { ...e,
                        active: v,
                        disabled: i,
                        highlighted: m,
                        selected: b
                    }, y = eb(k), w = null !== (o = g.root) && void 0 !== o ? o : "button", C = (0, T.default)({
                        elementType: w,
                        getSlotProps: _,
                        externalSlotProps: s.root,
                        externalForwardedProps: h,
                        additionalProps: {
                            ref: t
                        },
                        ownerState: k,
                        className: y.root
                    });
                    return (0, r.jsx)(w, { ...C,
                        children: a
                    })
                }),
                ek = (0, h.ZP)(e_, {
                    shouldForwardProp: e => "useActiveStyles" !== e && "index" !== e
                })(e => {
                    let {
                        useActiveStyles: t,
                        index: o,
                        theme: r
                    } = e;
                    return {
                        "&:first-of-type": {
                            borderTopLeftRadius: "10px",
                            borderTopRightRadius: "10px"
                        },
                        "&:focus-visible": {
                            outline: "2px solid -webkit-focus-ring-color",
                            outlineOffset: "2px"
                        },
                        "&:last-of-type": {
                            borderBottomLeftRadius: "10px",
                            borderBottomRightRadius: "10px"
                        },
                        borderBottom: "1px solid ".concat(x.gpS),
                        borderImageWidth: 0,
                        borderLeft: "1px solid ".concat(x.gpS),
                        borderRight: "1px solid ".concat(x.gpS),
                        borderTop: 0 !== o ? "none" : "1px solid ".concat(x.gpS),
                        height: "100%",
                        minHeight: "48px",
                        overflow: "hidden",
                        padding: 0,
                        width: "100%",
                        [r.breakpoints.up("xl")]: {
                            "@media (prefers-reduced-motion: no-preference)": {
                                borderBottom: t ? "1px solid transparent" : "1px solid ".concat(x.gpS),
                                borderLeft: t ? "1px solid transparent" : "1px solid ".concat(x.gpS),
                                borderRight: t ? "1px solid transparent" : "1px solid ".concat(x.gpS),
                                borderTop: t || 0 !== o ? "1px solid transparent" : "1px solid ".concat(x.gpS)
                            },
                            overflow: t ? "visible" : "hidden"
                        }
                    }
                }),
                ey = e => {
                    let {
                        activeAccordion: t,
                        bulletDetailCards: o,
                        config: n,
                        content: a,
                        icons: i,
                        onUpdateActiveAccordion: u
                    } = e, [c, s] = (0, l.useState)();
                    if (!n || !a) return null;
                    let g = (0, d.d)(n.active_colors.icon_background_color),
                        f = (0, d.d)(n.active_colors.text_and_background_color),
                        h = n.active_colors.text_and_background_color.text_color.hex,
                        p = (0, d.d)(n.default_colors.icon_background_color),
                        x = (0, d.d)(n.default_colors.text_and_background_color),
                        v = n.default_colors.text_and_background_color.text_color.hex,
                        m = P(a.accordion, o);
                    return (0, r.jsx)(z, {
                        onChange: (e, o) => {
                            let r = null == o ? void 0 : o.toString();
                            r && (t.desktop === r && void 0 !== t.mobile ? u(r, void 0) : u(r, r))
                        },
                        orientation: "vertical",
                        value: t.desktop,
                        children: (0, r.jsx)(ef, {
                            children: m.map((e, o) => {
                                if (!e.accordion_title) return null;
                                let l = e._metadata.uid,
                                    n = e.bullet_detail_ref[0].uid,
                                    a = t.desktop === n || c === n;
                                return (0, r.jsx)(ek, {
                                    onMouseEnter: () => s(n),
                                    "aria-controls": "tabpanel-".concat(n),
                                    id: "tab-".concat(n),
                                    index: o,
                                    onMouseLeave: () => s(void 0),
                                    useActiveStyles: a,
                                    value: n,
                                    children: (0, r.jsx)(_, {
                                        activeIconBackgroundColor: g,
                                        activeTextBackgroundColor: f,
                                        defaultIconBackgroundColor: p,
                                        defaultTextBackgroundColor: x,
                                        activeTextColor: h,
                                        defaultTextColor: v,
                                        icons: i[l],
                                        title: e.accordion_title,
                                        useActiveStyles: a
                                    })
                                }, l)
                            })
                        })
                    })
                },
                ew = (0, h.ZP)(c.default)(() => ({
                    display: "flex",
                    gap: x.ODt
                })),
                eC = (0, h.ZP)(c.default)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        display: "flex",
                        flex: "1 1 auto",
                        flexDirection: "column",
                        gap: x.iPk,
                        [t.breakpoints.up("lg")]: {
                            flex: 1
                        }
                    }
                }),
                eP = (0, h.ZP)(c.default)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        flex: 2,
                        [t.breakpoints.down("lg")]: {
                            display: "none"
                        }
                    }
                }),
                ej = (0, h.ZP)(c.default)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        [t.breakpoints.up("lg")]: {
                            display: "none"
                        }
                    }
                }),
                eR = (0, h.ZP)(c.default)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        [t.breakpoints.down("lg")]: {
                            display: "none"
                        }
                    }
                }),
                eT = e => {
                    let {
                        bulletDetailAccordionEntry: t,
                        bulletDetailCardEntries: o,
                        composableWindow: a,
                        svgIconsMap: d = {}
                    } = e, c = o && i({
                        bulletDetailCardEntries: o,
                        composableWindow: a
                    }), s = c && Object.keys(c)[0], [g, f] = (0, l.useState)({
                        desktop: s,
                        mobile: void 0
                    });
                    if (!t || !c) return null;
                    let h = t.accordion_section_config,
                        p = t.accordion_section_content,
                        x = Object.keys(d).reduce((e, t) => (e[t] = (0, R.E)(d[t]), e), {}),
                        v = p.header.map(e => e.markdown_text),
                        m = { ...h.header_color.header_background_color,
                            text_color: {
                                hex: ""
                            }
                        },
                        b = (e, t) => {
                            f({
                                desktop: e,
                                mobile: t
                            })
                        };
                    return (0, r.jsxs)(ew, {
                        "data-testid": n.l,
                        children: [(0, r.jsxs)(eC, {
                            children: [(0, r.jsx)(u.J, {
                                alignment: "left",
                                colorConfig: m,
                                isEnableSeeMoreSeeLess: !1,
                                sectionType: "auto",
                                textSections: v
                            }), (0, r.jsx)(ej, {
                                children: (0, r.jsx)(j, {
                                    activeAccordion: g,
                                    bulletDetailCards: c,
                                    config: h,
                                    content: p,
                                    icons: x,
                                    onUpdateActiveAccordion: b
                                })
                            }), (0, r.jsx)(eR, {
                                children: (0, r.jsx)(ey, {
                                    activeAccordion: g,
                                    bulletDetailCards: c,
                                    config: h,
                                    content: p,
                                    icons: x,
                                    onUpdateActiveAccordion: b
                                })
                            })]
                        }), (0, r.jsx)(eP, {
                            "aria-labelledby": "tab-".concat(g.desktop),
                            id: "tabpanel-".concat(g.desktop),
                            role: "tabpanel",
                            children: c[g.desktop]
                        })]
                    })
                }
        },
        24870: function(e, t, o) {
            o.d(t, {
                l: function() {
                    return r
                }
            });
            let r = "BulletDetailAccordion"
        },
        74748: function(e, t, o) {
            o.d(t, {
                E: function() {
                    return es
                }
            });
            var r = o(57437),
                l = o(79715),
                n = o(89766),
                a = o(7439),
                i = o(95656),
                u = o(16210),
                d = o(7302);
            let c = (0, u.ZP)(i.default, {
                    shouldForwardProp: e => "backgroundColor" !== e && "color" !== e
                })(e => {
                    let {
                        backgroundColor: t,
                        color: o,
                        theme: r
                    } = e;
                    return {
                        background: t,
                        color: o,
                        padding: "".concat(d.vdF, " ").concat(d.iPk),
                        textAlign: "left",
                        [r.breakpoints.up("md")]: {
                            padding: "".concat(d.iPk, " ").concat(d.ODt)
                        }
                    }
                }),
                s = e => {
                    var t;
                    let {
                        config: o,
                        disclaimer: l
                    } = e;
                    if (!l) return null;
                    let i = o.find(e => "disclaimer_color" === e.type),
                        u = i && (0, n.d)(i.font_background_color),
                        d = i && (null == (t = i.font_background_color.text_color) ? void 0 : t.hex);
                    return (0, r.jsx)(r.Fragment, {
                        children: l && (0, r.jsx)(c, {
                            backgroundColor: u,
                            color: d,
                            children: (0, r.jsx)(a.MarketingTypography, {
                                color: d,
                                variant: "disclaimer",
                                children: l
                            })
                        })
                    })
                },
                g = e => void 0 !== e.feature_icons,
                f = e => void 0 !== e.button_block,
                h = e => void 0 !== e.image_block,
                p = e => void 0 !== e.square_image_block;
            var x = o(70851);
            let v = (0, u.ZP)(x.Button, {
                    shouldForwardProp: e => "backgroundColor" !== e && "color" !== e
                })(e => {
                    let {
                        backgroundColor: t,
                        color: o
                    } = e;
                    return {
                        alignSelf: "center",
                        background: t,
                        color: o,
                        fontWeight: d.cQB,
                        padding: "".concat(d.vdF, " ").concat(d.ODt)
                    }
                }),
                m = e => {
                    var t;
                    let {
                        buttonBlock: o,
                        entryTitle: a
                    } = e;
                    if (!o) return null;
                    let i = (0, n.d)(o.font_and_button_color),
                        u = o.button_url.title,
                        d = o.button_url.url;
                    return (0, r.jsx)(l.Analytics, {
                        analyticData: {
                            adItem: {
                                style: "bullet detail card",
                                title: u,
                                url: d
                            },
                            itemCuration: "costco",
                            title: a
                        },
                        children: (0, r.jsx)(v, {
                            backgroundColor: i,
                            color: null == (t = o.font_and_button_color.text_color) ? void 0 : t.hex,
                            href: d,
                            children: u
                        })
                    })
                };
            var b = o(77643),
                _ = o(72547),
                k = o(13698),
                y = o(39900),
                w = o(95666),
                C = o(99403),
                P = o(50866),
                j = o(92144);
            let R = (0, u.ZP)(i.default, {
                    shouldForwardProp: e => "backgroundColor" !== e
                })(e => {
                    let {
                        backgroundColor: t
                    } = e;
                    return {
                        background: t,
                        display: "flex",
                        flexDirection: "column",
                        gap: d.vdF,
                        paddingTop: d.vdF
                    }
                }),
                T = (0, u.ZP)(i.default, {
                    shouldForwardProp: e => "alignment" !== e
                })(e => {
                    let {
                        alignment: t
                    } = e;
                    return {
                        alignItems: "center",
                        display: "flex",
                        gap: d.vdF,
                        justifyContent: "center" === t ? "center" : "flex-start",
                        minHeight: "38px"
                    }
                }),
                S = (0, u.ZP)(i.default)(() => ({
                    alignItems: "center",
                    display: "flex",
                    height: 30,
                    justifyContent: "center",
                    width: 30
                })),
                D = (0, u.ZP)(i.default)(() => ({
                    alignItems: "flex-start",
                    display: "flex",
                    flexDirection: "column"
                })),
                M = (0, u.ZP)(j.Text, {
                    shouldForwardProp: e => "color" !== e
                })(e => {
                    let {
                        color: t
                    } = e;
                    return {
                        color: null != t ? t : d.JSR
                    }
                }),
                V = (0, u.ZP)(j.Text, {
                    shouldForwardProp: e => "color" !== e
                })(e => {
                    let {
                        color: t
                    } = e;
                    return {
                        color: null != t ? t : d.VeI
                    }
                }),
                I = (0, u.ZP)(j.Text, {
                    shouldForwardProp: e => "backgroundColor" !== e && "color" !== e
                })(e => {
                    let {
                        backgroundColor: t,
                        color: o
                    } = e;
                    return {
                        background: null != t ? t : d.Os0,
                        borderRadius: d.xbU,
                        color: null != o ? o : d.W3Q,
                        fontSize: "10px",
                        fontWeight: d.cQB,
                        lineHeight: "14px",
                        padding: "".concat(d.M7t, " ").concat(d.vdF)
                    }
                }),
                A = e => {
                    let {
                        alignment: t,
                        composableWindow: o,
                        icon: l,
                        iconAltText: n,
                        primaryBackgroundColor: a,
                        primaryTextColor: i,
                        rating: u,
                        secondaryTextColor: d,
                        subtitle: c,
                        tagBackgroundColor: s,
                        tagText: g,
                        tagTextColor: f,
                        title: h
                    } = e, {
                        imageDomainSwapConfig: p
                    } = (0, _.p)(), x = l && (0, b.h8)(l, 30, 30), v = u ? (0, k.yl)({
                        devFieldKey: "ratingAriaLabel",
                        composableWindow: o,
                        templateVariables: {
                            itemRating: null == u ? void 0 : u.toString(),
                            maxRating: "5"
                        }
                    }) : "";
                    return (0, r.jsxs)(R, {
                        backgroundColor: a,
                        children: [(0, r.jsxs)(T, {
                            alignment: t,
                            children: [(0, r.jsx)(S, {
                                children: (0, r.jsx)(w.Image, {
                                    src: (0, y.w)(null == l ? void 0 : l.url, p),
                                    sx: {
                                        height: null == x ? void 0 : x.height,
                                        width: null == x ? void 0 : x.width
                                    },
                                    alt: n,
                                    loading: "lazy"
                                })
                            }), (0, r.jsxs)(D, {
                                children: [(0, r.jsx)(M, {
                                    color: i,
                                    variant: "t6",
                                    children: h
                                }), c && (0, r.jsx)(V, {
                                    color: d,
                                    variant: "t7",
                                    children: c
                                })]
                            }), g && (0, r.jsx)(I, {
                                backgroundColor: s,
                                color: f,
                                children: g
                            }), u && (0, r.jsx)(C.Rating, {
                                ariaLabel: v,
                                displayAvgRatingAsText: !1,
                                displayReviewCount: !1,
                                value: u
                            })]
                        }), (0, r.jsx)(P.Divider, {})]
                    })
                },
                Z = (0, u.ZP)(i.default)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        padding: "0 ".concat(d.iPk),
                        [t.breakpoints.up("md")]: {
                            padding: "0 ".concat(d.ODt)
                        }
                    }
                }),
                E = (0, u.ZP)(i.default)(() => ({
                    alignContent: "center",
                    display: "flex",
                    justifyContent: "center",
                    padding: "".concat(d.ODt, " 0")
                })),
                F = (0, u.ZP)(i.default)(() => ({
                    padding: "".concat(d.vdF, " 0")
                })),
                B = e => {
                    var t, o, l;
                    let {
                        composableWindow: i,
                        config: u,
                        content: d,
                        entryTitle: c
                    } = e;
                    if (!u || !d) return null;
                    let s = u.alignment,
                        h = u.tile_color.primary_font_and_background_color,
                        p = null == (t = h.text_color) ? void 0 : t.hex,
                        x = (0, n.d)(h),
                        v = null == (o = u.tile_color.secondary_font_color) ? void 0 : o.hex,
                        _ = u.tile_color.feature_tag_rating_font_and_background_color,
                        k = null == (l = _.text_color) ? void 0 : l.hex,
                        y = (0, n.d)(_);
                    return (0, r.jsx)(Z, {
                        children: d.map(e => {
                            var t, o, l;
                            return (0, b.y_)(e) ? (0, r.jsx)(F, {
                                children: (0, r.jsx)(a.MarketingTypography, {
                                    color: (null == (o = null == (t = e.markdown_text.color) ? void 0 : t.text_color) ? void 0 : o.hex) || p,
                                    component: e.markdown_text.select_semantics_type,
                                    sx: {
                                        backgroundColor: e.markdown_text.color ? (0, n.d)(e.markdown_text.color) : x,
                                        textAlign: s
                                    },
                                    isMarkdown: !0,
                                    variant: e.markdown_text.select_text_type,
                                    children: e.markdown_text.markdown_text
                                })
                            }, null == (l = e.markdown_text._metadata) ? void 0 : l.uid) : g(e) ? (0, r.jsx)(A, {
                                alignment: s,
                                composableWindow: i,
                                icon: e.feature_icons.icon_image[0],
                                iconAltText: e.feature_icons.icon_image_alt_text,
                                primaryBackgroundColor: x,
                                primaryTextColor: p,
                                rating: e.feature_icons.feature_rating,
                                secondaryTextColor: v,
                                subtitle: e.feature_icons.feature_subtitle,
                                tagBackgroundColor: y,
                                tagText: e.feature_icons.feature_tag_text,
                                tagTextColor: k,
                                title: e.feature_icons.feature_title
                            }, e.feature_icons._metadata.uid) : f(e) ? (0, r.jsx)(E, {
                                children: (0, r.jsx)(m, {
                                    buttonBlock: e.button_block,
                                    entryTitle: c
                                })
                            }, e.button_block._metadata.uid) : null
                        })
                    })
                },
                L = (0, u.ZP)(i.default, {
                    shouldForwardProp: e => "backgroundColor" !== e
                })(e => {
                    let {
                        backgroundColor: t,
                        theme: o
                    } = e;
                    return {
                        background: t,
                        display: "flex",
                        flexDirection: "column",
                        gap: d.ODt,
                        height: "100%",
                        justifyContent: "center",
                        padding: "".concat(d.ODt, " ").concat(d.oFH),
                        textAlign: "center",
                        [o.breakpoints.up("md")]: {
                            padding: "".concat(d.aiS, " ").concat(d.ODt)
                        }
                    }
                }),
                O = (0, u.ZP)(i.default)(() => ({
                    alignContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    gap: d.ODt,
                    justifyContent: "center"
                })),
                N = (0, u.ZP)(i.default)(() => ({
                    display: "flex",
                    flexDirection: "column",
                    gap: d.vdF
                })),
                z = e => {
                    var t;
                    let {
                        config: o,
                        content: l,
                        entryTitle: i
                    } = e;
                    if (!l || 0 === l.length) return null;
                    let u = o.find(e => "feature_footer_color" === e.type),
                        d = u && (0, n.d)(u.font_background_color),
                        c = u && (null == (t = u.font_background_color.text_color) ? void 0 : t.hex),
                        s = l.filter(b.y_),
                        g = l.filter(f);
                    return (0, r.jsxs)(L, {
                        backgroundColor: d,
                        children: [s.length > 0 && (0, r.jsx)(N, {
                            children: s.map(e => {
                                var t;
                                let {
                                    markdown_text: {
                                        select_semantics_type: o,
                                        select_text_type: l,
                                        color: i,
                                        markdown_text: u,
                                        _metadata: s
                                    }
                                } = e, g = i ? (0, n.d)(i) : d, f = (null == (t = null == i ? void 0 : i.text_color) ? void 0 : t.hex) || c;
                                return (0, r.jsx)(a.MarketingTypography, {
                                    sx: {
                                        backgroundColor: g,
                                        textWrap: "balance"
                                    },
                                    color: f,
                                    component: o,
                                    isMarkdown: !0,
                                    variant: l,
                                    children: u
                                }, null == s ? void 0 : s.uid)
                            })
                        }), g.length > 0 && (0, r.jsx)(O, {
                            children: g.map(e => {
                                var t, o;
                                if (f(e)) return (0, r.jsx)(m, {
                                    buttonBlock: e.button_block,
                                    entryTitle: i
                                }, null == (o = null == (t = e.button_block) ? void 0 : t._metadata) ? void 0 : o.uid)
                            })
                        })]
                    })
                };
            var H = o(42911);
            let U = (0, u.ZP)(j.Text, {
                    shouldForwardProp: e => "backgroundColorDesktop" !== e && "backgroundColorMobile" !== e && "colorDesktop" !== e && "colorMobile" !== e
                })(e => {
                    let {
                        backgroundColorDesktop: t,
                        backgroundColorMobile: o,
                        colorDesktop: r,
                        colorMobile: l,
                        theme: n
                    } = e;
                    return {
                        background: o,
                        color: l,
                        fontSize: d.aQT,
                        lineHeight: d.Qoq,
                        padding: d.iPk,
                        textAlign: "center",
                        [n.breakpoints.up("lg")]: {
                            background: null != t ? t : o,
                            color: null != r ? r : l,
                            fontSize: d.jJ_
                        }
                    }
                }),
                Q = e => {
                    var t, o, l;
                    let {
                        topStrip: a
                    } = e;
                    if (!a) return null;
                    let i = a.font_and_background_color_desktop && (0, n.d)(a.font_and_background_color_desktop),
                        u = null == (o = null == (t = a.font_and_background_color_desktop) ? void 0 : t.text_color) ? void 0 : o.hex,
                        d = (0, n.d)(a.font_and_background_color),
                        c = null == (l = a.font_and_background_color.text_color) ? void 0 : l.hex,
                        s = a.text;
                    return (0, r.jsx)(U, {
                        backgroundColorDesktop: i,
                        backgroundColorMobile: d,
                        colorDesktop: u,
                        colorMobile: c,
                        component: "h2",
                        children: (0, r.jsx)(H.$, {
                            markdown: s
                        })
                    })
                };
            var G = o(31691);
            let W = (0, u.ZP)(i.default)(() => ({
                    display: "flex",
                    flexDirection: "column"
                })),
                q = (0, u.ZP)(i.default)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        [t.breakpoints.up("xl")]: {
                            display: "none"
                        }
                    }
                }),
                K = (0, u.ZP)(i.default)(() => ({
                    display: "flex",
                    flexDirection: "column",
                    gap: d.oFH,
                    padding: "".concat(d.iPk, " ").concat(d.oFH)
                }));
            (0, u.ZP)(j.Text, {
                shouldForwardProp: e => "backgroundColor" !== e && "color" !== e
            })(e => {
                let {
                    backgroundColor: t,
                    color: o
                } = e;
                return {
                    background: t,
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                    color: o,
                    fontSize: d.aQT,
                    lineHeight: d.Qoq,
                    padding: d.iPk,
                    textAlign: "center"
                }
            });
            let J = (e, t) => {
                    let o = (0, G.Z)();
                    return {
                        aspectRatio: e && t ? "".concat(t, " / ").concat(e) : "16 / 9",
                        width: "100%",
                        [o.breakpoints.up("xl")]: {
                            display: "none"
                        }
                    }
                },
                X = (e, t) => {
                    let o = (0, G.Z)();
                    return {
                        aspectRatio: e && t ? "".concat(t, " / ").concat(e) : "4 / 3",
                        width: "100%",
                        [o.breakpoints.down("xl")]: {
                            display: "none"
                        }
                    }
                },
                $ = e => {
                    var t, o, l, u, d, c, s, g, f, x, v, m, k;
                    let {
                        config: C,
                        content: P,
                        topStrip: j
                    } = e, {
                        imageDomainSwapConfig: R
                    } = (0, _.p)();
                    if (!C && !P) return null;
                    let T = (0, n.d)(C.header_color.font_and_background_color),
                        S = null == (t = C.header_color.font_and_background_color.text_color) ? void 0 : t.hex,
                        D = C.alignment,
                        M = P.filter(h),
                        V = P.filter(p),
                        I = null == (l = null == (o = M[0]) ? void 0 : o.image_block) ? void 0 : l.image[0],
                        A = null == (d = null == (u = V[0]) ? void 0 : u.square_image_block) ? void 0 : d.image[0],
                        Z = null == (s = null == (c = M[0]) ? void 0 : c.image_block) ? void 0 : s.image_alt_text,
                        E = null == (f = null == (g = V[0]) ? void 0 : g.square_image_block) ? void 0 : f.image_alt_text,
                        F = P.filter(b.y_);
                    return (0, r.jsxs)(i.default, {
                        children: [(0, r.jsxs)(W, {
                            children: [(0, r.jsx)(q, {
                                children: (0, r.jsx)(Q, {
                                    topStrip: j
                                })
                            }), (0, r.jsx)(w.Image, {
                                src: (0, y.w)(null == I ? void 0 : I.url, R),
                                alt: Z,
                                loading: "lazy",
                                sx: J(null == (x = I.dimensions) ? void 0 : x.height, null == (v = I.dimensions) ? void 0 : v.width)
                            }), (0, r.jsx)(w.Image, {
                                src: (0, y.w)(null == A ? void 0 : A.url, R),
                                alt: E,
                                loading: "lazy",
                                sx: X(null == (m = A.dimensions) ? void 0 : m.height, null == (k = A.dimensions) ? void 0 : k.width)
                            })]
                        }), F.length > 0 && (0, r.jsx)(K, {
                            children: F.map(e => {
                                var t, o, l;
                                return (0, r.jsx)(a.MarketingTypography, {
                                    color: (null == (o = null == (t = e.markdown_text.color) ? void 0 : t.text_color) ? void 0 : o.hex) || S,
                                    component: e.markdown_text.select_semantics_type,
                                    sx: {
                                        background: e.markdown_text.color ? (0, n.d)(e.markdown_text.color) : T,
                                        textAlign: D
                                    },
                                    isMarkdown: !0,
                                    variant: e.markdown_text.select_text_type,
                                    children: e.markdown_text.markdown_text
                                }, null == (l = e.markdown_text._metadata) ? void 0 : l.uid)
                            })
                        })]
                    })
                };
            var Y = o(24870);
            let ee = "".concat(Y.l, "-BulletDetailCard");
            var et = o(45008);

            function eo() {
                let e = (0, et._)(["\n    grid-area: header;\n"]);
                return eo = function() {
                    return e
                }, e
            }

            function er() {
                let e = (0, et._)(["\n    grid-area: feature;\n"]);
                return er = function() {
                    return e
                }, e
            }

            function el() {
                let e = (0, et._)(["\n    grid-area: footer;\n"]);
                return el = function() {
                    return e
                }, e
            }
            let en = (0, u.ZP)(i.default)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        border: "1px solid ".concat(d.gpS),
                        display: "flex",
                        flexDirection: "column",
                        minHeight: "877px",
                        [t.breakpoints.up("lg")]: {
                            borderRadius: "8px",
                            overflow: "hidden"
                        }
                    }
                }),
                ea = (0, u.ZP)(i.default)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        display: "none",
                        [t.breakpoints.up("xl")]: {
                            display: "block"
                        }
                    }
                }),
                ei = (0, u.ZP)(i.default)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        flexGrow: 1,
                        [t.breakpoints.up("xl")]: {
                            display: "grid",
                            gridTemplateAreas: '\n            "header feature"\n            "footer feature"\n        ',
                            gridTemplateColumns: "1fr 1fr",
                            gridTemplateRows: "min-content 1fr"
                        }
                    }
                }),
                eu = (0, u.ZP)(i.default)(eo()),
                ed = (0, u.ZP)(i.default)(er()),
                ec = (0, u.ZP)(i.default)(el()),
                es = e => {
                    var t;
                    let {
                        composableWindow: o,
                        entry: n
                    } = e;
                    if (!n) return null;
                    let a = n.header_section_config,
                        i = n.header_section_content,
                        u = n.top_strip,
                        d = n.feature_section_config,
                        c = n.feature_section_content,
                        g = n.feature_footer_disclaimer_font_color_background_color,
                        f = n.feature_footer_content,
                        h = n.disclaimer;
                    return (0, r.jsx)(en, {
                        "data-testid": ee,
                        children: (0, r.jsxs)(l.Analytics, {
                            analyticData: {
                                doNotTrack: null == (t = n.privacy_toggle) ? void 0 : t.disable_third_party_tracking
                            },
                            children: [(0, r.jsx)(ea, {
                                children: (0, r.jsx)(Q, {
                                    topStrip: u
                                })
                            }), (0, r.jsxs)(ei, {
                                children: [(0, r.jsx)(eu, {
                                    children: (0, r.jsx)($, {
                                        config: a,
                                        content: i,
                                        topStrip: u
                                    })
                                }), (0, r.jsx)(ed, {
                                    children: (0, r.jsx)(B, {
                                        composableWindow: o,
                                        config: d,
                                        content: c,
                                        entryTitle: n.title
                                    })
                                }), (0, r.jsx)(ec, {
                                    children: (0, r.jsx)(z, {
                                        config: g,
                                        content: f,
                                        entryTitle: n.title
                                    })
                                })]
                            }), (0, r.jsx)(s, {
                                config: g,
                                disclaimer: h
                            })]
                        })
                    })
                };
            es.displayName = "BulletDetailCardAccordion"
        },
        77643: function(e, t, o) {
            o.d(t, {
                Di: function() {
                    return a
                },
                Gw: function() {
                    return n
                },
                h8: function() {
                    return r
                },
                p0: function() {
                    return i
                },
                y_: function() {
                    return l
                }
            });
            let r = (e, t, o) => {
                    let {
                        height: r,
                        width: l
                    } = e.dimensions, n = l / r, a = r, i = l;
                    return a > t && (i = (a = t) * n), i > o && (a = (i = o) / n), {
                        height: a,
                        width: i
                    }
                },
                l = e => void 0 !== e.markdown_text,
                n = (e, t) => {
                    let o = new URL(e);
                    return t.forEach(e => {
                        o.searchParams.delete(e)
                    }), o.toString()
                },
                a = async e => {
                    try {
                        let t = await fetch(e);
                        if (!t.ok) throw Error("Failed to fetch SVG");
                        return await t.text()
                    } catch (e) {
                        return console.error("Error fetching SVG:", e), ""
                    }
                },
                i = (e, t) => {
                    let o = new DOMParser().parseFromString(e, "image/svg+xml"),
                        r = o.getElementsByTagName("parsererror");
                    return r.length > 0 ? (console.error("Error parsing SVG:", r[0].textContent), "") : (o.querySelectorAll("path, circle, rect, polyline, polygon").forEach(e => {
                        e.getAttribute("fill") && "none" !== e.getAttribute("fill") || e.setAttribute("fill", t)
                    }), o.documentElement.setAttribute("width", "100%"), o.documentElement.setAttribute("height", "100%"), new XMLSerializer().serializeToString(o.documentElement))
                }
        }
    }
]);