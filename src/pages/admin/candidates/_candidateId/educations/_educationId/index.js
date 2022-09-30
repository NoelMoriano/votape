import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import * as yup from "yup";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormUtils } from "../../../../../../hooks";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import {
  Button,
  DatePicker,
  Form,
  Input,
  notification,
} from "../../../../../../components/layout/admin/ui";
import { Divider } from "antd";
import { assign } from "lodash";
import { firestore } from "../../../../../../firebase";

export const Education = () => {
  const { candidateId } = useParams();
  const navigate = useNavigate();
  const [savingEducation, setSavingEducation] = useState(false);

  const schema = yup.object({
    title: yup.string().required(),
    initialYear: yup.mixed().required(),
    finishYear: yup.mixed(),
  });

  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { required, error } = useFormUtils({ errors, schema });

  const mapEducation = (formData, educationId) =>
    assign({}, formData, {
      candidateId,
      initialYear: new Date(formData.initialYear),
      finishYear: new Date(formData.finishYear),
      id: educationId,
      createAt: new Date(),
    });

  const onGoBack = () => navigate(-1);

  const onSubmitSaveCandidate = async (formData) => {
    try {
      setSavingEducation(true);
      const educationId = firestore.collection("educations").doc().id;

      const education_ = mapEducation(formData, educationId);

      await firestore
        .collection("educations")
        .doc(educationId)
        .set(education_, { merge: true });

      notification({ type: "success" });

      onGoBack();
    } catch (e) {
      console.error(e);
      notification({ type: "error" });
    } finally {
      setSavingEducation(false);
    }
  };

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Form onSubmit={handleSubmit(onSubmitSaveCandidate)}>
          <Row gutter={[16, 16]}>
            <Col span={24}>
              <Controller
                name="title"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value, name } }) => (
                  <Input
                    label="Ingrese nombre de institucion"
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
            <Col md={12} sm={12} xs={24}>
              <Controller
                name="initialYear"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value, name } }) => (
                  <DatePicker
                    picker="year"
                    label="Ingrese año de inicio"
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
            <Col md={12} sm={12} xs={24}>
              <Controller
                name="finishYear"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value, name } }) => (
                  <DatePicker
                    picker="year"
                    label="Ingrese año de fin"
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
                disabled={savingEducation}
                loading={savingEducation}
              >
                Guardar
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
      <Divider />
    </Row>
  );
};
