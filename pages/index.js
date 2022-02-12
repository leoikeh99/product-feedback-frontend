import React, { useEffect, useState } from "react";
import SelectSort from "../components/dropdown/SelectSort";
import Layout from "../components/Layout";
import SideBar from "../components/SideBar";
import * as H from "../styles/HomeStyles";
import * as W from "../styles/widgets";
import { Button } from "../styles/widgets/Buttons";
import Link from "next/link";
import FeedbackItem from "../components/FeedbackItem";
import axios from "axios";
import { getSortedData, parseCookies } from "../helpers";

export default function Home({ feedbacks }) {
  const [active, setActive] = useState("Most Upvotes");
  const [activeTag, setActiveTag] = useState("All");

  useEffect(() => {
    const sortType = localStorage.getItem("sort");
    setActive(sortType ? sortType : "Most Upvotes");
  }, []);

  return (
    <Layout>
      <H.HomeContainer>
        <SideBar activeTag={activeTag} setActiveTag={setActiveTag} />
        <H.Main>
          <H.Header>
            <W.Flex gap={38}>
              <W.Flex gap={16}>
                <img
                  src="/assets/suggestions/icon-suggestions.svg"
                  alt="icon"
                />
                <p>
                  {activeTag === "All"
                    ? feedbacks.length
                    : feedbacks.filter(
                        (feedback) => feedback.attributes.tag === activeTag
                      ).length}{" "}
                  Suggestions
                </p>
              </W.Flex>
              <SelectSort active={active} setActive={setActive} />
            </W.Flex>
            <Link href="/feedback/add">
              <Button bg="purple">+ Add Feedback</Button>
            </Link>
          </H.Header>
          <H.Feedbacks>
            {getSortedData(active, activeTag, feedbacks).map((feedback) => (
              <FeedbackItem feedback={feedback} key={feedback.id} />
            ))}
          </H.Feedbacks>
        </H.Main>
      </H.HomeContainer>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const res = await axios.get(
    "http://localhost:1337/api/feedbacks/?populate=*"
  );

  console.log(parseCookies(req));

  return {
    props: {
      feedbacks: res.data.data,
    },
  };
}
