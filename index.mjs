import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://dbUser:pass@cluster0.mfazbw1.mongodb.net/miapp?retryWrites=true&w=majority&appName=Cluster0')

const User=mongoose.model('User',{
    username: String,
    edad: Number,
})
const crear =async()=>{
    const user=new User({username:'ojeteVengador ',edad:21})
    const savedUser = await user.save()
    console.log(savedUser)
}
// crear()

const buscarTodo= async()=>{
    const users = await User.find()
    console.log(users)
}
// buscarTodo()
const buscarUno=async(x)=>{
    const user= await User.findOne({username:x})
    console.log(user)
}
const buscar=async(x)=>{
    const user= await User.find({username:x})
    console.log(user)
}
// buscarUno('ojeteVengador ')
const actualizar =async(n)=>{
    const user=await User.findOne({username:n})
    console.log(user)
    user.edad=55
    await user.save()
    console.log(user)
}
    
// actualizar('ojeteVengador ')
const eliminar=async(n)=>{
    const user=await User.findOne({username:n})
    console.log(`${user.username}eliminado con exito`)
    if(user){
    await user.remove()
    }
}
