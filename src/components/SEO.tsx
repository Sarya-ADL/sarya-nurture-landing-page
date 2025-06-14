import { Helmet } from "react-helmet-async";
import { FC } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}

const SEO: FC<SEOProps> = ({
  title = "Sarya Nurture - AI-Powered Language Learning",
  description = "Transform your language learning journey with Sarya Nurture. Our AI-powered platform helps you learn languages naturally and effectively.",
  keywords = ["language learning", "AI", "education", "Sarya Nurture", "language app"],
  image = "/og-image.jpg",
  url = "https://saryanurture.com",
  type = "website",
}) => {
  const siteTitle = "Sarya Nurture";
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />

      {/* Open Graph meta tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO; 