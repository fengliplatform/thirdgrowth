"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [889], {
        71900: function(t, e, n) {
            n.d(e, {
                Tp: function() {
                    return a
                },
                fR: function() {
                    return o
                },
                hm: function() {
                    return i
                }
            });
            var l = n(25566);
            let a = "popupVisitExternalLink",
                o = l.env.CONFIG_KEY || "5db4a27c-1691-4b6f-979e-72e42e6ae2fc",
                i = "site_settings"
        },
        74572: function(t, e, n) {
            n.r(e), n.d(e, {
                AdBuilder: function() {
                    return _
                }
            });
            var l = n(57437),
                a = n(86769),
                o = n(30970),
                i = n(65571),
                r = n(50621);
            let d = async () => {
                var t, e, n, l, a, o;
                let d = await (0, r.hH)(r.dl.ConfigurationSetting, i.q);
                return {
                    fromDomain: (null == (n = null == (e = null == (t = d.custom) ? void 0 : t.ALL_SITES) ? void 0 : e.BF_DOMAIN_SWAP) ? void 0 : n["from-domain"]) || "",
                    toDomain: (null == (o = null == (a = null == (l = d.custom) ? void 0 : l.ALL_SITES) ? void 0 : a.BF_DOMAIN_SWAP) ? void 0 : o["to-domain"]) || ""
                }
            };
            var u = n(6291),
                c = n(14790),
                s = n(71900);
            async function _(t) {
                var e;
                let n, i, _, {
                    entryId: g,
                    locale: p,
                    enableLivePreview: y = !1,
                    setAdData: f = () => {},
                    sx: h,
                    children: m,
                    shouldLinkWrapButtonOnly: v,
                    backgroundBannerImageAlignment: b,
                    backgroundBannerButtonAlignment: x,
                    isInsideCampaignSlider: k,
                    titleComponent: w,
                    analyticsTitlePrefix: C
                } = t;
                try {
                    _ = await (0, o.hX)(a.zc.AdBuilder, g, p, o.Az, y)
                } catch (t) {
                    return console.log("AdBuilder entry not found in ContentStack: ".concat(g, ". Skipping...")), null
                }
                if (!_ || !(0, u.K)(_)) return null;
                f(_);
                let {
                    costco_url: S,
                    enable_product_linked: A,
                    product_link: j
                } = _;
                if ("external_site" in S && S.external_site && !(n = await (0, o.ni)(a.zc.ModuleSettings, s.Tp, p, o.Az, y))) return console.log("'popupVisitExternalLink' module not found in ContentStack"), null;
                if (A && Array.isArray(j) && j.length && !(i = await (0, r.hH)(r.dl.ConfigurationSetting, s.fR))) return console.log("'clientId_costco_com' configuration setting not found in Configuration Stack"), null;
                let T = await (0, o.ni)(a.zc.SiteSettings, s.hm, p, o.Az, y);
                return T ? await d() ? (0, l.jsx)(c.AdBuilderUI, {
                    disableThirdPartyTracking: null == (e = _.privacy_toggle) ? void 0 : e.disable_third_party_tracking,
                    backgroundBannerButtonAlignment: x,
                    backgroundBannerImageAlignment: b,
                    configurationSetting: i,
                    data: _,
                    externalLinkModule: n,
                    isInsideCampaignSlider: k,
                    isLoading: !1,
                    locale: p,
                    shouldLinkWrapButtonOnly: v,
                    siteSetting: T,
                    sx: h,
                    titleComponent: w,
                    analyticsTitlePrefix: C,
                    children: m
                }, _.uid) : (console.log("brandFolderDomainSwapConfig not found in Configuration Stack"), null) : (console.log("'site_settings' module not found in ContentStack"), null)
            }
        },
        10889: function(t, e, n) {
            n.r(e), n.d(e, {
                AdSet: function() {
                    return tr
                }
            });
            var l = n(57437),
                a = n(86769),
                o = n(30970),
                i = n(40224),
                r = n(7302),
                d = n(79715),
                u = n(89766),
                c = n(6291),
                s = n(4369),
                _ = n(74572),
                g = n(42399),
                p = n(3795);
            let y = t => {
                    var e, n, a, o, i, r, d;
                    let {
                        entry: u,
                        locale: c,
                        children: s
                    } = t, g = null == (a = null == (n = null == (e = null == u ? void 0 : u.background_foreground_banner_group) ? void 0 : e.background_banner_reference) ? void 0 : n[0]) ? void 0 : a.uid, y = null == u ? void 0 : u.enable_background_foreground_banner, f = null == (o = null == u ? void 0 : u.background_foreground_banner_group) ? void 0 : o.background_banner_image_alignment, h = null == (i = null == u ? void 0 : u.background_foreground_banner_group) ? void 0 : i.background_banner_button_alignment;
                    return g && y ? (0, l.jsxs)(_.AdBuilder, {
                        backgroundBannerButtonAlignment: h,
                        backgroundBannerImageAlignment: f,
                        entryId: g,
                        locale: c,
                        shouldLinkWrapButtonOnly: !0,
                        titleComponent: y ? "h2" : void 0,
                        children: [(0, l.jsx)(p.CostcoBox, {
                            sx: {
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 4,
                                marginBottom: 2,
                                marginTop: 2,
                                width: "100%"
                            },
                            children: null == (d = null == (r = null == u ? void 0 : u.background_foreground_banner_group) ? void 0 : r.foreground_banner_group) ? void 0 : d.map((t, e) => {
                                var n;
                                let {
                                    foreground_banner_reference: a
                                } = t;
                                return (null == a ? void 0 : a.length) && (null == (n = a[0]) ? void 0 : n.uid) ? (0, l.jsx)(_.AdBuilder, {
                                    entryId: a[0].uid,
                                    isInsideCampaignSlider: !0,
                                    locale: c
                                }, "foreground_banner_".concat(e)) : null
                            })
                        }), s]
                    }) : (0, l.jsx)(l.Fragment, {
                        children: s
                    })
                },
                f = "half",
                h = "one_fourth_mix",
                m = "category",
                v = "rotating",
                b = "static";
            var x = n(95469);
            let k = t => t.length ? C(t) || t.length > 1 && "half" === t[0] ? "full_1" : "half" === t[0] ? "large_half_banner" : t[0] : null,
                w = t => {
                    let {
                        hasBackground: e,
                        hasTitle: n
                    } = t, l = e && !n;
                    return {
                        paddingTop: l ? r.oFH : "0px",
                        paddingLeft: l ? r.iPk : "0px",
                        paddingRight: l ? r.oFH : "0px"
                    }
                },
                C = t => {
                    let e = t.filter(t => t === h).length;
                    return 5 === t.length && (t[0] === f || t[4] === f) && 4 === e
                },
                S = t => {
                    let {
                        groupId: e,
                        title: n,
                        id: l
                    } = t;
                    (0, x.Y)().addAnchorLink({
                        groupId: e,
                        title: n,
                        id: l,
                        level: 1
                    })
                };
            var A = n(11782),
                j = n(35807);
            let T = t => {
                    let {
                        ads: e,
                        allAdTypes: n,
                        itemType: a
                    } = t;
                    if (!C(n)) return null;
                    let o = n.findIndex(t => t === f);
                    if (-1 === o) return null;
                    let i = e[o],
                        r = e.filter((t, e) => e !== o);
                    return (0, l.jsx)(p.CostcoBox, {
                        sx: {
                            containerType: "inline-size"
                        },
                        children: (0, l.jsxs)(j.ResponsiveContainer, {
                            children: [0 === o && (0, l.jsx)(p.CostcoBox, {
                                sx: {
                                    flex: 1
                                },
                                children: i
                            }), (0, l.jsx)(p.CostcoBox, {
                                sx: {
                                    flex: 1
                                },
                                children: (0, l.jsx)(A.$, {
                                    data: r,
                                    type: a
                                })
                            }), 4 === o && (0, l.jsx)(p.CostcoBox, {
                                sx: {
                                    flex: 1
                                },
                                children: i
                            })]
                        })
                    })
                },
                I = t => {
                    let e = {
                        display: "flex",
                        gap: r.aiS,
                        width: "100%"
                    };
                    if (!t) return e;
                    switch (t.ad_type) {
                        case "one_third":
                            return {
                                display: "flex",
                                gap: r.aiS,
                                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                                ["@media (min-width: ".concat(r.FZt, ")")]: {
                                    display: "grid"
                                }
                            };
                        case "one_fourth":
                            return {
                                display: "grid",
                                gap: r.aiS,
                                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                                ["@media (min-width: ".concat(r.FZt, ")")]: {
                                    gridTemplateColumns: "repeat(4, minmax(0, 1fr))"
                                }
                            };
                        default:
                            return e
                    }
                },
                B = {
                    imageContainerSx: {
                        padding: {
                            md: "0 ".concat(r.oFH),
                            sm: "0"
                        },
                        display: "flex",
                        justifyContent: "center",
                        width: "100%"
                    },
                    imageBackgroundContainerSx: {
                        height: "100%",
                        width: "100%"
                    },
                    imageSx: {
                        width: "100%",
                        height: "100%"
                    },
                    linkSx: {
                        width: "100%",
                        padding: 0
                    },
                    titleSx: {
                        fontSize: {
                            sm: r.YzP,
                            lg: r.aQT
                        }
                    }
                };
            var z = n(2295),
                L = n(57497),
                E = n(58609),
                P = n(26224),
                D = n(11451),
                F = n(30158),
                M = n(81644),
                N = n(96724),
                H = n(58140);
            async function U(t) {
                var e, n, f, x, j, U, R, K, O, Y, q, V;
                let W;
                let {
                    addToIndex: G,
                    entry: Q,
                    locale: X,
                    titleProps: J,
                    sx: Z = {},
                    enableLivePreview: $,
                    maxSlidesBySize: tt
                } = t;
                if (!Q || !(0, c.K)(Q)) return null;
                let te = null == (e = null == Q ? void 0 : Q.ad_set_heading_and_costco_url) ? void 0 : e.title,
                    tn = "".concat(Q.uid, "-").concat(Q.title.toLowerCase().replace(/ /g, "_"), "-title");
                G && te && S({
                    groupId: Q.uid,
                    title: te,
                    id: tn
                });
                let tl = { ...J,
                        titleId: tn
                    },
                    ta = [];

                function to(t) {
                    ta.push(t.ad_type), W || (W = t)
                }
                let ti = [];
                if (Q.item_type !== m) {
                    for (let t of Q.ad_content)
                        if (t.ad_builder_block && (null == (f = null == (n = t.ad_builder_block) ? void 0 : n.ad_builder_ref) ? void 0 : f.length)) try {
                            let e = await (0, _.AdBuilder)({
                                entryId: null == (j = null == (x = t.ad_builder_block) ? void 0 : x.ad_builder_ref[0]) ? void 0 : j.uid,
                                locale: Q.locale,
                                setAdData: to,
                                enableLivePreview: $,
                                sx: (null == Q ? void 0 : Q.ad_set_style) === v && Q.rotating_options.multi_item_carousel ? {
                                    height: "100%",
                                    paddingLeft: (null == Q ? void 0 : Q.enable_background_foreground_banner) ? void 0 : r.vdF
                                } : {}
                            });
                            ti.push(e)
                        } catch (t) {
                            console.error(t)
                        } else if (t.feature_highlight_card_block) {
                            let e = await (0, D.f)({
                                entryId: t.feature_highlight_card_block.feature_highlight_card_ref[0].uid,
                                locale: X,
                                enableLivePreview: $
                            });
                            ti.push(e)
                        } else if (t.feature_highlight_card_v2) {
                        let e = await (0, F.TY)({
                            entryId: t.feature_highlight_card_v2.feature_highlight_card_v2_ref[0].uid,
                            locale: X,
                            enableLivePreview: $
                        });
                        ti.push(e)
                    }
                }
                let {
                    category_set_title_alignment: tr
                } = Q.category_content, {
                    hex: td
                } = (null == (U = Q.ad_set_background) ? void 0 : U.title_background_color) || {}, {
                    title_background_transparency: tu
                } = Q.ad_set_background || {}, {
                    hex: tc
                } = (null == (R = Q.ad_set_background) ? void 0 : R.body_background_color) || {}, {
                    body_background_transparency: ts
                } = Q.ad_set_background || {}, t_ = Number(tu), tg = null != tr ? tr : void 0, tp = td && (0, u.a)(td, 1 - t_), ty = Number(ts), tf = tc && (0, u.a)(tc, 1 - ty), th = Q.item_type === m && Q.ad_set_style === b && (null == (K = Q.static_options) ? void 0 : K.display_style) === "four_corner";
                if (Q.item_type === m && Q.category_content && Q.category_content.category_items && Q.category_content.category_items.length) {
                    let t = Q.item_type === m && Q.ad_set_style === b && (null == (O = Q.static_options) ? void 0 : O.display_style) === "multi_row";
                    for (let e of Q.category_content.category_items) ti.push(await (0, P.A)({ ...th ? N.J : {},
                        ...t ? B : {},
                        background: void 0 !== tf || null !== tf,
                        entryId: e.uid,
                        foreground: void 0 !== tf || null !== tf,
                        locale: X,
                        enableLivePreview: $
                    }))
                }
                let tm = {
                    key_value: []
                };
                try {
                    tm = await (0, o.ni)(a.zc.ModuleSettings, "homepage_hero_carousel", X)
                } catch (t) {
                    tm = {
                        key_value: []
                    }
                }
                let tv = new i.t({
                        key_value: null == tm ? void 0 : tm.key_value
                    }),
                    tb = I(W),
                    tx = (0, l.jsx)(p.CostcoBox, {
                        sx: tb,
                        children: ti
                    });
                if (Q && Q.ad_set_style === v) {
                    if ("product" === Q.item_type && Q.product_display_style) {
                        let t = Q.product_content.product_list.map(t => t.itemNumber.toString());
                        return (0, l.jsx)(y, {
                            entry: Q,
                            locale: X,
                            children: (0, l.jsx)(d.Analytics, {
                                analyticData: {
                                    adItem: {
                                        style: "carousel",
                                        title: null == (Y = null == Q ? void 0 : Q.ad_set_heading_and_costco_url) ? void 0 : Y.title,
                                        type: "product"
                                    },
                                    title: Q.title
                                },
                                children: (0, l.jsx)(p.CostcoBox, {
                                    sx: {
                                        marginTop: 2,
                                        width: (null == Q ? void 0 : Q.enable_background_foreground_banner) ? "100%" : "calc(100% - ".concat(r.ODt, ")")
                                    },
                                    children: (0, l.jsx)(z.ProductTileCarouselClient, {
                                        inventoryAware: Q.product_display_style.inventory_aware_listings,
                                        productTileContainerSx: {
                                            backgroundColor: r.W3Q,
                                            borderRadius: 2,
                                            minHeight: "100%",
                                            padding: 2
                                        },
                                        randomizeItems: Q.rotating_options.randomize_items,
                                        showActionButton: Q.product_display_style.show_action_button,
                                        showReviews: Q.product_display_style.show_reviews,
                                        slideGapSizes: {
                                            desktop: "16px",
                                            mobile: "8px",
                                            tablet: "12px"
                                        },
                                        variant: Q.product_display_style.product_card_display_style,
                                        itemNumbers: t,
                                        locale: Q.locale,
                                        sx: Z,
                                        testId: "CostcoAdSet",
                                        titleProps: tl,
                                        maxSlidesBySize: tt,
                                        product_tile_data_source: Q.product_display_style.product_tile_data_source
                                    })
                                })
                            })
                        })
                    }
                    let t = tv.key_value;
                    tx = (0, l.jsx)(d.Analytics, {
                        analyticData: {
                            adItem: {
                                style: "carousel"
                            }
                        },
                        children: (0, l.jsx)(p.CostcoBox, {
                            sx: w({
                                hasBackground: Q.custom_background,
                                hasTitle: !!J.title
                            }),
                            children: (0, l.jsx)(s.Carousel, {
                                itemsPerSlide: Q.rotating_options.multi_item_carousel ? {
                                    desktop: 5,
                                    mobile: 2,
                                    tablet: 3
                                } : 1,
                                contentTypeJoinder: t.contenttypejoinder,
                                contentTypeLabel: t.contenttypelabel,
                                isAutoplay: Q.rotating_options.enable_autoplay,
                                items: ti,
                                label: t.label,
                                nextLabel: t.nextlabel,
                                pauseLabel: t.pauselabel,
                                playLabel: t.playlabel,
                                previousLabel: t.previouslabel,
                                randomizeItems: Q.rotating_options.randomize_items,
                                slideGap: (null == Q ? void 0 : Q.enable_background_foreground_banner) ? r.oFH : r.vdF
                            })
                        })
                    })
                }
                if (W && W.ad_type === h && (tx = (0, l.jsx)(d.Analytics, {
                        analyticData: {
                            adItem: {
                                style: "banner"
                            }
                        },
                        children: (0, l.jsx)(A.$, {
                            data: ti,
                            type: Q.item_type
                        })
                    })), C(ta) && (tx = (0, l.jsx)(T, {
                        ads: ti,
                        allAdTypes: ta,
                        itemType: Q.item_type
                    })), Q.item_type === m) {
                    if (Q.ad_set_style === v) {
                        let t = ti.filter(t => null !== t);
                        return (0, l.jsx)(y, {
                            entry: Q,
                            locale: X,
                            children: (0, l.jsx)(d.Analytics, {
                                analyticData: {
                                    adItem: {
                                        style: "carousel"
                                    }
                                },
                                children: (0, l.jsxs)(H.AdSetContainer, {
                                    sx: { ...Z,
                                        width: "100%"
                                    },
                                    "data-layout": W ? null == W ? void 0 : W.ad_type : void 0,
                                    ignoreBackground: !0,
                                    children: [(0, l.jsx)(g.AdSetTitle, { ...tl,
                                        isAdSetCostco: !0
                                    }), (0, l.jsx)(L.CategorySet, {
                                        enableAutoplay: Q.rotating_options.enable_autoplay,
                                        enableTwoRowDisplay: Q.rotating_options.enable_two_row_display,
                                        randomizeItems: Q.rotating_options.randomize_items,
                                        ads: t,
                                        titleId: tn
                                    })]
                                })
                            })
                        })
                    }
                    if (Q.ad_set_style === b) {
                        let {
                            static_options: t
                        } = Q, {
                            maximum_tiles_per_row: e
                        } = t || {};
                        return th ? (0, l.jsx)(y, {
                            entry: Q,
                            locale: X,
                            children: (0, l.jsx)(d.Analytics, {
                                analyticData: {
                                    adItem: {
                                        style: "banner"
                                    }
                                },
                                children: (0, l.jsx)(M.o, {
                                    titleProps: { ...tl,
                                        titleAlignment: tg,
                                        titleBackgroundColor: Q.custom_background ? tp : void 0
                                    },
                                    bodyBackgroundColor: tf,
                                    categoryTiles: ti,
                                    ignoreBackground: !Q.custom_background
                                })
                            })
                        }) : (0, l.jsx)(y, {
                            entry: Q,
                            locale: X,
                            children: (0, l.jsx)(d.Analytics, {
                                analyticData: {
                                    adItem: {
                                        style: "banner"
                                    }
                                },
                                children: (0, l.jsxs)(H.AdSetContainer, {
                                    sx: { ...Z,
                                        marginTop: (null == Q ? void 0 : Q.enable_background_foreground_banner) ? 2 : null == Z ? void 0 : Z.marginTop
                                    },
                                    bodyBackgroundColor: tf,
                                    "data-layout": k(ta),
                                    ignoreBackground: !Q.custom_background,
                                    children: [tl && (0, l.jsx)(g.AdSetTitle, { ...tl,
                                        isAdSetCostco: !0,
                                        titleAlignment: tg,
                                        titleBackgroundColor: tp
                                    }), (0, l.jsx)(E.MultiRow, {
                                        ads: ti,
                                        maxTilesPerRow: e
                                    })]
                                })
                            })
                        })
                    }
                }
                return Q.ad_content && ((null == (q = Q.ad_content[0]) ? void 0 : q.feature_highlight_card_block) || (null == (V = Q.ad_content[0]) ? void 0 : V.feature_highlight_card_v2)) && (tx = (0, l.jsx)(H.HighlightCardGrid, {
                    children: ti
                })), (0, l.jsx)(y, {
                    entry: Q,
                    locale: X,
                    children: (0, l.jsx)(d.Analytics, {
                        analyticData: {
                            adItem: {
                                style: "banner"
                            }
                        },
                        children: (0, l.jsxs)(H.AdSetContainer, {
                            sx: { ...Z,
                                marginTop: (null == Q ? void 0 : Q.enable_background_foreground_banner) ? 2 : null == Z ? void 0 : Z.marginTop
                            },
                            bodyBackgroundColor: tf,
                            "data-layout": k(ta),
                            ignoreBackground: !Q.custom_background,
                            children: [tl && (0, l.jsx)(g.AdSetTitle, { ...tl,
                                isAdSetCostco: !0,
                                titleAlignment: tg,
                                titleBackgroundColor: tp
                            }), tx]
                        })
                    })
                })
            }
            var R = n(50621),
                K = n(88176),
                O = n(71900),
                Y = n(59011),
                q = n(19421),
                V = n(42804);
            let W = async t => {
                let e, {
                        entry: n,
                        adButlerConfigData: i,
                        titleProps: r,
                        isSearchPage: d = !1,
                        keyword: u,
                        locale: c,
                        maxSlidesBySize: s
                    } = t,
                    {
                        third_party_curation: _
                    } = n || {},
                    {
                        adbutler_extension: g
                    } = _,
                    {
                        siteId: p,
                        kw: y
                    } = i,
                    f = null;
                if (!g) return null;
                if (!p) return console.error("Missing siteId from the ad butler config in content stack"), null;
                if (!d) try {
                    let {
                        placements: t,
                        status: e
                    } = await (0, q.Kj)(p, g, null, u || y);
                    e !== Y.B9 && (f = t)
                } catch (t) {
                    console.error("Error occured in fetching ad butler ads for siteId: ".concat(p, " and zoneId: ").concat(g))
                }
                let h = null;
                try {
                    h = await (0, o.ni)(a.zc.ModuleSettings, "homepage_hero_carousel", c)
                } catch (t) {
                    h = {
                        key_value: []
                    }
                }
                try {
                    e = await (0, o.ni)(a.zc.ModuleSettings, O.Tp, c)
                } catch (t) {
                    console.error("Failed loading externalLinkModule in ad butler component", t)
                }
                let m = h;
                return (0, l.jsx)(V.AdButlerClient, {
                    adButlerConfig: i,
                    adData: f,
                    entry: n,
                    externalLinkModule: e,
                    isSearchPage: d,
                    keyword: u,
                    locale: c,
                    moduleSettings: m,
                    titleProps: r,
                    maxSlidesBySize: s
                })
            };
            var G = n(69579),
                Q = n(41998),
                X = n(14628);

            function J(t) {
                var e;
                let {
                    lucidworks_placement_name: n
                } = (null == (e = null == t ? void 0 : t.entry) ? void 0 : e.third_party_curation) || {}, a = {
                    CollectionCarousel: X.CollectionCarousel
                }[n || ""];
                return a ? (0, l.jsx)(a, { ...t
                }) : null
            }
            async function Z(t) {
                var e, n;
                let {
                    entry: o,
                    locale: i,
                    titleProps: r,
                    isSearchPage: d = !1,
                    isCategoryPage: u = !1,
                    isProductDetailsPage: s = !1,
                    maxSlides: _,
                    maxSlidesBySize: g,
                    productTileSx: p,
                    carouselContainerSx: y,
                    sx: f,
                    contextData: h
                } = t;
                if (!(0, c.K)(o)) return null;
                let {
                    item_curation: m
                } = o, v = m === Y.TV, b = m === Y.R0, x = m === Y.rY, k = m === Y.kO;
                if (v) return (0, l.jsx)(Q.CriteoAdSet, {
                    carouselContainerSx: y,
                    contentStackEntry: o,
                    isCategoryPage: u,
                    isProductDetailsPage: s,
                    isSearchPage: d,
                    locale: i,
                    maxSlides: _,
                    maxSlidesBySize: g,
                    productTileSx: p,
                    sx: f,
                    titleProps: r
                });
                if (b) return (0, l.jsx)(K.QueryParamsProvider, {
                    children: (0, l.jsx)(G.AdobeAdSet, {
                        carouselContainerSx: y,
                        contextData: h,
                        entry: o,
                        isProductDetailsPage: s,
                        locale: i,
                        maxSlides: _,
                        maxSlidesBySize: g,
                        productTileSx: p,
                        sx: f,
                        titleProps: r
                    })
                });
                if (x) {
                    let t = await (0, R.ms)(a.zc.ServiceConfiguration, Y.Tz),
                        u = "en-us" === i ? "USBC" : "CABC",
                        c = t.required_request_parameters[u].ID,
                        s = null == (n = null == (e = t.required_request_parameters[u]) ? void 0 : e.kw) ? void 0 : n[i];
                    return (0, l.jsx)(K.QueryParamsProvider, {
                        children: (0, l.jsx)(W, {
                            adButlerConfigData: {
                                kw: s,
                                siteId: c
                            },
                            entry: o,
                            isSearchPage: d,
                            locale: i,
                            titleProps: r,
                            maxSlidesBySize: g
                        })
                    })
                }
                return k ? (0, l.jsx)(J, {
                    isProductDetailsPage: s,
                    entry: o,
                    locale: i,
                    contextData: h,
                    titleProps: r
                }) : null
            }
            var $ = n(55054),
                tt = n(98817),
                te = n(14145),
                tn = n(25566);
            let tl = async t => {
                let {
                    locale: e,
                    children: n
                } = t, i = await (0, o.ni)(a.zc.ModuleSettings, "add_to_list_popup", e);
                if (!i) throw Error("Missing Add to List Module Settings");
                let r = !1;
                try {
                    r = (await (0, $.d)(tt.zP, tn.env.APPNAME)).isEnabled
                } catch (t) {
                    console.error("Error fetching feature toggle: ".concat(tt.zP, " from ConfigStack."), t)
                }
                return (0, l.jsx)(te.AddToListProviderClient, {
                    contentStackValues: i,
                    enableModernApis: r,
                    children: n
                })
            };
            tl.displayName = "AddToListProvider";
            var ta = n(25427);
            let to = "AdSet",
                ti = (t, e) => {
                    let n = e.item_type === m && e.ad_set_style !== v;
                    if ("ad_set_costco" === t && e.item_type === m) return {
                        alignItems: null,
                        ...n ? {
                            minHeight: "100%"
                        } : {}
                    }
                };
            async function tr(t) {
                let {
                    addToIndex: e = !1,
                    contentType: n,
                    entryId: u,
                    enableLivePreview: c = !1,
                    locale: s,
                    isSearchPage: _ = !1,
                    isCategoryPage: g = !1,
                    isProductDetailsPage: y = !1,
                    maxSlides: f,
                    maxSlidesBySize: h,
                    productTileSx: m,
                    carouselContainerSx: v,
                    sx: b,
                    contextData: x,
                    analyticsTitlePrefix: k
                } = t;
                if (!("ad_set_3rd_party" === n || "ad_set_costco" === n)) throw Error("Unsupported content type provided to AdSet: ".concat(n, "."));
                let w = null;
                try {
                    w = await (0, o.hX)(n, u, s, o.Az, c)
                } catch (t) {
                    return console.error("Missing AdSet entry in ContentStack: ".concat(u, ". Skipping...")), null
                }
                if (!(null == w ? void 0 : w.ad_set_heading_and_costco_url)) return null;
                let C = await (0, o.ni)(a.zc.ModuleSettings, "ad_set", s, o.Az, c);
                if (!C) return console.error("Module settings not found."), null;
                let S = new i.t({
                        composable_window: [],
                        key_value: C.key_value
                    }),
                    {
                        title: A,
                        url: j,
                        external_site: T
                    } = w.ad_set_heading_and_costco_url,
                    I = {
                        href: j,
                        isExternalSite: T,
                        linkLabel: S.getKeyValueItem("linklabel"),
                        title: A
                    },
                    B = "ad_set_3rd_party" === n ? w.item_curation : "costco",
                    z = "ad_set_3rd_party" === n ? (0, l.jsx)(Z, {
                        carouselContainerSx: v,
                        contextData: x || {},
                        entry: w,
                        isCategoryPage: g,
                        isProductDetailsPage: y,
                        isSearchPage: _,
                        locale: s,
                        maxSlides: f,
                        maxSlidesBySize: h,
                        productTileSx: m,
                        sx: b,
                        titleProps: I
                    }) : await (0, ta.c)({
                        Component: U,
                        componentProps: {
                            addToIndex: e,
                            entry: w,
                            locale: s,
                            sx: b,
                            titleProps: I,
                            enableLivePreview: c,
                            maxSlidesBySize: h
                        },
                        shouldAwait: e
                    }),
                    L = w.title;
                k && (L = "".concat(k, " | ").concat(L));
                let E = "ad_set_3rd_party" === n ? {
                        adItem: {
                            title: A,
                            type: w.item_type
                        },
                        itemCuration: B,
                        title: L
                    } : {
                        adItem: {
                            type: w.item_type
                        },
                        itemCuration: B,
                        title: L
                    },
                    P = ti(n, w) || {};
                return (0, l.jsx)(p.CostcoBox, {
                    sx: {
                        display: "flex",
                        flexWrap: "wrap",
                        gap: r.ODt,
                        justifyContent: "center",
                        width: "100%",
                        ...P
                    },
                    "data-testid": "".concat(to, "-all-").concat(w.title.toLowerCase().replace(/ /g, "_")),
                    children: (0, l.jsx)(tl, {
                        locale: s,
                        children: (0, l.jsx)(d.Analytics, {
                            analyticData: E,
                            children: z
                        })
                    })
                })
            }
            tr.displayName = to
        },
        26224: function(t, e, n) {
            n.d(e, {
                A: function() {
                    return d
                }
            });
            var l = n(57437),
                a = n(86769),
                o = n(30970),
                i = n(97416),
                r = n(15820);
            let d = async t => {
                var e, n, d, u, c;
                let s;
                let {
                    background: _,
                    foreground: g,
                    entryId: p,
                    locale: y = "en-us",
                    enableLivePreview: f
                } = t;
                try {
                    s = await (0, o.hX)(a.zc.Category, p, y, o.Az, f)
                } catch (t) {
                    return console.error("Category Tile error: entry could not be fetched entryId: ".concat(p)), null
                }
                if (!s) return null;
                let h = {
                    disableThirdPartyTracking: null == (e = null == s ? void 0 : s.privacy_toggle) ? void 0 : e.disable_third_party_tracking,
                    hrefUrl: null == (n = null == s ? void 0 : s.category_costco_url) ? void 0 : n.url,
                    imageUrl: null == (u = null == (d = null == s ? void 0 : s.category_icon) ? void 0 : d[0]) ? void 0 : u.url,
                    subTitle: null == s ? void 0 : s.category_sub_title,
                    title: null == (c = null == s ? void 0 : s.category_costco_url) ? void 0 : c.title
                };
                return h.hrefUrl && h.imageUrl && (g || _) ? (0, l.jsx)(i.d, { ...t,
                    background: _,
                    categoryData: h,
                    foreground: g
                }) : (console.error(r.Y), null)
            };
            d.displayName = "CategoryTile"
        },
        30158: function(t, e, n) {
            n.d(e, {
                TY: function() {
                    return d
                }
            });
            var l = n(57437),
                a = n(86769),
                o = n(30970),
                i = n(6291),
                r = n(94220);
            async function d(t) {
                let {
                    entryId: e,
                    locale: n,
                    enableLivePreview: d = !1,
                    entryData: u,
                    analyticsTitlePrefix: c
                } = t, s = null != u ? u : null;
                return (s || (s = await (0, o.hX)(a.zc.FeatureHighlightCardV2, e, n, o.Az, d)), s && (0, i.K)(s)) ? (0, l.jsx)(r.FeatureHighlightCardV2UI, {
                    data: s,
                    analyticsTitlePrefix: c
                }, e) : null
            }
        },
        25427: function(t, e, n) {
            n.d(e, {
                c: function() {
                    return a
                }
            });
            var l = n(2265);
            async function a(t) {
                let {
                    Component: e,
                    componentProps: n,
                    key: a,
                    shouldAwait: o
                } = t;
                return o ? await e(n) : (0, l.createElement)(e, { ...n,
                    key: a
                })
            }
        },
        65571: function(t, e, n) {
            n.d(e, {
                q: function() {
                    return l
                }
            });
            let l = "browse_app_config"
        },
        6291: function(t, e, n) {
            n.d(e, {
                K: function() {
                    return l
                }
            });
            let l = function() {
                let {
                    platform_config_block: t
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = (null == t ? void 0 : t.platform_applicability) || (null == t ? void 0 : t.platform_aplicability);
                return !e || "mobile_web" === e || "only_web" === e
            }
        },
        55054: function(t, e, n) {
            n.d(e, {
                d: function() {
                    return i
                }
            });
            var l = n(86769),
                a = n(50621),
                o = n(25566);
            let i = async (t, e) => {
                var n, i, r, d, u;
                let c = {
                    isEnabled: !1,
                    lastUpdated: null
                };
                try {
                    let u = await (0, a.ms)(l.zc.FeatureToggle, t);
                    if (c = {
                            isEnabled: !!u.feature_on,
                            lastUpdated: u.updated_at ? new Date(u.updated_at) : null
                        }, !e || !o.env.SITE || !(null == (i = null == (n = u.enabled_applications) ? void 0 : n.applications) ? void 0 : i.length)) return c;
                    let s = o.env.SITE,
                        _ = "".concat(e.toLowerCase(), "-").concat(s.toLowerCase());
                    return (null == (d = null == (r = u.enabled_applications) ? void 0 : r.applications) ? void 0 : d.length) > 0 && !u.enabled_applications.applications.includes(_.toLowerCase()) && (c = {
                        isEnabled: !1,
                        lastUpdated: null
                    }), c
                } catch (n) {
                    return console.error('Error fetching feature flag: "'.concat(t, '" for application: "').concat(e.toLowerCase(), "-").concat(null == (u = o.env.SITE) ? void 0 : u.toLowerCase(), '"')), c
                }
            }
        }
    }
]);