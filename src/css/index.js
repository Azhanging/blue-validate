export function initCss() {
  const id = 'blueValidate';
  const hasStyle = document.getElementById(id);
  if (hasStyle) return;
  const validateCss = `.blue-validate-toast-shade{position:fixed;top:0;bottom:0;left:0;right:0;background-color:transparent}.blue-validate-toast{position:fixed;width:100%;z-index:1000;top:-100px;-webkit-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out;opacity:0}.blue-validate-toast.show{opacity:1;top:20px}.blue-validate-error{border:1px solid rgba(156,62,62,0.53)!important;background:rgba(175,34,34,0.08)!important}input[type="radio"].blue-validate-error,input[type="checkbox"].blue-validate-error{box-shadow:0 0 10px red}.blue-validate-toast .blue-validate-toast-content{width:100%;max-width:310px;padding:10px 10px 0 10px;margin:0 auto;text-align:left;line-height:1.418;color:white;background-color:rgba(0,0,0,0.38);border-radius:2px;font-size:13px}`;
  const styleElm = document.createElement('style');
  styleElm.innerHTML = validateCss;
  styleElm.id = id;
  document.head.appendChild(styleElm);
}