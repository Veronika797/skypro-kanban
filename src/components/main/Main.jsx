import Column from "../column/Column";
import { columnsData } from "../../data";
import {
  Block,
  ColumnsContent,
  Container,
  Content,
  MainContent,
} from "./Main.styled";
import Skeleton from "../skeleton/Skeleton";

const Main = ({ allCards = [], loading }) => {
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
                  const filteredCards = allCards.filter((card) =>
                    column.title.toLowerCase() === "без статуса"
                      ? card.status.toLowerCase() === "без статуса"
                      : card.status.toLowerCase() ===
                        column.status.toLowerCase()
                  );
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
