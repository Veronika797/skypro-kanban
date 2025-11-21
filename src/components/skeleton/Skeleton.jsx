import {
  Button,
  Card,
  Cards,
  CardsCard,
  Content,
  Description,
  Group,
  Theme,
  Title,
} from "./Skeleton.styled";

const Skeleton = () => {
  return (
    <Cards>
      <Card>
        <CardsCard>
          <Group>
            <Theme>
              <p></p>
            </Theme>
            <Button></Button>
          </Group>
          <Content>
            <Title></Title>
            <Description></Description>
            <Date>
              <svg></svg>
              <p></p>
            </Date>
          </Content>
        </CardsCard>
      </Card>
    </Cards>
  );
};
export default Skeleton;
