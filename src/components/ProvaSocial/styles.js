import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    border-radius: 5px;
    width: 100%;
    margin-bottom: 4rem;

    @media (max-width: 576px){
        max-width: 320px;
        margin-top: 3rem;
    }
`;

export const BlurCircle = styled.div`
    position: absolute;
    top: ${(props) => `${props.top}%`};
    left: ${(props) => `${props.left}%`};
    bottom: 0;
    right: 0;
    background: ${(props) => `radial-gradient(circle, rgba(${props.rgb}, 1) 0%, rgba(${props.rgb}, 0) 70%)`};
    width: ${(props) => `${props.width}px`};
    height: ${(props) => `${props.height}px`};
    border-radius: 50%;
    z-index: -2;

    @media (max-width: 576px){
        top: ${(props) => `${props.topMobile}%`};
        left: ${(props) => `${props.leftMobile}%`};
    }
`;

export const BlurBackgroud = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(49, 49, 49, 0.2);
    backdrop-filter: blur(5px);
    z-index: -1;
`;

export const GridWrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: ${(props) => `${props.gridColumns}`};
    padding: 2rem 0;

    @media (max-width: 576px){
        grid-template-columns: 1fr;
    }
`;

export const OffsetGrid = styled.div`
    position: relative;
`;

export const BoxContent = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    border-radius: 5px;
    overflow: hidden;
    padding-left: ${(props) => `${props.paddingLeft}rem`};
    padding-right: ${(props) => `${props.paddingRight}rem`};

    @media (max-width: 576px){
        grid-template-columns: 1fr;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 6rem;
        place-items: center;
    }
`;

export const InfoBox = styled.div`
    margin: 2rem 0;
    display: flex;
    align-items: center;
    gap: .5rem;

    @media (max-width: 576px){
        text-align: center;
        margin: 1rem 0;
    }
`;

export const BigText = styled.p`
    font-family: "Work Sans", sans-serif;
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
    color: #facf90;

    @media (max-width: 576px){
        font-size: 41px;
    }
`;

export const Text = styled.p`
    font-family: "Work Sans", sans-serif;
    font-size: 36px;
    line-height: 42px;
    color: #facf90;

    @media (max-width: 576px){
        font-size: 35px;
    }
`;

export const SmallText = styled.p`
    font-family: "Work Sans", sans-serif;
    font-size: 18px;
    line-height: 24px;
    color: #facf90;
`;

export const BlurFrameRound = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${(props) => `${props.left}`};
    right: ${(props) => `${props.right}`};
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background: linear-gradient(315deg, rgba(53, 53, 53, 0.1) 19.5%, rgba(215, 215, 215, 0.1) 93.5%);
    backdrop-filter: blur(20px);
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 576px){
        top: -10%;
        left: 50%;
        right: 0;
        transform: translatex(-50%);
    }
`;

export const Visibility = styled.div`
    visibility: ${(props) => `${props.visibility ? "hidden" : "visible"}`};
`