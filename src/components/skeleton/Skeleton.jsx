import {
  Button,
  Card,
  Cards,
  CardsCard,
  Content,
  Description,
  Group,
  Theme,
  ThemeTitle,
  Title,
  Date,
  DateTitle,
  DateSvg,
} from "./Skeleton.styled";

const Skeleton = () => {
  return (
    <Cards>
      <Card>
        <CardsCard>
          <Group>
            <Theme>
              <ThemeTitle></ThemeTitle>
            </Theme>
            <Button></Button>
          </Group>
          <Content>
            <Title></Title>
            <Description></Description>
            <Date>
              <DateSvg></DateSvg>
              <DateTitle></DateTitle>
            </Date>
          </Content>
        </CardsCard>
      </Card>
    </Cards>
  );
};

export default Skeleton;
