import styled from "styled-components";

export const Background = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.bodyBg};
  border: 0.7px solid rgba(212, 219, 229, 1);
  border-radius: 10px;
`;

export const ModalWindow = styled.div`
  width: 368px;
  background: ${({ theme }) => theme.cardBg};
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  border: ${({ theme }) => theme.border};
  border-radius: 10px;
`;

export const WindowModal = styled.div`
  margin: 50px 60px;
  width: 248px;
`;

export const Title = styled.h2`
  font-family: Roboto;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

export const FormModal = styled.form`
  display: flex;
  gap: 7px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  width: 248px;
  height: 67px;
  display: flex;
  gap: 7px;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: column;
`;

export const AuthInput = styled.input`
  width: 248px;
  height: 30px;
  border-radius: 8px;
  padding: 8px 10px;
  border: ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.inputBg};
`;

export const InputPassword = styled.input`
  width: 248px;
  height: 30px;
  border-radius: 8px;
  padding: 8px 10px;
  border: ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.inputBg};
`;

export const ButtonEnter = styled.button`
  color: #fff;
  background: ${({ theme }) => theme.buttonPrimaryBg};
  width: 248px;
  height: 30px;
  border: 1px solid ${({ theme }) => theme.buttonPrimaryBg};
  border-radius: 4px;
  padding: 8px 10px;
`;

export const FormGroup = styled.div`
  text-align: center;

  p {
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: ${({ theme }) => theme.textSecondary};
  }

  a {
    color: ${({ theme }) => theme.textSecondary};
    text-decoration: underline;
  }
`;
