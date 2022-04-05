import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Oferta from "../Oferta";
import * as Styled from "./styles";

const OfertaSection = () => {
    return (
        <Styled.Section>
            <Styled.BlurCircle top={-10} left={-15} rgb="198, 43, 40" width={750} height={750} />
            <div>
                <StaticImage src="../../images/nelson_oferta.png" width="1500" quality="100"/>
            </div>
            <div>
                <Styled.Title>
                    <span>Tecnologia Digital</span>, Crescimento e Automação
                </Styled.Title>
                <Styled.Subtitle marginBottom={2}>Unimos o método que irá transformar os resultados do seu negócio.</Styled.Subtitle>
                <Oferta/>
                <Styled.Safety>
                    <StaticImage src="../../images/safety_icon.png"/>
                    <p>Unimos o método que irá transformar os resultados do seu negócio.</p>
                </Styled.Safety>
            </div>
        </Styled.Section>
    );
};

export default OfertaSection;
