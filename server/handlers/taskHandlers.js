
import { readFile,writeFile } from "node:fs/promises";
import {sendResponse} from "./sendResponse.js"
import { json } from "node:stream/consumers";

export async function handleGetTasks(res){

  try{
    const data = await readFile("./data/data.json", 
    "UTF-8")

    const tasks = JSON.parse(data)

    sendResponse(
      res,
      "application/json",
      200,
      tasks
    )
  }catch(err){
    sendResponse(
      res,
      "application/json",
      500,
      {"message":"Failed to load tasks"}
    )
  }


}

export async function handlegetTaskById(req,res){

  const id = Number(req.url.split("/").pop());

  const data = await readFile("./data/data.json","UTF-8")

  const tasks = JSON.parse(data)

  const task = tasks.find((task)=>{
    return task.id === id
  })

  if(task){
    sendResponse(
      res,
      "application/json",
      200,
      task
    )
  }else{
    sendResponse(
      res,
      "application/json",
      404,
      {"message":"Task not found"}
    )
  }

}

export async function deleteTask(req,res){
  const id = Number(req.url.split("/").pop());

  const data = await readFile("./data/data.json")

  const tasks = JSON.parse(data)

  const task = tasks.find((task) => {
    return task.id === id
  })
  

  if(task){

    const filteredTask = tasks.filter((task)=>{
      return task.id !== id
    })

    const jsonData = JSON.stringify(filteredTask)

    await writeFile(
      "./data/data.json",
      jsonData
    )
    sendResponse(
      res,
      "application/json",
      200,
      filteredTask
    )
  }else{
    sendResponse(
      res,
      "application/json",
      404,
      {"message" : "Task not found"}
    )
  }
  

}   