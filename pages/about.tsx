import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Copyright from '../src/Copyright';
import Layout from '../components/Layout';
import NextLink from 'next/link';

export default function About() {
  return (
    <Layout>
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js example
          </Typography>
          {/* <Button
            variant="contained"
            color="primary"
            component={NextLink}
            href="/"
          >
            Go to the main page
          </Button> */}
          <NextLink href="/">To index</NextLink>

          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </Layout>
  );
}
