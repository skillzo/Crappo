import React from "react";
import "./footer2.css";
import { useAuth } from "../../store/context";

function Footer2() {
  const { theme } = useAuth();
  const date = new Date().getFullYear();
  return (
    <div className="footer2" id={theme}>
      <div className="copyrights">
        <p>©{date} CRAPPO. All rights reserved</p>
      </div>
      <div className="copyright-logo">
        <div className="logos"> </div>
      </div>
    </div>
  );
}

export default Footer2;
