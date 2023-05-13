import React from 'react'

const Login = () => {
  return (
    <div className='LoginSignupPage'>
      <h1 className='secondary-heading'>Login</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
        />
        <button type="submit" className='btn btn-type-3 heading hover-type-scale'>Login</button>
      </form>
    </div>
  )
}

export default Login
