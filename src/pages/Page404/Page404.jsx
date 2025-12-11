import { Link } from "react-router";
import { Container } from "./Page404.styled";

function Page404() {
  return (
    <Container>
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Link to="/">Перейти на главную</Link>
    </Container>
  );
}

export default Page404;
