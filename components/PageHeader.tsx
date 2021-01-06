import {
  AppBar,
  Box,
  Button,
  Link,
  makeStyles,
  Toolbar,
} from '@material-ui/core';
import React from 'react';
import QuoteIcon from '../svg-icons/Quote';
import { useUser } from '../utils/user';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
}));

const PageHeader = (): JSX.Element => {
  const classes = useStyles();
  const { user, loading } = useUser();

  return (
    <AppBar position="static">
      <Box component="header">
        <Toolbar>
          <Link href="/">
            <QuoteIcon style={{ fill: 'white' }}></QuoteIcon>
          </Link>

          {!loading && user && (
            <>
              <Button
                variant="contained"
                href="/profile"
                color="secondary"
                className={classes.button}
              >
                Profile
              </Button>
              <Button
                variant="contained"
                href="/profile-ssr"
                color="secondary"
                className={classes.button}
              >
                Profile (SSR)
              </Button>
            </>
          )}

          <div className={classes.grow}></div>

          <div>
            {!loading &&
              (user ? (
                <Button variant="contained" href="/api/logout">
                  Logout
                </Button>
              ) : (
                <Button variant="contained" href="/api/login">
                  Login
                </Button>
              ))}
          </div>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default PageHeader;
