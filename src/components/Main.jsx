import Column from "./Column";

const Main = () => {
  const allCards = [
    {
      title: "Сходить в зал",
      description: "День ног",
      status: "no-status",
      theme: "_orange",
    },
    {
      title: "Сходить в баню",
      description: "Найти баню",
      status: "no-status",
      theme: "_orange",
    },
    {
      title: "Приготовить плов",
      description: "Купить рис",
      status: "no-status",
      theme: "_orange",
    },
    {
      title: "Сделать ДЗ",
      description: "ознакомиться с ТЗ",
      status: "to-do",
      theme: "_green",
    },
    {
      title: "Создать сайт-визитку",
      description: "Пригласительные",
      status: "testing",
      theme: "_orange",
    },
    {
      title: "Сдать курсовую по JS",
      description: "Доделать курсовую",
      status: "done",
      theme: "_green",
    },
    {
      title: "Прочитать книгу",
      description: "Стивен Кинг",
      status: "in-progress",
      theme: "_purple",
    },
    {
      title: "Хайкинг в Гонконге",
      description: "Сделано",
      status: "done",
      theme: "_green",
    },
  ];

  const columnsData = [
    { title: "Без статуса", status: "no-status" },
    { title: "Нужно сделать", status: "to-do" },
    { title: "В работе", status: "in-progress" },
    { title: "Тестирование", status: "testing" },
    { title: "Готово", status: "done" },
  ];

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <div className="columns">
              {columnsData.map((column, index) => {
                const filteredCards = allCards.filter(
                  (card) => card.status === column.status
                );

                return (
                  <Column
                    key={index}
                    title={column.title}
                    cards={filteredCards.length > 0 ? filteredCards : []}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
