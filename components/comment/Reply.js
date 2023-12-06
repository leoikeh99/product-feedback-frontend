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
        <F.TopSection gap={32}>
          <F.Avatar
            src={`https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=${attributes.user.data.attributes.username}`}
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
