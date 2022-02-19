import styled from "styled-components";

export const Container = styled.div`
  max-width: 255px;
  height: fit-content;
  width: 100%;
  position: sticky;
  top: 24px;
  transition: 0.2s ease-in all;

  @media only screen and (max-width: 1070px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    max-width: 100%;
    position: relative;
    top: 0;
  }

  @media only screen and (max-width: 700px) {
    position: fixed;
    top: 0;
    right: 0;
    display: block;
    background: #f7f8fd;
    height: 100vh;
    z-index: 15;
    padding: 100px 24px 0 24px;
    width: 271px;
    transform: translateX(300px);
  }

  &.comeIn {
    transform: translateX(0px);
  }
`;

export const TopCard = styled.div`
  width: 100%;
  height: 137px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #fff;
  font-size: 15px;
  border-radius: 10px;
  margin-bottom: 24px;
  background: radial-gradient(
    128.88% 128.88% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );

  .main-text {
    font-size: 20px;
    font-weight: 700;
  }

  @media only screen and (max-width: 1070px) {
    margin-bottom: 10px;
    height: 100px;
    padding: 12px;
  }

  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const Card = styled.div`
  background: #fff;
  padding: 24px;
  border-radius: 10px;
  margin-bottom: 24px;

  .title {
    color: #3a4374;
    font-weight: 700;
  }

  .text {
    color: #647196;
    font-weight: 400;
  }

  .text-bold {
    color: #647196;
    font-weight: 700;
  }

  ul {
    padding-top: 24px;
    li {
      margin-bottom: 8px;
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const ProfileCard = styled.div`
  background: #fff;
  padding: 18px;
  border-radius: 10px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  display: ${({ small }) => (small ? "none" : "flex")};

  img {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    border: 2px solid #3a4374;
  }

  p {
    color: #3a4374;
    font-weight: 700;
    font-size: 18px;
  }
  i {
    top: 10px;
    right: 10px;
    font-size: 10px;
    color: ${({ theme }) => theme.red.normal};
    cursor: pointer;
  }

  @media only screen and (max-width: 1070px) {
    display: ${({ small }) => (!small ? "none" : "flex")};
    padding: 10px;
  }

  @media only screen and (max-width: 700px) {
    display: ${({ small }) => (!small ? "flex" : "none")};
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Dot = styled.span`
  display: block;
  background: ${({ bg }) => bg};
  height: 8px;
  width: 8px;
  border-radius: 50%;
`;
