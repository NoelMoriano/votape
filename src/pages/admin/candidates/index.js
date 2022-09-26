import React, { useEffect, useState } from "react";
import Row from "antd/lib/row";
import { Button } from "../../../components/layout/admin/ui";
import Col from "antd/lib/col";
import { useNavigate } from "react-router";
import Title from "antd/lib/typography/Title";
import { Link } from "react-router-dom";
import { List, Skeleton } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { firestore, querySnapshotToArray } from "../../../firebase";

export const Candidates = () => {
  const navigate = useNavigate();

  const [candidates, setCandidates] = useState([]);
  const [loadingCandidates, setLoadingCandidates] = useState(true);

  const onNavigateTo = (url) => navigate(url);

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      const queryCandidates = await firestore.collection("candidates").get();
      const candidates_ = querySnapshotToArray(queryCandidates);
      setCandidates(candidates_);
    } catch (e) {
      console.log("ErrorGetCandidates->", e);
    } finally {
      setLoadingCandidates(false);
    }
  };

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
          loading={loadingCandidates}
          itemLayout="horizontal"
          loadMore={false}
          dataSource={candidates}
          renderItem={(candidate) => (
            <List.Item
              actions={[
                <Link to={`/admin/candidates/${candidate.id}`}>Edit</Link>,
                <Link to={`/admin/candidates/${candidate.id}`}>Delete</Link>,
              ]}
            >
              <Skeleton avatar title={false} loading={loadingCandidates} active>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={
                    <a href="https://ant.design">{`${candidate.firstName} ${candidate.lastName}`}</a>
                  }
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
