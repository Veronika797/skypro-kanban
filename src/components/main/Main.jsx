import Column from "../column/Column";
import { columnsData } from "../../data";
import { Block, Columns, Container, Content, MainContent } from "./Main.styled";
import Skeleton from "../skeleton/Skeleton";
import { useEffect, useState } from "react";
import { getTasks } from "../../services/posts";

const Main = () => {
  const [allCards, setAllCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const data = await getTasks();
      // console.log(data);

      setAllCards(data.tasks);
    } catch (error) {
      console.log("Ошибка при получении задач:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainContent>
      <Container>
        <Block>
          <Content>
            <Columns>
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
                columnsData.map((column) => {
                  const filteredCards =
                    column.title.toLowerCase() === "без статуса"
                      ? allCards.filter(
                          (card) => card.status.toLowerCase() === "без статуса"
                        )
                      : allCards.filter(
                          (card) =>
                            card.status.toLowerCase() ===
                            column.title.toLowerCase()
                        );
                  // console.log(filteredCards);

                  return (
                    <Column
                      key={column.status}
                      title={column.title}
                      cards={filteredCards.length > 0 ? filteredCards : []}
                    />
                  );
                })
              )}
            </Columns>
          </Content>
        </Block>
      </Container>
    </MainContent>
  );
};

export default Main;
