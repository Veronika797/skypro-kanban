{
  /*import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";*/
}
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import PopBrowse from "./components/popBrowse/PopBrowse";
import PopNewCard from "./components/popNewCard/PopNewCard";
import PopUser from "./components/popUser/PopUser";

function App() {
  return (
    <div className="wrapper">
      {/*pop-up start*/}
      <PopUser />
      <PopNewCard />
      <PopBrowse />
      {/*} pop-up end*/}
      <Header />
      <Main />
    </div>
  );
}

export default App;
