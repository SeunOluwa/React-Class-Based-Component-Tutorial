import React from 'react';

const NavBar = () => {
    return (
        <nav>
            <nav className="nav-wrapper red darken-3">
                <div className="container">
                    {/* eslint-disable-next-line */}
                    <a className="brand-logo">Seun'Times</a>
                    <ul className="right">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </nav>
    );
}

export default NavBar;
