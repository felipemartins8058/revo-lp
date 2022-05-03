import React, {useState, useEffect} from "react";
import * as Styled from "./styles";

const AccordionItem = ({faq, onToggle, active}) => {
  const {question, answer} = faq;

  return (
    <Styled.AccordionItem>
      <Styled.AccordionButton onClick={onToggle}>
        <div>
          {question}
        </div>
        <div>
          {active ? "  -" : "  +"}
        </div>   
      </Styled.AccordionButton>
      <Styled.AnswerWrapper isActive={active} >
        <Styled.Answer>
          {answer}
        </Styled.Answer>
      </Styled.AnswerWrapper>
    </Styled.AccordionItem>
  )
};

export default AccordionItem;