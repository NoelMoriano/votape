import React from "react";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import { Button, Form, Input } from "../../../../components/layout/admin/ui";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useFormUtils } from "../../../../hooks";
import { ExtraInformation } from "./ExtraInformation";
import { Divider } from "antd";

export const Candidate = () => {
  const schema = yup.object({
    animeCode: yup.string().required(),
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
              name="animeCode"
              control={control}
              defaultValue=""
              render={({ field: { onChange, value, name } }) => (
                <Input
                  label="Ingrese código o url del anime"
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
        </Form>
      </Col>
      <Divider />
      <Col span={24}>
        <ExtraInformation />
      </Col>
    </Row>
  );
};
