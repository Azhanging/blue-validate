/*!
 * 
 * blue-validate.js v1.0.1
 * (c) 2016-2017 Blue
 * Released under the MIT License.
 * https://github.com/azhanging/layer
 * time:Tue Mar 13 2018 16:06:34 GMT+0800 (中国标准时间)
 * 		
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("axios"));
	else if(typeof define === 'function' && define.amd)
		define(["axios"], factory);
	else if(typeof exports === 'object')
		exports["blueValidate"] = factory(require("axios"));
	else
		root["blueValidate"] = factory(root["axios"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _init = __webpack_require__(2);

var _init2 = _interopRequireDefault(_init);

var _eventBind = __webpack_require__(1);

var _eventBind2 = _interopRequireDefault(_eventBind);

var _valid = __webpack_require__(3);

var _valid2 = _interopRequireDefault(_valid);

var _vueInstall = __webpack_require__(4);

var _vueInstall2 = _interopRequireDefault(_vueInstall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Validate = function () {
  function Validate() {
    _classCallCheck(this, Validate);

    _init2.default.call(this);
  }

  _createClass(Validate, [{
    key: 'each',
    value: function each(obj, cb) {
      //遍历
      var i = 0,
          len = obj.length;
      if (this.type(obj, 'array')) {
        for (; i < len; i++) {
          cb(obj[i], i);
        }
      } else {
        for (i in obj) {
          if (obj.hasOwnProperty(i)) cb(obj[i], i);
        }
      }
    }
  }, {
    key: 'type',
    value: function type(obj, _type) {
      switch (_type) {
        case 'array':
          return obj instanceof Array || !!(obj && obj.length);
        case 'object':
          return obj instanceof Object && !(obj instanceof Array) && obj !== null;
        case 'function':
          return typeof obj === 'function';
        case 'string':
          return typeof obj === 'string';
        case 'number':
          return typeof obj === 'number' || !isNaN(obj);
        case 'element':
          return !!(obj && obj.nodeType);
        default:
          return false;
      }
    }
  }, {
    key: 'validateEvent',
    value: function validateEvent(el) {
      var _this = this;

      return function () {
        var valiResult = _this.validate(el);
        return valiResult.then(function (result) {
          var form = el.form,
              tipElm = form.querySelector('[data-bind=' + el.name + ']'),
              hasTipElm = tipElm && tipElm.nodeType === 1 ? true : false,
              status = result.status;

          if (hasTipElm) {
            tipElm.style.display = status ? 'none' : '';
            tipElm.innerHTML = status ? '' : result.info;
          }

          el.setAttribute('placeholder', status ? el.validate.placeholder : result.info);
          el.style.backgroundColor = status ? el.validate.bg : '#ffe7e7';

          return result;
        });
      };
    }
  }, {
    key: 'bind',
    value: function bind(el) {
      _eventBind2.default.call(this, el);
    }
  }, {
    key: 'addDataType',
    value: function addDataType(exp, value) {
      this.dataType[exp] = value;
    }
  }, {
    key: 'validate',
    value: function validate(el) {
      return _valid2.default.call(this, el);
    }
  }, {
    key: 'initElm',
    value: function initElm(el, binding) {
      el.validate = {
        status: true,
        binding: binding,
        placeholder: el.getAttribute('placeholder'),
        bg: getComputedStyle(el)['background-color']
      };
    }
  }, {
    key: 'install',
    value: function install(Vue, opts) {
      _vueInstall2.default.apply(this, [Vue, opts]);
    }
  }]);

  return Validate;
}();

exports.default = Validate;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eventBind;
function eventBind(el) {
  var tagName = el.tagName.toLowerCase();
  if (tagName != 'select') {
    el.addEventListener('input', this.validateEvent(el));
    el.addEventListener('blur', this.validateEvent(el));
  } else {
    el.addEventListener('change', this.validateEvent(el));
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = init;
function dataType() {
  this.dataType = {
    "*": {
      type: /[\w\W]+/,
      info: '内容不能为空'
    },
    "n": {
      type: /^\d+$/,
      info: '请输入数字'
    },
    "m": {
      type: /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}|17[0-9]{9}$/,
      info: '请输入手机号'
    },
    "e": {
      type: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      info: '请输入email'
    },
    "url": {
      type: /^(\w+:\/\/)?\w+(\.\w+)+.*$/,
      info: '请输入url'
    }
  };
}

function init() {
  dataType.call(this);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = valid;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function valid(el) {
  var _this = this;

  var result = {
    status: true,
    info: ''
  },
      isAjax = false;

  var val = el.value,
      name = el.name,
      binding = el.validate.binding,
      dataType = binding.value;

  if (!this.type(dataType, 'array')) {
    console.warn('v-validate value is Array');
    result = {
      status: false,
      info: "v-validate value typeof not's Array"
    };
    return result;
  }

  var axios = __webpack_require__(5) || window && window.axios;

  return new Promise(function (resolve, reject) {
    _this.each(dataType, function (valid, index) {
      if (!result.status || isAjax === true) return;
      var validate = null,
          isValidateDataType = false;

      if (valid.type == 'ajax') {
        isAjax = true;
        axios.get(valid.url, {
          params: _defineProperty({}, name, val)
        }).then(function (res) {
          var data = res.data;
          result = {
            status: data == 1 ? true : false,
            info: data.info || 'error'
          };
          resolve(result);
        });
      } else {
        if (valid.type instanceof RegExp) {
          validate = valid.type;
        } else {
          validate = _this.dataType[valid.type].type;
          isValidateDataType = true;
        }
        if (!validate.test(val)) {
          result = {
            status: false,
            info: valid.info || (isValidateDataType ? _this.dataType[valid.type].info : 'error')
          };
        }
      }
    });
    if (!isAjax) {
      resolve(result);
    }
  });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;
function install(Vue, opts) {
  var $vali = this;
  Vue.directive('validate', {
    bind: function bind(el, binding) {
      $vali.initElm(el, binding);
      $vali.bind(el);
    }
  });

  Vue.prototype.$validate = function (event) {
    var elm = event.target,
        elms = elm.elements,
        valiStatus = [],
        queue = [];

    Array.prototype.forEach.call(elms, function (el, index) {
      if (!el.validate || el.validate && !el.validate.status) return;
      var result = $vali.validateEvent(el)();
      queue.push(result.then(function (data) {
        valiStatus.push(data.status);
      }));
    });

    Promise.all(queue).then(function () {
      var validateStatus = valiStatus.indexOf(false) != -1;
      if (validateStatus) {
        console.log('error');
      } else {
        console.log('success');
      }
    });

    event.preventDefault();
  };
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _validate = __webpack_require__(0);

var _validate2 = _interopRequireDefault(_validate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (global, factory) {
  module.exports = factory();
})(typeof window !== 'undefined' ? window : undefined, function () {
  return new _validate2.default();
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=blue-validate.js.map