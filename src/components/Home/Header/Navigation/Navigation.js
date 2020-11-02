import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav class="navbar navbar-expand-md navbar-light">
            <div className="container">
                <Link to="/" class="navbar-brand ">
                    <span className="text-white font-weight-bold">Reza Shah</span>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link text-white mr-3 font-weight-bold" href="#header">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white mr-3 font-weight-bold" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white mr-3 font-weight-bold" href="#project">Project</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white mr-3 font-weight-bold" href="#blog">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white mr-3 font-weight-bold" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;