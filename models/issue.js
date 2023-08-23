const mongoose = require("mongoose");


const issueSchema=mongoose.Schema({
    issueId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    labels:{
        type:[{
            type:String
        }],
        required:true,
    },
})


module.exports=mongoose.model('Issue',issueSchema);