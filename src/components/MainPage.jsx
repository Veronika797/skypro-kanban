import { Outlet } from "react-router";
import Header from "./header/Header";
import Main from "./main/Main";

function MainPage({ loading, allCards }) {
  return (
    <div>
      <Header loading={loading} />
      <Main loading={loading} allCards={allCards} />
      <Outlet />
    </div>
  );
}

export default MainPage;
