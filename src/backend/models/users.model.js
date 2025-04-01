import mongoose from "mongoose"

import { petSchema } from "./pets.model.js"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    pets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Pet" }],
    admin: {
        type: Number,
        required: false,
        default: 0
    }
})

const User = mongoose.model('User', userSchema)

export default User