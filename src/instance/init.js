import { validate, validateRadioOrCheckbox, validateSelect } from '../validate/index';
import { changeEvent, textEvent } from '../event';
import { getTextTypeRegExp } from "./type";

export function init(opts) {
  const setStatus = setElmProperty(opts);
  if(setStatus){
    setValidate(opts, 'event');
  }
}

//init form elm status property
function setElmProperty(opts) {
  const { elm, binding } = opts;
  if (!elm.validate) {
    elm.validate = {
      status: true,
      binding,
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

    return true;
  }
  return false;
}

//set elm event
export function setValidate(opts, setType) {

  const { elm } = opts;
  const tagName = elm.tagName;
  const type = elm.getAttribute('type');

  switch (tagName) {
    case 'TEXTAREA':
      if (setType == 'event') {
        textEvent(opts);
      } else if (setType == 'validate') {
        validate(opts);
      }
      break;
    case 'INPUT':
      if (null == type || getTextTypeRegExp().test(type)) {
        if (setType == 'event') {
          textEvent(opts);
        } else if (setType == 'validate') {
          validate(opts);
        }
      } else if (/checkbox|radio/ig.test(type)) {
        if (setType == 'event') {
          changeEvent(opts);
        } else if (setType == 'validate') {
          validateRadioOrCheckbox(opts);
        }
      }
      break;
    case 'SELECT':
      if (setType == 'event') {
        changeEvent(opts);
      } else if (setType == 'validate') {
        validateSelect(opts);
      }
      break;
    default:
      ;
  }
}



