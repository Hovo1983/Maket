import './App.css';
import {Route,Routes}  from 'react-router-dom'
import Reservation from './Components/Pages/Reservation';
import Rooms from './Components/Pages/Rooms';
import Contacts from './Components/Pages/Contacts';
import Home from './Components/Pages/Home';
import Leyout from './Components/Leyout';



function App() {
  return(
    <Routes>
    <Route path='/' element={<Leyout/>}>
    <Route index path='/' element={<Home/>}/>
    <Route path='/rooms' element={<Rooms/>}/>
    <Route path='/reservation' element={<Reservation/>}/>
    <Route path='/contacts' element={<Contacts/>}/>
    </Route>
    </Routes>
  
    )
  
}

export default App;
