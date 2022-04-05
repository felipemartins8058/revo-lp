import styled from "styled-components";

export const TimelineWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 11rem;
`;

export const TimelineItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 5rem;

    @media (max-width: 576px){
        grid-template-columns: 1fr;
    }
`;

export const ItemContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 18.5rem;
    margin-left: ${props => `${(props.marginLeft)}rem`};
    margin-right: ${props => `${(props.marginRight)}rem`};

    @media (max-width: 576px){
        margin-left: 3rem   ;
    }
`;

export const ItemTitle = styled.div`
    position: relative;
    width: 18.5rem;
    background: ${props => `linear-gradient(#131313, #131313) padding-box, linear-gradient(to ${(props.gradientDirection)}, rgba(198, 43, 40, 1), rgba(198, 43, 40, 0)) border-box`};
    border-radius: 5px;
    border: 1px solid transparent;

    @media (max-width: 576px){
        background: linear-gradient(#131313, #131313) padding-box, linear-gradient(to right, rgba(198, 43, 40, 1), rgba(198, 43, 40, 0)) border-box;
    }
`;

export const ItemTitleText = styled.h2`
    font-family: "Assistant", sans-serif;
    font-weight: 700;
    font-size: 36px;
    color: #fff;
    line-height: 47px;
    text-align: center;
    padding: .5rem 0;
`;

export const ItemText = styled.p`
    font-family: "Assistant", sans-serif;
    font-size: 18px;
    line-height: 30px;
    color: #FACF90;
`

export const TimelineLine = styled.div`
    position: absolute;
    top: 2.5rem;
    left: 50%;
    background-color: rgba(255, 255, 255, 0.8);
    width: 1px;
    height: 100%;

    @media (max-width: 576px){
        left: 6%;
    }
`

export const TimelinePoint = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${props => `${(props.left)}px`};
    background: #C62B28;
    border-radius: 50rem;
    width: 20px;
    height: 20px;

    @media (max-width: 576px){
        left: -27px
    }
`

export const TimelineConector = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${props => `${(props.left)}px`};
    width: 170px;
    height: 1px;
    background: #C62B28;

    @media (max-width: 576px){
        left: -27px;
        width: 27px;
    }
`

export const TimelineEnd = styled.div`
    position: absolute;
    bottom: -170px;
    left: 50%;
    transform: translateX(-50%);

    @media (max-width: 576px){
        left: 24%;
    }
`