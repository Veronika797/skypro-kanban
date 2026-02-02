import styled from "styled-components";

export const MainContent = styled.div`
  width: 100%;
  overflow: scroll;
  scroll-behavior: smooth;
  background-color: ${({ theme }) => theme.bodyBg};
`;

export const Container = styled.div`
  width: 100%;
  height: 1078px;
`;

export const Block = styled.div`
  width: 100%;
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);

  @media screen and (max-width: 376px) {
    padding-left: 16px;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding-top: 32px;

  @media (max-width: 376px) {
    height: 710px;
    padding-top: 16px;
  }
`;

export const ColumnsContent = styled.div`
  display: flex;
  gap: 25px;

  @media screen and (max-width: 376px) {
    max-height: 810px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-bottom: 30px;
  }
`;
