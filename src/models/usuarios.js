const db = require('../dbconection');

class UsuariosModel {
    static async consultar(){
        let query = db('usuarios');
        return await query;
    }

    static async consultarPorID(id){
        return await db('usuarios').where('id_usuario', id);
    }

    static async agregar(usuarios) {
        

        let query = db('usuarios').insert(usuarios)
        return await query;
    }
    static async editar(id,usuarios) {
       
        let query = db('usuarios')
        .where({ id_usuario: id })
        .update(usuarios)
        return await query;
    }
    static async actualizar(id_usuario, campos) {
        
        return await db('usuarios').where('id_usuario', id_usuario).update(campos);
    }
}

module.exports = UsuariosModel;