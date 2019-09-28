const express = require('express')
const enrutador = express.Router()

enrutador.get('/resta/:num1/:num2', (req, res)=>{
 
    let num1 = req.params['num1']
    console.log(num1)
    let num2 = req.params['num2']
    console.log(num2)
    let resta=parseInt(num1)-parseInt(num2)
    let json = {info: "Hola desde calcular  "}
    json.num1=num1
    json.num2=num2
    json.resta=resta
    res.send(json)
})

enrutador.get('/suma/:num1/:num2', (req, res)=>{
  
let num1 = req.params['num1']
console.log(num1)
let num2 = req.params['num2']
console.log(num2)
let suma=parseInt(num1)+parseInt(num2)
let json = {info: "Hola desde calcular 2 "}
json.num1=num1
json.num2=num2
json.suma=suma
res.send(json)
})
enrutador.get('/multiplicacion/:num1/:num2', (req, res)=>{
    
let num1 = req.params['num1']
console.log(num1)
let num2 = req.params['num2']
console.log(num2)
let mul=parseInt(num1)*parseInt(num2)
let json = {info: "Hola desde calcular 2 "}
json.num1=num1
json.num2=num2
json.mul=mul
res.send(json)
})
enrutador.get('/division/:num1/:num2', (req, res)=>{

    let num1 = req.params['num1']
    console.log(num1)
    let num2 = req.params['num2']
    console.log(num2)
    let div=parseInt(num1)/parseInt(num2)
    let json = {info: "Hola desde calcular 2 "}
    json.num1=num1
    json.num2=num2
    json.div=div
    res.send(json)
})


module.exports= enrutador


