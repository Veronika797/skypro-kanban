import { Link, useNavigate } from "react-router";
import {
  AuthInput,
  Background,
  ButtonEnter,
  FormGroup,
  FormModal,
  InputPassword,
  InputWrapper,
  ModalWindow,
  Title,
  WindowModal,
} from "./PageReg.styled";

function PageReg({ setIsAuth }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
  };

  return (
    <Background>
      <ModalWindow>
        <WindowModal>
          <Title>Регистрация</Title>
          <FormModal id="form" onSubmit={handleLogin}>
            <InputWrapper>
              <AuthInput
                type="text"
                name="name"
                id="formname"
                placeholder="Имя"
              />
              <AuthInput
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <InputPassword
                type="input-password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
            </InputWrapper>
            <ButtonEnter type="submit">Зарегистрироваться</ButtonEnter>
            <FormGroup>
              <p>
                Уже есть аккаунт?
                <Link to="/login">Войдите здесь</Link>
              </p>
            </FormGroup>
          </FormModal>
        </WindowModal>
      </ModalWindow>
    </Background>
  );
}

export default PageReg;
