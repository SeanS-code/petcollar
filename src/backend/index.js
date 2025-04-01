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
app.get('/users', async (req, res) => {
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
app.post('/users/create', async (req, res) => {
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
app.post('/users/:userID/pet', async (req, res) => {
    try {
        const { userID } = req.params
        const { name, age, data } = req.body;

        // Check if user exists
        const user = await User.findById(userID);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // Validate required fields
        if (!userID || !name || !age) {
            return res.status(400).json({ message: "Missing required fields: userID, name, or age" });
        }

        const newPet = new Pet({ userId: userID, name, age, data: data || [] });

        // Save the pet to the database
        await newPet.save();

        // Add pet reference to user's pet array
        user.pets.push(newPet._id);
        await user.save();

        res.status(201).json({ message: "Pet added successfully", pet: newPet });
    } catch(e){res.status(500).json({ message: "Error adding pet", e })}
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