import { AppBar, Box, Toolbar } from '@material-ui/core';
import React from 'react';
import QuoteIcon from '../svg-icons/Quote';
import signIn from '../utils/auth';

const PageHeader = (): JSX.Element => {
  return (
    <AppBar position="static">
      <Box component="header">
        <Toolbar>
          {/* <NextLink href="/"> */}
          <QuoteIcon style={{ fill: 'white' }}></QuoteIcon>
          {/* </NextLink> */}
          <button onClick={signIn}>Sign in</button>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default PageHeader;
