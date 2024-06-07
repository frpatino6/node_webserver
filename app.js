const express = require('express')
const hbs = require('hbs')
require('dotenv').config();
const app = express()
const port = process.env.PORT || 3000;

// Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', function (err) { });


// servir contenido estático
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Home ',
        titulo: 'Curso de Node'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Elements ',
        titulo: 'Curso de Node'
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Generic ',
        titulo: 'Curso de Node'
    });
})


// app.get('/generic', (req, res) =>
//     res.sendFile(__dirname +'/public/generic.html')
// )

// app.get('/elements', (req, res) =>
//     res.sendFile(__dirname +'/public/elements.html')
// )

// Esta ruta debe ir al final
app.get('*', (req, res) =>
    res.sendFile(__dirname + '/public/404.html')
)

app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}/`)
)