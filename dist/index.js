/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@hummer/tenon-dev-tool/dist/tenon-dev-tool.es.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@hummer/tenon-dev-tool/dist/tenon-dev-tool.es.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "run": () => (/* binding */ run)
/* harmony export */ });
const NODE_VIEW = "Symbol(NODE_VIEW)";
const NODE_TEXT = "Symbol(NODE_TEXT)";
const NODE_IMAGE = "Symbol(NODE_IMAGE)";
const NODE_BUTTON = "Symbol(NODE_BUTTON)";
const NODE_TEXTAREA = "Symbol(NODE_TEXTAREA)";
const NODE_INPUT = "Symbol(NODE_INPUT)";
const NODE_SWITCH = "Symbol(NODE_SWITCH)";
const NODE_SCROLLER = "Symbol(NODE_SCROLLER)";
const NODE_REFRESH = "Symbol(NODE_REFRESH)";
const NODE_LOADMORE = "Symbol(NODE_LOADMORE)";
const HUMMER_VIEW = 'View';
const HUMMER_TEXT = 'Text';
const HUMMER_BUTTON = 'Button';
const HUMMER_IMAGE = 'Image';
const HUMMER_INPUT = 'Input';
const HUMMER_TEXTAREA = 'TextArea';
const HUMMER_SWITCH = 'Switch';
const HUMMER_LOADING = 'Loading';
const HUMMER_SCROLLER = 'Scroller';
const HUMMER_HORIZONTALSCROLLER = 'HorizontalScroller';
const HUMMER_LIST = 'List';
const HUMMER_VIEWPAGER = 'ViewPager';
const HUMMER_DIALOG = 'Dialog';
function getElementTagMap() {
    let tagMap = new Map();
    tagMap.set(NODE_VIEW, 'view');
    tagMap.set(NODE_TEXT, 'text');
    tagMap.set(NODE_IMAGE, 'image');
    tagMap.set(NODE_BUTTON, 'button');
    tagMap.set(NODE_TEXTAREA, 'textarea');
    tagMap.set(NODE_INPUT, 'input');
    tagMap.set(NODE_SWITCH, 'switch');
    tagMap.set(NODE_SCROLLER, 'scroller');
    tagMap.set(NODE_REFRESH, 'refresh');
    tagMap.set(NODE_LOADMORE, 'loadmore');
    tagMap.set(HUMMER_VIEW, 'view');
    tagMap.set(HUMMER_TEXT, 'text');
    tagMap.set(HUMMER_BUTTON, 'button');
    tagMap.set(HUMMER_IMAGE, 'image');
    tagMap.set(HUMMER_INPUT, 'input');
    tagMap.set(HUMMER_TEXTAREA, 'textarea');
    tagMap.set(HUMMER_SWITCH, 'switch');
    tagMap.set(HUMMER_LOADING, 'loading');
    tagMap.set(HUMMER_SCROLLER, 'scroller');
    tagMap.set(HUMMER_HORIZONTALSCROLLER, 'horizontalscroller');
    tagMap.set(HUMMER_LIST, 'list');
    tagMap.set(HUMMER_VIEWPAGER, 'viewpager');
    tagMap.set(HUMMER_DIALOG, 'view');
    return tagMap;
}
const ELEMNT_TAG_MAP = getElementTagMap();
const getPartUrlByParam = (url, param) => {
    const reg = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
    const res = reg.exec(url);
    const fields = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'];
    return res[fields.indexOf(param)];
};
const formatNode = function (node, type = 'tenon-vue') {
    let formatedNode = Object.create({});
    const treeTraveler = function (node, rootView) {
        processView(node, rootView, type);
        if (node.children) {
            let arr = Array.from(node.children);
            if (arr.length) {
                rootView.children = Array.apply(null, new Array(arr.length)).map(() => { return {}; });
                arr.forEach((n, i) => {
                    treeTraveler(n, rootView.children[i]);
                });
            }
        }
    };
    treeTraveler(node, formatedNode);
    return formatedNode;
};
const getViewData = function (container, type = 'tenon-vue') {
    let simpleRoot = Object.create({});
    let viewMap = Object.create({});
    const treeTraveler = function (node, rootView) {
        var _a, _b, _c, _d, _e;
        if (node === null || node === void 0 ? void 0 : node.tagName) {
            node.name = node === null || node === void 0 ? void 0 : node.tagName.toLowerCase();
            node.style = (_a = node === null || node === void 0 ? void 0 : node.element) === null || _a === void 0 ? void 0 : _a._style;
            node.__view_id = (_b = node === null || node === void 0 ? void 0 : node.element) === null || _b === void 0 ? void 0 : _b.objID;
            switch (node.name) {
                case 'text':
                    node.text = (_c = node.element) === null || _c === void 0 ? void 0 : _c._text;
                    break;
                case 'image':
                    node.src = (_d = node.element) === null || _d === void 0 ? void 0 : _d._src;
                    break;
            }
        }
        rootView = Object.assign(rootView, node);
        viewMap[rootView.__view_id] = node;
        delete rootView.children;
        delete rootView.element;
        if (node.name === 'template' && node !== container) {
            if (node === null || node === void 0 ? void 0 : node.element.dbg_getDescription) {
                node === null || node === void 0 ? void 0 : node.element.dbg_getDescription((thatNode) => {
                    var _a;
                    if (thatNode === null || thatNode === void 0 ? void 0 : thatNode.children) {
                        thatNode.children.forEach((item, index) => {
                            var _a, _b;
                            thatNode.children[index].name = item === null || item === void 0 ? void 0 : item.tagName;
                            thatNode.children[index].style = (_a = item === null || item === void 0 ? void 0 : item.element) === null || _a === void 0 ? void 0 : _a._style;
                            thatNode.children[index].__view_id = (_b = item === null || item === void 0 ? void 0 : item.element) === null || _b === void 0 ? void 0 : _b.objID;
                            switch (item.name) {
                                case 'Text':
                                    thatNode.children[index].text = item.element._text;
                                    break;
                                case 'Image':
                                    thatNode.children[index].src = item.element._src;
                                    break;
                            }
                        });
                        node.children = thatNode.children;
                    }
                    node.name = thatNode.tagName.toLowerCase();
                    rootView.name = node.name;
                    if (node.children && node.children.length > 0) {
                        rootView.children = Array.apply(null, new Array(((_a = node === null || node === void 0 ? void 0 : node.children) === null || _a === void 0 ? void 0 : _a.length) || 0)).map(() => { return {}; });
                        let arr = Array.from(node.children);
                        arr.forEach((n, i) => {
                            treeTraveler(n, rootView.children[i]);
                        });
                    }
                });
            }
        }
        else {
            if (node.children && node.children.length > 0) {
                rootView.children = Array.apply(null, new Array(((_e = node === null || node === void 0 ? void 0 : node.children) === null || _e === void 0 ? void 0 : _e.length) || 0)).map(() => { return {}; });
                let arr = Array.from(node.children);
                arr.forEach((n, i) => {
                    treeTraveler(n, rootView.children[i]);
                });
            }
        }
    };
    treeTraveler(container, simpleRoot);
    return {
        simpleRoot,
        viewMap
    };
};
const processView = function (node, rootView, type = 'tenon-vue') {
    var _a;
    let nameKey = '__NAME', idKey = '__view_id', textKey = '_text', srcKey = '_src', elementKey = 'element', styleKey = 'style', classNameKey = 'className';
    rootView.style = node[styleKey];
    switch (type) {
        case 'hummer':
            nameKey = 'tagName';
            idKey = 'id';
            textKey = 'content';
            srcKey = 'content';
            rootView.style = node.element.style;
            break;
    }
    rootView.__view_id = node[idKey];
    rootView.name = node[nameKey] && ELEMNT_TAG_MAP.get(node[nameKey].toString()) || 'template';
    rootView.element = node[elementKey];
    rootView.className = node[classNameKey];
    ((_a = node[elementKey]) === null || _a === void 0 ? void 0 : _a.node) && (node[elementKey].node.__view_id = node[idKey]);
    switch (rootView.name) {
        case 'text':
            rootView.text = node[textKey];
            break;
        case 'image':
            rootView.src = node[srcKey];
            break;
    }
};
const updateOptions = function (oldOptions, newOptions) {
    for (const key in oldOptions) {
        if (!(key in newOptions)) {
            delete oldOptions[key];
        }
    }
    for (const key in newOptions) {
        oldOptions[key] = newOptions[key];
    }
    return oldOptions;
};
const log = function (str) {
};
const error = function (str) {
};
const guid = function () {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
};

const { __storageInterceptFlag__, Storage, Memory: Memory$1 } = __GLOBAL__;
const getAllStorage = (ws, params) => {
    let storageAll = Storage.getAll();
    let newStorageAll = [];
    for (const key in storageAll) {
        if (/_#_hummer_.*_#_/.test(key)) {
            continue;
        }
        let item = {
            key: key,
            value: storageAll[key],
        };
        newStorageAll.push(item);
    }
    sendMessage(ws, {
        type: 'storage',
        method: 'setStorageList',
        params: Object.assign(Object.assign({}, params), { storageAll: newStorageAll })
    });
};
const storageintercept = (ws) => {
    __GLOBAL__.__storageInterceptFlag__ = true;
    !__storageInterceptFlag__ && (__GLOBAL__.__storageOriginSet__ = Storage.set, __GLOBAL__.__storageOriginRemove__ = Storage.remove, __GLOBAL__.__storageOriginRemoveAll__ = Storage.removeAll);
    Storage.set = function () {
        if (Memory$1.get("_#_hummer_tenonIp_#_")) {
            sendMessage(ws, {
                type: 'storage',
                method: 'updateStorageList',
                params: {
                    tenonIp: Memory$1.get("_#_hummer_tenonIp_#_"),
                    key: arguments[0],
                    value: arguments[1],
                }
            });
        }
        __GLOBAL__.__storageOriginSet__.apply(this, arguments);
    };
    Storage.remove = function () {
        __GLOBAL__.__storageOriginRemove__.apply(this, arguments);
        if (Memory$1.get("_#_hummer_tenonIp_#_")) {
            getAllStorage(ws, { tenonIp: Memory$1.get("_#_hummer_tenonIp_#_") });
        }
    };
    Storage.removeAll = function () {
        __GLOBAL__.__storageOriginRemoveAll__.apply(this, arguments);
        if (Memory$1.get("_#_hummer_tenonIp_#_")) {
            sendMessage(ws, {
                type: 'storage',
                method: 'setStorageList',
                params: {
                    tenonIp: Memory$1.get("_#_hummer_tenonIp_#_"),
                    storageAll: []
                }
            });
        }
    };
};

const { __memoryInterceptFlag__, Memory } = __GLOBAL__;
const getAllMemory = (ws, params) => {
    let memoryAll = Memory.getAll();
    let newMemoryAll = [];
    for (const key in memoryAll) {
        if (/_#_hummer_.*_#_/.test(key)) {
            continue;
        }
        let item = {
            key: key,
            value: memoryAll[key],
        };
        newMemoryAll.push(item);
    }
    sendMessage(ws, {
        type: 'memory',
        method: 'setMemoryList',
        params: Object.assign(Object.assign({}, params), { memoryAll: newMemoryAll })
    });
};
const memoryintercept = (ws) => {
    __GLOBAL__.__memoryInterceptFlag__ = true;
    !__memoryInterceptFlag__ && (__GLOBAL__.__memoryOriginSet__ = Memory.set, __GLOBAL__.__memoryOriginRemove__ = Memory.remove, __GLOBAL__.__memoryOriginRemoveAll__ = Memory.removeAll);
    Memory.set = function () {
        if (Memory.get("_#_hummer_tenonIp_#_")) {
            sendMessage(ws, {
                type: 'memory',
                method: 'updateMemoryList',
                params: {
                    tenonIp: Memory.get("_#_hummer_tenonIp_#_"),
                    key: arguments[0],
                    value: arguments[1],
                }
            });
        }
        __GLOBAL__.__memoryOriginSet__.apply(this, arguments);
    };
    Memory.remove = function () {
        __GLOBAL__.__memoryOriginRemove__.apply(this, arguments);
        if (Memory.get("_#_hummer_tenonIp_#_")) {
            getAllMemory(ws, { tenonIp: Memory.get("_#_hummer_tenonIp_#_") });
        }
    };
    Memory.removeAll = function () {
        __GLOBAL__.__memoryOriginRemoveAll__.apply(this, arguments);
        if (Memory.get("_#_hummer_tenonIp_#_")) {
            sendMessage(ws, {
                type: 'memory',
                method: 'setMemoryList',
                params: {
                    tenonIp: Memory.get("_#_hummer_tenonIp_#_"),
                    memoryAll: []
                }
            });
        }
    };
};

const requestintercept = (ws) => {
    const { Request, __requestInterceptFlag__ } = __GLOBAL__;
    __GLOBAL__.__requestInterceptFlag__ = true;
    !__requestInterceptFlag__ && (__GLOBAL__.__requestOriginSend__ = Request.prototype.send);
    Request.prototype.send = function () {
        const requestId = guid();
        sendMessage(ws, {
            type: 'netWork',
            method: 'updateNetWorkList',
            params: {
                id: requestId,
                requestInfo: {
                    method: this.method,
                    header: this.header,
                    url: this.url,
                    param: this.param,
                },
            }
        });
        const callback = arguments[0];
        const mergeCallback = (res) => {
            sendMessage(ws, {
                type: 'netWork',
                method: 'updateNetWorkList',
                params: {
                    id: requestId,
                    responseInfo: res,
                }
            });
            callback.call(this, res);
        };
        __GLOBAL__.__requestOriginSend__.apply(this, [mergeCallback]);
    };
};

let ws, currentType;
function initSocket (url, handlers) {
    ws = new __GLOBAL__.WebSocket(url);
    ws.onopen = () => {
        log('websocket opened~');
        storageintercept(ws);
        memoryintercept(ws);
        requestintercept(ws);
    };
    ws.onmessage = (event) => {
        log(JSON.stringify(event));
        let msg = JSON.parse(event.data);
        currentType = msg.type || '';
        if (handlers[msg.method]) {
            handlers[msg.method](ws, msg.params);
        }
    };
    ws.onclose = () => {
        ws = null;
        log('websocket closed~');
    };
}
const sendMessage = function (ws, options) {
    const type = options.type || currentType;
    const method = options.method || 'ignore';
    const params = options.params || {};
    ws.send(JSON.stringify({
        type, method, params
    }));
};

let isWebPlatform = __GLOBAL__.Hummer.pageInfo && JSON.stringify(__GLOBAL__.Hummer.pageInfo) === '{}';
function run(container, type = 'tenon-vue') {
    let formatedNode = formatNode(container, type);
    log('Socket Initializing');
    const { url } = __GLOBAL__.Hummer.pageInfo || {};
    if (!url) {
        error(`get url error, initialization failed`);
        return;
    }
    const { Storage, Memory } = __GLOBAL__;
    let host = getPartUrlByParam(url, 'host');
    let port = getPartUrlByParam(url, 'port');
    let path = getPartUrlByParam(url, 'path');
    let scheme = getPartUrlByParam(url, 'scheme');
    if (!['http', 'https'].includes(scheme) || !port) {
        error(`invalid url[${url}], initialization failed`);
        return;
    }
    let wsTenonUrl = `ws://${host}:${port}/proxy/tenon`;
    if (isWebPlatform) {
        wsTenonUrl = 'ws://172.23.166.43:8000/proxy/tenon';
    }
    let viewMap = {}, viewId, view;
    const onSocketMsgHandlers = {
        'getViewTree': function (ws, params) {
            var _a;
            let data = getViewData(formatedNode, type);
            viewMap = data.viewMap;
            if ((_a = formatedNode === null || formatedNode === void 0 ? void 0 : formatedNode.element) === null || _a === void 0 ? void 0 : _a.dbg_getDescription) {
                formatedNode.element.dbg_getDescription((node) => {
                    sendMessage(ws, {
                        method: 'setViewTree',
                        params: Object.assign(Object.assign({}, params), { viewTree: [data.simpleRoot], path: path, baseInfo: __GLOBAL__.Hummer.env, devToolType: type })
                    });
                });
            }
            else {
                sendMessage(ws, {
                    method: 'setViewTree',
                    params: Object.assign(Object.assign({}, params), { viewTree: [data.simpleRoot], path: path, baseInfo: __GLOBAL__.Hummer.env, devToolType: type })
                });
            }
        },
        'getViewInfo': function (ws, params) {
            viewId = params.viewId;
            view = viewMap[viewId];
            view.element.getRect((rect) => {
                view.element.dbg_highlight && view.element.dbg_highlight(true);
                sendMessage(ws, {
                    method: 'setViewInfo',
                    params: Object.assign(Object.assign({}, params), { rect: rect, style: view.style, className: view.className || '' })
                });
            });
        },
        'setViewStyle': function (ws, params) {
            viewId = params.viewId;
            view = viewMap[viewId];
            const style = params.style;
            view.element.style = updateOptions(view.style, style);
            sendMessage(ws, { method: 'setStyleSuccess' });
        },
        'setStorage': function (ws, params) {
            const { type, key, value } = params.storage;
            switch (type) {
                case 'delete':
                    Storage.remove(key);
                    break;
                case 'revise':
                    Storage.set(key, value);
                    break;
            }
            sendMessage(ws, { method: 'setStorageSuccess' });
        },
        'getStorage': function (ws, params) {
            Memory.set("_#_hummer_tenonIp_#_", params === null || params === void 0 ? void 0 : params.tenonIp);
            getAllStorage(ws, params);
        },
        'setMemory': function (ws, params) {
            const { type, key, value } = params.memory;
            switch (type) {
                case 'delete':
                    Memory.remove(key);
                    break;
                case 'revise':
                    Memory.set(key, value);
                    break;
            }
            sendMessage(ws, { method: 'setMemorySuccess' });
        },
        'getMemory': function (ws, params) {
            Memory.set("_#_hummer_tenonIp_#_", params === null || params === void 0 ? void 0 : params.tenonIp);
            getAllMemory(ws, params);
        },
    };
    initSocket(wsTenonUrl, onSocketMsgHandlers);
    log('Socket initializing complete');
}


//# sourceMappingURL=tenon-dev-tool.es.js.map


/***/ }),

/***/ "./src/header_arrow.png":
/*!******************************!*\
  !*** ./src/header_arrow.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/header_arrow.png");

/***/ }),

/***/ "@hummer/hummer-front":
/*!*****************************!*\
  !*** external "__GLOBAL__" ***!
  \*****************************/
/***/ ((module) => {

module.exports = __GLOBAL__;

/***/ }),

/***/ "../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!******************************************************************************************************************************************!*\
  !*** ../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!***********************************************************************************************************************************!*\
  !*** ../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!********************************************************************************************************************************!*\
  !*** ../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/createSuper.js":
/*!********************************************************************************************************************************!*\
  !*** ../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/createSuper.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createSuper)
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./possibleConstructorReturn.js */ "../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");



function _createSuper(Derived) {
  var hasNativeReflectConstruct = (0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return function _createSuperInternal() {
    var Super = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0,_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result);
  };
}

/***/ }),

/***/ "../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!***********************************************************************************************************************************!*\
  !*** ../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*****************************************************************************************************************************!*\
  !*** ../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*********************************************************************************************************************************************!*\
  !*** ../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNativeReflectConstruct)
/* harmony export */ });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!**********************************************************************************************************************************************!*\
  !*** ../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!***********************************************************************************************************************************!*\
  !*** ../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***************************************************************************************************************************!*\
  !*** ../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "./";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/index/index.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _opt_homebrew_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _opt_homebrew_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/createClass.js */ "../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _opt_homebrew_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/inherits.js */ "../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _opt_homebrew_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/createSuper.js */ "../../../../../../../../opt/homebrew/lib/node_modules/@hummer/cli/node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _hummer_tenon_dev_tool_dist_tenon_dev_tool_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @hummer/tenon-dev-tool/dist/tenon-dev-tool.es */ "./node_modules/@hummer/tenon-dev-tool/dist/tenon-dev-tool.es.js");
/* harmony import */ var _hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @hummer/hummer-front */ "@hummer/hummer-front");
/* harmony import */ var _hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _header_arrow_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header_arrow.png */ "./src/header_arrow.png");






 // import {ModulesVersionItemView} from '../index/modulesVersionItem'

var moduleScrollView = new _hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5__.Scroller();
var infoDialog = new _hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5__.Dialog();

var RootView = /*#__PURE__*/function (_View) {
  (0,_opt_homebrew_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__["default"])(RootView, _View);

  var _super = (0,_opt_homebrew_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(RootView);

  function RootView() {
    var _this;

    (0,_opt_homebrew_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RootView);

    _this = _super.call(this);
    _this.style = {
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    };

    _this.appendTitleBar();

    _this.appendScrollView();

    requeestNet();
    return _this;
  }

  (0,_opt_homebrew_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(RootView, [{
    key: "appendTitleBar",
    value: function appendTitleBar() {
      var titleLayout = new _hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5__.View();
      titleLayout.style = {
        backgroundColor: '#12b7f5',
        flexDirection: 'row',
        width: '100%',
        height: 60,
        alignItems: 'center'
      };
      var back = new _hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5__.Image();
      back.src = _header_arrow_png__WEBPACK_IMPORTED_MODULE_6__["default"];
      back.style = {
        width: 24,
        height: 24,
        marginLeft: 16,
        resize: 'contain'
      };
      back.addEventListener('tap', function (event) {
        // 关闭页面
        _hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5__.Navigator.popPage();
      });
      var tittle = new _hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5__.Text();
      tittle.text = "coffer hummer";
      tittle.style = {
        fontSize: 18,
        flexGrow: 1,
        textAlign: 'center',
        color: '#FFFFFF'
      };
      var save = new _hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5__.Button();
      save.text = '保存';
      save.style = {
        width: 60,
        height: 40,
        backgroundColor: '#FFFFFF',
        fontSize: 12,
        marginRight: 10
      };
      save.addEventListener("tap", function (event) {
        // 调用Native的保存方法
        _hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5__.Toast.show('保存啦');
      });
      this.appendChild(titleLayout);
      titleLayout.appendChild(back);
      titleLayout.appendChild(tittle);
      titleLayout.appendChild(save);
    }
  }, {
    key: "appendScrollView",
    value: function appendScrollView() {
      moduleScrollView.style = {
        width: '100%',
        height: '100%',
        backgroundColor: '#5c6273'
      };
      this.appendChild(moduleScrollView);
    }
  }, {
    key: "onCreate",
    value: function onCreate() {
      // 页面创建
      console.log('页面创建');
    }
  }, {
    key: "onAppear",
    value: function onAppear() {
      // 页面显示
      console.log('页面显示');
    }
  }, {
    key: "onDisappear",
    value: function onDisappear() {
      // 页面隐藏
      console.log('页面隐藏');
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      // 页面销毁
      console.log('页面销毁');
    }
  }]);

  return RootView;
}(_hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5__.View);
/**
 * 请求网络
 */


function requeestNet() {
  var request = new _hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5__.Request();
  request.url = "https://www.wanandroid.com/tree/json";
  request.method = 'GET';
  request.send(function (response) {
    // 这里的response 是一个JSON Object对象
    var data = response.data.data;
    console.log('coffer_tag data.size : ' + data.length);
    var size = data.length;

    for (var i = 0; i < size; i++) {
      moduleScrollView.appendChild(new ModulesItemView(data[i], i));
    }
  });
}
/**
 * 最外层的ItemView
 */


var ModulesItemView = /*#__PURE__*/function (_View2) {
  (0,_opt_homebrew_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ModulesItemView, _View2);

  var _super2 = (0,_opt_homebrew_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(ModulesItemView);

  /**
   * 
   * @param data 一级目录下的数据
   * @param position 一级目录下的position
   */
  function ModulesItemView(data, position) {
    var _this2;

    (0,_opt_homebrew_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ModulesItemView);

    _this2 = _super2.call(this);
    _this2.style = {
      width: '100%',
      height: 60,
      backgroundColor: '#95E3C3',
      flexDirection: 'column'
    };
    console.log('coffer_tag content : ' + data.name);
    var textName = new _hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5__.Text();
    textName.text = data.name;
    textName.style = {
      color: '#5c6273',
      textAlign: 'center',
      fontSize: 20
    };
    var line = new _hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5__.View();
    line.style = {
      width: '100%',
      height: 3,
      backgroundColor: '#FFFFFF'
    };

    _this2.appendChild(line);

    _this2.appendChild(textName);

    _this2.addEventListener('tap', function (event) {
      event.type; // 弹出dialog

      console.log("第" + position + "个位置"); // 最外层必须是View，不能是Scroller

      var dialogView = new _hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5__.View();
      dialogView.style = {
        width: '80%',
        height: '80%',
        backgroundColor: '#FFFFFF'
      };
      var scroll = new _hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5__.Scroller();
      scroll.style = {
        width: '100%',
        height: '100%',
        backgroundColor: '#12b7f5'
      };
      dialogView.appendChild(scroll);

      _this2.appendDialogItemView(scroll, data, position);

      infoDialog.custom(dialogView);
    });

    return _this2;
  }

  (0,_opt_homebrew_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ModulesItemView, [{
    key: "appendDialogItemView",
    value: function appendDialogItemView(parentView, data, position) {
      var children = data.children;
      console.log("children size : " + children.length);

      if (children != null && children.length > 0) {
        var size = children.length;

        for (var i = 0; i < size; i++) {
          console.log("啦啦 : " + i); // 注意这里的回调函数，

          parentView.appendChild(new ModulesVersionItemView(this, children[i], i, this.getPoss.bind(this)));
        }
      }
    }
  }, {
    key: "getPoss",
    value: function getPoss(pos) {
      console.log("位置啦啦 : " + pos);
    }
  }]);

  return ModulesItemView;
}(_hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5__.View);

var ModulesVersionItemView = /*#__PURE__*/function (_View3) {
  (0,_opt_homebrew_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__["default"])(ModulesVersionItemView, _View3);

  var _super3 = (0,_opt_homebrew_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(ModulesVersionItemView);

  /**
    * @param view 父容器，回调使用，用来表示作用域
    * @param data 二级目录下的数据
    * @param position 二级目录下对应的Item position
    * @param listener 回调方法
    */
  function ModulesVersionItemView(view, data, position, listener) {
    var _this3;

    (0,_opt_homebrew_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ModulesVersionItemView);

    _this3 = _super3.call(this);
    _this3.style = {
      width: '100%',
      height: 60,
      backgroundColor: '#95E3C3',
      flexDirection: 'column'
    };
    console.log('coffer_tag content : ' + data.name);
    var textName = new _hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5__.Text();
    textName.text = data.name;
    console.log("name is : " + data.name);
    textName.style = {
      color: '#5c6273',
      textAlign: 'center',
      fontSize: 20
    };
    var line = new _hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5__.View();
    line.style = {
      width: '100%',
      height: 3,
      backgroundColor: '#FFFFFF'
    };

    _this3.appendChild(line);

    _this3.appendChild(textName);

    _this3.addEventListener('tap', function (event) {
      console.log("第" + position + "个位置"); // 注意这里的回调函数的使用，Function里的call方法

      listener.call(view, position);
      infoDialog.dismiss();
    });

    return _this3;
  }

  return (0,_opt_homebrew_lib_node_modules_hummer_cli_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_1__["default"])(ModulesVersionItemView);
}(_hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5__.View); // 根页面渲染


_hummer_hummer_front__WEBPACK_IMPORTED_MODULE_5__.Hummer.render(new RootView());
setTimeout(function () {
  try {
    __GLOBAL__.Hummer.getRootView().dbg_getDescription(function (res) {
      (0,_hummer_tenon_dev_tool_dist_tenon_dev_tool_es__WEBPACK_IMPORTED_MODULE_4__.run)(res, 'hummer');
    }, 0);
  } catch (e) {
    console.log('[DEVTOOL]: fail to get tree view');
  }
}, 0);
})();

/******/ })()
;
//# sourceMappingURL=http://192.168.0.109:8000/index.js.map