import { AppBar, Box, Toolbar } from '@material-ui/core';
import React from 'react';
import QuoteIcon from '../svg-icons/Quote';
import NextLink from 'next/link';

const PageHeader = () => {
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
