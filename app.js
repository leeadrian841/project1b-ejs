var express = require('express')

var app = express()
var port = 4000

// var static_routes = ('./routes/pages')

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index')
})

app.use(express.static('public'))
// app.use('/', static_routes)

app.listen(port)
console.log('Server running at http://localhost:' + port + '/')
