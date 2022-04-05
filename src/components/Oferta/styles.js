import styled from "styled-components";

export const OfertaWrapper = styled.div`
    position: relative;
    border-radius: 5px;
    padding: 1px;
`;

export const OfertaBorder = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(#070707, #070707) padding-box, linear-gradient(315deg, rgba(53, 53, 53, 0), rgba(53, 53, 53, 1)) border-box;
    border: 1px solid transparent;
    border-radius: 5px;
`;

export const OfertaContent = styled.div`
    position: relative;
    background-color: #070707;
    padding: 1rem;
    overflow: hidden;
    border-radius: 5px;
`;

export const BlurCircle = styled.div`
    position: absolute;
    top: ${(props) => `${props.top}%`};
    left: ${(props) => `${props.left}%`};
    bottom: ${(props) => `${props.bottom}%`};
    right: ${(props) => `${props.right}%`};
    background: ${(props) => `radial-gradient(circle, rgba(${props.rgb}, 1) 0%, rgba(${props.rgb}, 0) 70%)`};
    width: ${(props) => `${props.width}px`};
    height: ${(props) => `${props.height}px`};
    border-radius: 50%;
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
`;

export const ContentGrid = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1rem 0;

    @media (max-width: 576px) {
        gap: 2rem;
        grid-template-columns: 1fr;
    }
`;


export const BigText = styled.h1`
    font-family: "Assistant", sans-serif;
    font-weight: 700;
    font-size: 36px;
    line-height: 47px;
    color: #ffffff;
    text-align: center;
    margin-bottom: ${(props) => `${props.marginBottom}rem`};
`;

export const Text = styled.h2`
    font-family: "Assistant", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;
    color: #fff;
    text-align: center;
    margin-bottom: ${(props) => `${props.marginBottom}rem`};
`

export const SmallText = styled.h3`
    font-family: "Assistant", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    margin-bottom: ${(props) => `${props.marginBottom}rem`};
`

export const AlignCenter = styled.div`
    display: flex;
    flex-direction: column;
    place-items: center;

`