const db = require('../dbconection');

class CategoriasModel {
    static async consultar() {
        let query = db('categorias_ropa');
        return await query;
    }

    static async consultarPorID(id){
      
        return await db('categorias_ropa').where('id_categoria', id);
    }
    
    static async agregar(categorias) {
        
        let query = db('categorias_ropa').insert(categorias)
        return await query;
    }

    static async editar(id,categorias) {
        
        let query = db('categorias_ropa')
        .where({ id_categorias: id })
        .update(categorias)
        return await query;
    }
    static async actualizar(id_categoria, campos) {
     
        return await db('categorias').where('id_categoria', id_categoria).update(campos);
    }
    
}

module.exports = CategoriasModel;