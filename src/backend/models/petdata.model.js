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
})

const Data = mongoose.model('PetData', petDataSchema)

export default Data