import type { NextPage } from 'next';
import MainLayout from 'components/Layouts/MainLayout';
import Banner from 'components/career/Banner';
import Values from 'components/career/Values';
import Benefits from 'components/career/Benefits';
import Head from 'next/head';
import useMediaQuery from '@mui/material/useMediaQuery';
import AdminAPI from 'components/AdminAPI';

const Admin: NextPage = () => {
  // const matches = useMediaQuery('(max-width:912px)');

  return (
    <MainLayout
      navbarProps={{
        // logoColor: matches ? 'white' : 'black',
        logoColor: 'black',
      }}>
      <Head>
        <title>Careers - Summit</title>
        <meta
          name="description"
          content="Explore career opportunities, learn about company values, and see employee benefits and perks."
        />
      </Head>
      <AdminAPI />
    </MainLayout>
  );
};

export default Admin;
