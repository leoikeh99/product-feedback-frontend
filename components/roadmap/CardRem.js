import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { v4 as uuid } from "uuid";

export default function CardRem({ min, max }) {
  return (
    <Draggable
      draggableId={uuid()}
      index={Math.floor(Math.random() * (max - min + 1)) + min}>
      {(provided) => (
        <Cover
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}></Cover>
      )}
    </Draggable>
  );
}

const Cover = styled.div`
  height: 100%;
  min-height: 100px;
  margin-top: 24px;
`;
