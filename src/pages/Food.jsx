import React from "react";
import styled from "styled-components";
import Title from "../components/common/Title";
import FoodContent from "../components/FoodContent";

const Base = styled.div`
`;

export default function Food() {
  return (
    <Base>
      <Title>먹거리</Title>
      <FoodContent />
    </Base>
  );
}
