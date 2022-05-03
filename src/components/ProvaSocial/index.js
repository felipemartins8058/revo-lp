import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as Styled from "./styles";

const ProvaSocial = ({ reverse, logoName, infoBigText1, infoBigText2, infoSmallText1, infoSmallText2, infoText, infoSmallText3, showIcon}) => {

    function StaticImageLogo(logoName) {
        if (logoName === "odontoart") {
            return <StaticImage src="../../images/odontoart.png" />
        } else if (logoName === "notustorres") {
            return <StaticImage src="../../images/jocross.png" />
        } else {
            return <StaticImage src="../../images/brisanet.png" />
        }
    }

    function ProvaSocialNormal() {
        return (
            <Styled.Wrapper>
                <Styled.GridWrapper gridColumns={"1fr 11fr"}>
                    <Styled.BlurFrameRound left={0}>
                        {StaticImageLogo(logoName)}
                    </Styled.BlurFrameRound>
                    <Styled.OffsetGrid />
                    <Styled.BoxContent paddingLeft={7} paddingRight={2}>
                        <Styled.BlurCircle top={-200} left={-5} topMobile={-50} leftMobile={0} rgb={"245, 56, 68"} width={614} height={614} />
                        <Styled.BlurCircle top={30} left={50} topMobile={25} leftMobile={-55} rgb={"245, 56, 68"} width={323} height={323} />
                        <Styled.BlurCircle top={-190} left={60} topMobile={10} leftMobile={-20} rgb={"66, 55, 143"} width={614} height={614} />
                        <Styled.BlurBackgroud />
                        <Styled.InfoBox>
                            <div>
                                <StaticImage src="../../images/arrow_yellow.png" />
                            </div>
                            <div>
                                <Styled.BigText>{infoBigText1}</Styled.BigText>
                                <Styled.SmallText>{infoSmallText1}</Styled.SmallText>
                            </div>
                        </Styled.InfoBox>
                        <Styled.InfoBox>
                            <div>
                                <StaticImage src="../../images/arrow_yellow.png" />
                            </div>
                            <div>
                                <Styled.BigText>{infoBigText2}</Styled.BigText>
                                <Styled.SmallText>{infoSmallText2}</Styled.SmallText>
                            </div>
                        </Styled.InfoBox>
                        <Styled.InfoBox>
                            <Styled.Visibility visibility={showIcon}>
                                <StaticImage src="../../images/plus_yellow.png" />
                            </Styled.Visibility>
                            <div>
                                <Styled.Text>{infoText}</Styled.Text>
                                <Styled.SmallText>{infoSmallText3}</Styled.SmallText>
                            </div>
                        </Styled.InfoBox>
                    </Styled.BoxContent>
                </Styled.GridWrapper>
            </Styled.Wrapper>
        );
    }

    function ProvaSocialReverse() {
        return (
            <Styled.Wrapper>
                <Styled.GridWrapper gridColumns={"11fr 1fr"}>
                    <Styled.BlurFrameRound right={0}>
                        {StaticImageLogo(logoName)}
                    </Styled.BlurFrameRound>
                    <Styled.BoxContent paddingLeft={2} paddingRight={7}>
                        <Styled.BlurCircle top={-200} left={-5} topMobile={-50} leftMobile={0} rgb={"66, 55, 143"} width={614} height={614} />
                        <Styled.BlurCircle top={30} left={50} topMobile={25} leftMobile={-55} rgb={"245, 56, 68"} width={323} height={323} />
                        <Styled.BlurCircle top={-190} left={60} topMobile={10} leftMobile={-20} rgb={"245, 56, 68"} width={614} height={614} />
                        <Styled.BlurBackgroud />
                        <Styled.InfoBox>
                            <div>
                                <StaticImage src="../../images/arrow_yellow.png" />
                            </div>
                            <div>
                                <Styled.BigText>{infoBigText1}</Styled.BigText>
                                <Styled.SmallText>{infoSmallText1}</Styled.SmallText>
                            </div>
                        </Styled.InfoBox>
                        <Styled.InfoBox>
                            <div>
                                <StaticImage src="../../images/arrow_yellow.png" />
                            </div>
                            <div>
                                <Styled.BigText>{infoBigText2}</Styled.BigText>
                                <Styled.SmallText>{infoSmallText2}</Styled.SmallText>
                            </div>
                        </Styled.InfoBox>
                        <Styled.InfoBox>
                            <div>
                                <StaticImage src="../../images/plus_yellow.png" />
                            </div>
                            <div>
                                <Styled.Text>{infoText}</Styled.Text>
                            </div>
                        </Styled.InfoBox>
                    </Styled.BoxContent>
                    <Styled.OffsetGrid />
                </Styled.GridWrapper>
            </Styled.Wrapper>
        );
    }

    if (reverse === true) {
        return <ProvaSocialReverse />;
    } else {
        return <ProvaSocialNormal />;
    }
};

export default ProvaSocial;
