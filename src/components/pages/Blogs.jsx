import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import LatestBlogs from "../miniComponents/LatestBlog";
import { FaSearch } from "react-icons/fa";
import fetchBlogs from "../../App";
import axios from "axios";
import Carousel from "react-multi-carousel";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../helper";

const Blogs = () => {
  const responsive = {
    extraLarge: {
      breakpoint: { max: 3000, min: 1324 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
    },
    large: {
      breakpoint: { max: 1324, min: 1005 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    medium: {
      breakpoint: { max: 1005, min: 700 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    small: {
      breakpoint: { max: 700, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const [input, setInput] = useState("");
  const [inputSort, setInputSort] = useState("NewToOld");

  // const [blogs, setBlogs] = useState([]);
  const [myBlogs, setMyBlogs] = useState([]);
  const { mode, blogs } = useContext(Context);
  const handleChange = (value) => {
    setInput(value);
    setInputSort(value);
    fetchBlogs(value);
  };
  const sorthandleChange = (value) => {
    setInputSort(value);
  };

  const reverseBlogs = (value) => {
    setInputSort(value);
    setMyBlogs((prevBlogs) => [...prevBlogs].reverse());
  };
  useEffect(() => {
    const fetchMyBlogs = async (input) => {
      const { data } = await axios.get(
        // "http://localhost:3000/api/blog/getAll/?category=" + input,
        `${BASE_URL}/api/blog/getAll/?category=` + input,
        { withCredentials: true }
      );
      setMyBlogs(data.allBlog);
    };
    fetchMyBlogs(input);
  }, [input]);
  console.log("input sort", inputSort);

  console.log("myBlogs", myBlogs);

  return (
    <>
      <article className={mode === "dark" ? "dark-bg" : "light-bg"}>
        <h3>All Blogs</h3>
        <select onChange={(e) => handleChange(e.target.value)} value={input}>
          <option value="">Select Category</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Technology">Technology</option>
          <option value="Sports">Sports</option>
          <option value="Travel">Travel</option>
          <option value="Business">Business</option>
          <option value="Economy">Economy</option>
          <FaSearch id="search-icon" />
        </select>
        <select
          onChange={(e) => reverseBlogs(e.target.value)}
          value={inputSort}
        >
          {/* <option value="">Select </option> */}
          <option value="NewToOld">New to Old</option>
          <option value="OldToNew">Old to New</option>

          <FaSearch id="search-icon" />
        </select>
        <div className="container">
          {myBlogs && myBlogs.length > 0 ? (
            <LatestBlogs blogs={myBlogs} title={"Blogs"} />
          ) : (
            <BeatLoader color="gray" size={45} style={{ padding: "200px 0" }} />
          )}
          {/* <Carousel responsive={responsive}>
            {myBlogs && myBlogs.length > 0 ? (
              myBlogs.slice(0, 6).map((element) => {
                return (
                  <Link
                    to={`/blog/${element._id}`}
                    className="card"
                    key={element._id}
                  >
                    <img
                      src={element.mainImage.url}
                      alt="blog"
                      // className="blogImg"
                    />
                    <span className="category">{element.category}</span>
                    <h4>{element.title}</h4>
                    <div className="writer_section">
                      <div className="author">
                        <img src={element.authorAvatar} alt="author_avatar" />
                        <p>{element.authorName}</p>
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <BeatLoader size={30} color="gray" />
            )}
          </Carousel> */}
        </div>
      </article>
    </>

    //   <div className="container">
    //     {blogs &&
    //       blogs.map((element) => {
    //         return (
    //           <Link
    //             to={`/blog/${element._id}`}
    //             className="card"
    //             key={element._id}
    //           >
    //             <img src={element.mainImage.url} alt="blog" />
    //             <span className="category">{element.category}</span>
    //             <h4>{element.title}</h4>
    //             <div className="writer_section">
    //               <div className="author">
    //                 <img src={element.authorAvatar} alt="author_avatar" />
    //                 <p>{element.authorName}</p>
    //               </div>
    //             </div>
    //           </Link>
    //         );
    //       })}
    //   </div>
  );
};

export default Blogs;
