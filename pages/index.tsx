import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Layout from '../components/Layout';
import { useFetchUser } from '../utils/user';
import { Quotes } from '../components/quotes/Quotes';

const Index: React.FC = (): JSX.Element => {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <Container maxWidth="sm">
        <Box my={4}>
          <h1>Quotes</h1>

          <Quotes></Quotes>
        </Box>
      </Container>
    </Layout>
  );
};

export default Index;
