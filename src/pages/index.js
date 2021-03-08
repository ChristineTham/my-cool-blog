import * as React from "react";
// import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

const imageURL =
  "https://images.unsplash.com/photo-1558470570-c9a5a5ade867?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      Welcome to my blog!
      <StaticImage src={imageURL} alt="pink" />
      <span>
        Photo by{" "}
        <a href="https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Paweł Czerwiński
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/pink?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
          Unsplash
        </a>
      </span>
    </Layout>
  );
};

export default IndexPage;
