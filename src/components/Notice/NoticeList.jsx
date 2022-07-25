import React, { useState } from "react";
import styled from "styled-components";
import { Noto300, Noto700 } from "../../style/Common";

const ListWrapper = styled.ul`
  max-width: 1600px;
  padding: 0 200px 100px 200px;
  margin: 0 auto;
`;
const ListItem = styled.li`
  padding: 0 50px;
  display: grid;
  grid-template-columns: 50px 2fr 1fr;
  line-height: 50px;
  border-bottom: 1px solid #ffc806;
  color: #081435;
  text-align: left;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #ffc90686;
  }
`;
const ItemIndex = styled(Noto300)``;
const ItemTitle = styled(Noto700)``;
const ItemDate = styled(Noto300)`
  text-align: right;
`;

export default function NoticeList({
  noticeList,
  setSelectedPost,
  setMainView,
}) {
  const onPostClick = (e, post) => {
    const copy = { ...post };
    setSelectedPost(copy);
    setMainView("detail");
  };
  return (
    <ListWrapper>
      {noticeList.map((post, index) => (
        <ListItem key={index} onClick={(e) => onPostClick(e, post)}>
          <ItemIndex>{index + 1}</ItemIndex>
          <ItemTitle>{post.title}</ItemTitle>
          <ItemDate>{post.date}</ItemDate>
        </ListItem>
      ))}
    </ListWrapper>
  );
}
