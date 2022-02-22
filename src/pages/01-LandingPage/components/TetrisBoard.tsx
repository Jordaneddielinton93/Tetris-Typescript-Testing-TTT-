



export default function CreateTetris(size:number){


  let TetrisBoard=[
  ]

  for(let i =0;i<size;i++){
    TetrisBoard.push(i)
  }
  return TetrisBoard
}