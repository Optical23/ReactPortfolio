import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: 80vh;
    padding: 4% 12%;
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 1015px) {
        padding: 3% 5%;
        height: fit-content;
    }
`;

export const PageName = styled.div`
    font-size: 6vh;
    width: 100%;
    margin: 1%;
    display: block;
    text-align: center;
    text-decoration: underline;
`;

export const Skillz = styled.div`
    min-width: 20%;
    margin: 1%;
    padding: 0px;
    width: 30%;
    padding-top: 35px;
    height: 20vh;
    background-color: blue;
    @media screen and (max-width: 1015px) {
        width: 100%;
        height: 25vh;
    }
`;