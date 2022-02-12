import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Button } from "../../styles/widgets/Buttons";
import { getIn } from "../../styles/animations";
import { toast } from "react-toastify";
import axios from "axios";
import AuthContext from "../../context/AuthContext";
import BtnLoader from "../BtnLoader";

export default function AddReply({
  commentId,
  reply_to,
  feedbackId,
  addReply,
  token,
}) {
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const { user } = useContext(AuthContext);

  const handleClick = async () => {
    if (message.trim() === "") return;

    if (!user) {
      toast.error("You have to be logged in");
      return;
    }

    const data = {
      message,
      reply_to,
      comment: commentId,
      feedback: feedbackId,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    setLoader(true);

    await axios
      .post("http://localhost:1337/api/replies/", { data }, config)
      .then(async (res) => {
        await axios
          .get(
            `http://localhost:1337/api/replies/${res.data.data.id}/?populate=*`
          )
          .then((res2) => {
            addReply(res2.data.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });

    setLoader(false);
  };

  return (
    <ReplyCover>
      <TextArea value={message} onChange={(e) => setMessage(e.target.value)} />
      <div style={{ width: "100%", maxWidth: "fit-content" }}>
        <Button onClick={handleClick} bg="purple">
          <BtnLoader loader={loader} />
          Post Reply
        </Button>
      </div>
    </ReplyCover>
  );
}

const ReplyCover = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;
  margin-left: 70px;
  animation: ${getIn} ease-in 0.2s forwards;
`;

const TextArea = styled.textarea`
  font-family: "Jost", sans-serif;
  width: 100%;
  max-width: 461px;
  height: 80px;
  font-size: 15px;
  color: #3a4374;
  background: #f7f8fd;
  border-radius: 5px;
  padding: 16px 24px;
  border: 1px solid #f7f8fd;
  resize: none;

  &:focus {
    border: 1px solid #4661e6;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    font-family: "Jost", sans-serif;
    color: #8c92b3;
  }
`;
