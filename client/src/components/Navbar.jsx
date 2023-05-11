import React from 'react';

const Navbar = (props) => {

    const handleSignup = () => {
        props.setLoginSignupDisplay('signup');
    }

    const handleLogin = () => {
        props.setLoginSignupDisplay('login');
    }

    return (
        <>
        <h1 className='primary-heading'>Navbar</h1>
        <button onClick={handleSignup}>Signup</button>
        <button onClick={handleLogin}>Login</button>
        </>
    )
}

export default Navbar;
