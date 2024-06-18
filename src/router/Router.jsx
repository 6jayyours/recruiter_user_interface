import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/commonpages/Landing";
import App from "../App.jsx";
import About from "../pages/commonpages/About.jsx";
import Contact from "../pages/commonpages/Contact.jsx";
import Login from "../components/common/Login.jsx";
import UserRegister from "../components/common/UserRegister.jsx";
import HirerRegister from "../components/common/HirerRegister.jsx";

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
    ],
  },

]);

export default router;
