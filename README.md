![Group 27](https://user-images.githubusercontent.com/80311884/220831563-5ad097b0-e260-42d5-94fe-be68d48cdb32.png)

# 서문시장 야시장 웹사이트

리뉴얼 기획, 웹디자인, 프론트엔드 작업
2021년 4월에 `html`, `css`, `jQuery`, `php` 로 진행한 프로젝트를 `react` 로 리팩토링하며 진행한 프로젝트입니다.

야시장의 이미지와 어울리는 컬러와 웹디자인, 로고 등을 제작하여 그에 따른 반응형 퍼블리싱으로 작업을 진행하였습니다.

localStorage를 활용해 공지사항을 작성 • 확인할 수 있는 기능을 구현하였습니다.

## 작업기간
    2022-07-12 ~ 2022-07-30 (약 2주 소요)

## 미리보기

![서문시장-야시장](https://user-images.githubusercontent.com/80311884/220832410-c29359ae-ca1e-415e-947a-6c8e6c5447a4.png)

## 데모 페이지
서문시장 야시장 기존 웹사이트 : 🔗[서문시장 야시장](https://www.nightseomun.com/html/index.php)
🔗 [데모페이지로 이동하기](https://hwanyb.github.io/seomunnight/)

## 설치 방법
```
$ git clone https://github.com/hwanyb/seomunnight.git
$ cd repository
$ npm install
$ npm start
```

## 기술 스택
<img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=black">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

## 기능 소개

- 이 웹페이지는 반응형으로 구현되어있습니다.
- 홈 페이지
    - 서문시장 야시장의 간단한 소개와 함께 Introduce 페이지로 이동하는 Link 버튼을 구현했습니다.
    - 투어미션, 스마트폰 주문 페이지로 이동할 수 있는 Link 버튼을 구현했습니다.
    - 서문시장 야시장의 다양한 사진들을 swiper로 구현했습니다.
    - 서문시장 야시장의 다양한 먹거리를 미리보기 할 수 있는 섹션을 구현했습니다.
    - 운영시간 섹션을 구현했습니다.
- 소개 페이지
    - 유일하게 LNB가 존재하는 페이지로 소개, 운영시간, 오시는 길을 조건부렌더링으로 구현했습니다.
    - 소개
        - 서문시장 야시장의 소개를 구현했습니다.
        - `react-scroll-animation` 라이브러리를 활용해 동적인 요소를 구현했습니다.
    - 오시는 길
        - 카카오맵 url으로 이동할 수 있는 지도를 이미지로 구현했습니다.
        - 주변 지하철, 주변 정류장을 클릭하면 지하철 역, 정류장 정보로 이동할 수 있는 기능을 구현했습니다. 
- 먹거리 페이지
    - `data.js` 파일에 저장된 객체 배열로 음식 정보를 가져와 음식 리스트를 구현했습니다.
    - 이미지의 비율이 제각각이라 `masonry`레이아웃으로 리스트를 구현해 원본이미지의 가로세로비가 유지되도록 하였습니다.
    - 매대 위치 보기 버튼을 누르면 모달창에서 매대 위치를 볼 수 있게 구현했습니다.
    - 음식의 태그로 음식들을 필터링할수 있는 기능을 구현했습니다.
- 거리예술학교 페이지
    - 소개 페이지와 동일하게 서문시장 야시장에서 제공하는 다양한 예술활동들에 대해 소개하는 페이지를 구현했습니다.
- 공지사항 페이지
    - `data.js` 파일에 저장된 공지사항 리스트를 가져와 공지사항 리스트를 구현했습니다.
    - `data.js` 의 공지사항 리스트를 로컬스토리지에 저장하고 글을 작성하면 새로운 리스트를 저장해 공지리스트에 반영되도록 구현했습니다.
    - 작성된 공지를 확인할 수 있는 컴포넌트를 구현했습니다.

## 디렉토리 구조
```
seomunnight
│  .gitignore
│  package-lock.json
│  package.json
│  README.md
│          
├─public
│      index.html
│      favicon
└─src
    │  App.js
    │  index.js
    │  
    ├─assets
    │      data.js
    │      
    ├─components
    │  │  ArtSchoolContent.jsx
    │  │  FoodContent.jsx
    │  │  
    │  ├─common
    │  │      Background.jsx
    │  │      Footer.jsx
    │  │      Header.jsx
    │  │      LNB.jsx
    │  │      Map.jsx
    │  │      ScrollToTop.jsx
    │  │      SNB.jsx
    │  │      Subtitle.jsx
    │  │      Title.jsx
    │  │      
    │  ├─Introduce
    │  │      IntroduceMain.jsx
    │  │      OperatingTime.jsx
    │  │      WayToCome.jsx
    │  │      
    │  ├─Notice
    │  │      NoticeContent.jsx
    │  │      NoticeDetail.jsx
    │  │      NoticeList.jsx
    │  │      NoticeWriting.jsx
    │  │      
    │  └─svg
    │          Cloud.jsx
    │          Star.jsx
    │          
    ├─pages
    │      ArtSchool.jsx
    │      Food.jsx
    │      Home.jsx
    │      Introduce.jsx
    │      Notice.jsx
    │      
    └─style
            Common.js
            GlobalStyle.js
```


## 배운 것들

- `localStorage`에 `setItem`을 할 때, 배열이나 객체형태로 저장할 수 없다는 것을 배웠습니다.
    
    `JSON.stringify()`로 문자열로 변환하여 저장할 수 있습니다.

    저장된 아이템을 getItem 할 때에는 JSON.parse() 를 통해 다시 객체, 배열 형태로 변환할 수있습니다.
- 컴포넌트를 조건부렌더링 하고자 할 때 여러개의 조건문이 있을 경우 `switch`문을 활용하면 가독성있게 코드를 작성할 수 있음을 배웠습니다.


## 버그 및 문제점

- SameSite 이슈
    - `Indicate whether to send a cookie in a cross-site request by specifying its SameSite attribute` 에러가 발생되고 있습니다.
    - 2020.2.4 구글 크롬(Google Chrome) 80버전으로 업데이트되면서 크롬에 새로운 쿠키 정책이 적용되었습니다. 내용은 Cookie의 SameSite 속성의 기본 값이 "None"에서 "Lax"로 보안등급을 상향 조절하는 것입니다.
- `react-router-dom` 으로 라우팅 기능을 구현하였는데 github pages 에 배포했을때 라우팅한 페이지가 렌더링되지 않는 에러가 있었습니다. BrowserRouter에 basename을 추가해 해결할 수 있었습니다.

## 개선사항

- SameSite 이슈에 대한 디버깅이 필요합니다.
