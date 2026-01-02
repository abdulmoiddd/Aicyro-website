import Head from "next/head";

const SITE_NAME = "Aicyro";
const BASE_URL = "https://www.aicyro.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;
const DEFAULT_LOCALE = "en_US";
const DEFAULT_KEYWORDS =
  "SaaS development company, Cyber security experts, Aicyro Solutions, AI solutions, Cloud & DevOps, App development, Web development, VAPT, QA automation, Blockchain security, Software agency";
const TITLE_SUFFIX = "Advanced AI & Cybersecurity Solutions";

const Seo = ({
  title,
  description,
  url,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  keywords,
}) => {
  const baseTitle = title ? `${SITE_NAME} | ${title} ` : SITE_NAME;
  const pageTitle = `${TITLE_SUFFIX} | ${baseTitle}`;
  const canonicalUrl = url ? `${BASE_URL}${url}` : BASE_URL;
  const keywordString = keywords
    ? `${DEFAULT_KEYWORDS}, ${keywords}`
    : DEFAULT_KEYWORDS;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywordString} />
      <meta name="author" content={SITE_NAME} />
      <meta name="theme-color" content="#0B0219" />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:locale" content={DEFAULT_LOCALE} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default Seo;
