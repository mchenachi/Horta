import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

// const CrushSchema = new mongoose.Schema({
//     nome: { type: String, required: true },
//     apelido: { type: String, unique: true, required: true },
//     whatsapp: { type: String, unique: true, required: true },
//     observacoes: { type: String, required: true },
//     foto: { type: String, required: true },
//     nota: { type: String, required: true },
//     createdAt: { type: Date, default: Date.now }
// });
//export default CrushSchema


const Historico = new Schema({
    ph: { type: Number, min: 0, max: 14 },
    data: Date,
    turbidez: Number,
    vazao: String,
    umidadeRelAr: String,
    temperatura: String
});

const PedidoSchema = new Schema({
    quantidade: Number,
    Preco: Number
});

const UsuarioSchema = new Schema({
    nome: String,
    sobrenome: String,
    senha: String,
    cpf: Number,
    email: { type: String, lowercase: true },
    endereco: String,
    numero: String,
    telefone: String,
    cidade: String,
    estado: String,
    //hortas: [Horta],
    pedidos: [PedidoSchema],
    googleId: String,
    facebookId: String
});

const HortaSchema = new Schema({
    nome: String,
    cidade: String,
    temperatura: Number,
    profSolo: Number,
    nutrientes: String,
    clima: String,
    umidade: Number,
    ph: { type: Number, min: 0, max: 14 },
    data: Date,
    turbidez: Number,
    vazao: String,
    umidadeRelAr: String,
    historico: [Historico]

});

export default UsuarioSchema;
//UsuarioSchema.plugin(AutomIncrement, {hortas: {id}});

// module.exports = mongoose.model('Usuario', UsuarioSchema);
//module.exports = HortaSchema;

// module.exports.createUser = function (newUser, callback) {
// 	var bcrypt = require('bcryptjs');
// 	bcrypt.genSalt(10, function (err, salt) {
// 		bcrypt.hash(newUser.senha, salt, function (err, hash) {
// 			newUser.senha = hash;
// 			newUser.save(callback);
// 		});
// 	});
// }