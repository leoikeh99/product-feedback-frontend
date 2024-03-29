import React, { useEffect, useState } from "react";
import SelectSort from "../components/dropdown/SelectSort";
import Layout from "../components/Layout";
import SideBar from "../components/SideBar";
import * as H from "../styles/HomeStyles";
import * as W from "../styles/widgets";
import { Button } from "../styles/widgets/Buttons";
import Link from "next/link";
import FeedbackItem from "../components/feedback/FeedbackItem";
import axios from "axios";
import { getSortedData, parseCookies } from "../helpers";
import { motion, AnimatePresence } from "framer-motion";
import { feedbackItemAnim } from "../styles/framerAnimations";
import NoResults from "../components/feedback/NoResults";
import TopBar from "../components/TopBar";
import { BASE_URL } from "../config";

export default function Home({ feedbacks, token, sidebarData }) {
  const [active, setActive] = useState("Most Upvotes");
  const [activeTag, setActiveTag] = useState("All");
  const [winReady, setWinReady] = useState(false);

  useEffect(() => {
    setWinReady(true);
    const sortType = localStorage.getItem("sort");
    setActive(sortType ? sortType : "Most Upvotes");
  }, []);

  return (
    <Layout>
      <H.HomeContainer>
        <TopBar />
        <SideBar
          activeTag={activeTag}
          setActiveTag={setActiveTag}
          data={sidebarData}
        />
        <H.Main>
          <H.Header>
            <W.Flex gap={38}>
              <W.Flex gap={16}>
                <img
                  className="suggestions"
                  src="/assets/suggestions/icon-suggestions.svg"
                  alt="icon"
                />
                <p className="suggestions">
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
          {winReady && (
            <H.Feedbacks>
              {getSortedData(active, activeTag, feedbacks).length !== 0 ? (
                <AnimatePresence>
                  {getSortedData(active, activeTag, feedbacks).map(
                    (feedback) => (
                      <motion.div
                        key={feedback.id}
                        {...feedbackItemAnim}
                        layout
                      >
                        <FeedbackItem feedback={feedback} token={token} />
                      </motion.div>
                    )
                  )}
                </AnimatePresence>
              ) : (
                <NoResults tag={activeTag} />
              )}
            </H.Feedbacks>
          )}
        </H.Main>
      </H.HomeContainer>
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const res = await axios.get(
    `${BASE_URL}/api/feedbacks/?populate=*&filters[roadmap][$eq]=false`
  );

  const res2 = await axios.get(
    `${BASE_URL}/api/feedbacks/?populate=*&filters[roadmap][$eq]=true`
  );

  const data = res2.data.data;

  const sidebarData = {
    planned: data.filter(({ attributes }) => attributes.status === "Planned")
      .length,
    inProgress: data.filter(
      ({ attributes }) => attributes.status === "In Progress"
    ).length,
    live: data.filter(({ attributes }) => attributes.status === "Live").length,
  };

  const { token } = parseCookies(req);

  return {
    props: {
      feedbacks: res.data.data,
      token: token ? token : null,
      sidebarData: sidebarData,
    },
  };
}
