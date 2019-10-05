import express from 'express';
import ClientFactory from '../Clients/Factory';
import ClientModal from './Model';
const router = express.Router();

router.post('/new', (req, res) => {

    const Client = new ClientFactory(req, res, ClientModal);
    Client.AddNewClient()

});

router.get('/', (req, res) => {

    const Client = new ClientFactory(req, res, ClientModal);
    Client.GetAllClients();

});

router.get('/:client_id', (req, res) => {

    const Client = new ClientFactory(req, res, ClientModal);
    Client.GetClientById()

});

// router.patch('/client/:client_id', (req, res) => {
//
//     const Client = new ClientFactory(req, res);
//     Client.EditClient()
//
// });

export default router;
