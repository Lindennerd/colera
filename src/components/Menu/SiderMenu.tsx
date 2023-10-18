import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";

export const SiderMenu = () => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["4"]}
      items={[
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
        UserOutlined,
      ].map((icon, index) => ({
        key: String(index + 1),
        icon: React.createElement(icon),
        label: `nav ${index + 1}`,
      }))}
    />
  );
};
