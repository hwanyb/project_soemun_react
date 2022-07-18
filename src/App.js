import React from 'react';
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

function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
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
