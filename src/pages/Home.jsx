import React, { useState } from "react";
import { isHebrew, convertToRTL } from "../utils/common";
import {
  ContentSection,
  CustomInput,
  InnerContainer,
  OuterContainer,
  Title,
  TitleBar,
  CustomButton,
} from "../styles/home.styled";

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  const handleReset = () => {
    setInputValue("");
  };

  const handleConvert = () => {
    const hebrew = isHebrew(inputValue);
    if (hebrew) {
      console.log(convertToRTL(inputValue));
    } else {
      console.log(inputValue.split(""));
    }
  };

  return (
    <>
      <OuterContainer>
        <TitleBar>
          <Title>Hebrew LTR to RTL</Title>
        </TitleBar>
        <ContentSection>
          <InnerContainer>
            <CustomInput
              type="text"
              value={inputValue}
              placeholder="Enter Text Here"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <CustomButton color="red" onClick={handleConvert}>
              Convert to RTL
            </CustomButton>
            <CustomButton color="red" onClick={handleReset}>
              Reset
            </CustomButton>
            <div id="output-value" className="output-value">
              Your result
            </div>
            <div>
              Is Hebrew? <span id="is-hebrew">N/A</span>
            </div>
          </InnerContainer>
        </ContentSection>
      </OuterContainer>
    </>
  );
};

export default Home;
