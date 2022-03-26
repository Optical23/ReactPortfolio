import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: 80vh;
    padding: 4% 12%;
    @media screen and (max-width: 1015px) {
        padding: 3% 5%;
    }
`;

export const PageName = styled.div`
    font-size: 6vh;
    margin: 1%;
    display: block;
    text-align: center;
    text-decoration: underline;
`;
export const Bio = styled.header`
    font-size: 4vh;
    height: fit-content;
    width: fit-content;
    display: block;
    max-width: 50%;
    text-align: center;
    margin: auto;
`;

export const AboutMeText = styled.div`
    height: fit-content;
    width: fit-content;
    display: block;
    max-width: 50%;
    text-align: center;
    margin: auto;
`;