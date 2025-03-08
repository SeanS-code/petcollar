import mongoose from "mongoose"

const petDataSchema = new mongoose.Schema({
    heartRate: String,
    spo2: Number,
    accelerometer: Number,
    temp: Number,
    timestamp: {
        type: Date,
        default: Date.now
    }
})

const Data = mongoose.model('PetData', petDataSchema)

export default Data