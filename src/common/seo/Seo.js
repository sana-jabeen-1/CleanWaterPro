import Head from "next/head";

const SEO = ({ pageTitle, canonical }) => (
  <>
    <Head>
      <title>{pageTitle && `${pageTitle} | Clean Water Pro's`}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="description"
        content="Discover top-quality water refiners and softeners by Clean Water Pro's. We specialize in installation and premium water treatment solutions in the DFW area."
      />
      <meta name="robots" content="index, follow" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {canonical && <link rel="canonical" href={canonical} />}
    </Head>
  </>
);

export default SEO;
