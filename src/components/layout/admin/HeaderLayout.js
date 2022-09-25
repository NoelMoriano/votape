import React from "react";
import { Layout } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const { Header } = Layout;

export const HeaderLayout = ({ isVisibleDrawer, setIsVisibleDrawer }) => {
  return (
    <Header className="site-layout-background header-layout">
      <span
        onClick={() => setIsVisibleDrawer(!isVisibleDrawer)}
        className="trigger"
      >
        <FontAwesomeIcon icon={faBars} />
      </span>
    </Header>
  );
};
