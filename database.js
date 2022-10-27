require('dotenv').config()
const sql = require('mysql')
const colors = require('colors')

/* Set up the connection to the database */
const connection = sql.createConnection({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
})

/* Connect to the server */
function connect() {
    connection.connect((err) => {
        if (err && err.code === 'ECONNREFUSED') {
            console.log(`Couldn't connect to database in ${process.env.host}:${process.env.port}, check if the database server is running and try again...`.red)
            process.exit()
        } else {
            console.log(`Connected to database succesfully.`.green)
        }
    })
}

/* Set up the query system to run commands on the db */
/**
 *   @param {SQLQuery} query - Command to execute on the database
 */
function query(query) {
    connection.query(query)
}

module.exports = {
    query,
    connect
}