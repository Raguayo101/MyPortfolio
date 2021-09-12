import React from "react";
import myPhoto from '../../assets/images/photo_of_me.jpg';

const About = () => {
    return (

        <section class="section">

            <div class="container" id="about">


                <div class="columns switch is-flex is-justify-content-space-evenly has-text-white">
                    <div class="column is-two-fifths">
                        <h1 class="has-text-weight-bold is-size-1">This is Rodrigo Aguayo</h1>
                        <p class="is-size-4">Aspiring web developer</p>

                        <hr />

                        <p>Currently working as a procurement Analyst.Recent grad at UCI obtaining a cert.in full
                            stack
                            development.
                        </p>

                        <button class="button my-2"><a href="mailto: RodrigoAguayo94@gmail.com">Get in touch</a></button>

                        <ul class="social" id="contact">
                            <li>
                                <a href="mailto: RodrigoAguayo94@gmail.com" target="_blank">
                                    <i class="fas fa-envelope-square"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/Raguayo101" target="_blank">
                                    <i class="fab fa-github"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/rodrigo-aguayo-b4150b192/" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>

                    </div>

                    <div class="column is-two-fifths ">
                        <img src={myPhoto} alt="photo of me" class="profile-img" />
                    </div>

                </div>
            </div>


        </section>

    );
}

export default About;