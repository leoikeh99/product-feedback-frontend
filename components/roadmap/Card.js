import Link from "next/link";
import React, { useContext, useState } from "react";
import * as R from "../../styles/RoadmapStyles";
import * as W from "../../styles/widgets";
import { Draggable } from "react-beautiful-dnd";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import { BASE_URL } from "../../config";

export default function Card({ feedback: { attributes, id }, index, token }) {
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
    <Draggable draggableId={id.toString()} index={index}>
      {(provided) => (
        <R.CardCover
          status={attributes.status}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}>
          <W.Flex gap={16}>
            <R.Dot status={attributes.status} />
            <R.Text2>{attributes.status}</R.Text2>
          </W.Flex>
          <W.Margin m={8} />
          <Link href={`/feedback/${id}?from=roadmap`}>
            <R.Text1 link>{attributes.title}</R.Text1>
          </Link>
          <R.Text2>{attributes.description}</R.Text2>
          <W.Margin m={16} />
          <W.Tag>{attributes.tag}</W.Tag>
          <W.Margin m={16} />
          <W.SpaceOut>
            {user && (
              <R.UpvoteTag
                onClick={upvote}
                status={upvotes.some((val) => val === user.id)}>
                {upvotes.some((val) => val === user.id) ? (
                  <img src="/assets/shared/icon-arrow-up-light.svg" alt="" />
                ) : (
                  <img src="/assets/shared/icon-arrow-up.svg" alt="" />
                )}
                {upvotes.length}
              </R.UpvoteTag>
            )}
            <R.Cmts>
              <img src="/assets/shared/icon-comments.svg" alt="" />
              {attributes.comments.data.length + attributes.replies.data.length}
            </R.Cmts>
          </W.SpaceOut>
        </R.CardCover>
      )}
    </Draggable>
  );
}
