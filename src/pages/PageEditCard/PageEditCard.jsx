import { useNavigate, useParams } from "react-router";
import { allCards } from "../../data";
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
  StatusTheme,
  StatusThemes,
  Textarea,
  Theme,
  Title,
  TopBlock,
  PrimaryButton,
  SecondaryButton,
} from "./PageEditCard.styled";
import Calendar from "../../components/calendar/Calendar";

const PageEditCard = ({ description }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const card = allCards.find((item) => item.id == id);

  const handleClose = () => {
    navigate("/");
  };

  return (
    <PopBrowse>
      <Container>
        <Block>
          <Content>
            <TopBlock>
              <Title>Название задачи</Title>
              <Theme theme={card.theme}>
                <p>{card.topic}</p>
              </Theme>
            </TopBlock>
            <Status>
              <StatusText>Статус</StatusText>
              <StatusThemes>
                <StatusTheme>
                  <p>{card.status}</p>
                </StatusTheme>
              </StatusThemes>
            </Status>
            <FormWrap>
              <FormContent>
                <FormBlock>
                  <label>Описание задачи</label>
                  <Textarea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  >
                    {description}
                  </Textarea>
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
