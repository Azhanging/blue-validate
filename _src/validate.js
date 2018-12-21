import init from './init';

import eventBind from './event-bind';

import valid from './valid';

import vueInstall from './vue-install';

class Validate {
  constructor() {
    init.call(this);
  }

  each(obj, cb) { //遍历
    let i = 0,
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

  type(obj, type) {
    switch (type) {
      case 'array':
        return obj instanceof Array || !!(obj && obj.length);
      case 'object' :
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

  validateEvent(el) {
    return () => {
      const valiResult = this.validate(el);
      return valiResult.then((result) => {
        const form = el.form,
          tipElm = form.querySelector(`[data-bind=${el.name}]`),
          hasTipElm = (tipElm && (tipElm.nodeType === 1)) ? true : false,
          status = result.status;

        if (hasTipElm) {
          tipElm.style.display = status ? 'none' : '';
          tipElm.innerHTML = status ? '' : result.info;
        }

        el.setAttribute('placeholder', status ? el.validate.placeholder : result.info);
        el.style.backgroundColor = status ? el.validate.bg : '#ffe7e7';

        return result;
      });
    }
  }

  bind(el) {
    eventBind.call(this, el);
  }

  addDataType(exp, value) {
    this.dataType[exp] = value;
  }

  validate(el) {
    return valid.call(this, el);
  }

  initElm(el, binding) {
    el.validate = {
      status: true,
      binding,
      placeholder: el.getAttribute('placeholder'),
      bg: getComputedStyle(el)['background-color']
    };
  }

  install(Vue, opts) {
    vueInstall.apply(this, [Vue, opts]);
  }
}

export default Validate;
