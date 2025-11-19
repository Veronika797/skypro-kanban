import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import PopBrowse from "./components/popups/browse/PopBrowse";
import PopNewCard from "./components/popups/newCard/PopNewCard";
import PopUser from "./components/popups/user/PopUser";
import Loader from "./components/loader/Loader";
import { allCards } from "./data";

function App() {
  const [click, setClick] = useState(true);
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [showSkeleton, setShowSkeleton] = useState(true);

  const clickPopUser = () => setClick(true);
  const closePopUser = () => setClick(false);

  useEffect(() => {
    const fetchData = () => {
      setShowSkeleton(true);
      setTimeout(() => {
        setCards(allCards);
        setLoading(false);
        setShowSkeleton(false);
      }, 3000);
    };

    fetchData();
  }, []);

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
      {loading ? (
        <div className="loading">
          <p>Данные загружаются...</p>
        </div>
      ) : (
        <>
          <Header />
          <Main loading={loading} />
          {/* <Loader cards={cards} showSkeleton={showSkeleton} /> */}
        </>
      )}
    </div>
  );
}

export default App;
