const Koa = require('koa');

const bodyParser = require('koa-bodyparser');
const fs = require('fs');
const buf = new Buffer(1024);
const iconv = require('iconv-lite');


const controller = require('./controller');

const app = new Koa();

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// parse request body:
app.use(bodyParser());


//读文件
// fs.open('E:/node.js/node/input.txt','r+',function(err,fd){
//   if(err){
//     return console.error(err);
//   }   
//   console.log("打开文件成功，准备读取文件！")

//   fs.read(fd,buf,0,buf.length,0,function(err,bytes){
//     if(err){
//       return console.error(err);
//     } 
//     console.log(iconv.decode(buf.slice(0,bytes),'gbk'));
//     fs.close(fd,function(err){
//       if(err){
//         return console.error(err);
//       }
//     });
//   });
// });

// add controller:
app.use(controller());

app.listen(3000);
console.log('app started at port 3000...');