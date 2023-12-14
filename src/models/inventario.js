const db = require('../dbconection');

class InventarioModel {
    static async consultar() {
        let query = db('inventario_ropa');
        return await query;
    }

    static async consultarPorID(id){
        return await db('inventario_ropa').where('id_ropa', id);
    }
    
}



module.exports = InventarioModel;