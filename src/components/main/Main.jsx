import Column from "../Column/Column";
import { allCards, columnsData } from "../../data";
import { Block, Columns, Container, Content, MainContent } from "./Main.styled";

const Main = () => {
  return (
    <MainContent>
      <Container>
        <Block>
          <Content>
            <Columns>
              {columnsData.map((column, index) => {
                const filteredCards =
                  column.status === "без статуса"
                    ? allCards.filter((card) => card.status === "без статуса")
                    : allCards.filter((card) => card.status === column.status);

                return (
                  <Column
                    key={index}
                    title={column.title}
                    cards={filteredCards.length > 0 ? filteredCards : []}
                  />
                );
              })}
            </Columns>
          </Content>
        </Block>
      </Container>
    </MainContent>
  );
};

export default Main;

// import Column from "../column/Column";
// import { allCards, columnsData } from "../constants";

// const Main = () => {
//   return (
//     <main className="main">
//       <div className="container">
//         <div className="main__block">
//           <div className="main__content">
//             <div className="columns">
//               {columnsData.map((column, index) => {
//                 const filteredCards =
//                   column.status === "без статуса"
//                     ? allCards.filter((card) => card.status === "без статуса")
//                     : allCards.filter((card) => card.status === column.status);

//                 return (
//                   <Column
//                     key={index}
//                     title={column.title}
//                     cards={filteredCards.length > 0 ? filteredCards : []}
//                   />
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Main;
