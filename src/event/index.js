import {
  eventValidateToast,
  validate,
  validateRadioOrCheckbox,
  validateSelect
} from "../validate";

export function textEvent(opts) {
  const { elm } = opts;
  elm.addEventListener('blur', function () {
    validate(opts);
    eventValidateToast(opts);
  });

  elm.addEventListener('input', function () {
    validate(opts);
  });
}

export function changeEvent(opts) {
  const { elm } = opts;
  if (elm.tagName == 'SELECT') {
    elm.addEventListener('change', function () {
      validateSelect(opts);
      eventValidateToast(opts);
    });
  } else {
    elm.addEventListener('change', function () {
      validateRadioOrCheckbox(opts);
      eventValidateToast(opts);
    });
  }
}