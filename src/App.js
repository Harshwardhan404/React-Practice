import { Link, Route, Routes } from 'react-router-dom';
import './App.module.css';
import Home from './components/Home';
import Addmore from './components/Addmore';
import Menu from './components/Menu';

function App() {

  return (
   <>

<nav>

  <ul>
      <li> <Link to="/">Home</Link></li>
      <li> <Link to="/more"> Add More</Link> </li>
      <li>  <Link to="/menu">Menu</Link>  </li>
  </ul>

</nav>



<Routes>

    <Route path='/' element = {<Home/>}/>
    <Route path='/more' element = {<Addmore/>}/>
    <Route path='/menu' element = {<Menu/>}/>
  
</Routes>
  

   </>
  )
}





export default App;
