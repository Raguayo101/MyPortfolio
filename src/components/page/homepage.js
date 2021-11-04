import React from "react";
import Navbar from "../Navbar/navbar";
import About from "../about/about";
import HeaderProfile from "../header/Header";
import Project from "../Projects/project";
import Footer from "../footer/footer";


const Homepage = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div>
                <About />
            </div>
            <div>
                <Project />
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>

    );
}

export default Homepage;

