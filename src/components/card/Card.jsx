import { Link } from "react-router";
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

const Card = ({ id, card }) => {
  if (!card) {
    return null;
  }
  // console.log(id);
  // console.log(card);

  return (
    <Link
      to={`/card/${id}`}
      style={{
        textDecoration: "none",
      }}
    >
      <CardContainer key={card.id}>
        <Group>
          <Theme theme={card.theme}>
            <Text>{card.topic}</Text>
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
            <DateContainerText>{card.date}</DateContainerText>
          </DateContainer>
        </Content>
      </CardContainer>
    </Link>
  );
};

export default Card;
