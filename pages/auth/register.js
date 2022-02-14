import Link from "next/link";
import React, { useState, useContext } from "react";
import Layout from "../../components/Layout";
import * as F from "../../styles/FeedbackFormStyles";
import * as B from "../../styles/widgets/Buttons";
import { toast } from "react-toastify";
import emailValidator from "email-validator";
import AuthContext from "../../context/AuthContext";
import BtnLoader from "../../components/BtnLoader";

export default function Register() {
  const [data, setData] = useState({ email: "", username: "", password: "" });
  const { register, loader } = useContext(AuthContext);

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(data).some((val) => val.trim() === "")) {
      toast.error("All fields are required");
      return;
    }
    if (!emailValidator.validate(data.email)) {
      toast.error("Invalid Email");
      return;
    }
    if (data.password.length < 6) {
      toast.error("Password length too short");
      return;
    }

    register(data);
  };

  return (
    <Layout title="Register">
      <F.Container>
        <F.Form onSubmit={handleSubmit}>
          <F.Icon>
            <img src="/assets/shared/icon-new-feedback.svg" alt="" />
          </F.Icon>
          <F.Title>Sign Up</F.Title>
          <F.Label>Username</F.Label>
          <F.Input
            type="text"
            name="username"
            value={data.username}
            onChange={handleChange}
          />

          <F.Label>Email</F.Label>
          <F.Input
            type="email"
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

          <Link href="/auth/login">
            <B.ButtonLink>Login here {">"}</B.ButtonLink>
          </Link>

          <F.Buttons>
            <B.Button bg="purple" type="submit">
              <BtnLoader loader={loader === "register"} />
              SIGN UP
            </B.Button>
          </F.Buttons>
        </F.Form>
      </F.Container>
    </Layout>
  );
}
