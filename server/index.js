const express = require("express")
const app = express()
const port = 3000

const parser = require("body-parser")
let jsonParser = parser.json()

let db = require("./db/conn.js")

app.get('/', async (req, res) => {
    let result = await db.get("key1")

    res.send(result).status(200)
})

app.post('/data', jsonParser, async (req, res) => {
    let data = req.body
    let result = await db.set(data)

    res.send(result).status(204)
})

app.listen(port, () => {console.log(`listening on port ${port}`)})