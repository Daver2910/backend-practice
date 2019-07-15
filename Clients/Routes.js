import express from 'express';
import ClientFactory from '../Clients/Factory';
const router = express.Router();

router.post('/new', (req, res) => {

    const Client = new ClientFactory(req, res);
    Client.AddNewClient()

});

router.get('/:client_id', (req, res) => {

    const Client = new ClientFactory(req, res);
    Client.GetClientById()

});

// router.patch('/client/:client_id', (req, res) => {
//
//     const Client = new ClientFactory(req, res);
//     Client.EditClient()
//
// });

export default router;
