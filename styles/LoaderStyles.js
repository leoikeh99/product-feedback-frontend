import styled from "styled-components";
import { loader1 } from "./animations";

export const Loader1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 4px;
  width: 50px;
  background: #c75af6;
  animation: ${loader1} ease-in 1s infinite;
`;
