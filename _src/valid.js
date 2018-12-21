
export default function valid(el){
  let result = {
      status: true,
      info: ''
    },
    isAjax = false;

  const val = el.value,
    name = el.name,
    binding = el.validate.binding,
    dataType = binding.value;

  if (!this.type(dataType, 'array')) {
    console.warn(`v-validate value is Array`);
    result = {
      status: false,
      info: "v-validate value typeof not's Array"
    };
    return result;
  }

  const axios = require('axios') || (window && window.axios);

  return new Promise((resolve,reject)=>{
    this.each(dataType, (valid, index) => {
      if (!result.status || isAjax === true) return;
      let validate = null,
        isValidateDataType = false;

      if (valid.type == 'ajax') {
        isAjax = true;
        axios.get(valid.url, {
          params:{
            [name]: val
          }
        }).then((res) => {
          const data = res.data;
          result = {
            status: data.status == 1 ? true : false ,
            info: data.info || 'error'
          };
          resolve(result);
        });
      } else {
        if (valid.type instanceof RegExp) {
          validate = valid.type;
        } else {
          validate = this.dataType[valid.type].type;
          isValidateDataType = true;
        }
        if (!(validate.test(val))) {
          result = {
            status: false,
            info: valid.info || (isValidateDataType ? this.dataType[valid.type].info : 'error')
          }
        }
      }
    });
    if(!isAjax){
      resolve(result);
    }
  });
}

