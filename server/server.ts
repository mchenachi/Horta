import App from './app';
App.app.listen(5000, () => console.log('servidor rodando, porta: 5000'));

process.once('SIGUSR2', () => App.closeDataBaseConnection('nodemon restart', () => process.kill(process.pid, 'SIGUSR2')));
process.on('SIGINT', () => App.closeDataBaseConnection('execução foi interrompida', () => process.exit(0)));