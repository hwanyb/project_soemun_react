import React, { useState } from "react";
import styled from "styled-components";
import { Noto300 } from "../../style/Common";

const NoticeForm = styled.form`
  width: 100%;
  text-align: left;
`;
const Label = styled(Noto300)`
  color: #081435;
  font-size: 14px;
  margin-bottom: 10px;
`;
const TitleInput = styled.input`
  color: #081435;
  font-size: 16px;
  border: 1px solid #ffc806;
  width: 100%;
  padding: 5px 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;
const BodyInput = styled.textarea`
  color: #081435;
  font-size: 16px;
  border: 1px solid #ffc806;
  width: 100%;
  min-height: 200px;
  padding: 5px 20px;
  border-radius: 15px;
  margin-bottom: 50px;
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const FormBtn = styled.button`
  background-color: ${(props) => (props.disabled ? "#d9d9d9" : "#ffc806")};
  color: ${(props) => (props.disabled ? "#b1b1b1" : "#081435")};
  transition: all 0.2s ease-in-out;
  &:first-child {
    margin-right: 20px;
  }
  &:hover {
    background-color: ${(props) => (props.disabled ? "#d9d9d9" : "#ff9900")};
  }
`;
export default function NoticeWriting({ setMainView, noticeList }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onCancleClick = () => {
    setMainView("list");
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    if (name === "title") setTitle(value);
    else setBody(value);
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
    await localStorage.setItem("noticeArr", JSON.stringify(newNoticeList));
    setMainView("list");

  };
  return (
      <NoticeForm onSubmit={(e) => onSubmit(e)}>
        <Label>제목</Label>
        <TitleInput
          name="title"
          type="text"
          placeholder="제목을 입력해 주세요."
          onChange={onChange}
        />
        <Label>내용</Label>
        <BodyInput onChange={(e) => onChange(e)} name="body" />
        <BtnWrapper>
          <FormBtn type="submit" disabled={title.length < 1 || body.length < 1}>
            저장
          </FormBtn>
          <FormBtn onClick={onCancleClick}>취소</FormBtn>
        </BtnWrapper>
      </NoticeForm>
  );
}
