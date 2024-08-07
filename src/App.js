import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Chat from "./pages/chat/Chat";
import Agenda from "./pages/agenda/Agenda";
import Blocked from "./pages/blocked/Blocked";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import Login from "./pages/login/Login";
import Services from "./pages/services/Services";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Chat />}/>
          <Route path='/agenda' element={<Agenda />}/>
          <Route path='/blocked' element={<Blocked />}/>
          <Route path='/forgot-password' element={<ForgotPassword />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/services' element={<Services />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 