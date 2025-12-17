import Card from "../card/Card";
import { Col, Name, Crds } from "./Column.styled";

const Column = ({ cards, title }) => {
  return (
    <Col>
      <Name>
        <p>{title}</p>
      </Name>
      <Crds>
        {Array.isArray(cards) && cards.length ? (
          cards.map((card) => <Card key={card.id} id={card.id} card={card} />)
        ) : (
          <p>Нет доступных карточек</p>
        )}
      </Crds>
    </Col>
  );
};

export default Column;
