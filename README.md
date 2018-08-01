##swig  JavaScript模板引擎
GitHub地址 https://github.com/paularmstrong/swig
使用示例
page.html
```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8" />
    <title>{{ title }}</title>


</head>
<body>

    <h1>{{ title }}</h1>

    <ul>
        {% for person in people %}
        <li>{{ person.name }} age {{ person.age }}</li>
        {% endfor %}
    </ul>

</body>
</html>
```
server.js
```js
var http = require('http'),
  swig = require(__dirname + '/../../index');
/**index中的内容  module.exports = require('./lib/swig');*/
http.createServer(function (req, res) {
  var tmpl = swig.compileFile(__dirname + '/page.html'),
    renderedHtml = tmpl({
      people: [
        { name: 'Paul', age: 28 },
        { name: 'Jane', age: 26 },
        { name: 'Jimmy', age: 45 }
      ],
      title: 'Basic Example'
    });

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(renderedHtml);
}).listen(1337);

console.log('Application Started on http://localhost:1337/');
```
结合express使用
server.js
```js
var express = require('express'),
  swig = require('../../index'),
  http = require('http'),
  app = express(),
  people;
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


app.get('/', function (req, res) {
  res.render('index', {});
});

app.get('/people', function (req, res) {
  res.render('people', { people: people });
});

app.get('/people/:id', function (req, res) {
  res.render('person', { person: people[req.params.id] });
});

app.get('/*', function (req, res) {
  res.render(req.params[0], {});
});

people = [
  { name: 'Paul', age: 28 },
  { name: 'Jane', age: 26 },
  { name: 'Jimmy', age: 45 }
];

app.listen(1337);
console.log('Application Started on http://localhost:1337/');
```
html部分代码查看GitHub

##mongoose对象模型工具
基础使用博客
https://www.cnblogs.com/xiaohuochai/p/7215067.html?utm_source=itdadao&utm_medium=referral
