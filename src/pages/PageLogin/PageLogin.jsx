import { Link, useNavigate } from "react-router";
import {
  AuthInput,
  Background,
  ButtonEnter,
  FormGroup,
  FormModal,
  InputPassword,
  InputWrapper,
  Title,
  WindowModal,
} from "./PageLogin.styled";
import { ModalWindow } from "../PageReg/PageReg.styled";

function PageLogin({ setIsAuth }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);

    localStorage.setItem("isAuth", "true");

    navigate("/");
  };

  return (
    <Background>
      <ModalWindow>
        <WindowModal>
          <Title>Вход</Title>
          <FormModal id="form" onSubmit={handleLogin}>
            <InputWrapper>
              <AuthInput type="text" id="formlogin" placeholder="Эл. почта" />
              <InputPassword
                type="password"
                id="formpassword"
                placeholder="Пароль"
              />
            </InputWrapper>
            <ButtonEnter type="submit">Войти</ButtonEnter>
            <FormGroup>
              <p>
                Нужно зарегистрироваться?{" "}
                <Link to="/register">Регистрируйтесь здесь</Link>
              </p>
            </FormGroup>
          </FormModal>
        </WindowModal>
      </ModalWindow>
    </Background>
  );
}

export default PageLogin;
