import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#45398b",
    colorInfo: "#45398b",
    colorSuccess: "#15a14b",
    colorWarning: "#dfaf11",
    colorError: "#d24659",
    wireframe: true,
  },
  components: {
    Menu: {
      colorBgContainer: "rgb(69, 57, 139)",
      colorText: "rgba(255, 255, 255, 0.88)",
      controlItemBgActive: "rgb(218, 207, 238)",
      colorPrimary: "rgb(255, 255, 255)",
      colorTextDescription: "rgba(255, 255, 255, 0.45)",
      itemSelectedBg: "rgb(97,90,140)",
    },
    Layout: {
      siderBg: "rgb(69, 57, 139)",
      headerBg: "rgb(97,90,140)",
    },
  },
};

export default theme;
