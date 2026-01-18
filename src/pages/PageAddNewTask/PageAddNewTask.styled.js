import styled from "styled-components";

export const PopNewCard = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

export const Block = styled.div`
  display: block;
  margin: 20 auto;
  background-color: ${({ theme }) => theme.cardBg};
  max-width: 630px;
  width: 100%;
  border-radius: 10px;
  border: ${({ theme }) => theme.border};
  position: relative;

  @media (max-width: 480px) {
    position: absolute;
    top: 70px;
    margin: 10px auto;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const Content = styled.div`
  text-align: left;
  padding: 40px 30px;
  color: ${({ theme }) => theme.text};

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 20px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  color: ${({ theme }) => theme.textSecondary};
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.text};
  }

  @media (max-width: 480px) {
    top: 12px;
    right: 12px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 50%;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const FormWrap = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    gap: 16px;
  }
`;

export const FormTask = styled.div`
  display: flex;
  gap: 21px;

  @media (max-width: 480px) {
    width: 100%;
    flex-direction: column;
    gap: 16px;
  }
`;
export const TaskNameAndDescr = styled.div`
  width: 370px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const FormBlock = styled.div`
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  margin-bottom: 16px;

  p {
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 15px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  background: ${({ theme }) => theme.inputBg};
  border: ${({ theme }) => theme.border};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  transition: border 0.3s ease;

  &:focus {
    border: 1px solid ${({ theme }) => theme.buttonPrimaryBg};
    outline: none;
    box-shadow: 0 0 0 2px rgba(86, 94, 239, 0.2);
  }

  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.14px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 16px;
    min-height: 48px;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 14px;
  background: ${({ theme }) => theme.inputBg};
  border: ${({ theme }) => theme.border};
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  resize: vertical;
  transition: border 0.3s ease;

  &:focus {
    border: 1px solid ${({ theme }) => theme.buttonPrimaryBg};
    outline: none;
    box-shadow: 0 0 0 2px rgba(86, 94, 239, 0.2);
  }

  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.14px;
  }

  @media (max-width: 480px) {
    height: 140px;
    font-size: 16px;
    padding: 16px;
    min-height: 120px;
  }
`;

export const CreateButton = styled.button`
  width: 132px;
  height: 30px;
  background-color: ${({ theme }) => theme.buttonPrimaryBg};
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: ${({ theme }) => theme.whiteText};
  float: right;
  transition:
    background 0.3s,
    transform 0.1s;

  &:hover {
    background-color: #4a52d0;
  }

  &:active {
    transform: scale(0.98);
  }

  @media (max-width: 480px) {
    width: 100%;
    height: 48px;
    font-size: 16px;
    font-weight: 500;
    align-self: center;
    margin-top: 10px;
  }
`;

export const CategoriesContainer = styled.div`
  width: 100%;
  margin-top: 20px;

  @media (max-width: 480px) {
    margin-top: 16px;
  }
`;

export const CategoriesTitle = styled.p`
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  margin-top: 14px;
  margin-bottom: 15px;
`;
export const ButtonForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const CategoriesThemes = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 7px;

  @media (max-width: 480px) {
    gap: 6px;
    justify-content: center;
  }
`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  cursor: pointer;

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

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
    margin: 0;
  }

  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 13px;
    min-width: 64px;
  }
`;
