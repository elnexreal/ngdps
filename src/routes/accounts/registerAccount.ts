import { exploitPatch } from "$lib/util";
import { db } from "$lib";
import * as bc from 'bcrypt';
import type { NextFunction, Request, Response } from "express";

export const mount: string = "";

/** @type {import('express').Router} */
export default async function(req: Request, res: Response, next: NextFunction) {
     // Do not attempt to process a request with invalid payloads.
     if (!!req.body.username || !!req.body.password) {
          return res.sendStatus(400);
     }

     const [ username, password ] = Object.values(req.body).map((v: string) => {
          return exploitPatch.remove(v)
     });

     if (
          (username.length < 3 || password.length < 6) ||
          (username.length > 20)
     ) {
          return res.sendStatus(400);
     }

     // This is unsafe, and should be changed in the future!
     // It is unknown what the structure of this table looks like, so for now,
     // we should assume this works.
     let queryAnswer = await db.query(`SELECT * FROM accounts WHERE userName=${username}`);

     if (!!queryAnswer) {
          return res.sendStatus(500);
     } else {
          // Dummy code, I'm not sure what GD uses for this here.
          return res.sendStatus(200);
     }
}