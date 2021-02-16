const pg = require('pg');

// 2. on va créer un client à partir de ce module
const client = new pg.Client({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

// 3. on va dire à ce client "connecte toi !"
client.connect();

// 4 et dernier point : exporter le client qui est connecté !
module.exports = client;