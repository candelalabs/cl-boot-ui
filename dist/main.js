(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["_", "react"], factory);
	else if(typeof exports === 'object')
		exports["cl-boot-ui"] = factory(require("lodash"), require("react"));
	else
		root["cl-boot-ui"] = factory(root["_"], root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/closest/index.js":
/*!***************************************!*\
  !*** ./node_modules/closest/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var matches = __webpack_require__(/*! matches-selector */ "./node_modules/matches-selector/index.js")

module.exports = function (element, selector, checkYoSelf) {
  var parent = checkYoSelf ? element : element.parentNode

  while (parent && parent !== document) {
    if (matches(parent, selector)) return parent;
    parent = parent.parentNode
  }
}


/***/ }),

/***/ "./node_modules/matches-selector/index.js":
/*!************************************************!*\
  !*** ./node_modules/matches-selector/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Element prototype.
 */

var proto = Element.prototype;

/**
 * Vendor function.
 */

var vendor = proto.matchesSelector
  || proto.webkitMatchesSelector
  || proto.mozMatchesSelector
  || proto.msMatchesSelector
  || proto.oMatchesSelector;

/**
 * Expose `match()`.
 */

module.exports = match;

/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match(el, selector) {
  if (vendor) return vendor.call(el, selector);
  var nodes = el.parentNode.querySelectorAll(selector);
  for (var i = 0; i < nodes.length; ++i) {
    if (nodes[i] == el) return true;
  }
  return false;
}

/***/ }),

/***/ "./src/Toolkit.ts":
/*!************************!*\
  !*** ./src/Toolkit.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable no-bitwise
var closest = __webpack_require__(/*! closest */ "./node_modules/closest/index.js");
/**
 * Based on storm-react-diagram codes
 * @author Dylan Vorster
 */
var Toolkit = /** @class */ (function () {
    function Toolkit() {
    }
    /**
     * Generats a unique ID (thanks Stack overflow :3)
     * @returns {String}
     */
    Toolkit.UID = function () {
        if (Toolkit.TESTING) {
            Toolkit.TESTING_UID++;
            return "" + Toolkit.TESTING_UID;
        }
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0;
            var v = c === "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    };
    /**
     * Finds the closest element as a polyfill
     *
     * @param  {Element} element  [description]
     * @param  {string}  selector [description]
     */
    Toolkit.closest = function (element, selector) {
        if (document.body.closest) {
            return element.closest(selector);
        }
        return closest(element, selector);
    };
    Toolkit.TESTING = false;
    Toolkit.TESTING_UID = 0;
    return Toolkit;
}());
exports.Toolkit = Toolkit;


/***/ }),

/***/ "./src/common/BaseWidget.tsx":
/*!***********************************!*\
  !*** ./src/common/BaseWidget.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var BaseWidget = /** @class */ (function (_super) {
    __extends(BaseWidget, _super);
    function BaseWidget(name, props) {
        var _this = _super.call(this, props) || this;
        _this.className = name;
        return _this;
    }
    BaseWidget.prototype.bem = function (selector) {
        return (this.props.baseClass || this.className) + selector + " ";
    };
    BaseWidget.prototype.getClassName = function () {
        return ((this.props.baseClass || this.className) + " " + (this.props.className ? this.props.className + " " : ""));
    };
    BaseWidget.prototype.getProps = function () {
        return __assign(__assign({}, (this.props.extraProps || {})), { className: this.getClassName() });
    };
    return BaseWidget;
}(React.Component));
exports.BaseWidget = BaseWidget;


/***/ }),

/***/ "./src/common/actions/BaseMouseAction.ts":
/*!***********************************************!*\
  !*** ./src/common/actions/BaseMouseAction.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BaseMouseAction = /** @class */ (function () {
    function BaseMouseAction(mouseX, mouseY) {
        this.mouseX = mouseX;
        this.mouseY = mouseY;
        this.ms = new Date().getTime();
    }
    return BaseMouseAction;
}());
exports.BaseMouseAction = BaseMouseAction;


/***/ }),

/***/ "./src/login/LoginWidget.tsx":
/*!***********************************!*\
  !*** ./src/login/LoginWidget.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var BaseWidget_1 = __webpack_require__(/*! ../common/BaseWidget */ "./src/common/BaseWidget.tsx");
var LoginWidget = /** @class */ (function (_super) {
    __extends(LoginWidget, _super);
    function LoginWidget(props) {
        var _this = _super.call(this, "selection-grid", props) || this;
        _this.state = {
            document: null
        };
        return _this;
    }
    LoginWidget.prototype.render = function () {
        return (React.createElement("div", { className: "outer" },
            React.createElement("div", { className: "middle" },
                React.createElement("div", { className: "inner" },
                    React.createElement("div", { className: "login-section" },
                        React.createElement("div", { className: "candela-icon" },
                            React.createElement("img", { src: this.props.icon, alt: "Logo" }),
                            React.createElement("div", { className: "custom-text-input" },
                                React.createElement("input", { type: "text", placeholder: "User Name" })),
                            React.createElement("div", { className: "custom-text-input" },
                                React.createElement("input", { type: "password", placeholder: "Password" })),
                            React.createElement("div", { className: "custom-submit-button", style: {
                                    marginTop: '60px'
                                } },
                                React.createElement("button", null, "Login")),
                            React.createElement("div", { className: "forgot-password" },
                                "Forgot Password? ",
                                React.createElement("a", { style: {
                                        textDecoration: 'none'
                                    }, href: "#" }, "click here"))))))));
    };
    return LoginWidget;
}(BaseWidget_1.BaseWidget));
exports.LoginWidget = LoginWidget;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @author arifnpm
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./selection-grid/SelectionGridWidget */ "./src/selection-grid/SelectionGridWidget.tsx"));
__export(__webpack_require__(/*! ./selection-pane/SelectionPaneWidget */ "./src/selection-pane/SelectionPaneWidget.tsx"));
__export(__webpack_require__(/*! ./login/LoginWidget */ "./src/login/LoginWidget.tsx"));


/***/ }),

/***/ "./src/selection-grid/SelectionGridWidget.tsx":
/*!****************************************************!*\
  !*** ./src/selection-grid/SelectionGridWidget.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var _ = __webpack_require__(/*! lodash */ "lodash");
var BaseWidget_1 = __webpack_require__(/*! ../common/BaseWidget */ "./src/common/BaseWidget.tsx");
var Toolkit_1 = __webpack_require__(/*! ../Toolkit */ "./src/Toolkit.ts");
var BaseMouseAction_1 = __webpack_require__(/*! ../common/actions/BaseMouseAction */ "./src/common/actions/BaseMouseAction.ts");
var SelectionGridWidget = /** @class */ (function (_super) {
    __extends(SelectionGridWidget, _super);
    function SelectionGridWidget(props) {
        var _this = _super.call(this, "selection-grid", props) || this;
        _this.state = {
            document: null,
            isMoving: false,
            data: props.data ? props.data.map(function (item) {
                item.id = Toolkit_1.Toolkit.UID();
                return item;
            }) : [],
            action: null,
            moveInfo: null,
            hoverSelect: false,
            selected: [],
            placeholders: ["01", "02", "03", "04", "05", "06"]
        };
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        _this.onMouseUp = _this.onMouseUp.bind(_this);
        return _this;
    }
    SelectionGridWidget.prototype.componentDidMount = function () {
        this.setState({
            document: document
        });
    };
    SelectionGridWidget.prototype.getMouseElement = function (event) {
        var target = event.target;
        var element = Toolkit_1.Toolkit.closest(target, ".selection-grid-card");
        if (element) {
            return {
                item: _.find(this.props.data, { id: element.getAttribute("data-id") }),
                element: element
            };
        }
        return null;
    };
    SelectionGridWidget.prototype.onMouseMove = function (event) {
        var amountX = event.clientX - this.state.action.mouseX;
        var amountY = event.clientY - this.state.action.mouseY;
        this.state.moveInfo.item.moveX = this.state.moveInfo.item.initialX + amountX;
        this.state.moveInfo.item.moveY = this.state.moveInfo.item.initialY + amountY;
        var selRect = this.selectedParentRef.getBoundingClientRect();
        var isMouseIntersectSelParent = false;
        if (event.clientX >= selRect.left && event.clientY >= selRect.top &&
            event.clientX <= selRect.left + selRect.width && event.clientY <= selRect.top + selRect.height) {
            isMouseIntersectSelParent = true;
        }
        this.setState({ hoverSelect: isMouseIntersectSelParent });
    };
    SelectionGridWidget.prototype.onMouseUp = function (event) {
        this.state.moveInfo.item.moved = false;
        this.state.document.removeEventListener("mousemove", this.onMouseMove);
        this.state.document.removeEventListener("mouseup", this.onMouseUp);
        if (this.state.hoverSelect) {
            this.state.moveInfo.item.selected = true;
            var minimumIndex_1 = 0;
            this.state.selected.forEach(function (sel) {
                if (minimumIndex_1 <= sel.index) {
                    minimumIndex_1 = sel.index + 1;
                }
            });
            this.state.selected.push({
                index: minimumIndex_1,
                item: this.state.moveInfo.item
            });
        }
        this.setState({
            isMoving: false,
            action: null,
            moveInfo: null,
            hoverSelect: false
        });
    };
    SelectionGridWidget.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "selection-grid-container", ref: function (ref) {
                if (ref) {
                    _this.parentRef = ref;
                }
            }, onMouseDown: function (event) {
                if (event.nativeEvent.which !== 1 || _this.state.isMoving)
                    return;
                var result = _this.getMouseElement(event);
                console.log(result);
                if (result !== null) {
                    var parentRect = _this.parentRef.getBoundingClientRect();
                    var cardRect = result.element.getBoundingClientRect();
                    result.item.moveX = result.item.initialX = cardRect.left - parentRect.left;
                    result.item.moveY = result.item.initialY = cardRect.top - parentRect.top;
                    result.item.moved = true;
                    _this.setState({
                        isMoving: true,
                        action: new BaseMouseAction_1.BaseMouseAction(event.clientX, event.clientY),
                        moveInfo: result
                    });
                    _this.state.document.addEventListener("mousemove", _this.onMouseMove);
                    _this.state.document.addEventListener("mouseup", _this.onMouseUp);
                }
            } },
            React.createElement("div", { className: "selection-grid-menu-title" }, "Select your needs in order of priority"),
            React.createElement("div", { className: "selection-grid-menu" }, this.props.data.map(function (item) {
                if (item.moved || item.selected)
                    return null;
                return (React.createElement("div", { className: "selection-grid-card noselect", "data-id": item.id },
                    React.createElement("img", { src: item.imageSrc, className: "nodrag" }),
                    React.createElement("br", null),
                    React.createElement("label", null, item.title)));
            })),
            React.createElement("div", { className: "selection-grid-selected-title" }, "Selected Needs"),
            React.createElement("div", { className: "selection-grid-selected" + (this.state.hoverSelect ? " hover" : ""), ref: function (ref) {
                    if (ref) {
                        _this.selectedParentRef = ref;
                    }
                } },
                this.props.data.map(function (item) {
                    if (item.moved || !item.selected)
                        return null;
                    return (React.createElement("div", { className: "selection-grid-card noselect", "data-id": item.id },
                        React.createElement("img", { src: item.imageSrc, className: "nodrag" }),
                        React.createElement("br", null),
                        React.createElement("label", null, item.title)));
                }),
                this.state.placeholders.map(function (title, index) {
                    if (_this.state.selected.length > index)
                        return null;
                    return (React.createElement("div", { className: "selection-grid-placeholder" },
                        React.createElement("label", null, title)));
                })),
            this.props.data.map(function (item) {
                if (!item.moved)
                    return null;
                else
                    return (React.createElement("div", { className: "selection-grid-card noselect", "data-id": item.id, style: {
                            position: "absolute",
                            left: item.moveX,
                            top: item.moveY,
                        } },
                        React.createElement("img", { src: item.imageSrc, className: "nodrag" }),
                        React.createElement("br", null),
                        React.createElement("label", null,
                            item.title,
                            " xyz")));
            })));
    };
    return SelectionGridWidget;
}(BaseWidget_1.BaseWidget));
exports.SelectionGridWidget = SelectionGridWidget;


/***/ }),

/***/ "./src/selection-pane/SelectionPaneWidget.tsx":
/*!****************************************************!*\
  !*** ./src/selection-pane/SelectionPaneWidget.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ "react");
var BaseWidget_1 = __webpack_require__(/*! ../common/BaseWidget */ "./src/common/BaseWidget.tsx");
var SelectionPaneWidget = /** @class */ (function (_super) {
    __extends(SelectionPaneWidget, _super);
    function SelectionPaneWidget(props) {
        var _this = _super.call(this, "selection-grid", props) || this;
        _this.state = {
            document: null
        };
        return _this;
    }
    SelectionPaneWidget.prototype.render = function () {
        return (React.createElement("div", { className: "selection-pane-container" },
            React.createElement("button", { className: "selection-button" }, "Conservative"),
            React.createElement("button", { className: "selection-button" }, "Moderately conservative"),
            React.createElement("button", { className: "selection-button" }, "Moderately aggressive"),
            React.createElement("button", { className: "selection-button" }, "Aggressive")));
    };
    return SelectionPaneWidget;
}(BaseWidget_1.BaseWidget));
exports.SelectionPaneWidget = SelectionPaneWidget;


/***/ }),

/***/ "lodash":
/*!********************************************************************************!*\
  !*** external {"commonjs":"lodash","commonjs2":"lodash","amd":"_","root":"_"} ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=main.js.map