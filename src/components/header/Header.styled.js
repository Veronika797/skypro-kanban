import styled from "styled-components";

export const Block = styled.div`
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
  background-color: ${({ theme }) => theme.cardBg};
  border-bottom: ${({ theme }) => theme.border};

  @media screen and (max-width: 376px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const Container = styled.div`
  width: 100%;
`;
export const Content = styled.div`
  position: relative;
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

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
 width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.buttonPrimaryBg};
  color: ${({ theme }) => theme.whiteText};
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

    @media  (max-width: 376px) {
      position: fixed;
      width: 343px;
      height: 40px;
      opacity: 1;
      top: 786px;
      left: 16px;
      padding-top: 10px;
      padding-right: 14px;
      padding-bottom: 10px;
      padding-left: 14px;
    }
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

  @media screen and (max-width: 376px) {
    z-index: 2;
    width: 343px;
    height: 40px;
    top: 93%;
    left: 16px;
    opacity: 1;
    border-radius: 4px;
    padding-top: 10px;
    padding-right: 14px;
    padding-bottom: 10px;
    padding-left: 14px;
    position: fixed;
  }
`;

export const User = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  gap: 5px;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.buttonPrimaryText};
  text-decoration: none;

  &::after {
    content: "";
    display: block;
    width: 6.5px;
    height: 7px;
    border-radius: 1px;
    border-left: 1.9px solid ${({ theme }) => theme.buttonPrimaryText};
    border-bottom: 1.9px solid ${({ theme }) => theme.buttonPrimaryText};
    transform: rotate(-45deg);
    padding: 0;
  }

  &:hover {
    color: #33399b;
    cursor: pointer;
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
  border: ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.cardBg};
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 22px;
  text-align: start;
  z-index: 2;
`;
export const CloseButton = styled.a`
  color: ${({ theme }) => theme.text};
  position: relative;
  font-size: 20px;
  left: 100%;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;
export const UserName = styled.p`
  display: flex;
  justify-content: flex-start;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;
export const UserMail = styled.p`
  color: ${({ theme }) => theme.textSecondary};
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
  color: ${({ theme }) => theme.text};
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
    background-color: ${({ theme }) => theme.calendarCellActive};
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
  color: ${({ theme }) => theme.buttonPrimaryText};
  border-radius: 4px;
  border: ${({ theme }) => theme.borderBg};
`;

export const ButtonLink = styled.span`
  color: ${({ theme }) => theme.buttonPrimaryText};
`;
