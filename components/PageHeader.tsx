import { AppBar, Box, Toolbar } from "@material-ui/core";
import React from "react";
import QuoteIcon from "../svg-icons/Quote";
import Link from "./../src/Link";

const PageHeader = () => {
  return (
    <AppBar position="static">
      <Box component="header">
        <Toolbar>
          <Link href="/">
            <QuoteIcon style={{ fill: "white" }}></QuoteIcon>
          </Link>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default PageHeader;
