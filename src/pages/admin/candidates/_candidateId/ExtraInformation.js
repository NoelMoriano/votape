import React from "react";
import Row from "antd/lib/row";
import { Tabs } from "antd";
import { Button } from "../../../../components/layout/admin/ui";
import Title from "antd/lib/typography/Title";
import { Proposals } from "./proposals";
import { useNavigate } from "react-router";
import { Educations } from "./educations";

export const ExtraInformation = ({ candidateId }) => {
  const navigate = useNavigate();

  const onNavigateTo = (url) => navigate(url);
  return (
    <Row>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Propuestas" key="1">
          <Title level={3}>Propuestas</Title>
          <Button
            type="primary"
            onClick={() =>
              onNavigateTo(`/admin/candidates/${candidateId}/proposals/new`)
            }
          >
            Agregar propuesta
          </Button>
          <Proposals />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Educacion" key="2">
          <Title level={3}>Eduacion</Title>
          <Button
            type="primary"
            onClick={() =>
              onNavigateTo(`/admin/candidates/${candidateId}/educations/new`)
            }
          >
            Agregar educacion
          </Button>
          <Educations />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </Tabs.TabPane>
      </Tabs>
    </Row>
  );
};
