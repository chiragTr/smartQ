import React from "react";
import "./styles.css";

const ListItems = ({ activeMenuItems, onClickHandler }) => {
  // console.log(activeMenuItems);
  return (
    <div className="MenuItems">
      {activeMenuItems.map((item) => {
        return (
          <div
            className={item.outofstock ? "MenuItem outofstock" : "MenuItem"}
            key={item.foodid}
            onClick={() => onClickHandler(item.foodid)}
          >
            {item.foodname}
          </div>
        );
      })}
    </div>
  );
};

export default ListItems;
