import styled from "styled-components";

export const Section = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 5fr 7fr;
    margin-bottom: 7.5rem;
    place-items: center;
    min-height: 100vh;

    @media (max-width: 576px){
        grid-template-columns: 1fr;
    }
`;

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

export const Subtitle = styled.h2`
    font-family: "Work Sans", sans-serif;
    font-size: 24px;
    line-height: 31px;
    font-weight: 400;
    color: #facf90;
    margin-bottom: ${(props) => `${props.marginBottom !== undefined ? props.marginBottom : 0}rem`};
`;

export const Safety = styled.div`
    display: flex;
    gap: 1rem;
    place-items: center;
    max-width: 400px;
    margin: 2rem auto 0;

    p {
        font-family: "Work Sans", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #facf90;
    }
`;

export const BlurCircle = styled.div`
    position: absolute;
    top: ${(props) => `${props.top}%`};
    left: ${(props) => `${props.left}%`};
    bottom: ${(props) => `${props.bottom}%`};
    right: ${(props) => `${props.right}%`};
    background: ${(props) => `radial-gradient(circle, rgba(${props.rgb}, 0.2) 0%, rgba(${props.rgb}, 0) 70%)`};
    width: ${(props) => `${props.width}px`};
    height: ${(props) => `${props.height}px`};
    border-radius: 50%;
    z-index: -1;
`;