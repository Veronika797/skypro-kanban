import styled from "styled-components";

export const Col = styled.div`
  margin: 0 auto;
  display: block;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`;

export const Name = styled.div`
  display: flex;
  padding: 0 10px;
  margin: 15px 0;

  p {
    color: #94a6be;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;

    @media screen and (max-width: 1200px) {
      color: #94a6be;
      font-size: 14px;
      font-weight: 600;
      line-height: 1;
      text-transform: uppercase;
    }
  }

  @media screen and (max-width: 1200px) {
    display: flex;
    padding: 0 10px;
    margin: 15px 0;
  }
`;

export const Crds = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }
`;
