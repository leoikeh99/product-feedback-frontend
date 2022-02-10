import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import * as F from "../../styles/FeedbackDetailStyles";
import * as W from "../../styles/widgets";
import * as B from "../../styles/widgets/Buttons";
import { Loader1 } from "../../styles/LoaderStyles";

export default function AddComment({ feedback, addComment }) {
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (message.trim() === "") return;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = { message, feedback: feedback.id, user: 3 };

    setLoader(true);
    await axios
      .post("http://localhost:1337/api/comments/", { data }, config)
      .then(async (res) => {
        await axios
          .get(
            `http://localhost:1337/api/comments/${res.data.data.id}/?populate=*`
          )
          .then((res2) => {
            addComment(res2.data.data);
          })
          .catch((err) => {
            setLoader(false);
            console.log(err);
          });
        setLoader(false);
      })
      .catch((err) => {
        setLoader(false);
        console.log(err);
      });
  };
  return (
    <F.AddCommentWrapper>
      {loader && <Loader1 />}
      <F.Header>Add Comment</F.Header>
      <form onSubmit={handleSubmit}>
        <TextArea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your comment here"
        />
        <W.SpaceOut>
          <F.Text>250 Characters left</F.Text>
          <B.Button type="submit" bg="purple">
            Post Comment
          </B.Button>
        </W.SpaceOut>
      </form>
    </F.AddCommentWrapper>
  );
}

const TextArea = styled.textarea`
  font-family: "Jost", sans-serif;
  width: 100%;
  height: 80px;
  font-size: 15px;
  color: #3a4374;
  background: #f7f8fd;
  border-radius: 5px;
  padding: 16px 24px;
  margin-top: 24px;
  margin-bottom: 16px;
  border: 0;
  resize: none;

  ::placeholder,
  ::-webkit-input-placeholder {
    font-family: "Jost", sans-serif;
    color: #8c92b3;
  }
`;
