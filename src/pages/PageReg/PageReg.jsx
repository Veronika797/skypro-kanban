import { Link, Navigate, useNavigate } from "react-router";
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
import { useContext, useState } from "react";
import { reg as apiReg } from "../../services/auth";
import { AuthContext } from "../../context/AuthContext";

function PageReg() {
  const { login: loginContext } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [textError, setTextError] = useState({});

  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;
  }

  const handleRegister = (e) => {
    e.preventDefault();

    if (!userName || !email || !password) {
      return setTextError({
        userName: !userName ? "Веедите имя" : "",
        email: !email ? "Веедите email" : "",
        password: !password ? "Веедите пароль" : "",
      });
    }

    apiReg({ login: email, name: userName, password: password })
      .then((data) => {
        console.log("Регистрация успешна:", data);
        loginContext(data.user);
        alert("Регистрация прошла успешно");
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
          <Title>Регистрация</Title>
          <FormModal id="form" onSubmit={handleRegister}>
            <InputWrapper>
              <AuthInput
                style={{
                  border: textError.userName ? "1px solid red" : "",
                }}
                type="text"
                placeholder="Имя"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <AuthInput
                style={{
                  border: textError.email ? "1px solid red" : "",
                }}
                type="email"
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
            {textError.userName && (
              <p style={{ color: "red" }}>{textError.userName}</p>
            )}
            {textError.email && (
              <p style={{ color: "red" }}>{textError.email}</p>
            )}
            {textError.password && (
              <p style={{ color: "red" }}>{textError.password}</p>
            )}
            {textError.service && (
              <p style={{ color: "red" }}>{textError.service}</p>
            )}
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
