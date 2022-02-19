import React, { useState } from "react";
import * as F from "../../styles/FeedbackDetailStyles";
import * as W from "../../styles/widgets";
import * as B from "../../styles/widgets/Buttons";
import AddReply from "./AddReply";
import Reply from "./Reply";

export default function Comment({
  comment: { attributes, id },
  replies,
  addReply,
  token,
}) {
  const [showAdd, setShowAdd] = useState(false);

  const add = (reply) => {
    setShowAdd(false);
    addReply(reply);
  };

  return (
    <F.Comment reply={replies.length !== 0}>
      <W.SpaceOut>
        <F.TopSection>
          <F.Avatar
            src={attributes.user.data.attributes.avatar}
            height={40}
            width={40}
          />

          <div>
            <F.Name>{attributes.user.data.attributes.username}</F.Name>
            <F.Text sm>@{attributes.user.data.attributes.username}</F.Text>
          </div>
        </F.TopSection>
        <B.ButtonLink onClick={() => setShowAdd(!showAdd)}>
          {!showAdd ? "Reply" : "Cancel"}
        </B.ButtonLink>
      </W.SpaceOut>
      <F.Desc>
        <F.Text>{attributes.message}</F.Text>
      </F.Desc>
      {showAdd && (
        <AddReply
          commentId={id}
          reply_to={attributes.user.data.id}
          feedbackId={attributes.feedback.data.id}
          token={token}
          addReply={add}
        />
      )}
      {replies.length !== 0 &&
        replies.map((reply) => (
          <Reply key={reply.id} reply={reply} addReply={add} token={token} />
        ))}
    </F.Comment>
  );
}
