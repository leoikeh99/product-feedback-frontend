import React, { useContext, useState } from "react";
import * as F from "../styles/FeedbackItemStyles";
import * as W from "../styles/widgets";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";

export default function FeedbackItem({
  feedback: { attributes, id },
  updatedNum,
}) {
  const [upvotes, setUpvotes] = useState(attributes.upvotes);
  const { user } = useContext(AuthContext);

  const upvote = async () => {
    if (!user) {
      toast.error("You have to be logged in");
      return;
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    let upvts;
    if (!upvotes) {
      upvts = [user.id];
    } else {
      upvts = upvotes.some((val) => val === user.id)
        ? upvotes.filter((val) => val !== user.id)
        : [...upvotes, user.id];
    }
    setUpvotes(upvts);

    const data = {
      upvotes: upvts,
    };

    await axios
      .put(`http://localhost:1337/api/feedbacks/${id}`, { data }, config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <F.Cover>
      <W.Flex gap={40}>
        <W.UpvoteTag
          onClick={() => upvote()}
          active={user && upvotes && upvotes.some((val) => val === user.id)}>
          {user && upvotes && upvotes.some((val) => val === user.id) ? (
            <img src="/assets/shared/icon-arrow-up-light.svg" alt="" />
          ) : (
            <img src="/assets/shared/icon-arrow-up.svg" alt="" />
          )}
          {upvotes ? upvotes.length : 0}
        </W.UpvoteTag>
        <div>
          <Link href={`/feedback/${id}`}>
            <F.Title>{attributes.title}</F.Title>
          </Link>
          <F.Desc>{attributes.description}</F.Desc>
          <W.Tag>{attributes.tag}</W.Tag>
        </div>
      </W.Flex>
      <F.RightSide>
        <img src="/assets/shared/icon-comments.svg" alt="" />
        {updatedNum
          ? updatedNum
          : attributes.comments.data
          ? attributes.comments.data.length + attributes.replies.data.length
          : 0}
      </F.RightSide>
    </F.Cover>
  );
}
