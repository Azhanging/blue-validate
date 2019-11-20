const config = {
  error: {
    className: 'blue-validate-error', //错误css
    message: {
      checked: '至少选择一项',
      selected: '请选择选项'
    },
    toast: {
      status: true,               //是否默认弹窗的提示
      isAllMessage: false,           //显示所有的错误提示
      focusFirstElm: false,       //提交后将第一个text类型的elm focus
      maximum: 5,                 //最大提示数量
      timer: 2000                 //错误提示的时间
    }
  }
};

export default config;