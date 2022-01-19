import React from "react";
import * as F from "../styles/FeedbackItemStyles";
import * as W from "../styles/widgets";

export default function FeedbackItem() {
  return (
    <F.Cover>
      <W.Flex gap={40}>
        <W.UpvoteTag>
          <img src="/assets/shared/icon-arrow-up.svg" alt="" />
          112
        </W.UpvoteTag>
        <div>
          <F.Title>Add tags for solutions</F.Title>
          <F.Desc>
            Easier to search for solutions based on a specific stack.
          </F.Desc>
          <W.Tag>Enhancement</W.Tag>
        </div>
      </W.Flex>
      <F.RightSide>
        <img src="/assets/shared/icon-comments.svg" alt="" />2
      </F.RightSide>
    </F.Cover>
  );
}
