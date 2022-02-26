import { useEffect, useState } from "react"
import { ListOfShapes } from "../ListOfShapes/ListOfShapes"



export default function BoardState(){
  
  let [boardState,setboardState]= useState<any>([])
  let [shapeChosen,setshapeChosen]= useState<any>([])

  console.log(shapeChosen)

  useEffect(()=>{
    // Instial setup makes 100 objects with isColored Bool
    let TetrisBoard:any=[]
    for(let i=0; i<100; i++){
      TetrisBoard.push(
        {isColored:false}
      )
    }
    let RandomShape=ListOfShapes[Math.floor(Math.random()*ListOfShapes.length)]
    RandomShape.forEach((numberFromShape)=>{
      TetrisBoard[numberFromShape].isColored=true
    })
    setshapeChosen(RandomShape)
    setboardState(TetrisBoard)
  },[])
  
  
  return [boardState,setboardState,shapeChosen,setshapeChosen]
}