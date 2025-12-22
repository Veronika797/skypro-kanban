import styled from "styled-components";

export const MainContent = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  padding: 0 30px;
`;
export const Container = styled.div`
  width: 100%;
`;
export const Block = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    padding: 30px 0;
  }
`;
export const Content = styled.div`
  width: 100%;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

export const ColumnsContent = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
  }
`;
