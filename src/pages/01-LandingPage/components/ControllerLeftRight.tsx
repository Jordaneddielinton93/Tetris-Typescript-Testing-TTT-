import { useEffect, useState } from "react"
import CreateShape from "./CreateShape"

export default function ControllerLeftRight(){

  let [shapeShown,setShapeShown,setChangeUseEffectState]=CreateShape()
  let [shapeCollitionLocation,addShapeCollitionLocation]=useState<number[][]>([
    [0,10,20,30,40,50,60,70,80,90],
    [9,19,29,39,49,59,69,79,89,99],
    [90,91,92,93,94,95,96,97,98,99],
  ])

  function checkANumberExistInArrayOfArraysCollition(numberGiven:number,arrow:string){
    let isInArray=false
    shapeCollitionLocation.forEach((item,index)=>{
      item.forEach((ArrArrNumber)=>{
         numberGiven===ArrArrNumber&&index>=3&&addShapeCollitionLocation([...shapeCollitionLocation,shapeShown])
         numberGiven===ArrArrNumber&&(isInArray=true)
      })
    })

    arrow==="ArrowDown"&&shapeCollitionLocation[1].includes(numberGiven)&&numberGiven!==(99)&&(isInArray=false)
    arrow==="ArrowDown"&&shapeCollitionLocation[0].includes(numberGiven)&&numberGiven!==(90)&&(isInArray=false)

    function loopThroughArrayOfArrays(){
      let isInArray=false
      shapeCollitionLocation.forEach((item,index)=>{
        item.forEach((ArrArrNumber)=>{
          index>=3&&numberGiven===ArrArrNumber&&(isInArray=true)
        })
      })
      return isInArray
    }

    if(arrow==="ArrowDown"&&shapeCollitionLocation[2].includes(numberGiven)){
      addShapeCollitionLocation([...shapeCollitionLocation,shapeShown])
      setChangeUseEffectState(Math.random()*1000)
    }
    if(arrow==="ArrowDown"&&!shapeCollitionLocation[2].includes(numberGiven)&&loopThroughArrayOfArrays()){
     
      addShapeCollitionLocation([...shapeCollitionLocation,[shapeShown[0]-10,shapeShown[1]-10,shapeShown[2]-10,shapeShown[3]-10]])
      setChangeUseEffectState(Math.random()*1000)
    }
    
    




    
    return isInArray
  }

  
  

  function handleKeyDown(event:any){
    
    console.log(shapeCollitionLocation)
    
    
    !checkANumberExistInArrayOfArraysCollition(shapeShown[0],"")&&
    event.key==="ArrowLeft"&&setShapeShown([shapeShown[0]-1,shapeShown[1]-1,shapeShown[2]-1,shapeShown[3]-1])


    !checkANumberExistInArrayOfArraysCollition(shapeShown[3],"")&&
    event.key==="ArrowRight"&&setShapeShown([shapeShown[0]+1,shapeShown[1]+1,shapeShown[2]+1,shapeShown[3]+1])

    !checkANumberExistInArrayOfArraysCollition(
    shapeShown[2],"ArrowDown")
      &&
    event.key==="ArrowDown"&&setShapeShown([shapeShown[0]+10,shapeShown[1]+10,shapeShown[2]+10,shapeShown[3]+10])
  }
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // cleanup this component
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });


  return [shapeShown,shapeCollitionLocation]
}
