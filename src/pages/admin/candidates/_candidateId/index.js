import React, { useEffect, useState } from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import {
  Button,
  Form,
  Input,
  notification,
  RadioGroup,
  Spinner,
} from "../../../../components/layout/admin/ui";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useFormUtils } from "../../../../hooks";
import { ExtraInformation } from "./ExtraInformation";
import { Divider } from "antd";
import { firestore } from "../../../../firebase";
import { useNavigate, useParams } from "react-router";

export const Candidate = () => {
  const { candidateId } = useParams();
  const navigate = useNavigate();
  const [candidate, setCandidate] = useState(null);
  const [loadingCandidate, setLoadingCandidate] = useState(null);
  const [savingCandidate, setSavingCandidate] = useState(false);

  useEffect(() => {
    fetchCandidate();
  }, []);

  const onNavigateTo = (url) => navigate(url);
  const onGoBack = () => navigate(-1);

  const fetchCandidate = async () => {
    try {
      if (candidateId === "new") {
        const candidateId_ = firestore.collection("candidates").doc().id;

        return setCandidate({ id: candidateId_ });
      }

      const queryCandidates = await firestore
        .collection("candidates")
        .doc(candidateId)
        .get();

      const candidates_ = queryCandidates.data();

      setCandidate(candidates_);
    } catch (e) {
      console.log("ErrorGetCandidates->", e);
    } finally {
      setLoadingCandidate(false);
    }
  };

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

      await firestore
        .collection("candidates")
        .doc(candidate.id)
        .set(
          { ...formData, id: candidate.id, createAt: new Date() },
          { merge: true }
        );

      notification({ type: "success" });

      onGoBack();
    } catch (e) {
      console.log("ErrorSetCandidate: ", e);
      notification({ type: "error" });
    } finally {
      resetForm();
      setSavingCandidate(false);
    }
  };

  useEffect(() => {
    resetForm();
  }, [candidate]);

  const resetForm = () => {
    reset({
      firstName: candidate?.firstName || "",
      lastName: candidate?.lastName || "",
      chargeRequest: candidate?.chargeRequest || "",
      placeOfPostulation: candidate?.placeOfPostulation || "",
      dni: candidate?.dni || "",
      country: candidate?.country || "",
      department: candidate?.department || "",
      province: candidate?.province || "",
      district: candidate?.district || "",
      politicalParty: candidate?.politicalParty || "",
    });
  };

  if (loadingCandidate) return <Spinner fullscreen />;

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
              {candidateId === "new" ? "Guardar" : "Actualizar"}
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
