import { Box, Container } from '@material-ui/core';
import React from 'react';
import Layout from '../components/Layout';
import withAuth from '../components/WithAuth';
import { useFetchUser } from '../utils/user';

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
            </>
          )}
        </Box>
      </Container>
    </Layout>
  );
};

export default withAuth(Profile);
