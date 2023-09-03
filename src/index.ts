import express from "express"
import prisma from "./lib/db/prismaClient"
import "dotenv/config"
const app = express()

app.get("/", (req, res) => {
	res.send("Hello world!")
})

app.listen(process.env.PORT, () => {
	console.log("App listening on port 80")
})