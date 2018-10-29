import Usuario from './repository';

class UsuarioController {
    constructor() { }
    getAll() {
        return Usuario.find({});
    }
    getByID(id) {
        return Usuario.findById(id);
    }
    create(usuario) {
        return Usuario.create(usuario);
    }
    /*createHorta(horta) {
        return Horta.create(horta);
    }*/
    // update(id, usuario) {
    //     const updateCrush = {
    //         nome: usuario.nome,
    //         apelido: usuario.apelido,
    //         whatsapp: usuario.whatsapp,
    //         observacoes: usuario.observacoes,
    //         foto: usuario.foto,
    //         nota: usuario.nota
    //     }
    //     return usuario.findByIdAndUpdate(id, updateCrush);
    // }
    delete(id) {
        return Usuario.remove(id);
    }
}
export default new UsuarioController();