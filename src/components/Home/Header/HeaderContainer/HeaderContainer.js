import React from 'react';
import './HeaderContainer.css';
import Typical from 'react-typical';
import pdf from './Reza-COL-USTC-CSE.pdf'

const HeaderContainer = () => {
    // d-flex justify-content-center align-items-center
    return (
        <div className="container info-portion">
            <div class="row">
                <div class="col-md-12 mt-5" data-aos="fade-right">
                    <div className="text-center mt-5 p-4">
                        <h1 className="pt-5">Ahmed Reza Shah</h1>
                        <h3>
                            <Typical
                                loop={Infinity}
                                wrapper="p"
                                steps={[
                                    'Front End Developer',
                                    1000,
                                    'MERN Stack Developer',
                                    1000,
                                    'React Enthusiast',
                                    1000,
                                    'Network Engineer',
                                    1000,
                                ]}
                            />
                        </h3>
                        <div className="icon">
                            <a
                                href="https://github.com/rezafset"
                                target="_blank"
                            >
                                <i
                                    class="fa fa-github-square"
                                    aria-hidden="true"
                                ></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ahmed-reza-shah/"
                                target="_blank"
                            >
                                <i
                                    class="fa fa-linkedin-square"
                                    aria-hidden="true"
                                ></i>
                            </a>
                            <a
                                href="https://twitter.com/ahmedrezashah"
                                target="_blank"
                            >
                                <i
                                    class="fa fa-twitter-square"
                                    aria-hidden="true"
                                ></i>
                            </a>
                            <a
                                href="https://www.facebook.com/reza.shah.17/"
                                target="_blank"
                            >
                                <i
                                    class="fa fa-facebook-square"
                                    aria-hidden="true"
                                ></i>
                            </a>
                        </div>
                        <div className="pt-3">
                            <a href={pdf} download>
                                <button type="button" class="btn  text-white download-btn">Download CV</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HeaderContainer;