const express = require('express')
const app = express()
var cors = require('cors')
const PORT = process.env.PORT || 3000

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/student', function (req, res) {
    var data=[
        {id:1, name:'nicolas'},
        {id:2, name:'gaya'},
        {id:3, name:'kouka'},
        {id:4, name:'edward'}
    ]

    res.send(data)
  })


app.listen(PORT)
