import { MoreOutlined } from "@ant-design/icons";
import { type Company } from "@prisma/client";
import { List, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const IconText = ({
  icon,
  text,
  targetId,
}: {
  icon: React.FC;
  text: string;
  targetId: number;
}) => (
  <Link href={`/company/${targetId}`}>
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  </Link>
);

export const CompanyList = ({ list }: { list: Company[] }) => {
  if (list.length === 0) return <p>Nenhuma empresa cadastrada</p>;

  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <IconText
                icon={MoreOutlined}
                text="Ver Mais Detalhes"
                key={item.id}
                targetId={item.id}
              />,
            ]}
            extra={
              <Image
                style={{ borderRadius: "15%" }}
                src={item.logo}
                width={150}
                height={150}
                alt="Logo da Empresa"
              />
            }
          >
            <List.Item.Meta title={item.name} />
            <p>Endereço: {item.address}</p>
            <p>Telefone: {item.phone}</p>
          </List.Item>
        )}
      ></List>
    </>
  );
};
