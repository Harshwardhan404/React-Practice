 import styles from './App.module.css'


function App() {


// const names = ["harsh", "Akshay", "Abhay", "Shivam"]

  const Users = [
    { name : "Jess", age : 12},
     { name : "aK", age :32},
      {name : "Harsh", age : 21}
   
  ]

  return (
   <div className={styles.App}>

    {/* {names.map((name,key)=>{
      return <>
        <h1 key={key}>{name}</h1>
      </>
    })}

    {names.map((name, key)=>{
      return <> <h2 key={key}>{name + "abhay"}</h2>  </>
    })} */}

{/* 
  <User /> */}

    {Users.map((user)=>{
      return <>{<User2 name = {user.name} age = {user.age}/>}</>
    })}

   </div>
  )
}

// const User =()=>{

//   const Users = [
//     { name : "Jess", age : 12},
//      { name : "aK", age :32},
//       {name : "Harsh", age : 21}
   
//   ]

//   return (

//   <>
//   {Users.map((User)=>{
//       return ( <div>

//        <h1>{User.name} {User.age}</h1>  
        
//         </div>)
//     })}
  
//   </>

//   )

// }

const User2 = (props)=>{
  return <h1> {props.name}  {props.age}</h1>
}





export default App;
