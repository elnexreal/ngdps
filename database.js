require('dotenv').config()
const sql = require('mysql')

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
        if (err) throw err
        console.log(`Connected to database succesfully`)
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