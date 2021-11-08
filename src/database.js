const mongoose = require("mongoose")

const uriConection = process.env.MONGODB_URI

main().catch(err => console.log(err))
async function main(){
    if (await mongoose.connect(uriConection)){
        console.log("Conectado a Mongo Atlas");
    }else{
        console.log("No se logró la conexión a Mongo");
    }
}

