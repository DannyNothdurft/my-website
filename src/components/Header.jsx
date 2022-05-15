import React from 'react';
import './header.scss';

function Header() {
    return (
        // Warum id='home'
        <div id='home' className='container header-container'>
            <h3>Ich bin</h3>
            <h1>Danny</h1>
            <h2>Font-End Web Developer</h2>
        </div>
    )
}

export default Header;