import React, { useState } from "react";
import styled from "styled-components";
import Masonry from "react-masonry-css";

import { Icon, Noto300, Noto500, Noto700, PyeongBold } from "../style/Common";
import { foodArr } from "../assets/data";
import Map from "./common/Map";

const Base = styled.div`
  padding: 0 200px;
  margin-top: 50px;
`;
const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  padding: 20px 0;
  border-top: 1px solid #ffc806;
  border-bottom: 1px solid #ffc806;
`;
const FilterTag = styled(Noto700)`
  width: fit-content;
  background-color: #ffc806;
  color: #081435;
  font-size: 18px;
  padding: 5px 20px;
  white-space: nowrap;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 40px;
  &:last-child {
    margin-right: 0;
  }
`;
const FoodList = styled(Masonry)`
  width: 100%;
`;
const FoodItem = styled.div`
  height: fit-content;
  border-radius: 20px;
  background-color: #fff;
  padding: 20px;
  text-align: center;
  margin-bottom: 30px;
  box-shadow: 2px 2px 5px #08143563; ;
`;
const FoodImgWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;
const FoodImg = styled.img`
  width: 100%;
`;
const FoodTitle = styled(PyeongBold)`
  font-size: 24px;
  color: #081435;
  margin: 20px 0;
  border-bottom: 1px solid #ffc806;
  padding-bottom: 10px;
`;
const FoodTag = styled(Noto700)`
  width: fit-content;
  background-color: #ffc806;
  color: #081435;
  font-size: 14px;
  padding: 5px 10px;
  white-space: nowrap;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 10px;
`;
const FoodDesc = styled(Noto300)`
  color: #081435;
  font-size: 14px;
  margin-bottom: 20px;
`;
const MenuContainer = styled.div`
  border-bottom: 1px solid #ffc806;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;
const MenuLabel = styled(Noto500)`
  color: #081435;
  font-size: 14px;
  margin-bottom: 20px;
`;
const MenuWapper = styled.div`
  justify-content: center;
  padding: 0 20px;
`;
const MenuItem = styled.div`
  margin-right: 50px;
  &:last-child {
    margin-right: 0;
  }
`;
const MenuTitle = styled(Noto500)`
  color: #081435;
`;
const MenuPrice = styled(Noto700)`
  color: #ff9900;
  margin-top: 10px;
`;
const LocationWrapper = styled.div`
  width: fit-content;
  cursor: pointer;
  line-height: 20px;
  margin: 0 auto;
  padding: 5px 20px;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #ff9900;
  }
`;
const LocationIcon = styled(Icon)`
  font-size: 20px;
  color: #081435;
  &:hover {
    background-color: transparent;
    color: #081435;
  }
`;
const LocationText = styled(Noto700)`
  font-size: 14px;
  color: #081435;
`;

const MapModal = styled.div`
  position: absolute;
  top: ${(props) => `${props.currentScrollTop}px`};
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #081435a0;
  padding: 200px;
  backdrop-filter: blur(5px);
`;
const CloseBtn = styled(Icon)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 50px;
  cursor: pointer;
  color: #ffc806;
  &:hover {
    transform: rotate(90deg);
    color: #ff9900;
  }
`;
export default function FoodContent() {
  const [foodList, setFoodList] = useState([...foodArr]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentScrollTop, setCurrentScrollTop] = useState(0);

  const tagArr = foodArr.map((food) => food.tag);
  const onFilterClick = (e) => {
    const selectedTag = e.target.innerHTML;
    if (selectedTag === "전체") {
      let filteredArr = [...foodArr];
      setFoodList(filteredArr);
    } else {
      let filteredArr = foodArr.filter((tag) => tag.tag === selectedTag);
      setFoodList(filteredArr);
    }
  };
  const onLocationClick = (e) => {
    setShowModal(true);
    setSelectedLocation(e.target.id);
    setCurrentScrollTop(window.scrollY);
    document.body.style.overflowY = "hidden";
  };
  const onCloseModalClick = () => {
    setShowModal(false);
    document.body.style.overflowY = "scroll";
  };
  return (
    <Base>
      <FilterWrapper onClick={(e) => onFilterClick(e)}>
        <FilterTag>전체</FilterTag>
        {tagArr
          .filter((v, i) => tagArr.indexOf(v) === i)
          .map((v, index) => (
            <FilterTag key={index}>{v}</FilterTag>
          ))}
      </FilterWrapper>
      <FoodList
        breakpointCols={3}
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
                {food.menu.map((menu, index) => (
                  <MenuItem key={index}>
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
              <LocationText
                onClick={(e) => onLocationClick(e)}
                id={food.location}
              >
                매대 위치보기
              </LocationText>
            </LocationWrapper>
          </FoodItem>
        ))}
      </FoodList>
      {showModal && (
        <MapModal currentScrollTop={currentScrollTop}>
          <CloseBtn
            className="material-symbols-rounded"
            onClick={onCloseModalClick}
          >
            close
          </CloseBtn>
          <Map name={selectedLocation} />
        </MapModal>
      )}
    </Base>
  );
}
