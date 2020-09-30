import React from 'react';
import Helmet from 'react-helmet';

const SEO_DATA = {
  description: 'Official websitsite of Developer Student Clubs KITRC. Powered By Google Developers',
  title: 'Developer Student Clubs KITRC',
  url: 'https://dsckitrc.tech/',
  author: 'prajvalraval',
  keywords: ['dsc', 'google', 'kitrc', 'developer student clubs', 'kalol institute of technology and research center', 'google developers', 'kirc', 'kalol'],
};

const SEO = () => {
  return (
    <Helmet>
    
      <meta property="og:title" content={SEO_DATA.title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SEO_DATA.url} />
      <meta property="og:description" content={SEO_DATA.description} />

      <meta name="description" content={SEO_DATA.description} />
      <meta name="keywords" content={SEO_DATA.keywords.join(', ')} />
      <meta name="author" content={SEO_DATA.author} />
      <title>{SEO_DATA.title}</title>
      <html lang="en" />
    </Helmet>
  );
};

export default SEO;
