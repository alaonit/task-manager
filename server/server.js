import http, { createServer } from "node:http"
import { handlegetTaskById,handleGetTasks } from "./handlers/taskHandlers.js"

const PORT = 8000
const server = createServer((req,res)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

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