import React from "react";
import "./footer2.css";
import { useAuth } from "../../store/context";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer2() {
  const { theme } = useAuth();
  const date = new Date().getFullYear();
  return (
    <div className="footer2" id={theme}>
      <div className="copyrights">
        <p>©{date} CRAPPO. All rights reserved</p>
      </div>
      <div className="copyright-logo">
        <div className="logos">
          <FacebookIcon />
        </div>
        <div className="logos">
          <InstagramIcon />
        </div>
        <div className="logos">
          <YouTubeIcon />
        </div>
        <div className="logos">
          <TwitterIcon />
        </div>
        <div className="logos">
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer2;
