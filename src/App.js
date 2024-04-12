import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Registor from './pages/Registor';
import Contacts from './pages/Contacts';
import NewContacts from './pages/NewContacts';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Welcome/>}/>  
      <Route path='/login' element={<Login/>}/> 
      <Route path='/registor' element={<Registor/>}/> 
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/contacts/new' element={<NewContacts/>}/>
      </Routes>     
     </BrowserRouter>
    </div>
  );
}

export default App;
