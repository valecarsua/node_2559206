const express = require ('express')

const app = express ()
const path = require ('path')
const hbs = require ('hbs')

const puerto = 8081

app.use(express.static('public'))

app.set ('views', path.join(__dirname+'/public/views'))
app.set ('view engine', 'hbs')

//configuración del directorio que guardara los archivos 
hbs. registerPartials(__dirname + '/public/views/partials');

app.get ('/', (req, res) => {
    //res.write('Home')
    //res.end()
    res.render('home', {
        titulo: 'Home',
        nombre: 'Valeria Carmona'
    })
})

app.get ('/productos', (req, res) => {
    //res.write('Home')
    //res.end()
    res.render('productos', {
        titulo: 'listado de productos',
        nombre: 'Valeria Carmona',
        rol1: 'Admin'
    })
})

app.listen(puerto, () => {
    console.log (`Escuchando el puerto ${puerto}`)
})