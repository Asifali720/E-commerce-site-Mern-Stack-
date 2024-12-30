import React from "react";
import Login from "../../components/admin_panel_components/login/Login";
import Layout from "../../components/admin_panel_components/Layout";

const AdminPanel = () => {
  const [token, setToken] = React.useState<string>("");
  return (
    <>
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <Layout>
          <div>I am login</div>
        </Layout>
      )}
    </>
  );
};

export default AdminPanel;
