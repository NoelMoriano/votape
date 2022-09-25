import React from "react";
import Row from "antd/lib/row";
import { Button } from "../../../components/layout/admin/ui";
import Col from "antd/lib/col";
import { useNavigate } from "react-router";
import Title from "antd/lib/typography/Title";
import { Link } from "react-router-dom";
import { List, Skeleton } from "antd";
import Avatar from "antd/lib/avatar/avatar";

export const Candidates = () => {
  const navigate = useNavigate();

  const onNavigateTo = (url) => navigate(url);

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Button
          type="primary"
          size="large"
          onClick={() => onNavigateTo("/admin/candidates/new")}
        >
          Agregar candidado
        </Button>
      </Col>
      <Col span={24}>
        <Title level={3}>Candidatos</Title>
      </Col>
      <Col span={24}>
        <List
          className="demo-loadmore-list"
          loading={false}
          itemLayout="horizontal"
          loadMore={false}
          dataSource={[
            { name: "Hola mundo", description: "description description" },
          ]}
          renderItem={() => (
            <List.Item
              actions={[
                <Link to="/admin/candidates/new">Edit</Link>,
                <Link to="/admin/candidates/new">Delete</Link>,
              ]}
            >
              <Skeleton avatar title={false} loading={false} active>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<a href="https://ant.design">Titulo de anime</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                <div>content</div>
              </Skeleton>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};
