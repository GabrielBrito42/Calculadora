const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('src'))

app.get('/', function(req, res){
	res.render('index')
})

app.listen(port, () => console.log(`O app esta escutando em http://localhost/${port}`))