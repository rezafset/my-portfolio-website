import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ projectInfo }) => {
    return (
        <div className="col-md-4 mb-sm-3 mb-3" data-aos="fade-up">
            <div className="card">
                <img class="card-img-top" src={projectInfo.image} alt="" />
                <div className="card-body">
                    <h5 class="card-title">{projectInfo.projectName}</h5>
                    <p class="card-text">{projectInfo.projectDetails}</p>
                </div>
                <div className="card-footer link d-flex justify-content-between">
                    <div>
                        <a
                            href={projectInfo.githubLink}
                            target="_blank"
                        >
                            <button className="btn github-btn">
                                <i
                                    class="fa fa-github"
                                    aria-hidden="true"
                                ></i>
                            </button>
                        </a>
                    </div>
                    <div>
                        <a
                            href={projectInfo.websiteLink}
                            target="_blank"
                        >
                            <button className="btn website-btn">
                                <i class="fa fa-globe"
                                    aria-hidden="true"
                                ></i>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProjectCard;