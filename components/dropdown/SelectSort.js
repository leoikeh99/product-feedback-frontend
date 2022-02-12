import React, { useState } from "react";
import styled from "styled-components";
import { getIn } from "../../styles/animations";

export default function SelectSort({ active, setActive }) {
  const [show, setShow] = useState(false);
  const options = [
    "Most Upvotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];

  return (
    <Cover>
      <Label show={show} onClick={() => setShow(!show)}>
        Sort by : <span>{active}</span>
        <img src="/assets/shared/icon-arrow-up-light.svg" alt="" />
      </Label>
      {show && (
        <DropDown>
          {options.map((option) => (
            <Item
              key={option}
              onClick={() => {
                setActive(option);
                localStorage.setItem("sort", option);
              }}>
              {option}
              {active === option && (
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
  position: relative;
  z-index: 2;
`;

const Label = styled.p`
  color: #f2f4fe;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;

  span {
    font-weight: 600;
    color: #fff;
    margin-right: 10px;
  }

  img {
    transition: transform 0.1s ease-in;
    transform: ${({ show }) => !show && "rotate(180deg)"};
  }

  &:hover {
    span {
      color: #f2f4fe;
    }
  }
`;

const DropDown = styled.ul`
  width: 255px;
  background: #fff;
  border-radius: 10px;
  position: absolute;
  top: 60px;
  left: 0;
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
  animation: ${getIn} 0.1s ease-in forwards;
`;

const Item = styled.li`
  color: #647196;
  font-weight: 400;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(58, 67, 116, 0.15);
  cursor: pointer;

  &:last-child {
    border-radius: 0 0 10px 10px;
  }

  &:hover {
    color: #ad1fea;
  }
`;
