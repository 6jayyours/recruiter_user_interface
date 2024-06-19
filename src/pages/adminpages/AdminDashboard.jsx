import React from "react";
import AdminSidebar from "../../components/admin/sections/AdminSidebar";
import AppHeader from "../../components/admin/sections/AppHeader";
import AppFooter from "../../components/admin/sections/AppFooter";
import { Outlet } from "react-router";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen">
      <AdminSidebar />
      <div className="wrapper d-flex flex-column  w-full ml-64">
        <AppHeader />
        <div className="body flex-grow-1 min-h-[677.5px]">
          <Outlet />
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default AdminDashboard;
