

import { useEffect, useState } from "react";
import BoardState from "./components/BoardState/BoardState";
import MoveDown from "./components/InputDirection/components/MoveDown";
import MoveLeft from "./components/InputDirection/components/MoveLeft";
import MoveRight from "./components/InputDirection/components/MoveRight";

import {InputDirection} from "./components/InputDirection/InputDirection";
import { LandingPageStyled } from "./LandingPage.style";


export default function LandingPage(){

  let [BottomWall,setBottomWall]=useState([90,91,92,93,94,95,96,97,98,99])
  let [LeftWall,setLeftWall]=useState([90,91,92,93,94,95,96,97,98,99])



  let [inputDirection]=InputDirection()
  let [listOfShapesOnTheBoard,setListOfShapesOnTheBoard]=useState<number[]>([])
  let [boardState,setboardState,shapeChosen,setshapeChosen]=BoardState()

  useEffect(()=>{
    console.log(inputDirection[0],listOfShapesOnTheBoard)
    inputDirection[0]==="ArrowLeft"&&setboardState(MoveLeft(boardState,shapeChosen,setshapeChosen))
    inputDirection[0]==="ArrowRight"&&setboardState(MoveRight(boardState,shapeChosen,setshapeChosen))
    inputDirection[0]==="ArrowDown"&&setboardState(MoveDown(boardState,shapeChosen,setshapeChosen,listOfShapesOnTheBoard,setListOfShapesOnTheBoard,BottomWall,setBottomWall))

  },[inputDirection])
    
  return (                   
    <LandingPageStyled data-testid="LandingPage">
      <main  className="TetrisContainer" data-testid="TetrisGridContainer" >
      {
        boardState.map(({isColored}:{isColored:Boolean},index:number)=>{
          return (
          <div className="Tetris-box" style={{background:isColored||shapeChosen.includes(index)||listOfShapesOnTheBoard.includes(index)?"red":"grey"}}>
            {index}
          </div>
          )
        })
      }
      </main>
    </LandingPageStyled>
  )
}