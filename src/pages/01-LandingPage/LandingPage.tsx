
import ArrayOfNumbs from "./components/ArrayOfNumbs";
import ControllerLeftRight from "./components/ControllerLeftRight";


import { LandingPageStyled } from "./LandingPage.style";


export default function LandingPage(){
    
    let [shapeShown,shapeCollitionLocation]=ControllerLeftRight()

    let [ArrayOfNumbersState]=ArrayOfNumbs(100)

 
    
    
    
  return (                   
    <LandingPageStyled data-testid="LandingPage">
      <main  className="TetrisContainer" data-testid="TetrisGridContainer" >
      {ArrayOfNumbersState.map((item:number,index:number)=>{

        let IndexIsInCollectionOfArrays=false

        shapeCollitionLocation.forEach((Arr:any,shapeCollArrIndex:number) => {
          
          shapeCollArrIndex>2&&Arr.forEach((numberIn:number) => {
              index===numberIn&&(IndexIsInCollectionOfArrays=true)
          });

        });
        
        return (
          <div 
          style={{background:shapeShown.includes(index)||IndexIsInCollectionOfArrays?"red":""}}
          className="Tetris-box" 
          data-testid="Tetris-box">
            
          </div>
        )
      })}
      </main>
    </LandingPageStyled>
  )
}