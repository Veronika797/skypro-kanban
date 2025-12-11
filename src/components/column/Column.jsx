import Card from "../Card/Card.jsx";
import { Col, Name, Crds } from "./Column.styled.js";

const Column = ({ cards, title, onOpen }) => {
  return (
    <Col>
      <Name>
        <p>{title}</p>
      </Name>
      <Crds>
        {Array.isArray(cards) && cards.length ? (
          cards.map((card, id) => (
            <Card key={id} id={card.id} card={card} onClick={onOpen} />
          ))
        ) : (
          <p>Нет доступных карточек</p>
        )}
      </Crds>
    </Col>
  );
};

export default Column;
