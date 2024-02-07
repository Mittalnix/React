import { useState } from 'react'
import './App.css'
import Card1 from './components/card1' 

function App() {
  const [count, setCount] = useState(0)
  let myobj =
  {
    username:"Nikhil",
    age:24
  }
  let arr=[1,2,3];
// <>  Fragements    // We have closed the image tag by the /
  return (
    <>  
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Tailwind Test</h1>
      {/* <Card1 channel="Chai or Code" someobj={myobj} somearr={arr}/> */}
      <Card1 logername="Nikhil" btnText ="click me" />
      <Card1 logername="Mittal" btnText ="visit me"/>
      
    </>
  )
}

export default App
