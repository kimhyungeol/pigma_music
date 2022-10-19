var express = require('express');
var router = express.Router();
const template = require('../lib/template.js');
const qs = require('querystring');

router.get('/', function(request, response) {
    var title = 'Welcome';
    var description = 'Hello, Node.js ';
    var list = template.list(request.list);
    var html = template.HTML(title, list,
      `<h2>${title}</h2>${description}
      <img src="./images/sss.jpg" style="width=300px; display:block; margin:top;">`,
      `<a href="/page/create">create</a>`
     );
    response.send(html);
  });

  module.exports = router;