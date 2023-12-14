const CategoriasModel = require('../models/categorias');

class CategoriasController {
    static async indexGet(req, res){
        let data = await CategoriasModel.consultar();
        res.send(data);
    }
}

module.exports = CategoriasController;