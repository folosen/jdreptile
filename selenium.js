var request = require("request");
var fs = require("fs");
var cheerio = require("cheerio");
var superagent = require("superagent");
var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

driver.get('https://passport.jd.com/new/login.aspx')
.then(function(){
    driver.findElement(webdriver.By.className('login-tab-r')).click();
})
.then(function(){
    driver.findElement(webdriver.By.id('loginname')).sendKeys("18659903982");
})
.then(function(){
    driver.findElement(webdriver.By.id('nloginpwd')).sendKeys("");
})
.then(function(){
    driver.findElement(webdriver.By.id("loginsubmit")).click();
})
.then(function(){
    sleep(3000);
    driver.findElement(webdriver.By.id("ttbar-login")).click();
})
.then(function(){
    sleep(3000);
    console.log("获取句柄切换窗口");
    driver.getAllWindowHandles().then(function(handles){
    //这是切换到第二个tab页
       var handles = handles;
       driver.switchTo().window(handles[1]); 
       driver.findElement(webdriver.By.className("alink")).click();
    });
})

// function buildCookieMap(cookies) {
//     var map = {};
//     cookies.forEach(function (cookie) {
//         map[cookie.name] = cookie;
//     });
//     return map;
// }
function sleep(d) {
    for (var t = Date.now(); Date.now() - t <= d;);
}

//driver.quit();
// var options = { method: 'POST',
//   url: 'http://localhost:8000/doload',
//   headers: 
//    { 'content-type': 'application/x-www-form-urlencoded',
//      'postman-token': '6d1bc037-3f74-6a2c-d3da-426e2070bc5a',
//      'cache-control': 'no-cache',
//      'accept-charset': 'UTF-8' },
//   form: 
//    { url: 'https://passport.jd.com/uc/login',
//      renderTime: '6000',
//      script: '$("#loginname").val("seimimaster");$("#nloginpwd").val("seimi");$(".login-btn>a").click();',
//      contentType: 'img',
//      useCookie: '1' } };

// request(options, function (error, response, body) { 
//   if (error) throw new Error(error);
//   //body 为图片文件流，自行处理
// });
// superagent
//   .get('https://www.pixiv.net/')
//   .end(function(err, res){
//     $ = cheerio.load(res.text);
//     // console.log($("#wrapper").html());
    
//     fs.writeFile("pixiv.txt", res.text, function(err) {
//         if(err) {
//             return console.log(err);
//         }        
//     });
//   });
