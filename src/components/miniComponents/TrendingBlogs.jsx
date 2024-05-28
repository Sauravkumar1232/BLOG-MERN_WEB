import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../helper";

const TrendingBlogs = () => {
  const [blogs, setBlogs] = useState([]);
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

  const [myBlogs, setMyBlogs] = useState([]);

  useEffect(() => {
    const fetchMyBlogs = async () => {
      const { data } = await axios.get(
        // "http://localhost:3000/api/blog/getTrandingBlog",
        `${BASE_URL}/api/blog/getTrandingBlog`,
        { withCredentials: true }
      );
      setMyBlogs(data.allBlog);
    };
    fetchMyBlogs();
  }, []);
  console.log("tran", myBlogs);
  return (
    <div className="trending">
      <h3>Trending</h3>
      <Carousel responsive={responsive}>
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
                  className="blogImg"
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
      </Carousel>
    </div>
  );
};

export default TrendingBlogs;
