var bodyParser = require('body-parser');//处理表单数据

var urlencodedParser = bodyParser.urlencoded({ extended: false })

var data = [{item:'新世纪'},{item:'知识'},{item:'保持卡'}]

module.exports = function(app){
    // 列表查询
    app.get('/todo',function(req,res){
        res.render('todo',{todos:data});
    });
    //新增
    app.post('/todo',urlencodedParser,function(req,res){
        data.push(req.body);
        res.json(data);
    });
    // 删除
    app.delete('/todo/:item',function(req,res){
        data = data.filter(function(todo){
           return todo.item.replace(/ /g,'-') !== req.params.item;
        });
        res.json(data);
    });
}