import styled, { keyframes } from "styled-components";

const cardAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 1200px) {
    width: 230px;
  }
`;

export const CardContainer = styled.div`
  width: 220px;
  height: 140px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 15px;
  animation: ${cardAnimation} 500ms linear;
`;

export const Group = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Theme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
`;

export const Text = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`;

export const Button = styled.a`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94a6be;
  }
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 25px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #000000;
  opacity: 0.5;
`;

export const Content = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  justify-content: space-between;
`;

export const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 13px;
    color: #94a6be;
  }

  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94a6be;
    letter-spacing: 0.2px;
  }
`;
