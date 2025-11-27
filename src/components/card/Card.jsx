import {
  CardContainer,
  Group,
  Theme,
  Text,
  Button,
  Title,
  Description,
  Content,
  DateContainer,
  DateContainerText,
} from "./Card.styled";

const Card = ({ id, card }) => {
  if (!card) {
    return null;
  }

  return (
    <CardContainer key={id}>
      <Group>
        <Theme theme={card.theme}>
          <Text>{card.topic}</Text>
        </Theme>
        <Button href="#popBrowse" target="_self">
          <div></div>
          <div></div>
          <div></div>
        </Button>
      </Group>
      <Content>
        <a href="" target="_blank">
          <Title>{card.title}</Title>
        </a>
        <Description>{card.description}</Description>
        <DateContainer>
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
          <DateContainerText>{card.date}</DateContainerText>
        </DateContainer>
      </Content>
    </CardContainer>
  );
};

export default Card;
