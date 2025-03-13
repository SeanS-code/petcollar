import express from "express"
import dotenv from "dotenv"

import { connectDB } from "./db/conn.js"
import User from "./models/users.model.js"
import Data from "./models/petdata.model.js"

dotenv.config()

const app = express()
const port = 3000

app.use(express.json())

app.get('/', async (req, res) => {
    res.send("Hello")
})

app.post('/users', async (req, res) => {
    const user = req.body

    if(!user.username || !user.password)
        return res.status(400)

    const newUser = new User(user)

    try {
        await newUser.save()
        res.status(201).json({ data: newUser })
    } catch (e) {console.log(e)}
})

app.post('/data', async (req, res) => {
    const data = req.body

    const addData = new Data(data)

    try {
        await addData.save()
        res.status(201).json({ data: addData })
    } catch (e) {console.log(e)}
})

app.listen(port, () => {
    connectDB()
    console.log(`listening on port ${port}`)
})