import express from "express"
import prisma from "../src/lib/db/prismaClient"
const app = express()

app.use("/", (req, res) => {
	res.send("Hello world!")
})

app.listen(8080, () => {
	console.log("SUCCESS")
})

prisma.$connect()