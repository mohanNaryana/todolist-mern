
const express = require('express')
const app = express()
const{ PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
app.use(express.json())


app.get("/tasks",async(req,res)=>{
    try{
        const todo = await prisma.Todo.findMany()
        res.status(200).json(todo)
    }catch(error){
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
})


app.post("/tasks",async (req,res)=>{
    const { title } = req.body

    try{
        const todo =  await prisma.Todo.create({
            data : {
                title 
            }
        })
        res.json({
            msg : "created successfully"
        })
    }
    catch(error){
        res.status(500).json({ error: 'Failed to create task' });
    }
})



app.put("/tasks/:id",async(req,res)=>{
    const {id} = req.params
    const { title , completed } = req.body

    try{
        const todo = await prisma.Todo.update({
            where : {id},
            data : {
                title,
                completed,
            }
        })
        res.status(200).json({
            msg : "updated successfully"
        })
    }
    catch(error){
        res.status(500).json({ error : 'failed to update task'})
    }
})


app.delete("/tasks/:id",async(req,res)=>{
    const {id} = req.params

    try{
        const todo = await prisma.Todo.delete({
            where : {
                id,
            }
        })
        res.status(200).json({
            msg : "deleted successfully"
        })
    }
    catch(error){
        res.status(500).json({error : "failed to delete"})
    }
})


const port = 3000
app.listen(port)