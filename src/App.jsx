import { useEffect, useState } from "react";
import "./App.css";
import GlobalStyle from "./GlobalStyle";
import Wrapper from "./Shared.styled";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PopBrowse from "./components/popups/browse/PopBrowse";
import PopNewCard from "./components/popups/newCard/PopNewCard";
import PopUser from "./components/popups/user/PopUser";
import { allCards } from "./data";
import Skeleton from "./components/Skeleton/Skeleton";

function App() {
  const [click, setClick] = useState(true);
  const [isPopNewCard, setPopNewCard] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [isVisible, setVisible] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(false);

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
      setLoading(true);
      console.log("Before Skeleton false", showSkeleton);
      setShowSkeleton(true);
      console.log("After Skeleton true");

      setTimeout(() => {
        setCards(allCards);
        setLoading(false);
        setShowSkeleton(false);
      }, 3000);
    };

    fetchData();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        {isPopNewCard && <PopNewCard closeNewCard={closeNewCard} />}
        {click && (
          <div className="header__pop-user-set">
            <PopUser closePopUser={closePopUser} />
          </div>
        )}

        <PopBrowse />

        {loading ? (
          <div className="content">
            <div className="loading">Данные загружаются...</div>
            <div className="skeleton-container">
              {[...Array(5)].map((_, index) => (
                <Skeleton key={index} />
              ))}
            </div>
          </div>
        ) : (
          <>
            {isVisible && (
              <div>
                <Header openNewCard={openNewCard} />
                <Main loading={loading} />
              </div>
            )}
          </>
        )}
      </Wrapper>
    </>
  );
}

export default App;
