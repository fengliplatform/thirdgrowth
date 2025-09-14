"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4220], {
        80677: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return a
                }
            });
            var l = n(57437),
                r = n(21851),
                o = n(7381),
                i = n(17603);
            let a = () => (0, l.jsx)(r.Skeleton, {
                "data-testid": o.Wq,
                height: 460,
                variant: "rectangular",
                width: i.MAX_TILE_WIDTH
            })
        },
        94220: function(e, t, n) {
            n.d(t, {
                FeatureHighlightCardV2UI: function() {
                    return N
                }
            });
            var l = n(57437),
                r = n(29621),
                o = n(2265),
                i = n(68139),
                a = n(79715),
                d = n(85361),
                u = n(63853),
                c = n(80677),
                s = n(7381);

            function x(e, t) {
                if (!e || !t) return "column";
                if ("vertical" === e);
                else if ("horizontal" === e) {
                    if ("left" === t) return "row";
                    if ("right" === t) return "row-reverse"
                }
                return "column"
            }
            let h = e => {
                let {
                    titleContent: t,
                    bodyContent: n,
                    primaryButtonContent: l,
                    secondaryButtonContent: r,
                    closeButtonAriaLabel: o
                } = e;
                return {
                    warningCloseAriaLabel: o,
                    warningPrimaryButtonText: l,
                    warningSecondaryButtonText: r,
                    warningText: n,
                    warningTitle: t
                }
            };
            var g = n(7302),
                f = n(37368),
                v = n(7439),
                p = n(17603);
            let m = e => {
                var t, n, r, o, i, a, d;
                let {
                    data: u,
                    contentAlignment: c,
                    globalTextColor: s,
                    viewName: x
                } = e, {
                    select_card_style_variant: g,
                    button_group: m
                } = u, {
                    disclaimer_caption: _,
                    button_config: w
                } = u.below_feature_tiles, b = _.replace(/\s/g, "").length > 0, {
                    externalLinkTranslations: k
                } = (0, f.X)(), y = {};
                return k && (y = h(k)), (0, l.jsxs)(p.IT, {
                    contentAlignment: c,
                    "data-testid": "".concat(x, "-caption-disclaimer"),
                    hasCaption: b,
                    children: [_ && (0, l.jsx)(p.xP, {
                        children: (0, l.jsx)(v.MarketingTypography, {
                            variant: "caption",
                            isMarkdown: !0,
                            sx: {
                                color: s
                            },
                            children: _
                        })
                    }), "feature_variant" === g && (null == (t = null == w ? void 0 : w.text_and_url) ? void 0 : t.url) && (null == (n = null == w ? void 0 : w.text_and_url) ? void 0 : n.title) && (0, l.jsx)(p.Og, {
                        background: null == (r = w.color_config.background_color) ? void 0 : r.hex,
                        color: (null == (o = w.color_config.text_color) ? void 0 : o.hex) || s,
                        href: null == (i = null == w ? void 0 : w.text_and_url) ? void 0 : i.url,
                        hasExternalLinkWarning: null == (a = null == w ? void 0 : w.text_and_url) ? void 0 : a.external_site,
                        ...y,
                        children: null == (d = null == w ? void 0 : w.text_and_url) ? void 0 : d.title
                    }), "general_variant" === g && Array.isArray(m) && (0, l.jsx)(p.A8, {
                        contentAlignment: c,
                        children: function(e, t) {
                            let n = [];
                            for (let l = 0; l < e.length; l += 2) {
                                let r = e.slice(l, l + 2);
                                n.push(t(r, l))
                            }
                            return n
                        }(m, e => (0, l.jsx)(p.VR, {
                            children: e.map((e, t) => {
                                var n, r;
                                let {
                                    text_and_url: o,
                                    color_config: i
                                } = e;
                                return (0, l.jsx)(p.sN, {
                                    background: null == (n = null == i ? void 0 : i.background_color) ? void 0 : n.hex,
                                    color: null == (r = null == i ? void 0 : i.text_color) ? void 0 : r.hex,
                                    href: null == o ? void 0 : o.url,
                                    hasExternalLinkWarning: null == o ? void 0 : o.external_site,
                                    ...y,
                                    children: null == o ? void 0 : o.title
                                }, "".concat(o.title, "-").concat(t))
                            })
                        }, e[0].text_and_url.title))
                    })]
                })
            };
            var _ = n(72547),
                w = n(39900),
                b = n(42911);
            let k = e => {
                let {
                    data: t,
                    globalTextColor: n,
                    viewName: r
                } = e, {
                    feature_tiles: o,
                    body_section_config: i
                } = t, {
                    isBiggerDesktop: a,
                    isDesktop: d,
                    isTablet: c,
                    isMobile: x
                } = (0, u.T)(), {
                    imageDomainSwapConfig: h
                } = (0, _.p)();
                if (!o || o.length <= 0) return null;
                let {
                    small_viewport: g,
                    medium_viewport: f,
                    large_viewport: v,
                    extra_large_viewport: m
                } = i.feature_tiles_orientation, k = s.W7[g];
                return a ? k = s.W7[m] : d ? k = s.W7[v] : c ? k = s.W7[f] : x && (k = s.W7[g]), (0, l.jsx)(p.te, {
                    "data-testid": "".concat(r, "-tiles"),
                    tileOrientation: k,
                    children: o.map((e, t) => {
                        var r, o;
                        let {
                            background_color: i,
                            text_color: a
                        } = e.text_and_background_color;
                        return e.tile_url && e.tile_url.url ? (0, l.jsxs)(p.YW, {
                            background: null == i ? void 0 : i.hex,
                            borderColor: null == (r = e.border_color) ? void 0 : r.hex,
                            hasExternalLinkWarning: e.tile_url.external_site,
                            href: e.tile_url.url,
                            children: [(0, l.jsx)(p.iy, {
                                src: (0, w.w)(e.feature_icon.image[0].url, h),
                                alt: e.feature_icon.image_alt_text,
                                component: "img",
                                loading: "lazy"
                            }), ((null == e ? void 0 : e.title) || (null == e ? void 0 : e.subtitle)) && (0, l.jsxs)(p.yZ, {
                                children: [(null == e ? void 0 : e.title) && (0, l.jsx)(p.eN, {
                                    color: (null == a ? void 0 : a.hex) || n,
                                    children: (0, l.jsx)(b.$, {
                                        markdown: e.title,
                                        linkColor: (null == a ? void 0 : a.hex) || n
                                    })
                                }), (null == e ? void 0 : e.subtitle) && (0, l.jsx)(p.tt, {
                                    color: (null == a ? void 0 : a.hex) || n,
                                    children: (0, l.jsx)(b.$, {
                                        markdown: e.subtitle,
                                        linkColor: (null == a ? void 0 : a.hex) || n
                                    })
                                })]
                            })]
                        }, t) : (0, l.jsxs)(p.n9, {
                            background: null == i ? void 0 : i.hex,
                            borderColor: null == (o = e.border_color) ? void 0 : o.hex,
                            color: null == a ? void 0 : a.hex,
                            children: [(0, l.jsx)(p.iy, {
                                src: (0, w.w)(e.feature_icon.image[0].url, h),
                                alt: e.feature_icon.image_alt_text,
                                component: "img",
                                loading: "lazy"
                            }), ((null == e ? void 0 : e.title) || (null == e ? void 0 : e.subtitle)) && (0, l.jsxs)(p.yZ, {
                                children: [(null == e ? void 0 : e.title) && (0, l.jsx)(p.eN, {
                                    color: null == a ? void 0 : a.hex,
                                    children: (0, l.jsx)(b.$, {
                                        markdown: e.title,
                                        linkColor: (null == a ? void 0 : a.hex) || n
                                    })
                                }), (null == e ? void 0 : e.subtitle) && (0, l.jsx)(p.tt, {
                                    color: null == a ? void 0 : a.hex,
                                    children: (0, l.jsx)(b.$, {
                                        markdown: e.subtitle,
                                        linkColor: (null == a ? void 0 : a.hex) || n
                                    })
                                })]
                            })]
                        }, t)
                    })
                })
            };
            var y = n(18707),
                j = n(95666),
                P = n(89198),
                D = n(55432),
                C = n(3795);
            let F = e => {
                var t, n, r, o, i, a, d;
                let {
                    data: u,
                    largeViewportFlexDirection: c,
                    viewName: s,
                    locale: x = "en-us"
                } = e, {
                    imageDomainSwapConfig: h
                } = (0, _.p)();
                if (!(null == (t = null == u ? void 0 : u.header_section) ? void 0 : t.background_color)) return null;
                let {
                    background_color: g,
                    background_image: f,
                    overlay_icon: v,
                    use_overlay_icon: m
                } = u.header_section, {
                    background_color: b,
                    background_gradient_style: k,
                    background_gradient_color: F
                } = g;
                null == f || f.image, null == f || f.image_alt_text;
                let I = null == (n = null == f ? void 0 : f.image) ? void 0 : n[0],
                    T = null == (o = null == (r = null == f ? void 0 : f.image) ? void 0 : r[0]) ? void 0 : o.url,
                    Z = null == (i = null == v ? void 0 : v.image) ? void 0 : i[0];
                null == v || v.image_alt_text;
                let W = (null == (a = u.card_link) ? void 0 : a.url) ? y.Link : C.CostcoBox,
                    A = (0, D.JH)(I),
                    E = !A && (0, w.w)(T, h),
                    H = (0, D._o)(I),
                    S = (0, p.Et)(E || "", k, b, F);
                return A || S ? (0, l.jsx)(W, {
                    sx: p.B7,
                    href: null == (d = u.card_link) ? void 0 : d.url,
                    children: A ? (0, l.jsx)(p.gM, {
                        alignItems: "flex-end",
                        backgroundStyle: S,
                        "data-testid": "".concat(s, "-video-header"),
                        largeViewportFlexDirection: c,
                        children: (0, l.jsx)(P.a, {
                            enableMobileImageVariation: !1,
                            image: null == f ? void 0 : f.image,
                            imageAltText: null == f ? void 0 : f.image_alt_text,
                            locale: x,
                            imageSx: {
                                height: "100%",
                                width: "100%"
                            },
                            imageUrl: T,
                            sx: (0, p.lI)(c, H)
                        })
                    }) : (0, l.jsx)(p.gM, {
                        backgroundStyle: S,
                        "data-testid": "".concat(s, "-header"),
                        largeViewportFlexDirection: c,
                        children: (() => {
                            if (!m || !Z) return null;
                            let e = Z ? (0, w.w)(Z.url, h) : "";
                            return (0, l.jsx)(p.$n, {
                                children: (0, l.jsx)(j.Image, {
                                    src: e,
                                    sx: {
                                        height: "auto",
                                        maxHeight: p.B2,
                                        maxWidth: p.En,
                                        width: "auto"
                                    },
                                    alt: (null == v ? void 0 : v.image_alt_text) || "",
                                    className: "overlay-icon",
                                    component: "img",
                                    loading: "lazy",
                                    widths: [{
                                        width: 1400
                                    }]
                                })
                            })
                        })()
                    })
                }) : null
            };
            F.displayName = "Header";
            let I = e => {
                let {
                    data: t,
                    contentAlignment: n,
                    globalTextColor: r,
                    viewName: o
                } = e, {
                    text_content: i
                } = t;
                if (!i || i.length <= 0) return null;
                let a = i.map((e, t) => {
                    var n, o;
                    return e.markdown_text ? (0, l.jsx)(v.MarketingTypography, {
                        color: (null == (o = null == (n = e.color) ? void 0 : n.text_color) ? void 0 : o.hex) || r,
                        component: e.select_semantics_type,
                        variant: e.select_text_type,
                        isMarkdown: !0,
                        id: "featurehighlightcard_text_".concat(t),
                        children: e.markdown_text
                    }, t) : null
                });
                return (0, l.jsx)(p.lU, {
                    contentAlignment: n,
                    "data-testid": "".concat(o, "-text-section"),
                    children: a
                })
            };

            function T(e) {
                let {
                    data: t
                } = e;
                if (!t) return null;
                let {
                    background_color: n,
                    text_color: r
                } = t.body_section_config.text_and_background_color, o = (null == n ? void 0 : n.hex) || g.pOK, i = (null == r ? void 0 : r.hex) || p.bT, {
                    tiles_button_dynamic_row_config: a
                } = t, {
                    content_alignment: d,
                    large_viewport_image_orientation: u,
                    large_viewport_orientation: c
                } = null != a ? a : {}, h = x(c, u);
                return (0, l.jsxs)(p._L, {
                    "data-testid": s.DE,
                    largeViewportFlexDirection: h,
                    children: [t.use_header_section && (0, l.jsx)(F, {
                        data: t,
                        largeViewportFlexDirection: h,
                        viewName: s.DE
                    }), (0, l.jsxs)(p.eW, {
                        background: o,
                        color: i,
                        children: [(0, l.jsx)(I, {
                            contentAlignment: d,
                            data: t,
                            globalTextColor: i,
                            viewName: s.DE
                        }), (0, l.jsx)(k, {
                            data: t,
                            globalTextColor: i,
                            viewName: s.DE
                        }), (0, l.jsx)(m, {
                            contentAlignment: d,
                            data: t,
                            globalTextColor: i,
                            viewName: s.DE
                        })]
                    })]
                })
            }

            function Z(e) {
                let {
                    data: t
                } = e;
                if (!t) return null;
                let {
                    background_color: n,
                    text_color: r
                } = t.body_section_config.text_and_background_color, o = (null == n ? void 0 : n.hex) || g.pOK, i = (null == r ? void 0 : r.hex) || p.bT, {
                    tiles_button_dynamic_row_config: a
                } = t, {
                    content_alignment: d,
                    large_viewport_image_orientation: u,
                    large_viewport_orientation: c
                } = null != a ? a : {}, h = x(c, u);
                return (0, l.jsxs)(p._L, {
                    "data-testid": s.sY,
                    largeViewportFlexDirection: h,
                    children: [t.use_header_section && (0, l.jsx)(F, {
                        data: t,
                        largeViewportFlexDirection: h,
                        viewName: s.sY
                    }), (0, l.jsxs)(p.eW, {
                        background: o,
                        color: i,
                        children: [(0, l.jsx)(I, {
                            contentAlignment: d,
                            data: t,
                            globalTextColor: i,
                            viewName: s.sY
                        }), (0, l.jsx)(m, {
                            contentAlignment: d,
                            data: t,
                            globalTextColor: i,
                            viewName: s.sY
                        })]
                    })]
                })
            }
            I.displayName = "TextSection";
            var W = n(26399),
                A = n(92144),
                E = n(52730);
            let H = e => {
                let {
                    data: t
                } = e, {
                    image_with_legend: n
                } = t;
                return !n || n.legend_tile.length <= 0 ? null : (0, l.jsx)(p.ex, {
                    variant: "SimpleList",
                    children: n.legend_tile.map((e, t) => {
                        var n, r, o, i, d, u, c, s;
                        return (null == (n = null == e ? void 0 : e.button_config) ? void 0 : n.url) ? (0, l.jsx)(W.H, {
                            children: (0, l.jsx)(p.YL, {
                                children: (0, l.jsx)(a.Analytics, {
                                    analyticData: {
                                        adItem: {
                                            isExternal: null == (r = null == e ? void 0 : e.button_config) ? void 0 : r.external_site,
                                            url: null == (o = null == e ? void 0 : e.button_config) ? void 0 : o.url
                                        },
                                        title: null == e ? void 0 : e.button_config.entry_title
                                    },
                                    children: (0, l.jsxs)(y.Link, {
                                        href: null == (i = null == e ? void 0 : e.button_config) ? void 0 : i.url,
                                        children: [(0, l.jsxs)(C.CostcoBox, {
                                            sx: {
                                                alignItems: "center",
                                                display: "flex",
                                                flexGrow: 1,
                                                gap: g.vdF
                                            },
                                            children: [(0, l.jsx)(p.O9, {
                                                children: (0, l.jsx)(p.Ek, {
                                                    backgroundColor: null == (d = null == e ? void 0 : e.swatch_color) ? void 0 : d.hex
                                                })
                                            }), (0, l.jsx)(A.Text, {
                                                component: "span",
                                                variant: "t6",
                                                children: null == (u = null == e ? void 0 : e.button_config) ? void 0 : u.title
                                            })]
                                        }), (0, l.jsx)(E._, {
                                            sx: {
                                                color: g.JaJ,
                                                display: {
                                                    lg: "none",
                                                    md: "inline-block"
                                                },
                                                height: "24px",
                                                width: "24px"
                                            }
                                        })]
                                    })
                                })
                            })
                        }, t) : (0, l.jsx)(W.H, {
                            children: (0, l.jsxs)(p.YL, {
                                children: [(0, l.jsx)(p.O9, {
                                    children: (0, l.jsx)(p.Ek, {
                                        backgroundColor: null == (c = null == e ? void 0 : e.swatch_color) ? void 0 : c.hex
                                    })
                                }), (0, l.jsx)(A.Text, {
                                    variant: "t6",
                                    children: null == (s = null == e ? void 0 : e.button_config) ? void 0 : s.title
                                })]
                            })
                        }, t)
                    })
                })
            };

            function S(e) {
                let {
                    data: t
                } = e;
                if (!t) return null;
                let {
                    image_with_legend: n
                } = t || {}, {
                    section_title: r
                } = n || "";
                return (0, l.jsxs)(p.At, {
                    "data-testid": s.SE,
                    children: [r && (0, l.jsx)(p.AH, {
                        children: (0, l.jsx)(b.$, {
                            markdown: r
                        })
                    }), (0, l.jsxs)(p.xh, {
                        children: [(0, l.jsx)(H, {
                            data: t
                        }), (0, l.jsx)(j.Image, {
                            sx: {
                                alignItems: "flex-end",
                                display: "flex",
                                height: "auto",
                                justifyContent: "flex-end",
                                maxHeight: "100%",
                                maxWidth: {
                                    lg: "75%",
                                    md: "100%",
                                    sm: "100%",
                                    xs: "100%"
                                },
                                width: "auto"
                            },
                            alt: "".concat(n.image_alt_text),
                            caption: n.image_caption,
                            component: "img",
                            src: n.image[0].url
                        })]
                    })]
                })
            }

            function N(e) {
                var t;
                let n, {
                        data: x,
                        isLoading: h = !1,
                        analyticsTitlePrefix: g,
                        enableOnViewTracking: f
                    } = e,
                    {
                        isBiggerDesktop: v,
                        isDesktop: m,
                        isTablet: _,
                        isMobile: w
                    } = (0, u.T)(),
                    {
                        trackEvent: b
                    } = (0, i.rS)(),
                    k = null == x ? void 0 : x.title;
                g && (k = "".concat(g, " | ").concat(k));
                let y = {
                        adItem: {
                            style: "feature highlight card",
                            title: k,
                            type: "category",
                            url: null == x ? void 0 : x.url
                        },
                        doNotTrack: null == (t = null == x ? void 0 : x.privacy_toggle) ? void 0 : t.disable_third_party_tracking,
                        itemCuration: "costco"
                    },
                    j = (0, o.useCallback)(() => {
                        b({
                            contentImp: k,
                            trackType: d.YU
                        })
                    }, [b, k]),
                    P = (0, r.y)({
                        onView: j,
                        enabled: !!f
                    });
                if (h) return (0, l.jsx)(c.E, {});
                if (!x) return console.error("".concat(s.lP, " error: no valid data")), null;
                let D = x.card_row_config,
                    C = D.small_viewport;
                switch (v ? C = D.extra_large_viewport : m ? C = D.large_viewport : _ ? C = D.medium_viewport : w && (C = D.small_viewport), null == x ? void 0 : x.select_card_style_variant) {
                    case "feature_variant":
                        n = (0, l.jsx)(T, {
                            data: x
                        });
                        break;
                    case "general_variant":
                        n = (0, l.jsx)(Z, {
                            data: x
                        });
                        break;
                    case "image_with_legend":
                        n = (0, l.jsx)(S, {
                            data: x
                        });
                        break;
                    default:
                        return console.error("invalid card style variant: " + (null == x ? void 0 : x.select_card_style_variant)), null
                }
                let {
                    title: F,
                    url: I
                } = function(e) {
                    if (e) return {
                        title: function(e) {
                            let {
                                text_content: t,
                                feature_tiles: n
                            } = e;
                            if (t) {
                                for (let e of t)
                                    if ("title" === e.select_text_type) return e.markdown_text
                            }
                            return n && n.length > 0 ? n[0].title : ""
                        }(e),
                        url: function(e) {
                            var t, n;
                            let {
                                button_config: l
                            } = e.below_feature_tiles;
                            if (null == (t = null == l ? void 0 : l.text_and_url) ? void 0 : t.url) return null == (n = null == l ? void 0 : l.text_and_url) ? void 0 : n.url
                        }(e)
                    }
                }(x) || {};
                return (0, l.jsx)(a.Analytics, {
                    analyticData: y,
                    children: (0, l.jsx)(p.Al, {
                        "data-testid": s.BG[null == x ? void 0 : x.select_card_style_variant],
                        "data-layout": C,
                        ref: P,
                        children: n
                    })
                })
            }
            N.displayName = s.lP
        },
        7381: function(e, t, n) {
            n.d(t, {
                BG: function() {
                    return d
                },
                DE: function() {
                    return o
                },
                SE: function() {
                    return a
                },
                W7: function() {
                    return u
                },
                Wq: function() {
                    return r
                },
                lP: function() {
                    return l
                },
                sY: function() {
                    return i
                }
            });
            let l = "FeatureHighlightCardV2",
                r = "skeleton",
                o = "feature",
                i = "general",
                a = "image-with-legend",
                d = {
                    feature_variant: o,
                    general_variant: i,
                    image_with_legend: a
                },
                u = {
                    horizontal: "row",
                    vertical: "column"
                }
        },
        17603: function(e, t, n) {
            n.d(t, {
                $n: function() {
                    return Z
                },
                A8: function() {
                    return H
                },
                AH: function() {
                    return L
                },
                Al: function() {
                    return p
                },
                At: function() {
                    return Y
                },
                B2: function() {
                    return s
                },
                B7: function() {
                    return R
                },
                Ek: function() {
                    return V
                },
                En: function() {
                    return x
                },
                Et: function() {
                    return v
                },
                IT: function() {
                    return m
                },
                MAX_TILE_WIDTH: function() {
                    return f
                },
                O9: function() {
                    return O
                },
                Og: function() {
                    return A
                },
                VR: function() {
                    return E
                },
                YL: function() {
                    return M
                },
                YW: function() {
                    return D
                },
                _L: function() {
                    return W
                },
                bT: function() {
                    return g
                },
                eN: function() {
                    return I
                },
                eW: function() {
                    return w
                },
                ex: function() {
                    return B
                },
                gM: function() {
                    return k
                },
                iy: function() {
                    return C
                },
                lI: function() {
                    return b
                },
                lU: function() {
                    return y
                },
                n9: function() {
                    return P
                },
                sN: function() {
                    return S
                },
                te: function() {
                    return j
                },
                tt: function() {
                    return T
                },
                xP: function() {
                    return _
                },
                xh: function() {
                    return N
                },
                yZ: function() {
                    return F
                }
            });
            var l = n(95656),
                r = n(16210),
                o = n(31691),
                i = n(92144),
                a = n(18707),
                d = n(95666),
                u = n(86721),
                c = n(7302);
            let s = 72,
                x = 72,
                h = c.pOK,
                g = c.W3Q,
                f = 448;
            c.hE8, c.rWq, c.gkn, c.F5N, c.rWq, c.gkn, c.aQT, c.cQB, c.Qoq, c.cQB, c.Qoq;
            let v = (e, t, n, l) => {
                    var r, o, i, a, d, u, c, s;
                    let x = "";
                    switch (e && (x = "url(".concat(e, ")")), t) {
                        case "no-background":
                            return {
                                backgroundImage: x
                            };
                        case "solid":
                            x = x ? "".concat(x, ", ").concat(null == n ? void 0 : n.hex) : null == n ? void 0 : n.hex;
                            break;
                        case "linear":
                            x = x ? "".concat(x, ", linear-gradient(").concat(null == (r = null == l ? void 0 : l.color1) ? void 0 : r.hex, ", ").concat(null == (o = null == l ? void 0 : l.color2) ? void 0 : o.hex, ")") : "linear-gradient(".concat(null == (i = null == l ? void 0 : l.color1) ? void 0 : i.hex, ", ").concat(null == (a = null == l ? void 0 : l.color2) ? void 0 : a.hex, ")");
                            break;
                        case "radial":
                            x = x ? "".concat(x, ", radial-gradient(").concat(null == (d = null == l ? void 0 : l.color1) ? void 0 : d.hex, ", ").concat(null == (u = null == l ? void 0 : l.color2) ? void 0 : u.hex, ")") : "radial-gradient(".concat(null == (c = null == l ? void 0 : l.color1) ? void 0 : c.hex, ", ").concat(null == (s = null == l ? void 0 : l.color2) ? void 0 : s.hex, ")")
                    }
                    return x ? {
                        background: x
                    } : null
                },
                p = (0, r.ZP)(l.default)({
                    display: "flex",
                    height: "100%",
                    width: "100%"
                }),
                m = (0, r.ZP)(l.default, {
                    shouldForwardProp: e => "contentAlignment" !== e
                })(e => {
                    let {
                        contentAlignment: t,
                        hasCaption: n
                    } = e;
                    return {
                        alignItems: t || "flex-start",
                        display: "flex",
                        flex: 1,
                        flexDirection: "column",
                        gap: n ? c.aiS : "0",
                        justifyContent: "flex-end"
                    }
                }),
                _ = (0, r.ZP)(i.Text, {
                    shouldForwardProp: e => "color" !== e
                })(e => {
                    let {
                        color: t
                    } = e;
                    return {
                        color: t || c.Sff,
                        fontSize: c.F5N
                    }
                }),
                w = (0, r.ZP)(l.default, {
                    shouldForwardProp: e => "background" !== e && "color" !== e
                })(e => {
                    let {
                        background: t,
                        color: n
                    } = e;
                    return {
                        backgroundColor: t || h,
                        color: n,
                        display: "flex",
                        flexDirection: "column",
                        gap: c.oFH,
                        height: "100%",
                        padding: c.ODt,
                        width: "100%"
                    }
                }),
                b = (e, t) => {
                    let n = {
                            aspectRatio: t,
                            height: "100%",
                            width: "100%",
                            maxWidth: "max-content",
                            maxHeight: "max-content"
                        },
                        l = (0, o.Z)();
                    return {
                        [l.breakpoints.up("md")]: { ..."column" === e ? n : {
                                width: "100%",
                                height: "100%"
                            }
                        },
                        [l.breakpoints.down("md")]: { ..."column" === e ? n : {
                                aspectRatio: t,
                                height: "100%",
                                width: "100%",
                                maxWidth: "max-content",
                                maxHeight: "max-content"
                            }
                        }
                    }
                },
                k = (0, r.ZP)(l.default, {
                    shouldForwardProp: e => "alignItems" !== e && "backgroundStyle" !== e && "largeViewportFlexDirection" !== e
                })(e => {
                    let {
                        alignItems: t,
                        backgroundStyle: n,
                        largeViewportFlexDirection: l,
                        theme: r
                    } = e;
                    return { ...n,
                        alignItems: t || "center",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        display: "flex",
                        height: "column" === l ? 250 : "100%",
                        justifyContent: "center",
                        minHeight: 250,
                        width: "100%",
                        [r.breakpoints.down("md")]: {
                            height: 250
                        }
                    }
                });
            (0, r.ZP)(l.default)({
                alignContent: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center"
            });
            let y = (0, r.ZP)(l.default, {
                    shouldForwardProp: e => "contentAlignment" !== e
                })(e => {
                    let {
                        contentAlignment: t = "left"
                    } = e;
                    return {
                        display: "flex",
                        flexDirection: "column",
                        gap: c.oFH,
                        textAlign: t
                    }
                }),
                j = (0, r.ZP)(l.default, {
                    shouldForwardProp: e => "tileOrientation" !== e
                })(e => {
                    let {
                        tileOrientation: t,
                        theme: n
                    } = e;
                    return {
                        alignItems: "stretch",
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: t,
                        flexWrap: "wrap",
                        gap: c.iPk,
                        height: "fit-content",
                        justifyContent: "center",
                        [n.breakpoints.up("lg")]: {
                            "& > div:first-of-type, & > div:last-of-type": {
                                padding: "".concat(c.iPk, " 0")
                            }
                        }
                    }
                }),
                P = (0, r.ZP)(l.default, {
                    shouldForwardProp: e => "background" !== e && "borderColor" !== e && "color" !== e
                })(e => {
                    let {
                        background: t,
                        borderColor: n,
                        color: l
                    } = e;
                    return {
                        alignItems: "center",
                        backgroundColor: t || "auto",
                        border: n ? "".concat(c.YVI, " solid ").concat(n) : "none",
                        borderRadius: "4px",
                        color: l || "auto",
                        display: "flex",
                        flex: "1 0 0",
                        flexDirection: "column",
                        gap: c.oFH,
                        padding: "".concat(c.iPk, " ").concat(c.vdF),
                        width: "100%"
                    }
                }),
                D = (0, r.ZP)(a.Link, {
                    shouldForwardProp: e => "background" !== e && "borderColor" !== e && "color" !== e
                })(e => {
                    let {
                        background: t,
                        borderColor: n,
                        color: l
                    } = e;
                    return {
                        alignItems: "center",
                        backgroundColor: t || "auto",
                        border: n ? "".concat(c.YVI, " solid ").concat(n) : "none",
                        borderRadius: "4px",
                        color: l || c.ekx,
                        display: "flex",
                        flex: "1 0 0",
                        flexDirection: "column",
                        gap: c.oFH,
                        padding: "".concat(c.iPk, " ").concat(c.vdF),
                        width: "100%"
                    }
                }),
                C = (0, r.ZP)(d.Image, {
                    shouldForwardProp: () => !0
                })({
                    height: "50px",
                    objectFit: "contain",
                    width: "50px"
                }),
                F = (0, r.ZP)(l.default)({
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center"
                }),
                I = (0, r.ZP)(i.Text, {
                    shouldForwardProp: e => "color" !== e
                })(e => {
                    let {
                        color: t
                    } = e;
                    return {
                        color: t || c.ekx
                    }
                }),
                T = (0, r.ZP)(i.Text, {
                    shouldForwardProp: e => "color" !== e
                })(e => {
                    let {
                        color: t
                    } = e;
                    return {
                        color: t || c.Sff
                    }
                }),
                Z = (0, r.ZP)(l.default)({
                    alignItems: "center",
                    backgroundColor: c.W3Q,
                    borderRadius: "100px",
                    display: "flex",
                    height: s,
                    justifyContent: "center",
                    padding: c.ODt,
                    width: x
                }),
                W = (0, r.ZP)(l.default, {
                    shouldForwardProp: e => "largeViewportFlexDirection" !== e
                })(e => {
                    let {
                        largeViewportFlexDirection: t,
                        theme: n
                    } = e;
                    return {
                        "@media (prefers-reduced-motion)": {
                            transform: "none"
                        },
                        alignItems: "flex-start",
                        borderRadius: "10px",
                        display: "flex",
                        flexDirection: t,
                        overflow: "hidden",
                        textDecoration: "none",
                        width: "100%",
                        [n.breakpoints.down("md")]: {
                            flexDirection: "column"
                        }
                    }
                }),
                A = (0, r.ZP)(a.Link, {
                    shouldForwardProp: e => "background" !== e && "borderColor" !== e && "color" !== e
                })(e => {
                    let {
                        background: t,
                        color: n
                    } = e;
                    return {
                        "&:hover, &:focus": {
                            color: c.s4A,
                            textDecoration: "none",
                            backgroundColor: c.gdN
                        },
                        alignItems: "center",
                        background: t || c.W3Q,
                        border: "none",
                        borderRadius: c.XTV,
                        color: n || c.ekx,
                        display: "flex",
                        justifyContent: "flex",
                        padding: "10px ".concat(c.oFH, " "),
                        height: "40px",
                        width: "fit-content"
                    }
                }),
                E = (0, r.ZP)(l.default)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        [t.breakpoints.down("md")]: {
                            flexDirection: "column"
                        },
                        ":only-child": {
                            "a:only-child": {
                                width: "fit-content"
                            }
                        },
                        display: "flex",
                        gap: c.oFH,
                        height: "fit-content"
                    }
                }),
                H = (0, r.ZP)(l.default, {
                    shouldForwardProp: e => "contentAlignment" !== e
                })(e => {
                    let {
                        contentAlignment: t
                    } = e;
                    return {
                        display: "flex",
                        flexDirection: "column",
                        gap: c.oFH,
                        width: "100%",
                        alignItems: t || "flex-start"
                    }
                }),
                S = (0, r.ZP)(A)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        [t.breakpoints.down("md")]: {
                            width: "100%"
                        },
                        ":only-child": {
                            width: "100%"
                        },
                        height: "100%",
                        width: "calc(50% - ".concat(c.vdF, ")")
                    }
                }),
                N = (0, r.ZP)(l.default)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        display: "flex",
                        flexDirection: "column",
                        gap: c.oFH,
                        [t.breakpoints.up("lg")]: {
                            flexDirection: "row",
                            gap: c.aiS
                        }
                    }
                }),
                L = (0, r.ZP)(i.Text)({
                    color: c.ekx,
                    fontSize: c.YzP,
                    width: "100%"
                }),
                Y = (0, r.ZP)(l.default)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        display: "flex",
                        flexDirection: "column",
                        gap: c.oFH,
                        width: "fit-content",
                        [t.breakpoints.down("lg")]: {
                            width: "100%"
                        }
                    }
                });
            (0, r.ZP)(l.default, {
                shouldForwardProp: e => "largeViewportFlexDirection" !== e
            })(e => {
                let {
                    largeViewportFlexDirection: t,
                    theme: n
                } = e;
                return {
                    "@media (prefers-reduced-motion)": {
                        transform: "none"
                    },
                    alignItems: "flex-start",
                    borderRadius: "10px",
                    display: "flex",
                    flexDirection: t,
                    overflow: "hidden",
                    textDecoration: "none",
                    width: "100%",
                    [n.breakpoints.down("md")]: {
                        flexDirection: "column"
                    }
                }
            });
            let B = (0, r.ZP)(u.a)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        "& > li": {
                            ":last-child": {
                                borderBottom: "1px solid ".concat(c.gpS),
                                [t.breakpoints.up("lg")]: {
                                    border: "none"
                                }
                            },
                            borderTop: "1px solid ".concat(c.gpS),
                            width: "100%",
                            [t.breakpoints.up("lg")]: {
                                border: "none"
                            }
                        },
                        alignItems: "flex-start",
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "column",
                        margin: 0,
                        [t.breakpoints.up("lg")]: {
                            "& .MuiDivider-root": {
                                display: "none"
                            },
                            maxWidth: "25%"
                        }
                    }
                }),
                M = (0, r.ZP)(l.default)(e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        "& .MuiLink-root": {
                            alignItems: "center",
                            display: "flex",
                            flexDirection: "row",
                            gap: c.vdF,
                            width: "100%",
                            [t.breakpoints.up("lg")]: {
                                textDecoration: "underline",
                                textDecorationColor: c.s4A
                            }
                        },
                        alignItems: "center",
                        alignSelf: "stretch",
                        display: "flex",
                        gap: c.vdF,
                        padding: "".concat(c.vdF, " ").concat(c.vdF, " ").concat(c.vdF, " 0")
                    }
                }),
                O = (0, r.ZP)(l.default)({
                    alignItems: "center",
                    border: "1px solid ".concat(c.JSR),
                    borderRadius: c.KLM,
                    display: "flex",
                    height: "28px",
                    justifyContent: "center",
                    width: "28px"
                }),
                V = (0, r.ZP)(l.default, {
                    shouldForwardProp: e => "backgroundColor" !== e
                })(e => {
                    let {
                        backgroundColor: t
                    } = e;
                    return {
                        background: t || c.W3Q,
                        borderRadius: "1px",
                        flexShrink: 1,
                        height: c.ODt,
                        width: c.ODt
                    }
                }),
                R = {
                    display: "contents",
                    "&:hover": {
                        textDecoration: "none"
                    }
                }
        }
    }
]);