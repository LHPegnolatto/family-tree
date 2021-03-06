import Head from 'next/head';

interface HeadProps {
  title: string;
  metaDescription?: string;
}

export default function ({
  title,
  metaDescription = 'Family Tree is a site that seeks to bring families closer.',
}: HeadProps) {
  return (
    <Head>
      <meta name="description" content={metaDescription} />
      <title>{title}</title>
    </Head>
  );
}
