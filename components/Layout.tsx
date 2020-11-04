import { Box } from '@material-ui/core';
import React from 'react';
import PageFooter from './PageFooter';
import PageHeader from './PageHeader';

const Layout = ({ children }) => {
  return (
    <div>
      <PageHeader></PageHeader>
      <Box component="span" m={1}>
        {children}
      </Box>
      <PageFooter></PageFooter>
    </div>
  );
};

export default Layout;
