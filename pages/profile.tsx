import { Box, Container } from '@material-ui/core';
import React from 'react';
import Layout from '../components/Layout';
import withAuth from '../components/WithAuth';
import { useFetchUser } from '../utils/user';
import Typography from '@material-ui/core/Typography';
import ProTip from '../src/ProTip';
import NextLink from 'next/link';
import Copyright from '../src/Copyright';
import { ExchangeRates } from '../components/ExchangeRates';
import { Viewer } from '../components/Viewer';

export const Profile = (): React.ReactElement => {
  const { user, loading } = useFetchUser();

  return (
    <Layout user={user} loading={loading}>
      <Container maxWidth="sm">
        <Box my={4}>
          <h1>Profile</h1>

          {loading && <p>Loading profile...</p>}

          {!loading && user && (
            <>
              <p>Profile:</p>
              <pre>{JSON.stringify(user, null, 2)}</pre>

              <Typography variant="h4" component="h1" gutterBottom>
                Next.js example
              </Typography>
              <Viewer></Viewer>
              <ExchangeRates></ExchangeRates>
              <NextLink href="/about">To about</NextLink>
              <ProTip />
              <Copyright />
            </>
          )}
        </Box>
      </Container>
    </Layout>
  );
};

export default withAuth(Profile);
