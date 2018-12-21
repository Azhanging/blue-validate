function dataType(){
  this.dataType = {
    "*": {
      type: /[\w\W]+/,
      info: '内容不能为空'
    },
    "n": {
      type: /^\d+$/,
      info: '请输入数字'
    },
    "m": {
      type: /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}|17[0-9]{9}$/,
      info: '请输入手机号'
    },
    "e": {
      type: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      info: '请输入email'
    },
    "url": {
      type: /^(\w+:\/\/)?\w+(\.\w+)+.*$/,
      info: '请输入url'
    }
  };
}

export default function init(){
  dataType.call(this);
}