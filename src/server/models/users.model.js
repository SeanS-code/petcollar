import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Number,
        required: false,
        default: 0
    }
})

const User = mongoose.model('User', userSchema)

export default User