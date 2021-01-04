import { AppBar, Box, Button, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import QuoteIcon from '../svg-icons/Quote';
import { useAuthContext } from '../utils/useAuthContext';

const useStyles = makeStyles(() => ({
  spacer: {
    flexGrow: 1,
  },
  iconQuote: {
    fill: 'white',
  },
}));

const PageHeader = (): JSX.Element => {
  const classes = useStyles();
  const { signIn, signOut, isAuthenticated } = useAuthContext();
  // console.log('isAuthenticated', isAuthenticated);

  const LoginButton = (
    <Button onClick={signIn} color="inherit">
      Login
    </Button>
  );
  const LogoutButton = (
    <Button onClick={signOut} color="inherit">
      Logout
    </Button>
  );

  return (
    <AppBar position="static" className="page-header">
      <Box component="header">
        <Toolbar>
          {/* <NextLink href="/"> */}
          <QuoteIcon className={classes.iconQuote}></QuoteIcon>
          {/* </NextLink> */}
          <div className={classes.spacer}></div>
          <p>isAuthenticated: {isAuthenticated};</p>

          {isAuthenticated ? LogoutButton : LoginButton}
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default PageHeader;
