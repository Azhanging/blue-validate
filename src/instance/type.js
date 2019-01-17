export function setType() {
  this.types = {
    "*": {
      exp: /[\w\W]+/,
      info: '内容不能为空'
    },
    "n": {
      exp: /^\d+$/,
      info: '请输入数字'
    },
    "m": {
      exp: /^1[0-9]{10}$/,
      info: '请输入手机号'
    },
    "e": {
      exp: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      info: '请输入email'
    },
    "url": {
      exp: /^(\w+:\/\/)?\w+(\.\w+)+.*$/,
      info: '请输入url'
    }
  };
}

export function addType(typeName, typeConfig = { exp: /.*?/ }) {
  this.types[typeName] = typeConfig;
}

export function getTextTypeRegExp(){
  return /text|password|email|number|date|month|week|time|datetime|datetime-local/ig;
}