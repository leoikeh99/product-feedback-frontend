import React, { useState } from "react";
import Layout from "../../components/Layout";
import * as F from "../../styles/FeedbackFormStyles";
import * as B from "../../styles/widgets/Buttons";
import Link from "next/link";
import SelectFeature from "../../components/dropdown/SelectFeature";

export default function AddFeedback() {
  const [active, setActive] = useState("Feature");
  const [data, setData] = useState({ title: "", detail: "" });

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  return (
    <Layout title="Create Feedback">
      <F.Container>
        <Link href="/">
          <B.Back>
            <img src="/assets/shared/icon-arrow-left.svg" alt="" />
            Go back
          </B.Back>
        </Link>
        <F.Form>
          <F.Icon>
            <img src="/assets/shared/icon-new-feedback.svg" alt="" />
          </F.Icon>
          <F.Title>Create New Feedback</F.Title>
          <F.Label>Feedback Title</F.Label>
          <F.Label light>Add a short, descriptive headline</F.Label>
          <F.Input
            type="text"
            name="title"
            value={data.title}
            onChange={handleChange}
          />

          <F.Label>Category</F.Label>
          <F.Label light>Choose a category for your feedback</F.Label>
          <SelectFeature active={active} setActive={setActive} />

          <F.Label>Feedback Detail</F.Label>
          <F.Label light>
            Include any specific comments on what should be improved, added,
            etc.
          </F.Label>
          <F.Textarea
            type="text"
            name="detail"
            value={data.detail}
            onChange={handleChange}
          />

          <F.Buttons>
            <Link href="/">
              <B.Button bg="darkBlue" type="button">
                Cancel
              </B.Button>
            </Link>
            <B.Button bg="purple" type="button">
              Add Feedback
            </B.Button>
          </F.Buttons>
        </F.Form>
      </F.Container>
    </Layout>
  );
}
