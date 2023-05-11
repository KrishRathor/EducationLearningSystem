import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';

function App() {

  const [loginSignupDisplay, setLoginSignupDisplay] = useState('login');

    return (
        <>
          <Navbar loginSignupDisplay={loginSignupDisplay} setLoginSignupDisplay={setLoginSignupDisplay} />
          {
            (loginSignupDisplay === 'login' ? <Login/> : <Signup/>)
          }
        </>
    );
}

export default App;
