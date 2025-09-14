(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6792], {
        40373: function(e, t, r) {
            var o, n = r(96434).Buffer;
            o = function() {
                return function() {
                    var e, t, r, o = {
                            "./packages/@logrocket/arson/src/index.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.encode = function(e) {
                                    return JSON.stringify(function(e) {
                                        var t = [],
                                            r = "function" == typeof Map && new Map;

                                        function o(e) {
                                            var o;
                                            switch ((0, s.default)(e)) {
                                                case "undefined":
                                                    return -1;
                                                case "number":
                                                    if (isNaN(e)) return -3;
                                                    if (!isFinite(e)) return e < 0 ? -5 : -4
                                            }
                                            return r ? void 0 === (o = r.get(e)) && (o = t.push(e) - 1, r.set(e, o)) : (o = t.indexOf(e)) < 0 && (o = t.push(e) - 1), o
                                        }
                                        var n = o(e);
                                        if (n < 0) return n;
                                        for (var u = [], c = 0; c < t.length; ++c) u[c] = function(e) {
                                            var t = e;
                                            if (e && "object" === (0, s.default)(e)) {
                                                var r = Object.keys(e);
                                                if (e && "object" === (0, s.default)(e) && (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__) === Object.prototype) t = {};
                                                else if (Array.isArray(e)) {
                                                    t = Array(e.length);
                                                    var n = e.length;
                                                    if (n > r.length)
                                                        for (var u = 0; u < n; ++u) t[u] = -2
                                                } else {
                                                    for (var c in a) {
                                                        var i = a[c].deconstruct(e);
                                                        if (i) {
                                                            for (var u = 0; u < i.length; ++u) i[u] = o(i[u]);
                                                            return i.unshift(c), i
                                                        }
                                                    }
                                                    return ({}).toString.call(e)
                                                }
                                                r.forEach(function(r) {
                                                    t[r] = o(e[r])
                                                })
                                            }
                                            return t
                                        }(t[c]);
                                        return u
                                    }(e))
                                }, t.decode = function(e) {
                                    return function(e) {
                                        if ("number" == typeof e && e < 0) return o(e);
                                        var t = Array(e.length);

                                        function r(e) {
                                            return e in t ? t[e] : t[e] = o(e)
                                        }

                                        function o(t) {
                                            if (t < 0) {
                                                if (-1 === t || -2 === t) return;
                                                if (-3 === t) return NaN;
                                                if (-4 === t) return 1 / 0;
                                                if (-5 === t) return -1 / 0;
                                                throw Error("invalid ARSON index: " + t)
                                            }
                                            var o = e[t];
                                            if (o && "object" === (0, s.default)(o)) {
                                                if (Array.isArray(o)) {
                                                    var c = o[0];
                                                    if ("string" == typeof c && c in a) {
                                                        var i = a[c].reconstruct,
                                                            l = i();
                                                        return l && n.push({
                                                            reconstruct: i,
                                                            empty: l,
                                                            argIndexes: o.slice(1)
                                                        }), e[t] = l || i(o.slice(1).map(r))
                                                    }
                                                }
                                                u.push(o)
                                            }
                                            return o
                                        }
                                        var n = [],
                                            u = [];
                                        return e.forEach(function(e, t) {
                                            r(t)
                                        }), n.forEach(function(e) {
                                            e.args = e.argIndexes.map(r)
                                        }), u.forEach(function(t) {
                                            Object.keys(t).forEach(function(o) {
                                                var n = t[o];
                                                if ("number" == typeof n) {
                                                    if (n < 0) {
                                                        if (-2 === n) {
                                                            delete t[o];
                                                            return
                                                        }
                                                        t[o] = r(n)
                                                    } else t[o] = e[n]
                                                }
                                            })
                                        }), n.forEach(function(e) {
                                            e.reconstruct.call(e.empty, e.args)
                                        }), e[0]
                                    }(JSON.parse(e))
                                };
                                var s = o(r("./node_modules/@babel/runtime/helpers/typeof.js")),
                                    a = Object.create(null),
                                    u = function(e, t) {
                                        function r(r) {
                                            if ("function" != typeof t[r]) throw Error("second argument to ARSON.registerType(" + JSON.stringify(e) + ", ...) must be an object with a " + r + " method")
                                        }
                                        r("deconstruct"), r("reconstruct"), a[e] = t
                                    },
                                    c = Object.prototype.toString;
                                "function" == typeof n && "function" == typeof n.isBuffer && u("Buffer", {
                                    deconstruct: function(e) {
                                        return n.isBuffer(e) && [e.toString("base64"), "base64"]
                                    },
                                    reconstruct: function(e) {
                                        return e && n.from(e[0], e[1])
                                    }
                                }), u("Date", {
                                    deconstruct: function(e) {
                                        return "[object Date]" === c.call(e) && [e.toJSON()]
                                    },
                                    reconstruct: function(e) {
                                        return e && new Date(e[0])
                                    }
                                }), u("RegExp", {
                                    deconstruct: function(e) {
                                        if ("[object RegExp]" === c.call(e)) {
                                            var t = [e.source],
                                                r = "";
                                            return e.ignoreCase && (r += "i"), e.multiline && (r += "m"), e.global && (r += "g"), r && t.push(r), t
                                        }
                                    },
                                    reconstruct: function(e) {
                                        return e && new RegExp(e[0], e[1])
                                    }
                                }), "function" == typeof Set && "function" == typeof Array.from && u("Set", {
                                    deconstruct: function(e) {
                                        if ("[object Set]" === c.call(e)) return Array.from(e)
                                    },
                                    reconstruct: function(e) {
                                        if (!e) return new Set;
                                        e.forEach(this.add, this)
                                    }
                                }), "function" == typeof Map && "function" == typeof Array.from && u("Map", {
                                    deconstruct: function(e) {
                                        if ("[object Map]" === c.call(e)) return Array.from(e)
                                    },
                                    reconstruct: function(e) {
                                        if (!e) return new Map;
                                        e.forEach(function(e) {
                                            this.set(e[0], e[1])
                                        }, this)
                                    }
                                })
                            },
                            "./packages/@logrocket/console/src/index.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = void 0;
                                var n = o(r("./packages/@logrocket/console/src/registerConsole.js")).default;
                                t.default = n
                            },
                            "./packages/@logrocket/console/src/registerConsole.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e) {
                                    var t = [];
                                    return ["log", "warn", "info", "error", "debug"].forEach(function(r) {
                                            t.push((0, s.default)(console, r, function() {
                                                for (var t = arguments.length, o = Array(t), s = 0; s < t; s++) o[s] = arguments[s];
                                                e.addEvent("lr.core.LogEvent", function() {
                                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                        s = t.isEnabled;
                                                    return "object" === (0, n.default)(s) && !1 === s[r] || !1 === s ? null : ("error" === r && t.shouldAggregateConsoleErrors && a.Capture.captureMessage(e, o[0], o, {}, !0), {
                                                        logLevel: r.toUpperCase(),
                                                        args: o
                                                    })
                                                })
                                            }))
                                        }),
                                        function() {
                                            t.forEach(function(e) {
                                                return e()
                                            })
                                        }
                                };
                                var n = o(r("./node_modules/@babel/runtime/helpers/typeof.js")),
                                    s = o(r("./packages/@logrocket/utils/src/enhanceFunc.js")),
                                    a = r("./packages/@logrocket/exceptions/src/index.js")
                            },
                            "./packages/@logrocket/exceptions/src/Capture.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.captureMessage = function(e, t, r) {
                                    var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                        s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                                        a = {
                                            exceptionType: s ? "CONSOLE" : "MESSAGE",
                                            message: t,
                                            messageArgs: r,
                                            browserHref: window.location ? window.location.href : ""
                                        };
                                    (0, n.scrubException)(a, o), e.addEvent("lr.core.Exception", function() {
                                        return a
                                    })
                                }, t.captureException = function(e, t) {
                                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                                        u = o || s.default.computeStackTrace(t),
                                        c = {
                                            exceptionType: "WINDOW",
                                            errorType: u.name,
                                            message: u.message,
                                            browserHref: window.location ? window.location.href : ""
                                        };
                                    (0, n.scrubException)(c, r);
                                    var i = {
                                        _stackTrace: (0, a.default)(u)
                                    };
                                    e.addEvent("lr.core.Exception", function() {
                                        return c
                                    }, i)
                                };
                                var n = r("./packages/@logrocket/utils/src/index.ts"),
                                    s = o(r("./packages/@logrocket/utils/src/TraceKit.js")),
                                    a = o(r("./packages/@logrocket/exceptions/src/stackTraceFromError.js"))
                            },
                            "./packages/@logrocket/exceptions/src/index.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),
                                    n = r("./node_modules/@babel/runtime/helpers/typeof.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), Object.defineProperty(t, "registerExceptions", {
                                    enumerable: !0,
                                    get: function() {
                                        return s.default
                                    }
                                }), t.Capture = void 0;
                                var s = o(r("./packages/@logrocket/exceptions/src/registerExceptions.js")),
                                    a = function(e, t) {
                                        if (e && e.__esModule) return e;
                                        if (null === e || "object" !== n(e) && "function" != typeof e) return {
                                            default: e
                                        };
                                        var r = u(void 0);
                                        if (r && r.has(e)) return r.get(e);
                                        var o = {},
                                            s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                        for (var a in e)
                                            if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                                                var c = s ? Object.getOwnPropertyDescriptor(e, a) : null;
                                                c && (c.get || c.set) ? Object.defineProperty(o, a, c) : o[a] = e[a]
                                            }
                                        return o.default = e, r && r.set(e, o), o
                                    }(r("./packages/@logrocket/exceptions/src/Capture.js"));

                                function u(e) {
                                    if ("function" != typeof WeakMap) return null;
                                    var t = new WeakMap,
                                        r = new WeakMap;
                                    return (u = function(e) {
                                        return e ? r : t
                                    })(e)
                                }
                                t.Capture = a
                            },
                            "./packages/@logrocket/exceptions/src/raven/raven.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = void 0;
                                var n = o(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),
                                    s = o(r("./node_modules/@babel/runtime/helpers/createClass.js")),
                                    a = o(r("./packages/@logrocket/utils/src/TraceKit.js")),
                                    u = Object.prototype;

                                function c(e) {
                                    return "function" == typeof e
                                }

                                function i(e, t, r, o) {
                                    var n = e[t];
                                    e[t] = r(n), o && o.push([e, t, n])
                                }
                                var l = "undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self ? self : {};
                                l.document;
                                var d = function() {
                                    function e(t) {
                                        var r = t.captureException;
                                        (0, n.default)(this, e), this._errorHandler = this._errorHandler.bind(this), this._ignoreOnError = 0, this._wrappedBuiltIns = [], this.captureException = r, a.default.report.subscribe(this._errorHandler), this._instrumentTryCatch()
                                    }
                                    return (0, s.default)(e, [{
                                        key: "uninstall",
                                        value: function() {
                                            for (a.default.report.unsubscribe(this._errorHandler); this._wrappedBuiltIns.length;) {
                                                var e, t = (e = this._wrappedBuiltIns.shift())[0],
                                                    r = e[1],
                                                    o = e[2];
                                                t[r] = o
                                            }
                                        }
                                    }, {
                                        key: "_errorHandler",
                                        value: function(e) {
                                            this._ignoreOnError || this.captureException(e)
                                        }
                                    }, {
                                        key: "_ignoreNextOnError",
                                        value: function() {
                                            var e = this;
                                            this._ignoreOnError += 1, setTimeout(function() {
                                                e._ignoreOnError -= 1
                                            })
                                        }
                                    }, {
                                        key: "context",
                                        value: function(e, t, r) {
                                            return c(e) && (r = t || [], t = e, e = void 0), this.wrap(e, t).apply(this, r)
                                        }
                                    }, {
                                        key: "wrap",
                                        value: function(e, t, r) {
                                            var o, n = this;
                                            if (void 0 === t && !c(e)) return e;
                                            if (c(e) && (t = e, e = void 0), !c(t)) return t;
                                            try {
                                                if (t.__lr__) return t;
                                                if (t.__lr_wrapper__) return t.__lr_wrapper__;
                                                if (!Object.isExtensible(t)) return t
                                            } catch (e) {
                                                return t
                                            }

                                            function s() {
                                                var o = [],
                                                    s = arguments.length,
                                                    u = !e || e && !1 !== e.deep;
                                                for (r && c(r) && r.apply(this, arguments); s--;) o[s] = u ? n.wrap(e, arguments[s]) : arguments[s];
                                                try {
                                                    return t.apply(this, o)
                                                } catch (t) {
                                                    throw n._ignoreNextOnError(), n.captureException(a.default.computeStackTrace(t), e), t
                                                }
                                            }
                                            for (var i in t) o = t, u.hasOwnProperty.call(o, i) && (s[i] = t[i]);
                                            return s.prototype = t.prototype, t.__lr_wrapper__ = s, s.__lr__ = !0, s.__inner__ = t, s
                                        }
                                    }, {
                                        key: "_instrumentTryCatch",
                                        value: function() {
                                            var e = this,
                                                t = e._wrappedBuiltIns;

                                            function r(t) {
                                                return function(r, o) {
                                                    for (var n = Array(arguments.length), s = 0; s < n.length; ++s) n[s] = arguments[s];
                                                    var a = n[0];
                                                    return (c(a) && (n[0] = e.wrap(a)), t.apply) ? t.apply(this, n) : t(n[0], n[1])
                                                }
                                            }
                                            i(l, "setTimeout", r, t), i(l, "setInterval", r, t), l.requestAnimationFrame && i(l, "requestAnimationFrame", function(t) {
                                                return function(r) {
                                                    return t(e.wrap(r))
                                                }
                                            }, t);
                                            for (var o = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], n = 0; n < o.length; n++) ! function(r) {
                                                var o = l[r] && l[r].prototype;
                                                o && o.hasOwnProperty && o.hasOwnProperty("addEventListener") && (i(o, "addEventListener", function(t) {
                                                    return function(r, o, n, s) {
                                                        var a;
                                                        try {
                                                            o && o.handleEvent && (o.handleEvent = e.wrap(o.handleEvent))
                                                        } catch (e) {}
                                                        return t.call(this, r, e.wrap(o, void 0, a), n, s)
                                                    }
                                                }, t), i(o, "removeEventListener", function(e) {
                                                    return function(t, r, o, n) {
                                                        try {
                                                            r = r && (r.__lr_wrapper__ ? r.__lr_wrapper__ : r)
                                                        } catch (e) {}
                                                        return e.call(this, t, r, o, n)
                                                    }
                                                }, t))
                                            }(o[n]);
                                            var s = l.jQuery || l.$;
                                            s && s.fn && s.fn.ready && i(s.fn, "ready", function(t) {
                                                return function(r) {
                                                    return t.call(this, e.wrap(r))
                                                }
                                            }, t)
                                        }
                                    }]), e
                                }();
                                t.default = d
                            },
                            "./packages/@logrocket/exceptions/src/registerExceptions.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),
                                    n = r("./node_modules/@babel/runtime/helpers/typeof.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e) {
                                    var t = new s.default({
                                            captureException: function(t) {
                                                a.captureException(e, null, null, t)
                                            }
                                        }),
                                        r = function(t) {
                                            e.addEvent("lr.core.Exception", function() {
                                                return {
                                                    exceptionType: "UNHANDLED_REJECTION",
                                                    message: t.reason || "Unhandled Promise rejection"
                                                }
                                            })
                                        };
                                    return window.addEventListener("unhandledrejection", r),
                                        function() {
                                            window.removeEventListener("unhandledrejection", r), t.uninstall()
                                        }
                                };
                                var s = o(r("./packages/@logrocket/exceptions/src/raven/raven.js")),
                                    a = function(e, t) {
                                        if (e && e.__esModule) return e;
                                        if (null === e || "object" !== n(e) && "function" != typeof e) return {
                                            default: e
                                        };
                                        var r = u(void 0);
                                        if (r && r.has(e)) return r.get(e);
                                        var o = {},
                                            s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                        for (var a in e)
                                            if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                                                var c = s ? Object.getOwnPropertyDescriptor(e, a) : null;
                                                c && (c.get || c.set) ? Object.defineProperty(o, a, c) : o[a] = e[a]
                                            }
                                        return o.default = e, r && r.set(e, o), o
                                    }(r("./packages/@logrocket/exceptions/src/Capture.js"));

                                function u(e) {
                                    if ("function" != typeof WeakMap) return null;
                                    var t = new WeakMap,
                                        r = new WeakMap;
                                    return (u = function(e) {
                                        return e ? r : t
                                    })(e)
                                }
                            },
                            "./packages/@logrocket/exceptions/src/stackTraceFromError.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e) {
                                    function t(e) {
                                        return null === e ? void 0 : e
                                    }
                                    return e.stack ? e.stack.map(function(e) {
                                        return {
                                            lineNumber: t(e.line),
                                            columnNumber: t(e.column),
                                            fileName: t(e.url),
                                            functionName: t(e.func)
                                        }
                                    }) : void 0
                                }
                            },
                            "./packages/@logrocket/network/src/fetchIntercept.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = void 0;
                                var n = o(r("./node_modules/@babel/runtime/helpers/toConsumableArray.js")),
                                    s = r("./packages/@logrocket/network/src/registerXHR.js"),
                                    a = [];

                                function u(e, t) {
                                    for (var r = a.reduce(function(e, t) {
                                            return [t].concat(e)
                                        }, []), o = arguments.length, u = Array(o > 2 ? o - 2 : 0), c = 2; c < o; c++) u[c - 2] = arguments[c];
                                    var i = Promise.resolve(u);
                                    return r.forEach(function(e) {
                                        var r = e.request,
                                            o = e.requestError;
                                        (r || o) && (i = i.then(function(e) {
                                            return r.apply(void 0, [t].concat((0, n.default)(e)))
                                        }, function(e) {
                                            return o.apply(void 0, [t].concat((0, n.default)(e)))
                                        }))
                                    }), i = i.then(function(t) {
                                        var r, o;
                                        (0, s.setActive)(!1);
                                        try {
                                            r = e.apply(void 0, (0, n.default)(t))
                                        } catch (e) {
                                            o = e
                                        }
                                        if ((0, s.setActive)(!0), o) throw o;
                                        return r
                                    }), r.forEach(function(e) {
                                        var r = e.response,
                                            o = e.responseError;
                                        (r || o) && (i = i.then(function(e) {
                                            return r(t, e)
                                        }, function(e) {
                                            return o && o(t, e)
                                        }))
                                    }), i
                                }
                                var c = !1;
                                t.default = {
                                    register: function(e) {
                                        return c || (c = !0, function(e) {
                                                if (e.fetch && e.Promise) {
                                                    var t, r, o = e.fetch.polyfill;
                                                    e.fetch = (t = e.fetch, r = 0, function() {
                                                        for (var e = arguments.length, o = Array(e), n = 0; n < e; n++) o[n] = arguments[n];
                                                        return u.apply(void 0, [t, r++].concat(o))
                                                    }), o && (e.fetch.polyfill = o)
                                                }
                                            }(window)), a.push(e),
                                            function() {
                                                var t = a.indexOf(e);
                                                t >= 0 && a.splice(t, 1)
                                            }
                                    },
                                    clear: function() {
                                        a = []
                                    }
                                }
                            },
                            "./packages/@logrocket/network/src/index.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                            isReactNative: !1
                                        },
                                        r = t.isReactNative,
                                        o = t.shouldAugmentNPS,
                                        n = t.shouldParseXHRBlob,
                                        d = {},
                                        p = function(e) {
                                            var t = e;
                                            if ("object" === (0, s.default)(e) && null != e) {
                                                var r = Object.getPrototypeOf(e);
                                                (r === Object.prototype || null === r) && (t = JSON.stringify(e))
                                            }
                                            if (t && t.length && t.length > 4096e3 && "string" == typeof t) {
                                                var o = t.substring(0, 1e3);
                                                return "".concat(o, " ... LogRocket truncating to first 1000 characters.\n      Keep data under 4MB to prevent truncation. https://docs.logrocket.com/reference/network")
                                            }
                                            return e
                                        },
                                        g = function(t, r) {
                                            var o = r.method;
                                            e.addEvent("lr.network.RequestEvent", function() {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                    n = e.isEnabled,
                                                    s = e.requestSanitizer;
                                                if (!(void 0 === n || n)) return null;
                                                var a = null;
                                                try {
                                                    a = (void 0 === s ? function(e) {
                                                        return e
                                                    } : s)(f(f({}, r), {}, {
                                                        reqId: t
                                                    }))
                                                } catch (e) {
                                                    console.error(e)
                                                }
                                                if (a) {
                                                    var u = a.url;
                                                    if ("undefined" != typeof document && "function" == typeof document.createElement) {
                                                        var c = document.createElement("a");
                                                        c.href = a.url, u = c.href
                                                    }
                                                    return {
                                                        reqId: t,
                                                        url: u,
                                                        headers: (0, l.default)(a.headers, function(e) {
                                                            return "".concat(e)
                                                        }),
                                                        body: p(a.body),
                                                        method: o,
                                                        referrer: a.referrer || void 0,
                                                        mode: a.mode || void 0,
                                                        credentials: a.credentials || void 0
                                                    }
                                                }
                                                return d[t] = !0, null
                                            })
                                        },
                                        h = function(t, r) {
                                            var o = r.method,
                                                n = r.status;
                                            e.addEvent("lr.network.ResponseEvent", function() {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                    s = e.isEnabled,
                                                    a = e.responseSanitizer;
                                                if (!(void 0 === s || s)) return null;
                                                if (d[t]) return delete d[t], null;
                                                var u = null;
                                                try {
                                                    u = (void 0 === a ? function(e) {
                                                        return e
                                                    } : a)(f(f({}, r), {}, {
                                                        reqId: t
                                                    }))
                                                } catch (e) {
                                                    console.error(e)
                                                }
                                                return u ? {
                                                    reqId: t,
                                                    status: u.status,
                                                    headers: (0, l.default)(u.headers, function(e) {
                                                        return "".concat(e)
                                                    }),
                                                    body: p(u.body),
                                                    method: o
                                                } : {
                                                    reqId: t,
                                                    status: n,
                                                    headers: {},
                                                    body: null,
                                                    method: o
                                                }
                                            })
                                        },
                                        _ = function(t) {
                                            return e.isDisabled || !0 === d[t]
                                        },
                                        m = (0, a.default)({
                                            addRequest: g,
                                            addResponse: h,
                                            isIgnored: _
                                        }),
                                        k = (0, i.default)({
                                            addRequest: g,
                                            addResponse: h,
                                            isIgnored: _,
                                            logger: e,
                                            shouldAugmentNPS: o,
                                            shouldParseXHRBlob: n
                                        }),
                                        b = (0, u.registerIonic)({
                                            addRequest: g,
                                            addResponse: h,
                                            isIgnored: _
                                        }),
                                        y = r ? function() {} : (0, c.default)(e);
                                    return function() {
                                        y(), m(), k(), b()
                                    }
                                };
                                var n = o(r("./node_modules/@babel/runtime/helpers/defineProperty.js")),
                                    s = o(r("./node_modules/@babel/runtime/helpers/typeof.js")),
                                    a = o(r("./packages/@logrocket/network/src/registerFetch.js")),
                                    u = r("./packages/@logrocket/network/src/registerIonic.ts"),
                                    c = o(r("./packages/@logrocket/network/src/registerNetworkInformation.js")),
                                    i = o(r("./packages/@logrocket/network/src/registerXHR.js")),
                                    l = o(r("./packages/@logrocket/utils/src/mapValues.js"));

                                function d(e, t) {
                                    var r = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var o = Object.getOwnPropertySymbols(e);
                                        t && (o = o.filter(function(t) {
                                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                                        })), r.push.apply(r, o)
                                    }
                                    return r
                                }

                                function f(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? d(Object(r), !0).forEach(function(t) {
                                            (0, n.default)(e, t, r[t])
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach(function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                        })
                                    }
                                    return e
                                }
                            },
                            "./packages/@logrocket/network/src/registerFetch.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e) {
                                    var t = e.addRequest,
                                        r = e.addResponse,
                                        o = e.isIgnored,
                                        n = "fetch-",
                                        s = {};
                                    return a.default.register({
                                        request: function(e) {
                                            for (var r, o, a = arguments.length, u = Array(a > 1 ? a - 1 : 0), i = 1; i < a; i++) u[i - 1] = arguments[i];
                                            if ("undefined" != typeof Request && u[0] instanceof Request) {
                                                try {
                                                    o = u[0].clone().text()
                                                } catch (e) {
                                                    o = Promise.resolve("LogRocket fetch error: ".concat(e.message))
                                                }
                                                r = o.then(function(e) {
                                                    return c(c({}, l(u[0])), {}, {
                                                        body: e
                                                    })
                                                }, function(e) {
                                                    return c(c({}, l(u[0])), {}, {
                                                        body: "LogRocket fetch error: ".concat(e.message)
                                                    })
                                                })
                                            } else r = Promise.resolve(c(c({}, l(u[1])), {}, {
                                                url: "".concat(u[0]),
                                                body: (u[1] || {}).body
                                            }));
                                            return r.then(function(r) {
                                                return s[e] = r.method, t("".concat(n).concat(e), r), u
                                            })
                                        },
                                        requestError: function(e, t) {
                                            return Promise.reject(t)
                                        },
                                        response: function(e, t) {
                                            if (o("".concat(n).concat(e))) return t;
                                            if ("text/event-stream" === t.headers.get("content-type")) u = Promise.resolve("LogRocket skipped consuming an event-stream body.");
                                            else {
                                                try {
                                                    a = t.clone()
                                                } catch (o) {
                                                    var a, u, c = {
                                                        url: t.url,
                                                        status: t.status,
                                                        headers: i(t.headers),
                                                        body: "LogRocket fetch error: ".concat(o.message),
                                                        method: s[e]
                                                    };
                                                    return delete s[e], r("".concat(n).concat(e), c), t
                                                }
                                                try {
                                                    if (window.TextDecoder && a.body) {
                                                        var l = a.body.getReader(),
                                                            d = new window.TextDecoder("utf-8"),
                                                            f = "";
                                                        u = l.read().then(function e(t) {
                                                            var r = t.done,
                                                                o = t.value;
                                                            if (r) return f;
                                                            var n = o ? d.decode(o, {
                                                                stream: !0
                                                            }) : "";
                                                            return f += n, l.read().then(e)
                                                        })
                                                    } else u = a.text()
                                                } catch (e) {
                                                    u = Promise.resolve("LogRocket error reading body: ".concat(e.message))
                                                }
                                            }
                                            return u.catch(function(e) {
                                                if (!("AbortError" === e.name && e instanceof DOMException)) return "LogRocket error reading body: ".concat(e.message)
                                            }).then(function(o) {
                                                var a = {
                                                    url: t.url,
                                                    status: t.status,
                                                    headers: i(t.headers),
                                                    body: o,
                                                    method: s[e]
                                                };
                                                delete s[e], r("".concat(n).concat(e), a)
                                            }), t
                                        },
                                        responseError: function(e, t) {
                                            return r("".concat(n).concat(e), {
                                                url: void 0,
                                                status: 0,
                                                headers: {},
                                                body: "".concat(t)
                                            }), Promise.reject(t)
                                        }
                                    })
                                };
                                var n = o(r("./node_modules/@babel/runtime/helpers/defineProperty.js")),
                                    s = o(r("./packages/@logrocket/utils/src/mapValues.js")),
                                    a = o(r("./packages/@logrocket/network/src/fetchIntercept.js"));

                                function u(e, t) {
                                    var r = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var o = Object.getOwnPropertySymbols(e);
                                        t && (o = o.filter(function(t) {
                                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                                        })), r.push.apply(r, o)
                                    }
                                    return r
                                }

                                function c(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? u(Object(r), !0).forEach(function(t) {
                                            (0, n.default)(e, t, r[t])
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                        })
                                    }
                                    return e
                                }
                                var i = function(e) {
                                    return (0, s.default)(function(e) {
                                        if (null == e || "function" != typeof e.forEach) return e;
                                        var t = {};
                                        return e.forEach(function(e, r) {
                                            t[r] ? t[r] = "".concat(t[r], ",").concat(e) : t[r] = "".concat(e)
                                        }), t
                                    }(e), function(e) {
                                        return "".concat(e)
                                    })
                                };

                                function l() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return {
                                        url: e.url,
                                        headers: i(e.headers),
                                        method: e.method && e.method.toUpperCase(),
                                        referrer: e.referrer || void 0,
                                        mode: e.mode || void 0,
                                        credentials: e.credentials || void 0
                                    }
                                }
                            },
                            "./packages/@logrocket/network/src/registerIonic.ts": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.mergeHeaders = O, t.serializeQueryParams = function(e, t) {
                                    return P("", e, t)
                                }, t.appendQueryParamsString = w, t.processData = R, t.registerIonic = function(e) {
                                    var t, r, o, n = e.addRequest,
                                        s = e.addResponse,
                                        a = e.isIgnored,
                                        c = null === (t = window.cordova) || void 0 === t ? void 0 : null === (r = t.plugin) || void 0 === r ? void 0 : r.http,
                                        i = {},
                                        l = !1;
                                    if (void 0 === c) return function() {};
                                    var _ = null === (o = window.ionic) || void 0 === o ? void 0 : o.platforms;
                                    if (void 0 !== _ && "function" == typeof _.some && _.some(function(e) {
                                            return h.has(e)
                                        })) return function() {};
                                    var m = c.sendRequest,
                                        y = (0, u.default)(function(e, t, r) {
                                            if (!a("".concat(g).concat(r))) try {
                                                var o = {
                                                    url: e.url || "",
                                                    status: e.status < 600 && e.status >= 100 ? e.status : 0,
                                                    headers: e.headers || {},
                                                    body: t ? e.data : e.error,
                                                    method: i[r].toUpperCase()
                                                };
                                                s("".concat(g).concat(r), o)
                                            } catch (t) {
                                                var n = {
                                                    url: e.url || "",
                                                    status: e.status < 600 && e.status >= 100 ? e.status : 0,
                                                    headers: e.headers || {},
                                                    body: "LogRocket fetch error: ".concat(t.message),
                                                    method: i[r].toUpperCase()
                                                };
                                                s("".concat(g).concat(r), n)
                                            }
                                        });
                                    return c.sendRequest = function(e, t, r, o) {
                                            var s = ++T;
                                            if (!l) try {
                                                var a, u, h = function(e, t) {
                                                        var r, o = (e = e || {}).data;
                                                        try {
                                                            r = v(f, e.serializer || t.getDataSerializer(), "serializer / data payload type")
                                                        } catch (n) {
                                                            r = v(p, e.serializer || t.getDataSerializer(), "serializer / data payload type"), o = {}
                                                        }
                                                        return {
                                                            data: o,
                                                            filePath: e.filePath,
                                                            followRedirect: e.followRedirect,
                                                            headers: j(e.headers || {}, k, "Invalid header type, must be string"),
                                                            method: v(d, e.method || d[0], "method"),
                                                            name: e.name,
                                                            params: j(e.params || {}, b, "Invalid param, must be of type string or array"),
                                                            responseType: e.responseType,
                                                            serializer: r,
                                                            connectTimeout: e.connectTimeout,
                                                            readTimeout: e.readTimeout,
                                                            timeout: e.timeout
                                                        }
                                                    }(t, c),
                                                    _ = w(e, P("", h.params, !0)),
                                                    E = (a = h.headers, O(O(c.getHeaders("*") || {}, (u = new URL(e).host, c.getHeaders(u) || {})), a)),
                                                    S = h.method || "get";
                                                i[s] = S;
                                                var I = {
                                                    url: _,
                                                    method: S.toUpperCase(),
                                                    headers: E || {},
                                                    body: R(h.data || {}, h.serializer)
                                                };
                                                n("".concat(g).concat(s), I)
                                            } catch (r) {
                                                var x = {
                                                    url: e,
                                                    method: (t.method || "get").toUpperCase(),
                                                    headers: {},
                                                    body: "LogRocket fetch error: ".concat(r.message)
                                                };
                                                n("".concat(g).concat(s), x)
                                            }
                                            return m(e, t, function(e) {
                                                l || (y(e, !0, s), delete i[s]), r(e)
                                            }, function(e) {
                                                l || (y(e, !1, s), delete i[s]), o(e)
                                            })
                                        },
                                        function() {
                                            l = !0, c.sendRequest = m, i = {}
                                        }
                                };
                                var n = o(r("./node_modules/@babel/runtime/helpers/defineProperty.js")),
                                    s = o(r("./node_modules/@babel/runtime/helpers/typeof.js")),
                                    a = o(r("./node_modules/@babel/runtime/helpers/toConsumableArray.js")),
                                    u = o(r("./packages/@logrocket/utils/src/protectFunc.js"));

                                function c(e, t) {
                                    (null == t || t > e.length) && (t = e.length);
                                    for (var r = 0, o = Array(t); r < t; r++) o[r] = e[r];
                                    return o
                                }

                                function i(e, t) {
                                    var r = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var o = Object.getOwnPropertySymbols(e);
                                        t && (o = o.filter(function(t) {
                                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                                        })), r.push.apply(r, o)
                                    }
                                    return r
                                }

                                function l(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? i(Object(r), !0).forEach(function(t) {
                                            (0, n.default)(e, t, r[t])
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach(function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                        })
                                    }
                                    return e
                                }
                                var d = new Set(["get", "put", "post", "patch", "head", "delete", "options", "upload", "download"]),
                                    f = new Set(["urlencoded", "json", "utf8"]),
                                    p = new Set(["raw", "multipart"]),
                                    g = "ionic-",
                                    h = new Set(["desktop", "mobileweb", "pwa"]),
                                    _ = new Set(["FormData"]),
                                    m = new Set,
                                    k = new Set(["string"]),
                                    b = new Set(["string", "array"]),
                                    y = {
                                        utf8: k,
                                        urlencoded: new Set(["object"]),
                                        json: new Set(["array", "object"]),
                                        raw: new Set(["Uint8Array", "ArrayBuffer"]),
                                        default: m
                                    };

                                function v(e, t, r) {
                                    if ("string" != typeof t || (t = t.trim().toLowerCase(), !e.has(t))) throw Error("".concat(r, " must be one of: ").concat((0, a.default)(e).join(", ")));
                                    return t
                                }

                                function j(e, t, r) {
                                    if ("object" !== (0, s.default)(e)) throw Error(r);
                                    for (var o = 0, n = Object.keys(e); o < n.length; o++) {
                                        var a = n[o];
                                        if (!t.has((0, s.default)(e[a]))) throw Error(r)
                                    }
                                    return e
                                }

                                function O(e, t) {
                                    return l(l({}, e), t)
                                }

                                function E(e, t) {
                                    return t ? encodeURIComponent(e) : e
                                }

                                function S(e, t, r) {
                                    return e.length ? r ? "".concat(encodeURIComponent(e), "[").concat(encodeURIComponent(t), "]") : "".concat(e, "[").concat(t, "]") : r ? encodeURIComponent(t) : t
                                }

                                function P(e, t, r) {
                                    var o = [];
                                    for (var n in t)
                                        if (t.hasOwnProperty(n)) {
                                            var a = e.length ? "".concat(e, "[").concat(n, "]") : n;
                                            if (Array.isArray(t[n])) {
                                                o.push(function e(t, r, o) {
                                                    var n, a = [],
                                                        u = function(e, t) {
                                                            var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                                            if (!r) {
                                                                if (Array.isArray(e) || (r = function(e, t) {
                                                                        if (e) {
                                                                            if ("string" == typeof e) return c(e, void 0);
                                                                            var r = Object.prototype.toString.call(e).slice(8, -1);
                                                                            if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                                                                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return c(e, void 0)
                                                                        }
                                                                    }(e))) {
                                                                    r && (e = r);
                                                                    var o = 0,
                                                                        n = function() {};
                                                                    return {
                                                                        s: n,
                                                                        n: function() {
                                                                            return o >= e.length ? {
                                                                                done: !0
                                                                            } : {
                                                                                done: !1,
                                                                                value: e[o++]
                                                                            }
                                                                        },
                                                                        e: function(e) {
                                                                            throw e
                                                                        },
                                                                        f: n
                                                                    }
                                                                }
                                                                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                                            }
                                                            var s, a = !0,
                                                                u = !1;
                                                            return {
                                                                s: function() {
                                                                    r = r.call(e)
                                                                },
                                                                n: function() {
                                                                    var e = r.next();
                                                                    return a = e.done, e
                                                                },
                                                                e: function(e) {
                                                                    u = !0, s = e
                                                                },
                                                                f: function() {
                                                                    try {
                                                                        a || null == r.return || r.return()
                                                                    } finally {
                                                                        if (u) throw s
                                                                    }
                                                                }
                                                            }
                                                        }(r);
                                                    try {
                                                        for (u.s(); !(n = u.n()).done;) {
                                                            var i = n.value;
                                                            if (Array.isArray(i)) {
                                                                a.push(e("".concat(t, "[]"), i, o));
                                                                continue
                                                            }
                                                            if ("object" === (0, s.default)(i)) {
                                                                a.push(P("".concat(t, "[]").concat(i), o, void 0));
                                                                continue
                                                            }
                                                            a.push("".concat(S(t, "", o), "=").concat(E(i, o)))
                                                        }
                                                    } catch (e) {
                                                        u.e(e)
                                                    } finally {
                                                        u.f()
                                                    }
                                                    return a.join("&")
                                                }(a, t[n], r));
                                                continue
                                            }
                                            if ("object" === (0, s.default)(t[n]) && null !== t[n]) {
                                                o.push(P(a, t[n], r));
                                                continue
                                            }
                                            o.push("".concat(S(e, n, r), "=").concat(E(t[n], r)))
                                        }
                                    return o.join("&")
                                }

                                function w(e, t) {
                                    if (!e.length || !t.length) return e;
                                    var r = new URL(e),
                                        o = r.host,
                                        n = r.pathname,
                                        s = r.search,
                                        a = r.hash,
                                        u = r.protocol;
                                    return "".concat(u, "//").concat(o).concat(n).concat(s.length ? "".concat(s, "&").concat(t) : "?".concat(t)).concat(a)
                                }

                                function R(e, t) {
                                    var o = (0, s.default)(e),
                                        n = y[t] || y.default,
                                        u = "multipart" === t ? _ : m;
                                    if (u.size > 0) {
                                        var c = !1;
                                        if (u.forEach(function(t) {
                                                r.g[t] && e instanceof r.g[t] && (c = !0)
                                            }), !c) throw Error("INSTANCE_TYPE_MISMATCH_DATA ".concat((0, a.default)(u).join(", ")))
                                    }
                                    if (0 === u.size && !n.has(o)) throw Error("TYPE_MISMATCH_DATA ".concat((0, a.default)(n).join(", ")));
                                    return "utf8" === t ? e : JSON.stringify(e, void 0, 2)
                                }
                                var T = 0
                            },
                            "./packages/@logrocket/network/src/registerNetworkInformation.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e) {
                                    var t = void 0;

                                    function o() {
                                        var o = {
                                            online: window.navigator.onLine,
                                            effectiveType: "UNKOWN"
                                        };
                                        window.navigator.onLine ? window.navigator.connection && window.navigator.connection.effectiveType && (o.effectiveType = r[window.navigator.connection.effectiveType] || "UNKNOWN") : o.effectiveType = "NONE", t && o.online === t.online && o.effectiveType === t.effectiveType || (t = o, e.addEvent("lr.network.NetworkStatusEvent", function() {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                t = e.isEnabled;
                                            return void 0 === t || t ? o : null
                                        }))
                                    }
                                    return setTimeout(o), window.navigator.connection && "function" == typeof window.navigator.connection.addEventListener && window.navigator.connection.addEventListener("change", o), window.addEventListener("online", o), window.addEventListener("offline", o),
                                        function() {
                                            window.removeEventListener("offline", o), window.removeEventListener("online", o), window.navigator.connection && "function" == typeof window.navigator.connection.removeEventListener && window.navigator.connection.removeEventListener("change", o)
                                        }
                                };
                                var r = {
                                    "slow-2g": "SLOW2G",
                                    "2g": "TWOG",
                                    "3g": "THREEG",
                                    "4g": "FOURG"
                                }
                            },
                            "./packages/@logrocket/network/src/registerXHR.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.setActive = function(e) {
                                    c = e
                                }, t.default = function(e) {
                                    var t = e.addRequest,
                                        r = e.addResponse,
                                        o = e.isIgnored,
                                        l = e.logger,
                                        d = e.shouldAugmentNPS,
                                        f = void 0 === d || d,
                                        p = e.shouldParseXHRBlob,
                                        g = void 0 !== p && p,
                                        h = XMLHttpRequest,
                                        _ = new WeakMap,
                                        m = !1,
                                        k = "xhr-";
                                    return window._lrXMLHttpRequest = XMLHttpRequest, (XMLHttpRequest = function(e, d) {
                                            var p = new h(e, d);
                                            if (!c) return p;
                                            _.set(p, {
                                                xhrId: ++i,
                                                headers: {}
                                            });
                                            var b = p.open,
                                                y = p.send;
                                            f && (p.open = function() {
                                                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                                try {
                                                    var o = t[1];
                                                    if (window.URL && "function" == typeof window.URL && 0 === o.search(u.WOOTRIC_RESPONSES_REGEX)) {
                                                        var n = new window.URL(l.recordingURL);
                                                        n.searchParams.set("nps", "wootric");
                                                        var s = new window.URL(o),
                                                            a = s.searchParams.get("response[text]");
                                                        s.searchParams.set("response[text]", "".concat(a ? "".concat(a, "\n\n") : "", "<").concat(n.href, "|View LogRocket session>")), t[1] = s.href
                                                    }
                                                } catch (e) {}
                                                return b.apply(this, t)
                                            }, p.send = function() {
                                                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                                try {
                                                    var o = _.get(p);
                                                    if (window.URL && "function" == typeof window.URL && o && o.url && 0 === o.url.search(u.DELIGHTED_RESPONSES_REGEX) && t.length && -1 !== t[0].indexOf(u.DELIGHTED_FEEDBACK_PREFIX)) {
                                                        var n = new window.URL(l.recordingURL);
                                                        n.searchParams.set("nps", "delighted");
                                                        var s = encodeURIComponent(n.href),
                                                            c = t[0].split("&").map(function(e) {
                                                                if ((0, a.default)(e, u.DELIGHTED_FEEDBACK_PREFIX)) {
                                                                    var t = e === u.DELIGHTED_FEEDBACK_PREFIX;
                                                                    return "".concat(e).concat(t ? "" : "\n\n", "<").concat(s, "|View LogRocket session>")
                                                                }
                                                                return e
                                                            }).join("&");
                                                        t[0] = c
                                                    }
                                                } catch (e) {}
                                                return y.apply(this, t)
                                            }), (0, s.default)(p, "open", function(e, t) {
                                                if (!m) {
                                                    var r = _.get(p);
                                                    r.method = e, r.url = t
                                                }
                                            }), (0, s.default)(p, "send", function(e) {
                                                if (!m) {
                                                    var r = _.get(p);
                                                    if (r) {
                                                        var o = {
                                                            url: r.url,
                                                            method: r.method && r.method.toUpperCase(),
                                                            headers: (0, n.default)(r.headers || {}, function(e) {
                                                                return e.join(", ")
                                                            }),
                                                            body: e
                                                        };
                                                        t("".concat(k).concat(r.xhrId), o)
                                                    }
                                                }
                                            }), (0, s.default)(p, "setRequestHeader", function(e, t) {
                                                if (!m) {
                                                    var r = _.get(p);
                                                    r && (r.headers = r.headers || {}, r.headers[e] = r.headers[e] || [], r.headers[e].push(t))
                                                }
                                            });
                                            var v = {
                                                readystatechange: function() {
                                                    if (!m && 4 === p.readyState) {
                                                        var e, t = _.get(p);
                                                        if (!(!t || o("".concat(k).concat(t.xhrId)))) {
                                                            var n = (p.getAllResponseHeaders() || "").split(/[\r\n]+/).reduce(function(e, t) {
                                                                var r = t.split(": ");
                                                                if (r.length > 0) {
                                                                    var o = r.shift(),
                                                                        n = r.join(": ");
                                                                    e[o] ? e[o] += ", ".concat(n) : e[o] = n
                                                                }
                                                                return e
                                                            }, {});
                                                            try {
                                                                switch (p.responseType) {
                                                                    case "json":
                                                                        e = l._shouldCloneResponse ? JSON.parse(JSON.stringify(p.response)) : p.response;
                                                                        break;
                                                                    case "arraybuffer":
                                                                    case "blob":
                                                                        e = p.response;
                                                                        break;
                                                                    case "document":
                                                                        e = p.responseXML;
                                                                        break;
                                                                    case "text":
                                                                    case "":
                                                                        e = p.responseText;
                                                                        break;
                                                                    default:
                                                                        e = ""
                                                                }
                                                            } catch (t) {
                                                                e = "LogRocket: Error accessing response."
                                                            }
                                                            var s = {
                                                                url: t.url,
                                                                status: p.status,
                                                                headers: n,
                                                                body: e,
                                                                method: (t.method || "").toUpperCase()
                                                            };
                                                            if (g && s.body instanceof Blob) {
                                                                var a = new FileReader;
                                                                a.readAsText(s.body), a.onload = function() {
                                                                    try {
                                                                        s.body = JSON.parse(a.result)
                                                                    } catch (e) {}
                                                                    r("".concat(k).concat(t.xhrId), s)
                                                                }
                                                            } else r("".concat(k).concat(t.xhrId), s)
                                                        }
                                                    }
                                                }
                                            };
                                            return Object.keys(v).forEach(function(e) {
                                                p.addEventListener(e, v[e])
                                            }), p
                                        }).prototype = h.prototype, ["UNSENT", "OPENED", "HEADERS_RECEIVED", "LOADING", "DONE"].forEach(function(e) {
                                            XMLHttpRequest[e] = h[e]
                                        }),
                                        function() {
                                            m = !0, XMLHttpRequest = h
                                        }
                                };
                                var n = o(r("./packages/@logrocket/utils/src/mapValues.js")),
                                    s = o(r("./packages/@logrocket/utils/src/enhanceFunc.js")),
                                    a = o(r("./packages/@logrocket/utils/src/startsWith.js")),
                                    u = r("./packages/@logrocket/utils/src/constants/nps.js"),
                                    c = !0,
                                    i = 0
                            },
                            "./packages/@logrocket/now/src/index.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = void 0;
                                var r = Date.now.bind(Date),
                                    o = r(),
                                    n = "undefined" != typeof performance && performance.now ? performance.now.bind(performance) : function() {
                                        return r() - o
                                    };
                                t.default = n
                            },
                            "./packages/@logrocket/redux/src/createEnhancer.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        r = t.stateSanitizer,
                                        o = void 0 === r ? function(e) {
                                            return e
                                        } : r,
                                        n = t.actionSanitizer,
                                        a = void 0 === n ? function(e) {
                                            return e
                                        } : n;
                                    return function(t) {
                                        return function(r, n, i) {
                                            var l = t(r, n, i),
                                                d = l.dispatch,
                                                f = c++;
                                            return e.addEvent("lr.redux.InitialState", function() {
                                                var e;
                                                try {
                                                    e = o(l.getState())
                                                } catch (e) {
                                                    console.error(e.toString())
                                                }
                                                return {
                                                    state: e,
                                                    storeId: f
                                                }
                                            }), u(u({}, l), {}, {
                                                dispatch: function(t) {
                                                    var r, n, u = (0, s.default)();
                                                    try {
                                                        n = d(t)
                                                    } catch (e) {
                                                        r = e
                                                    } finally {
                                                        var c = (0, s.default)() - u;
                                                        e.addEvent("lr.redux.ReduxAction", function() {
                                                            var e = null,
                                                                r = null;
                                                            try {
                                                                e = o(l.getState()), r = a(t)
                                                            } catch (e) {
                                                                console.error(e.toString())
                                                            }
                                                            return e && r ? {
                                                                storeId: f,
                                                                action: r,
                                                                duration: c,
                                                                stateDelta: e
                                                            } : null
                                                        })
                                                    }
                                                    if (r) throw r;
                                                    return n
                                                }
                                            })
                                        }
                                    }
                                };
                                var n = o(r("./node_modules/@babel/runtime/helpers/defineProperty.js")),
                                    s = o(r("./packages/@logrocket/now/src/index.js"));

                                function a(e, t) {
                                    var r = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var o = Object.getOwnPropertySymbols(e);
                                        t && (o = o.filter(function(t) {
                                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                                        })), r.push.apply(r, o)
                                    }
                                    return r
                                }

                                function u(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? a(Object(r), !0).forEach(function(t) {
                                            (0, n.default)(e, t, r[t])
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                        })
                                    }
                                    return e
                                }
                                var c = 0
                            },
                            "./packages/@logrocket/redux/src/createMiddleware.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        r = t.stateSanitizer,
                                        o = void 0 === r ? function(e) {
                                            return e
                                        } : r,
                                        a = t.actionSanitizer,
                                        u = void 0 === a ? function(e) {
                                            return e
                                        } : a;
                                    return function(t) {
                                        var r = s++;
                                        return e.addEvent("lr.redux.InitialState", function() {
                                                var e;
                                                try {
                                                    e = o(t.getState())
                                                } catch (e) {
                                                    console.error(e.toString())
                                                }
                                                return {
                                                    state: e,
                                                    storeId: r
                                                }
                                            }),
                                            function(s) {
                                                return function(a) {
                                                    var c, i, l = (0, n.default)();
                                                    try {
                                                        i = s(a)
                                                    } catch (e) {
                                                        c = e
                                                    } finally {
                                                        var d = (0, n.default)() - l;
                                                        e.addEvent("lr.redux.ReduxAction", function() {
                                                            var e = null,
                                                                n = null;
                                                            try {
                                                                e = o(t.getState()), n = u(a)
                                                            } catch (e) {
                                                                console.error(e.toString())
                                                            }
                                                            return e && n ? {
                                                                storeId: r,
                                                                action: n,
                                                                duration: d,
                                                                stateDelta: e
                                                            } : null
                                                        })
                                                    }
                                                    if (c) throw c;
                                                    return i
                                                }
                                            }
                                    }
                                };
                                var n = o(r("./packages/@logrocket/now/src/index.js")),
                                    s = 0
                            },
                            "./packages/@logrocket/redux/src/index.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), Object.defineProperty(t, "createEnhancer", {
                                    enumerable: !0,
                                    get: function() {
                                        return n.default
                                    }
                                }), Object.defineProperty(t, "createMiddleware", {
                                    enumerable: !0,
                                    get: function() {
                                        return s.default
                                    }
                                });
                                var n = o(r("./packages/@logrocket/redux/src/createEnhancer.js")),
                                    s = o(r("./packages/@logrocket/redux/src/createMiddleware.js"))
                            },
                            "./packages/@logrocket/utils/src/TraceKit.js": function(e, t, r) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = void 0;
                                var o = {
                                        collectWindowErrors: !0,
                                        debug: !1
                                    },
                                    n = "undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self ? self : {},
                                    s = [].slice,
                                    a = /^(?:Uncaught (?:exception: )?)?((?:Eval|Internal|Range|Reference|Syntax|Type|URI)Error): ?(.*)$/;

                                function u() {
                                    return "undefined" == typeof document || void 0 === document.location ? "" : document.location.href
                                }
                                o.report = function() {
                                    var e, t, r = [],
                                        c = null,
                                        i = null,
                                        l = null;

                                    function d(e, t) {
                                        var n = null;
                                        if (!t || o.collectWindowErrors) {
                                            for (var a in r)
                                                if (r.hasOwnProperty(a)) try {
                                                    r[a].apply(null, [e].concat(s.call(arguments, 2)))
                                                } catch (e) {
                                                    n = e
                                                }
                                            if (n) throw n
                                        }
                                    }

                                    function f(t, r, n, s, c) {
                                        if (l) o.computeStackTrace.augmentStackTraceWithInitialElement(l, r, n, t), p();
                                        else if (c) d(o.computeStackTrace(c), !0);
                                        else {
                                            var i, f = {
                                                    url: r,
                                                    line: n,
                                                    column: s
                                                },
                                                g = void 0,
                                                h = t;
                                            if ("[object String]" === ({}).toString.call(t)) {
                                                var i = t.match(a);
                                                i && (g = i[1], h = i[2])
                                            }
                                            f.func = "?", d({
                                                name: g,
                                                message: h,
                                                url: u(),
                                                stack: [f]
                                            }, !0)
                                        }
                                        return !!e && e.apply(this, arguments)
                                    }

                                    function p() {
                                        var e = l,
                                            t = c;
                                        c = null, l = null, i = null, d.apply(null, [e, !1].concat(t))
                                    }

                                    function g(e, t) {
                                        var r = s.call(arguments, 1);
                                        if (l) {
                                            if (i === e) return;
                                            p()
                                        }
                                        var n = o.computeStackTrace(e);
                                        if (l = n, i = e, c = r, setTimeout(function() {
                                                i === e && p()
                                            }, n.incomplete ? 2e3 : 0), !1 !== t) throw e
                                    }
                                    return g.subscribe = function(o) {
                                        t || (e = n.onerror, n.onerror = f, t = !0), r.push(o)
                                    }, g.unsubscribe = function(e) {
                                        for (var t = r.length - 1; t >= 0; --t) r[t] === e && r.splice(t, 1)
                                    }, g.uninstall = function() {
                                        t && (n.onerror = e, t = !1, e = void 0), r = []
                                    }, g
                                }(), o.computeStackTrace = function() {
                                    function e(e) {
                                        if (void 0 !== e.stack && e.stack) {
                                            var t, r, o = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|<anonymous>).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                                                n = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|resource|\[native).*?)(?::(\d+))?(?::(\d+))?\s*$/i,
                                                s = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                                                a = e.stack.split("\n"),
                                                c = [];
                                            /^(.*) is undefined$/.exec(e.message);
                                            for (var i = 0, l = a.length; i < l; ++i) {
                                                if (t = o.exec(a[i])) {
                                                    var d = t[2] && -1 !== t[2].indexOf("native");
                                                    r = {
                                                        url: d ? null : t[2],
                                                        func: t[1] || "?",
                                                        args: d ? [t[2]] : [],
                                                        line: t[3] ? +t[3] : null,
                                                        column: t[4] ? +t[4] : null
                                                    }
                                                } else if (t = s.exec(a[i])) r = {
                                                    url: t[2],
                                                    func: t[1] || "?",
                                                    args: [],
                                                    line: +t[3],
                                                    column: t[4] ? +t[4] : null
                                                };
                                                else {
                                                    if (!(t = n.exec(a[i]))) continue;
                                                    r = {
                                                        url: t[3],
                                                        func: t[1] || "?",
                                                        args: t[2] ? t[2].split(",") : [],
                                                        line: t[4] ? +t[4] : null,
                                                        column: t[5] ? +t[5] : null
                                                    }
                                                }!r.func && r.line && (r.func = "?"), c.push(r)
                                            }
                                            return c.length ? (c[0].column || void 0 === e.columnNumber || (c[0].column = e.columnNumber + 1), {
                                                name: e.name,
                                                message: e.message,
                                                url: u(),
                                                stack: c
                                            }) : null
                                        }
                                    }

                                    function t(e, t, r, o) {
                                        var n = {
                                            url: t,
                                            line: r
                                        };
                                        if (n.url && n.line) {
                                            if (e.incomplete = !1, n.func || (n.func = "?"), e.stack.length > 0 && e.stack[0].url === n.url) {
                                                if (e.stack[0].line === n.line) return !1;
                                                if (!e.stack[0].line && e.stack[0].func === n.func) return e.stack[0].line = n.line, !1
                                            }
                                            return e.stack.unshift(n), e.partial = !0, !0
                                        }
                                        return e.incomplete = !0, !1
                                    }

                                    function r(n, s) {
                                        var a = null;
                                        s = null == s ? 0 : +s;
                                        try {
                                            if (a = e(n)) return a
                                        } catch (e) {
                                            if (o.debug) throw e
                                        }
                                        try {
                                            if (a = function e(n, s) {
                                                    for (var a, c, i = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, l = [], d = {}, f = !1, p = e.caller; p && !f; p = p.caller)
                                                        if (p !== r && p !== o.report) {
                                                            if (c = {
                                                                    url: null,
                                                                    func: "?",
                                                                    line: null,
                                                                    column: null
                                                                }, p.name ? c.func = p.name : (a = i.exec(p.toString())) && (c.func = a[1]), void 0 === c.func) try {
                                                                c.func = a.input.substring(0, a.input.indexOf("{"))
                                                            } catch (e) {}
                                                            d["" + p] ? f = !0 : d["" + p] = !0, l.push(c)
                                                        }
                                                    s && l.splice(0, s);
                                                    var g = {
                                                        name: n.name,
                                                        message: n.message,
                                                        url: u(),
                                                        stack: l
                                                    };
                                                    return t(g, n.sourceURL || n.fileName, n.line || n.lineNumber, n.message || n.description), g
                                                }(n, s + 1)) return a
                                        } catch (e) {
                                            if (o.debug) throw e
                                        }
                                        return {
                                            name: n.name,
                                            message: n.message,
                                            url: u()
                                        }
                                    }
                                    return r.augmentStackTraceWithInitialElement = t, r.computeStackTraceFromStackProp = e, r
                                }(), t.default = o
                            },
                            "./packages/@logrocket/utils/src/addListener.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e, t) {
                                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document,
                                        o = t;
                                    return r.addEventListener(e, function() {
                                            o && o.apply(void 0, arguments)
                                        }, {
                                            capture: !0,
                                            passive: !0
                                        }),
                                        function() {
                                            o = null
                                        }
                                }
                            },
                            "./packages/@logrocket/utils/src/adjustOsVersion.ts": function(e, t) {
                                "use strict";

                                function r(e, t) {
                                    var r = t;
                                    return t && e.toLowerCase().replace(/\s/g, "").indexOf("macos") > -1 && (r = t.replace("10.15.7", "10.15.7+")), r
                                }
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.adjustOsVersion = r, t.adjustOs = function(e) {
                                    return r(e, e)
                                }
                            },
                            "./packages/@logrocket/utils/src/applyUrlSanitizer.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e) {
                                    var t, r = e.logger,
                                        o = e.url,
                                        n = (r.getConfig("lr.browser") || {}).urlSanitizer;
                                    try {
                                        t = (void 0 === n ? function(e) {
                                            return e
                                        } : n)(void 0 === o ? "" : o)
                                    } catch (e) {
                                        console.error(e)
                                    }
                                    return "string" == typeof t ? t : ""
                                }
                            },
                            "./packages/@logrocket/utils/src/browserUtils.js": function(e, t) {
                                "use strict";

                                function r(e) {
                                    return "#document-fragment" === e.nodeName && "open" === e.mode ? "$shadow-root" : e.nodeName ? e.nodeName.toLowerCase() : ""
                                }
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.getNodeName = r, t.getTargetForEvent = function(e) {
                                    return "function" == typeof e.composedPath && e.composed ? e.composedPath()[0] : e.path ? e.path[0] : e.target
                                }, t.getNodePath = function(e) {
                                    for (var t = e, o = [], n = 0; t && (t.parentNode || t.host);) {
                                        var s = r(t);
                                        if ("body" === s) break;
                                        var a = {
                                                nodeName: s
                                            },
                                            u = a.nodeName.length;
                                        if (t.id && t.id.length > 0 && (a.id = t.id, u += t.id.length), t.classList && t.classList.length > 0) {
                                            a.classList = Array.prototype.slice.call(t.classList, 0);
                                            var c = Array.prototype.join.call(t.classList, "");
                                            c && (u += c.length)
                                        }
                                        if (n + u > 1e3) break;
                                        if (t.parentNode && t.parentNode.children) try {
                                            var i = 0,
                                                l = t;
                                            do i += 1, l = l.previousElementSibling; while (l);
                                            a.nthChild = i
                                        } catch (e) {}
                                        n += u, o.push(a), t = t.parentNode || t.host
                                    }
                                    return o
                                }
                            },
                            "./packages/@logrocket/utils/src/constants/issues.ts": function(e, t, r) {
                                "use strict";
                                var o, n = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.ES_ISSUE_TYPE_BASE_FILTER = t.ES_ISSUE_TYPES = t.ISSUE_GROUP_TYPE = t.ISSUE_TYPE = void 0;
                                var s = n(r("./node_modules/@babel/runtime/helpers/defineProperty.js")),
                                    a = {
                                        EXCEPTION: "EXCEPTION",
                                        NETWORK_ERROR: "NETWORK_ERROR",
                                        RAGE_CLICK: "RAGE_CLICK",
                                        DEAD_CLICK: "DEAD_CLICK",
                                        FRUSTRATING_NETWORK: "FRUSTRATING_NETWORK",
                                        ERROR_STATE: "ERROR_STATE"
                                    };
                                t.ISSUE_TYPE = a, t.ISSUE_GROUP_TYPE = {
                                    ENCODED_FILTER: "ENCODED_FILTER",
                                    SENTRY: "SENTRY",
                                    TROYTOWN: "TROYTOWN"
                                };
                                var u = [a.RAGE_CLICK, a.DEAD_CLICK, a.FRUSTRATING_NETWORK, a.ERROR_STATE];
                                t.ES_ISSUE_TYPES = u;
                                var c = (o = {}, (0, s.default)(o, a.RAGE_CLICK, {
                                    rageClicked: {
                                        operator: "TEXT_IS",
                                        strings: []
                                    }
                                }), (0, s.default)(o, a.DEAD_CLICK, {
                                    deadClicked: {
                                        operator: "TEXT_IS",
                                        strings: []
                                    }
                                }), o);
                                t.ES_ISSUE_TYPE_BASE_FILTER = c
                            },
                            "./packages/@logrocket/utils/src/constants/logTypes.js": function(e, t, r) {
                                "use strict";
                                var o, n = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.LOG_FILTER_TYPES = t.LOG_TYPES = void 0;
                                var s = n(r("./node_modules/@babel/runtime/helpers/defineProperty.js")),
                                    a = {
                                        LOG: "LOG",
                                        WARN: "WARN",
                                        ERROR: "ERROR",
                                        DEBUG: "DEBUG",
                                        INFO: "INFO",
                                        REDUX: "REDUX",
                                        LIFECYCLE: "LIFECYCLE",
                                        NAVIGATION: "NAVIGATION",
                                        NETWORK: "NETWORK",
                                        PREV_SESSION: "PREV_SESSION",
                                        NEXT_SESSION: "NEXT_SESSION",
                                        LOAD_MORE: "LOAD_MORE",
                                        EXCEPTION: "EXCEPTION"
                                    };
                                t.LOG_TYPES = a;
                                var u = (o = {}, (0, s.default)(o, a.LOG, {
                                    label: "Logs",
                                    filterLabel: "Log",
                                    types: [a.LOG]
                                }), (0, s.default)(o, a.WARN, {
                                    label: "Warnings",
                                    filterLabel: "Warning",
                                    types: [a.WARN]
                                }), (0, s.default)(o, a.ERROR, {
                                    label: "Errors",
                                    filterLabel: "Error",
                                    types: [a.ERROR, a.EXCEPTION]
                                }), (0, s.default)(o, a.INFO, {
                                    label: "Info",
                                    filterLabel: "Info",
                                    types: [a.INFO]
                                }), (0, s.default)(o, a.DEBUG, {
                                    label: "Debug",
                                    filterLabel: "Debug",
                                    types: [a.DEBUG]
                                }), (0, s.default)(o, a.REDUX, {
                                    label: "Redux",
                                    types: [a.REDUX]
                                }), (0, s.default)(o, a.NAVIGATION, {
                                    label: "Navigation",
                                    types: [a.NAVIGATION, a.LIFECYCLE]
                                }), o);
                                t.LOG_FILTER_TYPES = u
                            },
                            "./packages/@logrocket/utils/src/constants/metrics.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.DEFAULT_INSIGHTS_HEATMAP_FOR_URL_OPERATOR = t.DEFAULT_HEATMAP_FOR_URL_OPERATOR = t.nextSortDirection = t.SORT_DIRECTION = t.FEEDBACK_SORT_COLUMN = t.HEATMAP_FOR_URL_OPERATOR = t.METRIC_RETENTION_TYPE = t.METRIC_TIMESERIES_TYPE = void 0, t.METRIC_TIMESERIES_TYPE = {
                                    SESSION_COUNT: "SESSION_COUNT",
                                    PERCENTILE: "PERCENTILE",
                                    CONVERSION_RATE: "CONVERSION_RATE",
                                    SESSION_PERCENTAGE: "SESSION_PERCENTAGE",
                                    ACTIVE_USERS: "ACTIVE_USERS",
                                    EVENT_COUNT: "EVENT_COUNT"
                                }, t.METRIC_RETENTION_TYPE = {
                                    USER_PERCENTAGE: "USER_PERCENTAGE"
                                };
                                var r = {
                                    IS: "IS",
                                    CONTAINS: "CONTAINS",
                                    LIKE: "LIKE",
                                    HREF_LIKE: "HREF_LIKE"
                                };
                                t.HEATMAP_FOR_URL_OPERATOR = r, t.FEEDBACK_SORT_COLUMN = {
                                    RATING: "RATING",
                                    SUBMISSION_DATE: "SUBMISSION_DATE"
                                };
                                var o = {
                                    UNSET: "UNSET",
                                    ASC: "ASC",
                                    DESC: "DESC"
                                };
                                t.SORT_DIRECTION = o, t.nextSortDirection = function(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        r = t.reverse,
                                        n = o.UNSET,
                                        s = o.ASC,
                                        a = o.DESC,
                                        u = [n, a, s];
                                    void 0 !== r && r && (u = [n, s, a]);
                                    var c = u.indexOf(e);
                                    return u[(c + 1) % u.length]
                                };
                                var n = r.IS;
                                t.DEFAULT_HEATMAP_FOR_URL_OPERATOR = n;
                                var s = r.HREF_LIKE;
                                t.DEFAULT_INSIGHTS_HEATMAP_FOR_URL_OPERATOR = s
                            },
                            "./packages/@logrocket/utils/src/constants/mobile.ts": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.MAXIMUM_SUPPORTED_VERSION = t.MINIMUM_SUPPORTED_VERSION = t.IOS_VERSION = t.ANDROID_VERSION = void 0, t.ANDROID_VERSION = "1.26.2", t.IOS_VERSION = "1.26.2", t.MINIMUM_SUPPORTED_VERSION = "1.0.0", t.MAXIMUM_SUPPORTED_VERSION = "1.27.0"
                            },
                            "./packages/@logrocket/utils/src/constants/nps.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.DELIGHTED_FEEDBACK_PREFIX = t.DELIGHTED_RESPONSES_REGEX = t.WOOTRIC_RESPONSES_REGEX = void 0, t.WOOTRIC_RESPONSES_REGEX = /^https:\/\/production.wootric.com\/responses/, t.DELIGHTED_RESPONSES_REGEX = /^https:\/\/web.delighted.com\/e\/[a-zA-Z-]*\/c/, t.DELIGHTED_FEEDBACK_PREFIX = "comment="
                            },
                            "./packages/@logrocket/utils/src/constants/replayTypes.ts": function(e, t) {
                                "use strict";
                                var r, o;
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.REPLAY_TYPE = void 0, t.REPLAY_TYPE = r, (o = r || (t.REPLAY_TYPE = r = {})).SKIA = "SKIA", o.DOM = "DOM"
                            },
                            "./packages/@logrocket/utils/src/constants/sdkTypes.ts": function(e, t, r) {
                                "use strict";
                                var o, n, s, a, u = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.SESSION_TYPE_TO_DISPLAY = t.SDK_REPLAY_TYPE = t.SDK_TYPE_TO_DISPLAY = t.SDK_TYPE = void 0;
                                var c = u(r("./node_modules/@babel/runtime/helpers/defineProperty.js")),
                                    i = r("./packages/@logrocket/utils/src/constants/replayTypes.ts");
                                t.SDK_TYPE = a, (o = a || (t.SDK_TYPE = a = {})).WEB = "web", o.MOBILE = "mobile", o.UNKNOWN = "unknown";
                                var l = (n = {}, (0, c.default)(n, a.WEB, "Web"), (0, c.default)(n, a.MOBILE, "Mobile"), n);
                                t.SDK_TYPE_TO_DISPLAY = l;
                                var d = (s = {}, (0, c.default)(s, a.WEB, i.REPLAY_TYPE.DOM), (0, c.default)(s, a.MOBILE, i.REPLAY_TYPE.SKIA), s);
                                t.SDK_REPLAY_TYPE = d, t.SESSION_TYPE_TO_DISPLAY = l
                            },
                            "./packages/@logrocket/utils/src/constants/statusCodes.ts": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.getStatusText = function(e) {
                                    return r[String(e)]
                                }, t.STATUS_CODES = void 0;
                                var r = {
                                    0: "",
                                    100: "Continue",
                                    101: "Switching Protocol",
                                    102: "Processing",
                                    103: "Early Hints",
                                    200: "OK",
                                    201: "Created",
                                    202: "Accepted",
                                    203: "Non-Authoritative Information",
                                    204: "No Content",
                                    205: "Reset Content",
                                    206: "Partial Content",
                                    207: "Multi-Status",
                                    208: "Already Reported",
                                    226: "IM Used",
                                    300: "Multiple Choices",
                                    301: "Moved Permanently",
                                    302: "Found",
                                    303: "See Other",
                                    304: "Not Modified",
                                    305: "Use Proxy",
                                    306: "unused",
                                    307: "Temporary Redirect",
                                    308: "Permanent Redirect",
                                    400: "Bad Request",
                                    401: "Unauthorized",
                                    402: "Payment Required",
                                    403: "Forbidden",
                                    404: "Not Found",
                                    405: "Method Not Allowed",
                                    406: "Not Acceptable",
                                    407: "Proxy Authentication Required",
                                    408: "Request Timeout",
                                    409: "Conflict",
                                    410: "Gone",
                                    411: "Length Required",
                                    412: "Precondition Failed",
                                    413: "Payload Too Large",
                                    414: "URI Too Long",
                                    415: "Unsupported Media Type",
                                    416: "Range Not Satisfiable",
                                    417: "Expectation Failed",
                                    418: "I'm a teapot",
                                    421: "Misdirected Request",
                                    422: "Unprocessable Entity",
                                    423: "Locked",
                                    424: "Failed Dependency",
                                    425: "Too Early",
                                    426: "Upgrade Required",
                                    428: "Precondition Required",
                                    429: "Too Many Requests",
                                    431: "Request Header Fields Too Large",
                                    451: "Unavailable For Legal Reasons",
                                    500: "Internal Server Error",
                                    501: "Not Implemented",
                                    502: "Bad Gateway",
                                    503: "Service Unavailable",
                                    504: "Gateway Timeout",
                                    505: "HTTP Version Not Supported",
                                    506: "Variant Also Negotiates",
                                    507: "Insufficient Storage",
                                    508: "Loop Detected",
                                    510: "Not Extended",
                                    511: "Network Authentication Required"
                                };
                                t.STATUS_CODES = r
                            },
                            "./packages/@logrocket/utils/src/contains.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e, t) {
                                    return e && t && e.indexOf(t) > -1
                                }
                            },
                            "./packages/@logrocket/utils/src/deepArsonify.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/typeof.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e) {
                                    return {
                                        arson: n.encode(e)
                                    }
                                };
                                var n = function(e, t) {
                                    if (e && e.__esModule) return e;
                                    if (null === e || "object" !== o(e) && "function" != typeof e) return {
                                        default: e
                                    };
                                    var r = s(void 0);
                                    if (r && r.has(e)) return r.get(e);
                                    var n = {},
                                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var u in e)
                                        if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
                                            var c = a ? Object.getOwnPropertyDescriptor(e, u) : null;
                                            c && (c.get || c.set) ? Object.defineProperty(n, u, c) : n[u] = e[u]
                                        }
                                    return n.default = e, r && r.set(e, n), n
                                }(r("./packages/@logrocket/arson/src/index.js"));

                                function s(e) {
                                    if ("function" != typeof WeakMap) return null;
                                    var t = new WeakMap,
                                        r = new WeakMap;
                                    return (s = function(e) {
                                        return e ? r : t
                                    })(e)
                                }
                            },
                            "./packages/@logrocket/utils/src/deepDearsonify.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/typeof.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e) {
                                    return e ? n.decode(e.arson) : e
                                };
                                var n = function(e, t) {
                                    if (e && e.__esModule) return e;
                                    if (null === e || "object" !== o(e) && "function" != typeof e) return {
                                        default: e
                                    };
                                    var r = s(void 0);
                                    if (r && r.has(e)) return r.get(e);
                                    var n = {},
                                        a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var u in e)
                                        if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
                                            var c = a ? Object.getOwnPropertyDescriptor(e, u) : null;
                                            c && (c.get || c.set) ? Object.defineProperty(n, u, c) : n[u] = e[u]
                                        }
                                    return n.default = e, r && r.set(e, n), n
                                }(r("./packages/@logrocket/arson/src/index.js"));

                                function s(e) {
                                    if ("function" != typeof WeakMap) return null;
                                    var t = new WeakMap,
                                        r = new WeakMap;
                                    return (s = function(e) {
                                        return e ? r : t
                                    })(e)
                                }
                            },
                            "./packages/@logrocket/utils/src/endsWith.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e, t) {
                                    return e && t && e.substring(e.length - t.length) === t
                                }
                            },
                            "./packages/@logrocket/utils/src/enhanceFunc.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e, t, r) {
                                    var o = e[t];
                                    return e[t] = function() {
                                            for (var e, t = arguments.length, n = Array(t), s = 0; s < t; s++) n[s] = arguments[s];
                                            return o && (e = o.apply(this, n)), r.apply(this, n), e
                                        },
                                        function() {
                                            e[t] = o
                                        }
                                }
                            },
                            "./packages/@logrocket/utils/src/find.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e, t) {
                                    for (var r = 0; r < e.length; r++)
                                        if (t(e[r])) return e[r]
                                }
                            },
                            "./packages/@logrocket/utils/src/findIndex.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e, t) {
                                    for (var r = 0; r < e.length; r++)
                                        if (t(e[r])) return r;
                                    return -1
                                }
                            },
                            "./packages/@logrocket/utils/src/findKeyFrames.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e, t) {
                                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                        o = r.sdkThrottle;
                                    if (!e.length) return null;
                                    var s = (0, n.default)(e, {
                                            time: t
                                        }, "time"),
                                        a = e[s] || e[s - 1],
                                        u = e[s - 1] || a,
                                        c = Math.min(a.time - u.time, void 0 === o ? 500 : o),
                                        i = Math.max(t - (a.time - c), 0);
                                    return {
                                        prev: u,
                                        next: a,
                                        ratio: 0 === c ? 1 : Math.min(i / c, 1)
                                    }
                                };
                                var n = o(r("./packages/@logrocket/utils/node_modules/lodash/sortedLastIndexBy.js"))
                            },
                            "./packages/@logrocket/utils/src/flatten.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e, t) {
                                    return e.concat(t)
                                }
                            },
                            "./packages/@logrocket/utils/src/getCssRules.ts": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.getCssRule = t.getCssRules = void 0;
                                var r = function(e) {
                                    try {
                                        var t = e.cssRules;
                                        if (!t && e instanceof CSSStyleSheet) return e.rules;
                                        return t
                                    } catch (e) {
                                        return null
                                    }
                                };
                                t.getCssRules = r, t.getCssRule = function(e, t) {
                                    var o = r(e);
                                    return !o || t >= o.length ? null : o.item(t)
                                }
                            },
                            "./packages/@logrocket/utils/src/getGraphQLOperation.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e) {
                                    if (e) try {
                                        var t = ("string" == typeof e ? JSON.parse(e) : e).query.trim().match(/(query|mutation) ([a-z_-]+)/i);
                                        if (!t) return {};
                                        return {
                                            operationType: t[1],
                                            operationName: t[2]
                                        }
                                    } catch (e) {}
                                    return {}
                                }
                            },
                            "./packages/@logrocket/utils/src/getNodeSelector.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = void 0;
                                var n = (0, o(r("./packages/@logrocket/utils/src/protectFunc.js")).default)(function(e) {
                                    var t = {
                                        nodeName: e.nodeName ? e.nodeName.toLowerCase() : ""
                                    };
                                    return e.id && e.id.length > 0 && (t.id = e.id), e.classList && e.classList.length > 0 && (t.classList = Array.prototype.slice.call(e.classList, 0)), t
                                });
                                t.default = n
                            },
                            "./packages/@logrocket/utils/src/hashString.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.combineHashes = t.hashString = void 0;
                                var n = o(r("./packages/@logrocket/utils/src/protectFunc.js")),
                                    s = r("./packages/@logrocket/utils/src/sendTelemetryData.js");

                                function a(e, t) {
                                    (null == t || t > e.length) && (t = e.length);
                                    for (var r = 0, o = Array(t); r < t; r++) o[r] = e[r];
                                    return o
                                }
                                var u = (0, n.default)(function(e) {
                                    try {
                                        var t = 0;
                                        if ("string" == typeof e && e.length)
                                            for (var r = 0; r < e.length; r++) t = 31 * t + e.charCodeAt(r) | 0;
                                        return t
                                    } catch (t) {
                                        return (0, s.sendTelemetry)("Failed to hash string", {
                                            extra: {
                                                str: e
                                            }
                                        }), null
                                    }
                                });
                                t.hashString = u, t.combineHashes = function(e) {
                                    var t, r = e.shift() || 0,
                                        o = function(e, t) {
                                            var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                            if (!r) {
                                                if (Array.isArray(e) || (r = function(e, t) {
                                                        if (e) {
                                                            if ("string" == typeof e) return a(e, void 0);
                                                            var r = Object.prototype.toString.call(e).slice(8, -1);
                                                            if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                                                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return a(e, void 0)
                                                        }
                                                    }(e))) {
                                                    r && (e = r);
                                                    var o = 0,
                                                        n = function() {};
                                                    return {
                                                        s: n,
                                                        n: function() {
                                                            return o >= e.length ? {
                                                                done: !0
                                                            } : {
                                                                done: !1,
                                                                value: e[o++]
                                                            }
                                                        },
                                                        e: function(e) {
                                                            throw e
                                                        },
                                                        f: n
                                                    }
                                                }
                                                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                            }
                                            var s, u = !0,
                                                c = !1;
                                            return {
                                                s: function() {
                                                    r = r.call(e)
                                                },
                                                n: function() {
                                                    var e = r.next();
                                                    return u = e.done, e
                                                },
                                                e: function(e) {
                                                    c = !0, s = e
                                                },
                                                f: function() {
                                                    try {
                                                        u || null == r.return || r.return()
                                                    } finally {
                                                        if (c) throw s
                                                    }
                                                }
                                            }
                                        }(e);
                                    try {
                                        for (o.s(); !(t = o.n()).done;) {
                                            var n = t.value;
                                            r ^= n + 2654435769 + (r << 6) + (r >> 2)
                                        }
                                    } catch (e) {
                                        o.e(e)
                                    } finally {
                                        o.f()
                                    }
                                    return r
                                }
                            },
                            "./packages/@logrocket/utils/src/identityStatus.ts": function(e, t) {
                                "use strict";
                                var r, o;
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.parseIdentityStatus = function(e) {
                                    if (!e) return r.Unknown;
                                    switch (parseInt(e, 10)) {
                                        case r.Anonymous:
                                            return r.Anonymous;
                                        case r.Identified:
                                            return r.Identified;
                                        default:
                                            return r.Unknown
                                    }
                                }, t.IdentityStatus = void 0, t.IdentityStatus = r, (o = r || (t.IdentityStatus = r = {}))[o.Unknown = 0] = "Unknown", o[o.Anonymous = 1] = "Anonymous", o[o.Identified = 2] = "Identified"
                            },
                            "./packages/@logrocket/utils/src/index.ts": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),
                                    n = r("./node_modules/@babel/runtime/helpers/typeof.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                });
                                var s = {
                                    enhanceFunc: !0,
                                    shallowArsonify: !0,
                                    shallowDearsonify: !0,
                                    deepArsonify: !0,
                                    deepDearsonify: !0,
                                    addListener: !0,
                                    protectFunc: !0,
                                    findIndex: !0,
                                    find: !0,
                                    flatten: !0,
                                    selectorMatches: !0,
                                    parseSelectorForMatch: !0,
                                    querySelectorWithShadowDom: !0,
                                    sendErrorTelemetry: !0,
                                    sendTelemetry: !0,
                                    sanitizeValue: !0,
                                    adjustOs: !0,
                                    adjustOsVersion: !0,
                                    selectorFromNodePath: !0,
                                    startsWith: !0,
                                    endsWith: !0,
                                    contains: !0,
                                    uuid: !0,
                                    randomInt: !0,
                                    getCssRules: !0,
                                    getCssRule: !0,
                                    getNodeSelector: !0,
                                    getGraphQLOperation: !0,
                                    isSessionEvent: !0,
                                    isActivityEvent: !0,
                                    parseIntFromHex: !0,
                                    isRecordingSampled: !0,
                                    makeRecordingID: !0,
                                    setFromArray: !0,
                                    setToArray: !0,
                                    applyUrlSanitizer: !0,
                                    maybeCleanSwiftUIClassName: !0,
                                    LOG_FILTER_TYPES: !0,
                                    LOG_TYPES: !0,
                                    METRIC_TIMESERIES_TYPE: !0,
                                    HEATMAP_FOR_URL_OPERATOR: !0,
                                    DEFAULT_HEATMAP_FOR_URL_OPERATOR: !0,
                                    DEFAULT_INSIGHTS_HEATMAP_FOR_URL_OPERATOR: !0,
                                    SORT_DIRECTION: !0,
                                    FEEDBACK_SORT_COLUMN: !0,
                                    METRIC_RETENTION_TYPE: !0,
                                    ISSUE_TYPE: !0,
                                    ISSUE_GROUP_TYPE: !0,
                                    ES_ISSUE_TYPE_BASE_FILTER: !0,
                                    ES_ISSUE_TYPES: !0,
                                    findKeyFrames: !0,
                                    interpolate: !0,
                                    interpolateMobile: !0,
                                    removeOutdated: !0,
                                    DELIGHTED_RESPONSES_REGEX: !0,
                                    WOOTRIC_RESPONSES_REGEX: !0,
                                    REPLAY_TYPE: !0,
                                    ReplayType: !0,
                                    SDK_REPLAY_TYPE: !0,
                                    SDK_TYPE: !0,
                                    SDK_TYPE_TO_DISPLAY: !0,
                                    SESSION_TYPE_TO_DISPLAY: !0,
                                    STATUS_CODES: !0,
                                    getStatusText: !0,
                                    parseQueryString: !0,
                                    likeOperator: !0,
                                    scrollMapHistogramToPercent: !0,
                                    combineHashes: !0,
                                    hashString: !0,
                                    encodeUserTraitString: !0,
                                    parseUserTraitString: !0,
                                    IdentityStatus: !0,
                                    parseIdentityStatus: !0,
                                    scrubException: !0,
                                    MobileConstants: !0
                                };
                                Object.defineProperty(t, "enhanceFunc", {
                                    enumerable: !0,
                                    get: function() {
                                        return a.default
                                    }
                                }), Object.defineProperty(t, "shallowArsonify", {
                                    enumerable: !0,
                                    get: function() {
                                        return u.default
                                    }
                                }), Object.defineProperty(t, "shallowDearsonify", {
                                    enumerable: !0,
                                    get: function() {
                                        return c.default
                                    }
                                }), Object.defineProperty(t, "deepArsonify", {
                                    enumerable: !0,
                                    get: function() {
                                        return i.default
                                    }
                                }), Object.defineProperty(t, "deepDearsonify", {
                                    enumerable: !0,
                                    get: function() {
                                        return l.default
                                    }
                                }), Object.defineProperty(t, "addListener", {
                                    enumerable: !0,
                                    get: function() {
                                        return d.default
                                    }
                                }), Object.defineProperty(t, "protectFunc", {
                                    enumerable: !0,
                                    get: function() {
                                        return f.default
                                    }
                                }), Object.defineProperty(t, "findIndex", {
                                    enumerable: !0,
                                    get: function() {
                                        return p.default
                                    }
                                }), Object.defineProperty(t, "find", {
                                    enumerable: !0,
                                    get: function() {
                                        return g.default
                                    }
                                }), Object.defineProperty(t, "flatten", {
                                    enumerable: !0,
                                    get: function() {
                                        return h.default
                                    }
                                }), Object.defineProperty(t, "selectorMatches", {
                                    enumerable: !0,
                                    get: function() {
                                        return _.default
                                    }
                                }), Object.defineProperty(t, "parseSelectorForMatch", {
                                    enumerable: !0,
                                    get: function() {
                                        return m.default
                                    }
                                }), Object.defineProperty(t, "querySelectorWithShadowDom", {
                                    enumerable: !0,
                                    get: function() {
                                        return k.default
                                    }
                                }), Object.defineProperty(t, "sendErrorTelemetry", {
                                    enumerable: !0,
                                    get: function() {
                                        return b.default
                                    }
                                }), Object.defineProperty(t, "sendTelemetry", {
                                    enumerable: !0,
                                    get: function() {
                                        return b.sendTelemetry
                                    }
                                }), Object.defineProperty(t, "sanitizeValue", {
                                    enumerable: !0,
                                    get: function() {
                                        return y.default
                                    }
                                }), Object.defineProperty(t, "adjustOs", {
                                    enumerable: !0,
                                    get: function() {
                                        return v.adjustOs
                                    }
                                }), Object.defineProperty(t, "adjustOsVersion", {
                                    enumerable: !0,
                                    get: function() {
                                        return v.adjustOsVersion
                                    }
                                }), Object.defineProperty(t, "selectorFromNodePath", {
                                    enumerable: !0,
                                    get: function() {
                                        return j.default
                                    }
                                }), Object.defineProperty(t, "startsWith", {
                                    enumerable: !0,
                                    get: function() {
                                        return O.default
                                    }
                                }), Object.defineProperty(t, "endsWith", {
                                    enumerable: !0,
                                    get: function() {
                                        return E.default
                                    }
                                }), Object.defineProperty(t, "contains", {
                                    enumerable: !0,
                                    get: function() {
                                        return S.default
                                    }
                                }), Object.defineProperty(t, "uuid", {
                                    enumerable: !0,
                                    get: function() {
                                        return P.default
                                    }
                                }), Object.defineProperty(t, "randomInt", {
                                    enumerable: !0,
                                    get: function() {
                                        return w.default
                                    }
                                }), Object.defineProperty(t, "getCssRules", {
                                    enumerable: !0,
                                    get: function() {
                                        return R.getCssRules
                                    }
                                }), Object.defineProperty(t, "getCssRule", {
                                    enumerable: !0,
                                    get: function() {
                                        return R.getCssRule
                                    }
                                }), Object.defineProperty(t, "getNodeSelector", {
                                    enumerable: !0,
                                    get: function() {
                                        return T.default
                                    }
                                }), Object.defineProperty(t, "getGraphQLOperation", {
                                    enumerable: !0,
                                    get: function() {
                                        return I.default
                                    }
                                }), Object.defineProperty(t, "isSessionEvent", {
                                    enumerable: !0,
                                    get: function() {
                                        return x.default
                                    }
                                }), Object.defineProperty(t, "isActivityEvent", {
                                    enumerable: !0,
                                    get: function() {
                                        return A.default
                                    }
                                }), Object.defineProperty(t, "parseIntFromHex", {
                                    enumerable: !0,
                                    get: function() {
                                        return M.default
                                    }
                                }), Object.defineProperty(t, "isRecordingSampled", {
                                    enumerable: !0,
                                    get: function() {
                                        return D.default
                                    }
                                }), Object.defineProperty(t, "makeRecordingID", {
                                    enumerable: !0,
                                    get: function() {
                                        return L.default
                                    }
                                }), Object.defineProperty(t, "setFromArray", {
                                    enumerable: !0,
                                    get: function() {
                                        return C.default
                                    }
                                }), Object.defineProperty(t, "setToArray", {
                                    enumerable: !0,
                                    get: function() {
                                        return N.default
                                    }
                                }), Object.defineProperty(t, "applyUrlSanitizer", {
                                    enumerable: !0,
                                    get: function() {
                                        return U.default
                                    }
                                }), Object.defineProperty(t, "maybeCleanSwiftUIClassName", {
                                    enumerable: !0,
                                    get: function() {
                                        return F.default
                                    }
                                }), Object.defineProperty(t, "LOG_FILTER_TYPES", {
                                    enumerable: !0,
                                    get: function() {
                                        return q.LOG_FILTER_TYPES
                                    }
                                }), Object.defineProperty(t, "LOG_TYPES", {
                                    enumerable: !0,
                                    get: function() {
                                        return q.LOG_TYPES
                                    }
                                }), Object.defineProperty(t, "METRIC_TIMESERIES_TYPE", {
                                    enumerable: !0,
                                    get: function() {
                                        return G.METRIC_TIMESERIES_TYPE
                                    }
                                }), Object.defineProperty(t, "HEATMAP_FOR_URL_OPERATOR", {
                                    enumerable: !0,
                                    get: function() {
                                        return G.HEATMAP_FOR_URL_OPERATOR
                                    }
                                }), Object.defineProperty(t, "DEFAULT_HEATMAP_FOR_URL_OPERATOR", {
                                    enumerable: !0,
                                    get: function() {
                                        return G.DEFAULT_HEATMAP_FOR_URL_OPERATOR
                                    }
                                }), Object.defineProperty(t, "DEFAULT_INSIGHTS_HEATMAP_FOR_URL_OPERATOR", {
                                    enumerable: !0,
                                    get: function() {
                                        return G.DEFAULT_INSIGHTS_HEATMAP_FOR_URL_OPERATOR
                                    }
                                }), Object.defineProperty(t, "SORT_DIRECTION", {
                                    enumerable: !0,
                                    get: function() {
                                        return G.SORT_DIRECTION
                                    }
                                }), Object.defineProperty(t, "FEEDBACK_SORT_COLUMN", {
                                    enumerable: !0,
                                    get: function() {
                                        return G.FEEDBACK_SORT_COLUMN
                                    }
                                }), Object.defineProperty(t, "METRIC_RETENTION_TYPE", {
                                    enumerable: !0,
                                    get: function() {
                                        return G.METRIC_RETENTION_TYPE
                                    }
                                }), Object.defineProperty(t, "ISSUE_TYPE", {
                                    enumerable: !0,
                                    get: function() {
                                        return H.ISSUE_TYPE
                                    }
                                }), Object.defineProperty(t, "ISSUE_GROUP_TYPE", {
                                    enumerable: !0,
                                    get: function() {
                                        return H.ISSUE_GROUP_TYPE
                                    }
                                }), Object.defineProperty(t, "ES_ISSUE_TYPE_BASE_FILTER", {
                                    enumerable: !0,
                                    get: function() {
                                        return H.ES_ISSUE_TYPE_BASE_FILTER
                                    }
                                }), Object.defineProperty(t, "ES_ISSUE_TYPES", {
                                    enumerable: !0,
                                    get: function() {
                                        return H.ES_ISSUE_TYPES
                                    }
                                }), Object.defineProperty(t, "findKeyFrames", {
                                    enumerable: !0,
                                    get: function() {
                                        return Y.default
                                    }
                                }), Object.defineProperty(t, "interpolate", {
                                    enumerable: !0,
                                    get: function() {
                                        return K.default
                                    }
                                }), Object.defineProperty(t, "interpolateMobile", {
                                    enumerable: !0,
                                    get: function() {
                                        return K.interpolateMobile
                                    }
                                }), Object.defineProperty(t, "removeOutdated", {
                                    enumerable: !0,
                                    get: function() {
                                        return W.default
                                    }
                                }), Object.defineProperty(t, "DELIGHTED_RESPONSES_REGEX", {
                                    enumerable: !0,
                                    get: function() {
                                        return z.DELIGHTED_RESPONSES_REGEX
                                    }
                                }), Object.defineProperty(t, "WOOTRIC_RESPONSES_REGEX", {
                                    enumerable: !0,
                                    get: function() {
                                        return z.WOOTRIC_RESPONSES_REGEX
                                    }
                                }), Object.defineProperty(t, "REPLAY_TYPE", {
                                    enumerable: !0,
                                    get: function() {
                                        return B.REPLAY_TYPE
                                    }
                                }), Object.defineProperty(t, "ReplayType", {
                                    enumerable: !0,
                                    get: function() {
                                        return B.ReplayType
                                    }
                                }), Object.defineProperty(t, "SDK_REPLAY_TYPE", {
                                    enumerable: !0,
                                    get: function() {
                                        return V.SDK_REPLAY_TYPE
                                    }
                                }), Object.defineProperty(t, "SDK_TYPE", {
                                    enumerable: !0,
                                    get: function() {
                                        return V.SDK_TYPE
                                    }
                                }), Object.defineProperty(t, "SDK_TYPE_TO_DISPLAY", {
                                    enumerable: !0,
                                    get: function() {
                                        return V.SDK_TYPE_TO_DISPLAY
                                    }
                                }), Object.defineProperty(t, "SESSION_TYPE_TO_DISPLAY", {
                                    enumerable: !0,
                                    get: function() {
                                        return V.SESSION_TYPE_TO_DISPLAY
                                    }
                                }), Object.defineProperty(t, "STATUS_CODES", {
                                    enumerable: !0,
                                    get: function() {
                                        return X.STATUS_CODES
                                    }
                                }), Object.defineProperty(t, "getStatusText", {
                                    enumerable: !0,
                                    get: function() {
                                        return X.getStatusText
                                    }
                                }), Object.defineProperty(t, "parseQueryString", {
                                    enumerable: !0,
                                    get: function() {
                                        return $.parseQueryString
                                    }
                                }), Object.defineProperty(t, "likeOperator", {
                                    enumerable: !0,
                                    get: function() {
                                        return Q.likeOperator
                                    }
                                }), Object.defineProperty(t, "scrollMapHistogramToPercent", {
                                    enumerable: !0,
                                    get: function() {
                                        return J.default
                                    }
                                }), Object.defineProperty(t, "combineHashes", {
                                    enumerable: !0,
                                    get: function() {
                                        return Z.combineHashes
                                    }
                                }), Object.defineProperty(t, "hashString", {
                                    enumerable: !0,
                                    get: function() {
                                        return Z.hashString
                                    }
                                }), Object.defineProperty(t, "encodeUserTraitString", {
                                    enumerable: !0,
                                    get: function() {
                                        return ee.encodeUserTraitString
                                    }
                                }), Object.defineProperty(t, "parseUserTraitString", {
                                    enumerable: !0,
                                    get: function() {
                                        return ee.parseUserTraitString
                                    }
                                }), Object.defineProperty(t, "IdentityStatus", {
                                    enumerable: !0,
                                    get: function() {
                                        return et.IdentityStatus
                                    }
                                }), Object.defineProperty(t, "parseIdentityStatus", {
                                    enumerable: !0,
                                    get: function() {
                                        return et.parseIdentityStatus
                                    }
                                }), Object.defineProperty(t, "scrubException", {
                                    enumerable: !0,
                                    get: function() {
                                        return er.scrubException
                                    }
                                }), t.MobileConstants = void 0;
                                var a = o(r("./packages/@logrocket/utils/src/enhanceFunc.js")),
                                    u = o(r("./packages/@logrocket/utils/src/shallowArsonify.js")),
                                    c = o(r("./packages/@logrocket/utils/src/shallowDearsonify.js")),
                                    i = o(r("./packages/@logrocket/utils/src/deepArsonify.js")),
                                    l = o(r("./packages/@logrocket/utils/src/deepDearsonify.js")),
                                    d = o(r("./packages/@logrocket/utils/src/addListener.js")),
                                    f = o(r("./packages/@logrocket/utils/src/protectFunc.js")),
                                    p = o(r("./packages/@logrocket/utils/src/findIndex.js")),
                                    g = o(r("./packages/@logrocket/utils/src/find.js")),
                                    h = o(r("./packages/@logrocket/utils/src/flatten.js")),
                                    _ = o(r("./packages/@logrocket/utils/src/selectorMatches.js")),
                                    m = o(r("./packages/@logrocket/utils/src/parseSelectorForMatch.js")),
                                    k = o(r("./packages/@logrocket/utils/src/querySelectorWithShadowDom.js")),
                                    b = ei(r("./packages/@logrocket/utils/src/sendTelemetryData.js")),
                                    y = o(r("./packages/@logrocket/utils/src/sanitizeValue.js")),
                                    v = r("./packages/@logrocket/utils/src/adjustOsVersion.ts"),
                                    j = o(r("./packages/@logrocket/utils/src/selectorFromNodePath.js")),
                                    O = o(r("./packages/@logrocket/utils/src/startsWith.js")),
                                    E = o(r("./packages/@logrocket/utils/src/endsWith.js")),
                                    S = o(r("./packages/@logrocket/utils/src/contains.js")),
                                    P = o(r("./packages/@logrocket/utils/src/uuid.js")),
                                    w = o(r("./packages/@logrocket/utils/src/randomInt.js")),
                                    R = r("./packages/@logrocket/utils/src/getCssRules.ts"),
                                    T = o(r("./packages/@logrocket/utils/src/getNodeSelector.js")),
                                    I = o(r("./packages/@logrocket/utils/src/getGraphQLOperation.js")),
                                    x = o(r("./packages/@logrocket/utils/src/isSessionEvent.js")),
                                    A = o(r("./packages/@logrocket/utils/src/isActivityEvent.js")),
                                    M = o(r("./packages/@logrocket/utils/src/parseIntFromHex.js")),
                                    D = o(r("./packages/@logrocket/utils/src/isRecordingSampled.js")),
                                    L = o(r("./packages/@logrocket/utils/src/makeRecordingID.js")),
                                    C = o(r("./packages/@logrocket/utils/src/setFromArray.js")),
                                    N = o(r("./packages/@logrocket/utils/src/setToArray.js")),
                                    U = o(r("./packages/@logrocket/utils/src/applyUrlSanitizer.js")),
                                    F = o(r("./packages/@logrocket/utils/src/maybeCleanSwiftUIClassName.ts")),
                                    q = r("./packages/@logrocket/utils/src/constants/logTypes.js"),
                                    G = r("./packages/@logrocket/utils/src/constants/metrics.js"),
                                    H = r("./packages/@logrocket/utils/src/constants/issues.ts"),
                                    Y = o(r("./packages/@logrocket/utils/src/findKeyFrames.js")),
                                    K = ei(r("./packages/@logrocket/utils/src/interpolate.js")),
                                    W = o(r("./packages/@logrocket/utils/src/removeOutdated.js")),
                                    z = r("./packages/@logrocket/utils/src/constants/nps.js"),
                                    B = r("./packages/@logrocket/utils/src/constants/replayTypes.ts"),
                                    V = r("./packages/@logrocket/utils/src/constants/sdkTypes.ts"),
                                    X = r("./packages/@logrocket/utils/src/constants/statusCodes.ts"),
                                    $ = r("./packages/@logrocket/utils/src/parseQueryString.js"),
                                    Q = r("./packages/@logrocket/utils/src/likeOperator.js"),
                                    J = o(r("./packages/@logrocket/utils/src/scrollMapHistogramToPercent.js")),
                                    Z = r("./packages/@logrocket/utils/src/hashString.js"),
                                    ee = r("./packages/@logrocket/utils/src/userTraitStrings.ts"),
                                    et = r("./packages/@logrocket/utils/src/identityStatus.ts"),
                                    er = r("./packages/@logrocket/utils/src/scrubException.ts"),
                                    eo = ei(r("./packages/@logrocket/utils/src/constants/mobile.ts"));
                                t.MobileConstants = eo;
                                var en = r("./packages/@logrocket/utils/src/browserUtils.js");
                                Object.keys(en).forEach(function(e) {
                                    !("default" === e || "__esModule" === e || Object.prototype.hasOwnProperty.call(s, e)) && (e in t && t[e] === en[e] || Object.defineProperty(t, e, {
                                        enumerable: !0,
                                        get: function() {
                                            return en[e]
                                        }
                                    }))
                                });
                                var es = r("./packages/@logrocket/utils/src/isValidAppID.ts");
                                Object.keys(es).forEach(function(e) {
                                    !("default" === e || "__esModule" === e || Object.prototype.hasOwnProperty.call(s, e)) && (e in t && t[e] === es[e] || Object.defineProperty(t, e, {
                                        enumerable: !0,
                                        get: function() {
                                            return es[e]
                                        }
                                    }))
                                });
                                var ea = r("./packages/@logrocket/utils/src/requireValue.ts");
                                Object.keys(ea).forEach(function(e) {
                                    !("default" === e || "__esModule" === e || Object.prototype.hasOwnProperty.call(s, e)) && (e in t && t[e] === ea[e] || Object.defineProperty(t, e, {
                                        enumerable: !0,
                                        get: function() {
                                            return ea[e]
                                        }
                                    }))
                                });
                                var eu = r("./packages/@logrocket/utils/src/types.ts");

                                function ec(e) {
                                    if ("function" != typeof WeakMap) return null;
                                    var t = new WeakMap,
                                        r = new WeakMap;
                                    return (ec = function(e) {
                                        return e ? r : t
                                    })(e)
                                }

                                function ei(e, t) {
                                    if (!t && e && e.__esModule) return e;
                                    if (null === e || "object" !== n(e) && "function" != typeof e) return {
                                        default: e
                                    };
                                    var r = ec(t);
                                    if (r && r.has(e)) return r.get(e);
                                    var o = {},
                                        s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                                    for (var a in e)
                                        if ("default" !== a && Object.prototype.hasOwnProperty.call(e, a)) {
                                            var u = s ? Object.getOwnPropertyDescriptor(e, a) : null;
                                            u && (u.get || u.set) ? Object.defineProperty(o, a, u) : o[a] = e[a]
                                        }
                                    return o.default = e, r && r.set(e, o), o
                                }
                                Object.keys(eu).forEach(function(e) {
                                    !("default" === e || "__esModule" === e || Object.prototype.hasOwnProperty.call(s, e)) && (e in t && t[e] === eu[e] || Object.defineProperty(t, e, {
                                        enumerable: !0,
                                        get: function() {
                                            return eu[e]
                                        }
                                    }))
                                })
                            },
                            "./packages/@logrocket/utils/src/interpolate.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = u, t.interpolateMobile = function(e, t, r) {
                                    if (!e) return {};
                                    var o = e.prev,
                                        n = e.next;
                                    return "MOVE" === n.type ? u(e, t) : o === n && Math.abs(r - n.time) > 500 ? null : n
                                };
                                var n = o(r("./node_modules/@babel/runtime/helpers/defineProperty.js"));

                                function s(e, t) {
                                    (null == t || t > e.length) && (t = e.length);
                                    for (var r = 0, o = Array(t); r < t; r++) o[r] = e[r];
                                    return o
                                }

                                function a(e, t) {
                                    var r = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var o = Object.getOwnPropertySymbols(e);
                                        t && (o = o.filter(function(t) {
                                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                                        })), r.push.apply(r, o)
                                    }
                                    return r
                                }

                                function u(e, t) {
                                    if (!e) return {};
                                    var r, o = e.prev,
                                        u = e.next,
                                        c = e.ratio,
                                        i = function(e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var r = null != arguments[t] ? arguments[t] : {};
                                                t % 2 ? a(Object(r), !0).forEach(function(t) {
                                                    (0, n.default)(e, t, r[t])
                                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach(function(t) {
                                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                                })
                                            }
                                            return e
                                        }({}, u),
                                        l = function(e, t) {
                                            var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                            if (!r) {
                                                if (Array.isArray(e) || (r = function(e, t) {
                                                        if (e) {
                                                            if ("string" == typeof e) return s(e, void 0);
                                                            var r = Object.prototype.toString.call(e).slice(8, -1);
                                                            if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                                                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return s(e, void 0)
                                                        }
                                                    }(e))) {
                                                    r && (e = r);
                                                    var o = 0,
                                                        n = function() {};
                                                    return {
                                                        s: n,
                                                        n: function() {
                                                            return o >= e.length ? {
                                                                done: !0
                                                            } : {
                                                                done: !1,
                                                                value: e[o++]
                                                            }
                                                        },
                                                        e: function(e) {
                                                            throw e
                                                        },
                                                        f: n
                                                    }
                                                }
                                                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                            }
                                            var a, u = !0,
                                                c = !1;
                                            return {
                                                s: function() {
                                                    r = r.call(e)
                                                },
                                                n: function() {
                                                    var e = r.next();
                                                    return u = e.done, e
                                                },
                                                e: function(e) {
                                                    c = !0, a = e
                                                },
                                                f: function() {
                                                    try {
                                                        u || null == r.return || r.return()
                                                    } finally {
                                                        if (c) throw a
                                                    }
                                                }
                                            }
                                        }(t);
                                    try {
                                        for (l.s(); !(r = l.n()).done;) {
                                            var d = r.value;
                                            i[d] = o[d] + (u[d] - o[d]) * c
                                        }
                                    } catch (e) {
                                        l.e(e)
                                    } finally {
                                        l.f()
                                    }
                                    return i
                                }
                            },
                            "./packages/@logrocket/utils/src/isActivityEvent.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e) {
                                    return ["lr.browser.MouseEvent", "lr.browser.ScrollEvent", "lr.browser.InputEvent", "lr.browser.InputChangeEvent", "lr.android.TouchEvent", "lr.android.InputChangeEvent", "lr.ios.TouchEvent", "lr.ios.InputChangeEvent"].indexOf(e) > -1
                                }
                            },
                            "./packages/@logrocket/utils/src/isRecordingSampled.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e, t) {
                                    return !(t <= 0) && (0, n.default)(e) % 1e4 <= Math.floor(1e4 * t)
                                };
                                var n = o(r("./packages/@logrocket/utils/src/parseIntFromHex.js"))
                            },
                            "./packages/@logrocket/utils/src/isSessionEvent.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e) {
                                    return r.indexOf(e.type) > -1 || "CLICK" === e.data.eventType
                                };
                                var r = ["lr.browser.NavigationEvent", "lr.browser.InputChangeEvent", "lr.browser.InputEvent"]
                            },
                            "./packages/@logrocket/utils/src/isValidAppID.ts": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.isValidAppID = function(e) {
                                    return "string" == typeof e && r.test(e)
                                };
                                var r = /^[a-z0-9_-]+\/[a-z0-9_-]+$/
                            },
                            "./packages/@logrocket/utils/src/likeOperator.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.likeOperator = function(e, t) {
                                    var r = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\\\*/g, ".*").replace(/\\\?/g, ".");
                                    return new RegExp("^".concat(r, "$")).test(e)
                                }
                            },
                            "./packages/@logrocket/utils/src/logError.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = void 0;
                                var r = "undefined" != typeof console && console.error && console.error.bind ? console.error.bind(console) : function() {};
                                t.default = r
                            },
                            "./packages/@logrocket/utils/src/makeRecordingID.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        t = e.prefix;
                                    return "".concat(void 0 === t ? 5 : t, "-").concat((0, n.default)())
                                };
                                var n = o(r("./packages/@logrocket/utils/src/uuid.js"))
                            },
                            "./packages/@logrocket/utils/src/mapValues.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e, t) {
                                    if (null == e) return {};
                                    var r = {};
                                    return Object.keys(e).forEach(function(o) {
                                        r[o] = t(e[o])
                                    }), r
                                }
                            },
                            "./packages/@logrocket/utils/src/maybeCleanSwiftUIClassName.ts": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e) {
                                    return e.replace(/</g, "%3c").replace(/>/g, "%3e").replace(/\s/g, "")
                                }
                            },
                            "./packages/@logrocket/utils/src/parseIntFromHex.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e) {
                                    var t = e.replace(/[^0-9a-f]/g, "");
                                    return parseInt("0x".concat(t), 16) || 0
                                }
                            },
                            "./packages/@logrocket/utils/src/parseQueryString.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.parseQueryString = void 0;
                                var n = o(r("./node_modules/@babel/runtime/helpers/slicedToArray.js")),
                                    s = function(e) {
                                        var t = {};
                                        return e.split("&").forEach(function(e) {
                                            var r = e.split("=").map(function(e) {
                                                    return e.replace(/\+/g, " ")
                                                }).map(decodeURIComponent),
                                                o = (0, n.default)(r, 2),
                                                s = o[0],
                                                a = o[1];
                                            t[s] = a
                                        }), t
                                    };
                                t.parseQueryString = function(e) {
                                    var t = e.indexOf("?");
                                    return -1 === t ? {} : s(e.substring(t + 1))
                                }
                            },
                            "./packages/@logrocket/utils/src/parseSelectorForMatch.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e) {
                                    return e.replace(/\s*>\s*|:nth-child\(([1-9][0-9]*|odd|even)\)|\s+/gi, function(e) {
                                        return e.indexOf(">") > -1 ? " >" : 0 === e.trim().length ? " " : "".concat("~").concat(e.slice(11))
                                    }).split(/\s+/).map(function(e) {
                                        var t = {},
                                            r = e;
                                        if (">" === r.charAt(0) && (t.directDesc = !0, r = r.slice(1)), "~" === (r = r.replace(/^([a-z0-9-_]+)/ig, function(e) {
                                                return t.nodeName = e, ""
                                            })).charAt(0)) {
                                            var o = r.slice(1).split(")"),
                                                u = (0, s.default)(o, 2),
                                                c = u[0],
                                                i = u[1];
                                            t.nthChild = c, r = i
                                        }
                                        return r.replace(/\.|#/gi, function(e) {
                                            return " ".concat(e)
                                        }).trim().split(" ").forEach(function(e) {
                                            if ((0, a.default)(e, ".")) {
                                                var r = e.slice(1);
                                                t.classList = t.classList ? [].concat((0, n.default)(t.classList), [r]) : [r]
                                            } else(0, a.default)(e, "#") && (t.id = e.slice(1))
                                        }), t
                                    })
                                };
                                var n = o(r("./node_modules/@babel/runtime/helpers/toConsumableArray.js")),
                                    s = o(r("./node_modules/@babel/runtime/helpers/slicedToArray.js")),
                                    a = o(r("./packages/@logrocket/utils/src/startsWith.js"))
                            },
                            "./packages/@logrocket/utils/src/protectFunc.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
                                    return function() {
                                        var r;
                                        try {
                                            r = e.apply(void 0, arguments)
                                        } catch (e) {
                                            if ("undefined" != typeof window && window._lrdebug) throw e;
                                            var o = t(e);
                                            (0, s.default)("LogRocket", e), (0, n.default)(e, o)
                                        }
                                        return r
                                    }
                                };
                                var n = o(r("./packages/@logrocket/utils/src/sendTelemetryData.js")),
                                    s = o(r("./packages/@logrocket/utils/src/logError.js"))
                            },
                            "./packages/@logrocket/utils/src/querySelectorWithShadowDom.js": function(e, t) {
                                "use strict";

                                function r(e, t) {
                                    var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (!r) {
                                        if (Array.isArray(e) || (r = function(e, t) {
                                                if (e) {
                                                    if ("string" == typeof e) return o(e, void 0);
                                                    var r = Object.prototype.toString.call(e).slice(8, -1);
                                                    if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                                                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return o(e, void 0)
                                                }
                                            }(e)) || t && e && "number" == typeof e.length) {
                                            r && (e = r);
                                            var n = 0,
                                                s = function() {};
                                            return {
                                                s: s,
                                                n: function() {
                                                    return n >= e.length ? {
                                                        done: !0
                                                    } : {
                                                        done: !1,
                                                        value: e[n++]
                                                    }
                                                },
                                                e: function(e) {
                                                    throw e
                                                },
                                                f: s
                                            }
                                        }
                                        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }
                                    var a, u = !0,
                                        c = !1;
                                    return {
                                        s: function() {
                                            r = r.call(e)
                                        },
                                        n: function() {
                                            var e = r.next();
                                            return u = e.done, e
                                        },
                                        e: function(e) {
                                            c = !0, a = e
                                        },
                                        f: function() {
                                            try {
                                                u || null == r.return || r.return()
                                            } finally {
                                                if (c) throw a
                                            }
                                        }
                                    }
                                }

                                function o(e, t) {
                                    (null == t || t > e.length) && (t = e.length);
                                    for (var r = 0, o = Array(t); r < t; r++) o[r] = e[r];
                                    return o
                                }
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e, t) {
                                    if (t.startsWith("$shadow-root >")) throw Error("Malformed selector '".concat(t, "': should not start with $shadow-root"));
                                    t.endsWith("> $shadow-root") && (t = t.slice(0, t.length - 14));
                                    for (var r, o = e, n = t.split("> $shadow-root >"), a = 0; a < n.length; a++)
                                        if ((r = s(o, n[a])) && a < n.length - 1) {
                                            if (r.shadowRoot) o = r.shadowRoot;
                                            else throw Error("Missing shadowRoot for selector '".concat(t, "' at depth ").concat(a))
                                        }
                                    return {
                                        root: o,
                                        node: r
                                    }
                                }, t.caseInsensitiveQuerySelector = void 0;
                                var n = function(e) {
                                        var t = e.root,
                                            o = e.selectorList,
                                            n = e.directDesc,
                                            s = o[0].split(/(?=\.)|(?=#)/),
                                            a = s.shift(),
                                            u = "",
                                            c = [];
                                        s.forEach(function(e) {
                                            "#" === e[0] && (u = e.toLowerCase().substring(1).trim()), "." === e[0] && c.push(e.toLowerCase().substring(1).trim())
                                        });
                                        var i, l = [],
                                            d = r(n ? [t.querySelector(":scope > ".concat(a))] : t.querySelectorAll(a));
                                        try {
                                            for (d.s(); !(i = d.n()).done;) {
                                                var f = function() {
                                                    var e = i.value;
                                                    if (!e || u !== e.id.toLowerCase()) return "continue";
                                                    var t = Array.from(e.classList.values()).map(function(e) {
                                                        return e.toLowerCase()
                                                    }).filter(function(e) {
                                                        return "" !== e && ":" !== e[0]
                                                    });
                                                    if (!c.every(function(e) {
                                                            return t.indexOf(e) > -1
                                                        })) return "continue";
                                                    l.push(e)
                                                }();
                                                if ("continue" === f) continue
                                            }
                                        } catch (e) {
                                            d.e(e)
                                        } finally {
                                            d.f()
                                        }
                                        return l
                                    },
                                    s = function(e, t) {
                                        if (!t.length || !(s = e.host ? e : e.querySelector("body"))) return null;
                                        for (var o = [{
                                                matches: [s],
                                                selectorList: t.split(" > "),
                                                directDesc: !1
                                            }]; o.length;) {
                                            var s, a, u = o.shift(),
                                                c = u.matches,
                                                i = u.selectorList,
                                                l = u.directDesc,
                                                d = r(c);
                                            try {
                                                for (d.s(); !(a = d.n()).done;) {
                                                    var f = a.value,
                                                        p = n({
                                                            root: f,
                                                            selectorList: i,
                                                            directDesc: l
                                                        });
                                                    if (p.length && 1 === i.length) return p[0];
                                                    p.length && o.push({
                                                        matches: p,
                                                        selectorList: i.slice(1),
                                                        directDesc: !0
                                                    })
                                                }
                                            } catch (e) {
                                                d.e(e)
                                            } finally {
                                                d.f()
                                            }
                                        }
                                        return null
                                    };
                                t.caseInsensitiveQuerySelector = s
                            },
                            "./packages/@logrocket/utils/src/randomInt.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e, t) {
                                    var r = Math.ceil(e);
                                    return Math.floor(Math.random() * (Math.floor(t) - r)) + r
                                }
                            },
                            "./packages/@logrocket/utils/src/removeOutdated.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e, t) {
                                    if (0 === e.length) return e;
                                    var r = (0, n.default)(e, {
                                            time: t.time - 5e3
                                        }, "time") - 1,
                                        o = e[r];
                                    return o && t.time - o.time > 5e3 && r > 0 ? e.slice(r) : e
                                };
                                var n = o(r("./packages/@logrocket/utils/node_modules/lodash/sortedLastIndexBy.js"))
                            },
                            "./packages/@logrocket/utils/src/requireValue.ts": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.requireValue = void 0, t.requireValue = function(e) {
                                    if (void 0 === e) throw Error("Value must not be undefined.");
                                    return e
                                }
                            },
                            "./packages/@logrocket/utils/src/sanitizeValue.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e, t) {
                                    var o = String(e);
                                    return "lipsum" === String(t).toLowerCase() ? r(o) : ""
                                };
                                var r = function(e) {
                                    for (var t = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ", r = Math.ceil(e.length / t.length), o = ""; r > 0;) o += t, r--;
                                    return o.slice(0, e.length)
                                }
                            },
                            "./packages/@logrocket/utils/src/scrollMapHistogramToPercent.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e, t) {
                                    for (var r = [], o = e.reduce(function(e, t) {
                                            return e + t.count
                                        }, 0), n = 0, s = 1; s <= 100; s++) {
                                        var a = .01 * s * t;
                                        n >= e.length ? r.push(0) : (r.push(o), a > e[n].maxScroll && (o -= e[n].count, n++))
                                    }
                                    return r
                                }
                            },
                            "./packages/@logrocket/utils/src/scrubException.ts": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.scrubException = function(e, t) {
                                    if (t) {
                                        var r, o = s(c);
                                        try {
                                            for (o.s(); !(r = o.n()).done;) {
                                                var n = r.value,
                                                    a = t[n];
                                                u(a) && (e[n] = a.toString())
                                            }
                                        } catch (e) {
                                            o.e(e)
                                        } finally {
                                            o.f()
                                        }
                                        var l, d = s(i);
                                        try {
                                            for (d.s(); !(l = d.n()).done;) {
                                                for (var f = l.value, p = t[f] || {}, g = {}, h = 0, _ = Object.keys(p); h < _.length; h++) {
                                                    var m = _[h],
                                                        k = p[m];
                                                    u(k) && (g[m.toString()] = k.toString())
                                                }
                                                e[f] = g
                                            }
                                        } catch (e) {
                                            d.e(e)
                                        } finally {
                                            d.f()
                                        }
                                    }
                                };
                                var n = o(r("./node_modules/@babel/runtime/helpers/typeof.js"));

                                function s(e, t) {
                                    var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (!r) {
                                        if (Array.isArray(e) || (r = function(e, t) {
                                                if (e) {
                                                    if ("string" == typeof e) return a(e, void 0);
                                                    var r = Object.prototype.toString.call(e).slice(8, -1);
                                                    if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                                                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return a(e, void 0)
                                                }
                                            }(e)) || t && e && "number" == typeof e.length) {
                                            r && (e = r);
                                            var o = 0,
                                                n = function() {};
                                            return {
                                                s: n,
                                                n: function() {
                                                    return o >= e.length ? {
                                                        done: !0
                                                    } : {
                                                        done: !1,
                                                        value: e[o++]
                                                    }
                                                },
                                                e: function(e) {
                                                    throw e
                                                },
                                                f: n
                                            }
                                        }
                                        throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }
                                    var s, u = !0,
                                        c = !1;
                                    return {
                                        s: function() {
                                            r = r.call(e)
                                        },
                                        n: function() {
                                            var e = r.next();
                                            return u = e.done, e
                                        },
                                        e: function(e) {
                                            c = !0, s = e
                                        },
                                        f: function() {
                                            try {
                                                u || null == r.return || r.return()
                                            } finally {
                                                if (c) throw s
                                            }
                                        }
                                    }
                                }

                                function a(e, t) {
                                    (null == t || t > e.length) && (t = e.length);
                                    for (var r = 0, o = Array(t); r < t; r++) o[r] = e[r];
                                    return o
                                }

                                function u(e) {
                                    return /boolean|number|string/.test((0, n.default)(e))
                                }
                                var c = ["level", "logger"],
                                    i = ["tags", "extra"]
                            },
                            "./packages/@logrocket/utils/src/selectorFromNodePath.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function() {
                                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                        r = [],
                                        o = function(e, t) {
                                            var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                            if (!r) {
                                                if (Array.isArray(e) || (r = function(e, t) {
                                                        if (e) {
                                                            if ("string" == typeof e) return s(e, void 0);
                                                            var r = Object.prototype.toString.call(e).slice(8, -1);
                                                            if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                                                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return s(e, void 0)
                                                        }
                                                    }(e))) {
                                                    r && (e = r);
                                                    var o = 0,
                                                        n = function() {};
                                                    return {
                                                        s: n,
                                                        n: function() {
                                                            return o >= e.length ? {
                                                                done: !0
                                                            } : {
                                                                done: !1,
                                                                value: e[o++]
                                                            }
                                                        },
                                                        e: function(e) {
                                                            throw e
                                                        },
                                                        f: n
                                                    }
                                                }
                                                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                            }
                                            var a, u = !0,
                                                c = !1;
                                            return {
                                                s: function() {
                                                    r = r.call(e)
                                                },
                                                n: function() {
                                                    var e = r.next();
                                                    return u = e.done, e
                                                },
                                                e: function(e) {
                                                    c = !0, a = e
                                                },
                                                f: function() {
                                                    try {
                                                        u || null == r.return || r.return()
                                                    } finally {
                                                        if (c) throw a
                                                    }
                                                }
                                            }
                                        }((0, n.default)(t).reverse());
                                    try {
                                        for (o.s(); !(e = o.n()).done;) ! function() {
                                            var t = e.value,
                                                o = t.nodeName,
                                                s = t.id,
                                                a = t.nthChild,
                                                u = t.classList,
                                                c = [],
                                                i = [];
                                            a && i.push("nth-child(".concat(a, ")")), o && (c.push(o), i.sort().map(function(e) {
                                                return c.push(":".concat(e))
                                            })), s && c.push("#".concat(s)), u && u.length && (u = u.map(function(e) {
                                                return e.toLowerCase()
                                            }).sort(), c = [].concat((0, n.default)(c), (0, n.default)(u.map(function(e) {
                                                return ".".concat(e)
                                            })))), c.length && r.push(c.join(" "))
                                        }()
                                    } catch (e) {
                                        o.e(e)
                                    } finally {
                                        o.f()
                                    }
                                    return r.join(" > ")
                                };
                                var n = o(r("./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

                                function s(e, t) {
                                    (null == t || t > e.length) && (t = e.length);
                                    for (var r = 0, o = Array(t); r < t; r++) o[r] = e[r];
                                    return o
                                }
                            },
                            "./packages/@logrocket/utils/src/selectorMatches.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e, t) {
                                    var r, o, i = e.slice(0).reverse(),
                                        l = function(e, t) {
                                            var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                            if (!r) {
                                                if (Array.isArray(e) || (r = function(e, t) {
                                                        if (e) {
                                                            if ("string" == typeof e) return u(e, void 0);
                                                            var r = Object.prototype.toString.call(e).slice(8, -1);
                                                            if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                                                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u(e, void 0)
                                                        }
                                                    }(e))) {
                                                    r && (e = r);
                                                    var o = 0,
                                                        n = function() {};
                                                    return {
                                                        s: n,
                                                        n: function() {
                                                            return o >= e.length ? {
                                                                done: !0
                                                            } : {
                                                                done: !1,
                                                                value: e[o++]
                                                            }
                                                        },
                                                        e: function(e) {
                                                            throw e
                                                        },
                                                        f: n
                                                    }
                                                }
                                                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                            }
                                            var s, a = !0,
                                                c = !1;
                                            return {
                                                s: function() {
                                                    r = r.call(e)
                                                },
                                                n: function() {
                                                    var e = r.next();
                                                    return a = e.done, e
                                                },
                                                e: function(e) {
                                                    c = !0, s = e
                                                },
                                                f: function() {
                                                    try {
                                                        a || null == r.return || r.return()
                                                    } finally {
                                                        if (c) throw s
                                                    }
                                                }
                                            }
                                        }(t);
                                    try {
                                        for (l.s(); !(o = l.n()).done;) {
                                            var d = function() {
                                                var e = o.value;
                                                return e.directDesc ? c.apply(void 0, [e].concat((0, n.default)(i.splice(0, 1)))) ? "continue" : {
                                                    v: !1
                                                } : (r = (0, a.default)(i, function(t) {
                                                    return c(e, t)
                                                }), -1 === r) ? {
                                                    v: !1
                                                } : void i.splice(0, r + 1)
                                            }();
                                            if ("continue" !== d && "object" === (0, s.default)(d)) return d.v
                                        }
                                    } catch (e) {
                                        l.e(e)
                                    } finally {
                                        l.f()
                                    }
                                    return !0
                                };
                                var n = o(r("./node_modules/@babel/runtime/helpers/toConsumableArray.js")),
                                    s = o(r("./node_modules/@babel/runtime/helpers/typeof.js")),
                                    a = o(r("./packages/@logrocket/utils/src/findIndex.js"));

                                function u(e, t) {
                                    (null == t || t > e.length) && (t = e.length);
                                    for (var r = 0, o = Array(t); r < t; r++) o[r] = e[r];
                                    return o
                                }

                                function c(e, t) {
                                    if (!(e && t) || e.id && e.id !== t.id || e.nodeName && e.nodeName !== t.nodeName || e.classList && (!t.classList || e.classList.map(function(e) {
                                            return e.toLowerCase()
                                        }).some(function(e) {
                                            return -1 === t.classList.map(function(e) {
                                                return e.toLowerCase()
                                            }).indexOf(e)
                                        }))) return !1;
                                    if (e.nthChild) {
                                        var r = parseInt(e.nthChild, 10);
                                        return isNaN(r) ? Math.abs(t.nthChild % 2) === ("odd" === e.nthChild ? 1 : 0) : r === t.nthChild
                                    }
                                    return !0
                                }
                            },
                            "./packages/@logrocket/utils/src/sendTelemetryData.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.sendTelemetry = function(e, t) {
                                    if ("undefined" != typeof window && window._lrdebug) return void(0, s.default)(e);
                                    t && t.extra && t.extra.appID && "function" == typeof t.extra.appID.indexOf && 0 === t.extra.appID.indexOf("au2drp/") && Math.random() >= .25 || i(c({
                                        message: e
                                    }, t))
                                }, t.default = function(e, t) {
                                    try {
                                        var r, o, n = e.message;
                                        try {
                                            r = JSON.stringify(t).slice(0, 1e3)
                                        } catch (e) {
                                            try {
                                                r = "Could not stringify payload: ".concat(Object.prototype.toString.call(t))
                                            } catch (e) {}
                                        }
                                        try {
                                            o = a.default.computeStackTrace(e).stack.map(function(e) {
                                                return {
                                                    filename: e.url,
                                                    lineno: e.line,
                                                    colno: e.column,
                                                    function: e.func || "?"
                                                }
                                            })
                                        } catch (e) {}
                                        i({
                                            message: n,
                                            extra: {
                                                stringPayload: r
                                            },
                                            exception: {
                                                values: [{
                                                    type: e.type,
                                                    value: n,
                                                    stacktrace: {
                                                        frames: o
                                                    }
                                                }]
                                            }
                                        })
                                    } catch (e) {
                                        (0, s.default)("Failed to send", e)
                                    }
                                };
                                var n = o(r("./node_modules/@babel/runtime/helpers/defineProperty.js")),
                                    s = o(r("./packages/@logrocket/utils/src/logError.js")),
                                    a = o(r("./packages/@logrocket/utils/src/TraceKit.js"));

                                function u(e, t) {
                                    var r = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var o = Object.getOwnPropertySymbols(e);
                                        t && (o = o.filter(function(t) {
                                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                                        })), r.push.apply(r, o)
                                    }
                                    return r
                                }

                                function c(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? u(Object(r), !0).forEach(function(t) {
                                            (0, n.default)(e, t, r[t])
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach(function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                        })
                                    }
                                    return e
                                }

                                function i(e) {
                                    var t = window._lrXMLHttpRequest || XMLHttpRequest;
                                    try {
                                        var r = new t,
                                            o = e.message;
                                        r.open("POST", "https://e.logrocket.com/api/3/store/?sentry_version=7&sentry_client=http%2F3.8.0&sentry_key=b64162b4187a4c5caae8a68a7e291793"), r.send(JSON.stringify(c({
                                            message: o,
                                            logger: "javascript",
                                            platform: "javascript",
                                            request: {
                                                headers: {
                                                    "User-Agent": "undefined" != typeof navigator && navigator.userAgent
                                                },
                                                url: "undefined" != typeof location && location.href
                                            },
                                            release: "26d51ca97d2fb189a318cbb9cfdf64c796cae88a",
                                            environment: "test"
                                        }, e)))
                                    } catch (e) {
                                        (0, s.default)("Failed to send", e)
                                    }
                                }
                            },
                            "./packages/@logrocket/utils/src/setFromArray.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e) {
                                    var t = new Set;
                                    return e.forEach(function(e) {
                                        return t.add(e)
                                    }), t
                                }
                            },
                            "./packages/@logrocket/utils/src/setToArray.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e) {
                                    var t = [];
                                    return e.forEach(function(e) {
                                        return t.push(e)
                                    }), t
                                }
                            },
                            "./packages/@logrocket/utils/src/shallowArsonify.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e) {
                                    var t = ({}).toString.call(e);
                                    switch (t) {
                                        case "[object Undefined]":
                                            return {
                                                undefined: {}
                                            };
                                        case "[object Null]":
                                            return {
                                                null: {}
                                            };
                                        case "[object Boolean]":
                                            return {
                                                boolean: {
                                                    bool: e
                                                }
                                            };
                                        case "[object Number]":
                                            return {
                                                number: {
                                                    double: e
                                                }
                                            };
                                        case "[object String]":
                                            return {
                                                string: {
                                                    string: e
                                                }
                                            };
                                        case "[object Object]":
                                            return {
                                                object: {
                                                    map: e
                                                }
                                            };
                                        case "[object Array]":
                                            return {
                                                array: {
                                                    map: e
                                                }
                                            };
                                        case "[object Date]":
                                            return {
                                                date: {
                                                    double: e.getTime()
                                                }
                                            };
                                        case "[object Error]":
                                            return {
                                                string: {
                                                    string: "".concat(e.name, ": ").concat(e.message)
                                                }
                                            };
                                        default:
                                            return {
                                                unsupported: {
                                                    type: t
                                                }
                                            }
                                    }
                                }
                            },
                            "./packages/@logrocket/utils/src/shallowDearsonify.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e) {
                                    switch (e.type || Object.keys(e)[0]) {
                                        case "undefined":
                                            return;
                                        case "null":
                                            return null;
                                        case "boolean":
                                            return e.boolean.bool;
                                        case "number":
                                            return e.number.double;
                                        case "string":
                                            return e.string.string;
                                        case "object":
                                            return e.object.map;
                                        case "array":
                                            return Object.keys(e.array.map).reduce(function(t, r) {
                                                return t[r] = e.array.map[r], t
                                            }, []);
                                        case "date":
                                            return new Date(e.date.double);
                                        case "unsupported":
                                            return e.unsupported.type;
                                        default:
                                            throw TypeError("Unexpected value in shallowDearsonify: ".concat(e))
                                    }
                                }
                            },
                            "./packages/@logrocket/utils/src/startsWith.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function(e, t) {
                                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                                    return e && t && e.substring(r, r + t.length) === t
                                }
                            },
                            "./packages/@logrocket/utils/src/types.ts": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                })
                            },
                            "./packages/@logrocket/utils/src/userTraitStrings.ts": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.parseUserTraitString = t.encodeUserTraitString = void 0, t.encodeUserTraitString = function() {
                                    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                    return t.map(function(e) {
                                        return e.replace(RegExp(":", "g"), "\x1a")
                                    }).join(":")
                                }, t.parseUserTraitString = function(e) {
                                    return (e || ":").split(":").map(function(e) {
                                        return e.replace(RegExp("\x1a", "g"), ":")
                                    })
                                }
                            },
                            "./packages/@logrocket/utils/src/uuid.js": function(e, t) {
                                "use strict";
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function e(t) {
                                    return t ? (t ^ 16 * Math.random() >> t / 4).toString(16) : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, e)
                                }
                            },
                            "./packages/logrocket/src/LogRocket.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = t.MAX_QUEUE_SIZE = void 0;
                                var n = o(r("./node_modules/@babel/runtime/helpers/classCallCheck.js")),
                                    s = o(r("./node_modules/@babel/runtime/helpers/createClass.js")),
                                    a = o(r("./node_modules/@babel/runtime/helpers/defineProperty.js")),
                                    u = o(r("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),
                                    c = o(r("./packages/@logrocket/network/src/index.js")),
                                    i = r("./packages/@logrocket/exceptions/src/index.js"),
                                    l = o(r("./packages/@logrocket/console/src/index.js")),
                                    d = r("./packages/@logrocket/redux/src/index.js");

                                function f(e, t) {
                                    var r = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var o = Object.getOwnPropertySymbols(e);
                                        t && (o = o.filter(function(t) {
                                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                                        })), r.push.apply(r, o)
                                    }
                                    return r
                                }

                                function p(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? f(Object(r), !0).forEach(function(t) {
                                            (0, a.default)(e, t, r[t])
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach(function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                        })
                                    }
                                    return e
                                }
                                t.MAX_QUEUE_SIZE = 1e3;
                                var g = function() {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            t = e.ingestServer,
                                            r = (0, u.default)(e, ["ingestServer"]);
                                        return t ? p({
                                            serverURL: "".concat(t, "/i"),
                                            statsURL: "".concat(t, "/s")
                                        }, r) : r
                                    },
                                    h = function() {
                                        function e() {
                                            var t = this;
                                            (0, n.default)(this, e), this._buffer = [], ["log", "info", "warn", "error", "debug"].forEach(function(e) {
                                                t[e] = function() {
                                                    for (var r = arguments.length, o = Array(r), n = 0; n < r; n++) o[n] = arguments[n];
                                                    t.addEvent("lr.core.LogEvent", function() {
                                                        var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                                        return "error" === e && r.shouldAggregateConsoleErrors && i.Capture.captureMessage(t, o[0], o, {}, !0), {
                                                            logLevel: e.toUpperCase(),
                                                            args: o
                                                        }
                                                    }, {
                                                        shouldCaptureStackTrace: !0
                                                    })
                                                }
                                            }), this._isInitialized = !1, this._installed = [], window._lr_surl_cb = this.getSessionURL.bind(this)
                                        }
                                        return (0, s.default)(e, [{
                                            key: "addEvent",
                                            value: function(e, t) {
                                                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                                    o = Date.now();
                                                this._run(function(n) {
                                                    n.addEvent(e, t, p(p({}, r), {}, {
                                                        timeOverride: o
                                                    }))
                                                })
                                            }
                                        }, {
                                            key: "onLogger",
                                            value: function(e) {
                                                for (this._logger = e; this._buffer.length > 0;) this._buffer.shift()(this._logger)
                                            }
                                        }, {
                                            key: "_run",
                                            value: function(e) {
                                                if (!this._isDisabled) {
                                                    if (this._logger) e(this._logger);
                                                    else {
                                                        if (this._buffer.length >= 1e3) {
                                                            this._isDisabled = !0, console.warn("LogRocket: script did not load. Check that you have a valid network connection."), this.uninstall();
                                                            return
                                                        }
                                                        this._buffer.push(e.bind(this))
                                                    }
                                                }
                                            }
                                        }, {
                                            key: "init",
                                            value: function(e) {
                                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                                if (!this._isInitialized) {
                                                    var r = t.shouldAugmentNPS,
                                                        o = t.shouldParseXHRBlob,
                                                        n = t.shouldDetectExceptions;
                                                    (void 0 === n || n) && this._installed.push((0, i.registerExceptions)(this)), this._installed.push((0, c.default)(this, {
                                                        shouldAugmentNPS: !!(void 0 === r || r),
                                                        shouldParseXHRBlob: !!(void 0 !== o && o)
                                                    })), this._installed.push((0, l.default)(this)), this._isInitialized = !0, this._run(function(r) {
                                                        r.init(e, g(t))
                                                    })
                                                }
                                            }
                                        }, {
                                            key: "start",
                                            value: function() {
                                                this._run(function(e) {
                                                    e.start()
                                                })
                                            }
                                        }, {
                                            key: "uninstall",
                                            value: function() {
                                                this._installed.forEach(function(e) {
                                                    return e()
                                                }), this._buffer = [], this._run(function(e) {
                                                    e.uninstall()
                                                })
                                            }
                                        }, {
                                            key: "identify",
                                            value: function(e, t) {
                                                this._run(function(r) {
                                                    r.identify(e, t)
                                                })
                                            }
                                        }, {
                                            key: "startNewSession",
                                            value: function() {
                                                this._run(function(e) {
                                                    e.startNewSession()
                                                })
                                            }
                                        }, {
                                            key: "track",
                                            value: function(e, t) {
                                                this._run(function(r) {
                                                    r.track(e, t)
                                                })
                                            }
                                        }, {
                                            key: "getSessionURL",
                                            value: function(e) {
                                                if ("function" != typeof e) throw Error("LogRocket: must pass callback to getSessionURL()");
                                                this._run(function(t) {
                                                    t.getSessionURL ? t.getSessionURL(e) : e(t.recordingURL)
                                                })
                                            }
                                        }, {
                                            key: "getVersion",
                                            value: function(e) {
                                                this._run(function(t) {
                                                    e(t.version)
                                                })
                                            }
                                        }, {
                                            key: "captureMessage",
                                            value: function(e) {
                                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                                i.Capture.captureMessage(this, e, [e], t)
                                            }
                                        }, {
                                            key: "captureException",
                                            value: function(e) {
                                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                                i.Capture.captureException(this, e, t)
                                            }
                                        }, {
                                            key: "version",
                                            get: function() {
                                                return this._logger && this._logger.version
                                            }
                                        }, {
                                            key: "sessionURL",
                                            get: function() {
                                                return this._logger && this._logger.recordingURL
                                            }
                                        }, {
                                            key: "recordingURL",
                                            get: function() {
                                                return this._logger && this._logger.recordingURL
                                            }
                                        }, {
                                            key: "recordingID",
                                            get: function() {
                                                return this._logger && this._logger.recordingID
                                            }
                                        }, {
                                            key: "threadID",
                                            get: function() {
                                                return this._logger && this._logger.threadID
                                            }
                                        }, {
                                            key: "tabID",
                                            get: function() {
                                                return this._logger && this._logger.tabID
                                            }
                                        }, {
                                            key: "reduxEnhancer",
                                            value: function() {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                                return (0, d.createEnhancer)(this, e)
                                            }
                                        }, {
                                            key: "reduxMiddleware",
                                            value: function() {
                                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                                return (0, d.createMiddleware)(this, e)
                                            }
                                        }, {
                                            key: "isDisabled",
                                            get: function() {
                                                return !!(this._isDisabled || this._logger && this._logger._isDisabled)
                                            }
                                        }]), e
                                    }();
                                t.default = h
                            },
                            "./packages/logrocket/src/makeLogRocket.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function() {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
                                    if ("undefined" != typeof navigator && "ReactNative" === navigator.product) throw Error("LogRocket does not yet support React Native.");
                                    if ("undefined" != typeof window) {
                                        if (window._disableLogRocket) return s();
                                        if (window.MutationObserver && window.WeakMap) {
                                            window._lrMutationObserver = window.MutationObserver;
                                            var t = new n.default;
                                            return e(t), t
                                        }
                                    }
                                    return s()
                                };
                                var n = o(r("./packages/logrocket/src/LogRocket.js")),
                                    s = function() {
                                        return {
                                            init: function() {},
                                            uninstall: function() {},
                                            log: function() {},
                                            info: function() {},
                                            warn: function() {},
                                            error: function() {},
                                            debug: function() {},
                                            addEvent: function() {},
                                            identify: function() {},
                                            start: function() {},
                                            get threadID() {
                                                return null
                                            },
                                            get recordingID() {
                                                return null
                                            },
                                            get recordingURL() {
                                                return null
                                            },
                                            reduxEnhancer: function() {
                                                return function(e) {
                                                    return function() {
                                                        return e.apply(void 0, arguments)
                                                    }
                                                }
                                            },
                                            reduxMiddleware: function() {
                                                return function() {
                                                    return function(e) {
                                                        return function(t) {
                                                            return e(t)
                                                        }
                                                    }
                                                }
                                            },
                                            track: function() {},
                                            getSessionURL: function() {},
                                            getVersion: function() {},
                                            startNewSession: function() {},
                                            onLogger: function() {},
                                            setClock: function() {},
                                            captureMessage: function() {},
                                            captureException: function() {}
                                        }
                                    }
                            },
                            "./packages/logrocket/src/setup.js": function(e, t, r) {
                                "use strict";
                                var o = r("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.default = function() {
                                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        r = t.enterpriseServer,
                                        o = t.sdkVersion,
                                        u = void 0 === o ? "7.0.0" : o,
                                        c = (0, n.default)(t, ["enterpriseServer", "sdkVersion"]),
                                        i = "https://cdn.logrocket.io";
                                    if ("script" === u) try {
                                        var l = document.currentScript.src.match(/^(https?:\/\/([^\\]+))\/.+$/),
                                            d = l && l[2];
                                        d && a[d] && (i = l && l[1], e = a[d])
                                    } catch (e) {} else i = "https://cdn.intake-lr.com", e = "https://r.intake-lr.com";
                                    var f = c.sdkServer || r,
                                        p = c.ingestServer || r || e,
                                        g = (0, s.default)(function() {
                                            var e = document.createElement("script");
                                            p && (void 0 === window.__SDKCONFIG__ && (window.__SDKCONFIG__ = {}), window.__SDKCONFIG__.serverURL = "".concat(p, "/i"), window.__SDKCONFIG__.statsURL = "".concat(p, "/s")), f ? e.src = "".concat(f, "/logger.min.js") : window.__SDKCONFIG__ && window.__SDKCONFIG__.loggerURL ? e.src = window.__SDKCONFIG__.loggerURL : window._lrAsyncScript ? e.src = window._lrAsyncScript : e.src = "".concat(i, "/logger-1.min.js"), e.async = !0, document.head.appendChild(e), e.onload = function() {
                                                "function" == typeof window._LRLogger ? g.onLogger(new window._LRLogger({
                                                    sdkVersion: u
                                                })) : (console.warn("LogRocket: script execution has been blocked by a product or service."), g.uninstall())
                                            }, e.onerror = function() {
                                                console.warn("LogRocket: script could not load. Check that you have a valid network connection."), g.uninstall()
                                            }
                                        });
                                    return g
                                };
                                var n = o(r("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),
                                    s = o(r("./packages/logrocket/src/makeLogRocket.js")),
                                    a = {
                                        "cdn.logrocket.io": "https://r.logrocket.io",
                                        "cdn.lr-ingest.io": "https://r.lr-ingest.io",
                                        "cdn.lr-in.com": "https://r.lr-in.com",
                                        "cdn.lr-in-prod.com": "https://r.lr-in-prod.com",
                                        "cdn.lr-ingest.com": "https://r.lr-ingest.com",
                                        "cdn.ingest-lr.com": "https://r.ingest-lr.com",
                                        "cdn.lr-intake.com": "https://r.lr-intake.com",
                                        "cdn.intake-lr.com": "https://r.intake-lr.com",
                                        "cdn-staging.logrocket.io": "https://staging-i.logrocket.io",
                                        "cdn-staging.lr-ingest.io": "https://staging-i.lr-ingest.io",
                                        "cdn-staging.lr-in.com": "https://staging-i.lr-in.com",
                                        "cdn-staging.lr-in-prod.com": "https://staging-i.lr-in-prod.com",
                                        "cdn-staging.lr-ingest.com": "https://staging-i.lr-ingest.com",
                                        "cdn-staging.ingest-lr.com": "https://staging-i.ingest-lr.com",
                                        "cdn-staging.lr-intake.com": "https://staging-i.lr-intake.com",
                                        "cdn-staging.intake-lr.com": "https://staging-i.intake-lr.com"
                                    }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_DataView.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_getNative.js")(r("./packages/@logrocket/utils/node_modules/lodash/_root.js"), "DataView");
                                e.exports = o
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_Hash.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_hashClear.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/_hashDelete.js"),
                                    s = r("./packages/@logrocket/utils/node_modules/lodash/_hashGet.js"),
                                    a = r("./packages/@logrocket/utils/node_modules/lodash/_hashHas.js"),
                                    u = r("./packages/@logrocket/utils/node_modules/lodash/_hashSet.js");

                                function c(e) {
                                    var t = -1,
                                        r = null == e ? 0 : e.length;
                                    for (this.clear(); ++t < r;) {
                                        var o = e[t];
                                        this.set(o[0], o[1])
                                    }
                                }
                                c.prototype.clear = o, c.prototype.delete = n, c.prototype.get = s, c.prototype.has = a, c.prototype.set = u, e.exports = c
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_ListCache.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_listCacheClear.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/_listCacheDelete.js"),
                                    s = r("./packages/@logrocket/utils/node_modules/lodash/_listCacheGet.js"),
                                    a = r("./packages/@logrocket/utils/node_modules/lodash/_listCacheHas.js"),
                                    u = r("./packages/@logrocket/utils/node_modules/lodash/_listCacheSet.js");

                                function c(e) {
                                    var t = -1,
                                        r = null == e ? 0 : e.length;
                                    for (this.clear(); ++t < r;) {
                                        var o = e[t];
                                        this.set(o[0], o[1])
                                    }
                                }
                                c.prototype.clear = o, c.prototype.delete = n, c.prototype.get = s, c.prototype.has = a, c.prototype.set = u, e.exports = c
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_Map.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_getNative.js")(r("./packages/@logrocket/utils/node_modules/lodash/_root.js"), "Map");
                                e.exports = o
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_MapCache.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_mapCacheClear.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/_mapCacheDelete.js"),
                                    s = r("./packages/@logrocket/utils/node_modules/lodash/_mapCacheGet.js"),
                                    a = r("./packages/@logrocket/utils/node_modules/lodash/_mapCacheHas.js"),
                                    u = r("./packages/@logrocket/utils/node_modules/lodash/_mapCacheSet.js");

                                function c(e) {
                                    var t = -1,
                                        r = null == e ? 0 : e.length;
                                    for (this.clear(); ++t < r;) {
                                        var o = e[t];
                                        this.set(o[0], o[1])
                                    }
                                }
                                c.prototype.clear = o, c.prototype.delete = n, c.prototype.get = s, c.prototype.has = a, c.prototype.set = u, e.exports = c
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_Promise.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_getNative.js")(r("./packages/@logrocket/utils/node_modules/lodash/_root.js"), "Promise");
                                e.exports = o
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_Set.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_getNative.js")(r("./packages/@logrocket/utils/node_modules/lodash/_root.js"), "Set");
                                e.exports = o
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_SetCache.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_MapCache.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/_setCacheAdd.js"),
                                    s = r("./packages/@logrocket/utils/node_modules/lodash/_setCacheHas.js");

                                function a(e) {
                                    var t = -1,
                                        r = null == e ? 0 : e.length;
                                    for (this.__data__ = new o; ++t < r;) this.add(e[t])
                                }
                                a.prototype.add = a.prototype.push = n, a.prototype.has = s, e.exports = a
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_Stack.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_ListCache.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/_stackClear.js"),
                                    s = r("./packages/@logrocket/utils/node_modules/lodash/_stackDelete.js"),
                                    a = r("./packages/@logrocket/utils/node_modules/lodash/_stackGet.js"),
                                    u = r("./packages/@logrocket/utils/node_modules/lodash/_stackHas.js"),
                                    c = r("./packages/@logrocket/utils/node_modules/lodash/_stackSet.js");

                                function i(e) {
                                    var t = this.__data__ = new o(e);
                                    this.size = t.size
                                }
                                i.prototype.clear = n, i.prototype.delete = s, i.prototype.get = a, i.prototype.has = u, i.prototype.set = c, e.exports = i
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_Symbol.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_root.js").Symbol;
                                e.exports = o
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_Uint8Array.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_root.js").Uint8Array;
                                e.exports = o
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_WeakMap.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_getNative.js")(r("./packages/@logrocket/utils/node_modules/lodash/_root.js"), "WeakMap");
                                e.exports = o
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_arrayFilter.js": function(e) {
                                e.exports = function(e, t) {
                                    for (var r = -1, o = null == e ? 0 : e.length, n = 0, s = []; ++r < o;) {
                                        var a = e[r];
                                        t(a, r, e) && (s[n++] = a)
                                    }
                                    return s
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_arrayLikeKeys.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_baseTimes.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/isArguments.js"),
                                    s = r("./packages/@logrocket/utils/node_modules/lodash/isArray.js"),
                                    a = r("./packages/@logrocket/utils/node_modules/lodash/isBuffer.js"),
                                    u = r("./packages/@logrocket/utils/node_modules/lodash/_isIndex.js"),
                                    c = r("./packages/@logrocket/utils/node_modules/lodash/isTypedArray.js"),
                                    i = Object.prototype.hasOwnProperty;
                                e.exports = function(e, t) {
                                    var r = s(e),
                                        l = !r && n(e),
                                        d = !r && !l && a(e),
                                        f = !r && !l && !d && c(e),
                                        p = r || l || d || f,
                                        g = p ? o(e.length, String) : [],
                                        h = g.length;
                                    for (var _ in e)(t || i.call(e, _)) && !(p && ("length" == _ || d && ("offset" == _ || "parent" == _) || f && ("buffer" == _ || "byteLength" == _ || "byteOffset" == _) || u(_, h))) && g.push(_);
                                    return g
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_arrayMap.js": function(e) {
                                e.exports = function(e, t) {
                                    for (var r = -1, o = null == e ? 0 : e.length, n = Array(o); ++r < o;) n[r] = t(e[r], r, e);
                                    return n
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_arrayPush.js": function(e) {
                                e.exports = function(e, t) {
                                    for (var r = -1, o = t.length, n = e.length; ++r < o;) e[n + r] = t[r];
                                    return e
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_arraySome.js": function(e) {
                                e.exports = function(e, t) {
                                    for (var r = -1, o = null == e ? 0 : e.length; ++r < o;)
                                        if (t(e[r], r, e)) return !0;
                                    return !1
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_assocIndexOf.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/eq.js");
                                e.exports = function(e, t) {
                                    for (var r = e.length; r--;)
                                        if (o(e[r][0], t)) return r;
                                    return -1
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_baseGet.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_castPath.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/_toKey.js");
                                e.exports = function(e, t) {
                                    t = o(t, e);
                                    for (var r = 0, s = t.length; null != e && r < s;) e = e[n(t[r++])];
                                    return r && r == s ? e : void 0
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_baseGetAllKeys.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_arrayPush.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/isArray.js");
                                e.exports = function(e, t, r) {
                                    var s = t(e);
                                    return n(e) ? s : o(s, r(e))
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_baseGetTag.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_Symbol.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/_getRawTag.js"),
                                    s = r("./packages/@logrocket/utils/node_modules/lodash/_objectToString.js"),
                                    a = o ? o.toStringTag : void 0;
                                e.exports = function(e) {
                                    return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? n(e) : s(e)
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_baseHasIn.js": function(e) {
                                e.exports = function(e, t) {
                                    return null != e && t in Object(e)
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_baseIsArguments.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_baseGetTag.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/isObjectLike.js");
                                e.exports = function(e) {
                                    return n(e) && "[object Arguments]" == o(e)
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_baseIsEqual.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_baseIsEqualDeep.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/isObjectLike.js");
                                e.exports = function e(t, r, s, a, u) {
                                    return t === r || (null != t && null != r && (n(t) || n(r)) ? o(t, r, s, a, e, u) : t != t && r != r)
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_baseIsEqualDeep.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_Stack.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/_equalArrays.js"),
                                    s = r("./packages/@logrocket/utils/node_modules/lodash/_equalByTag.js"),
                                    a = r("./packages/@logrocket/utils/node_modules/lodash/_equalObjects.js"),
                                    u = r("./packages/@logrocket/utils/node_modules/lodash/_getTag.js"),
                                    c = r("./packages/@logrocket/utils/node_modules/lodash/isArray.js"),
                                    i = r("./packages/@logrocket/utils/node_modules/lodash/isBuffer.js"),
                                    l = r("./packages/@logrocket/utils/node_modules/lodash/isTypedArray.js"),
                                    d = "[object Arguments]",
                                    f = "[object Array]",
                                    p = "[object Object]",
                                    g = Object.prototype.hasOwnProperty;
                                e.exports = function(e, t, r, h, _, m) {
                                    var k = c(e),
                                        b = c(t),
                                        y = k ? f : u(e),
                                        v = b ? f : u(t);
                                    y = y == d ? p : y, v = v == d ? p : v;
                                    var j = y == p,
                                        O = v == p,
                                        E = y == v;
                                    if (E && i(e)) {
                                        if (!i(t)) return !1;
                                        k = !0, j = !1
                                    }
                                    if (E && !j) return m || (m = new o), k || l(e) ? n(e, t, r, h, _, m) : s(e, t, y, r, h, _, m);
                                    if (!(1 & r)) {
                                        var S = j && g.call(e, "__wrapped__"),
                                            P = O && g.call(t, "__wrapped__");
                                        if (S || P) {
                                            var w = S ? e.value() : e,
                                                R = P ? t.value() : t;
                                            return m || (m = new o), _(w, R, r, h, m)
                                        }
                                    }
                                    return !!E && (m || (m = new o), a(e, t, r, h, _, m))
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_baseIsMatch.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_Stack.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/_baseIsEqual.js");
                                e.exports = function(e, t, r, s) {
                                    var a = r.length,
                                        u = a,
                                        c = !s;
                                    if (null == e) return !u;
                                    for (e = Object(e); a--;) {
                                        var i = r[a];
                                        if (c && i[2] ? i[1] !== e[i[0]] : !(i[0] in e)) return !1
                                    }
                                    for (; ++a < u;) {
                                        var l = (i = r[a])[0],
                                            d = e[l],
                                            f = i[1];
                                        if (c && i[2]) {
                                            if (void 0 === d && !(l in e)) return !1
                                        } else {
                                            var p = new o;
                                            if (s) var g = s(d, f, l, e, t, p);
                                            if (!(void 0 === g ? n(f, d, 3, s, p) : g)) return !1
                                        }
                                    }
                                    return !0
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_baseIsNative.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/isFunction.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/_isMasked.js"),
                                    s = r("./packages/@logrocket/utils/node_modules/lodash/isObject.js"),
                                    a = r("./packages/@logrocket/utils/node_modules/lodash/_toSource.js"),
                                    u = /^\[object .+?Constructor\]$/,
                                    c = Object.prototype,
                                    i = Function.prototype.toString,
                                    l = c.hasOwnProperty,
                                    d = RegExp("^" + i.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
                                e.exports = function(e) {
                                    return !(!s(e) || n(e)) && (o(e) ? d : u).test(a(e))
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_baseIsTypedArray.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_baseGetTag.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/isLength.js"),
                                    s = r("./packages/@logrocket/utils/node_modules/lodash/isObjectLike.js"),
                                    a = {};
                                a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, e.exports = function(e) {
                                    return s(e) && n(e.length) && !!a[o(e)]
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_baseIteratee.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_baseMatches.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/_baseMatchesProperty.js"),
                                    s = r("./packages/@logrocket/utils/node_modules/lodash/identity.js"),
                                    a = r("./packages/@logrocket/utils/node_modules/lodash/isArray.js"),
                                    u = r("./packages/@logrocket/utils/node_modules/lodash/property.js");
                                e.exports = function(e) {
                                    return "function" == typeof e ? e : null == e ? s : "object" == typeof e ? a(e) ? n(e[0], e[1]) : o(e) : u(e)
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_baseKeys.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_isPrototype.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/_nativeKeys.js"),
                                    s = Object.prototype.hasOwnProperty;
                                e.exports = function(e) {
                                    if (!o(e)) return n(e);
                                    var t = [];
                                    for (var r in Object(e)) s.call(e, r) && "constructor" != r && t.push(r);
                                    return t
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_baseMatches.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_baseIsMatch.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/_getMatchData.js"),
                                    s = r("./packages/@logrocket/utils/node_modules/lodash/_matchesStrictComparable.js");
                                e.exports = function(e) {
                                    var t = n(e);
                                    return 1 == t.length && t[0][2] ? s(t[0][0], t[0][1]) : function(r) {
                                        return r === e || o(r, e, t)
                                    }
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_baseMatchesProperty.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_baseIsEqual.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/get.js"),
                                    s = r("./packages/@logrocket/utils/node_modules/lodash/hasIn.js"),
                                    a = r("./packages/@logrocket/utils/node_modules/lodash/_isKey.js"),
                                    u = r("./packages/@logrocket/utils/node_modules/lodash/_isStrictComparable.js"),
                                    c = r("./packages/@logrocket/utils/node_modules/lodash/_matchesStrictComparable.js"),
                                    i = r("./packages/@logrocket/utils/node_modules/lodash/_toKey.js");
                                e.exports = function(e, t) {
                                    return a(e) && u(t) ? c(i(e), t) : function(r) {
                                        var a = n(r, e);
                                        return void 0 === a && a === t ? s(r, e) : o(t, a, 3)
                                    }
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_baseProperty.js": function(e) {
                                e.exports = function(e) {
                                    return function(t) {
                                        return null == t ? void 0 : t[e]
                                    }
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_basePropertyDeep.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_baseGet.js");
                                e.exports = function(e) {
                                    return function(t) {
                                        return o(t, e)
                                    }
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_baseSortedIndexBy.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/isSymbol.js"),
                                    n = Math.floor,
                                    s = Math.min;
                                e.exports = function(e, t, r, a) {
                                    var u = 0,
                                        c = null == e ? 0 : e.length;
                                    if (0 === c) return 0;
                                    for (var i = (t = r(t)) != t, l = null === t, d = o(t), f = void 0 === t; u < c;) {
                                        var p = n((u + c) / 2),
                                            g = r(e[p]),
                                            h = void 0 !== g,
                                            _ = null === g,
                                            m = g == g,
                                            k = o(g);
                                        if (i) var b = a || m;
                                        else b = f ? m && (a || h) : l ? m && h && (a || !_) : d ? m && h && !_ && (a || !k) : !_ && !k && (a ? g <= t : g < t);
                                        b ? u = p + 1 : c = p
                                    }
                                    return s(c, 4294967294)
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_baseTimes.js": function(e) {
                                e.exports = function(e, t) {
                                    for (var r = -1, o = Array(e); ++r < e;) o[r] = t(r);
                                    return o
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_baseToString.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_Symbol.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/_arrayMap.js"),
                                    s = r("./packages/@logrocket/utils/node_modules/lodash/isArray.js"),
                                    a = r("./packages/@logrocket/utils/node_modules/lodash/isSymbol.js"),
                                    u = 1 / 0,
                                    c = o ? o.prototype : void 0,
                                    i = c ? c.toString : void 0;
                                e.exports = function e(t) {
                                    if ("string" == typeof t) return t;
                                    if (s(t)) return n(t, e) + "";
                                    if (a(t)) return i ? i.call(t) : "";
                                    var r = t + "";
                                    return "0" == r && 1 / t == -u ? "-0" : r
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_baseUnary.js": function(e) {
                                e.exports = function(e) {
                                    return function(t) {
                                        return e(t)
                                    }
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_cacheHas.js": function(e) {
                                e.exports = function(e, t) {
                                    return e.has(t)
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_castPath.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/isArray.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/_isKey.js"),
                                    s = r("./packages/@logrocket/utils/node_modules/lodash/_stringToPath.js"),
                                    a = r("./packages/@logrocket/utils/node_modules/lodash/toString.js");
                                e.exports = function(e, t) {
                                    return o(e) ? e : n(e, t) ? [e] : s(a(e))
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_coreJsData.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_root.js")["__core-js_shared__"];
                                e.exports = o
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_equalArrays.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_SetCache.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/_arraySome.js"),
                                    s = r("./packages/@logrocket/utils/node_modules/lodash/_cacheHas.js");
                                e.exports = function(e, t, r, a, u, c) {
                                    var i = 1 & r,
                                        l = e.length,
                                        d = t.length;
                                    if (l != d && !(i && d > l)) return !1;
                                    var f = c.get(e),
                                        p = c.get(t);
                                    if (f && p) return f == t && p == e;
                                    var g = -1,
                                        h = !0,
                                        _ = 2 & r ? new o : void 0;
                                    for (c.set(e, t), c.set(t, e); ++g < l;) {
                                        var m = e[g],
                                            k = t[g];
                                        if (a) var b = i ? a(k, m, g, t, e, c) : a(m, k, g, e, t, c);
                                        if (void 0 !== b) {
                                            if (b) continue;
                                            h = !1;
                                            break
                                        }
                                        if (_) {
                                            if (!n(t, function(e, t) {
                                                    if (!s(_, t) && (m === e || u(m, e, r, a, c))) return _.push(t)
                                                })) {
                                                h = !1;
                                                break
                                            }
                                        } else if (!(m === k || u(m, k, r, a, c))) {
                                            h = !1;
                                            break
                                        }
                                    }
                                    return c.delete(e), c.delete(t), h
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_equalByTag.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_Symbol.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/_Uint8Array.js"),
                                    s = r("./packages/@logrocket/utils/node_modules/lodash/eq.js"),
                                    a = r("./packages/@logrocket/utils/node_modules/lodash/_equalArrays.js"),
                                    u = r("./packages/@logrocket/utils/node_modules/lodash/_mapToArray.js"),
                                    c = r("./packages/@logrocket/utils/node_modules/lodash/_setToArray.js"),
                                    i = o ? o.prototype : void 0,
                                    l = i ? i.valueOf : void 0;
                                e.exports = function(e, t, r, o, i, d, f) {
                                    switch (r) {
                                        case "[object DataView]":
                                            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                                            e = e.buffer, t = t.buffer;
                                        case "[object ArrayBuffer]":
                                            if (e.byteLength != t.byteLength || !d(new n(e), new n(t))) break;
                                            return !0;
                                        case "[object Boolean]":
                                        case "[object Date]":
                                        case "[object Number]":
                                            return s(+e, +t);
                                        case "[object Error]":
                                            return e.name == t.name && e.message == t.message;
                                        case "[object RegExp]":
                                        case "[object String]":
                                            return e == t + "";
                                        case "[object Map]":
                                            var p = u;
                                        case "[object Set]":
                                            var g = 1 & o;
                                            if (p || (p = c), e.size != t.size && !g) break;
                                            var h = f.get(e);
                                            if (h) return h == t;
                                            o |= 2, f.set(e, t);
                                            var _ = a(p(e), p(t), o, i, d, f);
                                            return f.delete(e), _;
                                        case "[object Symbol]":
                                            if (l) return l.call(e) == l.call(t)
                                    }
                                    return !1
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_equalObjects.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_getAllKeys.js"),
                                    n = Object.prototype.hasOwnProperty;
                                e.exports = function(e, t, r, s, a, u) {
                                    var c = 1 & r,
                                        i = o(e),
                                        l = i.length;
                                    if (l != o(t).length && !c) return !1;
                                    for (var d = l; d--;) {
                                        var f = i[d];
                                        if (!(c ? f in t : n.call(t, f))) return !1
                                    }
                                    var p = u.get(e),
                                        g = u.get(t);
                                    if (p && g) return p == t && g == e;
                                    var h = !0;
                                    u.set(e, t), u.set(t, e);
                                    for (var _ = c; ++d < l;) {
                                        var m = e[f = i[d]],
                                            k = t[f];
                                        if (s) var b = c ? s(k, m, f, t, e, u) : s(m, k, f, e, t, u);
                                        if (!(void 0 === b ? m === k || a(m, k, r, s, u) : b)) {
                                            h = !1;
                                            break
                                        }
                                        _ || (_ = "constructor" == f)
                                    }
                                    if (h && !_) {
                                        var y = e.constructor,
                                            v = t.constructor;
                                        y != v && "constructor" in e && "constructor" in t && !("function" == typeof y && y instanceof y && "function" == typeof v && v instanceof v) && (h = !1)
                                    }
                                    return u.delete(e), u.delete(t), h
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_freeGlobal.js": function(e, t, r) {
                                var o = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
                                e.exports = o
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_getAllKeys.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_baseGetAllKeys.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/_getSymbols.js"),
                                    s = r("./packages/@logrocket/utils/node_modules/lodash/keys.js");
                                e.exports = function(e) {
                                    return o(e, s, n)
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_getMapData.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_isKeyable.js");
                                e.exports = function(e, t) {
                                    var r = e.__data__;
                                    return o(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_getMatchData.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_isStrictComparable.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/keys.js");
                                e.exports = function(e) {
                                    for (var t = n(e), r = t.length; r--;) {
                                        var s = t[r],
                                            a = e[s];
                                        t[r] = [s, a, o(a)]
                                    }
                                    return t
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_getNative.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_baseIsNative.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/_getValue.js");
                                e.exports = function(e, t) {
                                    var r = n(e, t);
                                    return o(r) ? r : void 0
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_getRawTag.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_Symbol.js"),
                                    n = Object.prototype,
                                    s = n.hasOwnProperty,
                                    a = n.toString,
                                    u = o ? o.toStringTag : void 0;
                                e.exports = function(e) {
                                    var t = s.call(e, u),
                                        r = e[u];
                                    try {
                                        e[u] = void 0;
                                        var o = !0
                                    } catch (e) {}
                                    var n = a.call(e);
                                    return o && (t ? e[u] = r : delete e[u]), n
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_getSymbols.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_arrayFilter.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/stubArray.js"),
                                    s = Object.prototype.propertyIsEnumerable,
                                    a = Object.getOwnPropertySymbols,
                                    u = a ? function(e) {
                                        return null == e ? [] : o(a(e = Object(e)), function(t) {
                                            return s.call(e, t)
                                        })
                                    } : n;
                                e.exports = u
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_getTag.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_DataView.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/_Map.js"),
                                    s = r("./packages/@logrocket/utils/node_modules/lodash/_Promise.js"),
                                    a = r("./packages/@logrocket/utils/node_modules/lodash/_Set.js"),
                                    u = r("./packages/@logrocket/utils/node_modules/lodash/_WeakMap.js"),
                                    c = r("./packages/@logrocket/utils/node_modules/lodash/_baseGetTag.js"),
                                    i = r("./packages/@logrocket/utils/node_modules/lodash/_toSource.js"),
                                    l = "[object Map]",
                                    d = "[object Promise]",
                                    f = "[object Set]",
                                    p = "[object WeakMap]",
                                    g = "[object DataView]",
                                    h = i(o),
                                    _ = i(n),
                                    m = i(s),
                                    k = i(a),
                                    b = i(u),
                                    y = c;
                                (o && y(new o(new ArrayBuffer(1))) != g || n && y(new n) != l || s && y(s.resolve()) != d || a && y(new a) != f || u && y(new u) != p) && (y = function(e) {
                                    var t = c(e),
                                        r = "[object Object]" == t ? e.constructor : void 0,
                                        o = r ? i(r) : "";
                                    if (o) switch (o) {
                                        case h:
                                            return g;
                                        case _:
                                            return l;
                                        case m:
                                            return d;
                                        case k:
                                            return f;
                                        case b:
                                            return p
                                    }
                                    return t
                                }), e.exports = y
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_getValue.js": function(e) {
                                e.exports = function(e, t) {
                                    return null == e ? void 0 : e[t]
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_hasPath.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_castPath.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/isArguments.js"),
                                    s = r("./packages/@logrocket/utils/node_modules/lodash/isArray.js"),
                                    a = r("./packages/@logrocket/utils/node_modules/lodash/_isIndex.js"),
                                    u = r("./packages/@logrocket/utils/node_modules/lodash/isLength.js"),
                                    c = r("./packages/@logrocket/utils/node_modules/lodash/_toKey.js");
                                e.exports = function(e, t, r) {
                                    t = o(t, e);
                                    for (var i = -1, l = t.length, d = !1; ++i < l;) {
                                        var f = c(t[i]);
                                        if (!(d = null != e && r(e, f))) break;
                                        e = e[f]
                                    }
                                    return d || ++i != l ? d : !!(l = null == e ? 0 : e.length) && u(l) && a(f, l) && (s(e) || n(e))
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_hashClear.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_nativeCreate.js");
                                e.exports = function() {
                                    this.__data__ = o ? o(null) : {}, this.size = 0
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_hashDelete.js": function(e) {
                                e.exports = function(e) {
                                    var t = this.has(e) && delete this.__data__[e];
                                    return this.size -= t ? 1 : 0, t
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_hashGet.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_nativeCreate.js"),
                                    n = Object.prototype.hasOwnProperty;
                                e.exports = function(e) {
                                    var t = this.__data__;
                                    if (o) {
                                        var r = t[e];
                                        return "__lodash_hash_undefined__" === r ? void 0 : r
                                    }
                                    return n.call(t, e) ? t[e] : void 0
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_hashHas.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_nativeCreate.js"),
                                    n = Object.prototype.hasOwnProperty;
                                e.exports = function(e) {
                                    var t = this.__data__;
                                    return o ? void 0 !== t[e] : n.call(t, e)
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_hashSet.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_nativeCreate.js");
                                e.exports = function(e, t) {
                                    var r = this.__data__;
                                    return this.size += this.has(e) ? 0 : 1, r[e] = o && void 0 === t ? "__lodash_hash_undefined__" : t, this
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_isIndex.js": function(e) {
                                var t = /^(?:0|[1-9]\d*)$/;
                                e.exports = function(e, r) {
                                    var o = typeof e;
                                    return !!(r = null == r ? 9007199254740991 : r) && ("number" == o || "symbol" != o && t.test(e)) && e > -1 && e % 1 == 0 && e < r
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_isKey.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/isArray.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/isSymbol.js"),
                                    s = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                                    a = /^\w*$/;
                                e.exports = function(e, t) {
                                    if (o(e)) return !1;
                                    var r = typeof e;
                                    return !!("number" == r || "symbol" == r || "boolean" == r || null == e || n(e)) || a.test(e) || !s.test(e) || null != t && e in Object(t)
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_isKeyable.js": function(e) {
                                e.exports = function(e) {
                                    var t = typeof e;
                                    return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_isMasked.js": function(e, t, r) {
                                var o, n = r("./packages/@logrocket/utils/node_modules/lodash/_coreJsData.js"),
                                    s = (o = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "")) ? "Symbol(src)_1." + o : "";
                                e.exports = function(e) {
                                    return !!s && s in e
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_isPrototype.js": function(e) {
                                var t = Object.prototype;
                                e.exports = function(e) {
                                    var r = e && e.constructor;
                                    return e === ("function" == typeof r && r.prototype || t)
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_isStrictComparable.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/isObject.js");
                                e.exports = function(e) {
                                    return e == e && !o(e)
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_listCacheClear.js": function(e) {
                                e.exports = function() {
                                    this.__data__ = [], this.size = 0
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_listCacheDelete.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_assocIndexOf.js"),
                                    n = Array.prototype.splice;
                                e.exports = function(e) {
                                    var t = this.__data__,
                                        r = o(t, e);
                                    return !(r < 0) && (r == t.length - 1 ? t.pop() : n.call(t, r, 1), --this.size, !0)
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_listCacheGet.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_assocIndexOf.js");
                                e.exports = function(e) {
                                    var t = this.__data__,
                                        r = o(t, e);
                                    return r < 0 ? void 0 : t[r][1]
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_listCacheHas.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_assocIndexOf.js");
                                e.exports = function(e) {
                                    return o(this.__data__, e) > -1
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_listCacheSet.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_assocIndexOf.js");
                                e.exports = function(e, t) {
                                    var r = this.__data__,
                                        n = o(r, e);
                                    return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_mapCacheClear.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_Hash.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/_ListCache.js"),
                                    s = r("./packages/@logrocket/utils/node_modules/lodash/_Map.js");
                                e.exports = function() {
                                    this.size = 0, this.__data__ = {
                                        hash: new o,
                                        map: new(s || n),
                                        string: new o
                                    }
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_mapCacheDelete.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_getMapData.js");
                                e.exports = function(e) {
                                    var t = o(this, e).delete(e);
                                    return this.size -= t ? 1 : 0, t
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_mapCacheGet.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_getMapData.js");
                                e.exports = function(e) {
                                    return o(this, e).get(e)
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_mapCacheHas.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_getMapData.js");
                                e.exports = function(e) {
                                    return o(this, e).has(e)
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_mapCacheSet.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_getMapData.js");
                                e.exports = function(e, t) {
                                    var r = o(this, e),
                                        n = r.size;
                                    return r.set(e, t), this.size += r.size == n ? 0 : 1, this
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_mapToArray.js": function(e) {
                                e.exports = function(e) {
                                    var t = -1,
                                        r = Array(e.size);
                                    return e.forEach(function(e, o) {
                                        r[++t] = [o, e]
                                    }), r
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_matchesStrictComparable.js": function(e) {
                                e.exports = function(e, t) {
                                    return function(r) {
                                        return null != r && r[e] === t && (void 0 !== t || e in Object(r))
                                    }
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_memoizeCapped.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/memoize.js");
                                e.exports = function(e) {
                                    var t = o(e, function(e) {
                                            return 500 === r.size && r.clear(), e
                                        }),
                                        r = t.cache;
                                    return t
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_nativeCreate.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_getNative.js")(Object, "create");
                                e.exports = o
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_nativeKeys.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_overArg.js")(Object.keys, Object);
                                e.exports = o
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_nodeUtil.js": function(e, t, r) {
                                e = r.nmd(e);
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_freeGlobal.js"),
                                    n = t && !t.nodeType && t,
                                    s = n && e && !e.nodeType && e,
                                    a = s && s.exports === n && o.process,
                                    u = function() {
                                        try {
                                            var e = s && s.require && s.require("util").types;
                                            if (e) return e;
                                            return a && a.binding && a.binding("util")
                                        } catch (e) {}
                                    }();
                                e.exports = u
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_objectToString.js": function(e) {
                                var t = Object.prototype.toString;
                                e.exports = function(e) {
                                    return t.call(e)
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_overArg.js": function(e) {
                                e.exports = function(e, t) {
                                    return function(r) {
                                        return e(t(r))
                                    }
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_root.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_freeGlobal.js"),
                                    n = "object" == typeof self && self && self.Object === Object && self,
                                    s = o || n || Function("return this")();
                                e.exports = s
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_setCacheAdd.js": function(e) {
                                e.exports = function(e) {
                                    return this.__data__.set(e, "__lodash_hash_undefined__"), this
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_setCacheHas.js": function(e) {
                                e.exports = function(e) {
                                    return this.__data__.has(e)
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_setToArray.js": function(e) {
                                e.exports = function(e) {
                                    var t = -1,
                                        r = Array(e.size);
                                    return e.forEach(function(e) {
                                        r[++t] = e
                                    }), r
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_stackClear.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_ListCache.js");
                                e.exports = function() {
                                    this.__data__ = new o, this.size = 0
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_stackDelete.js": function(e) {
                                e.exports = function(e) {
                                    var t = this.__data__,
                                        r = t.delete(e);
                                    return this.size = t.size, r
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_stackGet.js": function(e) {
                                e.exports = function(e) {
                                    return this.__data__.get(e)
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_stackHas.js": function(e) {
                                e.exports = function(e) {
                                    return this.__data__.has(e)
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_stackSet.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_ListCache.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/_Map.js"),
                                    s = r("./packages/@logrocket/utils/node_modules/lodash/_MapCache.js");
                                e.exports = function(e, t) {
                                    var r = this.__data__;
                                    if (r instanceof o) {
                                        var a = r.__data__;
                                        if (!n || a.length < 199) return a.push([e, t]), this.size = ++r.size, this;
                                        r = this.__data__ = new s(a)
                                    }
                                    return r.set(e, t), this.size = r.size, this
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_stringToPath.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_memoizeCapped.js"),
                                    n = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                                    s = /\\(\\)?/g,
                                    a = o(function(e) {
                                        var t = [];
                                        return 46 === e.charCodeAt(0) && t.push(""), e.replace(n, function(e, r, o, n) {
                                            t.push(o ? n.replace(s, "$1") : r || e)
                                        }), t
                                    });
                                e.exports = a
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_toKey.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/isSymbol.js"),
                                    n = 1 / 0;
                                e.exports = function(e) {
                                    if ("string" == typeof e || o(e)) return e;
                                    var t = e + "";
                                    return "0" == t && 1 / e == -n ? "-0" : t
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/_toSource.js": function(e) {
                                var t = Function.prototype.toString;
                                e.exports = function(e) {
                                    if (null != e) {
                                        try {
                                            return t.call(e)
                                        } catch (e) {}
                                        try {
                                            return e + ""
                                        } catch (e) {}
                                    }
                                    return ""
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/eq.js": function(e) {
                                e.exports = function(e, t) {
                                    return e === t || e != e && t != t
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/get.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_baseGet.js");
                                e.exports = function(e, t, r) {
                                    var n = null == e ? void 0 : o(e, t);
                                    return void 0 === n ? r : n
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/hasIn.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_baseHasIn.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/_hasPath.js");
                                e.exports = function(e, t) {
                                    return null != e && n(e, t, o)
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/identity.js": function(e) {
                                e.exports = function(e) {
                                    return e
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/isArguments.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_baseIsArguments.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/isObjectLike.js"),
                                    s = Object.prototype,
                                    a = s.hasOwnProperty,
                                    u = s.propertyIsEnumerable,
                                    c = o(function() {
                                        return arguments
                                    }()) ? o : function(e) {
                                        return n(e) && a.call(e, "callee") && !u.call(e, "callee")
                                    };
                                e.exports = c
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/isArray.js": function(e) {
                                var t = Array.isArray;
                                e.exports = t
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/isArrayLike.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/isFunction.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/isLength.js");
                                e.exports = function(e) {
                                    return null != e && n(e.length) && !o(e)
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/isBuffer.js": function(e, t, r) {
                                e = r.nmd(e);
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_root.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/stubFalse.js"),
                                    s = t && !t.nodeType && t,
                                    a = s && e && !e.nodeType && e,
                                    u = a && a.exports === s ? o.Buffer : void 0,
                                    c = u ? u.isBuffer : void 0;
                                e.exports = c || n
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/isFunction.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_baseGetTag.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/isObject.js");
                                e.exports = function(e) {
                                    if (!n(e)) return !1;
                                    var t = o(e);
                                    return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/isLength.js": function(e) {
                                e.exports = function(e) {
                                    return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/isObject.js": function(e) {
                                e.exports = function(e) {
                                    var t = typeof e;
                                    return null != e && ("object" == t || "function" == t)
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/isObjectLike.js": function(e) {
                                e.exports = function(e) {
                                    return null != e && "object" == typeof e
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/isSymbol.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_baseGetTag.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/isObjectLike.js");
                                e.exports = function(e) {
                                    return "symbol" == typeof e || n(e) && "[object Symbol]" == o(e)
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/isTypedArray.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_baseIsTypedArray.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/_baseUnary.js"),
                                    s = r("./packages/@logrocket/utils/node_modules/lodash/_nodeUtil.js"),
                                    a = s && s.isTypedArray,
                                    u = a ? n(a) : o;
                                e.exports = u
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/keys.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_arrayLikeKeys.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/_baseKeys.js"),
                                    s = r("./packages/@logrocket/utils/node_modules/lodash/isArrayLike.js");
                                e.exports = function(e) {
                                    return s(e) ? o(e) : n(e)
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/memoize.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_MapCache.js");

                                function n(e, t) {
                                    if ("function" != typeof e || null != t && "function" != typeof t) throw TypeError("Expected a function");
                                    var r = function() {
                                        var o = arguments,
                                            n = t ? t.apply(this, o) : o[0],
                                            s = r.cache;
                                        if (s.has(n)) return s.get(n);
                                        var a = e.apply(this, o);
                                        return r.cache = s.set(n, a) || s, a
                                    };
                                    return r.cache = new(n.Cache || o), r
                                }
                                n.Cache = o, e.exports = n
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/property.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_baseProperty.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/_basePropertyDeep.js"),
                                    s = r("./packages/@logrocket/utils/node_modules/lodash/_isKey.js"),
                                    a = r("./packages/@logrocket/utils/node_modules/lodash/_toKey.js");
                                e.exports = function(e) {
                                    return s(e) ? o(a(e)) : n(e)
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/sortedLastIndexBy.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_baseIteratee.js"),
                                    n = r("./packages/@logrocket/utils/node_modules/lodash/_baseSortedIndexBy.js");
                                e.exports = function(e, t, r) {
                                    return n(e, t, o(r, 2), !0)
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/stubArray.js": function(e) {
                                e.exports = function() {
                                    return []
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/stubFalse.js": function(e) {
                                e.exports = function() {
                                    return !1
                                }
                            },
                            "./packages/@logrocket/utils/node_modules/lodash/toString.js": function(e, t, r) {
                                var o = r("./packages/@logrocket/utils/node_modules/lodash/_baseToString.js");
                                e.exports = function(e) {
                                    return null == e ? "" : o(e)
                                }
                            },
                            "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js": function(e) {
                                e.exports = function(e, t) {
                                    (null == t || t > e.length) && (t = e.length);
                                    for (var r = 0, o = Array(t); r < t; r++) o[r] = e[r];
                                    return o
                                }, e.exports.__esModule = !0, e.exports.default = e.exports
                            },
                            "./node_modules/@babel/runtime/helpers/arrayWithHoles.js": function(e) {
                                e.exports = function(e) {
                                    if (Array.isArray(e)) return e
                                }, e.exports.__esModule = !0, e.exports.default = e.exports
                            },
                            "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js": function(e, t, r) {
                                var o = r("./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
                                e.exports = function(e) {
                                    if (Array.isArray(e)) return o(e)
                                }, e.exports.__esModule = !0, e.exports.default = e.exports
                            },
                            "./node_modules/@babel/runtime/helpers/classCallCheck.js": function(e) {
                                e.exports = function(e, t) {
                                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                }, e.exports.__esModule = !0, e.exports.default = e.exports
                            },
                            "./node_modules/@babel/runtime/helpers/createClass.js": function(e, t, r) {
                                var o = r("./node_modules/@babel/runtime/helpers/toPropertyKey.js");

                                function n(e, t) {
                                    for (var r = 0; r < t.length; r++) {
                                        var n = t[r];
                                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, o(n.key), n)
                                    }
                                }
                                e.exports = function(e, t, r) {
                                    return t && n(e.prototype, t), r && n(e, r), Object.defineProperty(e, "prototype", {
                                        writable: !1
                                    }), e
                                }, e.exports.__esModule = !0, e.exports.default = e.exports
                            },
                            "./node_modules/@babel/runtime/helpers/defineProperty.js": function(e, t, r) {
                                var o = r("./node_modules/@babel/runtime/helpers/toPropertyKey.js");
                                e.exports = function(e, t, r) {
                                    return (t = o(t)) in e ? Object.defineProperty(e, t, {
                                        value: r,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : e[t] = r, e
                                }, e.exports.__esModule = !0, e.exports.default = e.exports
                            },
                            "./node_modules/@babel/runtime/helpers/interopRequireDefault.js": function(e) {
                                e.exports = function(e) {
                                    return e && e.__esModule ? e : {
                                        default: e
                                    }
                                }, e.exports.__esModule = !0, e.exports.default = e.exports
                            },
                            "./node_modules/@babel/runtime/helpers/iterableToArray.js": function(e) {
                                e.exports = function(e) {
                                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                                }, e.exports.__esModule = !0, e.exports.default = e.exports
                            },
                            "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js": function(e) {
                                e.exports = function(e, t) {
                                    var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                    if (null != r) {
                                        var o, n, s, a, u = [],
                                            c = !0,
                                            i = !1;
                                        try {
                                            if (s = (r = r.call(e)).next, 0 === t) {
                                                if (Object(r) !== r) return;
                                                c = !1
                                            } else
                                                for (; !(c = (o = s.call(r)).done) && (u.push(o.value), u.length !== t); c = !0);
                                        } catch (e) {
                                            i = !0, n = e
                                        } finally {
                                            try {
                                                if (!c && null != r.return && (a = r.return(), Object(a) !== a)) return
                                            } finally {
                                                if (i) throw n
                                            }
                                        }
                                        return u
                                    }
                                }, e.exports.__esModule = !0, e.exports.default = e.exports
                            },
                            "./node_modules/@babel/runtime/helpers/nonIterableRest.js": function(e) {
                                e.exports = function() {
                                    throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }, e.exports.__esModule = !0, e.exports.default = e.exports
                            },
                            "./node_modules/@babel/runtime/helpers/nonIterableSpread.js": function(e) {
                                e.exports = function() {
                                    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }, e.exports.__esModule = !0, e.exports.default = e.exports
                            },
                            "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js": function(e, t, r) {
                                var o = r("./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");
                                e.exports = function(e, t) {
                                    if (null == e) return {};
                                    var r, n, s = o(e, t);
                                    if (Object.getOwnPropertySymbols) {
                                        var a = Object.getOwnPropertySymbols(e);
                                        for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r])
                                    }
                                    return s
                                }, e.exports.__esModule = !0, e.exports.default = e.exports
                            },
                            "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js": function(e) {
                                e.exports = function(e, t) {
                                    if (null == e) return {};
                                    var r, o, n = {},
                                        s = Object.keys(e);
                                    for (o = 0; o < s.length; o++) r = s[o], t.indexOf(r) >= 0 || (n[r] = e[r]);
                                    return n
                                }, e.exports.__esModule = !0, e.exports.default = e.exports
                            },
                            "./node_modules/@babel/runtime/helpers/slicedToArray.js": function(e, t, r) {
                                var o = r("./node_modules/@babel/runtime/helpers/arrayWithHoles.js"),
                                    n = r("./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js"),
                                    s = r("./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"),
                                    a = r("./node_modules/@babel/runtime/helpers/nonIterableRest.js");
                                e.exports = function(e, t) {
                                    return o(e) || n(e, t) || s(e, t) || a()
                                }, e.exports.__esModule = !0, e.exports.default = e.exports
                            },
                            "./node_modules/@babel/runtime/helpers/toConsumableArray.js": function(e, t, r) {
                                var o = r("./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js"),
                                    n = r("./node_modules/@babel/runtime/helpers/iterableToArray.js"),
                                    s = r("./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"),
                                    a = r("./node_modules/@babel/runtime/helpers/nonIterableSpread.js");
                                e.exports = function(e) {
                                    return o(e) || n(e) || s(e) || a()
                                }, e.exports.__esModule = !0, e.exports.default = e.exports
                            },
                            "./node_modules/@babel/runtime/helpers/toPrimitive.js": function(e, t, r) {
                                var o = r("./node_modules/@babel/runtime/helpers/typeof.js").default;
                                e.exports = function(e, t) {
                                    if ("object" !== o(e) || null === e) return e;
                                    var r = e[Symbol.toPrimitive];
                                    if (void 0 !== r) {
                                        var n = r.call(e, t || "default");
                                        if ("object" !== o(n)) return n;
                                        throw TypeError("@@toPrimitive must return a primitive value.")
                                    }
                                    return ("string" === t ? String : Number)(e)
                                }, e.exports.__esModule = !0, e.exports.default = e.exports
                            },
                            "./node_modules/@babel/runtime/helpers/toPropertyKey.js": function(e, t, r) {
                                var o = r("./node_modules/@babel/runtime/helpers/typeof.js").default,
                                    n = r("./node_modules/@babel/runtime/helpers/toPrimitive.js");
                                e.exports = function(e) {
                                    var t = n(e, "string");
                                    return "symbol" === o(t) ? t : String(t)
                                }, e.exports.__esModule = !0, e.exports.default = e.exports
                            },
                            "./node_modules/@babel/runtime/helpers/typeof.js": function(e) {
                                function t(r) {
                                    return e.exports = t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                        return typeof e
                                    } : function(e) {
                                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                    }, e.exports.__esModule = !0, e.exports.default = e.exports, t(r)
                                }
                                e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports
                            },
                            "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js": function(e, t, r) {
                                var o = r("./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
                                e.exports = function(e, t) {
                                    if (e) {
                                        if ("string" == typeof e) return o(e, t);
                                        var r = Object.prototype.toString.call(e).slice(8, -1);
                                        if ("Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r) return Array.from(e);
                                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return o(e, t)
                                    }
                                }, e.exports.__esModule = !0, e.exports.default = e.exports
                            }
                        },
                        s = {};

                    function a(e) {
                        var t = s[e];
                        if (void 0 !== t) return t.exports;
                        var r = s[e] = {
                            id: e,
                            loaded: !1,
                            exports: {}
                        };
                        return o[e](r, r.exports, a), r.loaded = !0, r.exports
                    }
                    a.g = function() {
                        if ("object" == typeof globalThis) return globalThis;
                        try {
                            return this || Function("return this")()
                        } catch (e) {
                            if ("object" == typeof window) return window
                        }
                    }(), a.nmd = function(e) {
                        return e.paths = [], e.children || (e.children = []), e
                    };
                    var u = {};
                    return e = u, t = a("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"), Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = void 0, r = (0, t(a("./packages/logrocket/src/setup.js")).default)(), e.default = r, u = u.default
                }()
            }, e.exports = o()
        }
    }
]);