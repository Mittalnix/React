import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {
//       let counter = 15 ;
//        const addValue=()=>{
//         console.log("increased",counter);
//         counter++;
//        }
//        const removeValue=()=>{
//         console.log("decreased",counter);               // addValue()xx -- already evaluated, while we have to evaluate onclick
//         counter--;                                      // UI not reflecting changes, so we have to use hooks
//        }
//       return(
//         <>
//           <h1>Chai Aur React</h1>
//           <h2>Counter Value : {counter}</h2>
//           <button onClick={addValue}>Add Value</button>   
//           <br/>
//           <button onClick={removeValue}>Remove Value</button>
//         </>
//       )

// }
function App() {
  let [counter,setCounter]= useState(15);  // returns array-- 1.value 2.method 3. 15 assigns to counter 4. can't use const

   const addValue=()=>{
    if(counter<20){
    setCounter(counter=counter+1);
    console.log("added",counter);
    }
   }
   const removeValue=()=>{
    if(counter>0)
    {
    setCounter(counter=counter-1);
    console.log("removed",counter);                                   
   }
  }
  return(
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>   
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )

}

export default App
