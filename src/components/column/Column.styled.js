import styled from "styled-components";

export const Col = styled.div`
  display: block;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const Name = styled.div`
  display: flex;
  padding: 0 10px;
  margin: 15px 0;

  p {
    color: ${({ theme }) => theme.textSecondary};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;

    @media screen and (max-width: 1200px) {
      color: ${({ theme }) => theme.textSecondary};
      font-size: 14px;
      font-weight: 600;
      line-height: 1;
      text-transform: uppercase;
    }
  }

  @media screen and (max-width: 1267px) {
    display: flex;
    padding: 0 10px;
    margin: 15px 0;
  }
`;

export const Crds = styled.div`
  display: flex;
  overflow: auto;
  white-space: nowrap;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 1255px) {
    flex-direction: row;
    gap: 10px;
  }
`;
