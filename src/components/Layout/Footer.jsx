import React from "react";
import { SITETITLE, COPYRIGHT } from "../Logic/DynamicValues";

const Footer = () => {
  return (
    <div>
      <h4>
        {COPYRIGHT} {SITETITLE}
      </h4>
    </div>
  );
};

export default Footer;
