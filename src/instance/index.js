import { init } from './init';
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

  static install(Vue) {

    initCss();

    Vue.directive('blue-validate', {
      bind(elm, binding) {
        init.call(this, {
          elm,
          binding
        });
      },
      update() {

      }
    });

    Vue.prototype.$validate = function ($event) {
      $event.preventDefault();
      const elm = $event.target;
      return formValidate({
        elm
      });
    };

  }

  static setConfig(_config) {
    this.config = utils.extend(this.config, _config);
  }

}

setType.call(Validate);

initInfo.call(Validate);

Validate.config = config;

export default Validate;