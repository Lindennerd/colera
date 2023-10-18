import { DownOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { type ItemType } from "antd/es/menu/hooks/useItems";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { api } from "~/utils/api";

export const CompaniesDropdown = () => {
  const { data: sessionData } = useSession();
  const { data: companiesForUser } = api.company.getCompaniesForUser.useQuery(
    undefined,
    { enabled: sessionData?.user !== undefined }
  );

  const [items, setItems] = useState<ItemType[]>([
    {
      key: "-1",
      label: <Link href="company/create">Nova Empresa</Link>,
      icon: <PlusCircleOutlined />,
    },
    { type: "divider" },
  ]);

  useEffect(() => {
    if (!companiesForUser) return;

    setItems(
      companiesForUser.map((company) => ({
        key: company.id,
        label: company.name,
      }))
    );
  }, [companiesForUser]);

  if (!sessionData) return <></>;

  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()} style={{ color: "#fff" }}>
        <Space>
          Empresas
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};
