import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { NEXT_URL } from "../config";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const router = useRouter();

  useEffect(() => getUser(), []);

  const register = async (user) => {
    setLoader("register");
    await axios
      .post(`${NEXT_URL}/api/register`, user)
      .then((res) => {
        toast.success("Registered in successfully");
        router.push("/");
        setUser(res.data.user);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setError(err.response.data.message);
        setError(null);
      });
    setLoader(false);
  };

  const login = async (user) => {
    setLoader("login");
    await axios
      .post(`${NEXT_URL}/api/login`, user)
      .then((res) => {
        toast.success("Logged in successfully");
        router.push("/");
        setUser(res.data.user);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
        setError(err.response.data.message);
        setError(null);
      });
    setLoader(false);
  };

  const getUser = async () => {
    await axios
      .get(`${NEXT_URL}/api/user`)
      .then((res) => setUser(res.data))
      .catch((err) => setUser(null));
  };

  const logout = async () => {
    axios
      .post(`${NEXT_URL}/api/logout`)
      .then((res) => {
        toast.success("Logged out successfully");
        setUser(null);
      })
      .catch((err) => console.error(err));
  };

  return (
    <AuthContext.Provider
      value={{ user, loader, error, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
