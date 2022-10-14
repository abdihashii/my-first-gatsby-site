import React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

const Seo = ({ pageTitle }) => {
  const siteMetadata = useSiteMetadata();

  return (
    <title>
      {pageTitle} | {siteMetadata.title}
    </title>
  );
};

export default Seo;
