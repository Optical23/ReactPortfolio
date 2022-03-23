import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/ai';

export const Container = styled.div`
    width: 100%;
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
    font-size: 1vw;
    height: 20vh;
    background-color: black;
    @media screen and (max-width: 1015px) {
        width: 100%;
    }
`;