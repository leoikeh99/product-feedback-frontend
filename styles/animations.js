import { keyframes } from "styled-components";

export const getIn = keyframes`
  from {
    opacity:0;
    transform:scale(0.6);
  }

  to {
    opacity:1;
    transform:scale(1);
  }
`;
