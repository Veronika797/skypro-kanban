import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import PopBrowse from "./components/popups/browse/PopBrowse";
import PopNewCard from "./components/popups/newCard/PopNewCard";
import PopUser from "./components/popups/user/PopUser";

function App() {
  const [click, close] = useState(true);

  const clickPopUser = () => {
    close(true);
  };

  const closePopUser = () => {
    close(false);
  };

  return (
    <div className="wrapper">
      <div
        className="header__pop-user-set"
        style={{ display: click ? "none" : "block" }}
      >
        <PopUser closePopUser={closePopUser} />
      </div>
      <PopNewCard />
      <PopBrowse />
      <Header clickPopUser={clickPopUser} />
      <Main />
    </div>
  );
}

export default App;

// import "./App.css";
// import Header from "./components/header/Header";
// import Main from "./components/main/Main";
// import PopBrowse from "./components/popups/browse/PopBrowse";
// import PopNewCard from "./components/popups/newCard/PopNewCard";
// import PopUser from "./components/popups/user/PopUser";

// function App() {
//   return (
//     <div className="wrapper">
//       <PopUser />
//       <PopNewCard />
//       <PopBrowse />
//       <Header />
//       <Main />
//     </div>
//   );
// }

// export default App;

// const [loading, setLoading] = useState(true);

// useEffect(() => {
//   setTimeout(() => {
//     setLoading(false);
//   }, 3000);
// }, [allCards]);
