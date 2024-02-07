import Chai from "./chai"
function App() {
  const userName = 'Nikhil'; // variable injection, jsx- javascript+html , {}- already evaluated, we can't use if else inside {}
  return (
    <>
    <h1>React with vite {userName}</h1>   
    <Chai/>
    </>             // Jsx format returns only single element, so we will use <>,</>
  )                 // We will create all components like : Css, Html, Python
}

export default App
