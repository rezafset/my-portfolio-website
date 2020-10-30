import React, { useState } from 'react';
import blogPic1 from '../../../images/javacript.png';
import blogPic2 from '../../../images/javascript2.jpeg';
import blogPic3 from '../../../images/react.jpg';
import './Blog.css';

const Blog = () => {
    const [blogInfo] = useState([
        {
            img: blogPic1,
            blogTitle: '15 JavaScript concepts',
            blogLink: 'https://medium.com/@madasamy/15-javascript-concepts-that-every-nodejs-programmer-must-to-know-6894f5157cb7',
        },
        {
            img: blogPic2,
            blogTitle: 'JavaScript Interview Question',
            blogLink: 'https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95',
        },
        {
            img: blogPic3,
            blogTitle: 'React Basic Concept',
            blogLink: 'https://medium.com/@salwenikhil0724/react-js-basic-8e49a124ba5',
        },
    ])
    return (
        <div id="blog">
            <div className="container">
                <h1 className="text-center py-5 text-uppercase">Blog</h1>
                <div className="row my-5">
                    {
                        blogInfo.map(blogInfo =>
                            <div className="col-md-4 mb-sm-3 mb-3" data-aos="fade-up">
                                <div className="card blog">
                                    <img class="card-img-top" src={blogInfo.img} alt="" />
                                    <div className="card-body">
                                        <h5 class="card-title">{blogInfo.blogTitle}</h5>
                                    </div>
                                    <div className="card-footer">
                                        <a
                                            href={blogInfo.blogLink}
                                            target="_blank"
                                        >
                                            <button className="btn blog-btn btn-block">
                                                <span className="text-light">Read</span>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )

                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;