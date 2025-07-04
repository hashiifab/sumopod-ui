function hg(u, l) {
	for (var r = 0; r < l.length; r++) {
		const i = l[r];
		if (typeof i != "string" && !Array.isArray(i)) {
			for (const c in i)
				if (c !== "default" && !(c in u)) {
					const f = Object.getOwnPropertyDescriptor(i, c);
					f &&
						Object.defineProperty(
							u,
							c,
							f.get ? f : { enumerable: !0, get: () => i[c] },
						);
				}
		}
	}
	return Object.freeze(
		Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }),
	);
}
(() => {
	const l = document.createElement("link").relList;
	if (l && l.supports && l.supports("modulepreload")) return;
	for (const c of document.querySelectorAll('link[rel="modulepreload"]')) i(c);
	new MutationObserver((c) => {
		for (const f of c)
			if (f.type === "childList")
				for (const d of f.addedNodes)
					d.tagName === "LINK" && d.rel === "modulepreload" && i(d);
	}).observe(document, { childList: !0, subtree: !0 });
	function r(c) {
		const f = {};
		return (
			c.integrity && (f.integrity = c.integrity),
			c.referrerPolicy && (f.referrerPolicy = c.referrerPolicy),
			c.crossOrigin === "use-credentials"
				? (f.credentials = "include")
				: c.crossOrigin === "anonymous"
					? (f.credentials = "omit")
					: (f.credentials = "same-origin"),
			f
		);
	}
	function i(c) {
		if (c.ep) return;
		c.ep = !0;
		const f = r(c);
		fetch(c.href, f);
	}
})();
function es(u) {
	return u && u.__esModule && Object.hasOwn(u, "default") ? u.default : u;
}
function lp(u) {
	if (Object.hasOwn(u, "__esModule")) return u;
	var l = u.default;
	if (typeof l == "function") {
		var r = function i() {
			return this instanceof i
				? Reflect.construct(l, arguments, this.constructor)
				: l.apply(this, arguments);
		};
		r.prototype = l.prototype;
	} else r = {};
	return (
		Object.defineProperty(r, "__esModule", { value: !0 }),
		Object.keys(u).forEach((i) => {
			var c = Object.getOwnPropertyDescriptor(u, i);
			Object.defineProperty(
				r,
				i,
				c.get
					? c
					: {
							enumerable: !0,
							get: () => u[i],
						},
			);
		}),
		r
	);
}
var _o = { exports: {} },
	ui = {}; /**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ih;
function vg() {
	if (Ih) return ui;
	Ih = 1;
	var u = Symbol.for("react.transitional.element"),
		l = Symbol.for("react.fragment");
	function r(i, c, f) {
		var d = null;
		if (
			(f !== void 0 && (d = "" + f),
			c.key !== void 0 && (d = "" + c.key),
			"key" in c)
		) {
			f = {};
			for (var h in c) h !== "key" && (f[h] = c[h]);
		} else f = c;
		return (
			(c = f.ref),
			{ $$typeof: u, type: i, key: d, ref: c !== void 0 ? c : null, props: f }
		);
	}
	return (ui.Fragment = l), (ui.jsx = r), (ui.jsxs = r), ui;
}
var ev;
function pg() {
	return ev || ((ev = 1), (_o.exports = vg())), _o.exports;
}
var y = pg(),
	xo = { exports: {} },
	oe = {}; /**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tv;
function mg() {
	if (tv) return oe;
	tv = 1;
	var u = Symbol.for("react.transitional.element"),
		l = Symbol.for("react.portal"),
		r = Symbol.for("react.fragment"),
		i = Symbol.for("react.strict_mode"),
		c = Symbol.for("react.profiler"),
		f = Symbol.for("react.consumer"),
		d = Symbol.for("react.context"),
		h = Symbol.for("react.forward_ref"),
		m = Symbol.for("react.suspense"),
		p = Symbol.for("react.memo"),
		b = Symbol.for("react.lazy"),
		_ = Symbol.iterator;
	function w(S) {
		return S === null || typeof S != "object"
			? null
			: ((S = (_ && S[_]) || S["@@iterator"]),
				typeof S == "function" ? S : null);
	}
	var j = {
			isMounted: () => !1,
			enqueueForceUpdate: () => {},
			enqueueReplaceState: () => {},
			enqueueSetState: () => {},
		},
		M = Object.assign,
		B = {};
	function D(S, z, V) {
		(this.props = S),
			(this.context = z),
			(this.refs = B),
			(this.updater = V || j);
	}
	(D.prototype.isReactComponent = {}),
		(D.prototype.setState = function (S, z) {
			if (typeof S != "object" && typeof S != "function" && S != null)
				throw Error(
					"takes an object of state variables to update or a function which returns an object of state variables.",
				);
			this.updater.enqueueSetState(this, S, z, "setState");
		}),
		(D.prototype.forceUpdate = function (S) {
			this.updater.enqueueForceUpdate(this, S, "forceUpdate");
		});
	function K() {}
	K.prototype = D.prototype;
	function ee(S, z, V) {
		(this.props = S),
			(this.context = z),
			(this.refs = B),
			(this.updater = V || j);
	}
	var G = (ee.prototype = new K());
	(G.constructor = ee), M(G, D.prototype), (G.isPureReactComponent = !0);
	var P = Array.isArray,
		Z = { H: null, A: null, T: null, S: null, V: null },
		se = Object.prototype.hasOwnProperty;
	function ge(S, z, V, $, I, me) {
		return (
			(V = me.ref),
			{ $$typeof: u, type: S, key: z, ref: V !== void 0 ? V : null, props: me }
		);
	}
	function Ye(S, z) {
		return ge(S.type, z, void 0, void 0, void 0, S.props);
	}
	function Be(S) {
		return typeof S == "object" && S !== null && S.$$typeof === u;
	}
	function lt(S) {
		var z = { "=": "=0", ":": "=2" };
		return "$" + S.replace(/[=:]/g, (V) => z[V]);
	}
	var ae = /\/+/g;
	function J(S, z) {
		return typeof S == "object" && S !== null && S.key != null
			? lt("" + S.key)
			: z.toString(36);
	}
	function fe() {}
	function Q(S) {
		switch (S.status) {
			case "fulfilled":
				return S.value;
			case "rejected":
				throw S.reason;
			default:
				switch (
					(typeof S.status == "string"
						? S.then(fe, fe)
						: ((S.status = "pending"),
							S.then(
								(z) => {
									S.status === "pending" &&
										((S.status = "fulfilled"), (S.value = z));
								},
								(z) => {
									S.status === "pending" &&
										((S.status = "rejected"), (S.reason = z));
								},
							)),
					S.status)
				) {
					case "fulfilled":
						return S.value;
					case "rejected":
						throw S.reason;
				}
		}
		throw S;
	}
	function Y(S, z, V, $, I) {
		var me = typeof S;
		(me === "undefined" || me === "boolean") && (S = null);
		var re = !1;
		if (S === null) re = !0;
		else
			switch (me) {
				case "bigint":
				case "string":
				case "number":
					re = !0;
					break;
				case "object":
					switch (S.$$typeof) {
						case u:
						case l:
							re = !0;
							break;
						case b:
							return (re = S._init), Y(re(S._payload), z, V, $, I);
					}
			}
		if (re)
			return (
				(I = I(S)),
				(re = $ === "" ? "." + J(S, 0) : $),
				P(I)
					? ((V = ""),
						re != null && (V = re.replace(ae, "$&/") + "/"),
						Y(I, z, V, "", (on) => on))
					: I != null &&
						(Be(I) &&
							(I = Ye(
								I,
								V +
									(I.key == null || (S && S.key === I.key)
										? ""
										: ("" + I.key).replace(ae, "$&/") + "/") +
									re,
							)),
						z.push(I)),
				1
			);
		re = 0;
		var nt = $ === "" ? "." : $ + ":";
		if (P(S))
			for (var Re = 0; Re < S.length; Re++)
				($ = S[Re]), (me = nt + J($, Re)), (re += Y($, z, V, me, I));
		else if (((Re = w(S)), typeof Re == "function"))
			for (S = Re.call(S), Re = 0; !($ = S.next()).done; )
				($ = $.value), (me = nt + J($, Re++)), (re += Y($, z, V, me, I));
		else if (me === "object") {
			if (typeof S.then == "function") return Y(Q(S), z, V, $, I);
			throw (
				((z = String(S)),
				Error(
					"Objects are not valid as a React child (found: " +
						(z === "[object Object]"
							? "object with keys {" + Object.keys(S).join(", ") + "}"
							: z) +
						"). If you meant to render a collection of children, use an array instead.",
				))
			);
		}
		return re;
	}
	function N(S, z, V) {
		if (S == null) return S;
		var $ = [],
			I = 0;
		return Y(S, $, "", "", (me) => z.call(V, me, I++)), $;
	}
	function T(S) {
		if (S._status === -1) {
			var z = S._result;
			(z = z()),
				z.then(
					(V) => {
						(S._status === 0 || S._status === -1) &&
							((S._status = 1), (S._result = V));
					},
					(V) => {
						(S._status === 0 || S._status === -1) &&
							((S._status = 2), (S._result = V));
					},
				),
				S._status === -1 && ((S._status = 0), (S._result = z));
		}
		if (S._status === 1) return S._result.default;
		throw S._result;
	}
	var H =
		typeof reportError == "function"
			? reportError
			: (S) => {
					if (
						typeof window == "object" &&
						typeof window.ErrorEvent == "function"
					) {
						var z = new window.ErrorEvent("error", {
							bubbles: !0,
							cancelable: !0,
							message:
								typeof S == "object" &&
								S !== null &&
								typeof S.message == "string"
									? String(S.message)
									: String(S),
							error: S,
						});
						if (!window.dispatchEvent(z)) return;
					} else if (
						typeof process == "object" &&
						typeof process.emit == "function"
					) {
						process.emit("uncaughtException", S);
						return;
					}
					console.error(S);
				};
	function te() {}
	return (
		(oe.Children = {
			map: N,
			forEach: (S, z, V) => {
				N(
					S,
					function () {
						z.apply(this, arguments);
					},
					V,
				);
			},
			count: (S) => {
				var z = 0;
				return (
					N(S, () => {
						z++;
					}),
					z
				);
			},
			toArray: (S) => N(S, (z) => z) || [],
			only: (S) => {
				if (!Be(S))
					throw Error(
						"React.Children.only expected to receive a single React element child.",
					);
				return S;
			},
		}),
		(oe.Component = D),
		(oe.Fragment = r),
		(oe.Profiler = c),
		(oe.PureComponent = ee),
		(oe.StrictMode = i),
		(oe.Suspense = m),
		(oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Z),
		(oe.__COMPILER_RUNTIME = {
			__proto__: null,
			c: (S) => Z.H.useMemoCache(S),
		}),
		(oe.cache = (S) => () => S.apply(null, arguments)),
		(oe.cloneElement = (S, z, V) => {
			if (S == null)
				throw Error(
					"The argument must be a React element, but you passed " + S + ".",
				);
			var $ = M({}, S.props),
				I = S.key,
				me = void 0;
			if (z != null)
				for (re in (z.ref !== void 0 && (me = void 0),
				z.key !== void 0 && (I = "" + z.key),
				z))
					!se.call(z, re) ||
						re === "key" ||
						re === "__self" ||
						re === "__source" ||
						(re === "ref" && z.ref === void 0) ||
						($[re] = z[re]);
			var re = arguments.length - 2;
			if (re === 1) $.children = V;
			else if (1 < re) {
				for (var nt = Array(re), Re = 0; Re < re; Re++)
					nt[Re] = arguments[Re + 2];
				$.children = nt;
			}
			return ge(S.type, I, void 0, void 0, me, $);
		}),
		(oe.createContext = (S) => (
			(S = {
				$$typeof: d,
				_currentValue: S,
				_currentValue2: S,
				_threadCount: 0,
				Provider: null,
				Consumer: null,
			}),
			(S.Provider = S),
			(S.Consumer = { $$typeof: f, _context: S }),
			S
		)),
		(oe.createElement = (S, z, V) => {
			var $,
				I = {},
				me = null;
			if (z != null)
				for ($ in (z.key !== void 0 && (me = "" + z.key), z))
					se.call(z, $) &&
						$ !== "key" &&
						$ !== "__self" &&
						$ !== "__source" &&
						(I[$] = z[$]);
			var re = arguments.length - 2;
			if (re === 1) I.children = V;
			else if (1 < re) {
				for (var nt = Array(re), Re = 0; Re < re; Re++)
					nt[Re] = arguments[Re + 2];
				I.children = nt;
			}
			if (S && S.defaultProps)
				for ($ in ((re = S.defaultProps), re))
					I[$] === void 0 && (I[$] = re[$]);
			return ge(S, me, void 0, void 0, null, I);
		}),
		(oe.createRef = () => ({ current: null })),
		(oe.forwardRef = (S) => ({ $$typeof: h, render: S })),
		(oe.isValidElement = Be),
		(oe.lazy = (S) => ({
			$$typeof: b,
			_payload: { _status: -1, _result: S },
			_init: T,
		})),
		(oe.memo = (S, z) => ({
			$$typeof: p,
			type: S,
			compare: z === void 0 ? null : z,
		})),
		(oe.startTransition = (S) => {
			var z = Z.T,
				V = {};
			Z.T = V;
			try {
				var $ = S(),
					I = Z.S;
				I !== null && I(V, $),
					typeof $ == "object" &&
						$ !== null &&
						typeof $.then == "function" &&
						$.then(te, H);
			} catch (me) {
				H(me);
			} finally {
				Z.T = z;
			}
		}),
		(oe.unstable_useCacheRefresh = () => Z.H.useCacheRefresh()),
		(oe.use = (S) => Z.H.use(S)),
		(oe.useActionState = (S, z, V) => Z.H.useActionState(S, z, V)),
		(oe.useCallback = (S, z) => Z.H.useCallback(S, z)),
		(oe.useContext = (S) => Z.H.useContext(S)),
		(oe.useDebugValue = () => {}),
		(oe.useDeferredValue = (S, z) => Z.H.useDeferredValue(S, z)),
		(oe.useEffect = (S, z, V) => {
			var $ = Z.H;
			if (typeof V == "function")
				throw Error(
					"useEffect CRUD overload is not enabled in this build of React.",
				);
			return $.useEffect(S, z);
		}),
		(oe.useId = () => Z.H.useId()),
		(oe.useImperativeHandle = (S, z, V) => Z.H.useImperativeHandle(S, z, V)),
		(oe.useInsertionEffect = (S, z) => Z.H.useInsertionEffect(S, z)),
		(oe.useLayoutEffect = (S, z) => Z.H.useLayoutEffect(S, z)),
		(oe.useMemo = (S, z) => Z.H.useMemo(S, z)),
		(oe.useOptimistic = (S, z) => Z.H.useOptimistic(S, z)),
		(oe.useReducer = (S, z, V) => Z.H.useReducer(S, z, V)),
		(oe.useRef = (S) => Z.H.useRef(S)),
		(oe.useState = (S) => Z.H.useState(S)),
		(oe.useSyncExternalStore = (S, z, V) => Z.H.useSyncExternalStore(S, z, V)),
		(oe.useTransition = () => Z.H.useTransition()),
		(oe.version = "19.1.0"),
		oe
	);
}
var nv;
function xi() {
	return nv || ((nv = 1), (xo.exports = mg())), xo.exports;
}
var X = xi();
const ip = es(X),
	yg = hg({ __proto__: null, default: ip }, [X]);
var So = { exports: {} },
	oi = {},
	wo = { exports: {} },
	Eo = {}; /**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var av;
function gg() {
	return (
		av ||
			((av = 1),
			((u) => {
				function l(N, T) {
					var H = N.length;
					N.push(T);
					for (; 0 < H; ) {
						var te = (H - 1) >>> 1,
							S = N[te];
						if (0 < c(S, T)) (N[te] = T), (N[H] = S), (H = te);
						else break;
					}
				}
				function r(N) {
					return N.length === 0 ? null : N[0];
				}
				function i(N) {
					if (N.length === 0) return null;
					var T = N[0],
						H = N.pop();
					if (H !== T) {
						N[0] = H;
						for (var te = 0, S = N.length, z = S >>> 1; te < z; ) {
							var V = 2 * (te + 1) - 1,
								$ = N[V],
								I = V + 1,
								me = N[I];
							if (0 > c($, H))
								I < S && 0 > c(me, $)
									? ((N[te] = me), (N[I] = H), (te = I))
									: ((N[te] = $), (N[V] = H), (te = V));
							else if (I < S && 0 > c(me, H))
								(N[te] = me), (N[I] = H), (te = I);
							else break;
						}
					}
					return T;
				}
				function c(N, T) {
					var H = N.sortIndex - T.sortIndex;
					return H !== 0 ? H : N.id - T.id;
				}
				if (
					((u.unstable_now = void 0),
					typeof performance == "object" &&
						typeof performance.now == "function")
				) {
					var f = performance;
					u.unstable_now = () => f.now();
				} else {
					var d = Date,
						h = d.now();
					u.unstable_now = () => d.now() - h;
				}
				var m = [],
					p = [],
					b = 1,
					_ = null,
					w = 3,
					j = !1,
					M = !1,
					B = !1,
					D = !1,
					K = typeof setTimeout == "function" ? setTimeout : null,
					ee = typeof clearTimeout == "function" ? clearTimeout : null,
					G = typeof setImmediate < "u" ? setImmediate : null;
				function P(N) {
					for (var T = r(p); T !== null; ) {
						if (T.callback === null) i(p);
						else if (T.startTime <= N)
							i(p), (T.sortIndex = T.expirationTime), l(m, T);
						else break;
						T = r(p);
					}
				}
				function Z(N) {
					if (((B = !1), P(N), !M))
						if (r(m) !== null) (M = !0), se || ((se = !0), J());
						else {
							var T = r(p);
							T !== null && Y(Z, T.startTime - N);
						}
				}
				var se = !1,
					ge = -1,
					Ye = 5,
					Be = -1;
				function lt() {
					return D ? !0 : !(u.unstable_now() - Be < Ye);
				}
				function ae() {
					if (((D = !1), se)) {
						var N = u.unstable_now();
						Be = N;
						var T = !0;
						try {
							e: {
								(M = !1), B && ((B = !1), ee(ge), (ge = -1)), (j = !0);
								var H = w;
								try {
									t: {
										for (
											P(N), _ = r(m);
											_ !== null && !(_.expirationTime > N && lt());
										) {
											var te = _.callback;
											if (typeof te == "function") {
												(_.callback = null), (w = _.priorityLevel);
												var S = te(_.expirationTime <= N);
												if (((N = u.unstable_now()), typeof S == "function")) {
													(_.callback = S), P(N), (T = !0);
													break t;
												}
												_ === r(m) && i(m), P(N);
											} else i(m);
											_ = r(m);
										}
										if (_ !== null) T = !0;
										else {
											var z = r(p);
											z !== null && Y(Z, z.startTime - N), (T = !1);
										}
									}
									break e;
								} finally {
									(_ = null), (w = H), (j = !1);
								}
								T = void 0;
							}
						} finally {
							T ? J() : (se = !1);
						}
					}
				}
				var J;
				if (typeof G == "function")
					J = () => {
						G(ae);
					};
				else if (typeof MessageChannel < "u") {
					var fe = new MessageChannel(),
						Q = fe.port2;
					(fe.port1.onmessage = ae),
						(J = () => {
							Q.postMessage(null);
						});
				} else
					J = () => {
						K(ae, 0);
					};
				function Y(N, T) {
					ge = K(() => {
						N(u.unstable_now());
					}, T);
				}
				(u.unstable_IdlePriority = 5),
					(u.unstable_ImmediatePriority = 1),
					(u.unstable_LowPriority = 4),
					(u.unstable_NormalPriority = 3),
					(u.unstable_Profiling = null),
					(u.unstable_UserBlockingPriority = 2),
					(u.unstable_cancelCallback = (N) => {
						N.callback = null;
					}),
					(u.unstable_forceFrameRate = (N) => {
						0 > N || 125 < N
							? console.error(
									"forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
								)
							: (Ye = 0 < N ? Math.floor(1e3 / N) : 5);
					}),
					(u.unstable_getCurrentPriorityLevel = () => w),
					(u.unstable_next = (N) => {
						switch (w) {
							case 1:
							case 2:
							case 3: {
								var T = 3;
								break;
							}
							default:
								T = w;
						}
						var H = w;
						w = T;
						try {
							return N();
						} finally {
							w = H;
						}
					}),
					(u.unstable_requestPaint = () => {
						D = !0;
					}),
					(u.unstable_runWithPriority = (N, T) => {
						switch (N) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break;
							default:
								N = 3;
						}
						var H = w;
						w = N;
						try {
							return T();
						} finally {
							w = H;
						}
					}),
					(u.unstable_scheduleCallback = (N, T, H) => {
						var te = u.unstable_now();
						switch (
							(typeof H == "object" && H !== null
								? ((H = H.delay),
									(H = typeof H == "number" && 0 < H ? te + H : te))
								: (H = te),
							N)
						) {
							case 1: {
								var S = -1;
								break;
							}
							case 2:
								S = 250;
								break;
							case 5:
								S = 1073741823;
								break;
							case 4:
								S = 1e4;
								break;
							default:
								S = 5e3;
						}
						return (
							(S = H + S),
							(N = {
								id: b++,
								callback: T,
								priorityLevel: N,
								startTime: H,
								expirationTime: S,
								sortIndex: -1,
							}),
							H > te
								? ((N.sortIndex = H),
									l(p, N),
									r(m) === null &&
										N === r(p) &&
										(B ? (ee(ge), (ge = -1)) : (B = !0), Y(Z, H - te)))
								: ((N.sortIndex = S),
									l(m, N),
									M || j || ((M = !0), se || ((se = !0), J()))),
							N
						);
					}),
					(u.unstable_shouldYield = lt),
					(u.unstable_wrapCallback = (N) => {
						var T = w;
						return function () {
							var H = w;
							w = T;
							try {
								return N.apply(this, arguments);
							} finally {
								w = H;
							}
						};
					});
			})(Eo)),
		Eo
	);
}
var lv;
function bg() {
	return lv || ((lv = 1), (wo.exports = gg())), wo.exports;
}
var To = { exports: {} },
	et = {}; /**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iv;
function _g() {
	if (iv) return et;
	iv = 1;
	var u = xi();
	function l(m) {
		var p = "https://react.dev/errors/" + m;
		if (1 < arguments.length) {
			p += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var b = 2; b < arguments.length; b++)
				p += "&args[]=" + encodeURIComponent(arguments[b]);
		}
		return (
			"Minified React error #" +
			m +
			"; visit " +
			p +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	function r() {}
	var i = {
			d: {
				f: r,
				r: () => {
					throw Error(l(522));
				},
				D: r,
				C: r,
				L: r,
				m: r,
				X: r,
				S: r,
				M: r,
			},
			p: 0,
			findDOMNode: null,
		},
		c = Symbol.for("react.portal");
	function f(m, p, b) {
		var _ =
			3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
		return {
			$$typeof: c,
			key: _ == null ? null : "" + _,
			children: m,
			containerInfo: p,
			implementation: b,
		};
	}
	var d = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function h(m, p) {
		if (m === "font") return "";
		if (typeof p == "string") return p === "use-credentials" ? p : "";
	}
	return (
		(et.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
		(et.createPortal = (m, p) => {
			var b =
				2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
			if (!p || (p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11))
				throw Error(l(299));
			return f(m, p, null, b);
		}),
		(et.flushSync = (m) => {
			var p = d.T,
				b = i.p;
			try {
				if (((d.T = null), (i.p = 2), m)) return m();
			} finally {
				(d.T = p), (i.p = b), i.d.f();
			}
		}),
		(et.preconnect = (m, p) => {
			typeof m == "string" &&
				(p
					? ((p = p.crossOrigin),
						(p =
							typeof p == "string"
								? p === "use-credentials"
									? p
									: ""
								: void 0))
					: (p = null),
				i.d.C(m, p));
		}),
		(et.prefetchDNS = (m) => {
			typeof m == "string" && i.d.D(m);
		}),
		(et.preinit = (m, p) => {
			if (typeof m == "string" && p && typeof p.as == "string") {
				var b = p.as,
					_ = h(b, p.crossOrigin),
					w = typeof p.integrity == "string" ? p.integrity : void 0,
					j = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
				b === "style"
					? i.d.S(m, typeof p.precedence == "string" ? p.precedence : void 0, {
							crossOrigin: _,
							integrity: w,
							fetchPriority: j,
						})
					: b === "script" &&
						i.d.X(m, {
							crossOrigin: _,
							integrity: w,
							fetchPriority: j,
							nonce: typeof p.nonce == "string" ? p.nonce : void 0,
						});
			}
		}),
		(et.preinitModule = (m, p) => {
			if (typeof m == "string")
				if (typeof p == "object" && p !== null) {
					if (p.as == null || p.as === "script") {
						var b = h(p.as, p.crossOrigin);
						i.d.M(m, {
							crossOrigin: b,
							integrity: typeof p.integrity == "string" ? p.integrity : void 0,
							nonce: typeof p.nonce == "string" ? p.nonce : void 0,
						});
					}
				} else p == null && i.d.M(m);
		}),
		(et.preload = (m, p) => {
			if (
				typeof m == "string" &&
				typeof p == "object" &&
				p !== null &&
				typeof p.as == "string"
			) {
				var b = p.as,
					_ = h(b, p.crossOrigin);
				i.d.L(m, b, {
					crossOrigin: _,
					integrity: typeof p.integrity == "string" ? p.integrity : void 0,
					nonce: typeof p.nonce == "string" ? p.nonce : void 0,
					type: typeof p.type == "string" ? p.type : void 0,
					fetchPriority:
						typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
					referrerPolicy:
						typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
					imageSrcSet:
						typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
					imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
					media: typeof p.media == "string" ? p.media : void 0,
				});
			}
		}),
		(et.preloadModule = (m, p) => {
			if (typeof m == "string")
				if (p) {
					var b = h(p.as, p.crossOrigin);
					i.d.m(m, {
						as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
						crossOrigin: b,
						integrity: typeof p.integrity == "string" ? p.integrity : void 0,
					});
				} else i.d.m(m);
		}),
		(et.requestFormReset = (m) => {
			i.d.r(m);
		}),
		(et.unstable_batchedUpdates = (m, p) => m(p)),
		(et.useFormState = (m, p, b) => d.H.useFormState(m, p, b)),
		(et.useFormStatus = () => d.H.useHostTransitionStatus()),
		(et.version = "19.1.0"),
		et
	);
}
var rv;
function Jo() {
	if (rv) return To.exports;
	rv = 1;
	function u() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
			} catch (l) {
				console.error(l);
			}
	}
	return u(), (To.exports = _g()), To.exports;
} /**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sv;
function xg() {
	if (sv) return oi;
	sv = 1;
	var u = bg(),
		l = xi(),
		r = Jo();
	function i(e) {
		var t = "https://react.dev/errors/" + e;
		if (1 < arguments.length) {
			t += "?args[]=" + encodeURIComponent(arguments[1]);
			for (var n = 2; n < arguments.length; n++)
				t += "&args[]=" + encodeURIComponent(arguments[n]);
		}
		return (
			"Minified React error #" +
			e +
			"; visit " +
			t +
			" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
		);
	}
	function c(e) {
		return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
	}
	function f(e) {
		var t = e,
			n = e;
		if (e.alternate) for (; t.return; ) t = t.return;
		else {
			e = t;
			do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
			while (e);
		}
		return t.tag === 3 ? n : null;
	}
	function d(e) {
		if (e.tag === 13) {
			var t = e.memoizedState;
			if (
				(t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
				t !== null)
			)
				return t.dehydrated;
		}
		return null;
	}
	function h(e) {
		if (f(e) !== e) throw Error(i(188));
	}
	function m(e) {
		var t = e.alternate;
		if (!t) {
			if (((t = f(e)), t === null)) throw Error(i(188));
			return t !== e ? null : e;
		}
		for (var n = e, a = t; ; ) {
			var s = n.return;
			if (s === null) break;
			var o = s.alternate;
			if (o === null) {
				if (((a = s.return), a !== null)) {
					n = a;
					continue;
				}
				break;
			}
			if (s.child === o.child) {
				for (o = s.child; o; ) {
					if (o === n) return h(s), e;
					if (o === a) return h(s), t;
					o = o.sibling;
				}
				throw Error(i(188));
			}
			if (n.return !== a.return) (n = s), (a = o);
			else {
				for (var v = !1, g = s.child; g; ) {
					if (g === n) {
						(v = !0), (n = s), (a = o);
						break;
					}
					if (g === a) {
						(v = !0), (a = s), (n = o);
						break;
					}
					g = g.sibling;
				}
				if (!v) {
					for (g = o.child; g; ) {
						if (g === n) {
							(v = !0), (n = o), (a = s);
							break;
						}
						if (g === a) {
							(v = !0), (a = o), (n = s);
							break;
						}
						g = g.sibling;
					}
					if (!v) throw Error(i(189));
				}
			}
			if (n.alternate !== a) throw Error(i(190));
		}
		if (n.tag !== 3) throw Error(i(188));
		return n.stateNode.current === n ? e : t;
	}
	function p(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e;
		for (e = e.child; e !== null; ) {
			if (((t = p(e)), t !== null)) return t;
			e = e.sibling;
		}
		return null;
	}
	var b = Object.assign,
		_ = Symbol.for("react.element"),
		w = Symbol.for("react.transitional.element"),
		j = Symbol.for("react.portal"),
		M = Symbol.for("react.fragment"),
		B = Symbol.for("react.strict_mode"),
		D = Symbol.for("react.profiler"),
		K = Symbol.for("react.provider"),
		ee = Symbol.for("react.consumer"),
		G = Symbol.for("react.context"),
		P = Symbol.for("react.forward_ref"),
		Z = Symbol.for("react.suspense"),
		se = Symbol.for("react.suspense_list"),
		ge = Symbol.for("react.memo"),
		Ye = Symbol.for("react.lazy"),
		Be = Symbol.for("react.activity"),
		lt = Symbol.for("react.memo_cache_sentinel"),
		ae = Symbol.iterator;
	function J(e) {
		return e === null || typeof e != "object"
			? null
			: ((e = (ae && e[ae]) || e["@@iterator"]),
				typeof e == "function" ? e : null);
	}
	var fe = Symbol.for("react.client.reference");
	function Q(e) {
		if (e == null) return null;
		if (typeof e == "function")
			return e.$$typeof === fe ? null : e.displayName || e.name || null;
		if (typeof e == "string") return e;
		switch (e) {
			case M:
				return "Fragment";
			case D:
				return "Profiler";
			case B:
				return "StrictMode";
			case Z:
				return "Suspense";
			case se:
				return "SuspenseList";
			case Be:
				return "Activity";
		}
		if (typeof e == "object")
			switch (e.$$typeof) {
				case j:
					return "Portal";
				case G:
					return (e.displayName || "Context") + ".Provider";
				case ee:
					return (e._context.displayName || "Context") + ".Consumer";
				case P: {
					var t = e.render;
					return (
						(e = e.displayName),
						e ||
							((e = t.displayName || t.name || ""),
							(e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
						e
					);
				}
				case ge:
					return (
						(t = e.displayName || null), t !== null ? t : Q(e.type) || "Memo"
					);
				case Ye:
					(t = e._payload), (e = e._init);
					try {
						return Q(e(t));
					} catch {}
			}
		return null;
	}
	var Y = Array.isArray,
		N = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		T = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		H = { pending: !1, data: null, method: null, action: null },
		te = [],
		S = -1;
	function z(e) {
		return { current: e };
	}
	function V(e) {
		0 > S || ((e.current = te[S]), (te[S] = null), S--);
	}
	function $(e, t) {
		S++, (te[S] = e.current), (e.current = t);
	}
	var I = z(null),
		me = z(null),
		re = z(null),
		nt = z(null);
	function Re(e, t) {
		switch (($(re, t), $(me, e), $(I, null), t.nodeType)) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? jh(e) : 0;
				break;
			default:
				if (((e = t.tagName), (t = t.namespaceURI)))
					(t = jh(t)), (e = Ah(t, e));
				else
					switch (e) {
						case "svg":
							e = 1;
							break;
						case "math":
							e = 2;
							break;
						default:
							e = 0;
					}
		}
		V(I), $(I, e);
	}
	function on() {
		V(I), V(me), V(re);
	}
	function ls(e) {
		e.memoizedState !== null && $(nt, e);
		var t = I.current,
			n = Ah(t, e.type);
		t !== n && ($(me, e), $(I, n));
	}
	function Ti(e) {
		me.current === e && (V(I), V(me)),
			nt.current === e && (V(nt), (ai._currentValue = H));
	}
	var is = Object.prototype.hasOwnProperty,
		rs = u.unstable_scheduleCallback,
		ss = u.unstable_cancelCallback,
		Vp = u.unstable_shouldYield,
		Xp = u.unstable_requestPaint,
		qt = u.unstable_now,
		Kp = u.unstable_getCurrentPriorityLevel,
		rc = u.unstable_ImmediatePriority,
		sc = u.unstable_UserBlockingPriority,
		Oi = u.unstable_NormalPriority,
		Zp = u.unstable_LowPriority,
		uc = u.unstable_IdlePriority,
		Jp = u.log,
		Pp = u.unstable_setDisableYieldValue,
		fl = null,
		ft = null;
	function cn(e) {
		if (
			(typeof Jp == "function" && Pp(e),
			ft && typeof ft.setStrictMode == "function")
		)
			try {
				ft.setStrictMode(fl, e);
			} catch {}
	}
	var dt = Math.clz32 ? Math.clz32 : Ip,
		Wp = Math.log,
		Fp = Math.LN2;
	function Ip(e) {
		return (e >>>= 0), e === 0 ? 32 : (31 - ((Wp(e) / Fp) | 0)) | 0;
	}
	var ji = 256,
		Ai = 4194304;
	function Yn(e) {
		var t = e & 42;
		if (t !== 0) return t;
		switch (e & -e) {
			case 1:
				return 1;
			case 2:
				return 2;
			case 4:
				return 4;
			case 8:
				return 8;
			case 16:
				return 16;
			case 32:
				return 32;
			case 64:
				return 64;
			case 128:
				return 128;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return e & 4194048;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return e & 62914560;
			case 67108864:
				return 67108864;
			case 134217728:
				return 134217728;
			case 268435456:
				return 268435456;
			case 536870912:
				return 536870912;
			case 1073741824:
				return 0;
			default:
				return e;
		}
	}
	function Ri(e, t, n) {
		var a = e.pendingLanes;
		if (a === 0) return 0;
		var s = 0,
			o = e.suspendedLanes,
			v = e.pingedLanes;
		e = e.warmLanes;
		var g = a & 134217727;
		return (
			g !== 0
				? ((a = g & ~o),
					a !== 0
						? (s = Yn(a))
						: ((v &= g),
							v !== 0
								? (s = Yn(v))
								: n || ((n = g & ~e), n !== 0 && (s = Yn(n)))))
				: ((g = a & ~o),
					g !== 0
						? (s = Yn(g))
						: v !== 0
							? (s = Yn(v))
							: n || ((n = a & ~e), n !== 0 && (s = Yn(n)))),
			s === 0
				? 0
				: t !== 0 &&
						t !== s &&
						(t & o) === 0 &&
						((o = s & -s),
						(n = t & -t),
						o >= n || (o === 32 && (n & 4194048) !== 0))
					? t
					: s
		);
	}
	function dl(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
	}
	function em(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64:
				return t + 250;
			case 16:
			case 32:
			case 128:
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
				return t + 5e3;
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return -1;
			case 67108864:
			case 134217728:
			case 268435456:
			case 536870912:
			case 1073741824:
				return -1;
			default:
				return -1;
		}
	}
	function oc() {
		var e = ji;
		return (ji <<= 1), (ji & 4194048) === 0 && (ji = 256), e;
	}
	function cc() {
		var e = Ai;
		return (Ai <<= 1), (Ai & 62914560) === 0 && (Ai = 4194304), e;
	}
	function us(e) {
		for (var t = [], n = 0; 31 > n; n++) t.push(e);
		return t;
	}
	function hl(e, t) {
		(e.pendingLanes |= t),
			t !== 268435456 &&
				((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
	}
	function tm(e, t, n, a, s, o) {
		var v = e.pendingLanes;
		(e.pendingLanes = n),
			(e.suspendedLanes = 0),
			(e.pingedLanes = 0),
			(e.warmLanes = 0),
			(e.expiredLanes &= n),
			(e.entangledLanes &= n),
			(e.errorRecoveryDisabledLanes &= n),
			(e.shellSuspendCounter = 0);
		var g = e.entanglements,
			x = e.expirationTimes,
			R = e.hiddenUpdates;
		for (n = v & ~n; 0 < n; ) {
			var k = 31 - dt(n),
				L = 1 << k;
			(g[k] = 0), (x[k] = -1);
			var C = R[k];
			if (C !== null)
				for (R[k] = null, k = 0; k < C.length; k++) {
					var U = C[k];
					U !== null && (U.lane &= -536870913);
				}
			n &= ~L;
		}
		a !== 0 && fc(e, a, 0),
			o !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= o & ~(v & ~t));
	}
	function fc(e, t, n) {
		(e.pendingLanes |= t), (e.suspendedLanes &= ~t);
		var a = 31 - dt(t);
		(e.entangledLanes |= t),
			(e.entanglements[a] = e.entanglements[a] | 1073741824 | (n & 4194090));
	}
	function dc(e, t) {
		var n = (e.entangledLanes |= t);
		for (e = e.entanglements; n; ) {
			var a = 31 - dt(n),
				s = 1 << a;
			(s & t) | (e[a] & t) && (e[a] |= t), (n &= ~s);
		}
	}
	function os(e) {
		switch (e) {
			case 2:
				e = 1;
				break;
			case 8:
				e = 4;
				break;
			case 32:
				e = 16;
				break;
			case 256:
			case 512:
			case 1024:
			case 2048:
			case 4096:
			case 8192:
			case 16384:
			case 32768:
			case 65536:
			case 131072:
			case 262144:
			case 524288:
			case 1048576:
			case 2097152:
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				e = 128;
				break;
			case 268435456:
				e = 134217728;
				break;
			default:
				e = 0;
		}
		return e;
	}
	function cs(e) {
		return (
			(e &= -e),
			2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
		);
	}
	function hc() {
		var e = T.p;
		return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Kh(e.type));
	}
	function nm(e, t) {
		var n = T.p;
		try {
			return (T.p = e), t();
		} finally {
			T.p = n;
		}
	}
	var fn = Math.random().toString(36).slice(2),
		Fe = "__reactFiber$" + fn,
		it = "__reactProps$" + fn,
		da = "__reactContainer$" + fn,
		fs = "__reactEvents$" + fn,
		am = "__reactListeners$" + fn,
		lm = "__reactHandles$" + fn,
		vc = "__reactResources$" + fn,
		vl = "__reactMarker$" + fn;
	function ds(e) {
		delete e[Fe], delete e[it], delete e[fs], delete e[am], delete e[lm];
	}
	function ha(e) {
		var t = e[Fe];
		if (t) return t;
		for (var n = e.parentNode; n; ) {
			if ((t = n[da] || n[Fe])) {
				if (
					((n = t.alternate),
					t.child !== null || (n !== null && n.child !== null))
				)
					for (e = Uh(e); e !== null; ) {
						if ((n = e[Fe])) return n;
						e = Uh(e);
					}
				return t;
			}
			(e = n), (n = e.parentNode);
		}
		return null;
	}
	function va(e) {
		if ((e = e[Fe] || e[da])) {
			var t = e.tag;
			if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
				return e;
		}
		return null;
	}
	function pl(e) {
		var t = e.tag;
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
		throw Error(i(33));
	}
	function pa(e) {
		var t = e[vc];
		return (
			t ||
				(t = e[vc] =
					{ hoistableStyles: new Map(), hoistableScripts: new Map() }),
			t
		);
	}
	function $e(e) {
		e[vl] = !0;
	}
	var pc = new Set(),
		mc = {};
	function $n(e, t) {
		ma(e, t), ma(e + "Capture", t);
	}
	function ma(e, t) {
		for (mc[e] = t, e = 0; e < t.length; e++) pc.add(t[e]);
	}
	var im =
			/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
		yc = {},
		gc = {};
	function rm(e) {
		return is.call(gc, e)
			? !0
			: is.call(yc, e)
				? !1
				: im.test(e)
					? (gc[e] = !0)
					: ((yc[e] = !0), !1);
	}
	function Ni(e, t, n) {
		if (rm(t))
			if (n === null) e.removeAttribute(t);
			else {
				switch (typeof n) {
					case "undefined":
					case "function":
					case "symbol":
						e.removeAttribute(t);
						return;
					case "boolean": {
						var a = t.toLowerCase().slice(0, 5);
						if (a !== "data-" && a !== "aria-") {
							e.removeAttribute(t);
							return;
						}
					}
				}
				e.setAttribute(t, "" + n);
			}
	}
	function Ci(e, t, n) {
		if (n === null) e.removeAttribute(t);
		else {
			switch (typeof n) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(t);
					return;
			}
			e.setAttribute(t, "" + n);
		}
	}
	function Qt(e, t, n, a) {
		if (a === null) e.removeAttribute(n);
		else {
			switch (typeof a) {
				case "undefined":
				case "function":
				case "symbol":
				case "boolean":
					e.removeAttribute(n);
					return;
			}
			e.setAttributeNS(t, n, "" + a);
		}
	}
	var hs, bc;
	function ya(e) {
		if (hs === void 0)
			try {
				throw Error();
			} catch (n) {
				var t = n.stack.trim().match(/\n( *(at )?)/);
				(hs = (t && t[1]) || ""),
					(bc =
						-1 <
						n.stack.indexOf(`
    at`)
							? " (<anonymous>)"
							: -1 < n.stack.indexOf("@")
								? "@unknown:0:0"
								: "");
			}
		return (
			`
` +
			hs +
			e +
			bc
		);
	}
	var vs = !1;
	function ps(e, t) {
		if (!e || vs) return "";
		vs = !0;
		var n = Error.prepareStackTrace;
		Error.prepareStackTrace = void 0;
		try {
			var a = {
				DetermineComponentFrameRoot: () => {
					try {
						if (t) {
							var L = () => {
								throw Error();
							};
							if (
								(Object.defineProperty(L.prototype, "props", {
									set: () => {
										throw Error();
									},
								}),
								typeof Reflect == "object" && Reflect.construct)
							) {
								try {
									Reflect.construct(L, []);
								} catch (U) {
									var C = U;
								}
								Reflect.construct(e, [], L);
							} else {
								try {
									L.call();
								} catch (U) {
									C = U;
								}
								e.call(L.prototype);
							}
						} else {
							try {
								throw Error();
							} catch (U) {
								C = U;
							}
							(L = e()) && typeof L.catch == "function" && L.catch(() => {});
						}
					} catch (U) {
						if (U && C && typeof U.stack == "string") return [U.stack, C.stack];
					}
					return [null, null];
				},
			};
			a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
			var s = Object.getOwnPropertyDescriptor(
				a.DetermineComponentFrameRoot,
				"name",
			);
			s &&
				s.configurable &&
				Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
					value: "DetermineComponentFrameRoot",
				});
			var o = a.DetermineComponentFrameRoot(),
				v = o[0],
				g = o[1];
			if (v && g) {
				var x = v.split(`
`),
					R = g.split(`
`);
				for (
					s = a = 0;
					a < x.length && !x[a].includes("DetermineComponentFrameRoot");
				)
					a++;
				for (; s < R.length && !R[s].includes("DetermineComponentFrameRoot"); )
					s++;
				if (a === x.length || s === R.length)
					for (
						a = x.length - 1, s = R.length - 1;
						1 <= a && 0 <= s && x[a] !== R[s];
					)
						s--;
				for (; 1 <= a && 0 <= s; a--, s--)
					if (x[a] !== R[s]) {
						if (a !== 1 || s !== 1)
							do
								if ((a--, s--, 0 > s || x[a] !== R[s])) {
									var k =
										`
` + x[a].replace(" at new ", " at ");
									return (
										e.displayName &&
											k.includes("<anonymous>") &&
											(k = k.replace("<anonymous>", e.displayName)),
										k
									);
								}
							while (1 <= a && 0 <= s);
						break;
					}
			}
		} finally {
			(vs = !1), (Error.prepareStackTrace = n);
		}
		return (n = e ? e.displayName || e.name : "") ? ya(n) : "";
	}
	function sm(e) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5:
				return ya(e.type);
			case 16:
				return ya("Lazy");
			case 13:
				return ya("Suspense");
			case 19:
				return ya("SuspenseList");
			case 0:
			case 15:
				return ps(e.type, !1);
			case 11:
				return ps(e.type.render, !1);
			case 1:
				return ps(e.type, !0);
			case 31:
				return ya("Activity");
			default:
				return "";
		}
	}
	function _c(e) {
		try {
			var t = "";
			do (t += sm(e)), (e = e.return);
			while (e);
			return t;
		} catch (n) {
			return (
				`
Error generating stack: ` +
				n.message +
				`
` +
				n.stack
			);
		}
	}
	function _t(e) {
		switch (typeof e) {
			case "bigint":
			case "boolean":
			case "number":
			case "string":
			case "undefined":
				return e;
			case "object":
				return e;
			default:
				return "";
		}
	}
	function xc(e) {
		var t = e.type;
		return (
			(e = e.nodeName) &&
			e.toLowerCase() === "input" &&
			(t === "checkbox" || t === "radio")
		);
	}
	function um(e) {
		var t = xc(e) ? "checked" : "value",
			n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
			a = "" + e[t];
		if (
			!Object.hasOwn(e, t) &&
			typeof n < "u" &&
			typeof n.get == "function" &&
			typeof n.set == "function"
		) {
			var s = n.get,
				o = n.set;
			return (
				Object.defineProperty(e, t, {
					configurable: !0,
					get: function () {
						return s.call(this);
					},
					set: function (v) {
						(a = "" + v), o.call(this, v);
					},
				}),
				Object.defineProperty(e, t, { enumerable: n.enumerable }),
				{
					getValue: () => a,
					setValue: (v) => {
						a = "" + v;
					},
					stopTracking: () => {
						(e._valueTracker = null), delete e[t];
					},
				}
			);
		}
	}
	function Ui(e) {
		e._valueTracker || (e._valueTracker = um(e));
	}
	function Sc(e) {
		if (!e) return !1;
		var t = e._valueTracker;
		if (!t) return !0;
		var n = t.getValue(),
			a = "";
		return (
			e && (a = xc(e) ? (e.checked ? "true" : "false") : e.value),
			(e = a),
			e !== n ? (t.setValue(e), !0) : !1
		);
	}
	function Mi(e) {
		if (
			((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
		)
			return null;
		try {
			return e.activeElement || e.body;
		} catch {
			return e.body;
		}
	}
	var om = /[\n"\\]/g;
	function xt(e) {
		return e.replace(om, (t) => "\\" + t.charCodeAt(0).toString(16) + " ");
	}
	function ms(e, t, n, a, s, o, v, g) {
		(e.name = ""),
			v != null &&
			typeof v != "function" &&
			typeof v != "symbol" &&
			typeof v != "boolean"
				? (e.type = v)
				: e.removeAttribute("type"),
			t != null
				? v === "number"
					? ((t === 0 && e.value === "") || e.value != t) &&
						(e.value = "" + _t(t))
					: e.value !== "" + _t(t) && (e.value = "" + _t(t))
				: (v !== "submit" && v !== "reset") || e.removeAttribute("value"),
			t != null
				? ys(e, v, _t(t))
				: n != null
					? ys(e, v, _t(n))
					: a != null && e.removeAttribute("value"),
			s == null && o != null && (e.defaultChecked = !!o),
			s != null &&
				(e.checked = s && typeof s != "function" && typeof s != "symbol"),
			g != null &&
			typeof g != "function" &&
			typeof g != "symbol" &&
			typeof g != "boolean"
				? (e.name = "" + _t(g))
				: e.removeAttribute("name");
	}
	function wc(e, t, n, a, s, o, v, g) {
		if (
			(o != null &&
				typeof o != "function" &&
				typeof o != "symbol" &&
				typeof o != "boolean" &&
				(e.type = o),
			t != null || n != null)
		) {
			if (!((o !== "submit" && o !== "reset") || t != null)) return;
			(n = n != null ? "" + _t(n) : ""),
				(t = t != null ? "" + _t(t) : n),
				g || t === e.value || (e.value = t),
				(e.defaultValue = t);
		}
		(a = a ?? s),
			(a = typeof a != "function" && typeof a != "symbol" && !!a),
			(e.checked = g ? e.checked : !!a),
			(e.defaultChecked = !!a),
			v != null &&
				typeof v != "function" &&
				typeof v != "symbol" &&
				typeof v != "boolean" &&
				(e.name = v);
	}
	function ys(e, t, n) {
		(t === "number" && Mi(e.ownerDocument) === e) ||
			e.defaultValue === "" + n ||
			(e.defaultValue = "" + n);
	}
	function ga(e, t, n, a) {
		if (((e = e.options), t)) {
			t = {};
			for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
			for (n = 0; n < e.length; n++)
				(s = Object.hasOwn(t, "$" + e[n].value)),
					e[n].selected !== s && (e[n].selected = s),
					s && a && (e[n].defaultSelected = !0);
		} else {
			for (n = "" + _t(n), t = null, s = 0; s < e.length; s++) {
				if (e[s].value === n) {
					(e[s].selected = !0), a && (e[s].defaultSelected = !0);
					return;
				}
				t !== null || e[s].disabled || (t = e[s]);
			}
			t !== null && (t.selected = !0);
		}
	}
	function Ec(e, t, n) {
		if (
			t != null &&
			((t = "" + _t(t)), t !== e.value && (e.value = t), n == null)
		) {
			e.defaultValue !== t && (e.defaultValue = t);
			return;
		}
		e.defaultValue = n != null ? "" + _t(n) : "";
	}
	function Tc(e, t, n, a) {
		if (t == null) {
			if (a != null) {
				if (n != null) throw Error(i(92));
				if (Y(a)) {
					if (1 < a.length) throw Error(i(93));
					a = a[0];
				}
				n = a;
			}
			n == null && (n = ""), (t = n);
		}
		(n = _t(t)),
			(e.defaultValue = n),
			(a = e.textContent),
			a === n && a !== "" && a !== null && (e.value = a);
	}
	function ba(e, t) {
		if (t) {
			var n = e.firstChild;
			if (n && n === e.lastChild && n.nodeType === 3) {
				n.nodeValue = t;
				return;
			}
		}
		e.textContent = t;
	}
	var cm = new Set(
		"animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
			" ",
		),
	);
	function Oc(e, t, n) {
		var a = t.indexOf("--") === 0;
		n == null || typeof n == "boolean" || n === ""
			? a
				? e.setProperty(t, "")
				: t === "float"
					? (e.cssFloat = "")
					: (e[t] = "")
			: a
				? e.setProperty(t, n)
				: typeof n != "number" || n === 0 || cm.has(t)
					? t === "float"
						? (e.cssFloat = n)
						: (e[t] = ("" + n).trim())
					: (e[t] = n + "px");
	}
	function jc(e, t, n) {
		if (t != null && typeof t != "object") throw Error(i(62));
		if (((e = e.style), n != null)) {
			for (var a in n)
				!Object.hasOwn(n, a) ||
					(t != null && Object.hasOwn(t, a)) ||
					(a.indexOf("--") === 0
						? e.setProperty(a, "")
						: a === "float"
							? (e.cssFloat = "")
							: (e[a] = ""));
			for (var s in t)
				(a = t[s]), Object.hasOwn(t, s) && n[s] !== a && Oc(e, s, a);
		} else for (var o in t) Object.hasOwn(t, o) && Oc(e, o, t[o]);
	}
	function gs(e) {
		if (e.indexOf("-") === -1) return !1;
		switch (e) {
			case "annotation-xml":
			case "color-profile":
			case "font-face":
			case "font-face-src":
			case "font-face-uri":
			case "font-face-format":
			case "font-face-name":
			case "missing-glyph":
				return !1;
			default:
				return !0;
		}
	}
	var fm = new Map([
			["acceptCharset", "accept-charset"],
			["htmlFor", "for"],
			["httpEquiv", "http-equiv"],
			["crossOrigin", "crossorigin"],
			["accentHeight", "accent-height"],
			["alignmentBaseline", "alignment-baseline"],
			["arabicForm", "arabic-form"],
			["baselineShift", "baseline-shift"],
			["capHeight", "cap-height"],
			["clipPath", "clip-path"],
			["clipRule", "clip-rule"],
			["colorInterpolation", "color-interpolation"],
			["colorInterpolationFilters", "color-interpolation-filters"],
			["colorProfile", "color-profile"],
			["colorRendering", "color-rendering"],
			["dominantBaseline", "dominant-baseline"],
			["enableBackground", "enable-background"],
			["fillOpacity", "fill-opacity"],
			["fillRule", "fill-rule"],
			["floodColor", "flood-color"],
			["floodOpacity", "flood-opacity"],
			["fontFamily", "font-family"],
			["fontSize", "font-size"],
			["fontSizeAdjust", "font-size-adjust"],
			["fontStretch", "font-stretch"],
			["fontStyle", "font-style"],
			["fontVariant", "font-variant"],
			["fontWeight", "font-weight"],
			["glyphName", "glyph-name"],
			["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
			["glyphOrientationVertical", "glyph-orientation-vertical"],
			["horizAdvX", "horiz-adv-x"],
			["horizOriginX", "horiz-origin-x"],
			["imageRendering", "image-rendering"],
			["letterSpacing", "letter-spacing"],
			["lightingColor", "lighting-color"],
			["markerEnd", "marker-end"],
			["markerMid", "marker-mid"],
			["markerStart", "marker-start"],
			["overlinePosition", "overline-position"],
			["overlineThickness", "overline-thickness"],
			["paintOrder", "paint-order"],
			["panose-1", "panose-1"],
			["pointerEvents", "pointer-events"],
			["renderingIntent", "rendering-intent"],
			["shapeRendering", "shape-rendering"],
			["stopColor", "stop-color"],
			["stopOpacity", "stop-opacity"],
			["strikethroughPosition", "strikethrough-position"],
			["strikethroughThickness", "strikethrough-thickness"],
			["strokeDasharray", "stroke-dasharray"],
			["strokeDashoffset", "stroke-dashoffset"],
			["strokeLinecap", "stroke-linecap"],
			["strokeLinejoin", "stroke-linejoin"],
			["strokeMiterlimit", "stroke-miterlimit"],
			["strokeOpacity", "stroke-opacity"],
			["strokeWidth", "stroke-width"],
			["textAnchor", "text-anchor"],
			["textDecoration", "text-decoration"],
			["textRendering", "text-rendering"],
			["transformOrigin", "transform-origin"],
			["underlinePosition", "underline-position"],
			["underlineThickness", "underline-thickness"],
			["unicodeBidi", "unicode-bidi"],
			["unicodeRange", "unicode-range"],
			["unitsPerEm", "units-per-em"],
			["vAlphabetic", "v-alphabetic"],
			["vHanging", "v-hanging"],
			["vIdeographic", "v-ideographic"],
			["vMathematical", "v-mathematical"],
			["vectorEffect", "vector-effect"],
			["vertAdvY", "vert-adv-y"],
			["vertOriginX", "vert-origin-x"],
			["vertOriginY", "vert-origin-y"],
			["wordSpacing", "word-spacing"],
			["writingMode", "writing-mode"],
			["xmlnsXlink", "xmlns:xlink"],
			["xHeight", "x-height"],
		]),
		dm =
			/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function Di(e) {
		return dm.test("" + e)
			? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
			: e;
	}
	var bs = null;
	function _s(e) {
		return (
			(e = e.target || e.srcElement || window),
			e.correspondingUseElement && (e = e.correspondingUseElement),
			e.nodeType === 3 ? e.parentNode : e
		);
	}
	var _a = null,
		xa = null;
	function Ac(e) {
		var t = va(e);
		if (t && (e = t.stateNode)) {
			var n = e[it] || null;
			switch (((e = t.stateNode), t.type)) {
				case "input":
					if (
						(ms(
							e,
							n.value,
							n.defaultValue,
							n.defaultValue,
							n.checked,
							n.defaultChecked,
							n.type,
							n.name,
						),
						(t = n.name),
						n.type === "radio" && t != null)
					) {
						for (n = e; n.parentNode; ) n = n.parentNode;
						for (
							n = n.querySelectorAll(
								'input[name="' + xt("" + t) + '"][type="radio"]',
							),
								t = 0;
							t < n.length;
							t++
						) {
							var a = n[t];
							if (a !== e && a.form === e.form) {
								var s = a[it] || null;
								if (!s) throw Error(i(90));
								ms(
									a,
									s.value,
									s.defaultValue,
									s.defaultValue,
									s.checked,
									s.defaultChecked,
									s.type,
									s.name,
								);
							}
						}
						for (t = 0; t < n.length; t++)
							(a = n[t]), a.form === e.form && Sc(a);
					}
					break;
				case "textarea":
					Ec(e, n.value, n.defaultValue);
					break;
				case "select":
					(t = n.value), t != null && ga(e, !!n.multiple, t, !1);
			}
		}
	}
	var xs = !1;
	function Rc(e, t, n) {
		if (xs) return e(t, n);
		xs = !0;
		try {
			var a = e(t);
			return a;
		} finally {
			if (
				((xs = !1),
				(_a !== null || xa !== null) &&
					(br(), _a && ((t = _a), (e = xa), (xa = _a = null), Ac(t), e)))
			)
				for (t = 0; t < e.length; t++) Ac(e[t]);
		}
	}
	function ml(e, t) {
		var n = e.stateNode;
		if (n === null) return null;
		var a = n[it] || null;
		if (a === null) return null;
		n = a[t];
		switch (t) {
			case "onClick":
			case "onClickCapture":
			case "onDoubleClick":
			case "onDoubleClickCapture":
			case "onMouseDown":
			case "onMouseDownCapture":
			case "onMouseMove":
			case "onMouseMoveCapture":
			case "onMouseUp":
			case "onMouseUpCapture":
			case "onMouseEnter":
				(a = !a.disabled) ||
					((e = e.type),
					(a = !(
						e === "button" ||
						e === "input" ||
						e === "select" ||
						e === "textarea"
					))),
					(e = !a);
				break;
			default:
				e = !1;
		}
		if (e) return null;
		if (n && typeof n != "function") throw Error(i(231, t, typeof n));
		return n;
	}
	var Vt = !(
			typeof window > "u" ||
			typeof window.document > "u" ||
			typeof window.document.createElement > "u"
		),
		Ss = !1;
	if (Vt)
		try {
			var yl = {};
			Object.defineProperty(yl, "passive", {
				get: () => {
					Ss = !0;
				},
			}),
				window.addEventListener("test", yl, yl),
				window.removeEventListener("test", yl, yl);
		} catch {
			Ss = !1;
		}
	var dn = null,
		ws = null,
		zi = null;
	function Nc() {
		if (zi) return zi;
		var e,
			t = ws,
			n = t.length,
			a,
			s = "value" in dn ? dn.value : dn.textContent,
			o = s.length;
		for (e = 0; e < n && t[e] === s[e]; e++);
		var v = n - e;
		for (a = 1; a <= v && t[n - a] === s[o - a]; a++);
		return (zi = s.slice(e, 1 < a ? 1 - a : void 0));
	}
	function ki(e) {
		var t = e.keyCode;
		return (
			"charCode" in e
				? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
				: (e = t),
			e === 10 && (e = 13),
			32 <= e || e === 13 ? e : 0
		);
	}
	function qi() {
		return !0;
	}
	function Cc() {
		return !1;
	}
	function rt(e) {
		function t(n, a, s, o, v) {
			(this._reactName = n),
				(this._targetInst = s),
				(this.type = a),
				(this.nativeEvent = o),
				(this.target = v),
				(this.currentTarget = null);
			for (var g in e)
				Object.hasOwn(e, g) && ((n = e[g]), (this[g] = n ? n(o) : o[g]));
			return (
				(this.isDefaultPrevented = (
					o.defaultPrevented != null
						? o.defaultPrevented
						: o.returnValue === !1
				)
					? qi
					: Cc),
				(this.isPropagationStopped = Cc),
				this
			);
		}
		return (
			b(t.prototype, {
				preventDefault: function () {
					this.defaultPrevented = !0;
					var n = this.nativeEvent;
					n &&
						(n.preventDefault
							? n.preventDefault()
							: typeof n.returnValue != "unknown" && (n.returnValue = !1),
						(this.isDefaultPrevented = qi));
				},
				stopPropagation: function () {
					var n = this.nativeEvent;
					n &&
						(n.stopPropagation
							? n.stopPropagation()
							: typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
						(this.isPropagationStopped = qi));
				},
				persist: () => {},
				isPersistent: qi,
			}),
			t
		);
	}
	var Qn = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: (e) => e.timeStamp || Date.now(),
			defaultPrevented: 0,
			isTrusted: 0,
		},
		Li = rt(Qn),
		gl = b({}, Qn, { view: 0, detail: 0 }),
		hm = rt(gl),
		Es,
		Ts,
		bl,
		Bi = b({}, gl, {
			screenX: 0,
			screenY: 0,
			clientX: 0,
			clientY: 0,
			pageX: 0,
			pageY: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			getModifierState: js,
			button: 0,
			buttons: 0,
			relatedTarget: (e) =>
				e.relatedTarget === void 0
					? e.fromElement === e.srcElement
						? e.toElement
						: e.fromElement
					: e.relatedTarget,
			movementX: (e) =>
				"movementX" in e
					? e.movementX
					: (e !== bl &&
							(bl && e.type === "mousemove"
								? ((Es = e.screenX - bl.screenX), (Ts = e.screenY - bl.screenY))
								: (Ts = Es = 0),
							(bl = e)),
						Es),
			movementY: (e) => ("movementY" in e ? e.movementY : Ts),
		}),
		Uc = rt(Bi),
		vm = b({}, Bi, { dataTransfer: 0 }),
		pm = rt(vm),
		mm = b({}, gl, { relatedTarget: 0 }),
		Os = rt(mm),
		ym = b({}, Qn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
		gm = rt(ym),
		bm = b({}, Qn, {
			clipboardData: (e) =>
				"clipboardData" in e ? e.clipboardData : window.clipboardData,
		}),
		_m = rt(bm),
		xm = b({}, Qn, { data: 0 }),
		Mc = rt(xm),
		Sm = {
			Esc: "Escape",
			Spacebar: " ",
			Left: "ArrowLeft",
			Up: "ArrowUp",
			Right: "ArrowRight",
			Down: "ArrowDown",
			Del: "Delete",
			Win: "OS",
			Menu: "ContextMenu",
			Apps: "ContextMenu",
			Scroll: "ScrollLock",
			MozPrintableKey: "Unidentified",
		},
		wm = {
			8: "Backspace",
			9: "Tab",
			12: "Clear",
			13: "Enter",
			16: "Shift",
			17: "Control",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Escape",
			32: " ",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "ArrowLeft",
			38: "ArrowUp",
			39: "ArrowRight",
			40: "ArrowDown",
			45: "Insert",
			46: "Delete",
			112: "F1",
			113: "F2",
			114: "F3",
			115: "F4",
			116: "F5",
			117: "F6",
			118: "F7",
			119: "F8",
			120: "F9",
			121: "F10",
			122: "F11",
			123: "F12",
			144: "NumLock",
			145: "ScrollLock",
			224: "Meta",
		},
		Em = {
			Alt: "altKey",
			Control: "ctrlKey",
			Meta: "metaKey",
			Shift: "shiftKey",
		};
	function Tm(e) {
		var t = this.nativeEvent;
		return t.getModifierState
			? t.getModifierState(e)
			: (e = Em[e])
				? !!t[e]
				: !1;
	}
	function js() {
		return Tm;
	}
	var Om = b({}, gl, {
			key: (e) => {
				if (e.key) {
					var t = Sm[e.key] || e.key;
					if (t !== "Unidentified") return t;
				}
				return e.type === "keypress"
					? ((e = ki(e)), e === 13 ? "Enter" : String.fromCharCode(e))
					: e.type === "keydown" || e.type === "keyup"
						? wm[e.keyCode] || "Unidentified"
						: "";
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: js,
			charCode: (e) => (e.type === "keypress" ? ki(e) : 0),
			keyCode: (e) =>
				e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0,
			which: (e) =>
				e.type === "keypress"
					? ki(e)
					: e.type === "keydown" || e.type === "keyup"
						? e.keyCode
						: 0,
		}),
		jm = rt(Om),
		Am = b({}, Bi, {
			pointerId: 0,
			width: 0,
			height: 0,
			pressure: 0,
			tangentialPressure: 0,
			tiltX: 0,
			tiltY: 0,
			twist: 0,
			pointerType: 0,
			isPrimary: 0,
		}),
		Dc = rt(Am),
		Rm = b({}, gl, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: js,
		}),
		Nm = rt(Rm),
		Cm = b({}, Qn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
		Um = rt(Cm),
		Mm = b({}, Bi, {
			deltaX: (e) =>
				"deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0,
			deltaY: (e) =>
				"deltaY" in e
					? e.deltaY
					: "wheelDeltaY" in e
						? -e.wheelDeltaY
						: "wheelDelta" in e
							? -e.wheelDelta
							: 0,
			deltaZ: 0,
			deltaMode: 0,
		}),
		Dm = rt(Mm),
		zm = b({}, Qn, { newState: 0, oldState: 0 }),
		km = rt(zm),
		qm = [9, 13, 27, 32],
		As = Vt && "CompositionEvent" in window,
		_l = null;
	Vt && "documentMode" in document && (_l = document.documentMode);
	var Lm = Vt && "TextEvent" in window && !_l,
		zc = Vt && (!As || (_l && 8 < _l && 11 >= _l)),
		kc = " ",
		qc = !1;
	function Lc(e, t) {
		switch (e) {
			case "keyup":
				return qm.indexOf(t.keyCode) !== -1;
			case "keydown":
				return t.keyCode !== 229;
			case "keypress":
			case "mousedown":
			case "focusout":
				return !0;
			default:
				return !1;
		}
	}
	function Bc(e) {
		return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
	}
	var Sa = !1;
	function Bm(e, t) {
		switch (e) {
			case "compositionend":
				return Bc(t);
			case "keypress":
				return t.which !== 32 ? null : ((qc = !0), kc);
			case "textInput":
				return (e = t.data), e === kc && qc ? null : e;
			default:
				return null;
		}
	}
	function Hm(e, t) {
		if (Sa)
			return e === "compositionend" || (!As && Lc(e, t))
				? ((e = Nc()), (zi = ws = dn = null), (Sa = !1), e)
				: null;
		switch (e) {
			case "paste":
				return null;
			case "keypress":
				if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
					if (t.char && 1 < t.char.length) return t.char;
					if (t.which) return String.fromCharCode(t.which);
				}
				return null;
			case "compositionend":
				return zc && t.locale !== "ko" ? null : t.data;
			default:
				return null;
		}
	}
	var Gm = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0,
	};
	function Hc(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return t === "input" ? !!Gm[e.type] : t === "textarea";
	}
	function Gc(e, t, n, a) {
		_a ? (xa ? xa.push(a) : (xa = [a])) : (_a = a),
			(t = Tr(t, "onChange")),
			0 < t.length &&
				((n = new Li("onChange", "change", null, n, a)),
				e.push({ event: n, listeners: t }));
	}
	var xl = null,
		Sl = null;
	function Ym(e) {
		Sh(e, 0);
	}
	function Hi(e) {
		var t = pl(e);
		if (Sc(t)) return e;
	}
	function Yc(e, t) {
		if (e === "change") return t;
	}
	var $c = !1;
	if (Vt) {
		var Rs;
		if (Vt) {
			var Ns = "oninput" in document;
			if (!Ns) {
				var Qc = document.createElement("div");
				Qc.setAttribute("oninput", "return;"),
					(Ns = typeof Qc.oninput == "function");
			}
			Rs = Ns;
		} else Rs = !1;
		$c = Rs && (!document.documentMode || 9 < document.documentMode);
	}
	function Vc() {
		xl && (xl.detachEvent("onpropertychange", Xc), (Sl = xl = null));
	}
	function Xc(e) {
		if (e.propertyName === "value" && Hi(Sl)) {
			var t = [];
			Gc(t, Sl, e, _s(e)), Rc(Ym, t);
		}
	}
	function $m(e, t, n) {
		e === "focusin"
			? (Vc(), (xl = t), (Sl = n), xl.attachEvent("onpropertychange", Xc))
			: e === "focusout" && Vc();
	}
	function Qm(e) {
		if (e === "selectionchange" || e === "keyup" || e === "keydown")
			return Hi(Sl);
	}
	function Vm(e, t) {
		if (e === "click") return Hi(t);
	}
	function Xm(e, t) {
		if (e === "input" || e === "change") return Hi(t);
	}
	function Km(e, t) {
		return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
	}
	var ht = typeof Object.is == "function" ? Object.is : Km;
	function wl(e, t) {
		if (ht(e, t)) return !0;
		if (
			typeof e != "object" ||
			e === null ||
			typeof t != "object" ||
			t === null
		)
			return !1;
		var n = Object.keys(e),
			a = Object.keys(t);
		if (n.length !== a.length) return !1;
		for (a = 0; a < n.length; a++) {
			var s = n[a];
			if (!is.call(t, s) || !ht(e[s], t[s])) return !1;
		}
		return !0;
	}
	function Kc(e) {
		for (; e && e.firstChild; ) e = e.firstChild;
		return e;
	}
	function Zc(e, t) {
		var n = Kc(e);
		e = 0;
		for (var a; n; ) {
			if (n.nodeType === 3) {
				if (((a = e + n.textContent.length), e <= t && a >= t))
					return { node: n, offset: t - e };
				e = a;
			}
			e: {
				for (; n; ) {
					if (n.nextSibling) {
						n = n.nextSibling;
						break e;
					}
					n = n.parentNode;
				}
				n = void 0;
			}
			n = Kc(n);
		}
	}
	function Jc(e, t) {
		return e && t
			? e === t
				? !0
				: e && e.nodeType === 3
					? !1
					: t && t.nodeType === 3
						? Jc(e, t.parentNode)
						: "contains" in e
							? e.contains(t)
							: e.compareDocumentPosition
								? !!(e.compareDocumentPosition(t) & 16)
								: !1
			: !1;
	}
	function Pc(e) {
		e =
			e != null &&
			e.ownerDocument != null &&
			e.ownerDocument.defaultView != null
				? e.ownerDocument.defaultView
				: window;
		for (var t = Mi(e.document); t instanceof e.HTMLIFrameElement; ) {
			try {
				var n = typeof t.contentWindow.location.href == "string";
			} catch {
				n = !1;
			}
			if (n) e = t.contentWindow;
			else break;
			t = Mi(e.document);
		}
		return t;
	}
	function Cs(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return (
			t &&
			((t === "input" &&
				(e.type === "text" ||
					e.type === "search" ||
					e.type === "tel" ||
					e.type === "url" ||
					e.type === "password")) ||
				t === "textarea" ||
				e.contentEditable === "true")
		);
	}
	var Zm = Vt && "documentMode" in document && 11 >= document.documentMode,
		wa = null,
		Us = null,
		El = null,
		Ms = !1;
	function Wc(e, t, n) {
		var a =
			n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
		Ms ||
			wa == null ||
			wa !== Mi(a) ||
			((a = wa),
			"selectionStart" in a && Cs(a)
				? (a = { start: a.selectionStart, end: a.selectionEnd })
				: ((a = (
						(a.ownerDocument && a.ownerDocument.defaultView) ||
						window
					).getSelection()),
					(a = {
						anchorNode: a.anchorNode,
						anchorOffset: a.anchorOffset,
						focusNode: a.focusNode,
						focusOffset: a.focusOffset,
					})),
			(El && wl(El, a)) ||
				((El = a),
				(a = Tr(Us, "onSelect")),
				0 < a.length &&
					((t = new Li("onSelect", "select", null, t, n)),
					e.push({ event: t, listeners: a }),
					(t.target = wa))));
	}
	function Vn(e, t) {
		var n = {};
		return (
			(n[e.toLowerCase()] = t.toLowerCase()),
			(n["Webkit" + e] = "webkit" + t),
			(n["Moz" + e] = "moz" + t),
			n
		);
	}
	var Ea = {
			animationend: Vn("Animation", "AnimationEnd"),
			animationiteration: Vn("Animation", "AnimationIteration"),
			animationstart: Vn("Animation", "AnimationStart"),
			transitionrun: Vn("Transition", "TransitionRun"),
			transitionstart: Vn("Transition", "TransitionStart"),
			transitioncancel: Vn("Transition", "TransitionCancel"),
			transitionend: Vn("Transition", "TransitionEnd"),
		},
		Ds = {},
		Fc = {};
	Vt &&
		((Fc = document.createElement("div").style),
		"AnimationEvent" in window ||
			(delete Ea.animationend.animation,
			delete Ea.animationiteration.animation,
			delete Ea.animationstart.animation),
		"TransitionEvent" in window || delete Ea.transitionend.transition);
	function Xn(e) {
		if (Ds[e]) return Ds[e];
		if (!Ea[e]) return e;
		var t = Ea[e],
			n;
		for (n in t) if (Object.hasOwn(t, n) && n in Fc) return (Ds[e] = t[n]);
		return e;
	}
	var Ic = Xn("animationend"),
		ef = Xn("animationiteration"),
		tf = Xn("animationstart"),
		Jm = Xn("transitionrun"),
		Pm = Xn("transitionstart"),
		Wm = Xn("transitioncancel"),
		nf = Xn("transitionend"),
		af = new Map(),
		zs =
			"abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
				" ",
			);
	zs.push("scrollEnd");
	function Ct(e, t) {
		af.set(e, t), $n(t, [e]);
	}
	var lf = new WeakMap();
	function St(e, t) {
		if (typeof e == "object" && e !== null) {
			var n = lf.get(e);
			return n !== void 0
				? n
				: ((t = { value: e, source: t, stack: _c(t) }), lf.set(e, t), t);
		}
		return { value: e, source: t, stack: _c(t) };
	}
	var wt = [],
		Ta = 0,
		ks = 0;
	function Gi() {
		for (var e = Ta, t = (ks = Ta = 0); t < e; ) {
			var n = wt[t];
			wt[t++] = null;
			var a = wt[t];
			wt[t++] = null;
			var s = wt[t];
			wt[t++] = null;
			var o = wt[t];
			if (((wt[t++] = null), a !== null && s !== null)) {
				var v = a.pending;
				v === null ? (s.next = s) : ((s.next = v.next), (v.next = s)),
					(a.pending = s);
			}
			o !== 0 && rf(n, s, o);
		}
	}
	function Yi(e, t, n, a) {
		(wt[Ta++] = e),
			(wt[Ta++] = t),
			(wt[Ta++] = n),
			(wt[Ta++] = a),
			(ks |= a),
			(e.lanes |= a),
			(e = e.alternate),
			e !== null && (e.lanes |= a);
	}
	function qs(e, t, n, a) {
		return Yi(e, t, n, a), $i(e);
	}
	function Oa(e, t) {
		return Yi(e, null, null, t), $i(e);
	}
	function rf(e, t, n) {
		e.lanes |= n;
		var a = e.alternate;
		a !== null && (a.lanes |= n);
		for (var s = !1, o = e.return; o !== null; )
			(o.childLanes |= n),
				(a = o.alternate),
				a !== null && (a.childLanes |= n),
				o.tag === 22 &&
					((e = o.stateNode), e === null || e._visibility & 1 || (s = !0)),
				(e = o),
				(o = o.return);
		return e.tag === 3
			? ((o = e.stateNode),
				s &&
					t !== null &&
					((s = 31 - dt(n)),
					(e = o.hiddenUpdates),
					(a = e[s]),
					a === null ? (e[s] = [t]) : a.push(t),
					(t.lane = n | 536870912)),
				o)
			: null;
	}
	function $i(e) {
		if (50 < Jl) throw ((Jl = 0), ($u = null), Error(i(185)));
		for (var t = e.return; t !== null; ) (e = t), (t = e.return);
		return e.tag === 3 ? e.stateNode : null;
	}
	var ja = {};
	function Fm(e, t, n, a) {
		(this.tag = e),
			(this.key = n),
			(this.sibling =
				this.child =
				this.return =
				this.stateNode =
				this.type =
				this.elementType =
					null),
			(this.index = 0),
			(this.refCleanup = this.ref = null),
			(this.pendingProps = t),
			(this.dependencies =
				this.memoizedState =
				this.updateQueue =
				this.memoizedProps =
					null),
			(this.mode = a),
			(this.subtreeFlags = this.flags = 0),
			(this.deletions = null),
			(this.childLanes = this.lanes = 0),
			(this.alternate = null);
	}
	function vt(e, t, n, a) {
		return new Fm(e, t, n, a);
	}
	function Ls(e) {
		return (e = e.prototype), !(!e || !e.isReactComponent);
	}
	function Xt(e, t) {
		var n = e.alternate;
		return (
			n === null
				? ((n = vt(e.tag, t, e.key, e.mode)),
					(n.elementType = e.elementType),
					(n.type = e.type),
					(n.stateNode = e.stateNode),
					(n.alternate = e),
					(e.alternate = n))
				: ((n.pendingProps = t),
					(n.type = e.type),
					(n.flags = 0),
					(n.subtreeFlags = 0),
					(n.deletions = null)),
			(n.flags = e.flags & 65011712),
			(n.childLanes = e.childLanes),
			(n.lanes = e.lanes),
			(n.child = e.child),
			(n.memoizedProps = e.memoizedProps),
			(n.memoizedState = e.memoizedState),
			(n.updateQueue = e.updateQueue),
			(t = e.dependencies),
			(n.dependencies =
				t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
			(n.sibling = e.sibling),
			(n.index = e.index),
			(n.ref = e.ref),
			(n.refCleanup = e.refCleanup),
			n
		);
	}
	function sf(e, t) {
		e.flags &= 65011714;
		var n = e.alternate;
		return (
			n === null
				? ((e.childLanes = 0),
					(e.lanes = t),
					(e.child = null),
					(e.subtreeFlags = 0),
					(e.memoizedProps = null),
					(e.memoizedState = null),
					(e.updateQueue = null),
					(e.dependencies = null),
					(e.stateNode = null))
				: ((e.childLanes = n.childLanes),
					(e.lanes = n.lanes),
					(e.child = n.child),
					(e.subtreeFlags = 0),
					(e.deletions = null),
					(e.memoizedProps = n.memoizedProps),
					(e.memoizedState = n.memoizedState),
					(e.updateQueue = n.updateQueue),
					(e.type = n.type),
					(t = n.dependencies),
					(e.dependencies =
						t === null
							? null
							: { lanes: t.lanes, firstContext: t.firstContext })),
			e
		);
	}
	function Qi(e, t, n, a, s, o) {
		var v = 0;
		if (((a = e), typeof e == "function")) Ls(e) && (v = 1);
		else if (typeof e == "string")
			v = eg(e, n, I.current)
				? 26
				: e === "html" || e === "head" || e === "body"
					? 27
					: 5;
		else
			e: switch (e) {
				case Be:
					return (e = vt(31, n, t, s)), (e.elementType = Be), (e.lanes = o), e;
				case M:
					return Kn(n.children, s, o, t);
				case B:
					(v = 8), (s |= 24);
					break;
				case D:
					return (
						(e = vt(12, n, t, s | 2)), (e.elementType = D), (e.lanes = o), e
					);
				case Z:
					return (e = vt(13, n, t, s)), (e.elementType = Z), (e.lanes = o), e;
				case se:
					return (e = vt(19, n, t, s)), (e.elementType = se), (e.lanes = o), e;
				default:
					if (typeof e == "object" && e !== null)
						switch (e.$$typeof) {
							case K:
							case G:
								v = 10;
								break e;
							case ee:
								v = 9;
								break e;
							case P:
								v = 11;
								break e;
							case ge:
								v = 14;
								break e;
							case Ye:
								(v = 16), (a = null);
								break e;
						}
					(v = 29),
						(n = Error(i(130, e === null ? "null" : typeof e, ""))),
						(a = null);
			}
		return (
			(t = vt(v, n, t, s)), (t.elementType = e), (t.type = a), (t.lanes = o), t
		);
	}
	function Kn(e, t, n, a) {
		return (e = vt(7, e, a, t)), (e.lanes = n), e;
	}
	function Bs(e, t, n) {
		return (e = vt(6, e, null, t)), (e.lanes = n), e;
	}
	function Hs(e, t, n) {
		return (
			(t = vt(4, e.children !== null ? e.children : [], e.key, t)),
			(t.lanes = n),
			(t.stateNode = {
				containerInfo: e.containerInfo,
				pendingChildren: null,
				implementation: e.implementation,
			}),
			t
		);
	}
	var Aa = [],
		Ra = 0,
		Vi = null,
		Xi = 0,
		Et = [],
		Tt = 0,
		Zn = null,
		Kt = 1,
		Zt = "";
	function Jn(e, t) {
		(Aa[Ra++] = Xi), (Aa[Ra++] = Vi), (Vi = e), (Xi = t);
	}
	function uf(e, t, n) {
		(Et[Tt++] = Kt), (Et[Tt++] = Zt), (Et[Tt++] = Zn), (Zn = e);
		var a = Kt;
		e = Zt;
		var s = 32 - dt(a) - 1;
		(a &= ~(1 << s)), (n += 1);
		var o = 32 - dt(t) + s;
		if (30 < o) {
			var v = s - (s % 5);
			(o = (a & ((1 << v) - 1)).toString(32)),
				(a >>= v),
				(s -= v),
				(Kt = (1 << (32 - dt(t) + s)) | (n << s) | a),
				(Zt = o + e);
		} else (Kt = (1 << o) | (n << s) | a), (Zt = e);
	}
	function Gs(e) {
		e.return !== null && (Jn(e, 1), uf(e, 1, 0));
	}
	function Ys(e) {
		for (; e === Vi; )
			(Vi = Aa[--Ra]), (Aa[Ra] = null), (Xi = Aa[--Ra]), (Aa[Ra] = null);
		for (; e === Zn; )
			(Zn = Et[--Tt]),
				(Et[Tt] = null),
				(Zt = Et[--Tt]),
				(Et[Tt] = null),
				(Kt = Et[--Tt]),
				(Et[Tt] = null);
	}
	var at = null,
		Ue = null,
		_e = !1,
		Pn = null,
		Lt = !1,
		$s = Error(i(519));
	function Wn(e) {
		var t = Error(i(418, ""));
		throw (jl(St(t, e)), $s);
	}
	function of(e) {
		var t = e.stateNode,
			n = e.type,
			a = e.memoizedProps;
		switch (((t[Fe] = e), (t[it] = a), n)) {
			case "dialog":
				ve("cancel", t), ve("close", t);
				break;
			case "iframe":
			case "object":
			case "embed":
				ve("load", t);
				break;
			case "video":
			case "audio":
				for (n = 0; n < Wl.length; n++) ve(Wl[n], t);
				break;
			case "source":
				ve("error", t);
				break;
			case "img":
			case "image":
			case "link":
				ve("error", t), ve("load", t);
				break;
			case "details":
				ve("toggle", t);
				break;
			case "input":
				ve("invalid", t),
					wc(
						t,
						a.value,
						a.defaultValue,
						a.checked,
						a.defaultChecked,
						a.type,
						a.name,
						!0,
					),
					Ui(t);
				break;
			case "select":
				ve("invalid", t);
				break;
			case "textarea":
				ve("invalid", t), Tc(t, a.value, a.defaultValue, a.children), Ui(t);
		}
		(n = a.children),
			(typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
			t.textContent === "" + n ||
			a.suppressHydrationWarning === !0 ||
			Oh(t.textContent, n)
				? (a.popover != null && (ve("beforetoggle", t), ve("toggle", t)),
					a.onScroll != null && ve("scroll", t),
					a.onScrollEnd != null && ve("scrollend", t),
					a.onClick != null && (t.onclick = Or),
					(t = !0))
				: (t = !1),
			t || Wn(e);
	}
	function cf(e) {
		for (at = e.return; at; )
			switch (at.tag) {
				case 5:
				case 13:
					Lt = !1;
					return;
				case 27:
				case 3:
					Lt = !0;
					return;
				default:
					at = at.return;
			}
	}
	function Tl(e) {
		if (e !== at) return !1;
		if (!_e) return cf(e), (_e = !0), !1;
		var t = e.tag,
			n;
		if (
			((n = t !== 3 && t !== 27) &&
				((n = t === 5) &&
					((n = e.type),
					(n =
						!(n !== "form" && n !== "button") || io(e.type, e.memoizedProps))),
				(n = !n)),
			n && Ue && Wn(e),
			cf(e),
			t === 13)
		) {
			if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
				throw Error(i(317));
			e: {
				for (e = e.nextSibling, t = 0; e; ) {
					if (e.nodeType === 8)
						if (((n = e.data), n === "/$")) {
							if (t === 0) {
								Ue = Mt(e.nextSibling);
								break e;
							}
							t--;
						} else (n !== "$" && n !== "$!" && n !== "$?") || t++;
					e = e.nextSibling;
				}
				Ue = null;
			}
		} else
			t === 27
				? ((t = Ue), An(e.type) ? ((e = oo), (oo = null), (Ue = e)) : (Ue = t))
				: (Ue = at ? Mt(e.stateNode.nextSibling) : null);
		return !0;
	}
	function Ol() {
		(Ue = at = null), (_e = !1);
	}
	function ff() {
		var e = Pn;
		return (
			e !== null &&
				(ot === null ? (ot = e) : ot.push.apply(ot, e), (Pn = null)),
			e
		);
	}
	function jl(e) {
		Pn === null ? (Pn = [e]) : Pn.push(e);
	}
	var Qs = z(null),
		Fn = null,
		Jt = null;
	function hn(e, t, n) {
		$(Qs, t._currentValue), (t._currentValue = n);
	}
	function Pt(e) {
		(e._currentValue = Qs.current), V(Qs);
	}
	function Vs(e, t, n) {
		for (; e !== null; ) {
			var a = e.alternate;
			if (
				((e.childLanes & t) !== t
					? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
					: a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
				e === n)
			)
				break;
			e = e.return;
		}
	}
	function Xs(e, t, n, a) {
		var s = e.child;
		for (s !== null && (s.return = e); s !== null; ) {
			var o = s.dependencies;
			if (o !== null) {
				var v = s.child;
				o = o.firstContext;
				e: for (; o !== null; ) {
					var g = o;
					o = s;
					for (var x = 0; x < t.length; x++)
						if (g.context === t[x]) {
							(o.lanes |= n),
								(g = o.alternate),
								g !== null && (g.lanes |= n),
								Vs(o.return, n, e),
								a || (v = null);
							break e;
						}
					o = g.next;
				}
			} else if (s.tag === 18) {
				if (((v = s.return), v === null)) throw Error(i(341));
				(v.lanes |= n),
					(o = v.alternate),
					o !== null && (o.lanes |= n),
					Vs(v, n, e),
					(v = null);
			} else v = s.child;
			if (v !== null) v.return = s;
			else
				for (v = s; v !== null; ) {
					if (v === e) {
						v = null;
						break;
					}
					if (((s = v.sibling), s !== null)) {
						(s.return = v.return), (v = s);
						break;
					}
					v = v.return;
				}
			s = v;
		}
	}
	function Al(e, t, n, a) {
		e = null;
		for (var s = t, o = !1; s !== null; ) {
			if (!o) {
				if ((s.flags & 524288) !== 0) o = !0;
				else if ((s.flags & 262144) !== 0) break;
			}
			if (s.tag === 10) {
				var v = s.alternate;
				if (v === null) throw Error(i(387));
				if (((v = v.memoizedProps), v !== null)) {
					var g = s.type;
					ht(s.pendingProps.value, v.value) ||
						(e !== null ? e.push(g) : (e = [g]));
				}
			} else if (s === nt.current) {
				if (((v = s.alternate), v === null)) throw Error(i(387));
				v.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
					(e !== null ? e.push(ai) : (e = [ai]));
			}
			s = s.return;
		}
		e !== null && Xs(t, e, n, a), (t.flags |= 262144);
	}
	function Ki(e) {
		for (e = e.firstContext; e !== null; ) {
			if (!ht(e.context._currentValue, e.memoizedValue)) return !0;
			e = e.next;
		}
		return !1;
	}
	function In(e) {
		(Fn = e),
			(Jt = null),
			(e = e.dependencies),
			e !== null && (e.firstContext = null);
	}
	function Ie(e) {
		return df(Fn, e);
	}
	function Zi(e, t) {
		return Fn === null && In(e), df(e, t);
	}
	function df(e, t) {
		var n = t._currentValue;
		if (((t = { context: t, memoizedValue: n, next: null }), Jt === null)) {
			if (e === null) throw Error(i(308));
			(Jt = t),
				(e.dependencies = { lanes: 0, firstContext: t }),
				(e.flags |= 524288);
		} else Jt = Jt.next = t;
		return n;
	}
	var Im =
			typeof AbortController < "u"
				? AbortController
				: function () {
						var e = [],
							t = (this.signal = {
								aborted: !1,
								addEventListener: (n, a) => {
									e.push(a);
								},
							});
						this.abort = () => {
							(t.aborted = !0), e.forEach((n) => n());
						};
					},
		ey = u.unstable_scheduleCallback,
		ty = u.unstable_NormalPriority,
		He = {
			$$typeof: G,
			Consumer: null,
			Provider: null,
			_currentValue: null,
			_currentValue2: null,
			_threadCount: 0,
		};
	function Ks() {
		return { controller: new Im(), data: new Map(), refCount: 0 };
	}
	function Rl(e) {
		e.refCount--,
			e.refCount === 0 &&
				ey(ty, () => {
					e.controller.abort();
				});
	}
	var Nl = null,
		Zs = 0,
		Na = 0,
		Ca = null;
	function ny(e, t) {
		if (Nl === null) {
			var n = (Nl = []);
			(Zs = 0),
				(Na = Pu()),
				(Ca = {
					status: "pending",
					value: void 0,
					then: (a) => {
						n.push(a);
					},
				});
		}
		return Zs++, t.then(hf, hf), t;
	}
	function hf() {
		if (--Zs === 0 && Nl !== null) {
			Ca !== null && (Ca.status = "fulfilled");
			var e = Nl;
			(Nl = null), (Na = 0), (Ca = null);
			for (var t = 0; t < e.length; t++) (0, e[t])();
		}
	}
	function ay(e, t) {
		var n = [],
			a = {
				status: "pending",
				value: null,
				reason: null,
				then: (s) => {
					n.push(s);
				},
			};
		return (
			e.then(
				() => {
					(a.status = "fulfilled"), (a.value = t);
					for (var s = 0; s < n.length; s++) (0, n[s])(t);
				},
				(s) => {
					for (a.status = "rejected", a.reason = s, s = 0; s < n.length; s++)
						(0, n[s])(void 0);
				},
			),
			a
		);
	}
	var vf = N.S;
	N.S = (e, t) => {
		typeof t == "object" &&
			t !== null &&
			typeof t.then == "function" &&
			ny(e, t),
			vf !== null && vf(e, t);
	};
	var ea = z(null);
	function Js() {
		var e = ea.current;
		return e !== null ? e : je.pooledCache;
	}
	function Ji(e, t) {
		t === null ? $(ea, ea.current) : $(ea, t.pool);
	}
	function pf() {
		var e = Js();
		return e === null ? null : { parent: He._currentValue, pool: e };
	}
	var Cl = Error(i(460)),
		mf = Error(i(474)),
		Pi = Error(i(542)),
		Ps = { then: () => {} };
	function yf(e) {
		return (e = e.status), e === "fulfilled" || e === "rejected";
	}
	function Wi() {}
	function gf(e, t, n) {
		switch (
			((n = e[n]),
			n === void 0 ? e.push(t) : n !== t && (t.then(Wi, Wi), (t = n)),
			t.status)
		) {
			case "fulfilled":
				return t.value;
			case "rejected":
				throw ((e = t.reason), _f(e), e);
			default:
				if (typeof t.status == "string") t.then(Wi, Wi);
				else {
					if (((e = je), e !== null && 100 < e.shellSuspendCounter))
						throw Error(i(482));
					(e = t),
						(e.status = "pending"),
						e.then(
							(a) => {
								if (t.status === "pending") {
									var s = t;
									(s.status = "fulfilled"), (s.value = a);
								}
							},
							(a) => {
								if (t.status === "pending") {
									var s = t;
									(s.status = "rejected"), (s.reason = a);
								}
							},
						);
				}
				switch (t.status) {
					case "fulfilled":
						return t.value;
					case "rejected":
						throw ((e = t.reason), _f(e), e);
				}
				throw ((Ul = t), Cl);
		}
	}
	var Ul = null;
	function bf() {
		if (Ul === null) throw Error(i(459));
		var e = Ul;
		return (Ul = null), e;
	}
	function _f(e) {
		if (e === Cl || e === Pi) throw Error(i(483));
	}
	var vn = !1;
	function Ws(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: { pending: null, lanes: 0, hiddenCallbacks: null },
			callbacks: null,
		};
	}
	function Fs(e, t) {
		(e = e.updateQueue),
			t.updateQueue === e &&
				(t.updateQueue = {
					baseState: e.baseState,
					firstBaseUpdate: e.firstBaseUpdate,
					lastBaseUpdate: e.lastBaseUpdate,
					shared: e.shared,
					callbacks: null,
				});
	}
	function pn(e) {
		return { lane: e, tag: 0, payload: null, callback: null, next: null };
	}
	function mn(e, t, n) {
		var a = e.updateQueue;
		if (a === null) return null;
		if (((a = a.shared), (xe & 2) !== 0)) {
			var s = a.pending;
			return (
				s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
				(a.pending = t),
				(t = $i(e)),
				rf(e, null, n),
				t
			);
		}
		return Yi(e, a, t, n), $i(e);
	}
	function Ml(e, t, n) {
		if (
			((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194048) !== 0))
		) {
			var a = t.lanes;
			(a &= e.pendingLanes), (n |= a), (t.lanes = n), dc(e, n);
		}
	}
	function Is(e, t) {
		var n = e.updateQueue,
			a = e.alternate;
		if (a !== null && ((a = a.updateQueue), n === a)) {
			var s = null,
				o = null;
			if (((n = n.firstBaseUpdate), n !== null)) {
				do {
					var v = {
						lane: n.lane,
						tag: n.tag,
						payload: n.payload,
						callback: null,
						next: null,
					};
					o === null ? (s = o = v) : (o = o.next = v), (n = n.next);
				} while (n !== null);
				o === null ? (s = o = t) : (o = o.next = t);
			} else s = o = t;
			(n = {
				baseState: a.baseState,
				firstBaseUpdate: s,
				lastBaseUpdate: o,
				shared: a.shared,
				callbacks: a.callbacks,
			}),
				(e.updateQueue = n);
			return;
		}
		(e = n.lastBaseUpdate),
			e === null ? (n.firstBaseUpdate = t) : (e.next = t),
			(n.lastBaseUpdate = t);
	}
	var eu = !1;
	function Dl() {
		if (eu) {
			var e = Ca;
			if (e !== null) throw e;
		}
	}
	function zl(e, t, n, a) {
		eu = !1;
		var s = e.updateQueue;
		vn = !1;
		var o = s.firstBaseUpdate,
			v = s.lastBaseUpdate,
			g = s.shared.pending;
		if (g !== null) {
			s.shared.pending = null;
			var x = g,
				R = x.next;
			(x.next = null), v === null ? (o = R) : (v.next = R), (v = x);
			var k = e.alternate;
			k !== null &&
				((k = k.updateQueue),
				(g = k.lastBaseUpdate),
				g !== v &&
					(g === null ? (k.firstBaseUpdate = R) : (g.next = R),
					(k.lastBaseUpdate = x)));
		}
		if (o !== null) {
			var L = s.baseState;
			(v = 0), (k = R = x = null), (g = o);
			do {
				var C = g.lane & -536870913,
					U = C !== g.lane;
				if (U ? (ye & C) === C : (a & C) === C) {
					C !== 0 && C === Na && (eu = !0),
						k !== null &&
							(k = k.next =
								{
									lane: 0,
									tag: g.tag,
									payload: g.payload,
									callback: null,
									next: null,
								});
					e: {
						var ie = e,
							ne = g;
						C = t;
						var Te = n;
						switch (ne.tag) {
							case 1:
								if (((ie = ne.payload), typeof ie == "function")) {
									L = ie.call(Te, L, C);
									break e;
								}
								L = ie;
								break e;
							case 3:
								ie.flags = (ie.flags & -65537) | 128;
							case 0:
								if (
									((ie = ne.payload),
									(C = typeof ie == "function" ? ie.call(Te, L, C) : ie),
									C == null)
								)
									break e;
								L = b({}, L, C);
								break e;
							case 2:
								vn = !0;
						}
					}
					(C = g.callback),
						C !== null &&
							((e.flags |= 64),
							U && (e.flags |= 8192),
							(U = s.callbacks),
							U === null ? (s.callbacks = [C]) : U.push(C));
				} else
					(U = {
						lane: C,
						tag: g.tag,
						payload: g.payload,
						callback: g.callback,
						next: null,
					}),
						k === null ? ((R = k = U), (x = L)) : (k = k.next = U),
						(v |= C);
				if (((g = g.next), g === null)) {
					if (((g = s.shared.pending), g === null)) break;
					(U = g),
						(g = U.next),
						(U.next = null),
						(s.lastBaseUpdate = U),
						(s.shared.pending = null);
				}
			} while (!0);
			k === null && (x = L),
				(s.baseState = x),
				(s.firstBaseUpdate = R),
				(s.lastBaseUpdate = k),
				o === null && (s.shared.lanes = 0),
				(En |= v),
				(e.lanes = v),
				(e.memoizedState = L);
		}
	}
	function xf(e, t) {
		if (typeof e != "function") throw Error(i(191, e));
		e.call(t);
	}
	function Sf(e, t) {
		var n = e.callbacks;
		if (n !== null)
			for (e.callbacks = null, e = 0; e < n.length; e++) xf(n[e], t);
	}
	var Ua = z(null),
		Fi = z(0);
	function wf(e, t) {
		(e = an), $(Fi, e), $(Ua, t), (an = e | t.baseLanes);
	}
	function tu() {
		$(Fi, an), $(Ua, Ua.current);
	}
	function nu() {
		(an = Fi.current), V(Ua), V(Fi);
	}
	var yn = 0,
		ce = null,
		we = null,
		ke = null,
		Ii = !1,
		Ma = !1,
		ta = !1,
		er = 0,
		kl = 0,
		Da = null,
		ly = 0;
	function De() {
		throw Error(i(321));
	}
	function au(e, t) {
		if (t === null) return !1;
		for (var n = 0; n < t.length && n < e.length; n++)
			if (!ht(e[n], t[n])) return !1;
		return !0;
	}
	function lu(e, t, n, a, s, o) {
		return (
			(yn = o),
			(ce = t),
			(t.memoizedState = null),
			(t.updateQueue = null),
			(t.lanes = 0),
			(N.H = e === null || e.memoizedState === null ? rd : sd),
			(ta = !1),
			(o = n(a, s)),
			(ta = !1),
			Ma && (o = Tf(t, n, a, s)),
			Ef(e),
			o
		);
	}
	function Ef(e) {
		N.H = rr;
		var t = we !== null && we.next !== null;
		if (((yn = 0), (ke = we = ce = null), (Ii = !1), (kl = 0), (Da = null), t))
			throw Error(i(300));
		e === null ||
			Qe ||
			((e = e.dependencies), e !== null && Ki(e) && (Qe = !0));
	}
	function Tf(e, t, n, a) {
		ce = e;
		var s = 0;
		do {
			if ((Ma && (Da = null), (kl = 0), (Ma = !1), 25 <= s))
				throw Error(i(301));
			if (((s += 1), (ke = we = null), e.updateQueue != null)) {
				var o = e.updateQueue;
				(o.lastEffect = null),
					(o.events = null),
					(o.stores = null),
					o.memoCache != null && (o.memoCache.index = 0);
			}
			(N.H = fy), (o = t(n, a));
		} while (Ma);
		return o;
	}
	function iy() {
		var e = N.H,
			t = e.useState()[0];
		return (
			(t = typeof t.then == "function" ? ql(t) : t),
			(e = e.useState()[0]),
			(we !== null ? we.memoizedState : null) !== e && (ce.flags |= 1024),
			t
		);
	}
	function iu() {
		var e = er !== 0;
		return (er = 0), e;
	}
	function ru(e, t, n) {
		(t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n);
	}
	function su(e) {
		if (Ii) {
			for (e = e.memoizedState; e !== null; ) {
				var t = e.queue;
				t !== null && (t.pending = null), (e = e.next);
			}
			Ii = !1;
		}
		(yn = 0), (ke = we = ce = null), (Ma = !1), (kl = er = 0), (Da = null);
	}
	function st() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null,
		};
		return ke === null ? (ce.memoizedState = ke = e) : (ke = ke.next = e), ke;
	}
	function qe() {
		if (we === null) {
			var e = ce.alternate;
			e = e !== null ? e.memoizedState : null;
		} else e = we.next;
		var t = ke === null ? ce.memoizedState : ke.next;
		if (t !== null) (ke = t), (we = e);
		else {
			if (e === null)
				throw ce.alternate === null ? Error(i(467)) : Error(i(310));
			(we = e),
				(e = {
					memoizedState: we.memoizedState,
					baseState: we.baseState,
					baseQueue: we.baseQueue,
					queue: we.queue,
					next: null,
				}),
				ke === null ? (ce.memoizedState = ke = e) : (ke = ke.next = e);
		}
		return ke;
	}
	function uu() {
		return { lastEffect: null, events: null, stores: null, memoCache: null };
	}
	function ql(e) {
		var t = kl;
		return (
			(kl += 1),
			Da === null && (Da = []),
			(e = gf(Da, e, t)),
			(t = ce),
			(ke === null ? t.memoizedState : ke.next) === null &&
				((t = t.alternate),
				(N.H = t === null || t.memoizedState === null ? rd : sd)),
			e
		);
	}
	function tr(e) {
		if (e !== null && typeof e == "object") {
			if (typeof e.then == "function") return ql(e);
			if (e.$$typeof === G) return Ie(e);
		}
		throw Error(i(438, String(e)));
	}
	function ou(e) {
		var t = null,
			n = ce.updateQueue;
		if ((n !== null && (t = n.memoCache), t == null)) {
			var a = ce.alternate;
			a !== null &&
				((a = a.updateQueue),
				a !== null &&
					((a = a.memoCache),
					a != null &&
						(t = {
							data: a.data.map((s) => s.slice()),
							index: 0,
						})));
		}
		if (
			(t == null && (t = { data: [], index: 0 }),
			n === null && ((n = uu()), (ce.updateQueue = n)),
			(n.memoCache = t),
			(n = t.data[t.index]),
			n === void 0)
		)
			for (n = t.data[t.index] = Array(e), a = 0; a < e; a++) n[a] = lt;
		return t.index++, n;
	}
	function Wt(e, t) {
		return typeof t == "function" ? t(e) : t;
	}
	function nr(e) {
		var t = qe();
		return cu(t, we, e);
	}
	function cu(e, t, n) {
		var a = e.queue;
		if (a === null) throw Error(i(311));
		a.lastRenderedReducer = n;
		var s = e.baseQueue,
			o = a.pending;
		if (o !== null) {
			if (s !== null) {
				var v = s.next;
				(s.next = o.next), (o.next = v);
			}
			(t.baseQueue = s = o), (a.pending = null);
		}
		if (((o = e.baseState), s === null)) e.memoizedState = o;
		else {
			t = s.next;
			var g = (v = null),
				x = null,
				R = t,
				k = !1;
			do {
				var L = R.lane & -536870913;
				if (L !== R.lane ? (ye & L) === L : (yn & L) === L) {
					var C = R.revertLane;
					if (C === 0)
						x !== null &&
							(x = x.next =
								{
									lane: 0,
									revertLane: 0,
									action: R.action,
									hasEagerState: R.hasEagerState,
									eagerState: R.eagerState,
									next: null,
								}),
							L === Na && (k = !0);
					else if ((yn & C) === C) {
						(R = R.next), C === Na && (k = !0);
						continue;
					} else
						(L = {
							lane: 0,
							revertLane: R.revertLane,
							action: R.action,
							hasEagerState: R.hasEagerState,
							eagerState: R.eagerState,
							next: null,
						}),
							x === null ? ((g = x = L), (v = o)) : (x = x.next = L),
							(ce.lanes |= C),
							(En |= C);
					(L = R.action),
						ta && n(o, L),
						(o = R.hasEagerState ? R.eagerState : n(o, L));
				} else
					(C = {
						lane: L,
						revertLane: R.revertLane,
						action: R.action,
						hasEagerState: R.hasEagerState,
						eagerState: R.eagerState,
						next: null,
					}),
						x === null ? ((g = x = C), (v = o)) : (x = x.next = C),
						(ce.lanes |= L),
						(En |= L);
				R = R.next;
			} while (R !== null && R !== t);
			if (
				(x === null ? (v = o) : (x.next = g),
				!ht(o, e.memoizedState) && ((Qe = !0), k && ((n = Ca), n !== null)))
			)
				throw n;
			(e.memoizedState = o),
				(e.baseState = v),
				(e.baseQueue = x),
				(a.lastRenderedState = o);
		}
		return s === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
	}
	function fu(e) {
		var t = qe(),
			n = t.queue;
		if (n === null) throw Error(i(311));
		n.lastRenderedReducer = e;
		var a = n.dispatch,
			s = n.pending,
			o = t.memoizedState;
		if (s !== null) {
			n.pending = null;
			var v = (s = s.next);
			do (o = e(o, v.action)), (v = v.next);
			while (v !== s);
			ht(o, t.memoizedState) || (Qe = !0),
				(t.memoizedState = o),
				t.baseQueue === null && (t.baseState = o),
				(n.lastRenderedState = o);
		}
		return [o, a];
	}
	function Of(e, t, n) {
		var a = ce,
			s = qe(),
			o = _e;
		if (o) {
			if (n === void 0) throw Error(i(407));
			n = n();
		} else n = t();
		var v = !ht((we || s).memoizedState, n);
		v && ((s.memoizedState = n), (Qe = !0)), (s = s.queue);
		var g = Rf.bind(null, a, s, e);
		if (
			(Ll(2048, 8, g, [e]),
			s.getSnapshot !== t || v || (ke !== null && ke.memoizedState.tag & 1))
		) {
			if (
				((a.flags |= 2048),
				za(9, ar(), Af.bind(null, a, s, n, t), null),
				je === null)
			)
				throw Error(i(349));
			o || (yn & 124) !== 0 || jf(a, t, n);
		}
		return n;
	}
	function jf(e, t, n) {
		(e.flags |= 16384),
			(e = { getSnapshot: t, value: n }),
			(t = ce.updateQueue),
			t === null
				? ((t = uu()), (ce.updateQueue = t), (t.stores = [e]))
				: ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
	}
	function Af(e, t, n, a) {
		(t.value = n), (t.getSnapshot = a), Nf(t) && Cf(e);
	}
	function Rf(e, t, n) {
		return n(() => {
			Nf(t) && Cf(e);
		});
	}
	function Nf(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !ht(e, n);
		} catch {
			return !0;
		}
	}
	function Cf(e) {
		var t = Oa(e, 2);
		t !== null && bt(t, e, 2);
	}
	function du(e) {
		var t = st();
		if (typeof e == "function") {
			var n = e;
			if (((e = n()), ta)) {
				cn(!0);
				try {
					n();
				} finally {
					cn(!1);
				}
			}
		}
		return (
			(t.memoizedState = t.baseState = e),
			(t.queue = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Wt,
				lastRenderedState: e,
			}),
			t
		);
	}
	function Uf(e, t, n, a) {
		return (e.baseState = n), cu(e, we, typeof a == "function" ? a : Wt);
	}
	function ry(e, t, n, a, s) {
		if (ir(e)) throw Error(i(485));
		if (((e = t.action), e !== null)) {
			var o = {
				payload: s,
				action: e,
				next: null,
				isTransition: !0,
				status: "pending",
				value: null,
				reason: null,
				listeners: [],
				then: (v) => {
					o.listeners.push(v);
				},
			};
			N.T !== null ? n(!0) : (o.isTransition = !1),
				a(o),
				(n = t.pending),
				n === null
					? ((o.next = t.pending = o), Mf(t, o))
					: ((o.next = n.next), (t.pending = n.next = o));
		}
	}
	function Mf(e, t) {
		var n = t.action,
			a = t.payload,
			s = e.state;
		if (t.isTransition) {
			var o = N.T,
				v = {};
			N.T = v;
			try {
				var g = n(s, a),
					x = N.S;
				x !== null && x(v, g), Df(e, t, g);
			} catch (R) {
				hu(e, t, R);
			} finally {
				N.T = o;
			}
		} else
			try {
				(o = n(s, a)), Df(e, t, o);
			} catch (R) {
				hu(e, t, R);
			}
	}
	function Df(e, t, n) {
		n !== null && typeof n == "object" && typeof n.then == "function"
			? n.then(
					(a) => {
						zf(e, t, a);
					},
					(a) => hu(e, t, a),
				)
			: zf(e, t, n);
	}
	function zf(e, t, n) {
		(t.status = "fulfilled"),
			(t.value = n),
			kf(t),
			(e.state = n),
			(t = e.pending),
			t !== null &&
				((n = t.next),
				n === t ? (e.pending = null) : ((n = n.next), (t.next = n), Mf(e, n)));
	}
	function hu(e, t, n) {
		var a = e.pending;
		if (((e.pending = null), a !== null)) {
			a = a.next;
			do (t.status = "rejected"), (t.reason = n), kf(t), (t = t.next);
			while (t !== a);
		}
		e.action = null;
	}
	function kf(e) {
		e = e.listeners;
		for (var t = 0; t < e.length; t++) (0, e[t])();
	}
	function qf(e, t) {
		return t;
	}
	function Lf(e, t) {
		if (_e) {
			var n = je.formState;
			if (n !== null) {
				e: {
					var a = ce;
					if (_e) {
						if (Ue) {
							t: {
								for (var s = Ue, o = Lt; s.nodeType !== 8; ) {
									if (!o) {
										s = null;
										break t;
									}
									if (((s = Mt(s.nextSibling)), s === null)) {
										s = null;
										break t;
									}
								}
								(o = s.data), (s = o === "F!" || o === "F" ? s : null);
							}
							if (s) {
								(Ue = Mt(s.nextSibling)), (a = s.data === "F!");
								break e;
							}
						}
						Wn(a);
					}
					a = !1;
				}
				a && (t = n[0]);
			}
		}
		return (
			(n = st()),
			(n.memoizedState = n.baseState = t),
			(a = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: qf,
				lastRenderedState: t,
			}),
			(n.queue = a),
			(n = ad.bind(null, ce, a)),
			(a.dispatch = n),
			(a = du(!1)),
			(o = gu.bind(null, ce, !1, a.queue)),
			(a = st()),
			(s = { state: t, dispatch: null, action: e, pending: null }),
			(a.queue = s),
			(n = ry.bind(null, ce, s, o, n)),
			(s.dispatch = n),
			(a.memoizedState = e),
			[t, n, !1]
		);
	}
	function Bf(e) {
		var t = qe();
		return Hf(t, we, e);
	}
	function Hf(e, t, n) {
		if (
			((t = cu(e, t, qf)[0]),
			(e = nr(Wt)[0]),
			typeof t == "object" && t !== null && typeof t.then == "function")
		)
			try {
				var a = ql(t);
			} catch (v) {
				throw v === Cl ? Pi : v;
			}
		else a = t;
		t = qe();
		var s = t.queue,
			o = s.dispatch;
		return (
			n !== t.memoizedState &&
				((ce.flags |= 2048), za(9, ar(), sy.bind(null, s, n), null)),
			[a, o, e]
		);
	}
	function sy(e, t) {
		e.action = t;
	}
	function Gf(e) {
		var t = qe(),
			n = we;
		if (n !== null) return Hf(t, n, e);
		qe(), (t = t.memoizedState), (n = qe());
		var a = n.queue.dispatch;
		return (n.memoizedState = e), [t, a, !1];
	}
	function za(e, t, n, a) {
		return (
			(e = { tag: e, create: n, deps: a, inst: t, next: null }),
			(t = ce.updateQueue),
			t === null && ((t = uu()), (ce.updateQueue = t)),
			(n = t.lastEffect),
			n === null
				? (t.lastEffect = e.next = e)
				: ((a = n.next), (n.next = e), (e.next = a), (t.lastEffect = e)),
			e
		);
	}
	function ar() {
		return { destroy: void 0, resource: void 0 };
	}
	function Yf() {
		return qe().memoizedState;
	}
	function lr(e, t, n, a) {
		var s = st();
		(a = a === void 0 ? null : a),
			(ce.flags |= e),
			(s.memoizedState = za(1 | t, ar(), n, a));
	}
	function Ll(e, t, n, a) {
		var s = qe();
		a = a === void 0 ? null : a;
		var o = s.memoizedState.inst;
		we !== null && a !== null && au(a, we.memoizedState.deps)
			? (s.memoizedState = za(t, o, n, a))
			: ((ce.flags |= e), (s.memoizedState = za(1 | t, o, n, a)));
	}
	function $f(e, t) {
		lr(8390656, 8, e, t);
	}
	function Qf(e, t) {
		Ll(2048, 8, e, t);
	}
	function Vf(e, t) {
		return Ll(4, 2, e, t);
	}
	function Xf(e, t) {
		return Ll(4, 4, e, t);
	}
	function Kf(e, t) {
		if (typeof t == "function") {
			e = e();
			var n = t(e);
			return () => {
				typeof n == "function" ? n() : t(null);
			};
		}
		if (t != null)
			return (
				(e = e()),
				(t.current = e),
				() => {
					t.current = null;
				}
			);
	}
	function Zf(e, t, n) {
		(n = n != null ? n.concat([e]) : null), Ll(4, 4, Kf.bind(null, t, e), n);
	}
	function vu() {}
	function Jf(e, t) {
		var n = qe();
		t = t === void 0 ? null : t;
		var a = n.memoizedState;
		return t !== null && au(t, a[1]) ? a[0] : ((n.memoizedState = [e, t]), e);
	}
	function Pf(e, t) {
		var n = qe();
		t = t === void 0 ? null : t;
		var a = n.memoizedState;
		if (t !== null && au(t, a[1])) return a[0];
		if (((a = e()), ta)) {
			cn(!0);
			try {
				e();
			} finally {
				cn(!1);
			}
		}
		return (n.memoizedState = [a, t]), a;
	}
	function pu(e, t, n) {
		return n === void 0 || (yn & 1073741824) !== 0
			? (e.memoizedState = t)
			: ((e.memoizedState = n), (e = Id()), (ce.lanes |= e), (En |= e), n);
	}
	function Wf(e, t, n, a) {
		return ht(n, t)
			? n
			: Ua.current !== null
				? ((e = pu(e, n, a)), ht(e, t) || (Qe = !0), e)
				: (yn & 42) === 0
					? ((Qe = !0), (e.memoizedState = n))
					: ((e = Id()), (ce.lanes |= e), (En |= e), t);
	}
	function Ff(e, t, n, a, s) {
		var o = T.p;
		T.p = o !== 0 && 8 > o ? o : 8;
		var v = N.T,
			g = {};
		(N.T = g), gu(e, !1, t, n);
		try {
			var x = s(),
				R = N.S;
			if (
				(R !== null && R(g, x),
				x !== null && typeof x == "object" && typeof x.then == "function")
			) {
				var k = ay(x, a);
				Bl(e, t, k, gt(e));
			} else Bl(e, t, a, gt(e));
		} catch (L) {
			Bl(e, t, { then: () => {}, status: "rejected", reason: L }, gt());
		} finally {
			(T.p = o), (N.T = v);
		}
	}
	function uy() {}
	function mu(e, t, n, a) {
		if (e.tag !== 5) throw Error(i(476));
		var s = If(e).queue;
		Ff(e, s, t, H, n === null ? uy : () => (ed(e), n(a)));
	}
	function If(e) {
		var t = e.memoizedState;
		if (t !== null) return t;
		t = {
			memoizedState: H,
			baseState: H,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Wt,
				lastRenderedState: H,
			},
			next: null,
		};
		var n = {};
		return (
			(t.next = {
				memoizedState: n,
				baseState: n,
				baseQueue: null,
				queue: {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: Wt,
					lastRenderedState: n,
				},
				next: null,
			}),
			(e.memoizedState = t),
			(e = e.alternate),
			e !== null && (e.memoizedState = t),
			t
		);
	}
	function ed(e) {
		var t = If(e).next.queue;
		Bl(e, t, {}, gt());
	}
	function yu() {
		return Ie(ai);
	}
	function td() {
		return qe().memoizedState;
	}
	function nd() {
		return qe().memoizedState;
	}
	function oy(e) {
		for (var t = e.return; t !== null; ) {
			switch (t.tag) {
				case 24:
				case 3: {
					var n = gt();
					e = pn(n);
					var a = mn(t, e, n);
					a !== null && (bt(a, t, n), Ml(a, t, n)),
						(t = { cache: Ks() }),
						(e.payload = t);
					return;
				}
			}
			t = t.return;
		}
	}
	function cy(e, t, n) {
		var a = gt();
		(n = {
			lane: a,
			revertLane: 0,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		}),
			ir(e)
				? ld(t, n)
				: ((n = qs(e, t, n, a)), n !== null && (bt(n, e, a), id(n, t, a)));
	}
	function ad(e, t, n) {
		var a = gt();
		Bl(e, t, n, a);
	}
	function Bl(e, t, n, a) {
		var s = {
			lane: a,
			revertLane: 0,
			action: n,
			hasEagerState: !1,
			eagerState: null,
			next: null,
		};
		if (ir(e)) ld(t, s);
		else {
			var o = e.alternate;
			if (
				e.lanes === 0 &&
				(o === null || o.lanes === 0) &&
				((o = t.lastRenderedReducer), o !== null)
			)
				try {
					var v = t.lastRenderedState,
						g = o(v, n);
					if (((s.hasEagerState = !0), (s.eagerState = g), ht(g, v)))
						return Yi(e, t, s, 0), je === null && Gi(), !1;
				} catch {
				} finally {
				}
			if (((n = qs(e, t, s, a)), n !== null))
				return bt(n, e, a), id(n, t, a), !0;
		}
		return !1;
	}
	function gu(e, t, n, a) {
		if (
			((a = {
				lane: 2,
				revertLane: Pu(),
				action: a,
				hasEagerState: !1,
				eagerState: null,
				next: null,
			}),
			ir(e))
		) {
			if (t) throw Error(i(479));
		} else (t = qs(e, n, a, 2)), t !== null && bt(t, e, 2);
	}
	function ir(e) {
		var t = e.alternate;
		return e === ce || (t !== null && t === ce);
	}
	function ld(e, t) {
		Ma = Ii = !0;
		var n = e.pending;
		n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
			(e.pending = t);
	}
	function id(e, t, n) {
		if ((n & 4194048) !== 0) {
			var a = t.lanes;
			(a &= e.pendingLanes), (n |= a), (t.lanes = n), dc(e, n);
		}
	}
	var rr = {
			readContext: Ie,
			use: tr,
			useCallback: De,
			useContext: De,
			useEffect: De,
			useImperativeHandle: De,
			useLayoutEffect: De,
			useInsertionEffect: De,
			useMemo: De,
			useReducer: De,
			useRef: De,
			useState: De,
			useDebugValue: De,
			useDeferredValue: De,
			useTransition: De,
			useSyncExternalStore: De,
			useId: De,
			useHostTransitionStatus: De,
			useFormState: De,
			useActionState: De,
			useOptimistic: De,
			useMemoCache: De,
			useCacheRefresh: De,
		},
		rd = {
			readContext: Ie,
			use: tr,
			useCallback: (e, t) => (
				(st().memoizedState = [e, t === void 0 ? null : t]), e
			),
			useContext: Ie,
			useEffect: $f,
			useImperativeHandle: (e, t, n) => {
				(n = n != null ? n.concat([e]) : null),
					lr(4194308, 4, Kf.bind(null, t, e), n);
			},
			useLayoutEffect: (e, t) => lr(4194308, 4, e, t),
			useInsertionEffect: (e, t) => {
				lr(4, 2, e, t);
			},
			useMemo: (e, t) => {
				var n = st();
				t = t === void 0 ? null : t;
				var a = e();
				if (ta) {
					cn(!0);
					try {
						e();
					} finally {
						cn(!1);
					}
				}
				return (n.memoizedState = [a, t]), a;
			},
			useReducer: (e, t, n) => {
				var a = st();
				if (n !== void 0) {
					var s = n(t);
					if (ta) {
						cn(!0);
						try {
							n(t);
						} finally {
							cn(!1);
						}
					}
				} else s = t;
				return (
					(a.memoizedState = a.baseState = s),
					(e = {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: e,
						lastRenderedState: s,
					}),
					(a.queue = e),
					(e = e.dispatch = cy.bind(null, ce, e)),
					[a.memoizedState, e]
				);
			},
			useRef: (e) => {
				var t = st();
				return (e = { current: e }), (t.memoizedState = e);
			},
			useState: (e) => {
				e = du(e);
				var t = e.queue,
					n = ad.bind(null, ce, t);
				return (t.dispatch = n), [e.memoizedState, n];
			},
			useDebugValue: vu,
			useDeferredValue: (e, t) => {
				var n = st();
				return pu(n, e, t);
			},
			useTransition: () => {
				var e = du(!1);
				return (
					(e = Ff.bind(null, ce, e.queue, !0, !1)),
					(st().memoizedState = e),
					[!1, e]
				);
			},
			useSyncExternalStore: (e, t, n) => {
				var a = ce,
					s = st();
				if (_e) {
					if (n === void 0) throw Error(i(407));
					n = n();
				} else {
					if (((n = t()), je === null)) throw Error(i(349));
					(ye & 124) !== 0 || jf(a, t, n);
				}
				s.memoizedState = n;
				var o = { value: n, getSnapshot: t };
				return (
					(s.queue = o),
					$f(Rf.bind(null, a, o, e), [e]),
					(a.flags |= 2048),
					za(9, ar(), Af.bind(null, a, o, n, t), null),
					n
				);
			},
			useId: () => {
				var e = st(),
					t = je.identifierPrefix;
				if (_e) {
					var n = Zt,
						a = Kt;
					(n = (a & ~(1 << (32 - dt(a) - 1))).toString(32) + n),
						(t = "«" + t + "R" + n),
						(n = er++),
						0 < n && (t += "H" + n.toString(32)),
						(t += "»");
				} else (n = ly++), (t = "«" + t + "r" + n.toString(32) + "»");
				return (e.memoizedState = t);
			},
			useHostTransitionStatus: yu,
			useFormState: Lf,
			useActionState: Lf,
			useOptimistic: (e) => {
				var t = st();
				t.memoizedState = t.baseState = e;
				var n = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: null,
					lastRenderedState: null,
				};
				return (
					(t.queue = n),
					(t = gu.bind(null, ce, !0, n)),
					(n.dispatch = t),
					[e, t]
				);
			},
			useMemoCache: ou,
			useCacheRefresh: () => (st().memoizedState = oy.bind(null, ce)),
		},
		sd = {
			readContext: Ie,
			use: tr,
			useCallback: Jf,
			useContext: Ie,
			useEffect: Qf,
			useImperativeHandle: Zf,
			useInsertionEffect: Vf,
			useLayoutEffect: Xf,
			useMemo: Pf,
			useReducer: nr,
			useRef: Yf,
			useState: () => nr(Wt),
			useDebugValue: vu,
			useDeferredValue: (e, t) => {
				var n = qe();
				return Wf(n, we.memoizedState, e, t);
			},
			useTransition: () => {
				var e = nr(Wt)[0],
					t = qe().memoizedState;
				return [typeof e == "boolean" ? e : ql(e), t];
			},
			useSyncExternalStore: Of,
			useId: td,
			useHostTransitionStatus: yu,
			useFormState: Bf,
			useActionState: Bf,
			useOptimistic: (e, t) => {
				var n = qe();
				return Uf(n, we, e, t);
			},
			useMemoCache: ou,
			useCacheRefresh: nd,
		},
		fy = {
			readContext: Ie,
			use: tr,
			useCallback: Jf,
			useContext: Ie,
			useEffect: Qf,
			useImperativeHandle: Zf,
			useInsertionEffect: Vf,
			useLayoutEffect: Xf,
			useMemo: Pf,
			useReducer: fu,
			useRef: Yf,
			useState: () => fu(Wt),
			useDebugValue: vu,
			useDeferredValue: (e, t) => {
				var n = qe();
				return we === null ? pu(n, e, t) : Wf(n, we.memoizedState, e, t);
			},
			useTransition: () => {
				var e = fu(Wt)[0],
					t = qe().memoizedState;
				return [typeof e == "boolean" ? e : ql(e), t];
			},
			useSyncExternalStore: Of,
			useId: td,
			useHostTransitionStatus: yu,
			useFormState: Gf,
			useActionState: Gf,
			useOptimistic: (e, t) => {
				var n = qe();
				return we !== null
					? Uf(n, we, e, t)
					: ((n.baseState = e), [e, n.queue.dispatch]);
			},
			useMemoCache: ou,
			useCacheRefresh: nd,
		},
		ka = null,
		Hl = 0;
	function sr(e) {
		var t = Hl;
		return (Hl += 1), ka === null && (ka = []), gf(ka, e, t);
	}
	function Gl(e, t) {
		(t = t.props.ref), (e.ref = t !== void 0 ? t : null);
	}
	function ur(e, t) {
		throw t.$$typeof === _
			? Error(i(525))
			: ((e = Object.prototype.toString.call(t)),
				Error(
					i(
						31,
						e === "[object Object]"
							? "object with keys {" + Object.keys(t).join(", ") + "}"
							: e,
					),
				));
	}
	function ud(e) {
		var t = e._init;
		return t(e._payload);
	}
	function od(e) {
		function t(O, E) {
			if (e) {
				var A = O.deletions;
				A === null ? ((O.deletions = [E]), (O.flags |= 16)) : A.push(E);
			}
		}
		function n(O, E) {
			if (!e) return null;
			for (; E !== null; ) t(O, E), (E = E.sibling);
			return null;
		}
		function a(O) {
			for (var E = new Map(); O !== null; )
				O.key !== null ? E.set(O.key, O) : E.set(O.index, O), (O = O.sibling);
			return E;
		}
		function s(O, E) {
			return (O = Xt(O, E)), (O.index = 0), (O.sibling = null), O;
		}
		function o(O, E, A) {
			return (
				(O.index = A),
				e
					? ((A = O.alternate),
						A !== null
							? ((A = A.index), A < E ? ((O.flags |= 67108866), E) : A)
							: ((O.flags |= 67108866), E))
					: ((O.flags |= 1048576), E)
			);
		}
		function v(O) {
			return e && O.alternate === null && (O.flags |= 67108866), O;
		}
		function g(O, E, A, q) {
			return E === null || E.tag !== 6
				? ((E = Bs(A, O.mode, q)), (E.return = O), E)
				: ((E = s(E, A)), (E.return = O), E);
		}
		function x(O, E, A, q) {
			var W = A.type;
			return W === M
				? k(O, E, A.props.children, q, A.key)
				: E !== null &&
						(E.elementType === W ||
							(typeof W == "object" &&
								W !== null &&
								W.$$typeof === Ye &&
								ud(W) === E.type))
					? ((E = s(E, A.props)), Gl(E, A), (E.return = O), E)
					: ((E = Qi(A.type, A.key, A.props, null, O.mode, q)),
						Gl(E, A),
						(E.return = O),
						E);
		}
		function R(O, E, A, q) {
			return E === null ||
				E.tag !== 4 ||
				E.stateNode.containerInfo !== A.containerInfo ||
				E.stateNode.implementation !== A.implementation
				? ((E = Hs(A, O.mode, q)), (E.return = O), E)
				: ((E = s(E, A.children || [])), (E.return = O), E);
		}
		function k(O, E, A, q, W) {
			return E === null || E.tag !== 7
				? ((E = Kn(A, O.mode, q, W)), (E.return = O), E)
				: ((E = s(E, A)), (E.return = O), E);
		}
		function L(O, E, A) {
			if (
				(typeof E == "string" && E !== "") ||
				typeof E == "number" ||
				typeof E == "bigint"
			)
				return (E = Bs("" + E, O.mode, A)), (E.return = O), E;
			if (typeof E == "object" && E !== null) {
				switch (E.$$typeof) {
					case w:
						return (
							(A = Qi(E.type, E.key, E.props, null, O.mode, A)),
							Gl(A, E),
							(A.return = O),
							A
						);
					case j:
						return (E = Hs(E, O.mode, A)), (E.return = O), E;
					case Ye: {
						var q = E._init;
						return (E = q(E._payload)), L(O, E, A);
					}
				}
				if (Y(E) || J(E))
					return (E = Kn(E, O.mode, A, null)), (E.return = O), E;
				if (typeof E.then == "function") return L(O, sr(E), A);
				if (E.$$typeof === G) return L(O, Zi(O, E), A);
				ur(O, E);
			}
			return null;
		}
		function C(O, E, A, q) {
			var W = E !== null ? E.key : null;
			if (
				(typeof A == "string" && A !== "") ||
				typeof A == "number" ||
				typeof A == "bigint"
			)
				return W !== null ? null : g(O, E, "" + A, q);
			if (typeof A == "object" && A !== null) {
				switch (A.$$typeof) {
					case w:
						return A.key === W ? x(O, E, A, q) : null;
					case j:
						return A.key === W ? R(O, E, A, q) : null;
					case Ye:
						return (W = A._init), (A = W(A._payload)), C(O, E, A, q);
				}
				if (Y(A) || J(A)) return W !== null ? null : k(O, E, A, q, null);
				if (typeof A.then == "function") return C(O, E, sr(A), q);
				if (A.$$typeof === G) return C(O, E, Zi(O, A), q);
				ur(O, A);
			}
			return null;
		}
		function U(O, E, A, q, W) {
			if (
				(typeof q == "string" && q !== "") ||
				typeof q == "number" ||
				typeof q == "bigint"
			)
				return (O = O.get(A) || null), g(E, O, "" + q, W);
			if (typeof q == "object" && q !== null) {
				switch (q.$$typeof) {
					case w:
						return (
							(O = O.get(q.key === null ? A : q.key) || null), x(E, O, q, W)
						);
					case j:
						return (
							(O = O.get(q.key === null ? A : q.key) || null), R(E, O, q, W)
						);
					case Ye: {
						var de = q._init;
						return (q = de(q._payload)), U(O, E, A, q, W);
					}
				}
				if (Y(q) || J(q)) return (O = O.get(A) || null), k(E, O, q, W, null);
				if (typeof q.then == "function") return U(O, E, A, sr(q), W);
				if (q.$$typeof === G) return U(O, E, A, Zi(E, q), W);
				ur(E, q);
			}
			return null;
		}
		function ie(O, E, A, q) {
			for (
				var W = null, de = null, F = E, le = (E = 0), Xe = null;
				F !== null && le < A.length;
				le++
			) {
				F.index > le ? ((Xe = F), (F = null)) : (Xe = F.sibling);
				var be = C(O, F, A[le], q);
				if (be === null) {
					F === null && (F = Xe);
					break;
				}
				e && F && be.alternate === null && t(O, F),
					(E = o(be, E, le)),
					de === null ? (W = be) : (de.sibling = be),
					(de = be),
					(F = Xe);
			}
			if (le === A.length) return n(O, F), _e && Jn(O, le), W;
			if (F === null) {
				for (; le < A.length; le++)
					(F = L(O, A[le], q)),
						F !== null &&
							((E = o(F, E, le)),
							de === null ? (W = F) : (de.sibling = F),
							(de = F));
				return _e && Jn(O, le), W;
			}
			for (F = a(F); le < A.length; le++)
				(Xe = U(F, O, le, A[le], q)),
					Xe !== null &&
						(e &&
							Xe.alternate !== null &&
							F.delete(Xe.key === null ? le : Xe.key),
						(E = o(Xe, E, le)),
						de === null ? (W = Xe) : (de.sibling = Xe),
						(de = Xe));
			return e && F.forEach((Mn) => t(O, Mn)), _e && Jn(O, le), W;
		}
		function ne(O, E, A, q) {
			if (A == null) throw Error(i(151));
			for (
				var W = null, de = null, F = E, le = (E = 0), Xe = null, be = A.next();
				F !== null && !be.done;
				le++, be = A.next()
			) {
				F.index > le ? ((Xe = F), (F = null)) : (Xe = F.sibling);
				var Mn = C(O, F, be.value, q);
				if (Mn === null) {
					F === null && (F = Xe);
					break;
				}
				e && F && Mn.alternate === null && t(O, F),
					(E = o(Mn, E, le)),
					de === null ? (W = Mn) : (de.sibling = Mn),
					(de = Mn),
					(F = Xe);
			}
			if (be.done) return n(O, F), _e && Jn(O, le), W;
			if (F === null) {
				for (; !be.done; le++, be = A.next())
					(be = L(O, be.value, q)),
						be !== null &&
							((E = o(be, E, le)),
							de === null ? (W = be) : (de.sibling = be),
							(de = be));
				return _e && Jn(O, le), W;
			}
			for (F = a(F); !be.done; le++, be = A.next())
				(be = U(F, O, le, be.value, q)),
					be !== null &&
						(e &&
							be.alternate !== null &&
							F.delete(be.key === null ? le : be.key),
						(E = o(be, E, le)),
						de === null ? (W = be) : (de.sibling = be),
						(de = be));
			return e && F.forEach((dg) => t(O, dg)), _e && Jn(O, le), W;
		}
		function Te(O, E, A, q) {
			if (
				(typeof A == "object" &&
					A !== null &&
					A.type === M &&
					A.key === null &&
					(A = A.props.children),
				typeof A == "object" && A !== null)
			) {
				switch (A.$$typeof) {
					case w:
						e: {
							for (var W = A.key; E !== null; ) {
								if (E.key === W) {
									if (((W = A.type), W === M)) {
										if (E.tag === 7) {
											n(O, E.sibling),
												(q = s(E, A.props.children)),
												(q.return = O),
												(O = q);
											break e;
										}
									} else if (
										E.elementType === W ||
										(typeof W == "object" &&
											W !== null &&
											W.$$typeof === Ye &&
											ud(W) === E.type)
									) {
										n(O, E.sibling),
											(q = s(E, A.props)),
											Gl(q, A),
											(q.return = O),
											(O = q);
										break e;
									}
									n(O, E);
									break;
								} else t(O, E);
								E = E.sibling;
							}
							A.type === M
								? ((q = Kn(A.props.children, O.mode, q, A.key)),
									(q.return = O),
									(O = q))
								: ((q = Qi(A.type, A.key, A.props, null, O.mode, q)),
									Gl(q, A),
									(q.return = O),
									(O = q));
						}
						return v(O);
					case j:
						e: {
							for (W = A.key; E !== null; ) {
								if (E.key === W)
									if (
										E.tag === 4 &&
										E.stateNode.containerInfo === A.containerInfo &&
										E.stateNode.implementation === A.implementation
									) {
										n(O, E.sibling),
											(q = s(E, A.children || [])),
											(q.return = O),
											(O = q);
										break e;
									} else {
										n(O, E);
										break;
									}
								else t(O, E);
								E = E.sibling;
							}
							(q = Hs(A, O.mode, q)), (q.return = O), (O = q);
						}
						return v(O);
					case Ye:
						return (W = A._init), (A = W(A._payload)), Te(O, E, A, q);
				}
				if (Y(A)) return ie(O, E, A, q);
				if (J(A)) {
					if (((W = J(A)), typeof W != "function")) throw Error(i(150));
					return (A = W.call(A)), ne(O, E, A, q);
				}
				if (typeof A.then == "function") return Te(O, E, sr(A), q);
				if (A.$$typeof === G) return Te(O, E, Zi(O, A), q);
				ur(O, A);
			}
			return (typeof A == "string" && A !== "") ||
				typeof A == "number" ||
				typeof A == "bigint"
				? ((A = "" + A),
					E !== null && E.tag === 6
						? (n(O, E.sibling), (q = s(E, A)), (q.return = O), (O = q))
						: (n(O, E), (q = Bs(A, O.mode, q)), (q.return = O), (O = q)),
					v(O))
				: n(O, E);
		}
		return (O, E, A, q) => {
			try {
				Hl = 0;
				var W = Te(O, E, A, q);
				return (ka = null), W;
			} catch (F) {
				if (F === Cl || F === Pi) throw F;
				var de = vt(29, F, null, O.mode);
				return (de.lanes = q), (de.return = O), de;
			} finally {
			}
		};
	}
	var qa = od(!0),
		cd = od(!1),
		Ot = z(null),
		Bt = null;
	function gn(e) {
		var t = e.alternate;
		$(Ge, Ge.current & 1),
			$(Ot, e),
			Bt === null &&
				(t === null || Ua.current !== null || t.memoizedState !== null) &&
				(Bt = e);
	}
	function fd(e) {
		if (e.tag === 22) {
			if (($(Ge, Ge.current), $(Ot, e), Bt === null)) {
				var t = e.alternate;
				t !== null && t.memoizedState !== null && (Bt = e);
			}
		} else bn();
	}
	function bn() {
		$(Ge, Ge.current), $(Ot, Ot.current);
	}
	function Ft(e) {
		V(Ot), Bt === e && (Bt = null), V(Ge);
	}
	var Ge = z(0);
	function or(e) {
		for (var t = e; t !== null; ) {
			if (t.tag === 13) {
				var n = t.memoizedState;
				if (
					n !== null &&
					((n = n.dehydrated), n === null || n.data === "$?" || uo(n))
				)
					return t;
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
				if ((t.flags & 128) !== 0) return t;
			} else if (t.child !== null) {
				(t.child.return = t), (t = t.child);
				continue;
			}
			if (t === e) break;
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return null;
				t = t.return;
			}
			(t.sibling.return = t.return), (t = t.sibling);
		}
		return null;
	}
	function bu(e, t, n, a) {
		(t = e.memoizedState),
			(n = n(a, t)),
			(n = n == null ? t : b({}, t, n)),
			(e.memoizedState = n),
			e.lanes === 0 && (e.updateQueue.baseState = n);
	}
	var _u = {
		enqueueSetState: (e, t, n) => {
			e = e._reactInternals;
			var a = gt(),
				s = pn(a);
			(s.payload = t),
				n != null && (s.callback = n),
				(t = mn(e, s, a)),
				t !== null && (bt(t, e, a), Ml(t, e, a));
		},
		enqueueReplaceState: (e, t, n) => {
			e = e._reactInternals;
			var a = gt(),
				s = pn(a);
			(s.tag = 1),
				(s.payload = t),
				n != null && (s.callback = n),
				(t = mn(e, s, a)),
				t !== null && (bt(t, e, a), Ml(t, e, a));
		},
		enqueueForceUpdate: (e, t) => {
			e = e._reactInternals;
			var n = gt(),
				a = pn(n);
			(a.tag = 2),
				t != null && (a.callback = t),
				(t = mn(e, a, n)),
				t !== null && (bt(t, e, n), Ml(t, e, n));
		},
	};
	function dd(e, t, n, a, s, o, v) {
		return (
			(e = e.stateNode),
			typeof e.shouldComponentUpdate == "function"
				? e.shouldComponentUpdate(a, o, v)
				: t.prototype && t.prototype.isPureReactComponent
					? !wl(n, a) || !wl(s, o)
					: !0
		);
	}
	function hd(e, t, n, a) {
		(e = t.state),
			typeof t.componentWillReceiveProps == "function" &&
				t.componentWillReceiveProps(n, a),
			typeof t.UNSAFE_componentWillReceiveProps == "function" &&
				t.UNSAFE_componentWillReceiveProps(n, a),
			t.state !== e && _u.enqueueReplaceState(t, t.state, null);
	}
	function na(e, t) {
		var n = t;
		if ("ref" in t) {
			n = {};
			for (var a in t) a !== "ref" && (n[a] = t[a]);
		}
		if ((e = e.defaultProps)) {
			n === t && (n = b({}, n));
			for (var s in e) n[s] === void 0 && (n[s] = e[s]);
		}
		return n;
	}
	var cr =
		typeof reportError == "function"
			? reportError
			: (e) => {
					if (
						typeof window == "object" &&
						typeof window.ErrorEvent == "function"
					) {
						var t = new window.ErrorEvent("error", {
							bubbles: !0,
							cancelable: !0,
							message:
								typeof e == "object" &&
								e !== null &&
								typeof e.message == "string"
									? String(e.message)
									: String(e),
							error: e,
						});
						if (!window.dispatchEvent(t)) return;
					} else if (
						typeof process == "object" &&
						typeof process.emit == "function"
					) {
						process.emit("uncaughtException", e);
						return;
					}
					console.error(e);
				};
	function vd(e) {
		cr(e);
	}
	function pd(e) {
		console.error(e);
	}
	function md(e) {
		cr(e);
	}
	function fr(e, t) {
		try {
			var n = e.onUncaughtError;
			n(t.value, { componentStack: t.stack });
		} catch (a) {
			setTimeout(() => {
				throw a;
			});
		}
	}
	function yd(e, t, n) {
		try {
			var a = e.onCaughtError;
			a(n.value, {
				componentStack: n.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null,
			});
		} catch (s) {
			setTimeout(() => {
				throw s;
			});
		}
	}
	function xu(e, t, n) {
		return (
			(n = pn(n)),
			(n.tag = 3),
			(n.payload = { element: null }),
			(n.callback = () => {
				fr(e, t);
			}),
			n
		);
	}
	function gd(e) {
		return (e = pn(e)), (e.tag = 3), e;
	}
	function bd(e, t, n, a) {
		var s = n.type.getDerivedStateFromError;
		if (typeof s == "function") {
			var o = a.value;
			(e.payload = () => s(o)),
				(e.callback = () => {
					yd(t, n, a);
				});
		}
		var v = n.stateNode;
		v !== null &&
			typeof v.componentDidCatch == "function" &&
			(e.callback = function () {
				yd(t, n, a),
					typeof s != "function" &&
						(Tn === null ? (Tn = new Set([this])) : Tn.add(this));
				var g = a.stack;
				this.componentDidCatch(a.value, {
					componentStack: g !== null ? g : "",
				});
			});
	}
	function dy(e, t, n, a, s) {
		if (
			((n.flags |= 32768),
			a !== null && typeof a == "object" && typeof a.then == "function")
		) {
			if (
				((t = n.alternate),
				t !== null && Al(t, n, s, !0),
				(n = Ot.current),
				n !== null)
			) {
				switch (n.tag) {
					case 13:
						return (
							Bt === null ? Vu() : n.alternate === null && Me === 0 && (Me = 3),
							(n.flags &= -257),
							(n.flags |= 65536),
							(n.lanes = s),
							a === Ps
								? (n.flags |= 16384)
								: ((t = n.updateQueue),
									t === null ? (n.updateQueue = new Set([a])) : t.add(a),
									Ku(e, a, s)),
							!1
						);
					case 22:
						return (
							(n.flags |= 65536),
							a === Ps
								? (n.flags |= 16384)
								: ((t = n.updateQueue),
									t === null
										? ((t = {
												transitions: null,
												markerInstances: null,
												retryQueue: new Set([a]),
											}),
											(n.updateQueue = t))
										: ((n = t.retryQueue),
											n === null ? (t.retryQueue = new Set([a])) : n.add(a)),
									Ku(e, a, s)),
							!1
						);
				}
				throw Error(i(435, n.tag));
			}
			return Ku(e, a, s), Vu(), !1;
		}
		if (_e)
			return (
				(t = Ot.current),
				t !== null
					? ((t.flags & 65536) === 0 && (t.flags |= 256),
						(t.flags |= 65536),
						(t.lanes = s),
						a !== $s && ((e = Error(i(422), { cause: a })), jl(St(e, n))))
					: (a !== $s && ((t = Error(i(423), { cause: a })), jl(St(t, n))),
						(e = e.current.alternate),
						(e.flags |= 65536),
						(s &= -s),
						(e.lanes |= s),
						(a = St(a, n)),
						(s = xu(e.stateNode, a, s)),
						Is(e, s),
						Me !== 4 && (Me = 2)),
				!1
			);
		var o = Error(i(520), { cause: a });
		if (
			((o = St(o, n)),
			Zl === null ? (Zl = [o]) : Zl.push(o),
			Me !== 4 && (Me = 2),
			t === null)
		)
			return !0;
		(a = St(a, n)), (n = t);
		do {
			switch (n.tag) {
				case 3:
					return (
						(n.flags |= 65536),
						(e = s & -s),
						(n.lanes |= e),
						(e = xu(n.stateNode, a, e)),
						Is(n, e),
						!1
					);
				case 1:
					if (
						((t = n.type),
						(o = n.stateNode),
						(n.flags & 128) === 0 &&
							(typeof t.getDerivedStateFromError == "function" ||
								(o !== null &&
									typeof o.componentDidCatch == "function" &&
									(Tn === null || !Tn.has(o)))))
					)
						return (
							(n.flags |= 65536),
							(s &= -s),
							(n.lanes |= s),
							(s = gd(s)),
							bd(s, e, n, a),
							Is(n, s),
							!1
						);
			}
			n = n.return;
		} while (n !== null);
		return !1;
	}
	var _d = Error(i(461)),
		Qe = !1;
	function Je(e, t, n, a) {
		t.child = e === null ? cd(t, null, n, a) : qa(t, e.child, n, a);
	}
	function xd(e, t, n, a, s) {
		n = n.render;
		var o = t.ref;
		if ("ref" in a) {
			var v = {};
			for (var g in a) g !== "ref" && (v[g] = a[g]);
		} else v = a;
		return (
			In(t),
			(a = lu(e, t, n, v, o, s)),
			(g = iu()),
			e !== null && !Qe
				? (ru(e, t, s), It(e, t, s))
				: (_e && g && Gs(t), (t.flags |= 1), Je(e, t, a, s), t.child)
		);
	}
	function Sd(e, t, n, a, s) {
		if (e === null) {
			var o = n.type;
			return typeof o == "function" &&
				!Ls(o) &&
				o.defaultProps === void 0 &&
				n.compare === null
				? ((t.tag = 15), (t.type = o), wd(e, t, o, a, s))
				: ((e = Qi(n.type, null, a, t, t.mode, s)),
					(e.ref = t.ref),
					(e.return = t),
					(t.child = e));
		}
		if (((o = e.child), !Ru(e, s))) {
			var v = o.memoizedProps;
			if (
				((n = n.compare), (n = n !== null ? n : wl), n(v, a) && e.ref === t.ref)
			)
				return It(e, t, s);
		}
		return (
			(t.flags |= 1),
			(e = Xt(o, a)),
			(e.ref = t.ref),
			(e.return = t),
			(t.child = e)
		);
	}
	function wd(e, t, n, a, s) {
		if (e !== null) {
			var o = e.memoizedProps;
			if (wl(o, a) && e.ref === t.ref)
				if (((Qe = !1), (t.pendingProps = a = o), Ru(e, s)))
					(e.flags & 131072) !== 0 && (Qe = !0);
				else return (t.lanes = e.lanes), It(e, t, s);
		}
		return Su(e, t, n, a, s);
	}
	function Ed(e, t, n) {
		var a = t.pendingProps,
			s = a.children,
			o = e !== null ? e.memoizedState : null;
		if (a.mode === "hidden") {
			if ((t.flags & 128) !== 0) {
				if (((a = o !== null ? o.baseLanes | n : n), e !== null)) {
					for (s = t.child = e.child, o = 0; s !== null; )
						(o = o | s.lanes | s.childLanes), (s = s.sibling);
					t.childLanes = o & ~a;
				} else (t.childLanes = 0), (t.child = null);
				return Td(e, t, a, n);
			}
			if ((n & 536870912) !== 0)
				(t.memoizedState = { baseLanes: 0, cachePool: null }),
					e !== null && Ji(t, o !== null ? o.cachePool : null),
					o !== null ? wf(t, o) : tu(),
					fd(t);
			else
				return (
					(t.lanes = t.childLanes = 536870912),
					Td(e, t, o !== null ? o.baseLanes | n : n, n)
				);
		} else
			o !== null
				? (Ji(t, o.cachePool), wf(t, o), bn(), (t.memoizedState = null))
				: (e !== null && Ji(t, null), tu(), bn());
		return Je(e, t, s, n), t.child;
	}
	function Td(e, t, n, a) {
		var s = Js();
		return (
			(s = s === null ? null : { parent: He._currentValue, pool: s }),
			(t.memoizedState = { baseLanes: n, cachePool: s }),
			e !== null && Ji(t, null),
			tu(),
			fd(t),
			e !== null && Al(e, t, a, !0),
			null
		);
	}
	function dr(e, t) {
		var n = t.ref;
		if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
		else {
			if (typeof n != "function" && typeof n != "object") throw Error(i(284));
			(e === null || e.ref !== n) && (t.flags |= 4194816);
		}
	}
	function Su(e, t, n, a, s) {
		return (
			In(t),
			(n = lu(e, t, n, a, void 0, s)),
			(a = iu()),
			e !== null && !Qe
				? (ru(e, t, s), It(e, t, s))
				: (_e && a && Gs(t), (t.flags |= 1), Je(e, t, n, s), t.child)
		);
	}
	function Od(e, t, n, a, s, o) {
		return (
			In(t),
			(t.updateQueue = null),
			(n = Tf(t, a, n, s)),
			Ef(e),
			(a = iu()),
			e !== null && !Qe
				? (ru(e, t, o), It(e, t, o))
				: (_e && a && Gs(t), (t.flags |= 1), Je(e, t, n, o), t.child)
		);
	}
	function jd(e, t, n, a, s) {
		if ((In(t), t.stateNode === null)) {
			var o = ja,
				v = n.contextType;
			typeof v == "object" && v !== null && (o = Ie(v)),
				(o = new n(a, o)),
				(t.memoizedState =
					o.state !== null && o.state !== void 0 ? o.state : null),
				(o.updater = _u),
				(t.stateNode = o),
				(o._reactInternals = t),
				(o = t.stateNode),
				(o.props = a),
				(o.state = t.memoizedState),
				(o.refs = {}),
				Ws(t),
				(v = n.contextType),
				(o.context = typeof v == "object" && v !== null ? Ie(v) : ja),
				(o.state = t.memoizedState),
				(v = n.getDerivedStateFromProps),
				typeof v == "function" && (bu(t, n, v, a), (o.state = t.memoizedState)),
				typeof n.getDerivedStateFromProps == "function" ||
					typeof o.getSnapshotBeforeUpdate == "function" ||
					(typeof o.UNSAFE_componentWillMount != "function" &&
						typeof o.componentWillMount != "function") ||
					((v = o.state),
					typeof o.componentWillMount == "function" && o.componentWillMount(),
					typeof o.UNSAFE_componentWillMount == "function" &&
						o.UNSAFE_componentWillMount(),
					v !== o.state && _u.enqueueReplaceState(o, o.state, null),
					zl(t, a, o, s),
					Dl(),
					(o.state = t.memoizedState)),
				typeof o.componentDidMount == "function" && (t.flags |= 4194308),
				(a = !0);
		} else if (e === null) {
			o = t.stateNode;
			var g = t.memoizedProps,
				x = na(n, g);
			o.props = x;
			var R = o.context,
				k = n.contextType;
			(v = ja), typeof k == "object" && k !== null && (v = Ie(k));
			var L = n.getDerivedStateFromProps;
			(k =
				typeof L == "function" ||
				typeof o.getSnapshotBeforeUpdate == "function"),
				(g = t.pendingProps !== g),
				k ||
					(typeof o.UNSAFE_componentWillReceiveProps != "function" &&
						typeof o.componentWillReceiveProps != "function") ||
					((g || R !== v) && hd(t, o, a, v)),
				(vn = !1);
			var C = t.memoizedState;
			(o.state = C),
				zl(t, a, o, s),
				Dl(),
				(R = t.memoizedState),
				g || C !== R || vn
					? (typeof L == "function" && (bu(t, n, L, a), (R = t.memoizedState)),
						(x = vn || dd(t, n, x, a, C, R, v))
							? (k ||
									(typeof o.UNSAFE_componentWillMount != "function" &&
										typeof o.componentWillMount != "function") ||
									(typeof o.componentWillMount == "function" &&
										o.componentWillMount(),
									typeof o.UNSAFE_componentWillMount == "function" &&
										o.UNSAFE_componentWillMount()),
								typeof o.componentDidMount == "function" &&
									(t.flags |= 4194308))
							: (typeof o.componentDidMount == "function" &&
									(t.flags |= 4194308),
								(t.memoizedProps = a),
								(t.memoizedState = R)),
						(o.props = a),
						(o.state = R),
						(o.context = v),
						(a = x))
					: (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
						(a = !1));
		} else {
			(o = t.stateNode),
				Fs(e, t),
				(v = t.memoizedProps),
				(k = na(n, v)),
				(o.props = k),
				(L = t.pendingProps),
				(C = o.context),
				(R = n.contextType),
				(x = ja),
				typeof R == "object" && R !== null && (x = Ie(R)),
				(g = n.getDerivedStateFromProps),
				(R =
					typeof g == "function" ||
					typeof o.getSnapshotBeforeUpdate == "function") ||
					(typeof o.UNSAFE_componentWillReceiveProps != "function" &&
						typeof o.componentWillReceiveProps != "function") ||
					((v !== L || C !== x) && hd(t, o, a, x)),
				(vn = !1),
				(C = t.memoizedState),
				(o.state = C),
				zl(t, a, o, s),
				Dl();
			var U = t.memoizedState;
			v !== L ||
			C !== U ||
			vn ||
			(e !== null && e.dependencies !== null && Ki(e.dependencies))
				? (typeof g == "function" && (bu(t, n, g, a), (U = t.memoizedState)),
					(k =
						vn ||
						dd(t, n, k, a, C, U, x) ||
						(e !== null && e.dependencies !== null && Ki(e.dependencies)))
						? (R ||
								(typeof o.UNSAFE_componentWillUpdate != "function" &&
									typeof o.componentWillUpdate != "function") ||
								(typeof o.componentWillUpdate == "function" &&
									o.componentWillUpdate(a, U, x),
								typeof o.UNSAFE_componentWillUpdate == "function" &&
									o.UNSAFE_componentWillUpdate(a, U, x)),
							typeof o.componentDidUpdate == "function" && (t.flags |= 4),
							typeof o.getSnapshotBeforeUpdate == "function" &&
								(t.flags |= 1024))
						: (typeof o.componentDidUpdate != "function" ||
								(v === e.memoizedProps && C === e.memoizedState) ||
								(t.flags |= 4),
							typeof o.getSnapshotBeforeUpdate != "function" ||
								(v === e.memoizedProps && C === e.memoizedState) ||
								(t.flags |= 1024),
							(t.memoizedProps = a),
							(t.memoizedState = U)),
					(o.props = a),
					(o.state = U),
					(o.context = x),
					(a = k))
				: (typeof o.componentDidUpdate != "function" ||
						(v === e.memoizedProps && C === e.memoizedState) ||
						(t.flags |= 4),
					typeof o.getSnapshotBeforeUpdate != "function" ||
						(v === e.memoizedProps && C === e.memoizedState) ||
						(t.flags |= 1024),
					(a = !1));
		}
		return (
			(o = a),
			dr(e, t),
			(a = (t.flags & 128) !== 0),
			o || a
				? ((o = t.stateNode),
					(n =
						a && typeof n.getDerivedStateFromError != "function"
							? null
							: o.render()),
					(t.flags |= 1),
					e !== null && a
						? ((t.child = qa(t, e.child, null, s)),
							(t.child = qa(t, null, n, s)))
						: Je(e, t, n, s),
					(t.memoizedState = o.state),
					(e = t.child))
				: (e = It(e, t, s)),
			e
		);
	}
	function Ad(e, t, n, a) {
		return Ol(), (t.flags |= 256), Je(e, t, n, a), t.child;
	}
	var wu = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null,
	};
	function Eu(e) {
		return { baseLanes: e, cachePool: pf() };
	}
	function Tu(e, t, n) {
		return (e = e !== null ? e.childLanes & ~n : 0), t && (e |= jt), e;
	}
	function Rd(e, t, n) {
		var a = t.pendingProps,
			s = !1,
			o = (t.flags & 128) !== 0,
			v;
		if (
			((v = o) ||
				(v =
					e !== null && e.memoizedState === null ? !1 : (Ge.current & 2) !== 0),
			v && ((s = !0), (t.flags &= -129)),
			(v = (t.flags & 32) !== 0),
			(t.flags &= -33),
			e === null)
		) {
			if (_e) {
				if ((s ? gn(t) : bn(), _e)) {
					var g = Ue,
						x;
					if ((x = g)) {
						e: {
							for (x = g, g = Lt; x.nodeType !== 8; ) {
								if (!g) {
									g = null;
									break e;
								}
								if (((x = Mt(x.nextSibling)), x === null)) {
									g = null;
									break e;
								}
							}
							g = x;
						}
						g !== null
							? ((t.memoizedState = {
									dehydrated: g,
									treeContext: Zn !== null ? { id: Kt, overflow: Zt } : null,
									retryLane: 536870912,
									hydrationErrors: null,
								}),
								(x = vt(18, null, null, 0)),
								(x.stateNode = g),
								(x.return = t),
								(t.child = x),
								(at = t),
								(Ue = null),
								(x = !0))
							: (x = !1);
					}
					x || Wn(t);
				}
				if (
					((g = t.memoizedState),
					g !== null && ((g = g.dehydrated), g !== null))
				)
					return uo(g) ? (t.lanes = 32) : (t.lanes = 536870912), null;
				Ft(t);
			}
			return (
				(g = a.children),
				(a = a.fallback),
				s
					? (bn(),
						(s = t.mode),
						(g = hr({ mode: "hidden", children: g }, s)),
						(a = Kn(a, s, n, null)),
						(g.return = t),
						(a.return = t),
						(g.sibling = a),
						(t.child = g),
						(s = t.child),
						(s.memoizedState = Eu(n)),
						(s.childLanes = Tu(e, v, n)),
						(t.memoizedState = wu),
						a)
					: (gn(t), Ou(t, g))
			);
		}
		if (
			((x = e.memoizedState), x !== null && ((g = x.dehydrated), g !== null))
		) {
			if (o)
				t.flags & 256
					? (gn(t), (t.flags &= -257), (t = ju(e, t, n)))
					: t.memoizedState !== null
						? (bn(), (t.child = e.child), (t.flags |= 128), (t = null))
						: (bn(),
							(s = a.fallback),
							(g = t.mode),
							(a = hr({ mode: "visible", children: a.children }, g)),
							(s = Kn(s, g, n, null)),
							(s.flags |= 2),
							(a.return = t),
							(s.return = t),
							(a.sibling = s),
							(t.child = a),
							qa(t, e.child, null, n),
							(a = t.child),
							(a.memoizedState = Eu(n)),
							(a.childLanes = Tu(e, v, n)),
							(t.memoizedState = wu),
							(t = s));
			else if ((gn(t), uo(g))) {
				if (((v = g.nextSibling && g.nextSibling.dataset), v)) var R = v.dgst;
				(v = R),
					(a = Error(i(419))),
					(a.stack = ""),
					(a.digest = v),
					jl({ value: a, source: null, stack: null }),
					(t = ju(e, t, n));
			} else if (
				(Qe || Al(e, t, n, !1), (v = (n & e.childLanes) !== 0), Qe || v)
			) {
				if (
					((v = je),
					v !== null &&
						((a = n & -n),
						(a = (a & 42) !== 0 ? 1 : os(a)),
						(a = (a & (v.suspendedLanes | n)) !== 0 ? 0 : a),
						a !== 0 && a !== x.retryLane))
				)
					throw ((x.retryLane = a), Oa(e, a), bt(v, e, a), _d);
				g.data === "$?" || Vu(), (t = ju(e, t, n));
			} else
				g.data === "$?"
					? ((t.flags |= 192), (t.child = e.child), (t = null))
					: ((e = x.treeContext),
						(Ue = Mt(g.nextSibling)),
						(at = t),
						(_e = !0),
						(Pn = null),
						(Lt = !1),
						e !== null &&
							((Et[Tt++] = Kt),
							(Et[Tt++] = Zt),
							(Et[Tt++] = Zn),
							(Kt = e.id),
							(Zt = e.overflow),
							(Zn = t)),
						(t = Ou(t, a.children)),
						(t.flags |= 4096));
			return t;
		}
		return s
			? (bn(),
				(s = a.fallback),
				(g = t.mode),
				(x = e.child),
				(R = x.sibling),
				(a = Xt(x, { mode: "hidden", children: a.children })),
				(a.subtreeFlags = x.subtreeFlags & 65011712),
				R !== null ? (s = Xt(R, s)) : ((s = Kn(s, g, n, null)), (s.flags |= 2)),
				(s.return = t),
				(a.return = t),
				(a.sibling = s),
				(t.child = a),
				(a = s),
				(s = t.child),
				(g = e.child.memoizedState),
				g === null
					? (g = Eu(n))
					: ((x = g.cachePool),
						x !== null
							? ((R = He._currentValue),
								(x = x.parent !== R ? { parent: R, pool: R } : x))
							: (x = pf()),
						(g = { baseLanes: g.baseLanes | n, cachePool: x })),
				(s.memoizedState = g),
				(s.childLanes = Tu(e, v, n)),
				(t.memoizedState = wu),
				a)
			: (gn(t),
				(n = e.child),
				(e = n.sibling),
				(n = Xt(n, { mode: "visible", children: a.children })),
				(n.return = t),
				(n.sibling = null),
				e !== null &&
					((v = t.deletions),
					v === null ? ((t.deletions = [e]), (t.flags |= 16)) : v.push(e)),
				(t.child = n),
				(t.memoizedState = null),
				n);
	}
	function Ou(e, t) {
		return (
			(t = hr({ mode: "visible", children: t }, e.mode)),
			(t.return = e),
			(e.child = t)
		);
	}
	function hr(e, t) {
		return (
			(e = vt(22, e, null, t)),
			(e.lanes = 0),
			(e.stateNode = {
				_visibility: 1,
				_pendingMarkers: null,
				_retryCache: null,
				_transitions: null,
			}),
			e
		);
	}
	function ju(e, t, n) {
		return (
			qa(t, e.child, null, n),
			(e = Ou(t, t.pendingProps.children)),
			(e.flags |= 2),
			(t.memoizedState = null),
			e
		);
	}
	function Nd(e, t, n) {
		e.lanes |= t;
		var a = e.alternate;
		a !== null && (a.lanes |= t), Vs(e.return, t, n);
	}
	function Au(e, t, n, a, s) {
		var o = e.memoizedState;
		o === null
			? (e.memoizedState = {
					isBackwards: t,
					rendering: null,
					renderingStartTime: 0,
					last: a,
					tail: n,
					tailMode: s,
				})
			: ((o.isBackwards = t),
				(o.rendering = null),
				(o.renderingStartTime = 0),
				(o.last = a),
				(o.tail = n),
				(o.tailMode = s));
	}
	function Cd(e, t, n) {
		var a = t.pendingProps,
			s = a.revealOrder,
			o = a.tail;
		if ((Je(e, t, a.children, n), (a = Ge.current), (a & 2) !== 0))
			(a = (a & 1) | 2), (t.flags |= 128);
		else {
			if (e !== null && (e.flags & 128) !== 0)
				e: for (e = t.child; e !== null; ) {
					if (e.tag === 13) e.memoizedState !== null && Nd(e, n, t);
					else if (e.tag === 19) Nd(e, n, t);
					else if (e.child !== null) {
						(e.child.return = e), (e = e.child);
						continue;
					}
					if (e === t) break;
					for (; e.sibling === null; ) {
						if (e.return === null || e.return === t) break e;
						e = e.return;
					}
					(e.sibling.return = e.return), (e = e.sibling);
				}
			a &= 1;
		}
		switch (($(Ge, a), s)) {
			case "forwards":
				for (n = t.child, s = null; n !== null; )
					(e = n.alternate),
						e !== null && or(e) === null && (s = n),
						(n = n.sibling);
				(n = s),
					n === null
						? ((s = t.child), (t.child = null))
						: ((s = n.sibling), (n.sibling = null)),
					Au(t, !1, s, n, o);
				break;
			case "backwards":
				for (n = null, s = t.child, t.child = null; s !== null; ) {
					if (((e = s.alternate), e !== null && or(e) === null)) {
						t.child = s;
						break;
					}
					(e = s.sibling), (s.sibling = n), (n = s), (s = e);
				}
				Au(t, !0, n, null, o);
				break;
			case "together":
				Au(t, !1, null, null, void 0);
				break;
			default:
				t.memoizedState = null;
		}
		return t.child;
	}
	function It(e, t, n) {
		if (
			(e !== null && (t.dependencies = e.dependencies),
			(En |= t.lanes),
			(n & t.childLanes) === 0)
		)
			if (e !== null) {
				if ((Al(e, t, n, !1), (n & t.childLanes) === 0)) return null;
			} else return null;
		if (e !== null && t.child !== e.child) throw Error(i(153));
		if (t.child !== null) {
			for (
				e = t.child, n = Xt(e, e.pendingProps), t.child = n, n.return = t;
				e.sibling !== null;
			)
				(e = e.sibling),
					(n = n.sibling = Xt(e, e.pendingProps)),
					(n.return = t);
			n.sibling = null;
		}
		return t.child;
	}
	function Ru(e, t) {
		return (e.lanes & t) !== 0
			? !0
			: ((e = e.dependencies), !!(e !== null && Ki(e)));
	}
	function hy(e, t, n) {
		switch (t.tag) {
			case 3:
				Re(t, t.stateNode.containerInfo),
					hn(t, He, e.memoizedState.cache),
					Ol();
				break;
			case 27:
			case 5:
				ls(t);
				break;
			case 4:
				Re(t, t.stateNode.containerInfo);
				break;
			case 10:
				hn(t, t.type, t.memoizedProps.value);
				break;
			case 13: {
				var a = t.memoizedState;
				if (a !== null)
					return a.dehydrated !== null
						? (gn(t), (t.flags |= 128), null)
						: (n & t.child.childLanes) !== 0
							? Rd(e, t, n)
							: (gn(t), (e = It(e, t, n)), e !== null ? e.sibling : null);
				gn(t);
				break;
			}
			case 19: {
				var s = (e.flags & 128) !== 0;
				if (
					((a = (n & t.childLanes) !== 0),
					a || (Al(e, t, n, !1), (a = (n & t.childLanes) !== 0)),
					s)
				) {
					if (a) return Cd(e, t, n);
					t.flags |= 128;
				}
				if (
					((s = t.memoizedState),
					s !== null &&
						((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
					$(Ge, Ge.current),
					a)
				)
					break;
				return null;
			}
			case 22:
			case 23:
				return (t.lanes = 0), Ed(e, t, n);
			case 24:
				hn(t, He, e.memoizedState.cache);
		}
		return It(e, t, n);
	}
	function Ud(e, t, n) {
		if (e !== null)
			if (e.memoizedProps !== t.pendingProps) Qe = !0;
			else {
				if (!Ru(e, n) && (t.flags & 128) === 0) return (Qe = !1), hy(e, t, n);
				Qe = (e.flags & 131072) !== 0;
			}
		else (Qe = !1), _e && (t.flags & 1048576) !== 0 && uf(t, Xi, t.index);
		switch (((t.lanes = 0), t.tag)) {
			case 16:
				e: {
					e = t.pendingProps;
					var a = t.elementType,
						s = a._init;
					if (((a = s(a._payload)), (t.type = a), typeof a == "function"))
						Ls(a)
							? ((e = na(a, e)), (t.tag = 1), (t = jd(null, t, a, e, n)))
							: ((t.tag = 0), (t = Su(null, t, a, e, n)));
					else {
						if (a != null) {
							if (((s = a.$$typeof), s === P)) {
								(t.tag = 11), (t = xd(null, t, a, e, n));
								break e;
							} else if (s === ge) {
								(t.tag = 14), (t = Sd(null, t, a, e, n));
								break e;
							}
						}
						throw ((t = Q(a) || a), Error(i(306, t, "")));
					}
				}
				return t;
			case 0:
				return Su(e, t, t.type, t.pendingProps, n);
			case 1:
				return (a = t.type), (s = na(a, t.pendingProps)), jd(e, t, a, s, n);
			case 3:
				e: {
					if ((Re(t, t.stateNode.containerInfo), e === null))
						throw Error(i(387));
					a = t.pendingProps;
					var o = t.memoizedState;
					(s = o.element), Fs(e, t), zl(t, a, null, n);
					var v = t.memoizedState;
					if (
						((a = v.cache),
						hn(t, He, a),
						a !== o.cache && Xs(t, [He], n, !0),
						Dl(),
						(a = v.element),
						o.isDehydrated)
					)
						if (
							((o = { element: a, isDehydrated: !1, cache: v.cache }),
							(t.updateQueue.baseState = o),
							(t.memoizedState = o),
							t.flags & 256)
						) {
							t = Ad(e, t, a, n);
							break e;
						} else if (a !== s) {
							(s = St(Error(i(424)), t)), jl(s), (t = Ad(e, t, a, n));
							break e;
						} else {
							switch (((e = t.stateNode.containerInfo), e.nodeType)) {
								case 9:
									e = e.body;
									break;
								default:
									e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
							}
							for (
								Ue = Mt(e.firstChild),
									at = t,
									_e = !0,
									Pn = null,
									Lt = !0,
									n = cd(t, null, a, n),
									t.child = n;
								n;
							)
								(n.flags = (n.flags & -3) | 4096), (n = n.sibling);
						}
					else {
						if ((Ol(), a === s)) {
							t = It(e, t, n);
							break e;
						}
						Je(e, t, a, n);
					}
					t = t.child;
				}
				return t;
			case 26:
				return (
					dr(e, t),
					e === null
						? (n = kh(t.type, null, t.pendingProps, null))
							? (t.memoizedState = n)
							: _e ||
								((n = t.type),
								(e = t.pendingProps),
								(a = jr(re.current).createElement(n)),
								(a[Fe] = t),
								(a[it] = e),
								We(a, n, e),
								$e(a),
								(t.stateNode = a))
						: (t.memoizedState = kh(
								t.type,
								e.memoizedProps,
								t.pendingProps,
								e.memoizedState,
							)),
					null
				);
			case 27:
				return (
					ls(t),
					e === null &&
						_e &&
						((a = t.stateNode = Mh(t.type, t.pendingProps, re.current)),
						(at = t),
						(Lt = !0),
						(s = Ue),
						An(t.type) ? ((oo = s), (Ue = Mt(a.firstChild))) : (Ue = s)),
					Je(e, t, t.pendingProps.children, n),
					dr(e, t),
					e === null && (t.flags |= 4194304),
					t.child
				);
			case 5:
				return (
					e === null &&
						_e &&
						((s = a = Ue) &&
							((a = Gy(a, t.type, t.pendingProps, Lt)),
							a !== null
								? ((t.stateNode = a),
									(at = t),
									(Ue = Mt(a.firstChild)),
									(Lt = !1),
									(s = !0))
								: (s = !1)),
						s || Wn(t)),
					ls(t),
					(s = t.type),
					(o = t.pendingProps),
					(v = e !== null ? e.memoizedProps : null),
					(a = o.children),
					io(s, o) ? (a = null) : v !== null && io(s, v) && (t.flags |= 32),
					t.memoizedState !== null &&
						((s = lu(e, t, iy, null, null, n)), (ai._currentValue = s)),
					dr(e, t),
					Je(e, t, a, n),
					t.child
				);
			case 6:
				return (
					e === null &&
						_e &&
						((e = n = Ue) &&
							((n = Yy(n, t.pendingProps, Lt)),
							n !== null
								? ((t.stateNode = n), (at = t), (Ue = null), (e = !0))
								: (e = !1)),
						e || Wn(t)),
					null
				);
			case 13:
				return Rd(e, t, n);
			case 4:
				return (
					Re(t, t.stateNode.containerInfo),
					(a = t.pendingProps),
					e === null ? (t.child = qa(t, null, a, n)) : Je(e, t, a, n),
					t.child
				);
			case 11:
				return xd(e, t, t.type, t.pendingProps, n);
			case 7:
				return Je(e, t, t.pendingProps, n), t.child;
			case 8:
				return Je(e, t, t.pendingProps.children, n), t.child;
			case 12:
				return Je(e, t, t.pendingProps.children, n), t.child;
			case 10:
				return (
					(a = t.pendingProps),
					hn(t, t.type, a.value),
					Je(e, t, a.children, n),
					t.child
				);
			case 9:
				return (
					(s = t.type._context),
					(a = t.pendingProps.children),
					In(t),
					(s = Ie(s)),
					(a = a(s)),
					(t.flags |= 1),
					Je(e, t, a, n),
					t.child
				);
			case 14:
				return Sd(e, t, t.type, t.pendingProps, n);
			case 15:
				return wd(e, t, t.type, t.pendingProps, n);
			case 19:
				return Cd(e, t, n);
			case 31:
				return (
					(a = t.pendingProps),
					(n = t.mode),
					(a = { mode: a.mode, children: a.children }),
					e === null
						? ((n = hr(a, n)),
							(n.ref = t.ref),
							(t.child = n),
							(n.return = t),
							(t = n))
						: ((n = Xt(e.child, a)),
							(n.ref = t.ref),
							(t.child = n),
							(n.return = t),
							(t = n)),
					t
				);
			case 22:
				return Ed(e, t, n);
			case 24:
				return (
					In(t),
					(a = Ie(He)),
					e === null
						? ((s = Js()),
							s === null &&
								((s = je),
								(o = Ks()),
								(s.pooledCache = o),
								o.refCount++,
								o !== null && (s.pooledCacheLanes |= n),
								(s = o)),
							(t.memoizedState = { parent: a, cache: s }),
							Ws(t),
							hn(t, He, s))
						: ((e.lanes & n) !== 0 && (Fs(e, t), zl(t, null, null, n), Dl()),
							(s = e.memoizedState),
							(o = t.memoizedState),
							s.parent !== a
								? ((s = { parent: a, cache: a }),
									(t.memoizedState = s),
									t.lanes === 0 &&
										(t.memoizedState = t.updateQueue.baseState = s),
									hn(t, He, a))
								: ((a = o.cache),
									hn(t, He, a),
									a !== s.cache && Xs(t, [He], n, !0))),
					Je(e, t, t.pendingProps.children, n),
					t.child
				);
			case 29:
				throw t.pendingProps;
		}
		throw Error(i(156, t.tag));
	}
	function en(e) {
		e.flags |= 4;
	}
	function Md(e, t) {
		if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
			e.flags &= -16777217;
		else if (((e.flags |= 16777216), !Gh(t))) {
			if (
				((t = Ot.current),
				t !== null &&
					((ye & 4194048) === ye
						? Bt !== null
						: ((ye & 62914560) !== ye && (ye & 536870912) === 0) || t !== Bt))
			)
				throw ((Ul = Ps), mf);
			e.flags |= 8192;
		}
	}
	function vr(e, t) {
		t !== null && (e.flags |= 4),
			e.flags & 16384 &&
				((t = e.tag !== 22 ? cc() : 536870912), (e.lanes |= t), (Ga |= t));
	}
	function Yl(e, t) {
		if (!_e)
			switch (e.tailMode) {
				case "hidden":
					t = e.tail;
					for (var n = null; t !== null; )
						t.alternate !== null && (n = t), (t = t.sibling);
					n === null ? (e.tail = null) : (n.sibling = null);
					break;
				case "collapsed":
					n = e.tail;
					for (var a = null; n !== null; )
						n.alternate !== null && (a = n), (n = n.sibling);
					a === null
						? t || e.tail === null
							? (e.tail = null)
							: (e.tail.sibling = null)
						: (a.sibling = null);
			}
	}
	function Ce(e) {
		var t = e.alternate !== null && e.alternate.child === e.child,
			n = 0,
			a = 0;
		if (t)
			for (var s = e.child; s !== null; )
				(n |= s.lanes | s.childLanes),
					(a |= s.subtreeFlags & 65011712),
					(a |= s.flags & 65011712),
					(s.return = e),
					(s = s.sibling);
		else
			for (s = e.child; s !== null; )
				(n |= s.lanes | s.childLanes),
					(a |= s.subtreeFlags),
					(a |= s.flags),
					(s.return = e),
					(s = s.sibling);
		return (e.subtreeFlags |= a), (e.childLanes = n), t;
	}
	function vy(e, t, n) {
		var a = t.pendingProps;
		switch ((Ys(t), t.tag)) {
			case 31:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return Ce(t), null;
			case 1:
				return Ce(t), null;
			case 3:
				return (
					(n = t.stateNode),
					(a = null),
					e !== null && (a = e.memoizedState.cache),
					t.memoizedState.cache !== a && (t.flags |= 2048),
					Pt(He),
					on(),
					n.pendingContext &&
						((n.context = n.pendingContext), (n.pendingContext = null)),
					(e === null || e.child === null) &&
						(Tl(t)
							? en(t)
							: e === null ||
								(e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
								((t.flags |= 1024), ff())),
					Ce(t),
					null
				);
			case 26:
				return (
					(n = t.memoizedState),
					e === null
						? (en(t),
							n !== null ? (Ce(t), Md(t, n)) : (Ce(t), (t.flags &= -16777217)))
						: n
							? n !== e.memoizedState
								? (en(t), Ce(t), Md(t, n))
								: (Ce(t), (t.flags &= -16777217))
							: (e.memoizedProps !== a && en(t), Ce(t), (t.flags &= -16777217)),
					null
				);
			case 27: {
				Ti(t), (n = re.current);
				var s = t.type;
				if (e !== null && t.stateNode != null) e.memoizedProps !== a && en(t);
				else {
					if (!a) {
						if (t.stateNode === null) throw Error(i(166));
						return Ce(t), null;
					}
					(e = I.current),
						Tl(t) ? of(t) : ((e = Mh(s, a, n)), (t.stateNode = e), en(t));
				}
				return Ce(t), null;
			}
			case 5:
				if ((Ti(t), (n = t.type), e !== null && t.stateNode != null))
					e.memoizedProps !== a && en(t);
				else {
					if (!a) {
						if (t.stateNode === null) throw Error(i(166));
						return Ce(t), null;
					}
					if (((e = I.current), Tl(t))) of(t);
					else {
						switch (((s = jr(re.current)), e)) {
							case 1:
								e = s.createElementNS("http://www.w3.org/2000/svg", n);
								break;
							case 2:
								e = s.createElementNS("http://www.w3.org/1998/Math/MathML", n);
								break;
							default:
								switch (n) {
									case "svg":
										e = s.createElementNS("http://www.w3.org/2000/svg", n);
										break;
									case "math":
										e = s.createElementNS(
											"http://www.w3.org/1998/Math/MathML",
											n,
										);
										break;
									case "script":
										(e = s.createElement("div")),
											(e.innerHTML = "<script><\/script>"),
											(e = e.removeChild(e.firstChild));
										break;
									case "select":
										(e =
											typeof a.is == "string"
												? s.createElement("select", { is: a.is })
												: s.createElement("select")),
											a.multiple
												? (e.multiple = !0)
												: a.size && (e.size = a.size);
										break;
									default:
										e =
											typeof a.is == "string"
												? s.createElement(n, { is: a.is })
												: s.createElement(n);
								}
						}
						(e[Fe] = t), (e[it] = a);
						e: for (s = t.child; s !== null; ) {
							if (s.tag === 5 || s.tag === 6) e.appendChild(s.stateNode);
							else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
								(s.child.return = s), (s = s.child);
								continue;
							}
							if (s === t) break;
							for (; s.sibling === null; ) {
								if (s.return === null || s.return === t) break e;
								s = s.return;
							}
							(s.sibling.return = s.return), (s = s.sibling);
						}
						t.stateNode = e;
						switch ((We(e, n, a), n)) {
							case "button":
							case "input":
							case "select":
							case "textarea":
								e = !!a.autoFocus;
								break;
							case "img":
								e = !0;
								break;
							default:
								e = !1;
						}
						e && en(t);
					}
				}
				return Ce(t), (t.flags &= -16777217), null;
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== a && en(t);
				else {
					if (typeof a != "string" && t.stateNode === null) throw Error(i(166));
					if (((e = re.current), Tl(t))) {
						if (
							((e = t.stateNode),
							(n = t.memoizedProps),
							(a = null),
							(s = at),
							s !== null)
						)
							switch (s.tag) {
								case 27:
								case 5:
									a = s.memoizedProps;
							}
						(e[Fe] = t),
							(e = !!(
								e.nodeValue === n ||
								(a !== null && a.suppressHydrationWarning === !0) ||
								Oh(e.nodeValue, n)
							)),
							e || Wn(t);
					} else (e = jr(e).createTextNode(a)), (e[Fe] = t), (t.stateNode = e);
				}
				return Ce(t), null;
			case 13:
				if (
					((a = t.memoizedState),
					e === null ||
						(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
				) {
					if (((s = Tl(t)), a !== null && a.dehydrated !== null)) {
						if (e === null) {
							if (!s) throw Error(i(318));
							if (
								((s = t.memoizedState),
								(s = s !== null ? s.dehydrated : null),
								!s)
							)
								throw Error(i(317));
							s[Fe] = t;
						} else
							Ol(),
								(t.flags & 128) === 0 && (t.memoizedState = null),
								(t.flags |= 4);
						Ce(t), (s = !1);
					} else
						(s = ff()),
							e !== null &&
								e.memoizedState !== null &&
								(e.memoizedState.hydrationErrors = s),
							(s = !0);
					if (!s) return t.flags & 256 ? (Ft(t), t) : (Ft(t), null);
				}
				if ((Ft(t), (t.flags & 128) !== 0)) return (t.lanes = n), t;
				if (
					((n = a !== null), (e = e !== null && e.memoizedState !== null), n)
				) {
					(a = t.child),
						(s = null),
						a.alternate !== null &&
							a.alternate.memoizedState !== null &&
							a.alternate.memoizedState.cachePool !== null &&
							(s = a.alternate.memoizedState.cachePool.pool);
					var o = null;
					a.memoizedState !== null &&
						a.memoizedState.cachePool !== null &&
						(o = a.memoizedState.cachePool.pool),
						o !== s && (a.flags |= 2048);
				}
				return (
					n !== e && n && (t.child.flags |= 8192),
					vr(t, t.updateQueue),
					Ce(t),
					null
				);
			case 4:
				return on(), e === null && eo(t.stateNode.containerInfo), Ce(t), null;
			case 10:
				return Pt(t.type), Ce(t), null;
			case 19:
				if ((V(Ge), (s = t.memoizedState), s === null)) return Ce(t), null;
				if (((a = (t.flags & 128) !== 0), (o = s.rendering), o === null))
					if (a) Yl(s, !1);
					else {
						if (Me !== 0 || (e !== null && (e.flags & 128) !== 0))
							for (e = t.child; e !== null; ) {
								if (((o = or(e)), o !== null)) {
									for (
										t.flags |= 128,
											Yl(s, !1),
											e = o.updateQueue,
											t.updateQueue = e,
											vr(t, e),
											t.subtreeFlags = 0,
											e = n,
											n = t.child;
										n !== null;
									)
										sf(n, e), (n = n.sibling);
									return $(Ge, (Ge.current & 1) | 2), t.child;
								}
								e = e.sibling;
							}
						s.tail !== null &&
							qt() > yr &&
							((t.flags |= 128), (a = !0), Yl(s, !1), (t.lanes = 4194304));
					}
				else {
					if (!a)
						if (((e = or(o)), e !== null)) {
							if (
								((t.flags |= 128),
								(a = !0),
								(e = e.updateQueue),
								(t.updateQueue = e),
								vr(t, e),
								Yl(s, !0),
								s.tail === null &&
									s.tailMode === "hidden" &&
									!o.alternate &&
									!_e)
							)
								return Ce(t), null;
						} else
							2 * qt() - s.renderingStartTime > yr &&
								n !== 536870912 &&
								((t.flags |= 128), (a = !0), Yl(s, !1), (t.lanes = 4194304));
					s.isBackwards
						? ((o.sibling = t.child), (t.child = o))
						: ((e = s.last),
							e !== null ? (e.sibling = o) : (t.child = o),
							(s.last = o));
				}
				return s.tail !== null
					? ((t = s.tail),
						(s.rendering = t),
						(s.tail = t.sibling),
						(s.renderingStartTime = qt()),
						(t.sibling = null),
						(e = Ge.current),
						$(Ge, a ? (e & 1) | 2 : e & 1),
						t)
					: (Ce(t), null);
			case 22:
			case 23:
				return (
					Ft(t),
					nu(),
					(a = t.memoizedState !== null),
					e !== null
						? (e.memoizedState !== null) !== a && (t.flags |= 8192)
						: a && (t.flags |= 8192),
					a
						? (n & 536870912) !== 0 &&
							(t.flags & 128) === 0 &&
							(Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
						: Ce(t),
					(n = t.updateQueue),
					n !== null && vr(t, n.retryQueue),
					(n = null),
					e !== null &&
						e.memoizedState !== null &&
						e.memoizedState.cachePool !== null &&
						(n = e.memoizedState.cachePool.pool),
					(a = null),
					t.memoizedState !== null &&
						t.memoizedState.cachePool !== null &&
						(a = t.memoizedState.cachePool.pool),
					a !== n && (t.flags |= 2048),
					e !== null && V(ea),
					null
				);
			case 24:
				return (
					(n = null),
					e !== null && (n = e.memoizedState.cache),
					t.memoizedState.cache !== n && (t.flags |= 2048),
					Pt(He),
					Ce(t),
					null
				);
			case 25:
				return null;
			case 30:
				return null;
		}
		throw Error(i(156, t.tag));
	}
	function py(e, t) {
		switch ((Ys(t), t.tag)) {
			case 1:
				return (
					(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
				);
			case 3:
				return (
					Pt(He),
					on(),
					(e = t.flags),
					(e & 65536) !== 0 && (e & 128) === 0
						? ((t.flags = (e & -65537) | 128), t)
						: null
				);
			case 26:
			case 27:
			case 5:
				return Ti(t), null;
			case 13:
				if (
					(Ft(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
				) {
					if (t.alternate === null) throw Error(i(340));
					Ol();
				}
				return (
					(e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
				);
			case 19:
				return V(Ge), null;
			case 4:
				return on(), null;
			case 10:
				return Pt(t.type), null;
			case 22:
			case 23:
				return (
					Ft(t),
					nu(),
					e !== null && V(ea),
					(e = t.flags),
					e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
				);
			case 24:
				return Pt(He), null;
			case 25:
				return null;
			default:
				return null;
		}
	}
	function Dd(e, t) {
		switch ((Ys(t), t.tag)) {
			case 3:
				Pt(He), on();
				break;
			case 26:
			case 27:
			case 5:
				Ti(t);
				break;
			case 4:
				on();
				break;
			case 13:
				Ft(t);
				break;
			case 19:
				V(Ge);
				break;
			case 10:
				Pt(t.type);
				break;
			case 22:
			case 23:
				Ft(t), nu(), e !== null && V(ea);
				break;
			case 24:
				Pt(He);
		}
	}
	function $l(e, t) {
		try {
			var n = t.updateQueue,
				a = n !== null ? n.lastEffect : null;
			if (a !== null) {
				var s = a.next;
				n = s;
				do {
					if ((n.tag & e) === e) {
						a = void 0;
						var o = n.create,
							v = n.inst;
						(a = o()), (v.destroy = a);
					}
					n = n.next;
				} while (n !== s);
			}
		} catch (g) {
			Oe(t, t.return, g);
		}
	}
	function _n(e, t, n) {
		try {
			var a = t.updateQueue,
				s = a !== null ? a.lastEffect : null;
			if (s !== null) {
				var o = s.next;
				a = o;
				do {
					if ((a.tag & e) === e) {
						var v = a.inst,
							g = v.destroy;
						if (g !== void 0) {
							(v.destroy = void 0), (s = t);
							var x = n,
								R = g;
							try {
								R();
							} catch (k) {
								Oe(s, x, k);
							}
						}
					}
					a = a.next;
				} while (a !== o);
			}
		} catch (k) {
			Oe(t, t.return, k);
		}
	}
	function zd(e) {
		var t = e.updateQueue;
		if (t !== null) {
			var n = e.stateNode;
			try {
				Sf(t, n);
			} catch (a) {
				Oe(e, e.return, a);
			}
		}
	}
	function kd(e, t, n) {
		(n.props = na(e.type, e.memoizedProps)), (n.state = e.memoizedState);
		try {
			n.componentWillUnmount();
		} catch (a) {
			Oe(e, t, a);
		}
	}
	function Ql(e, t) {
		try {
			var n = e.ref;
			if (n !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5: {
						var a = e.stateNode;
						break;
					}
					case 30:
						a = e.stateNode;
						break;
					default:
						a = e.stateNode;
				}
				typeof n == "function" ? (e.refCleanup = n(a)) : (n.current = a);
			}
		} catch (s) {
			Oe(e, t, s);
		}
	}
	function Ht(e, t) {
		var n = e.ref,
			a = e.refCleanup;
		if (n !== null)
			if (typeof a == "function")
				try {
					a();
				} catch (s) {
					Oe(e, t, s);
				} finally {
					(e.refCleanup = null),
						(e = e.alternate),
						e != null && (e.refCleanup = null);
				}
			else if (typeof n == "function")
				try {
					n(null);
				} catch (s) {
					Oe(e, t, s);
				}
			else n.current = null;
	}
	function qd(e) {
		var t = e.type,
			n = e.memoizedProps,
			a = e.stateNode;
		try {
			switch (t) {
				case "button":
				case "input":
				case "select":
				case "textarea":
					n.autoFocus && a.focus();
					break;
				case "img":
					n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
			}
		} catch (s) {
			Oe(e, e.return, s);
		}
	}
	function Nu(e, t, n) {
		try {
			var a = e.stateNode;
			ky(a, e.type, n, t), (a[it] = t);
		} catch (s) {
			Oe(e, e.return, s);
		}
	}
	function Ld(e) {
		return (
			e.tag === 5 ||
			e.tag === 3 ||
			e.tag === 26 ||
			(e.tag === 27 && An(e.type)) ||
			e.tag === 4
		);
	}
	function Cu(e) {
		e: for (;;) {
			for (; e.sibling === null; ) {
				if (e.return === null || Ld(e.return)) return null;
				e = e.return;
			}
			for (
				e.sibling.return = e.return, e = e.sibling;
				e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
			) {
				if (
					(e.tag === 27 && An(e.type)) ||
					e.flags & 2 ||
					e.child === null ||
					e.tag === 4
				)
					continue e;
				(e.child.return = e), (e = e.child);
			}
			if (!(e.flags & 2)) return e.stateNode;
		}
	}
	function Uu(e, t, n) {
		var a = e.tag;
		if (a === 5 || a === 6)
			(e = e.stateNode),
				t
					? (n.nodeType === 9
							? n.body
							: n.nodeName === "HTML"
								? n.ownerDocument.body
								: n
						).insertBefore(e, t)
					: ((t =
							n.nodeType === 9
								? n.body
								: n.nodeName === "HTML"
									? n.ownerDocument.body
									: n),
						t.appendChild(e),
						(n = n._reactRootContainer),
						n != null || t.onclick !== null || (t.onclick = Or));
		else if (
			a !== 4 &&
			(a === 27 && An(e.type) && ((n = e.stateNode), (t = null)),
			(e = e.child),
			e !== null)
		)
			for (Uu(e, t, n), e = e.sibling; e !== null; )
				Uu(e, t, n), (e = e.sibling);
	}
	function pr(e, t, n) {
		var a = e.tag;
		if (a === 5 || a === 6)
			(e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
		else if (
			a !== 4 &&
			(a === 27 && An(e.type) && (n = e.stateNode), (e = e.child), e !== null)
		)
			for (pr(e, t, n), e = e.sibling; e !== null; )
				pr(e, t, n), (e = e.sibling);
	}
	function Bd(e) {
		var t = e.stateNode,
			n = e.memoizedProps;
		try {
			for (var a = e.type, s = t.attributes; s.length; )
				t.removeAttributeNode(s[0]);
			We(t, a, n), (t[Fe] = e), (t[it] = n);
		} catch (o) {
			Oe(e, e.return, o);
		}
	}
	var tn = !1,
		ze = !1,
		Mu = !1,
		Hd = typeof WeakSet == "function" ? WeakSet : Set,
		Ve = null;
	function my(e, t) {
		if (((e = e.containerInfo), (ao = Mr), (e = Pc(e)), Cs(e))) {
			if ("selectionStart" in e)
				var n = { start: e.selectionStart, end: e.selectionEnd };
			else
				e: {
					n = ((n = e.ownerDocument) && n.defaultView) || window;
					var a = n.getSelection && n.getSelection();
					if (a && a.rangeCount !== 0) {
						n = a.anchorNode;
						var s = a.anchorOffset,
							o = a.focusNode;
						a = a.focusOffset;
						try {
							n.nodeType, o.nodeType;
						} catch {
							n = null;
							break e;
						}
						var v = 0,
							g = -1,
							x = -1,
							R = 0,
							k = 0,
							L = e,
							C = null;
						t: for (;;) {
							for (
								var U;
								L !== n || (s !== 0 && L.nodeType !== 3) || (g = v + s),
									L !== o || (a !== 0 && L.nodeType !== 3) || (x = v + a),
									L.nodeType === 3 && (v += L.nodeValue.length),
									(U = L.firstChild) !== null;
							)
								(C = L), (L = U);
							for (;;) {
								if (L === e) break t;
								if (
									(C === n && ++R === s && (g = v),
									C === o && ++k === a && (x = v),
									(U = L.nextSibling) !== null)
								)
									break;
								(L = C), (C = L.parentNode);
							}
							L = U;
						}
						n = g === -1 || x === -1 ? null : { start: g, end: x };
					} else n = null;
				}
			n = n || { start: 0, end: 0 };
		} else n = null;
		for (
			lo = { focusedElem: e, selectionRange: n }, Mr = !1, Ve = t;
			Ve !== null;
		)
			if (
				((t = Ve), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
			)
				(e.return = t), (Ve = e);
			else
				for (; Ve !== null; ) {
					switch (((t = Ve), (o = t.alternate), (e = t.flags), t.tag)) {
						case 0:
							break;
						case 11:
						case 15:
							break;
						case 1:
							if ((e & 1024) !== 0 && o !== null) {
								(e = void 0),
									(n = t),
									(s = o.memoizedProps),
									(o = o.memoizedState),
									(a = n.stateNode);
								try {
									var ie = na(n.type, s, n.elementType === n.type);
									(e = a.getSnapshotBeforeUpdate(ie, o)),
										(a.__reactInternalSnapshotBeforeUpdate = e);
								} catch (ne) {
									Oe(n, n.return, ne);
								}
							}
							break;
						case 3:
							if ((e & 1024) !== 0) {
								if (
									((e = t.stateNode.containerInfo), (n = e.nodeType), n === 9)
								)
									so(e);
								else if (n === 1)
									switch (e.nodeName) {
										case "HEAD":
										case "HTML":
										case "BODY":
											so(e);
											break;
										default:
											e.textContent = "";
									}
							}
							break;
						case 5:
						case 26:
						case 27:
						case 6:
						case 4:
						case 17:
							break;
						default:
							if ((e & 1024) !== 0) throw Error(i(163));
					}
					if (((e = t.sibling), e !== null)) {
						(e.return = t.return), (Ve = e);
						break;
					}
					Ve = t.return;
				}
	}
	function Gd(e, t, n) {
		var a = n.flags;
		switch (n.tag) {
			case 0:
			case 11:
			case 15:
				xn(e, n), a & 4 && $l(5, n);
				break;
			case 1:
				if ((xn(e, n), a & 4))
					if (((e = n.stateNode), t === null))
						try {
							e.componentDidMount();
						} catch (v) {
							Oe(n, n.return, v);
						}
					else {
						var s = na(n.type, t.memoizedProps);
						t = t.memoizedState;
						try {
							e.componentDidUpdate(s, t, e.__reactInternalSnapshotBeforeUpdate);
						} catch (v) {
							Oe(n, n.return, v);
						}
					}
				a & 64 && zd(n), a & 512 && Ql(n, n.return);
				break;
			case 3:
				if ((xn(e, n), a & 64 && ((e = n.updateQueue), e !== null))) {
					if (((t = null), n.child !== null))
						switch (n.child.tag) {
							case 27:
							case 5:
								t = n.child.stateNode;
								break;
							case 1:
								t = n.child.stateNode;
						}
					try {
						Sf(e, t);
					} catch (v) {
						Oe(n, n.return, v);
					}
				}
				break;
			case 27:
				t === null && a & 4 && Bd(n);
			case 26:
			case 5:
				xn(e, n), t === null && a & 4 && qd(n), a & 512 && Ql(n, n.return);
				break;
			case 12:
				xn(e, n);
				break;
			case 13:
				xn(e, n),
					a & 4 && Qd(e, n),
					a & 64 &&
						((e = n.memoizedState),
						e !== null &&
							((e = e.dehydrated),
							e !== null && ((n = Ty.bind(null, n)), $y(e, n))));
				break;
			case 22:
				if (((a = n.memoizedState !== null || tn), !a)) {
					(t = (t !== null && t.memoizedState !== null) || ze), (s = tn);
					var o = ze;
					(tn = a),
						(ze = t) && !o ? Sn(e, n, (n.subtreeFlags & 8772) !== 0) : xn(e, n),
						(tn = s),
						(ze = o);
				}
				break;
			case 30:
				break;
			default:
				xn(e, n);
		}
	}
	function Yd(e) {
		var t = e.alternate;
		t !== null && ((e.alternate = null), Yd(t)),
			(e.child = null),
			(e.deletions = null),
			(e.sibling = null),
			e.tag === 5 && ((t = e.stateNode), t !== null && ds(t)),
			(e.stateNode = null),
			(e.return = null),
			(e.dependencies = null),
			(e.memoizedProps = null),
			(e.memoizedState = null),
			(e.pendingProps = null),
			(e.stateNode = null),
			(e.updateQueue = null);
	}
	var Ne = null,
		ut = !1;
	function nn(e, t, n) {
		for (n = n.child; n !== null; ) $d(e, t, n), (n = n.sibling);
	}
	function $d(e, t, n) {
		if (ft && typeof ft.onCommitFiberUnmount == "function")
			try {
				ft.onCommitFiberUnmount(fl, n);
			} catch {}
		switch (n.tag) {
			case 26:
				ze || Ht(n, t),
					nn(e, t, n),
					n.memoizedState
						? n.memoizedState.count--
						: n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n));
				break;
			case 27: {
				ze || Ht(n, t);
				var a = Ne,
					s = ut;
				An(n.type) && ((Ne = n.stateNode), (ut = !1)),
					nn(e, t, n),
					Il(n.stateNode),
					(Ne = a),
					(ut = s);
				break;
			}
			case 5:
				ze || Ht(n, t);
			case 6:
				if (
					((a = Ne),
					(s = ut),
					(Ne = null),
					nn(e, t, n),
					(Ne = a),
					(ut = s),
					Ne !== null)
				)
					if (ut)
						try {
							(Ne.nodeType === 9
								? Ne.body
								: Ne.nodeName === "HTML"
									? Ne.ownerDocument.body
									: Ne
							).removeChild(n.stateNode);
						} catch (o) {
							Oe(n, t, o);
						}
					else
						try {
							Ne.removeChild(n.stateNode);
						} catch (o) {
							Oe(n, t, o);
						}
				break;
			case 18:
				Ne !== null &&
					(ut
						? ((e = Ne),
							Ch(
								e.nodeType === 9
									? e.body
									: e.nodeName === "HTML"
										? e.ownerDocument.body
										: e,
								n.stateNode,
							),
							si(e))
						: Ch(Ne, n.stateNode));
				break;
			case 4:
				(a = Ne),
					(s = ut),
					(Ne = n.stateNode.containerInfo),
					(ut = !0),
					nn(e, t, n),
					(Ne = a),
					(ut = s);
				break;
			case 0:
			case 11:
			case 14:
			case 15:
				ze || _n(2, n, t), ze || _n(4, n, t), nn(e, t, n);
				break;
			case 1:
				ze ||
					(Ht(n, t),
					(a = n.stateNode),
					typeof a.componentWillUnmount == "function" && kd(n, t, a)),
					nn(e, t, n);
				break;
			case 21:
				nn(e, t, n);
				break;
			case 22:
				(ze = (a = ze) || n.memoizedState !== null), nn(e, t, n), (ze = a);
				break;
			default:
				nn(e, t, n);
		}
	}
	function Qd(e, t) {
		if (
			t.memoizedState === null &&
			((e = t.alternate),
			e !== null &&
				((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
		)
			try {
				si(e);
			} catch (n) {
				Oe(t, t.return, n);
			}
	}
	function yy(e) {
		switch (e.tag) {
			case 13:
			case 19: {
				var t = e.stateNode;
				return t === null && (t = e.stateNode = new Hd()), t;
			}
			case 22:
				return (
					(e = e.stateNode),
					(t = e._retryCache),
					t === null && (t = e._retryCache = new Hd()),
					t
				);
			default:
				throw Error(i(435, e.tag));
		}
	}
	function Du(e, t) {
		var n = yy(e);
		t.forEach((a) => {
			var s = Oy.bind(null, e, a);
			n.has(a) || (n.add(a), a.then(s, s));
		});
	}
	function pt(e, t) {
		var n = t.deletions;
		if (n !== null)
			for (var a = 0; a < n.length; a++) {
				var s = n[a],
					o = e,
					v = t,
					g = v;
				e: for (; g !== null; ) {
					switch (g.tag) {
						case 27:
							if (An(g.type)) {
								(Ne = g.stateNode), (ut = !1);
								break e;
							}
							break;
						case 5:
							(Ne = g.stateNode), (ut = !1);
							break e;
						case 3:
						case 4:
							(Ne = g.stateNode.containerInfo), (ut = !0);
							break e;
					}
					g = g.return;
				}
				if (Ne === null) throw Error(i(160));
				$d(o, v, s),
					(Ne = null),
					(ut = !1),
					(o = s.alternate),
					o !== null && (o.return = null),
					(s.return = null);
			}
		if (t.subtreeFlags & 13878)
			for (t = t.child; t !== null; ) Vd(t, e), (t = t.sibling);
	}
	var Ut = null;
	function Vd(e, t) {
		var n = e.alternate,
			a = e.flags;
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				pt(t, e),
					mt(e),
					a & 4 && (_n(3, e, e.return), $l(3, e), _n(5, e, e.return));
				break;
			case 1:
				pt(t, e),
					mt(e),
					a & 512 && (ze || n === null || Ht(n, n.return)),
					a & 64 &&
						tn &&
						((e = e.updateQueue),
						e !== null &&
							((a = e.callbacks),
							a !== null &&
								((n = e.shared.hiddenCallbacks),
								(e.shared.hiddenCallbacks = n === null ? a : n.concat(a)))));
				break;
			case 26: {
				var s = Ut;
				if (
					(pt(t, e),
					mt(e),
					a & 512 && (ze || n === null || Ht(n, n.return)),
					a & 4)
				) {
					var o = n !== null ? n.memoizedState : null;
					if (((a = e.memoizedState), n === null))
						if (a === null)
							if (e.stateNode === null) {
								e: {
									(a = e.type),
										(n = e.memoizedProps),
										(s = s.ownerDocument || s);
									t: switch (a) {
										case "title":
											(o = s.getElementsByTagName("title")[0]),
												(!o ||
													o[vl] ||
													o[Fe] ||
													o.namespaceURI === "http://www.w3.org/2000/svg" ||
													o.hasAttribute("itemprop")) &&
													((o = s.createElement(a)),
													s.head.insertBefore(
														o,
														s.querySelector("head > title"),
													)),
												We(o, a, n),
												(o[Fe] = e),
												$e(o),
												(a = o);
											break e;
										case "link": {
											var v = Bh("link", "href", s).get(a + (n.href || ""));
											if (v) {
												for (var g = 0; g < v.length; g++)
													if (
														((o = v[g]),
														o.getAttribute("href") ===
															(n.href == null || n.href === ""
																? null
																: n.href) &&
															o.getAttribute("rel") ===
																(n.rel == null ? null : n.rel) &&
															o.getAttribute("title") ===
																(n.title == null ? null : n.title) &&
															o.getAttribute("crossorigin") ===
																(n.crossOrigin == null ? null : n.crossOrigin))
													) {
														v.splice(g, 1);
														break t;
													}
											}
											(o = s.createElement(a)),
												We(o, a, n),
												s.head.appendChild(o);
											break;
										}
										case "meta":
											if (
												(v = Bh("meta", "content", s).get(
													a + (n.content || ""),
												))
											) {
												for (g = 0; g < v.length; g++)
													if (
														((o = v[g]),
														o.getAttribute("content") ===
															(n.content == null ? null : "" + n.content) &&
															o.getAttribute("name") ===
																(n.name == null ? null : n.name) &&
															o.getAttribute("property") ===
																(n.property == null ? null : n.property) &&
															o.getAttribute("http-equiv") ===
																(n.httpEquiv == null ? null : n.httpEquiv) &&
															o.getAttribute("charset") ===
																(n.charSet == null ? null : n.charSet))
													) {
														v.splice(g, 1);
														break t;
													}
											}
											(o = s.createElement(a)),
												We(o, a, n),
												s.head.appendChild(o);
											break;
										default:
											throw Error(i(468, a));
									}
									(o[Fe] = e), $e(o), (a = o);
								}
								e.stateNode = a;
							} else Hh(s, e.type, e.stateNode);
						else e.stateNode = Lh(s, a, e.memoizedProps);
					else
						o !== a
							? (o === null
									? n.stateNode !== null &&
										((n = n.stateNode), n.parentNode.removeChild(n))
									: o.count--,
								a === null
									? Hh(s, e.type, e.stateNode)
									: Lh(s, a, e.memoizedProps))
							: a === null &&
								e.stateNode !== null &&
								Nu(e, e.memoizedProps, n.memoizedProps);
				}
				break;
			}
			case 27:
				pt(t, e),
					mt(e),
					a & 512 && (ze || n === null || Ht(n, n.return)),
					n !== null && a & 4 && Nu(e, e.memoizedProps, n.memoizedProps);
				break;
			case 5:
				if (
					(pt(t, e),
					mt(e),
					a & 512 && (ze || n === null || Ht(n, n.return)),
					e.flags & 32)
				) {
					s = e.stateNode;
					try {
						ba(s, "");
					} catch (U) {
						Oe(e, e.return, U);
					}
				}
				a & 4 &&
					e.stateNode != null &&
					((s = e.memoizedProps), Nu(e, s, n !== null ? n.memoizedProps : s)),
					a & 1024 && (Mu = !0);
				break;
			case 6:
				if ((pt(t, e), mt(e), a & 4)) {
					if (e.stateNode === null) throw Error(i(162));
					(a = e.memoizedProps), (n = e.stateNode);
					try {
						n.nodeValue = a;
					} catch (U) {
						Oe(e, e.return, U);
					}
				}
				break;
			case 3:
				if (
					((Nr = null),
					(s = Ut),
					(Ut = Ar(t.containerInfo)),
					pt(t, e),
					(Ut = s),
					mt(e),
					a & 4 && n !== null && n.memoizedState.isDehydrated)
				)
					try {
						si(t.containerInfo);
					} catch (U) {
						Oe(e, e.return, U);
					}
				Mu && ((Mu = !1), Xd(e));
				break;
			case 4:
				(a = Ut),
					(Ut = Ar(e.stateNode.containerInfo)),
					pt(t, e),
					mt(e),
					(Ut = a);
				break;
			case 12:
				pt(t, e), mt(e);
				break;
			case 13:
				pt(t, e),
					mt(e),
					e.child.flags & 8192 &&
						(e.memoizedState !== null) !=
							(n !== null && n.memoizedState !== null) &&
						(Hu = qt()),
					a & 4 &&
						((a = e.updateQueue),
						a !== null && ((e.updateQueue = null), Du(e, a)));
				break;
			case 22: {
				s = e.memoizedState !== null;
				var x = n !== null && n.memoizedState !== null,
					R = tn,
					k = ze;
				if (
					((tn = R || s),
					(ze = k || x),
					pt(t, e),
					(ze = k),
					(tn = R),
					mt(e),
					a & 8192)
				)
					e: for (
						t = e.stateNode,
							t._visibility = s ? t._visibility & -2 : t._visibility | 1,
							s && (n === null || x || tn || ze || aa(e)),
							n = null,
							t = e;
						;
					) {
						if (t.tag === 5 || t.tag === 26) {
							if (n === null) {
								x = n = t;
								try {
									if (((o = x.stateNode), s))
										(v = o.style),
											typeof v.setProperty == "function"
												? v.setProperty("display", "none", "important")
												: (v.display = "none");
									else {
										g = x.stateNode;
										var L = x.memoizedProps.style,
											C =
												L != null && Object.hasOwn(L, "display")
													? L.display
													: null;
										g.style.display =
											C == null || typeof C == "boolean" ? "" : ("" + C).trim();
									}
								} catch (U) {
									Oe(x, x.return, U);
								}
							}
						} else if (t.tag === 6) {
							if (n === null) {
								x = t;
								try {
									x.stateNode.nodeValue = s ? "" : x.memoizedProps;
								} catch (U) {
									Oe(x, x.return, U);
								}
							}
						} else if (
							((t.tag !== 22 && t.tag !== 23) ||
								t.memoizedState === null ||
								t === e) &&
							t.child !== null
						) {
							(t.child.return = t), (t = t.child);
							continue;
						}
						if (t === e) break;
						for (; t.sibling === null; ) {
							if (t.return === null || t.return === e) break e;
							n === t && (n = null), (t = t.return);
						}
						n === t && (n = null),
							(t.sibling.return = t.return),
							(t = t.sibling);
					}
				a & 4 &&
					((a = e.updateQueue),
					a !== null &&
						((n = a.retryQueue),
						n !== null && ((a.retryQueue = null), Du(e, n))));
				break;
			}
			case 19:
				pt(t, e),
					mt(e),
					a & 4 &&
						((a = e.updateQueue),
						a !== null && ((e.updateQueue = null), Du(e, a)));
				break;
			case 30:
				break;
			case 21:
				break;
			default:
				pt(t, e), mt(e);
		}
	}
	function mt(e) {
		var t = e.flags;
		if (t & 2) {
			try {
				for (var n, a = e.return; a !== null; ) {
					if (Ld(a)) {
						n = a;
						break;
					}
					a = a.return;
				}
				if (n == null) throw Error(i(160));
				switch (n.tag) {
					case 27: {
						var s = n.stateNode,
							o = Cu(e);
						pr(e, o, s);
						break;
					}
					case 5: {
						var v = n.stateNode;
						n.flags & 32 && (ba(v, ""), (n.flags &= -33));
						var g = Cu(e);
						pr(e, g, v);
						break;
					}
					case 3:
					case 4: {
						var x = n.stateNode.containerInfo,
							R = Cu(e);
						Uu(e, R, x);
						break;
					}
					default:
						throw Error(i(161));
				}
			} catch (k) {
				Oe(e, e.return, k);
			}
			e.flags &= -3;
		}
		t & 4096 && (e.flags &= -4097);
	}
	function Xd(e) {
		if (e.subtreeFlags & 1024)
			for (e = e.child; e !== null; ) {
				var t = e;
				Xd(t),
					t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
					(e = e.sibling);
			}
	}
	function xn(e, t) {
		if (t.subtreeFlags & 8772)
			for (t = t.child; t !== null; ) Gd(e, t.alternate, t), (t = t.sibling);
	}
	function aa(e) {
		for (e = e.child; e !== null; ) {
			var t = e;
			switch (t.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					_n(4, t, t.return), aa(t);
					break;
				case 1: {
					Ht(t, t.return);
					var n = t.stateNode;
					typeof n.componentWillUnmount == "function" && kd(t, t.return, n),
						aa(t);
					break;
				}
				case 27:
					Il(t.stateNode);
				case 26:
				case 5:
					Ht(t, t.return), aa(t);
					break;
				case 22:
					t.memoizedState === null && aa(t);
					break;
				case 30:
					aa(t);
					break;
				default:
					aa(t);
			}
			e = e.sibling;
		}
	}
	function Sn(e, t, n) {
		for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
			var a = t.alternate,
				s = e,
				o = t,
				v = o.flags;
			switch (o.tag) {
				case 0:
				case 11:
				case 15:
					Sn(s, o, n), $l(4, o);
					break;
				case 1:
					if (
						(Sn(s, o, n),
						(a = o),
						(s = a.stateNode),
						typeof s.componentDidMount == "function")
					)
						try {
							s.componentDidMount();
						} catch (R) {
							Oe(a, a.return, R);
						}
					if (((a = o), (s = a.updateQueue), s !== null)) {
						var g = a.stateNode;
						try {
							var x = s.shared.hiddenCallbacks;
							if (x !== null)
								for (s.shared.hiddenCallbacks = null, s = 0; s < x.length; s++)
									xf(x[s], g);
						} catch (R) {
							Oe(a, a.return, R);
						}
					}
					n && v & 64 && zd(o), Ql(o, o.return);
					break;
				case 27:
					Bd(o);
				case 26:
				case 5:
					Sn(s, o, n), n && a === null && v & 4 && qd(o), Ql(o, o.return);
					break;
				case 12:
					Sn(s, o, n);
					break;
				case 13:
					Sn(s, o, n), n && v & 4 && Qd(s, o);
					break;
				case 22:
					o.memoizedState === null && Sn(s, o, n), Ql(o, o.return);
					break;
				case 30:
					break;
				default:
					Sn(s, o, n);
			}
			t = t.sibling;
		}
	}
	function zu(e, t) {
		var n = null;
		e !== null &&
			e.memoizedState !== null &&
			e.memoizedState.cachePool !== null &&
			(n = e.memoizedState.cachePool.pool),
			(e = null),
			t.memoizedState !== null &&
				t.memoizedState.cachePool !== null &&
				(e = t.memoizedState.cachePool.pool),
			e !== n && (e != null && e.refCount++, n != null && Rl(n));
	}
	function ku(e, t) {
		(e = null),
			t.alternate !== null && (e = t.alternate.memoizedState.cache),
			(t = t.memoizedState.cache),
			t !== e && (t.refCount++, e != null && Rl(e));
	}
	function Gt(e, t, n, a) {
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null; ) Kd(e, t, n, a), (t = t.sibling);
	}
	function Kd(e, t, n, a) {
		var s = t.flags;
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				Gt(e, t, n, a), s & 2048 && $l(9, t);
				break;
			case 1:
				Gt(e, t, n, a);
				break;
			case 3:
				Gt(e, t, n, a),
					s & 2048 &&
						((e = null),
						t.alternate !== null && (e = t.alternate.memoizedState.cache),
						(t = t.memoizedState.cache),
						t !== e && (t.refCount++, e != null && Rl(e)));
				break;
			case 12:
				if (s & 2048) {
					Gt(e, t, n, a), (e = t.stateNode);
					try {
						var o = t.memoizedProps,
							v = o.id,
							g = o.onPostCommit;
						typeof g == "function" &&
							g(
								v,
								t.alternate === null ? "mount" : "update",
								e.passiveEffectDuration,
								-0,
							);
					} catch (x) {
						Oe(t, t.return, x);
					}
				} else Gt(e, t, n, a);
				break;
			case 13:
				Gt(e, t, n, a);
				break;
			case 23:
				break;
			case 22:
				(o = t.stateNode),
					(v = t.alternate),
					t.memoizedState !== null
						? o._visibility & 2
							? Gt(e, t, n, a)
							: Vl(e, t)
						: o._visibility & 2
							? Gt(e, t, n, a)
							: ((o._visibility |= 2),
								La(e, t, n, a, (t.subtreeFlags & 10256) !== 0)),
					s & 2048 && zu(v, t);
				break;
			case 24:
				Gt(e, t, n, a), s & 2048 && ku(t.alternate, t);
				break;
			default:
				Gt(e, t, n, a);
		}
	}
	function La(e, t, n, a, s) {
		for (s = s && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
			var o = e,
				v = t,
				g = n,
				x = a,
				R = v.flags;
			switch (v.tag) {
				case 0:
				case 11:
				case 15:
					La(o, v, g, x, s), $l(8, v);
					break;
				case 23:
					break;
				case 22: {
					var k = v.stateNode;
					v.memoizedState !== null
						? k._visibility & 2
							? La(o, v, g, x, s)
							: Vl(o, v)
						: ((k._visibility |= 2), La(o, v, g, x, s)),
						s && R & 2048 && zu(v.alternate, v);
					break;
				}
				case 24:
					La(o, v, g, x, s), s && R & 2048 && ku(v.alternate, v);
					break;
				default:
					La(o, v, g, x, s);
			}
			t = t.sibling;
		}
	}
	function Vl(e, t) {
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null; ) {
				var n = e,
					a = t,
					s = a.flags;
				switch (a.tag) {
					case 22:
						Vl(n, a), s & 2048 && zu(a.alternate, a);
						break;
					case 24:
						Vl(n, a), s & 2048 && ku(a.alternate, a);
						break;
					default:
						Vl(n, a);
				}
				t = t.sibling;
			}
	}
	var Xl = 8192;
	function Ba(e) {
		if (e.subtreeFlags & Xl)
			for (e = e.child; e !== null; ) Zd(e), (e = e.sibling);
	}
	function Zd(e) {
		switch (e.tag) {
			case 26:
				Ba(e),
					e.flags & Xl &&
						e.memoizedState !== null &&
						ng(Ut, e.memoizedState, e.memoizedProps);
				break;
			case 5:
				Ba(e);
				break;
			case 3:
			case 4: {
				var t = Ut;
				(Ut = Ar(e.stateNode.containerInfo)), Ba(e), (Ut = t);
				break;
			}
			case 22:
				e.memoizedState === null &&
					((t = e.alternate),
					t !== null && t.memoizedState !== null
						? ((t = Xl), (Xl = 16777216), Ba(e), (Xl = t))
						: Ba(e));
				break;
			default:
				Ba(e);
		}
	}
	function Jd(e) {
		var t = e.alternate;
		if (t !== null && ((e = t.child), e !== null)) {
			t.child = null;
			do (t = e.sibling), (e.sibling = null), (e = t);
			while (e !== null);
		}
	}
	function Kl(e) {
		var t = e.deletions;
		if ((e.flags & 16) !== 0) {
			if (t !== null)
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					(Ve = a), Wd(a, e);
				}
			Jd(e);
		}
		if (e.subtreeFlags & 10256)
			for (e = e.child; e !== null; ) Pd(e), (e = e.sibling);
	}
	function Pd(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				Kl(e), e.flags & 2048 && _n(9, e, e.return);
				break;
			case 3:
				Kl(e);
				break;
			case 12:
				Kl(e);
				break;
			case 22: {
				var t = e.stateNode;
				e.memoizedState !== null &&
				t._visibility & 2 &&
				(e.return === null || e.return.tag !== 13)
					? ((t._visibility &= -3), mr(e))
					: Kl(e);
				break;
			}
			default:
				Kl(e);
		}
	}
	function mr(e) {
		var t = e.deletions;
		if ((e.flags & 16) !== 0) {
			if (t !== null)
				for (var n = 0; n < t.length; n++) {
					var a = t[n];
					(Ve = a), Wd(a, e);
				}
			Jd(e);
		}
		for (e = e.child; e !== null; ) {
			switch (((t = e), t.tag)) {
				case 0:
				case 11:
				case 15:
					_n(8, t, t.return), mr(t);
					break;
				case 22:
					(n = t.stateNode),
						n._visibility & 2 && ((n._visibility &= -3), mr(t));
					break;
				default:
					mr(t);
			}
			e = e.sibling;
		}
	}
	function Wd(e, t) {
		for (; Ve !== null; ) {
			var n = Ve;
			switch (n.tag) {
				case 0:
				case 11:
				case 15:
					_n(8, n, t);
					break;
				case 23:
				case 22:
					if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
						var a = n.memoizedState.cachePool.pool;
						a != null && a.refCount++;
					}
					break;
				case 24:
					Rl(n.memoizedState.cache);
			}
			if (((a = n.child), a !== null)) (a.return = n), (Ve = a);
			else
				for (n = e; Ve !== null; ) {
					a = Ve;
					var s = a.sibling,
						o = a.return;
					if ((Yd(a), a === n)) {
						Ve = null;
						break;
					}
					if (s !== null) {
						(s.return = o), (Ve = s);
						break;
					}
					Ve = o;
				}
		}
	}
	var gy = {
			getCacheForType: (e) => {
				var t = Ie(He),
					n = t.data.get(e);
				return n === void 0 && ((n = e()), t.data.set(e, n)), n;
			},
		},
		by = typeof WeakMap == "function" ? WeakMap : Map,
		xe = 0,
		je = null,
		he = null,
		ye = 0,
		Se = 0,
		yt = null,
		wn = !1,
		Ha = !1,
		qu = !1,
		an = 0,
		Me = 0,
		En = 0,
		la = 0,
		Lu = 0,
		jt = 0,
		Ga = 0,
		Zl = null,
		ot = null,
		Bu = !1,
		Hu = 0,
		yr = 1 / 0,
		gr = null,
		Tn = null,
		Pe = 0,
		On = null,
		Ya = null,
		$a = 0,
		Gu = 0,
		Yu = null,
		Fd = null,
		Jl = 0,
		$u = null;
	function gt() {
		if ((xe & 2) !== 0 && ye !== 0) return ye & -ye;
		if (N.T !== null) {
			var e = Na;
			return e !== 0 ? e : Pu();
		}
		return hc();
	}
	function Id() {
		jt === 0 && (jt = (ye & 536870912) === 0 || _e ? oc() : 536870912);
		var e = Ot.current;
		return e !== null && (e.flags |= 32), jt;
	}
	function bt(e, t, n) {
		((e === je && (Se === 2 || Se === 9)) || e.cancelPendingCommit !== null) &&
			(Qa(e, 0), jn(e, ye, jt, !1)),
			hl(e, n),
			((xe & 2) === 0 || e !== je) &&
				(e === je &&
					((xe & 2) === 0 && (la |= n), Me === 4 && jn(e, ye, jt, !1)),
				Yt(e));
	}
	function eh(e, t, n) {
		if ((xe & 6) !== 0) throw Error(i(327));
		var a = (!n && (t & 124) === 0 && (t & e.expiredLanes) === 0) || dl(e, t),
			s = a ? Sy(e, t) : Xu(e, t, !0),
			o = a;
		do {
			if (s === 0) {
				Ha && !a && jn(e, t, 0, !1);
				break;
			} else {
				if (((n = e.current.alternate), o && !_y(n))) {
					(s = Xu(e, t, !1)), (o = !1);
					continue;
				}
				if (s === 2) {
					if (((o = t), e.errorRecoveryDisabledLanes & o)) var v = 0;
					else
						(v = e.pendingLanes & -536870913),
							(v = v !== 0 ? v : v & 536870912 ? 536870912 : 0);
					if (v !== 0) {
						t = v;
						e: {
							var g = e;
							s = Zl;
							var x = g.current.memoizedState.isDehydrated;
							if ((x && (Qa(g, v).flags |= 256), (v = Xu(g, v, !1)), v !== 2)) {
								if (qu && !x) {
									(g.errorRecoveryDisabledLanes |= o), (la |= o), (s = 4);
									break e;
								}
								(o = ot),
									(ot = s),
									o !== null && (ot === null ? (ot = o) : ot.push.apply(ot, o));
							}
							s = v;
						}
						if (((o = !1), s !== 2)) continue;
					}
				}
				if (s === 1) {
					Qa(e, 0), jn(e, t, 0, !0);
					break;
				}
				e: {
					switch (((a = e), (o = s), o)) {
						case 0:
						case 1:
							throw Error(i(345));
						case 4:
							if ((t & 4194048) !== t) break;
						case 6:
							jn(a, t, jt, !wn);
							break e;
						case 2:
							ot = null;
							break;
						case 3:
						case 5:
							break;
						default:
							throw Error(i(329));
					}
					if ((t & 62914560) === t && ((s = Hu + 300 - qt()), 10 < s)) {
						if ((jn(a, t, jt, !wn), Ri(a, 0, !0) !== 0)) break e;
						a.timeoutHandle = Rh(
							th.bind(null, a, n, ot, gr, Bu, t, jt, la, Ga, wn, o, 2, -0, 0),
							s,
						);
						break e;
					}
					th(a, n, ot, gr, Bu, t, jt, la, Ga, wn, o, 0, -0, 0);
				}
			}
			break;
		} while (!0);
		Yt(e);
	}
	function th(e, t, n, a, s, o, v, g, x, R, k, L, C, U) {
		if (
			((e.timeoutHandle = -1),
			(L = t.subtreeFlags),
			(L & 8192 || (L & 16785408) === 16785408) &&
				((ni = { stylesheets: null, count: 0, unsuspend: tg }),
				Zd(t),
				(L = ag()),
				L !== null))
		) {
			(e.cancelPendingCommit = L(
				uh.bind(null, e, t, o, n, a, s, v, g, x, k, 1, C, U),
			)),
				jn(e, o, v, !R);
			return;
		}
		uh(e, t, o, n, a, s, v, g, x);
	}
	function _y(e) {
		for (var t = e; ; ) {
			var n = t.tag;
			if (
				(n === 0 || n === 11 || n === 15) &&
				t.flags & 16384 &&
				((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
			)
				for (var a = 0; a < n.length; a++) {
					var s = n[a],
						o = s.getSnapshot;
					s = s.value;
					try {
						if (!ht(o(), s)) return !1;
					} catch {
						return !1;
					}
				}
			if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
				(n.return = t), (t = n);
			else {
				if (t === e) break;
				for (; t.sibling === null; ) {
					if (t.return === null || t.return === e) return !0;
					t = t.return;
				}
				(t.sibling.return = t.return), (t = t.sibling);
			}
		}
		return !0;
	}
	function jn(e, t, n, a) {
		(t &= ~Lu),
			(t &= ~la),
			(e.suspendedLanes |= t),
			(e.pingedLanes &= ~t),
			a && (e.warmLanes |= t),
			(a = e.expirationTimes);
		for (var s = t; 0 < s; ) {
			var o = 31 - dt(s),
				v = 1 << o;
			(a[o] = -1), (s &= ~v);
		}
		n !== 0 && fc(e, n, t);
	}
	function br() {
		return (xe & 6) === 0 ? (Pl(0), !1) : !0;
	}
	function Qu() {
		if (he !== null) {
			if (Se === 0) var e = he.return;
			else (e = he), (Jt = Fn = null), su(e), (ka = null), (Hl = 0), (e = he);
			for (; e !== null; ) Dd(e.alternate, e), (e = e.return);
			he = null;
		}
	}
	function Qa(e, t) {
		var n = e.timeoutHandle;
		n !== -1 && ((e.timeoutHandle = -1), Ly(n)),
			(n = e.cancelPendingCommit),
			n !== null && ((e.cancelPendingCommit = null), n()),
			Qu(),
			(je = e),
			(he = n = Xt(e.current, null)),
			(ye = t),
			(Se = 0),
			(yt = null),
			(wn = !1),
			(Ha = dl(e, t)),
			(qu = !1),
			(Ga = jt = Lu = la = En = Me = 0),
			(ot = Zl = null),
			(Bu = !1),
			(t & 8) !== 0 && (t |= t & 32);
		var a = e.entangledLanes;
		if (a !== 0)
			for (e = e.entanglements, a &= t; 0 < a; ) {
				var s = 31 - dt(a),
					o = 1 << s;
				(t |= e[s]), (a &= ~o);
			}
		return (an = t), Gi(), n;
	}
	function nh(e, t) {
		(ce = null),
			(N.H = rr),
			t === Cl || t === Pi
				? ((t = bf()), (Se = 3))
				: t === mf
					? ((t = bf()), (Se = 4))
					: (Se =
							t === _d
								? 8
								: t !== null &&
										typeof t == "object" &&
										typeof t.then == "function"
									? 6
									: 1),
			(yt = t),
			he === null && ((Me = 1), fr(e, St(t, e.current)));
	}
	function ah() {
		var e = N.H;
		return (N.H = rr), e === null ? rr : e;
	}
	function lh() {
		var e = N.A;
		return (N.A = gy), e;
	}
	function Vu() {
		(Me = 4),
			wn || ((ye & 4194048) !== ye && Ot.current !== null) || (Ha = !0),
			((En & 134217727) === 0 && (la & 134217727) === 0) ||
				je === null ||
				jn(je, ye, jt, !1);
	}
	function Xu(e, t, n) {
		var a = xe;
		xe |= 2;
		var s = ah(),
			o = lh();
		(je !== e || ye !== t) && ((gr = null), Qa(e, t)), (t = !1);
		var v = Me;
		e: do
			try {
				if (Se !== 0 && he !== null) {
					var g = he,
						x = yt;
					switch (Se) {
						case 8:
							Qu(), (v = 6);
							break e;
						case 3:
						case 2:
						case 9:
						case 6: {
							Ot.current === null && (t = !0);
							var R = Se;
							if (((Se = 0), (yt = null), Va(e, g, x, R), n && Ha)) {
								v = 0;
								break e;
							}
							break;
						}
						default:
							(R = Se), (Se = 0), (yt = null), Va(e, g, x, R);
					}
				}
				xy(), (v = Me);
				break;
			} catch (k) {
				nh(e, k);
			}
		while (!0);
		return (
			t && e.shellSuspendCounter++,
			(Jt = Fn = null),
			(xe = a),
			(N.H = s),
			(N.A = o),
			he === null && ((je = null), (ye = 0), Gi()),
			v
		);
	}
	function xy() {
		for (; he !== null; ) ih(he);
	}
	function Sy(e, t) {
		var n = xe;
		xe |= 2;
		var a = ah(),
			s = lh();
		je !== e || ye !== t
			? ((gr = null), (yr = qt() + 500), Qa(e, t))
			: (Ha = dl(e, t));
		e: do
			try {
				if (Se !== 0 && he !== null) {
					t = he;
					var o = yt;
					t: switch (Se) {
						case 1:
							(Se = 0), (yt = null), Va(e, t, o, 1);
							break;
						case 2:
						case 9:
							if (yf(o)) {
								(Se = 0), (yt = null), rh(t);
								break;
							}
							(t = () => {
								(Se !== 2 && Se !== 9) || je !== e || (Se = 7), Yt(e);
							}),
								o.then(t, t);
							break e;
						case 3:
							Se = 7;
							break e;
						case 4:
							Se = 5;
							break e;
						case 7:
							yf(o)
								? ((Se = 0), (yt = null), rh(t))
								: ((Se = 0), (yt = null), Va(e, t, o, 7));
							break;
						case 5: {
							var v = null;
							switch (he.tag) {
								case 26:
									v = he.memoizedState;
								case 5:
								case 27: {
									var g = he;
									if (!v || Gh(v)) {
										(Se = 0), (yt = null);
										var x = g.sibling;
										if (x !== null) he = x;
										else {
											var R = g.return;
											R !== null ? ((he = R), _r(R)) : (he = null);
										}
										break t;
									}
								}
							}
							(Se = 0), (yt = null), Va(e, t, o, 5);
							break;
						}
						case 6:
							(Se = 0), (yt = null), Va(e, t, o, 6);
							break;
						case 8:
							Qu(), (Me = 6);
							break e;
						default:
							throw Error(i(462));
					}
				}
				wy();
				break;
			} catch (k) {
				nh(e, k);
			}
		while (!0);
		return (
			(Jt = Fn = null),
			(N.H = a),
			(N.A = s),
			(xe = n),
			he !== null ? 0 : ((je = null), (ye = 0), Gi(), Me)
		);
	}
	function wy() {
		for (; he !== null && !Vp(); ) ih(he);
	}
	function ih(e) {
		var t = Ud(e.alternate, e, an);
		(e.memoizedProps = e.pendingProps), t === null ? _r(e) : (he = t);
	}
	function rh(e) {
		var t = e,
			n = t.alternate;
		switch (t.tag) {
			case 15:
			case 0:
				t = Od(n, t, t.pendingProps, t.type, void 0, ye);
				break;
			case 11:
				t = Od(n, t, t.pendingProps, t.type.render, t.ref, ye);
				break;
			case 5:
				su(t);
			default:
				Dd(n, t), (t = he = sf(t, an)), (t = Ud(n, t, an));
		}
		(e.memoizedProps = e.pendingProps), t === null ? _r(e) : (he = t);
	}
	function Va(e, t, n, a) {
		(Jt = Fn = null), su(t), (ka = null), (Hl = 0);
		var s = t.return;
		try {
			if (dy(e, s, t, n, ye)) {
				(Me = 1), fr(e, St(n, e.current)), (he = null);
				return;
			}
		} catch (o) {
			if (s !== null) throw ((he = s), o);
			(Me = 1), fr(e, St(n, e.current)), (he = null);
			return;
		}
		t.flags & 32768
			? (_e || a === 1
					? (e = !0)
					: Ha || (ye & 536870912) !== 0
						? (e = !1)
						: ((wn = e = !0),
							(a === 2 || a === 9 || a === 3 || a === 6) &&
								((a = Ot.current),
								a !== null && a.tag === 13 && (a.flags |= 16384))),
				sh(t, e))
			: _r(t);
	}
	function _r(e) {
		var t = e;
		do {
			if ((t.flags & 32768) !== 0) {
				sh(t, wn);
				return;
			}
			e = t.return;
			var n = vy(t.alternate, t, an);
			if (n !== null) {
				he = n;
				return;
			}
			if (((t = t.sibling), t !== null)) {
				he = t;
				return;
			}
			he = t = e;
		} while (t !== null);
		Me === 0 && (Me = 5);
	}
	function sh(e, t) {
		do {
			var n = py(e.alternate, e);
			if (n !== null) {
				(n.flags &= 32767), (he = n);
				return;
			}
			if (
				((n = e.return),
				n !== null &&
					((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
				!t && ((e = e.sibling), e !== null))
			) {
				he = e;
				return;
			}
			he = e = n;
		} while (e !== null);
		(Me = 6), (he = null);
	}
	function uh(e, t, n, a, s, o, v, g, x) {
		e.cancelPendingCommit = null;
		do xr();
		while (Pe !== 0);
		if ((xe & 6) !== 0) throw Error(i(327));
		if (t !== null) {
			if (t === e.current) throw Error(i(177));
			if (
				((o = t.lanes | t.childLanes),
				(o |= ks),
				tm(e, n, o, v, g, x),
				e === je && ((he = je = null), (ye = 0)),
				(Ya = t),
				(On = e),
				($a = n),
				(Gu = o),
				(Yu = s),
				(Fd = a),
				(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
					? ((e.callbackNode = null),
						(e.callbackPriority = 0),
						jy(Oi, () => (hh(), null)))
					: ((e.callbackNode = null), (e.callbackPriority = 0)),
				(a = (t.flags & 13878) !== 0),
				(t.subtreeFlags & 13878) !== 0 || a)
			) {
				(a = N.T), (N.T = null), (s = T.p), (T.p = 2), (v = xe), (xe |= 4);
				try {
					my(e, t, n);
				} finally {
					(xe = v), (T.p = s), (N.T = a);
				}
			}
			(Pe = 1), oh(), ch(), fh();
		}
	}
	function oh() {
		if (Pe === 1) {
			Pe = 0;
			var e = On,
				t = Ya,
				n = (t.flags & 13878) !== 0;
			if ((t.subtreeFlags & 13878) !== 0 || n) {
				(n = N.T), (N.T = null);
				var a = T.p;
				T.p = 2;
				var s = xe;
				xe |= 4;
				try {
					Vd(t, e);
					var o = lo,
						v = Pc(e.containerInfo),
						g = o.focusedElem,
						x = o.selectionRange;
					if (
						v !== g &&
						g &&
						g.ownerDocument &&
						Jc(g.ownerDocument.documentElement, g)
					) {
						if (x !== null && Cs(g)) {
							var R = x.start,
								k = x.end;
							if ((k === void 0 && (k = R), "selectionStart" in g))
								(g.selectionStart = R),
									(g.selectionEnd = Math.min(k, g.value.length));
							else {
								var L = g.ownerDocument || document,
									C = (L && L.defaultView) || window;
								if (C.getSelection) {
									var U = C.getSelection(),
										ie = g.textContent.length,
										ne = Math.min(x.start, ie),
										Te = x.end === void 0 ? ne : Math.min(x.end, ie);
									!U.extend && ne > Te && ((v = Te), (Te = ne), (ne = v));
									var O = Zc(g, ne),
										E = Zc(g, Te);
									if (
										O &&
										E &&
										(U.rangeCount !== 1 ||
											U.anchorNode !== O.node ||
											U.anchorOffset !== O.offset ||
											U.focusNode !== E.node ||
											U.focusOffset !== E.offset)
									) {
										var A = L.createRange();
										A.setStart(O.node, O.offset),
											U.removeAllRanges(),
											ne > Te
												? (U.addRange(A), U.extend(E.node, E.offset))
												: (A.setEnd(E.node, E.offset), U.addRange(A));
									}
								}
							}
						}
						for (L = [], U = g; (U = U.parentNode); )
							U.nodeType === 1 &&
								L.push({ element: U, left: U.scrollLeft, top: U.scrollTop });
						for (
							typeof g.focus == "function" && g.focus(), g = 0;
							g < L.length;
							g++
						) {
							var q = L[g];
							(q.element.scrollLeft = q.left), (q.element.scrollTop = q.top);
						}
					}
					(Mr = !!ao), (lo = ao = null);
				} finally {
					(xe = s), (T.p = a), (N.T = n);
				}
			}
			(e.current = t), (Pe = 2);
		}
	}
	function ch() {
		if (Pe === 2) {
			Pe = 0;
			var e = On,
				t = Ya,
				n = (t.flags & 8772) !== 0;
			if ((t.subtreeFlags & 8772) !== 0 || n) {
				(n = N.T), (N.T = null);
				var a = T.p;
				T.p = 2;
				var s = xe;
				xe |= 4;
				try {
					Gd(e, t.alternate, t);
				} finally {
					(xe = s), (T.p = a), (N.T = n);
				}
			}
			Pe = 3;
		}
	}
	function fh() {
		if (Pe === 4 || Pe === 3) {
			(Pe = 0), Xp();
			var e = On,
				t = Ya,
				n = $a,
				a = Fd;
			(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
				? (Pe = 5)
				: ((Pe = 0), (Ya = On = null), dh(e, e.pendingLanes));
			var s = e.pendingLanes;
			if (
				(s === 0 && (Tn = null),
				cs(n),
				(t = t.stateNode),
				ft && typeof ft.onCommitFiberRoot == "function")
			)
				try {
					ft.onCommitFiberRoot(fl, t, void 0, (t.current.flags & 128) === 128);
				} catch {}
			if (a !== null) {
				(t = N.T), (s = T.p), (T.p = 2), (N.T = null);
				try {
					for (var o = e.onRecoverableError, v = 0; v < a.length; v++) {
						var g = a[v];
						o(g.value, { componentStack: g.stack });
					}
				} finally {
					(N.T = t), (T.p = s);
				}
			}
			($a & 3) !== 0 && xr(),
				Yt(e),
				(s = e.pendingLanes),
				(n & 4194090) !== 0 && (s & 42) !== 0
					? e === $u
						? Jl++
						: ((Jl = 0), ($u = e))
					: (Jl = 0),
				Pl(0);
		}
	}
	function dh(e, t) {
		(e.pooledCacheLanes &= t) === 0 &&
			((t = e.pooledCache), t != null && ((e.pooledCache = null), Rl(t)));
	}
	function xr(e) {
		return oh(), ch(), fh(), hh();
	}
	function hh() {
		if (Pe !== 5) return !1;
		var e = On,
			t = Gu;
		Gu = 0;
		var n = cs($a),
			a = N.T,
			s = T.p;
		try {
			(T.p = 32 > n ? 32 : n), (N.T = null), (n = Yu), (Yu = null);
			var o = On,
				v = $a;
			if (((Pe = 0), (Ya = On = null), ($a = 0), (xe & 6) !== 0))
				throw Error(i(331));
			var g = xe;
			if (
				((xe |= 4),
				Pd(o.current),
				Kd(o, o.current, v, n),
				(xe = g),
				Pl(0, !1),
				ft && typeof ft.onPostCommitFiberRoot == "function")
			)
				try {
					ft.onPostCommitFiberRoot(fl, o);
				} catch {}
			return !0;
		} finally {
			(T.p = s), (N.T = a), dh(e, t);
		}
	}
	function vh(e, t, n) {
		(t = St(n, t)),
			(t = xu(e.stateNode, t, 2)),
			(e = mn(e, t, 2)),
			e !== null && (hl(e, 2), Yt(e));
	}
	function Oe(e, t, n) {
		if (e.tag === 3) vh(e, e, n);
		else
			for (; t !== null; ) {
				if (t.tag === 3) {
					vh(t, e, n);
					break;
				} else if (t.tag === 1) {
					var a = t.stateNode;
					if (
						typeof t.type.getDerivedStateFromError == "function" ||
						(typeof a.componentDidCatch == "function" &&
							(Tn === null || !Tn.has(a)))
					) {
						(e = St(n, e)),
							(n = gd(2)),
							(a = mn(t, n, 2)),
							a !== null && (bd(n, a, t, e), hl(a, 2), Yt(a));
						break;
					}
				}
				t = t.return;
			}
	}
	function Ku(e, t, n) {
		var a = e.pingCache;
		if (a === null) {
			a = e.pingCache = new by();
			var s = new Set();
			a.set(t, s);
		} else (s = a.get(t)), s === void 0 && ((s = new Set()), a.set(t, s));
		s.has(n) ||
			((qu = !0), s.add(n), (e = Ey.bind(null, e, t, n)), t.then(e, e));
	}
	function Ey(e, t, n) {
		var a = e.pingCache;
		a !== null && a.delete(t),
			(e.pingedLanes |= e.suspendedLanes & n),
			(e.warmLanes &= ~n),
			je === e &&
				(ye & n) === n &&
				(Me === 4 || (Me === 3 && (ye & 62914560) === ye && 300 > qt() - Hu)
					? (xe & 2) === 0 && Qa(e, 0)
					: (Lu |= n),
				Ga === ye && (Ga = 0)),
			Yt(e);
	}
	function ph(e, t) {
		t === 0 && (t = cc()), (e = Oa(e, t)), e !== null && (hl(e, t), Yt(e));
	}
	function Ty(e) {
		var t = e.memoizedState,
			n = 0;
		t !== null && (n = t.retryLane), ph(e, n);
	}
	function Oy(e, t) {
		var n = 0;
		switch (e.tag) {
			case 13: {
				var a = e.stateNode,
					s = e.memoizedState;
				s !== null && (n = s.retryLane);
				break;
			}
			case 19:
				a = e.stateNode;
				break;
			case 22:
				a = e.stateNode._retryCache;
				break;
			default:
				throw Error(i(314));
		}
		a !== null && a.delete(t), ph(e, n);
	}
	function jy(e, t) {
		return rs(e, t);
	}
	var Sr = null,
		Xa = null,
		Zu = !1,
		wr = !1,
		Ju = !1,
		ia = 0;
	function Yt(e) {
		e !== Xa &&
			e.next === null &&
			(Xa === null ? (Sr = Xa = e) : (Xa = Xa.next = e)),
			(wr = !0),
			Zu || ((Zu = !0), Ry());
	}
	function Pl(e, t) {
		if (!Ju && wr) {
			Ju = !0;
			do
				for (var n = !1, a = Sr; a !== null; ) {
					if (e !== 0) {
						var s = a.pendingLanes;
						if (s === 0) var o = 0;
						else {
							var v = a.suspendedLanes,
								g = a.pingedLanes;
							(o = (1 << (31 - dt(42 | e) + 1)) - 1),
								(o &= s & ~(v & ~g)),
								(o = o & 201326741 ? (o & 201326741) | 1 : o ? o | 2 : 0);
						}
						o !== 0 && ((n = !0), bh(a, o));
					} else
						(o = ye),
							(o = Ri(
								a,
								a === je ? o : 0,
								a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
							)),
							(o & 3) === 0 || dl(a, o) || ((n = !0), bh(a, o));
					a = a.next;
				}
			while (n);
			Ju = !1;
		}
	}
	function Ay() {
		mh();
	}
	function mh() {
		wr = Zu = !1;
		var e = 0;
		ia !== 0 && (qy() && (e = ia), (ia = 0));
		for (var t = qt(), n = null, a = Sr; a !== null; ) {
			var s = a.next,
				o = yh(a, t);
			o === 0
				? ((a.next = null),
					n === null ? (Sr = s) : (n.next = s),
					s === null && (Xa = n))
				: ((n = a), (e !== 0 || (o & 3) !== 0) && (wr = !0)),
				(a = s);
		}
		Pl(e);
	}
	function yh(e, t) {
		for (
			var n = e.suspendedLanes,
				a = e.pingedLanes,
				s = e.expirationTimes,
				o = e.pendingLanes & -62914561;
			0 < o;
		) {
			var v = 31 - dt(o),
				g = 1 << v,
				x = s[v];
			x === -1
				? ((g & n) === 0 || (g & a) !== 0) && (s[v] = em(g, t))
				: x <= t && (e.expiredLanes |= g),
				(o &= ~g);
		}
		if (
			((t = je),
			(n = ye),
			(n = Ri(
				e,
				e === t ? n : 0,
				e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
			)),
			(a = e.callbackNode),
			n === 0 ||
				(e === t && (Se === 2 || Se === 9)) ||
				e.cancelPendingCommit !== null)
		)
			return (
				a !== null && a !== null && ss(a),
				(e.callbackNode = null),
				(e.callbackPriority = 0)
			);
		if ((n & 3) === 0 || dl(e, n)) {
			if (((t = n & -n), t === e.callbackPriority)) return t;
			switch ((a !== null && ss(a), cs(n))) {
				case 2:
				case 8:
					n = sc;
					break;
				case 32:
					n = Oi;
					break;
				case 268435456:
					n = uc;
					break;
				default:
					n = Oi;
			}
			return (
				(a = gh.bind(null, e)),
				(n = rs(n, a)),
				(e.callbackPriority = t),
				(e.callbackNode = n),
				t
			);
		}
		return (
			a !== null && a !== null && ss(a),
			(e.callbackPriority = 2),
			(e.callbackNode = null),
			2
		);
	}
	function gh(e, t) {
		if (Pe !== 0 && Pe !== 5)
			return (e.callbackNode = null), (e.callbackPriority = 0), null;
		var n = e.callbackNode;
		if (xr() && e.callbackNode !== n) return null;
		var a = ye;
		return (
			(a = Ri(
				e,
				e === je ? a : 0,
				e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
			)),
			a === 0
				? null
				: (eh(e, a, t),
					yh(e, qt()),
					e.callbackNode != null && e.callbackNode === n
						? gh.bind(null, e)
						: null)
		);
	}
	function bh(e, t) {
		if (xr()) return null;
		eh(e, t, !0);
	}
	function Ry() {
		By(() => {
			(xe & 6) !== 0 ? rs(rc, Ay) : mh();
		});
	}
	function Pu() {
		return ia === 0 && (ia = oc()), ia;
	}
	function _h(e) {
		return e == null || typeof e == "symbol" || typeof e == "boolean"
			? null
			: typeof e == "function"
				? e
				: Di("" + e);
	}
	function xh(e, t) {
		var n = t.ownerDocument.createElement("input");
		return (
			(n.name = t.name),
			(n.value = t.value),
			e.id && n.setAttribute("form", e.id),
			t.parentNode.insertBefore(n, t),
			(e = new FormData(e)),
			n.parentNode.removeChild(n),
			e
		);
	}
	function Ny(e, t, n, a, s) {
		if (t === "submit" && n && n.stateNode === s) {
			var o = _h((s[it] || null).action),
				v = a.submitter;
			v &&
				((t = (t = v[it] || null)
					? _h(t.formAction)
					: v.getAttribute("formAction")),
				t !== null && ((o = t), (v = null)));
			var g = new Li("action", "action", null, a, s);
			e.push({
				event: g,
				listeners: [
					{
						instance: null,
						listener: () => {
							if (a.defaultPrevented) {
								if (ia !== 0) {
									var x = v ? xh(s, v) : new FormData(s);
									mu(
										n,
										{ pending: !0, data: x, method: s.method, action: o },
										null,
										x,
									);
								}
							} else
								typeof o == "function" &&
									(g.preventDefault(),
									(x = v ? xh(s, v) : new FormData(s)),
									mu(
										n,
										{ pending: !0, data: x, method: s.method, action: o },
										o,
										x,
									));
						},
						currentTarget: s,
					},
				],
			});
		}
	}
	for (var Wu = 0; Wu < zs.length; Wu++) {
		var Fu = zs[Wu],
			Cy = Fu.toLowerCase(),
			Uy = Fu[0].toUpperCase() + Fu.slice(1);
		Ct(Cy, "on" + Uy);
	}
	Ct(Ic, "onAnimationEnd"),
		Ct(ef, "onAnimationIteration"),
		Ct(tf, "onAnimationStart"),
		Ct("dblclick", "onDoubleClick"),
		Ct("focusin", "onFocus"),
		Ct("focusout", "onBlur"),
		Ct(Jm, "onTransitionRun"),
		Ct(Pm, "onTransitionStart"),
		Ct(Wm, "onTransitionCancel"),
		Ct(nf, "onTransitionEnd"),
		ma("onMouseEnter", ["mouseout", "mouseover"]),
		ma("onMouseLeave", ["mouseout", "mouseover"]),
		ma("onPointerEnter", ["pointerout", "pointerover"]),
		ma("onPointerLeave", ["pointerout", "pointerover"]),
		$n(
			"onChange",
			"change click focusin focusout input keydown keyup selectionchange".split(
				" ",
			),
		),
		$n(
			"onSelect",
			"focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
				" ",
			),
		),
		$n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
		$n(
			"onCompositionEnd",
			"compositionend focusout keydown keypress keyup mousedown".split(" "),
		),
		$n(
			"onCompositionStart",
			"compositionstart focusout keydown keypress keyup mousedown".split(" "),
		),
		$n(
			"onCompositionUpdate",
			"compositionupdate focusout keydown keypress keyup mousedown".split(" "),
		);
	var Wl =
			"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
				" ",
			),
		My = new Set(
			"beforetoggle cancel close invalid load scroll scrollend toggle"
				.split(" ")
				.concat(Wl),
		);
	function Sh(e, t) {
		t = (t & 4) !== 0;
		for (var n = 0; n < e.length; n++) {
			var a = e[n],
				s = a.event;
			a = a.listeners;
			e: {
				var o = void 0;
				if (t)
					for (var v = a.length - 1; 0 <= v; v--) {
						var g = a[v],
							x = g.instance,
							R = g.currentTarget;
						if (((g = g.listener), x !== o && s.isPropagationStopped()))
							break e;
						(o = g), (s.currentTarget = R);
						try {
							o(s);
						} catch (k) {
							cr(k);
						}
						(s.currentTarget = null), (o = x);
					}
				else
					for (v = 0; v < a.length; v++) {
						if (
							((g = a[v]),
							(x = g.instance),
							(R = g.currentTarget),
							(g = g.listener),
							x !== o && s.isPropagationStopped())
						)
							break e;
						(o = g), (s.currentTarget = R);
						try {
							o(s);
						} catch (k) {
							cr(k);
						}
						(s.currentTarget = null), (o = x);
					}
			}
		}
	}
	function ve(e, t) {
		var n = t[fs];
		n === void 0 && (n = t[fs] = new Set());
		var a = e + "__bubble";
		n.has(a) || (wh(t, e, 2, !1), n.add(a));
	}
	function Iu(e, t, n) {
		var a = 0;
		t && (a |= 4), wh(n, e, a, t);
	}
	var Er = "_reactListening" + Math.random().toString(36).slice(2);
	function eo(e) {
		if (!e[Er]) {
			(e[Er] = !0),
				pc.forEach((n) => {
					n !== "selectionchange" && (My.has(n) || Iu(n, !1, e), Iu(n, !0, e));
				});
			var t = e.nodeType === 9 ? e : e.ownerDocument;
			t === null || t[Er] || ((t[Er] = !0), Iu("selectionchange", !1, t));
		}
	}
	function wh(e, t, n, a) {
		switch (Kh(t)) {
			case 2: {
				var s = rg;
				break;
			}
			case 8:
				s = sg;
				break;
			default:
				s = po;
		}
		(n = s.bind(null, t, n, e)),
			(s = void 0),
			!Ss ||
				(t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
				(s = !0),
			a
				? s !== void 0
					? e.addEventListener(t, n, { capture: !0, passive: s })
					: e.addEventListener(t, n, !0)
				: s !== void 0
					? e.addEventListener(t, n, { passive: s })
					: e.addEventListener(t, n, !1);
	}
	function to(e, t, n, a, s) {
		var o = a;
		if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
			e: for (;;) {
				if (a === null) return;
				var v = a.tag;
				if (v === 3 || v === 4) {
					var g = a.stateNode.containerInfo;
					if (g === s) break;
					if (v === 4)
						for (v = a.return; v !== null; ) {
							var x = v.tag;
							if ((x === 3 || x === 4) && v.stateNode.containerInfo === s)
								return;
							v = v.return;
						}
					for (; g !== null; ) {
						if (((v = ha(g)), v === null)) return;
						if (((x = v.tag), x === 5 || x === 6 || x === 26 || x === 27)) {
							a = o = v;
							continue e;
						}
						g = g.parentNode;
					}
				}
				a = a.return;
			}
		Rc(() => {
			var R = o,
				k = _s(n),
				L = [];
			e: {
				var C = af.get(e);
				if (C !== void 0) {
					var U = Li,
						ie = e;
					switch (e) {
						case "keypress":
							if (ki(n) === 0) break e;
						case "keydown":
						case "keyup":
							U = jm;
							break;
						case "focusin":
							(ie = "focus"), (U = Os);
							break;
						case "focusout":
							(ie = "blur"), (U = Os);
							break;
						case "beforeblur":
						case "afterblur":
							U = Os;
							break;
						case "click":
							if (n.button === 2) break e;
						case "auxclick":
						case "dblclick":
						case "mousedown":
						case "mousemove":
						case "mouseup":
						case "mouseout":
						case "mouseover":
						case "contextmenu":
							U = Uc;
							break;
						case "drag":
						case "dragend":
						case "dragenter":
						case "dragexit":
						case "dragleave":
						case "dragover":
						case "dragstart":
						case "drop":
							U = pm;
							break;
						case "touchcancel":
						case "touchend":
						case "touchmove":
						case "touchstart":
							U = Nm;
							break;
						case Ic:
						case ef:
						case tf:
							U = gm;
							break;
						case nf:
							U = Um;
							break;
						case "scroll":
						case "scrollend":
							U = hm;
							break;
						case "wheel":
							U = Dm;
							break;
						case "copy":
						case "cut":
						case "paste":
							U = _m;
							break;
						case "gotpointercapture":
						case "lostpointercapture":
						case "pointercancel":
						case "pointerdown":
						case "pointermove":
						case "pointerout":
						case "pointerover":
						case "pointerup":
							U = Dc;
							break;
						case "toggle":
						case "beforetoggle":
							U = km;
					}
					var ne = (t & 4) !== 0,
						Te = !ne && (e === "scroll" || e === "scrollend"),
						O = ne ? (C !== null ? C + "Capture" : null) : C;
					ne = [];
					for (var E = R, A; E !== null; ) {
						var q = E;
						if (
							((A = q.stateNode),
							(q = q.tag),
							(q !== 5 && q !== 26 && q !== 27) ||
								A === null ||
								O === null ||
								((q = ml(E, O)), q != null && ne.push(Fl(E, q, A))),
							Te)
						)
							break;
						E = E.return;
					}
					0 < ne.length &&
						((C = new U(C, ie, null, n, k)),
						L.push({ event: C, listeners: ne }));
				}
			}
			if ((t & 7) === 0) {
				e: {
					if (
						((C = e === "mouseover" || e === "pointerover"),
						(U = e === "mouseout" || e === "pointerout"),
						C &&
							n !== bs &&
							(ie = n.relatedTarget || n.fromElement) &&
							(ha(ie) || ie[da]))
					)
						break e;
					if (
						(U || C) &&
						((C =
							k.window === k
								? k
								: (C = k.ownerDocument)
									? C.defaultView || C.parentWindow
									: window),
						U
							? ((ie = n.relatedTarget || n.toElement),
								(U = R),
								(ie = ie ? ha(ie) : null),
								ie !== null &&
									((Te = f(ie)),
									(ne = ie.tag),
									ie !== Te || (ne !== 5 && ne !== 27 && ne !== 6)) &&
									(ie = null))
							: ((U = null), (ie = R)),
						U !== ie)
					) {
						if (
							((ne = Uc),
							(q = "onMouseLeave"),
							(O = "onMouseEnter"),
							(E = "mouse"),
							(e === "pointerout" || e === "pointerover") &&
								((ne = Dc),
								(q = "onPointerLeave"),
								(O = "onPointerEnter"),
								(E = "pointer")),
							(Te = U == null ? C : pl(U)),
							(A = ie == null ? C : pl(ie)),
							(C = new ne(q, E + "leave", U, n, k)),
							(C.target = Te),
							(C.relatedTarget = A),
							(q = null),
							ha(k) === R &&
								((ne = new ne(O, E + "enter", ie, n, k)),
								(ne.target = A),
								(ne.relatedTarget = Te),
								(q = ne)),
							(Te = q),
							U && ie)
						)
							t: {
								for (ne = U, O = ie, E = 0, A = ne; A; A = Ka(A)) E++;
								for (A = 0, q = O; q; q = Ka(q)) A++;
								for (; 0 < E - A; ) (ne = Ka(ne)), E--;
								for (; 0 < A - E; ) (O = Ka(O)), A--;
								for (; E--; ) {
									if (ne === O || (O !== null && ne === O.alternate)) break t;
									(ne = Ka(ne)), (O = Ka(O));
								}
								ne = null;
							}
						else ne = null;
						U !== null && Eh(L, C, U, ne, !1),
							ie !== null && Te !== null && Eh(L, Te, ie, ne, !0);
					}
				}
				e: {
					if (
						((C = R ? pl(R) : window),
						(U = C.nodeName && C.nodeName.toLowerCase()),
						U === "select" || (U === "input" && C.type === "file"))
					)
						var W = Yc;
					else if (Hc(C))
						if ($c) W = Xm;
						else {
							W = Qm;
							var de = $m;
						}
					else
						(U = C.nodeName),
							!U ||
							U.toLowerCase() !== "input" ||
							(C.type !== "checkbox" && C.type !== "radio")
								? R && gs(R.elementType) && (W = Yc)
								: (W = Vm);
					if (W && (W = W(e, R))) {
						Gc(L, W, n, k);
						break e;
					}
					de && de(e, C, R),
						e === "focusout" &&
							R &&
							C.type === "number" &&
							R.memoizedProps.value != null &&
							ys(C, "number", C.value);
				}
				switch (((de = R ? pl(R) : window), e)) {
					case "focusin":
						(Hc(de) || de.contentEditable === "true") &&
							((wa = de), (Us = R), (El = null));
						break;
					case "focusout":
						El = Us = wa = null;
						break;
					case "mousedown":
						Ms = !0;
						break;
					case "contextmenu":
					case "mouseup":
					case "dragend":
						(Ms = !1), Wc(L, n, k);
						break;
					case "selectionchange":
						if (Zm) break;
					case "keydown":
					case "keyup":
						Wc(L, n, k);
				}
				var F;
				if (As)
					e: {
						switch (e) {
							case "compositionstart": {
								var le = "onCompositionStart";
								break e;
							}
							case "compositionend":
								le = "onCompositionEnd";
								break e;
							case "compositionupdate":
								le = "onCompositionUpdate";
								break e;
						}
						le = void 0;
					}
				else
					Sa
						? Lc(e, n) && (le = "onCompositionEnd")
						: e === "keydown" &&
							n.keyCode === 229 &&
							(le = "onCompositionStart");
				le &&
					(zc &&
						n.locale !== "ko" &&
						(Sa || le !== "onCompositionStart"
							? le === "onCompositionEnd" && Sa && (F = Nc())
							: ((dn = k),
								(ws = "value" in dn ? dn.value : dn.textContent),
								(Sa = !0))),
					(de = Tr(R, le)),
					0 < de.length &&
						((le = new Mc(le, e, null, n, k)),
						L.push({ event: le, listeners: de }),
						F ? (le.data = F) : ((F = Bc(n)), F !== null && (le.data = F)))),
					(F = Lm ? Bm(e, n) : Hm(e, n)) &&
						((le = Tr(R, "onBeforeInput")),
						0 < le.length &&
							((de = new Mc("onBeforeInput", "beforeinput", null, n, k)),
							L.push({ event: de, listeners: le }),
							(de.data = F))),
					Ny(L, e, R, n, k);
			}
			Sh(L, t);
		});
	}
	function Fl(e, t, n) {
		return { instance: e, listener: t, currentTarget: n };
	}
	function Tr(e, t) {
		for (var n = t + "Capture", a = []; e !== null; ) {
			var s = e,
				o = s.stateNode;
			if (
				((s = s.tag),
				(s !== 5 && s !== 26 && s !== 27) ||
					o === null ||
					((s = ml(e, n)),
					s != null && a.unshift(Fl(e, s, o)),
					(s = ml(e, t)),
					s != null && a.push(Fl(e, s, o))),
				e.tag === 3)
			)
				return a;
			e = e.return;
		}
		return [];
	}
	function Ka(e) {
		if (e === null) return null;
		do e = e.return;
		while (e && e.tag !== 5 && e.tag !== 27);
		return e || null;
	}
	function Eh(e, t, n, a, s) {
		for (var o = t._reactName, v = []; n !== null && n !== a; ) {
			var g = n,
				x = g.alternate,
				R = g.stateNode;
			if (((g = g.tag), x !== null && x === a)) break;
			(g !== 5 && g !== 26 && g !== 27) ||
				R === null ||
				((x = R),
				s
					? ((R = ml(n, o)), R != null && v.unshift(Fl(n, R, x)))
					: s || ((R = ml(n, o)), R != null && v.push(Fl(n, R, x)))),
				(n = n.return);
		}
		v.length !== 0 && e.push({ event: t, listeners: v });
	}
	var Dy = /\r\n?/g,
		zy = /\u0000|\uFFFD/g;
	function Th(e) {
		return (typeof e == "string" ? e : "" + e)
			.replace(
				Dy,
				`
`,
			)
			.replace(zy, "");
	}
	function Oh(e, t) {
		return (t = Th(t)), Th(e) === t;
	}
	function Or() {}
	function Ee(e, t, n, a, s, o) {
		switch (n) {
			case "children":
				typeof a == "string"
					? t === "body" || (t === "textarea" && a === "") || ba(e, a)
					: (typeof a == "number" || typeof a == "bigint") &&
						t !== "body" &&
						ba(e, "" + a);
				break;
			case "className":
				Ci(e, "class", a);
				break;
			case "tabIndex":
				Ci(e, "tabindex", a);
				break;
			case "dir":
			case "role":
			case "viewBox":
			case "width":
			case "height":
				Ci(e, n, a);
				break;
			case "style":
				jc(e, a, o);
				break;
			case "data":
				if (t !== "object") {
					Ci(e, "data", a);
					break;
				}
			case "src":
			case "href":
				if (a === "" && (t !== "a" || n !== "href")) {
					e.removeAttribute(n);
					break;
				}
				if (
					a == null ||
					typeof a == "function" ||
					typeof a == "symbol" ||
					typeof a == "boolean"
				) {
					e.removeAttribute(n);
					break;
				}
				(a = Di("" + a)), e.setAttribute(n, a);
				break;
			case "action":
			case "formAction":
				if (typeof a == "function") {
					e.setAttribute(
						n,
						"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
					);
					break;
				} else
					typeof o == "function" &&
						(n === "formAction"
							? (t !== "input" && Ee(e, t, "name", s.name, s, null),
								Ee(e, t, "formEncType", s.formEncType, s, null),
								Ee(e, t, "formMethod", s.formMethod, s, null),
								Ee(e, t, "formTarget", s.formTarget, s, null))
							: (Ee(e, t, "encType", s.encType, s, null),
								Ee(e, t, "method", s.method, s, null),
								Ee(e, t, "target", s.target, s, null)));
				if (a == null || typeof a == "symbol" || typeof a == "boolean") {
					e.removeAttribute(n);
					break;
				}
				(a = Di("" + a)), e.setAttribute(n, a);
				break;
			case "onClick":
				a != null && (e.onclick = Or);
				break;
			case "onScroll":
				a != null && ve("scroll", e);
				break;
			case "onScrollEnd":
				a != null && ve("scrollend", e);
				break;
			case "dangerouslySetInnerHTML":
				if (a != null) {
					if (typeof a != "object" || !("__html" in a)) throw Error(i(61));
					if (((n = a.__html), n != null)) {
						if (s.children != null) throw Error(i(60));
						e.innerHTML = n;
					}
				}
				break;
			case "multiple":
				e.multiple = a && typeof a != "function" && typeof a != "symbol";
				break;
			case "muted":
				e.muted = a && typeof a != "function" && typeof a != "symbol";
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "defaultValue":
			case "defaultChecked":
			case "innerHTML":
			case "ref":
				break;
			case "autoFocus":
				break;
			case "xlinkHref":
				if (
					a == null ||
					typeof a == "function" ||
					typeof a == "boolean" ||
					typeof a == "symbol"
				) {
					e.removeAttribute("xlink:href");
					break;
				}
				(n = Di("" + a)),
					e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n);
				break;
			case "contentEditable":
			case "spellCheck":
			case "draggable":
			case "value":
			case "autoReverse":
			case "externalResourcesRequired":
			case "focusable":
			case "preserveAlpha":
				a != null && typeof a != "function" && typeof a != "symbol"
					? e.setAttribute(n, "" + a)
					: e.removeAttribute(n);
				break;
			case "inert":
			case "allowFullScreen":
			case "async":
			case "autoPlay":
			case "controls":
			case "default":
			case "defer":
			case "disabled":
			case "disablePictureInPicture":
			case "disableRemotePlayback":
			case "formNoValidate":
			case "hidden":
			case "loop":
			case "noModule":
			case "noValidate":
			case "open":
			case "playsInline":
			case "readOnly":
			case "required":
			case "reversed":
			case "scoped":
			case "seamless":
			case "itemScope":
				a && typeof a != "function" && typeof a != "symbol"
					? e.setAttribute(n, "")
					: e.removeAttribute(n);
				break;
			case "capture":
			case "download":
				a === !0
					? e.setAttribute(n, "")
					: a !== !1 &&
							a != null &&
							typeof a != "function" &&
							typeof a != "symbol"
						? e.setAttribute(n, a)
						: e.removeAttribute(n);
				break;
			case "cols":
			case "rows":
			case "size":
			case "span":
				a != null &&
				typeof a != "function" &&
				typeof a != "symbol" &&
				!isNaN(a) &&
				1 <= a
					? e.setAttribute(n, a)
					: e.removeAttribute(n);
				break;
			case "rowSpan":
			case "start":
				a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
					? e.removeAttribute(n)
					: e.setAttribute(n, a);
				break;
			case "popover":
				ve("beforetoggle", e), ve("toggle", e), Ni(e, "popover", a);
				break;
			case "xlinkActuate":
				Qt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
				break;
			case "xlinkArcrole":
				Qt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
				break;
			case "xlinkRole":
				Qt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
				break;
			case "xlinkShow":
				Qt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
				break;
			case "xlinkTitle":
				Qt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
				break;
			case "xlinkType":
				Qt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
				break;
			case "xmlBase":
				Qt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
				break;
			case "xmlLang":
				Qt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
				break;
			case "xmlSpace":
				Qt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
				break;
			case "is":
				Ni(e, "is", a);
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				(!(2 < n.length) ||
					(n[0] !== "o" && n[0] !== "O") ||
					(n[1] !== "n" && n[1] !== "N")) &&
					((n = fm.get(n) || n), Ni(e, n, a));
		}
	}
	function no(e, t, n, a, s, o) {
		switch (n) {
			case "style":
				jc(e, a, o);
				break;
			case "dangerouslySetInnerHTML":
				if (a != null) {
					if (typeof a != "object" || !("__html" in a)) throw Error(i(61));
					if (((n = a.__html), n != null)) {
						if (s.children != null) throw Error(i(60));
						e.innerHTML = n;
					}
				}
				break;
			case "children":
				typeof a == "string"
					? ba(e, a)
					: (typeof a == "number" || typeof a == "bigint") && ba(e, "" + a);
				break;
			case "onScroll":
				a != null && ve("scroll", e);
				break;
			case "onScrollEnd":
				a != null && ve("scrollend", e);
				break;
			case "onClick":
				a != null && (e.onclick = Or);
				break;
			case "suppressContentEditableWarning":
			case "suppressHydrationWarning":
			case "innerHTML":
			case "ref":
				break;
			case "innerText":
			case "textContent":
				break;
			default:
				if (!Object.hasOwn(mc, n))
					e: {
						if (
							n[0] === "o" &&
							n[1] === "n" &&
							((s = n.endsWith("Capture")),
							(t = n.slice(2, s ? n.length - 7 : void 0)),
							(o = e[it] || null),
							(o = o != null ? o[n] : null),
							typeof o == "function" && e.removeEventListener(t, o, s),
							typeof a == "function")
						) {
							typeof o != "function" &&
								o !== null &&
								(n in e
									? (e[n] = null)
									: e.hasAttribute(n) && e.removeAttribute(n)),
								e.addEventListener(t, a, s);
							break e;
						}
						n in e
							? (e[n] = a)
							: a === !0
								? e.setAttribute(n, "")
								: Ni(e, n, a);
					}
		}
	}
	function We(e, t, n) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "img": {
				ve("error", e), ve("load", e);
				var a = !1,
					s = !1,
					o;
				for (o in n)
					if (Object.hasOwn(n, o)) {
						var v = n[o];
						if (v != null)
							switch (o) {
								case "src":
									a = !0;
									break;
								case "srcSet":
									s = !0;
									break;
								case "children":
								case "dangerouslySetInnerHTML":
									throw Error(i(137, t));
								default:
									Ee(e, t, o, v, n, null);
							}
					}
				s && Ee(e, t, "srcSet", n.srcSet, n, null),
					a && Ee(e, t, "src", n.src, n, null);
				return;
			}
			case "input": {
				ve("invalid", e);
				var g = (o = v = s = null),
					x = null,
					R = null;
				for (a in n)
					if (Object.hasOwn(n, a)) {
						var k = n[a];
						if (k != null)
							switch (a) {
								case "name":
									s = k;
									break;
								case "type":
									v = k;
									break;
								case "checked":
									x = k;
									break;
								case "defaultChecked":
									R = k;
									break;
								case "value":
									o = k;
									break;
								case "defaultValue":
									g = k;
									break;
								case "children":
								case "dangerouslySetInnerHTML":
									if (k != null) throw Error(i(137, t));
									break;
								default:
									Ee(e, t, a, k, n, null);
							}
					}
				wc(e, o, g, x, R, v, s, !1), Ui(e);
				return;
			}
			case "select":
				ve("invalid", e), (a = v = o = null);
				for (s in n)
					if (Object.hasOwn(n, s) && ((g = n[s]), g != null))
						switch (s) {
							case "value":
								o = g;
								break;
							case "defaultValue":
								v = g;
								break;
							case "multiple":
								a = g;
							default:
								Ee(e, t, s, g, n, null);
						}
				(t = o),
					(n = v),
					(e.multiple = !!a),
					t != null ? ga(e, !!a, t, !1) : n != null && ga(e, !!a, n, !0);
				return;
			case "textarea":
				ve("invalid", e), (o = s = a = null);
				for (v in n)
					if (Object.hasOwn(n, v) && ((g = n[v]), g != null))
						switch (v) {
							case "value":
								a = g;
								break;
							case "defaultValue":
								s = g;
								break;
							case "children":
								o = g;
								break;
							case "dangerouslySetInnerHTML":
								if (g != null) throw Error(i(91));
								break;
							default:
								Ee(e, t, v, g, n, null);
						}
				Tc(e, a, s, o), Ui(e);
				return;
			case "option":
				for (x in n)
					if (Object.hasOwn(n, x) && ((a = n[x]), a != null))
						switch (x) {
							case "selected":
								e.selected =
									a && typeof a != "function" && typeof a != "symbol";
								break;
							default:
								Ee(e, t, x, a, n, null);
						}
				return;
			case "dialog":
				ve("beforetoggle", e), ve("toggle", e), ve("cancel", e), ve("close", e);
				break;
			case "iframe":
			case "object":
				ve("load", e);
				break;
			case "video":
			case "audio":
				for (a = 0; a < Wl.length; a++) ve(Wl[a], e);
				break;
			case "image":
				ve("error", e), ve("load", e);
				break;
			case "details":
				ve("toggle", e);
				break;
			case "embed":
			case "source":
			case "link":
				ve("error", e), ve("load", e);
			case "area":
			case "base":
			case "br":
			case "col":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "track":
			case "wbr":
			case "menuitem":
				for (R in n)
					if (Object.hasOwn(n, R) && ((a = n[R]), a != null))
						switch (R) {
							case "children":
							case "dangerouslySetInnerHTML":
								throw Error(i(137, t));
							default:
								Ee(e, t, R, a, n, null);
						}
				return;
			default:
				if (gs(t)) {
					for (k in n)
						Object.hasOwn(n, k) &&
							((a = n[k]), a !== void 0 && no(e, t, k, a, n, void 0));
					return;
				}
		}
		for (g in n)
			Object.hasOwn(n, g) && ((a = n[g]), a != null && Ee(e, t, g, a, n, null));
	}
	function ky(e, t, n, a) {
		switch (t) {
			case "div":
			case "span":
			case "svg":
			case "path":
			case "a":
			case "g":
			case "p":
			case "li":
				break;
			case "input": {
				var s = null,
					o = null,
					v = null,
					g = null,
					x = null,
					R = null,
					k = null;
				for (U in n) {
					var L = n[U];
					if (Object.hasOwn(n, U) && L != null)
						switch (U) {
							case "checked":
								break;
							case "value":
								break;
							case "defaultValue":
								x = L;
							default:
								Object.hasOwn(a, U) || Ee(e, t, U, null, a, L);
						}
				}
				for (var C in a) {
					var U = a[C];
					if (((L = n[C]), Object.hasOwn(a, C) && (U != null || L != null)))
						switch (C) {
							case "type":
								o = U;
								break;
							case "name":
								s = U;
								break;
							case "checked":
								R = U;
								break;
							case "defaultChecked":
								k = U;
								break;
							case "value":
								v = U;
								break;
							case "defaultValue":
								g = U;
								break;
							case "children":
							case "dangerouslySetInnerHTML":
								if (U != null) throw Error(i(137, t));
								break;
							default:
								U !== L && Ee(e, t, C, U, a, L);
						}
				}
				ms(e, v, g, x, R, k, o, s);
				return;
			}
			case "select":
				U = v = g = C = null;
				for (o in n)
					if (((x = n[o]), Object.hasOwn(n, o) && x != null))
						switch (o) {
							case "value":
								break;
							case "multiple":
								U = x;
							default:
								Object.hasOwn(a, o) || Ee(e, t, o, null, a, x);
						}
				for (s in a)
					if (
						((o = a[s]),
						(x = n[s]),
						Object.hasOwn(a, s) && (o != null || x != null))
					)
						switch (s) {
							case "value":
								C = o;
								break;
							case "defaultValue":
								g = o;
								break;
							case "multiple":
								v = o;
							default:
								o !== x && Ee(e, t, s, o, a, x);
						}
				(t = g),
					(n = v),
					(a = U),
					C != null
						? ga(e, !!n, C, !1)
						: !!a != !!n &&
							(t != null ? ga(e, !!n, t, !0) : ga(e, !!n, n ? [] : "", !1));
				return;
			case "textarea":
				U = C = null;
				for (g in n)
					if (
						((s = n[g]),
						Object.hasOwn(n, g) && s != null && !Object.hasOwn(a, g))
					)
						switch (g) {
							case "value":
								break;
							case "children":
								break;
							default:
								Ee(e, t, g, null, a, s);
						}
				for (v in a)
					if (
						((s = a[v]),
						(o = n[v]),
						Object.hasOwn(a, v) && (s != null || o != null))
					)
						switch (v) {
							case "value":
								C = s;
								break;
							case "defaultValue":
								U = s;
								break;
							case "children":
								break;
							case "dangerouslySetInnerHTML":
								if (s != null) throw Error(i(91));
								break;
							default:
								s !== o && Ee(e, t, v, s, a, o);
						}
				Ec(e, C, U);
				return;
			case "option":
				for (var ie in n)
					if (
						((C = n[ie]),
						Object.hasOwn(n, ie) && C != null && !Object.hasOwn(a, ie))
					)
						switch (ie) {
							case "selected":
								e.selected = !1;
								break;
							default:
								Ee(e, t, ie, null, a, C);
						}
				for (x in a)
					if (
						((C = a[x]),
						(U = n[x]),
						Object.hasOwn(a, x) && C !== U && (C != null || U != null))
					)
						switch (x) {
							case "selected":
								e.selected =
									C && typeof C != "function" && typeof C != "symbol";
								break;
							default:
								Ee(e, t, x, C, a, U);
						}
				return;
			case "img":
			case "link":
			case "area":
			case "base":
			case "br":
			case "col":
			case "embed":
			case "hr":
			case "keygen":
			case "meta":
			case "param":
			case "source":
			case "track":
			case "wbr":
			case "menuitem":
				for (var ne in n)
					(C = n[ne]),
						Object.hasOwn(n, ne) &&
							C != null &&
							!Object.hasOwn(a, ne) &&
							Ee(e, t, ne, null, a, C);
				for (R in a)
					if (
						((C = a[R]),
						(U = n[R]),
						Object.hasOwn(a, R) && C !== U && (C != null || U != null))
					)
						switch (R) {
							case "children":
							case "dangerouslySetInnerHTML":
								if (C != null) throw Error(i(137, t));
								break;
							default:
								Ee(e, t, R, C, a, U);
						}
				return;
			default:
				if (gs(t)) {
					for (var Te in n)
						(C = n[Te]),
							Object.hasOwn(n, Te) &&
								C !== void 0 &&
								!Object.hasOwn(a, Te) &&
								no(e, t, Te, void 0, a, C);
					for (k in a)
						(C = a[k]),
							(U = n[k]),
							!Object.hasOwn(a, k) ||
								C === U ||
								(C === void 0 && U === void 0) ||
								no(e, t, k, C, a, U);
					return;
				}
		}
		for (var O in n)
			(C = n[O]),
				Object.hasOwn(n, O) &&
					C != null &&
					!Object.hasOwn(a, O) &&
					Ee(e, t, O, null, a, C);
		for (L in a)
			(C = a[L]),
				(U = n[L]),
				!Object.hasOwn(a, L) ||
					C === U ||
					(C == null && U == null) ||
					Ee(e, t, L, C, a, U);
	}
	var ao = null,
		lo = null;
	function jr(e) {
		return e.nodeType === 9 ? e : e.ownerDocument;
	}
	function jh(e) {
		switch (e) {
			case "http://www.w3.org/2000/svg":
				return 1;
			case "http://www.w3.org/1998/Math/MathML":
				return 2;
			default:
				return 0;
		}
	}
	function Ah(e, t) {
		if (e === 0)
			switch (t) {
				case "svg":
					return 1;
				case "math":
					return 2;
				default:
					return 0;
			}
		return e === 1 && t === "foreignObject" ? 0 : e;
	}
	function io(e, t) {
		return (
			e === "textarea" ||
			e === "noscript" ||
			typeof t.children == "string" ||
			typeof t.children == "number" ||
			typeof t.children == "bigint" ||
			(typeof t.dangerouslySetInnerHTML == "object" &&
				t.dangerouslySetInnerHTML !== null &&
				t.dangerouslySetInnerHTML.__html != null)
		);
	}
	var ro = null;
	function qy() {
		var e = window.event;
		return e && e.type === "popstate"
			? e === ro
				? !1
				: ((ro = e), !0)
			: ((ro = null), !1);
	}
	var Rh = typeof setTimeout == "function" ? setTimeout : void 0,
		Ly = typeof clearTimeout == "function" ? clearTimeout : void 0,
		Nh = typeof Promise == "function" ? Promise : void 0,
		By =
			typeof queueMicrotask == "function"
				? queueMicrotask
				: typeof Nh < "u"
					? (e) => Nh.resolve(null).then(e).catch(Hy)
					: Rh;
	function Hy(e) {
		setTimeout(() => {
			throw e;
		});
	}
	function An(e) {
		return e === "head";
	}
	function Ch(e, t) {
		var n = t,
			a = 0,
			s = 0;
		do {
			var o = n.nextSibling;
			if ((e.removeChild(n), o && o.nodeType === 8))
				if (((n = o.data), n === "/$")) {
					if (0 < a && 8 > a) {
						n = a;
						var v = e.ownerDocument;
						if ((n & 1 && Il(v.documentElement), n & 2 && Il(v.body), n & 4))
							for (n = v.head, Il(n), v = n.firstChild; v; ) {
								var g = v.nextSibling,
									x = v.nodeName;
								v[vl] ||
									x === "SCRIPT" ||
									x === "STYLE" ||
									(x === "LINK" && v.rel.toLowerCase() === "stylesheet") ||
									n.removeChild(v),
									(v = g);
							}
					}
					if (s === 0) {
						e.removeChild(o), si(t);
						return;
					}
					s--;
				} else
					n === "$" || n === "$?" || n === "$!"
						? s++
						: (a = n.charCodeAt(0) - 48);
			else a = 0;
			n = o;
		} while (n);
		si(t);
	}
	function so(e) {
		var t = e.firstChild;
		for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
			var n = t;
			switch (((t = t.nextSibling), n.nodeName)) {
				case "HTML":
				case "HEAD":
				case "BODY":
					so(n), ds(n);
					continue;
				case "SCRIPT":
				case "STYLE":
					continue;
				case "LINK":
					if (n.rel.toLowerCase() === "stylesheet") continue;
			}
			e.removeChild(n);
		}
	}
	function Gy(e, t, n, a) {
		for (; e.nodeType === 1; ) {
			var s = n;
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
			} else if (a) {
				if (!e[vl])
					switch (t) {
						case "meta":
							if (!e.hasAttribute("itemprop")) break;
							return e;
						case "link":
							if (
								((o = e.getAttribute("rel")),
								o === "stylesheet" && e.hasAttribute("data-precedence"))
							)
								break;
							if (
								o !== s.rel ||
								e.getAttribute("href") !==
									(s.href == null || s.href === "" ? null : s.href) ||
								e.getAttribute("crossorigin") !==
									(s.crossOrigin == null ? null : s.crossOrigin) ||
								e.getAttribute("title") !== (s.title == null ? null : s.title)
							)
								break;
							return e;
						case "style":
							if (e.hasAttribute("data-precedence")) break;
							return e;
						case "script":
							if (
								((o = e.getAttribute("src")),
								(o !== (s.src == null ? null : s.src) ||
									e.getAttribute("type") !== (s.type == null ? null : s.type) ||
									e.getAttribute("crossorigin") !==
										(s.crossOrigin == null ? null : s.crossOrigin)) &&
									o &&
									e.hasAttribute("async") &&
									!e.hasAttribute("itemprop"))
							)
								break;
							return e;
						default:
							return e;
					}
			} else if (t === "input" && e.type === "hidden") {
				var o = s.name == null ? null : "" + s.name;
				if (s.type === "hidden" && e.getAttribute("name") === o) return e;
			} else return e;
			if (((e = Mt(e.nextSibling)), e === null)) break;
		}
		return null;
	}
	function Yy(e, t, n) {
		if (t === "") return null;
		for (; e.nodeType !== 3; )
			if (
				((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
					!n) ||
				((e = Mt(e.nextSibling)), e === null)
			)
				return null;
		return e;
	}
	function uo(e) {
		return (
			e.data === "$!" ||
			(e.data === "$?" && e.ownerDocument.readyState === "complete")
		);
	}
	function $y(e, t) {
		var n = e.ownerDocument;
		if (e.data !== "$?" || n.readyState === "complete") t();
		else {
			var a = () => {
				t(), n.removeEventListener("DOMContentLoaded", a);
			};
			n.addEventListener("DOMContentLoaded", a), (e._reactRetry = a);
		}
	}
	function Mt(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType;
			if (t === 1 || t === 3) break;
			if (t === 8) {
				if (
					((t = e.data),
					t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
				)
					break;
				if (t === "/$") return null;
			}
		}
		return e;
	}
	var oo = null;
	function Uh(e) {
		e = e.previousSibling;
		for (var t = 0; e; ) {
			if (e.nodeType === 8) {
				var n = e.data;
				if (n === "$" || n === "$!" || n === "$?") {
					if (t === 0) return e;
					t--;
				} else n === "/$" && t++;
			}
			e = e.previousSibling;
		}
		return null;
	}
	function Mh(e, t, n) {
		switch (((t = jr(n)), e)) {
			case "html":
				if (((e = t.documentElement), !e)) throw Error(i(452));
				return e;
			case "head":
				if (((e = t.head), !e)) throw Error(i(453));
				return e;
			case "body":
				if (((e = t.body), !e)) throw Error(i(454));
				return e;
			default:
				throw Error(i(451));
		}
	}
	function Il(e) {
		for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
		ds(e);
	}
	var At = new Map(),
		Dh = new Set();
	function Ar(e) {
		return typeof e.getRootNode == "function"
			? e.getRootNode()
			: e.nodeType === 9
				? e
				: e.ownerDocument;
	}
	var ln = T.d;
	T.d = { f: Qy, r: Vy, D: Xy, C: Ky, L: Zy, m: Jy, X: Wy, S: Py, M: Fy };
	function Qy() {
		var e = ln.f(),
			t = br();
		return e || t;
	}
	function Vy(e) {
		var t = va(e);
		t !== null && t.tag === 5 && t.type === "form" ? ed(t) : ln.r(e);
	}
	var Za = typeof document > "u" ? null : document;
	function zh(e, t, n) {
		var a = Za;
		if (a && typeof t == "string" && t) {
			var s = xt(t);
			(s = 'link[rel="' + e + '"][href="' + s + '"]'),
				typeof n == "string" && (s += '[crossorigin="' + n + '"]'),
				Dh.has(s) ||
					(Dh.add(s),
					(e = { rel: e, crossOrigin: n, href: t }),
					a.querySelector(s) === null &&
						((t = a.createElement("link")),
						We(t, "link", e),
						$e(t),
						a.head.appendChild(t)));
		}
	}
	function Xy(e) {
		ln.D(e), zh("dns-prefetch", e, null);
	}
	function Ky(e, t) {
		ln.C(e, t), zh("preconnect", e, t);
	}
	function Zy(e, t, n) {
		ln.L(e, t, n);
		var a = Za;
		if (a && e && t) {
			var s = 'link[rel="preload"][as="' + xt(t) + '"]';
			t === "image" && n && n.imageSrcSet
				? ((s += '[imagesrcset="' + xt(n.imageSrcSet) + '"]'),
					typeof n.imageSizes == "string" &&
						(s += '[imagesizes="' + xt(n.imageSizes) + '"]'))
				: (s += '[href="' + xt(e) + '"]');
			var o = s;
			switch (t) {
				case "style":
					o = Ja(e);
					break;
				case "script":
					o = Pa(e);
			}
			At.has(o) ||
				((e = b(
					{
						rel: "preload",
						href: t === "image" && n && n.imageSrcSet ? void 0 : e,
						as: t,
					},
					n,
				)),
				At.set(o, e),
				a.querySelector(s) !== null ||
					(t === "style" && a.querySelector(ei(o))) ||
					(t === "script" && a.querySelector(ti(o))) ||
					((t = a.createElement("link")),
					We(t, "link", e),
					$e(t),
					a.head.appendChild(t)));
		}
	}
	function Jy(e, t) {
		ln.m(e, t);
		var n = Za;
		if (n && e) {
			var a = t && typeof t.as == "string" ? t.as : "script",
				s =
					'link[rel="modulepreload"][as="' + xt(a) + '"][href="' + xt(e) + '"]',
				o = s;
			switch (a) {
				case "audioworklet":
				case "paintworklet":
				case "serviceworker":
				case "sharedworker":
				case "worker":
				case "script":
					o = Pa(e);
			}
			if (
				!At.has(o) &&
				((e = b({ rel: "modulepreload", href: e }, t)),
				At.set(o, e),
				n.querySelector(s) === null)
			) {
				switch (a) {
					case "audioworklet":
					case "paintworklet":
					case "serviceworker":
					case "sharedworker":
					case "worker":
					case "script":
						if (n.querySelector(ti(o))) return;
				}
				(a = n.createElement("link")),
					We(a, "link", e),
					$e(a),
					n.head.appendChild(a);
			}
		}
	}
	function Py(e, t, n) {
		ln.S(e, t, n);
		var a = Za;
		if (a && e) {
			var s = pa(a).hoistableStyles,
				o = Ja(e);
			t = t || "default";
			var v = s.get(o);
			if (!v) {
				var g = { loading: 0, preload: null };
				if ((v = a.querySelector(ei(o)))) g.loading = 5;
				else {
					(e = b({ rel: "stylesheet", href: e, "data-precedence": t }, n)),
						(n = At.get(o)) && co(e, n);
					var x = (v = a.createElement("link"));
					$e(x),
						We(x, "link", e),
						(x._p = new Promise((R, k) => {
							(x.onload = R), (x.onerror = k);
						})),
						x.addEventListener("load", () => {
							g.loading |= 1;
						}),
						x.addEventListener("error", () => {
							g.loading |= 2;
						}),
						(g.loading |= 4),
						Rr(v, t, a);
				}
				(v = { type: "stylesheet", instance: v, count: 1, state: g }),
					s.set(o, v);
			}
		}
	}
	function Wy(e, t) {
		ln.X(e, t);
		var n = Za;
		if (n && e) {
			var a = pa(n).hoistableScripts,
				s = Pa(e),
				o = a.get(s);
			o ||
				((o = n.querySelector(ti(s))),
				o ||
					((e = b({ src: e, async: !0 }, t)),
					(t = At.get(s)) && fo(e, t),
					(o = n.createElement("script")),
					$e(o),
					We(o, "link", e),
					n.head.appendChild(o)),
				(o = { type: "script", instance: o, count: 1, state: null }),
				a.set(s, o));
		}
	}
	function Fy(e, t) {
		ln.M(e, t);
		var n = Za;
		if (n && e) {
			var a = pa(n).hoistableScripts,
				s = Pa(e),
				o = a.get(s);
			o ||
				((o = n.querySelector(ti(s))),
				o ||
					((e = b({ src: e, async: !0, type: "module" }, t)),
					(t = At.get(s)) && fo(e, t),
					(o = n.createElement("script")),
					$e(o),
					We(o, "link", e),
					n.head.appendChild(o)),
				(o = { type: "script", instance: o, count: 1, state: null }),
				a.set(s, o));
		}
	}
	function kh(e, t, n, a) {
		var s = (s = re.current) ? Ar(s) : null;
		if (!s) throw Error(i(446));
		switch (e) {
			case "meta":
			case "title":
				return null;
			case "style":
				return typeof n.precedence == "string" && typeof n.href == "string"
					? ((t = Ja(n.href)),
						(n = pa(s).hoistableStyles),
						(a = n.get(t)),
						a ||
							((a = { type: "style", instance: null, count: 0, state: null }),
							n.set(t, a)),
						a)
					: { type: "void", instance: null, count: 0, state: null };
			case "link":
				if (
					n.rel === "stylesheet" &&
					typeof n.href == "string" &&
					typeof n.precedence == "string"
				) {
					e = Ja(n.href);
					var o = pa(s).hoistableStyles,
						v = o.get(e);
					if (
						(v ||
							((s = s.ownerDocument || s),
							(v = {
								type: "stylesheet",
								instance: null,
								count: 0,
								state: { loading: 0, preload: null },
							}),
							o.set(e, v),
							(o = s.querySelector(ei(e))) &&
								!o._p &&
								((v.instance = o), (v.state.loading = 5)),
							At.has(e) ||
								((n = {
									rel: "preload",
									as: "style",
									href: n.href,
									crossOrigin: n.crossOrigin,
									integrity: n.integrity,
									media: n.media,
									hrefLang: n.hrefLang,
									referrerPolicy: n.referrerPolicy,
								}),
								At.set(e, n),
								o || Iy(s, e, n, v.state))),
						t && a === null)
					)
						throw Error(i(528, ""));
					return v;
				}
				if (t && a !== null) throw Error(i(529, ""));
				return null;
			case "script":
				return (
					(t = n.async),
					(n = n.src),
					typeof n == "string" &&
					t &&
					typeof t != "function" &&
					typeof t != "symbol"
						? ((t = Pa(n)),
							(n = pa(s).hoistableScripts),
							(a = n.get(t)),
							a ||
								((a = {
									type: "script",
									instance: null,
									count: 0,
									state: null,
								}),
								n.set(t, a)),
							a)
						: { type: "void", instance: null, count: 0, state: null }
				);
			default:
				throw Error(i(444, e));
		}
	}
	function Ja(e) {
		return 'href="' + xt(e) + '"';
	}
	function ei(e) {
		return 'link[rel="stylesheet"][' + e + "]";
	}
	function qh(e) {
		return b({}, e, { "data-precedence": e.precedence, precedence: null });
	}
	function Iy(e, t, n, a) {
		e.querySelector('link[rel="preload"][as="style"][' + t + "]")
			? (a.loading = 1)
			: ((t = e.createElement("link")),
				(a.preload = t),
				t.addEventListener("load", () => (a.loading |= 1)),
				t.addEventListener("error", () => (a.loading |= 2)),
				We(t, "link", n),
				$e(t),
				e.head.appendChild(t));
	}
	function Pa(e) {
		return '[src="' + xt(e) + '"]';
	}
	function ti(e) {
		return "script[async]" + e;
	}
	function Lh(e, t, n) {
		if ((t.count++, t.instance === null))
			switch (t.type) {
				case "style": {
					var a = e.querySelector('style[data-href~="' + xt(n.href) + '"]');
					if (a) return (t.instance = a), $e(a), a;
					var s = b({}, n, {
						"data-href": n.href,
						"data-precedence": n.precedence,
						href: null,
						precedence: null,
					});
					return (
						(a = (e.ownerDocument || e).createElement("style")),
						$e(a),
						We(a, "style", s),
						Rr(a, n.precedence, e),
						(t.instance = a)
					);
				}
				case "stylesheet": {
					s = Ja(n.href);
					var o = e.querySelector(ei(s));
					if (o) return (t.state.loading |= 4), (t.instance = o), $e(o), o;
					(a = qh(n)),
						(s = At.get(s)) && co(a, s),
						(o = (e.ownerDocument || e).createElement("link")),
						$e(o);
					var v = o;
					return (
						(v._p = new Promise((g, x) => {
							(v.onload = g), (v.onerror = x);
						})),
						We(o, "link", a),
						(t.state.loading |= 4),
						Rr(o, n.precedence, e),
						(t.instance = o)
					);
				}
				case "script":
					return (
						(o = Pa(n.src)),
						(s = e.querySelector(ti(o)))
							? ((t.instance = s), $e(s), s)
							: ((a = n),
								(s = At.get(o)) && ((a = b({}, n)), fo(a, s)),
								(e = e.ownerDocument || e),
								(s = e.createElement("script")),
								$e(s),
								We(s, "link", a),
								e.head.appendChild(s),
								(t.instance = s))
					);
				case "void":
					return null;
				default:
					throw Error(i(443, t.type));
			}
		else
			t.type === "stylesheet" &&
				(t.state.loading & 4) === 0 &&
				((a = t.instance), (t.state.loading |= 4), Rr(a, n.precedence, e));
		return t.instance;
	}
	function Rr(e, t, n) {
		for (
			var a = n.querySelectorAll(
					'link[rel="stylesheet"][data-precedence],style[data-precedence]',
				),
				s = a.length ? a[a.length - 1] : null,
				o = s,
				v = 0;
			v < a.length;
			v++
		) {
			var g = a[v];
			if (g.dataset.precedence === t) o = g;
			else if (o !== s) break;
		}
		o
			? o.parentNode.insertBefore(e, o.nextSibling)
			: ((t = n.nodeType === 9 ? n.head : n), t.insertBefore(e, t.firstChild));
	}
	function co(e, t) {
		e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
			e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
			e.title == null && (e.title = t.title);
	}
	function fo(e, t) {
		e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
			e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
			e.integrity == null && (e.integrity = t.integrity);
	}
	var Nr = null;
	function Bh(e, t, n) {
		if (Nr === null) {
			var a = new Map(),
				s = (Nr = new Map());
			s.set(n, a);
		} else (s = Nr), (a = s.get(n)), a || ((a = new Map()), s.set(n, a));
		if (a.has(e)) return a;
		for (
			a.set(e, null), n = n.getElementsByTagName(e), s = 0;
			s < n.length;
			s++
		) {
			var o = n[s];
			if (
				!(
					o[vl] ||
					o[Fe] ||
					(e === "link" && o.getAttribute("rel") === "stylesheet")
				) &&
				o.namespaceURI !== "http://www.w3.org/2000/svg"
			) {
				var v = o.getAttribute(t) || "";
				v = e + v;
				var g = a.get(v);
				g ? g.push(o) : a.set(v, [o]);
			}
		}
		return a;
	}
	function Hh(e, t, n) {
		(e = e.ownerDocument || e),
			e.head.insertBefore(
				n,
				t === "title" ? e.querySelector("head > title") : null,
			);
	}
	function eg(e, t, n) {
		if (n === 1 || t.itemProp != null) return !1;
		switch (e) {
			case "meta":
			case "title":
				return !0;
			case "style":
				if (
					typeof t.precedence != "string" ||
					typeof t.href != "string" ||
					t.href === ""
				)
					break;
				return !0;
			case "link":
				if (
					typeof t.rel != "string" ||
					typeof t.href != "string" ||
					t.href === "" ||
					t.onLoad ||
					t.onError
				)
					break;
				switch (t.rel) {
					case "stylesheet":
						return (
							(e = t.disabled), typeof t.precedence == "string" && e == null
						);
					default:
						return !0;
				}
			case "script":
				if (
					t.async &&
					typeof t.async != "function" &&
					typeof t.async != "symbol" &&
					!t.onLoad &&
					!t.onError &&
					t.src &&
					typeof t.src == "string"
				)
					return !0;
		}
		return !1;
	}
	function Gh(e) {
		return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
	}
	var ni = null;
	function tg() {}
	function ng(e, t, n) {
		if (ni === null) throw Error(i(475));
		var a = ni;
		if (
			t.type === "stylesheet" &&
			(typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
			(t.state.loading & 4) === 0
		) {
			if (t.instance === null) {
				var s = Ja(n.href),
					o = e.querySelector(ei(s));
				if (o) {
					(e = o._p),
						e !== null &&
							typeof e == "object" &&
							typeof e.then == "function" &&
							(a.count++, (a = Cr.bind(a)), e.then(a, a)),
						(t.state.loading |= 4),
						(t.instance = o),
						$e(o);
					return;
				}
				(o = e.ownerDocument || e),
					(n = qh(n)),
					(s = At.get(s)) && co(n, s),
					(o = o.createElement("link")),
					$e(o);
				var v = o;
				(v._p = new Promise((g, x) => {
					(v.onload = g), (v.onerror = x);
				})),
					We(o, "link", n),
					(t.instance = o);
			}
			a.stylesheets === null && (a.stylesheets = new Map()),
				a.stylesheets.set(t, e),
				(e = t.state.preload) &&
					(t.state.loading & 3) === 0 &&
					(a.count++,
					(t = Cr.bind(a)),
					e.addEventListener("load", t),
					e.addEventListener("error", t));
		}
	}
	function ag() {
		if (ni === null) throw Error(i(475));
		var e = ni;
		return (
			e.stylesheets && e.count === 0 && ho(e, e.stylesheets),
			0 < e.count
				? (t) => {
						var n = setTimeout(() => {
							if ((e.stylesheets && ho(e, e.stylesheets), e.unsuspend)) {
								var a = e.unsuspend;
								(e.unsuspend = null), a();
							}
						}, 6e4);
						return (
							(e.unsuspend = t),
							() => {
								(e.unsuspend = null), clearTimeout(n);
							}
						);
					}
				: null
		);
	}
	function Cr() {
		if ((this.count--, this.count === 0)) {
			if (this.stylesheets) ho(this, this.stylesheets);
			else if (this.unsuspend) {
				var e = this.unsuspend;
				(this.unsuspend = null), e();
			}
		}
	}
	var Ur = null;
	function ho(e, t) {
		(e.stylesheets = null),
			e.unsuspend !== null &&
				(e.count++,
				(Ur = new Map()),
				t.forEach(lg, e),
				(Ur = null),
				Cr.call(e));
	}
	function lg(e, t) {
		if (!(t.state.loading & 4)) {
			var n = Ur.get(e);
			if (n) var a = n.get(null);
			else {
				(n = new Map()), Ur.set(e, n);
				for (
					var s = e.querySelectorAll(
							"link[data-precedence],style[data-precedence]",
						),
						o = 0;
					o < s.length;
					o++
				) {
					var v = s[o];
					(v.nodeName === "LINK" || v.getAttribute("media") !== "not all") &&
						(n.set(v.dataset.precedence, v), (a = v));
				}
				a && n.set(null, a);
			}
			(s = t.instance),
				(v = s.getAttribute("data-precedence")),
				(o = n.get(v) || a),
				o === a && n.set(null, s),
				n.set(v, s),
				this.count++,
				(a = Cr.bind(this)),
				s.addEventListener("load", a),
				s.addEventListener("error", a),
				o
					? o.parentNode.insertBefore(s, o.nextSibling)
					: ((e = e.nodeType === 9 ? e.head : e),
						e.insertBefore(s, e.firstChild)),
				(t.state.loading |= 4);
		}
	}
	var ai = {
		$$typeof: G,
		Provider: null,
		Consumer: null,
		_currentValue: H,
		_currentValue2: H,
		_threadCount: 0,
	};
	function ig(e, t, n, a, s, o, v, g) {
		(this.tag = 1),
			(this.containerInfo = e),
			(this.pingCache = this.current = this.pendingChildren = null),
			(this.timeoutHandle = -1),
			(this.callbackNode =
				this.next =
				this.pendingContext =
				this.context =
				this.cancelPendingCommit =
					null),
			(this.callbackPriority = 0),
			(this.expirationTimes = us(-1)),
			(this.entangledLanes =
				this.shellSuspendCounter =
				this.errorRecoveryDisabledLanes =
				this.expiredLanes =
				this.warmLanes =
				this.pingedLanes =
				this.suspendedLanes =
				this.pendingLanes =
					0),
			(this.entanglements = us(0)),
			(this.hiddenUpdates = us(null)),
			(this.identifierPrefix = a),
			(this.onUncaughtError = s),
			(this.onCaughtError = o),
			(this.onRecoverableError = v),
			(this.pooledCache = null),
			(this.pooledCacheLanes = 0),
			(this.formState = g),
			(this.incompleteTransitions = new Map());
	}
	function Yh(e, t, n, a, s, o, v, g, x, R, k, L) {
		return (
			(e = new ig(e, t, n, v, g, x, R, L)),
			(t = 1),
			o === !0 && (t |= 24),
			(o = vt(3, null, null, t)),
			(e.current = o),
			(o.stateNode = e),
			(t = Ks()),
			t.refCount++,
			(e.pooledCache = t),
			t.refCount++,
			(o.memoizedState = { element: a, isDehydrated: n, cache: t }),
			Ws(o),
			e
		);
	}
	function $h(e) {
		return e ? ((e = ja), e) : ja;
	}
	function Qh(e, t, n, a, s, o) {
		(s = $h(s)),
			a.context === null ? (a.context = s) : (a.pendingContext = s),
			(a = pn(t)),
			(a.payload = { element: n }),
			(o = o === void 0 ? null : o),
			o !== null && (a.callback = o),
			(n = mn(e, a, t)),
			n !== null && (bt(n, e, t), Ml(n, e, t));
	}
	function Vh(e, t) {
		if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
			var n = e.retryLane;
			e.retryLane = n !== 0 && n < t ? n : t;
		}
	}
	function vo(e, t) {
		Vh(e, t), (e = e.alternate) && Vh(e, t);
	}
	function Xh(e) {
		if (e.tag === 13) {
			var t = Oa(e, 67108864);
			t !== null && bt(t, e, 67108864), vo(e, 67108864);
		}
	}
	var Mr = !0;
	function rg(e, t, n, a) {
		var s = N.T;
		N.T = null;
		var o = T.p;
		try {
			(T.p = 2), po(e, t, n, a);
		} finally {
			(T.p = o), (N.T = s);
		}
	}
	function sg(e, t, n, a) {
		var s = N.T;
		N.T = null;
		var o = T.p;
		try {
			(T.p = 8), po(e, t, n, a);
		} finally {
			(T.p = o), (N.T = s);
		}
	}
	function po(e, t, n, a) {
		if (Mr) {
			var s = mo(a);
			if (s === null) to(e, t, a, Dr, n), Zh(e, a);
			else if (og(s, e, t, n, a)) a.stopPropagation();
			else if ((Zh(e, a), t & 4 && -1 < ug.indexOf(e))) {
				for (; s !== null; ) {
					var o = va(s);
					if (o !== null)
						switch (o.tag) {
							case 3:
								if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
									var v = Yn(o.pendingLanes);
									if (v !== 0) {
										var g = o;
										for (g.pendingLanes |= 2, g.entangledLanes |= 2; v; ) {
											var x = 1 << (31 - dt(v));
											(g.entanglements[1] |= x), (v &= ~x);
										}
										Yt(o), (xe & 6) === 0 && ((yr = qt() + 500), Pl(0));
									}
								}
								break;
							case 13:
								(g = Oa(o, 2)), g !== null && bt(g, o, 2), br(), vo(o, 2);
						}
					if (((o = mo(a)), o === null && to(e, t, a, Dr, n), o === s)) break;
					s = o;
				}
				s !== null && a.stopPropagation();
			} else to(e, t, a, null, n);
		}
	}
	function mo(e) {
		return (e = _s(e)), yo(e);
	}
	var Dr = null;
	function yo(e) {
		if (((Dr = null), (e = ha(e)), e !== null)) {
			var t = f(e);
			if (t === null) e = null;
			else {
				var n = t.tag;
				if (n === 13) {
					if (((e = d(t)), e !== null)) return e;
					e = null;
				} else if (n === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated)
						return t.tag === 3 ? t.stateNode.containerInfo : null;
					e = null;
				} else t !== e && (e = null);
			}
		}
		return (Dr = e), null;
	}
	function Kh(e) {
		switch (e) {
			case "beforetoggle":
			case "cancel":
			case "click":
			case "close":
			case "contextmenu":
			case "copy":
			case "cut":
			case "auxclick":
			case "dblclick":
			case "dragend":
			case "dragstart":
			case "drop":
			case "focusin":
			case "focusout":
			case "input":
			case "invalid":
			case "keydown":
			case "keypress":
			case "keyup":
			case "mousedown":
			case "mouseup":
			case "paste":
			case "pause":
			case "play":
			case "pointercancel":
			case "pointerdown":
			case "pointerup":
			case "ratechange":
			case "reset":
			case "resize":
			case "seeked":
			case "submit":
			case "toggle":
			case "touchcancel":
			case "touchend":
			case "touchstart":
			case "volumechange":
			case "change":
			case "selectionchange":
			case "textInput":
			case "compositionstart":
			case "compositionend":
			case "compositionupdate":
			case "beforeblur":
			case "afterblur":
			case "beforeinput":
			case "blur":
			case "fullscreenchange":
			case "focus":
			case "hashchange":
			case "popstate":
			case "select":
			case "selectstart":
				return 2;
			case "drag":
			case "dragenter":
			case "dragexit":
			case "dragleave":
			case "dragover":
			case "mousemove":
			case "mouseout":
			case "mouseover":
			case "pointermove":
			case "pointerout":
			case "pointerover":
			case "scroll":
			case "touchmove":
			case "wheel":
			case "mouseenter":
			case "mouseleave":
			case "pointerenter":
			case "pointerleave":
				return 8;
			case "message":
				switch (Kp()) {
					case rc:
						return 2;
					case sc:
						return 8;
					case Oi:
					case Zp:
						return 32;
					case uc:
						return 268435456;
					default:
						return 32;
				}
			default:
				return 32;
		}
	}
	var go = !1,
		Rn = null,
		Nn = null,
		Cn = null,
		li = new Map(),
		ii = new Map(),
		Un = [],
		ug =
			"mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
				" ",
			);
	function Zh(e, t) {
		switch (e) {
			case "focusin":
			case "focusout":
				Rn = null;
				break;
			case "dragenter":
			case "dragleave":
				Nn = null;
				break;
			case "mouseover":
			case "mouseout":
				Cn = null;
				break;
			case "pointerover":
			case "pointerout":
				li.delete(t.pointerId);
				break;
			case "gotpointercapture":
			case "lostpointercapture":
				ii.delete(t.pointerId);
		}
	}
	function ri(e, t, n, a, s, o) {
		return e === null || e.nativeEvent !== o
			? ((e = {
					blockedOn: t,
					domEventName: n,
					eventSystemFlags: a,
					nativeEvent: o,
					targetContainers: [s],
				}),
				t !== null && ((t = va(t)), t !== null && Xh(t)),
				e)
			: ((e.eventSystemFlags |= a),
				(t = e.targetContainers),
				s !== null && t.indexOf(s) === -1 && t.push(s),
				e);
	}
	function og(e, t, n, a, s) {
		switch (t) {
			case "focusin":
				return (Rn = ri(Rn, e, t, n, a, s)), !0;
			case "dragenter":
				return (Nn = ri(Nn, e, t, n, a, s)), !0;
			case "mouseover":
				return (Cn = ri(Cn, e, t, n, a, s)), !0;
			case "pointerover": {
				var o = s.pointerId;
				return li.set(o, ri(li.get(o) || null, e, t, n, a, s)), !0;
			}
			case "gotpointercapture":
				return (
					(o = s.pointerId), ii.set(o, ri(ii.get(o) || null, e, t, n, a, s)), !0
				);
		}
		return !1;
	}
	function Jh(e) {
		var t = ha(e.target);
		if (t !== null) {
			var n = f(t);
			if (n !== null) {
				if (((t = n.tag), t === 13)) {
					if (((t = d(n)), t !== null)) {
						(e.blockedOn = t),
							nm(e.priority, () => {
								if (n.tag === 13) {
									var a = gt();
									a = os(a);
									var s = Oa(n, a);
									s !== null && bt(s, n, a), vo(n, a);
								}
							});
						return;
					}
				} else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
					return;
				}
			}
		}
		e.blockedOn = null;
	}
	function zr(e) {
		if (e.blockedOn !== null) return !1;
		for (var t = e.targetContainers; 0 < t.length; ) {
			var n = mo(e.nativeEvent);
			if (n === null) {
				n = e.nativeEvent;
				var a = new n.constructor(n.type, n);
				(bs = a), n.target.dispatchEvent(a), (bs = null);
			} else return (t = va(n)), t !== null && Xh(t), (e.blockedOn = n), !1;
			t.shift();
		}
		return !0;
	}
	function Ph(e, t, n) {
		zr(e) && n.delete(t);
	}
	function cg() {
		(go = !1),
			Rn !== null && zr(Rn) && (Rn = null),
			Nn !== null && zr(Nn) && (Nn = null),
			Cn !== null && zr(Cn) && (Cn = null),
			li.forEach(Ph),
			ii.forEach(Ph);
	}
	function kr(e, t) {
		e.blockedOn === t &&
			((e.blockedOn = null),
			go ||
				((go = !0),
				u.unstable_scheduleCallback(u.unstable_NormalPriority, cg)));
	}
	var qr = null;
	function Wh(e) {
		qr !== e &&
			((qr = e),
			u.unstable_scheduleCallback(u.unstable_NormalPriority, () => {
				qr === e && (qr = null);
				for (var t = 0; t < e.length; t += 3) {
					var n = e[t],
						a = e[t + 1],
						s = e[t + 2];
					if (typeof a != "function") {
						if (yo(a || n) === null) continue;
						break;
					}
					var o = va(n);
					o !== null &&
						(e.splice(t, 3),
						(t -= 3),
						mu(o, { pending: !0, data: s, method: n.method, action: a }, a, s));
				}
			}));
	}
	function si(e) {
		function t(x) {
			return kr(x, e);
		}
		Rn !== null && kr(Rn, e),
			Nn !== null && kr(Nn, e),
			Cn !== null && kr(Cn, e),
			li.forEach(t),
			ii.forEach(t);
		for (var n = 0; n < Un.length; n++) {
			var a = Un[n];
			a.blockedOn === e && (a.blockedOn = null);
		}
		for (; 0 < Un.length && ((n = Un[0]), n.blockedOn === null); )
			Jh(n), n.blockedOn === null && Un.shift();
		if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
			for (a = 0; a < n.length; a += 3) {
				var s = n[a],
					o = n[a + 1],
					v = s[it] || null;
				if (typeof o == "function") v || Wh(n);
				else if (v) {
					var g = null;
					if (o && o.hasAttribute("formAction")) {
						if (((s = o), (v = o[it] || null))) g = v.formAction;
						else if (yo(s) !== null) continue;
					} else g = v.action;
					typeof g == "function" ? (n[a + 1] = g) : (n.splice(a, 3), (a -= 3)),
						Wh(n);
				}
			}
	}
	function bo(e) {
		this._internalRoot = e;
	}
	(Lr.prototype.render = bo.prototype.render =
		function (e) {
			var t = this._internalRoot;
			if (t === null) throw Error(i(409));
			var n = t.current,
				a = gt();
			Qh(n, a, e, t, null, null);
		}),
		(Lr.prototype.unmount = bo.prototype.unmount =
			function () {
				var e = this._internalRoot;
				if (e !== null) {
					this._internalRoot = null;
					var t = e.containerInfo;
					Qh(e.current, 2, null, e, null, null), br(), (t[da] = null);
				}
			});
	function Lr(e) {
		this._internalRoot = e;
	}
	Lr.prototype.unstable_scheduleHydration = (e) => {
		if (e) {
			var t = hc();
			e = { blockedOn: null, target: e, priority: t };
			for (var n = 0; n < Un.length && t !== 0 && t < Un[n].priority; n++);
			Un.splice(n, 0, e), n === 0 && Jh(e);
		}
	};
	var Fh = l.version;
	if (Fh !== "19.1.0") throw Error(i(527, Fh, "19.1.0"));
	T.findDOMNode = (e) => {
		var t = e._reactInternals;
		if (t === void 0)
			throw typeof e.render == "function"
				? Error(i(188))
				: ((e = Object.keys(e).join(",")), Error(i(268, e)));
		return (
			(e = m(t)),
			(e = e !== null ? p(e) : null),
			(e = e === null ? null : e.stateNode),
			e
		);
	};
	var fg = {
		bundleType: 0,
		version: "19.1.0",
		rendererPackageName: "react-dom",
		currentDispatcherRef: N,
		reconcilerVersion: "19.1.0",
	};
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
		var Br = __REACT_DEVTOOLS_GLOBAL_HOOK__;
		if (!Br.isDisabled && Br.supportsFiber)
			try {
				(fl = Br.inject(fg)), (ft = Br);
			} catch {}
	}
	return (
		(oi.createRoot = (e, t) => {
			if (!c(e)) throw Error(i(299));
			var n = !1,
				a = "",
				s = vd,
				o = pd,
				v = md,
				g = null;
			return (
				t != null &&
					(t.unstable_strictMode === !0 && (n = !0),
					t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
					t.onUncaughtError !== void 0 && (s = t.onUncaughtError),
					t.onCaughtError !== void 0 && (o = t.onCaughtError),
					t.onRecoverableError !== void 0 && (v = t.onRecoverableError),
					t.unstable_transitionCallbacks !== void 0 &&
						(g = t.unstable_transitionCallbacks)),
				(t = Yh(e, 1, !1, null, null, n, a, s, o, v, g, null)),
				(e[da] = t.current),
				eo(e),
				new bo(t)
			);
		}),
		(oi.hydrateRoot = (e, t, n) => {
			if (!c(e)) throw Error(i(299));
			var a = !1,
				s = "",
				o = vd,
				v = pd,
				g = md,
				x = null,
				R = null;
			return (
				n != null &&
					(n.unstable_strictMode === !0 && (a = !0),
					n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
					n.onUncaughtError !== void 0 && (o = n.onUncaughtError),
					n.onCaughtError !== void 0 && (v = n.onCaughtError),
					n.onRecoverableError !== void 0 && (g = n.onRecoverableError),
					n.unstable_transitionCallbacks !== void 0 &&
						(x = n.unstable_transitionCallbacks),
					n.formState !== void 0 && (R = n.formState)),
				(t = Yh(e, 1, !0, t, n ?? null, a, s, o, v, g, x, R)),
				(t.context = $h(null)),
				(n = t.current),
				(a = gt()),
				(a = os(a)),
				(s = pn(a)),
				(s.callback = null),
				mn(n, s, a),
				(n = a),
				(t.current.lanes = n),
				hl(t, n),
				Yt(t),
				(e[da] = t.current),
				eo(e),
				new Lr(t)
			);
		}),
		(oi.version = "19.1.0"),
		oi
	);
}
var uv;
function Sg() {
	if (uv) return So.exports;
	uv = 1;
	function u() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
			} catch (l) {
				console.error(l);
			}
	}
	return u(), (So.exports = xg()), So.exports;
}
var wg = Sg();
const Eg = es(wg);
Jo(); /**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function gi() {
	return (
		(gi = Object.assign
			? Object.assign.bind()
			: (u) => {
					for (var l = 1; l < arguments.length; l++) {
						var r = arguments[l];
						for (var i in r) Object.hasOwn(r, i) && (u[i] = r[i]);
					}
					return u;
				}),
		gi.apply(this, arguments)
	);
}
var Ln;
((u) => {
	(u.Pop = "POP"), (u.Push = "PUSH"), (u.Replace = "REPLACE");
})(Ln || (Ln = {}));
const ov = "popstate";
function Tg(u) {
	u === void 0 && (u = {});
	function l(i, c) {
		const { pathname: f, search: d, hash: h } = i.location;
		return Lo(
			"",
			{ pathname: f, search: d, hash: h },
			(c.state && c.state.usr) || null,
			(c.state && c.state.key) || "default",
		);
	}
	function r(i, c) {
		return typeof c == "string" ? c : Pr(c);
	}
	return jg(l, r, null, u);
}
function Le(u, l) {
	if (u === !1 || u === null || typeof u > "u") throw new Error(l);
}
function rp(u, l) {
	if (!u) {
		typeof console < "u" && console.warn(l);
		try {
			throw new Error(l);
		} catch {}
	}
}
function Og() {
	return Math.random().toString(36).substr(2, 8);
}
function cv(u, l) {
	return { usr: u.state, key: u.key, idx: l };
}
function Lo(u, l, r, i) {
	return (
		r === void 0 && (r = null),
		gi(
			{ pathname: typeof u == "string" ? u : u.pathname, search: "", hash: "" },
			typeof l == "string" ? ol(l) : l,
			{ state: r, key: (l && l.key) || i || Og() },
		)
	);
}
function Pr(u) {
	let { pathname: l = "/", search: r = "", hash: i = "" } = u;
	return (
		r && r !== "?" && (l += r.charAt(0) === "?" ? r : "?" + r),
		i && i !== "#" && (l += i.charAt(0) === "#" ? i : "#" + i),
		l
	);
}
function ol(u) {
	const l = {};
	if (u) {
		const r = u.indexOf("#");
		r >= 0 && ((l.hash = u.substr(r)), (u = u.substr(0, r)));
		const i = u.indexOf("?");
		i >= 0 && ((l.search = u.substr(i)), (u = u.substr(0, i))),
			u && (l.pathname = u);
	}
	return l;
}
function jg(u, l, r, i) {
	i === void 0 && (i = {});
	let { window: c = document.defaultView, v5Compat: f = !1 } = i,
		d = c.history,
		h = Ln.Pop,
		m = null,
		p = b();
	p == null && ((p = 0), d.replaceState(gi({}, d.state, { idx: p }), ""));
	function b() {
		return (d.state || { idx: null }).idx;
	}
	function _() {
		h = Ln.Pop;
		const D = b(),
			K = D == null ? null : D - p;
		(p = D), m && m({ action: h, location: B.location, delta: K });
	}
	function w(D, K) {
		h = Ln.Push;
		const ee = Lo(B.location, D, K);
		p = b() + 1;
		const G = cv(ee, p),
			P = B.createHref(ee);
		try {
			d.pushState(G, "", P);
		} catch (Z) {
			if (Z instanceof DOMException && Z.name === "DataCloneError") throw Z;
			c.location.assign(P);
		}
		f && m && m({ action: h, location: B.location, delta: 1 });
	}
	function j(D, K) {
		h = Ln.Replace;
		const ee = Lo(B.location, D, K);
		p = b();
		const G = cv(ee, p),
			P = B.createHref(ee);
		d.replaceState(G, "", P),
			f && m && m({ action: h, location: B.location, delta: 0 });
	}
	function M(D) {
		let K = c.location.origin !== "null" ? c.location.origin : c.location.href,
			ee = typeof D == "string" ? D : Pr(D);
		return (
			(ee = ee.replace(/ $/, "%20")),
			Le(
				K,
				"No window.location.(origin|href) available to create URL for href: " +
					ee,
			),
			new URL(ee, K)
		);
	}
	const B = {
		get action() {
			return h;
		},
		get location() {
			return u(c, d);
		},
		listen(D) {
			if (m) throw new Error("A history only accepts one active listener");
			return (
				c.addEventListener(ov, _),
				(m = D),
				() => {
					c.removeEventListener(ov, _), (m = null);
				}
			);
		},
		createHref(D) {
			return l(c, D);
		},
		createURL: M,
		encodeLocation(D) {
			const K = M(D);
			return { pathname: K.pathname, search: K.search, hash: K.hash };
		},
		push: w,
		replace: j,
		go(D) {
			return d.go(D);
		},
	};
	return B;
}
var fv;
((u) => {
	(u.data = "data"),
		(u.deferred = "deferred"),
		(u.redirect = "redirect"),
		(u.error = "error");
})(fv || (fv = {}));
function Ag(u, l, r) {
	return r === void 0 && (r = "/"), Rg(u, l, r);
}
function Rg(u, l, r, i) {
	const c = typeof l == "string" ? ol(l) : l,
		f = Po(c.pathname || "/", r);
	if (f == null) return null;
	const d = sp(u);
	Ng(d);
	let h = null;
	for (let m = 0; h == null && m < d.length; ++m) {
		const p = Yg(f);
		h = Bg(d[m], p);
	}
	return h;
}
function sp(u, l, r, i) {
	l === void 0 && (l = []), r === void 0 && (r = []), i === void 0 && (i = "");
	const c = (f, d, h) => {
		const m = {
			relativePath: h === void 0 ? f.path || "" : h,
			caseSensitive: f.caseSensitive === !0,
			childrenIndex: d,
			route: f,
		};
		m.relativePath.startsWith("/") &&
			(Le(
				m.relativePath.startsWith(i),
				'Absolute route path "' +
					m.relativePath +
					'" nested under path ' +
					('"' + i + '" is not valid. An absolute child route path ') +
					"must start with the combined path of all its parent routes.",
			),
			(m.relativePath = m.relativePath.slice(i.length)));
		const p = Bn([i, m.relativePath]),
			b = r.concat(m);
		f.children &&
			f.children.length > 0 &&
			(Le(
				f.index !== !0,
				"Index routes must not have child routes. Please remove " +
					('all child routes from route path "' + p + '".'),
			),
			sp(f.children, l, b, p)),
			!(f.path == null && !f.index) &&
				l.push({ path: p, score: qg(p, f.index), routesMeta: b });
	};
	return (
		u.forEach((f, d) => {
			var h;
			if (f.path === "" || !((h = f.path) != null && h.includes("?"))) c(f, d);
			else for (const m of up(f.path)) c(f, d, m);
		}),
		l
	);
}
function up(u) {
	const l = u.split("/");
	if (l.length === 0) return [];
	const [r, ...i] = l,
		c = r.endsWith("?"),
		f = r.replace(/\?$/, "");
	if (i.length === 0) return c ? [f, ""] : [f];
	const d = up(i.join("/")),
		h = [];
	return (
		h.push(...d.map((m) => (m === "" ? f : [f, m].join("/")))),
		c && h.push(...d),
		h.map((m) => (u.startsWith("/") && m === "" ? "/" : m))
	);
}
function Ng(u) {
	u.sort((l, r) =>
		l.score !== r.score
			? r.score - l.score
			: Lg(
					l.routesMeta.map((i) => i.childrenIndex),
					r.routesMeta.map((i) => i.childrenIndex),
				),
	);
}
const Cg = /^:[\w-]+$/,
	Ug = 3,
	Mg = 2,
	Dg = 1,
	zg = 10,
	kg = -2,
	dv = (u) => u === "*";
function qg(u, l) {
	let r = u.split("/"),
		i = r.length;
	return (
		r.some(dv) && (i += kg),
		l && (i += Mg),
		r
			.filter((c) => !dv(c))
			.reduce((c, f) => c + (Cg.test(f) ? Ug : f === "" ? Dg : zg), i)
	);
}
function Lg(u, l) {
	return u.length === l.length && u.slice(0, -1).every((i, c) => i === l[c])
		? u[u.length - 1] - l[l.length - 1]
		: 0;
}
function Bg(u, l, r) {
	let { routesMeta: i } = u,
		c = {},
		f = "/",
		d = [];
	for (let h = 0; h < i.length; ++h) {
		const m = i[h],
			p = h === i.length - 1,
			b = f === "/" ? l : l.slice(f.length) || "/",
			_ = Hg(
				{ path: m.relativePath, caseSensitive: m.caseSensitive, end: p },
				b,
			),
			w = m.route;
		if (!_) return null;
		Object.assign(c, _.params),
			d.push({
				params: c,
				pathname: Bn([f, _.pathname]),
				pathnameBase: Xg(Bn([f, _.pathnameBase])),
				route: w,
			}),
			_.pathnameBase !== "/" && (f = Bn([f, _.pathnameBase]));
	}
	return d;
}
function Hg(u, l) {
	typeof u == "string" && (u = { path: u, caseSensitive: !1, end: !0 });
	const [r, i] = Gg(u.path, u.caseSensitive, u.end),
		c = l.match(r);
	if (!c) return null;
	let f = c[0],
		d = f.replace(/(.)\/+$/, "$1"),
		h = c.slice(1);
	return {
		params: i.reduce((p, b, _) => {
			const { paramName: w, isOptional: j } = b;
			if (w === "*") {
				const B = h[_] || "";
				d = f.slice(0, f.length - B.length).replace(/(.)\/+$/, "$1");
			}
			const M = h[_];
			return (
				j && !M ? (p[w] = void 0) : (p[w] = (M || "").replace(/%2F/g, "/")), p
			);
		}, {}),
		pathname: f,
		pathnameBase: d,
		pattern: u,
	};
}
function Gg(u, l, r) {
	l === void 0 && (l = !1),
		r === void 0 && (r = !0),
		rp(
			u === "*" || !u.endsWith("*") || u.endsWith("/*"),
			'Route path "' +
				u +
				'" will be treated as if it were ' +
				('"' + u.replace(/\*$/, "/*") + '" because the `*` character must ') +
				"always follow a `/` in the pattern. To get rid of this warning, " +
				('please change the route path to "' + u.replace(/\*$/, "/*") + '".'),
		);
	let i = [],
		c =
			"^" +
			u
				.replace(/\/*\*?$/, "")
				.replace(/^\/*/, "/")
				.replace(/[\\.*+^${}|()[\]]/g, "\\$&")
				.replace(
					/\/:([\w-]+)(\?)?/g,
					(d, h, m) => (
						i.push({ paramName: h, isOptional: m != null }),
						m ? "/?([^\\/]+)?" : "/([^\\/]+)"
					),
				);
	return (
		u.endsWith("*")
			? (i.push({ paramName: "*" }),
				(c += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
			: r
				? (c += "\\/*$")
				: u !== "" && u !== "/" && (c += "(?:(?=\\/|$))"),
		[new RegExp(c, l ? void 0 : "i"), i]
	);
}
function Yg(u) {
	try {
		return u
			.split("/")
			.map((l) => decodeURIComponent(l).replace(/\//g, "%2F"))
			.join("/");
	} catch (l) {
		return (
			rp(
				!1,
				'The URL path "' +
					u +
					'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
					("encoding (" + l + ")."),
			),
			u
		);
	}
}
function Po(u, l) {
	if (l === "/") return u;
	if (!u.toLowerCase().startsWith(l.toLowerCase())) return null;
	const r = l.endsWith("/") ? l.length - 1 : l.length,
		i = u.charAt(r);
	return i && i !== "/" ? null : u.slice(r) || "/";
}
function $g(u, l) {
	l === void 0 && (l = "/");
	const {
		pathname: r,
		search: i = "",
		hash: c = "",
	} = typeof u == "string" ? ol(u) : u;
	return {
		pathname: r ? (r.startsWith("/") ? r : Qg(r, l)) : l,
		search: Kg(i),
		hash: Zg(c),
	};
}
function Qg(u, l) {
	const r = l.replace(/\/+$/, "").split("/");
	return (
		u.split("/").forEach((c) => {
			c === ".." ? r.length > 1 && r.pop() : c !== "." && r.push(c);
		}),
		r.length > 1 ? r.join("/") : "/"
	);
}
function Oo(u, l, r, i) {
	return (
		"Cannot include a '" +
		u +
		"' character in a manually specified " +
		("`to." +
			l +
			"` field [" +
			JSON.stringify(i) +
			"].  Please separate it out to the ") +
		("`to." + r + "` field. Alternatively you may provide the full path as ") +
		'a string in <Link to="..."> and the router will parse it for you.'
	);
}
function Vg(u) {
	return u.filter(
		(l, r) => r === 0 || (l.route.path && l.route.path.length > 0),
	);
}
function op(u, l) {
	const r = Vg(u);
	return l
		? r.map((i, c) => (c === r.length - 1 ? i.pathname : i.pathnameBase))
		: r.map((i) => i.pathnameBase);
}
function cp(u, l, r, i) {
	i === void 0 && (i = !1);
	let c;
	typeof u == "string"
		? (c = ol(u))
		: ((c = gi({}, u)),
			Le(
				!c.pathname || !c.pathname.includes("?"),
				Oo("?", "pathname", "search", c),
			),
			Le(
				!c.pathname || !c.pathname.includes("#"),
				Oo("#", "pathname", "hash", c),
			),
			Le(!c.search || !c.search.includes("#"), Oo("#", "search", "hash", c)));
	let f = u === "" || c.pathname === "",
		d = f ? "/" : c.pathname,
		h;
	if (d == null) h = r;
	else {
		let _ = l.length - 1;
		if (!i && d.startsWith("..")) {
			const w = d.split("/");
			for (; w[0] === ".."; ) w.shift(), (_ -= 1);
			c.pathname = w.join("/");
		}
		h = _ >= 0 ? l[_] : "/";
	}
	const m = $g(c, h),
		p = d && d !== "/" && d.endsWith("/"),
		b = (f || d === ".") && r.endsWith("/");
	return !m.pathname.endsWith("/") && (p || b) && (m.pathname += "/"), m;
}
const Bn = (u) => u.join("/").replace(/\/\/+/g, "/"),
	Xg = (u) => u.replace(/\/+$/, "").replace(/^\/*/, "/"),
	Kg = (u) => (!u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u),
	Zg = (u) => (!u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u);
function Jg(u) {
	return (
		u != null &&
		typeof u.status == "number" &&
		typeof u.statusText == "string" &&
		typeof u.internal == "boolean" &&
		"data" in u
	);
}
const fp = ["post", "put", "patch", "delete"];
new Set(fp);
const Pg = ["get", ...fp];
new Set(Pg); /**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function bi() {
	return (
		(bi = Object.assign
			? Object.assign.bind()
			: (u) => {
					for (var l = 1; l < arguments.length; l++) {
						var r = arguments[l];
						for (var i in r) Object.hasOwn(r, i) && (u[i] = r[i]);
					}
					return u;
				}),
		bi.apply(this, arguments)
	);
}
const Wo = X.createContext(null),
	Wg = X.createContext(null),
	ca = X.createContext(null),
	ts = X.createContext(null),
	Hn = X.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
	dp = X.createContext(null);
function Fg(u, l) {
	const { relative: r } = l === void 0 ? {} : l;
	Si() || Le(!1);
	let { basename: i, navigator: c } = X.useContext(ca),
		{ hash: f, pathname: d, search: h } = pp(u, { relative: r }),
		m = d;
	return (
		i !== "/" && (m = d === "/" ? i : Bn([i, d])),
		c.createHref({ pathname: m, search: h, hash: f })
	);
}
function Si() {
	return X.useContext(ts) != null;
}
function ns() {
	return Si() || Le(!1), X.useContext(ts).location;
}
function hp(u) {
	X.useContext(ca).static || X.useLayoutEffect(u);
}
function vp() {
	const { isDataRoute: u } = X.useContext(Hn);
	return u ? h0() : Ig();
}
function Ig() {
	Si() || Le(!1);
	const u = X.useContext(Wo),
		{ basename: l, future: r, navigator: i } = X.useContext(ca),
		{ matches: c } = X.useContext(Hn),
		{ pathname: f } = ns(),
		d = JSON.stringify(op(c, r.v7_relativeSplatPath)),
		h = X.useRef(!1);
	return (
		hp(() => {
			h.current = !0;
		}),
		X.useCallback(
			(p, b) => {
				if ((b === void 0 && (b = {}), !h.current)) return;
				if (typeof p == "number") {
					i.go(p);
					return;
				}
				const _ = cp(p, JSON.parse(d), f, b.relative === "path");
				u == null &&
					l !== "/" &&
					(_.pathname = _.pathname === "/" ? l : Bn([l, _.pathname])),
					(b.replace ? i.replace : i.push)(_, b.state, b);
			},
			[l, i, d, f, u],
		)
	);
}
const e0 = X.createContext(null);
function t0(u) {
	const l = X.useContext(Hn).outlet;
	return l && X.createElement(e0.Provider, { value: u }, l);
}
function pp(u, l) {
	const { relative: r } = l === void 0 ? {} : l,
		{ future: i } = X.useContext(ca),
		{ matches: c } = X.useContext(Hn),
		{ pathname: f } = ns(),
		d = JSON.stringify(op(c, i.v7_relativeSplatPath));
	return X.useMemo(() => cp(u, JSON.parse(d), f, r === "path"), [u, d, f, r]);
}
function n0(u, l) {
	return a0(u, l);
}
function a0(u, l, r, i) {
	Si() || Le(!1);
	const { navigator: c } = X.useContext(ca),
		{ matches: f } = X.useContext(Hn),
		d = f[f.length - 1],
		h = d ? d.params : {};
	d && d.pathname;
	const m = d ? d.pathnameBase : "/";
	d && d.route;
	let p = ns(),
		b;
	if (l) {
		var _;
		const D = typeof l == "string" ? ol(l) : l;
		m === "/" || ((_ = D.pathname) != null && _.startsWith(m)) || Le(!1),
			(b = D);
	} else b = p;
	let w = b.pathname || "/",
		j = w;
	if (m !== "/") {
		const D = m.replace(/^\//, "").split("/");
		j = "/" + w.replace(/^\//, "").split("/").slice(D.length).join("/");
	}
	const M = Ag(u, { pathname: j }),
		B = u0(
			M &&
				M.map((D) =>
					Object.assign({}, D, {
						params: Object.assign({}, h, D.params),
						pathname: Bn([
							m,
							c.encodeLocation
								? c.encodeLocation(D.pathname).pathname
								: D.pathname,
						]),
						pathnameBase:
							D.pathnameBase === "/"
								? m
								: Bn([
										m,
										c.encodeLocation
											? c.encodeLocation(D.pathnameBase).pathname
											: D.pathnameBase,
									]),
					}),
				),
			f,
			r,
			i,
		);
	return l && B
		? X.createElement(
				ts.Provider,
				{
					value: {
						location: bi(
							{
								pathname: "/",
								search: "",
								hash: "",
								state: null,
								key: "default",
							},
							b,
						),
						navigationType: Ln.Pop,
					},
				},
				B,
			)
		: B;
}
function l0() {
	const u = d0(),
		l = Jg(u)
			? u.status + " " + u.statusText
			: u instanceof Error
				? u.message
				: JSON.stringify(u),
		r = u instanceof Error ? u.stack : null,
		c = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
	return X.createElement(
		X.Fragment,
		null,
		X.createElement("h2", null, "Unexpected Application Error!"),
		X.createElement("h3", { style: { fontStyle: "italic" } }, l),
		r ? X.createElement("pre", { style: c }, r) : null,
		null,
	);
}
const i0 = X.createElement(l0, null);
class r0 extends X.Component {
	constructor(l) {
		super(l),
			(this.state = {
				location: l.location,
				revalidation: l.revalidation,
				error: l.error,
			});
	}
	static getDerivedStateFromError(l) {
		return { error: l };
	}
	static getDerivedStateFromProps(l, r) {
		return r.location !== l.location ||
			(r.revalidation !== "idle" && l.revalidation === "idle")
			? { error: l.error, location: l.location, revalidation: l.revalidation }
			: {
					error: l.error !== void 0 ? l.error : r.error,
					location: r.location,
					revalidation: l.revalidation || r.revalidation,
				};
	}
	componentDidCatch(l, r) {
		console.error(
			"React Router caught the following error during render",
			l,
			r,
		);
	}
	render() {
		return this.state.error !== void 0
			? X.createElement(
					Hn.Provider,
					{ value: this.props.routeContext },
					X.createElement(dp.Provider, {
						value: this.state.error,
						children: this.props.component,
					}),
				)
			: this.props.children;
	}
}
function s0(u) {
	const { routeContext: l, match: r, children: i } = u,
		c = X.useContext(Wo);
	return (
		c &&
			c.static &&
			c.staticContext &&
			(r.route.errorElement || r.route.ErrorBoundary) &&
			(c.staticContext._deepestRenderedBoundaryId = r.route.id),
		X.createElement(Hn.Provider, { value: l }, i)
	);
}
function u0(u, l, r, i) {
	var c;
	if (
		(l === void 0 && (l = []),
		r === void 0 && (r = null),
		i === void 0 && (i = null),
		u == null)
	) {
		var f;
		if (!r) return null;
		if (r.errors) u = r.matches;
		else if (
			(f = i) != null &&
			f.v7_partialHydration &&
			l.length === 0 &&
			!r.initialized &&
			r.matches.length > 0
		)
			u = r.matches;
		else return null;
	}
	let d = u,
		h = (c = r) == null ? void 0 : c.errors;
	if (h != null) {
		const b = d.findIndex(
			(_) => _.route.id && (h == null ? void 0 : h[_.route.id]) !== void 0,
		);
		b >= 0 || Le(!1), (d = d.slice(0, Math.min(d.length, b + 1)));
	}
	let m = !1,
		p = -1;
	if (r && i && i.v7_partialHydration)
		for (let b = 0; b < d.length; b++) {
			const _ = d[b];
			if (
				((_.route.HydrateFallback || _.route.hydrateFallbackElement) && (p = b),
				_.route.id)
			) {
				const { loaderData: w, errors: j } = r,
					M =
						_.route.loader &&
						w[_.route.id] === void 0 &&
						(!j || j[_.route.id] === void 0);
				if (_.route.lazy || M) {
					(m = !0), p >= 0 ? (d = d.slice(0, p + 1)) : (d = [d[0]]);
					break;
				}
			}
		}
	return d.reduceRight((b, _, w) => {
		let j,
			M = !1,
			B = null,
			D = null;
		r &&
			((j = h && _.route.id ? h[_.route.id] : void 0),
			(B = _.route.errorElement || i0),
			m &&
				(p < 0 && w === 0
					? (v0("route-fallback"), (M = !0), (D = null))
					: p === w &&
						((M = !0), (D = _.route.hydrateFallbackElement || null))));
		const K = l.concat(d.slice(0, w + 1)),
			ee = () => {
				let G;
				return (
					j
						? (G = B)
						: M
							? (G = D)
							: _.route.Component
								? (G = X.createElement(_.route.Component, null))
								: _.route.element
									? (G = _.route.element)
									: (G = b),
					X.createElement(s0, {
						match: _,
						routeContext: { outlet: b, matches: K, isDataRoute: r != null },
						children: G,
					})
				);
			};
		return r && (_.route.ErrorBoundary || _.route.errorElement || w === 0)
			? X.createElement(r0, {
					location: r.location,
					revalidation: r.revalidation,
					component: B,
					error: j,
					children: ee(),
					routeContext: { outlet: null, matches: K, isDataRoute: !0 },
				})
			: ee();
	}, null);
}
var mp = ((u) => (
		(u.UseBlocker = "useBlocker"),
		(u.UseRevalidator = "useRevalidator"),
		(u.UseNavigateStable = "useNavigate"),
		u
	))(mp || {}),
	yp = ((u) => (
		(u.UseBlocker = "useBlocker"),
		(u.UseLoaderData = "useLoaderData"),
		(u.UseActionData = "useActionData"),
		(u.UseRouteError = "useRouteError"),
		(u.UseNavigation = "useNavigation"),
		(u.UseRouteLoaderData = "useRouteLoaderData"),
		(u.UseMatches = "useMatches"),
		(u.UseRevalidator = "useRevalidator"),
		(u.UseNavigateStable = "useNavigate"),
		(u.UseRouteId = "useRouteId"),
		u
	))(yp || {});
function o0(u) {
	const l = X.useContext(Wo);
	return l || Le(!1), l;
}
function c0(u) {
	const l = X.useContext(Wg);
	return l || Le(!1), l;
}
function f0(u) {
	const l = X.useContext(Hn);
	return l || Le(!1), l;
}
function gp(u) {
	const l = f0(),
		r = l.matches[l.matches.length - 1];
	return r.route.id || Le(!1), r.route.id;
}
function d0() {
	var u;
	const l = X.useContext(dp),
		r = c0(),
		i = gp();
	return l !== void 0 ? l : (u = r.errors) == null ? void 0 : u[i];
}
function h0() {
	const { router: u } = o0(mp.UseNavigateStable),
		l = gp(yp.UseNavigateStable),
		r = X.useRef(!1);
	return (
		hp(() => {
			r.current = !0;
		}),
		X.useCallback(
			(c, f) => {
				f === void 0 && (f = {}),
					r.current &&
						(typeof c == "number"
							? u.navigate(c)
							: u.navigate(c, bi({ fromRouteId: l }, f)));
			},
			[u, l],
		)
	);
}
const hv = {};
function v0(u, l, r) {
	hv[u] || (hv[u] = !0);
}
function p0(u, l) {
	u == null || u.v7_startTransition, u == null || u.v7_relativeSplatPath;
}
function m0(u) {
	return t0(u.context);
}
function Nt(u) {
	Le(!1);
}
function y0(u) {
	let {
		basename: l = "/",
		children: r = null,
		location: i,
		navigationType: c = Ln.Pop,
		navigator: f,
		static: d = !1,
		future: h,
	} = u;
	Si() && Le(!1);
	const m = l.replace(/^\/*/, "/"),
		p = X.useMemo(
			() => ({
				basename: m,
				navigator: f,
				static: d,
				future: bi({ v7_relativeSplatPath: !1 }, h),
			}),
			[m, h, f, d],
		);
	typeof i == "string" && (i = ol(i));
	const {
			pathname: b = "/",
			search: _ = "",
			hash: w = "",
			state: j = null,
			key: M = "default",
		} = i,
		B = X.useMemo(() => {
			const D = Po(b, m);
			return D == null
				? null
				: {
						location: { pathname: D, search: _, hash: w, state: j, key: M },
						navigationType: c,
					};
		}, [m, b, _, w, j, M, c]);
	return B == null
		? null
		: X.createElement(
				ca.Provider,
				{ value: p },
				X.createElement(ts.Provider, { children: r, value: B }),
			);
}
function g0(u) {
	const { children: l, location: r } = u;
	return n0(Bo(l), r);
}
new Promise(() => {});
function Bo(u, l) {
	l === void 0 && (l = []);
	const r = [];
	return (
		X.Children.forEach(u, (i, c) => {
			if (!X.isValidElement(i)) return;
			const f = [...l, c];
			if (i.type === X.Fragment) {
				r.push.apply(r, Bo(i.props.children, f));
				return;
			}
			i.type !== Nt && Le(!1), !i.props.index || !i.props.children || Le(!1);
			const d = {
				id: i.props.id || f.join("-"),
				caseSensitive: i.props.caseSensitive,
				element: i.props.element,
				Component: i.props.Component,
				index: i.props.index,
				path: i.props.path,
				loader: i.props.loader,
				action: i.props.action,
				errorElement: i.props.errorElement,
				ErrorBoundary: i.props.ErrorBoundary,
				hasErrorBoundary:
					i.props.ErrorBoundary != null || i.props.errorElement != null,
				shouldRevalidate: i.props.shouldRevalidate,
				handle: i.props.handle,
				lazy: i.props.lazy,
			};
			i.props.children && (d.children = Bo(i.props.children, f)), r.push(d);
		}),
		r
	);
} /**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ho() {
	return (
		(Ho = Object.assign
			? Object.assign.bind()
			: (u) => {
					for (var l = 1; l < arguments.length; l++) {
						var r = arguments[l];
						for (var i in r) Object.hasOwn(r, i) && (u[i] = r[i]);
					}
					return u;
				}),
		Ho.apply(this, arguments)
	);
}
function b0(u, l) {
	if (u == null) return {};
	var r = {},
		i = Object.keys(u),
		c,
		f;
	for (f = 0; f < i.length; f++)
		(c = i[f]), !(l.indexOf(c) >= 0) && (r[c] = u[c]);
	return r;
}
function _0(u) {
	return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
}
function x0(u, l) {
	return u.button === 0 && (!l || l === "_self") && !_0(u);
}
const S0 = [
		"onClick",
		"relative",
		"reloadDocument",
		"replace",
		"state",
		"target",
		"to",
		"preventScrollReset",
		"viewTransition",
	],
	w0 = "6";
try {
	window.__reactRouterVersion = w0;
} catch {}
const E0 = "startTransition",
	vv = yg[E0];
function T0(u) {
	const { basename: l, children: r, future: i, window: c } = u,
		f = X.useRef();
	f.current == null && (f.current = Tg({ window: c, v5Compat: !0 }));
	const d = f.current,
		[h, m] = X.useState({ action: d.action, location: d.location }),
		{ v7_startTransition: p } = i || {},
		b = X.useCallback(
			(_) => {
				p && vv ? vv(() => m(_)) : m(_);
			},
			[m, p],
		);
	return (
		X.useLayoutEffect(() => d.listen(b), [d, b]),
		X.useEffect(() => p0(i), [i]),
		X.createElement(y0, {
			basename: l,
			children: r,
			location: h.location,
			navigationType: h.action,
			navigator: d,
			future: i,
		})
	);
}
const O0 =
		typeof window < "u" &&
		typeof window.document < "u" &&
		typeof window.document.createElement < "u",
	j0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	sn = X.forwardRef((l, r) => {
		let {
				onClick: i,
				relative: c,
				reloadDocument: f,
				replace: d,
				state: h,
				target: m,
				to: p,
				preventScrollReset: b,
				viewTransition: _,
			} = l,
			w = b0(l, S0),
			{ basename: j } = X.useContext(ca),
			M,
			B = !1;
		if (typeof p == "string" && j0.test(p) && ((M = p), O0))
			try {
				const G = new URL(window.location.href),
					P = p.startsWith("//") ? new URL(G.protocol + p) : new URL(p),
					Z = Po(P.pathname, j);
				P.origin === G.origin && Z != null
					? (p = Z + P.search + P.hash)
					: (B = !0);
			} catch {}
		const D = Fg(p, { relative: c }),
			K = A0(p, {
				replace: d,
				state: h,
				target: m,
				preventScrollReset: b,
				relative: c,
				viewTransition: _,
			});
		function ee(G) {
			i && i(G), G.defaultPrevented || K(G);
		}
		return X.createElement(
			"a",
			Ho({}, w, { href: M || D, onClick: B || f ? i : ee, ref: r, target: m }),
		);
	});
var pv;
((u) => {
	(u.UseScrollRestoration = "useScrollRestoration"),
		(u.UseSubmit = "useSubmit"),
		(u.UseSubmitFetcher = "useSubmitFetcher"),
		(u.UseFetcher = "useFetcher"),
		(u.useViewTransitionState = "useViewTransitionState");
})(pv || (pv = {}));
var mv;
((u) => {
	(u.UseFetcher = "useFetcher"),
		(u.UseFetchers = "useFetchers"),
		(u.UseScrollRestoration = "useScrollRestoration");
})(mv || (mv = {}));
function A0(u, l) {
	const {
			target: r,
			replace: i,
			state: c,
			preventScrollReset: f,
			relative: d,
			viewTransition: h,
		} = l === void 0 ? {} : l,
		m = vp(),
		p = ns(),
		b = pp(u, { relative: d });
	return X.useCallback(
		(_) => {
			if (x0(_, r)) {
				_.preventDefault();
				const w = i !== void 0 ? i : Pr(p) === Pr(b);
				m(u, {
					replace: w,
					state: c,
					preventScrollReset: f,
					relative: d,
					viewTransition: h,
				});
			}
		},
		[p, m, b, i, c, r, u, f, d, h],
	);
}
const R0 = "modulepreload",
	N0 = (u) => "/" + u,
	yv = {},
	wi = (l, r, i) => {
		let c = Promise.resolve();
		if (r && r.length > 0) {
			const d = (p) =>
				Promise.all(
					p.map((b) =>
						Promise.resolve(b).then(
							(_) => ({ status: "fulfilled", value: _ }),
							(_) => ({ status: "rejected", reason: _ }),
						),
					),
				);
			document.getElementsByTagName("link");
			const h = document.querySelector("meta[property=csp-nonce]"),
				m =
					(h == null ? void 0 : h.nonce) ||
					(h == null ? void 0 : h.getAttribute("nonce"));
			c = d(
				r.map((p) => {
					if (((p = N0(p)), p in yv)) return;
					yv[p] = !0;
					const b = p.endsWith(".css"),
						_ = b ? '[rel="stylesheet"]' : "";
					if (document.querySelector(`link[href="${p}"]${_}`)) return;
					const w = document.createElement("link");
					if (
						((w.rel = b ? "stylesheet" : R0),
						b || (w.as = "script"),
						(w.crossOrigin = ""),
						(w.href = p),
						m && w.setAttribute("nonce", m),
						document.head.appendChild(w),
						b)
					)
						return new Promise((j, M) => {
							w.addEventListener("load", j),
								w.addEventListener("error", () =>
									M(new Error(`Unable to preload CSS for ${p}`)),
								);
						});
				}),
			);
		}
		function f(d) {
			const h = new Event("vite:preloadError", { cancelable: !0 });
			if (((h.payload = d), window.dispatchEvent(h), !h.defaultPrevented))
				throw d;
		}
		return c.then((d) => {
			for (const h of d || []) h.status === "rejected" && f(h.reason);
			return l().catch(f);
		});
	},
	C0 = (u) => {
		let l;
		return (
			u
				? (l = u)
				: typeof fetch > "u"
					? (l = (...r) =>
							wi(
								async () => {
									const { default: i } = await Promise.resolve().then(() => cl);
									return { default: i };
								},
								void 0,
							).then(({ default: i }) => i(...r)))
					: (l = fetch),
			(...r) => l(...r)
		);
	};
class Fo extends Error {
	constructor(l, r = "FunctionsError", i) {
		super(l), (this.name = r), (this.context = i);
	}
}
class U0 extends Fo {
	constructor(l) {
		super(
			"Failed to send a request to the Edge Function",
			"FunctionsFetchError",
			l,
		);
	}
}
class M0 extends Fo {
	constructor(l) {
		super("Relay Error invoking the Edge Function", "FunctionsRelayError", l);
	}
}
class D0 extends Fo {
	constructor(l) {
		super(
			"Edge Function returned a non-2xx status code",
			"FunctionsHttpError",
			l,
		);
	}
}
var Go;
((u) => {
	(u.Any = "any"),
		(u.ApNortheast1 = "ap-northeast-1"),
		(u.ApNortheast2 = "ap-northeast-2"),
		(u.ApSouth1 = "ap-south-1"),
		(u.ApSoutheast1 = "ap-southeast-1"),
		(u.ApSoutheast2 = "ap-southeast-2"),
		(u.CaCentral1 = "ca-central-1"),
		(u.EuCentral1 = "eu-central-1"),
		(u.EuWest1 = "eu-west-1"),
		(u.EuWest2 = "eu-west-2"),
		(u.EuWest3 = "eu-west-3"),
		(u.SaEast1 = "sa-east-1"),
		(u.UsEast1 = "us-east-1"),
		(u.UsWest1 = "us-west-1"),
		(u.UsWest2 = "us-west-2");
})(Go || (Go = {}));
var z0 = (u, l, r, i) => {
	function c(f) {
		return f instanceof r
			? f
			: new r((d) => {
					d(f);
				});
	}
	return new (r || (r = Promise))((f, d) => {
		function h(b) {
			try {
				p(i.next(b));
			} catch (_) {
				d(_);
			}
		}
		function m(b) {
			try {
				p(i.throw(b));
			} catch (_) {
				d(_);
			}
		}
		function p(b) {
			b.done ? f(b.value) : c(b.value).then(h, m);
		}
		p((i = i.apply(u, l || [])).next());
	});
};
class k0 {
	constructor(l, { headers: r = {}, customFetch: i, region: c = Go.Any } = {}) {
		(this.url = l), (this.headers = r), (this.region = c), (this.fetch = C0(i));
	}
	setAuth(l) {
		this.headers.Authorization = `Bearer ${l}`;
	}
	invoke(l, r = {}) {
		var i;
		return z0(this, void 0, void 0, function* () {
			try {
				const { headers: c, method: f, body: d } = r;
				let h = {},
					{ region: m } = r;
				m || (m = this.region), m && m !== "any" && (h["x-region"] = m);
				let p;
				d &&
					((c && !Object.hasOwn(c, "Content-Type")) || !c) &&
					((typeof Blob < "u" && d instanceof Blob) || d instanceof ArrayBuffer
						? ((h["Content-Type"] = "application/octet-stream"), (p = d))
						: typeof d == "string"
							? ((h["Content-Type"] = "text/plain"), (p = d))
							: typeof FormData < "u" && d instanceof FormData
								? (p = d)
								: ((h["Content-Type"] = "application/json"),
									(p = JSON.stringify(d))));
				const b = yield this.fetch(`${this.url}/${l}`, {
						method: f || "POST",
						headers: Object.assign(
							Object.assign(Object.assign({}, h), this.headers),
							c,
						),
						body: p,
					}).catch((M) => {
						throw new U0(M);
					}),
					_ = b.headers.get("x-relay-error");
				if (_ && _ === "true") throw new M0(b);
				if (!b.ok) throw new D0(b);
				let w = (
						(i = b.headers.get("Content-Type")) !== null && i !== void 0
							? i
							: "text/plain"
					)
						.split(";")[0]
						.trim(),
					j;
				return (
					w === "application/json"
						? (j = yield b.json())
						: w === "application/octet-stream"
							? (j = yield b.blob())
							: w === "text/event-stream"
								? (j = b)
								: w === "multipart/form-data"
									? (j = yield b.formData())
									: (j = yield b.text()),
					{ data: j, error: null }
				);
			} catch (c) {
				return { data: null, error: c };
			}
		});
	}
}
var Ke = {},
	Wa = {},
	Fa = {},
	Ia = {},
	el = {},
	tl = {},
	q0 = () => {
		if (typeof self < "u") return self;
		if (typeof window < "u") return window;
		if (typeof global < "u") return global;
		throw new Error("unable to locate global object");
	},
	ul = q0();
const L0 = ul.fetch,
	bp = ul.fetch.bind(ul),
	_p = ul.Headers,
	B0 = ul.Request,
	H0 = ul.Response,
	cl = Object.freeze(
		Object.defineProperty(
			{
				__proto__: null,
				Headers: _p,
				Request: B0,
				Response: H0,
				default: bp,
				fetch: L0,
			},
			Symbol.toStringTag,
			{ value: "Module" },
		),
	),
	G0 = lp(cl);
var Hr = {},
	gv;
function xp() {
	if (gv) return Hr;
	(gv = 1), Object.defineProperty(Hr, "__esModule", { value: !0 });
	class u extends Error {
		constructor(r) {
			super(r.message),
				(this.name = "PostgrestError"),
				(this.details = r.details),
				(this.hint = r.hint),
				(this.code = r.code);
		}
	}
	return (Hr.default = u), Hr;
}
var bv;
function Sp() {
	if (bv) return tl;
	bv = 1;
	var u =
		(tl && tl.__importDefault) ||
		((c) => (c && c.__esModule ? c : { default: c }));
	Object.defineProperty(tl, "__esModule", { value: !0 });
	const l = u(G0),
		r = u(xp());
	class i {
		constructor(f) {
			(this.shouldThrowOnError = !1),
				(this.method = f.method),
				(this.url = f.url),
				(this.headers = f.headers),
				(this.schema = f.schema),
				(this.body = f.body),
				(this.shouldThrowOnError = f.shouldThrowOnError),
				(this.signal = f.signal),
				(this.isMaybeSingle = f.isMaybeSingle),
				f.fetch
					? (this.fetch = f.fetch)
					: typeof fetch > "u"
						? (this.fetch = l.default)
						: (this.fetch = fetch);
		}
		throwOnError() {
			return (this.shouldThrowOnError = !0), this;
		}
		setHeader(f, d) {
			return (
				(this.headers = Object.assign({}, this.headers)),
				(this.headers[f] = d),
				this
			);
		}
		then(f, d) {
			this.schema === void 0 ||
				(["GET", "HEAD"].includes(this.method)
					? (this.headers["Accept-Profile"] = this.schema)
					: (this.headers["Content-Profile"] = this.schema)),
				this.method !== "GET" &&
					this.method !== "HEAD" &&
					(this.headers["Content-Type"] = "application/json");
			const h = this.fetch;
			let m = h(this.url.toString(), {
				method: this.method,
				headers: this.headers,
				body: JSON.stringify(this.body),
				signal: this.signal,
			}).then(async (p) => {
				var b, _, w;
				let j = null,
					M = null,
					B = null,
					D = p.status,
					K = p.statusText;
				if (p.ok) {
					if (this.method !== "HEAD") {
						const Z = await p.text();
						Z === "" ||
							(this.headers.Accept === "text/csv" ||
							(this.headers.Accept &&
								this.headers.Accept.includes("application/vnd.pgrst.plan+text"))
								? (M = Z)
								: (M = JSON.parse(Z)));
					}
					const G =
							(b = this.headers.Prefer) === null || b === void 0
								? void 0
								: b.match(/count=(exact|planned|estimated)/),
						P =
							(_ = p.headers.get("content-range")) === null || _ === void 0
								? void 0
								: _.split("/");
					G && P && P.length > 1 && (B = parseInt(P[1])),
						this.isMaybeSingle &&
							this.method === "GET" &&
							Array.isArray(M) &&
							(M.length > 1
								? ((j = {
										code: "PGRST116",
										details: `Results contain ${M.length} rows, application/vnd.pgrst.object+json requires 1 row`,
										hint: null,
										message:
											"JSON object requested, multiple (or no) rows returned",
									}),
									(M = null),
									(B = null),
									(D = 406),
									(K = "Not Acceptable"))
								: M.length === 1
									? (M = M[0])
									: (M = null));
				} else {
					const G = await p.text();
					try {
						(j = JSON.parse(G)),
							Array.isArray(j) &&
								p.status === 404 &&
								((M = []), (j = null), (D = 200), (K = "OK"));
					} catch {
						p.status === 404 && G === ""
							? ((D = 204), (K = "No Content"))
							: (j = { message: G });
					}
					if (
						(j &&
							this.isMaybeSingle &&
							!(
								(w = j == null ? void 0 : j.details) === null || w === void 0
							) &&
							w.includes("0 rows") &&
							((j = null), (D = 200), (K = "OK")),
						j && this.shouldThrowOnError)
					)
						throw new r.default(j);
				}
				return { error: j, data: M, count: B, status: D, statusText: K };
			});
			return (
				this.shouldThrowOnError ||
					(m = m.catch((p) => {
						var b, _, w;
						return {
							error: {
								message: `${(b = p == null ? void 0 : p.name) !== null && b !== void 0 ? b : "FetchError"}: ${p == null ? void 0 : p.message}`,
								details: `${(_ = p == null ? void 0 : p.stack) !== null && _ !== void 0 ? _ : ""}`,
								hint: "",
								code: `${(w = p == null ? void 0 : p.code) !== null && w !== void 0 ? w : ""}`,
							},
							data: null,
							count: null,
							status: 0,
							statusText: "",
						};
					})),
				m.then(f, d)
			);
		}
		returns() {
			return this;
		}
		overrideTypes() {
			return this;
		}
	}
	return (tl.default = i), tl;
}
var _v;
function wp() {
	if (_v) return el;
	_v = 1;
	var u =
		(el && el.__importDefault) ||
		((i) => (i && i.__esModule ? i : { default: i }));
	Object.defineProperty(el, "__esModule", { value: !0 });
	const l = u(Sp());
	class r extends l.default {
		select(c) {
			let f = !1;
			const d = (c ?? "*")
				.split("")
				.map((h) => (/\s/.test(h) && !f ? "" : (h === '"' && (f = !f), h)))
				.join("");
			return (
				this.url.searchParams.set("select", d),
				this.headers.Prefer && (this.headers.Prefer += ","),
				(this.headers.Prefer += "return=representation"),
				this
			);
		}
		order(
			c,
			{
				ascending: f = !0,
				nullsFirst: d,
				foreignTable: h,
				referencedTable: m = h,
			} = {},
		) {
			const p = m ? `${m}.order` : "order",
				b = this.url.searchParams.get(p);
			return (
				this.url.searchParams.set(
					p,
					`${b ? `${b},` : ""}${c}.${f ? "asc" : "desc"}${d === void 0 ? "" : d ? ".nullsfirst" : ".nullslast"}`,
				),
				this
			);
		}
		limit(c, { foreignTable: f, referencedTable: d = f } = {}) {
			const h = typeof d > "u" ? "limit" : `${d}.limit`;
			return this.url.searchParams.set(h, `${c}`), this;
		}
		range(c, f, { foreignTable: d, referencedTable: h = d } = {}) {
			const m = typeof h > "u" ? "offset" : `${h}.offset`,
				p = typeof h > "u" ? "limit" : `${h}.limit`;
			return (
				this.url.searchParams.set(m, `${c}`),
				this.url.searchParams.set(p, `${f - c + 1}`),
				this
			);
		}
		abortSignal(c) {
			return (this.signal = c), this;
		}
		single() {
			return (this.headers.Accept = "application/vnd.pgrst.object+json"), this;
		}
		maybeSingle() {
			return (
				this.method === "GET"
					? (this.headers.Accept = "application/json")
					: (this.headers.Accept = "application/vnd.pgrst.object+json"),
				(this.isMaybeSingle = !0),
				this
			);
		}
		csv() {
			return (this.headers.Accept = "text/csv"), this;
		}
		geojson() {
			return (this.headers.Accept = "application/geo+json"), this;
		}
		explain({
			analyze: c = !1,
			verbose: f = !1,
			settings: d = !1,
			buffers: h = !1,
			wal: m = !1,
			format: p = "text",
		} = {}) {
			var b;
			const _ = [
					c ? "analyze" : null,
					f ? "verbose" : null,
					d ? "settings" : null,
					h ? "buffers" : null,
					m ? "wal" : null,
				]
					.filter(Boolean)
					.join("|"),
				w =
					(b = this.headers.Accept) !== null && b !== void 0
						? b
						: "application/json";
			return (
				(this.headers.Accept = `application/vnd.pgrst.plan+${p}; for="${w}"; options=${_};`),
				p === "json" ? this : this
			);
		}
		rollback() {
			var c;
			return (
				((c = this.headers.Prefer) !== null && c !== void 0 ? c : "").trim()
					.length > 0
					? (this.headers.Prefer += ",tx=rollback")
					: (this.headers.Prefer = "tx=rollback"),
				this
			);
		}
		returns() {
			return this;
		}
	}
	return (el.default = r), el;
}
var xv;
function Io() {
	if (xv) return Ia;
	xv = 1;
	var u =
		(Ia && Ia.__importDefault) ||
		((i) => (i && i.__esModule ? i : { default: i }));
	Object.defineProperty(Ia, "__esModule", { value: !0 });
	const l = u(wp());
	class r extends l.default {
		eq(c, f) {
			return this.url.searchParams.append(c, `eq.${f}`), this;
		}
		neq(c, f) {
			return this.url.searchParams.append(c, `neq.${f}`), this;
		}
		gt(c, f) {
			return this.url.searchParams.append(c, `gt.${f}`), this;
		}
		gte(c, f) {
			return this.url.searchParams.append(c, `gte.${f}`), this;
		}
		lt(c, f) {
			return this.url.searchParams.append(c, `lt.${f}`), this;
		}
		lte(c, f) {
			return this.url.searchParams.append(c, `lte.${f}`), this;
		}
		like(c, f) {
			return this.url.searchParams.append(c, `like.${f}`), this;
		}
		likeAllOf(c, f) {
			return (
				this.url.searchParams.append(c, `like(all).{${f.join(",")}}`), this
			);
		}
		likeAnyOf(c, f) {
			return (
				this.url.searchParams.append(c, `like(any).{${f.join(",")}}`), this
			);
		}
		ilike(c, f) {
			return this.url.searchParams.append(c, `ilike.${f}`), this;
		}
		ilikeAllOf(c, f) {
			return (
				this.url.searchParams.append(c, `ilike(all).{${f.join(",")}}`), this
			);
		}
		ilikeAnyOf(c, f) {
			return (
				this.url.searchParams.append(c, `ilike(any).{${f.join(",")}}`), this
			);
		}
		is(c, f) {
			return this.url.searchParams.append(c, `is.${f}`), this;
		}
		in(c, f) {
			const d = Array.from(new Set(f))
				.map((h) =>
					typeof h == "string" && /[,()]/.test(h) ? `"${h}"` : `${h}`,
				)
				.join(",");
			return this.url.searchParams.append(c, `in.(${d})`), this;
		}
		contains(c, f) {
			return (
				typeof f == "string"
					? this.url.searchParams.append(c, `cs.${f}`)
					: Array.isArray(f)
						? this.url.searchParams.append(c, `cs.{${f.join(",")}}`)
						: this.url.searchParams.append(c, `cs.${JSON.stringify(f)}`),
				this
			);
		}
		containedBy(c, f) {
			return (
				typeof f == "string"
					? this.url.searchParams.append(c, `cd.${f}`)
					: Array.isArray(f)
						? this.url.searchParams.append(c, `cd.{${f.join(",")}}`)
						: this.url.searchParams.append(c, `cd.${JSON.stringify(f)}`),
				this
			);
		}
		rangeGt(c, f) {
			return this.url.searchParams.append(c, `sr.${f}`), this;
		}
		rangeGte(c, f) {
			return this.url.searchParams.append(c, `nxl.${f}`), this;
		}
		rangeLt(c, f) {
			return this.url.searchParams.append(c, `sl.${f}`), this;
		}
		rangeLte(c, f) {
			return this.url.searchParams.append(c, `nxr.${f}`), this;
		}
		rangeAdjacent(c, f) {
			return this.url.searchParams.append(c, `adj.${f}`), this;
		}
		overlaps(c, f) {
			return (
				typeof f == "string"
					? this.url.searchParams.append(c, `ov.${f}`)
					: this.url.searchParams.append(c, `ov.{${f.join(",")}}`),
				this
			);
		}
		textSearch(c, f, { config: d, type: h } = {}) {
			let m = "";
			h === "plain"
				? (m = "pl")
				: h === "phrase"
					? (m = "ph")
					: h === "websearch" && (m = "w");
			const p = d === void 0 ? "" : `(${d})`;
			return this.url.searchParams.append(c, `${m}fts${p}.${f}`), this;
		}
		match(c) {
			return (
				Object.entries(c).forEach(([f, d]) => {
					this.url.searchParams.append(f, `eq.${d}`);
				}),
				this
			);
		}
		not(c, f, d) {
			return this.url.searchParams.append(c, `not.${f}.${d}`), this;
		}
		or(c, { foreignTable: f, referencedTable: d = f } = {}) {
			const h = d ? `${d}.or` : "or";
			return this.url.searchParams.append(h, `(${c})`), this;
		}
		filter(c, f, d) {
			return this.url.searchParams.append(c, `${f}.${d}`), this;
		}
	}
	return (Ia.default = r), Ia;
}
var Sv;
function Ep() {
	if (Sv) return Fa;
	Sv = 1;
	var u =
		(Fa && Fa.__importDefault) ||
		((i) => (i && i.__esModule ? i : { default: i }));
	Object.defineProperty(Fa, "__esModule", { value: !0 });
	const l = u(Io());
	class r {
		constructor(c, { headers: f = {}, schema: d, fetch: h }) {
			(this.url = c), (this.headers = f), (this.schema = d), (this.fetch = h);
		}
		select(c, { head: f = !1, count: d } = {}) {
			const h = f ? "HEAD" : "GET";
			let m = !1;
			const p = (c ?? "*")
				.split("")
				.map((b) => (/\s/.test(b) && !m ? "" : (b === '"' && (m = !m), b)))
				.join("");
			return (
				this.url.searchParams.set("select", p),
				d && (this.headers.Prefer = `count=${d}`),
				new l.default({
					method: h,
					url: this.url,
					headers: this.headers,
					schema: this.schema,
					fetch: this.fetch,
					allowEmpty: !1,
				})
			);
		}
		insert(c, { count: f, defaultToNull: d = !0 } = {}) {
			const h = "POST",
				m = [];
			if (
				(this.headers.Prefer && m.push(this.headers.Prefer),
				f && m.push(`count=${f}`),
				d || m.push("missing=default"),
				(this.headers.Prefer = m.join(",")),
				Array.isArray(c))
			) {
				const p = c.reduce((b, _) => b.concat(Object.keys(_)), []);
				if (p.length > 0) {
					const b = [...new Set(p)].map((_) => `"${_}"`);
					this.url.searchParams.set("columns", b.join(","));
				}
			}
			return new l.default({
				method: h,
				url: this.url,
				headers: this.headers,
				schema: this.schema,
				body: c,
				fetch: this.fetch,
				allowEmpty: !1,
			});
		}
		upsert(
			c,
			{
				onConflict: f,
				ignoreDuplicates: d = !1,
				count: h,
				defaultToNull: m = !0,
			} = {},
		) {
			const p = "POST",
				b = [`resolution=${d ? "ignore" : "merge"}-duplicates`];
			if (
				(f !== void 0 && this.url.searchParams.set("on_conflict", f),
				this.headers.Prefer && b.push(this.headers.Prefer),
				h && b.push(`count=${h}`),
				m || b.push("missing=default"),
				(this.headers.Prefer = b.join(",")),
				Array.isArray(c))
			) {
				const _ = c.reduce((w, j) => w.concat(Object.keys(j)), []);
				if (_.length > 0) {
					const w = [...new Set(_)].map((j) => `"${j}"`);
					this.url.searchParams.set("columns", w.join(","));
				}
			}
			return new l.default({
				method: p,
				url: this.url,
				headers: this.headers,
				schema: this.schema,
				body: c,
				fetch: this.fetch,
				allowEmpty: !1,
			});
		}
		update(c, { count: f } = {}) {
			const d = "PATCH",
				h = [];
			return (
				this.headers.Prefer && h.push(this.headers.Prefer),
				f && h.push(`count=${f}`),
				(this.headers.Prefer = h.join(",")),
				new l.default({
					method: d,
					url: this.url,
					headers: this.headers,
					schema: this.schema,
					body: c,
					fetch: this.fetch,
					allowEmpty: !1,
				})
			);
		}
		delete({ count: c } = {}) {
			const f = "DELETE",
				d = [];
			return (
				c && d.push(`count=${c}`),
				this.headers.Prefer && d.unshift(this.headers.Prefer),
				(this.headers.Prefer = d.join(",")),
				new l.default({
					method: f,
					url: this.url,
					headers: this.headers,
					schema: this.schema,
					fetch: this.fetch,
					allowEmpty: !1,
				})
			);
		}
	}
	return (Fa.default = r), Fa;
}
var ci = {},
	fi = {},
	wv;
function Y0() {
	return (
		wv ||
			((wv = 1),
			Object.defineProperty(fi, "__esModule", { value: !0 }),
			(fi.version = void 0),
			(fi.version = "0.0.0-automated")),
		fi
	);
}
var Ev;
function $0() {
	if (Ev) return ci;
	(Ev = 1),
		Object.defineProperty(ci, "__esModule", { value: !0 }),
		(ci.DEFAULT_HEADERS = void 0);
	const u = Y0();
	return (
		(ci.DEFAULT_HEADERS = { "X-Client-Info": `postgrest-js/${u.version}` }), ci
	);
}
var Tv;
function Q0() {
	if (Tv) return Wa;
	Tv = 1;
	var u =
		(Wa && Wa.__importDefault) ||
		((f) => (f && f.__esModule ? f : { default: f }));
	Object.defineProperty(Wa, "__esModule", { value: !0 });
	const l = u(Ep()),
		r = u(Io()),
		i = $0();
	class c {
		constructor(d, { headers: h = {}, schema: m, fetch: p } = {}) {
			(this.url = d),
				(this.headers = Object.assign(Object.assign({}, i.DEFAULT_HEADERS), h)),
				(this.schemaName = m),
				(this.fetch = p);
		}
		from(d) {
			const h = new URL(`${this.url}/${d}`);
			return new l.default(h, {
				headers: Object.assign({}, this.headers),
				schema: this.schemaName,
				fetch: this.fetch,
			});
		}
		schema(d) {
			return new c(this.url, {
				headers: this.headers,
				schema: d,
				fetch: this.fetch,
			});
		}
		rpc(d, h = {}, { head: m = !1, get: p = !1, count: b } = {}) {
			let _;
			const w = new URL(`${this.url}/rpc/${d}`);
			let j;
			m || p
				? ((_ = m ? "HEAD" : "GET"),
					Object.entries(h)
						.filter(([B, D]) => D !== void 0)
						.map(([B, D]) => [
							B,
							Array.isArray(D) ? `{${D.join(",")}}` : `${D}`,
						])
						.forEach(([B, D]) => {
							w.searchParams.append(B, D);
						}))
				: ((_ = "POST"), (j = h));
			const M = Object.assign({}, this.headers);
			return (
				b && (M.Prefer = `count=${b}`),
				new r.default({
					method: _,
					url: w,
					headers: M,
					schema: this.schemaName,
					body: j,
					fetch: this.fetch,
					allowEmpty: !1,
				})
			);
		}
	}
	return (Wa.default = c), Wa;
}
var Ov;
function V0() {
	if (Ov) return Ke;
	Ov = 1;
	var u =
		(Ke && Ke.__importDefault) ||
		((h) => (h && h.__esModule ? h : { default: h }));
	Object.defineProperty(Ke, "__esModule", { value: !0 }),
		(Ke.PostgrestError =
			Ke.PostgrestBuilder =
			Ke.PostgrestTransformBuilder =
			Ke.PostgrestFilterBuilder =
			Ke.PostgrestQueryBuilder =
			Ke.PostgrestClient =
				void 0);
	const l = u(Q0());
	Ke.PostgrestClient = l.default;
	const r = u(Ep());
	Ke.PostgrestQueryBuilder = r.default;
	const i = u(Io());
	Ke.PostgrestFilterBuilder = i.default;
	const c = u(wp());
	Ke.PostgrestTransformBuilder = c.default;
	const f = u(Sp());
	Ke.PostgrestBuilder = f.default;
	const d = u(xp());
	return (
		(Ke.PostgrestError = d.default),
		(Ke.default = {
			PostgrestClient: l.default,
			PostgrestQueryBuilder: r.default,
			PostgrestFilterBuilder: i.default,
			PostgrestTransformBuilder: c.default,
			PostgrestBuilder: f.default,
			PostgrestError: d.default,
		}),
		Ke
	);
}
var X0 = V0();
const K0 = es(X0),
	{
		PostgrestClient: Z0,
		PostgrestQueryBuilder: dx,
		PostgrestFilterBuilder: hx,
		PostgrestTransformBuilder: vx,
		PostgrestBuilder: px,
		PostgrestError: mx,
	} = K0;
function J0() {
	if (typeof WebSocket < "u") return WebSocket;
	if (typeof global.WebSocket < "u") return global.WebSocket;
	if (typeof window.WebSocket < "u") return window.WebSocket;
	if (typeof self.WebSocket < "u") return self.WebSocket;
	throw new Error("`WebSocket` is not supported in this environment");
}
const P0 = J0(),
	W0 = "2.11.15",
	F0 = `realtime-js/${W0}`,
	I0 = "1.0.0",
	Tp = 1e4,
	eb = 1e3;
var vi;
((u) => {
	(u[(u.connecting = 0)] = "connecting"),
		(u[(u.open = 1)] = "open"),
		(u[(u.closing = 2)] = "closing"),
		(u[(u.closed = 3)] = "closed");
})(vi || (vi = {}));
var tt;
((u) => {
	(u.closed = "closed"),
		(u.errored = "errored"),
		(u.joined = "joined"),
		(u.joining = "joining"),
		(u.leaving = "leaving");
})(tt || (tt = {}));
var kt;
((u) => {
	(u.close = "phx_close"),
		(u.error = "phx_error"),
		(u.join = "phx_join"),
		(u.reply = "phx_reply"),
		(u.leave = "phx_leave"),
		(u.access_token = "access_token");
})(kt || (kt = {}));
var Yo;
((u) => {
	u.websocket = "websocket";
})(Yo || (Yo = {}));
var oa;
((u) => {
	(u.Connecting = "connecting"),
		(u.Open = "open"),
		(u.Closing = "closing"),
		(u.Closed = "closed");
})(oa || (oa = {}));
class tb {
	constructor() {
		this.HEADER_LENGTH = 1;
	}
	decode(l, r) {
		return l.constructor === ArrayBuffer
			? r(this._binaryDecode(l))
			: r(typeof l == "string" ? JSON.parse(l) : {});
	}
	_binaryDecode(l) {
		const r = new DataView(l),
			i = new TextDecoder();
		return this._decodeBroadcast(l, r, i);
	}
	_decodeBroadcast(l, r, i) {
		const c = r.getUint8(1),
			f = r.getUint8(2);
		let d = this.HEADER_LENGTH + 2;
		const h = i.decode(l.slice(d, d + c));
		d = d + c;
		const m = i.decode(l.slice(d, d + f));
		d = d + f;
		const p = JSON.parse(i.decode(l.slice(d, l.byteLength)));
		return { ref: null, topic: h, event: m, payload: p };
	}
}
class Op {
	constructor(l, r) {
		(this.callback = l),
			(this.timerCalc = r),
			(this.timer = void 0),
			(this.tries = 0),
			(this.callback = l),
			(this.timerCalc = r);
	}
	reset() {
		(this.tries = 0), clearTimeout(this.timer);
	}
	scheduleTimeout() {
		clearTimeout(this.timer),
			(this.timer = setTimeout(
				() => {
					(this.tries = this.tries + 1), this.callback();
				},
				this.timerCalc(this.tries + 1),
			));
	}
}
var Ae;
((u) => {
	(u.abstime = "abstime"),
		(u.bool = "bool"),
		(u.date = "date"),
		(u.daterange = "daterange"),
		(u.float4 = "float4"),
		(u.float8 = "float8"),
		(u.int2 = "int2"),
		(u.int4 = "int4"),
		(u.int4range = "int4range"),
		(u.int8 = "int8"),
		(u.int8range = "int8range"),
		(u.json = "json"),
		(u.jsonb = "jsonb"),
		(u.money = "money"),
		(u.numeric = "numeric"),
		(u.oid = "oid"),
		(u.reltime = "reltime"),
		(u.text = "text"),
		(u.time = "time"),
		(u.timestamp = "timestamp"),
		(u.timestamptz = "timestamptz"),
		(u.timetz = "timetz"),
		(u.tsrange = "tsrange"),
		(u.tstzrange = "tstzrange");
})(Ae || (Ae = {}));
const jv = (u, l, r = {}) => {
		var i;
		const c = (i = r.skipTypes) !== null && i !== void 0 ? i : [];
		return Object.keys(l).reduce((f, d) => ((f[d] = nb(d, u, l, c)), f), {});
	},
	nb = (u, l, r, i) => {
		const c = l.find((h) => h.name === u),
			f = c == null ? void 0 : c.type,
			d = r[u];
		return f && !i.includes(f) ? jp(f, d) : $o(d);
	},
	jp = (u, l) => {
		if (u.charAt(0) === "_") {
			const r = u.slice(1, u.length);
			return rb(l, r);
		}
		switch (u) {
			case Ae.bool:
				return ab(l);
			case Ae.float4:
			case Ae.float8:
			case Ae.int2:
			case Ae.int4:
			case Ae.int8:
			case Ae.numeric:
			case Ae.oid:
				return lb(l);
			case Ae.json:
			case Ae.jsonb:
				return ib(l);
			case Ae.timestamp:
				return sb(l);
			case Ae.abstime:
			case Ae.date:
			case Ae.daterange:
			case Ae.int4range:
			case Ae.int8range:
			case Ae.money:
			case Ae.reltime:
			case Ae.text:
			case Ae.time:
			case Ae.timestamptz:
			case Ae.timetz:
			case Ae.tsrange:
			case Ae.tstzrange:
				return $o(l);
			default:
				return $o(l);
		}
	},
	$o = (u) => u,
	ab = (u) => {
		switch (u) {
			case "t":
				return !0;
			case "f":
				return !1;
			default:
				return u;
		}
	},
	lb = (u) => {
		if (typeof u == "string") {
			const l = parseFloat(u);
			if (!Number.isNaN(l)) return l;
		}
		return u;
	},
	ib = (u) => {
		if (typeof u == "string")
			try {
				return JSON.parse(u);
			} catch (l) {
				return console.log(`JSON parse error: ${l}`), u;
			}
		return u;
	},
	rb = (u, l) => {
		if (typeof u != "string") return u;
		const r = u.length - 1,
			i = u[r];
		if (u[0] === "{" && i === "}") {
			let f;
			const d = u.slice(1, r);
			try {
				f = JSON.parse("[" + d + "]");
			} catch {
				f = d ? d.split(",") : [];
			}
			return f.map((h) => jp(l, h));
		}
		return u;
	},
	sb = (u) => (typeof u == "string" ? u.replace(" ", "T") : u),
	Ap = (u) => {
		let l = u;
		return (
			(l = l.replace(/^ws/i, "http")),
			(l = l.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, "")),
			l.replace(/\/+$/, "")
		);
	};
class jo {
	constructor(l, r, i = {}, c = Tp) {
		(this.channel = l),
			(this.event = r),
			(this.payload = i),
			(this.timeout = c),
			(this.sent = !1),
			(this.timeoutTimer = void 0),
			(this.ref = ""),
			(this.receivedResp = null),
			(this.recHooks = []),
			(this.refEvent = null);
	}
	resend(l) {
		(this.timeout = l),
			this._cancelRefEvent(),
			(this.ref = ""),
			(this.refEvent = null),
			(this.receivedResp = null),
			(this.sent = !1),
			this.send();
	}
	send() {
		this._hasReceived("timeout") ||
			(this.startTimeout(),
			(this.sent = !0),
			this.channel.socket.push({
				topic: this.channel.topic,
				event: this.event,
				payload: this.payload,
				ref: this.ref,
				join_ref: this.channel._joinRef(),
			}));
	}
	updatePayload(l) {
		this.payload = Object.assign(Object.assign({}, this.payload), l);
	}
	receive(l, r) {
		var i;
		return (
			this._hasReceived(l) &&
				r(
					(i = this.receivedResp) === null || i === void 0
						? void 0
						: i.response,
				),
			this.recHooks.push({ status: l, callback: r }),
			this
		);
	}
	startTimeout() {
		if (this.timeoutTimer) return;
		(this.ref = this.channel.socket._makeRef()),
			(this.refEvent = this.channel._replyEventName(this.ref));
		const l = (r) => {
			this._cancelRefEvent(),
				this._cancelTimeout(),
				(this.receivedResp = r),
				this._matchReceive(r);
		};
		this.channel._on(this.refEvent, {}, l),
			(this.timeoutTimer = setTimeout(() => {
				this.trigger("timeout", {});
			}, this.timeout));
	}
	trigger(l, r) {
		this.refEvent &&
			this.channel._trigger(this.refEvent, { status: l, response: r });
	}
	destroy() {
		this._cancelRefEvent(), this._cancelTimeout();
	}
	_cancelRefEvent() {
		this.refEvent && this.channel._off(this.refEvent, {});
	}
	_cancelTimeout() {
		clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
	}
	_matchReceive({ status: l, response: r }) {
		this.recHooks.filter((i) => i.status === l).forEach((i) => i.callback(r));
	}
	_hasReceived(l) {
		return this.receivedResp && this.receivedResp.status === l;
	}
}
var Av;
((u) => {
	(u.SYNC = "sync"), (u.JOIN = "join"), (u.LEAVE = "leave");
})(Av || (Av = {}));
class pi {
	constructor(l, r) {
		(this.channel = l),
			(this.state = {}),
			(this.pendingDiffs = []),
			(this.joinRef = null),
			(this.caller = { onJoin: () => {}, onLeave: () => {}, onSync: () => {} });
		const i = (r == null ? void 0 : r.events) || {
			state: "presence_state",
			diff: "presence_diff",
		};
		this.channel._on(i.state, {}, (c) => {
			const { onJoin: f, onLeave: d, onSync: h } = this.caller;
			(this.joinRef = this.channel._joinRef()),
				(this.state = pi.syncState(this.state, c, f, d)),
				this.pendingDiffs.forEach((m) => {
					this.state = pi.syncDiff(this.state, m, f, d);
				}),
				(this.pendingDiffs = []),
				h();
		}),
			this.channel._on(i.diff, {}, (c) => {
				const { onJoin: f, onLeave: d, onSync: h } = this.caller;
				this.inPendingSyncState()
					? this.pendingDiffs.push(c)
					: ((this.state = pi.syncDiff(this.state, c, f, d)), h());
			}),
			this.onJoin((c, f, d) => {
				this.channel._trigger("presence", {
					event: "join",
					key: c,
					currentPresences: f,
					newPresences: d,
				});
			}),
			this.onLeave((c, f, d) => {
				this.channel._trigger("presence", {
					event: "leave",
					key: c,
					currentPresences: f,
					leftPresences: d,
				});
			}),
			this.onSync(() => {
				this.channel._trigger("presence", { event: "sync" });
			});
	}
	static syncState(l, r, i, c) {
		const f = pi.cloneDeep(l),
			d = pi.transformState(r),
			h = {},
			m = {};
		return (
			pi.map(f, (p, b) => {
				d[p] || (m[p] = b);
			}),
			pi.map(d, (p, b) => {
				const _ = f[p];
				if (_) {
					const w = b.map((D) => D.presence_ref),
						j = _.map((D) => D.presence_ref),
						M = b.filter((D) => j.indexOf(D.presence_ref) < 0),
						B = _.filter((D) => w.indexOf(D.presence_ref) < 0);
					M.length > 0 && (h[p] = M), B.length > 0 && (m[p] = B);
				} else h[p] = b;
			}),
			pi.syncDiff(f, { joins: h, leaves: m }, i, c)
		);
	}
	static syncDiff(l, r, i, c) {
		const { joins: f, leaves: d } = {
			joins: pi.transformState(r.joins),
			leaves: pi.transformState(r.leaves),
		};
		return (
			i || (i = () => {}),
			c || (c = () => {}),
			pi.map(f, (h, m) => {
				var p;
				const b = (p = l[h]) !== null && p !== void 0 ? p : [];
				if (((l[h] = pi.cloneDeep(m)), b.length > 0)) {
					const _ = l[h].map((j) => j.presence_ref),
						w = b.filter((j) => _.indexOf(j.presence_ref) < 0);
					l[h].unshift(...w);
				}
				i(h, b, m);
			}),
			pi.map(d, (h, m) => {
				let p = l[h];
				if (!p) return;
				const b = m.map((_) => _.presence_ref);
				(p = p.filter((_) => b.indexOf(_.presence_ref) < 0)),
					(l[h] = p),
					c(h, p, m),
					p.length === 0 && delete l[h];
			}),
			l
		);
	}
	static map(l, r) {
		return Object.getOwnPropertyNames(l).map((i) => r(i, l[i]));
	}
	static transformState(l) {
		return (
			(l = pi.cloneDeep(l)),
			Object.getOwnPropertyNames(l).reduce((r, i) => {
				const c = l[i];
				return (
					"metas" in c
						? (r[i] = c.metas.map(
								(f) => (
									(f.presence_ref = f.phx_ref),
									delete f.phx_ref,
									delete f.phx_ref_prev,
									f
								),
							))
						: (r[i] = c),
					r
				);
			}, {})
		);
	}
	static cloneDeep(l) {
		return JSON.parse(JSON.stringify(l));
	}
	onJoin(l) {
		this.caller.onJoin = l;
	}
	onLeave(l) {
		this.caller.onLeave = l;
	}
	onSync(l) {
		this.caller.onSync = l;
	}
	inPendingSyncState() {
		return !this.joinRef || this.joinRef !== this.channel._joinRef();
	}
}
var Rv;
((u) => {
	(u.ALL = "*"),
		(u.INSERT = "INSERT"),
		(u.UPDATE = "UPDATE"),
		(u.DELETE = "DELETE");
})(Rv || (Rv = {}));
var Nv;
((u) => {
	(u.BROADCAST = "broadcast"),
		(u.PRESENCE = "presence"),
		(u.POSTGRES_CHANGES = "postgres_changes"),
		(u.SYSTEM = "system");
})(Nv || (Nv = {}));
var un;
((u) => {
	(u.SUBSCRIBED = "SUBSCRIBED"),
		(u.TIMED_OUT = "TIMED_OUT"),
		(u.CLOSED = "CLOSED"),
		(u.CHANNEL_ERROR = "CHANNEL_ERROR");
})(un || (un = {}));
class ec {
	constructor(l, r = { config: {} }, i) {
		(this.topic = l),
			(this.params = r),
			(this.socket = i),
			(this.bindings = {}),
			(this.state = tt.closed),
			(this.joinedOnce = !1),
			(this.pushBuffer = []),
			(this.subTopic = l.replace(/^realtime:/i, "")),
			(this.params.config = Object.assign(
				{
					broadcast: { ack: !1, self: !1 },
					presence: { key: "" },
					private: !1,
				},
				r.config,
			)),
			(this.timeout = this.socket.timeout),
			(this.joinPush = new jo(this, kt.join, this.params, this.timeout)),
			(this.rejoinTimer = new Op(
				() => this._rejoinUntilConnected(),
				this.socket.reconnectAfterMs,
			)),
			this.joinPush.receive("ok", () => {
				(this.state = tt.joined),
					this.rejoinTimer.reset(),
					this.pushBuffer.forEach((c) => c.send()),
					(this.pushBuffer = []);
			}),
			this._onClose(() => {
				this.rejoinTimer.reset(),
					this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`),
					(this.state = tt.closed),
					this.socket._remove(this);
			}),
			this._onError((c) => {
				this._isLeaving() ||
					this._isClosed() ||
					(this.socket.log("channel", `error ${this.topic}`, c),
					(this.state = tt.errored),
					this.rejoinTimer.scheduleTimeout());
			}),
			this.joinPush.receive("timeout", () => {
				this._isJoining() &&
					(this.socket.log(
						"channel",
						`timeout ${this.topic}`,
						this.joinPush.timeout,
					),
					(this.state = tt.errored),
					this.rejoinTimer.scheduleTimeout());
			}),
			this._on(kt.reply, {}, (c, f) => {
				this._trigger(this._replyEventName(f), c);
			}),
			(this.presence = new pi(this)),
			(this.broadcastEndpointURL = Ap(this.socket.endPoint) + "/api/broadcast"),
			(this.private = this.params.config.private || !1);
	}
	subscribe(l, r = this.timeout) {
		var i, c;
		if (
			(this.socket.isConnected() || this.socket.connect(),
			this.state == tt.closed)
		) {
			const {
				config: { broadcast: f, presence: d, private: h },
			} = this.params;
			this._onError((b) => (l == null ? void 0 : l(un.CHANNEL_ERROR, b))),
				this._onClose(() => (l == null ? void 0 : l(un.CLOSED)));
			const m = {},
				p = {
					broadcast: f,
					presence: d,
					postgres_changes:
						(c =
							(i = this.bindings.postgres_changes) === null || i === void 0
								? void 0
								: i.map((b) => b.filter)) !== null && c !== void 0
							? c
							: [],
					private: h,
				};
			this.socket.accessTokenValue &&
				(m.access_token = this.socket.accessTokenValue),
				this.updateJoinPayload(Object.assign({ config: p }, m)),
				(this.joinedOnce = !0),
				this._rejoin(r),
				this.joinPush
					.receive("ok", async ({ postgres_changes: b }) => {
						var _;
						if ((this.socket.setAuth(), b === void 0)) {
							l == null || l(un.SUBSCRIBED);
							return;
						} else {
							const w = this.bindings.postgres_changes,
								j =
									(_ = w == null ? void 0 : w.length) !== null && _ !== void 0
										? _
										: 0,
								M = [];
							for (let B = 0; B < j; B++) {
								const D = w[B],
									{
										filter: { event: K, schema: ee, table: G, filter: P },
									} = D,
									Z = b && b[B];
								if (
									Z &&
									Z.event === K &&
									Z.schema === ee &&
									Z.table === G &&
									Z.filter === P
								)
									M.push(Object.assign(Object.assign({}, D), { id: Z.id }));
								else {
									this.unsubscribe(),
										(this.state = tt.errored),
										l == null ||
											l(
												un.CHANNEL_ERROR,
												new Error(
													"mismatch between server and client bindings for postgres changes",
												),
											);
									return;
								}
							}
							(this.bindings.postgres_changes = M), l && l(un.SUBSCRIBED);
							return;
						}
					})
					.receive("error", (b) => {
						(this.state = tt.errored),
							l == null ||
								l(
									un.CHANNEL_ERROR,
									new Error(
										JSON.stringify(Object.values(b).join(", ") || "error"),
									),
								);
					})
					.receive("timeout", () => {
						l == null || l(un.TIMED_OUT);
					});
		}
		return this;
	}
	presenceState() {
		return this.presence.state;
	}
	async track(l, r = {}) {
		return await this.send(
			{ type: "presence", event: "track", payload: l },
			r.timeout || this.timeout,
		);
	}
	async untrack(l = {}) {
		return await this.send({ type: "presence", event: "untrack" }, l);
	}
	on(l, r, i) {
		return this._on(l, r, i);
	}
	async send(l, r = {}) {
		var i, c;
		if (!this._canPush() && l.type === "broadcast") {
			const { event: f, payload: d } = l,
				m = {
					method: "POST",
					headers: {
						Authorization: this.socket.accessTokenValue
							? `Bearer ${this.socket.accessTokenValue}`
							: "",
						apikey: this.socket.apiKey ? this.socket.apiKey : "",
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						messages: [
							{
								topic: this.subTopic,
								event: f,
								payload: d,
								private: this.private,
							},
						],
					}),
				};
			try {
				const p = await this._fetchWithTimeout(
					this.broadcastEndpointURL,
					m,
					(i = r.timeout) !== null && i !== void 0 ? i : this.timeout,
				);
				return (
					await ((c = p.body) === null || c === void 0 ? void 0 : c.cancel()),
					p.ok ? "ok" : "error"
				);
			} catch (p) {
				return p.name === "AbortError" ? "timed out" : "error";
			}
		} else
			return new Promise((f) => {
				var d, h, m;
				const p = this._push(l.type, l, r.timeout || this.timeout);
				l.type === "broadcast" &&
					!(
						!(
							(m =
								(h =
									(d = this.params) === null || d === void 0
										? void 0
										: d.config) === null || h === void 0
									? void 0
									: h.broadcast) === null || m === void 0
						) && m.ack
					) &&
					f("ok"),
					p.receive("ok", () => f("ok")),
					p.receive("error", () => f("error")),
					p.receive("timeout", () => f("timed out"));
			});
	}
	updateJoinPayload(l) {
		this.joinPush.updatePayload(l);
	}
	unsubscribe(l = this.timeout) {
		this.state = tt.leaving;
		const r = () => {
			this.socket.log("channel", `leave ${this.topic}`),
				this._trigger(kt.close, "leave", this._joinRef());
		};
		this.joinPush.destroy();
		let i = null;
		return new Promise((c) => {
			(i = new jo(this, kt.leave, {}, l)),
				i
					.receive("ok", () => {
						r(), c("ok");
					})
					.receive("timeout", () => {
						r(), c("timed out");
					})
					.receive("error", () => {
						c("error");
					}),
				i.send(),
				this._canPush() || i.trigger("ok", {});
		}).finally(() => {
			i == null || i.destroy();
		});
	}
	teardown() {
		this.pushBuffer.forEach((l) => l.destroy()),
			this.rejoinTimer && clearTimeout(this.rejoinTimer.timer),
			this.joinPush.destroy();
	}
	async _fetchWithTimeout(l, r, i) {
		const c = new AbortController(),
			f = setTimeout(() => c.abort(), i),
			d = await this.socket.fetch(
				l,
				Object.assign(Object.assign({}, r), { signal: c.signal }),
			);
		return clearTimeout(f), d;
	}
	_push(l, r, i = this.timeout) {
		if (!this.joinedOnce)
			throw `tried to push '${l}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
		const c = new jo(this, l, r, i);
		return (
			this._canPush() ? c.send() : (c.startTimeout(), this.pushBuffer.push(c)),
			c
		);
	}
	_onMessage(l, r, i) {
		return r;
	}
	_isMember(l) {
		return this.topic === l;
	}
	_joinRef() {
		return this.joinPush.ref;
	}
	_trigger(l, r, i) {
		var c, f;
		const d = l.toLocaleLowerCase(),
			{ close: h, error: m, leave: p, join: b } = kt;
		if (i && [h, m, p, b].indexOf(d) >= 0 && i !== this._joinRef()) return;
		let w = this._onMessage(d, r, i);
		if (r && !w)
			throw "channel onMessage callbacks must return the payload, modified or unmodified";
		["insert", "update", "delete"].includes(d)
			? (c = this.bindings.postgres_changes) === null ||
				c === void 0 ||
				c
					.filter((j) => {
						var M, B, D;
						return (
							((M = j.filter) === null || M === void 0 ? void 0 : M.event) ===
								"*" ||
							((D =
								(B = j.filter) === null || B === void 0 ? void 0 : B.event) ===
								null || D === void 0
								? void 0
								: D.toLocaleLowerCase()) === d
						);
					})
					.map((j) => j.callback(w, i))
			: (f = this.bindings[d]) === null ||
				f === void 0 ||
				f
					.filter((j) => {
						var M, B, D, K, ee, G;
						if (["broadcast", "presence", "postgres_changes"].includes(d))
							if ("id" in j) {
								const P = j.id,
									Z =
										(M = j.filter) === null || M === void 0 ? void 0 : M.event;
								return (
									P &&
									((B = r.ids) === null || B === void 0
										? void 0
										: B.includes(P)) &&
									(Z === "*" ||
										(Z == null ? void 0 : Z.toLocaleLowerCase()) ===
											((D = r.data) === null || D === void 0
												? void 0
												: D.type.toLocaleLowerCase()))
								);
							} else {
								const P =
									(ee =
										(K = j == null ? void 0 : j.filter) === null || K === void 0
											? void 0
											: K.event) === null || ee === void 0
										? void 0
										: ee.toLocaleLowerCase();
								return (
									P === "*" ||
									P ===
										((G = r == null ? void 0 : r.event) === null || G === void 0
											? void 0
											: G.toLocaleLowerCase())
								);
							}
						else return j.type.toLocaleLowerCase() === d;
					})
					.map((j) => {
						if (typeof w == "object" && "ids" in w) {
							const M = w.data,
								{
									schema: B,
									table: D,
									commit_timestamp: K,
									type: ee,
									errors: G,
								} = M;
							w = Object.assign(
								Object.assign(
									{},
									{
										schema: B,
										table: D,
										commit_timestamp: K,
										eventType: ee,
										new: {},
										old: {},
										errors: G,
									},
								),
								this._getPayloadRecords(M),
							);
						}
						j.callback(w, i);
					});
	}
	_isClosed() {
		return this.state === tt.closed;
	}
	_isJoined() {
		return this.state === tt.joined;
	}
	_isJoining() {
		return this.state === tt.joining;
	}
	_isLeaving() {
		return this.state === tt.leaving;
	}
	_replyEventName(l) {
		return `chan_reply_${l}`;
	}
	_on(l, r, i) {
		const c = l.toLocaleLowerCase(),
			f = { type: c, filter: r, callback: i };
		return (
			this.bindings[c] ? this.bindings[c].push(f) : (this.bindings[c] = [f]),
			this
		);
	}
	_off(l, r) {
		const i = l.toLocaleLowerCase();
		return (
			(this.bindings[i] = this.bindings[i].filter((c) => {
				var f;
				return !(
					((f = c.type) === null || f === void 0
						? void 0
						: f.toLocaleLowerCase()) === i && ec.isEqual(c.filter, r)
				);
			})),
			this
		);
	}
	static isEqual(l, r) {
		if (Object.keys(l).length !== Object.keys(r).length) return !1;
		for (const i in l) if (l[i] !== r[i]) return !1;
		return !0;
	}
	_rejoinUntilConnected() {
		this.rejoinTimer.scheduleTimeout(),
			this.socket.isConnected() && this._rejoin();
	}
	_onClose(l) {
		this._on(kt.close, {}, l);
	}
	_onError(l) {
		this._on(kt.error, {}, (r) => l(r));
	}
	_canPush() {
		return this.socket.isConnected() && this._isJoined();
	}
	_rejoin(l = this.timeout) {
		this._isLeaving() ||
			(this.socket._leaveOpenTopic(this.topic),
			(this.state = tt.joining),
			this.joinPush.resend(l));
	}
	_getPayloadRecords(l) {
		const r = { new: {}, old: {} };
		return (
			(l.type === "INSERT" || l.type === "UPDATE") &&
				(r.new = jv(l.columns, l.record)),
			(l.type === "UPDATE" || l.type === "DELETE") &&
				(r.old = jv(l.columns, l.old_record)),
			r
		);
	}
}
const Cv = () => {},
	ub = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class ob {
	constructor(l, r) {
		var i;
		(this.accessTokenValue = null),
			(this.apiKey = null),
			(this.channels = []),
			(this.endPoint = ""),
			(this.httpEndpoint = ""),
			(this.headers = {}),
			(this.params = {}),
			(this.timeout = Tp),
			(this.heartbeatIntervalMs = 25e3),
			(this.heartbeatTimer = void 0),
			(this.pendingHeartbeatRef = null),
			(this.heartbeatCallback = Cv),
			(this.ref = 0),
			(this.logger = Cv),
			(this.conn = null),
			(this.sendBuffer = []),
			(this.serializer = new tb()),
			(this.stateChangeCallbacks = {
				open: [],
				close: [],
				error: [],
				message: [],
			}),
			(this.accessToken = null),
			(this._resolveFetch = (f) => {
				let d;
				return (
					f
						? (d = f)
						: typeof fetch > "u"
							? (d = (...h) =>
									wi(
										async () => {
											const { default: m } = await Promise.resolve().then(
												() => cl,
											);
											return { default: m };
										},
										void 0,
									).then(({ default: m }) => m(...h)))
							: (d = fetch),
					(...h) => d(...h)
				);
			}),
			(this.endPoint = `${l}/${Yo.websocket}`),
			(this.httpEndpoint = Ap(l)),
			r != null && r.transport
				? (this.transport = r.transport)
				: (this.transport = null),
			r != null && r.params && (this.params = r.params),
			r != null && r.timeout && (this.timeout = r.timeout),
			r != null && r.logger && (this.logger = r.logger),
			((r != null && r.logLevel) || (r != null && r.log_level)) &&
				((this.logLevel = r.logLevel || r.log_level),
				(this.params = Object.assign(Object.assign({}, this.params), {
					log_level: this.logLevel,
				}))),
			r != null &&
				r.heartbeatIntervalMs &&
				(this.heartbeatIntervalMs = r.heartbeatIntervalMs);
		const c =
			(i = r == null ? void 0 : r.params) === null || i === void 0
				? void 0
				: i.apikey;
		if (
			(c && ((this.accessTokenValue = c), (this.apiKey = c)),
			(this.reconnectAfterMs =
				r != null && r.reconnectAfterMs
					? r.reconnectAfterMs
					: (f) => [1e3, 2e3, 5e3, 1e4][f - 1] || 1e4),
			(this.encode =
				r != null && r.encode ? r.encode : (f, d) => d(JSON.stringify(f))),
			(this.decode =
				r != null && r.decode
					? r.decode
					: this.serializer.decode.bind(this.serializer)),
			(this.reconnectTimer = new Op(async () => {
				this.disconnect(), this.connect();
			}, this.reconnectAfterMs)),
			(this.fetch = this._resolveFetch(r == null ? void 0 : r.fetch)),
			r != null && r.worker)
		) {
			if (typeof window < "u" && !window.Worker)
				throw new Error("Web Worker is not supported");
			(this.worker = (r == null ? void 0 : r.worker) || !1),
				(this.workerUrl = r == null ? void 0 : r.workerUrl);
		}
		this.accessToken = (r == null ? void 0 : r.accessToken) || null;
	}
	connect() {
		if (!this.conn) {
			if ((this.transport || (this.transport = P0), !this.transport))
				throw new Error("No transport provided");
			(this.conn = new this.transport(this.endpointURL())),
				this.setupConnection();
		}
	}
	endpointURL() {
		return this._appendParams(
			this.endPoint,
			Object.assign({}, this.params, { vsn: I0 }),
		);
	}
	disconnect(l, r) {
		this.conn &&
			((this.conn.onclose = () => {}),
			l ? this.conn.close(l, r ?? "") : this.conn.close(),
			(this.conn = null),
			this.heartbeatTimer && clearInterval(this.heartbeatTimer),
			this.reconnectTimer.reset(),
			this.channels.forEach((i) => i.teardown()));
	}
	getChannels() {
		return this.channels;
	}
	async removeChannel(l) {
		const r = await l.unsubscribe();
		return this.channels.length === 0 && this.disconnect(), r;
	}
	async removeAllChannels() {
		const l = await Promise.all(this.channels.map((r) => r.unsubscribe()));
		return (this.channels = []), this.disconnect(), l;
	}
	log(l, r, i) {
		this.logger(l, r, i);
	}
	connectionState() {
		switch (this.conn && this.conn.readyState) {
			case vi.connecting:
				return oa.Connecting;
			case vi.open:
				return oa.Open;
			case vi.closing:
				return oa.Closing;
			default:
				return oa.Closed;
		}
	}
	isConnected() {
		return this.connectionState() === oa.Open;
	}
	channel(l, r = { config: {} }) {
		const i = `realtime:${l}`,
			c = this.getChannels().find((f) => f.topic === i);
		if (c) return c;
		{
			const f = new ec(`realtime:${l}`, r, this);
			return this.channels.push(f), f;
		}
	}
	push(l) {
		const { topic: r, event: i, payload: c, ref: f } = l,
			d = () => {
				this.encode(l, (h) => {
					var m;
					(m = this.conn) === null || m === void 0 || m.send(h);
				});
			};
		this.log("push", `${r} ${i} (${f})`, c),
			this.isConnected() ? d() : this.sendBuffer.push(d);
	}
	async setAuth(l = null) {
		const r =
			l ||
			(this.accessToken && (await this.accessToken())) ||
			this.accessTokenValue;
		this.accessTokenValue != r &&
			((this.accessTokenValue = r),
			this.channels.forEach((i) => {
				const c = { access_token: r, version: F0 };
				r && i.updateJoinPayload(c),
					i.joinedOnce &&
						i._isJoined() &&
						i._push(kt.access_token, { access_token: r });
			}));
	}
	async sendHeartbeat() {
		var l;
		if (!this.isConnected()) {
			this.heartbeatCallback("disconnected");
			return;
		}
		if (this.pendingHeartbeatRef) {
			(this.pendingHeartbeatRef = null),
				this.log(
					"transport",
					"heartbeat timeout. Attempting to re-establish connection",
				),
				this.heartbeatCallback("timeout"),
				(l = this.conn) === null ||
					l === void 0 ||
					l.close(eb, "hearbeat timeout");
			return;
		}
		(this.pendingHeartbeatRef = this._makeRef()),
			this.push({
				topic: "phoenix",
				event: "heartbeat",
				payload: {},
				ref: this.pendingHeartbeatRef,
			}),
			this.heartbeatCallback("sent"),
			await this.setAuth();
	}
	onHeartbeat(l) {
		this.heartbeatCallback = l;
	}
	flushSendBuffer() {
		this.isConnected() &&
			this.sendBuffer.length > 0 &&
			(this.sendBuffer.forEach((l) => l()), (this.sendBuffer = []));
	}
	_makeRef() {
		const l = this.ref + 1;
		return (
			l === this.ref ? (this.ref = 0) : (this.ref = l), this.ref.toString()
		);
	}
	_leaveOpenTopic(l) {
		const r = this.channels.find(
			(i) => i.topic === l && (i._isJoined() || i._isJoining()),
		);
		r &&
			(this.log("transport", `leaving duplicate topic "${l}"`),
			r.unsubscribe());
	}
	_remove(l) {
		this.channels = this.channels.filter((r) => r.topic !== l.topic);
	}
	setupConnection() {
		this.conn &&
			((this.conn.binaryType = "arraybuffer"),
			(this.conn.onopen = () => this._onConnOpen()),
			(this.conn.onerror = (l) => this._onConnError(l)),
			(this.conn.onmessage = (l) => this._onConnMessage(l)),
			(this.conn.onclose = (l) => this._onConnClose(l)));
	}
	_onConnMessage(l) {
		this.decode(l.data, (r) => {
			const { topic: i, event: c, payload: f, ref: d } = r;
			i === "phoenix" &&
				c === "phx_reply" &&
				this.heartbeatCallback(r.payload.status == "ok" ? "ok" : "error"),
				d &&
					d === this.pendingHeartbeatRef &&
					(this.pendingHeartbeatRef = null),
				this.log(
					"receive",
					`${f.status || ""} ${i} ${c} ${(d && "(" + d + ")") || ""}`,
					f,
				),
				Array.from(this.channels)
					.filter((h) => h._isMember(i))
					.forEach((h) => h._trigger(c, f, d)),
				this.stateChangeCallbacks.message.forEach((h) => h(r));
		});
	}
	_onConnOpen() {
		this.log("transport", `connected to ${this.endpointURL()}`),
			this.flushSendBuffer(),
			this.reconnectTimer.reset(),
			this.worker
				? this.workerRef || this._startWorkerHeartbeat()
				: this._startHeartbeat(),
			this.stateChangeCallbacks.open.forEach((l) => l());
	}
	_startHeartbeat() {
		this.heartbeatTimer && clearInterval(this.heartbeatTimer),
			(this.heartbeatTimer = setInterval(
				() => this.sendHeartbeat(),
				this.heartbeatIntervalMs,
			));
	}
	_startWorkerHeartbeat() {
		this.workerUrl
			? this.log("worker", `starting worker for from ${this.workerUrl}`)
			: this.log("worker", "starting default worker");
		const l = this._workerObjectUrl(this.workerUrl);
		(this.workerRef = new Worker(l)),
			(this.workerRef.onerror = (r) => {
				this.log("worker", "worker error", r.message),
					this.workerRef.terminate();
			}),
			(this.workerRef.onmessage = (r) => {
				r.data.event === "keepAlive" && this.sendHeartbeat();
			}),
			this.workerRef.postMessage({
				event: "start",
				interval: this.heartbeatIntervalMs,
			});
	}
	_onConnClose(l) {
		this.log("transport", "close", l),
			this._triggerChanError(),
			this.heartbeatTimer && clearInterval(this.heartbeatTimer),
			this.reconnectTimer.scheduleTimeout(),
			this.stateChangeCallbacks.close.forEach((r) => r(l));
	}
	_onConnError(l) {
		this.log("transport", `${l}`),
			this._triggerChanError(),
			this.stateChangeCallbacks.error.forEach((r) => r(l));
	}
	_triggerChanError() {
		this.channels.forEach((l) => l._trigger(kt.error));
	}
	_appendParams(l, r) {
		if (Object.keys(r).length === 0) return l;
		const i = l.match(/\?/) ? "&" : "?",
			c = new URLSearchParams(r);
		return `${l}${i}${c}`;
	}
	_workerObjectUrl(l) {
		let r;
		if (l) r = l;
		else {
			const i = new Blob([ub], { type: "application/javascript" });
			r = URL.createObjectURL(i);
		}
		return r;
	}
}
class tc extends Error {
	constructor(l) {
		super(l), (this.__isStorageError = !0), (this.name = "StorageError");
	}
}
function Ze(u) {
	return typeof u == "object" && u !== null && "__isStorageError" in u;
}
class cb extends tc {
	constructor(l, r) {
		super(l), (this.name = "StorageApiError"), (this.status = r);
	}
	toJSON() {
		return { name: this.name, message: this.message, status: this.status };
	}
}
class Qo extends tc {
	constructor(l, r) {
		super(l), (this.name = "StorageUnknownError"), (this.originalError = r);
	}
}
var fb = (u, l, r, i) => {
	function c(f) {
		return f instanceof r
			? f
			: new r((d) => {
					d(f);
				});
	}
	return new (r || (r = Promise))((f, d) => {
		function h(b) {
			try {
				p(i.next(b));
			} catch (_) {
				d(_);
			}
		}
		function m(b) {
			try {
				p(i.throw(b));
			} catch (_) {
				d(_);
			}
		}
		function p(b) {
			b.done ? f(b.value) : c(b.value).then(h, m);
		}
		p((i = i.apply(u, l || [])).next());
	});
};
const Rp = (u) => {
		let l;
		return (
			u
				? (l = u)
				: typeof fetch > "u"
					? (l = (...r) =>
							wi(
								async () => {
									const { default: i } = await Promise.resolve().then(() => cl);
									return { default: i };
								},
								void 0,
							).then(({ default: i }) => i(...r)))
					: (l = fetch),
			(...r) => l(...r)
		);
	},
	db = () =>
		fb(void 0, void 0, void 0, function* () {
			return typeof Response > "u"
				? (yield wi(() => Promise.resolve().then(() => cl), void 0)).Response
				: Response;
		}),
	Vo = (u) => {
		if (Array.isArray(u)) return u.map((r) => Vo(r));
		if (typeof u == "function" || u !== Object(u)) return u;
		const l = {};
		return (
			Object.entries(u).forEach(([r, i]) => {
				const c = r.replace(/([-_][a-z])/gi, (f) =>
					f.toUpperCase().replace(/[-_]/g, ""),
				);
				l[c] = Vo(i);
			}),
			l
		);
	};
var fa = (u, l, r, i) => {
	function c(f) {
		return f instanceof r
			? f
			: new r((d) => {
					d(f);
				});
	}
	return new (r || (r = Promise))((f, d) => {
		function h(b) {
			try {
				p(i.next(b));
			} catch (_) {
				d(_);
			}
		}
		function m(b) {
			try {
				p(i.throw(b));
			} catch (_) {
				d(_);
			}
		}
		function p(b) {
			b.done ? f(b.value) : c(b.value).then(h, m);
		}
		p((i = i.apply(u, l || [])).next());
	});
};
const Ao = (u) =>
		u.msg || u.message || u.error_description || u.error || JSON.stringify(u),
	hb = (u, l, r) =>
		fa(void 0, void 0, void 0, function* () {
			const i = yield db();
			u instanceof i && !(r != null && r.noResolveJson)
				? u
						.json()
						.then((c) => {
							l(new cb(Ao(c), u.status || 500));
						})
						.catch((c) => {
							l(new Qo(Ao(c), c));
						})
				: l(new Qo(Ao(u), u));
		}),
	vb = (u, l, r, i) => {
		const c = { method: u, headers: (l == null ? void 0 : l.headers) || {} };
		return u === "GET"
			? c
			: ((c.headers = Object.assign(
					{ "Content-Type": "application/json" },
					l == null ? void 0 : l.headers,
				)),
				i && (c.body = JSON.stringify(i)),
				Object.assign(Object.assign({}, c), r));
	};
function Ei(u, l, r, i, c, f) {
	return fa(this, void 0, void 0, function* () {
		return new Promise((d, h) => {
			u(r, vb(l, i, c, f))
				.then((m) => {
					if (!m.ok) throw m;
					return i != null && i.noResolveJson ? m : m.json();
				})
				.then((m) => d(m))
				.catch((m) => hb(m, h, i));
		});
	});
}
function Wr(u, l, r, i) {
	return fa(this, void 0, void 0, function* () {
		return Ei(u, "GET", l, r, i);
	});
}
function kn(u, l, r, i, c) {
	return fa(this, void 0, void 0, function* () {
		return Ei(u, "POST", l, i, c, r);
	});
}
function pb(u, l, r, i, c) {
	return fa(this, void 0, void 0, function* () {
		return Ei(u, "PUT", l, i, c, r);
	});
}
function mb(u, l, r, i) {
	return fa(this, void 0, void 0, function* () {
		return Ei(
			u,
			"HEAD",
			l,
			Object.assign(Object.assign({}, r), { noResolveJson: !0 }),
			i,
		);
	});
}
function Np(u, l, r, i, c) {
	return fa(this, void 0, void 0, function* () {
		return Ei(u, "DELETE", l, i, c, r);
	});
}
var ct = (u, l, r, i) => {
	function c(f) {
		return f instanceof r
			? f
			: new r((d) => {
					d(f);
				});
	}
	return new (r || (r = Promise))((f, d) => {
		function h(b) {
			try {
				p(i.next(b));
			} catch (_) {
				d(_);
			}
		}
		function m(b) {
			try {
				p(i.throw(b));
			} catch (_) {
				d(_);
			}
		}
		function p(b) {
			b.done ? f(b.value) : c(b.value).then(h, m);
		}
		p((i = i.apply(u, l || [])).next());
	});
};
const yb = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
	Uv = {
		cacheControl: "3600",
		contentType: "text/plain;charset=UTF-8",
		upsert: !1,
	};
class gb {
	constructor(l, r = {}, i, c) {
		(this.url = l),
			(this.headers = r),
			(this.bucketId = i),
			(this.fetch = Rp(c));
	}
	uploadOrUpdate(l, r, i, c) {
		return ct(this, void 0, void 0, function* () {
			try {
				let f;
				const d = Object.assign(Object.assign({}, Uv), c);
				let h = Object.assign(
					Object.assign({}, this.headers),
					l === "POST" && { "x-upsert": String(d.upsert) },
				);
				const m = d.metadata;
				typeof Blob < "u" && i instanceof Blob
					? ((f = new FormData()),
						f.append("cacheControl", d.cacheControl),
						m && f.append("metadata", this.encodeMetadata(m)),
						f.append("", i))
					: typeof FormData < "u" && i instanceof FormData
						? ((f = i),
							f.append("cacheControl", d.cacheControl),
							m && f.append("metadata", this.encodeMetadata(m)))
						: ((f = i),
							(h["cache-control"] = `max-age=${d.cacheControl}`),
							(h["content-type"] = d.contentType),
							m && (h["x-metadata"] = this.toBase64(this.encodeMetadata(m)))),
					c != null &&
						c.headers &&
						(h = Object.assign(Object.assign({}, h), c.headers));
				const p = this._removeEmptyFolders(r),
					b = this._getFinalPath(p),
					_ = yield this.fetch(
						`${this.url}/object/${b}`,
						Object.assign(
							{ method: l, body: f, headers: h },
							d != null && d.duplex ? { duplex: d.duplex } : {},
						),
					),
					w = yield _.json();
				return _.ok
					? { data: { path: p, id: w.Id, fullPath: w.Key }, error: null }
					: { data: null, error: w };
			} catch (f) {
				if (Ze(f)) return { data: null, error: f };
				throw f;
			}
		});
	}
	upload(l, r, i) {
		return ct(this, void 0, void 0, function* () {
			return this.uploadOrUpdate("POST", l, r, i);
		});
	}
	uploadToSignedUrl(l, r, i, c) {
		return ct(this, void 0, void 0, function* () {
			const f = this._removeEmptyFolders(l),
				d = this._getFinalPath(f),
				h = new URL(this.url + `/object/upload/sign/${d}`);
			h.searchParams.set("token", r);
			try {
				let m;
				const p = Object.assign({ upsert: Uv.upsert }, c),
					b = Object.assign(Object.assign({}, this.headers), {
						"x-upsert": String(p.upsert),
					});
				typeof Blob < "u" && i instanceof Blob
					? ((m = new FormData()),
						m.append("cacheControl", p.cacheControl),
						m.append("", i))
					: typeof FormData < "u" && i instanceof FormData
						? ((m = i), m.append("cacheControl", p.cacheControl))
						: ((m = i),
							(b["cache-control"] = `max-age=${p.cacheControl}`),
							(b["content-type"] = p.contentType));
				const _ = yield this.fetch(h.toString(), {
						method: "PUT",
						body: m,
						headers: b,
					}),
					w = yield _.json();
				return _.ok
					? { data: { path: f, fullPath: w.Key }, error: null }
					: { data: null, error: w };
			} catch (m) {
				if (Ze(m)) return { data: null, error: m };
				throw m;
			}
		});
	}
	createSignedUploadUrl(l, r) {
		return ct(this, void 0, void 0, function* () {
			try {
				const i = this._getFinalPath(l);
				const c = Object.assign({}, this.headers);
				r != null && r.upsert && (c["x-upsert"] = "true");
				const f = yield kn(
						this.fetch,
						`${this.url}/object/upload/sign/${i}`,
						{},
						{ headers: c },
					),
					d = new URL(this.url + f.url),
					h = d.searchParams.get("token");
				if (!h) throw new tc("No token returned by API");
				return {
					data: { signedUrl: d.toString(), path: l, token: h },
					error: null,
				};
			} catch (i) {
				if (Ze(i)) return { data: null, error: i };
				throw i;
			}
		});
	}
	update(l, r, i) {
		return ct(this, void 0, void 0, function* () {
			return this.uploadOrUpdate("PUT", l, r, i);
		});
	}
	move(l, r, i) {
		return ct(this, void 0, void 0, function* () {
			try {
				return {
					data: yield kn(
						this.fetch,
						`${this.url}/object/move`,
						{
							bucketId: this.bucketId,
							sourceKey: l,
							destinationKey: r,
							destinationBucket: i == null ? void 0 : i.destinationBucket,
						},
						{ headers: this.headers },
					),
					error: null,
				};
			} catch (c) {
				if (Ze(c)) return { data: null, error: c };
				throw c;
			}
		});
	}
	copy(l, r, i) {
		return ct(this, void 0, void 0, function* () {
			try {
				return {
					data: {
						path: (yield kn(
							this.fetch,
							`${this.url}/object/copy`,
							{
								bucketId: this.bucketId,
								sourceKey: l,
								destinationKey: r,
								destinationBucket: i == null ? void 0 : i.destinationBucket,
							},
							{ headers: this.headers },
						)).Key,
					},
					error: null,
				};
			} catch (c) {
				if (Ze(c)) return { data: null, error: c };
				throw c;
			}
		});
	}
	createSignedUrl(l, r, i) {
		return ct(this, void 0, void 0, function* () {
			try {
				let c = this._getFinalPath(l),
					f = yield kn(
						this.fetch,
						`${this.url}/object/sign/${c}`,
						Object.assign(
							{ expiresIn: r },
							i != null && i.transform ? { transform: i.transform } : {},
						),
						{ headers: this.headers },
					);
				const d =
					i != null && i.download
						? `&download=${i.download === !0 ? "" : i.download}`
						: "";
				return (
					(f = { signedUrl: encodeURI(`${this.url}${f.signedURL}${d}`) }),
					{ data: f, error: null }
				);
			} catch (c) {
				if (Ze(c)) return { data: null, error: c };
				throw c;
			}
		});
	}
	createSignedUrls(l, r, i) {
		return ct(this, void 0, void 0, function* () {
			try {
				const c = yield kn(
						this.fetch,
						`${this.url}/object/sign/${this.bucketId}`,
						{ expiresIn: r, paths: l },
						{ headers: this.headers },
					),
					f =
						i != null && i.download
							? `&download=${i.download === !0 ? "" : i.download}`
							: "";
				return {
					data: c.map((d) =>
						Object.assign(Object.assign({}, d), {
							signedUrl: d.signedURL
								? encodeURI(`${this.url}${d.signedURL}${f}`)
								: null,
						}),
					),
					error: null,
				};
			} catch (c) {
				if (Ze(c)) return { data: null, error: c };
				throw c;
			}
		});
	}
	download(l, r) {
		return ct(this, void 0, void 0, function* () {
			const c =
					typeof (r == null ? void 0 : r.transform) < "u"
						? "render/image/authenticated"
						: "object",
				f = this.transformOptsToQueryString(
					(r == null ? void 0 : r.transform) || {},
				),
				d = f ? `?${f}` : "";
			try {
				const h = this._getFinalPath(l);
				return {
					data: yield (yield Wr(this.fetch, `${this.url}/${c}/${h}${d}`, {
						headers: this.headers,
						noResolveJson: !0,
					})).blob(),
					error: null,
				};
			} catch (h) {
				if (Ze(h)) return { data: null, error: h };
				throw h;
			}
		});
	}
	info(l) {
		return ct(this, void 0, void 0, function* () {
			const r = this._getFinalPath(l);
			try {
				const i = yield Wr(this.fetch, `${this.url}/object/info/${r}`, {
					headers: this.headers,
				});
				return { data: Vo(i), error: null };
			} catch (i) {
				if (Ze(i)) return { data: null, error: i };
				throw i;
			}
		});
	}
	exists(l) {
		return ct(this, void 0, void 0, function* () {
			const r = this._getFinalPath(l);
			try {
				return (
					yield mb(this.fetch, `${this.url}/object/${r}`, {
						headers: this.headers,
					}),
					{ data: !0, error: null }
				);
			} catch (i) {
				if (Ze(i) && i instanceof Qo) {
					const c = i.originalError;
					if ([400, 404].includes(c == null ? void 0 : c.status))
						return { data: !1, error: i };
				}
				throw i;
			}
		});
	}
	getPublicUrl(l, r) {
		const i = this._getFinalPath(l),
			c = [],
			f =
				r != null && r.download
					? `download=${r.download === !0 ? "" : r.download}`
					: "";
		f !== "" && c.push(f);
		const h =
				typeof (r == null ? void 0 : r.transform) < "u"
					? "render/image"
					: "object",
			m = this.transformOptsToQueryString(
				(r == null ? void 0 : r.transform) || {},
			);
		m !== "" && c.push(m);
		let p = c.join("&");
		return (
			p !== "" && (p = `?${p}`),
			{ data: { publicUrl: encodeURI(`${this.url}/${h}/public/${i}${p}`) } }
		);
	}
	remove(l) {
		return ct(this, void 0, void 0, function* () {
			try {
				return {
					data: yield Np(
						this.fetch,
						`${this.url}/object/${this.bucketId}`,
						{ prefixes: l },
						{ headers: this.headers },
					),
					error: null,
				};
			} catch (r) {
				if (Ze(r)) return { data: null, error: r };
				throw r;
			}
		});
	}
	list(l, r, i) {
		return ct(this, void 0, void 0, function* () {
			try {
				const c = Object.assign(Object.assign(Object.assign({}, yb), r), {
					prefix: l || "",
				});
				return {
					data: yield kn(
						this.fetch,
						`${this.url}/object/list/${this.bucketId}`,
						c,
						{ headers: this.headers },
						i,
					),
					error: null,
				};
			} catch (c) {
				if (Ze(c)) return { data: null, error: c };
				throw c;
			}
		});
	}
	encodeMetadata(l) {
		return JSON.stringify(l);
	}
	toBase64(l) {
		return typeof Buffer < "u" ? Buffer.from(l).toString("base64") : btoa(l);
	}
	_getFinalPath(l) {
		return `${this.bucketId}/${l}`;
	}
	_removeEmptyFolders(l) {
		return l.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
	}
	transformOptsToQueryString(l) {
		const r = [];
		return (
			l.width && r.push(`width=${l.width}`),
			l.height && r.push(`height=${l.height}`),
			l.resize && r.push(`resize=${l.resize}`),
			l.format && r.push(`format=${l.format}`),
			l.quality && r.push(`quality=${l.quality}`),
			r.join("&")
		);
	}
}
const bb = "2.7.1",
	_b = { "X-Client-Info": `storage-js/${bb}` };
var nl = (u, l, r, i) => {
	function c(f) {
		return f instanceof r
			? f
			: new r((d) => {
					d(f);
				});
	}
	return new (r || (r = Promise))((f, d) => {
		function h(b) {
			try {
				p(i.next(b));
			} catch (_) {
				d(_);
			}
		}
		function m(b) {
			try {
				p(i.throw(b));
			} catch (_) {
				d(_);
			}
		}
		function p(b) {
			b.done ? f(b.value) : c(b.value).then(h, m);
		}
		p((i = i.apply(u, l || [])).next());
	});
};
class xb {
	constructor(l, r = {}, i) {
		(this.url = l),
			(this.headers = Object.assign(Object.assign({}, _b), r)),
			(this.fetch = Rp(i));
	}
	listBuckets() {
		return nl(this, void 0, void 0, function* () {
			try {
				return {
					data: yield Wr(this.fetch, `${this.url}/bucket`, {
						headers: this.headers,
					}),
					error: null,
				};
			} catch (l) {
				if (Ze(l)) return { data: null, error: l };
				throw l;
			}
		});
	}
	getBucket(l) {
		return nl(this, void 0, void 0, function* () {
			try {
				return {
					data: yield Wr(this.fetch, `${this.url}/bucket/${l}`, {
						headers: this.headers,
					}),
					error: null,
				};
			} catch (r) {
				if (Ze(r)) return { data: null, error: r };
				throw r;
			}
		});
	}
	createBucket(l, r = { public: !1 }) {
		return nl(this, void 0, void 0, function* () {
			try {
				return {
					data: yield kn(
						this.fetch,
						`${this.url}/bucket`,
						{
							id: l,
							name: l,
							public: r.public,
							file_size_limit: r.fileSizeLimit,
							allowed_mime_types: r.allowedMimeTypes,
						},
						{ headers: this.headers },
					),
					error: null,
				};
			} catch (i) {
				if (Ze(i)) return { data: null, error: i };
				throw i;
			}
		});
	}
	updateBucket(l, r) {
		return nl(this, void 0, void 0, function* () {
			try {
				return {
					data: yield pb(
						this.fetch,
						`${this.url}/bucket/${l}`,
						{
							id: l,
							name: l,
							public: r.public,
							file_size_limit: r.fileSizeLimit,
							allowed_mime_types: r.allowedMimeTypes,
						},
						{ headers: this.headers },
					),
					error: null,
				};
			} catch (i) {
				if (Ze(i)) return { data: null, error: i };
				throw i;
			}
		});
	}
	emptyBucket(l) {
		return nl(this, void 0, void 0, function* () {
			try {
				return {
					data: yield kn(
						this.fetch,
						`${this.url}/bucket/${l}/empty`,
						{},
						{ headers: this.headers },
					),
					error: null,
				};
			} catch (r) {
				if (Ze(r)) return { data: null, error: r };
				throw r;
			}
		});
	}
	deleteBucket(l) {
		return nl(this, void 0, void 0, function* () {
			try {
				return {
					data: yield Np(
						this.fetch,
						`${this.url}/bucket/${l}`,
						{},
						{ headers: this.headers },
					),
					error: null,
				};
			} catch (r) {
				if (Ze(r)) return { data: null, error: r };
				throw r;
			}
		});
	}
}
class Sb extends xb {
	constructor(l, r = {}, i) {
		super(l, r, i);
	}
	from(l) {
		return new gb(this.url, this.headers, l, this.fetch);
	}
}
const wb = "2.50.2";
let hi = "";
typeof Deno < "u"
	? (hi = "deno")
	: typeof document < "u"
		? (hi = "web")
		: typeof navigator < "u" && navigator.product === "ReactNative"
			? (hi = "react-native")
			: (hi = "node");
const Eb = { "X-Client-Info": `supabase-js-${hi}/${wb}` },
	Tb = { headers: Eb },
	Ob = { schema: "public" },
	jb = {
		autoRefreshToken: !0,
		persistSession: !0,
		detectSessionInUrl: !0,
		flowType: "implicit",
	},
	Ab = {};
var Rb = (u, l, r, i) => {
	function c(f) {
		return f instanceof r
			? f
			: new r((d) => {
					d(f);
				});
	}
	return new (r || (r = Promise))((f, d) => {
		function h(b) {
			try {
				p(i.next(b));
			} catch (_) {
				d(_);
			}
		}
		function m(b) {
			try {
				p(i.throw(b));
			} catch (_) {
				d(_);
			}
		}
		function p(b) {
			b.done ? f(b.value) : c(b.value).then(h, m);
		}
		p((i = i.apply(u, l || [])).next());
	});
};
const Nb = (u) => {
		let l;
		return (
			u ? (l = u) : typeof fetch > "u" ? (l = bp) : (l = fetch),
			(...r) => l(...r)
		);
	},
	Cb = () => (typeof Headers > "u" ? _p : Headers),
	Ub = (u, l, r) => {
		const i = Nb(r),
			c = Cb();
		return (f, d) =>
			Rb(void 0, void 0, void 0, function* () {
				var h;
				const m = (h = yield l()) !== null && h !== void 0 ? h : u;
				const p = new c(d == null ? void 0 : d.headers);
				return (
					p.has("apikey") || p.set("apikey", u),
					p.has("Authorization") || p.set("Authorization", `Bearer ${m}`),
					i(f, Object.assign(Object.assign({}, d), { headers: p }))
				);
			});
	};
var Mb = (u, l, r, i) => {
	function c(f) {
		return f instanceof r
			? f
			: new r((d) => {
					d(f);
				});
	}
	return new (r || (r = Promise))((f, d) => {
		function h(b) {
			try {
				p(i.next(b));
			} catch (_) {
				d(_);
			}
		}
		function m(b) {
			try {
				p(i.throw(b));
			} catch (_) {
				d(_);
			}
		}
		function p(b) {
			b.done ? f(b.value) : c(b.value).then(h, m);
		}
		p((i = i.apply(u, l || [])).next());
	});
};
function Db(u) {
	return u.endsWith("/") ? u : u + "/";
}
function zb(u, l) {
	var r, i;
	const { db: c, auth: f, realtime: d, global: h } = u,
		{ db: m, auth: p, realtime: b, global: _ } = l,
		w = {
			db: Object.assign(Object.assign({}, m), c),
			auth: Object.assign(Object.assign({}, p), f),
			realtime: Object.assign(Object.assign({}, b), d),
			global: Object.assign(Object.assign(Object.assign({}, _), h), {
				headers: Object.assign(
					Object.assign(
						{},
						(r = _ == null ? void 0 : _.headers) !== null && r !== void 0
							? r
							: {},
					),
					(i = h == null ? void 0 : h.headers) !== null && i !== void 0
						? i
						: {},
				),
			}),
			accessToken: () =>
				Mb(this, void 0, void 0, function* () {
					return "";
				}),
		};
	return (
		u.accessToken ? (w.accessToken = u.accessToken) : delete w.accessToken, w
	);
}
const Cp = "2.70.0",
	sl = 30 * 1e3,
	Xo = 3,
	Ro = Xo * sl,
	kb = "http://localhost:9999",
	qb = "supabase.auth.token",
	Lb = { "X-Client-Info": `gotrue-js/${Cp}` },
	Ko = "X-Supabase-Api-Version",
	Up = {
		"2024-01-01": {
			timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
			name: "2024-01-01",
		},
	},
	Bb = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,
	Hb = 6e5;
class nc extends Error {
	constructor(l, r, i) {
		super(l),
			(this.__isAuthError = !0),
			(this.name = "AuthError"),
			(this.status = r),
			(this.code = i);
	}
}
function ue(u) {
	return typeof u == "object" && u !== null && "__isAuthError" in u;
}
class Gb extends nc {
	constructor(l, r, i) {
		super(l, r, i),
			(this.name = "AuthApiError"),
			(this.status = r),
			(this.code = i);
	}
}
function Yb(u) {
	return ue(u) && u.name === "AuthApiError";
}
class Mp extends nc {
	constructor(l, r) {
		super(l), (this.name = "AuthUnknownError"), (this.originalError = r);
	}
}
class Gn extends nc {
	constructor(l, r, i, c) {
		super(l, i, c), (this.name = r), (this.status = i);
	}
}
class zn extends Gn {
	constructor() {
		super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
	}
}
function $b(u) {
	return ue(u) && u.name === "AuthSessionMissingError";
}
class Gr extends Gn {
	constructor() {
		super(
			"Auth session or user missing",
			"AuthInvalidTokenResponseError",
			500,
			void 0,
		);
	}
}
class Yr extends Gn {
	constructor(l) {
		super(l, "AuthInvalidCredentialsError", 400, void 0);
	}
}
class $r extends Gn {
	constructor(l, r = null) {
		super(l, "AuthImplicitGrantRedirectError", 500, void 0),
			(this.details = null),
			(this.details = r);
	}
	toJSON() {
		return {
			name: this.name,
			message: this.message,
			status: this.status,
			details: this.details,
		};
	}
}
function Qb(u) {
	return ue(u) && u.name === "AuthImplicitGrantRedirectError";
}
class Mv extends Gn {
	constructor(l, r = null) {
		super(l, "AuthPKCEGrantCodeExchangeError", 500, void 0),
			(this.details = null),
			(this.details = r);
	}
	toJSON() {
		return {
			name: this.name,
			message: this.message,
			status: this.status,
			details: this.details,
		};
	}
}
class Zo extends Gn {
	constructor(l, r) {
		super(l, "AuthRetryableFetchError", r, void 0);
	}
}
function No(u) {
	return ue(u) && u.name === "AuthRetryableFetchError";
}
class Dv extends Gn {
	constructor(l, r, i) {
		super(l, "AuthWeakPasswordError", r, "weak_password"), (this.reasons = i);
	}
}
class mi extends Gn {
	constructor(l) {
		super(l, "AuthInvalidJwtError", 400, "invalid_jwt");
	}
}
const Fr =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(
			"",
		),
	zv = ` 	
\r=`.split(""),
	Vb = (() => {
		const u = new Array(128);
		for (let l = 0; l < u.length; l += 1) u[l] = -1;
		for (let l = 0; l < zv.length; l += 1) u[zv[l].charCodeAt(0)] = -2;
		for (let l = 0; l < Fr.length; l += 1) u[Fr[l].charCodeAt(0)] = l;
		return u;
	})();
function kv(u, l, r) {
	if (u !== null)
		for (l.queue = (l.queue << 8) | u, l.queuedBits += 8; l.queuedBits >= 6; ) {
			const i = (l.queue >> (l.queuedBits - 6)) & 63;
			r(Fr[i]), (l.queuedBits -= 6);
		}
	else if (l.queuedBits > 0)
		for (
			l.queue = l.queue << (6 - l.queuedBits), l.queuedBits = 6;
			l.queuedBits >= 6;
		) {
			const i = (l.queue >> (l.queuedBits - 6)) & 63;
			r(Fr[i]), (l.queuedBits -= 6);
		}
}
function Dp(u, l, r) {
	const i = Vb[u];
	if (i > -1)
		for (l.queue = (l.queue << 6) | i, l.queuedBits += 6; l.queuedBits >= 8; )
			r((l.queue >> (l.queuedBits - 8)) & 255), (l.queuedBits -= 8);
	else {
		if (i === -2) return;
		throw new Error(`Invalid Base64-URL character "${String.fromCharCode(u)}"`);
	}
}
function qv(u) {
	const l = [],
		r = (d) => {
			l.push(String.fromCodePoint(d));
		},
		i = { utf8seq: 0, codepoint: 0 },
		c = { queue: 0, queuedBits: 0 },
		f = (d) => {
			Zb(d, i, r);
		};
	for (let d = 0; d < u.length; d += 1) Dp(u.charCodeAt(d), c, f);
	return l.join("");
}
function Xb(u, l) {
	if (u <= 127) {
		l(u);
		return;
	} else if (u <= 2047) {
		l(192 | (u >> 6)), l(128 | (u & 63));
		return;
	} else if (u <= 65535) {
		l(224 | (u >> 12)), l(128 | ((u >> 6) & 63)), l(128 | (u & 63));
		return;
	} else if (u <= 1114111) {
		l(240 | (u >> 18)),
			l(128 | ((u >> 12) & 63)),
			l(128 | ((u >> 6) & 63)),
			l(128 | (u & 63));
		return;
	}
	throw new Error(`Unrecognized Unicode codepoint: ${u.toString(16)}`);
}
function Kb(u, l) {
	for (let r = 0; r < u.length; r += 1) {
		let i = u.charCodeAt(r);
		if (i > 55295 && i <= 56319) {
			const c = ((i - 55296) * 1024) & 65535;
			(i = (((u.charCodeAt(r + 1) - 56320) & 65535) | c) + 65536), (r += 1);
		}
		Xb(i, l);
	}
}
function Zb(u, l, r) {
	if (l.utf8seq === 0) {
		if (u <= 127) {
			r(u);
			return;
		}
		for (let i = 1; i < 6; i += 1)
			if (((u >> (7 - i)) & 1) === 0) {
				l.utf8seq = i;
				break;
			}
		if (l.utf8seq === 2) l.codepoint = u & 31;
		else if (l.utf8seq === 3) l.codepoint = u & 15;
		else if (l.utf8seq === 4) l.codepoint = u & 7;
		else throw new Error("Invalid UTF-8 sequence");
		l.utf8seq -= 1;
	} else if (l.utf8seq > 0) {
		if (u <= 127) throw new Error("Invalid UTF-8 sequence");
		(l.codepoint = (l.codepoint << 6) | (u & 63)),
			(l.utf8seq -= 1),
			l.utf8seq === 0 && r(l.codepoint);
	}
}
function Jb(u) {
	const l = [],
		r = { queue: 0, queuedBits: 0 },
		i = (c) => {
			l.push(c);
		};
	for (let c = 0; c < u.length; c += 1) Dp(u.charCodeAt(c), r, i);
	return new Uint8Array(l);
}
function Pb(u) {
	const l = [];
	return Kb(u, (r) => l.push(r)), new Uint8Array(l);
}
function Wb(u) {
	const l = [],
		r = { queue: 0, queuedBits: 0 },
		i = (c) => {
			l.push(c);
		};
	return u.forEach((c) => kv(c, r, i)), kv(null, r, i), l.join("");
}
function Fb(u) {
	return Math.round(Date.now() / 1e3) + u;
}
function Ib() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (u) => {
		const l = (Math.random() * 16) | 0;
		return (u == "x" ? l : (l & 3) | 8).toString(16);
	});
}
const zt = () => typeof window < "u" && typeof document < "u",
	ra = { tested: !1, writable: !1 },
	yi = () => {
		if (!zt()) return !1;
		try {
			if (typeof globalThis.localStorage != "object") return !1;
		} catch {
			return !1;
		}
		if (ra.tested) return ra.writable;
		const u = `lswt-${Math.random()}${Math.random()}`;
		try {
			globalThis.localStorage.setItem(u, u),
				globalThis.localStorage.removeItem(u),
				(ra.tested = !0),
				(ra.writable = !0);
		} catch {
			(ra.tested = !0), (ra.writable = !1);
		}
		return ra.writable;
	};
function e_(u) {
	const l = {},
		r = new URL(u);
	if (r.hash && r.hash[0] === "#")
		try {
			new URLSearchParams(r.hash.substring(1)).forEach((c, f) => {
				l[f] = c;
			});
		} catch {}
	return (
		r.searchParams.forEach((i, c) => {
			l[c] = i;
		}),
		l
	);
}
const zp = (u) => {
		let l;
		return (
			u
				? (l = u)
				: typeof fetch > "u"
					? (l = (...r) =>
							wi(
								async () => {
									const { default: i } = await Promise.resolve().then(() => cl);
									return { default: i };
								},
								void 0,
							).then(({ default: i }) => i(...r)))
					: (l = fetch),
			(...r) => l(...r)
		);
	},
	t_ = (u) =>
		typeof u == "object" &&
		u !== null &&
		"status" in u &&
		"ok" in u &&
		"json" in u &&
		typeof u.json == "function",
	kp = async (u, l, r) => {
		await u.setItem(l, JSON.stringify(r));
	},
	Qr = async (u, l) => {
		const r = await u.getItem(l);
		if (!r) return null;
		try {
			return JSON.parse(r);
		} catch {
			return r;
		}
	},
	Vr = async (u, l) => {
		await u.removeItem(l);
	};
class as {
	constructor() {
		this.promise = new as.promiseConstructor((l, r) => {
			(this.resolve = l), (this.reject = r);
		});
	}
}
as.promiseConstructor = Promise;
function Co(u) {
	const l = u.split(".");
	if (l.length !== 3) throw new mi("Invalid JWT structure");
	for (let i = 0; i < l.length; i++)
		if (!Bb.test(l[i])) throw new mi("JWT not in base64url format");
	return {
		header: JSON.parse(qv(l[0])),
		payload: JSON.parse(qv(l[1])),
		signature: Jb(l[2]),
		raw: { header: l[0], payload: l[1] },
	};
}
async function n_(u) {
	return await new Promise((l) => {
		setTimeout(() => l(null), u);
	});
}
function a_(u, l) {
	return new Promise((i, c) => {
		(async () => {
			for (let f = 0; f < 1 / 0; f++)
				try {
					const d = await u(f);
					if (!l(f, null, d)) {
						i(d);
						return;
					}
				} catch (d) {
					if (!l(f, d)) {
						c(d);
						return;
					}
				}
		})();
	});
}
function l_(u) {
	return ("0" + u.toString(16)).substr(-2);
}
function i_() {
	const l = new Uint32Array(56);
	if (typeof crypto > "u") {
		const r =
				"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
			i = r.length;
		let c = "";
		for (let f = 0; f < 56; f++) c += r.charAt(Math.floor(Math.random() * i));
		return c;
	}
	return crypto.getRandomValues(l), Array.from(l, l_).join("");
}
async function r_(u) {
	const r = new TextEncoder().encode(u),
		i = await crypto.subtle.digest("SHA-256", r),
		c = new Uint8Array(i);
	return Array.from(c)
		.map((f) => String.fromCharCode(f))
		.join("");
}
async function s_(u) {
	if (
		!(
			typeof crypto < "u" &&
			typeof crypto.subtle < "u" &&
			typeof TextEncoder < "u"
		)
	)
		return (
			console.warn(
				"WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256.",
			),
			u
		);
	const r = await r_(u);
	return btoa(r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function al(u, l, r = !1) {
	const i = i_();
	let c = i;
	r && (c += "/PASSWORD_RECOVERY"), await kp(u, `${l}-code-verifier`, c);
	const f = await s_(i);
	return [f, i === f ? "plain" : "s256"];
}
const u_ = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function o_(u) {
	const l = u.headers.get(Ko);
	if (!l || !l.match(u_)) return null;
	try {
		return new Date(`${l}T00:00:00.0Z`);
	} catch {
		return null;
	}
}
function c_(u) {
	if (!u) throw new Error("Missing exp claim");
	const l = Math.floor(Date.now() / 1e3);
	if (u <= l) throw new Error("JWT has expired");
}
function f_(u) {
	switch (u) {
		case "RS256":
			return { name: "RSASSA-PKCS1-v1_5", hash: { name: "SHA-256" } };
		case "ES256":
			return { name: "ECDSA", namedCurve: "P-256", hash: { name: "SHA-256" } };
		default:
			throw new Error("Invalid alg claim");
	}
}
const d_ = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function ll(u) {
	if (!d_.test(u))
		throw new Error(
			"@supabase/auth-js: Expected parameter to be UUID but is not",
		);
}
var h_ = (u, l) => {
	var r = {};
	for (var i in u) Object.hasOwn(u, i) && l.indexOf(i) < 0 && (r[i] = u[i]);
	if (u != null && typeof Object.getOwnPropertySymbols == "function")
		for (var c = 0, i = Object.getOwnPropertySymbols(u); c < i.length; c++)
			l.indexOf(i[c]) < 0 &&
				Object.prototype.propertyIsEnumerable.call(u, i[c]) &&
				(r[i[c]] = u[i[c]]);
	return r;
};
const ua = (u) =>
		u.msg || u.message || u.error_description || u.error || JSON.stringify(u),
	v_ = [502, 503, 504];
async function Lv(u) {
	var l;
	if (!t_(u)) throw new Zo(ua(u), 0);
	if (v_.includes(u.status)) throw new Zo(ua(u), u.status);
	let r;
	try {
		r = await u.json();
	} catch (f) {
		throw new Mp(ua(f), f);
	}
	let i;
	const c = o_(u);
	if (
		(c &&
		c.getTime() >= Up["2024-01-01"].timestamp &&
		typeof r == "object" &&
		r &&
		typeof r.code == "string"
			? (i = r.code)
			: typeof r == "object" &&
				r &&
				typeof r.error_code == "string" &&
				(i = r.error_code),
		i)
	) {
		if (i === "weak_password")
			throw new Dv(
				ua(r),
				u.status,
				((l = r.weak_password) === null || l === void 0 ? void 0 : l.reasons) ||
					[],
			);
		if (i === "session_not_found") throw new zn();
	} else if (
		typeof r == "object" &&
		r &&
		typeof r.weak_password == "object" &&
		r.weak_password &&
		Array.isArray(r.weak_password.reasons) &&
		r.weak_password.reasons.length &&
		r.weak_password.reasons.reduce((f, d) => f && typeof d == "string", !0)
	)
		throw new Dv(ua(r), u.status, r.weak_password.reasons);
	throw new Gb(ua(r), u.status || 500, i);
}
const p_ = (u, l, r, i) => {
	const c = { method: u, headers: (l == null ? void 0 : l.headers) || {} };
	return u === "GET"
		? c
		: ((c.headers = Object.assign(
				{ "Content-Type": "application/json;charset=UTF-8" },
				l == null ? void 0 : l.headers,
			)),
			(c.body = JSON.stringify(i)),
			Object.assign(Object.assign({}, c), r));
};
async function pe(u, l, r, i) {
	var c;
	const f = Object.assign({}, i == null ? void 0 : i.headers);
	f[Ko] || (f[Ko] = Up["2024-01-01"].name),
		i != null && i.jwt && (f.Authorization = `Bearer ${i.jwt}`);
	const d =
		(c = i == null ? void 0 : i.query) !== null && c !== void 0 ? c : {};
	i != null && i.redirectTo && (d.redirect_to = i.redirectTo);
	const h = Object.keys(d).length
			? "?" + new URLSearchParams(d).toString()
			: "",
		m = await m_(
			u,
			l,
			r + h,
			{ headers: f, noResolveJson: i == null ? void 0 : i.noResolveJson },
			{},
			i == null ? void 0 : i.body,
		);
	return i != null && i.xform
		? i == null
			? void 0
			: i.xform(m)
		: { data: Object.assign({}, m), error: null };
}
async function m_(u, l, r, i, c, f) {
	const d = p_(l, i, c, f);
	let h;
	try {
		h = await u(r, Object.assign({}, d));
	} catch (m) {
		throw (console.error(m), new Zo(ua(m), 0));
	}
	if ((h.ok || (await Lv(h)), i != null && i.noResolveJson)) return h;
	try {
		return await h.json();
	} catch (m) {
		await Lv(m);
	}
}
function rn(u) {
	var l;
	let r = null;
	__(u) &&
		((r = Object.assign({}, u)),
		u.expires_at || (r.expires_at = Fb(u.expires_in)));
	const i = (l = u.user) !== null && l !== void 0 ? l : u;
	return { data: { session: r, user: i }, error: null };
}
function Bv(u) {
	const l = rn(u);
	return (
		!l.error &&
			u.weak_password &&
			typeof u.weak_password == "object" &&
			Array.isArray(u.weak_password.reasons) &&
			u.weak_password.reasons.length &&
			u.weak_password.message &&
			typeof u.weak_password.message == "string" &&
			u.weak_password.reasons.reduce((r, i) => r && typeof i == "string", !0) &&
			(l.data.weak_password = u.weak_password),
		l
	);
}
function qn(u) {
	var l;
	return {
		data: { user: (l = u.user) !== null && l !== void 0 ? l : u },
		error: null,
	};
}
function y_(u) {
	return { data: u, error: null };
}
function g_(u) {
	const {
			action_link: l,
			email_otp: r,
			hashed_token: i,
			redirect_to: c,
			verification_type: f,
		} = u,
		d = h_(u, [
			"action_link",
			"email_otp",
			"hashed_token",
			"redirect_to",
			"verification_type",
		]),
		h = {
			action_link: l,
			email_otp: r,
			hashed_token: i,
			redirect_to: c,
			verification_type: f,
		},
		m = Object.assign({}, d);
	return { data: { properties: h, user: m }, error: null };
}
function b_(u) {
	return u;
}
function __(u) {
	return u.access_token && u.refresh_token && u.expires_in;
}
const Uo = ["global", "local", "others"];
var x_ = (u, l) => {
	var r = {};
	for (var i in u) Object.hasOwn(u, i) && l.indexOf(i) < 0 && (r[i] = u[i]);
	if (u != null && typeof Object.getOwnPropertySymbols == "function")
		for (var c = 0, i = Object.getOwnPropertySymbols(u); c < i.length; c++)
			l.indexOf(i[c]) < 0 &&
				Object.prototype.propertyIsEnumerable.call(u, i[c]) &&
				(r[i[c]] = u[i[c]]);
	return r;
};
class S_ {
	constructor({ url: l = "", headers: r = {}, fetch: i }) {
		(this.url = l),
			(this.headers = r),
			(this.fetch = zp(i)),
			(this.mfa = {
				listFactors: this._listFactors.bind(this),
				deleteFactor: this._deleteFactor.bind(this),
			});
	}
	async signOut(l, r = Uo[0]) {
		if (Uo.indexOf(r) < 0)
			throw new Error(
				`@supabase/auth-js: Parameter scope must be one of ${Uo.join(", ")}`,
			);
		try {
			return (
				await pe(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
					headers: this.headers,
					jwt: l,
					noResolveJson: !0,
				}),
				{ data: null, error: null }
			);
		} catch (i) {
			if (ue(i)) return { data: null, error: i };
			throw i;
		}
	}
	async inviteUserByEmail(l, r = {}) {
		try {
			return await pe(this.fetch, "POST", `${this.url}/invite`, {
				body: { email: l, data: r.data },
				headers: this.headers,
				redirectTo: r.redirectTo,
				xform: qn,
			});
		} catch (i) {
			if (ue(i)) return { data: { user: null }, error: i };
			throw i;
		}
	}
	async generateLink(l) {
		try {
			const { options: r } = l,
				i = x_(l, ["options"]),
				c = Object.assign(Object.assign({}, i), r);
			return (
				"newEmail" in i &&
					((c.new_email = i == null ? void 0 : i.newEmail), delete c.newEmail),
				await pe(this.fetch, "POST", `${this.url}/admin/generate_link`, {
					body: c,
					headers: this.headers,
					xform: g_,
					redirectTo: r == null ? void 0 : r.redirectTo,
				})
			);
		} catch (r) {
			if (ue(r)) return { data: { properties: null, user: null }, error: r };
			throw r;
		}
	}
	async createUser(l) {
		try {
			return await pe(this.fetch, "POST", `${this.url}/admin/users`, {
				body: l,
				headers: this.headers,
				xform: qn,
			});
		} catch (r) {
			if (ue(r)) return { data: { user: null }, error: r };
			throw r;
		}
	}
	async listUsers(l) {
		var r, i, c, f, d, h, m;
		try {
			const p = { nextPage: null, lastPage: 0, total: 0 },
				b = await pe(this.fetch, "GET", `${this.url}/admin/users`, {
					headers: this.headers,
					noResolveJson: !0,
					query: {
						page:
							(i =
								(r = l == null ? void 0 : l.page) === null || r === void 0
									? void 0
									: r.toString()) !== null && i !== void 0
								? i
								: "",
						per_page:
							(f =
								(c = l == null ? void 0 : l.perPage) === null || c === void 0
									? void 0
									: c.toString()) !== null && f !== void 0
								? f
								: "",
					},
					xform: b_,
				});
			if (b.error) throw b.error;
			const _ = await b.json(),
				w =
					(d = b.headers.get("x-total-count")) !== null && d !== void 0 ? d : 0,
				j =
					(m =
						(h = b.headers.get("link")) === null || h === void 0
							? void 0
							: h.split(",")) !== null && m !== void 0
						? m
						: [];
			return (
				j.length > 0 &&
					(j.forEach((M) => {
						const B = parseInt(M.split(";")[0].split("=")[1].substring(0, 1)),
							D = JSON.parse(M.split(";")[1].split("=")[1]);
						p[`${D}Page`] = B;
					}),
					(p.total = parseInt(w))),
				{ data: Object.assign(Object.assign({}, _), p), error: null }
			);
		} catch (p) {
			if (ue(p)) return { data: { users: [] }, error: p };
			throw p;
		}
	}
	async getUserById(l) {
		ll(l);
		try {
			return await pe(this.fetch, "GET", `${this.url}/admin/users/${l}`, {
				headers: this.headers,
				xform: qn,
			});
		} catch (r) {
			if (ue(r)) return { data: { user: null }, error: r };
			throw r;
		}
	}
	async updateUserById(l, r) {
		ll(l);
		try {
			return await pe(this.fetch, "PUT", `${this.url}/admin/users/${l}`, {
				body: r,
				headers: this.headers,
				xform: qn,
			});
		} catch (i) {
			if (ue(i)) return { data: { user: null }, error: i };
			throw i;
		}
	}
	async deleteUser(l, r = !1) {
		ll(l);
		try {
			return await pe(this.fetch, "DELETE", `${this.url}/admin/users/${l}`, {
				headers: this.headers,
				body: { should_soft_delete: r },
				xform: qn,
			});
		} catch (i) {
			if (ue(i)) return { data: { user: null }, error: i };
			throw i;
		}
	}
	async _listFactors(l) {
		ll(l.userId);
		try {
			const { data: r, error: i } = await pe(
				this.fetch,
				"GET",
				`${this.url}/admin/users/${l.userId}/factors`,
				{
					headers: this.headers,
					xform: (c) => ({ data: { factors: c }, error: null }),
				},
			);
			return { data: r, error: i };
		} catch (r) {
			if (ue(r)) return { data: null, error: r };
			throw r;
		}
	}
	async _deleteFactor(l) {
		ll(l.userId), ll(l.id);
		try {
			return {
				data: await pe(
					this.fetch,
					"DELETE",
					`${this.url}/admin/users/${l.userId}/factors/${l.id}`,
					{ headers: this.headers },
				),
				error: null,
			};
		} catch (r) {
			if (ue(r)) return { data: null, error: r };
			throw r;
		}
	}
}
const w_ = {
	getItem: (u) => (yi() ? globalThis.localStorage.getItem(u) : null),
	setItem: (u, l) => {
		yi() && globalThis.localStorage.setItem(u, l);
	},
	removeItem: (u) => {
		yi() && globalThis.localStorage.removeItem(u);
	},
};
function Hv(u = {}) {
	return {
		getItem: (l) => u[l] || null,
		setItem: (l, r) => {
			u[l] = r;
		},
		removeItem: (l) => {
			delete u[l];
		},
	};
}
function E_() {
	if (typeof globalThis != "object")
		try {
			Object.defineProperty(Object.prototype, "__magic__", {
				get: function () {
					return this;
				},
				configurable: !0,
			}),
				(__magic__.globalThis = __magic__),
				delete Object.prototype.__magic__;
		} catch {
			typeof self < "u" && (self.globalThis = self);
		}
}
const il = {
	debug: !!(
		globalThis &&
		yi() &&
		globalThis.localStorage &&
		globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true"
	),
};
class qp extends Error {
	constructor(l) {
		super(l), (this.isAcquireTimeout = !0);
	}
}
class T_ extends qp {}
async function O_(u, l, r) {
	il.debug &&
		console.log("@supabase/gotrue-js: navigatorLock: acquire lock", u, l);
	const i = new globalThis.AbortController();
	return (
		l > 0 &&
			setTimeout(() => {
				i.abort(),
					il.debug &&
						console.log(
							"@supabase/gotrue-js: navigatorLock acquire timed out",
							u,
						);
			}, l),
		await Promise.resolve().then(() =>
			globalThis.navigator.locks.request(
				u,
				l === 0
					? { mode: "exclusive", ifAvailable: !0 }
					: { mode: "exclusive", signal: i.signal },
				async (c) => {
					if (c) {
						il.debug &&
							console.log(
								"@supabase/gotrue-js: navigatorLock: acquired",
								u,
								c.name,
							);
						try {
							return await r();
						} finally {
							il.debug &&
								console.log(
									"@supabase/gotrue-js: navigatorLock: released",
									u,
									c.name,
								);
						}
					} else {
						if (l === 0)
							throw (
								(il.debug &&
									console.log(
										"@supabase/gotrue-js: navigatorLock: not immediately available",
										u,
									),
								new T_(
									`Acquiring an exclusive Navigator LockManager lock "${u}" immediately failed`,
								))
							);
						if (il.debug)
							try {
								const f = await globalThis.navigator.locks.query();
								console.log(
									"@supabase/gotrue-js: Navigator LockManager state",
									JSON.stringify(f, null, "  "),
								);
							} catch (f) {
								console.warn(
									"@supabase/gotrue-js: Error when querying Navigator LockManager state",
									f,
								);
							}
						return (
							console.warn(
								"@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request",
							),
							await r()
						);
					}
				},
			),
		)
	);
}
E_();
const j_ = {
	url: kb,
	storageKey: qb,
	autoRefreshToken: !0,
	persistSession: !0,
	detectSessionInUrl: !0,
	headers: Lb,
	flowType: "implicit",
	debug: !1,
	hasCustomAuthorizationHeader: !1,
};
async function Gv(u, l, r) {
	return await r();
}
class _i {
	constructor(l) {
		var r, i;
		(this.memoryStorage = null),
			(this.stateChangeEmitters = new Map()),
			(this.autoRefreshTicker = null),
			(this.visibilityChangedCallback = null),
			(this.refreshingDeferred = null),
			(this.initializePromise = null),
			(this.detectSessionInUrl = !0),
			(this.hasCustomAuthorizationHeader = !1),
			(this.suppressGetSessionWarning = !1),
			(this.lockAcquired = !1),
			(this.pendingInLock = []),
			(this.broadcastChannel = null),
			(this.logger = console.log),
			(this.instanceID = _i.nextInstanceID),
			(_i.nextInstanceID += 1),
			this.instanceID > 0 &&
				zt() &&
				console.warn(
					"Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.",
				);
		const c = Object.assign(Object.assign({}, j_), l);
		if (
			((this.logDebugMessages = !!c.debug),
			typeof c.debug == "function" && (this.logger = c.debug),
			(this.persistSession = c.persistSession),
			(this.storageKey = c.storageKey),
			(this.autoRefreshToken = c.autoRefreshToken),
			(this.admin = new S_({ url: c.url, headers: c.headers, fetch: c.fetch })),
			(this.url = c.url),
			(this.headers = c.headers),
			(this.fetch = zp(c.fetch)),
			(this.lock = c.lock || Gv),
			(this.detectSessionInUrl = c.detectSessionInUrl),
			(this.flowType = c.flowType),
			(this.hasCustomAuthorizationHeader = c.hasCustomAuthorizationHeader),
			c.lock
				? (this.lock = c.lock)
				: zt() &&
						!(
							(r = globalThis == null ? void 0 : globalThis.navigator) ===
								null || r === void 0
						) &&
						r.locks
					? (this.lock = O_)
					: (this.lock = Gv),
			(this.jwks = { keys: [] }),
			(this.jwks_cached_at = Number.MIN_SAFE_INTEGER),
			(this.mfa = {
				verify: this._verify.bind(this),
				enroll: this._enroll.bind(this),
				unenroll: this._unenroll.bind(this),
				challenge: this._challenge.bind(this),
				listFactors: this._listFactors.bind(this),
				challengeAndVerify: this._challengeAndVerify.bind(this),
				getAuthenticatorAssuranceLevel:
					this._getAuthenticatorAssuranceLevel.bind(this),
			}),
			this.persistSession
				? c.storage
					? (this.storage = c.storage)
					: yi()
						? (this.storage = w_)
						: ((this.memoryStorage = {}),
							(this.storage = Hv(this.memoryStorage)))
				: ((this.memoryStorage = {}), (this.storage = Hv(this.memoryStorage))),
			zt() &&
				globalThis.BroadcastChannel &&
				this.persistSession &&
				this.storageKey)
		) {
			try {
				this.broadcastChannel = new globalThis.BroadcastChannel(
					this.storageKey,
				);
			} catch (f) {
				console.error(
					"Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
					f,
				);
			}
			(i = this.broadcastChannel) === null ||
				i === void 0 ||
				i.addEventListener("message", async (f) => {
					this._debug(
						"received broadcast notification from other tab or client",
						f,
					),
						await this._notifyAllSubscribers(f.data.event, f.data.session, !1);
				});
		}
		this.initialize();
	}
	_debug(...l) {
		return (
			this.logDebugMessages &&
				this.logger(
					`GoTrueClient@${this.instanceID} (${Cp}) ${new Date().toISOString()}`,
					...l,
				),
			this
		);
	}
	async initialize() {
		return this.initializePromise
			? await this.initializePromise
			: ((this.initializePromise = (async () =>
					await this._acquireLock(-1, async () => await this._initialize()))()),
				await this.initializePromise);
	}
	async _initialize() {
		var l;
		try {
			const r = e_(window.location.href);
			let i = "none";
			if (
				(this._isImplicitGrantCallback(r)
					? (i = "implicit")
					: (await this._isPKCECallback(r)) && (i = "pkce"),
				zt() && this.detectSessionInUrl && i !== "none")
			) {
				const { data: c, error: f } = await this._getSessionFromURL(r, i);
				if (f) {
					if (
						(this._debug(
							"#_initialize()",
							"error detecting session from URL",
							f,
						),
						Qb(f))
					) {
						const m =
							(l = f.details) === null || l === void 0 ? void 0 : l.code;
						if (
							m === "identity_already_exists" ||
							m === "identity_not_found" ||
							m === "single_identity_not_deletable"
						)
							return { error: f };
					}
					return await this._removeSession(), { error: f };
				}
				const { session: d, redirectType: h } = c;
				return (
					this._debug(
						"#_initialize()",
						"detected session in URL",
						d,
						"redirect type",
						h,
					),
					await this._saveSession(d),
					setTimeout(async () => {
						h === "recovery"
							? await this._notifyAllSubscribers("PASSWORD_RECOVERY", d)
							: await this._notifyAllSubscribers("SIGNED_IN", d);
					}, 0),
					{ error: null }
				);
			}
			return await this._recoverAndRefresh(), { error: null };
		} catch (r) {
			return ue(r)
				? { error: r }
				: { error: new Mp("Unexpected error during initialization", r) };
		} finally {
			await this._handleVisibilityChange(),
				this._debug("#_initialize()", "end");
		}
	}
	async signInAnonymously(l) {
		var r, i, c;
		try {
			const f = await pe(this.fetch, "POST", `${this.url}/signup`, {
					headers: this.headers,
					body: {
						data:
							(i =
								(r = l == null ? void 0 : l.options) === null || r === void 0
									? void 0
									: r.data) !== null && i !== void 0
								? i
								: {},
						gotrue_meta_security: {
							captcha_token:
								(c = l == null ? void 0 : l.options) === null || c === void 0
									? void 0
									: c.captchaToken,
						},
					},
					xform: rn,
				}),
				{ data: d, error: h } = f;
			if (h || !d) return { data: { user: null, session: null }, error: h };
			const m = d.session,
				p = d.user;
			return (
				d.session &&
					(await this._saveSession(d.session),
					await this._notifyAllSubscribers("SIGNED_IN", m)),
				{ data: { user: p, session: m }, error: null }
			);
		} catch (f) {
			if (ue(f)) return { data: { user: null, session: null }, error: f };
			throw f;
		}
	}
	async signUp(l) {
		var r, i, c;
		try {
			let f;
			if ("email" in l) {
				const { email: b, password: _, options: w } = l;
				let j = null,
					M = null;
				this.flowType === "pkce" &&
					([j, M] = await al(this.storage, this.storageKey)),
					(f = await pe(this.fetch, "POST", `${this.url}/signup`, {
						headers: this.headers,
						redirectTo: w == null ? void 0 : w.emailRedirectTo,
						body: {
							email: b,
							password: _,
							data:
								(r = w == null ? void 0 : w.data) !== null && r !== void 0
									? r
									: {},
							gotrue_meta_security: {
								captcha_token: w == null ? void 0 : w.captchaToken,
							},
							code_challenge: j,
							code_challenge_method: M,
						},
						xform: rn,
					}));
			} else if ("phone" in l) {
				const { phone: b, password: _, options: w } = l;
				f = await pe(this.fetch, "POST", `${this.url}/signup`, {
					headers: this.headers,
					body: {
						phone: b,
						password: _,
						data:
							(i = w == null ? void 0 : w.data) !== null && i !== void 0
								? i
								: {},
						channel:
							(c = w == null ? void 0 : w.channel) !== null && c !== void 0
								? c
								: "sms",
						gotrue_meta_security: {
							captcha_token: w == null ? void 0 : w.captchaToken,
						},
					},
					xform: rn,
				});
			} else
				throw new Yr(
					"You must provide either an email or phone number and a password",
				);
			const { data: d, error: h } = f;
			if (h || !d) return { data: { user: null, session: null }, error: h };
			const m = d.session,
				p = d.user;
			return (
				d.session &&
					(await this._saveSession(d.session),
					await this._notifyAllSubscribers("SIGNED_IN", m)),
				{ data: { user: p, session: m }, error: null }
			);
		} catch (f) {
			if (ue(f)) return { data: { user: null, session: null }, error: f };
			throw f;
		}
	}
	async signInWithPassword(l) {
		try {
			let r;
			if ("email" in l) {
				const { email: f, password: d, options: h } = l;
				r = await pe(
					this.fetch,
					"POST",
					`${this.url}/token?grant_type=password`,
					{
						headers: this.headers,
						body: {
							email: f,
							password: d,
							gotrue_meta_security: {
								captcha_token: h == null ? void 0 : h.captchaToken,
							},
						},
						xform: Bv,
					},
				);
			} else if ("phone" in l) {
				const { phone: f, password: d, options: h } = l;
				r = await pe(
					this.fetch,
					"POST",
					`${this.url}/token?grant_type=password`,
					{
						headers: this.headers,
						body: {
							phone: f,
							password: d,
							gotrue_meta_security: {
								captcha_token: h == null ? void 0 : h.captchaToken,
							},
						},
						xform: Bv,
					},
				);
			} else
				throw new Yr(
					"You must provide either an email or phone number and a password",
				);
			const { data: i, error: c } = r;
			return c
				? { data: { user: null, session: null }, error: c }
				: !i || !i.session || !i.user
					? { data: { user: null, session: null }, error: new Gr() }
					: (i.session &&
							(await this._saveSession(i.session),
							await this._notifyAllSubscribers("SIGNED_IN", i.session)),
						{
							data: Object.assign(
								{ user: i.user, session: i.session },
								i.weak_password ? { weakPassword: i.weak_password } : null,
							),
							error: c,
						});
		} catch (r) {
			if (ue(r)) return { data: { user: null, session: null }, error: r };
			throw r;
		}
	}
	async signInWithOAuth(l) {
		var r, i, c, f;
		return await this._handleProviderSignIn(l.provider, {
			redirectTo:
				(r = l.options) === null || r === void 0 ? void 0 : r.redirectTo,
			scopes: (i = l.options) === null || i === void 0 ? void 0 : i.scopes,
			queryParams:
				(c = l.options) === null || c === void 0 ? void 0 : c.queryParams,
			skipBrowserRedirect:
				(f = l.options) === null || f === void 0
					? void 0
					: f.skipBrowserRedirect,
		});
	}
	async exchangeCodeForSession(l) {
		return (
			await this.initializePromise,
			this._acquireLock(-1, async () => this._exchangeCodeForSession(l))
		);
	}
	async signInWithWeb3(l) {
		const { chain: r } = l;
		if (r === "solana") return await this.signInWithSolana(l);
		throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`);
	}
	async signInWithSolana(l) {
		var r, i, c, f, d, h, m, p, b, _, w, j;
		let M, B;
		if ("message" in l) (M = l.message), (B = l.signature);
		else {
			const { chain: D, wallet: K, statement: ee, options: G } = l;
			let P;
			if (zt())
				if (typeof K == "object") P = K;
				else {
					const se = window;
					if (
						"solana" in se &&
						typeof se.solana == "object" &&
						(("signIn" in se.solana && typeof se.solana.signIn == "function") ||
							("signMessage" in se.solana &&
								typeof se.solana.signMessage == "function"))
					)
						P = se.solana;
					else
						throw new Error(
							"@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.",
						);
				}
			else {
				if (typeof K != "object" || !(G != null && G.url))
					throw new Error(
						"@supabase/auth-js: Both wallet and url must be specified in non-browser environments.",
					);
				P = K;
			}
			const Z = new URL(
				(r = G == null ? void 0 : G.url) !== null && r !== void 0
					? r
					: window.location.href,
			);
			if ("signIn" in P && P.signIn) {
				const se = await P.signIn(
					Object.assign(
						Object.assign(
							Object.assign(
								{ issuedAt: new Date().toISOString() },
								G == null ? void 0 : G.signInWithSolana,
							),
							{ version: "1", domain: Z.host, uri: Z.href },
						),
						ee ? { statement: ee } : null,
					),
				);
				let ge;
				if (Array.isArray(se) && se[0] && typeof se[0] == "object") ge = se[0];
				else if (
					se &&
					typeof se == "object" &&
					"signedMessage" in se &&
					"signature" in se
				)
					ge = se;
				else
					throw new Error(
						"@supabase/auth-js: Wallet method signIn() returned unrecognized value",
					);
				if (
					"signedMessage" in ge &&
					"signature" in ge &&
					(typeof ge.signedMessage == "string" ||
						ge.signedMessage instanceof Uint8Array) &&
					ge.signature instanceof Uint8Array
				)
					(M =
						typeof ge.signedMessage == "string"
							? ge.signedMessage
							: new TextDecoder().decode(ge.signedMessage)),
						(B = ge.signature);
				else
					throw new Error(
						"@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields",
					);
			} else {
				if (
					!("signMessage" in P) ||
					typeof P.signMessage != "function" ||
					!("publicKey" in P) ||
					typeof P != "object" ||
					!P.publicKey ||
					!("toBase58" in P.publicKey) ||
					typeof P.publicKey.toBase58 != "function"
				)
					throw new Error(
						"@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API",
					);
				M = [
					`${Z.host} wants you to sign in with your Solana account:`,
					P.publicKey.toBase58(),
					...(ee ? ["", ee, ""] : [""]),
					"Version: 1",
					`URI: ${Z.href}`,
					`Issued At: ${(c = (i = G == null ? void 0 : G.signInWithSolana) === null || i === void 0 ? void 0 : i.issuedAt) !== null && c !== void 0 ? c : new Date().toISOString()}`,
					...(!(
						(f = G == null ? void 0 : G.signInWithSolana) === null ||
						f === void 0
					) && f.notBefore
						? [`Not Before: ${G.signInWithSolana.notBefore}`]
						: []),
					...(!(
						(d = G == null ? void 0 : G.signInWithSolana) === null ||
						d === void 0
					) && d.expirationTime
						? [`Expiration Time: ${G.signInWithSolana.expirationTime}`]
						: []),
					...(!(
						(h = G == null ? void 0 : G.signInWithSolana) === null ||
						h === void 0
					) && h.chainId
						? [`Chain ID: ${G.signInWithSolana.chainId}`]
						: []),
					...(!(
						(m = G == null ? void 0 : G.signInWithSolana) === null ||
						m === void 0
					) && m.nonce
						? [`Nonce: ${G.signInWithSolana.nonce}`]
						: []),
					...(!(
						(p = G == null ? void 0 : G.signInWithSolana) === null ||
						p === void 0
					) && p.requestId
						? [`Request ID: ${G.signInWithSolana.requestId}`]
						: []),
					...(!(
						(_ =
							(b = G == null ? void 0 : G.signInWithSolana) === null ||
							b === void 0
								? void 0
								: b.resources) === null || _ === void 0
					) && _.length
						? [
								"Resources",
								...G.signInWithSolana.resources.map((ge) => `- ${ge}`),
							]
						: []),
				].join(`
`);
				const se = await P.signMessage(new TextEncoder().encode(M), "utf8");
				if (!se || !(se instanceof Uint8Array))
					throw new Error(
						"@supabase/auth-js: Wallet signMessage() API returned an recognized value",
					);
				B = se;
			}
		}
		try {
			const { data: D, error: K } = await pe(
				this.fetch,
				"POST",
				`${this.url}/token?grant_type=web3`,
				{
					headers: this.headers,
					body: Object.assign(
						{ chain: "solana", message: M, signature: Wb(B) },
						!((w = l.options) === null || w === void 0) && w.captchaToken
							? {
									gotrue_meta_security: {
										captcha_token:
											(j = l.options) === null || j === void 0
												? void 0
												: j.captchaToken,
									},
								}
							: null,
					),
					xform: rn,
				},
			);
			if (K) throw K;
			return !D || !D.session || !D.user
				? { data: { user: null, session: null }, error: new Gr() }
				: (D.session &&
						(await this._saveSession(D.session),
						await this._notifyAllSubscribers("SIGNED_IN", D.session)),
					{ data: Object.assign({}, D), error: K });
		} catch (D) {
			if (ue(D)) return { data: { user: null, session: null }, error: D };
			throw D;
		}
	}
	async _exchangeCodeForSession(l) {
		const r = await Qr(this.storage, `${this.storageKey}-code-verifier`),
			[i, c] = (r ?? "").split("/");
		try {
			const { data: f, error: d } = await pe(
				this.fetch,
				"POST",
				`${this.url}/token?grant_type=pkce`,
				{
					headers: this.headers,
					body: { auth_code: l, code_verifier: i },
					xform: rn,
				},
			);
			if ((await Vr(this.storage, `${this.storageKey}-code-verifier`), d))
				throw d;
			return !f || !f.session || !f.user
				? {
						data: { user: null, session: null, redirectType: null },
						error: new Gr(),
					}
				: (f.session &&
						(await this._saveSession(f.session),
						await this._notifyAllSubscribers("SIGNED_IN", f.session)),
					{
						data: Object.assign(Object.assign({}, f), {
							redirectType: c ?? null,
						}),
						error: d,
					});
		} catch (f) {
			if (ue(f))
				return {
					data: { user: null, session: null, redirectType: null },
					error: f,
				};
			throw f;
		}
	}
	async signInWithIdToken(l) {
		try {
			const {
					options: r,
					provider: i,
					token: c,
					access_token: f,
					nonce: d,
				} = l,
				h = await pe(
					this.fetch,
					"POST",
					`${this.url}/token?grant_type=id_token`,
					{
						headers: this.headers,
						body: {
							provider: i,
							id_token: c,
							access_token: f,
							nonce: d,
							gotrue_meta_security: {
								captcha_token: r == null ? void 0 : r.captchaToken,
							},
						},
						xform: rn,
					},
				),
				{ data: m, error: p } = h;
			return p
				? { data: { user: null, session: null }, error: p }
				: !m || !m.session || !m.user
					? { data: { user: null, session: null }, error: new Gr() }
					: (m.session &&
							(await this._saveSession(m.session),
							await this._notifyAllSubscribers("SIGNED_IN", m.session)),
						{ data: m, error: p });
		} catch (r) {
			if (ue(r)) return { data: { user: null, session: null }, error: r };
			throw r;
		}
	}
	async signInWithOtp(l) {
		var r, i, c, f, d;
		try {
			if ("email" in l) {
				const { email: h, options: m } = l;
				let p = null,
					b = null;
				this.flowType === "pkce" &&
					([p, b] = await al(this.storage, this.storageKey));
				const { error: _ } = await pe(this.fetch, "POST", `${this.url}/otp`, {
					headers: this.headers,
					body: {
						email: h,
						data:
							(r = m == null ? void 0 : m.data) !== null && r !== void 0
								? r
								: {},
						create_user:
							(i = m == null ? void 0 : m.shouldCreateUser) !== null &&
							i !== void 0
								? i
								: !0,
						gotrue_meta_security: {
							captcha_token: m == null ? void 0 : m.captchaToken,
						},
						code_challenge: p,
						code_challenge_method: b,
					},
					redirectTo: m == null ? void 0 : m.emailRedirectTo,
				});
				return { data: { user: null, session: null }, error: _ };
			}
			if ("phone" in l) {
				const { phone: h, options: m } = l,
					{ data: p, error: b } = await pe(
						this.fetch,
						"POST",
						`${this.url}/otp`,
						{
							headers: this.headers,
							body: {
								phone: h,
								data:
									(c = m == null ? void 0 : m.data) !== null && c !== void 0
										? c
										: {},
								create_user:
									(f = m == null ? void 0 : m.shouldCreateUser) !== null &&
									f !== void 0
										? f
										: !0,
								gotrue_meta_security: {
									captcha_token: m == null ? void 0 : m.captchaToken,
								},
								channel:
									(d = m == null ? void 0 : m.channel) !== null && d !== void 0
										? d
										: "sms",
							},
						},
					);
				return {
					data: {
						user: null,
						session: null,
						messageId: p == null ? void 0 : p.message_id,
					},
					error: b,
				};
			}
			throw new Yr("You must provide either an email or phone number.");
		} catch (h) {
			if (ue(h)) return { data: { user: null, session: null }, error: h };
			throw h;
		}
	}
	async verifyOtp(l) {
		var r, i;
		try {
			let c, f;
			"options" in l &&
				((c = (r = l.options) === null || r === void 0 ? void 0 : r.redirectTo),
				(f =
					(i = l.options) === null || i === void 0 ? void 0 : i.captchaToken));
			const { data: d, error: h } = await pe(
				this.fetch,
				"POST",
				`${this.url}/verify`,
				{
					headers: this.headers,
					body: Object.assign(Object.assign({}, l), {
						gotrue_meta_security: { captcha_token: f },
					}),
					redirectTo: c,
					xform: rn,
				},
			);
			if (h) throw h;
			if (!d) throw new Error("An error occurred on token verification.");
			const m = d.session,
				p = d.user;
			return (
				m != null &&
					m.access_token &&
					(await this._saveSession(m),
					await this._notifyAllSubscribers(
						l.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN",
						m,
					)),
				{ data: { user: p, session: m }, error: null }
			);
		} catch (c) {
			if (ue(c)) return { data: { user: null, session: null }, error: c };
			throw c;
		}
	}
	async signInWithSSO(l) {
		var r, i, c;
		try {
			let f = null,
				d = null;
			return (
				this.flowType === "pkce" &&
					([f, d] = await al(this.storage, this.storageKey)),
				await pe(this.fetch, "POST", `${this.url}/sso`, {
					body: Object.assign(
						Object.assign(
							Object.assign(
								Object.assign(
									Object.assign(
										{},
										"providerId" in l ? { provider_id: l.providerId } : null,
									),
									"domain" in l ? { domain: l.domain } : null,
								),
								{
									redirect_to:
										(i =
											(r = l.options) === null || r === void 0
												? void 0
												: r.redirectTo) !== null && i !== void 0
											? i
											: void 0,
								},
							),
							!(
								(c = l == null ? void 0 : l.options) === null || c === void 0
							) && c.captchaToken
								? {
										gotrue_meta_security: {
											captcha_token: l.options.captchaToken,
										},
									}
								: null,
						),
						{
							skip_http_redirect: !0,
							code_challenge: f,
							code_challenge_method: d,
						},
					),
					headers: this.headers,
					xform: y_,
				})
			);
		} catch (f) {
			if (ue(f)) return { data: null, error: f };
			throw f;
		}
	}
	async reauthenticate() {
		return (
			await this.initializePromise,
			await this._acquireLock(-1, async () => await this._reauthenticate())
		);
	}
	async _reauthenticate() {
		try {
			return await this._useSession(async (l) => {
				const {
					data: { session: r },
					error: i,
				} = l;
				if (i) throw i;
				if (!r) throw new zn();
				const { error: c } = await pe(
					this.fetch,
					"GET",
					`${this.url}/reauthenticate`,
					{ headers: this.headers, jwt: r.access_token },
				);
				return { data: { user: null, session: null }, error: c };
			});
		} catch (l) {
			if (ue(l)) return { data: { user: null, session: null }, error: l };
			throw l;
		}
	}
	async resend(l) {
		try {
			const r = `${this.url}/resend`;
			if ("email" in l) {
				const { email: i, type: c, options: f } = l,
					{ error: d } = await pe(this.fetch, "POST", r, {
						headers: this.headers,
						body: {
							email: i,
							type: c,
							gotrue_meta_security: {
								captcha_token: f == null ? void 0 : f.captchaToken,
							},
						},
						redirectTo: f == null ? void 0 : f.emailRedirectTo,
					});
				return { data: { user: null, session: null }, error: d };
			} else if ("phone" in l) {
				const { phone: i, type: c, options: f } = l,
					{ data: d, error: h } = await pe(this.fetch, "POST", r, {
						headers: this.headers,
						body: {
							phone: i,
							type: c,
							gotrue_meta_security: {
								captcha_token: f == null ? void 0 : f.captchaToken,
							},
						},
					});
				return {
					data: {
						user: null,
						session: null,
						messageId: d == null ? void 0 : d.message_id,
					},
					error: h,
				};
			}
			throw new Yr(
				"You must provide either an email or phone number and a type",
			);
		} catch (r) {
			if (ue(r)) return { data: { user: null, session: null }, error: r };
			throw r;
		}
	}
	async getSession() {
		return (
			await this.initializePromise,
			await this._acquireLock(-1, async () => this._useSession(async (r) => r))
		);
	}
	async _acquireLock(l, r) {
		this._debug("#_acquireLock", "begin", l);
		try {
			if (this.lockAcquired) {
				const i = this.pendingInLock.length
						? this.pendingInLock[this.pendingInLock.length - 1]
						: Promise.resolve(),
					c = (async () => (await i, await r()))();
				return (
					this.pendingInLock.push(
						(async () => {
							try {
								await c;
							} catch {}
						})(),
					),
					c
				);
			}
			return await this.lock(`lock:${this.storageKey}`, l, async () => {
				this._debug(
					"#_acquireLock",
					"lock acquired for storage key",
					this.storageKey,
				);
				try {
					this.lockAcquired = !0;
					const i = r();
					for (
						this.pendingInLock.push(
							(async () => {
								try {
									await i;
								} catch {}
							})(),
						),
							await i;
						this.pendingInLock.length;
					) {
						const c = [...this.pendingInLock];
						await Promise.all(c), this.pendingInLock.splice(0, c.length);
					}
					return await i;
				} finally {
					this._debug(
						"#_acquireLock",
						"lock released for storage key",
						this.storageKey,
					),
						(this.lockAcquired = !1);
				}
			});
		} finally {
			this._debug("#_acquireLock", "end");
		}
	}
	async _useSession(l) {
		this._debug("#_useSession", "begin");
		try {
			const r = await this.__loadSession();
			return await l(r);
		} finally {
			this._debug("#_useSession", "end");
		}
	}
	async __loadSession() {
		this._debug("#__loadSession()", "begin"),
			this.lockAcquired ||
				this._debug(
					"#__loadSession()",
					"used outside of an acquired lock!",
					new Error().stack,
				);
		try {
			let l = null;
			const r = await Qr(this.storage, this.storageKey);
			if (
				(this._debug("#getSession()", "session from storage", r),
				r !== null &&
					(this._isValidSession(r)
						? (l = r)
						: (this._debug(
								"#getSession()",
								"session from storage is not valid",
							),
							await this._removeSession())),
				!l)
			)
				return { data: { session: null }, error: null };
			const i = l.expires_at ? l.expires_at * 1e3 - Date.now() < Ro : !1;
			if (
				(this._debug(
					"#__loadSession()",
					`session has${i ? "" : " not"} expired`,
					"expires_at",
					l.expires_at,
				),
				!i)
			) {
				if (this.storage.isServer) {
					let d = this.suppressGetSessionWarning;
					l = new Proxy(l, {
						get: (m, p, b) => (
							!d &&
								p === "user" &&
								(console.warn(
									"Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server.",
								),
								(d = !0),
								(this.suppressGetSessionWarning = !0)),
							Reflect.get(m, p, b)
						),
					});
				}
				return { data: { session: l }, error: null };
			}
			const { session: c, error: f } = await this._callRefreshToken(
				l.refresh_token,
			);
			return f
				? { data: { session: null }, error: f }
				: { data: { session: c }, error: null };
		} finally {
			this._debug("#__loadSession()", "end");
		}
	}
	async getUser(l) {
		return l
			? await this._getUser(l)
			: (await this.initializePromise,
				await this._acquireLock(-1, async () => await this._getUser()));
	}
	async _getUser(l) {
		try {
			return l
				? await pe(this.fetch, "GET", `${this.url}/user`, {
						headers: this.headers,
						jwt: l,
						xform: qn,
					})
				: await this._useSession(async (r) => {
						var i, c, f;
						const { data: d, error: h } = r;
						if (h) throw h;
						return !(
							!((i = d.session) === null || i === void 0) && i.access_token
						) && !this.hasCustomAuthorizationHeader
							? { data: { user: null }, error: new zn() }
							: await pe(this.fetch, "GET", `${this.url}/user`, {
									headers: this.headers,
									jwt:
										(f =
											(c = d.session) === null || c === void 0
												? void 0
												: c.access_token) !== null && f !== void 0
											? f
											: void 0,
									xform: qn,
								});
					});
		} catch (r) {
			if (ue(r))
				return (
					$b(r) &&
						(await this._removeSession(),
						await Vr(this.storage, `${this.storageKey}-code-verifier`)),
					{ data: { user: null }, error: r }
				);
			throw r;
		}
	}
	async updateUser(l, r = {}) {
		return (
			await this.initializePromise,
			await this._acquireLock(-1, async () => await this._updateUser(l, r))
		);
	}
	async _updateUser(l, r = {}) {
		try {
			return await this._useSession(async (i) => {
				const { data: c, error: f } = i;
				if (f) throw f;
				if (!c.session) throw new zn();
				const d = c.session;
				let h = null,
					m = null;
				this.flowType === "pkce" &&
					l.email != null &&
					([h, m] = await al(this.storage, this.storageKey));
				const { data: p, error: b } = await pe(
					this.fetch,
					"PUT",
					`${this.url}/user`,
					{
						headers: this.headers,
						redirectTo: r == null ? void 0 : r.emailRedirectTo,
						body: Object.assign(Object.assign({}, l), {
							code_challenge: h,
							code_challenge_method: m,
						}),
						jwt: d.access_token,
						xform: qn,
					},
				);
				if (b) throw b;
				return (
					(d.user = p.user),
					await this._saveSession(d),
					await this._notifyAllSubscribers("USER_UPDATED", d),
					{ data: { user: d.user }, error: null }
				);
			});
		} catch (i) {
			if (ue(i)) return { data: { user: null }, error: i };
			throw i;
		}
	}
	async setSession(l) {
		return (
			await this.initializePromise,
			await this._acquireLock(-1, async () => await this._setSession(l))
		);
	}
	async _setSession(l) {
		try {
			if (!l.access_token || !l.refresh_token) throw new zn();
			const r = Date.now() / 1e3;
			let i = r,
				c = !0,
				f = null;
			const { payload: d } = Co(l.access_token);
			if ((d.exp && ((i = d.exp), (c = i <= r)), c)) {
				const { session: h, error: m } = await this._callRefreshToken(
					l.refresh_token,
				);
				if (m) return { data: { user: null, session: null }, error: m };
				if (!h) return { data: { user: null, session: null }, error: null };
				f = h;
			} else {
				const { data: h, error: m } = await this._getUser(l.access_token);
				if (m) throw m;
				(f = {
					access_token: l.access_token,
					refresh_token: l.refresh_token,
					user: h.user,
					token_type: "bearer",
					expires_in: i - r,
					expires_at: i,
				}),
					await this._saveSession(f),
					await this._notifyAllSubscribers("SIGNED_IN", f);
			}
			return { data: { user: f.user, session: f }, error: null };
		} catch (r) {
			if (ue(r)) return { data: { session: null, user: null }, error: r };
			throw r;
		}
	}
	async refreshSession(l) {
		return (
			await this.initializePromise,
			await this._acquireLock(-1, async () => await this._refreshSession(l))
		);
	}
	async _refreshSession(l) {
		try {
			return await this._useSession(async (r) => {
				var i;
				if (!l) {
					const { data: d, error: h } = r;
					if (h) throw h;
					l = (i = d.session) !== null && i !== void 0 ? i : void 0;
				}
				if (!(l != null && l.refresh_token)) throw new zn();
				const { session: c, error: f } = await this._callRefreshToken(
					l.refresh_token,
				);
				return f
					? { data: { user: null, session: null }, error: f }
					: c
						? { data: { user: c.user, session: c }, error: null }
						: { data: { user: null, session: null }, error: null };
			});
		} catch (r) {
			if (ue(r)) return { data: { user: null, session: null }, error: r };
			throw r;
		}
	}
	async _getSessionFromURL(l, r) {
		try {
			if (!zt()) throw new $r("No browser detected.");
			if (l.error || l.error_description || l.error_code)
				throw new $r(
					l.error_description ||
						"Error in URL with unspecified error_description",
					{
						error: l.error || "unspecified_error",
						code: l.error_code || "unspecified_code",
					},
				);
			switch (r) {
				case "implicit":
					if (this.flowType === "pkce")
						throw new Mv("Not a valid PKCE flow url.");
					break;
				case "pkce":
					if (this.flowType === "implicit")
						throw new $r("Not a valid implicit grant flow url.");
					break;
				default:
			}
			if (r === "pkce") {
				if (
					(this._debug("#_initialize()", "begin", "is PKCE flow", !0), !l.code)
				)
					throw new Mv("No code detected.");
				const { data: ee, error: G } = await this._exchangeCodeForSession(
					l.code,
				);
				if (G) throw G;
				const P = new URL(window.location.href);
				return (
					P.searchParams.delete("code"),
					window.history.replaceState(window.history.state, "", P.toString()),
					{ data: { session: ee.session, redirectType: null }, error: null }
				);
			}
			const {
				provider_token: i,
				provider_refresh_token: c,
				access_token: f,
				refresh_token: d,
				expires_in: h,
				expires_at: m,
				token_type: p,
			} = l;
			if (!f || !h || !d || !p) throw new $r("No session defined in URL");
			const b = Math.round(Date.now() / 1e3),
				_ = parseInt(h);
			let w = b + _;
			m && (w = parseInt(m));
			const j = w - b;
			j * 1e3 <= sl &&
				console.warn(
					`@supabase/gotrue-js: Session as retrieved from URL expires in ${j}s, should have been closer to ${_}s`,
				);
			const M = w - _;
			b - M >= 120
				? console.warn(
						"@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
						M,
						w,
						b,
					)
				: b - M < 0 &&
					console.warn(
						"@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",
						M,
						w,
						b,
					);
			const { data: B, error: D } = await this._getUser(f);
			if (D) throw D;
			const K = {
				provider_token: i,
				provider_refresh_token: c,
				access_token: f,
				expires_in: _,
				expires_at: w,
				refresh_token: d,
				token_type: p,
				user: B.user,
			};
			return (
				(window.location.hash = ""),
				this._debug("#_getSessionFromURL()", "clearing window.location.hash"),
				{ data: { session: K, redirectType: l.type }, error: null }
			);
		} catch (i) {
			if (ue(i))
				return { data: { session: null, redirectType: null }, error: i };
			throw i;
		}
	}
	_isImplicitGrantCallback(l) {
		return !!(l.access_token || l.error_description);
	}
	async _isPKCECallback(l) {
		const r = await Qr(this.storage, `${this.storageKey}-code-verifier`);
		return !!(l.code && r);
	}
	async signOut(l = { scope: "global" }) {
		return (
			await this.initializePromise,
			await this._acquireLock(-1, async () => await this._signOut(l))
		);
	}
	async _signOut({ scope: l } = { scope: "global" }) {
		return await this._useSession(async (r) => {
			var i;
			const { data: c, error: f } = r;
			if (f) return { error: f };
			const d =
				(i = c.session) === null || i === void 0 ? void 0 : i.access_token;
			if (d) {
				const { error: h } = await this.admin.signOut(d, l);
				if (
					h &&
					!(Yb(h) && (h.status === 404 || h.status === 401 || h.status === 403))
				)
					return { error: h };
			}
			return (
				l !== "others" &&
					(await this._removeSession(),
					await Vr(this.storage, `${this.storageKey}-code-verifier`)),
				{ error: null }
			);
		});
	}
	onAuthStateChange(l) {
		const r = Ib(),
			i = {
				id: r,
				callback: l,
				unsubscribe: () => {
					this._debug(
						"#unsubscribe()",
						"state change callback with id removed",
						r,
					),
						this.stateChangeEmitters.delete(r);
				},
			};
		return (
			this._debug("#onAuthStateChange()", "registered callback with id", r),
			this.stateChangeEmitters.set(r, i),
			(async () => (
				await this.initializePromise,
				await this._acquireLock(-1, async () => {
					this._emitInitialSession(r);
				})
			))(),
			{ data: { subscription: i } }
		);
	}
	async _emitInitialSession(l) {
		return await this._useSession(async (r) => {
			var i, c;
			try {
				const {
					data: { session: f },
					error: d,
				} = r;
				if (d) throw d;
				await ((i = this.stateChangeEmitters.get(l)) === null || i === void 0
					? void 0
					: i.callback("INITIAL_SESSION", f)),
					this._debug("INITIAL_SESSION", "callback id", l, "session", f);
			} catch (f) {
				await ((c = this.stateChangeEmitters.get(l)) === null || c === void 0
					? void 0
					: c.callback("INITIAL_SESSION", null)),
					this._debug("INITIAL_SESSION", "callback id", l, "error", f),
					console.error(f);
			}
		});
	}
	async resetPasswordForEmail(l, r = {}) {
		let i = null,
			c = null;
		this.flowType === "pkce" &&
			([i, c] = await al(this.storage, this.storageKey, !0));
		try {
			return await pe(this.fetch, "POST", `${this.url}/recover`, {
				body: {
					email: l,
					code_challenge: i,
					code_challenge_method: c,
					gotrue_meta_security: { captcha_token: r.captchaToken },
				},
				headers: this.headers,
				redirectTo: r.redirectTo,
			});
		} catch (f) {
			if (ue(f)) return { data: null, error: f };
			throw f;
		}
	}
	async getUserIdentities() {
		var l;
		try {
			const { data: r, error: i } = await this.getUser();
			if (i) throw i;
			return {
				data: {
					identities: (l = r.user.identities) !== null && l !== void 0 ? l : [],
				},
				error: null,
			};
		} catch (r) {
			if (ue(r)) return { data: null, error: r };
			throw r;
		}
	}
	async linkIdentity(l) {
		var r;
		try {
			const { data: i, error: c } = await this._useSession(async (f) => {
				var d, h, m, p, b;
				const { data: _, error: w } = f;
				if (w) throw w;
				const j = await this._getUrlForProvider(
					`${this.url}/user/identities/authorize`,
					l.provider,
					{
						redirectTo:
							(d = l.options) === null || d === void 0 ? void 0 : d.redirectTo,
						scopes:
							(h = l.options) === null || h === void 0 ? void 0 : h.scopes,
						queryParams:
							(m = l.options) === null || m === void 0 ? void 0 : m.queryParams,
						skipBrowserRedirect: !0,
					},
				);
				return await pe(this.fetch, "GET", j, {
					headers: this.headers,
					jwt:
						(b =
							(p = _.session) === null || p === void 0
								? void 0
								: p.access_token) !== null && b !== void 0
							? b
							: void 0,
				});
			});
			if (c) throw c;
			return (
				zt() &&
					!(
						!((r = l.options) === null || r === void 0) && r.skipBrowserRedirect
					) &&
					window.location.assign(i == null ? void 0 : i.url),
				{
					data: { provider: l.provider, url: i == null ? void 0 : i.url },
					error: null,
				}
			);
		} catch (i) {
			if (ue(i)) return { data: { provider: l.provider, url: null }, error: i };
			throw i;
		}
	}
	async unlinkIdentity(l) {
		try {
			return await this._useSession(async (r) => {
				var i, c;
				const { data: f, error: d } = r;
				if (d) throw d;
				return await pe(
					this.fetch,
					"DELETE",
					`${this.url}/user/identities/${l.identity_id}`,
					{
						headers: this.headers,
						jwt:
							(c =
								(i = f.session) === null || i === void 0
									? void 0
									: i.access_token) !== null && c !== void 0
								? c
								: void 0,
					},
				);
			});
		} catch (r) {
			if (ue(r)) return { data: null, error: r };
			throw r;
		}
	}
	async _refreshAccessToken(l) {
		const r = `#_refreshAccessToken(${l.substring(0, 5)}...)`;
		this._debug(r, "begin");
		try {
			const i = Date.now();
			return await a_(
				async (c) => (
					c > 0 && (await n_(200 * 2 ** (c - 1))),
					this._debug(r, "refreshing attempt", c),
					await pe(
						this.fetch,
						"POST",
						`${this.url}/token?grant_type=refresh_token`,
						{ body: { refresh_token: l }, headers: this.headers, xform: rn },
					)
				),
				(c, f) => {
					const d = 200 * 2 ** c;
					return f && No(f) && Date.now() + d - i < sl;
				},
			);
		} catch (i) {
			if ((this._debug(r, "error", i), ue(i)))
				return { data: { session: null, user: null }, error: i };
			throw i;
		} finally {
			this._debug(r, "end");
		}
	}
	_isValidSession(l) {
		return (
			typeof l == "object" &&
			l !== null &&
			"access_token" in l &&
			"refresh_token" in l &&
			"expires_at" in l
		);
	}
	async _handleProviderSignIn(l, r) {
		const i = await this._getUrlForProvider(`${this.url}/authorize`, l, {
			redirectTo: r.redirectTo,
			scopes: r.scopes,
			queryParams: r.queryParams,
		});
		return (
			this._debug(
				"#_handleProviderSignIn()",
				"provider",
				l,
				"options",
				r,
				"url",
				i,
			),
			zt() && !r.skipBrowserRedirect && window.location.assign(i),
			{ data: { provider: l, url: i }, error: null }
		);
	}
	async _recoverAndRefresh() {
		var l;
		const r = "#_recoverAndRefresh()";
		this._debug(r, "begin");
		try {
			const i = await Qr(this.storage, this.storageKey);
			if (
				(this._debug(r, "session from storage", i), !this._isValidSession(i))
			) {
				this._debug(r, "session is not valid"),
					i !== null && (await this._removeSession());
				return;
			}
			const c =
				((l = i.expires_at) !== null && l !== void 0 ? l : 1 / 0) * 1e3 -
					Date.now() <
				Ro;
			if (
				(this._debug(
					r,
					`session has${c ? "" : " not"} expired with margin of ${Ro}s`,
				),
				c)
			) {
				if (this.autoRefreshToken && i.refresh_token) {
					const { error: f } = await this._callRefreshToken(i.refresh_token);
					f &&
						(console.error(f),
						No(f) ||
							(this._debug(
								r,
								"refresh failed with a non-retryable error, removing the session",
								f,
							),
							await this._removeSession()));
				}
			} else await this._notifyAllSubscribers("SIGNED_IN", i);
		} catch (i) {
			this._debug(r, "error", i), console.error(i);
			return;
		} finally {
			this._debug(r, "end");
		}
	}
	async _callRefreshToken(l) {
		var r, i;
		if (!l) throw new zn();
		if (this.refreshingDeferred) return this.refreshingDeferred.promise;
		const c = `#_callRefreshToken(${l.substring(0, 5)}...)`;
		this._debug(c, "begin");
		try {
			this.refreshingDeferred = new as();
			const { data: f, error: d } = await this._refreshAccessToken(l);
			if (d) throw d;
			if (!f.session) throw new zn();
			await this._saveSession(f.session),
				await this._notifyAllSubscribers("TOKEN_REFRESHED", f.session);
			const h = { session: f.session, error: null };
			return this.refreshingDeferred.resolve(h), h;
		} catch (f) {
			if ((this._debug(c, "error", f), ue(f))) {
				const d = { session: null, error: f };
				return (
					No(f) || (await this._removeSession()),
					(r = this.refreshingDeferred) === null ||
						r === void 0 ||
						r.resolve(d),
					d
				);
			}
			throw (
				((i = this.refreshingDeferred) === null || i === void 0 || i.reject(f),
				f)
			);
		} finally {
			(this.refreshingDeferred = null), this._debug(c, "end");
		}
	}
	async _notifyAllSubscribers(l, r, i = !0) {
		const c = `#_notifyAllSubscribers(${l})`;
		this._debug(c, "begin", r, `broadcast = ${i}`);
		try {
			this.broadcastChannel &&
				i &&
				this.broadcastChannel.postMessage({ event: l, session: r });
			const f = [],
				d = Array.from(this.stateChangeEmitters.values()).map(async (h) => {
					try {
						await h.callback(l, r);
					} catch (m) {
						f.push(m);
					}
				});
			if ((await Promise.all(d), f.length > 0)) {
				for (let h = 0; h < f.length; h += 1) console.error(f[h]);
				throw f[0];
			}
		} finally {
			this._debug(c, "end");
		}
	}
	async _saveSession(l) {
		this._debug("#_saveSession()", l),
			(this.suppressGetSessionWarning = !0),
			await kp(this.storage, this.storageKey, l);
	}
	async _removeSession() {
		this._debug("#_removeSession()"),
			await Vr(this.storage, this.storageKey),
			await this._notifyAllSubscribers("SIGNED_OUT", null);
	}
	_removeVisibilityChangedCallback() {
		this._debug("#_removeVisibilityChangedCallback()");
		const l = this.visibilityChangedCallback;
		this.visibilityChangedCallback = null;
		try {
			l &&
				zt() &&
				window != null &&
				window.removeEventListener &&
				window.removeEventListener("visibilitychange", l);
		} catch (r) {
			console.error("removing visibilitychange callback failed", r);
		}
	}
	async _startAutoRefresh() {
		await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
		const l = setInterval(() => this._autoRefreshTokenTick(), sl);
		(this.autoRefreshTicker = l),
			l && typeof l == "object" && typeof l.unref == "function"
				? l.unref()
				: typeof Deno < "u" &&
					typeof Deno.unrefTimer == "function" &&
					Deno.unrefTimer(l),
			setTimeout(async () => {
				await this.initializePromise, await this._autoRefreshTokenTick();
			}, 0);
	}
	async _stopAutoRefresh() {
		this._debug("#_stopAutoRefresh()");
		const l = this.autoRefreshTicker;
		(this.autoRefreshTicker = null), l && clearInterval(l);
	}
	async startAutoRefresh() {
		this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
	}
	async stopAutoRefresh() {
		this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
	}
	async _autoRefreshTokenTick() {
		this._debug("#_autoRefreshTokenTick()", "begin");
		try {
			await this._acquireLock(0, async () => {
				try {
					const l = Date.now();
					try {
						return await this._useSession(async (r) => {
							const {
								data: { session: i },
							} = r;
							if (!i || !i.refresh_token || !i.expires_at) {
								this._debug("#_autoRefreshTokenTick()", "no session");
								return;
							}
							const c = Math.floor((i.expires_at * 1e3 - l) / sl);
							this._debug(
								"#_autoRefreshTokenTick()",
								`access token expires in ${c} ticks, a tick lasts ${sl}ms, refresh threshold is ${Xo} ticks`,
							),
								c <= Xo && (await this._callRefreshToken(i.refresh_token));
						});
					} catch (r) {
						console.error(
							"Auto refresh tick failed with error. This is likely a transient error.",
							r,
						);
					}
				} finally {
					this._debug("#_autoRefreshTokenTick()", "end");
				}
			});
		} catch (l) {
			if (l.isAcquireTimeout || l instanceof qp)
				this._debug("auto refresh token tick lock not available");
			else throw l;
		}
	}
	async _handleVisibilityChange() {
		if (
			(this._debug("#_handleVisibilityChange()"),
			!zt() || !(window != null && window.addEventListener))
		)
			return this.autoRefreshToken && this.startAutoRefresh(), !1;
		try {
			(this.visibilityChangedCallback = async () =>
				await this._onVisibilityChanged(!1)),
				window == null ||
					window.addEventListener(
						"visibilitychange",
						this.visibilityChangedCallback,
					),
				await this._onVisibilityChanged(!0);
		} catch (l) {
			console.error("_handleVisibilityChange", l);
		}
	}
	async _onVisibilityChanged(l) {
		const r = `#_onVisibilityChanged(${l})`;
		this._debug(r, "visibilityState", document.visibilityState),
			document.visibilityState === "visible"
				? (this.autoRefreshToken && this._startAutoRefresh(),
					l ||
						(await this.initializePromise,
						await this._acquireLock(-1, async () => {
							if (document.visibilityState !== "visible") {
								this._debug(
									r,
									"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting",
								);
								return;
							}
							await this._recoverAndRefresh();
						})))
				: document.visibilityState === "hidden" &&
					this.autoRefreshToken &&
					this._stopAutoRefresh();
	}
	async _getUrlForProvider(l, r, i) {
		const c = [`provider=${encodeURIComponent(r)}`];
		if (
			(i != null &&
				i.redirectTo &&
				c.push(`redirect_to=${encodeURIComponent(i.redirectTo)}`),
			i != null && i.scopes && c.push(`scopes=${encodeURIComponent(i.scopes)}`),
			this.flowType === "pkce")
		) {
			const [f, d] = await al(this.storage, this.storageKey),
				h = new URLSearchParams({
					code_challenge: `${encodeURIComponent(f)}`,
					code_challenge_method: `${encodeURIComponent(d)}`,
				});
			c.push(h.toString());
		}
		if (i != null && i.queryParams) {
			const f = new URLSearchParams(i.queryParams);
			c.push(f.toString());
		}
		return (
			i != null &&
				i.skipBrowserRedirect &&
				c.push(`skip_http_redirect=${i.skipBrowserRedirect}`),
			`${l}?${c.join("&")}`
		);
	}
	async _unenroll(l) {
		try {
			return await this._useSession(async (r) => {
				var i;
				const { data: c, error: f } = r;
				return f
					? { data: null, error: f }
					: await pe(
							this.fetch,
							"DELETE",
							`${this.url}/factors/${l.factorId}`,
							{
								headers: this.headers,
								jwt:
									(i = c == null ? void 0 : c.session) === null || i === void 0
										? void 0
										: i.access_token,
							},
						);
			});
		} catch (r) {
			if (ue(r)) return { data: null, error: r };
			throw r;
		}
	}
	async _enroll(l) {
		try {
			return await this._useSession(async (r) => {
				var i, c;
				const { data: f, error: d } = r;
				if (d) return { data: null, error: d };
				const h = Object.assign(
						{ friendly_name: l.friendlyName, factor_type: l.factorType },
						l.factorType === "phone"
							? { phone: l.phone }
							: { issuer: l.issuer },
					),
					{ data: m, error: p } = await pe(
						this.fetch,
						"POST",
						`${this.url}/factors`,
						{
							body: h,
							headers: this.headers,
							jwt:
								(i = f == null ? void 0 : f.session) === null || i === void 0
									? void 0
									: i.access_token,
						},
					);
				return p
					? { data: null, error: p }
					: (l.factorType === "totp" &&
							!((c = m == null ? void 0 : m.totp) === null || c === void 0) &&
							c.qr_code &&
							(m.totp.qr_code = `data:image/svg+xml;utf-8,${m.totp.qr_code}`),
						{ data: m, error: null });
			});
		} catch (r) {
			if (ue(r)) return { data: null, error: r };
			throw r;
		}
	}
	async _verify(l) {
		return this._acquireLock(-1, async () => {
			try {
				return await this._useSession(async (r) => {
					var i;
					const { data: c, error: f } = r;
					if (f) return { data: null, error: f };
					const { data: d, error: h } = await pe(
						this.fetch,
						"POST",
						`${this.url}/factors/${l.factorId}/verify`,
						{
							body: { code: l.code, challenge_id: l.challengeId },
							headers: this.headers,
							jwt:
								(i = c == null ? void 0 : c.session) === null || i === void 0
									? void 0
									: i.access_token,
						},
					);
					return h
						? { data: null, error: h }
						: (await this._saveSession(
								Object.assign(
									{ expires_at: Math.round(Date.now() / 1e3) + d.expires_in },
									d,
								),
							),
							await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", d),
							{ data: d, error: h });
				});
			} catch (r) {
				if (ue(r)) return { data: null, error: r };
				throw r;
			}
		});
	}
	async _challenge(l) {
		return this._acquireLock(-1, async () => {
			try {
				return await this._useSession(async (r) => {
					var i;
					const { data: c, error: f } = r;
					return f
						? { data: null, error: f }
						: await pe(
								this.fetch,
								"POST",
								`${this.url}/factors/${l.factorId}/challenge`,
								{
									body: { channel: l.channel },
									headers: this.headers,
									jwt:
										(i = c == null ? void 0 : c.session) === null ||
										i === void 0
											? void 0
											: i.access_token,
								},
							);
				});
			} catch (r) {
				if (ue(r)) return { data: null, error: r };
				throw r;
			}
		});
	}
	async _challengeAndVerify(l) {
		const { data: r, error: i } = await this._challenge({
			factorId: l.factorId,
		});
		return i
			? { data: null, error: i }
			: await this._verify({
					factorId: l.factorId,
					challengeId: r.id,
					code: l.code,
				});
	}
	async _listFactors() {
		const {
			data: { user: l },
			error: r,
		} = await this.getUser();
		if (r) return { data: null, error: r };
		const i = (l == null ? void 0 : l.factors) || [],
			c = i.filter((d) => d.factor_type === "totp" && d.status === "verified"),
			f = i.filter((d) => d.factor_type === "phone" && d.status === "verified");
		return { data: { all: i, totp: c, phone: f }, error: null };
	}
	async _getAuthenticatorAssuranceLevel() {
		return this._acquireLock(
			-1,
			async () =>
				await this._useSession(async (l) => {
					var r, i;
					const {
						data: { session: c },
						error: f,
					} = l;
					if (f) return { data: null, error: f };
					if (!c)
						return {
							data: {
								currentLevel: null,
								nextLevel: null,
								currentAuthenticationMethods: [],
							},
							error: null,
						};
					const { payload: d } = Co(c.access_token);
					let h = null;
					d.aal && (h = d.aal);
					let m = h;
					((i =
						(r = c.user.factors) === null || r === void 0
							? void 0
							: r.filter((_) => _.status === "verified")) !== null &&
					i !== void 0
						? i
						: []
					).length > 0 && (m = "aal2");
					const b = d.amr || [];
					return {
						data: {
							currentLevel: h,
							nextLevel: m,
							currentAuthenticationMethods: b,
						},
						error: null,
					};
				}),
		);
	}
	async fetchJwk(l, r = { keys: [] }) {
		let i = r.keys.find((d) => d.kid === l);
		if (
			i ||
			((i = this.jwks.keys.find((d) => d.kid === l)),
			i && this.jwks_cached_at + Hb > Date.now())
		)
			return i;
		const { data: c, error: f } = await pe(
			this.fetch,
			"GET",
			`${this.url}/.well-known/jwks.json`,
			{ headers: this.headers },
		);
		if (f) throw f;
		if (!c.keys || c.keys.length === 0) throw new mi("JWKS is empty");
		if (
			((this.jwks = c),
			(this.jwks_cached_at = Date.now()),
			(i = c.keys.find((d) => d.kid === l)),
			!i)
		)
			throw new mi("No matching signing key found in JWKS");
		return i;
	}
	async getClaims(l, r = { keys: [] }) {
		try {
			let i = l;
			if (!i) {
				const { data: j, error: M } = await this.getSession();
				if (M || !j.session) return { data: null, error: M };
				i = j.session.access_token;
			}
			const {
				header: c,
				payload: f,
				signature: d,
				raw: { header: h, payload: m },
			} = Co(i);
			if (
				(c_(f.exp),
				!c.kid ||
					c.alg === "HS256" ||
					!("crypto" in globalThis && "subtle" in globalThis.crypto))
			) {
				const { error: j } = await this.getUser(i);
				if (j) throw j;
				return { data: { claims: f, header: c, signature: d }, error: null };
			}
			const p = f_(c.alg),
				b = await this.fetchJwk(c.kid, r),
				_ = await crypto.subtle.importKey("jwk", b, p, !0, ["verify"]);
			if (!(await crypto.subtle.verify(p, _, d, Pb(`${h}.${m}`))))
				throw new mi("Invalid JWT signature");
			return { data: { claims: f, header: c, signature: d }, error: null };
		} catch (i) {
			if (ue(i)) return { data: null, error: i };
			throw i;
		}
	}
}
_i.nextInstanceID = 0;
const A_ = _i;
class R_ extends A_ {
	constructor(l) {
		super(l);
	}
}
var N_ = (u, l, r, i) => {
	function c(f) {
		return f instanceof r
			? f
			: new r((d) => {
					d(f);
				});
	}
	return new (r || (r = Promise))((f, d) => {
		function h(b) {
			try {
				p(i.next(b));
			} catch (_) {
				d(_);
			}
		}
		function m(b) {
			try {
				p(i.throw(b));
			} catch (_) {
				d(_);
			}
		}
		function p(b) {
			b.done ? f(b.value) : c(b.value).then(h, m);
		}
		p((i = i.apply(u, l || [])).next());
	});
};
class C_ {
	constructor(l, r, i) {
		var c, f, d;
		if (((this.supabaseUrl = l), (this.supabaseKey = r), !l))
			throw new Error("supabaseUrl is required.");
		if (!r) throw new Error("supabaseKey is required.");
		const h = Db(l),
			m = new URL(h);
		(this.realtimeUrl = new URL("realtime/v1", m)),
			(this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace(
				"http",
				"ws",
			)),
			(this.authUrl = new URL("auth/v1", m)),
			(this.storageUrl = new URL("storage/v1", m)),
			(this.functionsUrl = new URL("functions/v1", m));
		const p = `sb-${m.hostname.split(".")[0]}-auth-token`,
			b = {
				db: Ob,
				realtime: Ab,
				auth: Object.assign(Object.assign({}, jb), { storageKey: p }),
				global: Tb,
			},
			_ = zb(i ?? {}, b);
		(this.storageKey =
			(c = _.auth.storageKey) !== null && c !== void 0 ? c : ""),
			(this.headers = (f = _.global.headers) !== null && f !== void 0 ? f : {}),
			_.accessToken
				? ((this.accessToken = _.accessToken),
					(this.auth = new Proxy(
						{},
						{
							get: (w, j) => {
								throw new Error(
									`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(j)} is not possible`,
								);
							},
						},
					)))
				: (this.auth = this._initSupabaseAuthClient(
						(d = _.auth) !== null && d !== void 0 ? d : {},
						this.headers,
						_.global.fetch,
					)),
			(this.fetch = Ub(r, this._getAccessToken.bind(this), _.global.fetch)),
			(this.realtime = this._initRealtimeClient(
				Object.assign(
					{
						headers: this.headers,
						accessToken: this._getAccessToken.bind(this),
					},
					_.realtime,
				),
			)),
			(this.rest = new Z0(new URL("rest/v1", m).href, {
				headers: this.headers,
				schema: _.db.schema,
				fetch: this.fetch,
			})),
			_.accessToken || this._listenForAuthEvents();
	}
	get functions() {
		return new k0(this.functionsUrl.href, {
			headers: this.headers,
			customFetch: this.fetch,
		});
	}
	get storage() {
		return new Sb(this.storageUrl.href, this.headers, this.fetch);
	}
	from(l) {
		return this.rest.from(l);
	}
	schema(l) {
		return this.rest.schema(l);
	}
	rpc(l, r = {}, i = {}) {
		return this.rest.rpc(l, r, i);
	}
	channel(l, r = { config: {} }) {
		return this.realtime.channel(l, r);
	}
	getChannels() {
		return this.realtime.getChannels();
	}
	removeChannel(l) {
		return this.realtime.removeChannel(l);
	}
	removeAllChannels() {
		return this.realtime.removeAllChannels();
	}
	_getAccessToken() {
		var l, r;
		return N_(this, void 0, void 0, function* () {
			if (this.accessToken) return yield this.accessToken();
			const { data: i } = yield this.auth.getSession();
			return (r =
				(l = i.session) === null || l === void 0 ? void 0 : l.access_token) !==
				null && r !== void 0
				? r
				: null;
		});
	}
	_initSupabaseAuthClient(
		{
			autoRefreshToken: l,
			persistSession: r,
			detectSessionInUrl: i,
			storage: c,
			storageKey: f,
			flowType: d,
			lock: h,
			debug: m,
		},
		p,
		b,
	) {
		const _ = {
			Authorization: `Bearer ${this.supabaseKey}`,
			apikey: `${this.supabaseKey}`,
		};
		return new R_({
			url: this.authUrl.href,
			headers: Object.assign(Object.assign({}, _), p),
			storageKey: f,
			autoRefreshToken: l,
			persistSession: r,
			detectSessionInUrl: i,
			storage: c,
			flowType: d,
			lock: h,
			debug: m,
			fetch: b,
			hasCustomAuthorizationHeader: "Authorization" in this.headers,
		});
	}
	_initRealtimeClient(l) {
		return new ob(
			this.realtimeUrl.href,
			Object.assign(Object.assign({}, l), {
				params: Object.assign(
					{ apikey: this.supabaseKey },
					l == null ? void 0 : l.params,
				),
			}),
		);
	}
	_listenForAuthEvents() {
		return this.auth.onAuthStateChange((r, i) => {
			this._handleTokenChanged(
				r,
				"CLIENT",
				i == null ? void 0 : i.access_token,
			);
		});
	}
	_handleTokenChanged(l, r, i) {
		(l === "TOKEN_REFRESHED" || l === "SIGNED_IN") &&
		this.changedAccessToken !== i
			? (this.changedAccessToken = i)
			: l === "SIGNED_OUT" &&
				(this.realtime.setAuth(),
				r == "STORAGE" && this.auth.signOut(),
				(this.changedAccessToken = void 0));
	}
}
const U_ = (u, l, r) => new C_(u, l, r),
	M_ = "https://iozuzywvrncfejmlnsfu.supabase.co",
	D_ =
		"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvenV6eXd2cm5jZmVqbWxuc2Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5MjMyNjYsImV4cCI6MjA2NjQ5OTI2Nn0.kKMRJLBdsbLbQihm9oC4BO8_xMbw8pjsn0R-k-OO8Rk",
	Ir = U_(M_, D_);
function z_() {
	return y.jsx(y.Fragment, {
		children: y.jsxs("div", {
			className: "ml-[300px] p-6",
			children: [
				y.jsx("div", {
					className: "flex items-center justify-between",
					children: y.jsxs("div", {
						children: [
							y.jsx("h1", {
								className: "text-2xl font-bold",
								children: "Affiliate Program",
							}),
							y.jsx("p", {
								children:
									"Earn 10% commission on confirmed topup payments from your referrals",
							}),
						],
					}),
				}),
				y.jsxs("div", {
					className: "flex flex-row gap-4 justify-center",
					children: [
						y.jsx("div", {
							className:
								"bg-white p-6 rounded-lg shadow-lg mt-6 h-[100px] w-[250px] border border-black",
						}),
						y.jsx("div", {
							className:
								"bg-white p-6 rounded-lg shadow-lg mt-6 h-[100px] w-[250px] border border-black",
						}),
						y.jsx("div", {
							className:
								"bg-white p-6 rounded-lg shadow-lg mt-6 h-[100px] w-[250px] border border-black",
						}),
						y.jsx("div", {
							className:
								"bg-white p-6 rounded-lg shadow-lg mt-6 h-[100px] w-[250px] border border-black",
						}),
					],
				}),
				y.jsx("div", {
					children: y.jsx("div", {
						className:
							"bg-white p-6 rounded-lg shadow-lg mt-6 h-screen flex justify-center items-center",
						children: y.jsx("h1", {
							className: "text-6xl font-bold text-center",
							children: "Halaman Affiliate",
						}),
					}),
				}),
			],
		}),
	});
}
function k_() {
	return y.jsx(y.Fragment, {
		children: y.jsxs("div", {
			className: "ml-[300px] p-6",
			children: [
				y.jsxs("div", {
					className: "flex items-center justify-between",
					children: [
						y.jsxs("div", {
							children: [
								y.jsx("h1", {
									className: "text-2xl font-bold",
									children: "AI Models",
								}),
								y.jsx("p", {
									children: "Access powerful AI models and manage your usage",
								}),
							],
						}),
						y.jsxs("div", {
							className: "flex gap-4",
							children: [
								y.jsx("button", {
									type: "button",
									className: "bg-gray-300 text-black px-4 py-2 rounded-lg mr-2",
									children: "Add APi kwy",
								}),
								y.jsx("button", {
									type: "button",
									className: "bg-blue-500 text-white px-4 py-2 rounded-lg",
									children: "Add credit",
								}),
							],
						}),
					],
				}),
				y.jsx("div", {
					className: "bg-white p-6 rounded-lg shadow-lg mt-6",
					children: y.jsxs("div", {
						className: "flex gap-4 items-center",
						children: [
							y.jsx("div", { className: "w-10 h-10 rounded-full bg-blue-500" }),
							y.jsxs("div", {
								children: [
									y.jsx("h2", {
										className: "text-sm font-bold",
										children: "AI balance",
									}),
									y.jsx("p", {
										className: "text-2xl font-bold",
										children: "Rp 20.000",
									}),
								],
							}),
						],
					}),
				}),
				y.jsx("div", {
					children: y.jsx("div", {
						className:
							"bg-white p-6 rounded-lg shadow-lg mt-6 h-screen flex justify-center items-center",
						children: y.jsx("h1", {
							className: "text-6xl font-bold text-center",
							children: "Halaman AI",
						}),
					}),
				}),
			],
		}),
	});
}
function q_() {
	const [u, l] = X.useState(0),
		[r, i] = X.useState(1),
		[c, f] = X.useState(0);
	return (
		X.useEffect(() => {
			fetch("https://logam-mulia-api.vercel.app/prices/anekalogam")
				.then((d) => d.json())
				.then((d) => {
					const h = d.data[0].buy;
					l(h);
				});
		}, []),
		X.useEffect(() => {
			f(u * r);
		}, [u, r]),
		y.jsx(y.Fragment, {
			children: y.jsx("div", {
				className: "ml-[300px] p-6",
				children: y.jsxs("div", {
					className: "flex flex-col gap-8 justify-between",
					children: [
						y.jsxs("div", {
							className: "flex flex-row justify-between",
							children: [
								y.jsxs("div", {
									children: [
										y.jsx("h1", {
											className: "text-2xl font-bold",
											children: "Beli Emas",
										}),
										y.jsx("p", { children: "cek harga emas termurah" }),
									],
								}),
								y.jsxs("div", {
									className: "flex flex-col",
									children: [
										y.jsx("h1", { children: "harga per gram" }),
										y.jsxs("p", { children: ["Rp ", u.toLocaleString()] }),
									],
								}),
							],
						}),
						y.jsxs("div", {
							className: "flex flex-col gap-4",
							children: [
								y.jsx("input", {
									className: "border border-gray-300 rounded-lg p-2 w-full",
									type: "number",
									value: r,
									onChange: (d) => i(Number(d.target.value)),
								}),
								y.jsx("div", {
									className: "flex flex-row justify-between mt-4",
									children: y.jsxs("div", {
										className: "flex flex-col",
										children: [
											y.jsx("h1", { children: "Harga total" }),
											y.jsxs("p", { children: ["Rp. ", c.toLocaleString()] }),
										],
									}),
								}),
							],
						}),
					],
				}),
			}),
		})
	);
}
var Xr = { exports: {} },
	Dn = {},
	Mo = { exports: {} },
	Do,
	Yv;
function L_() {
	if (Yv) return Do;
	Yv = 1;
	var u = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
	return (Do = u), Do;
}
var zo, $v;
function B_() {
	if ($v) return zo;
	$v = 1;
	var u = L_();
	function l() {}
	function r() {}
	return (
		(r.resetWarningCache = l),
		(zo = () => {
			function i(d, h, m, p, b, _) {
				if (_ !== u) {
					var w = new Error(
						"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
					);
					throw ((w.name = "Invariant Violation"), w);
				}
			}
			i.isRequired = i;
			function c() {
				return i;
			}
			var f = {
				array: i,
				bigint: i,
				bool: i,
				func: i,
				number: i,
				object: i,
				string: i,
				symbol: i,
				any: i,
				arrayOf: c,
				element: i,
				elementType: i,
				instanceOf: c,
				node: i,
				objectOf: c,
				oneOf: c,
				oneOfType: c,
				shape: c,
				exact: c,
				checkPropTypes: r,
				resetWarningCache: l,
			};
			return (f.PropTypes = f), f;
		}),
		zo
	);
}
var Qv;
function Lp() {
	return Qv || ((Qv = 1), (Mo.exports = B_()())), Mo.exports;
}
var Kr = { exports: {} },
	Rt = {},
	Zr = { exports: {} },
	Vv;
function Bp() {
	return (
		Vv ||
			((Vv = 1),
			((u, l) => {
				Object.defineProperty(l, "__esModule", { value: !0 }),
					(l.default = b); /*!
				 * Adapted from jQuery UI core
				 *
				 * http://jqueryui.com
				 *
				 * Copyright 2014 jQuery Foundation and other contributors
				 * Released under the MIT license.
				 * http://jquery.org/license
				 *
				 * http://api.jqueryui.com/category/ui-core/
				 */
				var r = "none",
					i = "contents",
					c = /^(input|select|textarea|button|object|iframe)$/;
				function f(_, w) {
					return (
						w.getPropertyValue("overflow") !== "visible" ||
						(_.scrollWidth <= 0 && _.scrollHeight <= 0)
					);
				}
				function d(_) {
					var w = _.offsetWidth <= 0 && _.offsetHeight <= 0;
					if (w && !_.innerHTML) return !0;
					try {
						var j = window.getComputedStyle(_),
							M = j.getPropertyValue("display");
						return w ? M !== i && f(_, j) : M === r;
					} catch {
						return console.warn("Failed to inspect element style"), !1;
					}
				}
				function h(_) {
					for (
						var w = _, j = _.getRootNode && _.getRootNode();
						w && w !== document.body;
					) {
						if ((j && w === j && (w = j.host.parentNode), d(w))) return !1;
						w = w.parentNode;
					}
					return !0;
				}
				function m(_, w) {
					var j = _.nodeName.toLowerCase(),
						M = (c.test(j) && !_.disabled) || (j === "a" && _.href) || w;
					return M && h(_);
				}
				function p(_) {
					var w = _.getAttribute("tabindex");
					w === null && (w = void 0);
					var j = isNaN(w);
					return (j || w >= 0) && m(_, !j);
				}
				function b(_) {
					var w = [].slice
						.call(_.querySelectorAll("*"), 0)
						.reduce(
							(j, M) => j.concat(M.shadowRoot ? b(M.shadowRoot) : [M]),
							[],
						);
					return w.filter(p);
				}
				u.exports = l.default;
			})(Zr, Zr.exports)),
		Zr.exports
	);
}
var Xv;
function H_() {
	if (Xv) return Rt;
	(Xv = 1),
		Object.defineProperty(Rt, "__esModule", { value: !0 }),
		(Rt.resetState = d),
		(Rt.log = h),
		(Rt.handleBlur = m),
		(Rt.handleFocus = p),
		(Rt.markForFocusLater = b),
		(Rt.returnFocus = _),
		(Rt.popWithoutFocus = w),
		(Rt.setupScopedFocus = j),
		(Rt.teardownScopedFocus = M);
	var u = Bp(),
		l = r(u);
	function r(B) {
		return B && B.__esModule ? B : { default: B };
	}
	var i = [],
		c = null,
		f = !1;
	function d() {
		i = [];
	}
	function h() {}
	function m() {
		f = !0;
	}
	function p() {
		if (f) {
			if (((f = !1), !c)) return;
			setTimeout(() => {
				if (!c.contains(document.activeElement)) {
					var B = (0, l.default)(c)[0] || c;
					B.focus();
				}
			}, 0);
		}
	}
	function b() {
		i.push(document.activeElement);
	}
	function _() {
		var B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
			D = null;
		try {
			i.length !== 0 && ((D = i.pop()), D.focus({ preventScroll: B }));
			return;
		} catch {
			console.warn(
				[
					"You tried to return focus to",
					D,
					"but it is not in the DOM anymore",
				].join(" "),
			);
		}
	}
	function w() {
		i.length > 0 && i.pop();
	}
	function j(B) {
		(c = B),
			window.addEventListener
				? (window.addEventListener("blur", m, !1),
					document.addEventListener("focus", p, !0))
				: (window.attachEvent("onBlur", m), document.attachEvent("onFocus", p));
	}
	function M() {
		(c = null),
			window.addEventListener
				? (window.removeEventListener("blur", m),
					document.removeEventListener("focus", p))
				: (window.detachEvent("onBlur", m), document.detachEvent("onFocus", p));
	}
	return Rt;
}
var Jr = { exports: {} },
	Kv;
function G_() {
	return (
		Kv ||
			((Kv = 1),
			((u, l) => {
				Object.defineProperty(l, "__esModule", { value: !0 }), (l.default = d);
				var r = Bp(),
					i = c(r);
				function c(h) {
					return h && h.__esModule ? h : { default: h };
				}
				function f() {
					var h =
						arguments.length > 0 && arguments[0] !== void 0
							? arguments[0]
							: document;
					return h.activeElement.shadowRoot
						? f(h.activeElement.shadowRoot)
						: h.activeElement;
				}
				function d(h, m) {
					var p = (0, i.default)(h);
					if (!p.length) {
						m.preventDefault();
						return;
					}
					var b = void 0,
						_ = m.shiftKey,
						w = p[0],
						j = p[p.length - 1],
						M = f();
					if (h === M) {
						if (!_) return;
						b = j;
					}
					if ((j === M && !_ && (b = w), w === M && _ && (b = j), b)) {
						m.preventDefault(), b.focus();
						return;
					}
					var B = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),
						D =
							B != null &&
							B[1] != "Chrome" &&
							/\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;
					if (D) {
						var K = p.indexOf(M);
						if ((K > -1 && (K += _ ? -1 : 1), (b = p[K]), typeof b > "u")) {
							m.preventDefault(), (b = _ ? j : w), b.focus();
							return;
						}
						m.preventDefault(), b.focus();
					}
				}
				u.exports = l.default;
			})(Jr, Jr.exports)),
		Jr.exports
	);
}
var Dt = {},
	ko,
	Zv;
function Y_() {
	if (Zv) return ko;
	Zv = 1;
	var u = () => {};
	return (ko = u), ko;
}
var $t = {},
	qo = { exports: {} }; /*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
var Jv;
function $_() {
	return (
		Jv ||
			((Jv = 1),
			((u) => {
				(() => {
					var l = !!(
							typeof window < "u" &&
							window.document &&
							window.document.createElement
						),
						r = {
							canUseDOM: l,
							canUseWorkers: typeof Worker < "u",
							canUseEventListeners:
								l && !!(window.addEventListener || window.attachEvent),
							canUseViewport: l && !!window.screen,
						};
					u.exports ? (u.exports = r) : (window.ExecutionEnvironment = r);
				})();
			})(qo)),
		qo.exports
	);
}
var Pv;
function ac() {
	if (Pv) return $t;
	(Pv = 1),
		Object.defineProperty($t, "__esModule", { value: !0 }),
		($t.canUseDOM = $t.SafeNodeList = $t.SafeHTMLCollection = void 0);
	var u = $_(),
		l = r(u);
	function r(f) {
		return f && f.__esModule ? f : { default: f };
	}
	var i = l.default,
		c = i.canUseDOM ? window.HTMLElement : {};
	return (
		($t.SafeHTMLCollection = i.canUseDOM ? window.HTMLCollection : {}),
		($t.SafeNodeList = i.canUseDOM ? window.NodeList : {}),
		($t.canUseDOM = i.canUseDOM),
		($t.default = c),
		$t
	);
}
var Wv;
function Hp() {
	if (Wv) return Dt;
	(Wv = 1),
		Object.defineProperty(Dt, "__esModule", { value: !0 }),
		(Dt.resetState = f),
		(Dt.log = d),
		(Dt.assertNodeList = h),
		(Dt.setElement = m),
		(Dt.validateElement = p),
		(Dt.hide = b),
		(Dt.show = _),
		(Dt.documentNotReadyOrSSRTesting = w);
	var u = Y_(),
		l = i(u),
		r = ac();
	function i(j) {
		return j && j.__esModule ? j : { default: j };
	}
	var c = null;
	function f() {
		c &&
			(c.removeAttribute
				? c.removeAttribute("aria-hidden")
				: c.length != null
					? c.forEach((j) => j.removeAttribute("aria-hidden"))
					: document
							.querySelectorAll(c)
							.forEach((j) => j.removeAttribute("aria-hidden"))),
			(c = null);
	}
	function d() {}
	function h(j, M) {
		if (!j || !j.length)
			throw new Error(
				"react-modal: No elements were found for selector " + M + ".",
			);
	}
	function m(j) {
		var M = j;
		if (typeof M == "string" && r.canUseDOM) {
			var B = document.querySelectorAll(M);
			h(B, M), (M = B);
		}
		return (c = M || c), c;
	}
	function p(j) {
		var M = j || c;
		return M
			? Array.isArray(M) || M instanceof HTMLCollection || M instanceof NodeList
				? M
				: [M]
			: ((0, l.default)(
					!1,
					[
						"react-modal: App element is not defined.",
						"Please use `Modal.setAppElement(el)` or set `appElement={el}`.",
						"This is needed so screen readers don't see main content",
						"when modal is opened. It is not recommended, but you can opt-out",
						"by setting `ariaHideApp={false}`.",
					].join(" "),
				),
				[]);
	}
	function b(j) {
		var M = !0,
			B = !1,
			D = void 0;
		try {
			for (
				var K = p(j)[Symbol.iterator](), ee;
				!(M = (ee = K.next()).done);
				M = !0
			) {
				var G = ee.value;
				G.setAttribute("aria-hidden", "true");
			}
		} catch (P) {
			(B = !0), (D = P);
		} finally {
			try {
				!M && K.return && K.return();
			} finally {
				if (B) throw D;
			}
		}
	}
	function _(j) {
		var M = !0,
			B = !1,
			D = void 0;
		try {
			for (
				var K = p(j)[Symbol.iterator](), ee;
				!(M = (ee = K.next()).done);
				M = !0
			) {
				var G = ee.value;
				G.removeAttribute("aria-hidden");
			}
		} catch (P) {
			(B = !0), (D = P);
		} finally {
			try {
				!M && K.return && K.return();
			} finally {
				if (B) throw D;
			}
		}
	}
	function w() {
		c = null;
	}
	return Dt;
}
var sa = {},
	Fv;
function Q_() {
	if (Fv) return sa;
	(Fv = 1),
		Object.defineProperty(sa, "__esModule", { value: !0 }),
		(sa.resetState = i),
		(sa.log = c);
	var u = {},
		l = {};
	function r(p, b) {
		p.classList.remove(b);
	}
	function i() {
		var p = document.getElementsByTagName("html")[0];
		for (var b in u) r(p, u[b]);
		var _ = document.body;
		for (var w in l) r(_, l[w]);
		(u = {}), (l = {});
	}
	function c() {}
	var f = (b, _) => (b[_] || (b[_] = 0), (b[_] += 1), _),
		d = (b, _) => (b[_] && (b[_] -= 1), _),
		h = (b, _, w) => {
			w.forEach((j) => {
				f(_, j), b.add(j);
			});
		},
		m = (b, _, w) => {
			w.forEach((j) => {
				d(_, j), _[j] === 0 && b.remove(j);
			});
		};
	return (
		(sa.add = (b, _) =>
			h(b.classList, b.nodeName.toLowerCase() == "html" ? u : l, _.split(" "))),
		(sa.remove = (b, _) =>
			m(b.classList, b.nodeName.toLowerCase() == "html" ? u : l, _.split(" "))),
		sa
	);
}
var rl = {},
	Iv;
function Gp() {
	if (Iv) return rl;
	(Iv = 1),
		Object.defineProperty(rl, "__esModule", { value: !0 }),
		(rl.log = i),
		(rl.resetState = c);
	function u(f, d) {
		if (!(f instanceof d))
			throw new TypeError("Cannot call a class as a function");
	}
	var l = function f() {
			u(this, f),
				(this.register = (h) => {
					this.openInstances.indexOf(h) === -1 &&
						(this.openInstances.push(h), this.emit("register"));
				}),
				(this.deregister = (h) => {
					var m = this.openInstances.indexOf(h);
					m !== -1 &&
						(this.openInstances.splice(m, 1), this.emit("deregister"));
				}),
				(this.subscribe = (h) => {
					this.subscribers.push(h);
				}),
				(this.emit = (h) => {
					this.subscribers.forEach((m) => m(h, this.openInstances.slice()));
				}),
				(this.openInstances = []),
				(this.subscribers = []);
		},
		r = new l();
	function i() {
		console.log("portalOpenInstances ----------"),
			console.log(r.openInstances.length),
			r.openInstances.forEach((f) => console.log(f)),
			console.log("end portalOpenInstances ----------");
	}
	function c() {
		r = new l();
	}
	return (rl.default = r), rl;
}
var di = {},
	ep;
function V_() {
	if (ep) return di;
	(ep = 1),
		Object.defineProperty(di, "__esModule", { value: !0 }),
		(di.resetState = d),
		(di.log = h);
	var u = Gp(),
		l = r(u);
	function r(b) {
		return b && b.__esModule ? b : { default: b };
	}
	var i = void 0,
		c = void 0,
		f = [];
	function d() {
		for (var b = [i, c], _ = 0; _ < b.length; _++) {
			var w = b[_];
			w && w.parentNode && w.parentNode.removeChild(w);
		}
		(i = c = null), (f = []);
	}
	function h() {
		console.log("bodyTrap ----------"), console.log(f.length);
		for (var b = [i, c], _ = 0; _ < b.length; _++) {
			var w = b[_],
				j = w || {};
			console.log(j.nodeName, j.className, j.id);
		}
		console.log("edn bodyTrap ----------");
	}
	function m() {
		f.length !== 0 && f[f.length - 1].focusContent();
	}
	function p(b, _) {
		!i &&
			!c &&
			((i = document.createElement("div")),
			i.setAttribute("data-react-modal-body-trap", ""),
			(i.style.position = "absolute"),
			(i.style.opacity = "0"),
			i.setAttribute("tabindex", "0"),
			i.addEventListener("focus", m),
			(c = i.cloneNode()),
			c.addEventListener("focus", m)),
			(f = _),
			f.length > 0
				? (document.body.firstChild !== i &&
						document.body.insertBefore(i, document.body.firstChild),
					document.body.lastChild !== c && document.body.appendChild(c))
				: (i.parentElement && i.parentElement.removeChild(i),
					c.parentElement && c.parentElement.removeChild(c));
	}
	return l.default.subscribe(p), di;
}
var tp;
function X_() {
	return (
		tp ||
			((tp = 1),
			((u, l) => {
				Object.defineProperty(l, "__esModule", { value: !0 });
				var r =
						Object.assign ||
						((Q) => {
							for (var Y = 1; Y < arguments.length; Y++) {
								var N = arguments[Y];
								for (var T in N) Object.hasOwn(N, T) && (Q[T] = N[T]);
							}
							return Q;
						}),
					i =
						typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
							? (Q) => typeof Q
							: (Q) =>
									Q &&
									typeof Symbol == "function" &&
									Q.constructor === Symbol &&
									Q !== Symbol.prototype
										? "symbol"
										: typeof Q,
					c = (() => {
						function Q(Y, N) {
							for (var T = 0; T < N.length; T++) {
								var H = N[T];
								(H.enumerable = H.enumerable || !1),
									(H.configurable = !0),
									"value" in H && (H.writable = !0),
									Object.defineProperty(Y, H.key, H);
							}
						}
						return (Y, N, T) => (N && Q(Y.prototype, N), T && Q(Y, T), Y);
					})(),
					f = xi(),
					d = Lp(),
					h = Z(d),
					m = H_(),
					p = P(m),
					b = G_(),
					_ = Z(b),
					w = Hp(),
					j = P(w),
					M = Q_(),
					B = P(M),
					D = ac(),
					K = Z(D),
					ee = Gp(),
					G = Z(ee);
				V_();
				function P(Q) {
					if (Q && Q.__esModule) return Q;
					var Y = {};
					if (Q != null) for (var N in Q) Object.hasOwn(Q, N) && (Y[N] = Q[N]);
					return (Y.default = Q), Y;
				}
				function Z(Q) {
					return Q && Q.__esModule ? Q : { default: Q };
				}
				function se(Q, Y) {
					if (!(Q instanceof Y))
						throw new TypeError("Cannot call a class as a function");
				}
				function ge(Q, Y) {
					if (!Q)
						throw new ReferenceError(
							"this hasn't been initialised - super() hasn't been called",
						);
					return Y && (typeof Y == "object" || typeof Y == "function") ? Y : Q;
				}
				function Ye(Q, Y) {
					if (typeof Y != "function" && Y !== null)
						throw new TypeError(
							"Super expression must either be null or a function, not " +
								typeof Y,
						);
					(Q.prototype = Object.create(Y && Y.prototype, {
						constructor: {
							value: Q,
							enumerable: !1,
							writable: !0,
							configurable: !0,
						},
					})),
						Y &&
							(Object.setPrototypeOf
								? Object.setPrototypeOf(Q, Y)
								: (Q.__proto__ = Y));
				}
				var Be = {
						overlay: "ReactModal__Overlay",
						content: "ReactModal__Content",
					},
					lt = (Y) => Y.code === "Tab" || Y.keyCode === 9,
					ae = (Y) => Y.code === "Escape" || Y.keyCode === 27,
					J = 0,
					fe = ((Q) => {
						Ye(Y, Q);
						function Y(N) {
							se(this, Y);
							var T = ge(
								this,
								(Y.__proto__ || Object.getPrototypeOf(Y)).call(this, N),
							);
							return (
								(T.setOverlayRef = (H) => {
									(T.overlay = H), T.props.overlayRef && T.props.overlayRef(H);
								}),
								(T.setContentRef = (H) => {
									(T.content = H), T.props.contentRef && T.props.contentRef(H);
								}),
								(T.afterClose = () => {
									var H = T.props,
										te = H.appElement,
										S = H.ariaHideApp,
										z = H.htmlOpenClassName,
										V = H.bodyOpenClassName,
										$ = H.parentSelector,
										I = ($ && $().ownerDocument) || document;
									V && B.remove(I.body, V),
										z && B.remove(I.getElementsByTagName("html")[0], z),
										S && J > 0 && ((J -= 1), J === 0 && j.show(te)),
										T.props.shouldFocusAfterRender &&
											(T.props.shouldReturnFocusAfterClose
												? (p.returnFocus(T.props.preventScroll),
													p.teardownScopedFocus())
												: p.popWithoutFocus()),
										T.props.onAfterClose && T.props.onAfterClose(),
										G.default.deregister(T);
								}),
								(T.open = () => {
									T.beforeOpen(),
										T.state.afterOpen && T.state.beforeClose
											? (clearTimeout(T.closeTimer),
												T.setState({ beforeClose: !1 }))
											: (T.props.shouldFocusAfterRender &&
													(p.setupScopedFocus(T.node), p.markForFocusLater()),
												T.setState({ isOpen: !0 }, () => {
													T.openAnimationFrame = requestAnimationFrame(() => {
														T.setState({ afterOpen: !0 }),
															T.props.isOpen &&
																T.props.onAfterOpen &&
																T.props.onAfterOpen({
																	overlayEl: T.overlay,
																	contentEl: T.content,
																});
													});
												}));
								}),
								(T.close = () => {
									T.props.closeTimeoutMS > 0
										? T.closeWithTimeout()
										: T.closeWithoutTimeout();
								}),
								(T.focusContent = () =>
									T.content &&
									!T.contentHasFocus() &&
									T.content.focus({ preventScroll: !0 })),
								(T.closeWithTimeout = () => {
									var H = Date.now() + T.props.closeTimeoutMS;
									T.setState({ beforeClose: !0, closesAt: H }, () => {
										T.closeTimer = setTimeout(
											T.closeWithoutTimeout,
											T.state.closesAt - Date.now(),
										);
									});
								}),
								(T.closeWithoutTimeout = () => {
									T.setState(
										{
											beforeClose: !1,
											isOpen: !1,
											afterOpen: !1,
											closesAt: null,
										},
										T.afterClose,
									);
								}),
								(T.handleKeyDown = (H) => {
									lt(H) && (0, _.default)(T.content, H),
										T.props.shouldCloseOnEsc &&
											ae(H) &&
											(H.stopPropagation(), T.requestClose(H));
								}),
								(T.handleOverlayOnClick = (H) => {
									T.shouldClose === null && (T.shouldClose = !0),
										T.shouldClose &&
											T.props.shouldCloseOnOverlayClick &&
											(T.ownerHandlesClose()
												? T.requestClose(H)
												: T.focusContent()),
										(T.shouldClose = null);
								}),
								(T.handleContentOnMouseUp = () => {
									T.shouldClose = !1;
								}),
								(T.handleOverlayOnMouseDown = (H) => {
									!T.props.shouldCloseOnOverlayClick &&
										H.target == T.overlay &&
										H.preventDefault();
								}),
								(T.handleContentOnClick = () => {
									T.shouldClose = !1;
								}),
								(T.handleContentOnMouseDown = () => {
									T.shouldClose = !1;
								}),
								(T.requestClose = (H) =>
									T.ownerHandlesClose() && T.props.onRequestClose(H)),
								(T.ownerHandlesClose = () => T.props.onRequestClose),
								(T.shouldBeClosed = () =>
									!T.state.isOpen && !T.state.beforeClose),
								(T.contentHasFocus = () =>
									document.activeElement === T.content ||
									T.content.contains(document.activeElement)),
								(T.buildClassName = (H, te) => {
									var S =
											(typeof te > "u" ? "undefined" : i(te)) === "object"
												? te
												: {
														base: Be[H],
														afterOpen: Be[H] + "--after-open",
														beforeClose: Be[H] + "--before-close",
													},
										z = S.base;
									return (
										T.state.afterOpen && (z = z + " " + S.afterOpen),
										T.state.beforeClose && (z = z + " " + S.beforeClose),
										typeof te == "string" && te ? z + " " + te : z
									);
								}),
								(T.attributesFromObject = (H, te) =>
									Object.keys(te).reduce(
										(S, z) => ((S[H + "-" + z] = te[z]), S),
										{},
									)),
								(T.state = { afterOpen: !1, beforeClose: !1 }),
								(T.shouldClose = null),
								(T.moveFromContentToOverlay = null),
								T
							);
						}
						return (
							c(Y, [
								{
									key: "componentDidMount",
									value: function () {
										this.props.isOpen && this.open();
									},
								},
								{
									key: "componentDidUpdate",
									value: function (T, H) {
										this.props.isOpen && !T.isOpen
											? this.open()
											: !this.props.isOpen && T.isOpen && this.close(),
											this.props.shouldFocusAfterRender &&
												this.state.isOpen &&
												!H.isOpen &&
												this.focusContent();
									},
								},
								{
									key: "componentWillUnmount",
									value: function () {
										this.state.isOpen && this.afterClose(),
											clearTimeout(this.closeTimer),
											cancelAnimationFrame(this.openAnimationFrame);
									},
								},
								{
									key: "beforeOpen",
									value: function () {
										var T = this.props,
											H = T.appElement,
											te = T.ariaHideApp,
											S = T.htmlOpenClassName,
											z = T.bodyOpenClassName,
											V = T.parentSelector,
											$ = (V && V().ownerDocument) || document;
										z && B.add($.body, z),
											S && B.add($.getElementsByTagName("html")[0], S),
											te && ((J += 1), j.hide(H)),
											G.default.register(this);
									},
								},
								{
									key: "render",
									value: function () {
										var T = this.props,
											H = T.id,
											te = T.className,
											S = T.overlayClassName,
											z = T.defaultStyles,
											V = T.children,
											$ = te ? {} : z.content,
											I = S ? {} : z.overlay;
										if (this.shouldBeClosed()) return null;
										var me = {
												ref: this.setOverlayRef,
												className: this.buildClassName("overlay", S),
												style: r({}, I, this.props.style.overlay),
												onClick: this.handleOverlayOnClick,
												onMouseDown: this.handleOverlayOnMouseDown,
											},
											re = r(
												{
													id: H,
													ref: this.setContentRef,
													style: r({}, $, this.props.style.content),
													className: this.buildClassName("content", te),
													tabIndex: "-1",
													onKeyDown: this.handleKeyDown,
													onMouseDown: this.handleContentOnMouseDown,
													onMouseUp: this.handleContentOnMouseUp,
													onClick: this.handleContentOnClick,
													role: this.props.role,
													"aria-label": this.props.contentLabel,
												},
												this.attributesFromObject(
													"aria",
													r({ modal: !0 }, this.props.aria),
												),
												this.attributesFromObject(
													"data",
													this.props.data || {},
												),
												{ "data-testid": this.props.testId },
											),
											nt = this.props.contentElement(re, V);
										return this.props.overlayElement(me, nt);
									},
								},
							]),
							Y
						);
					})(f.Component);
				(fe.defaultProps = {
					style: { overlay: {}, content: {} },
					defaultStyles: {},
				}),
					(fe.propTypes = {
						isOpen: h.default.bool.isRequired,
						defaultStyles: h.default.shape({
							content: h.default.object,
							overlay: h.default.object,
						}),
						style: h.default.shape({
							content: h.default.object,
							overlay: h.default.object,
						}),
						className: h.default.oneOfType([
							h.default.string,
							h.default.object,
						]),
						overlayClassName: h.default.oneOfType([
							h.default.string,
							h.default.object,
						]),
						parentSelector: h.default.func,
						bodyOpenClassName: h.default.string,
						htmlOpenClassName: h.default.string,
						ariaHideApp: h.default.bool,
						appElement: h.default.oneOfType([
							h.default.instanceOf(K.default),
							h.default.instanceOf(D.SafeHTMLCollection),
							h.default.instanceOf(D.SafeNodeList),
							h.default.arrayOf(h.default.instanceOf(K.default)),
						]),
						onAfterOpen: h.default.func,
						onAfterClose: h.default.func,
						onRequestClose: h.default.func,
						closeTimeoutMS: h.default.number,
						shouldFocusAfterRender: h.default.bool,
						shouldCloseOnOverlayClick: h.default.bool,
						shouldReturnFocusAfterClose: h.default.bool,
						preventScroll: h.default.bool,
						role: h.default.string,
						contentLabel: h.default.string,
						aria: h.default.object,
						data: h.default.object,
						children: h.default.node,
						shouldCloseOnEsc: h.default.bool,
						overlayRef: h.default.func,
						contentRef: h.default.func,
						id: h.default.string,
						overlayElement: h.default.func,
						contentElement: h.default.func,
						testId: h.default.string,
					}),
					(l.default = fe),
					(u.exports = l.default);
			})(Kr, Kr.exports)),
		Kr.exports
	);
}
function Yp() {
	var u = this.constructor.getDerivedStateFromProps(this.props, this.state);
	u != null && this.setState(u);
}
function $p(u) {
	function l(r) {
		var i = this.constructor.getDerivedStateFromProps(u, r);
		return i ?? null;
	}
	this.setState(l.bind(this));
}
function Qp(u, l) {
	try {
		var r = this.props,
			i = this.state;
		(this.props = u),
			(this.state = l),
			(this.__reactInternalSnapshotFlag = !0),
			(this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(r, i));
	} finally {
		(this.props = r), (this.state = i);
	}
}
Yp.__suppressDeprecationWarning = !0;
$p.__suppressDeprecationWarning = !0;
Qp.__suppressDeprecationWarning = !0;
function K_(u) {
	var l = u.prototype;
	if (!l || !l.isReactComponent)
		throw new Error("Can only polyfill class components");
	if (
		typeof u.getDerivedStateFromProps != "function" &&
		typeof l.getSnapshotBeforeUpdate != "function"
	)
		return u;
	var r = null,
		i = null,
		c = null;
	if (
		(typeof l.componentWillMount == "function"
			? (r = "componentWillMount")
			: typeof l.UNSAFE_componentWillMount == "function" &&
				(r = "UNSAFE_componentWillMount"),
		typeof l.componentWillReceiveProps == "function"
			? (i = "componentWillReceiveProps")
			: typeof l.UNSAFE_componentWillReceiveProps == "function" &&
				(i = "UNSAFE_componentWillReceiveProps"),
		typeof l.componentWillUpdate == "function"
			? (c = "componentWillUpdate")
			: typeof l.UNSAFE_componentWillUpdate == "function" &&
				(c = "UNSAFE_componentWillUpdate"),
		r !== null || i !== null || c !== null)
	) {
		var f = u.displayName || u.name,
			d =
				typeof u.getDerivedStateFromProps == "function"
					? "getDerivedStateFromProps()"
					: "getSnapshotBeforeUpdate()";
		throw Error(
			`Unsafe legacy lifecycles will not be called for components using new component APIs.

` +
				f +
				" uses " +
				d +
				" but also contains the following legacy lifecycles:" +
				(r !== null
					? `
  ` + r
					: "") +
				(i !== null
					? `
  ` + i
					: "") +
				(c !== null
					? `
  ` + c
					: "") +
				`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`,
		);
	}
	if (
		(typeof u.getDerivedStateFromProps == "function" &&
			((l.componentWillMount = Yp), (l.componentWillReceiveProps = $p)),
		typeof l.getSnapshotBeforeUpdate == "function")
	) {
		if (typeof l.componentDidUpdate != "function")
			throw new Error(
				"Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype",
			);
		l.componentWillUpdate = Qp;
		var h = l.componentDidUpdate;
		l.componentDidUpdate = function (p, b, _) {
			var w = this.__reactInternalSnapshotFlag
				? this.__reactInternalSnapshot
				: _;
			h.call(this, p, b, w);
		};
	}
	return u;
}
const Z_ = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, polyfill: K_ },
			Symbol.toStringTag,
			{ value: "Module" },
		),
	),
	J_ = lp(Z_);
var np;
function P_() {
	if (np) return Dn;
	(np = 1),
		Object.defineProperty(Dn, "__esModule", { value: !0 }),
		(Dn.bodyOpenClassName = Dn.portalClassName = void 0);
	var u =
			Object.assign ||
			((ae) => {
				for (var J = 1; J < arguments.length; J++) {
					var fe = arguments[J];
					for (var Q in fe) Object.hasOwn(fe, Q) && (ae[Q] = fe[Q]);
				}
				return ae;
			}),
		l = (() => {
			function ae(J, fe) {
				for (var Q = 0; Q < fe.length; Q++) {
					var Y = fe[Q];
					(Y.enumerable = Y.enumerable || !1),
						(Y.configurable = !0),
						"value" in Y && (Y.writable = !0),
						Object.defineProperty(J, Y.key, Y);
				}
			}
			return (J, fe, Q) => (fe && ae(J.prototype, fe), Q && ae(J, Q), J);
		})(),
		r = xi(),
		i = D(r),
		c = Jo(),
		f = D(c),
		d = Lp(),
		h = D(d),
		m = X_(),
		p = D(m),
		b = Hp(),
		_ = B(b),
		w = ac(),
		j = D(w),
		M = J_;
	function B(ae) {
		if (ae && ae.__esModule) return ae;
		var J = {};
		if (ae != null)
			for (var fe in ae) Object.hasOwn(ae, fe) && (J[fe] = ae[fe]);
		return (J.default = ae), J;
	}
	function D(ae) {
		return ae && ae.__esModule ? ae : { default: ae };
	}
	function K(ae, J) {
		if (!(ae instanceof J))
			throw new TypeError("Cannot call a class as a function");
	}
	function ee(ae, J) {
		if (!ae)
			throw new ReferenceError(
				"this hasn't been initialised - super() hasn't been called",
			);
		return J && (typeof J == "object" || typeof J == "function") ? J : ae;
	}
	function G(ae, J) {
		if (typeof J != "function" && J !== null)
			throw new TypeError(
				"Super expression must either be null or a function, not " + typeof J,
			);
		(ae.prototype = Object.create(J && J.prototype, {
			constructor: {
				value: ae,
				enumerable: !1,
				writable: !0,
				configurable: !0,
			},
		})),
			J &&
				(Object.setPrototypeOf
					? Object.setPrototypeOf(ae, J)
					: (ae.__proto__ = J));
	}
	var P = (Dn.portalClassName = "ReactModalPortal"),
		Z = (Dn.bodyOpenClassName = "ReactModal__Body--open"),
		se = w.canUseDOM && f.default.createPortal !== void 0,
		ge = (J) => document.createElement(J),
		Ye = () =>
			se
				? f.default.createPortal
				: f.default.unstable_renderSubtreeIntoContainer;
	function Be(ae) {
		return ae();
	}
	var lt = ((ae) => {
		G(J, ae);
		function J() {
			var fe, Q, Y, N;
			K(this, J);
			for (var T = arguments.length, H = Array(T), te = 0; te < T; te++)
				H[te] = arguments[te];
			return (
				(N =
					((Q =
						((Y = ee(
							this,
							(fe = J.__proto__ || Object.getPrototypeOf(J)).call.apply(
								fe,
								[this].concat(H),
							),
						)),
						Y)),
					(Y.removePortal = () => {
						!se && f.default.unmountComponentAtNode(Y.node);
						var S = Be(Y.props.parentSelector);
						S && S.contains(Y.node)
							? S.removeChild(Y.node)
							: console.warn(
									'React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.',
								);
					}),
					(Y.portalRef = (S) => {
						Y.portal = S;
					}),
					(Y.renderPortal = (S) => {
						var z = Ye(),
							V = z(
								Y,
								i.default.createElement(
									p.default,
									u({ defaultStyles: J.defaultStyles }, S),
								),
								Y.node,
							);
						Y.portalRef(V);
					}),
					Q)),
				ee(Y, N)
			);
		}
		return (
			l(
				J,
				[
					{
						key: "componentDidMount",
						value: function () {
							if (w.canUseDOM) {
								se || (this.node = ge("div")),
									(this.node.className = this.props.portalClassName);
								var Q = Be(this.props.parentSelector);
								Q.appendChild(this.node), !se && this.renderPortal(this.props);
							}
						},
					},
					{
						key: "getSnapshotBeforeUpdate",
						value: function (Q) {
							var Y = Be(Q.parentSelector),
								N = Be(this.props.parentSelector);
							return { prevParent: Y, nextParent: N };
						},
					},
					{
						key: "componentDidUpdate",
						value: function (Q, Y, N) {
							if (w.canUseDOM) {
								var T = this.props,
									H = T.isOpen,
									te = T.portalClassName;
								Q.portalClassName !== te && (this.node.className = te);
								var S = N.prevParent,
									z = N.nextParent;
								z !== S && (S.removeChild(this.node), z.appendChild(this.node)),
									!(!Q.isOpen && !H) && !se && this.renderPortal(this.props);
							}
						},
					},
					{
						key: "componentWillUnmount",
						value: function () {
							if (!(!w.canUseDOM || !this.node || !this.portal)) {
								var Q = this.portal.state,
									Y = Date.now(),
									N =
										Q.isOpen &&
										this.props.closeTimeoutMS &&
										(Q.closesAt || Y + this.props.closeTimeoutMS);
								N
									? (Q.beforeClose || this.portal.closeWithTimeout(),
										setTimeout(this.removePortal, N - Y))
									: this.removePortal();
							}
						},
					},
					{
						key: "render",
						value: function () {
							if (!w.canUseDOM || !se) return null;
							!this.node && se && (this.node = ge("div"));
							var Q = Ye();
							return Q(
								i.default.createElement(
									p.default,
									u(
										{ ref: this.portalRef, defaultStyles: J.defaultStyles },
										this.props,
									),
								),
								this.node,
							);
						},
					},
				],
				[
					{
						key: "setAppElement",
						value: (Q) => {
							_.setElement(Q);
						},
					},
				],
			),
			J
		);
	})(r.Component);
	return (
		(lt.propTypes = {
			isOpen: h.default.bool.isRequired,
			style: h.default.shape({
				content: h.default.object,
				overlay: h.default.object,
			}),
			portalClassName: h.default.string,
			bodyOpenClassName: h.default.string,
			htmlOpenClassName: h.default.string,
			className: h.default.oneOfType([
				h.default.string,
				h.default.shape({
					base: h.default.string.isRequired,
					afterOpen: h.default.string.isRequired,
					beforeClose: h.default.string.isRequired,
				}),
			]),
			overlayClassName: h.default.oneOfType([
				h.default.string,
				h.default.shape({
					base: h.default.string.isRequired,
					afterOpen: h.default.string.isRequired,
					beforeClose: h.default.string.isRequired,
				}),
			]),
			appElement: h.default.oneOfType([
				h.default.instanceOf(j.default),
				h.default.instanceOf(w.SafeHTMLCollection),
				h.default.instanceOf(w.SafeNodeList),
				h.default.arrayOf(h.default.instanceOf(j.default)),
			]),
			onAfterOpen: h.default.func,
			onRequestClose: h.default.func,
			closeTimeoutMS: h.default.number,
			ariaHideApp: h.default.bool,
			shouldFocusAfterRender: h.default.bool,
			shouldCloseOnOverlayClick: h.default.bool,
			shouldReturnFocusAfterClose: h.default.bool,
			preventScroll: h.default.bool,
			parentSelector: h.default.func,
			aria: h.default.object,
			data: h.default.object,
			role: h.default.string,
			contentLabel: h.default.string,
			shouldCloseOnEsc: h.default.bool,
			overlayRef: h.default.func,
			contentRef: h.default.func,
			id: h.default.string,
			overlayElement: h.default.func,
			contentElement: h.default.func,
		}),
		(lt.defaultProps = {
			isOpen: !1,
			portalClassName: P,
			bodyOpenClassName: Z,
			role: "dialog",
			ariaHideApp: !0,
			closeTimeoutMS: 0,
			shouldFocusAfterRender: !0,
			shouldCloseOnEsc: !0,
			shouldCloseOnOverlayClick: !0,
			shouldReturnFocusAfterClose: !0,
			preventScroll: !1,
			parentSelector: () => document.body,
			overlayElement: (J, fe) => i.default.createElement("div", J, fe),
			contentElement: (J, fe) => i.default.createElement("div", J, fe),
		}),
		(lt.defaultStyles = {
			overlay: {
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				backgroundColor: "rgba(255, 255, 255, 0.75)",
			},
			content: {
				position: "absolute",
				top: "40px",
				left: "40px",
				right: "40px",
				bottom: "40px",
				border: "1px solid #ccc",
				background: "#fff",
				overflow: "auto",
				WebkitOverflowScrolling: "touch",
				borderRadius: "4px",
				outline: "none",
				padding: "20px",
			},
		}),
		(0, M.polyfill)(lt),
		(Dn.default = lt),
		Dn
	);
}
var ap;
function W_() {
	return (
		ap ||
			((ap = 1),
			((u, l) => {
				Object.defineProperty(l, "__esModule", { value: !0 });
				var r = P_(),
					i = c(r);
				function c(f) {
					return f && f.__esModule ? f : { default: f };
				}
				(l.default = i.default), (u.exports = l.default);
			})(Xr, Xr.exports)),
		Xr.exports
	);
}
var F_ = W_();
const I_ = es(F_);
function ex() {
	const [u, l] = X.useState(!1);
	return y.jsx(y.Fragment, {
		children: y.jsxs("div", {
			className: "ml-[300px] p-6",
			children: [
				y.jsxs("div", {
					className: "flex items-center justify-between",
					children: [
						y.jsxs("div", {
							children: [
								y.jsx("h1", {
									className: "text-2xl font-bold",
									children: "Billing",
								}),
								y.jsx("p", {
									children: "Manage your balance and view transaction history",
								}),
							],
						}),
						y.jsxs("div", {
							className: "flex gap-4",
							children: [
								y.jsx("button", {
									type: "button",
									className: "bg-gray-300 text-black px-4 py-2 rounded-lg mr-2",
									children: "redeem",
								}),
								y.jsx("button", {
									type: "button",
									className: "bg-blue-500 text-white px-4 py-2 rounded-lg",
									onClick: () => l(!0),
									children: "Add credit",
								}),
							],
						}),
					],
				}),
				y.jsxs(I_, {
					isOpen: u,
					onRequestClose: () => l(!1),
					contentLabel: "Add Credit Modal",
					className: "bg-white rounded shadow-lg",
					overlayClassName:
						"fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",
					children: [
						y.jsxs("div", {
							className: "border-b border-black px-6 pt-4 flex justify-between",
							children: [
								y.jsx("h2", {
									className: "text-xl font-bold mb-4",
									children: "Top Up Balance",
								}),
								y.jsx("button", {
									type: "button",
									onClick: () => l(!1),
									className:
										"cursor-pointer bg-transparent border-none text-xl font-bold hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded p-1",
									"aria-label": "Close modal",
									children: "×",
								}),
							],
						}),
						y.jsxs("div", {
							className: "px-6 py-4 flex flex-col gap-4",
							children: [
								y.jsxs("div", {
									className: "flex flex-col gap-2",
									children: [
										y.jsx("label", {
											htmlFor: "amount",
											children: "amount(Rp)",
										}),
										y.jsx("input", {
											className:
												"border border-gray-300 w-[300px] rounded-lg p-2",
											type: "number",
										}),
									],
								}),
								y.jsxs("div", {
									className: "flex flex-row gap-4 mt-4 justify-between",
									children: [
										y.jsx("div", {
											className:
												"bg-white p-2 rounded-lg border border-gray-300",
											children: "50.000",
										}),
										y.jsx("div", {
											className:
												"bg-white p-2 rounded-lg border border-gray-300",
											children: "100.000",
										}),
										y.jsx("div", {
											className:
												"bg-white p-2 rounded-lg border border-gray-300",
											children: "200.000",
										}),
									],
								}),
								y.jsx("div", {
									className: "mt-4",
									children: y.jsx("button", {
										type: "button",
										className:
											"bg-blue-500 text-white px-4 py-2 rounded-lg text-center w-full",
										children: "top up",
									}),
								}),
							],
						}),
					],
				}),
				y.jsx("div", {
					className: "bg-white p-6 rounded-lg shadow-lg mt-6",
					children: y.jsxs("div", {
						className: "flex gap-4 items-center",
						children: [
							y.jsx("div", { className: "w-10 h-10 rounded-full bg-blue-500" }),
							y.jsxs("div", {
								children: [
									y.jsx("h2", {
										className: "text-sm font-bold",
										children: "Current Credits",
									}),
									y.jsx("p", {
										className: "text-2xl font-bold",
										children: "Rp 20.000",
									}),
								],
							}),
						],
					}),
				}),
				y.jsxs("div", {
					children: [
						y.jsxs("div", {
							className: "flex gap-4",
							children: [
								y.jsx("h2", {
									className: "text-2xl font-bold mt-6",
									children: "Transaction ",
								}),
								y.jsx("h2", {
									className: "text-2xl font-bold mt-6",
									children: "Payment ",
								}),
							],
						}),
						y.jsx("div", {
							className: "mt-5",
							children: y.jsxs("table", {
								className: "min-w-full border border-gray-300",
								children: [
									y.jsx("thead", {
										children: y.jsxs("tr", {
											children: [
												y.jsx("th", {
													className: "px-4 py-2 border-b text-center",
													children: "date",
												}),
												y.jsx("th", {
													className: "px-4 py-2 border-b text-center",
													children: "descriotion",
												}),
												y.jsx("th", {
													className: "px-4 py-2 border-b text-center",
													children: "type",
												}),
												y.jsx("th", {
													className: "px-4 py-2 border-b text-center",
													children: "amount",
												}),
											],
										}),
									}),
									y.jsxs("tbody", {
										children: [
											y.jsxs("tr", {
												children: [
													y.jsx("td", {
														className: "px-4 py-2 border-b text-center",
														children: "6/24/2025",
													}),
													y.jsx("td", {
														className: "px-4 py-2 border-b text-center",
														children: "Credit purchase: 50000 credits",
													}),
													y.jsx("td", {
														className: "px-4 py-2 border-b text-center",
														children: "purchase",
													}),
													y.jsx("td", {
														className: "px-4 py-2 border-b",
														children: "+Rp 50.000 credits",
													}),
												],
											}),
											y.jsxs("tr", {
												children: [
													y.jsx("td", {
														className: "px-4 py-2 border-b text-center",
														children: "6/24/2025",
													}),
													y.jsx("td", {
														className: "px-4 py-2 border-b text-center",
														children: "Credit purchase: 50000 credits",
													}),
													y.jsx("td", {
														className: "px-4 py-2 border-b text-center",
														children: "purchase",
													}),
													y.jsx("td", {
														className: "px-4 py-2 border-b",
														children: "+Rp 50.000 credits",
													}),
												],
											}),
										],
									}),
								],
							}),
						}),
					],
				}),
			],
		}),
	});
}
function tx() {
	const [u, l] = X.useState(null),
		r = vp();
	X.useEffect(() => {
		Ir.auth.getSession().then(({ data: c }) => {
			var d, h;
			const f =
				((h = (d = c.session) == null ? void 0 : d.user) == null
					? void 0
					: h.email) ?? null;
			l(f), f || r("/");
		});
	}, [r]);
	const i = async () => {
		await Ir.auth.signOut(), r("/");
	};
	return y.jsxs("header", {
		className:
			"flex justify-between pr-10 h-16 bg-white border-b border-gray-200 sticky top-0 z-20",
		children: [
			y.jsx("div", {
				className: "text-2xl font-bold flex items-center ml-10",
				children: "SUmopod",
			}),
			y.jsxs("div", {
				className: "flex gap-4 items-center",
				children: [
					y.jsx("div", { className: "w-10 h-10 rounded-full bg-blue-500" }),
					y.jsxs("div", {
						children: [
							y.jsx("h3", { children: "User" }),
							y.jsx("p", { children: u ?? "Loading..." }),
							y.jsx("button", {
								type: "button",
								className: "text-sm text-red-500 mt-1",
								onClick: i,
								children: "Logout",
							}),
						],
					}),
				],
			}),
		],
	});
}
function nx() {
	return y.jsx(y.Fragment, {
		children: y.jsx("div", {
			className:
				"fixed left-0 h-screen w-[300px] bg-white border-r border-gray-200",
			children: y.jsx("div", {
				className: "ml-9 mt-7",
				children: y.jsxs("ul", {
					className: "space-y-4",
					children: [
						y.jsx(sn, {
							to: "/dashboard/services",
							children: y.jsx("li", { children: "Services" }),
						}),
						y.jsx(sn, {
							to: "/dashboard/ai",
							children: y.jsx("li", { className: "mt-4", children: "AI" }),
						}),
						y.jsx(sn, {
							to: "/dashboard/billing",
							children: y.jsx("li", { className: "mt-4", children: "Billing" }),
						}),
						y.jsx(sn, {
							to: "/dashboard/affiliate",
							children: y.jsx("li", {
								className: "mt-4",
								children: "Affiliate",
							}),
						}),
						y.jsx(sn, {
							to: "/dashboard/setting",
							children: y.jsx("li", {
								className: "mt-4",
								children: "Settings",
							}),
						}),
						y.jsx(sn, {
							to: "/dashboard/support",
							children: y.jsx("li", { className: "mt-4", children: "Support" }),
						}),
						y.jsx(sn, {
							to: "/dashboard/beli-emas",
							children: y.jsx("li", {
								className: "mt-4",
								children: "Belii Emas",
							}),
						}),
					],
				}),
			}),
		}),
	});
}
function ax() {
	return y.jsxs(y.Fragment, {
		children: [
			y.jsx(tx, {}),
			y.jsx(nx, {}),
			y.jsx("div", { children: y.jsx(m0, {}) }),
		],
	});
}
function lc() {
	return y.jsxs("div", {
		className: "bg-black",
		children: [
			y.jsxs("div", {
				className: "flex justify-around p-20 border-b border-gray-700",
				children: [
					y.jsxs("div", {
						children: [
							y.jsx("h1", {
								className: "text-white text-2xl font-bold",
								children: "Sumopod",
							}),
							y.jsx("p", {
								className: "text-white text-medium max-w-[300px]",
								children:
									"SumoPod offers seamless container and application purchasing solutions for businesses of all sizes.",
							}),
						],
					}),
					y.jsxs("div", {
						className: "flex flex-row gap-52",
						children: [
							y.jsxs("div", {
								children: [
									y.jsx("h1", {
										className: "text-white text-xl font-bold",
										children: "Quick Links",
									}),
									y.jsxs("ul", {
										children: [
											y.jsx("a", {
												href: "/",
												children: y.jsx("li", {
													className: "text-white text-medium",
													children: "Home",
												}),
											}),
											y.jsx("a", {
												href: "/",
												children: y.jsx("li", {
													className: "text-white text-medium",
													children: "Get Started",
												}),
											}),
											y.jsx("a", {
												href: "/",
												children: y.jsx("li", {
													className: "text-white text-medium",
													children: "Login",
												}),
											}),
										],
									}),
								],
							}),
							y.jsxs("div", {
								children: [
									y.jsx("h1", {
										className: "text-white text-xl font-bold",
										children: "Quick Links",
									}),
									y.jsxs("ul", {
										children: [
											y.jsx("a", {
												href: "/",
												children: y.jsx("li", {
													className: "text-white text-medium",
													children: "Home",
												}),
											}),
											y.jsx("a", {
												href: "/",
												children: y.jsx("li", {
													className: "text-white text-medium",
													children: "Get Started",
												}),
											}),
											y.jsx("a", {
												href: "/",
												children: y.jsx("li", {
													className: "text-white text-medium",
													children: "Login",
												}),
											}),
										],
									}),
								],
							}),
							y.jsxs("div", {
								children: [
									y.jsx("h1", {
										className: "text-white text-xl font-bold",
										children: "Quick Links",
									}),
									y.jsxs("ul", {
										children: [
											y.jsx("a", {
												href: "/",
												children: y.jsx("li", {
													className: "text-white text-medium",
													children: "Home",
												}),
											}),
											y.jsx("a", {
												href: "/",
												children: y.jsx("li", {
													className: "text-white text-medium",
													children: "Get Started",
												}),
											}),
											y.jsx("a", {
												href: "/",
												children: y.jsx("li", {
													className: "text-white text-medium",
													children: "Login",
												}),
											}),
										],
									}),
								],
							}),
						],
					}),
				],
			}),
			y.jsx("div", {
				children: y.jsx("p", {
					className: "text-white text-center p-10",
					children:
						"© 2025 KodingWorks - PT Koding Kreasi Indonesia. All rights reserved.",
				}),
			}),
		],
	});
}
function ic() {
	return y.jsxs("header", {
		className: "bg-white flex justify-around items-center py-4 sticky top-0",
		children: [
			y.jsxs("div", {
				className: "flex gap-8 items-center",
				children: [
					y.jsx("h1", { className: "text-2xl font-bold", children: "Sumopod" }),
					y.jsx("a", {
						className: "hover:text-blue-500",
						href: "/",
						children: "home",
					}),
					y.jsx("a", {
						className: "hover:text-blue-500",
						href: "/templates",
						children: "template",
					}),
					y.jsx("a", {
						className: "hover:text-blue-500",
						href: "/",
						children: "pricing",
					}),
					y.jsx("a", {
						className: "hover:text-blue-500",
						href: "/",
						children: "features",
					}),
				],
			}),
			y.jsx("div", {
				children: y.jsxs("div", {
					className: "flex gap-8",
					children: [
						y.jsx(sn, {
							to: "/login",
							children: y.jsx("button", {
								type: "button",
								className: "bg-gray-300 text-black p-2 rounded-md",
								children: "Login",
							}),
						}),
						y.jsx(sn, {
							to: "/login",
							children: y.jsx("button", {
								type: "button",
								className: "bg-blue-500 text-white p-2 rounded-md",
								children: "Get Started",
							}),
						}),
					],
				}),
			}),
		],
	});
}
function lx() {
	return y.jsxs(y.Fragment, {
		children: [
			y.jsx(ic, {}),
			y.jsxs("section", {
				className: "flex flex-col justify-center items-center h-screen",
				children: [
					y.jsx("div", {
						className: "text-center",
						children: y.jsxs("h1", {
							className: "text-8xl font-bold",
							children: [
								y.jsx("span", {
									className: "text-blue-600",
									children: "Deploy your App",
								}),
								" ",
								y.jsx("br", {}),
								" in 15 Seconds!",
							],
						}),
					}),
					y.jsxs("div", {
						className: "flex space-x-4 mt-8",
						children: [
							y.jsx("button", {
								type: "button",
								className: "bg-blue-600 text-white px-6 py-2 rounded-lg",
								children: "Get Started",
							}),
							y.jsx("button", {
								type: "button",
								className: "bg-gray-200 text-black px-6 py-2 rounded-lg",
								children: "See App tempalate",
							}),
						],
					}),
				],
			}),
			y.jsxs("section", {
				className:
					"flex flex-col justify-center items-center h-screen bg-slate-100 gap-6",
				children: [
					y.jsxs("div", {
						className: "text-center max-w-2xl",
						children: [
							y.jsx("h1", {
								className: "text-4xl font-bold",
								children: "Simple, Transparent Pricing",
							}),
							y.jsx("p", {
								className: "text-xl font-medium",
								children:
									"Get started with SumoPod today and experience the power of container management",
							}),
						],
					}),
					y.jsxs("div", {
						className:
							"bg-white border-2 border-blue-500 w-[500px] h-[400px] rounded-lg flex flex-col justify-center items-center gap-4",
						children: [
							y.jsx("h2", {
								className: "text-2xl font-bold",
								children: "Start Today",
							}),
							y.jsx("h1", {
								className: "text-4xl font-black text-blue-600",
								children: " FREE ",
							}),
							y.jsx("p", {
								className: "text-medium font-medium text-center",
								children:
									"Get started with SumoPod today and experience the power of container management",
							}),
							y.jsxs("div", {
								className: "flex flex-col justify-center items-center gap-4",
								children: [
									y.jsx("button", {
										type: "button",
										className:
											"bg-blue-600 text-white min-w-[400px] px-6 py-2 rounded-sm",
										children: "Get Started",
									}),
									y.jsx("button", {
										type: "button",
										className:
											"bg-blue-600 text-white min-w-[400px] px-6 py-2 rounded-sm",
										children: "See App Template",
									}),
								],
							}),
						],
					}),
				],
			}),
			y.jsxs("section", {
				className:
					"flex flex-col justify-center items-center h-screen bg-white gap-6",
				children: [
					y.jsxs("div", {
						className:
							"flex flex-col justify-center items-center gap-4 text-center max-w-2xl",
						children: [
							y.jsx("h1", {
								className: "text-4xl font-bold",
								children: "Everything you need in one platform",
							}),
							y.jsx("p", {
								className: "text-xl font-medium",
								children:
									"SumoPod offers comprehensive solutions for container and application management",
							}),
						],
					}),
					y.jsxs("div", {
						className: "flex flex-row justify-center items-center gap-4",
						children: [
							y.jsx("div", {
								className:
									"flex flex-col justify-center items-center bg-white border border-black w-[400px] h-[300px] rounded-lg hover:shadow-lg",
								children: y.jsxs("div", {
									className:
										"flex flex-col justify-start items-start gap-4 p-4",
									children: [
										y.jsx("div", {
											className: "bg-blue-600 h-10 w-10 rounded-full",
										}),
										y.jsx("h2", {
											className: "text-2xl font-bold",
											children: "Container Marketplace",
										}),
										y.jsx("p", {
											className: "text-medium font-medium",
											children:
												"Explore and purchase from our extensive container library, all verified and ready for instant deployment.",
										}),
									],
								}),
							}),
							y.jsx("div", {
								className:
									"flex flex-col justify-center items-center bg-white border border-black w-[400px] h-[300px] rounded-lg hover:shadow-lg",
								children: y.jsxs("div", {
									className:
										"flex flex-col justify-start items-start gap-4 p-4",
									children: [
										y.jsx("div", {
											className: "bg-blue-600 h-10 w-10 rounded-full",
										}),
										y.jsx("h2", {
											className: "text-2xl font-bold",
											children: "Container Marketplace",
										}),
										y.jsx("p", {
											className: "text-medium font-medium",
											children:
												"Explore and purchase from our extensive container library, all verified and ready for instant deployment.",
										}),
									],
								}),
							}),
							y.jsx("div", {
								className:
									"flex flex-col justify-center items-center bg-white border border-black w-[400px] h-[300px] rounded-lg hover:shadow-lg",
								children: y.jsxs("div", {
									className:
										"flex flex-col justify-start items-start gap-4 p-4",
									children: [
										y.jsx("div", {
											className: "bg-blue-600 h-10 w-10 rounded-full",
										}),
										y.jsx("h2", {
											className: "text-2xl font-bold",
											children: "Container Marketplace",
										}),
										y.jsx("p", {
											className: "text-medium font-medium",
											children:
												"Explore and purchase from our extensive container library, all verified and ready for instant deployment.",
										}),
									],
								}),
							}),
						],
					}),
				],
			}),
			y.jsx("div", {
				className: "flex justify-center items-center mb-20",
				children: y.jsx("div", {
					className: "bg-blue-600 w-[90%] h-[300px] rounded-xl",
					children: y.jsxs("div", {
						className:
							"flex flex-row items-center h-full gap-4 justify-around px-10",
						children: [
							y.jsxs("div", {
								className: "flex flex-col gap-4",
								children: [
									y.jsx("h1", {
										className: "text-2xl font-bold text-white",
										children: "Ready to transform your container management?",
									}),
									y.jsxs("p", {
										className: "text-xl font-medium text-white",
										children: [
											"Join thousands of businesses using SumoPod to simplify their container and ",
											y.jsx("br", {}),
											" application infrastructure.",
										],
									}),
								],
							}),
							y.jsxs("div", {
								className: "flex flex-row gap-4",
								children: [
									y.jsx("button", {
										type: "button",
										className:
											"bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg",
										children: "See App Template",
									}),
									y.jsx("button", {
										type: "button",
										className: "bg-white text-black px-7 py-3 rounded-lg",
										children: "Get Started",
									}),
								],
							}),
						],
					}),
				}),
			}),
			y.jsx(lc, {}),
		],
	});
}
function ix() {
	const u = async () => {
		await Ir.auth.signInWithOAuth({
			provider: "google",
			options: {
				redirectTo: "https://cloone-sumopod.netlify.app/dashboard/services",
			},
		});
	};
	return y.jsxs(y.Fragment, {
		children: [
			y.jsx(ic, {}),
			y.jsx("div", {
				className: "flex justify-center items-center h-screen",
				children: y.jsxs("div", {
					className:
						"bg-white p-8 rounded-lg shadow-lg w-[500px] flex flex-col gap-4 border border-black",
					children: [
						y.jsxs("div", {
							className: "text-center pb-4",
							children: [
								y.jsx("h1", {
									className: "text-2xl font-bold",
									children: "Welcome back",
								}),
								y.jsx("p", {
									className: "text-sm",
									children: "Sign in to your account to continue",
								}),
							],
						}),
						y.jsx("button", {
							type: "button",
							onClick: u,
							className: "bg-blue-600 text-white py-2 px-4 rounded-lg w-full",
							children: "Google",
						}),
						y.jsxs("div", {
							className: "flex flex-col gap-2 mt-2",
							children: [
								y.jsx("label", { htmlFor: "email", children: "Email Address" }),
								y.jsx("input", {
									className: "border border-black rounded-lg p-2 w-full",
								}),
							],
						}),
						y.jsxs("p", {
							className: "mt-4 text-center",
							children: [
								"Don't have an account? ",
								y.jsx("a", { href: "/", children: "Register" }),
							],
						}),
					],
				}),
			}),
			y.jsx(lc, {}),
		],
	});
}
function rx() {
	return y.jsxs("div", {
		className: "ml-[300px] p-6",
		children: [
			y.jsxs("div", {
				className: "flex items-center justify-between",
				children: [
					y.jsxs("div", {
						children: [
							y.jsx("h1", {
								className: "text-2xl font-bold",
								children: "Services",
							}),
							y.jsx("p", { children: "Manage your managed services" }),
						],
					}),
					y.jsxs("div", {
						children: [
							y.jsx("button", {
								type: "button",
								className: "bg-gray-300 text-black px-4 py-2 rounded-lg mr-2",
								children: "refresh",
							}),
							y.jsx("button", {
								type: "button",
								className: "bg-blue-500 text-white px-4 py-2 rounded-lg",
								children: "Add Service",
							}),
						],
					}),
				],
			}),
			y.jsx("div", {
				className: "mt-10",
				children: y.jsxs("table", {
					className: "min-w-full border border-gray-300",
					children: [
						y.jsx("thead", {
							children: y.jsxs("tr", {
								children: [
									y.jsx("th", {
										className: "px-4 py-2 border-b text-center",
										children: "Name",
									}),
									y.jsx("th", {
										className: "px-4 py-2 border-b text-center",
										children: "Type",
									}),
									y.jsx("th", {
										className: "px-4 py-2 border-b text-center",
										children: "Status",
									}),
									y.jsx("th", {
										className: "px-4 py-2 border-b text-center",
										children: "Plan",
									}),
									y.jsx("th", {
										className: "px-4 py-2 border-b text-center",
										children: "Auto Renewal",
									}),
									y.jsx("th", {
										className: "px-4 py-2 border-b text-center",
										children: "Expiry",
									}),
									y.jsx("th", {
										className: "px-4 py-2 border-b text-center",
										children: "Action",
									}),
								],
							}),
						}),
						y.jsx("tbody", {
							children: y.jsxs("tr", {
								children: [
									y.jsx("td", {
										className: "px-4 py-2 border-b text-center",
										children: "n8n test",
									}),
									y.jsx("td", {
										className: "px-4 py-2 border-b text-center",
										children: "n8n Plus",
									}),
									y.jsx("td", {
										className: "px-4 py-2 border-b text-center",
										children: "active",
									}),
									y.jsx("td", {
										className: "px-4 py-2 border-b",
										children: y.jsxs("div", {
											className: "text-center",
											children: [
												y.jsx("h4", { children: "n8n Plus" }),
												y.jsx("p", { children: "1000 credits/month" }),
											],
										}),
									}),
									y.jsx("td", {
										className: "px-4 py-2 border-b text-center",
										children: y.jsx("input", {
											className: "w-4 h-4",
											type: "checkbox",
										}),
									}),
									y.jsx("td", {
										className: "px-4 py-2 border-b text-center",
										children: "2025-01-01",
									}),
									y.jsx("td", {
										className: "px-4 py-2 border-b text-center",
										children: y.jsx("button", {
											type: "button",
											className: "bg-blue-500 text-white px-4 py-2 rounded-lg",
											children: "Manage",
										}),
									}),
								],
							}),
						}),
					],
				}),
			}),
		],
	});
}
function sx() {
	return y.jsx(y.Fragment, {
		children: y.jsxs("div", {
			className: "ml-[300px] p-6",
			children: [
				y.jsx("div", {
					className: "flex items-center justify-between",
					children: y.jsxs("div", {
						children: [
							y.jsx("h1", {
								className: "text-2xl font-bold",
								children: "Setting",
							}),
							y.jsx("p", {
								children: "Manage your account settings and preferences",
							}),
						],
					}),
				}),
				y.jsx("div", {
					children: y.jsx("div", {
						className:
							"bg-white p-6 rounded-lg shadow-lg mt-6 h-screen flex justify-center items-center",
						children: y.jsx("h1", {
							className: "text-6xl font-bold text-center",
							children: "Halaman Setting",
						}),
					}),
				}),
			],
		}),
	});
}
function ux() {
	return y.jsx(y.Fragment, {
		children: y.jsxs("div", {
			className: "ml-[300px] p-6",
			children: [
				y.jsx("div", {
					className: "flex items-center justify-between",
					children: y.jsxs("div", {
						children: [
							y.jsx("h1", {
								className: "text-2xl font-bold",
								children: "Support",
							}),
							y.jsx("p", {
								children: "Get help and support for your SumoPod services",
							}),
						],
					}),
				}),
				y.jsx("div", {
					children: y.jsx("div", {
						className:
							"bg-white p-6 rounded-lg shadow-lg mt-6 h-screen flex justify-center items-center",
						children: y.jsx("h1", {
							className: "text-6xl font-bold text-center",
							children: "Halaman support",
						}),
					}),
				}),
			],
		}),
	});
}
function ox() {
	return y.jsxs(y.Fragment, {
		children: [
			y.jsx(ic, {}),
			y.jsxs("section", {
				className:
					"flex flex-col items-center justify-center text-center gap-10 my-20",
				children: [
					y.jsxs("div", {
						children: [
							y.jsx("h1", {
								className: "text-3xl font-bold",
								children: "Application Templates",
							}),
							y.jsx("p", {
								children:
									"Choose from our curated collection of application templates and deploy them in seconds",
							}),
						],
					}),
					y.jsxs("div", {
						className: "flex flex-col items-center justify-center gap-4",
						children: [
							y.jsx("input", {
								type: "text",
								className: "border border-gray-300 rounded-md p-2 w-[600px]",
							}),
							y.jsxs("div", {
								className: "flex flex-row",
								children: [
									y.jsx("div", {
										className:
											"bg-blue-500 text-white rounded-full py-2 px-4 ml-2",
										children: y.jsx("p", { children: "All" }),
									}),
									y.jsx("div", {
										className:
											"bg-blue-500 text-white rounded-full py-2 px-4 ml-2",
										children: y.jsx("p", { children: "All" }),
									}),
									y.jsx("div", {
										className:
											"bg-blue-500 text-white rounded-full py-2 px-4 ml-2",
										children: y.jsx("p", { children: "All" }),
									}),
									y.jsx("div", {
										className:
											"bg-blue-500 text-white rounded-full py-2 px-4 ml-2",
										children: y.jsx("p", { children: "All" }),
									}),
								],
							}),
						],
					}),
					y.jsxs("div", {
						className: "flex flex-row gap-4",
						children: [
							y.jsx("div", {
								className:
									"bg-white border-2 border-black rounded-lg p-4 w-[400px] h-[300px]",
							}),
							y.jsx("div", {
								className:
									"bg-white border-2 border-black rounded-lg p-4 w-[400px] h-[300px]",
							}),
							y.jsx("div", {
								className:
									"bg-white border-2 border-black rounded-lg p-4 w-[400px] h-[300px]",
							}),
						],
					}),
					y.jsx("div", {
						className:
							"bg-white border-2 border-black rounded-lg p-4 w-[80%] h-[200px]",
					}),
				],
			}),
			y.jsx(lc, {}),
		],
	});
}
function cx() {
	return (
		X.useEffect(() => {
			(async () => {
				const { data: l } = await Ir.auth.getSession();
				l.session &&
					window.location.hash &&
					window.history.replaceState(null, "", window.location.pathname);
			})();
		}, []),
		y.jsx(T0, {
			children: y.jsxs(g0, {
				children: [
					y.jsx(Nt, { path: "/", element: y.jsx(lx, {}) }),
					y.jsx(Nt, { path: "/templates", element: y.jsx(ox, {}) }),
					y.jsx(Nt, { path: "/login", element: y.jsx(ix, {}) }),
					y.jsxs(Nt, {
						element: y.jsx(ax, {}),
						children: [
							y.jsx(Nt, {
								path: "/dashboard/services",
								element: y.jsx(rx, {}),
							}),
							y.jsx(Nt, { path: "/dashboard/billing", element: y.jsx(ex, {}) }),
							y.jsx(Nt, { path: "/dashboard/ai", element: y.jsx(k_, {}) }),
							y.jsx(Nt, {
								path: "/dashboard/affiliate",
								element: y.jsx(z_, {}),
							}),
							y.jsx(Nt, { path: "/dashboard/setting", element: y.jsx(sx, {}) }),
							y.jsx(Nt, { path: "/dashboard/support", element: y.jsx(ux, {}) }),
							y.jsx(Nt, {
								path: "/dashboard/beli-emas",
								element: y.jsx(q_, {}),
							}),
						],
					}),
				],
			}),
		})
	);
}
const fx = Eg.createRoot(document.getElementById("root"));
fx.render(y.jsx(ip.StrictMode, { children: y.jsx(cx, {}) }));
//# sourceMappingURL=index-CKl1pZot.js.map
