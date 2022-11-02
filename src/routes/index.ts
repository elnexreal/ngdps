import type { Application } from "express";
import accounts from "./accounts";

export function load(app: Application) {
     // Routes under /database/accounts/*
     accounts(app);
}