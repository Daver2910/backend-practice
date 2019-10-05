import app from './app';
import {mongoDB_dev} from "./config/database";
const mongoose = require('mongoose');
const Port = 1234;

mongoose.connect(...mongoDB_dev);

app.listen(Port, () => console.log(`Listening on port ${Port}`));
