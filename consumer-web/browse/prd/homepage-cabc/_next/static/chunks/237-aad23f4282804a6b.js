(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [237], {
        71860: function(t, e, r) {
            var n, o = r(25566);
            self, n = () => {
                var t, e;
                return t = {
                        42: (t, e, r) => {
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.default = void 0;
                            var n, o, i = function(t, e) {
                                if (t && t.__esModule) return t;
                                if (null === t || "object" != s(t) && "function" != typeof t) return {
                                    default: t
                                };
                                var r = a(void 0);
                                if (r && r.has(t)) return r.get(t);
                                var n = {
                                        __proto__: null
                                    },
                                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                for (var i in t)
                                    if ("default" !== i && ({}).hasOwnProperty.call(t, i)) {
                                        var c = o ? Object.getOwnPropertyDescriptor(t, i) : null;
                                        c && (c.get || c.set) ? Object.defineProperty(n, i, c) : n[i] = t[i]
                                    }
                                return n.default = t, r && r.set(t, n), n
                            }(r(925));

                            function a(t) {
                                if ("function" != typeof WeakMap) return null;
                                var e = new WeakMap,
                                    r = new WeakMap;
                                return (a = function(t) {
                                    return t ? r : e
                                })(t)
                            }

                            function s(t) {
                                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                    return typeof t
                                } : function(t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                            }
                            e.default = (n = function t() {
                                return function(t, e) {
                                    if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                                }(this, t), this._query = {}, this.only = i.transform("only"), this.except = i.transform("except"), this
                            }, o = [{
                                key: "setCacheProvider",
                                value: function(t) {
                                    return t && "object" === s(t) && (this.provider = t), this
                                }
                            }, {
                                key: "setCachePolicy",
                                value: function(t) {
                                    return "number" == typeof t && t >= -1 && t < 4 ? this._query ? this.queryCachePolicy = t : this.cachePolicy = t : this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide the valid policy"), this
                                }
                            }, {
                                key: "includeReference",
                                value: function() {
                                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                                    if (Array.isArray(e) || "string" == typeof e) {
                                        if (arguments.length)
                                            for (var n = 0; n < arguments.length; n++) this._query.include = this._query.include || [], this._query.include = this._query.include.concat(arguments[n]);
                                        return this
                                    }
                                    this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Argument should be a String or an Array.")
                                }
                            }, {
                                key: "language",
                                value: function(t) {
                                    if (t && "string" == typeof t) return this._query.locale = t, this;
                                    this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Argument should be a String.")
                                }
                            }, {
                                key: "addQuery",
                                value: function(t, e) {
                                    if (t && e && "string" == typeof t) return this._query[t] = e, this;
                                    this.fetchOptions.debug && this.fetchOptions.logHandler("error", "First argument should be a String.")
                                }
                            }, {
                                key: "includeEmbeddedItems",
                                value: function() {
                                    return this._query.include_embedded_items = ["BASE"], this
                                }
                            }, {
                                key: "includeSchema",
                                value: function() {
                                    return this._query.include_schema = !0, this
                                }
                            }, {
                                key: "includeReferenceContentTypeUID",
                                value: function() {
                                    return this._query.include_reference_content_type_uid = !0, this
                                }
                            }, {
                                key: "includeFallback",
                                value: function() {
                                    return this._query.include_fallback = !0, this
                                }
                            }, {
                                key: "includeBranch",
                                value: function() {
                                    return this._query.include_branch = !0, this
                                }
                            }, {
                                key: "includeMetadata",
                                value: function() {
                                    return this._query.include_metadata = !0, this
                                }
                            }, {
                                key: "includeContentType",
                                value: function() {
                                    return this._query.include_content_type = !0, this
                                }
                            }, {
                                key: "includeOwner",
                                value: function() {
                                    return console.warn("The includeOwner function is deprecated."), this._query.include_owner = !0, this
                                }
                            }, {
                                key: "toJSON",
                                value: function() {
                                    return this.tojson = !0, this
                                }
                            }, {
                                key: "addParam",
                                value: function(t, e) {
                                    if (t && e && "string" == typeof t && "string" == typeof e) return this._query[t] = e, this;
                                    this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid parameters.")
                                }
                            }, {
                                key: "variants",
                                value: function(t) {
                                    return Array.isArray(t) && t.length > 0 ? this.headers["x-cs-variant-uid"] = t.join(",") : this.headers["x-cs-variant-uid"] = t, this
                                }
                            }, {
                                key: "fetch",
                                value: function(t) {
                                    var e = this.config.host + ":" + this.config.port;
                                    if (this.live_preview && !0 === this.live_preview.enable && this.live_preview.live_preview && "init" !== this.live_preview.live_preview && (e = this.live_preview.host), this.entry_uid) {
                                        this.requestParams = {
                                            method: "POST",
                                            headers: i.mergeDeep({}, this.headers),
                                            url: this.config.protocol + "://" + e + "/" + this.config.version + this.config.urls.content_types + this.content_type_uid + this.config.urls.entries + this.entry_uid,
                                            body: {
                                                _method: "GET",
                                                query: this._query
                                            }
                                        };
                                        var r = i.mergeDeep(this.fetchOptions, t);
                                        return i.sendRequest(i.mergeDeep({}, this), r)
                                    }
                                    this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide an entry uid. e.g. .Entry('asset_uid')")
                                }
                            }], function(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, function(t) {
                                        var e = function(t) {
                                            if ("object" != s(t) || !t) return t;
                                            var e = t[Symbol.toPrimitive];
                                            if (void 0 !== e) {
                                                var r = e.call(t, "string");
                                                if ("object" != s(r)) return r;
                                                throw TypeError("@@toPrimitive must return a primitive value.")
                                            }
                                            return String(t)
                                        }(t);
                                        return "symbol" == s(e) ? e : e + ""
                                    }(n.key), n)
                                }
                            }(n.prototype, o), Object.defineProperty(n, "prototype", {
                                writable: !1
                            }), n)
                        },
                        54: (t, e, r) => {
                            var n;
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.default = void 0, ((n = r(154)) && n.__esModule ? n : {
                                default: n
                            }).default.polyfill(), e.default = fetch
                        },
                        94: (t, e, r) => {
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.get = function(t) {
                                var e = o.default.getItem(t);
                                try {
                                    e = JSON.parse(e)
                                } catch (t) {
                                    return e
                                }
                                return e || null
                            }, e.getKeys = function() {
                                return o.default ? Object.keys(o.default) : []
                            }, e.getStorage = function() {
                                return o.default || null
                            }, e.set = function(t, e) {
                                try {
                                    "object" === i(e) ? o.default.setItem(t, JSON.stringify(e)) : o.default.setItem(t, e)
                                } catch (t) {}
                            };
                            var n, o = (n = r(514)) && n.__esModule ? n : {
                                default: n
                            };

                            function i(t) {
                                return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                    return typeof t
                                } : function(t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                            }
                        },
                        154: (t, e, r) => {
                            var n, i, a = r(444);

                            function s(t) {
                                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                    return typeof t
                                } : function(t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                            }
                            i = function() {
                                function t(t) {
                                    return "function" == typeof t
                                }
                                var e = Array.isArray ? Array.isArray : function(t) {
                                        return "[object Array]" === Object.prototype.toString.call(t)
                                    },
                                    r = 0,
                                    n = void 0,
                                    i = void 0,
                                    c = function(t, e) {
                                        h[r] = t, h[r + 1] = e, 2 === (r += 2) && (i ? i(v) : O())
                                    },
                                    u = "undefined" != typeof window ? window : void 0,
                                    l = u || {},
                                    f = l.MutationObserver || l.WebKitMutationObserver,
                                    y = "undefined" == typeof self && void 0 !== o && "[object process]" === ({}).toString.call(o),
                                    p = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                                function d() {
                                    var t = setTimeout;
                                    return function() {
                                        return t(v, 1)
                                    }
                                }
                                var h = Array(1e3);

                                function v() {
                                    for (var t = 0; t < r; t += 2)(0, h[t])(h[t + 1]), h[t] = void 0, h[t + 1] = void 0;
                                    r = 0
                                }
                                var _, m, b, g, O = void 0;

                                function w(t, e) {
                                    var r = this,
                                        n = new this.constructor(k);
                                    void 0 === n[T] && D(n);
                                    var o = r._state;
                                    if (o) {
                                        var i = arguments[o - 1];
                                        c(function() {
                                            return R(o, n, i, r._result)
                                        })
                                    } else C(r, n, t, e);
                                    return n
                                }

                                function E(t) {
                                    if (t && "object" === s(t) && t.constructor === this) return t;
                                    var e = new this(k);
                                    return j(e, t), e
                                }
                                y ? O = function() {
                                    return o.nextTick(v)
                                } : f ? (m = 0, b = new f(v), g = document.createTextNode(""), b.observe(g, {
                                    characterData: !0
                                }), O = function() {
                                    g.data = m = ++m % 2
                                }) : p ? ((_ = new MessageChannel).port1.onmessage = v, O = function() {
                                    return _.port2.postMessage(0)
                                }) : O = void 0 === u ? function() {
                                    try {
                                        var t = Function("return this")().require("vertx");
                                        return void 0 !== (n = t.runOnLoop || t.runOnContext) ? function() {
                                            n(v)
                                        } : d()
                                    } catch (t) {
                                        return d()
                                    }
                                }() : d();
                                var T = Math.random().toString(36).substring(2);

                                function k() {}
                                var P = void 0;

                                function N(e, r, n) {
                                    r.constructor === e.constructor && n === w && r.constructor.resolve === E ? 1 === r._state ? q(e, r._result) : 2 === r._state ? A(e, r._result) : C(r, void 0, function(t) {
                                        return j(e, t)
                                    }, function(t) {
                                        return A(e, t)
                                    }) : void 0 === n ? q(e, r) : t(n) ? c(function(t) {
                                        var e = !1,
                                            o = function(n, o) {
                                                try {
                                                    n.call(o, function(n) {
                                                        e || (e = !0, r !== n ? j(t, n) : q(t, n))
                                                    }, function(r) {
                                                        e || (e = !0, A(t, r))
                                                    })
                                                } catch (t) {
                                                    return t
                                                }
                                            }(n, r, 0, 0, t._label);
                                        !e && o && (e = !0, A(t, o))
                                    }, e) : q(e, r)
                                }

                                function j(t, e) {
                                    if (t === e) A(t, TypeError("You cannot resolve a promise with itself"));
                                    else if (r = s(e), null === e || "object" !== r && "function" !== r) q(t, e);
                                    else {
                                        var r, n = void 0;
                                        try {
                                            n = e.then
                                        } catch (e) {
                                            return void A(t, e)
                                        }
                                        N(t, e, n)
                                    }
                                }

                                function S(t) {
                                    t._onerror && t._onerror(t._result), I(t)
                                }

                                function q(t, e) {
                                    t._state === P && (t._result = e, t._state = 1, 0 !== t._subscribers.length && c(I, t))
                                }

                                function A(t, e) {
                                    t._state === P && (t._state = 2, t._result = e, c(S, t))
                                }

                                function C(t, e, r, n) {
                                    var o = t._subscribers,
                                        i = o.length;
                                    t._onerror = null, o[i] = e, o[i + 1] = r, o[i + 2] = n, 0 === i && t._state && c(I, t)
                                }

                                function I(t) {
                                    var e = t._subscribers,
                                        r = t._state;
                                    if (0 !== e.length) {
                                        for (var n = void 0, o = void 0, i = t._result, a = 0; a < e.length; a += 3) n = e[a], o = e[a + r], n ? R(r, n, o, i) : o(i);
                                        t._subscribers.length = 0
                                    }
                                }

                                function R(e, r, n, o) {
                                    var i = t(n),
                                        a = void 0,
                                        s = void 0,
                                        c = !0;
                                    if (i) {
                                        try {
                                            a = n(o)
                                        } catch (t) {
                                            c = !1, s = t
                                        }
                                        if (r === a) return void A(r, TypeError("A promises callback cannot return that same promise."))
                                    } else a = o;
                                    r._state !== P || (i && c ? j(r, a) : !1 === c ? A(r, s) : 1 === e ? q(r, a) : 2 === e && A(r, a))
                                }
                                var L = 0;

                                function D(t) {
                                    t[T] = L++, t._state = void 0, t._result = void 0, t._subscribers = []
                                }
                                var x = function() {
                                        function t(t, r) {
                                            this._instanceConstructor = t, this.promise = new t(k), this.promise[T] || D(this.promise), e(r) ? (this.length = r.length, this._remaining = r.length, this._result = Array(this.length), 0 === this.length ? q(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(r), 0 === this._remaining && q(this.promise, this._result))) : A(this.promise, Error("Array Methods must be provided an Array"))
                                        }
                                        return t.prototype._enumerate = function(t) {
                                            for (var e = 0; this._state === P && e < t.length; e++) this._eachEntry(t[e], e)
                                        }, t.prototype._eachEntry = function(t, e) {
                                            var r = this._instanceConstructor,
                                                n = r.resolve;
                                            if (n === E) {
                                                var o = void 0,
                                                    i = void 0,
                                                    a = !1;
                                                try {
                                                    o = t.then
                                                } catch (t) {
                                                    a = !0, i = t
                                                }
                                                if (o === w && t._state !== P) this._settledAt(t._state, e, t._result);
                                                else if ("function" != typeof o) this._remaining--, this._result[e] = t;
                                                else if (r === M) {
                                                    var s = new r(k);
                                                    a ? A(s, i) : N(s, t, o), this._willSettleAt(s, e)
                                                } else this._willSettleAt(new r(function(e) {
                                                    return e(t)
                                                }), e)
                                            } else this._willSettleAt(n(t), e)
                                        }, t.prototype._settledAt = function(t, e, r) {
                                            var n = this.promise;
                                            n._state === P && (this._remaining--, 2 === t ? A(n, r) : this._result[e] = r), 0 === this._remaining && q(n, this._result)
                                        }, t.prototype._willSettleAt = function(t, e) {
                                            var r = this;
                                            C(t, void 0, function(t) {
                                                return r._settledAt(1, e, t)
                                            }, function(t) {
                                                return r._settledAt(2, e, t)
                                            })
                                        }, t
                                    }(),
                                    M = function() {
                                        function e(t) {
                                            this[T] = L++, this._result = this._state = void 0, this._subscribers = [], k !== t && ("function" != typeof t && function() {
                                                throw TypeError("You must pass a resolver function as the first argument to the promise constructor")
                                            }(), this instanceof e ? function(t, e) {
                                                try {
                                                    e(function(e) {
                                                        j(t, e)
                                                    }, function(e) {
                                                        A(t, e)
                                                    })
                                                } catch (e) {
                                                    A(t, e)
                                                }
                                            }(this, t) : function() {
                                                throw TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                                            }())
                                        }
                                        return e.prototype.catch = function(t) {
                                            return this.then(null, t)
                                        }, e.prototype.finally = function(e) {
                                            var r = this.constructor;
                                            return t(e) ? this.then(function(t) {
                                                return r.resolve(e()).then(function() {
                                                    return t
                                                })
                                            }, function(t) {
                                                return r.resolve(e()).then(function() {
                                                    throw t
                                                })
                                            }) : this.then(e, e)
                                        }, e
                                    }();
                                return M.prototype.then = w, M.all = function(t) {
                                    return new x(this, t).promise
                                }, M.race = function(t) {
                                    var r = this;
                                    return new r(e(t) ? function(e, n) {
                                        for (var o = t.length, i = 0; i < o; i++) r.resolve(t[i]).then(e, n)
                                    } : function(t, e) {
                                        return e(TypeError("You must pass an array to race."))
                                    })
                                }, M.resolve = E, M.reject = function(t) {
                                    var e = new this(k);
                                    return A(e, t), e
                                }, M._setScheduler = function(t) {
                                    i = t
                                }, M._setAsap = function(t) {
                                    c = t
                                }, M._asap = c, M.polyfill = function() {
                                    var t = void 0;
                                    if (void 0 !== a) t = a;
                                    else if ("undefined" != typeof self) t = self;
                                    else try {
                                        t = Function("return this")()
                                    } catch (t) {
                                        throw Error("polyfill failed because global object is unavailable in this environment")
                                    }
                                    var e = t.Promise;
                                    if (e) {
                                        var r = null;
                                        try {
                                            r = Object.prototype.toString.call(e.resolve())
                                        } catch (t) {}
                                        if ("[object Promise]" === r && !e.cast) return
                                    }
                                    t.Promise = M
                                }, M.Promise = M, M
                            }, "object" === s(e) ? t.exports = i() : void 0 === (n = i.call(e, r, e, t)) || (t.exports = n)
                        },
                        185: (t, e, r) => {
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.default = function(t, e) {
                                var r = t.requestParams;
                                return new Promise(function(n, a) {
                                    var u, l = new URLSearchParams,
                                        f = function(t, e) {
                                            if ("object" === s(t) && void 0 !== t.length)
                                                for (var r = 0, n = t.length; r < n; r++) l.append(e + "[]", t[r]);
                                            else
                                                for (var o in t) {
                                                    var i = e ? e + "[" + o + "]" : o,
                                                        a = t[o];
                                                    null !== a && "object" === s(a) && "query" !== o ? f(a, i) : l.append(i, "query" !== o ? a : JSON.stringify(a))
                                                }
                                            return l.toString()
                                        };
                                    return r.headers["Content-Type"] = "application/json; charset=UTF-8", r.headers["X-User-Agent"] = "contentstack-delivery-javascript-web/" + c, r.body && "object" === s(r.body) && (delete r.body._method, "object" === s(r.body.query) && 0 === Object.keys(r.body.query).length && delete r.body.query, u = f(r.body)),
                                        function t(e, r, n, a, s) {
                                            var c = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 300,
                                                u = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 5,
                                                l = e.requestParams,
                                                f = l.url + "?" + r,
                                                y = l.headers,
                                                p = o.mergeDeep({
                                                    method: "GET",
                                                    headers: y,
                                                    timeout: 3e4
                                                }, n);
                                            n.debug && n.logHandler("info", {
                                                url: f,
                                                option: p
                                            });
                                            var d = {
                                                    url: f,
                                                    option: p
                                                },
                                                h = e.plugins;
                                            if (h && void 0 !== h)
                                                for (var v = 0; v < h.length; v++) "function" == typeof h[v].onRequest && (d = h[v].onRequest(e, d));
                                            (0, i.default)(d.url, d.option).then(function(o) {
                                                n.debug && n.logHandler("info", o);
                                                var i = o.json();
                                                if (o.ok && 200 === o.status) i.then(function(t) {
                                                    for (var r = 0; r < h.length && "function" == typeof h[r].onResponse; r++) t = h[r].onResponse(e, d, o, t);
                                                    a(t)
                                                });
                                                else {
                                                    var l = o.status,
                                                        f = o.statusText;
                                                    i.then(function(i) {
                                                        var y = {
                                                            error_message: i.error_message,
                                                            error_code: i.error_code,
                                                            errors: i.errors,
                                                            status: l,
                                                            statusText: f
                                                        };
                                                        n.retryCondition && n.retryCondition(o) ? function(o) {
                                                            if (0 === u) n.debug && n.logHandler("error", o), s(o);
                                                            else {
                                                                var i, l = c;
                                                                u -= 1;
                                                                var f = n.retryLimit - u;
                                                                n.retryDelayOptions && (n.retryDelayOptions.base ? l = n.retryDelayOptions.base * f : n.retryDelayOptions.customBackoff && (l = n.retryDelayOptions.customBackoff(f, o))), (i = l, new Promise(function(t) {
                                                                    setTimeout(t, i)
                                                                })).then(function() {
                                                                    return t(e, r, n, a, s, c, u)
                                                                }).catch(function() {
                                                                    return t(e, r, n, a, s, c, u)
                                                                })
                                                            }
                                                        }(y) : (n.debug && n.logHandler("error", y), s(y))
                                                    }).catch(function() {
                                                        n.debug && n.logHandler("error", {
                                                            status: l,
                                                            statusText: f
                                                        }), s({
                                                            status: l,
                                                            statusText: f
                                                        })
                                                    })
                                                }
                                            }).catch(function(t) {
                                                n.debug && n.logHandler("error", t), s(t)
                                            })
                                        }(t, u, e, n, a, e.retryDelay, e.retryLimit)
                                })
                            };
                            var n, o = function(t, e) {
                                    if (t && t.__esModule) return t;
                                    if (null === t || "object" != s(t) && "function" != typeof t) return {
                                        default: t
                                    };
                                    var r = a(void 0);
                                    if (r && r.has(t)) return r.get(t);
                                    var n = {
                                            __proto__: null
                                        },
                                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var i in t)
                                        if ("default" !== i && ({}).hasOwnProperty.call(t, i)) {
                                            var c = o ? Object.getOwnPropertyDescriptor(t, i) : null;
                                            c && (c.get || c.set) ? Object.defineProperty(n, i, c) : n[i] = t[i]
                                        }
                                    return n.default = t, r && r.set(t, n), n
                                }(r(925)),
                                i = (n = r(54)) && n.__esModule ? n : {
                                    default: n
                                };

                            function a(t) {
                                if ("function" != typeof WeakMap) return null;
                                var e = new WeakMap,
                                    r = new WeakMap;
                                return (a = function(t) {
                                    return t ? r : e
                                })(t)
                            }

                            function s(t) {
                                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                    return typeof t
                                } : function(t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                            }
                            var c = "3.25.3"
                        },
                        209: (t, e, r) => {
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.default = void 0;
                            var n, o, i = function(t, e) {
                                if (t && t.__esModule) return t;
                                if (null === t || "object" != s(t) && "function" != typeof t) return {
                                    default: t
                                };
                                var r = a(void 0);
                                if (r && r.has(t)) return r.get(t);
                                var n = {
                                        __proto__: null
                                    },
                                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                for (var i in t)
                                    if ("default" !== i && ({}).hasOwnProperty.call(t, i)) {
                                        var c = o ? Object.getOwnPropertyDescriptor(t, i) : null;
                                        c && (c.get || c.set) ? Object.defineProperty(n, i, c) : n[i] = t[i]
                                    }
                                return n.default = t, r && r.set(t, n), n
                            }(r(925));

                            function a(t) {
                                if ("function" != typeof WeakMap) return null;
                                var e = new WeakMap,
                                    r = new WeakMap;
                                return (a = function(t) {
                                    return t ? r : e
                                })(t)
                            }

                            function s(t) {
                                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                    return typeof t
                                } : function(t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                            }
                            e.default = (n = function t(e) {
                                return function(t, e) {
                                    if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                                }(this, t), e && (this.object = function() {
                                    return e
                                }), this
                            }, o = [{
                                key: "toJSON",
                                value: function() {
                                    return this.object() ? i.mergeDeep(JSON.parse(JSON.stringify({})), this.object()) : null
                                }
                            }, {
                                key: "get",
                                value: function(t) {
                                    if (this.object() && t) return t.split(".").reduce(function(t, e) {
                                        return t[e]
                                    }, this.object())
                                }
                            }, {
                                key: "getDownloadUrl",
                                value: function(t) {
                                    if (this.object()) {
                                        var e = this.object().url ? this.object().url : null;
                                        return e ? e + "?disposition=" + (t && "string" == typeof t ? t : "attachment") : null
                                    }
                                }
                            }], function(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, function(t) {
                                        var e = function(t) {
                                            if ("object" != s(t) || !t) return t;
                                            var e = t[Symbol.toPrimitive];
                                            if (void 0 !== e) {
                                                var r = e.call(t, "string");
                                                if ("object" != s(r)) return r;
                                                throw TypeError("@@toPrimitive must return a primitive value.")
                                            }
                                            return String(t)
                                        }(t);
                                        return "symbol" == s(e) ? e : e + ""
                                    }(n.key), n)
                                }
                            }(n.prototype, o), Object.defineProperty(n, "prototype", {
                                writable: !1
                            }), n)
                        },
                        215: (t, e) => {
                            function r(t) {
                                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                    return typeof t
                                } : function(t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                            }
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            });
                            var n = function(t, e) {
                                return (n = Object.setPrototypeOf || ({
                                    __proto__: []
                                }) instanceof Array && function(t, e) {
                                    t.__proto__ = e
                                } || function(t, e) {
                                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
                                })(t, e)
                            };

                            function o(t, e) {
                                if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

                                function r() {
                                    this.constructor = t
                                }
                                n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                            }
                            var i, a = function() {
                                return (a = Object.assign || function(t) {
                                    for (var e, r = 1, n = arguments.length; r < n; r++)
                                        for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                                    return t
                                }).apply(this, arguments)
                            };
                            "function" == typeof SuppressedError && SuppressedError, (s = i || (i = {})).BOLD = "bold", s.ITALIC = "italic", s.UNDERLINE = "underline", s.CLASSNAME_OR_ID = "classnameOrId", s.STRIKE_THROUGH = "strikethrough", s.INLINE_CODE = "inlineCode", s.SUBSCRIPT = "subscript", s.SUPERSCRIPT = "superscript", s.BREAK = "break";
                            var s, c, u = i;
                            (l = c || (c = {})).DOCUMENT = "doc", l.PARAGRAPH = "p", l.LINK = "a", l.IMAGE = "img", l.EMBED = "embed", l.HEADING_1 = "h1", l.HEADING_2 = "h2", l.HEADING_3 = "h3", l.HEADING_4 = "h4", l.HEADING_5 = "h5", l.HEADING_6 = "h6", l.ORDER_LIST = "ol", l.UNORDER_LIST = "ul", l.LIST_ITEM = "li", l.FRAGMENT = "fragment", l.HR = "hr", l.TABLE = "table", l.TABLE_HEADER = "thead", l.TABLE_BODY = "tbody", l.TABLE_FOOTER = "tfoot", l.TABLE_ROW = "tr", l.TABLE_HEAD = "th", l.TABLE_DATA = "td", l.COL_GROUP = "colgroup", l.COL = "col", l.BLOCK_QUOTE = "blockquote", l.CODE = "code", l.TEXT = "text", l.REFERENCE = "reference";
                            var l, f, y = c;

                            function p(t, e, r) {
                                return void 0 === e && (e = ["p", "a", "strong", "em", "ul", "ol", "li", "h1", "h2", "h3", "h4", "h5", "h6", "sub", "u", "table", "thead", "tbody", "tr", "th", "td", "span", "fragment", "sup", "strike", "br", "img", "colgroup", "col", "div"]), void 0 === r && (r = ["href", "title", "target", "alt", "src", "class", "id", "style", "colspan", "rowspan", "content-type-uid", "data-sys-asset-uid", "sys-style-type", "data-type", "data-width", "data-rows", "data-cols", "data-mtec"]), (t = t.replace(/\n/g, "<br />")).replace(/<\/?([a-z][a-z0-9]*)\b[^<>]*>/gi, function(t, r) {
                                    return e.includes(r.toLowerCase()) ? t : ""
                                }).replace(/<([a-z][a-z0-9]*)\b[^<>]*>/gi, function(t, n) {
                                    return e.includes(n.toLowerCase()) ? t.replace(/\s([a-z\-]+)=['"][^'"]*['"]/gi, function(t, e) {
                                        return r.includes(e.toLowerCase()) ? t : ""
                                    }) : t
                                })
                            }
                            var d, h = ((f = {})[y.DOCUMENT] = function(t) {
                                return ""
                            }, f[y.PARAGRAPH] = function(t, e) {
                                return "<p".concat(t.attrs.style ? ' style="'.concat(t.attrs.style, '"') : "").concat(t.attrs["class-name"] ? ' class="'.concat(t.attrs["class-name"], '"') : "").concat(t.attrs.id ? ' id="'.concat(t.attrs.id, '"') : "", ">").concat(p(e(t.children)), "</p>")
                            }, f[y.LINK] = function(t, e) {
                                var r = p(t.attrs.href || t.attrs.url);
                                return t.attrs.target ? "<a".concat(t.attrs.style ? ' style="'.concat(t.attrs.style, '"') : "").concat(t.attrs["class-name"] ? ' class="'.concat(t.attrs["class-name"], '"') : "").concat(t.attrs.id ? ' id="'.concat(t.attrs.id, '"') : "", ' href="').concat(r, '" target="').concat(t.attrs.target, '">').concat(p(e(t.children)), "</a>") : "<a".concat(t.attrs.style ? ' style="'.concat(t.attrs.style, '"') : "").concat(t.attrs["class-name"] ? ' class="'.concat(t.attrs["class-name"], '"') : "").concat(t.attrs.id ? ' id="'.concat(t.attrs.id, '"') : "", ' href="').concat(r, '">').concat(p(e(t.children)), "</a>")
                            }, f[y.IMAGE] = function(t, e) {
                                var r = encodeURI(p(t.attrs.src || t.attrs.url));
                                return "<img".concat(t.attrs.style ? ' style="'.concat(t.attrs.style, '"') : "").concat(t.attrs["class-name"] ? ' class="'.concat(t.attrs["class-name"], '"') : "").concat(t.attrs.id ? ' id="'.concat(t.attrs.id, '"') : "", ' src="').concat(r, '" />').concat(p(e(t.children)))
                            }, f[y.EMBED] = function(t, e) {
                                var r = encodeURI(p(t.attrs.src || t.attrs.url));
                                return "<iframe".concat(t.attrs.style ? ' style="'.concat(t.attrs.style, '"') : "").concat(t.attrs["class-name"] ? ' class="'.concat(t.attrs["class-name"], '"') : "").concat(t.attrs.id ? ' id="'.concat(t.attrs.id, '"') : "", ' src="').concat(r, '">').concat(p(e(t.children)), "</iframe>")
                            }, f[y.HEADING_1] = function(t, e) {
                                return "<h1".concat(t.attrs.style ? ' style="'.concat(t.attrs.style, '"') : "").concat(t.attrs["class-name"] ? ' class="'.concat(t.attrs["class-name"], '"') : "").concat(t.attrs.id ? ' id="'.concat(t.attrs.id, '"') : "", ">").concat(p(e(t.children)), "</h1>")
                            }, f[y.HEADING_2] = function(t, e) {
                                return "<h2".concat(t.attrs.style ? ' style="'.concat(t.attrs.style, '"') : "").concat(t.attrs["class-name"] ? ' class="'.concat(t.attrs["class-name"], '"') : "").concat(t.attrs.id ? ' id="'.concat(t.attrs.id, '"') : "", ">").concat(p(e(t.children)), "</h2>")
                            }, f[y.HEADING_3] = function(t, e) {
                                return "<h3".concat(t.attrs.style ? ' style="'.concat(t.attrs.style, '"') : "").concat(t.attrs["class-name"] ? ' class="'.concat(t.attrs["class-name"], '"') : "").concat(t.attrs.id ? ' id="'.concat(t.attrs.id, '"') : "", ">").concat(p(e(t.children)), "</h3>")
                            }, f[y.HEADING_4] = function(t, e) {
                                return "<h4".concat(t.attrs.style ? ' style="'.concat(t.attrs.style, '"') : "").concat(t.attrs["class-name"] ? ' class="'.concat(t.attrs["class-name"], '"') : "").concat(t.attrs.id ? ' id="'.concat(t.attrs.id, '"') : "", ">").concat(p(e(t.children)), "</h4>")
                            }, f[y.HEADING_5] = function(t, e) {
                                return "<h5".concat(t.attrs.style ? ' style="'.concat(t.attrs.style, '"') : "").concat(t.attrs["class-name"] ? ' class="'.concat(t.attrs["class-name"], '"') : "").concat(t.attrs.id ? ' id="'.concat(t.attrs.id, '"') : "", ">").concat(p(e(t.children)), "</h5>")
                            }, f[y.HEADING_6] = function(t, e) {
                                return "<h6".concat(t.attrs.style ? ' style="'.concat(t.attrs.style, '"') : "").concat(t.attrs["class-name"] ? ' class="'.concat(t.attrs["class-name"], '"') : "").concat(t.attrs.id ? ' id="'.concat(t.attrs.id, '"') : "", ">").concat(p(e(t.children)), "</h6>")
                            }, f[y.ORDER_LIST] = function(t, e) {
                                return "<ol".concat(t.attrs.style ? ' style="'.concat(t.attrs.style, '"') : "").concat(t.attrs["class-name"] ? ' class="'.concat(t.attrs["class-name"], '"') : "").concat(t.attrs.id ? ' id="'.concat(t.attrs.id, '"') : "", ">").concat(p(e(t.children)), "</ol>")
                            }, f[y.FRAGMENT] = function(t, e) {
                                return "<fragment>".concat(p(e(t.children)), "</fragment>")
                            }, f[y.UNORDER_LIST] = function(t, e) {
                                return "<ul".concat(t.attrs.style ? ' style="'.concat(t.attrs.style, '"') : "").concat(t.attrs["class-name"] ? ' class="'.concat(t.attrs["class-name"], '"') : "").concat(t.attrs.id ? ' id="'.concat(t.attrs.id, '"') : "", ">").concat(p(e(t.children)), "</ul>")
                            }, f[y.LIST_ITEM] = function(t, e) {
                                return "<li".concat(t.attrs.style ? ' style="'.concat(t.attrs.style, '"') : "").concat(t.attrs["class-name"] ? ' class="'.concat(t.attrs["class-name"], '"') : "").concat(t.attrs.id ? ' id="'.concat(t.attrs.id, '"') : "", ">").concat(p(e(t.children)), "</li>")
                            }, f[y.HR] = function(t, e) {
                                return "<hr>"
                            }, f[y.TABLE] = function(t, e) {
                                var r = "";
                                if (t.attrs.colWidths && Array.isArray(t.attrs.colWidths)) {
                                    var n = t.attrs.colWidths.reduce(function(t, e) {
                                        return t + e
                                    }, 0);
                                    r = "<".concat(y.COL_GROUP, ' data-width="').concat(n, '">'), t.attrs.colWidths.forEach(function(t) {
                                        var e = t / n * 100;
                                        r += "<".concat(y.COL, ' style="width:').concat(e.toFixed(2), '%"/>')
                                    }), r += "</".concat(y.COL_GROUP, ">")
                                }
                                return "<table".concat(t.attrs.style ? ' style="'.concat(t.attrs.style, '"') : "") + "".concat(t.attrs["class-name"] ? ' class="'.concat(t.attrs["class-name"], '"') : "") + "".concat(t.attrs.id ? ' id="'.concat(t.attrs.id, '"') : "", ">") + "".concat(r) + "".concat(p(e(t.children))) + "</table>"
                            }, f[y.TABLE_HEADER] = function(t, e) {
                                return "<thead".concat(t.attrs.style ? ' style="'.concat(t.attrs.style, '"') : "").concat(t.attrs["class-name"] ? ' class="'.concat(t.attrs["class-name"], '"') : "").concat(t.attrs.id ? ' id="'.concat(t.attrs.id, '"') : "", ">").concat(p(e(t.children)), "</thead>")
                            }, f[y.TABLE_BODY] = function(t, e) {
                                return "<tbody".concat(t.attrs.style ? ' style="'.concat(t.attrs.style, '"') : "").concat(t.attrs["class-name"] ? ' class="'.concat(t.attrs["class-name"], '"') : "").concat(t.attrs.id ? ' id="'.concat(t.attrs.id, '"') : "", ">").concat(p(e(t.children)), "</tbody>")
                            }, f[y.TABLE_FOOTER] = function(t, e) {
                                return "<tfoot".concat(t.attrs.style ? ' style="'.concat(t.attrs.style, '"') : "").concat(t.attrs["class-name"] ? ' class="'.concat(t.attrs["class-name"], '"') : "").concat(t.attrs.id ? ' id="'.concat(t.attrs.id, '"') : "", ">").concat(p(e(t.children)), "</tfoot>")
                            }, f[y.TABLE_ROW] = function(t, e) {
                                return "<tr".concat(t.attrs.style ? ' style="'.concat(t.attrs.style, '"') : "").concat(t.attrs["class-name"] ? ' class="'.concat(t.attrs["class-name"], '"') : "").concat(t.attrs.id ? ' id="'.concat(t.attrs.id, '"') : "", ">").concat(p(e(t.children)), "</tr>")
                            }, f[y.TABLE_HEAD] = function(t, e) {
                                return t.attrs.void ? "" : "<th" + "".concat(t.attrs.rowSpan ? ' rowspan="'.concat(t.attrs.rowSpan, '"') : "") + "".concat(t.attrs.colSpan ? ' colspan="'.concat(t.attrs.colSpan, '"') : "") + "".concat(t.attrs.style ? ' style="'.concat(t.attrs.style, '"') : "") + "".concat(t.attrs["class-name"] ? ' class="'.concat(t.attrs["class-name"], '"') : "") + "".concat(t.attrs.id ? ' id="'.concat(t.attrs.id, '"') : "", ">").concat(p(e(t.children))) + "</th>"
                            }, f[y.TABLE_DATA] = function(t, e) {
                                return t.attrs.void ? "" : "<td" + "".concat(t.attrs.rowSpan ? ' rowspan="'.concat(t.attrs.rowSpan, '"') : "") + "".concat(t.attrs.colSpan ? ' colspan="'.concat(t.attrs.colSpan, '"') : "") + "".concat(t.attrs.style ? ' style="'.concat(t.attrs.style, '"') : "") + "".concat(t.attrs["class-name"] ? ' class="'.concat(t.attrs["class-name"], '"') : "") + "".concat(t.attrs.id ? ' id="'.concat(t.attrs.id, '"') : "", ">").concat(p(e(t.children))) + "</td>"
                            }, f[y.BLOCK_QUOTE] = function(t, e) {
                                return "<blockquote".concat(t.attrs["class-name"] ? ' class="'.concat(t.attrs["class-name"], '"') : "").concat(t.attrs.id ? ' id="'.concat(t.attrs.id, '"') : "", ">").concat(p(e(t.children)), "</blockquote>")
                            }, f[y.CODE] = function(t, e) {
                                return "<code".concat(t.attrs["class-name"] ? ' class="'.concat(t.attrs["class-name"], '"') : "").concat(t.attrs.id ? ' id="'.concat(t.attrs.id, '"') : "", ">").concat(p(e(t.children)), "</code>")
                            }, f.reference = function(t, e) {
                                var r, n, o, i, a;
                                if ("asset" === t.attrs.type) {
                                    var s = encodeURI(t.attrs["asset-link"]),
                                        c = null === (n = null === (r = t.attrs) || void 0 === r ? void 0 : r["redactor-attributes"]) || void 0 === n ? void 0 : n.alt,
                                        u = t.attrs.link,
                                        l = t.attrs.target || "",
                                        f = (null === (i = null === (o = t.attrs) || void 0 === o ? void 0 : o["redactor-attributes"]) || void 0 === i ? void 0 : i["asset-caption"]) || (null === (a = t.attrs) || void 0 === a ? void 0 : a["asset-caption"]) || "",
                                        y = t.attrs.style,
                                        d = t.attrs["asset-uid"],
                                        h = "<img".concat(d ? ' asset_uid="'.concat(d, '"') : "").concat(t.attrs["class-name"] ? ' class="'.concat(p(t.attrs["class-name"]), '"') : "").concat(s ? ' src="'.concat(p(s), '"') : "").concat(c ? ' alt="'.concat(c, '"') : "").concat("_blank" === l ? ' target="_blank"' : "").concat(y ? ' style="'.concat(y, '"') : "", " />");
                                    return "<figure".concat(y ? ' style="'.concat(y, '"') : "", ">") + (u ? '<a href="'.concat(u, '" target="').concat(l || "", '">') : "") + h + (u ? "</a>" : "") + (f ? "<figcaption>".concat(f, "</figcaption>") : "") + "</figure>"
                                }
                                return ""
                            }, f.default = function(t, e) {
                                return p(e(t.children))
                            }, f[u.BOLD] = function(t) {
                                return "<strong>".concat(p(t), "</strong>")
                            }, f[u.ITALIC] = function(t) {
                                return "<em>".concat(p(t), "</em>")
                            }, f[u.UNDERLINE] = function(t) {
                                return "<u>".concat(p(t), "</u>")
                            }, f[u.STRIKE_THROUGH] = function(t) {
                                return "<strike>".concat(p(t), "</strike>")
                            }, f[u.INLINE_CODE] = function(t) {
                                return "<span data-type='inlineCode'>".concat(p(t), "</span>")
                            }, f[u.SUBSCRIPT] = function(t) {
                                return "<sub>".concat(p(t), "</sub>")
                            }, f[u.SUPERSCRIPT] = function(t) {
                                return "<sup>".concat(p(t), "</sup>")
                            }, f[u.BREAK] = function(t) {
                                return "<br />".concat(p(t))
                            }, f[u.CLASSNAME_OR_ID] = function(t, e, r) {
                                return "<span".concat(e ? ' class="'.concat(e, '"') : "").concat(r ? ' id="'.concat(r, '"') : "", ">").concat(p(t), "</span>")
                            }, f);
                            (v = d || (d = {})).BLOCK = "block", v.INLINE = "inline", v.LINK = "link", v.DISPLAY = "display", v.DOWNLOAD = "download";
                            var v, _, m = d,
                                b = ((_ = {})[m.BLOCK] = function(t) {
                                    var e = p(t.title || t.uid),
                                        r = p(t._content_type_uid || (t.system ? t.system.content_type_uid : ""));
                                    return "<div><p>".concat(e, "</p><p>Content type: <span>").concat(r, "</span></p></div>")
                                }, _[m.INLINE] = function(t) {
                                    var e = p(t.title || t.uid);
                                    return "<span>".concat(e, "</span>")
                                }, _[m.LINK] = function(t, e) {
                                    var r = encodeURI(p(t.url || "undefined")),
                                        n = p(e.text || t.title || t.uid || (t.system ? t.system.uid : ""));
                                    return '<a href="'.concat(r, '">').concat(n, "</a>")
                                }, _[m.DISPLAY] = function(t, e) {
                                    var r = encodeURI(p(t.url || "undefined")),
                                        n = p(e.attributes.alt || t.title || t.filename || t.uid || (t.system ? t.system.uid : ""));
                                    return '<img src="'.concat(r, '" alt="').concat(n, '" />')
                                }, _[m.DOWNLOAD] = function(t, e) {
                                    var r = encodeURI(p(t.url || "undefined")),
                                        n = p(e.text || t.title || t.uid || (t.system ? t.system.content_type_uid : ""));
                                    return '<a href="'.concat(r, '">').concat(n, "</a>")
                                }, _);

                            function g(t, e) {
                                var r, n, o, i, a;
                                return "entry" === t.itemType ? (r = t.itemUid, n = t.contentTypeUid, void 0 === (o = e) && (o = []), o.filter(function(t) {
                                    if (t.uid && t.uid === r && t._content_type_uid === n || t.system && t.system.uid === r && t.system.content_type_uid === n) return t
                                })) : (i = t.itemUid, void 0 === (a = e) && (a = []), a.filter(function(t) {
                                    if (t.uid && t.uid === i || t.system && t.system.uid === i) return t
                                }))
                            }

                            function O(t, e) {
                                return t && void 0 !== t && e && void 0 !== e && void 0 !== e._embedded_items ? g(t, Object.values(e._embedded_items || []).reduce(function(t, e) {
                                    return t.concat(e)
                                }, [])) : []
                            }

                            function w(t, e, r) {
                                if (!t && void 0 === t || !e && void 0 === e) return "";
                                if (r && void 0 !== r[e.styleType]) {
                                    var n = r[e.styleType];
                                    if (void 0 !== e.attributes["data-sys-content-type-uid"] && "function" != typeof n && void 0 !== n[e.attributes["data-sys-content-type-uid"]]) return n[e.attributes["data-sys-content-type-uid"]](t, e);
                                    if (void 0 !== e.attributes["data-sys-content-type-uid"] && "function" != typeof n && void 0 !== n.$default) return n.$default(t, e);
                                    if (void 0 !== e.contentTypeUid && "function" != typeof n && void 0 !== n[e.contentTypeUid]) return n[e.contentTypeUid](t, e);
                                    if (void 0 !== e.contentTypeUid && "function" != typeof n && void 0 !== n.$default) return n.$default(t, e);
                                    if ("function" == typeof n) return n(t, e)
                                }
                                return (0, b[e.styleType])(t, e)
                            }

                            function E(t, e) {
                                for (var r = 0; r < t.length; r++) e(t[r])
                            }

                            function T(t, e, r) {
                                if (!(t instanceof Array) && "doc" !== t.type) return t;
                                if (t instanceof Array) {
                                    var n = [];
                                    return t.forEach(function(t) {
                                        n.push(T(t, e, r))
                                    }), n
                                }
                                var o = a(a({}, h), e);
                                return function t(e, r, n) {
                                    return e.map(function(e) {
                                        return function(e, r, n) {
                                            if ((null === (o = null == e ? void 0 : e.attrs) || void 0 === o ? void 0 : o.style) && (e.attrs.style = function(t) {
                                                    if (!t) return "";
                                                    if ("string" == typeof t) return t;
                                                    var e = "";
                                                    for (var r in t)
                                                        if (t.hasOwnProperty(r)) {
                                                            var n = t[r];
                                                            e += "".concat(r, ":").concat(n, ";")
                                                        }
                                                    return e
                                                }(e.attrs.style)), e.type) {
                                                if ("reference" === e.type) return function(e, r, n) {
                                                    if (("entry" === e.attrs.type || "asset" === e.attrs.type) && "link" === e.attrs["display-type"]) {
                                                        var o = e.children ? t(e.children, r, n) : "",
                                                            i = "".concat(e.attrs.style ? ' style="'.concat(e.attrs.style, '"') : "").concat(e.attrs["class-name"] ? ' class="'.concat(e.attrs["class-name"], '"') : "").concat(e.attrs.id ? ' id="'.concat(e.attrs.id, '"') : "", ' href="').concat(e.attrs.href || e.attrs.url, '"');
                                                        return e.attrs.target && (i += ' target="'.concat(e.attrs.target, '"')), "asset" == e.attrs.type && (i += ' type="asset" content-type-uid="sys_assets" '.concat(e.attrs["asset-uid"] ? 'data-sys-asset-uid="'.concat(e.attrs["asset-uid"], '"') : "", ' sys-style-type="download"')), "<a".concat(i, ">").concat(o, "</a>")
                                                    }

                                                    function a(t) {
                                                        return r[t.type](t, void 0)
                                                    }
                                                    if (!n && void 0 !== r[e.type]) return a(e);
                                                    if (!n) return "";
                                                    var s, c = (s = e.attrs, {
                                                            text: (e.children && e.children.length > 0 ? e.children[0] : {}).text,
                                                            itemUid: s["entry-uid"] || s["asset-uid"],
                                                            itemType: s.type,
                                                            styleType: s["display-type"],
                                                            attributes: s,
                                                            contentTypeUid: s["content-type-uid"]
                                                        }),
                                                        u = n(c);
                                                    return u || void 0 === r[e.type] ? w(u, c, r) : a(e)
                                                }(e, r, n);
                                                var o, i, a = function(e) {
                                                    return t(e, r, n)
                                                };
                                                return void 0 !== r[e.type] ? r[e.type](e, a) : r.default(e, a)
                                            }
                                            return i = k(e.text), (e.classname || e.id) && (i = r[u.CLASSNAME_OR_ID](i, e.classname, e.id)), e.break && (i = r[u.BREAK](i)), e.superscript && (i = r[u.SUPERSCRIPT](i)), e.subscript && (i = r[u.SUBSCRIPT](i)), e.inlineCode && (i = r[u.INLINE_CODE](i)), e.strikethrough && (i = r[u.STRIKE_THROUGH](i)), e.underline && (i = r[u.UNDERLINE](i)), e.italic && (i = r[u.ITALIC](i)), e.bold && (i = r[u.BOLD](i)), i
                                        }(e, r, n)
                                    }).join("")
                                }(t.children, o, r)
                            }

                            function k(t) {
                                return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
                            }
                            var P = ['"', "'", ">", "<", "/", "="];

                            function N(t) {
                                return {
                                    text: t["#text"],
                                    itemUid: t["data-sys-entry-uid"] || t["data-sys-asset-uid"],
                                    itemType: t.type,
                                    styleType: t["sys-style-type"],
                                    attributes: t,
                                    contentTypeUid: t["data-sys-content-type-uid"]
                                }
                            }

                            function j(t) {
                                for (var e = {}, r = 0; r < t.attributes.length; r++) e[t.attributes.item(r).name] = t.attributes.item(r).value;
                                return t.childNodes.forEach(function(t) {
                                    var r;
                                    e = a(a({}, e), (r = {}, 3 === t.nodeType ? r["#text"] = t.textContent : 1 === t.nodeType && (r[t.nodeName.toLowerCase()] = j(t)), r))
                                }), e
                            }
                            var S = "documentfragmentcontainer";

                            function q(t, e, n) {
                                (function t(e, n, o) {
                                    if (e) {
                                        var i = e[0];
                                        if (1 === e.length && n[i]) n[i] = o(n[i]);
                                        else if (e.length > 0 && n[i]) {
                                            var a = e.slice(1);
                                            if (Array.isArray(n[i]))
                                                for (var s = 0, c = n[i]; s < c.length; s++) t(a, c[s], o);
                                            else "object" === r(n[i]) && t(a, n[i], o)
                                        }
                                    }
                                })(t.split("."), e, n)
                            }

                            function A(t, e) {
                                if (!t || void 0 === t) return "";
                                if ("string" == typeof t) {
                                    var r = t;
                                    return t.forEachEmbeddedItem(function(t, n) {
                                        var o, i;
                                        o = r, i = w(O(n, e.entry)[0], n, e.renderOption), r = o.replace(t, i)
                                    }), r
                                }
                                var n = [];
                                return t.forEach(function(t) {
                                    n.push(A(t, e))
                                }), n
                            }
                            String.prototype.forEachEmbeddedItem = function(t) {
                                var e = "<".concat(S, ">").concat(this.toString(), "</").concat(S, ">"),
                                    r = (new DOMParser).parseFromString(e, "text/html");
                                r.querySelectorAll(".embedded-entry").forEach(function(e) {
                                    t(e.outerHTML, N(j(e)))
                                }), r.querySelectorAll(".embedded-asset").forEach(function(e) {
                                    t(e.outerHTML, N(j(e)))
                                })
                            };
                            var C = function() {},
                                I = function(t) {
                                    function e() {
                                        var e = t.call(this) || this;
                                        return e.type = y.DOCUMENT, e
                                    }
                                    return o(e, t), e
                                }(C),
                                R = function(t) {
                                    function e(e) {
                                        var r = t.call(this) || this;
                                        return r.text = e, r
                                    }
                                    return o(e, t), e
                                }(C);

                            function L(t, e, r) {
                                if (r.shouldApplyVariant && r._applied_variants && r._applied_variants[r.metaKey]) {
                                    var n = r._applied_variants[r.metaKey],
                                        o = ("v2:" + t).split(".");
                                    o[1] = o[1] + "_" + n, t = o.join(".")
                                }
                                return e ? {
                                    "data-cslp": t
                                } : "data-cslp=".concat(t)
                            }

                            function D(t) {
                                for (var e in t) {
                                    var n = t[e];
                                    n instanceof Array ? n.forEach(function(t) {
                                        x(t)
                                    }) : n && "object" === r(n) && x(n)
                                }
                            }

                            function x(t) {
                                var e, n = function t(e) {
                                    if (e && e.embedded_itemsConnection) return e;
                                    for (var n in e)
                                        if (e[n] && "object" === r(e[n])) {
                                            var o = t(e[n]);
                                            if (o) return o
                                        }
                                }(t);
                                n && (null === (e = null == n ? void 0 : n.embedded_itemsConnection) || void 0 === e ? void 0 : e.edges).forEach(function(t) {
                                    var e, r, o, i = t.node;
                                    if ((null == i ? void 0 : i.url) && (null == i ? void 0 : i.filename)) {
                                        if (!(null === (e = null == i ? void 0 : i.system) || void 0 === e ? void 0 : e.uid)) throw Error("Asset UID not found in the response");
                                        (null === (o = null === (r = null == n ? void 0 : n.json) || void 0 === r ? void 0 : r.children) || void 0 === o ? void 0 : o.find(function(t) {
                                            return t.attrs["asset-uid"] === i.system.uid
                                        })).attrs["asset-link"] = i.url
                                    }
                                })
                            }
                            e.Document = I, e.GQL = {
                                jsonToHTML: function t(e) {
                                    e.entry instanceof Array ? E(e.entry, function(r) {
                                        t({
                                            entry: r,
                                            paths: e.paths,
                                            renderOption: e.renderOption
                                        })
                                    }) : function(t) {
                                        for (var e = 0, r = t.paths; e < r.length; e++) q(r[e], t.entry, function(e) {
                                            if (e && e.json) {
                                                var r = Object.values((e.embedded_itemsConnection ? e.embedded_itemsConnection.edges : []) || []).reduce(function(t, e) {
                                                    return t.concat(e.node)
                                                }, []);
                                                return T(e.json, t.renderOption, function(t) {
                                                    return g(t, r)[0]
                                                })
                                            }
                                            return e
                                        })
                                    }({
                                        entry: e.entry,
                                        paths: e.paths,
                                        renderOption: e.renderOption
                                    })
                                }
                            }, e.MarkType = u, e.Node = C, e.NodeType = y, e.StyleType = m, e.TextNode = R, e.addEditableTags = function(t, e, n, o) {
                                var i;
                                if (void 0 === o && (o = "en-us"), t) {
                                    var a = t._applied_variants || (null === (i = null == t ? void 0 : t.system) || void 0 === i ? void 0 : i.applied_variants) || null;
                                    t.$ = function t(e, n, o, i, a) {
                                        var s = {};
                                        a.metaKey;
                                        var c = a.shouldApplyVariant,
                                            u = a._applied_variants;
                                        return Object.entries(e).forEach(function(e) {
                                            var l = e[0],
                                                f = e[1];
                                            if ("$" !== l) {
                                                var y = f && "object" === r(f) && f._metadata && f._metadata.uid ? f._metadata.uid : "",
                                                    p = a.shouldApplyVariant ? "".concat(a.metaKey ? a.metaKey + "." : "").concat(l) : "";
                                                y && p && (p = p + "." + y), "object" === r(f) && (Array.isArray(f) ? f.forEach(function(e, d) {
                                                    var h, v, _ = "".concat(l, "__").concat(d),
                                                        m = "".concat(l, "__parent");
                                                    if (y = f && "object" === r(f) && e._metadata && e._metadata.uid ? e._metadata.uid : "", p = a.shouldApplyVariant ? "".concat(a.metaKey ? a.metaKey + "." : "").concat(l) : "", y && p && (p = p + "." + y), s[_] = L("".concat(n, ".").concat(l, ".").concat(d), o, {
                                                            _applied_variants: u,
                                                            shouldApplyVariant: c,
                                                            metaKey: p
                                                        }), s[m] = (h = "".concat(n, ".").concat(l), o ? {
                                                            "data-cslp-parent-field": h
                                                        } : "data-cslp-parent-field=".concat(h)), null != e && void 0 !== e._content_type_uid && void 0 !== e.uid) {
                                                        var b = e._applied_variants || (null === (v = null == e ? void 0 : e.system) || void 0 === v ? void 0 : v.applied_variants) || u;
                                                        f[d].$ = t(e, "".concat(e._content_type_uid, ".").concat(e.uid, ".").concat(e.locale || i), o, i, {
                                                            _applied_variants: b,
                                                            shouldApplyVariant: !!b,
                                                            metaKey: ""
                                                        })
                                                    } else "object" === r(e) && (e.$ = t(e, "".concat(n, ".").concat(l, ".").concat(d), o, i, {
                                                        _applied_variants: u,
                                                        shouldApplyVariant: c,
                                                        metaKey: p
                                                    }))
                                                }) : f && (f.$ = t(f, "".concat(n, ".").concat(l), o, i, {
                                                    _applied_variants: u,
                                                    shouldApplyVariant: c,
                                                    metaKey: p
                                                }))), s[l] = L("".concat(n, ".").concat(l), o, {
                                                    _applied_variants: u,
                                                    shouldApplyVariant: c,
                                                    metaKey: p
                                                })
                                            }
                                        }), s
                                    }(t, "".concat(e, ".").concat(t.uid, ".").concat(o), n, o, {
                                        _applied_variants: a,
                                        shouldApplyVariant: !!a,
                                        metaKey: ""
                                    })
                                }
                            }, e.attributeToString = function(t) {
                                var e = "",
                                    n = function(n) {
                                        if (Object.prototype.hasOwnProperty.call(t, n)) {
                                            if (P.some(function(t) {
                                                    return n.includes(t)
                                                })) return "continue";
                                            var o = t[n];
                                            if (Array.isArray(o)) o = o.join(", ");
                                            else if ("object" === r(o)) {
                                                var i = "";
                                                for (var a in o)
                                                    if (Object.prototype.hasOwnProperty.call(o, a)) {
                                                        var s = o[a];
                                                        null != s && "" !== s && (i += "".concat(a, ":").concat(s, "; "))
                                                    }
                                                o = i
                                            }
                                            e += " ".concat(n, '="').concat(k(String(o)), '"')
                                        }
                                    };
                                for (var o in t) n(o);
                                return e
                            }, e.jsonToHTML = function t(e) {
                                e.entry instanceof Array ? E(e.entry, function(r) {
                                    t({
                                        entry: r,
                                        paths: e.paths,
                                        renderOption: e.renderOption
                                    })
                                }) : function(t) {
                                    for (var e = 0, r = t.paths; e < r.length; e++) q(r[e], t.entry, function(e) {
                                        return T(e, t.renderOption, function(e) {
                                            return O(e, t.entry)[0]
                                        })
                                    })
                                }({
                                    entry: e.entry,
                                    paths: e.paths,
                                    renderOption: e.renderOption
                                })
                            }, e.render = function(t) {
                                function e(e, r) {
                                    q(e, r, function(e) {
                                        return A(e, {
                                            entry: r,
                                            renderOption: t.renderOption
                                        })
                                    })
                                }

                                function r(r) {
                                    t.paths && 0 !== t.paths.length ? t.paths.forEach(function(t) {
                                        e(t, r)
                                    }) : Object.keys(a({}, r._embedded_items)).forEach(function(t) {
                                        e(t, r)
                                    })
                                }
                                t.entry instanceof Array ? t.entry.forEach(function(t) {
                                    r(t)
                                }) : r(t.entry)
                            }, e.renderContent = A, e.updateAssetURLForGQL = function(t) {
                                try {
                                    var e = null == t ? void 0 : t.data;
                                    for (var r in e) "items" in e[r] ? e[r].items.forEach(function(t) {
                                        D(t)
                                    }) : D(e[r])
                                } catch (t) {
                                    console.error("Error in updating asset URL for GQL response", t)
                                }
                            }
                        },
                        241: (t, e) => {
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.default = void 0, e.default = {
                                protocol: "https",
                                host: "cdn.contentstack.io",
                                port: 443,
                                version: "v3",
                                urls: {
                                    sync: "/stacks/sync",
                                    content_types: "/content_types/",
                                    entries: "/entries/",
                                    assets: "/assets/",
                                    environments: "/environments/",
                                    taxonomies: "/taxonomies/entries"
                                },
                                live_preview: {
                                    enable: !1,
                                    host: "rest-preview.contentstack.com"
                                }
                            }
                        },
                        275: (t, e, r) => {
                            function n(t) {
                                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                    return typeof t
                                } : function(t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                            }
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.default = void 0;
                            var o, i = (o = r(318)) && o.__esModule ? o : {
                                default: o
                            };

                            function a() {
                                try {
                                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                                } catch (t) {}
                                return (a = function() {
                                    return !!t
                                })()
                            }

                            function s(t) {
                                return (s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                                    return t.__proto__ || Object.getPrototypeOf(t)
                                })(t)
                            }

                            function c(t, e) {
                                return (c = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                                    return t.__proto__ = e, t
                                })(t, e)
                            }
                            var u = function(t) {
                                return function(e, r, n) {
                                    if (e && r && "string" == typeof e && void 0 !== r) return this._query.query[e] = this._query.query.file_size || {}, this._query.query[e][t] = r, n && "number" == typeof n && (this._query.query[e].levels = n), this;
                                    this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid parameters.")
                                }
                            };
                            e.default = function(t) {
                                function e() {
                                    var t, r, o;
                                    return function(t, e) {
                                        if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                                    }(this, e), (r = s(r = e), t = function(t, e) {
                                        if (e && ("object" == n(e) || "function" == typeof e)) return e;
                                        if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined");
                                        return function(t) {
                                            if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                            return t
                                        }(t)
                                    }(this, a() ? Reflect.construct(r, [], s(this).constructor) : r.apply(this, o))).above = u("$above"), t.equalAndAbove = u("$eq_above"), t.below = u("$below"), t.equalAndBelow = u("$eq_below"), t
                                }
                                return function(t, e) {
                                    if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                                    t.prototype = Object.create(e && e.prototype, {
                                        constructor: {
                                            value: t,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    }), Object.defineProperty(t, "prototype", {
                                        writable: !1
                                    }), e && c(t, e)
                                }(e, t), Object.defineProperty(e, "prototype", {
                                    writable: !1
                                }), e
                            }(i.default)
                        },
                        285: (t, e, r) => {
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.default = void 0;
                            var n, o = (n = r(641)) && n.__esModule ? n : {
                                default: n
                            };
                            e.default = {
                                providers: function(t) {
                                    if (t) return o.default;
                                    console.error("Kindly provide valid provider.")
                                },
                                policies: {
                                    IGNORE_CACHE: -1,
                                    ONLY_NETWORK: 0,
                                    CACHE_ELSE_NETWORK: 1,
                                    NETWORK_ELSE_CACHE: 2,
                                    CACHE_THEN_NETWORK: 3
                                }
                            }
                        },
                        318: (t, e, r) => {
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.default = void 0;
                            var n, o = function(t, e) {
                                    if (t && t.__esModule) return t;
                                    if (null === t || "object" != p(t) && "function" != typeof t) return {
                                        default: t
                                    };
                                    var r = a(void 0);
                                    if (r && r.has(t)) return r.get(t);
                                    var n = {
                                            __proto__: null
                                        },
                                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var i in t)
                                        if ("default" !== i && ({}).hasOwnProperty.call(t, i)) {
                                            var s = o ? Object.getOwnPropertyDescriptor(t, i) : null;
                                            s && (s.get || s.set) ? Object.defineProperty(n, i, s) : n[i] = t[i]
                                        }
                                    return n.default = t, r && r.set(t, n), n
                                }(r(925)),
                                i = (n = r(42)) && n.__esModule ? n : {
                                    default: n
                                };

                            function a(t) {
                                if ("function" != typeof WeakMap) return null;
                                var e = new WeakMap,
                                    r = new WeakMap;
                                return (a = function(t) {
                                    return t ? r : e
                                })(t)
                            }

                            function s(t, e) {
                                var r = Object.keys(t);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(t);
                                    e && (n = n.filter(function(e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                    })), r.push.apply(r, n)
                                }
                                return r
                            }

                            function c(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var r = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? s(Object(r), !0).forEach(function(e) {
                                        var n, o;
                                        n = e, o = r[e], (n = u(n)) in t ? Object.defineProperty(t, n, {
                                            value: o,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : t[n] = o
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach(function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                    })
                                }
                                return t
                            }

                            function u(t) {
                                var e = function(t) {
                                    if ("object" != p(t) || !t) return t;
                                    var e = t[Symbol.toPrimitive];
                                    if (void 0 !== e) {
                                        var r = e.call(t, "string");
                                        if ("object" != p(r)) return r;
                                        throw TypeError("@@toPrimitive must return a primitive value.")
                                    }
                                    return String(t)
                                }(t);
                                return "symbol" == p(e) ? e : e + ""
                            }

                            function l() {
                                try {
                                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                                } catch (t) {}
                                return (l = function() {
                                    return !!t
                                })()
                            }

                            function f(t) {
                                return (f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                                    return t.__proto__ || Object.getPrototypeOf(t)
                                })(t)
                            }

                            function y(t, e) {
                                return (y = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                                    return t.__proto__ = e, t
                                })(t, e)
                            }

                            function p(t) {
                                return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                    return typeof t
                                } : function(t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                            }
                            var d = function(t) {
                                    return function(e, r) {
                                        if (e && r && "string" == typeof e && void 0 !== r) return this._query.query[e] = this._query.query.file_size || {}, this._query.query[e][t] = r, this;
                                        this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid parameters.")
                                    }
                                },
                                h = function(t) {
                                    var e = t ? "$in" : "$nin";
                                    return function(t, r) {
                                        if (t && r && "string" == typeof t && Array.isArray(r)) return this._query.query[t] = this._query.query[t] || {}, this._query.query[t][e] = this._query.query[t][e] || [], this._query.query[t][e] = this._query.query[t][e].concat(r), this;
                                        this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid parameters.")
                                    }
                                },
                                v = function(t) {
                                    return function(e) {
                                        if (e && "string" == typeof e) return this._query.query[e] = this._query.query[e] || {}, this._query.query[e].$exists = t, this;
                                        this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid parameters.")
                                    }
                                },
                                _ = function(t) {
                                    return function() {
                                        for (var e = [], r = 0, n = arguments.length; r < n; r++) arguments[r] instanceof O && arguments[r]._query.query ? e.push(arguments[r]._query.query) : "object" === p(arguments[r]) && e.push(arguments[r]);
                                        return this._query.query[t] ? this._query.query[t] = this._query.query[t].concat(e) : this._query.query[t] = e, this
                                    }
                                },
                                m = function(t) {
                                    return function(e) {
                                        if (e && "string" == typeof e) return this._query[t] = e, this;
                                        this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Argument should be a string.")
                                    }
                                },
                                b = function(t) {
                                    return function(e) {
                                        if ("number" == typeof e) return this._query[t] = e, this;
                                        this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Argument should be a number.")
                                    }
                                };

                            function g(t, e, r, n) {
                                var o;
                                switch (t) {
                                    case "asset":
                                        o = n + e.urls.assets;
                                        break;
                                    case "taxonomy":
                                        o = n + e.urls.taxonomies;
                                        break;
                                    default:
                                        o = n + e.urls.content_types + r + e.urls.entries
                                }
                                return o
                            }
                            var O = e.default = function(t) {
                                var e;

                                function r() {
                                    var t, e, n;
                                    return function(t, e) {
                                        if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                                    }(this, r), (e = f(e = r), t = function(t, e) {
                                        if (e && ("object" == p(e) || "function" == typeof e)) return e;
                                        if (void 0 !== e) throw TypeError("Derived constructors may only return object or undefined");
                                        return function(t) {
                                            if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                            return t
                                        }(t)
                                    }(this, l() ? Reflect.construct(e, [], f(this).constructor) : e.apply(this, n)))._query = t._query || {}, t._query.query = t._query.query || {}, t.lessThan = d("$lt"), t.lessThanOrEqualTo = d("$lte"), t.greaterThan = d("$gt"), t.greaterThanOrEqualTo = d("$gte"), t.notEqualTo = d("$ne"), t.containedIn = h(!0), t.notContainedIn = h(!1), t.exists = v(!0), t.notExists = v(!1), t.ascending = m("asc"), t.descending = m("desc"), t.beforeUid = m("before_uid"), t.afterUid = m("after_uid"), t.skip = b("skip"), t.limit = b("limit"), t.or = _("$or"), t.and = _("$and"), t
                                }
                                return function(t, e) {
                                        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                                        t.prototype = Object.create(e && e.prototype, {
                                            constructor: {
                                                value: t,
                                                writable: !0,
                                                configurable: !0
                                            }
                                        }), Object.defineProperty(t, "prototype", {
                                            writable: !1
                                        }), e && y(t, e)
                                    }(r, t), e = [{
                                        key: "equalTo",
                                        value: function(t, e) {
                                            if (t && "string" == typeof t) return this._query.query[t] = e, this;
                                            this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid parameters.")
                                        }
                                    }, {
                                        key: "where",
                                        value: function(t, e) {
                                            if (t && "string" == typeof t) return this._query.query[t] = e, this;
                                            this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid parameters.")
                                        }
                                    }, {
                                        key: "count",
                                        value: function() {
                                            var t = this.config.protocol + "://" + this.config.host + ":" + this.config.port + "/" + this.config.version,
                                                e = g(this.type, this.config, this.content_type_uid, t);
                                            return this._query.count = !0, this.requestParams = {
                                                method: "POST",
                                                headers: o.mergeDeep({}, this.headers),
                                                url: e,
                                                body: {
                                                    _method: "GET",
                                                    query: this._query
                                                }
                                            }, this
                                        }
                                    }, {
                                        key: "query",
                                        value: function(t) {
                                            if ("object" === p(t)) return this._query.query = o.mergeDeep(this._query.query, t), this;
                                            this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid parameters")
                                        }
                                    }, {
                                        key: "referenceIn",
                                        value: function(t, e) {
                                            var n = {};
                                            return e instanceof r && e._query.query ? n.$in_query = e._query.query : "object" === p(e) && (n.$in_query = e), this._query.query[t] ? this._query.query[t] = this._query.query[t].concat(n) : this._query.query[t] = n, this
                                        }
                                    }, {
                                        key: "referenceNotIn",
                                        value: function(t, e) {
                                            var n = {};
                                            return e instanceof r && e._query.query ? n.$nin_query = e._query.query : "object" === p(e) && (n.$nin_query = e), this._query.query[t] ? this._query.query[t] = this._query.query[t].concat(n) : this._query.query[t] = n, this
                                        }
                                    }, {
                                        key: "tags",
                                        value: function(t) {
                                            if (Array.isArray(t)) return this._query.tags = t, this;
                                            this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid parameters")
                                        }
                                    }, {
                                        key: "includeReferenceContentTypeUID",
                                        value: function() {
                                            return this._query.include_reference_content_type_uid = !0, this
                                        }
                                    }, {
                                        key: "includeCount",
                                        value: function() {
                                            return this._query.include_count = !0, this
                                        }
                                    }, {
                                        key: "addParam",
                                        value: function(t, e) {
                                            if (t && e && "string" == typeof t && "string" == typeof e) return this._query[t] = e, this;
                                            this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid parameters.")
                                        }
                                    }, {
                                        key: "getQuery",
                                        value: function() {
                                            return this._query.query || {}
                                        }
                                    }, {
                                        key: "regex",
                                        value: function(t, e, r) {
                                            if (t && e && "string" == typeof t && "string" == typeof e) return this._query.query[t] = {
                                                $regex: e
                                            }, r && (this._query.query[t].$options = r), this;
                                            this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid parameters.")
                                        }
                                    }, {
                                        key: "search",
                                        value: function(t) {
                                            if (t && "string" == typeof t) return this._query.typeahead = t, this;
                                            this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid parameters.")
                                        }
                                    }, {
                                        key: "find",
                                        value: function(t) {
                                            var e = this.config.host + ":" + this.config.port;
                                            this.type && "asset" !== this.type && this.live_preview && !0 === this.live_preview.enable && this.live_preview.live_preview && "init" !== this.live_preview.live_preview && (e = this.live_preview.host);
                                            var r = this.config.protocol + "://" + e + "/" + this.config.version,
                                                n = g(this.type, this.config, this.content_type_uid, r);
                                            this.requestParams = {
                                                method: "POST",
                                                headers: o.mergeDeep({}, this.headers),
                                                url: n,
                                                body: {
                                                    _method: "GET",
                                                    query: this._query
                                                }
                                            };
                                            var i = o.mergeDeep(this.fetchOptions, t);
                                            return o.sendRequest(o.mergeDeep({}, this), i)
                                        }
                                    }, {
                                        key: "variants",
                                        value: function(t) {
                                            return Array.isArray(t) && t.length > 0 ? this.headers["x-cs-variant-uid"] = t.join(",") : this.headers["x-cs-variant-uid"] = t, this
                                        }
                                    }, {
                                        key: "findOne",
                                        value: function() {
                                            var t = this.config.protocol + "://" + this.config.host + ":" + this.config.port + "/" + this.config.version;
                                            this.type && "asset" !== this.type && this.live_preview && !0 === this.live_preview.enable && this.live_preview.live_preview && "init" !== this.live_preview.live_preview && (t = this.config.protocol + "://" + this.live_preview.host + "/" + this.config.version);
                                            var e = g(this.type, this.config, this.content_type_uid, t);
                                            this.singleEntry = !0, this._query.limit = 1, this.requestParams = {
                                                method: "POST",
                                                headers: o.mergeDeep({}, this.headers),
                                                url: e,
                                                body: {
                                                    _method: "GET",
                                                    query: this._query
                                                }
                                            };
                                            var r = o.mergeDeep({}, this.fetchOptions);
                                            return o.sendRequest(o.mergeDeep({}, this), r).catch(function(t) {
                                                return t.status ? Promise.reject(c(c({}, t), {}, {
                                                    http_code: t.status,
                                                    http_message: t.statusText || "An error occurred"
                                                })) : Promise.reject(t)
                                            })
                                        }
                                    }],
                                    function(t, e) {
                                        for (var r = 0; r < e.length; r++) {
                                            var n = e[r];
                                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, u(n.key), n)
                                        }
                                    }(r.prototype, e), Object.defineProperty(r, "prototype", {
                                        writable: !1
                                    }), r
                            }(i.default)
                        },
                        348: (t, e, r) => {
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.default = void 0;
                            var n, o, i = d(r(241)),
                                a = function(t, e) {
                                    if (t && t.__esModule) return t;
                                    if (null === t || "object" != h(t) && "function" != typeof t) return {
                                        default: t
                                    };
                                    var r = p(void 0);
                                    if (r && r.has(t)) return r.get(t);
                                    var n = {
                                            __proto__: null
                                        },
                                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var i in t)
                                        if ("default" !== i && ({}).hasOwnProperty.call(t, i)) {
                                            var a = o ? Object.getOwnPropertyDescriptor(t, i) : null;
                                            a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = t[i]
                                        }
                                    return n.default = t, r && r.set(t, n), n
                                }(r(925)),
                                s = d(r(42)),
                                c = d(r(537)),
                                u = d(r(318)),
                                l = d(r(275)),
                                f = d(r(185)),
                                y = d(r(285));

                            function p(t) {
                                if ("function" != typeof WeakMap) return null;
                                var e = new WeakMap,
                                    r = new WeakMap;
                                return (p = function(t) {
                                    return t ? r : e
                                })(t)
                            }

                            function d(t) {
                                return t && t.__esModule ? t : {
                                    default: t
                                }
                            }

                            function h(t) {
                                return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                    return typeof t
                                } : function(t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                            }
                            var v = [408, 429];
                            e.default = (n = function t() {
                                var e = this;
                                (function(t, e) {
                                    if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                                })(this, t), this.fetchOptions = {
                                    retryLimit: 5,
                                    retryCondition: function(t) {
                                        return !!v.includes(t.status)
                                    },
                                    debug: !1,
                                    logHandler: function(t, e) {
                                        "error" === t && e ? console.error("[error] ".concat(e)) : "warning" === t && e ? console.warn("[warning] ".concat(e)) : "info" === t && e && console.info("[info] ".concat(e))
                                    }
                                }, this.config = JSON.parse(JSON.stringify(i.default)), this.plugins = [];
                                for (var r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                                switch (n[0].live_preview && !0 === n[0].live_preview.enable && null !== n[0].live_preview.management_token && n[0].live_preview.management_token && (this.config.live_preview.host = "api.contentstack.io"), n[0].region && void 0 !== n[0].region && "us" !== n[0].region && (this.config.host = n[0].region + "-cdn.contentstack.com", n[0].live_preview && !0 === n[0].live_preview.enable && (n[0].live_preview.management_token ? this.config.live_preview.host = n[0].region + "-api.contentstack.com" : this.config.live_preview.host = n[0].region + "-rest-preview.contentstack.com")), n[0].fetchOptions && void 0 !== n[0].fetchOptions && (this.fetchOptions = a.mergeDeep(this.fetchOptions, n[0].fetchOptions)), n[0].plugins && void 0 !== n[0].plugins && n[0].plugins.forEach(function(t) {
                                    e.plugins.push(t)
                                }), this.cachePolicy = y.default.policies.IGNORE_CACHE, this.provider = y.default.providers("localstorage"), n.length) {
                                    case 1:
                                        if ("object" === h(n[0]) && "string" == typeof n[0].api_key && "string" == typeof n[0].delivery_token && "string" == typeof n[0].environment) return this.headers = {
                                            api_key: n[0].api_key,
                                            access_token: n[0].delivery_token
                                        }, "object" == h(n[0].live_preview) && (this.live_preview = a.mergeDeep(this.config.live_preview, n[0].live_preview), this.setLivePreviewTimelinePreviewForClient()), "string" == typeof n[0].branch && void 0 !== n[0].branch && (this.headers.branch = n[0].branch), "object" == h(n[0].early_access) && Array.isArray(n[0].early_access) && n[0].early_access.length > 0 && (this.headers["x-header-ea"] = n[0].early_access.join(",")), this.environment = n[0].environment, this;
                                        this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid object parameters. The specified API Key, Delivery Token, or Environment Name is invalid.");
                                    case 3:
                                        if (this.fetchOptions.debug && this.fetchOptions.logHandler("warning", "WARNING! Obsolete function called. Function 'Contentstack.Stack(api_key, delivery_token, environment)' has been deprecated, please use 'Contentstack.Stack({api_key, delivery_token, environment, region, branch, fetchOptions})' function instead!"), "string" == typeof n[0] && "string" == typeof n[1] && "string" == typeof n[2]) return this.headers = {
                                            api_key: n[0],
                                            access_token: n[1]
                                        }, this.environment = n[2], this;
                                        this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid string parameters.");
                                    case 4:
                                        return this.fetchOptions.debug && this.fetchOptions.logHandler("warning", "WARNING! Obsolete function called. Function 'Contentstack.Stack(api_key, delivery_token, environment)' has been deprecated, please use 'Contentstack.Stack({api_key, delivery_token, environment, region, branch, fetchOptions})' function instead!"), "string" == typeof n[0] && "string" == typeof n[1] && "string" == typeof n[2] ? (this.headers = {
                                            api_key: n[0],
                                            access_token: n[1]
                                        }, this.environment = n[2]) : this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid string parameters."), n[3] && ("string" == typeof n[3] && void 0 !== n[3] && "us" !== n[3] ? this.config.host = n[3] + "-cdn.contentstack.com" : "object" === h(n[3]) && (this.fetchOptions = a.mergeDeep(this.fetchOptions, n[3]))), this;
                                    case 5:
                                        return this.fetchOptions.debug && this.fetchOptions.logHandler("warning", "WARNING! Obsolete function called. Function 'Contentstack.Stack(api_key, delivery_token, environment)' has been deprecated, please use 'Contentstack.Stack({api_key, delivery_token, environment, region, branch, fetchOptions})' function instead!"), "string" == typeof n[0] && "string" == typeof n[1] && "string" == typeof n[2] ? (this.headers = {
                                            api_key: n[0],
                                            access_token: n[1]
                                        }, this.environment = n[2]) : this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid string parameters."), n[3] && ("string" == typeof n[3] && void 0 !== n[3] && "us" !== n[3] ? this.config.host = n[3] + "-cdn.contentstack.com" : "object" === h(n[3]) && (this.fetchOptions = a.mergeDeep(this.fetchOptions, n[3]))), n[4] && "object" === h(n[4]) && (this.fetchOptions = a.mergeDeep(this.fetchOptions, n[4])), this;
                                    default:
                                        this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide valid parameters to initialize the Contentstack javascript-SDK Stack.")
                                }
                            }, o = [{
                                key: "setPort",
                                value: function(t) {
                                    return "number" == typeof t && (this.config.port = t), this
                                }
                            }, {
                                key: "setProtocol",
                                value: function(t) {
                                    return "string" == typeof t && ~["https", "http"].indexOf(t) && (this.config.protocol = t), this
                                }
                            }, {
                                key: "setHost",
                                value: function(t) {
                                    return "string" == typeof t && t && (this.config.host = t), this
                                }
                            }, {
                                key: "setCachePolicy",
                                value: function(t) {
                                    return "number" == typeof t && t >= -1 && t < 4 ? this._query ? this.queryCachePolicy = t : this.cachePolicy = t : this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide the valid policy"), this
                                }
                            }, {
                                key: "setLivePreviewTimelinePreviewForClient",
                                value: function() {
                                    if (a.isBrowser()) {
                                        var t = new URL(document.location.toString()).searchParams;
                                        t.has("live_preview") && (this.live_preview.live_preview = t.get("live_preview")), t.has("release_id") ? this.headers.release_id = t.get("release_id") : delete this.headers.release_id, t.has("preview_timestamp") ? this.headers.preview_timestamp = t.get("preview_timestamp") : delete this.headers.preview_timestamp
                                    }
                                }
                            }, {
                                key: "livePreviewQuery",
                                value: function(t) {
                                    this.live_preview && (this.live_preview.live_preview = t.live_preview || "init", this.live_preview.content_type_uid = t.content_type_uid, this.live_preview.entry_uid = t.entry_uid), t.hasOwnProperty("release_id") ? this.headers.release_id = t.release_id : delete this.headers.release_id, t.hasOwnProperty("preview_timestamp") ? this.headers.preview_timestamp = t.preview_timestamp : delete this.headers.preview_timestamp
                                }
                            }, {
                                key: "setCacheProvider",
                                value: function(t) {
                                    return t && "object" === h(t) && (this.provider = t), this
                                }
                            }, {
                                key: "clearByQuery",
                                value: function() {
                                    if (this.provider && "function" == typeof this.provider.clearByQuery) return this.provider.clearByQuery.apply(this.provider, arguments)
                                }
                            }, {
                                key: "clearByContentType",
                                value: function() {
                                    if (this.provider && "function" == typeof this.provider.clearByContentType) return this.provider.clearByContentType.apply(this.provider, arguments)
                                }
                            }, {
                                key: "clearAll",
                                value: function() {
                                    if (this.provider && "function" == typeof this.provider.clearAll) return this.provider.clearAll.apply(this.provider, arguments)
                                }
                            }, {
                                key: "getCacheProvider",
                                value: function() {
                                    return this.provider
                                }
                            }, {
                                key: "ContentType",
                                value: function(t) {
                                    return t && "string" == typeof t && (this.content_type_uid = t, this.type = "contentType"), this
                                }
                            }, {
                                key: "Taxonomies",
                                value: function() {
                                    return this.type = "taxonomy", a.merge(new l.default, this)
                                }
                            }, {
                                key: "Entry",
                                value: function(t) {
                                    var e = new s.default;
                                    return t && "string" == typeof t && (e.entry_uid = t), a.merge(e, this)
                                }
                            }, {
                                key: "fetch",
                                value: function(t) {
                                    this.requestParams = {
                                        method: "POST",
                                        headers: a.mergeDeep({}, this.headers),
                                        plugins: this.plugins,
                                        url: this.config.protocol + "://" + this.config.host + ":" + this.config.port + "/" + this.config.version + this.config.urls.content_types + this.content_type_uid,
                                        body: {
                                            _method: "GET",
                                            environment: this.environment
                                        }
                                    };
                                    var e = a.mergeDeep(this.fetchOptions, t);
                                    return (0, f.default)(this, e)
                                }
                            }, {
                                key: "Assets",
                                value: function(t) {
                                    if (this.type = "asset", t && "string" == typeof t) {
                                        var e = new c.default;
                                        return e.asset_uid = t, a.merge(e, this)
                                    }
                                    return this
                                }
                            }, {
                                key: "Query",
                                value: function() {
                                    var t = "contentType" === this.type ? new l.default : new u.default;
                                    return a.merge(t, this)
                                }
                            }, {
                                key: "getLastActivities",
                                value: function() {
                                    return this.requestParams = {
                                        method: "POST",
                                        headers: a.mergeDeep({}, this.headers),
                                        url: this.config.protocol + "://" + this.config.host + ":" + this.config.port + "/" + this.config.version + this.config.urls.content_types,
                                        body: {
                                            _method: "GET",
                                            only_last_activity: !0,
                                            environment: this.environment
                                        }
                                    }, (0, f.default)(this, this.fetchOptions)
                                }
                            }, {
                                key: "getContentTypes",
                                value: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    if (this.requestParams = {
                                            method: "POST",
                                            headers: a.mergeDeep({}, this.headers),
                                            url: this.config.protocol + "://" + this.config.host + ":" + this.config.port + "/" + this.config.version + this.config.urls.content_types,
                                            body: {
                                                _method: "GET",
                                                environment: this.environment
                                            }
                                        }, t)
                                        for (var e in t) this.requestParams.body[e] = t[e];
                                    return (0, f.default)(this, this.fetchOptions)
                                }
                            }, {
                                key: "sync",
                                value: function(t, e) {
                                    if (t && "object" !== h(t)) throw Error("Invalid parameters: params must be an object.");
                                    if (this._query = {}, t)
                                        for (var r in t) {
                                            var n = t[r];
                                            if (t.hasOwnProperty(r)) {
                                                if (!("string" == typeof n || "number" == typeof n || "boolean" == typeof n || n instanceof RegExp || "object" === h(n) && null !== n)) throw Error('Invalid parameter value for key "'.concat(r, '": must be a string, number, object, boolean, or RegExp.'));
                                                this._query[r] = t[r]
                                            }
                                        }
                                    this.requestParams = {
                                        method: "POST",
                                        headers: a.mergeDeep({}, this.headers),
                                        url: this.config.protocol + "://" + this.config.host + ":" + this.config.port + "/" + this.config.version + this.config.urls.sync,
                                        body: {
                                            _method: "GET",
                                            query: this._query
                                        }
                                    };
                                    var o = a.mergeDeep(this.fetchOptions, e);
                                    return a.sendRequest(a.mergeDeep({}, this), o)
                                }
                            }, {
                                key: "imageTransform",
                                value: function(t, e) {
                                    if (t && "string" == typeof t && "object" === h(e) && void 0 === e.length) {
                                        var r = [];
                                        for (var n in e) {
                                            var o = encodeURIComponent(n),
                                                i = encodeURIComponent(e[n]);
                                            r.push(o + "=" + i)
                                        }
                                        t += -1 >= t.indexOf("?") ? "?" + r.join("&") : "&" + r.join("&")
                                    }
                                    return t
                                }
                            }], function(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, function(t) {
                                        var e = function(t) {
                                            if ("object" != h(t) || !t) return t;
                                            var e = t[Symbol.toPrimitive];
                                            if (void 0 !== e) {
                                                var r = e.call(t, "string");
                                                if ("object" != h(r)) return r;
                                                throw TypeError("@@toPrimitive must return a primitive value.")
                                            }
                                            return String(t)
                                        }(t);
                                        return "symbol" == h(e) ? e : e + ""
                                    }(n.key), n)
                                }
                            }(n.prototype, o), Object.defineProperty(n, "prototype", {
                                writable: !1
                            }), n)
                        },
                        444: () => {},
                        514: (t, e) => {
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.default = void 0, e.default = function() {
                                try {
                                    return window.localStorage
                                } catch (t) {
                                    return null
                                }
                            }()
                        },
                        537: (t, e, r) => {
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.default = void 0;
                            var n, o, i = function(t, e) {
                                if (t && t.__esModule) return t;
                                if (null === t || "object" != s(t) && "function" != typeof t) return {
                                    default: t
                                };
                                var r = a(void 0);
                                if (r && r.has(t)) return r.get(t);
                                var n = {
                                        __proto__: null
                                    },
                                    o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                for (var i in t)
                                    if ("default" !== i && ({}).hasOwnProperty.call(t, i)) {
                                        var c = o ? Object.getOwnPropertyDescriptor(t, i) : null;
                                        c && (c.get || c.set) ? Object.defineProperty(n, i, c) : n[i] = t[i]
                                    }
                                return n.default = t, r && r.set(t, n), n
                            }(r(925));

                            function a(t) {
                                if ("function" != typeof WeakMap) return null;
                                var e = new WeakMap,
                                    r = new WeakMap;
                                return (a = function(t) {
                                    return t ? r : e
                                })(t)
                            }

                            function s(t) {
                                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                    return typeof t
                                } : function(t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                            }
                            e.default = (n = function t() {
                                return function(t, e) {
                                    if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                                }(this, t), this._query = {}, this.only = i.transform("only"), this
                            }, o = [{
                                key: "toJSON",
                                value: function() {
                                    return this.tojson = !0, this
                                }
                            }, {
                                key: "addParam",
                                value: function(t, e) {
                                    if (t && "string" == typeof t && e && "string" == typeof e) return this._query[t] = e, this;
                                    this.fetchOptions.debug && this.fetchOptions.logHandler("error", "Kindly provide a valid parameters.")
                                }
                            }, {
                                key: "includeFallback",
                                value: function() {
                                    return this._query.include_fallback = !0, this
                                }
                            }, {
                                key: "includeMetadata",
                                value: function() {
                                    return this._query.include_metadata = !0, this
                                }
                            }, {
                                key: "fetch",
                                value: function(t) {
                                    if (this.asset_uid) {
                                        this.requestParams = {
                                            method: "POST",
                                            headers: i.mergeDeep({}, this.headers),
                                            url: this.config.protocol + "://" + this.config.host + ":" + this.config.port + "/" + this.config.version + this.config.urls.assets + this.asset_uid,
                                            body: {
                                                _method: "GET",
                                                query: this._query
                                            }
                                        };
                                        var e = i.mergeDeep(this.fetchOptions, t);
                                        return i.sendRequest(i.mergeDeep({}, this), e)
                                    }
                                    t.debug && t.logHandler("error", "Kindly provide an asset uid. e.g. .Assets('asset_uid')")
                                }
                            }], function(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, function(t) {
                                        var e = function(t) {
                                            if ("object" != s(t) || !t) return t;
                                            var e = t[Symbol.toPrimitive];
                                            if (void 0 !== e) {
                                                var r = e.call(t, "string");
                                                if ("object" != s(r)) return r;
                                                throw TypeError("@@toPrimitive must return a primitive value.")
                                            }
                                            return String(t)
                                        }(t);
                                        return "symbol" == s(e) ? e : e + ""
                                    }(n.key), n)
                                }
                            }(n.prototype, o), Object.defineProperty(n, "prototype", {
                                writable: !1
                            }), n)
                        },
                        641: (t, e, r) => {
                            function n(t) {
                                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                    return typeof t
                                } : function(t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                            }
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.default = void 0;
                            var o = function(t, e) {
                                if (t && t.__esModule) return t;
                                if (null === t || "object" != n(t) && "function" != typeof t) return {
                                    default: t
                                };
                                var r = i(void 0);
                                if (r && r.has(t)) return r.get(t);
                                var o = {
                                        __proto__: null
                                    },
                                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                for (var s in t)
                                    if ("default" !== s && ({}).hasOwnProperty.call(t, s)) {
                                        var c = a ? Object.getOwnPropertyDescriptor(t, s) : null;
                                        c && (c.get || c.set) ? Object.defineProperty(o, s, c) : o[s] = t[s]
                                    }
                                return o.default = t, r && r.set(t, o), o
                            }(r(94));

                            function i(t) {
                                if ("function" != typeof WeakMap) return null;
                                var e = new WeakMap,
                                    r = new WeakMap;
                                return (i = function(t) {
                                    return t ? r : e
                                })(t)
                            }
                            var a = {};

                            function s(t, e) {
                                !e && t && t.length && t.push("");
                                var r, n = o.getKeys(),
                                    i = o.getStorage();
                                if (t && t.length) {
                                    r = t.join(".");
                                    for (var a = 0, s = n.length; a < s; a++) n[a] && 0 === n[a].indexOf(r) && delete i[n[a]]
                                } else
                                    for (var c = 0, u = n.length; c < u; c++) delete i[n[c]]
                            }
                            a.get = function(t, e) {
                                try {
                                    e(null, o.get(t))
                                } catch (t) {
                                    e(t)
                                }
                            }, a.set = function(t, e, r) {
                                try {
                                    t && e && o.set(t, e), r()
                                } catch (t) {
                                    r(t)
                                }
                            }, a.clearByContentType = function() {
                                try {
                                    if (2 == arguments.length || 3 == arguments.length) {
                                        var t = Array.prototype.slice.call(arguments),
                                            e = t.splice(-1, 1).pop(),
                                            r = [];
                                        r.push.apply(r, t), s(r), e()
                                    }
                                } catch (t) {
                                    callback(t)
                                }
                            }, a.clearByQuery = function(t, e) {
                                try {
                                    for (var r = o.getKeys(), n = o.getStorage(), i = 0, a = r.length; i < a; i++) r[i] && ~r[i].indexOf(t) && delete n[r[i]];
                                    e()
                                } catch (t) {
                                    e(t)
                                }
                            }, a.clearAll = function(t) {
                                try {
                                    s(), t()
                                } catch (e) {
                                    t(e)
                                }
                            }, e.default = a
                        },
                        697: (t, e) => {
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e.default = void 0, e.default = {
                                EU: "eu",
                                US: "us",
                                AZURE_NA: "azure-na",
                                AZURE_EU: "azure-eu",
                                GCP_NA: "gcp-na",
                                GCP_EU: "gcp-eu"
                            }
                        },
                        925: (t, e, r) => {
                            Object.defineProperty(e, "__esModule", {
                                value: !0
                            }), e._type = function(t) {
                                var e = u(t);
                                return "object" === e && Array.isArray(t) && (e = "array"), e
                            }, e.generateHash = p, e.getHash = y, e.isBrowser = function() {
                                return "undefined" != typeof window
                            }, e.merge = l, e.mergeDeep = function(t, e) {
                                var r = this,
                                    n = function(t, e) {
                                        for (var o in e) "object" == r._type(e[o]) && r._type(t[o]) == r._type(e[o]) ? n(t[o], e[o]) : "array" == r._type(e[o]) && r._type(t[o]) == r._type(e[o]) ? t[o] = t[o].concat(e[o]) : t[o] = e[o]
                                    };
                                return n(t, e), t
                            }, e.parseQueryFromParams = f, e.resultWrapper = d, e.sendRequest = function(t, e) {
                                var r, o = t.environment_uid;
                                o ? t._query.environment_uid = o : (t._query || (t._query = {}), t._query.environment = t.environment);
                                var i = void 0 !== t.queryCachePolicy ? t.queryCachePolicy : t.cachePolicy,
                                    s = void 0 !== t.tojson && t.tojson,
                                    p = !!(t.entry_uid || t.singleEntry || t.asset_uid),
                                    v = y(f(t, p, s));
                                if (t && t.requestParams && t.requestParams.body && t.requestParams.body.query) {
                                    var _ = JSON.parse(JSON.stringify(t.requestParams.body.query));
                                    "object" !== u(_) && (_ = JSON.parse(_)), delete t.requestParams.body.query, t.requestParams.body = l(t.requestParams.body, _), t.live_preview && !0 === t.live_preview.enable && t.live_preview.live_preview && "init" !== t.live_preview.live_preview && (t.requestParams.body = l(t.requestParams.body, {
                                        live_preview: t.live_preview.live_preview || "init"
                                    }), i = 2, t.requestParams.body.environment && delete t.requestParams.body.environment, t.requestParams.headers.access_token && delete t.requestParams.headers.access_token, delete t.requestParams.headers.authorization, delete t.requestParams.headers.preview_token, t.live_preview.preview_token ? (t.requestParams.headers.preview_token = t.live_preview.preview_token, t.requestParams.headers.live_preview = t.live_preview.live_preview) : t.live_preview.management_token && (t.requestParams.headers.authorization = t.live_preview.management_token))
                                }
                                var m = function(t, e) {
                                        return function(r, n) {
                                            try {
                                                if (r) return e(r);
                                                s || (n = d(n)), t(h(n))
                                            } catch (t) {
                                                e(t)
                                            }
                                        }
                                    },
                                    b = function(r, o, a) {
                                        r && (0, n.default)(t, e).then((function(e) {
                                            try {
                                                t.entry_uid = t.asset_uid = t.tojson = t.queryCachePolicy = void 0;
                                                var r = {},
                                                    n = {};
                                                if (t.singleEntry) {
                                                    if (t.singleEntry = !1, e.schema && (r.schema = e.schema), e.content_type && (r.content_type = e.content_type, delete r.schema), e.entries && e.entries.length) r.entry = e.entries[0];
                                                    else {
                                                        if (!e.assets || !e.assets.length) return 2 === i && null !== t.provider ? void t.provider.get(v, function(t, e) {
                                                            if (t || !e || 0 === e.entries.length && 0 === e.assets.length) return a({
                                                                error_code: 141,
                                                                error_message: "The requested entry doesn't exist."
                                                            });
                                                            m(o, a)(t, e)
                                                        }) : a({
                                                            error_code: 141,
                                                            error_message: "The requested entry doesn't exist."
                                                        });
                                                        r.assets = e.assets[0]
                                                    }
                                                } else e.items ? n = {
                                                    items: e.items,
                                                    pagination_token: e.pagination_token,
                                                    sync_token: e.sync_token,
                                                    total_count: e.total_count
                                                } : r = e;
                                                return -1 !== i && null !== t.provider ? (t.provider.set(v, r, function(t) {
                                                    try {
                                                        return t && a(t), s || (r = d(r)), o(h(r))
                                                    } catch (t) {
                                                        return a(t)
                                                    }
                                                }), o(h(r))) : Object.keys(n).length ? o(n) : (s || (r = d(r)), o(h(r)))
                                            } catch (t) {
                                                return a({
                                                    message: t.message
                                                })
                                            }
                                        }).bind(t)).catch(function(e) {
                                            e ? a(e) : 2 === i && null !== t.provider && t.provider.get(v, m(o, a))
                                        })
                                    };
                                switch (i) {
                                    case 1:
                                        return new Promise((r = c(a().mark(function e(r, n) {
                                            return a().wrap(function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (null === t.provider) {
                                                            e.next = 5;
                                                            break
                                                        }
                                                        return e.next = 3, t.provider.get(v, function() {
                                                            var t = c(a().mark(function t(e, o) {
                                                                return a().wrap(function(t) {
                                                                    for (;;) switch (t.prev = t.next) {
                                                                        case 0:
                                                                            if (t.prev = 0, !e && o) {
                                                                                t.next = 5;
                                                                                break
                                                                            }
                                                                            b(!0, r, n), t.next = 7;
                                                                            break;
                                                                        case 5:
                                                                            return s || (o = d(o)), t.abrupt("return", r(h(o)));
                                                                        case 7:
                                                                            t.next = 12;
                                                                            break;
                                                                        case 9:
                                                                            return t.prev = 9, t.t0 = t.catch(0), t.abrupt("return", n(t.t0));
                                                                        case 12:
                                                                        case "end":
                                                                            return t.stop()
                                                                    }
                                                                }, t, null, [
                                                                    [0, 9]
                                                                ])
                                                            }));
                                                            return function(e, r) {
                                                                return t.apply(this, arguments)
                                                            }
                                                        }());
                                                    case 3:
                                                        e.next = 6;
                                                        break;
                                                    case 5:
                                                        b(!0, r, n);
                                                    case 6:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }, e)
                                        })), function(t, e) {
                                            return r.apply(this, arguments)
                                        }));
                                    case 2:
                                    case 0:
                                    case void 0:
                                    case -1:
                                        return new Promise(function(t, e) {
                                            b(!0, t, e)
                                        })
                                }
                                if (3 === i) return new Promise(function(e, r) {
                                    null !== t.provider && t.provider.get(v, function(t, n) {
                                        try {
                                            t || !n ? r(t) : (s || (n = d(n)), e(h(n)))
                                        } catch (t) {
                                            r(t)
                                        }
                                    })
                                }).then(function() {
                                    return new Promise(function(t, e) {
                                        b(!0, t, e)
                                    })
                                }).catch(function(t) {
                                    return new Promise(function(t, e) {
                                        b(!0, t, e)
                                    })
                                })
                            }, e.spreadResult = h, e.transform = function(t) {
                                return function() {
                                    switch (this._query[t] = this._query[t] || {}, arguments.length) {
                                        case 1:
                                            if (Array.isArray(arguments[0]) || "string" == typeof arguments[0]) {
                                                var e = this._query[t].BASE || [];
                                                return e = e.concat(arguments[0]), this._query[t].BASE = e, this
                                            }
                                            console.error("Kindly provide valid parameters");
                                            break;
                                        case 2:
                                            if ("string" == typeof arguments[0] && (Array.isArray(arguments[1]) || "string" == typeof arguments[1])) {
                                                var r = this._query[t][arguments[0]] || [];
                                                return r = r.concat(arguments[1]), this._query[t][arguments[0]] = r, this
                                            }
                                            console.error("Kindly provide valid parameters");
                                            break;
                                        default:
                                            console.error("Kindly provide valid parameters")
                                    }
                                }
                            };
                            var n = i(r(185)),
                                o = i(r(209));

                            function i(t) {
                                return t && t.__esModule ? t : {
                                    default: t
                                }
                            }

                            function a() {
                                a = function() {
                                    return e
                                };
                                var t, e = {},
                                    r = Object.prototype,
                                    n = r.hasOwnProperty,
                                    o = Object.defineProperty || function(t, e, r) {
                                        t[e] = r.value
                                    },
                                    i = "function" == typeof Symbol ? Symbol : {},
                                    s = i.iterator || "@@iterator",
                                    c = i.asyncIterator || "@@asyncIterator",
                                    l = i.toStringTag || "@@toStringTag";

                                function f(t, e, r) {
                                    return Object.defineProperty(t, e, {
                                        value: r,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }), t[e]
                                }
                                try {
                                    f({}, "")
                                } catch (t) {
                                    f = function(t, e, r) {
                                        return t[e] = r
                                    }
                                }

                                function y(e, r, n, i) {
                                    var a, s, c = Object.create((r && r.prototype instanceof m ? r : m).prototype);
                                    return o(c, "_invoke", {
                                        value: (a = new S(i || []), s = d, function(r, o) {
                                            if (s === h) throw Error("Generator is already running");
                                            if (s === v) {
                                                if ("throw" === r) throw o;
                                                return {
                                                    value: t,
                                                    done: !0
                                                }
                                            }
                                            for (a.method = r, a.arg = o;;) {
                                                var i = a.delegate;
                                                if (i) {
                                                    var c = function e(r, n) {
                                                        var o = n.method,
                                                            i = r.iterator[o];
                                                        if (i === t) return n.delegate = null, "throw" === o && r.iterator.return && (n.method = "return", n.arg = t, e(r, n), "throw" === n.method) || "return" !== o && (n.method = "throw", n.arg = TypeError("The iterator does not provide a '" + o + "' method")), _;
                                                        var a = p(i, r.iterator, n.arg);
                                                        if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, _;
                                                        var s = a.arg;
                                                        return s ? s.done ? (n[r.resultName] = s.value, n.next = r.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, _) : s : (n.method = "throw", n.arg = TypeError("iterator result is not an object"), n.delegate = null, _)
                                                    }(i, a);
                                                    if (c) {
                                                        if (c === _) continue;
                                                        return c
                                                    }
                                                }
                                                if ("next" === a.method) a.sent = a._sent = a.arg;
                                                else if ("throw" === a.method) {
                                                    if (s === d) throw s = v, a.arg;
                                                    a.dispatchException(a.arg)
                                                } else "return" === a.method && a.abrupt("return", a.arg);
                                                s = h;
                                                var u = p(e, n, a);
                                                if ("normal" === u.type) {
                                                    if (s = a.done ? v : "suspendedYield", u.arg === _) continue;
                                                    return {
                                                        value: u.arg,
                                                        done: a.done
                                                    }
                                                }
                                                "throw" === u.type && (s = v, a.method = "throw", a.arg = u.arg)
                                            }
                                        })
                                    }), c
                                }

                                function p(t, e, r) {
                                    try {
                                        return {
                                            type: "normal",
                                            arg: t.call(e, r)
                                        }
                                    } catch (t) {
                                        return {
                                            type: "throw",
                                            arg: t
                                        }
                                    }
                                }
                                e.wrap = y;
                                var d = "suspendedStart",
                                    h = "executing",
                                    v = "completed",
                                    _ = {};

                                function m() {}

                                function b() {}

                                function g() {}
                                var O = {};
                                f(O, s, function() {
                                    return this
                                });
                                var w = Object.getPrototypeOf,
                                    E = w && w(w(q([])));
                                E && E !== r && n.call(E, s) && (O = E);
                                var T = g.prototype = m.prototype = Object.create(O);

                                function k(t) {
                                    ["next", "throw", "return"].forEach(function(e) {
                                        f(t, e, function(t) {
                                            return this._invoke(e, t)
                                        })
                                    })
                                }

                                function P(t, e) {
                                    var r;
                                    o(this, "_invoke", {
                                        value: function(o, i) {
                                            function a() {
                                                return new e(function(r, a) {
                                                    ! function r(o, i, a, s) {
                                                        var c = p(t[o], t, i);
                                                        if ("throw" !== c.type) {
                                                            var l = c.arg,
                                                                f = l.value;
                                                            return f && "object" == u(f) && n.call(f, "__await") ? e.resolve(f.__await).then(function(t) {
                                                                r("next", t, a, s)
                                                            }, function(t) {
                                                                r("throw", t, a, s)
                                                            }) : e.resolve(f).then(function(t) {
                                                                l.value = t, a(l)
                                                            }, function(t) {
                                                                return r("throw", t, a, s)
                                                            })
                                                        }
                                                        s(c.arg)
                                                    }(o, i, r, a)
                                                })
                                            }
                                            return r = r ? r.then(a, a) : a()
                                        }
                                    })
                                }

                                function N(t) {
                                    var e = {
                                        tryLoc: t[0]
                                    };
                                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                                }

                                function j(t) {
                                    var e = t.completion || {};
                                    e.type = "normal", delete e.arg, t.completion = e
                                }

                                function S(t) {
                                    this.tryEntries = [{
                                        tryLoc: "root"
                                    }], t.forEach(N, this), this.reset(!0)
                                }

                                function q(e) {
                                    if (e || "" === e) {
                                        var r = e[s];
                                        if (r) return r.call(e);
                                        if ("function" == typeof e.next) return e;
                                        if (!isNaN(e.length)) {
                                            var o = -1,
                                                i = function r() {
                                                    for (; ++o < e.length;)
                                                        if (n.call(e, o)) return r.value = e[o], r.done = !1, r;
                                                    return r.value = t, r.done = !0, r
                                                };
                                            return i.next = i
                                        }
                                    }
                                    throw TypeError(u(e) + " is not iterable")
                                }
                                return b.prototype = g, o(T, "constructor", {
                                    value: g,
                                    configurable: !0
                                }), o(g, "constructor", {
                                    value: b,
                                    configurable: !0
                                }), b.displayName = f(g, l, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                                    var e = "function" == typeof t && t.constructor;
                                    return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
                                }, e.mark = function(t) {
                                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, f(t, l, "GeneratorFunction")), t.prototype = Object.create(T), t
                                }, e.awrap = function(t) {
                                    return {
                                        __await: t
                                    }
                                }, k(P.prototype), f(P.prototype, c, function() {
                                    return this
                                }), e.AsyncIterator = P, e.async = function(t, r, n, o, i) {
                                    void 0 === i && (i = Promise);
                                    var a = new P(y(t, r, n, o), i);
                                    return e.isGeneratorFunction(r) ? a : a.next().then(function(t) {
                                        return t.done ? t.value : a.next()
                                    })
                                }, k(T), f(T, l, "Generator"), f(T, s, function() {
                                    return this
                                }), f(T, "toString", function() {
                                    return "[object Generator]"
                                }), e.keys = function(t) {
                                    var e = Object(t),
                                        r = [];
                                    for (var n in e) r.push(n);
                                    return r.reverse(),
                                        function t() {
                                            for (; r.length;) {
                                                var n = r.pop();
                                                if (n in e) return t.value = n, t.done = !1, t
                                            }
                                            return t.done = !0, t
                                        }
                                }, e.values = q, S.prototype = {
                                    constructor: S,
                                    reset: function(e) {
                                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(j), !e)
                                            for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                                    },
                                    stop: function() {
                                        this.done = !0;
                                        var t = this.tryEntries[0].completion;
                                        if ("throw" === t.type) throw t.arg;
                                        return this.rval
                                    },
                                    dispatchException: function(e) {
                                        if (this.done) throw e;
                                        var r = this;

                                        function o(n, o) {
                                            return s.type = "throw", s.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o
                                        }
                                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                                            var a = this.tryEntries[i],
                                                s = a.completion;
                                            if ("root" === a.tryLoc) return o("end");
                                            if (a.tryLoc <= this.prev) {
                                                var c = n.call(a, "catchLoc"),
                                                    u = n.call(a, "finallyLoc");
                                                if (c && u) {
                                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                                } else if (c) {
                                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                                } else {
                                                    if (!u) throw Error("try statement without catch or finally");
                                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                                }
                                            }
                                        }
                                    },
                                    abrupt: function(t, e) {
                                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                            var o = this.tryEntries[r];
                                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                                var i = o;
                                                break
                                            }
                                        }
                                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                                        var a = i ? i.completion : {};
                                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, _) : this.complete(a)
                                    },
                                    complete: function(t, e) {
                                        if ("throw" === t.type) throw t.arg;
                                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), _
                                    },
                                    finish: function(t) {
                                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                            var r = this.tryEntries[e];
                                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), _
                                        }
                                    },
                                    catch: function(t) {
                                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                            var r = this.tryEntries[e];
                                            if (r.tryLoc === t) {
                                                var n = r.completion;
                                                if ("throw" === n.type) {
                                                    var o = n.arg;
                                                    j(r)
                                                }
                                                return o
                                            }
                                        }
                                        throw Error("illegal catch attempt")
                                    },
                                    delegateYield: function(e, r, n) {
                                        return this.delegate = {
                                            iterator: q(e),
                                            resultName: r,
                                            nextLoc: n
                                        }, "next" === this.method && (this.arg = t), _
                                    }
                                }, e
                            }

                            function s(t, e, r, n, o, i, a) {
                                try {
                                    var s = t[i](a),
                                        c = s.value
                                } catch (t) {
                                    return void r(t)
                                }
                                s.done ? e(c) : Promise.resolve(c).then(n, o)
                            }

                            function c(t) {
                                return function() {
                                    var e = this,
                                        r = arguments;
                                    return new Promise(function(n, o) {
                                        var i = t.apply(e, r);

                                        function a(t) {
                                            s(i, n, o, a, c, "next", t)
                                        }

                                        function c(t) {
                                            s(i, n, o, a, c, "throw", t)
                                        }
                                        a(void 0)
                                    })
                                }
                            }

                            function u(t) {
                                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                    return typeof t
                                } : function(t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                            }

                            function l(t, e) {
                                if (t && e)
                                    for (var r in e) t[r] = e[r];
                                return t
                            }

                            function f(t, e, r) {
                                if (t && t.requestParams) {
                                    var n = l({}, t.requestParams.body && t.requestParams.body.query || {});
                                    return n.environment_uid && (delete n.environment_uid, n.environment = t.environment), n.environment = t.environment, {
                                        content_type_uid: t.content_type_uid,
                                        locale: n.locale || "en-us",
                                        query: n,
                                        entry_uid: t.entry_uid,
                                        asset_uid: t.asset_uid,
                                        single: e || "false",
                                        toJSON: r || "false",
                                        api_key: t.requestParams.headers ? t.requestParams.headers.api_key : ""
                                    }
                                }
                            }

                            function y(t) {
                                try {
                                    var e = p(JSON.stringify(t)),
                                        r = [];
                                    return r.push(t.content_type_uid), r.push(t.locale), t.entry_uid && r.push(t.entry_uid), t.asset_uid && r.push(t.asset_uid), r.push(e), r.join(".")
                                } catch (t) {}
                            }

                            function p(t) {
                                var e, r, n = 0;
                                if (0 === t.length) return n;
                                for (e = 0, r = t.length; e < r; e++) n = (n << 5) - n + t.charCodeAt(e) | 0;
                                return n < -1 ? -1 * n : n
                            }

                            function d(t) {
                                if (t && void 0 !== t.entries) {
                                    if (t.entries && t.entries.length)
                                        for (var e = 0, r = t.entries.length; e < r; e++) t.entries[e] = (0, o.default)(t.entries[e]);
                                    else t.entries = []
                                } else if (t && t.assets && void 0 !== t.assets) {
                                    if (t.assets && t.assets.length)
                                        for (var n = 0, i = t.assets.length; n < i; n++) t.assets[n] = (0, o.default)(t.assets[n]);
                                    else t.assets = []
                                } else t && void 0 !== t.entry ? t.entry = (0, o.default)(t.entry) : t && void 0 !== t.asset ? t.asset = (0, o.default)(t.asset) : t && void 0 !== t.items && (t.items = (0, o.default)(t.items).toJSON());
                                return t
                            }

                            function h(t) {
                                var e = [];
                                return t && Object.keys(t).length && (void 0 !== t.entries && (e.push(t.entries), t.content_type && (e.schema = t.content_type)), void 0 !== t.assets && e.push(t.assets), void 0 === t.content_type && void 0 === t.schema || e.push(t.content_type || t.schema), void 0 !== t.count && e.push(t.count), void 0 !== t.entry && (e = t.entry, t.schema && (e.schema = t.schema), t.content_type && (e.content_type = t.content_type)), void 0 !== t.asset && (e = t.asset), void 0 !== t.items && e.push(t)), e
                            }
                            Promise.prototype.spread || (Promise.prototype.spread = function(t, e) {
                                return e = e || function(t) {}, this.then(function(e) {
                                    return t.apply(t, e)
                                }).catch(function(t) {
                                    e(t)
                                })
                            })
                        },
                        949: (t, e, r) => {
                            var n, o, i = c(r(348)),
                                a = c(r(285)),
                                s = c(r(697));

                            function c(t) {
                                return t && t.__esModule ? t : {
                                    default: t
                                }
                            }

                            function u(t) {
                                return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                    return typeof t
                                } : function(t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                            }

                            function l(t, e) {
                                var r = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                if (!r) {
                                    if (Array.isArray(t) || (r = function(t, e) {
                                            if (t) {
                                                if ("string" == typeof t) return f(t, void 0);
                                                var r = ({}).toString.call(t).slice(8, -1);
                                                return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? f(t, void 0) : void 0
                                            }
                                        }(t)) || e && t && "number" == typeof t.length) {
                                        r && (t = r);
                                        var n = 0,
                                            o = function() {};
                                        return {
                                            s: o,
                                            n: function() {
                                                return n >= t.length ? {
                                                    done: !0
                                                } : {
                                                    done: !1,
                                                    value: t[n++]
                                                }
                                            },
                                            e: function(t) {
                                                throw t
                                            },
                                            f: o
                                        }
                                    }
                                    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }
                                var i, a = !0,
                                    s = !1;
                                return {
                                    s: function() {
                                        r = r.call(t)
                                    },
                                    n: function() {
                                        var t = r.next();
                                        return a = t.done, t
                                    },
                                    e: function(t) {
                                        s = !0, i = t
                                    },
                                    f: function() {
                                        try {
                                            a || null == r.return || r.return()
                                        } finally {
                                            if (s) throw i
                                        }
                                    }
                                }
                            }

                            function f(t, e) {
                                (null == e || e > t.length) && (e = t.length);
                                for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                                return n
                            }

                            function y(t, e) {
                                var r = Object.keys(t);
                                if (Object.getOwnPropertySymbols) {
                                    var n = Object.getOwnPropertySymbols(t);
                                    e && (n = n.filter(function(e) {
                                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                                    })), r.push.apply(r, n)
                                }
                                return r
                            }

                            function p(t, e) {
                                return (p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                                    return t.__proto__ = e, t
                                })(t, e)
                            }

                            function d() {
                                try {
                                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
                                } catch (t) {}
                                return (d = function() {
                                    return !!t
                                })()
                            }

                            function h(t) {
                                var e = function(t) {
                                    if ("object" != u(t) || !t) return t;
                                    var e = t[Symbol.toPrimitive];
                                    if (void 0 !== e) {
                                        var r = e.call(t, "string");
                                        if ("object" != u(r)) return r;
                                        throw TypeError("@@toPrimitive must return a primitive value.")
                                    }
                                    return String(t)
                                }(t);
                                return "symbol" == u(e) ? e : e + ""
                            }
                            var v = (n = function t() {
                                (function(t, e) {
                                    if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                                })(this, t), this.CachePolicy = a.default.policies, this.Region = s.default, this.Utils = r(215)
                            }, o = [{
                                key: "Stack",
                                value: function() {
                                    for (var t = arguments.length, e = Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                                    return function(t, e, r) {
                                        if (d()) return Reflect.construct.apply(null, arguments);
                                        var n = [null];
                                        n.push.apply(n, e);
                                        var o = new(t.bind.apply(t, n));
                                        return r && p(o, r.prototype), o
                                    }(i.default, e)
                                }
                            }, {
                                key: "updateAssetURL",
                                value: function(t) {
                                    if (null == t._embedded_items) throw Error("_embedded_items not present in entry. Call includeEmbeddedItems() before fetching entry.");
                                    var e = function(e) {
                                        var r = t._embedded_items[e];
                                        Array.isArray(r) && r.forEach(function(r) {
                                            if ("sys_assets" == r._content_type_uid && r.filename) {
                                                var n, o, i = function(t) {
                                                        for (var e = 0; e < t.length; e++)
                                                            if (t[e].children && t[e].children.length && i(t[e].children), t[e].attrs && t[e].attrs["asset-uid"] === r.uid) return void(n = t[e].attrs)
                                                    },
                                                    a = function(t) {
                                                        for (var e = 1; e < arguments.length; e++) {
                                                            var r = null != arguments[e] ? arguments[e] : {};
                                                            e % 2 ? y(Object(r), !0).forEach(function(e) {
                                                                var n, o;
                                                                n = e, o = r[e], (n = h(n)) in t ? Object.defineProperty(t, n, {
                                                                    value: o,
                                                                    enumerable: !0,
                                                                    configurable: !0,
                                                                    writable: !0
                                                                }) : t[n] = o
                                                            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : y(Object(r)).forEach(function(e) {
                                                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                                            })
                                                        }
                                                        return t
                                                    }({}, t),
                                                    s = e.split("."),
                                                    c = new Set(["__proto__", "constructor", "prototype"]),
                                                    f = l(s);
                                                try {
                                                    for (f.s(); !(o = f.n()).done;) {
                                                        var p = o.value;
                                                        if (!c.has(p)) {
                                                            if (a && "object" === u(a) && null !== a && Object.prototype.hasOwnProperty.call(a, p)) {
                                                                var d = a[p];
                                                                "object" === u(d) && null !== d && (a = d)
                                                            } else if (Array.isArray(a)) {
                                                                var v, _ = l(a);
                                                                try {
                                                                    for (_.s(); !(v = _.n()).done;) {
                                                                        var m = v.value;
                                                                        m && "object" === u(m) && Object.prototype.hasOwnProperty.call(m, p) && (a = m[p])
                                                                    }
                                                                } catch (t) {
                                                                    _.e(t)
                                                                } finally {
                                                                    _.f()
                                                                }
                                                            }
                                                        }
                                                    }
                                                } catch (t) {
                                                    f.e(t)
                                                } finally {
                                                    f.f()
                                                }
                                                a.children && i(a.children), n && (n.href = r.url)
                                            }
                                        })
                                    };
                                    for (var r in t._embedded_items) e(r)
                                }
                            }], function(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, h(n.key), n)
                                }
                            }(n.prototype, o), Object.defineProperty(n, "prototype", {
                                writable: !1
                            }), n);
                            t.exports = new v
                        }
                    }, e = {},
                    function r(n) {
                        var o = e[n];
                        if (void 0 !== o) return o.exports;
                        var i = e[n] = {
                            exports: {}
                        };
                        return t[n](i, i.exports, r), i.exports
                    }(949)
            }, t.exports = n()
        },
        25566: function(t) {
            var e, r, n, o = t.exports = {};

            function i() {
                throw Error("setTimeout has not been defined")
            }

            function a() {
                throw Error("clearTimeout has not been defined")
            }

            function s(t) {
                if (e === setTimeout) return setTimeout(t, 0);
                if ((e === i || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
                try {
                    return e(t, 0)
                } catch (r) {
                    try {
                        return e.call(null, t, 0)
                    } catch (r) {
                        return e.call(this, t, 0)
                    }
                }
            }! function() {
                try {
                    e = "function" == typeof setTimeout ? setTimeout : i
                } catch (t) {
                    e = i
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : a
                } catch (t) {
                    r = a
                }
            }();
            var c = [],
                u = !1,
                l = -1;

            function f() {
                u && n && (u = !1, n.length ? c = n.concat(c) : l = -1, c.length && y())
            }

            function y() {
                if (!u) {
                    var t = s(f);
                    u = !0;
                    for (var e = c.length; e;) {
                        for (n = c, c = []; ++l < e;) n && n[l].run();
                        l = -1, e = c.length
                    }
                    n = null, u = !1,
                        function(t) {
                            if (r === clearTimeout) return clearTimeout(t);
                            if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                            try {
                                r(t)
                            } catch (e) {
                                try {
                                    return r.call(null, t)
                                } catch (e) {
                                    return r.call(this, t)
                                }
                            }
                        }(t)
                }
            }

            function p(t, e) {
                this.fun = t, this.array = e
            }

            function d() {}
            o.nextTick = function(t) {
                var e = Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
                c.push(new p(t, e)), 1 !== c.length || u || s(y)
            }, p.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = d, o.addListener = d, o.once = d, o.off = d, o.removeListener = d, o.removeAllListeners = d, o.emit = d, o.prependListener = d, o.prependOnceListener = d, o.listeners = function(t) {
                return []
            }, o.binding = function(t) {
                throw Error("process.binding is not supported")
            }, o.cwd = function() {
                return "/"
            }, o.chdir = function(t) {
                throw Error("process.chdir is not supported")
            }, o.umask = function() {
                return 0
            }
        },
        89295: function(t, e, r) {
            "use strict";
            r.d(e, {
                I1: function() {
                    return l
                },
                yB: function() {
                    return u
                }
            });
            var n = r(71860),
                o = r(25566),
                i = Object.defineProperty,
                a = (t, e, r) => e in t ? i(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                s = (t, e, r) => a(t, "symbol" != typeof e ? e + "" : e, r);
            class c {
                configure(t, e) {
                    t.api_key && (this._stack = n.Stack(t), e && (this._env = e))
                }
                setCachePolicy(t) {
                    if (this._stack) this._stack.setCachePolicy(t);
                    else throw Error("Cannot set cache policy before stack has been configured. Call Contenstack.configure to setup content stack")
                }
                get stack() {
                    if (this._stack) return this._stack;
                    throw Error("Cannot access stack before it has been configured. Call Contentstack.configure to setup content stack")
                }
                get env() {
                    return this._env
                }
                constructor() {
                    s(this, "_env", {}), s(this, "_stack"), this._stack = null
                }
            }
            let u = new c;
            u.configure({
                api_key: o.env.CONTENTSTACK_BROWSE_API_KEY,
                branch: o.env.CONTENTSTACK_BROWSE_BRANCH,
                delivery_token: o.env.CONTENTSTACK_BROWSE_DELIVERY_TOKEN,
                environment: o.env.CONTENTSTACK_BROWSE_ENVIRONMENT,
                fetchOptions: {
                    retryLimit: 0
                },
                region: o.env.CONTENTSTACK_BROWSE_REGION
            }, {
                CONTENT_ENTRY_ENVIRONMENT_CLIENT_CONFIGURATION: o.env.CONTENT_ENTRY_ENVIRONMENT_CLIENT_CONFIGURATION,
                CONTENT_ENTRY_ID_CLIENT_CONFIGURATION: o.env.CONTENT_ENTRY_ID_CLIENT_CONFIGURATION
            });
            let l = new c;
            l.configure({
                api_key: "blt50d2ecfe89d20b3f",
                branch: "main",
                delivery_token: "csf10510394b19ccb31bced673",
                environment: "live",
                live_preview: {
                    enable: !0,
                    host: "azure-na-rest-preview.contentstack.com",
                    preview_token: "cs3b87a77bd5529aa100d0e225"
                },
                region: "azure-na"
            }), new c().configure({
                api_key: o.env.CONTENTSTACK_ACCOUNT_API_KEY,
                branch: o.env.CONTENTSTACK_ACCOUNT_BRANCH,
                delivery_token: o.env.CONTENTSTACK_ACCOUNT_DELIVERY_TOKEN,
                environment: o.env.CONTENTSTACK_ACCOUNT_ENVIRONMENT,
                fetchOptions: {
                    retryLimit: 0
                },
                region: o.env.CONTENTSTACK_ACCOUNT_REGION
            }, {
                CONTENT_ENTRY_ENVIRONMENT_CLIENT_CONFIGURATION: o.env.CONTENT_ENTRY_ENVIRONMENT_CLIENT_CONFIGURATION,
                CONTENT_ENTRY_ID_CLIENT_CONFIGURATION: o.env.CONTENT_ENTRY_ID_CLIENT_CONFIGURATION
            })
        },
        8142: function(t, e, r) {
            "use strict";
            r.d(e, {
                C: function() {
                    return u
                }
            });
            var n = r(71860),
                o = r(25566),
                i = Object.defineProperty,
                a = (t, e, r) => e in t ? i(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                s = (t, e, r) => a(t, "symbol" != typeof e ? e + "" : e, r);
            class c {
                configure(t, e) {
                    this._stack = n.Stack(t), e && (this._env = e)
                }
                setCachePolicy(t) {
                    if (this._stack) this._stack.setCachePolicy(t);
                    else throw Error("Cannot set cache policy before stack has been configured. Call Contenstack.configure to setup content stack")
                }
                get stack() {
                    if (this._stack) return this._stack;
                    throw Error("Cannot access stack before it has been configured. Call ConfigStack.configure to setup content stack")
                }
                get env() {
                    return this._env
                }
                constructor() {
                    s(this, "_env", {}), s(this, "_stack"), this._stack = null
                }
            }
            let u = new c;
            u.configure({
                api_key: o.env.CONTENTSTACK_CONFIG_API_KEY,
                branch: o.env.CONTENTSTACK_CONFIG_BRANCH,
                delivery_token: o.env.CONTENTSTACK_CONFIG_DELIVERY_TOKEN,
                environment: o.env.CONTENTSTACK_CONFIG_ENVIRONMENT,
                fetchOptions: {
                    retryLimit: 0
                },
                region: o.env.CONTENTSTACK_CONFIG_REGION
            }, {
                CONTENT_ENTRY_ENVIRONMENT_CLIENT_CONFIGURATION: o.env.CONTENT_ENTRY_ENVIRONMENT_CLIENT_CONFIGURATION,
                CONTENT_ENTRY_ID_CLIENT_CONFIGURATION: o.env.CONTENT_ENTRY_ID_CLIENT_CONFIGURATION
            })
        }
    }
]);