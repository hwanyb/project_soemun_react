import React from 'react'

export default function NoticeDetail({ selectedPost, setSelectedPost }) {
    const onListClick = () => {
        setSelectedPost(null);
    }
  return (
    <>
    <div onClick={onListClick}>목록</div>
    <h1>{selectedPost.title}</h1>
    <p>{selectedPost.date}</p>
    <p style={{whiteSpace:"pre"}}>{selectedPost.body}</p>
    </>
  )
}
