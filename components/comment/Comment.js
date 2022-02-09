import React from "react";
import * as F from "../../styles/FeedbackDetailStyles";
import * as W from "../../styles/widgets";
import * as B from "../../styles/widgets/Buttons";
import Reply from "./Reply";

export default function Comment({ comment: { attributes }, reply }) {
  return (
    <F.Comment reply={reply}>
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
        <B.ButtonLink>Reply</B.ButtonLink>
      </W.SpaceOut>
      <F.Desc>
        <F.Text>{attributes.message}</F.Text>
      </F.Desc>
      {reply && <Reply />}
    </F.Comment>
  );
}
