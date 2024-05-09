import styled from "styled-components";

export const OuterContainer = styled.div``;

export const TitleBar = styled.div`
  background-color: red;
  font-size: 30px;
  text-align: center;
  padding: 1rem;
`;

export const Title = styled.div`
  color: white;
`;

export const ContentSection = styled.div`
  background-color: aliceblue;
  height: calc(100vh - 73px);
  display: flex;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  width: 60%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 3rem;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const CustomInput = styled.input`
  width: 100%;
  height: 80px;
  font-size: 30px;
  border: none;
  background-color: antiquewhite;
  border-radius: 1rem;
  outline: none;
  text-align: center;
`;

export const CustomButton = styled.button`
  height: 50px;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  border: none;
  cursor: pointer;
  background-color: ${({ color }) => color};
  color: white;
  border-radius: 0.5rem;
  font-size: 20px;

  &:hover {
    opacity: 0.9;
  }
`;
