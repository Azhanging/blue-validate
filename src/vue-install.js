export default function install(Vue, opts) {
  const $vali = this;
  Vue.directive('validate', {
    bind(el, binding) {
      $vali.initElm(el, binding);
      $vali.bind(el);
    }
  });

  Vue.prototype.$validate = (event) => {
    const elm = event.target,
      elms = elm.elements,
      valiStatus = [],
      queue = [];

    Array.prototype.forEach.call(elms, (el, index) => {
      if (!el.validate || ((el.validate) && !el.validate.status)) return;
      const result = $vali.validateEvent(el)();
      queue.push(result.then((data) => {
        valiStatus.push(data.status);
      }));
    });

    Promise.all(queue).then(() => {
      const validateStatus = (valiStatus.indexOf(false) != -1);
      if (validateStatus) {
        console.log('error');
      } else {
        console.log('success');
      }
    });

    event.preventDefault();
  }
}

