import {mongoDB_test} from "../../config/database";
import Client from '../../Clients/Model';
const mongoose = require('mongoose');
mongoose.connect(...mongoDB_test);

describe('Client Model test', () => {

    beforeAll(async () => {
        await Client.remove({});
    });

    afterEach(async () => {
        await Client.remove({});
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    test('it has a module', () => {
        expect(Client).toBeDefined();
    })



});
