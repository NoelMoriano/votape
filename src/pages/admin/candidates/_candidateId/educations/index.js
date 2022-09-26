import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { List, Skeleton } from "antd";
import { Link } from "react-router-dom";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";

export const Educations = () => {
  return (
    <Row>
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
