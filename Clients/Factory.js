const ClientModel = require('./Model');

class ClientFactory {

    constructor(req, res) {
        this.res = res;
        this.opening_hours = req.body.opening_hours;
        this.ExistingClientId = req.params.client_id;

        this.ClientObject = new ClientModel({
            client_id: req.body.client_id,
            name: req.body.name,
            address: {
                addressLine1: req.body.addressLine1,
                addressLine2: req.body.addressLine2,
                city: req.body.city,
                state: req.body.state,
                zipcode: req.body.zipcode,
            },
            phone: req.body.phone,
            website: req.body.website,
            email: req.body.email,
        });
    }

    GetClientById () {
        ClientModel.findOne({client_id: this.ExistingClientId})
            .then(Client => {
                this.res.status(200)
                    .send(Client)
                    .end();
            })
            .catch(error => this.res.json({
                message: error
            }));
    }

    AddNewClient() {
        this.ClientObject
            .save()
            .then((DBClient) => {
                this.res
                    .status(200)
                    .send(DBClient)
                    .end()
            })
            .catch(error => {
                this.res
                    .status(404)
                    .json({
                        message: error
                    })
            })
    }
}

export default ClientFactory;
