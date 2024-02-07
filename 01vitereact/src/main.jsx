import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp()
{
    return(
        <div>
            <h1>Hi I am Nikhil</h1>
        </div>
    )
}
const ReactElement = {
    type:"a",
    props:{
      href:"https://www.google.com/",
      target:"_blank"
    },
    children:"Click to go to Google"
}
const anotherEl = (
    <div>
    <h1>Hi I am Nikhil</h1>
</div> 
)
const anotherUser = "Nitin"; // variable injection 
const reactElement = React.createElement('a',{href:"https://www.google.com/",target:"_blank"},'Click',anotherUser);
ReactDOM.createRoot(document.getElementById('root')).render(

    //MyApp()         // in React First letter should be in capital
    //<MyApp/>
    //ReactElement
    reactElement

)
