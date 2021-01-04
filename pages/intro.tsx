import React from 'react';
import Layout from '../components/Layout';
import { useFetchUser } from '../utils/user';

const Intro = (): JSX.Element => {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <h1>Intro</h1>
    </Layout>
  );
};

export default Intro;
