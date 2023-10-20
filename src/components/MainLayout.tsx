import { Image, Layout, theme } from "antd";

import Link from "next/link";
import Logo from "public/BrunaReisLogo.svg";
import React from "react";
import { useCompanyContext } from "~/context/useCompanyContext";
import { BreadCrumbNav } from "./Breadcrumb/BreadcrumbNav";
import { HeaderMenu } from "./Menu/HeaderMenu";
import { SiderMenu } from "./Menu/SiderMenu";

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "rgb(130 119 198)",
  width: "100%",
  position: "absolute",
  bottom: 10,
};

const contentStyles: React.CSSProperties = {
  padding: "1rem",
  height: "100%",
  overflow: "auto",
};

const breadcrumbStyles: React.CSSProperties = {
  marginBottom: "1rem",
  marginLeft: "1rem",
};

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { company } = useCompanyContext();

  return (
    <Layout hasSider style={{ height: "100vh", overflow: "auto" }}>
      <Layout.Sider breakpoint="lg" collapsedWidth="0">
        <Link href="/">
          <Image
            preview={false}
            src={company.logo ?? (Logo as { src: string }).src}
            style={{ padding: "1rem", borderRadius: "15%" }}
            alt="Bruna Reis Logo"
          />
        </Link>
        <SiderMenu />
        <div style={footerStyle}>Cólera CRM ©2023</div>
      </Layout.Sider>
      <Layout>
        <Layout.Header>
          <HeaderMenu />
        </Layout.Header>
        <Layout.Content style={contentStyles}>
          <div style={breadcrumbStyles}>
            <BreadCrumbNav />
          </div>
          <div
            style={{
              backgroundColor: colorBgContainer,
              padding: "1rem",
              borderRadius: "1%",
            }}
          >
            {children}
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
