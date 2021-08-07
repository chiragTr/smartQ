import React, { useState } from "react";
import data from "./data";
import ListItems from "./components/ListItems";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./styles.css";
import Footer from "./components/Footer";

const { menuDetails } = data;
export default function App() {
  const [data, setData] = useState(menuDetails);
  const [activeMenu, setActiveMenu] = useState(Object.keys(data)[0]);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const handleMenuItemClick = (id) => {
    const updatedMenu = data[activeMenu].map((item) => {
      if (item.foodid === id) {
        return {
          ...item,
          outofstock: !item.outofstock
        };
      }

      return item;
    });

    setData({
      ...data,
      [activeMenu]: updatedMenu
    });
  };

  const handleAvailable = (outofstock) => {
    const updatedMenu = data[activeMenu].map((item) => {
      return {
        ...item,
        outofstock: outofstock
      };
    });

    setData({
      ...data,
      [activeMenu]: updatedMenu
    });
  };

  return (
    <div className="App">
      <Header />
      <div className="MenuContainer">
        <Sidebar
          menuItems={Object.keys(data)}
          handleMenuClick={handleMenuClick}
        />
        <ListItems
          activeMenuItems={data[activeMenu]}
          onClickHandler={handleMenuItemClick}
        />
      </div>
      <Footer handleAvailable={handleAvailable} />
    </div>
  );
}
