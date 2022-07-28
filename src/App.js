import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/common/Footer';
import Header from './components/common/Header';
import SNB from './components/common/SNB';
import ArtSchool from './pages/ArtSchool';
import Food from './pages/Food';
import Home from './pages/Home';
import Introduce from './pages/Introduce';
import Notice from './pages/Notice';
import GlobalStyle from './style/GlobalStyle';
import { noticeArr } from './assets/data';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  if (localStorage.getItem("noticeArr") === null) {
    const sortedList = noticeArr
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .reverse();
    localStorage.setItem("noticeArr", JSON.stringify(sortedList));
  }

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <SNB />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/introduce' element={<Introduce />} />
          <Route path='/food' element={<Food />} />
          <Route path='/artschool' element={<ArtSchool />} />
          <Route path='/notice' element={<Notice />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
