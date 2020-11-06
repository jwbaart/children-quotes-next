import { AppBar, Box, Toolbar } from '@material-ui/core';
import React from 'react';
import QuoteIcon from '../svg-icons/Quote';

const PageHeader = (): JSX.Element => {
  return (
    <AppBar position="static">
      <Box component="header">
        <Toolbar>
          {/* <NextLink href="/"> */}
          <QuoteIcon style={{ fill: 'white' }}></QuoteIcon>
          {/* </NextLink> */}
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default PageHeader;
