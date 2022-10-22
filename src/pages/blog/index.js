import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql, Link } from "gatsby";

const Blog = ({
  data: {
    allMdx: { nodes },
  },
}) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <p>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          slug
          title
          date(formatString: "MMM Do YYYY")
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo pageTitle="Blog" />;

export default Blog;
