import React from "react";
import BotaoCta from "../BotaoCta"
import * as Styled from "./styles";

const Oferta = () => {
    return (
        <Styled.OfertaWrapper>
            <Styled.OfertaBorder />
            <Styled.OfertaContent>
                <Styled.BlurCircle top={-80} left={-20} bottom={0} right={0} rgb="198, 43, 40" width={600} height={451} />
                <Styled.BlurCircle top={-160} left={50} bottom={0} right={0} rgb="66, 55, 143" width={600} height={600} />
                <Styled.BlurCircle top={10} left={30} bottom={0} right={0} rgb="66, 55, 143" width={600} height={600} />
                <Styled.BlurBackgroud />
                <Styled.ContentGrid>
                    <div>
                        <Styled.Text marginBottom={.5}>Entrada +</Styled.Text>
                        <Styled.BigText marginBottom={.5}>2x de R$599,00</Styled.BigText>
                        <Styled.SmallText marginBottom={.5}>ou Entrada + R$997,00</Styled.SmallText>
                    </div>
                    <Styled.AlignCenter>
                        <Styled.SmallText marginBottom={.5}>Oferta especial! Acaba em:</Styled.SmallText>
                        <Styled.Text marginBottom={1.2}>10h 16min 17s</Styled.Text>
                        <BotaoCta/>
                    </Styled.AlignCenter>
                </Styled.ContentGrid>
            </Styled.OfertaContent>
        </Styled.OfertaWrapper>
    );
};

export default Oferta;
