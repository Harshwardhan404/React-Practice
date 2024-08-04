import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Effecttwo() {


    const [show, setShow] = useState(true)
    const [data, setData] = useState("");
    
    useEffect(()=>{

        console.log("component Mounted")
        // --> this portion will be called whenever the componenet is mounted.

        return()=>{
            console.log("component Unmounted")
            // this portion will be called when the componenet is unmounting.
            // used for cleanups, ie closing a file, clearing Intervals, ending requests.

        }

    }, [show]  ) // --> used to track which state or changes you want to track, empty array means runs once.
                // --> here it will track show state whenever there is a change it will calll the useEffect hook
                // --> or what is inside the useEffect hook here it will call console.log("component Mounted")

    const manageClick = ()=>{
        setShow(!show)
    }


    
    axios.get("https://jsonplaceholder.typicode.com/comments")             // check what happens without useEffect
  .then((response) => {
    setData(response.data[0].email);
    console.log("API WAS CALLED");
  });

// Every time the componenet re-renders the Api call will be made which is not optimal.


  return (
    <div>
        {data}
          { show  && <div> I am Visible</div>}
        <button onClick={manageClick}>{(show)? "Invisible Componenet":"Visible Component"}</button>

    </div>
  )
}



// the reason for using useEffect hook is when there is some change in the state react re-renders the component
// it can be a repetation of data if the api calls are made again and again.
// we can use the useEffect to fetch the data and give a [state] in the dependancy array so whenever the state changes
// then only the function in the useEffect will re-compute else without useEffect every time there is a state change
// the request would have been made, which is not good at all
// useEffect is a normal function it gives us a return function which can be used for the cleanup else the useEffect
// will run twice to check if it is implemented correctly.
// if we leave an empty dependancy array it will call the useEffect function only once
// https://react.dev/blog/2023/03/16/introducing-react-dev