import React, { useState } from "react";
import Subtitle from "../common/Subtitle";

export default function NoticeWriting({
  setIsWriting,
  noticeList,
  setNoticeList,
}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [postObj, setPostObj] = useState({});
  // console.log(noticeList)

  const onCancleClick = () => {
    setIsWriting(false);
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") setTitle(value);
    else setBody(value);

    console.log(title, body);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const newNoticeList = [...noticeList];
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(
      now.getMonth() + 1,
    ).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;

    newNoticeList.unshift({
      title: title,
      body: body,
      date: formattedDate,
    });
    console.log(newNoticeList);
    await localStorage.setItem("noticeArr", JSON.stringify(newNoticeList));
    setIsWriting(false);
  };
  return (
    <div>
      <Subtitle>글 작성</Subtitle>
      <form onSubmit={(e) => onSubmit(e)}>
        <label>제목</label>
        <input
          name="title"
          type="text"
          placeholder="제목을 입력해 주세요."
          onChange={onChange}
        />
        <label>내용</label>
        <textarea onChange={(e) => onChange(e)} name="body" />
        <button type="submit" disabled={title.length < 1 || body.length < 1}>
          저장
        </button>
        <button onClick={onCancleClick}>취소</button>
      </form>
    </div>
  );
}
