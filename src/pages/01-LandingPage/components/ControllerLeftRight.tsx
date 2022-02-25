import { useEffect } from "react"
import CreateShape from "./CreateShape"
export let bottomWall=[90,91,92,93,94,95,96,97,98,99]
export default function ControllerLeftRight(){

  let [shapeShown,setShapeShown]=CreateShape()


  function handleKeyDown(event:any){
    console.log(event.key)
    let leftWall=[0,10,20,30,40,50,60,70,80,90]
    let rightWall=[9,19,29,39,49,59,69,79,89,99]
    


    !leftWall.includes(shapeShown[0])&&
    event.key==="ArrowLeft"&&setShapeShown([shapeShown[0]-1,shapeShown[1]-1,shapeShown[2]-1,shapeShown[3]-1])


    !rightWall.includes(shapeShown[3])&&
    event.key==="ArrowRight"&&setShapeShown([shapeShown[0]+1,shapeShown[1]+1,shapeShown[2]+1,shapeShown[3]+1])

    !bottomWall.includes(shapeShown[2])&&
    event.key==="ArrowDown"&&setShapeShown([shapeShown[0]+10,shapeShown[1]+10,shapeShown[2]+10,shapeShown[3]+10])
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // cleanup this component
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
  return [shapeShown]
}
