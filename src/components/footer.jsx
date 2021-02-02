import React from "react";

const Footer = () => {
  return (
    <p className="border-top pt-3 text-center">
      GreenLeaf <i className="fab fa-envira"></i> App &copy; {new Date().getFullYear()}
    </p>
  );
};

export default Footer;
