const Card = ({ index, card }) => {
  if (!card) {
    return null;
  }

  return (
    <div className="cards__item" key={index}>
      <div className={`cards__card card ${card.theme}`}>
        <div className="card__group">
          <div className={`card__theme ${card.theme}`}>
            <p className="theme-text">{card.category}</p>
          </div>
          <a href="#popBrowse" target="_self">
            <div className="card__btn">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </a>
        </div>
        <div className="card__content">
          <a href="" target="_blank">
            <h3 className="card__title">{card.title}</h3>
          </a>
          <p className="card__description">{card.description}</p>
          <div className="card__date">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-calendar-icon lucide-calendar"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
            </svg>
            <p>{new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
