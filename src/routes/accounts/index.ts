import type { Application } from "express";
import registerAccount from "./registerAccount";

export default async function(app: Application) {
     app.use('/database/accounts/registerGJAccount.php', registerAccount);
}