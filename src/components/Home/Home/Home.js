import React from 'react';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Header from '../Header/Header/Header';
import Project from '../Projects/Project';
import Footer from '../Footer/Footer';
import Blog from '../Blog/Blog';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Project></Project>
            <Blog></Blog>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;