import React from "react";
const Navbar = () => {
    return (
        <div>
            <nav class="navbar has-shadow">
                <div class="navbar-brand">
                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" id='burger'>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div class="navbar-menu " id="nav-links">
                    <div class="navbar-start">
                        <a class="navbar-item has-text-dark has-text-weight-bold" href="#about">About me</a>
                        <a class="navbar-item has-text-dark has-text-weight-bold" href="#contact">Contact</a>
                        <a class="navbar-item has-text-dark has-text-weight-bold" href="#work">Work</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;