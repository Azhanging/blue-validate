# blue-validate
 
###安装
```shell
npm i blue-validate -S
```

###在vue中使用
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

###Vue.directive 通过自定义指来绑定验证

```html
    <!--text or textarea--> 
    <input type="text" name="username" v-blue-validate="{validate:[{type:'m'},{type:/.+/,info:'is empty'},{type:function(){return selfMethods();}}],name:'elm info name'}"/>
    <textarea v-blue-validate="{validate:[{type:'m'},{type:/.+/,info:'is empty'},{type:function(){return selfMethods();}}],name:'elm info name'}"></textarea>
    
    <!--radio-->
    <input type="radio" name="radio" v-blue-validate="name:'elm info name'}"/>
    <input type="radio" name="radio" v-blue-validate="name:'elm info name'}"/>
    
    <!--checkbox-->
    <input type="radio" name="checkbox" v-blue-validate="name:'elm info name'}"/>
    <input type="radio" name="checkbox" v-blue-validate="name:'elm info name'}"/>
    
```

###内置的验证规则
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

###BlueValidate.config
默认的配置信息
```javascript
    const config = {
      error: {
        className: 'blue-validate-error',
        info: {
          checked: '至少选择一项',
          selected: '请选择选项'
        },
        isAllInfo: false,       //显示所有的错误提示
        focusFirstElm: false,    //提交后将第一个text类型的elm focus
        maximum: 5                //最大提示数量
      }
    };
```


####支持多种类型验证

可以使用内置的验证规则，挂载在BlueValidate.type中

可以使用自动以的正则验证，需要添加info提示信息

也可以通过function进行验证，返回值为{status:Boolean,info:String}

#### BlueValidate 中的静态方法:

#####添加验证类型
BlueValidate.addType(typeName,{
    exp:RegExp,
    info:String
});

```javascript
addType("*",{
  exp:/[\w\W]+/g,
  info:'必填项'
});
```

#####BlueValidate.install
Vue.use使用

#####BlueValidate.setConfig
设置配置信息
BlueValidate.setConfig(config);












