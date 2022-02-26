import { useEffect, useState } from "react"


export function InputDirection(){


  let [inputDirection,setInputDirection]=useState<any>(["",0])
  
  

  function handleKeyDown(event:any){
    event.key==="ArrowLeft"&&setInputDirection(["ArrowLeft",Math.random()])
    event.key==="ArrowRight"&&setInputDirection(["ArrowRight",Math.random()])
    event.key==="ArrowDown"&&setInputDirection(["ArrowDown",Math.random()])
  }
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // cleanup this component
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return [inputDirection]

}
