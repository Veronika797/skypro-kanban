import Column from "../Column/Column";
import { allCards, columnsData } from "../../data";
import { Block, Columns, Container, Content, MainContent } from "./Main.styled";
import Skeleton from "../Skeleton/Skeleton";

const Main = ({ loading, cards }) => {
  return (
    <MainContent>
      <Container>
        <Block>
          <Content>
            <Columns>
              {loading ? (
                <Skeleton key={id} />
              ) : (
                columnsData.map((column, index) => {
                  const filteredCards =
                    column.status === "без статуса"
                      ? cards.filter((card) => card.status === "без статуса")
                      : cards.filter((card) => card.status === column.status);
                  // console.log(columnsData);
                  return (
                    <Column
                      key={index}
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
