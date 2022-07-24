import React, { useEffect, useState } from "react";
import { noticeArr } from "../assets/data";

export default function NoticeList({setSelectedPost}) {
  const [noticeList, setNoticeList] = useState([]);
  
  const sortedList = noticeArr
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .reverse();

  useEffect(() => {
    localStorage.setItem("noticeArr", JSON.stringify(sortedList));
    const getList = JSON.parse(localStorage.getItem("noticeArr"));
    setNoticeList(getList);
  }, []);

  const onPostClick = (e, post) => {
    setSelectedPost(post)
  }
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
