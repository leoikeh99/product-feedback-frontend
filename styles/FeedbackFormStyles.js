import styled from "styled-components";

export const Container = styled.div`
  max-width: 540px;
  margin: auto;
`;

export const Icon = styled.span`
  display: block;
  margin-top: -67px;

  img {
    height: 56px;
    width: 56px;
  }

  @media only screen and (max-width: 500px) {
    margin-top: -45px;
    img {
      height: 40px;
      width: 40px;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  margin-top: 68px;

  @media only screen and (max-width: 500px) {
    padding: 24px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #3a4374;
  margin: 12px 0 40px 0px;

  @media only screen and (max-width: 500px) {
    font-size: 18px;
  }
`;
export const Label = styled.label`
  display: block;
  color: #3a4374;
  font-size: 14px;
  font-weight: ${({ light }) => (light ? "400" : "700")};
  margin-bottom: 2px;

  @media only screen and (max-width: 500px) {
    font-size: 13px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  font-size: 15px;
  color: #3a4374;
  border: 0;
  border-radius: 5px;
  background: #f7f8fd;
  padding: 10px;
  margin: 16px 0 24px 0;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 96px;
  font-size: 15px;
  color: #3a4374;
  border: 0;
  border-radius: 5px;
  background: #f7f8fd;
  padding: 10px;
  margin: 16px 0 24px 0;
  resize: none;

  @media only screen and (max-width: 500px) {
    height: 120px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 8px;

  @media only screen and (max-width: 500px) {
    flex-direction: column-reverse;

    button {
      width: 100%;
    }
  }
`;

export const Buttons2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 500px) {
    flex-direction: column-reverse;
    gap: 16px;

    button,
    .buttons {
      width: 100%;
    }
  }
`;
