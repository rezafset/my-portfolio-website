import React from 'react';
// import ParticlesJs from '../../Particles/Particles';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import Navigation from '../Navigation/Navigation';
import './Header.css';


const Header = () => {
    return (
        <div id="header" className="header text-white">
            {/* <ParticlesJs></ParticlesJs> */}
            <Navigation></Navigation>
            <HeaderContainer></HeaderContainer>
        </div>
    );
};

export default Header;