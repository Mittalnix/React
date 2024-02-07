import { useState } from 'react'
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
    setCounter(counter+1); // counter will be 15 not 16, because usestate works with batch,so it will update together
    console.log("counter",counter);
    setCounter(counter+1);
    console.log("new counter",counter+1);
    setCounter((prevCounter)=>{return(prevCounter+1)}) // setcounter function has callback, now its updated every time.
  }
   }
   const removeValue=()=>{
    if(counter>0)
    {
    setCounter(counter=counter-1);
    console.log("counter",counter);                                   
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
