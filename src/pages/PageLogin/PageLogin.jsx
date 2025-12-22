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
import { login } from "../../services/auth";
import { AuthContext } from "../../context/AuthContext";

function PageLogin() {
  const { setIsAuth } = useContext(AuthContext);

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
      const errors = {
        email: !email ? "Веедите email" : "",
        password: !password ? "Веедите пароль" : "",
      };
      return setTextError(errors);
    }

    login({
      login: email,
      password: password,
    })
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.user.token);
        setIsAuth(true);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
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
