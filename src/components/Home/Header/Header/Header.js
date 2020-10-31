import React from 'react';
import HeaderContainer from '../HeaderContainer/HeaderContainer';
import Navigation from '../Navigation/Navigation';
import './Header.css';


const Header = () => {
    return (
        <div id="header" className="header text-white">
            <Navigation></Navigation>
            <HeaderContainer></HeaderContainer>
        </div>
    );
};

export default Header;