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

export const themeColors = {
  _orange: {
    backgroundColor: "#ffe4c2",
    color: "#ff6d00",
  },
  _pink: {
    backgroundColor: "#fbafe4",
    color: "#f432e4",
  },
  _yellow: {
    backgroundColor: "#fbfb0e",
    color: "#9ea303",
  },
  _green: {
    backgroundColor: "#b4fdd1",
    color: "#06b16e",
  },
  _purple: {
    backgroundColor: "#e9d4ff",
    color: "#9a48f1",
  },
  _blue: {
    backgroundColor: "#7dc1f8",
    color: "#0072cb",
  },
  _darkGreen: {
    backgroundColor: "#18b51e",
    color: "#fff",
  },
};

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

  ${({ theme }) =>
    theme && themeColors[theme]
      ? `
  background-color: ${themeColors[theme].backgroundColor};
  color: ${themeColors[theme].color};
  `
      : `
    background-color: #ffffff;
    color: #000000;
  `}
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
`;

export const DateContainerText = styled.p`
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: #94a6be;
  letter-spacing: 0.2px;
`;
