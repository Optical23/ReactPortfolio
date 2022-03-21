import React from 'react';
import {
    HeaderDiv,
    Profile,
    TitleDiv,
    Title
} from './HeaderElements';
import imgProfile from './ProfileImage.jpg';
function Header() {
    return(
    <HeaderDiv>
        <Profile src={imgProfile} alt="profile"/>
        <TitleDiv>
            <Title>Full Stack Developer</Title>
        </TitleDiv>
    </HeaderDiv>
    );
}

export default Header;