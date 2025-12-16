import Column from "../Column/Column";
import { allCards, columnsData } from "../../data";
import { Block, Columns, Container, Content, MainContent } from "./Main.styled";
import Skeleton from "../Skeleton/Skeleton";

const Main = ({ loading }) => {
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
                    column.status === "без статуса"
                      ? allCards.filter((card) => card.status === "без статуса")
                      : allCards.filter(
                          (card) => card.status === column.status
                        );
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
