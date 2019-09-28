const express = require('express')
const app = express()

app.use('/', (req, res, next) => {
      //res.send("Saludos desde API")
      console.log('Pasó por acá')
      next()
})


const enrutadorOperaciones = require('./routes/operaciones.js')

app.use(enrutadorOperaciones)


app.use("/", (req, res)=>{
    console.log("No se encontró")
    res.status(404).send("No se encontró")
})


const port = 3100
app.listen(port, function(){
        console.log('Se está ejecutando desde el puerto: '+port)

})