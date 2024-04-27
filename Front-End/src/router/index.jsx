import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Friends from "../pages/Friends/Friends";
import Root from "../layout/layout";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import Loading from "../pages/Loading/Loading";
import { Profile } from "../pages/Profile/Profile";

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
        path: '/Friends',
        element: <Friends />
      }
    ]
  }
])

export default router