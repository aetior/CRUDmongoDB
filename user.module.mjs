import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://dbUser:pass@cluster0.mfazbw1.mongodb.net/miapp?retryWrites=true&w=majority&appName=Cluster0')
 export const Users=mongoose.model('User',{
    name:{type:String,required:true,minLength:3},
    lastName:{type:String,required:true,minLength:3},

})