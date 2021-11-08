const express = require("express")
const routesDoctor = require("./routes/doctor")
require("dotenv").config()

require("../src/database")


const app = express()
const port = 3000

// Middleware
app.use(express.json())
app.use('/api',routesDoctor)


// Rutas
app.get("/", (req,res)=>{
    res.send("¡Hola mundo!")
})




app.listen(port, () =>{
    console.log(`Servidor corriendo en el puerto ${port}`);
})