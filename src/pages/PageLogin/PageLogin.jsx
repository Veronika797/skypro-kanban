import { Link, Navigate, useNavigate } from "react-router";
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
  ModalWindow,
} from "./PageLogin.styled";
import { useContext, useState } from "react";
import { login as apiLogin } from "../../services/auth";
import { AuthContext } from "../../context/AuthContext";

function PageLogin() {
  const { login: loginContext } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [textError, setTextError] = useState({});

  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;
  }

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return setTextError({
        email: !email ? "Веедите email" : "",
        password: !password ? "Веедите пароль" : "",
      });
    }

    apiLogin({
      login: email,
      password: password,
    })
      .then((data) => {
        console.log("Успешный вход:", data);
        loginContext(data.user);
        navigate("/");
      })
      .catch((error) => {
        console.log("Ошибка входа:", error);
        setTextError({ service: error.response.data.error });
      });
  };

  return (
    <Background>
      <ModalWindow>
        <WindowModal>
          <Title>Вход</Title>
          <FormModal id="form" onSubmit={handleLogin}>
            <InputWrapper>
              <AuthInput
                style={{
                  border: textError.email ? "1px solid red" : "",
                }}
                type="text"
                name="email"
                id="formlogin"
                placeholder="Эл. почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputPassword
                style={{
                  border: textError.password ? "1px solid red" : "",
                }}
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputWrapper>
            {textError.email && (
              <p style={{ color: "red" }}>{textError.email}</p>
            )}
            {textError.password && (
              <p style={{ color: "red" }}>{textError.password}</p>
            )}
            {textError.service && (
              <p style={{ color: "red" }}>{textError.service}</p>
            )}
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
