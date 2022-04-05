import React from "react";
import HeroSection from "./HeroSection";
import VideoSection from "./VideoSection";
import ProvaSocialSection from "./ProvaSocialSection";
import MetodoSection from "./MetodoSection";
import OfertaSection from "./OfertaSection";
import * as Styled from "./styles";

const Layout = () => {
    
    return (
        <Styled.siteContainer>
            <Styled.backgroudGrid>
                <Styled.backgroudLine></Styled.backgroudLine>
                <Styled.backgroudLine></Styled.backgroudLine>
                <Styled.backgroudLine></Styled.backgroudLine>
                <Styled.backgroudLine></Styled.backgroudLine>
                <Styled.backgroudLine></Styled.backgroudLine>
                <Styled.backgroudLine></Styled.backgroudLine>
                <Styled.backgroudLine></Styled.backgroudLine>
                <Styled.backgroudLine></Styled.backgroudLine>
            </Styled.backgroudGrid>

            <HeroSection/>
            <ProvaSocialSection/>
            <MetodoSection/>
            <OfertaSection/>
        </Styled.siteContainer>
    );
};
export default Layout;
