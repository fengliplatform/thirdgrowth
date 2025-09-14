"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7213], {
        42053: function(e, t, r) {
            r.d(t, {
                Ut: function() {
                    return s
                },
                Z_: function() {
                    return c
                }
            });
            var n = r(39954),
                i = r(10507);
            let o = "For more visit: aka.ms/msaljs/browser-errors",
                a = {
                    [i.vD]: "The PKCE code challenge and verifier could not be generated.",
                    [i.TR]: "The crypto object or function is not available.",
                    [i._c]: "Navigation URI is empty. Please check stack trace for more info.",
                    [i.nF]: `Hash value cannot be processed because it is empty. Please verify that your redirectUri is not clearing the hash. ${o}`,
                    [i.Xk]: "Hash does not contain state. Please verify that the request originated from msal.",
                    [i.S_]: `Hash does not contain known properites. Please verify that your redirectUri is not changing the hash.  ${o}`,
                    [i.$P]: "Unable to parse state. Please verify that the request originated from msal.",
                    [i.yK]: "Hash contains state but the interaction type does not match the caller.",
                    [i.Ck]: `Interaction is currently in progress. Please ensure that this interaction has been completed before calling an interactive API.   ${o}`,
                    [i.E]: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser.",
                    [i.H]: "window.open returned null or undefined window object.",
                    [i.h7]: "User cancelled the flow.",
                    [i.ZT]: `Token acquisition in popup failed due to timeout.  ${o}`,
                    [i.JA]: `Token acquisition in iframe failed due to timeout.  ${o}`,
                    [i.b_]: "Redirects are not supported for iframed or brokered applications. Please ensure you are using MSAL.js in a top frame of the window if using the redirect APIs, or use the popup APIs.",
                    [i.xO]: `Request was blocked inside an iframe because MSAL detected an authentication response.  ${o}`,
                    [i.bj]: "Request was blocked inside a popup because MSAL detected it was running in a popup.",
                    [i.h8]: "The iframe being monitored was closed prematurely.",
                    [i.I9]: "Silent logout not supported. Please call logoutRedirect or logoutPopup instead.",
                    [i.wH]: "No account object provided to acquireTokenSilent and no active account has been set. Please call setActiveAccount or provide an account on the request.",
                    [i.WQ]: "The value given for the prompt value is not valid for silent requests - must be set to 'none' or 'no_session'.",
                    [i.QO]: "No token request found in cache.",
                    [i.e$]: "The cached token request could not be parsed.",
                    [i.dT]: "No cached authority found.",
                    [i.BO]: "Auth Request not set. Please ensure initiateAuthRequest was called from the InteractionHandler",
                    [i.Ut]: "Invalid cache type",
                    [i.Dx]: "Login and token requests are not supported in non-browser environments.",
                    [i.IL]: "Database is not open!",
                    [i.Mq]: "No network connectivity. Check your internet connection.",
                    [i.Dc]: "Network request failed: If the browser threw a CORS error, check that the redirectUri is registered in the Azure App Portal as type 'SPA'",
                    [i.C8]: "Network request failed. Please check the network trace to determine root cause.",
                    [i.w6]: "Failed to parse network response. Check network trace.",
                    [i.Jd]: "Error loading token to cache.",
                    [i.XM]: "Cryptographic Key or Keypair not found in browser storage.",
                    [i.Aj]: "An authorization code must be provided (as the `code` property on the request) to this flow.",
                    [i.Dy]: "An authorization code or nativeAccountId must be provided to this flow.",
                    [i.LL]: "Request cannot contain both spa code and native account id.",
                    [i.Pi]: "IndexedDB, which is required for persistent cryptographic key storage, is unavailable. This may be caused by browser privacy features which block persistent storage in third-party contexts.",
                    [i.KA]: `Unable to acquire token from native platform.  ${o}`,
                    [i.hR]: "Timed out while attempting to establish connection to browser extension",
                    [i.Wb]: "Native extension is not installed. If you think this is a mistake call the initialize function.",
                    [i.V7]: `Connection to native platform has not been established. Please install a compatible browser extension and run initialize().  ${o}`,
                    [i.al]: `You must call and await the initialize function before attempting to call any other MSAL API.  ${o}`,
                    [i.o9]: "The provided prompt is not supported by the native platform. This request should be routed to the web based flow.",
                    [i.lZ]: "Invalid base64 encoded string.",
                    [i.Hh]: "Invalid PoP token request. The request should not have both a popKid value and signPopToken set to true.",
                    [i.jl]: "Failed to build request headers object.",
                    [i.Vy]: "Failed to parse response headers"
                };
            i.vD, a[i.vD], i.TR, a[i.TR], i._c, a[i._c], i.nF, a[i.nF], i.Xk, a[i.Xk], i.S_, a[i.S_], i.$P, a[i.$P], i.yK, a[i.yK], i.Ck, a[i.Ck], i.E, a[i.E], i.H, a[i.H], i.h7, a[i.h7], i.ZT, a[i.ZT], i.JA, a[i.JA], i.b_, a[i.b_], i.xO, a[i.xO], i.bj, a[i.bj], i.h8, a[i.h8], i.I9, a[i.I9], i.wH, a[i.wH], i.WQ, a[i.WQ], i.QO, a[i.QO], i.e$, a[i.e$], i.dT, a[i.dT], i.BO, a[i.BO], i.Ut, a[i.Ut], i.Dx, a[i.Dx], i.IL, a[i.IL], i.Mq, a[i.Mq], i.Dc, a[i.Dc], i.C8, a[i.C8], i.w6, a[i.w6], i.Jd, a[i.Jd], i.XM, a[i.XM], i.Aj, a[i.Aj], i.Dy, a[i.Dy], i.LL, a[i.LL], i.Pi, a[i.Pi], i.KA, a[i.KA], i.hR, a[i.hR], i.Wb, a[i.Wb], i.V7, a[i.V7], i.al, a[i.al], i.o9, a[i.o9], i.lZ, a[i.lZ], i.Hh, a[i.Hh];
            class s extends n.l4 {
                constructor(e, t) {
                    super(e, a[e], t), Object.setPrototypeOf(this, s.prototype), this.name = "BrowserAuthError"
                }
            }

            function c(e, t) {
                return new s(e, t)
            }
        },
        10507: function(e, t, r) {
            r.d(t, {
                $P: function() {
                    return l
                },
                Aj: function() {
                    return L
                },
                BO: function() {
                    return k
                },
                C8: function() {
                    return M
                },
                Ck: function() {
                    return d
                },
                Dc: function() {
                    return P
                },
                Dx: function() {
                    return b
                },
                Dy: function() {
                    return D
                },
                E: function() {
                    return u
                },
                H: function() {
                    return g
                },
                Hh: function() {
                    return Y
                },
                I9: function() {
                    return A
                },
                IL: function() {
                    return O
                },
                JA: function() {
                    return C
                },
                Jd: function() {
                    return U
                },
                KA: function() {
                    return F
                },
                LL: function() {
                    return K
                },
                Mq: function() {
                    return N
                },
                Pi: function() {
                    return x
                },
                QO: function() {
                    return E
                },
                S_: function() {
                    return c
                },
                TR: function() {
                    return i
                },
                Ut: function() {
                    return R
                },
                V7: function() {
                    return $
                },
                Vy: function() {
                    return j
                },
                WQ: function() {
                    return w
                },
                Wb: function() {
                    return G
                },
                XM: function() {
                    return H
                },
                Xk: function() {
                    return s
                },
                ZT: function() {
                    return m
                },
                _c: function() {
                    return o
                },
                al: function() {
                    return z
                },
                b_: function() {
                    return f
                },
                bj: function() {
                    return T
                },
                dT: function() {
                    return S
                },
                e$: function() {
                    return _
                },
                h7: function() {
                    return p
                },
                h8: function() {
                    return I
                },
                hR: function() {
                    return B
                },
                jl: function() {
                    return W
                },
                lZ: function() {
                    return V
                },
                nF: function() {
                    return a
                },
                o9: function() {
                    return Q
                },
                vD: function() {
                    return n
                },
                w6: function() {
                    return q
                },
                wH: function() {
                    return v
                },
                xO: function() {
                    return y
                },
                yK: function() {
                    return h
                }
            });
            let n = "pkce_not_created",
                i = "crypto_nonexistent",
                o = "empty_navigate_uri",
                a = "hash_empty_error",
                s = "no_state_in_hash",
                c = "hash_does_not_contain_known_properties",
                l = "unable_to_parse_state",
                h = "state_interaction_type_mismatch",
                d = "interaction_in_progress",
                u = "popup_window_error",
                g = "empty_window_error",
                p = "user_cancelled",
                m = "monitor_popup_timeout",
                C = "monitor_window_timeout",
                f = "redirect_in_iframe",
                y = "block_iframe_reload",
                T = "block_nested_popups",
                I = "iframe_closed_prematurely",
                A = "silent_logout_unsupported",
                v = "no_account_error",
                w = "silent_prompt_value_error",
                E = "no_token_request_cache_error",
                _ = "unable_to_parse_token_request_cache_error",
                S = "no_cached_authority_error",
                k = "auth_request_not_set_error",
                R = "invalid_cache_type",
                b = "non_browser_environment",
                O = "database_not_open",
                N = "no_network_connectivity",
                P = "post_request_failed",
                M = "get_request_failed",
                q = "failed_to_parse_response",
                U = "unable_to_load_token",
                H = "crypto_key_not_found",
                L = "auth_code_required",
                D = "auth_code_or_nativeAccountId_required",
                K = "spa_code_and_nativeAccountId_present",
                x = "database_unavailable",
                F = "unable_to_acquire_token_from_native_platform",
                B = "native_handshake_timeout",
                G = "native_extension_not_installed",
                $ = "native_connection_not_established",
                z = "uninitialized_public_client_application",
                Q = "native_prompt_not_supported",
                V = "invalid_base64_string",
                Y = "invalid_pop_token_request",
                W = "failed_to_build_headers",
                j = "failed_to_parse_headers"
        },
        39954: function(e, t, r) {
            r.d(t, {
                MD: function() {
                    return s
                },
                l4: function() {
                    return a
                }
            });
            var n = r(7289),
                i = r(32294);
            let o = {
                [i.g]: "Unexpected error in authentication.",
                [i.D]: "Post request failed from the network, could be a 4xx/5xx or a network unavailability. Please check the exact error code for details."
            };
            i.g, o[i.g], i.D, o[i.D];
            class a extends Error {
                constructor(e, t, r) {
                    super(t ? `${e}: ${t}` : e), Object.setPrototypeOf(this, a.prototype), this.errorCode = e || n.gT.EMPTY_STRING, this.errorMessage = t || n.gT.EMPTY_STRING, this.subError = r || n.gT.EMPTY_STRING, this.name = "AuthError"
                }
                setCorrelationId(e) {
                    this.correlationId = e
                }
            }

            function s(e, t) {
                return new a(e, t ? `${o[e]} ${t}` : o[e])
            }
        },
        32294: function(e, t, r) {
            r.d(t, {
                D: function() {
                    return i
                },
                g: function() {
                    return n
                }
            });
            let n = "unexpected_error",
                i = "post_request_failed"
        },
        57766: function(e, t, r) {
            r.d(t, {
                Cf: function() {
                    return h
                },
                Yo: function() {
                    return l
                },
                ip: function() {
                    return d
                }
            });
            var n = r(7289),
                i = r(39954),
                o = r(54826);
            let a = [o.tZ, o.Mo, o.kk, o.nl],
                s = ["message_only", "additional_action", "basic_action", "user_password_expired", "consent_required", "bad_token"],
                c = {
                    [o.I2]: "No refresh token found in the cache. Please sign-in.",
                    [o.QP]: "The requested account is not available in the native broker. It may have been deleted or logged out. Please sign-in again using an interactive API.",
                    [o.Tw]: "Refresh token has expired.",
                    [o.nl]: "Identity provider returned bad_token due to an expired or invalid refresh token. Please invoke an interactive API to resolve."
                };
            o.I2, c[o.I2], o.QP, c[o.QP], o.nl, c[o.nl];
            class l extends i.l4 {
                constructor(e, t, r, i, o, a, s, c) {
                    super(e, t, r), Object.setPrototypeOf(this, l.prototype), this.timestamp = i || n.gT.EMPTY_STRING, this.traceId = o || n.gT.EMPTY_STRING, this.correlationId = a || n.gT.EMPTY_STRING, this.claims = s || n.gT.EMPTY_STRING, this.name = "InteractionRequiredAuthError", this.errorNo = c
                }
            }

            function h(e, t, r) {
                let n = !!e && a.indexOf(e) > -1,
                    i = !!r && s.indexOf(r) > -1,
                    o = !!t && a.some(e => t.indexOf(e) > -1);
                return n || o || i
            }

            function d(e) {
                return new l(e, c[e])
            }
        },
        54826: function(e, t, r) {
            r.d(t, {
                I2: function() {
                    return n
                },
                Mo: function() {
                    return s
                },
                QP: function() {
                    return i
                },
                Tw: function() {
                    return o
                },
                kk: function() {
                    return c
                },
                nl: function() {
                    return l
                },
                tZ: function() {
                    return a
                }
            });
            let n = "no_tokens_found",
                i = "native_account_unavailable",
                o = "refresh_token_expired",
                a = "interaction_required",
                s = "consent_required",
                c = "login_required",
                l = "bad_token"
        },
        7289: function(e, t, r) {
            r.d(t, {
                $A: function() {
                    return q
                },
                $f: function() {
                    return a
                },
                As: function() {
                    return h
                },
                Bv: function() {
                    return f
                },
                D1: function() {
                    return k
                },
                Ge: function() {
                    return R
                },
                HN: function() {
                    return E
                },
                NJ: function() {
                    return d
                },
                Nb: function() {
                    return l
                },
                QU: function() {
                    return v
                },
                SZ: function() {
                    return s
                },
                To: function() {
                    return P
                },
                VX: function() {
                    return u
                },
                Vi: function() {
                    return c
                },
                W: function() {
                    return O
                },
                YY: function() {
                    return b
                },
                bb: function() {
                    return S
                },
                ch: function() {
                    return A
                },
                d3: function() {
                    return y
                },
                dg: function() {
                    return T
                },
                f_: function() {
                    return o
                },
                gT: function() {
                    return n
                },
                hO: function() {
                    return _
                },
                iR: function() {
                    return C
                },
                ki: function() {
                    return N
                },
                oj: function() {
                    return i
                },
                pQ: function() {
                    return w
                },
                qJ: function() {
                    return m
                },
                rg: function() {
                    return g
                },
                sR: function() {
                    return I
                },
                vw: function() {
                    return p
                },
                xd: function() {
                    return M
                }
            });
            let n = {
                    LIBRARY_NAME: "MSAL.JS",
                    SKU: "msal.js.common",
                    CACHE_PREFIX: "msal",
                    DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/",
                    DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com",
                    DEFAULT_COMMON_TENANT: "common",
                    ADFS: "adfs",
                    DSTS: "dstsv2",
                    AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=",
                    CIAM_AUTH_URL: ".ciamlogin.com",
                    AAD_TENANT_DOMAIN_SUFFIX: ".onmicrosoft.com",
                    RESOURCE_DELIM: "|",
                    NO_ACCOUNT: "NO_ACCOUNT",
                    CLAIMS: "claims",
                    CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad",
                    OPENID_SCOPE: "openid",
                    PROFILE_SCOPE: "profile",
                    OFFLINE_ACCESS_SCOPE: "offline_access",
                    EMAIL_SCOPE: "email",
                    CODE_RESPONSE_TYPE: "code",
                    CODE_GRANT_TYPE: "authorization_code",
                    RT_GRANT_TYPE: "refresh_token",
                    FRAGMENT_RESPONSE_MODE: "fragment",
                    S256_CODE_CHALLENGE_METHOD: "S256",
                    URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8",
                    AUTHORIZATION_PENDING: "authorization_pending",
                    NOT_DEFINED: "not_defined",
                    EMPTY_STRING: "",
                    NOT_APPLICABLE: "N/A",
                    NOT_AVAILABLE: "Not Available",
                    FORWARD_SLASH: "/",
                    IMDS_ENDPOINT: "http://169.254.169.254/metadata/instance/compute/location",
                    IMDS_VERSION: "2020-06-01",
                    IMDS_TIMEOUT: 2e3,
                    AZURE_REGION_AUTO_DISCOVER_FLAG: "TryAutoDetect",
                    REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX: "login.microsoft.com",
                    KNOWN_PUBLIC_CLOUDS: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"],
                    TOKEN_RESPONSE_TYPE: "token",
                    ID_TOKEN_RESPONSE_TYPE: "id_token",
                    SHR_NONCE_VALIDITY: 240,
                    INVALID_INSTANCE: "invalid_instance"
                },
                i = {
                    SUCCESS: 200,
                    SUCCESS_RANGE_START: 200,
                    SUCCESS_RANGE_END: 299,
                    REDIRECT: 302,
                    CLIENT_ERROR: 400,
                    CLIENT_ERROR_RANGE_START: 400,
                    BAD_REQUEST: 400,
                    UNAUTHORIZED: 401,
                    NOT_FOUND: 404,
                    REQUEST_TIMEOUT: 408,
                    TOO_MANY_REQUESTS: 429,
                    CLIENT_ERROR_RANGE_END: 499,
                    SERVER_ERROR: 500,
                    SERVER_ERROR_RANGE_START: 500,
                    SERVICE_UNAVAILABLE: 503,
                    GATEWAY_TIMEOUT: 504,
                    SERVER_ERROR_RANGE_END: 599,
                    MULTI_SIDED_ERROR: 600
                },
                o = [n.OPENID_SCOPE, n.PROFILE_SCOPE, n.OFFLINE_ACCESS_SCOPE],
                a = [...o, n.EMAIL_SCOPE],
                s = {
                    CONTENT_TYPE: "Content-Type",
                    CONTENT_LENGTH: "Content-Length",
                    RETRY_AFTER: "Retry-After",
                    CCS_HEADER: "X-AnchorMailbox",
                    WWWAuthenticate: "WWW-Authenticate",
                    AuthenticationInfo: "Authentication-Info",
                    X_MS_REQUEST_ID: "x-ms-request-id",
                    X_MS_HTTP_VERSION: "x-ms-httpver"
                },
                c = {
                    ID_TOKEN: "idtoken",
                    CLIENT_INFO: "client.info",
                    ADAL_ID_TOKEN: "adal.idtoken",
                    ERROR: "error",
                    ERROR_DESC: "error.description",
                    ACTIVE_ACCOUNT: "active-account",
                    ACTIVE_ACCOUNT_FILTERS: "active-account-filters"
                },
                l = {
                    COMMON: "common",
                    ORGANIZATIONS: "organizations",
                    CONSUMERS: "consumers"
                },
                h = {
                    ACCESS_TOKEN: "access_token",
                    XMS_CC: "xms_cc"
                },
                d = {
                    LOGIN: "login",
                    SELECT_ACCOUNT: "select_account",
                    CONSENT: "consent",
                    NONE: "none",
                    CREATE: "create",
                    NO_SESSION: "no_session"
                },
                u = {
                    PLAIN: "plain",
                    S256: "S256"
                },
                g = {
                    QUERY: "query",
                    FRAGMENT: "fragment"
                },
                p = { ...g,
                    FORM_POST: "form_post"
                },
                m = {
                    IMPLICIT_GRANT: "implicit",
                    AUTHORIZATION_CODE_GRANT: "authorization_code",
                    CLIENT_CREDENTIALS_GRANT: "client_credentials",
                    RESOURCE_OWNER_PASSWORD_GRANT: "password",
                    REFRESH_TOKEN_GRANT: "refresh_token",
                    DEVICE_CODE_GRANT: "device_code",
                    JWT_BEARER: "urn:ietf:params:oauth:grant-type:jwt-bearer"
                },
                C = {
                    MSSTS_ACCOUNT_TYPE: "MSSTS",
                    ADFS_ACCOUNT_TYPE: "ADFS",
                    MSAV1_ACCOUNT_TYPE: "MSA",
                    GENERIC_ACCOUNT_TYPE: "Generic"
                },
                f = {
                    CACHE_KEY_SEPARATOR: "-",
                    CLIENT_INFO_SEPARATOR: "."
                },
                y = {
                    ID_TOKEN: "IdToken",
                    ACCESS_TOKEN: "AccessToken",
                    ACCESS_TOKEN_WITH_AUTH_SCHEME: "AccessToken_With_AuthScheme",
                    REFRESH_TOKEN: "RefreshToken"
                },
                T = "appmetadata",
                I = "client_info",
                A = "1",
                v = {
                    CACHE_KEY: "authority-metadata",
                    REFRESH_TIME_SECONDS: 86400
                },
                w = {
                    CONFIG: "config",
                    CACHE: "cache",
                    NETWORK: "network",
                    HARDCODED_VALUES: "hardcoded_values"
                },
                E = {
                    SCHEMA_VERSION: 5,
                    MAX_CUR_HEADER_BYTES: 80,
                    MAX_LAST_HEADER_BYTES: 330,
                    MAX_CACHED_ERRORS: 50,
                    CACHE_KEY: "server-telemetry",
                    CATEGORY_SEPARATOR: "|",
                    VALUE_SEPARATOR: ",",
                    OVERFLOW_TRUE: "1",
                    OVERFLOW_FALSE: "0",
                    UNKNOWN_ERROR: "unknown_error"
                },
                _ = {
                    BEARER: "Bearer",
                    POP: "pop",
                    SSH: "ssh-cert"
                },
                S = {
                    DEFAULT_THROTTLE_TIME_SECONDS: 60,
                    DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600,
                    THROTTLING_PREFIX: "throttling",
                    X_MS_LIB_CAPABILITY_VALUE: "retry-after, h429"
                },
                k = {
                    INVALID_GRANT_ERROR: "invalid_grant",
                    CLIENT_MISMATCH_ERROR: "client_mismatch"
                },
                R = {
                    username: "username",
                    password: "password"
                },
                b = {
                    httpSuccess: 200,
                    httpBadRequest: 400
                },
                O = {
                    FAILED_AUTO_DETECTION: "1",
                    INTERNAL_CACHE: "2",
                    ENVIRONMENT_VARIABLE: "3",
                    IMDS: "4"
                },
                N = {
                    CONFIGURED_MATCHES_DETECTED: "1",
                    CONFIGURED_NO_AUTO_DETECTION: "2",
                    CONFIGURED_NOT_DETECTED: "3",
                    AUTO_DETECTION_REQUESTED_SUCCESSFUL: "4",
                    AUTO_DETECTION_REQUESTED_FAILED: "5"
                },
                P = {
                    NOT_APPLICABLE: "0",
                    FORCE_REFRESH_OR_CLAIMS: "1",
                    NO_CACHED_ACCESS_TOKEN: "2",
                    CACHED_ACCESS_TOKEN_EXPIRED: "3",
                    PROACTIVELY_REFRESHED: "4"
                },
                M = {
                    Jwt: "JWT",
                    Jwk: "JWK",
                    Pop: "pop"
                },
                q = 300
        },
        35527: function(e, t, r) {
            r.d(t, {
                $: function() {
                    return o
                }
            });
            var n = r(2265),
                i = r(69813);
            let o = () => {
                let e = (0, n.useContext)(i.x);
                if (!e) throw Error("`useBrowseContext` must be used within a `BrowseContextProvider`");
                return e
            }
        },
        2854: function(e, t, r) {
            r.d(t, {
                A: function() {
                    return s
                },
                CartContextProvider: function() {
                    return c
                }
            });
            var n = r(57437),
                i = r(2265),
                o = r(68266),
                a = r(50835);
            let s = (0, i.createContext)(null),
                c = e => {
                    let {
                        children: t
                    } = e, [r, c] = (0, i.useState)(o.s4);
                    (0, i.useEffect)(() => {
                        "undefined" != typeof window && c((0, o.DC)())
                    }, [typeof window]);
                    let l = { ...r,
                        addToCart: e => {
                            let t = [...r.orderItems, e],
                                n = t.length;
                            a.hf.write(n), c({ ...r,
                                cartItemCount: n,
                                orderItems: t
                            })
                        },
                        refreshCart: () => {
                            let e = a.hf.read();
                            c({ ...r,
                                cartItemCount: e
                            })
                        },
                        removeFromCart: e => {
                            let t = r.orderItems.filter(t => t.itemNumber !== e),
                                n = t.length;
                            a.hf.write(n), c({ ...r,
                                cartItemCount: n,
                                orderItems: t
                            })
                        }
                    };
                    return (0, n.jsx)(s.Provider, {
                        value: l,
                        children: t
                    })
                };
            c.displayName = "CartContextProvider"
        },
        483: function(e, t, r) {
            r.d(t, {
                _: function() {
                    return l
                }
            });
            var n = r(2265);

            function i(e, t) {
                window.dispatchEvent(new StorageEvent("storage", {
                    key: e,
                    newValue: t
                }))
            }
            let o = (e, t) => {
                    var r;
                    let n = "object" == typeof t ? JSON.stringify(t) : t;
                    null == (r = window.localStorage) || r.setItem(e, n), i(e, n)
                },
                a = e => {
                    var t;
                    null == (t = window.localStorage) || t.removeItem(e), i(e, null)
                },
                s = e => {
                    var t;
                    return null == (t = window.localStorage) ? void 0 : t.getItem(e)
                },
                c = () => null;

            function l(e, t) {
                let r = (0, n.useRef)(null),
                    i = (0, n.useSyncExternalStore)(t => {
                        let r = r => {
                            r.key && r.key !== e || t(r)
                        };
                        return window.addEventListener("storage", r), () => window.removeEventListener("storage", r)
                    }, () => {
                        let t = s(e);
                        return t === r.current ? r.current : (r.current = t, t)
                    }, c),
                    l = (0, n.useCallback)(t => {
                        try {
                            let r = t;
                            if ("function" == typeof t) try {
                                r = t(JSON.parse(i || ""))
                            } catch (e) {
                                console.warn(e), r = t(i || "")
                            }
                            null == r ? a(e) : o(e, r)
                        } catch (e) {
                            console.warn(e)
                        }
                    }, [e, i]);
                (0, n.useEffect)(() => {
                    try {
                        null === s(e) && void 0 !== t && o(e, t)
                    } catch (e) {
                        console.warn("useLocalStorage useEffect error: ".concat(e))
                    }
                }, [e, t]);
                let h = (0, n.useMemo)(() => {
                    try {
                        let e = i ? JSON.parse(i) : t;
                        return e = null != e && "object" != typeof e ? "".concat(e) : e
                    } catch (e) {
                        return console.warn("useLocalStorage parse error: ".concat(e)), i || t
                    }
                }, [i, t]);
                try {
                    return [h, l]
                } catch (e) {
                    return console.error("useLocalStorage error: ".concat(e)), [t, l]
                }
            }
        },
        32074: function(e, t, r) {
            r.d(t, {
                MSALContextProviderClient: function() {
                    return n$
                },
                d: function() {
                    return nG
                }
            });
            var n, i, o, a, s = r(57437),
                c = r(2265),
                l = r(7289);
            (n = o || (o = {}))[n.Error = 0] = "Error", n[n.Warning = 1] = "Warning", n[n.Info = 2] = "Info", n[n.Verbose = 3] = "Verbose", n[n.Trace = 4] = "Trace";
            class h {
                constructor(e, t, r) {
                    this.level = o.Info;
                    let n = e || h.createDefaultLoggerOptions();
                    this.localCallback = n.loggerCallback || (() => {}), this.piiLoggingEnabled = n.piiLoggingEnabled || !1, this.level = "number" == typeof n.logLevel ? n.logLevel : o.Info, this.correlationId = n.correlationId || l.gT.EMPTY_STRING, this.packageName = t || l.gT.EMPTY_STRING, this.packageVersion = r || l.gT.EMPTY_STRING
                }
                static createDefaultLoggerOptions() {
                    return {
                        loggerCallback: () => {},
                        piiLoggingEnabled: !1,
                        logLevel: o.Info
                    }
                }
                clone(e, t, r) {
                    return new h({
                        loggerCallback: this.localCallback,
                        piiLoggingEnabled: this.piiLoggingEnabled,
                        logLevel: this.level,
                        correlationId: r || this.correlationId
                    }, e, t)
                }
                logMessage(e, t) {
                    if (t.logLevel > this.level || !this.piiLoggingEnabled && t.containsPii) return;
                    let r = new Date().toUTCString(),
                        n = `[${r}] : [${t.correlationId||this.correlationId||""}]`,
                        i = `${n} : ${this.packageName}@${this.packageVersion} : ${o[t.logLevel]} - ${e}`;
                    this.executeCallback(t.logLevel, i, t.containsPii || !1)
                }
                executeCallback(e, t, r) {
                    this.localCallback && this.localCallback(e, t, r)
                }
                error(e, t) {
                    this.logMessage(e, {
                        logLevel: o.Error,
                        containsPii: !1,
                        correlationId: t || l.gT.EMPTY_STRING
                    })
                }
                errorPii(e, t) {
                    this.logMessage(e, {
                        logLevel: o.Error,
                        containsPii: !0,
                        correlationId: t || l.gT.EMPTY_STRING
                    })
                }
                warning(e, t) {
                    this.logMessage(e, {
                        logLevel: o.Warning,
                        containsPii: !1,
                        correlationId: t || l.gT.EMPTY_STRING
                    })
                }
                warningPii(e, t) {
                    this.logMessage(e, {
                        logLevel: o.Warning,
                        containsPii: !0,
                        correlationId: t || l.gT.EMPTY_STRING
                    })
                }
                info(e, t) {
                    this.logMessage(e, {
                        logLevel: o.Info,
                        containsPii: !1,
                        correlationId: t || l.gT.EMPTY_STRING
                    })
                }
                infoPii(e, t) {
                    this.logMessage(e, {
                        logLevel: o.Info,
                        containsPii: !0,
                        correlationId: t || l.gT.EMPTY_STRING
                    })
                }
                verbose(e, t) {
                    this.logMessage(e, {
                        logLevel: o.Verbose,
                        containsPii: !1,
                        correlationId: t || l.gT.EMPTY_STRING
                    })
                }
                verbosePii(e, t) {
                    this.logMessage(e, {
                        logLevel: o.Verbose,
                        containsPii: !0,
                        correlationId: t || l.gT.EMPTY_STRING
                    })
                }
                trace(e, t) {
                    this.logMessage(e, {
                        logLevel: o.Trace,
                        containsPii: !1,
                        correlationId: t || l.gT.EMPTY_STRING
                    })
                }
                tracePii(e, t) {
                    this.logMessage(e, {
                        logLevel: o.Trace,
                        containsPii: !0,
                        correlationId: t || l.gT.EMPTY_STRING
                    })
                }
                isPiiLoggingEnabled() {
                    return this.piiLoggingEnabled || !1
                }
            }
            let d = {
                    AAD: "AAD",
                    OIDC: "OIDC"
                },
                u = {
                    None: "none"
                };
            var g = r(39954);
            let p = "client_info_decoding_error",
                m = "client_info_empty_error",
                C = "token_parsing_error",
                f = "null_or_empty_token",
                y = "endpoints_resolution_error",
                T = "network_error",
                I = "openid_config_error",
                A = "hash_not_deserialized",
                v = "invalid_state",
                w = "state_mismatch",
                E = "state_not_found",
                _ = "nonce_mismatch",
                S = "auth_time_not_found",
                k = "max_age_transpired",
                R = "multiple_matching_tokens",
                b = "multiple_matching_accounts",
                O = "multiple_matching_appMetadata",
                N = "request_cannot_be_made",
                P = "cannot_remove_empty_scope",
                M = "cannot_append_scopeset",
                q = "empty_input_scopeset",
                U = "device_code_polling_cancelled",
                H = "device_code_expired",
                L = "device_code_unknown_error",
                D = "no_account_in_silent_request",
                K = "invalid_cache_record",
                x = "invalid_cache_environment",
                F = "no_account_found",
                B = "no_crypto_object",
                G = "unexpected_credential_type",
                $ = "invalid_assertion",
                z = "invalid_client_credential",
                Q = "token_refresh_required",
                V = "user_timeout_reached",
                Y = "token_claims_cnf_required_for_signedjwt",
                W = "authorization_code_missing_from_server_response",
                j = "binding_key_not_removed",
                J = "end_session_endpoint_not_supported",
                Z = "key_id_missing",
                X = "no_network_connectivity",
                ee = "user_canceled",
                et = "missing_tenant_id_error",
                er = "method_not_implemented",
                en = "nested_app_auth_bridge_disabled",
                ei = {
                    [p]: "The client info could not be parsed/decoded correctly",
                    [m]: "The client info was empty",
                    [C]: "Token cannot be parsed",
                    [f]: "The token is null or empty",
                    [y]: "Endpoints cannot be resolved",
                    [T]: "Network request failed",
                    [I]: "Could not retrieve endpoints. Check your authority and verify the .well-known/openid-configuration endpoint returns the required endpoints.",
                    [A]: "The hash parameters could not be deserialized",
                    [v]: "State was not the expected format",
                    [w]: "State mismatch error",
                    [E]: "State not found",
                    [_]: "Nonce mismatch error",
                    [S]: "Max Age was requested and the ID token is missing the auth_time variable. auth_time is an optional claim and is not enabled by default - it must be enabled. See https://aka.ms/msaljs/optional-claims for more information.",
                    [k]: "Max Age is set to 0, or too much time has elapsed since the last end-user authentication.",
                    [R]: "The cache contains multiple tokens satisfying the requirements. Call AcquireToken again providing more requirements such as authority or account.",
                    [b]: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account",
                    [O]: "The cache contains multiple appMetadata satisfying the given parameters. Please pass more info to obtain the correct appMetadata",
                    [N]: "Token request cannot be made without authorization code or refresh token.",
                    [P]: "Cannot remove null or empty scope from ScopeSet",
                    [M]: "Cannot append ScopeSet",
                    [q]: "Empty input ScopeSet cannot be processed",
                    [U]: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true.",
                    [H]: "Device code is expired.",
                    [L]: "Device code stopped polling for unknown reasons.",
                    [D]: "Please pass an account object, silent flow is not supported without account information",
                    [K]: "Cache record object was null or undefined.",
                    [x]: "Invalid environment when attempting to create cache entry",
                    [F]: "No account found in cache for given key.",
                    [B]: "No crypto object detected.",
                    [G]: "Unexpected credential type.",
                    [$]: "Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515",
                    [z]: "Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential",
                    [Q]: "Cannot return token from cache because it must be refreshed. This may be due to one of the following reasons: forceRefresh parameter is set to true, claims have been requested, there is no cached access token or it is expired.",
                    [V]: "User defined timeout for device code polling reached",
                    [Y]: "Cannot generate a POP jwt if the token_claims are not populated",
                    [W]: "Server response does not contain an authorization code to proceed",
                    [j]: "Could not remove the credential's binding key from storage.",
                    [J]: "The provided authority does not support logout",
                    [Z]: "A keyId value is missing from the requested bound token's cache record and is required to match the token to it's stored binding key.",
                    [X]: "No network connectivity. Check your internet connection.",
                    [ee]: "User cancelled the flow.",
                    [et]: "A tenant id - not common, organizations, or consumers - must be specified when using the client_credentials flow.",
                    [er]: "This method has not been implemented",
                    [en]: "The nested app auth bridge is disabled"
                };
            ei[p], ei[m], ei[C], ei[f], ei[y], ei[T], ei[I], ei[A], ei[v], ei[w], ei[E], ei[_], ei[S], ei[k], ei[R], ei[b], ei[O], ei[N], ei[P], ei[M], ei[q], ei[U], ei[H], ei[L], ei[D], ei[K], ei[x], ei[F], ei[B], ei[G], ei[$], ei[z], ei[Q], ei[V], ei[Y], ei[W], ei[j], ei[J], ei[Z], ei[X], ei[ee], ei[et], ei[en];
            class eo extends g.l4 {
                constructor(e, t) {
                    super(e, t ? `${ei[e]}: ${t}` : ei[e]), this.name = "ClientAuthError", Object.setPrototypeOf(this, eo.prototype)
                }
            }

            function ea(e, t) {
                return new eo(e, t)
            }
            let es = {
                    createNewGuid: () => {
                        throw ea(er)
                    },
                    base64Decode: () => {
                        throw ea(er)
                    },
                    base64Encode: () => {
                        throw ea(er)
                    },
                    base64UrlEncode: () => {
                        throw ea(er)
                    },
                    encodeKid: () => {
                        throw ea(er)
                    },
                    async getPublicKeyThumbprint() {
                        throw ea(er)
                    },
                    async removeTokenBindingKey() {
                        throw ea(er)
                    },
                    async clearKeystore() {
                        throw ea(er)
                    },
                    async signJwt() {
                        throw ea(er)
                    },
                    async hashString() {
                        throw ea(er)
                    }
                },
                ec = "@azure/msal-common",
                el = "14.16.1";

            function eh(e, t) {
                let r = function(e) {
                    if (!e) throw ea(f);
                    let t = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/.exec(e);
                    if (!t || t.length < 4) throw ea(C);
                    return t[2]
                }(e);
                try {
                    let e = t(r);
                    return JSON.parse(e)
                } catch (e) {
                    throw ea(C)
                }
            }

            function ed(e, t) {
                if (0 === t || Date.now() - 3e5 > e + t) throw ea(k)
            }

            function eu() {
                return Math.round(new Date().getTime() / 1e3)
            }

            function eg(e, t) {
                let r = Number(e) || 0;
                return eu() + t > r
            }

            function ep(e) {
                return [
                    [e.homeAccountId, e.environment].join(l.Bv.CACHE_KEY_SEPARATOR).toLowerCase(),
                    function(e) {
                        let t = e.credentialType === l.d3.REFRESH_TOKEN && e.familyId || e.clientId;
                        return [e.credentialType, t, e.realm || ""].join(l.Bv.CACHE_KEY_SEPARATOR).toLowerCase()
                    }(e), (e.target || "").toLowerCase(), (e.requestedClaimsHash || "").toLowerCase(), e.tokenType && e.tokenType.toLowerCase() !== l.hO.BEARER.toLowerCase() ? e.tokenType.toLowerCase() : ""
                ].join(l.Bv.CACHE_KEY_SEPARATOR).toLowerCase()
            }

            function em(e, t, r, n, i) {
                return {
                    credentialType: l.d3.ID_TOKEN,
                    homeAccountId: e,
                    environment: t,
                    clientId: n,
                    secret: r,
                    realm: i
                }
            }

            function eC(e, t, r, n, i, o, a, s, c, h, d, u, g, p, m) {
                let C = {
                    homeAccountId: e,
                    credentialType: l.d3.ACCESS_TOKEN,
                    secret: r,
                    cachedAt: eu().toString(),
                    expiresOn: a.toString(),
                    extendedExpiresOn: s.toString(),
                    environment: t,
                    clientId: n,
                    realm: i,
                    target: o,
                    tokenType: d || l.hO.BEARER
                };
                if (u && (C.userAssertionHash = u), h && (C.refreshOn = h.toString()), p && (C.requestedClaims = p, C.requestedClaimsHash = m), C.tokenType ? .toLowerCase() !== l.hO.BEARER.toLowerCase()) switch (C.credentialType = l.d3.ACCESS_TOKEN_WITH_AUTH_SCHEME, C.tokenType) {
                    case l.hO.POP:
                        let f = eh(r, c);
                        if (!f ? .cnf ? .kid) throw ea(Y);
                        C.keyId = f.cnf.kid;
                        break;
                    case l.hO.SSH:
                        C.keyId = g
                }
                return C
            }

            function ef(e, t, r, n, i, o, a) {
                let s = {
                    credentialType: l.d3.REFRESH_TOKEN,
                    homeAccountId: e,
                    environment: t,
                    clientId: n,
                    secret: r
                };
                return o && (s.userAssertionHash = o), i && (s.familyId = i), a && (s.expiresOn = a.toString()), s
            }

            function ey(e) {
                return e.hasOwnProperty("homeAccountId") && e.hasOwnProperty("environment") && e.hasOwnProperty("credentialType") && e.hasOwnProperty("clientId") && e.hasOwnProperty("secret")
            }

            function eT(e) {
                return !!e && ey(e) && e.hasOwnProperty("realm") && e.hasOwnProperty("target") && (e.credentialType === l.d3.ACCESS_TOKEN || e.credentialType === l.d3.ACCESS_TOKEN_WITH_AUTH_SCHEME)
            }

            function eI(e) {
                return !!e && ey(e) && e.hasOwnProperty("realm") && e.credentialType === l.d3.ID_TOKEN
            }

            function eA(e) {
                return !!e && ey(e) && e.credentialType === l.d3.REFRESH_TOKEN
            }

            function ev() {
                return eu() + l.QU.REFRESH_TIME_SECONDS
            }

            function ew(e, t, r) {
                e.authorization_endpoint = t.authorization_endpoint, e.token_endpoint = t.token_endpoint, e.end_session_endpoint = t.end_session_endpoint, e.issuer = t.issuer, e.endpointsFromNetwork = r, e.jwks_uri = t.jwks_uri
            }

            function eE(e, t, r) {
                e.aliases = t.aliases, e.preferred_cache = t.preferred_cache, e.preferred_network = t.preferred_network, e.aliasesFromNetwork = r
            }

            function e_(e) {
                return e.expiresAt <= eu()
            }
            let eS = "redirect_uri_empty",
                ek = "claims_request_parsing_error",
                eR = "authority_uri_insecure",
                eb = "url_parse_error",
                eO = "empty_url_error",
                eN = "empty_input_scopes_error",
                eP = "invalid_prompt_value",
                eM = "invalid_claims",
                eq = "token_request_empty",
                eU = "logout_request_empty",
                eH = "invalid_code_challenge_method",
                eL = "pkce_params_missing",
                eD = "invalid_cloud_discovery_metadata",
                eK = "invalid_authority_metadata",
                ex = "untrusted_authority",
                eF = "missing_ssh_jwk",
                eB = "missing_ssh_kid",
                eG = "missing_nonce_authentication_header",
                e$ = "invalid_authentication_header",
                ez = "cannot_set_OIDCOptions",
                eQ = "cannot_allow_native_broker",
                eV = "authority_mismatch",
                eY = {
                    [eS]: "A redirect URI is required for all calls, and none has been set.",
                    [ek]: "Could not parse the given claims request object.",
                    [eR]: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options",
                    [eb]: "URL could not be parsed into appropriate segments.",
                    [eO]: "URL was empty or null.",
                    [eN]: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token.",
                    [eP]: "Please see here for valid configuration options: https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_common.html#commonauthorizationurlrequest",
                    [eM]: "Given claims parameter must be a stringified JSON object.",
                    [eq]: "Token request was empty and not found in cache.",
                    [eU]: "The logout request was null or undefined.",
                    [eH]: 'code_challenge_method passed is invalid. Valid values are "plain" and "S256".',
                    [eL]: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request",
                    [eD]: "Invalid cloudDiscoveryMetadata provided. Must be a stringified JSON object containing tenant_discovery_endpoint and metadata fields",
                    [eK]: "Invalid authorityMetadata provided. Must by a stringified JSON object containing authorization_endpoint, token_endpoint, issuer fields.",
                    [ex]: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter.",
                    [eF]: "Missing sshJwk in SSH certificate request. A stringified JSON Web Key is required when using the SSH authentication scheme.",
                    [eB]: "Missing sshKid in SSH certificate request. A string that uniquely identifies the public SSH key is required when using the SSH authentication scheme.",
                    [eG]: "Unable to find an authentication header containing server nonce. Either the Authentication-Info or WWW-Authenticate headers must be present in order to obtain a server nonce.",
                    [e$]: "Invalid authentication header provided",
                    [ez]: "Cannot set OIDCOptions parameter. Please change the protocol mode to OIDC or use a non-Microsoft authority.",
                    [eQ]: "Cannot set allowNativeBroker parameter to true when not in AAD protocol mode.",
                    [eV]: "Authority mismatch error. Authority provided in login request or PublicClientApplication config does not match the environment of the provided account. Please use a matching account or make an interactive request to login to this authority."
                };
            eY[eS], eY[ek], eY[eR], eY[eb], eY[eO], eY[eN], eY[eP], eY[eM], eY[eq], eY[eU], eY[eH], eY[eL], eY[eD], eY[eK], eY[ex], eY[eF], eY[eB], eY[eG], eY[e$], eY[ez], eY[eQ], eY[eV];
            class eW extends g.l4 {
                constructor(e) {
                    super(e, eY[e]), this.name = "ClientConfigurationError", Object.setPrototypeOf(this, eW.prototype)
                }
            }

            function ej(e) {
                return new eW(e)
            }
            class eJ {
                static isEmptyObj(e) {
                    if (e) try {
                        let t = JSON.parse(e);
                        return 0 === Object.keys(t).length
                    } catch (e) {}
                    return !0
                }
                static startsWith(e, t) {
                    return 0 === e.indexOf(t)
                }
                static endsWith(e, t) {
                    return e.length >= t.length && e.lastIndexOf(t) === e.length - t.length
                }
                static queryStringToObject(e) {
                    let t = {},
                        r = e.split("&"),
                        n = e => decodeURIComponent(e.replace(/\+/g, " "));
                    return r.forEach(e => {
                        if (e.trim()) {
                            let [r, i] = e.split(/=(.+)/g, 2);
                            r && i && (t[n(r)] = n(i))
                        }
                    }), t
                }
                static trimArrayEntries(e) {
                    return e.map(e => e.trim())
                }
                static removeEmptyStringsFromArray(e) {
                    return e.filter(e => !!e)
                }
                static jsonParseHelper(e) {
                    try {
                        return JSON.parse(e)
                    } catch (e) {
                        return null
                    }
                }
                static matchPattern(e, t) {
                    return new RegExp(e.replace(/\\/g, "\\\\").replace(/\*/g, "[^ ]*").replace(/\?/g, "\\?")).test(t)
                }
            }
            class eZ {
                constructor(e) {
                    let t = e ? eJ.trimArrayEntries([...e]) : [],
                        r = t ? eJ.removeEmptyStringsFromArray(t) : [];
                    this.validateInputScopes(r), this.scopes = new Set, r.forEach(e => this.scopes.add(e))
                }
                static fromString(e) {
                    return new eZ((e || l.gT.EMPTY_STRING).split(" "))
                }
                static createSearchScopes(e) {
                    let t = new eZ(e);
                    return t.containsOnlyOIDCScopes() ? t.removeScope(l.gT.OFFLINE_ACCESS_SCOPE) : t.removeOIDCScopes(), t
                }
                validateInputScopes(e) {
                    if (!e || e.length < 1) throw ej(eN)
                }
                containsScope(e) {
                    let t = new eZ(this.printScopesLowerCase().split(" "));
                    return !!e && t.scopes.has(e.toLowerCase())
                }
                containsScopeSet(e) {
                    return !!e && !(e.scopes.size <= 0) && this.scopes.size >= e.scopes.size && e.asArray().every(e => this.containsScope(e))
                }
                containsOnlyOIDCScopes() {
                    let e = 0;
                    return l.$f.forEach(t => {
                        this.containsScope(t) && (e += 1)
                    }), this.scopes.size === e
                }
                appendScope(e) {
                    e && this.scopes.add(e.trim())
                }
                appendScopes(e) {
                    try {
                        e.forEach(e => this.appendScope(e))
                    } catch (e) {
                        throw ea(M)
                    }
                }
                removeScope(e) {
                    if (!e) throw ea(P);
                    this.scopes.delete(e.trim())
                }
                removeOIDCScopes() {
                    l.$f.forEach(e => {
                        this.scopes.delete(e)
                    })
                }
                unionScopeSets(e) {
                    if (!e) throw ea(q);
                    let t = new Set;
                    return e.scopes.forEach(e => t.add(e.toLowerCase())), this.scopes.forEach(e => t.add(e.toLowerCase())), t
                }
                intersectingScopeSets(e) {
                    if (!e) throw ea(q);
                    e.containsOnlyOIDCScopes() || e.removeOIDCScopes();
                    let t = this.unionScopeSets(e),
                        r = e.getScopeCount(),
                        n = this.getScopeCount();
                    return t.size < n + r
                }
                getScopeCount() {
                    return this.scopes.size
                }
                asArray() {
                    let e = [];
                    return this.scopes.forEach(t => e.push(t)), e
                }
                printScopes() {
                    return this.scopes ? this.asArray().join(" ") : l.gT.EMPTY_STRING
                }
                printScopesLowerCase() {
                    return this.printScopes().toLowerCase()
                }
            }

            function eX(e, t) {
                if (!e) throw ea(m);
                try {
                    let r = t(e);
                    return JSON.parse(r)
                } catch (e) {
                    throw ea(p)
                }
            }

            function e0(e) {
                if (!e) throw ea(p);
                let t = e.split(l.Bv.CLIENT_INFO_SEPARATOR, 2);
                return {
                    uid: t[0],
                    utid: t.length < 2 ? l.gT.EMPTY_STRING : t[1]
                }
            }

            function e1(e, t) {
                return !!e && !!t && e === t.split(".")[1]
            }

            function e2(e, t, r, n) {
                if (!n) return {
                    tenantId: r,
                    localAccountId: t,
                    isHomeTenant: e1(r, e)
                }; {
                    let {
                        oid: t,
                        sub: r,
                        tid: i,
                        name: o,
                        tfp: a,
                        acr: s
                    } = n, c = i || a || s || "";
                    return {
                        tenantId: c,
                        localAccountId: t || r || "",
                        name: o,
                        isHomeTenant: e1(c, e)
                    }
                }
            }

            function e4(e, t, r, n) {
                let i = e;
                if (t) {
                    let {
                        isHomeTenant: r,
                        ...n
                    } = t;
                    i = { ...e,
                        ...n
                    }
                }
                if (r) {
                    let {
                        isHomeTenant: t,
                        ...o
                    } = e2(e.homeAccountId, e.localAccountId, e.tenantId, r);
                    i = { ...i,
                        ...o,
                        idTokenClaims: r,
                        idToken: n
                    }
                }
                return i
            }
            let e3 = {
                Default: 0,
                Adfs: 1,
                Dsts: 2,
                Ciam: 3
            };

            function e6(e) {
                return e && (e.tid || e.tfp || e.acr) || null
            }
            class e5 {
                generateAccountId() {
                    return [this.homeAccountId, this.environment].join(l.Bv.CACHE_KEY_SEPARATOR).toLowerCase()
                }
                generateAccountKey() {
                    return e5.generateAccountCacheKey({
                        homeAccountId: this.homeAccountId,
                        environment: this.environment,
                        tenantId: this.realm,
                        username: this.username,
                        localAccountId: this.localAccountId
                    })
                }
                getAccountInfo() {
                    return {
                        homeAccountId: this.homeAccountId,
                        environment: this.environment,
                        tenantId: this.realm,
                        username: this.username,
                        localAccountId: this.localAccountId,
                        name: this.name,
                        nativeAccountId: this.nativeAccountId,
                        authorityType: this.authorityType,
                        tenantProfiles: new Map((this.tenantProfiles || []).map(e => [e.tenantId, e]))
                    }
                }
                isSingleTenant() {
                    return !this.tenantProfiles
                }
                static generateAccountCacheKey(e) {
                    let t = e.homeAccountId.split(".")[1];
                    return [e.homeAccountId, e.environment || "", t || e.tenantId || ""].join(l.Bv.CACHE_KEY_SEPARATOR).toLowerCase()
                }
                static createAccount(e, t, r) {
                    let n;
                    let i = new e5;
                    t.authorityType === e3.Adfs ? i.authorityType = l.iR.ADFS_ACCOUNT_TYPE : t.protocolMode === d.AAD ? i.authorityType = l.iR.MSSTS_ACCOUNT_TYPE : i.authorityType = l.iR.GENERIC_ACCOUNT_TYPE, e.clientInfo && r && (n = eX(e.clientInfo, r)), i.clientInfo = e.clientInfo, i.homeAccountId = e.homeAccountId, i.nativeAccountId = e.nativeAccountId;
                    let o = e.environment || t && t.getPreferredCache();
                    if (!o) throw ea(x);
                    i.environment = o, i.realm = n ? .utid || e6(e.idTokenClaims) || "", i.localAccountId = n ? .uid || e.idTokenClaims ? .oid || e.idTokenClaims ? .sub || "";
                    let a = e.idTokenClaims ? .preferred_username || e.idTokenClaims ? .upn,
                        s = e.idTokenClaims ? .emails ? e.idTokenClaims.emails[0] : null;
                    if (i.username = a || s || "", i.name = e.idTokenClaims ? .name || "", i.cloudGraphHostName = e.cloudGraphHostName, i.msGraphHost = e.msGraphHost, e.tenantProfiles) i.tenantProfiles = e.tenantProfiles;
                    else {
                        let t = e2(e.homeAccountId, i.localAccountId, i.realm, e.idTokenClaims);
                        i.tenantProfiles = [t]
                    }
                    return i
                }
                static createFromAccountInfo(e, t, r) {
                    let n = new e5;
                    return n.authorityType = e.authorityType || l.iR.GENERIC_ACCOUNT_TYPE, n.homeAccountId = e.homeAccountId, n.localAccountId = e.localAccountId, n.nativeAccountId = e.nativeAccountId, n.realm = e.tenantId, n.environment = e.environment, n.username = e.username, n.name = e.name, n.cloudGraphHostName = t, n.msGraphHost = r, n.tenantProfiles = Array.from(e.tenantProfiles ? .values() || []), n
                }
                static generateHomeAccountId(e, t, r, n, i) {
                    if (!(t === e3.Adfs || t === e3.Dsts)) {
                        if (e) try {
                            let t = eX(e, n.base64Decode);
                            if (t.uid && t.utid) return `${t.uid}.${t.utid}`
                        } catch (e) {}
                        r.warning("No client info in response")
                    }
                    return i ? .sub || ""
                }
                static isAccountEntity(e) {
                    return !!e && e.hasOwnProperty("homeAccountId") && e.hasOwnProperty("environment") && e.hasOwnProperty("realm") && e.hasOwnProperty("localAccountId") && e.hasOwnProperty("username") && e.hasOwnProperty("authorityType")
                }
                static accountInfoIsEqual(e, t, r) {
                    if (!e || !t) return !1;
                    let n = !0;
                    if (r) {
                        let r = e.idTokenClaims || {},
                            i = t.idTokenClaims || {};
                        n = r.iat === i.iat && r.nonce === i.nonce
                    }
                    return e.homeAccountId === t.homeAccountId && e.localAccountId === t.localAccountId && e.username === t.username && e.tenantId === t.tenantId && e.environment === t.environment && e.nativeAccountId === t.nativeAccountId && n
                }
            }

            function e8(e) {
                return e.startsWith("#/") ? e.substring(2) : e.startsWith("#") || e.startsWith("?") ? e.substring(1) : e
            }

            function e9(e) {
                if (!e || 0 > e.indexOf("=")) return null;
                try {
                    let t = e8(e),
                        r = Object.fromEntries(new URLSearchParams(t));
                    if (r.code || r.error || r.error_description || r.state) return r
                } catch (e) {
                    throw ea(A)
                }
                return null
            }
            class e7 {
                get urlString() {
                    return this._urlString
                }
                constructor(e) {
                    if (this._urlString = e, !this._urlString) throw ej(eO);
                    e.includes("#") || (this._urlString = e7.canonicalizeUri(e))
                }
                static canonicalizeUri(e) {
                    if (e) {
                        let t = e.toLowerCase();
                        return eJ.endsWith(t, "?") ? t = t.slice(0, -1) : eJ.endsWith(t, "?/") && (t = t.slice(0, -2)), eJ.endsWith(t, "/") || (t += "/"), t
                    }
                    return e
                }
                validateAsUri() {
                    let e;
                    try {
                        e = this.getUrlComponents()
                    } catch (e) {
                        throw ej(eb)
                    }
                    if (!e.HostNameAndPort || !e.PathSegments) throw ej(eb);
                    if (!e.Protocol || "https:" !== e.Protocol.toLowerCase()) throw ej(eR)
                }
                static appendQueryString(e, t) {
                    return t ? 0 > e.indexOf("?") ? `${e}?${t}` : `${e}&${t}` : e
                }
                static removeHashFromUrl(e) {
                    return e7.canonicalizeUri(e.split("#")[0])
                }
                replaceTenantPath(e) {
                    let t = this.getUrlComponents(),
                        r = t.PathSegments;
                    return e && 0 !== r.length && (r[0] === l.Nb.COMMON || r[0] === l.Nb.ORGANIZATIONS) && (r[0] = e), e7.constructAuthorityUriFromObject(t)
                }
                getUrlComponents() {
                    let e = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?"),
                        t = this.urlString.match(e);
                    if (!t) throw ej(eb);
                    let r = {
                            Protocol: t[1],
                            HostNameAndPort: t[4],
                            AbsolutePath: t[5],
                            QueryString: t[7]
                        },
                        n = r.AbsolutePath.split("/");
                    return n = n.filter(e => e && e.length > 0), r.PathSegments = n, r.QueryString && r.QueryString.endsWith("/") && (r.QueryString = r.QueryString.substring(0, r.QueryString.length - 1)), r
                }
                static getDomainFromUrl(e) {
                    let t = RegExp("^([^:/?#]+://)?([^/?#]*)"),
                        r = e.match(t);
                    if (!r) throw ej(eb);
                    return r[2]
                }
                static getAbsoluteUrl(e, t) {
                    if (e[0] === l.gT.FORWARD_SLASH) {
                        let r = new e7(t).getUrlComponents();
                        return r.Protocol + "//" + r.HostNameAndPort + e
                    }
                    return e
                }
                static constructAuthorityUriFromObject(e) {
                    return new e7(e.Protocol + "//" + e.HostNameAndPort + "/" + e.PathSegments.join("/"))
                }
                static hashContainsKnownProperties(e) {
                    return !!e9(e)
                }
            }
            let te = {
                    "login.microsoftonline.com": {
                        token_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/token",
                        jwks_uri: "https://login.microsoftonline.com/{tenantid}/discovery/v2.0/keys",
                        issuer: "https://login.microsoftonline.com/{tenantid}/v2.0",
                        authorization_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/authorize",
                        end_session_endpoint: "https://login.microsoftonline.com/{tenantid}/oauth2/v2.0/logout"
                    },
                    "login.chinacloudapi.cn": {
                        token_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/token",
                        jwks_uri: "https://login.chinacloudapi.cn/{tenantid}/discovery/v2.0/keys",
                        issuer: "https://login.partner.microsoftonline.cn/{tenantid}/v2.0",
                        authorization_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/authorize",
                        end_session_endpoint: "https://login.chinacloudapi.cn/{tenantid}/oauth2/v2.0/logout"
                    },
                    "login.microsoftonline.us": {
                        token_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/token",
                        jwks_uri: "https://login.microsoftonline.us/{tenantid}/discovery/v2.0/keys",
                        issuer: "https://login.microsoftonline.us/{tenantid}/v2.0",
                        authorization_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/authorize",
                        end_session_endpoint: "https://login.microsoftonline.us/{tenantid}/oauth2/v2.0/logout"
                    }
                },
                tt = {
                    metadata: [{
                        preferred_network: "login.microsoftonline.com",
                        preferred_cache: "login.windows.net",
                        aliases: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"]
                    }, {
                        preferred_network: "login.partner.microsoftonline.cn",
                        preferred_cache: "login.partner.microsoftonline.cn",
                        aliases: ["login.partner.microsoftonline.cn", "login.chinacloudapi.cn"]
                    }, {
                        preferred_network: "login.microsoftonline.de",
                        preferred_cache: "login.microsoftonline.de",
                        aliases: ["login.microsoftonline.de"]
                    }, {
                        preferred_network: "login.microsoftonline.us",
                        preferred_cache: "login.microsoftonline.us",
                        aliases: ["login.microsoftonline.us", "login.usgovcloudapi.net"]
                    }, {
                        preferred_network: "login-us.microsoftonline.com",
                        preferred_cache: "login-us.microsoftonline.com",
                        aliases: ["login-us.microsoftonline.com"]
                    }]
                },
                tr = new Set;

            function tn(e, t, r, n) {
                if (n ? .trace(`getAliasesFromMetadata called with source: ${r}`), e && t) {
                    let i = ti(t, e);
                    if (i) return n ? .trace(`getAliasesFromMetadata: found cloud discovery metadata in ${r}, returning aliases`), i.aliases;
                    n ? .trace(`getAliasesFromMetadata: did not find cloud discovery metadata in ${r}`)
                }
                return null
            }

            function ti(e, t) {
                for (let r = 0; r < e.length; r++) {
                    let n = e[r];
                    if (n.aliases.includes(t)) return n
                }
                return null
            }
            tt.metadata.forEach(e => {
                e.aliases.forEach(e => {
                    tr.add(e)
                })
            });
            let to = "cache_quota_exceeded",
                ta = "cache_error_unknown",
                ts = {
                    [to]: "Exceeded cache storage capacity.",
                    [ta]: "Unexpected error occurred when using cache storage."
                };
            class tc extends Error {
                constructor(e, t) {
                    let r = t || (ts[e] ? ts[e] : ts[ta]);
                    super(`${e}: ${r}`), Object.setPrototypeOf(this, tc.prototype), this.name = "CacheError", this.errorCode = e, this.errorMessage = r
                }
            }

            function tl(e) {
                return e instanceof Error ? "QuotaExceededError" === e.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.name || e.message.includes("exceeded the quota") ? new tc(to) : new tc(e.name, e.message) : new tc(ta)
            }
            class th {
                constructor(e, t, r, n) {
                    this.clientId = e, this.cryptoImpl = t, this.commonLogger = r.clone(ec, el), this.staticAuthorityOptions = n
                }
                getAllAccounts(e, t) {
                    return this.buildTenantProfiles(this.getAccountsFilteredBy(t || {}, e), e, t)
                }
                getAccountInfoFilteredBy(e, t) {
                    let r = this.getAllAccounts(t, e);
                    return r.length > 1 ? r.sort(e => e.idTokenClaims ? -1 : 1)[0] : 1 === r.length ? r[0] : null
                }
                getBaseAccountInfo(e, t) {
                    let r = this.getAccountsFilteredBy(e, t);
                    return r.length > 0 ? r[0].getAccountInfo() : null
                }
                buildTenantProfiles(e, t, r) {
                    return e.flatMap(e => this.getTenantProfilesFromAccountEntity(e, t, r ? .tenantId, r))
                }
                getTenantedAccountInfoByFilter(e, t, r, n, i) {
                    let o;
                    if (i && !this.tenantProfileMatchesFilter(r, i)) return null;
                    let a = this.getIdToken(e, n, t, r.tenantId);
                    return a && (o = eh(a.secret, this.cryptoImpl.base64Decode), !this.idTokenClaimsMatchTenantProfileFilter(o, i)) ? null : e4(e, r, o, a ? .secret)
                }
                getTenantProfilesFromAccountEntity(e, t, r, n) {
                    let i = e.getAccountInfo(),
                        o = i.tenantProfiles || new Map,
                        a = this.getTokenKeys();
                    if (r) {
                        let e = o.get(r);
                        if (!e) return [];
                        o = new Map([
                            [r, e]
                        ])
                    }
                    let s = [];
                    return o.forEach(e => {
                        let r = this.getTenantedAccountInfoByFilter(i, a, e, t, n);
                        r && s.push(r)
                    }), s
                }
                tenantProfileMatchesFilter(e, t) {
                    return (!t.localAccountId || !!this.matchLocalAccountIdFromTenantProfile(e, t.localAccountId)) && (!t.name || e.name === t.name) && (void 0 === t.isHomeTenant || e.isHomeTenant === t.isHomeTenant)
                }
                idTokenClaimsMatchTenantProfileFilter(e, t) {
                    return !t || (!t.localAccountId || !!this.matchLocalAccountIdFromTokenClaims(e, t.localAccountId)) && (!t.loginHint || !!this.matchLoginHintFromTokenClaims(e, t.loginHint)) && (!t.username || !!this.matchUsername(e.preferred_username, t.username)) && (!t.name || !!this.matchName(e, t.name)) && (!t.sid || !!this.matchSid(e, t.sid))
                }
                async saveCacheRecord(e, t, r) {
                    if (!e) throw ea(K);
                    try {
                        e.account && this.setAccount(e.account, t), e.idToken && r ? .idToken !== !1 && this.setIdTokenCredential(e.idToken, t), e.accessToken && r ? .accessToken !== !1 && await this.saveAccessToken(e.accessToken, t), e.refreshToken && r ? .refreshToken !== !1 && this.setRefreshTokenCredential(e.refreshToken, t), e.appMetadata && this.setAppMetadata(e.appMetadata, t)
                    } catch (e) {
                        if (this.commonLogger ? .error("CacheManager.saveCacheRecord: failed"), e instanceof g.l4) throw e;
                        throw tl(e)
                    }
                }
                async saveAccessToken(e, t) {
                    let r = {
                            clientId: e.clientId,
                            credentialType: e.credentialType,
                            environment: e.environment,
                            homeAccountId: e.homeAccountId,
                            realm: e.realm,
                            tokenType: e.tokenType,
                            requestedClaimsHash: e.requestedClaimsHash
                        },
                        n = this.getTokenKeys(),
                        i = eZ.fromString(e.target);
                    n.accessToken.forEach(e => {
                        if (!this.accessTokenKeyMatchesFilter(e, r, !1)) return;
                        let n = this.getAccessTokenCredential(e, t);
                        n && this.credentialMatchesFilter(n, r) && eZ.fromString(n.target).intersectingScopeSets(i) && this.removeAccessToken(e, t)
                    }), this.setAccessTokenCredential(e, t)
                }
                getAccountsFilteredBy(e, t) {
                    let r = this.getAccountKeys(),
                        n = [];
                    return r.forEach(r => {
                        if (!this.isAccountKey(r, e.homeAccountId)) return;
                        let i = this.getAccount(r, t, this.commonLogger);
                        if (!i || e.homeAccountId && !this.matchHomeAccountId(i, e.homeAccountId) || e.username && !this.matchUsername(i.username, e.username) || e.environment && !this.matchEnvironment(i, e.environment) || e.realm && !this.matchRealm(i, e.realm) || e.nativeAccountId && !this.matchNativeAccountId(i, e.nativeAccountId) || e.authorityType && !this.matchAuthorityType(i, e.authorityType)) return;
                        let o = {
                                localAccountId: e ? .localAccountId,
                                name: e ? .name
                            },
                            a = i.tenantProfiles ? .filter(e => this.tenantProfileMatchesFilter(e, o));
                        a && 0 === a.length || n.push(i)
                    }), n
                }
                isAccountKey(e, t, r) {
                    return !(e.split(l.Bv.CACHE_KEY_SEPARATOR).length < 3) && (!t || !!e.toLowerCase().includes(t.toLowerCase())) && (!r || !!e.toLowerCase().includes(r.toLowerCase()))
                }
                isCredentialKey(e) {
                    if (e.split(l.Bv.CACHE_KEY_SEPARATOR).length < 6) return !1;
                    let t = e.toLowerCase();
                    if (-1 === t.indexOf(l.d3.ID_TOKEN.toLowerCase()) && -1 === t.indexOf(l.d3.ACCESS_TOKEN.toLowerCase()) && -1 === t.indexOf(l.d3.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase()) && -1 === t.indexOf(l.d3.REFRESH_TOKEN.toLowerCase())) return !1;
                    if (t.indexOf(l.d3.REFRESH_TOKEN.toLowerCase()) > -1) {
                        let e = `${l.d3.REFRESH_TOKEN}${l.Bv.CACHE_KEY_SEPARATOR}${this.clientId}${l.Bv.CACHE_KEY_SEPARATOR}`,
                            r = `${l.d3.REFRESH_TOKEN}${l.Bv.CACHE_KEY_SEPARATOR}${l.ch}${l.Bv.CACHE_KEY_SEPARATOR}`;
                        if (-1 === t.indexOf(e.toLowerCase()) && -1 === t.indexOf(r.toLowerCase())) return !1
                    } else if (-1 === t.indexOf(this.clientId.toLowerCase())) return !1;
                    return !0
                }
                credentialMatchesFilter(e, t) {
                    return (!t.clientId || !!this.matchClientId(e, t.clientId)) && (!t.userAssertionHash || !!this.matchUserAssertionHash(e, t.userAssertionHash)) && ("string" != typeof t.homeAccountId || !!this.matchHomeAccountId(e, t.homeAccountId)) && (!t.environment || !!this.matchEnvironment(e, t.environment)) && (!t.realm || !!this.matchRealm(e, t.realm)) && (!t.credentialType || !!this.matchCredentialType(e, t.credentialType)) && (!t.familyId || !!this.matchFamilyId(e, t.familyId)) && (!t.target || !!this.matchTarget(e, t.target)) && (!t.requestedClaimsHash && !e.requestedClaimsHash || e.requestedClaimsHash === t.requestedClaimsHash) && (e.credentialType !== l.d3.ACCESS_TOKEN_WITH_AUTH_SCHEME || (!t.tokenType || !!this.matchTokenType(e, t.tokenType)) && (t.tokenType !== l.hO.SSH || !t.keyId || !!this.matchKeyId(e, t.keyId)))
                }
                getAppMetadataFilteredBy(e) {
                    let t = this.getKeys(),
                        r = {};
                    return t.forEach(t => {
                        if (!this.isAppMetadata(t)) return;
                        let n = this.getAppMetadata(t);
                        n && (!e.environment || this.matchEnvironment(n, e.environment)) && (!e.clientId || this.matchClientId(n, e.clientId)) && (r[t] = n)
                    }), r
                }
                getAuthorityMetadataByAlias(e) {
                    let t = this.getAuthorityMetadataKeys(),
                        r = null;
                    return t.forEach(t => {
                        if (!this.isAuthorityMetadata(t) || -1 === t.indexOf(this.clientId)) return;
                        let n = this.getAuthorityMetadata(t);
                        n && -1 !== n.aliases.indexOf(e) && (r = n)
                    }), r
                }
                async removeAllAccounts(e) {
                    let t = this.getAccountKeys(),
                        r = [];
                    t.forEach(t => {
                        r.push(this.removeAccount(t, e))
                    }), await Promise.all(r)
                }
                async removeAccount(e, t) {
                    let r = this.getAccount(e, t, this.commonLogger);
                    r && (await this.removeAccountContext(r, t), this.removeItem(e, t))
                }
                async removeAccountContext(e, t) {
                    let r = this.getTokenKeys(),
                        n = e.generateAccountId();
                    r.idToken.forEach(e => {
                        0 === e.indexOf(n) && this.removeIdToken(e, t)
                    }), r.accessToken.forEach(e => {
                        0 === e.indexOf(n) && this.removeAccessToken(e, t)
                    }), r.refreshToken.forEach(e => {
                        0 === e.indexOf(n) && this.removeRefreshToken(e, t)
                    }), this.getKeys().forEach(e => {
                        e.includes(n) && this.removeItem(e, t)
                    })
                }
                updateOutdatedCachedAccount(e, t, r, n) {
                    if (t && t.isSingleTenant()) {
                        this.commonLogger ? .verbose("updateOutdatedCachedAccount: Found a single-tenant (outdated) account entity in the cache, migrating to multi-tenant account entity");
                        let i = this.getAccountKeys().filter(e => e.startsWith(t.homeAccountId)),
                            o = [];
                        i.forEach(e => {
                            let t = this.getCachedAccountEntity(e, r);
                            t && o.push(t)
                        });
                        let a = o.find(e => e1(e.realm, e.homeAccountId)) || o[0];
                        a.tenantProfiles = o.map(e => ({
                            tenantId: e.realm,
                            localAccountId: e.localAccountId,
                            name: e.name,
                            isHomeTenant: e1(e.realm, e.homeAccountId)
                        }));
                        let s = th.toObject(new e5, { ...a
                            }),
                            c = s.generateAccountKey();
                        return i.forEach(t => {
                            t !== c && this.removeOutdatedAccount(e, r)
                        }), this.setAccount(s, r), n ? .verbose("Updated an outdated account entity in the cache"), s
                    }
                    return t
                }
                removeAccessToken(e, t) {
                    let r = this.getAccessTokenCredential(e, t);
                    if (this.removeItem(e, t), !r || r.credentialType.toLowerCase() !== l.d3.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase() || r.tokenType !== l.hO.POP) return;
                    let n = r.keyId;
                    n && this.cryptoImpl.removeTokenBindingKey(n).catch(() => {
                        this.commonLogger.error("Binding key could not be removed")
                    })
                }
                removeAppMetadata(e) {
                    return this.getKeys().forEach(t => {
                        this.isAppMetadata(t) && this.removeItem(t, e)
                    }), !0
                }
                readAccountFromCache(e, t) {
                    let r = e5.generateAccountCacheKey(e);
                    return this.getAccount(r, t, this.commonLogger)
                }
                getIdToken(e, t, r, n, i) {
                    this.commonLogger.trace("CacheManager - getIdToken called");
                    let o = {
                            homeAccountId: e.homeAccountId,
                            environment: e.environment,
                            credentialType: l.d3.ID_TOKEN,
                            clientId: this.clientId,
                            realm: n
                        },
                        a = this.getIdTokensByFilter(o, t, r),
                        s = a.size;
                    if (s < 1) return this.commonLogger.info("CacheManager:getIdToken - No token found"), null;
                    if (s > 1) {
                        let r = a;
                        if (!n) {
                            let t = new Map;
                            a.forEach((r, n) => {
                                r.realm === e.tenantId && t.set(n, r)
                            });
                            let n = t.size;
                            if (n < 1) return this.commonLogger.info("CacheManager:getIdToken - Multiple ID tokens found for account but none match account entity tenant id, returning first result"), a.values().next().value;
                            if (1 === n) return this.commonLogger.info("CacheManager:getIdToken - Multiple ID tokens found for account, defaulting to home tenant profile"), t.values().next().value;
                            r = t
                        }
                        return this.commonLogger.info("CacheManager:getIdToken - Multiple matching ID tokens found, clearing them"), r.forEach((e, r) => {
                            this.removeIdToken(r, t)
                        }), i && t && i.addFields({
                            multiMatchedID: a.size
                        }, t), null
                    }
                    return this.commonLogger.info("CacheManager:getIdToken - Returning ID token"), a.values().next().value
                }
                getIdTokensByFilter(e, t, r) {
                    let n = r && r.idToken || this.getTokenKeys().idToken,
                        i = new Map;
                    return n.forEach(r => {
                        if (!this.idTokenKeyMatchesFilter(r, {
                                clientId: this.clientId,
                                ...e
                            })) return;
                        let n = this.getIdTokenCredential(r, t);
                        n && this.credentialMatchesFilter(n, e) && i.set(r, n)
                    }), i
                }
                idTokenKeyMatchesFilter(e, t) {
                    let r = e.toLowerCase();
                    return (!t.clientId || -1 !== r.indexOf(t.clientId.toLowerCase())) && (!t.homeAccountId || -1 !== r.indexOf(t.homeAccountId.toLowerCase()))
                }
                removeIdToken(e, t) {
                    this.removeItem(e, t)
                }
                removeRefreshToken(e, t) {
                    this.removeItem(e, t)
                }
                getAccessToken(e, t, r, n, i) {
                    this.commonLogger.trace("CacheManager - getAccessToken called");
                    let o = eZ.createSearchScopes(t.scopes),
                        a = t.authenticationScheme || l.hO.BEARER,
                        s = a && a.toLowerCase() !== l.hO.BEARER.toLowerCase() ? l.d3.ACCESS_TOKEN_WITH_AUTH_SCHEME : l.d3.ACCESS_TOKEN,
                        c = {
                            homeAccountId: e.homeAccountId,
                            environment: e.environment,
                            credentialType: s,
                            clientId: this.clientId,
                            realm: n || e.tenantId,
                            target: o,
                            tokenType: a,
                            keyId: t.sshKid,
                            requestedClaimsHash: t.requestedClaimsHash
                        },
                        h = r && r.accessToken || this.getTokenKeys().accessToken,
                        d = [];
                    h.forEach(e => {
                        if (this.accessTokenKeyMatchesFilter(e, c, !0)) {
                            let r = this.getAccessTokenCredential(e, t.correlationId);
                            r && this.credentialMatchesFilter(r, c) && d.push(r)
                        }
                    });
                    let u = d.length;
                    return u < 1 ? (this.commonLogger.info("CacheManager:getAccessToken - No token found"), null) : u > 1 ? (this.commonLogger.info("CacheManager:getAccessToken - Multiple access tokens found, clearing them"), d.forEach(e => {
                        this.removeAccessToken(ep(e), t.correlationId)
                    }), i && t.correlationId && i.addFields({
                        multiMatchedAT: d.length
                    }, t.correlationId), null) : (this.commonLogger.info("CacheManager:getAccessToken - Returning access token"), d[0])
                }
                accessTokenKeyMatchesFilter(e, t, r) {
                    let n = e.toLowerCase();
                    if (t.clientId && -1 === n.indexOf(t.clientId.toLowerCase()) || t.homeAccountId && -1 === n.indexOf(t.homeAccountId.toLowerCase()) || t.realm && -1 === n.indexOf(t.realm.toLowerCase()) || t.requestedClaimsHash && -1 === n.indexOf(t.requestedClaimsHash.toLowerCase())) return !1;
                    if (t.target) {
                        let e = t.target.asArray();
                        for (let t = 0; t < e.length; t++) {
                            if (r && !n.includes(e[t].toLowerCase())) return !1;
                            if (!r && n.includes(e[t].toLowerCase())) break
                        }
                    }
                    return !0
                }
                getAccessTokensByFilter(e, t) {
                    let r = this.getTokenKeys(),
                        n = [];
                    return r.accessToken.forEach(r => {
                        if (!this.accessTokenKeyMatchesFilter(r, e, !0)) return;
                        let i = this.getAccessTokenCredential(r, t);
                        i && this.credentialMatchesFilter(i, e) && n.push(i)
                    }), n
                }
                getRefreshToken(e, t, r, n, i) {
                    this.commonLogger.trace("CacheManager - getRefreshToken called");
                    let o = t ? l.ch : void 0,
                        a = {
                            homeAccountId: e.homeAccountId,
                            environment: e.environment,
                            credentialType: l.d3.REFRESH_TOKEN,
                            clientId: this.clientId,
                            familyId: o
                        },
                        s = n && n.refreshToken || this.getTokenKeys().refreshToken,
                        c = [];
                    s.forEach(e => {
                        if (this.refreshTokenKeyMatchesFilter(e, a)) {
                            let t = this.getRefreshTokenCredential(e, r);
                            t && this.credentialMatchesFilter(t, a) && c.push(t)
                        }
                    });
                    let h = c.length;
                    return h < 1 ? (this.commonLogger.info("CacheManager:getRefreshToken - No refresh token found."), null) : (h > 1 && i && r && i.addFields({
                        multiMatchedRT: h
                    }, r), this.commonLogger.info("CacheManager:getRefreshToken - returning refresh token"), c[0])
                }
                refreshTokenKeyMatchesFilter(e, t) {
                    let r = e.toLowerCase();
                    return (!t.familyId || -1 !== r.indexOf(t.familyId.toLowerCase())) && (!!t.familyId || !t.clientId || -1 !== r.indexOf(t.clientId.toLowerCase())) && (!t.homeAccountId || -1 !== r.indexOf(t.homeAccountId.toLowerCase()))
                }
                readAppMetadataFromCache(e) {
                    let t = {
                            environment: e,
                            clientId: this.clientId
                        },
                        r = this.getAppMetadataFilteredBy(t),
                        n = Object.keys(r).map(e => r[e]),
                        i = n.length;
                    if (i < 1) return null;
                    if (i > 1) throw ea(O);
                    return n[0]
                }
                isAppMetadataFOCI(e) {
                    let t = this.readAppMetadataFromCache(e);
                    return !!(t && t.familyId === l.ch)
                }
                matchHomeAccountId(e, t) {
                    return !!("string" == typeof e.homeAccountId && t === e.homeAccountId)
                }
                matchLocalAccountIdFromTokenClaims(e, t) {
                    return t === (e.oid || e.sub)
                }
                matchLocalAccountIdFromTenantProfile(e, t) {
                    return e.localAccountId === t
                }
                matchName(e, t) {
                    return !(t.toLowerCase() !== e.name ? .toLowerCase())
                }
                matchUsername(e, t) {
                    return !!(e && "string" == typeof e && t ? .toLowerCase() === e.toLowerCase())
                }
                matchUserAssertionHash(e, t) {
                    return !!(e.userAssertionHash && t === e.userAssertionHash)
                }
                matchEnvironment(e, t) {
                    if (this.staticAuthorityOptions) {
                        let r = function(e, t) {
                            let r;
                            let n = e.canonicalAuthority;
                            if (n) {
                                let i = new e7(n).getUrlComponents().HostNameAndPort;
                                r = tn(i, e.cloudDiscoveryMetadata ? .metadata, l.pQ.CONFIG, t) || tn(i, tt.metadata, l.pQ.HARDCODED_VALUES, t) || e.knownAuthorities
                            }
                            return r || []
                        }(this.staticAuthorityOptions, this.commonLogger);
                        if (r.includes(t) && r.includes(e.environment)) return !0
                    }
                    let r = this.getAuthorityMetadataByAlias(t);
                    return !!(r && r.aliases.indexOf(e.environment) > -1)
                }
                matchCredentialType(e, t) {
                    return e.credentialType && t.toLowerCase() === e.credentialType.toLowerCase()
                }
                matchClientId(e, t) {
                    return !!(e.clientId && t === e.clientId)
                }
                matchFamilyId(e, t) {
                    return !!(e.familyId && t === e.familyId)
                }
                matchRealm(e, t) {
                    return !(e.realm ? .toLowerCase() !== t.toLowerCase())
                }
                matchNativeAccountId(e, t) {
                    return !!(e.nativeAccountId && t === e.nativeAccountId)
                }
                matchLoginHintFromTokenClaims(e, t) {
                    return e.login_hint === t || e.preferred_username === t || e.upn === t
                }
                matchSid(e, t) {
                    return e.sid === t
                }
                matchAuthorityType(e, t) {
                    return !!(e.authorityType && t.toLowerCase() === e.authorityType.toLowerCase())
                }
                matchTarget(e, t) {
                    return (e.credentialType === l.d3.ACCESS_TOKEN || e.credentialType === l.d3.ACCESS_TOKEN_WITH_AUTH_SCHEME) && !!e.target && eZ.fromString(e.target).containsScopeSet(t)
                }
                matchTokenType(e, t) {
                    return !!(e.tokenType && e.tokenType === t)
                }
                matchKeyId(e, t) {
                    return !!(e.keyId && e.keyId === t)
                }
                isAppMetadata(e) {
                    return -1 !== e.indexOf(l.dg)
                }
                isAuthorityMetadata(e) {
                    return -1 !== e.indexOf(l.QU.CACHE_KEY)
                }
                generateAuthorityMetadataCacheKey(e) {
                    return `${l.QU.CACHE_KEY}-${this.clientId}-${e}`
                }
                static toObject(e, t) {
                    for (let r in t) e[r] = t[r];
                    return e
                }
            }
            class td extends th {
                setAccount() {
                    throw ea(er)
                }
                getAccount() {
                    throw ea(er)
                }
                getCachedAccountEntity() {
                    throw ea(er)
                }
                setIdTokenCredential() {
                    throw ea(er)
                }
                getIdTokenCredential() {
                    throw ea(er)
                }
                setAccessTokenCredential() {
                    throw ea(er)
                }
                getAccessTokenCredential() {
                    throw ea(er)
                }
                setRefreshTokenCredential() {
                    throw ea(er)
                }
                getRefreshTokenCredential() {
                    throw ea(er)
                }
                setAppMetadata() {
                    throw ea(er)
                }
                getAppMetadata() {
                    throw ea(er)
                }
                setServerTelemetry() {
                    throw ea(er)
                }
                getServerTelemetry() {
                    throw ea(er)
                }
                setAuthorityMetadata() {
                    throw ea(er)
                }
                getAuthorityMetadata() {
                    throw ea(er)
                }
                getAuthorityMetadataKeys() {
                    throw ea(er)
                }
                setThrottlingCache() {
                    throw ea(er)
                }
                getThrottlingCache() {
                    throw ea(er)
                }
                removeItem() {
                    throw ea(er)
                }
                getKeys() {
                    throw ea(er)
                }
                getAccountKeys() {
                    throw ea(er)
                }
                getTokenKeys() {
                    throw ea(er)
                }
                updateCredentialCacheKey() {
                    throw ea(er)
                }
                removeOutdatedAccount() {
                    throw ea(er)
                }
            }
            let tu = {
                    tokenRenewalOffsetSeconds: l.$A,
                    preventCorsPreflight: !1
                },
                tg = {
                    loggerCallback: () => {},
                    piiLoggingEnabled: !1,
                    logLevel: o.Info,
                    correlationId: l.gT.EMPTY_STRING
                },
                tp = {
                    claimsBasedCachingEnabled: !1
                },
                tm = {
                    async sendGetRequestAsync() {
                        throw ea(er)
                    },
                    async sendPostRequestAsync() {
                        throw ea(er)
                    }
                },
                tC = {
                    sku: l.gT.SKU,
                    version: el,
                    cpu: l.gT.EMPTY_STRING,
                    os: l.gT.EMPTY_STRING
                },
                tf = {
                    clientSecret: l.gT.EMPTY_STRING,
                    clientAssertion: void 0
                },
                ty = {
                    azureCloudInstance: u.None,
                    tenant: `${l.gT.DEFAULT_COMMON_TENANT}`
                },
                tT = {
                    application: {
                        appName: "",
                        appVersion: ""
                    }
                };

            function tI(e) {
                return e.authOptions.authority.options.protocolMode === d.OIDC
            }
            let tA = {
                    sendGetRequestAsync: () => Promise.reject(ea(er)),
                    sendPostRequestAsync: () => Promise.reject(ea(er))
                },
                tv = {
                    AcquireTokenByCode: "acquireTokenByCode",
                    AcquireTokenByRefreshToken: "acquireTokenByRefreshToken",
                    AcquireTokenSilent: "acquireTokenSilent",
                    AcquireTokenSilentAsync: "acquireTokenSilentAsync",
                    AcquireTokenPopup: "acquireTokenPopup",
                    AcquireTokenPreRedirect: "acquireTokenPreRedirect",
                    AcquireTokenRedirect: "acquireTokenRedirect",
                    CryptoOptsGetPublicKeyThumbprint: "cryptoOptsGetPublicKeyThumbprint",
                    CryptoOptsSignJwt: "cryptoOptsSignJwt",
                    SilentCacheClientAcquireToken: "silentCacheClientAcquireToken",
                    SilentIframeClientAcquireToken: "silentIframeClientAcquireToken",
                    AwaitConcurrentIframe: "awaitConcurrentIframe",
                    SilentRefreshClientAcquireToken: "silentRefreshClientAcquireToken",
                    SsoSilent: "ssoSilent",
                    StandardInteractionClientGetDiscoveredAuthority: "standardInteractionClientGetDiscoveredAuthority",
                    FetchAccountIdWithNativeBroker: "fetchAccountIdWithNativeBroker",
                    NativeInteractionClientAcquireToken: "nativeInteractionClientAcquireToken",
                    BaseClientCreateTokenRequestHeaders: "baseClientCreateTokenRequestHeaders",
                    NetworkClientSendPostRequestAsync: "networkClientSendPostRequestAsync",
                    RefreshTokenClientExecutePostToTokenEndpoint: "refreshTokenClientExecutePostToTokenEndpoint",
                    AuthorizationCodeClientExecutePostToTokenEndpoint: "authorizationCodeClientExecutePostToTokenEndpoint",
                    BrokerHandhshake: "brokerHandshake",
                    AcquireTokenByRefreshTokenInBroker: "acquireTokenByRefreshTokenInBroker",
                    AcquireTokenByBroker: "acquireTokenByBroker",
                    RefreshTokenClientExecuteTokenRequest: "refreshTokenClientExecuteTokenRequest",
                    RefreshTokenClientAcquireToken: "refreshTokenClientAcquireToken",
                    RefreshTokenClientAcquireTokenWithCachedRefreshToken: "refreshTokenClientAcquireTokenWithCachedRefreshToken",
                    RefreshTokenClientAcquireTokenByRefreshToken: "refreshTokenClientAcquireTokenByRefreshToken",
                    RefreshTokenClientCreateTokenRequestBody: "refreshTokenClientCreateTokenRequestBody",
                    AcquireTokenFromCache: "acquireTokenFromCache",
                    SilentFlowClientAcquireCachedToken: "silentFlowClientAcquireCachedToken",
                    SilentFlowClientGenerateResultFromCacheRecord: "silentFlowClientGenerateResultFromCacheRecord",
                    AcquireTokenBySilentIframe: "acquireTokenBySilentIframe",
                    InitializeBaseRequest: "initializeBaseRequest",
                    InitializeSilentRequest: "initializeSilentRequest",
                    InitializeClientApplication: "initializeClientApplication",
                    SilentIframeClientTokenHelper: "silentIframeClientTokenHelper",
                    SilentHandlerInitiateAuthRequest: "silentHandlerInitiateAuthRequest",
                    SilentHandlerMonitorIframeForHash: "silentHandlerMonitorIframeForHash",
                    SilentHandlerLoadFrame: "silentHandlerLoadFrame",
                    SilentHandlerLoadFrameSync: "silentHandlerLoadFrameSync",
                    StandardInteractionClientCreateAuthCodeClient: "standardInteractionClientCreateAuthCodeClient",
                    StandardInteractionClientGetClientConfiguration: "standardInteractionClientGetClientConfiguration",
                    StandardInteractionClientInitializeAuthorizationRequest: "standardInteractionClientInitializeAuthorizationRequest",
                    StandardInteractionClientInitializeAuthorizationCodeRequest: "standardInteractionClientInitializeAuthorizationCodeRequest",
                    GetAuthCodeUrl: "getAuthCodeUrl",
                    HandleCodeResponseFromServer: "handleCodeResponseFromServer",
                    HandleCodeResponse: "handleCodeResponse",
                    UpdateTokenEndpointAuthority: "updateTokenEndpointAuthority",
                    AuthClientAcquireToken: "authClientAcquireToken",
                    AuthClientExecuteTokenRequest: "authClientExecuteTokenRequest",
                    AuthClientCreateTokenRequestBody: "authClientCreateTokenRequestBody",
                    AuthClientCreateQueryString: "authClientCreateQueryString",
                    PopTokenGenerateCnf: "popTokenGenerateCnf",
                    PopTokenGenerateKid: "popTokenGenerateKid",
                    HandleServerTokenResponse: "handleServerTokenResponse",
                    DeserializeResponse: "deserializeResponse",
                    AuthorityFactoryCreateDiscoveredInstance: "authorityFactoryCreateDiscoveredInstance",
                    AuthorityResolveEndpointsAsync: "authorityResolveEndpointsAsync",
                    AuthorityResolveEndpointsFromLocalSources: "authorityResolveEndpointsFromLocalSources",
                    AuthorityGetCloudDiscoveryMetadataFromNetwork: "authorityGetCloudDiscoveryMetadataFromNetwork",
                    AuthorityUpdateCloudDiscoveryMetadata: "authorityUpdateCloudDiscoveryMetadata",
                    AuthorityGetEndpointMetadataFromNetwork: "authorityGetEndpointMetadataFromNetwork",
                    AuthorityUpdateEndpointMetadata: "authorityUpdateEndpointMetadata",
                    AuthorityUpdateMetadataWithRegionalInformation: "authorityUpdateMetadataWithRegionalInformation",
                    RegionDiscoveryDetectRegion: "regionDiscoveryDetectRegion",
                    RegionDiscoveryGetRegionFromIMDS: "regionDiscoveryGetRegionFromIMDS",
                    RegionDiscoveryGetCurrentVersion: "regionDiscoveryGetCurrentVersion",
                    AcquireTokenByCodeAsync: "acquireTokenByCodeAsync",
                    GetEndpointMetadataFromNetwork: "getEndpointMetadataFromNetwork",
                    GetCloudDiscoveryMetadataFromNetworkMeasurement: "getCloudDiscoveryMetadataFromNetworkMeasurement",
                    HandleRedirectPromiseMeasurement: "handleRedirectPromise",
                    HandleNativeRedirectPromiseMeasurement: "handleNativeRedirectPromise",
                    UpdateCloudDiscoveryMetadataMeasurement: "updateCloudDiscoveryMetadataMeasurement",
                    UsernamePasswordClientAcquireToken: "usernamePasswordClientAcquireToken",
                    NativeMessageHandlerHandshake: "nativeMessageHandlerHandshake",
                    NativeGenerateAuthResult: "nativeGenerateAuthResult",
                    RemoveHiddenIframe: "removeHiddenIframe",
                    ClearTokensAndKeysWithClaims: "clearTokensAndKeysWithClaims",
                    CacheManagerGetRefreshToken: "cacheManagerGetRefreshToken",
                    GeneratePkceCodes: "generatePkceCodes",
                    GenerateCodeVerifier: "generateCodeVerifier",
                    GenerateCodeChallengeFromVerifier: "generateCodeChallengeFromVerifier",
                    Sha256Digest: "sha256Digest",
                    GetRandomValues: "getRandomValues"
                };
            tv.AcquireTokenByCode, tv.AcquireTokenByRefreshToken, tv.AcquireTokenSilent, tv.AcquireTokenSilentAsync, tv.AcquireTokenPopup, tv.AcquireTokenRedirect, tv.CryptoOptsGetPublicKeyThumbprint, tv.CryptoOptsSignJwt, tv.SilentCacheClientAcquireToken, tv.SilentIframeClientAcquireToken, tv.SilentRefreshClientAcquireToken, tv.SsoSilent, tv.StandardInteractionClientGetDiscoveredAuthority, tv.FetchAccountIdWithNativeBroker, tv.NativeInteractionClientAcquireToken, tv.BaseClientCreateTokenRequestHeaders, tv.NetworkClientSendPostRequestAsync, tv.RefreshTokenClientExecutePostToTokenEndpoint, tv.AuthorizationCodeClientExecutePostToTokenEndpoint, tv.BrokerHandhshake, tv.AcquireTokenByRefreshTokenInBroker, tv.AcquireTokenByBroker, tv.RefreshTokenClientExecuteTokenRequest, tv.RefreshTokenClientAcquireToken, tv.RefreshTokenClientAcquireTokenWithCachedRefreshToken, tv.RefreshTokenClientAcquireTokenByRefreshToken, tv.RefreshTokenClientCreateTokenRequestBody, tv.AcquireTokenFromCache, tv.SilentFlowClientAcquireCachedToken, tv.SilentFlowClientGenerateResultFromCacheRecord, tv.AcquireTokenBySilentIframe, tv.InitializeBaseRequest, tv.InitializeSilentRequest, tv.InitializeClientApplication, tv.SilentIframeClientTokenHelper, tv.SilentHandlerInitiateAuthRequest, tv.SilentHandlerMonitorIframeForHash, tv.SilentHandlerLoadFrame, tv.SilentHandlerLoadFrameSync, tv.StandardInteractionClientCreateAuthCodeClient, tv.StandardInteractionClientGetClientConfiguration, tv.StandardInteractionClientInitializeAuthorizationRequest, tv.StandardInteractionClientInitializeAuthorizationCodeRequest, tv.GetAuthCodeUrl, tv.HandleCodeResponseFromServer, tv.HandleCodeResponse, tv.UpdateTokenEndpointAuthority, tv.AuthClientAcquireToken, tv.AuthClientExecuteTokenRequest, tv.AuthClientCreateTokenRequestBody, tv.AuthClientCreateQueryString, tv.PopTokenGenerateCnf, tv.PopTokenGenerateKid, tv.HandleServerTokenResponse, tv.DeserializeResponse, tv.AuthorityFactoryCreateDiscoveredInstance, tv.AuthorityResolveEndpointsAsync, tv.AuthorityResolveEndpointsFromLocalSources, tv.AuthorityGetCloudDiscoveryMetadataFromNetwork, tv.AuthorityUpdateCloudDiscoveryMetadata, tv.AuthorityGetEndpointMetadataFromNetwork, tv.AuthorityUpdateEndpointMetadata, tv.AuthorityUpdateMetadataWithRegionalInformation, tv.RegionDiscoveryDetectRegion, tv.RegionDiscoveryGetRegionFromIMDS, tv.RegionDiscoveryGetCurrentVersion, tv.AcquireTokenByCodeAsync, tv.GetEndpointMetadataFromNetwork, tv.GetCloudDiscoveryMetadataFromNetworkMeasurement, tv.HandleRedirectPromiseMeasurement, tv.HandleNativeRedirectPromiseMeasurement, tv.UpdateCloudDiscoveryMetadataMeasurement, tv.UsernamePasswordClientAcquireToken, tv.NativeMessageHandlerHandshake, tv.NativeGenerateAuthResult, tv.RemoveHiddenIframe, tv.ClearTokensAndKeysWithClaims, tv.CacheManagerGetRefreshToken, tv.GeneratePkceCodes, tv.GenerateCodeVerifier, tv.GenerateCodeChallengeFromVerifier, tv.Sha256Digest, tv.GetRandomValues;
            class tw {
                startMeasurement() {}
                endMeasurement() {}
                flushMeasurement() {
                    return null
                }
            }
            class tE {
                generateId() {
                    return "callback-id"
                }
                startMeasurement(e, t) {
                    return {
                        end: () => null,
                        discard: () => {},
                        add: () => {},
                        increment: () => {},
                        event: {
                            eventId: this.generateId(),
                            status: 1,
                            authority: "",
                            libraryName: "",
                            libraryVersion: "",
                            clientId: "",
                            name: e,
                            startTimeMs: Date.now(),
                            correlationId: t || ""
                        },
                        measurement: new tw
                    }
                }
                startPerformanceMeasurement() {
                    return new tw
                }
                calculateQueuedTime() {
                    return 0
                }
                addQueueMeasurement() {}
                setPreQueueTime() {}
                endMeasurement() {
                    return null
                }
                discardMeasurements() {}
                removePerformanceCallback() {
                    return !0
                }
                addPerformanceCallback() {
                    return ""
                }
                emitEvents() {}
                addFields() {}
                incrementFields() {}
                cacheEventByCorrelationId() {}
            }
            let t_ = {
                    INVALID_GRANT_ERROR: "invalid_grant",
                    POPUP_WIDTH: 483,
                    POPUP_HEIGHT: 600,
                    POPUP_NAME_PREFIX: "msal",
                    DEFAULT_POLL_INTERVAL_MS: 30,
                    MSAL_SKU: "msal.js.browser"
                },
                tS = {
                    CHANNEL_ID: "53ee284d-920a-4b59-9d30-a60315b26836",
                    PREFERRED_EXTENSION_ID: "ppnbnpeolgkicgegkbkbjmhlideopiji",
                    MATS_TELEMETRY: "MATS"
                },
                tk = {
                    HandshakeRequest: "Handshake",
                    HandshakeResponse: "HandshakeResponse",
                    GetToken: "GetToken",
                    Response: "Response"
                },
                tR = {
                    LocalStorage: "localStorage",
                    SessionStorage: "sessionStorage",
                    MemoryStorage: "memoryStorage"
                },
                tb = {
                    GET: "GET",
                    POST: "POST"
                },
                tO = {
                    AUTHORITY: "authority",
                    REQUEST_STATE: "request.state",
                    NONCE_IDTOKEN: "nonce.id_token",
                    ORIGIN_URI: "request.origin",
                    URL_HASH: "urlHash",
                    REQUEST_PARAMS: "request.params",
                    INTERACTION_STATUS_KEY: "interaction.status",
                    CCS_CREDENTIAL: "ccs.credential",
                    CORRELATION_ID: "request.correlationId",
                    NATIVE_REQUEST: "request.native"
                },
                tN = {
                    ACCOUNT_KEYS: "msal.account.keys",
                    TOKEN_KEYS: "msal.token.keys",
                    VERSION: "msal.version"
                },
                tP = "wrapper.sku",
                tM = "wrapper.version",
                tq = {
                    acquireTokenRedirect: 861,
                    acquireTokenPopup: 862,
                    ssoSilent: 863,
                    handleRedirectPromise: 865,
                    acquireTokenByCode: 866,
                    acquireTokenSilent_silentFlow: 61,
                    logout: 961,
                    logoutPopup: 962
                };
            (i = a || (a = {})).Redirect = "redirect", i.Popup = "popup", i.Silent = "silent", i.None = "none";
            let tU = {
                    scopes: l.f_
                },
                tH = "msal.db",
                tL = `${tH}.keys`,
                tD = {
                    Default: 0,
                    AccessToken: 1,
                    AccessTokenAndRefreshToken: 2,
                    RefreshToken: 3,
                    RefreshTokenAndNetwork: 4,
                    Skip: 5
                },
                tK = [tD.Default, tD.Skip, tD.RefreshTokenAndNetwork];
            class tx {
                navigateInternal(e, t) {
                    return tx.defaultNavigateWindow(e, t)
                }
                navigateExternal(e, t) {
                    return tx.defaultNavigateWindow(e, t)
                }
                static defaultNavigateWindow(e, t) {
                    return t.noHistory ? window.location.replace(e) : window.location.assign(e), new Promise(e => {
                        setTimeout(() => {
                            e(!0)
                        }, t.timeout)
                    })
                }
            }
            class tF extends g.l4 {
                constructor(e, t, r) {
                    super(e.errorCode, e.errorMessage, e.subError), Object.setPrototypeOf(this, tF.prototype), this.name = "NetworkError", this.error = e, this.httpStatus = t, this.responseHeaders = r
                }
            }
            var tB = r(42053),
                tG = r(10507);
            class t$ {
                async sendGetRequestAsync(e, t) {
                    let r;
                    let n = {},
                        i = 0,
                        o = tz(t);
                    try {
                        r = await fetch(e, {
                            method: tb.GET,
                            headers: o
                        })
                    } catch (e) {
                        throw (0, tB.Z_)(window.navigator.onLine ? tG.C8 : tG.Mq)
                    }
                    n = tQ(r.headers);
                    try {
                        return i = r.status, {
                            headers: n,
                            body: await r.json(),
                            status: i
                        }
                    } catch (e) {
                        throw new tF((0, tB.Z_)(tG.w6), i, n)
                    }
                }
                async sendPostRequestAsync(e, t) {
                    let r;
                    let n = t && t.body || "",
                        i = tz(t),
                        o = 0,
                        a = {};
                    try {
                        r = await fetch(e, {
                            method: tb.POST,
                            headers: i,
                            body: n
                        })
                    } catch (e) {
                        throw (0, tB.Z_)(window.navigator.onLine ? tG.Dc : tG.Mq)
                    }
                    a = tQ(r.headers);
                    try {
                        return o = r.status, {
                            headers: a,
                            body: await r.json(),
                            status: o
                        }
                    } catch (e) {
                        throw new tF((0, tB.Z_)(tG.w6), o, a)
                    }
                }
            }

            function tz(e) {
                try {
                    let t = new Headers;
                    if (!(e && e.headers)) return t;
                    let r = e.headers;
                    return Object.entries(r).forEach(([e, r]) => {
                        t.append(e, r)
                    }), t
                } catch (e) {
                    throw (0, tB.Z_)(tG.jl)
                }
            }

            function tQ(e) {
                try {
                    let t = {};
                    return e.forEach((e, r) => {
                        t[r] = e
                    }), t
                } catch (e) {
                    throw (0, tB.Z_)(tG.Vy)
                }
            }

            function tV(e) {
                return encodeURIComponent(tW(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_"))
            }

            function tY(e) {
                return tj(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
            }

            function tW(e) {
                return tj(new TextEncoder().encode(e))
            }

            function tj(e) {
                return btoa(Array.from(e, e => String.fromCodePoint(e)).join(""))
            }
            let tJ = "SHA-256",
                tZ = new Uint8Array([1, 0, 1]),
                tX = "0123456789abcdef",
                t0 = new Uint32Array(1),
                t1 = {
                    name: "RSASSA-PKCS1-v1_5",
                    hash: tJ,
                    modulusLength: 2048,
                    publicExponent: tZ
                };
            async function t2(e, t, r) {
                t ? .addQueueMeasurement(tv.Sha256Digest, r);
                let n = new TextEncoder().encode(e);
                return window.crypto.subtle.digest(tJ, n)
            }

            function t4(e) {
                return window.crypto.getRandomValues(e)
            }

            function t3() {
                return window.crypto.getRandomValues(t0), t0[0]
            }

            function t6() {
                let e = Date.now(),
                    t = 1024 * t3() + (1023 & t3()),
                    r = new Uint8Array(16),
                    n = Math.trunc(t / 1073741824),
                    i = t & 1073741824 - 1,
                    o = t3();
                r[0] = e / 1099511627776, r[1] = e / 4294967296, r[2] = e / 16777216, r[3] = e / 65536, r[4] = e / 256, r[5] = e, r[6] = 112 | n >>> 8, r[7] = n, r[8] = 128 | i >>> 24, r[9] = i >>> 16, r[10] = i >>> 8, r[11] = i, r[12] = o >>> 24, r[13] = o >>> 16, r[14] = o >>> 8, r[15] = o;
                let a = "";
                for (let e = 0; e < r.length; e++) a += tX.charAt(r[e] >>> 4) + tX.charAt(15 & r[e]), (3 === e || 5 === e || 7 === e || 9 === e) && (a += "-");
                return a
            }
            async function t5(e, t) {
                return window.crypto.subtle.generateKey(t1, e, t)
            }
            async function t8(e) {
                return window.crypto.subtle.exportKey("jwk", e)
            }
            async function t9(e, t, r) {
                return window.crypto.subtle.importKey("jwk", e, t1, t, r)
            }
            async function t7(e, t) {
                return window.crypto.subtle.sign(t1, e, t)
            }
            async function re(e) {
                return tY(new Uint8Array(await t2(e)))
            }
            let rt = "storage_not_supported",
                rr = "stubbed_public_client_application_called",
                rn = "in_mem_redirect_unavailable",
                ri = {
                    [rt]: "Given storage configuration option was not supported.",
                    [rr]: "Stub instance of Public Client Application was called. If using msal-react, please ensure context is not used without a provider. For more visit: aka.ms/msaljs/browser-errors",
                    [rn]: "Redirect cannot be supported. In-memory storage was selected and storeAuthStateInCookie=false, which would cause the library to be unable to handle the incoming hash. If you would like to use the redirect API, please use session/localStorage or set storeAuthStateInCookie=true."
                };
            ri[rt], ri[rr], ri[rn];
            class ro extends g.l4 {
                constructor(e, t) {
                    super(e, t), this.name = "BrowserConfigurationAuthError", Object.setPrototypeOf(this, ro.prototype)
                }
            }

            function ra(e) {
                return new ro(e, ri[e])
            }

            function rs() {
                return window.parent !== window
            }

            function rc() {
                return "undefined" != typeof window && window.location ? window.location.href.split("?")[0].split("#")[0] : ""
            }

            function rl() {
                if ("undefined" == typeof window) throw (0, tB.Z_)(tG.Dx)
            }

            function rh(e) {
                if (!e) throw (0, tB.Z_)(tG.al)
            }

            function rd(e) {
                rl(),
                    function() {
                        if (e7.hashContainsKnownProperties(window.location.hash) && rs()) throw (0, tB.Z_)(tG.xO)
                    }(),
                    function() {
                        if ("undefined" != typeof window && window.opener && window.opener !== window && "string" == typeof window.name && 0 === window.name.indexOf(`${t_.POPUP_NAME_PREFIX}.`)) throw (0, tB.Z_)(tG.bj)
                    }(), rh(e)
            }

            function ru(e, t) {
                if (rd(e), ! function(e) {
                        if (rs() && !e) throw (0, tB.Z_)(tG.b_)
                    }(t.system.allowRedirectInIframe), t.cache.cacheLocation === tR.MemoryStorage && !t.cache.storeAuthStateInCookie) throw ra(rn)
            }

            function rg(e) {
                let t = document.createElement("link");
                t.rel = "preconnect", t.href = new URL(e).origin, t.crossOrigin = "anonymous", document.head.appendChild(t), window.setTimeout(() => {
                    try {
                        document.head.removeChild(t)
                    } catch {}
                }, 1e4)
            }
            let rp = "3.30.0";
            class rm {
                static loggerCallback(e, t) {
                    switch (e) {
                        case o.Error:
                            console.error(t);
                            return;
                        case o.Info:
                            console.info(t);
                            return;
                        case o.Verbose:
                            console.debug(t);
                            return;
                        case o.Warning:
                            console.warn(t);
                            return;
                        default:
                            console.log(t);
                            return
                    }
                }
                constructor(e) {
                    let t;
                    this.browserEnvironment = "undefined" != typeof window, this.config = function({
                        auth: e,
                        cache: t,
                        system: r,
                        telemetry: n
                    }, i) {
                        let a = {
                                clientId: l.gT.EMPTY_STRING,
                                authority: `${l.gT.DEFAULT_AUTHORITY}`,
                                knownAuthorities: [],
                                cloudDiscoveryMetadata: l.gT.EMPTY_STRING,
                                authorityMetadata: l.gT.EMPTY_STRING,
                                redirectUri: "undefined" != typeof window ? rc() : "",
                                postLogoutRedirectUri: l.gT.EMPTY_STRING,
                                navigateToLoginRequestUrl: !0,
                                clientCapabilities: [],
                                protocolMode: d.AAD,
                                OIDCOptions: {
                                    serverResponseType: l.rg.FRAGMENT,
                                    defaultScopes: [l.gT.OPENID_SCOPE, l.gT.PROFILE_SCOPE, l.gT.OFFLINE_ACCESS_SCOPE]
                                },
                                azureCloudOptions: {
                                    azureCloudInstance: u.None,
                                    tenant: l.gT.EMPTY_STRING
                                },
                                skipAuthorityMetadataCache: !1,
                                supportsNestedAppAuth: !1,
                                instanceAware: !1
                            },
                            s = {
                                cacheLocation: tR.SessionStorage,
                                temporaryCacheLocation: tR.SessionStorage,
                                storeAuthStateInCookie: !1,
                                secureCookies: !1,
                                cacheMigrationEnabled: !!t && t.cacheLocation === tR.LocalStorage,
                                claimsBasedCachingEnabled: !1
                            },
                            c = {
                                loggerCallback: () => {},
                                logLevel: o.Info,
                                piiLoggingEnabled: !1
                            },
                            g = { ...{ ...tu,
                                    loggerOptions: c,
                                    networkClient: i ? new t$ : tA,
                                    navigationClient: new tx,
                                    loadFrameTimeout: 0,
                                    windowHashTimeout: r ? .loadFrameTimeout || 6e4,
                                    iframeHashTimeout: r ? .loadFrameTimeout || 1e4,
                                    navigateFrameWait: 0,
                                    redirectNavigationTimeout: 3e4,
                                    asyncPopups: !1,
                                    allowRedirectInIframe: !1,
                                    allowNativeBroker: !1,
                                    nativeBrokerHandshakeTimeout: r ? .nativeBrokerHandshakeTimeout || 2e3,
                                    pollIntervalMilliseconds: t_.DEFAULT_POLL_INTERVAL_MS
                                },
                                ...r,
                                loggerOptions: r ? .loggerOptions || c
                            },
                            p = {
                                application: {
                                    appName: l.gT.EMPTY_STRING,
                                    appVersion: l.gT.EMPTY_STRING
                                },
                                client: new tE
                            };
                        if (e ? .protocolMode !== d.OIDC && e ? .OIDCOptions && new h(g.loggerOptions).warning(JSON.stringify(ej(ez))), e ? .protocolMode && e.protocolMode !== d.AAD && g ? .allowNativeBroker) throw ej(eQ);
                        return {
                            auth: { ...a,
                                ...e,
                                OIDCOptions: { ...a.OIDCOptions,
                                    ...e ? .OIDCOptions
                                }
                            },
                            cache: { ...s,
                                ...t
                            },
                            system: g,
                            telemetry: { ...p,
                                ...n
                            }
                        }
                    }(e, this.browserEnvironment);
                    try {
                        t = window[tR.SessionStorage]
                    } catch (e) {}
                    let r = t ? .getItem("msal.browser.log.level"),
                        n = t ? .getItem("msal.browser.log.pii") ? .toLowerCase(),
                        i = "true" === n || "false" !== n && void 0,
                        a = { ...this.config.system.loggerOptions
                        },
                        s = r && Object.keys(o).includes(r) ? o[r] : void 0;
                    s && (a.loggerCallback = rm.loggerCallback, a.logLevel = s), void 0 !== i && (a.piiLoggingEnabled = i), this.logger = new h(a, "@azure/msal-browser", rp), this.available = !1
                }
                getConfig() {
                    return this.config
                }
                getLogger() {
                    return this.logger
                }
                isAvailable() {
                    return this.available
                }
                isBrowserEnvironment() {
                    return this.browserEnvironment
                }
            }
            class rC extends rm {
                getModuleName() {
                    return rC.MODULE_NAME
                }
                getId() {
                    return rC.ID
                }
                async initialize() {
                    return this.available = "undefined" != typeof window, this.available
                }
            }
            rC.MODULE_NAME = "", rC.ID = "StandardOperatingContext";
            let rf = "missing_kid_error",
                ry = "missing_alg_error",
                rT = {
                    [rf]: "The JOSE Header for the requested JWT, JWS or JWK object requires a keyId to be configured as the 'kid' header claim. No 'kid' value was provided.",
                    [ry]: "The JOSE Header for the requested JWT, JWS or JWK object requires an algorithm to be specified as the 'alg' header claim. No 'alg' value was provided."
                };
            class rI extends g.l4 {
                constructor(e, t) {
                    super(e, t), this.name = "JoseHeaderError", Object.setPrototypeOf(this, rI.prototype)
                }
            }

            function rA(e) {
                return new rI(e, rT[e])
            }
            class rv {
                constructor(e) {
                    this.typ = e.typ, this.alg = e.alg, this.kid = e.kid
                }
                static getShrHeaderString(e) {
                    if (!e.kid) throw rA(rf);
                    if (!e.alg) throw rA(ry);
                    return JSON.stringify(new rv({
                        typ: e.typ || l.xd.Pop,
                        kid: e.kid,
                        alg: e.alg
                    }))
                }
            }

            function rw(e) {
                return new TextDecoder().decode(function(e) {
                    let t = e.replace(/-/g, "+").replace(/_/g, "/");
                    switch (t.length % 4) {
                        case 0:
                            break;
                        case 2:
                            t += "==";
                            break;
                        case 3:
                            t += "=";
                            break;
                        default:
                            throw (0, tB.Z_)(tG.lZ)
                    }
                    let r = atob(t);
                    return Uint8Array.from(r, e => e.codePointAt(0) || 0)
                }(e))
            }
            class rE {
                constructor() {
                    this.dbName = tH, this.version = 1, this.tableName = tL, this.dbOpen = !1
                }
                async open() {
                    return new Promise((e, t) => {
                        let r = window.indexedDB.open(this.dbName, this.version);
                        r.addEventListener("upgradeneeded", e => {
                            e.target.result.createObjectStore(this.tableName)
                        }), r.addEventListener("success", t => {
                            this.db = t.target.result, this.dbOpen = !0, e()
                        }), r.addEventListener("error", () => t((0, tB.Z_)(tG.Pi)))
                    })
                }
                closeConnection() {
                    let e = this.db;
                    e && this.dbOpen && (e.close(), this.dbOpen = !1)
                }
                async validateDbIsOpen() {
                    if (!this.dbOpen) return this.open()
                }
                async getItem(e) {
                    return await this.validateDbIsOpen(), new Promise((t, r) => {
                        if (!this.db) return r((0, tB.Z_)(tG.IL));
                        let n = this.db.transaction([this.tableName], "readonly").objectStore(this.tableName).get(e);
                        n.addEventListener("success", e => {
                            this.closeConnection(), t(e.target.result)
                        }), n.addEventListener("error", e => {
                            this.closeConnection(), r(e)
                        })
                    })
                }
                async setItem(e, t) {
                    return await this.validateDbIsOpen(), new Promise((r, n) => {
                        if (!this.db) return n((0, tB.Z_)(tG.IL));
                        let i = this.db.transaction([this.tableName], "readwrite").objectStore(this.tableName).put(t, e);
                        i.addEventListener("success", () => {
                            this.closeConnection(), r()
                        }), i.addEventListener("error", e => {
                            this.closeConnection(), n(e)
                        })
                    })
                }
                async removeItem(e) {
                    return await this.validateDbIsOpen(), new Promise((t, r) => {
                        if (!this.db) return r((0, tB.Z_)(tG.IL));
                        let n = this.db.transaction([this.tableName], "readwrite").objectStore(this.tableName).delete(e);
                        n.addEventListener("success", () => {
                            this.closeConnection(), t()
                        }), n.addEventListener("error", e => {
                            this.closeConnection(), r(e)
                        })
                    })
                }
                async getKeys() {
                    return await this.validateDbIsOpen(), new Promise((e, t) => {
                        if (!this.db) return t((0, tB.Z_)(tG.IL));
                        let r = this.db.transaction([this.tableName], "readonly").objectStore(this.tableName).getAllKeys();
                        r.addEventListener("success", t => {
                            this.closeConnection(), e(t.target.result)
                        }), r.addEventListener("error", e => {
                            this.closeConnection(), t(e)
                        })
                    })
                }
                async containsKey(e) {
                    return await this.validateDbIsOpen(), new Promise((t, r) => {
                        if (!this.db) return r((0, tB.Z_)(tG.IL));
                        let n = this.db.transaction([this.tableName], "readonly").objectStore(this.tableName).count(e);
                        n.addEventListener("success", e => {
                            this.closeConnection(), t(1 === e.target.result)
                        }), n.addEventListener("error", e => {
                            this.closeConnection(), r(e)
                        })
                    })
                }
                async deleteDatabase() {
                    return this.db && this.dbOpen && this.closeConnection(), new Promise((e, t) => {
                        let r = window.indexedDB.deleteDatabase(tH),
                            n = setTimeout(() => t(!1), 200);
                        r.addEventListener("success", () => (clearTimeout(n), e(!0))), r.addEventListener("blocked", () => (clearTimeout(n), e(!0))), r.addEventListener("error", () => (clearTimeout(n), t(!1)))
                    })
                }
            }
            class r_ {
                constructor() {
                    this.cache = new Map
                }
                getItem(e) {
                    return this.cache.get(e) || null
                }
                setItem(e, t) {
                    this.cache.set(e, t)
                }
                removeItem(e) {
                    this.cache.delete(e)
                }
                getKeys() {
                    let e = [];
                    return this.cache.forEach((t, r) => {
                        e.push(r)
                    }), e
                }
                containsKey(e) {
                    return this.cache.has(e)
                }
                clear() {
                    this.cache.clear()
                }
            }
            class rS {
                constructor(e) {
                    this.inMemoryCache = new r_, this.indexedDBCache = new rE, this.logger = e
                }
                handleDatabaseAccessError(e) {
                    if (e instanceof tB.Ut && e.errorCode === tG.Pi) this.logger.error("Could not access persistent storage. This may be caused by browser privacy features which block persistent storage in third-party contexts.");
                    else throw e
                }
                async getItem(e) {
                    let t = this.inMemoryCache.getItem(e);
                    if (!t) try {
                        return this.logger.verbose("Queried item not found in in-memory cache, now querying persistent storage."), await this.indexedDBCache.getItem(e)
                    } catch (e) {
                        this.handleDatabaseAccessError(e)
                    }
                    return t
                }
                async setItem(e, t) {
                    this.inMemoryCache.setItem(e, t);
                    try {
                        await this.indexedDBCache.setItem(e, t)
                    } catch (e) {
                        this.handleDatabaseAccessError(e)
                    }
                }
                async removeItem(e) {
                    this.inMemoryCache.removeItem(e);
                    try {
                        await this.indexedDBCache.removeItem(e)
                    } catch (e) {
                        this.handleDatabaseAccessError(e)
                    }
                }
                async getKeys() {
                    let e = this.inMemoryCache.getKeys();
                    if (0 === e.length) try {
                        return this.logger.verbose("In-memory cache is empty, now querying persistent storage."), await this.indexedDBCache.getKeys()
                    } catch (e) {
                        this.handleDatabaseAccessError(e)
                    }
                    return e
                }
                async containsKey(e) {
                    let t = this.inMemoryCache.containsKey(e);
                    if (!t) try {
                        return this.logger.verbose("Key not found in in-memory cache, now querying persistent storage."), await this.indexedDBCache.containsKey(e)
                    } catch (e) {
                        this.handleDatabaseAccessError(e)
                    }
                    return t
                }
                clearInMemory() {
                    this.logger.verbose("Deleting in-memory keystore"), this.inMemoryCache.clear(), this.logger.verbose("In-memory keystore deleted")
                }
                async clearPersistent() {
                    try {
                        this.logger.verbose("Deleting persistent keystore");
                        let e = await this.indexedDBCache.deleteDatabase();
                        return e && this.logger.verbose("Persistent keystore deleted"), e
                    } catch (e) {
                        return this.handleDatabaseAccessError(e), !1
                    }
                }
            }
            class rk {
                constructor(e, t, r) {
                    this.logger = e,
                        function(e) {
                            if (!window) throw (0, tB.Z_)(tG.Dx);
                            if (!window.crypto) throw (0, tB.Z_)(tG.TR);
                            if (!e && !window.crypto.subtle) throw (0, tB.Z_)(tG.TR, "crypto_subtle_undefined")
                        }(r ? ? !1), this.cache = new rS(this.logger), this.performanceClient = t
                }
                createNewGuid() {
                    return t6()
                }
                base64Encode(e) {
                    return tW(e)
                }
                base64Decode(e) {
                    return rw(e)
                }
                base64UrlEncode(e) {
                    return tV(e)
                }
                encodeKid(e) {
                    return this.base64UrlEncode(JSON.stringify({
                        kid: e
                    }))
                }
                async getPublicKeyThumbprint(e) {
                    let t = this.performanceClient ? .startMeasurement(tv.CryptoOptsGetPublicKeyThumbprint, e.correlationId),
                        r = await t5(rk.EXTRACTABLE, rk.POP_KEY_USAGES),
                        n = await t8(r.publicKey),
                        i = rR({
                            e: n.e,
                            kty: n.kty,
                            n: n.n
                        }),
                        o = await this.hashString(i),
                        a = await t8(r.privateKey),
                        s = await t9(a, !1, ["sign"]);
                    return await this.cache.setItem(o, {
                        privateKey: s,
                        publicKey: r.publicKey,
                        requestMethod: e.resourceRequestMethod,
                        requestUri: e.resourceRequestUri
                    }), t && t.end({
                        success: !0
                    }), o
                }
                async removeTokenBindingKey(e) {
                    return await this.cache.removeItem(e), !await this.cache.containsKey(e)
                }
                async clearKeystore() {
                    this.cache.clearInMemory();
                    try {
                        return await this.cache.clearPersistent(), !0
                    } catch (e) {
                        return e instanceof Error ? this.logger.error(`Clearing keystore failed with error: ${e.message}`) : this.logger.error("Clearing keystore failed with unknown error"), !1
                    }
                }
                async signJwt(e, t, r, n) {
                    let i = this.performanceClient ? .startMeasurement(tv.CryptoOptsSignJwt, n),
                        o = await this.cache.getItem(t);
                    if (!o) throw (0, tB.Z_)(tG.XM);
                    let a = await t8(o.publicKey),
                        s = rR(a),
                        c = tV(JSON.stringify({
                            kid: t
                        })),
                        l = tV(rv.getShrHeaderString({ ...r ? .header,
                            alg : a.alg,
                            kid: c
                        }));
                    e.cnf = {
                        jwk: JSON.parse(s)
                    };
                    let h = tV(JSON.stringify(e)),
                        d = `${l}.${h}`,
                        u = new TextEncoder().encode(d),
                        g = tY(new Uint8Array(await t7(o.privateKey, u))),
                        p = `${d}.${g}`;
                    return i && i.end({
                        success: !0
                    }), p
                }
                async hashString(e) {
                    return re(e)
                }
            }

            function rR(e) {
                return JSON.stringify(e, Object.keys(e).sort())
            }
            rk.POP_KEY_USAGES = ["sign", "verify"], rk.EXTRACTABLE = !0;
            let rb = (e, t, r, n, i) => (...o) => {
                    r.trace(`Executing function ${t}`);
                    let a = n ? .startMeasurement(t, i);
                    i && n ? .incrementFields({
                        [t + "CallCount"]: 1
                    }, i);
                    try {
                        let n = e(...o);
                        return a ? .end({
                            success: !0
                        }), r.trace(`Returning result from ${t}`), n
                    } catch (e) {
                        r.trace(`Error occurred in ${t}`);
                        try {
                            r.trace(JSON.stringify(e))
                        } catch (e) {
                            r.trace("Unable to print error message.")
                        }
                        throw a ? .end({
                            success: !1
                        }, e), e
                    }
                },
                rO = (e, t, r, n, i) => (...o) => {
                    r.trace(`Executing function ${t}`);
                    let a = n ? .startMeasurement(t, i);
                    return i && n ? .incrementFields({
                        [t + "CallCount"]: 1
                    }, i), n ? .setPreQueueTime(t, i), e(...o).then(e => (r.trace(`Returning result from ${t}`), a ? .end({
                        success: !0
                    }), e)).catch(e => {
                        r.trace(`Error occurred in ${t}`);
                        try {
                            r.trace(JSON.stringify(e))
                        } catch (e) {
                            r.trace("Unable to print error message.")
                        }
                        throw a ? .end({
                            success: !1
                        }, e), e
                    })
                };
            class rN {
                constructor(e, t, r, n) {
                    this.networkInterface = e, this.logger = t, this.performanceClient = r, this.correlationId = n
                }
                async detectRegion(e, t) {
                    this.performanceClient ? .addQueueMeasurement(tv.RegionDiscoveryDetectRegion, this.correlationId);
                    let r = e;
                    if (r) t.region_source = l.W.ENVIRONMENT_VARIABLE;
                    else {
                        let e = rN.IMDS_OPTIONS;
                        try {
                            let n = await rO(this.getRegionFromIMDS.bind(this), tv.RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)(l.gT.IMDS_VERSION, e);
                            if (n.status === l.YY.httpSuccess && (r = n.body, t.region_source = l.W.IMDS), n.status === l.YY.httpBadRequest) {
                                let n = await rO(this.getCurrentVersion.bind(this), tv.RegionDiscoveryGetCurrentVersion, this.logger, this.performanceClient, this.correlationId)(e);
                                if (!n) return t.region_source = l.W.FAILED_AUTO_DETECTION, null;
                                let i = await rO(this.getRegionFromIMDS.bind(this), tv.RegionDiscoveryGetRegionFromIMDS, this.logger, this.performanceClient, this.correlationId)(n, e);
                                i.status === l.YY.httpSuccess && (r = i.body, t.region_source = l.W.IMDS)
                            }
                        } catch (e) {
                            return t.region_source = l.W.FAILED_AUTO_DETECTION, null
                        }
                    }
                    return r || (t.region_source = l.W.FAILED_AUTO_DETECTION), r || null
                }
                async getRegionFromIMDS(e, t) {
                    return this.performanceClient ? .addQueueMeasurement(tv.RegionDiscoveryGetRegionFromIMDS, this.correlationId), this.networkInterface.sendGetRequestAsync(`${l.gT.IMDS_ENDPOINT}?api-version=${e}&format=text`, t, l.gT.IMDS_TIMEOUT)
                }
                async getCurrentVersion(e) {
                    this.performanceClient ? .addQueueMeasurement(tv.RegionDiscoveryGetCurrentVersion, this.correlationId);
                    try {
                        let t = await this.networkInterface.sendGetRequestAsync(`${l.gT.IMDS_ENDPOINT}?format=json`, e);
                        if (t.status === l.YY.httpBadRequest && t.body && t.body["newest-versions"] && t.body["newest-versions"].length > 0) return t.body["newest-versions"][0];
                        return null
                    } catch (e) {
                        return null
                    }
                }
            }
            rN.IMDS_OPTIONS = {
                headers: {
                    Metadata: "true"
                }
            };
            class rP {
                constructor(e, t, r, n, i, o, a, s) {
                    this.canonicalAuthority = e, this._canonicalAuthority.validateAsUri(), this.networkInterface = t, this.cacheManager = r, this.authorityOptions = n, this.regionDiscoveryMetadata = {
                        region_used: void 0,
                        region_source: void 0,
                        region_outcome: void 0
                    }, this.logger = i, this.performanceClient = a, this.correlationId = o, this.managedIdentity = s || !1, this.regionDiscovery = new rN(t, this.logger, this.performanceClient, this.correlationId)
                }
                getAuthorityType(e) {
                    if (e.HostNameAndPort.endsWith(l.gT.CIAM_AUTH_URL)) return e3.Ciam;
                    let t = e.PathSegments;
                    if (t.length) switch (t[0].toLowerCase()) {
                        case l.gT.ADFS:
                            return e3.Adfs;
                        case l.gT.DSTS:
                            return e3.Dsts
                    }
                    return e3.Default
                }
                get authorityType() {
                    return this.getAuthorityType(this.canonicalAuthorityUrlComponents)
                }
                get protocolMode() {
                    return this.authorityOptions.protocolMode
                }
                get options() {
                    return this.authorityOptions
                }
                get canonicalAuthority() {
                    return this._canonicalAuthority.urlString
                }
                set canonicalAuthority(e) {
                    this._canonicalAuthority = new e7(e), this._canonicalAuthority.validateAsUri(), this._canonicalAuthorityUrlComponents = null
                }
                get canonicalAuthorityUrlComponents() {
                    return this._canonicalAuthorityUrlComponents || (this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents()), this._canonicalAuthorityUrlComponents
                }
                get hostnameAndPort() {
                    return this.canonicalAuthorityUrlComponents.HostNameAndPort.toLowerCase()
                }
                get tenant() {
                    return this.canonicalAuthorityUrlComponents.PathSegments[0]
                }
                get authorizationEndpoint() {
                    if (this.discoveryComplete()) return this.replacePath(this.metadata.authorization_endpoint);
                    throw ea(y)
                }
                get tokenEndpoint() {
                    if (this.discoveryComplete()) return this.replacePath(this.metadata.token_endpoint);
                    throw ea(y)
                }
                get deviceCodeEndpoint() {
                    if (this.discoveryComplete()) return this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));
                    throw ea(y)
                }
                get endSessionEndpoint() {
                    if (this.discoveryComplete()) {
                        if (!this.metadata.end_session_endpoint) throw ea(J);
                        return this.replacePath(this.metadata.end_session_endpoint)
                    }
                    throw ea(y)
                }
                get selfSignedJwtAudience() {
                    if (this.discoveryComplete()) return this.replacePath(this.metadata.issuer);
                    throw ea(y)
                }
                get jwksUri() {
                    if (this.discoveryComplete()) return this.replacePath(this.metadata.jwks_uri);
                    throw ea(y)
                }
                canReplaceTenant(e) {
                    return 1 === e.PathSegments.length && !rP.reservedTenantDomains.has(e.PathSegments[0]) && this.getAuthorityType(e) === e3.Default && this.protocolMode === d.AAD
                }
                replaceTenant(e) {
                    return e.replace(/{tenant}|{tenantid}/g, this.tenant)
                }
                replacePath(e) {
                    let t = e,
                        r = new e7(this.metadata.canonical_authority).getUrlComponents(),
                        n = r.PathSegments;
                    return this.canonicalAuthorityUrlComponents.PathSegments.forEach((e, i) => {
                        let o = n[i];
                        if (0 === i && this.canReplaceTenant(r)) {
                            let e = new e7(this.metadata.authorization_endpoint).getUrlComponents().PathSegments[0];
                            o !== e && (this.logger.verbose(`Replacing tenant domain name ${o} with id ${e}`), o = e)
                        }
                        e !== o && (t = t.replace(`/${o}/`, `/${e}/`))
                    }), this.replaceTenant(t)
                }
                get defaultOpenIdConfigurationEndpoint() {
                    let e = this.hostnameAndPort;
                    return this.canonicalAuthority.endsWith("v2.0/") || this.authorityType === e3.Adfs || this.protocolMode !== d.AAD && !this.isAliasOfKnownMicrosoftAuthority(e) ? `${this.canonicalAuthority}.well-known/openid-configuration` : `${this.canonicalAuthority}v2.0/.well-known/openid-configuration`
                }
                discoveryComplete() {
                    return !!this.metadata
                }
                async resolveEndpointsAsync() {
                    this.performanceClient ? .addQueueMeasurement(tv.AuthorityResolveEndpointsAsync, this.correlationId);
                    let e = this.getCurrentMetadataEntity(),
                        t = await rO(this.updateCloudDiscoveryMetadata.bind(this), tv.AuthorityUpdateCloudDiscoveryMetadata, this.logger, this.performanceClient, this.correlationId)(e);
                    this.canonicalAuthority = this.canonicalAuthority.replace(this.hostnameAndPort, e.preferred_network);
                    let r = await rO(this.updateEndpointMetadata.bind(this), tv.AuthorityUpdateEndpointMetadata, this.logger, this.performanceClient, this.correlationId)(e);
                    this.updateCachedMetadata(e, t, {
                        source: r
                    }), this.performanceClient ? .addFields({
                        cloudDiscoverySource: t,
                        authorityEndpointSource: r
                    }, this.correlationId)
                }
                getCurrentMetadataEntity() {
                    let e = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort);
                    return e || (e = {
                        aliases: [],
                        preferred_cache: this.hostnameAndPort,
                        preferred_network: this.hostnameAndPort,
                        canonical_authority: this.canonicalAuthority,
                        authorization_endpoint: "",
                        token_endpoint: "",
                        end_session_endpoint: "",
                        issuer: "",
                        aliasesFromNetwork: !1,
                        endpointsFromNetwork: !1,
                        expiresAt: ev(),
                        jwks_uri: ""
                    }), e
                }
                updateCachedMetadata(e, t, r) {
                    t !== l.pQ.CACHE && r ? .source !== l.pQ.CACHE && (e.expiresAt = ev(), e.canonical_authority = this.canonicalAuthority);
                    let n = this.cacheManager.generateAuthorityMetadataCacheKey(e.preferred_cache);
                    this.cacheManager.setAuthorityMetadata(n, e), this.metadata = e
                }
                async updateEndpointMetadata(e) {
                    this.performanceClient ? .addQueueMeasurement(tv.AuthorityUpdateEndpointMetadata, this.correlationId);
                    let t = this.updateEndpointMetadataFromLocalSources(e);
                    if (t) return t.source === l.pQ.HARDCODED_VALUES && this.authorityOptions.azureRegionConfiguration ? .azureRegion && t.metadata && (ew(e, await rO(this.updateMetadataWithRegionalInformation.bind(this), tv.AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(t.metadata), !1), e.canonical_authority = this.canonicalAuthority), t.source;
                    let r = await rO(this.getEndpointMetadataFromNetwork.bind(this), tv.AuthorityGetEndpointMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)();
                    if (r) return this.authorityOptions.azureRegionConfiguration ? .azureRegion && (r = await rO(this.updateMetadataWithRegionalInformation.bind(this), tv.AuthorityUpdateMetadataWithRegionalInformation, this.logger, this.performanceClient, this.correlationId)(r)), ew(e, r, !0), l.pQ.NETWORK;
                    throw ea(I, this.defaultOpenIdConfigurationEndpoint)
                }
                updateEndpointMetadataFromLocalSources(e) {
                    this.logger.verbose("Attempting to get endpoint metadata from authority configuration");
                    let t = this.getEndpointMetadataFromConfig();
                    if (t) return this.logger.verbose("Found endpoint metadata in authority configuration"), ew(e, t, !1), {
                        source: l.pQ.CONFIG
                    };
                    if (this.logger.verbose("Did not find endpoint metadata in the config... Attempting to get endpoint metadata from the hardcoded values."), this.authorityOptions.skipAuthorityMetadataCache) this.logger.verbose("Skipping hardcoded metadata cache since skipAuthorityMetadataCache is set to true. Attempting to get endpoint metadata from the network metadata cache.");
                    else {
                        let t = this.getEndpointMetadataFromHardcodedValues();
                        if (t) return ew(e, t, !1), {
                            source: l.pQ.HARDCODED_VALUES,
                            metadata: t
                        };
                        this.logger.verbose("Did not find endpoint metadata in hardcoded values... Attempting to get endpoint metadata from the network metadata cache.")
                    }
                    let r = e_(e);
                    return this.isAuthoritySameType(e) && e.endpointsFromNetwork && !r ? (this.logger.verbose("Found endpoint metadata in the cache."), {
                        source: l.pQ.CACHE
                    }) : (r && this.logger.verbose("The metadata entity is expired."), null)
                }
                isAuthoritySameType(e) {
                    return new e7(e.canonical_authority).getUrlComponents().PathSegments.length === this.canonicalAuthorityUrlComponents.PathSegments.length
                }
                getEndpointMetadataFromConfig() {
                    if (this.authorityOptions.authorityMetadata) try {
                        return JSON.parse(this.authorityOptions.authorityMetadata)
                    } catch (e) {
                        throw ej(eK)
                    }
                    return null
                }
                async getEndpointMetadataFromNetwork() {
                    this.performanceClient ? .addQueueMeasurement(tv.AuthorityGetEndpointMetadataFromNetwork, this.correlationId);
                    let e = this.defaultOpenIdConfigurationEndpoint;
                    this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: attempting to retrieve OAuth endpoints from ${e}`);
                    try {
                        var t;
                        let r = await this.networkInterface.sendGetRequestAsync(e, {});
                        if ((t = r.body).hasOwnProperty("authorization_endpoint") && t.hasOwnProperty("token_endpoint") && t.hasOwnProperty("issuer") && t.hasOwnProperty("jwks_uri")) return r.body;
                        return this.logger.verbose("Authority.getEndpointMetadataFromNetwork: could not parse response as OpenID configuration"), null
                    } catch (e) {
                        return this.logger.verbose(`Authority.getEndpointMetadataFromNetwork: ${e}`), null
                    }
                }
                getEndpointMetadataFromHardcodedValues() {
                    return this.hostnameAndPort in te ? te[this.hostnameAndPort] : null
                }
                async updateMetadataWithRegionalInformation(e) {
                    this.performanceClient ? .addQueueMeasurement(tv.AuthorityUpdateMetadataWithRegionalInformation, this.correlationId);
                    let t = this.authorityOptions.azureRegionConfiguration ? .azureRegion;
                    if (t) {
                        if (t !== l.gT.AZURE_REGION_AUTO_DISCOVER_FLAG) return this.regionDiscoveryMetadata.region_outcome = l.ki.CONFIGURED_NO_AUTO_DETECTION, this.regionDiscoveryMetadata.region_used = t, rP.replaceWithRegionalInformation(e, t);
                        let r = await rO(this.regionDiscovery.detectRegion.bind(this.regionDiscovery), tv.RegionDiscoveryDetectRegion, this.logger, this.performanceClient, this.correlationId)(this.authorityOptions.azureRegionConfiguration ? .environmentRegion, this.regionDiscoveryMetadata);
                        if (r) return this.regionDiscoveryMetadata.region_outcome = l.ki.AUTO_DETECTION_REQUESTED_SUCCESSFUL, this.regionDiscoveryMetadata.region_used = r, rP.replaceWithRegionalInformation(e, r);
                        this.regionDiscoveryMetadata.region_outcome = l.ki.AUTO_DETECTION_REQUESTED_FAILED
                    }
                    return e
                }
                async updateCloudDiscoveryMetadata(e) {
                    this.performanceClient ? .addQueueMeasurement(tv.AuthorityUpdateCloudDiscoveryMetadata, this.correlationId);
                    let t = this.updateCloudDiscoveryMetadataFromLocalSources(e);
                    if (t) return t;
                    let r = await rO(this.getCloudDiscoveryMetadataFromNetwork.bind(this), tv.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.logger, this.performanceClient, this.correlationId)();
                    if (r) return eE(e, r, !0), l.pQ.NETWORK;
                    throw ej(ex)
                }
                updateCloudDiscoveryMetadataFromLocalSources(e) {
                    this.logger.verbose("Attempting to get cloud discovery metadata  from authority configuration"), this.logger.verbosePii(`Known Authorities: ${this.authorityOptions.knownAuthorities||l.gT.NOT_APPLICABLE}`), this.logger.verbosePii(`Authority Metadata: ${this.authorityOptions.authorityMetadata||l.gT.NOT_APPLICABLE}`), this.logger.verbosePii(`Canonical Authority: ${e.canonical_authority||l.gT.NOT_APPLICABLE}`);
                    let t = this.getCloudDiscoveryMetadataFromConfig();
                    if (t) return this.logger.verbose("Found cloud discovery metadata in authority configuration"), eE(e, t, !1), l.pQ.CONFIG;
                    if (this.logger.verbose("Did not find cloud discovery metadata in the config... Attempting to get cloud discovery metadata from the hardcoded values."), this.options.skipAuthorityMetadataCache) this.logger.verbose("Skipping hardcoded cloud discovery metadata cache since skipAuthorityMetadataCache is set to true. Attempting to get cloud discovery metadata from the network metadata cache.");
                    else {
                        var r;
                        let t = (r = this.hostnameAndPort, ti(tt.metadata, r));
                        if (t) return this.logger.verbose("Found cloud discovery metadata from hardcoded values."), eE(e, t, !1), l.pQ.HARDCODED_VALUES;
                        this.logger.verbose("Did not find cloud discovery metadata in hardcoded values... Attempting to get cloud discovery metadata from the network metadata cache.")
                    }
                    let n = e_(e);
                    return this.isAuthoritySameType(e) && e.aliasesFromNetwork && !n ? (this.logger.verbose("Found cloud discovery metadata in the cache."), l.pQ.CACHE) : (n && this.logger.verbose("The metadata entity is expired."), null)
                }
                getCloudDiscoveryMetadataFromConfig() {
                    if (this.authorityType === e3.Ciam) return this.logger.verbose("CIAM authorities do not support cloud discovery metadata, generate the aliases from authority host."), rP.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
                    if (this.authorityOptions.cloudDiscoveryMetadata) {
                        this.logger.verbose("The cloud discovery metadata has been provided as a network response, in the config.");
                        try {
                            this.logger.verbose("Attempting to parse the cloud discovery metadata.");
                            let e = JSON.parse(this.authorityOptions.cloudDiscoveryMetadata),
                                t = ti(e.metadata, this.hostnameAndPort);
                            if (this.logger.verbose("Parsed the cloud discovery metadata."), t) return this.logger.verbose("There is returnable metadata attached to the parsed cloud discovery metadata."), t;
                            this.logger.verbose("There is no metadata attached to the parsed cloud discovery metadata.")
                        } catch (e) {
                            throw this.logger.verbose("Unable to parse the cloud discovery metadata. Throwing Invalid Cloud Discovery Metadata Error."), ej(eD)
                        }
                    }
                    return this.isInKnownAuthorities() ? (this.logger.verbose("The host is included in knownAuthorities. Creating new cloud discovery metadata from the host."), rP.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort)) : null
                }
                async getCloudDiscoveryMetadataFromNetwork() {
                    this.performanceClient ? .addQueueMeasurement(tv.AuthorityGetCloudDiscoveryMetadataFromNetwork, this.correlationId);
                    let e = `${l.gT.AAD_INSTANCE_DISCOVERY_ENDPT}${this.canonicalAuthority}oauth2/v2.0/authorize`,
                        t = null;
                    try {
                        var r, n;
                        let i, o;
                        let a = await this.networkInterface.sendGetRequestAsync(e, {});
                        if ((r = a.body).hasOwnProperty("tenant_discovery_endpoint") && r.hasOwnProperty("metadata")) o = (i = a.body).metadata, this.logger.verbosePii(`tenant_discovery_endpoint is: ${i.tenant_discovery_endpoint}`);
                        else {
                            if (!((n = a.body).hasOwnProperty("error") && n.hasOwnProperty("error_description"))) return this.logger.error("AAD did not return a CloudInstanceDiscoveryResponse or CloudInstanceDiscoveryErrorResponse"), null;
                            if (this.logger.warning(`A CloudInstanceDiscoveryErrorResponse was returned. The cloud instance discovery network request's status code is: ${a.status}`), (i = a.body).error === l.gT.INVALID_INSTANCE) return this.logger.error("The CloudInstanceDiscoveryErrorResponse error is invalid_instance."), null;
                            this.logger.warning(`The CloudInstanceDiscoveryErrorResponse error is ${i.error}`), this.logger.warning(`The CloudInstanceDiscoveryErrorResponse error description is ${i.error_description}`), this.logger.warning("Setting the value of the CloudInstanceDiscoveryMetadata (returned from the network) to []"), o = []
                        }
                        this.logger.verbose("Attempting to find a match between the developer's authority and the CloudInstanceDiscoveryMetadata returned from the network request."), t = ti(o, this.hostnameAndPort)
                    } catch (e) {
                        return e instanceof g.l4 ? this.logger.error(`There was a network error while attempting to get the cloud discovery instance metadata.
Error: ${e.errorCode}
Error Description: ${e.errorMessage}`) : this.logger.error(`A non-MSALJS error was thrown while attempting to get the cloud instance discovery metadata.
Error: ${e.name}
Error Description: ${e.message}`), null
                    }
                    return t || (this.logger.warning("The developer's authority was not found within the CloudInstanceDiscoveryMetadata returned from the network request."), this.logger.verbose("Creating custom Authority for custom domain scenario."), t = rP.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort)), t
                }
                isInKnownAuthorities() {
                    return this.authorityOptions.knownAuthorities.filter(e => e && e7.getDomainFromUrl(e).toLowerCase() === this.hostnameAndPort).length > 0
                }
                static generateAuthority(e, t) {
                    let r;
                    if (t && t.azureCloudInstance !== u.None) {
                        let e = t.tenant ? t.tenant : l.gT.DEFAULT_COMMON_TENANT;
                        r = `${t.azureCloudInstance}/${e}/`
                    }
                    return r || e
                }
                static createCloudDiscoveryMetadataFromHost(e) {
                    return {
                        preferred_network: e,
                        preferred_cache: e,
                        aliases: [e]
                    }
                }
                getPreferredCache() {
                    if (this.managedIdentity) return l.gT.DEFAULT_AUTHORITY_HOST;
                    if (this.discoveryComplete()) return this.metadata.preferred_cache;
                    throw ea(y)
                }
                isAlias(e) {
                    return this.metadata.aliases.indexOf(e) > -1
                }
                isAliasOfKnownMicrosoftAuthority(e) {
                    return tr.has(e)
                }
                static isPublicCloudAuthority(e) {
                    return l.gT.KNOWN_PUBLIC_CLOUDS.indexOf(e) >= 0
                }
                static buildRegionalAuthorityString(e, t, r) {
                    let n = new e7(e);
                    n.validateAsUri();
                    let i = n.getUrlComponents(),
                        o = `${t}.${i.HostNameAndPort}`;
                    this.isPublicCloudAuthority(i.HostNameAndPort) && (o = `${t}.${l.gT.REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX}`);
                    let a = e7.constructAuthorityUriFromObject({ ...n.getUrlComponents(),
                        HostNameAndPort: o
                    }).urlString;
                    return r ? `${a}?${r}` : a
                }
                static replaceWithRegionalInformation(e, t) {
                    let r = { ...e
                    };
                    return r.authorization_endpoint = rP.buildRegionalAuthorityString(r.authorization_endpoint, t), r.token_endpoint = rP.buildRegionalAuthorityString(r.token_endpoint, t), r.end_session_endpoint && (r.end_session_endpoint = rP.buildRegionalAuthorityString(r.end_session_endpoint, t)), r
                }
                static transformCIAMAuthority(e) {
                    let t = e,
                        r = new e7(e).getUrlComponents();
                    if (0 === r.PathSegments.length && r.HostNameAndPort.endsWith(l.gT.CIAM_AUTH_URL)) {
                        let e = r.HostNameAndPort.split(".")[0];
                        t = `${t}${e}${l.gT.AAD_TENANT_DOMAIN_SUFFIX}`
                    }
                    return t
                }
            }

            function rM(e) {
                return e.endsWith(l.gT.FORWARD_SLASH) ? e : `${e}${l.gT.FORWARD_SLASH}`
            }
            rP.reservedTenantDomains = new Set(["{tenant}", "{tenantid}", l.Nb.COMMON, l.Nb.CONSUMERS, l.Nb.ORGANIZATIONS]);
            var rq = r(57766),
                rU = r(54826);
            class rH {
                static setRequestState(e, t, r) {
                    let n = rH.generateLibraryState(e, r);
                    return t ? `${n}${l.gT.RESOURCE_DELIM}${t}` : n
                }
                static generateLibraryState(e, t) {
                    if (!e) throw ea(B);
                    let r = {
                        id: e.createNewGuid()
                    };
                    t && (r.meta = t);
                    let n = JSON.stringify(r);
                    return e.base64Encode(n)
                }
                static parseRequestState(e, t) {
                    if (!e) throw ea(B);
                    if (!t) throw ea(v);
                    try {
                        let r = t.split(l.gT.RESOURCE_DELIM),
                            n = r[0],
                            i = r.length > 1 ? r.slice(1).join(l.gT.RESOURCE_DELIM) : l.gT.EMPTY_STRING,
                            o = e.base64Decode(n),
                            a = JSON.parse(o);
                        return {
                            userRequestState: i || l.gT.EMPTY_STRING,
                            libraryState: a
                        }
                    } catch (e) {
                        throw ea(v)
                    }
                }
            }
            let rL = {
                HOME_ACCOUNT_ID: "home_account_id",
                UPN: "UPN"
            };
            class rD {
                constructor() {
                    if (!window.localStorage) throw ra(rt)
                }
                getItem(e) {
                    return window.localStorage.getItem(e)
                }
                setItem(e, t) {
                    window.localStorage.setItem(e, t)
                }
                removeItem(e) {
                    window.localStorage.removeItem(e)
                }
                getKeys() {
                    return Object.keys(window.localStorage)
                }
                containsKey(e) {
                    return window.localStorage.hasOwnProperty(e)
                }
            }
            class rK {
                constructor() {
                    if (!window.sessionStorage) throw ra(rt)
                }
                getItem(e) {
                    return window.sessionStorage.getItem(e)
                }
                setItem(e, t) {
                    window.sessionStorage.setItem(e, t)
                }
                removeItem(e) {
                    window.sessionStorage.removeItem(e)
                }
                getKeys() {
                    return Object.keys(window.sessionStorage)
                }
                containsKey(e) {
                    return window.sessionStorage.hasOwnProperty(e)
                }
            }

            function rx(e, t) {
                if (!t) return null;
                try {
                    return rH.parseRequestState(e, t).libraryState.meta
                } catch (e) {
                    throw ea(v)
                }
            }
            class rF {
                getItem(e) {
                    let t = `${encodeURIComponent(e)}`,
                        r = document.cookie.split(";");
                    for (let e = 0; e < r.length; e++) {
                        let [n, ...i] = decodeURIComponent(r[e]).trim().split("="), o = i.join("=");
                        if (n === t) return o
                    }
                    return ""
                }
                setItem(e, t, r, n = !0) {
                    let i = `${encodeURIComponent(e)}=${encodeURIComponent(t)};path=/;SameSite=Lax;`;
                    if (r) {
                        let e = new Date(new Date().getTime() + 864e5 * r).toUTCString();
                        i += `expires=${e};`
                    }
                    n && (i += "Secure;"), document.cookie = i
                }
                removeItem(e) {
                    this.setItem(e, "", -1)
                }
                getKeys() {
                    let e = document.cookie.split(";"),
                        t = [];
                    return e.forEach(e => {
                        let r = decodeURIComponent(e).trim().split("=");
                        t.push(r[0])
                    }), t
                }
                containsKey(e) {
                    return this.getKeys().includes(e)
                }
            }
            class rB extends th {
                constructor(e, t, r, n, i, o) {
                    super(e, r, n, i), this.cacheConfig = t, this.logger = n, this.internalStorage = new r_, this.browserStorage = this.setupBrowserStorage(this.cacheConfig.cacheLocation), this.temporaryCacheStorage = this.setupBrowserStorage(this.cacheConfig.temporaryCacheLocation), this.cookieStorage = new rF, t.cacheMigrationEnabled && (this.migrateCacheEntries(), this.createKeyMaps()), this.performanceClient = o
                }
                setupBrowserStorage(e) {
                    try {
                        switch (e) {
                            case tR.LocalStorage:
                                return new rD;
                            case tR.SessionStorage:
                                return new rK;
                            case tR.MemoryStorage:
                        }
                    } catch (e) {
                        this.logger.error(e)
                    }
                    return this.cacheConfig.cacheLocation = tR.MemoryStorage, new r_
                }
                migrateCacheEntries() {
                    let e = this.browserStorage.getItem(tN.VERSION);
                    e && this.logger.info(`MSAL.js was last initialized with version ${e}`), e !== rp && this.browserStorage.setItem(tN.VERSION, rp);
                    let t = `${l.gT.CACHE_PREFIX}.${l.Vi.ID_TOKEN}`,
                        r = `${l.gT.CACHE_PREFIX}.${l.Vi.CLIENT_INFO}`,
                        n = `${l.gT.CACHE_PREFIX}.${l.Vi.ERROR}`,
                        i = `${l.gT.CACHE_PREFIX}.${l.Vi.ERROR_DESC}`,
                        o = this.browserStorage.getItem(t),
                        a = [o, this.browserStorage.getItem(r), this.browserStorage.getItem(n), this.browserStorage.getItem(i)];
                    [l.Vi.ID_TOKEN, l.Vi.CLIENT_INFO, l.Vi.ERROR, l.Vi.ERROR_DESC].forEach((e, t) => {
                        let r = a[t];
                        r && this.setTemporaryCache(e, r, !0)
                    })
                }
                createKeyMaps() {
                    this.logger.trace("BrowserCacheManager - createKeyMaps called.");
                    let e = this.cryptoImpl.createNewGuid(),
                        t = this.getItem(tN.ACCOUNT_KEYS),
                        r = this.getItem(`${tN.TOKEN_KEYS}.${this.clientId}`);
                    if (t && r) {
                        this.logger.verbose("BrowserCacheManager:createKeyMaps - account and token key maps already exist, skipping migration.");
                        return
                    }
                    this.browserStorage.getKeys().forEach(t => {
                        if (this.isCredentialKey(t)) {
                            let r = this.getItem(t);
                            if (r) {
                                let n = this.validateAndParseJson(r);
                                if (n && n.hasOwnProperty("credentialType")) switch (n.credentialType) {
                                    case l.d3.ID_TOKEN:
                                        if (eI(n)) {
                                            this.logger.trace("BrowserCacheManager:createKeyMaps - idToken found, saving key to token key map"), this.logger.tracePii(`BrowserCacheManager:createKeyMaps - idToken with key: ${t} found, saving key to token key map`);
                                            let r = this.updateCredentialCacheKey(t, n, e);
                                            this.addTokenKey(r, l.d3.ID_TOKEN, e);
                                            return
                                        }
                                        this.logger.trace("BrowserCacheManager:createKeyMaps - key found matching idToken schema with value containing idToken credentialType field but value failed IdTokenEntity validation, skipping."), this.logger.tracePii(`BrowserCacheManager:createKeyMaps - failed idToken validation on key: ${t}`);
                                        break;
                                    case l.d3.ACCESS_TOKEN:
                                    case l.d3.ACCESS_TOKEN_WITH_AUTH_SCHEME:
                                        if (eT(n)) {
                                            this.logger.trace("BrowserCacheManager:createKeyMaps - accessToken found, saving key to token key map"), this.logger.tracePii(`BrowserCacheManager:createKeyMaps - accessToken with key: ${t} found, saving key to token key map`);
                                            let r = this.updateCredentialCacheKey(t, n, e);
                                            this.addTokenKey(r, l.d3.ACCESS_TOKEN, e);
                                            return
                                        }
                                        this.logger.trace("BrowserCacheManager:createKeyMaps - key found matching accessToken schema with value containing accessToken credentialType field but value failed AccessTokenEntity validation, skipping."), this.logger.tracePii(`BrowserCacheManager:createKeyMaps - failed accessToken validation on key: ${t}`);
                                        break;
                                    case l.d3.REFRESH_TOKEN:
                                        if (eA(n)) {
                                            this.logger.trace("BrowserCacheManager:createKeyMaps - refreshToken found, saving key to token key map"), this.logger.tracePii(`BrowserCacheManager:createKeyMaps - refreshToken with key: ${t} found, saving key to token key map`);
                                            let r = this.updateCredentialCacheKey(t, n, e);
                                            this.addTokenKey(r, l.d3.REFRESH_TOKEN, e);
                                            return
                                        }
                                        this.logger.trace("BrowserCacheManager:createKeyMaps - key found matching refreshToken schema with value containing refreshToken credentialType field but value failed RefreshTokenEntity validation, skipping."), this.logger.tracePii(`BrowserCacheManager:createKeyMaps - failed refreshToken validation on key: ${t}`)
                                }
                            }
                        }
                        if (this.isAccountKey(t)) {
                            let r = this.getItem(t);
                            if (r) {
                                let n = this.validateAndParseJson(r);
                                n && e5.isAccountEntity(n) && (this.logger.trace("BrowserCacheManager:createKeyMaps - account found, saving key to account key map"), this.logger.tracePii(`BrowserCacheManager:createKeyMaps - account with key: ${t} found, saving key to account key map`), this.addAccountKeyToMap(t, e))
                            }
                        }
                    })
                }
                validateAndParseJson(e) {
                    try {
                        let t = JSON.parse(e);
                        return t && "object" == typeof t ? t : null
                    } catch (e) {
                        return null
                    }
                }
                getItem(e) {
                    return this.browserStorage.getItem(e)
                }
                setItem(e, t, r) {
                    let n = [];
                    for (let i = 0; i <= 20; i++) try {
                        this.browserStorage.setItem(e, t), i > 0 && this.removeAccessTokenKeys(n.slice(0, i), r);
                        break
                    } catch (a) {
                        let o = tl(a);
                        if (o.errorCode === to && i < 20) {
                            if (n.length || (n = e === `${tN.TOKEN_KEYS}.${this.clientId}` ? JSON.parse(t).accessToken : this.getTokenKeys().accessToken), n.length <= i) throw o;
                            this.removeAccessToken(n[i], r, !1)
                        } else throw o
                    }
                }
                getAccount(e, t, r) {
                    this.logger.trace("BrowserCacheManager.getAccount called");
                    let n = this.getCachedAccountEntity(e, t);
                    return this.updateOutdatedCachedAccount(e, n, t, r)
                }
                getCachedAccountEntity(e, t) {
                    let r = this.getItem(e);
                    if (!r) return this.removeAccountKeyFromMap(e, t), null;
                    let n = this.validateAndParseJson(r);
                    return n && e5.isAccountEntity(n) ? th.toObject(new e5, n) : null
                }
                setAccount(e, t) {
                    this.logger.trace("BrowserCacheManager.setAccount called");
                    let r = e.generateAccountKey();
                    e.lastUpdatedAt = Date.now().toString(), this.setItem(r, JSON.stringify(e), t), this.addAccountKeyToMap(r, t)
                }
                getAccountKeys() {
                    this.logger.trace("BrowserCacheManager.getAccountKeys called");
                    let e = this.getItem(tN.ACCOUNT_KEYS);
                    return e ? JSON.parse(e) : (this.logger.verbose("BrowserCacheManager.getAccountKeys - No account keys found"), [])
                }
                addAccountKeyToMap(e, t) {
                    this.logger.trace("BrowserCacheManager.addAccountKeyToMap called"), this.logger.tracePii(`BrowserCacheManager.addAccountKeyToMap called with key: ${e}`);
                    let r = this.getAccountKeys(); - 1 === r.indexOf(e) ? (r.push(e), this.setItem(tN.ACCOUNT_KEYS, JSON.stringify(r), t), this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key added")) : this.logger.verbose("BrowserCacheManager.addAccountKeyToMap account key already exists in map")
                }
                removeAccountKeyFromMap(e, t) {
                    this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap called"), this.logger.tracePii(`BrowserCacheManager.removeAccountKeyFromMap called with key: ${e}`);
                    let r = this.getAccountKeys(),
                        n = r.indexOf(e);
                    if (n > -1) {
                        if (r.splice(n, 1), 0 === r.length) {
                            this.removeItem(tN.ACCOUNT_KEYS);
                            return
                        }
                        this.setItem(tN.ACCOUNT_KEYS, JSON.stringify(r), t), this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap account key removed")
                    } else this.logger.trace("BrowserCacheManager.removeAccountKeyFromMap key not found in existing map")
                }
                async removeAccount(e, t) {
                    super.removeAccount(e, t), this.removeAccountKeyFromMap(e, t)
                }
                removeOutdatedAccount(e, t) {
                    this.removeItem(e), this.removeAccountKeyFromMap(e, t)
                }
                removeIdToken(e, t) {
                    super.removeIdToken(e, t), this.removeTokenKey(e, l.d3.ID_TOKEN, t)
                }
                removeAccessToken(e, t, r = !0) {
                    super.removeAccessToken(e, t), this.performanceClient ? .incrementFields({
                        accessTokensRemoved: 1
                    }, t), r && this.removeTokenKey(e, l.d3.ACCESS_TOKEN, t)
                }
                removeAccessTokenKeys(e, t) {
                    this.logger.trace("removeAccessTokenKey called");
                    let r = this.getTokenKeys(),
                        n = 0;
                    if (e.forEach(e => {
                            let t = r.accessToken.indexOf(e);
                            t > -1 && (r.accessToken.splice(t, 1), n++)
                        }), n > 0) {
                        this.logger.info(`removed ${n} accessToken keys from tokenKeys map`), this.setTokenKeys(r, t);
                        return
                    }
                }
                removeRefreshToken(e, t) {
                    super.removeRefreshToken(e, t), this.removeTokenKey(e, l.d3.REFRESH_TOKEN, t)
                }
                getTokenKeys() {
                    this.logger.trace("BrowserCacheManager.getTokenKeys called");
                    let e = this.getItem(`${tN.TOKEN_KEYS}.${this.clientId}`);
                    if (e) {
                        let t = this.validateAndParseJson(e);
                        if (t && t.hasOwnProperty("idToken") && t.hasOwnProperty("accessToken") && t.hasOwnProperty("refreshToken")) return t;
                        this.logger.error("BrowserCacheManager.getTokenKeys - Token keys found but in an unknown format. Returning empty key map.")
                    } else this.logger.verbose("BrowserCacheManager.getTokenKeys - No token keys found");
                    return {
                        idToken: [],
                        accessToken: [],
                        refreshToken: []
                    }
                }
                setTokenKeys(e, t) {
                    if (0 === e.idToken.length && 0 === e.accessToken.length && 0 === e.refreshToken.length) {
                        this.removeItem(`${tN.TOKEN_KEYS}.${this.clientId}`);
                        return
                    }
                    this.setItem(`${tN.TOKEN_KEYS}.${this.clientId}`, JSON.stringify(e), t)
                }
                addTokenKey(e, t, r) {
                    this.logger.trace("BrowserCacheManager addTokenKey called");
                    let n = this.getTokenKeys();
                    switch (t) {
                        case l.d3.ID_TOKEN:
                            -1 === n.idToken.indexOf(e) && (this.logger.info("BrowserCacheManager: addTokenKey - idToken added to map"), n.idToken.push(e));
                            break;
                        case l.d3.ACCESS_TOKEN:
                            let i = n.accessToken.indexOf(e); - 1 !== i && n.accessToken.splice(i, 1), this.logger.trace(`access token ${-1===i?"added to":"updated in"} map`), n.accessToken.push(e);
                            break;
                        case l.d3.REFRESH_TOKEN:
                            -1 === n.refreshToken.indexOf(e) && (this.logger.info("BrowserCacheManager: addTokenKey - refreshToken added to map"), n.refreshToken.push(e));
                            break;
                        default:
                            throw this.logger.error(`BrowserCacheManager:addTokenKey - CredentialType provided invalid. CredentialType: ${t}`), ea(G)
                    }
                    this.setTokenKeys(n, r)
                }
                removeTokenKey(e, t, r, n = this.getTokenKeys()) {
                    switch (this.logger.trace("BrowserCacheManager removeTokenKey called"), t) {
                        case l.d3.ID_TOKEN:
                            this.logger.infoPii(`BrowserCacheManager: removeTokenKey - attempting to remove idToken with key: ${e} from map`);
                            let i = n.idToken.indexOf(e);
                            i > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - idToken removed from map"), n.idToken.splice(i, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - idToken does not exist in map. Either it was previously removed or it was never added.");
                            break;
                        case l.d3.ACCESS_TOKEN:
                            this.logger.infoPii(`BrowserCacheManager: removeTokenKey - attempting to remove accessToken with key: ${e} from map`);
                            let o = n.accessToken.indexOf(e);
                            o > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - accessToken removed from map"), n.accessToken.splice(o, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - accessToken does not exist in map. Either it was previously removed or it was never added.");
                            break;
                        case l.d3.REFRESH_TOKEN:
                            this.logger.infoPii(`BrowserCacheManager: removeTokenKey - attempting to remove refreshToken with key: ${e} from map`);
                            let a = n.refreshToken.indexOf(e);
                            a > -1 ? (this.logger.info("BrowserCacheManager: removeTokenKey - refreshToken removed from map"), n.refreshToken.splice(a, 1)) : this.logger.info("BrowserCacheManager: removeTokenKey - refreshToken does not exist in map. Either it was previously removed or it was never added.");
                            break;
                        default:
                            throw this.logger.error(`BrowserCacheManager:removeTokenKey - CredentialType provided invalid. CredentialType: ${t}`), ea(G)
                    }
                    this.setTokenKeys(n, r)
                }
                getIdTokenCredential(e, t) {
                    let r = this.getItem(e);
                    if (!r) return this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), this.removeIdToken(e, t), null;
                    let n = this.validateAndParseJson(r);
                    return n && eI(n) ? (this.logger.trace("BrowserCacheManager.getIdTokenCredential: cache hit"), n) : (this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit"), null)
                }
                setIdTokenCredential(e, t) {
                    this.logger.trace("BrowserCacheManager.setIdTokenCredential called");
                    let r = ep(e);
                    e.lastUpdatedAt = Date.now().toString(), this.setItem(r, JSON.stringify(e), t), this.addTokenKey(r, l.d3.ID_TOKEN, t)
                }
                getAccessTokenCredential(e, t) {
                    let r = this.getItem(e);
                    if (!r) return this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), this.removeTokenKey(e, l.d3.ACCESS_TOKEN, t), null;
                    let n = this.validateAndParseJson(r);
                    return n && eT(n) ? (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: cache hit"), n) : (this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit"), null)
                }
                setAccessTokenCredential(e, t) {
                    this.logger.trace("BrowserCacheManager.setAccessTokenCredential called");
                    let r = ep(e);
                    e.lastUpdatedAt = Date.now().toString(), this.setItem(r, JSON.stringify(e), t), this.addTokenKey(r, l.d3.ACCESS_TOKEN, t)
                }
                getRefreshTokenCredential(e, t) {
                    let r = this.getItem(e);
                    if (!r) return this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), this.removeTokenKey(e, l.d3.REFRESH_TOKEN, t), null;
                    let n = this.validateAndParseJson(r);
                    return n && eA(n) ? (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: cache hit"), n) : (this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit"), null)
                }
                setRefreshTokenCredential(e, t) {
                    this.logger.trace("BrowserCacheManager.setRefreshTokenCredential called");
                    let r = ep(e);
                    e.lastUpdatedAt = Date.now().toString(), this.setItem(r, JSON.stringify(e), t), this.addTokenKey(r, l.d3.REFRESH_TOKEN, t)
                }
                getAppMetadata(e) {
                    let t = this.getItem(e);
                    if (!t) return this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit"), null;
                    let r = this.validateAndParseJson(t);
                    return r && r && 0 === e.indexOf(l.dg) && r.hasOwnProperty("clientId") && r.hasOwnProperty("environment") ? (this.logger.trace("BrowserCacheManager.getAppMetadata: cache hit"), r) : (this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit"), null)
                }
                setAppMetadata(e, t) {
                    this.logger.trace("BrowserCacheManager.setAppMetadata called");
                    let r = function({
                        environment: e,
                        clientId: t
                    }) {
                        return [l.dg, e, t].join(l.Bv.CACHE_KEY_SEPARATOR).toLowerCase()
                    }(e);
                    this.setItem(r, JSON.stringify(e), t)
                }
                getServerTelemetry(e) {
                    let t = this.getItem(e);
                    if (!t) return this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null;
                    let r = this.validateAndParseJson(t);
                    return r && function(e, t) {
                        let r = 0 === e.indexOf(l.HN.CACHE_KEY),
                            n = !0;
                        return t && (n = t.hasOwnProperty("failedRequests") && t.hasOwnProperty("errors") && t.hasOwnProperty("cacheHits")), r && n
                    }(e, r) ? (this.logger.trace("BrowserCacheManager.getServerTelemetry: cache hit"), r) : (this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit"), null)
                }
                setServerTelemetry(e, t, r) {
                    this.logger.trace("BrowserCacheManager.setServerTelemetry called"), this.setItem(e, JSON.stringify(t), r)
                }
                getAuthorityMetadata(e) {
                    let t = this.internalStorage.getItem(e);
                    if (!t) return this.logger.trace("BrowserCacheManager.getAuthorityMetadata: called, no cache hit"), null;
                    let r = this.validateAndParseJson(t);
                    return r && r && 0 === e.indexOf(l.QU.CACHE_KEY) && r.hasOwnProperty("aliases") && r.hasOwnProperty("preferred_cache") && r.hasOwnProperty("preferred_network") && r.hasOwnProperty("canonical_authority") && r.hasOwnProperty("authorization_endpoint") && r.hasOwnProperty("token_endpoint") && r.hasOwnProperty("issuer") && r.hasOwnProperty("aliasesFromNetwork") && r.hasOwnProperty("endpointsFromNetwork") && r.hasOwnProperty("expiresAt") && r.hasOwnProperty("jwks_uri") ? (this.logger.trace("BrowserCacheManager.getAuthorityMetadata: cache hit"), r) : null
                }
                getAuthorityMetadataKeys() {
                    return this.internalStorage.getKeys().filter(e => this.isAuthorityMetadata(e))
                }
                setWrapperMetadata(e, t) {
                    this.internalStorage.setItem(tP, e), this.internalStorage.setItem(tM, t)
                }
                getWrapperMetadata() {
                    return [this.internalStorage.getItem(tP) || l.gT.EMPTY_STRING, this.internalStorage.getItem(tM) || l.gT.EMPTY_STRING]
                }
                setAuthorityMetadata(e, t) {
                    this.logger.trace("BrowserCacheManager.setAuthorityMetadata called"), this.internalStorage.setItem(e, JSON.stringify(t))
                }
                getActiveAccount(e) {
                    let t = this.generateCacheKey(l.Vi.ACTIVE_ACCOUNT_FILTERS),
                        r = this.getItem(t);
                    if (!r) {
                        this.logger.trace("BrowserCacheManager.getActiveAccount: No active account filters cache schema found, looking for legacy schema");
                        let t = this.generateCacheKey(l.Vi.ACTIVE_ACCOUNT),
                            r = this.getItem(t);
                        if (!r) return this.logger.trace("BrowserCacheManager.getActiveAccount: No active account found"), null;
                        let n = this.getAccountInfoFilteredBy({
                            localAccountId: r
                        }, e);
                        return n ? (this.logger.trace("BrowserCacheManager.getActiveAccount: Legacy active account cache schema found"), this.logger.trace("BrowserCacheManager.getActiveAccount: Adding active account filters cache schema"), this.setActiveAccount(n, e), n) : null
                    }
                    let n = this.validateAndParseJson(r);
                    return n ? (this.logger.trace("BrowserCacheManager.getActiveAccount: Active account filters schema found"), this.getAccountInfoFilteredBy({
                        homeAccountId: n.homeAccountId,
                        localAccountId: n.localAccountId,
                        tenantId: n.tenantId
                    }, e)) : (this.logger.trace("BrowserCacheManager.getActiveAccount: No active account found"), null)
                }
                setActiveAccount(e, t) {
                    let r = this.generateCacheKey(l.Vi.ACTIVE_ACCOUNT_FILTERS),
                        n = this.generateCacheKey(l.Vi.ACTIVE_ACCOUNT);
                    if (e) {
                        this.logger.verbose("setActiveAccount: Active account set");
                        let i = {
                            homeAccountId: e.homeAccountId,
                            localAccountId: e.localAccountId,
                            tenantId: e.tenantId,
                            lastUpdatedAt: Date.now().toString()
                        };
                        this.setItem(r, JSON.stringify(i), t), this.setItem(n, e.localAccountId, t)
                    } else this.logger.verbose("setActiveAccount: No account passed, active account not set"), this.browserStorage.removeItem(r), this.browserStorage.removeItem(n)
                }
                getThrottlingCache(e) {
                    let t, r;
                    let n = this.getItem(e);
                    if (!n) return this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null;
                    let i = this.validateAndParseJson(n);
                    return i && (t = !1, e && (t = 0 === e.indexOf(l.bb.THROTTLING_PREFIX)), r = !0, i && (r = i.hasOwnProperty("throttleTime")), t && r) ? (this.logger.trace("BrowserCacheManager.getThrottlingCache: cache hit"), i) : (this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit"), null)
                }
                setThrottlingCache(e, t, r) {
                    this.logger.trace("BrowserCacheManager.setThrottlingCache called"), this.setItem(e, JSON.stringify(t), r)
                }
                getTemporaryCache(e, t) {
                    let r = t ? this.generateCacheKey(e) : e;
                    if (this.cacheConfig.storeAuthStateInCookie) {
                        let e = this.cookieStorage.getItem(r);
                        if (e) return this.logger.trace("BrowserCacheManager.getTemporaryCache: storeAuthStateInCookies set to true, retrieving from cookies"), e
                    }
                    let n = this.temporaryCacheStorage.getItem(r);
                    if (!n) {
                        if (this.cacheConfig.cacheLocation === tR.LocalStorage) {
                            let e = this.browserStorage.getItem(r);
                            if (e) return this.logger.trace("BrowserCacheManager.getTemporaryCache: Temporary cache item found in local storage"), e
                        }
                        return this.logger.trace("BrowserCacheManager.getTemporaryCache: No cache item found in local storage"), null
                    }
                    return this.logger.trace("BrowserCacheManager.getTemporaryCache: Temporary cache item returned"), n
                }
                setTemporaryCache(e, t, r) {
                    let n = r ? this.generateCacheKey(e) : e;
                    this.temporaryCacheStorage.setItem(n, t), this.cacheConfig.storeAuthStateInCookie && (this.logger.trace("BrowserCacheManager.setTemporaryCache: storeAuthStateInCookie set to true, setting item cookie"), this.cookieStorage.setItem(n, t, void 0, this.cacheConfig.secureCookies))
                }
                removeItem(e) {
                    this.browserStorage.removeItem(e)
                }
                removeTemporaryItem(e) {
                    this.temporaryCacheStorage.removeItem(e), this.cacheConfig.storeAuthStateInCookie && (this.logger.trace("BrowserCacheManager.removeItem: storeAuthStateInCookie is true, clearing item cookie"), this.cookieStorage.removeItem(e))
                }
                getKeys() {
                    return this.browserStorage.getKeys()
                }
                async clear(e) {
                    await this.removeAllAccounts(e), this.removeAppMetadata(e), this.temporaryCacheStorage.getKeys().forEach(e => {
                        (-1 !== e.indexOf(l.gT.CACHE_PREFIX) || -1 !== e.indexOf(this.clientId)) && this.removeTemporaryItem(e)
                    }), this.browserStorage.getKeys().forEach(e => {
                        (-1 !== e.indexOf(l.gT.CACHE_PREFIX) || -1 !== e.indexOf(this.clientId)) && this.browserStorage.removeItem(e)
                    }), this.internalStorage.clear()
                }
                async clearTokensAndKeysWithClaims(e, t) {
                    e.addQueueMeasurement(tv.ClearTokensAndKeysWithClaims, t);
                    let r = this.getTokenKeys(),
                        n = 0;
                    r.accessToken.forEach(e => {
                        let r = this.getAccessTokenCredential(e, t);
                        r ? .requestedClaimsHash && e.includes(r.requestedClaimsHash.toLowerCase()) && (this.removeAccessToken(e, t), n++)
                    }), n > 0 && this.logger.warning(`${n} access tokens with claims in the cache keys have been removed from the cache.`)
                }
                generateCacheKey(e) {
                    return this.validateAndParseJson(e) ? JSON.stringify(e) : eJ.startsWith(e, l.gT.CACHE_PREFIX) || eJ.startsWith(e, l.Vi.ADAL_ID_TOKEN) ? e : `${l.gT.CACHE_PREFIX}.${this.clientId}.${e}`
                }
                generateAuthorityKey(e) {
                    let {
                        libraryState: {
                            id: t
                        }
                    } = rH.parseRequestState(this.cryptoImpl, e);
                    return this.generateCacheKey(`${tO.AUTHORITY}.${t}`)
                }
                generateNonceKey(e) {
                    let {
                        libraryState: {
                            id: t
                        }
                    } = rH.parseRequestState(this.cryptoImpl, e);
                    return this.generateCacheKey(`${tO.NONCE_IDTOKEN}.${t}`)
                }
                generateStateKey(e) {
                    let {
                        libraryState: {
                            id: t
                        }
                    } = rH.parseRequestState(this.cryptoImpl, e);
                    return this.generateCacheKey(`${tO.REQUEST_STATE}.${t}`)
                }
                getCachedAuthority(e) {
                    let t = this.generateStateKey(e),
                        r = this.getTemporaryCache(t);
                    if (!r) return null;
                    let n = this.generateAuthorityKey(r);
                    return this.getTemporaryCache(n)
                }
                updateCacheEntries(e, t, r, n, i) {
                    this.logger.trace("BrowserCacheManager.updateCacheEntries called");
                    let o = this.generateStateKey(e);
                    this.setTemporaryCache(o, e, !1);
                    let a = this.generateNonceKey(e);
                    this.setTemporaryCache(a, t, !1);
                    let s = this.generateAuthorityKey(e);
                    if (this.setTemporaryCache(s, r, !1), i) {
                        let e = {
                            credential: i.homeAccountId,
                            type: rL.HOME_ACCOUNT_ID
                        };
                        this.setTemporaryCache(tO.CCS_CREDENTIAL, JSON.stringify(e), !0)
                    } else if (n) {
                        let e = {
                            credential: n,
                            type: rL.UPN
                        };
                        this.setTemporaryCache(tO.CCS_CREDENTIAL, JSON.stringify(e), !0)
                    }
                }
                resetRequestCache(e) {
                    this.logger.trace("BrowserCacheManager.resetRequestCache called"), e && (this.temporaryCacheStorage.getKeys().forEach(t => {
                        -1 !== t.indexOf(e) && this.removeTemporaryItem(t)
                    }), this.removeTemporaryItem(this.generateStateKey(e)), this.removeTemporaryItem(this.generateNonceKey(e)), this.removeTemporaryItem(this.generateAuthorityKey(e))), this.removeTemporaryItem(this.generateCacheKey(tO.REQUEST_PARAMS)), this.removeTemporaryItem(this.generateCacheKey(tO.ORIGIN_URI)), this.removeTemporaryItem(this.generateCacheKey(tO.URL_HASH)), this.removeTemporaryItem(this.generateCacheKey(tO.CORRELATION_ID)), this.removeTemporaryItem(this.generateCacheKey(tO.CCS_CREDENTIAL)), this.removeTemporaryItem(this.generateCacheKey(tO.NATIVE_REQUEST)), this.setInteractionInProgress(!1)
                }
                cleanRequestByState(e) {
                    if (this.logger.trace("BrowserCacheManager.cleanRequestByState called"), e) {
                        let t = this.generateStateKey(e),
                            r = this.temporaryCacheStorage.getItem(t);
                        this.logger.infoPii(`BrowserCacheManager.cleanRequestByState: Removing temporary cache items for state: ${r}`), this.resetRequestCache(r || l.gT.EMPTY_STRING)
                    }
                }
                cleanRequestByInteractionType(e) {
                    this.logger.trace("BrowserCacheManager.cleanRequestByInteractionType called"), this.temporaryCacheStorage.getKeys().forEach(t => {
                        if (-1 === t.indexOf(tO.REQUEST_STATE)) return;
                        let r = this.temporaryCacheStorage.getItem(t);
                        if (!r) return;
                        let n = rx(this.cryptoImpl, r);
                        n && n.interactionType === e && (this.logger.infoPii(`BrowserCacheManager.cleanRequestByInteractionType: Removing temporary cache items for state: ${r}`), this.resetRequestCache(r))
                    }), this.setInteractionInProgress(!1)
                }
                cacheCodeRequest(e) {
                    this.logger.trace("BrowserCacheManager.cacheCodeRequest called");
                    let t = tW(JSON.stringify(e));
                    this.setTemporaryCache(tO.REQUEST_PARAMS, t, !0)
                }
                getCachedRequest(e) {
                    let t;
                    this.logger.trace("BrowserCacheManager.getCachedRequest called");
                    let r = this.getTemporaryCache(tO.REQUEST_PARAMS, !0);
                    if (!r) throw (0, tB.Z_)(tG.QO);
                    try {
                        t = JSON.parse(rw(r))
                    } catch (e) {
                        throw this.logger.errorPii(`Attempted to parse: ${r}`), this.logger.error(`Parsing cached token request threw with error: ${e}`), (0, tB.Z_)(tG.e$)
                    }
                    if (this.removeTemporaryItem(this.generateCacheKey(tO.REQUEST_PARAMS)), !t.authority) {
                        let r = this.generateAuthorityKey(e),
                            n = this.getTemporaryCache(r);
                        if (!n) throw (0, tB.Z_)(tG.dT);
                        t.authority = n
                    }
                    return t
                }
                getCachedNativeRequest() {
                    this.logger.trace("BrowserCacheManager.getCachedNativeRequest called");
                    let e = this.getTemporaryCache(tO.NATIVE_REQUEST, !0);
                    return e ? this.validateAndParseJson(e) || (this.logger.error("BrowserCacheManager.getCachedNativeRequest: Unable to parse native request"), null) : (this.logger.trace("BrowserCacheManager.getCachedNativeRequest: No cached native request found"), null)
                }
                isInteractionInProgress(e) {
                    let t = this.getInteractionInProgress();
                    return e ? t === this.clientId : !!t
                }
                getInteractionInProgress() {
                    let e = `${l.gT.CACHE_PREFIX}.${tO.INTERACTION_STATUS_KEY}`;
                    return this.getTemporaryCache(e, !1)
                }
                setInteractionInProgress(e) {
                    let t = `${l.gT.CACHE_PREFIX}.${tO.INTERACTION_STATUS_KEY}`;
                    if (e) {
                        if (this.getInteractionInProgress()) throw (0, tB.Z_)(tG.Ck);
                        this.setTemporaryCache(t, this.clientId, !1)
                    } else e || this.getInteractionInProgress() !== this.clientId || this.removeTemporaryItem(t)
                }
                getLegacyLoginHint() {
                    let e = this.getTemporaryCache(l.Vi.ADAL_ID_TOKEN);
                    e && (this.browserStorage.removeItem(l.Vi.ADAL_ID_TOKEN), this.logger.verbose("Cached ADAL id token retrieved."));
                    let t = this.getTemporaryCache(l.Vi.ID_TOKEN, !0);
                    t && (this.browserStorage.removeItem(this.generateCacheKey(l.Vi.ID_TOKEN)), this.logger.verbose("Cached MSAL.js v1 id token retrieved"));
                    let r = t || e;
                    if (r) {
                        let e = eh(r, rw);
                        if (e.preferred_username) return this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 preferred_username as loginHint"), e.preferred_username;
                        if (e.upn) return this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 upn as loginHint"), e.upn;
                        this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, however, no account hint claim found. Enable preferred_username or upn id token claim to get SSO.")
                    }
                    return null
                }
                updateCredentialCacheKey(e, t, r) {
                    let n = ep(t);
                    if (e !== n) {
                        let i = this.getItem(e);
                        if (i) return this.browserStorage.removeItem(e), this.setItem(n, i, r), this.logger.verbose(`Updated an outdated ${t.credentialType} cache key`), n;
                        this.logger.error(`Attempted to update an outdated ${t.credentialType} cache key but no item matching the outdated key was found in storage`)
                    }
                    return e
                }
                async hydrateCache(e, t) {
                    let r;
                    let n = em(e.account ? .homeAccountId, e.account ? .environment, e.idToken, this.clientId, e.tenantId);
                    t.claims && (r = await this.cryptoImpl.hashString(t.claims));
                    let i = eC(e.account ? .homeAccountId, e.account.environment, e.accessToken, this.clientId, e.tenantId, e.scopes.join(" "), e.expiresOn ? e.expiresOn.getTime() / 1e3 : 0, e.extExpiresOn ? e.extExpiresOn.getTime() / 1e3 : 0, rw, void 0, e.tokenType, void 0, t.sshKid, t.claims, r);
                    return this.saveCacheRecord({
                        idToken: n,
                        accessToken: i
                    }, e.correlationId)
                }
                async saveCacheRecord(e, t, r) {
                    try {
                        await super.saveCacheRecord(e, t, r)
                    } catch (e) {
                        if (e instanceof tc && this.performanceClient && t) try {
                            let e = this.getTokenKeys();
                            this.performanceClient.addFields({
                                cacheRtCount: e.refreshToken.length,
                                cacheIdCount: e.idToken.length,
                                cacheAtCount: e.accessToken.length
                            }, t)
                        } catch (e) {}
                        throw e
                    }
                }
            }
            let rG = (e, t) => new rB(e, {
                    cacheLocation: tR.MemoryStorage,
                    temporaryCacheLocation: tR.MemoryStorage,
                    storeAuthStateInCookie: !1,
                    secureCookies: !1,
                    cacheMigrationEnabled: !1,
                    claimsBasedCachingEnabled: !1
                }, es, t),
                r$ = {
                    INITIALIZE_START: "msal:initializeStart",
                    INITIALIZE_END: "msal:initializeEnd",
                    ACCOUNT_ADDED: "msal:accountAdded",
                    ACCOUNT_REMOVED: "msal:accountRemoved",
                    ACTIVE_ACCOUNT_CHANGED: "msal:activeAccountChanged",
                    LOGIN_START: "msal:loginStart",
                    LOGIN_SUCCESS: "msal:loginSuccess",
                    LOGIN_FAILURE: "msal:loginFailure",
                    ACQUIRE_TOKEN_START: "msal:acquireTokenStart",
                    ACQUIRE_TOKEN_SUCCESS: "msal:acquireTokenSuccess",
                    ACQUIRE_TOKEN_FAILURE: "msal:acquireTokenFailure",
                    ACQUIRE_TOKEN_NETWORK_START: "msal:acquireTokenFromNetworkStart",
                    SSO_SILENT_START: "msal:ssoSilentStart",
                    SSO_SILENT_SUCCESS: "msal:ssoSilentSuccess",
                    SSO_SILENT_FAILURE: "msal:ssoSilentFailure",
                    ACQUIRE_TOKEN_BY_CODE_START: "msal:acquireTokenByCodeStart",
                    ACQUIRE_TOKEN_BY_CODE_SUCCESS: "msal:acquireTokenByCodeSuccess",
                    ACQUIRE_TOKEN_BY_CODE_FAILURE: "msal:acquireTokenByCodeFailure",
                    HANDLE_REDIRECT_START: "msal:handleRedirectStart",
                    HANDLE_REDIRECT_END: "msal:handleRedirectEnd",
                    POPUP_OPENED: "msal:popupOpened",
                    LOGOUT_START: "msal:logoutStart",
                    LOGOUT_SUCCESS: "msal:logoutSuccess",
                    LOGOUT_FAILURE: "msal:logoutFailure",
                    LOGOUT_END: "msal:logoutEnd",
                    RESTORE_FROM_BFCACHE: "msal:restoreFromBFCache"
                };
            class rz {
                constructor(e) {
                    this.eventCallbacks = new Map, this.logger = e || new h({})
                }
                addEventCallback(e, t, r) {
                    if ("undefined" != typeof window) {
                        let n = r || t6();
                        return this.eventCallbacks.has(n) ? (this.logger.error(`Event callback with id: ${n} is already registered. Please provide a unique id or remove the existing callback and try again.`), null) : (this.eventCallbacks.set(n, [e, t || []]), this.logger.verbose(`Event callback registered with id: ${n}`), n)
                    }
                    return null
                }
                removeEventCallback(e) {
                    this.eventCallbacks.delete(e), this.logger.verbose(`Event callback ${e} removed.`)
                }
                emitEvent(e, t, r, n) {
                    if ("undefined" != typeof window) {
                        let i = {
                            eventType: e,
                            interactionType: t || null,
                            payload: r || null,
                            error: n || null,
                            timestamp: Date.now()
                        };
                        this.eventCallbacks.forEach(([t, r], n) => {
                            (0 === r.length || r.includes(e)) && (this.logger.verbose(`Emitting event to callback ${n}: ${e}`), t.apply(null, [i]))
                        })
                    }
                }
            }
            class rQ extends g.l4 {
                constructor(e, t, r, n, i) {
                    super(e, t, r), this.name = "ServerError", this.errorNo = n, this.status = i, Object.setPrototypeOf(this, rQ.prototype)
                }
            }
            class rV {
                static generateThrottlingStorageKey(e) {
                    return `${l.bb.THROTTLING_PREFIX}.${JSON.stringify(e)}`
                }
                static preProcess(e, t, r) {
                    let n = rV.generateThrottlingStorageKey(t),
                        i = e.getThrottlingCache(n);
                    if (i) {
                        if (i.throttleTime < Date.now()) {
                            e.removeItem(n, r);
                            return
                        }
                        throw new rQ(i.errorCodes ? .join(" ") || l.gT.EMPTY_STRING, i.errorMessage, i.subError)
                    }
                }
                static postProcess(e, t, r, n) {
                    if (rV.checkResponseStatus(r) || rV.checkResponseForRetryAfter(r)) {
                        let i = {
                            throttleTime: rV.calculateThrottleTime(parseInt(r.headers[l.SZ.RETRY_AFTER])),
                            error: r.body.error,
                            errorCodes: r.body.error_codes,
                            errorMessage: r.body.error_description,
                            subError: r.body.suberror
                        };
                        e.setThrottlingCache(rV.generateThrottlingStorageKey(t), i, n)
                    }
                }
                static checkResponseStatus(e) {
                    return 429 === e.status || e.status >= 500 && e.status < 600
                }
                static checkResponseForRetryAfter(e) {
                    return !!e.headers && e.headers.hasOwnProperty(l.SZ.RETRY_AFTER) && (e.status < 200 || e.status >= 300)
                }
                static calculateThrottleTime(e) {
                    let t = Date.now() / 1e3;
                    return Math.floor(1e3 * Math.min(t + ((e <= 0 ? 0 : e) || l.bb.DEFAULT_THROTTLE_TIME_SECONDS), t + l.bb.DEFAULT_MAX_THROTTLE_TIME_SECONDS))
                }
                static removeThrottle(e, t, r, n) {
                    let i = {
                            clientId: t,
                            authority: r.authority,
                            scopes: r.scopes,
                            homeAccountIdentifier: n,
                            claims: r.claims,
                            authenticationScheme: r.authenticationScheme,
                            resourceRequestMethod: r.resourceRequestMethod,
                            resourceRequestUri: r.resourceRequestUri,
                            shrClaims: r.shrClaims,
                            sshKid: r.sshKid
                        },
                        o = this.generateThrottlingStorageKey(i);
                    e.removeItem(o, r.correlationId)
                }
            }
            let rY = "client_id",
                rW = "redirect_uri",
                rj = "response_type",
                rJ = "token_type",
                rZ = "req_cnf",
                rX = "return_spa_code",
                r0 = "brk_client_id",
                r1 = "brk_redirect_uri";
            class r2 {
                static validateRedirectUri(e) {
                    if (!e) throw ej(eS)
                }
                static validatePrompt(e) {
                    let t = [];
                    for (let e in l.NJ) t.push(l.NJ[e]);
                    if (0 > t.indexOf(e)) throw ej(eP)
                }
                static validateClaims(e) {
                    try {
                        JSON.parse(e)
                    } catch (e) {
                        throw ej(eM)
                    }
                }
                static validateCodeChallengeParams(e, t) {
                    if (e && t) this.validateCodeChallengeMethod(t);
                    else throw ej(eL)
                }
                static validateCodeChallengeMethod(e) {
                    if (0 > [l.VX.PLAIN, l.VX.S256].indexOf(e)) throw ej(eH)
                }
            }
            class r4 {
                constructor(e, t) {
                    this.parameters = new Map, this.performanceClient = t, this.correlationId = e
                }
                addResponseTypeCode() {
                    this.parameters.set(rj, encodeURIComponent(l.gT.CODE_RESPONSE_TYPE))
                }
                addResponseTypeForTokenAndIdToken() {
                    this.parameters.set(rj, encodeURIComponent(`${l.gT.TOKEN_RESPONSE_TYPE} ${l.gT.ID_TOKEN_RESPONSE_TYPE}`))
                }
                addResponseMode(e) {
                    this.parameters.set("response_mode", encodeURIComponent(e || l.vw.QUERY))
                }
                addNativeBroker() {
                    this.parameters.set("nativebroker", encodeURIComponent("1"))
                }
                addScopes(e, t = !0, r = l.f_) {
                    !t || r.includes("openid") || e.includes("openid") || r.push("openid");
                    let n = new eZ(t ? [...e || [], ...r] : e || []);
                    this.parameters.set("scope", encodeURIComponent(n.printScopes()))
                }
                addClientId(e) {
                    this.parameters.set(rY, encodeURIComponent(e))
                }
                addRedirectUri(e) {
                    r2.validateRedirectUri(e), this.parameters.set(rW, encodeURIComponent(e))
                }
                addPostLogoutRedirectUri(e) {
                    r2.validateRedirectUri(e), this.parameters.set("post_logout_redirect_uri", encodeURIComponent(e))
                }
                addIdTokenHint(e) {
                    this.parameters.set("id_token_hint", encodeURIComponent(e))
                }
                addDomainHint(e) {
                    this.parameters.set("domain_hint", encodeURIComponent(e))
                }
                addLoginHint(e) {
                    this.parameters.set("login_hint", encodeURIComponent(e))
                }
                addCcsUpn(e) {
                    this.parameters.set(l.SZ.CCS_HEADER, encodeURIComponent(`UPN:${e}`))
                }
                addCcsOid(e) {
                    this.parameters.set(l.SZ.CCS_HEADER, encodeURIComponent(`Oid:${e.uid}@${e.utid}`))
                }
                addSid(e) {
                    this.parameters.set("sid", encodeURIComponent(e))
                }
                addClaims(e, t) {
                    let r = this.addClientCapabilitiesToClaims(e, t);
                    r2.validateClaims(r), this.parameters.set("claims", encodeURIComponent(r))
                }
                addCorrelationId(e) {
                    this.parameters.set("client-request-id", encodeURIComponent(e))
                }
                addLibraryInfo(e) {
                    this.parameters.set("x-client-SKU", e.sku), this.parameters.set("x-client-VER", e.version), e.os && this.parameters.set("x-client-OS", e.os), e.cpu && this.parameters.set("x-client-CPU", e.cpu)
                }
                addApplicationTelemetry(e) {
                    e ? .appName && this.parameters.set("x-app-name", e.appName), e ? .appVersion && this.parameters.set("x-app-ver", e.appVersion)
                }
                addPrompt(e) {
                    r2.validatePrompt(e), this.parameters.set("prompt", encodeURIComponent(e))
                }
                addState(e) {
                    e && this.parameters.set("state", encodeURIComponent(e))
                }
                addNonce(e) {
                    this.parameters.set("nonce", encodeURIComponent(e))
                }
                addCodeChallengeParams(e, t) {
                    if (r2.validateCodeChallengeParams(e, t), e && t) this.parameters.set("code_challenge", encodeURIComponent(e)), this.parameters.set("code_challenge_method", encodeURIComponent(t));
                    else throw ej(eL)
                }
                addAuthorizationCode(e) {
                    this.parameters.set("code", encodeURIComponent(e))
                }
                addDeviceCode(e) {
                    this.parameters.set("device_code", encodeURIComponent(e))
                }
                addRefreshToken(e) {
                    this.parameters.set("refresh_token", encodeURIComponent(e))
                }
                addCodeVerifier(e) {
                    this.parameters.set("code_verifier", encodeURIComponent(e))
                }
                addClientSecret(e) {
                    this.parameters.set("client_secret", encodeURIComponent(e))
                }
                addClientAssertion(e) {
                    e && this.parameters.set("client_assertion", encodeURIComponent(e))
                }
                addClientAssertionType(e) {
                    e && this.parameters.set("client_assertion_type", encodeURIComponent(e))
                }
                addOboAssertion(e) {
                    this.parameters.set("assertion", encodeURIComponent(e))
                }
                addRequestTokenUse(e) {
                    this.parameters.set("requested_token_use", encodeURIComponent(e))
                }
                addGrantType(e) {
                    this.parameters.set("grant_type", encodeURIComponent(e))
                }
                addClientInfo() {
                    this.parameters.set(l.sR, "1")
                }
                addExtraQueryParameters(e) {
                    Object.entries(e).forEach(([e, t]) => {
                        !this.parameters.has(e) && t && this.parameters.set(e, t)
                    })
                }
                addClientCapabilitiesToClaims(e, t) {
                    let r;
                    if (e) try {
                        r = JSON.parse(e)
                    } catch (e) {
                        throw ej(eM)
                    } else r = {};
                    return t && t.length > 0 && (r.hasOwnProperty(l.As.ACCESS_TOKEN) || (r[l.As.ACCESS_TOKEN] = {}), r[l.As.ACCESS_TOKEN][l.As.XMS_CC] = {
                        values: t
                    }), JSON.stringify(r)
                }
                addUsername(e) {
                    this.parameters.set(l.Ge.username, encodeURIComponent(e))
                }
                addPassword(e) {
                    this.parameters.set(l.Ge.password, encodeURIComponent(e))
                }
                addPopToken(e) {
                    e && (this.parameters.set(rJ, l.hO.POP), this.parameters.set(rZ, encodeURIComponent(e)))
                }
                addSshJwk(e) {
                    e && (this.parameters.set(rJ, l.hO.SSH), this.parameters.set(rZ, encodeURIComponent(e)))
                }
                addServerTelemetry(e) {
                    this.parameters.set("x-client-current-telemetry", e.generateCurrentRequestHeaderValue()), this.parameters.set("x-client-last-telemetry", e.generateLastRequestHeaderValue())
                }
                addThrottling() {
                    this.parameters.set("x-ms-lib-capability", l.bb.X_MS_LIB_CAPABILITY_VALUE)
                }
                addLogoutHint(e) {
                    this.parameters.set("logout_hint", encodeURIComponent(e))
                }
                addBrokerParameters(e) {
                    let t = {};
                    t[r0] = e.brokerClientId, t[r1] = e.brokerRedirectUri, this.addExtraQueryParameters(t)
                }
                createQueryString() {
                    let e = [];
                    return this.parameters.forEach((t, r) => {
                        e.push(`${r}=${t}`)
                    }), ! function(e, t, r) {
                        if (!t) return;
                        let n = e.get(rY);
                        n && e.has(r0) && r ? .addFields({
                            embeddedClientId: n,
                            embeddedRedirectUri: e.get(rW)
                        }, t)
                    }(this.parameters, this.correlationId, this.performanceClient), e.join("&")
                }
            }
            async function r3(e, t, r, n, i, o, a) {
                a ? .addQueueMeasurement(tv.AuthorityFactoryCreateDiscoveredInstance, o);
                let s = rP.transformCIAMAuthority(rM(e)),
                    c = new rP(s, t, r, n, i, o, a);
                try {
                    return await rO(c.resolveEndpointsAsync.bind(c), tv.AuthorityResolveEndpointsAsync, i, a, o)(), c
                } catch (e) {
                    throw ea(y)
                }
            }
            class r6 {
                constructor(e, t) {
                    this.config = function({
                        authOptions: e,
                        systemOptions: t,
                        loggerOptions: r,
                        cacheOptions: n,
                        storageInterface: i,
                        networkInterface: o,
                        cryptoInterface: a,
                        clientCredentials: s,
                        libraryInfo: c,
                        telemetry: l,
                        serverTelemetryManager: d,
                        persistencePlugin: u,
                        serializableCache: g
                    }) {
                        let p = { ...tg,
                            ...r
                        };
                        return {
                            authOptions: {
                                clientCapabilities: [],
                                azureCloudOptions: ty,
                                skipAuthorityMetadataCache: !1,
                                instanceAware: !1,
                                ...e
                            },
                            systemOptions: { ...tu,
                                ...t
                            },
                            loggerOptions: p,
                            cacheOptions: { ...tp,
                                ...n
                            },
                            storageInterface: i || new td(e.clientId, es, new h(p)),
                            networkInterface: o || tm,
                            cryptoInterface: a || es,
                            clientCredentials: s || tf,
                            libraryInfo: { ...tC,
                                ...c
                            },
                            telemetry: { ...tT,
                                ...l
                            },
                            serverTelemetryManager: d || null,
                            persistencePlugin: u || null,
                            serializableCache: g || null
                        }
                    }(e), this.logger = new h(this.config.loggerOptions, ec, el), this.cryptoUtils = this.config.cryptoInterface, this.cacheManager = this.config.storageInterface, this.networkClient = this.config.networkInterface, this.serverTelemetryManager = this.config.serverTelemetryManager, this.authority = this.config.authOptions.authority, this.performanceClient = t
                }
                createTokenRequestHeaders(e) {
                    let t = {};
                    if (t[l.SZ.CONTENT_TYPE] = l.gT.URL_FORM_CONTENT_TYPE, !this.config.systemOptions.preventCorsPreflight && e) switch (e.type) {
                        case rL.HOME_ACCOUNT_ID:
                            try {
                                let r = e0(e.credential);
                                t[l.SZ.CCS_HEADER] = `Oid:${r.uid}@${r.utid}`
                            } catch (e) {
                                this.logger.verbose("Could not parse home account ID for CCS Header: " + e)
                            }
                            break;
                        case rL.UPN:
                            t[l.SZ.CCS_HEADER] = `UPN: ${e.credential}`
                    }
                    return t
                }
                async executePostToTokenEndpoint(e, t, r, n, i, o) {
                    o && this.performanceClient ? .addQueueMeasurement(o, i);
                    let a = await this.sendPostRequest(n, e, {
                        body: t,
                        headers: r
                    }, i);
                    return this.config.serverTelemetryManager && a.status < 500 && 429 !== a.status && this.config.serverTelemetryManager.clearTelemetryCache(), a
                }
                async sendPostRequest(e, t, r, n) {
                    let i;
                    rV.preProcess(this.cacheManager, e, n);
                    try {
                        let e = (i = await rO(this.networkClient.sendPostRequestAsync.bind(this.networkClient), tv.NetworkClientSendPostRequestAsync, this.logger, this.performanceClient, n)(t, r)).headers || {};
                        this.performanceClient ? .addFields({
                            refreshTokenSize: i.body.refresh_token ? .length || 0,
                            httpVerToken: e[l.SZ.X_MS_HTTP_VERSION] || "",
                            requestId: e[l.SZ.X_MS_REQUEST_ID] || ""
                        }, n)
                    } catch (e) {
                        if (e instanceof tF) {
                            let t = e.responseHeaders;
                            throw t && this.performanceClient ? .addFields({
                                httpVerToken: t[l.SZ.X_MS_HTTP_VERSION] || "",
                                requestId: t[l.SZ.X_MS_REQUEST_ID] || "",
                                contentTypeHeader: t[l.SZ.CONTENT_TYPE] || void 0,
                                contentLengthHeader: t[l.SZ.CONTENT_LENGTH] || void 0,
                                httpStatus: e.httpStatus
                            }, n), e.error
                        }
                        if (e instanceof g.l4) throw e;
                        throw ea(T)
                    }
                    return rV.postProcess(this.cacheManager, e, i, n), i
                }
                async updateAuthority(e, t) {
                    this.performanceClient ? .addQueueMeasurement(tv.UpdateTokenEndpointAuthority, t);
                    let r = `https://${e}/${this.authority.tenant}/`,
                        n = await r3(r, this.networkClient, this.cacheManager, this.authority.options, this.logger, t, this.performanceClient);
                    this.authority = n
                }
                createTokenQueryParameters(e) {
                    let t = new r4(e.correlationId, this.performanceClient);
                    return e.embeddedClientId && t.addBrokerParameters({
                        brokerClientId: this.config.authOptions.clientId,
                        brokerRedirectUri: this.config.authOptions.redirectUri
                    }), e.tokenQueryParameters && t.addExtraQueryParameters(e.tokenQueryParameters), t.addCorrelationId(e.correlationId), t.createQueryString()
                }
            }
            class r5 {
                constructor(e, t) {
                    this.cryptoUtils = e, this.performanceClient = t
                }
                async generateCnf(e, t) {
                    this.performanceClient ? .addQueueMeasurement(tv.PopTokenGenerateCnf, e.correlationId);
                    let r = await rO(this.generateKid.bind(this), tv.PopTokenGenerateCnf, t, this.performanceClient, e.correlationId)(e),
                        n = this.cryptoUtils.base64UrlEncode(JSON.stringify(r));
                    return {
                        kid: r.kid,
                        reqCnfString: n
                    }
                }
                async generateKid(e) {
                    return this.performanceClient ? .addQueueMeasurement(tv.PopTokenGenerateKid, e.correlationId), {
                        kid: await this.cryptoUtils.getPublicKeyThumbprint(e),
                        xms_ksl: "sw"
                    }
                }
                async signPopToken(e, t, r) {
                    return this.signPayload(e, t, r)
                }
                async signPayload(e, t, r, n) {
                    let {
                        resourceRequestMethod: i,
                        resourceRequestUri: o,
                        shrClaims: a,
                        shrNonce: s,
                        shrOptions: c
                    } = r, l = o ? new e7(o) : void 0, h = l ? .getUrlComponents();
                    return this.cryptoUtils.signJwt({
                        at: e,
                        ts: eu(),
                        m: i ? .toUpperCase(),
                        u: h ? .HostNameAndPort,
                        nonce: s || this.cryptoUtils.createNewGuid(),
                        p: h ? .AbsolutePath,
                        q: h ? .QueryString ? [
                            [], h.QueryString
                        ] : void 0,
                        client_claims: a || void 0,
                        ...n
                    }, t, c, r.correlationId)
                }
            }
            class r8 {
                constructor(e, t) {
                    this.cache = e, this.hasChanged = t
                }
                get cacheHasChanged() {
                    return this.hasChanged
                }
                get tokenCache() {
                    return this.cache
                }
            }
            class r9 {
                constructor(e, t, r, n, i, o, a) {
                    this.clientId = e, this.cacheStorage = t, this.cryptoObj = r, this.logger = n, this.serializableCache = i, this.persistencePlugin = o, this.performanceClient = a
                }
                validateServerAuthorizationCodeResponse(e, t) {
                    let r, n;
                    if (!e.state || !t) throw e.state ? ea(E, "Cached State") : ea(E, "Server State");
                    try {
                        r = decodeURIComponent(e.state)
                    } catch (t) {
                        throw ea(v, e.state)
                    }
                    try {
                        n = decodeURIComponent(t)
                    } catch (t) {
                        throw ea(v, e.state)
                    }
                    if (r !== n) throw ea(w);
                    if (e.error || e.error_description || e.suberror) {
                        let t = function(e) {
                            let t = "code=",
                                r = e.error_uri ? .lastIndexOf(t);
                            return r && r >= 0 ? e.error_uri ? .substring(r + t.length) : void 0
                        }(e);
                        if ((0, rq.Cf)(e.error, e.error_description, e.suberror)) throw new rq.Yo(e.error || "", e.error_description, e.suberror, e.timestamp || "", e.trace_id || "", e.correlation_id || "", e.claims || "", t);
                        throw new rQ(e.error || "", e.error_description, e.suberror, t)
                    }
                }
                validateTokenResponse(e, t) {
                    if (e.error || e.error_description || e.suberror) {
                        let r = `Error(s): ${e.error_codes||l.gT.NOT_AVAILABLE} - Timestamp: ${e.timestamp||l.gT.NOT_AVAILABLE} - Description: ${e.error_description||l.gT.NOT_AVAILABLE} - Correlation ID: ${e.correlation_id||l.gT.NOT_AVAILABLE} - Trace ID: ${e.trace_id||l.gT.NOT_AVAILABLE}`,
                            n = e.error_codes ? .length ? e.error_codes[0] : void 0,
                            i = new rQ(e.error, r, e.suberror, n, e.status);
                        if (t && e.status && e.status >= l.oj.SERVER_ERROR_RANGE_START && e.status <= l.oj.SERVER_ERROR_RANGE_END) {
                            this.logger.warning(`executeTokenRequest:validateTokenResponse - AAD is currently unavailable and the access token is unable to be refreshed.
${i}`);
                            return
                        }
                        if (t && e.status && e.status >= l.oj.CLIENT_ERROR_RANGE_START && e.status <= l.oj.CLIENT_ERROR_RANGE_END) {
                            this.logger.warning(`executeTokenRequest:validateTokenResponse - AAD is currently available but is unable to refresh the access token.
${i}`);
                            return
                        }
                        if ((0, rq.Cf)(e.error, e.error_description, e.suberror)) throw new rq.Yo(e.error, e.error_description, e.suberror, e.timestamp || l.gT.EMPTY_STRING, e.trace_id || l.gT.EMPTY_STRING, e.correlation_id || l.gT.EMPTY_STRING, e.claims || l.gT.EMPTY_STRING, n);
                        throw i
                    }
                }
                async handleServerTokenResponse(e, t, r, n, i, o, a, s, c) {
                    let h, d, u;
                    if (this.performanceClient ? .addQueueMeasurement(tv.HandleServerTokenResponse, e.correlation_id), e.id_token) {
                        if (h = eh(e.id_token || l.gT.EMPTY_STRING, this.cryptoObj.base64Decode), i && i.nonce && h.nonce !== i.nonce) throw ea(_);
                        if (n.maxAge || 0 === n.maxAge) {
                            let e = h.auth_time;
                            if (!e) throw ea(S);
                            ed(e, n.maxAge)
                        }
                    }
                    this.homeAccountIdentifier = e5.generateHomeAccountId(e.client_info || l.gT.EMPTY_STRING, t.authorityType, this.logger, this.cryptoObj, h), i && i.state && (d = rH.parseRequestState(this.cryptoObj, i.state)), e.key_id = e.key_id || n.sshKid || void 0;
                    let g = this.generateCacheRecord(e, t, r, n, h, o, i);
                    try {
                        if (this.persistencePlugin && this.serializableCache && (this.logger.verbose("Persistence enabled, calling beforeCacheAccess"), u = new r8(this.serializableCache, !0), await this.persistencePlugin.beforeCacheAccess(u)), a && !s && g.account) {
                            let e = g.account.generateAccountKey();
                            if (!this.cacheStorage.getAccount(e, n.correlationId, this.logger)) return this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache"), await r9.generateAuthenticationResult(this.cryptoObj, t, g, !1, n, h, d, void 0, c)
                        }
                        await this.cacheStorage.saveCacheRecord(g, n.correlationId, n.storeInCache)
                    } finally {
                        this.persistencePlugin && this.serializableCache && u && (this.logger.verbose("Persistence enabled, calling afterCacheAccess"), await this.persistencePlugin.afterCacheAccess(u))
                    }
                    return r9.generateAuthenticationResult(this.cryptoObj, t, g, !1, n, h, d, e, c)
                }
                generateCacheRecord(e, t, r, n, i, o, a) {
                    let s, c;
                    let l = t.getPreferredCache();
                    if (!l) throw ea(x);
                    let h = e6(i);
                    e.id_token && i && (s = em(this.homeAccountIdentifier, l, e.id_token, this.clientId, h || ""), c = r7(this.cacheStorage, t, this.homeAccountIdentifier, this.cryptoObj.base64Decode, n.correlationId, i, e.client_info, l, h, a, void 0, this.logger));
                    let d = null;
                    if (e.access_token) {
                        let i = e.scope ? eZ.fromString(e.scope) : new eZ(n.scopes || []),
                            a = ("string" == typeof e.expires_in ? parseInt(e.expires_in, 10) : e.expires_in) || 0,
                            s = ("string" == typeof e.ext_expires_in ? parseInt(e.ext_expires_in, 10) : e.ext_expires_in) || 0,
                            c = ("string" == typeof e.refresh_in ? parseInt(e.refresh_in, 10) : e.refresh_in) || void 0,
                            u = r + a;
                        d = eC(this.homeAccountIdentifier, l, e.access_token, this.clientId, h || t.tenant || "", i.printScopes(), u, u + s, this.cryptoObj.base64Decode, c && c > 0 ? r + c : void 0, e.token_type, o, e.key_id, n.claims, n.requestedClaimsHash)
                    }
                    let u = null;
                    if (e.refresh_token) {
                        let t;
                        e.refresh_token_expires_in && (t = r + ("string" == typeof e.refresh_token_expires_in ? parseInt(e.refresh_token_expires_in, 10) : e.refresh_token_expires_in)), u = ef(this.homeAccountIdentifier, l, e.refresh_token, this.clientId, e.foci, o, t)
                    }
                    let g = null;
                    return e.foci && (g = {
                        clientId: this.clientId,
                        environment: l,
                        familyId: e.foci
                    }), {
                        account: c,
                        idToken: s,
                        accessToken: d,
                        refreshToken: u,
                        appMetadata: g
                    }
                }
                static async generateAuthenticationResult(e, t, r, n, i, o, a, s, c) {
                    let h, d, u = l.gT.EMPTY_STRING,
                        g = [],
                        p = null,
                        m = l.gT.EMPTY_STRING;
                    if (r.accessToken) {
                        if (r.accessToken.tokenType !== l.hO.POP || i.popKid) u = r.accessToken.secret;
                        else {
                            let t = new r5(e),
                                {
                                    secret: n,
                                    keyId: o
                                } = r.accessToken;
                            if (!o) throw ea(Z);
                            u = await t.signPopToken(n, o, i)
                        }
                        g = eZ.fromString(r.accessToken.target).asArray(), p = new Date(1e3 * Number(r.accessToken.expiresOn)), h = new Date(1e3 * Number(r.accessToken.extendedExpiresOn)), r.accessToken.refreshOn && (d = new Date(1e3 * Number(r.accessToken.refreshOn)))
                    }
                    r.appMetadata && (m = r.appMetadata.familyId === l.ch ? l.ch : "");
                    let C = o ? .oid || o ? .sub || "",
                        f = o ? .tid || "";
                    s ? .spa_accountid && r.account && (r.account.nativeAccountId = s ? .spa_accountid);
                    let y = r.account ? e4(r.account.getAccountInfo(), void 0, o, r.idToken ? .secret) : null;
                    return {
                        authority: t.canonicalAuthority,
                        uniqueId: C,
                        tenantId: f,
                        scopes: g,
                        account: y,
                        idToken: r ? .idToken ? .secret || "",
                        idTokenClaims: o || {},
                        accessToken: u,
                        fromCache: n,
                        expiresOn: p,
                        extExpiresOn: h,
                        refreshOn: d,
                        correlationId: i.correlationId,
                        requestId: c || l.gT.EMPTY_STRING,
                        familyId: m,
                        tokenType: r.accessToken ? .tokenType || l.gT.EMPTY_STRING,
                        state: a ? a.userRequestState : l.gT.EMPTY_STRING,
                        cloudGraphHostName: r.account ? .cloudGraphHostName || l.gT.EMPTY_STRING,
                        msGraphHost: r.account ? .msGraphHost || l.gT.EMPTY_STRING,
                        code: s ? .spa_code,
                        fromNativeBroker: !1
                    }
                }
            }

            function r7(e, t, r, n, i, o, a, s, c, l, h, d) {
                d ? .verbose("setCachedAccount called");
                let u = e.getAccountKeys().find(e => e.startsWith(r)),
                    g = null;
                u && (g = e.getAccount(u, i, d));
                let p = g || e5.createAccount({
                        homeAccountId: r,
                        idTokenClaims: o,
                        clientInfo: a,
                        environment: s,
                        cloudGraphHostName: l ? .cloud_graph_host_name,
                        msGraphHost: l ? .msgraph_host,
                        nativeAccountId: h
                    }, t, n),
                    m = p.tenantProfiles || [],
                    C = c || p.realm;
                if (C && !m.find(e => e.tenantId === C)) {
                    let e = e2(r, p.localAccountId, C, o);
                    m.push(e)
                }
                return p.tenantProfiles = m, p
            }
            async function ne(e, t, r) {
                return "string" == typeof e ? e : e({
                    clientId: t,
                    tokenEndpoint: r
                })
            }
            class nt extends r6 {
                constructor(e, t) {
                    super(e, t), this.includeRedirectUri = !0, this.oidcDefaultScopes = this.config.authOptions.authority.options.OIDCOptions ? .defaultScopes
                }
                async getAuthCodeUrl(e) {
                    this.performanceClient ? .addQueueMeasurement(tv.GetAuthCodeUrl, e.correlationId);
                    let t = await rO(this.createAuthCodeUrlQueryString.bind(this), tv.AuthClientCreateQueryString, this.logger, this.performanceClient, e.correlationId)(e);
                    return e7.appendQueryString(this.authority.authorizationEndpoint, t)
                }
                async acquireToken(e, t) {
                    if (this.performanceClient ? .addQueueMeasurement(tv.AuthClientAcquireToken, e.correlationId), !e.code) throw ea(N);
                    let r = eu(),
                        n = await rO(this.executeTokenRequest.bind(this), tv.AuthClientExecuteTokenRequest, this.logger, this.performanceClient, e.correlationId)(this.authority, e),
                        i = n.headers ? .[l.SZ.X_MS_REQUEST_ID],
                        o = new r9(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin, this.performanceClient);
                    return o.validateTokenResponse(n.body), rO(o.handleServerTokenResponse.bind(o), tv.HandleServerTokenResponse, this.logger, this.performanceClient, e.correlationId)(n.body, this.authority, r, e, t, void 0, void 0, void 0, i)
                }
                handleFragmentResponse(e, t) {
                    if (new r9(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, null, null).validateServerAuthorizationCodeResponse(e, t), !e.code) throw ea(W);
                    return e
                }
                getLogoutUri(e) {
                    if (!e) throw ej(eU);
                    let t = this.createLogoutUrlQueryString(e);
                    return e7.appendQueryString(this.authority.endSessionEndpoint, t)
                }
                async executeTokenRequest(e, t) {
                    let r;
                    this.performanceClient ? .addQueueMeasurement(tv.AuthClientExecuteTokenRequest, t.correlationId);
                    let n = this.createTokenQueryParameters(t),
                        i = e7.appendQueryString(e.tokenEndpoint, n),
                        o = await rO(this.createTokenRequestBody.bind(this), tv.AuthClientCreateTokenRequestBody, this.logger, this.performanceClient, t.correlationId)(t);
                    if (t.clientInfo) try {
                        let e = eX(t.clientInfo, this.cryptoUtils.base64Decode);
                        r = {
                            credential: `${e.uid}${l.Bv.CLIENT_INFO_SEPARATOR}${e.utid}`,
                            type: rL.HOME_ACCOUNT_ID
                        }
                    } catch (e) {
                        this.logger.verbose("Could not parse client info for CCS Header: " + e)
                    }
                    let a = this.createTokenRequestHeaders(r || t.ccsCredential),
                        s = {
                            clientId: t.tokenBodyParameters ? .clientId || this.config.authOptions.clientId,
                            authority: e.canonicalAuthority,
                            scopes: t.scopes,
                            claims: t.claims,
                            authenticationScheme: t.authenticationScheme,
                            resourceRequestMethod: t.resourceRequestMethod,
                            resourceRequestUri: t.resourceRequestUri,
                            shrClaims: t.shrClaims,
                            sshKid: t.sshKid
                        };
                    return rO(this.executePostToTokenEndpoint.bind(this), tv.AuthorizationCodeClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, t.correlationId)(i, o, a, s, t.correlationId, tv.AuthorizationCodeClientExecutePostToTokenEndpoint)
                }
                async createTokenRequestBody(e) {
                    let t;
                    this.performanceClient ? .addQueueMeasurement(tv.AuthClientCreateTokenRequestBody, e.correlationId);
                    let r = new r4(e.correlationId, this.performanceClient);
                    if (r.addClientId(e.embeddedClientId || e.tokenBodyParameters ? .[rY] || this.config.authOptions.clientId), this.includeRedirectUri ? r.addRedirectUri(e.redirectUri) : r2.validateRedirectUri(e.redirectUri), r.addScopes(e.scopes, !0, this.oidcDefaultScopes), r.addAuthorizationCode(e.code), r.addLibraryInfo(this.config.libraryInfo), r.addApplicationTelemetry(this.config.telemetry.application), r.addThrottling(), this.serverTelemetryManager && !tI(this.config) && r.addServerTelemetry(this.serverTelemetryManager), e.codeVerifier && r.addCodeVerifier(e.codeVerifier), this.config.clientCredentials.clientSecret && r.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion) {
                        let t = this.config.clientCredentials.clientAssertion;
                        r.addClientAssertion(await ne(t.assertion, this.config.authOptions.clientId, e.resourceRequestUri)), r.addClientAssertionType(t.assertionType)
                    }
                    if (r.addGrantType(l.qJ.AUTHORIZATION_CODE_GRANT), r.addClientInfo(), e.authenticationScheme === l.hO.POP) {
                        let t;
                        let n = new r5(this.cryptoUtils, this.performanceClient);
                        t = e.popKid ? this.cryptoUtils.encodeKid(e.popKid) : (await rO(n.generateCnf.bind(n), tv.PopTokenGenerateCnf, this.logger, this.performanceClient, e.correlationId)(e, this.logger)).reqCnfString, r.addPopToken(t)
                    } else if (e.authenticationScheme === l.hO.SSH) {
                        if (e.sshJwk) r.addSshJwk(e.sshJwk);
                        else throw ej(eF)
                    }
                    if ((!eJ.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && r.addClaims(e.claims, this.config.authOptions.clientCapabilities), e.clientInfo) try {
                        let r = eX(e.clientInfo, this.cryptoUtils.base64Decode);
                        t = {
                            credential: `${r.uid}${l.Bv.CLIENT_INFO_SEPARATOR}${r.utid}`,
                            type: rL.HOME_ACCOUNT_ID
                        }
                    } catch (e) {
                        this.logger.verbose("Could not parse client info for CCS Header: " + e)
                    } else t = e.ccsCredential;
                    if (this.config.systemOptions.preventCorsPreflight && t) switch (t.type) {
                        case rL.HOME_ACCOUNT_ID:
                            try {
                                let e = e0(t.credential);
                                r.addCcsOid(e)
                            } catch (e) {
                                this.logger.verbose("Could not parse home account ID for CCS Header: " + e)
                            }
                            break;
                        case rL.UPN:
                            r.addCcsUpn(t.credential)
                    }
                    return e.embeddedClientId && r.addBrokerParameters({
                        brokerClientId: this.config.authOptions.clientId,
                        brokerRedirectUri: this.config.authOptions.redirectUri
                    }), e.tokenBodyParameters && r.addExtraQueryParameters(e.tokenBodyParameters), !e.enableSpaAuthorizationCode || e.tokenBodyParameters && e.tokenBodyParameters[rX] || r.addExtraQueryParameters({
                        [rX]: "1"
                    }), r.createQueryString()
                }
                async createAuthCodeUrlQueryString(e) {
                    let t = e.correlationId || this.config.cryptoInterface.createNewGuid();
                    this.performanceClient ? .addQueueMeasurement(tv.AuthClientCreateQueryString, t);
                    let r = new r4(t, this.performanceClient);
                    r.addClientId(e.embeddedClientId || e.extraQueryParameters ? .[rY] || this.config.authOptions.clientId);
                    let n = [...e.scopes || [], ...e.extraScopesToConsent || []];
                    if (r.addScopes(n, !0, this.oidcDefaultScopes), r.addRedirectUri(e.redirectUri), r.addCorrelationId(t), r.addResponseMode(e.responseMode), r.addResponseTypeCode(), r.addLibraryInfo(this.config.libraryInfo), tI(this.config) || r.addApplicationTelemetry(this.config.telemetry.application), r.addClientInfo(), e.codeChallenge && e.codeChallengeMethod && r.addCodeChallengeParams(e.codeChallenge, e.codeChallengeMethod), e.prompt && r.addPrompt(e.prompt), e.domainHint && r.addDomainHint(e.domainHint), e.prompt !== l.NJ.SELECT_ACCOUNT) {
                        if (e.sid && e.prompt === l.NJ.NONE) this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request"), r.addSid(e.sid);
                        else if (e.account) {
                            let t = this.extractAccountSid(e.account),
                                n = this.extractLoginHint(e.account);
                            if (n && e.domainHint && (this.logger.warning('AuthorizationCodeClient.createAuthCodeUrlQueryString: "domainHint" param is set, skipping opaque "login_hint" claim. Please consider not passing domainHint'), n = null), n) {
                                this.logger.verbose("createAuthCodeUrlQueryString: login_hint claim present on account"), r.addLoginHint(n);
                                try {
                                    let t = e0(e.account.homeAccountId);
                                    r.addCcsOid(t)
                                } catch (e) {
                                    this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header")
                                }
                            } else if (t && e.prompt === l.NJ.NONE) {
                                this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from account"), r.addSid(t);
                                try {
                                    let t = e0(e.account.homeAccountId);
                                    r.addCcsOid(t)
                                } catch (e) {
                                    this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header")
                                }
                            } else if (e.loginHint) this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from request"), r.addLoginHint(e.loginHint), r.addCcsUpn(e.loginHint);
                            else if (e.account.username) {
                                this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from account"), r.addLoginHint(e.account.username);
                                try {
                                    let t = e0(e.account.homeAccountId);
                                    r.addCcsOid(t)
                                } catch (e) {
                                    this.logger.verbose("createAuthCodeUrlQueryString: Could not parse home account ID for CCS Header")
                                }
                            }
                        } else e.loginHint && (this.logger.verbose("createAuthCodeUrlQueryString: No account, adding login_hint from request"), r.addLoginHint(e.loginHint), r.addCcsUpn(e.loginHint))
                    } else this.logger.verbose("createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints");
                    if (e.nonce && r.addNonce(e.nonce), e.state && r.addState(e.state), (e.claims || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && r.addClaims(e.claims, this.config.authOptions.clientCapabilities), e.embeddedClientId && r.addBrokerParameters({
                            brokerClientId: this.config.authOptions.clientId,
                            brokerRedirectUri: this.config.authOptions.redirectUri
                        }), this.addExtraQueryParams(e, r), e.nativeBroker && (r.addNativeBroker(), e.authenticationScheme === l.hO.POP)) {
                        let t;
                        let n = new r5(this.cryptoUtils);
                        t = e.popKid ? this.cryptoUtils.encodeKid(e.popKid) : (await rO(n.generateCnf.bind(n), tv.PopTokenGenerateCnf, this.logger, this.performanceClient, e.correlationId)(e, this.logger)).reqCnfString, r.addPopToken(t)
                    }
                    return r.createQueryString()
                }
                createLogoutUrlQueryString(e) {
                    let t = new r4(e.correlationId, this.performanceClient);
                    return e.postLogoutRedirectUri && t.addPostLogoutRedirectUri(e.postLogoutRedirectUri), e.correlationId && t.addCorrelationId(e.correlationId), e.idTokenHint && t.addIdTokenHint(e.idTokenHint), e.state && t.addState(e.state), e.logoutHint && t.addLogoutHint(e.logoutHint), this.addExtraQueryParams(e, t), t.createQueryString()
                }
                addExtraQueryParams(e, t) {
                    !(e.extraQueryParameters && e.extraQueryParameters.hasOwnProperty("instance_aware")) && this.config.authOptions.instanceAware && (e.extraQueryParameters = e.extraQueryParameters || {}, e.extraQueryParameters.instance_aware = "true"), e.extraQueryParameters && t.addExtraQueryParameters(e.extraQueryParameters)
                }
                extractAccountSid(e) {
                    return e.idTokenClaims ? .sid || null
                }
                extractLoginHint(e) {
                    return e.idTokenClaims ? .login_hint || null
                }
            }
            class nr {
                constructor(e, t) {
                    this.cacheOutcome = l.To.NOT_APPLICABLE, this.cacheManager = t, this.apiId = e.apiId, this.correlationId = e.correlationId, this.wrapperSKU = e.wrapperSKU || l.gT.EMPTY_STRING, this.wrapperVer = e.wrapperVer || l.gT.EMPTY_STRING, this.telemetryCacheKey = l.HN.CACHE_KEY + l.Bv.CACHE_KEY_SEPARATOR + e.clientId
                }
                generateCurrentRequestHeaderValue() {
                    let e = `${this.apiId}${l.HN.VALUE_SEPARATOR}${this.cacheOutcome}`,
                        t = [this.wrapperSKU, this.wrapperVer],
                        r = this.getNativeBrokerErrorCode();
                    r ? .length && t.push(`broker_error=${r}`);
                    let n = t.join(l.HN.VALUE_SEPARATOR),
                        i = [e, this.getRegionDiscoveryFields()].join(l.HN.VALUE_SEPARATOR);
                    return [l.HN.SCHEMA_VERSION, i, n].join(l.HN.CATEGORY_SEPARATOR)
                }
                generateLastRequestHeaderValue() {
                    let e = this.getLastRequests(),
                        t = nr.maxErrorsToSend(e),
                        r = e.failedRequests.slice(0, 2 * t).join(l.HN.VALUE_SEPARATOR),
                        n = e.errors.slice(0, t).join(l.HN.VALUE_SEPARATOR),
                        i = e.errors.length,
                        o = t < i ? l.HN.OVERFLOW_TRUE : l.HN.OVERFLOW_FALSE,
                        a = [i, o].join(l.HN.VALUE_SEPARATOR);
                    return [l.HN.SCHEMA_VERSION, e.cacheHits, r, n, a].join(l.HN.CATEGORY_SEPARATOR)
                }
                cacheFailedRequest(e) {
                    let t = this.getLastRequests();
                    t.errors.length >= l.HN.MAX_CACHED_ERRORS && (t.failedRequests.shift(), t.failedRequests.shift(), t.errors.shift()), t.failedRequests.push(this.apiId, this.correlationId), e instanceof Error && e && e.toString() ? e instanceof g.l4 ? e.subError ? t.errors.push(e.subError) : e.errorCode ? t.errors.push(e.errorCode) : t.errors.push(e.toString()) : t.errors.push(e.toString()) : t.errors.push(l.HN.UNKNOWN_ERROR), this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t, this.correlationId)
                }
                incrementCacheHits() {
                    let e = this.getLastRequests();
                    return e.cacheHits += 1, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e, this.correlationId), e.cacheHits
                }
                getLastRequests() {
                    return this.cacheManager.getServerTelemetry(this.telemetryCacheKey) || {
                        failedRequests: [],
                        errors: [],
                        cacheHits: 0
                    }
                }
                clearTelemetryCache() {
                    let e = this.getLastRequests(),
                        t = nr.maxErrorsToSend(e);
                    if (t === e.errors.length) this.cacheManager.removeItem(this.telemetryCacheKey, this.correlationId);
                    else {
                        let r = {
                            failedRequests: e.failedRequests.slice(2 * t),
                            errors: e.errors.slice(t),
                            cacheHits: 0
                        };
                        this.cacheManager.setServerTelemetry(this.telemetryCacheKey, r, this.correlationId)
                    }
                }
                static maxErrorsToSend(e) {
                    let t;
                    let r = 0,
                        n = 0,
                        i = e.errors.length;
                    for (t = 0; t < i; t++) {
                        let i = e.failedRequests[2 * t] || l.gT.EMPTY_STRING,
                            o = e.failedRequests[2 * t + 1] || l.gT.EMPTY_STRING,
                            a = e.errors[t] || l.gT.EMPTY_STRING;
                        if ((n += i.toString().length + o.toString().length + a.length + 3) < l.HN.MAX_LAST_HEADER_BYTES) r += 1;
                        else break
                    }
                    return r
                }
                getRegionDiscoveryFields() {
                    let e = [];
                    return e.push(this.regionUsed || l.gT.EMPTY_STRING), e.push(this.regionSource || l.gT.EMPTY_STRING), e.push(this.regionOutcome || l.gT.EMPTY_STRING), e.join(",")
                }
                updateRegionDiscoveryMetadata(e) {
                    this.regionUsed = e.region_used, this.regionSource = e.region_source, this.regionOutcome = e.region_outcome
                }
                setCacheOutcome(e) {
                    this.cacheOutcome = e
                }
                setNativeBrokerErrorCode(e) {
                    let t = this.getLastRequests();
                    t.nativeBrokerErrorCode = e, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, t, this.correlationId)
                }
                getNativeBrokerErrorCode() {
                    return this.getLastRequests().nativeBrokerErrorCode
                }
                clearNativeBrokerErrorCode() {
                    let e = this.getLastRequests();
                    delete e.nativeBrokerErrorCode, this.cacheManager.setServerTelemetry(this.telemetryCacheKey, e, this.correlationId)
                }
                static makeExtraSkuString(e) {
                    return function(e) {
                        let {
                            skus: t,
                            libraryName: r,
                            libraryVersion: n,
                            extensionName: i,
                            extensionVersion: o
                        } = e, a = new Map([
                            [0, [r, n]],
                            [2, [i, o]]
                        ]), s = [];
                        if (t ? .length) {
                            if ((s = t.split(",")).length < 4) return t
                        } else s = Array.from({
                            length: 4
                        }, () => "|");
                        return a.forEach((e, t) => {
                            2 === e.length && e[0] ? .length && e[1] ? .length && function(e) {
                                let {
                                    skuArr: t,
                                    index: r,
                                    skuName: n,
                                    skuVersion: i
                                } = e;
                                r >= t.length || (t[r] = [n, i].join("|"))
                            }({
                                skuArr: s,
                                index: t,
                                skuName: e[0],
                                skuVersion: e[1]
                            })
                        }), s.join(",")
                    }(e)
                }
            }
            class nn {
                constructor(e, t, r, n, i, o, a, s, c) {
                    this.config = e, this.browserStorage = t, this.browserCrypto = r, this.networkClient = this.config.system.networkClient, this.eventHandler = i, this.navigationClient = o, this.nativeMessageHandler = s, this.correlationId = c || t6(), this.logger = n.clone(t_.MSAL_SKU, rp, this.correlationId), this.performanceClient = a
                }
                async clearCacheOnLogout(e) {
                    if (e) {
                        e5.accountInfoIsEqual(e, this.browserStorage.getActiveAccount(this.correlationId), !1) && (this.logger.verbose("Setting active account to null"), this.browserStorage.setActiveAccount(null, this.correlationId));
                        try {
                            await this.browserStorage.removeAccount(e5.generateAccountCacheKey(e), this.correlationId), this.logger.verbose("Cleared cache items belonging to the account provided in the logout request.")
                        } catch (e) {
                            this.logger.error("Account provided in logout request was not found. Local cache unchanged.")
                        }
                    } else try {
                        this.logger.verbose("No account provided in logout request, clearing all cache items.", this.correlationId), await this.browserStorage.clear(this.correlationId), await this.browserCrypto.clearKeystore()
                    } catch (e) {
                        this.logger.error("Attempted to clear all MSAL cache items and failed. Local cache unchanged.")
                    }
                }
                getRedirectUri(e) {
                    this.logger.verbose("getRedirectUri called");
                    let t = e || this.config.auth.redirectUri;
                    return e7.getAbsoluteUrl(t, rc())
                }
                initializeServerTelemetryManager(e, t) {
                    return this.logger.verbose("initializeServerTelemetryManager called"), new nr({
                        clientId: this.config.auth.clientId,
                        correlationId: this.correlationId,
                        apiId: e,
                        forceRefresh: t || !1,
                        wrapperSKU: this.browserStorage.getWrapperMetadata()[0],
                        wrapperVer: this.browserStorage.getWrapperMetadata()[1]
                    }, this.browserStorage)
                }
                async getDiscoveredAuthority(e) {
                    let {
                        account: t
                    } = e, r = e.requestExtraQueryParameters && e.requestExtraQueryParameters.hasOwnProperty("instance_aware") ? e.requestExtraQueryParameters.instance_aware : void 0;
                    this.performanceClient.addQueueMeasurement(tv.StandardInteractionClientGetDiscoveredAuthority, this.correlationId);
                    let n = {
                            protocolMode: this.config.auth.protocolMode,
                            OIDCOptions: this.config.auth.OIDCOptions,
                            knownAuthorities: this.config.auth.knownAuthorities,
                            cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                            authorityMetadata: this.config.auth.authorityMetadata,
                            skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
                        },
                        i = e.requestAuthority || this.config.auth.authority,
                        o = r ? .length ? "true" === r : this.config.auth.instanceAware,
                        a = t && o ? this.config.auth.authority.replace(e7.getDomainFromUrl(i), t.environment) : i,
                        s = rP.generateAuthority(a, e.requestAzureCloudOptions || this.config.auth.azureCloudOptions),
                        c = await rO(r3, tv.AuthorityFactoryCreateDiscoveredInstance, this.logger, this.performanceClient, this.correlationId)(s, this.config.system.networkClient, this.browserStorage, n, this.logger, this.correlationId, this.performanceClient);
                    if (t && !c.isAlias(t.environment)) throw ej(eV);
                    return c
                }
            }
            async function ni(e, t, r) {
                e.addQueueMeasurement(tv.GeneratePkceCodes, r);
                let n = rb(no, tv.GenerateCodeVerifier, t, e, r)(e, t, r),
                    i = await rO(na, tv.GenerateCodeChallengeFromVerifier, t, e, r)(n, e, t, r);
                return {
                    verifier: n,
                    challenge: i
                }
            }

            function no(e, t, r) {
                try {
                    let n = new Uint8Array(32);
                    return rb(t4, tv.GetRandomValues, t, e, r)(n), tY(n)
                } catch (e) {
                    throw (0, tB.Z_)(tG.vD)
                }
            }
            async function na(e, t, r, n) {
                t.addQueueMeasurement(tv.GenerateCodeChallengeFromVerifier, n);
                try {
                    let i = await rO(t2, tv.Sha256Digest, r, t, n)(e, t, n);
                    return tY(new Uint8Array(i))
                } catch (e) {
                    throw (0, tB.Z_)(tG.vD)
                }
            }
            async function ns(e, t, r, n) {
                r.addQueueMeasurement(tv.InitializeBaseRequest, e.correlationId);
                let i = e.authority || t.auth.authority,
                    o = [...e && e.scopes || []],
                    a = { ...e,
                        correlationId: e.correlationId,
                        authority: i,
                        scopes: o
                    };
                if (a.authenticationScheme) {
                    if (a.authenticationScheme === l.hO.SSH) {
                        if (!e.sshJwk) throw ej(eF);
                        if (!e.sshKid) throw ej(eB)
                    }
                    n.verbose(`Authentication Scheme set to "${a.authenticationScheme}" as configured in Auth request`)
                } else a.authenticationScheme = l.hO.BEARER, n.verbose('Authentication Scheme wasn\'t explicitly set in request, defaulting to "Bearer" request');
                return t.cache.claimsBasedCachingEnabled && e.claims && !eJ.isEmptyObj(e.claims) && (a.requestedClaimsHash = await re(e.claims)), a
            }
            async function nc(e, t, r, n, i) {
                n.addQueueMeasurement(tv.InitializeSilentRequest, e.correlationId);
                let o = await rO(ns, tv.InitializeBaseRequest, i, n, e.correlationId)(e, r, n, i);
                return { ...e,
                    ...o,
                    account: t,
                    forceRefresh: e.forceRefresh || !1
                }
            }
            class nl extends nn {
                async initializeAuthorizationCodeRequest(e) {
                    this.performanceClient.addQueueMeasurement(tv.StandardInteractionClientInitializeAuthorizationCodeRequest, this.correlationId);
                    let t = await rO(ni, tv.GeneratePkceCodes, this.logger, this.performanceClient, this.correlationId)(this.performanceClient, this.logger, this.correlationId),
                        r = { ...e,
                            redirectUri: e.redirectUri,
                            code: l.gT.EMPTY_STRING,
                            codeVerifier: t.verifier
                        };
                    return e.codeChallenge = t.challenge, e.codeChallengeMethod = l.gT.S256_CODE_CHALLENGE_METHOD, r
                }
                initializeLogoutRequest(e) {
                    this.logger.verbose("initializeLogoutRequest called", e ? .correlationId);
                    let t = {
                        correlationId: this.correlationId || t6(),
                        ...e
                    };
                    if (e) {
                        if (e.logoutHint) this.logger.verbose("logoutHint has already been set in logoutRequest");
                        else if (e.account) {
                            let r = this.getLogoutHintFromIdTokenClaims(e.account);
                            r && (this.logger.verbose("Setting logoutHint to login_hint ID Token Claim value for the account provided"), t.logoutHint = r)
                        } else this.logger.verbose("logoutHint was not set and account was not passed into logout request, logoutHint will not be set")
                    } else this.logger.verbose("logoutHint will not be set since no logout request was configured");
                    return e && null === e.postLogoutRedirectUri ? this.logger.verbose("postLogoutRedirectUri passed as null, not setting post logout redirect uri", t.correlationId) : e && e.postLogoutRedirectUri ? (this.logger.verbose("Setting postLogoutRedirectUri to uri set on logout request", t.correlationId), t.postLogoutRedirectUri = e7.getAbsoluteUrl(e.postLogoutRedirectUri, rc())) : null === this.config.auth.postLogoutRedirectUri ? this.logger.verbose("postLogoutRedirectUri configured as null and no uri set on request, not passing post logout redirect", t.correlationId) : this.config.auth.postLogoutRedirectUri ? (this.logger.verbose("Setting postLogoutRedirectUri to configured uri", t.correlationId), t.postLogoutRedirectUri = e7.getAbsoluteUrl(this.config.auth.postLogoutRedirectUri, rc())) : (this.logger.verbose("Setting postLogoutRedirectUri to current page", t.correlationId), t.postLogoutRedirectUri = e7.getAbsoluteUrl(rc(), rc())), t
                }
                getLogoutHintFromIdTokenClaims(e) {
                    let t = e.idTokenClaims;
                    if (t) {
                        if (t.login_hint) return t.login_hint;
                        this.logger.verbose("The ID Token Claims tied to the provided account do not contain a login_hint claim, logoutHint will not be added to logout request")
                    } else this.logger.verbose("The provided account does not contain ID Token Claims, logoutHint will not be added to logout request");
                    return null
                }
                async createAuthCodeClient(e) {
                    return this.performanceClient.addQueueMeasurement(tv.StandardInteractionClientCreateAuthCodeClient, this.correlationId), new nt(await rO(this.getClientConfiguration.bind(this), tv.StandardInteractionClientGetClientConfiguration, this.logger, this.performanceClient, this.correlationId)(e), this.performanceClient)
                }
                async getClientConfiguration(e) {
                    let {
                        serverTelemetryManager: t,
                        requestAuthority: r,
                        requestAzureCloudOptions: n,
                        requestExtraQueryParameters: i,
                        account: o
                    } = e;
                    this.performanceClient.addQueueMeasurement(tv.StandardInteractionClientGetClientConfiguration, this.correlationId);
                    let a = await rO(this.getDiscoveredAuthority.bind(this), tv.StandardInteractionClientGetDiscoveredAuthority, this.logger, this.performanceClient, this.correlationId)({
                            requestAuthority: r,
                            requestAzureCloudOptions: n,
                            requestExtraQueryParameters: i,
                            account: o
                        }),
                        s = this.config.system.loggerOptions;
                    return {
                        authOptions: {
                            clientId: this.config.auth.clientId,
                            authority: a,
                            clientCapabilities: this.config.auth.clientCapabilities,
                            redirectUri: this.config.auth.redirectUri
                        },
                        systemOptions: {
                            tokenRenewalOffsetSeconds: this.config.system.tokenRenewalOffsetSeconds,
                            preventCorsPreflight: !0
                        },
                        loggerOptions: {
                            loggerCallback: s.loggerCallback,
                            piiLoggingEnabled: s.piiLoggingEnabled,
                            logLevel: s.logLevel,
                            correlationId: this.correlationId
                        },
                        cacheOptions: {
                            claimsBasedCachingEnabled: this.config.cache.claimsBasedCachingEnabled
                        },
                        cryptoInterface: this.browserCrypto,
                        networkInterface: this.networkClient,
                        storageInterface: this.browserStorage,
                        serverTelemetryManager: t,
                        libraryInfo: {
                            sku: t_.MSAL_SKU,
                            version: rp,
                            cpu: l.gT.EMPTY_STRING,
                            os: l.gT.EMPTY_STRING
                        },
                        telemetry: this.config.telemetry
                    }
                }
                async initializeAuthorizationRequest(e, t) {
                    this.performanceClient.addQueueMeasurement(tv.StandardInteractionClientInitializeAuthorizationRequest, this.correlationId);
                    let r = this.getRedirectUri(e.redirectUri),
                        n = rH.setRequestState(this.browserCrypto, e && e.state || l.gT.EMPTY_STRING, {
                            interactionType: t
                        }),
                        i = { ...await rO(ns, tv.InitializeBaseRequest, this.logger, this.performanceClient, this.correlationId)({ ...e,
                                correlationId: this.correlationId
                            }, this.config, this.performanceClient, this.logger),
                            redirectUri: r,
                            state: n,
                            nonce: e.nonce || t6(),
                            responseMode: this.config.auth.OIDCOptions.serverResponseType
                        };
                    if (e.loginHint || e.sid) return i;
                    let o = e.account || this.browserStorage.getActiveAccount(this.correlationId);
                    if (o && (this.logger.verbose("Setting validated request account", this.correlationId), this.logger.verbosePii(`Setting validated request account: ${o.homeAccountId}`, this.correlationId), i.account = o), !i.loginHint && !o) {
                        let e = this.browserStorage.getLegacyLoginHint();
                        e && (i.loginHint = e)
                    }
                    return i
                }
            }
            var nh = r(32294);
            let nd = "user_switch",
                nu = {
                    [nd]: "User attempted to switch accounts in the native broker, which is not allowed. All new accounts must sign-in through the standard web flow first, please try again."
                };
            class ng extends g.l4 {
                constructor(e, t, r) {
                    super(e, t), Object.setPrototypeOf(this, ng.prototype), this.name = "NativeAuthError", this.ext = r
                }
            }

            function np(e) {
                return !!e.ext && !!e.ext.status && ("PERSISTENT_ERROR" === e.ext.status || "DISABLED" === e.ext.status) || !!e.ext && !!e.ext.error && -2147186943 === e.ext.error || "ContentError" === e.errorCode
            }

            function nm(e, t, r) {
                if (r && r.status) switch (r.status) {
                    case "ACCOUNT_UNAVAILABLE":
                        return (0, rq.ip)(rU.QP);
                    case "USER_INTERACTION_REQUIRED":
                        return new rq.Yo(e, t);
                    case "USER_CANCEL":
                        return (0, tB.Z_)(tG.h7);
                    case "NO_NETWORK":
                        return (0, tB.Z_)(tG.Mq)
                }
                return new ng(e, nu[e] || t, r)
            }
            class nC extends r6 {
                constructor(e, t) {
                    super(e, t)
                }
                async acquireToken(e) {
                    this.performanceClient ? .addQueueMeasurement(tv.RefreshTokenClientAcquireToken, e.correlationId);
                    let t = eu(),
                        r = await rO(this.executeTokenRequest.bind(this), tv.RefreshTokenClientExecuteTokenRequest, this.logger, this.performanceClient, e.correlationId)(e, this.authority),
                        n = r.headers ? .[l.SZ.X_MS_REQUEST_ID],
                        i = new r9(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                    return i.validateTokenResponse(r.body), rO(i.handleServerTokenResponse.bind(i), tv.HandleServerTokenResponse, this.logger, this.performanceClient, e.correlationId)(r.body, this.authority, t, e, void 0, void 0, !0, e.forceCache, n)
                }
                async acquireTokenByRefreshToken(e) {
                    if (!e) throw ej(eq);
                    if (this.performanceClient ? .addQueueMeasurement(tv.RefreshTokenClientAcquireTokenByRefreshToken, e.correlationId), !e.account) throw ea(D);
                    if (this.cacheManager.isAppMetadataFOCI(e.account.environment)) try {
                        return await rO(this.acquireTokenWithCachedRefreshToken.bind(this), tv.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, e.correlationId)(e, !0)
                    } catch (r) {
                        let e = r instanceof rq.Yo && r.errorCode === rU.I2,
                            t = r instanceof rQ && r.errorCode === l.D1.INVALID_GRANT_ERROR && r.subError === l.D1.CLIENT_MISMATCH_ERROR;
                        if (e || t);
                        else throw r
                    }
                    return rO(this.acquireTokenWithCachedRefreshToken.bind(this), tv.RefreshTokenClientAcquireTokenWithCachedRefreshToken, this.logger, this.performanceClient, e.correlationId)(e, !1)
                }
                async acquireTokenWithCachedRefreshToken(e, t) {
                    this.performanceClient ? .addQueueMeasurement(tv.RefreshTokenClientAcquireTokenWithCachedRefreshToken, e.correlationId);
                    let r = rb(this.cacheManager.getRefreshToken.bind(this.cacheManager), tv.CacheManagerGetRefreshToken, this.logger, this.performanceClient, e.correlationId)(e.account, t, e.correlationId, void 0, this.performanceClient);
                    if (!r) throw (0, rq.ip)(rU.I2);
                    if (r.expiresOn && eg(r.expiresOn, e.refreshTokenExpirationOffsetSeconds || 300)) throw (0, rq.ip)(rU.Tw);
                    let n = { ...e,
                        refreshToken: r.secret,
                        authenticationScheme: e.authenticationScheme || l.hO.BEARER,
                        ccsCredential: {
                            credential: e.account.homeAccountId,
                            type: rL.HOME_ACCOUNT_ID
                        }
                    };
                    try {
                        return await rO(this.acquireToken.bind(this), tv.RefreshTokenClientAcquireToken, this.logger, this.performanceClient, e.correlationId)(n)
                    } catch (t) {
                        if (t instanceof rq.Yo && t.subError === rU.nl) {
                            this.logger.verbose("acquireTokenWithRefreshToken: bad refresh token, removing from cache");
                            let t = ep(r);
                            this.cacheManager.removeRefreshToken(t, e.correlationId)
                        }
                        throw t
                    }
                }
                async executeTokenRequest(e, t) {
                    this.performanceClient ? .addQueueMeasurement(tv.RefreshTokenClientExecuteTokenRequest, e.correlationId);
                    let r = this.createTokenQueryParameters(e),
                        n = e7.appendQueryString(t.tokenEndpoint, r),
                        i = await rO(this.createTokenRequestBody.bind(this), tv.RefreshTokenClientCreateTokenRequestBody, this.logger, this.performanceClient, e.correlationId)(e),
                        o = this.createTokenRequestHeaders(e.ccsCredential),
                        a = {
                            clientId: e.tokenBodyParameters ? .clientId || this.config.authOptions.clientId,
                            authority: t.canonicalAuthority,
                            scopes: e.scopes,
                            claims: e.claims,
                            authenticationScheme: e.authenticationScheme,
                            resourceRequestMethod: e.resourceRequestMethod,
                            resourceRequestUri: e.resourceRequestUri,
                            shrClaims: e.shrClaims,
                            sshKid: e.sshKid
                        };
                    return rO(this.executePostToTokenEndpoint.bind(this), tv.RefreshTokenClientExecutePostToTokenEndpoint, this.logger, this.performanceClient, e.correlationId)(n, i, o, a, e.correlationId, tv.RefreshTokenClientExecutePostToTokenEndpoint)
                }
                async createTokenRequestBody(e) {
                    this.performanceClient ? .addQueueMeasurement(tv.RefreshTokenClientCreateTokenRequestBody, e.correlationId);
                    let t = new r4(e.correlationId, this.performanceClient);
                    if (t.addClientId(e.embeddedClientId || e.tokenBodyParameters ? .[rY] || this.config.authOptions.clientId), e.redirectUri && t.addRedirectUri(e.redirectUri), t.addScopes(e.scopes, !0, this.config.authOptions.authority.options.OIDCOptions ? .defaultScopes), t.addGrantType(l.qJ.REFRESH_TOKEN_GRANT), t.addClientInfo(), t.addLibraryInfo(this.config.libraryInfo), t.addApplicationTelemetry(this.config.telemetry.application), t.addThrottling(), this.serverTelemetryManager && !tI(this.config) && t.addServerTelemetry(this.serverTelemetryManager), t.addRefreshToken(e.refreshToken), this.config.clientCredentials.clientSecret && t.addClientSecret(this.config.clientCredentials.clientSecret), this.config.clientCredentials.clientAssertion) {
                        let r = this.config.clientCredentials.clientAssertion;
                        t.addClientAssertion(await ne(r.assertion, this.config.authOptions.clientId, e.resourceRequestUri)), t.addClientAssertionType(r.assertionType)
                    }
                    if (e.authenticationScheme === l.hO.POP) {
                        let r;
                        let n = new r5(this.cryptoUtils, this.performanceClient);
                        r = e.popKid ? this.cryptoUtils.encodeKid(e.popKid) : (await rO(n.generateCnf.bind(n), tv.PopTokenGenerateCnf, this.logger, this.performanceClient, e.correlationId)(e, this.logger)).reqCnfString, t.addPopToken(r)
                    } else if (e.authenticationScheme === l.hO.SSH) {
                        if (e.sshJwk) t.addSshJwk(e.sshJwk);
                        else throw ej(eF)
                    }
                    if ((!eJ.isEmptyObj(e.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) && t.addClaims(e.claims, this.config.authOptions.clientCapabilities), this.config.systemOptions.preventCorsPreflight && e.ccsCredential) switch (e.ccsCredential.type) {
                        case rL.HOME_ACCOUNT_ID:
                            try {
                                let r = e0(e.ccsCredential.credential);
                                t.addCcsOid(r)
                            } catch (e) {
                                this.logger.verbose("Could not parse home account ID for CCS Header: " + e)
                            }
                            break;
                        case rL.UPN:
                            t.addCcsUpn(e.ccsCredential.credential)
                    }
                    return e.embeddedClientId && t.addBrokerParameters({
                        brokerClientId: this.config.authOptions.clientId,
                        brokerRedirectUri: this.config.authOptions.redirectUri
                    }), e.tokenBodyParameters && t.addExtraQueryParameters(e.tokenBodyParameters), t.createQueryString()
                }
            }
            class nf extends r6 {
                constructor(e, t) {
                    super(e, t)
                }
                async acquireToken(e) {
                    try {
                        let [t, r] = await this.acquireCachedToken({ ...e,
                            scopes: e.scopes ? .length ? e.scopes : [...l.f_]
                        });
                        return r === l.To.PROACTIVELY_REFRESHED && (this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token's refreshOn property has been exceeded'. It's not expired, but must be refreshed."), new nC(this.config, this.performanceClient).acquireTokenByRefreshToken(e).catch(() => {})), t
                    } catch (t) {
                        if (t instanceof eo && t.errorCode === Q) return new nC(this.config, this.performanceClient).acquireTokenByRefreshToken(e);
                        throw t
                    }
                }
                async acquireCachedToken(e) {
                    this.performanceClient ? .addQueueMeasurement(tv.SilentFlowClientAcquireCachedToken, e.correlationId);
                    let t = l.To.NOT_APPLICABLE;
                    if (e.forceRefresh || !this.config.cacheOptions.claimsBasedCachingEnabled && !eJ.isEmptyObj(e.claims)) throw this.setCacheOutcome(l.To.FORCE_REFRESH_OR_CLAIMS, e.correlationId), ea(Q);
                    if (!e.account) throw ea(D);
                    let r = e.account.tenantId || function(e) {
                            let t = new e7(e).getUrlComponents(),
                                r = t.PathSegments.slice(-1)[0] ? .toLowerCase();
                            switch (r) {
                                case l.Nb.COMMON:
                                case l.Nb.ORGANIZATIONS:
                                case l.Nb.CONSUMERS:
                                    return;
                                default:
                                    return r
                            }
                        }(e.authority),
                        n = this.cacheManager.getTokenKeys(),
                        i = this.cacheManager.getAccessToken(e.account, e, n, r, this.performanceClient);
                    if (i) {
                        if (Number(i.cachedAt) > eu() || eg(i.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) throw this.setCacheOutcome(l.To.CACHED_ACCESS_TOKEN_EXPIRED, e.correlationId), ea(Q);
                        i.refreshOn && eg(i.refreshOn, 0) && (t = l.To.PROACTIVELY_REFRESHED)
                    } else throw this.setCacheOutcome(l.To.NO_CACHED_ACCESS_TOKEN, e.correlationId), ea(Q);
                    let o = e.authority || this.authority.getPreferredCache(),
                        a = {
                            account: this.cacheManager.readAccountFromCache(e.account, e.correlationId),
                            accessToken: i,
                            idToken: this.cacheManager.getIdToken(e.account, e.correlationId, n, r, this.performanceClient),
                            refreshToken: null,
                            appMetadata: this.cacheManager.readAppMetadataFromCache(o)
                        };
                    return this.setCacheOutcome(t, e.correlationId), this.config.serverTelemetryManager && this.config.serverTelemetryManager.incrementCacheHits(), [await rO(this.generateResultFromCacheRecord.bind(this), tv.SilentFlowClientGenerateResultFromCacheRecord, this.logger, this.performanceClient, e.correlationId)(a, e), t]
                }
                setCacheOutcome(e, t) {
                    this.serverTelemetryManager ? .setCacheOutcome(e), this.performanceClient ? .addFields({
                        cacheOutcome: e
                    }, t), e !== l.To.NOT_APPLICABLE && this.logger.info(`Token refresh is required due to cache outcome: ${e}`)
                }
                async generateResultFromCacheRecord(e, t) {
                    let r;
                    if (this.performanceClient ? .addQueueMeasurement(tv.SilentFlowClientGenerateResultFromCacheRecord, t.correlationId), e.idToken && (r = eh(e.idToken.secret, this.config.cryptoInterface.base64Decode)), t.maxAge || 0 === t.maxAge) {
                        let e = r ? .auth_time;
                        if (!e) throw ea(S);
                        ed(e, t.maxAge)
                    }
                    return r9.generateAuthenticationResult(this.cryptoUtils, this.authority, e, !0, t, r)
                }
            }
            class ny extends nl {
                async acquireToken(e) {
                    this.performanceClient.addQueueMeasurement(tv.SilentCacheClientAcquireToken, e.correlationId);
                    let t = this.initializeServerTelemetryManager(tq.acquireTokenSilent_silentFlow),
                        r = new nf(await rO(this.getClientConfiguration.bind(this), tv.StandardInteractionClientGetClientConfiguration, this.logger, this.performanceClient, this.correlationId)({
                            serverTelemetryManager: t,
                            requestAuthority: e.authority,
                            requestAzureCloudOptions: e.azureCloudOptions,
                            account: e.account
                        }), this.performanceClient);
                    this.logger.verbose("Silent auth client created");
                    try {
                        let t = (await rO(r.acquireCachedToken.bind(r), tv.SilentFlowClientAcquireCachedToken, this.logger, this.performanceClient, e.correlationId)(e))[0];
                        return this.performanceClient.addFields({
                            fromCache: !0
                        }, e.correlationId), t
                    } catch (e) {
                        throw e instanceof tB.Ut && e.errorCode === tG.XM && this.logger.verbose("Signing keypair for bound access token not found. Refreshing bound access token and generating a new crypto keypair."), e
                    }
                }
                logout(e) {
                    this.logger.verbose("logoutRedirect called");
                    let t = this.initializeLogoutRequest(e);
                    return this.clearCacheOnLogout(t ? .account)
                }
            }
            class nT extends nn {
                constructor(e, t, r, n, i, o, a, s, c, l, h, d) {
                    super(e, t, r, n, i, o, s, c, d), this.apiId = a, this.accountId = l, this.nativeMessageHandler = c, this.nativeStorageManager = h, this.silentCacheClient = new ny(e, this.nativeStorageManager, r, n, i, o, s, c, d), this.serverTelemetryManager = this.initializeServerTelemetryManager(this.apiId);
                    let u = this.nativeMessageHandler.getExtensionId() === tS.PREFERRED_EXTENSION_ID ? "chrome" : this.nativeMessageHandler.getExtensionId() ? .length ? "unknown" : void 0;
                    this.skus = nr.makeExtraSkuString({
                        libraryName: t_.MSAL_SKU,
                        libraryVersion: rp,
                        extensionName: u,
                        extensionVersion: this.nativeMessageHandler.getExtensionVersion()
                    })
                }
                addRequestSKUs(e) {
                    e.extraParameters = { ...e.extraParameters,
                        "x-client-xtra-sku": this.skus
                    }
                }
                async acquireToken(e) {
                    this.performanceClient.addQueueMeasurement(tv.NativeInteractionClientAcquireToken, e.correlationId), this.logger.trace("NativeInteractionClient - acquireToken called.");
                    let t = this.performanceClient.startMeasurement(tv.NativeInteractionClientAcquireToken, e.correlationId),
                        r = eu();
                    try {
                        let n = await this.initializeNativeRequest(e);
                        try {
                            let e = await this.acquireTokensFromCache(this.accountId, n);
                            return t.end({
                                success: !0,
                                isNativeBroker: !1,
                                fromCache: !0
                            }), e
                        } catch (e) {
                            this.logger.info("MSAL internal Cache does not contain tokens, proceed to make a native call")
                        }
                        let { ...i
                        } = n, o = {
                            method: tk.GetToken,
                            request: i
                        }, a = await this.nativeMessageHandler.sendMessage(o), s = this.validateNativeResponse(a);
                        return await this.handleNativeResponse(s, n, r).then(e => (t.end({
                            success: !0,
                            isNativeBroker: !0,
                            requestId: e.requestId
                        }), this.serverTelemetryManager.clearNativeBrokerErrorCode(), e)).catch(e => {
                            throw t.end({
                                success: !1,
                                errorCode: e.errorCode,
                                subErrorCode: e.subError,
                                isNativeBroker: !0
                            }), e
                        })
                    } catch (e) {
                        throw e instanceof ng && this.serverTelemetryManager.setNativeBrokerErrorCode(e.errorCode), e
                    }
                }
                createSilentCacheRequest(e, t) {
                    return {
                        authority: e.authority,
                        correlationId: this.correlationId,
                        scopes: eZ.fromString(e.scope).asArray(),
                        account: t,
                        forceRefresh: !1
                    }
                }
                async acquireTokensFromCache(e, t) {
                    if (!e) throw this.logger.warning("NativeInteractionClient:acquireTokensFromCache - No nativeAccountId provided"), ea(F);
                    let r = this.browserStorage.getBaseAccountInfo({
                        nativeAccountId: e
                    }, t.correlationId);
                    if (!r) throw ea(F);
                    try {
                        let e = this.createSilentCacheRequest(t, r),
                            n = await this.silentCacheClient.acquireToken(e),
                            i = { ...r,
                                idTokenClaims: n ? .idTokenClaims,
                                idToken: n ? .idToken
                            };
                        return { ...n,
                            account: i
                        }
                    } catch (e) {
                        throw e
                    }
                }
                async acquireTokenRedirect(e, t) {
                    this.logger.trace("NativeInteractionClient - acquireTokenRedirect called.");
                    let { ...r
                    } = e;
                    delete r.onRedirectNavigate;
                    let n = await this.initializeNativeRequest(r),
                        i = {
                            method: tk.GetToken,
                            request: n
                        };
                    try {
                        let e = await this.nativeMessageHandler.sendMessage(i);
                        this.validateNativeResponse(e)
                    } catch (e) {
                        if (e instanceof ng && (this.serverTelemetryManager.setNativeBrokerErrorCode(e.errorCode), np(e))) throw e
                    }
                    this.browserStorage.setTemporaryCache(tO.NATIVE_REQUEST, JSON.stringify(n), !0);
                    let o = {
                            apiId: tq.acquireTokenRedirect,
                            timeout: this.config.system.redirectNavigationTimeout,
                            noHistory: !1
                        },
                        a = this.config.auth.navigateToLoginRequestUrl ? window.location.href : this.getRedirectUri(e.redirectUri);
                    t.end({
                        success: !0
                    }), await this.navigationClient.navigateExternal(a, o)
                }
                async handleRedirectPromise(e, t) {
                    if (this.logger.trace("NativeInteractionClient - handleRedirectPromise called."), !this.browserStorage.isInteractionInProgress(!0)) return this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null."), null;
                    let r = this.browserStorage.getCachedNativeRequest();
                    if (!r) return this.logger.verbose("NativeInteractionClient - handleRedirectPromise called but there is no cached request, returning null."), e && t && e ? .addFields({
                        errorCode: "no_cached_request"
                    }, t), null;
                    let {
                        prompt: n,
                        ...i
                    } = r;
                    n && this.logger.verbose("NativeInteractionClient - handleRedirectPromise called and prompt was included in the original request, removing prompt from cached request to prevent second interaction with native broker window."), this.browserStorage.removeItem(this.browserStorage.generateCacheKey(tO.NATIVE_REQUEST));
                    let o = {
                            method: tk.GetToken,
                            request: i
                        },
                        a = eu();
                    try {
                        this.logger.verbose("NativeInteractionClient - handleRedirectPromise sending message to native broker.");
                        let e = await this.nativeMessageHandler.sendMessage(o);
                        this.validateNativeResponse(e);
                        let t = this.handleNativeResponse(e, i, a);
                        this.browserStorage.setInteractionInProgress(!1);
                        let r = await t;
                        return this.serverTelemetryManager.clearNativeBrokerErrorCode(), r
                    } catch (e) {
                        throw this.browserStorage.setInteractionInProgress(!1), e
                    }
                }
                logout() {
                    return this.logger.trace("NativeInteractionClient - logout called."), Promise.reject("Logout not implemented yet")
                }
                async handleNativeResponse(e, t, r) {
                    this.logger.trace("NativeInteractionClient - handleNativeResponse called.");
                    let n = eh(e.id_token, rw),
                        i = this.createHomeAccountIdentifier(e, n);
                    if (i !== this.browserStorage.getAccountInfoFilteredBy({
                            nativeAccountId: t.accountId
                        }, this.correlationId) ? .homeAccountId && e.account.id !== t.accountId) throw nm(nd);
                    let o = await this.getDiscoveredAuthority({
                            requestAuthority: t.authority
                        }),
                        a = r7(this.browserStorage, o, i, rw, this.correlationId, n, e.client_info, void 0, n.tid, void 0, e.account.id, this.logger),
                        s = await this.generateAuthenticationResult(e, t, n, a, o.canonicalAuthority, r);
                    return this.cacheAccount(a), this.cacheNativeTokens(e, t, i, n, e.access_token, s.tenantId, r), s
                }
                createHomeAccountIdentifier(e, t) {
                    return e5.generateHomeAccountId(e.client_info || l.gT.EMPTY_STRING, e3.Default, this.logger, this.browserCrypto, t)
                }
                generateScopes(e, t) {
                    return e.scope ? eZ.fromString(e.scope) : eZ.fromString(t.scope)
                }
                async generatePopAccessToken(e, t) {
                    if (t.tokenType !== l.hO.POP || !t.signPopToken) return e.access_token; {
                        if (e.shr) return this.logger.trace("handleNativeServerResponse: SHR is enabled in native layer"), e.shr;
                        let r = new r5(this.browserCrypto),
                            n = {
                                resourceRequestMethod: t.resourceRequestMethod,
                                resourceRequestUri: t.resourceRequestUri,
                                shrClaims: t.shrClaims,
                                shrNonce: t.shrNonce
                            };
                        if (!t.keyId) throw ea(Z);
                        return r.signPopToken(e.access_token, t.keyId, n)
                    }
                }
                async generateAuthenticationResult(e, t, r, n, i, o) {
                    let a = this.addTelemetryFromNativeResponse(e),
                        s = e.scope ? eZ.fromString(e.scope) : eZ.fromString(t.scope),
                        c = e.account.properties || {},
                        h = c.UID || r.oid || r.sub || l.gT.EMPTY_STRING,
                        d = c.TenantId || r.tid || l.gT.EMPTY_STRING,
                        u = e4(n.getAccountInfo(), void 0, r, e.id_token);
                    u.nativeAccountId !== e.account.id && (u.nativeAccountId = e.account.id);
                    let g = await this.generatePopAccessToken(e, t),
                        p = t.tokenType === l.hO.POP ? l.hO.POP : l.hO.BEARER;
                    return {
                        authority: i,
                        uniqueId: h,
                        tenantId: d,
                        scopes: s.asArray(),
                        account: u,
                        idToken: e.id_token,
                        idTokenClaims: r,
                        accessToken: g,
                        fromCache: !!a && this.isResponseFromCache(a),
                        expiresOn: new Date(1e3 * Number(o + e.expires_in)),
                        tokenType: p,
                        correlationId: this.correlationId,
                        state: e.state,
                        fromNativeBroker: !0
                    }
                }
                cacheAccount(e) {
                    this.browserStorage.setAccount(e, this.correlationId), this.browserStorage.removeAccountContext(e, this.correlationId).catch(e => {
                        this.logger.error(`Error occurred while removing account context from browser storage. ${e}`)
                    })
                }
                cacheNativeTokens(e, t, r, n, i, o, a) {
                    let s = em(r, t.authority, e.id_token || "", t.clientId, n.tid || ""),
                        c = t.tokenType === l.hO.POP ? l.gT.SHR_NONCE_VALIDITY : ("string" == typeof e.expires_in ? parseInt(e.expires_in, 10) : e.expires_in) || 0,
                        h = this.generateScopes(e, t),
                        d = eC(r, t.authority, i, t.clientId, n.tid || o, h.printScopes(), a + c, 0, rw, void 0, t.tokenType, void 0, t.keyId);
                    this.nativeStorageManager.saveCacheRecord({
                        idToken: s,
                        accessToken: d
                    }, t.correlationId, t.storeInCache)
                }
                addTelemetryFromNativeResponse(e) {
                    let t = this.getMATSFromResponse(e);
                    return t ? (this.performanceClient.addFields({
                        extensionId: this.nativeMessageHandler.getExtensionId(),
                        extensionVersion: this.nativeMessageHandler.getExtensionVersion(),
                        matsBrokerVersion: t.broker_version,
                        matsAccountJoinOnStart: t.account_join_on_start,
                        matsAccountJoinOnEnd: t.account_join_on_end,
                        matsDeviceJoin: t.device_join,
                        matsPromptBehavior: t.prompt_behavior,
                        matsApiErrorCode: t.api_error_code,
                        matsUiVisible: t.ui_visible,
                        matsSilentCode: t.silent_code,
                        matsSilentBiSubCode: t.silent_bi_sub_code,
                        matsSilentMessage: t.silent_message,
                        matsSilentStatus: t.silent_status,
                        matsHttpStatus: t.http_status,
                        matsHttpEventCount: t.http_event_count
                    }, this.correlationId), t) : null
                }
                validateNativeResponse(e) {
                    if (e.hasOwnProperty("access_token") && e.hasOwnProperty("id_token") && e.hasOwnProperty("client_info") && e.hasOwnProperty("account") && e.hasOwnProperty("scope") && e.hasOwnProperty("expires_in")) return e;
                    throw (0, g.MD)(nh.g, "Response missing expected properties.")
                }
                getMATSFromResponse(e) {
                    if (e.properties.MATS) try {
                        return JSON.parse(e.properties.MATS)
                    } catch (e) {
                        this.logger.error("NativeInteractionClient - Error parsing MATS telemetry, returning null instead")
                    }
                    return null
                }
                isResponseFromCache(e) {
                    return void 0 === e.is_cached ? (this.logger.verbose("NativeInteractionClient - MATS telemetry does not contain field indicating if response was served from cache. Returning false."), !1) : !!e.is_cached
                }
                async initializeNativeRequest(e) {
                    this.logger.trace("NativeInteractionClient - initializeNativeRequest called");
                    let t = e.authority || this.config.auth.authority;
                    e.account && await this.getDiscoveredAuthority({
                        requestAuthority: t,
                        requestAzureCloudOptions: e.azureCloudOptions,
                        account: e.account
                    });
                    let r = new e7(t);
                    r.validateAsUri();
                    let {
                        scopes: n,
                        ...i
                    } = e, o = new eZ(n || []);
                    o.appendScopes(l.f_);
                    let a = { ...i,
                        accountId: this.accountId,
                        clientId: this.config.auth.clientId,
                        authority: r.urlString,
                        scope: o.printScopes(),
                        redirectUri: this.getRedirectUri(e.redirectUri),
                        prompt: (() => {
                            switch (this.apiId) {
                                case tq.ssoSilent:
                                case tq.acquireTokenSilent_silentFlow:
                                    return this.logger.trace("initializeNativeRequest: silent request sets prompt to none"), l.NJ.NONE
                            }
                            if (!e.prompt) {
                                this.logger.trace("initializeNativeRequest: prompt was not provided");
                                return
                            }
                            switch (e.prompt) {
                                case l.NJ.NONE:
                                case l.NJ.CONSENT:
                                case l.NJ.LOGIN:
                                    return this.logger.trace("initializeNativeRequest: prompt is compatible with native flow"), e.prompt;
                                default:
                                    throw this.logger.trace(`initializeNativeRequest: prompt = ${e.prompt} is not compatible with native flow`), (0, tB.Z_)(tG.o9)
                            }
                        })(),
                        correlationId: this.correlationId,
                        tokenType: e.authenticationScheme,
                        windowTitleSubstring: document.title,
                        extraParameters: { ...e.extraQueryParameters,
                            ...e.tokenQueryParameters
                        },
                        extendedExpiryToken: !1,
                        keyId: e.popKid
                    };
                    if (a.signPopToken && e.popKid) throw (0, tB.Z_)(tG.Hh);
                    if (this.handleExtraBrokerParams(a), a.extraParameters = a.extraParameters || {}, a.extraParameters.telemetry = tS.MATS_TELEMETRY, e.authenticationScheme === l.hO.POP) {
                        let t;
                        let r = {
                                resourceRequestUri: e.resourceRequestUri,
                                resourceRequestMethod: e.resourceRequestMethod,
                                shrClaims: e.shrClaims,
                                shrNonce: e.shrNonce
                            },
                            n = new r5(this.browserCrypto);
                        if (a.keyId) t = this.browserCrypto.base64UrlEncode(JSON.stringify({
                            kid: a.keyId
                        })), a.signPopToken = !1;
                        else {
                            let i = await rO(n.generateCnf.bind(n), tv.PopTokenGenerateCnf, this.logger, this.performanceClient, e.correlationId)(r, this.logger);
                            t = i.reqCnfString, a.keyId = i.kid, a.signPopToken = !0
                        }
                        a.reqCnf = t
                    }
                    return this.addRequestSKUs(a), a
                }
                handleExtraBrokerParams(e) {
                    let t = e.extraParameters && e.extraParameters.hasOwnProperty(r0) && e.extraParameters.hasOwnProperty(r1) && e.extraParameters.hasOwnProperty(rY);
                    if (!e.embeddedClientId && !t) return;
                    let r = "",
                        n = e.redirectUri;
                    e.embeddedClientId ? (e.redirectUri = this.config.auth.redirectUri, r = e.embeddedClientId) : e.extraParameters && (e.redirectUri = e.extraParameters[r1], r = e.extraParameters[rY]), e.extraParameters = {
                        child_client_id: r,
                        child_redirect_uri: n
                    }, this.performanceClient ? .addFields({
                        embeddedClientId: r,
                        embeddedRedirectUri: n
                    }, e.correlationId)
                }
            }
            class nI {
                constructor(e, t, r, n) {
                    this.logger = e, this.handshakeTimeoutMs = t, this.extensionId = n, this.resolvers = new Map, this.handshakeResolvers = new Map, this.messageChannel = new MessageChannel, this.windowListener = this.onWindowMessage.bind(this), this.performanceClient = r, this.handshakeEvent = r.startMeasurement(tv.NativeMessageHandlerHandshake)
                }
                async sendMessage(e) {
                    this.logger.trace("NativeMessageHandler - sendMessage called.");
                    let t = {
                        channel: tS.CHANNEL_ID,
                        extensionId: this.extensionId,
                        responseId: t6(),
                        body: e
                    };
                    return this.logger.trace("NativeMessageHandler - Sending request to browser extension"), this.logger.tracePii(`NativeMessageHandler - Sending request to browser extension: ${JSON.stringify(t)}`), this.messageChannel.port1.postMessage(t), new Promise((e, r) => {
                        this.resolvers.set(t.responseId, {
                            resolve: e,
                            reject: r
                        })
                    })
                }
                static async createProvider(e, t, r) {
                    e.trace("NativeMessageHandler - createProvider called.");
                    try {
                        let n = new nI(e, t, r, tS.PREFERRED_EXTENSION_ID);
                        return await n.sendHandshakeRequest(), n
                    } catch (i) {
                        let n = new nI(e, t, r);
                        return await n.sendHandshakeRequest(), n
                    }
                }
                async sendHandshakeRequest() {
                    this.logger.trace("NativeMessageHandler - sendHandshakeRequest called."), window.addEventListener("message", this.windowListener, !1);
                    let e = {
                        channel: tS.CHANNEL_ID,
                        extensionId: this.extensionId,
                        responseId: t6(),
                        body: {
                            method: tk.HandshakeRequest
                        }
                    };
                    return this.handshakeEvent.add({
                        extensionId: this.extensionId,
                        extensionHandshakeTimeoutMs: this.handshakeTimeoutMs
                    }), this.messageChannel.port1.onmessage = e => {
                        this.onChannelMessage(e)
                    }, window.postMessage(e, window.origin, [this.messageChannel.port2]), new Promise((t, r) => {
                        this.handshakeResolvers.set(e.responseId, {
                            resolve: t,
                            reject: r
                        }), this.timeoutId = window.setTimeout(() => {
                            window.removeEventListener("message", this.windowListener, !1), this.messageChannel.port1.close(), this.messageChannel.port2.close(), this.handshakeEvent.end({
                                extensionHandshakeTimedOut: !0,
                                success: !1
                            }), r((0, tB.Z_)(tG.hR)), this.handshakeResolvers.delete(e.responseId)
                        }, this.handshakeTimeoutMs)
                    })
                }
                onWindowMessage(e) {
                    if (this.logger.trace("NativeMessageHandler - onWindowMessage called"), e.source !== window) return;
                    let t = e.data;
                    if (t.channel && t.channel === tS.CHANNEL_ID && (!t.extensionId || t.extensionId === this.extensionId) && t.body.method === tk.HandshakeRequest) {
                        let e = this.handshakeResolvers.get(t.responseId);
                        if (!e) {
                            this.logger.trace(`NativeMessageHandler.onWindowMessage - resolver can't be found for request ${t.responseId}`);
                            return
                        }
                        this.logger.verbose(t.extensionId ? `Extension with id: ${t.extensionId} not installed` : "No extension installed"), clearTimeout(this.timeoutId), this.messageChannel.port1.close(), this.messageChannel.port2.close(), window.removeEventListener("message", this.windowListener, !1), this.handshakeEvent.end({
                            success: !1,
                            extensionInstalled: !1
                        }), e.reject((0, tB.Z_)(tG.Wb))
                    }
                }
                onChannelMessage(e) {
                    this.logger.trace("NativeMessageHandler - onChannelMessage called.");
                    let t = e.data,
                        r = this.resolvers.get(t.responseId),
                        n = this.handshakeResolvers.get(t.responseId);
                    try {
                        let e = t.body.method;
                        if (e === tk.Response) {
                            if (!r) return;
                            let e = t.body.response;
                            if (this.logger.trace("NativeMessageHandler - Received response from browser extension"), this.logger.tracePii(`NativeMessageHandler - Received response from browser extension: ${JSON.stringify(e)}`), "Success" !== e.status) r.reject(nm(e.code, e.description, e.ext));
                            else if (e.result) e.result.code && e.result.description ? r.reject(nm(e.result.code, e.result.description, e.result.ext)) : r.resolve(e.result);
                            else throw (0, g.MD)(nh.g, "Event does not contain result.");
                            this.resolvers.delete(t.responseId)
                        } else if (e === tk.HandshakeResponse) {
                            if (!n) {
                                this.logger.trace(`NativeMessageHandler.onChannelMessage - resolver can't be found for request ${t.responseId}`);
                                return
                            }
                            clearTimeout(this.timeoutId), window.removeEventListener("message", this.windowListener, !1), this.extensionId = t.extensionId, this.extensionVersion = t.body.version, this.logger.verbose(`NativeMessageHandler - Received HandshakeResponse from extension: ${this.extensionId}`), this.handshakeEvent.end({
                                extensionInstalled: !0,
                                success: !0
                            }), n.resolve(), this.handshakeResolvers.delete(t.responseId)
                        }
                    } catch (t) {
                        this.logger.error("Error parsing response from WAM Extension"), this.logger.errorPii(`Error parsing response from WAM Extension: ${t}`), this.logger.errorPii(`Unable to parse ${e}`), r ? r.reject(t) : n && n.reject(t)
                    }
                }
                getExtensionId() {
                    return this.extensionId
                }
                getExtensionVersion() {
                    return this.extensionVersion
                }
                static isNativeAvailable(e, t, r, n) {
                    if (t.trace("isNativeAvailable called"), !e.system.allowNativeBroker) return t.trace("isNativeAvailable: allowNativeBroker is not enabled, returning false"), !1;
                    if (!r) return t.trace("isNativeAvailable: WAM extension provider is not initialized, returning false"), !1;
                    if (n) switch (n) {
                        case l.hO.BEARER:
                        case l.hO.POP:
                            t.trace("isNativeAvailable: authenticationScheme is supported, returning true");
                            break;
                        default:
                            return t.trace("isNativeAvailable: authenticationScheme is not supported, returning false"), !1
                    }
                    return !0
                }
            }
            class nA {
                constructor(e, t, r, n, i) {
                    this.authModule = e, this.browserStorage = t, this.authCodeRequest = r, this.logger = n, this.performanceClient = i
                }
                async handleCodeResponse(e, t) {
                    let r;
                    this.performanceClient.addQueueMeasurement(tv.HandleCodeResponse, t.correlationId);
                    try {
                        r = this.authModule.handleFragmentResponse(e, t.state)
                    } catch (e) {
                        if (e instanceof rQ && e.subError === tG.h7) throw (0, tB.Z_)(tG.h7);
                        throw e
                    }
                    return rO(this.handleCodeResponseFromServer.bind(this), tv.HandleCodeResponseFromServer, this.logger, this.performanceClient, t.correlationId)(r, t)
                }
                async handleCodeResponseFromServer(e, t, r = !0) {
                    if (this.performanceClient.addQueueMeasurement(tv.HandleCodeResponseFromServer, t.correlationId), this.logger.trace("InteractionHandler.handleCodeResponseFromServer called"), this.authCodeRequest.code = e.code, e.cloud_instance_host_name && await rO(this.authModule.updateAuthority.bind(this.authModule), tv.UpdateTokenEndpointAuthority, this.logger, this.performanceClient, t.correlationId)(e.cloud_instance_host_name, t.correlationId), r && (e.nonce = t.nonce || void 0), e.state = t.state, e.client_info) this.authCodeRequest.clientInfo = e.client_info;
                    else {
                        let e = this.createCcsCredentials(t);
                        e && (this.authCodeRequest.ccsCredential = e)
                    }
                    return await rO(this.authModule.acquireToken.bind(this.authModule), tv.AuthClientAcquireToken, this.logger, this.performanceClient, t.correlationId)(this.authCodeRequest, e)
                }
                createCcsCredentials(e) {
                    return e.account ? {
                        credential: e.account.homeAccountId,
                        type: rL.HOME_ACCOUNT_ID
                    } : e.loginHint ? {
                        credential: e.loginHint,
                        type: rL.UPN
                    } : null
                }
            }

            function nv(e, t, r) {
                let n = e9(e);
                if (!n) {
                    if (e8(e)) throw r.error(`A ${t} is present in the iframe but it does not contain known properties. It's likely that the ${t} has been replaced by code running on the redirectUri page.`), r.errorPii(`The ${t} detected is: ${e}`), (0, tB.Z_)(tG.S_);
                    throw r.error(`The request has returned to the redirectUri but a ${t} is not present. It's likely that the ${t} has been removed or the page has been redirected by code running on the redirectUri page.`), (0, tB.Z_)(tG.nF)
                }
                return n
            }
            class nw extends nl {
                constructor(e, t, r, n, i, o, a, s, c, l) {
                    super(e, t, r, n, i, o, a, c, l), this.unloadWindow = this.unloadWindow.bind(this), this.nativeStorage = s
                }
                acquireToken(e) {
                    try {
                        let t = {
                            popupName: this.generatePopupName(e.scopes || l.f_, e.authority || this.config.auth.authority),
                            popupWindowAttributes: e.popupWindowAttributes || {},
                            popupWindowParent: e.popupWindowParent ? ? window
                        };
                        if (this.config.system.asyncPopups) return this.logger.verbose("asyncPopups set to true, acquiring token"), this.acquireTokenPopupAsync(e, t);
                        return this.logger.verbose("asyncPopup set to false, opening popup before acquiring token"), t.popup = this.openSizedPopup("about:blank", t), this.acquireTokenPopupAsync(e, t)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }
                logout(e) {
                    try {
                        this.logger.verbose("logoutPopup called");
                        let t = this.initializeLogoutRequest(e),
                            r = {
                                popupName: this.generateLogoutPopupName(t),
                                popupWindowAttributes: e ? .popupWindowAttributes || {},
                                popupWindowParent: e ? .popupWindowParent ? ? window
                            },
                            n = e && e.authority,
                            i = e && e.mainWindowRedirectUri;
                        if (this.config.system.asyncPopups) return this.logger.verbose("asyncPopups set to true"), this.logoutPopupAsync(t, r, n, i);
                        return this.logger.verbose("asyncPopup set to false, opening popup"), r.popup = this.openSizedPopup("about:blank", r), this.logoutPopupAsync(t, r, n, i)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }
                async acquireTokenPopupAsync(e, t) {
                    this.logger.verbose("acquireTokenPopupAsync called");
                    let r = this.initializeServerTelemetryManager(tq.acquireTokenPopup),
                        n = await rO(this.initializeAuthorizationRequest.bind(this), tv.StandardInteractionClientInitializeAuthorizationRequest, this.logger, this.performanceClient, this.correlationId)(e, a.Popup);
                    rg(n.authority);
                    try {
                        let i;
                        let o = await rO(this.initializeAuthorizationCodeRequest.bind(this), tv.StandardInteractionClientInitializeAuthorizationCodeRequest, this.logger, this.performanceClient, this.correlationId)(n),
                            s = await rO(this.createAuthCodeClient.bind(this), tv.StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)({
                                serverTelemetryManager: r,
                                requestAuthority: n.authority,
                                requestAzureCloudOptions: n.azureCloudOptions,
                                requestExtraQueryParameters: n.extraQueryParameters,
                                account: n.account
                            }),
                            c = nI.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, e.authenticationScheme);
                        c && (i = this.performanceClient.startMeasurement(tv.FetchAccountIdWithNativeBroker, e.correlationId));
                        let l = await s.getAuthCodeUrl({ ...n,
                                nativeBroker: c
                            }),
                            h = new nA(s, this.browserStorage, o, this.logger, this.performanceClient),
                            d = this.initiateAuthRequest(l, t);
                        this.eventHandler.emitEvent(r$.POPUP_OPENED, a.Popup, {
                            popupWindow: d
                        }, null);
                        let u = await this.monitorPopupForHash(d, t.popupWindowParent),
                            g = rb(nv, tv.DeserializeResponse, this.logger, this.performanceClient, this.correlationId)(u, this.config.auth.OIDCOptions.serverResponseType, this.logger);
                        if (rV.removeThrottle(this.browserStorage, this.config.auth.clientId, o), g.accountId) {
                            if (this.logger.verbose("Account id found in hash, calling WAM for token"), i && i.end({
                                    success: !0,
                                    isNativeBroker: !0
                                }), !this.nativeMessageHandler) throw (0, tB.Z_)(tG.V7);
                            let e = new nT(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, tq.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, g.accountId, this.nativeStorage, n.correlationId),
                                {
                                    userRequestState: t
                                } = rH.parseRequestState(this.browserCrypto, n.state);
                            return await e.acquireToken({ ...n,
                                state: t,
                                prompt: void 0
                            })
                        }
                        return await h.handleCodeResponse(g, n)
                    } catch (e) {
                        throw t.popup ? .close(), e instanceof g.l4 && (e.setCorrelationId(this.correlationId), r.cacheFailedRequest(e)), e
                    }
                }
                async logoutPopupAsync(e, t, r, n) {
                    this.logger.verbose("logoutPopupAsync called"), this.eventHandler.emitEvent(r$.LOGOUT_START, a.Popup, e);
                    let i = this.initializeServerTelemetryManager(tq.logoutPopup);
                    try {
                        await this.clearCacheOnLogout(e.account);
                        let o = await rO(this.createAuthCodeClient.bind(this), tv.StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)({
                            serverTelemetryManager: i,
                            requestAuthority: r,
                            account: e.account || void 0
                        });
                        try {
                            o.authority.endSessionEndpoint
                        } catch {
                            if (e.account ? .homeAccountId && e.postLogoutRedirectUri && o.authority.protocolMode === d.OIDC) {
                                if (this.browserStorage.removeAccount(e.account ? .homeAccountId, this.correlationId), this.eventHandler.emitEvent(r$.LOGOUT_SUCCESS, a.Popup, e), n) {
                                    let e = {
                                            apiId: tq.logoutPopup,
                                            timeout: this.config.system.redirectNavigationTimeout,
                                            noHistory: !1
                                        },
                                        t = e7.getAbsoluteUrl(n, rc());
                                    await this.navigationClient.navigateInternal(t, e)
                                }
                                t.popup ? .close();
                                return
                            }
                        }
                        let s = o.getLogoutUri(e);
                        this.eventHandler.emitEvent(r$.LOGOUT_SUCCESS, a.Popup, e);
                        let c = this.openPopup(s, t);
                        if (this.eventHandler.emitEvent(r$.POPUP_OPENED, a.Popup, {
                                popupWindow: c
                            }, null), await this.monitorPopupForHash(c, t.popupWindowParent).catch(() => {}), n) {
                            let e = {
                                    apiId: tq.logoutPopup,
                                    timeout: this.config.system.redirectNavigationTimeout,
                                    noHistory: !1
                                },
                                t = e7.getAbsoluteUrl(n, rc());
                            this.logger.verbose("Redirecting main window to url specified in the request"), this.logger.verbosePii(`Redirecting main window to: ${t}`), await this.navigationClient.navigateInternal(t, e)
                        } else this.logger.verbose("No main window navigation requested")
                    } catch (e) {
                        throw t.popup ? .close(), e instanceof g.l4 && (e.setCorrelationId(this.correlationId), i.cacheFailedRequest(e)), this.browserStorage.setInteractionInProgress(!1), this.eventHandler.emitEvent(r$.LOGOUT_FAILURE, a.Popup, null, e), this.eventHandler.emitEvent(r$.LOGOUT_END, a.Popup), e
                    }
                    this.eventHandler.emitEvent(r$.LOGOUT_END, a.Popup)
                }
                initiateAuthRequest(e, t) {
                    if (e) return this.logger.infoPii(`Navigate to: ${e}`), this.openPopup(e, t);
                    throw this.logger.error("Navigate url is empty"), (0, tB.Z_)(tG._c)
                }
                monitorPopupForHash(e, t) {
                    return new Promise((t, r) => {
                        this.logger.verbose("PopupHandler.monitorPopupForHash - polling started");
                        let n = setInterval(() => {
                            if (e.closed) {
                                this.logger.error("PopupHandler.monitorPopupForHash - window closed"), clearInterval(n), r((0, tB.Z_)(tG.h7));
                                return
                            }
                            let i = "";
                            try {
                                i = e.location.href
                            } catch (e) {}
                            if (!i || "about:blank" === i) return;
                            clearInterval(n);
                            let o = "",
                                a = this.config.auth.OIDCOptions.serverResponseType;
                            e && (o = a === l.rg.QUERY ? e.location.search : e.location.hash), this.logger.verbose("PopupHandler.monitorPopupForHash - popup window is on same origin as caller"), t(o)
                        }, this.config.system.pollIntervalMilliseconds)
                    }).finally(() => {
                        this.cleanPopup(e, t)
                    })
                }
                openPopup(e, t) {
                    try {
                        let r;
                        if (t.popup ? (r = t.popup, this.logger.verbosePii(`Navigating popup window to: ${e}`), r.location.assign(e)) : void 0 === t.popup && (this.logger.verbosePii(`Opening popup window to: ${e}`), r = this.openSizedPopup(e, t)), !r) throw (0, tB.Z_)(tG.H);
                        return r.focus && r.focus(), this.currentWindow = r, t.popupWindowParent.addEventListener("beforeunload", this.unloadWindow), r
                    } catch (e) {
                        throw this.logger.error("error opening popup " + e.message), this.browserStorage.setInteractionInProgress(!1), (0, tB.Z_)(tG.E)
                    }
                }
                openSizedPopup(e, {
                    popupName: t,
                    popupWindowAttributes: r,
                    popupWindowParent: n
                }) {
                    let i = n.screenLeft ? n.screenLeft : n.screenX,
                        o = n.screenTop ? n.screenTop : n.screenY,
                        a = n.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                        s = n.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                        c = r.popupSize ? .width,
                        l = r.popupSize ? .height,
                        h = r.popupPosition ? .top,
                        d = r.popupPosition ? .left;
                    return (!c || c < 0 || c > a) && (this.logger.verbose("Default popup window width used. Window width not configured or invalid."), c = t_.POPUP_WIDTH), (!l || l < 0 || l > s) && (this.logger.verbose("Default popup window height used. Window height not configured or invalid."), l = t_.POPUP_HEIGHT), (!h || h < 0 || h > s) && (this.logger.verbose("Default popup window top position used. Window top not configured or invalid."), h = Math.max(0, s / 2 - t_.POPUP_HEIGHT / 2 + o)), (!d || d < 0 || d > a) && (this.logger.verbose("Default popup window left position used. Window left not configured or invalid."), d = Math.max(0, a / 2 - t_.POPUP_WIDTH / 2 + i)), n.open(e, t, `width=${c}, height=${l}, top=${h}, left=${d}, scrollbars=yes`)
                }
                unloadWindow(e) {
                    this.browserStorage.cleanRequestByInteractionType(a.Popup), this.currentWindow && this.currentWindow.close(), e.preventDefault()
                }
                cleanPopup(e, t) {
                    e.close(), t.removeEventListener("beforeunload", this.unloadWindow), this.browserStorage.setInteractionInProgress(!1)
                }
                generatePopupName(e, t) {
                    return `${t_.POPUP_NAME_PREFIX}.${this.config.auth.clientId}.${e.join("-")}.${t}.${this.correlationId}`
                }
                generateLogoutPopupName(e) {
                    let t = e.account && e.account.homeAccountId;
                    return `${t_.POPUP_NAME_PREFIX}.${this.config.auth.clientId}.${t}.${this.correlationId}`
                }
            }
            class nE {
                constructor(e, t, r, n, i) {
                    this.authModule = e, this.browserStorage = t, this.authCodeRequest = r, this.logger = n, this.performanceClient = i
                }
                async initiateAuthRequest(e, t) {
                    if (this.logger.verbose("RedirectHandler.initiateAuthRequest called"), e) {
                        t.redirectStartPage && (this.logger.verbose("RedirectHandler.initiateAuthRequest: redirectStartPage set, caching start page"), this.browserStorage.setTemporaryCache(tO.ORIGIN_URI, t.redirectStartPage, !0)), this.browserStorage.setTemporaryCache(tO.CORRELATION_ID, this.authCodeRequest.correlationId, !0), this.browserStorage.cacheCodeRequest(this.authCodeRequest), this.logger.infoPii(`RedirectHandler.initiateAuthRequest: Navigate to: ${e}`);
                        let r = {
                            apiId: tq.acquireTokenRedirect,
                            timeout: t.redirectTimeout,
                            noHistory: !1
                        };
                        if ("function" == typeof t.onRedirectNavigate) {
                            if (this.logger.verbose("RedirectHandler.initiateAuthRequest: Invoking onRedirectNavigate callback"), !1 !== t.onRedirectNavigate(e)) {
                                this.logger.verbose("RedirectHandler.initiateAuthRequest: onRedirectNavigate did not return false, navigating"), await t.navigationClient.navigateExternal(e, r);
                                return
                            }
                            this.logger.verbose("RedirectHandler.initiateAuthRequest: onRedirectNavigate returned false, stopping navigation");
                            return
                        }
                        this.logger.verbose("RedirectHandler.initiateAuthRequest: Navigating window to navigate url"), await t.navigationClient.navigateExternal(e, r);
                        return
                    }
                    throw this.logger.info("RedirectHandler.initiateAuthRequest: Navigate url is empty"), (0, tB.Z_)(tG._c)
                }
                async handleCodeResponse(e, t) {
                    let r;
                    this.logger.verbose("RedirectHandler.handleCodeResponse called"), this.browserStorage.setInteractionInProgress(!1);
                    let n = this.browserStorage.generateStateKey(t),
                        i = this.browserStorage.getTemporaryCache(n);
                    if (!i) throw ea(E, "Cached State");
                    try {
                        r = this.authModule.handleFragmentResponse(e, i)
                    } catch (e) {
                        if (e instanceof rQ && e.subError === tG.h7) throw (0, tB.Z_)(tG.h7);
                        throw e
                    }
                    let o = this.browserStorage.generateNonceKey(i),
                        a = this.browserStorage.getTemporaryCache(o);
                    if (this.authCodeRequest.code = r.code, r.cloud_instance_host_name && await rO(this.authModule.updateAuthority.bind(this.authModule), tv.UpdateTokenEndpointAuthority, this.logger, this.performanceClient, this.authCodeRequest.correlationId)(r.cloud_instance_host_name, this.authCodeRequest.correlationId), r.nonce = a || void 0, r.state = i, r.client_info) this.authCodeRequest.clientInfo = r.client_info;
                    else {
                        let e = this.checkCcsCredentials();
                        e && (this.authCodeRequest.ccsCredential = e)
                    }
                    let s = await this.authModule.acquireToken(this.authCodeRequest, r);
                    return this.browserStorage.cleanRequestByState(t), s
                }
                checkCcsCredentials() {
                    let e = this.browserStorage.getTemporaryCache(tO.CCS_CREDENTIAL, !0);
                    if (e) try {
                        return JSON.parse(e)
                    } catch (t) {
                        this.authModule.logger.error("Cache credential could not be parsed"), this.authModule.logger.errorPii(`Cache credential could not be parsed: ${e}`)
                    }
                    return null
                }
            }
            class n_ extends nl {
                constructor(e, t, r, n, i, o, a, s, c, l) {
                    super(e, t, r, n, i, o, a, c, l), this.nativeStorage = s
                }
                async acquireToken(e) {
                    let t = await rO(this.initializeAuthorizationRequest.bind(this), tv.StandardInteractionClientInitializeAuthorizationRequest, this.logger, this.performanceClient, this.correlationId)(e, a.Redirect);
                    this.browserStorage.updateCacheEntries(t.state, t.nonce, t.authority, t.loginHint || "", t.account || null);
                    let r = this.initializeServerTelemetryManager(tq.acquireTokenRedirect),
                        n = e => {
                            e.persisted && (this.logger.verbose("Page was restored from back/forward cache. Clearing temporary cache."), this.browserStorage.cleanRequestByState(t.state), this.eventHandler.emitEvent(r$.RESTORE_FROM_BFCACHE, a.Redirect))
                        };
                    try {
                        let i = await rO(this.initializeAuthorizationCodeRequest.bind(this), tv.StandardInteractionClientInitializeAuthorizationCodeRequest, this.logger, this.performanceClient, this.correlationId)(t),
                            o = await rO(this.createAuthCodeClient.bind(this), tv.StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)({
                                serverTelemetryManager: r,
                                requestAuthority: t.authority,
                                requestAzureCloudOptions: t.azureCloudOptions,
                                requestExtraQueryParameters: t.extraQueryParameters,
                                account: t.account
                            }),
                            a = new nE(o, this.browserStorage, i, this.logger, this.performanceClient),
                            s = await o.getAuthCodeUrl({ ...t,
                                nativeBroker: nI.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, e.authenticationScheme)
                            }),
                            c = this.getRedirectStartPage(e.redirectStartPage);
                        return this.logger.verbosePii(`Redirect start page: ${c}`), window.addEventListener("pageshow", n), await a.initiateAuthRequest(s, {
                            navigationClient: this.navigationClient,
                            redirectTimeout: this.config.system.redirectNavigationTimeout,
                            redirectStartPage: c,
                            onRedirectNavigate: e.onRedirectNavigate || this.config.auth.onRedirectNavigate
                        })
                    } catch (e) {
                        throw e instanceof g.l4 && (e.setCorrelationId(this.correlationId), r.cacheFailedRequest(e)), window.removeEventListener("pageshow", n), this.browserStorage.cleanRequestByState(t.state), e
                    }
                }
                async handleRedirectPromise(e = "", t) {
                    let r = this.initializeServerTelemetryManager(tq.handleRedirectPromise);
                    try {
                        if (!this.browserStorage.isInteractionInProgress(!0)) return this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null."), null;
                        let [n, i] = this.getRedirectResponse(e || "");
                        if (!n) return this.logger.info("handleRedirectPromise did not detect a response as a result of a redirect. Cleaning temporary cache."), this.browserStorage.cleanRequestByInteractionType(a.Redirect), "back_forward" !== function() {
                            if ("undefined" == typeof window || void 0 === window.performance || "function" != typeof window.performance.getEntriesByType) return;
                            let e = window.performance.getEntriesByType("navigation"),
                                t = e.length ? e[0] : void 0;
                            return t ? .type
                        }() ? t.event.errorCode = "no_server_response" : this.logger.verbose("Back navigation event detected. Muting no_server_response error"), null;
                        let o = this.browserStorage.getTemporaryCache(tO.ORIGIN_URI, !0) || l.gT.EMPTY_STRING,
                            s = e7.removeHashFromUrl(o),
                            c = e7.removeHashFromUrl(window.location.href);
                        if (s === c && this.config.auth.navigateToLoginRequestUrl) return this.logger.verbose("Current page is loginRequestUrl, handling response"), o.indexOf("#") > -1 && function(e) {
                            let t = e.split("#");
                            t.shift(), window.location.hash = t.length > 0 ? t.join("#") : ""
                        }(o), await this.handleResponse(n, r);
                        if (!this.config.auth.navigateToLoginRequestUrl) return this.logger.verbose("NavigateToLoginRequestUrl set to false, handling response"), await this.handleResponse(n, r);
                        if (!rs() || this.config.system.allowRedirectInIframe) {
                            this.browserStorage.setTemporaryCache(tO.URL_HASH, i, !0);
                            let e = {
                                    apiId: tq.handleRedirectPromise,
                                    timeout: this.config.system.redirectNavigationTimeout,
                                    noHistory: !0
                                },
                                t = !0;
                            if (o && "null" !== o) this.logger.verbose(`Navigating to loginRequestUrl: ${o}`), t = await this.navigationClient.navigateInternal(o, e);
                            else {
                                let r = function() {
                                    let e = new e7(window.location.href).getUrlComponents();
                                    return `${e.Protocol}//${e.HostNameAndPort}/`
                                }();
                                this.browserStorage.setTemporaryCache(tO.ORIGIN_URI, r, !0), this.logger.warning("Unable to get valid login request url from cache, redirecting to home page"), t = await this.navigationClient.navigateInternal(r, e)
                            }
                            if (!t) return await this.handleResponse(n, r)
                        }
                        return null
                    } catch (e) {
                        throw e instanceof g.l4 && (e.setCorrelationId(this.correlationId), r.cacheFailedRequest(e)), this.browserStorage.cleanRequestByInteractionType(a.Redirect), e
                    }
                }
                getRedirectResponse(e) {
                    this.logger.verbose("getRedirectResponseHash called");
                    let t = e;
                    t || (t = this.config.auth.OIDCOptions.serverResponseType === l.rg.QUERY ? window.location.search : window.location.hash);
                    let r = e9(t);
                    if (r) {
                        var n;
                        try {
                            ! function(e, t, r) {
                                if (!e.state) throw (0, tB.Z_)(tG.Xk);
                                let n = rx(t, e.state);
                                if (!n) throw (0, tB.Z_)(tG.$P);
                                if (n.interactionType !== r) throw (0, tB.Z_)(tG.yK)
                            }(r, this.browserCrypto, a.Redirect)
                        } catch (e) {
                            return e instanceof g.l4 && this.logger.error(`Interaction type validation failed due to ${e.errorCode}: ${e.errorMessage}`), [null, ""]
                        }
                        return (n = window).location.hash = "", "function" == typeof n.history.replaceState && n.history.replaceState(null, "", `${n.location.origin}${n.location.pathname}${n.location.search}`), this.logger.verbose("Hash contains known properties, returning response hash"), [r, t]
                    }
                    let i = this.browserStorage.getTemporaryCache(tO.URL_HASH, !0);
                    return (this.browserStorage.removeItem(this.browserStorage.generateCacheKey(tO.URL_HASH)), i && (r = e9(i))) ? (this.logger.verbose("Hash does not contain known properties, returning cached hash"), [r, i]) : [null, ""]
                }
                async handleResponse(e, t) {
                    let r = e.state;
                    if (!r) throw (0, tB.Z_)(tG.Xk);
                    let n = this.browserStorage.getCachedRequest(r);
                    if (this.logger.verbose("handleResponse called, retrieved cached request"), e.accountId) {
                        if (this.logger.verbose("Account id found in hash, calling WAM for token"), !this.nativeMessageHandler) throw (0, tB.Z_)(tG.V7);
                        let t = new nT(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, tq.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, e.accountId, this.nativeStorage, n.correlationId),
                            {
                                userRequestState: i
                            } = rH.parseRequestState(this.browserCrypto, r);
                        return t.acquireToken({ ...n,
                            state: i,
                            prompt: void 0
                        }).finally(() => {
                            this.browserStorage.cleanRequestByState(r)
                        })
                    }
                    let i = this.browserStorage.getCachedAuthority(r);
                    if (!i) throw (0, tB.Z_)(tG.dT);
                    let o = await rO(this.createAuthCodeClient.bind(this), tv.StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)({
                        serverTelemetryManager: t,
                        requestAuthority: i
                    });
                    return rV.removeThrottle(this.browserStorage, this.config.auth.clientId, n), new nE(o, this.browserStorage, n, this.logger, this.performanceClient).handleCodeResponse(e, r)
                }
                async logout(e) {
                    this.logger.verbose("logoutRedirect called");
                    let t = this.initializeLogoutRequest(e),
                        r = this.initializeServerTelemetryManager(tq.logout);
                    try {
                        this.eventHandler.emitEvent(r$.LOGOUT_START, a.Redirect, e), await this.clearCacheOnLogout(t.account);
                        let n = {
                                apiId: tq.logout,
                                timeout: this.config.system.redirectNavigationTimeout,
                                noHistory: !1
                            },
                            i = await rO(this.createAuthCodeClient.bind(this), tv.StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, this.correlationId)({
                                serverTelemetryManager: r,
                                requestAuthority: e && e.authority,
                                requestExtraQueryParameters: e ? .extraQueryParameters,
                                account: e && e.account || void 0
                            });
                        if (i.authority.protocolMode === d.OIDC) try {
                            i.authority.endSessionEndpoint
                        } catch {
                            if (t.account ? .homeAccountId) {
                                this.browserStorage.removeAccount(t.account ? .homeAccountId, this.correlationId), this.eventHandler.emitEvent(r$.LOGOUT_SUCCESS, a.Redirect, t);
                                return
                            }
                        }
                        let o = i.getLogoutUri(t);
                        if (this.eventHandler.emitEvent(r$.LOGOUT_SUCCESS, a.Redirect, t), e && "function" == typeof e.onRedirectNavigate) {
                            let t = e.onRedirectNavigate(o);
                            if (!1 !== t) {
                                this.logger.verbose("Logout onRedirectNavigate did not return false, navigating"), this.browserStorage.getInteractionInProgress() || this.browserStorage.setInteractionInProgress(!0), await this.navigationClient.navigateExternal(o, n);
                                return
                            }
                            this.browserStorage.setInteractionInProgress(!1), this.logger.verbose("Logout onRedirectNavigate returned false, stopping navigation")
                        } else {
                            this.browserStorage.getInteractionInProgress() || this.browserStorage.setInteractionInProgress(!0), await this.navigationClient.navigateExternal(o, n);
                            return
                        }
                    } catch (e) {
                        throw e instanceof g.l4 && (e.setCorrelationId(this.correlationId), r.cacheFailedRequest(e)), this.eventHandler.emitEvent(r$.LOGOUT_FAILURE, a.Redirect, null, e), this.eventHandler.emitEvent(r$.LOGOUT_END, a.Redirect), e
                    }
                    this.eventHandler.emitEvent(r$.LOGOUT_END, a.Redirect)
                }
                getRedirectStartPage(e) {
                    let t = e || window.location.href;
                    return e7.getAbsoluteUrl(t, rc())
                }
            }
            async function nS(e, t, r, n, i) {
                if (t.addQueueMeasurement(tv.SilentHandlerInitiateAuthRequest, n), !e) throw r.info("Navigate url is empty"), (0, tB.Z_)(tG._c);
                return i ? rO(nR, tv.SilentHandlerLoadFrame, r, t, n)(e, i, t, n) : rb(nb, tv.SilentHandlerLoadFrameSync, r, t, n)(e)
            }
            async function nk(e, t, r, n, i, o, a) {
                return n.addQueueMeasurement(tv.SilentHandlerMonitorIframeForHash, o), new Promise((n, o) => {
                    t < 1e4 && i.warning(`system.loadFrameTimeout or system.iframeHashTimeout set to lower (${t}ms) than the default (10000ms). This may result in timeouts.`);
                    let s = window.setTimeout(() => {
                            window.clearInterval(c), o((0, tB.Z_)(tG.JA))
                        }, t),
                        c = window.setInterval(() => {
                            let t = "",
                                r = e.contentWindow;
                            try {
                                t = r ? r.location.href : ""
                            } catch (e) {}
                            if (!t || "about:blank" === t) return;
                            let i = "";
                            r && (i = a === l.rg.QUERY ? r.location.search : r.location.hash), window.clearTimeout(s), window.clearInterval(c), n(i)
                        }, r)
                }).finally(() => {
                    rb(nN, tv.RemoveHiddenIframe, i, n, o)(e)
                })
            }

            function nR(e, t, r, n) {
                return r.addQueueMeasurement(tv.SilentHandlerLoadFrame, n), new Promise((r, n) => {
                    let i = nO();
                    window.setTimeout(() => {
                        if (!i) {
                            n("Unable to load iframe");
                            return
                        }
                        i.src = e, r(i)
                    }, t)
                })
            }

            function nb(e) {
                let t = nO();
                return t.src = e, t
            }

            function nO() {
                let e = document.createElement("iframe");
                return e.className = "msalSilentIframe", e.style.visibility = "hidden", e.style.position = "absolute", e.style.width = e.style.height = "0", e.style.border = "0", e.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms"), document.body.appendChild(e), e
            }

            function nN(e) {
                document.body === e.parentNode && document.body.removeChild(e)
            }
            class nP extends nl {
                constructor(e, t, r, n, i, o, a, s, c, l, h) {
                    super(e, t, r, n, i, o, s, l, h), this.apiId = a, this.nativeStorage = c
                }
                async acquireToken(e) {
                    let t;
                    this.performanceClient.addQueueMeasurement(tv.SilentIframeClientAcquireToken, e.correlationId), e.loginHint || e.sid || e.account && e.account.username || this.logger.warning("No user hint provided. The authorization server may need more information to complete this request.");
                    let r = { ...e
                    };
                    r.prompt ? r.prompt !== l.NJ.NONE && r.prompt !== l.NJ.NO_SESSION && (this.logger.warning(`SilentIframeClient. Replacing invalid prompt ${r.prompt} with ${l.NJ.NONE}`), r.prompt = l.NJ.NONE) : r.prompt = l.NJ.NONE;
                    let n = await rO(this.initializeAuthorizationRequest.bind(this), tv.StandardInteractionClientInitializeAuthorizationRequest, this.logger, this.performanceClient, e.correlationId)(r, a.Silent);
                    rg(n.authority);
                    let i = this.initializeServerTelemetryManager(this.apiId);
                    try {
                        return t = await rO(this.createAuthCodeClient.bind(this), tv.StandardInteractionClientCreateAuthCodeClient, this.logger, this.performanceClient, e.correlationId)({
                            serverTelemetryManager: i,
                            requestAuthority: n.authority,
                            requestAzureCloudOptions: n.azureCloudOptions,
                            requestExtraQueryParameters: n.extraQueryParameters,
                            account: n.account
                        }), await rO(this.silentTokenHelper.bind(this), tv.SilentIframeClientTokenHelper, this.logger, this.performanceClient, e.correlationId)(t, n)
                    } catch (o) {
                        if (o instanceof g.l4 && (o.setCorrelationId(this.correlationId), i.cacheFailedRequest(o)), !t || !(o instanceof g.l4) || o.errorCode !== t_.INVALID_GRANT_ERROR) throw o;
                        this.performanceClient.addFields({
                            retryError: o.errorCode
                        }, this.correlationId);
                        let n = await rO(this.initializeAuthorizationRequest.bind(this), tv.StandardInteractionClientInitializeAuthorizationRequest, this.logger, this.performanceClient, e.correlationId)(r, a.Silent);
                        return await rO(this.silentTokenHelper.bind(this), tv.SilentIframeClientTokenHelper, this.logger, this.performanceClient, this.correlationId)(t, n)
                    }
                }
                logout() {
                    return Promise.reject((0, tB.Z_)(tG.I9))
                }
                async silentTokenHelper(e, t) {
                    let r = t.correlationId;
                    this.performanceClient.addQueueMeasurement(tv.SilentIframeClientTokenHelper, r);
                    let n = await rO(this.initializeAuthorizationCodeRequest.bind(this), tv.StandardInteractionClientInitializeAuthorizationCodeRequest, this.logger, this.performanceClient, r)(t),
                        i = await rO(e.getAuthCodeUrl.bind(e), tv.GetAuthCodeUrl, this.logger, this.performanceClient, r)({ ...t,
                            nativeBroker: nI.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, t.authenticationScheme)
                        }),
                        o = new nA(e, this.browserStorage, n, this.logger, this.performanceClient),
                        a = await rO(nS, tv.SilentHandlerInitiateAuthRequest, this.logger, this.performanceClient, r)(i, this.performanceClient, this.logger, r, this.config.system.navigateFrameWait),
                        s = this.config.auth.OIDCOptions.serverResponseType,
                        c = await rO(nk, tv.SilentHandlerMonitorIframeForHash, this.logger, this.performanceClient, r)(a, this.config.system.iframeHashTimeout, this.config.system.pollIntervalMilliseconds, this.performanceClient, this.logger, r, s),
                        h = rb(nv, tv.DeserializeResponse, this.logger, this.performanceClient, this.correlationId)(c, s, this.logger);
                    if (h.accountId) {
                        if (this.logger.verbose("Account id found in hash, calling WAM for token"), !this.nativeMessageHandler) throw (0, tB.Z_)(tG.V7);
                        let e = new nT(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.apiId, this.performanceClient, this.nativeMessageHandler, h.accountId, this.browserStorage, r),
                            {
                                userRequestState: n
                            } = rH.parseRequestState(this.browserCrypto, t.state);
                        return rO(e.acquireToken.bind(e), tv.NativeInteractionClientAcquireToken, this.logger, this.performanceClient, r)({ ...t,
                            state: n,
                            prompt: t.prompt || l.NJ.NONE
                        })
                    }
                    return rO(o.handleCodeResponse.bind(o), tv.HandleCodeResponse, this.logger, this.performanceClient, r)(h, t)
                }
            }
            class nM extends nl {
                async acquireToken(e) {
                    this.performanceClient.addQueueMeasurement(tv.SilentRefreshClientAcquireToken, e.correlationId);
                    let t = await rO(ns, tv.InitializeBaseRequest, this.logger, this.performanceClient, e.correlationId)(e, this.config, this.performanceClient, this.logger),
                        r = { ...e,
                            ...t
                        };
                    e.redirectUri && (r.redirectUri = this.getRedirectUri(e.redirectUri));
                    let n = this.initializeServerTelemetryManager(tq.acquireTokenSilent_silentFlow),
                        i = await this.createRefreshTokenClient({
                            serverTelemetryManager: n,
                            authorityUrl: r.authority,
                            azureCloudOptions: r.azureCloudOptions,
                            account: r.account
                        });
                    return rO(i.acquireTokenByRefreshToken.bind(i), tv.RefreshTokenClientAcquireTokenByRefreshToken, this.logger, this.performanceClient, e.correlationId)(r).catch(e => {
                        throw e.setCorrelationId(this.correlationId), n.cacheFailedRequest(e), e
                    })
                }
                logout() {
                    return Promise.reject((0, tB.Z_)(tG.I9))
                }
                async createRefreshTokenClient(e) {
                    return new nC(await rO(this.getClientConfiguration.bind(this), tv.StandardInteractionClientGetClientConfiguration, this.logger, this.performanceClient, this.correlationId)({
                        serverTelemetryManager: e.serverTelemetryManager,
                        requestAuthority: e.authorityUrl,
                        requestAzureCloudOptions: e.azureCloudOptions,
                        requestExtraQueryParameters: e.extraQueryParameters,
                        account: e.account
                    }), this.performanceClient)
                }
            }
            class nq {
                constructor(e, t, r, n) {
                    this.isBrowserEnvironment = "undefined" != typeof window, this.config = e, this.storage = t, this.logger = r, this.cryptoObj = n
                }
                loadExternalTokens(e, t, r) {
                    if (!this.isBrowserEnvironment) throw (0, tB.Z_)(tG.Dx);
                    let n = e.correlationId || t6(),
                        i = t.id_token ? eh(t.id_token, rw) : void 0,
                        o = {
                            protocolMode: this.config.auth.protocolMode,
                            knownAuthorities: this.config.auth.knownAuthorities,
                            cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                            authorityMetadata: this.config.auth.authorityMetadata,
                            skipAuthorityMetadataCache: this.config.auth.skipAuthorityMetadataCache
                        },
                        a = e.authority ? new rP(rP.generateAuthority(e.authority, e.azureCloudOptions), this.config.system.networkClient, this.storage, o, this.logger, e.correlationId || t6()) : void 0,
                        s = this.loadAccount(e, r.clientInfo || t.client_info || "", n, i, a),
                        c = this.loadIdToken(t, s.homeAccountId, s.environment, s.realm, n),
                        l = this.loadAccessToken(e, t, s.homeAccountId, s.environment, s.realm, r, n),
                        h = this.loadRefreshToken(t, s.homeAccountId, s.environment, n);
                    return this.generateAuthenticationResult(e, {
                        account: s,
                        idToken: c,
                        accessToken: l,
                        refreshToken: h
                    }, i, a)
                }
                loadAccount(e, t, r, n, i) {
                    if (this.logger.verbose("TokenCache - loading account"), e.account) {
                        let t = e5.createFromAccountInfo(e.account);
                        return this.storage.setAccount(t, r), t
                    }
                    if (!i || !t && !n) throw this.logger.error("TokenCache - if an account is not provided on the request, authority and either clientInfo or idToken must be provided instead."), (0, tB.Z_)(tG.Jd);
                    let o = e5.generateHomeAccountId(t, i.authorityType, this.logger, this.cryptoObj, n),
                        a = n ? .tid,
                        s = r7(this.storage, i, o, rw, r, n, t, i.hostnameAndPort, a, void 0, void 0, this.logger);
                    return this.storage.setAccount(s, r), s
                }
                loadIdToken(e, t, r, n, i) {
                    if (!e.id_token) return this.logger.verbose("TokenCache - no id token found in response"), null;
                    this.logger.verbose("TokenCache - loading id token");
                    let o = em(t, r, e.id_token, this.config.auth.clientId, n);
                    return this.storage.setIdTokenCredential(o, i), o
                }
                loadAccessToken(e, t, r, n, i, o, a) {
                    if (!t.access_token) return this.logger.verbose("TokenCache - no access token found in response"), null;
                    if (!t.expires_in) return this.logger.error("TokenCache - no expiration set on the access token. Cannot add it to the cache."), null;
                    if (!t.scope && (!e.scopes || !e.scopes.length)) return this.logger.error("TokenCache - scopes not specified in the request or response. Cannot add token to the cache."), null;
                    this.logger.verbose("TokenCache - loading access token");
                    let s = t.scope ? eZ.fromString(t.scope) : new eZ(e.scopes),
                        c = o.expiresOn || t.expires_in + new Date().getTime() / 1e3,
                        l = o.extendedExpiresOn || (t.ext_expires_in || t.expires_in) + new Date().getTime() / 1e3,
                        h = eC(r, n, t.access_token, this.config.auth.clientId, i, s.printScopes(), c, l, rw);
                    return this.storage.setAccessTokenCredential(h, a), h
                }
                loadRefreshToken(e, t, r, n) {
                    if (!e.refresh_token) return this.logger.verbose("TokenCache - no refresh token found in response"), null;
                    this.logger.verbose("TokenCache - loading refresh token");
                    let i = ef(t, r, e.refresh_token, this.config.auth.clientId, e.foci, void 0, e.refresh_token_expires_in);
                    return this.storage.setRefreshTokenCredential(i, n), i
                }
                generateAuthenticationResult(e, t, r, n) {
                    let i, o = "",
                        a = [],
                        s = null;
                    t ? .accessToken && (o = t.accessToken.secret, a = eZ.fromString(t.accessToken.target).asArray(), s = new Date(1e3 * Number(t.accessToken.expiresOn)), i = new Date(1e3 * Number(t.accessToken.extendedExpiresOn)));
                    let c = t.account;
                    return {
                        authority: n ? n.canonicalAuthority : "",
                        uniqueId: t.account.localAccountId,
                        tenantId: t.account.realm,
                        scopes: a,
                        account: c.getAccountInfo(),
                        idToken: t.idToken ? .secret || "",
                        idTokenClaims: r || {},
                        accessToken: o,
                        fromCache: !0,
                        expiresOn: s,
                        correlationId: e.correlationId || "",
                        requestId: "",
                        extExpiresOn: i,
                        familyId: t.refreshToken ? .familyId || "",
                        tokenType: t ? .accessToken ? .tokenType || "",
                        state: e.state || "",
                        cloudGraphHostName: c.cloudGraphHostName || "",
                        msGraphHost: c.msGraphHost || "",
                        fromNativeBroker: !1
                    }
                }
            }
            class nU extends nt {
                constructor(e) {
                    super(e), this.includeRedirectUri = !1
                }
            }
            class nH extends nl {
                constructor(e, t, r, n, i, o, a, s, c, l) {
                    super(e, t, r, n, i, o, s, c, l), this.apiId = a
                }
                async acquireToken(e) {
                    if (!e.code) throw (0, tB.Z_)(tG.Aj);
                    let t = await rO(this.initializeAuthorizationRequest.bind(this), tv.StandardInteractionClientInitializeAuthorizationRequest, this.logger, this.performanceClient, e.correlationId)(e, a.Silent),
                        r = this.initializeServerTelemetryManager(this.apiId);
                    try {
                        let n = { ...t,
                                code: e.code
                            },
                            i = await rO(this.getClientConfiguration.bind(this), tv.StandardInteractionClientGetClientConfiguration, this.logger, this.performanceClient, e.correlationId)({
                                serverTelemetryManager: r,
                                requestAuthority: t.authority,
                                requestAzureCloudOptions: t.azureCloudOptions,
                                requestExtraQueryParameters: t.extraQueryParameters,
                                account: t.account
                            }),
                            o = new nU(i);
                        this.logger.verbose("Auth code client created");
                        let a = new nA(o, this.browserStorage, n, this.logger, this.performanceClient);
                        return await rO(a.handleCodeResponseFromServer.bind(a), tv.HandleCodeResponseFromServer, this.logger, this.performanceClient, e.correlationId)({
                            code: e.code,
                            msgraph_host: e.msGraphHost,
                            cloud_graph_host_name: e.cloudGraphHostName,
                            cloud_instance_host_name: e.cloudInstanceHostName
                        }, t, !1)
                    } catch (e) {
                        throw e instanceof g.l4 && (e.setCorrelationId(this.correlationId), r.cacheFailedRequest(e)), e
                    }
                }
                logout() {
                    return Promise.reject((0, tB.Z_)(tG.I9))
                }
            }

            function nL(e) {
                let t = e ? .idTokenClaims;
                return t ? .tfp || t ? .acr ? "B2C" : t ? .tid ? t ? .tid === "9188040d-6c67-4c5b-b112-36a304b66dad" ? "MSA" : "AAD" : void 0
            }

            function nD(e, t) {
                try {
                    rd(e)
                } catch (e) {
                    throw t.end({
                        success: !1
                    }, e), e
                }
            }
            class nK {
                constructor(e) {
                    this.operatingContext = e, this.isBrowserEnvironment = this.operatingContext.isBrowserEnvironment(), this.config = e.getConfig(), this.initialized = !1, this.logger = this.operatingContext.getLogger(), this.networkClient = this.config.system.networkClient, this.navigationClient = this.config.system.navigationClient, this.redirectResponse = new Map, this.hybridAuthCodeResponses = new Map, this.performanceClient = this.config.telemetry.client, this.browserCrypto = this.isBrowserEnvironment ? new rk(this.logger, this.performanceClient) : es, this.eventHandler = new rz(this.logger), this.browserStorage = this.isBrowserEnvironment ? new rB(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger, function(e) {
                        let t;
                        let r = e.cloudDiscoveryMetadata;
                        if (r) try {
                            t = JSON.parse(r)
                        } catch (e) {
                            throw ej(eD)
                        }
                        return {
                            canonicalAuthority: e.authority ? rM(e.authority) : void 0,
                            knownAuthorities: e.knownAuthorities,
                            cloudDiscoveryMetadata: t
                        }
                    }(this.config.auth), this.performanceClient) : rG(this.config.auth.clientId, this.logger);
                    let t = {
                        cacheLocation: tR.MemoryStorage,
                        temporaryCacheLocation: tR.MemoryStorage,
                        storeAuthStateInCookie: !1,
                        secureCookies: !1,
                        cacheMigrationEnabled: !1,
                        claimsBasedCachingEnabled: !1
                    };
                    this.nativeInternalStorage = new rB(this.config.auth.clientId, t, this.browserCrypto, this.logger, void 0, this.performanceClient), this.tokenCache = new nq(this.config, this.browserStorage, this.logger, this.browserCrypto), this.activeSilentTokenRequests = new Map, this.trackPageVisibility = this.trackPageVisibility.bind(this), this.trackPageVisibilityWithMeasurement = this.trackPageVisibilityWithMeasurement.bind(this), this.listeningToStorageEvents = !1, this.handleAccountCacheChange = this.handleAccountCacheChange.bind(this)
                }
                static async createController(e, t) {
                    let r = new nK(e);
                    return await r.initialize(t), r
                }
                trackPageVisibility(e) {
                    e && (this.logger.info("Perf: Visibility change detected"), this.performanceClient.incrementFields({
                        visibilityChangeCount: 1
                    }, e))
                }
                async initialize(e) {
                    if (this.logger.trace("initialize called"), this.initialized) {
                        this.logger.info("initialize has already been called, exiting early.");
                        return
                    }
                    if (!this.isBrowserEnvironment) {
                        this.logger.info("in non-browser environment, exiting early."), this.initialized = !0, this.eventHandler.emitEvent(r$.INITIALIZE_END);
                        return
                    }
                    let t = e ? .correlationId || this.getRequestCorrelationId(),
                        r = this.config.system.allowNativeBroker,
                        n = this.performanceClient.startMeasurement(tv.InitializeClientApplication, t);
                    if (this.eventHandler.emitEvent(r$.INITIALIZE_START), r) try {
                        this.nativeExtensionProvider = await nI.createProvider(this.logger, this.config.system.nativeBrokerHandshakeTimeout, this.performanceClient)
                    } catch (e) {
                        this.logger.verbose(e)
                    }
                    this.config.cache.claimsBasedCachingEnabled || (this.logger.verbose("Claims-based caching is disabled. Clearing the previous cache with claims"), await rO(this.browserStorage.clearTokensAndKeysWithClaims.bind(this.browserStorage), tv.ClearTokensAndKeysWithClaims, this.logger, this.performanceClient, t)(this.performanceClient, t)), this.initialized = !0, this.eventHandler.emitEvent(r$.INITIALIZE_END), n.end({
                        allowNativeBroker: r,
                        success: !0
                    })
                }
                async handleRedirectPromise(e) {
                    if (this.logger.verbose("handleRedirectPromise called"), rh(this.initialized), this.isBrowserEnvironment) {
                        let t = e || "",
                            r = this.redirectResponse.get(t);
                        return void 0 === r ? (r = this.handleRedirectPromiseInternal(e), this.redirectResponse.set(t, r), this.logger.verbose("handleRedirectPromise has been called for the first time, storing the promise")) : this.logger.verbose("handleRedirectPromise has been called previously, returning the result from the first call"), r
                    }
                    return this.logger.verbose("handleRedirectPromise returns null, not browser environment"), null
                }
                async handleRedirectPromiseInternal(e) {
                    let t;
                    let r = this.getAllAccounts(),
                        n = this.browserStorage.getCachedNativeRequest(),
                        i = n && nI.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider) && this.nativeExtensionProvider && !e,
                        o = i ? n ? .correlationId : this.browserStorage.getTemporaryCache(tO.CORRELATION_ID, !0) || "",
                        s = this.performanceClient.startMeasurement(tv.AcquireTokenRedirect, o);
                    if (this.eventHandler.emitEvent(r$.HANDLE_REDIRECT_START, a.Redirect), i && this.nativeExtensionProvider) {
                        this.logger.trace("handleRedirectPromise - acquiring token from native platform");
                        let e = new nT(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, tq.handleRedirectPromise, this.performanceClient, this.nativeExtensionProvider, n.accountId, this.nativeInternalStorage, n.correlationId);
                        t = rO(e.handleRedirectPromise.bind(e), tv.HandleNativeRedirectPromiseMeasurement, this.logger, this.performanceClient, s.event.correlationId)(this.performanceClient, s.event.correlationId)
                    } else {
                        this.logger.trace("handleRedirectPromise - acquiring token from web flow");
                        let r = this.createRedirectClient(o);
                        t = rO(r.handleRedirectPromise.bind(r), tv.HandleRedirectPromiseMeasurement, this.logger, this.performanceClient, s.event.correlationId)(e, s)
                    }
                    return t.then(e => (e ? (r.length < this.getAllAccounts().length ? (this.eventHandler.emitEvent(r$.LOGIN_SUCCESS, a.Redirect, e), this.logger.verbose("handleRedirectResponse returned result, login success")) : (this.eventHandler.emitEvent(r$.ACQUIRE_TOKEN_SUCCESS, a.Redirect, e), this.logger.verbose("handleRedirectResponse returned result, acquire token success")), s.end({
                        success: !0,
                        accountType: nL(e.account)
                    })) : s.event.errorCode ? s.end({
                        success: !1
                    }) : s.discard(), this.eventHandler.emitEvent(r$.HANDLE_REDIRECT_END, a.Redirect), e)).catch(e => {
                        throw r.length > 0 ? this.eventHandler.emitEvent(r$.ACQUIRE_TOKEN_FAILURE, a.Redirect, null, e) : this.eventHandler.emitEvent(r$.LOGIN_FAILURE, a.Redirect, null, e), this.eventHandler.emitEvent(r$.HANDLE_REDIRECT_END, a.Redirect), s.end({
                            success: !1
                        }, e), e
                    })
                }
                async acquireTokenRedirect(e) {
                    let t = this.getRequestCorrelationId(e);
                    this.logger.verbose("acquireTokenRedirect called", t);
                    let r = this.performanceClient.startMeasurement(tv.AcquireTokenPreRedirect, t);
                    r.add({
                        accountType: nL(e.account),
                        scenarioId: e.scenarioId
                    });
                    let n = e.onRedirectNavigate;
                    if (n) e.onRedirectNavigate = e => {
                        let t = "function" == typeof n ? n(e) : void 0;
                        return !1 !== t ? r.end({
                            success: !0
                        }) : r.discard(), t
                    };
                    else {
                        let e = this.config.auth.onRedirectNavigate;
                        this.config.auth.onRedirectNavigate = t => {
                            let n = "function" == typeof e ? e(t) : void 0;
                            return !1 !== n ? r.end({
                                success: !0
                            }) : r.discard(), n
                        }
                    }
                    let i = this.getAllAccounts().length > 0;
                    try {
                        let n;
                        return ru(this.initialized, this.config), this.browserStorage.setInteractionInProgress(!0), i ? this.eventHandler.emitEvent(r$.ACQUIRE_TOKEN_START, a.Redirect, e) : this.eventHandler.emitEvent(r$.LOGIN_START, a.Redirect, e), n = this.nativeExtensionProvider && this.canUseNative(e) ? new nT(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, tq.acquireTokenRedirect, this.performanceClient, this.nativeExtensionProvider, this.getNativeAccountId(e), this.nativeInternalStorage, t).acquireTokenRedirect(e, r).catch(r => {
                            if (r instanceof ng && np(r)) return this.nativeExtensionProvider = void 0, this.createRedirectClient(t).acquireToken(e);
                            if (r instanceof rq.Yo) return this.logger.verbose("acquireTokenRedirect - Resolving interaction required error thrown by native broker by falling back to web flow"), this.createRedirectClient(t).acquireToken(e);
                            throw this.browserStorage.setInteractionInProgress(!1), r
                        }) : this.createRedirectClient(t).acquireToken(e), await n
                    } catch (e) {
                        throw r.end({
                            success: !1
                        }, e), i ? this.eventHandler.emitEvent(r$.ACQUIRE_TOKEN_FAILURE, a.Redirect, null, e) : this.eventHandler.emitEvent(r$.LOGIN_FAILURE, a.Redirect, null, e), e
                    }
                }
                acquireTokenPopup(e) {
                    let t = this.getRequestCorrelationId(e),
                        r = this.performanceClient.startMeasurement(tv.AcquireTokenPopup, t);
                    r.add({
                        scenarioId: e.scenarioId,
                        accountType: nL(e.account)
                    });
                    try {
                        this.logger.verbose("acquireTokenPopup called", t), nD(this.initialized, r), this.browserStorage.setInteractionInProgress(!0)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                    let n = this.getAllAccounts();
                    return n.length > 0 ? this.eventHandler.emitEvent(r$.ACQUIRE_TOKEN_START, a.Popup, e) : this.eventHandler.emitEvent(r$.LOGIN_START, a.Popup, e), (this.canUseNative(e) ? this.acquireTokenNative({ ...e,
                        correlationId: t
                    }, tq.acquireTokenPopup).then(e => (this.browserStorage.setInteractionInProgress(!1), r.end({
                        success: !0,
                        isNativeBroker: !0,
                        accountType: nL(e.account)
                    }), e)).catch(r => {
                        if (r instanceof ng && np(r)) return this.nativeExtensionProvider = void 0, this.createPopupClient(t).acquireToken(e);
                        if (r instanceof rq.Yo) return this.logger.verbose("acquireTokenPopup - Resolving interaction required error thrown by native broker by falling back to web flow"), this.createPopupClient(t).acquireToken(e);
                        throw this.browserStorage.setInteractionInProgress(!1), r
                    }) : this.createPopupClient(t).acquireToken(e)).then(e => (n.length < this.getAllAccounts().length ? this.eventHandler.emitEvent(r$.LOGIN_SUCCESS, a.Popup, e) : this.eventHandler.emitEvent(r$.ACQUIRE_TOKEN_SUCCESS, a.Popup, e), r.end({
                        success: !0,
                        accessTokenSize: e.accessToken.length,
                        idTokenSize: e.idToken.length,
                        accountType: nL(e.account)
                    }), e)).catch(e => (n.length > 0 ? this.eventHandler.emitEvent(r$.ACQUIRE_TOKEN_FAILURE, a.Popup, null, e) : this.eventHandler.emitEvent(r$.LOGIN_FAILURE, a.Popup, null, e), r.end({
                        success: !1
                    }, e), Promise.reject(e)))
                }
                trackPageVisibilityWithMeasurement() {
                    let e = this.ssoSilentMeasurement || this.acquireTokenByCodeAsyncMeasurement;
                    e && (this.logger.info("Perf: Visibility change detected in ", e.event.name), e.increment({
                        visibilityChangeCount: 1
                    }))
                }
                async ssoSilent(e) {
                    let t = this.getRequestCorrelationId(e),
                        r = { ...e,
                            prompt: e.prompt,
                            correlationId: t
                        };
                    return this.ssoSilentMeasurement = this.performanceClient.startMeasurement(tv.SsoSilent, t), this.ssoSilentMeasurement ? .add({
                        scenarioId: e.scenarioId,
                        accountType: nL(e.account)
                    }), nD(this.initialized, this.ssoSilentMeasurement), this.ssoSilentMeasurement ? .increment({
                        visibilityChangeCount: 0
                    }), document.addEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement), this.logger.verbose("ssoSilent called", t), this.eventHandler.emitEvent(r$.SSO_SILENT_START, a.Silent, r), (this.canUseNative(r) ? this.acquireTokenNative(r, tq.ssoSilent).catch(e => {
                        if (e instanceof ng && np(e)) return this.nativeExtensionProvider = void 0, this.createSilentIframeClient(r.correlationId).acquireToken(r);
                        throw e
                    }) : this.createSilentIframeClient(r.correlationId).acquireToken(r)).then(e => (this.eventHandler.emitEvent(r$.SSO_SILENT_SUCCESS, a.Silent, e), this.ssoSilentMeasurement ? .end({
                        success: !0,
                        isNativeBroker: e.fromNativeBroker,
                        accessTokenSize: e.accessToken.length,
                        idTokenSize: e.idToken.length,
                        accountType: nL(e.account)
                    }), e)).catch(e => {
                        throw this.eventHandler.emitEvent(r$.SSO_SILENT_FAILURE, a.Silent, null, e), this.ssoSilentMeasurement ? .end({
                            success: !1
                        }, e), e
                    }).finally(() => {
                        document.removeEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement)
                    })
                }
                async acquireTokenByCode(e) {
                    let t = this.getRequestCorrelationId(e);
                    this.logger.trace("acquireTokenByCode called", t);
                    let r = this.performanceClient.startMeasurement(tv.AcquireTokenByCode, t);
                    nD(this.initialized, r), this.eventHandler.emitEvent(r$.ACQUIRE_TOKEN_BY_CODE_START, a.Silent, e), r.add({
                        scenarioId: e.scenarioId
                    });
                    try {
                        if (e.code && e.nativeAccountId) throw (0, tB.Z_)(tG.LL);
                        if (e.code) {
                            let n = e.code,
                                i = this.hybridAuthCodeResponses.get(n);
                            return i ? (this.logger.verbose("Existing acquireTokenByCode request found", t), r.discard()) : (this.logger.verbose("Initiating new acquireTokenByCode request", t), i = this.acquireTokenByCodeAsync({ ...e,
                                correlationId: t
                            }).then(e => (this.eventHandler.emitEvent(r$.ACQUIRE_TOKEN_BY_CODE_SUCCESS, a.Silent, e), this.hybridAuthCodeResponses.delete(n), r.end({
                                success: !0,
                                isNativeBroker: e.fromNativeBroker,
                                accessTokenSize: e.accessToken.length,
                                idTokenSize: e.idToken.length,
                                accountType: nL(e.account)
                            }), e)).catch(e => {
                                throw this.hybridAuthCodeResponses.delete(n), this.eventHandler.emitEvent(r$.ACQUIRE_TOKEN_BY_CODE_FAILURE, a.Silent, null, e), r.end({
                                    success: !1
                                }, e), e
                            }), this.hybridAuthCodeResponses.set(n, i)), await i
                        }
                        if (e.nativeAccountId) {
                            if (this.canUseNative(e, e.nativeAccountId)) {
                                let n = await this.acquireTokenNative({ ...e,
                                    correlationId: t
                                }, tq.acquireTokenByCode, e.nativeAccountId).catch(e => {
                                    throw e instanceof ng && np(e) && (this.nativeExtensionProvider = void 0), e
                                });
                                return r.end({
                                    accountType: nL(n.account),
                                    success: !0
                                }), n
                            }
                            throw (0, tB.Z_)(tG.KA)
                        }
                        throw (0, tB.Z_)(tG.Dy)
                    } catch (e) {
                        throw this.eventHandler.emitEvent(r$.ACQUIRE_TOKEN_BY_CODE_FAILURE, a.Silent, null, e), r.end({
                            success: !1
                        }, e), e
                    }
                }
                async acquireTokenByCodeAsync(e) {
                    this.logger.trace("acquireTokenByCodeAsync called", e.correlationId), this.acquireTokenByCodeAsyncMeasurement = this.performanceClient.startMeasurement(tv.AcquireTokenByCodeAsync, e.correlationId), this.acquireTokenByCodeAsyncMeasurement ? .increment({
                        visibilityChangeCount: 0
                    }), document.addEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement);
                    let t = this.createSilentAuthCodeClient(e.correlationId);
                    return await t.acquireToken(e).then(e => (this.acquireTokenByCodeAsyncMeasurement ? .end({
                        success: !0,
                        fromCache: e.fromCache,
                        isNativeBroker: e.fromNativeBroker
                    }), e)).catch(e => {
                        throw this.acquireTokenByCodeAsyncMeasurement ? .end({
                            success: !1
                        }, e), e
                    }).finally(() => {
                        document.removeEventListener("visibilitychange", this.trackPageVisibilityWithMeasurement)
                    })
                }
                async acquireTokenFromCache(e, t) {
                    switch (this.performanceClient.addQueueMeasurement(tv.AcquireTokenFromCache, e.correlationId), t) {
                        case tD.Default:
                        case tD.AccessToken:
                        case tD.AccessTokenAndRefreshToken:
                            let r = this.createSilentCacheClient(e.correlationId);
                            return rO(r.acquireToken.bind(r), tv.SilentCacheClientAcquireToken, this.logger, this.performanceClient, e.correlationId)(e);
                        default:
                            throw ea(Q)
                    }
                }
                async acquireTokenByRefreshToken(e, t) {
                    switch (this.performanceClient.addQueueMeasurement(tv.AcquireTokenByRefreshToken, e.correlationId), t) {
                        case tD.Default:
                        case tD.AccessTokenAndRefreshToken:
                        case tD.RefreshToken:
                        case tD.RefreshTokenAndNetwork:
                            let r = this.createSilentRefreshClient(e.correlationId);
                            return rO(r.acquireToken.bind(r), tv.SilentRefreshClientAcquireToken, this.logger, this.performanceClient, e.correlationId)(e);
                        default:
                            throw ea(Q)
                    }
                }
                async acquireTokenBySilentIframe(e) {
                    this.performanceClient.addQueueMeasurement(tv.AcquireTokenBySilentIframe, e.correlationId);
                    let t = this.createSilentIframeClient(e.correlationId);
                    return rO(t.acquireToken.bind(t), tv.SilentIframeClientAcquireToken, this.logger, this.performanceClient, e.correlationId)(e)
                }
                async logout(e) {
                    let t = this.getRequestCorrelationId(e);
                    return this.logger.warning("logout API is deprecated and will be removed in msal-browser v3.0.0. Use logoutRedirect instead.", t), this.logoutRedirect({
                        correlationId: t,
                        ...e
                    })
                }
                async logoutRedirect(e) {
                    let t = this.getRequestCorrelationId(e);
                    return ru(this.initialized, this.config), this.browserStorage.setInteractionInProgress(!0), this.createRedirectClient(t).logout(e)
                }
                logoutPopup(e) {
                    try {
                        let t = this.getRequestCorrelationId(e);
                        return rd(this.initialized), this.browserStorage.setInteractionInProgress(!0), this.createPopupClient(t).logout(e)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }
                async clearCache(e) {
                    if (!this.isBrowserEnvironment) {
                        this.logger.info("in non-browser environment, returning early.");
                        return
                    }
                    let t = this.getRequestCorrelationId(e);
                    return this.createSilentCacheClient(t).logout(e)
                }
                getAllAccounts(e) {
                    var t, r, n;
                    let i = this.getRequestCorrelationId();
                    return t = this.logger, r = this.browserStorage, n = this.isBrowserEnvironment, t.verbose("getAllAccounts called"), n ? r.getAllAccounts(i, e) : []
                }
                getAccount(e) {
                    let t = this.getRequestCorrelationId();
                    return function(e, t, r, n) {
                        if (t.trace("getAccount called"), 0 === Object.keys(e).length) return t.warning("getAccount: No accountFilter provided"), null;
                        let i = r.getAccountInfoFilteredBy(e, n);
                        return i ? (t.verbose("getAccount: Account matching provided filter found, returning"), i) : (t.verbose("getAccount: No matching account found, returning null"), null)
                    }(e, this.logger, this.browserStorage, t)
                }
                getAccountByUsername(e) {
                    let t = this.getRequestCorrelationId();
                    return function(e, t, r, n) {
                        if (t.trace("getAccountByUsername called"), !e) return t.warning("getAccountByUsername: No username provided"), null;
                        let i = r.getAccountInfoFilteredBy({
                            username: e
                        }, n);
                        return i ? (t.verbose("getAccountByUsername: Account matching username found, returning"), t.verbosePii(`getAccountByUsername: Returning signed-in accounts matching username: ${e}`), i) : (t.verbose("getAccountByUsername: No matching account found, returning null"), null)
                    }(e, this.logger, this.browserStorage, t)
                }
                getAccountByHomeId(e) {
                    let t = this.getRequestCorrelationId();
                    return function(e, t, r, n) {
                        if (t.trace("getAccountByHomeId called"), !e) return t.warning("getAccountByHomeId: No homeAccountId provided"), null;
                        let i = r.getAccountInfoFilteredBy({
                            homeAccountId: e
                        }, n);
                        return i ? (t.verbose("getAccountByHomeId: Account matching homeAccountId found, returning"), t.verbosePii(`getAccountByHomeId: Returning signed-in accounts matching homeAccountId: ${e}`), i) : (t.verbose("getAccountByHomeId: No matching account found, returning null"), null)
                    }(e, this.logger, this.browserStorage, t)
                }
                getAccountByLocalId(e) {
                    let t = this.getRequestCorrelationId();
                    return function(e, t, r, n) {
                        if (t.trace("getAccountByLocalId called"), !e) return t.warning("getAccountByLocalId: No localAccountId provided"), null;
                        let i = r.getAccountInfoFilteredBy({
                            localAccountId: e
                        }, n);
                        return i ? (t.verbose("getAccountByLocalId: Account matching localAccountId found, returning"), t.verbosePii(`getAccountByLocalId: Returning signed-in accounts matching localAccountId: ${e}`), i) : (t.verbose("getAccountByLocalId: No matching account found, returning null"), null)
                    }(e, this.logger, this.browserStorage, t)
                }
                setActiveAccount(e) {
                    let t = this.getRequestCorrelationId();
                    ! function(e, t, r) {
                        t.setActiveAccount(e, r)
                    }(e, this.browserStorage, t)
                }
                getActiveAccount() {
                    let e = this.getRequestCorrelationId();
                    return this.browserStorage.getActiveAccount(e)
                }
                async hydrateCache(e, t) {
                    this.logger.verbose("hydrateCache called");
                    let r = e5.createFromAccountInfo(e.account, e.cloudGraphHostName, e.msGraphHost);
                    return (this.browserStorage.setAccount(r, e.correlationId), e.fromNativeBroker) ? (this.logger.verbose("Response was from native broker, storing in-memory"), this.nativeInternalStorage.hydrateCache(e, t)) : this.browserStorage.hydrateCache(e, t)
                }
                async acquireTokenNative(e, t, r) {
                    if (this.logger.trace("acquireTokenNative called"), !this.nativeExtensionProvider) throw (0, tB.Z_)(tG.V7);
                    return new nT(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, t, this.performanceClient, this.nativeExtensionProvider, r || this.getNativeAccountId(e), this.nativeInternalStorage, e.correlationId).acquireToken(e)
                }
                canUseNative(e, t) {
                    if (this.logger.trace("canUseNative called"), !nI.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, e.authenticationScheme)) return this.logger.trace("canUseNative: isNativeAvailable returned false, returning false"), !1;
                    if (e.prompt) switch (e.prompt) {
                        case l.NJ.NONE:
                        case l.NJ.CONSENT:
                        case l.NJ.LOGIN:
                            this.logger.trace("canUseNative: prompt is compatible with native flow");
                            break;
                        default:
                            return this.logger.trace(`canUseNative: prompt = ${e.prompt} is not compatible with native flow, returning false`), !1
                    }
                    return !!(t || this.getNativeAccountId(e)) || (this.logger.trace("canUseNative: nativeAccountId is not available, returning false"), !1)
                }
                getNativeAccountId(e) {
                    let t = e.account || this.getAccount({
                        loginHint: e.loginHint,
                        sid: e.sid
                    }) || this.getActiveAccount();
                    return t && t.nativeAccountId || ""
                }
                createPopupClient(e) {
                    return new nw(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e)
                }
                createRedirectClient(e) {
                    return new n_(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e)
                }
                createSilentIframeClient(e) {
                    return new nP(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, tq.ssoSilent, this.performanceClient, this.nativeInternalStorage, this.nativeExtensionProvider, e)
                }
                createSilentCacheClient(e) {
                    return new ny(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e)
                }
                createSilentRefreshClient(e) {
                    return new nM(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, e)
                }
                createSilentAuthCodeClient(e) {
                    return new nH(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, tq.acquireTokenByCode, this.performanceClient, this.nativeExtensionProvider, e)
                }
                addEventCallback(e, t) {
                    return this.eventHandler.addEventCallback(e, t)
                }
                removeEventCallback(e) {
                    this.eventHandler.removeEventCallback(e)
                }
                addPerformanceCallback(e) {
                    return rl(), this.performanceClient.addPerformanceCallback(e)
                }
                removePerformanceCallback(e) {
                    return this.performanceClient.removePerformanceCallback(e)
                }
                enableAccountStorageEvents() {
                    "undefined" != typeof window && (this.listeningToStorageEvents ? this.logger.verbose("Account storage listener already registered.") : (this.logger.verbose("Adding account storage listener."), this.listeningToStorageEvents = !0, window.addEventListener("storage", this.handleAccountCacheChange)))
                }
                disableAccountStorageEvents() {
                    "undefined" != typeof window && (this.listeningToStorageEvents ? (this.logger.verbose("Removing account storage listener."), window.removeEventListener("storage", this.handleAccountCacheChange), this.listeningToStorageEvents = !1) : this.logger.verbose("No account storage listener registered."))
                }
                handleAccountCacheChange(e) {
                    try {
                        e.key ? .includes(l.Vi.ACTIVE_ACCOUNT_FILTERS) && this.eventHandler.emitEvent(r$.ACTIVE_ACCOUNT_CHANGED);
                        let t = e.newValue || e.oldValue;
                        if (!t) return;
                        let r = JSON.parse(t);
                        if ("object" != typeof r || !e5.isAccountEntity(r)) return;
                        let n = th.toObject(new e5, r).getAccountInfo();
                        !e.oldValue && e.newValue ? (this.logger.info("Account was added to cache in a different window"), this.eventHandler.emitEvent(r$.ACCOUNT_ADDED, void 0, n)) : !e.newValue && e.oldValue && (this.logger.info("Account was removed from cache in a different window"), this.eventHandler.emitEvent(r$.ACCOUNT_REMOVED, void 0, n))
                    } catch (e) {
                        return
                    }
                }
                getTokenCache() {
                    return this.tokenCache
                }
                getLogger() {
                    return this.logger
                }
                setLogger(e) {
                    this.logger = e
                }
                initializeWrapperLibrary(e, t) {
                    this.browserStorage.setWrapperMetadata(e, t)
                }
                setNavigationClient(e) {
                    this.navigationClient = e
                }
                getConfiguration() {
                    return this.config
                }
                getPerformanceClient() {
                    return this.performanceClient
                }
                isBrowserEnv() {
                    return this.isBrowserEnvironment
                }
                getRequestCorrelationId(e) {
                    return e ? .correlationId ? e.correlationId : this.isBrowserEnvironment ? t6() : l.gT.EMPTY_STRING
                }
                async loginRedirect(e) {
                    let t = this.getRequestCorrelationId(e);
                    return this.logger.verbose("loginRedirect called", t), this.acquireTokenRedirect({
                        correlationId: t,
                        ...e || tU
                    })
                }
                loginPopup(e) {
                    let t = this.getRequestCorrelationId(e);
                    return this.logger.verbose("loginPopup called", t), this.acquireTokenPopup({
                        correlationId: t,
                        ...e || tU
                    })
                }
                async acquireTokenSilent(e) {
                    let t = this.getRequestCorrelationId(e),
                        r = this.performanceClient.startMeasurement(tv.AcquireTokenSilent, t);
                    r.add({
                        cacheLookupPolicy: e.cacheLookupPolicy,
                        scenarioId: e.scenarioId
                    }), nD(this.initialized, r), this.logger.verbose("acquireTokenSilent called", t);
                    let n = e.account || this.getActiveAccount();
                    if (!n) throw (0, tB.Z_)(tG.wH);
                    r.add({
                        accountType: nL(n)
                    });
                    let i = JSON.stringify({
                            clientId: this.config.auth.clientId,
                            authority: e.authority || l.gT.EMPTY_STRING,
                            scopes: e.scopes,
                            homeAccountIdentifier: n.homeAccountId,
                            claims: e.claims,
                            authenticationScheme: e.authenticationScheme,
                            resourceRequestMethod: e.resourceRequestMethod,
                            resourceRequestUri: e.resourceRequestUri,
                            shrClaims: e.shrClaims,
                            sshKid: e.sshKid,
                            shrOptions: e.shrOptions
                        }),
                        o = this.activeSilentTokenRequests.get(i);
                    if (void 0 !== o) return this.logger.verbose("acquireTokenSilent has been called previously, returning the result from the first call", t), r.discard(), { ...await o,
                        state: e.state
                    }; {
                        this.logger.verbose("acquireTokenSilent called for the first time, storing active request", t);
                        let o = rO(this.acquireTokenSilentAsync.bind(this), tv.AcquireTokenSilentAsync, this.logger, this.performanceClient, t)({ ...e,
                            correlationId: t
                        }, n).then(t => (this.activeSilentTokenRequests.delete(i), r.end({
                            success: !0,
                            fromCache: t.fromCache,
                            isNativeBroker: t.fromNativeBroker,
                            cacheLookupPolicy: e.cacheLookupPolicy,
                            accessTokenSize: t.accessToken.length,
                            idTokenSize: t.idToken.length
                        }), t)).catch(e => {
                            throw this.activeSilentTokenRequests.delete(i), r.end({
                                success: !1
                            }, e), e
                        });
                        return this.activeSilentTokenRequests.set(i, o), { ...await o,
                            state: e.state
                        }
                    }
                }
                async acquireTokenSilentAsync(e, t) {
                    let r = () => this.trackPageVisibility(e.correlationId);
                    this.performanceClient.addQueueMeasurement(tv.AcquireTokenSilentAsync, e.correlationId), this.eventHandler.emitEvent(r$.ACQUIRE_TOKEN_START, a.Silent, e), e.correlationId && this.performanceClient.incrementFields({
                        visibilityChangeCount: 0
                    }, e.correlationId), document.addEventListener("visibilitychange", r);
                    let n = await rO(nc, tv.InitializeSilentRequest, this.logger, this.performanceClient, e.correlationId)(e, t, this.config, this.performanceClient, this.logger),
                        i = e.cacheLookupPolicy || tD.Default;
                    return this.acquireTokenSilentNoIframe(n, i).catch(async e => {
                        if (function(e, t) {
                                let r = !(e instanceof rq.Yo && e.subError !== rU.nl),
                                    n = e.errorCode === t_.INVALID_GRANT_ERROR || e.errorCode === Q,
                                    i = r && n || e.errorCode === rU.I2 || e.errorCode === rU.Tw,
                                    o = tK.includes(t);
                                return i && o
                            }(e, i)) {
                            if (this.activeIframeRequest) {
                                if (i === tD.Skip) return this.logger.warning("Another iframe request is currently in progress and CacheLookupPolicy is set to Skip. This may result in degraded performance and/or reliability for both calls. Please consider changing the CacheLookupPolicy to take advantage of request queuing and token cache.", n.correlationId), rO(this.acquireTokenBySilentIframe.bind(this), tv.AcquireTokenBySilentIframe, this.logger, this.performanceClient, n.correlationId)(n); {
                                    let [t, r] = this.activeIframeRequest;
                                    this.logger.verbose(`Iframe request is already in progress, awaiting resolution for request with correlationId: ${r}`, n.correlationId);
                                    let o = this.performanceClient.startMeasurement(tv.AwaitConcurrentIframe, n.correlationId);
                                    o.add({
                                        awaitIframeCorrelationId: r
                                    });
                                    let a = await t;
                                    if (o.end({
                                            success: a
                                        }), a) return this.logger.verbose(`Parallel iframe request with correlationId: ${r} succeeded. Retrying cache and/or RT redemption`, n.correlationId), this.acquireTokenSilentNoIframe(n, i);
                                    throw this.logger.info(`Iframe request with correlationId: ${r} failed. Interaction is required.`), e
                                }
                            } {
                                let e;
                                return this.activeIframeRequest = [new Promise(t => {
                                    e = t
                                }), n.correlationId], this.logger.verbose("Refresh token expired/invalid or CacheLookupPolicy is set to Skip, attempting acquire token by iframe.", n.correlationId), rO(this.acquireTokenBySilentIframe.bind(this), tv.AcquireTokenBySilentIframe, this.logger, this.performanceClient, n.correlationId)(n).then(t => (e(!0), t)).catch(t => {
                                    throw e(!1), t
                                }).finally(() => {
                                    this.activeIframeRequest = void 0
                                })
                            }
                        }
                        throw e
                    }).then(t => (this.eventHandler.emitEvent(r$.ACQUIRE_TOKEN_SUCCESS, a.Silent, t), e.correlationId && this.performanceClient.addFields({
                        fromCache: t.fromCache,
                        isNativeBroker: t.fromNativeBroker
                    }, e.correlationId), t)).catch(e => {
                        throw this.eventHandler.emitEvent(r$.ACQUIRE_TOKEN_FAILURE, a.Silent, null, e), e
                    }).finally(() => {
                        document.removeEventListener("visibilitychange", r)
                    })
                }
                async acquireTokenSilentNoIframe(e, t) {
                    return nI.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, e.authenticationScheme) && e.account.nativeAccountId ? (this.logger.verbose("acquireTokenSilent - attempting to acquire token from native platform"), this.acquireTokenNative(e, tq.acquireTokenSilent_silentFlow).catch(async e => {
                        if (e instanceof ng && np(e)) throw this.logger.verbose("acquireTokenSilent - native platform unavailable, falling back to web flow"), this.nativeExtensionProvider = void 0, ea(Q);
                        throw e
                    })) : (this.logger.verbose("acquireTokenSilent - attempting to acquire token from web flow"), rO(this.acquireTokenFromCache.bind(this), tv.AcquireTokenFromCache, this.logger, this.performanceClient, e.correlationId)(e, t).catch(r => {
                        if (t === tD.AccessToken) throw r;
                        return this.eventHandler.emitEvent(r$.ACQUIRE_TOKEN_NETWORK_START, a.Silent, e), rO(this.acquireTokenByRefreshToken.bind(this), tv.AcquireTokenByRefreshToken, this.logger, this.performanceClient, e.correlationId)(e, t)
                    }))
                }
            }
            async function nx(e, t) {
                let r = new rC(e);
                return await r.initialize(), nK.createController(r, t)
            }
            class nF {
                static async createPublicClientApplication(e) {
                    let t = await nx(e);
                    return new nF(e, t)
                }
                constructor(e, t) {
                    this.controller = t || new nK(new rC(e))
                }
                async initialize(e) {
                    return this.controller.initialize(e)
                }
                async acquireTokenPopup(e) {
                    return this.controller.acquireTokenPopup(e)
                }
                acquireTokenRedirect(e) {
                    return this.controller.acquireTokenRedirect(e)
                }
                acquireTokenSilent(e) {
                    return this.controller.acquireTokenSilent(e)
                }
                acquireTokenByCode(e) {
                    return this.controller.acquireTokenByCode(e)
                }
                addEventCallback(e, t) {
                    return this.controller.addEventCallback(e, t)
                }
                removeEventCallback(e) {
                    return this.controller.removeEventCallback(e)
                }
                addPerformanceCallback(e) {
                    return this.controller.addPerformanceCallback(e)
                }
                removePerformanceCallback(e) {
                    return this.controller.removePerformanceCallback(e)
                }
                enableAccountStorageEvents() {
                    this.controller.enableAccountStorageEvents()
                }
                disableAccountStorageEvents() {
                    this.controller.disableAccountStorageEvents()
                }
                getAccount(e) {
                    return this.controller.getAccount(e)
                }
                getAccountByHomeId(e) {
                    return this.controller.getAccountByHomeId(e)
                }
                getAccountByLocalId(e) {
                    return this.controller.getAccountByLocalId(e)
                }
                getAccountByUsername(e) {
                    return this.controller.getAccountByUsername(e)
                }
                getAllAccounts(e) {
                    return this.controller.getAllAccounts(e)
                }
                handleRedirectPromise(e) {
                    return this.controller.handleRedirectPromise(e)
                }
                loginPopup(e) {
                    return this.controller.loginPopup(e)
                }
                loginRedirect(e) {
                    return this.controller.loginRedirect(e)
                }
                logout(e) {
                    return this.controller.logout(e)
                }
                logoutRedirect(e) {
                    return this.controller.logoutRedirect(e)
                }
                logoutPopup(e) {
                    return this.controller.logoutPopup(e)
                }
                ssoSilent(e) {
                    return this.controller.ssoSilent(e)
                }
                getTokenCache() {
                    return this.controller.getTokenCache()
                }
                getLogger() {
                    return this.controller.getLogger()
                }
                setLogger(e) {
                    this.controller.setLogger(e)
                }
                setActiveAccount(e) {
                    this.controller.setActiveAccount(e)
                }
                getActiveAccount() {
                    return this.controller.getActiveAccount()
                }
                initializeWrapperLibrary(e, t) {
                    return this.controller.initializeWrapperLibrary(e, t)
                }
                setNavigationClient(e) {
                    this.controller.setNavigationClient(e)
                }
                getConfiguration() {
                    return this.controller.getConfiguration()
                }
                async hydrateCache(e, t) {
                    return this.controller.hydrateCache(e, t)
                }
                clearCache(e) {
                    return this.controller.clearCache(e)
                }
            }
            var nB = r(483);
            let nG = (0, c.createContext)(null),
                n$ = e => {
                    let [t, r] = (0, c.useState)(null), [n, i] = (0, c.useState)(!1), {
                        locale: o,
                        msalConfig: a,
                        msalEnabledFeatureFlag: l,
                        children: h,
                        site: d,
                        redirectUri: u = ""
                    } = e, [g] = (0, nB._)("msal_temp", void 0), p = l || !!g, m = (0, c.useMemo)(() => {
                        var e, t, r, n, i, s, c, l, h, g, m, C, f, y, T, I, A, v, w, E, _, S, k, R, b, O;
                        return a && p ? {
                            configUrl: null == (t = null == (e = null == a ? void 0 : a.custom) ? void 0 : e[d]) ? void 0 : t.configUrl,
                            msalConfig: {
                                auth: {
                                    clientId: null == (n = null == (r = null == a ? void 0 : a.custom) ? void 0 : r[d]) ? void 0 : n.clientId,
                                    authority: null == (s = null == (i = null == a ? void 0 : a.custom) ? void 0 : i[d]) ? void 0 : s.authority,
                                    knownAuthorities: [null == (l = null == (c = null == a ? void 0 : a.custom) ? void 0 : c[d]) ? void 0 : l.knownAuthorities],
                                    redirectUri: "" !== u ? u : null == (g = null == (h = null == a ? void 0 : a.custom) ? void 0 : h[d]) ? void 0 : g.redirectUri,
                                    postLogoutRedirectUri: "undefined" != typeof window ? window.location.origin : "",
                                    clientName: null == (C = null == (m = null == a ? void 0 : a.custom) ? void 0 : m[d]) ? void 0 : C.site,
                                    tc: null == (y = null == (f = null == a ? void 0 : a.custom) ? void 0 : f[d]) ? void 0 : y.tc
                                },
                                cache: {
                                    cacheLocation: null == (I = null == (T = null == a ? void 0 : a.custom) ? void 0 : T[d]) ? void 0 : I.cacheLocation,
                                    storeAuthStateInCookie: null == (v = null == (A = null == a ? void 0 : a.custom) ? void 0 : A[d]) ? void 0 : v.storeAuthStateInCookie
                                },
                                system: {
                                    tokenRenewalOffsetSeconds: null == (E = null == (w = null == a ? void 0 : a.custom) ? void 0 : w[d]) ? void 0 : E.tokenRenewalOffsetSeconds
                                },
                                wcs: {
                                    subscriptionKey: null == (S = null == (_ = null == a ? void 0 : a.custom) ? void 0 : _[d]) ? void 0 : S.wcsSubscriptionKey
                                }
                            },
                            extraQueryParameters: {
                                ui_locales: o || "en-US"
                            },
                            editEmailAuthority: null == (R = null == (k = null == a ? void 0 : a.custom) ? void 0 : k[d]) ? void 0 : R.editEmailAuthority,
                            editPasswordAuthority: null == (O = null == (b = null == a ? void 0 : a.custom) ? void 0 : b[d]) ? void 0 : O.editPasswordAuthority
                        } : {}
                    }, [p, a, o, d, u]);
                    return (0, c.useEffect)(() => {
                        (null == m ? void 0 : m.msalConfig) ? r(new nF(m.msalConfig)): l && (!m || 0 === Object.keys(m).length) && console.error("MSAL Provider Client:: MSAL Config is missing")
                    }, [m, l]), (0, c.useEffect)(() => {
                        t && t.initialize().then(() => {
                            i(!0)
                        })
                    }, [t]), (0, s.jsx)(nG.Provider, {
                        value: {
                            baseMsalConfig: m,
                            msalEnabledFeatureFlag: p,
                            msalInstance: t,
                            msalInstanceLoaded: n
                        },
                        children: h
                    })
                }
        }
    }
]);