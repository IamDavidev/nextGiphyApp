import type { ReactNode } from 'react';
import type { NextPage } from 'next';

import Head from 'next/head';

export default function PageLayout({
  children,
  title,
  description,
}: {
  children: ReactNode;
  title: string;
  description: string;
}): JSX.Element {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <main className="container">{children}</main>
      <style jsx>
        {`
          .container {
            padding: 1rem 2rem;
            color: #777;
          }
        `}
      </style>
    </>
  );
}
