import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOMetaProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

const SEOMeta: React.FC<SEOMetaProps> = ({ title, description, path, ogImage }) => {
  const url = `https://qlavo.in${path}`;
  const image = ogImage || 'https://qlavo.in/og-qlavo.png';

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={ogImage ? title : 'Qlavo — Be the brand in the answer. Generative engine optimization.'} />
      {!ogImage && <meta property="og:image:width" content="1200" />}
      {!ogImage && <meta property="og:image:height" content="630" />}
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEOMeta;
