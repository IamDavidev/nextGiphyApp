import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import PageLayout from '../src/components/pageLayout';

const Home: NextPage = (props: any): JSX.Element => {
  const [giphys, setGiphys] = useState([]);
  console.log('🚀 ~ file: index.tsx ~ line 8 ~ giphys', giphys);

  const offsetGiphys = 10;
  const limitGiphys = 10;
  const initialQueryGiphys = 'golang';

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${props.Api_key}&offset=${offsetGiphys}&limit=${limitGiphys}&q=${initialQueryGiphys}`
    )
      .then((res) => res.json())
      .then(setGiphys);
  }, [props.Api_key]);

  return (
    <PageLayout title="home" description="Description home page">
      <h1>Welcome NextGiffs</h1>
      <div>Giffs</div>
    </PageLayout>
  );
};

export async function getStaticProps(): Promise<any> {
  return {
    props: {
      Api_key: process.env.API_KEY_GIPHY,
    },
  };
}

export default Home;
