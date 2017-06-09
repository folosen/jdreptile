var request = require("request");

var options = { method: 'POST',
  url: 'http://localhost:8000/doload',
  headers: 
   { 'content-type': 'application/x-www-form-urlencoded',
     'postman-token': '6d1bc037-3f74-6a2c-d3da-426e2070bc5a',
     'cache-control': 'no-cache',
     'accept-charset': 'UTF-8' },
  form: 
   { url: 'https://passport.jd.com/uc/login',
     renderTime: '6000',
     script: '$("#loginname").val("seimimaster");$("#nloginpwd").val("seimi");$(".login-btn>a").click();',
     contentType: 'img',
     useCookie: '1' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  //body 为图片文件流，自行处理
});