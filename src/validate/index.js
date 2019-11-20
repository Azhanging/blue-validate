import Validate from '../instance/index';
import { toast, createMessageWrap } from "../toast/index";
import utils from '../utils';

//text
export function validate(opts) {
  let i = 0;
  const { elm } = opts;
  const value = elm.value;
  const elmValidate = elm.validate;
  const binding = elmValidate.binding;
  const { value: bindValue } = binding;

  //init status === true
  errorStyle(elm, 'remove');
  resetElmStatus(elm);

  for (; i < bindValue.validate.length; i++) {
    if (!elmValidate.status) break;
    let currentExp;
    const item = bindValue.validate[i];
    let { exp, message } = item;
    if (typeof exp === 'string' || exp instanceof RegExp) {
      if (typeof exp === 'string') {
        const validateType = Validate.types[exp];
        if (!validateType) continue;
        currentExp = validateType.exp;
        message = validateType.message;
      } else if (exp instanceof RegExp) {
        currentExp = exp;
      }
      currentExp.lastIndex = 0;
      elmValidate.status = currentExp.test(value);
    } else if (typeof exp === 'function') {
      const { message: handlerMessage, status } = exp(value);
      elmValidate.status = status || false;
      message = handlerMessage;
    }

    if (!elmValidate.status) {
      message && (elmValidate.error = {
        message,
        elm
      });
      errorStyle(elm, 'add');
    }
  }
}

//radio or checked
export function validateRadioOrCheckbox(opts) {
  const { elm } = opts;
  const name = getAttr(elm, 'name');
  const elmValidate = elm.validate;
  resetElmStatus(elm);
  let index = 0;
  if (!name) return;
  const findSameNameElms = document.getElementsByName(name);

  [].forEach.call(findSameNameElms, (elm) => {
    if (elm.checked == true) {
      ++index;
    }
    errorStyle(elm, 'remove');
  });

  if (index <= 0) {
    elmValidate.status = false;
    elmValidate.error = {
      message: Validate.config.error.message.checked,
      elm
    };
    [].forEach.call(findSameNameElms, (elm) => {
      errorStyle(elm, 'add');
    });
  }
}

//select
export function validateSelect(opts) {
  const { elm } = opts;
  const elmValidate = elm.validate;
  errorStyle(elm, 'remove');
  resetElmStatus(elm);
  if (!elm.value) {
    elmValidate.status = false;
    elmValidate.error = {
      message: Validate.config.error.message.selected,
      elm
    };
    errorStyle(elm, 'add');
  }
}

//reset elm status and error
function resetElmStatus(elm) {
  const elmValidate = elm.validate;
  elmValidate.status = true;
  elmValidate.error = {
    message: '',
    elm
  };
}

//get elm attr
function getAttr(elm, attr) {
  return elm.getAttribute(attr);
}

//event validated
export function eventValidated(opts) {
  const { elm } = opts;
  const elmValidate = elm.validate;
  const validateStatus = elmValidate.status;
  const errorConfig = Validate.config.error;

  //event validate toast
  if (!validateStatus && errorConfig.toast.status) {
    eventValidatedToast(elm);
  }

  //hook event validated
  utils.hook(null, elmValidate.binding.value.validated, [{
    elm,
    status: validateStatus,
    message: elmValidate.error.message
  }]);

}

//event toast
function eventValidatedToast(elm) {
  toast({
    content: createMessageWrap(elm.validate.error).outerHTML
  });
}

//error set style
function errorStyle(elm, type) {
  if (type === 'add') {
    elm.classList.add(Validate.config.error.className);
  } else if (type === 'remove') {
    elm.classList.remove(Validate.config.error.className);
  }
}