import { useState } from 'react';
import './App.module.css';

function App() {


  const [excuse, setExcuse] = useState(null)





const handleExcuse = (excuse) =>{

  fetch(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then((response)=>{
    return response.json()
  }).then((data)=> setExcuse(data[0].excuse))

}

  
  return (
   <>

    <button onClick={()=>{handleExcuse('family')}}>Family</button>
    <button onClick={()=>{handleExcuse('office')}}>Office</button>
    <button onClick={()=>{handleExcuse('children')}} >Children</button>
  

    <h1>{excuse}</h1>

   </>
  )
}





export default App;
