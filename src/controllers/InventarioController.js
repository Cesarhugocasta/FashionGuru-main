const InventarioModel = require('../models/inventario');

class InventarioController {
    static async indexGet(req, res){
        let data = await InventarioModel.consultar();
        res.send(data);
    }
}

module.exports = InventarioController;