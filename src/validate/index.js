import Validate from '../instance/index';
import { toast, createInfoWrap } from "../toast/index";
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
    let exp;
    const item = bindValue.validate[i];
    let { type, info } = item;
    let name = getName(elm);
    if (typeof type === 'string' || type instanceof RegExp) {
      if (typeof type === 'string') {
        const validateType = Validate.types[type];
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
      const { info: handlerInfo, status } = type();
      elmValidate.status = status || false;
      info = handlerInfo;
      name = '';
    }

    if (!elmValidate.status) {
      info && (elmValidate.error = {
        name,
        info,
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
      name: getName(elm),
      info: Validate.config.error.info.checked,
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
      name: getName(elm),
      info: Validate.config.error.info.selected,
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
    name: '',
    info: '',
    elm
  };
}

//get elm attr
function getAttr(elm, attr) {
  return elm.getAttribute(attr);
}

//get form elm name
function getName(elm) {
  const binding = elm.validate.binding;
  const bindValue = binding.value;
  const bindName = bindValue && bindValue.name;
  return bindName || getAttr(elm, 'name');
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
    name: getName(elm),
    info: elmValidate.error.info
  }]);

}

//event toast
function eventValidatedToast(elm) {
  toast({
    content: createInfoWrap(elm.validate.error).outerHTML
  });
}

//error set style
function errorStyle(elm, type) {
  if (type == 'add') {
    elm.classList.add(Validate.config.error.className);
  } else if (type == 'remove') {
    elm.classList.remove(Validate.config.error.className);
  }
}