import React from "react";
import "./styles.css";

const Footer = ({ handleAvailable }) => {
  return (
    <div className="Footer">
      <button onClick={() => handleAvailable(true)}>All unavailable</button>
      <button onClick={() => handleAvailable(false)}>All available</button>
      <button>Apply</button>
    </div>
  );
};

export default Footer;
