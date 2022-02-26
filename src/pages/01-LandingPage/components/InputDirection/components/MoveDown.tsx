import { ListOfShapes } from "../../ListOfShapes/ListOfShapes"

export default function MoveDown(BoardState:any,shapeChosen:any,setshapeChosen:any,listOfShapesOnTheBoard:any,setListOfShapesOnTheBoard:any,BottomWall:any,setBottomWall:any){
  let newRandomShape=ListOfShapes[Math.floor(Math.random()*ListOfShapes.length)]
  
  let newBoard=[...BoardState]
  let newShape:any=[]

    shapeChosen.forEach((shapeId:number)=>{
      console.log(shapeId)
      console.log(newBoard)
      let shapeIsNotAtWall=true
      shapeChosen.forEach((shapeNumber:number)=>{
        BottomWall.includes(shapeNumber)&&(shapeIsNotAtWall=false)
      })

      if(shapeIsNotAtWall){
        newBoard[shapeId].isColored=false
        newBoard[shapeId+10].isColored=true
        newShape.push(shapeId+10)
      }else{
        // else do return old shape      
        setListOfShapesOnTheBoard([...listOfShapesOnTheBoard,...shapeChosen])
        console.log(BottomWall)
        setBottomWall([...BottomWall,...shapeChosen.map((i:any)=>i-10)])
        newShape=[...newRandomShape]
      }
    })
    setshapeChosen([...newShape])
    

  return newBoard
  
  }