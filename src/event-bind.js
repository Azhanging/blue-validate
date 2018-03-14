
export default function eventBind(el){
  const tagName = el.tagName.toLowerCase();
  if (tagName != 'select') {
    el.addEventListener('input', this.validateEvent(el));
    el.addEventListener('blur', this.validateEvent(el));
  } else {
    el.addEventListener('change', this.validateEvent(el));
  }
}

