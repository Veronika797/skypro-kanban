import styled from "styled-components";

export const PopNewCard = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const Container = styled.div`
  width: 100%;
  // height: 100%;
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
  background-color: #ffffff;
  max-width: 630px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

export const Content = styled.div`
  text-align: left;
  padding: 40px 30px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: #000000;
  }
`;

export const Wrap = styled.div`
  display: flex;
`;

export const FormWrap = styled.form`
  margin-bottom: 20px;
`;

export const FormTask = styled.div`
  display: flex;
  gap: 21px;
`;
export const TaskNameAndDescr = styled.div`
  width: 370px;
`;

export const FormBlock = styled.div`
  display: flex;
  padding-top: 20px;
  flex-direction: column;

  p {
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 15px;
  }
`;

export const Input = styled.input`
  width: 370px;
  margin-top: 20px;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;

  &::placeholder {
    color: #94a6be;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.14px;
  }
`;

export const Textarea = styled.textarea`
  height: 200px;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;

  &::placeholder {
    color: #94a6be;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.14px;
  }
`;

export const CreateButton = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;
`;

export const CategoriesContainer = styled.div`
  width: 570px;
  margin-top: 20px;
`;

export const CategoriesTitle = styled.p`
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  margin-top: 14px;
  margin-bottom: 15px;
`;
export const ButtonForm = styled.div`
  width: 570px;
`;

export const CategoriesThemes = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 7px;
`;

export const CategoriesTheme = styled.div`
  display: inline-block;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  cursor: pointer;

  &.orange {
    background-color: #ffe4c2;
  }

  &.green {
    background-color: #b4fdd1;
  }

  &.purple {
    background-color: #e9d4ff;
  }

  &.blue {
    background-color: #7dc1f8;
  }

  &.pink {
    background-color: #fbafe4;
  }

  &.yellow {
    background-color: #fbfb0e;
  }

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
    margin: 0;
  }
`;
