import { useEffect, useState } from "react";
import Form from "./components/Form.jsx"
import Header from "./components/Header.jsx";
import TaskDisplay from "./components/TaskDisplay.jsx";


function App(){
  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:8000/api/tasks").
    then((response)=> response.json()).
    then((data)=>{
      setTasks(data)
    })
  },[])

  return(
    <>
      <Header/>
      <main className=" bg-gray-50 ">
        <Form/>
        <TaskDisplay tasks={tasks}/>
      </main>
    </>
    
  )
}

export default App;