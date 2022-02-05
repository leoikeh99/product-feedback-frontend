import Link from "next/link";
import React from "react";
import Layout from "../../components/Layout";
import * as F from "../../styles/FeedbackDetailStyles";
import * as W from "../../styles/widgets";
import * as B from "../../styles/widgets/Buttons";
import FeedbackItem from "../../components/FeedbackItem";
import Comment from "../../components/comment/Comment";
import AddComment from "../../components/comment/AddComment";

export default function FeedbackDetail({ reply }) {
  return (
    <Layout title="Feedback Detail">
      <F.Container>
        <W.SpaceOut>
          <Link href="/">
            <B.Back>
              <img src="/assets/shared/icon-arrow-left.svg" alt="" />
              Go back
            </B.Back>
          </Link>
          <B.Button bg="blue">Edit Feedback</B.Button>
        </W.SpaceOut>
        <W.Margin m={24} />
        <FeedbackItem />
        <F.CommentWrapper>
          <F.Header>4 Comments</F.Header>
          <Comment />
          <Comment reply={true} />
        </F.CommentWrapper>
        <AddComment />
      </F.Container>
    </Layout>
  );
}
