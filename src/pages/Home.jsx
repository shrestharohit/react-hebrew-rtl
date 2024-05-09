import React from "react";

const OuterContainer = styled.div``;

const Home = () => {
  return (
    <>
      <OuterContainer>
        <header>
          <h1>Hebrew LTR to RTL</h1>
        </header>
        <content>
          <input id="input-value" type="text" placeholder="Enter Text Here" />
          <button onclick="calculateSum()">Convert to RTL</button>
          <div id="output-value" class="output-value">
            Your result
          </div>
          <div>
            Is Hebrew? <span id="is-hebrew">N/A</span>
          </div>
        </content>
      </OuterContainer>
    </>
  );
};

export default Home;
