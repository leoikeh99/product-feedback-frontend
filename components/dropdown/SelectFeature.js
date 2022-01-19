import React, { useState } from "react";
import styled from "styled-components";
import { getIn } from "../../styles/animations";

export default function SelectFeature({ active, setActive }) {
  const [show, setShow] = useState(false);
  const features = ["Feature", "UI", "UX", "Enhancement", "Bug"];
  return (
    <Cover show={show} onClick={() => setShow(!show)}>
      <Text>{active}</Text>
      <img src="/assets/shared/icon-arrow-up.svg" alt="" />
      {show && (
        <DropDown>
          {features.map((feature) => (
            <Item
              onClick={() => setActive(feature)}
              active={feature === active}>
              {feature}{" "}
              {feature === active && (
                <img src="/assets/shared/icon-check.svg" alt="" />
              )}
            </Item>
          ))}
        </DropDown>
      )}
    </Cover>
  );
}

const Cover = styled.div`
  width: 100%;
  height: 48px;
  border: 1px solid #fff;
  border-radius: 5px;
  background: #f7f8fd;
  padding: 22px;
  margin: 16px 0 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
  transition: border 0.2s ease-in;

  &:hover {
    border: 1px solid #4661e6;
  }

  img {
    transition: transform 0.1s ease-in;
    transform: ${({ show }) => !show && "rotate(180deg)"};
  }
`;

const Text = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #3a4374;
`;

const DropDown = styled.ul`
  position: absolute;
  left: 0;
  top: 65px;
  width: 100%;
  background: #fff;
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
  border-radius: 10px;
  animation: ${getIn} 0.1s ease-in forwards;

  img {
    transform: rotate(0deg);
  }
`;

const Item = styled.li`
  width: 100%;
  padding: 12px 24px;
  list-style: none;
  color: ${({ active }) => (active ? "#AD1FEA" : "#647196")};
  border-bottom: 1px solid rgba(58, 67, 116, 0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:last-child {
    border-radius: 0 0 10px 10px;
  }
`;
