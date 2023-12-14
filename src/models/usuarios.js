const db = require('../dbconection');

class UsuariosModel {
    static async consultar(){
        let query = db('usuarios');
        return await query;
    }

    static async consultarPorID(id){
        return await db('usuarios').where('id_usuario', id);
    }

    static async agregarUsuario(usuarios) {
        let query = db('usuarios').insert(usuarios)
        return await query;
        
    }
}

module.exports = UsuariosModel;