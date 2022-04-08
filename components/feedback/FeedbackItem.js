import React, { useContext, useState } from "react";
import * as F from "../../styles/FeedbackItemStyles";
import * as W from "../../styles/widgets";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";
import AuthContext from "../../context/AuthContext";
import { BASE_URL } from "../../config";

export default function FeedbackItem({
  feedback: { attributes, id },
  updatedNum,
  token,
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
        Authorization: `Bearer ${token}`,
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
      .put(`${BASE_URL}/api/feedbacks/${id}`, { data }, config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <F.Cover>
      <F.Desk>
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
            : attributes.comments.data && attributes.replies
            ? attributes.comments.data.length + attributes.replies.data.length
            : attributes.comments.data && !attributes.replies
            ? attributes.comments.data.length
            : 0}
        </F.RightSide>
      </F.Desk>
      <F.Mob>
        <Link href={`/feedback/${id}`}>
          <F.Title>{attributes.title}</F.Title>
        </Link>
        <F.Desc>{attributes.description}</F.Desc>
        <W.Tag>{attributes.tag}</W.Tag>
        <W.Margin m={16} />
        <W.SpaceOut>
          <F.UpvoteTag2
            onClick={() => upvote()}
            status={user && upvotes && upvotes.some((val) => val === user.id)}>
            {user && upvotes && upvotes.some((val) => val === user.id) ? (
              <img src="/assets/shared/icon-arrow-up-light.svg" alt="" />
            ) : (
              <img src="/assets/shared/icon-arrow-up.svg" alt="" />
            )}
            {upvotes ? upvotes.length : 0}
          </F.UpvoteTag2>
          <F.RightSide>
            <img src="/assets/shared/icon-comments.svg" alt="" />
            {updatedNum
              ? updatedNum
              : attributes.comments.data && attributes.replies
              ? attributes.comments.data.length + attributes.replies.data.length
              : attributes.comments.data && !attributes.replies
              ? attributes.comments.data
              : 0}
          </F.RightSide>
        </W.SpaceOut>
      </F.Mob>
    </F.Cover>
  );
}
