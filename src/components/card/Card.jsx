import { useNavigate } from "react-router-dom";
import {
  Button,
  CardContainer,
  Content,
  DateContainer,
  DateContainerText,
  Description,
  Group,
  Theme,
  Title,
  Text,
} from "./Card.styled";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
import { useState } from "react";

const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  return `${day}.${month}.${year}`;
};

const Card = ({ id, card }) => {
  const { dictionary } = useContext(TaskContext);
  const { categories } = dictionary;
  const taskDate = formatDate(new Date(card.date));
  const [taskCategory, setTaskCategory] = useState(card.topic);
  const navigate = useNavigate();

  if (!card) {
    return null;
  }

  const handleCardClick = (e) => {
    e.stopPropagation();
    navigate(`/card/${id}`);
  };

  const category = categories.find((item) => {
    return item.name === card.topic;
  });

  return (
    <>
      <CardContainer onClick={handleCardClick}>
        <Group>
          <Theme
            className={
              taskCategory
                ? categories.find((cat) => cat.name === taskCategory)
                    ?.className || "gray"
                : "gray"
            }
          >
            <Text>{taskCategory || "Research"}</Text>
          </Theme>
          <Button>
            <div></div>
            <div></div>
            <div></div>
          </Button>
        </Group>
        <Content>
          <Title>{card.title}</Title>

          <Description>{card.description}</Description>
          <DateContainer>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-calendar-icon lucide-calendar"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
            </svg>
            <DateContainerText>{taskDate}</DateContainerText>
          </DateContainer>
        </Content>
      </CardContainer>
    </>
  );
};

export default Card;
