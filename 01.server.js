var express = require('express');
// 处理数据模块
var bodyParser = require('body-parser')

var fs = require('fs');

var app = express();

// 处理文件模块
var multer = require('multer');
// var upload = multer({dest:'upload/'}); //指定上传的目录

//ejs
app.set('view engine', 'ejs');

// 判断是否有这个文件夹，如有，直接添加，没有就创建
var createFolder = function(folder){
    try{
        fs.accessSync(folder);
    }catch(e){
        fs.mkdirSync(folder);
    }
}

var uploadFolder = './uploadsss';
createFolder(uploadFolder); 

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadFolder)  //存放在临时文件中
    },
    filename: function (req, file, cb) {
    //cb(null, file.fieldname + '-' + Date.now()) //修改文件名称，在存储
        cb(null, file.originalname) //源文件名称，存储
    }
  })

  var upload = multer({ storage: storage })

//中间件
// 处理表单数据
// app.use(bodyParser.urlencoded({extended:false}))

// 处理josn数据
app.use(bodyParser.json())

app.get('/',function(req,res){
    // res.send('this is the homepage')
    var resJOSN ={
        name:'先进性',
        age:24,
        sex:'女'
    }

    res.send(resJOSN);
});

// 表单上传 固定的没有使用ejs
// app.get('/form',function(req,res){
   
// // var form = fs.readFileSync('./form.html',{ encoding:"utf8"}); //读取·文件
// //     res.send(form);
// res.sendFile(__dirname + '/form.html'); //读取·文件
// });

// 使用ejs
app.get('/form/:name',function(req,res){
    // var person = req.params.name;
    // res.render('form',{person:person});
    // 也可以写成对象
    var data = {age:18,job:'IT',hioho:['美妆','数据','没电']}
    res.render('form',{data:data}); //读取·文件
    });

app.get('/about',function(req,res){
        
    res.render('about'); //读取·文件
});
    

// 上传文件并处理
app.post('/upload',upload.single('logo'),function(req,res){
    console.dir(req.file);  //输出文件信息
    res.send({'ret_code':0});
})

app.get('/home/:id',function(req,res){
    console.dir(req.params);//获取动态参数
    res.send('this is home id'+req.params.id)
})

app.get('/home/:id/user/:name',function(req,res){
    console.dir(req.params);//获取动态参数
    res.send('this is home id'+req.params.name)
})

app.get('/user',function(req,res){
    console.dir(req.query);//获取参数和值
    res.send('this is user:'+req.query.find);
})

// 获取post数据
app.post('/',function(req,res){
    console.dir(req.body);
    res.send('ok');
})

app.listen(3000);

console.log('hoole world');
