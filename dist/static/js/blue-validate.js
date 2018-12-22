/*!
 * 
 * blue-validate.js 1.1.1
 * (c) 2016-2017 Blue
 * Released under the MIT License.
 * https://github.com/azhanging/blue-validate
 * time:Sat, 22 Dec 2018 08:05:30 GMT
 * 		
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["BlueValidate"] = factory();
	else
		root["BlueValidate"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "./static";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__update__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__info__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validate_form_validate__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__css_index__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__(12);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }










var Validate = function () {
  function Validate() {
    _classCallCheck(this, Validate);
  }

  _createClass(Validate, null, [{
    key: 'addType',
    value: function addType(typeName, type) {
      __WEBPACK_IMPORTED_MODULE_2__type__["a" /* addType */].call(this, typeName, type);
    }
  }, {
    key: 'install',
    value: function install(Vue) {

      Object(__WEBPACK_IMPORTED_MODULE_5__css_index__["a" /* initCss */])();

      var _this = this;

      Vue.directive('blue-validate', {
        bind: function bind(elm, binding) {
          __WEBPACK_IMPORTED_MODULE_0__init__["a" /* init */].call(this, {
            elm: elm,
            binding: binding
          });
        },
        update: function update(elm, binding) {
          var _this2 = this;

          Vue.nextTick(function () {
            __WEBPACK_IMPORTED_MODULE_1__update__["a" /* update */].call(_this2, {
              elm: elm,
              binding: binding
            });
          });
        }
      });

      Vue.prototype.$validate = function ($event) {
        _this.validate($event);
      };
    }
  }, {
    key: 'setConfig',
    value: function setConfig(_config) {
      this.config = __WEBPACK_IMPORTED_MODULE_7__utils__["a" /* default */].extend(this.config, _config);
    }
  }, {
    key: 'validate',
    value: function validate($event) {
      var event = $event || window.event;
      var elm = event.target;
      var result = Object(__WEBPACK_IMPORTED_MODULE_4__validate_form_validate__["a" /* formValidate */])({
        elm: elm
      });
      if (!result.status) {
        event.preventDefault();
      }
      return result;
    }

    //add elm validate event

  }, {
    key: 'onValidate',
    value: function onValidate(opts) {
      var elm = opts.elm,
          binding = opts.binding;

      __WEBPACK_IMPORTED_MODULE_0__init__["a" /* init */].call(this, {
        elm: elm,
        binding: {
          value: binding
        }
      });
    }
  }]);

  return Validate;
}();

__WEBPACK_IMPORTED_MODULE_2__type__["c" /* setType */].call(Validate);

__WEBPACK_IMPORTED_MODULE_3__info__["a" /* initInfo */].call(Validate);

Validate.config = __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */];

/* harmony default export */ __webpack_exports__["a"] = (Validate);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = init;
/* harmony export (immutable) */ __webpack_exports__["b"] = setValidate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validate_index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type__ = __webpack_require__(3);




function init(opts) {
  setElmProperty(opts);
  setValidate(opts, 'event');
}

//init form elm status property
function setElmProperty(opts) {
  var elm = opts.elm,
      binding = opts.binding;

  if (!elm.validate) {
    elm.validate = {
      status: true,
      binding: binding,
      error: {
        name: '',
        info: '',
        elm: elm
      }
    };

    if (!binding.value) {
      binding.value = {
        validate: []
      };
    }
  }
}

//set elm event
function setValidate(opts, setType) {
  var elm = opts.elm;

  var tagName = elm.tagName;
  var type = elm.getAttribute('type');

  switch (tagName) {
    case 'TEXTAREA':
      if (setType == 'event') {
        Object(__WEBPACK_IMPORTED_MODULE_1__event__["b" /* textEvent */])(opts);
      } else if (setType == 'validate') {
        Object(__WEBPACK_IMPORTED_MODULE_0__validate_index__["b" /* validate */])(opts);
      }
      break;
    case 'INPUT':
      if (null == type || Object(__WEBPACK_IMPORTED_MODULE_2__type__["b" /* getTextTypeRegExp */])().test(type)) {
        if (setType == 'event') {
          Object(__WEBPACK_IMPORTED_MODULE_1__event__["b" /* textEvent */])(opts);
        } else if (setType == 'validate') {
          Object(__WEBPACK_IMPORTED_MODULE_0__validate_index__["b" /* validate */])(opts);
        }
      } else if (/checkbox|radio/ig.test(type)) {
        if (setType == 'event') {
          Object(__WEBPACK_IMPORTED_MODULE_1__event__["a" /* changeEvent */])(opts);
        } else if (setType == 'validate') {
          Object(__WEBPACK_IMPORTED_MODULE_0__validate_index__["c" /* validateRadioOrCheckbox */])(opts);
        }
      }
      break;
    case 'SELECT':
      if (setType == 'event') {
        Object(__WEBPACK_IMPORTED_MODULE_1__event__["a" /* changeEvent */])(opts);
      } else if (setType == 'validate') {
        Object(__WEBPACK_IMPORTED_MODULE_0__validate_index__["d" /* validateSelect */])(opts);
      }
      break;
    default:
      ;
  }
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = toast;
/* harmony export (immutable) */ __webpack_exports__["a"] = createInfoWrap;
var id = 0;
var lastToast = void 0;
var shade = void 0;
var toastId = 'blueToast';

//创建提示弹窗
function toast(opts) {

  if (lastToast) {
    remove(lastToast.elm);
    clearTimeout(lastToast.showTimer);
    clearTimeout(lastToast.hideTimer);
  }

  if (!shade) {
    shade = document.createElement('div');
  }

  var content = opts.content;

  var toast = document.createElement('div');
  var toastContent = document.createElement('div');

  shade.className = 'blue-validate-toast-shade';
  toast.className = 'blue-validate-toast';
  toastContent.className = 'blue-validate-toast-content';

  toastContent.innerHTML = content;
  toast.id = toastId + ++id;
  toast.appendChild(toastContent);
  document.body.appendChild(toast);
  document.body.appendChild(shade);

  lastToast = {
    elm: toast,
    showTimer: 0,
    hideTimer: 0
  };

  lastToast.showTimer = setTimeout(function () {
    toast && toast.classList.add('show');
  }, 0);

  lastToast.hideTimer = setTimeout(function () {
    toast && toast.classList.remove('show');
    setTimeout(function () {
      toast && (remove(toast), remove(shade), lastToast = null, shade = null);
    }, 500);
  }, 1500);
}

//创建提示的容器信息
function createInfoWrap(opts) {
  var info = document.createElement('div');
  info.style.padding = '0 0 10px 0';
  info.innerHTML = '' + opts.name + opts.info;
  return info;
}

function remove(elm) {
  try {
    elm.remove();
  } catch (e) {
    elm.parentNode.removeChild(elm);
  }
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = setType;
/* harmony export (immutable) */ __webpack_exports__["a"] = addType;
/* harmony export (immutable) */ __webpack_exports__["b"] = getTextTypeRegExp;
function setType() {
  this.types = {
    "*": {
      exp: /[\w\W]+/,
      info: '内容不能为空'
    },
    "n": {
      exp: /^\d+$/,
      info: '请输入数字'
    },
    "m": {
      exp: /^1[0-9]{10}$/,
      info: '请输入手机号'
    },
    "e": {
      exp: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      info: '请输入email'
    },
    "url": {
      exp: /^(\w+:\/\/)?\w+(\.\w+)+.*$/,
      info: '请输入url'
    }
  };
}

function addType(typeName) {
  var typeConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { exp: /.*?/ };

  this.constructor.types[typeName] = typeConfig;
}

function getTextTypeRegExp() {
  return (/text|password|email|number|date|month|week|time|datetime|datetime-local/ig
  );
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = validate;
/* harmony export (immutable) */ __webpack_exports__["c"] = validateRadioOrCheckbox;
/* harmony export (immutable) */ __webpack_exports__["d"] = validateSelect;
/* harmony export (immutable) */ __webpack_exports__["a"] = eventValidateToast;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instance_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toast_index__ = __webpack_require__(2);



//text
function validate(opts) {
  var i = 0;
  var elm = opts.elm,
      binding = opts.binding;

  var value = elm.value;
  var elmValidate = elm.validate;
  var bindValue = binding.value;

  //init status === true

  errorStyle(elm, 'remove');
  resetElmStatus(elm);

  for (; i < bindValue.validate.length; i++) {
    if (!elmValidate.status) break;
    var exp = void 0;
    var item = bindValue.validate[i];
    var type = item.type,
        info = item.info;

    var name = getName(elm);
    if (typeof type === 'string' || type instanceof RegExp) {
      if (typeof type === 'string') {
        var validateType = __WEBPACK_IMPORTED_MODULE_0__instance_index__["a" /* default */].types[type];
        if (validateType) {
          exp = validateType.exp;
          info = validateType.info;
        } else {
          continue;
        }
      } else if (type instanceof RegExp) {
        exp = type;
      }
      elmValidate.status = exp.test(value);
    } else if (typeof type === 'function') {
      var _type = type(),
          hadnlerInfo = _type.info,
          status = _type.status;

      elmValidate.status = status || false;
      info = hadnlerInfo;
      name = '';
    }

    if (!elmValidate.status) {
      info && (elmValidate.error = {
        name: name,
        info: info,
        elm: elm
      });
      errorStyle(elm, 'add');
    }
  }
}

//radio or checked
function validateRadioOrCheckbox(opts) {
  var elm = opts.elm;

  var name = getAttr(elm, 'name');
  var elmValidate = elm.validate;
  resetElmStatus(elm);
  var index = 0;
  if (!name) return;
  var findSameNameElms = document.getElementsByName(name);

  [].forEach.call(findSameNameElms, function (elm) {
    if (elm.checked == true) {
      ++index;
    }
    errorStyle(elm, 'remove');
  });

  if (index <= 0) {
    elmValidate.status = false;
    elmValidate.error = {
      name: getName(elm),
      info: __WEBPACK_IMPORTED_MODULE_0__instance_index__["a" /* default */].config.error.info.checked,
      elm: elm
    };
    [].forEach.call(findSameNameElms, function (elm) {
      errorStyle(elm, 'add');
    });
  }
}

//select
function validateSelect(opts) {
  var elm = opts.elm;

  var elmValidate = elm.validate;
  errorStyle(elm, 'remove');
  resetElmStatus(elm);
  if (!elm.value) {
    elmValidate.status = false;
    elmValidate.error = {
      name: getName(elm),
      info: __WEBPACK_IMPORTED_MODULE_0__instance_index__["a" /* default */].config.error.info.selected,
      elm: elm
    };
    errorStyle(elm, 'add');
  }
}

//reset elm status and error
function resetElmStatus(elm) {
  var elmValidate = elm.validate;
  elmValidate.status = true;
  elmValidate.error = {
    name: '',
    info: '',
    elm: elm
  };
}

//get elm attr
function getAttr(elm, attr) {
  return elm.getAttribute(attr);
}

//get form elm name
function getName(elm) {
  var binding = elm.validate.binding;
  var bindValue = binding.value;
  var bindName = bindValue && bindValue.name;
  return bindName || getAttr(elm, 'name');
}

//event emit toast
function eventValidateToast(opts) {
  var elm = opts.elm;

  if (elm.validate.status === true) return;
  Object(__WEBPACK_IMPORTED_MODULE_1__toast_index__["b" /* toast */])({
    content: Object(__WEBPACK_IMPORTED_MODULE_1__toast_index__["a" /* createInfoWrap */])(elm.validate.error).outerHTML
  });
}

//error set style
function errorStyle(elm, type) {
  if (type == 'add') {
    elm.classList.add(__WEBPACK_IMPORTED_MODULE_0__instance_index__["a" /* default */].config.error.className);
  } else if (type == 'remove') {
    elm.classList.remove(__WEBPACK_IMPORTED_MODULE_0__instance_index__["a" /* default */].config.error.className);
  }
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instance__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__instance__["a" /* default */]);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = textEvent;
/* harmony export (immutable) */ __webpack_exports__["a"] = changeEvent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__validate__ = __webpack_require__(4);


function textEvent(opts) {
  var elm = opts.elm;

  elm.addEventListener('blur', function () {
    Object(__WEBPACK_IMPORTED_MODULE_0__validate__["b" /* validate */])(opts);
    Object(__WEBPACK_IMPORTED_MODULE_0__validate__["a" /* eventValidateToast */])(opts);
  });

  elm.addEventListener('input', function () {
    Object(__WEBPACK_IMPORTED_MODULE_0__validate__["b" /* validate */])(opts);
  });
}

function changeEvent(opts) {
  var elm = opts.elm;

  if (elm.tagName == 'SELECT') {
    elm.addEventListener('change', function () {
      Object(__WEBPACK_IMPORTED_MODULE_0__validate__["d" /* validateSelect */])(opts);
      Object(__WEBPACK_IMPORTED_MODULE_0__validate__["a" /* eventValidateToast */])(opts);
    });
  } else {
    elm.addEventListener('change', function () {
      Object(__WEBPACK_IMPORTED_MODULE_0__validate__["c" /* validateRadioOrCheckbox */])(opts);
      Object(__WEBPACK_IMPORTED_MODULE_0__validate__["a" /* eventValidateToast */])(opts);
    });
  }
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = update;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__init__ = __webpack_require__(1);


function update(opts) {
  Object(__WEBPACK_IMPORTED_MODULE_0__init__["b" /* setValidate */])(opts, 'validate');
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initInfo;
function initInfo() {
  this.info = [];
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formValidate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instance_init__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toast_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instance_type__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instance__ = __webpack_require__(0);






//form validate
function formValidate(opts) {
  var formElm = opts.elm;

  var elms = formElm.elements;
  var error = [];
  var errorName = [];
  var _elms = [];

  var filterElms = [].filter.call(elms, function (elm) {
    return elm.getAttribute('name');
  });

  for (var i = 0; i < filterElms.length; i++) {
    var elm = filterElms[i];
    Object(__WEBPACK_IMPORTED_MODULE_0__instance_init__["b" /* setValidate */])({
      elm: elm,
      binding: elm.validate.binding
    }, 'validate');
    var elmValidate = elm.validate;
    var elmError = elmValidate.error;
    var name = elm.getAttribute('name');
    if (elmValidate.status == false) {
      if (errorName.indexOf(name) !== -1) continue;
      errorName.push(name);
      error.push(elmError);
      _elms.push(elm);
    }
  }

  //no has error toast
  if (error.length <= 0) {
    return {
      status: true,
      error: []
    };
  }

  focusFirstInputElm(_elms);

  Object(__WEBPACK_IMPORTED_MODULE_1__toast_index__["b" /* toast */])({
    content: function () {

      var config = __WEBPACK_IMPORTED_MODULE_3__instance__["a" /* default */].config;

      //is show all elms error info
      if (config.error.isAllInfo) {
        var dom = '';
        error.forEach(function (item, index) {
          if (config.error.maximum - 1 >= index) {
            dom += '' + Object(__WEBPACK_IMPORTED_MODULE_1__toast_index__["a" /* createInfoWrap */])(item).outerHTML;
          }
        });
        return dom;
      } else {
        return Object(__WEBPACK_IMPORTED_MODULE_1__toast_index__["a" /* createInfoWrap */])(error[0]).outerHTML;
      }
    }()
  });

  return {
    status: false,
    error: error
  };
}

//first text type elm focus
function focusFirstInputElm(elms) {
  if (__WEBPACK_IMPORTED_MODULE_3__instance__["a" /* default */].config.error.focusFirstElm) {
    var firstElm = elms[0];
    var type = firstElm.getAttribute('type');
    if (firstElm.tagName === 'TEXTAREA' || firstElm.tagName === 'INPUT' && (!type || Object(__WEBPACK_IMPORTED_MODULE_2__instance_type__["b" /* getTextTypeRegExp */])().test(type))) {
      firstElm.focus();
    }
  }
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = initCss;
function initCss() {
  var id = 'blueValidate';
  var hasStyle = document.getElementById(id);
  if (hasStyle) return;
  var validateCss = '.blue-validate-toast-shade{position:fixed;top:0;bottom:0;left:0;right:0;background-color:transparent}.blue-validate-toast{position:fixed;width:100%;z-index:1000;top:-100px;-webkit-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out;opacity:0}.blue-validate-toast.show{opacity:1;top:20px}.blue-validate-error{border:1px solid rgba(156,62,62,0.21)!important;background:rgba(175,34,34,0.08)!important}input[type="radio"].blue-validate-error,input[type="checkbox"].blue-validate-error{box-shadow:0 0 10px red}.blue-validate-toast .blue-validate-toast-content{width:100%;max-width:310px;padding:10px 10px 0 10px;margin:0 auto;text-align:left;line-height:1.418;color:white;background-color:rgba(0,0,0,0.38);border-radius:2px;font-size:13px}';
  var styleElm = document.createElement('style');
  styleElm.innerHTML = validateCss;
  styleElm.id = id;
  document.head.appendChild(styleElm);
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var config = {
  error: {
    className: 'blue-validate-error',
    info: {
      checked: '至少选择一项',
      selected: '请选择选项'
    },
    isAllInfo: false, //显示所有的错误提示
    focusFirstElm: false, //提交后将第一个text类型的elm focus
    maximum: 5 //最大提示数量
  }
};

/* harmony default export */ __webpack_exports__["a"] = (config);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, [{
    key: 'nullPlainObject',
    value: function nullPlainObject(val) {
      return JSON.stringify(val) === "{}";
    }
  }, {
    key: 'isStr',
    value: function isStr(val) {
      return typeof val === 'string';
    }
  }, {
    key: 'isPlainObject',
    value: function isPlainObject(val) {
      return val && val !== null && val.toString() === '[object Object]';
    }
  }, {
    key: 'isArray',
    value: function isArray(val) {
      return val instanceof Array;
    }
  }, {
    key: 'isObjcet',
    value: function isObjcet(val) {
      return this.isPlainObject(val) || this.isArray(val);
    }
  }, {
    key: 'isDef',
    value: function isDef(val) {
      return val !== undefined && val !== null;
    }
  }, {
    key: 'isUndef',
    value: function isUndef(val) {
      return val === undefined || val === null;
    }
  }, {
    key: 'isBlankSpace',
    value: function isBlankSpace(val) {
      return val.trim().length === 0;
    }
  }, {
    key: 'isTrue',
    value: function isTrue(bool) {
      return bool === true;
    }
  }, {
    key: 'isFalse',
    value: function isFalse(bool) {
      return bool === false;
    }
  }, {
    key: 'isFunction',
    value: function isFunction(fn) {
      return typeof fn === 'function';
    }
  }, {
    key: 'hook',
    value: function hook(context) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
      var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      if (typeof callback === 'function') {
        callback.apply(context, args);
      }
    }
  }, {
    key: 'each',
    value: function each(obj, cb) {
      var isReturn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (this.isUndef(obj)) return;
      var i = 0,
          index = 0,
          newVal = [];

      var len = obj.length;

      if (this.isArray(obj)) {
        for (; i < len; i++) {
          if (isReturn) {
            newVal.push(cb(obj[i], i));
          } else {
            cb(obj[i], i);
          }
        }
      } else {
        for (i in obj) {
          if (!obj.hasOwnProperty(i)) continue;
          if (isReturn) {
            newVal.push(cb(obj[i], i, index++));
          } else {
            cb(obj[i], i, index++);
          }
        }
      }

      if (isReturn) return newVal;
    }
  }, {
    key: 'definePropertyVal',
    value: function definePropertyVal(obj, key, val) {
      Object.defineProperty(obj, key, {
        configurable: false,
        enumerable: false,
        value: val
      });
    }
  }, {
    key: 'deepCopy',
    value: function deepCopy(obj) {
      if (!obj || !(obj instanceof Array) && !(obj.toString() === "[object Object]")) return obj;
      var _obj = obj instanceof Array ? [] : {};
      for (var key in obj) {
        if (!obj.hasOwnProperty(key)) continue;
        if (obj instanceof Array || obj instanceof Object) {
          _obj[key] = this.deepCopy(obj[key]);
        } else {
          _obj[key] = obj[key];
        }
      }
      return _obj;
    }
  }, {
    key: 'extend',
    value: function extend(object, _object) {
      var _this = this;

      object = this.deepCopy(object);

      var oldObjKeys = this.each(object, function (obj, key) {
        return key;
      }, true);

      this.each(_object, function (obj, key) {

        var findIndexInOld = oldObjKeys.indexOf(key);
        if (findIndexInOld != -1) {
          oldObjKeys.splice(findIndexInOld, 1);
        }

        if (_this.isPlainObject(obj)) {
          if (!object[key]) {
            object[key] = {};
          }
          _this.extend(object[key], obj);
        }
        object[key] = obj;
      });

      this.each(oldObjKeys, function (key) {
        _object[key] = object[key];
      });

      return object;
    }

    //把当前key-value复制到对应对象的key-value上

  }, {
    key: 'copy',
    value: function copy(object, _object) {
      this.each(_object, function (obj, key) {
        object[key] = obj;
      });
    }

    //获取表达式

  }, {
    key: 'getRegExp',
    value: function getRegExp(expr) {
      var tm = '\\/*.?+$^[](){}|\'\"';
      this.each(tm, function (tmItem, index) {
        expr = expr.replace(new RegExp('\\' + tmItem, 'g'), '\\' + tmItem);
      });
      return expr;
    }
  }, {
    key: 'getObjLen',
    value: function getObjLen(obj) {
      var index = 0;
      this.each(obj, function () {
        ++index;
      });
      return index;
    }
  }]);

  return Utils;
}();

var utils = new Utils();

/* harmony default export */ __webpack_exports__["a"] = (utils);

/***/ })
/******/ ])["default"];
});