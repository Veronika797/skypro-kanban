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

.content {
  width: 100%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.loading {
  font-size: 28px;
  color: ${({ theme }) => theme.text};
}

.skeleton-container {
  width: 100%;
  display: flex;
  gap: 10px;
  margin: 0 auto;
  padding: 10px 0;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 1439px) {
  .skeleton-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

._btn-bor {
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565eef);
  outline: none;
  background: transparent;
  color: #565eef;
}
._btn-bg {
  border-radius: 4px;
  background: #565eef;
  border: none;
  outline: none;
  color: #ffffff;
}

._hide {
  display: none;
}

._dark {
  display: none;
}

.nocard {
  color: ${({ theme }) => theme.text};
}
`;

export default GlobalStyle;
