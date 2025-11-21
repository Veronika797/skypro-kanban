import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/popups/browse/PopBrowse";
import PopNewCard from "./components/popups/newCard/PopNewCard";
import PopUser from "./components/popups/user/PopUser";
import { allCards } from "./data";
// import UserProfile from "./components/popups/UserProfile/UserProfil";
// import Loader from "./components/loader/Loader";

function App() {
  const [click, setClick] = useState(true);
  const [isPopNewCard, setPopNewCard] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [isVisible, setVisible] = useState(true);
  // const [isPopUser, setPopUser] = useState(false);
  // const [isUserProfile, setUserProfile] = useState(false);
  // const [showSkeleton, setShowSkeleton] = useState(true);

  // const clickPopUser = () => setClick(true);
  const closePopUser = () => setClick(false);
  const openNewCard = () => {
    setPopNewCard(true);
    setVisible(false);
  };
  const closeNewCard = () => {
    setPopNewCard(false);
    setVisible(true);
  };

  useEffect(() => {
    const fetchData = () => {
      // setShowSkeleton(true);
      setTimeout(() => {
        setCards(allCards);
        setLoading(false);
        // setShowSkeleton(false);
      }, 3000);
    };

    fetchData();
  }, []);

  return (
    <div className="wrapper">
      {isPopNewCard && <PopNewCard closeNewCard={closeNewCard} />}
      {click && (
        <div className="header__pop-user-set">
          <PopUser closePopUser={closePopUser} />
        </div>
      )}

      <PopBrowse />

      {loading ? (
        <div className="loading">
          <p>Данные загружаются...</p>
        </div>
      ) : (
        isVisible && (
          <>
            <Header openNewCard={openNewCard} />
            <Main loading={loading} />
            {/* <Loader cards={cards} showSkeleton={showSkeleton} /> */}
          </>
        )
      )}
    </div>
  );
}

export default App;
