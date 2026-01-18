import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 #root {
    margin: 0 auto;
    text-align: center;
    background-color: ${({ theme }) => theme.bodyBg};
    min-height: 100vh;
    color: ${({ theme }) => theme.text};
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.bodyBg};
    color: ${({ theme }) => theme.text};
    font-family: "Roboto", sans-serif;
    // transition: background-color 0.3s ease, color 0.3s ease;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  button, ._btn, input, textarea, select {
    font-family: inherit;
    cursor: pointer;
    outline: none;
    border: none;
  }

  ul li {
    list-style: none;
  }

  button, input, textarea, select {
    background-color: ${({ theme }) => theme.inputBg};
    color: ${({ theme }) => theme.text};
    border: ${({ theme }) => theme.border};
  }

  input, textarea {
    padding: 14px;
    border-radius: 8px;
    font-size: 14px;
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }

@keyframes card-animation {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
}

  .calendar-cell:hover {
    background-color: ${({ theme }) => theme.calendarCellHover};
  }

  .calendar-cell.active {
    background-color: ${({ theme }) => theme.calendarCellActive};
    color: #fff;
  }

  ._hover01:hover {
    background-color: #33399b;
  }
  ._hover02:hover,
  .header__user:hover {
    color: #33399b;
  }
  ._hover02:hover::after,
  .header__user:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
  ._hover03:hover {
    background-color: #33399b;
    color: #ffffff;
  }
  ._hover03:hover a {
    color: #ffffff;
  }

  .pop-user-set:target,
  .pop-exit:target,
  .pop-new-card:target,
  .pop-browse:target {
    display: block;
  }

  ._active-category {
    opacity: 1 !important;
  }  
`;

export default GlobalStyle;
