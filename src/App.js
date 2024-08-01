// import './App.module.css';
// A way of Importing Css
// import Profile from './components/Navbar';

 import styles from './App.module.css'
 // Another way of importing Css


function App() {

  let age =21

  let isGreen = true;


  if(age>=18){
    return <>
      <div className={styles.App}>Cana Pedro</div>
      <div className style={(isGreen)?{color : 'green'}: {color : 'black'}}>I am colored Tag</div>
      {isGreen && <button>this is a button</button>}
    </>
  }

  return (
   <>
   
  <div className={styles.App}>Hello Pedro</div>
  <div className={styles.Hello}>Hello Harsh</div>

   </>
  )
}


export default App;
