import Column from "../column/Column";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import {
  Block,
  ColumnsContent,
  Container,
  Content,
  MainContent,
} from "./Main.styled";
import Skeleton from "../skeleton/Skeleton";

const Main = () => {
  const { loading, allCards, dictionary } = useContext(TaskContext);
  const { columnsData } = dictionary;
  return (
    <MainContent>
      <Container>
        <Block>
          <Content>
            <ColumnsContent>
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
                  const filteredCards = allCards.filter((card) => {
                    const cardStatus = card.status
                      ? card.status.toLowerCase()
                      : "";
                    const columnStatus = column.status.toLowerCase();

                    if (columnStatus === "no-status") {
                      return (
                        !card.status ||
                        cardStatus === "" ||
                        cardStatus === "без статуса" ||
                        cardStatus === "no-status"
                      );
                    } else {
                      return cardStatus === columnStatus;
                    }
                  });
                  return (
                    <Column
                      key={column.status}
                      title={column.title}
                      cards={filteredCards}
                    />
                  );
                })
              )}
            </ColumnsContent>
          </Content>
        </Block>
      </Container>
    </MainContent>
  );
};

export default Main;
