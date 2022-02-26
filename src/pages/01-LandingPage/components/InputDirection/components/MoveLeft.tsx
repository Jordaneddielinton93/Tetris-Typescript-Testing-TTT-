import { ListOfShapes } from "../../ListOfShapes/ListOfShapes"

export default function MoveLeft(BoardState:any,shapeChosen:any,setshapeChosen:any){
  let LeftWall=[0,10,20,30,40,50,60,70,80,90]
  let newBoard=[...BoardState]
  let newShape:any=[]

    shapeChosen.forEach((shapeId:number)=>{
      console.log(shapeId)
      console.log(newBoard)
      let shapeIsNotAtWall=true
      shapeChosen.forEach((shapeNumber:number)=>{
        LeftWall.includes(shapeNumber)&&(shapeIsNotAtWall=false)
      })

      if(shapeIsNotAtWall){
        newBoard[shapeId].isColored=false
        newBoard[shapeId-1].isColored=true
        newShape.push(shapeId-1)
      }else{
        newShape=[...shapeChosen]
      }
    })
    setshapeChosen([...newShape])
    

  return newBoard
}