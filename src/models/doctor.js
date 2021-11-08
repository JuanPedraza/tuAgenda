const mongoose = require("mongoose")

const doctorSchema = mongoose.Schema({
    nombre : String,
    especialidad: String,
    documento: Number,
    tel: Number,
    direccion: String,
    email: String

})


module.exports = mongoose.model("Doctor", doctorSchema)