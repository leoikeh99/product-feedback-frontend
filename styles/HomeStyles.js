import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  gap: 30px;

  @media only screen and (max-width: 1070px) {
    flex-direction: column;
  }
`;

export const Main = styled.div`
  width: 100%;
  max-width: 825px;

  @media only screen and (max-width: 1070px) {
    max-width: 100%;
  }
`;

export const Header = styled.header`
  width: 100%;
  height: 72px;
  padding: 0 16px 0 24px;
  background: #373f68;
  color: #fff;
  font-weight: 700;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 650px) {
    .suggestions {
      display: none;
    }
  }

  @media only screen and (max-width: 700px) {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0;
    margin-top: 72px;
  }

  @media only screen and (max-width: 400px) {
    height: 56px;
  }
`;

export const Feedbacks = styled.section`
  padding: 24px 0;

  @media only screen and (max-width: 700px) {
    margin-top: 85px;
  }

  @media only screen and (max-width: 500px) {
    margin-top: 110px;
  }
`;
