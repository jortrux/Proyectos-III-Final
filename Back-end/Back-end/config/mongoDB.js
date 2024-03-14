const mongoose = require('mongoose')

const dbConnect = async () => {
    const db_uri = process.env.DB_URI
    mongoose.set('strictQuery', false)
    await mongoose.connect(db_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        if(!err) {
            console.log("Conectado a la BD")
        }else {
            console.log("No se ha podido establecer la conexión a la BD")
        }
    })
}

module.exports = dbConnect