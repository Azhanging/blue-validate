import { setValidate } from '../instance/init';
import { toast } from '../toast/index';
import { createInfoWrap } from "../toast/index";
import { getTextTypeRegExp } from "../instance/type";
import Validate from '../instance';

//form validate
export function formValidate(opts) {

  const { elm: formElm } = opts;
  const elms = formElm.elements;
  const config = Validate.config;
  const error = [];
  const errorName = [];
  const _elms = [];

  let filterElms = [].filter.call(elms, (elm) => {
    return elm.getAttribute('name') && elm.validate;
  });

  for (let i = 0; i < filterElms.length; i++) {
    const elm = filterElms[i];
    setValidate({
      elm,
      binding: elm.validate.binding
    }, 'validate');
    const elmValidate = elm.validate;
    const elmError = elmValidate.error;
    const name = elm.getAttribute('name');
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

  if (config.error.toast.status) {
    toast({
      content: (function () {
        //is show all elms error info
        if (config.error.toast.isAllInfo) {
          let dom = ``;
          error.forEach((item, index) => {
            if (config.error.toast.maximum - 1 >= index) {
              dom += `${createInfoWrap(item).outerHTML}`;
            }
          });
          return dom;
        } else {
          return createInfoWrap(error[0]).outerHTML;
        }
      })()
    });
  }

  return {
    status: false,
    error
  };

}

//first text type elm focus
function focusFirstInputElm(elms) {
  if (Validate.config.error.toast.focusFirstElm) {
    const firstElm = elms[0];
    const type = firstElm.getAttribute('type');
    if ((firstElm.tagName === 'TEXTAREA') || firstElm.tagName === 'INPUT' &&
      (!type || getTextTypeRegExp().test(type))
    ) {
      firstElm.focus();
    }
  }
}