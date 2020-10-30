import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faPhone, faUser, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

toast.configure();

const Contact = () => {
    function sendEmail(e){

        e.preventDefault();

        emailjs.sendForm('gmail', 'gmail', e.target, 'user_ixnn8fpcfRD6pXOwSyQek')
        .then((result) => {
            console.log(result.text);
            toast.success('Message Send Successfully');
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }


    return (
        <div id="contact">
            <div className="container">
                <h1 className="text-center py-5 text-uppercase">Contact</h1>
                <div className="row my-5">
                    <div className="col-md-6 mb-sm-4 mb-4" data-aos="fade-right">
                        <h3 className="mb-4">Get In Touch</h3>
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
                            <span>+880-1674957611</span>
                        </p>
                    </div>

                    <div className="col-md-6" data-aos="fade-left">
                        <h3 className="mb-4 text-center">Fill Free To Message Me</h3>
                        <form onSubmit={sendEmail}>
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" placeholder="Enter Name" required />
                            </div>

                            <div className="form-group">
                                <input className="form-control" placeholder="Enter Email" type="email" name="email" required />
                            </div>

                            <div className="form-group">
                                <textarea placeholder="Enter Your Message" className="form-control" name="message" cols="30" rows="5" required />
                            </div>

                            <div className="form-group">
                                <input className="btn send-btn btn-block text-light" type="submit" value="Send" />
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;