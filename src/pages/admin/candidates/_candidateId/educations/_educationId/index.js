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
  TextArea,
} from "../../../../../../components/layout/admin/ui";
import { Divider } from "antd";
import React from "react";

export const Education = () => {
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

  const onSubmitSaveCandidate = (formData) =>
    console.log("formData->", formData);
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
              <Button type="primary" htmlType="submit">
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
