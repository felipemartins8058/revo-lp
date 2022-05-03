import React from "react";
import ProvaSocial from "../ProvaSocial";
import * as Styled from "./styles";

const ProvaSocialSection = () => {
    return (
        <Styled.Section>
            <Styled.BlurCircle top={0} bottom={0} left={-60} right={0} rgb={"245, 56, 68"} width={1000} height={1000} />
            <Styled.Title>O resultado da <span>estratégia</span></Styled.Title>
            <ProvaSocial reverse={false} logoName={"odontoart"} infoBigText1={"100%"} infoSmallText1={"de Leads/dia"} infoBigText2={"34,02%"} infoSmallText2={"fechamento de novos clientes"} infoText={"Entrega de site de vendas"} />
            <ProvaSocial reverse={true} logoName={"jocross"} infoBigText1={"900%"} infoSmallText1={"no ROI"} infoBigText2={"R$ 1.100"} infoSmallText2={"faturados em uma semana, com investimento de apenas R$ 70,00"} infoText={"Entrega de site de vendas"} />
            <ProvaSocial reverse={false} logoName={"notustorres"} infoBigText1={"2619%"} infoSmallText1={"no ROI"} infoBigText2={"R$ 262.000"} infoSmallText2={"a mais de faturamento no período de 3 meses"} infoText={"R$ 9.000"} infoSmallText3={"investidos no projeto em 3 meses"} showIcon={true} />
        </Styled.Section>
    )
}

export default ProvaSocialSection