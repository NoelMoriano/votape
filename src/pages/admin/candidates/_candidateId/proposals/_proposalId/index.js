import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useFormUtils } from "../../../../../../hooks";
import Col from "antd/lib/col";
import {
  Button,
  Form,
  Input,
  TextArea,
} from "../../../../../../components/layout/admin/ui";
import { Divider } from "antd";
import Row from "antd/lib/row";

export const Proposal = () => {
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

  const onSubmitSaveCandidate = (formData) =>
    console.log("formData->", formData);
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
            <Button type="primary" htmlType="submit">
              Guardar
            </Button>
          </Col>
        </Form>
      </Col>
      <Divider />
    </Row>
  );
};
