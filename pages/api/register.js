import axios from "axios";
import cookie from "cookie";
import { BASE_URL } from "../../config";

export default async (req, res) => {
  if (req.method === "POST") {
    const { username, email, password } = req.body;
    const avatar = `https://avatars.dicebear.com/api/jdenticon/${username}.svg`;

    const data = { username, email, password, avatar };

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    await axios
      .post(`${BASE_URL}/api/auth/local/register`, data, config)
      .then((strapiRes) => {
        res.setHeader(
          "Set-Cookie",
          cookie.serialize("token", strapiRes.data.jwt, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 60 * 60 * 24 * 7,
            sameSite: "strict",
            path: "/",
          })
        );
        res.status(200).json({ user: strapiRes.data.user });
      })
      .catch((err) => {
        const { error } = err.response.data;
        res.status(error.status).json({
          message: !error.details.errors
            ? error.message
            : error.details.errors[0].message,
        });
      });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
