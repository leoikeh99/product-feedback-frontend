import styled from "styled-components";

export const ButtonLink = styled.a`
  font-size: 13px;
  font-weight: 600;
  color: #4661e6;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 0;
  padding: 12px 24px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background: ${({ theme, bg }) => theme[bg].normal};
  cursor: pointer;

  &:hover {
    background: ${({ theme, bg }) => theme[bg].hover};
  }

  @media only screen and (max-width: 400px) {
    font-size: 13px;
    padding: 10px 16px;
  }

  @media only screen and (max-width: 290px) {
    font-size: 11px;
    padding: 8px 8px;
  }
`;

export const Back = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${({ light }) => (light ? "#fff" : "#647196")};
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
`;
