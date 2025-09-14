"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9693], {
        30731: function(e, t, o) {
            o.d(t, {
                Z: function() {
                    return w
                }
            });
            var n = o(2265),
                r = o(61994),
                i = o(20801),
                a = o(16210),
                s = o(21086),
                d = o(37053),
                l = o(17162),
                c = o(53410),
                u = o(31288),
                p = o(67184),
                h = o(79114),
                f = o(94143),
                g = o(50738);

            function m(e) {
                return (0, g.ZP)("MuiAccordion", e)
            }
            let x = (0, f.Z)("MuiAccordion", ["root", "heading", "rounded", "expanded", "disabled", "gutters", "region"]);
            var v = o(57437);
            let b = e => {
                    let {
                        classes: t,
                        square: o,
                        expanded: n,
                        disabled: r,
                        disableGutters: a
                    } = e;
                    return (0, i.Z)({
                        root: ["root", !o && "rounded", n && "expanded", r && "disabled", !a && "gutters"],
                        heading: ["heading"],
                        region: ["region"]
                    }, m, t)
                },
                y = (0, a.ZP)(c.Z, {
                    name: "MuiAccordion",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: o
                        } = e;
                        return [{
                            ["& .".concat(x.region)]: t.region
                        }, t.root, !o.square && t.rounded, !o.disableGutters && t.gutters]
                    }
                })((0, s.Z)(e => {
                    let {
                        theme: t
                    } = e, o = {
                        duration: t.transitions.duration.shortest
                    };
                    return {
                        position: "relative",
                        transition: t.transitions.create(["margin"], o),
                        overflowAnchor: "none",
                        "&::before": {
                            position: "absolute",
                            left: 0,
                            top: -1,
                            right: 0,
                            height: 1,
                            content: '""',
                            opacity: 1,
                            backgroundColor: (t.vars || t).palette.divider,
                            transition: t.transitions.create(["opacity", "background-color"], o)
                        },
                        "&:first-of-type": {
                            "&::before": {
                                display: "none"
                            }
                        },
                        ["&.".concat(x.expanded)]: {
                            "&::before": {
                                opacity: 0
                            },
                            "&:first-of-type": {
                                marginTop: 0
                            },
                            "&:last-of-type": {
                                marginBottom: 0
                            },
                            "& + &": {
                                "&::before": {
                                    display: "none"
                                }
                            }
                        },
                        ["&.".concat(x.disabled)]: {
                            backgroundColor: (t.vars || t).palette.action.disabledBackground
                        }
                    }
                }), (0, s.Z)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        variants: [{
                            props: e => !e.square,
                            style: {
                                borderRadius: 0,
                                "&:first-of-type": {
                                    borderTopLeftRadius: (t.vars || t).shape.borderRadius,
                                    borderTopRightRadius: (t.vars || t).shape.borderRadius
                                },
                                "&:last-of-type": {
                                    borderBottomLeftRadius: (t.vars || t).shape.borderRadius,
                                    borderBottomRightRadius: (t.vars || t).shape.borderRadius,
                                    "@supports (-ms-ime-align: auto)": {
                                        borderBottomLeftRadius: 0,
                                        borderBottomRightRadius: 0
                                    }
                                }
                            }
                        }, {
                            props: e => !e.disableGutters,
                            style: {
                                ["&.".concat(x.expanded)]: {
                                    margin: "16px 0"
                                }
                            }
                        }]
                    }
                })),
                Z = (0, a.ZP)("h3", {
                    name: "MuiAccordion",
                    slot: "Heading",
                    overridesResolver: (e, t) => t.heading
                })({
                    all: "unset"
                });
            var w = n.forwardRef(function(e, t) {
                let o = (0, d.i)({
                        props: e,
                        name: "MuiAccordion"
                    }),
                    {
                        children: i,
                        className: a,
                        defaultExpanded: s = !1,
                        disabled: c = !1,
                        disableGutters: f = !1,
                        expanded: g,
                        onChange: m,
                        square: x = !1,
                        slots: w = {},
                        slotProps: R = {},
                        TransitionComponent: M,
                        TransitionProps: P,
                        ...A
                    } = o,
                    [C, S] = (0, p.Z)({
                        controlled: g,
                        default: s,
                        name: "Accordion",
                        state: "expanded"
                    }),
                    j = n.useCallback(e => {
                        S(!C), m && m(e, !C)
                    }, [C, m, S]),
                    [k, ...F] = n.Children.toArray(i),
                    T = n.useMemo(() => ({
                        expanded: C,
                        disabled: c,
                        disableGutters: f,
                        toggle: j
                    }), [C, c, f, j]),
                    I = { ...o,
                        square: x,
                        disabled: c,
                        disableGutters: f,
                        expanded: C
                    },
                    N = b(I),
                    B = {
                        slots: {
                            transition: M,
                            ...w
                        },
                        slotProps: {
                            transition: P,
                            ...R
                        }
                    },
                    [D, W] = (0, h.Z)("root", {
                        elementType: y,
                        externalForwardedProps: { ...B,
                            ...A
                        },
                        className: (0, r.Z)(N.root, a),
                        shouldForwardComponentProp: !0,
                        ownerState: I,
                        ref: t,
                        additionalProps: {
                            square: x
                        }
                    }),
                    [H, z] = (0, h.Z)("heading", {
                        elementType: Z,
                        externalForwardedProps: B,
                        className: N.heading,
                        ownerState: I
                    }),
                    [E, G] = (0, h.Z)("transition", {
                        elementType: l.Z,
                        externalForwardedProps: B,
                        ownerState: I
                    });
                return (0, v.jsxs)(D, { ...W,
                    children: [(0, v.jsx)(H, { ...z,
                        children: (0, v.jsx)(u.Z.Provider, {
                            value: T,
                            children: k
                        })
                    }), (0, v.jsx)(E, { in: C,
                        timeout: "auto",
                        ...G,
                        children: (0, v.jsx)("div", {
                            "aria-labelledby": k.props.id,
                            id: k.props["aria-controls"],
                            role: "region",
                            className: N.region,
                            children: F
                        })
                    })]
                })
            })
        },
        31288: function(e, t, o) {
            let n = o(2265).createContext({});
            t.Z = n
        },
        44164: function(e, t, o) {
            o.d(t, {
                Z: function() {
                    return g
                }
            });
            var n = o(2265),
                r = o(61994),
                i = o(20801),
                a = o(16210),
                s = o(21086),
                d = o(37053),
                l = o(94143),
                c = o(50738);

            function u(e) {
                return (0, c.ZP)("MuiAccordionDetails", e)
            }(0, l.Z)("MuiAccordionDetails", ["root"]);
            var p = o(57437);
            let h = e => {
                    let {
                        classes: t
                    } = e;
                    return (0, i.Z)({
                        root: ["root"]
                    }, u, t)
                },
                f = (0, a.ZP)("div", {
                    name: "MuiAccordionDetails",
                    slot: "Root",
                    overridesResolver: (e, t) => t.root
                })((0, s.Z)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        padding: t.spacing(1, 2, 2)
                    }
                }));
            var g = n.forwardRef(function(e, t) {
                let o = (0, d.i)({
                        props: e,
                        name: "MuiAccordionDetails"
                    }),
                    {
                        className: n,
                        ...i
                    } = o,
                    a = h(o);
                return (0, p.jsx)(f, {
                    className: (0, r.Z)(a.root, n),
                    ref: t,
                    ownerState: o,
                    ...i
                })
            })
        },
        96369: function(e, t, o) {
            o.d(t, {
                Z: function() {
                    return Z
                }
            });
            var n = o(2265),
                r = o(61994),
                i = o(20801),
                a = o(16210),
                s = o(21086),
                d = o(37053),
                l = o(72276),
                c = o(31288),
                u = o(94143),
                p = o(50738);

            function h(e) {
                return (0, p.ZP)("MuiAccordionSummary", e)
            }
            let f = (0, u.Z)("MuiAccordionSummary", ["root", "expanded", "focusVisible", "disabled", "gutters", "contentGutters", "content", "expandIconWrapper"]);
            var g = o(79114),
                m = o(57437);
            let x = e => {
                    let {
                        classes: t,
                        expanded: o,
                        disabled: n,
                        disableGutters: r
                    } = e;
                    return (0, i.Z)({
                        root: ["root", o && "expanded", n && "disabled", !r && "gutters"],
                        focusVisible: ["focusVisible"],
                        content: ["content", o && "expanded", !r && "contentGutters"],
                        expandIconWrapper: ["expandIconWrapper", o && "expanded"]
                    }, h, t)
                },
                v = (0, a.ZP)(l.Z, {
                    name: "MuiAccordionSummary",
                    slot: "Root",
                    overridesResolver: (e, t) => t.root
                })((0, s.Z)(e => {
                    let {
                        theme: t
                    } = e, o = {
                        duration: t.transitions.duration.shortest
                    };
                    return {
                        display: "flex",
                        width: "100%",
                        minHeight: 48,
                        padding: t.spacing(0, 2),
                        transition: t.transitions.create(["min-height", "background-color"], o),
                        ["&.".concat(f.focusVisible)]: {
                            backgroundColor: (t.vars || t).palette.action.focus
                        },
                        ["&.".concat(f.disabled)]: {
                            opacity: (t.vars || t).palette.action.disabledOpacity
                        },
                        ["&:hover:not(.".concat(f.disabled, ")")]: {
                            cursor: "pointer"
                        },
                        variants: [{
                            props: e => !e.disableGutters,
                            style: {
                                ["&.".concat(f.expanded)]: {
                                    minHeight: 64
                                }
                            }
                        }]
                    }
                })),
                b = (0, a.ZP)("span", {
                    name: "MuiAccordionSummary",
                    slot: "Content",
                    overridesResolver: (e, t) => t.content
                })((0, s.Z)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        display: "flex",
                        textAlign: "start",
                        flexGrow: 1,
                        margin: "12px 0",
                        variants: [{
                            props: e => !e.disableGutters,
                            style: {
                                transition: t.transitions.create(["margin"], {
                                    duration: t.transitions.duration.shortest
                                }),
                                ["&.".concat(f.expanded)]: {
                                    margin: "20px 0"
                                }
                            }
                        }]
                    }
                })),
                y = (0, a.ZP)("span", {
                    name: "MuiAccordionSummary",
                    slot: "ExpandIconWrapper",
                    overridesResolver: (e, t) => t.expandIconWrapper
                })((0, s.Z)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        display: "flex",
                        color: (t.vars || t).palette.action.active,
                        transform: "rotate(0deg)",
                        transition: t.transitions.create("transform", {
                            duration: t.transitions.duration.shortest
                        }),
                        ["&.".concat(f.expanded)]: {
                            transform: "rotate(180deg)"
                        }
                    }
                }));
            var Z = n.forwardRef(function(e, t) {
                let o = (0, d.i)({
                        props: e,
                        name: "MuiAccordionSummary"
                    }),
                    {
                        children: i,
                        className: a,
                        expandIcon: s,
                        focusVisibleClassName: l,
                        onClick: u,
                        slots: p,
                        slotProps: h,
                        ...f
                    } = o,
                    {
                        disabled: Z = !1,
                        disableGutters: w,
                        expanded: R,
                        toggle: M
                    } = n.useContext(c.Z),
                    P = e => {
                        M && M(e), u && u(e)
                    },
                    A = { ...o,
                        expanded: R,
                        disabled: Z,
                        disableGutters: w
                    },
                    C = x(A),
                    S = {
                        slots: p,
                        slotProps: h
                    },
                    [j, k] = (0, g.Z)("root", {
                        ref: t,
                        shouldForwardComponentProp: !0,
                        className: (0, r.Z)(C.root, a),
                        elementType: v,
                        externalForwardedProps: { ...S,
                            ...f
                        },
                        ownerState: A,
                        additionalProps: {
                            focusRipple: !1,
                            disableRipple: !0,
                            disabled: Z,
                            "aria-expanded": R,
                            focusVisibleClassName: (0, r.Z)(C.focusVisible, l)
                        },
                        getSlotProps: e => ({ ...e,
                            onClick: t => {
                                var o;
                                null === (o = e.onClick) || void 0 === o || o.call(e, t), P(t)
                            }
                        })
                    }),
                    [F, T] = (0, g.Z)("content", {
                        className: C.content,
                        elementType: b,
                        externalForwardedProps: S,
                        ownerState: A
                    }),
                    [I, N] = (0, g.Z)("expandIconWrapper", {
                        className: C.expandIconWrapper,
                        elementType: y,
                        externalForwardedProps: S,
                        ownerState: A
                    });
                return (0, m.jsxs)(j, { ...k,
                    children: [(0, m.jsx)(F, { ...T,
                        children: i
                    }), s && (0, m.jsx)(I, { ...N,
                        children: s
                    })]
                })
            })
        },
        17162: function(e, t, o) {
            o.d(t, {
                Z: function() {
                    return M
                }
            });
            var n = o(2265),
                r = o(61994),
                i = o(86739),
                a = o(73207),
                s = o(20801),
                d = o(16210),
                l = o(31691),
                c = o(21086),
                u = o(37053),
                p = o(73220),
                h = o(31090),
                f = o(60118),
                g = o(94143),
                m = o(50738);

            function x(e) {
                return (0, m.ZP)("MuiCollapse", e)
            }(0, g.Z)("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
            var v = o(57437);
            let b = e => {
                    let {
                        orientation: t,
                        classes: o
                    } = e;
                    return (0, s.Z)({
                        root: ["root", "".concat(t)],
                        entered: ["entered"],
                        hidden: ["hidden"],
                        wrapper: ["wrapper", "".concat(t)],
                        wrapperInner: ["wrapperInner", "".concat(t)]
                    }, x, o)
                },
                y = (0, d.ZP)("div", {
                    name: "MuiCollapse",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        let {
                            ownerState: o
                        } = e;
                        return [t.root, t[o.orientation], "entered" === o.state && t.entered, "exited" === o.state && !o.in && "0px" === o.collapsedSize && t.hidden]
                    }
                })((0, c.Z)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        height: 0,
                        overflow: "hidden",
                        transition: t.transitions.create("height"),
                        variants: [{
                            props: {
                                orientation: "horizontal"
                            },
                            style: {
                                height: "auto",
                                width: 0,
                                transition: t.transitions.create("width")
                            }
                        }, {
                            props: {
                                state: "entered"
                            },
                            style: {
                                height: "auto",
                                overflow: "visible"
                            }
                        }, {
                            props: {
                                state: "entered",
                                orientation: "horizontal"
                            },
                            style: {
                                width: "auto"
                            }
                        }, {
                            props: e => {
                                let {
                                    ownerState: t
                                } = e;
                                return "exited" === t.state && !t.in && "0px" === t.collapsedSize
                            },
                            style: {
                                visibility: "hidden"
                            }
                        }]
                    }
                })),
                Z = (0, d.ZP)("div", {
                    name: "MuiCollapse",
                    slot: "Wrapper",
                    overridesResolver: (e, t) => t.wrapper
                })({
                    display: "flex",
                    width: "100%",
                    variants: [{
                        props: {
                            orientation: "horizontal"
                        },
                        style: {
                            width: "auto",
                            height: "100%"
                        }
                    }]
                }),
                w = (0, d.ZP)("div", {
                    name: "MuiCollapse",
                    slot: "WrapperInner",
                    overridesResolver: (e, t) => t.wrapperInner
                })({
                    width: "100%",
                    variants: [{
                        props: {
                            orientation: "horizontal"
                        },
                        style: {
                            width: "auto",
                            height: "100%"
                        }
                    }]
                }),
                R = n.forwardRef(function(e, t) {
                    let o = (0, u.i)({
                            props: e,
                            name: "MuiCollapse"
                        }),
                        {
                            addEndListener: s,
                            children: d,
                            className: c,
                            collapsedSize: g = "0px",
                            component: m,
                            easing: x,
                            in: R,
                            onEnter: M,
                            onEntered: P,
                            onEntering: A,
                            onExit: C,
                            onExited: S,
                            onExiting: j,
                            orientation: k = "vertical",
                            style: F,
                            timeout: T = p.x9.standard,
                            TransitionComponent: I = i.ZP,
                            ...N
                        } = o,
                        B = { ...o,
                            orientation: k,
                            collapsedSize: g
                        },
                        D = b(B),
                        W = (0, l.Z)(),
                        H = (0, a.default)(),
                        z = n.useRef(null),
                        E = n.useRef(),
                        G = "number" == typeof g ? "".concat(g, "px") : g,
                        V = "horizontal" === k,
                        _ = V ? "width" : "height",
                        L = n.useRef(null),
                        Y = (0, f.Z)(t, L),
                        q = e => t => {
                            if (e) {
                                let o = L.current;
                                void 0 === t ? e(o) : e(o, t)
                            }
                        },
                        J = () => z.current ? z.current[V ? "clientWidth" : "clientHeight"] : 0,
                        O = q((e, t) => {
                            z.current && V && (z.current.style.position = "absolute"), e.style[_] = G, M && M(e, t)
                        }),
                        K = q((e, t) => {
                            let o = J();
                            z.current && V && (z.current.style.position = "");
                            let {
                                duration: n,
                                easing: r
                            } = (0, h.C)({
                                style: F,
                                timeout: T,
                                easing: x
                            }, {
                                mode: "enter"
                            });
                            if ("auto" === T) {
                                let t = W.transitions.getAutoHeightDuration(o);
                                e.style.transitionDuration = "".concat(t, "ms"), E.current = t
                            } else e.style.transitionDuration = "string" == typeof n ? n : "".concat(n, "ms");
                            e.style[_] = "".concat(o, "px"), e.style.transitionTimingFunction = r, A && A(e, t)
                        }),
                        Q = q((e, t) => {
                            e.style[_] = "auto", P && P(e, t)
                        }),
                        U = q(e => {
                            e.style[_] = "".concat(J(), "px"), C && C(e)
                        }),
                        X = q(S),
                        $ = q(e => {
                            let t = J(),
                                {
                                    duration: o,
                                    easing: n
                                } = (0, h.C)({
                                    style: F,
                                    timeout: T,
                                    easing: x
                                }, {
                                    mode: "exit"
                                });
                            if ("auto" === T) {
                                let o = W.transitions.getAutoHeightDuration(t);
                                e.style.transitionDuration = "".concat(o, "ms"), E.current = o
                            } else e.style.transitionDuration = "string" == typeof o ? o : "".concat(o, "ms");
                            e.style[_] = G, e.style.transitionTimingFunction = n, j && j(e)
                        });
                    return (0, v.jsx)(I, { in: R,
                        onEnter: O,
                        onEntered: Q,
                        onEntering: K,
                        onExit: U,
                        onExited: X,
                        onExiting: $,
                        addEndListener: e => {
                            "auto" === T && H.start(E.current || 0, e), s && s(L.current, e)
                        },
                        nodeRef: L,
                        timeout: "auto" === T ? null : T,
                        ...N,
                        children: (e, t) => {
                            let {
                                ownerState: o,
                                ...n
                            } = t;
                            return (0, v.jsx)(y, {
                                as: m,
                                className: (0, r.Z)(D.root, c, {
                                    entered: D.entered,
                                    exited: !R && "0px" === G && D.hidden
                                }[e]),
                                style: {
                                    [V ? "minWidth" : "minHeight"]: G,
                                    ...F
                                },
                                ref: Y,
                                ownerState: { ...B,
                                    state: e
                                },
                                ...n,
                                children: (0, v.jsx)(Z, {
                                    ownerState: { ...B,
                                        state: e
                                    },
                                    className: D.wrapper,
                                    ref: z,
                                    children: (0, v.jsx)(w, {
                                        ownerState: { ...B,
                                            state: e
                                        },
                                        className: D.wrapperInner,
                                        children: d
                                    })
                                })
                            })
                        }
                    })
                });
            R && (R.muiSupportAuto = !0);
            var M = R
        },
        67184: function(e, t, o) {
            var n = o(38462);
            t.Z = n.default
        },
        38462: function(e, t, o) {
            o.d(t, {
                default: function() {
                    return r
                }
            });
            var n = o(2265);

            function r(e) {
                let {
                    controlled: t,
                    default: o,
                    name: r,
                    state: i = "value"
                } = e, {
                    current: a
                } = n.useRef(void 0 !== t), [s, d] = n.useState(o), l = n.useCallback(e => {
                    a || d(e)
                }, []);
                return [a ? t : s, l]
            }
        },
        19693: function(e, t, o) {
            o.d(t, {
                Accordion: function() {
                    return w
                }
            });
            var n = o(57437),
                r = o(2265),
                i = o(95656),
                a = o(92144);
            let s = "Accordion";
            var d = o(45008),
                l = o(30731),
                c = o(96369),
                u = o(44164),
                p = o(16210),
                h = o(7302),
                f = o(30938);

            function g() {
                let e = (0, d._)(["\n    height: auto;\n    width: 100%;\n    padding: 0;\n    &.MuiButtonBase-root {\n        &.MuiAccordionSummary-root {\n            align-items: flex-start;\n            align-self: stretch;\n            padding: ", ";\n            gap: ", ";\n            text-align: left;\n            &.Mui-focusVisible {\n                background-color: ", ";\n                outline-offset: 2px;\n                outline: 2px solid Highlight;\n                outline: 2px solid -webkit-focus-ring-color;\n            }\n            :hover {\n                background-color: ", ";\n            }\n            & > .MuiAccordionSummary-content {\n                margin: 0;\n                gap: ", ";\n            }\n            & > .MuiAccordionSummary-expandIconWrapper {\n                align-self: center;\n            }\n        }\n        ,\n        &.Mui-expanded {\n            min-height: 0;\n        }\n    }\n"]);
                return g = function() {
                    return e
                }, e
            }
            let m = (0, p.ZP)(l.Z, {
                    shouldForwardProp: e => "sx" !== e
                })({
                    alignItems: "flex-start",
                    borderRadius: 0,
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "none",
                    "&.MuiPaper-root": {
                        backgroundColor: "inherit",
                        "> .MuiAccordion-heading": {
                            width: "100%"
                        },
                        "&.MuiAccordion-root": {
                            borderRadius: 0,
                            borderTop: "".concat(h.YFe, " solid ").concat(h.gpS),
                            margin: 0,
                            "::before": {
                                backgroundColor: "transparent"
                            },
                            "&:last-of-type": {
                                borderBottom: "".concat(h.YFe, " solid ").concat(h.gpS)
                            },
                            "&:only-of-type": {
                                borderTop: "".concat(h.YFe, " solid ").concat(h.gpS),
                                borderBottom: "".concat(h.YFe, " solid ").concat(h.gpS)
                            },
                            "&.Mui-expanded": {
                                marginBottom: 0
                            }
                        },
                        "> .MuiCollapse-root": {
                            width: "100%"
                        }
                    }
                }),
                x = (0, p.ZP)(c.Z)(g(), h.oFH, h.vdF, h.gdN, h.gdN, h.vdF),
                v = (0, p.ZP)(u.Z)({
                    padding: "".concat(h.vdF, " ").concat(h.oFH, " ").concat(h.oFH)
                }),
                b = (0, p.ZP)(f.Z)({
                    color: h.JSR,
                    height: "20px",
                    width: "20px"
                });
            var y = o(8060);
            let Z = () => (0, n.jsx)(n.Fragment, {
                    children: "Insert details here"
                }),
                w = (0, r.forwardRef)((e, t) => {
                    let {
                        accordionSx: o = {},
                        accordionDetailsSx: r = {},
                        accordionSummarySx: d = {},
                        adornment: l,
                        ariaDescribedBy: c,
                        ariaLabel: u,
                        children: p = (0, n.jsx)(Z, {}),
                        displayTitle: h = !0,
                        expandIconSx: f = {},
                        isExpanded: g,
                        onBlur: w,
                        onChange: R,
                        onFocus: M,
                        onMouseEnter: P,
                        onMouseLeave: A,
                        secondaryComponent: C,
                        textComponent: S,
                        title: j = "Title",
                        uniqueId: k,
                        variant: F,
                        headingSlotTag: T = "h2"
                    } = e;
                    return (p === (0, n.jsx)(Z, {}) || h && "Title" === j) && console.error(s + "-error: Component default values present"), (0, n.jsxs)(m, {
                        "data-testid": (0, y.B)(s, k),
                        expanded: g,
                        onBlur: w,
                        onChange: R,
                        onFocus: M,
                        onMouseEnter: P,
                        onMouseLeave: A,
                        ref: t,
                        sx: o,
                        slotProps: {
                            heading: {
                                component: T
                            }
                        },
                        children: [(0, n.jsxs)(x, {
                            "aria-describedby": c,
                            "aria-label": u,
                            component: "button",
                            expandIcon: (0, n.jsx)(b, {
                                sx: f
                            }),
                            id: k,
                            sx: d,
                            children: [l && (0, n.jsx)(i.default, {
                                sx: {
                                    paddingTop: "2px"
                                },
                                children: l
                            }), h && (0, n.jsxs)(i.default, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column"
                                },
                                children: [(0, n.jsx)(a.Text, {
                                    variant: F,
                                    component: S,
                                    bold: !0,
                                    children: j
                                }), C]
                            }), !h && (0, n.jsx)(n.Fragment, {
                                children: C
                            })]
                        }), (0, n.jsx)(v, {
                            sx: r,
                            children: p
                        })]
                    })
                });
            w.displayName = s
        }
    }
]);