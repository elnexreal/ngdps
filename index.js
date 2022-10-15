const db = require('./database')
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 80;

/* Start listening for requests */
app.listen(
    PORT, () => console.log(`The server is running on port ${PORT}`)
);

/* Middleware function */
app.use(require('body-parser').urlencoded({ extended: true }));

/* Connect to the database */
db.connect()

/* Creates endpoints for every file in ./routes */
fs.readdirSync('./routes').forEach(f => {
    app.use(`/database/${f.slice(0, -3)}`, require(`./routes/${f.slice(0, -3)}`))
});

/* Creates endpoints for every file in ./accounts */
fs.readdirSync('./accounts').forEach(f => {
    app.use(`/database/accounts/${f.slice(0, -3)}`, require(`./accounts/${f.slice(0, -3)}`))
});