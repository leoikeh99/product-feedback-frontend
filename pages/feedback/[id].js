import Link from "next/link";
import React, { useState } from "react";
import Layout from "../../components/Layout";
import * as F from "../../styles/FeedbackDetailStyles";
import * as W from "../../styles/widgets";
import * as B from "../../styles/widgets/Buttons";
import FeedbackItem from "../../components/FeedbackItem";
import Comment from "../../components/comment/Comment";
import AddComment from "../../components/comment/AddComment";
import axios from "axios";

export default function FeedbackDetail({ feedback, cmts, replies }) {
  const [comments, setComments] = useState(cmts);

  const addComment = (comment) => setComments([...comments, comment]);

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
        <FeedbackItem feedback={feedback} />
        <F.CommentWrapper>
          <F.Header>{comments.length + replies.length} Comments</F.Header>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              rpls={replies.filter(
                (val) => val.attributes.comment.data.id === comment.id
              )}
            />
          ))}
        </F.CommentWrapper>
        <AddComment feedback={feedback} addComment={addComment} />
      </F.Container>
    </Layout>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const res = await axios.get(
    `http://localhost:1337/api/feedbacks/${id}/?populate=*`
  );

  const res2 = await axios.get(
    `http://localhost:1337/api/comments/?populate=*&filters[feedback][id][$eq]=${id}`
  );

  const res3 = await axios.get(
    `http://localhost:1337/api/replies/?populate=*&filters[feedback][id][$eq]=${id}`
  );

  return {
    props: {
      feedback: res.data.data,
      cmts: res2.data.data,
      replies: res3.data.data,
    },
  };
}
