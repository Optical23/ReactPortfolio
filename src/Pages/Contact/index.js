import React from 'react';
import {
    PageName,
    Container,
    Skillz
} from './ContactElements';
import { AiFillGithub } from 'react-icons/ai';
function Contact() {
    return (
        <Container>
            <PageName>Contact Me</PageName>
                <Skillz>3</Skillz>
                <Skillz>23</Skillz>
                <Skillz>Github <AiFillGithub/></Skillz>
        </Container>
    );
}

export default Contact;