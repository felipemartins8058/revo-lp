import styled from "styled-components";

export const siteContainer = styled.div`
    position: relative;
    max-width: 1302px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
`

export const backgroudGrid = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    max-width: 1302;
    display: flex;
    justify-content: space-between;
    opacity: 0.5;
`

export const backgroudLine = styled.div`
    position: relative;
    width: 1px;
    background-color: rgba(255, 255, 255, 0.1);
`