import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import LobbyLiveVideo from './components/LobbyLiveVideo';
import LiveVideo from './components/LiveVideo';
import { SocketProvider } from './context/SocketProvider';

function App() {

  const [loginSignupDisplay, setLoginSignupDisplay] = useState('login');

  return (

    <Router>
      <SocketProvider>
        <Routes>
          <Route path='/login' element={
            <>
              <Navbar loginSignupDisplay={loginSignupDisplay} setLoginSignupDisplay={setLoginSignupDisplay} />
              {
                (loginSignupDisplay === 'login' ? <Login /> : <Signup />)
              }
            </>
          }></Route>
          <Route path='/' element={
            <>
              <LobbyLiveVideo />
            </>
          }></Route>
          <Route path='/room/:roomId' element={
            <>
              <LiveVideo></LiveVideo>
            </>  
          }></Route>
        </Routes>
      </SocketProvider>
    </Router>

  );
}

export default App;
