import React from "react";
import { SpinnerCircularFixed } from "spinners-react";

export default function BtnLoader({ loader }) {
  return (
    <SpinnerCircularFixed
      size={20}
      color="#fff"
      thickness={200}
      speed={300}
      enabled={loader}
    />
  );
}
