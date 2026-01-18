import styled from "styled-components";

export const MainContent = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
`;

export const Block = styled.div`
  width: 100%;
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);

  @media (min-width: 1094px) and (max-width: 1255px) {
    padding-left: calc(50% - 493px);
  }

  @media (min-width: 850px) and (max-width: 1093px) {
    padding-left: calc(50% - 400px);
  }

  @media (min-width: 426px) and (max-width: 849px) {
    padding-left: 24px;
  }

  @media screen and (max-width: 425px) {
    padding-left: 16px;
  }
`;

export const Content = styled.div`
  width: 100%;

  @media screen and (max-width: 1200px) {
    display: block;
  }

  @media (min-width: 320px) and (max-width: 502px) {
    height: 710px;
  }
`;

export const ColumnsContent = styled.div`
  display: flex;
  gap: 25px;

  @media screen and (max-width: 1267px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
  }
`;
