import blueAsk from 'blue-ask';

import blueLayer from 'blue-layer';

export default function install(Vue, opts) {

  const $vali = this;

  Vue.directive('validate', {
    bind(el, binding) {
      $vali.initElm(el, binding);
      $vali.bind(el);
    }
  });

  Vue.prototype.$validate = function (event) {
    const elm = event.target,
      action = elm.getAttribute('action') || '',
      elms = elm.elements,
      valiStatus = [],
      queue = [],
      vm = this;

    let method = elm.getAttribute('method');

    method = method ? method.toLowerCase() : 'get';

    Array.prototype.forEach.call(elms, (el) => {
      if (!el.validate || ((el.validate) && !el.validate.status)) return;
      const result = $vali.validateEvent(el)();
      queue.push(result.then((data) => {
        valiStatus.push(data.status);
      }));
    });

    Promise.all(queue).then(() => {
      const validateStatus = (valiStatus.indexOf(false) != -1);
      if (validateStatus) {
        console.warn('validate error');
      } else {
        blueAsk[method]({
          url: action,
          form: elm,
          cb: (res) => {
            const data = res.data;
            if (data.status == 1) {
              setTimeout(() => {
                vm.$router.replace(data.url || '/')
              }, 1500);
            } else if (data.status == 0) {

            }
          }
        });
      }
    });

    event.preventDefault();
  }
}

