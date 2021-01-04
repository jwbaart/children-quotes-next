import { Box } from '@material-ui/core';
import React from 'react';
import { UserProvider } from '../utils/user';
import PageFooter from './PageFooter';
import PageHeader from './PageHeader';

type LayoutProps = {
  user?: any;
  loading: boolean;
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({
  user,
  loading = false,
  children,
}: LayoutProps) => (
  <UserProvider value={{ user, loading }}>
    <PageHeader></PageHeader>
    <Box component="span" m={1}>
      {children}
    </Box>
    <PageFooter></PageFooter>
  </UserProvider>
);

export default Layout;
