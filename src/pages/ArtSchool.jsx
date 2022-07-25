import React from "react";
import styled from "styled-components";
import ArtSchoolContent from "../components/ArtSchoolContent";
import Title from "../components/common/Title";

const Base = styled.div`
  position: relative;
  top: 70px;
  text-align: center;
`;
const ContentWrapper = styled.div`
  padding: 0 200px;
`;
export default function ArtSchool() {
  return (
    <Base>
      <Title>거리예술학교</Title>
      <ContentWrapper>
        <ArtSchoolContent />
      </ContentWrapper>
    </Base>
  );
}
