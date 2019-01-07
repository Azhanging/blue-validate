import {
  eventValidated,
  validate,
  validateRadioOrCheckbox,
  validateSelect
} from "../validate";

export function textEvent(opts) {
  const { elm } = opts;
  elm.addEventListener('blur', function () {
    validate(opts);
    eventValidated(opts);
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
      eventValidated(opts);
    });
  } else {
    elm.addEventListener('change', function () {
      validateRadioOrCheckbox(opts);
      eventValidated(opts);
    });
  }
}