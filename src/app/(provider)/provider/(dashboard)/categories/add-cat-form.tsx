import type { FormProps } from "antd";
import { Form, Input, Select } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

type FieldType = {
  company?: string;
  role?: string;
  join?: string;
  resign?: string;
};

const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
  console.log("Success:", values);
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const handleChange = (value: string[]) => {
  console.log(`selected ${value}`);
};

export default function AddCatForm() {
  return (
    <>
      <div className="p-6 px-[7%]">
        <Title level={4} className="text-center">
          Add new category
        </Title>
        <div className="">
          <Form
            name="basic"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            requiredMark={false}
            className="w-full"
          >
            <Form.Item<FieldType>
              label="Category"
              name="company"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item<FieldType>
              label="Sub Category"
              name="role"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Select
                mode="tags"
                style={{ width: "100%" }}
                placeholder="Tags Mode"
                onChange={handleChange}
                size="large"
              />
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}
