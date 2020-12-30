import React from "react";
import { SITETITLE, COPYRIGHT } from "../Logic/DynamicValues";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-light">
      <div className="footerDiv">
        <h6>
          {COPYRIGHT} {SITETITLE}
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
