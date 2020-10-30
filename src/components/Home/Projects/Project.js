import React, { useState } from 'react';
import pic1 from '../../../images/creativeagency1.PNG';
import pic2 from '../../../images/volunteer-networ-pro.PNG';
import pic3 from '../../../images/redOnion.PNG';
import pic4 from '../../../images/covidtracker.PNG';
import pic5 from '../../../images/e-school.PNG';
import pic6 from '../../../images/hotgadgets.PNG';
import ProjectCard from '../ProjectCard/ProjectCard';


const Project = () => {
    const [projectInfo] = useState([
        {
            image: pic1,
            projectName: 'Creative Agency',
            projectDetails: 'A Complete MERN project where a user can select and order any agency service.Users can give a review of those services .Admin can add new service and see full user ordered services list.Admin can see full user ordered services list.Admin can make another admin as well.',
            githubLink: 'https://github.com/rezafset/creative-agency-client',
            websiteLink: 'https://reza-creative-agency.web.app/',
        },
        {
            image: pic2,
            projectName: 'Volunteer Network',
            projectDetails: 'A Complete MERN project where a user can choose any event and register as a volunteer.User can see all events that he/she selected.Admin can add a new event as required.Newly added events are shown on the website.Admin can see a full volunteer register list.',
            githubLink: 'https://github.com/rezafset/volunteer-network',
            websiteLink: 'https://reza-volunteer-network.web.app/',
        },
        {
            image: pic3,
            projectName: 'Hot Onion Website',
            projectDetails: 'A responsive restaurant website using react with firebase authentication where a user can order their favorite food as required.Users have options for different categories of food like breakfast, lunch, and dinner.Before order, the user need to sign up on the website.',
            githubLink: 'https://github.com/rezafset/hot-onion-project',
            websiteLink: 'https://reza-hot-onion-food.web.app/',
        },

    ]);
    return (
        <div id="project">
            <div className="container">
                <h1 className="text-center py-5 text-uppercase">Latest Project</h1>
                <div className="row my-5">
                    {
                        projectInfo.map(projectInfo=> <ProjectCard key={projectInfo.image} projectInfo={projectInfo}></ProjectCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Project;