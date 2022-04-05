import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Timeline from "../Timeline";
import * as Styled from "./styles";

const MetodoSection = () => {
    return(
        <Styled.Section>
            <Styled.PositionIcon top={10} left={10} topMobile={10} leftMobile={80}>
                <StaticImage src="../../images/rocket_icon.png" alt="rocket icon" />
            </Styled.PositionIcon>
            <Styled.PositionIcon top={34} left={80} topMobile={50} leftMobile={50}>
                <StaticImage src="../../images/gear_icon.png" alt="rocket icon" />
            </Styled.PositionIcon>
            <Styled.PositionIcon top={65} left={26} topMobile={80} leftMobile={50}>
                <StaticImage src="../../images/graph_icon.png" alt="rocket icon" />
            </Styled.PositionIcon>
            <Styled.BlurCircle top={-20} left={-20} rgb="66, 55, 143" width={900} height={900} />
            <Styled.BlurCircle bottom={20} right={-30} rgb="198, 43, 40" width={900} height={900} />
            <Styled.Title>Como <span>hackear o mercado,</span> se organizar e melhorar</Styled.Title>
            <Timeline />
        </Styled.Section>
    )
}

export default MetodoSection