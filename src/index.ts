import { db } from "$lib";
import bodyParser from "body-parser";
import type { Application } from "express";
import express from "express";
import * as colors from 'colors';

const app: Application = express();

app.use(
     bodyParser.urlencoded({
          extended: true
     })
);

if (!await db.connect()) {
     console.log(`Failed to connect to database, is it setup?`.red);
     process.exit();
}