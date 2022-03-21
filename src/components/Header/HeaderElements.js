import styled from 'styled-components';

export const HeaderDiv = styled.header`
    display: flex;
    flex-wrap: wrap;
    height: fit-content;
    width: 100%;
    background-color: #5F5B6B;
    align-items: center;
    justify-content: flex-end;
    padding: 25px 0px;
    @media screen and (max-width: 613px) {
        justify-content: center;
    }
`;

export const Profile = styled.img`
    height: 150px;
    width: auto;
    image-resolution: 300dpi;
    box-shadow: 10px 10px 5px #323031;
    border-radius: 5px;
    margin-right: 5%;
`;

export const TitleDiv = styled.div`
    height: fit-content;
    background-color: #3D3B3C;
    padding: 0px 10px;
    text-align: center;
    margin-top: 20px;
`;

export const Title = styled.h1`
    color: #FFF;
    font-size: 40px;
`;