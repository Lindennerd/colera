import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Image,
  Input,
  Space,
  Typography,
  Upload,
  message,
} from "antd";
import { MaskedInput } from "antd-mask-input";
import type { UploadChangeParam } from "antd/es/upload";
import type { UploadFile, UploadProps } from "antd/es/upload/interface";
import { useState } from "react";
import { useImageUpload } from "~/hooks/useImageUpload";
import { type CreateCompany } from "~/server/api/routers/company/createCompany";
import { upload } from "~/supabase/client";
import { api } from "~/utils/api";

export interface CompanyFormProps {
  company?: CreateCompany;
}

export default function CompanyForm(props: CompanyFormProps) {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [file, setFile] = useState<File>();
  const { getBase64, beforeUpload } = useImageUpload();
  const [messageApi, contextHolder] = message.useMessage();

  const { mutate, isLoading } = api.company.createCompany.useMutation();
  const { mutate: mutateUpload } = api.company.setCompanyLogo.useMutation();

  const initialValues = {} as CreateCompany;

  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      setFile(info.file.originFileObj);
      getBase64(info.file.originFileObj!, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  async function mutationSuccess(companyId: number) {
    void messageApi.success("Empresa cadastrada com sucesso!");
    if (!imageUrl || !file) return;
    const url = await upload(file, companyId);
    mutateUpload({ companyId, logo: url });
  }

  function handleSubmit(company: CreateCompany) {
    mutate(company, {
      onSuccess: (data) => void mutationSuccess(data.id),
      onError: () => void messageApi.error("Erro ao cadastrar empresa!"),
    });
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload Logo</div>
    </div>
  );

  return (
    <>
      {contextHolder}
      <Typography.Title level={3}>Cadastro de Empresa</Typography.Title>
      <Form
        layout="vertical"
        labelAlign="left"
        labelCol={{ span: 2 }}
        name="Nova Empresa"
        initialValues={props.company ?? initialValues}
        onFinish={handleSubmit}
      >
        <Upload<CreateCompany>
          name="logo"
          listType="picture-card"
          showUploadList={false}
          className="avatar-uploader"
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? <Image src={imageUrl} alt="logo" /> : uploadButton}
        </Upload>

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
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit" loading={isLoading}>
              Salvar
            </Button>
            <Button type="default">Cancelar</Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  );
}
