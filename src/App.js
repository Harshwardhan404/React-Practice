// import './App.module.css';

import { useEffect, useState } from "react";


function App() {


  const [data, setData] = useState('')


  useEffect(()=>{
  
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res)=>{
      return res.json()
    }).then((fact)=>{
     setData(fact.userId)
     
    })
  
  }, [data])


  return (
   <>
   {console.log(data)}


   </>
  )
}



export default App;
