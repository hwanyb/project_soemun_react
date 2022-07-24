import React, { useEffect, useState } from "react";

export default function NoticeList({ setSelectedPost, noticeList }) {
  const onPostClick = (e, post) => {
    setSelectedPost(post);
  };
  return (
    <div>
      {noticeList.map((post, index) => (
        <div key={index} onClick={(e, index) => onPostClick(e, post)}>
          <p>{index + 1}</p>
          <p>{post.title}</p>
          <p>{post.date}</p>
        </div>
      ))}
    </div>
  );
}
