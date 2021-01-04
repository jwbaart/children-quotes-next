import { Box, Container } from '@material-ui/core';
import React from 'react';
import Layout from '../components/Layout';
import withAuth from '../components/WithAuth';

import { UserProfile } from '../utils/user';

type ProfileProps = { user: UserProfile };

const Profile = ({ user }: ProfileProps) => (
  <Layout loading={false} user={user}>
    <Container maxWidth="sm">
      <Box my={4}>
        <h1>Profile</h1>

        <div>
          <h3>Profile (server rendered)</h3>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
      </Box>
    </Container>
  </Layout>
);

export default withAuth(Profile);
