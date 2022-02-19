import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";
import * as F from "../../../styles/FeedbackFormStyles";
import * as B from "../../../styles/widgets/Buttons";
import Link from "next/link";
import SelectFeature from "../../../components/dropdown/SelectFeature";
import axios from "axios";
import { toast } from "react-toastify";
import { parseCookies } from "../../../helpers";
import AuthContext from "../../../context/AuthContext";
import { SpaceOut } from "../../../styles/widgets";
import BtnLoader from "../../../components/BtnLoader";

export default function EditFeedback({ feedback: { attributes, id }, token }) {
  const [active, setActive] = useState(attributes.tag);
  const [data, setData] = useState({
    title: attributes.title,
    description: attributes.description,
  });
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

    if (user.id !== attributes.user.data.id) {
      toast.error("You cannot update this entry");
      return;
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    const updateData = {
      ...data,
      tag: active,
    };

    setLoader("edit");

    await axios
      .put(
        `http://localhost:1337/api/feedbacks/${id}`,
        { data: updateData },
        config
      )
      .then((res) => {
        toast.success("Feedback updated");
      })
      .catch((err) => toast.error(err.response.data.error.message));

    setLoader(false);
  };

  const deleteFeedback = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (!user) {
      toast.error("You have to be logged in");
      return;
    }

    if (user.id !== attributes.user.data.id) {
      toast.error("You cannot delete this entry");
      return;
    }

    setLoader("delete");

    await axios
      .delete(`http://localhost:1337/api/feedbacks/${id}`, config)
      .then((res) => {
        toast.success("Feedback deleted");
        router.push("/");
      })
      .catch((err) => toast.error(err.response.data.error.message));

    setLoader(false);
  };

  return (
    <Layout title="Edit Feedback">
      <F.Container>
        <Link href={`/feedback/${id}`}>
          <B.Back>
            <img src="/assets/shared/icon-arrow-left.svg" alt="" />
            Go back
          </B.Back>
        </Link>
        <F.Form onSubmit={handleSubmit}>
          <F.Icon>
            <img src="/assets/shared/icon-edit-feedback.svg" alt="" />
          </F.Icon>
          <F.Title>Edit Feedback</F.Title>
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
          <F.Buttons2>
            <B.Button bg="red" type="button" onClick={deleteFeedback}>
              <BtnLoader loader={loader === "delete"} />
              Delete
            </B.Button>
            <F.Buttons className="buttons">
              <Link href="/">
                <B.Button bg="darkBlue" type="button">
                  Cancel
                </B.Button>
              </Link>
              <B.Button bg="purple">
                <BtnLoader loader={loader === "edit"} /> Save Changes
              </B.Button>
            </F.Buttons>
          </F.Buttons2>
        </F.Form>
      </F.Container>
    </Layout>
  );
}

export async function getServerSideProps({ req, params: { id } }) {
  const res = await axios.get(
    `http://localhost:1337/api/feedbacks/${id}/?populate=*`
  );

  const { token } = parseCookies(req);

  return {
    props: {
      feedback: res.data.data,
      token: token ? token : null,
    },
  };
}
