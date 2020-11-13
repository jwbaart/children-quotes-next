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
  const { user, signIn, signOut } = useAuthContext();

  return (
    <AppBar position="static" className="page-header">
      <Box component="header">
        <Toolbar>
          {/* <NextLink href="/"> */}
          <QuoteIcon className={classes.iconQuote}></QuoteIcon>
          {/* </NextLink> */}
          <div className={classes.spacer}></div>
          <Button onClick={signIn} color="inherit">
            Login
          </Button>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default PageHeader;
