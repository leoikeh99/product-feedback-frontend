import styled from "styled-components";

export const Cover = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 28px 32px;
  margin-bottom: 20px;

  @media only screen and (max-width: 400px) {
    padding: 24px 25px;
  }
`;

export const Title = styled.p`
  color: #3a4374;
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 4px;
  cursor: pointer;

  &:hover {
    color: #4661e6;
  }

  @media only screen and (max-width: 400px) {
    font-size: 13px;
  }
`;

export const Desc = styled.p`
  color: #647196;
  font-weight: 400;
  margin-bottom: 12px;
  max-width: 520px;

  @media only screen and (max-width: 400px) {
    font-size: 13px;
  }
`;

export const RightSide = styled.div`
  color: #3a4374;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Desk = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 765px) {
    display: none;
  }
`;

export const Mob = styled.div`
  display: none;

  @media only screen and (max-width: 765px) {
    display: block;
  }
`;

export const UpvoteTag2 = styled.span`
  padding: 10px;
  background: ${({ status }) => (status ? "#4661E6" : "#f2f4fe")};
  color: ${({ status }) => (status ? "#fff" : "#3a4374")};
  font-size: 13px;
  font-weight: 700;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  gap: 9.5px;
  cursor: pointer;
`;
