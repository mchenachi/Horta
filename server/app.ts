import * as express from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
const cors = require('cors');
import DataBase from './config/db';
import UsuarioRoutes from './modules/crush/routes';
class App {
    public app: express.Application;
    private morgan: morgan.Morgan;
    private bodyParser;
    private database: DataBase
    constructor() {
        this.database = new DataBase();
        this.dataBaseConnection();
        this.app = express();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }
    routes() {
        this.app.route('/').get((req, res) => res.status(200).json({ 'message': 'Hello world!' }));
        this.app.route('/api/usuarios').get(UsuarioRoutes.getAll);
        this.app.route('/api/usuarios/:id').get(UsuarioRoutes.getByID);
        this.app.route('/api/usuarios').post(UsuarioRoutes.create);
        //this.app.route('/api/usuarios').post(CrushRoutes.createHorta);
        // this.app.route('/api/crushs/:id').put(CrushRoutes.update);
        this.app.route('/api/usuarios/:id').delete(UsuarioRoutes.delete);
    }

    dataBaseConnection() {
        this.database.createConnection();
    }

    closeDataBaseConnection(message, callback) {
        this.database.closeConnection(message, () => callback());
    }
}
export default new App();