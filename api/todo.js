const mongoose=require('mongoose')

const TodoSchema=mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    timestamp:{
        type:String,
        default:Date.now()
    }
})

const todo=mongoose.model("Todo",TodoSchema);

module.exports=todo;