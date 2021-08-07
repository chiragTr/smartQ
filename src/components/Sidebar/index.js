import React from "react";
import "./styles.css";

const Sidebar = ({ menuItems, handleMenuClick }) => {
  return (
    <div className="Sidebar">
      {menuItems.map((item) => (
        <button
          className="SidebarItem"
          key={item}
          onClick={() => handleMenuClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
