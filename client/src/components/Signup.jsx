import React from 'react'

const Signup = () => {
  return (
    <div className="LoginSignupPage">
      <h1 className='secondary-heading'>Sign Up</h1>
      <form>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
        />
        <label htmlFor="education_level">Education Level</label>
        <select name="educationLevel" id="education_level">
          <option value="high-school">High School</option>
          <option value="associate-degree">Associate Degree</option>
          <option value="bachelor-degree">Bachelor's Degree</option>
          <option value="master-degree">Master's Degree</option>
          <option value="doctorate-degree">Doctorate Degree</option>
        </select>
        <label htmlFor="gender">Gender</label>
        <select name="gender" id="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non-Binary</option>
          <option value="transgender">Transgender</option>
          <option value="genderqueer">Genderqueer</option>
          <option value="agender">Agender</option>
          <option value="other">Other</option>
        </select>
        <button type="submit" className='btn btn-type-3 heading hover-type-scale'>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup
