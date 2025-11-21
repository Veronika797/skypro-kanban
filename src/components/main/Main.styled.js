import styled from "styled-components";

export const MainContent = styled.div`
  width: 100%;
`;
export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 495px) {
    width: 100%;
    padding: 0 16px;
  }
`;
export const Block = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;
export const Content = styled.div`
  width: 100%;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

export const Columns = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;
