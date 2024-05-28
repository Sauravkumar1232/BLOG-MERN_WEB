import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Blogs from "./components/pages/Blogs";
import SingleBlog from "./components/pages/SingleBlog";
import About from "./components/pages/About";
import AllAuthors from "./components/pages/AllAuthors";
import Dashboard from "./components/pages/Dashboard";
import UpdateBlog from "./components/pages/UpdateBlog";
import Navbar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import { Context } from "./main";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { BASE_URL } from "./helper";

const App = () => {
  const {
    user,
    setUser,
    isAuthenticated,
    setIsAuthenticated,
    blogs,
    setBlogs,
  } = useContext(Context);

  useEffect(
    () => {
      const fetchUser = async () => {
        try {
          const { data } = await axios.get(
            // "http://localhost:3000/api/user/myProfile",
            `${BASE_URL}/api/user/myProfile`,
            {
              withCredentials: true,
            }
          );
          setUser(data.user);
          setIsAuthenticated(true);
        } catch (error) {
          setIsAuthenticated(false);
          setUser({});
        }
      };
      const fetchBlogs = async () => {
        try {
          const { data } = await axios.get(
            // "http://localhost:3000/api/blog/getAll/?category=",
            `${BASE_URL}/api/blog/getAll/?category=`,
            {
              withCredentials: true,
            }
          );
          setBlogs(data.allBlog);
        } catch (error) {
          setBlogs([]);
        }
      };
      fetchUser();
      fetchBlogs();
    },
    [isAuthenticated],
    user
  );

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/about" element={<About />} />
          <Route path="/authors" element={<AllAuthors />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog/update/:id" element={<UpdateBlog />} />
        </Routes>
        <Footer />
        <Toaster />
      </Router>
    </>
  );
};
export default App;
