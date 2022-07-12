import React from 'react';
import { Link } from 'react-router-dom';

import ArtSchool from '../../pages/ArtSchool';
import Food from '../../pages/Food';
import Introduce from '../../pages/Introduce';
import Notice from '../../pages/Notice';

export default function Header() {
  return (
    <header>
        <div>
            <Link to='/'>
                <img src="https://hwanyb.github.io/project_seomun/img/Artboard%203.png" alt="header_logo" />
            </Link>
        </div>
        <nav>
            <Link to='/introduce'>소개</Link>
            <Link to='/food'>먹거리</Link>
            <Link to='artschool'>거리예술학교</Link>
            <Link to='notice'>참여마당</Link>
        </nav>
    </header>
  )
}
