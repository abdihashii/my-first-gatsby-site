import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout pageTitle='About Me'>
      <h1>About Me</h1>
      <p>
        Hi there! I'm the proud developer of this site, which I built with
        Gatsby
      </p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <title>About Me</title>
  </>
);

export default AboutPage;
