import React, { useEffect, useState } from "react";
import * as F from "../styles/FeedbackItemStyles";
import * as W from "../styles/widgets";
import axios from "axios";
import Link from "next/link";

export default function FeedbackItem({ feedback: { attributes, id } }) {
  const [upvotes, setUpvotes] = useState(attributes.upvotes);

  const upvote = async () => {
    console.log("yes");
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    let upvts;
    if (!upvotes) {
      upvts = [1];
    } else {
      upvts = upvotes.some((val) => val === 1)
        ? upvotes.filter((val) => val !== 1)
        : [...upvotes, 1];
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
          active={upvotes && upvotes.some((val) => val === 1)}>
          {upvotes && upvotes.some((val) => val === 1) ? (
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
        {attributes.comments.data ? attributes.comments.data.length : 0}
      </F.RightSide>
    </F.Cover>
  );
}
