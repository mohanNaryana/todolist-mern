
const express = require('express')
const app = express()
const{ PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
app.use(express.json())


app.get("/tasks",async(req,res)=>{
    try{
        const todo = await prisma.Todo.findMany()
        res.status(200).json(todos)
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


const port = 3000
app.listen(port)