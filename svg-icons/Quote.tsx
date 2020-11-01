import { SvgIcon } from "@material-ui/core";
import React from "react";

const QuoteIcon = (props) => {
  return (
    <SvgIcon viewBox="0 0 1000 1000" {...props}>
      <path d="M465.7 73H10v350.6c0 129 26.9 230.9 80.7 305.6 53.8 74.6 146 140.6 276.6 197.8l98.5-186.3C385.5 703 330 665.5 299.2 628.2c-30.7-37.3-47.8-81.5-51.3-132.4h217.9L465.7 73zM990 73H534.3v350.6c0 129 26.9 230.9 80.7 305.6 53.8 74.6 146 140.6 276.6 197.8L990 740.7c-80.3-37.7-135.8-75.2-166.6-112.5-30.7-37.3-47.8-81.5-51.3-132.4H990V73z" />
    </SvgIcon>
  );
};

export default QuoteIcon;
