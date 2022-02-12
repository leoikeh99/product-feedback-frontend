import cookie from "cookie";
import axios from "axios";
import { BASE_URL } from "../../config";

export default async (req, res) => {
  if (req.method === "GET") {
    if (!req.headers.cookie) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const { token } = cookie.parse(req.headers.cookie);

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    await axios
      .get(`${BASE_URL}/api/users/me`, config)
      .then((strapiRes) => {
        res.status(200).json(strapiRes.data);
      })
      .catch((err) => {
        res.status(403).json({ message: "User forbidden" });
      });
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
