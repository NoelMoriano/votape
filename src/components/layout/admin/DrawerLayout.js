import React from "react";
import { Drawer, Menu } from "antd";
// import { FontAwesomeIconicon={faBook} , HomeOutlined } from "@ant-design/icons";
import styled from "styled-components";
// import { version } from "../../firebase";
import Title from "antd/lib/typography/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

export const DrawerLayout = ({
  isVisibleDrawer,
  setIsVisibleDrawer,
  navigateTo,
}) => {
  return (
    <DrawerContainer
      title={
        <div>
          <Title level={3} style={{ margin: 0 }}>
            Alvillantas
          </Title>
          <h5>version: 0.0.1</h5>
        </div>
      }
      placement="left"
      closable={true}
      onClose={() => setIsVisibleDrawer(!isVisibleDrawer)}
      visible={isVisibleDrawer}
      key="left"
      className="drawer-content"
      bodyStyle={{ padding: "0" }}
    >
      <div className="logo" />
      <Menu defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item
          key="1"
          icon={<FontAwesomeIcon icon={faBook} />}
          onClick={() => {
            navigateTo("/");
            setIsVisibleDrawer(false);
          }}
        >
          Home
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<FontAwesomeIcon icon={faBook} />}
          onClick={() => {
            navigateTo("/admin/candidates");
            setIsVisibleDrawer(false);
          }}
        >
          Candidatos
        </Menu.Item>
      </Menu>
    </DrawerContainer>
  );
};

const DrawerContainer = styled(Drawer)`
  .drawer-content {
  }
`;
