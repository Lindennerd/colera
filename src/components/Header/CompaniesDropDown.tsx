import {
  CheckCircleOutlined,
  DownOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { type ItemType } from "antd/es/menu/hooks/useItems";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useCompanyContext } from "~/context/useCompanyContext";
import { api } from "~/utils/api";

export const CompaniesDropdown = () => {
  const { data: sessionData } = useSession();
  const { company: selectedCompany, setCompany } = useCompanyContext();
  const { data: companiesForUser } = api.company.getCompaniesForUser.useQuery(
    undefined,
    { enabled: sessionData?.user !== undefined }
  );

  const defaultItems: ItemType[] = useMemo(
    () => [
      { type: "divider" },
      {
        key: "-1",
        label: <Link href="/company/create">Nova Empresa</Link>,
        icon: <PlusCircleOutlined />,
      },
    ],
    []
  );

  const [items, setItems] = useState<ItemType[]>([]);

  useEffect(() => {
    if (!companiesForUser) return;

    setItems(() => [
      ...companiesForUser.map((company) => ({
        key: company.id,
        label: <a onClick={(_) => setCompany(company)}>{company.name}</a>,
        icon: (
          <>
            {company.id === selectedCompany.id ? (
              <CheckCircleOutlined />
            ) : (
              <></>
            )}
          </>
        ),
      })),
      ...defaultItems,
    ]);
  }, [companiesForUser, defaultItems, setCompany]);

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
