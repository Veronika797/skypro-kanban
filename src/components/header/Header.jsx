import {
  Block,
  Container,
  Content,
  Logo,
  Nav,
  // Task,
  // User,
  TaskAndName,
  // CloseButton,
  // BtnExit,
  // SetUser,
  // SetName,
  // SetMail,
  // SetTheme,
} from "./Header.styled";

// import UserProfile from "../popups/UserProfile/UserProfil";
// import PopNewCard from "../popups/newCard/PopNewCard";

const Header = ({ openNewCard, closeNewCard }) => {
  // const openUserProfile = () => console.log("open");
  // setUserProfile(false);

  // const openNewCard = () => console.log("click");
  // setPopNewCard(false);

  return (
    <Block>
      <Container>
        <Content>
          <Logo>
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo"></img>
            </a>
          </Logo>
          <Logo>
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo"></img>
            </a>
          </Logo>
          <Nav>
            <TaskAndName>
              <button
                className="header__btn-main-new _hover01"
                id="btnMainNew"
                onClick={openNewCard}
              >
                <a href="#popNewCard">Создать новую задачу</a>
              </button>
              <a href="#user-set-target" className="header__user _hover02">
                Ivan Ivanov
              </a>
              <div
                className="header__pop-user-set pop-user-set"
                id="user-set-target"
              >
                <a
                  className="pop-user-set-close"
                  href="#"
                  onClick={closeNewCard}
                >
                  x
                </a>
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="checkbox"
                  ></input>
                </div>
                <div className="pop-user-button">
                  <button type="button" className="_hover03">
                    <a href="#popExit">Выйти</a>
                  </button>
                </div>
              </div>
            </TaskAndName>
          </Nav>
        </Content>
      </Container>
    </Block>
  );
};

export default Header;

// <Task id="btnMainNew">Создать новую задачу</Task>
// <User className="header__user" onClick={openUserProfile}>
//   Ivan Ivanov
// </User>
// <SetUser id="user-set-target">
//   <CloseButton onClick={closePopUser}>x</CloseButton>
//   <SetName>Ivan Ivanov</SetName>
//   <SetMail>ivan.ivanov@gmail.com</SetMail>
//   <SetTheme>
//     <p>Темная тема</p>
//     <input
//       type="checkbox"
//       className="checkbox"
//       name="checkbox"
//     ></input>
//   </SetTheme>
//   <BtnExit type="button" className="_hover03">
//     <a href="#popExit">Выйти</a>
//   </BtnExit>
// </SetUser>
// .............
// const Header = () => {
//   return (
//     <header className="header">
//       <div className="container">
//         <div className="header__block">
//           <div className="header__logo _show _light">
//             <a href="" target="_self">
//               <img src="images/logo.png" alt="logo"></img>
//             </a>
//           </div>
//           <div className="header__logo _dark">
//             <a href="" target="_self">
//               <img src="images/logo_dark.png" alt="logo"></img>
//             </a>
//           </div>
//           <nav className="header__nav">
//             <button className="header__btn-main-new _hover01" id="btnMainNew">
//               <a href="#popNewCard">Создать новую задачу</a>
//             </button>
//             <a href="#user-set-target" className="header__user _hover02">
//               Ivan Ivanov
//             </a>
//             <div
//               className="header__pop-user-set pop-user-set"
//               id="user-set-target"
//             >
//               <a className="pop-user-set-close" href="">
//                 x
//               </a>
//               <p className="pop-user-set__name">Ivan Ivanov</p>
//               <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
//               <div className="pop-user-set__theme">
//                 <p>Темная тема</p>
//                 <input
//                   type="checkbox"
//                   className="checkbox"
//                   name="checkbox"
//                 ></input>
//               </div>
//               <button type="button" className="_hover03">
//                 <a href="#popExit">Выйти</a>
//               </button>
//             </div>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default Header;
