import {
  Block,
  Container,
  Content,
  Logo,
  Nav,
  User,
  TaskAndName,
  CloseButton,
  Button,
  SetUser,
  UserName,
  UserMail,
  ThemeSection,
  ThemeTitle,
  ThemeCheckbox,
  PopUserButton,
  ButtonStyled,
  ButtonLink,
} from "./Header.styled";
import { Link, useNavigate } from "react-router";

const Header = ({ openNewCard, closeNewCard, loading }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/exit");
  };

  return (
    <>
      {loading ? (
        ""
      ) : (
        <Block>
          <Container>
            <Content>
              <Link to="/">
                <Logo>
                  <img src="images/logo.png" alt="logo"></img>
                </Logo>
              </Link>
              <Link to="/">
                <Logo>
                  <img src="images/logo_dark.png" alt="logo"></img>
                </Logo>
              </Link>
              <Nav>
                <TaskAndName>
                  <Link to="/add-task" onClick={openNewCard}>
                    <Button>Создать новую задачу</Button>
                  </Link>

                  <User href="#user-set-target">Ivan Ivanov</User>
                  <SetUser
                    className="header__pop-user-set pop-user-set"
                    id="user-set-target"
                  >
                    <CloseButton href="#" onClick={closeNewCard}>
                      x
                    </CloseButton>
                    <UserName>Ivan Ivanov</UserName>
                    <UserMail>ivan.ivanov@gmail.com</UserMail>
                    <ThemeSection>
                      <ThemeTitle>Темная тема</ThemeTitle>
                      <ThemeCheckbox
                        type="checkbox"
                        name="checkbox"
                      ></ThemeCheckbox>
                    </ThemeSection>
                    <PopUserButton>
                      <ButtonStyled className="_hover03">
                        <ButtonLink type="button" onClick={handleLogout}>
                          Выйти
                        </ButtonLink>
                      </ButtonStyled>
                    </PopUserButton>
                  </SetUser>
                </TaskAndName>
              </Nav>
            </Content>
          </Container>
        </Block>
      )}
    </>
  );
};

export default Header;
