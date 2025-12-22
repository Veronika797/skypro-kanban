import { useNavigate } from "react-router-dom";
import {
  Block,
  ButtonGroup,
  ButtonWrapper,
  Container,
  Content,
  FormBlock,
  FormContent,
  FormWrap,
  PopBrowse,
  Status,
  StatusText,
  StatusThemes,
  StatusTheme,
  Textarea,
  Theme,
  Title,
  TopBlock,
  PrimaryButton,
  SecondaryButton,
} from "../../pages/PageEditCard/PageEditCard.styled";
import Calendar from "../../components/calendar/Calendar";
import { deleteTask, updateTask } from "../../services/posts";
import { categories, columnsData } from "../../data";
import { useState } from "react";

const FormUpdateCard = ({ card, setAllCards }) => {
  const navigate = useNavigate();
  const [taskStatus, setTaskStatus] = useState(card.status);
  const [edditable, setEdditable] = useState(false);
  const [taskDescription, setTaskDescription] = useState(card.description);
  const [taskDate, setTaskDate] = useState(card.date);
  const [textError, setTextError] = useState("");
  const [taskCategory, setTaskCategory] = useState(card.topic);

  const saveTask = () => {
    if (!card) {
      setTextError("Ошибка: карточка не найдена.");
      return;
    }

    updateTask(card._id, {
      status: taskStatus,
      description: taskDescription,
      topic: taskCategory,
      date: taskDate,
    })
      .then(() => {
        setAllCards((cards) =>
          cards.map((item) => {
            if (item._id === card._id) {
              item.status = taskStatus;
              item.description = taskDescription;
              item.topic = taskCategory;
              item.date = taskDate;
            }
            return item;
          })
        );
        navigate("/");
      })
      .catch((error) => {
        setTextError("Ошибка в редактировании задачи");
      });
  };

  const removeTask = () => {
    if (!card) {
      setTextError("Ошибка: карточка не найдена.");
      return;
    }

    deleteTask(card._id)
      .then(() => {
        setAllCards((cards) => cards.filter((item) => item._id != card._id));
        navigate("/");
      })
      .catch((error) => {
        setTextError("Ошибка при удалении задачи");
      });
  };

  const categoryOptions = categories.map((category) => (
    <StatusTheme
      key={category.id}
      className={`${category.className} ${
        taskCategory === category.name ? "_active-category" : ""
      }`}
      onClick={() => setTaskCategory(category.name)}
    >
      <p>{category.name}</p>
    </StatusTheme>
  ));

  return (
    <PopBrowse>
      <Container>
        <Block>
          <Content>
            <TopBlock>
              <Title>{card.title}</Title>
              <Theme
                className={
                  taskCategory
                    ? categories.find((cat) => cat.name === taskCategory)
                        ?.className || "gray"
                    : "gray"
                }
              >
                <p>{taskCategory || "Research"}</p>
              </Theme>
            </TopBlock>
            <Status>
              <StatusText>Статус</StatusText>
              <StatusThemes>
                {columnsData.map((status) => (
                  <StatusTheme
                    key={status.status}
                    className={`${status.className} ${
                      taskStatus === status.status ? "_active-category" : ""
                    }`}
                    onClick={() => setTaskStatus(status.status)}
                    style={{
                      opacity: taskStatus === status.status ? 1 : 0.5,
                    }}
                  >
                    <p>{status.title}</p>
                  </StatusTheme>
                ))}
              </StatusThemes>
            </Status>
            <FormWrap>
              <FormContent>
                <FormBlock>
                  <p>Описание задачи</p>
                  <Textarea
                    id="textArea01"
                    readOnly={!edditable}
                    placeholder="Введите описание задачи..."
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                  />
                </FormBlock>
              </FormContent>
              <Calendar date={card.date} edditable={edditable} />
            </FormWrap>
            <ButtonWrapper>
              <ButtonGroup>
                {edditable ? (
                  <>
                    <SecondaryButton onClick={saveTask}>
                      <span>Сохранить</span>
                    </SecondaryButton>
                    <PrimaryButton
                      onClick={() => setEdditable((prev) => !prev)}
                    >
                      <span>Отменить</span>
                    </PrimaryButton>
                  </>
                ) : (
                  <PrimaryButton onClick={() => setEdditable((prev) => !prev)}>
                    <span>Редактировать задачу</span>
                  </PrimaryButton>
                )}
                <PrimaryButton onClick={removeTask}>
                  <span>Удалить задачу</span>
                </PrimaryButton>
              </ButtonGroup>
              <SecondaryButton onClick={() => navigate("/")}>
                Закрыть
              </SecondaryButton>
            </ButtonWrapper>

            {textError && <p style={{ color: "red" }}>{textError}</p>}
          </Content>
        </Block>
      </Container>
    </PopBrowse>
  );
};

export default FormUpdateCard;
