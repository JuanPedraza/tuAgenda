const mongoose = require("mongoose")

const pacienteSchema = mongoose.Schema({
    //  nombre, documento, fechanacimiento, rh, peso, estatura, tel, dir, email, prioridad, 
    nombre: String,
    documento: Number,
    fechaNacimiento: String,
    rh: String,
    peso: Number,
    estatura: Number,
    tel: Number,
    dir: String,
    email: String,
    prioridad: String

})

module.exports = mongoose.model("paciente", pacienteSchema)