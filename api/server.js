const express = require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const todo=require("./todo");

const app = express()
const port = 3000

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/todo")
.then(()=>console.log("DB is connected"))
.catch((err)=>console.log(err));



app.get('/todo', async(req, res) =>{
    const todos=await todo.find();
    res.json(todos)
} )

app.post('/todo/new',(req,res)=>{
    const Todo=new todo({
        text:req.body.text  
    }) 
    Todo.save();
    res.json(Todo);
})

app.delete('/todo/delete/:id',async(req,res)=>{
    const result=await todo.findByIdAndDelete(req.params.id);

    res.json(result);
})

app.put('/todo/complete/:id',async(req,res)=>{
    const result=await todo.findById(req.params.id);

    result.completed=!result.completed;
    result.save();
    res.json(result);
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))