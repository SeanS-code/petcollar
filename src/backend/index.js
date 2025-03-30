import express from "express"
import dotenv from "dotenv"

import { connectDB } from "./db/conn.js"

import User from "./models/users.model.js"
import Pet from "./models/pets.model.js"

dotenv.config()

const app = express()
const port = 3000

app.use(express.json())

// GET Requests

// Gets all users
app.get('/users/data', async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json({ success: true, data: users})
    } catch(e) {
        console.log("error in fetching users: ", e.message)
        res.status(500).json({ success: false, message: "Server Error"})
    }
})

// Gets all Pets
app.get('/pets', async (req, res) => {
    try {
        const pet = await Pet.find({})
        res.status(200).json({ success: true, data: pet})
    } catch(e) {
        console.log("error in fetching users: ", e.message)
        res.status(500).json({ success: false, message: "Server Error"})
    }
})

// POST Requests

// Creates a new user
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

// Creates a pet
app.post('/user/pet', async (req, res) => {
    try {
        const { name, age, data } = req.body;
        // Create a new pet (if data is undefined, default will apply)
        const newPet = new Pet({ name, age, data: data || [] });
        // Save the pet to the database
        await newPet.save();
        res.status(201).json({ message: "Pet added successfully", pet: newPet });
    } catch(e){res.status(500).json({ message: "Error adding pet", error })}
})

// Adds data of pet collar to Pet
app.post('/pets/:petID/data', async (req, res) => {
    try {
        const { petID } = req.params
        const addData = req.body

        // will replace with id
        const pet = await Pet.findById(petID)
        if (!pet) {
            return res.status(404).json({ message: "pet not found"})
        }

        pet.data.push(addData)
        await pet.save()

        res.status(200).json({ message: "inserted data", pet })
    } catch (e) {res.status(500).json({ message: (e)})}
})

app.listen(port, () => {
    connectDB()
    console.log(`listening on port ${port}`)
})