import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../helper";

// import "./App.css"; // Import CSS for styling

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const { id } = useParams();

  const handleStarClick = (value) => {
    setRating(value);
  };
  const handleSubmit = async () => {
    console.log(rating, id);
    try {
      const { data } = await axios.post(
        // "http://localhost:3000/api/blog/rating/" + id,
        `${BASE_URL}/api/blog/rating/${id}`,
        { rating },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="star-rating">
      <h3>Rating</h3>
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={starValue}
            className={starValue <= rating ? "star active" : "star"}
            onClick={() => handleStarClick(starValue)}
          >
            &#9733;
          </span>
        );
      })}
      {/* <p>You rated {rating} stars.</p> */}
      <br />
      <button
        onClick={() => handleSubmit()}
        className="submit-review"
        type="submit"
      >
        Submit
      </button>
    </div>
  );
};

export default StarRating;
