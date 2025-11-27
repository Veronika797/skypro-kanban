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
      // console.log("Loading: true", loading);
      setShowSkeleton(true);

      // console.log("Show Skeleton: false", showSkeleton);

      // setTimeout(() => {
      //   console.log("Before setting, Show Skeleton:", showSkeleton);
      //   setShowSkeleton(true);
      //   console.log("After setting Skeleton to true");
      // }, 1000);

      setTimeout(() => {
        setCards(allCards);
        // console.log("Cards:", cards);
        setLoading(false);
        // console.log("Loading: false", loading);
        setShowSkeleton(false);
        // console.log("Show Skeleton: false", showSkeleton);
      }, 3000);
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log("Loading:", loading);
  //   console.log("Show Skeleton:", showSkeleton);
  // }, [loading, showSkeleton]);

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
          <div className="loading">
            <p>Данные загружаются...</p>
          </div>
        ) : (
          <>
            {showSkeleton ? (
              <Skeleton loading={showSkeleton} />
            ) : (
              isVisible && (
                <div>
                  <Header openNewCard={openNewCard} />
                  <Main loading={loading} cards={cards} />
                </div>
              )
            )}
          </>
        )}
      </Wrapper>
    </>
  );
}

export default App;
