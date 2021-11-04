import React from "react";
import myPhoto from '../../assets/images/photo_of_me.jpg';

const About = () => {
    return (

        <section className="section">

            <div className="container" id="about">


                <div className="columns switch is-flex is-justify-content-space-evenly has-text-white">
                    <div className="column is-two-fifths">
                        <h1 className="has-text-weight-bold is-size-1">This is Rodrigo Aguayo</h1>
                        <p className="is-size-4">Aspiring web developer</p>

                        <hr />

                        <p>Currently working as a procurement Analyst.Recent grad at UCI obtaining a cert.in full
                            stack
                            development.
                        </p>

                        <button className="button my-2"><a href="mailto: RodrigoAguayo94@gmail.com">Get in touch</a></button>

                        <ul className="social" id="contact">
                            <li>
                                <a href="mailto: RodrigoAguayo94@gmail.com" target="_blank">
                                    <i className="fas fa-envelope-square"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Raguayo101" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/rodrigo-aguayo-b4150b192/" target="_blank">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>

                    </div>

                    <div className="column is-two-fifths ">
                        <img src={myPhoto} alt="photo of me" className="profile-img" />
                    </div>

                </div>
            </div>


        </section>

    );
}

export default About;