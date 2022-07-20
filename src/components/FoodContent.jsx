import React, { useState } from "react";
import styled from "styled-components";
import Masonry from "react-masonry-css";

import { Icon, Noto300, Noto500, Noto700, PyeongBold } from "../style/Common";
import { foodArr } from "../assets/data";

const Base = styled.div``;
const FilterWrapper = styled.div``;
const FilterTag = styled(Noto700)``;
const FoodList = styled(Masonry)``;
const FoodItem = styled.div``;
const FoodImgWrapper = styled.div``;
const FoodImg = styled.img``;
const FoodTitle = styled(PyeongBold)``;
const FoodTag = styled(Noto700)``;
const FoodDesc = styled(Noto300)``;
const MenuContainer = styled.div``;
const MenuLabel = styled(Noto500)``;
const MenuWapper = styled.div``;
const MenuItem = styled.div``;
const MenuTitle = styled(Noto500)``;
const MenuPrice = styled(Noto700)``;
const LocationWrapper = styled.div``;
const LocationIcon = styled(Icon)``;
const LocationText = styled(Noto700)``;
export default function FoodContent() {
  const [foodList, setFoodList] = useState([...foodArr]);
  const tagArr = foodArr.map((food) => food.tag);
  const breakpointObj = {
    defalut: 4,
    1200: 3,
    700: 2,
  };
  const onFilterClick = (e) => {
    const selectedTag = e.target.innerHTML;
    const filteredArr = foodArr.filter((tag) => tag.tag == selectedTag);
    setFoodList(filteredArr);
  };
  return (
    <Base>
      <FilterWrapper onClick={(e) => onFilterClick(e)}>
        <FilterTag>전체</FilterTag>
        {tagArr
          .filter((v, i) => tagArr.indexOf(v) === i)
          .map((v) => (
            <FilterTag>{v}</FilterTag>
          ))}
      </FilterWrapper>
      <FoodList
        breakpointCols={breakpointObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {foodList.map((food, index) => (
          <FoodItem key={index}>
            <FoodImgWrapper>
              <FoodImg alt="음식이미지" src={food.image} />
            </FoodImgWrapper>
            <FoodTitle>{food.name}</FoodTitle>
            <FoodTag>{food.tag}</FoodTag>
            <FoodDesc>{food.desc}</FoodDesc>
            <MenuContainer>
              <MenuLabel>— 메뉴 —</MenuLabel>
              <MenuWapper className="flex">
                {food.menu.map((menu) => (
                  <MenuItem>
                    <MenuTitle>{menu.title}</MenuTitle>
                    <MenuPrice>{menu.price}</MenuPrice>
                  </MenuItem>
                ))}
              </MenuWapper>
            </MenuContainer>
            <LocationWrapper className="flex">
              <LocationIcon className="material-symbols-rounded">
                location_on
              </LocationIcon>
              <LocationText>매대 위치보기</LocationText>
            </LocationWrapper>
          </FoodItem>
        ))}
      </FoodList>
    </Base>
  );
}
