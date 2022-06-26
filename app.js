const express = require('express')
const app = express()
const hbs = require('hbs');
require('dotenv').config();

const port = process.env.PORT 

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use(express.static('public'))

app.get('/', (req,res) =>{
    res.render('home', {
        nombre: 'Alexis',
        titulo: 'Home'
    })
})

app.get('*', (req,res) =>{
    res.send('404 | pagina no encontrada')
})



app.listen(port)