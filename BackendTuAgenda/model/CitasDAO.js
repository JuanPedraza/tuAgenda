const conexion = require("../DB/conexionDB")

const citasSchema = conexion.Schema({
    nombrePaciente: String,
    documPaciente: String,
    especialidadCita: String,
    nombreMedico: String,
    fechaCita: Date,
    estadoCita: String,
    precioCita: Number,
    pacienteCita: [{
        nombre: String,
        apellido: String,
        documento: String,
        fechaNacimiento: Date,
        rh: String,
        peso: Number,
        estatura: Number, //PUSE ACA DATOS NUMBER
        telefono: Number,
        direccion: String,
        email: String,
        prioridad: String,
        usuario: String,
        contrasena: String
    }],
    medicoCita: [{
        nombre: String,
        apellido: String,
        especialidad: String,
        documento: String,
        telefono: Number,
        direccion: String,
        email: String
    }]
}, {
    collection: "Citas",
    versionKey: false
});

const citasDAO = conexion.model('Citas', citasSchema);

module.exports = citasDAO;