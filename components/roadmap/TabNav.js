import React from "react";
import styled from "styled-components";

export default function TabNav({ tab, setTab }) {
  return (
    <Cover>
      <Tab active={tab === "Planned"} onClick={() => setTab("Planned")}>
        Planned <span></span>
      </Tab>
      <Tab active={tab === "In Progress"} onClick={() => setTab("In Progress")}>
        In-Progress <span></span>
      </Tab>
      <Tab active={tab === "Live"} onClick={() => setTab("Live")}>
        Live <span></span>
      </Tab>
    </Cover>
  );
}

const Cover = styled.div`
  height: 57px;
  width: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid rgb(140, 146, 179, 0.25);
  margin-bottom: 24px;

  @media only screen and (max-width: 400px) {
    position: absolute;
    top: 115px;
    left: 0;
    width: 100%;
  }

  @media only screen and (max-width: 850px) {
    display: flex;
  }
`;

const Tab = styled.div`
  font-size: 16px;
  font-weight: 700;
  height: 100%;
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${({ active }) =>
    active ? "rgb(58,67,116,1)" : "rgb(58,67,116,0.4)"};
  cursor: pointer;

  span {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${({ active }) => (active ? "#AD1FEA" : "")};
  }

  @media only screen and (max-width: 400px) {
    font-size: 13px;
    width: 125px;
  }
`;
