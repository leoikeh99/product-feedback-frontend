import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import * as F from "../../styles/FeedbackFormStyles";
import * as B from "../../styles/widgets/Buttons";
import Link from "next/link";
import SelectFeature from "../../components/dropdown/SelectFeature";
import axios from "axios";
import { toast } from "react-toastify";
import AuthContext from "../../context/AuthContext";

export default function AddFeedback() {
  const [active, setActive] = useState("Feature");
  const [data, setData] = useState({ title: "", description: "" });
  const { user } = useContext(AuthContext);
  const router = useRouter();

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasEmptyFields = Object.values(data).some(
      (data) => data.trim() === ""
    );

    if (hasEmptyFields) return toast.error("All fields are required");

    if (!user) {
      toast.error("You have to be logged in");
      return;
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const postData = {
      ...data,
      tag: active,
      user: user.id,
      upvotes: [],
    };

    await axios
      .post("http://localhost:1337/api/feedbacks", { data: postData }, config)
      .then((res) => {
        toast.success("Feedback created");
        router.push(`/feedback/${res.data.data.id}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Layout title="Create Feedback">
      <F.Container>
        <Link href="/">
          <B.Back>
            <img src="/assets/shared/icon-arrow-left.svg" alt="" />
            Go back
          </B.Back>
        </Link>
        <F.Form onSubmit={handleSubmit}>
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
            name="description"
            value={data.description}
            onChange={handleChange}
          />

          <F.Buttons>
            <Link href="/">
              <B.Button bg="darkBlue" type="button">
                Cancel
              </B.Button>
            </Link>
            <B.Button bg="purple">Add Feedback</B.Button>
          </F.Buttons>
        </F.Form>
      </F.Container>
    </Layout>
  );
}
