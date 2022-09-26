import React, { useState } from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import {
  Button,
  Form,
  Input,
  notification,
  RadioGroup,
} from "../../../../components/layout/admin/ui";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useFormUtils } from "../../../../hooks";
import { ExtraInformation } from "./ExtraInformation";
import { Divider } from "antd";
import { firestore } from "../../../../firebase";

export const Candidate = () => {
  const [savingCandidate, setSavingCandidate] = useState(false);

  const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    chargeRequest: yup.string().required(),
    placeOfPostulation: yup.string().required(),
    dni: yup.number().required(),
    country: yup.string().required(),
    department: yup.string().required(),
    province: yup.string().required(),
    district: yup.string().required(),
    politicalParty: yup.string().required(),
  });

  const {
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { required, error } = useFormUtils({ errors, schema });

  const onSubmitSaveCandidate = async (formData) => {
    try {
      setSavingCandidate(true);

      const candidateId = firestore.collection("candidates").doc().id;

      await firestore
        .collection("candidates")
        .doc(candidateId)
        .set({ ...formData, id: candidateId, createAt: new Date() });

      notification({ type: "success" });
    } catch (e) {
      console.log("ErrorSetCandidate: ", e);
      notification({ type: "error" });
    } finally {
      resetForm();
      setSavingCandidate(false);
    }
  };

  const resetForm = () =>
    reset({
      firstName: "",
      lastName: "",
      chargeRequest: "",
      placeOfPostulation: "",
      dni: "",
      country: "",
      department: "",
      province: "",
      district: "",
      politicalParty: "",
    });

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Form onSubmit={handleSubmit(onSubmitSaveCandidate)}>
          <Col span={24}>
            <Controller
              name="firstName"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Ingrese Nombres"
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
              name="lastName"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Ingrese Apellidos"
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
              name="politicalParty"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="PartidoPolitico "
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
              name="chargeRequest"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Cargo al que postula "
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
              name="placeOfPostulation"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Lugar al que postula "
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
              name="dni"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Dni "
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
              name="sex"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <RadioGroup
                  label="Sex "
                  size="large"
                  name={name}
                  value={value}
                  onChange={onChange}
                  error={error(name)}
                  required={required(name)}
                  options={[
                    { label: "Masculino", value: "male" },
                    { label: "Femenino", value: "female" },
                  ]}
                />
              )}
            />
          </Col>
          <Col span={24}>
            <Controller
              name="country"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="País "
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
              name="department"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Departamento "
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
              name="province"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Provincia "
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
              name="district"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Distrito "
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
              loading={savingCandidate}
              disabled={savingCandidate}
            >
              Guardar
            </Button>
          </Col>
        </Form>
      </Col>
      <Divider />
      <Col span={24}>
        <ExtraInformation />
      </Col>
    </Row>
  );
};
