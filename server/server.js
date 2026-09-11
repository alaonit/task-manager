import http, { createServer } from "node:http"

const PORT = 8000
const server = createServer((req,res)=>{

  if(req.url === '/api' && req.method==='GET'){
    
  }

  res.setHeader("Content-Type","application/json")
  res.statusCode = 200
  res.end(JSON.stringify({"message":"Server is running"}))
})

server.listen(
  PORT,
  ()=>{
    console.log(`Server running at Port${PORT}`)
  }
)