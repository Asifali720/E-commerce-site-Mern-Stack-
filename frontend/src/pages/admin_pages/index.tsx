import React from "react";
import Login from "../../components/admin_panel_components/login/Login";
import Layout from "../../components/admin_panel_components/Layout";
import {
  DataContext,
  DataProviderProps,
} from "../../components/context/DataProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add from "./Add";
import List from "./List";
import Order from "./Order";

const AdminPanel = () => {
  const { token, setToken } = React.useContext(
    DataContext
  ) as DataProviderProps;

  React.useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  return (
    <>
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </Layout>
      )}
    </>
  );
};

export default AdminPanel;
