import { Link } from "react-router";
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
  return (
    <PopExit>
      <Container>
        <Block>
          <Title>
            <p>Выйти из аккаунта?</p>
          </Title>
          <FormExit id="formExit">
            <FormGroup>
              <ButtonYes id="exitYes" onClick={() => setIsAuth(false)}>
                <Link to={"/login"}>Да, выйти</Link>
              </ButtonYes>
              <ButtonNo id="exitNo">
                <Link to={"/"}>Нет, остаться</Link>
              </ButtonNo>
            </FormGroup>
          </FormExit>
        </Block>
      </Container>
    </PopExit>
  );
}

export default PageLogout;
