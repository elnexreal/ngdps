import express from "express"
import prisma from "../src/lib/db/prismaClient"
const app = express()

prisma.$connect()

console.log("CONNECTED TO DATABASE")

app.use("/", (req, res) => {
	res.send("Hello world!")
})

app.listen(8080, () => {
	console.log("SERVER STARTED")
	process.exit()
})