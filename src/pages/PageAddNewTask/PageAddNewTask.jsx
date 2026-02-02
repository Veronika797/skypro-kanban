import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Calendar from "../../components/calendar/Calendar";
import {
  Block,
  ButtonForm,
  CategoriesContainer,
  CategoriesTheme,
  CategoriesThemes,
  CategoriesTitle,
  CloseButton,
  Container,
  Content,
  CreateButton,
  FormBlock,
  FormTask,
  FormWrap,
  Input,
  PopNewCard,
  TaskNameAndDescr,
  Textarea,
  Wrap,
} from "./PageAddNewTask.styled";
import { addTasks } from "../../services/posts";
import { categories } from "../../data";
import { TaskContext } from "../../context/TaskContext";

const PageAddNewTask = () => {
  const { setAllCards } = useContext(TaskContext);

  const navigate = useNavigate();
  const [taskName, setTaskName] = useState("");
  const [taskCategory, setTaskCategory] = useState(null);
  const [taskStatus, setTaskStatus] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState(new Date());
  const [textError, setTextError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [inputErrors, setInputErrors] = useState({
    taskName: false,
    taskDescription: false,
  });

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleTaskDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setTaskCategory(category.id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTextError("");
    setSuccessMessage("");

    const errors = {
      taskName: !taskName.trim(),
      taskDescription: !taskDescription.trim(),
    };

    setInputErrors(errors);

    if (errors.taskName || errors.taskDescription) {
      return;
    }

    const body = {
      title: taskName || "Новая задача",
      topic: taskCategory
        ? categories.find((cat) => cat.id === taskCategory).name
        : "Research",
      status: taskStatus || "Без статуса",
      description: taskDescription || "",
      date: taskDate.toISOString(),
    };

    try {
      const updatedTasks = await addTasks(body);

      setAllCards(updatedTasks);

      setSuccessMessage("Задача успешно добавлена!");

      setTaskName("");
      setTaskDescription("");
      setTaskStatus("");
      setTaskCategory(null);
      setTaskDate(new Date());
      navigate("/");
    } catch (error) {
      setTextError("Ошибка при добавлении задачи");
      console.error("Ошибка при добавлении задачи: ", error);
    }
  };

  return (
    <PopNewCard id="popNewCard">
      <Container>
        <Block>
          {textError && (
            <p style={{ color: "red", paddingTop: "10px" }}>{textError}</p>
          )}
          {successMessage && (
            <p style={{ color: "green", paddingTop: "10px" }}>
              {successMessage}
            </p>
          )}
          <Content>
            <h3>Создание задачи</h3>

            <CloseButton type="button">
              <Link
                to={"/"}
                style={{
                  textDecoration: "none",
                }}
              >
                &#10006;
              </Link>
            </CloseButton>

            <Wrap>
              <FormWrap id="formNewCard" onSubmit={handleSubmit}>
                <FormTask>
                  <TaskNameAndDescr>
                    <FormBlock>
                      <p>Название задачи</p>
                      <Input
                        type="text"
                        id="formTitle"
                        placeholder="Введите название задачи..."
                        value={taskName}
                        onChange={handleTaskNameChange}
                        autoFocus
                        required
                        style={{
                          border: inputErrors.taskName
                            ? "2px solid red"
                            : "normal",
                        }}
                      />
                    </FormBlock>
                    <FormBlock>
                      <p>Описание задачи</p>
                      <Textarea
                        id="textArea"
                        placeholder="Введите описание задачи..."
                        value={taskDescription}
                        onChange={handleTaskDescriptionChange}
                        style={{
                          border: inputErrors.taskDescription
                            ? "2px solid red"
                            : "normal",
                        }}
                      />
                    </FormBlock>
                  </TaskNameAndDescr>
                  <Calendar />
                </FormTask>
                <CategoriesContainer>
                  <CategoriesTitle>Категория</CategoriesTitle>
                  <CategoriesThemes>
                    {categories.map((category) => (
                      <CategoriesTheme
                        key={category.id}
                        className={`${category.className} ${
                          taskCategory === category.id ? "_active-category" : ""
                        }`}
                        onClick={() => handleCategoryClick(category)}
                        style={{
                          opacity: taskCategory === category.id ? 1 : 0.2,
                        }}
                      >
                        <p>{category.name}</p>
                      </CategoriesTheme>
                    ))}
                  </CategoriesThemes>
                </CategoriesContainer>
                <ButtonForm>
                  <CreateButton type="submit" id="btnCreate">
                    Создать задачу
                  </CreateButton>
                </ButtonForm>
              </FormWrap>
            </Wrap>
          </Content>
        </Block>
      </Container>
    </PopNewCard>
  );
};

export default PageAddNewTask;
