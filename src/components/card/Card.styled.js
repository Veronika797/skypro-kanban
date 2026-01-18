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

export const CardContainer = styled.div`
  flex: 0 0 auto;
  width: 220px;
  height: 140px;
  background-color: ${({ theme }) => theme.cardBg};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 15px;
  animation: ${cardAnimation} 500ms linear;
  color: ${({ theme }) => theme.text};
  border: ${({ theme }) => theme.border};

  &:hover {
    cursor: pointer;
  }
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

  &.orange {
    background-color: #f44336;
  }
  &.green {
    background-color: #4caf50;
  }
  &.purple {
    background-color: #9c27b0;
  }
  &.blue {
    background-color: #3f51b5;
  }
  &.pink {
    background-color: #e91e63;
  }
  &.yellow {
    background-color: #8d6e11;
  }
  &.gray {
    background-color: rgba(148, 166, 190, 1);
  }
`;

export const Text = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`;

export const Button = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  border: none;
  background: transparent;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.textSecondary};
  }
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 25px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
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
    color: ${({ theme }) => theme.textSecondary};
  }
`;

export const DateContainerText = styled.p`
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: ${({ theme }) => theme.textSecondary};
  letter-spacing: 0.2px;
`;
