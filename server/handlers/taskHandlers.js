
import { readFile } from "node:fs/promises";
import sendResponse from "./"

export async function handleGetTasks(res){

  try{
    const data = await readFile("./data/data.json", "UTF-8")
    res.statusCode = 200
    res.end(data)
  }catch(err){
    res.statusCode = 500
    res.end(JSON.stringify({"message":"Failed to load tasks"}))
  }


}

export async function handlegetTaskById(req,res){

  const id = Number(req.url.split("/").pop());

  const data = await readFile("./data/data.json","UTF-8")

  const tasks = JSON.parse(data)

  const task = tasks.find((task)=>{
    return task.id === id
  })

}