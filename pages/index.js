import React, { useState } from "react";
import SelectSort from "../components/dropdown/SelectSort";
import Layout from "../components/Layout";
import SideBar from "../components/SideBar";
import * as H from "../styles/HomeStyles";
import * as W from "../styles/widgets";
import { Button } from "../styles/widgets/Buttons";
import Link from "next/link";
import FeedbackItem from "../components/FeedbackItem";

export default function Home() {
  const [active, setActive] = useState("Most Upvotes");
  return (
    <Layout>
      <H.HomeContainer>
        <SideBar />
        <H.Main>
          <H.Header>
            <W.Flex gap={38}>
              <W.Flex gap={16}>
                <img
                  src="/assets/suggestions/icon-suggestions.svg"
                  alt="icon"
                />
                <p>6 Suggestions</p>
              </W.Flex>
              <SelectSort active={active} setActive={setActive} />
            </W.Flex>
            <Link href="/feedback/add">
              <Button bg="purple">+ Add Feedback</Button>
            </Link>
          </H.Header>
          <H.Feedbacks>
            <FeedbackItem />
            <FeedbackItem />
            <FeedbackItem />
            <FeedbackItem />
          </H.Feedbacks>
        </H.Main>
      </H.HomeContainer>
    </Layout>
  );
}
