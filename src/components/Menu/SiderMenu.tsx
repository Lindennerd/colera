import { SettingOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { type ItemType } from "antd/es/menu/hooks/useItems";
import { useCompanyContext } from "~/context/useCompanyContext";

const menus: ItemType[] = [
  { key: "1", label: "Clientes", icon: <UserOutlined /> },
  { key: "2", label: "Configurações", icon: <SettingOutlined /> },
];

export const SiderMenu = () => {
  const { company } = useCompanyContext();

  return <Menu mode="inline" defaultSelectedKeys={["4"]} items={menus} />;
};
