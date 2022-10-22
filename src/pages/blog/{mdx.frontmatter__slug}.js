import React from "react";
import Seo from "../../components/seo";
import Layout from "../../components/layout";
import { graphql } from "gatsby";

const BlogPost = ({
  data: {
    mdx: { frontmatter },
  },
  children,
}) => {
  return (
    <Layout pageTitle={frontmatter.title}>
      <p>{frontmatter.date}</p>
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
      }
    }
  }
`;

export const Head = ({ data }) => (
  <Seo pageTitle={data.mdx.frontmatter.title} />
);

export default BlogPost;
