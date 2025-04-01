import mongoose from "mongoose"

const petDataSchema = new mongoose.Schema({
    heart_rate: String,
    spo2: Number,
    accelerometer: {
        x: Number,
        y: Number,
        z: Number
    },
    temperature: {
        ambient: Number,
        object: Number
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
}, {_id: false})

const petSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: String,
    age: Number,
    data: {type: [petDataSchema], default: []}
})

export { petSchema }

const Pet = mongoose.model('Pet', petSchema)
export default Pet
