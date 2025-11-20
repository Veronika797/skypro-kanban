const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo"></img>
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo"></img>
            </a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
            <a href="#user-set-target" className="header__user _hover02">
              Ivan Ivanov
            </a>
            <div
              className="header__pop-user-set pop-user-set"
              id="user-set-target"
            >
              <a className="pop-user-set-close" href="#">
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
              <button type="button" className="_hover03">
                <a href="#popExit">Выйти</a>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

// import style from "./Header.module.css";

// const Header = () => {
//   return (
//     <header className={style.header}>
//       <div className={style.container}>
//         <div className={style.block}>
//           <div className={`${style.logo} ${style.show} ${style.light}`}>
//             <a href="" target="_self">
//               <img src="images/logo.png" alt="logo"></img>
//             </a>
//           </div>
//           <div className={`${style.logo} ${style.dark}`}>
//             <a href="" target="_self">
//               <img src="images/logo_dark.png" alt="logo"></img>
//             </a>
//           </div>
//           <nav className={style.headerNav}>
//             <button
//               className={`${style.btnHover} ${style.hover01}`}
//               id="btnMainNew"
//             >
//               <a href="#popNewCard">Создать новую задачу</a>
//             </button>
//             <a
//               href="#user-set-target"
//               className={`${style.user} ${style.hover02}`}
//             >
//               Ivan Ivanov
//             </a>
//             <div
//               className={`${style.popuser} "pop-user-set"`}
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
//               <button type="button" className={style.hover03}>
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
