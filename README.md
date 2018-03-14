# blue-validate
validate 

```shell
npm i blue-validate -S
```

```javascript

//validata in vue

import Validate from 'blue-validate';

import Vue from 'vue';

Vue.use(Validate);

const $vue = new Vue({el:''});

```
```html
<form action="" @submit="$validate">
    <!-- validate element -->
    <input type="text" name="username" v-validate="[{type:'*'},{type:'ajax',url:'http://127.0.0.1:8080/'}]"/>
    <!-- bind validate element error tip -->
    <div class="row t-c pd-10" data-bind="username" style="display: none;"></div>
</form>
```

in blue-validate init regexp
```javascript
dataType = {
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
}
```

#### methods:

addDataType(expName,value);

expName:string

value:{
  type:RegExp,
  info:'errorString'
}

```javascript
addDataType("*",{
  type:/[\w\W]+/g,
  info:'必填项'
});
```

bind(elm): bind event listener for validate;

validate(elm): elm for validate;











