import React from "react";
import AdminSidebar from "../../components/admin/sections/AdminSidebar";
import { Outlet } from "react-router";
import AppHeader from "../../components/common/AppHeader";
import AppFooter from "../../components/common/AppFooter";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="wrapper d-flex flex-column  w-full ml-64">
        <AppHeader title="Admin Dashboard"/>
        <div className="body flex-grow-1 min-h-[677.5px]">
          <Outlet />
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default AdminDashboard;
