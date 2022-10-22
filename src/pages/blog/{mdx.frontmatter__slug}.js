import React from "react";
import Seo from "../../components/seo";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPost = ({
  data: {
    mdx: { frontmatter },
  },
  children,
}) => {
  const image = getImage(frontmatter.hero_image);

  return (
    <Layout pageTitle={frontmatter.title}>
      <p>{frontmatter.date}</p>
      <GatsbyImage image={image} alt={frontmatter.hero_image_alt} />
      <p>
        Photo Credit:{" "}
        <a href={frontmatter.hero_image_credit_link}>
          {frontmatter.hero_image_credit_text}
        </a>
      </p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMM Do, YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        hero_image_alt
        hero_image_credit_text
        hero_image_credit_link
      }
    }
  }
`;

export const Head = ({ data }) => (
  <Seo pageTitle={data.mdx.frontmatter.title} />
);

export default BlogPost;
