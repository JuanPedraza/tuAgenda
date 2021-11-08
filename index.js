const express = require("express")
const mongoose = require("mongoose")
const routesDoctor = require("./src/routes/doctor")
require("dotenv").config()


const app = express()
const port = 3000

// Middleware
app.use(express.json())
app.use('/api',routesDoctor)


// Rutas
app.get("/", (req,res)=>{
    res.send("¡Hola mundo!")
})

// Conexión MongoDB
const uriConection = process.env.MONGODB_URI

main().catch(err => console.log(err))
async function main(){
    if (await mongoose.connect(uriConection)){
        console.log("Conectado a Mongo Atlas");
    }else{
        console.log("No se logró la conexión a Mongo");
    }
}

app.listen(port, () =>{
    console.log(`Servidor corriendo en el puerto ${port}`);
})