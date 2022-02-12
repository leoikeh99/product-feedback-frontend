import Link from "next/link";
import React, { useContext, useState } from "react";
import Layout from "../../components/Layout";
import * as F from "../../styles/FeedbackDetailStyles";
import * as W from "../../styles/widgets";
import * as B from "../../styles/widgets/Buttons";
import FeedbackItem from "../../components/FeedbackItem";
import Comment from "../../components/comment/Comment";
import AddComment from "../../components/comment/AddComment";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import { parseCookies } from "../../helpers";

export default function FeedbackDetail({ feedback, cmts, rpls, token }) {
  const [comments, setComments] = useState(cmts);
  const [replies, setReplies] = useState(rpls);
  const { user } = useContext(AuthContext);

  const addComment = (comment) => setComments([...comments, comment]);
  const addReply = (reply) => setReplies([...replies, reply]);

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
          {user && user.id === feedback.attributes.user.data.id && (
            <Link href={`/feedback/edit/${feedback.id}`}>
              <B.Button bg="blue">Edit Feedback</B.Button>
            </Link>
          )}
        </W.SpaceOut>
        <W.Margin m={24} />
        <FeedbackItem
          feedback={feedback}
          updatedNum={comments.length + replies.length}
        />
        <F.CommentWrapper>
          <F.Header>{comments.length + replies.length} Comments</F.Header>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              token={token}
              replies={replies.filter(
                (val) => val.attributes.comment.data.id === comment.id
              )}
              addReply={addReply}
            />
          ))}
        </F.CommentWrapper>
        <AddComment feedback={feedback} addComment={addComment} token={token} />
      </F.Container>
    </Layout>
  );
}

export async function getServerSideProps({ req, params: { id } }) {
  const res = await axios.get(
    `http://localhost:1337/api/feedbacks/${id}/?populate=*`
  );

  const res2 = await axios.get(
    `http://localhost:1337/api/comments/?populate=*&filters[feedback][id][$eq]=${id}`
  );

  const res3 = await axios.get(
    `http://localhost:1337/api/replies/?populate=*&filters[feedback][id][$eq]=${id}`
  );

  const { token } = parseCookies(req);

  return {
    props: {
      feedback: res.data.data,
      cmts: res2.data.data,
      rpls: res3.data.data,
      token: token ? token : null,
    },
  };
}
