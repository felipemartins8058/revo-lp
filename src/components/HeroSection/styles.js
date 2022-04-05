import styled from "styled-components";

export const Section = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 7fr 6fr;
    margin-bottom: 7.5rem;
    place-items: center;
    min-height: 100vh;

    @media (max-width: 576px){
        grid-template-columns: 1fr;
    }
`;

export const HeroLogo = styled.div`
    margin-bottom: 2rem;
`

export const HeroImage = styled.div`
    @media (max-width: 576px){
        display: none;
    }
`

export const Title = styled.h1`
    font-family: "Assistant", sans-serif;
    font-weight: 800;
    font-size: 48px;
    line-height: 63px;
    color: #fff;
    font-size: 48px;
    font-weight: 800;
    margin-bottom: 2rem;

    span {
        color: #c62b28;
    }
`;      

export const Subtile = styled.h2`
    font-family: "Assistant", sans-serif;
    font-size: 24px;
    line-height: 31px;
    font-weight: 400;
    color: #FACF90;
    margin-bottom: ${(props) => `${props.marginBottom !== undefined ? props.marginBottom : 0}rem`};
`;

export const BlurCircle = styled.div`
    position: absolute;
    top: ${(props) => `${props.top}%`};
    left: ${(props) => `${props.left}%`};
    bottom: ${(props) => `${props.bottom}%`};
    right: ${(props) => `${props.right}%`};
    background: ${(props) => `radial-gradient(circle, rgba(66, 55, 143, 0.5) 0%, rgba(198, 43, 40, 0) 70%)`};
    width: ${(props) => `${props.width}px`};
    height: ${(props) => `${props.height}px`};
    border-radius: 50%;
    z-index: -1;
`;

export const ArrowDown = styled.div`
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 576px){
        display: none;
    }
`