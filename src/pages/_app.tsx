import { ConfigProvider } from "antd";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import theme from "~/theme/theme.config";
import { api } from "~/utils/api";

import { MainLayout } from "~/components/MainLayout";
import { CompanyProvider } from "~/context/useCompanyContext";
import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ConfigProvider theme={theme}>
        <CompanyProvider>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </CompanyProvider>
      </ConfigProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
