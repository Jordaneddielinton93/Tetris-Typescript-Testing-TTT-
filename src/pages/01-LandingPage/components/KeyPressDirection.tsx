import { useEffect } from "react";
import CreateShape from "./CreateShape";

export default function KeyPressDirection(keypress:string){
  
  let [shapeShown,setShapeShown,counter]=CreateShape()
  
  
  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      console.log(shapeShown)
      // console.log(shapeShown[0]-1,shapeShown[1]-1,shapeShown[2]-1,shapeShown[3]-1)
      event.key==="ArrowRight"&&setShapeShown([shapeShown[0]-1,shapeShown[1]-1,shapeShown[2]-1,shapeShown[3]-1])
      // event.key==="ArrowLeft"&&
    });
  },[counter]);
  return[shapeShown]
}