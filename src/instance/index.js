import { init } from './init';
import { update } from './update';
import { setType, addType } from "./type";
import { initInfo } from './info';
import { formValidate } from '../validate/form-validate';
import { initCss } from "../css/index";
import config from '../config';
import utils from '../utils';

class Validate {

  static addType(typeName, type) {
    addType.call(this, typeName, type);
  }

  static install(Vue, opts = {}) {

    initCss();

    const _this = this;

    //set config
    this.setConfig(opts);

    Vue.directive('blue-validate', {
      bind(elm, binding) {
        init.call(this, {
          elm,
          binding
        });
      },
      update(elm, binding) {
        Vue.nextTick(() => {
          update.call(this, {
            elm,
            binding
          });
        });
      }
    });

    Vue.prototype.$validate = function ($event) {
      return _this.validate($event);
    };

  }

  static setConfig(_config) {
    this.config = utils.extend(this.config, _config);
  }

  static validate($event) {
    const event = $event || window.event;
    const elm = event.target;
    const result = formValidate({
      elm
    });
    if (!result.status) {
      event.preventDefault();
    }
    return result;
  }

  //add elm validate event
  static onValidate(opts) {
    const { elm, binding } = opts;
    init.call(this, {
      elm,
      binding: {
        value: binding
      }
    });
  }
}

setType.call(Validate);

initInfo.call(Validate);

Validate.config = config;

export default Validate;