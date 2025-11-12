import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import PopBrowse from "./components/popups/browse/PopBrowse";
import PopNewCard from "./components/popups/newCard/PopNewCard";
import PopUser from "./components/popups/user/PopUser";

function App() {
  return (
    <div className="wrapper">
      <PopUser />
      <PopNewCard />
      <PopBrowse />
      <Header />
      <Main />
    </div>
  );
}

export default App;
