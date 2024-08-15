import { useState } from 'react';
import './App.module.css';

function App() {

  const [ name, setName] = useState("")
  const [ApiObject, setApiObject] = useState(null)

  const handleOnChange = (event)=>{
    setName(event.target.value)
  }

  const handleAge = ()=>{
   fetch(`https://api.agify.io/?name=${name}`).then(res=> res.json()).then((age)=> setApiObject(age))
  }

  return (
   <>

  <input onChange={handleOnChange}/>
  <button onClick={handleAge}>Predict Age</button>
  
  <p>Predicted age is : {ApiObject?.age}</p>
  <p>Name is : {ApiObject?.name}</p>
  <p>Number of Observations: {ApiObject?.count}</p>

   </>
  )
}





export default App;
