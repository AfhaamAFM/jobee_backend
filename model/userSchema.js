import mongoose from 'mongoose'

const {Schema,model} = mongoose

const userSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:false,lowercase:true,minlength:10},
    image:{type:String},
    phone: {
        type: Number,
        required:true,
        validate: {
            validator: function(v) {
                return /d{10}/.test(v);
            },
            message: '{VALUE} is not a valid 10 digit number!'
        }
    },
    city:{type:String}

})

export default model('user',userSchema)