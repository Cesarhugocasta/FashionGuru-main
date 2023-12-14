const db = require('../dbconection');

class CategoriasModel {
    static async consultar() {
        let query = db('categorias_ropa');
        return await query;
    }

    static async consultarPorID(id){
        return await db('categorias_ropa').where('id_categoria', id);
    }
    
}

module.exports = CategoriasModel;