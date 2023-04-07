import React from "react";
import "./FooterStyles.css";

function FooterLink({ children, ...restProps }) {
  return (
    <a to={'#'} className="footer-link" {...restProps}>
      {children}
    </a>
  );
}

export default FooterLink;
