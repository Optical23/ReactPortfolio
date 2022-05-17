import styled, { keyframes } from 'styled-components';

export const leadSelector = keyframes`
    0% {top:0%;}
    50% {top:85%;}
    100% {top:0%;}
`;

export const removeCover = keyframes`
    from {height:100%}
    to {height:0%}
`;

export const Lead = styled.div`
    background-color: black;
    width: 100%;
    height: 15%;
    border-radius: 5px;
    position: absolute;
    animation-name: ${leadSelector};
    animation-duration: 3s;
    animation-iteration-count: 2;
`;

export const Cover = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    animation-name: ${removeCover};
    animation-duration: 1.4s;
    align-self: end;

`;

