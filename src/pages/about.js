import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud developer of this site, which I built with
        Gatsby
      </p>
    </Layout>
  );
};

export const Head = () => <Seo pageTitle="About Me" />;

export default AboutPage;
