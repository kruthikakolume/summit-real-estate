import type { NextPage } from 'next';
import MainLayout from 'components/Layouts/MainLayout';
import Banner from 'components/Banner';
import Summits from 'components/Pillars';
import { useEffect, useState } from 'react';
import CTA from 'components/CTA';
import { useRouter } from 'next/router';
import { handleMoveToId } from 'utils';
import About from 'components/About';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/api';
import { listFoundations } from 'src/graphql/queries';

const client = generateClient();

const Home: NextPage = () => {
  const router = useRouter();
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const apiData = await client.graphql({ query: listFoundations, authMode: 'apiKey' });
      console.log(apiData);
      setData(apiData.data.listFoundations.items);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (router.query.cta) {
        handleMoveToId('cta');
      } else if (router.query['about-us']) {
        handleMoveToId('about-us');
      }
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  }, [router.query]);

  return (
    <MainLayout
      navbarProps={{
        logoColor: 'white',
        home: true,
      }}>
      <Banner imgSrc="/hero.jpg" />
      <Summits list={data} />
      <About />
      <CTA />
    </MainLayout>
  );
};

export default withAuthenticator(Home);
