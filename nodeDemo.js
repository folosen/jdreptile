// try{
//     process.nextTick(function () {
//         throw new Error("error");
//     })
// } catch (err) {
//     console.log(err);
// }
// try {
//   setTimeout(function(){
//     throw new Error("error");
//   },1)
// } catch (err) {
//   //can not catch it
//   console.log(err);
// }
// function async2(continuation){
//   setTimeout(function(){
//     try {
//       var res = 42;
//       if(false)
//         throw new Error("woops!")
//       else
//         continuation(null,res);
//     } catch (error) {
//       continuation(error,null);
//     }
//   })
// };
// async2(function(err,res){
//   if(err)
//     console.log("err:",err);
//   else
//     console.log("cps:",res)
// })
// var EventEmitter = require('events').EventEmitter;
// var emitter = new EventEmitter();
// emitter.emit('error', new Error('something bad happened'));

// emitter.on('error',function(err){
//   console.error('出错：'+err.message)
// })
// var logger = require('tracer').console();
// process.on('uncaughtException', function(err) {
//   console.error('Error caught in uncaughtException event:', err);
// });

// try {
//   setTimeout(function(){
//     throw new Error("error");
//   },1);
// } catch (err) {
//   //can not catch it
//   console.log(err);
// }
// var jquery = require('jquery');
// var demo = require("demo");
// var define = require("define")
// exports.$ = jquery;
// console.log(demo.area(2));
// demo.on('ready', function() {
//   console.log('module a is ready');
// });

// define([
//     'demo',
// ], function(a) {
//     console.log(a.addX(1))
// });

// define(function (require, exports, module){
//   var demo = require("demo");
// //   exports.x = function (){
// //     demo.x;
// //   };
//   console.log(demo.x);
// });
// require("demo")();
// Object.keys(require.cache).forEach(function(key) {
//   console.log(key);
// })
// var fs = require("fs");
// //var process = require("process");
// fs.readFile('pixiv.txt',"utf-8",function(err,buffer){
//   if(err) throw err;
//   console.log(buffer);
// })
// var path = require('path');
// console.log=function(d){
//     process.stdout.write(d + '\n')
// }
// console.log(path.join("index.html","foo"));
// console.log(process.argv);
// console.log(process.execPath);
// console.log(process.execArgv);
// console.log(process.env);
// var bytes = new Buffer(256);
// var end = bytes.slice(240, 256);
// console.log(bytes.length);
// console.log(end.length);
// console.log(end)

