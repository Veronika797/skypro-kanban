// import { useNavigate } from "react-router-dom";
// import {
//   Block,
//   ButtonGroup,
//   ButtonWrapper,
//   Container,
//   Content,
//   FormBlock,
//   FormContent,
//   FormWrap,
//   PopBrowse,
//   Status,
//   StatusText,
//   StatusThemes,
//   Textarea,
//   Theme,
//   Title,
//   TopBlock,
//   PrimaryButton,
//   SecondaryButton,
// } from "../../pages/PageEditCard/PageEditCard.styled";
// import Calendar from "../../components/calendar/Calendar";
// import { updateTask } from "../../services/posts";
// import { useState } from "react";
// // import { columnsData } from "../../data";

// const FormUpdateCard = ({ card }) => {
//   const navigate = useNavigate();
//   const [taskStatus, setTaskStatus] = useState(card.status);
//   const [taskDescription, setTaskDescription] = useState(card.description);
//   const [taskDate, setTaskDate] = useState(card.date);
//   const [textError, setTextError] = useState("");

//   //   const columnsData = columnsData.find(
//   //     (column) => column.status === card.status
//   //   );

//   //   const statusTitle = columnData?.title;
//   //   const statusTheme = columnData?.theme;

//   const handleClose = () => {
//     navigate("/");
//   };

//   const saveTask = () => {
//     updateTask(id, {
//       status: taskStatus,
//       description: taskDescription,
//       date: taskDate,
//     })
//       .then((data) => {
//         console.log(data.tasks);
//       })
//       .catch((error) => {
//         setTextError("Ошибка в редактировании задачи");
//       });
//   };

//   return (
//     <PopBrowse>
//       <Container>
//         <Block>
//           <Content>
//             <TopBlock>
//               <Title>{card.title}</Title>
//               <Theme theme={""}>
//                 <p>{card.topic}</p>
//               </Theme>
//             </TopBlock>
//             <Status>
//               <StatusText>Статус</StatusText>
//               <StatusThemes>
//                 <Theme theme={""}>
//                   <p>{card.status}</p>
//                 </Theme>
//               </StatusThemes>
//             </Status>
//             <FormWrap>
//               <FormContent>
//                 <FormBlock>
//                   <p>Описание задачи</p>
//                   <Textarea
//                     id="textArea01"
//                     readOnly
//                     placeholder="Введите описание задачи..."
//                     value={taskDescription}
//                     onChange={(e) => setTaskDescription(e.target.value)}
//                   />
//                 </FormBlock>
//               </FormContent>
//               <Calendar />
//             </FormWrap>
//             <ButtonWrapper>
//               <ButtonGroup>
//                 <PrimaryButton onClick={saveTask}>
//                   <span>Редактировать задачу</span>
//                 </PrimaryButton>
//                 <PrimaryButton>
//                   <span>Удалить задачу</span>
//                 </PrimaryButton>
//               </ButtonGroup>
//               <SecondaryButton onClick={handleClose}>Закрыть</SecondaryButton>
//             </ButtonWrapper>
//             <div className="pop-browse__btn-edit _hide">
//               <ButtonGroup>
//                 <PrimaryButton>
//                   <span>Сохранить</span>
//                 </PrimaryButton>
//                 <PrimaryButton>
//                   <span>Отменить</span>
//                 </PrimaryButton>
//                 <PrimaryButton>
//                   <span>Удалить задачу</span>
//                 </PrimaryButton>
//               </ButtonGroup>

//               <PrimaryButton onClick={handleClose}>Закрыть</PrimaryButton>
//             </div>
//           </Content>
//         </Block>
//       </Container>
//     </PopBrowse>
//   );
// };

// export default FormUpdateCard;

import { useNavigate } from "react-router-dom";
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
} from "../../pages/PageEditCard/PageEditCard.styled";
import Calendar from "../../components/calendar/Calendar";
import { updateTask } from "../../services/posts";
import { useState } from "react";

const FormUpdateCard = ({ card }) => {
  const navigate = useNavigate();
  const [taskStatus, setTaskStatus] = useState(card.status);
  const [taskDescription, setTaskDescription] = useState(card.description);
  const [taskDate, setTaskDate] = useState(card.date);
  const [textError, setTextError] = useState("");

  const handleClose = () => {
    navigate("/");
  };

  const saveTask = () => {
    if (!card) {
      setTextError("Ошибка: карточка не найдена.");
      return;
    }

    updateTask(card.id, {
      status: taskStatus,
      description: taskDescription,
      date: taskDate,
    })
      .then((data) => {
        console.log(data.tasks);
      })
      .catch((error) => {
        setTextError("Ошибка в редактировании задачи");
      });
  };

  return (
    <PopBrowse>
      <Container>
        <Block>
          <Content>
            <TopBlock>
              <Title>{card.title}</Title>
              <Theme theme={""}>
                <p>{card.topic}</p>
              </Theme>
            </TopBlock>
            <Status>
              <StatusText>Статус</StatusText>
              <StatusThemes>
                <Theme theme={""}>
                  <p>{card.status}</p>
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
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                  />
                </FormBlock>
              </FormContent>
              <Calendar />
            </FormWrap>
            <ButtonWrapper>
              <ButtonGroup>
                <PrimaryButton onClick={saveTask}>
                  <span>Редактировать задачу</span>
                </PrimaryButton>
                <PrimaryButton>
                  <span>Удалить задачу</span>
                </PrimaryButton>
              </ButtonGroup>
              <SecondaryButton onClick={handleClose}>Закрыть</SecondaryButton>
            </ButtonWrapper>
            {/* <div className="pop-browse__btn-edit _hide">
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
            </div> */}
            {textError && <p style={{ color: "red" }}>{textError}</p>}
          </Content>
        </Block>
      </Container>
    </PopBrowse>
  );
};

export default FormUpdateCard;
