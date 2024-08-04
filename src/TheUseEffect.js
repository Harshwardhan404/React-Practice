import React, { useEffect, useState } from 'react'



export default function TheUseEffect() {


    const [fact, setFact] = useState({})
   
   
    useEffect(()=>{
     let ignore = false;                    // we have done clean up down below in return as useEffect gives us
                                            // a clean up function so its intentional by react so we can use hook properly
    
     fetch('https://catfact.ninja/fact').then((facts)=>{
      return facts.json()
     }).then((res)=>{
       if (!ignore) {  setFact(res) }
     })
   
     return () => {                     // refer https://react.dev/reference/react/useEffect#my-effect-runs-twice-when-the-component-mounts
       ignore = true;
     };
   
    }, [])

    
  return (
    <>
  
 {fact?.fact}

    </>
  )
}