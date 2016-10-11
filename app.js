var express = require('express')

var app = express()
var port = 3000

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index')
})

app.use(express.static('public'))

app.listen(port)
console.log('Server running at http://localhost:' + port + '/')
