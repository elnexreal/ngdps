const sql = require('mysql')

/* Set up the connection to the database */
const connection = sql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'usbw',
    database: 'geometrydash'
})

/* Connect to the server */
connection.connect((err) => {
    if (err) throw err
    console.log(`Connected to database succesfully`)
})

/* Set up the query system to access the data from the db */
function query(query){
    connection.query(query)
}

module.exports = { query }