import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
@font-face {
    font-family: 'PyeongChangPeace-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
@font-face {
    font-family: 'PyeongChangPeace-light';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: 'Noto Sans KR', sans-serif;
    overflow-x: hidden;
}

button {
    border: none;
    outline: none;
    background-color: transparent;
    font-family: 'Noto Sans KR', sans-serif;
    padding: 3px 20px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
}
a {
    text-decoration: none;
    display: block;
}
input {
    border: none;
    outline: none;
    font-family: 'Noto Sans KR', sans-serif;
    display: block;
}
textarea {
    border: none;
    outline: none;
    font-family: 'Noto Sans KR', sans-serif;
    resize: none;
    display: block;

}
.flex {
    display: flex;
}
.my-masonry-grid {
  display: -webkit-box; /* Not needed if autoprefixing */
  display: -ms-flexbox; /* Not needed if autoprefixing */
  display: flex;
  margin-left: -30px; /* gutter size offset */
  width: fit-content;
}
.my-masonry-grid_column {
  padding-left: 30px; /* gutter size */
  background-clip: padding-box;
}
`;

export default GlobalStyle;