const db = require('../dbconection');

class CitasModel {
    static async consultar() {
        let query = db('citas');
        return await query;
    }

    static async consultarPorID(id){
        return await db('citas').where('id_citas', id);
    }

    static async agregarCita(fecha_cita, res){
        if (!fecha_cita){
            return res.json({
                success: false,
                message: 'Un error ha ocurrido. Por favor, inténtelo más tarde'
            });
        }

        db('citas')
            .insert({fecha_cita})
            .then(() => {
                // Envía una respuesta exitosa después de la inserción
                return res.json({
                    success: true,
                    message: 'Cita agregada exitosamente'
                });
            })
            .catch((err) => {
                console.log(err);
                return res.json({
                    success: false,
                    message: 'Un error ha ocurrido. Por favor, inténtelo más tarde'
                });
            });
    }
}

module.exports = CitasModel;
