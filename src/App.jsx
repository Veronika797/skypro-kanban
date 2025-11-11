{
  // import { useState } from "react";
  // import reactLogo from "./assets/react.svg";
  // import viteLogo from "/vite.svg";
}
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import PopBrowse from "./components/popups/PopBrowse";
import PopNewCard from "./components/popups/PopNewCard";
import PopUser from "./components/popups/PopUser";

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
