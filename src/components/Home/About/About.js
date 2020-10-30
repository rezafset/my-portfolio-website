import React from 'react';
import './Abount.css';
import profilePic from './profile.png';

const About = () => {
    return (
        <div id="about">
            <div className="container">
                <h1 className="text-center py-5 text-uppercase" >About</h1>
                <div className="row my-5">
                    <div className="col-md-6 mb-sm-4 mb-4" data-aos="fade-right">
                        <img className="profile-pic" src={profilePic} alt=""/>
                    </div>
                    <div className="col-md-6" data-aos="fade-left">
                        <h2 className="font-weight-bold">Ahmed Reza Shah</h2>
                        <h5>Front End Developer</h5>
                        <p>I am passionate, proficient and self-motivated web developer. Like to develop single page application using react and back end technology like Node.js, MongoDB. I also have solid knowledge in responsive design with HTML5, CSS3 and Bootstrap.</p>
                        <h4 className="font-weight-bold">Technical Skills </h4>
                        <p><b>Comfortable: </b>JavaScript, ES6, React, React Router, React Hook, React Bootstrap, Firebase Authentication, JSON, REST API, HTML5, .CSS3, Bootstrap. </p>
                        <p><b>Familiar: </b>Node.js, Express.js, MongoDB, Material UI.</p>
                        <p><b>Tools: </b>VS Code, Git, Chrome Dev Tool, Netlify, Heroku, Firebase, Subline-Text 3, Brackets. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;