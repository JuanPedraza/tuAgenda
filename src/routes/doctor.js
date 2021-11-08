const express = require("express")
const doctorSchema = require("../models/doctor")

const router = express.Router()


//Definir endpoints

// Crear Médico

router.post("/createDoctor", (req,res)=>
{
    const doctor = doctorSchema(req.body)
    doctor.save().then((data) => res.json(data)).catch((err) => res.json({message: err}))

})

router.get("/listarDoctor", (req,res)=>{
    
})

module.exports = router