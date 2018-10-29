import UsuarioController from './controller';
import * as httpStatus from 'http-status';

const sendResponse = function (res, statusCode, data) {
    res.status(statusCode).json({ 'result': data });
}
class UsuarioRoutes {

    constructor() { }
    getAll(req, res) {
        UsuarioController
            .getAll()
            .then(usuarios => sendResponse(res, httpStatus.OK, usuarios))
            .catch(err => console.error.bind(console, 'Erro: ' + err));
    }
    getByID(req, res) {
        const id = { _id: req.params.id }
        if (!id) {
            sendResponse(res, httpStatus.OK, 'Crush não encontrado');
        }
        UsuarioController
            .getByID(id)
            .then(usuario => sendResponse(res, httpStatus.OK, usuario))
            .catch(err => console.error.bind(console, 'Erro: ' + err));
    }
    create(req, res) {
        const usuario = req.body;
        UsuarioController
            .create(usuario)
            .then(usuario => sendResponse(res, httpStatus.CREATED, "Usuario criado com sucesso!"))
            .catch(err => console.error.bind(console, 'Erro: ' + err));
    }

    /*createHorta(req, res) {
        const horta = req.body;
        const id = { _id: req.params.id }
        UsuarioController.createHorta(horta).then(horta => {
            console.log(horta)
        });
        UsuarioController.getByID(id).then(usuario => {
            console.log(usuario)
            usuario.hortas.push(
                UsuarioController.createHorta(horta)
            );
        });
    }*/

    // update(req, res) {
    //     const id = { _id: req.params.id }
    //     const crush = req.body;
    //     CrushController
    //         .update(id, crush)
    //         .then(crush => sendResponse(res, httpStatus.OK, "Crush alterado!"))
    //         .catch(err => console.error.bind(console, 'Erro: ' + err));
    // }
    delete(req, res) {
        const id = { _id: req.params.id }
        UsuarioController
            .delete(id)
            .then(result => sendResponse(res, httpStatus.OK, result))
            .catch(err => console.error.bind(console, 'Erro: ' + err));
    }
}
export default new UsuarioRoutes();