import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { graphql } from 'gatsby';

const Blog = ({
  data: {
    allFile: { nodes },
  },
}) => {
  return (
    <Layout pageTitle="Blog">
      <ul>
        {nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`;

export const Head = () => <Seo pageTitle="Blog" />;

export default Blog;
