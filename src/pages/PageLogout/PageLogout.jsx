import { useNavigate } from "react-router";
import {
  Block,
  ButtonNo,
  ButtonYes,
  Container,
  FormExit,
  FormGroup,
  PopExit,
  Title,
} from "./PageLogout.styled";

function PageLogout({ setIsAuth }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <PopExit>
      <Container>
        <Block>
          <Title>
            <p>Выйти из аккаунта?</p>
          </Title>
          <FormExit id="formExit">
            <FormGroup>
              <ButtonYes type="button" id="exitYes" onClick={handleLogout}>
                Да, выйти
              </ButtonYes>
              <ButtonNo type="button" id="exitNo" onClick={() => navigate("/")}>
                Нет, остаться
              </ButtonNo>
            </FormGroup>
          </FormExit>
        </Block>
      </Container>
    </PopExit>
  );
}

export default PageLogout;
