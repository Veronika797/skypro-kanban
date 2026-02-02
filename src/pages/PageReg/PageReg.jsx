import { Link, Navigate, useNavigate } from "react-router";
import {
  Background,
  ModalWindow,
  WindowModal,
  Title,
  FormModal,
  InputWrapper,
  AuthInput,
  InputPassword,
  ButtonEnter,
  FormGroup,
} from "./PageReg.styled";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function PageReg() {
  const { handleRegister, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [textError, setTextError] = useState({});

  if (localStorage.getItem("token")) {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userName || !email || !password) {
      const errors = {
        userName: !userName ? "Введите имя" : "",
        email: !email ? "Введите email" : "",
        password: !password ? "Введите пароль" : "",
      };
      return setTextError(errors);
    }

    try {
      await handleRegister({
        login: email,
        name: userName,
        password: password,
      });
      alert("Регистрация прошла успешно");
      navigate("/");
    } catch (error) {
      console.log(error);
      setTextError({
        service: error.response?.data?.error || "Ошибка регистрации",
      });
    }
  };

  return (
    <Background>
      <ModalWindow>
        <WindowModal>
          <Title>Регистрация</Title>
          <FormModal id="form" onSubmit={handleSubmit}>
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
              <p style={{ color: "red", fontSize: "12px" }}>
                {textError.userName}
              </p>
            )}
            {textError.email && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {textError.email}
              </p>
            )}
            {textError.password && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {textError.password}
              </p>
            )}
            {textError.service && (
              <p style={{ color: "red", fontSize: "12px" }}>
                {textError.service}
              </p>
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
