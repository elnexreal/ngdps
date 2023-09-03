import express from "express"
import prisma from "./lib/db/prismaClient"
const app = express()

app.get("/", (req, res) => {
	res.send("Hello world!")
})

app.listen(80, () => {
	console.log("App listening on port 80")
})