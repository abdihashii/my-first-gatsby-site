import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle='Home Page'>
      <p>I'm making this by following the Gatsby Tutorial</p>
      <StaticImage
        src='https://pbs.twimg.com/media/DXQedOOUMAAwzvm?format=jpg&name=small'
        alt='Pixel Art of Planets'
      />
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
