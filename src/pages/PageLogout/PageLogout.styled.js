import styled from "styled-components";

export const PopExit = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
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
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
 border: ${({ theme }) => theme.border};
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
}
`;

export const Title = styled.div`
  p {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.text};
  }
`;

export const FormExit = styled.form`
  width: 250px;
  height: 30px;
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonYes = styled.button`
  width: 153px;
  height: 30px;
  background-color: ${({ theme }) => theme.buttonPrimaryBg};
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: ${({ theme }) => theme.buttonPrimaryText};
  margin-right: 10px;

  a {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.buttonPrimaryText};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonNo = styled.button`
  width: 153px;
  height: 30px;
  background-color: ${({ theme }) => theme.buttonSecondaryBg};
  border-radius: 4px;
  border: ${({ theme }) => theme.buttonSecondaryBorder};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: ${({ theme }) => theme.buttonSecondaryText};

  a {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.buttonSecondaryText};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
