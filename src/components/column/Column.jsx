import Card from "../card/Card";
import { Col, Name, Crds } from "./Column.styled.js";

const Column = ({ title, cards }) => {
  return (
    <Col>
      <Name>
        <p>{title}</p>
      </Name>
      <Crds>
        {Array.isArray(cards) && cards.length > 0 ? (
          cards.map((card, id) => <Card key={id} index={id} card={card} />)
        ) : (
          <p>Нет доступных карточек</p>
        )}
      </Crds>
    </Col>
  );
};

export default Column;
