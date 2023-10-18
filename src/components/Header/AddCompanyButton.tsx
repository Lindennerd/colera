import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/router";

export const AddCompanyButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={(e) => router.push("/company/create")}
      type="text"
      style={{ color: "#fff" }}
      icon={<PlusCircleOutlined />}
    ></Button>
  );
};
