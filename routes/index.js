var express = require('express');

var router = express.Router();

router.get('/',function(req,res,next){
    res.send('root');
})

// 导出
module.exports = router;