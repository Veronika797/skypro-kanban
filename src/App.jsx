import "./App.css";
import GlobalStyle from "./GlobalStyle";
import Wrapper from "./Shared.styled";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <AppRoutes />
      </Wrapper>
    </>
  );
}

export default App;
