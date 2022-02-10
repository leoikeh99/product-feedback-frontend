import React, { useState } from "react";
import * as F from "../../styles/FeedbackDetailStyles";
import * as W from "../../styles/widgets";
import * as B from "../../styles/widgets/Buttons";
import AddReply from "./AddReply";
import Reply from "./Reply";

export default function Comment({ comment: { attributes, id }, rpls }) {
  const [showAdd, setShowAdd] = useState(false);
  const [replies, setReplies] = useState(rpls);

  const addReply = (reply) => {
    setShowAdd(false);
    setReplies([...replies, reply]);
  };

  return (
    <F.Comment reply={replies.length !== 0}>
      <W.SpaceOut>
        <W.Flex gap={32}>
          <F.Avatar
            src="/assets/user-images/image-elijah.jpg"
            height={40}
            width={40}
          />

          <div>
            <F.Name>{attributes.user.data.attributes.username}</F.Name>
            <F.Text sm>@{attributes.user.data.attributes.username}</F.Text>
          </div>
        </W.Flex>
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
          addReply={addReply}
        />
      )}
      {replies.length !== 0 &&
        replies.map((reply) => (
          <Reply key={reply.id} reply={reply} addReply={addReply} />
        ))}
    </F.Comment>
  );
}
