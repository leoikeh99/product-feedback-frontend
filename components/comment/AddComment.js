import React from "react";
import styled from "styled-components";
import * as F from "../../styles/FeedbackDetailStyles";
import * as W from "../../styles/widgets";
import * as B from "../../styles/widgets/Buttons";

export default function AddComment() {
  return (
    <F.AddCommentWrapper>
      <F.Header>Add Comment</F.Header>
      <form>
        <TextArea placeholder="Type your comment here" />
        <W.SpaceOut>
          <F.Text>250 Characters left</F.Text>
          <B.Button type="button" bg="purple">
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
