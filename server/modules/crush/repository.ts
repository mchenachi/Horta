import * as mongoose from 'mongoose';
import UsuarioSchema from './schema';
//import HortaSchema from './schema';
export default mongoose.model('Usuario', UsuarioSchema);
//export var horta = mongoose.model('Hosta', HortaSchema);