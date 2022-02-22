import { useEffect, useRef, useState } from "react";
import CreateTetris from "./components/TetrisBoard";
import { LandingPageStyled } from "./LandingPage.style";


export default function LandingPage(){


  let [position,setPosition]= useState(4)
  useEffect(()=>{
    setTimeout(()=>{
      setPosition(position+=10)
    },1500)
    // position>100&&setPosition(4)
  },[position])

  let mybox = useRef({classList:""})

  return (
    <LandingPageStyled data-testid="LandingPage">
      <main className="TetrisContainer" data-testid="TetrisGridContainer" >

      {
      
      CreateTetris(100).map((numb)=>{
        
        console.log(mybox?mybox:"")
        // if postion + 10 !=="pink" return
      return (
        <div className="box" ref={mybox} style={{background:numb===position?"yellow":"pink"}}>
          {numb}
        </div>
      )
      })}

      </main>
    </LandingPageStyled>
  )
}