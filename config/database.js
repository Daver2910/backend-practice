const dbCallback = (message) => {
    console.log(message)
};

export const mongoDB_dev = ['mongodb://David:Password1234@ds151247.mlab.com:51247/reservations-dev', { useNewUrlParser: true }, dbCallback('connected to development database')];

export const mongoDB_test = ['mongodb://David:Password1234@ds151247.mlab.com:51247/reservations-test', { useNewUrlParser: true }, dbCallback('connected to test database')];
