import React, { useState } from 'react';

import loginImg from '../images/login.jpg';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const submitLoginData = async (e) => {
    e.preventDefault();

    const response = await fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })

    if (response.ok) {
      const result = await response.json();
        localStorage.setItem('currentUser', result.user);
    } else {
      console.log('error');
    }

  }

  return (
    <div className='loginSignupBox w-80 margin-auto mt-2 flex-column justify-space-evenly'>
      <div className='LoginSignupPage h-2 mt-10 ml-2'>
        <h1 className='secondary-heading'>Login</h1>
        <form onSubmit={submitLoginData}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            onChange={handleEmail}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={handlePassword}
          />
          <button type="submit" className='btn btn-type-3 heading hover-type-scale'>Login</button>
        </form>
      </div>

      <div className='LoginImage mt-10'>
        <img src={loginImg} alt="" />
      </div>

    </div>
  )
}

export default Login;
