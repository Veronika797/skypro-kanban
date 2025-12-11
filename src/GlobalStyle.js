import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
#root {
  margin: 0 auto;
  text-align: center;
  background-color: #eaeef6;
  min-height: 100vh;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}


.read-the-docs {
  color: #888;
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

button,
._btn {
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
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
html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #000000;
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
