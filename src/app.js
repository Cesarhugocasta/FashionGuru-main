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
app.post('/citas', CitasController.agregar);
app.put('/citas/:id([0-9]+)', CitasController.editar);
app.patch('/citas/:id([0-9]+)', CitasController.itemPatch);


app.get('/usuarios', UsuariosController.indexGet);
app.post('/usuarios', UsuariosController.agregar);
app.post('/usuarios', UsuariosController.agregar);
app.put('/usuarios/:id([0-9]+)', UsuariosController.editar);
app.patch('/usuarios/:id([0-9]+)', UsuariosController.itemPatch);

app.get('/categorias', CategoriasController.indexGet);
app.post('/categorias', CategoriasController.agregar);
app.put('/categorias/:id([0-9]+)', CategoriasController.editar);
app.patch('/categorias/:id([0-9]+)', CategoriasController.itemPatch);

app.get('/inventario', InventarioController.indexGet);
app.post('/inventario', InventarioController.agregar);
app.put('/inventario/:id([0-9]+)', InventarioController.editar);
app.patch('/inventario/:id([0-9]+)', InventarioController.itemPatch);

app.listen(puerto, function(){
    console.log("Servidor en espera http://localhost");

});