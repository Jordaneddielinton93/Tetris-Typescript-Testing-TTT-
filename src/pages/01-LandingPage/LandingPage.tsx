
import ArrayOfNumbs from "./components/ArrayOfNumbs";
import ControllerLeftRight from "./components/ControllerLeftRight";


import { LandingPageStyled } from "./LandingPage.style";


export default function LandingPage(){
    
    let [shapeShown]=ControllerLeftRight()

    let [ArrayOfNumbersState]=ArrayOfNumbs(100)


    
    
    
  return (                   
    <LandingPageStyled data-testid="LandingPage">
      <main  className="TetrisContainer" data-testid="TetrisGridContainer" >
      {ArrayOfNumbersState.map((item:number,index:number)=>{
        return (
          <div 
          style={{background:shapeShown.includes(index)?"red":""}}
          className="Tetris-box" 
          data-testid="Tetris-box">
            
          </div>
        )
      })}
      </main>
    </LandingPageStyled>
  )
}