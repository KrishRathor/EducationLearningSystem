import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUserPlus, faPersonChalkboard, faCartShopping } from '@fortawesome/free-solid-svg-icons';
const categories = [
    'Computer Science',
    'Business',
    'Art & Design',
    'Social Sciences',
    'Health & Medicine',
    'Mathematics',
    'Physical Science & Engineering',
    'Data Science',
    'Language Learning',
    'Personal Development'
];

const Navbar = (props) => {

    const handleSignup = () => {
        props.setLoginSignupDisplay('signup');
    }

    const handleLogin = () => {
        props.setLoginSignupDisplay('login');
    }

    return (
        <>
            <div className="flex justify-space-between align-center padding primary-bgcolor  ">
                <h1 className='primary-heading'><FontAwesomeIcon icon={faPersonChalkboard} style={{color: "#7080ee",}} /> [name]</h1>
                <div className="SearchBoxContainer">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input type="text" className='search-input' placeholder='Search for cources' />
                </div>
                <div className='dropDown'>
                    <button className='dropDown-btn heading hover-type-underline'>Categories</button>
                    <ul className='dropDown-content'>
                        {categories.map((category, index) => (
                            <li key={index}>{category}</li>
                        ))}
                    </ul>
                </div>
                <span className='tertiary-heading pointer hover-type-underline'>Teach on [name]</span>
                <FontAwesomeIcon icon={faCartShopping} className='cart'/>
                <button className='btn-type-1 heading btn hover-type-scale'>Log in</button>
                <button className='btn-type-2 heading btn hover-type-scale'>Sign up</button>
            </div>
        </>
    )
}

export default Navbar;
