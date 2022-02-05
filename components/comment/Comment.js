import React from "react";
import * as F from "../../styles/FeedbackDetailStyles";
import * as W from "../../styles/widgets";
import * as B from "../../styles/widgets/Buttons";
import Reply from "./Reply";

export default function Comment({ reply }) {
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
            <F.Name>Elijah Moss</F.Name>
            <F.Text sm>@hexagon.bestagon</F.Text>
          </div>
        </W.Flex>
        <B.ButtonLink>Reply</B.ButtonLink>
      </W.SpaceOut>
      <F.Desc>
        <F.Text>
          Also, please allow styles to be applied based on system preferences. I
          would love to be able to browse Frontend Mentor in the evening after
          my device's dark mode turns on without the bright background it
          currently has.
        </F.Text>
      </F.Desc>
      {reply && <Reply />}
    </F.Comment>
  );
}
