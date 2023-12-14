const CitasModel = require('../models/citas');
class CitasController {
    static async indexGet(req, res){
        let data = await CitasModel.consultar();
        res.send(data);
    }
    static async itemGet(req, res){
        let data = await CitasModel.consultarPorId(req.params.id);
        if (data.length == 0){
            res.status(404).send({code: 404, message:'not found'});
        }
        res.send(data[0]);
    }
    static async agregar(req, res){
        console.log(req.body);
        let nombre = req.body.nombre;
        let data = await CitasModel.agregarcita(nombre,res);
        return res.end('yes');
    }
}

module.exports = CitasController;