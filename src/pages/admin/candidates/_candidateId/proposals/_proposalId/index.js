import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useFormUtils } from "../../../../../../hooks";
import Col from "antd/lib/col";
import {
  Button,
  Form,
  Input,
  notification,
  TextArea,
} from "../../../../../../components/layout/admin/ui";
import { Divider } from "antd";
import Row from "antd/lib/row";
import { useNavigate, useParams } from "react-router";
import { firestore } from "../../../../../../firebase";
import { assign } from "lodash";

export const Proposal = () => {
  const { candidateId } = useParams();
  const navigate = useNavigate();
  const [savingProposal, setSavingProposal] = useState(false);

  const schema = yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
  });

  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { required, error } = useFormUtils({ errors, schema });

  const onGoBack = () => navigate(-1);

  const mapProposal = (formData, proposalId) =>
    assign({}, formData, { candidateId, id: proposalId, createAt: new Date() });

  const onSubmitSaveCandidate = async (formData) => {
    try {
      setSavingProposal(true);
      const proposalId = firestore.collection("proposals").doc().id;

      const proposal_ = mapProposal(formData, proposalId);

      await firestore
        .collection("proposals")
        .doc(proposalId)
        .set(proposal_, { merge: true });

      notification({ type: "success" });

      onGoBack();
    } catch (e) {
      console.error(e);
      notification({ type: "error" });
    } finally {
      setSavingProposal(false);
    }
  };
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Form onSubmit={handleSubmit(onSubmitSaveCandidate)}>
          <Col span={24}>
            <Controller
              name="title"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Ingrese titulo de propuesta"
                  size="large"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                />
              )}
            />
          </Col>
          <Col span={24}>
            <Controller
              name="description"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <TextArea
                  label="Ingrese descripcion de propuesta"
                  size="large"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                />
              )}
            />
          </Col>
          <Col span={24}>
            <Button
              type="primary"
              htmlType="submit"
              loading={savingProposal}
              disabled={savingProposal}
            >
              Guardar
            </Button>
          </Col>
        </Form>
      </Col>
      <Divider />
    </Row>
  );
};
