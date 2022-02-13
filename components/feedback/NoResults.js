import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { noResultAnim } from "../../styles/framerAnimations";
import { Button } from "../../styles/widgets/Buttons";

export default function NoResults({ tag }) {
  return (
    <motion.div {...noResultAnim}>
      <Cover>
        <img src="/assets/holmes.svg" alt="" />
        <Header>
          {tag === "All"
            ? "There is no feedback yet."
            : `No feedback for '${tag}'`}
        </Header>
        <Text>
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </Text>
        <Link href="/feedback/add">
          <Button bg="purple">+ Add Feedback</Button>
        </Link>
      </Cover>
    </motion.div>
  );
}

const Cover = styled.div`
  width: 100%;
  height: 600px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 53px;
  }
`;

const Header = styled.h2`
  font-weight: 700;
  font-size: 24px;
  color: #3a4374;
  margin-bottom: 16px;
  text-align: center;
`;
const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #647196;
  margin-bottom: 48px;
  max-width: 410px;
  text-align: center;
`;
