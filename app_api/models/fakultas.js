const mongoose = require('mongoose')

const fakultasSchema = new mongoose.Schema({
    nama: {
        type: String,
        required: true,
        trim: true
    },
    singkatan: {
        type: String,
        required: true,
        trim: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const fakultas  = mongoose.model("Fakultas", fakultasSchema)

module.exports = fakultas