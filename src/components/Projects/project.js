import React from "react";
import WhatToWatch from '../../assets/images/Watch_to_watch_homepage.png';
import WorkDay from '../../assets/images/work_day.png';
import Outbreak from '../../assets/images/outbreak.png';

const handleSubmit = () => {
    window.location.href = 'https://raguayo101.github.io/What-to-Watch/'
};


const Project = () => {
    return (
        <section class="section">
            <div class="container">


                <div class="columns is-centered is-vcentered">
                    <div class="column ">

                        <div class="card">

                            <figure class="image is-4by3 m-0">
                                <img src={WhatToWatch} alt="image of project" />
                            </figure>


                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <button class="button">
                                            <a href='https://raguayo101.github.io/What-to-Watch/'>view
                                                here
                                            </a>
                                        </button>
                                    </div>
                                    <div class="media-content">
                                        <p class="title is-6">"What to Watch" is a website that generates a random movie
                                            based off of the users filtered options.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">

                            <figure class="image is-4by3 m-0">
                                <img src={WorkDay} alt="Placeholder image" />
                            </figure>


                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <button class="button">
                                            <a href='https://raguayo101.github.io/Work-Day-Scheduler/'>view
                                                here
                                            </a>
                                        </button>
                                    </div>
                                    <div class="media-content">
                                        <p class="title is-6">A Work day scheduler to help you better keep time of your day!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                            <div class="card-image">
                                <figure class="image is-4by3 m-0">
                                    <img src={Outbreak} alt="Placeholder image" />
                                </figure>
                            </div>

                            <div class="card-content">
                                <div class="media">
                                    <div class="media-left">
                                        <button class="button">
                                            <a href='https://outbreak-420.herokuapp.com/'> view
                                                here</a>
                                        </button>
                                    </div>
                                    <div class="media-content">
                                        <p class="title is-6">Come try out our game! Outbreak!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

export default Project;
