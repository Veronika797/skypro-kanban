import { useContext } from "react";
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
import { TaskContext } from "../../context/TaskContext";
import { ThemeContext } from "../../context/ThemeContext";

const Header = ({ openNewCard, closeNewCard }) => {
  const { loading } = useContext(TaskContext);
  const navigate = useNavigate();

  const { isDark, toggleTheme } = useContext(ThemeContext);

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
                  <img
                    src={isDark ? "images/logo_dark.png" : "images/logo.png"}
                    alt="logo"
                  />
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
                        checked={isDark}
                        onChange={toggleTheme}
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
