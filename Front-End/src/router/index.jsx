import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Root from "../layout/layout";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Loading from "../pages/Loading/Loading";
import { Profile } from "../pages/Profile/Profile";
import Logout from "../pages/Logout/Logout";

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path:'/',
        element: <Login />,
      },
      {
        path: '/Loading',
        element: <Loading />
      },
      {
        path:'/Home',
        element: <Home />, 
      },
      {
        path:'/Profile',
        element: <Profile />, 
      },
      {
        path:'/About',
        element: <About />
      },
      {
        path:'/Logout',
        element: <Logout />
      }
    ]
  }
])

export default router