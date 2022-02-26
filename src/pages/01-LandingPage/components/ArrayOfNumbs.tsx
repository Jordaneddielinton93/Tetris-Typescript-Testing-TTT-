import { useEffect, useState } from "react"

export default function ArrayOfNumbs(Amount:number):any[]{


  let [ArrayOfNumbersState,setArrayOfNumbersState]=useState<Array<number>>([])
  // console.log(ArrayOfNumbersState)
  useEffect(()=>{
    function Make100numbers(){
      
      let Arr:number[]=[]
      for (let i = 0; i < Amount; i++) {
        Arr.push(i)
      }
      // console.log(Arr)
      setArrayOfNumbersState(Arr)
    }
    Make100numbers()
  },[])
  
  
  return [ArrayOfNumbersState]
}