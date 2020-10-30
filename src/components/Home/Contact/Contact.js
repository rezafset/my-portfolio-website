import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faPhone, faUser, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div id="contact">
            <div className="container">
                <h1 className="text-center py-5 text-uppercase">Contact</h1>
                <div className="row my-5">
                    <div className="col-md-6 mb-sm-4 mb-4" data-aos="fade-right">
                        <h3 className="mb-3">Get In Touch</h3>
                        <p>
                            <FontAwesomeIcon icon={faHome} className="mr-2" />
                            <span> Post office goli, Chawkbazar, Chattogram, Bangladesh.</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                            <span> ahmedrezashah@gmail.com</span>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faPhone} className="mr-2" />
                            <span>(+880)1674957611</span>
                        </p>
                    </div>

                    <div className="col-md-6" data-aos="fade-left">
                        <form action="mailto:ahmedrezashah@gmail.com" method="post" enctype="text/plain">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span class="input-group-text">
                                        <FontAwesomeIcon icon={faUser} />
                                    </span>
                                </div>
                                <input type="text" class="form-control" placeholder="Enter Name" required></input>
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span class="input-group-text">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </span>
                                </div>
                                <input type="text" class="form-control" placeholder="Enter Email" required></input>
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span class="input-group-text">
                                        <FontAwesomeIcon icon={faPencilAlt} />
                                    </span>
                                </div>
                                <textarea name="" id="" cols="20" rows="5" class="form-control" required></textarea>
                            </div>
                            <div class="form-group">
                                <button type="button" class="btn btn-success btn-block">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;