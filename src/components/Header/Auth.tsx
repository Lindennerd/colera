import { Avatar, Button, Space } from "antd";
import { signIn, signOut, useSession } from "next-auth/react";

export const Auth = () => {
  const { data: sessionData } = useSession();

  function handleSignIn() {
    signIn("auth0").catch((error) => {
      console.error(error);
    });
  }

  function handleSignOut() {
    signOut().catch((error) => {
      console.error(error);
    });
  }

  return (
    <Space direction="vertical" size={16}>
      <Space wrap size={16}>
        {sessionData ? (
          <>
            <Button
              type="text"
              style={{ color: "#fff" }}
              onClick={handleSignOut}
            >
              Sair
            </Button>
            <Avatar size="large" src={sessionData.user?.image} />
          </>
        ) : (
          <>
            <Button
              type="text"
              style={{ color: "#fff" }}
              onClick={handleSignIn}
            >
              Login
            </Button>
          </>
        )}
      </Space>
    </Space>
  );
};
