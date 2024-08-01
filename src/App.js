// import './App.module.css';
// import Profile from './components/Navbar';

 import styles from './App.module.css'


function App() {

  return (
   <>
   
 <User name = "Harsh" age={23} email = "pati.04@gmail.com"/>
 <User name = "Raj" age={12} email = "raj.04@gmail.com"/>
 <User name = "Shivam" age={25} email = "shivam.04@gmail.com"/> 

 <Company salary ={320000} position= "software Developer" company = "Google"/>
 <Company salary ={220000} position= "Tester" company = "Amazon"/>
 <Company salary ={310000} position= "DotNET Developer" company = "Meta Inc"/>


  <div className={styles.App}>Hello Pedro</div>
  <div className={styles.Hello}>Hello Pedro</div>

   </>
  )
}


const User = (props)=>{
return (
<>

<h2>{props.name}</h2>
<h2>{props.age}</h2>
<h2>{props.email}</h2>


</>
)
}


const Company = (props)=>{
  return (
  <>
  <h1>{props.salary}</h1>
  <h1>{props.position}</h1>
  <h1>{props.company}</h1>



  </>
  )
}


export default App;
