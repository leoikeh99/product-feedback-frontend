import styled from "styled-components";

export const Container = styled.div`
  max-width: 730px;
  margin: auto;
`;

export const CommentWrapper = styled.div`
  width: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 24px 32px;
  margin-bottom: 24px;
`;

export const Header = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #3a4374;
`;

export const Comment = styled.div`
  margin-top: 28px;
  margin-bottom: 5px;
  padding-bottom: 32px;
  border-bottom: 1px solid rgba(140, 146, 179, 0.25);
  position: relative;

  &:last-child {
    border-bottom: 0;
  }

  &:after {
    content: "";
    display: ${({ reply }) => (reply ? "block" : "none")};
    position: absolute;
    height: calc(100% - 43px);
    width: 1px;
    top: 50px;
    left: 20px;
    background: rgba(140, 146, 179, 0.25);
    z-index: 1;
  }
`;

export const Reply = styled.div`
  margin-left: 45px;
  margin-top: 32px;

  &:after {
    content: "";
    position: absolute;
    height: calc(100% - 43px);
    width: 1px;
    top: 50px;
    left: 20px;
    background: rgba(140, 146, 179, 0.25);
    z-index: 2;
  }

  &:last-child {
    position: relative;

    &:after {
      content: "";
      position: absolute;
      height: 120%;
      width: 1px;
      top: 25px;
      left: -25px;
      background: #fff;
      z-index: 2;
    }
  }
`;

export const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 2px solid #3a4374;
`;

export const Text = styled.p`
  font-size: ${({ sm }) => (sm ? "14px" : "15px")};
  font-weight: 400;
  color: #647196;
`;

export const Name = styled.p`
  ont-size: 14px;
  font-weight: 700;
  color: #3a4374;
`;

export const Desc = styled.div`
  margin-left: 72px;
  margin-top: 17px;
`;

export const AddCommentWrapper = styled.div`
  width: 100%;
  padding: 24px 34px;
  background: #fff;
  border-radius: 10px;
  position: relative;
`;
