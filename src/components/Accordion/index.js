import React from "react";
import { faqs } from "./data";
import AccordionItem from "./AccordionItem";
import * as Styled from "./styles";

const Accordion = () => {
    const [clicked, setClicked] = React.useState("0");

    const handleToggle = (index) => {
        if (clicked === index) {
            return setClicked("0");
        }
        setClicked(index);
    };

    return (
        <Styled.Section>
            <Styled.Title>
                FA<span>Q</span>
            </Styled.Title>
            <Styled.AccordionWrapper>
                {faqs.map((faq, index) => (
                    <AccordionItem onToggle={() => handleToggle(index)} active={clicked === index} key={index} faq={faq} />
                ))}
            </Styled.AccordionWrapper>
        </Styled.Section>
    );
};

export default Accordion;
