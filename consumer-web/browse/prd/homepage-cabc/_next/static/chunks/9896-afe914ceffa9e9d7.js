(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9896], {
        33968: function() {},
        70103: function(e, t, n) {
            "use strict";
            n.d(t, {
                Grid: function() {
                    return c
                }
            });
            var o = n(57437),
                r = n(2265),
                i = n(5067),
                l = n(7302);
            let a = "Grid",
                c = e => {
                    let {
                        children: t,
                        hasMargin: n = !0,
                        container: c,
                        sx: d = {},
                        ...u
                    } = e, s = c && n;
                    return (0, o.jsx)(i.Z, {
                        container: c,
                        sx: (() => {
                            let e = s ? {
                                marginLeft: {
                                    sm: l.oFH,
                                    lg: l.ODt
                                },
                                marginRight: {
                                    sm: l.oFH,
                                    lg: l.ODt
                                }
                            } : {};
                            return { ...d,
                                ...s && e
                            }
                        })(),
                        "data-testid": a,
                        ...u,
                        children: Array.isArray(t) ? t.map((e, t) => (0, o.jsx)(r.Fragment, {
                            children: e
                        }, t)) : t
                    })
                };
            c.displayName = a
        },
        42399: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AdSetTitle: function() {
                    return b
                }
            });
            var o = n(57437),
                r = n(92144),
                i = n(7302),
                l = n(52730),
                a = n(79715),
                c = n(16210),
                d = n(31691),
                u = n(70103),
                s = n(18707),
                p = n(3795);
            let x = (0, c.ZP)(p.CostcoBox, {
                    shouldForwardProp: e => "titleBackgroundColor" !== e && "isAdSetCostco" !== e
                })(e => {
                    let {
                        isAdSetCostco: t,
                        titleBackgroundColor: n
                    } = e;
                    return { ...t ? {
                            alignContent: "center",
                            alignItems: "flex-end",
                            borderRadius: "10px 10px 0 0",
                            display: "flex",
                            marginBottom: 0,
                            padding: "".concat(i.vdF, " 0px")
                        } : {
                            borderRadius: i.xbU,
                            marginBottom: i.oFH,
                            marginLeft: "-".concat(i.iPk)
                        },
                        backgroundColor: n || i.W3Q
                    }
                }),
                m = (0, c.ZP)(u.Grid, {
                    shouldForwardProp: () => !0
                })(() => ({
                    alignItems: "center",
                    justifyContent: "space-between",
                    margin: 0,
                    padding: 0,
                    width: "100%",
                    flexBasis: "100% !important"
                })),
                v = (0, c.ZP)(u.Grid, {
                    shouldForwardProp: e => "titleAlignment" !== e
                })(e => {
                    let {
                        titleAlignment: t
                    } = e;
                    return {
                        margin: 0,
                        padding: 0,
                        textAlign: t || "left",
                        width: "center" === t ? "100%" : "auto"
                    }
                }),
                h = (0, c.ZP)(r.Text, {
                    shouldForwardProp: e => "isAdSetCostco" !== e
                })(() => ({
                    fontWeight: i.rWq,
                    lineHeight: i.Qoq,
                    width: "100%"
                })),
                g = (0, c.ZP)(u.Grid, {
                    shouldForwardProp: () => !0
                })(() => ({
                    alignContent: "center",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "flex-end"
                })),
                f = (0, c.ZP)(s.Link)(() => ({
                    alignItems: "center",
                    display: "flex",
                    gap: i.vdF,
                    textWrap: "nowrap"
                })),
                y = () => {
                    let e = (0, d.Z)();
                    return {
                        [e.breakpoints.up("md")]: {
                            fontSize: i.hE8,
                            marginBottom: "calc((".concat(i.gah, " - ").concat(i.hE8, ")/2)")
                        },
                        [e.breakpoints.down("md")]: {
                            fontSize: i.YzP,
                            marginBottom: "calc((".concat(i.jJ_, " - ").concat(i.YzP, ")/2)")
                        }
                    }
                },
                b = e => {
                    let {
                        title: t,
                        href: n,
                        isAdSetCostco: c = !1,
                        linkLabel: d,
                        titleVariant: u,
                        titleAlignment: s,
                        titleBackgroundColor: p,
                        titleId: b,
                        titleGridSx: _ = {},
                        titleLinkSx: C,
                        titleSx: w,
                        titleWrapperSx: T = {}
                    } = e;
                    return t ? (0, o.jsx)(x, {
                        isAdSetCostco: c,
                        sx: T,
                        titleBackgroundColor: p,
                        children: (0, o.jsxs)(m, {
                            container: !0,
                            hasMargin: !1,
                            children: [(0, o.jsx)(v, {
                                sx: _,
                                titleAlignment: s,
                                xs: !0,
                                children: (0, o.jsx)(h, {
                                    variant: u,
                                    sx: w || {
                                        fontSize: i.jJ_
                                    },
                                    color: "default",
                                    component: "h2",
                                    id: b,
                                    children: t
                                })
                            }), t && n && d && (0, o.jsx)(g, {
                                padding: 0,
                                xs: 4,
                                children: (0, o.jsx)(a.Analytics, {
                                    analyticData: {
                                        adItem: {
                                            title: d
                                        }
                                    },
                                    children: (0, o.jsxs)(f, {
                                        sx: C || y(),
                                        "aria-label": "".concat(d, " ").concat(t),
                                        color: i.ekx,
                                        href: n,
                                        variant: "t6",
                                        children: [(0, o.jsx)(r.Text, {
                                            variant: "inherit",
                                            children: d
                                        }), (0, o.jsx)(l._, {
                                            color: "inherit",
                                            height: i.YzP,
                                            width: i.YzP
                                        })]
                                    })
                                })
                            })]
                        })
                    }) : null
                }
        },
        35807: function(e, t, n) {
            "use strict";
            n.d(t, {
                ResponsiveContainer: function() {
                    return l
                }
            });
            var o = n(16210),
                r = n(7302),
                i = n(3795);
            let l = (0, o.ZP)(i.CostcoBox)(() => ({
                display: "flex",
                gap: r.ODt,
                width: "100%",
                "@container (max-width: 768px)": {
                    flexDirection: "column"
                }
            }))
        },
        58140: function(e, t, n) {
            "use strict";
            n.d(t, {
                AdSetContainer: function() {
                    return a
                },
                HighlightCardGrid: function() {
                    return c
                }
            });
            var o = n(95656),
                r = n(16210),
                i = n(7302),
                l = n(3795);
            let a = (0, r.ZP)(l.CostcoBox, {
                    shouldForwardProp: e => "bodyBackgroundColor" !== e && "ignoreBackground" !== e && "isFourCorners" !== e
                })(e => {
                    let {
                        bodyBackgroundColor: t,
                        ignoreBackground: n,
                        isFourCorners: o,
                        theme: r
                    } = e, l = {
                        display: "flex",
                        flexDirection: "column",
                        gap: i.oFH,
                        paddingBottom: i.oFH,
                        width: "100%",
                        [r.breakpoints.down("md")]: {
                            '&[data-layout="large_ad"] > div > div': {
                                flexBasis: "100%"
                            },
                            '&[data-layout="large_half_banner"] > div > div': {
                                flexBasis: "100%"
                            },
                            '&[data-layout="one_fourth"] > div': {
                                "> div": {
                                    flexBasis: "calc(50% - ".concat(i.iPk, ")")
                                },
                                flexWrap: "wrap",
                                gap: i.iPk
                            },
                            '&[data-layout="one_third"] > div, &[data-layout="half"] > div ,&[data-layout="full_1"] > div': {
                                flexDirection: "column"
                            }
                        }
                    };
                    return o && (l = { ...l,
                        minHeight: "100%",
                        minWidth: "100%",
                        "@media (max-width:520px)": {
                            width: "100%"
                        },
                        "@media (max-width:1024px) and (min-width:520px)": {
                            width: "calc((min(100vw, 1023px) / 2) - 44px)"
                        },
                        "@media (min-width:1024px)": {
                            width: "calc((min(100vw, 1400px) / 4) - 66px)"
                        }
                    }), n || (l = { ...l,
                        backgroundColor: t || i.AhM,
                        border: "solid ".concat(i.YFe, " ").concat(i.gdN),
                        borderRadius: "10px"
                    }), l
                }),
                c = (0, r.ZP)(o.default)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        columnGap: 30,
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gridTemplateRows: "auto",
                        rowGap: 32,
                        width: "100%",
                        [t.breakpoints.down("lg")]: {
                            gridTemplateColumns: "1fr 1fr"
                        },
                        [t.breakpoints.down("md")]: {
                            gridTemplateColumns: "1fr"
                        }
                    }
                })
        },
        42804: function(e, t, n) {
            "use strict";
            n.d(t, {
                AdButlerClient: function() {
                    return L
                }
            });
            var o = n(57437),
                r = n(88176),
                i = n(40224),
                l = n(2265),
                a = n(21851),
                c = n(4369),
                d = n(79715),
                u = n(42399),
                s = n(81654),
                p = n(59011),
                x = n(19421),
                m = n(63853),
                v = n(40538),
                h = n(3795);
            let g = (e, t) => {
                    (null == t ? void 0 : t.current) && e.observe(t.current)
                },
                f = e => {
                    let {
                        intersectionThreshold: t = .5,
                        observerTimeDelay: n = 1e3,
                        onLoad: r,
                        onView: i,
                        children: a
                    } = e, c = (0, l.useRef)();
                    return (0, l.useEffect)(() => {
                        let e;
                        r && r();
                        let o = (0, v.wz)(t => {
                            let r = t[0];
                            r.isIntersecting ? e = setTimeout(() => {
                                i && i(), o.unobserve(r.target)
                            }, n) : clearTimeout(e)
                        }, {
                            threshold: t
                        });
                        return g(o, c), () => {
                            null == o || o.disconnect(), clearTimeout(e)
                        }
                    }, [t, n, r, i]), (0, o.jsx)(h.CostcoBox, {
                        ref: c,
                        sx: {
                            display: "flex",
                            flex: "1 1 auto",
                            width: "100%"
                        },
                        children: a
                    })
                };
            var y = n(7302),
                b = n(14790),
                _ = n(97416),
                C = n(11451),
                w = n(96724);
            let T = "CardComposer",
                j = "Category",
                S = "AdBuilder",
                k = e => {
                    let {
                        componentType: t,
                        data: n,
                        externalLinkModule: r
                    } = e;
                    switch (t) {
                        case S:
                            return (0, o.jsx)(b.AdBuilderUI, { ...n,
                                data: n,
                                externalLinkModule: r
                            });
                        case j:
                            return (0, o.jsx)(_.d, { ...n,
                                ...w.J
                            });
                        case "FeatureHighlight":
                            return (0, o.jsx)(C.X, {
                                data: n
                            });
                        default:
                            return console.error('"'.concat(t, '" is not a valid component type. ').concat(T)), null
                    }
                };
            k.displayName = T;
            var I = n(81644);
            let B = e => {
                    let {
                        adData: t,
                        itemType: n,
                        externalLinkModule: r
                    } = e;
                    if (n === p.Py) {
                        let e = (0, x.J0)(t, null == t ? void 0 : t.redirect_url);
                        return (null == e ? void 0 : e.length) ? (0, o.jsx)(I.o, {
                            categoryTiles: e.map((e, t) => (0, o.jsx)(k, {
                                componentType: j,
                                data: e,
                                externalLinkModule: r
                            }, t)),
                            titleProps: {
                                title: t.template_params.Title,
                                titleAlignment: "center",
                                titleBackgroundColor: y.gdN
                            },
                            bodyBackgroundColor: void 0,
                            ignoreBackground: !1
                        }) : null
                    }
                    let i = (0, x.EO)(t);
                    return (0, o.jsx)(k, {
                        componentType: S,
                        data: i,
                        externalLinkModule: r
                    })
                },
                P = e => {
                    let {
                        adData: t,
                        clientDataLoaded: n,
                        itemType: r,
                        AdComponent: i,
                        externalLinkModule: a
                    } = e, c = (0, l.useCallback)(async () => {
                        n && (t.eligible_url && navigator.sendBeacon(t.eligible_url), t.accupixel_url && navigator.sendBeacon(t.accupixel_url))
                    }, [t.eligible_url, t.accupixel_url, n]), d = (0, l.useCallback)(async () => {
                        n && t.viewable_url && navigator.sendBeacon(t.viewable_url)
                    }, [t.viewable_url, n]);
                    return (0, o.jsx)(f, {
                        intersectionThreshold: .5,
                        observerTimeDelay: 1e3,
                        onLoad: c,
                        onView: d,
                        children: "product_carousel" === r && i ? i : (0, o.jsx)(B, {
                            adData: t,
                            externalLinkModule: a,
                            itemType: r
                        })
                    })
                };
            var A = n(10150);
            let O = {
                    [A.K1]: e => {
                        let {
                            children: t
                        } = e;
                        return (0, o.jsx)(o.Fragment, {
                            children: l.Children.map(t, (e, t) => (0, o.jsx)(h.CostcoBox, {
                                sx: {
                                    "@media (min-width: 520px)": {
                                        flex: "calc(50% - ".concat(y.oFH, ")"),
                                        maxWidth: "50%"
                                    },
                                    "@media (min-width: 1024px)": {
                                        flex: "calc(25% - ".concat(y.ODt, ")"),
                                        maxWidth: "25%"
                                    },
                                    display: "flex",
                                    flex: "100%",
                                    maxWidth: "100%"
                                },
                                children: e
                            }, t))
                        })
                    },
                    [A.Z5]: null,
                    [A.oT]: e => {
                        let {
                            children: t
                        } = e, n = 1 === l.Children.count(t);
                        return (0, o.jsx)(o.Fragment, {
                            children: l.Children.map(t, (e, t) => (0, o.jsx)(h.CostcoBox, {
                                sx: {
                                    display: "flex",
                                    flex: {
                                        md: n ? "100%" : "calc(50% - ".concat(y.oFH, ")"),
                                        xs: "100%"
                                    },
                                    maxWidth: {
                                        md: n ? "100%" : "calc(50% - ".concat(y.oFH, ")"),
                                        xs: "100%"
                                    }
                                },
                                ...n && {
                                    "data-layout": "large_half_banner"
                                },
                                children: e
                            }, t))
                        })
                    },
                    [A.Vc]: e => {
                        let {
                            children: t
                        } = e;
                        return (0, o.jsx)(o.Fragment, {
                            children: l.Children.map(t, (e, t) => (0, o.jsx)(h.CostcoBox, {
                                sx: {
                                    display: "flex",
                                    flex: {
                                        md: "calc(25% - ".concat(y.ODt, ")"),
                                        xs: "calc(50% - ".concat(y.oFH, ")")
                                    },
                                    maxWidth: {
                                        md: "calc(25% - ".concat(y.ODt, ")"),
                                        xs: "calc(50% - ".concat(y.oFH, ")")
                                    },
                                    margin: "2px 0px"
                                },
                                children: e
                            }, t))
                        })
                    },
                    [A.mF]: e => {
                        let {
                            children: t
                        } = e;
                        return (0, o.jsx)(h.CostcoBox, {
                            sx: {
                                display: "flex",
                                flexWrap: "wrap",
                                gap: {
                                    md: y.ODt,
                                    xs: y.oFH
                                },
                                overflow: "hidden"
                            },
                            "data-layout": p.mF,
                            children: l.Children.map(t, (e, t) => (0, o.jsx)(h.CostcoBox, {
                                sx: {
                                    display: "flex",
                                    flex: {
                                        md: "calc(50% - 12px)",
                                        xs: "calc(50% - 8px)"
                                    },
                                    maxWidth: {
                                        md: "calc(50% - 12px)",
                                        xs: "calc(50% - 8px)"
                                    }
                                },
                                children: e
                            }, t))
                        })
                    },
                    [A.Tn]: e => {
                        let {
                            children: t
                        } = e;
                        return (0, o.jsx)(o.Fragment, {
                            children: l.Children.map(t, (e, t) => (0, o.jsx)(h.CostcoBox, {
                                sx: {
                                    display: "flex",
                                    flex: {
                                        md: "calc(".concat(100 / 6, "% - 13.33px)"),
                                        xs: "calc(50% - ".concat(y.oFH, ")")
                                    },
                                    maxWidth: {
                                        md: "calc(".concat(100 / 6, "% - 13.33px)"),
                                        xs: "calc(50% - ".concat(y.oFH, ")")
                                    }
                                },
                                children: e
                            }, t))
                        })
                    },
                    [A.Fx]: e => {
                        let {
                            children: t
                        } = e;
                        return (0, o.jsx)(o.Fragment, {
                            children: l.Children.map(t, (e, t) => (0, o.jsx)(h.CostcoBox, {
                                sx: {
                                    display: "flex",
                                    flex: {
                                        md: "calc(33.33% - 21.33px)",
                                        xs: "100%"
                                    },
                                    maxWidth: {
                                        md: "calc(33.33% - 21.33px)",
                                        xs: "100%"
                                    }
                                },
                                children: e
                            }, t))
                        })
                    }
                },
                D = e => {
                    let {
                        componentType: t,
                        children: n
                    } = e, r = O[t];
                    return r ? (0, o.jsx)(r, {
                        children: n
                    }) : n
                };
            var N = n(2295);
            let F = e => {
                    let {
                        componentType: t,
                        entry: n,
                        locale: r,
                        titleProps: i,
                        itemNumbers: l,
                        maxSlidesBySize: a
                    } = e, c = t === A.oT ? 3 : 5;
                    if (!n || (null == l ? void 0 : l.length) === 0) return null;
                    let {
                        product_card_display_style: d,
                        show_reviews: u,
                        show_action_button: s,
                        inventory_aware_listings: p,
                        product_tile_data_source: x
                    } = n.product_display_style;
                    return (0, o.jsx)(h.CostcoBox, {
                        sx: {
                            maxWidth: "calc(100% - ".concat(y.ODt, ")")
                        },
                        "data-testid": A.su,
                        children: (0, o.jsx)(N.ProductTileCarouselClient, {
                            componentType: t,
                            inventoryAware: p,
                            itemNumbers: l,
                            locale: r,
                            maxItemsPerSlide: c,
                            showActionButton: s,
                            showReviews: u,
                            testId: "AdButler_Products",
                            titleProps: i,
                            variant: d,
                            maxSlidesBySize: a,
                            product_tile_data_source: x
                        })
                    })
                },
                R = (e, t, n) => e === p.mF ? A.mF : n === p.Py ? e === p.Av ? A.K1 : A.Vc : ({
                    2: A.Tn,
                    3: A.Vc,
                    4: A.Fx,
                    6: A.oT,
                    12: A.Z5
                })[t],
                L = e => {
                    var t, n;
                    let {
                        adButlerConfig: v,
                        adData: h,
                        entry: g,
                        titleProps: f,
                        locale: y,
                        isSearchPage: b,
                        moduleSettings: _ = {},
                        externalLinkModule: C,
                        maxSlidesBySize: w
                    } = e, {
                        queryParams: T
                    } = (0, r.useQueryParams)(), j = b ? null == T ? void 0 : T.get("keyword") : void 0, [S, k] = (0, l.useState)(h), [I, B] = (0, l.useState)(!1), {
                        isMobile: O,
                        isTablet: N
                    } = (0, m.T)(), {
                        ad_set_style: L,
                        enable_url_tracking: W,
                        item_type: E,
                        rotating_options: H
                    } = g, {
                        enable_autoplay: U = !1,
                        randomize_items: M
                    } = H;
                    (0, l.useEffect)(() => {
                        (async () => {
                            var e;
                            let {
                                third_party_curation: t
                            } = g || {}, {
                                adbutler_extension: n
                            } = t, {
                                siteId: o,
                                kw: r
                            } = v;
                            if (!b || j) try {
                                let t = null;
                                "undefined" != typeof document && (null == (e = null == document ? void 0 : document.location) ? void 0 : e.search) && (t = new URLSearchParams(document.location.search).get("_adb_lwp"));
                                let {
                                    placements: i,
                                    status: l
                                } = await (0, x.Kj)(o, n, t, j || r);
                                l !== p.B9 ? k(i) : k(null), B(!0)
                            } catch (e) {
                                console.error("Error occured in fetching ad butler ads on client for siteId: ".concat(o, " and zoneId: ").concat(n))
                            }
                        })()
                    }, [v, g, j, b]);
                    let V = new i.t({
                            key_value: null == _ ? void 0 : _.key_value
                        }),
                        {
                            template_params: K,
                            unit_size: z,
                            body: G
                        } = (null == S ? void 0 : S[0]) || {},
                        Z = (0, l.useMemo)(() => {
                            var e;
                            if (G) try {
                                let t = JSON.parse(G);
                                if (null == (e = null == t ? void 0 : t.products) ? void 0 : e.length) return t.products.map(e => {
                                    let {
                                        product_id: t
                                    } = e;
                                    return t
                                })
                            } catch (e) {
                                console.error("Error parsing ad butler product carousel body: ".concat(e))
                            }
                            return []
                        }, [G]);
                    if (!S || 0 === S.length) return null;
                    let q = (0, x.mD)(L),
                        J = "AdButler_".concat(null == (n = null == (t = null == f ? void 0 : f.title) ? void 0 : t.trim) ? void 0 : n.call(t).replace(/\s/g, "-"));
                    if (q && E === p.Py) return null;
                    let {
                        ad_type: Y = "large_banner"
                    } = K || {}, Q = R(Y, z, E), $ = q && (null == Z ? void 0 : Z.length) > 0;
                    if (!I) return (0, o.jsx)(a.Skeleton, {
                        "data-testid": A.Wq,
                        sx: s.JM
                    });
                    let X = V.key_value;
                    return (0, o.jsxs)(o.Fragment, {
                        children: [f && !$ && (0, o.jsx)(u.AdSetTitle, {
                            titleWrapperSx: $ ? {
                                width: "100%"
                            } : {},
                            titleId: J,
                            ...f
                        }), (0, o.jsxs)(d.Analytics, {
                            analyticData: {
                                adItem: {
                                    style: q ? "carousel" : "banner"
                                },
                                doNotTrack: null == W ? void 0 : W.disable_third_party_tracking
                            },
                            children: [$ && (0, o.jsx)(P, {
                                AdComponent: (0, o.jsx)(F, {
                                    componentType: Q,
                                    entry: g,
                                    itemNumbers: Z,
                                    locale: y,
                                    titleProps: f,
                                    maxSlidesBySize: w
                                }),
                                adData: null == S ? void 0 : S[0],
                                clientDataLoaded: I,
                                itemType: "product_carousel"
                            }), q && !$ && (0, o.jsx)(D, {
                                componentType: Q,
                                children: (0, o.jsx)(c.Carousel, {
                                    containerSx: {
                                        margin: 0,
                                        padding: 0
                                    },
                                    contentTypeJoinder: X.contenttypejoinder,
                                    contentTypeLabel: X.contenttypelabel,
                                    disableBottomControls: (null == S ? void 0 : S.length) === 1,
                                    items: null == S ? void 0 : S.map((e, t) => (0, o.jsx)(P, {
                                        adData: e,
                                        clientDataLoaded: I,
                                        externalLinkModule: C,
                                        itemType: E
                                    }, t)),
                                    navigationButtonsBottomAlign: !!(O || N),
                                    navigationButtonsMobileDisplay: !!(O || N),
                                    slideContainerSx: {
                                        marginBottom: "20px"
                                    },
                                    disableControls: (null == S ? void 0 : S.length) === 1,
                                    isAutoplay: U,
                                    itemsPerSlide: 1,
                                    label: X.label,
                                    labelledBy: (null == f ? void 0 : f.title) ? J : void 0,
                                    nextLabel: X.nextlabel,
                                    pauseLabel: X.pauselabel,
                                    playLabel: X.playlabel,
                                    previousLabel: X.previouslabel,
                                    randomizeItems: M,
                                    uniqueId: "adset-thirdparty"
                                })
                            }), !q && (0, o.jsx)(D, {
                                componentType: Q,
                                children: null == S ? void 0 : S.map((e, t) => (0, o.jsx)(P, {
                                    adData: e,
                                    clientDataLoaded: I,
                                    externalLinkModule: C,
                                    itemType: E
                                }, t))
                            })]
                        })]
                    })
                }
        },
        10150: function(e, t, n) {
            "use strict";
            n.d(t, {
                Fx: function() {
                    return d
                },
                K1: function() {
                    return r
                },
                Tn: function() {
                    return c
                },
                Vc: function() {
                    return l
                },
                Wq: function() {
                    return u
                },
                Z5: function() {
                    return o
                },
                mF: function() {
                    return a
                },
                oT: function() {
                    return i
                },
                su: function() {
                    return s
                }
            });
            let o = "full",
                r = "fourCornersCategory",
                i = "half",
                l = "oneFourth",
                a = "oneFourthMix",
                c = "oneSixth",
                d = "oneThird",
                u = "skeleton",
                s = "AdButlerProductTileCarouselContainer"
        },
        69579: function(e, t, n) {
            "use strict";
            n.d(t, {
                AdobeAdSet: function() {
                    return C
                }
            });
            var o = n(57437),
                r = n(88176),
                i = n(2265),
                l = n(79715),
                a = n(35527),
                c = n(59011),
                d = n(50903),
                u = n(4369),
                s = n(7302),
                p = n(42399),
                x = n(96043),
                m = n(19421),
                v = n(97416),
                h = n(3795);
            let g = "CategoryAdSet",
                f = e => {
                    let {
                        entry: t,
                        entryId: n,
                        titleProps: r,
                        keyword: i,
                        sx: l = {}
                    } = e, {
                        adobeCategoryResponse: a
                    } = (0, d.b)(t, i), f = (0, m.wm)(a);
                    if (!f || f.length < c.cM) return null;
                    let y = (0, x.Ny)();
                    return (null == t ? void 0 : t.ad_set_style) === "rotating" ? (0, o.jsxs)(h.CostcoBox, {
                        sx: { ...y,
                            maxWidth: "100vw",
                            ...l
                        },
                        children: [r && (0, o.jsx)(p.AdSetTitle, { ...r
                        }), (0, o.jsx)(u.Carousel, {
                            containerSx: {
                                margin: "0 ".concat(s.vdF),
                                padding: 0
                            },
                            items: null == f ? void 0 : f.map((e, t) => {
                                let r = t.toString();
                                return e && (0, o.jsx)(v.d, {
                                    background: !1,
                                    categoryData: e,
                                    dataTestId: "".concat(g, "-").concat(n, "-").concat(r),
                                    foreground: !0,
                                    hasCategoryTitle: !0,
                                    isLoading: !1,
                                    variant: "stacked"
                                }, "adobeCategoryTile_".concat(r))
                            }),
                            itemsPerSlide: {
                                desktop: c.hS,
                                mobile: c.VE,
                                tablet: c.ZK
                            },
                            slideContainerSx: {
                                ".slider-list": {
                                    margin: "auto"
                                }
                            },
                            randomizeItems: t.rotating_options.randomize_items,
                            slideGap: s.oFH,
                            wrapAround: !1
                        })]
                    }) : (0, o.jsxs)(h.CostcoBox, {
                        sx: { ...y
                        },
                        children: [r && (0, o.jsx)(p.AdSetTitle, { ...r
                        }), (0, o.jsx)(h.CostcoBox, {
                            sx: x.ww,
                            children: null == f ? void 0 : f.map((e, t) => {
                                let r = t.toString();
                                return e && (0, o.jsx)(v.d, {
                                    background: !1,
                                    categoryData: e,
                                    dataTestId: "".concat(g, "-").concat(n, "-").concat(r),
                                    foreground: !0,
                                    hasCategoryTitle: !0,
                                    isLoading: !1,
                                    variant: "stacked"
                                }, "adobeCategoryTile_".concat(r))
                            })
                        })]
                    })
                };
            var y = n(68139),
                b = n(2295);
            let _ = e => {
                    var t, n;
                    let {
                        entry: r,
                        locale: l,
                        titleProps: a,
                        maxSlides: c,
                        maxSlidesBySize: u,
                        productTileSx: p,
                        carouselContainerSx: x,
                        keyword: m,
                        sx: v = {},
                        contextData: g,
                        isProductDetailsPage: f
                    } = e, {
                        trackEvent: _
                    } = (0, y.rS)(), {
                        adobeProductsResponse: C
                    } = (0, d.b)(r, m, g), w = (0, i.useMemo)(() => {
                        var e;
                        return null == (e = null == C ? void 0 : C.products) ? void 0 : e.map(e => {
                            let {
                                id: t
                            } = e;
                            return t
                        })
                    }, [null == C ? void 0 : C.products]);
                    if (!r || (null == C ? void 0 : C.products.length) === 0) return null;
                    let {
                        product_card_display_style: T,
                        show_reviews: j,
                        show_action_button: S,
                        inventory_aware_listings: k,
                        product_tile_data_source: I
                    } = r.product_display_style, B = { ...a
                    };
                    return g && g.category_title && (B.title = null == (t = null == a ? void 0 : a.title) ? void 0 : t.replace("{{category_title}}", g.category_title)), (0, o.jsx)(h.CostcoBox, {
                        sx: {
                            width: f ? "100%" : "calc(100% - ".concat(s.ODt, ")")
                        },
                        children: (0, o.jsx)(b.ProductTileCarouselClient, {
                            analytics: {
                                onCarouselViewed: () => {
                                    _({
                                        trackedData: { ...C.adobeMeta,
                                            ...C.adobeOnImpr
                                        },
                                        trackType: "object"
                                    })
                                },
                                onTileClicked: e => {
                                    var t;
                                    _({
                                        trackedData: { ...C.adobeMeta,
                                            ...null == (t = C.products.find(t => {
                                                let {
                                                    id: n
                                                } = t;
                                                return n === e
                                            })) ? void 0 : t.adobeOnClick
                                        },
                                        trackType: "object"
                                    })
                                },
                                viewThreshold: .75
                            },
                            containerSx: x,
                            dataPrivate: null == (n = r.enable_url_tracking) ? void 0 : n.disable_third_party_tracking,
                            inventoryAware: k,
                            isProductDetailsPage: f,
                            itemNumbers: w,
                            locale: l,
                            maxSlides: c,
                            maxSlidesBySize: u,
                            pageType: void 0,
                            productTileSx: p,
                            showActionButton: S,
                            showReviews: j,
                            sx: v,
                            testId: "Adobe_Products",
                            titleProps: B,
                            variant: T,
                            product_tile_data_source: I,
                            wrapAround: !f && void 0,
                            ...f && {
                                peekAdjacent: "1rem"
                            },
                            ...f && {
                                wrapAround: !1
                            }
                        })
                    })
                },
                C = e => {
                    var t;
                    let {
                        entry: n,
                        locale: u,
                        titleProps: s,
                        maxSlides: p,
                        maxSlidesBySize: x,
                        productTileSx: m,
                        carouselContainerSx: v,
                        sx: h,
                        contextData: g,
                        isProductDetailsPage: y
                    } = e, {
                        thirdPartyInfo: b
                    } = (0, a.$)(), {
                        consentManagement: C
                    } = b, {
                        isTargetingEnabled: w
                    } = C || {}, {
                        queryParams: T
                    } = (0, r.useQueryParams)(), [j, S] = (0, i.useState)(d.N), k = (0, i.useMemo)(() => (null == T ? void 0 : T.get("keyword")) || "", [T]), {
                        item_type: I,
                        title: B,
                        uid: P
                    } = n;
                    return ((0, i.useEffect)(() => {
                        let e = () => {
                            j || S(!0)
                        };
                        return document.addEventListener("at-library-loaded", e), () => {
                            document.removeEventListener("at-library-loaded", e)
                        }
                    }, [j]), w) ? I === c.iv ? j && (0, o.jsx)(l.Analytics, {
                        analyticData: {
                            adItem: {
                                style: "carousel",
                                title: null == (t = null == n ? void 0 : n.ad_set_heading_and_costco_url) ? void 0 : t.title,
                                type: "product"
                            },
                            title: B
                        },
                        children: (0, o.jsx)(_, {
                            carouselContainerSx: v,
                            contextData: g,
                            entry: n,
                            isProductDetailsPage: y,
                            keyword: k,
                            locale: u,
                            maxSlides: p,
                            maxSlidesBySize: x,
                            productTileSx: m,
                            sx: h,
                            titleProps: s
                        })
                    }) : j && (0, o.jsx)(l.Analytics, {
                        analyticData: {
                            adItem: {
                                style: "banner",
                                type: "category"
                            },
                            title: n.title
                        },
                        children: (0, o.jsx)(f, {
                            entry: n,
                            entryId: P,
                            keyword: (null == T ? void 0 : T.get("keyword")) || "",
                            sx: h,
                            titleProps: s
                        })
                    }) : null
                }
        },
        41998: function(e, t, n) {
            "use strict";
            n.d(t, {
                CriteoAdSet: function() {
                    return M
                }
            });
            var o = n(57437),
                r = n(30518),
                i = n(8328),
                l = n(10004),
                a = n(2265),
                c = n(7302),
                d = n(35527),
                u = n(3795),
                s = n(63853),
                p = n(18707),
                x = n(79715),
                m = n(42399),
                v = n(2295),
                h = n(96043),
                g = n(14739),
                f = n(11563),
                y = n(81654);

            function b(e) {
                var t, n;
                let {
                    a11yCriteo: r,
                    contentStackEntry: l = {},
                    locale: a,
                    titleProps: d,
                    products: b,
                    placement: _,
                    ParentSKUs: C,
                    productTileSx: w,
                    sx: T = {}
                } = e, {
                    bdWHNumber: j
                } = (0, i.F)(), {
                    isTablet: S,
                    isDesktop: k,
                    isMobile: I
                } = (0, s.T)(), {
                    criteo_placement_name: B
                } = (null == l ? void 0 : l.third_party_curation) || {}, {
                    product_card_display_style: P,
                    show_reviews: A,
                    show_action_button: O,
                    inventory_aware_listings: D,
                    product_tile_data_source: N
                } = (null == l ? void 0 : l.product_display_style) || {}, F = (0, f.E)({
                    placement: _,
                    products: b
                });
                if (!b || !_) return null;
                let R = "".concat(g.lP, "_").concat(B),
                    L = null == _ ? void 0 : _.rendering,
                    W = k || S ? "desktop" : "mobile",
                    E = null == L ? void 0 : L["".concat(W, "_background_image")],
                    H = null == L ? void 0 : L["".concat(W, "_background_image_alt_text")],
                    U = null == L ? void 0 : L.border_color,
                    M = null == L ? void 0 : L.background_color,
                    V = O ? 40 : 0,
                    K = "".concat(250 - V, "px");
                S ? K = "".concat(225 - V, "px") : I && (K = "".concat(250 - V, "px"));
                let z = (null == L ? void 0 : L.optional_footer_redirect_url) || (null == L ? void 0 : L.web_redirect_URL),
                    G = z ? e => {
                        var t;
                        let {
                            sx: n,
                            children: r
                        } = e;
                        return (0, o.jsx)(p.Link, {
                            dataPrivate: null == (t = null == l ? void 0 : l.enable_url_tracking) ? void 0 : t.disable_third_party_tracking,
                            href: z,
                            sx: n,
                            children: r
                        })
                    } : e => {
                        let {
                            sx: t,
                            children: n
                        } = e;
                        return (0, o.jsx)(u.CostcoBox, {
                            sx: t,
                            children: n
                        })
                    };
                return (0, o.jsxs)(u.CostcoBox, {
                    sx: {
                        minWidth: "100%",
                        ...h.Ny,
                        ...T
                    },
                    children: [(0, o.jsx)(m.AdSetTitle, { ...d
                    }), (0, o.jsxs)(y.pA, {
                        borderColor: U,
                        "data-testid": R,
                        isMobile: I,
                        children: [(0, o.jsx)(G, {
                            sx: {
                                background: M,
                                borderBottomLeftRadius: I ? void 0 : "10px",
                                borderTopLeftRadius: "10px",
                                borderTopRightRadius: I ? "10px" : void 0,
                                display: "flex",
                                flex: 1,
                                justifyContent: "center",
                                minHeight: k ? "100%" : void 0,
                                minWidth: I ? void 0 : "180px",
                                overflow: "hidden",
                                width: I ? "100%" : "50%"
                            },
                            children: (0, o.jsx)(x.Analytics, {
                                analyticData: {
                                    adItem: {
                                        style: "banner",
                                        title: H
                                    }
                                },
                                children: (0, o.jsx)(y.Jl, {
                                    alt: H,
                                    component: "img",
                                    isMobile: I,
                                    src: E
                                }, E)
                            })
                        }), (0, o.jsx)(y.AW, {
                            isMobile: I,
                            children: (0, o.jsx)(x.Analytics, {
                                analyticData: {
                                    adItem: {
                                        style: "carousel",
                                        title: null == (t = null == l ? void 0 : l.ad_set_heading_and_costco_url) ? void 0 : t.title,
                                        type: "product"
                                    },
                                    doNotTrack: null == (n = null == l ? void 0 : l.enable_url_tracking) ? void 0 : n.disable_third_party_tracking,
                                    title: l.title
                                },
                                children: (0, o.jsx)(v.ProductTileCarouselClient, {
                                    bdWHNumber: j,
                                    containerSx: {
                                        marginBottom: 0,
                                        maxWidth: I ? "100%" : void 0,
                                        padding: I ? void 0 : "".concat(c.oFH)
                                    },
                                    maxProductTileImageHeight: K,
                                    maxProductTileImageWidth: I ? "40%" : void 0,
                                    minProductTileImageWidth: I ? "40%" : void 0,
                                    productTileNumberSeparator: null == r ? void 0 : r.a11yProductTileSeperator,
                                    productTileSx: { ...w,
                                        marginBottom: 0,
                                        padding: 1
                                    },
                                    analytics: F,
                                    ariaLabel: null == r ? void 0 : r.a11yTitle,
                                    criteoDataSourceAttr: !0,
                                    hideReviewStarValue: !0,
                                    inventoryAware: D,
                                    isHorizontal: I,
                                    itemNumbers: C,
                                    locale: a,
                                    maxSlides: 1,
                                    navigationButtonBottomOffset: "70%",
                                    navigationButtonsBottomAlign: I,
                                    navigationButtonsMobileDisplay: I,
                                    productTileMaxLineNumber: 2,
                                    showActionButton: O,
                                    showReviews: A,
                                    showSlideNumber: !I,
                                    testId: R,
                                    variant: P,
                                    product_tile_data_source: N
                                })
                            })
                        })]
                    })]
                })
            }

            function _(e) {
                var t, n;
                let {
                    contentStackEntry: r = {},
                    locale: l,
                    titleProps: a,
                    products: c,
                    placement: d,
                    analytics: s,
                    ParentSKUs: p,
                    maxSlides: m,
                    maxSlidesBySize: f,
                    productTileSx: y,
                    carouselContainerSx: b,
                    sx: _ = {},
                    isProductDetailsPage: C = !1
                } = e, {
                    bdWHNumber: w
                } = (0, i.F)(), {
                    criteo_placement_name: T
                } = (null == r ? void 0 : r.third_party_curation) || {}, {
                    product_card_display_style: j,
                    show_reviews: S,
                    show_action_button: k,
                    inventory_aware_listings: I,
                    product_tile_data_source: B
                } = (null == r ? void 0 : r.product_display_style) || {};
                if (!c || !d) return null;
                let P = "".concat(g.lP, "_").concat(T),
                    A = {
                        adItem: {
                            style: "carousel",
                            title: null == (t = null == r ? void 0 : r.ad_set_heading_and_costco_url) ? void 0 : t.title,
                            type: "product"
                        },
                        title: r.title,
                        trackType: "ad"
                    },
                    O = {};
                return C || (O = h.Ny), (0, o.jsx)(u.CostcoBox, {
                    "data-testid": P,
                    sx: { ...O,
                        ..._
                    },
                    children: (0, o.jsx)(x.Analytics, {
                        analyticData: A,
                        children: (0, o.jsx)(v.ProductTileCarouselClient, {
                            bdWHNumber: w,
                            analytics: s,
                            containerSx: b,
                            criteoDataSourceAttr: !0,
                            dataPrivate: null == (n = null == r ? void 0 : r.enable_url_tracking) ? void 0 : n.disable_third_party_tracking,
                            inventoryAware: I,
                            isProductDetailsPage: C,
                            itemNumbers: p,
                            locale: l,
                            maxSlides: m,
                            maxSlidesBySize: f,
                            pageType: void 0,
                            productTileSx: y,
                            showActionButton: k,
                            showReviews: S,
                            testId: P,
                            titleProps: a,
                            variant: j,
                            product_tile_data_source: B,
                            ...C && {
                                peekAdjacent: "1rem"
                            },
                            ...C && {
                                wrapAround: !1
                            }
                        })
                    })
                })
            }
            b.displayName = g.lP;
            var C = n(18569);

            function w(e) {
                var t, n, r, l;
                let a, d, f, {
                        contentStackEntry: b = {},
                        locale: _,
                        titleProps: w,
                        products: T,
                        placement: j,
                        analytics: S,
                        ParentSKUs: k = [],
                        format: I,
                        productTileSx: B,
                        sx: P = {}
                    } = e,
                    {
                        bdWHNumber: A
                    } = (0, i.F)(),
                    {
                        isTablet: O,
                        isDesktop: D,
                        isMobile: N
                    } = (0, s.T)(),
                    {
                        criteo_placement_name: F
                    } = (null == b ? void 0 : b.third_party_curation) || {},
                    {
                        product_card_display_style: R,
                        show_reviews: L,
                        show_action_button: W,
                        inventory_aware_listings: E,
                        product_tile_data_source: H
                    } = (null == b ? void 0 : b.product_display_style) || {};
                if (!T || !j) return null;
                let U = "".concat(g.lP, "_").concat(F),
                    M = null == j ? void 0 : j.rendering,
                    V = D || O ? "desktop" : "mobile",
                    K = null == M ? void 0 : M["".concat(V, "_background_image")],
                    z = null == M ? void 0 : M["".concat(V, "_background_image_alt_text")],
                    G = null == M ? void 0 : M.border_color,
                    Z = "FS" === I || N,
                    q = Z ? N || O : N,
                    J = O ? 2 : 3,
                    Y = (null == M ? void 0 : M.optional_footer_redirect_url) ? e => {
                        var t;
                        let {
                            sx: n,
                            children: r
                        } = e;
                        return (0, o.jsx)(p.Link, {
                            dataPrivate: null == (t = null == b ? void 0 : b.enable_url_tracking) ? void 0 : t.disable_third_party_tracking,
                            href: null == M ? void 0 : M.optional_footer_redirect_url,
                            sx: n,
                            children: r
                        })
                    } : e => {
                        let {
                            sx: t,
                            children: n
                        } = e;
                        return (0, o.jsx)(u.CostcoBox, {
                            sx: t,
                            children: n
                        })
                    },
                    Q = "40%";
                Z || (Q = "55%"), Z && N && (Q = "-".concat(c.aiS)), N && (Q = "2%");
                let $ = {
                        "en-ca": {
                            carouselLabel: "Sponsored Products",
                            productTileNumberSeparator: "of"
                        },
                        "en-us": {
                            carouselLabel: "Sponsored Products",
                            productTileNumberSeparator: "of"
                        },
                        "fr-ca": {
                            carouselLabel: "Produits commandit\xe9s",
                            productTileNumberSeparator: "sur"
                        }
                    },
                    X = null == (t = $[_]) ? void 0 : t.carouselLabel,
                    ee = null == (n = $[_]) ? void 0 : n.productTileNumberSeparator,
                    et = {};
                et = q ? {
                    borderTopLeftRadius: y._M,
                    borderTopRightRadius: y._M
                } : {
                    borderBottomLeftRadius: y._M,
                    borderTopLeftRadius: y._M
                };
                let en = {};
                return Z ? (a = y.E9.flagship.minWidth, d = y.E9.flagship.maxWidth, f = y.E9.flagship.containerHeight) : (a = y.E9.showcase.minWidth, d = y.E9.showcase.maxWidth, d = "clamp(".concat(y.E9.showcase.minWidth, ", 35%, ").concat(y.E9.showcase.maxWidth, ")"), f = y.E9.showcase.containerHeight, en = {
                    height: "100%"
                }), (0, o.jsxs)(u.CostcoBox, {
                    sx: { ...h.Ny,
                        ...P
                    },
                    children: [(0, o.jsx)(m.AdSetTitle, { ...w
                    }), (0, o.jsxs)(y.yY, {
                        borderColor: G,
                        "data-testid": U,
                        isMobile: q,
                        children: [(0, o.jsx)(C.y, {
                            observer: {
                                onClick: null == S ? void 0 : S.onBannerClicked
                            },
                            sx: {
                                alignItems: "center",
                                display: "flex",
                                flex: 1,
                                justifyContent: "center",
                                maxHeight: f,
                                maxWidth: N ? "100%" : d,
                                minWidth: N ? void 0 : a,
                                overflow: "hidden",
                                width: N ? "100%" : void 0,
                                ...et
                            },
                            children: (0, o.jsx)(Y, {
                                sx: {
                                    maxHeight: f,
                                    alignItems: "center",
                                    display: "flex",
                                    flex: 1,
                                    justifyContent: "center",
                                    width: "100%"
                                },
                                children: (0, o.jsx)(x.Analytics, {
                                    analyticData: {
                                        adItem: {
                                            style: "banner",
                                            title: z
                                        }
                                    },
                                    children: (0, o.jsx)(y.Dd, {
                                        alt: z,
                                        component: "img",
                                        isFlagship: Z,
                                        isMobile: q,
                                        loading: "lazy",
                                        src: K
                                    }, K)
                                })
                            })
                        }), (0, o.jsx)(u.CostcoBox, {
                            sx: {
                                flex: 1,
                                maxWidth: "100%",
                                minWidth: 0
                            },
                            children: (0, o.jsx)(x.Analytics, {
                                analyticData: {
                                    adItem: {
                                        style: "carousel",
                                        title: null == (r = null == b ? void 0 : b.ad_set_heading_and_costco_url) ? void 0 : r.title,
                                        type: "product"
                                    },
                                    doNotTrack: null == (l = null == b ? void 0 : b.enable_url_tracking) ? void 0 : l.disable_third_party_tracking,
                                    title: b.title
                                },
                                children: (0, o.jsx)(v.ProductTileCarouselClient, {
                                    bdWHNumber: A,
                                    containerSx: {
                                        justifyContent: "center",
                                        maxWidth: q ? "100%" : void 0,
                                        padding: q ? "0" : "0 ".concat(c.oFH)
                                    },
                                    maxProductTileImageWidth: Z ? "30%" : void 0,
                                    minProductTileImageWidth: Z ? "30%" : void 0,
                                    navigationButtonBottomOffset: Q,
                                    productTileContainerSx: {
                                        alignItems: "center",
                                        display: "flex",
                                        justifyContent: "center",
                                        padding: 1
                                    },
                                    productTileNumberSeparator: ee,
                                    productTileSx: { ...B,
                                        ...en,
                                        marginBottom: 0,
                                        maxWidth: q ? "640px" : "480px"
                                    },
                                    sx: {
                                        alignItems: "center",
                                        display: "flex",
                                        height: "100%"
                                    },
                                    analytics: S,
                                    ariaLabel: X,
                                    criteoDataSourceAttr: !0,
                                    disableBottomControls: Z ? k.length <= 1 : !N,
                                    hideReviewStarValue: !0,
                                    inventoryAware: E,
                                    isHorizontal: Z,
                                    itemNumbers: k,
                                    locale: _,
                                    maxSlides: Z ? 1 : J,
                                    productTileMaxLineNumber: 1,
                                    showActionButton: W,
                                    showReviews: L,
                                    testId: U,
                                    variant: R,
                                    navigationButtonsMobileDisplay: N,
                                    product_tile_data_source: H
                                })
                            })
                        })]
                    })]
                })
            }
            var T = n(68139),
                j = n(40538),
                S = n(85361);
            let k = e => {
                    var t, n, o, r, i, l, a, c, d, u;
                    let s = new DOMParser().parseFromString(e, "application/xml"),
                        p = s.getElementsByTagName("parsererror");
                    if (p.length > 0) return console.error("Error parsing XML:", p[0].textContent), {};
                    let x = s.getElementsByTagName("Tracking"),
                        m = null == (r = null == (o = null == (n = null == (t = s.getElementsByTagName("MediaFile")) ? void 0 : t[0]) ? void 0 : n.firstChild) ? void 0 : o.textContent) ? void 0 : r.trim(),
                        v = null == (a = null == (l = null == (i = s.getElementsByTagName("ClosedCaptionFile")) ? void 0 : i[0]) ? void 0 : l.textContent) ? void 0 : a.trim(),
                        h = null == (u = null == (d = null == (c = s.getElementsByTagName("ClickThrough")) ? void 0 : c[0]) ? void 0 : d.textContent) ? void 0 : u.trim(),
                        g = {};
                    return Array.from(x).forEach(e => {
                        var t;
                        let n = e.getAttribute("event"),
                            o = null == (t = null == e ? void 0 : e.textContent) ? void 0 : t.trim();
                        g[n] = o
                    }), {
                        trackingEvents: g,
                        videoSrc: m,
                        captions: v,
                        redirectUrl: h
                    }
                },
                I = async (e, t) => {
                    let n = {},
                        o = {};
                    try {
                        let t = e;
                        e.includes("https") || (t = "https:".concat(e));
                        let r = await fetch(t),
                            i = await r.text();
                        n = k(i) || {}, o = null == n ? void 0 : n.trackingEvents
                    } catch (e) {
                        throw console.error("error vast", e), Error("Error getting VASTAnalytics")
                    }
                    return {
                        videoInformation: {
                            src: null == n ? void 0 : n.videoSrc,
                            captions: null == n ? void 0 : n.captions,
                            redirectUrl: null == n ? void 0 : n.redirectUrl
                        },
                        on25PercentComplete: () => (null == o ? void 0 : o.firstQuartile) && navigator.sendBeacon(null == o ? void 0 : o.firstQuartile),
                        on50PercentComplete: () => (null == o ? void 0 : o.midpoint) && (null == navigator ? void 0 : navigator.sendBeacon(null == o ? void 0 : o.midpoint)),
                        on75PercentComplete: () => (null == o ? void 0 : o.thirdQuartile) && navigator.sendBeacon(null == o ? void 0 : o.thirdQuartile),
                        on100PercentComplete: () => (null == o ? void 0 : o.complete) && (null == navigator ? void 0 : navigator.sendBeacon(null == o ? void 0 : o.complete)),
                        onMute: () => (null == o ? void 0 : o.mute) && (null == navigator ? void 0 : navigator.sendBeacon(null == o ? void 0 : o.mute)),
                        onPause: () => (null == o ? void 0 : o.pause) && (null == navigator ? void 0 : navigator.sendBeacon(null == o ? void 0 : o.pause)),
                        onResume: () => (null == o ? void 0 : o.resume) && (null == navigator ? void 0 : navigator.sendBeacon(null == o ? void 0 : o.resume)),
                        onStart: () => {
                            t({
                                trackType: S.HM,
                                trackedData: [{
                                    key: "videoLinkClick",
                                    value: 1
                                }]
                            }), (null == o ? void 0 : o.start) && (null == navigator || navigator.sendBeacon(null == o ? void 0 : o.start))
                        },
                        onUnmute: () => (null == o ? void 0 : o.unmute) && (null == navigator ? void 0 : navigator.sendBeacon(null == o ? void 0 : o.unmute))
                    }
                },
                B = e => {
                    let t, {
                            objVAST: n,
                            placement: o,
                            isDesktop: r,
                            locale: i,
                            variant: l = "default",
                            trackEvent: a
                        } = e,
                        c = null == n ? void 0 : n.videoInformation,
                        d = null == o ? void 0 : o.rendering,
                        u = r || "default" === l ? "" : "mobile_";
                    (null == c ? void 0 : c.src) && (t = null == c ? void 0 : c.src);
                    let s = {
                        aspectRatio: "default" === l ? "16:9" : "1:1",
                        autoReplay: !0,
                        autoplay: !0,
                        controlBar: {
                            customControlSpacer: !1,
                            fullscreenToggle: !1,
                            progressControl: !1,
                            remainingTimeDisplay: !1
                        },
                        controls: !0,
                        fluid: !0,
                        muted: !0,
                        playsinline: !0,
                        responsive: !0,
                        sources: {
                            src: t,
                            type: "video/mp4"
                        },
                        tracks: [{
                            kind: "captions",
                            label: "en" === (0, j.G3)(i) ? "English" : "French",
                            src: null == c ? void 0 : c.captions,
                            srclang: (0, j.G3)(i)
                        }],
                        userActions: {
                            click: () => {
                                a({
                                    adItem: {
                                        style: "video",
                                        title: null == d ? void 0 : d["".concat(u, "background_video_alt_text")]
                                    },
                                    itemCuration: "criteo",
                                    title: "video spotlight",
                                    trackType: "ad"
                                }), (null == o ? void 0 : o.OnClickBeacon) && navigator.sendBeacon(null == o ? void 0 : o.OnClickBeacon), window.open(null == c ? void 0 : c.redirectUrl, null == d ? void 0 : d.optional_redirect_target)
                            }
                        }
                    };
                    return {
                        legalText: null == d ? void 0 : d.optional_legal_text,
                        options: s
                    }
                },
                P = e => {
                    var t, n;
                    let o = {
                        "en-ca": {
                            carouselLabel: "Sponsored Products",
                            productTileNumberSeparator: "of"
                        },
                        "en-us": {
                            carouselLabel: "Sponsored Products",
                            productTileNumberSeparator: "of"
                        },
                        "fr-ca": {
                            carouselLabel: "Produits commandit\xe9s",
                            productTileNumberSeparator: "sur"
                        }
                    };
                    return {
                        carouselLabel: null == (t = o[e]) ? void 0 : t.carouselLabel,
                        productTileNumberSeparator: null == (n = o[e]) ? void 0 : n.productTileNumberSeparator
                    }
                };
            var A = n(60062),
                O = n(31691),
                D = n(29591),
                N = n(92144);
            let F = e => {
                    let {
                        text: t,
                        variant: n = "default",
                        isSmall: r
                    } = e;
                    return (0, o.jsx)(N.Text, {
                        sx: {
                            background: c.JSR,
                            borderBottomLeftRadius: "default" !== n || r ? void 0 : {
                                md: "10px"
                            },
                            color: c.W3Q,
                            padding: "".concat(c.M7t, " ").concat(c.vdF),
                            textAlign: "left",
                            width: "100%"
                        },
                        variant: "t7",
                        children: t
                    })
                },
                R = e => {
                    var t;
                    let {
                        contentStackEntry: n = {},
                        locale: r,
                        ParentSKUs: i,
                        productTileSx: l,
                        sx: a = {},
                        testId: d,
                        analytics: p,
                        carouselA11yInformation: m,
                        videoInformation: g,
                        videoBeacons: f,
                        isPdp: b = !1
                    } = e, _ = (0, O.Z)(), {
                        isBiggerDesktop: C,
                        isTablet: w,
                        isMobile: T
                    } = (0, s.T)(), S = (0, A.Z)("(min-width: ".concat(_.breakpoints.values.md, "px) and (max-width: 916px)")), {
                        product_card_display_style: k,
                        show_reviews: I,
                        show_action_button: B,
                        inventory_aware_listings: P,
                        product_tile_data_source: N
                    } = (null == n ? void 0 : n.product_display_style) || {}, R = "30%";
                    C && (R = "40%"), i.length > 1 || (R = "20%");
                    let L = T || S;
                    return (0, o.jsxs)(y.H4, {
                        sx: { ...h.Ny,
                            ...a
                        },
                        "data-testid": d,
                        isMobile: L,
                        isSmall: L,
                        children: [(0, o.jsx)(u.CostcoBox, {
                            sx: {
                                borderTopLeftRadius: L ? "10px" : void 0,
                                borderTopRightRadius: L ? "10px" : void 0,
                                display: "flex",
                                justifyContent: "center",
                                minWidth: L ? "100%" : void 0,
                                overflow: L ? "hidden" : void 0
                            },
                            children: (0, o.jsxs)(u.CostcoBox, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "column",
                                    maxWidth: L ? "640px" : "444.44px",
                                    minWidth: L ? void 0 : "444.44px",
                                    width: L ? "100%" : void 0
                                },
                                children: [(0, o.jsx)(u.CostcoBox, {
                                    sx: {
                                        borderBottomLeftRadius: L || !b || g.legalText ? b ? "" : g.legalText ? "" : {
                                            md: "10px"
                                        } : {
                                            md: "10px"
                                        },
                                        borderTopLeftRadius: S ? 0 : "10px",
                                        borderTopRightRadius: T ? "10px" : 0,
                                        height: L ? "100%" : "250px",
                                        overflow: "hidden"
                                    },
                                    children: (0, o.jsx)(D.Y, {
                                        analytics: f,
                                        controlBarStyles: "justify-content:center",
                                        language: (0, j.G3)(r),
                                        options: g.options
                                    })
                                }), g.legalText && (0, o.jsx)(F, {
                                    isSmall: L,
                                    text: g.legalText,
                                    variant: "default"
                                })]
                            })
                        }), (0, o.jsx)(u.CostcoBox, {
                            sx: {
                                display: "flex",
                                flex: 1,
                                height: "100%",
                                padding: L ? 0 : "".concat(c.vdF, " 0 ").concat(c.vdF, " ").concat(c.ODt),
                                paddingLeft: L ? 0 : c.ODt,
                                paddingTop: L ? c.oFH : void 0,
                                position: "relative"
                            },
                            children: (0, o.jsx)(x.Analytics, {
                                analyticData: {
                                    adItem: {
                                        style: "carousel",
                                        title: null == (t = null == n ? void 0 : n.ad_set_heading_and_costco_url) ? void 0 : t.title,
                                        type: "product"
                                    },
                                    title: n.title
                                },
                                children: (0, o.jsx)(v.ProductTileCarouselClient, {
                                    isProductDetailsPage: b,
                                    containerSx: {
                                        justifyContent: "center",
                                        maxWidth: L ? "100%" : void 0,
                                        padding: L ? "0" : "0 ".concat(c.oFH)
                                    },
                                    disableBottomControls: !L && i.length > 1,
                                    maxProductTileImageHeight: L ? void 0 : "100%",
                                    productTileContainerSx: {
                                        alignItems: "center",
                                        display: "flex",
                                        justifyContent: "center",
                                        padding: 1,
                                        ...b && {
                                            height: void 0
                                        }
                                    },
                                    productTileNumberSeparator: m.productTileNumberSeparator,
                                    productTileSx: { ...l,
                                        marginBottom: 0,
                                        maxWidth: !L && i.length > 1 ? "480px" : "100%"
                                    },
                                    sx: {
                                        alignItems: "center",
                                        display: "flex",
                                        height: "100%",
                                        ...L && b && {
                                            marginBottom: c.oFH
                                        }
                                    },
                                    analytics: p,
                                    ariaLabel: m.carouselLabel,
                                    criteoDataSourceAttr: !0,
                                    displayMultipleTiles: !L && i.length > 1,
                                    hideReviewStarValue: !0,
                                    inventoryAware: P,
                                    isHorizontal: !0,
                                    itemNumbers: i,
                                    locale: r,
                                    maxProductTileImageWidth: R,
                                    maxSlides: 1,
                                    minProductTileImageWidth: R,
                                    navigationButtonBottomOffset: "40%",
                                    navigationButtonsBottomAlign: L,
                                    navigationButtonsMobileDisplay: L,
                                    pageType: "homepage",
                                    productTileMaxLineNumber: 1,
                                    showActionButton: B,
                                    showReviews: I,
                                    showSlideNumber: w && i.length > 1,
                                    testId: d,
                                    variant: k,
                                    product_tile_data_source: N
                                })
                            })
                        })]
                    })
                },
                L = e => {
                    var t;
                    let {
                        contentStackEntry: n = {},
                        locale: r,
                        ParentSKUs: i,
                        productTileSx: l,
                        sx: a = {},
                        testId: d,
                        analytics: p,
                        carouselA11yInformation: m,
                        videoInformation: g,
                        videoBeacons: f
                    } = e, {
                        isTablet: b,
                        isMobile: _
                    } = (0, s.T)(), {
                        product_card_display_style: C,
                        show_reviews: w,
                        show_action_button: T,
                        inventory_aware_listings: S,
                        product_tile_data_source: k
                    } = (null == n ? void 0 : n.product_display_style) || {};
                    return (0, o.jsx)(u.CostcoBox, {
                        sx: {
                            width: "100%",
                            ...h.Ny,
                            ...a
                        },
                        children: (0, o.jsxs)(y.zY, {
                            "data-testid": d,
                            isMobile: _,
                            children: [(0, o.jsxs)(u.CostcoBox, {
                                sx: {
                                    borderTopLeftRadius: "10px",
                                    borderTopRightRadius: "10px",
                                    overflow: "hidden",
                                    paddingBottom: "1rem"
                                },
                                children: [(0, o.jsx)(D.Y, {
                                    analytics: f,
                                    controlBarStyles: "justify-content:center",
                                    language: (0, j.G3)(r),
                                    options: g.options
                                }), g.legalText && (0, o.jsx)(F, {
                                    text: g.legalText,
                                    variant: "rail"
                                })]
                            }), (0, o.jsx)(x.Analytics, {
                                analyticData: {
                                    adItem: {
                                        style: "carousel",
                                        title: null == (t = null == n ? void 0 : n.ad_set_heading_and_costco_url) ? void 0 : t.title,
                                        type: "product"
                                    },
                                    title: n.title
                                },
                                children: (0, o.jsx)(v.ProductTileCarouselClient, {
                                    containerSx: {
                                        marginBottom: 0,
                                        maxWidth: _ ? "100%" : void 0,
                                        padding: _ ? void 0 : "".concat(c.oFH)
                                    },
                                    productTileContainerSx: {
                                        alignItems: "center",
                                        display: "flex"
                                    },
                                    productTileNumberSeparator: m.productTileNumberSeparator,
                                    productTileSx: { ...l,
                                        marginBottom: 0,
                                        maxWidth: "224px"
                                    },
                                    analytics: p,
                                    ariaLabel: m.carouselLabel,
                                    criteoDataSourceAttr: !0,
                                    hideReviewStarValue: !0,
                                    inventoryAware: S,
                                    isHorizontal: !1,
                                    itemNumbers: i,
                                    locale: r,
                                    maxProductTileImageWidth: "224px",
                                    maxSlides: 1,
                                    navigationButtonBottomOffset: "70%",
                                    navigationButtonsBottomAlign: !1,
                                    navigationButtonsMobileDisplay: _,
                                    pageType: "search",
                                    productTileMaxLineNumber: 2,
                                    showActionButton: T,
                                    showReviews: w,
                                    showSlideNumber: b,
                                    testId: d,
                                    variant: C,
                                    product_tile_data_source: k
                                })
                            })]
                        })
                    })
                };
            var W = n(21851);
            let E = e => {
                let {
                    variant: t
                } = e, {
                    isMobile: n
                } = (0, s.T)();
                return (0, o.jsx)(W.Skeleton, {
                    sx: {
                        border: "1px solid",
                        borderColor: c.VlP,
                        borderRadius: "10px",
                        display: "flex",
                        flex: 1,
                        flexDirection: n || "rail" === t ? "column" : "row",
                        height: n || "rail" === t ? "753px" : "250px",
                        width: n || "rail" === t ? "330px" : {
                            lg: "1024px",
                            md: "768px"
                        }
                    },
                    "data-testid": "video_spotlight_skeleton"
                })
            };

            function H(e) {
                let {
                    contentStackEntry: t = {},
                    locale: n,
                    products: r,
                    placement: l,
                    ParentSKUs: c,
                    productTileSx: d,
                    sx: u = {},
                    variant: p = "default",
                    isPdp: x = !1
                } = e, {
                    isDesktop: m
                } = (0, s.T)(), {
                    productTileConfigData: v
                } = (0, i.F)(), [h, y] = (0, a.useState)(!0), [b, _] = (0, a.useState)({}), C = (0, f.E)({
                    placement: l,
                    products: r
                }), {
                    trackEvent: w
                } = (0, T.rS)(), [j, S] = (0, a.useState)({
                    legalText: "",
                    options: {}
                });
                if ((0, a.useEffect)(() => {
                        (null == l ? void 0 : l.TagVideoVAST) && I(null == l ? void 0 : l.TagVideoVAST, w).then(e => {
                            S(B({
                                objVAST: e,
                                isDesktop: m,
                                locale: n,
                                placement: l,
                                trackEvent: w,
                                variant: p
                            })), _(e), y(!1)
                        }).catch(() => {
                            y(!1)
                        })
                    }, [l, w, m, n, p]), !r || !l) return null;
                let {
                    criteo_placement_name: k
                } = (null == t ? void 0 : t.third_party_curation) || {}, A = P(n);
                return h ? (0, o.jsx)(E, {
                    variant: p
                }) : b && j && "rail" === p ? (0, o.jsx)(L, {
                    ParentSKUs: c,
                    analytics: C,
                    carouselA11yInformation: A,
                    contentStackEntry: t,
                    locale: n,
                    productTileConfigData: v,
                    productTileSx: d,
                    sx: u,
                    testId: "".concat(g.lP, "_").concat(k, "_").concat(p),
                    videoBeacons: b,
                    videoInformation: j
                }) : b && j && "default" === p ? (0, o.jsx)(R, {
                    ParentSKUs: c,
                    analytics: C,
                    carouselA11yInformation: A,
                    contentStackEntry: t,
                    locale: n,
                    productTileConfigData: v,
                    productTileSx: d,
                    sx: u,
                    testId: "".concat(g.lP, "_").concat(k, "_").concat(p),
                    videoBeacons: b,
                    videoInformation: j,
                    isPdp: x
                }) : null
            }
            H.displayName = g.lP;
            let U = a.memo(function(e) {
                    let {
                        contentStackEntry: t = {},
                        locale: n,
                        titleProps: d,
                        isSearchPage: p,
                        isCategoryPage: x,
                        maxSlides: m,
                        maxSlidesBySize: v,
                        productTileSx: h,
                        carouselContainerSx: g,
                        sx: y,
                        isProductDetailsPage: C = !1,
                        isTargetingEnabled: T
                    } = e, {
                        butterflyData: j,
                        butterflyError: S,
                        commerceData: k,
                        commerceError: I,
                        isLoadingCriteoData: B,
                        recommendedProductData: P,
                        recommendedProductError: A,
                        searchPageData: O,
                        searchPageError: D,
                        sponsoredProductData: N,
                        sponsoredProductError: F,
                        videoSpotlightData: R,
                        videoSpotlightError: L
                    } = (0, i.F)(), {
                        isMobile: W
                    } = (0, s.T)(), {
                        criteo_placement_name: E
                    } = (null == t ? void 0 : t.third_party_curation) || {}, U = p || x, M = "SpecialtyCarousel" === E, V = "CommerceDisplay" === E || "SearchCommerce" === E, K = "SearchButterfly" === E || "CategoryButterfly" === E, z = "VideoSpotlight" === E, G = null == N ? void 0 : N.placement;
                    if (M) G = null == P ? void 0 : P.placement;
                    else if (!U && V) G = null == k ? void 0 : k.placement;
                    else if (z && C || z && !U) G = null == R ? void 0 : R.placement;
                    else if (U) {
                        let e;
                        U && ("Carousel" === E || "SearchCarousel" === E || "SearchCarouselTop" === E || "carousel" === E || "carouseltop" === E) ? e = "Carousel" === E || "SearchCarousel" === E || "carousel" === E ? "carousel" : "carouseltop" : V ? e = "CommerceDisplay" : K ? e = "Butterfly1" : z && (e = "Video");
                        let t = x ? "viewCategory" : (0, r.vJ)() ? "viewSearchResult" : "viewSearchResults",
                            n = "".concat(t, "_API_").concat(W ? "mobile" : "desktop", "-").concat(e);
                        G = (0, l.lk)(n, null == O ? void 0 : O.placements)
                    }
                    let Z = null == G ? void 0 : G.products,
                        q = null == G ? void 0 : G.format,
                        J = (0, f.E)({
                            placement: G,
                            products: Z
                        }),
                        Y = (0, a.useMemo)(() => (null == Z ? void 0 : Z.map(e => {
                            let {
                                ParentSKU: t
                            } = e;
                            return t
                        })) || [], [Z]);
                    if (!t) return console.error("Missing Content Stack Entry"), null;
                    if (!T || B) return null;
                    if (!U && "Carousel" === E && (F || !N)) return F && console.error("Error loading sponsored product data", F), null;
                    if (M && (A || !P) || !U && V && (I || !k) || !U && K && (S || !j)) return F && console.error("Error loading specialty sponsored product data", F), null;
                    if (!U && z && (L || !R)) return F && console.error("Error loading specialty sponsored product data for Video Spotlight", F), null;
                    if (U && (D || !O)) return D && console.error("Error loading search page adset", D), null;
                    if (!N && !P && !k && !j && !O && !R) return null;
                    return Z && G ? V && (null == G ? void 0 : G.format) !== "sponsored_products" ? (0, o.jsx)(u.CostcoBox, {
                        sx: {
                            width: "calc(100% - ".concat(c.ODt, ")")
                        },
                        children: (0, o.jsx)(w, {
                            ParentSKUs: Y,
                            analytics: J,
                            contentStackEntry: t,
                            format: q,
                            locale: n,
                            placement: G,
                            productTileSx: h,
                            products: Z,
                            sx: y,
                            titleProps: d
                        })
                    }) : K && (null == G ? void 0 : G.format) !== "sponsored_products" ? (0, o.jsx)(b, {
                        ParentSKUs: Y,
                        analytics: J,
                        contentStackEntry: t,
                        format: q,
                        locale: n,
                        placement: G,
                        productTileSx: h,
                        products: Z,
                        sx: y,
                        titleProps: d
                    }) : z && (null == G ? void 0 : G.format) !== "sponsored_products" ? (0, o.jsx)(u.CostcoBox, {
                        sx: C ? { ...y
                        } : {
                            display: "flex",
                            justifyContent: "center",
                            width: W ? void 0 : "calc(100% - ".concat(c.ODt, ")")
                        },
                        children: (0, o.jsx)(H, {
                            ParentSKUs: Y,
                            analytics: J,
                            contentStackEntry: t,
                            format: q,
                            locale: n,
                            placement: G,
                            productTileSx: h,
                            products: Z,
                            sx: C ? {} : y,
                            titleProps: d,
                            variant: p ? "rail" : "default",
                            isPdp: C
                        })
                    }) : (0, o.jsx)(u.CostcoBox, {
                        sx: {
                            width: C ? "100%" : "calc(100% - ".concat(c.ODt, ")")
                        },
                        children: (0, o.jsx)(_, {
                            ParentSKUs: Y,
                            analytics: J,
                            carouselContainerSx: g,
                            contentStackEntry: t,
                            isProductDetailsPage: C,
                            locale: n,
                            maxSlides: m,
                            maxSlidesBySize: v,
                            placement: G,
                            productTileSx: h,
                            products: Z,
                            sx: y,
                            titleProps: d
                        })
                    }) : null
                }),
                M = function(e) {
                    let {
                        thirdPartyInfo: t
                    } = (0, d.$)(), {
                        consentManagement: n
                    } = t, {
                        isTargetingEnabled: r
                    } = n || {};
                    return (0, o.jsx)(U, {
                        isTargetingEnabled: r,
                        ...e
                    })
                };
            M.displayName = "CriteoAdSet"
        },
        14739: function(e, t, n) {
            "use strict";
            n.d(t, {
                Kw: function() {
                    return r
                },
                lP: function() {
                    return o
                }
            });
            let o = "CriteoAdSet",
                r = ["custom_costcoingriddisplay", "custom_costcocaingriddisplay", "DP"]
        },
        81654: function(e, t, n) {
            "use strict";
            n.d(t, {
                AW: function() {
                    return g
                },
                Dd: function() {
                    return y
                },
                E9: function() {
                    return s
                },
                E_: function() {
                    return u
                },
                H4: function() {
                    return x
                },
                JM: function() {
                    return p
                },
                Jl: function() {
                    return h
                },
                _M: function() {
                    return d
                },
                pA: function() {
                    return v
                },
                yY: function() {
                    return f
                },
                zY: function() {
                    return m
                }
            });
            var o = n(45008),
                r = n(16210),
                i = n(95666),
                l = n(7302),
                a = n(3795);

            function c() {
                let e = (0, o._)(["\n    width: 100%;\n    height: auto;\n    a {\n        display: block;\n        width: 100%;\n    }\n    a > img,\n    img {\n        max-width: 100%;\n        height: auto;\n        object-fit: cover;\n        @media screen and (-webkit-min-device-pixel-ratio: 0) and (max-width: 768px) {\n            /* Styles generally targeting iPhone-sized displays in WebKit browsers */\n            width: 100%;\n        }\n    }\n"]);
                return c = function() {
                    return e
                }, e
            }
            let d = "10px",
                u = (0, r.ZP)("div")(c()),
                s = {
                    flagship: {
                        containerHeight: "200px",
                        height: "200px",
                        maxWidth: "576px",
                        minWidth: "384px"
                    },
                    showcase: {
                        containerHeight: "500px",
                        height: "500px",
                        maxWidth: "310px",
                        minWidth: "180px"
                    }
                },
                p = {
                    borderRadius: d,
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
                },
                x = (0, r.ZP)(a.CostcoBox, {
                    shouldForwardProp: e => "isMobile" !== e && "isSmall" !== e
                })(e => {
                    let {
                        isMobile: t,
                        isSmall: n
                    } = e;
                    return {
                        border: "1px solid",
                        borderColor: l.VlP,
                        borderRadius: d,
                        display: "flex",
                        flex: 1,
                        flexDirection: t ? "column" : "row",
                        maxWidth: n ? "640px" : void 0
                    }
                }),
                m = (0, r.ZP)(a.CostcoBox, {
                    shouldForwardProp: e => "isMobile" !== e
                })(() => ({
                    border: "1px solid",
                    borderColor: l.VlP,
                    borderRadius: d,
                    display: "flex",
                    flex: 1,
                    flexDirection: "column"
                })),
                v = (0, r.ZP)(a.CostcoBox, {
                    shouldForwardProp: e => "isMobile" !== e && "borderColor" !== e
                })(e => {
                    let {
                        isMobile: t,
                        borderColor: n
                    } = e;
                    return {
                        border: "1px solid",
                        borderColor: n,
                        borderRadius: d,
                        display: "flex",
                        flex: 1,
                        flexDirection: t ? "column" : "row"
                    }
                }),
                h = (0, r.ZP)(i.Image, {
                    shouldForwardProp: e => "isMobile" !== e && "isFlagship" !== e
                })(e => {
                    let {
                        isMobile: t
                    } = e;
                    return {
                        "@keyframes loading": {
                            "0%": {
                                backgroundColor: l.iKu
                            },
                            "100%": {
                                backgroundColor: l.bdf
                            }
                        },
                        animation: "loading 2s linear infinite alternate",
                        backgroundPosition: "top center",
                        objectFit: "cover",
                        objectPosition: "top center",
                        width: t ? "100%" : "310px"
                    }
                }),
                g = (0, r.ZP)(a.CostcoBox, {
                    shouldForwardProp: e => "isMobile" !== e
                })(e => {
                    let {
                        isMobile: t
                    } = e;
                    return {
                        flex: 1,
                        width: t ? "100%" : "50%"
                    }
                }),
                f = (0, r.ZP)(a.CostcoBox, {
                    shouldForwardProp: e => "isMobile" !== e && "borderColor" !== e
                })(e => {
                    let {
                        isMobile: t,
                        borderColor: n
                    } = e;
                    return {
                        alignItems: "center",
                        border: "1px solid",
                        borderColor: n,
                        borderRadius: d,
                        display: "flex",
                        flex: 1,
                        flexDirection: t ? "column" : "row"
                    }
                });
            (0, r.ZP)(a.CostcoBox, {
                shouldForwardProp: e => "isMobile" !== e && "isDesktop" !== e && "isFlagship" !== e
            })(e => {
                let t, n, o, {
                        isMobile: r,
                        isFlagship: i
                    } = e,
                    l = {};
                return r && (l = {
                    borderTopLeftRadius: d,
                    borderTopRightRadius: d
                }), i ? (t = s.flagship.minWidth, n = s.flagship.maxWidth, o = s.flagship.containerHeight) : (t = s.showcase.minWidth, n = s.showcase.maxWidth, o = s.showcase.containerHeight), {
                    alignItems: "center",
                    display: "flex",
                    flex: 1,
                    justifyContent: "center",
                    maxHeight: o,
                    maxWidth: r ? "100%" : n,
                    minWidth: r ? void 0 : t,
                    overflow: "hidden",
                    width: r ? "100%" : void 0,
                    ...l
                }
            });
            let y = (0, r.ZP)(i.Image, {
                shouldForwardProp: e => "isMobile" !== e && "isFlagship" !== e
            })(e => {
                let t, n, {
                    isMobile: o,
                    isFlagship: r
                } = e;
                return r ? (t = s.flagship.height, n = s.flagship.maxWidth) : (t = s.showcase.height, n = s.showcase.maxWidth), {
                    "@keyframes loading": {
                        "0%": {
                            backgroundColor: l.iKu
                        },
                        "100%": {
                            backgroundColor: l.bdf
                        }
                    },
                    animation: "loading 2s linear infinite alternate",
                    backgroundPosition: "top center",
                    height: o ? void 0 : t,
                    minHeight: o ? "50px" : t,
                    minWidth: o ? void 0 : n,
                    objectFit: "fill",
                    objectPosition: "top center",
                    width: o ? "100%" : n
                }
            });
            (0, r.ZP)(a.CostcoBox, {
                shouldForwardProp: e => "isMobile" !== e && "isFlagship" !== e
            })(e => {
                let {
                    isMobile: t,
                    isFlagship: n
                } = e, o = "60%";
                return t && (o = "100%"), {
                    flex: 1,
                    maxWidth: n ? o : void 0,
                    minWidth: t ? "90%" : void 0,
                    padding: "0 ".concat(l.oFH)
                }
            })
        },
        11563: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return r
                }
            });
            var o = n(59011);

            function r(e) {
                let {
                    placement: t,
                    products: n
                } = e, r = e => {
                    e && navigator.sendBeacon(e)
                }, i = e => {
                    if (n) return null == n ? void 0 : n.find(t => {
                        let {
                            ParentSKU: n,
                            ProductId: o
                        } = t;
                        return n === e || o === e
                    })
                }, l = (e, t) => {
                    let n = i(e);
                    n && r(null == n ? void 0 : n[t])
                };
                return {
                    minimumViewTime: o.$f,
                    onBannerClicked: () => {
                        t && r(t.OnClickBeacon)
                    },
                    onBannerFileClicked: () => {
                        t && r(t.OnFileClickBeacon)
                    },
                    onBundleBasketChangeBeacon: () => {
                        t && r(t.OnBundleBasketChangeBeacon)
                    },
                    onCarouselRendered: () => {
                        t && r(t.OnLoadBeacon)
                    },
                    onCarouselViewed: () => {
                        t && r(t.OnViewBeacon)
                    },
                    onTileClicked: e => l(e, "OnClickBeacon"),
                    onTileLoad: e => l(e, "OnLoadBeacon"),
                    onTileViewed: e => l(e, "OnViewBeacon"),
                    viewThreshold: o.YF
                }
            }
        },
        14628: function(e, t, n) {
            "use strict";
            n.d(t, {
                CollectionCarousel: function() {
                    return x
                }
            });
            var o = n(57437),
                r = n(2265),
                i = n(50621),
                l = n(25465);
            async function a(e, t, n) {
                let {
                    required_request_headers: o,
                    endpoint: r,
                    custom_properties: {
                        loc: a
                    },
                    authentification_token: c = ""
                } = await (0, i.ms)(i.dl.ServiceConfiguration, "search_service_nav_config_usbc");
                if (!r || !n) return null;
                let d = "".concat(r, "?q=").concat(e, "&url=%2F").concat(t, ".html&loc=").concat(a, "&locale=").concat((0, l.ho)(n));
                try {
                    return await fetch(d, {
                        method: "GET",
                        headers: { ...o,
                            Authorization: "Basic ".concat(c)
                        }
                    }).then(e => e.json())
                } catch (e) {
                    return console.error("LucidWorks fetch failed", e), null
                }
            }
            let c = (e, t, n, o) => {
                let [i, l] = (0, r.useState)([]), {
                    third_party_curation: c
                } = e, {
                    lucidworks_placement_name: d
                } = c || {}, u = () => {
                    d && a(t, n, o).then(e => {
                        var t, n;
                        if (!e) {
                            l([]);
                            return
                        }
                        l((null == (n = null == (t = e.response) ? void 0 : t.docs) ? void 0 : n.map(e => {
                            let {
                                group_id: t = ""
                            } = e;
                            return t
                        })) || [])
                    })
                };
                return (0, r.useEffect)(() => {
                    u()
                }, [c]), {
                    itemIds: i
                }
            };
            var d = n(7302),
                u = n(2295),
                s = n(3795);
            let p = e => {
                    let {
                        entry: t,
                        locale: n,
                        titleProps: r,
                        maxSlides: i,
                        productTileSx: l,
                        carouselContainerSx: a,
                        sx: c = {},
                        isProductDetailsPage: p,
                        itemIds: x = []
                    } = e;
                    if (!t || 0 === x.length) return null;
                    let {
                        product_card_display_style: m,
                        show_reviews: v,
                        show_action_button: h,
                        inventory_aware_listings: g
                    } = t.product_display_style;
                    return (0, o.jsx)(s.CostcoBox, {
                        sx: {
                            width: p ? "100%" : "calc(100% - ".concat(d.ODt, ")")
                        },
                        children: (0, o.jsx)(u.ProductTileCarouselClient, {
                            analytics: {},
                            containerSx: a,
                            inventoryAware: g,
                            isProductDetailsPage: p,
                            itemNumbers: x,
                            locale: n,
                            maxSlides: i,
                            pageType: void 0,
                            productTileSx: l,
                            showActionButton: h,
                            showReviews: v,
                            sx: c,
                            testId: "LucidWorks_Products",
                            titleProps: r,
                            variant: m,
                            wrapAround: !p && void 0,
                            ...p && {
                                peekAdjacent: "1rem"
                            },
                            ...p && {
                                wrapAround: !1
                            }
                        })
                    })
                },
                x = e => {
                    let {
                        entry: t,
                        locale: n,
                        contextData: r,
                        titleProps: i,
                        isProductDetailsPage: l,
                        maxSlides: a,
                        productTileSx: d,
                        carouselContainerSx: u,
                        sx: s
                    } = e, {
                        collectionName: x,
                        collectionSlug: m,
                        pdpId: v
                    } = r, {
                        itemIds: h = []
                    } = c(t, "*:*", m, n), {
                        title: g = "",
                        href: f = ""
                    } = i || {}, y = { ...i,
                        href: m ? f.replace("{{collectionSlug}}", m) : null,
                        title: x ? g.replace("{{collectionName}}", x) : null
                    }, b = h.filter(e => String(e) !== String(v));
                    return (0, o.jsx)(p, {
                        entry: t,
                        locale: n,
                        titleProps: y,
                        isProductDetailsPage: l,
                        maxSlides: a,
                        productTileSx: d,
                        carouselContainerSx: u,
                        sx: s,
                        itemIds: b
                    })
                }
        },
        18569: function(e, t, n) {
            "use strict";
            n.d(t, {
                y: function() {
                    return l
                }
            });
            var o = n(57437),
                r = n(29621),
                i = n(3795);

            function l(e) {
                let t = (0, r.y)(e.observer);
                return (0, o.jsx)(i.CostcoBox, {
                    ref: t,
                    sx: e.sx,
                    children: e.children
                })
            }
        },
        2295: function(e, t, n) {
            "use strict";
            n.d(t, {
                ProductTileCarouselClient: function() {
                    return nd
                }
            });
            var o = n(57437),
                r = n(67899),
                i = n(30518),
                l = n(8328),
                a = n(2265),
                c = n(35527),
                d = n(57555),
                u = n(4369),
                s = n(7302),
                p = n(42399),
                x = n(10150),
                m = n(96043),
                v = n(3795),
                h = n(63853),
                g = n(18569),
                f = n(21851),
                y = n(41530);
            let b = e => {
                let {
                    isHorizontal: t,
                    minProductTileImageWidth: n
                } = e;
                return t ? (0, o.jsxs)(v.CostcoBox, {
                    sx: {
                        alignItems: "flex-end",
                        display: "flex",
                        justifyContent: "center",
                        minWidth: "100%"
                    },
                    children: [(0, o.jsx)(v.CostcoBox, {
                        sx: {
                            marginRight: s.oFH,
                            minWidth: n,
                            width: "200px"
                        },
                        children: (0, o.jsx)(f.Skeleton, {
                            height: 200,
                            variant: "rectangular"
                        })
                    }), (0, o.jsxs)(y.default, {
                        spacing: 1,
                        sx: {
                            minWidth: "60%"
                        },
                        children: [(0, o.jsx)(v.CostcoBox, {
                            sx: {
                                width: "40%"
                            },
                            children: (0, o.jsx)(f.Skeleton, {
                                variant: "textBody"
                            })
                        }), (0, o.jsx)(f.Skeleton, {
                            variant: "textBody"
                        }), (0, o.jsx)(f.Skeleton, {
                            variant: "textBody"
                        }), (0, o.jsx)(f.Skeleton, {
                            height: 40,
                            variant: "rectangular"
                        })]
                    })]
                }) : (0, o.jsxs)(y.default, {
                    "data-testid": "productTileSkeletonTestId",
                    spacing: 4,
                    width: 160,
                    children: [(0, o.jsx)(f.Skeleton, {
                        height: 160,
                        variant: "rectangular"
                    }), (0, o.jsxs)(y.default, {
                        spacing: 1,
                        children: [(0, o.jsx)(f.Skeleton, {
                            variant: "textBody",
                            width: 52
                        }), (0, o.jsx)(f.Skeleton, {
                            variant: "textBody"
                        }), (0, o.jsx)(f.Skeleton, {
                            variant: "textBody",
                            width: 104
                        })]
                    }), (0, o.jsx)(f.Skeleton, {
                        height: 40,
                        variant: "rectangular"
                    })]
                })
            };
            b.displayName = "ProductTileSkeleton";
            let _ = {
                    display: "flex"
                },
                C = {
                    maxWidth: "100%"
                },
                w = {
                    maxWidth: 1400,
                    width: "100%"
                };

            function T(e) {
                let {
                    expectedProductNumber: t,
                    maxItemsPerSlide: n,
                    containerSx: r = {},
                    isHorizontal: i,
                    minProductTileImageWidth: l,
                    titleProps: a,
                    carouselContainerSx: c
                } = e;
                return (0, o.jsxs)(v.CostcoBox, {
                    children: [(null == a ? void 0 : a.title) && (0, o.jsx)(v.CostcoBox, {
                        sx: {
                            marginBottom: s.oFH
                        },
                        children: (0, o.jsx)(f.Skeleton, {
                            height: 40,
                            variant: "rectangular"
                        })
                    }), (0, o.jsx)(v.CostcoBox, {
                        sx: {
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "flex-start",
                            width: "100%"
                        },
                        children: (0, o.jsxs)(v.CostcoBox, {
                            sx: c,
                            children: [(0, o.jsx)(u.Carousel, {
                                items: [...Array(t).keys()].map((e, t) => (0, o.jsx)(v.CostcoBox, {
                                    sx: {
                                        display: "flex",
                                        flexDirection: "column",
                                        height: "100%",
                                        padding: i ? 0 : s.M7t,
                                        paddingBottom: i ? 0 : s.vdF,
                                        ...r
                                    },
                                    children: (0, o.jsx)(v.CostcoBox, {
                                        sx: {
                                            ProductTileContainerSx: _,
                                            ...C,
                                            ...r
                                        },
                                        children: (0, o.jsx)(b, {
                                            minProductTileImageWidth: l,
                                            isHorizontal: i
                                        })
                                    })
                                }, "productTile-skeleton-".concat(t))),
                                itemsPerSlide: Math.min(t, n)
                            }), !i && (0, o.jsxs)(v.CostcoBox, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: 2,
                                    justifyContent: "center",
                                    minHeight: "56px"
                                },
                                children: [(0, o.jsx)(f.Skeleton, {
                                    height: 20,
                                    variant: "circular",
                                    width: 20
                                }), (0, o.jsx)(f.Skeleton, {
                                    height: 20,
                                    variant: "circular",
                                    width: 20
                                }), (0, o.jsx)(f.Skeleton, {
                                    height: 20,
                                    variant: "circular",
                                    width: 20
                                })]
                            })]
                        })
                    })]
                })
            }
            var j = n(92144),
                S = n(91468),
                k = n(62294),
                I = n(37591),
                B = n(13894),
                P = n(14922),
                A = n(40538);
            let O = e => !!e && "string" == typeof e && new Date(e) > new Date,
                D = e => {
                    var t, n, o;
                    let r = null == (t = e.variantRollupValues["attributes.member_only"]) ? void 0 : t[0],
                        i = null == (o = null == (n = e.product.attributes.disp_price_in_cart_only) ? void 0 : n.numbers) ? void 0 : o[0];
                    return !!r && 1 === i
                },
                N = e => new Set(null == e ? void 0 : e.map(e => e.toString().toLocaleLowerCase())),
                F = (e, t) => N(e).has(t.toLowerCase()),
                R = e => {
                    var t, n, o, r, i;
                    return !!((null == (n = null == (t = e.product.attributes.buyable) ? void 0 : t.numbers) ? void 0 : n[0]) && (null == (i = null == (r = null == (o = e.product.variants[0]) ? void 0 : o.attributes.buyable) ? void 0 : r.numbers) ? void 0 : i[0]))
                },
                L = e => {
                    var t, n, o;
                    return !!(null == (n = null == (t = e.product.attributes.chdi_eligible) ? void 0 : t.numbers) ? void 0 : n[0]) || !!(null == (o = e.variantRollupValues["attributes.chdi_eligible"]) ? void 0 : o.includes(1))
                },
                W = e => {
                    var t, n, o;
                    return !!(null == (n = null == (t = e.product.attributes.fsa_eligible) ? void 0 : t.numbers) ? void 0 : n[0]) || !!(null == (o = e.variantRollupValues["attributes.fsa_eligible"]) ? void 0 : o.includes(1))
                },
                E = e => !!Array.isArray(null == e ? void 0 : e.text) && e.text.some(e => "string" == typeof e && "bundle" === e.toLowerCase()),
                H = (e, t) => {
                    var n, o;
                    let {
                        userLocation: r
                    } = t, {
                        city: i
                    } = r, l = null == (n = e.inventory) ? void 0 : n.deliveryAvailability, a = O(null == (o = e.variantRollupValues["attributes.start_date"]) ? void 0 : o[0]), c = R(e);
                    return i && l ? c && a ? B.$T.ComingSoon : c && !a ? "IN_STOCK" === l || "LOW_STOCK" === l ? B.$T.Available : "OUT_OF_STOCK" === l ? B.$T.OutOfStock : B.$T.Unavailable : void 0 : null
                },
                U = (e, t, n) => {
                    if (!e || !e.length) return null;
                    let {
                        defaultColor: o,
                        colorMap: r,
                        catalogSearchUrl: i
                    } = t || {};
                    return null == e ? void 0 : e.map(e => {
                        let t = e.replaceAll("^[^a-zA-Z0-9]+|[^a-zA-Z0-9]+$", ""),
                            l = encodeURIComponent(t = (t = (t = (t = t.replaceAll("[/\\\\]", "-")).replaceAll("[^\\w\\s\\-]", "")).replaceAll("[\\s\\-]+", "-")).toLowerCase()),
                            a = "".concat(n).concat(i).concat(l),
                            c = (null == e ? void 0 : e.replace(/[\s]|[&/\\#,+()$~%.:*?<>{}]/g, "_")) || "";
                        return {
                            color: (null == r ? void 0 : r[c]) || o,
                            link: a.toString(),
                            text: e
                        }
                    })
                },
                M = (e, t, n, o) => {
                    var r, l, a, c, d, u, s, p, x, m;
                    let {
                        id: v,
                        inventory: h,
                        product: g,
                        matchingVariantCount: f,
                        variantRollupValues: y
                    } = e || {}, {
                        attributes: b
                    } = g || {}, _ = null == h ? void 0 : h.deliveryAvailability, C = null == (l = null == (r = b.disp_price_in_cart_only) ? void 0 : r.numbers) ? void 0 : l[0], {
                        wcMember: w
                    } = o || {}, T = null == t ? void 0 : t.comingSoonBanner.featureOn, j = null == t ? void 0 : t.stockStatus.featureOn, S = R(e), k = E(null == (c = null == (a = e.product) ? void 0 : a.attributes) ? void 0 : c.product_type), I = "IN_STOCK" === _, P = O(null == (d = y["attributes.start_date"]) ? void 0 : d[0]), N = !j || "IN_STOCK" === _ || "LOW_STOCK" === _, L = D(e);
                    return L && !n ? {
                        type: "SignInButton"
                    } : (0 === C || n && L && (0, A.B9)((null == w ? void 0 : w.value) || "") || n && !L) && S && 1 === f && I && !(T && P) && N && !k ? {
                        contractIdentifier: F(y["attributes.program_types"], B.Gx.TWO_DAY_DELIVERY) ? "Regional" : void 0,
                        itemNumber: (null == (u = y.variantId) ? void 0 : u[0]) || "",
                        maxQuantity: null == (p = null == (s = b.max_item_order_qty) ? void 0 : s.text) ? void 0 : p[0],
                        minQuantity: null == (m = null == (x = b.min_item_order_qty) ? void 0 : x.text) ? void 0 : m[0],
                        partNumber: v,
                        type: "QuantitySelector"
                    } : (0, i.vJ)() && !I && S ? {
                        type: "OutOfStock"
                    } : I && N || !S ? {
                        type: "SelectOptions"
                    } : {
                        type: "SeeDetails"
                    }
                },
                V = (e, t, n) => {
                    let {
                        variantRollupValues: o
                    } = e || {}, {
                        urls: r
                    } = t || {}, i = F(o["attributes.program_types"], B.Gx.TWO_DAY_DELIVERY), l = F(o["attributes.program_types"], B.Gx.COSTCOGROCERY);
                    return n && r && (i || l) ? {
                        linkUrl: "".concat(n).concat((null == r ? void 0 : r.groceryURL) || "")
                    } : null
                },
                K = (e, t) => {
                    var n, o, r, i;
                    let l = !!(null == (o = null == (n = e.product.attributes.reviews_eligible) ? void 0 : n.numbers) ? void 0 : o[0]),
                        a = null == (r = e.product.rating) ? void 0 : r.averageRating,
                        c = null == (i = e.product.rating) ? void 0 : i.ratingCount,
                        {
                            translations: d
                        } = t || {};
                    if (l && a && c && d) {
                        let e = a.toFixed(2),
                            t = {
                                "{rating}": e,
                                "{total}": "".concat(c)
                            },
                            n = null == d ? void 0 : d.averageratingarialabel.replace(/{rating}|{total}/gi, e => t[e]);
                        return {
                            ariaLabel: +e ? n : null == d ? void 0 : d.noreviewsarialabel,
                            reviewCount: c,
                            value: +e
                        }
                    }
                    return null
                },
                z = e => {
                    var t, n;
                    let o = !!(null == (n = null == (t = e.product.attributes.comparable) ? void 0 : t.numbers) ? void 0 : n[0]);
                    return !F(e.variantRollupValues["attributes.program_types"], B.Gx.TWO_DAY_DELIVERY) && o
                },
                G = e => {
                    var t;
                    let n = null == (t = null == e ? void 0 : e.toString()) ? void 0 : t.split("|");
                    if ((null == n ? void 0 : n.length) >= 6) return {
                        swatchImage: n[1],
                        swatchValue: n[3],
                        swatchAttribute: n[4],
                        swatchPrimaryImage: n[5]
                    }
                },
                Z = (e, t) => {
                    var n, o;
                    let r = e.id,
                        i = e.variantRollupValues["attributes.swatch_info"],
                        l = e.product.title;
                    if (!(null == (o = null == (n = e.product.attributes.swatchable) ? void 0 : n.numbers) ? void 0 : o[0])) return null;
                    let a = [];
                    return null == i || i.forEach(e => {
                        let n = G(e);
                        if (!n) return;
                        let {
                            swatchImage: o,
                            swatchValue: i,
                            swatchAttribute: c,
                            swatchPrimaryImage: d
                        } = n;
                        null == a || a.push({
                            attributeValue: i || "",
                            id: i || "",
                            label: c || "",
                            pdpNavigationUrl: (0, I.Iw)(l || "", r || "", t.domainUrl, i, c),
                            productImageUrl: d || "",
                            swatchImageUrl: o || ""
                        })
                    }), (null == a ? void 0 : a.length) ? a : null
                },
                q = e => {
                    var t, n, o, r;
                    let i = null == (n = null == (t = e.product.attributes.primary_image) ? void 0 : t.text) ? void 0 : n[0];
                    if (!(null == (r = null == (o = e.product.attributes.swatchable) ? void 0 : o.numbers) ? void 0 : r[0])) return i;
                    let l = e.variantRollupValues["attributes.swatch_info"];
                    if (!l) return i;
                    let a = G(null == l ? void 0 : l[0]);
                    if (!a) return i;
                    let {
                        swatchPrimaryImage: c
                    } = a;
                    return c || i
                },
                J = e => {
                    var t;
                    return e.uri || (null == (t = e.variants[0]) ? void 0 : t.uri)
                },
                Y = () => !1,
                Q = (e, t, n, o, r) => {
                    var i, l, a, c, d, u, s, p;
                    let {
                        warehouse: x,
                        userLocation: m
                    } = o || {}, {
                        nearestWarehouse: v
                    } = x, {
                        city: h
                    } = m, {
                        bopiwUpdatesSync: g
                    } = n || {}, f = !!(null == g ? void 0 : g.featureOn), y = null == (i = null == t ? void 0 : t.enabledWarehousesList) ? void 0 : i.some(e => e === (null == v ? void 0 : v.catalog)), b = null == (l = null == t ? void 0 : t.enabledWarehousesBOPIWList) ? void 0 : l.some(e => e === (null == v ? void 0 : v.catalog)), _ = null == (a = null == t ? void 0 : t.enabledWarehousesWIOList) ? void 0 : a.some(e => e === (null == v ? void 0 : v.catalog)), {
                        attributes: C
                    } = e.product, w = null == (c = C.product_type) ? void 0 : c.text[0], T = [], j = null == (d = e.inventory) ? void 0 : d.warehouseAvailability, S = !!(null == (u = C.swatchable) ? void 0 : u.numbers[0]), k = ee(e), I = null == (s = C.delivery_type) ? void 0 : s.text, A = null == (p = e.inventory) ? void 0 : p.deliveryAvailability, O = F(e.variantRollupValues["attributes.program_types"], B.Gx.IN_WAREHOUSE), D = O && "OUT_OF_STOCK" !== j && ("IN_STOCK" === A || "OUT_OF_STOCK" === A || "LOW_STOCK" === A);
                    if (!y || !h || (null == w ? void 0 : w.includes(P.om)) || T && T.length > 0) return null;
                    let N = (null == I ? void 0 : I.includes("Warehouse Pick-up")) || (null == I ? void 0 : I.includes("Cueillette \xe0 l’entrep\xf4t")),
                        R = F(e.variantRollupValues["attributes.program_types"], B.Gx.USE_WAREHOUSE_INVENTORY),
                        L = !!j;
                    if (y && f) {
                        if (r && (L && S || !k)) return R ? {
                            status: B.eG.SEE_PRODUCT_DETAILS,
                            warehouse: h
                        } : null;
                        if (D || L && "IN_STOCK" === j || "LOW_STOCK" === j) return D && R && "IN_STOCK" === j ? {
                            status: B.eG.IN_STOCK_PICK_UP,
                            warehouse: h
                        } : D && R && "LOW_STOCK" === j ? {
                            status: B.eG.LOW_STOCK_IN_WAREHOUSE,
                            warehouse: h
                        } : D && ("IN_STOCK" === A || "LOW_STOCK" === A) && N ? {
                            status: B.eG.SHIPS_TO_WAREHOUSE,
                            warehouse: h
                        } : null;
                        if (L && "OUT_OF_STOCK" === j) {
                            if (D && N) {
                                if ("IN_STOCK" === A || "LOW_STOCK" === A) return {
                                    status: B.eG.SHIPS_TO_WAREHOUSE,
                                    warehouse: h
                                }
                            } else if (R) return {
                                status: B.eG.OUT_OF_STOCK,
                                warehouse: h
                            }
                        }
                        return null
                    }
                    if (y) {
                        if (r && (j && S || !k)) return b && R || j && _ ? {
                            status: B.eG.SEE_PRODUCT_DETAILS,
                            warehouse: h,
                            ..._ && {
                                showPriceMayVaryText: !0
                            }
                        } : null;
                        if (R && N) return D && "IN_STOCK" === j && b ? {
                            status: B.eG.IN_STOCK_PICK_UP,
                            warehouse: h
                        } : D || "IN_STOCK" !== A && "LOW_STOCK" !== A ? null : {
                            status: B.eG.SHIPS_TO_WAREHOUSE,
                            warehouse: h
                        };
                        if (R) return D && "IN_STOCK" === j && b ? {
                            status: B.eG.IN_STOCK_PICK_UP,
                            warehouse: h
                        } : D || "LOW_STOCK" !== j ? !D && O && "IN_STOCK" === j ? {
                            showPriceMayVaryText: !0,
                            status: B.eG.IN_STOCK_IN_WAREHOUSE,
                            warehouse: h
                        } : D || "OUT_OF_STOCK" !== j ? null : {
                            status: B.eG.OUT_OF_STOCK,
                            warehouse: h
                        } : {
                            status: B.eG.LOW_STOCK_IN_WAREHOUSE,
                            warehouse: h,
                            ..._ && {
                                showPriceMayVaryText: !0
                            }
                        };
                        if (N) return "IN_STOCK" === A || "LOW_STOCK" === A ? {
                            status: B.eG.SHIPS_TO_WAREHOUSE,
                            warehouse: h
                        } : null;
                        if (L) {
                            if ("IN_STOCK" === j && O && _) return {
                                showPriceMayVaryText: !0,
                                status: B.eG.IN_STOCK_IN_WAREHOUSE,
                                warehouse: h
                            };
                            if ("LOW_STOCK" === j && _) return {
                                status: B.eG.LOW_STOCK_IN_WAREHOUSE,
                                warehouse: h,
                                ..._ && {
                                    showPriceMayVaryText: !0
                                }
                            };
                            if ("OUT_OF_STOCK" === j && _) return {
                                status: B.eG.OUT_OF_STOCK,
                                warehouse: h
                            }
                        }
                    }
                    return null
                },
                $ = e => {
                    var t;
                    let n = F(e.variantRollupValues["attributes.program_types"], B.Gx.LTL_PICKUP),
                        o = "IN_STOCK" === e.inventory.mdoAvailability,
                        r = !!(null == (t = e.mdoLocation) ? void 0 : t.isPickupEligible);
                    return n && o && r
                },
                X = (e, t, n, o, r) => ({
                    bopimStatus: $(e),
                    inWarehouseAvailabilityText: F(e.variantRollupValues["attributes.program_types"], B.Gx.TWO_DAY_DELIVERY),
                    inWarehouseChannelBadgeData: Q(e, t, n, o, r)
                }),
                ee = e => 1 === e.matchingVariantCount,
                et = (e, t) => {
                    var n, o, r, i, l, a, c, d, u, s, p, x;
                    let m = ee(e),
                        v = null == (o = null == (n = e.product.attributes.primary_image) ? void 0 : n.text) ? void 0 : o[0],
                        h = e.product.title,
                        g = e.inventory.deliveryAvailability,
                        f = "OUT_OF_STOCK" !== e.inventory.deliveryAvailability,
                        y = "BACK_ORDER" === e.inventory.deliveryAvailability,
                        b = null == (i = null == (r = e.product.attributes.buyable) ? void 0 : r.numbers) ? void 0 : i[0],
                        _ = null == (a = null == (l = e.product.attributes.buyable) ? void 0 : l.numbers) ? void 0 : a[0],
                        C = null == (d = null == (c = e.product.attributes.product_type) ? void 0 : c.text) ? void 0 : d[0],
                        w = E(null == (s = null == (u = e.product) ? void 0 : u.attributes) ? void 0 : s.product_type),
                        T = null == (x = null == (p = e.product.attributes.product_class_type) ? void 0 : p.text) ? void 0 : x[0],
                        j = eo(e, t),
                        S = "OUT_OF_STOCK" !== g || f && y,
                        k = b && _,
                        I = !!(T && P.Qy.includes(T));
                    return !m || (!S || !k) && (S || k) || I || (null == C ? void 0 : C.includes(P.om)) || w ? null : {
                        image: v,
                        name: h,
                        price: (null == j ? void 0 : j.priceValue) || null
                    }
                },
                en = e => {
                    var t, n, o;
                    return !!(null == (t = e.variantRollupValues["attributes.member_only"]) ? void 0 : t[0]) && (null == (o = null == (n = e.product.attributes.disp_price_in_cart_only) ? void 0 : n.numbers) ? void 0 : o[0]) === 1
                },
                eo = (e, t) => {
                    var n, o, r, l, a, c, d, u;
                    let {
                        wcMember: s
                    } = t;
                    if (!(0, A.B9)(s.value) && en(e)) return null;
                    let p = e.variantRollupValues["attributes.program_types"] || [],
                        x = Number((null == (o = null == (n = e.inventory) ? void 0 : n.deliveryPrice) ? void 0 : o.minPrice) || 0),
                        m = Number((null == (l = null == (r = e.inventory) ? void 0 : r.deliveryPrice) ? void 0 : l.maxPrice) || 0),
                        v = (null == (c = null == (a = e.product.attributes.disp_price_in_cart_only) ? void 0 : a.numbers) ? void 0 : c[0]) || 0,
                        h = 1 === e.matchingVariantCount,
                        g = null == (u = null == (d = e.product.attributes.hide_price_range) ? void 0 : d.text) ? void 0 : u[0],
                        f = N(p);
                    return ((0, i.vJ)() || P.vs.some(e => f.has(e.toLocaleLowerCase()))) && 2 !== v && x ? h ? {
                        priceText: null,
                        priceValue: x
                    } : "1" === g && m && x < m ? {
                        priceText: "Starting at",
                        priceValue: x
                    } : x === m ? {
                        priceText: null,
                        priceValue: x
                    } : {
                        priceText: null,
                        priceValue: [x, m]
                    } : null
                },
                er = (e, t) => {
                    let {
                        id: n,
                        product: o
                    } = e || {}, {
                        translations: r
                    } = t || {};
                    return {
                        isChdiEligible: L(e),
                        isPublished: !0,
                        productInfoData: {
                            partNumber: n,
                            productDescription: null == r ? void 0 : r.pharmacytext,
                            productImageUrl: null == r ? void 0 : r.pharmacyimage,
                            productLinkUrl: J(o),
                            productName: o.title
                        }
                    }
                },
                ei = e => {
                    var t, n, o, r, i, l;
                    let {
                        id: a,
                        product: c
                    } = e || {}, d = c.title, u = null !== (i = null == (n = null == (t = c.attributes.region) ? void 0 : t.text) ? void 0 : n[0]) && void 0 !== i ? i : "", s = null !== (l = c.categories[0]) && void 0 !== l ? l : "", p = "".concat(u || d, " ").concat(s).trim();
                    return {
                        isCostcoTravel: !0,
                        isPublished: !0,
                        productActions: {
                            type: "SeeDetails"
                        },
                        productInfoData: {
                            partNumber: a,
                            productImageUrl: null == (r = null == (o = c.attributes.primary_image) ? void 0 : o.text) ? void 0 : r[0],
                            productLinkUrl: J(c),
                            productName: p
                        }
                    }
                };
            var el = n(13698);
            let ea = (e, t, n, o, r) => {
                let {
                    pillBadgeConfig: i,
                    imageConfig: l,
                    featureToggleConfig: a,
                    enabledWarehousesListConfig: c,
                    translationsConfig: d
                } = t || {};
                return null == e ? void 0 : e.map(e => {
                    var t, u, s, p, x, m, v, h, g, f, y, b, _, C, w, T, j, S, k, B, P;
                    let {
                        id: A,
                        product: O,
                        variantRollupValues: D
                    } = e || {};
                    if (null == (u = null == (t = O.attributes.product_type) ? void 0 : t.text) ? void 0 : u.includes("TRAVEL")) return ei(e);
                    if (null == (p = null == (s = O.attributes.product_type) ? void 0 : s.text) ? void 0 : p.includes("PHARMACY")) return er(e, d);
                    let N = !!e.inventory.hasLinkFee;
                    return {
                        addToListButtonData: et(e, o),
                        availabilityInfoData: X(e, c, a, o, r),
                        colorSwatchesData: Z(e, l),
                        deliveryChannelData: {
                            status: H(e, o)
                        },
                        isChdiEligible: L(e),
                        isEcoFeeEligible: !!N,
                        isFsaEligible: W(e),
                        isMemberOnlyItem: !!(null == (x = e.variantRollupValues["attributes.member_only"]) ? void 0 : x[0]),
                        isPublished: !0,
                        pillBadges: U(null == (m = e.product.attributes.pills) ? void 0 : m.text, i, null == l ? void 0 : l.domainUrl),
                        priceListData: eo(e, o),
                        productActions: M(e, a, n, o),
                        productDeliveryBadgeData: V(e, d, null == l ? void 0 : l.domainUrl),
                        productInfoData: {
                            itemNumber: (null == (v = D.variantId) ? void 0 : v[0]) || "",
                            partNumber: A,
                            productBrand: (null == (h = O.attributes.product_type) ? void 0 : h.text) || "",
                            productImageUrl: q(e),
                            productLinkUrl: (0, I.Iw)(O.title, A, null == l ? void 0 : l.domainUrl),
                            productName: O.title,
                            replacementItemNumber: Y()
                        },
                        savingsData: {
                            priceInCartOnly: (null == (y = null == (f = null == (g = null == e ? void 0 : e.product) ? void 0 : g.attributes) ? void 0 : f.disp_price_in_cart_only.numbers) ? void 0 : y[0]) !== 2,
                            bundle: (null == (w = null == (C = null == (_ = null == (b = null == e ? void 0 : e.product) ? void 0 : b.attributes) ? void 0 : _.product_type) ? void 0 : C.text) ? void 0 : w[0]) === "bundle",
                            salePrice: null == (T = null == e ? void 0 : e.inventory) ? void 0 : T.deliveryPrice,
                            listPrice: null == (j = null == e ? void 0 : e.inventory) ? void 0 : j.originalPrice,
                            freightSavingsEnabled: (0, el.DI)(null == (S = a.freightSavings) ? void 0 : S.featureOn, null == (k = a.freightSavings) ? void 0 : k.enabledApplications)
                        },
                        promoItem: {
                            promoText: null == (P = null == (B = O.attributes.marketing_statement) ? void 0 : B.text) ? void 0 : P[0],
                            promoTextColor: ""
                        },
                        reviewRatingData: K(e, d),
                        showCompareProductButton: z(e)
                    }
                })
            };
            var ec = n(77381),
                ed = n(47020),
                eu = n(12300),
                es = n(95656),
                ep = n(34073),
                ex = n(18707),
                em = n(79715),
                ev = n(85361),
                eh = n(75751),
                eg = n(72547),
                ef = n(39900),
                ey = n(99403),
                eb = n(44376),
                e_ = n(39234),
                eC = n(41324),
                ew = n(78850),
                eT = n(41290);
            let ej = {
                    alignItems: "center",
                    cursor: "default",
                    display: "flex",
                    gap: s.vdF
                },
                eS = {
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: s.M7t
                },
                ek = {
                    height: 16,
                    width: 16
                },
                eI = e => {
                    let {
                        status: t,
                        translations: n,
                        uniqueId: r
                    } = e;
                    if (!t) return null;
                    let {
                        available: i,
                        comingsoonlabel: l,
                        unavailable: a,
                        outofstock: c,
                        deliverylabel: d
                    } = n || {}, u = t === B.$T.OutOfStock ? {
                        color: s.JaJ
                    } : {
                        color: s.JSR
                    }, {
                        badgeColor: p,
                        badgeText: x
                    } = {
                        [B.$T.Available]: {
                            badgeColor: "success",
                            badgeText: i
                        },
                        [B.$T.ComingSoon]: {
                            badgeColor: "caution",
                            badgeText: l
                        },
                        [B.$T.OutOfStock]: {
                            badgeColor: "caution",
                            badgeText: c
                        },
                        [B.$T.Unavailable]: {
                            badgeColor: "light",
                            badgeText: a
                        }
                    }[t];
                    return (0, o.jsxs)(es.default, {
                        "data-testid": "DeliveryChannelBadge_".concat(r),
                        sx: ej,
                        children: [(0, o.jsx)(eT.x, {
                            sx: { ...ek,
                                color: u
                            }
                        }), (0, o.jsxs)(es.default, {
                            sx: eS,
                            children: [(0, o.jsx)(j.Text, {
                                bold: !0,
                                variant: "t7",
                                children: d
                            }), (0, o.jsx)(j.Text, {
                                color: p,
                                variant: "t7",
                                children: x
                            })]
                        })]
                    })
                };
            var eB = n(88633);
            let eP = {
                    height: s.oFH,
                    width: s.oFH
                },
                eA = {
                    cursor: "default",
                    display: "flex",
                    flexWrap: "nowrap",
                    gap: s.vdF
                },
                eO = {
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: s.M7t
                },
                eD = {
                    display: "flex",
                    flexDirection: "column",
                    gap: s.M7t
                },
                eN = e => {
                    let {
                        uniqueId: t,
                        translations: n
                    } = e, {
                        atproposition: r,
                        pickuplabel: i,
                        available: l,
                        costcodistributioncenter: a
                    } = n || {}, c = "".concat(r, " ").concat(a);
                    return (0, o.jsx)(es.default, {
                        sx: eD,
                        children: (0, o.jsxs)(es.default, {
                            "data-testid": "MDOChannelBadge_".concat(t),
                            sx: eA,
                            children: [(0, o.jsx)(eB.H, {
                                sx: {
                                    color: s.JSR,
                                    ...eP
                                }
                            }), (0, o.jsxs)(es.default, {
                                sx: eO,
                                children: [(0, o.jsx)(j.Text, {
                                    bold: !0,
                                    variant: "t7",
                                    children: i
                                }), (0, o.jsx)(j.Text, {
                                    color: "success",
                                    variant: "t7",
                                    children: l
                                }), (0, o.jsx)(j.Text, {
                                    variant: "t7",
                                    children: c
                                })]
                            })]
                        })
                    })
                };
            var eF = n(13449);
            let eR = {
                    height: s.oFH,
                    width: s.oFH
                },
                eL = {
                    cursor: "default",
                    display: "flex",
                    flexWrap: "nowrap",
                    gap: s.vdF
                },
                eW = {
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: s.M7t
                },
                eE = {
                    display: "flex",
                    flexDirection: "column",
                    gap: s.M7t
                },
                eH = {
                    marginLeft: s.ODt
                },
                eU = e => {
                    let t, n, r, {
                        status: i,
                        warehouse: l,
                        translations: a,
                        uniqueId: c,
                        showPriceMayVaryText: d
                    } = e;
                    if (!l) return null;
                    let {
                        atproposition: u,
                        toproposition: p,
                        shipslabel: x,
                        pickuplabel: m,
                        instock: v,
                        buyinwarehouselabel: h,
                        outofstock: g,
                        lowstock: f,
                        seeproductdetailslabel: y,
                        whpricingtext: b,
                        available: _,
                        warehousetext: C
                    } = a || {}, w = i === B.eG.OUT_OF_STOCK ? {
                        color: s.JaJ
                    } : {
                        color: s.JSR
                    }, T = "".concat(u, " ").concat(l), S = "".concat(x, " ").concat(p, " ").concat(C);
                    switch (i) {
                        case B.eG.IN_STOCK_PICK_UP:
                            t = (0, o.jsx)(j.Text, {
                                bold: !0,
                                variant: "t7",
                                children: m
                            }), n = (0, o.jsx)(j.Text, {
                                color: "success",
                                variant: "t7",
                                children: v
                            }), r = (0, o.jsx)(j.Text, {
                                variant: "t7",
                                children: T
                            });
                            break;
                        case B.eG.IN_STOCK_IN_WAREHOUSE:
                            t = (0, o.jsx)(j.Text, {
                                bold: !0,
                                variant: "t7",
                                children: h
                            }), n = (0, o.jsx)(j.Text, {
                                color: "success",
                                variant: "t7",
                                children: v
                            }), r = (0, o.jsx)(j.Text, {
                                variant: "t7",
                                children: T
                            });
                            break;
                        case B.eG.OUT_OF_STOCK:
                            t = (0, o.jsx)(j.Text, {
                                color: "caution",
                                variant: "t7",
                                children: g
                            }), n = (0, o.jsx)(j.Text, {
                                variant: "t7",
                                children: T
                            });
                            break;
                        case B.eG.LOW_STOCK_IN_WAREHOUSE:
                            t = (0, o.jsx)(j.Text, {
                                bold: !0,
                                variant: "t7",
                                children: h
                            }), n = (0, o.jsx)(j.Text, {
                                color: "caution",
                                variant: "t7",
                                children: f
                            }), r = (0, o.jsx)(j.Text, {
                                variant: "t7",
                                children: T
                            });
                            break;
                        case B.eG.SEE_PRODUCT_DETAILS:
                            t = (0, o.jsx)(j.Text, {
                                variant: "t7",
                                children: y
                            });
                            break;
                        case B.eG.SHIPS_TO_WAREHOUSE:
                            t = (0, o.jsx)(j.Text, {
                                bold: !0,
                                variant: "t7",
                                children: S
                            }), n = (0, o.jsx)(j.Text, {
                                color: "success",
                                variant: "t7",
                                children: _
                            });
                            break;
                        default:
                            return null
                    }
                    return (0, o.jsxs)(es.default, {
                        sx: eE,
                        children: [(0, o.jsxs)(es.default, {
                            "data-testid": "WarehouseChannelBadge_".concat(c),
                            sx: eL,
                            children: [(0, o.jsx)(eF.C, {
                                sx: { ...w,
                                    ...eR
                                }
                            }), (0, o.jsxs)(es.default, {
                                sx: eW,
                                children: [t, n || null, r || null]
                            })]
                        }), d && (0, o.jsx)(j.Text, {
                            color: "light",
                            sx: eH,
                            variant: "t7",
                            children: b
                        })]
                    })
                },
                eM = {
                    display: "flex",
                    flexDirection: "column",
                    gap: s.M7t
                },
                eV = () => {
                    let {
                        normalizedData: e,
                        translationsConfig: t
                    } = (0, ew.h)(), {
                        availabilityInfoData: n,
                        deliveryChannelData: r,
                        productInfoData: i
                    } = e, {
                        inWarehouseAvailabilityText: l,
                        inWarehouseChannelBadgeData: a,
                        bopimStatus: c
                    } = n || {}, {
                        partNumber: d
                    } = i, {
                        translations: u,
                        keys: s
                    } = t || {};
                    return (0, o.jsxs)(es.default, {
                        "data-testid": "AvailabilityInfo_".concat(d),
                        sx: eM,
                        children: [l && (null == s ? void 0 : s.productAPIClientId) === eh.aN && (null == u ? void 0 : u.warehouseavailability) && (0, o.jsx)(j.Text, {
                            uniqueId: "inWarehouseAvailability_".concat(d),
                            children: u.warehouseavailability
                        }), r && (0, o.jsx)(eI, { ...r,
                            translations: u,
                            uniqueId: d
                        }), a ? (0, o.jsx)(eU, { ...a,
                            translations: u,
                            uniqueId: d
                        }) : c && (0, o.jsx)(eN, {
                            translations: u,
                            uniqueId: d
                        })]
                    })
                };
            var eK = n(95666);
            let ez = {
                    alignItems: "center",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "row",
                    gap: s.vdF,
                    width: "fit-content"
                },
                eG = {
                    color: s.mkx,
                    height: 16,
                    width: 16
                },
                eZ = {
                    color: s.JSR,
                    fontSize: s.hE8
                },
                eq = {
                    color: s.JSR,
                    fontSize: s.YzP
                },
                eJ = "CostcoTravelBadge",
                eY = e => {
                    let {
                        uniqueId: t
                    } = e, {
                        translationsConfig: n
                    } = (0, ew.h)(), {
                        translations: r
                    } = n || {};
                    return (0, o.jsxs)(es.default, {
                        "data-testid": "".concat(eJ, "_").concat(t),
                        sx: ez,
                        children: [(0, o.jsx)(eK.Image, {
                            src: (0, ef.w)((null == r ? void 0 : r.costcotravelicon) || ""),
                            alt: (null == r ? void 0 : r.costcotravelbadge) || "",
                            component: "img",
                            loading: "lazy"
                        }), (0, o.jsx)(j.Text, {
                            sx: eq,
                            uniqueId: "".concat(eJ, "_").concat(t),
                            variant: "t4",
                            children: (null == r ? void 0 : r.costcotravelbadge) || ""
                        })]
                    })
                };
            var eQ = n(70851),
                e$ = n(30809),
                eX = n(42911),
                e0 = n(53137);
            let e1 = "FSAEligibleInfo",
                e5 = {
                    color: s.JSR,
                    height: "".concat(s.dBy),
                    width: "".concat(s.dBy)
                },
                e2 = {
                    "& .MuiButton-startIcon": {
                        margin: 0
                    },
                    "&:hover": {
                        textDecoration: "underline ".concat(s.ekx)
                    },
                    alignItems: "flex-start",
                    gap: "".concat(s.M7t)
                },
                e3 = {
                    marginTop: "".concat(s.oFH)
                },
                e7 = e => {
                    var t, n;
                    let {
                        data: r
                    } = e, [i, l] = (0, a.useState)(!1), {
                        key_value: c,
                        composable_window: d
                    } = r, u = c.reduce((e, t) => {
                        let {
                            key: n,
                            value: o
                        } = t;
                        return e[n] = o, e
                    }, {}), s = null == u ? void 0 : u.titlecontent, p = null == (n = null == (t = null == d ? void 0 : d[0]) ? void 0 : t.text_only) ? void 0 : n.body, x = null == u ? void 0 : u.primarybuttonlabel;
                    if (!s || !p || !x) return null;
                    let m = () => {
                        l(!1)
                    };
                    return (0, o.jsxs)(v.CostcoBox, {
                        "data-testid": e1,
                        children: [(0, o.jsx)(eQ.Button, {
                            onClick: () => {
                                l(!0)
                            },
                            startIcon: (0, o.jsx)(e0.M, {
                                sx: e5
                            }),
                            sx: e2,
                            variant: "text-button",
                            children: (0, o.jsx)(j.Text, {
                                variant: "t6",
                                children: s
                            })
                        }), (0, o.jsx)(e$.u, {
                            buttons: [{
                                action: m,
                                text: "".concat(x)
                            }],
                            isOpen: i,
                            modalTitle: s,
                            onClose: m,
                            children: (0, o.jsx)(j.Text, {
                                variant: "t6",
                                children: (0, o.jsx)(eX.$, {
                                    overrides: {
                                        h3: {
                                            component: j.Text,
                                            props: {
                                                component: "h3",
                                                sx: e3
                                            }
                                        },
                                        p: {
                                            component: j.Text,
                                            props: {
                                                component: "p"
                                            }
                                        }
                                    },
                                    markdown: p
                                })
                            })
                        })]
                    })
                };
            e7.displayName = e1;
            let e4 = {
                    display: "flex",
                    flexDirection: "column",
                    gap: s.M7t,
                    position: "relative"
                },
                e6 = {
                    marginBottom: s.oFH
                },
                e9 = {
                    zIndex: 2
                },
                e8 = (0, a.memo)(e => {
                    let {
                        fsaConfig: t
                    } = e;
                    return (0, o.jsx)(em.Analytics, {
                        analyticData: {
                            doNotTrack: !0
                        },
                        children: (0, o.jsx)(es.default, {
                            sx: e9,
                            children: (0, o.jsx)(e7, {
                                data: t
                            })
                        })
                    })
                });
            e8.displayName = "FSAEligibleInfoWrapper";
            var te = n(28807);
            let tt = "MemberOnlyItemBadge",
                tn = e => {
                    let {
                        uniqueId: t
                    } = e, {
                        translationsConfig: n
                    } = (0, ew.h)(), {
                        icons: r,
                        translations: i
                    } = n || {}, l = null == r ? void 0 : r.memberOnlyIcon, a = l ? te[l] : void 0, c = (null == i ? void 0 : i.memberonlylabel) || "";
                    return (0, o.jsxs)(es.default, {
                        "data-testid": "".concat(tt, "_").concat(t),
                        sx: ez,
                        children: [a && (0, o.jsx)(a, {
                            sx: eG
                        }), (0, o.jsx)(j.Text, {
                            sx: eZ,
                            uniqueId: "".concat(tt, "_").concat(t),
                            variant: "t4",
                            children: c
                        })]
                    })
                };
            var to = n(47835),
                tr = n(25330),
                ti = n(32852);
            let tl = {
                color: s.nLy,
                fontSize: s.F5N
            };
            var ta = n(51791);
            let tc = e => {
                let {
                    displayDiscount: t,
                    instantSavingsText: n,
                    locale: r,
                    partNumber: i,
                    totalDiscount: l
                } = e;
                if (!t || !n || !l || l <= 0) return null;
                let a = (0, ta._)(r, l, !0);
                return (0, o.jsx)(j.Text, {
                    sx: tl,
                    uniqueId: "instantSavings_".concat(i),
                    variant: "t6",
                    children: "".concat(a, " ").concat(n)
                })
            };

            function td() {
                var e, t, n, r;
                let {
                    normalizedData: l,
                    translationsConfig: a
                } = (0, ew.h)(), d = (0, c.$)();
                if (!(null == (e = null == a ? void 0 : a.translations) ? void 0 : e.taxableitem) || !(null == l ? void 0 : l.taxableFoodItem)) return null;
                let u = (0, i.vJ)() ? null == (n = null == (t = d.bdDeliveryLocation) ? void 0 : t.bdLocation) ? void 0 : n.slice(-2) : null == (r = d.deliveryLocation) ? void 0 : r.state;
                return u && l.taxableFoodItem.includes(u) ? (0, o.jsx)(j.Text, {
                    color: "light",
                    children: a.translations.taxableitem
                }) : null
            }
            var tu = n(39036);
            n(33968);
            let ts = "Price",
                tp = e => {
                    let t;
                    let {
                        priceText: n,
                        priceValue: r,
                        adButlerPriceText: i,
                        locale: l,
                        uniqueId: a
                    } = e || {};
                    return r || i ? i ? (0, o.jsx)(j.Text, {
                        bold: !0,
                        uniqueId: "".concat(ts, "_").concat(a),
                        variant: "t5",
                        children: (0, o.jsx)(tu.RichTextEntryClient, {
                            entryId: "".concat(ts, "_").concat(a),
                            rich_text_editor: i
                        })
                    }) : (t = Array.isArray(r) && 2 === r.length ? (t = r.map(e => (0, ta._)(l, e))).join(" - ") : n ? "".concat(n, " ").concat((0, ta._)(l, r)) : (0, ta._)(l, r), (0, o.jsx)(j.Text, {
                        bold: !0,
                        uniqueId: "".concat(ts, "_").concat(a),
                        variant: "t5",
                        children: i || t
                    })) : null
                };
            tp.displayName = ts;
            let tx = (e, t) => e && t ? e.replace("{savingsAmount}", t) : "",
                tm = {
                    WebkitBoxOrient: "vertical",
                    display: "-webkit-box",
                    overflow: "hidden"
                },
                tv = {
                    display: "flex",
                    flexDirection: "column",
                    gap: s.M7t
                },
                th = e => {
                    let {
                        productTileMaxLineNumber: t = 3,
                        cookieContext: n,
                        enablePromoBreakdown: r
                    } = e, {
                        deliveryLocation: {
                            state: l
                        }
                    } = n, {
                        normalizedData: a,
                        translationsConfig: c,
                        locale: d
                    } = (0, ew.h)(), {
                        discountsData: u,
                        isEcoFeeEligible: p,
                        priceListData: x,
                        promoItem: m,
                        productInfoData: v,
                        savingsData: h
                    } = a, {
                        promoText: g,
                        promoTextColor: f
                    } = m || {}, {
                        partNumber: y
                    } = v, b = {
                        color: f || s.JaJ,
                        ...tm,
                        WebkitLineClamp: t,
                        lineClamp: t
                    }, {
                        translations: _,
                        promoBreakdownCAProvince: C
                    } = c || {}, w = "";
                    "undefined" != typeof window && (w = to.sanitize(g)), x && (w = (0, ti.vV)(w, null == _ ? void 0 : _.discountregex, null == _ ? void 0 : _.afterprefix));
                    let T = (null == _ ? void 0 : _.ecofeelabel) || "",
                        S = (null == _ ? void 0 : _.instantsavings) || "",
                        k = (0, ti.FB)(d, null == h ? void 0 : h.listPrice, null == h ? void 0 : h.salePrice),
                        I = (0, ta._)(d, null == h ? void 0 : h.listPrice),
                        B = (0, i.Cp)() && (null == h ? void 0 : h.freightSavingsEnabled) && (null == h ? void 0 : h.bundle) && (null == h ? void 0 : h.priceInCartOnly) && (null == k ? void 0 : k.displaySavings),
                        P = tx(null == _ ? void 0 : _.freightsavings, null == k ? void 0 : k.savingsAmount);
                    return (0, o.jsxs)(es.default, {
                        "data-testid": "".concat("PriceGroup", "_").concat(y),
                        sx: tv,
                        children: [(0, o.jsx)(td, {}), x && (0, o.jsx)(tp, { ...x,
                            locale: d,
                            uniqueId: y
                        }), (0, o.jsx)(tr.x, {
                            locale: d,
                            priceValue: null == x ? void 0 : x.priceValue
                        }), p && !a.linkFeePrices && (0, o.jsx)(j.Text, {
                            uniqueId: "ecoFee_".concat(y),
                            variant: "t6",
                            children: T
                        }), B && (0, o.jsx)(j.Text, {
                            sx: b,
                            uniqueId: "savingsText_".concat(y),
                            variant: "t6",
                            children: P
                        }), g && (0, o.jsx)(j.Text, {
                            sx: b,
                            uniqueId: "promoText_".concat(y),
                            variant: "t6",
                            children: (0, o.jsx)("span", {
                                dangerouslySetInnerHTML: {
                                    __html: w
                                }
                            })
                        }), (0, o.jsx)(tc, {
                            displayDiscount: null == u ? void 0 : u.displayDiscount,
                            instantSavingsText: S,
                            locale: d,
                            partNumber: y,
                            totalDiscount: null == u ? void 0 : u.totalDiscount
                        }), (0, ti.zI)(r, x, d, C, null == k ? void 0 : k.displaySavings) && (0, o.jsxs)(j.Text, {
                            sx: b,
                            uniqueId: "listPrice_".concat(y),
                            variant: "t6",
                            children: [null == _ ? void 0 : _.waspriceprefix, " ", I]
                        })]
                    })
                };
            var tg = n(63931);
            let tf = {
                    fontSize: s.hE8,
                    fontWeight: s.cQB
                },
                ty = {
                    color: s.xIn,
                    ...tf
                },
                tb = {
                    color: s.pOK,
                    ...tf
                },
                t_ = {
                    flexGrow: 1,
                    zIndex: 2
                },
                tC = () => {
                    let {
                        normalizedData: e,
                        translationsConfig: t
                    } = (0, ew.h)(), {
                        productDeliveryBadgeData: n,
                        productInfoData: r,
                        isFsaEligible: i,
                        isChdiEligible: l
                    } = e, {
                        linkUrl: a
                    } = n || {}, {
                        groceryBadgeControls: c
                    } = t || {}, {
                        firstBadge: d,
                        secondBadge: u
                    } = c || {};
                    if (!a) return null;
                    let s = (null == d ? void 0 : d.color) === "Red" ? tb : ty,
                        p = (null == u ? void 0 : u.color) === "Blue" ? ty : tb;
                    return (0, o.jsx)(o.Fragment, {
                        children: (0, o.jsxs)(ex.Link, {
                            dataPrivate: !!(i || l),
                            href: a,
                            sx: t_,
                            uniqueId: "".concat("ProductDeliveryBadge", "_").concat(r.partNumber),
                            children: [d && (0, o.jsx)(es.default, {
                                component: "span",
                                sx: s,
                                children: (null == d ? void 0 : d.text) || ""
                            }), u && (0, o.jsx)(es.default, {
                                component: "span",
                                sx: p,
                                children: (null == u ? void 0 : u.text) || ""
                            })]
                        })
                    })
                },
                tw = {
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "flex-end"
                },
                tT = e => {
                    let {
                        showActionButton: t
                    } = e, {
                        normalizedData: n,
                        productTitleId: r,
                        locale: i,
                        translationsConfig: l
                    } = (0, ew.h)(), {
                        hideAddToList: a
                    } = (null == l ? void 0 : l.featureControls) || {}, {
                        productDeliveryBadgeData: c,
                        addToListButtonData: d,
                        productInfoData: u
                    } = n;
                    return (0, o.jsxs)(es.default, {
                        "data-testid": "ProductDeliveryBadge_".concat(u.partNumber),
                        sx: tw,
                        children: [c && (0, o.jsx)(em.Analytics, {
                            analyticData: {
                                trackedData: [{
                                    key: ev.Gn,
                                    value: ev.ry
                                }]
                            },
                            children: (0, o.jsx)(tC, {})
                        }), t && d && !a && (0, o.jsx)(em.Analytics, {
                            analyticData: {
                                doNotTrack: !0
                            },
                            children: (0, o.jsx)(tg.H, {
                                product: {
                                    href: u.productLinkUrl,
                                    id: u.itemNumber,
                                    price: (0, ta._)(i, d.price),
                                    src: u.productImageUrl,
                                    title: u.productName
                                },
                                ariaDescribedBy: r,
                                sx: e9,
                                uniqueId: "AddToList_".concat(u.partNumber)
                            })
                        })]
                    })
                };
            var tj = n(16210);
            let tS = {
                    display: "flex",
                    flexDirection: "column",
                    gap: s.M7t
                },
                tk = (0, tj.ZP)(j.Text, {
                    shouldForwardProp: e => "productTileMaxLineNumber" !== e
                })(e => {
                    let {
                        productTileMaxLineNumber: t = 3
                    } = e;
                    return {
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: t,
                        display: "-webkit-box",
                        lineClamp: t,
                        overflow: "hidden"
                    }
                }),
                tI = {
                    color: s.JaJ
                },
                tB = "ProductInfo",
                tP = e => {
                    let {
                        productTileMaxLineNumber: t = 3
                    } = e, {
                        normalizedData: n,
                        translationsConfig: r,
                        productTitleId: i
                    } = (0, ew.h)(), {
                        productInfoData: l
                    } = n, {
                        productName: a,
                        partNumber: c,
                        replacementItemNumber: d,
                        itemNumber: u,
                        productDescription: s
                    } = l || {}, {
                        translations: p
                    } = r || {}, x = "".concat(null == p ? void 0 : p.itemprefix, " ").concat(u), m = "".concat(null == p ? void 0 : p.replacementlabel, " ").concat(d), {
                        showReplacementItem: v,
                        showItemNumber: h
                    } = (null == r ? void 0 : r.featureControls) || {};
                    return (0, o.jsxs)(es.default, {
                        "data-testid": "".concat(tB, "_").concat(c),
                        sx: tS,
                        children: [a && (0, o.jsx)(tk, {
                            component: "h3",
                            id: i,
                            productTileMaxLineNumber: t,
                            uniqueId: i,
                            variant: "t6",
                            children: a
                        }), s && (0, o.jsx)(j.Text, {
                            sx: tI,
                            uniqueId: "productDescription_".concat(i),
                            variant: "t7",
                            children: s
                        }), u && h && (0, o.jsx)(j.Text, {
                            color: "medium",
                            uniqueId: "".concat(tB, "_").concat(u),
                            variant: "t6",
                            children: x
                        }), d && v && (0, o.jsx)(j.Text, {
                            uniqueId: "replacementItemNumber_".concat(c),
                            variant: "t6",
                            children: m
                        })]
                    })
                },
                tA = e => {
                    let {
                        fsaConfig: t,
                        showReviews: n,
                        setPdpNavigationUrl: r,
                        isHorizontal: i,
                        maxImageHeight: l,
                        productTileMaxLineNumber: c,
                        minProductTileImageWidth: d,
                        maxProductTileImageWidth: u,
                        hideReviewStarValue: p,
                        isCriteo: x,
                        isCriteoCarousel: m,
                        showPricing: v = !0,
                        showActionButton: h,
                        cookieContext: g,
                        enablePromoBreakdown: f
                    } = e, {
                        normalizedData: y,
                        translationsConfig: b,
                        productTitleId: _
                    } = (0, ew.h)(), {
                        imageDomainSwapConfig: C
                    } = (0, eg.p)(), {
                        productInfoData: w,
                        isMemberOnlyItem: T,
                        isCostcoTravel: S,
                        isFsaEligible: k,
                        isChdiEligible: I,
                        reviewRatingData: B,
                        pillBadges: P,
                        colorSwatchesData: A,
                        productDeliveryBadgeData: O
                    } = y, D = null == b ? void 0 : b.translations, {
                        productImageUrl: N,
                        productName: F,
                        partNumber: R
                    } = w, [L, W] = (0, a.useState)(N), [E, H] = (0, a.useState)(null);
                    return (0, o.jsxs)(es.default, {
                        sx: [e4, {
                            flexDirection: i ? "row" : "column"
                        }],
                        children: [(0, o.jsx)(e_.q, {
                            src: (0, ef.w)(E || L || "", C) || "",
                            sx: { ...e6,
                                marginBottom: i ? 0 : null == e6 ? void 0 : e6.marginBottom,
                                marginRight: i ? s.vdF : 0,
                                maxHeight: l,
                                maxWidth: u,
                                minWidth: d
                            },
                            ariaHidden: !0,
                            srcFallback: (null == D ? void 0 : D.noimgurl) || "",
                            title: F || "",
                            titleFallback: (null == D ? void 0 : D.noimgtext) || "",
                            uniqueId: R
                        }), (0, o.jsxs)(es.default, {
                            sx: e4,
                            children: [P && P.length > 0 && (0, o.jsx)(eb.J, {
                                dataPrivate: !!(k || I),
                                pillBadges: P,
                                sx: e9,
                                uniqueId: R
                            }), (0, o.jsx)(tT, {
                                showActionButton: h
                            }), T && (0, o.jsx)(tn, {
                                uniqueId: R
                            }), S && (0, o.jsx)(eY, {
                                uniqueId: R
                            }), A && A.length > 1 && (0, o.jsx)(em.Analytics, {
                                analyticData: {
                                    doNotTrack: !0
                                },
                                children: (0, o.jsx)(eC.Z, {
                                    ariaDescribedBy: _,
                                    onPreview: e => {
                                        let {
                                            productImageUrl: t
                                        } = e || {};
                                        H(t || null)
                                    },
                                    onRemovePreview: () => {
                                        H(null)
                                    },
                                    onSelect: e => {
                                        let {
                                            pdpNavigationUrl: t,
                                            productImageUrl: n
                                        } = e || {};
                                        W(n || null), r(t || null)
                                    },
                                    swatches: A,
                                    sx: e9,
                                    uniqueId: R,
                                    variant: "compact"
                                })
                            }), k && t && (0, o.jsx)(e8, {
                                fsaConfig: t
                            }), v && (0, o.jsx)(th, {
                                productTileMaxLineNumber: c,
                                cookieContext: g,
                                enablePromoBreakdown: f
                            }), (0, o.jsx)(tP, {
                                productTileMaxLineNumber: c
                            }), n && B && (0, o.jsx)(ey.Rating, {
                                displayVariant: "compact",
                                size: "small",
                                ...B,
                                displayAvgRatingAsText: !p && !!(null == B ? void 0 : B.displayAvgRatingAsText),
                                staticUniqueId: !0,
                                uniqueId: "ProductRating_".concat(R)
                            }), O && !x && !m && (0, o.jsx)(j.Text, {
                                color: "light",
                                variant: "t7",
                                children: (null == D ? void 0 : D.whavailabilitymsg) || ""
                            }), !x && (0, o.jsx)(eV, {})]
                        })]
                    })
                };
            var tO = n(12254),
                tD = n(483);
            let tN = (0, tj.ZP)("label")({
                    display: "inline-block",
                    paddingLeft: s.M7t,
                    verticalAlign: "middle"
                }),
                tF = "CompareProductCheckbox",
                tR = e => {
                    let {
                        showCompareProductButton: t = !1,
                        isFsaEligible: n = !1,
                        isChdiEligible: r = !1,
                        partNumber: i,
                        productName: l,
                        productImageUrl: c,
                        label: d = "Compare Product",
                        productTitleId: u
                    } = e, [s, p] = (0, tD._)("compare", []), [x, m] = (0, a.useState)(!1), v = (0, a.useMemo)(() => s, [s]);
                    return ((0, a.useEffect)(() => {
                        m(v.some(e => e.partNumber === i))
                    }, [v, i]), t) ? (0, o.jsxs)(es.default, {
                        children: [(0, o.jsx)(tO.X, {
                            ariaDescribeText: u,
                            id: "".concat(tF, "-").concat(i),
                            isChecked: x,
                            onChange: (e, t) => {
                                if (t) {
                                    let e = {
                                        alt: l,
                                        compareImage: c,
                                        isFsaOrChd: !!(n || r),
                                        partNumber: i
                                    };
                                    p(t => [...t, e])
                                } else p(e => e.filter(e => e.partNumber !== i))
                            }
                        }), (0, o.jsx)(tN, {
                            htmlFor: "".concat(tF, "-").concat(i),
                            children: d
                        })]
                    }) : null
                };
            tR.displayName = tF;
            var tL = n(12104),
                tW = n(99376),
                tE = n(87550),
                tH = n(62700),
                tU = n(56832),
                tM = n(34272);
            let tV = e => {
                    var t;
                    let {
                        orderErrMsgObj: n,
                        errorMessage: o,
                        customErrorLabel: r
                    } = e || {};
                    return r || (null == (t = Object.values(n || {})) ? void 0 : t.join(". ")) || o
                },
                tK = (e, t, n) => 0 === e ? "delete" : "add" !== t && n ? "update" : "add",
                tz = {
                    alignItems: "center",
                    display: "flex",
                    fontSize: s.hE8,
                    height: "100%",
                    justifyContent: "center",
                    lineHeight: "initial",
                    minHeight: "40px",
                    padding: "".concat(s.iPk, " ").concat(s.vdF),
                    position: "relative",
                    width: "100%",
                    zIndex: 2
                },
                tG = (0, tj.ZP)("div")({ ...tz,
                    borderRadius: s.xbU,
                    border: "".concat(s.YFe, " solid ").concat(s.VlP),
                    background: s.bdf,
                    color: s.xpl
                }),
                tZ = e => {
                    let {
                        maxQuantity: t,
                        contractIdentifier: n,
                        itemNumber: r,
                        minQuantity: i,
                        partNumber: l,
                        urls: c,
                        addbuttonlabel: d,
                        decreasequantity: u,
                        addtocartsuccessmessage: s,
                        increasequantity: p,
                        quantity: x,
                        removeitemarialabel: m,
                        removeitemerror: v,
                        genericerror: h,
                        productTitleId: g,
                        refreshCartCallback: f
                    } = e, [y, b] = (0, a.useState)(), {
                        agent: _
                    } = (0, tE.k)(), C = (0, tW.useSearchParams)(), {
                        getTokenValue: w
                    } = (0, tM.r)(), {
                        response: T,
                        qty: j = 0,
                        isLoading: S,
                        action: k,
                        orderItem_id: I,
                        orderId: B
                    } = y || {}, P = tV(T), A = async (e, o) => {
                        if ("change" === o || j === e) return;
                        let a = tK(e, o, B);
                        "add" !== o || e || (e = 1);
                        let d = {
                            "In-Cart": "in cart",
                            actionType: a,
                            ajaxFlag: !0,
                            checkOmsInventory: !0,
                            contractIdentifier: n,
                            isQuickAddToCartButton: !0,
                            isRestrictedPostalCode: !!(null == localStorage ? void 0 : localStorage.getItem("isRestrictedPostalCode")),
                            itemNumber: r,
                            keyword: null == C ? void 0 : C.get("keyword"),
                            maxQuantity: t,
                            minQuantity: i,
                            partNumber: l,
                            quantity: e,
                            quantity_1: e
                        };
                        try {
                            let t = await w(!0);
                            b(e => ({ ...e,
                                action: "",
                                isLoading: !0
                            }));
                            let n = await (null == _ ? void 0 : _.postAddToCartDetails(null == c ? void 0 : c.addToCartURL, { ...d,
                                ...B && {
                                    orderId: B
                                },
                                ..."add" !== o && {
                                    orderItem_1: (null == T ? void 0 : T.orderItemId) || I
                                },
                                authToken: t
                            }));
                            b(t => ({ ...t,
                                action: o,
                                isLoading: !1,
                                orderId: (null == t ? void 0 : t.orderId) ? t.orderId : null == n ? void 0 : n.orderId,
                                orderItem_id: (null == t ? void 0 : t.orderItem_id) ? t.orderItem_id : null == n ? void 0 : n.orderItemId,
                                qty: null == n ? void 0 : n.itemMessage,
                                response: 0 === e && tV(n) ? { ...n,
                                    customErrorLabel: v
                                } : n
                            })), f()
                        } catch (e) {
                            console.error("Add to cart post request failed:", e), b(e => ({ ...e,
                                action: "",
                                isLoading: !1,
                                response: {
                                    customErrorLabel: h
                                }
                            }))
                        }
                    };
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(tH.c, {
                            maxValue: isNaN(Number(t)) ? void 0 : Number(t),
                            minValue: isNaN(Number(i)) ? void 0 : Number(i),
                            action: k,
                            addToCartLabel: d,
                            customErrorMsg: P,
                            decrementAriaLabel: u,
                            inCartLabel: s,
                            incrementAriaLabel: p,
                            inputAriaLabel: x,
                            isAddToCartVariant: !0,
                            isAddToCartVisible: 0 == +j,
                            isLoading: S,
                            onQuantityChange: A,
                            parentUniqueId: g,
                            quantityLabel: x,
                            removeCartAriaLabel: m,
                            sx: tz,
                            uniqueId: "PRODUCT_ACTIONS_".concat(l),
                            updateQuantity: j,
                            isDeleteFromCartMessage: !((null == T ? void 0 : T.itemMessage) === 0 && "decrement" === k)
                        }), (0, o.jsx)(tU.Z, {
                            errorState: P,
                            quantity: j
                        })]
                    })
                },
                tq = e => {
                    let {
                        label: t
                    } = e;
                    return (0, o.jsx)(tG, {
                        children: t
                    })
                },
                tJ = e => {
                    let {
                        type: t,
                        productActionsVariant: n,
                        seedetailsbuttonlabel: r,
                        selectoptionsbuttonlabel: i,
                        pdpNavigationUrl: l,
                        productInfoData: a,
                        productTitleId: c
                    } = e, d = t === n.SeeDetails ? r : i;
                    return (0, o.jsx)(eQ.Button, {
                        "aria-describedby": c,
                        href: l,
                        sx: tz,
                        uniqueId: "".concat("ProductDetailsButton", "_").concat(a.partNumber),
                        variant: "primary",
                        children: d
                    })
                },
                tY = e => {
                    let {
                        productTitleId: t,
                        pdpNavigationUrl: n,
                        buttonStyles: r,
                        productInfoData: i,
                        signinbuttonlabel: l,
                        onClick: a
                    } = e;
                    return (0, o.jsx)(eQ.Button, {
                        "aria-describedby": t,
                        onClick: () => a(n || ""),
                        sx: r,
                        uniqueId: "".concat("SIGN_IN_BUTTON", "_").concat(i.partNumber),
                        variant: "primary",
                        children: l
                    })
                },
                tQ = (0, a.memo)(e => {
                    var t;
                    let {
                        refreshCartCallback: n,
                        pdpNavigationUrl: r,
                        pageType: i
                    } = e, {
                        normalizedData: l,
                        translationsConfig: a,
                        productTitleId: c
                    } = (0, ew.h)(), {
                        signIn: u
                    } = (0, d.a)(), {
                        productActions: s,
                        productInfoData: p
                    } = l;
                    if (!s) return null;
                    let {
                        maxQuantity: x,
                        minQuantity: m,
                        type: v,
                        contractIdentifier: h,
                        partNumber: g,
                        itemNumber: f
                    } = s || {}, {
                        translations: y,
                        urls: b
                    } = a, {
                        signinbuttonlabel: _,
                        selectoptionsbuttonlabel: C,
                        removeitemerror: w,
                        seedetailsbuttonlabel: T,
                        addtocartsuccessmessage: j,
                        genericerror: S,
                        addbuttonlabel: k,
                        removeitemarialabel: I,
                        quantity: B,
                        increasequantity: P,
                        decreasequantity: A,
                        outofstock: O
                    } = y || {};
                    switch (v) {
                        case eh.aI.OutOfStock:
                            return (0, o.jsx)(tq, {
                                label: null != O ? O : ""
                            });
                        case eh.aI.SignInButton:
                            return (0, o.jsx)(em.Analytics, {
                                analyticData: {
                                    trackedData: [{
                                        key: ev.Gn,
                                        value: ev.ry
                                    }]
                                },
                                children: (0, o.jsx)(tY, {
                                    buttonStyles: tz,
                                    onClick: u,
                                    pdpNavigationUrl: r,
                                    productInfoData: p,
                                    productTitleId: c,
                                    signinbuttonlabel: _
                                })
                            });
                        case eh.aI.SelectOptions:
                        case eh.aI.SeeDetails:
                            return (0, o.jsx)(em.Analytics, {
                                analyticData: {
                                    trackedData: [{
                                        key: ev.Gn,
                                        value: ev.ry
                                    }]
                                },
                                children: (0, o.jsx)(tJ, {
                                    type: v,
                                    productActionsVariant: eh.aI,
                                    pdpNavigationUrl: r,
                                    productInfoData: p,
                                    productTitleId: c,
                                    seedetailsbuttonlabel: T,
                                    selectoptionsbuttonlabel: C
                                })
                            });
                        case eh.aI.QuantitySelector:
                            return (0, o.jsx)(em.Analytics, {
                                analyticData: {
                                    trackType: ev.HM,
                                    trackedData: [{
                                        key: ev.hA,
                                        value: i === ev.Eg ? 1 : (null == (t = null == window ? void 0 : window.digitalData) ? void 0 : t.pageName) ? window.digitalData.pageName : ""
                                    }]
                                },
                                children: (0, o.jsx)(tZ, {
                                    maxQuantity: x,
                                    contractIdentifier: h,
                                    itemNumber: f,
                                    minQuantity: m,
                                    partNumber: g,
                                    urls: b,
                                    addbuttonlabel: k,
                                    decreasequantity: A,
                                    addtocartsuccessmessage: j,
                                    increasequantity: P,
                                    quantity: B,
                                    removeitemarialabel: I,
                                    removeitemerror: w,
                                    genericerror: S,
                                    productTitleId: c,
                                    refreshCartCallback: n
                                })
                            })
                    }
                }),
                t$ = e => {
                    let {
                        pdpNavigationUrl: t,
                        pageType: n
                    } = e, {
                        refreshCart: r
                    } = (0, tL.i)(), i = (0, a.useCallback)(() => {
                        r()
                    }, []);
                    return (0, o.jsx)(tQ, {
                        pageType: n,
                        pdpNavigationUrl: t,
                        refreshCartCallback: i
                    })
                },
                tX = {
                    display: "flex",
                    flexDirection: "column",
                    zIndex: 2
                },
                t0 = e => {
                    var t, n, r, i;
                    let {
                        showActionButton: l,
                        showCompareProduct: a,
                        pdpNavigationUrl: c,
                        pageType: d
                    } = e, {
                        translationsConfig: u,
                        normalizedData: s,
                        productTitleId: p
                    } = (0, ew.h)();
                    return (0, o.jsxs)(es.default, {
                        sx: tX,
                        children: [a && (0, o.jsx)(em.Analytics, {
                            analyticData: {
                                doNotTrack: !0
                            },
                            children: (0, o.jsx)(es.default, {
                                sx: {
                                    marginBottom: "12px"
                                },
                                children: (0, o.jsx)(tR, {
                                    label: null == (t = null == u ? void 0 : u.translations) ? void 0 : t.comparelabel,
                                    partNumber: null == (n = null == s ? void 0 : s.productInfoData) ? void 0 : n.partNumber,
                                    productImageUrl: null == (r = null == s ? void 0 : s.productInfoData) ? void 0 : r.productImageUrl,
                                    productName: null == (i = null == s ? void 0 : s.productInfoData) ? void 0 : i.productName,
                                    showCompareProductButton: a && (null == s ? void 0 : s.showCompareProductButton),
                                    isChdiEligible: null == s ? void 0 : s.isChdiEligible,
                                    isFsaEligible: null == s ? void 0 : s.isFsaEligible,
                                    productTitleId: p
                                })
                            })
                        }), l && (0, o.jsx)(t$, {
                            pageType: d,
                            pdpNavigationUrl: c
                        })]
                    })
                },
                t1 = {
                    "& p": {
                        margin: 0
                    },
                    alignItems: "stretch",
                    display: "flex",
                    flexDirection: "column",
                    gap: s.oFH,
                    justifyContent: "space-between",
                    position: "relative",
                    textAlign: "left"
                },
                t5 = {
                    padding: s.iPk,
                    border: "1px solid ".concat(s.gpS),
                    borderRadius: s.M7t,
                    margin: "".concat(s.iPk, " -").concat(s.iPk, " 0")
                },
                t2 = {
                    "&:focus-visible": {
                        borderRadius: "1px",
                        outline: "2px solid -webkit-focus-ring-color",
                        outlineOffset: "2px"
                    },
                    height: "100%",
                    position: "absolute",
                    width: "100%",
                    zIndex: 1
                },
                t3 = {
                    bottom: "-".concat(s.ODt),
                    color: s.UwU,
                    marginTop: "12px",
                    position: "absolute",
                    right: 0
                },
                t7 = { ...t3,
                    top: "-36px",
                    bottom: 0,
                    right: "12px",
                    fontSize: s.YzP,
                    textTransform: "capitalize"
                };

            function t4(e) {
                var t, n, l, u;
                let [s, p] = (0, a.useState)(!1), [x, m] = (0, a.useState)(null), [v, h] = (0, a.useState)(), [g, f] = (0, a.useState)(!0), [y, _] = (0, a.useState)(!1), {
                    isUserSignedIn: C,
                    isLoading: w
                } = (0, d.a)();
                (0, a.useEffect)(() => {
                    w || C().then(e => {
                        p(e)
                    }).finally(() => {
                        _(!0)
                    })
                }, [w, C]);
                let T = (0, c.$)(),
                    {
                        deliveryLocation: I
                    } = T,
                    {
                        isDomainInclusionDisabledByKeyword: B,
                        keyword: P
                    } = (0, r.Y)(),
                    {
                        variant: A,
                        inventoryAware: O,
                        configData: D,
                        productApiResponse: N,
                        locale: F,
                        showSkeleton: R = !1,
                        sx: L,
                        maxImageHeight: W,
                        showReviews: E,
                        showActionButton: H,
                        isHorizontal: U,
                        lwData: M,
                        grsData: V,
                        isSponsored: K,
                        productTileMaxLineNumber: z,
                        minProductTileImageWidth: G,
                        maxProductTileImageWidth: Z,
                        hideReviewStarValue: q,
                        showCompareProduct: J,
                        criteoDataSourceAttr: Y,
                        ariaLinkDescribedBy: Q,
                        pageType: $,
                        dataPrivate: X,
                        doFocus: ee,
                        enableAnalytics: et = !0,
                        tileIndex: en,
                        showMultiVariantsAvailability: eo,
                        sponsoredDisplayVariant: er = "default"
                    } = e,
                    ei = A === eh.tr.INFORMATIVE,
                    {
                        featureToggleConfig: eg,
                        translationsConfig: ef,
                        inventoryApiConfig: ey,
                        fsaConfig: eb
                    } = D || {},
                    e_ = (0, el.DI)(null == (t = null == eg ? void 0 : eg.promoBreakdown) ? void 0 : t.featureOn, null == (n = null == eg ? void 0 : eg.promoBreakdown) ? void 0 : n.enabledApplications),
                    {
                        inventoryItemNumbers: eC,
                        productApiResponseData: ew
                    } = N || {},
                    eT = null == eC ? void 0 : eC.map(String),
                    {
                        actionButtonControls: ej
                    } = ef || {},
                    {
                        requiresDeliveryZipcode: eS
                    } = ej || {},
                    ek = null !== (u = (0, i.vJ)()) && void 0 !== u && u,
                    eI = H && (0, eu.DO)(eS, ek, I),
                    eB = !ek || !!I.zipCode,
                    [eP, eA] = (0, a.useState)(0),
                    eO = (0, a.useCallback)(e => {
                        e && ee && ee > eP && (e.focus(), eA(ee))
                    }, [ee, eP]);
                if ((0, a.useEffect)(() => {
                        var e, t;
                        let n = new AbortController,
                            o = n.signal,
                            r = async () => {
                                var e;
                                let t;
                                if (O) {
                                    let e = await (0, S.j)(eT, ey, o, T);
                                    (null == e ? void 0 : e.ok) ? t = await e.json(): console.error("Inventory Api failed", e)
                                }
                                let n = (0, k.normalizeProductApi)({
                                    inventoryResponseData: t,
                                    productApiResponseData: ew
                                }, { ...D,
                                    pillBadgeConfig: { ...null == D ? void 0 : D.pillBadgeConfig,
                                        isDomainInclusionDisabledByKeyword: B
                                    }
                                }, !!s, T, P, K);
                                m(null == n ? void 0 : n[0]), h(null == (e = null == n ? void 0 : n[0]) ? void 0 : e.productInfoData.productLinkUrl), f(!1)
                            };
                        if (!x && y) {
                            if (M || V) {
                                let n;
                                m(n = V ? null == (e = ea([V], { ...D,
                                    pillBadgeConfig: { ...null == D ? void 0 : D.pillBadgeConfig,
                                        isDomainInclusionDisabledByKeyword: B
                                    }
                                }, !!s, T, eo)) ? void 0 : e[0] : null == (t = (0, ec.normalizeLwData)([M], { ...D,
                                    pillBadgeConfig: { ...null == D ? void 0 : D.pillBadgeConfig,
                                        isDomainInclusionDisabledByKeyword: B
                                    }
                                }, !!s, T, P, eo)) ? void 0 : t[0]), h(null == n ? void 0 : n.productInfoData.productLinkUrl), f(!1)
                            } else r()
                        }
                        return () => {
                            n.abort()
                        }
                    }, [P, O, D, B, ey, eT, ew, M, x, T, V, s, y, eo, K]), R || g) return (0, o.jsx)(b, {
                    isHorizontal: U,
                    minProductTileImageWidth: G
                });
                if (!x) return null;
                x.isPublished || console.log("Unpublished product tile", x.productInfoData.partNumber);
                let {
                    productInfoData: eD,
                    isFsaEligible: eN,
                    isChdiEligible: eF
                } = x, eR = "".concat(eh.lP, "_").concat(eD.partNumber, "_title"), eL = null == ef ? void 0 : ef.translations, eW = function(e) {
                    let {
                        sx: t,
                        isSponsored: n,
                        sponsoredDisplayVariant: o
                    } = e, r = { ...t1,
                        ...t || {}
                    };
                    return n && "bordered" === o ? { ...r,
                        ...t5
                    } : r
                }({
                    sx: L,
                    isSponsored: K,
                    sponsoredDisplayVariant: er
                }), eE = "bordered" === er ? t7 : t3, eH = function(e) {
                    let {
                        isSponsored: t,
                        criteoDataSourceAttr: n
                    } = e;
                    return !!t || !!n
                }({
                    isSponsored: K,
                    criteoDataSourceAttr: Y
                }), eU = function(e) {
                    let {
                        dataPrivate: t,
                        isFsaEligible: n,
                        isChdiEligible: o,
                        enableAnalytics: r
                    } = e;
                    return !!(t || n || o || !r)
                }({
                    dataPrivate: X,
                    isFsaEligible: eN,
                    isChdiEligible: eF,
                    enableAnalytics: et
                }), eM = function(e, t) {
                    if (t) return {
                        trackedData: [ev.Im, e.productName]
                    }
                }(eD, x.isCostcoTravel), eV = function(e, t) {
                    if (!t) return [{
                        key: ev.Xe,
                        value: null == e ? void 0 : e.partNumber
                    }, {
                        key: ev.JT,
                        value: null == e ? void 0 : e.itemNumber
                    }]
                }(eD, x.isCostcoTravel);
                return (0, o.jsx)(em.Analytics, {
                    analyticData: {
                        adItem: {
                            url: v
                        },
                        component: eM,
                        doNotTrack: eU,
                        trackedData: eV
                    },
                    children: (0, o.jsx)(ed.T, {
                        value: {
                            isInformative: ei,
                            locale: F,
                            normalizedData: x,
                            productTitleId: eR,
                            translationsConfig: ef,
                            isSignedIn: s
                        },
                        children: (0, o.jsxs)(es.default, {
                            "data-source": eH ? "sponsored" : "native",
                            sx: eW,
                            "data-testid": "".concat(eh.lP, "_").concat(eD.partNumber),
                            "data-tile-index": en,
                            "data-private": eU,
                            role: "group",
                            children: [(0, o.jsx)(em.Analytics, {
                                analyticData: {
                                    doNotTrack: !et,
                                    trackedData: [{
                                        key: $ === ev.Eg ? ev.Gt : ev.Gn,
                                        value: ev.ry
                                    }]
                                },
                                children: (0, o.jsx)(ex.Link, {
                                    "aria-describedby": Q || null,
                                    href: v || "",
                                    sx: t2,
                                    ref: eO,
                                    children: (0, o.jsx)(es.default, {
                                        component: "span",
                                        sx: ep.Z,
                                        children: eD.productName
                                    })
                                })
                            }), (0, o.jsx)(tA, {
                                isCriteo: eH,
                                fsaConfig: eb,
                                hideReviewStarValue: q,
                                isCriteoCarousel: Y,
                                isHorizontal: U,
                                maxImageHeight: W,
                                maxProductTileImageWidth: Z,
                                minProductTileImageWidth: G,
                                productTileMaxLineNumber: (null == (l = null == ef ? void 0 : ef.product_display_style) ? void 0 : l.description_max_line_numbers) || z,
                                setPdpNavigationUrl: h,
                                showReviews: !!E,
                                showPricing: eB,
                                showActionButton: H,
                                cookieContext: T,
                                enablePromoBreakdown: e_
                            }), ei && (0, o.jsx)(t0, {
                                pageType: $,
                                pdpNavigationUrl: v,
                                showActionButton: eI,
                                showCompareProduct: J
                            }), K && (0, o.jsx)(j.Text, {
                                sx: eE,
                                variant: "t7",
                                children: eL.sponsoredlabel
                            })]
                        })
                    })
                })
            }
            t4.displayName = eh.lP;
            var t6 = n(95432);

            function t9(e) {
                let t, {
                    analytics: n = {},
                    itemNumber: r,
                    isHorizontal: i = !1,
                    configData: l,
                    productTileSx: a,
                    productApiResponse: c,
                    lwData: d,
                    inventoryAware: u,
                    locale: p,
                    showActionButton: x,
                    showReviews: m,
                    showCompareProduct: h,
                    variant: f,
                    isSponsored: y,
                    carouselIndexText: b,
                    carouselTitle: _,
                    dataPrivate: C,
                    minProductTileImageWidth: w,
                    maxProductTileImageWidth: T,
                    hideReviewStarValue: S,
                    productTileMaxLineNumber: k,
                    maxImageHeight: I,
                    containerSx: B,
                    criteoDataSourceAttr: P,
                    carouselIndexAriaText: A,
                    pageType: O,
                    isProductDetailsPage: D,
                    isV1ProductTile: N,
                    sponsoredDisplayVariant: F = "default",
                    allowBatchApi: R = !0
                } = e;
                return _ && (t = "Product Tile | ".concat(_, ";pid:").concat(r)), (0, o.jsx)(g.y, {
                    observer: {
                        minimumViewTime: n.minimumViewTime,
                        onClick: () => {
                            var e;
                            return null == (e = n.onTileClicked) ? void 0 : e.call(n, r)
                        },
                        onLoad: () => {
                            var e;
                            return null == (e = n.onTileLoad) ? void 0 : e.call(n, r)
                        },
                        onView: () => {
                            var e;
                            return null == (e = n.onTileViewed) ? void 0 : e.call(n, r)
                        },
                        viewThreshold: n.viewThreshold
                    },
                    sx: {
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        padding: i ? 0 : s.M7t,
                        paddingBottom: i ? 0 : s.vdF,
                        textAlign: "start",
                        ...B
                    },
                    children: (0, o.jsxs)(v.CostcoBox, {
                        sx: {
                            height: D ? "100%" : "inherit"
                        },
                        children: [N ? (0, o.jsx)(t4, {
                            ariaLinkDescribedBy: A ? "carouselProductTile-".concat(r, "-carouselIndexAriaText") : void 0,
                            productApiResponse: c,
                            lwData: d,
                            configData: l,
                            criteoDataSourceAttr: P,
                            dataPrivate: C,
                            hideReviewStarValue: S,
                            inventoryAware: u,
                            isHorizontal: i,
                            isSponsored: y,
                            itemNumber: null == c ? void 0 : c.itemNumber,
                            locale: p,
                            maxImageHeight: I,
                            maxProductTileImageWidth: T,
                            minProductTileImageWidth: w,
                            pageType: O,
                            productTileMaxLineNumber: k,
                            showActionButton: x,
                            showCompareProduct: h,
                            showReviews: m,
                            sx: a,
                            variant: f,
                            allowBatchApi: R,
                            enableAnalytics: !n.onTileClicked,
                            sponsoredDisplayVariant: F
                        }) : (0, o.jsx)(t6.Y, {
                            ariaLinkDescribedBy: A ? "carouselProductTile-".concat(r, "-carouselIndexAriaText") : void 0,
                            productApiResponse: c,
                            lwData: d,
                            allowBatchApi: R,
                            addToCartAnalytics: t,
                            configData: l,
                            criteoDataSourceAttr: P,
                            dataPrivate: C,
                            hideReviewStarValue: S,
                            inventoryAware: u,
                            isCriteo: "Sponsored Products" === _,
                            isHorizontal: i,
                            isSponsored: y,
                            itemNumber: null == c ? void 0 : c.itemNumber,
                            locale: p,
                            maxImageHeight: I,
                            minProductTileImageWidth: w,
                            maxProductTileImageWidth: T,
                            pageType: O,
                            isProductDetailsPage: D,
                            productTileMaxLineNumber: k,
                            ratingVariant: "compact",
                            showActionButton: x,
                            showCompareProduct: h,
                            showReviews: m,
                            sx: { ...a
                            },
                            variant: f,
                            enableAnalytics: !n.onTileClicked
                        }), !!b && (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(j.Text, {
                                sx: {
                                    textAlign: "right"
                                },
                                "aria-hidden": "true",
                                color: "medium",
                                children: b
                            }), !!A && (0, o.jsx)(j.Text, {
                                sx: {
                                    display: "none",
                                    textAlign: "right"
                                },
                                color: "medium",
                                id: "carouselProductTile-".concat(r, "-carouselIndexAriaText"),
                                children: A
                            })]
                        })]
                    })
                }, "carouselProductTile-".concat(r))
            }
            var t8 = n(61141),
                ne = n(30835);
            async function nt(e, t, n) {
                let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                    r = arguments.length > 4 ? arguments[4] : void 0,
                    i = arguments.length > 5 ? arguments[5] : void 0,
                    l = arguments.length > 6 ? arguments[6] : void 0,
                    a = async e => {
                        try {
                            let o = await (0, ne._)(e, t, n, r || "");
                            if (!o) return null;
                            return { ...o,
                                itemNumber: e
                            }
                        } catch (e) {
                            return console.log(e), null
                        }
                    };
                if (l || !i || i >= e.length) return {
                    initialResults: (await (0, t8.ZP)(e, a, {
                        concurrency: o
                    })).filter(e => !!e),
                    remainingResultsPromise: Promise.resolve([])
                };
                let c = [],
                    d = e.slice();
                for (; c.length < i && d.length > 0;) {
                    let e = i - c.length,
                        t = d.slice(0, e);
                    d = d.slice(e);
                    let n = (await (0, t8.ZP)(t, a, {
                        concurrency: o
                    })).filter(e => !!e);
                    c = [...c, ...n], n.length < t.length && console.warn("getProductsInformation: Batch fetched ".concat(n.length, " valid products, expected ").concat(t.length, ". Missing: ").concat(t.filter(e => !n.some(t => t.itemNumber === e))))
                }
                return {
                    initialResults: c,
                    remainingResultsPromise: (0, t8.ZP)(d, a, {
                        concurrency: o
                    }).then(e => e.filter(e => !!e))
                }
            }
            var nn = n(69023),
                no = n(82847);
            async function nr(e) {
                var t, n, o;
                let {
                    locale: r,
                    itemNumbers: i,
                    productTileConfigData: l,
                    bdWHNumber: a,
                    cookieContext: c
                } = e, d = l;
                if (d || (d = await (0, no.g)(!1, r)), !d.lucidWorksApiConfig) return {
                    configData: d,
                    isLucidWorksData: !0,
                    lwResponses: [],
                    productApiResponses: []
                };
                let u = r;
                if (u.includes("-")) {
                    let e = u.split("-");
                    2 === e.length && (u = "".concat(e[0], "-").concat(e[1].toUpperCase()))
                }
                let s = a || d.lucidWorksApiConfig.defaultBDWarehouse,
                    p = (null == (n = null == (t = null == c ? void 0 : c.bdDeliveryLocation) ? void 0 : t.bdLocation) ? void 0 : n.slice(-2)) || "",
                    x = "q=:&fq=".concat(encodeURIComponent("{!terms f=group_id}")).concat(i.join(","), "&start=0&rows=").concat(i.length, "&locale=").concat(u, "&loc=").concat(s);
                p && (x += "&userLocation=".concat(p)), d.lucidWorksApiConfig.additionalURLParams && (x += "&".concat(d.lucidWorksApiConfig.additionalURLParams));
                let m = await fetch("".concat(d.lucidWorksApiConfig.apiUrl, "?").concat(x), {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        "x-api-key": d.lucidWorksApiConfig.xApiKey
                    }
                });
                if (!m.ok) return console.error("LW FETCH ERROR", m.statusText), {
                    configData: d,
                    isLucidWorksData: !0,
                    lwResponses: [],
                    productApiResponses: []
                };
                let v = await m.json();
                return {
                    configData: d,
                    isLucidWorksData: !0,
                    lwResponses: (null == (o = null == v ? void 0 : v.response) ? void 0 : o.docs) || [],
                    productApiResponses: []
                }
            }
            async function ni(e) {
                let {
                    inventoryAware: t,
                    locale: n,
                    itemNumbers: o,
                    productTileConfigData: r,
                    concurrency: i = 1,
                    bdWHNumber: l,
                    initialBatchSize: a,
                    isProductDetailsPage: c = !1
                } = e, d = r;
                d || (d = await (0, no.g)(t, n));
                let {
                    initialResults: u,
                    remainingResultsPromise: s
                } = await nt(o, d, n, i, l, a, c);
                return {
                    configData: d,
                    productApiResponses: u,
                    lwResponses: [],
                    remainingResultsPromise: s
                }
            }
            let nl = (e, t, n) => e && t ? n ? t * n : t : n || 5;

            function na(e) {
                var t, n;
                let r, i, {
                        analytics: l = {},
                        containerSx: a = {},
                        itemNumbers: c,
                        productData: d,
                        isLoadingProductData: f,
                        productDataLoadingError: y,
                        locale: b,
                        variant: C,
                        inventoryAware: S,
                        showReviews: k,
                        showActionButton: I,
                        testId: B,
                        isHorizontal: P,
                        showSlideNumber: A,
                        criteoDataSourceAttr: O,
                        maxSlides: D,
                        maxSlidesBySize: N,
                        titleProps: F,
                        navigationButtonBottomOffset: R = "auto",
                        disableBottomControls: L,
                        minProductTileImageWidth: W,
                        maxProductTileImageWidth: E,
                        productTileMaxLineNumber: H,
                        hideReviewStarValue: U,
                        maxProductTileImageHeight: M,
                        productTileSx: V = {},
                        productTileContainerSx: K = {},
                        sx: z = {},
                        peekAdjacent: G,
                        wrapAround: Z,
                        ariaLabel: q = "",
                        productTileNumberSeparator: J,
                        slideGapSizes: Y,
                        navigationButtonsBottomAlign: Q,
                        navigationButtonsMobileDisplay: $,
                        displayMultipleTiles: X,
                        pageType: ee,
                        maxItemsPerSlide: et,
                        componentType: en,
                        randomizeItems: eo,
                        isProductDetailsPage: er,
                        dataPrivate: ei
                    } = e,
                    el = null == a ? void 0 : a.maxHeight,
                    {
                        isDesktop: ea,
                        isTablet: ec,
                        isMobile: ed
                    } = (0, h.T)(),
                    eu = "110px";
                ea ? et = (null == N ? void 0 : N.desktop) || 5 : ec ? en === x.oT ? et = 2 : (et = (null == N ? void 0 : N.tablet) || 3, eu = "115px") : ed && (et = en === x.oT ? 1 : (null == N ? void 0 : N.mobile) || 2);
                let es = (null == Y ? void 0 : Y.desktop) || s.oFH;
                ec && (null == Y ? void 0 : Y.tablet) ? es = null == Y ? void 0 : Y.tablet : ed && (null == Y ? void 0 : Y.mobile) && (es = null == Y ? void 0 : Y.mobile), D && (et = D);
                let ep = !1;
                (null == (t = null == d ? void 0 : d.productApiResponses) ? void 0 : t.length) ? r = (null == (n = null == d ? void 0 : d.productApiResponses) ? void 0 : n.filter(e => {
                    var t, n, o, r, i, l;
                    let a = (null == (t = null == e ? void 0 : e.productApiResponseData) ? void 0 : t.data) || {};
                    return !!(null == (o = null == (n = null == a ? void 0 : a.products) ? void 0 : n.catalogData) ? void 0 : o.length) && !!(null == (l = null == (i = null == (r = null == a ? void 0 : a.products) ? void 0 : r.catalogData) ? void 0 : i[0]) ? void 0 : l.published)
                })) || c: (null == d ? void 0 : d.isLucidWorksData) ? (r = (null == d ? void 0 : d.lwResponses) || [], ep = !0) : r = c, et && et > 1 && (null == r ? void 0 : r.length) < et && (i = ea ? "calc(".concat(s.V6U, "/").concat(et, ")") : "calc(calc(100vw - ".concat(s.ODt, ")/").concat(et, ")"));
                let ex = {
                    height: "100%",
                    justifyContent: P ? "center" : "space-between",
                    marginTop: P ? 0 : 1,
                    maxHeight: el,
                    maxWidth: i,
                    paddingTop: P ? 1 : 0,
                    ..._,
                    ...V
                };
                if (!f && (!d || 0 === r.length)) return y && console.error(y), null;
                let em = { ...w,
                        ...a
                    },
                    ev = (0, m.Ny)(null != en ? en : x.Z5);
                if (f) return (0, o.jsx)(v.CostcoBox, {
                    "data-testid": "".concat(B, "_").concat("ProductCarouselUISkeleton"),
                    sx: { ...ev,
                        ...z
                    },
                    children: (0, o.jsx)(T, {
                        containerSx: { ...ex,
                            justifyContent: "center"
                        },
                        carouselContainerSx: em,
                        expectedProductNumber: et,
                        isHorizontal: P,
                        maxItemsPerSlide: et,
                        minProductTileImageWidth: W,
                        titleProps: F
                    })
                });
                let eh = Math.min(et, r.length);
                r.length < et && (em.maxWidth = "".concat(100 / et * r.length, "%"));
                let eg = null == F ? void 0 : F.title,
                    ef = null == eg ? void 0 : eg.replace(/\s+/g, "-").toLowerCase();
                return (0, o.jsx)(g.y, {
                    observer: {
                        con: !0,
                        minimumViewTime: l.minimumViewTime,
                        onLoad: () => {
                            l.onCarouselRendered && l.onCarouselRendered()
                        },
                        onView: l.onCarouselViewed,
                        viewThreshold: l.viewThreshold
                    },
                    children: (0, o.jsxs)(v.CostcoBox, {
                        sx: { ...ev,
                            ...z
                        },
                        "data-testid": "".concat(B, "_").concat("ProductCarouselUI"),
                        children: [F && (0, o.jsx)(p.AdSetTitle, {
                            titleSx: er ? {
                                fontWeight: s.cQB,
                                lineHeight: s.gkn
                            } : void 0,
                            titleWrapperSx: er ? {
                                marginBottom: 0
                            } : void 0,
                            titleVariant: er ? "t5" : void 0,
                            titleId: "".concat(ef, "_").concat(B),
                            ...F
                        }), (0, o.jsx)(v.CostcoBox, {
                            sx: {
                                alignItems: "center",
                                display: "flex",
                                justifyContent: "flex-start",
                                width: "100%"
                            },
                            children: (0, o.jsx)(v.CostcoBox, {
                                sx: em,
                                children: (0, o.jsx)(u.Carousel, {
                                    containerSx: {
                                        margin: 0,
                                        padding: 0
                                    },
                                    items: function(e) {
                                        let {
                                            disableBottomControls: t,
                                            maxProductTileImageHeight: n,
                                            maxProductTileImageWidth: r,
                                            minProductTileImageWidth: i,
                                            productTileContainerSx: l,
                                            productTileMaxLineNumber: a,
                                            productTileNumberSeparator: c,
                                            analytics: d,
                                            carouselItems: u,
                                            isLWResponseData: s,
                                            criteoDataSourceAttr: p,
                                            dataPrivate: x,
                                            displayMultipleTiles: m,
                                            finalProductTileSx: h,
                                            hideReviewStarValue: g,
                                            inventoryAware: f,
                                            isHorizontal: y,
                                            isProductDetailsPage: b,
                                            locale: _,
                                            productData: C,
                                            showActionButton: w,
                                            showReviews: T,
                                            showSlideNumber: S,
                                            variant: k,
                                            pageType: I,
                                            carouselTitle: B
                                        } = e;
                                        if (!m) return null == u ? void 0 : u.map((e, m) => {
                                            let v, j, P;
                                            v = s ? (j = e).group_id || j.item_number || j.item_location_itemNumber : null == (P = e) ? void 0 : P.itemNumber;
                                            let A = y && t || S,
                                                O = "".concat(m + 1, "/").concat(null == u ? void 0 : u.length),
                                                D = c && A;
                                            return (0, o.jsx)(t9, {
                                                carouselIndexAriaText: D ? "".concat(m + 1, " ").concat(c, " ").concat(null == u ? void 0 : u.length) : void 0,
                                                carouselIndexText: A ? O : void 0,
                                                configData: null == C ? void 0 : C.configData,
                                                maxImageHeight: n || (null == h ? void 0 : h.maxHeight),
                                                productApiResponse: P,
                                                allowBatchApi: 1 === ((null == P ? void 0 : P.inventoryItemNumbers) || []).length,
                                                lwData: j,
                                                analytics: d,
                                                carouselTitle: B,
                                                containerSx: l,
                                                criteoDataSourceAttr: p,
                                                dataPrivate: x,
                                                hideReviewStarValue: g,
                                                inventoryAware: f,
                                                isHorizontal: y,
                                                isProductDetailsPage: b,
                                                itemNumber: v,
                                                locale: _,
                                                maxProductTileImageWidth: r,
                                                minProductTileImageWidth: i,
                                                pageType: I,
                                                productTileMaxLineNumber: a,
                                                productTileSx: h,
                                                showActionButton: w,
                                                showReviews: T,
                                                variant: k
                                            }, "carouselProductTile-".concat(v))
                                        }); {
                                            let e = function(e, t) {
                                                let n = [];
                                                for (let t = 0; t < e.length; t += 2) n.push(e.slice(t, t + 2));
                                                return n
                                            }(u, 0);
                                            return e.map((u, m) => {
                                                let b = y && t || S,
                                                    B = "".concat(m + 1, "/").concat(null == e ? void 0 : e.length),
                                                    P = c && b;
                                                return (0, o.jsxs)(v.CostcoBox, {
                                                    sx: {
                                                        display: "flex",
                                                        flexDirection: "column"
                                                    },
                                                    children: [(0, o.jsx)(v.CostcoBox, {
                                                        sx: {
                                                            display: "flex",
                                                            flexDirection: "row"
                                                        },
                                                        children: u.map(e => {
                                                            let t, c, u;
                                                            return t = s ? (c = e).item_number || c.item_location_itemNumber : null == (u = e) ? void 0 : u.itemNumber, (0, o.jsx)(t9, {
                                                                configData: null == C ? void 0 : C.configData,
                                                                maxImageHeight: n || (null == h ? void 0 : h.maxHeight),
                                                                maxProductTileImageWidth: r,
                                                                minProductTileImageWidth: i,
                                                                productApiResponse: u,
                                                                lwData: c,
                                                                productTileMaxLineNumber: a,
                                                                productTileSx: h,
                                                                analytics: d,
                                                                containerSx: l,
                                                                criteoDataSourceAttr: p,
                                                                dataPrivate: x,
                                                                hideReviewStarValue: g,
                                                                inventoryAware: f,
                                                                isHorizontal: y,
                                                                itemNumber: t,
                                                                locale: _,
                                                                pageType: I,
                                                                showActionButton: w,
                                                                showReviews: T,
                                                                variant: k,
                                                                isProductDetailsPage: !0
                                                            }, "carouselProductTile-".concat(t))
                                                        })
                                                    }), !!b && (0, o.jsxs)(o.Fragment, {
                                                        children: [(0, o.jsx)(j.Text, {
                                                            sx: {
                                                                textAlign: "right"
                                                            },
                                                            "aria-hidden": "true",
                                                            color: "medium",
                                                            children: B
                                                        }), !!P && (0, o.jsx)(j.Text, {
                                                            sx: {
                                                                display: "none",
                                                                textAlign: "right"
                                                            },
                                                            color: "medium",
                                                            id: "carouselProductTile-".concat(m, "-carouselIndexAriaText"),
                                                            children: "".concat(m + 1, " ").concat(c, " ").concat(null == e ? void 0 : e.length)
                                                        })]
                                                    })]
                                                }, m)
                                            })
                                        }
                                    }({
                                        analytics: l,
                                        isLWResponseData: ep,
                                        carouselItems: r,
                                        carouselTitle: eg,
                                        criteoDataSourceAttr: O,
                                        dataPrivate: ei,
                                        disableBottomControls: L,
                                        displayMultipleTiles: X,
                                        finalProductTileSx: ex,
                                        hideReviewStarValue: U,
                                        inventoryAware: S,
                                        isHorizontal: P,
                                        isProductDetailsPage: er,
                                        locale: b,
                                        maxProductTileImageHeight: M,
                                        maxProductTileImageWidth: E,
                                        minProductTileImageWidth: W,
                                        pageType: ee,
                                        productData: d,
                                        productTileContainerSx: K,
                                        productTileMaxLineNumber: H,
                                        productTileNumberSeparator: J,
                                        showActionButton: I,
                                        showReviews: k,
                                        showSlideNumber: A,
                                        variant: C
                                    }),
                                    label: !q && (null == F ? void 0 : F.title) ? null : q,
                                    labelledBy: ef ? "".concat(ef, "_").concat(B) : void 0,
                                    navigationButtonBottomOffset: er ? "auto" : R,
                                    navigationButtonTopOffset: er ? eu : "auto",
                                    navigationButtonsBottomAlign: Q,
                                    navigationButtonsMobileDisplay: $,
                                    wrapAround: "boolean" == typeof Z ? Z : eh < r.length,
                                    disableBottomControls: L,
                                    itemsPerSlide: eh,
                                    peekAdjacent: G,
                                    randomizeItems: eo,
                                    slideGap: es
                                })
                            })
                        })]
                    })
                })
            }
            let nc = (0, a.memo)(function(e) {
                let {
                    bdWHNumber: t,
                    containerSx: n = {},
                    analytics: i = {},
                    itemNumbers: c,
                    locale: u,
                    variant: s,
                    inventoryAware: p,
                    showReviews: x,
                    showActionButton: m,
                    testId: v,
                    isHorizontal: h,
                    criteoDataSourceAttr: g,
                    maxSlides: f,
                    titleProps: y,
                    navigationButtonBottomOffset: b = "80%",
                    disableBottomControls: _,
                    productTileMaxLineNumber: C,
                    minProductTileImageWidth: w,
                    maxProductTileImageWidth: T,
                    hideReviewStarValue: j,
                    maxProductTileImageHeight: S,
                    productTileSx: k,
                    productTileContainerSx: I,
                    sx: B,
                    peekAdjacent: P,
                    showSlideNumber: A,
                    wrapAround: O,
                    ariaLabel: D,
                    productTileNumberSeparator: N,
                    slideGapSizes: F = {},
                    navigationButtonsBottomAlign: R,
                    navigationButtonsMobileDisplay: L,
                    displayMultipleTiles: W = !1,
                    pageType: E,
                    maxItemsPerSlide: H,
                    componentType: U,
                    randomizeItems: M,
                    isProductDetailsPage: V,
                    dataPrivate: K,
                    maxSlidesBySize: z,
                    product_tile_data_source: G,
                    cookieContext: Z
                } = e, {
                    productTileConfigData: q
                } = (0, r.Y)(), {
                    concurrency: J
                } = (0, l.F)(), [Y, Q] = (0, a.useState)(!1), {
                    isUserSignedIn: $,
                    isLoading: X
                } = (0, d.a)();
                (0, a.useEffect)(() => {
                    X || $().then(e => {
                        Q(e)
                    })
                }, [X, $]);
                let {
                    isLoadingPopulatedProductData: ee,
                    populatedProductData: et,
                    populatedProductDataError: en
                } = function(e) {
                    let {
                        inventoryAware: t,
                        itemNumbers: n,
                        locale: o,
                        productTileConfigData: r,
                        concurrency: i = 5,
                        bdWHNumber: l,
                        initialDisplayCount: c = 5,
                        product_tile_data_source: d,
                        isProductDetailsPage: u = !1,
                        cookieContext: s,
                        isUserLoggedIn: p
                    } = e, [x, m] = (0, a.useState)(!0), [v, h] = (0, a.useState)(), [g, f] = (0, a.useState)();
                    return (0, a.useEffect)(() => {
                        let e = "string" == typeof n ? [n] : n;
                        "lucid_works" === d ? (async () => {
                            m(!0);
                            try {
                                let t = await nr({
                                    itemNumbers: e,
                                    locale: o,
                                    productTileConfigData: r,
                                    bdWHNumber: l,
                                    cookieContext: s
                                });
                                h(t)
                            } catch (e) {
                                f(e), h(null), console.error("ERROR: Fetching LW Product Data")
                            }
                            m(!1)
                        })() : (async () => {
                            m(!0);
                            try {
                                let n = await ni({
                                    concurrency: i,
                                    inventoryAware: t,
                                    itemNumbers: e,
                                    locale: o,
                                    productTileConfigData: r,
                                    bdWHNumber: l,
                                    initialBatchSize: c,
                                    isProductDetailsPage: u
                                });
                                if (h(n), n.remainingResultsPromise) try {
                                    let e = await n.remainingResultsPromise;
                                    e.length > 0 && h(t => t ? { ...t,
                                        productApiResponses: [...t.productApiResponses, ...e],
                                        remainingResultsPromise: null
                                    } : null)
                                } catch (e) {
                                    console.error("ERROR: Fetching remaining product data", e)
                                }
                                m(!1)
                            } catch (e) {
                                f(e), h(null), m(!1), console.error("ERROR: Fetching Product Data")
                            }
                        })()
                    }, [n, d]), {
                        isLoadingPopulatedProductData: x,
                        populatedProductData: (0, a.useMemo)(() => {
                            var e, t, n;
                            return v && (null == (t = null == (e = null == r ? void 0 : r.translationsConfig) ? void 0 : e.product_display_style) ? void 0 : t.hide_out_of_stock_carousel_tiles) && "lucid_works" === d ? { ...v,
                                lwResponses: null == (n = null == v ? void 0 : v.lwResponses) ? void 0 : n.filter(e => {
                                    let t = (0, nn.Ld)(e, r.featureToggleConfig, r.translationsConfig, !!p, s);
                                    return (null == t ? void 0 : t.type) !== "OutOfStock"
                                })
                            } : v
                        }, [v, d, p, s, r]),
                        populatedProductDataError: g
                    }
                }({
                    concurrency: J,
                    inventoryAware: p,
                    itemNumbers: c,
                    locale: u,
                    productTileConfigData: q,
                    bdWHNumber: t,
                    initialDisplayCount: nl(W, H, f),
                    product_tile_data_source: G,
                    isProductDetailsPage: V,
                    cookieContext: Z,
                    isUserLoggedIn: Y
                });
                return (0, o.jsx)(na, {
                    analytics: i,
                    ariaLabel: D,
                    componentType: U,
                    containerSx: n,
                    criteoDataSourceAttr: g,
                    dataPrivate: K,
                    disableBottomControls: _,
                    displayMultipleTiles: W,
                    hideReviewStarValue: V || j,
                    inventoryAware: p,
                    isHorizontal: h,
                    isLoadingProductData: ee,
                    isProductDetailsPage: V,
                    itemNumbers: c,
                    locale: u,
                    maxItemsPerSlide: H,
                    maxProductTileImageHeight: S,
                    maxProductTileImageWidth: T,
                    maxSlides: f,
                    maxSlidesBySize: z,
                    minProductTileImageWidth: w,
                    navigationButtonBottomOffset: b,
                    navigationButtonsBottomAlign: R,
                    navigationButtonsMobileDisplay: L,
                    pageType: E,
                    peekAdjacent: P,
                    productData: et,
                    productDataLoadingError: en,
                    productTileContainerSx: I,
                    productTileMaxLineNumber: C,
                    productTileNumberSeparator: N,
                    productTileSx: k,
                    randomizeItems: M,
                    showActionButton: m,
                    showReviews: x,
                    showSlideNumber: A,
                    slideGapSizes: F,
                    sx: B,
                    testId: v,
                    titleProps: y,
                    variant: s,
                    wrapAround: O
                })
            });

            function nd(e) {
                let {
                    bdWarehouseNumber: t,
                    wcMember: n,
                    bdDeliveryLocation: r
                } = (0, c.$)(), l = !e.bdWHNumber && (0, i.vJ)() ? null == t ? void 0 : t.value : e.bdWHNumber, d = (0, a.useMemo)(() => ({
                    bdDeliveryLocation: r,
                    wcMember: n
                }), [r, n]);
                return (0, o.jsx)(nc, {
                    bdWHNumber: l,
                    cookieContext: d,
                    ...e
                })
            }
        },
        59011: function(e, t, n) {
            "use strict";
            n.d(t, {
                $f: function() {
                    return v
                },
                Av: function() {
                    return s
                },
                B9: function() {
                    return m
                },
                Py: function() {
                    return c
                },
                R0: function() {
                    return r
                },
                TV: function() {
                    return i
                },
                Tz: function() {
                    return x
                },
                VE: function() {
                    return C
                },
                X2: function() {
                    return p
                },
                YF: function() {
                    return h
                },
                Yw: function() {
                    return f
                },
                ZK: function() {
                    return _
                },
                cM: function() {
                    return g
                },
                d8: function() {
                    return d
                },
                hS: function() {
                    return b
                },
                iv: function() {
                    return a
                },
                kO: function() {
                    return l
                },
                mF: function() {
                    return u
                },
                rY: function() {
                    return o
                },
                uj: function() {
                    return y
                }
            });
            let o = "adbutler",
                r = "adobe",
                i = "criteo",
                l = "lucidworks",
                a = "product",
                c = "category",
                d = "rotating",
                u = "one_fourth_mix",
                s = "large_banner",
                p = "https://media-cdn.costco.com/adserve/",
                x = "adbutler_service_config",
                m = "NO_ADS",
                v = 1e3,
                h = .5,
                g = 3,
                f = 3,
                y = 12,
                b = 6,
                _ = 4,
                C = 3
        },
        96043: function(e, t, n) {
            "use strict";
            n.d(t, {
                Ny: function() {
                    return c
                },
                ww: function() {
                    return d
                }
            });
            var o = n(95656),
                r = n(31691),
                i = n(16210),
                l = n(7302),
                a = n(10150);
            let c = e => {
                let t = (0, r.Z)(),
                    n = {};
                switch (e) {
                    case a.oT:
                        n = {
                            maxWidth: "50%"
                        };
                        break;
                    case a.Vc:
                        n = {
                            maxWidth: "25%"
                        };
                        break;
                    case a.Fx:
                        n = {
                            maxWidth: "33.33%"
                        }
                }
                return {
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    maxWidth: "100%",
                    [t.breakpoints.down("md")]: {
                        '&[data-layout="large_ad"] > div > div': {
                            flexBasis: "100%"
                        },
                        '&[data-layout="large_half_banner"] > div > div': {
                            flexBasis: "100%"
                        },
                        '&[data-layout="one_third"] > div, &[data-layout="half"] > div': {
                            flexDirection: "column"
                        }
                    },
                    ...n
                }
            };
            (0, i.ZP)(o.default, {
                shouldForwardProp: e => "adCount" !== e
            })(e => {
                let {
                    adCount: t = 0,
                    theme: n
                } = e;
                return {
                    "> div": {
                        width: 1 === t ? "100%" : "calc(".concat(100 / t, "% - ").concat(6 * t, "px)")
                    },
                    alignItems: "start",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "24px",
                    justifyContent: "space-between",
                    [n.breakpoints.down("md")]: {
                        "> div": {
                            flexBasis: "45%",
                            flexGrow: 1
                        }
                    }
                }
            }), l.vdF, l.vdF, l.vdF;
            let d = {
                alignItems: "start",
                columnGap: {
                    lg: 0,
                    md: l.aiS
                },
                display: "flex",
                flexWrap: "wrap",
                rowGap: l.ODt
            }
        },
        19421: function(e, t, n) {
            "use strict";
            n.d(t, {
                EO: function() {
                    return i
                },
                J0: function() {
                    return l
                },
                Kj: function() {
                    return r
                },
                mD: function() {
                    return a
                },
                wm: function() {
                    return c
                }
            });
            var o = n(59011);
            let r = async function(e, t) {
                    var n;
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        i = arguments.length > 3 ? arguments[3] : void 0,
                        l = ["ID=".concat(e), "setID=".concat(t), "type=jsonr", "output_json_template_params=1"];
                    r && (l.push("_adb_lwp=".concat(r)), l.push("referrer=".concat(null == (n = null == window ? void 0 : window.location) ? void 0 : n.origin))), i && l.push("kw=".concat(encodeURIComponent(i)));
                    let a = await fetch("".concat(o.X2, ";").concat(l.join(";")));
                    return await a.json()
                },
                i = e => {
                    let {
                        placement_id: t,
                        redirect_url: n,
                        template_params: o,
                        ad_type: r
                    } = e, i = [];
                    (o.TopText || o.TopBackgroundColor) && i.push({
                        strip: {
                            _metadata: {
                                uid: t
                            },
                            background_color: {
                                background_color: {
                                    hex: o.TopBackgroundColor
                                },
                                background_gradient_color: {
                                    color1: {
                                        hex: o.TopGradientColor1
                                    },
                                    color2: {
                                        hex: o.TopGradientColor2
                                    }
                                },
                                background_gradient_style: o.TopGradientStyle
                            },
                            font_size: "item_driver" === r ? "small" : "large",
                            strip_type: "top_strip",
                            text: o.TopText,
                            text_color: {
                                hex: o.TopTextColor
                            }
                        }
                    }), (o.BottomText || o.BottomBackgroundColor) && i.push({
                        strip: {
                            _metadata: {
                                uid: t
                            },
                            background_color: {
                                background_color: {
                                    hex: o.BottomBackgroundColor || "none"
                                },
                                background_gradient_color: {
                                    color1: {
                                        hex: o.BottomGradientColor1
                                    },
                                    color2: {
                                        hex: o.BottomGradientColor2
                                    }
                                },
                                background_gradient_style: o.BottomGradientStyle || "solid"
                            },
                            font_size: "small",
                            strip_type: "bottom_strip",
                            text: o.BottomText,
                            text_color: {
                                hex: o.BottomTextColor
                            }
                        }
                    });
                    let l = [];
                    return o.HeadlineText && l.push({
                        add_text_banner: {
                            banner_background_color: {
                                background_color: {
                                    hex: o.HeadlineBackgroundColor
                                },
                                background_gradient_color: {
                                    color1: {
                                        hex: o.HeadlineBackgroundColor
                                    },
                                    color2: {
                                        hex: o.HeadlineBackgroundColor
                                    }
                                },
                                background_gradient_style: "solid"
                            },
                            font_size: "large",
                            text: o.HeadlineText,
                            text_banner_type: "top_banner",
                            text_color: {
                                hex: o.HeadlineColor
                            }
                        }
                    }), o.CTAText && l.push({
                        add_text_banner: {
                            banner_background_color: {
                                background_color: {
                                    hex: o.CTAColor
                                },
                                background_gradient_color: {
                                    color1: {
                                        hex: o.CTAColor
                                    },
                                    color2: {
                                        hex: o.CTAColor
                                    }
                                },
                                background_gradient_style: "solid"
                            },
                            font_size: "large",
                            text: o.CTAText,
                            text_banner_type: "bottom_banner",
                            text_color: {
                                hex: o.CTATextColor
                            }
                        }
                    }), {
                        ad_type: r,
                        costco_url: {
                            external_site: "Yes" === e.template_params.ExternalSite,
                            url: n
                        },
                        enable_mobile_image_variation: !!o["Mobile Image URL"] || !!o.MobileImageURL,
                        image: [{
                            dimensions: {
                                item_driver: {
                                    height: 350,
                                    type: 0,
                                    width: 350
                                },
                                large_ad: {
                                    height: 425,
                                    type: 0,
                                    width: 1054
                                },
                                large_banner: {
                                    height: 358,
                                    type: 0,
                                    width: 1400
                                },
                                large_half_banner: {
                                    height: 571,
                                    type: 0,
                                    width: 696
                                }
                            }[r],
                            url: o["Image URL"] || o.DesktopImageURL || o["Mobile Image URL"] || o.MobileImageURL,
                            mimetype: "image/jpeg"
                        }],
                        image_alt_text: o.Alt,
                        mobile_image: [{
                            dimensions: {
                                item_driver: {
                                    height: 350,
                                    type: 0,
                                    width: 350
                                },
                                large_ad: {
                                    height: 144,
                                    type: 0,
                                    width: 358
                                },
                                large_banner: {
                                    height: 571,
                                    type: 0,
                                    width: 704
                                },
                                large_half_banner: {
                                    height: 239,
                                    type: 0,
                                    width: 358
                                }
                            }[r],
                            url: o["Mobile Image URL"] || o.MobileImageURL,
                            mimetype: "image/jpeg"
                        }],
                        mobile_image_alt_text: o.Alt,
                        top_and_bottom_strip: i,
                        top_and_bottom_text_banner: l,
                        uid: t,
                        use_mobile_image_alt_text: !!o.Alt
                    }
                },
                l = (e, t) => {
                    let n = [],
                        o = Object.keys(e.template_params).filter(e => e.startsWith("Category")).sort().pop(),
                        r = null == o ? void 0 : o.match(/^Category ([0-9]+)/);
                    if (!Array.isArray(r) || !r[1]) return [];
                    for (let o = 1; o <= +r[1]; o++) n.push({
                        background: !0,
                        categoryData: {
                            hrefUrl: t,
                            imageUrl: e.template_params["Category ".concat(o, " Image")],
                            title: e.template_params["Category ".concat(o, " Title")],
                            uid: e.placement_id
                        },
                        foreground: !0
                    });
                    return n
                },
                a = e => e === o.d8,
                c = e => {
                    let t = e ? e.categoryDisplayProperties : {},
                        n = e && e.visitorFavCategories ? e.visitorFavCategories.split(",") : [],
                        r = null == n ? void 0 : n.map(e => {
                            let n = t[e];
                            return n && {
                                hrefUrl: n.catURL,
                                imageUrl: n.tileImgSrc,
                                title: n.tileTitle
                            }
                        }),
                        i = r.length - r.length % o.Yw;
                    return r.filter(e => void 0 !== e).slice(0, Math.min(i, o.uj))
                }
        },
        57497: function(e, t, n) {
            "use strict";
            n.d(t, {
                CategorySet: function() {
                    return v
                }
            });
            var o = n(57437),
                r = n(2265),
                i = n(31691),
                l = n(4369),
                a = n(7302),
                c = n(3795);
            let d = () => {
                    let [e, t] = (0, r.useState)({
                        height: 0,
                        width: 0
                    }), n = (0, r.useRef)(null);
                    return (0, r.useEffect)(() => {
                        let e = n.current;
                        if (!e) return;
                        let o = () => {
                                e && t({
                                    height: e.offsetHeight,
                                    width: e.offsetWidth
                                })
                            },
                            r = new ResizeObserver(o);
                        return r.observe(e), o(), () => {
                            r.disconnect()
                        }
                    }, [n]), [n, e]
                },
                u = e => {
                    let t, {
                            enableTwoRowDisplay: n,
                            theme: o,
                            width: r
                        } = e,
                        i = r >= o.breakpoints.values.lg,
                        l = r >= o.breakpoints.values.md && r < o.breakpoints.values.lg,
                        a = i ? 5 : l ? 4 : 3;
                    return t = n ? "auto" : i ? "55px" : l ? "45px" : "20px", {
                        columns: a,
                        itemsPerSlide: n ? 1 : a,
                        itemsTwoRowMax: 2 * a,
                        navigationButtonTopOffset: t
                    }
                };
            var s = n(95656),
                p = n(16210);
            let x = (0, p.ZP)(s.default, {
                    shouldForwardProp: e => "columns" !== e
                })(e => {
                    let {
                        columns: t
                    } = e;
                    return {
                        display: "grid",
                        gridAutoRows: "auto",
                        gridTemplateColumns: "repeat(".concat(t, ", calc(100% / ").concat(t, "))")
                    }
                }),
                m = (0, p.ZP)(s.default, {
                    shouldForwardProp: e => "columns" !== e
                })(e => {
                    let {
                        columns: t
                    } = e;
                    return {
                        ["&:nth-of-type(n+".concat(t + 1, ")")]: {
                            marginBottom: 0
                        },
                        boxSizing: "border-box",
                        marginBottom: 3 === t ? a.oFH : a.ODt
                    }
                }),
                v = e => {
                    let {
                        ads: t,
                        enableAutoplay: n = !1,
                        enableTwoRowDisplay: s = !1,
                        randomizeItems: p,
                        titleId: v
                    } = e, h = (0, i.Z)(), [g, {
                        width: f
                    }] = d(), {
                        columns: y,
                        itemsPerSlide: b,
                        itemsTwoRowMax: _,
                        navigationButtonTopOffset: C
                    } = u({
                        enableTwoRowDisplay: s,
                        theme: h,
                        width: f
                    }), w = null == t ? void 0 : t.length, T = s && w > b, j = (0, r.useCallback)(() => T ? Array.from({
                        length: Math.ceil(w / _)
                    }, (e, n) => {
                        let r = n * _,
                            i = t.slice(r, r + _);
                        return (0, o.jsx)(x, {
                            columns: y,
                            children: i.map((e, t) => (0, o.jsx)(m, {
                                columns: y,
                                children: e
                            }, "tile-".concat(r + t)))
                        }, "group-".concat(r))
                    }) : t, [t, w, y, T, _]);
                    return t ? (0, o.jsx)(c.CostcoBox, {
                        ref: g,
                        children: (0, o.jsx)(l.Carousel, {
                            disableBottomControls: T ? w / 2 <= b : w <= b,
                            disableControls: T ? w / 2 <= b : w <= b,
                            isAutoplay: n,
                            items: j(),
                            itemsPerSlide: b,
                            labelledBy: v,
                            navigationButtonTopOffset: C,
                            navigationButtonsMobileDisplay: !0,
                            randomizeItems: p,
                            slideGap: a.ODt,
                            wrapAround: !0
                        })
                    }) : null
                }
        },
        58609: function(e, t, n) {
            "use strict";
            n.d(t, {
                MultiRow: function() {
                    return s
                }
            });
            var o = n(57437),
                r = n(16210),
                i = n(7302),
                l = n(3795);
            let a = e => e ? {
                    width: "calc(100% / ".concat(8, " - ").concat(i.oFH, " + ").concat(2, "px)")
                } : {
                    width: "calc(100% / ".concat(4, " - ").concat(i.oFH, " + ").concat(4, "px)")
                },
                c = e => e ? {
                    width: "calc(100% / ".concat(4, " - ").concat(i.oFH, " + ").concat(4, "px)")
                } : {
                    width: "calc(100% / ".concat(3, " - ").concat(i.oFH, " + ").concat(5.333333333333333, "px)")
                },
                d = (0, r.ZP)(l.CostcoBox, {
                    shouldForwardProp: e => "itemsPerRow" !== e
                })(e => {
                    let {
                        itemsPerRow: t,
                        theme: n
                    } = e, o = t > 6;
                    return {
                        display: "flex",
                        justifyContent: "center",
                        width: "calc(100% / ".concat(t, " - ").concat(i.oFH, " + ").concat(16 / t, "px)"),
                        [n.breakpoints.down("lg")]: { ...a(o)
                        },
                        [n.breakpoints.down("md")]: { ...c(o)
                        }
                    }
                }),
                u = (0, r.ZP)(l.CostcoBox)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        display: "flex",
                        alignItems: "flex-start",
                        alignSelf: "stretch",
                        flexWrap: "wrap",
                        rowGap: i.ODt,
                        columnGap: i.oFH,
                        [t.breakpoints.down("md")]: {
                            rowGap: i.oFH
                        }
                    }
                }),
                s = e => {
                    let {
                        ads: t,
                        maxTilesPerRow: n
                    } = e, r = n || 5;
                    return (0, o.jsx)(u, {
                        "data-testid": "costco-ad-set-multi-row",
                        children: t.map((e, t) => (0, o.jsx)(d, {
                            itemsPerRow: r,
                            children: e
                        }, t))
                    })
                }
        },
        97416: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return D
                }
            });
            var o, r = n(57437),
                i = n(18707),
                l = n(92144),
                a = n(7302),
                c = n(79715),
                d = n(15820),
                u = ((o = u || {}).STACKED = "stacked", o.COSTCO_INLINE = "costco-inline", o),
                s = n(3795),
                p = n(41530),
                x = n(21851);
            let m = {
                    height: {
                        lg: "144px",
                        md: "126px",
                        xs: "78px"
                    },
                    width: {
                        lg: "144px",
                        md: "126px",
                        xs: "78px"
                    }
                },
                v = {
                    borderRadius: "100px",
                    width: {
                        lg: "144px",
                        md: "126px",
                        xs: "78px"
                    }
                },
                h = {
                    "&:hover": {
                        borderRadius: a.xbU,
                        outline: "2px solid #003399",
                        outlineOffset: "1px",
                        textDecoration: "none"
                    },
                    alignItems: "center",
                    border: "2px solid transparent",
                    color: "#003399",
                    display: "flex",
                    justifyContent: "flex-start"
                },
                g = {
                    color: "#003399",
                    fontSize: {
                        md: a.hE8,
                        xs: a.F5N
                    },
                    fontWeight: a.cQB,
                    textAlign: "left"
                },
                f = {
                    containerStyles: {
                        cursor: "pointer",
                        margin: "auto"
                    },
                    imageStyles: {
                        margin: "auto",
                        maxWidth: "100%",
                        ...m
                    },
                    linkStyles: h,
                    titleStyles: g
                },
                y = "16.66%",
                b = "calc(50% - ".concat(a.oFH, ")"),
                _ = {
                    borderRadius: a.xbU,
                    flex: {
                        lg: "1 0 ".concat(y)
                    },
                    flexBasis: {
                        lg: y,
                        md: b,
                        xs: "100%"
                    }
                },
                C = {
                    containerStyles: _,
                    imageStyles: {
                        height: {
                            lg: "144px",
                            md: "126px",
                            xs: "78px"
                        },
                        margin: "auto",
                        maxWidth: "100%",
                        width: "auto"
                    },
                    linkStyles: {
                        alignItems: "center",
                        color: a.ekx,
                        display: "flex",
                        flexDirection: "column",
                        gap: {
                            lg: 0,
                            md: a.oFH
                        }
                    },
                    titleStyles: {
                        fontSize: {
                            md: a.hE8,
                            xs: a.F5N
                        },
                        margin: {
                            lg: 0,
                            xs: "auto 0"
                        },
                        marginTop: a.vdF,
                        paddingLeft: {
                            lg: 0,
                            xs: a.oFH
                        },
                        textAlign: "center",
                        wordBreak: "break-word"
                    }
                },
                w = (e, t) => {
                    if (6 !== (e = e.replace("#", "")).length) return e; {
                        let n = parseInt(e, 16),
                            o = (n >> 16) + t;
                        o > 255 && (o = 255), o < 0 && (o = 0);
                        let r = (255 & n) + t;
                        r > 255 && (r = 255), r < 0 && (r = 0);
                        let i = (n >> 8 & 255) + t;
                        return i > 255 && (i = 255), i < 0 && (i = 0), "#".concat((r | i << 8 | o << 16).toString(16))
                    }
                },
                T = {
                    alignItems: "center",
                    color: a.ekx,
                    display: "flex",
                    flexDirection: "column",
                    margin: "2px 0",
                    padding: "0 ".concat(a.oFH)
                },
                j = {
                    fontSize: {
                        md: a.hE8,
                        xs: a.F5N
                    },
                    fontStretch: "100%",
                    textAlign: "center",
                    wordBreak: "normal"
                },
                S = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a.gdN;
                    return {
                        bkgCircleStyles: {
                            "&:hover": {
                                backgroundColor: w(e, -21)
                            },
                            backgroundColor: e,
                            borderRadius: "50%",
                            display: "inline-block",
                            transition: "all 0.3s linear",
                            ...m
                        }
                    }
                },
                k = {
                    containerStyles: {
                        alignItems: "center",
                        display: "flex",
                        flex: "1 0 0",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: "100%"
                    },
                    imageStyles: {
                        "&:hover": {
                            transform: "translate(0px, -5px)"
                        },
                        "@media (prefers-reduced-motion)": {
                            transform: "none !important"
                        },
                        margin: "auto",
                        maxWidth: "100%",
                        transition: "all 0.3s linear",
                        ...m
                    },
                    linkStyles: T,
                    titleStyles: j
                },
                I = e => {
                    let t = {
                            "@media (prefers-reduced-motion)": {
                                transform: "none !important"
                            },
                            backgroundImage: "url(".concat(e, ")"),
                            backgroundSize: "cover",
                            borderRadius: "100px",
                            display: "block",
                            margin: "auto",
                            transition: "all 0.3s linear",
                            ...m
                        },
                        n = {
                            fontSize: {
                                md: a.hE8,
                                xs: a.F5N
                            },
                            fontStretch: "100%",
                            textAlign: "center",
                            wordBreak: "normal"
                        };
                    return { ...k,
                        imageStyles: t,
                        titleStyles: n
                    }
                },
                B = e => {
                    let {
                        variant: t,
                        foreground: n,
                        background: o,
                        categoryData: r
                    } = e;
                    return t === u.COSTCO_INLINE ? o ? { ...f,
                        ...S(null == r ? void 0 : r.backgroundColor)
                    } : { ...f
                    } : n && !o ? { ...C
                    } : n && o ? { ...k,
                        ...S(null == r ? void 0 : r.backgroundColor)
                    } : { ...I(r.imageUrl)
                    }
                },
                P = e => ({ ...e === u.STACKED ? {
                        direction: "column",
                        sxPrimary: {
                            borderRadius: "100%",
                            ...m
                        }
                    } : {
                        direction: "row",
                        sxPrimary: {
                            borderRadius: "8px",
                            ...m
                        }
                    },
                    sxSecondary: { ...v
                    }
                }),
                A = e => {
                    let {
                        variant: t,
                        imageSx: n = {}
                    } = e, {
                        direction: o,
                        sxPrimary: i,
                        sxSecondary: l = {}
                    } = P(t);
                    return (0, r.jsxs)(p.default, {
                        alignItems: "center",
                        direction: o,
                        justifyContent: "center",
                        spacing: a.vdF,
                        children: [(0, r.jsx)(x.Skeleton, {
                            sx: i
                        }), (0, r.jsx)(x.Skeleton, {
                            sx: { ...l,
                                ...n
                            }
                        })]
                    })
                },
                O = e => {
                    let {
                        altText: t,
                        categoryTileStyles: n,
                        categoryData: o,
                        variant: i,
                        foreground: l,
                        background: a,
                        imageContainerSx: c = {},
                        imageBackgroundContainerSx: d = {},
                        imageSx: p
                    } = e, {
                        imageUrl: x
                    } = o, {
                        imageStyles: m = {},
                        bkgCircleStyles: v
                    } = n;
                    return i === u.STACKED && !l && a ? (0, r.jsx)(s.CostcoBox, {
                        sx: m
                    }) : (0, r.jsx)(s.CostcoBox, {
                        sx: c,
                        children: (0, r.jsx)(s.CostcoBox, {
                            sx: { ...v,
                                ...d
                            },
                            component: "span",
                            children: (0, r.jsx)(s.CostcoBox, {
                                sx: {
                                    objectFit: "contain",
                                    ...p || m
                                },
                                alt: t,
                                component: "img",
                                loading: "lazy",
                                src: x
                            })
                        })
                    })
                },
                D = e => {
                    let {
                        categoryData: t,
                        variant: n = u.STACKED,
                        isLoading: o,
                        hasCategoryTitle: p = !0,
                        foreground: x = !0,
                        background: m = !0,
                        dataTestId: v,
                        imageSx: h = {},
                        linkSx: g = {},
                        titleSx: f = {}
                    } = e, {
                        hrefUrl: y,
                        imageUrl: b,
                        subTitle: _,
                        title: C
                    } = t || {};
                    if (!t || !b || !y || !x && !m) return console.error(d.Y), null;
                    if (o) return (0, r.jsx)(A, {
                        imageSx: h,
                        variant: n
                    });
                    let w = p ? "" : C,
                        T = B(e),
                        {
                            containerStyles: j,
                            linkStyles: S = {},
                            titleStyles: k = {}
                        } = T;
                    return (0, r.jsx)(s.CostcoBox, {
                        "data-testid": v,
                        sx: j,
                        children: (0, r.jsx)(c.Analytics, {
                            analyticData: {
                                adItem: {
                                    link: y,
                                    title: C
                                }
                            },
                            children: (0, r.jsxs)(i.Link, {
                                dataPrivate: null == t ? void 0 : t.disableThirdPartyTracking,
                                href: y,
                                sx: { ...S,
                                    ...g
                                },
                                underline: "hover",
                                variant: "t5",
                                children: [(0, r.jsx)(O, {
                                    altText: w,
                                    categoryTileStyles: T,
                                    ...e
                                }), (0, r.jsxs)(s.CostcoBox, {
                                    sx: {
                                        alignItems: "center",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        marginTop: a.iPk
                                    },
                                    children: [p && (0, r.jsx)(l.Text, {
                                        sx: { ...k,
                                            ...f
                                        },
                                        bold: !0,
                                        variant: "t6",
                                        children: C
                                    }), _ && (0, r.jsx)(l.Text, {
                                        sx: { ...k,
                                            ...f
                                        },
                                        variant: "t6",
                                        children: _
                                    })]
                                })]
                            })
                        })
                    })
                };
            D.displayName = d.l
        },
        15820: function(e, t, n) {
            "use strict";
            n.d(t, {
                Y: function() {
                    return r
                },
                l: function() {
                    return o
                }
            });
            let o = "CategoryTile",
                r = "".concat(o, "-error: Missing required parameter")
        },
        36034: function(e, t, n) {
            "use strict";
            n.d(t, {
                Wq: function() {
                    return l
                },
                X0: function() {
                    return r
                },
                fg: function() {
                    return i
                },
                lP: function() {
                    return o
                }
            });
            let o = "FeatureHighlightCard",
                r = "callout",
                i = "features",
                l = "skeleton"
        },
        11451: function(e, t, n) {
            "use strict";
            n.d(t, {
                X: function() {
                    return p
                },
                f: function() {
                    return x
                }
            });
            var o = n(57437),
                r = n(86769),
                i = n(30970),
                l = n(21851),
                a = n(79715),
                c = n(36034),
                d = n(5334),
                u = n(52323),
                s = n(58376);

            function p(e) {
                let {
                    data: t,
                    isLoading: n = !1
                } = e;
                return n ? (0, o.jsx)(l.Skeleton, {
                    "data-testid": c.Wq,
                    height: 460,
                    variant: "rectangular",
                    width: s.MAX_TILE_WIDTH
                }) : (null == t ? void 0 : t.hide_feature_icons) && (null == t ? void 0 : t.feature_caption) ? (0, o.jsx)(d.CalloutCard, {
                    data: t
                }) : (0, o.jsx)(u.FeaturesCard, {
                    data: t
                })
            }
            async function x(e) {
                var t, n;
                let {
                    entryId: l,
                    locale: c,
                    enableLivePreview: d
                } = e, u = await (0, i.hX)(r.zc.FeatureHighlightCard, l, c, i.Az, d);
                return u ? (0, o.jsx)(a.Analytics, {
                    analyticData: {
                        adItem: {
                            style: "feature highlight card",
                            title: u.feature_title,
                            type: "category",
                            url: null == (n = null == (t = u.button_group) ? void 0 : t.button_with_costco_url) ? void 0 : n.url
                        }
                    },
                    children: (0, o.jsx)(p, {
                        data: u
                    }, l)
                }) : null
            }
            p.displayName = c.lP
        },
        58376: function(e, t, n) {
            "use strict";
            n.d(t, {
                Al: function() {
                    return p
                },
                B2: function() {
                    return a
                },
                En: function() {
                    return d
                },
                Jc: function() {
                    return T
                },
                MAX_TILE_WIDTH: function() {
                    return u
                },
                MY: function() {
                    return _
                },
                Ns: function() {
                    return f
                },
                RQ: function() {
                    return b
                },
                Sz: function() {
                    return h
                },
                Uo: function() {
                    return C
                },
                eu: function() {
                    return m
                },
                fq: function() {
                    return g
                },
                iI: function() {
                    return c
                },
                jO: function() {
                    return x
                },
                kn: function() {
                    return w
                },
                mH: function() {
                    return y
                },
                n5: function() {
                    return v
                }
            });
            var o = n(95656),
                r = n(97312),
                i = n(16210),
                l = n(7302);
            let a = 77,
                c = "#d32029",
                d = l.W3Q,
                u = 448,
                s = "@media (max-width: ".concat(l.yKw, ")"),
                p = (0, i.ZP)(o.default)({
                    width: "100%"
                }),
                x = (0, i.ZP)(o.default)({
                    alignItems: "center",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    display: "flex",
                    height: 224,
                    justifyContent: "center"
                }),
                m = (0, i.ZP)(o.default)({
                    alignContent: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "".concat(l.ODt, " ").concat(l.oFH),
                    textAlign: "center"
                }),
                v = (0, i.ZP)(o.default)({
                    alignItems: "center",
                    backgroundColor: l.W3Q,
                    borderRadius: 60,
                    display: "flex",
                    height: 120,
                    justifyContent: "center",
                    width: 120
                }),
                h = (0, i.ZP)(r.Z)({
                    "&:focus": {
                        outline: "2px solid -webkit-focus-ring-color",
                        outlineOffset: 2
                    },
                    "&:hover": {
                        "& .overlay-icon": {
                            "@media (prefers-reduced-motion)": {
                                transform: "none"
                            },
                            transform: "scale(1.2)",
                            transition: "transform .2s linear"
                        },
                        "& img": {
                            transform: "translateY(-5px)"
                        },
                        cursor: "pointer",
                        outline: "none",
                        textDecoration: "none"
                    },
                    "@media (prefers-reduced-motion)": {
                        transform: "none"
                    },
                    borderRadius: 10,
                    display: "block",
                    fontFamily: '"GothamMedium", "Helvetica Neue", "Helvetica Neue LT Pro", Helvetica, arial, sans-serif',
                    height: "100%",
                    overflow: "hidden",
                    textDecoration: "none"
                }),
                g = (0, i.ZP)(o.default)({
                    "& div": {
                        textAlign: "left"
                    },
                    "& h2": {
                        fontSize: "54px !important"
                    },
                    "@media (prefers-reduced-motion)": {
                        transform: "none"
                    },
                    borderRadius: 10,
                    boxShadow: "-6px 6px 0 ".concat(l.Os0),
                    display: "block",
                    fontFamily: '"GothamMedium", "Helvetica Neue", "Helvetica Neue LT Pro", Helvetica, arial, sans-serif',
                    height: "100%",
                    overflow: "hidden",
                    padding: l.oFH,
                    textDecoration: "none"
                }),
                f = (0, i.ZP)(h)({
                    "& div": {
                        textAlign: "left"
                    },
                    "& h2": {
                        fontSize: "54px !important"
                    },
                    boxShadow: "-6px 6px 0 ".concat(l.Os0),
                    padding: l.oFH
                }),
                y = (0, i.ZP)(o.default)({
                    "& h2": {
                        fontSize: l.jJ_,
                        fontWeight: l.cQB,
                        lineHeight: l.Qoq,
                        margin: 0
                    }
                }),
                b = (0, i.ZP)(o.default)({
                    [s]: {
                        alignItems: "center",
                        flexDirection: "column",
                        gap: l.oFH
                    },
                    alignItems: "flex-start",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    padding: "".concat(l.ODt, " ").concat(l.oFH)
                }),
                _ = (0, i.ZP)(o.default)({
                    [s]: {
                        ".feature-text": {
                            textAlign: "left",
                            width: "100%"
                        },
                        div: {
                            flex: "1",
                            width: "50px"
                        },
                        flexDirection: "row",
                        gap: l.oFH,
                        width: "80%"
                    },
                    alignContent: "center",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    fontWeight: l.cQB,
                    gap: l.M7t,
                    justifyContent: "center",
                    textAlign: "center",
                    width: "30%"
                }),
                C = (0, i.ZP)(o.default)({
                    "@media (prefers-reduced-motion)": {
                        transform: "none !important"
                    },
                    filter: "drop-shadow(0 -20px 20px rgba(0, 0, 0, 0.2))",
                    height: 50,
                    transitionDuration: ".1s",
                    transitionProperty: "transform",
                    width: 50
                }),
                w = (0, i.ZP)(o.default)({
                    padding: 5
                }),
                T = (0, i.ZP)(o.default)({
                    "&:hover": {
                        background: "".concat(l.W3Q, " !important"),
                        color: "".concat(l.s4A, " !important"),
                        transition: ".25s ease-in-out"
                    },
                    borderRadius: 3,
                    display: "inline-block",
                    fontSize: "1rem",
                    fontWeight: 400,
                    padding: "6px ".concat(l.oFH),
                    width: "auto"
                })
        },
        5334: function(e, t, n) {
            "use strict";
            n.d(t, {
                CalloutCard: function() {
                    return u
                }
            });
            var o = n(57437),
                r = n(68139),
                i = n(92144),
                l = n(42911),
                a = n(36034),
                c = n(58376);
            let d = e => {
                var t, n;
                let {
                    data: r
                } = e;
                return (0, o.jsxs)(c.eu, {
                    style: {
                        height: "100%"
                    },
                    children: [(0, o.jsx)(c.mH, {
                        children: (0, o.jsx)(i.Text, {
                            sx: {
                                color: null == (n = null == (t = r.card_styling) ? void 0 : t.card_font_color) ? void 0 : n.hex
                            },
                            component: "h2",
                            children: r.feature_title
                        })
                    }), (0, o.jsx)(l.$, {
                        markdown: r.feature_caption,
                        overrides: {
                            code: i.Text,
                            pre: i.Text
                        }
                    })]
                })
            };

            function u(e) {
                var t, n, i, l, u, s;
                let {
                    data: p
                } = e, {
                    trackEvent: x
                } = (0, r.rS)(), m = p.button_group, v = null == (t = null == m ? void 0 : m.button_with_costco_url) ? void 0 : t.url, h = (null == (i = null == (n = p.card_styling) ? void 0 : n.card_background_color) ? void 0 : i.hex) || c.iI, g = (null == (u = null == (l = p.card_styling) ? void 0 : l.card_font_color) ? void 0 : u.hex) || c.En, f = null == (s = null == p ? void 0 : p.privacy_toggle) ? void 0 : s.disable_third_party_tracking;
                return (0, o.jsx)(c.Al, {
                    "data-testid": a.X0,
                    children: v ? (0, o.jsx)(c.Ns, {
                        sx: {
                            background: h,
                            color: "".concat(g, " !important")
                        },
                        href: v,
                        onClick: () => {
                            x()
                        },
                        ...f && {
                            "data-private": ""
                        },
                        children: (0, o.jsx)(d, {
                            data: p
                        })
                    }) : (0, o.jsx)(c.fq, {
                        sx: {
                            background: h,
                            color: "".concat(g, " !important")
                        },
                        ...f && {
                            "data-private": ""
                        },
                        children: (0, o.jsx)(d, {
                            data: p
                        })
                    })
                })
            }
        },
        52323: function(e, t, n) {
            "use strict";
            n.d(t, {
                FeaturesCard: function() {
                    return s
                }
            });
            var o = n(57437),
                r = n(68139),
                i = n(92144),
                l = n(3795),
                a = n(36034),
                c = n(58376);
            let d = e => {
                    var t, n, r, i, a;
                    let {
                        data: d
                    } = e;
                    if (!d) return null;
                    let u = null == (n = null == (t = d.image_group) ? void 0 : t.image) ? void 0 : n[0],
                        s = null == (i = null == (r = d.image_group) ? void 0 : r.overlay_icon) ? void 0 : i[0];
                    return (0, o.jsx)(c.jO, {
                        style: {
                            backgroundImage: "url(".concat(null == u ? void 0 : u.url, ")")
                        },
                        children: (0, o.jsx)(c.n5, {
                            children: (0, o.jsx)(l.CostcoBox, {
                                alt: (null == (a = d.image_group) ? void 0 : a.feature_image_alt_text) || "",
                                className: "overlay-icon",
                                component: "img",
                                loading: "lazy",
                                src: null == s ? void 0 : s.url,
                                sx: {
                                    width: c.B2
                                }
                            })
                        })
                    })
                },
                u = e => {
                    var t, n, r, i, a;
                    let {
                        iconGroup: d,
                        index: u
                    } = e;
                    return (0, o.jsxs)(c.MY, {
                        children: [(0, o.jsx)(c.Uo, {
                            sx: {
                                transitionDelay: "0.".concat(u + 1, "s")
                            },
                            alt: "",
                            component: "img",
                            loading: "lazy",
                            src: null == (r = null == (n = null == (t = d.feature_icon_block) ? void 0 : t.icon_image) ? void 0 : n[0]) ? void 0 : r.url
                        }), (0, o.jsx)(l.CostcoBox, {
                            className: "feature-text",
                            children: null == (a = null == (i = d.feature_icon_block) ? void 0 : i.text_and_costco_url) ? void 0 : a.title
                        })]
                    })
                };

            function s(e) {
                var t, n, l, s, p, x, m, v, h, g, f;
                let {
                    data: y
                } = e, {
                    trackEvent: b
                } = (0, r.rS)();
                if (!y) return null;
                let {
                    button_group: _,
                    feature_icon_group: C
                } = y, w = null == (t = null == y ? void 0 : y.privacy_toggle) ? void 0 : t.disable_third_party_tracking;
                return (0, o.jsx)(c.Al, {
                    "data-testid": a.fg,
                    children: (0, o.jsxs)(c.Sz, {
                        sx: {
                            background: null == (l = null == (n = y.card_styling) ? void 0 : n.card_background_color) ? void 0 : l.hex,
                            color: "".concat(null == (p = null == (s = y.card_styling) ? void 0 : s.card_font_color) ? void 0 : p.hex, " !important")
                        },
                        href: null == (x = null == _ ? void 0 : _.button_with_costco_url) ? void 0 : x.url,
                        onClick: () => {
                            b()
                        },
                        ...w && {
                            "data-private": ""
                        },
                        children: [(0, o.jsx)(d, {
                            data: y
                        }), (0, o.jsxs)(c.eu, {
                            children: [(0, o.jsx)(c.mH, {
                                children: (0, o.jsx)(i.Text, {
                                    sx: {
                                        color: null == (v = null == (m = y.card_styling) ? void 0 : m.card_font_color) ? void 0 : v.hex
                                    },
                                    component: "h2",
                                    children: y.feature_title
                                })
                            }), (0, o.jsx)(c.RQ, {
                                children: null == C ? void 0 : C.map((e, t) => (0, o.jsx)(u, {
                                    iconGroup: e,
                                    index: t
                                }, t))
                            }), (0, o.jsx)(c.kn, {
                                children: (0, o.jsx)(c.Jc, {
                                    sx: {
                                        background: null == (h = null == _ ? void 0 : _.button_background_color) ? void 0 : h.hex,
                                        color: null == (g = null == _ ? void 0 : _.button_text_color) ? void 0 : g.hex
                                    },
                                    children: null == (f = null == _ ? void 0 : _.button_with_costco_url) ? void 0 : f.title
                                })
                            })]
                        })]
                    })
                })
            }
        },
        11782: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return c
                }
            });
            var o = n(57437),
                r = n(92144),
                i = n(7302),
                l = n(3795),
                a = n(31630);

            function c(e) {
                let {
                    data: t,
                    heading: n,
                    isAdSetCostco: c = !1,
                    type: d = "category",
                    uniqueId: u
                } = e;
                if (!t) return null;
                let s = t.slice(0, 4);
                return "category" === d ? c ? (0, o.jsx)(l.CostcoBox, {
                    sx: {
                        alignItems: "flex-start",
                        display: "flex",
                        flex: 1,
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: i.oFH,
                        justifyContent: "center",
                        marginBottom: i.vdF,
                        width: "100%"
                    },
                    children: s.map((e, t) => (0, o.jsx)(l.CostcoBox, {
                        sx: {
                            flex: 1,
                            height: "calc(50% - (".concat(i.oFH, " / 2))"),
                            minWidth: "calc(50% - (".concat(i.oFH, " / 2))")
                        },
                        children: e
                    }, "".concat(u, "_").concat(t)))
                }) : (0, o.jsxs)(l.CostcoBox, {
                    children: [(0, o.jsx)(r.Text, {
                        as: "h2",
                        sx: a.CategoryHeadingStyles,
                        children: n
                    }), (0, o.jsx)(a.CategoryContent, {
                        isAdSetCostco: c,
                        children: s
                    })]
                }, u) : (0, o.jsx)(l.CostcoBox, {
                    sx: a.BannerContainerStyles,
                    children: (0, o.jsx)(l.CostcoBox, {
                        sx: a.BannerContentStyles,
                        children: s
                    })
                }, u)
            }
        },
        31630: function(e, t, n) {
            "use strict";
            n.d(t, {
                BannerContainerStyles: function() {
                    return l
                },
                BannerContentStyles: function() {
                    return c
                },
                CategoryContent: function() {
                    return a
                },
                CategoryHeadingStyles: function() {
                    return d
                }
            });
            var o = n(16210),
                r = n(7302),
                i = n(3795);
            r.W3Q;
            let l = {
                borderRadius: "10px",
                lg: {
                    width: "25%"
                },
                md: {
                    width: "50%"
                },
                overflow: "hidden",
                sm: {
                    width: "100%"
                }
            };
            r.AhM, "solid ".concat(r.YFe, " ").concat(r.gdN), r.JSR;
            let a = (0, o.ZP)(i.CostcoBox, {
                    shouldForwardProp: e => "isAdSetCostco" !== e
                })(e => {
                    let {
                        isAdSetCostco: t
                    } = e;
                    return t ? {
                        alignItems: "center",
                        columnGap: r.vdF,
                        display: "grid",
                        gridAutoFlow: "row",
                        gridTemplateColumns: "repeat(2, auto)",
                        padding: "0px ".concat(r.vdF, " 0px ").concat(r.vdF),
                        rowGap: r.vdF
                    } : {
                        "> div": {
                            flex: "50%",
                            padding: "10px"
                        },
                        border: "solid ".concat(r.YFe, " ").concat(r.gdN),
                        color: r.JSR,
                        display: "flex",
                        flexWrap: "wrap",
                        overflow: "hidden",
                        padding: "0 5px 5px 5px",
                        textAlign: "center"
                    }
                }),
                c = {
                    "> div": {
                        flex: {
                            md: "calc(50% - ".concat(r.ODt, ")"),
                            xs: "calc(50% - ".concat(r.oFH, ")")
                        }
                    },
                    display: "flex",
                    flexWrap: "wrap",
                    gap: {
                        md: r.ODt,
                        xs: r.oFH
                    },
                    overflow: "hidden"
                },
                d = {
                    backgroundColor: "#eee",
                    fontSize: r.jJ_,
                    fontWeight: r.cQB,
                    lineHeight: 1.167,
                    marginTop: "0px",
                    minHeight: "50px",
                    padding: "10px",
                    textAlign: "center"
                }
        },
        81644: function(e, t, n) {
            "use strict";
            n.d(t, {
                o: function() {
                    return d
                }
            });
            var o = n(57437),
                r = n(7302),
                i = n(42399),
                l = n(11782),
                a = n(3795),
                c = n(40085);
            let d = e => {
                let {
                    bodyBackgroundColor: t,
                    categoryTiles: n,
                    ignoreBackground: d,
                    titleProps: u
                } = e;
                return (0, o.jsxs)(c.Container, {
                    bodyBackgroundColor: t,
                    ignoreBackground: d,
                    children: [u && (0, o.jsx)(i.AdSetTitle, { ...u,
                        titleGridSx: {
                            display: "flex",
                            justifyContent: "center"
                        },
                        titleLinkSx: {
                            lineHeight: "20px",
                            marginBottom: 0
                        },
                        titleSx: {
                            fontSize: "".concat(r.jJ_)
                        },
                        isAdSetCostco: !0
                    }), (0, o.jsx)(a.CostcoBox, {
                        sx: {
                            alignItems: "center",
                            display: "flex",
                            flex: 1,
                            flexDirection: "column",
                            justifyContent: "center",
                            minWidth: "100%"
                        },
                        children: (0, o.jsx)(l.$, {
                            data: n,
                            isAdSetCostco: !0,
                            type: "category"
                        })
                    })]
                })
            }
        },
        40085: function(e, t, n) {
            "use strict";
            n.d(t, {
                Container: function() {
                    return l
                }
            });
            var o = n(16210),
                r = n(7302),
                i = n(3795);
            let l = (0, o.ZP)(i.CostcoBox, {
                shouldForwardProp: e => "bodyBackgroundColor" !== e && "ignoreBackground" !== e
            })(e => {
                let {
                    bodyBackgroundColor: t,
                    ignoreBackground: n
                } = e, o = {
                    "@media (max-width:520px)": {
                        width: "100%"
                    },
                    "@media (max-width:1024px) and (min-width:520px)": {
                        width: "calc((min(100vw, 1023px) / 2) - 44px)"
                    },
                    "@media (min-width:1024px)": {
                        width: "calc((min(100vw, 1400px) / 4) - 66px)"
                    },
                    display: "flex",
                    flexDirection: "column",
                    gap: r.oFH,
                    minHeight: "100%",
                    minWidth: "100%",
                    paddingBottom: r.oFH,
                    width: "100%"
                };
                return n || (o = { ...o,
                    backgroundColor: t || r.AhM,
                    border: "solid ".concat(r.YFe, " ").concat(r.gdN),
                    borderRadius: "10px"
                }), o
            })
        },
        96724: function(e, t, n) {
            "use strict";
            n.d(t, {
                J: function() {
                    return r
                }
            });
            var o = n(7302);
            let r = {
                imageContainerSx: {
                    display: "flex",
                    justifyContent: "center",
                    width: "80%",
                    span: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        aspectRatio: "1/1",
                        width: {
                            lg: "80%",
                            md: "126px",
                            xs: "78px"
                        },
                        height: {
                            lg: "80%",
                            md: "126px",
                            xs: "78px"
                        }
                    }
                },
                imageSx: {
                    width: "80%"
                },
                linkSx: {
                    minWidth: "100%",
                    padding: o.M7t
                },
                titleSx: {
                    fontSize: "".concat(o.YzP)
                }
            }
        },
        65269: function(e, t, n) {
            "use strict";
            n.d(t, {
                $F: function() {
                    return C
                },
                Bc: function() {
                    return S
                },
                Ju: function() {
                    return u
                },
                K2: function() {
                    return m
                },
                Kd: function() {
                    return s
                },
                Q9: function() {
                    return T
                },
                QJ: function() {
                    return r
                },
                QU: function() {
                    return b
                },
                WA: function() {
                    return g
                },
                Wq: function() {
                    return x
                },
                ZJ: function() {
                    return _
                },
                _J: function() {
                    return w
                },
                eT: function() {
                    return y
                },
                fE: function() {
                    return j
                },
                hW: function() {
                    return c
                },
                lP: function() {
                    return l
                },
                n2: function() {
                    return p
                },
                nR: function() {
                    return i
                },
                pb: function() {
                    return o
                },
                qs: function() {
                    return v
                },
                rH: function() {
                    return d
                },
                xE: function() {
                    return a
                },
                yk: function() {
                    return h
                },
                z2: function() {
                    return f
                }
            });
            let o = "arialabelclear",
                r = "arialabelinput",
                i = "arialabelsearch",
                l = "SearchBarUI",
                a = 500,
                c = "errortext",
                d = "typeahead_autosuggest_api_service_config",
                u = "keyword_search_api_service_config",
                s = "PHARMACY",
                p = "TRAVEL",
                x = "grs_provider_feature_toggle",
                m = "grs_beta_release_enabled",
                v = "fallbackVisitorId",
                h = "arialabellistbox",
                g = "searchfielddescription",
                f = "pharmacyImage",
                y = "placeholdertext",
                b = "refineParameterSuffix",
                _ = "search_bar",
                C = "searchURL",
                w = "suggestions-list",
                T = "typeahead-search-field-description",
                j = "typeaheadServiceConfigKey",
                S = "keyword"
        },
        25465: function(e, t, n) {
            "use strict";
            n.d(t, {
                ZA: function() {
                    return g
                },
                ZF: function() {
                    return l
                },
                _z: function() {
                    return v
                },
                cB: function() {
                    return x
                },
                fm: function() {
                    return m
                },
                ho: function() {
                    return i
                }
            });
            var o = n(40538),
                r = n(65269);
            let i = e => {
                    let t = e.split("-");
                    return "".concat(t[0].toLowerCase(), "-").concat(t[1].toUpperCase())
                },
                l = e => {
                    var t;
                    return [e.distributionCenters, e.groceryCenters, null == (t = null == e ? void 0 : e.nearestWarehouse) ? void 0 : t.catalog].filter(e => Array.isArray(e) ? e.length > 0 : e).map(e => Array.isArray(e) ? e.join(",") : e).join(",")
                },
                a = e => (e = e.toLowerCase()).replace(/(^|\s)[a-z]/g, function(e) {
                    return e.toUpperCase()
                }),
                c = e => !!e.leads_to_fsa_chdi || !!e.item_chdi_eligible || !!e.item_fsa_eligible,
                d = (e, t) => t && ("placeholder" === e.FullImage || !e.FullImage) && "Product" === e.type && (e.pharmacy_drug_id || e.productType === r.Kd) ? t : e.FullImage,
                u = (e, t) => ({ ...e,
                    FullImage: d(e, t),
                    dataBiPrivate: c(e),
                    group: "productSection"
                }),
                s = e => {
                    let t = {};
                    return e.map(e => {
                        if (!e.type) return { ...e
                        };
                        let n = t[e.type] || 0;
                        return t[e.type] = n + 1, { ...e,
                            automationId: "suggestion-".concat(e.type).concat(0 !== n ? n : "")
                        }
                    })
                },
                p = e => {
                    let {
                        searchTermSection: t,
                        productSection: n,
                        warehouseSection: o,
                        maxTotalSuggestions: r,
                        maxSearchTermSuggestions: i
                    } = e;
                    return s(t.slice(0, i).concat(n, o)).slice(0, r).map((e, t) => ({ ...e,
                        index: t
                    }))
                },
                x = e => {
                    let {
                        pharmacyPlaceholderImage: t,
                        maxSearchTermSuggestions: n,
                        maxTotalSuggestions: o,
                        suggestions: r
                    } = e, i = [], l = [], d = [];
                    return null == r || r.forEach(e => {
                        if (void 0 !== e.label) switch (e.type.toLowerCase()) {
                            case "popularsearch":
                            case "shadowdimension":
                            case "category":
                            case "brand":
                                i.push({ ...e,
                                    dataBiPrivate: c(e),
                                    group: "searchTermSection"
                                });
                                break;
                            case "product":
                                l.push(u(e, t));
                                break;
                            case "warehouse":
                                var n;
                                e.index = d.length, e.WarehouseAddress = a(null !== (n = e.WarehouseAddress) && void 0 !== n ? n : ""), d.push({ ...e,
                                    dataBiPrivate: c(e),
                                    group: "warehouseSection",
                                    label: "".concat(e.label, " ").concat(e.type, " ").concat(e.WarehouseAddress)
                                })
                        }
                    }), p({
                        maxSearchTermSuggestions: n,
                        maxTotalSuggestions: o,
                        productSection: l,
                        searchTermSection: i,
                        warehouseSection: d
                    })
                },
                m = (e, t) => "searchTermSection" !== e && ("productSection" === e ? t.some(e => "searchTermSection" === e.group) : "warehouseSection" === e && t.some(e => "searchTermSection" === e.group || "productSection" === e.group)),
                v = (e, t) => e.find(e => e.label === t),
                h = e => e.replace(/\s+/g, "-").toLowerCase(),
                g = e => {
                    let {
                        categoryUrlPath: t,
                        option: n,
                        publishedCategories: i,
                        refineParameterSuffix: l = "",
                        searchUrl: a,
                        value: c
                    } = e, d = "".concat(a).concat(encodeURIComponent(c));
                    if (!n.type) return d;
                    switch (n.type.toLowerCase()) {
                        case "popularsearch":
                        default:
                            return d;
                        case "category":
                            if (n.baseUrl) return (0, o.iS)(t, n.baseUrl, i);
                            return d;
                        case "warehouse":
                            if (n.baseUrl) return n.baseUrl;
                            return d;
                        case "shadowdimension":
                            if (n.baseUrl && n.Brand_attr) return "".concat(n.baseUrl, "?refine=||Brand_attr-").concat(encodeURIComponent(n.Brand_attr)).concat(l);
                            return d;
                        case "brand":
                            if (n.Brand_attr) return "".concat(a).concat(encodeURIComponent(c), "&refine=||Brand_attr-").concat(encodeURIComponent(n.Brand_attr)).concat(l);
                            return d;
                        case "product":
                            if (n.travel_pageURL) return n.travel_pageURL;
                            if (n.productType === r.n2 && n.baseUrl) return n.baseUrl; {
                                if (n.pharmacy_drug_id && n.term) return "/cmpps?drugIdentifierParam=".concat(n.pharmacy_drug_id, "&drugNameParam=").concat(encodeURIComponent(n.term));
                                if (n.productType === r.Kd && n.baseUrl) return n.baseUrl;
                                if (!n.group_id || !n.term) return d;
                                let e = n.term,
                                    t = e ? h(e) : "";
                                return "/".concat(t, ".product.").concat(n.group_id, ".html")
                            }
                    }
                }
        },
        50903: function(e, t, n) {
            "use strict";
            n.d(t, {
                N: function() {
                    return i
                },
                b: function() {
                    return l
                }
            });
            var o = n(2265),
                r = n(59011);
            let i = () => "undefined" != typeof adobe && adobe.target && "function" == typeof adobe.target.getOffer,
                l = (e, t, n) => {
                    let [l, a] = (0, o.useState)({
                        products: []
                    }), [c, d] = (0, o.useState)({
                        categoryDisplayProperties: {},
                        contentType: "",
                        visitorFavCategories: ""
                    }), {
                        item_type: u,
                        third_party_curation: s
                    } = e, p = e => {
                        if (i()) {
                            let o = e.adobe_target_extension.params;
                            t && (o.searchTerm = encodeURIComponent(t)), n && n.category_id && (o["entity.categoryId"] = n.category_id), adobe.target.getOffer({
                                error: () => {
                                    console.error("Error while fetching Adobe Ad set for mbox: ".concat(e.adobe_target_extension.mbox))
                                },
                                mbox: e.adobe_target_extension.mbox,
                                params: o,
                                success: e => {
                                    Array.isArray(e) && e.length > 0 && (e[0].content || e[0].content.length > 0) && (u === r.iv && "string" == typeof e[0].content ? a(JSON.parse(e[0].content)) : d(e[0].content[0]))
                                }
                            })
                        } else console.error("Adobe target script failed to load on page")
                    };
                    return (0, o.useEffect)(() => {
                        p(s)
                    }, [s]), {
                        adobeCategoryResponse: c,
                        adobeProductsResponse: l,
                        fetchAdobeOffers: p
                    }
                }
        },
        30835: function(e, t, n) {
            "use strict";
            n.d(t, {
                _: function() {
                    return i
                }
            });
            var o = n(30518);
            let r = function(e, t, n, o) {
                var r;
                let i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                    l = null !== (r = null == i ? void 0 : i.includeEcoFeeData) && void 0 !== r && r,
                    a = "",
                    c = "";
                return l && (a = "linkFeePrices {\n                                key\n                                fees {\n                                    feeCategory\n                                    includeInPrice\n                                    excludeFromPrice\n                                }\n                            }", c = "\n            linkFeeEligible\n            ".concat(a, "\n        ")), {
                    query: "\n            query {\n                products(\n                    itemNumbers: ".concat(JSON.stringify(e), ',\n                    clientId: "').concat(n, '",\n                    locale: ').concat(JSON.stringify(o), ',\n                    warehouseNumber: "').concat(t, '"\n                ) {\n                    catalogData {\n                        itemNumber\n                        itemId\n                        published\n                        locale\n                        buyable\n                        programTypes\n                        priceData {\n                            price\n                            listPrice\n                        }\n                        attributes {\n                            key\n                            value\n                            type\n                            pills\n                            identifier\n                        }\n                        description {\n                            shortDescription\n                            longDescription\n                            marketingContent\n                            auxDescription1\n                            auxDescription2\n                            marketingStatement\n                            promotionalStatement\n                            popupStatement\n                        }\n                        additionalFieldData {\n                            rating\n                            numberOfRating\n                            dispPriceInCartOnly\n                            eligibleForReviews\n                            fsa\n                            chdIndicator\n                            linkFeeEligible\n                            membershipReqd\n                            productClassType\n                            disponZeroInv\n                            backOrderableType\n                            backOrderQuantity\n                            maxItemOrderQty\n                            minItemOrderQty\n                            ').concat(a, "\n                        }\n                        fieldData {\n                            mfPartNumber\n                            mfName\n                            addedDate\n                            startDate\n                            endDate\n                            comparable\n                            swatchable\n                            imageName\n                            variableWeight\n                        }\n                    }\n                    fulfillmentData {\n                        itemNumber\n                        warehouseNumber\n                        clientId\n                        channel\n                        currency\n                        price\n                        linkFee\n                        listPrice\n                        field1Data {\n                            replacedItem\n                            replacementType\n                        }\n                    }\n                    childData {\n                        catalogData {\n                            itemNumber\n                            buyable\n                            published\n                            parentId\n                            programTypes\n                            additionalFieldData {\n                                membershipReqd\n                                fsa\n                                chdIndicator\n                                disponZeroInv\n                                backOrderableType\n                                backOrderQuantity\n                                rating\n                                numberOfRating\n                                ").concat(c, "\n                            }\n                            attributes {\n                                key\n                                value\n                                type\n                                pills\n                                identifier\n                                swatchImage\n                            }\n                            fieldData {\n                                mfPartNumber\n                                mfName\n                                addedDate\n                                startDate\n                                endDate\n                                comparable\n                                swatchable\n                                imageName\n                                variableWeight\n                            }\n                            priceData {\n                                price\n                                listPrice\n                            }\n                        }\n                        fulfillmentData {\n                            itemNumber\n                            warehouseNumber\n                            clientId\n                            channel\n                            currency\n                            price\n                            linkFee\n                            listPrice\n                            discounts {\n                                promoAmount\n                                promoType\n                                promoStartDate\n                                promoEndDate\n                                maximumCount\n                            }\n                            shippingInfo {\n                                unitOfMeasure\n                                factor\n                                externalCarrier\n                                fulfillmentMethods\n                                carrierServices\n                            }\n                            field1Data {\n                                replacedItem\n                                replacementType\n                            }\n                        }\n                    }\n                }\n            }\n        "),
                    variables: {}
                }
            };
            async function i(e, t, n, i) {
                var l, a, c;
                let {
                    productApiConfig: d
                } = t, {
                    apiUrl: u,
                    env: s,
                    clientId: p,
                    warehouseNumber: x
                } = d;
                if (!u || !p || !s || !x) return null;
                let m = r([e], (0, o.vJ)() && i ? i : x, p, n, null == d ? void 0 : d.custom_properties);
                try {
                    let e = await fetch(u, {
                            body: JSON.stringify(m),
                            headers: {
                                "Content-Type": "application/json",
                                "client-identifier": p,
                                "costco.env": s,
                                "costco.service": "restProduct"
                            },
                            method: "POST"
                        }),
                        t = await e.json(),
                        n = (null == (c = null == (a = null == (l = null == t ? void 0 : t.data) ? void 0 : l.products) ? void 0 : a.childData) ? void 0 : c.catalogData) || [];
                    return {
                        inventoryItemNumbers: (null == n ? void 0 : n.map(e => e.itemNumber)).map(Number),
                        productApiResponseData: t
                    }
                } catch (e) {
                    return console.error("Product Api fetch failed", e), null
                }
            }
        },
        67899: function(e, t, n) {
            "use strict";
            n.d(t, {
                ProductTileConfigProviderClient: function() {
                    return a
                },
                Y: function() {
                    return c
                }
            });
            var o = n(57437),
                r = n(88176),
                i = n(2265);
            let l = (0, i.createContext)(null),
                a = e => {
                    let {
                        children: t,
                        productTileConfigData: n,
                        isDomainInclusionDisabledByKeyword: i
                    } = e, {
                        queryParams: a
                    } = (0, r.useQueryParams)();
                    return (0, o.jsx)(l.Provider, {
                        value: {
                            productTileConfigData: n,
                            isDomainInclusionDisabledByKeyword: i,
                            keyword: null == a ? void 0 : a.get("keyword")
                        },
                        children: t
                    })
                },
                c = () => {
                    let e = (0, i.useContext)(l);
                    if (!e) throw Error("useProductTile must be used within a ProductTileConfigProvider");
                    return e
                }
        },
        88176: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                QueryParamsProvider: function() {
                    return l
                },
                useQueryParams: function() {
                    return a
                }
            });
            var o = n(57437),
                r = n(2265);
            let i = (0, r.createContext)(null),
                l = e => {
                    let {
                        children: t
                    } = e, [n, l] = (0, r.useState)(new URLSearchParams({}));
                    return (0, r.useEffect)(() => {
                        if ("undefined" != typeof window) {
                            let e = () => {
                                l(e => {
                                    var t;
                                    let n = new URLSearchParams(null == (t = window.location) ? void 0 : t.search),
                                        o = e => decodeURIComponent(e.toString());
                                    return o(e) === o(n) ? e : new URLSearchParams(window.location.search)
                                })
                            };
                            return window.addEventListener("popstate", e), e(), () => {
                                window.removeEventListener("popstate", e)
                            }
                        }
                    }, []), (0, o.jsx)(i.Provider, {
                        value: {
                            queryParams: n,
                            setQueryParams: l
                        },
                        children: t
                    })
                },
                a = () => {
                    let e = (0, r.useContext)(i);
                    if (!e) throw Error("useQueryParams must be used within a QueryParamsProvider");
                    return e
                };
            l.displayName = "QueryParamsProvider"
        },
        95469: function(e, t, n) {
            "use strict";
            n.d(t, {
                Y: function() {
                    return o
                }
            });
            let o = (0, n(2265).cache)(() => {
                let e = new Map;
                return {
                    addAnchorLink: t => {
                        e.set(t.id, t)
                    },
                    getAnchorLinks: () => Array.from(e.values())
                }
            })
        },
        89766: function(e, t, n) {
            "use strict";
            n.d(t, {
                a: function() {
                    return o
                },
                d: function() {
                    return r
                }
            });
            let o = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                        n = parseInt(e.slice(1), 16);
                    return "rgba(".concat(n >> 16 & 255, ", ").concat(n >> 8 & 255, ", ").concat(255 & n, ", ").concat(t, ")")
                },
                r = e => {
                    var t, n, o, r, i;
                    return "linear" === e.background_gradient_style ? "linear-gradient(".concat(null == (t = e.background_gradient_color.color1) ? void 0 : t.hex, ",").concat(null == (n = e.background_gradient_color.color2) ? void 0 : n.hex, ")") : "radial" === e.background_gradient_style ? "radial-gradient(".concat(null == (o = e.background_gradient_color.color1) ? void 0 : o.hex, ",").concat(null == (r = e.background_gradient_color.color2) ? void 0 : r.hex, ")") : null == (i = e.background_color) ? void 0 : i.hex
                }
        },
        8328: function(e, t, n) {
            "use strict";
            n.d(t, {
                CriteoProviderClientComponent: function() {
                    return x
                },
                F: function() {
                    return m
                }
            });
            var o = n(57437),
                r = n(30518),
                i = n(2265),
                l = n(35527),
                a = n(63853),
                c = n(14506),
                d = n(69653),
                u = n(10004);
            let s = (0, i.createContext)(void 0),
                p = (0, i.memo)(e => {
                    var t, n, l;
                    let {
                        bdWarehouseNumber: p,
                        criteoAPIConfigurationSettings: x,
                        concurrency: m = 1,
                        productTileConfigData: v,
                        locale: h,
                        children: g,
                        searchParams: f,
                        searchResult: y,
                        listSize: b = 24,
                        pdpStatus: _,
                        isTargetingDisabled: C,
                        isOneTrustTargetingEnabled: w,
                        isSearchResultsLoading: T,
                        categoryId: j,
                        isCategoryPage: S,
                        itemNumber: k,
                        price: I,
                        criteoUserCookie: B
                    } = e, {
                        isMobile: P
                    } = (0, a.T)(), A = w && !C, O = "en-ca" === h || "fr-ca" === h, [D, N] = (0, i.useState)(!0), [F, R] = (0, i.useState)(), [L, W] = (0, i.useState)(), [E, H] = (0, i.useState)(), [U, M] = (0, i.useState)(), [V, K] = (0, i.useState)(), [z, G] = (0, i.useState)(), [Z, q] = (0, i.useState)(), [J, Y] = (0, i.useState)(), [Q, $] = (0, i.useState)(), [X, ee] = (0, i.useState)(), [et, en] = (0, i.useState)(), [eo, er] = (0, i.useState)(), {
                        endpoint: ei,
                        required_request_parameters: el = {},
                        timeout: ea,
                        connection_timeout: ec
                    } = x, ed = (0, r.vJ)() && "en-us" === h ? el[null == (t = c.fQ) ? void 0 : t.USBD] : el[null == (n = c.fQ) ? void 0 : n[h]], eu = null == ed ? void 0 : ed["criteo-partner-id"], es = null == ed ? void 0 : ed.nolog, ep = (0, r.vJ)() ? p : null == ed ? void 0 : ed.regionId, ex = (null == ed ? void 0 : ed["specialty-carousel-category"]) || "specialtyhomepage", em = !!f || j, ev = (j || !!y) && !T, eh = (null == y ? void 0 : y.docs) ? null == (l = null == y ? void 0 : y.docs) ? void 0 : l.reduce((e, t) => {
                        let {
                            group_id: n,
                            item_fsa_eligible: o,
                            item_chdi_eligible: r
                        } = t;
                        return !n || o || r ? e : e ? "".concat(e, "|").concat(n) : n
                    }, "") : "";
                    return (0, i.useEffect)(() => {
                        if ("NA" !== _) {
                            if (B && (!em || ev) && (A || O)) {
                                let e = {
                                    block: A ? 0 : 1,
                                    "criteo-partner-id": eu,
                                    nolog: es,
                                    regionId: ep,
                                    "retailer-visitor-id": B
                                };
                                f || j ? (N(!0), (async () => {
                                    var t;
                                    N(!0);
                                    let n = S ? "viewCategory" : (0, r.vJ)() ? "viewSearchResult" : "viewSearchResults",
                                        o = (0, d.W)({ ...e,
                                            category: j,
                                            "event-type": S ? "viewCategory" : "viewSearchResult",
                                            filters: null == f ? void 0 : f.refine,
                                            item: null == (t = null == y ? void 0 : y.docs) ? void 0 : t.reduce((e, t) => {
                                                let {
                                                    group_id: n,
                                                    item_fsa_eligible: o,
                                                    item_chdi_eligible: r
                                                } = t;
                                                return !n || o || r ? e : e ? "".concat(e, "|").concat(n) : n
                                            }, ""),
                                            keywords: null == f ? void 0 : f.keyword,
                                            "list-size": b,
                                            "page-id": "".concat(n, "_API_").concat(P ? "mobile" : "desktop"),
                                            "page-number": null == f ? void 0 : f.currentPage
                                        }),
                                        {
                                            data: i,
                                            error: l
                                        } = await (0, u.En)({
                                            connection_timeout: ec,
                                            endpoint: ei,
                                            isMobile: P,
                                            sharedQueryParams: e,
                                            timeout: ea,
                                            placementName: n,
                                            queryString: o,
                                            returnAllPlacements: !0
                                        });
                                    i ? K(i) : l && en(l), N(!1)
                                })()) : "outOfStock" === _ || "inStock" === _ ? (N(!0), (async () => {
                                    var t, n, o, r, i, l;
                                    let a = "".concat(es ? "nolog=".concat(es, "&") : ""),
                                        c = "".concat(a, "criteo-partner-id=").concat(eu, "&environment=d&retailer-visitor-id=").concat(B, "&page-id=viewItem_API_").concat(P ? "mobile" : "desktop", "&event-type=viewItem&item=").concat(k, "&price=").concat(I, "&availability=").concat("outOfStock" === _ ? 0 : 1).concat(""),
                                        {
                                            data: d,
                                            error: s
                                        } = await (0, u.En)({
                                            connection_timeout: ec,
                                            endpoint: ei,
                                            isMobile: P,
                                            sharedQueryParams: e,
                                            timeout: ea,
                                            placementName: "SponsoredProductsCarousel",
                                            queryString: c,
                                            returnAllPlacements: !0
                                        });
                                    if (d) {
                                        let e = "viewItem_API_".concat(P ? "mobile" : "desktop", "-Carousel").toLowerCase(),
                                            a = "viewItem_API_".concat(P ? "mobile" : "desktop", "-Video").toLowerCase(),
                                            c = null == (o = null == (n = null == (t = d.placements) ? void 0 : t.find(t => t[e])) ? void 0 : n[e]) ? void 0 : o[0],
                                            u = null == (l = null == (i = null == (r = d.placements) ? void 0 : r.find(e => e[a])) ? void 0 : i[a]) ? void 0 : l[0];
                                        c && R({
                                            OnLoadBeacon: d.OnLoadBeacon,
                                            "page-uid": d.OnLoadBeacon,
                                            placement: c
                                        }), u && G({
                                            OnLoadBeacon: null == u ? void 0 : u.OnLoadBeacon,
                                            "page-uid": null == u ? void 0 : u.OnLoadBeacon,
                                            placement: u
                                        })
                                    } else s && (q(s), er(s));
                                    N(!1)
                                })()) : (async () => {
                                    N(!0);
                                    let t = {
                                            connection_timeout: ec,
                                            endpoint: ei,
                                            isMobile: P,
                                            sharedQueryParams: e,
                                            timeout: ea
                                        },
                                        {
                                            data: n,
                                            error: o
                                        } = await (0, u.En)({ ...t,
                                            placementName: "Carousel",
                                            returnAllPlacements: !0
                                        }),
                                        {
                                            data: r,
                                            error: i
                                        } = await (0, u.En)({ ...t,
                                            category: ex,
                                            placementName: "SpecialtyCarousel"
                                        });
                                    if (n) {
                                        let e = (0, u.lk)("viewHome_API_".concat(P ? "mobile" : "desktop", "-Carousel"), n.placements);
                                        e && R({
                                            OnLoadBeacon: n.OnLoadBeacon,
                                            "page-uid": n.OnLoadBeacon,
                                            placement: e
                                        });
                                        let t = (0, u.lk)("viewHome_API_".concat(P ? "mobile" : "desktop", "-CommerceDisplay"), n.placements);
                                        t && H({
                                            OnLoadBeacon: n.OnLoadBeacon,
                                            "page-uid": n.OnLoadBeacon,
                                            placement: t
                                        });
                                        let o = (0, u.lk)("viewHome_API_".concat(P ? "mobile" : "desktop", "-Butterfly1"), n.placements);
                                        o && M({
                                            OnLoadBeacon: n.OnLoadBeacon,
                                            "page-uid": n.OnLoadBeacon,
                                            placement: o
                                        });
                                        let r = (0, u.lk)("viewHome_API_".concat(P ? "mobile" : "desktop", "-Video"), n.placements);
                                        r && G({
                                            OnLoadBeacon: n.OnLoadBeacon,
                                            "page-uid": n.OnLoadBeacon,
                                            placement: r
                                        })
                                    } else o && (q(Z), $(Z), ee(Z), er(Z));
                                    r ? W(r) : i && Y(i), E ? H(E) : Q && $(Q), N(!1)
                                })()
                            } else em && ev && N(!1)
                        }
                    }, [j, S, em, ev, eh, B, A, null == f ? void 0 : f.keyword, null == f ? void 0 : f.refine, null == f ? void 0 : f.currentPage, T, ex, E, Q, ec, ei, O, P, k, b, es, eu, I, ep, f, null == y ? void 0 : y.docs, Z, ea, _]), (0, o.jsx)(s.Provider, {
                        value: {
                            bdWHNumber: p,
                            butterflyData: U,
                            butterflyError: X,
                            commerceData: E,
                            commerceError: Q,
                            concurrency: m,
                            isLoadingCriteoData: D,
                            pdpStatus: _,
                            isTargetingEnabled: A,
                            productTileConfigData: v,
                            recommendedProductData: L,
                            recommendedProductError: J,
                            searchPageData: V,
                            searchPageError: et,
                            sponsoredProductData: F,
                            sponsoredProductError: Z,
                            videoSpotlightData: z,
                            videoSpotlightError: eo
                        },
                        children: g
                    })
                }),
                x = e => {
                    let {
                        bdWarehouseNumber: t,
                        thirdPartyInfo: n,
                        criteoUserCookie: r
                    } = (0, l.$)(), {
                        consentManagement: i
                    } = n, {
                        isTargetingEnabled: a
                    } = i;
                    return (0, o.jsx)(p, {
                        isOneTrustTargetingEnabled: a,
                        criteoUserCookie: r,
                        bdWarehouseNumber: null == t ? void 0 : t.value,
                        ...e
                    })
                },
                m = () => {
                    let e = (0, i.useContext)(s);
                    if (void 0 === e) throw Error("useCriteo must be used within a CriteoProvider");
                    return e
                };
            x.displayName = "CriteoProviderClientComponent"
        },
        61141: function(e, t, n) {
            "use strict";
            async function o(e, t, {
                concurrency: n = Number.POSITIVE_INFINITY,
                stopOnError: o = !0,
                signal: i
            } = {}) {
                return new Promise((l, a) => {
                    if (void 0 === e[Symbol.iterator] && void 0 === e[Symbol.asyncIterator]) throw TypeError(`Expected \`input\` to be either an \`Iterable\` or \`AsyncIterable\`, got (${typeof e})`);
                    if ("function" != typeof t) throw TypeError("Mapper function is required");
                    if (!(Number.isSafeInteger(n) && n >= 1 || n === Number.POSITIVE_INFINITY)) throw TypeError(`Expected \`concurrency\` to be an integer from 1 and up or \`Infinity\`, got \`${n}\` (${typeof n})`);
                    let c = [],
                        d = [],
                        u = new Map,
                        s = !1,
                        p = !1,
                        x = !1,
                        m = 0,
                        v = 0,
                        h = void 0 === e[Symbol.iterator] ? e[Symbol.asyncIterator]() : e[Symbol.iterator](),
                        g = () => {
                            b(i.reason)
                        },
                        f = () => {
                            i ? .removeEventListener("abort", g)
                        },
                        y = e => {
                            l(e), f()
                        },
                        b = e => {
                            s = !0, p = !0, a(e), f()
                        };
                    i && (i.aborted && b(i.reason), i.addEventListener("abort", g, {
                        once: !0
                    }));
                    let _ = async () => {
                        if (p) return;
                        let e = await h.next(),
                            n = v;
                        if (v++, e.done) {
                            if (x = !0, 0 === m && !p) {
                                if (!o && d.length > 0) {
                                    b(AggregateError(d));
                                    return
                                }
                                if (p = !0, 0 === u.size) {
                                    y(c);
                                    return
                                }
                                let e = [];
                                for (let [t, n] of c.entries()) u.get(t) !== r && e.push(n);
                                y(e)
                            }
                            return
                        }
                        m++, (async () => {
                            try {
                                let o = await e.value;
                                if (p) return;
                                let i = await t(o, n);
                                i === r && u.set(n, i), c[n] = i, m--, await _()
                            } catch (e) {
                                if (o) b(e);
                                else {
                                    d.push(e), m--;
                                    try {
                                        await _()
                                    } catch (e) {
                                        b(e)
                                    }
                                }
                            }
                        })()
                    };
                    (async () => {
                        for (let e = 0; e < n; e++) {
                            try {
                                await _()
                            } catch (e) {
                                b(e);
                                break
                            }
                            if (x || s) break
                        }
                    })()
                })
            }
            n.d(t, {
                ZP: function() {
                    return o
                }
            });
            let r = Symbol("skip")
        }
    }
]);