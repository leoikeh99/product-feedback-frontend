import styled from "styled-components";
import { getIn } from "../styles/animations";

export const HeaderCover = styled.div`
  height: 113px;
  width: 100%;
  background: #373f68;
  border-radius: 10px;
  padding: 27px 35px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 48px;

  .title {
    font-size: 24px;
    font-weight: 700;
    color: #fff;
    margin-top: 4px;

    @media only screen and (max-width: 400px) {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 400px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 0;
    padding: 26px 24px;
  }

  @media only screen and (max-width: 850px) {
    margin-bottom: 0;
  }
`;

export const Text1 = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: #3a4374;
  margin-bottom: 4px;

  &:hover {
    color: ${({ link }) => link && "#4661E6"};
  }
`;

export const Text2 = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #647196;
`;

export const MainLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;

  @media only screen and (max-width: 400px) {
    margin-top: 160px;
  }

  @media only screen and (max-width: 850px) {
    display: flex;
    justify-content: center;
  }
`;

export const Section = styled.div`
  @media only screen and (max-width: 850px) {
    display: ${({ show }) => (show ? "block" : "none")};
  }
`;

export const CardsCover = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
`;

export const CardCover = styled.div`
  width: 100%;
  max-width: 350px;
  min-height: 272px;
  background: #fff;
  border-top: 6px solid
    ${({ status }) =>
      status === "Planned"
        ? "#F49F85"
        : status === "In Progress"
        ? "#AD1FEA"
        : "#62BCFA"};
  border-radius: 5px;
  padding: 27px 32px;
  animation: 0.3s ease-in ${getIn};
  cursor: pointer;

  @media only screen and (max-width: 850px) {
    max-width: 100%;
  }
`;

export const Dot = styled.span`
  display: block;
  background: ${({ status }) =>
    status === "Planned"
      ? "#F49F85"
      : status === "In Progress"
      ? "#AD1FEA"
      : "#62BCFA"};
  height: 8px;
  width: 8px;
  border-radius: 50%;
`;

export const UpvoteTag = styled.span`
  padding: 10px;
  background: ${({ status }) => (status ? "#4661E6" : "#f2f4fe")};
  color: ${({ status }) => (status ? "#fff" : "#3a4374")};
  font-size: 13px;
  font-weight: 700;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9.5px;
  cursor: pointer;
`;

export const Cmts = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #3a4374;
  font-size: 16px;
  font-weight: 700;
`;
