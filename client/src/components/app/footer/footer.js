import React from "react";
import "./footer.css";

function Footer({ children }) {
  return (
    <div>
      <div id="phantom" />
      <div id="style">{children}</div>
    </div>
  );
}

export default Footer;
