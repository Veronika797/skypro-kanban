import { useState } from "react";
import { Link } from "react-router-dom";
import Calendar from "../../components/calendar/Calendar";
import {
  Block,
  CategoriesContainer,
  CategoriesTheme,
  CategoriesThemes,
  CategoriesTitle,
  CloseButton,
  Container,
  Content,
  CreateButton,
  FormBlock,
  FormWrap,
  Input,
  Label,
  PopNewCard,
  Textarea,
  Wrap,
} from "./PageAddNewTask.styled.js";

const categories = [
  { id: 1, name: "Учеба", className: "orange" },
  { id: 2, name: "Здоровье", className: "green" },
  { id: 3, name: "Отдых", className: "purple" },
  { id: 4, name: "Спорт", className: "blue" },
  { id: 5, name: "Проект", className: "pink" },
  { id: 6, name: "Путешествия", className: "yellow" },
];

const PageAddNewTask = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleTaskDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <PopNewCard id="popNewCard">
      <Container>
        <Block>
          <Content>
            <h3>Создание задачи</h3>
            <Link to={"/"}>
              <CloseButton type="button">&#10006;</CloseButton>
            </Link>

            <Wrap>
              <FormWrap id="formNewCard" onSubmit={handleSubmit}>
                <FormBlock>
                  <Label>Название задачи</Label>
                  <Input
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={taskName}
                    onChange={handleTaskNameChange}
                    autoFocus
                    required
                  ></Input>
                </FormBlock>
                <FormBlock>
                  <Label>Описание задачи</Label>
                  <Textarea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={taskDescription}
                    onChange={handleTaskDescriptionChange}
                  />
                </FormBlock>
              </FormWrap>

              <Calendar />
            </Wrap>
            <CategoriesContainer>
              <CategoriesTitle>Категория</CategoriesTitle>
              <CategoriesThemes>
                {categories.map((category) => (
                  <CategoriesTheme
                    key={category.id}
                    className={`${category.className} ${
                      activeCategory === category.id ? "_active-category" : ""
                    }`}
                    onClick={() => handleCategoryClick(category)}
                    style={{
                      opacity: activeCategory === category.id ? 1 : 0.2,
                    }}
                  >
                    <p>{category.name}</p>
                  </CategoriesTheme>
                ))}
              </CategoriesThemes>
            </CategoriesContainer>

            <CreateButton type="submit" id="btnCreate">
              Создать задачу
            </CreateButton>
          </Content>
        </Block>
      </Container>
    </PopNewCard>
  );
};

export default PageAddNewTask;
