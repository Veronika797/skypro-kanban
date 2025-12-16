import { useNavigate, useParams } from "react-router";
import { allCards, columnsData } from "../../data";
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
  Textarea,
  Theme,
  Title,
  TopBlock,
  PrimaryButton,
  SecondaryButton,
} from "./PageEditCard.styled";
import Calendar from "../../components/Calendar/Calendar";

const PageEditCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const cardId = parseInt(id, 10);
  const card = allCards.find((item) => item.id === cardId);

  const columnData = columnsData.find(
    (column) => column.status === card.status
  );
  const statusTitle = columnData?.title;
  const statusTheme = columnData?.theme;

  const handleClose = () => {
    navigate("/");
  };

  return (
    <PopBrowse>
      <Container>
        <Block>
          <Content>
            <TopBlock>
              <Title>{card.title}</Title>
              <Theme theme={card.theme}>
                <p>{card.topic}</p>
              </Theme>
            </TopBlock>
            <Status>
              <StatusText>Статус</StatusText>
              <StatusThemes>
                <Theme theme={statusTheme}>
                  <p>{statusTitle}</p>
                </Theme>
              </StatusThemes>
            </Status>
            <FormWrap>
              <FormContent>
                <FormBlock>
                  <p>Описание задачи</p>
                  <Textarea
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                    value={card.description}
                  />
                </FormBlock>
              </FormContent>
              <Calendar />
            </FormWrap>
            <ButtonWrapper>
              <ButtonGroup>
                <PrimaryButton>
                  <span>Редактировать задачу</span>
                </PrimaryButton>
                <PrimaryButton>
                  <span>Удалить задачу</span>
                </PrimaryButton>
              </ButtonGroup>
              <SecondaryButton onClick={handleClose}>Закрыть</SecondaryButton>
            </ButtonWrapper>
            <div className="pop-browse__btn-edit _hide">
              <ButtonGroup>
                <PrimaryButton>
                  <span>Сохранить</span>
                </PrimaryButton>
                <PrimaryButton>
                  <span>Отменить</span>
                </PrimaryButton>
                <PrimaryButton>
                  <span>Удалить задачу</span>
                </PrimaryButton>
              </ButtonGroup>

              <PrimaryButton onClick={handleClose}>Закрыть</PrimaryButton>
            </div>
          </Content>
        </Block>
      </Container>
    </PopBrowse>
  );
};

export default PageEditCard;
