import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import BotaoCta from "../BotaoCta"
import * as Styled from "./styles"

const HeroSection = () => {
    return(
        <Styled.Section>
            <Styled.BlurCircle top={-69} left={-37} width={900} height={900} />
            <div>
                <Styled.HeroLogo>
                    <StaticImage src="../../images/revo_logo.png" quality={100}/>
                </Styled.HeroLogo>
                <Styled.Title>Enriqueça de uma vez por todas, ou <span>destrua o seu negócio com suas desculpas</span></Styled.Title>
                <Styled.Subtile marginBottom={1}>Sua estratégia de crescimento está errada, e eu vou te mostrar o porquê.</Styled.Subtile>
                <Styled.Subtile marginBottom={3.75}>E mais: enquanto você estiver na operação, o seu negócio NÃO vai crescer.</Styled.Subtile>
                <BotaoCta/>
            </div>
            <Styled.HeroImage>
                <StaticImage src="../../images/nelson_hero.png" />
            </Styled.HeroImage>
            <Styled.ArrowDown>
                <StaticImage src="../../images/arrow_red.png" />
            </Styled.ArrowDown>
        </Styled.Section>
    )
}

export default HeroSection