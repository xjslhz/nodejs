var express = require('express');
var app = express();

// 加载静态文件
// app.use(express.static('public'));

// app.use('/asstec',express.static('public'));//添加路由

// app.use(function(seq,res,next){
//     console.log('useing middleware');
//     next();
//     console.log('useing middleware after') //测试执行顺序
// })
// app.use(function(seq,res,next){
//     console.log('sceond middleware');
//     // next();
//     res.send('ok');
// })

// 导入路由
var indexRouter = require('./routes/index');
var userRouter = require('./routes/user')

app.use('/',indexRouter);
app.use('/user',userRouter);


app.listen(3000);

console.log('middleware');