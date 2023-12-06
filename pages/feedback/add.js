import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import * as F from "../../styles/FeedbackFormStyles";
import * as B from "../../styles/widgets/Buttons";
import Link from "next/link";
import SelectFeature from "../../components/dropdown/SelectFeature";
import BtnLoader from "../../components/BtnLoader";
import axios from "axios";
import { toast } from "react-toastify";
import AuthContext from "../../context/AuthContext";
import { parseCookies } from "../../helpers";
import { BASE_URL } from "../../config";

export default function AddFeedback({ token, from }) {
  const [active, setActive] = useState("Feature");
  const [data, setData] = useState({ title: "", description: "" });
  const [loader, setLoader] = useState(false);
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
        Authorization: `Bearer ${token}`,
      },
    };

    const postData = {
      ...data,
      tag: active,
      upvotes: [],
      roadmap: from === "roadmap" ? true : false,
      status: "Planned",
    };

    setLoader(true);

    await axios
      .post(`${BASE_URL}/api/feedbacks`, { data: postData }, config)
      .then((res) => {
        toast.success("Feedback created");
        router.push(`/feedback/${res.data.data.id}`);
      })
      .catch((err) => console.log(err));

    setLoader(false);
  };

  return (
    <Layout title="Create Feedback">
      <F.Container>
        <Link href={`${from === "roadmap" ? "/roadmap" : "/"}`}>
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
            <B.Button bg="purple">
              <BtnLoader loader={loader} /> Add Feedback
            </B.Button>
          </F.Buttons>
        </F.Form>
      </F.Container>
    </Layout>
  );
}

export async function getServerSideProps({ req, query: { from } }) {
  const { token } = parseCookies(req);

  return {
    props: {
      token: token ? token : null,
      from: from ? from : null,
    },
  };
}
