(function(e) {
    function t(t) {
        for (var i, a, s = t[0], l = t[1], c = t[2], d = 0, u = []; d < s.length; d++)
            a = s[d],
            Object.prototype.hasOwnProperty.call(o, a) && o[a] && u.push(o[a][0]),
            o[a] = 0;
        for (i in l)
            Object.prototype.hasOwnProperty.call(l, i) && (e[i] = l[i]);
        m && m(t);
        while (u.length)
            u.shift()();
        return r.push.apply(r, c || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < r.length; t++) {
            for (var n = r[t], i = !0, a = 1; a < n.length; a++) {
                var l = n[a];
                0 !== o[l] && (i = !1)
            }
            i && (r.splice(t--, 1),
            e = s(s.s = n[0]))
        }
        return e
    }
    var i = {}
      , o = {
        epub: 0
    }
      , r = [];
    function a(e) {
        return s.p + "deep/static/epub/js/" + ({}[e] || e) + ".7.0.153.a28bf.js"
    }
    function s(t) {
        if (i[t])
            return i[t].exports;
        var n = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, s),
        n.l = !0,
        n.exports
    }
    s.e = function(e) {
        var t = []
          , n = o[e];
        if (0 !== n)
            if (n)
                t.push(n[2]);
            else {
                var i = new Promise((function(t, i) {
                    n = o[e] = [t, i]
                }
                ));
                t.push(n[2] = i);
                var r, l = document.createElement("script");
                l.charset = "utf-8",
                l.timeout = 120,
                s.nc && l.setAttribute("nonce", s.nc),
                l.src = a(e);
                var c = new Error;
                r = function(t) {
                    l.onerror = l.onload = null,
                    clearTimeout(d);
                    var n = o[e];
                    if (0 !== n) {
                        if (n) {
                            var i = t && ("load" === t.type ? "missing" : t.type)
                              , r = t && t.target && t.target.src;
                            c.message = "Loading chunk " + e + " failed.\n(" + i + ": " + r + ")",
                            c.name = "ChunkLoadError",
                            c.type = i,
                            c.request = r,
                            n[1](c)
                        }
                        o[e] = void 0
                    }
                }
                ;
                var d = setTimeout((function() {
                    r({
                        type: "timeout",
                        target: l
                    })
                }
                ), 12e4);
                l.onerror = l.onload = r,
                document.head.appendChild(l)
            }
        return Promise.all(t)
    }
    ,
    s.m = e,
    s.c = i,
    s.d = function(e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    s.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    s.t = function(e, t) {
        if (1 & t && (e = s(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (s.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var i in e)
                s.d(n, i, function(t) {
                    return e[t]
                }
                .bind(null, i));
        return n
    }
    ,
    s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return s.d(t, "a", t),
        t
    }
    ,
    s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    s.p = "/",
    s.oe = function(e) {
        throw e
    }
    ;
    var l = window["webpackJsonp"] = window["webpackJsonp"] || []
      , c = l.push.bind(l);
    l.push = t,
    l = l.slice();
    for (var d = 0; d < l.length; d++)
        t(l[d]);
    var m = c;
    r.push([0, "chunk-vendors", "chunk-common"]),
    n()
}
)({
    0: function(e, t, n) {
        e.exports = n("23db")
    },
    "23db": function(e, t, n) {
        "use strict";
        n.r(t);
        n("d0f2"),
        n("25ba"),
        n("5f1c"),
        n("6ba0"),
        n("b47f");
        var i = n("f568")
          , o = (n("a450"),
        n("8e41"))
          , r = [o["Tabs"], o["TabPane"], o["Button"], o["Popover"], o["Image"], o["Tooltip"], o["Dialog"], o["Tree"], o["Input"], o["MessageBox"], o["Message"], o["Main"], o["Menu"], o["Slider"], o["Dropdown"], o["DropdownMenu"], o["DropdownItem"], o["MenuItem"], o["InputNumber"]]
          , a = {
            install: function(e, t) {
                r.map((function(t) {
                    e.component(t.name, t)
                }
                ))
            }
        };
        i["default"].use(a),
        i["default"].use(o["Loading"].directive),
        i["default"].prototype.$loading = o["Loading"].service,
        i["default"].prototype.$message = o["Message"],
        i["default"].prototype.$alert = o["MessageBox"].alert,
        i["default"].prototype.$msgbox = o["MessageBox"];
        n("b059");
        var s = n("7ef1")
          , l = n.n(s)
          , c = n("7e96")
          , d = n.n(c)
          , m = function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                attrs: {
                    id: "app"
                }
            }, [t("div", {
                ref: "eyeMask",
                staticClass: "filter-blue"
            }), t("div", {
                ref: "nightMask",
                staticClass: "filter-black"
            }), e.loading ? e._e() : t("Epub"), t("Upperlimit")], 1)
        }
          , u = []
          , p = (n("e680"),
        n("d91d"),
        n("15a6"),
        function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                staticClass: "page",
                class: {
                    "page-mobile": e.isMobile
                }
            }, [t("div", [e.showViewer ? t("el-image-viewer", {
                attrs: {
                    "on-close": function() {
                        e.showViewer = !1
                    },
                    "url-list": [e.imageUrl]
                }
            }) : e._e()], 1), t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.isMobile || e.isShowMobileMenu,
                    expression: "!isMobile || isShowMobileMenu"
                }],
                ref: "pageHead",
                staticClass: "page-head",
                class: {
                    driverActive: e.driverStatus,
                    "page-head-mobile": e.isMobile
                }
            }, [t("div", {
                staticClass: "page-head-nav-h"
            }, [t("div", {
                staticClass: "page-head-nav"
            }, [t("div", {
                staticClass: "page-head-nav-left"
            }, [t("div", {
                staticClass: "page-head-refresh",
                on: {
                    click: e.refresh
                }
            }, [e._v("\n             刷新\n             "), t("i", {
                staticClass: "iconfont2 icon-rotate"
            })]), t("div", {
                staticClass: "page-head-style",
                attrs: {
                    id: "page_head_style"
                },
                on: {
                    mouseover: e.styleOver,
                    mouseout: e.styleOut
                }
            }, [e._m(0), t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isActive,
                    expression: "isActive"
                }],
                staticClass: "page-head-style-popup",
                class: {
                    "dark-mode": 3 === e.styleObj.mode || "#383838" === e.styleObj.bgColor,
                    "page-head-style-popup-mobile": e.isMobile
                }
            }, [t("div", {
                staticClass: "popup-mode-div"
            }, e._l(e.modeList, (function(n, i) {
                return t("span", {
                    key: i,
                    class: {
                        active: e.styleObj.mode === n.id
                    },
                    on: {
                        click: function(t) {
                            return e.changeMode(n.id)
                        }
                    }
                }, [e._v("\n                   " + e._s(n.label) + "\n                 ")])
            }
            )), 0), t("div", {
                staticClass: "popup-other-div"
            }, [t("div", {
                staticClass: "popup-other-div-title"
            }, [e._v("字号")]), t("div", {
                staticClass: "popup-other-div-content"
            }, [t("el-slider", {
                style: {
                    "--my-color": e.fontStr
                },
                attrs: {
                    step: 2,
                    min: 14,
                    max: 24,
                    "show-stops": "",
                    marks: e.fontsizeMarks
                },
                model: {
                    value: e.styleObj.fontsize,
                    callback: function(t) {
                        e.$set(e.styleObj, "fontsize", t)
                    },
                    expression: "styleObj.fontsize"
                }
            })], 1)]), t("div", {
                staticClass: "popup-other-div lh-wrapper",
                on: {
                    mouseleave: e.onHandleCloseOLH
                }
            }, [t("div", {
                staticClass: "popup-other-div-title"
            }, [e._v("行距")]), t("div", {
                staticClass: "popup-other-div-content"
            }, [t("div", {
                staticClass: "radios-div"
            }, [e._l(e.lineHeightList, (function(n, i) {
                return [t("a", {
                    key: i,
                    class: e.styleObj.lineHeightMode == n.id ? "lh-item active" : "lh-item",
                    on: {
                        click: function(t) {
                            return e.changeLineHeightStyle(n.id)
                        }
                    }
                }, [2 === n.id ? [t("i", {
                    staticClass: "iconfont2 icon-wq-catalog ft23"
                })] : [e._v("\n                           " + e._s(n.label) + "\n                         ")]], 2)]
            }
            ))], 2), t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isActive && e.isOwnLineHeight,
                    expression: "isActive && isOwnLineHeight"
                }],
                staticClass: "lh-box"
            }, [t("div", {
                staticClass: "lh-box-wrapper"
            }, [t("div", {
                staticClass: "lh-lable"
            }, [e._v("行间距")]), t("div", {
                staticClass: "lh-inp-wrapper"
            }, [t("el-input-number", {
                staticClass: "lh-inp-num",
                attrs: {
                    precision: 1,
                    step: .1,
                    min: 1,
                    max: 3
                },
                on: {
                    change: e.onHandleOwnLHChange
                },
                model: {
                    value: e.styleObj.lineHeight,
                    callback: function(t) {
                        e.$set(e.styleObj, "lineHeight", t)
                    },
                    expression: "styleObj.lineHeight"
                }
            })], 1)])])])]), t("div", {
                staticClass: "popup-other-div"
            }, [t("div", {
                staticClass: "popup-other-div-title"
            }, [e._v("背景色")]), t("div", {
                staticClass: "popup-other-div-content"
            }, [t("div", {
                staticClass: "colors-div"
            }, e._l(e.colorsList, (function(n, i) {
                return t("span", {
                    key: n,
                    class: {
                        active: e.styleObj.bgColor === n
                    },
                    style: {
                        background: n
                    },
                    on: {
                        click: function(t) {
                            return e.setColor(n)
                        }
                    }
                })
            }
            )), 0)])]), t("div", {
                staticClass: "popup-other-div popup-bj"
            }, [t("div", {
                staticClass: "popup-other-div-title"
            }, [e._v("布局")]), t("div", {
                staticClass: "popup-other-div-content"
            }, [t("div", {
                staticClass: "radios-div"
            }, e._l(e.infeedList, (function(n, i) {
                return t("span", {
                    key: i,
                    class: {
                        active: e.styleObj.infeed === n.id,
                        disabled: !e.isAllowInfeed && 2 == n.id
                    },
                    attrs: {
                        title: e.isAllowInfeed || 2 != n.id ? "" : "当前分辨率不适用"
                    },
                    on: {
                        click: function(t) {
                            return e.changeInfeed(n.id)
                        }
                    }
                }, [t("i", {
                    staticClass: "mr5",
                    class: 2 === n.id ? "bjicon iconfont2 icon-a-2pgs-01" : "bjicon iconfont2 icon-file-text-01"
                }), e._v("\n                       " + e._s(n.label) + "\n                     ")])
            }
            )), 0)])])])]), t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !1,
                    expression: "false"
                }],
                staticClass: "page-head-page"
            }, [t("div", {
                staticClass: "page-head-tol",
                domProps: {
                    textContent: e._s("".concat(e.percentage))
                }
            }), t("span", [e._v("%")])]), t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.isMobile,
                    expression: "!isMobile"
                }],
                staticClass: "page-head-title"
            }, [e._v("\n             " + e._s(e.bookInfo.name) + "\n           ")])]), t("div", {
                staticClass: "page-head-s"
            }), t("div", {
                staticClass: "page_right_div"
            }, [t("span", {
                staticClass: "head-line"
            }), e.beenFullScreen ? t("div", {
                staticClass: "page-head-right",
                attrs: {
                    title: "退出全屏"
                },
                on: {
                    click: e.exitFull
                }
            }, [t("i", {
                staticClass: "iconfont2 icon-collapse"
            })]) : t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.isMobile,
                    expression: "!isMobile"
                }],
                staticClass: "page-head-right",
                attrs: {
                    title: "全屏"
                },
                on: {
                    click: e.allsc
                }
            }, [t("i", {
                staticClass: "iconfont2 icon-expand"
            })])])])])]), e.showPages ? t("div", {
                staticClass: "page-r",
                class: {
                    "page-r-mobile": e.isMobile
                }
            }, [t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.isMobile || e.isShowMobileMenu,
                    expression: "!isMobile || isShowMobileMenu"
                }],
                staticClass: "page-l"
            }, [t("ul", {
                staticClass: "page-l-menu",
                class: {
                    driverActive: e.driverStatus
                },
                attrs: {
                    id: "page_l_menu"
                }
            }, [e.bookInfo.volume_list && e.bookInfo.volume_list.length > 1 ? t("li", {
                staticClass: "page-l-icon page-l-m-volume",
                class: {
                    active: "分册" === e.activeText
                },
                attrs: {
                    title: "分册"
                },
                on: {
                    click: function(t) {
                        return e.navStyle("分册")
                    }
                }
            }, [t("i", {
                staticClass: "iconfont2 icon-book2"
            })]) : e._e(), t("li", {
                staticClass: "page-l-icon page-l-m-catalog",
                class: {
                    active: "目录" === e.activeText
                },
                attrs: {
                    title: "目录"
                },
                on: {
                    click: function(t) {
                        return e.navStyle("目录")
                    }
                }
            }, [t("i", {
                staticClass: "iconfont2 icon-catalog2"
            })]), t("li", {
                staticClass: "page-l-icon page-l-m-bookmark",
                class: {
                    active: "书签" === e.activeText
                },
                attrs: {
                    title: "书签"
                },
                on: {
                    click: function(t) {
                        return e.navStyle("书签")
                    }
                }
            }, [t("i", {
                staticClass: "iconfont2 icon-bookmark2-41"
            })]), t("li", {
                staticClass: "page-l-icon page-l-m-edit",
                class: {
                    active: "划线" === e.activeText
                },
                attrs: {
                    title: "划线"
                },
                on: {
                    click: function(t) {
                        return e.navStyle("划线")
                    }
                }
            }, [t("i", {
                staticClass: "iconfont2 icon-edit2"
            })]), t("li", {
                staticClass: "page-l-icon page-l-m-search",
                class: {
                    active: "查找" === e.activeText
                },
                attrs: {
                    title: "查找"
                },
                on: {
                    click: function(t) {
                        return e.navStyle("查找")
                    }
                }
            }, [t("i", {
                staticClass: "iconfont2 icon-search2"
            })]), e.isShuju ? t("li", {
                staticClass: "page-l-icon page-l-m-download",
                attrs: {
                    title: "下载客户端"
                },
                on: {
                    click: function(t) {
                        return e.goDownload()
                    }
                }
            }, [t("i", {
                staticClass: "iconfont2 icon-download21"
            })]) : e._e()])]), t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.setbarShow,
                    expression: "setbarShow"
                }],
                staticClass: "page-l-content",
                class: {
                    "page-l-content-mobile": e.isMobile,
                    "page-l-content-fixed": e.isLFixed
                }
            }, ["分册" === e.mlShow && e.bookInfo.volume_list && e.bookInfo.volume_list.length > 0 ? t("div", {
                staticClass: "page-l-box",
                class: {
                    active: "分册" === e.activeText
                }
            }, [t("div", {
                staticClass: "page-l-con"
            }, [t("div", {
                staticClass: "page-l-tit"
            }, [t("span", {
                staticClass: "search_tit"
            }, [e._v("\n               分册（共" + e._s(e.bookInfo.volume_list.length) + "章）\n             ")]), t("div", {
                staticClass: "duoce_fm_box"
            }, [t("ul", e._l(e.bookInfo.volume_list, (function(n, i) {
                return t("li", {
                    key: n.id,
                    class: {
                        active: i + 1 === +e.duoce_num
                    },
                    on: {
                        click: function(t) {
                            return e.readDuoce(n)
                        }
                    }
                }, [t("el-image", {
                    staticStyle: {
                        width: "118px",
                        height: "164px"
                    },
                    attrs: {
                        src: n.cover,
                        fit: "contain"
                    }
                }), t("span", {
                    staticClass: "duoce_fm_name",
                    attrs: {
                        title: n.name.length > 14 ? n.name : ""
                    }
                }, [e._v("\n                     " + e._s(n.name) + "\n                   ")])], 1)
            }
            )), 0)])])])]) : e._e(), "目录" === e.mlShow ? t("div", {
                staticClass: "page-l-box",
                class: {
                    active: "目录" === e.activeText
                }
            }, [t("div", {
                staticClass: "page-l-con"
            }, [t("ul", {
                staticClass: "page-l-cata"
            }, [t("book-cat-tree", {
                ref: "bookCatTreeRef",
                staticClass: "thm_pcreadblack",
                attrs: {
                    bid: e.bid,
                    canreadpages: e.canreadpages,
                    notitle: 1,
                    treelist: e.treelist,
                    cb_click: e.caTreeJump
                }
            })], 1)])]) : e._e(), "书签" === e.mlShow ? t("div", {
                staticClass: "page-l-box bookmark-page-l",
                class: {
                    active: "书签" === e.activeText
                }
            }, [t("div", {
                staticClass: "page-l-tit"
            }, [t("span", {
                staticClass: "search_tit"
            }, [e._v("\n             书签\n             "), e.bookInfo.volume_list && e.bookInfo.volume_list.length > 1 ? [e._v("\n               " + e._s("（第".concat(e.duoce_num, "册）")) + "\n             ")] : e._e()], 2), t("i", {
                staticClass: "iconfont2"
            })]), t("div", {
                staticClass: "page-l-con"
            }, [e.markOrgList.length ? t("ul", {
                staticClass: "page-l-search"
            }, e._l(e.markOrgList, (function(n, i) {
                return t("li", {
                    key: i,
                    staticClass: "note-div-item",
                    class: {
                        activedMark: e.activeMarkIdx === i
                    }
                }, [t("div", {
                    staticClass: "note-div"
                }, [t("div", {
                    staticClass: "note-div-wrapper"
                }, [t("div", {
                    staticClass: "note-div-content",
                    on: {
                        click: function(t) {
                            return e.gotoMark(n, i)
                        }
                    }
                }, [t("div", {
                    staticClass: "note-tit-div mark-title"
                }, [e._v("\n                       " + e._s(n.title) + "\n                     ")]), t("div", {
                    staticClass: "mark-info-div colord"
                }, [e._v("\n                       " + e._s(n.wordText ? n.wordText : "") + "\n                     ")])]), t("div", {
                    staticClass: "note-del-div",
                    on: {
                        click: function(t) {
                            return e.delMarkFromList(n)
                        }
                    }
                }, [t("i", {
                    staticClass: "iconfont2 icon-delete"
                }), t("span", [e._v("删除")])])])])])
            }
            )), 0) : t("div", {
                staticClass: "page-l-none"
            }, [e._v("~您还未添加书签哦~")])])]) : e._e(), "划线" === e.mlShow ? t("div", {
                staticClass: "page-l-box",
                class: {
                    active: "划线" === e.activeText
                }
            }, [t("div", {
                staticClass: "page-l-tit"
            }, [t("span", {
                staticClass: "search_tit"
            }, [e._v("\n             划线\n             "), e.bookInfo.volume_list && e.bookInfo.volume_list.length > 1 ? [e._v("\n               " + e._s("（第".concat(e.duoce_num, "册）")) + "\n             ")] : e._e()], 2), t("i", {
                staticClass: "iconfont2"
            })]), e.isShowFilterColor ? [t("div", {
                staticClass: "scribing-l-filter"
            }, [t("div", {
                staticClass: "scribing-l-filter-label"
            }, [e._v("颜色筛选：")]), t("div", {
                staticClass: "scribing-l-filter-wrapper"
            }, e._l(e.markFilterColorList, (function(n, i) {
                return t("a", {
                    key: i,
                    class: {
                        active: e.scribingActive == n.id
                    },
                    attrs: {
                        href: "javascript: void(0)"
                    },
                    on: {
                        click: function() {
                            return e.onHandleScribingFilter(n.id)
                        }
                    }
                }, [n.label ? [e._v("\n                   " + e._s(n.label) + "\n                 ")] : [t("span", {
                    staticClass: "scribing-l-filter-item",
                    style: {
                        backgroundColor: n.color,
                        borderColor: n.color
                    }
                })]], 2)
            }
            )), 0)]), t("div", {
                staticClass: "scribing-l-filter-line"
            })] : e._e(), t("div", {
                staticClass: "page-l-con page-l-con-scribing"
            }, [e.isShowFilterColor ? [e.noteShowList.length ? t("ul", {
                staticClass: "page-l-search"
            }, e._l(e.noteShowList, (function(n, i) {
                return t("li", {
                    key: i,
                    staticClass: "note-div-item",
                    class: {
                        activedNote: e.activedNoteIdx === i
                    }
                }, [t("div", {
                    staticClass: "note-div"
                }, [t("div", {
                    staticClass: "note-div-wrapper"
                }, [t("div", {
                    staticClass: "note-div-content",
                    on: {
                        click: function(t) {
                            return e.gotoNote(n, i)
                        }
                    }
                }, [t("div", {
                    staticClass: "note-title-div"
                }, [t("span", {
                    staticClass: "note-time"
                }, [e._v("\n                           " + e._s(e.formatDate(n.createdTime)) + "\n                         ")])]), t("div", {
                    staticClass: "note-copyText-div",
                    class: "note-line-".concat(n.lineStyleId)
                }, [e._v("\n                         " + e._s(n.copyText) + "\n                       ")])]), t("div", {
                    staticClass: "note-del-div",
                    on: {
                        click: function(t) {
                            return e.delNoteFromList(n)
                        }
                    }
                }, [t("i", {
                    staticClass: "iconfont2 icon-delete"
                }), t("span", [e._v("删除")])])])])])
            }
            )), 0) : t("div", {
                staticClass: "page-l-none"
            }, [e._v("-未筛选到符合条件的数据-")])] : [t("div", {
                staticClass: "page-l-none"
            }, [e._v("-您还未记录划线哦-")])]], 2)], 2) : e._e(), "查找" === e.mlShow ? t("div", {
                staticClass: "page-l-box page-l-s",
                class: {
                    active: "查找" === e.activeText
                }
            }, [t("div", {
                staticClass: "page-l-inline bn page-search-wrapper",
                class: {
                    "page-l-border": e.isAlreadySearch
                }
            }, [e._m(1), t("div", {
                staticClass: "page-l-item"
            }, [t("el-input", {
                attrs: {
                    placeholder: "请输入要查找的内容"
                },
                nativeOn: {
                    keyup: function(t) {
                        return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.search()
                    }
                },
                model: {
                    value: e.input,
                    callback: function(t) {
                        e.input = t
                    },
                    expression: "input"
                }
            }), t("el-button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function(t) {
                        return e.search()
                    }
                }
            }, [e._v("查询")])], 1), e.isAlreadySearch && !e.isSearchLoading ? [e.searchList && e.searchList.length > 0 ? t("div", {
                staticClass: "search-all-div"
            }, [e._v("\n               " + e._s("查找到".concat(e.searchTotalrecord, "个结果包含搜索关键词")) + "\n             ")]) : t("div", {
                staticClass: "search-all-div"
            }, [t("i", {
                staticClass: "el-icon-warning-outline"
            }), e._v("\n               未查到符合条件的数据\n             ")])] : e._e(), t("div", {
                staticClass: "search-line"
            }), e.isAlreadySearch && e.isSearchLoading ? t("div", {
                staticClass: "sk-circle"
            }, [t("div", {
                staticClass: "sk-circle1 sk-child"
            }), t("div", {
                staticClass: "sk-circle2 sk-child"
            }), t("div", {
                staticClass: "sk-circle3 sk-child"
            }), t("div", {
                staticClass: "sk-circle4 sk-child"
            }), t("div", {
                staticClass: "sk-circle5 sk-child"
            }), t("div", {
                staticClass: "sk-circle6 sk-child"
            }), t("div", {
                staticClass: "sk-circle7 sk-child"
            }), t("div", {
                staticClass: "sk-circle8 sk-child"
            }), t("div", {
                staticClass: "sk-circle9 sk-child"
            }), t("div", {
                staticClass: "sk-circle10 sk-child"
            }), t("div", {
                staticClass: "sk-circle11 sk-child"
            }), t("div", {
                staticClass: "sk-circle12 sk-child"
            })]) : e._e(), e.isAlreadySearch ? e._e() : [t("div", {
                staticClass: "search-noData-div"
            }, [e._v("-请输入关键字进行查找哦-")])]], 2), t("div", {
                staticClass: "page-l-con search-list-wrapper",
                staticStyle: {
                    height: "calc(100% - 200px)"
                }
            }, [e._l(e.searchList, (function(n, i) {
                return t("div", {
                    key: i,
                    staticClass: "page-search-block-div"
                }, [t("div", {
                    staticClass: "page-search-block-title"
                }, [e._v("\n               " + e._s(n.rootTitle) + "\n             ")]), t("div", {
                    staticClass: "page-search-block-list"
                }, [e._l(n.child, (function(i, o) {
                    return [t("div", {
                        key: o,
                        staticClass: "page-search-item",
                        class: {
                            "page-search-item-active": i.labelidx == e.searchTextSn && n.rootId == e.searchParentId
                        },
                        on: {
                            click: function(t) {
                                return e.gotoSearchItem(i, n.rootId, n.rootTitle)
                            }
                        }
                    }, [t("div", {
                        staticClass: "limit-item",
                        domProps: {
                            innerHTML: e._s(i.content.join(""))
                        }
                    })])]
                }
                )), t("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: n.chapterPageCount > 1 && n.chapterTotal > n.child.length,
                        expression: "\n                   item.chapterPageCount > 1 &&\n                   item.chapterTotal > item.child.length\n                 "
                    }],
                    staticClass: "page-search-more",
                    on: {
                        click: function(t) {
                            return e.getMoreSearch(n)
                        }
                    }
                }, [t("i", {
                    staticClass: "el-icon-arrow-down",
                    attrs: {
                        title: "展开"
                    }
                })])], 2)])
            }
            )), t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isAlreadySearch,
                    expression: "isAlreadySearch"
                }],
                staticClass: "page-search-show-more"
            }, [e.searchOriginLength > e.searchList.length ? [t("span", {
                on: {
                    click: e.goAllMoreSearch
                }
            }, [e._v("查看更多")])] : [t("span", [e._v("没有更多了")])]], 2)], 2)]) : e._e()]), t("div", {
                ref: "pagem",
                staticClass: "page-m",
                class: {
                    "hid-scroll1": 2 === Number(e.styleObj.infeed),
                    "page-m-mobile": e.isMobile
                },
                attrs: {
                    id: "scroll"
                }
            }, [t("div", {
                ref: "page_content",
                staticClass: "page-m-box",
                class: {
                    "page-m-reservedBlack": !e.setbarShow && e.isReservedBlank,
                    "page-m-box-infeed": 2 === Number(e.styleObj.infeed),
                    "page-m-box-infeed1": 1 === Number(e.styleObj.infeed),
                    "page-m-box-mobile": e.isMobile
                },
                attrs: {
                    id: "pagebox"
                }
            }, [t("div", {
                ref: "pageCover",
                staticClass: "page-img-box",
                staticStyle: {
                    height: "0px"
                }
            }), t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: 0 === e.canread && e.nowId <= e.canreadpages || 1 === e.canread,
                    expression: "(canread === 0 && nowId <= canreadpages) || canread === 1"
                }],
                ref: "waiting-div",
                staticClass: "page-img-box waiting",
                class: {
                    loading: !e.realLoad,
                    "page-img-box-infeed": 2 === Number(e.styleObj.infeed),
                    "page-img-box-infeed1": 1 === Number(e.styleObj.infeed),
                    driverActive: e.driverStatus,
                    waitingBg: !e.isLoaded
                },
                attrs: {
                    id: "pageImgBox"
                }
            }, [e.isShowLoadDivImg && e.coverpath ? t("div", {
                class: {},
                attrs: {
                    id: "box"
                }
            }, [t("div", {
                staticClass: "img-box",
                class: {
                    "img-box-close": e.isShowLoadImg,
                    c1: "#F8F9F9" === e.styleObj.bgColor,
                    c2: "#EAE9E1" === e.styleObj.bgColor,
                    c3: "#DCF0E1" === e.styleObj.bgColor,
                    c4: "#383838" === e.styleObj.bgColor
                },
                attrs: {
                    id: "boxImg"
                }
            }, [t("img", {
                attrs: {
                    src: e.coverpath
                }
            })])]) : e._e(), e.isMarkPostion ? [t("div", {
                staticClass: "page-m-mark",
                class: {
                    "page-m-marko": e.markFlag
                },
                staticStyle: {
                    "z-index": "3"
                },
                style: {
                    marginLeft: "".concat(2 === Number(e.styleObj.infeed) ? e.pageClientWidth - 118 : e.pageClientWidth - 60, "px")
                },
                attrs: {
                    title: "添加书签"
                },
                on: {
                    click: e.onHandleMarkClick,
                    mouseover: function() {
                        return e.onChangeMarkIcon("over")
                    },
                    mouseout: function() {
                        return e.onChangeMarkIcon("out")
                    }
                }
            }, [t("i", {
                staticClass: "iconfont2",
                class: e.markIcon
            })])] : e._e(), t("div", {
                staticClass: "page-img-box",
                class: {
                    "page-img-box-infeed": 2 === Number(e.styleObj.infeed)
                },
                attrs: {
                    id: "iFrameBox"
                }
            }, [t("transition", {
                attrs: {
                    name: "fade",
                    duration: {
                        enter: 1e3,
                        leave: 0
                    }
                }
            }, [t("iframe", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.iframeInitialized,
                    expression: "iframeInitialized"
                }],
                ref: "iframes",
                staticClass: "page-iframes-box",
                class: {
                    "page-iframes-box-infeed": 2 === Number(e.styleObj.infeed)
                },
                staticStyle: {
                    width: "100%"
                },
                attrs: {
                    id: "iFrame"
                }
            })]), t("transition", {
                attrs: {
                    name: "fade",
                    duration: {
                        enter: 1e3,
                        leave: 0
                    }
                }
            }), t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.iframeInitialized,
                    expression: "iframeInitialized"
                }],
                staticClass: "page-div",
                class: {
                    c1: "#F8F9F9" === e.styleObj.bgColor,
                    c2: "#EAE9E1" === e.styleObj.bgColor,
                    c3: "#DCF0E1" === e.styleObj.bgColor,
                    c4: "#383838" === e.styleObj.bgColor
                }
            }, [e.treelist.length > 0 && e.nowId !== e.treelist[0]["id"] ? t("span", {
                on: {
                    click: function(t) {
                        return e.gotoPage(-1)
                    }
                }
            }, [e._v("\n                 上一章节\n               ")]) : t("span", {
                staticClass: "disabled-btn"
            }, [e._v("上一章节")]), e.treelist.length > 0 && e.nowId < e.orderOnePageList[e.orderOnePageList.length - 1]["id"] ? t("span", {
                on: {
                    click: function(t) {
                        return e.gotoPage(1)
                    }
                }
            }, [e._v("\n                 下一章节\n               ")]) : t("span", {
                staticClass: "disabled-btn"
            }, [e._v("下一章节")])])], 1), t("div", {
                staticClass: "page-arrow-left",
                class: {
                    "page-arrow-left-mobile": e.isMobile
                },
                on: {
                    click: e.arrowLeftClick
                }
            }, [t("span", {
                attrs: {
                    id: "page_arrow_left"
                }
            })]), t("div", {
                staticClass: "page-arrow-right",
                class: {
                    "page-arrow-right-mobile": e.isMobile
                },
                on: {
                    click: e.arrowRightClick
                }
            }, [t("span", {
                attrs: {
                    id: "page_arrow_right"
                }
            })]), t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.isMobile,
                    expression: "!isMobile"
                }],
                staticClass: "page-div-infeed-message"
            }, [e._v("\n             可使用键盘左键【←】和右键【→】翻页阅读\n           ")])], 2), e.initialized && 0 === e.canread && e.nowId > e.canreadpages ? [e.isShuju && e.readlinkData ? t("other-read-warning", {
                attrs: {
                    readlinkData: e.readlinkData,
                    bid: e.bid,
                    bookname: e.bookname,
                    author: e.author,
                    coverurl: e.coverurl,
                    ago_price: e.price,
                    now_price: e.sellprice,
                    canreadpages: e.canreadpages
                }
            }) : t("read-warning", {
                ref: "pageImgBox" + (e.canreadpages + 1),
                attrs: {
                    id: "readwarning",
                    bid: e.bid,
                    bookname: e.bookname,
                    author: e.author,
                    coverurl: e.coverurl,
                    ago_price: e.price,
                    now_price: e.sellprice,
                    canreadpages: e.canreadpages
                }
            })] : e._e()], 2)])]) : t("iframe", {
                staticClass: "play-iframe",
                attrs: {
                    src: "",
                    frameborder: "0",
                    id: "showIframe"
                }
            }), e.showTip ? t("div", {
                staticClass: "tip-div",
                style: {
                    left: e.tipLeft + "px",
                    top: e.tipTop + "px"
                },
                attrs: {
                    id: "tip-div"
                }
            }, [e.isWriteMark ? [t("div", {
                staticClass: "tip-mark"
            }, [t("div", {
                staticClass: "tip-mark-title"
            }, [e._m(2), t("i", {
                staticClass: "el-icon-close",
                on: {
                    click: e.closeTipDiv
                }
            })]), t("div", {
                staticClass: "tip-mark-input"
            }, [t("el-input", {
                staticClass: "mark-input",
                attrs: {
                    type: "textarea",
                    placeholder: "请输入笔记内容"
                },
                model: {
                    value: e.markWord,
                    callback: function(t) {
                        e.markWord = t
                    },
                    expression: "markWord"
                }
            })], 1), t("div", {
                staticClass: "tip-mark-btn"
            }, [t("div", {
                staticClass: "color-div"
            }, e._l(e.markColorList, (function(n) {
                return t("span", {
                    key: n.id,
                    class: {
                        active: n.id === e.markColorActive
                    },
                    style: {
                        background: n.color
                    },
                    on: {
                        click: function(t) {
                            return e.setNoteColor(n)
                        }
                    }
                })
            }
            )), 0), t("el-button", {
                staticClass: "tip-mark-save-btn",
                attrs: {
                    size: "medium",
                    type: "primary"
                },
                on: {
                    click: e.saveNote
                }
            }, [e._v("\n             保存\n           ")])], 1)])] : [t("div", {
                staticClass: "scribing-wrapper"
            }, [t("div", {
                staticClass: "scribing-content"
            }, [t("div", {
                staticClass: "color-div scribing-color-wrapper"
            }, e._l(e.markColorList, (function(n) {
                return t("span", {
                    key: n.id,
                    class: {
                        active: n.id === Number(e.markColorActive)
                    },
                    style: {
                        background: n.color
                    },
                    on: {
                        click: function(t) {
                            return e.onlyLine(n)
                        }
                    }
                })
            }
            )), 0), t("div", {
                staticClass: "btn-div"
            }, [t("span", {
                on: {
                    click: e.copyNote
                }
            }, [t("i", {
                staticClass: "iconfont2 icon-copy1"
            }), t("b", [e._v("复制")])]), t("span", {
                on: {
                    click: e.searchNote
                }
            }, [t("i", {
                staticClass: "iconfont2 icon-search-normal"
            }), t("b", [e._v("搜本书")])]), t("span", {
                on: {
                    click: e.onSearchOnline
                }
            }, [t("i", {
                staticClass: "iconfont2 icon-search-global"
            }), t("b", [e._v("搜网页")])])])]), t("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "取消划线" === e.tipText,
                    expression: "tipText === '取消划线'"
                }],
                staticClass: "scribing-del"
            }, [t("a", {
                attrs: {
                    href: "javascript: void(0)"
                },
                on: {
                    click: e.delNote
                }
            }, [t("i", {
                staticClass: "iconfont2 icon-delete"
            }), t("em", [e._v("删除")])])])])]], 2) : e._e(), t("div", {
                staticClass: "audio-player",
                class: {
                    isPlay: e.isPlay
                }
            }, [t("div", {
                ref: "playerCon",
                staticClass: "prism-player",
                attrs: {
                    id: "audio-con"
                }
            }), t("div", {
                ref: "audioPla",
                staticClass: "play-more"
            }, [t("div", {
                staticClass: "icon-previous iconfont2"
            }), t("el-popover", {
                attrs: {
                    placement: "top",
                    width: "20",
                    trigger: "hover",
                    "append-to-body": !1,
                    "visible-arrow": !1
                }
            }, [t("div", {
                staticClass: "poper-play"
            }, [e._v("\n           " + e._s(e.videoPlayStatus ? "播放" : "暂停") + "\n         ")]), t("div", {
                staticClass: "iconfont2 play_icon_audio",
                class: e.videoPlayStatus ? "icon-a-playyes" : "icon-a-playno",
                attrs: {
                    slot: "reference"
                },
                on: {
                    click: e.playMedia
                },
                slot: "reference"
            })]), t("div", {
                staticClass: "icon-next iconfont2"
            }), t("div", {
                staticClass: "header_title"
            }, [e._v(e._s(e.videoTitle))]), t("div", {
                staticClass: "audio_close_btn",
                on: {
                    click: e.handleClose
                }
            }, [t("div", {
                staticClass: "iconfont2 icon-close"
            })]), t("el-dropdown", {
                staticClass: "poper-select",
                attrs: {
                    slot: "reference",
                    placement: "top",
                    trigger: "hover"
                },
                on: {
                    command: e.handleCommand
                },
                slot: "reference"
            }, [t("span", {
                staticClass: "el-dropdown-link"
            }, [e._v("\n           " + e._s("1X" == e.speedValue ? "倍速" : e.speedValue) + "\n         ")]), t("el-dropdown-menu", {
                staticClass: "poper-select-menu",
                attrs: {
                    slot: "dropdown",
                    appendToBody: !1
                },
                slot: "dropdown"
            }, [t("el-dropdown-item", {
                class: {
                    "is-command": "2X" == e.speedValue
                },
                attrs: {
                    command: "2"
                }
            }, [e._v("\n             2.0X\n           ")]), t("el-dropdown-item", {
                class: {
                    "is-command": "1.5X" == e.speedValue
                },
                attrs: {
                    command: "1.5"
                }
            }, [e._v("\n             1.5X\n           ")]), t("el-dropdown-item", {
                class: {
                    "is-command": "1.25X" == e.speedValue
                },
                attrs: {
                    command: "1.25"
                }
            }, [e._v("\n             1.25X\n           ")]), t("el-dropdown-item", {
                class: {
                    "is-command": "1X" == e.speedValue
                },
                attrs: {
                    command: "1"
                }
            }, [e._v("\n             1.0X\n           ")]), t("el-dropdown-item", {
                class: {
                    "is-command": "0.5X" == e.speedValue
                },
                attrs: {
                    command: "0.5"
                }
            }, [e._v("\n             0.5X\n           ")])], 1)], 1), t("el-dropdown", {
                staticClass: "poper-volume",
                attrs: {
                    slot: "reference",
                    placement: "top-end",
                    trigger: "hover"
                },
                slot: "reference"
            }, [t("span", {
                staticClass: "el-dropdown-link icon-volume"
            }), t("el-dropdown-menu", {
                staticClass: "poper-select-menu",
                attrs: {
                    slot: "dropdown",
                    appendToBody: !1
                },
                slot: "dropdown"
            }, [t("el-dropdown-item", [t("el-slider", {
                staticClass: "volume-slider",
                attrs: {
                    "show-tooltip": !1,
                    vertical: "",
                    height: "120px"
                },
                on: {
                    change: e.changeVolume
                },
                model: {
                    value: e.volume,
                    callback: function(t) {
                        e.volume = t
                    },
                    expression: "volume"
                }
            })], 1)], 1)], 1)], 1)]), t("resource-list", {
                attrs: {
                    bid: e.bid,
                    resourceShow: e.resourceShow,
                    resourceAc: e.resourceAc,
                    resourceCount: e.resourceCount,
                    resource_list: e.resource_list,
                    nowPlayId: e.nowPlayId
                }
            }), t("el-dialog", {
                attrs: {
                    "custom-class": "poper_box",
                    title: e.videoTitle,
                    visible: e.dialogTableVisible,
                    "modal-append-to-body": !1,
                    "before-close": e.handleClose,
                    "close-on-click-modal": !1
                },
                on: {
                    "update:visible": function(t) {
                        e.dialogTableVisible = t
                    }
                }
            }, [t("div", {
                ref: "playerCon",
                class: e.videoPlayStatus ? "videoAc prism-player" : "prism-player",
                attrs: {
                    id: "player-con"
                },
                on: {
                    click: function(t) {
                        return e.getPlay(t)
                    }
                }
            }), t("div", {
                ref: "pla",
                staticClass: "play-more"
            }, [t("el-popover", {
                attrs: {
                    placement: "top",
                    width: "20",
                    trigger: "hover",
                    "visible-arrow": !1,
                    "append-to-body": !1
                },
                model: {
                    value: e.visiblePicture,
                    callback: function(t) {
                        e.visiblePicture = t
                    },
                    expression: "visiblePicture"
                }
            }, [t("div", {
                staticClass: "poper-title"
            }, [e._v("画中画")]), t("div", {
                staticClass: "icon-picture",
                attrs: {
                    slot: "reference"
                },
                on: {
                    click: function(t) {
                        return t.stopPropagation(),
                        e.enterPicture.apply(null, arguments)
                    }
                },
                slot: "reference"
            })]), t("el-popover", {
                attrs: {
                    placement: "top",
                    width: "20",
                    trigger: "hover",
                    "append-to-body": !1,
                    "visible-arrow": !1
                }
            }, [t("div", {
                staticClass: "poper-title"
            }, [e._v("\n           " + e._s(e.videoPlayStatus ? "播放" : "暂停") + "\n         ")]), t("div", {
                staticClass: "iconfont2 play_icon",
                class: e.videoPlayStatus ? "icon-a-playyes" : "icon-a-playno",
                attrs: {
                    slot: "reference"
                },
                on: {
                    click: e.playMedia
                },
                slot: "reference"
            })]), t("el-dropdown", {
                staticClass: "poper-volume",
                attrs: {
                    slot: "reference",
                    placement: "top-end",
                    trigger: "hover"
                },
                slot: "reference"
            }, [t("span", {
                staticClass: "el-dropdown-link icon-volume"
            }), t("el-dropdown-menu", {
                staticClass: "poper-select-menu",
                attrs: {
                    slot: "dropdown",
                    appendToBody: !1
                },
                slot: "dropdown"
            }, [t("el-dropdown-item", [t("el-slider", {
                staticClass: "volume-slider",
                attrs: {
                    "show-tooltip": !1,
                    vertical: "",
                    height: "120px"
                },
                on: {
                    change: e.changeVolume
                },
                model: {
                    value: e.volume,
                    callback: function(t) {
                        e.volume = t
                    },
                    expression: "volume"
                }
            })], 1)], 1)], 1), t("el-dropdown", {
                staticClass: "poper-select",
                attrs: {
                    slot: "reference",
                    placement: "top",
                    trigger: "hover"
                },
                on: {
                    command: e.handleCommand
                },
                slot: "reference"
            }, [t("span", {
                staticClass: "el-dropdown-link"
            }, [e._v("\n           " + e._s("1X" == e.speedValue ? "倍速" : e.speedValue) + "\n         ")]), t("el-dropdown-menu", {
                staticClass: "poper-select-menu",
                attrs: {
                    slot: "dropdown",
                    appendToBody: !1
                },
                slot: "dropdown"
            }, [t("el-dropdown-item", {
                class: {
                    "is-command": "2X" == e.speedValue
                },
                attrs: {
                    command: "2"
                }
            }, [e._v("\n             2.0X\n           ")]), t("el-dropdown-item", {
                class: {
                    "is-command": "1.5X" == e.speedValue
                },
                attrs: {
                    command: "1.5"
                }
            }, [e._v("\n             1.5X\n           ")]), t("el-dropdown-item", {
                class: {
                    "is-command": "1.25X" == e.speedValue
                },
                attrs: {
                    command: "1.25"
                }
            }, [e._v("\n             1.25X\n           ")]), t("el-dropdown-item", {
                class: {
                    "is-command": "1X" == e.speedValue
                },
                attrs: {
                    command: "1"
                }
            }, [e._v("\n             1.0X\n           ")]), t("el-dropdown-item", {
                class: {
                    "is-command": "0.5X" == e.speedValue
                },
                attrs: {
                    command: "0.5"
                }
            }, [e._v("\n             0.5X\n           ")])], 1)], 1)], 1)])], 1)
        }
        )
          , h = [function() {
            var e = this
              , t = e._self._c;
            return t("span", {
                staticClass: "style-span"
            }, [e._v("\n               样式\n               "), t("i", {
                staticClass: "iconfont2 icon-type"
            })])
        }
        , function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                staticClass: "page-l-tit"
            }, [t("span", [e._v("查找")]), t("i", {
                staticClass: "iconfont2"
            })])
        }
        , function() {
            var e = this
              , t = e._self._c;
            return t("div", [t("i", {
                staticClass: "el-icon-chat-dot-round"
            }), t("span", [e._v("记录生活，从笔下开始......")])])
        }
        ]
          , g = (n("9f60"),
        n("94f0"),
        n("2843"),
        n("ac67"),
        n("32ea"),
        n("3441"),
        n("a7e5"),
        n("aa18"),
        n("982e"),
        n("1b12"))
          , f = (n("0c84"),
        n("3269"),
        n("4057"),
        n("772c"))
          , b = (n("1bc7"),
        n("8dee"),
        n("4737"))
          , v = (n("9580"),
        n("d617"))
          , w = (n("fc02"),
        n("ee06"),
        n("00f2"),
        n("897d"))
          , y = n.n(w)
          , k = function() {
            var e = {}
              , t = null
              , n = null
              , i = document.createElement.bind(document)
              , o = (console.log,
            function(e) {
                e = e || {};
                var t = []
                  , n = i("canvas");
                n.width = 2e3,
                n.height = 200,
                n.style.display = "inline";
                var o = n.getContext("2d");
                return o.rect(0, 0, 10, 10),
                o.rect(2, 2, 6, 6),
                t.push("canvas winding:" + (!1 === o.isPointInPath(5, 5, "evenodd") ? "yes" : "no")),
                o.textBaseline = "alphabetic",
                o.fillStyle = "#f60",
                o.fillRect(125, 1, 62, 20),
                o.fillStyle = "#069",
                e.dontUseFakeFontInCanvas ? o.font = "11pt Arial" : o.font = "11pt no-real-font-123",
                o.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15),
                o.fillStyle = "rgba(102, 204, 0, 0.2)",
                o.font = "18pt Arial",
                o.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45),
                o.globalCompositeOperation = "multiply",
                o.fillStyle = "rgb(255,0,255)",
                o.beginPath(),
                o.arc(50, 50, 50, 0, 2 * Math.PI, !0),
                o.closePath(),
                o.fill(),
                o.fillStyle = "rgb(0,255,255)",
                o.beginPath(),
                o.arc(100, 50, 50, 0, 2 * Math.PI, !0),
                o.closePath(),
                o.fill(),
                o.fillStyle = "rgb(255,255,0)",
                o.beginPath(),
                o.arc(75, 100, 50, 0, 2 * Math.PI, !0),
                o.closePath(),
                o.fill(),
                o.fillStyle = "rgb(255,0,255)",
                o.arc(75, 75, 75, 0, 2 * Math.PI, !0),
                o.arc(75, 75, 25, 0, 2 * Math.PI, !0),
                o.fill("evenodd"),
                n.toDataURL && t.push("canvas fp:" + n.toDataURL()),
                t
            }
            )
              , r = function(e, t, n) {
                n = n || 0;
                var i = "";
                if (0 != n) {
                    var o = new Date;
                    o.setTime(o.getTime() + 1e3 * n),
                    i = "; expires=" + o.toGMTString()
                }
                document.cookie = e + "=" + escape(t) + i + "; path=/"
            }
              , a = "gidf"
              , s = 0;
            if (n = y()(o()[1]),
            "function" === typeof r) {
                if (t = t || r,
                r(a, n, s),
                "function" == typeof qf)
                    return;
                (function(t) {
                    return e = i(t),
                    e
                }
                )
            }
        }
          , _ = k
          , O = function() {
            var e = "\n  html,\n  body,\n  div,\n  span,\n  applet,\n  object,\n  iframe,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  p,\n  blockquote,\n  pre,\n  a,\n  abbr,\n  acronym,\n  address,\n  big,\n  cite,\n  code,\n  del,\n  dfn,\n  em,\n  font,\n  img,\n  ins,\n  kbd,\n  q,\n  s,\n  samp,\n  small,\n  strike,\n  strong,\n  sub,\n  sup,\n  tt,\n  var,\n  b,\n  u,\n  i,\n  center,\n  dl,\n  dt,\n  dd,\n  ol,\n  ul,\n  li,\n  fieldset,\n  form,\n  label,\n  legend,\n  table,\n  caption,\n  tbody,\n  tfoot,\n  thead,\n  tr,\n  th,\n  td {\n      margin: 0;\n      padding: 0;\n  }\n\n  p {\n      text-indent: 2em;\n      text-align: justify;\n      /*  margin:0.6em 0;*/\n      /*  line-height:130%;*/\n  }\n\n  div {\n      text-align: justify;\n      /*  line-height:100%;*/\n      /*  margin:0px;*/\n      /*  padding:0px;*/\n  }\n\n  // *, body {\n  //   line-height: 1.5em !important;\n  // }\n\n  body {\n    overflow: auto;\n  }\n\n  /* 拼音样式 */\n  ruby {\n      ruby-align: center;\n  }\n\n  /* 拼音文字样式 */\n  ruby>rt {\n      font-size: 0.5em;\n  }\n\n  a {\n      text-decoration: none;\n  }\n\n  @media print {\n      body {\n          display: none\n      }\n  }\n\n  body>*>img:only-child {\n      max-height: 100%;\n  }\n\n  body {\n      position: relative;\n      margin: 0;\n      border: 0;\n  }\n\n  body::-webkit-scrollbar {\n      display: none;\n  }\n\n  .waiting-s {\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      width: 100%;\n      height: 100%;\n      background-color: #fff;\n      z-index: 99;\n  }\n\n  img {\n      cursor: pointer;\n      max-width: 100%;\n  }\n\n  pre {\n    display: flex;\n    flex-direction: row;\n    box-sizing: border-box;\n    width: 100%;\n    flex-wrap: wrap;\n    align-items: center;\n    overflow: hidden;\n  }\n";
            return e.replace(/\n/g, " ")
        }
          , x = function() {
            var e = "\n  html {\n    position: relative;\n    overflow: hidden;\n  }\n  .infeed2 img {\n    cursor: pointer;\n    width: auto !important;\n    max-height: 100vh !important;\n  }\n\n  .infeed2{\n      width: 100%;\n      // height: 100vh;\n      position: relative;\n      height: 100vh;\n      column-gap: 64px;\n      transform: translateX(0);\n      // width: auto;\n      word-break:break-all;\n      column-count: 2;\n      column-fill: auto;\n      border-left: 32px solid rgba(255,255,255,0);\n      border-right: 32px solid rgba(255,255,255,0);\n      box-sizing: border-box;\n      scroll-behavior:smooth;\n      break-inside: avoid;\n  }\n\n  .infeed2>*>img:only-child {\n      object-fit: contain;\n      // height: 100vh;\n  }\n  .infeed2>*>*>img:only-child {\n    object-fit: contain;\n  }\n  .infeed2 p.hang-bodyContent-2 {\n    text-indent: 0em !important;\n  }\n  .infeed2 p {\n    height: auto !important;\n    width: auto !important;\n  }\n  .infeed2 .eles-margin{}\n  .infeed2 .single-page-eles{\n      box-sizing: border-box;\n      height:calc(100%);\n      margin-bottom: 0!important;\n      margin-top: 0!important;\n  }\n  .infeed2 .single-page-eles img{\n      height:100%;\n  }\n  .infeed2 .single-page-eles-last img{\n      float:left;\n  }\n  .infeed2 .single-img-eles{\n      page-break-inside: avoid;\n      break-inside: avoid;\n  }\n  .infeed2 .qorcode-tooltip {\n     left: auto;\n     bottom: -70px;\n  }\n  ";
            return e.replace(/\n/g, " ")
        }
          , C = function() {
            var e = "\n  .prism-player .prism-cover {\n      width: auto !important;\n  }\n\n  .resourc_audio .prism-player {\n      overflow: visible !important;\n  }\n\n  .prism-player .prism-controlbar {\n      z-index: 999 !important;\n      display: flex !important;\n      align-items: center !important;\n  }\n\n  .prism-player .prism-controlbar .prism-controlbar-bg {\n      height: 140px !important;\n      background: none !important;\n      background-image: linear-gradient(transparent, rgba(0, 0, 0, .5)) !important;\n  }\n\n  .resourc_video,\n  .resourc_audio,\n  .resourc_gallery,\n  .resourc_indep,\n  .resourc_h5,\n  .resourc_lt {\n      position: relative;\n      border-radius: 4px;\n      background-color: rgba(51, 129, 247, 0.08);\n      overflow: hidden;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-size: 14px;\n      color: rgba(58, 84, 163, 1);\n      box-sizing: border-box;\n      margin: 10px 0;\n      z-index: 2;\n  }\n\n  .c_els:hover {\n      opacity: 0.8;\n  }\n\n  .resourc_video,\n  .resourc_audio,\n  .resourc_indep,\n  .resourc_h5 {\n      cursor: pointer;\n  }\n\n  .resourc_video i.iconfont2,\n  .resourc_audio i.iconfont2,\n  .resourc_indep i.iconfont2,\n  .resourc_h5 i.iconfont2,\n  .resourc_lt i.iconfont2 {\n      color: rgba(58, 84, 163, 1);\n      font-size: 20px !important;\n  }\n\n  .resourc_mark {\n      position: absolute;\n      bottom: -12px;\n      right: 8px;\n      z-index: -1;\n      width: 75px;\n      height: 75px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border-radius: 94px;\n      background: linear-gradient(180deg, #D1E2FF 0%, #E9EFF9 100%);\n  }\n\n  .resourc_mark i.iconfont2 {\n      color: rgba(205, 221, 249, 1);\n      font-size: 48px !important;\n      transform: rotate(345deg);\n      transform-origin: center center;\n      line-height: 0px !important;\n  }\n\n  .resourc_video::before,\n  .resourc_audio::before,\n  .resourc_gallery::before,\n  .resourc_indep::before,\n  .resourc_h5::before,\n  .resourc_lt::before {\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: block;\n      padding: 0 16px;\n      background-color: rgba(101, 128, 206, 1);\n      border-bottom-right-radius: 16px;\n      font-size: 14px;\n      color: #fff;\n      z-index: 99;\n      height: 26px;\n      line-height: 26px;\n  }\n\n  .resourc_gallery::before {\n      content: '扩展多媒体: 画廊';\n  }\n\n  .resourc_video::before,\n  .resourc_audio::before {\n      content: '扩展多媒体';\n  }\n\n  .resourc_indep::before {\n      content: '扩展文档';\n  }\n\n  .resourc_indep.resourc_indep_kaoshi::before {\n      content: '扩展试题';\n  }\n\n  .resourc_h5::before {\n      content: '扩展小程序';\n  }\n\n  .resourc_lt::before {\n      content: '扩展多媒体';\n  }\n\n  .resourc_audio,\n  .resourc_h5,\n  .resourc_indep {\n      padding: 27px 15px;\n  }\n\n  .resourc_lt {\n    padding: 40px 15px 13px 15px;\n  }\n\n  .resourc_audio.resourc_audio_infeed,\n  .resourc_h5.resourc_h5_infeed,\n  .resourc_indep.resourc_indep_infeed {\n      padding: 27px 7em;\n  }\n\n  .resourc_lt.resourc_lt_infeed {\n      padding: 40px 1em 13px 1em;\n  }\n\n  .resourc_audio_name,\n  .resourc_indep_name,\n  .resourc_h5_name,\n  .resourc_h5_name {\n      margin-right: 10px;\n      font-weight: bold;\n      line-height: 1.3em !important;\n  }\n\n  .resourc_video.resourc_video_infeed {\n      max-height: 25em;\n      min-height: 6em;\n      height: 50%;\n  }\n\n  .resourc_video_img_wrapper {\n      position: relative;\n      width: 50%;\n      margin: 0 auto;\n  }\n\n  .resourc_video_infeed .resourc_video_img_wrapper {\n      width: 100%;\n      height: 100%;\n      text-align: center;\n  }\n\n  .resourc_video_img_wrapper::after {\n      content: '';\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      display: block;\n      width: 100%;\n      height: 100%;\n      background: rgba(0, 0, 0, 0.1);\n      z-index: 1;\n  }\n\n  .resourc_video_img_wrapper img {\n      width: 100%;\n      height: auto !important;\n  }\n\n  .resourc_video_infeed .resourc_video_img_wrapper img {\n      width: 100%;\n      height: 100% !important;\n      object-fit: contain;\n  }\n\n  .resourc_video_img_wrapper i.iconfont2.icon-a-playyes {\n      position: absolute;\n      top: 50% !important;\n      left: 50% !important;\n      margin-left: -20px;\n      margin-top: -20px;\n      z-index: 20;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 40px !important;\n      height: 40px !important;\n      font-size: 24px !important;\n      color: #fff !important;\n      background: rgba(0, 0, 0, 0.3);\n      border-radius: 51px;\n      transition: all 0.25s;\n  }\n  .resourc_video:hover  .resourc_video_img_wrapper i.iconfont2.icon-a-playyes{\n     width: 50px !important;\n     height: 50px !important;\n     margin-left: -25px;\n     margin-top: -25px;\n  }\n\n  .vfilename_wrapper {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      z-index: 2;\n      display: flex;\n      width: 100%;\n      align-items: flex-end;\n      min-height: 60px;\n      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);\n  }\n\n  .vfilename {\n      display: block;\n      width: 100%;\n      padding: 1em 0.6em;\n      text-align: center;\n      box-sizing: border-box;\n      color: #fff;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n  }\n\n  .resourc_gallery {\n      height: 204px;\n  }\n\n  .resourc_gallery.resourc_gallery_infeed {\n      height: 50%;\n      min-height: 8em;\n      max-height: 15em;\n      overflow: hidden;\n  }\n\n  .resource_list {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      flex-wrap: wrap;\n      columns: 3;\n      padding: 0 37px;\n  }\n\n  .resource_list.resource_list_infeed {\n      padding: 0 8px;\n      columns: 2;\n  }\n\n  .resourc_a {\n      width: 26.666%;\n      display: flex;\n      align-items: center;\n      margin-bottom: 24px;\n      cursor: pointer;\n      margin-left: 10%;\n      color: rgba(101, 128, 206, 1);\n  }\n\n  .resourc_a:hover {\n      opacity: 0.8;\n  }\n\n  .resource_list.resource_list_infeed .resourc_a {\n      width: 45%;\n  }\n\n  .resource_list_infeed .resourc_a:first-child,\n  .resource_list_infeed .resourc_a:nth-child(2n + 1) {\n      margin-left: 0;\n  }\n\n  .resource_list_init .resourc_a:first-child,\n  .resource_list_init .resourc_a:nth-child(3n + 1) {\n      margin-left: 0;\n  }\n\n  .resourc_a:nth-child(1),\n  .resourc_a:nth-child(2),\n  .resourc_a:nth-child(3) {\n      margin-top: 0;\n  }\n\n  .resourc_a .resourc_a_txt {\n      display: -webkit-box;\n      flex: 1;\n      word-break: break-all;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      font-size: 14px;\n      font-weight: bold;\n      color: rgba(101, 128, 206, 1);\n      -webkit-box-orient: vertical;\n      -webkit-line-clamp: 2;\n      margin-right: 5px;\n      line-height: 1.2em important;\n  }\n\n  .theme2 .resourc_video,\n  .theme2 .resourc_audio,\n  .theme2 .resourc_gallery,\n  .theme2 .resourc_indep,\n  .theme2 .resourc_h5,\n  .theme2 .resourc_lt {\n      background-color: rgba(255, 143, 81, 0.08);\n      color: rgba(173, 112, 38, 1);\n  }\n\n  .theme2 .resourc_video::before,\n .theme2 .resourc_audio::before,\n .theme2 .resourc_gallery::before,\n .theme2 .resourc_indep::before,\n .theme2 .resourc_h5::before,\n .theme2 .resourc_lt::before {\n      background-color: rgba(249, 176, 89, 1);\n  }\n\n .theme2 .resourc_video i.iconfont2,\n .theme2 .resourc_audio i.iconfont2,\n .theme2 .resourc_indep i.iconfont2,\n .theme2 .resourc_h5 i.iconfont2,\n .theme2 .resourc_lt i.iconfont2 {\n      color: rgba(173, 112, 38, 1)\n  }\n\n .theme2 .resourc_mark {\n      background: linear-gradient(180deg, #F3DBBF 0%, #ECE2D6 100%);\n  }\n\n .theme2 .resourc_mark i.iconfont2 {\n      color: rgba(244, 213, 175, 1);\n  }\n\n .theme2 .resourc_a .resourc_a_txt {\n      color: rgba(173, 112, 38, 1);\n  }\n\n .theme2 .swiper-scrollbar {\n      background: rgba(235, 217, 196, 1) !important;\n  }\n\n .theme2 .swiper-scrollbar-drag {\n      background: rgba(249, 176, 89, 1) !important;\n  }\n\n\n .theme3 .resourc_video,\n .theme3 .resourc_audio,\n .theme3 .resourc_gallery,\n .theme3 .resourc_indep,\n .theme3 .resourc_h5,\n .theme3 .resourc_lt {\n      background-color: rgba(0, 188, 212, 0.08);\n      color: rgba(55, 118, 117, 1);\n  }\n\n .theme3 .resourc_video::before,\n .theme3 .resourc_audio::before,\n .theme3 .resourc_gallery::before,\n .theme3 .resourc_indep::before,\n .theme3 .resourc_h5::before,\n .theme3 .resourc_lt::before {\n      background-color: rgba(105, 174, 173, 1)\n  }\n\n .theme3 .resourc_video i.iconfont2,\n .theme3 .resourc_audio i.iconfont2,\n .theme3 .resourc_indep i.iconfont2,\n .theme3 .resourc_h5 i.iconfont2,\n .theme3 .resourc_lt i.iconfont2 {\n      color: rgba(55, 118, 117, 1)\n  }\n\n .theme3 .resourc_mark {\n      background: linear-gradient(180deg, #ADEDD4 0%, rgba(203, 236, 224, 0) 100%);\n  }\n\n .theme3 .resourc_mark i.iconfont2 {\n      color: rgba(162, 227, 204, 1);\n  }\n\n .theme3 .resourc_a .resourc_a_txt {\n      color: rgba(55, 118, 117, 1);\n  }\n\n .theme3 .swiper-scrollbar {\n      background: rgba(171, 237, 210, 1) !important;\n  }\n\n .theme3 .swiper-scrollbar-drag {\n      background: rgba(105, 209, 166, 1) !important;\n  }\n\n .theme4 .resourc_video,\n .theme4 .resourc_audio,\n .theme4 .resourc_gallery,\n .theme4 .resourc_indep,\n .theme4 .resourc_h5,\n .theme4 .resourc_lt {\n      background-color: rgba(47, 48, 51, 1);\n      color: rgba(226, 232, 240, 1);\n  }\n\n .theme4 .resourc_video::before,\n .theme4 .resourc_audio::before,\n .theme4 .resourc_gallery::before,\n .theme4 .resourc_indep::before,\n .theme4 .resourc_h5::before,\n .theme4 .resourc_lt::before {\n      background-color: rgba(33, 34, 37, 1);\n      color: rgba(160, 174, 192, 1)\n  }\n\n .theme4 .resourc_video i.iconfont2,\n .theme4 .resourc_audio i.iconfont2,\n .theme4 .resourc_indep i.iconfont2,\n .theme4 .resourc_h5 i.iconfont2,\n .theme4 .resourc_lt i.iconfont2 {\n      color: rgba(226, 232, 240, 1);\n  }\n\n .theme4 .resourc_mark {\n      background: linear-gradient(180deg, #292A2D 0%, #2F3033 100%);\n  }\n\n .theme4 .resourc_mark i.iconfont2 {\n      color: rgba(51, 52, 55, 1);\n  }\n\n .theme4 .resourc_a .resourc_a_txt {\n      color: rgba(226, 232, 240, 1);\n  }\n\n .theme4 .swiper-scrollbar {\n      background: rgba(57, 59, 65, 1) !important;\n  }\n\n .theme4 .swiper-scrollbar-drag {\n      background: rgba(40, 41, 45, 1) !important;\n  }\n\n  .swiper-wapper {\n      width: 100%;\n      overflow: hidden;\n  }\n\n  .resourc_gallery_infeed .swiper-wapper {\n      min-width: 700px;\n  }\n\n  .swiper {\n      width: 100%;\n      min-height: 204px;\n      margin: 0 auto;\n  }\n\n  .resourc_gallery_infeed .swiper {\n      min-height: 100%;\n  }\n\n  .swiper-slide {\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      width: auto !important;\n      // transition: 300ms;\n      // transform: translateZ(-20px) scale(0.7) !important;\n      // transform: translateZ(-50px) !important;\n      box-sizing: border-box;\n  }\n\n  .swiper-slide .swiper-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: auto !important;\n    height: 100%;\n    transition: 300ms;\n    transform: translateZ(-20px) scale(0.7) !important;\n    // transform: translateZ(-50px) !important;\n    box-sizing: border-box;\n  }\n\n\n  // .swiper-slide img {\n  //   transform: scale(0.7) !important;\n  //   transition: all 0.25s;\n  // }\n\n  .resourc_gallery .swiper-wrapper {\n      margin-left: -3em !important;\n  }\n\n  .resourc_gallery.resourc_gallery_infeed .swiper-wrapper {\n       margin-left: -9em !important;\n  }\n\n  .swiper-title {\n      visibility: hidden;\n      position: absolute;\n      bottom: 0;\n      left: 0 !important;\n      display: flex;\n      align-items: flex-end;\n      justify-content: center;\n      width: 100% !important;\n      height: unset !important;\n      min-height: 46px;\n      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);\n      color: #fff;\n      box-sizing: border-box;\n      font-size: 14px;\n      cursor: pointer;\n      z-index: 99;\n  }\n\n  .swiper-title span {\n      display: block;\n      text-align: center;\n      width: 100%;\n      padding: 8px;\n      box-sizing: border-box;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n  }\n\n  .player-btn {\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: flex;\n      width: 100%;\n      height: 100%;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      z-index: 9;\n  }\n\n  .player-btn .iconfont2 {\n      font-size: 2em !important;\n      color: #f5f5f5;\n  }\n\n  .swiper-slide-active .swiper-title {\n      visibility: visible;\n  }\n\n  .swiper-slide-active .swiper-content,\n  .swiper-slide-duplicate-active .swiper-content {\n      transform: scale(1) !important;\n  }\n\n  .gallery-img {\n      width: auto !important;\n      height: 100% !important;\n  }\n\n  .swiper-scrollbar {\n      background: rgba(205, 221, 248, 1) !important;\n  }\n\n  .swiper-scrollbar-drag {\n      background: rgba(139, 160, 223, 1) !important;\n  }\n\n  // .swiper-wrapper {\n  //     // min-width: 1000px;\n  //     // overflow: hidden;\n  // }\n\n  .swiper-horizontal>.swiper-scrollbar, .swiper-scrollbar.swiper-scrollbar-horizontal {\n    bottom: 0 !important;\n  }\n  ";
            return e.replace(/\n/g, " ")
        }
          , j = function() {
            var e = "\n  .has-qrcode{\n    position:relative;\n  }\n  .has-qrcode .qrcode{\n      position: absolute;\n      top: 0;\n      background-color: rgba(255, 255, 255, 0.7);\n      display: flex;\n      cursor: pointer;\n      z-index: 99;\n  }\n  .play_btn {\n    width: 26%;\n    height: 26%;\n    min-width: 28px !important;\n    min-height: 28px !important;\n    max-width: 80px !important;\n    max-height: 80px !important;\n    background-color: #4a90e2;\n    border-radius: 20%;\n    font-size: 22%!important;\n    color: #fff;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0px;\n    margin: auto;\n    transition:all 0.3s linear ;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  [class*=' playicon-'],\n  [class^='playicon-'] {\n    vertical-align: middle;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: 80%;\n    position:relative;\n  }\n  .qorcode-tooltip{\n      display: none;\n      position: absolute;\n      top: 0;\n      width: auto;\n      padding: 4px;\n      height: 17px;\n      border-radius: 4px;\n      background-color: rgba(0,0,0,.8);\n      color: #fff;\n      font-size: 14px;\n      line-height: 17px !important;\n      bottom: 0;\n      left: 46px;\n      white-space: nowrap;\n      margin: auto;\n  }\n  .play_btn.icon-tupian{\n    font-size:17%!important;\n  }\n  .play_btn:hover .qorcode-tooltip{\n    display:block\n  }\n  .play_btn:hover{\n    transform:translateY(-1px)\n  }";
            return e.replace(/\n/g, " ")
        }
          , T = function() {
            var e = "\n  .markLine {\n      border-bottom-style: solid;\n      border-bottom-width: 2px;\n      padding-bottom: 2px;\n  }\n\n  .unmarkLine {\n      border-bottom: none !important;\n  }\n\n  .markLine.line_1 {\n      border-bottom-color: #FF784B;\n  }\n\n  .markLine.line_2 {\n      border-bottom-color: #FFC837;\n  }\n\n  .markLine.line_3 {\n      border-bottom-color: #936DFF;\n  }\n\n  .markLine.line_4 {\n      border-bottom-color: #38BDF8;\n  }\n\n  .mark_head {\n      position: relative;\n  }\n\n  .mark_head:after {\n      content: '';\n      position: absolute;\n      left: 0;\n      top: 0;\n      bottom: 0;\n      width: 0;\n      height: 0;\n      border-top-width: 20px;\n      border-top-style: solid;\n      border-right: 20px solid transparent;\n      box-sizing: border-box;\n      opacity: 0.8;\n  }\n\n  .mark_head.line_1:after {\n      border-top-color: #996CFE;\n  }\n\n  .mark_head.line_2:after {\n      border-top-color: #FEC06C;\n  }\n\n  .mark_head.line_3:after {\n      border-top-color: #3ED694;\n  }\n\n  .mark_head.line_4:after {\n      border-top-color: #FE6C6C;\n  }\n\n  .search-key {\n      font-style: normal !important;\n      background: #FE6C6C !important;\n  }\n\n  .iconfont2 {\n      font-size: 24px !important;\n  }\n  ";
            return e.replace(/\n/g, " ")
        }
          , S = function(e) {
            var t = "\n    @media screen and (min-width:800px){\n      body{ padding: ".concat(2 == e ? "0px " : "4em 5em !important ", " }\n    }\n  ");
            return t.replace(/\n/g, " ")
        }
          , L = function() {
            var e = "\n    body.theme1 {\n      background-color: #F8F9F9 !important;\n      color: #414141;\n    }\n    .theme1 a {\n      color:#409EFF!important;\n    }\n    .theme1 h1,.theme1 h2,.theme1 h3,.theme1 h4,.theme1 h5,.theme1 h6,.theme1 p, .theme1 ol>li{\n            color:#414141!important;\n    }\n    body.theme2 {\n      background-color: #EAE9E1 !important;\n      color: #414141;\n    }\n    .theme2 a {\n      color:#409EFF!important;\n    }\n    .theme2 h1,.theme2 h2,.theme2 h3,.theme2 h4,.theme1 h5,.theme2 h6,.theme2 p, .theme2 ol>li{\n            color:#414141!important;\n    }\n    body.theme3 {\n      background-color: #DCF0E1 !important;\n      color: #414141!important;\n    }\n    .theme3 a {\n      color:#409EFF!important;\n    }\n    .theme3 h1,.theme3 h2,.theme3 h3,.theme3 h4,.theme3 h5,.theme3 h6,.theme3 p,  .theme3 ol>li{\n            color:#414141!important;\n    }\n    body.theme4 {\n      background-color: #383838 !important;\n      color: #DDDDDD;\n    }\n    .theme4 a {\n      color:#DDDDDD!important;\n    }\n    .theme4 h1,.theme4 h2,.theme4 h3,.theme4 h4,.theme4 h5,.theme4 h6,.theme4 p,.theme4 ol>li{\n      color:#DDDDDD!important;\n    }\n  ";
            return e.replace(/\n/g, " ")
        }
          , I = function(e, t) {
            var n = O() + T() + L();
            return 2 == e && (n += x()),
            n += t ? C() : j(),
            n
        }
          , N = I
          , P = function(e) {
            var t = "\n        $(document).ready(function(){\n            var swTimer;\n            var swiperAuto = function() {\n                swTimer && clearTimeout(swTimer);\n\n                swTimer = setTimeout(() => {\n                    if($('.swiper').length > 0){\n                        var inSlide = $('.swiper').length % 2 == 0 ? $('.swiper').length / 2 : Math.ceil($('.swiper').length / 2);  \n                        var mySwiper = new Swiper('.swiper', {\n                            initialSlide: inSlide,\n                            slidesPerView: 4,\n                            spaceBetween: 0,\n                            centeredSlides: true,\n                            resizeObserver: true,\n                            scrollbar: {\n                                el: '.swiper-scrollbar',\n                                draggable: true,\n                            }\n                        })\n                    };\n\n                    $('.swiper-content').click(function() {\n                        if($(this).parent().attr('class').indexOf('swiper-slide-prev') > -1 || $(this).parent().attr('class').indexOf('swiper-slide-active') || $(this).parent().attr('class').indexOf('swiper-slide-next')){\n                            var galleryObj = JSON.parse(sessionStorage.getItem('galleryObj'));\n                            var id = $(this).attr('data-id');\n                            window.parent['vueGallery'](galleryObj[id]);\n                        }\n                        return;\n                    });\n                    $('.swiper-content img').click(function() {\n                        if($(this).parent().parent().attr('class').indexOf('swiper-slide-prev') > -1 || $(this).parent().parent().attr('class').indexOf('swiper-slide-active') > -1 || $(this).parent().parent().attr('class').indexOf('swiper-slide-next') > -1){\n                            var galleryObj = JSON.parse(sessionStorage.getItem('galleryObj'));\n                            var id = $(this).parent().attr('data-id');\n                            window.parent['vueGallery'](galleryObj[id]);\n                        }\n                        return;\n                    });\n                }, 1000);\n            };\n            swiperAuto();\n            $('.resourc_video').click(function() {\n                var playerObj = sessionStorage.getItem('playerObj') ? JSON.parse(sessionStorage.getItem('playerObj')) : null;\n                if(!playerObj) return false;\n                var key = $(this).attr('data-id');\n                var item = playerObj[key];\n                window.parent['vuePlayer'](item);\n\n            });\n            $('.resourc_audio').click(function() {\n                var playerObj = sessionStorage.getItem('playerObj') ? JSON.parse(sessionStorage.getItem('playerObj')) : null;\n\n                if(!playerObj) return false;\n\n                var key = $(this).attr('data-id');\n                \n                var item = playerObj[key];\n\n                window.parent['vuePlayer'](item);\n               \n            });\n            $('.resourc_indep').click(function() {\n                var type = $(this).attr('data-type');\n\n                var iResourceId = $(this).attr('data-id');\n\n                var url = $(this).attr('data-url');\n                \n\n                window.parent['vueFile'](type, type == 'kaoshi' ? url : iResourceId);\n            });\n            $('.resourc_a').click(function() {\n                var rlid = $(this).attr('data-rlid');\n\n                var item = JSON.parse(sessionStorage.getItem('resctObj'))[rlid]  ;              \n\n                window.parent['vueResourctMode'](item);\n            });\n            $('.resourc_h5').click(function() {\n\n                var url = $(this).attr('data-url');\n\n                window.parent['vueOpenLink'](url);\n            });\n            $('img').click(function() {\n                if($(this).hasClass('gallery-img')) {\n                    return false;\n                }\n                var imgSrc = $(this).attr('src');\n\n                var hsId =  $(this).attr('id');\n\n                if(hsId) return false;\n\n                window.parent['vueShowImg'](imgSrc);\n            })\n        });\n    ";
            return t.replace(/\n/g, " ")
        }
          , E = P
          , D = function(e) {
            var t, n = e.infeed, i = e.bgColor, o = e.fontsize, r = e.lineHeight, a = (e.mode,
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1]), s = N(n, a), l = S(n), c = "theme1", d = 2 == n, m = d ? "infeed2" : "";
            switch (i) {
            case "#EAE9E1":
                c = "theme2";
                break;
            case "#DCF0E1":
                c = "theme3";
                break;
            case "#383838":
                c = "theme4";
                break;
            default:
                c = "theme1";
                break
            }
            return t = a ? "\n            var resourctType = _rsObj.ResourctType\n            var id = _rsObj.ResourctList && _rsObj.ResourctList.length > 0 ? _rsObj.ResourctList[0].id : '-999'\n            var resourceId = _rsObj.ResourctList && _rsObj.ResourctList.length > 0 ? _rsObj.ResourctList[0].resourceId : '-999'\n\n            var divoDom = document.createElement('div')\n            imgEles[i].parentNode.getElementsByClassName('img_tuzhu_subtitle')[0].remove()\n            imgEles[i].parentNode.appendChild(divoDom)\n\n            imgDomArr.push(imgEles[i])\n\n            divoDom.style.margin='1em auto'\n            divoDom.style.width = ".concat(2 == n, " ? '100%' : '77%'\n\n            switch (resourctType) {\n                case 'video': // 视频类型\n                    divoDom.className = ").concat(2 == n, " ? 'resourc_video c_els resourc_video_infeed' : 'resourc_video c_els'\n\n                    divoDom.setAttribute('data-id', resourceId)\n\n                    divoDom.setAttribute('data-fun', 'video')\n\n                    var cover = _rsObj.ResourctList && _rsObj.ResourctList.length > 0 ? _rsObj.ResourctList[0].cover : ''\n\n                    var vDom = document.createElement('div')\n\n                    var vfileName = _rsObj.ResourctList && _rsObj.ResourctList.length > 0 ? _rsObj.ResourctList[0].fileName : ''\n\n                    vDom.className = 'resourc_video_img_wrapper'\n\n                    vDom.setAttribute('data-id', resourceId)\n\n                    vDom.innerHTML = '<img src=\"'+ cover +'\" data-fun=\"video\" /><i class=\"iconfont2 icon-a-playyes\" data-fun=\"video\"></i><div class=\"vfilename_wrapper\"><span class=\"vfilename\" data-fun=\"video\" title=\"' + vfileName +'\">' + vfileName + '</span><div>'\n            \n                    divoDom.appendChild(vDom)\n\n                    var vmarkDom = document.createElement('div')\n\n                    vmarkDom.className = 'resourc_mark'\n\n                    var vmarkIcon = document.createElement('i')\n\n                    vmarkIcon.className = 'iconfont2 icon-video-play2'\n\n                    vmarkDom.appendChild(vmarkIcon)\n\n                    divoDom.appendChild(vmarkDom)\n            \n                    var vobj = { id: id, item: _rsObj }\n            \n                    playerArr.push(vobj)\n            \n                    break;\n            \n                case 'audio': // 音频类型\n            \n                    divoDom.className = ").concat(2 == n, " ? 'resourc_audio resourc_audio_infeed c_els' : 'resourc_audio c_els' \n\n                    divoDom.setAttribute('data-id', resourceId)\n\n                    divoDom.setAttribute('data-fun', 'audio')\n\n                    var aDom = document.createElement('span')\n\n                    aDom.className = \"resourc_audio_name\"\n\n                    aDom.setAttribute('data-fun', 'audio')\n\n                    aDom.innerText = _rsObj.ResourctList && _rsObj.ResourctList.length > 0 ? _rsObj.ResourctList[0].fileName : ''\n\n                    divoDom.appendChild(aDom)\n\n                    var aIcon = document.createElement('i')\n\n                    aIcon.className = \"iconfont2 icon-Volume_fill\"\n\n                    divoDom.appendChild(aIcon)\n\n                    var amarkDom = document.createElement('div')\n\n                    amarkDom.className = 'resourc_mark'\n\n                    var amarkIcon = document.createElement('i')\n\n                    amarkIcon.className = 'iconfont2 icon-music-playlist1'\n\n                    amarkDom.appendChild(amarkIcon)\n\n                    divoDom.appendChild(amarkDom)\n            \n                    var vobj = { id: id, item: _rsObj }\n            \n                    playerArr.push(vobj)\n            \n                    break;\n            \n                case 'list': // 资源类型    \n                    divoDom.className = ").concat(2 == n, " ? 'resourc_lt resourc_lt_infeed' : 'resourc_lt'\n            \n                    var idStr = _rsObj.ImageSrc.split('/').slice(-1)[0].split('.')[0]\n\n                    var lDom = document.createElement('div')\n\n                    lDom.setAttribute('id', idStr)\n            \n                    lDom.className = ").concat(2 == n, " ? 'resource_list resource_list_infeed' : 'resource_list resource_list_init'\n\n                    var resctObj = {}\n\n                    for (let i = 0; i < _rsObj.ResourctList.length; i++) {\n                        const val = _rsObj.ResourctList[i]\n\n                        const vdDom = document.createElement('div')\n\n                        resctObj[val.id] = val\n\n                        lDom.appendChild(vdDom)\n\n                        vdDom.setAttribute('id', val.id)\n\n                        vdDom.setAttribute('class', 'resourc_a')\n\n                        vdDom.setAttribute('data-rlid', val.id)\n\n                        vdDom.setAttribute('title', val.fileName)\n\n                        const vdsDom = document.createElement('div')\n\n                        vdsDom.className = 'resourc_a_txt'\n\n                        vdsDom.innerText = val.fileName\n\n                        vdDom.appendChild(vdsDom)\n\n                        const vdiDom = document.createElement('i')\n\n                        let lsIcon = ''\n\n                        switch (val.type) {\n                          case 'video':\n                            lsIcon = 'icon-Video'\n                            break\n                          case 'audio':\n                            lsIcon = 'icon-Volume_fill'\n                            break\n                          default:\n                            lsIcon = 'icon-open-fill'\n                            break\n                        }\n\n                        vdiDom.className = 'iconfont2 ' + lsIcon\n\n                        vdDom.appendChild(vdiDom)\n                    }\n\n                    sessionStorage.setItem('resctObj', JSON.stringify(resctObj))\n\n                    divoDom.appendChild(lDom)\n\n                    \n                    var lmarkDom = document.createElement('div')\n\n                    lmarkDom.className = 'resourc_mark'\n\n                    var lmarkIcon = document.createElement('i')\n\n                    lmarkIcon.className = 'iconfont2 icon-folder'\n\n                    lmarkDom.appendChild(lmarkIcon)\n\n                    divoDom.appendChild(lmarkDom)\n            \n                    // window.parent['vueResourctList'](_rsObj.ResourctList, idStr)\n                \n                    break;\n            \n                case 'h5': // h5类型 \n                    divoDom.className = ").concat(2 == n, " ? 'resourc_h5 resourc_h5_infeed c_els' : 'resourc_h5 c_els'\n            \n                    divoDom.setAttribute('data-url', _rsObj.QrCodeContent)\n\n                    divoDom.setAttribute('data-fun', 'h5')\n\n                    var ihDom = document.createElement('span')\n\n                    ihDom.className = \"resourc_h5_name\"\n\n                    ihDom.setAttribute('data-fun', 'h5')\n\n                    ihDom.innerText = '动手点一点'\n\n                    divoDom.appendChild(ihDom)\n\n                    var ihIcon = document.createElement('i')\n\n                    ihIcon.className = \"iconfont2 icon-hand_FILL\"\n\n                    divoDom.appendChild(ihIcon)\n\n                    var hmarkDom = document.createElement('div')\n\n                    hmarkDom.className = 'resourc_mark'\n\n                    var hmarkIcon = document.createElement('i')\n\n                    hmarkIcon.className = 'iconfont2 icon-media2'\n\n                    hmarkDom.appendChild(hmarkIcon)\n\n                    divoDom.appendChild(hmarkDom)\n            \n                    break;\n            \n                case 'gallery': // 画廊模式\n\n                    divoDom.className =  ").concat(2 == n, " ? 'resourc_gallery resourc_gallery_infeed' : 'resourc_gallery'\n\n                    //swiper 内容区\n                    if (_rsObj.ResourctList && _rsObj.ResourctList.length > 0) {\n                        var gsDiv = document.createElement('div')\n\n                        gsDiv.className = 'swiper-wapper'\n\n                        var gswperDiv = document.createElement('div')\n                \n                        gswperDiv.className = 'swiper'\n\n                        gsDiv.appendChild(gswperDiv)\n                \n                        divoDom.appendChild(gsDiv)\n                \n                        var gswperCDiv = document.createElement('div')\n                        \n                        gswperCDiv.className = 'swiper-wrapper'\n                \n                        gswperDiv.appendChild(gswperCDiv)\n                \n                        for(var kj = 0; kj < _rsObj.ResourctList.length; kj ++) {\n                \n                            var kVal = _rsObj.ResourctList[kj]\n\n                            galleryObj[kVal.resourceId] = kVal\n                \n                            var gswperCLDiv = document.createElement('div')\n                \n                            gswperCLDiv.className = 'swiper-slide'\n\n                            var gswperWDiv = document.createElement('div')\n\n                            gswperWDiv.className = 'swiper-content'\n\n                            gswperCLDiv.appendChild(gswperWDiv)\n\n                            gswperWDiv.setAttribute('data-fun', 'gallery')\n\n                            gswperWDiv.setAttribute('data-id', kVal.resourceId)\n\n                            gswperWDiv.setAttribute('data-type', kVal.type)\n                \n                            if(kVal.type == 'video') {\n                                gswperWDiv.innerHTML = '<div class=\"player-btn\"><i class=\"iconfont2 icon-play-cricle\"></i></div><img src=\"'+ kVal.cover +'\" data-type=\"gallery\" class=\"gallery-img\" alt=\"'+kVal.fileName+'\" /><div class=\"swiper-title\" title=\"'+kVal.fileName+'\"><span>'+kVal.fileName+'</span></div>'\n                            } else {\n                                gswperWDiv.innerHTML = '<img src=\"'+ kVal.cover +'\" class=\"gallery-img\" data-type=\"gallery\" alt=\"'+kVal.fileName+'\" /><div class=\"swiper-title\" title=\"'+kVal.fileName+'\"><span>'+kVal.fileName+'</span></div>'\n                            }\n\n                            gswperCDiv.appendChild(gswperCLDiv)\n                        }\n\n                        var gswperCSdiv = document.createElement('div')\n\n                        gswperCSdiv.className = 'swiper-scrollbar'\n\n                        gswperDiv.appendChild(gswperCSdiv)\n\n\n                    }\n\n                    var hlmarkDom = document.createElement('div')\n\n                    hlmarkDom.className = 'resourc_mark'\n\n                    var hlmarkIcon = document.createElement('i')\n\n                    hlmarkIcon.className = 'iconfont2 icon-gallery1'\n\n                    hlmarkDom.appendChild(hlmarkIcon)\n\n                    divoDom.appendChild(hlmarkDom)\n                \n                    break;\n            \n                default: //其他类型 包含单个文件类型 比如试题、ppt、word等\n                    divoDom.className = ").concat(2 == n, " ? 'resourc_indep resourc_indep_infeed c_els resourc_indep_' + resourctType : 'resourc_indep c_els resourc_indep_' + resourctType\n\n                    divoDom.setAttribute('data-type', resourctType)\n\n                    divoDom.setAttribute('data-url', resourctType == 'kaoshi' && _rsObj.ResourctList && _rsObj.ResourctList.length > 0 ? _rsObj.ResourctList[0].filePath : '')\n            \n                    divoDom.setAttribute('data-fun', 'indep')\n            \n                    divoDom.setAttribute('data-id', _rsObj.ResourctList && _rsObj.ResourctList.length > 0 ? _rsObj.ResourctList[0].resourceId : '-999')\n\n\n                    var aDom = document.createElement('span')\n\n                    aDom.className = \"resourc_indep_name\"\n\n                    aDom.setAttribute('data-fun', 'indep')\n\n                    aDom.innerText = _rsObj.ResourctList && _rsObj.ResourctList.length > 0 ? _rsObj.ResourctList[0].fileName : ''\n\n                    divoDom.appendChild(aDom)\n\n                    var aIcon = document.createElement('i')\n\n                    var aIconName = ''\n\n                    switch(resourctType) {\n                        case 'kaoshi':\n                            aIconName = 'icon-drive_file'\n                            break;\n                        default :\n                            aIconName = 'icon-open-fill'\n                            break;\n                    }\n\n                    aIcon.className = \"iconfont2 \" + aIconName\n\n                    divoDom.appendChild(aIcon)\n\n\n\n                    var imarkDom = document.createElement('div')\n\n                    imarkDom.className = 'resourc_mark'\n\n                    var imarkIcon = document.createElement('i')\n\n                    var indeepIcon = ''\n\n                    switch(resourctType) {\n                        case 'pdf':\n                        case 'ppt':\n                            indeepIcon = 'icon-P2'\n                            break;\n                        case 'word':\n                            indeepIcon = 'icon-W2'\n                            break;\n                        case 'excel':\n                            indeepIcon = 'icon-X2'\n                            break;\n                        case 'kaoshi':\n                            indeepIcon = 'icon-assignment'\n                            break;\n                        default :\n                            indeepIcon = 'icon-description'\n                            break;\n                    }\n\n                    imarkIcon.className = 'iconfont2 ' + indeepIcon\n\n                    imarkDom.appendChild(imarkIcon)\n\n                    divoDom.appendChild(imarkDom)\n                break;\n            }\n            divoDom.parentNode.style.breakInside = 'avoid';\n        ") : "\n            imgEles[i].parentNode.classList.add('has-qrcode')\n\n            let divCover = document.createElement('div')\n            divCover.classList.add('qrcode')\n\n\n            imgEles[i].parentNode.appendChild(divCover)\n           \n            let titleArr = {\n                video: '查看视频',\n                audio: '查看音频',\n                ppt: '查看PPT',\n                doc: '查看Word',\n                word: '查看Word',\n                xls: '查看Excel',\n                pdf: '查看pdf',\n                image: '查看图片',\n                file: '查看文档',\n                list: '查看资源列表',\n                url: '查看外部资源',\n                zip: '查看外部资源',\n                rar: '查看外部资源'\n            }\n\n            let picArr = {\n                video: 'video2',\n                audio: 'Volume',\n                ppt: 'open',\n                doc: 'open',\n                word: 'open',\n                xls: 'open',\n                pdf: 'open',\n                image: 'tupian',\n                file: 'open',\n                list: 'list2',\n                url: 'open',\n                zip: 'open',\n                rar: 'open'\n            }\n            let pictype = picArr[_rsObj.ResourctType] ? picArr[_rsObj.ResourctType] : 'open'\n            let titletype = titleArr[_rsObj.ResourctType] ? titleArr[_rsObj.ResourctType] : '查看文档'\n            divCover.setAttribute('data-cover', count[count.length - 1])\n            divCover.innerHTML = '<div class=\"play_btn iconfont2 icon-'+ pictype +'\" ><div class=\"qorcode-tooltip\">' + titletype +'</div></div>'\n        ",
            "\n    res=res.trim()\n    var htmlEle=document.createElement('html')\n    htmlEle.innerHTML=res;\n    var bodyList=htmlEle.getElementsByTagName('body')\n    var ifrmBody = htmlEle.getElementsByTagName('body')[0]\n    var ifrmHead = htmlEle.getElementsByTagName('head')[0]\n    var ifrmLink = ifrmHead.getElementsByTagName('link')\n\n    ifrmBody.style.fontSize = ".concat(o, " + 'px'\n\n    if(ifrmBody.className){\n      if(").concat("" == m, '){\n        ifrmBody.className = ifrmBody.className\n      }else{\n        ifrmBody.className = ifrmBody.className + " ').concat(m, '"\n      }\n    }else{\n      ifrmBody.className = "').concat(m, "\"\n    }\n\n    if(ifrmBody.className) {\n        ifrmBody.className += ' ").concat(c, "'\n    } else {\n        ifrmBody.className = '").concat(c, "'\n    }\n\n    var firstC = ifrmBody.children[0];\n\n    if (ifrmBody.children.length === 1 && firstC.children.length === 1 && ").concat(d, ") {\n        firstC.children[0].setAttribute('style', 'height: 100%; margin: 0');\n        if(firstC.children[0].children[0]){\n            firstC.children[0].children[0].setAttribute('style', 'height: 100%');\n        };\n    } else if(ifrmBody.children.length === 1 && firstC.children.length === 1) {\n      if(firstC.children[0].children[0]) {\n        firstC.children[0].removeAttribute('style');\n        firstC.children[0].children[0].setAttribute('style', 'height: auto');\n      }\n    }\n\n    var interText = ifrmBody.innerText\n    var t_style = document.createElement('style')\n    if(interText.trim()){\n      t_style.type = \"text/css\"\n      t_style.innerHTML = \"").concat(l, '"\n    }\n    ifrmHead.appendChild(t_style)\n  \n    var b_style = document.createElement(\'style\')\n    b_style.type = "text/css"\n    b_style.innerHTML = "').concat(s, "\"\n    ifrmHead.appendChild(b_style)\n\n    var lhstyle = document.createElement('style');\n    lhstyle.setAttribute('data-type', 'lineheight');\n    lhstyle.innerHTML='*, body { line-height:'+").concat(r, "+'em !important; } ';\n    ifrmHead.appendChild(lhstyle)\n\n    var jqScript =  document.createElement('script');\n    jqScript.src = '").concat("https://static.wqxuetang.com", "/static/vendor/jquery/jquery-3.6.0.min.js'\n    jqScript.type = 'text/javascript'\n    ifrmHead.appendChild(jqScript)\n\n    var swperScript = document.createElement('script')\n    swperScript.src = '").concat("https://static.wqxuetang.com", "/static/vendor/swiper/swiper-bundle.min.js'\n    swperScript.type = 'text/javascript'\n    ifrmHead.appendChild(swperScript)\n\n    var swperlink = document.createElement('link')\n    swperlink.href = '").concat("https://static.wqxuetang.com", "/static/vendor/swiper/swiper-bundle.min.css'\n    swperlink.rel = 'stylesheet'\n    ifrmHead.appendChild(swperlink)\n\n   \n    var imgEles = ifrmBody.getElementsByTagName('img')\n\n    var rsList = JSON.parse(sessionStorage.getItem('grList'))\n\n    if (imgEles.length > 0 && rsList && rsList.length) {\n\n        var imgDomArr = []\n\n        var playerArr = []\n\n        var galleryObj = {}\n\n        for(var i = 0; i < imgEles.length; i++) {\n            var count = imgEles[i].src.split('/')\n            imgEles[i].setAttribute('data-src', imgEles[i].src)\n            for (var j = 0; j < rsList.length; j++) {\n                var _rsObj = rsList[j]\n                if(_rsObj.ImageSrc.indexOf(count[count.length - 1]) > -1) {\n                    ").concat(t, "\n                }\n            }\n        }\n\n        if(").concat(a, ") {\n            window.parent['vueGetMedia'](playerArr)\n\n            if(JSON.stringify(galleryObj) != '{}') {\n                sessionStorage.setItem('galleryObj', JSON.stringify(galleryObj))\n            }\n\n            if (imgDomArr.length > 0) {\n\n                for(var d = 0; d < imgDomArr.length; d ++){\n                    var imgDom = imgDomArr[d]\n                    imgDom.remove()\n                }\n\n            }\n        }\n    }\n\n    if(ifrmBody.getElementsByTagName('title').length>0){\n      ifrmBody.getElementsByTagName('title')[0].innerText = ''\n    }\n\n    if(ifrmBody.children.length < 15 && ").concat(2 == n, ") {\n      var havP = ifrmBody.getElementsByTagName('p')\n      if (havP.length > 0 && havP.length < 5) {\n        for (var i = 0; i < 15; i++) {\n          var addPDom = document.createElement('div')\n          addPDom.setAttribute('style', 'min-height: 36px')\n          ifrmBody.appendChild(addPDom)\n        }\n      }\n    }\n\n\n    var notext = ifrmBody.innerText.trim() == ''\n    if (Number(window.parent.infeed) === 2) {\n      if (notext) {\n        ifrmBody.style.padding = '0'\n      }\n    }\n\n    let hasPic=function(ele) {\n      var childList=ele.children\n      if(childList.length===1 && childList[0].tagName.toLowerCase() === 'img') {\n        return true\n      }\n      return false\n    }\n\n    var eles = htmlEle.getElementsByTagName('body')[0].children\n    for (var i = 1; i <= eles.length; i++) {\n      // console.log('eles', eles[i - 1])\n      if (eles[i - 1]) {\n\n        if(eles[i - 1].nodeName == 'P') {\n          eles[i - 1].setAttribute('id', 'sw'+i)\n        }  \n\n        eles[i - 1].setAttribute('data-sn', i)\n        eles[i - 1].classList.add('eles-margin') //='40px'\n\n        if (Number(window.parent.infeed) === 2) {\n          if (!eles[i - 1].innerText.trim() && hasPic(eles[i - 1])) {\n            if (notext) {\n              eles[i - 1].classList.add('single-page-eles')\n            } else {\n              eles[i - 1].style.maxHeight = '100%'\n              eles[i - 1].classList.add('single-img-eles')\n            }\n          }\n        }\n      }\n    }\n\n    var searchWord = window.parent['vueGetSearchWord']()\n    if(searchWord){\n        let _arrSearchWord = searchWord.split(',');\n        let iHtml = ifrmBody.innerHTML\n        _arrSearchWord.forEach((vSearchWord) => {\n          iHtml = iHtml.replace(/>[\\s\\S]*?</g, function (sval) {\n            if(sval) {\n              return sval.replace(\n                new RegExp(vSearchWord, \"gm\"),\n                '<i class=\"search-key\">'+vSearchWord+'</i>'\n              )\n            }\n          })\n        })\n        ifrmBody.innerHTML=iHtml;\n    }\n\n    var statisticsImgsScript = document.createElement('script')\n    statisticsImgsScript.text = \"").concat(A(a, n), '"\n    ifrmHead.appendChild(statisticsImgsScript)\n\n    if(').concat("1" == a, "){\n        var pScript = document.createElement('script')\n        pScript.text = \"").concat(E(n), '"\n        ifrmBody.appendChild(pScript)\n    }\n\n    res=htmlEle.innerHTML\n  ')
        }
          , A = function(e, t) {
            var n = "\n             document.addEventListener('readystatechange', event => {\n                  if (event.target.readyState === 'interactive') {    \n                    document.addEventListener('keydown', window.parent['vuekeyDownEvent']);\n                    document.addEventListener('keyup', window.parent['vuekeyUpEvent']);\n                    document.addEventListener('touchstart', function(e){ e.preventDefault(); });\n                    document.addEventListener('touchmove', function(e){ e.preventDefault(); });\n                    document.addEventListener('touchend', function(e){ e.preventDefault(); });\n                    if(".concat(2 == Number(t), ") {\n                        document.addEventListener('mousewheel', window.parent['vueMousewheelEvent']);\n                        document.body.addEventListener('scroll', window.parent['vueScrollEvent']);\n                    };\n\n                    let loadedImgs = 0;\n                    let imgEles = document.body.getElementsByTagName('img');\n\n                    if(!imgEles || imgEles.length == 0) {\n                        let dbody = document.body;\n                        window.realLoad=true;\n                        window.parent['setRealLoad'](true, { scrollHeight: dbody.scrollHeight, scrollWidth: dbody.scrollWidth, clientHeight : dbody.clientHeight, clientWidth : dbody.clientWidth });\n                        return false\n                    };\n\n                    for (let ii = 0; ii < imgEles.length; ii++) {\n                       imgEles[ii].onload = function() {\n                            loadedImgs += 1;\n                            if(").concat(!e, ") {\n                                const rsList = JSON.parse(sessionStorage.getItem('grList'));\n                                let qrc = imgEles[ii].parentNode;\n                                let imgClassName = qrc.className;\n                                if(imgClassName.indexOf('has-qrcode') > -1){\n                                  let w = imgEles[ii].clientWidth;\n                                  let h = imgEles[ii].clientHeight;\n                                  let l = imgEles[ii].offsetLeft;\n                                  let k = w >= h ? h : w;\n                                  let lw = k * 0.26;\n\n                                  const qrcodeEle = qrc.getElementsByClassName('qrcode')[0];\n                                  const playbtnEl = qrcodeEle.getElementsByClassName('play_btn')[0];\n                                  const cover = qrcodeEle.getAttribute('data-cover');\n\n                                  qrcodeEle.style.height = h + 'px';\n                                  qrcodeEle.style.width = w + 'px';\n                                  qrcodeEle.style.left = l + 'px';\n                                  qrcodeEle.style.fontSize = k <= 300 ? (k <= 80 ? 80 + 'px' : k + 'px') : 300 + 'px';\n                                  playbtnEl.style.width = lw + 'px';\n                                  playbtnEl.style.height = lw + 'px';\n                                  qrcodeEle.onclick = function () {\n                                    let item = rsList.filter(\n                                      (item) => item.ImageSrc.indexOf(cover) > -1\n                                    )[0];\n                                    window.parent['vueQrcodePlay'](item);\n                                  }\n                                }\n                            };\n                            if(loadedImgs >= imgEles.length) {\n                                let dbody = document.body;\n                                window.realLoad=true;\n                                window.parent['setRealLoad'](true, { scrollHeight: dbody.scrollHeight, scrollWidth: dbody.scrollWidth, clientHeight : dbody.clientHeight, clientWidth : dbody.clientWidth });\n                            };\n                       }\n                   }\n\n            }\n          else if (event.target.readyState === 'complete') {\n          }\n        });\n\n    ");
            return n.replace(/\n/g, " ")
        }
          , M = D
          , R = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return "\n        // window.parent['VueChangeConsole'](false)\n        var filterList = object.srcList.filter((item)=>{\n            return object.srcListId.indexOf(item.id)>-1\n        })\n\n        var getSrc=function(i) {\n            if(filterList.length===0) return;\n            var oReq = new XMLHttpRequest()\n            oReq.open('GET', parent.window.LocalAPI + filterList[i].nsrc, true)\n            oReq.setRequestHeader(\"auth-token\", object.key)\n            oReq.responseType = 'arraybuffer'\n            oReq.onloadend = (oEvent) => {\n                var res = oReq.responseTxt;\n                if(res){\n                  filterList[i]['content']=res\n                  if(i<filterList.length-1 && filterList[i+1]['canRead']) {\n                      i++\n                      getSrc(i)\n                  }else{\n                      window.parent['vueSetLoaded'](true)\n                  }\n                }\n        \n            }\n            oReq.send(null)\n        }\n\n        if(!object.content) {\n            var oReq = new XMLHttpRequest()\n            oReq.open('GET', parent.window.LocalAPI + object.src, true)\n            oReq.setRequestHeader(\"auth-token\", object.key)\n            // oReq.setRequestHeader(\"auth-token2\", object.prikey)\n            oReq.responseType = 'arraybuffer'  // 会影响其他三方库原生请求返回数据类型\n\n            oReq.onloadend = (oEvent) => {\n                var res = oReq.responseTxt; // response // Note: not oReq.responseText\n               \n                var regHtml = /<[^>]+>/g \n                if (!regHtml.test(res)) {\n                    // 规避其他组件请求返回数据\n                    return res\n                }\n\n                if (res) {\n                    res = res.replace('<title/>','')\n                    res = res.replace('<title />','')\n                    // eslint-disable-next-line no-irregular-whitespace\n\n                    ".concat(M(e, t), "\n\n                    let fa=object.srcList.filter(item=>item.id===object.realId && !item.content)\n                    if(fa.length>0) {fa[0].content=res}\n                \n                    // parent.frames['iFrame'].style.height = '100vh'\n                    // open以后write然后close才会再次触发onload事件\n                    document.open()\n                    res = res.replace('<title/>','')\n                    res = res.replace('<title />','')\n                    document.write(res)\n                    \n                    document.close()\n                    //window.parent.frames['iFrame'].style.opacity=1\n                \n                \n                    // window.realLoad=true\n                    // window.parent['setRealLoad'](true)\n                    // window.parent['vueSetLoaded'](true)\n                    getSrc(0)\n                }\n            }\n\n            oReq.send(null)\n        } else {\n            var res = object.content\n            console.log(res)\n            let fa = object.srcList.filter(\n                (item) => item.id === object.realId && !item.content\n            )\n            if (fa.length > 0) {\n                fa[0].content = res\n            }\n\n            // parent.frames['iFrame'].style.height = '100vh'\n            // open以后write然后close才会再次触发onload事件\n            setTimeout(() => {\n                document.open()\n                res = res.replace('<title/>', '')\n                res = res.replace('<title />', '')\n\n                ").concat(M(e, t), "\n                document.write(res)\n\n                // 新增内容处理区---开始\n                // var Db = document.body\n                // var firstC = Db.children[0]\n\n                // if (Db.children.length === 1 && firstC.children.length === 1) {\n                //     firstC.children[0].setAttribute('style', 'height: calc(100%)')\n                // }\n                // 新增内容处理区---结束\n\n                document.close()\n                //window.parent.frames['iFrame'].style.opacity=1\n            }, 0)\n\n            // window.realLoad = true\n            // window.parent['setRealLoad'](true)\n            // window.parent['vueSetLoaded'](true)\n            getSrc(0)\n        }\n    ")
        }
          , H = R
          , F = "\nif (typeof 'noteObj' === undefined) {\n let noteObj = {}\n} else {\n noteObj = {\n  startOffset: 0,\n  endOffset: 0,\n   showTip: false,\n   tipLeft: 0,\n   tipTop: 0,\n   tipText: '',\n   copyText: '',\n   range: null,\n   textNodes: [],\n   idx: 0,\n   clickId: '',\n   serializeData: [],\n   /**\n    * @Desc: 鼠标松开事件\n    */\n   onMouseup(e) {\n    document.body.style.overflow = 'auto'\n    \n    if (e.target.getAttribute('data-fun')) {\n      return false\n    }\n     let selnoteObj = window.getSelection()\n     console.log('selnoteObj ===>', selnoteObj)\n     if(selnoteObj.anchorNode===null) {\n       return\n     }\n     let range = selnoteObj.getRangeAt(0)\n     if (range.collapsed) {\n       return\n     }\n     noteObj.range = range.cloneRange()\n     noteObj.tipText = '划线'\n     noteObj.copyText = selnoteObj.toString()\n     console.log(noteObj.tipText)\n     window.parent['vueTipWord'](noteObj.tipText)\n     noteObj.setTip(range)\n   },\n   /**\n    * @Desc: 设置tip位置\n    */\n   setTip(range, title, lineStyleId, ele) {\n     let { left, top, width } = ele ? ele.getBoundingClientRect(): range.getBoundingClientRect()\n     let rect = window.parent.frames['iFrame'].getBoundingClientRect()\n     // noteObj.tipLeft = left + (width - 196) / 2 + rect.left\n      noteObj.tipLeft = left + (width - 240) / 2 + rect.left\n     noteObj.tipTop = top - 120 + rect.top\n     // if (title) {\n     //   noteObj.tipLeft = left + (width - 400) / 2 + rect.left\n     //   noteObj.tipTop = top - 320 + rect.top\n     // }\n\n     noteObj.showTip = true\n     window.parent['vueSetTipPostion'](\n       noteObj.tipLeft,\n       noteObj.tipTop,\n       noteObj.showTip,\n       title,\n       noteObj.clickPageId,\n       lineStyleId\n     )\n   },\n   /**\n    * @Desc: 划线\n    */\n   mark(lineStyleId, markWord, pageId) {\n     noteObj.textNodes = []\n     let { commonAncestorContainer, startContainer, endContainer } =\n       noteObj.range\n     noteObj.walk(commonAncestorContainer, (node) => {\n       if (\n         node === startContainer ||\n         node === endContainer ||\n         noteObj.range.isPointInRange(node, 0)\n       ) {\n         if (node.nodeType === 3) {\n           noteObj.textNodes.push(node)\n         }\n       }\n     })\n     noteObj.handleTextNodes(lineStyleId, markWord, pageId)\n     noteObj.startOffset = 0\n     noteObj.endOffset = 0\n     window.parent['vueSetTipPostion'](0, 0, false)\n     // document.getElementById('tip').style.display='none'\n     // document.getElementById('tip').innerText=''\n   },\n   /**\n    * @Desc: 在已经划线或有笔记的情况下复制\n    */\n   copyMark() {\n     noteObj.showTip = false\n     noteObj.tipText = ''\n     window.parent['vueTipWord'](noteObj.tipText)\n     noteObj.startOffset = 0\n       noteObj.endOffset = 0\n     window.parent['vueSetTipPostion'](0, 0, false)\n     let markNodes = document.querySelectorAll('.mark_id_' + noteObj.clickId)\n\n     let copyText = ''\n     markNodes.forEach((node) => {\n       copyText += node.innerText\n     })\n     return copyText\n   },\n   /**\n    * @Desc: 在已有划线或笔记的情况下增加或修改笔记\n    */\n   changeMarkWord(title, lineStyleId) {\n     noteObj.showTip = false\n     noteObj.tipText = ''\n     window.parent['vueTipWord'](noteObj.tipText)\n     noteObj.startOffset = 0\n       noteObj.endOffset = 0\n     window.parent['vueSetTipPostion'](0, 0, false)\n     let editList = []\n     noteObj.serializeData.forEach((item) => {\n       if (\n         item.id === noteObj.clickId &&\n         item.pageId === noteObj.clickPageId\n       ) {\n         item.lineStyleId = ''+lineStyleId\n         item.title = title\n         editList.push(item)\n       }\n     })\n     window.parent['vueEditTip'](editList, (msg) => {\n       if (msg) {\n         //修改笔记\n         let markNodes = document.querySelectorAll(\n           '.mark_id_' + noteObj.clickId\n         )\n         for (let i = 0; i < markNodes.length; i++) {\n           let item = markNodes[i]\n           item.classList.remove('line_1')\n           item.classList.remove('line_2')\n           item.classList.remove('line_3')\n           item.classList.remove('line_4')\n           item.classList.add('line_'+lineStyleId)\n\n           item.title = title\n           if (i === 0) {\n             if (title) {\n               item.classList.add('mark_head')\n             } else {\n               item.classList.remove('mark_head')\n             }\n           }\n         }\n\n         noteObj.serializeData = noteObj.serializeData.map((item) => {\n           if (\n             item.id === noteObj.clickId &&\n             item.pageId === noteObj.clickPageId\n           ) {\n             item.title = title\n             item.lineStyleId = '' + lineStyleId\n           }\n           return item\n         })\n         console.log(JSON.stringify(noteObj.serializeData))\n         localStorage.setItem(\n           'MARK_DATA',\n           JSON.stringify(noteObj.serializeData)\n         )\n       }\n     })\n   },\n\n   /**\n    * @Desc: 在已有划线的情况下修改颜色\n    */\n   changeMarkColor(lineStyleId) {\n     noteObj.showTip = false\n     noteObj.tipText = ''\n     let editList = []\n     noteObj.serializeData.forEach((item) => {\n       if (\n         item.id === noteObj.clickId &&\n         item.pageId === noteObj.clickPageId\n       ) {\n         item.lineStyleId = '' + lineStyleId\n         editList.push(item)\n       }\n     })\n\n     window.parent['vueEditTip'](editList, (msg) => {\n       if (msg) {\n         let markNodes = document.querySelectorAll(\n           '.mark_id_' + noteObj.clickId\n         )\n\n         for (let i = 0; i < markNodes.length; i++) {\n           let item = markNodes[i]\n           item.classList.remove('line_1')\n           item.classList.remove('line_2')\n           item.classList.remove('line_3')\n           item.classList.remove('line_4')\n           item.classList.add('line_' + lineStyleId)\n           item.setAttribute('data-style', lineStyleId)\n         }\n\n         noteObj.serializeData = noteObj.serializeData.map((item) => {\n           if (\n             item.id === noteObj.clickId &&\n             item.pageId === noteObj.clickPageId\n           ) {\n             item.lineStyleId = '' + lineStyleId\n           }\n           return item\n         })\n\n         console.log(JSON.stringify(noteObj.serializeData))\n         localStorage.setItem(\n           'MARK_DATA',\n           JSON.stringify(noteObj.serializeData)\n         )\n       }\n     })\n   },\n   revokeMark() {\n     noteObj.showTip = false\n     noteObj.tipText = ''\n     window.parent['vueTipWord'](noteObj.tipText)\n     noteObj.startOffset = 0\n       noteObj.endOffset = 0\n     window.parent['vueSetTipPostion'](0, 0, false)\n     let markNodes = document.querySelectorAll('.mark_id_' + noteObj.clickId)\n     for (let i = 0; i < markNodes.length; i++) {\n       let item = markNodes[i]\n       let fregment = document.createDocumentFragment()\n       for (let j = 0; j < item.childNodes.length; j++) {\n         fregment.appendChild(item.childNodes[j].cloneNode(true))\n       }\n       item.parentNode.replaceChild(fregment, item)\n     }\n   },\n   /**\n    * @Desc: 取消划线\n    */\n   cancelMark() {\n     noteObj.showTip = false\n     noteObj.tipText = ''\n     window.parent['vueTipWord'](noteObj.tipText)\n     noteObj.startOffset = 0\n       noteObj.endOffset = 0\n     window.parent['vueSetTipPostion'](0, 0, false)\n     // 呼叫前端删除接口，删除成功则进行页面操作否则返回\n     let delList = noteObj.serializeData.filter((item) => {\n       return (\n         item.id === noteObj.clickId && item.pageId === noteObj.clickPageId\n       )\n     })\n     window.parent['vueDelTip'](delList, (msg) => {\n       if (msg) {\n         let markNodes = document.querySelectorAll(\n           '.mark_id_' + noteObj.clickId\n         )\n         for (let i = 0; i < markNodes.length; i++) {\n           let item = markNodes[i]\n           let fregment = document.createDocumentFragment()\n           for (let j = 0; j < item.childNodes.length; j++) {\n             fregment.appendChild(item.childNodes[j].cloneNode(true))\n           }\n           item.parentNode.replaceChild(fregment, item)\n         }\n         console.log(JSON.stringify(noteObj.serializeData))\n         noteObj.serializeData = noteObj.serializeData.filter((item) => {\n           console.log(item.id !== noteObj.clickId)\n           return (\n             item.id !== noteObj.clickId || item.pageId !== noteObj.clickPageId\n           )\n         })\n         console.log(JSON.stringify(noteObj.serializeData))\n         localStorage.setItem(\n           'MARK_DATA',\n           JSON.stringify(noteObj.serializeData)\n         )\n       }\n     })\n   },\n\n   /**\n    * @Desc: 遍历节点收集文本节点\n    */\n   walk(node, callback = () => {}) {\n     callback(node)\n     if (node && node.childNodes) {\n       for (let i = 0; i < node.childNodes.length; i++) {\n         noteObj.walk(node.childNodes[i], callback)\n       }\n     }\n   },\n\n   /**\n    * @Desc: 遍历文本节点渲染划线\n    */\n   handleTextNodes(lineStyleId, markWord, pageId, nid) {\n     let id = ++noteObj.idx\n     noteObj.textNodes.forEach((node, index) => {\n       let startOffset = 0\n       let endOffset = noteObj.getCharLength(node.nodeValue)\n       if (\n         node === noteObj.range.startContainer &&\n         noteObj.range.startOffset !== 0\n       ) {\n         startOffset = noteObj.range.startOffset\n       }\n       if (\n         node === noteObj.range.endContainer &&\n         noteObj.range.endOffset !== 0\n       ) {\n         endOffset = noteObj.range.endOffset\n       }\n       noteObj.replaceTextNode(\n         node,\n         id,\n         startOffset,\n         endOffset,\n         lineStyleId,\n         index,\n         markWord,\n         noteObj.copyText,\n         pageId,\n         nid\n       )\n     })\n     noteObj.serialize(\n       document\n         .getElementsByTagName('body')[0]\n         .querySelectorAll('.mark_id_' + id),\n       lineStyleId\n     )\n     noteObj.copyText = ''\n     window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();\n   },\n   /**\n    * @Desc: 渲染节点\n    */\n   replaceTextNode(\n     node,\n     id,\n     startOffset,\n     endOffset,\n     lineStyleId,\n     index,\n     markWord,\n     copyText,\n     pageId,\n     nid\n   ) {\n     let fragment = document.createDocumentFragment()\n     let startNode = null\n     let endNode = null\n     if (startOffset !== 0) {\n       startNode = document.createTextNode(\n         node.nodeValue.slice(0, startOffset)\n       )\n     }\n     if (endOffset !== 0) {\n       endNode = document.createTextNode(node.nodeValue.slice(endOffset))\n     }\n     startNode && fragment.appendChild(startNode)\n     let textNode = document.createElement('span')\n     if (index === 0 && markWord) {\n       textNode.className = 'markLine line_'+lineStyleId + '  mark_head mark_id_'+id\n     } else {\n       textNode.className = 'markLine line_' + lineStyleId+' mark_id_' + id\n     }\n     if (markWord) {\n       textNode.title = markWord\n     }\n     if (copyText) {\n       textNode.setAttribute('data-copy', copyText)\n     }\n     if (pageId) {\n       textNode.setAttribute('data-page-id', pageId)\n     }\n     if (nid) {\n      textNode.setAttribute('data-page-nid', nid)\n     }\n     textNode.setAttribute('data-mark-sn', id)\n     textNode.setAttribute('data-style', lineStyleId)\n     textNode.textContent = node.nodeValue.slice(startOffset, endOffset)\n     fragment.appendChild(textNode)\n     endNode && fragment.appendChild(endNode)\n     node.parentNode.replaceChild(fragment, node)\n   },\n   /**\n    * @Desc: 序列化进行保存\n    */\n   serialize(markNodes, lineStyleId) {\n     console.log('序列化进行保存')\n     let root = document.getElementsByTagName('body')[0]\n     let addList = []\n     let addObj = null\n     let nowId = 0\n     markNodes.forEach((markNode) => {\n       // 计算离外层第一个非划线元素的文本偏移量\n       let offset = noteObj.getTextOffset(markNode)\n       // 找到外层第一个非划线元素\n       let { tagName, index } = noteObj.getWrapNode(markNode, root)\n       if (noteObj.getCharLength(markNode.textContent) > 0) {\n         nowId = markNode.getAttribute('data-mark-sn')\n         addObj = {\n           tagName,\n           index,\n           offset,\n           length: noteObj.getCharLength(markNode.textContent),\n           id: markNode.getAttribute('data-mark-sn'),\n           lineStyleId: markNode.getAttribute('data-style'),\n           title: markNode.title ? markNode.title : '',\n           copyText: markNode.getAttribute('data-copy'),\n           pageId: markNode.getAttribute('data-page-id'),\n           nid: markNode.getAttribute('data-page-nid'),\n           createdTime: Date.now()\n         }\n         addList.push(addObj)\n       }\n     })\n     if (addList.length > 0) {\n       window.parent['vueAddTip'](addList, lineStyleId, (msg) => {\n         if (msg) {\n           noteObj.serializeData = [...noteObj.serializeData, ...addList]\n           console.log(JSON.stringify(noteObj.serializeData))\n\n           localStorage.setItem(\n             'MARK_DATA',\n             JSON.stringify(noteObj.serializeData)\n           )\n           console.log('markNodes ===>', markNodes)\n          //  markNodes.classList.remove('unmarkLine')\n         } else {\n           noteObj.clickId = nowId\n           noteObj.revokeMark()\n         }\n       })\n     }\n   },\n   /**\n    * @Desc: 获取文本离外层第一个非划线元素的文本偏移量\n    */\n   getTextOffset(node) {\n     let offset = 0\n     let parNode = node\n     // 遍历到外层第一个非划线元素\n     while (parNode && parNode.classList.contains('markLine')) {\n       // 获取之前的兄弟元素的总字符数\n       offset += noteObj.getPrevSiblingOffset(parNode)\n       parNode = parNode.parentNode\n     }\n     return offset\n   },\n   /**\n    * @Desc: 获取文本在本级的offset\n    */\n   getPrevSiblingOffset(node) {\n     let offset = 0\n     let prevNode = node.previousSibling\n     while (prevNode) {\n       offset +=\n         prevNode.nodeType === 3\n           ? noteObj.getCharLength(prevNode.nodeValue)\n           : noteObj.getCharLength(prevNode.textContent)\n       prevNode = prevNode.previousSibling\n     }\n     return offset\n   },\n   /**\n    * @Desc:  找到外层第一个非划线元素\n    */\n   getWrapNode(node, root) {\n     let wrapNode = node.parentNode\n     while (wrapNode.classList.contains('markLine')) {\n       wrapNode = wrapNode.parentNode\n     }\n     let wrapNodeTagName = wrapNode.tagName\n     let wrapNodeIndex = -1\n     let els = root.getElementsByTagName(wrapNodeTagName)\n     els = [...els]\n       .filter((item) => {\n         return !item.classList.contains('markLine')\n       })\n       .forEach((item, index) => {\n         if (wrapNode === item) {\n           wrapNodeIndex = index\n         }\n       })\n     return {\n       tagName: wrapNodeTagName,\n       index: wrapNodeIndex\n     }\n   },\n   /**\n    * @Desc: 反序列化\n    */\n   deserialization() {\n     // 防止二次载入\n     let markNodes = document.querySelectorAll('.markLine')\n     if (markNodes.length > 0) {\n\n       return\n     }\n\n     let root = document.getElementsByTagName('body')[0]\n     noteObj.serializeData = localStorage.getItem('MARK_DATA')\n       ? JSON.parse(localStorage.getItem('MARK_DATA'))\n       : []\n     // noteObj.serializeData = window.parent.noteList?window.parent.noteList:[]\n     let pageId = window.parent.pageId\n     let nowSerializeData = noteObj.serializeData.filter(\n       (item) => item.pageId === ''+pageId\n     )\n     noteObj.idx =\n       nowSerializeData.length > 0\n         ? Number(nowSerializeData[nowSerializeData.length - 1].id)\n         : 0\n     let idx = 0\n     let lastItemId = 0\n     nowSerializeData.reverse().forEach((item) => {\n       if (item.id !== lastItemId) {\n         idx = 0\n         lastItemId = item.id\n       }\n       let els = root.getElementsByTagName(item.tagName)\n       els = [...els].filter((item) => {\n         return !item.classList.contains('markLine')\n       })\n       let wrapNode = els[item.index]\n       let len = 0\n       let end = false\n       let _length = item.length\n       let first = true\n       noteObj.walk(wrapNode, (node) => {\n         if (end) {\n           return\n         }\n         if (node && node.nodeType === 3) {\n           let nodeTextLength = noteObj.getCharLength(node.nodeValue)\n           if (len + nodeTextLength > item.offset) {\n             // startOffset之前的文本不需要划线\n             let startOffset = first ? item.offset - len : 0\n             first = false\n             // 如果该文本节点剩余的字符数量小于划线文本的字符长度的话代表该文本节点还只是划线文本的一部分，还需要到下一个文本节点里去处理\n             let endOffset =\n               startOffset +\n               (nodeTextLength - startOffset >= _length\n                 ? _length\n                 : nodeTextLength - startOffset)\n             noteObj.replaceTextNode(\n               node,\n               item.id,\n               startOffset,\n               endOffset,\n               Number(item.lineStyleId),\n               idx,\n               item.title,\n               item.copyText,\n               item.pageId,\n               item.nid\n             )\n             idx = 1\n             // 长度需要减去之前节点已经处理掉的长度\n             _length = _length - (nodeTextLength - startOffset)\n             // 如果剩余要处理的划线文本的字符数量为0代表已经处理完了，可以结束了\n             if (_length <= 0) {\n               end = true\n             }\n           }\n           len += nodeTextLength\n         }\n       })\n     })\n     // 跳转笔记\n     if(window.parent.activedItem && window.realLoad){\n       let item = window.parent.activedItem\n       let obj = document.getElementsByClassName('mark_id_' + item.id)[0]\n       if(window.parent.infeed===2){\n         if (obj && obj.offsetLeft) {\n           gotoMark(obj.offsetLeft)\n           window.parent['vueGetHxPnum'](obj.offsetLeft)\n         }\n       }else if(window.parent.infeed===1){\n         if (obj && obj.offsetTop) {\n           window.parent.document.getElementById('scroll').scrollTo(0, obj.offsetTop)\n           window.parent['vueGetHxPnum'](obj.offsetTop)\n         }\n       }\n       // 第二次载入执行后清空第一次不能清空\n       window.parent.activedItem=null\n     }\n\n\n     // 跳转书签\n     if(window.parent.markElementItem && window.realLoad){\n       let item=window.parent.markElementItem\n       let eles = document.getElementsByTagName('body')[0].children\n       let obj = null\n       if(window.parent.infeed===2){\n         obj = eles[item.elementIndex]\n         if (obj && obj.offsetLeft) {\n           gotoMark(obj.offsetLeft)\n         }\n       }else if(window.parent.infeed===1){\n         obj = eles[item.elementIndex-1]\n         if (obj && obj.offsetTop) {\n           window.parent.document.getElementById('scroll').scrollTo(0, obj.offsetTop)\n         }\n       }\n       // 第二次载入执行后清空第一次不能清空\n       window.parent.markElementItem=null\n     }\n\n\n     //滚动到末尾\n     if(window.parent.backToLastEnd && window.realLoad) {\n       window.scrollIndex = Math.ceil(window.scrollDomScrollWidth/window.scrollDom.offsetWidth)\n       window.scrollDom.scrollLeft = document.body.scrollWidth\n       window.parent.backToLastEnd=false\n     }\n     // 增加滚动动画\n   },\n   showMenu(e) {\n     // 判断位置切换显示菜单\n     let _width=window.screen.width\n     let leftBtn=_width*0.25\n     let rightBtn=_width-_width*0.25\n     let offsetX=e.offsetX\n     if(offsetX>leftBtn && offsetX<rightBtn){\n       window.parent['vueShowMenu']()\n     }\n   },\n   /**\n    * @Desc: 点击\n    */\n   onClick(e) {\n     // window.parent['vueCanScroll'](e.target.tagName)\n     // media 功能触发\n     if (e.target.getAttribute('data-fun')) {\n      return false\n     }\n    // 资源列表点击事件触发\n     if(e.target.tagName.toLowerCase()==='img'){\n       if(e.target.getAttribute('data-type') && e.target.getAttribute('data-type') == 'gallery') return false;\n       let src = e.target.getAttribute('data-src') || e.target.getAttribute('src')\n       window.parent['vueShowImg'](src)\n       return;\n     }\n\n     let selnoteObj = window.getSelection()\n     if(selnoteObj.anchorNode===null) {\n       noteObj.showTip = false\n       noteObj.startOffset = 0\n       noteObj.endOffset = 0\n       window.parent['vueSetTipPostion'](0, 0, false)\n       noteObj.showMenu(e)\n       return\n     }\n     let range = selnoteObj ? selnoteObj.getRangeAt(0) : null\n\n     if (!range || range.collapsed || (noteObj.startOffset == range.startOffset && noteObj.endOffset == range.endOffset ) ) {\n       noteObj.showTip = false\n       noteObj.startOffset = 0\n       noteObj.endOffset = 0\n       window.parent['vueSetTipPostion'](0, 0, false)\n       // document.document.elementFromPoint(w, h)\n     }\n\n     noteObj.startOffset = range.startOffset\n     noteObj.endOffset = range.endOffset\n     noteObj.showCancelTip(e)\n   },\n   /**\n    * @Desc: 鼠标按下事件\n    */\n   onMousedown(event) {\n     // noteObj.showTip = false\n      document.body.style.overflow = 'hidden'\n   },\n   /**\n    * @Desc: 显示取消tip\n    */\n   showCancelTip(e) {\n     console.log('显示取消tip')\n     let tar = e.target\n     if (tar.classList.contains('markLine')) {\n       e.stopPropagation()\n       e.preventDefault()\n       let lineStyleId = tar.getAttribute('data-style')\n       noteObj.clickId = tar.getAttribute('data-mark-sn')\n       noteObj.clickPageId = tar.getAttribute('data-page-id')\n       noteObj.clicknid = tar.getAttribute('data-page-nid')\n       let title = tar.getAttribute('title')\n       console.log('要删除', noteObj.clickId)\n       let markNodes = document.querySelectorAll('.mark_id_' + noteObj.clickId)\n       let startContainer = markNodes[0].firstChild\n       let endContainer = markNodes[markNodes.length - 1].lastChild\n       noteObj.range = document.createRange()\n       noteObj.range.setStart(startContainer, 0)\n       noteObj.range.setEnd(endContainer, endContainer.nodeValue.length)\n       noteObj.tipText = '取消划线'\n\n       window.parent['vueTipWord'](noteObj.tipText)\n\n       noteObj.setTip(noteObj.range, title, lineStyleId, tar)\n     }else{\n       noteObj.showMenu(e)\n     }\n   },\n\n   /**\n    * @Desc: 获取字符串除去换行符、空格等字符外的长度\n    */\n   getCharLength(str = '') {\n     // let len = (String(str)).replace(/\\s+/g, '').length\n     return str.length\n   }\n }\n function gotoMark(offLeft, isScroll = true){\n  window.scrollDom = document.body\n  let bodyWidth = window.scrollDom.offsetWidth\n  window.scrollIndex = Math.floor(offLeft/bodyWidth)\n  if (isScroll) {\n    window.scrollDom.scrollLeft = window.scrollIndex * bodyWidth\n  }\n}\n if (window.parent.isMobile) {\n    document.addEventListener('touchend', noteObj.onMouseup)\n } else {\n   document.addEventListener('mousedown', noteObj.onMousedown)\n   document.addEventListener('mouseup', noteObj.onMouseup)\n }\n document.addEventListener('click', noteObj.onClick)\n setTimeout(() => {\n   noteObj.deserialization()\n }, 0)\n} "
          , B = F
          , $ = "\n//获取父节点\nfunction getParentEle(ele, w, h, a) {\n  if (ele && ele.getAttribute('data-sn')) {\n    return ele\n  } else if (ele && ele.tagName.toLowerCase() === 'body') {\n    return getPEle(w, h, a)\n  } else if(ele){\n    return getParentEle(ele.parentElement, w, h, a)\n  }else {\n    return null\n  }\n}\n/***\n * 获取当前元素\n * @param w x的位置\n * @param h y的位置\n * @param a y的位置是增是减\n * @returns {null|Element|*}\n */\nfunction getPEle(w, h, a) {\n  let scrollHeight = window.parent.document.getElementById('scroll').scrollTop\n  let pageClientHeight = window.parent.innerHeight - 87\n  // 获取元素已经超出屏幕\n  if (h < scrollHeight || h > scrollHeight + pageClientHeight) {\n    return null\n  }\n\n  let ele = document.elementFromPoint(w, h)\n  //找到标签并且有元素序号\n  if (ele && ele.getAttribute('data-sn')) {\n    return ele\n  }\n  //找到标签发现点击到顶层a标签\n  else if (ele && (ele.tagName.toLowerCase() === 'body'|| ele.tagName.toLowerCase() === 'html')) {\n    return getPEle(w, h + a, a)\n  }\n  //找到标签发现是内部标签，向上寻找到有序号的父元素\n  else if (ele && !ele.getAttribute('data-sn')) {\n    return getParentEle(ele, w, h + a, a)\n  }\n  //其他情况向下继续找元素\n  else {\n    return getPEle(w, h + a, a)\n  }\n}\n\n/**\n * getParentDataSn 获取data-sn属性值\n * 如果元素不存在属性data-sn 则向上查去祖先元素 直至存在为止 并将其属性值返回\n * @param  {[type]} ele [description]\n * @return {[type]}     [description]\n */\nfunction getParentDataSn(ele) {\n\n  if(!ele) {\n    return {\n      sn: -1,\n      ele: null\n    }\n  }\n\n  let obj = {\n    sn: -1,\n    ele: null\n  }\n\n  if(ele.getAttribute('data-sn')) {\n    obj.sn = Number(ele.getAttribute('data-sn'))\n    obj.ele = ele\n  } else {\n    obj= getParentDataSn(ele.parentElement)\n  }\n\n  return obj\n}\n\n/**\n * getElementsInScreen 获取所在屏幕可见视图区域的元素\n * @param  {Number} infeed [description]\n * @return {[type]}        [description]\n */\nfunction getElementsInScreen(infeed = 1) {\n  let w = document.documentElement.clientWidth\n  let h = document.documentElement.clientHeight\n  let st = window.parent.document.getElementById('scroll').scrollTop\n  let sl = document.body.scrollLeft\n  let elements = {\n    topMark: -1,\n    topEle: null,\n    pointTopH: 0,\n    bottomMark: -1,\n    bottomEle: null\n  }\n\n  if(infeed == 1) {\n\n    h = window.parent.document.getElementById('scroll').clientHeight\n    let pointW = w * 0.5\n    let elePrev = document.elementFromPoint(pointW, st-10) //取上一屏的最后元素\n    let elePrevSn = elePrev && elePrev.getAttribute('data-sn') ? Number(elePrev.getAttribute('data-sn')) : -1\n\n    for(let pointH = st ;pointH < st + h; pointH += 10) {\n      let ele = document.elementFromPoint(pointW, pointH)\n\n      if (!ele) {\n          continue\n      }\n      let eleObj = getParentDataSn(ele)\n      if(elements.topMark < 0){\n        if (eleObj.sn !== elePrevSn) {\n          elements.topMark = eleObj.sn\n          elements.topEle = eleObj.ele\n          elements.pointTopH = pointH\n        }\n      } else {\n        if (eleObj.sn > 0) {\n            elements.bottomMark = eleObj.sn\n            elements.bottomEle = eleObj.ele\n        }\n      }\n    }\n\n  } else {\n    let pointW = w * 0.25\n    let elePrev = document.elementFromPoint(0 - (w * 0.25), h - 10) //取上一屏的最后元素\n    let elePrevSn = elePrev && elePrev.getAttribute('data-sn') ? Number(elePrev.getAttribute('data-sn')) : -1\n\n    for (let pointH = 0; pointH < h; pointH += 10) {\n      let ele = document.elementFromPoint(pointW, pointH)\n\n      if (!ele) {\n          continue\n      }\n\n      let eleObj = getParentDataSn(ele)\n      if(elements.topMark < 0){\n        if (eleObj.sn !== elePrevSn) {\n          elements.topMark = eleObj.sn\n          elements.topEle = eleObj.ele\n          elements.pointTopH = pointH\n        }\n      } else {\n        if (eleObj.sn > 0) {\n            elements.bottomMark = eleObj.sn\n            elements.bottomEle = eleObj.ele\n        }\n      }\n    }\n\n    pointW = w * 0.75\n\n    for (let pointH = 0; pointH < h; pointH += 10) {\n      let ele = document.elementFromPoint(pointW, pointH)\n      if (!ele) {\n          continue\n      }\n      let eleObj = getParentDataSn(ele)\n      if(elements.topMark < 0){\n        if (eleObj.sn !== elePrevSn) {\n          elements.topMark = eleObj.sn\n          elements.topEle = eleObj.ele\n          elements.pointTopH = pointH\n        }\n      } else {\n        if (eleObj.sn > 0) {\n            elements.bottomMark = eleObj.sn\n            elements.bottomEle = eleObj.ele\n        }\n      }\n    }\n  }\n\n  if(elements.topMark < 0 && elements.bottomMark < 0) {\n    let bodyChildEl = document.body.querySelectorAll('[data-sn]')\n\n    if (bodyChildEl && bodyChildEl.length > 0) {\n      elements.topMark = getParentDataSn(bodyChildEl[0]).sn\n      elements.topEle = getParentDataSn(bodyChildEl[0]).ele\n      elements.bottomMark = getParentDataSn(bodyChildEl[bodyChildEl.length - 1]).sn\n      elements.bottomEle =  getParentDataSn(bodyChildEl[bodyChildEl.length - 1]).ele\n      elements.pointTopH = 10\n    }\n  }\n\n  if(elements.topMark < 0 && elements.bottomMark > 0) {\n    elements.topMark = elements.bottomMark\n    elements.topEle = elements.bottomEle\n  }\n\n  return elements\n}\n\n// function getElementMarkForInfeed(sn) {\n//   let w = document.documentElement.clientWidth\n//   let h = document.documentElement.clientHeight\n//   let topTmpel = getPEle(w * 0.25, 0, 2)\n//   let bottomTmpel =  getPEle(w * 0.75, 0, -10, 2)\n//   let targetId = ''\n//   if(topTmpel && bottomTmpel){\n//     let topSn=topTmpel.getAttribute('data-sn')\n//     let bottomSn=bottomTmpel.getAttribute('data-sn')\n//     let topMark=Number(topSn)\n//     let bottomMark=Number(bottomSn)\n//     if (sn === 0) {\n//       return { topMark, bottomMark }\n//     } else if (sn === 1) {\n//       window.parent['vueSetBookMark'](topMark, bottomMark)\n//     }\n//   }\n// }\n// function getElementMark(sn) {\n//   let scrollHeight = window.parent.document.getElementById('scroll').scrollTop\n//   let pageClientHeight = window.parent.innerHeight - 87\n//   let w = document.documentElement.clientWidth\n//   let topTmpel = getPEle(w * 0.5, scrollHeight, 10)\n\n//   let bottomTmpel = getPEle(w * 0.5, scrollHeight + pageClientHeight, -10)\n//   console.log(topTmpel, bottomTmpel)\n//   let topMark = -1\n//   if (topTmpel && topTmpel.getAttribute('data-sn')) {\n//     topMark = Number(topTmpel.getAttribute('data-sn'))\n//   }\n//   let bottomMark = -1\n//   if (bottomTmpel && bottomTmpel.getAttribute('data-sn')) {\n//     bottomMark = Number(bottomTmpel.getAttribute('data-sn'))\n//   }\n//   // 如果sn==1那么执行滚动的操作，如果sn==0那么是为删除操作提供位置参考\n//   if (sn === 0) {\n//     return { topMark, bottomMark }\n//   } else if (sn === 1) {\n//     window.parent['vueSetBookMark'](topMark, bottomMark)\n//   }\n// }\n/*\n* 新增书签获取sn以及相关书签段落文字\n*/\nfunction getMarkSnAndPostion(infeed = 1) {\n  // let w = document.documentElement.clientWidth\n  let h = document.documentElement.clientHeight\n  // let scrollHeight = window.parent.document.getElementById('scroll').scrollTop\n  // let pageClientHeight = window.parent.innerHeight - 87\n  let eleObj = getElementsInScreen(infeed)\n  let eleTop = eleObj.topEle\n  let txt = eleTop.innerText\n  let ofHeight = eleTop.offsetHeight\n  let ofTop = eleTop.offsetTop\n  let lhHeight =  Number(getComputedStyle(eleTop).lineHeight.replace('px',''))\n  let diffHeight = ofTop > eleObj.pointTopH ? (h - ofTop) + lhHeight : infeed == 1 ? ofHeight : eleObj.pointTopH \n  let rateHeight = diffHeight / ofHeight\n  let wordText = rateHeight == 1 ? txt.substr(0, 30) : txt.substr(Math.ceil(txt.length * rateHeight), 30)\n  let labelIdx = Math.floor(Math.floor(ofHeight / lhHeight) * rateHeight)\n\n  if(!wordText){\n    if(eleTop.tagName.toLowerCase()==='img'){\n      wordText='图片'\n    }else{\n      wordText=''\n    }\n  }\n  return {\n    ele: eleTop,\n    i:eleObj.topMark,\n    word:wordText, \n    labelIdx\n  }\n}\n\nfunction myTest() {\n  let w = document.documentElement.clientWidth\n  let h = document.documentElement.clientHeight\n  let scrollHeight = window.parent.document.getElementById('scroll').scrollTop\n  let pageClientHeight = window.parent.innerHeight - 87\n  // let tmpel = getPEle(w * 0.5, scrollHeight + pageClientHeight * 0.5, 10)\n  let tmpel = getPEle(w * 0.5, scrollHeight + 10, 10)\n\n  let wordText=tmpel.innerText\n  if(!wordText){\n    if(tmpel.tagName.toLowerCase()==='img'){\n      wordText='图片'\n    }else{\n      wordText=''\n    }\n  }\n  return {i:Number(tmpel.getAttribute('data-sn')),word:wordText}\n}\n\n\nvar lastHeight = 0\nfunction getElementAnchor() {\n  let scrollHeight = window.parent.document.getElementById('scroll').scrollTop\n  let pageClientHeight = window.parent.innerHeight - 87\n  let w = document.documentElement.clientWidth\n  let topTmpel = document.elementFromPoint(w * 0.5, scrollHeight)\n  let bottomTmpel = document.elementFromPoint(\n    w * 0.5,\n    scrollHeight + pageClientHeight * 0.5\n  )\n\n  let targetId = ''\n  if (lastHeight - scrollHeight < 0) {\n    // console.log('向下滚动')\n    if (topTmpel.id && bottomTmpel.id) {\n      targetId = bottomTmpel.id\n    } else if (topTmpel.id) {\n      targetId = topTmpel.id\n    } else if (bottomTmpel.id) {\n      targetId = bottomTmpel.id\n    }\n  } else {\n    // console.log('向上滚动')\n    if (topTmpel.id && bottomTmpel.id) {\n      targetId = topTmpel.id\n    } else if (topTmpel.id) {\n      targetId = topTmpel.id\n    } else if (bottomTmpel.id) {\n      targetId = bottomTmpel.id\n    }\n  }\n  if (targetId) {\n    // console.log(targetId)\n    window.parent['vueGotoAnchor'](targetId)\n  }\n  lastHeight = window.parent.document.getElementById('scroll').scrollTop\n}\n\nfunction getElementAnchorForInfeed() {\n  let w = document.documentElement.clientWidth\n  let h = document.documentElement.clientHeight\n  let topTmpel = getPEle(w * 0.25, 80,10)\n  let bottomTmpel =  getPEle(w * 0.75, h-80,-10)\n  let targetId = ''\n  if(topTmpel && bottomTmpel){\n    let topSn=topTmpel.getAttribute('data-sn')\n    let bottomSn=bottomTmpel.getAttribute('data-sn')\n    let topNum=Number(topSn)\n    let bottomNum=Number(bottomSn)\n    let eles = document.getElementsByTagName('body')[0].children\n    for (let i = bottomNum; i >=topNum  ; i--) {\n      if(eles[i - 1].id){\n        targetId=eles[i - 1].id\n        break\n      }\n\n    }\n\n  }\n\n\n  if (targetId) {\n    // console.log(targetId)\n    window.parent['vueGotoAnchor'](targetId)\n  }\n  lastHeight = window.parent.document.getElementById('scroll').scrollTop\n}\n\n\n      "
          , W = $
          , z = n("ca00")
          , q = function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                staticClass: "BookCatTree"
            }, [t("div", {
                staticClass: "book-bottit BookCatTree-tittle"
            }, [t("span", [e._v("\n      目录\n      (共" + e._s(e.treelist.length) + "章)\n    ")]), e.treelist && e.treelist.length > 0 ? t("small", {
                staticClass: "BookCatTreeCtrl",
                on: {
                    click: function(t) {
                        return e.handleBookCatTreeCtrlClick()
                    }
                }
            }, [e._v("\n      " + e._s(this.treeControl) + "\n    ")]) : e._e()]), t("el-tree", {
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: e.loading,
                    expression: "loading"
                }],
                ref: "treeX",
                staticClass: "cat_tree",
                attrs: {
                    data: e.treelist,
                    "empty-text": "暂无数据",
                    "node-key": "id",
                    "highlight-current": "",
                    "expand-on-click-node": !1
                },
                on: {
                    "node-click": e.handleNodeClick
                },
                scopedSlots: e._u([{
                    key: "default",
                    fn: function(n) {
                        n.node;
                        var i = n.data;
                        return t("span", {
                            staticClass: "BookCatTree-node",
                            class: {
                                "Ba-PageCanread": "1" === e.morebook && e.book ? e.duoce_canreadpages - i.pnum >= 0 : e.canreadpages - i.pnum >= 0
                            }
                        }, [t("span", {
                            staticClass: "BookCatTree-node-left"
                        }, [e._v(e._s(i.label))]), t("span", {
                            staticClass: "BookCatTree-node-right"
                        }, [t("span", {
                            staticClass: "BookCatTree-node-pagenum"
                        }, [e._v("\n          " + e._s(i.pnum) + "\n        ")]), t("span", {
                            staticClass: "BookCatTree-node-icon"
                        }, [t("el-popover", {
                            attrs: {
                                placement: "top",
                                trigger: "hover"
                            }
                        }, [t("span", [e._v("\n              本章节需要机构购买后才可阅读，您可以\n              "), t("a", {
                            attrs: {
                                href: ""
                            }
                        }, [e._v("推荐给图书馆购买")]), e._v("\n              。\n              "), t("br"), e._v("\n              '如您是已购买的用户，请使用机构账号\n              "), t("a", {
                            attrs: {
                                href: "#"
                            }
                        }, [e._v("登录")]), e._v("\n              后使用。\n            ")]), t("i", {
                            staticClass: "iconfont2",
                            class: {
                                "icon-lock": "1" === e.morebook && e.book ? e.duoce_canreadpages - i.pnum < 0 : e.canreadpages - i.pnum < 0
                            },
                            attrs: {
                                slot: "reference"
                            },
                            slot: "reference"
                        })])], 1)])])
                    }
                }])
            }), this.isexpand ? t("el-button", {
                staticClass: "BookCatTree-CloseAll",
                attrs: {
                    round: ""
                },
                on: {
                    click: function(t) {
                        return e.handleBookCatTreeCtrlClick(!1)
                    }
                }
            }, [e._v("\n    收起全部\n  ")]) : e._e()], 1)
        }
          , X = []
          , V = {
            name: "BookCatTree",
            props: ["bid", "canreadpages", "canread", "notitle", "cb_click", "treelist", "duoce_ml_cnt", "morebook", "book", "duoce_canreadpages"],
            data: function() {
                return {
                    tree: [],
                    isexpand: !1,
                    scrollY: 0,
                    defaultProps: {
                        children: "children",
                        label: "label"
                    },
                    loading: !1
                }
            },
            watch: {
                treelist: function() {
                    this.isexpand = !1
                }
            },
            computed: {
                treeControl: function() {
                    return this.isexpand ? "(收起全部目录)" : "(展开全部目录)"
                }
            },
            created: function() {},
            mounted: function() {
                window.addEventListener("scroll", this.handleScroll)
            },
            methods: {
                handleNodeClick: function(e) {
                    "function" === typeof this.cb_click ? this.cb_click(e.id, e.src, e.key) : this.book ? "1" === this.morebook ? window.open("/read/epub?bid=" + this.bid + "," + e.pnum + "&v=" + this.duoce_ml_cnt) : window.open("/read/epub?bid=" + this.bid + "," + e.pnum) : "1" === this.morebook ? window.location.href = "/read/epub?bid=" + this.bid + "," + e.pnum + "&v=" + this.duoce_ml_cnt : window.location.href = "/read/epub?bid=" + this.bid + "," + e.pnum
                },
                handleBookCatTreeCtrlClick: function(e) {
                    this.isexpand = "boolean" === typeof e ? e : !this.isexpand;
                    for (var t = 0; t < this.$refs.treeX.store._getAllNodes().length; t++) {
                        var n = this.$refs.treeX.store._getAllNodes()[t];
                        "object" === Object(b["a"])(n.childNodes) && n.childNodes.length > 0 && (n.expanded = this.isexpand)
                    }
                },
                handleScroll: function() {
                    this.scrollY = document.documentElement.scrollTop
                }
            }
        }
          , K = V
          , J = (n("c759"),
        n("0b56"))
          , U = Object(J["a"])(K, q, X, !1, null, null, null)
          , Q = U.exports
          , G = function() {
            var e = this
              , t = e._self._c;
            return t("div", {
                ref: "ResourceList",
                staticClass: "resource_list",
                class: {
                    ac: 1 == e.resourceAc
                },
                style: {
                    display: e.resourceShow ? "flex" : "none"
                }
            }, [t("div", {
                staticClass: "resource_inner"
            }, [t("div", {
                staticClass: "header_btn",
                on: {
                    click: function(t) {
                        return e.changeRe()
                    }
                }
            }, [t("span", {
                staticClass: "header_icon icon-doubleRight iconfont2"
            })]), t("div", {
                staticClass: "resource_header"
            }, [t("span", {
                staticClass: "header_span"
            }, [e._v("资源列表(" + e._s(e.resourceCount) + ")")]), t("span", {
                staticClass: "close_btn el-icon-close",
                on: {
                    click: e.closeResource
                }
            })]), t("div", {
                staticClass: "resource_body"
            }, e._l(e.resource_list, (function(n) {
                return t("div", {
                    key: n.resourceId,
                    staticClass: "item",
                    class: {
                        is_Active: n.resourceId == e.nowPlayId
                    },
                    on: {
                        click: function(t) {
                            return e.qrcodePlay(n)
                        }
                    }
                }, [t("i", {
                    staticClass: "icon_play icon-a-playyes iconfont2"
                }), t("span", {
                    staticClass: "item-sp"
                }, [e._v(e._s(n.fileName))]), "video" == n.type ? t("span", {
                    staticClass: "iconfont2 playicon-video icon-video2"
                }) : "audio" == n.type ? t("span", {
                    staticClass: "iconfont2 playicon-volume icon-Volume"
                }) : "file" == n.type ? t("span", {
                    staticClass: "iconfont2 playicon-open icon-open"
                }) : "image" == n.type ? t("span", {
                    staticClass: "iconfont2 playicon-open icon-tupian"
                }) : "pdf" == n.type || "url" == n.type ? t("span", {
                    staticClass: "iconfont2 playicon-open icon-open"
                }) : "list" == n.type ? t("span", {
                    staticClass: "iconfont2 playicon-list icon-list2"
                }) : t("span", {
                    staticClass: "iconfont2 playicon-open icon-open"
                })])
            }
            )), 0)])])
        }
          , Y = []
          , Z = {
            name: "ResourceList",
            props: ["resourceShow", "resourceAc", "resourceCount", "resource_list", "nowPlayId"],
            data: function() {
                return {}
            },
            created: function() {},
            mounted: function() {},
            methods: {
                closeResource: function() {
                    this.$parent.closeResource()
                },
                changeRe: function() {
                    this.$parent.changeRe()
                },
                qrcodePlay: function(e) {
                    this.$parent.qrcodePlay(e)
                }
            }
        }
          , ee = Z
          , te = (n("a0b4"),
        Object(J["a"])(ee, G, Y, !1, null, null, null))
          , ne = te.exports
          , ie = n("aa69")
          , oe = n("acb2")
          , re = n("3aef")
          , ae = n.n(re)
          , se = n("d635")
          , le = n("34d3")
          , ce = n.n(le)
          , de = (n("3dd7"),
        n("5d4e"),
        n("365c"))
          , me = n("6848")
          , ue = n("e7ea");
        function pe(e, t, n) {
            var i = "";
            return i = t ? "/v1/read/initread?bid=".concat(e, "&volume_no=").concat(t, "&memberId=").concat(n) : "/v1/read/initread?bid=".concat(e),
            Object(ue["a"])({
                url: i,
                method: "get"
            })
        }
        function he(e) {
            return Object(ue["a"])({
                url: "/deep/epub/catatree/".concat(e),
                method: "get"
            })
        }
        function ge(e, t, n) {
            return Object(ue["a"])({
                url: n ? "/deep/epub/v1/u/bookmarklst?k=".concat(n, "&bid=").concat(e, "&memberId=").concat(t) : "/deep/epub/v1/u/bookmarklst?bid=".concat(e, "&memberId=").concat(t),
                method: "get"
            })
        }
        function fe(e, t, n) {
            return Object(ue["a"])({
                url: n ? "/deep/epub/v1/u/addbookmark?k=".concat(n, "&memberId=").concat(t) : "/deep/epub/v1/u/addbookmark?memberId=".concat(t),
                method: "post",
                data: e
            })
        }
        function be(e, t, n) {
            return Object(ue["a"])({
                url: n ? "/deep/epub/v1/u/delbookmark?k=".concat(n, "&memberId=").concat(t) : "/deep/epub/v1/u/delbookmark?memberId=".concat(t),
                method: "post",
                data: e
            })
        }
        function ve(e, t, n) {
            return Object(ue["a"])({
                url: n ? "/deep/epub/v1/read/setlastread?k=".concat(n, "&memberId=").concat(t) : "/deep/epub/v1/read/setlastread?memberId=".concat(t),
                method: "post",
                data: e
            })
        }
        function we(e, t, n, i) {
            var o = "";
            return o = t ? i ? "/deep/epub/v1/note/list?k=".concat(i, "&bid=").concat(e, "&volume_no=").concat(t, "&memberId=").concat(n) : "/deep/epub/v1/note/list?bid=".concat(e, "&volume_no=").concat(t, "&memberId=").concat(n) : i ? "/deep/epub/v1/note/list?k=".concat(i, "&bid=").concat(e, "&memberId=").concat(n) : "/deep/epub/v1/note/list?bid=".concat(e, "&memberId=").concat(n),
            Object(ue["a"])({
                url: o,
                method: "get"
            })
        }
        function ye(e, t, n, i, o) {
            var r = "";
            return r = t ? o ? "/deep/epub/v1/note/add?bid=".concat(e, "&k=").concat(o, "&volume_no=").concat(t) : "/deep/epub/v1/note/add?bid=".concat(e, "&volume_no=").concat(t) : o ? "/deep/epub/v1/note/add?bid=".concat(e, "&k=").concat(o) : "/deep/epub/v1/note/add?bid=".concat(e),
            Object(ue["a"])({
                url: r,
                method: "post",
                data: i
            })
        }
        function ke(e, t, n) {
            var i = "/deep/epub/v1/note/update";
            return i = t ? n ? "".concat(i, "?k=").concat(t, "&nid=").concat(n) : "".concat(i, "?k=").concat(t) : n ? "".concat(i, "?nid=").concat(n) : i,
            Object(ue["a"])({
                url: i,
                method: "post",
                data: e
            })
        }
        function _e(e, t) {
            return Object(ue["a"])({
                url: t ? "/deep/epub/v1/note/del?k=".concat(t) : "/deep/epub/v1/note/del",
                method: "post",
                data: e
            })
        }
        function Oe(e, t, n, i, o, r) {
            var a = "";
            return a = n ? "/v2/search/searchEpub?bid=".concat(e, "&volume_no=").concat(n) : "/v2/search/searchEpub?bid=".concat(e),
            i && (a = "".concat(a, "&chapterId=").concat(i)),
            o && (a = "".concat(a, "&chapterPn=").concat(o)),
            r && (a = "".concat(a, "&chapterSize=").concat(r)),
            a = "".concat(a, "&kw=").concat(encodeURIComponent(t)),
            Object(ue["a"])({
                url: a,
                method: "get"
            })
        }
        function xe(e, t) {
            var n = "/deep/epub/v1/note/copy?k=".concat(t);
            return Object(ue["a"])({
                url: n,
                method: "post",
                params: e
            })
        }
        function Ce(e, t, n) {
            var i = {};
            return i.bid = e,
            i.type = t,
            i.volume = n,
            Object(ue["a"])({
                method: "get",
                url: "/deep/v1/digit/qrcode",
                params: i
            })
        }
        function je(e, t, n) {
            var i = {
                bid: e,
                pnum: t,
                k: n
            };
            return Object(ue["a"])({
                url: "/deep/page/once/get",
                method: "get",
                params: i
            })
        }
        function Te(e, t, n, i, o, r) {
            var a = {};
            return a.bid = e,
            a.pnum = t,
            a.id = n,
            a.type = i,
            r ? a.download = 1 : delete a.download,
            a.k = o,
            Object(ue["a"])({
                method: "get",
                url: "/deep/v1/res/preview",
                params: a
            })
        }
        function Se(e, t) {
            return ue["a"].post("/deep/read/v1/record/save?k=".concat(t), e)
        }
        function Le(e, t, n) {
            var i = "/deep/read/v1/record?type=2&bid=".concat(e, "&k=").concat(n);
            return t && (i = "".concat(i, "&volume=").concat(t)),
            Object(ue["a"])({
                method: "get",
                url: i
            })
        }
        n("e82a");
        function Ie(e, t) {
            var n = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = Ne(e)) || t && e && "number" === typeof e.length) {
                    n && (e = n);
                    var i = 0
                      , o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var r, a = !0, s = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return a = e.done,
                    e
                },
                e: function(e) {
                    s = !0,
                    r = e
                },
                f: function() {
                    try {
                        a || null == n.return || n.return()
                    } finally {
                        if (s)
                            throw r
                    }
                }
            }
        }
        function Ne(e, t) {
            if (e) {
                if ("string" === typeof e)
                    return Pe(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Pe(e, t) : void 0
            }
        }
        function Pe(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++)
                i[n] = e[n];
            return i
        }
        function Ee(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t && (i = i.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, i)
            }
            return n
        }
        function De(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Ee(Object(n), !0).forEach((function(t) {
                    Object(f["a"])(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ee(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Ae = n("f172")
          , Me = function e(t) {
            if (!t || "BODY" == t.tagName)
                return "";
            if (t.getAttribute("data-pnum"))
                return t.getAttribute("data-pnum");
            if (!t.previousElementSibling) {
                var n = t.parentNode;
                return e(n)
            }
            return t.previousElementSibling ? e(t.previousElementSibling) : ""
        }
          , Re = {
            name: "Epub",
            components: {
                "resource-list": ne,
                "book-cat-tree": Q,
                "read-warning": ie["a"],
                "other-read-warning": oe["a"],
                "el-image-viewer": function() {
                    return n.e("chunk-b1f7335c").then(n.bind(null, "02e3"))
                }
            },
            sockets: {
                connect: function() {},
                message: function(e) {}
            },
            data: function() {
                return {
                    isOwnLineHeight: !1,
                    isLFixed: !0,
                    isAllowInfeed: !1,
                    isReservedBlank: !1,
                    markIcon: "icon-bookmark2",
                    isShowFilterColor: !1,
                    countTime: Date.parse(new Date) / 1e3,
                    isfullToChange: !1,
                    resizeTimer: null,
                    turnPageTimer: null,
                    isReadRecord: !0,
                    isinitStorage: !1,
                    pnum: 1,
                    htmlProgress: 0,
                    chapterProgress: 0,
                    currentPagePnum: 1,
                    isPrevPage: !1,
                    iframeSizeObj: {
                        scrollHeight: 0,
                        scrollWidth: 0,
                        clientHeight: 0,
                        clientWidth: 0
                    },
                    themeName: "theme1",
                    isSecond: !1,
                    isSecondContainer: !1,
                    isNeedLoad: !0,
                    nowRealPageId: 1,
                    srcListId: [],
                    isLoaded: !1,
                    isShowLoadImg: !1,
                    isShowLoadDivImg: !0,
                    isShowMobileMenu: !1,
                    searchTotalrecord: 0,
                    isAlreadySearch: !1,
                    searchActiveIndex: "",
                    searchKw: "",
                    searchTextSn: -99,
                    searchParentId: 0,
                    resizeToEle: null,
                    searchOriginLength: 0,
                    searchOriginList: [],
                    searchList: [],
                    searchPageNow: 1,
                    searchPageInfo: null,
                    activedNoteIdx: null,
                    backToLastEnd: !1,
                    pageClientWidthTimer: null,
                    markWord: "",
                    noteList: [],
                    noteOrgList: [],
                    noteShowList: [],
                    noteNowList: [],
                    isWriteMark: !1,
                    markColorActive: -1,
                    markColorList: [{
                        id: 1,
                        color: "#FF784B"
                    }, {
                        id: 2,
                        color: "#FFC837"
                    }, {
                        id: 3,
                        color: "#936DFF"
                    }, {
                        id: 4,
                        color: "#38BDF8"
                    }],
                    markFilterColorList: [{
                        id: 0,
                        label: "全部",
                        color: ""
                    }, {
                        id: 1,
                        label: "",
                        color: "#FF784B"
                    }, {
                        id: 2,
                        label: "",
                        color: "#FFC837"
                    }, {
                        id: 3,
                        label: "",
                        color: "#936DFF"
                    }, {
                        id: 4,
                        label: "",
                        color: "#38BDF8"
                    }],
                    showTip: !1,
                    tipLeft: 0,
                    tipTop: 0,
                    tipText: "",
                    range: null,
                    textNodes: [],
                    idx: 0,
                    clickId: "",
                    serializeData: [],
                    activeMarkIdx: null,
                    memberId: 0,
                    realLoad: !1,
                    isdigit: "2",
                    prettifyType: "prettify1",
                    percentage: 0,
                    pagepercentage: 0,
                    inPagePercentage: 0,
                    inPagePercentageLast: 0,
                    pagePercentageTimer: null,
                    isMobile: !1,
                    markKey: "",
                    markList: [],
                    markOrgList: [],
                    orderTreeList: [],
                    orderOnePageList: [],
                    buttonShowTimer: null,
                    iframeBtnInitialized: !1,
                    fontStr: "'16'",
                    hasMorePage: !0,
                    hasSrc: "",
                    nowId: 0,
                    nowSrc: "",
                    nowContent: "",
                    nowKey: "",
                    showViewer: !1,
                    resizing: !1,
                    imageUrl: "",
                    bookInfo: {},
                    isMarkPostion: !1,
                    markFlag: !1,
                    isActive: !1,
                    styleObj: {
                        mode: 1,
                        fontsize: 16,
                        bgColor: "#F8F9F9",
                        fontstyle: 1,
                        lineHeight: 1.7,
                        lineHeightMode: 1,
                        infeed: 1
                    },
                    colorsList: ["#F8F9F9", "#EAE9E1", "#DCF0E1", "#383838"],
                    fontsizeMarks: {
                        14: "a",
                        24: "A"
                    },
                    nowStyle: {
                        mode: "",
                        fontSize: 14,
                        color: "#ffffff",
                        bgColor: "#000000"
                    },
                    apibase: "",
                    qsObj: {},
                    bid: 0,
                    pnumTo: 1,
                    duoce_num: 0,
                    fromaddress: "",
                    readlinkData: "",
                    access_token: "",
                    bookname: "",
                    author: "",
                    coverurl: "",
                    coverpath: "",
                    price: "",
                    sellprice: "",
                    canreadpages: 30,
                    canread: 1,
                    pages: 0,
                    lastReadPages: 1,
                    morebook: !1,
                    duoce_list: [],
                    totalpages: 0,
                    loadedImg: {},
                    duoceIdx: 1,
                    showHead: !0,
                    initialized: !1,
                    isIframe: !1,
                    iframeInitialized: !1,
                    ratioLoaded: !1,
                    kRetrying: !1,
                    kLastTime: "",
                    activeText: "",
                    pageLoadedArr: [],
                    pageSmallLoadedArr: [],
                    pageSmallFailArr: [],
                    pageSizeDefault: {
                        w: 500,
                        h: 1e3
                    },
                    pageSizeSpecial: {
                        1: {
                            w: 1,
                            h: 1
                        }
                    },
                    pageClientWidth: 0,
                    pageClientHeight: 0,
                    pageClientIframeHeight: 0,
                    pageRatio: 0,
                    np: 1,
                    t: 0,
                    getKtime: 0,
                    record: 0,
                    pageResize: 0,
                    pageScroll: 0,
                    input: "",
                    searchKeyWord: "",
                    mark: "",
                    mlShow: "",
                    setbarShow: !1,
                    treelist: [],
                    searchListSelected: 0,
                    loadSign: !1,
                    sdata: "",
                    tipshow: !1,
                    data: "",
                    textshow: !0,
                    sp: 1,
                    clientWidth: 0,
                    clientHeight: 0,
                    pageWidth: "",
                    imgId: "",
                    imgNaturalWidth: "",
                    pdfwidth: "",
                    isOcr: !1,
                    beenFullScreen: !1,
                    continRead: !0,
                    alyConfig: {
                        Appkey: "FFFF0N00000000007F28",
                        Scene: "nvc_activity"
                    },
                    disScroll: !1,
                    showSwipe: !1,
                    ShownPages: [],
                    num: 999999,
                    hisObj: {
                        uri: "",
                        refer: "",
                        param: {}
                    },
                    driverStatus: !1,
                    scrollBottom: 0,
                    resourceList: [],
                    dialogTableVisible: !1,
                    videoTitle: "",
                    visiblePicture: !1,
                    visibledownload: !1,
                    visibleSpeed: !1,
                    visibleAudioSpeed: !1,
                    player: null,
                    speedOptions: [{
                        value: "1",
                        label: "2.0X"
                    }, {
                        value: "2",
                        label: "1.5X"
                    }, {
                        value: "3",
                        label: "1.25X"
                    }, {
                        value: "4",
                        label: "1X"
                    }, {
                        value: "5",
                        label: "0.5X"
                    }],
                    speedValue: "1X",
                    nowPlay: {},
                    resource_list: [],
                    resourceCount: 2,
                    resourceShow: !1,
                    nowPlayId: 0,
                    showPages: !0,
                    playUrl: "",
                    isPlay: !1,
                    resourceAc: !1,
                    volume: 100,
                    visibleVolume: !1,
                    visibleVideoVolume: !1,
                    videoPlayStatus: !1,
                    typeObj: {
                        video: ["查看视频", "video2"],
                        audio: ["查看音频", "Volume"],
                        ppt: ["查看PPT", "open"],
                        doc: ["查看Word", "open"],
                        word: ["查看Word", "open"],
                        xls: ["查看Excel", "open"],
                        pdf: ["查看pdf", "open"],
                        image: ["查看图片", "tupian"],
                        file: ["查看文档", "open"],
                        list: ["查看资源列表", "list2"],
                        other: ["查看资源", "open"],
                        url: ["查看外部资源", "open"],
                        zip: ["查看外部资源", "open"],
                        rar: ["查看外部资源", "open"]
                    },
                    bookTrans: !1,
                    isSearchLoading: !1,
                    scribingActive: 0,
                    playerArr: []
                }
            },
            computed: {
                fontstyleList: function() {
                    return [{
                        id: 1,
                        label: "简体"
                    }, {
                        id: 2,
                        label: "繁体"
                    }]
                },
                modeList: function() {
                    return [{
                        id: 1,
                        label: "默认"
                    }, {
                        id: 2,
                        label: "护眼模式"
                    }, {
                        id: 3,
                        label: "夜间模式"
                    }]
                },
                infeedList: function() {
                    return [{
                        id: 1,
                        label: "单栏"
                    }, {
                        id: 2,
                        label: "双栏"
                    }]
                },
                lineHeightList: function() {
                    return [{
                        id: 1,
                        label: "默认",
                        classname: "lh-default"
                    }, {
                        id: 2,
                        label: "",
                        classname: "lh-fixed"
                    }, {
                        id: 3,
                        label: "自定义",
                        classname: "lh-custom"
                    }]
                },
                userUidPy: function() {
                    return this.$store.state.myinfo.uid << 6
                },
                isShuju: function() {
                    return location.hostname.match(/wqbook\.|wqshuju\./)
                }
            },
            watch: {
                clientHeight: function(e, t) {
                    this.isMarkPostion = !0
                },
                pageClientWidth: function(e, t) {
                    var n = this;
                    this.isMarkPostion = !1;
                    var i = window.frames["iFrame"]
                      , o = i.contentWindow || i.contentDocument
                      , r = o.document;
                    if (clearTimeout(this.pageClientWidthTimer),
                    this.pageClientWidthTimer = setTimeout((function() {
                        n.isMarkPostion = !0
                    }
                    ), 1e3),
                    2 === this.styleObj.infeed)
                        for (var a = o.document.getElementsByTagName("img"), s = 0; s < a.length; s++) {
                            var l = a[s].clientWidth
                              , c = a[s].clientHeight
                              , d = a[s].offsetLeft
                              , m = a[s].parentNode.children[1];
                            m && m.style && (m.style.height = c + "px",
                            m.style.width = l + "px",
                            m.style.left = d + "px")
                        }
                    if (this.resizeToEle) {
                        var u = null
                          , p = r.getElementsByTagName("body")[0].children;
                        u = p[this.resizeToEle],
                        2 === this.styleObj.infeed ? u && u.offsetLeft && o.gotoMark(u.offsetLeft) : u && u.offsetTop && document.getElementById("scroll").scrollTo(0, u.offsetTop)
                    }
                },
                iframeSizeObj: function(e) {
                    if (e.scrollHeight > 0) {
                        var t = window.frames["iFrame"]
                          , n = t.contentWindow || t.contentDocument
                          , i = n.document.body
                          , o = this.iframeSizeObj;
                        1 == Number(this.styleObj.infeed) ? (this.totalpages = Math.ceil(o.scrollHeight / o.clientHeight),
                        t.style.height = o.scrollHeight + "px") : (this.totalpages = Math.ceil(o.scrollWidth / o.clientWidth),
                        t.style.height = "100%",
                        t.style.minHeight = "auto",
                        i.classList.add("body-smooth"),
                        n.document.documentElement.classList.add("body-smooth"))
                    }
                },
                realLoad: function(e) {
                    var t = this;
                    if (e) {
                        var n = window.frames["iFrame"]
                          , i = n.contentWindow || n.contentDocument
                          , o = i.document.body
                          , r = this.iframeSizeObj;
                        if (1 == Number(this.styleObj.infeed) ? (this.totalpages = Math.ceil(r.scrollHeight / r.clientHeight),
                        n.style.height = r.scrollHeight > 0 ? r.scrollHeight + "px" : r.clientHeight + "px") : (this.totalpages = Math.ceil(r.scrollWidth / r.clientWidth),
                        n.style.height = "100%",
                        n.style.minHeight = "auto",
                        o.classList.add("body-smooth"),
                        i.document.documentElement.classList.add("body-smooth")),
                        this.isPrevPage)
                            this.isPrevPage = !1,
                            this.turnPage(this.totalpages);
                        else if (this.isReadRecord)
                            this.turnPage(this.htmlProgress / 100),
                            this.htmlProgress = 0,
                            this.isReadRecord = !1;
                        else if (window.anchor) {
                            var a = i.document.querySelector(window.anchor);
                            if (!a && window.anchor.indexOf("#sw") > -1) {
                                var s = window.anchor.split("#sw").slice(-1)[0];
                                a = i.document.querySelectorAll('[data-sn="' + s + '"]')[0]
                            }
                            2 == Number(this.styleObj.infeed) ? this.turnPage(a.offsetLeft / r.scrollWidth) : this.$nextTick((function() {
                                t.turnPage(a.offsetTop / r.scrollHeight)
                            }
                            )),
                            window.anchor = ""
                        } else
                            this.turnPage(0)
                    }
                },
                initialized: function(e) {
                    e && this.initPageFn()
                },
                totalpages: function(e, t) {},
                styleObj: {
                    handler: function(e, t) {
                        var n = this;
                        this.fontStr = "'".concat(e.fontsize, "'"),
                        this.$nextTick((function() {
                            if (-9 == e.lineHeight)
                                return !1;
                            var t = window.frames["iFrame"]
                              , i = t.contentWindow || t.contentDocument
                              , o = i.document;
                            switch (o.body.style.fontSize = e.fontsize + "px",
                            e.bgColor) {
                            case "#F8F9F9":
                                n.prettifyType = "prettify1";
                                break;
                            case "#EAE9E1":
                                n.prettifyType = "prettify2";
                                break;
                            case "#DCF0E1":
                                n.prettifyType = "prettify3";
                                break;
                            case "#383838":
                                n.prettifyType = "prettify4";
                                break
                            }
                            var r = o.getElementById("prettifyLink");
                            r && (r.href = "/deep/static/epub/vendor/prettify/".concat(n.prettifyType, ".css"))
                        }
                        )),
                        this.isinitStorage && this.cacheData(),
                        this.isinitStorage = !0
                    },
                    deep: !0
                }
            },
            created: function() {
                var e = Object(v["a"])(regeneratorRuntime.mark((function e() {
                    var t, n, i, o, r, a, s, l, c, d, m, u, p, h = this;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                if ((" " + document.cookie).indexOf(" gidf=") && _(),
                                t = new Ae({
                                    b: 1024
                                }),
                                t.setOptions({
                                    encryptionScheme: "pkcs1"
                                }),
                                n = t.exportKey("pkcs8-public"),
                                i = t.exportKey("pkcs8-private"),
                                this.pubkey = window.btoa(n),
                                this.prikey = window.btoa(i),
                                o = new se["a"],
                                !o.get("styleStr")) {
                                    e.next = 22;
                                    break
                                }
                                r = o.get("styleStr"),
                                this.styleObj = JSON.parse(r),
                                e.t0 = this.styleObj.bgColor,
                                e.next = "#EAE9E1" === e.t0 ? 14 : "#DCF0E1" === e.t0 ? 16 : "#383838" === e.t0 ? 18 : 20;
                                break;
                            case 14:
                                return this.themeName = "theme2",
                                e.abrupt("break", 22);
                            case 16:
                                return this.themeName = "theme3",
                                e.abrupt("break", 22);
                            case 18:
                                return this.themeName = "theme4",
                                e.abrupt("break", 22);
                            case 20:
                                return this.themeName = "theme1",
                                e.abrupt("break", 22);
                            case 22:
                                return sessionStorage.removeItem("grList"),
                                sessionStorage.removeItem("playerArr"),
                                "object" === ("undefined" === typeof wqClient ? "undefined" : Object(b["a"])(wqClient)) && wqClient.apibase && (this.apibase = wqClient.apibase),
                                this.qsObj = ce.a.parse(location.search.replace("?", "")),
                                a = /^([^?]*)\/([1-9]\d*)\s*[,|，]?\s*(\d*)\??.*$/.exec(location.pathname),
                                a && a[2] ? (this.hisObj.uri = a[1],
                                a[2] > 0 && (this.bid = this.qsObj.bid = +a[2],
                                a[3] > 0 ? this.pnumTo = this.qsObj.pnum = +a[3] : this.pnumTo = 1)) : (this.hisObj.uri = location.pathname,
                                this.bid = this.qsObj.bid,
                                this.pnumTo = this.qsObj.pnum),
                                this.qsObj.v && this.qsObj.v > 0 && (this.duoce_num = this.qsObj.v),
                                this.qsObj.access_token && (this.access_token = this.qsObj.access_token),
                                this.qsObj.memberId && (this.memberId = this.qsObj.memberId),
                                this.qsObj.from && (this.fromaddress = this.qsObj.from,
                                Object(de["h"])().then((function(e) {
                                    0 === e.data.errcode && (h.readlinkData = e.data.data)
                                }
                                ))),
                                this.hisObj.refer = document.referrer,
                                s = Object.assign({
                                    bid: this.bid,
                                    pnumTo: this.pnumTo
                                }, this.qsObj),
                                this.hisObj.param = JSON.stringify(s),
                                this.$store.commit("setUri", this.hisObj.uri),
                                this.$store.commit("setParam", this.hisObj.param),
                                this.$store.commit("setReferer", this.hisObj.refer),
                                e.next = 40,
                                Object(de["a"])(this.hisObj);
                            case 40:
                                return e.next = 42,
                                Object(de["g"])(Object.assign(this.hisObj, {
                                    numid: this.bid
                                }));
                            case 42:
                                if (this.bid) {
                                    e.next = 45;
                                    break
                                }
                                return this.$message.error("没有找到这本书，请关闭本页面后重新访问~"),
                                e.abrupt("return");
                            case 45:
                                return e.next = 49,
                                pe(this.bid, this.duoce_num, this.memberId);
                            case 49:
                                return l = e.sent,
                                l && l["data"] && 0 === l["data"]["errcode"] ? (l.data.data && l.data.data.token && this.socketReport(l.data.data.token),
                                this.bookInfo = l["data"]["data"],
                                this.bookname = l.data.data.name,
                                this.author = l.data.data.author,
                                this.coverurl = l.data.data.coverurl,
                                this.coverpath = l.data.data.coverpath,
                                this.price = l.data.data.price,
                                this.sellprice = l.data.data.sellprice,
                                this.canread = +l.data.data.canread,
                                this.pages = +l.data.data.pages,
                                this.isdigit = l.data.data.is_digit || "2",
                                this.canreadpages = +l.data.data.canreadpages,
                                this.percentage = Number(l.data.data.lastpage),
                                document.title = this.bookInfo["title"]) : this.$alert("很抱歉，您访问的图书不存在", "提示", {
                                    confirmButtonText: "确定",
                                    type: "error",
                                    callback: function() {
                                        window.location.href = "/"
                                    }
                                }),
                                e.next = 54,
                                Object(me["a"])(this.bid, this.duoce_num, this.morebook, this.access_token);
                            case 54:
                                return c = e.sent,
                                this.kLastTime = Date.now(),
                                c && c["data"] && 0 === c["data"]["errcode"] ? this.$store.commit("setK", c["data"]["data"]) : this.$message.error("网络请求失败，请刷新重试~"),
                                d = this.bid,
                                this.duoce_num && (d = "".concat(this.bid, ".").concat(this.duoce_num)),
                                e.next = 62,
                                he(d);
                            case 62:
                                return m = e.sent,
                                m && m["data"] && 0 === m["data"]["code"] && (this.treelist = m["data"]["data"],
                                this.treelist && this.treelist.length > 0 && (this.np = 0,
                                this.orderTreeList = [],
                                this.orderOnePageList = [],
                                this.setOrderTreeList(this.treelist),
                                this.setOrderOnePageTreeList(this.treelist))),
                                e.next = 67,
                                this.getMark("start");
                            case 67:
                                return e.next = 70,
                                this.getPercentage();
                            case 70:
                                return e.next = 73,
                                this.getNote();
                            case 73:
                                return e.next = 77,
                                Ce(this.bid, 2, this.duoce_num);
                            case 77:
                                u = e.sent,
                                p = u.data,
                                0 == p.code && (sessionStorage.setItem("grList", JSON.stringify(p.data)),
                                this.resourceList = p.data),
                                setTimeout((function() {
                                    h.isShowLoadImg = !0,
                                    setTimeout((function() {
                                        h.isShowLoadDivImg = !1
                                    }
                                    ), 600)
                                }
                                ), 200),
                                this.setPageContent(),
                                this.initialized = !0,
                                window.onresize = function() {
                                    return h.isfullToChange || (clearTimeout(h.resizeTimer),
                                    h.resizeTimer = setTimeout((function() {
                                        window.location.reload()
                                    }
                                    ), 1e3)),
                                    !1
                                }
                                ;
                            case 85:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                )));
                function t() {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            mounted: function() {
                var e = this;
                this.onHandleResize(),
                this.isMobile = /(iPhone|iPad|iPod|Android)/i.test(navigator.userAgent),
                window.isMobile = this.isMobile;
                var t = location.hostname.match(/wqbook\.|wqshuju\./);
                t ? self == top ? this.isIframe = !1 : this.isIframe = !0 : this.isIframe = !1;
                var n = this;
                document.oncontextmenu = function() {
                    event.returnValue = !1
                }
                ,
                document.onkeydown = document.onkeyup = document.onkeypress = function(e) {
                    var t = e || window.event || arguments.callee.caller.arguments[0];
                    if (t && 123 == t.keyCode)
                        return t.returnValue = !1,
                        !1
                }
                ;
                var i = navigator.userAgent;
                if (i.indexOf("Firefox") > -1) {
                    var o = /./;
                    o.toString = function() {
                        ;"on"
                    }
                } else {
                    var r = {
                        onOpen: function() {
                            alert("Console is opened")
                        },
                        onClose: function() {
                            alert("Console is closed")
                        },
                        init: function() {
                            var e = this
                              , t = document.createElement("div")
                              , n = !1;
                            Object.defineProperty(t, "id", {
                                get: function() {
                                    return n || (e.onOpen(),
                                    n = !0),
                                    !0,
                                    !0
                                }
                            })
                        }
                    };
                    r.onOpen = function() {
                        try {
                            window.open("about:blank", "_self")
                        } catch (t) {
                            var e = document.createElement("button");
                            e.onclick = function() {
                                window.open("about:blank", "_self")
                            }
                            ,
                            e.click()
                        }
                    }
                    ,
                    r.onClose = function() {
                        alert("Console is closed!!!!!")
                    }
                    ,
                    r.init()
                }
                var a = window.frames["iFrame"]
                  , s = a.contentWindow || a.contentDocument;
                if (this.styleObj.bgColor && (this.$refs["waiting-div"].style.backgroundColor = this.styleObj.bgColor),
                this.styleObj.mode) {
                    if (2 === this.styleObj.mode) {
                        var l = this.$parent.$refs["eyeMask"];
                        l.style.display = "block"
                    } else {
                        var c = this.$parent.$refs["eyeMask"];
                        c.style.display = "none"
                    }
                    if (3 === this.styleObj.mode) {
                        var d = this.$parent.$refs["nightMask"];
                        d.style.display = "block"
                    } else {
                        var m = this.$parent.$refs["nightMask"];
                        m.style.display = "none"
                    }
                    1 === this.styleObj.mode && (this.$parent.$refs["eyeMask"].display = "none",
                    this.$parent.$refs["nightMask"].display = "none")
                }
                window["vueShowMenu"] = function() {
                    e.isShowMobileMenu = !e.isShowMobileMenu
                }
                ,
                window["vueCanScroll"] = function(e) {}
                ,
                window["vueScrollEvent"] = function() {
                    e.scrollInfeedEvent()
                }
                ,
                window["vuekeyDownEvent"] = function(e) {
                    e.preventDefault()
                }
                ,
                window["vuekeyUpEvent"] = function(t) {
                    t.preventDefault(),
                    clearTimeout(e.turnPageTimer),
                    e.turnPageTimer = setTimeout((function() {
                        37 === t.which || 38 === t.which ? e.onHandleChangePage("left") : 39 !== t.which && 40 !== t.which || e.onHandleChangePage("right")
                    }
                    ), 300)
                }
                ,
                window["vueMousewheelEvent"] = function(t) {
                    clearTimeout(e.turnPageTimer),
                    e.turnPageTimer = setTimeout((function() {
                        t.wheelDelta > 0 ? e.onHandleChangePage("left") : t.wheelDelta < 0 && e.onHandleChangePage("right")
                    }
                    ), 300)
                }
                ,
                window["vueGotoPage"] = function(t) {
                    e.gotoPage(t),
                    t < 0 && (window.backToLastEnd = !0)
                }
                ,
                window["vueAddTip"] = function(t, n, i) {
                    var o = "添加划线成功！"
                      , r = "添加划线失败！"
                      , a = {
                        dataList: t
                    }
                      , s = e.$store.state.aesK
                      , l = window.btoa(s);
                    ye(e.bid, e.duoce_num, e.memberId, a, l).then((function(t) {
                        t && t["data"] && 0 === t["data"]["code"] ? (e.markColorActive = n,
                        i(!0),
                        e.$message({
                            message: o,
                            type: "success"
                        }),
                        e.getNote()) : (i(!1),
                        -100 === t["data"]["code"] ? e.onLoginAlert(t["data"]["message"]) : e.$message({
                            message: t["data"]["message"],
                            type: "error"
                        }))
                    }
                    )).catch((function(t) {
                        e.$message({
                            message: r,
                            type: "error"
                        })
                    }
                    ))
                }
                ,
                window["vueDelTip"] = function(t, n) {
                    var i = "删除划线成功！"
                      , o = "删除划线失败！"
                      , r = e.noteOrgList.filter((function(e) {
                        return e.id === t[0].id && e.pageId === t[0].pageId
                    }
                    ))
                      , a = r.map((function(e) {
                        return e.nid
                    }
                    ))
                      , s = {
                        dataList: a
                    }
                      , l = e.$store.state.aesK
                      , c = window.btoa(l);
                    _e(s, c).then((function(t) {
                        t && t["data"] && 0 === t["data"]["code"] ? (n(!0),
                        e.$message({
                            message: i,
                            type: "success"
                        }),
                        e.getNote()) : -100 === t["data"]["code"] ? e.onLoginAlert(t["data"]["message"]) : e.$message({
                            message: t["data"]["message"],
                            type: "error"
                        })
                    }
                    )).catch((function(t) {
                        e.$message({
                            message: o,
                            type: "error"
                        })
                    }
                    ))
                }
                ,
                window["vueEditTip"] = function(t, n) {
                    var i = "编辑划线成功！"
                      , o = "编辑划线失败！"
                      , r = []
                      , a = {}
                      , s = JSON.parse(localStorage.getItem("MARK_DATA"));
                    t.forEach((function(e) {
                        s.forEach((function(t) {
                            e.id == t.id && e.pageId == t.pageId && e.length == t.length && e.offset == t.offset && r.push(De(De({}, e), {}, {
                                nid: t.nid
                            }))
                        }
                        ))
                    }
                    )),
                    a.dataList = r;
                    var l = e.$store.state.aesK
                      , c = window.btoa(l);
                    ke(a, c).then((function(t) {
                        t && t["data"] && 0 === t["data"]["code"] ? (n(!0),
                        e.$message({
                            message: i,
                            type: "success"
                        }),
                        e.getNote()) : -100 === t["data"]["code"] ? e.onLoginAlert(t["data"]["message"]) : e.$message({
                            message: t["data"]["message"],
                            type: "error"
                        })
                    }
                    )).catch((function(t) {
                        e.$message({
                            message: o,
                            type: "error"
                        })
                    }
                    ))
                }
                ,
                window["vueTipWord"] = function(t) {
                    e.tipText = t
                }
                ,
                window["vueSetTipPostion"] = function(t, n, i, o, r, a) {
                    e.isMobile ? e.tipLeft = 0 : e.tipLeft = t,
                    e.tipTop = n,
                    e.showTip = i,
                    i ? o && (e.isWriteMark = !1,
                    e.markWord = o,
                    e.tipLeft = t,
                    e.tipTop = n) : (e.isWriteMark = !1,
                    e.markWord = ""),
                    a ? e.$nextTick((function() {
                        e.markColorActive = a
                    }
                    )) : e.markColorActive = -1;
                    var s = 0;
                    document.getElementsByClassName("head").length > 0 && (s = document.getElementsByClassName("head")[0].clientHeight),
                    e.tipLeft < 0 && (e.tipLeft = 0),
                    e.tipTop < s && (e.tipTop = s)
                }
                ,
                window["vueSetBookMark"] = function(t, n) {
                    e.setBookMark(t, n)
                }
                ,
                window["showIframe"] = function(t) {
                    e.iframeInitialized = t
                }
                ,
                window["setRealLoad"] = function(t, n) {
                    e.realLoad = t,
                    e.iframeSizeObj = De({}, n)
                }
                ,
                window["vueShowImg"] = function(t) {
                    e.showImg(t)
                }
                ,
                window["vueGotoAnchor"] = function(t) {
                    e.gotoAnchorById(t)
                }
                ,
                window["vueFunc"] = function() {
                    for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                        n[i] = arguments[i];
                    n && n[0] && e[n[0]] && e[n[0]](n[1])
                }
                ,
                window["vueStr"] = function(t, n) {
                    if (t && e[t])
                        return n && (e[t] = n),
                        e[t]
                }
                ,
                window.__proto__["console"] = {
                    log: function(t, n, i, o, r) {
                        if ("" == n && i)
                            r.responseTxt = e.byteToString(t);
                        else if ("" != n || i) {
                            var a = e.dpu8(n.slice(0, 16))
                              , s = i.lib.WordArray.create(n.slice(16 - n.length))
                              , l = i.enc.Base64.stringify(s)
                              , c = i.enc.Utf8.parse(a)
                              , d = i.enc.Utf8.stringify(o(l, c, {
                                mode: i.mode.ECB,
                                padding: i.pad.Pkcs7
                            })).toString()
                              , m = i.enc.Utf8.parse(d);
                            r.responseTxt = i.enc.Utf8.stringify(o(t, m, {
                                mode: i.mode.ECB,
                                padding: i.pad.Pkcs7
                            })).toString()
                        } else
                            40303 === Number(t) && e.getkAndJump();
                        var u = r.responseTxt;
                        return u
                    },
                    info: function() {
                        a.contentWindow.__proto__["object"] = {
                            src: e.nowSrc,
                            id: e.nowId,
                            content: e.nowContent,
                            realId: e.nowRealPageId,
                            srcListId: e.srcListId,
                            srcList: e.orderOnePageList,
                            key: e.pubkey,
                            prikey: e.prikey
                        },
                        a.contentWindow.__proto__["styleObj"] = e.styleObj,
                        e.iframeInitialized = !1,
                        2 !== Number(e.styleObj.infeed) ? (window.infeed = 1,
                        a.style.minHeight = "100vh") : (window.infeed = 2,
                        a.style.height = "100%",
                        a.style.minHeight = "auto",
                        e.isMobile && (a.style.height = "100vh")),
                        sessionStorage.removeItem("playerArr"),
                        sessionStorage.removeItem("galleryObj"),
                        sessionStorage.removeItem("playerObj");
                        var t = document.createElement("script");
                        t.text = H(e.styleObj, "1" == e.isdigit),
                        s.document.head.append(t),
                        document.ontouchstart = null,
                        document.ontouchmove = null,
                        document.ontouchend = null,
                        s.document.ontouchstart = null,
                        s.document.ontouchmove = null,
                        s.document.ontouchend = null
                    }
                };
                var u = document.getElementById("scroll");
                u.addEventListener("scroll", this.scrollEvent);
                a.onload = function() {
                    window["vueForLoaded"]()
                }
                ,
                window["vueSetLoaded"] = function(t) {
                    e.isLoaded = t
                }
                ,
                window["vueForLoaded"] = function() {
                    var t = s.document.body;
                    t.innerText;
                    window.resizing = null,
                    n.styleObj && n.styleObj.bgColor && (s.document.body.style.backgroundColor = n.styleObj.bgColor);
                    var i = s.document.getElementsByClassName("single-page-eles");
                    i.length > 0 && i[i.length - 1].classList.add("single-page-eles-last");
                    var o = s.document.getElementsByTagName("body")[0];
                    if (o)
                        for (var r = o.querySelectorAll("[id]"), a = JSON.stringify(e.orderOnePageList), l = 0; l < r.length; l++) {
                            var c = r[l]
                              , d = c.getAttribute("id")
                              , m = new RegExp('"id":\\d+,"pid":\\d+,"level":\\d+,"pnum":(\\d+),"label":"[^\\"]+","src":"[^\\"]+#' + d)
                              , u = a.match(m);
                            u && u[1] && (e.pnum = u[1],
                            c.setAttribute("data-pnum", u[1]))
                        }
                    n.iframeInitialized = !0,
                    s.location.hash = "",
                    s.document.oncontextmenu = function() {
                        return !1
                    }
                    ;
                    for (var p = s.document.getElementsByTagName("pre"), h = 0; h < p.length; h++) {
                        p[h].classList.add("prettyprint"),
                        p[h].classList.add("linenums");
                        var g = p[h].getElementsByTagName("code");
                        if (!g || 0 === g.length) {
                            var f = p[h].innerHTML
                              , b = document.createElement("code");
                            b.innerHTML = f,
                            p[h].innerHTML = b.outerHTML
                        }
                    }
                    for (var v = s.document.getElementsByTagName("a"), w = function(e) {
                        v[e].onclick = function() {
                            if (v[e].href) {
                                var t = "";
                                t = v[e].hash ? v[e].hash.indexOf("#") > -1 ? v[e].pathname.replace("--epub.iframe", "") + v[e].hash : v[e].pathname.replace("--epub.iframe", "") + "#" + v[e].hash : v[e].pathname.replace("--epub.iframe", "");
                                var i = n.orderTreeList.filter((function(e) {
                                    var i = n.getLastUrl(e["src"], !1)
                                      , o = n.getLastUrl(t, !1);
                                    return i === o
                                }
                                ))
                                  , o = n.orderTreeList.filter((function(e) {
                                    var i = n.getLastUrl(e["src"], !0)
                                      , o = n.getLastUrl(t, !0);
                                    return i === o
                                }
                                ))
                                  , r = -1;
                                return i.length > 0 ? r = i[0]["id"] : o.length > 0 && (r = o[0]["id"]),
                                n.jump(r, t, -1),
                                !1
                            }
                        }
                    }, y = 0; y < v.length; y++)
                        w(y);
                    var k = document.createElement("link");
                    k.href = "https://static.wqxuetang.com/static/vendor/t/font_1033834/iconfont.css",
                    k.rel = "stylesheet",
                    s.document.head.append(k);
                    var _ = document.createElement("script");
                    _.text = W,
                    s.document.head.append(_);
                    var O = document.createElement("script");
                    O.text = B,
                    s.document.head.append(O),
                    Ce(n.bid, 2, n.duoce_num).then((function(e) {
                        if (0 == e.data.code) {
                            var t = e.data.data;
                            n.resourceList = t
                        }
                    }
                    ))
                }
                ,
                window["vueGetMedia"] = function(t, n) {
                    var i = []
                      , o = {};
                    t.forEach((function(t) {
                        i.push(e.getMediaResource(t.item, t.id))
                    }
                    )),
                    Promise.all(i).then((function(e) {
                        e && e.length > 0 && (e.forEach((function(e) {
                            o = De(De({}, o), e)
                        }
                        )),
                        sessionStorage.setItem("playerObj", JSON.stringify(o)),
                        n && n())
                    }
                    ))
                }
                ,
                window["vuePlayer"] = function(t) {
                    e.videoPlayStatus = !1,
                    "video" == t.type ? e.videoPlay(t) : e.audioPlay(t)
                }
                ,
                window["vueOpen"] = function(t, n) {
                    var i;
                    n.ResourctList && (i = n.ResourctList[0].resourceId + "",
                    n.ResourctList[0].fileName,
                    n.ResourctList[0].filePath),
                    "url" == t ? window.open(n.QrCodeContent) : "image" == t ? window.open("/deep/read/player?bid=" + e.bid + "&resid=" + i + "&image=true") : window.open("/deep/read/player?bid=" + e.bid + "&resid=" + i)
                }
                ,
                window["vueResourctList"] = function(e, t) {}
                ,
                window["vueResourctMode"] = function(t) {
                    e.getMedia(t, !1)
                }
                ,
                window["vueOpenLink"] = function(e) {
                    window.open(e)
                }
                ,
                window["vueGallery"] = function(t) {
                    "image" == t.type ? e.showImg(t.cover) : e.getMedia(t, !1)
                }
                ,
                window["vueFile"] = function(t, n) {
                    "kaoshi" == t ? window.open(n) : window.open("/deep/read/player?bid=" + e.bid + "&resid=" + n)
                }
                ,
                window["vueQrcodePlay"] = function(t) {
                    e.qrcodePlay(t)
                }
                ,
                window["vueGetSearchWord"] = function() {
                    return e.searchKw
                }
                ,
                window["vueGetHxPnum"] = function(t) {
                    var n = 0;
                    n = 2 == Number(e.styleObj.infeed) ? t / e.iframeSizeObj.scrollWidth : t / e.iframeSizeObj.scrollHeight,
                    e.currentPagePnum = Math.ceil(n * e.totalpages)
                }
            },
            destroyed: function(e) {
                sessionStorage.removeItem("grList"),
                sessionStorage.removeItem("playerArr"),
                window.removeEventListener("scroll", this.scrollEvent, !0)
            },
            methods: {
                initPageFn: function() {
                    var e = this
                      , t = this;
                    if (window.computeVH = function() {
                        t.clientWidth = document.body.clientWidth || document.documentElement.clientWidth || window.innerWidth,
                        t.pageWidth = t.clientWidth - 48 - 12 - 12 - 10,
                        t.clientHeight = document.body.clientHeight || document.documentElement.clientHeight || window.innerHeight,
                        t.pageClientWidth = t.$refs.pageCover.offsetWidth,
                        t.Rt = (t.pageWidth - t.pageClientWidth + 48 + 12 + 12 + 10) / 2,
                        this.isIframe && t.__canvasWM({
                            Rt: t.Rt,
                            src: "../static/epub/img/watermark.png"
                        }),
                        t.pageClientHeight = t.pageSizeDefault["h"] * t.pageClientWidth / (t.pageSizeDefault["w"] > 0 ? t.pageSizeDefault["w"] : 1),
                        t.pageClientIframeHeight = t.clientHeight - 150
                    }
                    ,
                    window.computeVH(),
                    this.pnumTo && this.pnumTo > 1) {
                        var n = this.pnumTo;
                        this.isReadRecord = !1,
                        this.nowId = Number(n),
                        this.nowSrc = this.orderTreeList.filter((function(t) {
                            return t.id === e.nowId
                        }
                        ))[0]["src"],
                        this.pnumTo = 0,
                        delete this.qsObj.pnum
                    }
                    if (history.replaceState({}, "", this.hisObj.uri + "?" + ce.a.stringify(this.qsObj)),
                    t.treelist) {
                        var i = t.nowSrc
                          , o = t.nowId
                          , r = t.nowKey;
                        1 === o && "封面" === t.orderTreeList[0]["label"] && (t.nowId = 2,
                        t.nowSrc = t.orderTreeList[1]["src"],
                        i = t.nowSrc,
                        o = t.nowId),
                        t.jump(o, i, r)
                    }
                },
                turnPage: function(e) {
                    var t = window.frames["iFrame"]
                      , n = t.contentWindow || t.contentDocument
                      , i = n.document.body
                      , o = 1;
                    if (e < 1 ? o = Math.ceil(e * this.totalpages) : e > 1 && (o = e),
                    this.currentPagePnum = o > 0 ? o : 1,
                    2 == Number(this.styleObj.infeed)) {
                        var r = (o - 1) * this.iframeSizeObj.clientWidth;
                        i.scrollLeft = r
                    } else {
                        var a = e * this.iframeSizeObj.scrollHeight;
                        a >= 0 && document.getElementById("scroll").scrollTo(0, a)
                    }
                },
                onHandleResize: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
                      , t = document.documentElement.clientWidth || document.body.clientWidth
                      , n = document.documentElement.clientHeight || document.body.clientHeight
                      , i = n - 40
                      , o = t - 394
                      , r = o / i
                      , a = new se["a"]
                      , s = a.get("styleStr") ? JSON.parse(a.get("styleStr")) : "";
                    t >= 1280 && r > 1.19 ? (this.isAllowInfeed = !0,
                    e && (this.styleObj.infeed = s ? s.infeed : 2),
                    1 == this.styleObj.infeed ? t >= 1424 ? (this.isLFixed = !1,
                    this.isReservedBlank = !0) : (this.isLFixed = !0,
                    this.isReservedBlank = !1) : o / i > 1.5 ? (this.isLFixed = !1,
                    this.isReservedBlank = !0) : (this.isLFixed = !0,
                    this.isReservedBlank = !1)) : (this.isAllowInfeed = !1,
                    e && (this.styleObj.infeed = s ? s.infeed : 1),
                    1 == this.styleObj.infeed ? t >= 1424 ? (this.isLFixed = !1,
                    this.isReservedBlank = !0) : (this.isLFixed = !0,
                    this.isReservedBlank = !1) : o / i > 1.5 ? (this.isLFixed = !1,
                    this.isReservedBlank = !0) : (this.isLFixed = !0,
                    this.isReservedBlank = !1))
                },
                onChangeMarkIcon: function(e) {
                    this.markFlag ? this.markIcon = "over" == e ? "icon-bookmark2-2" : "icon-bookmark2" : this.markIcon = "over" == e ? "icon-bookmark2-1" : "icon-bookmark2"
                },
                onHandleMarkClick: function() {
                    this.markFlag ? this.delMark() : this.addMark()
                },
                onLoginAlert: function(e) {
                    this.$alert(e, "提示", {
                        confirmButtonText: "登录",
                        callback: function(e) {
                            if ("cancel" == e)
                                return !1;
                            window.location.href = "/login/loginon.html?refer=" + encodeURIComponent(document.URL)
                        }
                    })
                },
                onHandleCloseOLH: function() {
                    this.isOwnLineHeight = !1
                },
                onHandleScribingFilter: function(e) {
                    if (this.scribingActive = e,
                    0 == e)
                        this.noteShowList = Object(g["a"])(this.noteList);
                    else {
                        var t = this.noteList.filter((function(t) {
                            return t.lineStyleId == e
                        }
                        ));
                        this.noteShowList = Object(g["a"])(t)
                    }
                },
                playMedia: function() {
                    var e = this.player.getStatus();
                    "playing" == e ? (this.player.pause(),
                    this.videoPlayStatus = !0) : "pause" == e && (this.player.play(),
                    this.videoPlayStatus = !1)
                },
                handleClose: function() {
                    this.player && (this.player.dispose(),
                    this.player = null),
                    this.dialogTableVisible = !1,
                    this.isPlay = !1
                },
                getPlay: function(e) {
                    if ((e.target.parentNode == this.$refs.playerCon || e.target.parentNode.classList.contains("prism-big-play-btn")) && e.offsetX > 0 && e.offsetY > 0) {
                        var t = this.player.getStatus();
                        "playing" == t ? (this.player.pause(),
                        this.videoPlayStatus = !0) : "pause" == t && (this.player.play(),
                        this.videoPlayStatus = !1)
                    }
                },
                changeRe: function() {
                    this.resourceAc = !this.resourceAc
                },
                closeResource: function() {
                    this.resourceShow = !1
                },
                qrcodePlay: function(e) {
                    if (this.nowPlay = JSON.parse(JSON.stringify(e)),
                    e.ResourctList)
                        if ("list" == e.ResourctType)
                            this.nowPlayId = "",
                            this.resourceShow = !0,
                            this.resourceCount = e.ResourctList.length,
                            this.resource_list = e.ResourctList;
                        else if ("url" == e.ResourctType) {
                            var t = JSON.parse(localStorage.getItem("trustList")) || [];
                            e.QrCodeContent.includes(".wqxuetang.com") || t.length > 0 && t.findIndex((function(t) {
                                return e.QrCodeContent.includes(t.name)
                            }
                            )) > -1 ? window.open(e.QrCodeContent) : window.open("/link/" + encodeURIComponent(e.QrCodeContent))
                        } else
                            this.getMedia(e, !1);
                    else if ("url" == e.ResourctType) {
                        var n = JSON.parse(localStorage.getItem("trustList")) || [];
                        e.QrCodeContent.includes(".wqxuetang.com") || n.length > 0 && n.findIndex((function(e) {
                            return e.QrCodeContent.includes(e.name)
                        }
                        )) > -1 ? window.open(e.QrCodeContent) : window.open("/link/" + encodeURIComponent(e.QrCodeContent))
                    } else
                        this.nowPlayId = e.resourceId + "",
                        this.getMedia(e, !1)
                },
                getNewJwt: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                      , i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                      , o = JSON.parse(this.$store.state.aesK);
                    delete o.iat;
                    var r, a = JSON.stringify(o);
                    return r = i ? ae.a.sign({
                        p: t,
                        t: Date.parse(new Date),
                        b: e,
                        w: 1e3,
                        k: a,
                        resid: i
                    }, this.$store.state.jwtSecret.toString()) : ae.a.sign({
                        p: t,
                        t: Date.parse(new Date),
                        b: e,
                        w: 1e3,
                        k: a,
                        zi: n
                    }, this.$store.state.jwtSecret.toString()),
                    r
                },
                getMediaResource: function() {
                    var e = Object(v["a"])(regeneratorRuntime.mark((function e(t, n) {
                        var i, o, r, a, s, l, c, d, m, u, p, h, g, f, b, v, w, y, k, _, O, x, C, j, T, S;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return i = t.ResourctList[0].resourceId + "",
                                    o = t.ResourctList[0].fileName,
                                    r = t.ResourctList[0].filePath,
                                    a = t.ResourctType,
                                    s = this.getNewJwt(this.bid, this.np, !1, i),
                                    e.next = 4,
                                    je(this.bid, this.np, s);
                                case 4:
                                    if (l = e.sent,
                                    c = l.data,
                                    0 != c.code) {
                                        e.next = 32;
                                        break
                                    }
                                    d = c.data,
                                    m = JSON.parse(this.$store.state.aesK),
                                    u = m.i.substring(0, 16),
                                    p = window.frames["iFrame"],
                                    h = p.contentWindow["bs64"],
                                    g = h.enc.Utf8.parse(u),
                                    f = h.AES.decrypt(d, g, {
                                        mode: h.mode.ECB,
                                        padding: h.pad.Pkcs7
                                    }),
                                    b = h.enc.Utf8.stringify(f).toString(),
                                    v = JSON.parse(b),
                                    v.w = "",
                                    w = "",
                                    y = "abc",
                                    k = Object.keys(v).sort(),
                                    _ = Ie(k);
                                    try {
                                        for (_.s(); !(O = _.n()).done; )
                                            x = O.value,
                                            w += v[x] + y
                                    } catch (L) {
                                        _.e(L)
                                    } finally {
                                        _.f()
                                    }
                                    return v.xx = h.MD5(w).toString(),
                                    C = JSON.stringify(v),
                                    j = this.getRk(this.bid, this.np, C),
                                    e.next = 27,
                                    Te(this.bid, this.np, i, a, j);
                                case 27:
                                    if (T = e.sent,
                                    0 != T.data.code) {
                                        e.next = 32;
                                        break
                                    }
                                    return S = {},
                                    S[i] = {
                                        id: i,
                                        kid: n,
                                        type: a,
                                        name: o,
                                        playAuth: T.data.data,
                                        vid: r
                                    },
                                    e.abrupt("return", De({}, S));
                                case 32:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                getMedia: function(e) {
                    var t, n, i, o, r = this, a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], s = arguments.length > 2 ? arguments[2] : void 0;
                    if (e.ResourctList ? (t = e.ResourctList[0].resourceId + "",
                    n = e.ResourctList[0].fileName,
                    i = e.ResourctList[0].filePath,
                    o = e.ResourctType) : (t = e.resourceId + "",
                    n = e.fileName,
                    i = e.filePath,
                    o = e.type),
                    "pdf" == e.ResourctType || "pdf" == e.type || "other" == e.ResourctType || "other" == e.type || "word" == e.ResourctType || "word" == e.type || "excel" == e.ResourctType || "excel" == e.type || "ppt" == e.ResourctType || "ppt" == e.type || "file" == e.ResourctType || "file" == e.type || e.ResourctType && !this.typeObj[e.ResourctType] || e.type && !this.typeObj[e.type])
                        window.open("/deep/read/player?bid=" + this.bid + "&resid=" + t);
                    else if ("image" == e.ResourctType || "image" == e.type)
                        window.open("/deep/read/player?bid=" + this.bid + "&resid=" + t + "&image=true");
                    else {
                        this.videoPlayStatus = !1;
                        var l = this.getNewJwt(this.bid, this.np, !1, t);
                        je(this.bid, this.np, l).then((function(l) {
                            if (0 == l.data.code) {
                                var c = l.data.data
                                  , d = JSON.parse(r.$store.state.aesK)
                                  , m = d.i.substring(0, 16)
                                  , u = window.frames["iFrame"]
                                  , p = (u.contentWindow || u.contentDocument,
                                u.contentWindow["bs64"])
                                  , h = p.enc.Utf8.parse(m)
                                  , g = p.AES.decrypt(c, h, {
                                    mode: p.mode.ECB,
                                    padding: p.pad.Pkcs7
                                })
                                  , f = p.enc.Utf8.stringify(g).toString()
                                  , b = JSON.parse(f);
                                b.w = "";
                                var v, w = "", y = "abc", k = Object.keys(b).sort(), _ = Ie(k);
                                try {
                                    for (_.s(); !(v = _.n()).done; ) {
                                        var O = v.value;
                                        w += b[O] + y
                                    }
                                } catch (j) {
                                    _.e(j)
                                } finally {
                                    _.f()
                                }
                                b.xx = p.MD5(w).toString();
                                var x = JSON.stringify(b)
                                  , C = r.getRk(r.bid, r.np, x);
                                a ? Te(r.bid, r.np, t, o, C, a).then((function(e) {
                                    if (0 == e.data.code) {
                                        var t = e.data.data;
                                        window.open(t)
                                    }
                                }
                                )) : Te(r.bid, r.np, t, o, C).then((function(t) {
                                    if (0 == t.data.code) {
                                        var o = t.data.data
                                          , a = {
                                            name: n,
                                            vid: i,
                                            playAuth: o
                                        };
                                        "video" == e.ResourctType || "video" == e.type ? s && "function" == typeof s ? s(a) : r.videoPlay(a) : "audio" == e.ResourctType || "audio" == e.type ? s && "function" == typeof s ? s(a) : r.audioPlay(a) : window.open(o)
                                    }
                                }
                                ))
                            } else
                                40303 == l.data.code && Object(me["a"])(r.bid, r.duoce_num, r.morebook, r.access_token).then((function(t) {
                                    t && t["data"] && 0 === t["data"]["errcode"] && (r.$store.commit("setK", t["data"]["data"]),
                                    r.kRetrying = !1,
                                    r.kLastTime = Date.now(),
                                    r.qrcodePlay(e))
                                }
                                ))
                        }
                        ))
                    }
                },
                changeVolume: function() {
                    var e = this.volume / 100;
                    this.player.setVolume(e)
                },
                handleCommand: function(e) {
                    this.speedValue = e + "X",
                    this.setSpeed(e)
                },
                setSpeed: function(e) {
                    this.player.setSpeed(e)
                },
                audioPlay: function(e) {
                    this.isPlay = !0,
                    this.videoTitle = e.name,
                    this.dialogTableVisible = !1;
                    var t = document.querySelector("#audio-con");
                    this.player && this.player.dispose(),
                    t.appendChild(this.$refs.audioPla),
                    this.player = new Aliplayer({
                        id: "audio-con",
                        playauth: e.playAuth,
                        width: "100%",
                        height: "50px",
                        qualitySort: "asc",
                        format: "mp4",
                        mediaType: "audio",
                        autoplay: !0,
                        rePlay: !0,
                        playsinline: !0,
                        preload: !0,
                        controlBarVisibility: "always",
                        useH5Prism: !0,
                        skinLayout: [{
                            name: "tooltip",
                            align: "blabs",
                            x: 0,
                            y: 57
                        }, {
                            name: "controlBar",
                            align: "blabs",
                            x: 0,
                            y: 0,
                            children: [{
                                name: "progress",
                                align: "blabs",
                                x: 0,
                                y: 44
                            }, {
                                name: "timeDisplay",
                                align: "tr",
                                x: 140,
                                y: 0
                            }]
                        }],
                        vid: e.vid
                    },(function() {}
                    ))
                },
                videoPlay: function(e) {
                    var t = this;
                    this.dialogTableVisible = !0,
                    this.videoTitle = e.name,
                    this.isPlay = !1,
                    this.$nextTick((function() {
                        var n = document.querySelector("#player-con");
                        t.player && t.player.dispose(),
                        document.pictureInPictureElement && document.exitPictureInPicture(),
                        n.appendChild(t.$refs.pla),
                        t.player = new Aliplayer({
                            id: "player-con",
                            playauth: e.playAuth,
                            width: "100%",
                            height: "450px",
                            qualitySort: "asc",
                            format: "mp4",
                            mediaType: "video",
                            autoplay: !0,
                            isLive: !1,
                            rePlay: !0,
                            playsinline: !0,
                            preload: !0,
                            controlBarVisibility: "hover",
                            useH5Prism: !0,
                            skinLayout: [{
                                name: "bigPlayButton",
                                align: "blabs",
                                x: 350,
                                y: 150
                            }, {
                                name: "H5Loading",
                                align: "cc"
                            }, {
                                name: "errorDisplay",
                                align: "tlabs",
                                x: 0,
                                y: 0
                            }, {
                                name: "infoDisplay"
                            }, {
                                name: "tooltip",
                                align: "blabs",
                                x: 0,
                                y: 51
                            }, {
                                name: "thumbnail"
                            }, {
                                name: "controlBar",
                                align: "blabs",
                                x: 0,
                                y: 0,
                                children: [{
                                    name: "progress",
                                    align: "blabs",
                                    x: 0,
                                    y: 44
                                }, {
                                    name: "timeDisplay",
                                    align: "tl",
                                    x: 77,
                                    y: 0
                                }, {
                                    name: "fullScreenButton",
                                    align: "tr",
                                    x: 30,
                                    y: 12
                                }]
                            }],
                            vid: e.vid
                        },(function() {}
                        ))
                    }
                    ))
                },
                enterPicture: function() {
                    var e = this
                      , t = document.querySelector("video");
                    document.pictureInPictureElement ? document.exitPictureInPicture() : document.pictureInPictureEnabled && (t.requestPictureInPicture(),
                    this.$nextTick((function() {
                        t.addEventListener("enterpictureinpicture", (function() {
                            e.dialogTableVisible = !1
                        }
                        )),
                        t.addEventListener("leavepictureinpicture", (function() {
                            e.dialogTableVisible = !0
                        }
                        ))
                    }
                    )))
                },
                computeVH: function() {
                    var e = this;
                    this.isMarkPostion = !1,
                    clearTimeout(this.pageResize),
                    this.pageResize = setTimeout((function() {
                        window.computeVH(),
                        e.pageRatio = e.pageClientWidth / e.imgNaturalWidth
                    }
                    ), 300)
                },
                gotoNote: function(e, t) {
                    this.activedNoteIdx = t;
                    var n = this.orderTreeList.filter((function(t) {
                        return t.id === Number(e.pageId)
                    }
                    ));
                    this.nowSrc = n[0].src,
                    this.nowId = Number(e.pageId),
                    this.isReadRecord = !1,
                    this.jump(this.nowId, this.nowSrc, this.nowKey),
                    window.activedItem = e
                },
                delNoteDomInPage: function(e) {
                    var t = window.frames["iFrame"]
                      , n = t.contentWindow || t.contentDocument
                      , i = n.document
                      , o = i.getElementsByClassName("mark_id_".concat(e.id));
                    if (o.length > 0 && o[0].getAttribute("data-page-id") === e.pageId)
                        for (var r = 0; r < o.length; r++)
                            o[r].classList.remove("markLine"),
                            o[r].classList.remove("mark_head")
                },
                delNoteFromList: function(e) {
                    var t = this
                      , n = this
                      , i = this.noteOrgList.filter((function(t) {
                        return t.id === e.id && t.pageId === e.pageId
                    }
                    ))
                      , o = i.map((function(e) {
                        return e.nid
                    }
                    ))
                      , r = {
                        dataList: o
                    }
                      , a = this.$store.state.aesK
                      , s = window.btoa(a);
                    _e(r, s).then((function(i) {
                        i && i["data"] && 0 === i["data"]["code"] ? (t.$message({
                            message: "删除划线成功！",
                            type: "success"
                        }),
                        window["vueSetTipPostion"](0, 0, !1),
                        n.getNote(),
                        n.delNoteDomInPage(e)) : t.$message({
                            message: "删除划线失败！",
                            type: "error"
                        })
                    }
                    )).catch((function(e) {
                        t.$message({
                            message: "删除划线失败！",
                            type: "error"
                        })
                    }
                    ))
                },
                formatDate: function(e) {
                    return z["a"].dateFormat("YYYY-mm-dd HH:MM", 1e3 * e)
                },
                onHandleChangePage: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "right";
                    if (!this.realLoad)
                        return this.$message({
                            message: "马上加载完毕，请稍候！",
                            type: "warning"
                        }),
                        !1;
                    this.isReadRecord = !1,
                    "left" == e ? this.currentPagePnum > 1 ? (this.currentPagePnum -= 1,
                    this.turnPage(this.currentPagePnum)) : (this.gotoPage(-1),
                    this.isPrevPage = !0) : this.currentPagePnum >= this.totalpages ? (this.currentPagePnum = 1,
                    this.gotoPage(1)) : (this.currentPagePnum += 1,
                    this.turnPage(this.currentPagePnum))
                },
                arrowLeftClick: function() {
                    var e = this;
                    clearTimeout(this.turnPageTimer),
                    this.turnPageTimer = setTimeout((function() {
                        e.onHandleChangePage("left")
                    }
                    ), 300)
                },
                arrowRightClick: function() {
                    var e = this;
                    clearTimeout(this.turnPageTimer),
                    this.turnPageTimer = setTimeout((function() {
                        e.onHandleChangePage("right")
                    }
                    ), 300)
                },
                saveNote: function() {
                    var e = window.frames["iFrame"]
                      , t = e.contentWindow || e.contentDocument;
                    "划线" === this.tipText ? t.noteObj.mark(this.markColorActive, this.markWord, window.pageId) : "取消划线" === this.tipText && t.noteObj.changeMarkWord(this.markWord, this.markColorActive)
                },
                setNoteColor: function(e) {
                    this.markColorActive = e.id
                },
                onlyLine: function() {
                    var e = Object(v["a"])(regeneratorRuntime.mark((function e(t) {
                        var n, i, o, r, a, s;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.getCookie("PHPSESSID")) {
                                        e.next = 5;
                                        break
                                    }
                                    return this.onLoginAlert("请先登录"),
                                    this.tipText = "",
                                    this.showTip = !1,
                                    e.abrupt("return", !1);
                                case 5:
                                    return n = this.$store.state.aesK,
                                    i = window.btoa(n),
                                    e.next = 9,
                                    we(this.bid, this.duoce_num, this.memberId, i);
                                case 9:
                                    o = e.sent,
                                    o && o["data"] && 0 === o["data"]["code"] ? (r = window.frames["iFrame"],
                                    a = r.contentWindow || r.contentDocument,
                                    "划线" === this.tipText ? (s = window.pageId,
                                    a.noteObj.mark(t.id, "", s)) : "取消划线" === this.tipText && a.noteObj.changeMarkColor(t.id)) : -100 === o["data"]["code"] && this.onLoginAlert(o["data"]["message"]),
                                    this.tipText = "",
                                    this.showTip = !1;
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                onSearchOnline: function() {
                    var e = window.frames["iFrame"]
                      , t = e.contentWindow || e.contentDocument
                      , n = "";
                    "划线" === this.tipText ? n = t.getSelection().toString() : "取消划线" === this.tipText && (n = t.noteObj.copyMark()),
                    window.open("https://www.baidu.com/s?wd=" + n),
                    this.isShowMobileMenu = !0,
                    this.showTip = !1
                },
                closeTipDiv: function() {
                    this.isWriteMark = !1,
                    this.showTip = !1,
                    this.markColorActive = -1
                },
                openNote: function() {
                    this.isWriteMark = !this.isWriteMark
                },
                copyNote: function() {
                    var e = this;
                    if (!this.getCookie("PHPSESSID"))
                        return this.$message({
                            message: "请先登录",
                            type: "error"
                        }),
                        !1;
                    var t = this.$store.state.aesK
                      , n = window.btoa(t)
                      , i = window.frames["iFrame"]
                      , o = i.contentWindow || i.contentDocument
                      , r = "";
                    if ("划线" === this.tipText ? r = o.getSelection().toString() : "取消划线" === this.tipText && (r = o.noteObj.copyMark()),
                    r.length > 500)
                        return this.$message({
                            message: "每次最多复制500字~",
                            type: "error"
                        }),
                        !1;
                    xe({
                        bid: Number(this.bid),
                        volume: this.duoce_num,
                        copyContent: encodeURIComponent(r)
                    }, n).then((function(t) {
                        var n = t.data;
                        if (0 == n.code) {
                            var i = document.createElement("input");
                            i.setAttribute("value", r),
                            document.body.appendChild(i),
                            i.select(),
                            document.execCommand("copy"),
                            document.body.removeChild(i),
                            o.getSelection().removeAllRanges(),
                            e.showTip = !1,
                            e.$message({
                                message: "内容已复制成功！",
                                type: "success"
                            })
                        } else
                            -100 === n.code ? e.onLoginAlert(n.message) : e.$message({
                                customClass: "own-message",
                                dangerouslyUseHTMLString: !0,
                                message: '<div class="copy-error"><div class="copy-title">您今天的复制文字额度已用完哦~</div><div class="copy-content">每个用户每天允许复制10次，每次复制文字最多500字~</div></div>',
                                type: "error"
                            })
                    }
                    ))
                },
                searchNote: function() {
                    var e = window.frames["iFrame"]
                      , t = e.contentWindow || e.contentDocument
                      , n = "";
                    "划线" === this.tipText ? n = t.getSelection().toString() : "取消划线" === this.tipText && (n = t.noteObj.copyMark()),
                    this.isShowMobileMenu = !0,
                    this.input = n.length > 50 ? n.substring(0, 50) : n,
                    this.navStyle("查找", !0),
                    this.search(),
                    this.showTip = !1
                },
                delNote: function() {
                    var e = window.frames["iFrame"]
                      , t = e.contentWindow || e.contentDocument;
                    t.noteObj.cancelMark()
                },
                tipClick: function() {
                    var e = window.frames["iFrame"]
                      , t = e.contentWindow || e.contentDocument;
                    "划线" === this.tipText ? t.noteObj.mark() : "取消划线" === this.tipText && t.noteObj.cancelMark()
                },
                leaveConfirm: function() {},
                updateRecord: function() {
                    var e = Object(v["a"])(regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return t = {
                                        bid: Number(this.bid),
                                        progress: Number(this.percentage),
                                        k: this.getJwt(this.bid, this.pnumTo)["k"]
                                    },
                                    this.duoce_num && (t["volume"] = this.duoce_num),
                                    e.next = 4,
                                    ve(t, this.memberId);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                getkAndJump: function() {
                    var e = this;
                    Object(me["a"])(this.bid, this.duoce_num, this.morebook, this.access_token).then((function(t) {
                        t && t["data"] && 0 === t["data"]["errcode"] ? (e.$store.commit("setK", t["data"]["data"]),
                        e.jump(e.nowId, e.nowSrc, e.nowKey)) : e.$message.error("网络请求失败，请刷新重试~")
                    }
                    ))
                },
                setPageSrc: function(e, t) {
                    var n = e
                      , i = "";
                    if (e.indexOf("?") > -1) {
                        n = e.split("?")[0],
                        i = e.split("?")[1];
                        var o = ce.a.parse(e.split("?")[1]);
                        o["k"] && (delete o["k"],
                        i = ce.a.stringify(o))
                    }
                    var r = i + "k=" + this.getJwt(this.bid, t)["k"]
                      , a = "";
                    return a = "1" === this.morebook && this.duoce_num ? n + "?v=" + this.duoce_num + "&" + r : n + "?" + r,
                    a
                },
                getRk: function(e, t, n) {
                    var i = ae.a.sign({
                        p: t,
                        t: Date.parse(new Date),
                        b: e,
                        w: 1e3,
                        k: n
                    }, this.$store.state.jwtSecret.toString());
                    return i
                },
                getJwt: function(e, t) {
                    var n = JSON.parse(this.$store.state.aesK)
                      , i = n["iat"];
                    delete n.iat;
                    var o = JSON.stringify(n)
                      , r = ae.a.sign({
                        p: t,
                        t: Date.parse(new Date),
                        b: e,
                        w: 1e3,
                        k: o
                    }, this.$store.state.jwtSecret.toString());
                    return {
                        k: r,
                        iat: i
                    }
                },
                regetK: function(e) {
                    var t = this
                      , n = (Date.now() - this.kLastTime) / 1e3 / 60;
                    n > 5 && (this.kRetrying ? (clearTimeout(this.getKtime),
                    this.getKtime = setTimeout((function() {
                        t.regetK(e)
                    }
                    ), 500)) : (this.kRetrying = !0,
                    Object(me["a"])(this.bid, this.duoce_num, this.morebook, this.access_token).then((function(n) {
                        n && n["data"] && 0 === n["data"]["errcode"] ? (t.$store.commit("setK", n["data"]["data"]),
                        t.kRetrying = !1,
                        t.kLastTime = Date.now(),
                        "function" === typeof e && e()) : (t.kRetrying = !1,
                        t.$message.error("网络请求失败，请刷新重试~"))
                    }
                    )).catch((function() {
                        t.kRetrying = !1,
                        t.$message.error("网络请求失败，请刷新重试~")
                    }
                    ))))
                },
                cacheData: function() {
                    var e = De({}, this.styleObj)
                      , t = JSON.stringify(e)
                      , n = new se["a"];
                    n.set("styleStr", t, 5184e6)
                },
                dpu8: function(e) {
                    for (var t = "", n = 0; n < e.length; n++)
                        t += String.fromCharCode(e[n]);
                    return t
                },
                byteToString: function(e) {
                    var t = new TextDecoder("utf-8");
                    return t.decode(e)
                },
                getRealSrc: function(e, t) {
                    var n = this
                      , i = !1;
                    try {
                        e.forEach((function(e) {
                            if (e.id === t && (i = !0),
                            i && "" !== e.src)
                                throw n.nowId = e.id,
                                Error()
                        }
                        ))
                    } catch (o) {}
                },
                setOrderTreeList: function(e) {
                    var t = this;
                    e.forEach((function(e) {
                        t.orderTreeList.push(e),
                        e.children && Array.isArray(e.children) && e.children.length > 0 && t.setOrderTreeList(e.children)
                    }
                    ))
                },
                setOrderOnePageTreeList: function(e) {
                    var t = this;
                    e.forEach((function(e) {
                        0 === t.orderOnePageList.length && t.orderOnePageList.push(e);
                        var n = t.orderOnePageList[t.orderOnePageList.length - 1]["src"]
                          , i = t.getLastUrl(n, !0)
                          , o = t.getLastUrl(e["src"], !0);
                        i !== o && t.orderOnePageList.push(e),
                        e.children && Array.isArray(e.children) && e.children.length > 0 && t.setOrderOnePageTreeList(e.children)
                    }
                    ))
                },
                gotoAnchorById: function(e) {
                    var t = this.nowSrc
                      , n = this.getLastUrl(t, !0);
                    this.getNowIdbySrc(this.treelist, "".concat(n, "#").concat(e), !1)
                },
                scrollInfeedEvent: function() {
                    var e = this;
                    clearTimeout(this.pageScroll),
                    this.pageScroll = setTimeout((function() {
                        window["vueSetTipPostion"](0, 0, !1);
                        var t = window.frames["iFrame"]
                          , n = t.contentWindow || t.contentDocument
                          , i = n.document.body.scrollLeft
                          , o = n.document.body.scrollWidth;
                        if (n.getElementAnchorForInfeed && n.getElementAnchorForInfeed(),
                        n.getElementsInScreen) {
                            var r = n.getElementsInScreen(2);
                            e.setBookMark(r.topMark, r.bottomMark)
                        }
                        var a = Date.parse(new Date) / 1e3
                          , s = a - e.countTime;
                        e.countTime = a;
                        var l = i
                          , c = o
                          , d = 1 / e.orderOnePageList.length
                          , m = Math.round(l / c * d * 1e4) / 100;
                        e.htmlProgress = 0 == l ? 0 : Math.round(l / c * 1e4) / 100,
                        e.inPagePercentage = m,
                        e.percentage = Math.floor(100 * (e.pagepercentage + m)) / 100,
                        e.setReadPostion(s, (function() {
                            clearInterval(e.pagePercentageTimer)
                        }
                        ))
                    }
                    ), 1500)
                },
                setReadPostion: function(e, t) {
                    var n = {
                        type: 2,
                        bid: Number(this.bid),
                        htmlProgress: Number(this.htmlProgress),
                        readTime: e,
                        readIndex: this.nowSrc.split(".")[0],
                        progress: this.percentage
                    }
                      , i = this.$store.state.aesK
                      , o = window.btoa(i);
                    this.duoce_num && (n["volume"] = this.duoce_num),
                    Se(n, o).then((function() {
                        t && t()
                    }
                    )).catch((function() {
                        t && t()
                    }
                    ))
                },
                scrollEvent: function() {
                    var e = this;
                    clearTimeout(this.pageScroll),
                    this.pageScroll = setTimeout((function() {
                        var t = window.frames["iFrame"]
                          , n = t.contentWindow || t.contentDocument;
                        if (n.getElementAnchor && n.getElementAnchor(),
                        n.getElementsInScreen) {
                            var i = n.getElementsInScreen(1);
                            e.setBookMark(i.topMark, i.bottomMark)
                        }
                        var o = Date.parse(new Date) / 1e3
                          , r = o - e.countTime;
                        e.countTime = o;
                        var a = window.document.getElementById("scroll")
                          , s = a.scrollTop
                          , l = a.clientHeight
                          , c = window.frames["iFrame"].offsetHeight
                          , d = 1 / e.orderOnePageList.length
                          , m = Math.floor(s / c * d * 1e4) / 100;
                        e.htmlProgress = 0 == s ? 0 : Math.round(s / c * 1e4) / 100,
                        e.inPagePercentage = m,
                        e.percentage = Math.floor(100 * (e.pagepercentage + m)) / 100,
                        e.setReadPostion(r, (function() {
                            clearInterval(e.pagePercentageTimer)
                        }
                        )),
                        s + l > c ? (e.scrollBottom = s + l - c,
                        e.isIframe && e.__canvasWM({
                            Rt: e.Rt,
                            bottom: e.scrollBottom,
                            src: "../static/epub/img/watermark.png"
                        })) : (e.scrollBottom = 0,
                        e.isIframe && e.__canvasWM({
                            Rt: e.Rt,
                            bottom: e.scrollBottom,
                            src: "../static/epub/img/watermark.png"
                        }))
                    }
                    ), 1500)
                },
                gotoMark: function(e, t) {
                    this.activeMarkIdx = t;
                    var n = this.orderTreeList.filter((function(t) {
                        return t.id === e.index
                    }
                    ));
                    this.nowSrc = n[0].src,
                    this.nowId = e.index,
                    this.isReadRecord = !1,
                    this.jump(this.nowId, this.nowSrc, this.nowKey),
                    window.markElementItem = e,
                    this.markFlag = !0
                },
                refresh: function() {
                    var e = window.frames["iFrame"]
                      , t = e.contentWindow || e.contentDocument;
                    t.location.reload(!0)
                },
                getLastIdOrNot: function(e, t) {
                    if (e && e.length > 0) {
                        var n = e[e.length - 1];
                        if (!(Array.isArray(n.children) && n.children.length > 0))
                            return t !== n.id;
                        this.getLastIdOrNot(n.children, t)
                    }
                },
                gotoPage: function(e) {
                    this.hasMorePage = !1,
                    this.nowContent = "",
                    window.innerContent = "",
                    this.getNowSrcbyId(e),
                    this.hasMorePage ? this.jump(this.nowId, this.nowSrc, this.nowKey) : this.canread = 0
                },
                getNowSrcbyId: function(e) {
                    var t = this.getLastUrl(this.nowSrc, !0)
                      , n = ""
                      , i = Object(g["a"])(this.orderOnePageList)
                      , o = this.orderTreeList.length > 0 ? this.orderTreeList[this.orderTreeList.length - 1]["id"] : 0
                      , r = this.nowId;
                    while (r >= 0 && r <= o) {
                        r += e;
                        var a = i.filter((function(e) {
                            return e.id === r
                        }
                        ));
                        if (a.length > 0 && (n = this.getLastUrl(a[0].src, !0),
                        t !== n)) {
                            this.hasMorePage = !0,
                            this.nowId = a[0].id,
                            this.nowSrc = a[0].src,
                            this.nowContent = a[0].content;
                            break
                        }
                    }
                },
                getLastUrl: function(e, t) {
                    var n = e.toLowerCase();
                    if (n.indexOf("/") > -1) {
                        var i = n.split("/");
                        n = i[i.length - 1]
                    }
                    if (n.indexOf("?") > -1) {
                        var o = n.split("?");
                        n = o[0]
                    }
                    if (n.indexOf("#") > -1 && t) {
                        var r = n.split("#");
                        n = r[0]
                    }
                    return n
                },
                getNowIdbySrc: function(e, t) {
                    var n = this
                      , i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
                      , o = this.getLastUrl(t, i);
                    try {
                        e.forEach((function(e) {
                            var t = n.getLastUrl(e.src, !1);
                            if (t === o)
                                throw n.nowId = e.id,
                                n.nowSrc = e.src,
                                n.$nextTick((function() {
                                    n.$refs.bookCatTreeRef && n.$refs.bookCatTreeRef.$refs.treeX && n.$refs.bookCatTreeRef.$refs.treeX.setCurrentKey(e.id)
                                }
                                )),
                                Error();
                            e.children && Array.isArray(e.children) && e.children.length > 0 && n.getNowIdbySrc(e.children, o, i)
                        }
                        ))
                    } catch (r) {}
                },
                showImg: function(e) {
                    var t = this
                      , n = window.frames["iFrame"]
                      , i = n.src;
                    z["a"].getRealImgSrc(i, e, (function(e) {
                        "图片载入失败" !== e && (t.imageUrl = e,
                        t.showViewer = !0)
                    }
                    ))
                },
                setBookMark: function(e, t) {
                    var n = this;
                    try {
                        this.markList.forEach((function(i) {
                            if (e <= i && t > i)
                                throw n.markFlag = !0,
                                Error();
                            n.markFlag = !1
                        }
                        ))
                    } catch (i) {}
                },
                styleOver: function() {
                    var e = this;
                    this.$nextTick((function() {
                        e.isActive = !0
                    }
                    ))
                },
                styleOut: function() {
                    var e = this;
                    this.$nextTick((function() {
                        e.isActive = !1
                    }
                    ))
                },
                changeMode: function(e) {
                    this.isinitStorage = !0,
                    this.styleObj.mode = e;
                    var t = window.frames["iFrame"]
                      , n = t.contentWindow || t.contentDocument;
                    if (2 === e) {
                        var i = this.$parent.$refs["eyeMask"];
                        i.style.display = "block",
                        this.setColor(this.styleObj.bgColor)
                    } else {
                        var o = this.$parent.$refs["eyeMask"];
                        o.style.display = "none"
                    }
                    if (3 === e) {
                        var r = this.$parent.$refs["nightMask"];
                        r.style.display = "block",
                        n.document.body.style.backgroundColor = "#383838",
                        n.document.body.style.color = "#DDDDDD";
                        var a = document.createElement("style");
                        a.innerHTML = "\n          a{\n            color:#DDDDDD!important;\n          }\n        ",
                        n.document.head.append(a)
                    } else {
                        var s = this.$parent.$refs["nightMask"];
                        s.style.display = "none"
                    }
                    1 === e && (this.$parent.$refs["eyeMask"].display = "none",
                    this.$parent.$refs["nightMask"].display = "none",
                    this.setColor(this.styleObj.bgColor))
                },
                changeInfeed: function(e) {
                    this.isinitStorage = !0;
                    var t = window.frames["iFrame"]
                      , n = t.contentWindow || t.contentDocument;
                    n.document.body.children[0];
                    if (!this.isAllowInfeed && "2" == e)
                        return !1;
                    this.styleObj.infeed !== e && (this.styleObj.infeed = e,
                    this.computeVH(),
                    this.jump(this.nowId, this.nowSrc, this.nowKey))
                },
                changeLineHeightStyle: function(e) {
                    switch (this.isinitStorage = !0,
                    this.styleObj.lineHeightMode = e,
                    e) {
                    case 1:
                        this.isOwnLineHeight = !1,
                        this.styleObj.lineHeight = 1.7;
                        break;
                    case 2:
                        this.isOwnLineHeight = !1,
                        this.styleObj.lineHeight = 1.8;
                        break;
                    default:
                        this.isOwnLineHeight = !this.isOwnLineHeight;
                        break
                    }
                    var t = window.frames["iFrame"]
                      , n = t.contentWindow || t.contentDocument
                      , i = n.document.head.getElementsByTagName("style")
                      , o = Object(g["a"])(i)
                      , r = o.filter((function(e) {
                        return "lineheight" == e.getAttribute("data-type")
                    }
                    ));
                    if (2 == e)
                        if (r.length > 0)
                            r[0].innerHTML = "\n            *{\n              line-height:".concat(this.styleObj.lineHeight, "em !important;\n            }\n            body{\n              line-height:").concat(this.styleObj.lineHeight, "em !important;\n            }\n          ");
                        else {
                            var a = document.createElement("style");
                            a.setAttribute("data-type", "lineheight"),
                            a.innerHTML = "\n            *{\n              line-height:".concat(this.styleObj.lineHeight, "em !important;\n            }\n            body{\n              line-height:").concat(this.styleObj.lineHeight, "em !important;\n            }\n          "),
                            n.document.head.append(a)
                        }
                    else
                        1 == e && r.length > 0 && r[0].remove()
                },
                onHandleOwnLHChange: function(e) {
                    this.isinitStorage = !0;
                    var t = window.frames["iFrame"]
                      , n = t.contentWindow || t.contentDocument
                      , i = n.document
                      , o = i.head.getElementsByTagName("style")
                      , r = Object(g["a"])(o)
                      , a = r.filter((function(e) {
                        return "lineheight" == e.getAttribute("data-type")
                    }
                    ));
                    if (a.length > 0)
                        a[0].innerHTML = "\n            *{\n              line-height:".concat(e, "em !important;\n            }\n            body{\n              line-height:").concat(e, "em !important;\n            }\n        ");
                    else {
                        var s = document.createElement("style");
                        s.setAttribute("data-type", "lineheight"),
                        s.innerHTML = "\n            *{\n              line-height:".concat(e, "em !important;\n            }\n            body{\n              line-height:").concat(e, "em !important;\n            }\n        "),
                        n.document.head.append(s)
                    }
                },
                changeFontStyle: function(e) {
                    this.styleObj.fontstyle = e,
                    this.isinitStorage = !0;
                    var t = window.frames["iFrame"]
                      , n = t.contentWindow || t.contentDocument
                      , i = (n.document,
                    n.document.head.getElementsByTagName("style"))
                      , o = Object(g["a"])(i);
                    o.filter((function(e) {
                        return "fontstyle" == e.getAttribute("data-type")
                    }
                    ))
                },
                setColor: function(e) {
                    this.isinitStorage = !0,
                    this.styleObj.bgColor = e;
                    var t = window.frames["iFrame"]
                      , n = t.contentWindow || t.contentDocument
                      , i = Object(g["a"])(n.document.body.classList)
                      , o = ""
                      , r = i.findIndex((function(e) {
                        return e.includes("theme")
                    }
                    ));
                    this.$refs["waiting-div"].style.backgroundColor = this.styleObj.bgColor,
                    "#F8F9F9" === e ? o = "theme1" : "#EAE9E1" === e ? o = "theme2" : "#DCF0E1" === e ? o = "theme3" : "#383838" === e && (o = "theme4"),
                    this.themeName = o,
                    i.splice(r, 1, o),
                    n.document.body.className = i.join(" ")
                },
                __canvasWM: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , n = t.container
                      , i = void 0 === n ? document.getElementById("iFrameBox") : n
                      , o = t.width
                      , r = void 0 === o ? "180px" : o
                      , a = t.height
                      , s = void 0 === a ? "192px" : a
                      , l = t.textAlign
                      , c = void 0 === l ? "center" : l
                      , d = t.textBaseline
                      , m = void 0 === d ? "middle" : d
                      , u = t.font
                      , p = void 0 === u ? "20px Microsoft Yahei" : u
                      , h = t.fillStyle
                      , g = void 0 === h ? "rgba(184, 184, 184, 0.6)" : h
                      , f = t.src
                      , b = void 0 === f ? "" : f
                      , v = t.Rt
                      , w = void 0 === v ? this.Rt : v
                      , y = t.bottom
                      , k = void 0 === y ? this.scrollBottom : y
                      , _ = t.rotate
                      , O = void 0 === _ ? "30" : _
                      , x = t.zIndex
                      , C = void 0 === x ? 1e3 : x
                      , j = document.createElement("canvas");
                    j.setAttribute("width", r),
                    j.setAttribute("height", s);
                    var T = j.getContext("2d")
                      , S = new Image;
                    S.src = b,
                    T.textAlign = c,
                    T.textBaseline = m,
                    T.font = p,
                    T.fillStyle = g,
                    T.rotate(Math.PI / 180 * O);
                    var L = b
                      , I = document.querySelector(".__wm")
                      , N = I || document.createElement("div")
                      , P = "\n          position:fixed;\n          bottom:".concat(k, "px;\n          right:").concat(w, "px;\n          width:167px;\n          height:107px;\n          z-index:").concat(C, ";\n          pointer-events:none;\n          background-size:cover;\n          background-repeat:no-repeat;\n          background-image:url('").concat(L, "')");
                    N.setAttribute("style", P),
                    N.classList.add("__wm"),
                    I || (i.style.position = "relative",
                    i.insertBefore(N, i.firstChild));
                    var E = window.MutationObserver || window.WebKitMutationObserver;
                    if (E) {
                        var D = new E((function() {
                            var t = document.querySelector(".__wm");
                            (t && t.getAttribute("style") !== P || !t) && (D.disconnect(),
                            D = null,
                            e.isIframe && e.__canvasWM({
                                Rt: e.Rt,
                                bottom: e.scrollBottom,
                                src: "../static/epub/img/watermark.png"
                            }))
                        }
                        ));
                        D.observe(i, {
                            attributes: !0,
                            subtree: !0,
                            childList: !0
                        })
                    }
                },
                allsc: function() {
                    var e = document.documentElement
                      , t = e.requestFullScreen || e.webkitRequestFullScreen || e.mozRequestFullScreen || e.msRequestFullScreen;
                    if (this.beenFullScreen = !0,
                    this.isfullToChange = !0,
                    "undefined" !== typeof t && t)
                        t.call(e);
                    else if ("undefined" !== typeof window.ActiveXObject) {
                        var n = new ActiveXObject("WScript.Shell");
                        null != n && n.SendKeys("{F11}")
                    }
                    window.computeVH()
                },
                exitFull: function() {
                    var e = this
                      , t = document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.webkitExitFullscreen;
                    if (this.beenFullScreen = !1,
                    t)
                        t.call(document);
                    else if ("undefined" !== typeof window.ActiveXObject) {
                        var n = new window.ActiveXObject("WScript.Shell");
                        null !== n && n.SendKeys("{F11}")
                    }
                    window.computeVH(),
                    navigator.userAgent.toLowerCase().toString().indexOf("qqbrowser") > -1 && window.location.reload();
                    var i = setTimeout((function() {
                        clearTimeout(i),
                        e.isfullToChange = !1
                    }
                    ), 300)
                },
                getCookie: function(e) {
                    var t, n = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
                    return (t = document.cookie.match(n)) ? unescape(t[2]) : null
                },
                socketReport: function(e) {
                    var t = {
                        token: e,
                        sid: this.getCookie("PHPSESSID")
                    };
                    this.$socket.emit("message", {
                        query: t
                    })
                },
                getNote: function() {
                    var e = Object(v["a"])(regeneratorRuntime.mark((function e() {
                        var t, n, i, o, r, a = this;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return localStorage.removeItem("MARK_DATA"),
                                    e.prev = 1,
                                    t = this.$store.state.aesK,
                                    n = window.btoa(t),
                                    e.next = 6,
                                    we(this.bid, this.duoce_num, this.memberId, n);
                                case 6:
                                    i = e.sent,
                                    i && i["data"] && 0 === i["data"]["code"] && (i["data"]["data"] ? (this.noteOrgList = i["data"]["data"],
                                    this.isShowFilterColor = !0) : (this.noteOrgList = [],
                                    this.isShowFilterColor = !1),
                                    localStorage.setItem("MARK_DATA", JSON.stringify(this.noteOrgList)),
                                    this.noteShowList = [],
                                    o = [],
                                    this.noteOrgList.forEach((function(e) {
                                        o = a.noteShowList.filter((function(t) {
                                            return t.id === e.id && t.pageId === e.pageId
                                        }
                                        )),
                                        0 === o.length && a.noteShowList.push(e)
                                    }
                                    )),
                                    this.noteList = Object(g["a"])(this.noteShowList),
                                    r = window.frames["iFrame"],
                                    r.contentWindow || r.contentDocument),
                                    e.next = 13;
                                    break;
                                case 10:
                                    e.prev = 10,
                                    e.t0 = e["catch"](1);
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[1, 10]])
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                getPercentage: function() {
                    var e = Object(v["a"])(regeneratorRuntime.mark((function e() {
                        var t, n, i, o, r, a, s, l, c;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.getJwt(this.bid, this.pnumTo)["k"],
                                    t = this.$store.state.aesK,
                                    n = window.btoa(t),
                                    i = Number(this.bid),
                                    e.next = 6,
                                    Le(i, this.duoce_num, n);
                                case 6:
                                    if (o = e.sent,
                                    !o || !o.data || 0 != o.data.code) {
                                        e.next = 25;
                                        break
                                    }
                                    if (this.percentage = o.data.data,
                                    this.htmlProgress = o.data.last.htmlProgress,
                                    r = this.percentage,
                                    0 !== Number(r)) {
                                        e.next = 15;
                                        break
                                    }
                                    return this.nowSrc = this.treelist[0]["src"],
                                    this.nowId = this.treelist[0]["id"],
                                    e.abrupt("return");
                                case 15:
                                    r /= 100,
                                    a = this.orderOnePageList.length,
                                    s = 1 / a,
                                    l = Math.floor(r / s),
                                    c = r % s / s,
                                    this.inPagePercentageLast = c,
                                    this.nowSrc = this.orderOnePageList[l]["src"],
                                    this.nowId = this.orderOnePageList[l]["id"],
                                    e.next = 27;
                                    break;
                                case 25:
                                    this.nowSrc = this.treelist[0]["src"],
                                    this.nowId = this.treelist[0]["id"];
                                case 27:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                getMark: function() {
                    var e = Object(v["a"])(regeneratorRuntime.mark((function e(t, n) {
                        var i, o, r, a = this;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0,
                                    i = this.$store.state.aesK,
                                    o = window.btoa(i),
                                    e.next = 5,
                                    ge(this.bid, this.memberId, o);
                                case 5:
                                    r = e.sent,
                                    r && r["data"] && 0 === r["data"]["code"] && function() {
                                        r["data"]["data"] ? a.markOrgList = r["data"]["data"] : a.markOrgList = [];
                                        var e = []
                                          , i = [];
                                        a.orderTreeList.forEach((function(t) {
                                            e = a.markOrgList.filter((function(e) {
                                                return e.index === t.id
                                            }
                                            )),
                                            i = e.map((function(e) {
                                                return e.elementIndex
                                            }
                                            )),
                                            t.markList = i
                                        }
                                        ));
                                        for (var o = 0, s = 0, l = [], c = [], d = 0; d < a.orderOnePageList.length; d++)
                                            d < a.orderOnePageList.length - 1 ? (o = a.orderOnePageList[d]["id"],
                                            s = a.orderOnePageList[d + 1]["id"],
                                            l = a.orderTreeList.filter((function(e) {
                                                return e.id >= o && e.id < s
                                            }
                                            )),
                                            l.forEach((function(e) {
                                                c = [].concat(Object(g["a"])(c), Object(g["a"])(e.markList))
                                            }
                                            )),
                                            a.orderTreeList.forEach((function(e) {
                                                e.id >= o && e.id < s && (e.markList = c)
                                            }
                                            ))) : (o = a.orderOnePageList[d]["id"],
                                            l = a.orderTreeList.filter((function(e) {
                                                return e.id >= o
                                            }
                                            )),
                                            l.forEach((function(e) {
                                                c = [].concat(Object(g["a"])(c), Object(g["a"])(e.markList))
                                            }
                                            )),
                                            a.orderTreeList.forEach((function(e) {
                                                e.id >= o && (e.markList = c)
                                            }
                                            ))),
                                            l = [],
                                            c = [];
                                        "start" === t ? a.markList = a.orderTreeList[0]["markList"] : "in" === t ? (a.markList.push(n),
                                        a.markFlag = !0) : "out" === t && (n.forEach((function(e) {
                                            var t = a.markList.indexOf(e);
                                            t > -1 && a.markList.splice(t, 1)
                                        }
                                        )),
                                        a.markFlag = !1)
                                    }(),
                                    e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9,
                                    e.t0 = e["catch"](0);
                                case 12:
                                    this.activeMarkIdx = null;
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[0, 9]])
                    }
                    )));
                    function t(t, n) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                addMark: function() {
                    var e = this
                      , t = window.frames["iFrame"]
                      , n = t.contentWindow || t.contentDocument
                      , i = n.getMarkSnAndPostion(this.styleObj.infeed);
                    if (!i)
                        return !1;
                    var o = Me(i.ele) || this.nowId;
                    if (-1 === this.markList.indexOf(i.i)) {
                        var r = {
                            bid: Number(this.bid),
                            volume: this.duoce_num,
                            labelIdx: i.labelIdx,
                            index: Number(o),
                            elementIndex: i.i,
                            wordText: i.word,
                            type: 2
                        }
                          , a = this.$store.state.aesK
                          , s = window.btoa(a);
                        fe(r, this.memberId, s).then((function(t) {
                            0 === t["data"]["code"] ? (e.$message({
                                message: "添加书签成功",
                                type: "success"
                            }),
                            e.getMark("in", i.i)) : -100 === t["data"]["code"] ? e.onLoginAlert(t["data"]["message"]) : e.$message({
                                message: "书签添加失败，请刷新页面重试",
                                type: "error"
                            })
                        }
                        ))
                    }
                },
                delMark: function() {
                    var e = Object(v["a"])(regeneratorRuntime.mark((function e() {
                        var t, n, i, o, r, a, s, l, c, d = this;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    t = window.frames["iFrame"],
                                    n = t.contentWindow || t.contentDocument,
                                    i = 0,
                                    o = 0,
                                    r = n.getElementsInScreen(this.styleObj.infeed),
                                    i = r.topMark,
                                    o = r.bottomMark,
                                    a = [],
                                    this.markList.forEach((function(e) {
                                        e >= i && e < o && a.push(e)
                                    }
                                    )),
                                    a.length > 0 && (s = {
                                        bid: Number(this.bid),
                                        index: this.nowId,
                                        elementIndex: a,
                                        wordText: ""
                                    },
                                    l = this.$store.state.aesK,
                                    c = window.btoa(l),
                                    be(s, this.memberId, c).then((function(e) {
                                        0 === e["data"]["code"] ? (d.$message({
                                            message: "删除书签成功",
                                            type: "success"
                                        }),
                                        d.getMark("out", a)) : d.$message({
                                            message: "删除书签失败，请刷新页面重试",
                                            type: "error"
                                        })
                                    }
                                    )));
                                case 10:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                delMarkFromList: function(e) {
                    var t = this
                      , n = {
                        bid: e.bid,
                        index: e.index,
                        elementIndex: [e.elementIndex]
                    }
                      , i = this.$store.state.aesK
                      , o = window.btoa(i);
                    return be(n, this.memberId, o).then((function(n) {
                        if (0 === n["data"]["code"]) {
                            var i = window.frames["iFrame"];
                            i.contentWindow || i.contentDocument;
                            t.$message({
                                message: "删除书签成功",
                                type: "success"
                            }),
                            t.getMark("out", [e.elementIndex]),
                            t.markFlag = !1
                        } else
                            t.$message({
                                message: "删除书签失败，请刷新页面重试",
                                type: "error"
                            })
                    }
                    )),
                    !1
                },
                replaceSearchWord: function(e) {
                    var t = this.searchKeyWord;
                    return e.replaceAll(t, "<i>".concat(t, "</i>"))
                },
                getMoreSearch: function(e) {
                    var t = this.input;
                    if (e.chapterTotal <= e.child.length)
                        return !1;
                    var n = e.chapterPn + 1
                      , i = 3;
                    Oe(this.bid, t, this.duoce_num, e.rootId, n, i).then((function(t) {
                        var n = t.data;
                        if (0 === n.errcode) {
                            var i = n.data;
                            if (i.list.length > 0) {
                                var o = i.list[0].chapters;
                                o.length > 0 && o.forEach((function(t) {
                                    t.contents.length > 0 && (e.child = [].concat(Object(g["a"])(e.child), Object(g["a"])(t.contents)))
                                }
                                )),
                                e.chapterTotal = i.list[0].chapterTotal,
                                e.chapterPn = i.list[0].chapterPn,
                                e.chapterPageCount = i.list[0].chapterPageCount
                            }
                        }
                    }
                    )),
                    this.$forceUpdate()
                },
                gotoSearchItem: function(e, t, n) {
                    this.searchParentId = t,
                    this.searchTextSn = e.labelidx;
                    var i = this.orderTreeList.filter((function(e) {
                        return e.id === t
                    }
                    ));
                    if (!i)
                        return !1;
                    var o = i[0].src;
                    if (this.nowId = Number(i[0].id),
                    o.indexOf("#") > -1) {
                        var r = o.split("#")[0];
                        this.nowSrc = "".concat(r, "#sw").concat(e.labelidx)
                    } else
                        this.nowSrc = "".concat(o, "#sw").concat(e.labelidx);
                    this.isReadRecord = !1,
                    this.jump(this.nowId, this.nowSrc, this.nowKey),
                    window.searchWordIndex = e.labelidx,
                    window.searchWord = this.searchKw
                },
                goAllMoreSearch: function() {
                    if (this.searchOriginLength > this.searchList.length) {
                        this.searchPageNow = this.searchPageNow + 1;
                        var e = Object(g["a"])(this.searchOriginList);
                        this.searchList = [].concat(Object(g["a"])(this.searchList), Object(g["a"])(e.splice(0, 10 * this.searchPageNow))),
                        this.$forceUpdate()
                    }
                },
                search: function() {
                    var e = this;
                    if ("" !== this.input) {
                        this.searchKeyWord = this.input,
                        this.isAlreadySearch = !0,
                        this.searchPageNow = 1,
                        this.searchOriginLength = 0,
                        this.searchTotalrecord = 0,
                        this.searchOriginList = [],
                        this.searchList = [];
                        var t = this.input;
                        this.searchPageNow;
                        this.isSearchLoading = !0,
                        Oe(this.bid, t, this.duoce_num).then((function(t) {
                            e.isSearchLoading = !1;
                            var n = t.data;
                            if (0 === n.errcode) {
                                var i = n.data;
                                i.list.length > 0 && (i.list.forEach((function(e) {
                                    e.child = [],
                                    e.chapters.length > 0 && e.chapters.forEach((function(t) {
                                        var n;
                                        t.contents.length > 0 && (n = e.child).push.apply(n, Object(g["a"])(t.contents))
                                    }
                                    ))
                                }
                                )),
                                e.$nextTick((function() {
                                    e.searchOriginLength = i.list.length,
                                    e.searchOriginList = Object(g["a"])(i.list),
                                    e.searchList = i.list.length > 10 ? Object(g["a"])(e.searchOriginList.splice(0, 10)) : Object(g["a"])(i.list),
                                    e.searchKw = n.attribute.kw,
                                    e.searchPageInfo = i.list > 10,
                                    e.searchTotalrecord = i.pageinfo.totalrecord
                                }
                                )))
                            }
                        }
                        )).catch((function(t) {
                            e.isSearchLoading = !1
                        }
                        ))
                    } else
                        this.$message("请填写搜索内容")
                },
                loadSearchMore: function() {
                    !this.loadSign && this.sdata.pageinfo && this.sp < this.sdata.pageinfo.pagecount && (this.sp++,
                    this.search(this.sp, !1))
                },
                searchWord: function(e) {
                    this.searchListSelected = e,
                    this.jump(e),
                    this.getWord(e)
                },
                getAnchor: function(e) {
                    var t = ""
                      , n = e.split("/")
                      , i = n[n.length - 1];
                    if (i.indexOf("#") > -1) {
                        var o = i.split("#");
                        t = o[o.length - 1]
                    }
                    return t
                },
                caTreeJump: function(e, t, n) {
                    0 === this.canread && e > this.canreadpages ? this.$alert("暂无此页的阅读权限", {
                        showClose: !1
                    }) : (this.bookTrans = !0,
                    this.isReadRecord = !1,
                    this.jump(e, t, n))
                },
                setPageContent: function() {
                    var e = this;
                    try {
                        this.orderOnePageList.forEach((function(t) {
                            0 === e.canread && t["id"] > e.canreadpages ? t["canRead"] = !1 : t["canRead"] = !0,
                            {};
                            var n = t["src"]
                              , i = t["id"];
                            if (n.indexOf("#") > -1) {
                                var o = n.split("#")
                                  , r = e.setPageSrc(o[0], i);
                                t["nsrc"] = r,
                                t["anchor"] = "#".concat(o[o.length - 1])
                            } else {
                                t["anchor"] = "";
                                var a = e.setPageSrc(n, i);
                                t["nsrc"] = a
                            }
                        }
                        ))
                    } catch (t) {}
                },
                verifySrcItem: function(e) {
                    var t = -1;
                    if (e >= 0 && e < this.orderOnePageList.length) {
                        var n = this.orderOnePageList[e];
                        n["canRead"] && !n["content"] && (t = n["id"])
                    }
                    return t
                },
                getPageContent: function(e) {
                    var t = this
                      , n = this;
                    this.srcListId = [],
                    this.isNeedLoad = !1;
                    var i = -1;
                    i = this.orderOnePageList.findIndex((function(t) {
                        return t.id === e
                    }
                    ));
                    var o = [-1, 1, 2];
                    this.isLoaded || (o = [-1, 1]);
                    var r = null;
                    o.forEach((function(e) {
                        r = n.verifySrcItem(i + e),
                        r > -1 && t.srcListId.push(r)
                    }
                    ))
                },
                jump: function(e, t, n) {
                    var i = this;
                    if (this.nowContent = "",
                    this.resizeToEle = null,
                    this.playerArr = [],
                    window["vueSetTipPostion"](0, 0, !1),
                    !(0 === this.canread && e > this.canreadpages)) {
                        var o = 0
                          , r = 0;
                        try {
                            this.orderOnePageList.forEach((function(t, n) {
                                if (t.id > e)
                                    throw o = n,
                                    r = i.orderOnePageList[n - 1]["id"],
                                    i.nowContent = i.orderOnePageList[n - 1]["content"] ? i.orderOnePageList[n - 1]["content"] : "",
                                    Error();
                                if (t.id === e)
                                    throw o = n + 1,
                                    r = t.id,
                                    i.nowContent = t.content ? t.content : "",
                                    Error();
                                if (n === i.orderOnePageList.length - 1)
                                    throw o = n + 1,
                                    r = i.orderOnePageList[n]["id"],
                                    i.nowContent = i.orderOnePageList[n]["content"] ? i.orderOnePageList[n]["content"] : "",
                                    Error()
                            }
                            ))
                        } catch (b) {}
                        var a = 0
                          , s = this.orderOnePageList;
                        o > 0 && (a = (o - 1) / s.length),
                        a = Math.floor(1e4 * a) / 100,
                        this.inPagePercentage = 0,
                        this.pagepercentage = a,
                        this.percentage = a;
                        var l = window.frames["iFrame"]
                          , c = l.contentWindow || l.contentDocument
                          , d = this.nowSrc.split("/").slice(-1)[0].split("?")[0].split("#")[0]
                          , m = t.split("/").slice(-1)[0].split("?")[0].split("#")
                          , u = m[0];
                        if (m.length > 1 && (window.anchor = "#" + m[1]),
                        this.nowSrc != t && d == u) {
                            if (!window.anchor)
                                return this.turnPage(0),
                                !1;
                            var p = c.document.querySelector(window.anchor);
                            return 2 == Number(this.styleObj.infeed) ? this.turnPage(p.offsetLeft / this.iframeSizeObj.scrollWidth) : this.turnPage(p.offsetTop / this.iframeSizeObj.scrollHeight),
                            window.anchor = "",
                            !1
                        }
                        this.iframeInitialized = !1,
                        1 == Number(this.styleObj.infeed) && (l.style.height = "0px",
                        document.getElementById("scroll").scrollTo(0, 0));
                        var h = this.orderTreeList.filter((function(t) {
                            return t.id === e
                        }
                        ));
                        this.markKey = h[0].key,
                        h.length > 0 && h[0]["markList"] ? (this.markList = h[0]["markList"],
                        this.markFlag = !1) : (this.markList = [],
                        this.markFlag = !1);
                        var g = this.orderTreeList.filter((function(t) {
                            return t.id === e
                        }
                        ));
                        if (g.length > 0 && (window.pageId = r),
                        this.activeText && this.clientWidth <= 500 && this.navStyle(this.activeText),
                        -1 === t.indexOf(window.LocalAPI))
                            window.srcCom = t;
                        else {
                            var f = t.replace(window.LocalAPI, "");
                            window.srcCom = f.toLowerCase()
                        }
                        -1 !== e && (window.idCom = e),
                        -1 !== n && (window.keyCom = n),
                        this.getRealSrc(this.orderTreeList, e),
                        this.$nextTick((function() {
                            i.realLoad = !1;
                            var n = window.frames["iFrame"];
                            if (t.indexOf("#") > -1) {
                                var o = t.split("#")
                                  , r = i.setPageSrc(o[0], e);
                                -1 === t.indexOf(window.LocalAPI) ? (i.nowSrc = r,
                                n.src = window.LocalAPI + r + "--epub.iframe") : (i.nowSrc = r.replace(window.LocalAPI, ""),
                                n.src = r + "--epub.iframe")
                            } else {
                                window.anchor = "";
                                var a = i.setPageSrc(t, e);
                                -1 === t.indexOf(window.LocalAPI) ? (i.nowSrc = a,
                                n.src = window.LocalAPI + a + "--epub.iframe") : (i.nowSrc = a.replace(window.LocalAPI, ""),
                                n.src = a + "--epub.iframe")
                            }
                            i.$refs.bookCatTreeRef && i.$refs.bookCatTreeRef.$refs.treeX.setCurrentKey(i.nowId)
                        }
                        ))
                    }
                },
                queryGetALYData: function() {
                    var e = this;
                    return new Promise((function(t) {
                        setTimeout((function() {
                            try {
                                getNVCVal(),
                                t()
                            } catch (n) {
                                t(e.queryGetALYData())
                            }
                        }
                        ), 200)
                    }
                    ))
                },
                goDownload: function() {
                    window.open("/about/download")
                },
                navStyle: function(e, t) {
                    var n = window.frames["iFrame"]
                      , i = n.contentWindow || n.contentDocument
                      , o = i.getMarkSnAndPostion ? i.getMarkSnAndPostion(this.styleObj.infeed) : null;
                    o && o.i && (this.resizeToEle = o.i),
                    this.activeText !== e || t ? (this.activeText = e,
                    this.setbarShow = !0,
                    this.mlShow = e) : (this.activeText = "",
                    this.mlShow = "",
                    this.setbarShow = !1),
                    this.isLoaded
                },
                readDuoce: function(e) {
                    this.qsObj.v = e.number,
                    this.qsObj.path = e.filepath,
                    window.location.href = "?" + ce.a.stringify(this.qsObj)
                },
                set_ALY_config: function() {
                    return new Promise((function(e) {
                        window.NVC_Opt = {
                            appkey: "FFFF0N1N000000007F28",
                            scene: "ic_other",
                            renderTo: "#captcha",
                            trans: {
                                key1: "code0",
                                nvcCode: 200
                            },
                            elements: ["//img.alicdn.com/tfs/TB17cwllsLJ8KJjy0FnXXcFDpXa-50-74.png", "//img.alicdn.com/tfs/TB17cwllsLJ8KJjy0FnXXcFDpXa-50-74.png"],
                            bg_back_prepared: "//img.alicdn.com/tps/TB1skE5SFXXXXb3XXXXXXXXXXXX-100-80.png",
                            bg_front: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAMAAADY1yDdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAADUExURefk5w+ruswAAAAfSURBVFjD7cExAQAAAMKg9U9tCU+gAAAAAAAAAIC3AR+QAAFPlUGoAAAAAElFTkSuQmCC",
                            obj_ok: "//img.alicdn.com/tfs/TB1rmyTltfJ8KJjy0FeXXXKEXXa-50-74.png",
                            bg_back_pass: "//img.alicdn.com/tfs/TB1KDxCSVXXXXasXFXXXXXXXXXX-100-80.png",
                            obj_error: "//img.alicdn.com/tfs/TB1q9yTltfJ8KJjy0FeXXXKEXXa-50-74.png",
                            bg_back_fail: "//img.alicdn.com/tfs/TB1w2oOSFXXXXb4XpXXXXXXXXXX-100-80.png",
                            upLang: {
                                cn: {
                                    _ggk_guide: "请摁住鼠标左键，刮出两面盾牌",
                                    _ggk_success: "恭喜您成功刮出盾牌<br/>继续下一步操作吧",
                                    _ggk_loading: "加载中",
                                    _ggk_fail: ["呀，盾牌不见了<br/>请", "javascript:noCaptcha.reset()", "再来一次", "或", "http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN", "反馈问题"],
                                    _ggk_action_timeout: ["我等得太久啦<br/>请", "javascript:noCaptcha.reset()", "再来一次", "或", "http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN", "反馈问题"],
                                    _ggk_net_err: [" 网络实在不给力<br/>请", "javascript:noCaptcha.reset()", "再来一次", "或", "http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN", "反馈问题"],
                                    _ggk_too_fast: ["您刮得太快啦<br/>请", "javascript:noCaptcha.reset()", "再来一次", "或", "http://survey.taobao.com/survey/QgzQDdDd?token=%TOKEN", "反馈问题"]
                                }
                            }
                        },
                        e()
                    }
                    ))
                },
                get_ALY_file: function() {
                    try {
                        var e = (new Date).getTime()
                          , t = document.createElement("script");
                        t.setAttribute("type", "text/javascript"),
                        t.setAttribute("src", "https://g.alicdn.com/sd/nvc/1.1.112/guide.js?t=" + e),
                        document.documentElement.appendChild(t)
                    } catch (n) {}
                },
                showVerify: function() {
                    var e = this
                      , t = new smartCaptcha({
                        renderTo: "#sc",
                        width: "100%",
                        height: 42,
                        default_txt: "继续阅读",
                        success_txt: "继续阅读",
                        fail_txt: "验证失败，请在此点击按钮刷新",
                        scaning_txt: "智能检测中",
                        success: function(n) {
                            t.reset(),
                            Object(de["b"])(e.bid, n.sessionId, n.sig, e.duoce_num, NVC_Opt.token).then((function(t) {
                                var n = t.data.data;
                                if (100 == n.Code) {
                                    e.continueRead = !1;
                                    for (var i = 0; i < e.canreadpages; i++)
                                        i + 1 > e.np && (e.$refs["pageImgBox".concat(i + 1)][0].style.display = "block");
                                    0 === e.data.canread && e.canreadpages - e.np > 1 ? document.getElementById("readwarning").style.display = "none" : document.getElementById("readwarning").style.display = "block"
                                }
                            }
                            ))
                        },
                        fail: function() {}
                    });
                    t.init()
                }
            },
            directives: {
                loadmore: {
                    bind: function(e, t) {
                        var n;
                        e.addEventListener("scroll", (function() {
                            clearTimeout(n),
                            n = setTimeout((function() {
                                e.scrollHeight - (e.scrollTop + e.clientHeight) < 300 && t.value()
                            }
                            ), 300)
                        }
                        ))
                    }
                }
            }
        }
          , He = Re
          , Fe = (n("618b"),
        n("70e9"),
        Object(J["a"])(He, p, h, !1, null, "5c5828ad", null))
          , Be = Fe.exports
          , $e = n("3d13")
          , We = {
            name: "App",
            components: {
                Epub: Be,
                Upperlimit: $e["a"]
            },
            data: function() {
                return {
                    loading: !0,
                    readlinkData: {}
                }
            },
            watch: {},
            provide: function() {
                return {
                    reload: this.reload
                }
            },
            created: function() {
                var e = this;
                this.$http.all([Object(de["f"])(), Object(de["c"])()]).then(this.$http.spread((function(t, n) {
                    var i = t.data
                      , o = !!(i.data.id > 0 && !0 === i.data.ismain)
                      , r = !!(i.data.id > 0 && !1 === i.data.ismain);
                    0 === i.errcode ? (e.$store.commit("inip", i.data.inip),
                    e.$store.commit("webfurl", i.data.furl),
                    e.$store.commit("webid", i.data.id),
                    e.$store.commit("head_knowledge", i.data.type),
                    e.$store.commit("webip", i.data.ip),
                    e.$store.commit("ismain", i.data.ismain),
                    e.$store.commit("lbname", i.data.name),
                    e.$store.commit("ismainToggle", o),
                    e.$store.commit("webBranch", r),
                    e.$store.state.inip || Object(de["d"])().then((function(t) {
                        0 === t.data.errcode && e.$store.commit("ipstatus", t.data.data.ispermis)
                    }
                    ))) : e.$message.error("网络错误，请稍后重试~");
                    var a = n.data;
                    0 === a.errcode && a.data.uid > 0 ? (e.$store.commit("login", !0),
                    e.$store.commit("user", a.data),
                    e.$store.commit("ispublic", a.data),
                    e.$store.commit("loginAlert", 1)) : (e.$store.commit("login", !1),
                    e.$store.commit("loginAlert", 0)),
                    e.loading = !1
                }
                ))).catch((function(e) {
                    alert("服务器错误，请重试")
                }
                )),
                Object(de["e"])(this.fromaddress).then((function(t) {
                    if (t = t.data,
                    0 === t.errcode) {
                        var n = t.data.links;
                        e.$store.commit("setHeaderLink", n),
                        e.$store.commit("setLogoUrl", t.data.logo)
                    }
                }
                ))
            },
            methods: {
                reload: function() {
                    var e = this;
                    this.loading = !0,
                    this.$nextTick((function() {
                        return e.loading = !1
                    }
                    ))
                }
            }
        }
          , ze = We
          , qe = (n("e1ed"),
        Object(J["a"])(ze, m, u, !1, null, null, null))
          , Xe = qe.exports
          , Ve = n("763e")
          , Ke = n("c55d");
        window.LocalAPI = "/deep/epub/read/",
        i["default"].prototype.$util = z["a"],
        i["default"].prototype.$BAJSON = Ke["a"],
        i["default"].prototype.$http = i["default"].prototype.$apiwq = ue["a"],
        Array.isArray = z["a"].isArray,
        Array.diff = z["a"].arrayDiff;
        var Je = location.hostname.match(/wqbook.wqxuetang|wqshuju\./);
        Je || i["default"].use(new l.a({
            connection: d()("//" + window.location.host + "/w2/concurrent", {
                path: "/w2",
                forceNew: !0
            })
        })),
        i["default"].config.productionTip = !1;
        new i["default"]({
            store: Ve["a"],
            render: function(e) {
                return e(Xe)
            }
        }).$mount("#app")
    },
    5425: function(e, t, n) {},
    "618b": function(e, t, n) {
        "use strict";
        n("c84e")
    },
    "70e9": function(e, t, n) {
        "use strict";
        n("5425")
    },
    "7e89": function(e, t, n) {},
    "94c2": function(e, t, n) {},
    a0b4: function(e, t, n) {
        "use strict";
        n("94c2")
    },
    b999: function(e, t, n) {},
    c759: function(e, t, n) {
        "use strict";
        n("b999")
    },
    c84e: function(e, t, n) {},
    e1ed: function(e, t, n) {
        "use strict";
        n("7e89")
    }
});
