import React, { useState } from 'react'

import loginImg from '../images/login.jpg'

const Signup = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [education, setEducation] = useState('');
  const [gender, setGender] = useState('');

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleEducation = (e) => {
    setEducation(e.target.value);
  }

  const handleGender = (e) => {
    setGender(e.target.value);
  }

  const handleSignupData = async (e) => {
    e.preventDefault();

    const response = await fetch('http://127.0.0.1:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
        username: username,
        gender: gender,
        education: education
      })
    })

    if (response.ok) {
      console.log('user created successfully');
    } else {
      console.log('error');
    }
  }

  return (
    <div className='loginSignupBox w-80 margin-auto mt-2  flex-column justify-space-evenly'>
      <div className="LoginSignupPage mt-5 ml-2 h-3">
        <h1 className='secondary-heading'>Sign Up</h1>
        <form onSubmit={handleSignupData}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={handleUsername}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={handlePassword}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            onChange={handleEmail}
          />
          <label htmlFor="education_level">Education Level</label>
          <select name="educationLevel" id="education_level" onChange={handleEducation}>
            <option value="">Select your education level</option>
            <option value="high-school">High School</option>
            <option value="associate-degree">Associate Degree</option>
            <option value="bachelor-degree">Bachelor's Degree</option>
            <option value="master-degree">Master's Degree</option>
            <option value="doctorate-degree">Doctorate Degree</option>
          </select>
          <label htmlFor="gender">Gender</label>
          <select name="gender" id="gender" onChange={handleGender}>
            <option value="">Choose</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <button type="submit" className='btn btn-type-3 heading hover-type-scale'>Sign Up</button>
        </form>
      </div>

      <div className='LoginImage mt-10'>
        <img src={loginImg} alt="" />
      </div>
    </div>
  )
}

export default Signup
