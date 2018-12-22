let id = 0;
let lastToast;
let shade;
const toastId = 'blueToast';

//创建提示弹窗
export function toast(opts) {

  if (lastToast) {
    remove(lastToast.elm);
    clearTimeout(lastToast.showTimer);
    clearTimeout(lastToast.hideTimer);
  }

  if (!shade) {
    shade = document.createElement('div');
  }

  const { content } = opts;
  const toast = document.createElement('div');
  const toastContent = document.createElement('div');

  shade.className = 'blue-validate-toast-shade';
  toast.className = `blue-validate-toast`;
  toastContent.className = `blue-validate-toast-content`;

  toastContent.innerHTML = content;
  toast.id = toastId + (++id);
  toast.appendChild(toastContent);
  document.body.appendChild(toast);
  document.body.appendChild(shade);

  lastToast = {
    elm: toast,
    showTimer: 0,
    hideTimer: 0
  };

  lastToast.showTimer = setTimeout(() => {
    toast && toast.classList.add('show');
  }, 0);

  lastToast.hideTimer = setTimeout(() => {
    toast && toast.classList.remove('show');
    setTimeout(() => {
      toast && (remove(toast), remove(shade), lastToast = null, shade = null);
    }, 500);
  }, 1500);

}

//创建提示的容器信息
export function createInfoWrap(opts) {
  const info = document.createElement('div');
  info.style.padding = `0 0 10px 0`;
  info.innerHTML = `${opts.name}${opts.info}`;
  return info;
}

function remove(elm) {
  try{
    elm.remove();
  }catch(e){
    elm.parentNode.removeChild(elm);
  }
}