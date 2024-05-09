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
  OutputContainer,
} from "../styles/home.styled";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleReset = () => {
    setInputValue("");
    setOutputValue("");
  };

  const handleConvert = () => {
    if (!inputValue) return;
    const hebrew = isHebrew(inputValue);
    let value;
    if (hebrew) {
      value = convertToRTL(inputValue);
    } else {
      value = inputValue.split("");
    }
    setOutputValue(value);
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
            {!outputValue ? (
              <CustomButton color="green" onClick={handleConvert}>
                Convert to RTL
              </CustomButton>
            ) : (
              <CustomButton color="red" onClick={handleReset}>
                Clear
              </CustomButton>
            )}
            {outputValue && (
              <OutputContainer>
                {outputValue.map((char) => (
                  <div>{char}</div>
                ))}
              </OutputContainer>
            )}
          </InnerContainer>
        </ContentSection>
      </OuterContainer>
    </>
  );
};

export default Home;
