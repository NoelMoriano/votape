import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { List, Skeleton } from "antd";
import { Link } from "react-router-dom";
import Avatar from "antd/lib/avatar/avatar";
import { firestore, querySnapshotToArray } from "../../../../../firebase";
import {
  modalConfirm,
  notification,
} from "../../../../../components/layout/admin/ui";

export const Educations = () => {
  const { candidateId } = useParams();
  const [educations, setEducations] = useState();

  useEffect(() => {
    fetchEducations();
  }, []);

  const fetchEducations = async () => {
    await firestore
      .collection("educations")
      .where("candidateId", "==", candidateId)
      .onSnapshot((snapshot) => {
        const educations_ = querySnapshotToArray(snapshot);

        setEducations(educations_);
      });
  };

  const removeEducation = async (educationId) => {
    try {
      await firestore.collection("educations").doc(educationId).delete();
      notification({ type: "success" });
    } catch (e) {
      console.error(e);
    }
  };

  const onRemoveEducationConfirm = (educationId) => {
    modalConfirm({ onOk: () => removeEducation(educationId) });
  };

  return (
    <Row>
      <Col span={24}>
        <List
          className="demo-loadmore-list"
          loading={false}
          itemLayout="horizontal"
          loadMore={false}
          dataSource={educations}
          renderItem={(education) => (
            <List.Item
              actions={[
                <Link
                  to={`/admin/candidates/${candidateId}/educations/${education}`}
                >
                  Edit
                </Link>,
                <a onClick={() => onRemoveEducationConfirm(education.id)}>
                  Delete
                </a>,
              ]}
            >
              <Skeleton avatar title={false} loading={false} active>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<Link to="https://ant.design">{education.title}</Link>}
                  description={education.title}
                />
              </Skeleton>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};
