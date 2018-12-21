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

export default config;