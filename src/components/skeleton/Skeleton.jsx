import { Card, Cards, Content, Group, Date } from "./Skeleton.styled";

const Skeleton = ({ id }) => {
  return (
    <Cards key={id}>
      <Card>
        <Group></Group>
        <Content>
          <Date></Date>
        </Content>
      </Card>
    </Cards>
  );
};

export default Skeleton;
