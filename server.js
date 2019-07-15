import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
const mongoose = require('mongoose');
import logger from 'morgan';
import Client from './Clients/Routes';
import Calendar from './Calendar/Routes';
const app = express();
const Port = 1234;

class Server {

    constructor () {
        this.initDB();
        this.initMiddleware();
        this.initRoutes();
        this.Start();
    }

    initDB () {
        mongoose.connect('mongodb://David:Password1234@ds151247.mlab.com:51247/reservations-dev', { useNewUrlParser: true }, () => {
            console.log('connected to db')
        })
    }

    initMiddleware () {
        app.use(logger('dev'));
        app.use(express.json());
        app.use(express.urlencoded({extended: false}));
        app.use(cookieParser());
        app.use(express.static(path.join(__dirname, 'public')));
    }

    initRoutes() {
        app.use('/client', Client);
        app.use('/calendar', Calendar);
    }

    Start() {
        app.listen(Port, () => console.log(`Listening on port ${Port}`))
    }
}

new Server();
