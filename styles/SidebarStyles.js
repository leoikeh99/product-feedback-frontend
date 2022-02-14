import styled from "styled-components";

export const Container = styled.div`
  max-width: 255px;
  height: fit-content;
  width: 100%;
  position: sticky;
  top: 24px;
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

  img {
    height: 45px;
    width: 45px;
    border-radius: 50%;
    border: 2px solid #3a4374;
  }

  p {
    color: #3a4374;
    font-weight: 700;
    font-size:18px;
  }

    top: 10px;
    right: 10px;
    font-size: 10px;
    color: ${({ theme }) => theme.red.normal};
    cursor: pointer;
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
