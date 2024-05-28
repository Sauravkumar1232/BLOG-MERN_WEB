import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <h4>Welcome to Blog !</h4>
        <p>
          At Blog Name, we believe in the power of words to inspire, educate,
          and connect people from all walks of life. Our mission is simple: to
          create a vibrant online space where ideas flourish, conversations
          spark, and communities thrive.
        </p>
        <h4>Who We Are </h4>
        <p>
          Welcome to Blog , we believe in the power of words to inspire,
          educate, and connect people from all walks of life. Our mission is
          simple: to create a vibrant online space where ideas flourish,
          conversations spark, and communities thrive. Who We Are We are a team
          of passionate writers, thinkers, and creatives who are dedicated to
          sharing stories, insights, and knowledge that matter. From personal
          essays to in-depth analyses, our diverse range of voices ensures that
          there's something for everyone on our platform.
        </p>
        <h4>What We Do</h4>

        <p>
          Through thought-provoking articles, engaging multimedia content, and
          interactive discussions, we aim to foster a culture of curiosity and
          open-mindedness. Whether you're here to learn something new, challenge
          your perspectives, or simply be entertained, we're here to enrich your
          online experience.
        </p>
        <h4>Why We Do It</h4>
        <p>
          We believe that the internet should be more than just a source of
          information—it should be a source of inspiration, connection, and
          empowerment. By harnessing the power of digital media, we're committed
          to building a community where people can come together to learn, grow,
          and make a positive impact on the world.
        </p>
        <h4> Join Us</h4>
        <p>
          Whether you're a seasoned blogger or just starting out, we invite you
          to join our community and be a part of something bigger than yourself.
          Share your stories, engage with fellow readers, and help us create a
          space where ideas come to life.
        </p>
      </div>
    </article>
  );
};

export default About;
