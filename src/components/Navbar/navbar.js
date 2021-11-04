import React from "react";
const Navbar = () => {
    return (
        <div>
            <nav className="navbar has-shadow">
                <div className="navbar-brand">
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" id='burger'>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className="navbar-menu " id="nav-links">
                    <div className="navbar-start">
                        <a className="navbar-item has-text-dark has-text-weight-bold" href="#about">About me</a>
                        <a className="navbar-item has-text-dark has-text-weight-bold" href="#contact">Contact</a>
                        <a className="navbar-item has-text-dark has-text-weight-bold" href="#work">Work</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;