import express from "express"
import prisma from "./lib/db/prismaClient"
import bodyParser from "body-parser"
import "dotenv/config"
const app = express()

app.use(
	bodyParser.urlencoded({ extended: true })
)

app.get("/", (req, res) => {
	res.send("Hello world!")
})

app.listen(process.env.PORT, () => {
	console.log("App listening on port 80")
})