const express= require('express');
var bodyParser = require('body-parser');

const CategoriasController = require('./controllers/CategoriasController');
const InventarioController = require('./controllers/InventarioController');
const UsuariosController = require('./controllers/UsuariosController');
const CitasController = require('./controllers/CitasController');
const app = express();
//Definimos el puerto 80
const puerto = 80;

const cors = require('cors');


app.use(cors());
app.use(express.json());

app.get('/', function (req, res){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send(' Fashionuru ');
});

app.get('/citas', CitasController.indexGet);
app.post('/citas', CitasController.agregar);
app.get('/citas/:id([0-9]+)', CitasController.itemGet);

app.get('/usuarios', UsuariosController.indexGet);
app.post('/usuarios', UsuariosController.agregar);

app.get('/categorias', CategoriasController.indexGet);
app.get('/inventario', InventarioController.indexGet);

app.listen(puerto, function(){
    console.log("Servidor en espera http://localhost");

});