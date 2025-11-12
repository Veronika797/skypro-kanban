import Card from "../card/Card";

const Column = ({ title, cards }) => {
  return (
    <div className="main__column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cards.map((card, index) => (
          <Card key={index} index={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Column;
