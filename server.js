const express = require ('express')

const app = express()

app.use('/',express.static(__dirname+'/public'))

app.listen('2145',()=>console.log('running at http://localhost:2145'))