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
var demo = require("demo");
console.log(demo.x);
console.log(demo.addX(5));

