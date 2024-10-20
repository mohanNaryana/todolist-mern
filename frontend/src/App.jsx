import Add from "./components/Add"
import Cards from "./components/Cards"


function App() {
  
  return (
    <>
      <div className="bg-gray-900 h-screen">
        <h1 className="flex justify-center text-5xl text-blue-500 ">MY TODOS</h1>
        <Add /> 
        <hr className="border-gray-400 my-4" />
        <Cards tasks={"eat banana"} date={"2-4-3"} />
      </div>
    </>
  )
}

export default App
