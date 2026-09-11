import http, { createServer } from "node:http"
import {sendResponse} from "./handlers/sendResponse.js"
import { handlegetTaskById,handleGetTasks } from "./handlers/taskHandlers.js"

const PORT = 8000
const server = createServer((req,res)=>{

  if(req.url === '/api/tasks' && req.method==='GET'){
       handleGetTasks(res)

  }else if(req.url === '/api/tasks' && req.method==='GET'){
    handlegetTaskById(req,res) 

  }
})

server.listen(
  PORT,
  ()=>{
    console.log(`Server running at Port${PORT}`)
  }
)