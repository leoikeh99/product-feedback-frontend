import styled from "styled-components";

export const ButtonLink = styled.a`
  font-size: 13px;
  font-weight: 600;
  color: #4661e6;
  text-decoration: underline;
  cursor: pointer;
`;

export const Button = styled.a`
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
`;

export const Back = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #647196;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
`;
