import styled from "styled-components";

export const Section = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 7.5rem;
`;

export const AccordionWrapper = styled.ul`
    list-style: none;
    padding: 0;
`;

export const AccordionItem = styled.li`
    //border-top: 1px solid #9f9f9f;
    margin-bottom: 1rem;
    
`;

export const AccordionButton = styled.button`
    font-size: 16px;
    background: linear-gradient(#131313, #131313) padding-box, linear-gradient(to right, rgba(198, 43, 40, 1), rgba(198, 43, 40, 0)) border-box;
    border-radius: 5px;
    border: 1px solid transparent;
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 18px 16px;
    cursor: pointer;
    font-family: "Assistant", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 31px;
    color: #fff;
`;

export const AccordionControl = styled.div`
    font-size: 20px;
`;

export const AccordionContent = styled.div`
    font-size: 20px;
    z-index: -1;
`;

export const AnswerWrapper = styled.div`
    height: ${props => props.isActive ? `auto` : `0`};
    overflow: hidden;
    margin-top: -10px;
    position: relative;
    z-index: -1;
    transition: height ease 0.2s;
    border-radius: 5px;
    padding-right: 1px;
`;

export const Answer = styled.div`
    background-color: #f7f7f7;
    font-family: "Assistant", sans-serif;
    font-size: 18px;
    line-height: 30px;
    color: #000;
    padding: 20px;
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