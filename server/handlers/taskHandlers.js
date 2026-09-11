
import { readFile } from "node:fs";


export function handleGetTasks(res){

  readFile("./data/data.json", "UTF-8", (err,data)=>{
    if(err){
      console.log(data)
    }
  })

}

export async function handlegetTaskById(req,res){

  const id = Number(req.url.split("/").pop());

  const task = tasks.find((task)=>{
    return task.id === id
  })



}