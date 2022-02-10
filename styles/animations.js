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

export const loader1 = keyframes`
0% {
  width: 50px;
}

50%{
  width: 95%;
}

100% {
  width: 50px;
}
`;
