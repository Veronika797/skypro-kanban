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
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function PageLogout() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
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
