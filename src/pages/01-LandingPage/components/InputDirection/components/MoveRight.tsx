export default function MoveRight(BoardState:any,shapeChosen:any,setshapeChosen:any){
  let RightWall=[9,19,29,39,49,59,69,79,89,99]
  let newBoard=[...BoardState]
  let newShape:any=[]

    shapeChosen.forEach((shapeId:number)=>{
      console.log(shapeId)
      console.log(newBoard)
      let shapeIsNotAtWall=true
      shapeChosen.forEach((shapeNumber:number)=>{
        RightWall.includes(shapeNumber)&&(shapeIsNotAtWall=false)
      })

      if(shapeIsNotAtWall){
        newBoard[shapeId].isColored=false
        newBoard[shapeId+1].isColored=true
        newShape.push(shapeId+1)
      }else{
        newShape=[...shapeChosen]
      }
    })
    setshapeChosen([...newShape])
    

  return newBoard

}