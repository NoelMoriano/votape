import React from "react";
import Row from "antd/lib/row";
import { Tabs } from "antd";
import { Button } from "../../../../components/layout/admin/ui";
import Title from "antd/lib/typography/Title";

export const ExtraInformation = () => {
  return (
    <Row>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Tab 1" key="1">
          <Title level={3}>Propuestas</Title>
          <Button type="primary">Agregar propuesta</Button>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 2" key="2">
          <Title level={3}>Eduacion</Title>
          <Button type="primary">Agregar educacion</Button>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </Tabs.TabPane>
      </Tabs>
    </Row>
  );
};
