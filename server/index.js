const path = require('path');
const express = require('express');
const app = express();

app.post('/api/getComments', (req, res, next) => {
  res.json({
      data: '后台返回结果 getComments'
    })
})
app.get('/b',(req,res,next)=>{
    res.send('asdasdasd')
})
// 监听端口
app.listen(5050);
console.log('success listen at port:5050......');