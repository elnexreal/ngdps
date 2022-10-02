const express = require('express');
const fs = require('fs')
const app = express();
const PORT = 80;

/* Start listening for requests */
app.listen(
    PORT, () => console.log(`The server is running on port ${PORT}`)
);

/* Middleware function */
app.use(express.json())

/* Creates endpoint for every file in ./routes */
fs.readdirSync('./routes').forEach(f => {
    app.use(`/${f.slice(0, -3)}`, require(`./routes/${f.slice(0, -3)}`))
})