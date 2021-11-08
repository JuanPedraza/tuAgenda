const express = require("express")
const mongoose = require("mongoose")
const routesDoctor = require("./src/routes/doctor")


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
const uriConection = "mongodb+srv://adminTest:Test2021@cluster0.ucrum.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

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