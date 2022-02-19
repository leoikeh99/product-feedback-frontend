import styled from "styled-components";

export const TopBarCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  padding: 16px 24px;
  font-weight: 700;
  font-size: 15px;
  color: #fff;
  display: none;
  align-items: center;
  justify-content: space-between;
  z-index: 20;

  background: radial-gradient(
    128.88% 128.88% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );

  @media only screen and (max-width: 700px) {
    display: flex;
  }
`;

export const SubText = styled.p`
  font-weight: 400;
  font-size: 13px;
  color: #fff;
`;
