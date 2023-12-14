const db = require('../dbconection');

class CitasModel {
    static async consultar() {
        let query = db('citas');
        return await query;
    }

    static async consultarPorID(id){
        return await db('citas').where('id_citas', id);
    }
    static async agregar(citas) {
        
        let query = db('citas').insert(citas)
        return await query;
    }

    static async editar(id,citas) {
        
        let query = db('citas')
        .where({ id_cita: id })
        .update(citas)
        return await query;
    }
    static async actualizar(id_cita, campos) {
      
        return await db('citas').where('id_cita', id_cita).update(campos);
    }
    
}

module.exports = CitasModel;
