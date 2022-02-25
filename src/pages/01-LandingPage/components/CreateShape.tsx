import { useEffect, useState } from "react"
import { ListofShapes } from "./ListofShapes"

export default function CreateShape():any{
  
  let [shapeShown,setShapeShown]= useState<number[]>([5,15,25,24])
  console.log(shapeShown)
  
  useEffect(()=>{

  function CreateShape():any{   
      let RandomShape=ListofShapes[Math.floor(Math.random()*ListofShapes.length)]
      setShapeShown(RandomShape)
  
  }
  CreateShape()
},[])

  return [shapeShown,setShapeShown]
}

