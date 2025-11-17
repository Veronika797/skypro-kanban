import Card from "../card/Card";

const Column = ({ title, cards }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {Array.isArray(cards) && cards.length > 0 ? (
          cards.map((card, id) => <Card key={id} index={id} card={card} />)
        ) : (
          <p>Нет доступных карточек</p>
        )}
      </div>
    </div>
  );
};

export default Column;
