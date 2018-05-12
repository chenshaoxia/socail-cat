var DateFormatter;
function mustPassCheck(e) {
	$(e).children(".form-validate").each(function(e) {
		"block" === $(this).css("display") && $("#signup-form-submit").css("background-color", "darkgrey").attr("disabled", !0)
	})
}
function checkNotNull(e, t) {
	$(e).blur(function() {
		console.log("" === $(this).val().trim()), "" === $(this).val() ? $(this).siblings(t).css("display", "block") : $(this).siblings(t).css("display", "none")
	})
}
function checkStrong(e, t, n) {
	$(e).blur(function() {
		$(this).val().trim().length < n && "" !== $(this).val().trim() ? $(t).css("display", "block") : $(t).css("display", "none")
	})
}
function checkEquel(e, t, n) {
	$(n).blur(function() {
		$(this).val() !== $(e).val() ? $(t).css("display", "block") : $(t).css("display", "none")
	})
}
function checkReg(t, n, i) {
	$(t).blur(function() {
		var e = $(t).val();
		i.test(e) || "" === e.trim() ? $(n).css("display", "none") : $(n).css("display", "block")
	})
}
function validateForm() {
	var e = 0;
	if ($(".skill-edit-input-icon").each(function() {
			if ("none" === $(this).css("display")) return e++, !1
		}), 0 === e) return !0
}
function setBtn(e, t, n) {
	e.attr("disabled", t), e.css("background-color", n)
}
function handleSearch(e) {
	13 === e.keyCode && (window.location.href = "search.html")
}
function getStorageSupport() {
	return window.sessionStorage ? window.sessionStorage : window.localStorage ? window.localStorage : null
}
function showStorageSearchData(e) {
	var t = e.getItem("data-category"),
		n = e.getItem("data-filter"),
		i = e.getItem("data-skill"),
		r = e.getItem("data-reward"),
		o = e.getItem("data-buy"),
		a = e.getItem("data-accept");
	console.log("category " + t + " filer " + n + " skill " + i + " reward " + r + " buy " + o + " accept " + a)
}
function changeColor(e, t, n, i) {
	e.siblings(e).css(i), e.css(n)
}
function storageDataAndBindClass(t, e, n, i, r) {
	r.getItem(n) || r.setItem(n, "0"), showStorageSearchData(r), $(t).children(e).each(function() {
		$(this).attr(n) === r.getItem(n) && ($(this).addClass(i), filterUserPost(t, r.getItem(n))), $(this).click(function() {
			var e = $(this).attr(n);
			r.setItem(n, e), $(this).addClass(i), $(this).siblings().removeClass(i), filterUserPost(t, e)
		})
	})
}
function filterUserPost(e, i) {
	var t = [ "#user-skill-nav", "#user-reward-nav", "#user-buy-nav", "#user-accept-nav" ],
		r = [ "待审核", "未过审", "已过审", "进行中", "被投诉", "已处理", "已完成", "被接受" ],
		o = [ "进行中", "已完成", "投诉中", "已处理" ];
	console.log(e), e !== t[0] && e !== t[1] || $(".post-user-item-message-content-logo").each(function() {
		var e = $(this).text().trim(),
			n = $(this).parent().parent().parent().parent().parent();
		switch (i) {
		case "0":
			n.css("display", "block");
			break;case "1":
			t(e, 0);
			break;case "2":
			t(e, 1);
			break;case "3":
			t(e, 2);
			break;case "4":
			t(e, 3);
			break;case "5":
			t(e, 4);
			break;case "6":
			t(e, 5);
			break;case "7":
			t(e, 6)
		}
		function t(e, t) {
			e !== r[t] ? n.css("display", "none") : n.css("display", "block")
		}
	}), e !== t[2] && e !== t[3] || $(".post-user-item-message-content-logo").each(function() {
		var e = $(this).text().trim(),
			n = $(this).parent().parent().parent().parent().parent();
		switch (i) {
		case "0":
			n.css("display", "block");
			break;case "1":
			t(e, 0);
			break;case "2":
			t(e, 1);
			break;case "3":
			t(e, 2);
			break;case "4":
			t(e, 3)
		}
		function t(e, t) {
			e !== o[t] ? n.css("display", "none") : n.css("display", "block")
		}
	})
}
!function(e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document)
			throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(w, e) {
	"use strict";
	var t = [],
		k = w.document,
		i = Object.getPrototypeOf,
		s = t.slice,
		g = t.concat,
		l = t.push,
		r = t.indexOf,
		n = {},
		o = n.toString,
		m = n.hasOwnProperty,
		a = m.toString,
		c = a.call(Object),
		v = {},
		y = function(e) {
			return "function" == typeof e && "number" != typeof e.nodeType
		},
		b = function(e) {
			return null != e && e === e.window
		},
		u = {
			type : !0,
			src : !0,
			noModule : !0
		};
	function _(e, t, n) {
		var i,
			r = (t = t || k).createElement("script");
		if (r.text = e, n)
			for (i in u) n[i] && (r[i] = n[i]);
		t.head.appendChild(r).parentNode.removeChild(r)
	}
	function T(e) {
		return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
	}
	var D = function(e, t) {
			return new D.fn.init(e, t)
		},
		d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	function f(e) {
		var t = !!e && "length" in e && e.length,
			n = T(e);
		return !y(e) && !b(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
	}
	D.fn = D.prototype = {
		jquery : "3.3.1",
		constructor : D,
		length : 0,
		toArray : function() {
			return s.call(this)
		},
		get : function(e) {
			return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
		},
		pushStack : function(e) {
			var t = D.merge(this.constructor(), e);
			return t.prevObject = this, t
		},
		each : function(e) {
			return D.each(this, e)
		},
		map : function(n) {
			return this.pushStack(D.map(this, function(e, t) {
				return n.call(e, t, e)
			}))
		},
		slice : function() {
			return this.pushStack(s.apply(this, arguments))
		},
		first : function() {
			return this.eq(0)
		},
		last : function() {
			return this.eq(-1)
		},
		eq : function(e) {
			var t = this.length,
				n = +e + (e < 0 ? t : 0);
			return this.pushStack(0 <= n && n < t ? [ this[n] ] : [])
		},
		end : function() {
			return this.prevObject || this.constructor()
		},
		push : l,
		sort : t.sort,
		splice : t.splice
	}, D.extend = D.fn.extend = function() {
		var e,
			t,
			n,
			i,
			r,
			o,
			a = arguments[0] || {},
			s = 1,
			l = arguments.length,
			c = !1;
		for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || y(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
			if (null != (e = arguments[s]))
				for (t in e) n = a[t], a !== (i = e[t]) && (c && i && (D.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && D.isPlainObject(n) ? n : {}, a[t] = D.extend(c, o, i)) : void 0 !== i && (a[t] = i));
		return a
	}, D.extend({
		expando : "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
		isReady : !0,
		error : function(e) {
			throw new Error(e)
		},
		noop : function() {},
		isPlainObject : function(e) {
			var t,
				n;
			return !(!e || "[object Object]" !== o.call(e) || (t = i(e)) && ("function" != typeof (n = m.call(t, "constructor") && t.constructor) || a.call(n) !== c))
		},
		isEmptyObject : function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		globalEval : function(e) {
			_(e)
		},
		each : function(e, t) {
			var n,
				i = 0;
			if (f(e))
				for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
					;
			else
				for (i in e)
					if (!1 === t.call(e[i], i, e[i])) break;
			return e
		},
		trim : function(e) {
			return null == e ? "" : (e + "").replace(d, "")
		},
		makeArray : function(e, t) {
			var n = t || [];
			return null != e && (f(Object(e)) ? D.merge(n, "string" == typeof e ? [ e ] : e) : l.call(n, e)), n
		},
		inArray : function(e, t, n) {
			return null == t ? -1 : r.call(t, e, n)
		},
		merge : function(e, t) {
			for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
			return e.length = r, e
		},
		grep : function(e, t, n) {
			for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]);
			return i
		},
		map : function(e, t, n) {
			var i,
				r,
				o = 0,
				a = [];
			if (f(e))
				for (i = e.length; o < i; o++) null != (r = t(e[o], o, n)) && a.push(r);
			else
				for (o in e) null != (r = t(e[o], o, n)) && a.push(r);
			return g.apply([], a)
		},
		guid : 1,
		support : v
	}), "function" == typeof Symbol && (D.fn[Symbol.iterator] = t[Symbol.iterator]), D.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
		n["[object " + t + "]"] = t.toLowerCase()
	});
	var h = function(n) {
		var e,
			h,
			_,
			o,
			r,
			p,
			d,
			g,
			T,
			l,
			c,
			x,
			w,
			a,
			k,
			m,
			s,
			u,
			v,
			D = "sizzle" + 1 * new Date,
			y = n.document,
			S = 0,
			i = 0,
			f = ae(),
			b = ae(),
			C = ae(),
			E = function(e, t) {
				return e === t && (c = !0), 0
			},
			O = {}.hasOwnProperty,
			t = [],
			A = t.pop,
			I = t.push,
			N = t.push,
			M = t.slice,
			j = function(e, t) {
				for (var n = 0, i = e.length; n < i; n++)
					if (e[n] === t) return n;
				return -1
			},
			P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			W = "[\\x20\\t\\r\\n\\f]",
			H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
			L = "\\[" + W + "*(" + H + ")(?:" + W + "*([*^$|!~]?=)" + W + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + W + "*\\]",
			$ = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + L + ")*)|.*)\\)|)",
			F = new RegExp(W + "+", "g"),
			R = new RegExp("^" + W + "+|((?:^|[^\\\\])(?:\\\\.)*)" + W + "+$", "g"),
			q = new RegExp("^" + W + "*," + W + "*"),
			B = new RegExp("^" + W + "*([>+~]|" + W + ")" + W + "*"),
			z = new RegExp("=" + W + "*([^\\]'\"]*?)" + W + "*\\]", "g"),
			Y = new RegExp($),
			U = new RegExp("^" + H + "$"),
			V = {
				ID : new RegExp("^#(" + H + ")"),
				CLASS : new RegExp("^\\.(" + H + ")"),
				TAG : new RegExp("^(" + H + "|[*])"),
				ATTR : new RegExp("^" + L),
				PSEUDO : new RegExp("^" + $),
				CHILD : new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + W + "*(even|odd|(([+-]|)(\\d*)n|)" + W + "*(?:([+-]|)" + W + "*(\\d+)|))" + W + "*\\)|)", "i"),
				bool : new RegExp("^(?:" + P + ")$", "i"),
				needsContext : new RegExp("^" + W + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + W + "*((?:-\\d)?\\d*)" + W + "*\\)|)(?=[^-]|$)", "i")
			},
			J = /^(?:input|select|textarea|button)$/i,
			K = /^h\d$/i,
			G = /^[^{]+\{\s*\[native \w/,
			Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			X = /[+~]/,
			Z = new RegExp("\\\\([\\da-f]{1,6}" + W + "?|(" + W + ")|.)", "ig"),
			ee = function(e, t, n) {
				var i = "0x" + t - 65536;
				return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
			},
			te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			ne = function(e, t) {
				return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
			},
			ie = function() {
				x()
			},
			re = ye(function(e) {
				return !0 === e.disabled && ("form" in e || "label" in e)
			}, {
				dir : "parentNode",
				next : "legend"
			});
		try {
			N.apply(t = M.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
		} catch (n) {
			N = {
				apply : t.length ? function(e, t) {
					I.apply(e, M.call(t))
				} : function(e, t) {
					for (var n = e.length, i = 0; e[n++] = t[i++];)
						;
					e.length = n - 1
				}
			}
		}
		function oe(e, t, n, i) {
			var r,
				o,
				a,
				s,
				l,
				c,
				u,
				d = t && t.ownerDocument,
				f = t ? t.nodeType : 9;
			if (n = n || [], "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f) return n;
			if (!i && ((t ? t.ownerDocument || t : y) !== w && x(t), t = t || w, k)) {
				if (11 !== f && (l = Q.exec(e)))
					if (r = l[1]) {
						if (9 === f) {
							if (!(a = t.getElementById(r))) return n;
							if (a.id === r) return n.push(a), n
						} else if (d && (a = d.getElementById(r)) && v(t, a) && a.id === r) return n.push(a), n
					} else {
						if (l[2]) return N.apply(n, t.getElementsByTagName(e)), n;
						if ((r = l[3]) && h.getElementsByClassName && t.getElementsByClassName) return N.apply(n, t.getElementsByClassName(r)), n
				}
				if (h.qsa && !C[e + " "] && (!m || !m.test(e))) {
					if (1 !== f) d = t, u = e;
					else if ("object" !== t.nodeName.toLowerCase()) {
						for ((s = t.getAttribute("id")) ? s = s.replace(te, ne) : t.setAttribute("id", s = D), o = (c = p(e)).length; o--;) c[o] = "#" + s + " " + ve(c[o]);
						u = c.join(","), d = X.test(e) && ge(t.parentNode) || t
					}
					if (u) try {
							return N.apply(n, d.querySelectorAll(u)), n
						} catch (e) {} finally {
							s === D && t.removeAttribute("id")
					}
				}
			}
			return g(e.replace(R, "$1"), t, n, i)
		}
		function ae() {
			var i = [];
			return function e(t, n) {
				return i.push(t + " ") > _.cacheLength &&
					delete e[i.shift()]
					, e[t + " "] = n
			}
		}
		function se(e) {
			return e[D] = !0, e
		}
		function le(e) {
			var t = w.createElement("fieldset");
			try {
				return !!e(t)
			} catch (e) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}
		function ce(e, t) {
			for (var n = e.split("|"), i = n.length; i--;) _.attrHandle[n[i]] = t
		}
		function ue(e, t) {
			var n = t && e,
				i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
			if (i) return i;
			if (n)
				for (; n = n.nextSibling;)
					if (n === t) return -1;
			return e ? 1 : -1
		}
		function de(t) {
			return function(e) {
				return "input" === e.nodeName.toLowerCase() && e.type === t
			}
		}
		function fe(n) {
			return function(e) {
				var t = e.nodeName.toLowerCase();
				return ("input" === t || "button" === t) && e.type === n
			}
		}
		function he(t) {
			return function(e) {
				return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && re(e) === t : e.disabled === t : "label" in e && e.disabled === t
			}
		}
		function pe(a) {
			return se(function(o) {
				return o = +o, se(function(e, t) {
						for (var n, i = a([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
					})
			})
		}
		function ge(e) {
			return e && void 0 !== e.getElementsByTagName && e
		}
		for (e in h = oe.support = {}, r = oe.isXML = function(e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return !!t && "HTML" !== t.nodeName
			}, x = oe.setDocument = function(e) {
				var t,
					n,
					i = e ? e.ownerDocument || e : y;
				return i !== w && 9 === i.nodeType && i.documentElement && (a = (w = i).documentElement, k = !r(w), y !== w && (n = w.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", ie, !1) : n.attachEvent && n.attachEvent("onunload", ie)), h.attributes = le(function(e) {
						return e.className = "i", !e.getAttribute("className")
					}), h.getElementsByTagName = le(function(e) {
						return e.appendChild(w.createComment("")), !e.getElementsByTagName("*").length
					}), h.getElementsByClassName = G.test(w.getElementsByClassName), h.getById = le(function(e) {
						return a.appendChild(e).id = D, !w.getElementsByName || !w.getElementsByName(D).length
					}), h.getById ? (_.filter.ID = function(e) {
						var t = e.replace(Z, ee);
						return function(e) {
							return e.getAttribute("id") === t
						}
					}, _.find.ID = function(e, t) {
						if (void 0 !== t.getElementById && k) {
							var n = t.getElementById(e);
							return n ? [ n ] : []
						}
					}) : (_.filter.ID = function(e) {
						var n = e.replace(Z, ee);
						return function(e) {
							var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
							return t && t.value === n
						}
					}, _.find.ID = function(e, t) {
						if (void 0 !== t.getElementById && k) {
							var n,
								i,
								r,
								o = t.getElementById(e);
							if (o) {
								if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ];
								for (r = t.getElementsByName(e), i = 0; o = r[i++];)
									if ((n = o.getAttributeNode("id")) && n.value === e) return [ o ]
							}
							return []
						}
					}), _.find.TAG = h.getElementsByTagName ? function(e, t) {
						return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
					} : function(e, t) {
						var n,
							i = [],
							r = 0,
							o = t.getElementsByTagName(e);
						if ("*" === e) {
							for (; n = o[r++];) 1 === n.nodeType && i.push(n);
							return i
						}
						return o
					}, _.find.CLASS = h.getElementsByClassName && function(e, t) {
						if (void 0 !== t.getElementsByClassName && k) return t.getElementsByClassName(e)
					}, s = [], m = [], (h.qsa = G.test(w.querySelectorAll)) && (le(function(e) {
						a.appendChild(e).innerHTML = "<a id='" + D + "'></a><select id='" + D + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + W + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + W + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + D + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + D + "+*").length || m.push(".#.+[+~]")
					}), le(function(e) {
						e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
						var t = w.createElement("input");
						t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + W + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
					})), (h.matchesSelector = G.test(u = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && le(function(e) {
						h.disconnectedMatch = u.call(e, "*"), u.call(e, "[s!='']:x"), s.push("!=", $)
					}), m = m.length && new RegExp(m.join("|")), s = s.length && new RegExp(s.join("|")), t = G.test(a.compareDocumentPosition), v = t || G.test(a.contains) ? function(e, t) {
						var n = 9 === e.nodeType ? e.documentElement : e,
							i = t && t.parentNode;
						return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
					} : function(e, t) {
						if (t)
							for (; t = t.parentNode;)
								if (t === e) return !0;
						return !1
					}, E = t ? function(e, t) {
						if (e === t) return c = !0, 0;
						var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
						return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === w || e.ownerDocument === y && v(y, e) ? -1 : t === w || t.ownerDocument === y && v(y, t) ? 1 : l ? j(l, e) - j(l, t) : 0 : 4 & n ? -1 : 1)
					} : function(e, t) {
						if (e === t) return c = !0, 0;
						var n,
							i = 0,
							r = e.parentNode,
							o = t.parentNode,
							a = [ e ],
							s = [ t ];
						if (!r || !o) return e === w ? -1 : t === w ? 1 : r ? -1 : o ? 1 : l ? j(l, e) - j(l, t) : 0;
						if (r === o) return ue(e, t);
						for (n = e; n = n.parentNode;) a.unshift(n);
						for (n = t; n = n.parentNode;) s.unshift(n);
						for (; a[i] === s[i];) i++;
						return i ? ue(a[i], s[i]) : a[i] === y ? -1 : s[i] === y ? 1 : 0
					}), w
			}, oe.matches = function(e, t) {
				return oe(e, null, null, t)
			}, oe.matchesSelector = function(e, t) {
				if ((e.ownerDocument || e) !== w && x(e), t = t.replace(z, "='$1']"), h.matchesSelector && k && !C[t + " "] && (!s || !s.test(t)) && (!m || !m.test(t))) try {
						var n = u.call(e, t);
						if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
					} catch (e) {} return 0 < oe(t, w, null, [ e ]).length
			}, oe.contains = function(e, t) {
				return (e.ownerDocument || e) !== w && x(e), v(e, t)
			}, oe.attr = function(e, t) {
				(e.ownerDocument || e) !== w && x(e);
				var n = _.attrHandle[t.toLowerCase()],
					i = n && O.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !k) : void 0;
				return void 0 !== i ? i : h.attributes || !k ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
			}, oe.escape = function(e) {
				return (e + "").replace(te, ne)
			}, oe.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, oe.uniqueSort = function(e) {
				var t,
					n = [],
					i = 0,
					r = 0;
				if (c = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort(E), c) {
					for (; t = e[r++];) t === e[r] && (i = n.push(r));
					for (; i--;) e.splice(n[i], 1)
				}
				return l = null, e
			}, o = oe.getText = function(e) {
				var t,
					n = "",
					i = 0,
					r = e.nodeType;
				if (r) {
					if (1 === r || 9 === r || 11 === r) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
					} else if (3 === r || 4 === r) return e.nodeValue
				} else
					for (; t = e[i++];) n += o(t);
				return n
			}, (_ = oe.selectors = {
				cacheLength : 50,
				createPseudo : se,
				match : V,
				attrHandle : {},
				find : {},
				relative : {
					">" : {
						dir : "parentNode",
						first : !0
					},
					" " : {
						dir : "parentNode"
					},
					"+" : {
						dir : "previousSibling",
						first : !0
					},
					"~" : {
						dir : "previousSibling"
					}
				},
				preFilter : {
					ATTR : function(e) {
						return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD : function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
					},
					PSEUDO : function(e) {
						var t,
							n = !e[6] && e[2];
						return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && Y.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter : {
					TAG : function(e) {
						var t = e.replace(Z, ee).toLowerCase();
						return "*" === e ? function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS : function(e) {
						var t = f[e + " "];
						return t || (t = new RegExp("(^|" + W + ")" + e + "(" + W + "|$)")) && f(e, function(e) {
								return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
							})
					},
					ATTR : function(n, i, r) {
						return function(e) {
							var t = oe.attr(e, n);
							return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t.replace(F, " ") + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-"))
						}
					},
					CHILD : function(p, e, t, g, m) {
						var v = "nth" !== p.slice(0, 3),
							y = "last" !== p.slice(-4),
							b = "of-type" === e;
						return 1 === g && 0 === m ? function(e) {
							return !!e.parentNode
						} : function(e, t, n) {
							var i,
								r,
								o,
								a,
								s,
								l,
								c = v !== y ? "nextSibling" : "previousSibling",
								u = e.parentNode,
								d = b && e.nodeName.toLowerCase(),
								f = !n && !b,
								h = !1;
							if (u) {
								if (v) {
									for (; c;) {
										for (a = e; a = a[c];)
											if (b ? a.nodeName.toLowerCase() === d : 1 === a.nodeType) return !1;
										l = c = "only" === p && !l && "nextSibling"
									}
									return !0
								}
								if (l = [ y ? u.firstChild : u.lastChild ], y && f) {
									for (h = (s = (i = (r = (o = (a = u)[D] || (a[D] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[p] || [])[0] === S && i[1]) && i[2], a = s && u.childNodes[s]; a = ++s && a && a[c] || (h = s = 0) || l.pop();)
										if (1 === a.nodeType && ++h && a === e) {
											r[p] = [ S, s, h ];break
									}
								} else if (f && (h = s = (i = (r = (o = (a = e)[D] || (a[D] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[p] || [])[0] === S && i[1]), !1 === h)
									for (; (a = ++s && a && a[c] || (h = s = 0) || l.pop()) && ((b ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++h || (f && ((r = (o = a[D] || (a[D] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[p] = [ S, h ]), a !== e));)
										;
								return (h -= m) === g || h % g == 0 && 0 <= h / g
							}
						}
					},
					PSEUDO : function(e, o) {
						var t,
							a = _.pseudos[e] || _.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
						return a[D] ? a(o) : 1 < a.length ? (t = [ e, e, "", o ], _.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, t) {
							for (var n, i = a(e, o), r = i.length; r--;) e[n = j(e, i[r])] = !(t[n] = i[r])
						}) : function(e) {
							return a(e, 0, t)
						}) : a
					}
				},
				pseudos : {
					not : se(function(e) {
						var i = [],
							r = [],
							s = d(e.replace(R, "$1"));
						return s[D] ? se(function(e, t, n, i) {
							for (var r, o = s(e, null, i, []), a = e.length; a--;) (r = o[a]) && (e[a] = !(t[a] = r))
						}) : function(e, t, n) {
							return i[0] = e, s(i, null, n, r), i[0] = null, !r.pop()
						}
					}),
					has : se(function(t) {
						return function(e) {
							return 0 < oe(t, e).length
						}
					}),
					contains : se(function(t) {
						return t = t.replace(Z, ee), function(e) {
								return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
						}
					}),
					lang : se(function(n) {
						return U.test(n || "") || oe.error("unsupported lang: " + n), n = n.replace(Z, ee).toLowerCase(), function(e) {
								var t;
								do {
									if (t = k ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
								} while ((e = e.parentNode) && 1 === e.nodeType);
								return !1
						}
					}),
					target : function(e) {
						var t = n.location && n.location.hash;
						return t && t.slice(1) === e.id
					},
					root : function(e) {
						return e === a
					},
					focus : function(e) {
						return e === w.activeElement && (!w.hasFocus || w.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
					},
					enabled : he(!1),
					disabled : he(!0),
					checked : function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !!e.checked || "option" === t && !!e.selected
					},
					selected : function(e) {
						return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
					},
					empty : function(e) {
						for (e = e.firstChild; e; e = e.nextSibling)
							if (e.nodeType < 6) return !1;
						return !0
					},
					parent : function(e) {
						return !_.pseudos.empty(e)
					},
					header : function(e) {
						return K.test(e.nodeName)
					},
					input : function(e) {
						return J.test(e.nodeName)
					},
					button : function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text : function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first : pe(function() {
						return [ 0 ]
					}),
					last : pe(function(e, t) {
						return [ t - 1 ]
					}),
					eq : pe(function(e, t, n) {
						return [ n < 0 ? n + t : n ]
					}),
					even : pe(function(e, t) {
						for (var n = 0; n < t; n += 2) e.push(n);
						return e
					}),
					odd : pe(function(e, t) {
						for (var n = 1; n < t; n += 2) e.push(n);
						return e
					}),
					lt : pe(function(e, t, n) {
						for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
						return e
					}),
					gt : pe(function(e, t, n) {
						for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
						return e
					})
				}
			}).pseudos.nth = _.pseudos.eq, {
				radio : !0,
				checkbox : !0,
				file : !0,
				password : !0,
				image : !0
		}) _.pseudos[e] = de(e);
		for (e in {submit : !0, reset : !0}) _.pseudos[e] = fe(e);
		function me() {
		}
		function ve(e) {
			for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
			return i
		}
		function ye(s, e, t) {
			var l = e.dir,
				c = e.next,
				u = c || l,
				d = t && "parentNode" === u,
				f = i++;
			return e.first ? function(e, t, n) {
				for (; e = e[l];)
					if (1 === e.nodeType || d) return s(e, t, n);
				return !1
			} : function(e, t, n) {
				var i,
					r,
					o,
					a = [ S, f ];
				if (n) {
					for (; e = e[l];)
						if ((1 === e.nodeType || d) && s(e, t, n)) return !0
				} else
					for (; e = e[l];)
						if (1 === e.nodeType || d)
							if (r = (o = e[D] || (e[D] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), c && c === e.nodeName.toLowerCase())
								e = e[l] || e;else {
								if ((i = r[u]) && i[0] === S && i[1] === f) return a[2] = i[2];
								if ((r[u] = a)[2] = s(e, t, n)) return !0
				}
				return !1
			}
		}
		function be(r) {
			return 1 < r.length ? function(e, t, n) {
				for (var i = r.length; i--;)
					if (!r[i](e, t, n)) return !1;
				return !0
			} : r[0]
		}
		function _e(e, t, n, i, r) {
			for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++) (o = e[s]) && (n && !n(o, i, r) || (a.push(o), c && t.push(s)));
			return a
		}
		function Te(h, p, g, m, v, e) {
			return m && !m[D] && (m = Te(m)), v && !v[D] && (v = Te(v, e)), se(function(e, t, n, i) {
					var r,
						o,
						a,
						s = [],
						l = [],
						c = t.length,
						u = e || function(e, t, n) {
							for (var i = 0, r = t.length; i < r; i++) oe(e, t[i], n);
							return n
						}(p || "*", n.nodeType ? [ n ] : n, []),
						d = !h || !e && p ? u : _e(u, s, h, n, i),
						f = g ? v || (e ? h : c || m) ? [] : t : d;
					if (g && g(d, f, n, i), m)
						for (r = _e(f, l), m(r, [], n, i), o = r.length; o--;) (a = r[o]) && (f[l[o]] = !(d[l[o]] = a));
					if (e) {
						if (v || h) {
							if (v) {
								for (r = [], o = f.length; o--;) (a = f[o]) && r.push(d[o] = a);
								v(null, f = [], r, i)
							}
							for (o = f.length; o--;) (a = f[o]) && -1 < (r = v ? j(e, a) : s[o]) && (e[r] = !(t[r] = a))
						}
					} else f = _e(f === t ? f.splice(c, f.length) : f), v ? v(null, t, f, i) : N.apply(t, f)
				})
		}
		function xe(e) {
			for (var r, t, n, i = e.length, o = _.relative[e[0].type], a = o || _.relative[" "], s = o ? 1 : 0, l = ye(function(e) {
						return e === r
					}, a, !0), c = ye(function(e) {
						return -1 < j(r, e)
					}, a, !0), u = [ function(e, t, n) {
						var i = !o && (n || t !== T) || ((r = t).nodeType ? l(e, t, n) : c(e, t, n));
						return r = null, i
					} ];s < i; s++)
				if (t = _.relative[e[s].type])
					u = [ ye(be(u), t) ];else {
					if ((t = _.filter[e[s].type].apply(null, e[s].matches))[D]) {
						for (n = ++s; n < i && !_.relative[e[n].type]; n++)
							;
						return Te(1 < s && be(u), 1 < s && ve(e.slice(0, s - 1).concat({
								value : " " === e[s - 2].type ? "*" : ""
							})).replace(R, "$1"), t, s < n && xe(e.slice(s, n)), n < i && xe(e = e.slice(n)), n < i && ve(e))
					}
					u.push(t)
			}
			return be(u)
		}
		return me.prototype = _.filters = _.pseudos, _.setFilters = new me, p = oe.tokenize = function(e, t) {
				var n,
					i,
					r,
					o,
					a,
					s,
					l,
					c = b[e + " "];
				if (c) return t ? 0 : c.slice(0);
				for (a = e, s = [], l = _.preFilter; a;) {
					for (o in n && !(i = q.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(r = [])), n = !1, (i = B.exec(a)) && (n = i.shift(), r.push({
							value : n,
							type : i[0].replace(R, " ")
						}), a = a.slice(n.length)), _.filter) !(i = V[o].exec(a)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
							value : n,
							type : o,
							matches : i
						}), a = a.slice(n.length));
					if (!n) break
				}
				return t ? a.length : a ? oe.error(e) : b(e, s).slice(0)
			}, d = oe.compile = function(e, t) {
				var n,
					m,
					v,
					y,
					b,
					i,
					r = [],
					o = [],
					a = C[e + " "];
				if (!a) {
					for (t || (t = p(e)), n = t.length; n--;) (a = xe(t[n]))[D] ? r.push(a) : o.push(a);
					(a = C(e, (m = o, v = r, y = 0 < v.length, b = 0 < m.length, i = function(e, t, n, i, r) {
						var o,
							a,
							s,
							l = 0,
							c = "0",
							u = e && [],
							d = [],
							f = T,
							h = e || b && _.find.TAG("*", r),
							p = S += null == f ? 1 : Math.random() || .1,
							g = h.length;
						for (r && (T = t === w || t || r); c !== g && null != (o = h[c]); c++) {
							if (b && o) {
								for (a = 0, t || o.ownerDocument === w || (x(o), n = !k); s = m[a++];)
									if (s(o, t || w, n)) {
										i.push(o);break
								}
								r && (S = p)
							}
							y && ((o = !s && o) && l--, e && u.push(o))
						}
						if (l += c, y && c !== l) {
							for (a = 0; s = v[a++];) s(u, d, t, n);
							if (e) {
								if (0 < l)
									for (; c--;) u[c] || d[c] || (d[c] = A.call(i));
								d = _e(d)
							}
							N.apply(i, d), r && !e && 0 < d.length && 1 < l + v.length && oe.uniqueSort(i)
						}
						return r && (S = p, T = f), u
					}, y ? se(i) : i))).selector = e
				}
				return a
			}, g = oe.select = function(e, t, n, i) {
				var r,
					o,
					a,
					s,
					l,
					c = "function" == typeof e && e,
					u = !i && p(e = c.selector || e);
				if (n = n || [], 1 === u.length) {
					if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && k && _.relative[o[1].type]) {
						if (!(t = (_.find.ID(a.matches[0].replace(Z, ee), t) || [])[0])) return n;
						c && (t = t.parentNode), e = e.slice(o.shift().value.length)
					}
					for (r = V.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !_.relative[s = a.type]);)
						if ((l = _.find[s]) && (i = l(a.matches[0].replace(Z, ee), X.test(o[0].type) && ge(t.parentNode) || t))) {
							if (o.splice(r, 1), !(e = i.length && ve(o))) return N.apply(n, i), n;
							break
					}
				}
				return (c || d(e, u))(i, t, !k, n, !t || X.test(e) && ge(t.parentNode) || t), n
			}, h.sortStable = D.split("").sort(E).join("") === D, h.detectDuplicates = !!c, x(), h.sortDetached = le(function(e) {
				return 1 & e.compareDocumentPosition(w.createElement("fieldset"))
			}), le(function(e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || ce("type|href|height|width", function(e, t, n) {
				if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}), h.attributes && le(function(e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || ce("value", function(e, t, n) {
				if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
			}), le(function(e) {
				return null == e.getAttribute("disabled")
			}) || ce(P, function(e, t, n) {
				var i;
				if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
			}), oe
	}(w);
	D.find = h, D.expr = h.selectors, D.expr[":"] = D.expr.pseudos, D.uniqueSort = D.unique = h.uniqueSort, D.text = h.getText, D.isXMLDoc = h.isXML, D.contains = h.contains, D.escapeSelector = h.escape;
	var p = function(e, t, n) {
			for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;)
				if (1 === e.nodeType) {
					if (r && D(e).is(n)) break;
					i.push(e)
			}
			return i
		},
		x = function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		},
		S = D.expr.match.needsContext;
	function C(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
	}
	var E = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
	function O(e, n, i) {
		return y(n) ? D.grep(e, function(e, t) {
			return !!n.call(e, t, e) !== i
		}) : n.nodeType ? D.grep(e, function(e) {
			return e === n !== i
		}) : "string" != typeof n ? D.grep(e, function(e) {
			return -1 < r.call(n, e) !== i
		}) : D.filter(n, e, i)
	}
	D.filter = function(e, t, n) {
		var i = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? D.find.matchesSelector(i, e) ? [ i ] : [] : D.find.matches(e, D.grep(t, function(e) {
				return 1 === e.nodeType
			}))
	}, D.fn.extend({
		find : function(e) {
			var t,
				n,
				i = this.length,
				r = this;
			if ("string" != typeof e) return this.pushStack(D(e).filter(function() {
					for (t = 0; t < i; t++)
						if (D.contains(r[t], this)) return !0
				}));
			for (n = this.pushStack([]), t = 0; t < i; t++) D.find(e, r[t], n);
			return 1 < i ? D.uniqueSort(n) : n
		},
		filter : function(e) {
			return this.pushStack(O(this, e || [], !1))
		},
		not : function(e) {
			return this.pushStack(O(this, e || [], !0))
		},
		is : function(e) {
			return !!O(this, "string" == typeof e && S.test(e) ? D(e) : e || [], !1).length
		}
	});
	var A,
		I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(D.fn.init = function(e, t, n) {
		var i,
			r;
		if (!e) return this;
		if (n = n || A, "string" == typeof e) {
			if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [ null, e, null ] : I.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
			if (i[1]) {
				if (t = t instanceof D ? t[0] : t, D.merge(this, D.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : k, !0)), E.test(i[1]) && D.isPlainObject(t))
					for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
				return this
			}
			return (r = k.getElementById(i[2])) && (this[0] = r, this.length = 1), this
		}
		return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(D) : D.makeArray(e, this)
	}).prototype = D.fn, A = D(k);
	var N = /^(?:parents|prev(?:Until|All))/,
		M = {
			children : !0,
			contents : !0,
			next : !0,
			prev : !0
		};
	function j(e, t) {
		for (; (e = e[t]) && 1 !== e.nodeType;)
			;
		return e
	}
	D.fn.extend({
		has : function(e) {
			var t = D(e, this),
				n = t.length;
			return this.filter(function() {
				for (var e = 0; e < n; e++)
					if (D.contains(this, t[e])) return !0
			})
		},
		closest : function(e, t) {
			var n,
				i = 0,
				r = this.length,
				o = [],
				a = "string" != typeof e && D(e);
			if (!S.test(e))
				for (; i < r; i++)
					for (n = this[i]; n && n !== t; n = n.parentNode)
						if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && D.find.matchesSelector(n, e))) {
							o.push(n);break
			}
			return this.pushStack(1 < o.length ? D.uniqueSort(o) : o)
		},
		index : function(e) {
			return e ? "string" == typeof e ? r.call(D(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add : function(e, t) {
			return this.pushStack(D.uniqueSort(D.merge(this.get(), D(e, t))))
		},
		addBack : function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), D.each({
		parent : function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents : function(e) {
			return p(e, "parentNode")
		},
		parentsUntil : function(e, t, n) {
			return p(e, "parentNode", n)
		},
		next : function(e) {
			return j(e, "nextSibling")
		},
		prev : function(e) {
			return j(e, "previousSibling")
		},
		nextAll : function(e) {
			return p(e, "nextSibling")
		},
		prevAll : function(e) {
			return p(e, "previousSibling")
		},
		nextUntil : function(e, t, n) {
			return p(e, "nextSibling", n)
		},
		prevUntil : function(e, t, n) {
			return p(e, "previousSibling", n)
		},
		siblings : function(e) {
			return x((e.parentNode || {}).firstChild, e)
		},
		children : function(e) {
			return x(e.firstChild)
		},
		contents : function(e) {
			return C(e, "iframe") ? e.contentDocument : (C(e, "template") && (e = e.content || e), D.merge([], e.childNodes))
		}
	}, function(i, r) {
		D.fn[i] = function(e, t) {
			var n = D.map(this, r, e);
			return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = D.filter(t, n)), 1 < this.length && (M[i] || D.uniqueSort(n), N.test(i) && n.reverse()), this.pushStack(n)
		}
	});
	var P = /[^\x20\t\r\n\f]+/g;
	function W(e) {
		return e
	}
	function H(e) {
		throw e
	}
	function L(e, t, n, i) {
		var r;
		try {
			e && y(r = e.promise) ? r.call(e).done(t).fail(n) : e && y(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [ e ].slice(i))
		} catch (e) {
			n.apply(void 0, [ e ])
		}
	}
	D.Callbacks = function(i) {
		var e,
			n;
		i = "string" == typeof i ? (e = i, n = {}, D.each(e.match(P) || [], function(e, t) {
			n[t] = !0
		}), n) : D.extend({}, i);
		var r,
			t,
			o,
			a,
			s = [],
			l = [],
			c = -1,
			u = function() {
				for (a = a || i.once, o = r = !0; l.length; c = -1)
					for (t = l.shift(); ++c < s.length;) !1 === s[c].apply(t[0], t[1]) && i.stopOnFalse && (c = s.length, t = !1);
				i.memory || (t = !1), r = !1, a && (s = t ? [] : "")
			},
			d = {
				add : function() {
					return s && (t && !r && (c = s.length - 1, l.push(t)), function n(e) {
							D.each(e, function(e, t) {
								y(t) ? i.unique && d.has(t) || s.push(t) : t && t.length && "string" !== T(t) && n(t)
							})
						}(arguments), t && !r && u()), this
				},
				remove : function() {
					return D.each(arguments, function(e, t) {
							for (var n; -1 < (n = D.inArray(t, s, n));) s.splice(n, 1), n <= c && c--
						}), this
				},
				has : function(e) {
					return e ? -1 < D.inArray(e, s) : 0 < s.length
				},
				empty : function() {
					return s && (s = []), this
				},
				disable : function() {
					return a = l = [], s = t = "", this
				},
				disabled : function() {
					return !s
				},
				lock : function() {
					return a = l = [], t || r || (s = t = ""), this
				},
				locked : function() {
					return !!a
				},
				fireWith : function(e, t) {
					return a || (t = [ e, (t = t || []).slice ? t.slice() : t ], l.push(t), r || u()), this
				},
				fire : function() {
					return d.fireWith(this, arguments), this
				},
				fired : function() {
					return !!o
				}
			};
		return d
	}, D.extend({
		Deferred : function(e) {
			var o = [ [ "notify", "progress", D.Callbacks("memory"), D.Callbacks("memory"), 2 ], [ "resolve", "done", D.Callbacks("once memory"), D.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", D.Callbacks("once memory"), D.Callbacks("once memory"), 1, "rejected" ] ],
				r = "pending",
				a = {
					state : function() {
						return r
					},
					always : function() {
						return s.done(arguments).fail(arguments), this
					},
					catch : function(e) {
						return a.then(null, e)
					},
					pipe : function() {
						var r = arguments;
						return D.Deferred(function(i) {
							D.each(o, function(e, t) {
								var n = y(r[t[4]]) && r[t[4]];
								s[t[1]](function() {
									var e = n && n.apply(this, arguments);
									e && y(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [ e ] : arguments)
								})
							}), r = null
						}).promise()
					},
					then : function(t, n, i) {
						var l = 0;
						function c(r, o, a, s) {
							return function() {
								var n = this,
									i = arguments,
									e = function() {
										var e,
											t;
										if (!(r < l)) {
											if ((e = a.apply(n, i)) === o.promise())
												throw new TypeError("Thenable self-resolution");
											t = e && ("object" == typeof e || "function" == typeof e) && e.then, y(t) ? s ? t.call(e, c(l, o, W, s), c(l, o, H, s)) : (l++, t.call(e, c(l, o, W, s), c(l, o, H, s), c(l, o, W, o.notifyWith))) : (a !== W && (n = void 0, i = [ e ]), (s || o.resolveWith)(n, i))
										}
									},
									t = s ? e : function() {
										try {
											e()
										} catch (e) {
											D.Deferred.exceptionHook && D.Deferred.exceptionHook(e, t.stackTrace), l <= r + 1 && (a !== H && (n = void 0, i = [ e ]), o.rejectWith(n, i))
										}
									};
								r ? t() : (D.Deferred.getStackHook && (t.stackTrace = D.Deferred.getStackHook()), w.setTimeout(t))
							}
						}
						return D.Deferred(function(e) {
							o[0][3].add(c(0, e, y(i) ? i : W, e.notifyWith)), o[1][3].add(c(0, e, y(t) ? t : W)), o[2][3].add(c(0, e, y(n) ? n : H))
						}).promise()
					},
					promise : function(e) {
						return null != e ? D.extend(e, a) : a
					}
				},
				s = {};
			return D.each(o, function(e, t) {
					var n = t[2],
						i = t[5];
					a[t[1]] = n.add, i && n.add(function() {
						r = i
					}, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
						return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
					}, s[t[0] + "With"] = n.fireWith
				}), a.promise(s), e && e.call(s, s), s
		},
		when : function(e) {
			var n = arguments.length,
				t = n,
				i = Array(t),
				r = s.call(arguments),
				o = D.Deferred(),
				a = function(t) {
					return function(e) {
						i[t] = this, r[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(i, r)
					}
				};
			if (n <= 1 && (L(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || y(r[t] && r[t].then))) return o.then();
			for (; t--;) L(r[t], a(t), o.reject);
			return o.promise()
		}
	});
	var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	D.Deferred.exceptionHook = function(e, t) {
		w.console && w.console.warn && e && $.test(e.name) && w.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
	}, D.readyException = function(e) {
		w.setTimeout(function() {
			throw e
		})
	};
	var F = D.Deferred();
	function R() {
		k.removeEventListener("DOMContentLoaded", R), w.removeEventListener("load", R), D.ready()
	}
	D.fn.ready = function(e) {
		return F.then(e).catch(function(e) {
				D.readyException(e)
			}), this
	}, D.extend({
		isReady : !1,
		readyWait : 1,
		ready : function(e) {
			(!0 === e ? --D.readyWait : D.isReady) || ((D.isReady = !0) !== e && 0 < --D.readyWait || F.resolveWith(k, [ D ]))
		}
	}), D.ready.then = F.then, "complete" === k.readyState || "loading" !== k.readyState && !k.documentElement.doScroll ? w.setTimeout(D.ready) : (k.addEventListener("DOMContentLoaded", R), w.addEventListener("load", R));
	var q = function(e, t, n, i, r, o, a) {
			var s = 0,
				l = e.length,
				c = null == n;
			if ("object" === T(n))
				for (s in r = !0, n) q(e, t, s, n[s], !0, o, a);
			else if (void 0 !== i && (r = !0, y(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
					return c.call(D(e), n)
				})), t))
				for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
			return r ? e : c ? t.call(e) : l ? t(e[0], n) : o
		},
		B = /^-ms-/,
		z = /-([a-z])/g;
	function Y(e, t) {
		return t.toUpperCase()
	}
	function U(e) {
		return e.replace(B, "ms-").replace(z, Y)
	}
	var V = function(e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	};
	function J() {
		this.expando = D.expando + J.uid++
	}
	J.uid = 1, J.prototype = {
		cache : function(e) {
			var t = e[this.expando];
			return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
					value : t,
					configurable : !0
				}))), t
		},
		set : function(e, t, n) {
			var i,
				r = this.cache(e);
			if ("string" == typeof t)
				r[U(t)] = n;else
				for (i in t) r[U(i)] = t[i];
			return r
		},
		get : function(e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)]
		},
		access : function(e, t, n) {
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove : function(e, t) {
			var n,
				i = e[this.expando];
			if (void 0 !== i) {
				if (void 0 !== t) {
					n = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in i ? [ t ] : t.match(P) || []).length;
					for (; n--;)
						delete i[t[n]]
				}
				(void 0 === t || D.isEmptyObject(i)) && (e.nodeType ? e[this.expando] = void 0 :
					delete e[this.expando]
				)
			}
		},
		hasData : function(e) {
			var t = e[this.expando];
			return void 0 !== t && !D.isEmptyObject(t)
		}
	};
	var K = new J,
		G = new J,
		Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		X = /[A-Z]/g;
	function Z(e, t, n) {
		var i,
			r;
		if (void 0 === n && 1 === e.nodeType)
			if (i = "data-" + t.replace(X, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
				try {
					n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : Q.test(r) ? JSON.parse(r) : r)
				} catch (e) {} G.set(e, t, n)
			} else
				n = void 0;
		return n
	}
	D.extend({
		hasData : function(e) {
			return G.hasData(e) || K.hasData(e)
		},
		data : function(e, t, n) {
			return G.access(e, t, n)
		},
		removeData : function(e, t) {
			G.remove(e, t)
		},
		_data : function(e, t, n) {
			return K.access(e, t, n)
		},
		_removeData : function(e, t) {
			K.remove(e, t)
		}
	}), D.fn.extend({
		data : function(n, e) {
			var t,
				i,
				r,
				o = this[0],
				a = o && o.attributes;
			if (void 0 === n) {
				if (this.length && (r = G.get(o), 1 === o.nodeType && !K.get(o, "hasDataAttrs"))) {
					for (t = a.length; t--;) a[t] && 0 === (i = a[t].name).indexOf("data-") && (i = U(i.slice(5)), Z(o, i, r[i]));
					K.set(o, "hasDataAttrs", !0)
				}
				return r
			}
			return "object" == typeof n ? this.each(function() {
				G.set(this, n)
			}) : q(this, function(e) {
				var t;
				if (o && void 0 === e) {
					if (void 0 !== (t = G.get(o, n))) return t;
					if (void 0 !== (t = Z(o, n))) return t
				} else this.each(function() {
						G.set(this, n, e)
					})
			}, null, e, 1 < arguments.length, null, !0)
		},
		removeData : function(e) {
			return this.each(function() {
				G.remove(this, e)
			})
		}
	}), D.extend({
		queue : function(e, t, n) {
			var i;
			if (e) return t = (t || "fx") + "queue", i = K.get(e, t), n && (!i || Array.isArray(n) ? i = K.access(e, t, D.makeArray(n)) : i.push(n)), i || []
		},
		dequeue : function(e, t) {
			t = t || "fx";
			var n = D.queue(e, t),
				i = n.length,
				r = n.shift(),
				o = D._queueHooks(e, t);
			"inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"),
			delete o.stop
			, r.call(e, function() {
				D.dequeue(e, t)
			}, o)), !i && o && o.empty.fire()
		},
		_queueHooks : function(e, t) {
			var n = t + "queueHooks";
			return K.get(e, n) || K.access(e, n, {
					empty : D.Callbacks("once memory").add(function() {
						K.remove(e, [ t + "queue", n ])
					})
				})
		}
	}), D.fn.extend({
		queue : function(t, n) {
			var e = 2;
			return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? D.queue(this[0], t) : void 0 === n ? this : this.each(function() {
					var e = D.queue(this, t, n);
					D._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && D.dequeue(this, t)
				})
		},
		dequeue : function(e) {
			return this.each(function() {
				D.dequeue(this, e)
			})
		},
		clearQueue : function(e) {
			return this.queue(e || "fx", [])
		},
		promise : function(e, t) {
			var n,
				i = 1,
				r = D.Deferred(),
				o = this,
				a = this.length,
				s = function() {
					--i || r.resolveWith(o, [ o ])
				};
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = K.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
			return s(), r.promise(t)
		}
	});
	var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
		ne = [ "Top", "Right", "Bottom", "Left" ],
		ie = function(e, t) {
			return "none" === (e = t || e).style.display || "" === e.style.display && D.contains(e.ownerDocument, e) && "none" === D.css(e, "display")
		},
		re = function(e, t, n, i) {
			var r,
				o,
				a = {};
			for (o in t) a[o] = e.style[o], e.style[o] = t[o];
			for (o in r = n.apply(e, i || []), t) e.style[o] = a[o];
			return r
		};
	function oe(e, t, n, i) {
		var r,
			o,
			a = 20,
			s = i ? function() {
				return i.cur()
			} : function() {
				return D.css(e, t, "")
			},
			l = s(),
			c = n && n[3] || (D.cssNumber[t] ? "" : "px"),
			u = (D.cssNumber[t] || "px" !== c && +l) && te.exec(D.css(e, t));
		if (u && u[3] !== c) {
			for (l /= 2, c = c || u[3], u = +l || 1; a--;) D.style(e, t, u + c), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), u /= o;
			u *= 2, D.style(e, t, u + c), n = n || []
		}
		return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
	}
	var ae = {};
	function se(e, t) {
		for (var n, i, r = [], o = 0, a = e.length; o < a; o++) (i = e[o]).style && (n = i.style.display, t ? ("none" === n && (r[o] = K.get(i, "display") || null, r[o] || (i.style.display = "")), "" === i.style.display && ie(i) && (r[o] = (d = c = l = void 0, c = (s = i).ownerDocument, u = s.nodeName, (d = ae[u]) || (l = c.body.appendChild(c.createElement(u)), d = D.css(l, "display"), l.parentNode.removeChild(l), "none" === d && (d = "block"), ae[u] = d)))) : "none" !== n && (r[o] = "none", K.set(i, "display", n)));
		var s,
			l,
			c,
			u,
			d;
		for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]);
		return e
	}
	D.fn.extend({
		show : function() {
			return se(this, !0)
		},
		hide : function() {
			return se(this)
		},
		toggle : function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				ie(this) ? D(this).show() : D(this).hide()
			})
		}
	});
	var le = /^(?:checkbox|radio)$/i,
		ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
		ue = /^$|^module$|\/(?:java|ecma)script/i,
		de = {
			option : [ 1, "<select multiple='multiple'>", "</select>" ],
			thead : [ 1, "<table>", "</table>" ],
			col : [ 2, "<table><colgroup>", "</colgroup></table>" ],
			tr : [ 2, "<table><tbody>", "</tbody></table>" ],
			td : [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
			_default : [ 0, "", "" ]
		};
	function fe(e, t) {
		var n;
		return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && C(e, t) ? D.merge([ e ], n) : n
	}
	function he(e, t) {
		for (var n = 0, i = e.length; n < i; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
	}
	de.optgroup = de.option, de.tbody = de.tfoot = de.colgroup = de.caption = de.thead, de.th = de.td;
	var pe,
		ge,
		me = /<|&#?\w+;/;
	function ve(e, t, n, i, r) {
		for (var o, a, s, l, c, u, d = t.createDocumentFragment(), f = [], h = 0, p = e.length; h < p; h++)
			if ((o = e[h]) || 0 === o)
				if ("object" === T(o)) D.merge(f, o.nodeType ? [ o ] : o);
				else if (me.test(o)) {
					for (a = a || d.appendChild(t.createElement("div")), s = (ce.exec(o) || [ "", "" ])[1].toLowerCase(), l = de[s] || de._default, a.innerHTML = l[1] + D.htmlPrefilter(o) + l[2], u = l[0]; u--;) a = a.lastChild;
					D.merge(f, a.childNodes), (a = d.firstChild).textContent = ""
				} else f.push(t.createTextNode(o));
		for (d.textContent = "", h = 0; o = f[h++];)
			if (i && -1 < D.inArray(o, i)) r && r.push(o);
			else if (c = D.contains(o.ownerDocument, o), a = fe(d.appendChild(o), "script"), c && he(a), n)
				for (u = 0; o = a[u++];) ue.test(o.type || "") && n.push(o);
		return d
	}
	pe = k.createDocumentFragment().appendChild(k.createElement("div")), (ge = k.createElement("input")).setAttribute("type", "radio"), ge.setAttribute("checked", "checked"), ge.setAttribute("name", "t"), pe.appendChild(ge), v.checkClone = pe.cloneNode(!0).cloneNode(!0).lastChild.checked, pe.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!pe.cloneNode(!0).lastChild.defaultValue;
	var ye = k.documentElement,
		be = /^key/,
		_e = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		Te = /^([^.]*)(?:\.(.+)|)/;
	function xe() {
		return !0
	}
	function we() {
		return !1
	}
	function ke() {
		try {
			return k.activeElement
		} catch (e) {}
	}
	function De(e, t, n, i, r, o) {
		var a,
			s;
		if ("object" == typeof t) {
			for (s in "string" != typeof n && (i = i || n, n = void 0), t) De(e, s, n, i, t[s], o);
			return e
		}
		if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r)
			r = we;
		else if (!r) return e;
		return 1 === o && (a = r, (r = function(e) {
				return D().off(e), a.apply(this, arguments)
			}).guid = a.guid || (a.guid = D.guid++)), e.each(function() {
				D.event.add(this, t, r, i, n)
			})
	}
	D.event = {
		global : {},
		add : function(t, e, n, i, r) {
			var o,
				a,
				s,
				l,
				c,
				u,
				d,
				f,
				h,
				p,
				g,
				m = K.get(t);
			if (m)
				for (n.handler && (n = (o = n).handler, r = o.selector), r && D.find.matchesSelector(ye, r), n.guid || (n.guid = D.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(e) {
						return void 0 !== D && D.event.triggered !== e.type ? D.event.dispatch.apply(t, arguments) : void 0
					}), c = (e = (e || "").match(P) || [ "" ]).length; c--;) h = g = (s = Te.exec(e[c]) || [])[1], p = (s[2] || "").split(".").sort(), h && (d = D.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, d = D.event.special[h] || {}, u = D.extend({
						type : h,
						origType : g,
						data : i,
						handler : n,
						guid : n.guid,
						selector : r,
						needsContext : r && D.expr.match.needsContext.test(r),
						namespace : p.join(".")
					}, o), (f = l[h]) || ((f = l[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(t, i, p, a) || t.addEventListener && t.addEventListener(h, a)), d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), r ? f.splice(f.delegateCount++, 0, u) : f.push(u), D.event.global[h] = !0)
		},
		remove : function(e, t, n, i, r) {
			var o,
				a,
				s,
				l,
				c,
				u,
				d,
				f,
				h,
				p,
				g,
				m = K.hasData(e) && K.get(e);
			if (m && (l = m.events)) {
				for (c = (t = (t || "").match(P) || [ "" ]).length; c--;)
					if (h = g = (s = Te.exec(t[c]) || [])[1], p = (s[2] || "").split(".").sort(), h) {
						for (d = D.event.special[h] || {}, f = l[h = (i ? d.delegateType : d.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) u = f[o], !r && g !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(e, u));
						a && !f.length && (d.teardown && !1 !== d.teardown.call(e, p, m.handle) || D.removeEvent(e, h, m.handle),
						delete l[h]
						)
					} else
						for (h in l) D.event.remove(e, h + t[c], n, i, !0);
				D.isEmptyObject(l) && K.remove(e, "handle events")
			}
		},
		dispatch : function(e) {
			var t,
				n,
				i,
				r,
				o,
				a,
				s = D.event.fix(e),
				l = new Array(arguments.length),
				c = (K.get(this, "events") || {})[s.type] || [],
				u = D.event.special[s.type] || {};
			for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
			if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
				for (a = D.event.handlers.call(this, s, c), t = 0; (r = a[t++]) && !s.isPropagationStopped();)
					for (s.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (i = ((D.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
				return u.postDispatch && u.postDispatch.call(this, s), s.result
			}
		},
		handlers : function(e, t) {
			var n,
				i,
				r,
				o,
				a,
				s = [],
				l = t.delegateCount,
				c = e.target;
			if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
				for (; c !== this; c = c.parentNode || this)
					if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
						for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[r = (i = t[n]).selector + " "] && (a[r] = i.needsContext ? -1 < D(r, this).index(c) : D.find(r, this, null, [ c ]).length), a[r] && o.push(i);
						o.length && s.push({
							elem : c,
							handlers : o
						})
			}
			return c = this, l < t.length && s.push({
					elem : c,
					handlers : t.slice(l)
				}), s
		},
		addProp : function(t, e) {
			Object.defineProperty(D.Event.prototype, t, {
				enumerable : !0,
				configurable : !0,
				get : y(e) ? function() {
					if (this.originalEvent) return e(this.originalEvent)
				} : function() {
					if (this.originalEvent) return this.originalEvent[t]
				},
				set : function(e) {
					Object.defineProperty(this, t, {
						enumerable : !0,
						configurable : !0,
						writable : !0,
						value : e
					})
				}
			})
		},
		fix : function(e) {
			return e[D.expando] ? e : new D.Event(e)
		},
		special : {
			load : {
				noBubble : !0
			},
			focus : {
				trigger : function() {
					if (this !== ke() && this.focus) return this.focus(), !1
				},
				delegateType : "focusin"
			},
			blur : {
				trigger : function() {
					if (this === ke() && this.blur) return this.blur(), !1
				},
				delegateType : "focusout"
			},
			click : {
				trigger : function() {
					if ("checkbox" === this.type && this.click && C(this, "input")) return this.click(), !1
				},
				_default : function(e) {
					return C(e.target, "a")
				}
			},
			beforeunload : {
				postDispatch : function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, D.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, D.Event = function(e, t) {
		if (!(this instanceof D.Event)) return new D.Event(e, t);
		e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? xe : we, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && D.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[D.expando] = !0
	}, D.Event.prototype = {
		constructor : D.Event,
		isDefaultPrevented : we,
		isPropagationStopped : we,
		isImmediatePropagationStopped : we,
		isSimulated : !1,
		preventDefault : function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = xe, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation : function() {
			var e = this.originalEvent;
			this.isPropagationStopped = xe, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation : function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = xe, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, D.each({
		altKey : !0,
		bubbles : !0,
		cancelable : !0,
		changedTouches : !0,
		ctrlKey : !0,
		detail : !0,
		eventPhase : !0,
		metaKey : !0,
		pageX : !0,
		pageY : !0,
		shiftKey : !0,
		view : !0,
		char : !0,
		charCode : !0,
		key : !0,
		keyCode : !0,
		button : !0,
		buttons : !0,
		clientX : !0,
		clientY : !0,
		offsetX : !0,
		offsetY : !0,
		pointerId : !0,
		pointerType : !0,
		screenX : !0,
		screenY : !0,
		targetTouches : !0,
		toElement : !0,
		touches : !0,
		which : function(e) {
			var t = e.button;
			return null == e.which && be.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && _e.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
		}
	}, D.event.addProp), D.each({
		mouseenter : "mouseover",
		mouseleave : "mouseout",
		pointerenter : "pointerover",
		pointerleave : "pointerout"
	}, function(e, r) {
		D.event.special[e] = {
			delegateType : r,
			bindType : r,
			handle : function(e) {
				var t,
					n = e.relatedTarget,
					i = e.handleObj;
				return n && (n === this || D.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
			}
		}
	}), D.fn.extend({
		on : function(e, t, n, i) {
			return De(this, e, t, n, i)
		},
		one : function(e, t, n, i) {
			return De(this, e, t, n, i, 1)
		},
		off : function(e, t, n) {
			var i,
				r;
			if (e && e.preventDefault && e.handleObj) return i = e.handleObj, D(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof e) {
				for (r in e) this.off(r, t, e[r]);
				return this
			}
			return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = we), this.each(function() {
					D.event.remove(this, e, n, t)
				})
		}
	});
	var Se = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		Ce = /<script|<style|<link/i,
		Ee = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	function Ae(e, t) {
		return C(e, "table") && C(11 !== t.nodeType ? t : t.firstChild, "tr") && D(e).children("tbody")[0] || e
	}
	function Ie(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}
	function Ne(e) {
		return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
	}
	function Me(e, t) {
		var n,
			i,
			r,
			o,
			a,
			s,
			l,
			c;
		if (1 === t.nodeType) {
			if (K.hasData(e) && (o = K.access(e), a = K.set(t, o), c = o.events))
				for (r in
					delete a.handle
					, a.events = {}, c)
					for (n = 0, i = c[r].length; n < i; n++) D.event.add(t, r, c[r][n]);
			G.hasData(e) && (s = G.access(e), l = D.extend({}, s), G.set(t, l))
		}
	}
	function je(n, i, r, o) {
		i = g.apply([], i);var e,
			t,
			a,
			s,
			l,
			c,
			u = 0,
			d = n.length,
			f = d - 1,
			h = i[0],
			p = y(h);
		if (p || 1 < d && "string" == typeof h && !v.checkClone && Ee.test(h)) return n.each(function(e) {
				var t = n.eq(e);
				p && (i[0] = h.call(this, e, t.html())), je(t, i, r, o)
			});
		if (d && (t = (e = ve(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
			for (s = (a = D.map(fe(e, "script"), Ie)).length; u < d; u++) l = e, u !== f && (l = D.clone(l, !0, !0), s && D.merge(a, fe(l, "script"))), r.call(n[u], l, u);
			if (s)
				for (c = a[a.length - 1].ownerDocument, D.map(a, Ne), u = 0; u < s; u++) l = a[u], ue.test(l.type || "") && !K.access(l, "globalEval") && D.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? D._evalUrl && D._evalUrl(l.src) : _(l.textContent.replace(Oe, ""), c, l))
		}
		return n
	}
	function Pe(e, t, n) {
		for (var i, r = t ? D.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || D.cleanData(fe(i)), i.parentNode && (n && D.contains(i.ownerDocument, i) && he(fe(i, "script")), i.parentNode.removeChild(i));
		return e
	}
	D.extend({
		htmlPrefilter : function(e) {
			return e.replace(Se, "<$1></$2>")
		},
		clone : function(e, t, n) {
			var i,
				r,
				o,
				a,
				s,
				l,
				c,
				u = e.cloneNode(!0),
				d = D.contains(e.ownerDocument, e);
			if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || D.isXMLDoc(e)))
				for (a = fe(u), i = 0, r = (o = fe(e)).length; i < r; i++) s = o[i], l = a[i], void 0, "input" === (c = l.nodeName.toLowerCase()) && le.test(s.type) ? l.checked = s.checked : "input" !== c && "textarea" !== c || (l.defaultValue = s.defaultValue);
			if (t)
				if (n)
					for (o = o || fe(e), a = a || fe(u), i = 0, r = o.length; i < r; i++) Me(o[i], a[i]);
				else Me(e, u);
			return 0 < (a = fe(u, "script")).length && he(a, !d && fe(e, "script")), u
		},
		cleanData : function(e) {
			for (var t, n, i, r = D.event.special, o = 0; void 0 !== (n = e[o]); o++)
				if (V(n)) {
					if (t = n[K.expando]) {
						if (t.events)
							for (i in t.events) r[i] ? D.event.remove(n, i) : D.removeEvent(n, i, t.handle);
						n[K.expando] = void 0
					}
					n[G.expando] && (n[G.expando] = void 0)
			}
		}
	}), D.fn.extend({
		detach : function(e) {
			return Pe(this, e, !0)
		},
		remove : function(e) {
			return Pe(this, e)
		},
		text : function(e) {
			return q(this, function(e) {
				return void 0 === e ? D.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append : function() {
			return je(this, arguments, function(e) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ae(this, e).appendChild(e)
			})
		},
		prepend : function() {
			return je(this, arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = Ae(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before : function() {
			return je(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after : function() {
			return je(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty : function() {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (D.cleanData(fe(e, !1)), e.textContent = "");
			return this
		},
		clone : function(e, t) {
			return e = null != e && e, t = null == t ? e : t, this.map(function() {
					return D.clone(this, e, t)
				})
		},
		html : function(e) {
			return q(this, function(e) {
				var t = this[0] || {},
					n = 0,
					i = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !Ce.test(e) && !de[(ce.exec(e) || [ "", "" ])[1].toLowerCase()]) {
					e = D.htmlPrefilter(e);try {
						for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (D.cleanData(fe(t, !1)), t.innerHTML = e);
						t = 0
					} catch (e) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith : function() {
			var n = [];
			return je(this, arguments, function(e) {
				var t = this.parentNode;
				D.inArray(this, n) < 0 && (D.cleanData(fe(this)), t && t.replaceChild(e, this))
			}, n)
		}
	}), D.each({
		appendTo : "append",
		prependTo : "prepend",
		insertBefore : "before",
		insertAfter : "after",
		replaceAll : "replaceWith"
	}, function(e, a) {
		D.fn[e] = function(e) {
			for (var t, n = [], i = D(e), r = i.length - 1, o = 0; o <= r; o++) t = o === r ? this : this.clone(!0), D(i[o])[a](t), l.apply(n, t.get());
			return this.pushStack(n)
		}
	});
	var We = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
		He = function(e) {
			var t = e.ownerDocument.defaultView;
			return t && t.opener || (t = w), t.getComputedStyle(e)
		},
		Le = new RegExp(ne.join("|"), "i");
	function $e(e, t, n) {
		var i,
			r,
			o,
			a,
			s = e.style;
		return (n = n || He(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || D.contains(e.ownerDocument, e) || (a = D.style(e, t)), !v.pixelBoxStyles() && We.test(a) && Le.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
	}
	function Fe(e, t) {
		return {
			get : function() {
				if (!e()) return (this.get = t).apply(this, arguments);
				delete this.get
			}
		}
	}
	!function() {
		function e() {
			if (l) {
				s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ye.appendChild(s).appendChild(l);
				var e = w.getComputedStyle(l);
				n = "1%" !== e.top, a = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), i = 36 === t(e.width), l.style.position = "absolute", r = 36 === l.offsetWidth || "absolute", ye.removeChild(s), l = null
			}
		}
		function t(e) {
			return Math.round(parseFloat(e))
		}
		var n,
			i,
			r,
			o,
			a,
			s = k.createElement("div"),
			l = k.createElement("div");
		l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, D.extend(v, {
			boxSizingReliable : function() {
				return e(), i
			},
			pixelBoxStyles : function() {
				return e(), o
			},
			pixelPosition : function() {
				return e(), n
			},
			reliableMarginLeft : function() {
				return e(), a
			},
			scrollboxSize : function() {
				return e(), r
			}
		}))
	}();
	var Re = /^(none|table(?!-c[ea]).+)/,
		qe = /^--/,
		Be = {
			position : "absolute",
			visibility : "hidden",
			display : "block"
		},
		ze = {
			letterSpacing : "0",
			fontWeight : "400"
		},
		Ye = [ "Webkit", "Moz", "ms" ],
		Ue = k.createElement("div").style;
	function Ve(e) {
		var t = D.cssProps[e];
		return t || (t = D.cssProps[e] = function(e) {
					if (e in Ue) return e;
					for (var t = e[0].toUpperCase() + e.slice(1), n = Ye.length; n--;)
						if ((e = Ye[n] + t) in Ue) return e
				}(e) || e), t
	}
	function Je(e, t, n) {
		var i = te.exec(t);
		return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
	}
	function Ke(e, t, n, i, r, o) {
		var a = "width" === t ? 1 : 0,
			s = 0,
			l = 0;
		if (n === (i ? "border" : "content")) return 0;
		for (; a < 4; a += 2) "margin" === n && (l += D.css(e, n + ne[a], !0, r)), i ? ("content" === n && (l -= D.css(e, "padding" + ne[a], !0, r)), "margin" !== n && (l -= D.css(e, "border" + ne[a] + "Width", !0, r))) : (l += D.css(e, "padding" + ne[a], !0, r), "padding" !== n ? l += D.css(e, "border" + ne[a] + "Width", !0, r) : s += D.css(e, "border" + ne[a] + "Width", !0, r));
		return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - .5))), l
	}
	function Ge(e, t, n) {
		var i = He(e),
			r = $e(e, t, i),
			o = "border-box" === D.css(e, "boxSizing", !1, i),
			a = o;
		if (We.test(r)) {
			if (!n) return r;
			r = "auto"
		}
		return a = a && (v.boxSizingReliable() || r === e.style[t]), ("auto" === r || !parseFloat(r) && "inline" === D.css(e, "display", !1, i)) && (r = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (r = parseFloat(r) || 0) + Ke(e, t, n || (o ? "border" : "content"), a, i, r) + "px"
	}
	function Qe(e, t, n, i, r) {
		return new Qe.prototype.init(e, t, n, i, r)
	}
	D.extend({
		cssHooks : {
			opacity : {
				get : function(e, t) {
					if (t) {
						var n = $e(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber : {
			animationIterationCount : !0,
			columnCount : !0,
			fillOpacity : !0,
			flexGrow : !0,
			flexShrink : !0,
			fontWeight : !0,
			lineHeight : !0,
			opacity : !0,
			order : !0,
			orphans : !0,
			widows : !0,
			zIndex : !0,
			zoom : !0
		},
		cssProps : {},
		style : function(e, t, n, i) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var r,
					o,
					a,
					s = U(t),
					l = qe.test(t),
					c = e.style;
				if (l || (t = Ve(s)), a = D.cssHooks[t] || D.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : c[t];
				"string" == (o = typeof n) && (r = te.exec(n)) && r[1] && (n = oe(e, t, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (D.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, i)) || (l ? c.setProperty(t, n) : c[t] = n))
			}
		},
		css : function(e, t, n, i) {
			var r,
				o,
				a,
				s = U(t);
			return qe.test(t) || (t = Ve(s)), (a = D.cssHooks[t] || D.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = $e(e, t, i)), "normal" === r && t in ze && (r = ze[t]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
		}
	}), D.each([ "height", "width" ], function(e, s) {
		D.cssHooks[s] = {
			get : function(e, t, n) {
				if (t) return !Re.test(D.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ge(e, s, n) : re(e, Be, function() {
						return Ge(e, s, n)
					})
			},
			set : function(e, t, n) {
				var i,
					r = He(e),
					o = "border-box" === D.css(e, "boxSizing", !1, r),
					a = n && Ke(e, s, n, o, r);
				return o && v.scrollboxSize() === r.position && (a -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(r[s]) - Ke(e, s, "border", !1, r) - .5)), a && (i = te.exec(t)) && "px" !== (i[3] || "px") && (e.style[s] = t, t = D.css(e, s)), Je(0, t, a)
			}
		}
	}), D.cssHooks.marginLeft = Fe(v.reliableMarginLeft, function(e, t) {
		if (t) return (parseFloat($e(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, {
					marginLeft : 0
				}, function() {
					return e.getBoundingClientRect().left
				})) + "px"
	}), D.each({
		margin : "",
		padding : "",
		border : "Width"
	}, function(r, o) {
		D.cssHooks[r + o] = {
			expand : function(e) {
				for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [ e ]; t < 4; t++) n[r + ne[t] + o] = i[t] || i[t - 2] || i[0];
				return n
			}
		}, "margin" !== r && (D.cssHooks[r + o].set = Je)
	}), D.fn.extend({
		css : function(e, t) {
			return q(this, function(e, t, n) {
				var i,
					r,
					o = {},
					a = 0;
				if (Array.isArray(t)) {
					for (i = He(e), r = t.length; a < r; a++) o[t[a]] = D.css(e, t[a], !1, i);
					return o
				}
				return void 0 !== n ? D.style(e, t, n) : D.css(e, t)
			}, e, t, 1 < arguments.length)
		}
	}), ((D.Tween = Qe).prototype = {
		constructor : Qe,
		init : function(e, t, n, i, r, o) {
			this.elem = e, this.prop = n, this.easing = r || D.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (D.cssNumber[n] ? "" : "px")
		},
		cur : function() {
			var e = Qe.propHooks[this.prop];
			return e && e.get ? e.get(this) : Qe.propHooks._default.get(this)
		},
		run : function(e) {
			var t,
				n = Qe.propHooks[this.prop];
			return this.options.duration ? this.pos = t = D.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Qe.propHooks._default.set(this), this
		}
	}).init.prototype = Qe.prototype, (Qe.propHooks = {
		_default : {
			get : function(e) {
				var t;
				return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = D.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
			},
			set : function(e) {
				D.fx.step[e.prop] ? D.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[D.cssProps[e.prop]] && !D.cssHooks[e.prop] ? e.elem[e.prop] = e.now : D.style(e.elem, e.prop, e.now + e.unit)
			}
		}
	}).scrollTop = Qe.propHooks.scrollLeft = {
		set : function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, D.easing = {
		linear : function(e) {
			return e
		},
		swing : function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		},
		_default : "swing"
	}, D.fx = Qe.prototype.init, D.fx.step = {};
	var Xe,
		Ze,
		et,
		tt,
		nt = /^(?:toggle|show|hide)$/,
		it = /queueHooks$/;
	function rt() {
		Ze && (!1 === k.hidden && w.requestAnimationFrame ? w.requestAnimationFrame(rt) : w.setTimeout(rt, D.fx.interval), D.fx.tick())
	}
	function ot() {
		return w.setTimeout(function() {
				Xe = void 0
			}), Xe = Date.now()
	}
	function at(e, t) {
		var n,
			i = 0,
			r = {
				height : e
			};
		for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ne[i])] = r["padding" + n] = e;
		return t && (r.opacity = r.width = e), r
	}
	function st(e, t, n) {
		for (var i, r = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = r.length; o < a; o++)
			if (i = r[o].call(n, t, e)) return i
	}
	function lt(o, e, t) {
		var n,
			a,
			i = 0,
			r = lt.prefilters.length,
			s = D.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (a) return !1;
				for (var e = Xe || ot(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), i = 0, r = c.tweens.length; i < r; i++) c.tweens[i].run(n);
				return s.notifyWith(o, [ c, n, t ]), n < 1 && r ? t : (r || s.notifyWith(o, [ c, 1, 0 ]), s.resolveWith(o, [ c ]), !1)
			},
			c = s.promise({
				elem : o,
				props : D.extend({}, e),
				opts : D.extend(!0, {
					specialEasing : {},
					easing : D.easing._default
				}, t),
				originalProperties : e,
				originalOptions : t,
				startTime : Xe || ot(),
				duration : t.duration,
				tweens : [],
				createTween : function(e, t) {
					var n = D.Tween(o, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
					return c.tweens.push(n), n
				},
				stop : function(e) {
					var t = 0,
						n = e ? c.tweens.length : 0;
					if (a) return this;
					for (a = !0; t < n; t++) c.tweens[t].run(1);
					return e ? (s.notifyWith(o, [ c, 1, 0 ]), s.resolveWith(o, [ c, e ])) : s.rejectWith(o, [ c, e ]), this
				}
			}),
			u = c.props;
		for (function(e, t) {
				var n,
					i,
					r,
					o,
					a;
				for (n in e)
					if (r = t[i = U(n)], o = e[n], Array.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o,
						delete e[n]
						), (a = D.cssHooks[i]) && "expand" in a)
						for (n in o = a.expand(o),
							delete e[i]
							, o) n in e || (e[n] = o[n], t[n] = r);
					else
						t[i] = r
			}(u, c.opts.specialEasing);i < r; i++)
			if (n = lt.prefilters[i].call(c, o, u, c.opts)) return y(n.stop) && (D._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
		return D.map(u, st, c), y(c.opts.start) && c.opts.start.call(o, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), D.fx.timer(D.extend(l, {
				elem : o,
				anim : c,
				queue : c.opts.queue
			})), c
	}
	D.Animation = D.extend(lt, {
		tweeners : {
			"*" : [ function(e, t) {
				var n = this.createTween(e, t);
				return oe(n.elem, e, te.exec(t), n), n
			} ]
		},
		tweener : function(e, t) {
			y(e) ? (t = e, e = [ "*" ]) : e = e.match(P);
			for (var n, i = 0, r = e.length; i < r; i++) n = e[i], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t)
		},
		prefilters : [ function(e, t, n) {
			var i,
				r,
				o,
				a,
				s,
				l,
				c,
				u,
				d = "width" in t || "height" in t,
				f = this,
				h = {},
				p = e.style,
				g = e.nodeType && ie(e),
				m = K.get(e, "fxshow");
			for (i in n.queue || (null == (a = D._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
					a.unqueued || s()
				}), a.unqueued++, f.always(function() {
					f.always(function() {
						a.unqueued--, D.queue(e, "fx").length || a.empty.fire()
					})
				})), t)
				if (r = t[i], nt.test(r)) {
					if (
						delete t[i]
						, o = o || "toggle" === r, r === (g ? "hide" : "show")) {
						if ("show" !== r || !m || void 0 === m[i]) continue;
						g = !0
					}
					h[i] = m && m[i] || D.style(e, i)
			}
			if ((l = !D.isEmptyObject(t)) || !D.isEmptyObject(h))
				for (i in d && 1 === e.nodeType && (n.overflow = [ p.overflow, p.overflowX, p.overflowY ], null == (c = m && m.display) && (c = K.get(e, "display")), "none" === (u = D.css(e, "display")) && (c ? u = c : (se([ e ], !0), c = e.style.display || c, u = D.css(e, "display"), se([ e ]))), ("inline" === u || "inline-block" === u && null != c) && "none" === D.css(e, "float") && (l || (f.done(function() {
						p.display = c
					}), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function() {
						p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
					})), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = K.access(e, "fxshow", {
						display : c
					}), o && (m.hidden = !g), g && se([ e ], !0), f.done(function() {
						for (i in g || se([ e ]), K.remove(e, "fxshow"), h) D.style(e, i, h[i])
					})), l = st(g ? m[i] : 0, i, f), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
		} ],
		prefilter : function(e, t) {
			t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
		}
	}), D.speed = function(e, t, n) {
		var i = e && "object" == typeof e ? D.extend({}, e) : {
			complete : n || !n && t || y(e) && e,
			duration : e,
			easing : n && t || t && !y(t) && t
		};
		return D.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in D.fx.speeds ? i.duration = D.fx.speeds[i.duration] : i.duration = D.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
				y(i.old) && i.old.call(this), i.queue && D.dequeue(this, i.queue)
			}, i
	}, D.fn.extend({
		fadeTo : function(e, t, n, i) {
			return this.filter(ie).css("opacity", 0).show().end().animate({
				opacity : t
			}, e, n, i)
		},
		animate : function(t, e, n, i) {
			var r = D.isEmptyObject(t),
				o = D.speed(e, n, i),
				a = function() {
					var e = lt(this, D.extend({}, t), o);
					(r || K.get(this, "finish")) && e.stop(!0)
				};
			return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
		},
		stop : function(r, e, o) {
			var a = function(e) {
				var t = e.stop;
				delete e.stop
				, t(o)
			};
			return "string" != typeof r && (o = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function() {
					var e = !0,
						t = null != r && r + "queueHooks",
						n = D.timers,
						i = K.get(this);
					if (t) i[t] && i[t].stop && a(i[t]);else
						for (t in i) i[t] && i[t].stop && it.test(t) && a(i[t]);
					for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
					!e && o || D.dequeue(this, r)
				})
		},
		finish : function(a) {
			return !1 !== a && (a = a || "fx"), this.each(function() {
					var e,
						t = K.get(this),
						n = t[a + "queue"],
						i = t[a + "queueHooks"],
						r = D.timers,
						o = n ? n.length : 0;
					for (t.finish = !0, D.queue(this, a, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === a && (r[e].anim.stop(!0), r.splice(e, 1));
					for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
					delete t.finish
				})
		}
	}), D.each([ "toggle", "show", "hide" ], function(e, i) {
		var r = D.fn[i];
		D.fn[i] = function(e, t, n) {
			return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(at(i, !0), e, t, n)
		}
	}), D.each({
		slideDown : at("show"),
		slideUp : at("hide"),
		slideToggle : at("toggle"),
		fadeIn : {
			opacity : "show"
		},
		fadeOut : {
			opacity : "hide"
		},
		fadeToggle : {
			opacity : "toggle"
		}
	}, function(e, i) {
		D.fn[e] = function(e, t, n) {
			return this.animate(i, e, t, n)
		}
	}), D.timers = [], D.fx.tick = function() {
		var e,
			t = 0,
			n = D.timers;
		for (Xe = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
		n.length || D.fx.stop(), Xe = void 0
	}, D.fx.timer = function(e) {
		D.timers.push(e), D.fx.start()
	}, D.fx.interval = 13, D.fx.start = function() {
		Ze || (Ze = !0, rt())
	}, D.fx.stop = function() {
		Ze = null
	}, D.fx.speeds = {
		slow : 600,
		fast : 200,
		_default : 400
	}, D.fn.delay = function(i, e) {
		return i = D.fx && D.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
				var n = w.setTimeout(e, i);
				t.stop = function() {
					w.clearTimeout(n)
				}
			})
	}, et = k.createElement("input"), tt = k.createElement("select").appendChild(k.createElement("option")), et.type = "checkbox", v.checkOn = "" !== et.value, v.optSelected = tt.selected, (et = k.createElement("input")).value = "t", et.type = "radio", v.radioValue = "t" === et.value;
	var ct,
		ut = D.expr.attrHandle;
	D.fn.extend({
		attr : function(e, t) {
			return q(this, D.attr, e, t, 1 < arguments.length)
		},
		removeAttr : function(e) {
			return this.each(function() {
				D.removeAttr(this, e)
			})
		}
	}), D.extend({
		attr : function(e, t, n) {
			var i,
				r,
				o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? D.prop(e, t, n) : (1 === o && D.isXMLDoc(e) || (r = D.attrHooks[t.toLowerCase()] || (D.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void D.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = D.find.attr(e, t)) ? void 0 : i)
		},
		attrHooks : {
			type : {
				set : function(e, t) {
					if (!v.radioValue && "radio" === t && C(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		removeAttr : function(e, t) {
			var n,
				i = 0,
				r = t && t.match(P);
			if (r && 1 === e.nodeType)
				for (; n = r[i++];) e.removeAttribute(n)
		}
	}), ct = {
		set : function(e, t, n) {
			return !1 === t ? D.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, D.each(D.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var a = ut[t] || D.find.attr;
		ut[t] = function(e, t, n) {
			var i,
				r,
				o = t.toLowerCase();
			return n || (r = ut[o], ut[o] = i, i = null != a(e, t, n) ? o : null, ut[o] = r), i
		}
	});
	var dt = /^(?:input|select|textarea|button)$/i,
		ft = /^(?:a|area)$/i;
	function ht(e) {
		return (e.match(P) || []).join(" ")
	}
	function pt(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}
	function gt(e) {
		return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
	}
	D.fn.extend({
		prop : function(e, t) {
			return q(this, D.prop, e, t, 1 < arguments.length)
		},
		removeProp : function(e) {
			return this.each(function() {
				delete this[D.propFix[e] || e]
			})
		}
	}), D.extend({
		prop : function(e, t, n) {
			var i,
				r,
				o = e.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return 1 === o && D.isXMLDoc(e) || (t = D.propFix[t] || t, r = D.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
		},
		propHooks : {
			tabIndex : {
				get : function(e) {
					var t = D.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : dt.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix : {
			for : "htmlFor",
			class : "className"
		}
	}), v.optSelected || (D.propHooks.selected = {
		get : function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set : function(e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), D.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
		D.propFix[this.toLowerCase()] = this
	}), D.fn.extend({
		addClass : function(t) {
			var e,
				n,
				i,
				r,
				o,
				a,
				s,
				l = 0;
			if (y(t)) return this.each(function(e) {
					D(this).addClass(t.call(this, e, pt(this)))
				});
			if ((e = gt(t)).length)
				for (; n = this[l++];)
					if (r = pt(n), i = 1 === n.nodeType && " " + ht(r) + " ") {
						for (a = 0; o = e[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
						r !== (s = ht(i)) && n.setAttribute("class", s)
			}
			return this
		},
		removeClass : function(t) {
			var e,
				n,
				i,
				r,
				o,
				a,
				s,
				l = 0;
			if (y(t)) return this.each(function(e) {
					D(this).removeClass(t.call(this, e, pt(this)))
				});
			if (!arguments.length) return this.attr("class", "");
			if ((e = gt(t)).length)
				for (; n = this[l++];)
					if (r = pt(n), i = 1 === n.nodeType && " " + ht(r) + " ") {
						for (a = 0; o = e[a++];)
							for (; -1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
						r !== (s = ht(i)) && n.setAttribute("class", s)
			}
			return this
		},
		toggleClass : function(r, t) {
			var o = typeof r,
				a = "string" === o || Array.isArray(r);
			return "boolean" == typeof t && a ? t ? this.addClass(r) : this.removeClass(r) : y(r) ? this.each(function(e) {
				D(this).toggleClass(r.call(this, e, pt(this), t), t)
			}) : this.each(function() {
				var e,
					t,
					n,
					i;
				if (a)
					for (t = 0, n = D(this), i = gt(r); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
				else void 0 !== r && "boolean" !== o || ((e = pt(this)) && K.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === r ? "" : K.get(this, "__className__") || ""))
			})
		},
		hasClass : function(e) {
			var t,
				n,
				i = 0;
			for (t = " " + e + " "; n = this[i++];)
				if (1 === n.nodeType && -1 < (" " + ht(pt(n)) + " ").indexOf(t)) return !0;
			return !1
		}
	});
	var mt = /\r/g;
	D.fn.extend({
		val : function(n) {
			var i,
				e,
				r,
				t = this[0];
			return arguments.length ? (r = y(n), this.each(function(e) {
				var t;
				1 === this.nodeType && (null == (t = r ? n.call(this, e, D(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = D.map(t, function(e) {
					return null == e ? "" : e + ""
				})), (i = D.valHooks[this.type] || D.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t))
			})) : t ? (i = D.valHooks[t.type] || D.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(mt, "") : null == e ? "" : e : void 0
		}
	}), D.extend({
		valHooks : {
			option : {
				get : function(e) {
					var t = D.find.attr(e, "value");
					return null != t ? t : ht(D.text(e))
				}
			},
			select : {
				get : function(e) {
					var t,
						n,
						i,
						r = e.options,
						o = e.selectedIndex,
						a = "select-one" === e.type,
						s = a ? null : [],
						l = a ? o + 1 : r.length;
					for (i = o < 0 ? l : a ? o : 0; i < l; i++)
						if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !C(n.parentNode, "optgroup"))) {
							if (t = D(n).val(), a) return t;
							s.push(t)
					}
					return s
				},
				set : function(e, t) {
					for (var n, i, r = e.options, o = D.makeArray(t), a = r.length; a--;) ((i = r[a]).selected = -1 < D.inArray(D.valHooks.option.get(i), o)) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		}
	}), D.each([ "radio", "checkbox" ], function() {
		D.valHooks[this] = {
			set : function(e, t) {
				if (Array.isArray(t)) return e.checked = -1 < D.inArray(D(e).val(), t)
			}
		}, v.checkOn || (D.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	}), v.focusin = "onfocusin" in w;
	var vt = /^(?:focusinfocus|focusoutblur)$/,
		yt = function(e) {
			e.stopPropagation()
		};
	D.extend(D.event, {
		trigger : function(e, t, n, i) {
			var r,
				o,
				a,
				s,
				l,
				c,
				u,
				d,
				f = [ n || k ],
				h = m.call(e, "type") ? e.type : e,
				p = m.call(e, "namespace") ? e.namespace.split(".") : [];
			if (o = d = a = n = n || k, 3 !== n.nodeType && 8 !== n.nodeType && !vt.test(h + D.event.triggered) && (-1 < h.indexOf(".") && (h = (p = h.split(".")).shift(), p.sort()), l = h.indexOf(":") < 0 && "on" + h, (e = e[D.expando] ? e : new D.Event(h, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [ e ] : D.makeArray(t, [ e ]), u = D.event.special[h] || {}, i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
				if (!i && !u.noBubble && !b(n)) {
					for (s = u.delegateType || h, vt.test(s + h) || (o = o.parentNode); o; o = o.parentNode) f.push(o), a = o;
					a === (n.ownerDocument || k) && f.push(a.defaultView || a.parentWindow || w)
				}
				for (r = 0; (o = f[r++]) && !e.isPropagationStopped();) d = o, e.type = 1 < r ? s : u.bindType || h, (c = (K.get(o, "events") || {})[e.type] && K.get(o, "handle")) && c.apply(o, t), (c = l && o[l]) && c.apply && V(o) && (e.result = c.apply(o, t), !1 === e.result && e.preventDefault());
				return e.type = h, i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(f.pop(), t) || !V(n) || l && y(n[h]) && !b(n) && ((a = n[l]) && (n[l] = null), D.event.triggered = h, e.isPropagationStopped() && d.addEventListener(h, yt), n[h](), e.isPropagationStopped() && d.removeEventListener(h, yt), D.event.triggered = void 0, a && (n[l] = a)), e.result
			}
		},
		simulate : function(e, t, n) {
			var i = D.extend(new D.Event, n, {
				type : e,
				isSimulated : !0
			});
			D.event.trigger(i, null, t)
		}
	}), D.fn.extend({
		trigger : function(e, t) {
			return this.each(function() {
				D.event.trigger(e, t, this)
			})
		},
		triggerHandler : function(e, t) {
			var n = this[0];
			if (n) return D.event.trigger(e, t, n, !0)
		}
	}), v.focusin || D.each({
		focus : "focusin",
		blur : "focusout"
	}, function(n, i) {
		var r = function(e) {
			D.event.simulate(i, e.target, D.event.fix(e))
		};
		D.event.special[i] = {
			setup : function() {
				var e = this.ownerDocument || this,
					t = K.access(e, i);
				t || e.addEventListener(n, r, !0), K.access(e, i, (t || 0) + 1)
			},
			teardown : function() {
				var e = this.ownerDocument || this,
					t = K.access(e, i) - 1;
				t ? K.access(e, i, t) : (e.removeEventListener(n, r, !0), K.remove(e, i))
			}
		}
	});
	var bt = w.location,
		_t = Date.now(),
		Tt = /\?/;
	D.parseXML = function(e) {
		var t;
		if (!e || "string" != typeof e) return null;
		try {
			t = (new w.DOMParser).parseFromString(e, "text/xml")
		} catch (e) {
			t = void 0
		} return t && !t.getElementsByTagName("parsererror").length || D.error("Invalid XML: " + e), t
	};
	var xt = /\[\]$/,
		wt = /\r?\n/g,
		kt = /^(?:submit|button|image|reset|file)$/i,
		Dt = /^(?:input|select|textarea|keygen)/i;
	function St(n, e, i, r) {
		var t;
		if (Array.isArray(e)) D.each(e, function(e, t) {
				i || xt.test(n) ? r(n, t) : St(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, r)
			});
		else if (i || "object" !== T(e)) r(n, e);else
			for (t in e) St(n + "[" + t + "]", e[t], i, r)
	}
	D.param = function(e, t) {
		var n,
			i = [],
			r = function(e, t) {
				var n = y(t) ? t() : t;
				i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
			};
		if (Array.isArray(e) || e.jquery && !D.isPlainObject(e)) D.each(e, function() {
				r(this.name, this.value)
			});else
			for (n in e) St(n, e[n], t, r);
		return i.join("&")
	}, D.fn.extend({
		serialize : function() {
			return D.param(this.serializeArray())
		},
		serializeArray : function() {
			return this.map(function() {
				var e = D.prop(this, "elements");
				return e ? D.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !D(this).is(":disabled") && Dt.test(this.nodeName) && !kt.test(e) && (this.checked || !le.test(e))
			}).map(function(e, t) {
				var n = D(this).val();
				return null == n ? null : Array.isArray(n) ? D.map(n, function(e) {
					return {
						name : t.name,
						value : e.replace(wt, "\r\n")
					}
				}) : {
					name : t.name,
					value : n.replace(wt, "\r\n")
				}
			}).get()
		}
	});
	var Ct = /%20/g,
		Et = /#.*$/,
		Ot = /([?&])_=[^&]*/,
		At = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		It = /^(?:GET|HEAD)$/,
		Nt = /^\/\//,
		Mt = {},
		jt = {},
		Pt = "*/".concat("*"),
		Wt = k.createElement("a");
	function Ht(o) {
		return function(e, t) {
			"string" != typeof e && (t = e, e = "*");
			var n,
				i = 0,
				r = e.toLowerCase().match(P) || [];
			if (y(t))
				for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
		}
	}
	function Lt(t, r, o, a) {
		var s = {},
			l = t === jt;
		function c(e) {
			var i;
			return s[e] = !0, D.each(t[e] || [], function(e, t) {
					var n = t(r, o, a);
					return "string" != typeof n || l || s[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), c(n), !1)
				}), i
		}
		return c(r.dataTypes[0]) || !s["*"] && c("*")
	}
	function $t(e, t) {
		var n,
			i,
			r = D.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
		return i && D.extend(!0, e, i), e
	}
	Wt.href = bt.href, D.extend({
		active : 0,
		lastModified : {},
		etag : {},
		ajaxSettings : {
			url : bt.href,
			type : "GET",
			isLocal : /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
			global : !0,
			processData : !0,
			async : !0,
			contentType : "application/x-www-form-urlencoded; charset=UTF-8",
			accepts : {
				"*" : Pt,
				text : "text/plain",
				html : "text/html",
				xml : "application/xml, text/xml",
				json : "application/json, text/javascript"
			},
			contents : {
				xml : /\bxml\b/,
				html : /\bhtml/,
				json : /\bjson\b/
			},
			responseFields : {
				xml : "responseXML",
				text : "responseText",
				json : "responseJSON"
			},
			converters : {
				"* text" : String,
				"text html" : !0,
				"text json" : JSON.parse,
				"text xml" : D.parseXML
			},
			flatOptions : {
				url : !0,
				context : !0
			}
		},
		ajaxSetup : function(e, t) {
			return t ? $t($t(e, D.ajaxSettings), t) : $t(D.ajaxSettings, e)
		},
		ajaxPrefilter : Ht(Mt),
		ajaxTransport : Ht(jt),
		ajax : function(e, t) {
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var u,
				d,
				f,
				n,
				h,
				i,
				p,
				g,
				r,
				o,
				m = D.ajaxSetup({}, t),
				v = m.context || m,
				y = m.context && (v.nodeType || v.jquery) ? D(v) : D.event,
				b = D.Deferred(),
				_ = D.Callbacks("once memory"),
				T = m.statusCode || {},
				a = {},
				s = {},
				l = "canceled",
				x = {
					readyState : 0,
					getResponseHeader : function(e) {
						var t;
						if (p) {
							if (!n)
								for (n = {}; t = At.exec(f);) n[t[1].toLowerCase()] = t[2];
							t = n[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders : function() {
						return p ? f : null
					},
					setRequestHeader : function(e, t) {
						return null == p && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
					},
					overrideMimeType : function(e) {
						return null == p && (m.mimeType = e), this
					},
					statusCode : function(e) {
						var t;
						if (e)
							if (p) x.always(e[x.status]);else
								for (t in e) T[t] = [ T[t], e[t] ];
						return this
					},
					abort : function(e) {
						var t = e || l;
						return u && u.abort(t), c(0, t), this
					}
				};
			if (b.promise(x), m.url = ((e || m.url || bt.href) + "").replace(Nt, bt.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(P) || [ "" ], null == m.crossDomain) {
				i = k.createElement("a");try {
					i.href = m.url, i.href = i.href, m.crossDomain = Wt.protocol + "//" + Wt.host != i.protocol + "//" + i.host
				} catch (e) {
					m.crossDomain = !0
				}
			}
			if (m.data && m.processData && "string" != typeof m.data && (m.data = D.param(m.data, m.traditional)), Lt(Mt, m, t, x), p) return x;
			for (r in (g = D.event && m.global) && 0 == D.active++ && D.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !It.test(m.type), d = m.url.replace(Et, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Ct, "+")) : (o = m.url.slice(d.length), m.data && (m.processData || "string" == typeof m.data) && (d += (Tt.test(d) ? "&" : "?") + m.data,
				delete m.data
				), !1 === m.cache && (d = d.replace(Ot, "$1"), o = (Tt.test(d) ? "&" : "?") + "_=" + _t++ + o), m.url = d + o), m.ifModified && (D.lastModified[d] && x.setRequestHeader("If-Modified-Since", D.lastModified[d]), D.etag[d] && x.setRequestHeader("If-None-Match", D.etag[d])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : m.accepts["*"]), m.headers) x.setRequestHeader(r, m.headers[r]);
			if (m.beforeSend && (!1 === m.beforeSend.call(v, x, m) || p)) return x.abort();
			if (l = "abort", _.add(m.complete), x.done(m.success), x.fail(m.error), u = Lt(jt, m, t, x)) {
				if (x.readyState = 1, g && y.trigger("ajaxSend", [ x, m ]), p) return x;
				m.async && 0 < m.timeout && (h = w.setTimeout(function() {
					x.abort("timeout")
				}, m.timeout));try {
					p = !1, u.send(a, c)
				} catch (e) {
					if (p)
						throw e;
					c(-1, e)
				}
			} else c(-1, "No Transport");
			function c(e, t, n, i) {
				var r,
					o,
					a,
					s,
					l,
					c = t;
				p || (p = !0, h && w.clearTimeout(h), u = void 0, f = i || "", x.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
					for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
					if (i)
						for (r in s)
							if (s[r] && s[r].test(i)) {
								l.unshift(r);break
					}
					if (l[0] in n)
						o = l[0];else {
						for (r in n) {
							if (!l[0] || e.converters[r + " " + l[0]]) {
								o = r;break
							}
							a || (a = r)
						}
						o = o || a
					}
					if (o) return o !== l[0] && l.unshift(o), n[o]
				}(m, x, n)), s = function(e, t, n, i) {
					var r,
						o,
						a,
						s,
						l,
						c = {},
						u = e.dataTypes.slice();
					if (u[1])
						for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
					for (o = u.shift(); o;)
						if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift())
							if ("*" === o)
								o = l;
							else if ("*" !== l && l !== o) {
								if (!(a = c[l + " " + o] || c["* " + o]))
									for (r in c)
										if ((s = r.split(" "))[1] === o && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
											!0 === a ? a = c[r] : !0 !== c[r] && (o = s[0], u.unshift(s[1]));break
								}
								if (!0 !== a)
									if (a && e.throws)
										t = a(t);else try {
											t = a(t)
										} catch (e) {
											return {
												state : "parsererror",
												error : a ? e : "No conversion from " + l + " to " + o
											}
								}
					}
					return {
						state : "success",
						data : t
					}
				}(m, s, x, r), r ? (m.ifModified && ((l = x.getResponseHeader("Last-Modified")) && (D.lastModified[d] = l), (l = x.getResponseHeader("etag")) && (D.etag[d] = l)), 204 === e || "HEAD" === m.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = s.state, o = s.data, r = !(a = s.error))) : (a = c, !e && c || (c = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || c) + "", r ? b.resolveWith(v, [ o, c, x ]) : b.rejectWith(v, [ x, c, a ]), x.statusCode(T), T = void 0, g && y.trigger(r ? "ajaxSuccess" : "ajaxError", [ x, m, r ? o : a ]), _.fireWith(v, [ x, c ]), g && (y.trigger("ajaxComplete", [ x, m ]), --D.active || D.event.trigger("ajaxStop")))
			}
			return x
		},
		getJSON : function(e, t, n) {
			return D.get(e, t, n, "json")
		},
		getScript : function(e, t) {
			return D.get(e, void 0, t, "script")
		}
	}), D.each([ "get", "post" ], function(e, r) {
		D[r] = function(e, t, n, i) {
			return y(t) && (i = i || n, n = t, t = void 0), D.ajax(D.extend({
					url : e,
					type : r,
					dataType : i,
					data : t,
					success : n
				}, D.isPlainObject(e) && e))
		}
	}), D._evalUrl = function(e) {
		return D.ajax({
			url : e,
			type : "GET",
			dataType : "script",
			cache : !0,
			async : !1,
			global : !1,
			throws : !0
		})
	}, D.fn.extend({
		wrapAll : function(e) {
			var t;
			return this[0] && (y(e) && (e = e.call(this[0])), t = D(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
					for (var e = this; e.firstElementChild;) e = e.firstElementChild;
					return e
				}).append(this)), this
		},
		wrapInner : function(n) {
			return y(n) ? this.each(function(e) {
				D(this).wrapInner(n.call(this, e))
			}) : this.each(function() {
				var e = D(this),
					t = e.contents();
				t.length ? t.wrapAll(n) : e.append(n)
			})
		},
		wrap : function(t) {
			var n = y(t);
			return this.each(function(e) {
				D(this).wrapAll(n ? t.call(this, e) : t)
			})
		},
		unwrap : function(e) {
			return this.parent(e).not("body").each(function() {
					D(this).replaceWith(this.childNodes)
				}), this
		}
	}), D.expr.pseudos.hidden = function(e) {
		return !D.expr.pseudos.visible(e)
	}, D.expr.pseudos.visible = function(e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	}, D.ajaxSettings.xhr = function() {
		try {
			return new w.XMLHttpRequest
		} catch (e) {}
	};
	var Ft = {
			0 : 200,
			1223 : 204
		},
		Rt = D.ajaxSettings.xhr();
	v.cors = !!Rt && "withCredentials" in Rt, v.ajax = Rt = !!Rt, D.ajaxTransport(function(r) {
		var o,
			a;
		if (v.cors || Rt && !r.crossDomain) return {
				send : function(e, t) {
					var n,
						i = r.xhr();
					if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
						for (n in r.xhrFields) i[n] = r.xhrFields[n];
					for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
					o = function(e) {
						return function() {
							o && (o = a = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Ft[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
								binary : i.response
							} : {
								text : i.responseText
							}, i.getAllResponseHeaders()))
						}
					}, i.onload = o(), a = i.onerror = i.ontimeout = o("error"), void 0 !== i.onabort ? i.onabort = a : i.onreadystatechange = function() {
						4 === i.readyState && w.setTimeout(function() {
							o && a()
						})
					}, o = o("abort");try {
						i.send(r.hasContent && r.data || null)
					} catch (e) {
						if (o)
							throw e
					}
				},
				abort : function() {
					o && o()
				}
		}
	}), D.ajaxPrefilter(function(e) {
		e.crossDomain && (e.contents.script = !1)
	}), D.ajaxSetup({
		accepts : {
			script : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents : {
			script : /\b(?:java|ecma)script\b/
		},
		converters : {
			"text script" : function(e) {
				return D.globalEval(e), e
			}
		}
	}), D.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), D.ajaxTransport("script", function(n) {
		var i,
			r;
		if (n.crossDomain) return {
				send : function(e, t) {
					i = D("<script>").prop({
						charset : n.scriptCharset,
						src : n.url
					}).on("load error", r = function(e) {
						i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type)
					}), k.head.appendChild(i[0])
				},
				abort : function() {
					r && r()
				}
		}
	});
	var qt,
		Bt = [],
		zt = /(=)\?(?=&|$)|\?\?/;
	D.ajaxSetup({
		jsonp : "callback",
		jsonpCallback : function() {
			var e = Bt.pop() || D.expando + "_" + _t++;
			return this[e] = !0, e
		}
	}), D.ajaxPrefilter("json jsonp", function(e, t, n) {
		var i,
			r,
			o,
			a = !1 !== e.jsonp && (zt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(e.data) && "data");
		if (a || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(zt, "$1" + i) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
					return o || D.error(i + " was not called"), o[0]
				}, e.dataTypes[0] = "json", r = w[i], w[i] = function() {
					o = arguments
				}, n.always(function() {
					void 0 === r ? D(w).removeProp(i) : w[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, Bt.push(i)), o && y(r) && r(o[0]), o = r = void 0
				}), "script"
	}), v.createHTMLDocument = ((qt = k.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === qt.childNodes.length), D.parseHTML = function(e, t, n) {
		return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((i = (t = k.implementation.createHTMLDocument("")).createElement("base")).href = k.location.href, t.head.appendChild(i)) : t = k), o = !n && [], (r = E.exec(e)) ? [ t.createElement(r[1]) ] : (r = ve([ e ], t, o), o && o.length && D(o).remove(), D.merge([], r.childNodes)));
		var i,
			r,
			o
	}, D.fn.load = function(e, t, n) {
		var i,
			r,
			o,
			a = this,
			s = e.indexOf(" ");
		return -1 < s && (i = ht(e.slice(s)), e = e.slice(0, s)), y(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < a.length && D.ajax({
				url : e,
				type : r || "GET",
				dataType : "html",
				data : t
			}).done(function(e) {
				o = arguments, a.html(i ? D("<div>").append(D.parseHTML(e)).find(i) : e)
			}).always(n && function(e, t) {
					a.each(function() {
						n.apply(this, o || [ e.responseText, t, e ])
					})
				}), this
	}, D.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
		D.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), D.expr.pseudos.animated = function(t) {
		return D.grep(D.timers, function(e) {
			return t === e.elem
		}).length
	}, D.offset = {
		setOffset : function(e, t, n) {
			var i,
				r,
				o,
				a,
				s,
				l,
				c = D.css(e, "position"),
				u = D(e),
				d = {};
			"static" === c && (e.style.position = "relative"), s = u.offset(), o = D.css(e, "top"), l = D.css(e, "left"), ("absolute" === c || "fixed" === c) && -1 < (o + l).indexOf("auto") ? (a = (i = u.position()).top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), y(t) && (t = t.call(e, n, D.extend({}, s))), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : u.css(d)
		}
	}, D.fn.extend({
		offset : function(t) {
			if (arguments.length) return void 0 === t ? this : this.each(function(e) {
					D.offset.setOffset(this, t, e)
				});
			var e,
				n,
				i = this[0];
			return i ? i.getClientRects().length ? (e = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
				top : e.top + n.pageYOffset,
				left : e.left + n.pageXOffset
			}) : {
				top : 0,
				left : 0
			} : void 0
		},
		position : function() {
			if (this[0]) {
				var e,
					t,
					n,
					i = this[0],
					r = {
						top : 0,
						left : 0
					};
				if ("fixed" === D.css(i, "position"))
					t = i.getBoundingClientRect();else {
					for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === D.css(e, "position");) e = e.parentNode;
					e && e !== i && 1 === e.nodeType && ((r = D(e).offset()).top += D.css(e, "borderTopWidth", !0), r.left += D.css(e, "borderLeftWidth", !0))
				}
				return {
					top : t.top - r.top - D.css(i, "marginTop", !0),
					left : t.left - r.left - D.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent : function() {
			return this.map(function() {
				for (var e = this.offsetParent; e && "static" === D.css(e, "position");) e = e.offsetParent;
				return e || ye
			})
		}
	}), D.each({
		scrollLeft : "pageXOffset",
		scrollTop : "pageYOffset"
	}, function(t, r) {
		var o = "pageYOffset" === r;
		D.fn[t] = function(e) {
			return q(this, function(e, t, n) {
				var i;
				if (b(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n) return i ? i[r] : e[t];
				i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : e[t] = n
			}, t, e, arguments.length)
		}
	}), D.each([ "top", "left" ], function(e, n) {
		D.cssHooks[n] = Fe(v.pixelPosition, function(e, t) {
			if (t) return t = $e(e, n), We.test(t) ? D(e).position()[n] + "px" : t
		})
	}), D.each({
		Height : "height",
		Width : "width"
	}, function(a, s) {
		D.each({
			padding : "inner" + a,
			content : s,
			"" : "outer" + a
		}, function(i, o) {
			D.fn[o] = function(e, t) {
				var n = arguments.length && (i || "boolean" != typeof e),
					r = i || (!0 === e || !0 === t ? "margin" : "border");
				return q(this, function(e, t, n) {
					var i;
					return b(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + a], i["scroll" + a], e.body["offset" + a], i["offset" + a], i["client" + a])) : void 0 === n ? D.css(e, t, r) : D.style(e, t, n, r)
				}, s, n ? e : void 0, n)
			}
		})
	}), D.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
		D.fn[n] = function(e, t) {
			return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
		}
	}), D.fn.extend({
		hover : function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), D.fn.extend({
		bind : function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind : function(e, t) {
			return this.off(e, null, t)
		},
		delegate : function(e, t, n, i) {
			return this.on(t, e, n, i)
		},
		undelegate : function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	}), D.proxy = function(e, t) {
		var n,
			i,
			r;
		if ("string" == typeof t && (n = e[t], t = e, e = n), y(e)) return i = s.call(arguments, 2), (r = function() {
					return e.apply(t || this, i.concat(s.call(arguments)))
				}).guid = e.guid = e.guid || D.guid++, r
	}, D.holdReady = function(e) {
		e ? D.readyWait++ : D.ready(!0)
	}, D.isArray = Array.isArray, D.parseJSON = JSON.parse, D.nodeName = C, D.isFunction = y, D.isWindow = b, D.camelCase = U, D.type = T, D.now = Date.now, D.isNumeric = function(e) {
		var t = D.type(e);
		return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
	}, "function" == typeof define && define.amd && define("jquery", [], function() {
		return D
	});
	var Yt = w.jQuery,
		Ut = w.$;
	return D.noConflict = function(e) {
			return w.$ === D && (w.$ = Ut), e && w.jQuery === D && (w.jQuery = Yt), D
		}, e || (w.jQuery = w.$ = D), D
}), function() {
	"use strict";
	var m,
		s,
		r,
		i;
	m = function(e, t) {
		return "string" == typeof e && "string" == typeof t && e.toLowerCase() === t.toLowerCase()
	}, s = function(e, t, n) {
		var i = n || "0",
			r = e.toString();
		return r.length < t ? s(i + r, t) : r
	}, r = function(e) {
		var t,
			n;
		for (e = e || {}, t = 1; t < arguments.length; t++)
			if (n = arguments[t])
				for (var i in n) n.hasOwnProperty(i) && ("object" == typeof n[i] ? r(e[i], n[i]) : e[i] = n[i]);
		return e
	}, i = {
		dateSettings : {
			days : [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
			daysShort : [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
			months : [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
			monthsShort : [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
			meridiem : [ "AM", "PM" ],
			ordinal : function(e) {
				var t = e % 10,
					n = {
						1 : "st",
						2 : "nd",
						3 : "rd"
					};
				return 1 !== Math.floor(e % 100 / 10) && n[t] ? n[t] : "th"
			}
		},
		separators : /[ \-+\/\.T:@]/g,
		validParts : /[dDjlNSwzWFmMntLoYyaABgGhHisueTIOPZcrU]/g,
		intParts : /[djwNzmnyYhHgGis]/g,
		tzParts : /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		tzClip : /[^-+\dA-Z]/g
	}, (DateFormatter = function(e) {
		var t = this,
			n = r(i, e);
		t.dateSettings = n.dateSettings, t.separators = n.separators, t.validParts = n.validParts, t.intParts = n.intParts, t.tzParts = n.tzParts, t.tzClip = n.tzClip
	}).prototype = {
		constructor : DateFormatter,
		parseDate : function(e, t) {
			var n,
				i,
				r,
				o,
				a,
				s,
				l,
				c,
				u,
				d,
				f = !1,
				h = !1,
				p = this.dateSettings,
				g = {
					date : null,
					year : null,
					month : null,
					day : null,
					hour : 0,
					min : 0,
					sec : 0
				};
			if (e) {
				if (e instanceof Date) return e;
				if ("number" == typeof e) return new Date(e);
				if ("U" === t) return (r = parseInt(e)) ? new Date(1e3 * r) : e;
				if ("string" != typeof e) return "";
				if (!(n = t.match(this.validParts)) || 0 === n.length)
					throw new Error("Invalid date format definition.");
				for (i = e.replace(this.separators, "\0").split("\0"), r = 0; r < i.length; r++) switch (o = i[r], a = parseInt(o), n[r]) {
					case "y":
					case "Y":
						2 === (u = o.length) ? g.year = parseInt((a < 70 ? "20" : "19") + o) : 4 === u && (g.year = a), f = !0;
						break;case "m":
					case "n":
					case "M":
					case "F":
						isNaN(o) ? (-1 < (s = p.monthsShort.indexOf(o)) && (g.month = s + 1), -1 < (s = p.months.indexOf(o)) && (g.month = s + 1)) : 1 <= a && a <= 12 && (g.month = a), f = !0;
						break;case "d":
					case "j":
						1 <= a && a <= 31 && (g.day = a), f = !0;
						break;case "g":
					case "h":
						d = i[l = -1 < n.indexOf("a") ? n.indexOf("a") : -1 < n.indexOf("A") ? n.indexOf("A") : -1], -1 < l ? (c = m(d, p.meridiem[0]) ? 0 : m(d, p.meridiem[1]) ? 12 : -1, 1 <= a && a <= 12 && -1 < c ? g.hour = a + c - 1 : 0 <= a && a <= 23 && (g.hour = a)) : 0 <= a && a <= 23 && (g.hour = a), h = !0;
						break;case "G":
					case "H":
						0 <= a && a <= 23 && (g.hour = a), h = !0;
						break;case "i":
						0 <= a && a <= 59 && (g.min = a), h = !0;
						break;case "s":
						0 <= a && a <= 59 && (g.sec = a), h = !0
				}
				if (!0 === f && g.year && g.month && g.day)
					g.date = new Date(g.year, g.month - 1, g.day, g.hour, g.min, g.sec, 0);else {
					if (!0 !== h) return !1;
					g.date = new Date(0, 0, 0, g.hour, g.min, g.sec, 0)
				}
				return g.date
			}
		},
		guessDate : function(e, t) {
			if ("string" != typeof e) return e;
			var n,
				i,
				r,
				o,
				a = e.replace(this.separators, "\0").split("\0"),
				s = t.match(this.validParts),
				l = new Date,
				c = 0;
			if (!/^[djmn]/g.test(s[0])) return e;
			for (i = 0; i < a.length; i++) {
				switch (c = 2, r = a[i], o = parseInt(r.substr(0, 2)), i) {
				case 0:
					"m" === s[0] || "n" === s[0] ? l.setMonth(o - 1) : l.setDate(o);
					break;case 1:
					"m" === s[0] || "n" === s[0] ? l.setDate(o) : l.setMonth(o - 1);
					break;case 2:
					n = l.getFullYear(), r.length < 4 ? (l.setFullYear(parseInt(n.toString().substr(0, 4 - r.length) + r)), c = r.length) : (l.setFullYear = parseInt(r.substr(0, 4)), c = 4);
					break;case 3:
					l.setHours(o);
					break;case 4:
					l.setMinutes(o);
					break;case 5:
					l.setSeconds(o)
				}
				0 < r.substr(c).length && a.splice(i + 1, 0, r.substr(c))
			}
			return l
		},
		parseFormat : function(e, i) {
			var n,
				t = this,
				r = t.dateSettings,
				o = /\\?(.?)/gi,
				a = function(e, t) {
					return n[e] ? n[e]() : t
				};
			return n = {
					d : function() {
						return s(n.j(), 2)
					},
					D : function() {
						return r.daysShort[n.w()]
					},
					j : function() {
						return i.getDate()
					},
					l : function() {
						return r.days[n.w()]
					},
					N : function() {
						return n.w() || 7
					},
					w : function() {
						return i.getDay()
					},
					z : function() {
						var e = new Date(n.Y(), n.n() - 1, n.j()),
							t = new Date(n.Y(), 0, 1);
						return Math.round((e - t) / 864e5)
					},
					W : function() {
						var e = new Date(n.Y(), n.n() - 1, n.j() - n.N() + 3),
							t = new Date(e.getFullYear(), 0, 4);
						return s(1 + Math.round((e - t) / 864e5 / 7), 2)
					},
					F : function() {
						return r.months[i.getMonth()]
					},
					m : function() {
						return s(n.n(), 2)
					},
					M : function() {
						return r.monthsShort[i.getMonth()]
					},
					n : function() {
						return i.getMonth() + 1
					},
					t : function() {
						return new Date(n.Y(), n.n(), 0).getDate()
					},
					L : function() {
						var e = n.Y();
						return e % 4 == 0 && e % 100 != 0 || e % 400 == 0 ? 1 : 0
					},
					o : function() {
						var e = n.n(),
							t = n.W();
						return n.Y() + (12 === e && t < 9 ? 1 : 1 === e && 9 < t ? -1 : 0)
					},
					Y : function() {
						return i.getFullYear()
					},
					y : function() {
						return n.Y().toString().slice(-2)
					},
					a : function() {
						return n.A().toLowerCase()
					},
					A : function() {
						var e = n.G() < 12 ? 0 : 1;
						return r.meridiem[e]
					},
					B : function() {
						var e = 3600 * i.getUTCHours(),
							t = 60 * i.getUTCMinutes(),
							n = i.getUTCSeconds();
						return s(Math.floor((e + t + n + 3600) / 86.4) % 1e3, 3)
					},
					g : function() {
						return n.G() % 12 || 12
					},
					G : function() {
						return i.getHours()
					},
					h : function() {
						return s(n.g(), 2)
					},
					H : function() {
						return s(n.G(), 2)
					},
					i : function() {
						return s(i.getMinutes(), 2)
					},
					s : function() {
						return s(i.getSeconds(), 2)
					},
					u : function() {
						return s(1e3 * i.getMilliseconds(), 6)
					},
					e : function() {
						return /\((.*)\)/.exec(String(i))[1] || "Coordinated Universal Time"
					},
					T : function() {
						return (String(i).match(t.tzParts) || [ "" ]).pop().replace(t.tzClip, "") || "UTC"
					},
					I : function() {
						return new Date(n.Y(), 0) - Date.UTC(n.Y(), 0) != new Date(n.Y(), 6) - Date.UTC(n.Y(), 6) ? 1 : 0
					},
					O : function() {
						var e = i.getTimezoneOffset(),
							t = Math.abs(e);
						return (0 < e ? "-" : "+") + s(100 * Math.floor(t / 60) + t % 60, 4)
					},
					P : function() {
						var e = n.O();
						return e.substr(0, 3) + ":" + e.substr(3, 2)
					},
					Z : function() {
						return 60 * -i.getTimezoneOffset()
					},
					c : function() {
						return "Y-m-d\\TH:i:sP".replace(o, a)
					},
					r : function() {
						return "D, d M Y H:i:s O".replace(o, a)
					},
					U : function() {
						return i.getTime() / 1e3 || 0
					}
				}, a(e, e)
		},
		formatDate : function(e, t) {
			var n,
				i,
				r,
				o,
				a,
				s = "";
			if ("string" == typeof e && !1 === (e = this.parseDate(e, t))) return !1;
			if (e instanceof Date) {
				for (r = t.length, n = 0; n < r; n++) "S" !== (a = t.charAt(n)) && (o = this.parseFormat(a, e), n !== r - 1 && this.intParts.test(a) && "S" === t.charAt(n + 1) && (i = parseInt(o), o += this.dateSettings.ordinal(i)), s += o);
				return s
			}
			return ""
		}
	}
}(), function(e) {
	"function" == typeof define && define.amd ? define([ "jquery", "jquery-mousewheel" ], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function(Y) {
	"use strict";
	function U(e, t, n) {
		this.date = e, this.desc = t, this.style = n
	}
	var s = {
			i18n : {
				ar : {
					months : [ "كانون الثاني", "شباط", "آذار", "نيسان", "مايو", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول" ],
					dayOfWeekShort : [ "ن", "ث", "ع", "خ", "ج", "س", "ح" ],
					dayOfWeek : [ "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد" ]
				},
				ro : {
					months : [ "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie" ],
					dayOfWeekShort : [ "Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sâ" ],
					dayOfWeek : [ "Duminică", "Luni", "Marţi", "Miercuri", "Joi", "Vineri", "Sâmbătă" ]
				},
				id : {
					months : [ "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember" ],
					dayOfWeekShort : [ "Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab" ],
					dayOfWeek : [ "Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu" ]
				},
				is : {
					months : [ "Janúar", "Febrúar", "Mars", "Apríl", "Maí", "Júní", "Júlí", "Ágúst", "September", "Október", "Nóvember", "Desember" ],
					dayOfWeekShort : [ "Sun", "Mán", "Þrið", "Mið", "Fim", "Fös", "Lau" ],
					dayOfWeek : [ "Sunnudagur", "Mánudagur", "Þriðjudagur", "Miðvikudagur", "Fimmtudagur", "Föstudagur", "Laugardagur" ]
				},
				bg : {
					months : [ "Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември" ],
					dayOfWeekShort : [ "Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
					dayOfWeek : [ "Неделя", "Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота" ]
				},
				fa : {
					months : [ "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند" ],
					dayOfWeekShort : [ "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه" ],
					dayOfWeek : [ "یک‌شنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه", "شنبه", "یک‌شنبه" ]
				},
				ru : {
					months : [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ],
					dayOfWeekShort : [ "Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб" ],
					dayOfWeek : [ "Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота" ]
				},
				uk : {
					months : [ "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень" ],
					dayOfWeekShort : [ "Ндл", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Сбт" ],
					dayOfWeek : [ "Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота" ]
				},
				en : {
					months : [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
					dayOfWeekShort : [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
					dayOfWeek : [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
				},
				el : {
					months : [ "Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος" ],
					dayOfWeekShort : [ "Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ" ],
					dayOfWeek : [ "Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Σάββατο" ]
				},
				de : {
					months : [ "Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember" ],
					dayOfWeekShort : [ "So", "Mo", "Di", "Mi", "Do", "Fr", "Sa" ],
					dayOfWeek : [ "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag" ]
				},
				nl : {
					months : [ "januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december" ],
					dayOfWeekShort : [ "zo", "ma", "di", "wo", "do", "vr", "za" ],
					dayOfWeek : [ "zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag" ]
				},
				tr : {
					months : [ "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık" ],
					dayOfWeekShort : [ "Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts" ],
					dayOfWeek : [ "Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi" ]
				},
				fr : {
					months : [ "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre" ],
					dayOfWeekShort : [ "Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam" ],
					dayOfWeek : [ "dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi" ]
				},
				es : {
					months : [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
					dayOfWeekShort : [ "Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb" ],
					dayOfWeek : [ "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado" ]
				},
				th : {
					months : [ "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม" ],
					dayOfWeekShort : [ "อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส." ],
					dayOfWeek : [ "อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัส", "ศุกร์", "เสาร์", "อาทิตย์" ]
				},
				pl : {
					months : [ "styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień" ],
					dayOfWeekShort : [ "nd", "pn", "wt", "śr", "cz", "pt", "sb" ],
					dayOfWeek : [ "niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota" ]
				},
				pt : {
					months : [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ],
					dayOfWeekShort : [ "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab" ],
					dayOfWeek : [ "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado" ]
				},
				ch : {
					months : [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
					dayOfWeekShort : [ "日", "一", "二", "三", "四", "五", "六" ]
				},
				se : {
					months : [ "Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December" ],
					dayOfWeekShort : [ "Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör" ]
				},
				kr : {
					months : [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
					dayOfWeekShort : [ "일", "월", "화", "수", "목", "금", "토" ],
					dayOfWeek : [ "일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일" ]
				},
				it : {
					months : [ "Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre" ],
					dayOfWeekShort : [ "Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab" ],
					dayOfWeek : [ "Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato" ]
				},
				da : {
					months : [ "January", "Februar", "Marts", "April", "Maj", "Juni", "July", "August", "September", "Oktober", "November", "December" ],
					dayOfWeekShort : [ "Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør" ],
					dayOfWeek : [ "søndag", "mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag" ]
				},
				no : {
					months : [ "Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember" ],
					dayOfWeekShort : [ "Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør" ],
					dayOfWeek : [ "Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag" ]
				},
				ja : {
					months : [ "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月" ],
					dayOfWeekShort : [ "日", "月", "火", "水", "木", "金", "土" ],
					dayOfWeek : [ "日曜", "月曜", "火曜", "水曜", "木曜", "金曜", "土曜" ]
				},
				vi : {
					months : [ "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12" ],
					dayOfWeekShort : [ "CN", "T2", "T3", "T4", "T5", "T6", "T7" ],
					dayOfWeek : [ "Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy" ]
				},
				sl : {
					months : [ "Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December" ],
					dayOfWeekShort : [ "Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob" ],
					dayOfWeek : [ "Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota" ]
				},
				cs : {
					months : [ "Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec" ],
					dayOfWeekShort : [ "Ne", "Po", "Út", "St", "Čt", "Pá", "So" ]
				},
				hu : {
					months : [ "Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December" ],
					dayOfWeekShort : [ "Va", "Hé", "Ke", "Sze", "Cs", "Pé", "Szo" ],
					dayOfWeek : [ "vasárnap", "hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat" ]
				},
				az : {
					months : [ "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr" ],
					dayOfWeekShort : [ "B", "Be", "Ça", "Ç", "Ca", "C", "Ş" ],
					dayOfWeek : [ "Bazar", "Bazar ertəsi", "Çərşənbə axşamı", "Çərşənbə", "Cümə axşamı", "Cümə", "Şənbə" ]
				},
				bs : {
					months : [ "Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar" ],
					dayOfWeekShort : [ "Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub" ],
					dayOfWeek : [ "Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota" ]
				},
				ca : {
					months : [ "Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre" ],
					dayOfWeekShort : [ "Dg", "Dl", "Dt", "Dc", "Dj", "Dv", "Ds" ],
					dayOfWeek : [ "Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte" ]
				},
				"en-GB" : {
					months : [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
					dayOfWeekShort : [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
					dayOfWeek : [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
				},
				et : {
					months : [ "Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember" ],
					dayOfWeekShort : [ "P", "E", "T", "K", "N", "R", "L" ],
					dayOfWeek : [ "Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev" ]
				},
				eu : {
					months : [ "Urtarrila", "Otsaila", "Martxoa", "Apirila", "Maiatza", "Ekaina", "Uztaila", "Abuztua", "Iraila", "Urria", "Azaroa", "Abendua" ],
					dayOfWeekShort : [ "Ig.", "Al.", "Ar.", "Az.", "Og.", "Or.", "La." ],
					dayOfWeek : [ "Igandea", "Astelehena", "Asteartea", "Asteazkena", "Osteguna", "Ostirala", "Larunbata" ]
				},
				fi : {
					months : [ "Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu" ],
					dayOfWeekShort : [ "Su", "Ma", "Ti", "Ke", "To", "Pe", "La" ],
					dayOfWeek : [ "sunnuntai", "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai" ]
				},
				gl : {
					months : [ "Xan", "Feb", "Maz", "Abr", "Mai", "Xun", "Xul", "Ago", "Set", "Out", "Nov", "Dec" ],
					dayOfWeekShort : [ "Dom", "Lun", "Mar", "Mer", "Xov", "Ven", "Sab" ],
					dayOfWeek : [ "Domingo", "Luns", "Martes", "Mércores", "Xoves", "Venres", "Sábado" ]
				},
				hr : {
					months : [ "Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac" ],
					dayOfWeekShort : [ "Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub" ],
					dayOfWeek : [ "Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota" ]
				},
				ko : {
					months : [ "1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월" ],
					dayOfWeekShort : [ "일", "월", "화", "수", "목", "금", "토" ],
					dayOfWeek : [ "일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일" ]
				},
				lt : {
					months : [ "Sausio", "Vasario", "Kovo", "Balandžio", "Gegužės", "Birželio", "Liepos", "Rugpjūčio", "Rugsėjo", "Spalio", "Lapkričio", "Gruodžio" ],
					dayOfWeekShort : [ "Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Šeš" ],
					dayOfWeek : [ "Sekmadienis", "Pirmadienis", "Antradienis", "Trečiadienis", "Ketvirtadienis", "Penktadienis", "Šeštadienis" ]
				},
				lv : {
					months : [ "Janvāris", "Februāris", "Marts", "Aprīlis ", "Maijs", "Jūnijs", "Jūlijs", "Augusts", "Septembris", "Oktobris", "Novembris", "Decembris" ],
					dayOfWeekShort : [ "Sv", "Pr", "Ot", "Tr", "Ct", "Pk", "St" ],
					dayOfWeek : [ "Svētdiena", "Pirmdiena", "Otrdiena", "Trešdiena", "Ceturtdiena", "Piektdiena", "Sestdiena" ]
				},
				mk : {
					months : [ "јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември" ],
					dayOfWeekShort : [ "нед", "пон", "вто", "сре", "чет", "пет", "саб" ],
					dayOfWeek : [ "Недела", "Понеделник", "Вторник", "Среда", "Четврток", "Петок", "Сабота" ]
				},
				mn : {
					months : [ "1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар", "8-р сар", "9-р сар", "10-р сар", "11-р сар", "12-р сар" ],
					dayOfWeekShort : [ "Дав", "Мяг", "Лха", "Пүр", "Бсн", "Бям", "Ням" ],
					dayOfWeek : [ "Даваа", "Мягмар", "Лхагва", "Пүрэв", "Баасан", "Бямба", "Ням" ]
				},
				"pt-BR" : {
					months : [ "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro" ],
					dayOfWeekShort : [ "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb" ],
					dayOfWeek : [ "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado" ]
				},
				sk : {
					months : [ "Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December" ],
					dayOfWeekShort : [ "Ne", "Po", "Ut", "St", "Št", "Pi", "So" ],
					dayOfWeek : [ "Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota" ]
				},
				sq : {
					months : [ "Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor" ],
					dayOfWeekShort : [ "Die", "Hën", "Mar", "Mër", "Enj", "Pre", "Shtu" ],
					dayOfWeek : [ "E Diel", "E Hënë", "E Martē", "E Mërkurë", "E Enjte", "E Premte", "E Shtunë" ]
				},
				"sr-YU" : {
					months : [ "Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar" ],
					dayOfWeekShort : [ "Ned", "Pon", "Uto", "Sre", "čet", "Pet", "Sub" ],
					dayOfWeek : [ "Nedelja", "Ponedeljak", "Utorak", "Sreda", "Četvrtak", "Petak", "Subota" ]
				},
				sr : {
					months : [ "јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар" ],
					dayOfWeekShort : [ "нед", "пон", "уто", "сре", "чет", "пет", "суб" ],
					dayOfWeek : [ "Недеља", "Понедељак", "Уторак", "Среда", "Четвртак", "Петак", "Субота" ]
				},
				sv : {
					months : [ "Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December" ],
					dayOfWeekShort : [ "Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör" ],
					dayOfWeek : [ "Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag" ]
				},
				"zh-TW" : {
					months : [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
					dayOfWeekShort : [ "日", "一", "二", "三", "四", "五", "六" ],
					dayOfWeek : [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ]
				},
				zh : {
					months : [ "一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
					dayOfWeekShort : [ "日", "一", "二", "三", "四", "五", "六" ],
					dayOfWeek : [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ]
				},
				he : {
					months : [ "ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר" ],
					dayOfWeekShort : [ "א'", "ב'", "ג'", "ד'", "ה'", "ו'", "שבת" ],
					dayOfWeek : [ "ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת", "ראשון" ]
				},
				hy : {
					months : [ "Հունվար", "Փետրվար", "Մարտ", "Ապրիլ", "Մայիս", "Հունիս", "Հուլիս", "Օգոստոս", "Սեպտեմբեր", "Հոկտեմբեր", "Նոյեմբեր", "Դեկտեմբեր" ],
					dayOfWeekShort : [ "Կի", "Երկ", "Երք", "Չոր", "Հնգ", "Ուրբ", "Շբթ" ],
					dayOfWeek : [ "Կիրակի", "Երկուշաբթի", "Երեքշաբթի", "Չորեքշաբթի", "Հինգշաբթի", "Ուրբաթ", "Շաբաթ" ]
				},
				kg : {
					months : [ "Үчтүн айы", "Бирдин айы", "Жалган Куран", "Чын Куран", "Бугу", "Кулжа", "Теке", "Баш Оона", "Аяк Оона", "Тогуздун айы", "Жетинин айы", "Бештин айы" ],
					dayOfWeekShort : [ "Жек", "Дүй", "Шей", "Шар", "Бей", "Жум", "Ише" ],
					dayOfWeek : [ "Жекшемб", "Дүйшөмб", "Шейшемб", "Шаршемб", "Бейшемби", "Жума", "Ишенб" ]
				},
				rm : {
					months : [ "Schaner", "Favrer", "Mars", "Avrigl", "Matg", "Zercladur", "Fanadur", "Avust", "Settember", "October", "November", "December" ],
					dayOfWeekShort : [ "Du", "Gli", "Ma", "Me", "Gie", "Ve", "So" ],
					dayOfWeek : [ "Dumengia", "Glindesdi", "Mardi", "Mesemna", "Gievgia", "Venderdi", "Sonda" ]
				},
				ka : {
					months : [ "იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი", "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი" ],
					dayOfWeekShort : [ "კვ", "ორშ", "სამშ", "ოთხ", "ხუთ", "პარ", "შაბ" ],
					dayOfWeek : [ "კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი", "შაბათი" ]
				}
			},
			value : "",
			rtl : !1,
			format : "Y/m/d H:i",
			formatTime : "H:i",
			formatDate : "Y/m/d",
			startDate : !1,
			step : 60,
			monthChangeSpinner : !0,
			closeOnDateSelect : !1,
			closeOnTimeSelect : !0,
			closeOnWithoutClick : !0,
			closeOnInputClick : !0,
			timepicker : !0,
			datepicker : !0,
			weeks : !1,
			defaultTime : !1,
			defaultDate : !1,
			minDate : !1,
			maxDate : !1,
			minTime : !1,
			maxTime : !1,
			disabledMinTime : !1,
			disabledMaxTime : !1,
			allowTimes : [],
			opened : !1,
			initTime : !0,
			inline : !1,
			theme : "",
			onSelectDate : function() {},
			onSelectTime : function() {},
			onChangeMonth : function() {},
			onGetWeekOfYear : function() {},
			onChangeYear : function() {},
			onChangeDateTime : function() {},
			onShow : function() {},
			onClose : function() {},
			onGenerate : function() {},
			withoutCopyright : !0,
			inverseButton : !1,
			hours12 : !1,
			next : "xdsoft_next",
			prev : "xdsoft_prev",
			dayOfWeekStart : 0,
			parentID : "body",
			timeHeightInTimePicker : 25,
			timepickerScrollbar : !0,
			todayButton : !0,
			prevButton : !0,
			nextButton : !0,
			defaultSelect : !0,
			scrollMonth : !0,
			scrollTime : !0,
			scrollInput : !0,
			lazyInit : !1,
			mask : !1,
			validateOnBlur : !0,
			allowBlank : !0,
			yearStart : 1950,
			yearEnd : 2050,
			monthStart : 0,
			monthEnd : 11,
			style : "",
			id : "",
			fixed : !1,
			roundTime : "round",
			className : "",
			weekends : [],
			highlightedDates : [],
			highlightedPeriods : [],
			allowDates : [],
			allowDateRe : null,
			disabledDates : [],
			disabledWeekDays : [],
			yearOffset : 0,
			beforeShowDay : null,
			enterLikeTab : !0,
			showApplyButton : !1
		},
		V = null,
		J = "en",
		n = {
			meridiem : [ "AM", "PM" ]
		},
		i = function() {
			var e = s.i18n[J],
				t = {
					days : e.dayOfWeek,
					daysShort : e.dayOfWeekShort,
					months : e.months,
					monthsShort : Y.map(e.months, function(e) {
						return e.substring(0, 3)
					})
				};
			V = new DateFormatter({
				dateSettings : Y.extend({}, n, t)
			})
		};
	Y.datetimepicker = {
		setLocale : function(e) {
			var t = s.i18n[e] ? e : "en";
			J != t && (J = t, i())
		},
		setDateFormatter : function(e) {
			V = e
		},
		RFC_2822 : "D, d M Y H:i:s O",
		ATOM : "Y-m-dTH:i:sP",
		ISO_8601 : "Y-m-dTH:i:sO",
		RFC_822 : "D, d M y H:i:s O",
		RFC_850 : "l, d-M-y H:i:s T",
		RFC_1036 : "D, d M y H:i:s O",
		RFC_1123 : "D, d M Y H:i:s O",
		RSS : "D, d M Y H:i:s O",
		W3C : "Y-m-dTH:i:sP"
	}, i(), window.getComputedStyle || (window.getComputedStyle = function(n) {
		return this.el = n, this.getPropertyValue = function(e) {
				var t = /(\-([a-z]){1})/g;
				return "float" === e && (e = "styleFloat"), t.test(e) && (e = e.replace(t, function(e, t, n) {
						return n.toUpperCase()
					})), n.currentStyle[e] || null
			}, this
	}), Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
		var n,
			i;
		for (n = t || 0, i = this.length; n < i; n += 1)
			if (this[n] === e) return n;
		return -1
	}), Date.prototype.countDaysInMonth = function() {
		return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate()
	}, Y.fn.xdsoftScroller = function(m) {
		return this.each(function() {
			var o,
				a,
				s,
				l,
				c,
				u = Y(this),
				n = function(e) {
					var t,
						n = {
							x : 0,
							y : 0
						};
					return "touchstart" === e.type || "touchmove" === e.type || "touchend" === e.type || "touchcancel" === e.type ? (t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0], n.x = t.clientX, n.y = t.clientY) : ("mousedown" === e.type || "mouseup" === e.type || "mousemove" === e.type || "mouseover" === e.type || "mouseout" === e.type || "mouseenter" === e.type || "mouseleave" === e.type) && (n.x = e.clientX, n.y = e.clientY), n
				},
				d = 100,
				i = !1,
				r = 0,
				f = 0,
				h = 0,
				t = !1,
				p = 0,
				g = function() {};
			return "hide" === m ? void u.find(".xdsoft_scrollbar").hide() : (Y(this).hasClass("xdsoft_scroller_box") || (o = u.children().eq(0), a = u[0].clientHeight, s = o[0].offsetHeight, l = Y('<div class="xdsoft_scrollbar"></div>'), c = Y('<div class="xdsoft_scroller"></div>'), l.append(c), u.addClass("xdsoft_scroller_box").append(l), g = function(e) {
				var t = n(e).y - r + p;
				t < 0 && (t = 0), t + c[0].offsetHeight > h && (t = h - c[0].offsetHeight), u.trigger("scroll_element.xdsoft_scroller", [ d ? t / d : 0 ])
			}, c.on("touchstart.xdsoft_scroller mousedown.xdsoft_scroller", function(e) {
				a || u.trigger("resize_scroll.xdsoft_scroller", [ m ]), r = n(e).y, p = parseInt(c.css("margin-top"), 10), h = l[0].offsetHeight, "mousedown" === e.type || "touchstart" === e.type ? (document && Y(document.body).addClass("xdsoft_noselect"), Y([ document.body, window ]).on("touchend mouseup.xdsoft_scroller", function e() {
					Y([ document.body, window ]).off("touchend mouseup.xdsoft_scroller", e).off("mousemove.xdsoft_scroller", g).removeClass("xdsoft_noselect")
				}), Y(document.body).on("mousemove.xdsoft_scroller", g)) : (t = !0, e.stopPropagation(), e.preventDefault())
			}).on("touchmove", function(e) {
				t && (e.preventDefault(), g(e))
			}).on("touchend touchcancel", function() {
				t = !1, p = 0
			}), u.on("scroll_element.xdsoft_scroller", function(e, t) {
				a || u.trigger("resize_scroll.xdsoft_scroller", [ t, !0 ]), t = 1 < t ? 1 : t < 0 || isNaN(t) ? 0 : t, c.css("margin-top", d * t), setTimeout(function() {
					o.css("marginTop", -parseInt((o[0].offsetHeight - a) * t, 10))
				}, 10)
			}).on("resize_scroll.xdsoft_scroller", function(e, t, n) {
				var i,
					r;
				a = u[0].clientHeight, s = o[0].offsetHeight, r = (i = a / s) * l[0].offsetHeight, 1 < i ? c.hide() : (c.show(), c.css("height", parseInt(10 < r ? r : 10, 10)), d = l[0].offsetHeight - c[0].offsetHeight, !0 !== n && u.trigger("scroll_element.xdsoft_scroller", [ t || Math.abs(parseInt(o.css("marginTop"), 10)) / (s - a) ]))
			}), u.on("mousewheel", function(e) {
				var t = Math.abs(parseInt(o.css("marginTop"), 10));
				return (t -= 20 * e.deltaY) < 0 && (t = 0), u.trigger("scroll_element.xdsoft_scroller", [ t / (s - a) ]), e.stopPropagation(), !1
			}), u.on("touchstart", function(e) {
				i = n(e), f = Math.abs(parseInt(o.css("marginTop"), 10))
			}), u.on("touchmove", function(e) {
				if (i) {
					e.preventDefault();
					var t = n(e);
					u.trigger("scroll_element.xdsoft_scroller", [ (f - (t.y - i.y)) / (s - a) ])
				}
			}), u.on("touchend touchcancel", function() {
				i = !1, f = 0
			})), void u.trigger("resize_scroll.xdsoft_scroller", [ m ]))
		})
	}, Y.fn.datetimepicker = function(C, n) {
		var i,
			r,
			o = this,
			f = 48,
			h = 57,
			m = 96,
			v = 105,
			y = 17,
			E = 46,
			O = 13,
			A = 27,
			I = 8,
			N = 37,
			M = 38,
			j = 39,
			P = 40,
			W = 9,
			H = 116,
			L = 65,
			$ = 67,
			F = 86,
			R = 90,
			q = 89,
			B = !1,
			z = Y.isPlainObject(C) || !C ? Y.extend(!0, {}, s, C) : Y.extend(!0, {}, s),
			a = 0;
		return i = function(b) {
				function t() {
					var e,
						t = !1;
					return z.startDate ? t = _.strToDate(z.startDate) : (t = z.value || (b && b.val && b.val() ? b.val() : "")) ? t = _.strToDateTime(t) : z.defaultDate && (t = _.strToDateTime(z.defaultDate), z.defaultTime && (e = _.strtotime(z.defaultTime), t.setHours(e.getHours()), t.setMinutes(e.getMinutes()))), t && _.isValidDate(t) ? T.data("changed", !0) : t = "", t || 0
				}
				function n(o) {
					var a = function(e, t) {
							var n = e.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g, "\\$1").replace(/_/g, "{digit+}").replace(/([0-9]{1})/g, "{digit$1}").replace(/\{digit([0-9]{1})\}/g, "[0-$1_]{1}").replace(/\{digit[\+]\}/g, "[0-9_]{1}");
							return new RegExp(n).test(t)
						},
						s = function(e, t) {
							if (!(e = "string" == typeof e || e instanceof String ? document.getElementById(e) : e)) return !1;
							if (e.createTextRange) {
								var n = e.createTextRange();
								return n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", t), n.select(), !0
							}
							return !!e.setSelectionRange && (e.setSelectionRange(t, t), !0)
						};
					o.mask && b.off("keydown.xdsoft"), !0 === o.mask && (o.mask = "undefined" != typeof moment ? o.format.replace(/Y{4}/g, "9999").replace(/Y{2}/g, "99").replace(/M{2}/g, "19").replace(/D{2}/g, "39").replace(/H{2}/g, "29").replace(/m{2}/g, "59").replace(/s{2}/g, "59") : o.format.replace(/Y/g, "9999").replace(/F/g, "9999").replace(/m/g, "19").replace(/d/g, "39").replace(/H/g, "29").replace(/i/g, "59").replace(/s/g, "59")), "string" === Y.type(o.mask) && (a(o.mask, b.val()) || (b.val(o.mask.replace(/[0-9]/g, "_")), s(b[0], 0)), b.on("keydown.xdsoft", function(e) {
						var t,
							n,
							i = this.value,
							r = e.which;
						if (f <= r && r <= h || m <= r && r <= v || r === I || r === E) {
							for (t = function(e) {
									try {
										if (document.selection && document.selection.createRange) return document.selection.createRange().getBookmark().charCodeAt(2) - 2;
										if (e.setSelectionRange) return e.selectionStart
									} catch (e) {
										return 0
									}
								}(this), n = r !== I && r !== E ? String.fromCharCode(m <= r && r <= v ? r - f : r) : "_", r !== I && r !== E || !t || (t -= 1, n = "_");/[^0-9_]/.test(o.mask.substr(t, 1)) && t < o.mask.length && 0 < t;) t += r === I || r === E ? -1 : 1;
							if (i = i.substr(0, t) + n + i.substr(t + 1), "" === Y.trim(i))
								i = o.mask.replace(/[0-9]/g, "_");
							else if (t === o.mask.length) return e.preventDefault(), !1;
							for (t += r === I || r === E ? 0 : 1; /[^0-9_]/.test(o.mask.substr(t, 1)) && t < o.mask.length && 0 < t;) t += r === I || r === E ? -1 : 1;
							a(o.mask, i) ? (this.value = i, s(this, t)) : "" === Y.trim(i) ? this.value = o.mask.replace(/[0-9]/g, "_") : b.trigger("error_input.xdsoft")
						} else if (-1 !== [ L, $, F, R, q ].indexOf(r) && B || -1 !== [ A, M, P, N, j, H, y, W, O ].indexOf(r)) return !0;
						return e.preventDefault(), !1
					}))
				}
				var i,
					r,
					o,
					a,
					_,
					p,
					T = Y('<div class="xdsoft_datetimepicker xdsoft_noselect"></div>'),
					e = Y('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),
					g = Y('<div class="xdsoft_datepicker active"></div>'),
					x = Y('<div class="xdsoft_mounthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button><div class="xdsoft_label xdsoft_month"><span></span><i></i></div><div class="xdsoft_label xdsoft_year"><span></span><i></i></div><button type="button" class="xdsoft_next"></button></div>'),
					w = Y('<div class="xdsoft_calendar"></div>'),
					s = Y('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),
					c = s.find(".xdsoft_time_box").eq(0),
					k = Y('<div class="xdsoft_time_variant"></div>'),
					l = Y('<button type="button" class="xdsoft_save_selected blue-gradient-button">Save Selected</button>'),
					D = Y('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),
					S = Y('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>'),
					d = !1,
					u = 0;
				z.id && T.attr("id", z.id), z.style && T.attr("style", z.style), z.weeks && T.addClass("xdsoft_showweeks"), z.rtl && T.addClass("xdsoft_rtl"), T.addClass("xdsoft_" + z.theme), T.addClass(z.className), x.find(".xdsoft_month span").after(D), x.find(".xdsoft_year span").after(S), x.find(".xdsoft_month,.xdsoft_year").on("touchstart mousedown.xdsoft", function(e) {
					var t,
						n,
						i = Y(this).find(".xdsoft_select").eq(0),
						r = 0,
						o = 0,
						a = i.is(":visible");
					for (x.find(".xdsoft_select").hide(), _.currentTime && (r = _.currentTime[Y(this).hasClass("xdsoft_month") ? "getMonth" : "getFullYear"]()), i[a ? "hide" : "show"](), t = i.find("div.xdsoft_option"), n = 0; n < t.length && t.eq(n).data("value") !== r; n += 1) o += t[0].offsetHeight;
					return i.xdsoftScroller(o / (i.children()[0].offsetHeight - i[0].clientHeight)), e.stopPropagation(), !1
				}), x.find(".xdsoft_select").xdsoftScroller().on("touchstart mousedown.xdsoft", function(e) {
					e.stopPropagation(), e.preventDefault()
				}).on("touchstart mousedown.xdsoft", ".xdsoft_option", function() {
					(void 0 === _.currentTime || null === _.currentTime) && (_.currentTime = _.now());
					var e = _.currentTime.getFullYear();
					_ && _.currentTime && _.currentTime[Y(this).parent().parent().hasClass("xdsoft_monthselect") ? "setMonth" : "setFullYear"](Y(this).data("value")), Y(this).parent().parent().hide(), T.trigger("xchange.xdsoft"), z.onChangeMonth && Y.isFunction(z.onChangeMonth) && z.onChangeMonth.call(T, _.currentTime, T.data("input")), e !== _.currentTime.getFullYear() && Y.isFunction(z.onChangeYear) && z.onChangeYear.call(T, _.currentTime, T.data("input"))
				}), T.getValue = function() {
					return _.getCurrentTime()
				}, T.setOptions = function(e) {
					var u = {};
					z = Y.extend(!0, {}, z, e), e.allowTimes && Y.isArray(e.allowTimes) && e.allowTimes.length && (z.allowTimes = Y.extend(!0, [], e.allowTimes)), e.weekends && Y.isArray(e.weekends) && e.weekends.length && (z.weekends = Y.extend(!0, [], e.weekends)), e.allowDates && Y.isArray(e.allowDates) && e.allowDates.length && (z.allowDates = Y.extend(!0, [], e.allowDates)), e.allowDateRe && "[object String]" === Object.prototype.toString.call(e.allowDateRe) && (z.allowDateRe = new RegExp(e.allowDateRe)), e.highlightedDates && Y.isArray(e.highlightedDates) && e.highlightedDates.length && (Y.each(e.highlightedDates, function(e, t) {
						var n,
							i = Y.map(t.split(","), Y.trim),
							r = new U(V.parseDate(i[0], z.formatDate), i[1], i[2]),
							o = V.formatDate(r.date, z.formatDate);
						void 0 !== u[o] ? (n = u[o].desc) && n.length && r.desc && r.desc.length && (u[o].desc = n + "\n" + r.desc) : u[o] = r
					}), z.highlightedDates = Y.extend(!0, [], u)), e.highlightedPeriods && Y.isArray(e.highlightedPeriods) && e.highlightedPeriods.length && (u = Y.extend(!0, [], z.highlightedDates), Y.each(e.highlightedPeriods, function(e, t) {
						var n,
							i,
							r,
							o,
							a,
							s,
							l;
						if (Y.isArray(t)) n = t[0], i = t[1], r = t[2], l = t[3];else {
							var c = Y.map(t.split(","), Y.trim);
							n = V.parseDate(c[0], z.formatDate), i = V.parseDate(c[1], z.formatDate), r = c[2], l = c[3]
						}
						for (; n <= i;) o = new U(n, r, l), a = V.formatDate(n, z.formatDate), n.setDate(n.getDate() + 1), void 0 !== u[a] ? (s = u[a].desc) && s.length && o.desc && o.desc.length && (u[a].desc = s + "\n" + o.desc) : u[a] = o
					}), z.highlightedDates = Y.extend(!0, [], u)), e.disabledDates && Y.isArray(e.disabledDates) && e.disabledDates.length && (z.disabledDates = Y.extend(!0, [], e.disabledDates)), e.disabledWeekDays && Y.isArray(e.disabledWeekDays) && e.disabledWeekDays.length && (z.disabledWeekDays = Y.extend(!0, [], e.disabledWeekDays)), !z.open && !z.opened || z.inline || b.trigger("open.xdsoft"), z.inline && (d = !0, T.addClass("xdsoft_inline"), b.after(T).hide()), z.inverseButton && (z.next = "xdsoft_prev", z.prev = "xdsoft_next"), z.datepicker ? g.addClass("active") : g.removeClass("active"), z.timepicker ? s.addClass("active") : s.removeClass("active"), z.value && (_.setCurrentTime(z.value), b && b.val && b.val(_.str)), z.dayOfWeekStart = isNaN(z.dayOfWeekStart) ? 0 : parseInt(z.dayOfWeekStart, 10) % 7, z.timepickerScrollbar || c.xdsoftScroller("hide"), z.minDate && /^[\+\-](.*)$/.test(z.minDate) && (z.minDate = V.formatDate(_.strToDateTime(z.minDate), z.formatDate)), z.maxDate && /^[\+\-](.*)$/.test(z.maxDate) && (z.maxDate = V.formatDate(_.strToDateTime(z.maxDate), z.formatDate)), l.toggle(z.showApplyButton), x.find(".xdsoft_today_button").css("visibility", z.todayButton ? "visible" : "hidden"), x.find("." + z.prev).css("visibility", z.prevButton ? "visible" : "hidden"), x.find("." + z.next).css("visibility", z.nextButton ? "visible" : "hidden"), n(z), z.validateOnBlur && b.off("blur.xdsoft").on("blur.xdsoft", function() {
						if (z.allowBlank && (!Y.trim(Y(this).val()).length || "string" == typeof z.mask && Y.trim(Y(this).val()) === z.mask.replace(/[0-9]/g, "_"))) Y(this).val(null), T.data("xdsoft_datetime").empty();else {
							var e = V.parseDate(Y(this).val(), z.format);
							if (e) Y(this).val(V.formatDate(e, z.format));else {
								var t = +[ Y(this).val()[0], Y(this).val()[1] ].join(""),
									n = +[ Y(this).val()[2], Y(this).val()[3] ].join("");
								Y(this).val(!z.datepicker && z.timepicker && 0 <= t && t < 24 && 0 <= n && n < 60 ? [ t, n ].map(function(e) {
									return 9 < e ? e : "0" + e
								}).join(":") : V.formatDate(_.now(), z.format))
							}
							T.data("xdsoft_datetime").setCurrentTime(Y(this).val())
						}
						T.trigger("changedatetime.xdsoft"), T.trigger("close.xdsoft")
					}), z.dayOfWeekStartPrev = 0 === z.dayOfWeekStart ? 6 : z.dayOfWeekStart - 1, T.trigger("xchange.xdsoft").trigger("afterOpen.xdsoft")
				}, T.data("options", z).on("touchstart mousedown.xdsoft", function(e) {
					return e.stopPropagation(), e.preventDefault(), S.hide(), D.hide(), !1
				}), c.append(k), c.xdsoftScroller(), T.on("afterOpen.xdsoft", function() {
					c.xdsoftScroller()
				}), T.append(g).append(s), !0 !== z.withoutCopyright && T.append(e), g.append(x).append(w).append(l), Y(z.parentID).append(T), _ = new function() {
					var r = this;
					r.now = function(e) {
						var t,
							n,
							i = new Date;
						return !e && z.defaultDate && (t = r.strToDateTime(z.defaultDate), i.setFullYear(t.getFullYear()), i.setMonth(t.getMonth()), i.setDate(t.getDate())), z.yearOffset && i.setFullYear(i.getFullYear() + z.yearOffset), !e && z.defaultTime && (n = r.strtotime(z.defaultTime), i.setHours(n.getHours()), i.setMinutes(n.getMinutes())), i
					}, r.isValidDate = function(e) {
						return "[object Date]" === Object.prototype.toString.call(e) && !isNaN(e.getTime())
					}, r.setCurrentTime = function(e) {
						r.currentTime = "string" == typeof e ? r.strToDateTime(e) : r.isValidDate(e) ? e : r.now(), T.trigger("xchange.xdsoft")
					}, r.empty = function() {
						r.currentTime = null
					}, r.getCurrentTime = function() {
						return r.currentTime
					}, r.nextMonth = function() {
						(void 0 === r.currentTime || null === r.currentTime) && (r.currentTime = r.now());
						var e,
							t = r.currentTime.getMonth() + 1;
						return 12 === t && (r.currentTime.setFullYear(r.currentTime.getFullYear() + 1), t = 0), e = r.currentTime.getFullYear(), r.currentTime.setDate(Math.min(new Date(r.currentTime.getFullYear(), t + 1, 0).getDate(), r.currentTime.getDate())), r.currentTime.setMonth(t), z.onChangeMonth && Y.isFunction(z.onChangeMonth) && z.onChangeMonth.call(T, _.currentTime, T.data("input")), e !== r.currentTime.getFullYear() && Y.isFunction(z.onChangeYear) && z.onChangeYear.call(T, _.currentTime, T.data("input")), T.trigger("xchange.xdsoft"), t
					}, r.prevMonth = function() {
						(void 0 === r.currentTime || null === r.currentTime) && (r.currentTime = r.now());
						var e = r.currentTime.getMonth() - 1;
						return -1 === e && (r.currentTime.setFullYear(r.currentTime.getFullYear() - 1), e = 11), r.currentTime.setDate(Math.min(new Date(r.currentTime.getFullYear(), e + 1, 0).getDate(), r.currentTime.getDate())), r.currentTime.setMonth(e), z.onChangeMonth && Y.isFunction(z.onChangeMonth) && z.onChangeMonth.call(T, _.currentTime, T.data("input")), T.trigger("xchange.xdsoft"), e
					}, r.getWeekOfYear = function(e) {
						if (z.onGetWeekOfYear && Y.isFunction(z.onGetWeekOfYear)) {
							var t = z.onGetWeekOfYear.call(T, e);
							if (void 0 !== t) return t
						}
						var n = new Date(e.getFullYear(), 0, 1);
						return 4 != n.getDay() && n.setMonth(0, 1 + (4 - n.getDay() + 7) % 7), Math.ceil(((e - n) / 864e5 + n.getDay() + 1) / 7)
					}, r.strToDateTime = function(e) {
						var t,
							n,
							i = [];
						return e && e instanceof Date && r.isValidDate(e) ? e : ((i = /^(\+|\-)(.*)$/.exec(e)) && (i[2] = V.parseDate(i[2], z.formatDate)), i && i[2] ? (t = i[2].getTime() - 6e4 * i[2].getTimezoneOffset(), n = new Date(r.now(!0).getTime() + parseInt(i[1] + "1", 10) * t)) : n = e ? V.parseDate(e, z.format) : r.now(), r.isValidDate(n) || (n = r.now()), n)
					}, r.strToDate = function(e) {
						if (e && e instanceof Date && r.isValidDate(e)) return e;
						var t = e ? V.parseDate(e, z.formatDate) : r.now(!0);
						return r.isValidDate(t) || (t = r.now(!0)), t
					}, r.strtotime = function(e) {
						if (e && e instanceof Date && r.isValidDate(e)) return e;
						var t = e ? V.parseDate(e, z.formatTime) : r.now(!0);
						return r.isValidDate(t) || (t = r.now(!0)), t
					}, r.str = function() {
						return V.formatDate(r.currentTime, z.format)
					}, r.currentTime = this.now()
				}, l.on("touchend click", function(e) {
					e.preventDefault(), T.data("changed", !0), _.setCurrentTime(t()), b.val(_.str()), T.trigger("close.xdsoft")
				}), x.find(".xdsoft_today_button").on("touchend mousedown.xdsoft", function() {
					T.data("changed", !0), _.setCurrentTime(0), T.trigger("afterOpen.xdsoft")
				}).on("dblclick.xdsoft", function() {
					var e,
						t,
						n = _.getCurrentTime();
					n = new Date(n.getFullYear(), n.getMonth(), n.getDate()), e = _.strToDate(z.minDate), n < (e = new Date(e.getFullYear(), e.getMonth(), e.getDate())) || (t = _.strToDate(z.maxDate), (t = new Date(t.getFullYear(), t.getMonth(), t.getDate())) < n || (b.val(_.str()), b.trigger("change"), T.trigger("close.xdsoft")))
				}), x.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft", function() {
					var n = Y(this),
						i = 0,
						r = !1;
					!function e(t) {
						n.hasClass(z.next) ? _.nextMonth() : n.hasClass(z.prev) && _.prevMonth(), z.monthChangeSpinner && (r || (i = setTimeout(e, t || 100)))
					}(500), Y([ document.body, window ]).on("touchend mouseup.xdsoft", function e() {
						clearTimeout(i), r = !0, Y([ document.body, window ]).off("touchend mouseup.xdsoft", e)
					})
				}), s.find(".xdsoft_prev,.xdsoft_next").on("touchend mousedown.xdsoft", function() {
					var o = Y(this),
						a = 0,
						s = !1,
						l = 110;
					!function e(t) {
						var n = c[0].clientHeight,
							i = k[0].offsetHeight,
							r = Math.abs(parseInt(k.css("marginTop"), 10));
						o.hasClass(z.next) && i - n - z.timeHeightInTimePicker >= r ? k.css("marginTop", "-" + (r + z.timeHeightInTimePicker) + "px") : o.hasClass(z.prev) && 0 <= r - z.timeHeightInTimePicker && k.css("marginTop", "-" + (r - z.timeHeightInTimePicker) + "px"), c.trigger("scroll_element.xdsoft_scroller", [ Math.abs(parseInt(k[0].style.marginTop, 10) / (i - n)) ]), l = 10 < l ? 10 : l - 10, s || (a = setTimeout(e, t || l))
					}(500), Y([ document.body, window ]).on("touchend mouseup.xdsoft", function e() {
						clearTimeout(a), s = !0, Y([ document.body, window ]).off("touchend mouseup.xdsoft", e)
					})
				}), i = 0, T.on("xchange.xdsoft", function(e) {
					clearTimeout(i), i = setTimeout(function() {
						(void 0 === _.currentTime || null === _.currentTime) && (_.currentTime = _.now());
						for (var e, t, n, i, r, o, a, s, l, c, u = "", d = new Date(_.currentTime.getFullYear(), _.currentTime.getMonth(), 1, 12, 0, 0), f = 0, h = _.now(), p = !1, g = !1, m = [], v = !0, y = ""; d.getDay() !== z.dayOfWeekStart;) d.setDate(d.getDate() - 1);
						for (u += "<table><thead><tr>", z.weeks && (u += "<th></th>"), e = 0; e < 7; e += 1) u += "<th>" + z.i18n[J].dayOfWeekShort[(e + z.dayOfWeekStart) % 7] + "</th>";
						for (u += "</tr></thead>", u += "<tbody>", !1 !== z.maxDate && (p = _.strToDate(z.maxDate), p = new Date(p.getFullYear(), p.getMonth(), p.getDate(), 23, 59, 59, 999)), !1 !== z.minDate && (g = _.strToDate(z.minDate), g = new Date(g.getFullYear(), g.getMonth(), g.getDate())); f < _.currentTime.countDaysInMonth() || d.getDay() !== z.dayOfWeekStart || _.currentTime.getMonth() === d.getMonth();) m = [], f += 1, n = d.getDay(), i = d.getDate(), r = d.getFullYear(), o = d.getMonth(), a = _.getWeekOfYear(d), c = "", m.push("xdsoft_date"), s = z.beforeShowDay && Y.isFunction(z.beforeShowDay.call) ? z.beforeShowDay.call(T, d) : null, z.allowDateRe && "[object RegExp]" === Object.prototype.toString.call(z.allowDateRe) ? z.allowDateRe.test(V.formatDate(d, z.formatDate)) || m.push("xdsoft_disabled") : z.allowDates && 0 < z.allowDates.length ? -1 === z.allowDates.indexOf(V.formatDate(d, z.formatDate)) && m.push("xdsoft_disabled") : !1 !== p && p < d || !1 !== g && d < g || s && !1 === s[0] ? m.push("xdsoft_disabled") : -1 !== z.disabledDates.indexOf(V.formatDate(d, z.formatDate)) ? m.push("xdsoft_disabled") : -1 !== z.disabledWeekDays.indexOf(n) ? m.push("xdsoft_disabled") : b.is("[readonly]") && m.push("xdsoft_disabled"), s && "" !== s[1] && m.push(s[1]), _.currentTime.getMonth() !== o && m.push("xdsoft_other_month"), (z.defaultSelect || T.data("changed")) && V.formatDate(_.currentTime, z.formatDate) === V.formatDate(d, z.formatDate) && m.push("xdsoft_current"), V.formatDate(h, z.formatDate) === V.formatDate(d, z.formatDate) && m.push("xdsoft_today"), (0 === d.getDay() || 6 === d.getDay() || -1 !== z.weekends.indexOf(V.formatDate(d, z.formatDate))) && m.push("xdsoft_weekend"), void 0 !== z.highlightedDates[V.formatDate(d, z.formatDate)] && (t = z.highlightedDates[V.formatDate(d, z.formatDate)], m.push(void 0 === t.style ? "xdsoft_highlighted_default" : t.style), c = void 0 === t.desc ? "" : t.desc), z.beforeShowDay && Y.isFunction(z.beforeShowDay) && m.push(z.beforeShowDay(d)), v && (u += "<tr>", v = !1, z.weeks && (u += "<th>" + a + "</th>")), u += '<td data-date="' + i + '" data-month="' + o + '" data-year="' + r + '" class="xdsoft_date xdsoft_day_of_week' + d.getDay() + " " + m.join(" ") + '" title="' + c + '"><div>' + i + "</div></td>", d.getDay() === z.dayOfWeekStartPrev && (u += "</tr>", v = !0), d.setDate(i + 1);
						if (u += "</tbody></table>", w.html(u), x.find(".xdsoft_label span").eq(0).text(z.i18n[J].months[_.currentTime.getMonth()]), x.find(".xdsoft_label span").eq(1).text(_.currentTime.getFullYear()), o = y = "", l = function(e, t) {
								var n,
									i,
									r = _.now(),
									o = z.allowTimes && Y.isArray(z.allowTimes) && z.allowTimes.length;
								r.setHours(e), e = parseInt(r.getHours(), 10), r.setMinutes(t), t = parseInt(r.getMinutes(), 10), (n = new Date(_.currentTime)).setHours(e), n.setMinutes(t), !(m = []) !== z.minDateTime && z.minDateTime > n || !1 !== z.maxTime && _.strtotime(z.maxTime).getTime() < r.getTime() || !1 !== z.minTime && _.strtotime(z.minTime).getTime() > r.getTime() ? m.push("xdsoft_disabled") : !1 !== z.minDateTime && z.minDateTime > n || !1 !== z.disabledMinTime && r.getTime() > _.strtotime(z.disabledMinTime).getTime() && !1 !== z.disabledMaxTime && r.getTime() < _.strtotime(z.disabledMaxTime).getTime() ? m.push("xdsoft_disabled") : b.is("[readonly]") && m.push("xdsoft_disabled"), (i = new Date(_.currentTime)).setHours(parseInt(_.currentTime.getHours(), 10)), o || i.setMinutes(Math[z.roundTime](_.currentTime.getMinutes() / z.step) * z.step), (z.initTime || z.defaultSelect || T.data("changed")) && i.getHours() === parseInt(e, 10) && (!o && 59 < z.step || i.getMinutes() === parseInt(t, 10)) && (z.defaultSelect || T.data("changed") ? m.push("xdsoft_current") : z.initTime && m.push("xdsoft_init_time")), parseInt(h.getHours(), 10) === parseInt(e, 10) && parseInt(h.getMinutes(), 10) === parseInt(t, 10) && m.push("xdsoft_today"), y += '<div class="xdsoft_time ' + m.join(" ") + '" data-hour="' + e + '" data-minute="' + t + '">' + V.formatDate(r, z.formatTime) + "</div>"
							}, z.allowTimes && Y.isArray(z.allowTimes) && z.allowTimes.length)
							for (f = 0; f < z.allowTimes.length; f += 1) l(_.strtotime(z.allowTimes[f]).getHours(), o = _.strtotime(z.allowTimes[f]).getMinutes());
						else
							for (e = f = 0; f < (z.hours12 ? 12 : 24); f += 1)
								for (e = 0; e < 60; e += z.step) l((f < 10 ? "0" : "") + f, o = (e < 10 ? "0" : "") + e);
						for (k.html(y), C = "", f = 0, f = parseInt(z.yearStart, 10) + z.yearOffset; f <= parseInt(z.yearEnd, 10) + z.yearOffset; f += 1) C += '<div class="xdsoft_option ' + (_.currentTime.getFullYear() === f ? "xdsoft_current" : "") + '" data-value="' + f + '">' + f + "</div>";
						for (S.children().eq(0).html(C), f = parseInt(z.monthStart, 10), C = ""; f <= parseInt(z.monthEnd, 10); f += 1) C += '<div class="xdsoft_option ' + (_.currentTime.getMonth() === f ? "xdsoft_current" : "") + '" data-value="' + f + '">' + z.i18n[J].months[f] + "</div>";
						D.children().eq(0).html(C), Y(T).trigger("generate.xdsoft")
					}, 10), e.stopPropagation()
				}).on("afterOpen.xdsoft", function() {
					var e,
						t,
						n,
						i;
					z.timepicker && (k.find(".xdsoft_current").length ? e = ".xdsoft_current" : k.find(".xdsoft_init_time").length && (e = ".xdsoft_init_time"), e ? (t = c[0].clientHeight, (n = k[0].offsetHeight) - t < (i = k.find(e).index() * z.timeHeightInTimePicker + 1) && (i = n - t), c.trigger("scroll_element.xdsoft_scroller", [ parseInt(i, 10) / (n - t) ])) : c.trigger("scroll_element.xdsoft_scroller", [ 0 ]))
				}), r = 0, w.on("touchend click.xdsoft", "td", function(e) {
					e.stopPropagation(), r += 1;
					var t = Y(this),
						n = _.currentTime;
					return null == n && (_.currentTime = _.now(), n = _.currentTime), !t.hasClass("xdsoft_disabled") && (n.setDate(1), n.setFullYear(t.data("year")), n.setMonth(t.data("month")), n.setDate(t.data("date")), T.trigger("select.xdsoft", [ n ]), b.val(_.str()), z.onSelectDate && Y.isFunction(z.onSelectDate) && z.onSelectDate.call(T, _.currentTime, T.data("input"), e), T.data("changed", !0), T.trigger("xchange.xdsoft"), T.trigger("changedatetime.xdsoft"), (1 < r || !0 === z.closeOnDateSelect || !1 === z.closeOnDateSelect && !z.timepicker) && !z.inline && T.trigger("close.xdsoft"), void setTimeout(function() {
							r = 0
						}, 200))
				}), k.on("touchend click.xdsoft", "div", function(e) {
					e.stopPropagation();
					var t = Y(this),
						n = _.currentTime;
					return null == n && (_.currentTime = _.now(), n = _.currentTime), !t.hasClass("xdsoft_disabled") && (n.setHours(t.data("hour")), n.setMinutes(t.data("minute")), T.trigger("select.xdsoft", [ n ]), T.data("input").val(_.str()), z.onSelectTime && Y.isFunction(z.onSelectTime) && z.onSelectTime.call(T, _.currentTime, T.data("input"), e), T.data("changed", !0), T.trigger("xchange.xdsoft"), T.trigger("changedatetime.xdsoft"), void (!0 !== z.inline && !0 === z.closeOnTimeSelect && T.trigger("close.xdsoft")))
				}), g.on("mousewheel.xdsoft", function(e) {
					return !z.scrollMonth || (e.deltaY < 0 ? _.nextMonth() : _.prevMonth(), !1)
				}), b.on("mousewheel.xdsoft", function(e) {
					return !z.scrollInput || (!z.datepicker && z.timepicker ? (0 <= (o = k.find(".xdsoft_current").length ? k.find(".xdsoft_current").eq(0).index() : 0) + e.deltaY && o + e.deltaY < k.children().length && (o += e.deltaY), k.children().eq(o).length && k.children().eq(o).trigger("mousedown"), !1) : z.datepicker && !z.timepicker ? (g.trigger(e, [ e.deltaY, e.deltaX, e.deltaY ]), b.val && b.val(_.str()), T.trigger("changedatetime.xdsoft"), !1) : void 0)
				}), T.on("changedatetime.xdsoft", function(e) {
					if (z.onChangeDateTime && Y.isFunction(z.onChangeDateTime)) {
						var t = T.data("input");
						z.onChangeDateTime.call(T, _.currentTime, t, e),
						delete z.value
						, t.trigger("change")
					}
				}).on("generate.xdsoft", function() {
					z.onGenerate && Y.isFunction(z.onGenerate) && z.onGenerate.call(T, _.currentTime, T.data("input")), d && (T.trigger("afterOpen.xdsoft"), d = !1)
				}).on("click.xdsoft", function(e) {
					e.stopPropagation()
				}), o = 0, p = function(e, t) {
					do {
						if (!1 === t(e = e.parentNode)) break
					} while ("HTML" !== e.nodeName)
				}, a = function() {
					var e,
						t,
						n,
						i,
						r,
						o,
						a,
						s,
						l,
						c,
						u,
						d,
						f;
					if (e = (s = T.data("input")).offset(), t = s[0], c = "top", n = e.top + t.offsetHeight - 1, i = e.left, r = "absolute", l = Y(window).width(), d = Y(window).height(), f = Y(window).scrollTop(), document.documentElement.clientWidth - e.left < g.parent().outerWidth(!0)) {
						var h = g.parent().outerWidth(!0) - t.offsetWidth;
						i -= h
					}
					"rtl" === s.parent().css("direction") && (i -= T.outerWidth() - s.outerWidth()), z.fixed ? (n -= f, i -= Y(window).scrollLeft(), r = "fixed") : (a = !1, p(t, function(e) {
						return "fixed" === window.getComputedStyle(e).getPropertyValue("position") ? !(a = !0) : void 0
					}), a ? (r = "fixed", n + T.outerHeight() > d + f ? (c = "bottom", n = d + f - e.top) : n -= f) : n + t.offsetHeight > d + f && (n = e.top - t.offsetHeight + 1), n < 0 && (n = 0), i + t.offsetWidth > l && (i = l - t.offsetWidth)), o = T[0], p(o, function(e) {
						return "relative" === window.getComputedStyle(e).getPropertyValue("position") && l >= e.offsetWidth ? (i -= (l - e.offsetWidth) / 2, !1) : void 0
					}), (u = {
						position : r,
						left : i,
						top : "",
						bottom : ""
					})[c] = n, T.css(u)
				}, T.on("open.xdsoft", function(e) {
					var t = !0;
					z.onShow && Y.isFunction(z.onShow) && (t = z.onShow.call(T, _.currentTime, T.data("input"), e)), !1 !== t && (T.show(), a(), Y(window).off("resize.xdsoft", a).on("resize.xdsoft", a), z.closeOnWithoutClick && Y([ document.body, window ]).on("touchstart mousedown.xdsoft", function e() {
						T.trigger("close.xdsoft"), Y([ document.body, window ]).off("touchstart mousedown.xdsoft", e)
					}))
				}).on("close.xdsoft", function(e) {
					var t = !0;
					x.find(".xdsoft_month,.xdsoft_year").find(".xdsoft_select").hide(), z.onClose && Y.isFunction(z.onClose) && (t = z.onClose.call(T, _.currentTime, T.data("input"), e)), !1 === t || z.opened || z.inline || T.hide(), e.stopPropagation()
				}).on("toggle.xdsoft", function() {
					T.trigger(T.is(":visible") ? "close.xdsoft" : "open.xdsoft")
				}).data("input", b), u = 0, T.data("xdsoft_datetime", _), T.setOptions(z), _.setCurrentTime(t()), b.data("xdsoft_datetimepicker", T).on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", function() {
					b.is(":disabled") || b.data("xdsoft_datetimepicker").is(":visible") && z.closeOnInputClick || (clearTimeout(u), u = setTimeout(function() {
						b.is(":disabled") || (d = !0, _.setCurrentTime(t()), z.mask && n(z), T.trigger("open.xdsoft"))
					}, 100))
				}).on("keydown.xdsoft", function(e) {
					var t,
						n = e.which;
					return -1 !== [ O ].indexOf(n) && z.enterLikeTab ? (t = Y("input:visible,textarea:visible,button:visible,a:visible"), T.trigger("close.xdsoft"), t.eq(t.index(this) + 1).focus(), !1) : -1 !== [ W ].indexOf(n) ? (T.trigger("close.xdsoft"), !0) : void 0
				}).on("blur.xdsoft", function() {
					T.trigger("close.xdsoft")
				})
			}, r = function(e) {
				var t = e.data("xdsoft_datetimepicker");
				t && (t.data("xdsoft_datetime", null), t.remove(), e.data("xdsoft_datetimepicker", null).off(".xdsoft"), Y(window).off("resize.xdsoft"), Y([ window, document.body ]).off("mousedown.xdsoft touchstart"), e.unmousewheel && e.unmousewheel())
			}, Y(document).off("keydown.xdsoftctrl keyup.xdsoftctrl").on("keydown.xdsoftctrl", function(e) {
				e.keyCode === y && (B = !0)
			}).on("keyup.xdsoftctrl", function(e) {
				e.keyCode === y && (B = !1)
			}), this.each(function() {
				var t,
					e = Y(this).data("xdsoft_datetimepicker");
				if (e) {
					if ("string" === Y.type(C)) switch (C) {
						case "show":
							Y(this).select().focus(), e.trigger("open.xdsoft");
							break;case "hide":
							e.trigger("close.xdsoft");
							break;case "toggle":
							e.trigger("toggle.xdsoft");
							break;case "destroy":
							r(Y(this));
							break;case "reset":
							this.value = this.defaultValue, this.value && e.data("xdsoft_datetime").isValidDate(V.parseDate(this.value, z.format)) || e.data("changed", !1), e.data("xdsoft_datetime").setCurrentTime(this.value);
							break;case "validate":
							e.data("input").trigger("blur.xdsoft");
							break;default:
							e[C] && Y.isFunction(e[C]) && (o = e[C](n))
					}
					else e.setOptions(C);
					return 0
				}
				"string" !== Y.type(C) && (!z.lazyInit || z.open || z.inline ? i(Y(this)) : (t = Y(this)).on("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", function e() {
					t.is(":disabled") || t.data("xdsoft_datetimepicker") || (clearTimeout(a), a = setTimeout(function() {
						t.data("xdsoft_datetimepicker") || i(t), t.off("open.xdsoft focusin.xdsoft mousedown.xdsoft touchstart", e).trigger("open.xdsoft")
					}, 100))
				}))
			}), o
	}, Y.fn.datetimepicker.defaults = s
}), function(e) {
	"function" == typeof define && define.amd ? define([ "jquery" ], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function(f) {
	function t(e) {
		var t = e || window.event,
			n = v.call(arguments, 1),
			i = 0,
			r = 0,
			o = 0,
			a = 0,
			s = 0,
			l = 0;
		if ((e = f.event.fix(t)).type = "mousewheel", "detail" in t && (o = -1 * t.detail), "wheelDelta" in t && (o = t.wheelDelta), "wheelDeltaY" in t && (o = t.wheelDeltaY), "wheelDeltaX" in t && (r = -1 * t.wheelDeltaX), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (r = -1 * o, o = 0), i = 0 === o ? r : o, "deltaY" in t && (i = o = -1 * t.deltaY), "deltaX" in t && (r = t.deltaX, 0 === o && (i = -1 * r)), 0 !== o || 0 !== r) {
			if (1 === t.deltaMode) {
				var c = f.data(this, "mousewheel-line-height");
				i *= c, o *= c, r *= c
			} else if (2 === t.deltaMode) {
				var u = f.data(this, "mousewheel-page-height");
				i *= u, o *= u, r *= u
			}
			if (a = Math.max(Math.abs(o), Math.abs(r)), (!m || a < m) && (p(t, m = a) && (m /= 40)), p(t, a) && (i /= 40, r /= 40, o /= 40), i = Math[1 <= i ? "floor" : "ceil"](i / m), r = Math[1 <= r ? "floor" : "ceil"](r / m), o = Math[1 <= o ? "floor" : "ceil"](o / m), y.settings.normalizeOffset && this.getBoundingClientRect) {
				var d = this.getBoundingClientRect();
				s = e.clientX - d.left, l = e.clientY - d.top
			}
			return e.deltaX = r, e.deltaY = o, e.deltaFactor = m, e.offsetX = s, e.offsetY = l, e.deltaMode = 0, n.unshift(e, i, r, o), g && clearTimeout(g), g = setTimeout(h, 200), (f.event.dispatch || f.event.handle).apply(this, n)
		}
	}
	function h() {
		m = null
	}
	function p(e, t) {
		return y.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
	}
	var g,
		m,
		e = [ "wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll" ],
		n = "onwheel" in document || 9 <= document.documentMode ? [ "wheel" ] : [ "mousewheel", "DomMouseScroll", "MozMousePixelScroll" ],
		v = Array.prototype.slice;
	if (f.event.fixHooks)
		for (var i = e.length; i;) f.event.fixHooks[e[--i]] = f.event.mouseHooks;
	var y = f.event.special.mousewheel = {
		version : "3.1.12",
		setup : function() {
			if (this.addEventListener)
				for (var e = n.length; e;) this.addEventListener(n[--e], t, !1);
			else
				this.onmousewheel = t;
			f.data(this, "mousewheel-line-height", y.getLineHeight(this)), f.data(this, "mousewheel-page-height", y.getPageHeight(this))
		},
		teardown : function() {
			if (this.removeEventListener)
				for (var e = n.length; e;) this.removeEventListener(n[--e], t, !1);
			else
				this.onmousewheel = null;
			f.removeData(this, "mousewheel-line-height"), f.removeData(this, "mousewheel-page-height")
		},
		getLineHeight : function(e) {
			var t = f(e),
				n = t["offsetParent" in f.fn ? "offsetParent" : "parent"]();
			return n.length || (n = f("body")), parseInt(n.css("fontSize"), 10) || parseInt(t.css("fontSize"), 10) || 16
		},
		getPageHeight : function(e) {
			return f(e).height()
		},
		settings : {
			adjustOldDeltas : !0,
			normalizeOffset : !0
		}
	};
	f.fn.extend({
		mousewheel : function(e) {
			return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
		},
		unmousewheel : function(e) {
			return this.unbind("mousewheel", e)
		}
	})
}), function(a) {
	var s = {
		init : function(i) {
			return this.each(function() {
				s.destroy.call(this), this.opt = a.extend(!0, {}, a.fn.raty.defaults, i);
				var e = a(this);
				s._callback.call(this, [ "number", "readOnly", "score", "scoreName" ]), this.opt.precision && s._adjustPrecision.call(this), this.opt.number = s._between(this.opt.number, 0, this.opt.numberMax), this.opt.path = this.opt.path || "", this.opt.path && "/" !== this.opt.path.slice(this.opt.path.length - 1, this.opt.path.length) && (this.opt.path += "/"), this.stars = s._createStars.call(this), this.score = s._createScore.call(this), s._apply.call(this, this.opt.score);
				var t = this.opt.space ? 4 : 0,
					n = this.opt.width || this.opt.number * this.opt.size + this.opt.number * t;
				this.opt.cancel && (this.cancel = s._createCancel.call(this), n += this.opt.size + t), this.opt.readOnly ? s._lock.call(this) : (e.css("cursor", "pointer"), s._binds.call(this)), !1 !== this.opt.width && e.css("width", n), s._target.call(this, this.opt.score), e.data({
					settings : this.opt,
					raty : !0
				})
			})
		},
		_adjustPrecision : function() {
			this.opt.targetType = "score", this.opt.half = !0
		},
		_apply : function(e) {
			e && 0 < e && (e = s._between(e, 0, this.opt.number), this.score.val(e)), s._fill.call(this, e), e && s._roundStars.call(this, e)
		},
		_between : function(e, t, n) {
			return Math.min(Math.max(parseFloat(e), t), n)
		},
		_binds : function() {
			this.cancel && s._bindCancel.call(this), s._bindClick.call(this), s._bindOut.call(this), s._bindOver.call(this)
		},
		_bindCancel : function() {
			s._bindClickCancel.call(this), s._bindOutCancel.call(this), s._bindOverCancel.call(this)
		},
		_bindClick : function() {
			var t = this,
				n = a(t);
			t.stars.on("click.raty", function(e) {
				t.score.val(t.opt.half || t.opt.precision ? n.data("score") : this.alt), t.opt.click && t.opt.click.call(t, parseFloat(t.score.val()), e)
			})
		},
		_bindClickCancel : function() {
			var t = this;
			t.cancel.on("click.raty", function(e) {
				t.score.removeAttr("value"), t.opt.click && t.opt.click.call(t, null, e)
			})
		},
		_bindOut : function() {
			var n = this;
			a(this).on("mouseleave.raty", function(e) {
				var t = parseFloat(n.score.val()) || void 0;
				s._apply.call(n, t), s._target.call(n, t, e), n.opt.mouseout && n.opt.mouseout.call(n, t, e)
			})
		},
		_bindOutCancel : function() {
			var t = this;
			t.cancel.on("mouseleave.raty", function(e) {
				a(this).attr("src", t.opt.path + t.opt.cancelOff), t.opt.mouseout && t.opt.mouseout.call(t, t.score.val() || null, e)
			})
		},
		_bindOverCancel : function() {
			var t = this;
			t.cancel.on("mouseover.raty", function(e) {
				a(this).attr("src", t.opt.path + t.opt.cancelOn), t.stars.attr("src", t.opt.path + t.opt.starOff), s._target.call(t, null, e), t.opt.mouseover && t.opt.mouseover.call(t, null)
			})
		},
		_bindOver : function() {
			var r = this,
				o = a(r),
				e = r.opt.half ? "mousemove.raty" : "mouseover.raty";
			r.stars.on(e, function(e) {
				var t = parseInt(this.alt, 10);
				if (r.opt.half) {
					var n = parseFloat((e.pageX - a(this).offset().left) / r.opt.size),
						i = .5 < n ? 1 : .5;
					t = t - 1 + i, s._fill.call(r, t), r.opt.precision && (t = t - i + n), s._roundStars.call(r, t), o.data("score", t)
				} else s._fill.call(r, t);
				s._target.call(r, t, e), r.opt.mouseover && r.opt.mouseover.call(r, t, e)
			})
		},
		_callback : function(e) {
			for (i in e) "function" == typeof this.opt[e[i]] && (this.opt[e[i]] = this.opt[e[i]].call(this))
		},
		_createCancel : function() {
			var e = a(this),
				t = this.opt.path + this.opt.cancelOff,
				n = a("<img />", {
					src : t,
					alt : "x",
					title : this.opt.cancelHint,
					class : "raty-cancel"
				});
			return "left" == this.opt.cancelPlace ? e.prepend("&#160;").prepend(n) : e.append("&#160;").append(n), n
		},
		_createScore : function() {
			return a("<input />", {
				type : "hidden",
				name : this.opt.scoreName
			}).appendTo(this)
		},
		_createStars : function() {
			for (var e = a(this), t = 1; t <= this.opt.number; t++) {
				var n = s._getHint.call(this, t),
					i = this.opt.score && this.opt.score >= t ? "starOn" : "starOff";
				i = this.opt.path + this.opt[i], a("<img />", {
					src : i,
					alt : t,
					title : n
				}).appendTo(this), this.opt.space && e.append(t < this.opt.number ? "&#160;" : "")
			}
			return e.children("img")
		},
		_error : function(e) {
			a(this).html(e), a.error(e)
		},
		_fill : function(e) {
			for (var t = this, n = 0, i = 1; i <= t.stars.length; i++) {
				var r = t.stars.eq(i - 1),
					o = t.opt.single ? i == e : i <= e;
				if (t.opt.iconRange && t.opt.iconRange.length > n) {
					var a = t.opt.iconRange[n],
						s = a.on || t.opt.starOn,
						l = a.off || t.opt.starOff,
						c = o ? s : l;
					i <= a.range && r.attr("src", t.opt.path + c), i == a.range && n++
				} else {
					c = o ? "starOn" : "starOff";r.attr("src", this.opt.path + this.opt[c])
				}
			}
		},
		_getHint : function(e) {
			var t = this.opt.hints[e - 1];
			return "" === t ? "" : t || e
		},
		_lock : function() {
			var e = parseInt(this.score.val(), 10),
				t = e ? s._getHint.call(this, e) : this.opt.noRatedMsg;
			a(this).data("readonly", !0).css("cursor", "").attr("title", t), this.score.attr("readonly", "readonly"), this.stars.attr("title", t), this.cancel && this.cancel.hide()
		},
		_roundStars : function(e) {
			var t = (e - Math.floor(e)).toFixed(2);
			if (t > this.opt.round.down) {
				var n = "starOn";
				this.opt.halfShow && t < this.opt.round.up ? n = "starHalf" : t < this.opt.round.full && (n = "starOff"), this.stars.eq(Math.ceil(e) - 1).attr("src", this.opt.path + this.opt[n])
			}
		},
		_target : function(e, t) {
			if (this.opt.target) {
				var n = a(this.opt.target);
				0 === n.length && s._error.call(this, "Target selector invalid or missing!"), this.opt.targetFormat.indexOf("{score}") < 0 && s._error.call(this, 'Template "{score}" missing!');
				var i = t && "mouseover" == t.type;
				void 0 === e ? e = this.opt.targetText : null === e ? e = i ? this.opt.cancelHint : this.opt.targetText : ("hint" == this.opt.targetType ? e = s._getHint.call(this, Math.ceil(e)) : this.opt.precision && (e = parseFloat(e).toFixed(1)), i || this.opt.targetKeep || (e = this.opt.targetText)), e && (e = this.opt.targetFormat.toString().replace("{score}", e)), n.is(":input") ? n.val(e) : n.html(e)
			}
		},
		_unlock : function() {
			a(this).data("readonly", !1).css("cursor", "pointer").removeAttr("title"), this.score.removeAttr("readonly", "readonly");
			for (var e = 0; e < this.opt.number; e++) this.stars.eq(e).attr("title", s._getHint.call(this, e + 1));
			this.cancel && this.cancel.css("display", "")
		},
		cancel : function(e) {
			return this.each(function() {
				!0 !== a(this).data("readonly") && (s[e ? "click" : "score"].call(this, null), this.score.removeAttr("value"))
			})
		},
		click : function(e) {
			return a(this).each(function() {
				!0 !== a(this).data("readonly") && (s._apply.call(this, e), this.opt.click || s._error.call(this, 'You must add the "click: function(score, evt) { }" callback.'), this.opt.click.call(this, e, {
					type : "click"
				}), s._target.call(this, e))
			})
		},
		destroy : function() {
			return a(this).each(function() {
				var e = a(this),
					t = e.data("raw");
				t ? e.off(".raty").empty().css({
					cursor : t.style.cursor,
					width : t.style.width
				}).removeData("readonly") : e.data("raw", e.clone()[0])
			})
		},
		getScore : function() {
			var e,
				t = [];
			return a(this).each(function() {
					e = this.score.val(), t.push(e ? parseFloat(e) : void 0)
				}), 1 < t.length ? t : t[0]
		},
		readOnly : function(t) {
			return this.each(function() {
				var e = a(this);
				e.data("readonly") !== t && (t ? (e.off(".raty").children("img").off(".raty"), s._lock.call(this)) : (s._binds.call(this), s._unlock.call(this)), e.data("readonly", t))
			})
		},
		reload : function() {
			return s.set.call(this, {})
		},
		score : function() {
			return arguments.length ? s.setScore.apply(this, arguments) : s.getScore.call(this)
		},
		set : function(i) {
			return this.each(function() {
				var e = a(this),
					t = e.data("settings"),
					n = a.extend({}, t, i);
				e.raty(n)
			})
		},
		setScore : function(e) {
			return a(this).each(function() {
				!0 !== a(this).data("readonly") && (s._apply.call(this, e), s._target.call(this, e))
			})
		}
	};
	a.fn.raty = function(e) {
		return s[e] ? s[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void a.error("Method " + e + " does not exist!") : s.init.apply(this, arguments)
	}, a.fn.raty.defaults = {
		cancel : !1,
		cancelHint : "Cancel this rating!",
		cancelOff : "cancel-off.png",
		cancelOn : "cancel-on.png",
		cancelPlace : "left",
		click : void 0,
		half : !1,
		halfShow : !0,
		hints : [ "bad", "poor", "regular", "good", "gorgeous" ],
		iconRange : void 0,
		mouseout : void 0,
		mouseover : void 0,
		noRatedMsg : "Not rated yet!",
		number : 5,
		numberMax : 20,
		path : "",
		precision : !1,
		readOnly : !1,
		round : {
			down : .25,
			full : .6,
			up : .76
		},
		score : void 0,
		scoreName : "score",
		single : !1,
		size : 16,
		space : !0,
		starHalf : "star-half.png",
		starOff : "star-off.png",
		starOn : "star-on.png",
		target : void 0,
		targetFormat : "{score}",
		targetKeep : !1,
		targetText : "",
		targetType : "hint",
		width : void 0
	}
}(jQuery), function(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define([ "exports", "jquery", "popper.js" ], t) : t(e.bootstrap = {}, e.jQuery, e.Popper)
}(this, function(e, t, u) {
	"use strict";
	function i(e, t) {
		for (var n = 0; n < t.length; n++) {
			var i = t[n];
			i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
		}
	}
	function a(e, t, n) {
		return t && i(e.prototype, t), n && i(e, n), e
	}
	function d() {
		return (d = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var n = arguments[t];
				for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
			}
			return e
		}).apply(this, arguments)
	}
	t = t && t.hasOwnProperty("default") ? t.default : t, u = u && u.hasOwnProperty("default") ? u.default : u;
	var r,
		n,
		o,
		s,
		l,
		c,
		f,
		h,
		p,
		g,
		m,
		v,
		y,
		b,
		_,
		T,
		x,
		w,
		k,
		D,
		S,
		C,
		E,
		O,
		A,
		I,
		N,
		M,
		j,
		P,
		W,
		H,
		L,
		$,
		F,
		R,
		q,
		B,
		z,
		Y,
		U,
		V,
		J,
		K,
		G,
		Q,
		X,
		Z,
		ee,
		te,
		ne,
		ie,
		re,
		oe,
		ae,
		se,
		le,
		ce,
		ue,
		de,
		fe,
		he,
		pe,
		ge,
		me,
		ve,
		ye,
		be,
		_e,
		Te,
		xe,
		we,
		ke,
		De,
		Se,
		Ce,
		Ee,
		Oe,
		Ae,
		Ie,
		Ne,
		Me,
		je,
		Pe,
		We,
		He,
		Le,
		$e,
		Fe,
		Re,
		qe,
		Be,
		ze,
		Ye,
		Ue,
		Ve,
		Je,
		Ke,
		Ge,
		Qe,
		Xe,
		Ze,
		et,
		tt,
		nt,
		it,
		rt,
		ot,
		at,
		st,
		lt,
		ct,
		ut,
		dt,
		ft,
		ht,
		pt,
		gt,
		mt,
		vt,
		yt,
		bt,
		_t = (vt = t, yt = !1, bt = {
			TRANSITION_END : "bsTransitionEnd",
			getUID : function(e) {
				for (; e += ~~(1e6 * Math.random()), document.getElementById(e);)
					;
				return e
			},
			getSelectorFromElement : function(e) {
				var t,
					n = e.getAttribute("data-target");
				n && "#" !== n || (n = e.getAttribute("href") || ""), "#" === n.charAt(0) && (t = n, n = t = "function" == typeof vt.escapeSelector ? vt.escapeSelector(t).substr(1) : t.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));try {
					return 0 < vt(document).find(n).length ? n : null
				} catch (e) {
					return null
				}
			},
			reflow : function(e) {
				return e.offsetHeight
			},
			triggerTransitionEnd : function(e) {
				vt(e).trigger(yt.end)
			},
			supportsTransitionEnd : function() {
				return Boolean(yt)
			},
			isElement : function(e) {
				return (e[0] || e).nodeType
			},
			typeCheckConfig : function(e, t, n) {
				for (var i in n)
					if (Object.prototype.hasOwnProperty.call(n, i)) {
						var r = n[i],
							o = t[i],
							a = o && bt.isElement(o) ? "element" : (s = o, {}.toString.call(s).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
						if (!new RegExp(r).test(a))
							throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '".')
				}
				var s
			}
		}, yt = ("undefined" == typeof window || !window.QUnit) && {
			end : "transitionend"
		}, vt.fn.emulateTransitionEnd = function(e) {
			var t = this,
				n = !1;
			return vt(this).one(bt.TRANSITION_END, function() {
					n = !0
				}), setTimeout(function() {
					n || bt.triggerTransitionEnd(t)
				}, e), this
		}, bt.supportsTransitionEnd() && (vt.event.special[bt.TRANSITION_END] = {
			bindType : yt.end,
			delegateType : yt.end,
			handle : function(e) {
				if (vt(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
			}
		}), bt),
		Tt = (n = "alert", s = "." + (o = "bs.alert"), l = (r = t).fn[n], c = {
			CLOSE : "close" + s,
			CLOSED : "closed" + s,
			CLICK_DATA_API : "click" + s + ".data-api"
		}, "alert", "fade", "show", f = function() {
			function i(e) {
				this._element = e
			}
			var e = i.prototype;
			return e.close = function(e) {
					e = e || this._element;
					var t = this._getRootElement(e);
					this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
				}, e.dispose = function() {
					r.removeData(this._element, o), this._element = null
				}, e._getRootElement = function(e) {
					var t = _t.getSelectorFromElement(e),
						n = !1;
					return t && (n = r(t)[0]), n || (n = r(e).closest(".alert")[0]), n
				}, e._triggerCloseEvent = function(e) {
					var t = r.Event(c.CLOSE);
					return r(e).trigger(t), t
				}, e._removeElement = function(t) {
					var n = this;
					r(t).removeClass("show"), _t.supportsTransitionEnd() && r(t).hasClass("fade") ? r(t).one(_t.TRANSITION_END, function(e) {
						return n._destroyElement(t, e)
					}).emulateTransitionEnd(150) : this._destroyElement(t)
				}, e._destroyElement = function(e) {
					r(e).detach().trigger(c.CLOSED).remove()
				}, i._jQueryInterface = function(n) {
					return this.each(function() {
						var e = r(this),
							t = e.data(o);
						t || (t = new i(this), e.data(o, t)), "close" === n && t[n](this)
					})
				}, i._handleDismiss = function(t) {
					return function(e) {
						e && e.preventDefault(), t.close(this)
					}
				}, a(i, null, [ {
					key : "VERSION",
					get : function() {
						return "4.0.0"
					}
				} ]), i
		}(), r(document).on(c.CLICK_DATA_API, '[data-dismiss="alert"]', f._handleDismiss(new f)), r.fn[n] = f._jQueryInterface, r.fn[n].Constructor = f, r.fn[n].noConflict = function() {
			return r.fn[n] = l, f._jQueryInterface
		}, f),
		xt = (p = "button", m = "." + (g = "bs.button"), v = ".data-api", y = (h = t).fn[p], b = "active", "btn", _ = '[data-toggle^="button"]', '[data-toggle="buttons"]', "input", ".active", ".btn", T = {
			CLICK_DATA_API : "click" + m + v,
			FOCUS_BLUR_DATA_API : "focus" + m + v + " blur" + m + v
		}, x = function() {
			function n(e) {
				this._element = e
			}
			var e = n.prototype;
			return e.toggle = function() {
					var e = !0,
						t = !0,
						n = h(this._element).closest('[data-toggle="buttons"]')[0];
					if (n) {
						var i = h(this._element).find("input")[0];
						if (i) {
							if ("radio" === i.type)
								if (i.checked && h(this._element).hasClass(b))
									e = !1;else {
									var r = h(n).find(".active")[0];
									r && h(r).removeClass(b)
							}
							if (e) {
								if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
								i.checked = !h(this._element).hasClass(b), h(i).trigger("change")
							}
							i.focus(), t = !1
						}
					}
					t && this._element.setAttribute("aria-pressed", !h(this._element).hasClass(b)), e && h(this._element).toggleClass(b)
				}, e.dispose = function() {
					h.removeData(this._element, g), this._element = null
				}, n._jQueryInterface = function(t) {
					return this.each(function() {
						var e = h(this).data(g);
						e || (e = new n(this), h(this).data(g, e)), "toggle" === t && e[t]()
					})
				}, a(n, null, [ {
					key : "VERSION",
					get : function() {
						return "4.0.0"
					}
				} ]), n
		}(), h(document).on(T.CLICK_DATA_API, _, function(e) {
			e.preventDefault();
			var t = e.target;
			h(t).hasClass("btn") || (t = h(t).closest(".btn")), x._jQueryInterface.call(h(t), "toggle")
		}).on(T.FOCUS_BLUR_DATA_API, _, function(e) {
			var t = h(e.target).closest(".btn")[0];
			h(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
		}), h.fn[p] = x._jQueryInterface, h.fn[p].Constructor = x, h.fn[p].noConflict = function() {
			return h.fn[p] = y, x._jQueryInterface
		}, x),
		wt = (ot = "carousel", st = "." + (at = "bs.carousel"), lt = (rt = t).fn[ot], ct = {
			interval : 5e3,
			keyboard : !0,
			slide : !1,
			pause : "hover",
			wrap : !0
		}, ut = {
			interval : "(number|boolean)",
			keyboard : "boolean",
			slide : "(boolean|string)",
			pause : "(string|boolean)",
			wrap : "boolean"
		}, dt = "next", ft = "prev", ht = {
			SLIDE : "slide" + st,
			SLID : "slid" + st,
			KEYDOWN : "keydown" + st,
			MOUSEENTER : "mouseenter" + st,
			MOUSELEAVE : "mouseleave" + st,
			TOUCHEND : "touchend" + st,
			LOAD_DATA_API : "load" + st + ".data-api",
			CLICK_DATA_API : "click" + st + ".data-api"
		}, pt = "active", gt = {
			ACTIVE : ".active",
			ACTIVE_ITEM : ".active.carousel-item",
			ITEM : ".carousel-item",
			NEXT_PREV : ".carousel-item-next, .carousel-item-prev",
			INDICATORS : ".carousel-indicators",
			DATA_SLIDE : "[data-slide], [data-slide-to]",
			DATA_RIDE : '[data-ride="carousel"]'
		}, mt = function() {
			function o(e, t) {
				this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(t), this._element = rt(e)[0], this._indicatorsElement = rt(this._element).find(gt.INDICATORS)[0], this._addEventListeners()
			}
			var e = o.prototype;
			return e.next = function() {
					this._isSliding || this._slide(dt)
				}, e.nextWhenVisible = function() {
					!document.hidden && rt(this._element).is(":visible") && "hidden" !== rt(this._element).css("visibility") && this.next()
				}, e.prev = function() {
					this._isSliding || this._slide(ft)
				}, e.pause = function(e) {
					e || (this._isPaused = !0), rt(this._element).find(gt.NEXT_PREV)[0] && _t.supportsTransitionEnd() && (_t.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
				}, e.cycle = function(e) {
					e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
				}, e.to = function(e) {
					var t = this;
					this._activeElement = rt(this._element).find(gt.ACTIVE_ITEM)[0];
					var n = this._getItemIndex(this._activeElement);
					if (!(e > this._items.length - 1 || e < 0))
						if (this._isSliding) rt(this._element).one(ht.SLID, function() {
								return t.to(e)
							});else {
							if (n === e) return this.pause(), void this.cycle();
							var i = n < e ? dt : ft;
							this._slide(i, this._items[e])
					}
				}, e.dispose = function() {
					rt(this._element).off(st), rt.removeData(this._element, at), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
				}, e._getConfig = function(e) {
					return e = d({}, ct, e), _t.typeCheckConfig(ot, e, ut), e
				}, e._addEventListeners = function() {
					var t = this;
					this._config.keyboard && rt(this._element).on(ht.KEYDOWN, function(e) {
						return t._keydown(e)
					}), "hover" === this._config.pause && (rt(this._element).on(ht.MOUSEENTER, function(e) {
						return t.pause(e)
					}).on(ht.MOUSELEAVE, function(e) {
						return t.cycle(e)
					}), "ontouchstart" in document.documentElement && rt(this._element).on(ht.TOUCHEND, function() {
						t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) {
							return t.cycle(e)
						}, 500 + t._config.interval)
					}))
				}, e._keydown = function(e) {
					if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
						case 37:
							e.preventDefault(), this.prev();
							break;case 39:
							e.preventDefault(), this.next()
					}
				}, e._getItemIndex = function(e) {
					return this._items = rt.makeArray(rt(e).parent().find(gt.ITEM)), this._items.indexOf(e)
				}, e._getItemByDirection = function(e, t) {
					var n = e === dt,
						i = e === ft,
						r = this._getItemIndex(t),
						o = this._items.length - 1;
					if ((i && 0 === r || n && r === o) && !this._config.wrap) return t;
					var a = (r + (e === ft ? -1 : 1)) % this._items.length;
					return -1 === a ? this._items[this._items.length - 1] : this._items[a]
				}, e._triggerSlideEvent = function(e, t) {
					var n = this._getItemIndex(e),
						i = this._getItemIndex(rt(this._element).find(gt.ACTIVE_ITEM)[0]),
						r = rt.Event(ht.SLIDE, {
							relatedTarget : e,
							direction : t,
							from : i,
							to : n
						});
					return rt(this._element).trigger(r), r
				}, e._setActiveIndicatorElement = function(e) {
					if (this._indicatorsElement) {
						rt(this._indicatorsElement).find(gt.ACTIVE).removeClass(pt);
						var t = this._indicatorsElement.children[this._getItemIndex(e)];
						t && rt(t).addClass(pt)
					}
				}, e._slide = function(e, t) {
					var n,
						i,
						r,
						o = this,
						a = rt(this._element).find(gt.ACTIVE_ITEM)[0],
						s = this._getItemIndex(a),
						l = t || a && this._getItemByDirection(e, a),
						c = this._getItemIndex(l),
						u = Boolean(this._interval);
					if (e === dt ? (n = "carousel-item-left", i = "carousel-item-next", r = "left") : (n = "carousel-item-right", i = "carousel-item-prev", r = "right"), l && rt(l).hasClass(pt))
						this._isSliding = !1;
					else if (!this._triggerSlideEvent(l, r).isDefaultPrevented() && a && l) {
						this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l);
						var d = rt.Event(ht.SLID, {
							relatedTarget : l,
							direction : r,
							from : s,
							to : c
						});
						_t.supportsTransitionEnd() && rt(this._element).hasClass("slide") ? (rt(l).addClass(i), _t.reflow(l), rt(a).addClass(n), rt(l).addClass(n), rt(a).one(_t.TRANSITION_END, function() {
							rt(l).removeClass(n + " " + i).addClass(pt), rt(a).removeClass(pt + " " + i + " " + n), o._isSliding = !1, setTimeout(function() {
								return rt(o._element).trigger(d)
							}, 0)
						}).emulateTransitionEnd(600)) : (rt(a).removeClass(pt), rt(l).addClass(pt), this._isSliding = !1, rt(this._element).trigger(d)), u && this.cycle()
					}
				}, o._jQueryInterface = function(i) {
					return this.each(function() {
						var e = rt(this).data(at),
							t = d({}, ct, rt(this).data());
						"object" == typeof i && (t = d({}, t, i));
						var n = "string" == typeof i ? i : t.slide;
						if (e || (e = new o(this, t), rt(this).data(at, e)), "number" == typeof i) e.to(i);
						else if ("string" == typeof n) {
							if (void 0 === e[n])
								throw new TypeError('No method named "' + n + '"');
							e[n]()
						} else t.interval && (e.pause(), e.cycle())
					})
				}, o._dataApiClickHandler = function(e) {
					var t = _t.getSelectorFromElement(this);
					if (t) {
						var n = rt(t)[0];
						if (n && rt(n).hasClass("carousel")) {
							var i = d({}, rt(n).data(), rt(this).data()),
								r = this.getAttribute("data-slide-to");
							r && (i.interval = !1), o._jQueryInterface.call(rt(n), i), r && rt(n).data(at).to(r), e.preventDefault()
						}
					}
				}, a(o, null, [ {
					key : "VERSION",
					get : function() {
						return "4.0.0"
					}
				}, {
					key : "Default",
					get : function() {
						return ct
					}
				} ]), o
		}(), rt(document).on(ht.CLICK_DATA_API, gt.DATA_SLIDE, mt._dataApiClickHandler), rt(window).on(ht.LOAD_DATA_API, function() {
			rt(gt.DATA_RIDE).each(function() {
				var e = rt(this);
				mt._jQueryInterface.call(e, e.data())
			})
		}), rt.fn[ot] = mt._jQueryInterface, rt.fn[ot].Constructor = mt, rt.fn[ot].noConflict = function() {
			return rt.fn[ot] = lt, mt._jQueryInterface
		}, mt),
		kt = (Ye = "collapse", Ve = "." + (Ue = "bs.collapse"), Je = (ze = t).fn[Ye], Ke = {
			toggle : !0,
			parent : ""
		}, Ge = {
			toggle : "boolean",
			parent : "(string|element)"
		}, Qe = {
			SHOW : "show" + Ve,
			SHOWN : "shown" + Ve,
			HIDE : "hide" + Ve,
			HIDDEN : "hidden" + Ve,
			CLICK_DATA_API : "click" + Ve + ".data-api"
		}, Xe = "show", Ze = "collapse", et = "collapsing", tt = "collapsed", nt = {
			ACTIVES : ".show, .collapsing",
			DATA_TOGGLE : '[data-toggle="collapse"]'
		}, it = function() {
			function s(e, t) {
				this._isTransitioning = !1, this._element = e, this._config = this._getConfig(t), this._triggerArray = ze.makeArray(ze('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
				for (var n = ze(nt.DATA_TOGGLE), i = 0; i < n.length; i++) {
					var r = n[i],
						o = _t.getSelectorFromElement(r);
					null !== o && 0 < ze(o).filter(e).length && (this._selector = o, this._triggerArray.push(r))
				}
				this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
			}
			var e = s.prototype;
			return e.toggle = function() {
					ze(this._element).hasClass(Xe) ? this.hide() : this.show()
				}, e.show = function() {
					var e,
						t,
						n = this;
					if (!(this._isTransitioning || ze(this._element).hasClass(Xe) || (this._parent && 0 === (e = ze.makeArray(ze(this._parent).find(nt.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null), e && (t = ze(e).not(this._selector).data(Ue)) && t._isTransitioning))) {
						var i = ze.Event(Qe.SHOW);
						if (ze(this._element).trigger(i), !i.isDefaultPrevented()) {
							e && (s._jQueryInterface.call(ze(e).not(this._selector), "hide"), t || ze(e).data(Ue, null));
							var r = this._getDimension();
							ze(this._element).removeClass(Ze).addClass(et), (this._element.style[r] = 0) < this._triggerArray.length && ze(this._triggerArray).removeClass(tt).attr("aria-expanded", !0), this.setTransitioning(!0);
							var o = function() {
								ze(n._element).removeClass(et).addClass(Ze).addClass(Xe), n._element.style[r] = "", n.setTransitioning(!1), ze(n._element).trigger(Qe.SHOWN)
							};
							if (_t.supportsTransitionEnd()) {
								var a = "scroll" + (r[0].toUpperCase() + r.slice(1));
								ze(this._element).one(_t.TRANSITION_END, o).emulateTransitionEnd(600), this._element.style[r] = this._element[a] + "px"
							} else o()
						}
					}
				}, e.hide = function() {
					var e = this;
					if (!this._isTransitioning && ze(this._element).hasClass(Xe)) {
						var t = ze.Event(Qe.HIDE);
						if (ze(this._element).trigger(t), !t.isDefaultPrevented()) {
							var n = this._getDimension();
							if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", _t.reflow(this._element), ze(this._element).addClass(et).removeClass(Ze).removeClass(Xe), 0 < this._triggerArray.length)
								for (var i = 0; i < this._triggerArray.length; i++) {
									var r = this._triggerArray[i],
										o = _t.getSelectorFromElement(r);
									null !== o && (ze(o).hasClass(Xe) || ze(r).addClass(tt).attr("aria-expanded", !1))
							}
							this.setTransitioning(!0);
							var a = function() {
								e.setTransitioning(!1), ze(e._element).removeClass(et).addClass(Ze).trigger(Qe.HIDDEN)
							};
							this._element.style[n] = "", _t.supportsTransitionEnd() ? ze(this._element).one(_t.TRANSITION_END, a).emulateTransitionEnd(600) : a()
						}
					}
				}, e.setTransitioning = function(e) {
					this._isTransitioning = e
				}, e.dispose = function() {
					ze.removeData(this._element, Ue), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
				}, e._getConfig = function(e) {
					return (e = d({}, Ke, e)).toggle = Boolean(e.toggle), _t.typeCheckConfig(Ye, e, Ge), e
				}, e._getDimension = function() {
					return ze(this._element).hasClass("width") ? "width" : "height"
				}, e._getParent = function() {
					var n = this,
						e = null;
					_t.isElement(this._config.parent) ? (e = this._config.parent, void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = ze(this._config.parent)[0];
					var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
					return ze(e).find(t).each(function(e, t) {
							n._addAriaAndCollapsedClass(s._getTargetFromElement(t), [ t ])
						}), e
				}, e._addAriaAndCollapsedClass = function(e, t) {
					if (e) {
						var n = ze(e).hasClass(Xe);
						0 < t.length && ze(t).toggleClass(tt, !n).attr("aria-expanded", n)
					}
				}, s._getTargetFromElement = function(e) {
					var t = _t.getSelectorFromElement(e);
					return t ? ze(t)[0] : null
				}, s._jQueryInterface = function(i) {
					return this.each(function() {
						var e = ze(this),
							t = e.data(Ue),
							n = d({}, Ke, e.data(), "object" == typeof i && i);
						if (!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || (t = new s(this, n), e.data(Ue, t)), "string" == typeof i) {
							if (void 0 === t[i])
								throw new TypeError('No method named "' + i + '"');
							t[i]()
						}
					})
				}, a(s, null, [ {
					key : "VERSION",
					get : function() {
						return "4.0.0"
					}
				}, {
					key : "Default",
					get : function() {
						return Ke
					}
				} ]), s
		}(), ze(document).on(Qe.CLICK_DATA_API, nt.DATA_TOGGLE, function(e) {
			"A" === e.currentTarget.tagName && e.preventDefault();
			var n = ze(this),
				t = _t.getSelectorFromElement(this);
			ze(t).each(function() {
				var e = ze(this),
					t = e.data(Ue) ? "toggle" : n.data();
				it._jQueryInterface.call(e, t)
			})
		}), ze.fn[Ye] = it._jQueryInterface, ze.fn[Ye].Constructor = it, ze.fn[Ye].noConflict = function() {
			return ze.fn[Ye] = Je, it._jQueryInterface
		}, it),
		Dt = (Oe = "dropdown", Ie = "." + (Ae = "bs.dropdown"), Ne = ".data-api", Me = (Ee = t).fn[Oe], je = new RegExp("38|40|27"), Pe = {
			HIDE : "hide" + Ie,
			HIDDEN : "hidden" + Ie,
			SHOW : "show" + Ie,
			SHOWN : "shown" + Ie,
			CLICK : "click" + Ie,
			CLICK_DATA_API : "click" + Ie + Ne,
			KEYDOWN_DATA_API : "keydown" + Ie + Ne,
			KEYUP_DATA_API : "keyup" + Ie + Ne
		}, We = "disabled", He = "show", Le = "dropdown-menu-right", $e = '[data-toggle="dropdown"]', Fe = ".dropdown-menu", Re = {
			offset : 0,
			flip : !0,
			boundary : "scrollParent"
		}, qe = {
			offset : "(number|string|function)",
			flip : "boolean",
			boundary : "(string|element)"
		}, Be = function() {
			function l(e, t) {
				this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
			}
			var e = l.prototype;
			return e.toggle = function() {
					if (!this._element.disabled && !Ee(this._element).hasClass(We)) {
						var e = l._getParentFromElement(this._element),
							t = Ee(this._menu).hasClass(He);
						if (l._clearMenus(), !t) {
							var n = {
									relatedTarget : this._element
								},
								i = Ee.Event(Pe.SHOW, n);
							if (Ee(e).trigger(i), !i.isDefaultPrevented()) {
								if (!this._inNavbar) {
									if (void 0 === u)
										throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
									var r = this._element;
									Ee(e).hasClass("dropup") && (Ee(this._menu).hasClass("dropdown-menu-left") || Ee(this._menu).hasClass(Le)) && (r = e), "scrollParent" !== this._config.boundary && Ee(e).addClass("position-static"), this._popper = new u(r, this._menu, this._getPopperConfig())
								}
								"ontouchstart" in document.documentElement && 0 === Ee(e).closest(".navbar-nav").length && Ee("body").children().on("mouseover", null, Ee.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), Ee(this._menu).toggleClass(He), Ee(e).toggleClass(He).trigger(Ee.Event(Pe.SHOWN, n))
							}
						}
					}
				}, e.dispose = function() {
					Ee.removeData(this._element, Ae), Ee(this._element).off(Ie), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
				}, e.update = function() {
					this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
				}, e._addEventListeners = function() {
					var t = this;
					Ee(this._element).on(Pe.CLICK, function(e) {
						e.preventDefault(), e.stopPropagation(), t.toggle()
					})
				}, e._getConfig = function(e) {
					return e = d({}, this.constructor.Default, Ee(this._element).data(), e), _t.typeCheckConfig(Oe, e, this.constructor.DefaultType), e
				}, e._getMenuElement = function() {
					if (!this._menu) {
						var e = l._getParentFromElement(this._element);
						this._menu = Ee(e).find(Fe)[0]
					}
					return this._menu
				}, e._getPlacement = function() {
					var e = Ee(this._element).parent(),
						t = "bottom-start";
					return e.hasClass("dropup") ? (t = "top-start", Ee(this._menu).hasClass(Le) && (t = "top-end")) : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : Ee(this._menu).hasClass(Le) && (t = "bottom-end"), t
				}, e._detectNavbar = function() {
					return 0 < Ee(this._element).closest(".navbar").length
				}, e._getPopperConfig = function() {
					var t = this,
						e = {};
					return "function" == typeof this._config.offset ? e.fn = function(e) {
							return e.offsets = d({}, e.offsets, t._config.offset(e.offsets) || {}), e
						} : e.offset = this._config.offset, {
							placement : this._getPlacement(),
							modifiers : {
								offset : e,
								flip : {
									enabled : this._config.flip
								},
								preventOverflow : {
									boundariesElement : this._config.boundary
								}
							}
					}
				}, l._jQueryInterface = function(t) {
					return this.each(function() {
						var e = Ee(this).data(Ae);
						if (e || (e = new l(this, "object" == typeof t ? t : null), Ee(this).data(Ae, e)), "string" == typeof t) {
							if (void 0 === e[t])
								throw new TypeError('No method named "' + t + '"');
							e[t]()
						}
					})
				}, l._clearMenus = function(e) {
					if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
						for (var t = Ee.makeArray(Ee($e)), n = 0; n < t.length; n++) {
							var i = l._getParentFromElement(t[n]),
								r = Ee(t[n]).data(Ae),
								o = {
									relatedTarget : t[n]
								};
							if (r) {
								var a = r._menu;
								if (Ee(i).hasClass(He) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && Ee.contains(i, e.target))) {
									var s = Ee.Event(Pe.HIDE, o);
									Ee(i).trigger(s), s.isDefaultPrevented() || ("ontouchstart" in document.documentElement && Ee("body").children().off("mouseover", null, Ee.noop), t[n].setAttribute("aria-expanded", "false"), Ee(a).removeClass(He), Ee(i).removeClass(He).trigger(Ee.Event(Pe.HIDDEN, o)))
								}
							}
					}
				}, l._getParentFromElement = function(e) {
					var t,
						n = _t.getSelectorFromElement(e);
					return n && (t = Ee(n)[0]), t || e.parentNode
				}, l._dataApiKeydownHandler = function(e) {
					if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || Ee(e.target).closest(Fe).length)) : je.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !Ee(this).hasClass(We))) {
						var t = l._getParentFromElement(this),
							n = Ee(t).hasClass(He);
						if ((n || 27 === e.which && 32 === e.which) && (!n || 27 !== e.which && 32 !== e.which)) {
							var i = Ee(t).find(".dropdown-menu .dropdown-item:not(.disabled)").get();
							if (0 !== i.length) {
								var r = i.indexOf(e.target);
								38 === e.which && 0 < r && r--, 40 === e.which && r < i.length - 1 && r++, r < 0 && (r = 0), i[r].focus()
							}
						} else {
							if (27 === e.which) {
								var o = Ee(t).find($e)[0];
								Ee(o).trigger("focus")
							}
							Ee(this).trigger("click")
						}
					}
				}, a(l, null, [ {
					key : "VERSION",
					get : function() {
						return "4.0.0"
					}
				}, {
					key : "Default",
					get : function() {
						return Re
					}
				}, {
					key : "DefaultType",
					get : function() {
						return qe
					}
				} ]), l
		}(), Ee(document).on(Pe.KEYDOWN_DATA_API, $e, Be._dataApiKeydownHandler).on(Pe.KEYDOWN_DATA_API, Fe, Be._dataApiKeydownHandler).on(Pe.CLICK_DATA_API + " " + Pe.KEYUP_DATA_API, Be._clearMenus).on(Pe.CLICK_DATA_API, $e, function(e) {
			e.preventDefault(), e.stopPropagation(), Be._jQueryInterface.call(Ee(this), "toggle")
		}).on(Pe.CLICK_DATA_API, ".dropdown form", function(e) {
			e.stopPropagation()
		}), Ee.fn[Oe] = Be._jQueryInterface, Ee.fn[Oe].Constructor = Be, Ee.fn[Oe].noConflict = function() {
			return Ee.fn[Oe] = Me, Be._jQueryInterface
		}, Be),
		St = (ye = "." + (ve = "bs.modal"), be = (me = t).fn.modal, _e = {
			backdrop : !0,
			keyboard : !0,
			focus : !0,
			show : !0
		}, Te = {
			backdrop : "(boolean|string)",
			keyboard : "boolean",
			focus : "boolean",
			show : "boolean"
		}, xe = {
			HIDE : "hide" + ye,
			HIDDEN : "hidden" + ye,
			SHOW : "show" + ye,
			SHOWN : "shown" + ye,
			FOCUSIN : "focusin" + ye,
			RESIZE : "resize" + ye,
			CLICK_DISMISS : "click.dismiss" + ye,
			KEYDOWN_DISMISS : "keydown.dismiss" + ye,
			MOUSEUP_DISMISS : "mouseup.dismiss" + ye,
			MOUSEDOWN_DISMISS : "mousedown.dismiss" + ye,
			CLICK_DATA_API : "click" + ye + ".data-api"
		}, we = "modal-open", ke = "fade", De = "show", Se = {
			DIALOG : ".modal-dialog",
			DATA_TOGGLE : '[data-toggle="modal"]',
			DATA_DISMISS : '[data-dismiss="modal"]',
			FIXED_CONTENT : ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
			STICKY_CONTENT : ".sticky-top",
			NAVBAR_TOGGLER : ".navbar-toggler"
		}, Ce = function() {
			function r(e, t) {
				this._config = this._getConfig(t), this._element = e, this._dialog = me(e).find(Se.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
			}
			var e = r.prototype;
			return e.toggle = function(e) {
					return this._isShown ? this.hide() : this.show(e)
				}, e.show = function(e) {
					var t = this;
					if (!this._isTransitioning && !this._isShown) {
						_t.supportsTransitionEnd() && me(this._element).hasClass(ke) && (this._isTransitioning = !0);
						var n = me.Event(xe.SHOW, {
							relatedTarget : e
						});
						me(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), me(document.body).addClass(we), this._setEscapeEvent(), this._setResizeEvent(), me(this._element).on(xe.CLICK_DISMISS, Se.DATA_DISMISS, function(e) {
							return t.hide(e)
						}), me(this._dialog).on(xe.MOUSEDOWN_DISMISS, function() {
							me(t._element).one(xe.MOUSEUP_DISMISS, function(e) {
								me(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
							})
						}), this._showBackdrop(function() {
							return t._showElement(e)
						}))
					}
				}, e.hide = function(e) {
					var t = this;
					if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
						var n = me.Event(xe.HIDE);
						if (me(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
							this._isShown = !1;
							var i = _t.supportsTransitionEnd() && me(this._element).hasClass(ke);
							i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), me(document).off(xe.FOCUSIN), me(this._element).removeClass(De), me(this._element).off(xe.CLICK_DISMISS), me(this._dialog).off(xe.MOUSEDOWN_DISMISS), i ? me(this._element).one(_t.TRANSITION_END, function(e) {
								return t._hideModal(e)
							}).emulateTransitionEnd(300) : this._hideModal()
						}
					}
				}, e.dispose = function() {
					me.removeData(this._element, ve), me(window, document, this._element, this._backdrop).off(ye), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
				}, e.handleUpdate = function() {
					this._adjustDialog()
				}, e._getConfig = function(e) {
					return e = d({}, _e, e), _t.typeCheckConfig("modal", e, Te), e
				}, e._showElement = function(e) {
					var t = this,
						n = _t.supportsTransitionEnd() && me(this._element).hasClass(ke);
					this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && _t.reflow(this._element), me(this._element).addClass(De), this._config.focus && this._enforceFocus();
					var i = me.Event(xe.SHOWN, {
							relatedTarget : e
						}),
						r = function() {
							t._config.focus && t._element.focus(), t._isTransitioning = !1, me(t._element).trigger(i)
						};
					n ? me(this._dialog).one(_t.TRANSITION_END, r).emulateTransitionEnd(300) : r()
				}, e._enforceFocus = function() {
					var t = this;
					me(document).off(xe.FOCUSIN).on(xe.FOCUSIN, function(e) {
						document !== e.target && t._element !== e.target && 0 === me(t._element).has(e.target).length && t._element.focus()
					})
				}, e._setEscapeEvent = function() {
					var t = this;
					this._isShown && this._config.keyboard ? me(this._element).on(xe.KEYDOWN_DISMISS, function(e) {
						27 === e.which && (e.preventDefault(), t.hide())
					}) : this._isShown || me(this._element).off(xe.KEYDOWN_DISMISS)
				}, e._setResizeEvent = function() {
					var t = this;
					this._isShown ? me(window).on(xe.RESIZE, function(e) {
						return t.handleUpdate(e)
					}) : me(window).off(xe.RESIZE)
				}, e._hideModal = function() {
					var e = this;
					this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function() {
						me(document.body).removeClass(we), e._resetAdjustments(), e._resetScrollbar(), me(e._element).trigger(xe.HIDDEN)
					})
				}, e._removeBackdrop = function() {
					this._backdrop && (me(this._backdrop).remove(), this._backdrop = null)
				}, e._showBackdrop = function(e) {
					var t = this,
						n = me(this._element).hasClass(ke) ? ke : "";
					if (this._isShown && this._config.backdrop) {
						var i = _t.supportsTransitionEnd() && n;
						if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && me(this._backdrop).addClass(n), me(this._backdrop).appendTo(document.body), me(this._element).on(xe.CLICK_DISMISS, function(e) {
								t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
							}), i && _t.reflow(this._backdrop), me(this._backdrop).addClass(De), !e) return;
						if (!i) return void e();
						me(this._backdrop).one(_t.TRANSITION_END, e).emulateTransitionEnd(150)
					} else if (!this._isShown && this._backdrop) {
						me(this._backdrop).removeClass(De);
						var r = function() {
							t._removeBackdrop(), e && e()
						};
						_t.supportsTransitionEnd() && me(this._element).hasClass(ke) ? me(this._backdrop).one(_t.TRANSITION_END, r).emulateTransitionEnd(150) : r()
					} else e && e()
				}, e._adjustDialog = function() {
					var e = this._element.scrollHeight > document.documentElement.clientHeight;
					!this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
				}, e._resetAdjustments = function() {
					this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
				}, e._checkScrollbar = function() {
					var e = document.body.getBoundingClientRect();
					this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
				}, e._setScrollbar = function() {
					var r = this;
					if (this._isBodyOverflowing) {
						me(Se.FIXED_CONTENT).each(function(e, t) {
							var n = me(t)[0].style.paddingRight,
								i = me(t).css("padding-right");
							me(t).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
						}), me(Se.STICKY_CONTENT).each(function(e, t) {
							var n = me(t)[0].style.marginRight,
								i = me(t).css("margin-right");
							me(t).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
						}), me(Se.NAVBAR_TOGGLER).each(function(e, t) {
							var n = me(t)[0].style.marginRight,
								i = me(t).css("margin-right");
							me(t).data("margin-right", n).css("margin-right", parseFloat(i) + r._scrollbarWidth + "px")
						});
						var e = document.body.style.paddingRight,
							t = me("body").css("padding-right");
						me("body").data("padding-right", e).css("padding-right", parseFloat(t) + this._scrollbarWidth + "px")
					}
				}, e._resetScrollbar = function() {
					me(Se.FIXED_CONTENT).each(function(e, t) {
						var n = me(t).data("padding-right");
						void 0 !== n && me(t).css("padding-right", n).removeData("padding-right")
					}), me(Se.STICKY_CONTENT + ", " + Se.NAVBAR_TOGGLER).each(function(e, t) {
						var n = me(t).data("margin-right");
						void 0 !== n && me(t).css("margin-right", n).removeData("margin-right")
					});
					var e = me("body").data("padding-right");
					void 0 !== e && me("body").css("padding-right", e).removeData("padding-right")
				}, e._getScrollbarWidth = function() {
					var e = document.createElement("div");
					e.className = "modal-scrollbar-measure", document.body.appendChild(e);
					var t = e.getBoundingClientRect().width - e.clientWidth;
					return document.body.removeChild(e), t
				}, r._jQueryInterface = function(n, i) {
					return this.each(function() {
						var e = me(this).data(ve),
							t = d({}, r.Default, me(this).data(), "object" == typeof n && n);
						if (e || (e = new r(this, t), me(this).data(ve, e)), "string" == typeof n) {
							if (void 0 === e[n])
								throw new TypeError('No method named "' + n + '"');
							e[n](i)
						} else t.show && e.show(i)
					})
				}, a(r, null, [ {
					key : "VERSION",
					get : function() {
						return "4.0.0"
					}
				}, {
					key : "Default",
					get : function() {
						return _e
					}
				} ]), r
		}(), me(document).on(xe.CLICK_DATA_API, Se.DATA_TOGGLE, function(e) {
			var t,
				n = this,
				i = _t.getSelectorFromElement(this);
			i && (t = me(i)[0]);
			var r = me(t).data(ve) ? "toggle" : d({}, me(t).data(), me(this).data());
			"A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
			var o = me(t).one(xe.SHOW, function(e) {
				e.isDefaultPrevented() || o.one(xe.HIDDEN, function() {
					me(n).is(":visible") && n.focus()
				})
			});
			Ce._jQueryInterface.call(me(t), r, this)
		}), me.fn.modal = Ce._jQueryInterface, me.fn.modal.Constructor = Ce, me.fn.modal.noConflict = function() {
			return me.fn.modal = be, Ce._jQueryInterface
		}, Ce),
		Ct = (te = "tooltip", ie = "." + (ne = "bs.tooltip"), re = (ee = t).fn[te], oe = new RegExp("(^|\\s)bs-tooltip\\S+", "g"), le = {
			animation : !0,
			template : '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
			trigger : "hover focus",
			title : "",
			delay : 0,
			html : !(se = {
					AUTO : "auto",
					TOP : "top",
					RIGHT : "right",
					BOTTOM : "bottom",
					LEFT : "left"
				}),
			selector : !(ae = {
					animation : "boolean",
					template : "string",
					title : "(string|element|function)",
					trigger : "string",
					delay : "(number|object)",
					html : "boolean",
					selector : "(string|boolean)",
					placement : "(string|function)",
					offset : "(number|string)",
					container : "(string|element|boolean)",
					fallbackPlacement : "(string|array)",
					boundary : "(string|element)"
				}),
			placement : "top",
			offset : 0,
			container : !1,
			fallbackPlacement : "flip",
			boundary : "scrollParent"
		}, ue = {
			HIDE : "hide" + ie,
			HIDDEN : "hidden" + ie,
			SHOW : (ce = "show") + ie,
			SHOWN : "shown" + ie,
			INSERTED : "inserted" + ie,
			CLICK : "click" + ie,
			FOCUSIN : "focusin" + ie,
			FOCUSOUT : "focusout" + ie,
			MOUSEENTER : "mouseenter" + ie,
			MOUSELEAVE : "mouseleave" + ie
		}, de = "fade", fe = "show", he = "hover", pe = "focus", ge = function() {
			function c(e, t) {
				if (void 0 === u)
					throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
				this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
			}
			var e = c.prototype;
			return e.enable = function() {
					this._isEnabled = !0
				}, e.disable = function() {
					this._isEnabled = !1
				}, e.toggleEnabled = function() {
					this._isEnabled = !this._isEnabled
				}, e.toggle = function(e) {
					if (this._isEnabled)
						if (e) {
							var t = this.constructor.DATA_KEY,
								n = ee(e.currentTarget).data(t);
							n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), ee(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
						} else {
							if (ee(this.getTipElement()).hasClass(fe)) return void this._leave(null, this);
							this._enter(null, this)
					}
				}, e.dispose = function() {
					clearTimeout(this._timeout), ee.removeData(this.element, this.constructor.DATA_KEY), ee(this.element).off(this.constructor.EVENT_KEY), ee(this.element).closest(".modal").off("hide.bs.modal"), this.tip && ee(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, (this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
				}, e.show = function() {
					var t = this;
					if ("none" === ee(this.element).css("display"))
						throw new Error("Please use show on visible elements");
					var e = ee.Event(this.constructor.Event.SHOW);
					if (this.isWithContent() && this._isEnabled) {
						ee(this.element).trigger(e);
						var n = ee.contains(this.element.ownerDocument.documentElement, this.element);
						if (e.isDefaultPrevented() || !n) return;
						var i = this.getTipElement(),
							r = _t.getUID(this.constructor.NAME);
						i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && ee(i).addClass(de);
						var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
							a = this._getAttachment(o);
						this.addAttachmentClass(a);
						var s = !1 === this.config.container ? document.body : ee(this.config.container);
						ee(i).data(this.constructor.DATA_KEY, this), ee.contains(this.element.ownerDocument.documentElement, this.tip) || ee(i).appendTo(s), ee(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new u(this.element, i, {
							placement : a,
							modifiers : {
								offset : {
									offset : this.config.offset
								},
								flip : {
									behavior : this.config.fallbackPlacement
								},
								arrow : {
									element : ".arrow"
								},
								preventOverflow : {
									boundariesElement : this.config.boundary
								}
							},
							onCreate : function(e) {
								e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
							},
							onUpdate : function(e) {
								t._handlePopperPlacementChange(e)
							}
						}), ee(i).addClass(fe), "ontouchstart" in document.documentElement && ee("body").children().on("mouseover", null, ee.noop);
						var l = function() {
							t.config.animation && t._fixTransition();
							var e = t._hoverState;
							t._hoverState = null, ee(t.element).trigger(t.constructor.Event.SHOWN), "out" === e && t._leave(null, t)
						};
						_t.supportsTransitionEnd() && ee(this.tip).hasClass(de) ? ee(this.tip).one(_t.TRANSITION_END, l).emulateTransitionEnd(c._TRANSITION_DURATION) : l()
					}
				}, e.hide = function(e) {
					var t = this,
						n = this.getTipElement(),
						i = ee.Event(this.constructor.Event.HIDE),
						r = function() {
							t._hoverState !== ce && n.parentNode && n.parentNode.removeChild(n), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), ee(t.element).trigger(t.constructor.Event.HIDDEN), null !== t._popper && t._popper.destroy(), e && e()
						};
					ee(this.element).trigger(i), i.isDefaultPrevented() || (ee(n).removeClass(fe), "ontouchstart" in document.documentElement && ee("body").children().off("mouseover", null, ee.noop), this._activeTrigger.click = !1, this._activeTrigger[pe] = !1, this._activeTrigger[he] = !1, _t.supportsTransitionEnd() && ee(this.tip).hasClass(de) ? ee(n).one(_t.TRANSITION_END, r).emulateTransitionEnd(150) : r(), this._hoverState = "")
				}, e.update = function() {
					null !== this._popper && this._popper.scheduleUpdate()
				}, e.isWithContent = function() {
					return Boolean(this.getTitle())
				}, e.addAttachmentClass = function(e) {
					ee(this.getTipElement()).addClass("bs-tooltip-" + e)
				}, e.getTipElement = function() {
					return this.tip = this.tip || ee(this.config.template)[0], this.tip
				}, e.setContent = function() {
					var e = ee(this.getTipElement());
					this.setElementContent(e.find(".tooltip-inner"), this.getTitle()), e.removeClass(de + " " + fe)
				}, e.setElementContent = function(e, t) {
					var n = this.config.html;
					"object" == typeof t && (t.nodeType || t.jquery) ? n ? ee(t).parent().is(e) || e.empty().append(t) : e.text(ee(t).text()) : e[n ? "html" : "text"](t)
				}, e.getTitle = function() {
					var e = this.element.getAttribute("data-original-title");
					return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
				}, e._getAttachment = function(e) {
					return se[e.toUpperCase()]
				}, e._setListeners = function() {
					var i = this;
					this.config.trigger.split(" ").forEach(function(e) {
						if ("click" === e) ee(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) {
								return i.toggle(e)
							});
						else if ("manual" !== e) {
							var t = e === he ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
								n = e === he ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
							ee(i.element).on(t, i.config.selector, function(e) {
								return i._enter(e)
							}).on(n, i.config.selector, function(e) {
								return i._leave(e)
							})
						}
						ee(i.element).closest(".modal").on("hide.bs.modal", function() {
							return i.hide()
						})
					}), this.config.selector ? this.config = d({}, this.config, {
						trigger : "manual",
						selector : ""
					}) : this._fixTitle()
				}, e._fixTitle = function() {
					var e = typeof this.element.getAttribute("data-original-title");
					(this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
				}, e._enter = function(e, t) {
					var n = this.constructor.DATA_KEY;
					(t = t || ee(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), ee(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? pe : he] = !0), ee(t.getTipElement()).hasClass(fe) || t._hoverState === ce ? t._hoverState = ce : (clearTimeout(t._timeout), t._hoverState = ce, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
						t._hoverState === ce && t.show()
					}, t.config.delay.show) : t.show())
				}, e._leave = function(e, t) {
					var n = this.constructor.DATA_KEY;
					(t = t || ee(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), ee(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? pe : he] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
						"out" === t._hoverState && t.hide()
					}, t.config.delay.hide) : t.hide())
				}, e._isWithActiveTrigger = function() {
					for (var e in this._activeTrigger)
						if (this._activeTrigger[e]) return !0;
					return !1
				}, e._getConfig = function(e) {
					return "number" == typeof (e = d({}, this.constructor.Default, ee(this.element).data(), e)).delay && (e.delay = {
							show : e.delay,
							hide : e.delay
						}), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), _t.typeCheckConfig(te, e, this.constructor.DefaultType), e
				}, e._getDelegateConfig = function() {
					var e = {};
					if (this.config)
						for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
					return e
				}, e._cleanTipClass = function() {
					var e = ee(this.getTipElement()),
						t = e.attr("class").match(oe);
					null !== t && 0 < t.length && e.removeClass(t.join(""))
				}, e._handlePopperPlacementChange = function(e) {
					this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
				}, e._fixTransition = function() {
					var e = this.getTipElement(),
						t = this.config.animation;
					null === e.getAttribute("x-placement") && (ee(e).removeClass(de), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
				}, c._jQueryInterface = function(n) {
					return this.each(function() {
						var e = ee(this).data(ne),
							t = "object" == typeof n && n;
						if ((e || !/dispose|hide/.test(n)) && (e || (e = new c(this, t), ee(this).data(ne, e)), "string" == typeof n)) {
							if (void 0 === e[n])
								throw new TypeError('No method named "' + n + '"');
							e[n]()
						}
					})
				}, a(c, null, [ {
					key : "VERSION",
					get : function() {
						return "4.0.0"
					}
				}, {
					key : "Default",
					get : function() {
						return le
					}
				}, {
					key : "NAME",
					get : function() {
						return te
					}
				}, {
					key : "DATA_KEY",
					get : function() {
						return ne
					}
				}, {
					key : "Event",
					get : function() {
						return ue
					}
				}, {
					key : "EVENT_KEY",
					get : function() {
						return ie
					}
				}, {
					key : "DefaultType",
					get : function() {
						return ae
					}
				} ]), c
		}(), ee.fn[te] = ge._jQueryInterface, ee.fn[te].Constructor = ge, ee.fn[te].noConflict = function() {
			return ee.fn[te] = re, ge._jQueryInterface
		}, ge),
		Et = (Y = "popover", V = "." + (U = "bs.popover"), J = (z = t).fn[Y], K = new RegExp("(^|\\s)bs-popover\\S+", "g"), G = d({}, Ct.Default, {
			placement : "right",
			trigger : "click",
			content : "",
			template : '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
		}), Q = d({}, Ct.DefaultType, {
			content : "(string|element|function)"
		}), X = {
			HIDE : "hide" + V,
			HIDDEN : "hidden" + V,
			SHOW : "show" + V,
			SHOWN : "shown" + V,
			INSERTED : "inserted" + V,
			CLICK : "click" + V,
			FOCUSIN : "focusin" + V,
			FOCUSOUT : "focusout" + V,
			MOUSEENTER : "mouseenter" + V,
			MOUSELEAVE : "mouseleave" + V
		}, Z = function(e) {
			var t,
				n;
			function i() {
				return e.apply(this, arguments) || this
			}
			n = e, (t = i).prototype = Object.create(n.prototype), (t.prototype.constructor = t).__proto__ = n;
			var r = i.prototype;
			return r.isWithContent = function() {
					return this.getTitle() || this._getContent()
				}, r.addAttachmentClass = function(e) {
					z(this.getTipElement()).addClass("bs-popover-" + e)
				}, r.getTipElement = function() {
					return this.tip = this.tip || z(this.config.template)[0], this.tip
				}, r.setContent = function() {
					var e = z(this.getTipElement());
					this.setElementContent(e.find(".popover-header"), this.getTitle());
					var t = this._getContent();
					"function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show")
				}, r._getContent = function() {
					return this.element.getAttribute("data-content") || this.config.content
				}, r._cleanTipClass = function() {
					var e = z(this.getTipElement()),
						t = e.attr("class").match(K);
					null !== t && 0 < t.length && e.removeClass(t.join(""))
				}, i._jQueryInterface = function(n) {
					return this.each(function() {
						var e = z(this).data(U),
							t = "object" == typeof n ? n : null;
						if ((e || !/destroy|hide/.test(n)) && (e || (e = new i(this, t), z(this).data(U, e)), "string" == typeof n)) {
							if (void 0 === e[n])
								throw new TypeError('No method named "' + n + '"');
							e[n]()
						}
					})
				}, a(i, null, [ {
					key : "VERSION",
					get : function() {
						return "4.0.0"
					}
				}, {
					key : "Default",
					get : function() {
						return G
					}
				}, {
					key : "NAME",
					get : function() {
						return Y
					}
				}, {
					key : "DATA_KEY",
					get : function() {
						return U
					}
				}, {
					key : "Event",
					get : function() {
						return X
					}
				}, {
					key : "EVENT_KEY",
					get : function() {
						return V
					}
				}, {
					key : "DefaultType",
					get : function() {
						return Q
					}
				} ]), i
		}(Ct), z.fn[Y] = Z._jQueryInterface, z.fn[Y].Constructor = Z, z.fn[Y].noConflict = function() {
			return z.fn[Y] = J, Z._jQueryInterface
		}, Z),
		Ot = (M = "scrollspy", P = "." + (j = "bs.scrollspy"), W = (N = t).fn[M], H = {
			offset : 10,
			method : "auto",
			target : ""
		}, L = {
			offset : "number",
			method : "string",
			target : "(string|element)"
		}, $ = {
			ACTIVATE : "activate" + P,
			SCROLL : "scroll" + P,
			LOAD_DATA_API : "load" + P + ".data-api"
		}, F = "active", R = {
			DATA_SPY : '[data-spy="scroll"]',
			ACTIVE : ".active",
			NAV_LIST_GROUP : ".nav, .list-group",
			NAV_LINKS : ".nav-link",
			NAV_ITEMS : ".nav-item",
			LIST_ITEMS : ".list-group-item",
			DROPDOWN : ".dropdown",
			DROPDOWN_ITEMS : ".dropdown-item",
			DROPDOWN_TOGGLE : ".dropdown-toggle"
		}, q = "position", B = function() {
			function n(e, t) {
				var n = this;
				this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + R.NAV_LINKS + "," + this._config.target + " " + R.LIST_ITEMS + "," + this._config.target + " " + R.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, N(this._scrollElement).on($.SCROLL, function(e) {
					return n._process(e)
				}), this.refresh(), this._process()
			}
			var e = n.prototype;
			return e.refresh = function() {
					var t = this,
						e = this._scrollElement === this._scrollElement.window ? "offset" : q,
						r = "auto" === this._config.method ? e : this._config.method,
						o = r === q ? this._getScrollTop() : 0;
					this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), N.makeArray(N(this._selector)).map(function(e) {
						var t,
							n = _t.getSelectorFromElement(e);
						if (n && (t = N(n)[0]), t) {
							var i = t.getBoundingClientRect();
							if (i.width || i.height) return [ N(t)[r]().top + o, n ]
						}
						return null
					}).filter(function(e) {
						return e
					}).sort(function(e, t) {
						return e[0] - t[0]
					}).forEach(function(e) {
						t._offsets.push(e[0]), t._targets.push(e[1])
					})
				}, e.dispose = function() {
					N.removeData(this._element, j), N(this._scrollElement).off(P), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
				}, e._getConfig = function(e) {
					if ("string" != typeof (e = d({}, H, e)).target) {
						var t = N(e.target).attr("id");
						t || (t = _t.getUID(M), N(e.target).attr("id", t)), e.target = "#" + t
					}
					return _t.typeCheckConfig(M, e, L), e
				}, e._getScrollTop = function() {
					return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
				}, e._getScrollHeight = function() {
					return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
				}, e._getOffsetHeight = function() {
					return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
				}, e._process = function() {
					var e = this._getScrollTop() + this._config.offset,
						t = this._getScrollHeight(),
						n = this._config.offset + t - this._getOffsetHeight();
					if (this._scrollHeight !== t && this.refresh(), n <= e) {
						var i = this._targets[this._targets.length - 1];
						this._activeTarget !== i && this._activate(i)
					} else {
						if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
						for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
					}
				}, e._activate = function(t) {
					this._activeTarget = t, this._clear();
					var e = this._selector.split(",");
					e = e.map(function(e) {
						return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
					});
					var n = N(e.join(","));
					n.hasClass("dropdown-item") ? (n.closest(R.DROPDOWN).find(R.DROPDOWN_TOGGLE).addClass(F), n.addClass(F)) : (n.addClass(F), n.parents(R.NAV_LIST_GROUP).prev(R.NAV_LINKS + ", " + R.LIST_ITEMS).addClass(F), n.parents(R.NAV_LIST_GROUP).prev(R.NAV_ITEMS).children(R.NAV_LINKS).addClass(F)), N(this._scrollElement).trigger($.ACTIVATE, {
						relatedTarget : t
					})
				}, e._clear = function() {
					N(this._selector).filter(R.ACTIVE).removeClass(F)
				}, n._jQueryInterface = function(t) {
					return this.each(function() {
						var e = N(this).data(j);
						if (e || (e = new n(this, "object" == typeof t && t), N(this).data(j, e)), "string" == typeof t) {
							if (void 0 === e[t])
								throw new TypeError('No method named "' + t + '"');
							e[t]()
						}
					})
				}, a(n, null, [ {
					key : "VERSION",
					get : function() {
						return "4.0.0"
					}
				}, {
					key : "Default",
					get : function() {
						return H
					}
				} ]), n
		}(), N(window).on($.LOAD_DATA_API, function() {
			for (var e = N.makeArray(N(R.DATA_SPY)), t = e.length; t--;) {
				var n = N(e[t]);
				B._jQueryInterface.call(n, n.data())
			}
		}), N.fn[M] = B._jQueryInterface, N.fn[M].Constructor = B, N.fn[M].noConflict = function() {
			return N.fn[M] = W, B._jQueryInterface
		}, B),
		At = (D = "." + (k = "bs.tab"), S = (w = t).fn.tab, C = {
			HIDE : "hide" + D,
			HIDDEN : "hidden" + D,
			SHOW : "show" + D,
			SHOWN : "shown" + D,
			CLICK_DATA_API : "click.bs.tab.data-api"
		}, E = "active", O = ".active", A = "> li > .active", I = function() {
			function i(e) {
				this._element = e
			}
			var e = i.prototype;
			return e.show = function() {
					var n = this;
					if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && w(this._element).hasClass(E) || w(this._element).hasClass("disabled"))) {
						var e,
							i,
							t = w(this._element).closest(".nav, .list-group")[0],
							r = _t.getSelectorFromElement(this._element);
						if (t) {
							var o = "UL" === t.nodeName ? A : O;
							i = (i = w.makeArray(w(t).find(o)))[i.length - 1]
						}
						var a = w.Event(C.HIDE, {
								relatedTarget : this._element
							}),
							s = w.Event(C.SHOW, {
								relatedTarget : i
							});
						if (i && w(i).trigger(a), w(this._element).trigger(s), !s.isDefaultPrevented() && !a.isDefaultPrevented()) {
							r && (e = w(r)[0]), this._activate(this._element, t);
							var l = function() {
								var e = w.Event(C.HIDDEN, {
										relatedTarget : n._element
									}),
									t = w.Event(C.SHOWN, {
										relatedTarget : i
									});
								w(i).trigger(e), w(n._element).trigger(t)
							};
							e ? this._activate(e, e.parentNode, l) : l()
						}
					}
				}, e.dispose = function() {
					w.removeData(this._element, k), this._element = null
				}, e._activate = function(e, t, n) {
					var i = this,
						r = ("UL" === t.nodeName ? w(t).find(A) : w(t).children(O))[0],
						o = n && _t.supportsTransitionEnd() && r && w(r).hasClass("fade"),
						a = function() {
							return i._transitionComplete(e, r, n)
						};
					r && o ? w(r).one(_t.TRANSITION_END, a).emulateTransitionEnd(150) : a()
				}, e._transitionComplete = function(e, t, n) {
					if (t) {
						w(t).removeClass("show " + E);
						var i = w(t.parentNode).find("> .dropdown-menu .active")[0];
						i && w(i).removeClass(E), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
					}
					if (w(e).addClass(E), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), _t.reflow(e), w(e).addClass("show"), e.parentNode && w(e.parentNode).hasClass("dropdown-menu")) {
						var r = w(e).closest(".dropdown")[0];
						r && w(r).find(".dropdown-toggle").addClass(E), e.setAttribute("aria-expanded", !0)
					}
					n && n()
				}, i._jQueryInterface = function(n) {
					return this.each(function() {
						var e = w(this),
							t = e.data(k);
						if (t || (t = new i(this), e.data(k, t)), "string" == typeof n) {
							if (void 0 === t[n])
								throw new TypeError('No method named "' + n + '"');
							t[n]()
						}
					})
				}, a(i, null, [ {
					key : "VERSION",
					get : function() {
						return "4.0.0"
					}
				} ]), i
		}(), w(document).on(C.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
			e.preventDefault(), I._jQueryInterface.call(w(this), "show")
		}), w.fn.tab = I._jQueryInterface, w.fn.tab.Constructor = I, w.fn.tab.noConflict = function() {
			return w.fn.tab = S, I._jQueryInterface
		}, I);
	!function(e) {
		if (void 0 === e)
			throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
		var t = e.fn.jquery.split(" ")[0].split(".");
		if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0])
			throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
	}(t), e.Util = _t, e.Alert = Tt, e.Button = xt, e.Carousel = wt, e.Collapse = kt, e.Dropdown = Dt, e.Modal = St, e.Popover = Et, e.Scrollspy = Ot, e.Tab = At, e.Tooltip = Ct, Object.defineProperty(e, "__esModule", {
		value : !0
	})
}), function(s) {
	"use strict";
	function e() {
		this._activeZoom = this._initialScrollPosition = this._initialTouchPosition = this._touchMoveListener = null, this._$document = s(document), this._$window = s(window), this._$body = s(document.body), this._boundClick = s.proxy(this._clickHandler, this)
	}
	function l(e) {
		this._fullHeight = this._fullWidth = this._overlay = this._targetImageWrap = null, this._targetImage = e, this._$body = s(document.body)
	}
	e.prototype.listen = function() {
		this._$body.on("click", '[data-action="zoom"]', s.proxy(this._zoom, this))
	}, e.prototype._zoom = function(e) {
		var t = e.target;
		if (t && "IMG" == t.tagName && !this._$body.hasClass("zoom-overlay-open")) return e.metaKey || e.ctrlKey ? window.open(e.target.getAttribute("data-original") || e.target.src, "_blank") : void (t.width >= s(window).width() - l.OFFSET || (this._activeZoomClose(!0), this._activeZoom = new l(t), this._activeZoom.zoomImage(), this._$window.on("scroll.zoom", s.proxy(this._scrollHandler, this)), this._$document.on("keyup.zoom", s.proxy(this._keyHandler, this)), this._$document.on("touchstart.zoom", s.proxy(this._touchStart, this)), document.addEventListener ? document.addEventListener("click", this._boundClick, !0) : document.attachEvent("onclick", this._boundClick, !0), "bubbles" in e ? e.bubbles && e.stopPropagation() : e.cancelBubble = !0))
	}, e.prototype._activeZoomClose = function(e) {
		this._activeZoom && (e ? this._activeZoom.dispose() : this._activeZoom.close(), this._$window.off(".zoom"), this._$document.off(".zoom"), document.removeEventListener("click", this._boundClick, !0), this._activeZoom = null)
	}, e.prototype._scrollHandler = function(e) {
		null === this._initialScrollPosition && (this._initialScrollPosition = s(window).scrollTop());
		var t = this._initialScrollPosition - s(window).scrollTop();
		40 <= Math.abs(t) && this._activeZoomClose()
	}, e.prototype._keyHandler = function(e) {
		27 == e.keyCode && this._activeZoomClose()
	}, e.prototype._clickHandler = function(e) {
		e.preventDefault ? e.preventDefault() : event.returnValue = !1, "bubbles" in e ? e.bubbles && e.stopPropagation() : e.cancelBubble = !0, this._activeZoomClose()
	}, e.prototype._touchStart = function(e) {
		this._initialTouchPosition = e.touches[0].pageY, s(e.target).on("touchmove.zoom", s.proxy(this._touchMove, this))
	}, e.prototype._touchMove = function(e) {
		10 < Math.abs(e.touches[0].pageY - this._initialTouchPosition) && (this._activeZoomClose(), s(e.target).off("touchmove.zoom"))
	}, l.OFFSET = 80, l._MAX_WIDTH = 2560, l._MAX_HEIGHT = 4096, l.prototype.zoomImage = function() {
		var e = document.createElement("img");
		e.onload = s.proxy(function() {
			this._fullHeight = Number(e.height), this._fullWidth = Number(e.width), this._zoomOriginal()
		}, this), e.src = this._targetImage.src
	}, l.prototype._zoomOriginal = function() {
		this._targetImageWrap = document.createElement("div"), this._targetImageWrap.className = "zoom-img-wrap", this._targetImage.parentNode.insertBefore(this._targetImageWrap, this._targetImage), this._targetImageWrap.appendChild(this._targetImage), s(this._targetImage).addClass("zoom-img").attr("data-action", "zoom-out"), this._overlay = document.createElement("div"), this._overlay.className = "zoom-overlay", document.body.appendChild(this._overlay), this._calculateZoom(), this._triggerAnimation()
	}, l.prototype._calculateZoom = function() {
		this._targetImage.offsetWidth;
		var e = this._fullWidth,
			t = this._fullHeight,
			n = (s(window).scrollTop(), e / this._targetImage.width),
			i = s(window).height() - l.OFFSET,
			r = s(window).width() - l.OFFSET,
			o = e / t,
			a = r / i;
		this._imgScaleFactor = e < r && t < i ? n : o < a ? i / t * n : r / e * n
	}, l.prototype._triggerAnimation = function() {
		this._targetImage.offsetWidth;
		var e = s(this._targetImage).offset(),
			t = s(window).scrollTop() + s(window).height() / 2,
			n = s(window).width() / 2,
			i = e.top + this._targetImage.height / 2,
			r = e.left + this._targetImage.width / 2;
		this._translateY = t - i, this._translateX = n - r;
		var o = "scale(" + this._imgScaleFactor + ")",
			a = "translate(" + this._translateX + "px, " + this._translateY + "px)";
		s.support.transition && (a += " translateZ(0)"), s(this._targetImage).css({
			"-webkit-transform" : o,
			"-ms-transform" : o,
			transform : o
		}), s(this._targetImageWrap).css({
			"-webkit-transform" : a,
			"-ms-transform" : a,
			transform : a
		}), this._$body.addClass("zoom-overlay-open")
	}, l.prototype.close = function() {
		if (this._$body.removeClass("zoom-overlay-open").addClass("zoom-overlay-transitioning"), s(this._targetImage).css({
				"-webkit-transform" : "",
				"-ms-transform" : "",
				transform : ""
			}), s(this._targetImageWrap).css({
				"-webkit-transform" : "",
				"-ms-transform" : "",
				transform : ""
			}), !s.support.transition) return this.dispose();
		s(this._targetImage).one(s.support.transition.end, s.proxy(this.dispose, this)).emulateTransitionEnd(300)
	}, l.prototype.dispose = function() {
		this._targetImageWrap && this._targetImageWrap.parentNode && (s(this._targetImage).removeClass("zoom-img").attr("data-action", "zoom"), this._targetImageWrap.parentNode.replaceChild(this._targetImage, this._targetImageWrap), this._overlay.parentNode.removeChild(this._overlay), this._$body.removeClass("zoom-overlay-transitioning"))
	}, s(function() {
		(new e).listen()
	})
}(jQuery), $(document).ready(function() {
	$(".admin-nav-link").click(function() {
		$(this).children(".fa").hasClass("fa-chevron-down") ? $(this).children(".fa").removeClass("fa-chevron-down").addClass("fa-chevron-up") : $(this).children(".fa").removeClass("fa-chevron-up").addClass("fa-chevron-down")
	})
}), $(document).ready(function() {
	$(".common-fileinput-real").change(function() {
		this.files.length;
		if (1) {
			console.log("length < 1");
			var e = $(this).val().split("\\"),
				t = e[e.length - 1];
			$(this).siblings(".common-fileinput-message").html(t)
		} else console.log("length > 1"), $(this).siblings(".common-fileinput-message").html(1)
	})
}), $(document).ready(function() {
	$("#detail-header-message-call-first").click(function() {
		$(this).css("display", "none"), $("#detail-header-message-call-second").css("display", "inline-block")
	}), $("#detail-header-message-call-second").click(function() {
		$(this).css("display", "none"), $("#detail-header-message-call-first").css("display", "inline-block")
	}), 7 < $(".detail-header-message-heads img").length && $("#detail-header-message-heads-more").css("display", "inline"), $(".detail-list-item-radio").click(function() {
		$(this).prop("checked") && ($(".detail-list-item-radio").siblings(".detail-list-item-fa-wrapper").children(".fa-check").css("display", "none"), $(this).siblings(".detail-list-item-fa-wrapper").children(".fa-check").css("display", "block"))
	})
}), $(document).ready(function() {
	$(".item-like").click(function() {
		"rgb(255, 0, 0)" !== $(this).css("color") ? $(this).css("color", "red") : $(this).css("color", "#d2d2d2")
	}), $(".index-nav-item").click(function(e) {
		e.preventDefault(), "rgb(171, 204, 202)" !== $(this).css("color") ? ($(".index-nav-item").css("color", "#101010"), $(this).css("color", "#abccca")) : $(this).css("color", "#101010")
	}), $(".require").blur(function() {
		console.log("leave"), null !== $(this).val() && "" !== $(this).val().trim() ? ($(this).css("border-color", "#9dc8ee"), $(this).siblings(".skill-edit-input-icon").css("display", "inline"), $(this).siblings(".skill-edit-info").css("display", "none")) : ($(this).css("border-color", "#f07f7f"), $(this).siblings(".skill-edit-input-icon").css("display", "none"), $(this).siblings(".skill-edit-info").css("display", "block"))
	})
}), $(document).ready(function() {
	checkNotNull("form input", ".form-require", 1), checkStrong("#login-password", "#form-password", 6), checkEquel("#login-password", "#form-repassword", "#login-repassword"), checkReg("#login-email", "#form-email", /\w+[@]{1}\w+[.]\w+/), checkReg("#login-tel", "#form-tel", /^1[34578]\d{9}$/), setBtn($("#signup-form-submit"), !0, "darkgrey"), $("#signup-form-checkbox").click(function() {
		if (!1 === $(this).prop("checked")) setBtn($("#signup-form-submit"), !0, "darkgrey");else {
			var e = 0;
			$(".form-validate").each(function() {
				"none" !== $(this).css("display") && e++
			}), 0 === e && setBtn($("#signup-form-submit"), !1, "#f07f7f")
		}
	})
}), $("#skill-edit-law").click(function() {
	var e = $("#skill-submit-btn");
	!0 === $(this).prop("checked") ? !1 === validateForm() ? setBtn(e, !0, "#d2d2d2") : !0 === validateForm() && setBtn(e, !1, "#f07f7f") : setBtn(e, !0, "#d2d2d2")
}), $(".skill-edit-input-pic input").change(function() {
	console.log("input change"), console.log("this" + $(this).val());
	var e = $(this).val().split("\\");
	console.log(e);
	var t = e[e.length - 1];
	$(this).siblings(".skill-edit-input-content").html(t)
}), $(document).ready(function() {
	if (0 === $(".search-header-keywords-item").length ? $(".search-header-keywords-title").css("display", "inline") : $(".search-header-keywords-title").css("display", "none"), null !== document.querySelector("#header-search-input") && document.querySelector("#header-search-icon") && (document.querySelector("#header-search-input").addEventListener("keydown", handleSearch), $("#header-search-icon").click(function() {
			window.location.href = "search.html"
		})), getStorageSupport()) {
		var t = getStorageSupport();
		t.getItem("data-category") || t.setItem("data-category", "0"), t.getItem("data-filter") || t.setItem("data-filter", "0"), $(".search-category-item").each(function() {
			$(this).attr("data-category") === t.getItem("data-category") && changeColor($(this), "color", {
				color : "rgb(240, 127, 127)"
			}, {
				color : "#101010"
			}), $(this).click(function() {
				var e = $(this).attr("data-category");
				t.setItem("data-category", e), changeColor($(this), "color", {
					color : "rgb(240, 127, 127)"
				}, {
					color : "#101010"
				})
			})
		}), $(".search-filter-item").each(function() {
			$(this).attr("data-filter") === t.getItem("data-filter") && changeColor($(this), "color", {
				color : "#101010"
			}, {
				color : "rgb(187, 187, 187)"
			}), $(this).click(function() {
				var e = $(this).attr("data-filter");
				t.setItem("data-filter", e), changeColor($(this), "color", {
					color : "#101010"
				}, {
					color : "rgb(187, 187, 187)"
				})
			})
		}), storageDataAndBindClass("#user-skill-nav", ".user-content-nav-item", "data-skill", "user-content-nav-item-special", t), storageDataAndBindClass("#user-reward-nav", ".user-content-nav-item", "data-reward", "user-content-nav-item-special", t), storageDataAndBindClass("#user-buy-nav", ".user-content-nav-item", "data-buy", "user-content-nav-item-special", t), storageDataAndBindClass("#user-accept-nav", ".user-content-nav-item", "data-accept", "user-content-nav-item-special", t)
	}
	changeColor($(".search-header-advanced-item"), "background-color", {
		"background-color" : "#c9f0e9"
	}, {
		"background-color" : "transparent"
	})
}), $(document).ready(function() {
	$("#user-message-description").change(function() {
		17 < $(this).val().trim().length ? $(this).siblings(".user-head-validate").css("display", "block") : $(this).siblings(".user-head-validate").css("display", "none")
	}), $(".user-message-edit-btn").click(function() {
		!1 !== $(this).siblings("input").attr("disabled") && void 0 !== $(this).siblings("input").attr("disabled") ? ($(this).text("取消"), $(this).siblings("input").attr("disabled", !1), $(this).siblings("input").css("background-color", "white")) : ($(this).text("修改"), $(this).siblings("input").attr("disabled", !0), $(this).siblings("input").css("background-color", "transparent"), $(this).siblings("input").val(""))
	}), $(".user-message-userhead-btn").click(function() {
		!1 !== $(this).siblings("input").prop("disabled") && void 0 !== $(this).siblings("input").prop("disabled") ? ($(this).children().addClass("fa-times-circle"), $(this).siblings("input").prop("disabled", !1), $(this).siblings("input").css("background-color", "white")) : ($(this).children().removeClass("fa-times-circle"), $(this).siblings("input").prop("disabled", !0), $(this).siblings("input").css("background-color", "transparent"), $(this).siblings("input").val(""), $(this).siblings(".user-message-validate").css("display", "none"), $(this).siblings(".user-head-validate").css("display", "none"))
	})
}), $(".message-nav a").click(function() {
	"rgb(240, 127, 127)" !== $(this).css("background-color") && ($(".message-nav a").css("background-color", "transparent"), $(".message-nav a").css("color", "rgb(16, 16, 16)"), $(this).css("background-color", "rgb(240, 127, 127)"), $(this).css("color", "white"))
}), $(".user-nav a").click(function() {
	"rgb(240, 127, 127)" !== $(this).css("background-color") && ($(".user-nav a").css("background-color", "transparent"), $(".user-nav a").css("color", "rgb(16, 16, 16)"), $(this).css("background-color", "rgb(240, 127, 127)"), $(this).css("color", "white"))
}), $(document).ready(function() {
	$("#star-input").raty({
		path : "../images",
		number : 5,
		score : 5,
		target : "#star-target",
		targetType : "number"
	})
}), $(".user-header-nav a").click(function() {
	$(".user-header-nav a").css("border-bottom", "none"), $(this).css("border-bottom", "2px solid #f07f7f")
});