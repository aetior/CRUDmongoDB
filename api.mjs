import express from 'express';
import { User } from './user.controller.mjs';
import mongoose from 'mongoose'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
mongoose.connect('mongodb+srv://dbUser:pass@cluster0.mfazbw1.mongodb.net/miapp?retryWrites=true&w=majority&appName=Cluster0')
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express()
const port= 3000
app.use(express.json())

app.get('/users',User.list)
app.post('/users',User.create)
app.get('/users/:id',User.get)
app.put('/users/:id',User.update)
app.patch('/users/:id',User.update)
app.delete('/users/:id',User.destroy)

app.use(express.static('app'))
app.get('/',(req,res)=>{
    console.log(__dirname)
    res.sendFile(`${__dirname}/index.html`)
})


app.get('*',(req,res)=>{
    res.status(404).send('esta pagina no existe')
})
app.post('*',(req,res)=>{
    res.status(404).send('esta pagina no existe')
})
app.listen(port,()=>{
    console.log('Arrancando la app')
})