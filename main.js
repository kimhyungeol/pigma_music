const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const compression = require('compression');
const indexRouter = require('./router/index');
const pageRouter = require('./router/page');
app.use(helmet());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(compression());
app.get('*',function(request, response, next){
  fs.readdir('./data', function(error, filelist){
    request.list = filelist;
    next();
  });
})
app.use('/', indexRouter);
app.use('/page', pageRouter);


app.use(function(request,response, next){
  response.status(404).send('not found sorry');
})

app.use(function(err,request,response, next){
  console.error(err.stack);
  response.status(500).send('somtindddg broken');
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))
