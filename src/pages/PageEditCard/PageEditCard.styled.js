import styled from "styled-components";

const colors = {
  primary: "rgba(86, 94, 239, 1)",
  secondary: "#fff",
};

const background = {
  primary: "#fff",
  secondary: "rgba(86, 94, 239, 1)",
};

export const PopBrowse = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 7;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const Block = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.cardBg};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: ${({ theme }) => theme.border};
  position: relative;

  @media screen and (max-width: 480px) {
    position: absolute;
    top: 70px;
  }
`;

export const Content = styled.div`
  display: block;
  text-align: left;
  color: ${({ theme }) => theme.text};
`;

export const TopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;

  Theme {
    opacity: 1;
  }
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const Theme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;

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

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

export const Status = styled.div`
  margin-bottom: 11px;
`;

export const StatusText = styled.p`
  margin-bottom: 14px;
  color: ${({ theme }) => theme.text};
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

export const StatusTheme = styled.div`
  display: inline-block;
  padding: 8px 10px;
  border-radius: 24px;
  margin-right: 7px;
  cursor: pointer;
  background-color: transparent;
  border: ${({ theme }) => theme.border};

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
    margin: 0;
    color: ${({ theme }) => theme.textSecondary};
  }

  &._active-category {
    background: ${({ theme }) => theme.textSecondary};
    color: #fff;
    border: 1px solid ${({ theme }) => theme.textSecondary};

    p {
      font-family: Roboto;
      font-weight: 400;
      font-size: 14px;
      line-height: 10px;
      text-align: center;
      color: rgba(255, 255, 255, 1);
    }
  }
`;

export const FormWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FormContent = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Textarea = styled.textarea`
  max-width: 370px;
  outline: none;
  padding: 14px;
  background: ${({ theme }) => theme.inputBg};
  border: ${({ theme }) => theme.border};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.textSecondary};
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 480px) {
    height: 37px;
  }
`;
export const CategoriesContainer = styled.div`
  margin-bottom: 20px;
`;

export const CategoriesTitle = styled.p`
  margin-bottom: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  color: ${({ theme }) => theme.text};
`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  opacity: 1;
  background: #ffe4c2;
  padding: 8px 20px;
  border-radius: 24px;
  color: #ff6d00;
`;

export const CategoriesThemesWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 6px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (max-width: 480px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const PrimaryButton = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  background-color: ${({ theme }) => theme.buttonSecondaryBg};
  border: ${({ theme }) => theme.borderBg};
  color: ${({ theme }) => theme.buttonPrimaryText};
  border-radius: 5px;
  cursor: pointer;

  span {
    font-family: Roboto;
    font-weight: 500;
    font-size: 14px;
    line-height: 10px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 48px;
    font-size: 16px;
    font-weight: 500;
    align-self: center;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;

export const SecondaryButton = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  background-color: ${({ theme }) => theme.buttonPrimaryBg};
  border: none;
  color: ${({ theme }) => theme.whiteText};
  border-radius: 5px;
  cursor: pointer;

  span {
    font-family: Roboto;
    font-weight: 500;
    font-size: 14px;
    line-height: 10px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    height: 48px;
    font-size: 16px;
    font-weight: 500;
    align-self: center;
    margin-top: 10px;
  }
`;
