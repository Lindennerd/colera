import { type Company } from "@prisma/client";
import { Button, Form, Input } from "antd";
import { MaskedInput } from "antd-mask-input";

export type CreateCompany = Omit<Company, "id">;
export interface CompanyFormProps {
  company?: CreateCompany;
}

export default function CompanyForm(props: CompanyFormProps) {
  const initialValues = {
    id: 0,
    name: "",
  };

  return (
    <Form
      labelAlign="left"
      labelCol={{ span: 2 }}
      name="Nova Empresa"
      initialValues={props.company ?? initialValues}
      onFinish={(values) => {
        console.log(values);
      }}
      onFinishFailed={(errorInfo) => {
        console.log(errorInfo);
      }}
    >
      <Form.Item<CreateCompany>
        label="Nome"
        name="name"
        rules={[
          {
            required: true,
            message: "É obrigatório que a empresa tenha um nome",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item<CreateCompany>
        label="Email"
        name="email"
        rules={[{ required: true, message: "É obrigatório um email" }]}
      >
        <Input type="email" />
      </Form.Item>
      <Form.Item<CreateCompany>
        label="Telefone"
        name="phone"
        rules={[
          {
            required: true,
            message: "É obrigatório um número de telefone móvel",
          },
        ]}
      >
        <MaskedInput mask={"(00) 00000-0000"} />
      </Form.Item>
      <Form.Item<CreateCompany>
        label="Endereço"
        name="address"
        rules={[{ required: true, message: "É obrigatório um endereço" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<CreateCompany>
        label="Endereço"
        name="address"
        rules={[{ required: true, message: "É obrigatório um endereço" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<CreateCompany>
        label="Endereço"
        name="address"
        rules={[{ required: true, message: "É obrigatório um endereço" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<CreateCompany>
        label="Endereço"
        name="address"
        rules={[{ required: true, message: "É obrigatório um endereço" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<CreateCompany>
        label="Endereço"
        name="address"
        rules={[{ required: true, message: "É obrigatório um endereço" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<CreateCompany>
        label="Endereço"
        name="address"
        rules={[{ required: true, message: "É obrigatório um endereço" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<CreateCompany>
        label="Endereço"
        name="address"
        rules={[{ required: true, message: "É obrigatório um endereço" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<CreateCompany>
        label="Endereço"
        name="address"
        rules={[{ required: true, message: "É obrigatório um endereço" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<CreateCompany>
        label="Endereço"
        name="address"
        rules={[{ required: true, message: "É obrigatório um endereço" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<CreateCompany>
        label="Endereço"
        name="address"
        rules={[{ required: true, message: "É obrigatório um endereço" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<CreateCompany>
        label="Endereço"
        name="address"
        rules={[{ required: true, message: "É obrigatório um endereço" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<CreateCompany>
        label="Endereço"
        name="address"
        rules={[{ required: true, message: "É obrigatório um endereço" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item<CreateCompany>
        label="Endereço"
        name="address"
        rules={[{ required: true, message: "É obrigatório um endereço" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Salvar
        </Button>
      </Form.Item>
    </Form>
  );
}
