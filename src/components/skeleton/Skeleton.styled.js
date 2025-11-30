import styled from "styled-components";

export const Cards = styled.div`
  // padding: 10px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  width: 270px;
  height: 159px;
  border-radius: 24px;
  border-width: 1px;
  padding: 20px;
  background-color: rgba(217, 217, 217, 1);
  border: 1px solid rgba(16, 16, 16, 1);
`;

export const Group = styled.div`
  width: 230px;
  height: 30px;
  border-radius: 50px;
  margin-bottom: 12px;
  background: rgba(177, 177, 177, 1);
`;

export const Content = styled.div`
  width: 164px;
  border-radius: 50px;
  background: rgba(177, 177, 177, 1);
`;

export const Date = styled.div`
  width: 81px;
  height: 15px;
  gap: 10px;
  border-radius: 50px;
  background-color: rgba(177, 177, 177, 1);
`;
