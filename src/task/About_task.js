import React from "react";
import { Link } from "react-router-dom";
import './About_task.css'

function About() {
    return (
        <div className="about-container">
            {/* <h1 className="about-title">About Me</h1> */}

            <div className="about-content">
               

                <div className="about-text">
                    <h2>Hello, I'm Jebarekshi!</h2>

                    <p>
                        I'm a passionate developer interested in
                        programming, web development, and technology.
                    </p>

                    <p>
                        I have knowledge of Java, Python, HTML, CSS,
                        JavaScript, React.js, and database technologies.
                    </p>

                    <p>
                        I enjoy creating projects, learning new skills,
                        and solving real-world problems through coding.
                    </p>

                    <p>
                        My goal is to become a skilled software developer
                        and contribute to innovative projects.
                    </p>
                   <button className="contact-btn">Contact Me</button>
                </div>
            </div>
        </div>
    );
}

export default About;