const express = require("express")
const pacienteSchema = require("../models/paciente")

const router = express.Router()

// Endpoints


router.post("/paciente", (req,res)=>
{
    const paciente = pacienteSchema(req.body)
    paciente.save().then((data) => res.json(data)).catch((err) => res.json({message: err}))

})

// Listar toda la base
router.get("/paciente", (req,res)=>{
    pacienteSchema.find().then((data) => res.json(data)).catch((err) => res.json({message: err}))
})

// Listar por id
router.get("/paciente/:id", (req,res)=>
{
    const { id } = req.params
    pacienteSchema.findById(id).then((data) => res.json(data)).catch((err) => res.json({message: err}))    
})

// Actualizar registro

router.put("/paciente/:id", (req,res)=>
{
    const { id } = req.params
    //  nombre, documento, fechanacimiento, rh, peso, estatura, tel, dir, email, prioridad, 
    const {nombre,documento,fechanacimiento,rh,peso,estatura,tel,dir,email,prioridad} = req.body
    pacienteSchema
        .updateOne({ _id: id },{ $set: {nombre,documento,fechanacimiento,rh,peso,estatura,tel,dir,email,prioridad}})
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}))    
})

router.delete("/paciente/:id", (req,res)=>
{
    const { id } = req.params
    
    pacienteSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((err) => res.json({message: err}))    
})




module.exports = router