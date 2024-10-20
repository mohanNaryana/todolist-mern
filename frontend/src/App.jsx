import { useEffect, useState } from "react"
import Add from "./components/Add"
import Cards from "./components/Cards"
import axios from "axios"


function App() {
  
  const[todos,setTodos] = useState([])

  useEffect(()=>{
    const fetchtodos = async ()=>{
      try{
        const responce = await axios.get('http://localhost:5000/tasks/')
        setTodos(responce.data)
      }catch(error){
        console.error("error fetching todos",error)
      }
    }
    fetchtodos();
  },[])

  return (
    <>
      <div className="bg-gray-900 h-screen">
        <h1 className="flex justify-center text-5xl text-blue-500 ">MY TODOS</h1>
        <Add /> 
        <hr className="border-gray-400 my-4" />
        {todos.map(todo => (
          <Cards key={todo.id} tasks={todo.title} date={todo.updatedAt} />
        ))}
        
      </div>
    </>
  )
}

export default App
