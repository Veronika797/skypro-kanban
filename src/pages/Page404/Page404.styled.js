import styled from "styled-components";

export const Container = styled.div`
  margin: 20px;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: 134px;
    font-weight: bold;
    text-decoration: none;
  }

  p {
    font-size: 34px;
    font-weight: 400;
  }

  a {
    font-size: 24px;
    text-decoration: underline;
  }
`;
