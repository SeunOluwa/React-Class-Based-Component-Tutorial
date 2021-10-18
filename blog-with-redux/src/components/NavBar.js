import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const NavBar = (props) => {
    // setTimeout(() => {
    //     props.history.push('/about');
    // }, 2000);
    return (
        <nav>
            <nav className="nav-wrapper red darken-3">
                <div className="container">
                    {/* eslint-disable-next-line */}
                    <a className="brand-logo">Seun'Times</a>
                    <ul className="right">
                        <li><Link to="/">Home</Link></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        </nav>
    );
}

export default withRouter(NavBar);
