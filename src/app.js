const express = require("express")
const parser = require("body-parser")

const app = express()
const port = 3000

let jsonParser = parser.json()

app.listen(port, () => {console.log(`listening on port ${port}`)})
app.use(express.static('public'))

app.post('/api', jsonParser, (req, res) => {
    console.log(req.body)
    res.send({ status : "SUCCESS"})
})
