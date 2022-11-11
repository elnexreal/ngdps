import SQL, { QueryOptions } from 'mysql';

let connection: SQL.Connection = SQL.createConnection({
     host: process.env.host || "0.0.0.0",
     port: parseInt(process.env.port),
     user: process.env.user,
     password: process.env.password,
     database: process.env.database
});

/**
 * @returns Whether or not the connection was successful.
 */
export function connect(): Promise<boolean> {
     return new Promise((resolve, reject) => {
          connection.connect((err) => {
               if (!!err) return reject(err);

               return resolve(true);
          });
     });
}

/**
 * Queries the database,
 * possibly a to-do but create a class for this?
 */
export async function query(query: string): Promise<boolean | SQL.Query> {
     return new Promise((resolve, _reject) => {
          connection.query(query, (err, res) => {
               if (err) {
                    // we could reject, but we're going to resolve
                    // reject(err);
                    return resolve(false);
               } else {
                    return resolve(res);
               }
          })
     });
}