import styled from "styled-components";

export const Section = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 7.5rem;
`;

export const Title = styled.h2`
    font-family: "Assistant", sans-serif;
    font-weight: 800;
    font-size: 48px;
    line-height: 63px;
    color: #fff;
    font-size: 48px;
    font-weight: 800;
    text-align: center;

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
    background: ${(props) => `radial-gradient(circle, rgba(${props.rgb}, 0.2) 0%, rgba(${props.rgb}, 0) 70%)`};
    width: ${(props) => `${props.width}px`};
    height: ${(props) => `${props.height}px`};
    border-radius: 50%;
`;