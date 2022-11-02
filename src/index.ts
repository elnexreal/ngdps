import * as db from "./lib/db";
import * as colors from 'colors';
import bodyParser from "body-parser";
import type { Application } from "express";
import express from "express";

const app: Application = express();

app.use(
     bodyParser.urlencoded({
          extended: true
     })
);

// For some fucked up reason, top level await isn't being
// applied here. >=(

(async () => {
     await db.connect().catch(e => {
          console.log(`Failed to connect to database, is it setup?`);
          process.exit();
     });

     // 8080 is the standard mapped to 80
     app.listen(8080, () => console.log("Listening on port: 8080"));
})();