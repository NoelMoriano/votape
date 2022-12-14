import React, { useEffect, useState } from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { List, Skeleton } from "antd";
import { Link } from "react-router-dom";
import Avatar from "antd/lib/avatar/avatar";
import { useNavigate, useParams } from "react-router";
import { firestore, querySnapshotToArray } from "../../../../../firebase";
import {
  modalConfirm,
  notification,
} from "../../../../../components/layout/admin/ui";

export const Proposals = () => {
  const navigate = useNavigate();
  const { candidateId } = useParams();
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    fetchProposals();
  }, []);

  const fetchProposals = async () => {
    await firestore
      .collection("proposals")
      .where("candidateId", "==", candidateId)
      .onSnapshot((snapshot) => {
        const proposals_ = querySnapshotToArray(snapshot);

        setProposals(proposals_);
      });
  };

  const removeProposal = async (proposalId) => {
    try {
      await firestore.collection("proposals").doc(proposalId).delete();
      notification({ type: "success" });
    } catch (e) {
      console.log(e);
    }
  };

  const onRemoveProposalConfirm = (proposalId) =>
    modalConfirm({ onOk: () => removeProposal(proposalId) });

  const onNavigateTo = (url) => navigate(url);
  return (
    <Row>
      <Col span={24}>
        <List
          className="demo-loadmore-list"
          loading={false}
          itemLayout="horizontal"
          loadMore={false}
          dataSource={proposals}
          renderItem={(proposal) => (
            <List.Item
              actions={[
                <Link
                  to={`/admin/candidates/${candidateId}/proposals/${proposal}`}
                >
                  Edit
                </Link>,
                <a onClick={() => onRemoveProposalConfirm(proposal.id)}>
                  Delete
                </a>,
              ]}
            >
              <Skeleton avatar title={false} loading={false} active>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<Link to="https://ant.design">{proposal.title}</Link>}
                  description={proposal.description}
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};
