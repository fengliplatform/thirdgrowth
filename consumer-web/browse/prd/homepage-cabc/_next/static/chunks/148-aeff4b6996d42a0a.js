"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [148], {
        10148: function(e, t, r) {
            r.d(t, {
                Tabs: function() {
                    return ef
                }
            });
            var l = r(57437),
                o = r(2265);
            let n = (0, o.forwardRef)((e, t) => {
                let {
                    TabWrapper: r,
                    tabWrapperProps: n,
                    children: i,
                    ...a
                } = e;
                return i ? r ? (0, l.jsx)(r, {
                    ref: t,
                    ...n,
                    children: (0, o.cloneElement)(i, { ...a
                    })
                }) : (0, o.cloneElement)(i, { ...a,
                    ref: t
                }) : null
            });
            n.displayName = "ForwardedTabWrapper";
            var i = r(68139),
                a = r(61994),
                s = r(20801),
                c = r(72276),
                d = r(85657),
                u = r(16210),
                p = r(21086),
                f = r(37053),
                b = r(94143),
                h = r(50738);

            function v(e) {
                return (0, h.ZP)("MuiTab", e)
            }
            let m = (0, b.Z)("MuiTab", ["root", "labelIcon", "textColorInherit", "textColorPrimary", "textColorSecondary", "selected", "disabled", "fullWidth", "wrapped", "iconWrapper", "icon"]),
                x = e => {
                    let {
                        classes: t,
                        textColor: r,
                        fullWidth: l,
                        wrapped: o,
                        icon: n,
                        label: i,
                        selected: a,
                        disabled: c
                    } = e, u = {
                        root: ["root", n && i && "labelIcon", "textColor".concat((0, d.Z)(r)), l && "fullWidth", o && "wrapped", a && "selected", c && "disabled"],
                        icon: ["iconWrapper", "icon"]
                    };
                    return (0, s.Z)(u, v, t)
                },
                g = (0, u.ZP)(c.Z, {
                    name: "MuiTab",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: r
                        } = e;
                        return [t.root, r.label && r.icon && t.labelIcon, t["textColor".concat((0, d.Z)(r.textColor))], r.fullWidth && t.fullWidth, r.wrapped && t.wrapped, {
                            ["& .".concat(m.iconWrapper)]: t.iconWrapper
                        }, {
                            ["& .".concat(m.icon)]: t.icon
                        }]
                    }
                })((0, p.Z)(e => {
                    let {
                        theme: t
                    } = e;
                    return { ...t.typography.button,
                        maxWidth: 360,
                        minWidth: 90,
                        position: "relative",
                        minHeight: 48,
                        flexShrink: 0,
                        padding: "12px 16px",
                        overflow: "hidden",
                        whiteSpace: "normal",
                        textAlign: "center",
                        lineHeight: 1.25,
                        variants: [{
                            props: e => {
                                let {
                                    ownerState: t
                                } = e;
                                return t.label && ("top" === t.iconPosition || "bottom" === t.iconPosition)
                            },
                            style: {
                                flexDirection: "column"
                            }
                        }, {
                            props: e => {
                                let {
                                    ownerState: t
                                } = e;
                                return t.label && "top" !== t.iconPosition && "bottom" !== t.iconPosition
                            },
                            style: {
                                flexDirection: "row"
                            }
                        }, {
                            props: e => {
                                let {
                                    ownerState: t
                                } = e;
                                return t.icon && t.label
                            },
                            style: {
                                minHeight: 72,
                                paddingTop: 9,
                                paddingBottom: 9
                            }
                        }, {
                            props: e => {
                                let {
                                    ownerState: t,
                                    iconPosition: r
                                } = e;
                                return t.icon && t.label && "top" === r
                            },
                            style: {
                                ["& > .".concat(m.icon)]: {
                                    marginBottom: 6
                                }
                            }
                        }, {
                            props: e => {
                                let {
                                    ownerState: t,
                                    iconPosition: r
                                } = e;
                                return t.icon && t.label && "bottom" === r
                            },
                            style: {
                                ["& > .".concat(m.icon)]: {
                                    marginTop: 6
                                }
                            }
                        }, {
                            props: e => {
                                let {
                                    ownerState: t,
                                    iconPosition: r
                                } = e;
                                return t.icon && t.label && "start" === r
                            },
                            style: {
                                ["& > .".concat(m.icon)]: {
                                    marginRight: t.spacing(1)
                                }
                            }
                        }, {
                            props: e => {
                                let {
                                    ownerState: t,
                                    iconPosition: r
                                } = e;
                                return t.icon && t.label && "end" === r
                            },
                            style: {
                                ["& > .".concat(m.icon)]: {
                                    marginLeft: t.spacing(1)
                                }
                            }
                        }, {
                            props: {
                                textColor: "inherit"
                            },
                            style: {
                                color: "inherit",
                                opacity: .6,
                                ["&.".concat(m.selected)]: {
                                    opacity: 1
                                },
                                ["&.".concat(m.disabled)]: {
                                    opacity: (t.vars || t).palette.action.disabledOpacity
                                }
                            }
                        }, {
                            props: {
                                textColor: "primary"
                            },
                            style: {
                                color: (t.vars || t).palette.text.secondary,
                                ["&.".concat(m.selected)]: {
                                    color: (t.vars || t).palette.primary.main
                                },
                                ["&.".concat(m.disabled)]: {
                                    color: (t.vars || t).palette.text.disabled
                                }
                            }
                        }, {
                            props: {
                                textColor: "secondary"
                            },
                            style: {
                                color: (t.vars || t).palette.text.secondary,
                                ["&.".concat(m.selected)]: {
                                    color: (t.vars || t).palette.secondary.main
                                },
                                ["&.".concat(m.disabled)]: {
                                    color: (t.vars || t).palette.text.disabled
                                }
                            }
                        }, {
                            props: e => {
                                let {
                                    ownerState: t
                                } = e;
                                return t.fullWidth
                            },
                            style: {
                                flexShrink: 1,
                                flexGrow: 1,
                                flexBasis: 0,
                                maxWidth: "none"
                            }
                        }, {
                            props: e => {
                                let {
                                    ownerState: t
                                } = e;
                                return t.wrapped
                            },
                            style: {
                                fontSize: t.typography.pxToRem(12)
                            }
                        }]
                    }
                })),
                y = o.forwardRef(function(e, t) {
                    let r = (0, f.i)({
                            props: e,
                            name: "MuiTab"
                        }),
                        {
                            className: n,
                            disabled: i = !1,
                            disableFocusRipple: s = !1,
                            fullWidth: c,
                            icon: d,
                            iconPosition: u = "top",
                            indicator: p,
                            label: b,
                            onChange: h,
                            onClick: v,
                            onFocus: m,
                            selected: y,
                            selectionFollowsFocus: S,
                            textColor: w = "inherit",
                            value: B,
                            wrapped: T = !1,
                            ...Z
                        } = r,
                        C = { ...r,
                            disabled: i,
                            disableFocusRipple: s,
                            selected: y,
                            icon: !!d,
                            iconPosition: u,
                            label: !!b,
                            fullWidth: c,
                            textColor: w,
                            wrapped: T
                        },
                        P = x(C),
                        E = d && b && o.isValidElement(d) ? o.cloneElement(d, {
                            className: (0, a.Z)(P.icon, d.props.className)
                        }) : d;
                    return (0, l.jsxs)(g, {
                        focusRipple: !s,
                        className: (0, a.Z)(P.root, n),
                        ref: t,
                        role: "tab",
                        "aria-selected": y,
                        disabled: i,
                        onClick: e => {
                            !y && h && h(e, B), v && v(e)
                        },
                        onFocus: e => {
                            S && !y && h && h(e, B), m && m(e)
                        },
                        ownerState: C,
                        tabIndex: y ? 0 : -1,
                        ...Z,
                        children: ["top" === u || "start" === u ? (0, l.jsxs)(o.Fragment, {
                            children: [E, b]
                        }) : (0, l.jsxs)(o.Fragment, {
                            children: [b, E]
                        }), p]
                    })
                });
            var S = r(7302);
            let w = (0, u.ZP)(y, {
                shouldForwardProp: e => "isLastTab" !== e
            })(e => ({
                borderRadius: "".concat(S.xbU, " ").concat(S.xbU, " 0px 0px"),
                color: S.ekx,
                fontSize: S.YzP,
                fontWeight: S.rWq,
                marginRight: e.isLastTab ? S.vdF : "0px",
                minHeight: "33px",
                minWidth: "60px",
                padding: "".concat(S.vdF, " ").concat(S.vdF, " ").concat(S.M7t, " ").concat(S.vdF),
                textTransform: "none",
                "&::after": {
                    content: "attr(data-text)",
                    fontWeight: S.cQB,
                    height: 0,
                    overflow: "hidden",
                    pointerEvents: "none",
                    userSelect: "none",
                    visibility: "hidden",
                    "aria-hidden": "true",
                    "@media speech": {
                        display: "none"
                    }
                },
                "&:hover": {
                    backgroundColor: S.azt,
                    color: S.ekx,
                    fontWeight: S.cQB
                },
                "&.Mui-selected": {
                    backgroundColor: S.azt,
                    color: S.ekx,
                    fontWeight: S.cQB
                },
                "&.Mui-focusVisible": {
                    backgroundColor: S.azt,
                    outlineOffset: "-2px",
                    outline: "2px solid -webkit-focus-ring-color"
                }
            }));
            var B = r(8060);
            let T = (0, o.forwardRef)((e, t) => {
                let {
                    ariaControls: r,
                    id: o,
                    isLastTab: n = !1,
                    label: a,
                    ...s
                } = e, {
                    trackEvent: c
                } = (0, i.rS)();
                return r && a && o ? (0, l.jsx)(w, { ...s,
                    "aria-controls": r,
                    "data-testid": (0, B.B)("Tab", o),
                    "data-text": a,
                    id: o,
                    isLastTab: n,
                    label: a,
                    onClick: e => {
                        c()
                    },
                    ref: t
                }) : null
            });
            T.displayName = "Tab";
            let Z = "TabPanel",
                C = (0, o.forwardRef)((e, t) => {
                    let {
                        ariaLabelledBy: r,
                        children: o,
                        selectedTabIndex: n,
                        id: i,
                        index: a
                    } = e;
                    return (0, l.jsx)("div", {
                        "aria-labelledby": r,
                        "data-testid": (0, B.B)(Z, i),
                        role: "tabpanel",
                        hidden: n !== a,
                        id: i,
                        ref: t,
                        tabIndex: -1,
                        children: o
                    })
                });
            C.displayName = Z;
            var P = r(95656),
                E = r(77126),
                M = r(15988),
                R = r(31691),
                W = r(24801);

            function I(e) {
                return (1 + Math.sin(Math.PI * e - Math.PI / 2)) / 2
            }
            var k = r(84217),
                j = r(77636);
            let z = {
                width: 99,
                height: 99,
                position: "absolute",
                top: -9999,
                overflow: "scroll"
            };
            var L = r(94630),
                H = (0, L.Z)((0, l.jsx)("path", {
                    d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
                }), "KeyboardArrowLeft"),
                F = (0, L.Z)((0, l.jsx)("path", {
                    d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
                }), "KeyboardArrowRight");

            function N(e) {
                return (0, h.ZP)("MuiTabScrollButton", e)
            }
            let A = (0, b.Z)("MuiTabScrollButton", ["root", "vertical", "horizontal", "disabled"]),
                X = e => {
                    let {
                        classes: t,
                        orientation: r,
                        disabled: l
                    } = e;
                    return (0, s.Z)({
                        root: ["root", r, l && "disabled"]
                    }, N, t)
                },
                D = (0, u.ZP)(c.Z, {
                    name: "MuiTabScrollButton",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: r
                        } = e;
                        return [t.root, r.orientation && t[r.orientation]]
                    }
                })({
                    width: 40,
                    flexShrink: 0,
                    opacity: .8,
                    ["&.".concat(A.disabled)]: {
                        opacity: 0
                    },
                    variants: [{
                        props: {
                            orientation: "vertical"
                        },
                        style: {
                            width: "100%",
                            height: 40,
                            "& svg": {
                                transform: "var(--TabScrollButton-svgRotate)"
                            }
                        }
                    }]
                }),
                O = o.forwardRef(function(e, t) {
                    var r, o;
                    let n = (0, f.i)({
                            props: e,
                            name: "MuiTabScrollButton"
                        }),
                        {
                            className: i,
                            slots: s = {},
                            slotProps: c = {},
                            direction: d,
                            orientation: u,
                            disabled: p,
                            ...b
                        } = n,
                        h = (0, E.useRtl)(),
                        v = {
                            isRtl: h,
                            ...n
                        },
                        m = X(v),
                        x = null !== (r = s.StartScrollButtonIcon) && void 0 !== r ? r : H,
                        g = null !== (o = s.EndScrollButtonIcon) && void 0 !== o ? o : F,
                        y = (0, M.default)({
                            elementType: x,
                            externalSlotProps: c.startScrollButtonIcon,
                            additionalProps: {
                                fontSize: "small"
                            },
                            ownerState: v
                        }),
                        S = (0, M.default)({
                            elementType: g,
                            externalSlotProps: c.endScrollButtonIcon,
                            additionalProps: {
                                fontSize: "small"
                            },
                            ownerState: v
                        });
                    return (0, l.jsx)(D, {
                        component: "div",
                        className: (0, a.Z)(m.root, i),
                        ref: t,
                        role: null,
                        ownerState: v,
                        tabIndex: null,
                        ...b,
                        style: { ...b.style,
                            ..."vertical" === u && {
                                "--TabScrollButton-svgRotate": "rotate(".concat(h ? -90 : 90, "deg)")
                            }
                        },
                        children: "left" === d ? (0, l.jsx)(x, { ...y
                        }) : (0, l.jsx)(g, { ...S
                        })
                    })
                });
            var Y = r(9665);

            function K(e) {
                return (0, h.ZP)("MuiTabs", e)
            }
            let V = (0, b.Z)("MuiTabs", ["root", "vertical", "list", "flexContainer", "flexContainerVertical", "centered", "scroller", "fixed", "scrollableX", "scrollableY", "hideScrollbar", "scrollButtons", "scrollButtonsHideMobile", "indicator"]);
            var q = r(2262),
                Q = r(79114);
            let _ = (e, t) => e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : e.firstChild,
                U = (e, t) => e === t ? e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : e.lastChild,
                G = (e, t, r) => {
                    let l = !1,
                        o = r(e, t);
                    for (; o;) {
                        if (o === e.firstChild) {
                            if (l) return;
                            l = !0
                        }
                        let t = o.disabled || "true" === o.getAttribute("aria-disabled");
                        if (!o.hasAttribute("tabindex") || t) o = r(e, o);
                        else {
                            o.focus();
                            return
                        }
                    }
                },
                J = e => {
                    let {
                        vertical: t,
                        fixed: r,
                        hideScrollbar: l,
                        scrollableX: o,
                        scrollableY: n,
                        centered: i,
                        scrollButtonsHideMobile: a,
                        classes: c
                    } = e;
                    return (0, s.Z)({
                        root: ["root", t && "vertical"],
                        scroller: ["scroller", r && "fixed", l && "hideScrollbar", o && "scrollableX", n && "scrollableY"],
                        list: ["list", "flexContainer", t && "flexContainerVertical", t && "vertical", i && "centered"],
                        indicator: ["indicator"],
                        scrollButtons: ["scrollButtons", a && "scrollButtonsHideMobile"],
                        scrollableX: [o && "scrollableX"],
                        hideScrollbar: [l && "hideScrollbar"]
                    }, K, c)
                },
                $ = (0, u.ZP)("div", {
                    name: "MuiTabs",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: r
                        } = e;
                        return [{
                            ["& .".concat(V.scrollButtons)]: t.scrollButtons
                        }, {
                            ["& .".concat(V.scrollButtons)]: r.scrollButtonsHideMobile && t.scrollButtonsHideMobile
                        }, t.root, r.vertical && t.vertical]
                    }
                })((0, p.Z)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        overflow: "hidden",
                        minHeight: 48,
                        WebkitOverflowScrolling: "touch",
                        display: "flex",
                        variants: [{
                            props: e => {
                                let {
                                    ownerState: t
                                } = e;
                                return t.vertical
                            },
                            style: {
                                flexDirection: "column"
                            }
                        }, {
                            props: e => {
                                let {
                                    ownerState: t
                                } = e;
                                return t.scrollButtonsHideMobile
                            },
                            style: {
                                ["& .".concat(V.scrollButtons)]: {
                                    [t.breakpoints.down("sm")]: {
                                        display: "none"
                                    }
                                }
                            }
                        }]
                    }
                })),
                ee = (0, u.ZP)("div", {
                    name: "MuiTabs",
                    slot: "Scroller",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: r
                        } = e;
                        return [t.scroller, r.fixed && t.fixed, r.hideScrollbar && t.hideScrollbar, r.scrollableX && t.scrollableX, r.scrollableY && t.scrollableY]
                    }
                })({
                    position: "relative",
                    display: "inline-block",
                    flex: "1 1 auto",
                    whiteSpace: "nowrap",
                    variants: [{
                        props: e => {
                            let {
                                ownerState: t
                            } = e;
                            return t.fixed
                        },
                        style: {
                            overflowX: "hidden",
                            width: "100%"
                        }
                    }, {
                        props: e => {
                            let {
                                ownerState: t
                            } = e;
                            return t.hideScrollbar
                        },
                        style: {
                            scrollbarWidth: "none",
                            "&::-webkit-scrollbar": {
                                display: "none"
                            }
                        }
                    }, {
                        props: e => {
                            let {
                                ownerState: t
                            } = e;
                            return t.scrollableX
                        },
                        style: {
                            overflowX: "auto",
                            overflowY: "hidden"
                        }
                    }, {
                        props: e => {
                            let {
                                ownerState: t
                            } = e;
                            return t.scrollableY
                        },
                        style: {
                            overflowY: "auto",
                            overflowX: "hidden"
                        }
                    }]
                }),
                et = (0, u.ZP)("div", {
                    name: "MuiTabs",
                    slot: "List",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: r
                        } = e;
                        return [t.list, t.flexContainer, r.vertical && t.flexContainerVertical, r.centered && t.centered]
                    }
                })({
                    display: "flex",
                    variants: [{
                        props: e => {
                            let {
                                ownerState: t
                            } = e;
                            return t.vertical
                        },
                        style: {
                            flexDirection: "column"
                        }
                    }, {
                        props: e => {
                            let {
                                ownerState: t
                            } = e;
                            return t.centered
                        },
                        style: {
                            justifyContent: "center"
                        }
                    }]
                }),
                er = (0, u.ZP)("span", {
                    name: "MuiTabs",
                    slot: "Indicator",
                    overridesResolver: (e, t) => t.indicator
                })((0, p.Z)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        position: "absolute",
                        height: 2,
                        bottom: 0,
                        width: "100%",
                        transition: t.transitions.create(),
                        variants: [{
                            props: {
                                indicatorColor: "primary"
                            },
                            style: {
                                backgroundColor: (t.vars || t).palette.primary.main
                            }
                        }, {
                            props: {
                                indicatorColor: "secondary"
                            },
                            style: {
                                backgroundColor: (t.vars || t).palette.secondary.main
                            }
                        }, {
                            props: e => {
                                let {
                                    ownerState: t
                                } = e;
                                return t.vertical
                            },
                            style: {
                                height: "100%",
                                width: 2,
                                right: 0
                            }
                        }]
                    }
                })),
                el = (0, u.ZP)(function(e) {
                    let {
                        onChange: t,
                        ...r
                    } = e, n = o.useRef(), i = o.useRef(null), a = () => {
                        n.current = i.current.offsetHeight - i.current.clientHeight
                    };
                    return (0, k.Z)(() => {
                        let e = (0, W.Z)(() => {
                                let e = n.current;
                                a(), e !== n.current && t(n.current)
                            }),
                            r = (0, j.Z)(i.current);
                        return r.addEventListener("resize", e), () => {
                            e.clear(), r.removeEventListener("resize", e)
                        }
                    }, [t]), o.useEffect(() => {
                        a(), t(n.current)
                    }, [t]), (0, l.jsx)("div", {
                        style: z,
                        ...r,
                        ref: i
                    })
                })({
                    overflowX: "auto",
                    overflowY: "hidden",
                    scrollbarWidth: "none",
                    "&::-webkit-scrollbar": {
                        display: "none"
                    }
                }),
                eo = {},
                en = o.forwardRef(function(e, t) {
                    let r = (0, f.i)({
                            props: e,
                            name: "MuiTabs"
                        }),
                        n = (0, R.Z)(),
                        i = (0, E.useRtl)(),
                        {
                            "aria-label": s,
                            "aria-labelledby": c,
                            action: d,
                            centered: u = !1,
                            children: p,
                            className: b,
                            component: h = "div",
                            allowScrollButtonsMobile: v = !1,
                            indicatorColor: m = "primary",
                            onChange: x,
                            orientation: g = "horizontal",
                            ScrollButtonComponent: y,
                            scrollButtons: S = "auto",
                            selectionFollowsFocus: w,
                            slots: B = {},
                            slotProps: T = {},
                            TabIndicatorProps: Z = {},
                            TabScrollButtonProps: C = {},
                            textColor: P = "primary",
                            value: k,
                            variant: z = "standard",
                            visibleScrollbar: L = !1,
                            ...H
                        } = r,
                        F = "scrollable" === z,
                        N = "vertical" === g,
                        A = N ? "scrollTop" : "scrollLeft",
                        X = N ? "top" : "left",
                        D = N ? "bottom" : "right",
                        K = N ? "clientHeight" : "clientWidth",
                        V = N ? "height" : "width",
                        en = { ...r,
                            component: h,
                            allowScrollButtonsMobile: v,
                            indicatorColor: m,
                            orientation: g,
                            vertical: N,
                            scrollButtons: S,
                            textColor: P,
                            variant: z,
                            visibleScrollbar: L,
                            fixed: !F,
                            hideScrollbar: F && !L,
                            scrollableX: F && !N,
                            scrollableY: F && N,
                            centered: u && !F,
                            scrollButtonsHideMobile: !v
                        },
                        ei = J(en),
                        ea = (0, M.default)({
                            elementType: B.StartScrollButtonIcon,
                            externalSlotProps: T.startScrollButtonIcon,
                            ownerState: en
                        }),
                        es = (0, M.default)({
                            elementType: B.EndScrollButtonIcon,
                            externalSlotProps: T.endScrollButtonIcon,
                            ownerState: en
                        }),
                        [ec, ed] = o.useState(!1),
                        [eu, ep] = o.useState(eo),
                        [ef, eb] = o.useState(!1),
                        [eh, ev] = o.useState(!1),
                        [em, ex] = o.useState(!1),
                        [eg, ey] = o.useState({
                            overflow: "hidden",
                            scrollbarWidth: 0
                        }),
                        eS = new Map,
                        ew = o.useRef(null),
                        eB = o.useRef(null),
                        eT = {
                            slots: B,
                            slotProps: {
                                indicator: Z,
                                scrollButton: C,
                                ...T
                            }
                        },
                        eZ = () => {
                            let e, t;
                            let r = ew.current;
                            if (r) {
                                let t = r.getBoundingClientRect();
                                e = {
                                    clientWidth: r.clientWidth,
                                    scrollLeft: r.scrollLeft,
                                    scrollTop: r.scrollTop,
                                    scrollWidth: r.scrollWidth,
                                    top: t.top,
                                    bottom: t.bottom,
                                    left: t.left,
                                    right: t.right
                                }
                            }
                            if (r && !1 !== k) {
                                let e = eB.current.children;
                                if (e.length > 0) {
                                    let r = e[eS.get(k)];
                                    t = r ? r.getBoundingClientRect() : null
                                }
                            }
                            return {
                                tabsMeta: e,
                                tabMeta: t
                            }
                        },
                        eC = (0, Y.Z)(() => {
                            let e;
                            let {
                                tabsMeta: t,
                                tabMeta: r
                            } = eZ(), l = 0;
                            N ? (e = "top", r && t && (l = r.top - t.top + t.scrollTop)) : (e = i ? "right" : "left", r && t && (l = (i ? -1 : 1) * (r[e] - t[e] + t.scrollLeft)));
                            let o = {
                                [e]: l,
                                [V]: r ? r[V] : 0
                            };
                            if ("number" != typeof eu[e] || "number" != typeof eu[V]) ep(o);
                            else {
                                let t = Math.abs(eu[e] - o[e]),
                                    r = Math.abs(eu[V] - o[V]);
                                (t >= 1 || r >= 1) && ep(o)
                            }
                        }),
                        eP = function(e) {
                            let {
                                animation: t = !0
                            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            t ? function(e, t, r) {
                                let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                    o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : () => {},
                                    {
                                        ease: n = I,
                                        duration: i = 300
                                    } = l,
                                    a = null,
                                    s = t[e],
                                    c = !1,
                                    d = l => {
                                        if (c) {
                                            o(Error("Animation cancelled"));
                                            return
                                        }
                                        null === a && (a = l);
                                        let u = Math.min(1, (l - a) / i);
                                        if (t[e] = n(u) * (r - s) + s, u >= 1) {
                                            requestAnimationFrame(() => {
                                                o(null)
                                            });
                                            return
                                        }
                                        requestAnimationFrame(d)
                                    };
                                return s === r ? o(Error("Element already at target position")) : requestAnimationFrame(d), () => {
                                    c = !0
                                }
                            }(A, ew.current, e, {
                                duration: n.transitions.duration.standard
                            }) : ew.current[A] = e
                        },
                        eE = e => {
                            let t = ew.current[A];
                            N ? t += e : t += e * (i ? -1 : 1), eP(t)
                        },
                        eM = () => {
                            let e = ew.current[K],
                                t = 0,
                                r = Array.from(eB.current.children);
                            for (let l = 0; l < r.length; l += 1) {
                                let o = r[l];
                                if (t + o[K] > e) {
                                    0 === l && (t = e);
                                    break
                                }
                                t += o[K]
                            }
                            return t
                        },
                        eR = () => {
                            eE(-1 * eM())
                        },
                        eW = () => {
                            eE(eM())
                        },
                        [eI, {
                            onChange: ek,
                            ...ej
                        }] = (0, Q.Z)("scrollbar", {
                            className: (0, a.Z)(ei.scrollableX, ei.hideScrollbar),
                            elementType: el,
                            shouldForwardComponentProp: !0,
                            externalForwardedProps: eT,
                            ownerState: en
                        }),
                        ez = o.useCallback(e => {
                            null == ek || ek(e), ey({
                                overflow: null,
                                scrollbarWidth: e
                            })
                        }, [ek]),
                        [eL, eH] = (0, Q.Z)("scrollButtons", {
                            className: (0, a.Z)(ei.scrollButtons, C.className),
                            elementType: O,
                            externalForwardedProps: eT,
                            ownerState: en,
                            additionalProps: {
                                orientation: g,
                                slots: {
                                    StartScrollButtonIcon: B.startScrollButtonIcon || B.StartScrollButtonIcon,
                                    EndScrollButtonIcon: B.endScrollButtonIcon || B.EndScrollButtonIcon
                                },
                                slotProps: {
                                    startScrollButtonIcon: ea,
                                    endScrollButtonIcon: es
                                }
                            }
                        }),
                        eF = (0, Y.Z)(e => {
                            let {
                                tabsMeta: t,
                                tabMeta: r
                            } = eZ();
                            r && t && (r[X] < t[X] ? eP(t[A] + (r[X] - t[X]), {
                                animation: e
                            }) : r[D] > t[D] && eP(t[A] + (r[D] - t[D]), {
                                animation: e
                            }))
                        }),
                        eN = (0, Y.Z)(() => {
                            F && !1 !== S && ex(!em)
                        });
                    o.useEffect(() => {
                        let e, t;
                        let r = (0, W.Z)(() => {
                                ew.current && eC()
                            }),
                            l = (0, j.Z)(ew.current);
                        return l.addEventListener("resize", r), "undefined" != typeof ResizeObserver && (e = new ResizeObserver(r), Array.from(eB.current.children).forEach(t => {
                            e.observe(t)
                        })), "undefined" != typeof MutationObserver && (t = new MutationObserver(t => {
                            t.forEach(t => {
                                t.removedNodes.forEach(t => {
                                    null == e || e.unobserve(t)
                                }), t.addedNodes.forEach(t => {
                                    null == e || e.observe(t)
                                })
                            }), r(), eN()
                        })).observe(eB.current, {
                            childList: !0
                        }), () => {
                            r.clear(), l.removeEventListener("resize", r), null == t || t.disconnect(), null == e || e.disconnect()
                        }
                    }, [eC, eN]), o.useEffect(() => {
                        let e = Array.from(eB.current.children),
                            t = e.length;
                        if ("undefined" != typeof IntersectionObserver && t > 0 && F && !1 !== S) {
                            let r = e[0],
                                l = e[t - 1],
                                o = {
                                    root: ew.current,
                                    threshold: .99
                                },
                                n = new IntersectionObserver(e => {
                                    eb(!e[0].isIntersecting)
                                }, o);
                            n.observe(r);
                            let i = new IntersectionObserver(e => {
                                ev(!e[0].isIntersecting)
                            }, o);
                            return i.observe(l), () => {
                                n.disconnect(), i.disconnect()
                            }
                        }
                    }, [F, S, em, null == p ? void 0 : p.length]), o.useEffect(() => {
                        ed(!0)
                    }, []), o.useEffect(() => {
                        eC()
                    }), o.useEffect(() => {
                        eF(eo !== eu)
                    }, [eF, eu]), o.useImperativeHandle(d, () => ({
                        updateIndicator: eC,
                        updateScrollButtons: eN
                    }), [eC, eN]);
                    let [eA, eX] = (0, Q.Z)("indicator", {
                        className: (0, a.Z)(ei.indicator, Z.className),
                        elementType: er,
                        externalForwardedProps: eT,
                        ownerState: en,
                        additionalProps: {
                            style: eu
                        }
                    }), eD = (0, l.jsx)(eA, { ...eX
                    }), eO = 0, eY = o.Children.map(p, e => {
                        if (!o.isValidElement(e)) return null;
                        let t = void 0 === e.props.value ? eO : e.props.value;
                        eS.set(t, eO);
                        let r = t === k;
                        return eO += 1, o.cloneElement(e, {
                            fullWidth: "fullWidth" === z,
                            indicator: r && !ec && eD,
                            selected: r,
                            selectionFollowsFocus: w,
                            onChange: x,
                            textColor: P,
                            value: t,
                            ...1 !== eO || !1 !== k || e.props.tabIndex ? {} : {
                                tabIndex: 0
                            }
                        })
                    }), eK = e => {
                        if (e.altKey || e.shiftKey || e.ctrlKey || e.metaKey) return;
                        let t = eB.current,
                            r = (0, q.Z)(t).activeElement;
                        if ("tab" !== r.getAttribute("role")) return;
                        let l = "horizontal" === g ? "ArrowLeft" : "ArrowUp",
                            o = "horizontal" === g ? "ArrowRight" : "ArrowDown";
                        switch ("horizontal" === g && i && (l = "ArrowRight", o = "ArrowLeft"), e.key) {
                            case l:
                                e.preventDefault(), G(t, r, U);
                                break;
                            case o:
                                e.preventDefault(), G(t, r, _);
                                break;
                            case "Home":
                                e.preventDefault(), G(t, null, _);
                                break;
                            case "End":
                                e.preventDefault(), G(t, null, U)
                        }
                    }, eV = (() => {
                        let e = {};
                        e.scrollbarSizeListener = F ? (0, l.jsx)(eI, { ...ej,
                            onChange: ez
                        }) : null;
                        let t = F && ("auto" === S && (ef || eh) || !0 === S);
                        return e.scrollButtonStart = t ? (0, l.jsx)(eL, {
                            direction: i ? "right" : "left",
                            onClick: eR,
                            disabled: !ef,
                            ...eH
                        }) : null, e.scrollButtonEnd = t ? (0, l.jsx)(eL, {
                            direction: i ? "left" : "right",
                            onClick: eW,
                            disabled: !eh,
                            ...eH
                        }) : null, e
                    })(), [eq, eQ] = (0, Q.Z)("root", {
                        ref: t,
                        className: (0, a.Z)(ei.root, b),
                        elementType: $,
                        externalForwardedProps: { ...eT,
                            ...H,
                            component: h
                        },
                        ownerState: en
                    }), [e_, eU] = (0, Q.Z)("scroller", {
                        ref: ew,
                        className: ei.scroller,
                        elementType: ee,
                        externalForwardedProps: eT,
                        ownerState: en,
                        additionalProps: {
                            style: {
                                overflow: eg.overflow,
                                [N ? "margin".concat(i ? "Left" : "Right") : "marginBottom"]: L ? void 0 : -eg.scrollbarWidth
                            }
                        }
                    }), [eG, eJ] = (0, Q.Z)("list", {
                        ref: eB,
                        className: (0, a.Z)(ei.list, ei.flexContainer),
                        elementType: et,
                        externalForwardedProps: eT,
                        ownerState: en,
                        getSlotProps: e => ({ ...e,
                            onKeyDown: t => {
                                var r;
                                eK(t), null === (r = e.onKeyDown) || void 0 === r || r.call(e, t)
                            }
                        })
                    });
                    return (0, l.jsxs)(eq, { ...eQ,
                        children: [eV.scrollButtonStart, eV.scrollbarSizeListener, (0, l.jsxs)(e_, { ...eU,
                            children: [(0, l.jsx)(eG, {
                                "aria-label": s,
                                "aria-labelledby": c,
                                "aria-orientation": "vertical" === g ? "vertical" : null,
                                role: "tablist",
                                ...eJ,
                                children: eY
                            }), ec && eD]
                        }), eV.scrollButtonEnd]
                    })
                });
            var ei = r(92144);
            let ea = (0, u.ZP)(ei.Text)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        flex: "1 0 0",
                        fontSize: "2.625rem",
                        fontWeight: S.cQB,
                        lineHeight: S.Qoq,
                        marginBottom: S.vdF,
                        textAlign: "left",
                        [t.breakpoints.down("lg")]: {
                            fontSize: S.gah,
                            lineHeight: 1.14
                        },
                        [t.breakpoints.down("md")]: {
                            fontSize: S.jJ_,
                            lineHeight: 1.16
                        }
                    }
                }),
                es = (0, u.ZP)(P.default)(() => ({
                    minWidth: "100%",
                    maxWidth: "100%"
                })),
                ec = (0, u.ZP)(P.default)(() => ({
                    paddingTop: S.vdF,
                    width: "100%"
                })),
                ed = (0, u.ZP)(P.default)(() => ({
                    width: "100%",
                    display: "flex",
                    alignItems: "flex-start",
                    alignContent: "flex-start",
                    gap: S.oFH,
                    alignSelf: "stretch",
                    flexWrap: "wrap",
                    paddingTop: S.M7t,
                    borderBottomStyle: "solid",
                    borderBottomWidth: S.YFe,
                    borderBottomColor: S.gpS
                })),
                eu = (0, u.ZP)(en)(() => ({
                    minHeight: "33px",
                    "& .MuiTabs-indicator": {
                        height: "3px",
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "transparent"
                    },
                    "& .MuiTabs-indicatorSpan": {
                        width: "100%",
                        backgroundColor: S.Os0
                    },
                    "& .MuiTabs-flexContainer": {
                        gap: S.oFH
                    }
                })),
                ep = "Tabs",
                ef = (0, o.forwardRef)((e, t) => {
                    let {
                        ariaLabel: r,
                        id: i,
                        sectionHeaderText: a,
                        sectionHeaderComponent: s = "h2",
                        tabsContent: c
                    } = e, [d, u] = (0, o.useState)(0), p = (0, o.useRef)([]), f = (0, o.useRef)(!1);
                    if ((0, o.useEffect)(() => {
                            var e;
                            f.current ? p.current[d] && (null == (e = p.current[d]) || e.focus()) : f.current = !0
                        }, [d]), !c || 0 === c.length) return null;
                    let b = [],
                        h = [];
                    return c.forEach((e, t) => {
                        var r, o;
                        let a = (r = e.id, "".concat(i, "-TabPanel-").concat(r, "-").concat(t)),
                            s = (o = e.id, "".concat(i, "-Tab-").concat(o, "-").concat(t)),
                            u = e.TabWrapper,
                            f = e.tabWrapperProps;
                        b.push((0, l.jsx)(n, {
                            TabWrapper: u,
                            tabWrapperProps: f,
                            children: (0, l.jsx)(T, {
                                ariaControls: a,
                                id: s,
                                isLastTab: t === c.length - 1,
                                label: e.label
                            })
                        }, s)), h.push((0, l.jsx)(C, {
                            ariaLabelledBy: s,
                            selectedTabIndex: d,
                            id: a,
                            index: t,
                            ref: e => p.current[t] = e,
                            children: e.panelContent
                        }, a))
                    }), (0, l.jsxs)(es, {
                        children: [!!a && (0, l.jsx)(ea, {
                            component: s,
                            children: a
                        }), (0, l.jsx)(ed, {
                            children: (0, l.jsx)(eu, {
                                TabIndicatorProps: {
                                    children: (0, l.jsx)("span", {
                                        className: "MuiTabs-indicatorSpan"
                                    })
                                },
                                "data-testid": (0, B.B)(ep),
                                value: d,
                                onChange: (e, t) => {
                                    u(t)
                                },
                                "aria-label": r,
                                selectionFollowsFocus: !1,
                                ref: t,
                                scrollButtons: !1,
                                variant: "scrollable",
                                children: b
                            })
                        }), (0, l.jsx)(ec, {
                            children: h
                        })]
                    })
                });
            ef.displayName = ep
        }
    }
]);