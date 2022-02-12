import Link from "next/link";
import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import Layout from "../../components/Layout";
import * as F from "../../styles/FeedbackFormStyles";
import * as B from "../../styles/widgets/Buttons";
import AuthContext from "../../context/AuthContext";

export default function Login() {
  const [data, setData] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(data).some((val) => val.trim() === "")) {
      toast.error("All fields are required");
      return;
    }

    login({ identifier: data.email, password: data.password });
  };

  return (
    <Layout title="Login">
      <F.Container>
        <F.Form onSubmit={handleSubmit}>
          <F.Icon>
            <img src="/assets/shared/icon-new-feedback.svg" alt="" />
          </F.Icon>
          <F.Title>Login</F.Title>

          <F.Label>Username or Email</F.Label>
          <F.Input
            type="text"
            name="email"
            value={data.email}
            onChange={handleChange}
          />

          <F.Label>Password</F.Label>
          <F.Input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />

          <Link href="/auth/register">
            <B.ButtonLink>Sign Up here {">"}</B.ButtonLink>
          </Link>

          <F.Buttons>
            <B.Button bg="purple" type="submit">
              LOGIN
            </B.Button>
          </F.Buttons>
        </F.Form>
      </F.Container>
    </Layout>
  );
}
