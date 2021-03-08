import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPostTemplate = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.title + " hero"} />
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String) {
    mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        date(formatString: "YYYY-MMMM-DD")
        title
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default BlogPostTemplate;
