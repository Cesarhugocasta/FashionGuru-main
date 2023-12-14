const db = require('../dbconection');

class InventarioModel {
    static async consultar() {
        let query = db('inventario_ropa');
        return await query;
    }

    static async consultarPorID(id){
        return await db('inventario_ropa').where('id_ropa', id);
    }
    static async agregar(inventario) {
        
        let query = db('inventario_ropa').insert(inventario)
        return await query;
    }

    static async editar(id,inventario) {
        
        let query = db('inventario_ropa')
        .where({ id_ropa: id })
        .update(inventario)
        return await query;
    }
    static async actualizar(id_ropa, campos) {
      
        return await db('inventario_ropa').where('id_ropa', id_ropa).update(campos);
    }
    
}



module.exports = InventarioModel;