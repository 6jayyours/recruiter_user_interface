import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/commonpages/Landing";
import App from "../App.jsx";
import About from "../pages/commonpages/About.jsx";
import Contact from "../pages/commonpages/Contact.jsx";
import Login from "../components/common/Login.jsx";
import UserRegister from "../components/common/UserRegister.jsx";
import HirerRegister from "../components/common/HirerRegister.jsx";
import Jobs from "../pages/userpages/Jobs.jsx";
import AdminDashboard from "../pages/adminpages/AdminDashboard.jsx";
import Dashboard from "../components/admin/sections/Dashboard.jsx";
import Userslist from "../components/admin/Userslist.jsx"
import Joblist from "../components/admin/Joblist.jsx";
import Recruiterslist from "../components/admin/Recruiterslist.jsx";
import Applicationlist from "../components/admin/Applicationlist.jsx";
import AdminProfile from "../components/admin/AdminProfile.jsx";
import AdminSettings from "../components/admin/AdminSettings.jsx";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/userRegistration", element: <UserRegister /> },
  { path: "/hirerRegistration", element: <HirerRegister /> },

  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/jobs", element: <Jobs /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminDashboard/>,
    children: [
      {path: "dashboard", element: <Dashboard />},
      {path: "users", element: <Userslist />},
      {path: "recruiters", element: <Recruiterslist />},
      {path: "jobs", element: <Joblist />},
      {path: "applications", element: <Applicationlist />},
      {path: "profile", element: <AdminProfile />},
      {path: "settings", element: <AdminSettings />},
    ],
  },

]);

export default router;
