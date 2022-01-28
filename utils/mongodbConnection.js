import mongoose from 'mongoose'
import chalk from 'chalk'
const URL = "mongodb+srv://jobeeService:jobee123@cluster0.fxryg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


export const connectDatabase=()=>{
    return new Promise((resolve,reject)=>{
mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
  resolve(console.log(chalk.blue.underline.bold("Mongodb Connected")))

})
    .catch(err=> reject(console.log("MONGODB ERROR "+err)))
})
}