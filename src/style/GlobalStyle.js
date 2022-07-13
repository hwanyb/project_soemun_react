import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${normalize}
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
@font-face {
    font-family: 'Noto Sans KR', sans-serif;
    src: url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700;900&display=swap') format('woff2');
    font-weight: 300, 500, 700, 900;
    font-style: normal;
}
`;

export default GlobalStyle;