const express = require("express")
const doctorSchema = require("../models/doctor")

const router = express.Router()


//Definir endpoints

// Crear Médico

router.post("/doctor", (req,res)=>
{
    const doctor = doctorSchema(req.body)
    doctor.save().then((data) => res.json(data)).catch((err) => res.json({message: err}))

})

// Listar toda la base
router.get("/doctor", (req,res)=>{
    doctorSchema.find().then((data) => res.json(data)).catch((err) => res.json({message: err}))
})

// Listar por id
router.get("/doctor/:id", (req,res)=>
{
    const { id } = req.params
    doctorSchema.findById(id).then((data) => res.json(data)).catch((err) => res.json({message: err}))    
})

// Actualizar registro

router.put("/doctor/:id", (req,res)=>
{
    const { id } = req.params
    const {nombre,especialidad,documento,tel,direccion,email} = req.body
    doctorSchema
        .updateOne({ _id: id },{ $set: {nombre,especialidad,documento,tel,direccion,email}})
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}))    
})

router.delete("/doctor/:id", (req,res)=>
{
    const { id } = req.params
    
    doctorSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}))    
})




module.exports = router