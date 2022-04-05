import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as Styled from "./styles";

const Timeline = () => {
    return (
        <Styled.TimelineWrapper>
            <Styled.TimelineLine />
            <Styled.TimelineItem>
                <div></div>
                <Styled.ItemContainer marginLeft={10}>
                    <Styled.ItemTitle gradientDirection={"right"}>
                        <Styled.TimelinePoint left={-170} />
                        <Styled.TimelineConector left={-170} />
                        <Styled.ItemTitleText>Gestão</Styled.ItemTitleText>
                    </Styled.ItemTitle>
                    <Styled.ItemText>Nossa primeira atividade é a <strong>avaliação dos seus resultados atuais</strong>. Sem isso, nós nem começamos o projeto.</Styled.ItemText>
                </Styled.ItemContainer>
            </Styled.TimelineItem>
            <Styled.TimelineItem>
                <Styled.ItemContainer marginRight={10}>
                    <Styled.ItemTitle gradientDirection={"left"}>
                        <Styled.TimelinePoint left={446} />
                        <Styled.TimelineConector left={296} />
                        <Styled.ItemTitleText>Processo</Styled.ItemTitleText>
                    </Styled.ItemTitle>
                    <Styled.ItemText>Sabe aquela <strong>pedra no sapato</strong> que te faz ficar 14h por dia na operação? Nessa etapa, vamos abrir nossa caixa de ferramentas que vai <strong>tirar ela de você</strong>.</Styled.ItemText>
                </Styled.ItemContainer>
                <div></div>
            </Styled.TimelineItem>
            <Styled.TimelineItem>
                <div></div>
                <Styled.ItemContainer marginLeft={10}>
                    <Styled.ItemTitle gradientDirection={"right"}>
                        <Styled.TimelinePoint left={-170} />
                        <Styled.TimelineConector left={-170} />
                        <Styled.ItemTitleText>Vendas</Styled.ItemTitleText>
                    </Styled.ItemTitle>
                    <Styled.ItemText>Aqui, nós vamos te conduzir aos resultados de crescimento que geramos em todos os nossos projetos. <strong>Você será a referência do seu mercado</strong>.</Styled.ItemText>
                </Styled.ItemContainer>
            </Styled.TimelineItem>
            <Styled.TimelineEnd>
                <StaticImage src="../../images/sucesso.png" />
            </Styled.TimelineEnd>
        </Styled.TimelineWrapper>
    );
};

export default Timeline;
