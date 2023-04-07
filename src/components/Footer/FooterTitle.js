import React from "react";
import "./FooterStyles.css";

function FooterTitle({ children, ...restProps }) {
  return (
    <a to={'#'} className="footer-title" {...restProps}>
      {children}
    </a>
  );
}

export default FooterTitle;
