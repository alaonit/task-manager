import http, { createServer } from "node:http"
import {sendResponse} from "./handlers/sendResponse.js"
import { handlegetTaskById } from "./handlers/taskHandlers.js"

const PORT = 8000
const server = createServer((req,res)=>{

  if(req.url === '/api' && req.method==='GET'){

    if(req.url.startsWith('/api')){

      handlegetTaskById(req,res)

      sendResponse(
      res,
      "application/json",
      200,
      task
      )  
    }
    

  }else if(req.url === '/api' && req.method === 'POST'){
    
  }

  
})

server.listen(
  PORT,
  ()=>{
    console.log(`Server running at Port${PORT}`)
  }
)