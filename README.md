# blue-validate
 
### 安装
```shell
npm i blue-validate -S
```

### 在vue中使用
```javascript
import BlueValidate from 'blue-validate';
import Vue from 'vue';
Vue.use(BlueValidate);
```

```html
<form action="" @submit="$validate">
    <!-- validate element -->
    <input type="text" name="username" v-blue-validate="{validate:[{type:'*'}]}"/>
    <!-- bind validate element error tip -->
    <div class="row t-c pd-10" data-bind="username" style="display: none;"></div>
</form>
```

### Vue.directive 通过自定义指来绑定验证

```html
    <!--text or textarea--> 
    <input type="text" name="username" v-blue-validate="
    {
      validate:[
          {type:'m'},         //配置内置验证
          {type:/.+/,info:'is empty'},    //自定义验证
          {type:function(){return selfMethods();}}  //fn的验证必须 return {status:Boolean,info:String};
      ],
      name:'elm info name',
      validated:function(res){}   //在event处理完后执行的hook,{elm, status,name,info} = res;
    }"/>
    <textarea v-blue-validate="{validate:[{type:'m'},{type:/.+/,info:'is empty'},{type:function(){return selfMethods();}}],name:'elm info name'}"></textarea>
    
    <!--radio-->
    <input type="radio" name="radio" v-blue-validate="{name:'elm info name'}"/>
    <input type="radio" name="radio" v-blue-validate="{name:'elm info name'}"/>
    
    <!--checkbox-->
    <input type="radio" name="checkbox" v-blue-validate="{name:'elm info name'}"/>
    <input type="radio" name="checkbox" v-blue-validate="{name:'elm info name'}"/>
    
```

### 内置的验证规则
```javascript
BlueValidate.type = {
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
```

### BlueValidate.config
默认的配置信息
```javascript
const config = {
  error: {
    className: 'blue-validate-error',   //错误css
    info: {
      checked: '至少选择一项',
      selected: '请选择选项'
    },
    toast: {
      status: true,               //是否默认弹窗的提示
      isAllInfo: false,           //显示所有的错误提示
      focusFirstElm: false,       //提交后将第一个text类型的elm focus
      maximum: 5,                 //最大提示数量
      timer: 2000                 //错误提示的时间
    }
  }
};
```


#### 支持多种类型验证

可以使用内置的验证规则，挂载在BlueValidate.type中

可以使用自定义的正则验证，需要添加info提示信息

也可以通过function进行验证，返回值为{status:Boolean,info:String}

注：双向数据更新需要通过$validate方法验证当前表单的信息，因update钩子会在data更新后被执行，
导致所有的验证都会走一次，多个elm model同一个data时，未被事件触发的可能显示有问题，避免同一个data model多个elm

#### BlueValidate 中的静态方法:

### BlueValidate.install

在Vue.use中使用，配置相关的config，config参照上面的config信息
```javascript
 Vue.use(BlueValidate,BlueValidate.config);
```

### 添加验证类型
```javascript
BlueValidate.addType(typeName,{
    exp:RegExp,
    info:String
});
```

```javascript
BlueValidate.addType("*",{
  exp:/[\w\W]+/g,
  info:'必填项'
});
```

##### 动态添加验证事件 BlueValidate.onValidate(opts);
```javascript
BlueValidate.onValidate({
    elm:elm,
    binding:{
        validate:[{
            type:"*"
        }],
        name:'validate info name'
    }
});
```

##### 设置配置信息 BlueValidate.setConfig(config);

```javascript
BlueValidate.setConfig({
 error: {
   className: 'blue-validate-error',    //错误css
   info: {
     checked: '至少选择一项',
     selected: '请选择选项'
   },
   toast: {
     status: true,               //是否默认弹窗的提示
     isAllInfo: false,           //显示所有的错误提示
     focusFirstElm: false,       //提交后将第一个text类型的elm focus
     maximum: 5,                 //最大提示数量
     timer: 2000                 //错误提示的时间
   }
 }
});
```
##### 提交验证 BlueValidate.validate(formElmEvent|formElm) || vm.$validate(formElmEvent|formElm);
接受的参数为form event或者为form elemenet,
在双向数据中需要在$nextTick中执行$validate方法进行当前表单的全部认证，
提交时的验证form表单内依赖blue-validate的element，
没有name的redio和checkbox表单不作为验证的对象，
避免异常必须给每个elm都加上name来区分。
















