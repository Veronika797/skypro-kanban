import { Outlet } from "react-router";
import Header from "./header/Header";
import Main from "./main/Main";

function MainPage() {
  return (
    <div>
      <Header />
      <Main />
      <Outlet />
    </div>
  );
}

export default MainPage;
