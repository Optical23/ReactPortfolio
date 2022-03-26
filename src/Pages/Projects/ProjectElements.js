import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';

export const Container = styled.main`
    width: 100%;
    min-height: 60vh;
    padding: 3% 15%;
    margin: 0px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: fit-content;
    @media screen and (max-width: 1015px) {
        padding: 3% 5%;
    }
`;

export const Project = styled.div`
    min-width: 48%;
    margin: 1%;
    padding: 0px;
    padding-top: 35px;
    height: 20vh;
    background-color: blue;
    transition: transform 0.3s ease-in-out;
    @media screen and (max-width: 1015px) {
        width: 100%;
    }
`;

export const ProjectInfo = styled.div`
    height: fit-content;
    width: fit-content;
    max-width: 50%;
    background-color: rgba(76, 74, 70, 0.2);
    padding: 6px;
    color: black;
    font-size: 1.8em;
`;

