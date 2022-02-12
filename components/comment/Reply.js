import React, { useState } from "react";
import * as F from "../../styles/FeedbackDetailStyles";
import * as W from "../../styles/widgets";
import * as B from "../../styles/widgets/Buttons";
import AddReply from "./AddReply";

export default function Reply({ reply: { attributes }, addReply, token }) {
  const [showAdd, setShowAdd] = useState(false);

  const add = (reply) => {
    setShowAdd(false);
    addReply(reply);
  };

  return (
    <F.Reply>
      <W.SpaceOut>
        <W.Flex gap={32}>
          <F.Avatar
            src={attributes.user.data.attributes.avatar}
            height={40}
            width={40}
          />

          <div>
            <F.Name>{attributes.user.data.attributes.username}</F.Name>
            <F.Text sm>@{attributes.user.data.attributes.username}</F.Text>
          </div>
        </W.Flex>
        <B.ButtonLink onClick={() => setShowAdd(!showAdd)}>Reply</B.ButtonLink>
      </W.SpaceOut>
      <F.Desc>
        <F.Text>
          <W.At>@{attributes.reply_to.data.attributes.username}</W.At>{" "}
          {attributes.message}
        </F.Text>
      </F.Desc>
      {showAdd && (
        <AddReply
          commentId={attributes.comment.data.id}
          reply_to={attributes.user.data.id}
          feedbackId={attributes.feedback.data.id}
          token={token}
          addReply={add}
        />
      )}
    </F.Reply>
  );
}
