import styled from "styled-components";

export const Block = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 495px) {
    width: 100%;
    padding: 0 16px;
  }
`;
export const Content = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;
export const Logo = styled.div`
  img {
    width: 85px;
  }
`;
export const Nav = styled.div` {
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TaskAndName = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Button = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  border: none;
  color: #fff;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  @media screen and (max-width: 495px) {
    z-index: 3;
    position: static;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: 160px;
    border-radius: 4px;
    margin-right: 0;
  }
`;

export const User = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: #565eef;
  text-decoration: none;

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565eef;
    border-bottom: 1.9px solid #565eef;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }

  &:hover {
    color: #33399b;
    cursor: pointer;

    &::after {
      border-left-color: #33399b;
      border-bottom-color: #33399b;
    }
  }
`;

export const SetUser = styled.div`
  display: none;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #fff;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 22px;
  text-align: start;
  z-index: 2;
`;
export const CloseButton = styled.a`
  color: #000;
  position: relative;
  font-size: 20px;
  left: 100%;
  text-decoration: none;

  &:hover {
    color: #33399b;
    cursor: pointer;
  }
`;
export const UserName = styled.p`
  display: flex;
  justify-content: center;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;
export const UserMail = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;
export const ThemeSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;
export const ThemeTitle = styled.p`
  color: #000;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
`;

export const ThemeCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: #eaeef6;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #94a6be;
    transition: 0.5s;
  }

  &:checked[type="checkbox"]::before {
    left: 12px;
  }
`;

export const PopUserButton = styled.div`
  display: flex;
  justify-content: center;
`;
export const ButtonStyled = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: rgba(86, 94, 239, 1);
  border-radius: 4px;
  border: 1px solid;
`;

export const ButtonLink = styled.span`
  color: #565eef;
`;
