 import { useState } from 'react';
// import styles from './App.module.css'


function App() {


//   const [text,setText]= useState('')


// const handleOnChange = (event)=>{
//   setText(event.target.value)
// }


// const [showText, setShowText] = useState(true)

// const handleOnClick = ()=>{
// setShowText(!showText)
// }

const [color, setColor]= useState("green")

const ColorChanger = ()=>{
  
  setColor(color === 'green'? 'red': 'green')

}

  return (
   <div>
  
  {/* <input type='text' onChange={handleOnChange}></input>
  {text} */}



      {/* {showText && <h1>I am Harsh</h1> }      */}

  {/* <button onClick={handleOnClick}>Show/Hide</button> */}



      <h1 style={ { color : color}}>My name is Harsh</h1>
      <button onClick={ColorChanger}>Change Color</button>



   </div>
  )
}

export default App;
